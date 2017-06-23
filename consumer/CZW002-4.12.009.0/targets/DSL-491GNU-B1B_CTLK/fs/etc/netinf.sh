targetIP="192.168.0.1"
targetIP=$1

echo "testing" > /var/netinf.progress
netinf -i ${targetIP} > /var/netinf.result
echo "success" > /var/netinf.progress
