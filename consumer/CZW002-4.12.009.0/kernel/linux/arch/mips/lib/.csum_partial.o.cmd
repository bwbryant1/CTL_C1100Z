cmd_arch/mips/lib/csum_partial.o := /opt/toolchains/uclibc-crosstools-gcc-4.4.2-1/usr/bin/mips-linux-uclibc-gcc -Wp,-MD,arch/mips/lib/.csum_partial.o.d  -nostdinc -isystem /opt/toolchains/uclibc-crosstools-gcc-4.4.2-1/usr/bin/../lib/gcc/mips-linux-uclibc/4.4.2/include -Iinclude  -I/home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include -include include/linux/autoconf.h -D__KERNEL__ -D__ASSEMBLY__   -mno-check-zero-division -mabi=32 -G 0 -mno-abicalls -fno-pic -pipe -msoft-float -ffreestanding  -march=mips32 -Wa,-mips32 -Wa,--trap -I/home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/mach-bcm963xx -I/home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/mach-generic       -c -o arch/mips/lib/csum_partial.o arch/mips/lib/csum_partial.S

deps_arch/mips/lib/csum_partial.o := \
  arch/mips/lib/csum_partial.S \
    $(wildcard include/config/64bit.h) \
    $(wildcard include/config/cpu/little/endian.h) \
    $(wildcard include/config/cpu/daddi/workarounds.h) \
    $(wildcard include/config/cpu/sb1.h) \
  include/linux/errno.h \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/errno.h \
  include/asm-generic/errno-base.h \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/asm.h \
    $(wildcard include/config/printk.h) \
    $(wildcard include/config/cpu/has/prefetch.h) \
    $(wildcard include/config/sgi/ip28.h) \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/sgidefs.h \
  include/asm/asm-offsets.h \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/regdef.h \

arch/mips/lib/csum_partial.o: $(deps_arch/mips/lib/csum_partial.o)

$(deps_arch/mips/lib/csum_partial.o):
