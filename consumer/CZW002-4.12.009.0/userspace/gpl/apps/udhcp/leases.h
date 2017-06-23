/* leases.h */
#ifndef _LEASES_H
#define _LEASES_H
#if 1 //__CTLK__, Eric, merge from Q1000Z
#include "cms_msg.h"
#endif


struct dhcpOfferedAddr {
#if 1 //__CTLK__, Eric, merge from Q1000Z
	u_int8_t isStatic;
#endif
	u_int8_t chaddr[16];
	u_int32_t yiaddr;	/* network order */
	u_int32_t expires;	/* host order */
	char hostname[64];
	// BRCM
	char vendorid[256]; /* vendor class id, option 60, rfc 2132, max length is 255.  We add 1 for the null. */
#if 1 //__CTLK__, Eric, merge from Q1000Z
	char mac_addr[20];
	char clientid[256];
	char vsi[256];
#endif
	char classid[256];  /* user class id, option 77, rfc 3004, max length is 255.  We add 1 for the null. */
   char oui[8];
   char serialNumber[64];
   char productClass[64];
#if 1 //__CTLK__, Eric, merge from Q1000Z
   char source_port[32];
#endif
};


void clear_lease(u_int8_t *chaddr, u_int32_t yiaddr);
#if 1 //__CTLK__, Eric, merge from Q1000Z
struct dhcpOfferedAddr *add_lease(u_int8_t *chaddr, u_int32_t yiaddr, unsigned long lease, u_int8_t isStatic);
#else
struct dhcpOfferedAddr *add_lease(u_int8_t *chaddr, u_int32_t yiaddr, unsigned long lease);
#endif
int lease_expired(struct dhcpOfferedAddr *lease);
int lease_time_remaining(const struct dhcpOfferedAddr *lease);
struct dhcpOfferedAddr *oldest_expired_lease(void);
struct dhcpOfferedAddr *find_lease_by_chaddr(u_int8_t *chaddr);
struct dhcpOfferedAddr *find_lease_by_yiaddr(u_int32_t yiaddr);
#if 1 //__CTLK__, Thief
u_int32_t find_address(int check_expired, int check_active);
#else
u_int32_t find_address(int check_expired);
#endif
struct iface_config_t *find_iface_by_ifname(const char *name);
int check_ip(u_int32_t addr);
void adjust_lease_time(long delta);

#if 1 //__CTLK__, Eric, merge from Q1000Z
void checkStaticHosts(u_int8_t *chaddr);
void handleHostInfoUpdate(CmsMsgHeader *msg);
#endif

#endif
