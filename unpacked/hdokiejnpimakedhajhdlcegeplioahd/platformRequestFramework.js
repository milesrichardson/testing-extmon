!(function (r) {
  var n;
  (r.requestFrameworkInitializer =
    ((n = function (e, n) {
      var s = e("", { name: "requestPort" });
      return (
        s.onMessage.addListener(n),
        function (e) {
          s.postMessage(e);
        }
      );
    }),
    function (e) {
      return n((chrome.runtime && chrome.runtime.connect) || parent.chrome.runtime.connect, e);
    })),
    (r.installBinary = function (n, s) {
      var i = getBG();
      chrome.permissions.contains({ permissions: ["nativeMessaging"] }, function (e) {
        n || e ? i.openURL(i.base_url + "installer/") : r.requestNativeMessaging(s);
      });
    }),
    (r.requestNativeMessaging = function (e) {
      var n = getBG();
      n.Preferences.set("native_messaging_asked", "1"),
        e
          ? window.open("/native_messaging.html?hidenever=1")
          : void 0 !== chrome.permissions &&
            chrome.permissions.request({ permissions: ["nativeMessaging", "privacy"] }, function (e) {
              e && alert(n.gs("Please restart your browser to finish enabling native messaging."));
            });
    });
})((LPPlatform = "undefined" == typeof LPPlatform ? {} : LPPlatform));
