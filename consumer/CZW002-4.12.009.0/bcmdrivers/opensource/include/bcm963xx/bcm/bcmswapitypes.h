/*
* <:copyright-BRCM:2011:DUAL/GPL:standard
* 
*    Copyright (c) 2011 Broadcom Corporation
*    All Rights Reserved
* 
* This program is free software; you can redistribute it and/or modify
* it under the terms of the GNU General Public License, version 2, as published by
* the Free Software Foundation (the "GPL").
* 
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
* GNU General Public License for more details.
* 
* 
* A copy of the GPL is available at http://www.broadcom.com/licenses/GPLv2.php, or by
* writing to the Free Software Foundation, Inc., 59 Temple Place - Suite 330,
* Boston, MA 02111-1307, USA.
* 
* :>
 */


#ifndef __BCM_SWAPI_TYPES_H__
#define __BCM_SWAPI_TYPES_H__

//#include <bcmtypes.h>
#if 1 //__MSTC__, JhihPing, /* auto hunt */
#include <bcmtypes.h>
#include <bcmxtmrt.h>
#endif

/*
 * BCM API error codes.
 *
 * Note: An error code may be converted to a string by passing the code
 * to bcm_errmsg().
 */
typedef enum bcm_error_e {
  BCM_E_NONE = 0,
  BCM_E_INTERNAL,
  BCM_E_MEMORY,
  BCM_E_UNIT,
  BCM_E_PARAM,
  BCM_E_EMPTY,
  BCM_E_FULL,
  BCM_E_NOT_FOUND,
  BCM_E_EXISTS,
  BCM_E_TIMEOUT,
  BCM_E_BUSY,
  BCM_E_FAIL,
  BCM_E_DISABLED,
  BCM_E_BADID,
  BCM_E_RESOURCE,
  BCM_E_CONFIG,
  BCM_E_UNAVAIL,
  BCM_E_INIT,
  BCM_E_PORT
} bcm_error_t;

typedef int bcm_port_t;

/* bcm_vlan_t */
typedef unsigned short bcm_vlan_t;

/* bcm_vlan_tag_t */
typedef unsigned int bcm_vlan_tag_t;

/* bcm_cos_t */
typedef int bcm_cos_t;

/* bcm_cos_queue_t */
typedef int bcm_cos_queue_t;

/* Various operations through the SIOCETHSWCTLOPS */
enum {
    ETHSWDUMPPAGE = 0,
    ETHSWDUMPIUDMA,
    ETHSWIUDMASPLIT,
    ETHSWDUMPMIB,
    ETHSWSWITCHING,
    ETHSWRXSCHEDULING,
    ETHSWWRRPARAM,
    ETHSWUSEDEFTXQ,
    ETHSWDEFTXQ,
    ETHSWRXRATECFG,
    ETHSWRXRATELIMITCFG,
    ETHSWRXPKTRATECFG,
    ETHSWRXPKTRATELIMITCFG,
    ETHSWCONTROL,
    ETHSWPRIOCONTROL,
    ETHSWPORTTAGREPLACE,
    ETHSWPORTTAGMANGLE,
    ETHSWPORTTAGMANGLEMATCHVID,
    ETHSWPORTTAGSTRIP,
    ETHSWPORTPAUSECAPABILITY,
    ETHSWVLAN,
    ETHSWGETRXCOUNTERS,
    ETHSWRESETRXCOUNTERS,
    ETHSWPBVLAN,
    ETHSWCOSCONF,
    ETHSWCOSSCHED,
    ETHSWCOSPORTMAP,
    ETHSWCOSRXCHMAP,
    ETHSWCOSTXCHMAP,
    ETHSWCOSTXQSEL,
    ETHSWSTATCLR,
    ETHSWSTATPORTCLR,
    ETHSWSTATSYNC,
    ETHSWSTATGET,
    ETHSWPORTRXRATE,
    ETHSWPORTTXRATE,
    ETHSWTEST1,
    ETHSWARLACCESS,
    ETHSWPORTDEFTAG,
    ETHSWCOSPRIORITYMETHOD,
    ETHSWREGACCESS,
    ETHSWSPIACCESS,
    ETHSWPSEUDOMDIOACCESS,
    ETHSWINFO,
    ETHSWLINKSTATUS,
    ETHSWPORTTRAFFICCTRL,
    ETHSWPORTLOOPBACK,
    ETHSWPHYMODE,
    ETHSWPKTPAD,
    ETHSWJUMBO,
    ETHSWCOSDSCPPRIOMAP,
    ETHSWKERNELPOLL,
    ETHSWPHYCFG,
    ETHSWMOCASOFTSWITCH, 
    ETHSWSOFTSWITCHSTARTQ,
    ETHSWMOCAXMITBUDGET,
    ETHSWMOCAPORTCHECK,
    ETHSWEPONUNITOUNICTRL,
    ETHSWDEBUG,
#if 1 //__MSTC__, JhihPing, /* auto hunt */
    ETHSWSENDHUNTPATTERN,
    ETHSWGETHUNTSTATUS,
    ETHSWSETHUNTINFO,
#endif
#if 1 //__CTLK__, Kaiping, Ether LAN statistics, Get internal/external switch mib count
    ETHSWGETMIB,
#endif
#if 1 // __CTLK__, SeanLu 20150526, Supoort ethswctl port mirror 
    ETHSWMIRROR,
#endif
    ETHSWGETIFNAME
};

#if defined(CONFIG_BCM96816) || defined(CHIP_6816) || defined(CONFIG_BCM96818) || defined(CHIP_6818)
#define BCM_COS_COUNT  8
#else
#define BCM_COS_COUNT  4
#endif

#ifndef IFNAMSIZ
#define IFNAMSIZ  16
#endif
 
struct ethswctl_data {
    /* ethswctl ioctl operation */
    int op;
    /* page number */
    int page;
    /* switch unit number */
    int unit;
    /* switch port number */
    int port;
    /* dump subset or all; or indicates enable/disable/get op */
    int type;
#define TYPE_SUBSET  0
#define TYPE_ALL     1
#define TYPE_DISABLE 0
#define TYPE_ENABLE  1
#define TYPE_GET     2
#define TYPE_SET     3
#define TYPE_DUMP    4
#define TYPE_FLUSH   5
    int sub_type;
#define SUBTYPE_ISRCFG      0
#define SUBTYPE_RXDUMP      1
#define SUBTYPE_RESETMIB    2
#define SUBTYPE_RESETSWITCH 3
    /* hardware switching enable/disable status */
    int status;
#define STATUS_DISABLED 0
#define STATUS_ENABLED  1
    int vlan_tag;
    int vlan_param;
    int replace_type;
/* Defines for indicating the parameter in tag replace register */
#define  REPLACE_VLAN_TAG    0
#define  REPLACE_VLAN_TPID   1
#define  REPLACE_VLAN_TCI    2
#define  REPLACE_VLAN_VID    3
#define  REPLACE_VLAN_8021P  4
#define  REPLACE_VLAN_CFI  5
    int op_map;
    int ret_val;
    int val;
    int max_pkts_per_iter;
    int weights[BCM_COS_COUNT];
    int priority;
    int sw_ctrl_type;
    /* scheduling value for ETHSETSCHEDULING */
    int scheduling;
    int vid;
    unsigned char mac[6];
    unsigned char data[8];
    int chip_id;
    int spi_id;
    int bus_num;
    int fwd_map;
    int untag_map;
    int queue;
    int channel;
    int numq;
    unsigned long limit;
    unsigned long burst_size;
    unsigned long long counter_val;
    unsigned int vendor_id;
    unsigned int dev_id;
    unsigned int rev_id;
    int counter_type;
    unsigned int offset;
    int length;
    int speed;
    int duplex;
    unsigned int port_map;
    unsigned int phy_portmap;
	int phycfg;
	int epon_port;
    char ifname[IFNAMSIZ];
#if 1 //__MSTC__, JhihPing, /* auto hunt */
   XTM_VCHUNT_TEST_CFG enetVt;
   XTM_VCAUTOHUNT_INFO enetVi;
#endif
#if 1 //__CTLK__, Kaiping, Ether LAN statistics, Get internal/external switch mib count
    unsigned int rxJabbers;
    unsigned int rxFragments;
    unsigned int rxOversize;
    unsigned int rxUndersize;
#endif
#if 1 // __CTLK__, SeanLu 20150526, Supoort ethswctl port mirror 
   struct port_mirror_params
   {
      int enable;
      int mirror_port;
      unsigned int ing_pmap;
      unsigned int eg_pmap;
      unsigned int blk_no_mrr;
      int tx_port; /*Optional - if not supplied all tx traffic is mirrored to \"mirror_port\"; Applicable only to Runner*/
      int rx_port; /*Optional - if not supplied all rx traffic is mirrored to \"mirror_port\"; Applicable only to Runner*/
   }port_mirror_cfg;
#endif
};

/* Defines for set/get of various fields in VLAN TAG */
#define BCM_NET_VLAN_TPID_S        16
#define BCM_NET_VLAN_TPID_M        0xFFFF
#define BCM_NET_VLAN_VID_S         0
#define BCM_NET_VLAN_VID_M       0xFFF
#define BCM_NET_VLAN_TCI_S         0
#define BCM_NET_VLAN_TCI_M       0xFFFF
#define BCM_NET_VLAN_8021P_S       13
#define BCM_NET_VLAN_8021P_M       0x7
#define BCM_NET_VLAN_CFI_S         12
#define BCM_NET_VLAN_CFI_M         0x1

#define VLAN_FWD_MAP_M   0x1FF
#define VLAN_UNTAG_MAP_M 0x1FF
#define VLAN_UNTAG_MAP_S 9

/* Switch controls for sw_ctrl_type */
typedef enum bcm_switch_control_e {
  bcmSwitchBufferControl,       /* Enable/Disable Total/TxQ Pause/Drop */
  bcmSwitch8021QControl,          /* Enable/Disable 802.1Q */
  bcmSwitchTotalDropThreshold,    /* Configure Total Drop Threshold */
  bcmSwitchTotalPauseThreshold,   /* Configure Total Pause Threshold */
  bcmSwitchTotalHysteresisThreshold,  /* Configure Total Hysteresis Threshold */
  bcmSwitchTxQHiDropThreshold,    /* Configure TxQ Hi Drop Threshold */
  bcmSwitchTxQHiPauseThreshold,   /* Configure TxQ Hi Pause Threshold */
  bcmSwitchTxQHiHysteresisThreshold,  /* Configure TxQ Hi Hysteresis Threshold */
  bcmSwitchTxQLowDropThreshold,   /* Configure TxQ LOW Drop Threshold */
  bcmSwitch__Count
} bcm_switch_control_t;


/* For bcmSwitchBufferControl */
#define BCM_SWITCH_TXQ_PAUSE     0x1      /* Enable/Disable TXQ DROP. */
#define BCM_SWITCH_TXQ_DROP      0x2      /* Enable/Disable TXQ PAUSE. */
#define BCM_SWITCH_TOTAL_PAUSE     0x4      /* Enable/Disable TOTAL DROP. */
#define BCM_SWITCH_TOTAL_DROP    0x8      /* Enable/Disable TOTAL PAUSE. */

/* Defines for the op_map in tag_mangle_set/get */
#define BCM_PORT_REPLACE_TPID    0x8000  /* Replace TPID */
#define BCM_PORT_REPLACE_8021P     0x4000  /* Replace 802.1p bits */
#define BCM_PORT_REPLACE_CFI     0x2000  /* Replace CFI bit */
#define BCM_PORT_REPLACE_VID     0x1000  /* Replace VLAN ID */
#define BCM_PORT_TAG_MANGLE_OP_MAP_M 0xF000  /* Mask for all tag mangling ops */


/*  For scheduling mechanism selection */
#define SP_SCHEDULING  0
#define WRR_SCHEDULING 1
#define FAP_SCHEDULING 2
#define BCM_COSQ_STRICT  0
#define BCM_COSQ_WRR     1
#define BCM_COSQ_COMBO   2

#if (defined(CONFIG_BCM96816) || defined(CONFIG_BCM96818)) || (defined(CHIP_6816) || defined(CHIP_6818)) 
#define NUM_EGRESS_QUEUES  8
#else
#define NUM_EGRESS_QUEUES  4
#endif

#define QOS_PAUSE_DROP_EN_MAP 0xF
#define MAX_PRIORITY_VALUE    7

/* Return Value Definitions */
#define BCM_E_ERROR  1

/* For pause_capability set/get functions */
#define PAUSE_FLOW_CTRL_NONE 0
#define PAUSE_FLOW_CTRL_AUTO 1
#define PAUSE_FLOW_CTRL_BOTH 2
#define PAUSE_FLOW_CTRL_TX   3
#define PAUSE_FLOW_CTRL_RX   4
#define PAUSE_FLOW_CTRL_BCMSWITCH_OFF  5
#define PAUSE_FLOW_CTRL_BCMSWITCH_ON   6
#define SWITCH_PORTS_ALL_PHYS  255

/* For ETHSWCOSTXQSEL */
/* Use Tx BD priority for egress queue selection */
#define USE_TX_BD_PRIORITY  0
/* Use Tx iuDMA channel for egress queue selection */
#define USE_TX_DMA_CHANNEL  1
/* Indicates neither BD nor channel is used for queue selection*/
#define NONE_OF_THE_METHODS 0xFF

#define PORT_QOS      0
#define MAC_QOS       1
#define IEEE8021P_QOS 2
#define DIFFSERV_QOS  3
#define COMBO_QOS     4

#define PORT_RXDISABLE 0x1
#define PORT_TXDISABLE 0x2

#define MBUS_PCI     0
#define MBUS_SPI     1
#define MBUS_MDIO    2
#define MBUS_UBUS    3
#define MBUS_HS_SPI  4
#define MBUS_NONE    -1

#endif /* __BCM_SWAPI_TYPES_H__ */
