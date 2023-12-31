var InContextTutorialLogoutPromptDialog = function (t) {
  Dialog.call(this, t, {
    closeButtonEnabled: !1,
    maximizeButtonEnabled: !1,
    dynamicHeight: !1,
    hideHeader: !0,
    hideButtons: !0,
    confirmOnClose: !1
  });
};
(InContextTutorialLogoutPromptDialog.prototype = Object.create(Dialog.prototype)),
  (InContextTutorialLogoutPromptDialog.prototype.constructor = InContextTutorialLogoutPromptDialog),
  (function (t) {
    (InContextTutorialLogoutPromptDialog.prototype.initialize = function (t) {
      Dialog.prototype.initialize.apply(this, arguments);
      var o = this,
        i,
        e;
      function n() {
        "undefined" != typeof event && event.preventDefault(),
          bg.sendLpImprove("onboardingtour::complete_intro_auto_fill_tool_tip", { action: "showmehow", version: "incontext" }),
          bg.IntroTutorial.setState({ firstLogin: !0, isLoginTheLastPassWay: !0, inContextOnboardingStep: "try_autofill" }),
          bg.IntroTutorial.getState(function (t) {
            var o;
            LPSiteService.getSite(t.domains[0]).goToLogin();
          });
      }
      function r() {
        "undefined" != typeof event && event.preventDefault(),
          bg.sendLpImprove("onboardingtour::complete_intro_auto_fill_tool_tip", { action: "skipthis", version: "incontext" }),
          bg.IntroTutorial.completeTutorial({ textChoice: "skipped" }),
          o.close();
      }
      bg.IntroTutorial.setState({ isSiteSaved: !0 }),
        t.find("#showMeHow").bind("click", n),
        t.find("#skipThis").bind("click", r),
        bg.sendLpImprove("onboardingtour::view_intro_auto_fill_tool_tip", { version: "incontext" });
    }),
      (InContextTutorialLogoutPromptDialog.prototype.getSize = function () {
        return { "max-height": "100%", "max-width": "100%" };
      });
  })(jQuery);
