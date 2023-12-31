var EnterpriseTrialDialog = function (t) {
  Dialog.call(this, t, {
    additionalHeaderClasses: ["icon"],
    dynamicHeight: !0,
    nextButtonText: Strings.translateString("Try Free for 14 Days"),
    buttonsInsideContent: !0
  });
};
(EnterpriseTrialDialog.prototype = Object.create(Dialog.prototype)),
  ((EnterpriseTrialDialog.prototype.constructor = EnterpriseTrialDialog).prototype.initialize = function (t) {
    var i;
    Dialog.prototype.initialize.apply(this, arguments),
      (i = this),
      t.find(".wbtn").bind("click", function () {
        i.close();
      }),
      t.find(".rbtn").bind("click", function () {
        LPPlatform.openURL(LPPlatform.getBaseURL() + "/enterprise_trial.php");
      });
  });
