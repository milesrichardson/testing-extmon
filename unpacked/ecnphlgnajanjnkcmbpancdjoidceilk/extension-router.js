"use strict";
!(function () {
  var e = chrome.extension.getURL("content/web/viewer.html"),
    t = chrome.extension.getURL("/"),
    r = ["http", "https", "ftp", "file", "chrome-extension", "filesystem", "drive"];
  chrome.webRequest.onBeforeRequest.addListener(
    function (o) {
      var n = (function (e) {
        var o = (e = e.substring(t.length)).search(/:|%3A/i);
        if (-1 !== o) {
          var n = e.slice(0, o).toLowerCase();
          return r.indexOf(n) >= 0 ? (":" === (e = e.split("#")[0]).charAt(o) && (e = encodeURIComponent(e)), e) : void 0;
        }
      })(o.url);
      if (n) {
        n = e + "?file=" + n;
        var c = o.url.indexOf("#");
        return c > 0 && (n += o.url.slice(c)), console.log("Redirecting " + o.url + " to " + n), { redirectUrl: n };
      }
    },
    {
      types: ["main_frame", "sub_frame"],
      urls: r.map(function (e) {
        return t + e + "*";
      })
    },
    ["blocking"]
  ),
    chrome.tabs.query({ url: t + "*:*" }, function (e) {
      for (var t = 0; t < e.length; ++t) chrome.tabs.reload(e[t].id);
    }),
    console.log("Set up extension URL router."),
    Object.keys(localStorage).forEach(function (e) {
      var t = /^unload-(\d+)-(true|false)-(.+)/.exec(e);
      if (t) {
        var r = parseInt(t[1], 10),
          o = "true" === t[2],
          n = t[3];
        Date.now() - r < 3e3 &&
          chrome.tabs.create({
            url: chrome.runtime.getURL("restoretab.html") + "?" + encodeURIComponent(n) + "#" + encodeURIComponent(localStorage.getItem(e)),
            active: !o
          }),
          localStorage.removeItem(e);
      }
    });
})();
