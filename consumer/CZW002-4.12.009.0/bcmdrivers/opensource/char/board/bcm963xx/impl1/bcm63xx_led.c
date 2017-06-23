/*
    Copyright 2000-2011 Broadcom Corporation

    <:label-BRCM:2011:DUAL/GPL:standard
    
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

/***************************************************************************
 * File Name  : bcm63xx_led.c
 *
 * Description: 
 *    This file contains bcm963xx board led control API functions. 
 *
 ***************************************************************************/

/* Includes. */
#include <linux/init.h>
#include <linux/fs.h>
#include <linux/capability.h>
#include <linux/slab.h>
#include <linux/errno.h>
#include <linux/module.h>
#include <linux/netdevice.h>
#include <linux/bcm_assert_locks.h>
#include <asm/uaccess.h>

#include <bcm_map_part.h>
#include <board.h>
#include <boardparms.h>

extern spinlock_t bcm_gpio_spinlock;

#define k125ms              (HZ / 8)   // 125 ms
#if 1 // __CTL__, KuanJung
#define kFastBlinkCount     3          // ~500ms
#define kSlowBlinkCount     7          // ~1000ms
#else
#define kFastBlinkCount     0          // 125ms
#define kSlowBlinkCount     1          // 250ms
#endif

#if 1 // __CenturyLink__, Hong-Yu
#define kLongBlinkCount     11
#define kFlashBlinkOnCount  1
#define kFlashBlinkOffCount 5
#endif

#if 1 //__CTLK__, LingChun, WPS
#define k100ms             (HZ / 10)    //~100ms
#define k100msBlinkCount   1           //~100ms
static unsigned long wpsTimeout =0;
#endif


#define kLedOff             0
#define kLedOn              1

#define kLedGreen           0
#define kLedRed             1

// uncomment // for debug led
// #define DEBUG_LED

typedef int (*BP_LED_FUNC) (unsigned short *);

typedef struct {
    BOARD_LED_NAME ledName;
    BP_LED_FUNC bpFunc;
    BP_LED_FUNC bpFuncFail;
} BP_LED_INFO, *PBP_LED_INFO;

typedef struct {
    short ledGreenGpio;             // GPIO # for LED
    short ledRedGpio;               // GPIO # for Fail LED
    BOARD_LED_STATE ledState;       // current led state
    short blinkCountDown;           // Count for blink states
} LED_CTRL, *PLED_CTRL;

static BP_LED_INFO bpLedInfo[] =
{
#if 1//__MSTC__, KuanJung
    // {kLedAdsl, BpGetAdslLedGpio, BpGetAdslFailLedGpio},
    {kLedAdsl, BpGetAdslLedGpio, NULL},
    {kLedSecAdsl, BpGetSecAdslLedGpio, NULL},
    // {kLedWanData, BpGetWanDataLedGpio, BpGetWanErrorLedGpio},
    {kLedWanData, BpGetWanDataLedGpio, NULL},
    // {kLedSes, BpGetWirelessSesLedGpio, NULL},
    // {kLedVoip, BpGetVoipLedGpio, NULL},
    {kLedVoip1, BpGetVoip1LedGpio, NULL},
    {kLedVoip2, BpGetVoip2LedGpio, NULL},
    {kLedVoip1R, BpGetVoip1FailLedGpio, NULL},
    {kLedVoip2R, BpGetVoip2FailLedGpio, NULL},
    // {kLedPots, BpGetPotsLedGpio, NULL},
    // {kLedDect, BpGetDectLedGpio, NULL},
    // {kLedGpon, BpGetGponLedGpio, BpGetGponFailLedGpio},
#endif
#if 1 //__MSTC__, Dennis
    {kLedMoCAL, NULL, NULL},
    {kLedMoCAW, NULL, NULL},
#else
    {kLedMoCA, BpGetMoCALedGpio, BpGetMoCAFailLedGpio},
#endif
#if 1//__MSTC__,JhenYang,LED
    {kLedWLANRED, BpGetWLANREDLedGpio, NULL},
    {kLedWLANORANGE, BpGetWLANORANGELedGpio, NULL},
    {kLedWPSRED, BpGetWPSREDLedGpio, NULL},
    {kLedADSLRED, BpGetADSLREDLedGpio, NULL},
    {kLedADSL2RED, BpGetADSL2REDLedGpio, NULL},
#endif
    //{kLedInetA, BpGetPppLedGpio, NULL},
    {kLedInetR, BpGetWanErrorLedGpio, NULL},
//    {kLedInetGWAN, BpGetGWANLedGpio, NULL},
    {kLedPowerG, BpGetBootloaderPowerOnLedGpio, NULL},
    {kLedPowerR, BpGetBootloaderStopLedGpio, NULL},
    {kLedSes, BpGetWirelessSesLedGpio, NULL},
#if 1 //__MSTC__, KuanJung: Ssupport USB LED   
    {kLedUSB0, BpGetUSB0LedGpio, NULL}, //usb0
    {kLedUSB1, NULL, NULL},
#endif
    {kLedEnd, NULL, NULL}
};

// global variables:
static struct timer_list gLedTimer;
static PLED_CTRL gLedCtrl = NULL;
static int gTimerOn = FALSE;
static int gTimerOnRequests = 0;
static unsigned int gLedRunningCounter = 0;  // only used by WLAN
static unsigned int gInetLedRunningCounter = 0;  // only used by WLAN

void (*ethsw_led_control)(unsigned long ledMask, int value) = NULL;
EXPORT_SYMBOL(ethsw_led_control);

/** This spinlock protects all access to gLedCtrl, gTimerOn
 *  gTimerOnRequests, gLedRunningCounter, and ledTimerStart function.
 *  Use spin_lock_irqsave to lock the spinlock because ledTimerStart
 *  may be called from interrupt handler (WLAN?)
 */
static spinlock_t brcm_ledlock;
static void ledTimerExpire(void);

//**************************************************************************************
// LED operations
//**************************************************************************************

// turn led on and set the ledState
static void setLed (PLED_CTRL pLed, unsigned short led_state, unsigned short led_type)
{
    short led_gpio;
    unsigned short gpio_state;
    unsigned long flags;
#if defined(SUPPORT_MSTC_C2100) // __CTLK__, Richard Huang
	// workaround. shift register bit 9, 14, and 15 are used as LED. so GPIO 9, 14, and 15 should be controlled as a normal GPIO. KuanJung
	if ((pLed->ledGreenGpio & 0xffff) == BP_GPIO_15_AL || (pLed->ledGreenGpio & 0xffff) == BP_GPIO_14_AL || (pLed->ledGreenGpio & 0xffff) == BP_GPIO_9_AL)
	{
		if (led_type == kLedGreen)
			kerSysSetGpioState(pLed->ledGreenGpio,led_state);
		return;
	}
#endif
    if (led_type == kLedRed)
        led_gpio = pLed->ledRedGpio;
    else
        led_gpio = pLed->ledGreenGpio;

    if (led_gpio == -1)
        return;

    if (((led_gpio & BP_ACTIVE_LOW) && (led_state == kLedOn)) || 
        (!(led_gpio & BP_ACTIVE_LOW) && (led_state == kLedOff)))
        gpio_state = 0;
    else
        gpio_state = 1;

    /* spinlock to protect access to GPIODir, GPIOio */
    spin_lock_irqsave(&bcm_gpio_spinlock, flags);

#if defined(CONFIG_BCM96328) || defined(_BCM96318_)
    /* Enable LED controller to drive this GPIO */
    if (!(led_gpio & BP_GPIO_SERIAL))
        GPIO->GPIOMode |= GPIO_NUM_TO_MASK(led_gpio);
#endif

#if defined(CONFIG_BCM96362) || defined(CONFIG_BCM963268)
    /* Enable LED controller to drive this GPIO */
    if (!(led_gpio & BP_GPIO_SERIAL))
        GPIO->LEDCtrl |= GPIO_NUM_TO_MASK(led_gpio);
#endif

#if defined(CONFIG_BCM96328) || defined(CONFIG_BCM96362) || defined(CONFIG_BCM963268) || defined(CONFIG_BCM96318)
    LED->ledMode &= ~(LED_MODE_MASK << GPIO_NUM_TO_LED_MODE_SHIFT(led_gpio));
    if( gpio_state )
        LED->ledMode |= (LED_MODE_OFF << GPIO_NUM_TO_LED_MODE_SHIFT(led_gpio));
    else
        LED->ledMode |= (LED_MODE_ON << GPIO_NUM_TO_LED_MODE_SHIFT(led_gpio));

#else
    if (led_gpio & BP_GPIO_SERIAL) {
        while (GPIO->SerialLedCtrl & SER_LED_BUSY);
        if( gpio_state )
            GPIO->SerialLed |= GPIO_NUM_TO_MASK(led_gpio);
        else
            GPIO->SerialLed &= ~GPIO_NUM_TO_MASK(led_gpio);
    }
    else {
        GPIO->GPIODir |= GPIO_NUM_TO_MASK(led_gpio);
        if( gpio_state )
            GPIO->GPIOio |= GPIO_NUM_TO_MASK(led_gpio);
        else
            GPIO->GPIOio &= ~GPIO_NUM_TO_MASK(led_gpio);
    }
#endif

    spin_unlock_irqrestore(&bcm_gpio_spinlock, flags);
}

// toggle the LED
static void ledToggle(PLED_CTRL pLed)
{
    short led_gpio;

    led_gpio = pLed->ledGreenGpio;
#if defined(SUPPORT_MSTC_C2100) // __CTLK__, Richard Huang
	// workaround. shift register bit 9, 14, and 15 are used as LED. so GPIO 9, 14, and 15 should be controlled as a normal GPIO. KuanJung
	if ((led_gpio & 0xffff) == BP_GPIO_15_AL || (led_gpio & 0xffff) == BP_GPIO_14_AL || (led_gpio & 0xffff) == BP_GPIO_9_AL)
	{
		kerSysSetGpioState(led_gpio,(GPIO->GPIOio & GPIO_NUM_TO_MASK(led_gpio))?kLedStateOn:kLedStateOff);
		return;
	}
#endif
    if (led_gpio == -1)
        return;

#if defined(CONFIG_BCM96328) || defined(CONFIG_BCM96362) || defined(CONFIG_BCM963268) || defined(CONFIG_BCM96318)
    LED->ledMode ^= (LED_MODE_MASK << GPIO_NUM_TO_LED_MODE_SHIFT(led_gpio));
#else

    if (led_gpio & BP_GPIO_SERIAL) {
        while (GPIO->SerialLedCtrl & SER_LED_BUSY);
        GPIO->SerialLed ^= GPIO_NUM_TO_MASK(led_gpio);
    }
    else {
        unsigned long flags;

        spin_lock_irqsave(&bcm_gpio_spinlock, flags);
        GPIO->GPIODir |= GPIO_NUM_TO_MASK(led_gpio);
        GPIO->GPIOio ^= GPIO_NUM_TO_MASK(led_gpio);
        spin_unlock_irqrestore(&bcm_gpio_spinlock, flags);
    }

#endif
}   

/** Start the LED timer
 *
 * Must be called with brcm_ledlock held
 */
static void ledTimerStart(void)
{
#if defined(DEBUG_LED)
    printk("led: add_timer\n");
#endif

    BCM_ASSERT_HAS_SPINLOCK_C(&brcm_ledlock);

    init_timer(&gLedTimer);
    gLedTimer.function = (void*)ledTimerExpire;
    gLedTimer.expires = jiffies + k125ms;        // timer expires in ~100ms
    add_timer (&gLedTimer);
} 

#if 1 //__CTLK__, LingChun, WPS
static void ledTimerStart100ms(void)
{
    BCM_ASSERT_HAS_SPINLOCK_C(&brcm_ledlock);

    init_timer(&gLedTimer);
    gLedTimer.function = (void*)ledTimerExpire;
    gLedTimer.expires = jiffies + k100ms;        // timer expires in ~100ms
    add_timer (&gLedTimer);
} 
#endif


// led timer expire kicks in about ~100ms and perform the led operation according to the ledState and
// restart the timer according to ledState
static void ledTimerExpire(void)
{
    int i;
    PLED_CTRL pCurLed;
    unsigned long flags;

    BCM_ASSERT_NOT_HAS_SPINLOCK_V(&brcm_ledlock);

    for (i = 0, pCurLed = gLedCtrl; i < kLedEnd; i++, pCurLed++)
    {
#if defined(DEBUG_LED)
        printk("led[%d]: Mask=0x%04x, State = %d, blcd=%d\n", i, pCurLed->ledGreenGpio, pCurLed->ledState, pCurLed->blinkCountDown);
#endif
        spin_lock_irqsave(&brcm_ledlock, flags);        // LEDs can be changed from ISR
        switch (pCurLed->ledState)
        {
#if 1//__CTLK__, LingChun
		case kLedStateBlinkByPackets:
#endif
        case kLedStateOn:
        case kLedStateOff:
        case kLedStateFail:
            pCurLed->blinkCountDown = 0;            // reset the blink count down
            spin_unlock_irqrestore(&brcm_ledlock, flags);
            break;

        case kLedStateSlowBlinkContinues:
            if (pCurLed->blinkCountDown-- == 0)
            {
                pCurLed->blinkCountDown = kSlowBlinkCount;
                ledToggle(pCurLed);
            }
            gTimerOnRequests++;
            spin_unlock_irqrestore(&brcm_ledlock, flags);
            break;

        case kLedStateFastBlinkContinues:
            if (pCurLed->blinkCountDown-- == 0)
            {
                pCurLed->blinkCountDown = kFastBlinkCount;
                ledToggle(pCurLed);
            }
            gTimerOnRequests++;
            spin_unlock_irqrestore(&brcm_ledlock, flags);
            break;

#if 1 // __CenturyLink__, Hong-Yu
        case kLedStateLongBlinkContinues:
            if (pCurLed->blinkCountDown-- == 0)
            {
                pCurLed->blinkCountDown = kLongBlinkCount;
                ledToggle(pCurLed);
            }
            gTimerOnRequests++;
            spin_unlock_irqrestore(&brcm_ledlock, flags);
            break;

        case kLedStateFlashBlinkContinues: /* 250ms on, 750ms off */
            if (pCurLed->blinkCountDown-- == 0)
            {
               pCurLed->blinkCountDown = (((gInetLedRunningCounter++) & 1) ? kFlashBlinkOffCount : kFlashBlinkOnCount);
               ledToggle(pCurLed);
            }
            gTimerOnRequests++;
            spin_unlock_irqrestore(&brcm_ledlock, flags);
            break;

        case kLedStateAlternateBlinkContinues: /* 1500ms on, 1500ms off */
            if (pCurLed->blinkCountDown-- == 0)
            {
               pCurLed->blinkCountDown = kLongBlinkCount;
               // ledToggle(pCurLed);

               if ((++gInetLedRunningCounter) % 2 == 0) {
                   setLed (pCurLed, kLedOff, kLedGreen);
				   kerSysSetGpioState(BP_GPIO_22_AH,kLedStateOn);
               } else {
                   setLed (pCurLed, kLedOn, kLedGreen);
				   kerSysSetGpioState(BP_GPIO_22_AH,kLedStateOff);
               }
            }
            gTimerOnRequests++;
            spin_unlock_irqrestore(&brcm_ledlock, flags);
            break;
#endif

        case kLedStateUserWpsInProgress:          /* 200ms on, 100ms off */
            if (pCurLed->blinkCountDown-- == 0)
            {
#if 1 //__CTLK__, LingChun
                pCurLed->blinkCountDown = (((gLedRunningCounter++)&1)? k100msBlinkCount * 0: k100msBlinkCount * 1);
                if (gLedRunningCounter % 2 != 1) {
                    setLed (pCurLed, kLedOn, kLedGreen);
					setLed(&gLedCtrl[kLedWPSRED], kLedOn, kLedGreen);
                } else {
                    setLed (pCurLed, kLedOff, kLedGreen);
					setLed(&gLedCtrl[kLedWPSRED], kLedOff, kLedGreen);
                }
#else            
                pCurLed->blinkCountDown = (((gLedRunningCounter++)&1)? kFastBlinkCount: kSlowBlinkCount);
                ledToggle(pCurLed);
#endif				
            }
            gTimerOnRequests++;
            spin_unlock_irqrestore(&brcm_ledlock, flags);
            break;             
#if 1 //__Qwest__, SinJia
// Because the linux system clock is based on 100ms for context switch
// There are some surplus ms in timer_list for every trigger
// The 7 for k100msBlinkCount is the tuned value for 1 sec
// If the kernel or system hardware is update, this value would need to re-tuned
// In Auth, Red must blink and Green must light always.
// In order to avoid not synchronize
// Programmer only call Green or Red, the other light will show			
#endif
#if 1 //__CTLK__, LingChun
			case kLedStateUserWpsAuth: /*1000ms on, 1000ms off*/
			   if (pCurLed->blinkCountDown-- == 0){
					pCurLed->blinkCountDown = k100msBlinkCount * 7;
					pCurLed->ledState = kLedStateUserWpsAuth;
					setLed(pCurLed, kLedOn, kLedGreen);			  
                    if ((++gLedRunningCounter) % 2 == 1)
                        setLed(&gLedCtrl[kLedWPSRED], kLedOn, kLedGreen);
                    else
                        setLed(&gLedCtrl[kLedWPSRED], kLedOff, kLedGreen);

			   }
			   gTimerOnRequests++;
			   spin_unlock_irqrestore(&brcm_ledlock, flags);
			   break;
            case kLedStateUserWpsSuccess:
                if (pCurLed->blinkCountDown-- == 0)
                {
                    if (((++gLedRunningCounter)%10) == 0) {
                        pCurLed->ledState = kLedStateOn;
                        setLed(pCurLed, kLedOn, kLedGreen);
                    } else {
                        pCurLed->blinkCountDown = k100msBlinkCount * 7;
                        ledToggle(pCurLed);
                    }
                }
                gTimerOnRequests++;
                spin_unlock_irqrestore(&brcm_ledlock, flags);
                break;
#endif
        case kLedStateUserWpsError:               /* 100ms on, 100ms off */
            if (pCurLed->blinkCountDown-- == 0)
            {
#if 1 //__CTLK__, LingChun, 120 secs RED blink
                if (time_after (jiffies, wpsTimeout)) {
                    pCurLed->ledState = kLedStateOn;
                    setLed (pCurLed, kLedOn, kLedGreen);
					setLed(&gLedCtrl[kLedWPSRED], kLedOff, kLedGreen);

                } else {
                    pCurLed->blinkCountDown = k100msBlinkCount * 0;
                    if ((++gLedRunningCounter) % 2 == 1)
						setLed(&gLedCtrl[kLedWPSRED], kLedOn, kLedGreen);
                    else
						setLed(&gLedCtrl[kLedWPSRED], kLedOff, kLedGreen);
                }
#else
                pCurLed->blinkCountDown = kFastBlinkCount;
                ledToggle(pCurLed);
#endif				
            }
            gTimerOnRequests++;
            spin_unlock_irqrestore(&brcm_ledlock, flags);
            break;        

        case kLedStateUserWpsSessionOverLap:      /* 100ms on, 100ms off, 5 times, off for 500ms */        
            if (pCurLed->blinkCountDown-- == 0)
            {
#if 1 //__CTLK__, LingChun
                gLedRunningCounter++;
                if ((gLedRunningCounter % 10) == 0) {
                    pCurLed->blinkCountDown = 4;
                    setLed(pCurLed, kLedOff, kLedGreen);
					setLed(&gLedCtrl[kLedWPSRED], kLedOff, kLedGreen);
                    pCurLed->ledState = kLedStateUserWpsSessionOverLap;
                }
                else
                {
                    pCurLed->blinkCountDown = k100msBlinkCount*0;
                    if ((gLedRunningCounter % 2) == 1)
                        setLed(&gLedCtrl[kLedWPSRED], kLedOn, kLedGreen);
                    else
                        setLed(&gLedCtrl[kLedWPSRED], kLedOff, kLedGreen);
                }
#else
                if(((++gLedRunningCounter)%10) == 0) {
                    pCurLed->blinkCountDown = 4;
                    setLed(pCurLed, kLedOff, kLedGreen);
                    pCurLed->ledState = kLedStateUserWpsSessionOverLap;
                }
                else
                {
                    pCurLed->blinkCountDown = kFastBlinkCount;
                    ledToggle(pCurLed);
                }
#endif				
            }
            gTimerOnRequests++;
            spin_unlock_irqrestore(&brcm_ledlock, flags);
            break;        

        default:
            spin_unlock_irqrestore(&brcm_ledlock, flags);
            printk("Invalid state = %d\n", pCurLed->ledState);
        }
    }

    // Restart the timer if any of our previous LED operations required
    // us to restart the timer, or if any other threads requested a timer
    // restart.  Note that throughout this function, gTimerOn == TRUE, so
    // any other thread which want to restart the timer would only
    // increment the gTimerOnRequests and not call ledTimerStart.
    spin_lock_irqsave(&brcm_ledlock, flags);
    if (gTimerOnRequests > 0)
    {
#if 1 //__CTLK__, LingChun
		if( pCurLed->ledState==kLedStateUserWpsInProgress || 
			pCurLed->ledState==kLedStateUserWpsSuccess ||
			pCurLed->ledState==kLedStateUserWpsError ||
			pCurLed->ledState==kLedStateUserWpsSessionOverLap
		  )			
		{
			ledTimerStart100ms();
		}else
#endif
        ledTimerStart();
        gTimerOnRequests = 0;
    }
    else
    {
        gTimerOn = FALSE;
    }
    spin_unlock_irqrestore(&brcm_ledlock, flags);
}

void __init boardLedInit(void)
{
    PBP_LED_INFO pInfo;
    unsigned short i;
    short gpio;
#if defined(CONFIG_BCM96816)
    ETHERNET_MAC_INFO EnetInfo;
#endif

    spin_lock_init(&brcm_ledlock);

#if !(defined(CONFIG_BCM96328) || defined(CONFIG_BCM96362) || defined(CONFIG_BCM963268) || defined(CONFIG_BCM96318))
    /* Set blink rate for hardware LEDs. */
    GPIO->LEDCtrl &= ~LED_INTERVAL_SET_MASK;
    GPIO->LEDCtrl |= LED_INTERVAL_SET_80MS;
#endif

    gLedCtrl = (PLED_CTRL) kmalloc((kLedEnd * sizeof(LED_CTRL)), GFP_KERNEL);

    if( gLedCtrl == NULL ) {
        printk( "LED memory allocation error.\n" );
        return;
    }

    /* Initialize LED control */
    for (i = 0; i < kLedEnd; i++) {
        gLedCtrl[i].ledGreenGpio = -1;
        gLedCtrl[i].ledRedGpio = -1;
        gLedCtrl[i].ledState = kLedStateOff;
        gLedCtrl[i].blinkCountDown = 0;            // reset the blink count down
    }

    for( pInfo = bpLedInfo; pInfo->ledName != kLedEnd; pInfo++ ) {
        if( pInfo->bpFunc && (*pInfo->bpFunc) (&gpio) == BP_SUCCESS )
        {
            gLedCtrl[pInfo->ledName].ledGreenGpio = gpio;
        }
        if( pInfo->bpFuncFail && (*pInfo->bpFuncFail)(&gpio)==BP_SUCCESS )
        {
            gLedCtrl[pInfo->ledName].ledRedGpio = gpio;
        }
        setLed(&gLedCtrl[pInfo->ledName], kLedOff, kLedGreen);
        setLed(&gLedCtrl[pInfo->ledName], kLedOff, kLedRed);
    }

#if defined(CONFIG_BCM96816)
    if( BpGetEthernetMacInfo( &EnetInfo, 1 ) == BP_SUCCESS )
    {
        if ( EnetInfo.sw.ledInfo[0].duplexLed != BP_NOT_DEFINED )
        {
            gLedCtrl[kLedEth0Duplex].ledGreenGpio = EnetInfo.sw.ledInfo[0].duplexLed;
            setLed(&gLedCtrl[kLedEth0Duplex], kLedOff, kLedGreen);
        }
        if ( EnetInfo.sw.ledInfo[0].speedLed100 != BP_NOT_DEFINED )
        {
            gLedCtrl[kLedEth0Spd100].ledGreenGpio = EnetInfo.sw.ledInfo[0].speedLed100;
            setLed(&gLedCtrl[kLedEth0Spd100], kLedOff, kLedGreen);
        }
        if ( EnetInfo.sw.ledInfo[0].speedLed1000 != BP_NOT_DEFINED )
        {
            gLedCtrl[kLedEth0Spd1000].ledGreenGpio = EnetInfo.sw.ledInfo[0].speedLed1000;
            setLed(&gLedCtrl[kLedEth0Spd1000], kLedOff, kLedGreen);
        }
     
        if ( EnetInfo.sw.ledInfo[1].duplexLed != BP_NOT_DEFINED )
        {
            gLedCtrl[kLedEth1Duplex].ledGreenGpio = EnetInfo.sw.ledInfo[1].duplexLed;
            setLed(&gLedCtrl[kLedEth1Duplex], kLedOff, kLedGreen);
        }
        if ( EnetInfo.sw.ledInfo[1].speedLed100 != BP_NOT_DEFINED )
        {
            gLedCtrl[kLedEth1Spd100].ledGreenGpio = EnetInfo.sw.ledInfo[1].speedLed100;
            setLed(&gLedCtrl[kLedEth1Spd100], kLedOff, kLedGreen);
        }
        if ( EnetInfo.sw.ledInfo[1].speedLed1000 != BP_NOT_DEFINED )
        {
            gLedCtrl[kLedEth1Spd1000].ledGreenGpio = EnetInfo.sw.ledInfo[1].speedLed1000;
            setLed(&gLedCtrl[kLedEth1Spd1000], kLedOff, kLedGreen);
        }
    }
#endif

#if defined(DEBUG_LED)
    for (i=0; i < kLedEnd; i++)
        printk("initLed: led[%d]: Gpio=0x%04x, FailGpio=0x%04x\n", i, gLedCtrl[i].ledGreenGpio, gLedCtrl[i].ledRedGpio);
#endif

}

// led ctrl.  Maps the ledName to the corresponding ledInfoPtr and perform the led operation
void boardLedCtrl(BOARD_LED_NAME ledName, BOARD_LED_STATE ledState)
{
    unsigned long flags;
    PLED_CTRL pLed;

    BCM_ASSERT_NOT_HAS_SPINLOCK_V(&brcm_ledlock);

    spin_lock_irqsave(&brcm_ledlock, flags);     // LED can be changed from ISR

    if( (int) ledName < kLedEnd ) {

        pLed = &gLedCtrl[ledName];

        // If the state is kLedStateFail and there is not a failure LED defined
        // in the board parameters, change the state to kLedStateSlowBlinkContinues.
        if( ledState == kLedStateFail && pLed->ledRedGpio == -1 )
            ledState = kLedStateSlowBlinkContinues;

        // Save current LED state
        pLed->ledState = ledState;

        // Start from LED Off and turn it on later as needed
        setLed (pLed, kLedOff, kLedGreen);
        setLed (pLed, kLedOff, kLedRed);

        // Disable HW control for WAN Data LED. 
        // It will be enabled only if LED state is On
#if defined(CONFIG_BCM96328) || defined(CONFIG_BCM96362) || defined(CONFIG_BCM963268) || defined(CONFIG_BCM96318)
#if 1 // __CTL__, KuanJung
		if (ledName == kLedWanData || ledName == kLedInetR)
			LED->ledHWDis |= GPIO_NUM_TO_MASK(LED_INET_ACT);
#else
        if (ledName == kLedWanData)
            LED->ledHWDis |= GPIO_NUM_TO_MASK(pLed->ledGreenGpio);
#endif		
#elif defined(CONFIG_BCM96368)
        if (ledName == kLedWanData) {
            GPIO->AuxLedCtrl |= AUX_HW_DISAB_2;
            if (pLed->ledGreenGpio & BP_ACTIVE_LOW)
                GPIO->AuxLedCtrl |= (LED_STEADY_ON << AUX_MODE_SHFT_2);
            else
                GPIO->AuxLedCtrl &= ~(LED_STEADY_ON << AUX_MODE_SHFT_2);
        }
#endif

#if 1 //__CTLK__, LingChun, turn off the RED light if ledName = GREEN light
        if (ledName == kLedSes) {
			setLed(&gLedCtrl[kLedWPSRED], kLedOff, kLedGreen);
			
        }
#endif

        switch (ledState) {
        case kLedStateOn:
            // Enable SAR to control INET LED
#if defined(CONFIG_BCM96328) || defined(CONFIG_BCM96362) || defined(CONFIG_BCM963268) || defined(CONFIG_BCM96318)
#if 0 // __CTL__, KuanJung
            if (ledName == kLedWanData)
                LED->ledHWDis &= ~GPIO_NUM_TO_MASK(pLed->ledGreenGpio);
#endif
#elif defined(CONFIG_BCM96368)
            if (ledName == kLedWanData) {
                GPIO->AuxLedCtrl &= ~AUX_HW_DISAB_2;
                if (pLed->ledGreenGpio & BP_ACTIVE_LOW)
                    GPIO->AuxLedCtrl &= ~(LED_STEADY_ON << AUX_MODE_SHFT_2);
                else
                    GPIO->AuxLedCtrl |= (LED_STEADY_ON << AUX_MODE_SHFT_2);
            }
#endif
            setLed (pLed, kLedOn, kLedGreen);
            break;

        case kLedStateOff:
            break;

#if 1 // __CTL__, KuanJung
		case kLedStateBlinkByPackets:
			if (ledName == kLedWanData || ledName == kLedInetR)
			{
				LED->ledHWDis &= ~GPIO_NUM_TO_MASK(LED_INET_ACT);
				setLed (pLed, kLedOn, kLedGreen);
			}
			break;
#endif

        case kLedStateFail:
            setLed (pLed, kLedOn, kLedRed);
            break;

        case kLedStateSlowBlinkContinues:
            pLed->blinkCountDown = kSlowBlinkCount;
            gTimerOnRequests++;
            break;

        case kLedStateFastBlinkContinues:
            pLed->blinkCountDown = kFastBlinkCount;
            gTimerOnRequests++;
            break;

#if 1 // __CenturyLink__, Hong-Yu
        case kLedStateLongBlinkContinues: /* 1500ms on, 1500ms off */
            pLed->blinkCountDown = kLongBlinkCount;
            gTimerOnRequests++;
            break;

        case kLedStateFlashBlinkContinues: /* 250ms on, 750ms off */
            pLed->blinkCountDown = kFlashBlinkOnCount;
            gInetLedRunningCounter = 0;
            gTimerOnRequests++;
            break;

        case kLedStateAlternateBlinkContinues: /* 1500ms on, 1500ms off between red and green */
            pLed->blinkCountDown = kLongBlinkCount;
            gInetLedRunningCounter = 0;
            gTimerOnRequests++;
            break;
#endif

        case kLedStateUserWpsInProgress:          /* 200ms on, 100ms off */
            pLed->blinkCountDown = kFastBlinkCount;
#if 1 //__CTLK__, LingChun
            pLed->ledState = kLedStateUserWpsInProgress;
            setLed(pLed, kLedOn, kLedGreen);
			setLed(&gLedCtrl[kLedWPSRED], kLedOn, kLedGreen);
#endif			
            gLedRunningCounter = 0;
            gTimerOnRequests++;
            break;             
#if 1 //__CTLK__, LingChun
        case kLedStateUserWpsAuth: /*1000ms on, 1000ms off*/
			pLed->blinkCountDown = k100msBlinkCount;
			pLed->ledState=kLedStateUserWpsAuth;
			setLed (pLed, kLedOn, kLedGreen);			
			gLedRunningCounter = 0;
			gTimerOnRequests++;
           break;
        case kLedStateUserWpsSuccess: /*1000ms on, 1000ms off, 5 times, always light later*/
            pLed->blinkCountDown = k100msBlinkCount;

            // ensure the both Green and Red are set properly
            pLed->ledState=kLedStateUserWpsSuccess;
            setLed(pLed, kLedOff, kLedGreen);			
            gLedRunningCounter = 0;
            gTimerOnRequests++;
            break;
#endif
        case kLedStateUserWpsError:               /* 100ms on, 100ms off */
            pLed->blinkCountDown = kFastBlinkCount;
#if 1 //__CTLK__, LingChun
            wpsTimeout=jiffies + 120*HZ;
            setLed(&gLedCtrl[kLedWPSRED], kLedOn, kLedGreen);
#endif
            gLedRunningCounter = 0;
            gTimerOnRequests++;
            break;        

        case kLedStateUserWpsSessionOverLap:      /* 100ms on, 100ms off, 5 times, off for 500ms */
            pLed->blinkCountDown = kFastBlinkCount;
#if 1 //__CTLK__, LingChun
            gLedRunningCounter = 0;
#endif
            gTimerOnRequests++;
            break;        

        default:
            printk("Invalid led state\n");
        }
    }

    // If gTimerOn is false, that means ledTimerExpire has already finished
    // running and has not restarted the timer.  Then we can start it here.
    // Otherwise, we only leave the gTimerOnRequests > 0 which will be
    // noticed at the end of the ledTimerExpire function.
    if (!gTimerOn && gTimerOnRequests > 0)
    {
        ledTimerStart();
        gTimerOn = TRUE;
        gTimerOnRequests = 0;
    }
    spin_unlock_irqrestore(&brcm_ledlock, flags);
}
