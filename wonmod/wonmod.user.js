// ==UserScript==
// @name           WONMod
// @namespace      http://www.nemerial.net
// @description    WONMod by Tubasa
// @include        http://www.nemerial.net/*
// @include        http://nemerial.net/*
// ==/UserScript==
/**
 *
 * @access public
 * @return void
 *
 **/

var swmod = function () {
	var newScript = document.createElement('script');
	newScript.setAttribute('language',"JavaScript");
	newScript.setAttribute('type', 'text/javascript');
	newScript.setAttribute('src', 'http://www.tubasa.fr/wonmod/wonmod.js'); 
	document.getElementsByTagName('head')[0].appendChild(newScript);
}
swmod();