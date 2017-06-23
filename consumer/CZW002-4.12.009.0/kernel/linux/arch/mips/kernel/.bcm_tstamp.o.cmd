cmd_arch/mips/kernel/bcm_tstamp.o := /opt/toolchains/uclibc-crosstools-gcc-4.4.2-1/usr/bin/mips-linux-uclibc-gcc -Wp,-MD,arch/mips/kernel/.bcm_tstamp.o.d  -nostdinc -isystem /opt/toolchains/uclibc-crosstools-gcc-4.4.2-1/usr/bin/../lib/gcc/mips-linux-uclibc/4.4.2/include -Iinclude  -I/home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include -include include/linux/autoconf.h -D__KERNEL__ -Wall -Wundef -Wstrict-prototypes -Wno-trigraphs -fno-strict-aliasing -fno-common -Werror-implicit-function-declaration -O2 -mno-check-zero-division -mabi=32 -G 0 -mno-abicalls -fno-pic -pipe -msoft-float -ffreestanding -march=mips32 -Wa,-mips32 -Wa,--trap -I/home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/mach-bcm963xx -I/home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/mach-generic -D"VMLINUX_LOAD_ADDRESS=0x80020000" -Wframe-larger-than=1024 -fno-stack-protector -fomit-frame-pointer -Wdeclaration-after-statement -Wno-pointer-sign -fwrapv -fno-dwarf2-cfi-asm -DCFG_LINUX_NET_PACKED -g -Werror -Wfatal-errors -Werror   -D"KBUILD_STR(s)=\#s" -D"KBUILD_BASENAME=KBUILD_STR(bcm_tstamp)"  -D"KBUILD_MODNAME=KBUILD_STR(bcm_tstamp)"  -c -o arch/mips/kernel/bcm_tstamp.o arch/mips/kernel/bcm_tstamp.c

deps_arch/mips/kernel/bcm_tstamp.o := \
  arch/mips/kernel/bcm_tstamp.c \
    $(wildcard include/config/mips/brcm.h) \

arch/mips/kernel/bcm_tstamp.o: $(deps_arch/mips/kernel/bcm_tstamp.o)

$(deps_arch/mips/kernel/bcm_tstamp.o):
