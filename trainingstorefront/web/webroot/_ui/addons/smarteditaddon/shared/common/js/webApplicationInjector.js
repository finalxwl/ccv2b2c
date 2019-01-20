/*!
  * $script.js JS loader & dependency manager
  * https://github.com/ded/script.js
  * (c) Dustin Diaz 2014 | License MIT
  */
!function(t,e){"undefined"!=typeof module&&module.exports?module.exports=e():"function"==typeof define&&define.amd?define(e):this.$script=e()}(0,function(){function c(t,e){for(var n=0,o=t.length;n<o;++n)if(!e(t[n]))return i;return 1}function u(t,e){c(t,function(t){return!e(t)})}function f(t,e,n){function o(t){return t.call?t():g[t]}function a(){if(!--d)for(var t in g[i]=1,s&&s(),v)c(t.split("|"),o)&&!u(v[t],o)&&(v[t]=[])}t=t[m]?t:[t];var r=e&&e.call,s=r?e:n,i=r?t.join(""):e,d=t.length;return setTimeout(function(){u(t,function t(e,n){return null===e?a():(!n&&!/^https?:\/\//.test(e)&&p&&(e=-1===e.indexOf(".js")?p+e+".js":p+e),y[e]?(i&&(w[i]=1),2==y[e]?a():setTimeout(function(){t(e,!0)},0)):(y[e]=1,i&&(w[i]=1),void l(e,a)))})},0),f}function l(t,e){var n,o=r.createElement("script");o.onload=o.onerror=o[h]=function(){o[d]&&!/^c|loade/.test(o[d])||n||(o.onload=o[h]=null,n=1,y[t]=2,e())},o.async=1,o.src=a?t+(-1===t.indexOf("?")?"?":"&")+a:t,s.insertBefore(o,s.lastChild)}var p,a,r=document,s=r.getElementsByTagName("head")[0],i=!1,m="push",d="readyState",h="onreadystatechange",g={},w={},v={},y={};return f.get=l,f.order=function(n,o,a){!function t(e){e=n.shift(),n.length?f(e,t):f(e,o,a)}()},f.path=function(t){p=t},f.urlArgs=function(t){a=t},f.ready=function(t,e,n){t=t[m]?t:[t];var o,a=[];return!u(t,function(t){g[t]||a[m](t)})&&c(t,function(t){return g[t]})?e():(o=t.join("|"),v[o]=v[o]||[],v[o][m](e),n&&n(a)),f},f.done=function(t){f([null],t)},f
/*
 * [y] hybris Platform
 *
 * Copyright (c) 2018 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This software is the confidential and proprietary information of SAP
 * ("Confidential Information"). You shall not disclose such Confidential
 * Information and shall use it only in accordance with the terms of the
 * license agreement you entered into with SAP.
 */});var smartEditBootstrapGatewayId="smartEditBootstrap";function _onbeforeunload(t){parent.postMessage({pk:Math.random(),gatewayId:smartEditBootstrapGatewayId,eventId:"unloading",data:{location:document.location.href}},"*")}parent.postMessage({pk:Math.random(),gatewayId:smartEditBootstrapGatewayId,eventId:"loading",data:{location:document.location.href}},"*"),window.onbeforeunload=_onbeforeunload,function t(){parent.postMessage({pk:Math.random(),gatewayId:"heartBeatGateway",eventId:"heartBeat",data:{location:document.location.href}},"*"),setTimeout(t,500)}(),window.addEventListener("load",function(t){parent.postMessage({pk:Math.random(),gatewayId:smartEditBootstrapGatewayId,eventId:"bootstrapSmartEdit",data:{location:document.location.href}},"*")});var injectJS=function(t,e,n){n<e.length&&$script(e[n],function(){injectJS(t,e,n+1)})},injectCSS=function(t,e,n){var o=document.createElement("link");o.rel="stylesheet",o.href=e[n],t.appendChild(o),n+1<e.length&&injectCSS(t,e,n+1)};
// Listen to message from child window
window.addEventListener("message",function(t){
//	var originControl = '127.0.0.1:7000';
//
//	if(e.origin.indexOf(originControl)==-1){
//		throw e.origin+" is not allowed to override this storefront";
//	}
var e=t.data;if(e.gatewayId===smartEditBootstrapGatewayId&&"bundle"===e.eventId){var n=e.data;if(window.smartedit=window.smartedit||{},n.resources&&n.resources.properties)for(var o in n.resources.properties)window.smartedit[o]=n.resources.properties[o];var a=document.getElementsByTagName("head")[0];
//JS Files
n.resources&&n.resources.js&&0<n.resources.js.length&&injectJS(a,n.resources.js,0),
//CSS Files
n.resources&&n.resources.css&&0<n.resources.css.length&&injectCSS(a,n.resources.css,0)}},!1);