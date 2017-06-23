#! /bin/sh

TCPDUMP=/bin/tcpdump

debug=$1
interface=$2
interfacetype=$3
address=$4
port=$5
isLANWAN=$6

i=1
index=0
port2=0

if [ "$interfacetype" = 2 ]; then
	index=1
fi

while [ $i -eq 1 ]
do
	test -f /var/run/script_mirror.$index.pid 1>/dev/null 2>&1; result=$?;
	if [ $result -eq 0 ]; then
		if [ "$debug" -eq 1 ]; then
			echo "pid File Found, create newer one"
		fi
		index=`expr $index + 1`
	else
		if [ "$debug" -eq 1 ]; then
			echo "pid file not Found, create it"
		fi
		echo $$ > /var/run/script_mirror.$index.pid
		i=0
	fi
done

#Firstly, we need to make sure is interface already up
if [ "$debug" = 1 ]; then
	echo "Start Detect Mirrored Interface already up"
fi

i=1
while [ $i -eq 1 ]
do
	t1=$(ifconfig | grep -c $interface)
	if [ $t1 -eq 0 ]; then
		if [ "$debug" = 1 ]; then
  			echo "$interface down"
  		fi
  		usleep 500
	else
		if [ "$debug" = 1 ]; then
  			echo "$interface up"
  		fi
  		i=0
	fi
done

i=1
#Secondly, make sure cpe already open the netcat
if [ "$debug" = 1 ]; then
	echo "Start Detect LAN PC Netcat already up.."
fi
while [ $i -eq 1 ]
do
	nc -w 1 -z $address $port 1>/dev/null 2>&1; result=$?;
	if [ $result -eq 0 ]; then
		if [ "$debug" -eq 1 ]; then
			echo "the port $port is open for tcp connections"
		fi
		i=0
	else
		if [ "$debug" -eq 1 ]; then
			echo "the port $port was closed"
		fi
		sleep 1
	fi
done
if [ "$debug" -eq 1 ]; then
	echo "LAN PC Netcat Ready, Start Mirror Traffic"
fi
if [ "$interfacetype" -eq 1 ]; then
	if [ "$isLANWAN" -eq 1 ]; then
		port2=`expr $port + 1`
		${TCPDUMP} -i $interface -s 0 -w- not port $port and not port $port2 | nc $address $port &
	else
		${TCPDUMP} -i $interface -s 0 -w- not port $port | nc $address $port &
	fi
else
	${TCPDUMP} -i $interface -s 0 -w - | nc $address $port &
fi

#Remove the pid file because script alreay finish
rm -rf /var/run/script_mirror.$index.pid

exit
