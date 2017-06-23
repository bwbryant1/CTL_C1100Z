
function updatewaninfo (req)
{

	var WanInfo=req.responseText;
	if ( WanInfo != "" && WanInfo != null ) {
		WanInfos = WanInfo.split('||');
		if ( WanInfos.length == 48 ) {

			var i = 0;
				
			i++;//DSL Status
			i++;//WAN Status 

			document.getElementById("dspeed").innerHTML = WanInfos[i++];
			document.getElementById("uspeed").innerHTML = WanInfos[i++];
			document.getElementById("DSLMODE").innerHTML = WanInfos[i++];

		    var RMode = WanInfos[i++];

			document.getElementById("DSLUPTIME").innerHTML = WanInfos[i++];

			var Retrain = WanInfos[i++];
			var intValue = parseInt(Retrain);
			if ( isNaN(intValue) ) {
				document.getElementById("RETRAINS").innerHTML = 'N/A';
			}
			else {
				document.getElementById("RETRAINS").innerHTML = Retrain;
			}
			
			var RetrainCurr24H = WanInfos[i++];
			intValue = parseInt(RetrainCurr24H);
			if ( isNaN(intValue) ) {
				document.getElementById("RETRAINS24HR").innerHTML = 'N/A';
			}
			else if ( intValue < 3 ) {
				document.getElementById("RETRAINS24HR").innerHTML = RetrainCurr24H;
			}
			else {
				document.getElementById("RETRAINS24HR").innerHTML = '<font color="#FF0000"><strong>'+RetrainCurr24H+'</strong></font>';
			}

			document.getElementById("linkFailLPR").innerHTML = WanInfos[i++];
			document.getElementById("linkFailLOS").innerHTML = WanInfos[i++];
			document.getElementById("linkFailLOM").innerHTML = WanInfos[i++];
			document.getElementById("linkTrainErr").innerHTML = WanInfos[i++];
			document.getElementById("DSLUAS").innerHTML = WanInfos[i++];

			var l2Intf = WanInfos[i++];
			if ( l2Intf == 1 ) {
				document.getElementById("TRANSMODE").innerHTML = 'ATM';
			}
			else if ( l2Intf == 2 ) {
				document.getElementById("TRANSMODE").innerHTML = 'PTM';
			}
         else{
				document.getElementById("TRANSMODE").innerHTML = 'N/A';
            document.getElementById("dspeed").innerHTML = 'N/A';
			   document.getElementById("uspeed").innerHTML = 'N/A';
			}

			document.getElementById("VPIVCI_VLAN").innerHTML = WanInfos[i++];

			document.getElementById("PRIORITY").innerHTML = WanInfos[i++];
			document.getElementById("SERVICETYPE").innerHTML = WanInfos[i++];

			//DSL POWER
			document.getElementById("DSLSNRDOWN").innerHTML = WanInfos[i++];
			document.getElementById("DSLSNRUP").innerHTML = WanInfos[i++];
			document.getElementById("DSLATTENDOWN").innerHTML = WanInfos[i++];
			document.getElementById("DSLATTENUP").innerHTML = WanInfos[i++];
			document.getElementById("DSLPOWERDOWN").innerHTML = WanInfos[i++];
			document.getElementById("DSLPOWERUP").innerHTML = WanInfos[i++];
			//DSL POWER

			document.getElementById("dsldpkt").innerHTML = WanInfos[i++];
			document.getElementById("dslupkt").innerHTML = WanInfos[i++];
			document.getElementById("dslderrpkt").innerHTML = WanInfos[i++];
			document.getElementById("dsluerrpkt").innerHTML = WanInfos[i++];

			document.getElementById("dslRxBitRate").innerHTML = parseFloat(WanInfos[i] / 60 / 24).toFixed(3);
			document.getElementById("dslRxByte1Day").innerHTML = WanInfos[i++];

			document.getElementById("dslTxBitRate").innerHTML = parseFloat(WanInfos[i] / 60 / 24).toFixed(3);
			document.getElementById("dslTxByte1Day").innerHTML = WanInfos[i++];

			document.getElementById("dslRxByteTotal").innerHTML = WanInfos[i++];
			document.getElementById("dslTxByteTotal").innerHTML = WanInfos[i++];
			document.getElementById("dsldDiscard30M").innerHTML = WanInfos[i++];
			document.getElementById("dsluDiscard30M").innerHTML = WanInfos[i++];

			document.getElementById("CHANNELTYPE_NEAR").innerHTML = WanInfos[i++];
			document.getElementById("CHANNELTYPE_FAR").innerHTML = WanInfos[i++];
			document.getElementById("CRC_NEAR").innerHTML = WanInfos[i++];
			document.getElementById("CRC_FAR").innerHTML = WanInfos[i++];
			document.getElementById("CRC_NEAR30M").innerHTML = WanInfos[i++];
			document.getElementById("CRC_FAR30M").innerHTML = WanInfos[i++];
			document.getElementById("FEC_NEAR").innerHTML = WanInfos[i++];
			document.getElementById("FEC_FAR").innerHTML = WanInfos[i++];
			document.getElementById("FEC_NEAR30M").innerHTML = WanInfos[i++];
			document.getElementById("FEC_FAR30M").innerHTML = WanInfos[i++];

			var bondingStatus = WanInfos[i++];
			document.getElementById("DSLMODEDECT").innerHTML = RMode;
			if(bondingStatus =='1' && WanInfos[0] == 'CONNECTED'){
				if ( l2Intf == 1 ) {
					document.getElementById("DSLMODEDECT").innerHTML = 'ADSL2+ Bonding';
				}else if(l2Intf == 2){
					RMode = RMode.replace("VDSL2", "VDSL2 Bonding");
					document.getElementById("DSLMODEDECT").innerHTML = RMode;
				}
			}
            
			//DSL Line Status
			var dslStatus = i++;
			if (WanInfos[dslStatus] == '1' )
				document.getElementById("LINESTATUS").innerHTML = "<font color=\"#015F2C\"><strong>GOOD</strong></font>";
			else if (WanInfos[dslStatus] == '2' )
				document.getElementById("LINESTATUS").innerHTML = "<font color=\"#ff6319\"><strong>MARGINAL</strong></font>";
			else if (WanInfos[dslStatus] == '3' )
				document.getElementById("LINESTATUS").innerHTML = "<font color=\"#FF0000\"><strong>POOR</strong></font>";
			else if (WanInfos[dslStatus] == '5' )
				document.getElementById("LINESTATUS").innerHTML = "<font color=\"#FF0000\"><strong>NO FILTER DETECTED</strong></font>";
			else
				document.getElementById("LINESTATUS").innerHTML = "<font><strong>N/A</strong></font>";
                
			//Loop length
			document.getElementById("LOOPLENGTH").innerHTML = WanInfos[i++];
            
			//Uncanceled Echo
			document.getElementById("FILTERDETECT").innerHTML = WanInfos[i++];
		}
	}

	setTimeout('updateValue_take()', 5000);
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
		objXMLHTTP.open("GET","./GetDslStatus.html",true);
		objXMLHTTP.setRequestHeader("If-Modified-Since","0");
		objXMLHTTP.send(null);
    objXMLHTTP.onreadystatechange = function() 
    {
			if(objXMLHTTP.readyState == 4)
      	updatewaninfo(objXMLHTTP);
    }
	}
}
//__QWEST__,jhenyang, sync with WriteConnectionStatus().
setTimeout('updateValue_take()', 5000);
