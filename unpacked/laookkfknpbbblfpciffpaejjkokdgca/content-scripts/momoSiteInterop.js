!(function () {
  function e(e, n) {
    var t = document.createElement("input");
    (t.type = "hidden"), (t.id = e), (t.value = n), document.body.appendChild(t);
  }
  var n;
  chrome &&
    chrome.runtime &&
    ((n = (n = chrome.runtime.getURL("")).startsWith("chrome-extension:")
      ? "chrome-extension"
      : n.startsWith("moz-extension:")
      ? "moz-extension"
      : n.startsWith("safari-web-extension:")
      ? "safari-web-extension"
      : null),
    (chrome.extension.inIncognitoContext && "safari-web-extension" !== n) ||
      (n && e("momentumPlatform", n),
      (n = chrome.runtime.getManifest()) && e("momentumVersion", n.version),
      window.addEventListener(
        "message",
        function (n) {
          var e, t, o;
          n.source === window &&
            n.data.type &&
            ("momentum:oneTimeLogin" === (e = n.data.type)
              ? ((t = !!n.data.openNewTab),
                (o = !!n.data.updateSenderTab),
                chrome.runtime.sendMessage(
                  { type: "oneTimeLogin", payload: n.data.payload, openNewTab: t, updateSenderTab: o },
                  function (e) {
                    window.postMessage(
                      { type: "momentum:callback:oneTimeLogin", callbackId: n.data.callbackId, payload: e },
                      window.origin
                    );
                  }
                ))
              : "momentum:authState" === e
              ? chrome.runtime.sendMessage(n.data)
              : "momentum:checkUserId" === e
              ? chrome.runtime.sendMessage({ type: "checkUserId", payload: n.data.data }, function (e) {
                  window.postMessage({ type: "momentum:callback:checkUserId", payload: e }, window.origin);
                })
              : "momentum:openNew" === e &&
                chrome.runtime.sendMessage(n.data, function (e) {
                  e = e || { success: !1, error: chrome.runtime.lastError };
                  window.postMessage({ type: "momentum:callback:openNew", payload: e }, window.origin);
                }));
        },
        !1
      )));
})();
