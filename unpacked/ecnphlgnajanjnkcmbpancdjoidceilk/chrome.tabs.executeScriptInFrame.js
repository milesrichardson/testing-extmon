!(function () {
  "use strict";
  chrome.tabs.executeScriptInFrame = function (e, o, n) {
    console.assert("object" == typeof o, "details must be an object (argument 0)");
    var a = o.frameId;
    console.assert("number" == typeof e, "details.tabId must be a number"),
      console.assert("number" == typeof a, "details.frameId must be a number");
    var i = "code" in o ? "code" : "file";
    console.assert(i in o, "No source code or file specified");
    var s = o[i];
    console.assert("string" == typeof s, "details." + i + " must be a string");
    var c = o.runAt;
    n || (n = function () {});
    if ((console.assert("function" == typeof n, "callback must be a function"), 0 === a)) {
      var l = { allFrames: !1, runAt: c };
      return (l[i] = s), void chrome.tabs.executeScript(e, l, n);
    }
    var u = Math.random().toString(36);
    "code" === i
      ? f()
      : ((m = new XMLHttpRequest()).open("GET", chrome.extension.getURL(s), !0),
        (m.onload = function () {
          (s = m.responseText), f();
        }),
        (m.onerror = function () {
          var e = 'Failed to load file: "' + s + '".';
          console.error("executeScript: " + e), (chrome.runtime.lastError = chrome.extension.lastError = { message: e });
          try {
            n();
          } finally {
            chrome.runtime.lastError = chrome.extension.lastError = void 0;
          }
        }),
        m.send());
    var m;
    function f() {
      (t[u] = n),
        chrome.tabs.executeScript(
          e,
          {
            code: "(" + r + ")(window," + JSON.stringify(u) + "," + a + "," + JSON.stringify(s) + ")",
            allFrames: !0,
            runAt: "document_start"
          },
          function (e) {
            e ? (n.timer = setTimeout(d, 1e3)) : (delete t[u], n());
          }
        );
    }
    function d() {
      var r = t[u];
      if (r) {
        delete t[u];
        var o = "Failed to execute script: Frame " + a + " not found in tab " + e;
        console.error("executeScript: " + o), (chrome.runtime.lastError = chrome.extension.lastError = { message: o });
        try {
          r();
        } finally {
          chrome.runtime.lastError = chrome.extension.lastError = void 0;
        }
      }
    }
  };
  var e = chrome.extension.getURL("getFrameId"),
    t = {};
  chrome.webRequest.onBeforeRequest.addListener(
    function (e) {
      var t = e.frameId + 1,
        r = String.fromCharCode(255 & t, (t >> 8) & 255),
        o = String.fromCharCode(1 + (t >> 16), 0);
      return { redirectUrl: "data:image/gif;base64," + btoa("GIF89a" + r + o + "\0ÿ\0,\0\0\0\0" + r + o + "\0D\0;") };
    },
    { urls: [e + "*"], types: ["image"] },
    ["blocking"]
  ),
    chrome.runtime.onMessage.addListener(function (e, r, o) {
      if (e && e.executeScriptCallback) {
        var n = t[e.identifier];
        if (n) {
          if (e.hello) return void clearTimeout(n.timer);
          delete t[e.identifier], n([e.evalResult]);
        } else console.warn("Callback not found for response in tab " + r.tab.id);
      }
    });
  var r =
    "" +
    function e(t, r, o, n) {
      var a;
      "__executeScript_frameId__" in t
        ? c()
        : (((a = t.document.createElement("img")).onload = function () {
            (t.__executeScript_frameId__ = this.naturalWidth - 1 + ((this.naturalHeight - 1) << 16)), c();
          }),
          (a.src = "URL_WHAT_IS_MY_FRAME_ID?" + Math.random().toString(36).slice(-6)));
      for (a = 0; a < t.frames.length; ++a)
        try {
          var i = t.frames[a],
            s = i.location.protocol;
          "https:" !== s && "http:" !== s && "file:" !== s && e(i, r, o, n);
        } catch (e) {}
      function c() {
        if (t.__executeScript_frameId__ === o) {
          chrome.runtime.sendMessage({ executeScriptCallback: !0, hello: !0, identifier: r });
          var e = null;
          try {
            e = t.eval(n);
          } finally {
            chrome.runtime.sendMessage({ executeScriptCallback: !0, evalResult: e, identifier: r });
          }
        }
      }
    }
      .toString()
      .replace("URL_WHAT_IS_MY_FRAME_ID", e);
})();
