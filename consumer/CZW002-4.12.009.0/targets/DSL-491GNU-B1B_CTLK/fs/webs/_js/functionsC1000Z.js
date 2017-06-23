// Javascript Document

//show/hide steps
/*function showHideSteps(hideThis, showThis){
	var hideThis = document.getElementById(hideThis);
	var showThis =document.getElementById(showThis);
	hideThis.style.display ='none';
	showThis.style.display ='block';
}
*/
var func_dslStatus;
var func_wanStatus;
var vah_status='N/A';
var unsafeString = "\"<>%\\^[]`\+\$\,'#&";
var func_L2intf;
var specMode = 1; // Mode0 : IPoE support block of static IP address, Mode1: Only dynamic and Static IPoE

function isUnsafe(compareChar)
{
   if ( unsafeString.indexOf(compareChar) == -1 && compareChar.charCodeAt(0) > 32
        && compareChar.charCodeAt(0) < 123 )
      return false; // found no unsafe chars, return false
   else
      return true;
}

function encodeUrl(val)
{
   var len     = val.length;
   var i       = 0;
   var newStr  = "";
   var original = val;

   for ( i = 0; i < len; i++ ) {
      if ( val.substring(i,i+1).charCodeAt(0) < 255 ) {
         /* hack to eliminate the rest of unicode from this  */
         if (isUnsafe(val.substring(i,i+1)) == false)
            newStr = newStr + val.substring(i,i+1);
         else
            newStr = newStr + convert(val.substring(i,i+1));
      } else {
         /* woopsie! restore.  */
         alert ("Found a non-ISO-8859-1 character at position: " + (i+1) + ",\nPlease eliminate before continuing.");
         newStr = original;
         /* short-circuit the loop and exit */
         i = len;
      }
   }

   return newStr;
}

function decodePassword(val)
{
   var newStr  ="";
   var word_array = val.split('%');

   for ( i = 0; i < word_array.length; i++ ) {
        if (i==0) newStr = newStr + word_array[i];
        else{
		    var code = word_array[i].substr(0,2);	    
			var decode = String.fromCharCode(parseInt(code,16));
			newStr = newStr+word_array[i].replace(code,decode);
		}
   }

   return newStr;
}

var unsafeStringPassword = "~!@#$%&*()_+`-=[]\{}|;':\",./<>?";

function isUnsafePassword(compareChar)
{
   if ( unsafeStringPassword.indexOf(compareChar) == -1)
      return false; // found no unsafe chars, return false
   else
      return true;
}

function encodePassword(val)
{
   var len     = val.length;
   var i       = 0;
   var newStr  = "";
   var original = val;

   for ( i = 0; i < len; i++ ) {
      if ( val.substring(i,i+1).charCodeAt(0) < 255 ) {
         // hack to eliminate the rest of unicode from this
         if (isUnsafePassword(val.substring(i,i+1)) == false)
            newStr = newStr + val.substring(i,i+1);
         else
            newStr = newStr + convert(val.substring(i,i+1));
      } else {
         // woopsie! restore.
         alert ("Found a non-ISO-8859-1 character at position: " + (i+1) + ",\nPlease eliminate before continuing.");
         newStr = original;
         // short-circuit the loop and exit
         i = len;
      }
   }
   return newStr;
}

var MonthName = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var WeekName = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

function timeStrFormat(str,iLen,space)   
{   
	if(str.length<iLen)   
	{   
		for(iIndex=0;iIndex<iLen-str.length;iIndex++)   
		{
		  if ( space==true ) {
				str="&nbsp;"+str;
			}
			else {
				str="0"+str;
			}
		}   
		return str;   
	}   
	else {
		return str;
	}
}

function hourStrFormat(hour,APM)   
{
	var str = "";
	if ( hour >= 12 ) {
		if ( APM == true ) {
			str = "P.M.";
		}
		else if ( hour == 12 ) {
			str = "12";
		} else {
			str += hour-12;
		}
	}
	else {
		if ( APM == true ) {
			str = "A.M.";
		}
		else if( hour == 0 ){
            str = "12";
		}
		else {
			str += hour;
		}
	}
	return str;
}

function hourStrFormatforImageHistoryonly(hour,APM)   
{
	var str = "";
	if ( hour >= 12 ) {
		if ( APM == true ) {
			str = "PM";
		}
		else if ( hour == 12 ) {
			str = "12";
		} else {
			str += hour-12;
		}
	}
	else {
		if ( APM == true ) {
			str = "AM";
		}
		else {
			str += hour;
		}
	}
	return str;
}


function IncreaseSec()
{
	var now = new Date(timestamp);	
	var days = now.getDate();
	var week = now.getDay();
	var years = now.getFullYear();
	var months = now.getMonth();
	var hr = now.getHours();
	var min = timeStrFormat(now.getMinutes().toString(),2,false);
	var sec = timeStrFormat(now.getSeconds().toString(),2,false);
	document.getElementById("date").innerHTML = "<p class=\"month\">" + MonthName[months] + "</p><p class=\"day\">" + days + "</p><p class=\"time\">" + timeStrFormat(hourStrFormat(hr,false), 2, true) + ":" + min + " " + hourStrFormat(hr, true) + "</p>";
}

function getonlinetime_task()
{
	var objXMLHTTP = null;

	if (window.XMLHttpRequest)  {
		objXMLHTTP=new XMLHttpRequest();
	}// code for IE
	else if (window.ActiveXObject)  {
		objXMLHTTP=new ActiveXObject("Microsoft.XMLHTTP");
	}
	else {
		setTimeout('getonlinetime_task()', 10000);
		return;
	}

	if ( objXMLHTTP != null ) {
		objXMLHTTP.open("GET","/TimeGetNow.html",true);
	objXMLHTTP.setRequestHeader("If-Modified-Since","0");
    objXMLHTTP.onreadystatechange = function() 
    {
			if(objXMLHTTP.readyState == 4)
      	checkServerTime(objXMLHTTP);
    }
		objXMLHTTP.send(null);
	}
	setTimeout('getonlinetime_task()', 10000);
}

function checkServerTime (req)
{
	var servertime=req.responseText;
	var servertimestamp = Date.parse(servertime);
	if ( !isNaN(servertimestamp) ) {
		timestamp = servertimestamp;
		IncreaseSec();
	}
/*
	var servernow = new Date(servertimestamp);
	var now = new Date(timestamp);

	if ( !isNaN(servertimestamp) ) {
		if ( now.getDate() != servernow.getDate() ||
			now.getMonth() != servernow.getMonth() ||
			now.getFullYear() != servernow.getFullYear() ||
			now.getHours() != servernow.getHours() ) {
			timestamp = servertimestamp;
		}
	}
*/
}

function getonlinetime()
{
		setTimeout('getonlinetime_task()', 10000);
}

function BackgroundUrl(url, Async)
{
	var objXMLHTTP = null; 

	if (window.XMLHttpRequest)  { 
		objXMLHTTP=new XMLHttpRequest(); 
	}// code for IE 
		else if (window.ActiveXObject)  { 
		objXMLHTTP=new ActiveXObject("Microsoft.XMLHTTP"); 
	}

	if('undefined' == typeof(Async)){
		Async = true;
	}

	if ( objXMLHTTP != null ) {
		objXMLHTTP.open("POST","./"+url,Async);
    objXMLHTTP.onreadystatechange = function() 
    {
    }
		objXMLHTTP.send(null);
	}
}

function UtilityBackgroundUrl(url, Async)
{
	var objXMLHTTP = null; 

	if (window.XMLHttpRequest)  { 
		objXMLHTTP=new XMLHttpRequest(); 
	}// code for IE 
		else if (window.ActiveXObject)  { 
		objXMLHTTP=new ActiveXObject("Microsoft.XMLHTTP"); 
	}

	if('undefined' == typeof(Async)){
		Async = true;
	}

	if ( objXMLHTTP != null ) {
		objXMLHTTP.open("POST","./"+url,Async);
    objXMLHTTP.onreadystatechange = function() 
    {
		if ( objXMLHTTP.readyState == 4 && objXMLHTTP.status == 200)
		{
			var message = objXMLHTTP.responseText;
			if (message != "")
			{
				var newDoc = document.open("text/html","replace");
				newDoc.write(message);
				newDoc.close();
			}
		}
    }
		objXMLHTTP.send(null);
	}
}

function updateConnectionStatus (req)
{
	var ConnectionStatus=req.responseText;
	if ( ConnectionStatus != "" && ConnectionStatus != null ) {
		ConnectionStatusArray = ConnectionStatus.split('|');
		if ( ConnectionStatusArray.length == 8 ) {
		//linespeeddown|linespeedup|broadban|ispstats
			func_dslStatus = ConnectionStatusArray[2];
			func_wanStatus = ConnectionStatusArray[3];

			if( ConnectionStatusArray[2] =='ethWanUp'){
				ConnectionStatusArray[2] = 'Showtime';
				ConnectionStatusArray[4] = '0';
			}else if (ConnectionStatusArray[2]=='ethWanDown'){
				ConnectionStatusArray[2] = 'Idle';
				ConnectionStatusArray[4] = '0';
			}

			if (ConnectionStatusArray[2] == 'Showtime')
				document.getElementById("broadband2").innerHTML = '<img src="../_images/connectionStatus_Connected.png" alt="Connected" width="152" height="25" />'+'<p class="connected">' + ConnectionStatusArray[0] + '/' + ConnectionStatusArray[1] + ' Mbps</p>';
			else if (ConnectionStatusArray[2] == 'Idle')
				document.getElementById("broadband2").innerHTML = '<img src="../_images/connectionStatus_notConnected.png" alt="Not Connected" width="152" height="25" /><p class="notconnected">N/A Mbps</p>';
			else
				document.getElementById("broadband2").innerHTML = '<img src="../_images/connectionStatus_Connecting.png" alt="Connecting" width="152" height="25" /><p class="notconnected">N/A Mbps</p>';

			if (ConnectionStatusArray[7] == 'Showtime')
				document.getElementById("broadband3").innerHTML = '<img src="../_images/connectionStatus_Connected.png" alt="Connected" width="152" height="25" />'+'<p class="connected">' + ConnectionStatusArray[5] + '/' + ConnectionStatusArray[6] + ' Mbps</p>';
			else if (ConnectionStatusArray[7] == 'Idle')
				document.getElementById("broadband3").innerHTML = '<img src="../_images/connectionStatus_notConnected.png" alt="Not Connected" width="152" height="25" /><p class="notconnected">N/A Mbps</p>';
			else
				document.getElementById("broadband3").innerHTML = '<img src="../_images/connectionStatus_Connecting.png" alt="Connecting" width="152" height="25" /><p class="notconnected">N/A Mbps</p>';

			//document.getElementById("broadband3").style.display = "none";
			//document.getElementById("broadband3").style.visibility = "hidden";
			if(ConnectionStatusArray[4]=='0')
				$('.broadband3').hide();
			else
				$('.broadband3').show();

			if (ConnectionStatusArray[3] == 'CONNECTED')
				document.getElementById("ISPSTATS2").innerHTML='<img src="../_images/connectionStatus_Connected.png" alt="Connected" width="152" height="25" />';
			else if (ConnectionStatusArray[3] == 'WALLED GARDEN')
				document.getElementById("ISPSTATS2").innerHTML='<img src="../_images/connectionStatus_walledgarden.png" alt="Walled Garden" width="152" height="25" />';
			else if (ConnectionStatusArray[3] == 'CONNECTING')
				document.getElementById("ISPSTATS2").innerHTML='<img src="../_images/connectionStatus_Connecting.png" alt="Walled Garden" width="152" height="25" />';
			else
				document.getElementById("ISPSTATS2").innerHTML='<img src="../_images/connectionStatus_notConnected.png" alt="Not Connected" width="152" height="25" />';
  
// done hiding -->
		}
	}
	
	setTimeout('updateConnectionStatus_take()', 10000);

}

function updateConnectionStatus_take()
{
	var objXMLHTTP = null;

	if (window.XMLHttpRequest)  {
		objXMLHTTP=new XMLHttpRequest();
	}// code for IE
	else if (window.ActiveXObject)  {
		objXMLHTTP=new ActiveXObject("Microsoft.XMLHTTP");
	}
	else {
		AlertOpen("The browser no support XMLHttp Object");
	}

	if ( objXMLHTTP != null ) {
		objXMLHTTP.open("GET","./GetConnectionStatus.html",true);
    objXMLHTTP.onreadystatechange = function() 
    {
			if(objXMLHTTP.readyState == 4)
      	updateConnectionStatus(objXMLHTTP);
    }
		objXMLHTTP.send(null);
	}
}

function ConnectionStatusMonitor ( ) {
	setTimeout('updateConnectionStatus_take()', 10000);
}
function WriteDateTime(cur_time)
{
	var timeNow=cur_time;
	//timeNow='Sat Jan  11 00:01:47 2000';
	timestamp = Date.parse(timeNow);
	IncreaseSec();
	getonlinetime();
}
function WriteMenuHeader(id, supportConsoleStatus)
{
   var m_id='', q_id='', w_id='', u_id='', a_id='', s_id='';

   switch (id){
      case 'modemstatus': m_id = " class=\"selected\" ";break;
      case 'quicksetup': q_id = " class=\"selected\" ";break;
      case 'wirelesssetup': w_id =" class=\"selected\" ";break;
      case 'utilities': u_id = " class=\"selected\" ";break;
      case 'advancedsetup': a_id = " class=\"selected\" ";break;
      case 'supportconsole': s_id = " class=\"selected\" ";break;
   }
	if(id=='supportconsole' || supportConsoleStatus=='1')
		document.writeln("<ul id=\"navigation_left_support\">");
	else	
		document.writeln("<ul id=\"navigation_left\">");
   document.writeln("<li class='modemstatus'><a href='modemstatus_connectionstatus.html'"+m_id+">Connection Status</a></li>");
   document.writeln("<li class='quicksetup'><a href='quicksetup.html'"+q_id+">Quick Setup</a></li>");  
   document.writeln("<li class='wirelesssetup'><a href='wirelesssetup_basicsettings.html'"+w_id+">Wireless Setup</a></li>");
   document.writeln("<li class='utilities'><a href='utilities_reboot.html'"+u_id+">Utilities</a></li>");
   document.writeln("<li class='advancedsetup'><a href='advancedsetup_accessscheduler.html'"+a_id+">Advanced Setup</a></li>");
   if(id=='supportconsole' || supportConsoleStatus=='1')
   {
      document.writeln("<li class='supportconsole'><a href='supportconsole_wanvlans.html'"+s_id+">Support</a></li>");
   }
	document.writeln("</ul>");  
}

function WriteLogout(status)
{

   if(status == "0")
   {
	document.writeln('<div></div>');
   }
   else
//__CTL__, Wister
//	document.writeln('<div id="logout_btn"></div>');
	document.writeln('<a href="logout.cgi" class = "logout_btn"><div id="logout_btn"></div></a>');
}

function WriteModemStatusMenuHeader(id, l2Type, isHpnaSupport)
{
   var conn_id='', dsl_id='', wan_id='', i_id='', e_id='', w_id='', h_id='', f_id='', d_id='', n_id='', rut_id='', q_id='', res_id='';

   switch (id){
      case 'connectionstatus': conn_id = "class=\"selected\""; break;
      case 'dslstatus': dsl_id = "class=\"selected\""; break;
      case 'wanstatus': wan_id = "class=\"selected\""; break;
      case 'internetstatus': i_id = "class=\"selected\""; break;
      case 'ethernetstatus': e_id = "class=\"selected\""; break;
      case 'wifistatus': w_id = "class=\"selected\""; break;
      case 'hpnastatus': h_id = "class=\"selected\""; break;
      case 'firewallstatus': f_id = "class=\"selected\""; break;
      case 'devicetable': d_id = "class=\"selected\""; break;
      case 'nattable': n_id = "class=\"selected\""; break;
      case 'routingtable': rut_id = "class=\"selected\""; break;
      case 'qostable': q_id = "class=\"selected\""; break;
      case 'routertable': res_id = "class=\"selected\""; break;
   }
   document.writeln("<li><a href=\"modemstatus_connectionstatus.html\" " + conn_id + ">Connection Status</a></li>");
   if(l2Type != 3) {
      document.writeln("<li><a href=\"modemstatus_dslstatus.html\" " + dsl_id + ">DSL Status</a></li>");
   } else {
      document.writeln("<li><a href=\"modemstatus_wanstatus.html\" " + wan_id + ">WAN Status</a></li>");
   }
   document.writeln("<li><a href=\"modemstatus_internetstatus.html\" " + i_id + ">Internet Status</a></li>");
   document.writeln("<li><a href=\"modemstatus_ethernetstatus.html\" " + e_id + ">Ethernet Status</a></li>");
   document.writeln("<li><a href=\"modemstatus_wifistatus.wl?wlSsidIdx=0\" " + w_id + ">Wireless Status</a></li>");
   if(isHpnaSupport == '1') {
      document.writeln("<li><a href=\"modemstatus_hpnastatus.html\" " + h_id + ">HPNA Status</a></li>");
   }
   document.writeln("<li><a href=\"modemstatus_firewallstatus.html\" " + f_id + ">Firewall Status</a></li>");
   document.writeln("<li><a href=\"modemstatus_landevicelist.html\" " + d_id + ">Device Table</a></li>");
   document.writeln("<li><a href=\"modemstatus_nattable.html\" " + n_id + ">NAT Table</a></li>");
   document.writeln("<li><a href=\"modemstatus_routingtable.html\" " + rut_id + ">Routing Table</a></li>");
   document.writeln("<li><a href=\"modemstatus_iptrafficqos.html\" " + q_id + ">QoS Table</a></li>");
   document.writeln("<li><a href=\"modemstatus_routertable.html\" " + res_id + ">Resource Table</a></li>");
}

function WriteConnectionStatus(dslStatus, dslStatusLine2, wanStatus, downRate, upRate, isBond, downRateLine2, upRateLine2)
{
	document.writeln('<h2>CenturyLink<sup>&trade;</sup> Line 1</h2><span id="broadband2">');
	ConnectionStatusMonitor();

	if( dslStatus=='ethWanUp'){
		dslStatus = 'Showtime';
		isBond = '0';
	}else if (dslStatus=='ethWanDown'){
		dslStatus = 'Idle';
		isBond = '0';
	}

	if (dslStatus == 'Showtime'){
	     document.writeln('<img src="../_images/connectionStatus_Connected.png" alt="Connected" width="152" height="25" />');
	     document.writeln('<p class="connected">'+ downRate + '/' + upRate + ' Mbps</p>');
	}
	else if (dslStatus == 'Idle')
	{
	     document.writeln('<img src="../_images/connectionStatus_notConnected.png" alt="Not Connected" width="152" height="25" />');
	     document.writeln('<p class="notconnected">N/A Mbps</p>');
	}
	else
	{
	     document.writeln('<img src="../_images/connectionStatus_Connecting.png" alt="Connecting" width="152" height="25" /><p class="notconnected">N/A Mbps</p>');
	}
	document.writeln('</span>');

	document.writeln('<h2 class="broadband3">CenturyLink<sup>&trade;</sup> Line 2</h2><span id="broadband3" class="broadband3">');

	if (dslStatusLine2 == 'Showtime'){
	     document.writeln('<img src="../_images/connectionStatus_Connected.png" alt="Connected" width="152" height="25" />');
	     document.writeln('<p class="connected">'+ downRateLine2 + '/' + upRateLine2 + ' Mbps</p>');
	}
	else if (dslStatusLine2 == 'Idle')
	{
	     document.writeln('<img src="../_images/connectionStatus_notConnected.png" alt="Not Connected" width="152" height="25" />');
	     document.writeln('<p class="notconnected">N/A Mbps</p>');
	}
	else
	{
	     document.writeln('<img src="../_images/connectionStatus_Connecting.png" alt="Connecting" width="152" height="25" /><p class="notconnected">N/A Mbps</p>');
	}
	document.writeln('</span>');

	if((isBond=='0') || (isBond==''))
	{
		$('.broadband3').hide();
	}
	else
	{
		$('.broadband3').show();		
	}

  document.writeln('<h2>Internet Status</h2><span id="ISPSTATS2">');


  if (wanStatus == 'CONNECTED')
      document.writeln('<img src="../_images/connectionStatus_Connected.png" alt="Connected" width="152" height="25" />');
  else if (wanStatus == 'WALLED GARDEN')
      document.writeln('<img src="../_images/connectionStatus_walledgarden.png" alt="Walled Garden" width="152" height="25" />');
  else if (wanStatus == 'CONNECTING')
      document.writeln('<img src="../_images/connectionStatus_Connecting.png" alt="Walled Garden" width="152" height="25" />');
  else
      document.writeln('<img src="../_images/connectionStatus_notConnected.png" alt="Not Connected" width="152" height="25" />');
	document.writeln('</span>');
}


function ShowContent(d)
{
   document.getElementById(d).style.display = "block";
}

function HideContent(d)
{
   document.getElementById(d).style.display = "none";
}

function showWebActiveLogResult ( logResult ) {
   var i = 0;
   var finish = 0;
   var row1found = 0;
   var tbody1 = document.getElementById("logResult").getElementsByTagName("TBODY")[0];
   var lastRow1 = tbody1.rows.length;
   for ( i = lastRow1; i > 1 ; i-- ) {
      tbody1.removeChild(tbody1.rows[i - 1]);
   }
   if( logResult != "")
   {
		var names=logResult.split("|");
		for( i=0 ; i < names.length ; i++ ){ //get every ping data
		   if(i == 0)
		   {
		      if(names[0] == 3)
		      {
		      	 HideContent('realtime_btn_next');
		      	 HideContent('realtime_btn_back');
		         ShowContent('realtime_btn_all');
		         with (document.forms[0]) {
		            //$('.realtime_btn').show();
		 	     $('.not_realtime_btn').hide();
			     //$('.btnback_btn').show();
			     //$('.btnnext_btn').show();
		      	  }
		      }
		      else if(names[0] == 2)
		      {
		         ShowContent('realtime_btn_next');
		         with (document.forms[0]) {
		            //$('.realtime_btn').show();
			     $('.not_realtime_btn').hide();
			     //$('.btnback_btn').hide();
			     //$('.btnnext_btn').show();
		         }
		      }
		      else if(names[0] == 1)
		      {
		         ShowContent('realtime_btn_back');
		         with (document.forms[0]) {
		            //$('.realtime_btn').show();
		 	     $('.not_realtime_btn').hide();
			     //$('.btnback_btn').show();
			     //$('.btnnext_btn').hide();
		      	  }
		      }
		      else
		      {
		         with (document.forms[0]) {
		            //$('.realtime_btn').hide();
			     //$('.not_realtime_btn').hide();
			     //$('.btnback_btn').hide();
			     //$('.btnnext_btn').hide();
		         }
		      }
		   }
		   else
		   {
		   var items = names[i].split("#");
		   var row = document.createElement("TR")
	  	   var td1 = document.createElement("TD")
	  	   td1.appendChild(document.createTextNode(items[0]))
	  	   var td2 = document.createElement("TD")
	  	   td2.appendChild (document.createTextNode(items[1]))
	  	   var td3 = document.createElement("TD")
	  	   td3.appendChild (document.createTextNode(items[2]))
	  	   var td4 = document.createElement("TD")
	  	   td4.appendChild (document.createTextNode(items[3]))
	  	   row.appendChild(td1);
	    	   row.appendChild(td2);
	    	   row.appendChild(td3);
	    	   row.appendChild(td4);
		   tbody1.appendChild(row);
		   row1found = 1;
		   }
              }
		
   }
   else
   {
		      var row = document.createElement("TR")
		      var td1 = document.createElement("TD")
		      td1.appendChild(document.createTextNode("N/A"))
		      var td2 = document.createElement("TD")
		      td2.appendChild (document.createTextNode("N/A"))
		      var td3 = document.createElement("TD")
		      td3.appendChild (document.createTextNode("N/A"))
		      var td4 = document.createElement("TD")
		      td4.appendChild (document.createTextNode("N/A"))
		      row.appendChild(td1);
		      row.appendChild(td2);
		      row.appendChild(td3);
		      row.appendChild(td4);
		      //tbody1.insertBefore(row, tbody1.rows[1]);
		      tbody1.appendChild(row);
   }
}

var scriptElt = document.createElement('script');
scriptElt.src = "/_js/popupAlert.js";
scriptElt.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(scriptElt);

function AlertOpen( str ) {
	popAlert.str = str;
	popAlert.func = null;
	popAlert.open();

}

function AlertOpen( str, func ) {
	popAlert.str = str;
	popAlert.funcBak = func;
	popAlert.open();
}


function ConfirmOpen( str, func ) {
	popAlert.str = str;
	popAlert.func = func;
	popAlert.open();
}

//START jQuery function	
$(function(){
	
	/***** UNIVERSAL FUNCTIONS *****/
	// function to show and hide sections based on enable and disable radio buttons
	function EnableDisable(){
		var checkAble = function(){
			if($('input#enabled').is(':checked')){
				$('div#enabled').show();
				$('span#enabled').show();
				$('div#disabled').hide();
				$('span#disabled').hide();
			} else {
				$('div#enabled').hide();
				$('span#enabled').hide();
				$('div#disabled').show();
				$('span#disabled').show();
			}		
		}
		$('input#enabled, input#disabled').click(function(){
			checkAble();
		});
		checkAble();
	}
	
	//function to show or hide confirm password field  based on hide password checkbox** - NOT IN USE
	function PasswordCheck(){
		$('input#hide_password').click(function(){
			if($(this).is(':checked')){
				//change PIN fields from password to text
				$('input#admin_password').replaceWith('<input type="password" name="admin_password" id="admin_password" size="30" value="'+$('input#admin_password').val()+'" />');
				$('input#admin_password2').replaceWith('<input type="password" name="admin_password2" id="admin_password2" size="30" value="'+$('input#admin_password2').val()+'" />');
				$('input#admin_password2').closest('tr').show();
			} else {
				//change PIN fields from text to password
				$('input#admin_password').replaceWith('<input type="text" name="admin_password" id="admin_password" size="30" value="'+$('input#admin_password').val()+'" />');
				$('input#admin_password2').replaceWith('<input type="text" name="admin_password2" id="admin_password2" size="30" value="'+$('input#admin_password2').val()+'" />');
				$('input#admin_password2').closest('tr').hide();
			}
		});
		$('input#admin_password, input#admin_password2').blur(function(){
			if($('input#admin_password').val() !='' && $('input#admin_password2').val() != '' && $('input#admin_password').val() != $('input#admin_password2').val()){
				alert('Your password fields do not match.');
			}
		});
	}



	/***** NAVIGATION FUNCTIONS *****/
	//help link popup
	$('a.helplink').popupWindow({ 
		height:800, 
		width:840, 
		top:50, 
		left:50,
		scrollbars:1
	}); 
	
	/***** MAIN PAGE FUNCTIONS *****/
	
	//_____MODEM STATUS_____
	
	//start modemstatus_connectionstatus
	//end modemstatus_connectionstatus
	
	//start modemstatus_dslstatus
	//end modemstatus_dslstatus

	//start modemstatus_internetstatus
	//end modemstatus_internetstatus
	
	//start modemstatus_ethernetstatus
	//end modemstatus_ethernetstatus

	//start modemstatus_wifistatus
	//end modemstatus_wifistatus
	
	//start modemstatus_hpnastatus
	if($('body').attr('id') == 'modemstatus_hpnastatus'){
		
		$('#hpnastate_state_wrapper a.toggle-button').click(function(){
			if($('span.toggle-button-label').text() == 'Click the button to enable HPNA.'){
				$('span.toggle-button-label').text('Click the button to disable HPNA.');
				$(this).children('img').attr({
					'src' : '../_images/h_wirelesssetup_wpsdisable.png',
					'alt' : 'Click the button to enable HPNA.'
				});
				$('div#enabled').show();
				$('div#disabled').hide();
			} else {
				$('span.toggle-button-label').text('Click the button to enable HPNA.');
				$(this).children('img').attr({
					'src' : '../_images/h_wirelesssetup_wpsenable.png',
					'alt' : 'Click the button to disable HPNA.'		
				});
				$('div#enabled').hide();
				$('div#disabled').show();
			}
		});
		
	}
	//end modemstatus_hpnastatus
	
	//start modemstatus_firewallstatus
	//end modemstatus_firewallstatus

	//start modemstatus_devicetable
	//end modemstatus_devicetable

	//start modemstatus_nattable
	//end modemstatus_nattable

	//start modemstatus_routingtable
	//end modemstatus_routingtable

	//start modemstatus_qostable
	//end modemstatus_qostable

	//start modemstatus_routertable
	//end modemstatus_routertable

	//_____QUICK SETUP_____
	//start quicksetup
	$('body#quicksetup input#hide_password').click(function(){
		if($(this).is(':checked')){
			//change PIN fields from password to text
			$('input#admin_password').replaceWith('<input type="password" name="admin_password" id="admin_password" size="30" value="'+$('input#admin_password').val()+'" />');
			$('input#admin_password2').replaceWith('<input type="password" name="admin_password2" id="admin_password2" size="30" value="'+$('input#admin_password2').val()+'" />');
			$('input#admin_password2').closest('tr').show();
		} else {
			//change PIN fields from text to password
			$('input#admin_password').replaceWith('<input type="text" name="admin_password" id="admin_password" size="30" value="'+$('input#admin_password').val()+'" />');
			$('input#admin_password2').replaceWith('<input type="text" name="admin_password2" id="admin_password2" size="30" value="'+$('input#admin_password2').val()+'" />');
			$('input#admin_password2').closest('tr').hide();
		}
	});

	$('body#quicksetup input#admin_password, body#quicksetup input#admin_password2').blur(function(){
		if($('input#admin_password').val() !='' && $('input#admin_password2').val() != '' && $('input#admin_password').val() != $('input#admin_password2').val()){
			alert('Your password fields do not match.');
		}
	});
	//end quicksetup

	//_____WIRELESS SETUP_____
	//start wirelesssetup_basicsettings
	//end wirelesssetup_basicsettings
	
	//start wirelesssetup_wirelesssecurity
	if($('#wirelesssetup_wirelesssecurity').length > 0){ // check to see if the body has the correct ID
	
			function checkSecurityType(){
				if (($('#security_type').attr('value') == 'wpa_wpa2_personal') | ($('#security_type').attr('value') == 'wpa_personal_1') | ($('#security_type').attr('value') == 'wpa_personal_2')){
					$('#security_wpa').show();
					$('#security_off').hide();				
					$('#security_wep').hide();		
				} else if ($('#security_type').attr('value')=='wep'){
					$('#security_wep').show();
					$('#security_off').hide();	
					$('#security_wpa').hide();	
				} else {
					$('#security_off').show();
					$('#security_wpa').hide();	
					$('#security_wep').hide();	
				}
			}	
			
			function setCustomSecurityWepKeyFocus(whichKey,FrmOnLoad){
				if(whichKey!=0){
					$('#security_wep_custom_key').attr('checked','checked');
					$('#security_wep_key_'+whichKey).attr('checked','checked');
					$('#security_wep_key_'+whichKey+'_value').attr("disabled","");
					$('#security_wep_key_'+whichKey+'_bit').attr("disabled","");
	 				if(FrmOnLoad==false)$('#security_wep_key_'+whichKey+'_value').focus();					
				}				
				
				if(whichKey!=1){
					$('#security_wep_key_1_value').attr("disabled","disabled");
					$('#security_wep_key_1_bit').attr("disabled","disabled");
				}
				if(whichKey!=2){
					$('#security_wep_key_2_value').attr("disabled","disabled");
					$('#security_wep_key_2_bit').attr("disabled","disabled");				
				}
				if(whichKey!=3){
					$('#security_wep_key_3_value').attr("disabled","disabled");
					$('#security_wep_key_3_bit').attr("disabled","disabled");				
				}
				if(whichKey!=4){
					$('#security_wep_key_4_value').attr("disabled","disabled");
					$('#security_wep_key_4_bit').attr("disabled","disabled");				
				}
			}
			
			$('#security_wpa_custom_key').bind("click", function(){				
				$('#security_wpa_custom_security_key').focus();
			});
			
			$('#security_wpa_custom_security_key').bind("click", function(){				
				$('#security_wpa_custom_key').attr('checked','checked');
			});
					
			$('#security_wep_default_key').bind("click", function(){	
				$(this).focus();
			});
			
			$('#security_wep_custom_key').bind("click", function(){
				//$('#security_wep_key_1').attr('checked','checked');
				//$('#security_wep_key_1_value').focus();
			});			
			
			
			$('#security_wep_key_1').bind("selectMe", function(e,FrmOnLoad){
				setCustomSecurityWepKeyFocus(1,FrmOnLoad)
			});
			$('#security_wep_key_1_value').click(function(){
				setCustomSecurityWepKeyFocus(1,false)
			});
			
			$('#security_wep_key_2').bind("selectMe", function(e,FrmOnLoad){
				setCustomSecurityWepKeyFocus(2,FrmOnLoad)
			});
			
			$('#security_wep_key_2_value').click(function(){
				setCustomSecurityWepKeyFocus(2,false)
			});
			
			$('#security_wep_key_3').bind("selectMe", function(e,FrmOnLoad){
				setCustomSecurityWepKeyFocus(3,FrmOnLoad)
			});
			$('#security_wep_key_3_value').click(function(){
				setCustomSecurityWepKeyFocus(3,false)
			});
			
			$('#security_wep_key_4').bind("selectMe", function(e,FrmOnLoad){
				setCustomSecurityWepKeyFocus(4,FrmOnLoad)
			});
			$('#security_wep_key_4_value').click(function(){
				setCustomSecurityWepKeyFocus(4,false)
			});
			
			$('#security_type').bind("change", function(){
				checkSecurityType();							   
			});
			
			checkSecurityType(); //find out which section should be visible on inital load
	}
	//end wirelesssetup_wirelesssecurity

	//start wirelesssetup_radiosetup
	if($('#wirelesssetup_radiosetup').length > 0){ // check to see if the body has the correct ID
			function checkEightOhTwo_Mode(){
				if ($('#wlMode option:selected').hasClass('extended')){ //For Quest, changed by Ling-Chun
					$('.non_nmode_group').hide();	
					$('.nmode_group').show();	
				} else {
					$('.nmode_group').hide();
					$('.non_nmode_group').show();												
				} 
			}
			
			$('#wlMode').bind("change", function(){  					//For Quest, changed by Ling-Chun
				checkEightOhTwo_Mode();
			});
			
			checkEightOhTwo_Mode(); //find out which section should be visible on inital load
	}
	//end wirelesssetup_radiosetup

	//start wirelesssetup_ssidsetup
	if($('#wirelesssetup_ssidsetup').length > 0){ // check to see if the body has the correct ID
		function checkSSIDName(){
				if (($('#ssid').attr('value') == '0')){ //For Quest, changed by Ling-Chun
				$('#ssid_default').show();
				$('#ssid_2thru4').hide();		
			} else {
				$('#ssid_default').hide();	
				$('#ssid_2thru4').show();	
			}
		}
		
		function checkSSIDUrlRedirect(){
			if (($('#ssid_redirect').attr('value') == 'disabled')){
				$('#ssid_redirect_url_group').hide();	
			} else {
				$('#ssid_redirect_url_group').show();
			}
		}
		
		$('#ssid').bind("change", function(){
			checkSSIDName();							   
		});
		
		$('#ssid_redirect').bind("change", function(){
			checkSSIDUrlRedirect();							   
		});
		
		$('#ssid_dhcp_subnet_start').bind("click", function(){
			$('#ssid_dhcp_subnet_on').attr('checked','checked');
		});
		
		$('#ssid_dhcp_subnet_end').bind("click", function(){
			$('#ssid_dhcp_subnet_on').attr('checked','checked');
		});
		
		$('#ssid_dhcp_subnet_mask').bind("click", function(){
			$('#ssid_dhcp_subnet_on').attr('checked','checked');
		});
		
		checkSSIDName(); //find out which section should be visible on inital load
		checkSSIDUrlRedirect();
	}
	//end wirelesssetup_ssidsetup

	//start wirelesssetup_wirelessmacauthentication
	if($('body').attr('id') == 'wirelesssetup_wirelessmacauthentication'){

		EnableDisable();

		//separate - mac address thing
		$('#mac_address').change(function(){
			if (($(this).attr('value') == 'manually')){
				$('#manual_mac_address').parent().parent().show();
			} else {
				$('#manual_mac_address').parent().parent().hide();
			}							   
		}).change();  //find out which section should be visible on inital load
	}
	//end wirelesssetup_wirelessmacauthentication
	
	//start wirelesssetup_wps** - Other references still below in image paths
	if($('#wirelesssetup_wps').length > 0){ // check to see if the body has the correct ID
			//__Qwest__, SinJia
			function checkManuallyEnterAddress8(){
				if (($('#mac_address').attr('value') == 'Manually Enter MAC')){
					$('#manual_mac_address').parent().parent().removeClass('greyed_out');					
					$('#manual_mac_address').attr("disabled", "");
				} else {
					$('#manual_mac_address').parent().parent().addClass('greyed_out');					
					$('#manual_mac_address').attr("disabled", "disabled");
				}
			}
			
			$('#mac_address').bind("change", function(){
				checkManuallyEnterAddress8();							   
			});
			
			checkManuallyEnterAddress8(); //find out which section should be visible on inital load
			//end of __Qwest__, SinJia
		function checkWPSState() {
			var isOn = $('#wps_state_on').is(":checked");
			
			// Set type dropdown back to top item, and trigger update
			$('#wps_type').attr('selectedIndex', 0).change();
			
			// Hide/show device list
			$('.device_list')[isOn ? 'show' : 'hide']();
			
			// Enable/disable first 2 steps
			$('#wps_type_wrapper, #wps_type_wrapper tr, #push_button_submit')[isOn ? 'removeClass' : 'addClass']('greyed_out');
			$('#push_button_submit a.connect_btn')[isOn ? 'removeClass' : 'addClass']('connect_btn_dis');
			$('#wps_type')[0].disabled = !isOn;
		}
		
		$('#wps_state_on, #wps_state_off').bind("change", checkWPSState);

		function checkWPSType(){
			if (this.value == 'client-pbc'){
				$('.ap_pin_group').hide();	
				$('.end_device_pin_group').hide();	
				$('.push_button_group').show();
			} else if (this.value == 'ap-pbc'){
				$('.push_button_group').hide();
				$('.end_device_pin_group').hide();	
				$('.ap_pin_group').show();		
			} else if (this.value == 'client-pin'){
				$('.push_button_group').hide();
				$('.ap_pin_group').hide();	
				$('.end_device_pin_group').show();
			}
		}
		
		$('#wps_type').bind("change", checkWPSType);
		
		//find out which section should be visible on inital load
		checkWPSState();
		checkWPSType();
		
		//hook up the toggle button
		( new ToggleButton( $('#wps_state_on')[0], $('#wps_state_off')[0] ) ).init();
	}
	//end wirelesssetup_wps

	//yiwei, start wirelesssetup_wps5g** - Other references still below in image paths
	if($('#wirelesssetup_wps5g').length > 0 || $('#supportconsole_5G_wps').length > 0){ // check to see if the body has the correct ID
			//__Qwest__, SinJia
			function checkManuallyEnterAddress8(){
				if (($('#mac_address').attr('value') == 'Manually Enter MAC')){
					$('#manual_mac_address').parent().parent().removeClass('greyed_out');					
					$('#manual_mac_address').attr("disabled", "");
				} else {
					$('#manual_mac_address').parent().parent().addClass('greyed_out');					
					$('#manual_mac_address').attr("disabled", "disabled");
				}
			}
			
			$('#mac_address').bind("change", function(){
				checkManuallyEnterAddress8();							   
			});
			
			checkManuallyEnterAddress8(); //find out which section should be visible on inital load
			//end of __Qwest__, SinJia
		function checkWPSState() {
			var isOn = $('#wps_state_on').is(":checked");
			
			// Set type dropdown back to top item, and trigger update
			$('#wps_type').attr('selectedIndex', 0).change();
			
			// Hide/show device list
			$('.device_list')[isOn ? 'show' : 'hide']();
			
			// Enable/disable first 2 steps
			$('#wps_type_wrapper, #wps_type_wrapper tr, #push_button_submit')[isOn ? 'removeClass' : 'addClass']('greyed_out');
			$('#push_button_submit a.connect_btn')[isOn ? 'removeClass' : 'addClass']('connect_btn_dis');
			$('#wps_type')[0].disabled = !isOn;
		}
		
		$('#wps_state_on, #wps_state_off').bind("change", checkWPSState);

		function checkWPSType(){
			if (this.value == 'client-pbc'){
				$('.ap_pin_group').hide();	
				$('.end_device_pin_group').hide();	
				$('.push_button_group').show();
			} else if (this.value == 'ap-pbc'){
				$('.push_button_group').hide();
				$('.end_device_pin_group').hide();	
				$('.ap_pin_group').show();		
			} else if (this.value == 'client-pin'){
				$('.push_button_group').hide();
				$('.ap_pin_group').hide();	
				$('.end_device_pin_group').show();
			}
		}
		
		$('#wps_type').bind("change", checkWPSType);
		
		//find out which section should be visible on inital load
		checkWPSState();
		checkWPSType();
		
		//hook up the toggle button
		( new ToggleButton( $('#wps_state_on')[0], $('#wps_state_off')[0] ) ).init();
	}
	//end wirelesssetup_wps5g

	//start wirelesssetup_wmm
	if($('#wirelesssetup_wmm').length > 0){ // check to see if the body has the correct ID
	
		function checkWMMState1(){
			if (($('#wireless_on').is(":checked"))){
				$('#set_WWM_powersave *').removeClass('greyed_out');					
				$('#wmm_optional').removeClass('hidden');					
				$('#powersave_on').removeAttr("disabled");
				$('#powersave_off').removeAttr("disabled");
			} else {
				$('#set_WWM_powersave *').addClass('greyed_out');
				$('#wmm_optional').addClass('hidden');
				$('#powersave_on').attr("disabled", "disabled");
				$('#powersave_off').attr("disabled", "disabled");
			}
		}
		
		$('#wireless_on').bind("change", function(){
			checkWMMState1();							   
		});
		$('#wireless_off').bind("change", function(){
			checkWMMState1();							   
		});
		
		checkWMMState1(); //find out which section should be visible on inital load
	}	
	//end wirelesssetup_wmm

	//start wirelesssetup_wds
	if($('body').attr('id') == 'wirelesssetup_wds'){
		//EnableDisable();		

		$('#mac_address').change(function(){
			if (($(this).attr('value') == 'Manually Enter MAC')){
				$('#manual_mac_address').parent().parent().show();
			} else {
				$('#manual_mac_address').parent().parent().hide();
			}							   
		}).change();  //find out which section should be visible on inital load
		
	}
	//end wirelesssetup_wds

	//start wirelesssetup_wirelessaccessschedule** - file was wirelesssetup_wirelessmacauthentication
	if($('body').attr('id') == 'wirelesssetup_wirelessaccessschedule'){
		EnableDisable();
		
		//disable day selection when all days is checked
		$('input#all_days').click(function(){
			if($(this).is(':checked')){
				$('input#sunday, input#monday, input#tuesday, input#wednesday, input#thursday, input#friday, input#saturday').attr("disabled","disabled");
				$('input#sunday, input#monday, input#tuesday, input#wednesday, input#thursday, input#friday, input#saturday').attr("checked","checked");
				$('label.day').attr("style","color:#999");
			}else{
				$('input#sunday, input#monday, input#tuesday, input#wednesday, input#thursday, input#friday, input#saturday').removeAttr("disabled");
				$('input#sunday, input#monday, input#tuesday, input#wednesday, input#thursday, input#friday, input#saturday').removeAttr("checked");
				$('label.day').removeAttr("style");
			}
		});
	}
	//end wirelesssetup_wirelessaccessschedule

	//start wirelesssetup_8021x
	//EnableDisable();
	//end wirelesssetup_8021x

	//_____UTILITIES_____
	//start utilities_reboot
	//end utilities_reboot

	//start utilities_restoredefaultsettings
	//end utilities_restoredefaultsettings

	//start utilities_upgradefirmware
	//end utilities_upgradefirmware

	//start utilities_pingtest
	//end utilities_pingtest

	//start utilities_traceroute
	//end utilities_traceroute

	//start utilities_speedtest
	//end utilities_speedtest

	//start utilities_configurationsave
	if($('body').attr('id') == 'utilities_configurationsave'){ // check to see if the body has the correct ID
		EnableDisable();
	}
	//end utilities_configurationsave

	//start utilities_hpnatest** -Current default page is utilities_hpnatest_collision
	if($('body').attr('id') == 'utilities_hpnatest'){
		
		$('select#select_hpna_test').change(function(){
			if($(this).val()=='quality_test'){
				$('div#quality_test').show();
				$('span.quality_test').show();
				$('span.collision_test').hide();
				$('span.device_discovery').hide();
			} else if($(this).val()=='collision_test'){
				$('div#quality_test').hide();
				$('span.quality_test').hide();
				$('span.collision_test').show();
				$('span.device_discovery').hide();
		} else if($(this).val()=='device_discovery'){
				$('div#quality_test').hide();
				$('span.quality_test').hide();
				$('span.device_discovery').show();
				$('span.collision_test').hide();
			}
		}).change();
		
		//show text field when Manually Enter is selected
		$('#device_selection').change(function(){
			if (($('#device_selection').attr('value') == 'Manually Enter IP Address')){
				$('#manual_ip_address').parent().parent().show();
			} else {
				$('#manual_ip_address').parent().parent().hide();
			}							   
		}).change();  //find out which section should be visible on inital load
	}
	//end utilities_hpnatest

	//start utilities_webactivitylog
	//end utilities_webactivitylog

	//start utilities_systemlog
	//end utilities_systemlog

	//start utilities_timezone
	//end utilities_timezone
	
	//_____ADVANCED SETUP_____
	//start advancedsetup_accessscheduler
	if($('body').attr('id') == 'advancedsetup_accessscheduler'){ // check to see if the body has the correct ID

		$('#device_selection').change(function(){
			if (($('#device_selection').attr('value') == 'Manually Enter IP Address')){
				$('#manual_mac_address').parent().parent().show();
			} else {
				$('#manual_mac_address').parent().parent().hide();
			}							   
		}).change();  //find out which section should be visible on inital load

		//disable day selection when all days is checked
		$('input#all_days').click(function(){
			if($(this).is(':checked')){
				$('input#sunday, input#monday, input#tuesday, input#wednesday, input#thursday, input#friday, input#saturday').attr("disabled","disabled");
				$('input#sunday, input#monday, input#tuesday, input#wednesday, input#thursday, input#friday, input#saturday').attr("checked","checked");
				$('label.day').attr("style","color:#999");
			}else{
				$('input#sunday, input#monday, input#tuesday, input#wednesday, input#thursday, input#friday, input#saturday').removeAttr("disabled");
				$('input#sunday, input#monday, input#tuesday, input#wednesday, input#thursday, input#friday, input#saturday').removeAttr("checked");
				$('label.day').removeAttr("style");
			}
		});
	}
	//end advancedsetup_accessscheduler

	//start advancedsetup_servicesblocking
	if($('body').attr('id') == 'advancedsetup_servicesblocking'){ // check to see if the body has the correct ID
	
			$('#device_selection').change(function(){
				if (($('#device_selection').attr('value') == 'Manually Enter IP Address')){
					$('#manual_mac_address').parent().parent().show();
				} else {
					$('#manual_mac_address').parent().parent().hide();
				}							   
			}).change();  //find out which section should be visible on inital load
	}
	//end advancedsetup_servicesblocking

	//start advancedsetup_websiteblocking
	if($('body').attr('id') == 'advancedsetup_websiteblocking'){ // check to see if the body has the correct ID
	
			$('#device_selection').change(function(){
				if (($('#device_selection').attr('value') == 'Manually Enter IP Address')){
					$('#manual_mac_address').parent().parent().show();
				} else {
					$('#manual_mac_address').parent().parent().hide();
				}							   
			}).change();  //find out which section should be visible on inital load
	}
	//end advancedsetup_websiteblocking

	//start advancedsetup_broadbandsettings
	if($('#advancedsetup_broadbandsettings').length > 0){ // check to see if the body has the correct ID
	}
	//end advancedsetup_broadbandsettings

	//start advancedsetup_dhcpsettings
	//If custom servers is selected, show text fields
	EnableDisable();
	if($('body').attr('id') == 'advancedsetup_dhcpsettings'){
		var checkAutoDCHP = function(){
		if($('input#pppoe_dns_type_static').is(':checked')){
			$('tr.pppoe_dns_type_dynamic_group').show();
		}else {
			$('tr.pppoe_dns_type_dynamic_group').hide();
		}
		}
		checkAutoDCHP();
		$('input#pppoe_dns_type_static, input#pppoe_dns_type_dynamic').click(function(){ checkAutoDCHP(); });
	}
	//end advancedsetup_dhcpsettings

	//start advancedsetup_IPv6lansettings
	if($('body').attr('id') == 'advancedsetup_IPv6lansettings'){ // check to see if the body has the correct ID
		$('select#lan_connection_type').change(function(){
			if($(this).val() == 'Disabled'){
				$('div#disabled').show();
				$('div#stateful, div#stateless').hide();
			} else if ($(this).val() == 'Stateful'){
				$('div#stateful').show();
				$('div#disabled, div#stateless').hide();
			} else if ($(this).val() == 'Stateless'){
				$('div#stateless').show();
				$('div#disabled, div#stateful').hide();			
			}
		}).change();
	}
	//end advancedsetup_IPv6lansettings

	
//__MSTC__, Loujia 0904 add Lan subnet page S_	

	//start advancedsetup_lansubnet
	//If custom servers is selected, show text fields
	EnableDisable();
	if(($('body').attr('id') == 'advancedsetup_lansubnet') || ($('body').attr('id') == 'advancedsetup_editlansubnet')){
		var checkAutoDCHP = function(){
		if($('input#pppoe_dns_type_static').is(':checked')){
			$('tr.pppoe_dns_type_dynamic_group').show();
		}else {
			$('tr.pppoe_dns_type_dynamic_group').hide();
		}
		}
		checkAutoDCHP();
		$('input#pppoe_dns_type_static, input#pppoe_dns_type_dynamic').click(function(){ checkAutoDCHP(); });
//__MSTC__, Loujia 0815 Lan Ipv6 Merge to Ipv4
		$('select#v4v6_lan_connection_type').change(function(){
		if($(this).val() == 'Disabled'){
			$('div#disabled').show();
			$('div#stateful, div#stateless').hide();

			$('tr.stateful, tr.stateless, tr.stateful_dns').hide();
		} else if ($(this).val() == 'Stateful'){
			$('div#stateful').show();
			$('div#disabled, div#stateless').hide();

			$('tr.stateful').show();
			$('tr.stateless').hide();
		} else if ($(this).val() == 'Stateless'){
			$('div#stateless').show();
			$('div#disabled, div#stateful').hide();	

			$('tr.stateful').hide();
			$('tr.stateless').show();
		}
		}).change();
//__MSTC__, Loujia 0815 Lan Ipv6 Merge to Ipv4

//__MSTC__, Loujia 0815 Lan Ipv6 Merge to Ipv4 - stateful Dns	
			$('input[name=v4v6_dhcpv6_dns_type]').bind("click", function(){
				if($('input[name=v4v6_dhcpv6_dns_type]:checked').val()=='v4v6_dhcpv6_dns_type_dynamic'){
					$('tr.stateful_dns').hide();
				} else {
					$('tr.stateful_dns').show();
				}
			}).change();
//__MSTC__, Loujia 0815 Lan Ipv6 Merge to Ipv4 - stateful Dns

	}
	//end advancedsetup_dhcpsettings
//__MSTC__, Loujia 0904 add Lan subnet page E_


	//start advancedsetup_dhcpreservation
	if($('body').attr('id') == 'advancedsetup_dhcpreservation'){ // check to see if the body has the correct ID
	
			$('#mac_address').change(function(){
				if (($(this).attr('value') == 'Manually Enter MAC')){
					$('#manual_mac_address').parent().parent().show();
				} else {
					$('#manual_mac_address').parent().parent().hide();
				}							   
			}).change();  //find out which section should be visible on inital load
	}
	//end advancedsetup_dhcpreservation

	//start advancedsetup_wanipaddress
	if($('#advancedsetup_wanipaddress').length > 0){ // check to see if the body has the correct ID
			function checkIspProtocol(){
				var enterppp='0';
				var enterdhcp='0';
				if( $('#isp_protocol').attr('value') =='AutoSelect' ){
					if(defPrctl=='PPPoE')
						enterppp='1';
					else if(defPrctl=='RFC1483 via DHCP')
						enterdhcp='1';
					else
						enterppp='1';
				}

				if ($('#isp_protocol').attr('value') == 'PPPoE' || enterppp=='1'){					
					$('.rfc_transparent_group').hide();
					$('.rfc_dhcp_group').hide();
					$('.rfc_static_group').hide();	
					$('.pppoe_group').show();
				} else if ($('#isp_protocol').attr('value') == 'PPPoA'){
					$('.rfc_transparent_group').hide();
					$('.rfc_dhcp_group').hide();
					$('.rfc_static_group').hide();	
					$('.pppoe_group').show();
				} else if ( ($('#isp_protocol').attr('value') == 'RFC 1483 Transparent Bridging' ) || 
							($('#isp_protocol').attr('value') == 'RFC 1483 Transparent Bridging_PVC032' ) || 
							($('#isp_protocol').attr('value') == 'RFC 1483 Transparent Bridging_PVC835' ) ||
							($('#isp_protocol').attr('value') == 'RFC 1483 Transparent Bridging_PVC035' )){
					$('.pppoe_group').hide();
					$('.rfc_dhcp_group').hide();
					$('.rfc_static_group').hide();
					$('.rfc_transparent_group').show();
				} else if ($('#isp_protocol').attr('value') == 'RFC 1483 via DHCP' || enterdhcp=='1'){
					$('.pppoe_group').hide();
					$('.rfc_transparent_group').hide();					
					$('.rfc_static_group').hide();
					$('.rfc_dhcp_group').show();

					$('.rfc_static_routed_group').hide();
					$('.rfc_static_bridged_group').hide();
					$('.rfc_dhcp_routed_group').show();
//					$('.rfc_dhcp_bridged_group').hide();

				} else if ($('#isp_protocol').attr('value') == 'RFC 1483 via Static IP'){
					$('.pppoe_group').hide();
					$('.rfc_transparent_group').hide();
					$('.rfc_dhcp_group').hide();
					$('.rfc_static_group').show();	

					var prctl = '<%ejGetOther(sysInfo, defaultPrctl)%>';

					if (prctl == "IPoA Static"){
						$('.rfc_static_routed_group').show();
						$('.rfc_static_bridged_group').hide();						
					}else{
						$('.rfc_static_routed_group').hide();
						$('.rfc_static_bridged_group').show();						
					}
//					$('.rfc_dhcp_bridged_group').hide();
					$('.rfc_dhcp_routed_group').hide();
				} 
				var whatGroup=$('#isp_protocol').attr('value');
				checkIpType(whatGroup);
//				checkEncapsulationType(whatGroup);
			}
			
			function checkIpType(whatGroup, routedOrBridged){
				if(whatGroup=='PPPoE'){
					whatGroup='pppoe';	
				} else if(whatGroup=='PPPoA'){
					whatGroup='pppoe';	
				} else if(whatGroup=='RFC 1483 Transparent Bridging'){
					whatGroup=null;	
				} else if(whatGroup=='RFC 1483 via DHCP'){
					whatGroup='rfc_dhcp';	
				} else if(whatGroup=='RFC 1483 via Static IP'){
					whatGroup='rfc_static';	
				}
				
				if(routedOrBridged != undefined){
					whatGroup+='_'+routedOrBridged;
				}

				if(whatGroup == "rfc_dhcp")
				{				
				   if ($('#'+ whatGroup +'_ip_type').attr('value') == 'Dynamic'){
				      $('.single_dhcp_ip_group').hide();
				      $('.single_static_ip_group').hide();
				      $('.single_ip_group').hide();
				      $('.block_static_ip_group').hide();
				      if(specMode == 1)
				         $('.radio_single_static_ip_group').hide();
				   }
				   else if ($('#'+ whatGroup +'_ip_type').attr('value') == 'StaticDHCP'){
				      $('.single_dhcp_ip_group').show();
				      $('.single_static_ip_group').show();
				      $('.single_ip_group').show();
				      $('.block_static_ip_group').hide();
				   } else if ($('#'+ whatGroup +'_ip_type').attr('value') == 'StaticManual'){
				      $('.single_dhcp_ip_group').hide();
				      $('.single_static_ip_group').show();
				      $('.single_ip_group').show();
				      $('.block_static_ip_group').hide();
				      if(specMode == 1)
				         $('.radio_single_static_ip_group').show();
				   } else if ($('#'+ whatGroup +'_ip_type').attr('value') == 'BlockDHCP'){
				      $('.single_dhcp_ip_group').show();
				      $('.single_static_ip_group').hide();
				      $('.single_ip_group').show();
				      $('.block_static_ip_group').show();
				   }
				   else if ($('#'+ whatGroup +'_ip_type').attr('value') == 'BlockManual'){
				      $('.single_dhcp_ip_group').hide();
				      $('.single_static_ip_group').show();
				      $('.single_ip_group').show();
				      $('.block_static_ip_group').show();
				   }
				}
				else
				{				
				   if ($('#'+ whatGroup +'_ip_type').attr('value') == 'Single Static IP'){	
				      $('.block_static_ip_group').hide();
				      $('.single_static_ip_group').show();
				   } else if ($('#'+ whatGroup +'_ip_type').attr('value') == 'Block of Static IP Addresses'){
				      $('.single_static_ip_group').hide();
				      $('.block_static_ip_group').show();					
				   } else {
				      $('.single_static_ip_group').hide();
				      $('.block_static_ip_group').hide();
				   }
				}
			}
			
			
			function checkEncapsulationType(whatGroup){
				var encapsulationType='';
				if (whatGroup == 'RFC 1483 via DHCP'){
					encapsulationType= $('input[name=rfc1483_dhcp_encapsulation]:checked').val();
				} else if (whatGroup == 'RFC 1483 via Static IP'){
					encapsulationType= $('input[name=rfc1483_static_encapsulation]:checked').val();
				}
			}
			
			$('#pppoe_ip_type').bind("change", function(){
				checkIpType('PPPoE');
			});

			$('#rfc_dhcp_ip_type').bind("change", function(){
				checkIpType('RFC 1483 via DHCP');
			});			
			$('input[name=pppoe_dns_type]').bind("click", function(){
				if($('input[name=pppoe_dns_type]:checked').val()=='pppoe_dns_type_dynamic'){
					$('.pppoe_dns_type_dynamic_group').hide();
				} else {
					$('.pppoe_dns_type_dynamic_group').show();
				}
			}).change();
			
			$('#pppoa_ip_type').bind("change", function(){
				checkIpType('PPPoA');
			});
			
			$('input[name=pppoa_dns_type]').bind("click", function(){
				if($('input[name=pppoa_dns_type]:checked').val()=='pppoa_dns_type_dynamic'){
					$('.pppoa_dns_type_dynamic_group').hide();
				} else {
					$('.pppoa_dns_type_dynamic_group').show();
				}
			}).change();
			
			$('input[name=rfc1483_dhcp_encapsulation]').bind("change", function(){
				if($('input[name=rfc1483_dhcp_encapsulation]:checked').val()=='rfc1483_dhcp_encapsulation_bridged'){
						$('.rfc_static_routed_group').hide();
						$('.rfc_static_bridged_group').hide();
						$('.rfc_dhcp_routed_group').hide();
//						$('.rfc_dhcp_bridged_group').show();
					} else {
						$('.rfc_static_routed_group').hide();
						$('.rfc_static_bridged_group').hide();						
//						$('.rfc_dhcp_bridged_group').hide();
						$('.rfc_dhcp_routed_group').show();
					}
			});
			
			$('input[name=rfc1483_static_encapsulation]').bind("change", function(){
				if($('input[name=rfc1483_static_encapsulation]:checked').val()=='rfc1483_static_encapsulation_bridged'){
						$('.rfc_static_routed_group').hide();						
						$('.rfc_dhcp_routed_group').hide();
//						$('.rfc_dhcp_bridged_group').hide();
						$('.rfc_static_bridged_group').show();
					} else {						
						$('.rfc_static_bridged_group').hide();						
//						$('.rfc_dhcp_bridged_group').hide();
						$('.rfc_dhcp_routed_group').hide();
						$('.rfc_static_routed_group').show();
					}
			});
			
			$('#rfc_static_routed_ip_type').bind("change", function(){
				checkIpType('RFC 1483 via Static IP', 'routed');
			});
			$('input[name=rfc_static_routed_dns_type]').bind("click", function(){
				if($('input[name=rfc_static_routed_dns_type]:checked').val()=='rfc_static_routed_dns_type_dynamic'){
					$('.rfc_static_routed_dns_type_dynamic_group').hide();
				} else {
					$('.rfc_static_routed_dns_type_dynamic_group').show();
				}
			}).change();
			
			$('#rfc_static_bridged_ip_type').bind("change", function(){
				checkIpType('RFC 1483 via Static IP', 'bridged');
			});
			$('input[name=rfc_static_bridged_dns_type]').bind("click", function(){
				if($('input[name=rfc_static_bridged_dns_type]:checked').val()=='rfc_static_bridged_dns_type_dynamic'){
					$('.rfc_static_bridged_dns_type_dynamic_group').hide();
				} else {
					$('.rfc_static_bridged_dns_type_dynamic_group').show();
				}
			}).change();
			
			$('#rfc_dhcp_routed_ip_type').bind("change", function(){
				checkIpType('RFC 1483 via DHCP','routed');
			});
			$('input[name=rfc_dhcp_routed_dns_type]').bind("click", function(){
				if($('input[name=rfc_dhcp_routed_dns_type]:checked').val()=='rfc_dhcp_routed_dns_type_dynamic'){
					$('.rfc_dhcp_routed_dns_type_dynamic_group').hide();
				} else {
					$('.rfc_dhcp_routed_dns_type_dynamic_group').show();
				}
			}).change();
			
			$('#rfc_dhcp_bridged_ip_type').bind("change", function(){
				checkIpType('RFC 1483 via DHCP','bridged');
			});
			$('input[name=rfc_dhcp_bridged_dns_type]').bind("click", function(){
				if($('input[name=rfc_dhcp_bridged_dns_type]:checked').val()=='rfc_dhcp_bridged_dns_type_dynamic'){
					$('.rfc_dhcp_bridged_dns_type_dynamic_group').hide();
				} else {
					$('.rfc_dhcp_bridged_dns_type_dynamic_group').show();
				}
			}).change();
			
			$('#isp_protocol').bind("change", function(){
				checkIspProtocol();
			});
			
			checkIspProtocol(); //find out which section should be visible on inital load
			
//__MSTC__, Loujia 0813 Integrate WAN Page, PPP-6rd dns	
			$('input[name=ppp_t6rdenable]').bind("click", function(){
				if($('input[name=ppp_t6rdenable]:checked').val()=='disable'){
					$('.ppp_t6rd_state_enable_group').hide();
					$('.originPPPSave').show();				
				} else {
					$('.ppp_t6rd_state_enable_group').show();
					$('.originPPPSave').hide();
				}
			}).change();

			$('input[name=ppp_t6rd_dns_type]').bind("click", function(){
				if($('input[name=ppp_t6rd_dns_type]:checked').val()=='ppp_sixRD_dns_type_dynamic'){
					$('.ppp_sixRD_dns_type_dynamic_group').hide();
				} else {
					$('.ppp_sixRD_dns_type_dynamic_group').show();
				}
			}).change();
//__MSTC__, Loujia 0813 Integrate WAN Page, PPP-6rd dns	

//__MSTC__, Loujia 0813 Integrate WAN Page - dhcpv6 Dns	
			$('input[name=ipv6_dns_type]').bind("click", function(){
				if($('input[name=ipv6_dns_type]:checked').val()=='ipv6_dns_type_dynamic'){
					$('.ipv6_dns_static_group').hide();
				} else {
					$('.ipv6_dns_static_group').show();
				}
			}).change();
//__MSTC__, Loujia 0813 Integrate WAN Page - dhcpv6 Dns
//__MSTC__, Loujia 0821 Integrate WAN Page, 6rd 212 option ipoe
			$('input[name=v4_6rd_212Opiton]').bind("click", function(){
			if($('input[name=v4_6rd_212Opiton]:checked').val()=='enable'){
				$('input#v4_tunnel6rd_Prefix').attr("disabled","ture");
				$('input#v4_tunnel6rd_Prefix_Length').attr("disabled", "ture");
				$('input#v4_IPv4_CE_Mask_Length').attr("disabled", "ture");
				$('input#v4_Border_Router_Address').attr("disabled", "ture");
			} else {
				$('input#v4_tunnel6rd_Prefix').removeAttr("disabled");
				$('input#v4_tunnel6rd_Prefix_Length').removeAttr("disabled");
				$('input#v4_IPv4_CE_Mask_Length').removeAttr("disabled");
				$('input#v4_Border_Router_Address').removeAttr("disabled");
			}
			}).change();
//__MSTC__, Loujia 0821 Integrate WAN Page, 6rd 212 option ipoe
	}
	//end advancedsetup_wanipaddress

	//start advancedsetup_IPv6wansettings
	if($('body').attr('id') == 'advancedsetup_wanipv6address'){ // check to see if the body has the correct ID
		var checkIPV6State = function(){
			if($('input#ipV6_state_enable').is(':checked')){
				$('div#disabled').hide();
				$('div#enabled').show();
				$('select#wan_ipV6_ip_protocol').change();
			} else {
				$('div#enabled').hide();
				$('div#disabled').show();
			}
		}
		
		checkIPV6State();
		
		$('input#ipV6_state_enable, input#ipV6_state_disable').click(function(){ checkIPV6State(); });
		
		$('select#wan_ipV6_ip_protocol').change(function(){
			if($(this).val()=='6rd'){
				$('div#sixRD').show();
				$('div#dhcpV6, div#pppV6, div#staticIPv6').hide();
			} else if($(this).val()=='DHCPv6'){
				$('div#dhcpV6').show();
				$('div#sixRD, div#pppV6, div#staticIPv6').hide();
			} else if($(this).val()=='PPPv6'){
				$('div#pppV6').show();
				$('div#sixRD, div#dhcpV6, div#staticIPv6').hide();
			} else if($(this).val()=='Static IPv6'){
				$('div#staticIPv6').show();
				$('div#sixRD, div#dhcpV6, div#pppV6').hide();
			}
		}).change();
		
		var checkStaticIP = function(){
		if($('input#pppoe_ip_type_static').is(':checked')){
			$('tr.pppoe_ip_type_dynamic_group').show();
		}else {
			$('tr.pppoe_ip_type_dynamic_group').hide();
		}
		}
		checkStaticIP();
		$('input#pppoe_ip_type_static, input#pppoe_ip_type_dynamic').click(function(){ checkStaticIP(); });

		var checkAutoDCHP = function(){
		if($('input#pppoe_dns_type_custom').is(':checked')){
			$('tr.pppoe_dns_type_dynamic_group').show();
		}else {
			$('tr.pppoe_dns_type_dynamic_group').hide();
		}
		}
		checkAutoDCHP();
		$('input#pppoe_dns_type_default, input#pppoe_dns_type_custom').click(function(){ checkAutoDCHP(); });

	}
	//end advancedsetup_IPv6wansettings

	//start advancedsetup_dnshostmapping
	//end advancedsetup_dnshostmapping
	
	//start advancedsetup_dynamicdns
	if($('body').attr('id') == 'advancedsetup_dynamicdns'){ // check to see if the body has the correct ID

		if (dydnsentry != ''){
			var info = dydnsentry.split(',');
			if(info[4] == '1'){
				$('#ddnsstate_on').attr("checked", "checked");

			}else{
				$('#ddnsstate_off').attr("checked", "checked");
			}
		}
		else{
			$('#ddnsstate_off').attr("checked", "checked");
		}

		var checkDDNSState = function(){
			if($('input#ddnsstate_on').is(':checked')){
				$('div#enabled').show();
				$('div#disabled').hide();
			}else{
				$('div#disabled').show();
				$('div#enabled').hide();
			}
		}
		checkDDNSState();
		$('input#ddnsstate_on, input#ddnsstate_off').click(function(){
			checkDDNSState();
		});
	}
	//end advancedsetup_dynamicdns

	//start advancedsetup_vlan
	if($('body').attr('id') == 'advancedsetup_vlan'){ // check to see if the body has the correct ID
		var checkVLANState = function(){
			if($('input#ssid_dhcp_subnet_on').is(':checked')){
				$('tr.vlan_addy').show();
			} else {
				$('tr.vlan_addy').hide();
			}
		}
		
		checkVLANState();
		
		$('input#ssid_dhcp_subnet_on, input#ssid_dhcp_subnet_off').click(function(){ checkVLANState(); });
		
	}
	//end advancedsetup_vlan

	//start advancedsetup_qos
	if($('body').attr('id') == 'advancedsetup_qos'){ // check to see if the body has the correct ID
		EnableDisable();

		$('select#qos_type').change(function(){
			if($(this).val() == 'Low'){
				$('div#custom').show();
				$('div#non_custom').hide();
			} else {
				$('div#custom').hide();
				$('div#non_custom').show();
			}
		}).change();
		
		var checkIPTag = function(){
			if($('input#ip_tag_custom').is(':checked')){
				$('div#custom_ip_addresses').show();
				$('div#all_ip_addresses').hide();
			} else {
				$('div#custom_ip_addresses').hide();
				$('div#all_ip_addresses').show();
			}
		}
		$('input#ip_tag_all, input#ip_tag_custom').click(function(){
			checkIPTag();
		});
		
		checkIPTag();
		
	}
	//end advancedsetup_qos

	//start advancedsetup_remotegui
	$('body#advancedsetup_remotegui input#hide_password').click(function(){
		if($(this).is(':checked')){
			//change PIN fields from password to text
			$('input#admin_password').replaceWith('<input type="password" name="admin_password" id="admin_password" size="35" value="'+$('input#admin_password').val()+'" />');
			$('input#admin_password2').replaceWith('<input type="password" name="admin_password2" id="admin_password2" size="35" value="'+$('input#admin_password2').val()+'" />');
			$('tr td input#admin_password2').closest('tr').show();
		} else {
			//change PIN fields from text to password
			$('input#admin_password').replaceWith('<input type="text" name="admin_password" id="admin_password" size="35" value="'+$('input#admin_password').val()+'" />');
			$('input#admin_password2').replaceWith('<input type="text" name="admin_password2" id="admin_password2" size="35" value="'+$('input#admin_password2').val()+'" />');
			$('input#admin_password2').closest('tr').hide();
		}
	});

	$('body#advancedsetup_remotegui input#admin_password, body#advancedsetup_remotegui input#admin_password2').blur(function(){
		if($('input#admin_password').val() !='' && $('input#admin_password2').val() != '' && $('input#admin_password').val() != $('input#admin_password2').val()){
			alert('Your password fields do not match.');
		}
	});
	//end advancedsetup_remotegui

	//start advancedsetup_remotetelnet
	if($('body').attr('id') == 'advancedsetup_remotetelnet'){ // check to see if the body has the correct ID
		EnableDisable();
		
		$('body#advancedsetup_remotetelnet input#hide_password').click(function(){
			if($(this).is(':checked')){
				//change PIN fields from password to text
				$('input#admin_password').replaceWith('<input type="password" name="admin_password" id="admin_password" size="35" value="'+$('input#admin_password').val()+'" />');
				$('input#admin_password2').replaceWith('<input type="password" name="admin_password2" id="admin_password2" size="35" value="'+$('input#admin_password2').val()+'" />');
				$('tr td input#admin_password2').closest('tr').show();
			} else {
				//change PIN fields from text to password
				$('input#admin_password').replaceWith('<input type="text" name="admin_password" id="admin_password" size="35" value="'+$('input#admin_password').val()+'" />');
				$('input#admin_password2').replaceWith('<input type="text" name="admin_password2" id="admin_password2" size="35" value="'+$('input#admin_password2').val()+'" />');
				$('input#admin_password2').closest('tr').hide();
			}
		});
	
		$('body#advancedsetup_remotetelnet input#admin_password, body#advancedsetup_remotetelnet input#admin_password2').blur(function(){
			if($('input#admin_password').val() !='' && $('input#admin_password2').val() != '' && $('input#admin_password').val() != $('input#admin_password2').val()){
				alert('Your password fields do not match.');
			}
		});
		
	}
	//end advancedsetup_remotetelnet

	//start advancedsetup_dynamicrouting
	if($('body').attr('id') == 'advancedsetup_admin'){ // check to see if the body has the correct ID
		EnableDisable();
	}
	//end advancedsetup_dynamicrouting

	//start advancedsetup_staticrouting
	//end advancedsetup_staticrouting

	//start advancedsetup_admin
	if($('body').attr('id') == 'advancedsetup_admin'){ // check to see if the body has the correct ID
		var checkPWState = function(){
			if($('input#admin_pw_state_on').is(':checked')){
				$('div#enabled').show();
				$('div#disabled').hide();
			} else {
				$('div#disabled').show();
				$('div#enabled').hide();
			}
		}
		$('input#admin_pw_state_on, input#admin_pw_state_off').click(function(){
			checkPWState();
		});
		checkPWState();
	}
	
	$('body#advancedsetup_admin input#hide_password').click(function(){
		if($(this).is(':checked')){
			//change PIN fields from password to text
			$('input#admin_password').replaceWith('<input type="password" name="admin_password" id="admin_password" size="30" value="'+$('input#admin_password').val()+'" />');
			$('input#admin_password2').replaceWith('<input type="password" name="admin_password2" id="admin_password2" size="30" value="'+$('input#admin_password2').val()+'" />');
			$('input#admin_password2').closest('tr').show();
		} else {
			//change PIN fields from text to password
			$('input#admin_password').replaceWith('<input type="text" name="admin_password" id="admin_password" size="30" value="'+$('input#admin_password').val()+'" />');
			$('input#admin_password2').replaceWith('<input type="text" name="admin_password2" id="admin_password2" size="30" value="'+$('input#admin_password2').val()+'" />');
			$('input#admin_password2').closest('tr').hide();
		}
	});

	$('body#advancedsetup_admin input#admin_password, body#advancedsetup_admin input#admin_password2').blur(function(){
		if($('input#admin_password').val() !='' && $('input#admin_password2').val() != '' && $('input#admin_password').val() != $('input#admin_password2').val()){
			alert('Your password fields do not match.');
		}
	});

	$('body#advancedsetup_admin input#hide_password').click(function(){
		if($(this).is(':checked')){
			//change PIN fields from password to text
			$('input#admin_password').replaceWith('<input type="password" name="admin_password" id="admin_password" size="35" value="'+$('input#admin_password').val()+'" />');
			$('input#admin_password2').replaceWith('<input type="password" name="admin_password2" id="admin_password2" size="35" value="'+$('input#admin_password2').val()+'" />');
			$('tr td input#admin_password2').closest('tr').show();
		} else {
			//change PIN fields from text to password
			$('input#admin_password').replaceWith('<input type="text" name="admin_password" id="admin_password" size="35" value="'+$('input#admin_password').val()+'" />');
			$('input#admin_password2').replaceWith('<input type="text" name="admin_password2" id="admin_password2" size="35" value="'+$('input#admin_password2').val()+'" />');
			$('input#admin_password2').closest('tr').hide();
		}
	});

	$('body#advancedsetup_admin input#admin_password, body#advancedsetup_admin input#admin_password2').blur(function(){
		if($('input#admin_password').val() !='' && $('input#admin_password2').val() != '' && $('input#admin_password').val() != $('input#admin_password2').val()){
			alert('Your password fields do not match.');
		}
	});
	//end advancedsetup_admin

	//start advancedsetup_applications
	if($('body').attr('id') == 'advancedsetup_applications'){
		$('select#application_category').change(
		function(){
			if($(this).val() == 'All'){
				$('option.games, option.console, option.vpn, option.audio-video, option.applications, option.servers, option.user-rule').show();
			}else if($(this).val() == 'Games'){
				$('option.games').show();
				$('option.console, option.vpn, option.audio-video, option.applications, option.servers, option.user-rule').hide();
			}else if($(this).val() == 'Game Consoles'){
				$('option.console').show();
				$('option.games, option.vpn, option.audio-video, option.applications, option.servers, option.user-rule').hide();
			}else if($(this).val() == 'VPN'){
				$('option.vpn').show();
				$('option.games, option.console, option.audio-video, option.applications, option.servers, option.user-rule').hide();
			}else if($(this).val() == 'Audio/Video'){
				$('option.audio-video').show();
				$('option.games, option.console, option.vpn, option.applications, option.servers, option.user-rule').hide();
			}else if($(this).val() == 'Applications'){
				$('option.applications').show();
				$('option.games, option.console, option.vpn, option.audio-video, option.servers, option.user-rule').hide();
			}else if($(this).val() == 'Servers'){
				$('option.servers').show();
				$('option.games, option.console, option.vpn, option.audio-video, option.applications, option.user-rule').hide();
			}else if($(this).val() == 'User Created Rules'){
				$('option.user-rule').show();
				$('option.games, option.console, option.vpn, option.audio-video, option.applications, option.servers').hide();
			}
		}).change();

		//show text field when Manually Enter is selected
		$('#device_selection').change(function(){
			if (($('#device_selection').attr('value') == 'Manually Enter IP Address')){
				$('#manual_ip_address').parent().parent().show();
			} else {
				$('#manual_ip_address').parent().parent().hide();
			}							   
		}).change();  //find out which section should be visible on inital load
	}
	//end advancedsetup_applications

	//start advancedsetup_advancedportforwarding
	if($('body').attr('id') == 'advancedsetup_advancedportforwarding'){
		var checkIPAddressDefinition = function(){
			if($('input#define_ip_address').is(':checked')){
				$('.define_ip_fields').show();
			} else {
				$('.define_ip_fields').hide();
			}		
		}
		
		$('input#define_ip_address, input#all_ip_addresses').click(function(){
			checkIPAddressDefinition();
		});
		
		checkIPAddressDefinition();

		//show text field when Manually Enter is selected
		$('#device_selection').change(function(){
			if (($('#device_selection').attr('value') == 'Manually Enter IP Address')){
				$('#manual_ip_address').parent().parent().show();
			} else {
				$('#manual_ip_address').parent().parent().hide();
			}							   
		}).change();  //find out which section should be visible on inital load
	}
	//end advancedsetup_advancedportforwarding

	//start advancedsetup_dmzhosting
	if($('body').attr('id') == 'advancedsetup_dmzhosting'){ // check to see if the body has the correct ID
		$('#device_selection').change(function(){
			if (($('#device_selection').attr('value') == 'Manually Enter IP Address')){
				$('#manual_ip_address').parent().parent().show();
			} else {
				$('#manual_ip_address').parent().parent().hide();
			}							   
		}).change();  //find out which section should be visible on inital load
	}
	//end advancedsetup_dmzhosting

	//start advancedsetup_ipv4firewall** - was advancedsetup_firewallsettings
	if($('#advancedsetup_ipv4firewall').length > 0){ // check to see if the body has the correct ID
		function checkSecurityLevel(){
			if ($('#security_level').attr('value') == 'Off'){					
				$('.security_level_low_group').hide();
				$('.security_level_medium_group').hide();
				$('.security_level_high_group').hide();
				$('.security_level_off_group').show();
			} else if ($('#security_level').attr('value') == 'Low'){
				$('.security_level_off_group').hide();					
				$('.security_level_medium_group').hide();
				$('.security_level_high_group').hide();
				$('.security_level_low_group').show();
			} else if ($('#security_level').attr('value') == 'Medium'){
				$('.security_level_off_group').hide();
				$('.security_level_low_group').hide();					
				$('.security_level_high_group').hide();
				$('.security_level_medium_group').show();
			} else if ($('#security_level').attr('value') == 'High'){
				$('.security_level_off_group').hide();
				$('.security_level_low_group').hide();
				$('.security_level_medium_group').hide();
				$('.security_level_high_group').show();
			}
		}
		
		$('#security_level').bind("change", function(){
			checkSecurityLevel();
		});
		checkSecurityLevel();
	}
	//end advancedsetup_ipv4firewall

	//start advancedsetup_ipv6firewall** - was advancedsetup_firewallsettings
	if($('#advancedsetup_ipv4firewall').length > 0){ // check to see if the body has the correct ID
		function checkSecurityLevel(){
			if ($('#security_level').attr('value') == 'Off'){					
				$('.security_level_low_group').hide();
				$('.security_level_medium_group').hide();
				$('.security_level_high_group').hide();
				$('.security_level_off_group').show();
			} else if ($('#security_level').attr('value') == 'Low'){
				$('.security_level_off_group').hide();					
				$('.security_level_medium_group').hide();
				$('.security_level_high_group').hide();
				$('.security_level_low_group').show();
			} else if ($('#security_level').attr('value') == 'Medium'){
				$('.security_level_off_group').hide();
				$('.security_level_low_group').hide();					
				$('.security_level_high_group').hide();
				$('.security_level_medium_group').show();
			} else if ($('#security_level').attr('value') == 'High'){
				$('.security_level_off_group').hide();
				$('.security_level_low_group').hide();
				$('.security_level_medium_group').hide();
				$('.security_level_high_group').show();
			}
		}
		
		$('#security_level').bind("change", function(){
			checkSecurityLevel();
		});
		
		checkSecurityLevel();
	}
	//end advancedsetup_ipv6firewall

	//start advancedsetup_ipsec
	if($('body').attr('id') == 'advancedsetup_ipsec'){ // check to see if the body has the correct ID
		EnableDisable();
	}
	//end advancedsetup_ipsec

	//start advancedsetup_nat
	//end advancedsetup_nat

	//start advancedsetup_upnp
	//end advancedsetup_upnp

	/***** HIDDEN PAGE FUNCTIONS *****/
	
	//_____SUPPORT CONSOLE_____
	//start supportconsole_toolbox
	if($('body').attr('id') == 'supportconsole_toolbox'){ // check to see if the body has the correct ID
		$('select#tool_type').change(function(){
			if($(this).val() == 'Disabled'){
				$('div#disabled').show();
				$('div#port_mirror, div#bits_per_tone, div#physical_layer_debug, div#processor_log').hide();
			} else if($(this).val() == 'Port Mirror'){
				$('div#port_mirror').show();
				$('div#disabled, div#bits_per_tone, div#physical_layer_debug, div#processor_log').hide();
			} else if($(this).val() == 'BITS Per Tone'){
				$('div#bits_per_tone').show();
				$('div#disabled, div#port_mirror, div#physical_layer_debug, div#processor_log').hide();
			} else if($(this).val() == 'Physical Layer Debug'){
				$('div#physical_layer_debug').show();
				$('div#disabled, div#port_mirror, div#bits_per_tone, div#processor_log').hide();
			} else if($(this).val() == 'Processor Log'){
				$('div#processor_log').show();
				$('div#disabled, div#port_mirror, div#bits_per_tone, div#physical_layer_debug').hide();
			} 
		}).change();
	}
	//end supportconsole_toolbox

	//start supportconsole_wanvlans
	if($('#supportconsole_wanvlans').length > 0){ // check to see if the body has the correct ID
			// Waiting for client feedback 
	}
	//end supportconsole_wanvlans

	//start advancedsetup_firewall_usernew
	if($('body').attr('id') == 'advancedsetup_firewall_usernew'){ // check to see if the body has the correct ID
		$('select#port_quantity').change(function(){
			for(i=$('.port_fields').length; i > 0; i--){
				if(i > parseInt($(this).val())*2){
					$('.port_fields:eq(' + (i-1) + ')').hide();
				} else{
					$('.port_fields:eq(' + (i-1) + ')').show();
				}
			}
		}).change();
	}
	//end advancedsetup_firewall_usernew

	//start login	
	$('body#login input#show_password').click(function(){
		if($(this).is(':checked')){
			//change PIN fields from password to text
			$('input#admin_password').replaceWith('<input type="text" name="admin_password" id="admin_password" size="30" value="'+$('input#admin_password').val()+'" />');
			$('input#admin_password2').replaceWith('<input type="text" name="admin_password2" id="admin_password2" size="30" value="'+$('input#admin_password2').val()+'" />');
			$('input#admin_password2').closest('tr').hide();
		} else {
			//change PIN fields from text to password
			$('input#admin_password').replaceWith('<input type="password" name="admin_password" id="admin_password" size="30" value="'+$('input#admin_password').val()+'" />');
			$('input#admin_password2').replaceWith('<input type="password" name="admin_password2" id="admin_password2" size="30" value="'+$('input#admin_password2').val()+'" />');
			$('input#admin_password2').closest('tr').show();
		}
	});
	//end login	


	//*** activity log button functions
	$('#webActivityLog_state_wrapper a.toggle-button').click(function(){
		if($('span.toggle-button-label').text() == 'Click the button to disable the Web Activity Log.'){
            webLogEnable(0);
			$('span.toggle-button-label').text('Click the button to enable the Web Activity Log.');
			$(this).children('img').attr({
				'src' : '../_images/h_wirelesssetup_wpsenable.png',
				'alt' : 'Click the button to disable WPS in the modem.'		
			});
//			$(this).parent().nextAll('.stepWrapper').hide();
//			webLogEnable(0);
		} else {
            webLogEnable(1);
			$('span.toggle-button-label').text('Click the button to disable the Web Activity Log.');
			$(this).children('img').attr({
				'src' : '../_images/h_wirelesssetup_wpsdisable.png',
				'alt' : 'Click the button to enable the Web Activity Log.'
			});
//			$(this).parent().nextAll('.stepWrapper').show();
//			webLogEnable(1);
		}
	});
	
	$('#systemLog_state_wrapper a.toggle-button').click(function(){
		if($('span.toggle-button-label').text() == 'Click the button to enable the System Log.'){
			$('span.toggle-button-label').text('Click the button to disable the System Log.');
			$(this).children('img').attr({
				'src' : '../_images/h_wirelesssetup_wpsdisable.png',
				'alt' : 'Click the button to enable the System Log.'
			});
			$(this).parent().nextAll('.stepWrapper').show();
		} else {
			$('span.toggle-button-label').text('Click the button to enable the System Log.');
			$(this).children('img').attr({
				'src' : '../_images/h_wirelesssetup_wpsenable.png',
				'alt' : 'Click the button to disable WPS in the modem.'		
			});
			$(this).parent().nextAll('.stepWrapper').hide();
		}
	});
//***
	
  /** append ZyXEL logo **/
  $('#content_right').append('<div><a href="http://us.zyxel.com" target="_blank"><img src="../_images/zyxel_enabled.png" width="79" height="30" style="float:right;" /></a></div>');
	
//END jQuery function	
});

/***** Light Box Functions *****/
function lb_hide(){
	document.getElementById('light').style.display='none';document.getElementById('fade').style.display='none';
}

function lb_show(){
	document.getElementById('light').style.display='block';document.getElementById('fade').style.display='block'
}

/* Depreciated functions from advancedsetup_wanipaddress
	$('#wanipaddress_step_3 #dynamic_ip').click(function(){
		$('#vip_mode').attr('checked', false);
		$('#single_static_ip').attr('disabled', true);
		$('#gateway_address').attr('disabled', true);		
		$('#subnet_mask').attr('disabled', true);
		$('#vip_mode').attr('disabled', true);
		$('#single_static_ip').parent().parent().addClass('greyed_out');
		$('#subnet_mask').parent().parent().addClass('greyed_out');
		$('#gateway_address').parent().parent().addClass('greyed_out');
		$('#vip_mode').parent().parent().addClass('greyed_out');
	});
	$('#wanipaddress_step_3 #static_ip').click(function(){
		$('.greyed_out').removeClass('greyed_out');
		$('#vip_mode').attr('checked', false);
		$('#single_static_ip').attr('disabled', false);
		$('#gateway_address').attr('disabled', true);		
		$('#subnet_mask').attr('disabled', true);
		$('#vip_mode').attr('disabled', true);
		$('#vip_mode').parent().parent().removeClass('greyed_out');
		$('#subnet_mask').parent().parent().addClass('greyed_out');
		$('#vip_mode').parent().parent().addClass('greyed_out');
	});
	$('#wanipaddress_step_3 #block_static_ip').click(function(){
		$('.greyed_out').removeClass('greyed_out');
		$('#vip_mode').attr('checked', true);
		$('#single_static_ip').attr('disabled', false);
		$('#gateway_address').attr('disabled', false);
		$('#subnet_mask').attr('disabled', false);
		$('#vip_mode').attr('disabled', false);
	});
*/

function WriteWlanSetupMenuHeader(id)
{
   var b_id='', sec_id='', r_id='', ssid_id='', m_id='', wps_id='', wmm_id='', wds_id='', sch_id='', w8021x_id='';

   switch (id){
      case 'wlBasicSetting': b_id = "class=\"selected\""; break;
      case 'wlSecurity': sec_id = "class=\"selected\""; break;
      case 'wlRadioSetting': r_id = "class=\"selected\""; break;
      case 'wlSsidSetting': ssid_id = "class=\"selected\""; break;
      case 'wlMacAuth': m_id = "class=\"selected2\""; break;
      case 'wlWps': wps_id = "class=\"selected\""; break;
      case 'wlWmm': wmm_id = "class=\"selected\""; break;
      case 'wlWds': wds_id = "class=\"selected\""; break;
      case 'wlSchedule': sch_id = "class=\"selected\""; break;
      case 'wl8021x': w8021x_id = "class=\"selected\""; break;
   }
   document.writeln("<li><a href=\"wlansetup.html?pageAct=wlBasicSetting&wlSsidIdx=0\" " + b_id + ">Basic Settings</a></li>");
   document.writeln("<li><a href=\"wlansetup.html?pageAct=wlSecurity&wlSsidIdx=0\" " + sec_id + ">Wireless Security</a></li>");
   document.writeln("<li><a href=\"wlansetup.html?pageAct=wlRadioSetting\" " + r_id + ">Radio Setup</a></li>");
   document.writeln("<li><a href=\"wlansetup.html?pageAct=wlSsidSetting&wlSsidIdx=0\" " + ssid_id + ">SSID Setup</a></li>");
   document.writeln("<li><a href=\"wlansetup.html?pageAct=wlMacAuth&wlSsidIdx=0\" " + m_id + " id=\"double\">MAC Authentication</a></li>");
   document.writeln("<li><a href=\"wlansetup.html?pageAct=wlWps\" " + wps_id + ">WPS</a></li>");
   document.writeln("<li><a href=\"wlansetup.html?pageAct=wlWmm\" " + wmm_id + ">WMM</a></li>");
   document.writeln("<li><a href=\"wlansetup.html?pageAct=wlWds\" " + wds_id + ">WDS</a></li>");
   document.writeln("<li><a href=\"wlansetup.html?pageAct=wlSchedule\" " + sch_id + ">Wireless Schedule</a></li>");
   document.writeln("<li><a href=\"wlansetup.html?pageAct=wl8021x&wlSsidIdx=0\" " + w8021x_id + ">802.1x</a></li>");
}

function WriteWirelessMenuHeader(id, isWifi5GSupport, qtnExist)
{
   var basic_id='', security_id='', radio_id='', ssid_id='', mac_id='', wps_id='', wmm_id='', wds_id='', schedule_id='', security8021X_id='', wireless5g_id='', wps5g_id='', basic5g_id='',ssid5g_id='', mac5g_id='' ;
   var is5g = 0;
   if(id.match('5g')!=null)
   	is5g = 1;
   
   switch (id){
      case 'basic': basic_id = "class=\"selected\""; break;
      case 'security': security_id = "class=\"selected\""; break;
      case 'radio': radio_id = "class=\"selected\""; break;
      case 'ssid': ssid_id = "class=\"selected\""; break;
      case 'mac': mac_id = "class=\"selected2\""; break;
      case 'wps': wps_id = "class=\"selected\""; break;
      case 'wmm': wmm_id = "class=\"selected\""; break;
      case 'wds': wds_id = "class=\"selected\""; break;
      case 'schedule': schedule_id = "class=\"selected2\""; break;
      case 'security8021X': security8021X_id = "class=\"selected\""; break;
      case 'wireless5g': wireless5g_id = "class=\"selected\""; break;
      case 'wps5g': wps5g_id = "class=\"selected\""; break;
      case 'basic5g': basic5g_id = "class=\"selected\""; break;
      case 'ssid5g': ssid5g_id = "class=\"selected\""; break;
      case 'mac5g': mac5g_id = "class=\"selected2\""; break;
	  
   }

   if((isWifi5GSupport == '1') && qtnExist && (is5g == 0)){
      document.writeln("<div align=\"center\"><a class=\"btn-wl apply_btn\" a href=\"wirelesssetup_basicsettings.html\"' " + basic_id + ">2.4GHz</a><a class=\"btn-wl2 apply_btn\" a href=\"wirelesssetup_basicsettings5g.html\"' " + basic5g_id + ">&nbsp;5GHz&nbsp;</a></div><br>");
   }

   if(is5g == 0)
   {
      document.writeln("<li><a href=\"wirelesssetup_basicsettings.html\" " + basic_id + ">Basic Settings</a></li>");
      document.writeln("<li><a href=\"wirelesssetup_wirelesssecurity_refresh.wl?wlSsidIdx=0\" " + security_id + ">Wireless Security</a></li>");
      document.writeln("<li><a href=\"wirelesssetup_radiosetup.html\" " + radio_id + ">Radio Setup</a></li>");
      document.writeln("<li><a href=\"wirelesssetup_ssidsetup_refresh.wl?wlSsidIdx=0\" " + ssid_id + ">SSID Setup</a></li>");
      document.writeln("<li><a href=\"wlmacfilteraction.cmd?action=refreshApply\" " + mac_id + " id=\"double\">MAC Authentication</a></li>");
      document.writeln("<li><a href=\"wirelesssetup_wps.html\" " + wps_id + ">WPS</a></li>");   
      document.writeln("<li><a href=\"wirelesssetup_wmm.html\"  " + wmm_id + " id=\"double\">WMM</a></li>");
      document.writeln("<li><a href=\"wirelesssetup_wds.html\"  " + wds_id + " >WDS</a></li>");   
      document.writeln("<li><a href=\"wirelesssetup_wirelessaccessschedule.html\" " + schedule_id + " id=\"double\">Wireless Schedule</a></li>");
      document.writeln("<li><a href=\"wirelesssetup_8021x_refresh.wl?wlSsidIdx=0\" " + security8021X_id + ">802.1x</a></li>");
   }
   else if((isWifi5GSupport == '1') && (qtnExist == 1) && (is5g == 1))
   {
      document.writeln("<div align=\"center\"><a class=\"btn-wl2 apply_btn\" a href=\"wirelesssetup_basicsettings.html\"' " + basic_id + ">2.4GHz</a><a class=\"btn-wl apply_btn\" a href=\"wirelesssetup_basicsettings5g.html\"' " + basic5g_id + ">&nbsp;5GHz&nbsp;</a></div><br>");
      document.writeln("<li><a href=\"wirelesssetup_basicsettings5g.html\" " + basic5g_id + ">Basic Settings</a></li>");
      document.writeln("<li><a href=\"wirelesssetup_wireless5g.html\" " + wireless5g_id+ ">Wireless Security</a></li>");
      document.writeln("<li><a href=\"wirelesssetup_ssidsetup5g.html\" " + ssid5g_id+ ">SSID Setup</a></li>");
      document.writeln("<li><a href=\"wl5gmacfilteraction.cmd?action=refreshApply\" " + mac5g_id + " id=\"double\">MAC Authentication</a></li>");      
      document.writeln("<li><a href=\"wirelesssetup_wps5g.html\" " + wps5g_id+ ">WPS</a></li>");
   }
}

function WriteUtilitiesMenuHeader(id, isHpnaSupport)
{
   var reboot_id='', restore_id='', u_id='', p_id='', trace_id='', s_id='', c_id='', h_id='', w_id='', log_id='', time_id='',dianos_id='';

   switch (id){
      case 'reboot': reboot_id = "class=\"selected\""; break;
      case 'restoredefaultsettings': restore_id = "class=\"selected\""; break;
      case 'upgradefirmware': u_id = "class=\"selected\""; break;
      case 'pingtest': p_id = "class=\"selected\""; break;
      case 'traceroute': trace_id = "class=\"selected\""; break;
      case 'speedtest': s_id = "class=\"selected\""; break;
      case 'configurationsave': c_id = "class=\"selected2\""; break;
      case 'diagnostictest': dianos_id = "class=\"selected\""; break;
      case 'hpnatest': h_id = "class=\"selected\""; break;
      case 'webactivitylog': w_id = "class=\"selected\""; break;
      case 'systemlog': log_id = "class=\"selected\""; break;
      case 'timezone': time_id = "class=\"selected\""; break;
   }
   document.writeln("<li><a href=\"utilities_reboot.html\" " + reboot_id + ">Reboot</a></li>");
   document.writeln("<li><a href=\"utilities_restoredefaultsettings.html\" " + restore_id + ">Restore Defaults</a></li>");
   document.writeln("<li><a href=\"utilities_upgradefirmware.html\" " + u_id + ">Upgrade Firmware </a></li>");
   document.writeln("<li><a href=\"utilities_pingtest.html\" " + p_id + ">Ping Test</a></li>");
   document.writeln("<li><a href=\"utilities_traceroute.html\" " + trace_id + ">Traceroute</a></li>");
//   document.writeln("<li><a href=\"_html_/utilities_speedtest.html\" " + s_id + ">Speed Test</a></li>");
   document.writeln("<li><a href=\"utilities_configurationsave.html\"  " + c_id + " id=\"double\">Configuration Save</a></li>");
   document.writeln("<li><a href=\"utilities_diagnostictest.html\"  " + dianos_id + " id=\"double\">Diagnostic Test</a></li>");
   //document.writeln("<li><a href=\"utilities_hpnatest.html\">HPNA Test</a></li>");
   if(isHpnaSupport == '1') {
      document.writeln("<li><a href=\"utilities_hpnatest.html\" " + h_id + ">HPNA Test </a></li>");
   }
   document.writeln("<li><a href=\"utilities_webactivitylog.html\" " + w_id + ">Web Activity Log</a></li>");
   document.writeln("<li><a href=\"utilities_systemlog.html\" " + log_id + ">System Log</a></li>");
   document.writeln("<li><a href=\"utilities_timezone.html\" " + time_id + ">Time Zone </a></li>");
}

function WriteAdvancedSetupMenuHeader(id)
{
   var servicesblocking_id='', accessscheduler_id='', websiteblocking_id='', broadbandsettings_id='',
       dhcpsettings_id='', IPv6lansettings_id='', dhcpreservation_id='', wanipaddress_id='', IPv6wansettings_id='',
       dnshostmapping_id='', dynamicdns_id='', VLAN_id='', qos_id='', remotegui_id='', remotetelnet_id='',
       dynamicrouting_id='', staticrouting_id='', admin_id='', applications_id='', advancedportforwarding_id='',
       dmzhosting_id='', ipv4firewall_id='', ipv6firewall_id='', IPSec_id='', nat_id='', upnp_id='';
   var block_mainId = '', ipAddr_mainId = '', remote_mainId = '', routing_mainId = '', security_mainId = '', sipalg_id;
//__MSTC__, Loujia 0813 Integrate WAN Page
   var wan_settings = '', lan_settings = '';
//__MSTC__, Loujia 0813 Integrate WAN Page
//__MSTC__, Loujia 0904 add Lan subnet page S_
   var lansubnet_id='';
//__MSTC__, Loujia 0904 add Lan subnet page E_
   switch (id){
      case 'servicesblocking': servicesblocking_id = block_mainId = "class=\"selected\""; break;
      case 'accessscheduler': accessscheduler_id = block_mainId = "class=\"selected\""; break;
      case 'websiteblocking': websiteblocking_id = block_mainId = "class=\"selected\""; break;
      case 'broadbandsettings': broadbandsettings_id = "class=\"selected2\""; break;

	  case 'wanipaddress': wanipaddress_id = wan_settings = "class=\"selected\""; break;
      case 'IPv6wansettings': IPv6wansettings_id = wan_settings = "class=\"selected\""; break;
	  case 'dynamicdns': dynamicdns_id = wan_settings = "class=\"selected\""; break;
	  
      case 'dhcpsettings': dhcpsettings_id = lan_settings = "class=\"selected\""; break;
      case 'IPv6lansettings': IPv6lansettings_id = lan_settings = "class=\"selected\""; break;
      case 'dhcpreservation': dhcpreservation_id = lan_settings = "class=\"selected\""; break;
      case 'dnshostmapping': dnshostmapping_id  = lan_settings= "class=\"selected\""; break;
//__MSTC__, Loujia 0904 add Lan subnet page S_
	  case 'lansubnet': lansubnet_id  = lan_settings= "class=\"selected\""; break;	
//__MSTC__, Loujia 0904 add Lan subnet page E_
      case 'VLAN': VLAN_id = lan_settings = "class=\"selected\""; break;
      case 'qos': qos_id = "class=\"selected\""; break;
      case 'remotegui': remotegui_id = "class=\"selected\""; remote_mainId = "class=\"selected2\""; break;
      case 'remotetelnet': remotetelnet_id = "class=\"selected\""; ; remote_mainId = "class=\"selected2\""; break;
      case 'dynamicrouting': dynamicrouting_id = routing_mainId = "class=\"selected\""; break;
      case 'staticrouting': staticrouting_id = routing_mainId = "class=\"selected\""; break;
      case 'admin': admin_id = security_mainId = "class=\"selected\""; break;
      case 'applications': applications_id = security_mainId = "class=\"selected\""; break;
      case 'advancedportforwarding': advancedportforwarding_id = security_mainId = "class=\"selected\""; break;
      case 'dmzhosting': dmzhosting_id = security_mainId = "class=\"selected\""; break;
      case 'ipv4firewall': ipv4firewall_id = security_mainId = "class=\"selected\""; break;
      case 'ipv6firewall': ipv6firewall_id = security_mainId = "class=\"selected\""; break;
      case 'IPSec': IPSec_id = security_mainId = "class=\"selected\""; break;
      case 'nat': nat_id = security_mainId = "class=\"selected\""; break;
      case 'upnp': upnp_id = security_mainId = "class=\"selected\""; break;
      case 'sipalg': sipalg_id = security_mainId = "class=\"selected\""; break;
   }
   document.writeln("<li><a href=\"advancedsetup_servicesblocking.html\" " + block_mainId + ">Blocking/Filtering</a>");
   document.writeln("  <ul>");
   document.writeln("    <li><a href=\"advancedsetup_accessscheduler.html\" " + accessscheduler_id + ">Access Scheduler</a></li>");
   document.writeln("    <li><a href=\"advancedsetup_servicesblocking.html\" " + servicesblocking_id + ">Service Blocking</a></li>");
   document.writeln("    <li><a href=\"advancedsetup_websiteblocking.html\" " + websiteblocking_id + ">Website Blocking</a></li>");
   document.writeln("  </ul>");
   document.writeln("</li>");
   document.writeln("<li><a href=\"advancedsetup_broadbandsettings.html\" " + broadbandsettings_id + " id=\"double\">Broadband Settings </a></li>");

   document.writeln("<li><a href=\"advancedsetup_wanipaddress.html\" " + wan_settings + ">WAN Settings</a>");
   document.writeln("  <ul>");
   document.writeln("    <li><a href=\"advancedsetup_wanipaddress.html\" " + wanipaddress_id + ">WAN Settings</a></li>");
   //document.writeln("    <li><a href=\"advancedsetup_wanipv6address.html\" " + IPv6wansettings_id + ">IPv6 WAN Settings</a></li>");
   document.writeln("    <li><a href=\"advancedsetup_dynamicdns.html\" " + dynamicdns_id + ">Dynamic DNS</a></li>");
   document.writeln("  </ul>");
   document.writeln("</li>");

   document.writeln("<li><a href=\"advancedsetup_dhcpsettings.html\" " + lan_settings + ">LAN Settings </a>");
   document.writeln("  <ul>");
   document.writeln("    <li><a href=\"advancedsetup_dhcpsettings.html\" " + dhcpsettings_id + ">DHCP Settings</a></li>");
   //document.writeln("    <li><a href=\"advancedsetup_ipv6lansettings.html\" " + IPv6lansettings_id + ">IPv6 LAN Settings</a></li>");
   document.writeln("    <li><a href=\"advancedsetup_dhcpreservation.html\" " + dhcpreservation_id + ">DHCP Reservation</a></li>");
   document.writeln("    <li><a href=\"advancedsetup_dnshostmapping.html\" " + dnshostmapping_id + ">DNS Host Mapping</a></li>");
//__MSTC__, Loujia 0904 add Lan subnet page S_
   document.writeln("    <li><a href=\"advancedsetup_lansubnet.html\" " + lansubnet_id + ">LAN Subnets</a></li>");	
//__MSTC__, Loujia 0904 add Lan subnet page E_
   //document.writeln("    <li><a href=\"_html/advancedsetup_VLAN.html\" " + VLAN_id + ">VLAN</a></li>");
   document.writeln("  </ul>");
   document.writeln("</li>");
   document.writeln("<li><a href=\"advancedsetup_qos.html\" " + qos_id + ">QoS</a></li>");
   document.writeln("<li><a href=\"advancedsetup_remotegui.html\" " + remote_mainId + " id=\"double\">Remote Management </a>");
   document.writeln("  <ul>");
   document.writeln("    <li><a href=\"advancedsetup_remotegui.html\" " + remotegui_id + ">Remote GUI</a></li>");
   document.writeln("    <li><a href=\"advancedsetup_remotetelnet.html\" " + remotetelnet_id + ">Remote Console </a></li>");
   document.writeln("  </ul>");
   document.writeln("</li>");
   document.writeln("<li><a href=\"advancedsetup_dynamicrouting.html\" " + routing_mainId + ">Routing</a>");
   document.writeln("  <ul>");
   document.writeln("    <li><a href=\"advancedsetup_dynamicrouting.html\" " + dynamicrouting_id + ">Dynamic Routing</a></li>");
   document.writeln("    <li><a href=\"advancedsetup_staticrouting.html\" " + staticrouting_id + ">Static Routing</a></li>");
   document.writeln("  </ul>");
   document.writeln("</li>");
   document.writeln("<li><a href=\"advancedsetup_admin.html\" " + security_mainId + ">Security</a>");
   document.writeln("  <ul>");
   document.writeln("    <li><a href=\"advancedsetup_admin.html\" style=\"white-space:nowrap;overflow:hidden;word-break:keep-all;\"" + admin_id + ">Administrator Password</a></li>");
   document.writeln("    <li><a href=\"advancedsetup_applications.html\" style=\"white-space:nowrap;overflow:hidden;word-break:keep-all;\"" + applications_id + ">Application Forwarding</a></li>");
   document.writeln("    <li><a href=\"advancedsetup_advancedportforwarding.html\" " + advancedportforwarding_id + ">Port Forwarding </a></li>");
   document.writeln("    <li><a href=\"advancedsetup_dmzhosting.html\" " + dmzhosting_id + ">DMZ Hosting</a></li>");
   document.writeln("    <li><a href=\"advancedsetup_ipv4firewall.cgi\" " + ipv4firewall_id + ">IPv4 Firewall</a></li>");
   //document.writeln("    <li><a href=\"advancedsetup_ipv4firewall.html\" " + ipv4firewall_id + ">IPv4 Firewall</a></li>");
   document.writeln("    <li><a href=\"advancedsetup_ipv6firewall.html\" " + ipv6firewall_id + ">IPv6 Firewall</a></li>");
   //document.writeln("    <li><a href=\"_html/advancedsetup_IPSec.html\" " + IPSec_id + ">IPSec</a></li>");
   document.writeln("    <li><a href=\"advancedsetup_nat.html\" " + nat_id + ">NAT</a></li>");
   document.writeln("    <li><a href=\"advancedsetup_upnp.html\" " + upnp_id + ">UPnP</a></li>");
   document.writeln("    <li><a href=\"advancedsetup_sipalg.html\" " + sipalg_id + ">SIP ALG</a></li>");
   document.writeln("  </ul>");
   document.writeln("</li>");
}

function WriteSupportConsoleMenuHeader(id, isWifi5GSupport, isVoiceSupport)
{
   var wanVlan_id='', vlanstaticroutes_id='', tr069_id='', imagehistory_id='', upgradeimage_id='', igmp_id='',
       oampingtest_id='', dnscache_id='', toolbox_id='', smartled_id='', modemoverview_id='',
       wlan5g_basic_id='', wlan5g_wps_id='', wlan5g_devicetable_id='', wlan5g_radio_id='', wlan5g_linkstatus_id='', wlan5g_security_id ='',
		 voip_basic_id='', voip_line1_id='', voip_line2_id='', voip_sipclient_id='', voip_diag_id='';
   
   switch (id){
      case 'wanvlans': wanVlan_id = "class=\"selected\""; break;
      case 'vlanstaticroutes': vlanstaticroutes_id = "class=\"selected2\""; break;
      case 'tr069': tr069_id = "class=\"selected\""; break;
      case 'imagehistory': imagehistory_id = "class=\"selected\""; break;
      case 'upgradeimage': upgradeimage_id = "class=\"selected\""; break;
      case 'igmp': igmp_id = "class=\"selected\""; break;
      case 'oampingtest': oampingtest_id = "class=\"selected\""; break;
      case 'dnscache': dnscache_id = "class=\"selected\""; break;
      case 'toolbox': toolbox_id = "class=\"selected\""; break;
      case 'smartled': smartled_id = "class=\"selected\""; break;
      case 'modemoverview': modemoverview_id = "class=\"selected\""; break;
      case '5gbasic': wlan5g_basic_id = "class=\"selected\"";break;
      case '5gsecurity': wlan5g_security_id = "class=\"selected\"";break;
      case '5gwps': wlan5g_wps_id = "class=\"selected\"";break;
      case '5gdevicetable': wlan5g_devicetable_id = "class=\"selected\"";break;
      case '5gradio': wlan5g_radio_id = "class=\"selected\"";break;
      case '5glinkstatus': wlan5g_linkstatus_id = "class=\"selected\"";break;
      case 'voipbasic': voip_basic_id = "class=\"selected\"";break;
      case 'voipline1': voip_line1_id = "class=\"selected\"";break;
      case 'voipline2': voip_line2_id = "class=\"selected\"";break;
      case 'voipsipclient': voip_sipclient_id = "class=\"selected\"";break;
      case 'voipdiag': voip_diag_id = "class=\"selected\"";break;
   }
   document.writeln("<li><a href=\"supportconsole_wanvlans.html\" " + wanVlan_id + ">WAN VLANs</a></li>");
   document.writeln("<li><a href=\"supportconsole_vlanstaticroutes.html\"  " + vlanstaticroutes_id + " id=\"double\">VLAN Static Routes</a></li>");
   document.writeln("<li><a href=\"supportconsole_tr069.html\" " + tr069_id + ">TR-069</a></li>");
   document.writeln("<li><a href=\"supportconsole_imagehistory.html\" " + imagehistory_id + ">Upgrade History</a></li>");
   document.writeln("<li><a href=\"supportconsole_upgradeimage.html\" " + upgradeimage_id + ">Upgrade Image</a></li>");
   document.writeln("<li><a href=\"supportconsole_igmp.html\" " + igmp_id + ">IGMP</a></li>");
   document.writeln("<li><a href=\"supportconsole_oampingtest.html\" " + oampingtest_id + ">OAM Ping Test</a></li>");
   document.writeln("<li><a href=\"supportconsole_dnscache.html\" " + dnscache_id + ">DNS Cache</a> </li>");
   document.writeln("<li><a href=\"supportconsole_toolbox.html\" " + toolbox_id + ">Tool Box</a> </li>");
   document.writeln("<li><a href=\"supportconsole_smartled.html\" " + smartled_id + ">Smart LED</a> </li>");
   document.writeln("<li><a href=\"supportconsole_modemoverview.html\" " + modemoverview_id + ">Modem Overview</a> </li>");
   if(isWifi5GSupport == '1') {
      document.writeln("<li><a href=\"supportconsole_5G_basicsettings.html\" " + wlan5g_basic_id + ">5G Prism Settings</a>");
      document.writeln("  <ul>");
      document.writeln("    <li><a href=\"supportconsole_5G_basicsettings.html\" " + wlan5g_basic_id + ">5G Basic Settings</a></li>");
      document.writeln("    <li><a href=\"supportconsole_5G_wireless5g.html\" " + wlan5g_security_id + ">5G Wireless Security</a></li>");
      document.writeln("    <li><a href=\"supportconsole_5G_devicetable.html\" " + wlan5g_devicetable_id + ">5G Prism STB List</a></li>");
      document.writeln("    <li><a href=\"supportconsole_5G_wps.html\" " + wlan5g_wps_id + ">5G Prism WPS</a></li>");
      document.writeln("    <li><a href=\"supportconsole_5G_radiosettings.html\" " + wlan5g_radio_id + ">5G Radio Settings</a></li>");
      document.writeln("    <li><a href=\"supportconsole_5G_prismlinkstatus.html\" " + wlan5g_linkstatus_id + ">5G Prism Link Status</a></li>");
      document.writeln("  </ul>");
   }
   if(isVoiceSupport == '1') {
      document.writeln("<li><a href=\"supportconsole_voip_basicsettings.html\" " + voip_basic_id + ">VoIP Settings</a>");
      document.writeln("  <ul>");
      document.writeln("    <li><a href=\"supportconsole_voip_basicsettings.html\" " + voip_basic_id + ">Basic VoIP Settings</a></li>");
      document.writeln("    <li><a href=\"supportconsole_voip_line1features.html\" " + voip_line1_id + ">Line 1 Features</a></li>");
      document.writeln("    <li><a href=\"supportconsole_voip_line2features.html\" " + voip_line2_id + ">Line 2 Features</a></li>");
      document.writeln("    <li><a href=\"supportconsole_voip_sipclient.html\" " + voip_sipclient_id + ">SIP Client</a></li>");
      document.writeln("    <li><a href=\"supportconsole_voip_diagnostics.html\" " + voip_diag_id + ">Diagnostics</a></li>");
      document.writeln("  </ul>");
      document.writeln("</li>");
   }
}

function isPwdSpecialChar(val)
{
   var len     = val.length;
   var i       = 0;
   var newStr  = "";
   var original = val;

   for ( i = 0; i < len; i++ ) {
      if ( val.substring(i,i+1).charCodeAt(0) < 255 ) {
         // hack to eliminate the rest of unicode from this
         if (isUnsafePassword(val.substring(i,i+1)) == true)
            {
               AlertOpen("hay!!!");
               return true;
            }
      } else {
         // woopsie! restore.
         AlertOpen ("Found a non-ISO-8859-1 character at position: " + (i+1) + ",\nPlease eliminate before continuing.");
         i = len;
         return true;
      }
   }
   return false;
}
