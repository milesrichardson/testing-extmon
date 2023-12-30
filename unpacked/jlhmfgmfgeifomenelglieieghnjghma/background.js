var Background = (function (a) {
  var s = new Map(),
    t = new Map();
  return (
    (a.postMessageToPage = function (e, n) {
      var o = t.get(e);
      if ((console.log("[Background] postMessageToPage: name=", e), console.log("[Background] postMessageToPage: clientPort=", o), o))
        try {
          console.log("[Background] postMessageToPage: message=", n), o.postMessage(n);
        } catch (e) {
          console.log("[Background] postMessageToPage: err=", e.toString());
        }
    }),
    (a.postMessageToNative = function (n, e) {
      var o = s.get(n);
      if ((console.log("[Background] postMessageToNative: name=", n), console.log("[Background] postMessageToNative: nativePort=", o), o))
        try {
          console.log("[Background] postMessageToNative: message=", e), o.postMessage(e);
        } catch (e) {
          var t = {
            timestamp: new Date().toUTCString(),
            token: n,
            message_type: "error",
            message: { error_no: -1, error_message: e.toString() }
          };
          a.postMessageToPage(o.token, t), console.log("[Background] postMessageToNative: err=", e.toString());
        }
    }),
    (a.handleClientMessage = function (e, n) {
      console.log("[Background] handleClientMessage: clientPort=", n),
        console.log("[Background] handleClientMessage: message=", e),
        a.postMessageToNative(n.name, e);
    }),
    (a.handleNativeMessage = function (e, n) {
      console.log("[Background] handleNativeMessage: nativePort=", n),
        console.log("[Background] handleNativeMessage: message=", e),
        a.postMessageToPage(n.token, e);
    }),
    (a.handleNativeDisconnect = function (e) {
      if ((console.log("[Background] handleNativeDisconnect: nativePort=", e), e)) {
        console.log("[Background] handleNativeDisconnect: lastError=", chrome.runtime.lastError.message),
          s.get(e.token) && s.delete(e.token),
          console.log("[Background] handleNativeDisconnect: nativePorts=", s);
        var n = t.get(e.token);
        if ((console.log("[Background] handleNativeDisconnect: clientPort=", n), n)) {
          var o = {
            timestamp: new Date().toUTCString(),
            token: n.name,
            message_type: "disconnect",
            message: chrome.runtime.lastError.message
          };
          n.postMessage(o),
            n.disconnect(),
            t.get(n.name) && t.delete(n.name),
            console.log("[Background] handleNativeDisconnect: clientPorts=", t);
        }
      }
    }),
    (a.handleClientDisconnect = function (e) {
      console.log("[Background] handleClientDisconnect: clientPort=", e),
        t.get(e.name) && t.delete(e.name),
        console.log("[Background] handleClientDisconnect: clientPorts=", t);
      var n = s.get(e.name);
      if (n) {
        var o = { timestamp: new Date().toUTCString(), token: n.token, message_type: "disconnect", message: "disconnect" };
        a.postMessageToNative(n.token, o),
          s.get(n.token) && s.delete(n.token),
          console.log("[Background] handleClientDisconnect: nativePorts=", s);
      }
    }),
    (a.connectNative = function (e) {
      var n = s.get(e);
      if (
        (console.log("[Background] connectNative: name=", e),
        console.log("[Background] connectNative: nativePort=", n, "now=", performance.now()),
        !n)
      )
        try {
          ((n = chrome.runtime.connectNative("com.webex.meeting")).token = e),
            n.onMessage.addListener(a.handleNativeMessage),
            n.onDisconnect.addListener(a.handleNativeDisconnect),
            s.set(n.token, n),
            console.log("[Background] connectNative: nativePorts=", s);
        } catch (e) {
          return console.log("[Background] connectNative: Failed connecting to native port,", e.toString()), null;
        }
      return n;
    }),
    (a.handleClientConnect = function (e) {
      if (
        (console.log("[Background] chrome.runtime.onConnect, clientPort=", e),
        e.onMessage.addListener(a.handleClientMessage),
        e.onDisconnect.addListener(a.handleClientDisconnect),
        t.set(e.name, e),
        console.log("[Background] chrome.runtime.onConnect, clientPorts=", t),
        a.connectNative(e.name))
      ) {
        var n = { timestamp: new Date().toUTCString(), token: e.name, message_type: "hello", message: "hello" };
        a.postMessageToNative(e.name, n);
      }
    }),
    (a.init = function () {
      chrome.runtime.onConnect.addListener(a.handleClientConnect),
        chrome.runtime.onUpdateAvailable && chrome.runtime.onUpdateAvailable.addListener(function (e) {}),
        chrome.runtime.onInstalled.addListener(function (e) {
          "install" == e.reason
            ? chrome.tabs.query(
                { url: ["*://*.webex.com/*", "*://*.qa.webex.com/*", "*://*.webex.com.cn/*", "*://*.webexgov.us/*", "*://*.wbxlab.net/*"] },
                function (e) {
                  if (0 < e.length) {
                    var n = e[0];
                    chrome.tabs.update(n.id, { active: !0 }, function () {});
                  }
                }
              )
            : e.reason;
        }),
        chrome.runtime.onMessage.addListener(function (e, n) {
          console.log("[Background] onMessage:", e.ext_message_type);
        });
    }),
    a
  );
})(Background || {});
Background.init();
