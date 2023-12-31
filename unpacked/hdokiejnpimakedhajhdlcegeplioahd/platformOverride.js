!(function (i) {
  i.getExtensionDropdownDelay = function () {
    return bg.LPPlatform.isMac() ? 50 : -1;
  };
  var t =
      ((o = $(document.getElementsByTagName("html"))),
      (s = function (e, n) {
        bg.LPPlatform.isMac()
          ? (setTimeout(function () {
              o.css({ height: e + 1, width: n }), i.setWebClientPopoverSize(e + 1, n);
            }, 50),
            setTimeout(function () {
              o.css({ height: e, width: n }), i.setWebClientPopoverSize(e, n);
            }, 100))
          : (o.css({ height: e, width: n }), i.setWebClientPopoverSize(e, n));
      }),
      function (e, n) {
        s(e, n);
      }),
    o,
    s,
    n,
    r;
  (i.setDropdownPopoverSize = function (e, n) {
    t(e, n);
  }),
    (i.checkBrowserPasswordManager = function (n) {
      chrome.privacy &&
        chrome.privacy.services &&
        chrome.privacy.services.passwordSavingEnabled &&
        chrome.privacy.services.passwordSavingEnabled.get({}, function (e) {
          e.value && "controllable_by_this_extension" === e.levelOfControl && n();
        });
    }),
    (i.canBackgroundOpenPopover = function () {
      return !1;
    }),
    (i.getUnavailablePreferences =
      ((n = i.getUnavailablePreferences),
      function () {
        var e = n();
        return (e.enablenewlogin = !bg.get("g_shownewloginoption")), (e.hidecontextspan = void 0 === chrome.contextMenus), e;
      })),
    (i.handlePreferenceChanges =
      ((r = i.handlePreferenceChanges),
      function (e) {
        r(e), void 0 !== e.hideContextMenus && bg.LPContextMenus.createContextMenus(), !1 === e.showmatchingbadge && bg.clear_badge_text();
      })),
    (i.openCreateAccount = function () {
      bg.LPPlatform.openTabDialog("createAccountSimple");
    }),
    (i.showDownloader = function () {
      return !0;
    }),
    (i.installBinary = function (n, t) {
      chrome.permissions.contains({ permissions: ["nativeMessaging"] }, function (e) {
        n || e ? bg.openURL(bg.get("base_url") + "installer/") : i.requestNativeMessaging(t);
      });
    }),
    (i.requestNativeMessaging = function (e) {
      bg.Preferences.set("native_messaging_asked", "1"),
        e
          ? window.open("/native_messaging.html?hidenever=1")
          : void 0 !== chrome.permissions &&
            chrome.permissions.request({ permissions: ["nativeMessaging", "privacy"] }, function (e) {
              e && alert(bg.gs("Please restart your browser to finish enabling native messaging."));
            });
    });
})(LPPlatform);
