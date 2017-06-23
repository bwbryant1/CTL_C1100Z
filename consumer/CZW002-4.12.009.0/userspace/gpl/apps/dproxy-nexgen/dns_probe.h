#ifndef _DNS_PROBE_H_
#define _DNS_PROBE_H_

/* Passive mode macros */
#if 1 // __CLTK__, TengChang, refer to Q1000Z
#define DNS_RECOVER_TIMEOUT 120
#else
#define DNS_RECOVER_TIMEOUT 30
#endif

extern int dns_probe(void);
extern int dns_probe_init(void);
extern int dns_probe_is_primary_up(void);
extern void dns_probe_switchback(void);
extern int dns_probe_response(dns_request_t *m);
extern int dns_probe_activate(uint32_t name_server);
#ifndef DNS_PROBE
extern void dns_probe_set_recover_time(void);
#endif

#endif /* _DNS_PROBE_H_ */
