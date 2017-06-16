#
#  Copyright 2011-2012, Broadcom Corporation
#
# <:label-BRCM:2012:proprietary:standard
# 
#  This program is the proprietary software of Broadcom Corporation and/or its
#  licensors, and may only be used, duplicated, modified or distributed pursuant
#  to the terms and conditions of a separate, written license agreement executed
#  between you and Broadcom (an "Authorized License").  Except as set forth in
#  an Authorized License, Broadcom grants no license (express or implied), right
#  to use, or waiver of any kind with respect to the Software, and Broadcom
#  expressly reserves all rights in and to the Software and all intellectual
#  property rights therein.  IF YOU HAVE NO AUTHORIZED LICENSE, THEN YOU HAVE
#  NO RIGHT TO USE THIS SOFTWARE IN ANY WAY, AND SHOULD IMMEDIATELY NOTIFY
#  BROADCOM AND DISCONTINUE ALL USE OF THE SOFTWARE.
# 
#  Except as expressly set forth in the Authorized License,
# 
#  1. This program, including its structure, sequence and organization,
#     constitutes the valuable trade secrets of Broadcom, and you shall use
#     all reasonable efforts to protect the confidentiality thereof, and to
#     use this information only in connection with your use of Broadcom
#     integrated circuit products.
# 
#  2. TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE SOFTWARE IS PROVIDED "AS IS"
#     AND WITH ALL FAULTS AND BROADCOM MAKES NO PROMISES, REPRESENTATIONS OR
#     WARRANTIES, EITHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE, WITH
#     RESPECT TO THE SOFTWARE.  BROADCOM SPECIFICALLY DISCLAIMS ANY AND
#     ALL IMPLIED WARRANTIES OF TITLE, MERCHANTABILITY, NONINFRINGEMENT,
#     FITNESS FOR A PARTICULAR PURPOSE, LACK OF VIRUSES, ACCURACY OR
#     COMPLETENESS, QUIET ENJOYMENT, QUIET POSSESSION OR CORRESPONDENCE
#     TO DESCRIPTION. YOU ASSUME THE ENTIRE RISK ARISING OUT OF USE OR
#     PERFORMANCE OF THE SOFTWARE.
# 
#  3. TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL BROADCOM OR
#     ITS LICENSORS BE LIABLE FOR (i) CONSEQUENTIAL, INCIDENTAL, SPECIAL,
#     INDIRECT, OR EXEMPLARY DAMAGES WHATSOEVER ARISING OUT OF OR IN ANY
#     WAY RELATING TO YOUR USE OF OR INABILITY TO USE THE SOFTWARE EVEN
#     IF BROADCOM HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES;
#     OR (ii) ANY AMOUNT IN EXCESS OF THE AMOUNT ACTUALLY PAID FOR THE
#     SOFTWARE ITSELF OR U.S. $1, WHICHEVER IS GREATER. THESE LIMITATIONS
#     SHALL APPLY NOTWITHSTANDING ANY FAILURE OF ESSENTIAL PURPOSE OF ANY
#     LIMITED REMEDY.
# :>
#

#!/bin/sh

echo "======Version Info======"

echo "######kernel version######"
cat /proc/version

if [ -e /bin/wlctl ]; then
    echo "######wl version######"
    /bin/wlctl ver
    /bin/wlctl revinfo
fi

if [ -e /bin/xdslctl ]; then
    echo "######xdsl version######"
    /bin/xdslctl --version
fi

if [ -e /bin/vodsl ]; then
    echo "######DSP version######"
    cat /proc/voice/dsp_version
fi

if [ -e /bin/dectd ]; then
    echo "######DECT version######"
    cat /proc/dect/version
fi

echo
echo
echo "======System Info======"

sys_info_list="/proc/uptime
               /proc/cpuinfo
               /proc/brcm/kernel_config
               /proc/interrupts
               /proc/meminfo
               /proc/iomem
               /proc/slabinfo
               /proc/modules
               /proc/timer_list
               /proc/bus/pci/devices
               /proc/sys/kernel/sched_compat_yield
               /proc/sys/kernel/sched_rt_period_us
               /proc/sys/kernel/sched_rt_runtime_us"

# busybox msh does not support passing lists to functions
# so must repeat the function here
for f in $sys_info_list
do
    echo "######${f}######"
    if [ -e $f ]; then
        cat $f
    else
        echo "$f does not exist on this system."
    fi
done

# Current Processes Information
echo "###### ps ######"
ps
#TODO log more details about important processes(ex;priority, cpu affinity etc..)


echo
echo
echo "======Networking Info======"

#Networking Information
echo "######ifconfig -a######"
ifconfig -a

echo "######brctl show######"
brctl show

echo "######route -n######"
route -n

#echo "######/proc/net/tcp######"
#cat /proc/net/tcp

#echo "######/proc/net/udp######"
#cat /proc/net/udp

echo "###### iptables -t nat -L ######"
iptables -t nat -L

echo "###### iptables -t filter -L ######"
iptables -t filter -L

echo "###### iptables -t mangle -L ######"
iptables -t mangle -L

net_info_list="/proc/net/arp
               /proc/sys/net/core/netdev_budget
               /proc/sys/net/core/netdev_max_backlog
               /proc/sys/net/core/dev_weight
               /proc/net/ip_tables_names
               /proc/net/ip_tables_matches
               /proc/net/ip_tables_targets
               /proc/net/netfilter/nf_log
               /proc/net/netfilter/nf_queue
               /proc/net/netfilter/nfnetlink_queue
               /proc/net/stat/nf_conntrack
               /proc/net/nf_conntrack
               /proc/net/nf_conntrack_expect"

# busybox msh does not support passing lists to functions
# so must repeat the function here
for f in $net_info_list
do
    echo "######${f}######"
    if [ -e $f ]; then
        cat $f
    else
        echo "$f does not exist on this system."
    fi
done

net_info_list="nf_conntrack_acct
               nf_conntrack_checksum
               nf_conntrack_generic_timeout
               nf_conntrack_icmp_timeout
               nf_conntrack_log_invalid
               nf_conntrack_tcp_be_liberal
               nf_conntrack_tcp_loose
               nf_conntrack_tcp_max_retrans
               nf_conntrack_tcp_timeout_close
               nf_conntrack_tcp_timeout_close_wait
               nf_conntrack_tcp_timeout_established
               nf_conntrack_tcp_timeout_fin_wait
               nf_conntrack_tcp_timeout_last_ack
               nf_conntrack_tcp_timeout_max_retrans
               nf_conntrack_tcp_timeout_syn_recv
               nf_conntrack_tcp_timeout_syn_sent
               nf_conntrack_tcp_timeout_time_wait
               nf_conntrack_tcp_timeout_unacknowledged
               nf_conntrack_udp_timeout
               nf_conntrack_udp_timeout_stream
               nf_conntrack_buckets
               nf_conntrack_max
               nf_conntrack_count
               nf_conntrack_expect_max"

# busybox msh does not support passing lists to functions
# so must repeat the function here.  Also it does not like long
# lists, so the netfilter list is broken into two parts
for f in $net_info_list
do
    lf=/proc/sys/net/netfilter/$f
    echo "######${lf}######"
    if [ -e $lf ]; then
        cat $lf
    else
        echo "$lf does not exist on this system."
    fi
done


echo
echo
echo "======Multicast Info======"
echo "###### /var/mcpd.conf ######"
cat /var/mcpd.conf

mcast_info_list="/proc/net/igmp 
                 /proc/net/igmp_snooping 
                 /proc/net/ip_mr_cache
                 /proc/net/ip_mr_vif
                 /proc/net/dev_mcast
                 /proc/net/igmp6 
                 /proc/net/mld_snooping 
                 /proc/net/ip6_mr_cache
                 /proc/net/ip6_mr_vif"

# busybox msh does not support passing lists to functions
# so must repeat the function here
for f in $mcast_info_list
do
    echo "######${f}######"
    if [ -e $f ]; then
        cat $f
    else
        echo "$f does not exist on this system."
    fi
done


if [ -e /bin/racoon ]; then
echo
echo
echo "======IPSec Info======"
ipsec_info_list="/var/psk.txt
                 /var/racoon.conf
                 /var/setkey.conf"

# busybox msh does not support passing lists to functions
# so must repeat the function here
for f in $ipsec_info_list
do
    echo "######${f}######"
    if [ -e $f ]; then
        cat $f
    else
        echo "$f does not exist on this system."
    fi
done
fi


echo
echo
echo "======Accelerators======"

if [ -e /proc/fcache ]; then
    echo "###### /proc/fcache/* ######"
    cat /proc/fcache/*
fi

if [ -e /proc/pktcmf ]; then
    echo "###### /proc/pktcmf/* ######"
    cat /proc/pktcmf/*
fi

if [ -e /bin/fap ]; then
    echo "###### fap print ######"
    /bin/fap print
fi

if [ -e /bin/cmf ]; then
    echo "###### cmf status ######"
    /bin/cmf status

    if cmf parser --fcb -1 >/dev/null 2>/dev/null; then
       echo "###### cmf parser fcb -1 ######"
       cmf parser --fcb -1
    fi
fi

if [ -e /bin/ethswctl ]; then
    echo "###### ethswctl -c arldump ######"
    /bin/ethswctl -c arldump 
fi

if [ -e /bin/spuctl ]; then
    echo "###### spuctl showstats ######"
    spuctl showstats
fi


echo
echo
echo "======Console Bootup Messages======"
cat /var/tmp/bootupmessages

