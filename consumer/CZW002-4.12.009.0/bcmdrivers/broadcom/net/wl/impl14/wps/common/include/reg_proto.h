/*
 * Registrar protocol
 *
 * Copyright (C) 2012, Broadcom Corporation
 * All Rights Reserved.
 * 
 * This is UNPUBLISHED PROPRIETARY SOURCE CODE of Broadcom Corporation;
 * the contents of this file may not be disclosed to third parties, copied
 * or duplicated in any form, in whole or in part, without the prior
 * written permission of Broadcom Corporation.
 *
 * $Id: reg_proto.h 295630 2011-11-11 04:45:47Z $
 */

#ifndef _REGPROT_
#define _REGPROT_

#ifdef __cplusplus
extern "C" {
#endif

/* build message methods */
uint32 reg_proto_create_devinforsp(RegData *regInfo, BufferObj *msg);
uint32 reg_proto_create_m1(RegData *regInfo, BufferObj *msg);
uint32 reg_proto_create_ack(RegData *regInfo, BufferObj *msg, uint8 *regNonce);
uint32 reg_proto_create_nack(RegData *regInfo, BufferObj *msg, uint16 configError,
	uint8 *regNonce);

/* process message methods */
uint32 reg_proto_process_ack(RegData *regInfo, BufferObj *msg);
uint32 reg_proto_process_nack(RegData *regInfo, BufferObj *msg, uint16 *configError);

/* utility methods */
int reg_proto_BN_bn2bin(const BIGNUM *a, unsigned char *to);
uint32 reg_proto_generate_dhkeypair(DH **DHKeyPair);
uint32 reg_proto_generate_prebuild_dhkeypair(DH **DHKeyPair, uint8 *prebuild_privkey);
void reg_proto_generate_sha256hash(BufferObj *inBuf, BufferObj *outBuf);
void reg_proto_derivekey(BufferObj *KDK, BufferObj *prsnlString, uint32 keyBits, BufferObj *key);
bool reg_proto_validate_mac(BufferObj *data, uint8 *hmac, BufferObj *key);
bool reg_proto_validate_keywrapauth(BufferObj *data, uint8 *hmac, BufferObj *key);
void reg_proto_encrypt_data(BufferObj *plainText, BufferObj *encrKey, BufferObj *authKey,
	BufferObj *cipherText, BufferObj *iv);
void reg_proto_decrypt_data(BufferObj *cipherText, BufferObj *iv, BufferObj *encrKey,
	BufferObj *authKey, BufferObj *plainText);
uint32 reg_proto_generate_psk(IN uint32 length, OUT BufferObj *PSK);
uint32 reg_proto_check_nonce(IN uint8 *nonce, IN BufferObj *msg, IN int nonceType);
uint32 reg_proto_get_msg_type(uint32 *msgType, BufferObj *msg);
uint32 reg_proto_get_nonce(uint8 *nonce, BufferObj *msg, int nonceType);

uint32 reg_proto_vendor_ext_vp(DevInfo *devInfo, BufferObj *msg);

#ifdef MTS_WLAN_WPS_FOR_TR69 //__Qwest__, SinJia
int reg_proto_testDisplayCfg();
int reg_proto_testPushButtonCfg();
#endif
#ifdef __cplusplus
}
#endif

#endif /* _REGPROT_ */
