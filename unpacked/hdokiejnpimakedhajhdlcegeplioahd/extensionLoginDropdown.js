ExtensionDropdown = (function () {
  window.addEventListener("unload", function () {
    bg.removeModalOverlay();
  });
  var o,
    e,
    n = function (o, e) {
      "loginTab" == o && bg.sendLpEvent("login_viewed"),
        (e = $.extend(
          {
            isPopup: !0,
            onResize: function (o, e) {
              LPPlatform.setDropdownPopoverSize(o, e);
            },
            onClose: function () {
              LPPlatform.closePopup();
            }
          },
          e
        )),
        LPDialog.openDialog(o, e);
    };
  return {
    open: function () {
      !bg.get("lploggedin") && bg.get("g_badgedata") && "notification" === bg.get("g_badgedata").cmd
        ? (n("notification", { notification: bg.get("g_notification_data") }), bg.clear_badge())
        : bg.is_firefox_webext() && !0 !== JSON.parse(localStorage.getItem("opt-in"))
        ? n("firefoxAccept", { onResize: null })
        : LPTools.getURLParams().showCreateAccount
        ? n("createAccountIcon")
        : n("loginTab");
    },
    reset: function () {
      Topics.get(Topics.CLEAR_DATA).publish(), Dialog.prototype.closeAllDialogs({ forceClose: !0 });
    },
    openDialog: n
  };
})();
