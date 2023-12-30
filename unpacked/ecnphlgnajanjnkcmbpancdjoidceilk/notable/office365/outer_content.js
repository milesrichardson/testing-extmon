"use strict";
console.debug("Kami: injecting page script"),
  (function (e) {
    const t = document.createElement("script");
    (t.src = chrome.runtime.getURL(e)), document.head.appendChild(t), t.remove();
  })("notable/office365/outer_page.js");
