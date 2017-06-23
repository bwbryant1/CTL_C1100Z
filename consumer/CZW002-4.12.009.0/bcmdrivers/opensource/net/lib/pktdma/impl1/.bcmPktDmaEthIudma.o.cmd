cmd_/home/brandon/consume/CZW002-4.12.009.0/bcmdrivers/opensource/net/lib/pktdma/bcm963268/bcmPktDmaEthIudma.o := /opt/toolchains/uclibc-crosstools-gcc-4.4.2-1/usr/bin/mips-linux-uclibc-gcc -Wp,-MD,/home/brandon/consume/CZW002-4.12.009.0/bcmdrivers/opensource/net/lib/pktdma/bcm963268/.bcmPktDmaEthIudma.o.d  -nostdinc -isystem /opt/toolchains/uclibc-crosstools-gcc-4.4.2-1/usr/bin/../lib/gcc/mips-linux-uclibc/4.4.2/include -Iinclude  -I/home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include -include include/linux/autoconf.h -D__KERNEL__ -Wall -Wundef -Wstrict-prototypes -Wno-trigraphs -fno-strict-aliasing -fno-common -Werror-implicit-function-declaration -O2 -mno-check-zero-division -mabi=32 -G 0 -mno-abicalls -fno-pic -pipe -msoft-float -ffreestanding -march=mips32 -Wa,-mips32 -Wa,--trap -I/home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/mach-bcm963xx -I/home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/mach-generic -D"VMLINUX_LOAD_ADDRESS=0x80020000" -Wframe-larger-than=1024 -fno-stack-protector -fomit-frame-pointer -Wdeclaration-after-statement -Wno-pointer-sign -fwrapv -fno-dwarf2-cfi-asm -DCFG_LINUX_NET_PACKED -I/home/brandon/consume/CZW002-4.12.009.0/bcmdrivers/opensource/include/bcm963xx -I/home/brandon/consume/CZW002-4.12.009.0/shared/opensource/include/bcm963xx -I/home/brandon/consume/CZW002-4.12.009.0/bcmdrivers/opensource/net/enet/shared -I/home/brandon/consume/CZW002-4.12.009.0/bcmdrivers/broadcom/char/fap/impl1 -I/home/brandon/consume/CZW002-4.12.009.0/bcmdrivers/broadcom/char/fap/impl1/4ke -I/home/brandon/consume/CZW002-4.12.009.0/bcmdrivers/opensource/net/xtmrt/impl4 -I/home/brandon/consume/CZW002-4.12.009.0/shared/opensource/include/bcm963xx -Werror -Wall -Wfatal-errors   -D"KBUILD_STR(s)=\#s" -D"KBUILD_BASENAME=KBUILD_STR(bcmPktDmaEthIudma)"  -D"KBUILD_MODNAME=KBUILD_STR(bcmPktDmaEthIudma)"  -c -o /home/brandon/consume/CZW002-4.12.009.0/bcmdrivers/opensource/net/lib/pktdma/bcm963268/bcmPktDmaEthIudma.o /home/brandon/consume/CZW002-4.12.009.0/bcmdrivers/opensource/net/lib/pktdma/bcm963268/bcmPktDmaEthIudma.c

deps_/home/brandon/consume/CZW002-4.12.009.0/bcmdrivers/opensource/net/lib/pktdma/bcm963268/bcmPktDmaEthIudma.o := \
  /home/brandon/consume/CZW002-4.12.009.0/bcmdrivers/opensource/net/lib/pktdma/bcm963268/bcmPktDmaEthIudma.c \
    $(wildcard include/config/bcm/fap.h) \
    $(wildcard include/config/bcm/xtmcfg.h) \
    $(wildcard include/config/bcm/gmac.h) \
    $(wildcard include/config/bcm96816.h) \
    $(wildcard include/config/bcm96818.h) \
    $(wildcard include/config/bcm/pktdma/tx/splitting.h) \
    $(wildcard include/config/bcm/pktdma/rx/splitting.h) \
    $(wildcard include/config/bcm/ingqos.h) \
    $(wildcard include/config/bcm/bpm.h) \
  /home/brandon/consume/CZW002-4.12.009.0/bcmdrivers/opensource/include/bcm963xx/bcm_intr.h \
    $(wildcard include/config/bcm96318.h) \
    $(wildcard include/config/bcm96828.h) \
    $(wildcard include/config/bcm963268.h) \
    $(wildcard include/config/bcm96328.h) \
    $(wildcard include/config/bcm96368.h) \
    $(wildcard include/config/bcm96362.h) \
  /home/brandon/consume/CZW002-4.12.009.0/shared/opensource/include/bcm963xx/63268_intr.h \
  /home/brandon/consume/CZW002-4.12.009.0/bcmdrivers/opensource/include/bcm963xx/bcm_OS_Deps.h \
    $(wildcard include/config/numa.h) \
  include/linux/smp.h \
    $(wildcard include/config/smp.h) \
    $(wildcard include/config/use/generic/smp/helpers.h) \
    $(wildcard include/config/debug/preempt.h) \
  include/linux/errno.h \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/errno.h \
  include/asm-generic/errno-base.h \
  include/linux/types.h \
    $(wildcard include/config/uid16.h) \
    $(wildcard include/config/lbd.h) \
    $(wildcard include/config/phys/addr/t/64bit.h) \
    $(wildcard include/config/64bit.h) \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/types.h \
    $(wildcard include/config/highmem.h) \
    $(wildcard include/config/64bit/phys/addr.h) \
  include/asm-generic/int-ll64.h \
  include/linux/posix_types.h \
  include/linux/stddef.h \
  include/linux/compiler.h \
    $(wildcard include/config/trace/branch/profiling.h) \
    $(wildcard include/config/profile/all/branches.h) \
    $(wildcard include/config/enable/must/check.h) \
    $(wildcard include/config/enable/warn/deprecated.h) \
  include/linux/compiler-gcc.h \
    $(wildcard include/config/arch/supports/optimized/inlining.h) \
    $(wildcard include/config/optimize/inlining.h) \
    $(wildcard include/config/brcm/bounce.h) \
  include/linux/compiler-gcc4.h \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/posix_types.h \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/sgidefs.h \
  include/linux/list.h \
    $(wildcard include/config/debug/list.h) \
  include/linux/poison.h \
  include/linux/prefetch.h \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/processor.h \
    $(wildcard include/config/32bit.h) \
    $(wildcard include/config/cpu/cavium/octeon.h) \
    $(wildcard include/config/cavium/octeon/cvmseg/size.h) \
    $(wildcard include/config/mips/mt/fpaff.h) \
    $(wildcard include/config/cpu/has/prefetch.h) \
    $(wildcard include/config/mips/brcm.h) \
  include/linux/cpumask.h \
    $(wildcard include/config/disable/obsolete/cpumask/functions.h) \
    $(wildcard include/config/hotplug/cpu.h) \
    $(wildcard include/config/cpumask/offstack.h) \
    $(wildcard include/config/debug/per/cpu/maps.h) \
  include/linux/kernel.h \
    $(wildcard include/config/preempt/voluntary.h) \
    $(wildcard include/config/debug/spinlock/sleep.h) \
    $(wildcard include/config/prove/locking.h) \
    $(wildcard include/config/printk.h) \
    $(wildcard include/config/dynamic/debug.h) \
    $(wildcard include/config/ring/buffer.h) \
    $(wildcard include/config/tracing.h) \
    $(wildcard include/config/ftrace/mcount/record.h) \
  /opt/toolchains/uclibc-crosstools-gcc-4.4.2-1/usr/bin/../lib/gcc/mips-linux-uclibc/4.4.2/include/stdarg.h \
  include/linux/linkage.h \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/linkage.h \
  include/linux/bitops.h \
    $(wildcard include/config/generic/find/first/bit.h) \
    $(wildcard include/config/generic/find/last/bit.h) \
    $(wildcard include/config/generic/find/next/bit.h) \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/bitops.h \
    $(wildcard include/config/cpu/mipsr2.h) \
  include/linux/irqflags.h \
    $(wildcard include/config/trace/irqflags.h) \
    $(wildcard include/config/irqsoff/tracer.h) \
    $(wildcard include/config/preempt/tracer.h) \
    $(wildcard include/config/trace/irqflags/support.h) \
    $(wildcard include/config/x86.h) \
  include/linux/typecheck.h \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/irqflags.h \
    $(wildcard include/config/mips/mt/smtc.h) \
    $(wildcard include/config/irq/cpu.h) \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/hazards.h \
    $(wildcard include/config/cpu/mipsr1.h) \
    $(wildcard include/config/mach/alchemy.h) \
    $(wildcard include/config/cpu/loongson2.h) \
    $(wildcard include/config/cpu/r10000.h) \
    $(wildcard include/config/cpu/r5500.h) \
    $(wildcard include/config/cpu/rm9000.h) \
    $(wildcard include/config/cpu/sb1.h) \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/cpu-features.h \
    $(wildcard include/config/cpu/mipsr2/irq/vi.h) \
    $(wildcard include/config/cpu/mipsr2/irq/ei.h) \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/cpu.h \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/cpu-info.h \
    $(wildcard include/config/mips/mt/smp.h) \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/cache.h \
    $(wildcard include/config/mips/l1/cache/shift.h) \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/mach-generic/kmalloc.h \
    $(wildcard include/config/dma/coherent.h) \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/mach-bcm963xx/cpu-feature-overrides.h \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/barrier.h \
    $(wildcard include/config/cpu/has/sync.h) \
    $(wildcard include/config/sgi/ip28.h) \
    $(wildcard include/config/cpu/has/wb.h) \
    $(wildcard include/config/weak/ordering.h) \
    $(wildcard include/config/weak/reordering/beyond/llsc.h) \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/bug.h \
    $(wildcard include/config/bug.h) \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/break.h \
  include/asm-generic/bug.h \
    $(wildcard include/config/generic/bug.h) \
    $(wildcard include/config/generic/bug/relative/pointers.h) \
    $(wildcard include/config/debug/bugverbose.h) \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/byteorder.h \
  include/linux/byteorder/big_endian.h \
  include/linux/swab.h \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/swab.h \
    $(wildcard include/config/cpu/mips64/r2.h) \
  include/linux/byteorder/generic.h \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/war.h \
    $(wildcard include/config/cpu/r4000/workarounds.h) \
    $(wildcard include/config/cpu/r4400/workarounds.h) \
    $(wildcard include/config/cpu/daddi/workarounds.h) \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/mach-bcm963xx/war.h \
  include/asm-generic/bitops/non-atomic.h \
  include/asm-generic/bitops/fls64.h \
  include/asm-generic/bitops/ffz.h \
  include/asm-generic/bitops/find.h \
  include/asm-generic/bitops/sched.h \
  include/asm-generic/bitops/hweight.h \
  include/asm-generic/bitops/ext2-non-atomic.h \
  include/asm-generic/bitops/le.h \
  include/asm-generic/bitops/ext2-atomic.h \
  include/asm-generic/bitops/minix.h \
  include/linux/log2.h \
    $(wildcard include/config/arch/has/ilog2/u32.h) \
    $(wildcard include/config/arch/has/ilog2/u64.h) \
  include/linux/ratelimit.h \
  include/linux/param.h \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/param.h \
    $(wildcard include/config/hz.h) \
  include/linux/dynamic_debug.h \
  include/linux/threads.h \
    $(wildcard include/config/nr/cpus.h) \
    $(wildcard include/config/base/small.h) \
  include/linux/bitmap.h \
  include/linux/string.h \
    $(wildcard include/config/binary/printf.h) \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/string.h \
    $(wildcard include/config/cpu/r3000.h) \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/cachectl.h \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/mipsregs.h \
    $(wildcard include/config/cpu/vr41xx.h) \
    $(wildcard include/config/page/size/4kb.h) \
    $(wildcard include/config/page/size/8kb.h) \
    $(wildcard include/config/page/size/16kb.h) \
    $(wildcard include/config/page/size/32kb.h) \
    $(wildcard include/config/page/size/64kb.h) \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/prefetch.h \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/system.h \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/addrspace.h \
    $(wildcard include/config/cpu/r8000.h) \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/mach-generic/spaces.h \
    $(wildcard include/config/dma/noncoherent.h) \
  include/linux/const.h \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/cmpxchg.h \
  include/asm-generic/cmpxchg-local.h \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/dsp.h \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/watch.h \
    $(wildcard include/config/hardware/watchpoints.h) \
  include/linux/preempt.h \
    $(wildcard include/config/preempt.h) \
    $(wildcard include/config/preempt/notifiers.h) \
  include/linux/thread_info.h \
    $(wildcard include/config/compat.h) \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/thread_info.h \
    $(wildcard include/config/debug/stack/usage.h) \
    $(wildcard include/config/mips32/o32.h) \
    $(wildcard include/config/mips32/n32.h) \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/smp.h \
    $(wildcard include/config/bcm/hostmips/pwrsave/timers.h) \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/atomic.h \
  include/asm-generic/atomic.h \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/smp-ops.h \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/io.h \
  include/asm-generic/iomap.h \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/page.h \
    $(wildcard include/config/cpu/mips32.h) \
    $(wildcard include/config/flatmem.h) \
    $(wildcard include/config/sparsemem.h) \
    $(wildcard include/config/need/multiple/nodes.h) \
  include/linux/pfn.h \
  include/asm-generic/memory_model.h \
    $(wildcard include/config/discontigmem.h) \
    $(wildcard include/config/sparsemem/vmemmap.h) \
  include/asm-generic/page.h \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/pgtable-bits.h \
    $(wildcard include/config/cpu/tx39xx.h) \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/mach-generic/ioremap.h \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/mach-generic/mangle-port.h \
    $(wildcard include/config/swap/io/space.h) \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/r4kcache.h \
    $(wildcard include/config/mips/mt.h) \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/asm.h \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/cacheops.h \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/mipsmtregs.h \
  include/linux/timer.h \
    $(wildcard include/config/timer/stats.h) \
    $(wildcard include/config/lockdep.h) \
    $(wildcard include/config/debug/objects/timers.h) \
  include/linux/ktime.h \
    $(wildcard include/config/ktime/scalar.h) \
  include/linux/time.h \
  include/linux/cache.h \
    $(wildcard include/config/arch/has/cache/line/size.h) \
  include/linux/seqlock.h \
  include/linux/spinlock.h \
    $(wildcard include/config/debug/spinlock.h) \
    $(wildcard include/config/generic/lockbreak.h) \
    $(wildcard include/config/debug/lock/alloc.h) \
  include/linux/stringify.h \
  include/linux/bottom_half.h \
  include/linux/spinlock_types.h \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/spinlock_types.h \
  include/linux/lockdep.h \
    $(wildcard include/config/lock/stat.h) \
    $(wildcard include/config/generic/hardirqs.h) \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/spinlock.h \
  include/linux/spinlock_api_smp.h \
  include/linux/math64.h \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/div64.h \
  include/asm-generic/div64.h \
  include/linux/jiffies.h \
  include/linux/timex.h \
    $(wildcard include/config/no/hz.h) \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/timex.h \
  include/linux/debugobjects.h \
    $(wildcard include/config/debug/objects.h) \
    $(wildcard include/config/debug/objects/free.h) \
  include/linux/init.h \
    $(wildcard include/config/modules.h) \
    $(wildcard include/config/hotplug.h) \
  include/linux/section-names.h \
  include/linux/proc_fs.h \
    $(wildcard include/config/proc/fs.h) \
    $(wildcard include/config/proc/devicetree.h) \
    $(wildcard include/config/proc/kcore.h) \
    $(wildcard include/config/mmu.h) \
  include/linux/slab.h \
    $(wildcard include/config/slab/debug.h) \
    $(wildcard include/config/slub.h) \
    $(wildcard include/config/slob.h) \
    $(wildcard include/config/debug/slab.h) \
  include/linux/gfp.h \
    $(wildcard include/config/zone/dma.h) \
    $(wildcard include/config/zone/dma32.h) \
  include/linux/mmzone.h \
    $(wildcard include/config/force/max/zoneorder.h) \
    $(wildcard include/config/unevictable/lru.h) \
    $(wildcard include/config/memory/hotplug.h) \
    $(wildcard include/config/arch/populates/node/map.h) \
    $(wildcard include/config/flat/node/mem/map.h) \
    $(wildcard include/config/cgroup/mem/res/ctlr.h) \
    $(wildcard include/config/have/memory/present.h) \
    $(wildcard include/config/need/node/memmap/size.h) \
    $(wildcard include/config/have/arch/early/pfn/to/nid.h) \
    $(wildcard include/config/sparsemem/extreme.h) \
    $(wildcard include/config/nodes/span/other/nodes.h) \
    $(wildcard include/config/holes/in/zone.h) \
    $(wildcard include/config/arch/has/holes/memorymodel.h) \
  include/linux/wait.h \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/current.h \
  include/linux/numa.h \
    $(wildcard include/config/nodes/shift.h) \
  include/linux/nodemask.h \
  include/linux/pageblock-flags.h \
    $(wildcard include/config/hugetlb/page.h) \
    $(wildcard include/config/hugetlb/page/size/variable.h) \
  include/linux/bounds.h \
  include/linux/memory_hotplug.h \
    $(wildcard include/config/have/arch/nodedata/extension.h) \
    $(wildcard include/config/memory/hotremove.h) \
  include/linux/notifier.h \
  include/linux/mutex.h \
    $(wildcard include/config/debug/mutexes.h) \
  include/linux/rwsem.h \
    $(wildcard include/config/rwsem/generic/spinlock.h) \
  include/linux/rwsem-spinlock.h \
  include/linux/srcu.h \
  include/linux/topology.h \
    $(wildcard include/config/sched/smt.h) \
    $(wildcard include/config/sched/mc.h) \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/topology.h \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/mach-generic/topology.h \
  include/asm-generic/topology.h \
  include/linux/slab_def.h \
    $(wildcard include/config/kmemtrace.h) \
  include/trace/kmemtrace.h \
  include/linux/tracepoint.h \
    $(wildcard include/config/tracepoints.h) \
  include/linux/rcupdate.h \
    $(wildcard include/config/classic/rcu.h) \
    $(wildcard include/config/tree/rcu.h) \
    $(wildcard include/config/preempt/rcu.h) \
  include/linux/completion.h \
  include/linux/rcuclassic.h \
    $(wildcard include/config/rcu/cpu/stall/detector.h) \
  include/linux/kmalloc_sizes.h \
  include/linux/fs.h \
    $(wildcard include/config/dnotify.h) \
    $(wildcard include/config/sysfs.h) \
    $(wildcard include/config/quota.h) \
    $(wildcard include/config/inotify.h) \
    $(wildcard include/config/security.h) \
    $(wildcard include/config/epoll.h) \
    $(wildcard include/config/debug/writecount.h) \
    $(wildcard include/config/file/locking.h) \
    $(wildcard include/config/auditsyscall.h) \
    $(wildcard include/config/block.h) \
    $(wildcard include/config/fs/xip.h) \
    $(wildcard include/config/migration.h) \
  include/linux/limits.h \
  include/linux/ioctl.h \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/ioctl.h \
  include/linux/kdev_t.h \
  include/linux/dcache.h \
  include/linux/rculist.h \
  include/linux/path.h \
  include/linux/stat.h \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/stat.h \
  include/linux/kobject.h \
  include/linux/sysfs.h \
  include/linux/kref.h \
  include/linux/radix-tree.h \
  include/linux/prio_tree.h \
  include/linux/pid.h \
  include/linux/capability.h \
    $(wildcard include/config/security/file/capabilities.h) \
  include/linux/semaphore.h \
  include/linux/fiemap.h \
  include/linux/quota.h \
  include/linux/dqblk_xfs.h \
  include/linux/dqblk_v1.h \
  include/linux/dqblk_v2.h \
  include/linux/dqblk_qtree.h \
  include/linux/nfs_fs_i.h \
  include/linux/nfs.h \
  include/linux/sunrpc/msg_prot.h \
  include/linux/fcntl.h \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/fcntl.h \
  include/asm-generic/fcntl.h \
  include/linux/err.h \
  include/linux/magic.h \
  include/linux/delay.h \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/delay.h \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/uaccess.h \
  include/linux/random.h \
  include/linux/irqnr.h \
  include/linux/interrupt.h \
    $(wildcard include/config/pm/sleep.h) \
    $(wildcard include/config/preempt/hardirqs.h) \
    $(wildcard include/config/preempt/rt.h) \
    $(wildcard include/config/generic/irq/probe.h) \
    $(wildcard include/config/debug/shirq.h) \
  include/linux/irqreturn.h \
  include/linux/hardirq.h \
    $(wildcard include/config/virt/cpu/accounting.h) \
  include/linux/smp_lock.h \
    $(wildcard include/config/lock/kernel.h) \
  include/linux/sched.h \
    $(wildcard include/config/preempt/softirqs.h) \
    $(wildcard include/config/sched/debug.h) \
    $(wildcard include/config/bcm/schedaudit.h) \
    $(wildcard include/config/detect/softlockup.h) \
    $(wildcard include/config/detect/hung/task.h) \
    $(wildcard include/config/core/dump/default/elf/headers.h) \
    $(wildcard include/config/bsd/process/acct.h) \
    $(wildcard include/config/taskstats.h) \
    $(wildcard include/config/audit.h) \
    $(wildcard include/config/inotify/user.h) \
    $(wildcard include/config/posix/mqueue.h) \
    $(wildcard include/config/keys.h) \
    $(wildcard include/config/user/sched.h) \
    $(wildcard include/config/schedstats.h) \
    $(wildcard include/config/task/delay/acct.h) \
    $(wildcard include/config/fair/group/sched.h) \
    $(wildcard include/config/rt/group/sched.h) \
    $(wildcard include/config/blk/dev/io/trace.h) \
    $(wildcard include/config/x86/ptrace/bts.h) \
    $(wildcard include/config/sysvipc.h) \
    $(wildcard include/config/rt/mutexes.h) \
    $(wildcard include/config/task/xacct.h) \
    $(wildcard include/config/cpusets.h) \
    $(wildcard include/config/cgroups.h) \
    $(wildcard include/config/futex.h) \
    $(wildcard include/config/fault/injection.h) \
    $(wildcard include/config/latencytop.h) \
    $(wildcard include/config/function/graph/tracer.h) \
    $(wildcard include/config/have/unstable/sched/clock.h) \
    $(wildcard include/config/preempt/bkl.h) \
    $(wildcard include/config/group/sched.h) \
    $(wildcard include/config/mm/owner.h) \
  include/linux/rbtree.h \
  include/linux/mm_types.h \
    $(wildcard include/config/split/ptlock/cpus.h) \
    $(wildcard include/config/want/page/debug/flags.h) \
    $(wildcard include/config/mmu/notifier.h) \
  include/linux/auxvec.h \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/auxvec.h \
  include/linux/page-debug-flags.h \
    $(wildcard include/config/page/poisoning.h) \
    $(wildcard include/config/page/debug/something/else.h) \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/mmu.h \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/ptrace.h \
    $(wildcard include/config/cpu/has/smartmips.h) \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/isadep.h \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/cputime.h \
  include/asm-generic/cputime.h \
  include/linux/sem.h \
  include/linux/ipc.h \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/ipcbuf.h \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/sembuf.h \
  include/linux/signal.h \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/signal.h \
    $(wildcard include/config/trad/signals.h) \
  include/asm-generic/signal.h \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/sigcontext.h \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/siginfo.h \
  include/asm-generic/siginfo.h \
  include/linux/percpu.h \
    $(wildcard include/config/have/dynamic/per/cpu/area.h) \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/percpu.h \
  include/asm-generic/percpu.h \
    $(wildcard include/config/have/setup/per/cpu/area.h) \
  include/linux/percpu-defs.h \
  include/linux/proportions.h \
  include/linux/percpu_counter.h \
  include/linux/seccomp.h \
    $(wildcard include/config/seccomp.h) \
  include/linux/rtmutex.h \
    $(wildcard include/config/debug/rt/mutexes.h) \
  include/linux/plist.h \
    $(wildcard include/config/debug/pi/list.h) \
  include/linux/resource.h \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/resource.h \
  include/asm-generic/resource.h \
  include/linux/hrtimer.h \
    $(wildcard include/config/high/res/timers.h) \
  include/linux/task_io_accounting.h \
    $(wildcard include/config/task/io/accounting.h) \
  include/linux/latencytop.h \
  include/linux/cred.h \
  include/linux/key.h \
    $(wildcard include/config/sysctl.h) \
  include/linux/sysctl.h \
  include/linux/aio.h \
    $(wildcard include/config/aio.h) \
  include/linux/workqueue.h \
  include/linux/aio_abi.h \
  include/linux/uio.h \
  include/linux/ftrace_irq.h \
    $(wildcard include/config/ftrace/nmi/enter.h) \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/hardirq.h \
  include/linux/irq.h \
    $(wildcard include/config/s390.h) \
    $(wildcard include/config/irq/per/cpu.h) \
    $(wildcard include/config/irq/release/method.h) \
    $(wildcard include/config/intr/remap.h) \
    $(wildcard include/config/generic/pending/irq.h) \
    $(wildcard include/config/sparse/irq.h) \
    $(wildcard include/config/numa/migrate/irq/desc.h) \
    $(wildcard include/config/generic/hardirqs/no//do/irq.h) \
    $(wildcard include/config/cpumasks/offstack.h) \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/irq.h \
    $(wildcard include/config/i8259.h) \
    $(wildcard include/config/mips/mt/smtc/irqaff.h) \
    $(wildcard include/config/mips/mt/smtc/im/backstop.h) \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/mach-generic/irq.h \
    $(wildcard include/config/irq/cpu/rm7k.h) \
    $(wildcard include/config/irq/cpu/rm9k.h) \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/irq_regs.h \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/hw_irq.h \
  include/linux/irq_cpustat.h \
  include/linux/io.h \
    $(wildcard include/config/has/ioport.h) \
  include/linux/mm.h \
    $(wildcard include/config/stack/growsup.h) \
    $(wildcard include/config/swap.h) \
    $(wildcard include/config/shmem.h) \
    $(wildcard include/config/ia64.h) \
    $(wildcard include/config/debug/pagealloc.h) \
    $(wildcard include/config/hibernation.h) \
  include/linux/mmdebug.h \
    $(wildcard include/config/debug/vm.h) \
    $(wildcard include/config/debug/virtual.h) \
  include/linux/debug_locks.h \
    $(wildcard include/config/debug/locking/api/selftests.h) \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/pgtable.h \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/pgtable-32.h \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/fixmap.h \
    $(wildcard include/config/cpu/tx49xx.h) \
  include/asm-generic/pgtable-nopmd.h \
  include/asm-generic/pgtable-nopud.h \
  include/asm-generic/pgtable.h \
  include/linux/page-flags.h \
    $(wildcard include/config/pageflags/extended.h) \
    $(wildcard include/config/have/mlocked/page/bit.h) \
    $(wildcard include/config/ia64/uncached/allocator.h) \
  include/linux/vmstat.h \
    $(wildcard include/config/vm/event/counters.h) \
  include/linux/poll.h \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/poll.h \
  include/asm-generic/poll.h \
  include/linux/module.h \
    $(wildcard include/config/modversions.h) \
    $(wildcard include/config/unused/symbols.h) \
    $(wildcard include/config/kallsyms.h) \
    $(wildcard include/config/markers.h) \
    $(wildcard include/config/module/unload.h) \
  include/linux/kmod.h \
  include/linux/elf.h \
  include/linux/elf-em.h \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/elf.h \
    $(wildcard include/config/mips32/compat.h) \
  include/linux/moduleparam.h \
    $(wildcard include/config/alpha.h) \
    $(wildcard include/config/ppc64.h) \
  include/linux/marker.h \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/local.h \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/module.h \
    $(wildcard include/config/cpu/mips32/r1.h) \
    $(wildcard include/config/cpu/mips32/r2.h) \
    $(wildcard include/config/cpu/mips64/r1.h) \
    $(wildcard include/config/cpu/r4300.h) \
    $(wildcard include/config/cpu/r4x00.h) \
    $(wildcard include/config/cpu/r5000.h) \
    $(wildcard include/config/cpu/r5432.h) \
    $(wildcard include/config/cpu/r6000.h) \
    $(wildcard include/config/cpu/nevada.h) \
    $(wildcard include/config/cpu/rm7000.h) \
  include/linux/cdev.h \
  include/linux/mii.h \
  include/linux/if.h \
    $(wildcard include/config/bcm/gpon.h) \
  include/linux/socket.h \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/socket.h \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/sockios.h \
  include/linux/sockios.h \
    $(wildcard include/config/build/hpna.h) \
  include/linux/hdlc/ioctl.h \
  include/linux/blog.h \
    $(wildcard include/config/blog/mcast.h) \
    $(wildcard include/config/blog/ipv6.h) \
    $(wildcard include/config/blog.h) \
    $(wildcard include/config/.h) \
  include/linux/blog_net.h \
  include/linux/nbuff_types.h \
  include/linux/version.h \
  include/linux/if_ether.h \
  include/linux/skbuff.h \
    $(wildcard include/config/bcm/vlan.h) \
    $(wildcard include/config/skbshinfo/has/dirtyp.h) \
    $(wildcard include/config/nf/conntrack.h) \
    $(wildcard include/config/bridge/netfilter.h) \
    $(wildcard include/config/has/dma.h) \
    $(wildcard include/config/netfilter.h) \
    $(wildcard include/config/net/sched.h) \
    $(wildcard include/config/net/cls/act.h) \
    $(wildcard include/config/xfrm.h) \
    $(wildcard include/config/ipv6/ndisc/nodetype.h) \
    $(wildcard include/config/mac80211.h) \
    $(wildcard include/config/net/dma.h) \
    $(wildcard include/config/network/secmark.h) \
  include/linux/net.h \
  include/linux/textsearch.h \
  include/net/checksum.h \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/checksum.h \
  include/linux/in6.h \
  include/linux/dmaengine.h \
    $(wildcard include/config/dma/engine.h) \
    $(wildcard include/config/async/tx/dma.h) \
  include/linux/device.h \
    $(wildcard include/config/debug/devres.h) \
  include/linux/ioport.h \
  include/linux/klist.h \
  include/linux/pm.h \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/device.h \
  include/asm-generic/device.h \
  include/linux/pm_wakeup.h \
    $(wildcard include/config/pm.h) \
  include/linux/dma-mapping.h \
    $(wildcard include/config/have/dma/attrs.h) \
  include/linux/dma-attrs.h \
  include/linux/bug.h \
  include/linux/scatterlist.h \
    $(wildcard include/config/debug/sg.h) \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/scatterlist.h \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/dma-mapping.h \
  include/linux/if_pppox.h \
  include/linux/netdevice.h \
    $(wildcard include/config/dcb.h) \
    $(wildcard include/config/wlan/80211.h) \
    $(wildcard include/config/ax25.h) \
    $(wildcard include/config/mac80211/mesh.h) \
    $(wildcard include/config/tr.h) \
    $(wildcard include/config/net/ipip.h) \
    $(wildcard include/config/net/ipgre.h) \
    $(wildcard include/config/ipv6/sit.h) \
    $(wildcard include/config/ipv6/tunnel.h) \
    $(wildcard include/config/netpoll.h) \
    $(wildcard include/config/net/poll/controller.h) \
    $(wildcard include/config/fcoe.h) \
    $(wildcard include/config/bcm/max/gem/ports.h) \
    $(wildcard include/config/wireless/ext.h) \
    $(wildcard include/config/net/dsa.h) \
    $(wildcard include/config/net/ns.h) \
    $(wildcard include/config/compat/net/dev/ops.h) \
    $(wildcard include/config/net/dsa/tag/dsa.h) \
    $(wildcard include/config/net/dsa/tag/trailer.h) \
    $(wildcard include/config/netpoll/trap.h) \
  include/linux/if_packet.h \
  include/net/net_namespace.h \
    $(wildcard include/config/ipv6.h) \
    $(wildcard include/config/ip/dccp.h) \
    $(wildcard include/config/net.h) \
  include/net/netns/core.h \
  include/net/netns/mib.h \
    $(wildcard include/config/xfrm/statistics.h) \
  include/net/snmp.h \
  include/linux/snmp.h \
  include/net/netns/unix.h \
  include/net/netns/packet.h \
  include/net/netns/ipv4.h \
    $(wildcard include/config/ip/multiple/tables.h) \
    $(wildcard include/config/ip/mroute.h) \
    $(wildcard include/config/ip/pimsm/v1.h) \
    $(wildcard include/config/ip/pimsm/v2.h) \
  include/net/inet_frag.h \
  include/net/netns/ipv6.h \
    $(wildcard include/config/ipv6/multiple/tables.h) \
    $(wildcard include/config/ipv6/mroute.h) \
    $(wildcard include/config/ipv6/pimsm/v2.h) \
  include/net/netns/dccp.h \
  include/net/netns/x_tables.h \
  include/linux/netfilter.h \
    $(wildcard include/config/netfilter/debug.h) \
    $(wildcard include/config/nf/nat/needed.h) \
  include/linux/in.h \
  include/net/flow.h \
  include/net/netns/conntrack.h \
    $(wildcard include/config/nf/conntrack/events.h) \
  include/linux/list_nulls.h \
  include/net/netns/xfrm.h \
  include/linux/xfrm.h \
  include/net/dst_ops.h \
  include/linux/seq_file_net.h \
  include/linux/seq_file.h \
  include/net/dsa.h \
  include/linux/ppp_channel.h \
  include/linux/if_pppol2tp.h \
  include/net/sock.h \
  include/linux/security.h \
    $(wildcard include/config/security/path.h) \
    $(wildcard include/config/security/network.h) \
    $(wildcard include/config/security/network/xfrm.h) \
    $(wildcard include/config/securityfs.h) \
  include/linux/binfmts.h \
  include/linux/shm.h \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/shmparam.h \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/shmbuf.h \
  include/linux/msg.h \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/msgbuf.h \
    $(wildcard include/config/cpu/little/endian.h) \
  include/linux/filter.h \
  include/linux/rculist_nulls.h \
  include/net/dst.h \
    $(wildcard include/config/net/cls/route.h) \
  include/linux/rtnetlink.h \
  include/linux/netlink.h \
  include/linux/if_link.h \
  include/linux/if_addr.h \
  include/linux/neighbour.h \
  include/net/neighbour.h \
  include/net/rtnetlink.h \
  include/net/netlink.h \
  include/linux/if_vlan.h \
    $(wildcard include/config/vlan/8021q.h) \
  include/linux/etherdevice.h \
    $(wildcard include/config/have/efficient/unaligned/access.h) \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/unaligned.h \
  include/linux/unaligned/be_struct.h \
  include/linux/unaligned/packed_struct.h \
  include/linux/unaligned/le_byteshift.h \
  include/linux/unaligned/generic.h \
  include/linux/ip.h \
  include/linux/tcp.h \
    $(wildcard include/config/tcp/md5sig.h) \
  include/net/inet_connection_sock.h \
  include/net/inet_sock.h \
  include/linux/jhash.h \
  include/net/request_sock.h \
  include/net/netns/hash.h \
  include/net/inet_timewait_sock.h \
  include/net/tcp_states.h \
  include/net/timewait_sock.h \
  include/linux/udp.h \
  include/linux/ppp_defs.h \
  include/linux/crc-ccitt.h \
  include/net/ip.h \
    $(wildcard include/config/inet.h) \
  include/linux/ipv6.h \
    $(wildcard include/config/ipv6/privacy.h) \
    $(wildcard include/config/ipv6/router/pref.h) \
    $(wildcard include/config/ipv6/route/info.h) \
    $(wildcard include/config/ipv6/optimistic/dad.h) \
    $(wildcard include/config/ipv6/mip6.h) \
    $(wildcard include/config/ipv6/subtrees.h) \
  include/linux/icmpv6.h \
  include/linux/bcm_log.h \
    $(wildcard include/config/brcm/colorize/prints.h) \
    $(wildcard include/config/bcm/log.h) \
  include/linux/bcm_log_mod.h \
  include/linux/bcm_colors.h \
    $(wildcard include/config/bcm/colorize/prints.h) \
  /home/brandon/consume/CZW002-4.12.009.0/bcmdrivers/broadcom/char/fap/impl1/4ke/fap4ke_local.h \
  /home/brandon/consume/CZW002-4.12.009.0/bcmdrivers/broadcom/char/fap/impl1/4ke/fap4keLib_types.h \
  /home/brandon/consume/CZW002-4.12.009.0/bcmdrivers/broadcom/char/fap/impl1/4ke/fap4keLib_string.h \
  /home/brandon/consume/CZW002-4.12.009.0/bcmdrivers/opensource/include/bcm963xx/bcmtypes.h \
  /home/brandon/consume/CZW002-4.12.009.0/bcmdrivers/broadcom/char/fap/impl1/4ke/fap4ke_mailBox.h \
  /home/brandon/consume/CZW002-4.12.009.0/bcmdrivers/broadcom/char/fap/impl1/4ke/fap4ke_printer.h \
  /home/brandon/consume/CZW002-4.12.009.0/bcmdrivers/broadcom/char/fap/impl1/4ke/fap4keLib_snprintf.h \
  /home/brandon/consume/CZW002-4.12.009.0/bcmdrivers/broadcom/char/fap/impl1/4ke/fap4ke_memory.h \
    $(wildcard include/config/bcm/6362/ports/int/ext/sw.h) \
    $(wildcard include/config/bcm/ext/switch.h) \
    $(wildcard include/config/bcm/dsl/ginp/rtx.h) \
    $(wildcard include/config/bcm/fap/layer2.h) \
  /home/brandon/consume/CZW002-4.12.009.0/bcmdrivers/broadcom/char/fap/impl1/4ke/fap4ke_init.h \
  /home/brandon/consume/CZW002-4.12.009.0/bcmdrivers/broadcom/char/fap/impl1/4ke/fap4ke_timers.h \
  /home/brandon/consume/CZW002-4.12.009.0/bcmdrivers/broadcom/char/fap/impl1/4ke/fap4ke_task.h \
  /home/brandon/consume/CZW002-4.12.009.0/bcmdrivers/broadcom/char/fap/impl1/fap_task.h \
  /home/brandon/consume/CZW002-4.12.009.0/bcmdrivers/broadcom/char/fap/impl1/fap_dll.h \
  /home/brandon/consume/CZW002-4.12.009.0/bcmdrivers/broadcom/char/fap/impl1/4ke/fap4ke_irq.h \
  /home/brandon/consume/CZW002-4.12.009.0/bcmdrivers/broadcom/char/fap/impl1/fap_dqm.h \
  /home/brandon/consume/CZW002-4.12.009.0/bcmdrivers/broadcom/char/fap/impl1/fap_hw.h \
  /home/brandon/consume/CZW002-4.12.009.0/bcmdrivers/broadcom/char/fap/impl1/fap_hw_63268.h \
  /home/brandon/consume/CZW002-4.12.009.0/shared/opensource/include/bcm963xx/63268_map_part.h \
    $(wildcard include/config/lock.h) \
    $(wildcard include/config/2/bar1/size/mask.h) \
    $(wildcard include/config/2/bar1/disable.h) \
  /home/brandon/consume/CZW002-4.12.009.0/bcmdrivers/broadcom/char/fap/impl1/4ke/fap4ke_packet.h \
  /home/brandon/consume/CZW002-4.12.009.0/bcmdrivers/broadcom/char/fap/impl1/4ke/fap4ke_iopDma.h \
  /home/brandon/consume/CZW002-4.12.009.0/bcmdrivers/opensource/include/bcm963xx/bcmPktDma_structs.h \
  /home/brandon/consume/CZW002-4.12.009.0/bcmdrivers/opensource/include/bcm963xx/bcm_map_part.h \
  /home/brandon/consume/CZW002-4.12.009.0/bcmdrivers/opensource/include/bcm963xx/bcmPktDma_defines.h \
    $(wildcard include/config/bcm/pktdma.h) \
    $(wildcard include/config/bcm/def/nr/rx/dma/channels.h) \
    $(wildcard include/config/bcm/def/nr/tx/dma/channels.h) \
    $(wildcard include/config/bcm/fap/pwrsave.h) \
    $(wildcard include/config/bcm96338.h) \
    $(wildcard include/config/bcm/moca/soft/switching.h) \
  /home/brandon/consume/CZW002-4.12.009.0/bcmdrivers/broadcom/char/fap/impl1/4ke/fap4ke_xtmrt.h \
  /home/brandon/consume/CZW002-4.12.009.0/bcmdrivers/opensource/include/bcm963xx/bcmPktDma_defines.h \
  /home/brandon/consume/CZW002-4.12.009.0/bcmdrivers/broadcom/char/fap/impl1/4ke/fap4ke_gso.h \
  /home/brandon/consume/CZW002-4.12.009.0/bcmdrivers/broadcom/char/fap/impl1/4ke/fap4ke_tm.h \
  /home/brandon/consume/CZW002-4.12.009.0/bcmdrivers/broadcom/char/fap/impl1/4ke/fap4ke_perf.h \
  /home/brandon/consume/CZW002-4.12.009.0/bcmdrivers/opensource/net/xtmrt/impl4/bcmxtmrtbond.h \
  /home/brandon/consume/CZW002-4.12.009.0/bcmdrivers/opensource/include/bcm963xx/bcmxtmcfg.h \
  /home/brandon/consume/CZW002-4.12.009.0/bcmdrivers/broadcom/char/fap/impl1/fap_dynmem.h \
  /home/brandon/consume/CZW002-4.12.009.0/bcmdrivers/broadcom/char/fap/impl1/fap_slob.h \
  /home/brandon/consume/CZW002-4.12.009.0/bcmdrivers/broadcom/char/fap/impl1/fap_dynmem.h \
  /home/brandon/consume/CZW002-4.12.009.0/bcmdrivers/broadcom/char/fap/impl1/4ke/fap4ke_memory.h \
  /home/brandon/consume/CZW002-4.12.009.0/bcmdrivers/opensource/include/bcm963xx/bcmPktDmaHooks.h \
  /home/brandon/consume/CZW002-4.12.009.0/bcmdrivers/broadcom/char/fap/impl1/4ke/fap4ke_timers.h \
  /home/brandon/consume/CZW002-4.12.009.0/bcmdrivers/broadcom/char/fap/impl1/4ke/fap4ke_packet.h \
  /home/brandon/consume/CZW002-4.12.009.0/bcmdrivers/broadcom/char/fap/impl1/4ke/fap4ke_msg.h \
    $(wildcard include/config/rx.h) \
    $(wildcard include/config/tx.h) \
  /home/brandon/consume/CZW002-4.12.009.0/bcmdrivers/broadcom/char/fap/impl1/fap_hw.h \
  /home/brandon/consume/CZW002-4.12.009.0/bcmdrivers/broadcom/char/fap/impl1/fap_tm.h \
  /home/brandon/consume/CZW002-4.12.009.0/bcmdrivers/opensource/include/bcm963xx/bcmPktDma.h \
  include/linux/nbuff.h \
    $(wildcard include/config/fkb/fn/inline.h) \
    $(wildcard include/config/fkb/stats.h) \
    $(wildcard include/config/fkb/color.h) \
    $(wildcard include/config/fkb/debug.h) \
    $(wildcard include/config/fkb/audit.h) \
    $(wildcard include/config/fkb/stack.h) \
  /home/brandon/consume/CZW002-4.12.009.0/bcmdrivers/opensource/include/bcm963xx/bcmPktDma_bds.h \
    $(wildcard include/config/bcm/eth/jumbo/frame.h) \
  /home/brandon/consume/CZW002-4.12.009.0/bcmdrivers/opensource/net/enet/shared/bcmenet.h \
    $(wildcard include/config/bcm/arl.h) \
  /home/brandon/consume/CZW002-4.12.009.0/shared/opensource/include/bcm963xx/boardparms.h \
    $(wildcard include/config/mdio.h) \
    $(wildcard include/config/mdio/pseudo/phy.h) \
    $(wildcard include/config/spi/ssb/0.h) \
    $(wildcard include/config/spi/ssb/1.h) \
    $(wildcard include/config/spi/ssb/2.h) \
    $(wildcard include/config/spi/ssb/3.h) \
    $(wildcard include/config/mmap.h) \
    $(wildcard include/config/gpio/mdio.h) \
    $(wildcard include/config/hs/spi/ssb/0.h) \
    $(wildcard include/config/hs/spi/ssb/1.h) \
    $(wildcard include/config/hs/spi/ssb/2.h) \
    $(wildcard include/config/hs/spi/ssb/3.h) \
    $(wildcard include/config/hs/spi/ssb/4.h) \
    $(wildcard include/config/hs/spi/ssb/5.h) \
    $(wildcard include/config/hs/spi/ssb/6.h) \
    $(wildcard include/config/hs/spi/ssb/7.h) \
  /home/brandon/consume/CZW002-4.12.009.0/bcmdrivers/opensource/include/bcm963xx/bcmnet.h \
  /home/brandon/consume/CZW002-4.12.009.0/bcmdrivers/opensource/include/bcm963xx/skb_defines.h \
  /home/brandon/consume/CZW002-4.12.009.0/bcmdrivers/opensource/include/bcm963xx/bcm/bcmswapitypes.h \
  /home/brandon/consume/CZW002-4.12.009.0/bcmdrivers/opensource/include/bcm963xx/bcmxtmrt.h \
  /home/brandon/consume/CZW002-4.12.009.0/bcmdrivers/opensource/include/bcm963xx/bcmxtmcfg.h \
  /home/brandon/consume/CZW002-4.12.009.0/bcmdrivers/opensource/include/bcm963xx/bcmxtmrt.h \
  /home/brandon/consume/CZW002-4.12.009.0/bcmdrivers/opensource/net/xtmrt/impl4/bcmxtmrtimpl.h \
  /home/brandon/consume/CZW002-4.12.009.0/bcmdrivers/opensource/net/xtmrt/impl4/bcmxtmrtbond.h \
  /home/brandon/consume/CZW002-4.12.009.0/bcmdrivers/opensource/include/bcm963xx/bcmPktDma_structs.h \
  /home/brandon/consume/CZW002-4.12.009.0/bcmdrivers/opensource/include/bcm963xx/bcmPktDmaHooks.h \

/home/brandon/consume/CZW002-4.12.009.0/bcmdrivers/opensource/net/lib/pktdma/bcm963268/bcmPktDmaEthIudma.o: $(deps_/home/brandon/consume/CZW002-4.12.009.0/bcmdrivers/opensource/net/lib/pktdma/bcm963268/bcmPktDmaEthIudma.o)

$(deps_/home/brandon/consume/CZW002-4.12.009.0/bcmdrivers/opensource/net/lib/pktdma/bcm963268/bcmPktDmaEthIudma.o):
