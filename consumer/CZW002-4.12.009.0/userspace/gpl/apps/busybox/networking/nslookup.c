/* vi: set sw=4 ts=4: */
/*
 * Mini nslookup implementation for busybox
 *
 * Copyright (C) 1999,2000 by Lineo, inc. and John Beppu
 * Copyright (C) 1999,2000,2001 by John Beppu <beppu@codepoet.org>
 *
 * Correct default name server display and explicit name server option
 * added by Ben Zeckel <bzeckel@hmc.edu> June 2001
 *
 * Licensed under GPLv2 or later, see file LICENSE in this tarball for details.
 */

#include <resolv.h>
#include "libbb.h"

#if 1 // __CenturyLink__, Hong-Yu
#include <sys/types.h>
#include <netinet/in.h>
#include <arpa/nameser.h>
#include <time.h>

#ifdef BRCM_CMS_BUILD
#include "cms_msg.h"
#include "cms_util.h"
#endif

#define NS_TYPE_ELT						0x40 /*%< EDNS0 extended label type */
#define DNS_LABELTYPE_BITSTRING			0x41

void *msgHandle = NULL;

char *months[] = {
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
};
#endif

/*
 * I'm only implementing non-interactive mode;
 * I totally forgot nslookup even had an interactive mode.
 *
 * This applet is the only user of res_init(). Without it,
 * you may avoid pulling in _res global from libc.
 */

/* Examples of 'standard' nslookup output
 * $ nslookup yahoo.com
 * Server:         128.193.0.10
 * Address:        128.193.0.10#53
 *
 * Non-authoritative answer:
 * Name:   yahoo.com
 * Address: 216.109.112.135
 * Name:   yahoo.com
 * Address: 66.94.234.13
 *
 * $ nslookup 204.152.191.37
 * Server:         128.193.4.20
 * Address:        128.193.4.20#53
 *
 * Non-authoritative answer:
 * 37.191.152.204.in-addr.arpa     canonical name = 37.32-27.191.152.204.in-addr.arpa.
 * 37.32-27.191.152.204.in-addr.arpa       name = zeus-pub2.kernel.org.
 *
 * Authoritative answers can be found from:
 * 32-27.191.152.204.in-addr.arpa  nameserver = ns1.kernel.org.
 * 32-27.191.152.204.in-addr.arpa  nameserver = ns2.kernel.org.
 * 32-27.191.152.204.in-addr.arpa  nameserver = ns3.kernel.org.
 * ns1.kernel.org  internet address = 140.211.167.34
 * ns2.kernel.org  internet address = 204.152.191.4
 * ns3.kernel.org  internet address = 204.152.191.36
 */

static int print_host(const char *hostname, const char *header)
{
	/* We can't use xhost2sockaddr() - we want to get ALL addresses,
	 * not just one */
	struct addrinfo *result = NULL;
	int rc;
	struct addrinfo hint;

	memset(&hint, 0 , sizeof(hint));
	/* hint.ai_family = AF_UNSPEC; - zero anyway */
	/* Needed. Or else we will get each address thrice (or more)
	 * for each possible socket type (tcp,udp,raw...): */
	hint.ai_socktype = SOCK_STREAM;
	// hint.ai_flags = AI_CANONNAME;
	rc = getaddrinfo(hostname, NULL /*service*/, &hint, &result);

	if (!rc) {
		struct addrinfo *cur = result;
		unsigned cnt = 0;

		printf("%-10s %s\n", header, hostname);
		// puts(cur->ai_canonname); ?
		while (cur) {
			char *dotted, *revhost;
			dotted = xmalloc_sockaddr2dotted_noport(cur->ai_addr);
			revhost = xmalloc_sockaddr2hostonly_noport(cur->ai_addr);

			printf("Address %u: %s%c", ++cnt, dotted, revhost ? ' ' : '\n');
			if (revhost) {
				puts(revhost);
				if (ENABLE_FEATURE_CLEAN_UP)
					free(revhost);
			}
			if (ENABLE_FEATURE_CLEAN_UP)
				free(dotted);
			cur = cur->ai_next;
		}
	} else {
#if ENABLE_VERBOSE_RESOLUTION_ERRORS
		bb_error_msg("can't resolve '%s': %s", hostname, gai_strerror(rc));
#else
		bb_error_msg("can't resolve '%s'", hostname);
#endif
	}
	if (ENABLE_FEATURE_CLEAN_UP)
		freeaddrinfo(result);
	return (rc != 0);
}

/* lookup the default nameserver and display it */
static void server_print(void)
{
	char *server;
	struct sockaddr *sa;

#if ENABLE_FEATURE_IPV6
	sa = (struct sockaddr*)_res._u._ext.nsaddrs[0];
	if (!sa)
#endif
		sa = (struct sockaddr*)&_res.nsaddr_list[0];
	server = xmalloc_sockaddr2dotted_noport(sa);

	print_host(server, "Server:");
	if (ENABLE_FEATURE_CLEAN_UP)
		free(server);
	bb_putchar('\n');
}

/* alter the global _res nameserver structure to use
   an explicit dns server instead of what is in /etc/resolv.conf */
static void set_default_dns(const char *server)
{
	len_and_sockaddr *lsa;

	/* NB: this works even with, say, "[::1]:5353"! :) */
	lsa = xhost2sockaddr(server, 53);

	if (lsa->u.sa.sa_family == AF_INET) {
		_res.nscount = 1;
		/* struct copy */
		_res.nsaddr_list[0] = lsa->u.sin;
	}
#if ENABLE_FEATURE_IPV6
	/* Hoped libc can cope with IPv4 address there too.
	 * No such luck, glibc 2.4 segfaults even with IPv6,
	 * maybe I misunderstand how to make glibc use IPv6 addr?
	 * (uclibc 0.9.31+ should work) */
	if (lsa->u.sa.sa_family == AF_INET6) {
		// glibc neither SEGVs nor sends any dgrams with this
		// (strace shows no socket ops):
		//_res.nscount = 0;
		_res._u._ext.nscount = 1;
		/* store a pointer to part of malloc'ed lsa */
		_res._u._ext.nsaddrs[0] = &lsa->u.sin6;
		/* must not free(lsa)! */
	}
#endif
}

#if 1 // __CenturyLink__, Hong-Yu
static int get_label_len(const unsigned char *lp)
{
	int bitlen;
	u_char l = *lp;
 
	if ((l & NS_CMPRSFLGS) == NS_CMPRSFLGS) {
		/* should be avoided by the caller */
		return -1;
	}

	if ((l & NS_CMPRSFLGS) == NS_TYPE_ELT) {
		if (l == DNS_LABELTYPE_BITSTRING) {
			if ((bitlen = *(lp + 1)) == 0)
				bitlen = 256;
			return ((bitlen + 7 ) / 8 + 1);
		}

		return -1; /*%< unknwon ELT */
	}
	return l;
}

static int skip_name(const unsigned char **ptr, const unsigned char *eom)
{
	unsigned char *cp;
	unsigned int n;
	int l;

	cp = *ptr;
	while (cp < eom && (n = *cp++) != 0) {
		/* Check for indirection. */
		switch (n & NS_CMPRSFLGS) {
			case 0: /*%< normal case, n == len */
				cp += n;
				continue;
			case NS_TYPE_ELT: /*%< EDNS0 extended label */
				if ((l = get_label_len(cp - 1)) < 0)
					return -1;
				cp += l;
				continue;
			case NS_CMPRSFLGS: /*%< indirection */
				cp++;
				break;
			efault: /*%< illegal type */
				return -1;
		}

		break;
	}
	if (cp > eom)
		return -1;

	*ptr = cp;
	return 0;
}

static int dns_skip_name(const unsigned char *ptr, const unsigned char *eom)
{
	unsigned char *saveptr = ptr;

	if (skip_name(&ptr, eom) == -1)
		return -1;

	return (ptr - saveptr);
}

static char **get_txt_records(char *hostname, time_t *now)
{
	int len = 0, skip, i, j, n, k, m;
	int ancount, qdcount, type, class, ans_len;
	unsigned char answer[1024];
	unsigned char *message, *eom, *eor;
	char **list, *dst;
	HEADER *hp;

	memset(answer, 0, 1024);
	if ((len = res_query(hostname, C_IN, T_TXT, answer, 1024)) < 0) {
		bb_error_msg("Can't query %s by TXT type\n", hostname);
		return NULL;
	}

	time(now);
	hp = (HEADER *) answer;
	message = answer + sizeof(HEADER);
	ancount = ntohs(hp->ancount);
	qdcount = ntohs(hp->qdcount);
	eom = answer + len;

	/* Skip questions, trying to get to the answer section */
	for (i = 0; i < qdcount; i++) {
		skip = dns_skip_name(message, eom);
		if (skip < 0 || (message + skip + QFIXEDSZ) > eom)
			return NULL;
		message += skip + QFIXEDSZ;
	}

	/* Allocate space for the text record answers. */
	list = malloc((ancount + 1) * sizeof(char *));
	if (!list)
		return NULL;

	/* Parse the answers. */
	j = 0;
	for (i = 0; i < ancount; i++) {
		/* Parse the header of this answer. */
		skip = dns_skip_name(message, eom);
		if (skip < 0 || (message + skip + 10) > eom){
#if 1 //__CTLK__, Thief
			for(m = 0; m < j; m++)
				free(list[m]);
			free(list);
#endif
			return NULL;
		}
		type = message[skip + 0] << 8 | message[skip + 1];
		class = message[skip + 2] << 8 | message[skip + 3];
		ans_len = message[skip + 8] << 8 | message[skip + 9];
		message += skip + 10;

		/* Skip entries of the wrong class and type. */
		if (class != C_IN || type != T_TXT) {
			message += ans_len;
			continue;
		}
		/* Allocate space for this answer. */
		list[j] = malloc((size_t) ans_len);
		if (!list[j])
			break;

		dst = list[j++];

		/* Copy answer data into the allocated area. */
		eor = message + ans_len;
		k = 0;
		while (message < eor) {
			n = (unsigned char) *message++;
			if (message + n > eor)
				break;

			memcpy(dst, message, (size_t)n);
			message += n;
			dst += n;
			if (k != 0) {
				*dst = ' ';
				dst++;
			}
			k++;
		}
		if (message < eor)
			break;
		*dst = 0;
	}

	if (i < ancount) {
		for (i = 0; i < j; i++)
			free(list[i]);
		free(list);
		return NULL;
	}
	if (j == 0) {
		free(list);
		return NULL;
	}

	list[j] = NULL;
	return list;
}

static void parse_txt_info(char *led_color, char *wg_instance, char *message, char *txt)
{
	char buf[256] = {0};
	char *token, *pLast;
	char *content;

	led_color[0] = 0;
	wg_instance[0] = 0;
	message[0] = 0;
	strcpy(buf, txt);
	// token = strtok_r(buf, "\n", &pLast);
	token = strtok_r(buf, ",", &pLast);
	while (token) {
		content = strstr(token, "=");
		if (content == NULL)
			return -1;

		*content = 0;
		content += 1;
		if (strcmp(token, "inet_led_color") == 0) {
			strcpy(led_color, content);
		} else if (strcmp(token, "wg_instance") == 0) {
			strcpy(wg_instance, content);
		} else if (strcmp(token, "network_message") == 0) {
			strcpy(message, content);
		} else {
			bb_error_msg("Unknown TXT information: %s\n", token);
		}

		// token = strtok_r(NULL, "\n", &pLast);
		token = strtok_r(NULL, ",", &pLast);
	}
}

static void get_day(struct tm *gt, char *day)
{
	day[0] = 0;

	if (gt->tm_mday == 1)
		sprintf(day, "%dst", gt->tm_mday);
	else if (gt->tm_mday == 2)
		sprintf(day, "%dnd", gt->tm_mday);
	else if (gt->tm_mday >= 3 && gt->tm_mday <= 31)
		sprintf(day, "%dth", gt->tm_mday);
	else
		bb_error_msg("Unknown day: %d\n", gt->tm_mday);

	return;
}

static void get_time(struct tm *gt, char *time)
{
	time[0] = 0;

	if (gt->tm_hour == 12)
		sprintf(time, "%d:%d&nbsp;PM", gt->tm_hour, gt->tm_min);
	else if (gt->tm_hour > 12 && gt->tm_hour < 24)
		sprintf(time, "%d:%d&nbsp;PM", (gt->tm_hour - 12), gt->tm_min);
	else if (gt->tm_hour < 12)
		sprintf(time, "%d:%d&nbsp;AM", gt->tm_hour, gt->tm_min);
	else
		bb_error_msg("Unknown hour: %d\n", gt->tm_hour);

	return;
}

static void send_led_info(int timeout, int isNormal, char *color, char *wg, char *msg)
{
	char buf[sizeof(CmsMsgHeader) + sizeof(smartLedUpdateMsgBody)] = {0};
	CmsMsgHeader *hdr = (CmsMsgHeader *) buf;
	smartLedUpdateMsgBody *body = (smartLedUpdateMsgBody *) (hdr + 1);
	CmsRet ret;

	if ((ret = cmsMsg_init(EID_NSLOOKUP, &msgHandle)) != CMSRET_SUCCESS)
	{
		cmsLog_error("cmsMsg_init failed, ret=%d", ret);
		return;
	}

	hdr->type = CMS_MSG_SMART_LED_UPDATE;
	hdr->src = EID_NSLOOKUP;
	hdr->dst = EID_SSK;
	hdr->flags_event = 1;
	hdr->dataLength = sizeof(DhcpdHostInfoMsgBody);

	body->timeout = timeout;
	if (!timeout) {
        body->isNormal = isNormal;
		snprintf(body->color, sizeof(body->color), color);
		snprintf(body->wg_instance, sizeof(body->wg_instance), wg);
		snprintf(body->message, sizeof(body->message), msg);
	}

	if ((ret = cmsMsg_send(msgHandle, hdr)) != CMSRET_SUCCESS)
	{
		cmsLog_debug("Could not send out CMS_MSG_SMART_LED_UPDATE, ret=%d", ret);
	}
	else
	{
		cmsLog_debug("Sent out CMS_MSG_SMART_LED_UPDATE, color=%s, wg=%s, msg=%s", body->color, body->wg_instance, body->message);
	}

	cmsMsg_cleanup(&msgHandle);
	return;
}

static int do_smart_led(char *hostname)
{
	char **list;
	char led_color[32] = {0}, wg_instance[64] = {0}, message[128] = {0};
	char date[32], time[16], day[8];
	time_t now;
	struct tm *gt;
	int i = 0, normal = 0;
	FILE *web_fp;

	list = get_txt_records(hostname, &now);
	if (list == NULL) {
		send_led_info(1, 1, NULL, NULL, NULL);
		return 1;
	} else {
		if ((web_fp = fopen("/var/smart_led_web", "a+")) == NULL) {
#if 1 //__CTLK__, Thief
			while (list[i] != NULL) {
				free(list[i]);
			    i++;
		    }
			free(list);
#endif
			bb_error_msg("Can not open file /var/smart_led_web\n");
			return -1;
		}

		gt = localtime(&now);
		get_day(gt, day);
		get_time(gt, time);
		sprintf(date, "%s&nbsp;%s,&nbsp;%04d", months[gt->tm_mon], day, (gt->tm_year + 1900));

		while (list[i] != NULL) {
			parse_txt_info(led_color, wg_instance, message, list[i]);

			if (strlen(led_color) && strlen(wg_instance) && strlen(message)) { // special case
				cmsLed_setInternetLed(led_color);
				bb_info_msg("Smart LED: receive special DNS response\n");
			} else { // normal case
				normal = 1;
				cmsLed_setInternetLed("green");
			}

			if (!normal)
				fprintf(web_fp, "%s/%s/%s\n", led_color, date, time);

			send_led_info(0, normal, led_color, wg_instance, message);
			
			free(list[i]);
			i++;
		}

		free(list);
		fclose(web_fp);
	}

	if (normal == 1) {
		bb_info_msg("Smart LED: receive normal DNS response\n");
	}

	return 0;
}
#endif

int nslookup_main(int argc, char **argv) MAIN_EXTERNALLY_VISIBLE;
int nslookup_main(int argc, char **argv)
{
	/* We allow 1 or 2 arguments.
	 * The first is the name to be looked up and the second is an
	 * optional DNS server with which to do the lookup.
	 * More than 3 arguments is an error to follow the pattern of the
	 * standard nslookup */
#if 1 // __CenturyLink__, Hong-Yu
	if (!argv[1] || argc > 3)
		bb_show_usage();
#else
	if (!argv[1] || argv[1][0] == '-' || argc > 3)
		bb_show_usage();
#endif

	/* initialize DNS structure _res used in printing the default
	 * name server and in the explicit name server option feature. */
	res_init();
	/* rfc2133 says this enables IPv6 lookups */
	/* (but it also says "may be enabled in /etc/resolv.conf") */
	/*_res.options |= RES_USE_INET6;*/

#if 1 // __CenturyLink__, Hong-Yu
	if (argv[2] && strcmp(argv[1], "txt") && strcmp(argv[1], "led"))
#else
	if (argv[2])
#endif
		set_default_dns(argv[2]);
#if 1 // __CenturyLink__, Hong-Yu
	else if (argv[2] && !strcmp(argv[1], "txt"))
		return do_smart_led(argv[2]);
    else if (argv[2] && !strcmp(argv[1], "led")) {
        cmsLed_setInternetLed(argv[2]);
        return 0;
    }
#endif

	server_print();
	return print_host(argv[1], "Name:");
}
