var RestrictedEmergencyAccessDialog = function (e) {
  Dialog.call(this, e, {
    additionalHeaderClasses: [],
    dynamicHeight: !0,
    buttonsInsideContent: !0,
    title: Strings.translateString("It's time to upgrade!"),
    closeButtonEnabled: !0,
    hidePreviousDialogs: !0
  });
};
(RestrictedEmergencyAccessDialog.prototype = Object.create(Dialog.prototype)),
  ((RestrictedEmergencyAccessDialog.prototype.constructor = RestrictedEmergencyAccessDialog).prototype.initialize = function (e) {
    var t;
    Dialog.prototype.initialize.apply(this, arguments),
      (t = this),
      e.find("#families-upgrade-learn-more").bind("click", function () {
        bg.sendLpImprove("restricted_emergency_access_lightbox_click", { action: "learn more" });
      }),
      e.find("#restricted-emergency-access-no-thanks").bind("click", function () {
        bg.sendLpImprove("restricted_emergency_access_lightbox_click", { action: "close" }), t.close(!0);
      }),
      e.find("#restricted-emergency-access-go-premium").bind("click", function () {
        bg.sendLpImprove("restricted_emergency_access_lightbox_click", { action: "upgrade now" }),
          LPProxy.isExpiredFamilyUser()
            ? LPPlatform.openURL("https://lastpass.com/families/payment")
            : LPPlatform.openURL("https://lastpass.com/features_joinpremium4.php?a=1");
      });
  });
