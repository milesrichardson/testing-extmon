!(function (e, n) {
  if ("function" == typeof define && define.amd) define([], n);
  else if ("undefined" != typeof exports) n();
  else {
    n(), (e.unknown = {});
  }
})("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : this, function () {
  !(function () {
    if ("https://docs.google.com" === window.location.origin && void 0 !== chrome.runtime.getURL) {
      if (
        ((window.texthelp = window.texthelp || {}),
        (window.texthelp.RW4GC = window.texthelp.RW4GC || {}),
        (window.texthelp.RW4GC.frame = window.texthelp.RW4GC.frame || {}),
        window.texthelp.RW4GC.frame.docsPageInjected)
      )
        return;
      window.texthelp.RW4GC.frame.docsPageInjected = !0;
      ["gdocs.page.bundle.js"].forEach((e) => {
        const n = document.createElement("script");
        (n.src = chrome.runtime.getURL(e)), (document.head || document.documentElement).appendChild(n);
      });
    }
  })();
});
