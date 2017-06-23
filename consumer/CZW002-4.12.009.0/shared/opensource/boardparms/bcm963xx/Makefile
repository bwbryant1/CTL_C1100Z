
ifeq ($(CONFIG_MIPS_BRCM),y)

# Linux
obj-y		+= boardparms.o

ifneq ($(strip $(VOXXXLOAD)),)
obj-y		+= boardparms_voice.o
endif

ifeq ($(strip $(BUILD_HPNA)), y)
EXTRA_CFLAGS += -DBUILD_HPNA
endif

ifeq ($(strip $(BUILD_5G)), y)
EXTRA_CFLAGS += -DBUILD_5G
endif

ifeq ($(strip $(SUPPORT_MSTC_C2100)), y)
EXTRA_CFLAGS += -DSUPPORT_MSTC_C2100
else ifeq ($(strip $(SUPPORT_MSTC_C1100)), y)
EXTRA_CFLAGS += -DSUPPORT_MSTC_C1100
endif

EXTRA_CFLAGS += -DCONFIG_BCM9$(BRCM_CHIP) -I$(INC_BRCMSHARED_PUB_PATH)/$(BRCM_BOARD) -I$(INC_BRCMDRIVER_PUB_PATH)/$(BRCM_BOARD)
-include $(TOPDIR)/Rules.make

endif


