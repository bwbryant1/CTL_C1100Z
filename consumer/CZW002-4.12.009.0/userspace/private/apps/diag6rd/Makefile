EXE = diag6rd
dynamic: generic_exe_install

clean:
	rm -f diag6rd


diag6rd:
	cp diag6rd_$(PROFILE)_save diag6rd

CURR_DIR := $(shell pwd)
BUILD_DIR := $(subst /userspace, /userspace,$(CURR_DIR))
BUILD_DIR := $(word 1, $(BUILD_DIR))
include $(BUILD_DIR)/make.common
