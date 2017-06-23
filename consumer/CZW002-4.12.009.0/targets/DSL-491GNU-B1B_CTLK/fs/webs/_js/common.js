/*!
 * jQuery JavaScript Library v1.6.1
 * http://jquery.com/
 *
 * Copyright 2011, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2011, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Thu May 12 15:04:36 2011 -0400
 */
(function(a,b){function cy(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cv(a){if(!cj[a]){var b=f("<"+a+">").appendTo("body"),d=b.css("display");b.remove();if(d==="none"||d===""){ck||(ck=c.createElement("iframe"),ck.frameBorder=ck.width=ck.height=0),c.body.appendChild(ck);if(!cl||!ck.createElement)cl=(ck.contentWindow||ck.contentDocument).document,cl.write("<!doctype><html><body></body></html>");b=cl.createElement(a),cl.body.appendChild(b),d=f.css(b,"display"),c.body.removeChild(ck)}cj[a]=d}return cj[a]}function cu(a,b){var c={};f.each(cp.concat.apply([],cp.slice(0,b)),function(){c[this]=a});return c}function ct(){cq=b}function cs(){setTimeout(ct,0);return cq=f.now()}function ci(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ch(){try{return new a.XMLHttpRequest}catch(b){}}function cb(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function ca(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function b_(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bF.test(a)?d(a,e):b_(a+"["+(typeof e=="object"||f.isArray(e)?b:"")+"]",e,c,d)});else if(!c&&b!=null&&typeof b=="object")for(var e in b)b_(a+"["+e+"]",b[e],c,d);else d(a,b)}function b$(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bU,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=b$(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=b$(a,c,d,e,"*",g));return l}function bZ(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bQ),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bD(a,b,c){var d=b==="width"?bx:by,e=b==="width"?a.offsetWidth:a.offsetHeight;if(c==="border")return e;f.each(d,function(){c||(e-=parseFloat(f.css(a,"padding"+this))||0),c==="margin"?e+=parseFloat(f.css(a,"margin"+this))||0:e-=parseFloat(f.css(a,"border"+this+"Width"))||0});return e}function bn(a,b){b.src?f.ajax({url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bf,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)}function bm(a){f.nodeName(a,"input")?bl(a):a.getElementsByTagName&&f.grep(a.getElementsByTagName("input"),bl)}function bl(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function bk(a){return"getElementsByTagName"in a?a.getElementsByTagName("*"):"querySelectorAll"in a?a.querySelectorAll("*"):[]}function bj(a,b){var c;if(b.nodeType===1){b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase();if(c==="object")b.outerHTML=a.outerHTML;else if(c!=="input"||a.type!=="checkbox"&&a.type!=="radio"){if(c==="option")b.selected=a.defaultSelected;else if(c==="input"||c==="textarea")b.defaultValue=a.defaultValue}else a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value);b.removeAttribute(f.expando)}}function bi(a,b){if(b.nodeType===1&&!!f.hasData(a)){var c=f.expando,d=f.data(a),e=f.data(b,d);if(d=d[c]){var g=d.events;e=e[c]=f.extend({},d);if(g){delete e.handle,e.events={};for(var h in g)for(var i=0,j=g[h].length;i<j;i++)f.event.add(b,h+(g[h][i].namespace?".":"")+g[h][i].namespace,g[h][i],g[h][i].data)}}}}function bh(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function X(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(S.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}function W(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function O(a,b){return(a&&a!=="*"?a+".":"")+b.replace(A,"`").replace(B,"&")}function N(a){var b,c,d,e,g,h,i,j,k,l,m,n,o,p=[],q=[],r=f._data(this,"events");if(!(a.liveFired===this||!r||!r.live||a.target.disabled||a.button&&a.type==="click")){a.namespace&&(n=new RegExp("(^|\\.)"+a.namespace.split(".").join("\\.(?:.*\\.)?")+"(\\.|$)")),a.liveFired=this;var s=r.live.slice(0);for(i=0;i<s.length;i++)g=s[i],g.origType.replace(y,"")===a.type?q.push(g.selector):s.splice(i--,1);e=f(a.target).closest(q,a.currentTarget);for(j=0,k=e.length;j<k;j++){m=e[j];for(i=0;i<s.length;i++){g=s[i];if(m.selector===g.selector&&(!n||n.test(g.namespace))&&!m.elem.disabled){h=m.elem,d=null;if(g.preType==="mouseenter"||g.preType==="mouseleave")a.type=g.preType,d=f(a.relatedTarget).closest(g.selector)[0],d&&f.contains(h,d)&&(d=h);(!d||d!==h)&&p.push({elem:h,handleObj:g,level:m.level})}}}for(j=0,k=p.length;j<k;j++){e=p[j];if(c&&e.level>c)break;a.currentTarget=e.elem,a.data=e.handleObj.data,a.handleObj=e.handleObj,o=e.handleObj.origHandler.apply(e.elem,arguments);if(o===!1||a.isPropagationStopped()){c=e.level,o===!1&&(b=!1);if(a.isImmediatePropagationStopped())break}}return b}}function L(a,c,d){var e=f.extend({},d[0]);e.type=a,e.originalEvent={},e.liveFired=b,f.event.handle.call(c,e),e.isDefaultPrevented()&&d[0].preventDefault()}function F(){return!0}function E(){return!1}function m(a,c,d){var e=c+"defer",g=c+"queue",h=c+"mark",i=f.data(a,e,b,!0);i&&(d==="queue"||!f.data(a,g,b,!0))&&(d==="mark"||!f.data(a,h,b,!0))&&setTimeout(function(){!f.data(a,g,b,!0)&&!f.data(a,h,b,!0)&&(f.removeData(a,e,!0),i.resolve())},0)}function l(a){for(var b in a)if(b!=="toJSON")return!1;return!0}function k(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(j,"$1-$2").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNaN(d)?i.test(d)?f.parseJSON(d):d:parseFloat(d)}catch(g){}f.data(a,c,d)}else d=b}return d}var c=a.document,d=a.navigator,e=a.location,f=function(){function H(){if(!e.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(H,1);return}e.ready()}}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$,h,i=/^(?:[^<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/\d/,n=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,o=/^[\],:{}\s]*$/,p=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,q=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,r=/(?:^|:|,)(?:\s*\[)+/g,s=/(webkit)[ \/]([\w.]+)/,t=/(opera)(?:.*version)?[ \/]([\w.]+)/,u=/(msie) ([\w.]+)/,v=/(mozilla)(?:.*? rv:([\w.]+))?/,w=d.userAgent,x,y,z,A=Object.prototype.toString,B=Object.prototype.hasOwnProperty,C=Array.prototype.push,D=Array.prototype.slice,E=String.prototype.trim,F=Array.prototype.indexOf,G={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];if(g&&(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=n.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}this.context=c,this.selector=a;return this}return!d||d.jquery?(d||f).find(a):this.constructor(d).find(a)}if(e.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:"",jquery:"1.6.1",length:0,size:function(){return this.length},toArray:function(){return D.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?C.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),y.done(a);return this},eq:function(a){return a===-1?this.slice(a):this.slice(a,+a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(D.apply(this,arguments),"slice",D.call(arguments).join(","))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:C,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}return i},e.extend({noConflict:function(b){a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&&--e.readyWait>0)return;y.resolveWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").unbind("ready")}},bindReady:function(){if(!y){y=e._Deferred();if(c.readyState==="complete")return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",z,!1),a.addEventListener("load",e.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",z),a.attachEvent("onload",e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&H()}}},isFunction:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e.type(a)==="array"},isWindow:function(a){return a&&typeof a=="object"&&"setInterval"in a},isNaN:function(a){return a==null||!m.test(a)||isNaN(a)},type:function(a){return a==null?String(a):G[A.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;if(a.constructor&&!B.call(a,"constructor")&&!B.call(a.constructor.prototype,"isPrototypeOf"))return!1;var c;for(c in a);return c===b||B.call(a,c)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw a},parseJSON:function(b){if(typeof b!="string"||!b)return null;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(o.test(b.replace(p,"@").replace(q,"]").replace(r,"")))return(new Function("return "+b))();e.error("Invalid JSON: "+b)},parseXML:function(b,c,d){a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b)),d=c.documentElement,(!d||!d.nodeName||d.nodeName==="parsererror")&&e.error("Invalid XML: "+b);return c},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(;g<h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:E?function(a){return a==null?"":E.call(a)}:function(a){return a==null?"":(a+"").replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?C.call(c,a):e.merge(c,a)}return c},inArray:function(a,b){if(F)return F.call(b,a);for(var c=0,d=b.length;c<d;c++)if(b[c]===a)return c;return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=D.call(arguments,2),g=function(){return a.apply(c,f.concat(D.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h){var i=a.length;if(typeof c=="object"){for(var j in c)e.access(a,j,c[j],f,g,d);return a}if(d!==b){f=!h&&f&&e.isFunction(d);for(var k=0;k<i;k++)g(a[k],c,f?d.call(a[k],k,g(a[k],c)):d,h);return a}return i?g(a[0],c):b},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=s.exec(a)||t.exec(a)||u.exec(a)||a.indexOf("compatible")<0&&v.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&&f instanceof e&&!(f instanceof a)&&(f=a(f));return e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){G["[object "+b+"]"]=b.toLowerCase()}),x=e.uaMatch(w),x.browser&&(e.browser[x.browser]=!0,e.browser.version=x.version),e.browser.webkit&&(e.browser.safari=!0),j.test(" ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?z=function(){c.removeEventListener("DOMContentLoaded",z,!1),e.ready()}:c.attachEvent&&(z=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",z),e.ready())});return e}(),g="done fail isResolved isRejected promise then always pipe".split(" "),h=[].slice;f.extend({_Deferred:function(){var a=[],b,c,d,e={done:function(){if(!d){var c=arguments,g,h,i,j,k;b&&(k=b,b=0);for(g=0,h=c.length;g<h;g++)i=c[g],j=f.type(i),j==="array"?e.done.apply(e,i):j==="function"&&a.push(i);k&&e.resolveWith(k[0],k[1])}return this},resolveWith:function(e,f){if(!d&&!b&&!c){f=f||[],c=1;try{while(a[0])a.shift().apply(e,f)}finally{b=[e,f],c=0}}return this},resolve:function(){e.resolveWith(this,arguments);return this},isResolved:function(){return!!c||!!b},cancel:function(){d=1,a=[];return this}};return e},Deferred:function(a){var b=f._Deferred(),c=f._Deferred(),d;f.extend(b,{then:function(a,c){b.done(a).fail(c);return this},always:function(){return b.done.apply(b,arguments).fail.apply(this,arguments)},fail:c.done,rejectWith:c.resolveWith,reject:c.resolve,isRejected:c.isResolved,pipe:function(a,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[c,"reject"]},function(a,c){var e=c[0],g=c[1],h;f.isFunction(e)?b[a](function(){h=e.apply(this,arguments),h&&f.isFunction(h.promise)?h.promise().then(d.resolve,d.reject):d[g](h)}):b[a](d[g])})}).promise()},promise:function(a){if(a==null){if(d)return d;d=a={}}var c=g.length;while(c--)a[g[c]]=b[g[c]];return a}}),b.done(c.cancel).fail(b.cancel),delete b.cancel,a&&a.call(b,b);return b},when:function(a){function i(a){return function(c){b[a]=arguments.length>1?h.call(arguments,0):c,--e||g.resolveWith(g,h.call(b,0))}}var b=arguments,c=0,d=b.length,e=d,g=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred();if(d>1){for(;c<d;c++)b[c]&&f.isFunction(b[c].promise)?b[c].promise().then(i(c),g.reject):--e;e||g.resolveWith(g,b)}else g!==a&&g.resolveWith(g,d?[a]:[]);return g.promise()}}),f.support=function(){var a=c.createElement("div"),b=c.documentElement,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;a.setAttribute("className","t"),a.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",d=a.getElementsByTagName("*"),e=a.getElementsByTagName("a")[0];if(!d||!d.length||!e)return{};f=c.createElement("select"),g=f.appendChild(c.createElement("option")),h=a.getElementsByTagName("input")[0],j={leadingWhitespace:a.firstChild.nodeType===3,tbody:!a.getElementsByTagName("tbody").length,htmlSerialize:!!a.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55$/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:h.value==="on",optSelected:g.selected,getSetAttribute:a.className!=="t",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0},h.checked=!0,j.noCloneChecked=h.cloneNode(!0).checked,f.disabled=!0,j.optDisabled=!g.disabled;try{delete a.test}catch(s){j.deleteExpando=!1}!a.addEventListener&&a.attachEvent&&a.fireEvent&&(a.attachEvent("onclick",function b(){j.noCloneEvent=!1,a.detachEvent("onclick",b)}),a.cloneNode(!0).fireEvent("onclick")),h=c.createElement("input"),h.value="t",h.setAttribute("type","radio"),j.radioValue=h.value==="t",h.setAttribute("checked","checked"),a.appendChild(h),k=c.createDocumentFragment(),k.appendChild(a.firstChild),j.checkClone=k.cloneNode(!0).cloneNode(!0).lastChild.checked,a.innerHTML="",a.style.width=a.style.paddingLeft="1px",l=c.createElement("body"),m={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"};for(q in m)l.style[q]=m[q];l.appendChild(a),b.insertBefore(l,b.firstChild),j.appendChecked=h.checked,j.boxModel=a.offsetWidth===2,"zoom"in a.style&&(a.style.display="inline",a.style.zoom=1,j.inlineBlockNeedsLayout=a.offsetWidth===2,a.style.display="",a.innerHTML="<div style='width:4px;'></div>",j.shrinkWrapBlocks=a.offsetWidth!==2),a.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>",n=a.getElementsByTagName("td"),r=n[0].offsetHeight===0,n[0].style.display="",n[1].style.display="none",j.reliableHiddenOffsets=r&&n[0].offsetHeight===0,a.innerHTML="",c.defaultView&&c.defaultView.getComputedStyle&&(i=c.createElement("div"),i.style.width="0",i.style.marginRight="0",a.appendChild(i),j.reliableMarginRight=(parseInt((c.defaultView.getComputedStyle(i,null)||{marginRight:0}).marginRight,10)||0)===0),l.innerHTML="",b.removeChild(l);if(a.attachEvent)for(q in{submit:1,change:1,focusin:1})p="on"+q,r=p in a,r||(a.setAttribute(p,"return;"),r=typeof a[p]=="function"),j[q+"Bubbles"]=r;return j}(),f.boxModel=f.support.boxModel;var i=/^(?:\{.*\}|\[.*\])$/,j=/([a-z])([A-Z])/g;f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return!!a&&!l(a)},data:function(a,c,d,e){if(!!f.acceptData(a)){var g=f.expando,h=typeof c=="string",i,j=a.nodeType,k=j?f.cache:a,l=j?a[f.expando]:a[f.expando]&&f.expando;if((!l||e&&l&&!k[l][g])&&h&&d===b)return;l||(j?a[f.expando]=l=++f.uuid:l=f.expando),k[l]||(k[l]={},j||(k[l].toJSON=f.noop));if(typeof c=="object"||typeof c=="function")e?k[l][g]=f.extend(k[l][g],c):k[l]=f.extend(k[l],c);i=k[l],e&&(i[g]||(i[g]={}),i=i[g]),d!==b&&(i[f.camelCase(c)]=d);if(c==="events"&&!i[c])return i[g]&&i[g].events;return h?i[f.camelCase(c)]:i}},removeData:function(b,c,d){if(!!f.acceptData(b)){var e=f.expando,g=b.nodeType,h=g?f.cache:b,i=g?b[f.expando]:f.expando;if(!h[i])return;if(c){var j=d?h[i][e]:h[i];if(j){delete j[c];if(!l(j))return}}if(d){delete h[i][e];if(!l(h[i]))return}var k=h[i][e];f.support.deleteExpando||h!=a?delete h[i]:h[i]=null,k?(h[i]={},g||(h[i].toJSON=f.noop),h[i][e]=k):g&&(f.support.deleteExpando?delete b[f.expando]:b.removeAttribute?b.removeAttribute(f.expando):b[f.expando]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),f.fn.extend({data:function(a,c){var d=null;if(typeof a=="undefined"){if(this.length){d=f.data(this[0]);if(this[0].nodeType===1){var e=this[0].attributes,g;for(var h=0,i=e.length;h<i;h++)g=e[h].name,g.indexOf("data-")===0&&(g=f.camelCase(g.substring(5)),k(this[0],g,d[g]))}}return d}if(typeof a=="object")return this.each(function(){f.data(this,a)});var j=a.split(".");j[1]=j[1]?"."+j[1]:"";if(c===b){d=this.triggerHandler("getData"+j[1]+"!",[j[0]]),d===b&&this.length&&(d=f.data(this[0],a),d=k(this[0],a,d));return d===b&&j[1]?this.data(j[0]):d}return this.each(function(){var b=f(this),d=[j[0],c];b.triggerHandler("setData"+j[1]+"!",d),f.data(this,a,c),b.triggerHandler("changeData"+j[1]+"!",d)})},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,c){a&&(c=(c||"fx")+"mark",f.data(a,c,(f.data(a,c,b,!0)||0)+1,!0))},_unmark:function(a,c,d){a!==!0&&(d=c,c=a,a=!1);if(c){d=d||"fx";var e=d+"mark",g=a?0:(f.data(c,e,b,!0)||1)-1;g?f.data(c,e,g,!0):(f.removeData(c,e,!0),m(c,d,"mark"))}},queue:function(a,c,d){if(a){c=(c||"fx")+"queue";var e=f.data(a,c,b,!0);d&&(!e||f.isArray(d)?e=f.data(a,c,f.makeArray(d),!0):e.push(d));return e||[]}},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e;d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),d.call(a,function(){f.dequeue(a,b)})),c.length||(f.removeData(a,b+"queue",!0),m(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){typeof a!="string"&&(c=a,a="fx");if(c===b)return f.queue(this[0],a);return this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(){var c=this;setTimeout(function(){f.dequeue(c,b)},a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f._Deferred(),!0))h++,l.done(m);m();return d.promise()}});var n=/[\n\t\r]/g,o=/\s+/,p=/\r/g,q=/^(?:button|input)$/i,r=/^(?:button|input|object|select|textarea)$/i,s=/^a(?:rea)?$/i,t=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,u=/\:/,v,w;f.fn.extend({attr:function(a,b){return f.access(this,a,b,!0,f.attr)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,a,b,!0,f.prop)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){if(f.isFunction(a))return this.each(function(b){var c=f(this);c.addClass(a.call(this,b,c.attr("class")||""))});if(a&&typeof a=="string"){var b=(a||"").split(o);for(var c=0,d=this.length;c<d;c++){var e=this[c];if(e.nodeType===1)if(!e.className)e.className=a;else{var g=" "+e.className+" ",h=e.className;for(var i=0,j=b.length;i<j;i++)g.indexOf(" "+b[i]+" ")<0&&(h+=" "+b[i]);e.className=f.trim(h)}}}return this},removeClass:function(a){if(f.isFunction(a))return this.each(function(b){var c=f(this);c.removeClass(a.call(this,b,c.attr("class")))});if(a&&typeof a=="string"||a===b){var c=(a||"").split(o);for(var d=0,e=this.length;d<e;d++){var g=this[d];if(g.nodeType===1&&g.className)if(a){var h=(" "+g.className+" ").replace(n," ");for(var i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ");g.className=f.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";if(f.isFunction(a))return this.each(function(c){var d=f(this);d.toggleClass(a.call(this,c,d.attr("class"),b),b)});return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(o);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ";for(var c=0,d=this.length;c<d;c++)if((" "+this[c].className+" ").replace(n," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e=this[0];if(!arguments.length){if(e){c=f.valHooks[e.nodeName.toLowerCase()]||f.valHooks[e.type];if(c&&"get"in c&&(d=c.get(e,"value"))!==b)return d;return(e.value||"").replace(p,"")}return b}var g=f.isFunction(a);return this.each(function(d){var e=f(this),h;if(this.nodeType===1){g?h=a.call(this,d,e.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""})),c=f.valHooks[this.nodeName.toLowerCase()]||f.valHooks[this.type];if(!c||!("set"in c)||c.set(this,h,"value")===b)this.value=h}})}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c=a.selectedIndex,d=[],e=a.options,g=a.type==="select-one";if(c<0)return null;for(var h=g?c:0,i=g?c+1:e.length;h<i;h++){var j=e[h];if(j.selected&&(f.support.optDisabled?!j.disabled:j.getAttribute("disabled")===null)&&(!j.parentNode.disabled||!f.nodeName(j.parentNode,"optgroup"))){b=f(j).val();if(g)return b;d.push(b)}}if(g&&!d.length&&e.length)return f(e[c]).val();return d},set:function(a,b){var c=f.makeArray(b);f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attrFix:{tabindex:"tabIndex"},attr:function(a,c,d,e){var g=a.nodeType;if(!a||g===3||g===8||g===2)return b;if(e&&c in f.attrFn)return f(a)[c](d);if(!("getAttribute"in a))return f.prop(a,c,d);var h,i,j=g!==1||!f.isXMLDoc(a);c=j&&f.attrFix[c]||c,i=f.attrHooks[c],i||(!t.test(c)||typeof d!="boolean"&&d!==b&&d.toLowerCase()!==c.toLowerCase()?v&&(f.nodeName(a,"form")||u.test(c))&&(i=v):i=w);if(d!==b){if(d===null){f.removeAttr(a,c);return b}if(i&&"set"in i&&j&&(h=i.set(a,d,c))!==b)return h;a.setAttribute(c,""+d);return d}if(i&&"get"in i&&j)return i.get(a,c);h=a.getAttribute(c);return h===null?b:h},removeAttr:function(a,b){var c;a.nodeType===1&&(b=f.attrFix[b]||b,f.support.getSetAttribute?a.removeAttribute(b):(f.attr(a,b,""),a.removeAttributeNode(a.getAttributeNode(b))),t.test(b)&&(c=f.propFix[b]||b)in a&&(a[c]=!1))},attrHooks:{type:{set:function(a,b){if(q.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed");else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b),c&&(a.value=c);return b}}},tabIndex:{get:function(a){var c=a.getAttributeNode("tabIndex");return c&&c.specified?parseInt(c.value,10):r.test(a.nodeName)||s.test(a.nodeName)&&a.href?0:b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e=a.nodeType;if(!a||e===3||e===8||e===2)return b;var g,h,i=e!==1||!f.isXMLDoc(a);c=i&&f.propFix[c]||c,h=f.propHooks[c];return d!==b?h&&"set"in h&&(g=h.set(a,d,c))!==b?g:a[c]=d:h&&"get"in h&&(g=h.get(a,c))!==b?g:a[c]},propHooks:{}}),w={get:function(a,c){return a[f.propFix[c]||c]?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=b),a.setAttribute(c,c.toLowerCase()));return c}},f.attrHooks.value={get:function(a,b){if(v&&f.nodeName(a,"button"))return v.get(a,b);return a.value},set:function(a,b,c){if(v&&f.nodeName(a,"button"))return v.set(a,b,c);a.value=b}},f.support.getSetAttribute||(f.attrFix=f.propFix,v=f.attrHooks.name=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&&d.nodeValue!==""?d.nodeValue:b},set:function(a,b,c){var d=a.getAttributeNode(c);if(d){d.nodeValue=b;return b}}},f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");return c}}})})),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}})),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)>=0}})});var x=Object.prototype.hasOwnProperty,y=/\.(.*)$/,z=/^(?:textarea|input|select)$/i,A=/\./g,B=/ /g,C=/[^\w\s.|`]/g,D=function(a){return a.replace(C,"\\$&")};f.event={add:function(a,c,d,e){if(a.nodeType!==3&&a.nodeType!==8){if(d===!1)d=E;else if(!d)return;var g,h;d.handler&&(g=d,d=g.handler),d.guid||(d.guid=f.guid++);var i=f._data(a);if(!i)return;var j=i.events,k=i.handle;j||(i.events=j={}),k||(i.handle=k=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.handle.apply(k.elem,arguments):b}),k.elem=a,c=c.split(" ");var l,m=0,n;while(l=c[m++]){h=g?f.extend({},g):{handler:d,data:e},l.indexOf(".")>-1?(n=l.split("."),l=n.shift(),h.namespace=n.slice(0).sort().join(".")):(n=[],h.namespace=""),h.type=l,h.guid||(h.guid=d.guid);var o=j[l],p=f.event.special[l]||{};if(!o){o=j[l]=[];if(!p.setup||p.setup.call(a,e,n,k)===!1)a.addEventListener?a.addEventListener(l,k,!1):a.attachEvent&&a.attachEvent("on"+l,k)}p.add&&(p.add.call(a,h),h.handler.guid||(h.handler.guid=d.guid)),o.push(h),f.event.global[l]=!0}a=null}},global:{},remove:function(a,c,d,e){if(a.nodeType!==3&&a.nodeType!==8){d===!1&&(d=E);var g,h,i,j,k=0,l,m,n,o,p,q,r,s=f.hasData(a)&&f._data(a),t=s&&s.events;if(!s||!t)return;c&&c.type&&(d=c.handler,c=c.type);if(!c||typeof c=="string"&&c.charAt(0)==="."){c=c||"";for(h in t)f.event.remove(a,h+c);return}c=c.split(" ");while(h=c[k++]){r=h,q=null,l=h.indexOf(".")<0,m=[],l||(m=h.split("."),h=m.shift(),n=new RegExp("(^|\\.)"+f.map(m.slice(0).sort(),D).join("\\.(?:.*\\.)?")+"(\\.|$)")),p=t[h];if(!p)continue;if(!d){for(j=0;j<p.length;j++){q=p[j];if(l||n.test(q.namespace))f.event.remove(a,r,q.handler,j),p.splice(j--,1)}continue}o=f.event.special[h]||{};for(j=e||0;j<p.length;j++){q=p[j];if(d.guid===q.guid){if(l||n.test(q.namespace))e==null&&p.splice(j--,1),o.remove&&o.remove.call(a,q);if(e!=null)break}}if(p.length===0||e!=null&&p.length===1)(!o.teardown||o.teardown.call(a,m)===!1)&&f.removeEvent(a,h,s.handle),g=null,delete t[h]}if(f.isEmptyObject(t)){var u=s.handle;u&&(u.elem=null),delete s.events,delete s.handle,f.isEmptyObject(s)&&f.removeData(a,b,!0)}}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){var h=c.type||c,i=[],j;h.indexOf("!")>=0&&(h=h.slice(0,-1),j=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());if(!!e&&!f.event.customEvent[h]||!!f.event.global[h]){c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.exclusive=j,c.namespace=i.join("."),c.namespace_re=new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)");if(g||!e)c.preventDefault(),c.stopPropagation();if(!e){f.each(f.cache,function(){var a=f.expando,b=this[a];b&&b.events&&b.events[h]&&f.event.trigger(c,d,b.handle.elem
)});return}if(e.nodeType===3||e.nodeType===8)return;c.result=b,c.target=e,d=d?f.makeArray(d):[],d.unshift(c);var k=e,l=h.indexOf(":")<0?"on"+h:"";do{var m=f._data(k,"handle");c.currentTarget=k,m&&m.apply(k,d),l&&f.acceptData(k)&&k[l]&&k[l].apply(k,d)===!1&&(c.result=!1,c.preventDefault()),k=k.parentNode||k.ownerDocument||k===c.target.ownerDocument&&a}while(k&&!c.isPropagationStopped());if(!c.isDefaultPrevented()){var n,o=f.event.special[h]||{};if((!o._default||o._default.call(e.ownerDocument,c)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)){try{l&&e[h]&&(n=e[l],n&&(e[l]=null),f.event.triggered=h,e[h]())}catch(p){}n&&(e[l]=n),f.event.triggered=b}}return c.result}},handle:function(c){c=f.event.fix(c||a.event);var d=((f._data(this,"events")||{})[c.type]||[]).slice(0),e=!c.exclusive&&!c.namespace,g=Array.prototype.slice.call(arguments,0);g[0]=c,c.currentTarget=this;for(var h=0,i=d.length;h<i;h++){var j=d[h];if(e||c.namespace_re.test(j.namespace)){c.handler=j.handler,c.data=j.data,c.handleObj=j;var k=j.handler.apply(this,g);k!==b&&(c.result=k,k===!1&&(c.preventDefault(),c.stopPropagation()));if(c.isImmediatePropagationStopped())break}}return c.result},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),fix:function(a){if(a[f.expando])return a;var d=a;a=f.Event(d);for(var e=this.props.length,g;e;)g=this.props[--e],a[g]=d[g];a.target||(a.target=a.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),!a.relatedTarget&&a.fromElement&&(a.relatedTarget=a.fromElement===a.target?a.toElement:a.fromElement);if(a.pageX==null&&a.clientX!=null){var h=a.target.ownerDocument||c,i=h.documentElement,j=h.body;a.pageX=a.clientX+(i&&i.scrollLeft||j&&j.scrollLeft||0)-(i&&i.clientLeft||j&&j.clientLeft||0),a.pageY=a.clientY+(i&&i.scrollTop||j&&j.scrollTop||0)-(i&&i.clientTop||j&&j.clientTop||0)}a.which==null&&(a.charCode!=null||a.keyCode!=null)&&(a.which=a.charCode!=null?a.charCode:a.keyCode),!a.metaKey&&a.ctrlKey&&(a.metaKey=a.ctrlKey),!a.which&&a.button!==b&&(a.which=a.button&1?1:a.button&2?3:a.button&4?2:0);return a},guid:1e8,proxy:f.proxy,special:{ready:{setup:f.bindReady,teardown:f.noop},live:{add:function(a){f.event.add(this,O(a.origType,a.selector),f.extend({},a,{handler:N,guid:a.handler.guid}))},remove:function(a){f.event.remove(this,O(a.origType,a.selector),a)}},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}}},f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},f.Event=function(a,b){if(!this.preventDefault)return new f.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?F:E):this.type=a,b&&f.extend(this,b),this.timeStamp=f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=F;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=F;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=F,this.stopPropagation()},isDefaultPrevented:E,isPropagationStopped:E,isImmediatePropagationStopped:E};var G=function(a){var b=a.relatedTarget;a.type=a.data;try{if(b&&b!==c&&!b.parentNode)return;while(b&&b!==this)b=b.parentNode;b!==this&&f.event.handle.apply(this,arguments)}catch(d){}},H=function(a){a.type=a.data,f.event.handle.apply(this,arguments)};f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]={setup:function(c){f.event.add(this,b,c&&c.selector?H:G,a)},teardown:function(a){f.event.remove(this,b,a&&a.selector?H:G)}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(a,b){if(!f.nodeName(this,"form"))f.event.add(this,"click.specialSubmit",function(a){var b=a.target,c=b.type;(c==="submit"||c==="image")&&f(b).closest("form").length&&L("submit",this,arguments)}),f.event.add(this,"keypress.specialSubmit",function(a){var b=a.target,c=b.type;(c==="text"||c==="password")&&f(b).closest("form").length&&a.keyCode===13&&L("submit",this,arguments)});else return!1},teardown:function(a){f.event.remove(this,".specialSubmit")}});if(!f.support.changeBubbles){var I,J=function(a){var b=a.type,c=a.value;b==="radio"||b==="checkbox"?c=a.checked:b==="select-multiple"?c=a.selectedIndex>-1?f.map(a.options,function(a){return a.selected}).join("-"):"":f.nodeName(a,"select")&&(c=a.selectedIndex);return c},K=function(c){var d=c.target,e,g;if(!!z.test(d.nodeName)&&!d.readOnly){e=f._data(d,"_change_data"),g=J(d),(c.type!=="focusout"||d.type!=="radio")&&f._data(d,"_change_data",g);if(e===b||g===e)return;if(e!=null||g)c.type="change",c.liveFired=b,f.event.trigger(c,arguments[1],d)}};f.event.special.change={filters:{focusout:K,beforedeactivate:K,click:function(a){var b=a.target,c=f.nodeName(b,"input")?b.type:"";(c==="radio"||c==="checkbox"||f.nodeName(b,"select"))&&K.call(this,a)},keydown:function(a){var b=a.target,c=f.nodeName(b,"input")?b.type:"";(a.keyCode===13&&!f.nodeName(b,"textarea")||a.keyCode===32&&(c==="checkbox"||c==="radio")||c==="select-multiple")&&K.call(this,a)},beforeactivate:function(a){var b=a.target;f._data(b,"_change_data",J(b))}},setup:function(a,b){if(this.type==="file")return!1;for(var c in I)f.event.add(this,c+".specialChange",I[c]);return z.test(this.nodeName)},teardown:function(a){f.event.remove(this,".specialChange");return z.test(this.nodeName)}},I=f.event.special.change.filters,I.focus=I.beforeactivate}f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){function e(a){var c=f.event.fix(a);c.type=b,c.originalEvent={},f.event.trigger(c,null,c.target),c.isDefaultPrevented()&&a.preventDefault()}var d=0;f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.each(["bind","one"],function(a,c){f.fn[c]=function(a,d,e){var g;if(typeof a=="object"){for(var h in a)this[c](h,d,a[h],e);return this}if(arguments.length===2||d===!1)e=d,d=b;c==="one"?(g=function(a){f(this).unbind(a,g);return e.apply(this,arguments)},g.guid=e.guid||f.guid++):g=e;if(a==="unload"&&c!=="one")this.one(a,d,e);else for(var i=0,j=this.length;i<j;i++)f.event.add(this[i],a,g,d);return this}}),f.fn.extend({unbind:function(a,b){if(typeof a=="object"&&!a.preventDefault)for(var c in a)this.unbind(c,a[c]);else for(var d=0,e=this.length;d<e;d++)f.event.remove(this[d],a,b);return this},delegate:function(a,b,c,d){return this.live(b,c,d,a)},undelegate:function(a,b,c){return arguments.length===0?this.unbind("live"):this.die(b,null,c,a)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f.data(this,"lastToggle"+a.guid)||0)%d;f.data(this,"lastToggle"+a.guid,e+1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var M={focus:"focusin",blur:"focusout",mouseenter:"mouseover",mouseleave:"mouseout"};f.each(["live","die"],function(a,c){f.fn[c]=function(a,d,e,g){var h,i=0,j,k,l,m=g||this.selector,n=g?this:f(this.context);if(typeof a=="object"&&!a.preventDefault){for(var o in a)n[c](o,d,a[o],m);return this}if(c==="die"&&!a&&g&&g.charAt(0)==="."){n.unbind(g);return this}if(d===!1||f.isFunction(d))e=d||E,d=b;a=(a||"").split(" ");while((h=a[i++])!=null){j=y.exec(h),k="",j&&(k=j[0],h=h.replace(y,""));if(h==="hover"){a.push("mouseenter"+k,"mouseleave"+k);continue}l=h,M[h]?(a.push(M[h]+k),h=h+k):h=(M[h]||h)+k;if(c==="live")for(var p=0,q=n.length;p<q;p++)f.event.add(n[p],"live."+O(h,m),{data:d,selector:m,handler:e,origType:h,origHandler:e,preType:l});else n.unbind("live."+O(h,m),e)}return this}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.bind(b,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0)}),function(){function u(a,b,c,d,e,f){for(var g=0,h=d.length;g<h;g++){var i=d[g];if(i){var j=!1;i=i[a];while(i){if(i.sizcache===c){j=d[i.sizset];break}if(i.nodeType===1){f||(i.sizcache=c,i.sizset=g);if(typeof b!="string"){if(i===b){j=!0;break}}else if(k.filter(b,[i]).length>0){j=i;break}}i=i[a]}d[g]=j}}}function t(a,b,c,d,e,f){for(var g=0,h=d.length;g<h;g++){var i=d[g];if(i){var j=!1;i=i[a];while(i){if(i.sizcache===c){j=d[i.sizset];break}i.nodeType===1&&!f&&(i.sizcache=c,i.sizset=g);if(i.nodeName.toLowerCase()===b){j=i;break}i=i[a]}d[g]=j}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d=0,e=Object.prototype.toString,g=!1,h=!0,i=/\\/g,j=/\W/;[0,0].sort(function(){h=!1;return 0});var k=function(b,d,f,g){f=f||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!="string")return f;var i,j,n,o,q,r,s,t,u=!0,w=k.isXML(d),x=[],y=b;do{a.exec(""),i=a.exec(y);if(i){y=i[3],x.push(i[1]);if(i[2]){o=i[3];break}}}while(i);if(x.length>1&&m.exec(b))if(x.length===2&&l.relative[x[0]])j=v(x[0]+x[1],d);else{j=l.relative[x[0]]?[d]:k(x.shift(),d);while(x.length)b=x.shift(),l.relative[b]&&(b+=x.shift()),j=v(b,j)}else{!g&&x.length>1&&d.nodeType===9&&!w&&l.match.ID.test(x[0])&&!l.match.ID.test(x[x.length-1])&&(q=k.find(x.shift(),d,w),d=q.expr?k.filter(q.expr,q.set)[0]:q.set[0]);if(d){q=g?{expr:x.pop(),set:p(g)}:k.find(x.pop(),x.length===1&&(x[0]==="~"||x[0]==="+")&&d.parentNode?d.parentNode:d,w),j=q.expr?k.filter(q.expr,q.set):q.set,x.length>0?n=p(j):u=!1;while(x.length)r=x.pop(),s=r,l.relative[r]?s=x.pop():r="",s==null&&(s=d),l.relative[r](n,s,w)}else n=x=[]}n||(n=j),n||k.error(r||b);if(e.call(n)==="[object Array]")if(!u)f.push.apply(f,n);else if(d&&d.nodeType===1)for(t=0;n[t]!=null;t++)n[t]&&(n[t]===!0||n[t].nodeType===1&&k.contains(d,n[t]))&&f.push(j[t]);else for(t=0;n[t]!=null;t++)n[t]&&n[t].nodeType===1&&f.push(j[t]);else p(n,f);o&&(k(o,h,f,g),k.uniqueSort(f));return f};k.uniqueSort=function(a){if(r){g=h,a.sort(r);if(g)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},k.matches=function(a,b){return k(a,null,null,b)},k.matchesSelector=function(a,b){return k(b,null,null,[a]).length>0},k.find=function(a,b,c){var d;if(!a)return[];for(var e=0,f=l.order.length;e<f;e++){var g,h=l.order[e];if(g=l.leftMatch[h].exec(a)){var j=g[1];g.splice(1,1);if(j.substr(j.length-1)!=="\\"){g[1]=(g[1]||"").replace(i,""),d=l.find[h](g,b,c);if(d!=null){a=a.replace(l.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},k.filter=function(a,c,d,e){var f,g,h=a,i=[],j=c,m=c&&c[0]&&k.isXML(c[0]);while(a&&c.length){for(var n in l.filter)if((f=l.leftMatch[n].exec(a))!=null&&f[2]){var o,p,q=l.filter[n],r=f[1];g=!1,f.splice(1,1);if(r.substr(r.length-1)==="\\")continue;j===i&&(i=[]);if(l.preFilter[n]){f=l.preFilter[n](f,j,d,i,e,m);if(!f)g=o=!0;else if(f===!0)continue}if(f)for(var s=0;(p=j[s])!=null;s++)if(p){o=q(p,f,s,j);var t=e^!!o;d&&o!=null?t?g=!0:j[s]=!1:t&&(i.push(p),g=!0)}if(o!==b){d||(j=i),a=a.replace(l.match[n],"");if(!g)return[];break}}if(a===h)if(g==null)k.error(a);else break;h=a}return j},k.error=function(a){throw"Syntax error, unrecognized expression: "+a};var l=k.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!j.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&k.filter(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!j.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&k.filter(b,a,!0)}},"":function(a,b,c){var e,f=d++,g=u;typeof b=="string"&&!j.test(b)&&(b=b.toLowerCase(),e=b,g=t),g("parentNode",b,f,a,e,c)},"~":function(a,b,c){var e,f=d++,g=u;typeof b=="string"&&!j.test(b)&&(b=b.toLowerCase(),e=b,g=t),g("previousSibling",b,f,a,e,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(i,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(i,"")},TAG:function(a,b){return a[1].replace(i,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||k.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&k.error(a[0]);a[0]=d++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(i,"");!f&&l.attrMap[g]&&(a[1]=l.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(i,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=k(b[3],null,null,c);else{var g=k.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(l.match.POS.test(b[0])||l.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!k(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=l.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||k.getText([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}k.error(e)},CHILD:function(a,b){var c=b[1],d=a;switch(c){case"only":case"first":while(d=d.previousSibling)if(d.nodeType===1)return!1;if(c==="first")return!0;d=a;case"last":while(d=d.nextSibling)if(d.nodeType===1)return!1;return!0;case"nth":var e=b[2],f=b[3];if(e===1&&f===0)return!0;var g=b[0],h=a.parentNode;if(h&&(h.sizcache!==g||!a.nodeIndex)){var i=0;for(d=h.firstChild;d;d=d.nextSibling)d.nodeType===1&&(d.nodeIndex=++i);h.sizcache=g}var j=a.nodeIndex-f;return e===0?j===0:j%e===0&&j/e>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=l.attrHandle[c]?l.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=l.setFilters[e];if(f)return f(a,c,b,d)}}},m=l.match.POS,n=function(a,b){return"\\"+(b-0+1)};for(var o in l.match)l.match[o]=new RegExp(l.match[o].source+/(?![^\[]*\])(?![^\(]*\))/.source),l.leftMatch[o]=new RegExp(/(^(?:.|\r|\n)*?)/.source+l.match[o].source.replace(/\\(\d+)/g,n));var p=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(q){p=function(a,b){var c=0,d=b||[];if(e.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length=="number")for(var f=a.length;c<f;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var r,s;c.documentElement.compareDocumentPosition?r=function(a,b){if(a===b){g=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(r=function(a,b){if(a===b){g=!0;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],h=a.parentNode,i=b.parentNode,j=h;if(h===i)return s(a,b);if(!h)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return s(e[k],f[k]);return k===c?s(a,f[k],-1):s(e[k],b,1)},s=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),k.getText=function(a){var b="",c;for(var d=0;a[d];d++)c=a[d],c.nodeType===3||c.nodeType===4?b+=c.nodeValue:c.nodeType!==8&&(b+=k.getText(c.childNodes));return b},function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(l.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},l.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(l.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(l.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=k,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){k=function(b,e,f,g){e=e||c;if(!g&&!k.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return p(e.getElementsByTagName(b),f);if(h[2]&&l.find.CLASS&&e.getElementsByClassName)return p(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return p([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return p([],f);if(i.id===h[3])return p([i],f)}try{return p(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var m=e,n=e.getAttribute("id"),o=n||d,q=e.parentNode,r=/^\s*[+~]/.test(b);n?o=o.replace(/'/g,"\\$&"):e.setAttribute("id",o),r&&q&&(e=e.parentNode);try{if(!r||q)return p(e.querySelectorAll("[id='"+o+"'] "+b),f)}catch(s){}finally{n||m.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)k[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}k.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!k.isXML(a))try{if(e||!l.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return k(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;l.order.splice(1,0,"CLASS"),l.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?k.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?k.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:k.contains=function(){return!1},k.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var v=function(a,b){var c,d=[],e="",f=b.nodeType?[b]:b;while(c=l.match.PSEUDO.exec(a))e+=c[0],a=a.replace(l.match.PSEUDO,"");a=l.relative[a]?a+"*":a;for(var g=0,h=f.length;g<h;g++)k(a,f[g],d);return k.filter(e,d)};f.find=k,f.expr=k.selectors,f.expr[":"]=f.expr.filters,f.unique=k.uniqueSort,f.text=k.getText,f.isXMLDoc=k.isXML,f.contains=k.contains}();var P=/Until$/,Q=/^(?:parents|prevUntil|prevAll)/,R=/,/,S=/^.[^:#\[\.,]*$/,T=Array.prototype.slice,U=f.expr.match.POS,V={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string")return f(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(X(this,a,!1),"not",a)},filter:function(a){return this.pushStack(X(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?f.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h,i,j={},k=1;if(g&&a.length){for(d=0,e=a.length;d<e;d++)i=a[d],j[i]||(j[i]=U.test(i)?f(i,b||this.context):i);while(g&&g.ownerDocument&&g!==b){for(i in j)h=j[i],(h.jquery?h.index(g)>-1:f(g).is(h))&&c.push({selector:i,elem:g,level:k});g=g.parentNode,k++}}return c}var l=U.test(a)||typeof a!="string"?f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(l?l.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}c=c.length>1?f.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a||typeof a=="string")return f.inArray(this[0],a?f(a):this.parent().children());return f.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(W(c[0])||W(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f.sibling(a.parentNode.firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c),g=T.call(arguments);P.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!V[a]?f.unique(e):e,(this.length>1||R.test(d))&&Q.test(a)&&(e=e.reverse());return this.pushStack(e,a,g.join(","))}}),f.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var Y=/ jQuery\d+="(?:\d+|null)"/g,Z=/^\s+/,$=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,_=/<([\w:]+)/,ba=/<tbody/i,bb=/<|&#?\w+;/,bc=/<(?:script|object|embed|option|style)/i,bd=/checked\s*(?:[^=]|=\s*.checked.)/i,be=/\/(java|ecma)script/i,bf=/^\s*<!(?:\[CDATA\[|\-\-)/,bg={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]};bg.optgroup=bg.option,bg.tbody=bg.tfoot=bg.colgroup=bg.caption=bg.thead,bg.th=bg.td,f.support.htmlSerialize||(bg._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){if(f.isFunction(a))return this.each(function(b){var c=f(this);c.text(a.call(this,b,c.text()))});if(typeof a!="object"&&a!==b)return this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a));return f.text(this)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapInner(a.call(this,b))});return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){return this.each(function(){f(this).wrapAll(a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f(arguments[0]);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,f(arguments[0]).toArray());return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){if(a===b)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(Y,""):null;if(typeof a=="string"&&!bc.test(a)&&(f.support.leadingWhitespace||!Z.test(a))&&!bg[(_.exec(a)||["",""])[1].toLowerCase()]){a=a.replace($,"<$1></$2>");try{for(var c=0,d=this.length;c<d;c++)this[c].nodeType===1&&(f.cleanData(this[c].getElementsByTagName("*")),this[c].innerHTML=a)}catch(e){this.empty().append(a)}}else f.isFunction(a)?this.each(function(b){var c=f(this);c.html(a.call(this,b,c.html()))}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!="string"&&(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bd.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bh(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}k.length&&f.each(k,bn)}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i=b&&b[0]?b[0].ownerDocument||b[0]:c;a.length===1&&typeof a[0]=="string"&&a[0].length<512&&i===c&&a[0].charAt(0)==="<"&&!bc.test(a[0])&&(f.support.checkClone||!bd.test(a[0]))&&(g=!0,h=f.fragments[a[0]],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&&(f.fragments[a[0]]=h?e:1);return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);return this}for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d=a.cloneNode(!0),e,g,h;if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bj(a,d),e=bk(a),g=bk(d);for(h=0;e[h];++h)bj(e[h],g[h])}if(b){bi(a,d);if(c){e=bk(a),g=bk(d);for(h=0;e[h];++h)bi(e[h],g[h])}}return d},clean:function(a,b,d,e){var g;b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||
b[0]&&b[0].ownerDocument||c);var h=[],i;for(var j=0,k;(k=a[j])!=null;j++){typeof k=="number"&&(k+="");if(!k)continue;if(typeof k=="string")if(!bb.test(k))k=b.createTextNode(k);else{k=k.replace($,"<$1></$2>");var l=(_.exec(k)||["",""])[1].toLowerCase(),m=bg[l]||bg._default,n=m[0],o=b.createElement("div");o.innerHTML=m[1]+k+m[2];while(n--)o=o.lastChild;if(!f.support.tbody){var p=ba.test(k),q=l==="table"&&!p?o.firstChild&&o.firstChild.childNodes:m[1]==="<table>"&&!p?o.childNodes:[];for(i=q.length-1;i>=0;--i)f.nodeName(q[i],"tbody")&&!q[i].childNodes.length&&q[i].parentNode.removeChild(q[i])}!f.support.leadingWhitespace&&Z.test(k)&&o.insertBefore(b.createTextNode(Z.exec(k)[0]),o.firstChild),k=o.childNodes}var r;if(!f.support.appendChecked)if(k[0]&&typeof (r=k.length)=="number")for(i=0;i<r;i++)bm(k[i]);else bm(k);k.nodeType?h.push(k):h=f.merge(h,k)}if(d){g=function(a){return!a.type||be.test(a.type)};for(j=0;h[j];j++)if(e&&f.nodeName(h[j],"script")&&(!h[j].type||h[j].type.toLowerCase()==="text/javascript"))e.push(h[j].parentNode?h[j].parentNode.removeChild(h[j]):h[j]);else{if(h[j].nodeType===1){var s=f.grep(h[j].getElementsByTagName("script"),g);h.splice.apply(h,[j+1,0].concat(s))}d.appendChild(h[j])}}return h},cleanData:function(a){var b,c,d=f.cache,e=f.expando,g=f.event.special,h=f.support.deleteExpando;for(var i=0,j;(j=a[i])!=null;i++){if(j.nodeName&&f.noData[j.nodeName.toLowerCase()])continue;c=j[f.expando];if(c){b=d[c]&&d[c][e];if(b&&b.events){for(var k in b.events)g[k]?f.event.remove(j,k):f.removeEvent(j,k,b.handle);b.handle&&(b.handle.elem=null)}h?delete j[f.expando]:j.removeAttribute&&j.removeAttribute(f.expando),delete d[c]}}}});var bo=/alpha\([^)]*\)/i,bp=/opacity=([^)]*)/,bq=/-([a-z])/ig,br=/([A-Z]|^ms)/g,bs=/^-?\d+(?:px)?$/i,bt=/^-?\d/,bu=/^[+\-]=/,bv=/[^+\-\.\de]+/g,bw={position:"absolute",visibility:"hidden",display:"block"},bx=["Left","Right"],by=["Top","Bottom"],bz,bA,bB,bC=function(a,b){return b.toUpperCase()};f.fn.css=function(a,c){if(arguments.length===2&&c===b)return this;return f.access(this,a,c,!0,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)})},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bz(a,"opacity","opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{zIndex:!0,fontWeight:!0,opacity:!0,zoom:!0,lineHeight:!0,widows:!0,orphans:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b){if(k&&"get"in k&&(g=k.get(a,!1,e))!==b)return g;return j[c]}h=typeof d;if(h==="number"&&isNaN(d)||d==null)return;h==="string"&&bu.test(d)&&(d=+d.replace(bv,"")+parseFloat(f.css(a,c))),h==="number"&&!f.cssNumber[i]&&(d+="px");if(!k||!("set"in k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");if(g&&"get"in g&&(e=g.get(a,!0,d))!==b)return e;if(bz)return bz(a,c)},swap:function(a,b,c){var d={};for(var e in b)d[e]=a.style[e],a.style[e]=b[e];c.call(a);for(e in b)a.style[e]=d[e]},camelCase:function(a){return a.replace(bq,bC)}}),f.curCSS=f.css,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){var e;if(c){a.offsetWidth!==0?e=bD(a,b,d):f.swap(a,bw,function(){e=bD(a,b,d)});if(e<=0){e=bz(a,b,b),e==="0px"&&bB&&(e=bB(a,b,b));if(e!=null)return e===""||e==="auto"?"0px":e}if(e<0||e==null){e=a.style[b];return e===""||e==="auto"?"0px":e}return typeof e=="string"?e:e+"px"}},set:function(a,b){if(!bs.test(b))return b;b=parseFloat(b);if(b>=0)return b+"px"}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return bp.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle;c.zoom=1;var e=f.isNaN(b)?"":"alpha(opacity="+b*100+")",g=d&&d.filter||c.filter||"";c.filter=bo.test(g)?g.replace(bo,e):g+" "+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){var c;f.swap(a,{display:"inline-block"},function(){b?c=bz(a,"margin-right","marginRight"):c=a.style.marginRight});return c}})}),c.defaultView&&c.defaultView.getComputedStyle&&(bA=function(a,c){var d,e,g;c=c.replace(br,"-$1").toLowerCase();if(!(e=a.ownerDocument.defaultView))return b;if(g=e.getComputedStyle(a,null))d=g.getPropertyValue(c),d===""&&!f.contains(a.ownerDocument.documentElement,a)&&(d=f.style(a,c));return d}),c.documentElement.currentStyle&&(bB=function(a,b){var c,d=a.currentStyle&&a.currentStyle[b],e=a.runtimeStyle&&a.runtimeStyle[b],f=a.style;!bs.test(d)&&bt.test(d)&&(c=f.left,e&&(a.runtimeStyle.left=a.currentStyle.left),f.left=b==="fontSize"?"1em":d||0,d=f.pixelLeft+"px",f.left=c,e&&(a.runtimeStyle.left=e));return d===""?"auto":d}),bz=bA||bB,f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style.display||f.css(a,"display"))==="none"},f.expr.filters.visible=function(a){return!f.expr.filters.hidden(a)});var bE=/%20/g,bF=/\[\]$/,bG=/\r?\n/g,bH=/#.*$/,bI=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bJ=/^(?:color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bK=/^(?:about|app|app\-storage|.+\-extension|file|widget):$/,bL=/^(?:GET|HEAD)$/,bM=/^\/\//,bN=/\?/,bO=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bP=/^(?:select|textarea)/i,bQ=/\s+/,bR=/([?&])_=[^&]*/,bS=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bT=f.fn.load,bU={},bV={},bW,bX;try{bW=e.href}catch(bY){bW=c.createElement("a"),bW.href="",bW=bW.href}bX=bS.exec(bW.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!="string"&&bT)return bT.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var g=a.slice(e,a.length);a=a.slice(0,e)}var h="GET";c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));var i=this;f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?f("<div>").append(c.replace(bO,"")).find(g):c)),d&&i.each(d,[c,b,a])}});return this},serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bP.test(this.nodeName)||bJ.test(this.type))}).map(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bG,"\r\n")}}):{name:b.name,value:c.replace(bG,"\r\n")}}).get()}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){f.fn[b]=function(a){return this.bind(b,a)}}),f.each(["get","post"],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&&(g=g||e,e=d,d=b);return f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")},getJSON:function(a,b,c){return f.get(a,b,c,"json")},ajaxSetup:function(a,b){b?f.extend(!0,a,f.ajaxSettings,b):(b=a,a=f.extend(!0,f.ajaxSettings,b));for(var c in{context:1,url:1})c in b?a[c]=b[c]:c in f.ajaxSettings&&(a[c]=f.ajaxSettings[c]);return a},ajaxSettings:{url:bW,isLocal:bK.test(bX[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":"*/*"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML}},ajaxPrefilter:bZ(bU),ajaxTransport:bZ(bV),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a?4:0;var o,r,u,w=l?ca(d,v,l):b,x,y;if(a>=200&&a<300||a===304){if(d.ifModified){if(x=v.getResponseHeader("Last-Modified"))f.lastModified[k]=x;if(y=v.getResponseHeader("Etag"))f.etag[k]=y}if(a===304)c="notmodified",o=!0;else try{r=cb(d,w),c="success",o=!0}catch(z){c="parsererror",u=z}}else{u=c;if(!c||a)c="error",a<0&&(a=0)}v.status=a,v.statusText=c,o?h.resolveWith(e,[r,c,v]):h.rejectWith(e,[v,c,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.resolveWith(e,[v,c]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))}}typeof a=="object"&&(c=a,a=b),c=c||{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f._Deferred(),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=bI.exec(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){s||(d.mimeType=a);return this},abort:function(a){a=a||"abort",p&&p.abort(a),w(0,a);return this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.done,v.statusCode=function(a){if(a){var b;if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)}return this},d.url=((a||d.url)+"").replace(bH,"").replace(bM,bX[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bQ),d.crossDomain==null&&(r=bS.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bX[1]&&r[2]==bX[2]&&(r[3]||(r[1]==="http:"?80:443))==(bX[3]||(bX[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),b$(bU,d,c,v);if(s===2)return!1;t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bL.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");if(!d.hasContent){d.data&&(d.url+=(bN.test(d.url)?"&":"?")+d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url.replace(bR,"$1_="+x);d.url=y+(y===d.url?(bN.test(d.url)?"&":"?")+"_="+x:"")}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", */*; q=0.01":""):d.accepts["*"]);for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(d.beforeSend&&(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();return!1}for(u in{success:1,error:1,complete:1})v[u](d[u]);p=b$(bV,d,c,v);if(!p)w(-1,"No Transport");else{v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")},d.timeout));try{s=1,p.send(l,w)}catch(z){status<2?w(-1,z):f.error(z)}}return v},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=f.ajaxSettings.traditional);if(f.isArray(a)||a.jquery&&!f.isPlainObject(a))f.each(a,function(){e(this.name,this.value)});else for(var g in a)b_(g,a[g],c,e);return d.join("&").replace(bE,"+")}}),f.extend({active:0,lastModified:{},etag:{}});var cc=f.now(),cd=/(\=)\?(&|$)|\?\?/i;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+cc++}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=b.contentType==="application/x-www-form-urlencoded"&&typeof b.data=="string";if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(cd.test(b.url)||e&&cd.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";b.jsonp!==!1&&(j=j.replace(cd,l),b.url===j&&(e&&(k=k.replace(cd,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])}),b.converters["script json"]=function(){g||f.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){f.globalEval(a);return a}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),f.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var ce=a.ActiveXObject?function(){for(var a in cg)cg[a](0,1)}:!1,cf=0,cg;f.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&ch()||ci()}:ch,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(f.ajaxSettings.xhr()),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(j in e)h.setRequestHeader(j,e[j])}catch(k){}h.send(c.hasContent&&c.data||null),d=function(a,e){var j,k,l,m,n;try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.noop,ce&&delete cg[i]);if(e)h.readyState!==4&&h.abort();else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n),m.text=h.responseText;try{k=h.statusText}catch(o){k=""}!j&&c.isLocal&&!c.crossDomain?j=m.text?200:404:j===1223&&(j=204)}}}catch(p){e||g(-1,p)}m&&g(j,k,m,l)},!c.async||h.readyState===4?d():(i=++cf,ce&&(cg||(cg={},f(a).unload(ce)),cg[i]=d),h.onreadystatechange=d)},abort:function(){d&&d(0,1)}}}});var cj={},ck,cl,cm=/^(?:toggle|show|hide)$/,cn=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,co,cp=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cq,cr=a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame||a.oRequestAnimationFrame;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0)return this.animate(cu("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),e===""&&f.css(d,"display")==="none"&&f._data(d,"olddisplay",cv(d.nodeName)));for(g=0;g<h;g++){d=this[g];if(d.style){e=d.style.display;if(e===""||e==="none")d.style.display=f._data(d,"olddisplay")||""}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(cu("hide",3),a,b,c);for(var d=0,e=this.length;d<e;d++)if(this[d].style){var g=f.css(this[d],"display");g!=="none"&&!f._data(this[d],"olddisplay")&&f._data(this[d],"olddisplay",g)}for(d=0;d<e;d++)this[d].style&&(this[d].style.display="none");return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean";f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(":hidden");f(this)[b?"show":"hide"]()}):this.animate(cu("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=f.speed(b,c,d);if(f.isEmptyObject(a))return this.each(e.complete,[!1]);a=f.extend({},a);return this[e.queue===!1?"each":"queue"](function(){e.queue===!1&&f._mark(this);var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o;b.animatedProperties={};for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]),h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&d||h==="show"&&!d)return b.complete.call(this);c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(f.support.inlineBlockNeedsLayout?(j=cv(this.nodeName),j==="inline"?this.style.display="inline-block":(this.style.display="inline",this.style.zoom=1)):this.style.display="inline-block"))}b.overflow!=null&&(this.style.overflow="hidden");for(i in a)k=new f.fx(this,b,i),h=a[i],cm.test(h)?k[h==="toggle"?d?"show":"hide":h]():(l=cn.exec(h),m=k.cur(),l?(n=parseFloat(l[2]),o=l[3]||(f.cssNumber[i]?"":"px"),o!=="px"&&(f.style(this,i,(n||1)+o),m=(n||1)/k.cur()*m,f.style(this,i,m+o)),l[1]&&(n=(l[1]==="-="?-1:1)*n+m),k.custom(m,n,o)):k.custom(m,h,""));return!0})},stop:function(a,b){a&&this.queue([]),this.each(function(){var a=f.timers,c=a.length;b||f._unmark(!0,this);while(c--)a[c].elem===this&&(b&&a[c](!0),a.splice(c,1))}),b||this.dequeue();return this}}),f.each({slideDown:cu("show",1),slideUp:cu("hide",1),slideToggle:cu("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default,d.old=d.complete,d.complete=function(a){d.queue!==!1?f.dequeue(this):a!==!1&&f._unmark(this),f.isFunction(d.old)&&d.old.call(this)};return d},easing:{linear:function(a,b,c,d){return c+d*a},swing:function(a,b,c,d){return(-Math.cos(a*Math.PI)/2+.5)*d+c}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,b,c){function h(a){return d.step(a)}var d=this,e=f.fx,g;this.startTime=cq||cs(),this.start=a,this.end=b,this.unit=c||this.unit||(f.cssNumber[this.prop]?"":"px"),this.now=this.start,this.pos=this.state=0,h.elem=this.elem,h()&&f.timers.push(h)&&!co&&(cr?(co=1,g=function(){co&&(cr(g),e.tick())},cr(g)):co=setInterval(e.tick,e.interval))},show:function(){this.options.orig[this.prop]=f.style(this.elem,this.prop),this.options.show=!0,this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b=cq||cs(),c=!0,d=this.elem,e=this.options,g,h;if(a||b>=e.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),e.animatedProperties[this.prop]=!0;for(g in e.animatedProperties)e.animatedProperties[g]!==!0&&(c=!1);if(c){e.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){d.style["overflow"+b]=e.overflow[a]}),e.hide&&f(d).hide();if(e.hide||e.show)for(var i in e.animatedProperties)f.style(d,i,e.orig[i]);e.complete.call(d)}return!1}e.duration==Infinity?this.now=b:(h=b-this.startTime,this.state=h/e.duration,this.pos=f.easing[e.animatedProperties[this.prop]](this.state,h,0,1,e.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();return!0}},f.extend(f.fx,{tick:function(){for(var a=f.timers,b=0;b<a.length;++b)a[b]()||a.splice(b--,1);a.length||f.fx.stop()},interval:13,stop:function(){clearInterval(co),co=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=(a.prop==="width"||a.prop==="height"?Math.max(0,a.now):a.now)+a.unit:a.elem[a.prop]=a.now}}}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem}).length});var cw=/^t(?:able|d|h)$/i,cx=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?f.fn.offset=function(a){var b=this[0],c;if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);try{c=b.getBoundingClientRect()}catch(d){}var e=b.ownerDocument,g=e.documentElement;if(!c||!f.contains(g,b))return c?{top:c.top,left:c.left}:{top:0,left:0};var h=e.body,i=cy(e),j=g.clientTop||h.clientTop||0,k=g.clientLeft||h.clientLeft||0,l=i.pageYOffset||f.support.boxModel&&g.scrollTop||h.scrollTop,m=i.pageXOffset||f.support.boxModel&&g.scrollLeft||h.scrollLeft,n=c.top+l-j,o=c.left+m-k;return{top:n,left:o}}:f.fn.offset=function(a){var b=this[0];if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);f.offset.initialize();var c,d=b.offsetParent,e=b,g=b.ownerDocument,h=g.documentElement,i=g.body,j=g.defaultView,k=j?j.getComputedStyle(b,null):b.currentStyle,l=b.offsetTop,m=b.offsetLeft;while((b=b.parentNode)&&b!==i&&b!==h){if(f.offset.supportsFixedPosition&&k.position==="fixed")break;c=j?j.getComputedStyle(b,null):b.currentStyle,l-=b.scrollTop,m-=b.scrollLeft,b===d&&(l+=b.offsetTop,m+=b.offsetLeft,f.offset.doesNotAddBorder&&(!f.offset.doesAddBorderForTableAndCells||!cw.test(b.nodeName))&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),e=d,d=b.offsetParent),f.offset.subtractsBorderForOverflowNotVisible&&c.overflow!=="visible"&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),k=c}if(k.position==="relative"||k.position==="static")l+=i.offsetTop,m+=i.offsetLeft;f.offset.supportsFixedPosition&&k.position==="fixed"&&(l+=Math.max(h.scrollTop,i.scrollTop),m+=Math.max(h.scrollLeft,i.scrollLeft));return{top:l,left:m}},f.offset={initialize:function(){var a=c.body,b=c.createElement("div"),d,e,g,h,i=parseFloat(f.css(a,"marginTop"))||0,j="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";f.extend(b.style,{position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"}),b.innerHTML=j,a.insertBefore(b,a.firstChild),d=b.firstChild,e=d.firstChild,h=d.nextSibling.firstChild.firstChild,this.doesNotAddBorder=e.offsetTop!==5,this.doesAddBorderForTableAndCells=h.offsetTop===5,e.style.position="fixed",e.style.top="20px",this.supportsFixedPosition=e.offsetTop===20||e.offsetTop===15,e.style.position=e.style.top="",d.style.overflow="hidden",d.style.position="relative",this.subtractsBorderForOverflowNotVisible=e.offsetTop===-5,this.doesNotIncludeMarginInBodyOffset=a.offsetTop!==i,a.removeChild(b),f.offset.initialize=f.noop},bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;f.offset.initialize(),f.offset.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var d=f.css(a,"position");d==="static"&&(a.style.position="relative");var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=cx.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0;return{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&!cx.test(a.nodeName)&&f.css(a,"position")==="static")a=a.offsetParent;return a})}}),f.each(["Left","Top"],function(a,c){var d="scroll"+c;f.fn[d]=function(c){var e,g;if(c===b){e=this[0];if(!e)return null;g=cy(e);return g?"pageXOffset"in g?g[a?"pageYOffset":"pageXOffset"]:f.support.boxModel&&g.document.documentElement[d]||g.document.body[d]:e[d]}return this.each(function(){g=cy(this),g?g.scrollTo(a?f(g).scrollLeft():c,a?c:f(g).scrollTop()):this[d]=c})}}),f.each(["Height","Width"],function(a,c){var d=c.toLowerCase();f.fn["inner"+c]=function(){return this[0]?parseFloat(f.css(this[0],d,"padding")):null},f.fn["outer"+c]=function(a){return this[0]?parseFloat(f.css(this[0],d,a?"margin":"border")):null},f.fn[d]=function(a){var e=this[0];if(!e)return a==null?null:this;if(f.isFunction(a))return this.each(function(b){var c=f(this);c[d](a.call(this,b,c[d]()))});if(f.isWindow(e)){var g=e.document.documentElement["client"+c];return e.document.compatMode==="CSS1Compat"&&g||e.document.body["client"+c]||g}if(e.nodeType===9)return Math.max(e.documentElement["client"+c],e.body["scroll"+c],e.documentElement["scroll"+c],e.body["offset"+c],e.documentElement["offset"+c]);if(a===b){var h=f.css(e,d),i=parseFloat(h);return f.isNaN(i)?h:i}return this.css(d,typeof a=="string"?a:a+"px")}}),a.jQuery=a.$=f})(window);

(function($){ 		  
	$.fn.popupWindow = function(instanceSettings){
		
		return this.each(function(){
		
		$(this).click(function(){
		
		$.fn.popupWindow.defaultSettings = {
			centerBrowser:0, // center window over browser window? {1 (YES) or 0 (NO)}. overrides top and left
			centerScreen:0, // center window over entire screen? {1 (YES) or 0 (NO)}. overrides top and left
			height:800, // sets the height in pixels of the window.
			left:0, // left position when the window appears.
			location:0, // determines whether the address bar is displayed {1 (YES) or 0 (NO)}.
			menubar:0, // determines whether the menu bar is displayed {1 (YES) or 0 (NO)}.
			resizable:0, // whether the window can be resized {1 (YES) or 0 (NO)}. Can also be overloaded using resizable.
			scrollbars:0, // determines whether scrollbars appear on the window {1 (YES) or 0 (NO)}.
			status:0, // whether a status line appears at the bottom of the window {1 (YES) or 0 (NO)}.
			width:500, // sets the width in pixels of the window.
			windowName:null, // name of window set from the name attribute of the element that invokes the click
			windowURL:null, // url used for the popup
			top:0, // top position when the window appears.
			toolbar:0 // determines whether a toolbar (includes the forward and back buttons) is displayed {1 (YES) or 0 (NO)}.
		};
		
		settings = $.extend({}, $.fn.popupWindow.defaultSettings, instanceSettings || {});
		
		var windowFeatures =    'height=' + settings.height +
								',width=' + settings.width +
								',toolbar=' + settings.toolbar +
								',scrollbars=' + settings.scrollbars +
								',status=' + settings.status + 
								',resizable=' + settings.resizable +
								',location=' + settings.location +
								',menuBar=' + settings.menubar;

				settings.windowName = this.name || settings.windowName;
				settings.windowURL = this.href || settings.windowURL;
				var centeredY,centeredX;
			
				if(settings.centerBrowser){
						
					if ($.browser.msie) {//hacked together for IE browsers
						centeredY = (window.screenTop - 120) + ((((document.documentElement.clientHeight + 120)/2) - (settings.height/2)));
						centeredX = window.screenLeft + ((((document.body.offsetWidth + 20)/2) - (settings.width/2)));
					}else{
						centeredY = window.screenY + (((window.outerHeight/2) - (settings.height/2)));
						centeredX = window.screenX + (((window.outerWidth/2) - (settings.width/2)));
					}
					window.open(settings.windowURL, settings.windowName, windowFeatures+',left=' + centeredX +',top=' + centeredY).focus();
				}else if(settings.centerScreen){
					centeredY = (screen.height - settings.height)/2;
					centeredX = (screen.width - settings.width)/2;
					window.open(settings.windowURL, settings.windowName, windowFeatures+',left=' + centeredX +',top=' + centeredY).focus();
				}else{
					window.open(settings.windowURL, settings.windowName, windowFeatures+',left=' + settings.left +',top=' + settings.top).focus();	
				}
				return false;
			});
			
		});	
	};
})(jQuery);


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


function isDecDigit(digit) {
   var decVals = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
   var len = decVals.length;
   var i = 0;
   var ret = false;

   for ( i = 0; i < len; i++ )
      if ( digit == decVals[i] ) break;

   if ( i < len )
      ret = true;

   return ret;
}


function isHexaDigit(digit) {
   var hexVals = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
                           "A", "B", "C", "D", "E", "F", "a", "b", "c", "d", "e", "f");
   var len = hexVals.length;
   var i = 0;
   var ret = false;

   for ( i = 0; i < len; i++ )
      if ( digit == hexVals[i] ) break;

   if ( i < len )
      ret = true;

   return ret;
}

function isValidKey(val, size) {
   var ret = false;
   var len = val.length;
   var dbSize = size * 2;
   var i = 0;
   //__Qwest__, only allow hex wep key 
   /*if ( len == size )
      ret = true;
   else*/ if ( len == dbSize ) {
      for ( i = 0; i < dbSize; i++ )
         if ( isHexaDigit(val.charAt(i)) == false )
            break;
      if ( i == dbSize )
         ret = true;
   } else
      ret = false;

   return ret;
}

function isValidDecKey(val)
{
    var i=0;
    for(i = 0; i < val.length; i++ )
    {
	if ( isDecDigit(val.charAt(i)) == false ) 
            return false;
    }
    
    return true; 
}
function isValidHexKey(val, size) {
   var ret = false;
   var i = 0;
   if (val.length == size) {
      for ( i = 0; i < val.length; i++ ) {
         if ( isHexaDigit(val.charAt(i)) == false ) {
            break;
         }
      }
      if ( i == val.length ) {
         ret = true;
      }
   }

   return ret;
}


function isNameUnsafe(compareChar) {
   var unsafeString = "\"<>%\\^[]`\+\$\,='#&@.:;!()*/? \t";
   if ( compareChar == null || compareChar == '' ) {
   	  return true;
   }
	
   if ( unsafeString.indexOf(compareChar) == -1 && compareChar.charCodeAt(0) > 32
        && compareChar.charCodeAt(0) < 123 )
      return false; // found no unsafe chars, return false
   else
      return true;
}   

// Check if a name valid
function isValidName(name) {
   var i = 0;	
   
   for ( i = 0; i < name.length; i++ ) {
      if ( isNameUnsafe(name.charAt(i)) == true )
         return false;
   }

   return true;
}

function isValidRuleName(name){
   var i = 0;
   var charCode;

    if(name.length > 20)
		return false;
    for ( i = 0; i < name.length; i++ ){
		charCode = name.charAt(i);
        if(charCode.charCodeAt(0) <= 32 || charCode.charCodeAt(0) >= 123)
			return false;
    }

    return true;
}

// same as is isNameUnsafe but allow spaces
function isCharUnsafe(compareChar) {
   var unsafeString = "\"<>%\\^[]`\+\$\,='#&@.:;\t";
	
   if ( unsafeString.indexOf(compareChar) == -1 && compareChar.charCodeAt(0) >= 32
        && compareChar.charCodeAt(0) < 123 )
      return false; // found no unsafe chars, return false
   else
      return true;
}   

function isValidNameWSpace(name) {
   var i = 0;	
   
   for ( i = 0; i < name.length; i++ ) {
      if ( isCharUnsafe(name.charAt(i)) == true )
         return false;
   }

   return true;
}

// same as is isNameUnsafe but allow spaces
function isAppCharUnsafe(compareChar) {
   var unsafeString = "\"<>%\\^[]`\+\$\,='&@:;!()*?\t";
	
   if ( unsafeString.indexOf(compareChar) == -1 && compareChar.charCodeAt(0) >= 32
        && compareChar.charCodeAt(0) < 123 )
      return false; // found no unsafe chars, return false
   else
      return true;
}   

function isAppValidName(name) {
   var i = 0;	
   
   for ( i = 0; i < name.length; i++ ) {
      if ( isAppCharUnsafe(name.charAt(i)) == true )
         return false;
   }

   return true;
}

function isSameSubNet(lan1Ip, lan1Mask, lan2Ip, lan2Mask) {
   var i = 0;
   var count = 0;
   
   lan1a = lan1Ip.split('.');
   lan1m = lan1Mask.split('.');
   lan2a = lan2Ip.split('.');
   lan2m = lan2Mask.split('.');

   for (i = 0; i < 4; i++) {
      l1a_n = parseInt(lan1a[i]);
      l1m_n = parseInt(lan1m[i]);
      l2a_n = parseInt(lan2a[i]);
      l2m_n = parseInt(lan2m[i]);
      if ((l1a_n & l1m_n) == (l2a_n & l2m_n))
         count++;
   }
   if (count == 4)
      return true;
   else
      return false;
}

function isNetworkAddress(lanIp, lanMask) {

   var count = 0;
   var i;
   var lan, lanm;

   lan = lanIp.split('.');
   lanm = lanMask.split('.');

   for (i = 0; i < 4; i++) {
      la_n = parseInt(lan[i]);
      lm_n = parseInt(lanm[i]);
      if ((la_n & lm_n) == la_n)
         count++;
   }
   if (count == 4)
      return true;
   else
      return false;
}

function isValidIpAddress(address) {
   var i = 0;

   if ( address == '0.0.0.0' ||
        address == '255.255.255.255' )
      return false;

   addrParts = address.split('.');
   if ( addrParts.length != 4 ) return false;
   for (i = 0; i < 4; i++) {
      if (isNaN(addrParts[i]) || addrParts[i] =="")
         return false;
      num = parseInt(addrParts[i]);
      if ( num < 0 || num > 255 )
         return false;
   }
   return true;
}

function isValidIpAddress6(address) {
   var i = 0, num = 0;

   addrParts = address.split(':');
   if (addrParts.length < 3 || addrParts.length > 8)
      return false;
   for (i = 0; i < addrParts.length; i++) {
      if ( addrParts[i] != "" )
         num = parseInt(addrParts[i], 16);

	  for(j=0; j < addrParts[i].length; j++){ 
	      if(isHexaDigit(addrParts[i].charAt(j))==false)
	      	return false;
	  }
               
      if ( i == 0 ) {
//         if ( (num & 0xf000) == 0xf000 )
//            return false;	//can not be link-local, site-local or multicast address
      }
      else if ( (i==0) && (i + 1) == addrParts.length) {
         if ( num == 0 || num == 1)
            return false;	//can not be unspecified or loopback address
      }
     
//      if ( num != 0 )
//         break;
   }
   return true;
}
//__MSTC__, Loujia 0828 Lan ulaprefix S_
function isValidULAPrefix(address) {
   var i = 0, num = 0;

   addrParts = address.split(':');
   if (addrParts.length < 3 || addrParts.length > 8)
      return false;
   
   if(addrParts[0].charAt(0)!="f" && (addrParts[0].charAt(1)!="d" && addrParts[0].charAt(1)!="c"))
   	  return false;
   
   for (i = 0; i < addrParts.length; i++) {
      if ( addrParts[i] != "" )
         num = parseInt(addrParts[i], 16);

	  for(j=0; j < addrParts[i].length; j++){ 
	      if(isHexaDigit(addrParts[i].charAt(j))==false)
	      	return false;
	  }
               
      if ( i == 0 ) {
//         if ( (num & 0xf000) == 0xf000 )
//            return false;	//can not be link-local, site-local or multicast address
      }
      else if ( (i==0) && (i + 1) == addrParts.length) {
         if ( num == 0 || num == 1)
            return false;	//can not be unspecified or loopback address
      }
     
//      if ( num != 0 )
//         break;
   }
   return true;
}
//__MSTC__, Loujia 0828 Lan ulaprefix E_
function isValidPrefixLength(prefixLen) {
   var num;

   num = parseInt(prefixLen);
   if (num <= 0 || num > 128)
      return false;
   return true;
}

function isValidPrefixLengthWithPrefix(prefixLen,prefix) {
   var num;

   num = parseInt(prefixLen);
   //if (num <= 0 || num > 128)
   if (num <= 0 || num > 64)
      return false;
      
   prefixParts = prefix.split(':'); 
   if(prefixLen < 16*(prefixParts .length-2))
   	return false;   	
      
   return true;
}

function areSamePrefix(addr1, addr2) {
   var i, j;
   var a = [0, 0, 0, 0, 0, 0, 0, 0];
   var b = [0, 0, 0, 0, 0, 0, 0, 0];

   addr1Parts = addr1.split(':');
   if (addr1Parts.length < 3 || addr1Parts.length > 8)
      return false;
   addr2Parts = addr2.split(':');
   if (addr2Parts.length < 3 || addr2Parts.length > 8)
      return false;
   j = 0;
   for (i = 0; i < addr1Parts.length; i++) {
      if ( addr1Parts[i] == "" ) {
		 if ((i != 0) && (i+1 != addr1Parts.length)) {
			j = j + (8 - addr1Parts.length + 1);
		 }
		 else {
		    j++;
		 }
	  }
	  else {
         a[j] = parseInt(addr1Parts[i], 16);
		 j++;
	  }
   }
   j = 0;
   for (i = 0; i < addr2Parts.length; i++) {
      if ( addr2Parts[i] == "" ) {
		 if ((i != 0) && (i+1 != addr2Parts.length)) {
			j = j + (8 - addr2Parts.length + 1);
		 }
		 else {
		    j++;
		 }
	  }
	  else {
         b[j] = parseInt(addr2Parts[i], 16);
		 j++;
	  }
   }
   //only compare 64 bit prefix
   for (i = 0; i < 4; i++) {
      if (a[i] != b[i]) {
	     return false;
	  }
   }
   return true;
}

function getLeftMostZeroBitPos(num) {
   var i = 0;
   var numArr = [128, 64, 32, 16, 8, 4, 2, 1];

   for ( i = 0; i < numArr.length; i++ )
      if ( (num & numArr[i]) == 0 )
         return i;

   return numArr.length;
}

function getRightMostOneBitPos(num) {
   var i = 0;
   var numArr = [1, 2, 4, 8, 16, 32, 64, 128];

   for ( i = 0; i < numArr.length; i++ )
      if ( ((num & numArr[i]) >> i) == 1 )
         return (numArr.length - i - 1);

   return -1;
}

function isValidSubnetMask(mask) {
   var i = 0, num = 0;
   var zeroBitPos = 0, oneBitPos = 0;
   var zeroBitExisted = false;

   if ( mask == '0.0.0.0' )
      return false;

   maskParts = mask.split('.');
   if ( maskParts.length != 4 ) return false;

   for (i = 0; i < 4; i++) {
      if ( isNaN(maskParts[i]) || maskParts[i] =="" )
         return false;
      num = parseInt(maskParts[i]);
      if ( num < 0 || num > 255 )
         return false;
      if ( zeroBitExisted == true && num != 0 )
         return false;
      zeroBitPos = getLeftMostZeroBitPos(num);
      oneBitPos = getRightMostOneBitPos(num);
      if ( zeroBitPos < oneBitPos )
         return false;
      if ( zeroBitPos < 8 )
         zeroBitExisted = true;
   }

   return true;
}

function isValidPort(port) {
   var fromport = 1;
   var toport = 100;

   portrange = port.split(':');
   if ( portrange.length < 1 || portrange.length > 2 ) {
       return false;
   }

   if ( isNaN(portrange[0]) )
       return false;
   fromport = parseInt(portrange[0]);
   if ( isNaN(fromport) )
       return false;
   
   if ( portrange.length > 1 ) {
       if ( isNaN(portrange[1]) )
          return false;
       toport = parseInt(portrange[1]);
       if ( isNaN(toport) )
          return false;
       if ( toport < fromport )
           return false;      
   }
   
   if ( fromport < 1 || fromport > 65535 || toport < 1 || toport > 65535 )
       return false;
   
   return true;
}

function isValidNatPort(port) {
   var fromport = 0;
   var toport = 100;

   portrange = port.split('-');
   if ( portrange.length < 1 || portrange.length > 2 ) {
       return false;
   }
   if ( isNaN(portrange[0]) )
       return false;
   fromport = parseInt(portrange[0]);

   if ( portrange.length > 1 ) {
       if ( isNaN(portrange[1]) )
          return false;
       toport = parseInt(portrange[1]);
       if ( toport <= fromport )
           return false;
   }

   if ( fromport < 0 || fromport > 65535 || toport < 0 || toport > 65535 )
       return false;

   return true;
}

function isValidMacAddress(address) {
   var c = '';
   var num = 0;
   var i = 0, j = 0;
   var zeros = 0;

   addrParts = address.split(':');
   if ( addrParts.length != 6 ) return false;

   for (i = 0; i < 6; i++) {
      if ( addrParts[i] == '' )
         return false;
	  if(addrParts[i].length != 2)
		 return false;
      for ( j = 0; j < addrParts[i].length; j++ ) {
         c = addrParts[i].toLowerCase().charAt(j);
         if ( (c >= '0' && c <= '9') ||
              (c >= 'a' && c <= 'f') )
            continue;
         else
            return false;
      }

      num = parseInt(addrParts[i], 16);
      if ( num == NaN || num < 0 || num > 255 )
         return false;
      if ( num == 0 )
         zeros++;
   }
   if (zeros == 6)
      return false;

   return true;
}

function isValidMacMask(mask) {
   var c = '';
   var num = 0;
   var i = 0, j = 0;
   var zeros = 0;
   var zeroBitPos = 0, oneBitPos = 0;
   var zeroBitExisted = false;

   maskParts = mask.split(':');
   if ( maskParts.length != 6 ) return false;

   for (i = 0; i < 6; i++) {
      if ( maskParts[i] == '' )
         return false;
      for ( j = 0; j < maskParts[i].length; j++ ) {
         c = maskParts[i].toLowerCase().charAt(j);
         if ( (c >= '0' && c <= '9') ||
              (c >= 'a' && c <= 'f') )
            continue;
         else
            return false;
      }

      num = parseInt(maskParts[i], 16);
      if ( num == NaN || num < 0 || num > 255 )
         return false;
      if ( zeroBitExisted == true && num != 0 )
         return false;
      if ( num == 0 )
         zeros++;
      zeroBitPos = getLeftMostZeroBitPos(num);
      oneBitPos = getRightMostOneBitPos(num);
      if ( zeroBitPos < oneBitPos )
         return false;
      if ( zeroBitPos < 8 )
         zeroBitExisted = true;
   }
   if (zeros == 6)
      return false;

   return true;
}

var hexVals = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
              "A", "B", "C", "D", "E", "F");
var unsafeString = "\"<>%\\^[]`\+\$\,'#&;";
// deleted these chars from the include list ";", "/", "?", ":", "@", "=", "&" and #
// so that we could analyze actual URLs

function isUnsafe(compareChar)
// this function checks to see if a char is URL unsafe.
// Returns bool result. True = unsafe, False = safe
{
   if ( unsafeString.indexOf(compareChar) == -1 && compareChar.charCodeAt(0) > 32
        && compareChar.charCodeAt(0) < 123 )
      return false; // found no unsafe chars, return false
   else
      return true;
}

function decToHex(num, radix)
// part of the hex-ifying functionality
{
   var hexString = "";
   while ( num >= radix ) {
      temp = num % radix;
      num = Math.floor(num / radix);
      hexString += hexVals[temp];
   }
   hexString += hexVals[num];
   return reversal(hexString);
}

function reversal(s)
// part of the hex-ifying functionality
{
   var i = 0;
   var len = s.length;
   var trans = "";
   for (i = 0; i < len; i++)
      trans = trans + s.substring(len-i-1, len-i);
   s = trans;
   return s;
}

function convert(val)
// this converts a given char to url hex form
{
   return  "%" + decToHex(val.charCodeAt(0), 16);
}

function isValidUrl(url){
   var i = 0;	
   
   for ( i = 0; i < url.length; i++ ) {
      if ( isUnsafe(url.charAt(i)) == true )
         return false;
   }
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
         // hack to eliminate the rest of unicode from this
         if (isUnsafe(val.substring(i,i+1)) == false)
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

function decodeSpecialChars(val)
{
	var decodeStr = "";
	
	decodeStr = val.replace(/&gt;/ig, ">");
	decodeStr = decodeStr.replace(/&lt;/ig, "<");
	decodeStr = decodeStr.replace(/&#39;/ig, "'");
	decodeStr = decodeStr.replace(/&#96;/ig, "`");
	decodeStr = decodeStr.replace(/&#36;/ig, "$");
	decodeStr = decodeStr.replace(/&#40;/ig, "(");
	decodeStr = decodeStr.replace(/&#41;/ig, ")");
	decodeStr = decodeStr.replace(/&#59;/ig, ";");
	decodeStr = decodeStr.replace(/&#34;/ig, "\"");
	decodeStr = decodeStr.replace(/&#124;/ig, "|");
	decodeStr = decodeStr.replace(/&#38;/ig, "&");
	decodeStr = decodeStr.replace(/&#47;/ig, "/");
	
	return decodeStr;
}

var markStrChars = "\"'";

// Checks to see if a char is used to mark begining and ending of string.
// Returns bool result. True = special, False = not special
function isMarkStrChar(compareChar)
{
   if ( markStrChars.indexOf(compareChar) == -1 )
      return false; // found no marked string chars, return false
   else
      return true;
}

// use backslash in front one of the escape codes to process
// marked string characters.
// Returns new process string
function processMarkStrChars(str) {
   var i = 0;
   var retStr = '';

   for ( i = 0; i < str.length; i++ ) {
      if ( isMarkStrChar(str.charAt(i)) == true )
         retStr += '\\';
      retStr += str.charAt(i);
   }

   return retStr;
}

// Web page manipulation functions

function showhide(element, sh)
{
    var status;
    if (sh == 1) {
        status = "block";
    }
    else {
        status = "none"
    }
    
	if (document.getElementById)
	{
		// standard
		document.getElementById(element).style.display = status;
	}
	else if (document.all)
	{
		// old IE
		document.all[element].style.display = status;
	}
	else if (document.layers)
	{
		// Netscape 4
		document.layers[element].display = status;
	}
}

// Load / submit functions

function getSelect(item)
{
	var idx;
	if (item.options.length > 0) {
	    idx = item.selectedIndex;
	    return item.options[idx].value;
	}
	else {
		return '';
    }
}

function setSelect(item, value)
{
	for (i=0; i<item.options.length; i++) {
        if (item.options[i].value == value) {
        	item.selectedIndex = i;
        	break;
        }
    }
}

function setCheck(item, value)
{
    if ( value == '1' ) {
         item.checked = true;
    } else {
         item.checked = false;
    }
}

function setDisable(item, value)
{
    if ( value == 1 || value == '1' ) {
         item.disabled = true;
    } else {
         item.disabled = false;
    }     
}

function submitText(item)
{
	return '&' + item.name + '=' + item.value;
}

function submitSelect(item)
{
	return '&' + item.name + '=' + getSelect(item);
}


function submitCheck(item)
{
	var val;
	if (item.checked == true) {
		val = 1;
	} 
	else {
		val = 0;
	}
	return '&' + item.name + '=' + val;
}

function processLongName( longname, limit ) {
	if(longname.length > limit )
	{
		var res = "";
		var i
		var counter = 0 ;
		for(i = 0 ; i <= longname.length ; i++)
		{
			counter++;
			if (longname.charAt(i) == " " || longname.charAt(i) == "-")
			{
				counter = 0;
			}
			res += longname.charAt(i);
			
			if (counter == limit)
			{
				res +="<br>";
				counter = 0;
			}
		}
		return res;
	}
	else 
	{
		return longname;
	}
}

function processLongNameselect( longname, limit ) {
	if(longname.length > limit ){
		var temp_name = longname.substring(0,limit-3);
		temp_name += "...";
		return temp_name;
	}
	else {
		return longname;
	}
}

function isHostNameUnsafe(compareChar) {
   var unsafeString = "\"<>%\\^[]`\+\$='#&\t(){}|/;";

   if ( unsafeString.indexOf(compareChar) == -1 && compareChar.charCodeAt(0) >= 32
        && compareChar.charCodeAt(0) < 123 )
      return false; // found no unsafe chars, return false
   else
      return true;
}

function isValidHostName(name) {
   var i = 0;

   for ( i = 0; i < name.length; i++ ) {
      if ( isHostNameUnsafe(name.charAt(i)) == true )
         return false;
   }

   return true;
}

function convertIPtoNumber(ipAddr) {
   var ip = ipAddr.split(".");

   return (((((((+ip[0]) * 256) + (+ip[1])) * 256) + (+ip[2])) * 256) + (+ip[3]));
}

function convertNumbertoIP(ipAddr) {
   var ip = ipAddr % 256;

   for (var i = 3 ; i > 0 ; i--) {
      ipAddr = Math.floor(ipAddr / 256);
      ip = ipAddr % 256 + '.' + ip;
   }

   return ip;
}

function isInternetHost(ipAddr) {
   var start_10 = convertIPtoNumber("10.0.0.0");
   var final_10 = convertIPtoNumber("10.255.255.255");
   var start_172 = convertIPtoNumber("172.16.0.0");
   var final_172 = convertIPtoNumber("172.31.255.255");
   var start_192 = convertIPtoNumber("192.168.0.0");
   var final_192 = convertIPtoNumber("192.168.255.255");
   var current_ip = convertIPtoNumber(ipAddr);

   if (!((current_ip >= start_10 && current_ip <= final_10) ||
       (current_ip >= start_172 && current_ip <= final_172) ||
       (current_ip >= start_192 && current_ip <= final_192))) {
      return true;
   }

   return false;
}

function substituteCharacter(str, oldCh, newCh) {
   var parts = str.split(oldCh);
   var newStr = "";

   for (var i = 0 ; i < (parts.length - 1) ; i++) {
      newStr = newStr + parts[i] + newCh;
   }

   newStr = newStr + parts[i];
   return newStr;
}

function generateMacByCharacters(str) {
   var newStr = "";

   var i = 0;
   while (i < str.length) {
      newStr = newStr + str.charAt(i);
      if ((((i + 1) % 2) == 0) && ((i + 1) < 12))
         newStr = newStr + ":";
      i++;
   }

   return newStr;
}

function  isNotNegativeInt(str){
    var   re=/^\d*$/; 
    return   re.test(str); 
}

function getSubnet(ip, mask){
   var ip_array = ip.split(".");
   var mask_array = mask.split(".");

   var domain_array = new Array(4);
   domain_array[0] = ip_array[0] & mask_array[0];
   domain_array[1] = ip_array[1] & mask_array[1];
   domain_array[2] = ip_array[2] & mask_array[2];
   domain_array[3] = ip_array[3] & mask_array[3];

   var setDomain = domain_array[0] + "." + domain_array[1] + "." + domain_array[2] + "." + domain_array[3];

   return setDomain;
}

function isPasswordUnsafe(compareChar) {
   var unsafeString = "\"<>'&|;+`$()%#";

   if ( unsafeString.indexOf(compareChar) == -1 && compareChar.charCodeAt(0) >= 32
        && compareChar.charCodeAt(0) < 123 )
      return false; // found no unsafe chars, return false
   else
      return true;
}

function isValidPassword(pwd){
   var i = 0;	
   
   for ( i = 0; i < pwd.length; i++ ) {
      if ( isPasswordUnsafe(pwd.charAt(i)) == true )
         return false;
   }
   return true;
}


(function($){$.fn.extend({hidePassword:function(f){return this.each(function(){var c=function(a){var a=$(a);var b=$("<input type='text' maxlength=64 size=30/>");b.insertAfter(a).attr({'class':a.attr('class'),'style':a.attr('style')});return b};var d=function($this,$that){$that.val($this.val())};var e=function(){if($checkbox.is(':checked')){d($clone,$this);$clone.hide();$this.show()}else{d($this,$clone);$clone.show();$this.hide()}};var $clone=c(this),$this=$(this),$checkbox=$(f);$checkbox.click(function(){e()});$this.keyup(function(){d($this,$clone)});$clone.keyup(function(){d($clone,$this)});e()})}})})(jQuery);

