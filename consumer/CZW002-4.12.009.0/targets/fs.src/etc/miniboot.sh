#!/bin/sh

#__MSTC__,Jim
#
#To be executed after /etc/init.d/bcm-base-drivers.sh
#To makesure the module.ko has been inserted before command as below.
  # Modify the printk loglevel
  echo 4 > /proc/sys/kernel/printk
  
  # Startup the xDSL Driver
  echo "Start xDSL Driver"
  adsl start
  adsl connection --up

  /bin/swmdk &
  ifconfig eth0 up
  ifconfig eth1 up
  ifconfig eth2 up
  ifconfig eth3 up
  ifconfig eth4 up
  brctl addbr br0 2>/dev/null
  brctl setfd br0 0                  #Jim
  brctl enableportsnooping br0 2     #Jim
  brctl addif br0 eth0 2>/dev/null
  brctl addif br0 eth1 2>/dev/null
  brctl addif br0 eth2 2>/dev/null
  brctl addif br0 eth3 2>/dev/null
  brctl addif br0 eth4 2>/dev/null
  ifconfig br0 192.192.192.4
  ifconfig wl0 up
  brctl addif br0 wl0 2>/dev/null
  wlctl -i wl0 phytype > /var/wl0
  wlctl -i wl0 revinfo > /var/wl0
  wlctl -i wl0 bands > /var/wl0bands
  wlctl -i wl0 ver > /var/wlver 
  wlctl -i wl0 cap > /var/wl0cap
  wlctl -i wl0 phy_watchdog 0
  wlctl -i wl0 up
  wlctl -i wl0 leddc 0 2>/dev/null
  wlctl -i wl0 down
  wlctl -i wl0 wds none
  wlctl -i wl0 mbss 0
  wlctl -i wl0 bss -C 0 down
  wlctl -i wl0 bss -C 1 down
  wlctl -i wl0 bss -C 2 down
  wlctl -i wl0 bss -C 3 down
  wlctl -i wl0 ssid -C 0 'M''F''G'
  wlctl -i wl0 ap 1
  wlctl -i wl0 infra 1
  wlctl -i wl0 closed 0
  wlctl -i wl0 country US
  wlctl -i wl0 band b
  wlctl -i wl0 regulatory 0
  wlctl -i wl0 radar 0 2>/dev/null
  wlctl -i wl0 spect 0 2>/dev/null
  wlctl -i wl0 nmode -1
  wlctl -i wl0 mimo_bw_cap 1
  wlctl -i wl0 chanspec -c 4 -b 2 -w 40 -s -1
  wlctl -i wl0 wpa_cap -C 0 > /var/wpa_cap0 
  wlctl -i wl0 wpa_cap -C 0 0 2>/dev/null
  wlctl -i wl0 wpa_cap -C 1 > /var/wpa_cap0 
  wlctl -i wl0 wpa_cap -C 1 0 2>/dev/null
  wlctl -i wl0 wpa_cap -C 2 > /var/wpa_cap0 
  wlctl -i wl0 wpa_cap -C 2 0 2>/dev/null
  wlctl -i wl0 wpa_cap -C 3 > /var/wpa_cap0 
  wlctl -i wl0 wpa_cap -C 3 0 2>/dev/null
  wlctl -i wl0 maxassoc 32
  wlctl -i wl0 bss_maxassoc 32
  wlctl -i wl0 gmode Auto
  wlctl -i wl0 gmode_protection_override -1
  wlctl -i wl0 gmode_protection_control 2
  wlctl -i wl0 nmode_protection_override -1
  wlctl -i wl0 protection_control 2
  wlctl -i wl0 rifs_advert 0
  wlctl -i wl0 obss_coex 0
  wlctl -i wl0 stbc_tx -1
  wlctl -i wl0 nreqd 0
  wlctl -i wl0 wme 0 2>/dev/null
  wlctl -i wl0 afterburner_override 0 2>/dev/null
  wlctl -i wl0 ampdu 1
  wlctl -i wl0 afterburner_override 0
  wlctl -i wl0 wme 1 2>/dev/null
  wlctl -i wl0 wme_noack 0 2>/dev/null
  wlctl -i wl0 wme_apsd 1 2>/dev/null
  wlctl -i wl0 wme_bss_disable 0
  wlctl -i wl0 plcphdr long
  wlctl -i wl0 rate 0
  wlctl -i wl0 bg_rate 0 
  wlctl -i wl0 bg_mrate 18.0 
  wlctl -i wl0 rtsthresh 2347
  wlctl -i wl0 fragthresh 2346
  wlctl -i wl0 dtim 1
  wlctl -i wl0 bi 100
  wlctl -i wl0 bcn_rotate 1
  wlctl -i wl0 frameburst 1
  wlctl -i wl0 ap_isolate 0
  wlctl -i wl0 pwr_percent 100
  wlctl -i wl0 wmf_bss_enable 0
  wlctl -i wl0.1 wmf_bss_enable 0
  wlctl -i wl0.2 wmf_bss_enable 0
  wlctl -i wl0.3 wmf_bss_enable 0
  wlctl -i wl0 chanim_mode 1
  wlctl -i wl0 rxchain_pwrsave_enable 0
  wlctl -i wl0 rxchain_pwrsave_quiet_time 1800
  wlctl -i wl0 rxchain_pwrsave_pps 10
  wlctl -i wl0 radio_pwrsave_enable 0 2>/dev/null
  wlctl -i wl0 radio_pwrsave_quiet_time 10
  wlctl -i wl0 radio_pwrsave_pps 10
  wlctl -i wl0 radio_pwrsave_level 0 2>/dev/null
  wlctl -i wl0 mac none
  wlctl -i wl0 macmode 0
  wlctl -i wl0 up
  wlctl -i wl0 rmwep -C 0 0
  wlctl -i wl0 rmwep -C 0 1
  wlctl -i wl0 rmwep -C 0 2
  wlctl -i wl0 rmwep -C 0 3
  wlctl -i wl0 rmwep -C 1 0
  wlctl -i wl0 rmwep -C 1 1
  wlctl -i wl0 rmwep -C 1 2
  wlctl -i wl0 rmwep -C 1 3
  wlctl -i wl0 rmwep -C 2 0
  wlctl -i wl0 rmwep -C 2 1
  wlctl -i wl0 rmwep -C 2 2
  wlctl -i wl0 rmwep -C 2 3
  wlctl -i wl0 rmwep -C 3 0
  wlctl -i wl0 rmwep -C 3 1
  wlctl -i wl0 rmwep -C 3 2
  wlctl -i wl0 rmwep -C 3 3
  wlctl -i wl0 wsec -C 0 0
  wlctl -i wl0 wsec_restrict -C 0 0
  wlctl -i wl0 wpa_auth -C 0 0
  wlctl -i wl0 eap 0
  wlctl -i wl0 auth -C 0 0
  wlctl -i wl0 wdswsec 0
  wlctl -i wl0 wdswsec_enable 0
  wlctl -i wl0 bss -C 0 up
  wlctl -i wl0 lazywds 0
  wlctl -i wl0 wds 
  wlctl -i wl0 wdstimeout 1
  wlctl -i wl0 phy_watchdog 1
  wlctl -i wl0 fcache 1
  fc disable
  # Set CONFIG_DEVPTS_MULTIPLE_INSTANCES=y
  mount -t devpts devpts /dev/pts
  mknod -m 666 /dev/ptmx c 5 2
  # generate login files
  echo 'admin:tP2w1wFvu8GXo:0:0:Administrator:/:/bin/sh' > /var/passwd
  echo "root::0:root,admin,support,user" > /var/group
  # bring up busybox telnetd (/usr/sbin/telnetd) instead of brcm telnetd (/bin/telnetd)
  /usr/sbin/telnetd
  echo "Initramfs filesystem init done!"
