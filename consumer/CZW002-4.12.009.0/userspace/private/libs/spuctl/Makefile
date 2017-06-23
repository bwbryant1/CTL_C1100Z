LIB = libspuctl.so
default: dynamic


libspuctl.so:
	cp libspuctl.so_$(PROFILE)_save libspuctl.so

dynamic: generic_private_lib_install

clean:
	rm -f libspuctl.so

CURR_DIR := $(shell pwd)
BUILD_DIR := $(subst /userspace, /userspace,$(CURR_DIR))
BUILD_DIR := $(word 1, $(BUILD_DIR))
include $(BUILD_DIR)/make.common
