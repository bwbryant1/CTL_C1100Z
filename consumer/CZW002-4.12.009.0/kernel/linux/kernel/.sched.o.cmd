cmd_kernel/sched.o := /opt/toolchains/uclibc-crosstools-gcc-4.4.2-1/usr/bin/mips-linux-uclibc-gcc -Wp,-MD,kernel/.sched.o.d  -nostdinc -isystem /opt/toolchains/uclibc-crosstools-gcc-4.4.2-1/usr/bin/../lib/gcc/mips-linux-uclibc/4.4.2/include -Iinclude  -I/home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include -include include/linux/autoconf.h -I/home/brandon/consume/CZW002-4.12.009.0/shared/broadcom/include/bcm963xx -I/home/brandon/consume/CZW002-4.12.009.0/bcmdrivers/opensource/include/bcm963xx -I/home/brandon/consume/CZW002-4.12.009.0/shared/opensource/include/bcm963xx  -D__KERNEL__ -Wall -Wundef -Wstrict-prototypes -Wno-trigraphs -fno-strict-aliasing -fno-common -Werror-implicit-function-declaration -O2 -mno-check-zero-division -mabi=32 -G 0 -mno-abicalls -fno-pic -pipe -msoft-float -ffreestanding -march=mips32 -Wa,-mips32 -Wa,--trap -I/home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/mach-bcm963xx -I/home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/mach-generic -D"VMLINUX_LOAD_ADDRESS=0x80020000" -Wframe-larger-than=1024 -fno-stack-protector -fomit-frame-pointer -Wdeclaration-after-statement -Wno-pointer-sign -fwrapv -fno-dwarf2-cfi-asm -DCFG_LINUX_NET_PACKED -g -Werror -Wfatal-errors   -D"KBUILD_STR(s)=\#s" -D"KBUILD_BASENAME=KBUILD_STR(sched)"  -D"KBUILD_MODNAME=KBUILD_STR(sched)"  -c -o kernel/sched.o kernel/sched.c

deps_kernel/sched.o := \
  kernel/sched.c \
    $(wildcard include/config/mips/brcm.h) \
    $(wildcard include/config/bcm/schedaudit.h) \
    $(wildcard include/config/smp.h) \
    $(wildcard include/config/rt/group/sched.h) \
    $(wildcard include/config/group/sched.h) \
    $(wildcard include/config/cgroup/sched.h) \
    $(wildcard include/config/user/sched.h) \
    $(wildcard include/config/fair/group/sched.h) \
    $(wildcard include/config/sched/mc.h) \
    $(wildcard include/config/sched/smt.h) \
    $(wildcard include/config/no/hz.h) \
    $(wildcard include/config/sched/hrtick.h) \
    $(wildcard include/config/schedstats.h) \
    $(wildcard include/config/sched/debug.h) \
    $(wildcard include/config/preempt/softirqs.h) \
    $(wildcard include/config/bcm/sched/rt/period.h) \
    $(wildcard include/config/bcm/sched/rt/runtime.h) \
    $(wildcard include/config/debug/spinlock.h) \
    $(wildcard include/config/cgroup/cpuacct.h) \
    $(wildcard include/config/preempt.h) \
    $(wildcard include/config/preempt/notifiers.h) \
    $(wildcard include/config/task/delay/acct.h) \
    $(wildcard include/config/virt/cpu/accounting.h) \
    $(wildcard include/config/debug/preempt.h) \
    $(wildcard include/config/preempt/tracer.h) \
    $(wildcard include/config/debug/pagealloc.h) \
    $(wildcard include/config/rt/mutexes.h) \
    $(wildcard include/config/debug/spinlock/sleep.h) \
    $(wildcard include/config/debug/stack/usage.h) \
    $(wildcard include/config/hotplug/cpu.h) \
    $(wildcard include/config/sysctl.h) \
    $(wildcard include/config/numa.h) \
    $(wildcard include/config/nr/cpus.h) \
    $(wildcard include/config/cpusets.h) \
    $(wildcard include/config/cpumask/offstack.h) \
    $(wildcard include/config/magic/sysrq.h) \
    $(wildcard include/config/ia64.h) \
    $(wildcard include/config/64bit.h) \
  include/linux/mm.h \
    $(wildcard include/config/discontigmem.h) \
    $(wildcard include/config/mmu.h) \
    $(wildcard include/config/stack/growsup.h) \
    $(wildcard include/config/sparsemem.h) \
    $(wildcard include/config/sparsemem/vmemmap.h) \
    $(wildcard include/config/security.h) \
    $(wildcard include/config/highmem.h) \
    $(wildcard include/config/swap.h) \
    $(wildcard include/config/shmem.h) \
    $(wildcard include/config/arch/populates/node/map.h) \
    $(wildcard include/config/have/arch/early/pfn/to/nid.h) \
    $(wildcard include/config/proc/fs.h) \
    $(wildcard include/config/hibernation.h) \
  include/linux/errno.h \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/errno.h \
  include/asm-generic/errno-base.h \
  include/linux/gfp.h \
    $(wildcard include/config/zone/dma.h) \
    $(wildcard include/config/zone/dma32.h) \
  include/linux/mmzone.h \
    $(wildcard include/config/force/max/zoneorder.h) \
    $(wildcard include/config/unevictable/lru.h) \
    $(wildcard include/config/memory/hotplug.h) \
    $(wildcard include/config/flat/node/mem/map.h) \
    $(wildcard include/config/cgroup/mem/res/ctlr.h) \
    $(wildcard include/config/have/memory/present.h) \
    $(wildcard include/config/need/node/memmap/size.h) \
    $(wildcard include/config/need/multiple/nodes.h) \
    $(wildcard include/config/flatmem.h) \
    $(wildcard include/config/sparsemem/extreme.h) \
    $(wildcard include/config/nodes/span/other/nodes.h) \
    $(wildcard include/config/holes/in/zone.h) \
    $(wildcard include/config/arch/has/holes/memorymodel.h) \
  include/linux/spinlock.h \
    $(wildcard include/config/generic/lockbreak.h) \
    $(wildcard include/config/debug/lock/alloc.h) \
  include/linux/typecheck.h \
  include/linux/preempt.h \
  include/linux/thread_info.h \
    $(wildcard include/config/compat.h) \
  include/linux/types.h \
    $(wildcard include/config/uid16.h) \
    $(wildcard include/config/lbd.h) \
    $(wildcard include/config/phys/addr/t/64bit.h) \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/types.h \
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
  include/linux/bitops.h \
    $(wildcard include/config/generic/find/first/bit.h) \
    $(wildcard include/config/generic/find/last/bit.h) \
    $(wildcard include/config/generic/find/next/bit.h) \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/bitops.h \
    $(wildcard include/config/cpu/mipsr2.h) \
  include/linux/irqflags.h \
    $(wildcard include/config/trace/irqflags.h) \
    $(wildcard include/config/irqsoff/tracer.h) \
    $(wildcard include/config/trace/irqflags/support.h) \
    $(wildcard include/config/x86.h) \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/irqflags.h \
    $(wildcard include/config/mips/mt/smtc.h) \
    $(wildcard include/config/irq/cpu.h) \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/hazards.h \
    $(wildcard include/config/cpu/cavium/octeon.h) \
    $(wildcard include/config/cpu/mipsr1.h) \
    $(wildcard include/config/mach/alchemy.h) \
    $(wildcard include/config/cpu/loongson2.h) \
    $(wildcard include/config/cpu/r10000.h) \
    $(wildcard include/config/cpu/r5500.h) \
    $(wildcard include/config/cpu/rm9000.h) \
    $(wildcard include/config/cpu/sb1.h) \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/cpu-features.h \
    $(wildcard include/config/32bit.h) \
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
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/thread_info.h \
    $(wildcard include/config/page/size/4kb.h) \
    $(wildcard include/config/page/size/8kb.h) \
    $(wildcard include/config/page/size/16kb.h) \
    $(wildcard include/config/page/size/32kb.h) \
    $(wildcard include/config/page/size/64kb.h) \
    $(wildcard include/config/mips32/o32.h) \
    $(wildcard include/config/mips32/n32.h) \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/processor.h \
    $(wildcard include/config/cavium/octeon/cvmseg/size.h) \
    $(wildcard include/config/mips/mt/fpaff.h) \
    $(wildcard include/config/cpu/has/prefetch.h) \
  include/linux/cpumask.h \
    $(wildcard include/config/disable/obsolete/cpumask/functions.h) \
    $(wildcard include/config/debug/per/cpu/maps.h) \
  include/linux/kernel.h \
    $(wildcard include/config/preempt/voluntary.h) \
    $(wildcard include/config/prove/locking.h) \
    $(wildcard include/config/printk.h) \
    $(wildcard include/config/dynamic/debug.h) \
    $(wildcard include/config/ring/buffer.h) \
    $(wildcard include/config/tracing.h) \
    $(wildcard include/config/ftrace/mcount/record.h) \
  /opt/toolchains/uclibc-crosstools-gcc-4.4.2-1/usr/bin/../lib/gcc/mips-linux-uclibc/4.4.2/include/stdarg.h \
  include/linux/linkage.h \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/linkage.h \
  include/linux/log2.h \
    $(wildcard include/config/arch/has/ilog2/u32.h) \
    $(wildcard include/config/arch/has/ilog2/u64.h) \
  include/linux/ratelimit.h \
  include/linux/param.h \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/param.h \
    $(wildcard include/config/hz.h) \
  include/linux/dynamic_debug.h \
  include/linux/threads.h \
    $(wildcard include/config/base/small.h) \
  include/linux/bitmap.h \
  include/linux/string.h \
    $(wildcard include/config/binary/printf.h) \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/string.h \
    $(wildcard include/config/cpu/r3000.h) \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/cachectl.h \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/mipsregs.h \
    $(wildcard include/config/cpu/vr41xx.h) \
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
  include/linux/list.h \
    $(wildcard include/config/debug/list.h) \
  include/linux/poison.h \
  include/linux/prefetch.h \
  include/linux/stringify.h \
  include/linux/bottom_half.h \
  include/linux/spinlock_types.h \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/spinlock_types.h \
  include/linux/lockdep.h \
    $(wildcard include/config/lockdep.h) \
    $(wildcard include/config/lock/stat.h) \
    $(wildcard include/config/generic/hardirqs.h) \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/spinlock.h \
  include/linux/spinlock_api_smp.h \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/atomic.h \
  include/asm-generic/atomic.h \
  include/linux/wait.h \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/current.h \
  include/linux/cache.h \
    $(wildcard include/config/arch/has/cache/line/size.h) \
  include/linux/numa.h \
    $(wildcard include/config/nodes/shift.h) \
  include/linux/init.h \
    $(wildcard include/config/modules.h) \
    $(wildcard include/config/hotplug.h) \
  include/linux/section-names.h \
  include/linux/seqlock.h \
  include/linux/nodemask.h \
  include/linux/pageblock-flags.h \
    $(wildcard include/config/hugetlb/page.h) \
    $(wildcard include/config/hugetlb/page/size/variable.h) \
  include/linux/bounds.h \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/page.h \
    $(wildcard include/config/cpu/mips32.h) \
  include/linux/pfn.h \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/io.h \
  include/asm-generic/iomap.h \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/pgtable-bits.h \
    $(wildcard include/config/cpu/tx39xx.h) \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/mach-generic/ioremap.h \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/mach-generic/mangle-port.h \
    $(wildcard include/config/swap/io/space.h) \
  include/asm-generic/memory_model.h \
  include/asm-generic/page.h \
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
  include/linux/smp.h \
    $(wildcard include/config/use/generic/smp/helpers.h) \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/smp.h \
    $(wildcard include/config/bcm/hostmips/pwrsave/timers.h) \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/smp-ops.h \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/topology.h \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/mach-generic/topology.h \
  include/asm-generic/topology.h \
  include/linux/mmdebug.h \
    $(wildcard include/config/debug/vm.h) \
    $(wildcard include/config/debug/virtual.h) \
  include/linux/rbtree.h \
  include/linux/prio_tree.h \
  include/linux/debug_locks.h \
    $(wildcard include/config/debug/locking/api/selftests.h) \
  include/linux/mm_types.h \
    $(wildcard include/config/split/ptlock/cpus.h) \
    $(wildcard include/config/want/page/debug/flags.h) \
    $(wildcard include/config/mm/owner.h) \
    $(wildcard include/config/mmu/notifier.h) \
  include/linux/auxvec.h \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/auxvec.h \
  include/linux/completion.h \
  include/linux/page-debug-flags.h \
    $(wildcard include/config/page/poisoning.h) \
    $(wildcard include/config/page/debug/something/else.h) \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/mmu.h \
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
    $(wildcard include/config/s390.h) \
  include/linux/vmstat.h \
    $(wildcard include/config/vm/event/counters.h) \
  include/linux/percpu.h \
    $(wildcard include/config/have/dynamic/per/cpu/area.h) \
  include/linux/slab.h \
    $(wildcard include/config/slab/debug.h) \
    $(wildcard include/config/debug/objects.h) \
    $(wildcard include/config/slub.h) \
    $(wildcard include/config/slob.h) \
    $(wildcard include/config/debug/slab.h) \
  include/linux/slab_def.h \
    $(wildcard include/config/kmemtrace.h) \
  include/trace/kmemtrace.h \
  include/linux/tracepoint.h \
    $(wildcard include/config/tracepoints.h) \
  include/linux/rcupdate.h \
    $(wildcard include/config/classic/rcu.h) \
    $(wildcard include/config/tree/rcu.h) \
    $(wildcard include/config/preempt/rcu.h) \
  include/linux/rcuclassic.h \
    $(wildcard include/config/rcu/cpu/stall/detector.h) \
  include/linux/kmalloc_sizes.h \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/percpu.h \
  include/asm-generic/percpu.h \
    $(wildcard include/config/have/setup/per/cpu/area.h) \
  include/linux/percpu-defs.h \
  include/linux/module.h \
    $(wildcard include/config/modversions.h) \
    $(wildcard include/config/unused/symbols.h) \
    $(wildcard include/config/kallsyms.h) \
    $(wildcard include/config/markers.h) \
    $(wildcard include/config/module/unload.h) \
    $(wildcard include/config/sysfs.h) \
  include/linux/stat.h \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/stat.h \
  include/linux/time.h \
  include/linux/math64.h \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/div64.h \
  include/asm-generic/div64.h \
  include/linux/kmod.h \
  include/linux/elf.h \
  include/linux/elf-em.h \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/elf.h \
    $(wildcard include/config/mips32/compat.h) \
  include/linux/kobject.h \
  include/linux/sysfs.h \
  include/linux/kref.h \
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
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/uaccess.h \
  include/linux/nmi.h \
  include/linux/sched.h \
    $(wildcard include/config/detect/softlockup.h) \
    $(wildcard include/config/detect/hung/task.h) \
    $(wildcard include/config/core/dump/default/elf/headers.h) \
    $(wildcard include/config/bsd/process/acct.h) \
    $(wildcard include/config/taskstats.h) \
    $(wildcard include/config/audit.h) \
    $(wildcard include/config/inotify/user.h) \
    $(wildcard include/config/epoll.h) \
    $(wildcard include/config/posix/mqueue.h) \
    $(wildcard include/config/keys.h) \
    $(wildcard include/config/blk/dev/io/trace.h) \
    $(wildcard include/config/x86/ptrace/bts.h) \
    $(wildcard include/config/sysvipc.h) \
    $(wildcard include/config/auditsyscall.h) \
    $(wildcard include/config/task/xacct.h) \
    $(wildcard include/config/cgroups.h) \
    $(wildcard include/config/futex.h) \
    $(wildcard include/config/fault/injection.h) \
    $(wildcard include/config/latencytop.h) \
    $(wildcard include/config/function/graph/tracer.h) \
    $(wildcard include/config/have/unstable/sched/clock.h) \
    $(wildcard include/config/preempt/bkl.h) \
  include/linux/capability.h \
    $(wildcard include/config/security/file/capabilities.h) \
  include/linux/timex.h \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/timex.h \
  include/linux/jiffies.h \
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
  include/linux/path.h \
  include/linux/pid.h \
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
  include/linux/timer.h \
    $(wildcard include/config/timer/stats.h) \
    $(wildcard include/config/debug/objects/timers.h) \
  include/linux/ktime.h \
    $(wildcard include/config/ktime/scalar.h) \
  include/linux/debugobjects.h \
    $(wildcard include/config/debug/objects/free.h) \
  include/linux/hrtimer.h \
    $(wildcard include/config/high/res/timers.h) \
  include/linux/task_io_accounting.h \
    $(wildcard include/config/task/io/accounting.h) \
  include/linux/latencytop.h \
  include/linux/cred.h \
  include/linux/key.h \
  include/linux/sysctl.h \
  include/linux/aio.h \
    $(wildcard include/config/aio.h) \
  include/linux/workqueue.h \
  include/linux/aio_abi.h \
  include/linux/uio.h \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/irq.h \
    $(wildcard include/config/i8259.h) \
    $(wildcard include/config/mips/mt/smtc/irqaff.h) \
    $(wildcard include/config/mips/mt/smtc/im/backstop.h) \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/mipsmtregs.h \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/mach-generic/irq.h \
    $(wildcard include/config/irq/cpu/rm7k.h) \
    $(wildcard include/config/irq/cpu/rm9k.h) \
  include/linux/uaccess.h \
  include/linux/highmem.h \
    $(wildcard include/config/debug/highmem.h) \
  include/linux/fs.h \
    $(wildcard include/config/dnotify.h) \
    $(wildcard include/config/quota.h) \
    $(wildcard include/config/inotify.h) \
    $(wildcard include/config/debug/writecount.h) \
    $(wildcard include/config/file/locking.h) \
    $(wildcard include/config/block.h) \
    $(wildcard include/config/fs/xip.h) \
    $(wildcard include/config/migration.h) \
  include/linux/limits.h \
  include/linux/ioctl.h \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/ioctl.h \
  include/linux/kdev_t.h \
  include/linux/dcache.h \
  include/linux/rculist.h \
  include/linux/radix-tree.h \
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
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/cacheflush.h \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/kmap_types.h \
  include/linux/smp_lock.h \
    $(wildcard include/config/lock/kernel.h) \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/mmu_context.h \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/tlbflush.h \
  include/asm-generic/mm_hooks.h \
  include/linux/interrupt.h \
    $(wildcard include/config/pm/sleep.h) \
    $(wildcard include/config/preempt/hardirqs.h) \
    $(wildcard include/config/preempt/rt.h) \
    $(wildcard include/config/generic/irq/probe.h) \
    $(wildcard include/config/debug/shirq.h) \
  include/linux/irqreturn.h \
  include/linux/irqnr.h \
  include/linux/hardirq.h \
  include/linux/ftrace_irq.h \
    $(wildcard include/config/ftrace/nmi/enter.h) \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/hardirq.h \
  include/linux/irq.h \
    $(wildcard include/config/irq/per/cpu.h) \
    $(wildcard include/config/irq/release/method.h) \
    $(wildcard include/config/intr/remap.h) \
    $(wildcard include/config/generic/pending/irq.h) \
    $(wildcard include/config/sparse/irq.h) \
    $(wildcard include/config/numa/migrate/irq/desc.h) \
    $(wildcard include/config/generic/hardirqs/no//do/irq.h) \
    $(wildcard include/config/cpumasks/offstack.h) \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/irq_regs.h \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/hw_irq.h \
  include/linux/irq_cpustat.h \
  include/linux/kernel_stat.h \
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
  include/linux/xfrm.h \
  include/net/flow.h \
  include/linux/in6.h \
  include/linux/profile.h \
    $(wildcard include/config/profiling.h) \
  include/linux/freezer.h \
    $(wildcard include/config/freezer.h) \
    $(wildcard include/config/cgroup/freezer.h) \
  include/linux/vmalloc.h \
  include/linux/blkdev.h \
    $(wildcard include/config/blk/dev/bsg.h) \
    $(wildcard include/config/bounce.h) \
    $(wildcard include/config/blk/dev/integrity.h) \
  include/linux/major.h \
  include/linux/genhd.h \
    $(wildcard include/config/fail/make/request.h) \
    $(wildcard include/config/solaris/x86/partition.h) \
    $(wildcard include/config/bsd/disklabel.h) \
    $(wildcard include/config/unixware/disklabel.h) \
    $(wildcard include/config/minix/subpartition.h) \
  include/linux/device.h \
    $(wildcard include/config/debug/devres.h) \
  include/linux/ioport.h \
  include/linux/klist.h \
  include/linux/pm.h \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/device.h \
  include/asm-generic/device.h \
  include/linux/pm_wakeup.h \
    $(wildcard include/config/pm.h) \
  include/linux/pagemap.h \
  include/linux/backing-dev.h \
    $(wildcard include/config/debug/fs.h) \
  include/linux/mempool.h \
  include/linux/bio.h \
  include/linux/ioprio.h \
  include/linux/iocontext.h \
  include/linux/bsg.h \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/scatterlist.h \
    $(wildcard include/config/debug/sg.h) \
  include/linux/elevator.h \
  include/linux/delay.h \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/delay.h \
  include/linux/pid_namespace.h \
    $(wildcard include/config/pid/ns.h) \
  include/linux/nsproxy.h \
    $(wildcard include/config/cgroup/ns.h) \
  include/linux/cpu.h \
    $(wildcard include/config/pm/sleep/smp.h) \
  include/linux/sysdev.h \
  include/linux/node.h \
  include/linux/cpuset.h \
  include/linux/cgroup.h \
  include/linux/cgroupstats.h \
  include/linux/taskstats.h \
  include/linux/prio_heap.h \
  include/linux/idr.h \
  include/linux/kthread.h \
  include/linux/proc_fs.h \
    $(wildcard include/config/proc/devicetree.h) \
    $(wildcard include/config/proc/kcore.h) \
  include/linux/magic.h \
  include/linux/seq_file.h \
  include/linux/syscalls.h \
    $(wildcard include/config/ftrace/syscalls.h) \
    $(wildcard include/config/mips.h) \
    $(wildcard include/config/have/syscall/wrappers.h) \
  include/trace/syscall.h \
  include/linux/times.h \
  include/linux/tsacct_kern.h \
  include/linux/kprobes.h \
    $(wildcard include/config/kprobes.h) \
    $(wildcard include/config/kretprobes.h) \
    $(wildcard include/config/kprobes/sanity/test.h) \
  include/linux/delayacct.h \
  include/linux/taskstats_kern.h \
  include/net/genetlink.h \
  include/linux/genetlink.h \
  include/linux/netlink.h \
  include/linux/socket.h \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/socket.h \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/sockios.h \
  include/linux/sockios.h \
    $(wildcard include/config/build/hpna.h) \
  include/linux/skbuff.h \
    $(wildcard include/config/blog.h) \
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
  include/linux/random.h \
  include/linux/textsearch.h \
  include/net/checksum.h \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/checksum.h \
  include/linux/dmaengine.h \
    $(wildcard include/config/dma/engine.h) \
    $(wildcard include/config/async/tx/dma.h) \
  include/linux/dma-mapping.h \
    $(wildcard include/config/have/dma/attrs.h) \
  include/linux/dma-attrs.h \
  include/linux/bug.h \
  include/linux/scatterlist.h \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/dma-mapping.h \
  include/linux/blog.h \
    $(wildcard include/config/blog/mcast.h) \
    $(wildcard include/config/blog/ipv6.h) \
    $(wildcard include/config/.h) \
  include/linux/blog_net.h \
  include/linux/nbuff_types.h \
  include/net/netlink.h \
  include/linux/reciprocal_div.h \
  include/linux/unistd.h \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/unistd.h \
  include/linux/tick.h \
    $(wildcard include/config/generic/clockevents.h) \
    $(wildcard include/config/generic/clockevents/broadcast.h) \
    $(wildcard include/config/tick/oneshot.h) \
  include/linux/clockchips.h \
    $(wildcard include/config/generic/clockevents/build.h) \
  include/linux/clocksource.h \
    $(wildcard include/config/clocksource/watchdog.h) \
    $(wildcard include/config/generic/time/vsyscall.h) \
  include/linux/bootmem.h \
    $(wildcard include/config/crash/dump.h) \
    $(wildcard include/config/have/arch/bootmem/node.h) \
    $(wildcard include/config/have/arch/alloc/remap.h) \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/dma.h \
    $(wildcard include/config/generic/isa/dma/support/broken.h) \
    $(wildcard include/config/sgi/ip22.h) \
    $(wildcard include/config/pci.h) \
  include/linux/debugfs.h \
  include/linux/ctype.h \
  include/linux/ftrace.h \
    $(wildcard include/config/function/tracer.h) \
    $(wildcard include/config/stack/tracer.h) \
    $(wildcard include/config/dynamic/ftrace.h) \
    $(wildcard include/config/frame/pointer.h) \
    $(wildcard include/config/hw/branch/tracer.h) \
  include/linux/trace_clock.h \
  include/linux/kallsyms.h \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/ftrace.h \
  include/trace/sched.h \
  include/trace/sched_event_types.h \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/tlb.h \
  include/asm-generic/tlb.h \
  include/linux/swap.h \
    $(wildcard include/config/cgroup/mem/res/ctlr/swap.h) \
  include/linux/memcontrol.h \
    $(wildcard include/config/cgroup/mem/cont.h) \
  /home/brandon/consume/CZW002-4.12.009.0/kernel/linux/arch/mips/include/asm/pgalloc.h \
  kernel/sched_cpupri.h \
  kernel/sched_features.h \
  kernel/sched_stats.h \
  kernel/sched_idletask.c \
  kernel/sched_fair.c \
  kernel/sched_rt.c \

kernel/sched.o: $(deps_kernel/sched.o)

$(deps_kernel/sched.o):
