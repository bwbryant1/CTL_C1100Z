#!/bin/sh

isFactoryReset=$1
isSSHSupport=$2
isCertExist="1"
isSSHKeyExist="1"
MTDCertBlock="/dev/mtdblock4"
CertDir="/cert"
CertFile="/cert/newreq.crt"
KeyFile="/cert/newreq.key"
SSHKeyFile="/cert/rsa_host_key"

#1. If not factory reset, check if certificate and SSH key exist. If no, umount /cert.
if [ $isFactoryReset != "1" ]; then
	mount -t jffs2 -o ro $MTDCertBlock $CertDir
	if [ ! -s "$CertFile" -o ! -s "$KeyFile" ]; then
		isCertExist="0"
	else
		certMD5=`openssl x509 -noout -modulus -in $CertFile | openssl md5`
		keyMD5=`openssl rsa -noout -modulus -in $KeyFile | openssl md5`
		if [ "$certMD5" != "$keyMD5" ]; then
			isCertExist="0"
		fi
	fi
	if [ $isSSHSupport == "1" -a ! -s "$SSHKeyFile" ]; then
		isSSHKeyExist="0"
	else
		`dropbearkey -y -f $SSHKeyFile > /dev/null`
		if [ $? -eq 1 ]; then
			isSSHKeyExist="0"
		fi
	fi
	if [ $isCertExist == "0" ] || [ $isSSHKeyExist == "0" ]; then
		umount $CertDir
	fi
fi

#2. If boot up on factory reset or certificate and SSH key are invalid, re-generate new certificate and SSH key.
if [ $isFactoryReset == "1" ] || [ $isCertExist == "0" ] || [ $isSSHKeyExist == "0" ]; then
	mount -t jffs2 $MTDCertBlock $CertDir
	if [ $isCertExist == "0" ] && [ $isSSHKeyExist == "1" ]; then
		rm $CertFile $KeyFile
		`openssl req -newkey rsa:2048 -nodes -keyout $KeyFile -x509 -sha256 -days 7300 -out $CertFile -batch -config /etc/openssl.cnf -subj "/CN=ZyXEL/OU=ZyXEL/O=ZyXEL/L=Hsinchu/ST=Taiwan/C=TW"`
	elif [ $isCertExist == "1" ] && [ $isSSHKeyExist == "0" ]; then
		rm $SSHKeyFile
		`dropbearkey -t rsa -f $SSHKeyFile > /dev/null`
	else
		rm $CertFile $KeyFile
		`openssl req -newkey rsa:2048 -nodes -keyout $KeyFile -x509 -sha256 -days 7300 -out $CertFile -batch -config /etc/openssl.cnf -subj "/CN=ZyXEL/OU=ZyXEL/O=ZyXEL/L=Hsinchu/ST=Taiwan/C=TW"`
		if [ $isSSHSupport == "1" ]; then
			rm $SSHKeyFile
			`dropbearkey -t rsa -f $SSHKeyFile > /dev/null`
		fi
	fi

	#3. Check if certificate or SSH key exist again.
	if [ -s "$CertFile" -a -s "$KeyFile" ]; then
		certMD5=`openssl x509 -noout -modulus -in $CertFile | openssl md5`
		keyMD5=`openssl rsa -noout -modulus -in $KeyFile | openssl md5`
		if [ "$certMD5" != "$keyMD5" ]; then
			isCertExist="0"
		else
			isCertExist="1"
		fi
	else
		isCertExist="0"
	fi

	if [ $isSSHSupport="1" ]; then
		if [ -s "$SSHKeyFile" ]; then
			`dropbearkey -y -f $SSHKeyFile > /dev/null`
			if [ $? -eq 1 ]; then
				isSSHKeyExist="0"
			else
				isSSHKeyExist="1"
			fi
		else
			isSSHKeyExist="0"
		fi
	fi

	#4. If certificate or SSH key not exist, use default one.
	if [ $isCertExist == "0" ] && [ $isSSHKeyExist == "0" ]; then
		rm $CertFile $KeyFile
		ln -s /webs/CA/newreq.ca /cert/newreq.crt
		ln -s /webs/CA/newreq.key /cert/newreq.key
		if [ $isSSHSupport == "1" ]; then
			rm $SSHKeyFile
			ln -s /etc/rsa_host_key /cert/rsa_host_key
		fi
	elif [ $isCertExist == "1" ] && [ $isSSHKeyExist == "0" ]; then
		rm $SSHKeyFile
		ln -s /etc/rsa_host_key /cert/rsa_host_key
	elif [ $isCertExist == "0" ] && [ $isSSHKeyExist == "1" ]; then
		rm $CertFile $KeyFile
		ln -s /webs/CA/newreq.ca /cert/newreq.crt
		ln -s /webs/CA/newreq.key /cert/newreq.key
	fi

	#5. Mount /cert with read-only attribute
	umount $CertDir
	mount -t jffs2 -o ro $MTDCertBlock $CertDir
fi
