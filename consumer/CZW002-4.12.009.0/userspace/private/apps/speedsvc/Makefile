EXE = speedsvc
dynamic: generic_exe_install

clean:
	rm -f speedsvc


speedsvc:
	cp speedsvc_$(PROFILE)_save speedsvc

CURR_DIR := $(shell pwd)
BUILD_DIR := $(subst /userspace, /userspace,$(CURR_DIR))
BUILD_DIR := $(word 1, $(BUILD_DIR))
include $(BUILD_DIR)/make.common
