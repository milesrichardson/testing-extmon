Preferences = (function () {
  var r = {},
    n = function (e, o) {
      var t = LPPlatform.getPreference(e);
      return (o = void 0 === o ? a[e] : o), void 0 === t ? o : t;
    },
    t = {
      logoffWhenCloseBrowser: !0,
      logoffWhenCloseBrowserVal: !0,
      showvault: !0,
      hideContextMenus: !0,
      notificationsBottom: !0,
      usepopupfill: !0,
      openloginstart: !0,
      storeLostOTP: !0,
      enablenamedpipes: !0,
      enablenewlogin: !0,
      htmlindialog: !0,
      Icon: !0,
      generateHkKeyCode: !0,
      generateHkMods: !0,
      recheckHkKeyCode: !0,
      recheckHkMods: !0,
      searchHkKeyCode: !0,
      searchHkMods: !0,
      nextHkKeyCode: !0,
      nextHkMods: !0,
      prevHkKeyCode: !0,
      prevHkMods: !0,
      homeHkKeyCode: !0,
      homeHkMods: !0,
      openpopoverHkKeyCode: !0,
      openpopoverHkMods: !0,
      rememberpassword: !0,
      dialogSizePrefs: !0
    },
    a = {
      logoffWhenCloseBrowser: !1,
      logoffWhenCloseBrowserVal: 0,
      idleLogoffEnabled: !1,
      idleLogoffVal: "",
      openpref: "tabs",
      htmlindialog: !1,
      automaticallyFill: !0,
      showvault: !1,
      showAcctsInGroups: !0,
      hideContextMenus: !1,
      defaultffid: "0",
      donotoverwritefilledfields: !1,
      showNotifications: !0,
      showGenerateNotifications: !1,
      showFormFillNotifications: !1,
      showSaveSiteNotifications: !1,
      notificationsBottom: !1,
      showNotificationsAfterClick: !1,
      showSaveNotificationBar: !0,
      showChangeNotificationBar: !0,
      usepopupfill: !0,
      showmatchingbadge: !0,
      autoautoVal: 25,
      warninsecureforms: !1,
      infieldPopupEnabled: !1,
      dontfillautocompleteoff: !1,
      pollServerVal: 15,
      clearClipboardSecsVal: 60,
      recentUsedCount: 10,
      searchNotes: !0,
      openloginstart: !1,
      storeLostOTP: !0,
      enablenamedpipes: !0,
      enablenewlogin: !1,
      clearfilledfieldsonlogoff: !1,
      toplevelmatchingsites: !1,
      language: "en_US",
      Icon: 1,
      generate_length: 12,
      generate_upper: !0,
      generate_lower: !0,
      generate_digits: !0,
      generate_special: !1,
      generate_mindigits: 1,
      generate_ambig: !1,
      generate_reqevery: !0,
      generate_pronounceable: !1,
      generate_allcombos: !0,
      generate_advanced: !1,
      gridView: !0,
      compactView: !1,
      "seenVault4.0": !1,
      leftMenuMaximize: !0,
      disablepasswordmanagerasked: !0,
      rememberemail: !0,
      rememberpassword: !1,
      dialogSizePrefs: {},
      tempID: 0,
      lastreprompttime: 0,
      identity: "",
      alwayschooseprofilecc: !1,
      showIntroTutorial: !0
    },
    s =
      (LPPlatform.adjustPreferenceDefaults(a),
      LPPlatform.isMac()
        ? ((a.generateHkKeyCode = 0),
          (a.generateHkMods = ""),
          (a.recheckHkKeyCode = 0),
          (a.recheckHkMods = ""),
          (a.searchHkKeyCode = 76),
          (a.searchHkMods = "shift meta"),
          (a.nextHkKeyCode = 33),
          (a.nextHkMods = "meta"),
          (a.prevHkKeyCode = 34),
          (a.prevHkMods = "meta"),
          (a.homeHkKeyCode = 0),
          (a.homeHkMods = ""),
          (a.openpopoverHkKeyCode = 220),
          (a.openpopoverHkMods = "meta"))
        : ((a.generateHkKeyCode = 71),
          (a.generateHkMods = "alt"),
          (a.recheckHkKeyCode = 73),
          (a.recheckHkMods = "alt"),
          (a.searchHkKeyCode = 87),
          (a.searchHkMods = "alt"),
          (a.nextHkKeyCode = 33),
          (a.nextHkMods = "alt"),
          (a.prevHkKeyCode = 34),
          (a.prevHkMods = "alt"),
          (a.homeHkKeyCode = 72),
          (a.homeHkMods = "control alt"),
          (a.openpopoverHkKeyCode = 220),
          (a.openpopoverHkMods = "alt")),
      function (e, o) {
        var t;
        (r[e] || []).forEach(function (e) {
          e(o);
        });
      }),
    i = function (e, o) {
      LPPlatform.setUserPreference(e, o), t[e] && LPPlatform.setGlobalPreference(e, o), s(e, o);
    };
  return {
    getDefault: function (e) {
      switch (typeof e) {
        case "object":
          var o = {},
            t;
          for (t in e) o[t] = a[t];
          return o;
        case "string":
          return a[e];
        default:
          return null;
      }
    },
    get: function (e, o) {
      switch (typeof e) {
        case "object":
          var t = {},
            r;
          for (r in e) t[r] = n(r, o ? o[r] : void 0);
          return t;
        case "string":
          return n(e, o);
        default:
          return null;
      }
    },
    set: function (e, o) {
      if ("object" == typeof e) for (var t in e) i(t, e[t]);
      else i(e, o);
      LPPlatform.writePreferences();
    },
    addListener: function (e, o) {
      var t = r[e] || [];
      t.push(o), (r[e] = t);
    },
    removeListener: function (e, o) {
      var t = r[e] || [];
      r[e] = t.filter(function (e) {
        return e !== o;
      });
    },
    triggerChange: s
  };
})();
