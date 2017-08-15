// ==UserScript==
// @name         Instagram video downloader
// @namespace    http://lbreda.com/
// @version      1.0
// @description  Adds a download link for instagram videos in the one-image pages
// @author       Lorenzo Breda
// @match        https://*.instagram.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    if(document.querySelector('meta[property="og:video"]') && document.querySelector('meta[property="og:video"]').content){
        var a = document.createElement('a');
        var container = document.querySelector('._hmd6j._8oo9w');
        a.href = document.querySelector('meta[property="og:video"]').content;
        a.style.width = '24px';
        a.style.height = '24px';
        a.style.margin = '8px';
        a.style.backgroundImage = "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAV1BMVEUAAAAsPlAsPlAsPlAsPlAsPlAsPlAsPlAsPlAsPlAsPlAsPlAsPlAsPlAsPlAsPlAsPlAsPlAsPlAsPlAsPlAsPlAsPlAsPlAsPlAsPlAsPlAsPlAsPlAec59cAAAAHHRSTlMAAQUHCQoRGBkcHz9AUFZecYCVqLTK0dPp7ff5cWDvugAAAG1JREFUKFPFjUcOgDAMBE0vCb0n/v87IZZBCeQIYuTDakfyAnxAqRFHn5B48IcIN7xoHNNfvcodEZxGFeDC5tGz8fRkbn1HT5YoaDKoKK8pCZ6dE4Cas7AF6mE5o3QE0cbmPGJqzQlr3IbH32IHtA8TFl6BBTUAAAAASUVORK5CYII=')";
        container.appendChild(a);
    }
})();