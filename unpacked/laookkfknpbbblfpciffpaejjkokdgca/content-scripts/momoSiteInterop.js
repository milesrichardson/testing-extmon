!(function () {
  if (chrome && chrome.runtime) {
    function e(e, n) {
      var t = document.createElement("input");
      (t.type = "hidden"), (t.id = e), (t.value = n), document.body.appendChild(t);
    }
    var n = chrome.runtime.getURL(""),
      t = n.startsWith("chrome-extension:")
        ? "chrome-extension"
        : n.startsWith("moz-extension:")
        ? "moz-extension"
        : n.startsWith("safari-web-extension:")
        ? "safari-web-extension"
        : null;
    if (chrome.extension.inIncognitoContext && "safari-web-extension" !== t) return;
    t && e("momentumPlatform", t);
    var a = chrome.runtime.getManifest();
    a && e("momentumVersion", a.version),
      window.addEventListener(
        "message",
        function (n) {
          if (n.source === window && n.data.type) {
            var e = n.data.type;
            if ("momentum:oneTimeLogin" === e) {
              var t = !!n.data.openNewTab,
                a = !!n.data.updateSenderTab;
              chrome.runtime.sendMessage(
                { type: "oneTimeLogin", payload: n.data.payload, openNewTab: t, updateSenderTab: a },
                function (e) {
                  window.postMessage({ type: "momentum:callback:oneTimeLogin", callbackId: n.data.callbackId, payload: e }, window.origin);
                }
              );
            } else
              "momentum:authState" === e
                ? chrome.runtime.sendMessage(n.data)
                : "momentum:checkUserId" === e
                ? chrome.runtime.sendMessage({ type: "checkUserId", payload: n.data.data }, function (e) {
                    window.postMessage({ type: "momentum:callback:checkUserId", payload: e }, window.origin);
                  })
                : "momentum:openNew" === e &&
                  chrome.runtime.sendMessage(n.data, function (e) {
                    var n = e || { success: !1, error: chrome.runtime.lastError };
                    window.postMessage({ type: "momentum:callback:openNew", payload: n }, window.origin);
                  });
          }
        },
        !1
      );
  }
})();
