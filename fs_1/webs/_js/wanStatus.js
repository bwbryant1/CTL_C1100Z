
function updatewaninfo (req)
{

	var WanInfo=req.responseText;
	if ( WanInfo != "" && WanInfo != null ) {
		WanInfos = WanInfo.split('||');
		if ( WanInfos.length == 23) {

//<%ejGetOther(sysInfo, status)%>||<%ejGetOther(lineRate, 1, 0)%>||<%ejGetOther(lineRate, 0, 0)%>||<%ejGetOther(sysInfo, defaultWan)%>||
//<%ejGetOther(dslinfo, Protocol)%>||<%ejGetOther(sysInfo, pppUserName)%>||<%ejGetOther(dslinfo, LCPUP)%>||<%ejGetOther(dslinfo, IPCPUP)%>||
//<%ejGetOther(dslinfo, AUTHFAIL)%>||<%ejGetOther(dslinfo, PPPTIMER)%>||<%ejGetOther(dslinfo, PktTX)%>||<%ejGetOther(dslinfo, PktRX)%>||
//<%ejGetOther(sysInfo, modemUpTime)%>||<%ejGetOther(sysInfo, defaultMtuSize)%>||<%ejGetOther(sysInfo, defaultMssSize)%>||<%ejGetOther(dslinfo, WANIP)%>||
//<%ejGetOther(dslinfo, SUBNETMASK)%>||<%ejGetOther(sysInfo, dns1)%>||<%ejGetOther(sysInfo, dns2)%>||<%ejGetOther(dslinfo, GATEWAY)%>
//<%ejGetOther(dslinfo, IPV4UPTIME)%>
         var l2Intf = WanInfos[0];
			var l2Status = WanInfos[1];
         var l3Status = WanInfos[2];
         var downRate = WanInfos[3];
			var upRate = WanInfos[4];
			if (l2Status == 'CONNECTED')
			  document.getElementById("broadband2").innerHTML = '<img src="../_images/connectionStatus_Connected.png" alt="Connected" width="152" height="25" /><p class="connected">' + downRate + '/' + upRate + ' Mbps</p>';
			else if (l2Status == 'CONNECTING')
				document.getElementById("broadband2").innerHTML = '<img src="../_images/connectionStatus_Connecting.png" alt="Connecting" width="152" height="25" /><p class="notconnected">N/A Mbps</p>';
			else
				document.getElementById("broadband2").innerHTML = '<img src="../_images/connectionStatus_notConnected.png" alt="Not Connected" width="152" height="25" /><p class="notconnected">N/A Mbps</p>';

			if (l3Status == 'CONNECTED')
				document.getElementById("ISPSTATS2").innerHTML='<img src="../_images/connectionStatus_Connected.png" alt="Connected" width="152" height="25" />';
			else if (l3Status == 'WALLED GARDEN')
				document.getElementById("ISPSTATS2").innerHTML='<img src="../_images/connectionStatus_walledgarden.png" alt="Walled Garden" width="152" height="25" />';
			else if (l3Status == 'CONNECTING')
				document.getElementById("ISPSTATS2").innerHTML='<img src="../_images/connectionStatus_Connecting.png" alt="Connecting" width="152" height="25" />';
			else
				document.getElementById("ISPSTATS2").innerHTML='<img src="../_images/connectionStatus_notConnected.png" alt="Not Connected" width="152" height="25" />';

         if ( l2Intf != 3 ) {
				document.getElementById("dspeed").innerHTML='<strong> N/A Mbps</strong>';
            document.getElementById("uspeed").innerHTML='<strong> N/A Mbps</strong>';
         }
         else if (l2Status != 'NOT CONNECTED')
         {
				document.getElementById("dspeed").innerHTML='<strong>'+ downRate + ' Mbps</strong>';
            document.getElementById("uspeed").innerHTML='<strong>'+ upRate + ' Mbps</strong>';
         }
			else
			{
				document.getElementById("dspeed").innerHTML='<strong> N/A Mbps</strong>';
            document.getElementById("uspeed").innerHTML='<strong> N/A Mbps</strong>';
			}
         //WAN Connection Type:
         document.getElementById("connectiontype").innerHTML = WanInfos[5];
         //VLAN Type Selected: 
         var vah_eth_enable = WanInfos[6];
         var VlanType = WanInfos[7];
         var VlanId = WanInfos[8];
         if (vah_eth_enable == 1 && VlanId != 'N/A' && VlanType != 'Selecting') {
         	document.getElementById("VlanType").innerHTML = 'Auto Detect - '+VlanType+' '+VlanId;
         }
         else if(vah_eth_enable == 1){
         	document.getElementById("VlanType").innerHTML = 'Auto Detect - '+VlanType;
         }
         else if(VlanId != -1 && VlanId != 'N/A' && VlanType != 'Selecting'){
         	document.getElementById("VlanType").innerHTML = VlanType+' '+VlanId;
         }
         else {
         	document.getElementById("VlanType").innerHTML = VlanType;
         }

         //ONT IP Address: 
         var wanip = WanInfos[9];
         if ( l2Intf != 3 || wanip == '' || wanip == '&nbsp;' || wanip == '0.0.0.0' || wanip == 'N/A' || (g_wanStatus != 'CONNECTED' && g_wanStatus != 'WALLED GARDEN') ) {
            document.getElementById("ModemIP").innerHTML =  'N/A';
         }
	      else {
		     document.getElementById("ModemIP").innerHTML = wanip;
	      }
         //Ethernet Link Uptime: 
         document.getElementById("ethtimer").innerHTML = WanInfos[10];
         //Connection Failures:
         document.getElementById("ETHConFail").innerHTML = WanInfos[11];
         //Connection Failures in Last 24 Hours:
         document.getElementById("ETHConFail24").innerHTML = WanInfos[12];
         //WAN Ethernet Transport 
         document.getElementById("pktrx").innerHTML = WanInfos[13];
         document.getElementById("pkttx").innerHTML = WanInfos[14];
         document.getElementById("xtmpkttxerr").innerHTML = WanInfos[15];
         document.getElementById("xtmpktrxerr").innerHTML = WanInfos[16];
         document.getElementById("eth24rx").innerHTML = WanInfos[17];
         document.getElementById("eth24tx").innerHTML = WanInfos[18];
         document.getElementById("ethrx").innerHTML = WanInfos[19];
         document.getElementById("ethtx").innerHTML = WanInfos[20];
         document.getElementById("pktrxdrop").innerHTML = WanInfos[21];
         document.getElementById("pkttxdrop").innerHTML = WanInfos[22];
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
		objXMLHTTP.open("GET","./GetWanStatus.html",true);
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