	.file	1 "bounds.c"
	.section .mdebug.abi32
	.previous
	.gnu_attribute 4, 3

 # -G value = 0, Arch = mips32, ISA = 32
 # GNU C (Buildroot 2010.02-git) version 4.4.2 (mips-linux-uclibc)
 #	compiled by GNU C version 4.3.2 [gcc-4_3-branch revision 141291], GMP version 4.2.4, MPFR version 2.4.1-p5.
 # GGC heuristics: --param ggc-min-expand=98 --param ggc-min-heapsize=128257
 # options passed:  -nostdinc -Iinclude
 # -I/home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include
 # -I/home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/mach-bcm963xx
 # -I/home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/mach-generic
 # -iprefix
 # /opt/toolchains/uclibc-crosstools-gcc-4.4.2-1/usr/bin/../lib/gcc/mips-linux-uclibc/4.4.2/
 # -D__KERNEL__ -DVMLINUX_LOAD_ADDRESS=0x80020000 -DCFG_LINUX_NET_PACKED
 # -DKBUILD_STR(s)=#s -DKBUILD_BASENAME=KBUILD_STR(bounds)
 # -DKBUILD_MODNAME=KBUILD_STR(bounds) -isystem
 # /opt/toolchains/uclibc-crosstools-gcc-4.4.2-1/usr/bin/../lib/gcc/mips-linux-uclibc/4.4.2/include
 # -include include/linux/autoconf.h -MD kernel/.bounds.s.d kernel/bounds.c
 # -G 0 -mno-check-zero-division -mabi=32 -mno-abicalls -msoft-float
 # -march=mips32 -mtune=mips32 -mllsc -mno-shared -auxbase-strip
 # kernel/bounds.s -O2 -Wall -Wundef -Wstrict-prototypes -Wno-trigraphs
 # -Werror-implicit-function-declaration -Wframe-larger-than=1024
 # -Wdeclaration-after-statement -Wno-pointer-sign -fno-strict-aliasing
 # -fno-common -fno-pic -ffreestanding -fno-stack-protector
 # -fomit-frame-pointer -fwrapv -fno-dwarf2-cfi-asm -fverbose-asm
 # options enabled:  -falign-loops -fargument-alias -fauto-inc-dec
 # -fbranch-count-reg -fcaller-saves -fcprop-registers -fcrossjumping
 # -fcse-follow-jumps -fdefer-pop -fdelayed-branch
 # -fdelete-null-pointer-checks -fearly-inlining
 # -feliminate-unused-debug-types -fexpensive-optimizations
 # -fforward-propagate -ffunction-cse -fgcse -fgcse-lm
 # -fguess-branch-probability -fident -fif-conversion -fif-conversion2
 # -findirect-inlining -finline -finline-functions-called-once
 # -finline-small-functions -fipa-cp -fipa-pure-const -fipa-reference
 # -fira-share-save-slots -fira-share-spill-slots -fivopts
 # -fkeep-static-consts -fleading-underscore -fmath-errno -fmerge-constants
 # -fmerge-debug-strings -fmove-loop-invariants -fomit-frame-pointer
 # -foptimize-register-move -foptimize-sibling-calls -fpcc-struct-return
 # -fpeephole -fpeephole2 -fregmove -freorder-blocks -freorder-functions
 # -frerun-cse-after-loop -fsched-interblock -fsched-spec
 # -fsched-stalled-insns-dep -fschedule-insns -fschedule-insns2
 # -fsigned-zeros -fsplit-ivs-in-unroller -fsplit-wide-types
 # -fstrict-overflow -fthread-jumps -ftoplevel-reorder -ftrapping-math
 # -ftree-builtin-call-dce -ftree-ccp -ftree-ch -ftree-copy-prop
 # -ftree-copyrename -ftree-cselim -ftree-dce -ftree-dominator-opts
 # -ftree-dse -ftree-fre -ftree-loop-im -ftree-loop-ivcanon
 # -ftree-loop-optimize -ftree-parallelize-loops= -ftree-pre -ftree-reassoc
 # -ftree-scev-cprop -ftree-sink -ftree-sra -ftree-switch-conversion
 # -ftree-ter -ftree-vect-loop-version -ftree-vrp -funit-at-a-time
 # -fverbose-asm -fwrapv -fzero-initialized-in-bss -mdivide-traps
 # -mdouble-float -meb -mexplicit-relocs -mextern-sdata -mfp-exceptions
 # -mfp32 -mfused-madd -mgp32 -mgpopt -mllsc -mlocal-sdata -mlong32
 # -mno-mips16 -mno-mips3d -msoft-float -msplit-addresses -muclibc

 # Compiler executable checksum: c708bf85d3cb72d4ee65fbd754744d92

	.text
	.align	2
	.globl	foo
	.set	nomips16
	.ent	foo
	.type	foo, @function
foo:
	.frame	$sp,0,$31		# vars= 0, regs= 0/0, args= 0, gp= 0
	.mask	0x00000000,0
	.fmask	0x00000000,0
#APP
 # 16 "kernel/bounds.c" 1
	
->NR_PAGEFLAGS 21 __NR_PAGEFLAGS	 #
 # 0 "" 2
 # 17 "kernel/bounds.c" 1
	
->MAX_NR_ZONES 3 __MAX_NR_ZONES	 #
 # 0 "" 2
#NO_APP
	j	$31
	.end	foo
	.size	foo, .-foo
	.ident	"GCC: (Buildroot 2010.02-git) 4.4.2"
