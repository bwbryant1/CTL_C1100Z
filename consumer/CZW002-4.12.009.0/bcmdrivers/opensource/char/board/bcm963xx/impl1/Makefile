# Makefile for the bcm963xx board drivers
#


obj-y := board.o bcm63xx_flash.o bcm63xx_led.o bcm63xx_gpio.o

ifeq ($(strip $(BRCM_CHIP)),6816)
obj-y += spidevices.o
endif

ifeq ($(strip $(BRCM_CHIP)),63268)
obj-y += spidevices.o
endif


ifneq ($(strip $(CONFIG_BCM_CPLD1)),)
    obj-y += bcmcpld1.o
	EXTRA_CFLAGS += -DCONFIG_BCM_CPLD1
endif

ifneq ($(strip $(CONFIG_MSTC_WDT)),)
	obj-y += mstc_wdt.o
endif

EXTRA_CFLAGS += -I. -I$(INC_BRCMDRIVER_PUB_PATH)/$(BRCM_BOARD) -I$(INC_BRCMSHARED_PUB_PATH)/$(BRCM_BOARD) -I$(INC_BRCMSHARED_PUB_PATH)/$(BRCM_BOARD)

# __MSTC__, Paul Ho, for WLAN/WPS Button
ifneq ($(strip $(CONFIG_BCM_WLAN)),)
	ifneq ($(strip $(BUILD_MTS_WPS_BTN_PER)),)
		EXTRA_CFLAGS += -DMTS_WPS_BTN_PER=$(BUILD_MTS_WPS_BTN_PER)
	endif
endif
# end, __MTS__

#__MTS__, FuChia, Reset button time
ifneq ($(strip $(BUILD_MTS_RESTORE_BTN_PER)),)
EXTRA_CFLAGS += -DMTS_RESTORE_BTN_PER=$(BUILD_MTS_RESTORE_BTN_PER)
endif
#end, __MTS__, FuChia

#__MTS__, KuanJung, backup psi
ifneq ($(strip $(BUILD_BACKUP_PSI)),)
EXTRA_CFLAGS += -DSUPPORT_BACKUP_PSI=$(BUILD_BACKUP_PSI)
endif
#end, __MTS__, KuanJung

EXTRA_CFLAGS += -Werror -Wfatal-errors
EXTRA_CFLAGS += -g

ifneq ($(strip $(CONFIG_BCM_WLAN)),)
	EXTRA_CFLAGS += -DWIRELESS
endif

# __MSTC__, RaynorChung: Support 963268, patch form SVN#3597 on http://svn.zyxel.com.tw/svn/CPE_SW1/BCM96368/trunk/P-870HA/branches/cht/fttb8/4.11
ifeq ($(strip $(INC_NAND_FLASH_DRIVER)),1)
EXTRA_CFLAGS += -DINC_NAND_FLASH_DRIVER=$(INC_NAND_FLASH_DRIVER)
endif
# end __MTS__, RaynorChung: Support 963268, patch form SVN#3597 on http://svn.zyxel.com.tw/svn/CPE_SW1/BCM96368/trunk/P-870HA/branches/cht/fttb8/4.11 

#__MSTC__, Richard Huang
ifeq ($(strip $(BUILD_MSTC_ALL_WAN_SAME_MAC)),y)
EXTRA_CFLAGS += -DMSTC_ALL_WAN_SAME_MAC
endif
ifeq ($(strip $(BUILD_MSTC_DIFF_L2_SAME_MAC)),y)
EXTRA_CFLAGS += -DMSTC_DIF_L2_SAME_MAC
endif
#__MSTC__, Richard Huang

ifneq ($(strip $(BUILD_5G)),)
EXTRA_CFLAGS += -DBUILD_5G
endif

-include $(TOPDIR)/Rules.make

clean:
	rm -f core *.o *.a *.s

