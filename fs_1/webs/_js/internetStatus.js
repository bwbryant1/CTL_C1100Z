
function updatewaninfo (req)
{

	var WanInfo=req.responseText;
	if ( WanInfo != "" && WanInfo != null ) {
		WanInfos = WanInfo.split('||');
		if ( WanInfos.length == 35 ) {
//<%ejGetOther(sysInfo, status)%>||<%ejGetOther(lineRate, 1, 0)%>||<%ejGetOther(lineRate, 0, 0)%>||<%ejGetOther(sysInfo, defaultWan)%>||<%ejGetOther(dslinfo, Protocol)%>||
//<%ejGetOther(sysInfo, pppUserName)%>||<%ejGetOther(dslinfo, LCPUP)%>||<%ejGetOther(dslinfo, IPCPUP)%>||<%ejGetOther(dslinfo, AUTHFAIL)%>||<%ejGetOther(dslinfo, PPPTIMER)%>||
//<%ejGetOther(dslinfo, PktTX)%>||<%ejGetOther(dslinfo, PktRX)%>||<%ejGetOther(sysInfo, modemUpTime)%>||<%ejGetOther(sysInfo, defaultMtuSize)%>||<%ejGetOther(sysInfo, defaultMssSize)%>||
//<%ejGetOther(dslinfo, WANIP)%>||<%ejGetOther(dslinfo, SUBNETMASK)%>||<%ejGetOther(sysInfo, dns1)%>||<%ejGetOther(sysInfo, dns2)%>||<%ejGetOther(dslinfo, GATEWAY)%>||
//<%ejGetOther(dslinfo, IPV4UPTIME)%>||<%ejGetOther(dslinfo, TUNNELSTATUS)%>||<%ejGetOther(dslinfo, WANIPv6)%>||/<%ejGetOther(dslinfo, IPv6DELEGATED)%>||<%ejGetOther(dslinfo, IPv6CALCULATED)%>||
//<%ejGetOther(enblDhcp6s)%>||<%ejGetOther(dslinfo, WANIPv6LINK)%>||<%ejGetOther(sysInfo, dns6Pri)%>||<%ejGetOther(sysInfo, dns6Sec)%>||<%ejGetOther(dslinfo, IPv6UPTIME)%>||
//<%ejGetOther(sysInfo, defaultIPv6Prctl)%>
			var wanStatus = WanInfos[3];

			if (WanInfos[3] == 'CONNECTED')
				document.getElementById("ISPSTATS").innerHTML = '<div align="left"><font color=\"#015F2C\"><strong>'+'CONNECTED'+'</strong></font></div>';
			else if (WanInfos[3] == 'WALLED GARDEN')
				document.getElementById("ISPSTATS").innerHTML = '<div align="left"><font color=\"#EDAB12\"><strong>'+'WALLED GARDEN'+'</strong></font></div>';	
			else if (WanInfos[3] == 'CONNECTING')
				document.getElementById("ISPSTATS").innerHTML = '<div align="left"><font color=\"#D7DB24\"><strong>'+'CONNECTING'+'</strong></font></div>';	
			else
				document.getElementById("ISPSTATS").innerHTML = '<div align="left"><font color=\"#FF0000\"><strong>'+'NOT CONNECTED'+ '</strong></font></div>';

			document.getElementById("ISPTYPE").innerHTML = WanInfos[4];

			if (WanInfos[5] == null || WanInfos[5] == 'N/A' ) {
				document.getElementById("USERNAME").innerHTML = 'N/A';
			}
			else {
				document.getElementById("USERNAME").innerHTML = WanInfos[5];
			}

			if ( WanInfos[6] == "1" ) {
				document.getElementById("LCPUP").innerHTML = '<font color="#015F2C">UP</font>';
			}
			else if ( WanInfos[6] == "0") {
				document.getElementById("LCPUP").innerHTML ='<font color="#FF0000"><strong>DOWN</strong></font>';
			}
			else if ( WanInfos[6] == "2" ) {
				document.getElementById("LCPUP").innerHTML ='<font color="#D7DB24">CONNECTING</font>';
			}
			else {
				document.getElementById("LCPUP").innerHTML = 'N/A';
			}

			if ( WanInfos[7] == "1" ) {
				document.getElementById("IPCPUP").innerHTML = '<font color="#015F2C">UP</font>';
			}
			else if ( WanInfos[7] == "0") {
				document.getElementById("IPCPUP").innerHTML ='<font color="#FF0000"><strong>DOWN</strong></font>';
			}
			else if ( WanInfos[7] == "2" ) {
				document.getElementById("IPCPUP").innerHTML ='<font color="#D7DB24">CONNECTING</font>';
			}
			else {
				document.getElementById("IPCPUP").innerHTML = 'N/A';
			}

			AuthFailure = WanInfos[8];
			intValue = parseInt(AuthFailure);

			if ( isNaN(intValue) ) {
				document.getElementById("authfail").innerHTML ='N/A';
			}
			else if (intValue >= 4) {
				document.getElementById("authfail").innerHTML = '<font color=\"#FF0000\"><strong>'+WanInfos[8]+'</strong></font>';
			}
			else {
				document.getElementById("authfail").innerHTML = WanInfos[8];
			}

            if (WanInfos[4] == 'PPPoE' || WanInfos[4] == 'PPPoA' ) {
                document.getElementById("ppptimer").innerHTML = WanInfos[9];
                $('.class_hide_ipoe').show();
            }
            else if ( WanInfos[20] == '' || ( wanStatus != 'CONNECTED' && wanStatus != 'WALLED GARDEN') || WanInfos[4] == 'Transparent Bridging' ) {
                document.getElementById("ppptimer").innerHTML = 'N/A';
                $('.class_hide_ipoe').hide();
            }
            else {
                document.getElementById("ppptimer").innerHTML = WanInfos[20];
                $('.class_hide_ipoe').hide();
            }

			//document.getElementById("pkttx").innerHTML = WanInfos[10];
			//document.getElementById("pktrx").innerHTML = WanInfos[11];
			var TotalSent = WanInfos[10];
			if ( TotalSent == '' || ( wanStatus != 'CONNECTED' && wanStatus != 'WALLED GARDEN') || WanInfos[4] == 'Transparent Bridging' ) {
				document.getElementById("pkttx").innerHTML = 'N/A';
			}
			else {
				document.getElementById("pkttx").innerHTML = TotalSent;
			}
			var ipv4Sent = WanInfos[31];
			if ( ipv4Sent == '' || ( wanStatus != 'CONNECTED' && wanStatus != 'WALLED GARDEN') || WanInfos[4] == 'Transparent Bridging' ) {
				document.getElementById("pkttx2").innerHTML = 'N/A';
			}
			else {
				document.getElementById("pkttx2").innerHTML = ipv4Sent;
			}
			//document.getElementById("pkttx2").innerHTML = WanInfos[10];
			var TotalReceived = WanInfos[11];
			if ( TotalReceived == '' || ( wanStatus != 'CONNECTED' && wanStatus != 'WALLED GARDEN') || WanInfos[4] == 'Transparent Bridging' ) {
				document.getElementById("pktrx").innerHTML = 'N/A';
			}
			else {
				document.getElementById("pktrx").innerHTML = TotalReceived;
			}			
			var ipv4Received = WanInfos[32];
			if ( ipv4Received == '' || ( wanStatus != 'CONNECTED' && wanStatus != 'WALLED GARDEN') || WanInfos[4] == 'Transparent Bridging' ) {
				document.getElementById("pktrx2").innerHTML = 'N/A';
			}
			else {
				document.getElementById("pktrx2").innerHTML = ipv4Received;
			}			
         //document.getElementById("pktrx2").innerHTML = WanInfos[11];

			document.getElementById("modemUpTime").innerHTML = WanInfos[12];
			document.getElementById("mtuSize").innerHTML = WanInfos[13];
			document.getElementById("mssSize").innerHTML = WanInfos[14];

			var wanip = WanInfos[15];
			if ( wanip == '' || wanip == '&nbsp;' || wanip == '0.0.0.0' || wanip == 'N/A' || ( wanStatus != 'CONNECTED' && wanStatus != 'WALLED GARDEN') ) {
				document.getElementById("ModemIP").innerHTML = 'N/A';
			}
			else {
				document.getElementById("ModemIP").innerHTML = wanip;
			}

			var mask = WanInfos[16];
			if ( mask == '' || mask == '&nbsp;' || mask == '0.0.0.0' || mask == 'N/A' || ( wanStatus != 'CONNECTED' && wanStatus != 'WALLED GARDEN') ) {
				document.getElementById("subnetMask").innerHTML = 'N/A';
			}
			else {
				document.getElementById("subnetMask").innerHTML = mask;
			}

			var dns1 = WanInfos[17];
			if ( dns1 == '' || dns1 == '&nbsp' || dns1 == '0.0.0.0' || dns1 == 'N/A' || ( wanStatus != 'CONNECTED' && wanStatus != 'WALLED GARDEN') || WanInfos[4] == 'Transparent Bridging' ) {
				document.getElementById("priDns").innerHTML = 'N/A';
			}
			else {
				document.getElementById("priDns").innerHTML = dns1;
			}

			var dns2 = WanInfos[18];
			if ( dns2 == '' || dns2 == '&nbsp' || dns2 == '0.0.0.0' || dns2 == 'N/A' || ( wanStatus != 'CONNECTED' && wanStatus != 'WALLED GARDEN') || WanInfos[4] == 'Transparent Bridging' ) {
				document.getElementById("secDns").innerHTML = 'N/A';
			}
			else {
				document.getElementById("secDns").innerHTML = dns2;
			}

			var gateway = WanInfos[19];
			if ( gateway == '' || gateway == '&nbsp;' || gateway == '0.0.0.0' || gateway == 'N/A' || ( wanStatus != 'CONNECTED' && wanStatus != 'WALLED GARDEN') ) {
				document.getElementById("DefaultGateway").innerHTML = 'N/A';
			}
			else {
				document.getElementById("DefaultGateway").innerHTML = gateway;
			}

			var ipv4Uptime = WanInfos[20];
			if ( ipv4Uptime == '' || ( wanStatus != 'CONNECTED' && wanStatus != 'WALLED GARDEN') || WanInfos[4] == 'Transparent Bridging' ) {
				document.getElementById("connUpTime").innerHTML = 'N/A';
			}
			else {
				document.getElementById("connUpTime").innerHTML = ipv4Uptime;
			}
         
         //IPv6 6rd Tunnel Status
         var tunnelStatus = WanInfos[21];
         var defPrctlv6 = WanInfos[30];
         if(defPrctlv6 == '6rd')
            document.getElementById("wan6TunnelStatus").innerHTML = tunnelStatus;
         else
            document.getElementById("wan6TunnelStatus").innerHTML = 'N/A';
 
         //Modem IPv6 Address
         var wanipv6addrInfo = WanInfos[22];
         if ( wanipv6addrInfo == '' || wanipv6addrInfo == '&nbsp;' || wanipv6addrInfo == 'N/A' ) {
            document.getElementById("wan6IPv6Addr").innerHTML = 'N/A';
         }
         else {
            document.getElementById("wan6IPv6Addr").innerHTML = wanipv6addrInfo;        
         }
          
         //IPv6 Delegated Prefix
         var delegatedPrefix = WanInfos[23];
			if ( delegatedPrefix == '&nbsp' || delegatedPrefix == '' || tunnelStatus != 'Disabled') {
				document.getElementById("wan6DelegatedPrefix").innerHTML = 'N/A';
			}
			else {
				document.getElementById("wan6DelegatedPrefix").innerHTML = delegatedPrefix;
			}
         
         //IPv6 Calculated Prefix
         var calculatedPrefix = WanInfos[24];
			if ( calculatedPrefix == '&nbsp' || calculatedPrefix == '' || ( wanStatus != 'CONNECTED' && wanStatus != 'WALLED GARDEN') ) {
				document.getElementById("wan6CalculatedPrefix").innerHTML = 'N/A';
			}
			else {
				document.getElementById("wan6CalculatedPrefix").innerHTML = calculatedPrefix;
			}
         
         //IPv6 Subnet
         var dhcpv6Enbl = WanInfos[25];
			if ( dhcpv6Enbl == '0' || WanInfos[4] == 'Transparent Bridging' ) {
				document.getElementById("wan6Subnet").innerHTML = 'N/A';
			}
			else {
				document.getElementById("wan6Subnet").innerHTML = '64';
			}
         
         //IPv6 Link Local Address
         var wanipv6LinkInfo = WanInfos[26];
         if ( wanipv6LinkInfo == '' || wanipv6LinkInfo == '&nbsp;' || wanipv6LinkInfo == 'N/A' || tunnelStatus != 'Disabled' ) 
         {
            document.getElementById("wan6LinkLocalAddr").innerHTML = 'N/A';
         }
         else 
         {
            document.getElementById("wan6LinkLocalAddr").innerHTML = wanipv6LinkInfo;
         }
         
         //DNSv6 Address #1
         var dns6Pri = WanInfos[27];
         if ( dns6Pri == '&nbsp' || dns6Pri == '' || (wanStatus != 'CONNECTED' && wanStatus != 'WALLED GARDEN') || WanInfos[4] == 'Transparent Bridging' || WanInfos[22] == 'N/A' ) 
         {
            document.getElementById("wan6Dns1").innerHTML = 'N/A';
         }
         else
         {
            document.getElementById("wan6Dns1").innerHTML = dns6Pri;
         }
         
         //DNSv6 Address #2
         var dns6Sec = WanInfos[28];
         if ( dns6Sec == '&nbsp' || dns6Sec == '' || (wanStatus != 'CONNECTED' && wanStatus != 'WALLED GARDEN') || WanInfos[4] == 'Transparent Bridging' || WanInfos[22] == 'N/A' ) 
         {
            document.getElementById("wan6Dns2").innerHTML = 'N/A';
         }
         else
         {
            document.getElementById("wan6Dns2").innerHTML = dns6Sec;
         }
         
         //IPv6 Link Uptime
         var ipv6Uptime = WanInfos[29];
        if(defPrctlv6 == 'DHCPv6')
        {
		
           if ( ipv6Uptime == '&nbsp' || ipv6Uptime == '' || tunnelStatus != 'Disabled' || WanInfos[22] == 'N/A' ) 
           {
              document.getElementById("wan6Uptime").innerHTML = 'N/A';
           }
           else
           {
              document.getElementById("wan6Uptime").innerHTML = ipv6Uptime;
           }
        }
        else
        {
		    
           if ( ipv4Uptime == '' || ( wanStatus != 'CONNECTED' && wanStatus != 'WALLED GARDEN') || WanInfos[4] == 'Transparent Bridging' || WanInfos[22] == 'N/A' ) 
           {
              document.getElementById("wan6Uptime").innerHTML = 'N/A';
           }
           else 
           {
              document.getElementById("wan6Uptime").innerHTML = ipv4Uptime;
           } 

        }
         //IPv6 Counter
         var ipv6Sent = WanInfos[33];
         if ( ipv6Sent == '' || ( wanStatus != 'CONNECTED' && wanStatus != 'WALLED GARDEN') || WanInfos[4] == 'Transparent Bridging' ) {
            document.getElementById("wan6sent").innerHTML = '0';
         }
         else {
            document.getElementById("wan6sent").innerHTML = ipv6Sent;
         }
         var ipv6Received = WanInfos[34];
         if ( ipv6Received == '' || ( wanStatus != 'CONNECTED' && wanStatus != 'WALLED GARDEN') || WanInfos[4] == 'Transparent Bridging' ) {
            document.getElementById("wan6received").innerHTML = 'N/A';
         }
         else {
            document.getElementById("wan6received").innerHTML = ipv6Received;
         }

		}
	}

	ItselfTimer = setTimeout('updateValue_take()', 5000);
	isItselfTimerWork = true;
}

function updateValue_take()
{
	var objXMLHTTP = null; 

	if (window.XMLHttpRequest)  { 
		objXMLHTTP=new XMLHttpRequest(); 
	}// code for IE 
		else if (window.ActiveXObject)  { 
		objXMLHTTP=new ActiveXObject("Microsoft.XMLHTTP"); 
	}

	if ( objXMLHTTP != null ) {
		objXMLHTTP.open("GET","./GetInternetStatus.html",true);
		objXMLHTTP.setRequestHeader("If-Modified-Since","0");
		objXMLHTTP.send(null);
    objXMLHTTP.onreadystatechange = function() 
    {
			if(objXMLHTTP.readyState == 4)
      	updatewaninfo(objXMLHTTP);
    }
	}
}

function launch_task()
{
   ItselfTimer = setTimeout('updateValue_take()', 5000);
   isItselfTimerWork = true;
}
