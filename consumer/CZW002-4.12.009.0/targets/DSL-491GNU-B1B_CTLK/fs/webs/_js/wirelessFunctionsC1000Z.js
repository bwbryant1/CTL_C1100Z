function authModeDisplay(mode,isWepEnable,keyBit) {
/* input parameters :
var authMode = '<%ejGetWl(wlAuthMode)%>';
var wep = '<%ejGetWl(wlWep)%>'; 
var keyBit = '<%ejGetWl(wlKeyBit)%>'; 

description:
 use parseInt() to get the prefix integer
*/
	  var authMode = mode;
	  var authModeValue ="0" ;
/* 0--Security Off
   1.2.3.4.5 -- WEP/Pre-SharedKey/
   6.7--802.1x
   8.9.10Radius */
//alert("authMode--"+authMode);
      switch ( authMode ) {
		  case 'open':	
		  case 'shared':	
	    	if(isWepEnable== "disabled"){
				authModeValue = "0Security Off";
			}else if (isWepEnable== "enabled"){
				if (keyBit==1) authModeValue = "1WEP-64 Bit";
				else if (keyBit==0) authModeValue = "2WEP-128 Bits";
			}
			 break;			 
		  case 'psk':
			 authModeValue = "3WPA-Personal";
			 break;		
		  case 'psk2':
			 authModeValue = "4WPA2-Personal";
			 break;			 
		  case 'psk psk2':
			 authModeValue = "5WPA - WPA2 Personal";
			 break;				  			 
//		  case 'wep':
//			authModeValue = "WEP";
//			 break;	
		  case 'radius': //isWepEnable== "enabled" 
				if (keyBit==1) authModeValue = "6WEP-64 Bit + 802.1x";
				if (keyBit==0) authModeValue = "7WEP-128 Bit + 802.1x";
			 break;
		  case 'wpa':
			 authModeValue = "8WPA Enterprise";
			 break;
		  case 'wpa2':
			authModeValue = "9WPA2 Enterprise";
			break;
		  case 'wpa wpa2':
			authModeValue = "10WPA/WPA2 Enterprise";
			break;		  
      }
	return authModeValue;
}


function cutPrefixIntToGetStr(str){
	var i = parseInt(str,10);
	if (i>=10){ // prefix int value is 2 digits.
		return str.substr(2,str.length);

	}else{
		return str.substr(1,str.length);
	}
}

function is8021xEnabled(mode,isWepEnable,keyBit){
	 var mode = parseInt(authModeDisplay(mode,isWepEnable,keyBit));
	 switch (mode){
	 	case 6:case 7:case 8:case 9:case 10:
	 		return 1;
	 	default:
	 		return 0;	 
	 }
}

function getWirelessMode(nmode,nreqd,gmode,brate){
/* nmode: auto/off
   nreqd: 0/1
   gmode: 0(b)/4(g)/1(auto)/5
   brate: default/all/12/wifi2
*/
/*
802.11b , 802.11g, and 802.11n
802.11g and 802.11n 
802.11n
802.11b and 802.11g 
802.11g
802.11b
*/
	var varValue='';
	if (nmode=="auto"){
		if(nreqd=="0"){// b/g/n
			if(brate=='wifi2' || brate=='all'){ //check default
				varValue='802.11g or 802.11n';
			}else{
				varValue='802.11b - 802.11g - 802.11n Mode';
			}
		}else{ //n
			varValue='802.11n Only';
		}
	}else{
		if(gmode=="0"){
			varValue='802.11b Only';
		} 
		else if(gmode=="4"){
			if(brate=='wifi2' || brate=='all'){ //check default
				varValue='802.11g Only';		
			}else{
				varValue='802.11b Only';					
			}
		}
		else if(gmode=="1"){
			if(brate=='wifi2')
				varValue='802.11g Only';					
			else
				varValue='802.11b or 802.11g';		
		}	
	}
	return varValue;
}

function submitFrm(pagepara){
	var page_array = pagepara.split('?');
	var page='';
	var para_array='';
	
	if(page_array.length<2){
		page=page_array[0];
		para_array = '';
	}else {
		page=page_array[0];	
		para_array = page_array[1].split('&');		
	}

	var postForm = document.createElement("form");
	postForm.setAttribute("method", "post");
    postForm.setAttribute("action", page);
  
	var i=0;
	for(i=0;i<para_array.length;i++){
		hash_array=para_array[i].split('=');
		//__Qwest__, Ling-Chun, support special characters for the custom Preshared Key										
		if(hash_array[0]=='wlWpaPsk'){
				hash_array[1]=decodeUrlPSK(hash_array[1]);
		}else if(hash_array[0]=='wlSsid' ){ 
				hash_array[1]=decodeUrlPSK(hash_array[1]);		
		}
		
		var hiddenField = document.createElement("input");
		hiddenField.setAttribute("name", hash_array[0]);		
		if(hash_array.length<2)
			hiddenField.setAttribute("value", "");
		else{
			hiddenField.setAttribute("value", hash_array[1]);
		}
		hiddenField.setAttribute("type", "hidden");
		postForm.appendChild(hiddenField);
	}
	document.body.appendChild(postForm);
	postForm.submit();
}

//__Qwest__, Ling-Chun, support special characters for the custom Preshared Key										
var unsafeStringPSK = "&?=%";
function isUnsafePSK(compareChar)
{
   if ( unsafeStringPSK.indexOf(compareChar) == -1)
      return false; // found no unsafe chars, return false
   else
      return true;
}
function encodeUrlPSK(val)
{
   var len     = val.length;
   var i       = 0;
   var newStr  = "";
   var original = val;

   for ( i = 0; i < len; i++ ) {
      if ( val.substring(i,i+1).charCodeAt(0) < 255 ) {
         // hack to eliminate the rest of unicode from this
         if (isUnsafePSK(val.substring(i,i+1)) == false)
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
function decodeUrlPSK(val)
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

function wpsEnable(status,ssidIdx,wpsManullyDisable,WscAPMode){ // can operate only SSID1
	var tmp='';
	if(ssidIdx!=0)return tmp;
	if(status){
		if(wpsManullyDisable!=1){
		// If WPA, WPA2, WPA or WPA2 is selected, WPS will be automatically enabled when automatically disabled.
			tmp += "&wl_wsc_mode=enabled";
			tmp += "&wl_wsc_reg=enabled";
			//tmp += "&wsc_config_state="+parseInt(WscAPMode);	
		}	
	}else{
		tmp += "&wl_wsc_mode=disabled";
	}
	return tmp;
}


function handleEnter (field, event) {
		var keyCode = event.keyCode ? event.keyCode : event.which ? event.which : event.charCode;
		if (keyCode == 13) {
			return false;
		} 
		else
		return true;
}      


//var invalidString = "/ ;[]<>&'\"";  /*  / ;[]<>&'"  */    
var invalidString = ", $";  /*  / ;[]<>&'"  */    

function clearInvalidSSID(id){
	var str = document.getElementById(id).value;
	var newStr="";
	var i=0;
	var c;
	
	for ( i = 0; i < str.length ; i++ ){
		c = str.toLowerCase().charAt(i);
	 	if((c >= 'a' && c <= 'z') || (c >= '0' && c<= '9') || '-' == c  || '_' == c || '.' == c || '!' == c 
			|| '\"' == c || '#' == c || '$' == c || '%' == c || '&' == c || '\'' == c || '(' == c || ')' == c 
			|| '*' == c || '+' == c || ',' == c || '/' == c || ':' == c || ';' == c || '<' == c || '=' == c 
			|| '>' == c || '?' == c || '`' == c || '{' == c || '|' == c || '}' == c || '~' == c || '@' == c
			|| '[' == c || '\\' == c || ']' == c || '^' == c || ' ' == c)
			newStr = newStr + str.substring(i,i+1);			
	}	
	 document.getElementById(id).value = newStr;
}

function isValidSSID(str){
   var len = str.length;
   var i = 0;
   var c;

   for ( i = 0; i < len ; i++ ){
   	 c = str.toLowerCase().charAt(i);
	 if((c >= 'a' && c <= 'z') || (c >= '0' && c<= '9'))
				continue;
		else if('-' == c  || '_' == c || '.' == c || '!' == c || '\"' == c || '#' == c || '$' == c
				|| '%' == c || '&' == c || '\'' == c || '(' == c || ')' == c || '*' == c || '+' == c
				|| ',' == c || '/' == c || ':' == c || ';' == c || '<' == c || '=' == c || '>' == c
				|| '?' == c || '`' == c || '{' == c || '|' == c || '}' == c || '~' == c || '@' == c
				|| '[' == c || '\\' == c || ']' == c || '^' == c || ' ' == c)
				continue;
		else
			return false;
   }        

   return true;
}
