!(function (e, n) {
  if ("function" == typeof define && define.amd) define([], n);
  else if ("undefined" != typeof exports) n();
  else {
    n(), (e.unknown = {});
  }
})("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : this, function () {
  !(function () {
    if (
      ((window.texthelp = window.texthelp || {}),
      (window.texthelp.RW4GC = window.texthelp.RW4GC || {}),
      (window.texthelp.RW4GC.frame = window.texthelp.RW4GC.frame || {}),
      !window.texthelp.RW4GC.frame.wordPageInjected &&
        ((window.texthelp.RW4GC.frame.wordPageInjected = !0), document.querySelector("#WACViewPanel")))
    ) {
      ["wordonline.page.bundle.js"].forEach((e) => {
        const n = document.createElement("script");
        (n.src = chrome.runtime.getURL(e)), (document.head || document.documentElement).appendChild(n);
      });
    }
  })();
});
