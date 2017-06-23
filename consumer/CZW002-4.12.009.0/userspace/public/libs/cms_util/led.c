/***********************************************************************
 *
 *  Copyright (c) 2006-2007  Broadcom Corporation
 *  All Rights Reserved
 *
<:label-BRCM:2012:DUAL/GPL:standard

This program is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License, version 2, as published by
the Free Software Foundation (the "GPL").

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.


A copy of the GPL is available at http://www.broadcom.com/licenses/GPLv2.php, or by
writing to the Free Software Foundation, Inc., 59 Temple Place - Suite 330,
Boston, MA 02111-1307, USA.

:>
 *
 ************************************************************************/

#include "cms.h"
#include "cms_util.h"
#include "cms_boardioctl.h"

#if 1 //__CTL__, KuanJung
#include "boardparms.h"
#endif

/*
 * See:
 * bcmdrivers/opensource/include/bcm963xx/board.h
 * bcmdrivers/opensource/char/board/bcm963xx/impl1/board.c and bcm63xx_led.c
 */

void cmsLed_setWanConnected(void)
{
   devCtl_boardIoctl(BOARD_IOCTL_LED_CTRL, 0, NULL, kLedWanData, kLedStateOn, NULL);
}


void cmsLed_setWanDisconnected(void)
{
   devCtl_boardIoctl(BOARD_IOCTL_LED_CTRL, 0, NULL, kLedWanData, kLedStateOff, NULL);
}


void cmsLed_setWanFailed(void)
{
   devCtl_boardIoctl(BOARD_IOCTL_LED_CTRL, 0, NULL, kLedWanData, kLedStateFail, NULL);
}

#if 1 // __CenturyLink__, Hong-Yu
void cmsLed_setInternetLed(char *color)
{
   if (strcmp(color, "red") == 0)
   {
      devCtl_boardIoctl(BOARD_IOCTL_LED_CTRL, PERSISTENT, "", kLedInetR, kLedStateOn, "");
      devCtl_boardIoctl(BOARD_IOCTL_SET_GPIO, PERSISTENT, "", BP_GPIO_22_AH, kLedStateOff, "");
      devCtl_boardIoctl(BOARD_IOCTL_LED_CTRL, PERSISTENT, "", kLedWanData, kLedStateOn, "");
   }
   else if (strcmp(color, "green") == 0)
   {
      devCtl_boardIoctl(BOARD_IOCTL_LED_CTRL, PERSISTENT, "", kLedInetR, kLedStateOff, "");
      devCtl_boardIoctl(BOARD_IOCTL_LED_CTRL, PERSISTENT, "", kLedWanData, kLedStateBlinkByPackets, "");
      devCtl_boardIoctl(BOARD_IOCTL_SET_GPIO, PERSISTENT, "", BP_GPIO_22_AH, kLedStateOn, "");
   }
   else if (strcmp(color, "amber-blink-with-packet") == 0)
   {
      devCtl_boardIoctl(BOARD_IOCTL_LED_CTRL, PERSISTENT, "", kLedWanData, kLedStateBlinkByPackets, "");
      devCtl_boardIoctl(BOARD_IOCTL_SET_GPIO, PERSISTENT, "", BP_GPIO_22_AH, kLedStateOn, "");
      devCtl_boardIoctl(BOARD_IOCTL_LED_CTRL, PERSISTENT, "", kLedInetR, kLedStateBlinkByPackets, "");
   }
   else if (strcmp(color, "amber") == 0)
   {
      devCtl_boardIoctl(BOARD_IOCTL_LED_CTRL, PERSISTENT, "", kLedWanData, kLedStateOn, "");
      devCtl_boardIoctl(BOARD_IOCTL_SET_GPIO, PERSISTENT, "", BP_GPIO_22_AH, kLedStateOn, "");
      devCtl_boardIoctl(BOARD_IOCTL_LED_CTRL, PERSISTENT, "", kLedInetR, kLedStateOn, "");
   }
   else if (strcmp(color, "off") == 0)
   {
	  devCtl_boardIoctl(BOARD_IOCTL_SET_GPIO, PERSISTENT, "", BP_GPIO_22_AH, kLedStateOff, "");
	  devCtl_boardIoctl(BOARD_IOCTL_LED_CTRL, PERSISTENT, "", kLedInetR, kLedStateOff, "");
	  devCtl_boardIoctl(BOARD_IOCTL_LED_CTRL, PERSISTENT, "", kLedWanData, kLedStateOn, "");
   }
   else if (strcmp(color, "red-blink") == 0)
   {
      devCtl_boardIoctl(BOARD_IOCTL_LED_CTRL, PERSISTENT, "", kLedInetR, kLedStateOn, "");
      devCtl_boardIoctl(BOARD_IOCTL_SET_GPIO, PERSISTENT, "", BP_GPIO_22_AH, kLedStateOff, "");
      devCtl_boardIoctl(BOARD_IOCTL_LED_CTRL, PERSISTENT, "", kLedWanData, kLedStateLongBlinkContinues, "");
   }
   else if (strcmp(color, "green-blink") == 0)
   {
      devCtl_boardIoctl(BOARD_IOCTL_LED_CTRL, PERSISTENT, "", kLedInetR, kLedStateOff, "");
      devCtl_boardIoctl(BOARD_IOCTL_SET_GPIO, PERSISTENT, "", BP_GPIO_22_AH, kLedStateOn, "");
      devCtl_boardIoctl(BOARD_IOCTL_LED_CTRL, PERSISTENT, "", kLedWanData, kLedStateLongBlinkContinues, "");
   }
   else if (strcmp(color, "amber-blink") == 0)
   {
      devCtl_boardIoctl(BOARD_IOCTL_LED_CTRL, PERSISTENT, "", kLedInetR, kLedStateOn, "");
      devCtl_boardIoctl(BOARD_IOCTL_SET_GPIO, PERSISTENT, "", BP_GPIO_22_AH, kLedStateOn, "");
      devCtl_boardIoctl(BOARD_IOCTL_LED_CTRL, PERSISTENT, "", kLedWanData, kLedStateLongBlinkContinues, "");
   }
   else if (strcmp(color, "red-green-alternate") == 0)
   {
      devCtl_boardIoctl(BOARD_IOCTL_SET_GPIO, PERSISTENT, "", BP_GPIO_22_AH, kLedStateOff, "");
      devCtl_boardIoctl(BOARD_IOCTL_LED_CTRL, PERSISTENT, "", kLedWanData, kLedStateOn, "");
      devCtl_boardIoctl(BOARD_IOCTL_LED_CTRL, PERSISTENT, "", kLedInetR, kLedStateAlternateBlinkContinues, "");
   }
   else if (strcmp(color, "red-flash") == 0)
   {
	  devCtl_boardIoctl(BOARD_IOCTL_LED_CTRL, PERSISTENT, "", kLedInetR, kLedStateOn, "");
	  devCtl_boardIoctl(BOARD_IOCTL_SET_GPIO, PERSISTENT, "", BP_GPIO_22_AH, kLedStateOff, "");
	  devCtl_boardIoctl(BOARD_IOCTL_LED_CTRL, PERSISTENT, "", kLedWanData, kLedStateFlashBlinkContinues, "");
   }
   else if (strcmp(color, "green-flash") == 0)
   {
      devCtl_boardIoctl(BOARD_IOCTL_LED_CTRL, PERSISTENT, "", kLedInetR, kLedStateOff, "");
      devCtl_boardIoctl(BOARD_IOCTL_SET_GPIO, PERSISTENT, "", BP_GPIO_22_AH, kLedStateOn, "");
      devCtl_boardIoctl(BOARD_IOCTL_LED_CTRL, PERSISTENT, "", kLedWanData, kLedStateFlashBlinkContinues, "");
   }
   else if (strcmp(color, "amber-flash") == 0)
   {
      devCtl_boardIoctl(BOARD_IOCTL_LED_CTRL, PERSISTENT, "", kLedInetR, kLedStateOn, "");
      devCtl_boardIoctl(BOARD_IOCTL_SET_GPIO, PERSISTENT, "", BP_GPIO_22_AH, kLedStateOn, "");
      devCtl_boardIoctl(BOARD_IOCTL_LED_CTRL, PERSISTENT, "", kLedWanData, kLedStateFlashBlinkContinues, "");
   }
   else
   {
      cmsLog_error("Unknown LED color: %s", color);
      return;
   }
}
#endif
