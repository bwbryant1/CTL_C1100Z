EXE = httpd
dynamic: generic_exe_install


httpd:
	cp httpd_$(PROFILE)_save httpd

	rm -rf $(INSTALL_DIR)/webs
	mkdir -p $(INSTALL_DIR)/webs
	mkdir -p $(INSTALL_DIR)/webs/CA
	cp -f -r html/CA/* $(INSTALL_DIR)/webs/CA
#	cp -f html/*.html html/*.js html/*.gif html/*.css $(INSTALL_DIR)/webs
	mkdir -p $(INSTALL_DIR)/webs/_images
	mkdir -p $(INSTALL_DIR)/webs/_css
	mkdir -p $(INSTALL_DIR)/webs/_css/css3pie
	mkdir -p $(INSTALL_DIR)/webs/_js
	mkdir -p $(INSTALL_DIR)/webs/_html
	cp -f html/_html/*.html $(INSTALL_DIR)/webs/_html
	cp -f html/_css/*.css $(INSTALL_DIR)/webs/_css
	cp -f html/_css/css3pie/*.js $(INSTALL_DIR)/webs/_css/css3pie
	cp -f html/_css/css3pie/*.htc $(INSTALL_DIR)/webs/_css/css3pie
	cp -f html/_css/css3pie/*.php $(INSTALL_DIR)/webs/_css/css3pie
	cp -f html/_js/*.js $(INSTALL_DIR)/webs/_js
	cp -f html/_images/*.gif html/_images/*.png $(INSTALL_DIR)/webs/_images


clean:
	rm -f httpd


CURR_DIR := $(shell pwd)
BUILD_DIR := $(subst /userspace, /userspace,$(CURR_DIR))
BUILD_DIR := $(word 1, $(BUILD_DIR))
include $(BUILD_DIR)/make.common
