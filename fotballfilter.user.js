// ==UserScript==
// @name           Fotballfilter
// @namespace      http://www.okblogg.no
// @description    Gjør et tappert forsøk på å fjerne fotballnyheter fra nettaviser
// @match        http://www.dagbladet.no/*
// @match        http://www.vg.no/*
// @match        http://www.nrk.no/*
// @match        http://www.aftenposten.no/*
// @match        http://www.nettavisen.no/*
// ==/UserScript==

for(var a=document.evaluate("//a[contains(@href, 'fotball') or contains(@title, 'fotball')]/ancestor::div[contains(@class,'ddCell') or contains(@class,'article-extract') or contains(@class,'gridUnit') or contains(@class,'article_small') or contains(@class,'art_medium')][1]",document,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null),b=a.snapshotLength-1;b>=0;b--){var c=a.snapshotItem(b);c.parentNode.removeChild(c)};