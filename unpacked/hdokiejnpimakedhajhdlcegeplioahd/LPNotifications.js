var LPNotifications = (function () {
  var a = {},
    l =
      ((i = null),
      (t = function (i, t) {
        lplog("LPNotifications: user clicked notification id=" + i),
          0 === t && a && a[i] && (lplog("LPNotifications: calling callback for id=" + i), a[i]());
      }),
      (o = function (i) {
        lplog("LPNotifications: closing notification id=" + i), a && a[i] && delete a[i];
      }),
      function () {
        if (null === i) {
          i = !1;
          try {
            !g_issafari_appext &&
              chrome &&
              chrome.notifications &&
              (g_isfirefoxwebext || chrome.notifications.onButtonClicked.addListener(t),
              chrome.notifications.onClosed.addListener(o),
              (i = !0));
          } catch (i) {
            console.error(i);
          }
          i || lplog("LPNotifications: notifications API is not supported");
        }
        return i;
      }),
    i,
    t,
    o,
    n,
    e;
  return {
    createNotification: function (i) {
      try {
        if (!i || !i.title || !i.message) throw "LPNotifications: error - missing title or message!";
        var t = i.title,
          o = i.message,
          n = i.callback || null,
          e,
          c;
        lplog("LPNotifications: title=" + t + " text=" + o),
          l()
            ? ((e = { type: "basic", title: t, message: o, iconUrl: i.iconUrl || "images/icon80.png" }),
              g_isfirefoxwebext || (e.buttons = [{ title: i.buttonText || gs("Go to URL") }]),
              (c = function (i) {
                lplog("LPNotifications: displaying notification id=" + i), "function" != typeof n || g_isfirefoxwebext || (a[i] = n);
              }),
              chrome.notifications.create("", e, c))
            : g_issafari_appext
            ? alert(t + "\n\n" + o)
            : LPPlatform.openTabDialog("alert", { title: t, text: o });
      } catch (i) {
        console.error(i);
      }
    },
    closeNotifications: function () {
      l() &&
        (lplog("LPNotifications: closing all notifications"),
        chrome.notifications.getAll(function (i) {
          for (var t in i) i.hasOwnProperty(t) && chrome.notifications.clear(t);
        })),
        (a = {});
    }
  };
})();
