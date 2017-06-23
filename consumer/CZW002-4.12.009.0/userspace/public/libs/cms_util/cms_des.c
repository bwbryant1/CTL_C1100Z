#include "cms.h"
#include "cms_util.h"
#include "cms_des.h"

void changeLineEach64char(char *str)
{
   int i=0, j=0;
   char strBuf[1024]= {0};
   for(i=0; i<strlen(str); i++)
   {
      if(i!=0 && (i%64)==0)
      {
         strBuf[j++]='\n';
      }
      strBuf[j++]=str[i];
   }
   strBuf[j]='\0';
   strcpy(str, strBuf);
}

int desEncode(char *src, char **dst)
{
   FILE *fp;
   char cmd[1024]= {0};
   char c;
   char *p=NULL;
   int len=0;
   int loop=0;
   char srcStr[1024]= {0};

   if( (src==NULL) || ( strlen(src) > (sizeof(cmd)-sizeof(PASSPHRASE)-30) ) ){
      return 0;
   }

   strcpy(srcStr, src);

   if(strlen(srcStr)>64)
      changeLineEach64char(srcStr);

   sprintf(cmd, "echo \"%s\" | openssl base64 -d | openssl des -k %s -a", srcStr, PASSPHRASE);
   for(loop=0; loop<2; loop++){
      len=0;
      fp = popen(cmd, "r");
      if(fp){
         while( (c = fgetc(fp) )!=EOF){
            if(loop==1)
               *(p++)=c;
            len++;
         }
         pclose(fp);
      }else{
         printf("ERROR: Decode fail");
         break;
      }
      if(loop==0){
         *dst = (char *)cmsMem_alloc(len, ALLOC_ZEROIZE);
         p = *dst;
      }
   }

   *(*dst+len-1) = '\0';

   return len;
}

CmsRet desDecode(char *src, char **dst, int *len)
{
   CmsRet ret = CMSRET_SUCCESS;
   char cmd[1024]= {0};
   char buf[1024]= {0};
   FILE *fp;

   fp = fopen(DESPWDOUTFILE, "w+");
   fprintf(fp,"%s\n", src);
   fclose(fp);

   sprintf(cmd, "openssl des -in %s -d -k %s -a", DESPWDOUTFILE, PASSPHRASE);
   fp = popen(cmd, "r");
   if(fp){
      fgets(buf, sizeof(buf), fp);
      pclose(fp);
      if(strlen(buf)==0)
         return CMSRET_INTERNAL_ERROR;
      if(buf[strlen(buf)-1]=='\n')
         buf[strlen(buf)-1]='\0';
      *len = strlen(buf)+1;
      *dst = (char *) cmsMem_alloc(strlen(buf)+1, ALLOC_ZEROIZE);
      strcpy(*dst, buf);
      remove(DESPWDOUTFILE);
   }else{
      ret = CMSRET_INTERNAL_ERROR;
   }
   return ret;
}
