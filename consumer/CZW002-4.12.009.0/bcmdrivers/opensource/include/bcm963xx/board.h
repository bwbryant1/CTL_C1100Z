/*
<:copyright-BRCM:2002:GPL/GPL:standard

   Copyright (c) 2002 Broadcom Corporation
   All Rights Reserved

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
*/
/***********************************************************************/
/*                                                                     */
/*   MODULE:  board.h                                                  */
/*   PURPOSE: Board specific information.  This module should include  */
/*            all base device addresses and board specific macros.     */
/*                                                                     */
/***********************************************************************/
#ifndef _BOARD_H
#define _BOARD_H

#include "bcm_hwdefs.h"

#ifdef __cplusplus
extern "C" {
#endif

/* BOARD_H_API_VER increases when other modules (such as PHY) depend on */
/* a new function in the board driver or in boardparms.h                */

#define BOARD_H_API_VER 3

/*****************************************************************************/
/*          board ioctl calls for flash, led and some other utilities        */
/*****************************************************************************/
/* Defines. for board driver */
#define BOARD_IOCTL_MAGIC       'B'
#define BOARD_DRV_MAJOR          206

#define BOARD_IOCTL_FLASH_WRITE                 _IOWR(BOARD_IOCTL_MAGIC, 0, BOARD_IOCTL_PARMS)
#define BOARD_IOCTL_FLASH_READ                  _IOWR(BOARD_IOCTL_MAGIC, 1, BOARD_IOCTL_PARMS)
#define BOARD_IOCTL_DUMP_ADDR                   _IOWR(BOARD_IOCTL_MAGIC, 2, BOARD_IOCTL_PARMS)
#define BOARD_IOCTL_SET_MEMORY                  _IOWR(BOARD_IOCTL_MAGIC, 3, BOARD_IOCTL_PARMS)
#define BOARD_IOCTL_MIPS_SOFT_RESET             _IOWR(BOARD_IOCTL_MAGIC, 4, BOARD_IOCTL_PARMS)
#define BOARD_IOCTL_LED_CTRL                    _IOWR(BOARD_IOCTL_MAGIC, 5, BOARD_IOCTL_PARMS)
#define BOARD_IOCTL_GET_PSI_SIZE                _IOWR(BOARD_IOCTL_MAGIC, 6, BOARD_IOCTL_PARMS)
#define BOARD_IOCTL_GET_SDRAM_SIZE              _IOWR(BOARD_IOCTL_MAGIC, 7, BOARD_IOCTL_PARMS)
#define BOARD_IOCTL_GET_ID                      _IOWR(BOARD_IOCTL_MAGIC, 8, BOARD_IOCTL_PARMS)
#define BOARD_IOCTL_GET_CHIP_ID                 _IOWR(BOARD_IOCTL_MAGIC, 9, BOARD_IOCTL_PARMS)
#define BOARD_IOCTL_GET_CHIP_REV                _IOWR(BOARD_IOCTL_MAGIC, 10, BOARD_IOCTL_PARMS)
#define BOARD_IOCTL_GET_CFE_VER                 _IOWR(BOARD_IOCTL_MAGIC, 11, BOARD_IOCTL_PARMS)
#define BOARD_IOCTL_GET_BASE_MAC_ADDRESS        _IOWR(BOARD_IOCTL_MAGIC, 12, BOARD_IOCTL_PARMS)
#define BOARD_IOCTL_GET_MAC_ADDRESS             _IOWR(BOARD_IOCTL_MAGIC, 13, BOARD_IOCTL_PARMS)
#define BOARD_IOCTL_RELEASE_MAC_ADDRESS         _IOWR(BOARD_IOCTL_MAGIC, 14, BOARD_IOCTL_PARMS)
#define BOARD_IOCTL_GET_NUM_ENET_MACS           _IOWR(BOARD_IOCTL_MAGIC, 15, BOARD_IOCTL_PARMS)
#define BOARD_IOCTL_GET_NUM_ENET_PORTS          _IOWR(BOARD_IOCTL_MAGIC, 16, BOARD_IOCTL_PARMS)
#define BOARD_IOCTL_SET_MONITOR_FD              _IOWR(BOARD_IOCTL_MAGIC, 17, BOARD_IOCTL_PARMS)
#define BOARD_IOCTL_WAKEUP_MONITOR_TASK         _IOWR(BOARD_IOCTL_MAGIC, 18, BOARD_IOCTL_PARMS)
#define BOARD_IOCTL_SET_TRIGGER_EVENT           _IOWR(BOARD_IOCTL_MAGIC, 19, BOARD_IOCTL_PARMS)        
#define BOARD_IOCTL_GET_TRIGGER_EVENT           _IOWR(BOARD_IOCTL_MAGIC, 20, BOARD_IOCTL_PARMS)        
#define BOARD_IOCTL_UNSET_TRIGGER_EVENT         _IOWR(BOARD_IOCTL_MAGIC, 21, BOARD_IOCTL_PARMS) 
#define BOARD_IOCTL_GET_WLAN_ANT_INUSE          _IOWR(BOARD_IOCTL_MAGIC, 22, BOARD_IOCTL_PARMS)
#define BOARD_IOCTL_SET_SES_LED                 _IOWR(BOARD_IOCTL_MAGIC, 23, BOARD_IOCTL_PARMS)
#define BOARD_IOCTL_SET_CS_PAR                  _IOWR(BOARD_IOCTL_MAGIC, 25, BOARD_IOCTL_PARMS)
#define BOARD_IOCTL_SET_GPIO                    _IOWR(BOARD_IOCTL_MAGIC, 26, BOARD_IOCTL_PARMS)
#define BOARD_IOCTL_FLASH_LIST                  _IOWR(BOARD_IOCTL_MAGIC, 27, BOARD_IOCTL_PARMS)
#define BOARD_IOCTL_GET_BACKUP_PSI_SIZE         _IOWR(BOARD_IOCTL_MAGIC, 28, BOARD_IOCTL_PARMS)
#define BOARD_IOCTL_GET_SYSLOG_SIZE             _IOWR(BOARD_IOCTL_MAGIC, 29, BOARD_IOCTL_PARMS)
#define BOARD_IOCTL_SET_SHUTDOWN_MODE           _IOWR(BOARD_IOCTL_MAGIC, 30, BOARD_IOCTL_PARMS)
#define BOARD_IOCTL_SET_STANDBY_TIMER           _IOWR(BOARD_IOCTL_MAGIC, 31, BOARD_IOCTL_PARMS)
#define BOARD_IOCTL_BOOT_IMAGE_OPERATION        _IOWR(BOARD_IOCTL_MAGIC, 32, BOARD_IOCTL_PARMS)
#define BOARD_IOCTL_GET_TIMEMS                  _IOWR(BOARD_IOCTL_MAGIC, 33, BOARD_IOCTL_PARMS)
#define BOARD_IOCTL_GET_GPON_OPTICS_TYPE        _IOWR(BOARD_IOCTL_MAGIC, 34, BOARD_IOCTL_PARMS)
#define BOARD_IOCTL_GET_DEFAULT_OPTICAL_PARAMS  _IOWR(BOARD_IOCTL_MAGIC, 35, BOARD_IOCTL_PARMS)
#define BOARD_IOCTL_ALLOC_MAC_ADDRESSES         _IOWR(BOARD_IOCTL_MAGIC, 36, BOARD_IOCTL_PARMS)
#define BOARD_IOCTL_RELEASE_MAC_ADDRESSES       _IOWR(BOARD_IOCTL_MAGIC, 37, BOARD_IOCTL_PARMS)
#define BOARD_IOCTL_SPI_SLAVE_INIT              _IOWR(BOARD_IOCTL_MAGIC, 38, BOARD_IOCTL_PARMS)
#define BOARD_IOCTL_SPI_SLAVE_READ              _IOWR(BOARD_IOCTL_MAGIC, 39, BOARD_IOCTL_PARMS)
#define BOARD_IOCTL_SPI_SLAVE_WRITE             _IOWR(BOARD_IOCTL_MAGIC, 40, BOARD_IOCTL_PARMS)
#define BOARD_IOCTL_GET_NUM_FE_PORTS            _IOWR(BOARD_IOCTL_MAGIC, 41, BOARD_IOCTL_PARMS)
#define BOARD_IOCTL_GET_NUM_GE_PORTS            _IOWR(BOARD_IOCTL_MAGIC, 42, BOARD_IOCTL_PARMS)
#define BOARD_IOCTL_GET_NUM_VOIP_PORTS          _IOWR(BOARD_IOCTL_MAGIC, 43, BOARD_IOCTL_PARMS)
#define BOARD_IOCTL_GET_SWITCH_PORT_MAP         _IOWR(BOARD_IOCTL_MAGIC, 44, BOARD_IOCTL_PARMS)
#define BOARD_IOCTL_GET_PERS_NAME               _IOWR(BOARD_IOCTL_MAGIC, 45, BOARD_IOCTL_PARMS)
#define BOARD_IOCTL_GET_EPON_GPIOS              _IOWR(BOARD_IOCTL_MAGIC, 46, BOARD_IOCTL_PARMS)
#if 1 // __MSTC__, Paul Ho, for WLAN/WPS Button, __OBM__, Autumn
#define BOARD_IOCTL_GET_PROCCESS_PID    _IOWR(BOARD_IOCTL_MAGIC, 47, BOARD_IOCTL_PARMS) 
#endif
#if 1 //__MSTC__, Dennis
#define BOARD_IOCTL_SET_BUTTONTEST      _IOWR(BOARD_IOCTL_MAGIC, 48, BOARD_IOCTL_PARMS)
#endif
#if 1//__MSTC__, RaynorChung: Support USB test CMD for 963268 platform
#define BOARD_IOCTL_SET_USBTEST         _IOWR(BOARD_IOCTL_MAGIC, 49, BOARD_IOCTL_PARMS)
#endif

#if 1 //yiwei, support qtn 5GHz
#define BOARD_IOCTL_SET_RPCD_PID    _IOWR(BOARD_IOCTL_MAGIC, 50, BOARD_IOCTL_PARMS)
#endif

#if 1 //__MSTC__, LingChun
#define BOARD_IOCTL_GET_BUTTONTEST      _IOWR(BOARD_IOCTL_MAGIC, 51, BOARD_IOCTL_PARMS)
#endif

#ifdef BUILD_5G // __MSTC__, Richard Huang
#define BOARD_IOCTL_GET_5GWPSBTN      _IOWR(BOARD_IOCTL_MAGIC, 52, BOARD_IOCTL_PARMS)
#endif
#if 1 /* Support the CLI command to test incorrect bad block tables(BBT), __CHT__, MitraStar SeanLu, 20140328 */
#define BOARD_IOCTL_BRCMNAND_BBT_READ             _IOWR(BOARD_IOCTL_MAGIC, 53, BOARD_IOCTL_PARMS)
#define BOARD_IOCTL_BRCMNAND_BBT_WRITE            _IOWR(BOARD_IOCTL_MAGIC, 54, BOARD_IOCTL_PARMS)
#endif
#if 1 // __CTLK__, SeanLu 20150518, Support New method to change boot partition
#define BOARD_IOCTL_CHANGE_BOOT_PARTITION       _IOWR(BOARD_IOCTL_MAGIC, 55, BOARD_IOCTL_PARMS)
#endif
#if 1 //__CTLK__, SeanLu 20150605, Avoid DSL turn on DSL led on ethernet wan mode
#define BOARD_IOCTL_SET_LED_ETHWAN_MODE         _IOWR(BOARD_IOCTL_MAGIC, 56, BOARD_IOCTL_PARMS)
#define BOARD_IOCTL_FIX_ETHWAN_MODE             _IOWR(BOARD_IOCTL_MAGIC, 57, BOARD_IOCTL_PARMS)
#endif

// for the action in BOARD_IOCTL_PARMS for flash operation
typedef enum 
{
    PERSISTENT,
    NVRAM,
    BCM_IMAGE_CFE,
    BCM_IMAGE_FS,
    BCM_IMAGE_KERNEL,
    BCM_IMAGE_WHOLE,
    SCRATCH_PAD,
    FLASH_SIZE,
    SET_CS_PARAM,
    BACKUP_PSI,
    SYSLOG,
#if 1 //__MSTC__, Dennis merge from Elina
    UPDATE_CONFIG,
#endif
#if 1 //__MSTC__, RaynorChung: Support 963268 nand flash, patch form SVN#3597 on http://svn.zyxel.com.tw/svn/CPE_SW1/BCM96368/trunk/P-870HA/branches/cht/fttb8/4.11
    FILETAG
#endif
} BOARD_IOCTL_ACTION;
    
typedef struct boardIoctParms
{
    char *string;
    char *buf;
    int strLen;
    int offset;
    BOARD_IOCTL_ACTION  action;        /* flash read/write: nvram, persistent, bcm image */
    int result;
} BOARD_IOCTL_PARMS;

// LED defines 
typedef enum
{   
    kLedAdsl,
    kLedSecAdsl,
    kLedWanData,
    // kLedSes,
    // kLedVoip,
    kLedVoip1,
    kLedVoip2,
    kLedVoip1R,
    kLedVoip2R,
    kLedPots,
    kLedDect,
    // kLedGpon,
#if 1 //__MTS__, Dennis
    kLedMoCAL,
    kLedMoCAW,
#else
    kLedMoCA,
#endif
    kLedInetA,
    kLedInetR,
    kLedInetGWAN,
    kLedPowerG,
    kLedPowerR,
    kLedSes,
    // kLedWPSR,
    // kLedEth0Duplex,
    // kLedEth0Spd100,
    // kLedEth0Spd1000,
    // kLedEth1Duplex,
    // kLedEth1Spd100,
    // kLedEth1Spd1000,
#if 1 //__MSTC__, RaynorChung: Ssupport USB LED   
    kLedUSB0,
    kLedUSB1,
#endif
#if 1//__MSTC__,JhenYang,LED
    kLedWLANRED,
    kLedWLANORANGE,
    kLedWPSRED,
    kLedADSLRED,
    kLedADSL2RED,
#endif
    kLedEnd                             // NOTE: Insert the new led name before this one.
} BOARD_LED_NAME;

typedef enum
{
    kLedStateOff,                        /* turn led off */
    kLedStateOn,                         /* turn led on */
    ALLLedStateOn,
    ALLLedStateOff,
    kLedStateFail,                       /* turn led on red */
    kLedStateFailOff,                       /* turn led off red */
    kLedStateSlowBlinkContinues,         /* slow blink continues at 2HZ interval */
    kLedStateFastBlinkContinues,         /* fast blink continues at 4HZ interval */
#if 1 // __CenturyLink__, Hong-Yu
    kLedStateLongBlinkContinues,         /* long blink continues at 1500ms */
    kLedStateFlashBlinkContinues,        /* 250ms on, 750ms off */
    kLedStateAlternateBlinkContinues,    /* long blink continues at 1500ms between red and green */
#endif
    kLedStateUserWpsInProgress,          /* 200ms on, 100ms off */
    kLedStateUserWpsError,               /* 100ms on, 100ms off */
    kLedStateUserWpsSessionOverLap,      /* 100ms on, 100ms off, 5 times, off for 500ms */
#if 1 //__CTLK__, LingChun
    kLedStateUserWpsSuccess,              /*1000ms on, 1000ms off*/
    kLedStateUserWpsAuth,
#endif
#if 1 //__CTL__, KuanJung
	kLedStateBlinkByPackets,
#endif
    kLedStateBlinkOnce
} BOARD_LED_STATE;

typedef void (*HANDLE_LED_FUNC)(BOARD_LED_STATE ledState);

typedef enum
{
    kGpioInactive,
    kGpioActive
} GPIO_STATE_t;

#if 1 /* Support the CLI command to test incorrect bad block tables(BBT), __CHT__, MitraStar SeanLu, 20140328 */
typedef enum
{
    BrcmBBTMinSave,
    BrcmBBTMaxSave,
    BrcmBBTRun
} BRCMNAND_ACTION_t;
#endif

// FLASH_ADDR_INFO is now defined in flash_common.h
#include "flash_common.h"

typedef struct cs_config_pars_tag
{
  int   mode;
  int   base;
  int   size;
  int   wait_state;
  int   setup_time;
  int   hold_time;
} cs_config_pars_t;

typedef enum
{
    MAC_ADDRESS_OP_GET=0,
    MAC_ADDRESS_OP_RELEASE,
    MAC_ADDRESS_OP_MAX
} MAC_ADDRESS_OPERATION;

typedef void (* kerSysMacAddressNotifyHook_t)(unsigned char *pucaMacAddr, MAC_ADDRESS_OPERATION op);

#define UBUS_BASE_FREQUENCY_IN_MHZ  160

#if defined(MSTC_ALL_WAN_SAME_MAC) || defined(MSTC_DIF_L2_SAME_MAC) // __MSTC__, Richard Huang (ALL WAN Using the same MAC)

#if defined(MSTC_DIF_L2_SAME_MAC)
#define CHECK_WANID(m, u) (((m & 0xF0000000L) == MAC_ADDRESS_WAN) && ((u & 0xF0000000L) == MAC_ADDRESS_WAN) \
                           && ((u & 0x0000000FL) != (m & 0x0000000FL)) \
                           )
#else
#define CHECK_WANID(m, u) (((m & 0xF0000000L) == MAC_ADDRESS_WAN) && ((u & 0xF0000000L) == MAC_ADDRESS_WAN))
#endif

#ifdef BUILD_HPNA
#define IF_NAME_WETH   "eth5"  // hard code to define EthWAN interface name
#else
#define IF_NAME_WETH   "eth4"  // hard code to define EthWAN interface name
#endif
#define IF_NAME_WMOCA  "moca10"
#define IF_NAME_WPTM   "ptm0"
#define IF_NAME_WATM   "atm"
#else
#define CHECK_WANID(m, u) 0
#endif

#define IF_NAME_ETH    "eth"
#define IF_NAME_USB    "usb"
#define IF_NAME_WLAN   "wl"
#define IF_NAME_MOCA   "moca"
#define IF_NAME_ATM    "atm"
#define IF_NAME_PTM    "ptm"
#define IF_NAME_GPON   "gpon"
#define IF_NAME_EPON   "epon"
#define IF_NAME_VEIP    "veip"

#define MAC_ADDRESS_ANY         (unsigned long) -1

/* A unique mac id is required for a WAN interface to request for a MAC address.
 * The 32bit mac id is formated as follows:
 *     bit 28-31: MAC Address IF type (MAC_ADDRESS_*)
 *     bit 20-27: the unit number. 0 for atm0, 1 for atm1, ...
 *     bit 12-19: the connection id which starts from 1.
 *     bit 0-11:  not used. should be zero.
 */
#define MAC_ADDRESS_PLC         0x10000000
#define MAC_ADDRESS_EPONONU     0x20000000
 #define MAC_ADDRESS_EPON        0x40000000
#define MAC_ADDRESS_GPON        0x80000000
#if defined(MSTC_ALL_WAN_SAME_MAC) || defined(MSTC_DIF_L2_SAME_MAC) // __MSTC__, Richard Huang (ALL WAN Using the same MAC)
#define MAC_ADDRESS_WAN         0x90000000
#endif
#define MAC_ADDRESS_ETH         0xA0000000
#define MAC_ADDRESS_USB         0xB0000000
#define MAC_ADDRESS_WLAN        0xC0000000
#define MAC_ADDRESS_MOCA        0xD0000000
#define MAC_ADDRESS_ATM         0xE0000000
#define MAC_ADDRESS_PTM         0xF0000000

/*****************************************************************************/
/*          Function Prototypes                                              */
/*****************************************************************************/
#if !defined(__ASM_ASM_H)
void dumpaddr( unsigned char *pAddr, int nLen );

extern void kerSysEarlyFlashInit( void );
extern int kerSysGetChipId( void );
char * kerSysGetChipName( char *buf, int len);
extern int kerSysGetDslPhyEnable( void );
extern void kerSysFlashInit( void );
extern void kerSysFlashAddrInfoGet(PFLASH_ADDR_INFO pflash_addr_info);
extern int kerSysCfeVersionGet(char *string, int stringLength);
#if 1 /* __MSTC__, zongyue: to fix ImageDefault start postion and RootFS size if NAND FLASH have bad blocks */
void kerSysFlashBadBlockNumSet(int number);
#endif

extern int kerSysNvRamSet(const char *string, int strLen, int offset);
#if 1 //__MSTC__, RaynorChung: Support 963268 nand flash, patch form SVN#3597 on http://svn.zyxel.com.tw/svn/CPE_SW1/BCM96368/trunk/P-870HA/branches/cht/fttb8/4.11
extern int kerSysNvRamGet(char *string, int strLen, int offset);
#else
extern void kerSysNvRamGet(char *string, int strLen, int offset);
#endif
extern void kerSysNvRamGetBootline(char *bootline);
extern void kerSysNvRamGetBootlineLocked(char *bootline);
extern void kerSysNvRamGetBoardId(char *boardId);
extern void kerSysNvRamGetBoardIdLocked(char *boardId);
extern void kerSysNvRamGetBaseMacAddr(unsigned char *baseMacAddr);
extern unsigned long kerSysNvRamGetVersion(void);
#if 1 //__MSTC__, Dennis merge from Elina
extern int kerSysUpdateConfigGet(char *string, int strLen, int offset);
#endif
extern int kerSysPersistentGet(char *string, int strLen, int offset);
extern int kerSysPersistentSet(char *string, int strLen, int offset);
extern int kerSysBackupPsiGet(char *string, int strLen, int offset);
extern int kerSysBackupPsiSet(char *string, int strLen, int offset);
extern int kerSysSyslogGet(char *string, int strLen, int offset);
extern int kerSysSyslogSet(char *string, int strLen, int offset);
extern int kerSysScratchPadList(char *tokBuf, int tokLen);
extern int kerSysScratchPadGet(char *tokName, char *tokBuf, int tokLen);
extern int kerSysScratchPadSet(char *tokName, char *tokBuf, int tokLen);
extern int kerSysScratchPadClearAll(void);
#if 1 //__MSTC__, RaynorChung: Support 963268 nand flash, patch form SVN#3597 on http://svn.zyxel.com.tw/svn/CPE_SW1/BCM96368/trunk/P-870HA/branches/cht/fttb8/4.11
#if 1 //__CTLK__, Thief
extern int kerSysBcmImageSet( int flash_start_addr, char *string, int size, char* data);
#else
extern int kerSysBcmImageSet( int flash_start_addr, char *string, int size);
#endif
#else
extern int kerSysBcmImageSet( int flash_start_addr, char *string, int size,
    int should_yield);
#endif
extern int kerSysBcmNandImageSet( char *rootfs_part, char *string, int img_size,
    int should_yield );
extern int kerSysSetBootImageState( int state );
extern int kerSysGetBootImageState( void );
extern int kerSysSetOpticalPowerValues(unsigned short rxReading, unsigned short rxOffset, 
    unsigned short txReading);
extern int kerSysGetOpticalPowerValues(unsigned short *prxReading, unsigned short *prxOffset, 
    unsigned short *ptxReading);
extern int kerSysBlParmsGetInt( char *name, int *pvalue );
extern int kerSysBlParmsGetStr( char *name, char *pvalue, int size );
extern unsigned long kerSysGetMacAddressType( unsigned char *ifName );
extern int kerSysMacAddressNotifyBind(kerSysMacAddressNotifyHook_t hook);
#if 1 // __CTLK__,JhenYang, refer to common 412
extern int kerSysGetBaseMacAddress( unsigned char *pucaMacAddr, unsigned int index );
#endif
extern int kerSysGetMacAddress( unsigned char *pucaAddr, unsigned long ulId );
extern int kerSysReleaseMacAddress( unsigned char *pucaAddr );
extern void kerSysGetGponSerialNumber( unsigned char *pGponSerialNumber);
extern void kerSysGetGponPassword( unsigned char *pGponPassword);
extern int kerSysGetSdramSize( void );
#if defined(CONFIG_BCM96368)
extern unsigned int kerSysGetSdramWidth( void );
#endif
extern void kerSysGetBootline(char *string, int strLen);
extern void kerSysSetBootline(char *string, int strLen);
extern void kerSysMipsSoftReset(void);
extern void kerSysLedCtrl(BOARD_LED_NAME, BOARD_LED_STATE);
extern int kerSysFlashSizeGet(void);
extern int kerSysMemoryMappedFlashSizeGet(void);
extern unsigned long kerSysReadFromFlash( void *toaddr, unsigned long fromaddr, unsigned long len );
extern void kerSysRegisterDyingGaspHandler(char *devname, void *cbfn, void *context);
extern void kerSysDeregisterDyingGaspHandler(char *devname);    
extern int kerConfigCs(BOARD_IOCTL_PARMS *parms);

/* private functions used within board driver only */
void stopOtherCpu(void);
void resetPwrmgmtDdrMips(void);

/*
 * Access to shared GPIO registers should be done by calling these
 * functions below, which will grab a spinlock while accessing the
 * GPIO register.  However, if your code needs to access a shared
 * GPIO register but cannot call these functions, you should still
 * acquire the spinlock.
 * (Technically speaking, I should include spinlock.h and declare extern here
 * but that breaks the C++ compile of xtm.)
 */
//#include <linux/spinlock.h>
//extern spinlock_t bcm_gpio_spinlock;
extern void kerSysSetGpioState(unsigned short bpGpio, GPIO_STATE_t state);
extern void kerSysSetGpioStateLocked(unsigned short bpGpio, GPIO_STATE_t state);
extern void kerSysSetGpioDir(unsigned short bpGpio);
extern void kerSysSetGpioDirLocked(unsigned short bpGpio);


// for the voice code, which has too many kernSysSetGpio to change
#define kerSysSetGpio kerSysSetGpioState


extern unsigned long kerSysGetUbusFreq(unsigned long miscStrapBus);
extern int kerSysGetAfeId( unsigned long *afeId );
#define __kerSysGetAfeId  kerSysGetAfeId

#if defined(CONFIG_BCM_CPLD1)
int BcmCpld1Initialize(void);
void BcmCpld1CheckShutdownMode(void);
void BcmCpld1SetShutdownMode(void);
void BcmCpld1SetStandbyTimer(unsigned int duration);
#endif

#if defined (CONFIG_BCM_AVS_PWRSAVE)
extern void kerSysBcmEnableAvs(int enable);
extern int kerSysBcmAvsEnabled(void);
#endif

#if defined(CONFIG_BCM_DDR_SELF_REFRESH_PWRSAVE)
#define CONFIG_BCM_PWRMNGT_DDR_SR_API
// The structure below is to be declared in ADSL PHY MIPS LMEM, if ADSL is compiled in
typedef struct _PWRMNGT_DDR_SR_CTRL_ {
  union {
   struct {
      unsigned char   phyBusy;
      unsigned char   tp0Busy;
      unsigned char   tp1Busy;
      unsigned char   reserved;
    };
    unsigned int      word;
  };
} PWRMNGT_DDR_SR_CTRL;

void BcmPwrMngtRegisterLmemAddr(PWRMNGT_DDR_SR_CTRL *pDdrSr);
#endif

#if 1 // __CTLK__, SeanLu 20150518, Support New method to change boot partition
extern int kerSysChangeBootupPartition( void );
#endif

#endif

#ifdef __cplusplus
}
#endif

#endif /* _BOARD_H */

