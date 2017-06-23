#ifndef _SERVERPACKET_H
#define _SERVERPACKET_H


int sendOffer(struct dhcpMessage *oldpacket);
#if 1 //__CTLK__, TengChang, refer to Q1000Z
struct dhcpOfferedAddr *sendNAK(struct dhcpMessage *oldpacket);
#else
int sendNAK(struct dhcpMessage *oldpacket);
#endif
int sendACK(struct dhcpMessage *oldpacket, u_int32_t yiaddr);
int send_inform(struct dhcpMessage *oldpacket);


#endif
