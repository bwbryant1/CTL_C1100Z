#ifndef CMS_DES_H_
#define CMS_DES_H_

#include "cms.h"

int desEncode(char *src, char **dst);
CmsRet desDecode(char *src, char **dst, int *len);

#ifdef SUPPORT_DES_KEYPASSPHRASE
#define PASSPHRASE DES_KEYPASSPHRASE
#else
#define PASSPHRASE "DES_PASSPHRASE"
#endif
#define DESPWDOUTFILE "/var/pwdOutFile"

#endif /*CMS_BASE64_H_*/
