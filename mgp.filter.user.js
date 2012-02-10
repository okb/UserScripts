// ==UserScript==
// @name           	MGP-filter
// @author			George Gooding
// @namespace      	http://www.okblogg.no
// @include        	http://www.dagbladet.no/*
// @include        	http://www.vg.no/*
// @include        	http://www.nrk.no/*
// @include        	http://www.aftenposten.no/*
// @include        	http://www.nettavisen.no/*
// @match        	http://www.dagbladet.no/*
// @match        	http://www.vg.no/*
// @match        	http://www.nrk.no/*
// @match        	http://www.aftenposten.no/*
// @match        	http://www.nettavisen.no/*
// @description    	Klarer vi fjerne alle nyhetssaker om MGP? Vi prøver!
// ==/UserScript==

for (var a = document.evaluate("//a[contains(@href,'melodi_grand_prix') or contains(@href,'grand-prix') or contains(@href,'mgp') or contains(@href,'MGP') or contains(@href,'Plumbo') or contains(@title, 'MGP')]/ancestor::div[contains(@class,'ddCell') or contains(@class,'article-extract') or contains(@class,'gridUnit') or contains(@class,'article_small') or contains(@class,'art_medium')][1]", document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null), b = a.snapshotLength - 1; b >= 0; b--) {
    var c = a.snapshotItem(b);
    c.parentNode.removeChild(c);
	
}
