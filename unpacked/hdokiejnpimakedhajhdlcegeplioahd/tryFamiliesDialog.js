var TryFamiliesDialog = function (i) {
  Dialog.call(this, i, {
    additionalHeaderClasses: [],
    dynamicHeight: !0,
    buttonsInsideContent: !0,
    closeButtonEnabled: !0,
    title: Strings.translateString("A modern safe for today's digital family")
  });
};
(TryFamiliesDialog.prototype = Object.create(Dialog.prototype)),
  ((TryFamiliesDialog.prototype.constructor = TryFamiliesDialog).prototype.initialize = function (i) {
    var e = this,
      t =
        (Topics.get(Topics.REFRESH_DATA).subscribe(function () {
          LPProxy.isFamilyUser() && (e.close(), LPPlatform.openTour());
        }),
        LPProxy.isFamiliesTrialStarted()),
      o;
    Dialog.prototype.initialize.apply(this, arguments),
      (o = this),
      i.find("#try-families-spinner").hide(),
      i.find(".dialogCloseButton").bind("click", function () {
        var i = 864e5;
        localStorage.setItem("lp_families_dialog_snooze_timestamp", Date.now() + i);
        var i,
          i = (i = localStorage.getItem("lp_families_dialog_snooze_count")) ? parseInt(i) + 1 : 1;
        localStorage.setItem("lp_families_dialog_snooze_count", i),
          bg.sendLpImprove("try_families_lightbox_click", { action: "close" }),
          o.close();
      }),
      t
        ? (i.find("#families-try-no-thanks").remove(),
          i.find("#learn-more").remove(),
          i
            .find("#families-try-now")
            .bind("click", function () {
              bg.sendLpImprove("try_families_lightbox_click", { action: "learn_more" }), TryFamiliesDialog.prototype.learnMore();
            })
            .text(Strings.translateString("Learn More")))
        : (i.find("#families-try-no-thanks").bind("click", function () {
            localStorage.setItem("lp_try_families_dialog_declined", Date.now()),
              bg.sendLpImprove("try_families_lightbox_click", { action: "no_thanks" }),
              o.close();
          }),
          i.find("#families-try-now").bind("click", function () {
            bg.sendLpImprove("try_families_lightbox_click", { action: "try_now" }), TryFamiliesDialog.prototype.startTrial();
          }));
  }),
  (TryFamiliesDialog.prototype.startTrial = function () {
    LPRequest.makeRequest(LPProxy.familiesExistingUserTrial, { params: { device: "desktop" } });
  }),
  (TryFamiliesDialog.prototype.learnMore = function () {
    var i;
    top.window.open("https://www.lastpass.com/families/", "_blank");
  }),
  (TryFamiliesDialog.prototype.showInProcessOverlay = function () {
    $("#try-families-spinner").show(),
      $("#try-families-text").hide(),
      $("#try-families-icon").hide(),
      $("#families-try-now").prop("disabled", !0),
      $("#families-try-close").prop("disabled", !0);
  }),
  (TryFamiliesDialog.prototype.hideInProcessOverlay = function () {
    $("#try-families-spinner").hide(),
      $("#try-families-text").show(),
      $("#try-families-icon").show(),
      $("#families-try-now").prop("disabled", !1),
      $("#families-try-close").prop("disabled", !1);
  }),
  (TryFamiliesDialog.prototype.postSetup = function (i) {
    Dialog.prototype.postSetup.apply(this, arguments), (i = i || {}).forceAccepted && TryFamiliesDialog.prototype.startTrial();
  });
