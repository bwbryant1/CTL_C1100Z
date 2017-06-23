var portForwardingall = '';

function updatePortMappingAll (req)
{
	var PortMappingAllInfo=req.responseText;
	if ( PortMappingAllInfo != "" && PortMappingAllInfo != null ) {
			portForwardingall = PortMappingAllInfo;
	}
	setTimeout('updateupdatePortMappingAllValue_take()', 2000);
}

function updateupdatePortMappingAllValue_take()
{
	var objXMLHTTP = null; 

	if (window.XMLHttpRequest)  { 
		objXMLHTTP=new XMLHttpRequest(); 
	}// code for IE 
		else if (window.ActiveXObject)  { 
		objXMLHTTP=new ActiveXObject("Microsoft.XMLHTTP"); 
	}
		
	if ( objXMLHTTP != null ) {
		objXMLHTTP.open("GET","./GetPortMappingAll.html",true);
	objXMLHTTP.setRequestHeader("If-Modified-Since","0");
    objXMLHTTP.onreadystatechange = function() 
    {
			if(objXMLHTTP.readyState == 4)
      	updatePortMappingAll(objXMLHTTP);
    }
		objXMLHTTP.send(null);
	}
}

setTimeout('updateupdatePortMappingAllValue_take()', 2000);
