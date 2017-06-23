function divAlert(str){ $this.init(str); }

$this = divAlert.prototype;
$this.str = "";
//$this.messagebgColor = "#276A97";
$this.running = 0;
$this.width = 550;
$this.returnValue = "";
$this.bgW = document.documentElement.clientWidth;
$this.bgH = document.documentElement.clientHeight;
$this.func = null;
$this.funcBak = null;

//border
$this.outdiv = document.createElement("div");
$this.setWidth = function(w){
	$this.width = w;
	$this.outdiv.style.width = $this.width + "px";
	$this.outdiv.style.marginLeft = (0-$this.width/2) + "px";
}
$this.outdiv.style.position = "absolute";
$this.outdiv.style.zIndex = 10000;
$this.setWidth($this.width);

//header div
var extrapix = 2;
var divnumber = 4;
var conerangle = 4*(extrapix-1)+2*(divnumber-extrapix);
var margin = conerangle;
$this.conerdiv = new Array();
for ( i = 0 ; i < divnumber; i ++ ) {
	$this.conerdiv[i] = document.createElement("div");
	$this.conerdiv[i].style.overflow="hidden";
	$this.conerdiv[i].style.display="block";
	/*$this.conerdiv[i].style.background = $this.messagebgColor;
	$this.conerdiv[i].style.borderRight = "1px solid #CC6666";
	$this.conerdiv[i].style.borderLeft = "1px solid #CC6666";
	if ( i < divnumber - extrapix ) {
		$this.conerdiv[i].style.height = "1px";
	}
	else {
		$this.conerdiv[i].style.height = "2px";
	}
	if ( i < extrapix ) {
		margin = margin-4*i;
	}
	else {
		margin = margin-2;
	}
	$this.conerdiv[i].style.margin = "0 "+margin+"px";*/
}

//title
$this.titdiv = document.createElement("div");
$this.titdiv.className = "popupHeader";
$this.titdiv.innerHTML = "CenturyLink Modem Configuration";

//content wrapper
$this.condiv = document.createElement("div");
$this.condiv.className = "popupContent";

//continue btn
$this.btndiv = document.createElement("div");
$this.btndiv.className = "popupButton";

//footer div
margin = conerangle;
$this.conerdiv2 = new Array();
for ( i = 0 ; i < divnumber; i ++ ) {
	$this.conerdiv2[i] = document.createElement("div");
	$this.conerdiv2[i].style.overflow="hidden";
	$this.conerdiv2[i].style.display="block";
	if ( i < divnumber - extrapix ) {
		$this.conerdiv2[i].style.height = "1px";
	}
	else {
		$this.conerdiv2[i].style.height = "2px";
	}
	if ( i < extrapix ) {
		margin = margin-4*i;
	}
	else {
		margin = margin-2;
	}
	$this.conerdiv2[i].style.margin = "0 "+margin+"px";
}

//background page
$this.bgdiv = document.createElement("div");
$this.bgdiv.style.position = "absolute";
$this.bgdiv.style.top = 0;
$this.bgdiv.style.left = 0;
$this.bgdiv.style.zIndex = 9999;
$this.bgdiv.style.filter = "alpha(opacity=80)";
$this.bgdiv.style.opacity="0.8";
$this.bgdiv.style.backgroundColor = "#999";

$this.init = function(str){
	this.str = str;
}

$this.open = function(){
	var yWithScroll;
	var xWithScroll;
	var yWithScreen;
	var xWithScreen;

	if (parseInt(navigator.appVersion)>3) {
			xWithScreen = screen.width;
			yWithScreen = screen.height;
	}
	else if (navigator.appName == "Netscape" 
	    && parseInt(navigator.appVersion)==3
	    && navigator.javaEnabled()
	) 
	{
		var jToolkit = java.awt.Toolkit.getDefaultToolkit();
		var jScreenSize = jToolkit.getScreenSize();
		xWithScreen = jScreenSize.width;
		yWithScreen = jScreenSize.height;
	}

	if (window.innerHeight && window.scrollMaxY) {// Firefox
		yWithScroll = window.innerHeight + window.scrollMaxY;
		xWithScroll = window.innerWidth + window.scrollMaxX;
	} else if (document.body.scrollHeight > document.body.offsetHeight){ // all but Explorer Mac
		yWithScroll = document.body.scrollHeight;
		xWithScroll = document.body.scrollWidth;
	} else { // works in Explorer 6 Strict, Mozilla (not FF) and Safari
		yWithScroll = document.body.offsetHeight;
		xWithScroll = document.body.offsetWidth;
	}
	
	if ( xWithScroll > xWithScreen ) {
		this.bgW = xWithScroll;
	}
	else {
		if ( xWithScreen > this.bgW ) {
			this.bgW = xWithScreen;
		}
	}

	if ( yWithScroll > yWithScreen ) {
		this.bgH = yWithScroll;
	}
	else {
		if ( yWithScreen > this.bgH ) {
			this.bgH = yWithScreen;
		}
	}
	
	//button div
	if ( popAlert.func == null ) {
		//this.btndiv.innerHTML = "<div align=right><a href=\"#\" id=\"back_btn\" class=\"btn apply_btn\" onclick=\"popAlert.closebak();\">Back</a></div><div align=center>Visit <a href=\"http://www.CenturyLink.com\" target=\"_blank\"><font color=FFFFFF>www.CenturyLink.com</font></a> for details</div>";
		this.btndiv.innerHTML = "<div class=btnWrapper><table border=0 cellpadding=\"0\" cellspacing=\"0\"><tr><td><a href=\"#\" id=\"back_btn\" class=\"btn apply_btn\" onclick=\"popAlert.closebak();\">Ok</a></td></tr><tr><td>Visit <a class=linking href=\"http://www.CenturyLink.com\" target=\"_blank\">www.CenturyLink.com</a> for details</td></tr></table></div>";
	}
	else {
		this.btndiv.innerHTML = "<div class=btnWrapper><table border=0 cellpadding=\"0\" cellspacing=\"0\"><tr><td><a href=\"#\" id=\"confirm_btn\" class=\"btn apply_btn\" onclick=\"popAlert.closecon();\">Ok</a><a href=\"#\" id=\"back_btn\" class=\"btn apply_btn\" onclick=\"popAlert.closebak();\">Cancel</a></td></tr><tr><td>Visit <a class=linking href=\"http://www.CenturyLink.com\" target=\"_blank\">www.CenturyLink.com</a> for details</td></tr></table></div>";
	}

	//background page	
	this.bgdiv.style.width =  this.bgW  + "px";
	this.bgdiv.style.height =  this.bgH + "px";

	//outdiv
//	this.outdiv.style.left = "50%";
//	this.outdiv.style.top = "20%";
	var ns4=document.layers?1:0;
	var ie4=document.all?1:0;
	var ns6=document.getElementById&&!document.all?1:0;

	if (ie4) {
		this.outdiv.style.pixelTop = (document.documentElement.clientHeight*0.2);
	}
	else if (ns6) {
		this.outdiv.style.top=(document.documentElement.clientHeight*0.2)+"px";
	}
	else if (ns4) {
		eval(this.outdiv.top=eval(eval(document.documentElement.clientHeight*0.2)+"px"));
	}

	document.body.appendChild(this.bgdiv);
	document.body.appendChild(this.outdiv);
	for ( i = 0 ; i < divnumber; i ++ ) {
		this.outdiv.appendChild(this.conerdiv[i]);
	}
	this.outdiv.appendChild(this.titdiv);
	this.outdiv.appendChild(this.condiv);
	this.outdiv.appendChild(this.btndiv);
	for ( i = 0 ; i < divnumber; i ++ ) {
		this.outdiv.appendChild(this.conerdiv2[divnumber-i-1]);
	}
	this.condiv.innerHTML = "<div class=popupWrapper><table border=0 cellpadding=\"0\" cellspacing=\"0\"><tr><td class=container>" + this.str + "</td></tr></table></div>";
	this.running = 1;
	this.makeStatic();
}
 
$this.closebak = function(){
	this.outdiv.removeChild(this.titdiv);
	this.outdiv.removeChild(this.condiv);
	this.outdiv.removeChild(this.btndiv);
	for ( i = 0 ; i < divnumber; i ++ ) {
		this.outdiv.removeChild(this.conerdiv[i]);
		this.outdiv.removeChild(this.conerdiv2[i]);
	}
	document.body.removeChild(this.bgdiv);
	document.body.removeChild(this.outdiv);
	this.running = 0;
	
	if ( this.funcBak != null ) {
		this.funcBak();
		var temp = this.funcBak;
		this.funcBak=null;
		temp();
	}

}

$this.closecon = function(){
	this.outdiv.removeChild(this.titdiv);
	this.outdiv.removeChild(this.condiv);
	this.outdiv.removeChild(this.btndiv);
	for ( i = 0 ; i < divnumber; i ++ ) {
		this.outdiv.removeChild(this.conerdiv[i]);
		this.outdiv.removeChild(this.conerdiv2[i]);
	}
	document.body.removeChild(this.bgdiv);
	document.body.removeChild(this.outdiv);
	this.running = 0;
	if ( this.func != null ) {
		this.func();
		var temp = this.func;
		this.func=null;
//		if(jQuery.browser.msie)
//			setTimeout("temp()", 1000); // workaround for IE
//		else
			temp();
		//temp();
//		BackgroundUrl(this.func);
	}
}


$this.makeStatic = function() {
	var ns4=document.layers?1:0;
	var ie4=document.all?1:0;
	var ns6=document.getElementById&&!document.all?1:0;
	var offsettop2 = 0;
	var scrolltop = 0;
	var scrollbtm = 0;
	var Cscrolltop = 0;

	if ( ie4 ) {
		this.outdiv.style.pixelLeft = (document.documentElement.clientWidth)/2;
	}
	else if ( ns6 ) {
		this.outdiv.style.left = ((document.documentElement.clientWidth)/2) + "px";
	}
	else {
		eval(this.outdiv.style.left = eval(eval(eval(document.documentElement.clientWidth)/2)) + "px");
	}

	if (ie4) {
		Cscrolltop = this.outdiv.style.pixelTop;
		scrolltop = (document.documentElement.scrollTop+(document.documentElement.clientHeight*0.2));
	}
	else if (ns6) {
		Cscrolltop = this.outdiv.style.top.substring(0,this.outdiv.style.top.indexOf("px"));
		scrolltop = window.pageYOffset+(document.documentElement.clientHeight*0.2);
	}
	else if (ns4) {
		eval(Cscrolltop = this.outdiv.style.top.substring(0,this.outdiv.style.top.indexOf("px")) );
		eval(scrolltop = eval(window.pageYOffset+eval(document.documentElement.clientHeight*0.2)));
	}

	if ( Cscrolltop < scrolltop ) {
		for ( i = 6; i > 0 ; i -- ) {
			if ( scrolltop - Cscrolltop >= (i*i*i) ) {
				offsettop2 = i;
				break;
			}
		}
		offsettop2 = i;
		
		if (ie4) {
			this.outdiv.style.pixelTop=Cscrolltop+offsettop2;
		}
		else if (ns6) {
			this.outdiv.style.top=(Cscrolltop*1+offsettop2)+"px";
		}
		else if (ns4) {
			eval(this.outdiv.top=eval(eval(eval(Cscrolltop*1)+offsettop2)+"px"));
		}
	}
	else if ( Cscrolltop > scrolltop ) {
		for ( i = 6; i > 0 ; i -- ) {
			if ( Cscrolltop - scrolltop >= (i*i*i) ) {
				offsettop2 = i;
				break;
			}
		}
		offsettop2 = i;

		if (ie4) {
			this.outdiv.style.pixelTop=Cscrolltop-offsettop2;
		}
		else if (ns6) {
			this.outdiv.style.top=(Cscrolltop-offsettop2)+"px";
		}
		else if (ns4) {
			eval(this.outdiv.top=eval(eval(Cscrolltop-offsettop2)+"px"));
		}
	}
	
	if ( this.running == 1 ) {
		setTimeout("popAlert.makeStatic(this)",0);
	}
}

var popAlert = new divAlert('');
