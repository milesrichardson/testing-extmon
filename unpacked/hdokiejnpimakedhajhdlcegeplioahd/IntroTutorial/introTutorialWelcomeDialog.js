var IntroTutorialWelcomeDialog = function (o) {
  Dialog.call(this, o, {
    closeButtonEnabled: !1,
    maximizeButtonEnabled: !1,
    dynamicHeight: !0,
    hideHeader: !0,
    hideButtons: !0,
    confirmOnClose: !1
  });
};
(IntroTutorialWelcomeDialog.prototype = Object.create(Dialog.prototype)),
  ((IntroTutorialWelcomeDialog.prototype.constructor = IntroTutorialWelcomeDialog).prototype.initialize = function (o) {
    function t(o) {
      o.preventDefault(),
        bg.sendLpImprove("onboardingtour::welcomechoice", { action: "addsite", version: "sso" }),
        e.close(!0),
        dialogs.introTutorialSelectSite.open();
    }
    var e, n, i, r, a, l;
    Dialog.prototype.initialize.apply(this, arguments),
      (e = this),
      (n = o.find("#addSiteLink")),
      (i = o.find("#importLink")),
      (r = o.find("#noThanks, #btnClose")),
      (a = {
        importerHandler: {
          btnText: Strings.translateString("Download Importer"),
          handlerFn: function (o) {
            o.preventDefault(),
              LPPlatform.showDownloader()
                ? dialogs.introTutorialHelp.open({
                    alignBottom: !0,
                    addHide: !0,
                    textChoice: "downloadImporter",
                    arrow: { orientation: "bottom", position: "left" },
                    postSetup: function () {
                      window.location = LPProxy.getBaseURL() + "installer";
                    }
                  })
                : (window.location = LPProxy.getBaseURL() + "installer"),
              bg.sendLpImprove("onboardingtour::welcomechoice", { action: "download", version: "sso" }),
              e.close(!0);
          }
        }
      }),
      (l = LPPlatform.getImportHandler()) && a.hasOwnProperty(l) && i.text(a[l].btnText),
      n.bind("click", t),
      i.bind("click", function (o) {
        var t = LPPlatform.getImportHandler();
        t && a.hasOwnProperty(t) && a[t].handlerFn(o);
      }),
      r.bind("click", function (o) {
        o.preventDefault(),
          bg.sendLpImprove("onboardingtour::welcomechoice", { action: "nothanks", version: "sso" }),
          e.close(!0),
          LPPlatform.openTour();
      }),
      bg.sendLpImprove("onboardingtour::seen", { version: "sso" });
  }),
  (IntroTutorialWelcomeDialog.prototype.close = function (o) {
    var t;
    o
      ? Dialog.prototype.close.call(this, o)
      : ((t = this),
        dialogs.confirmation.open({
          title: Strings.translateString("Close"),
          text: Strings.translateString("Are you sure you'd like to exit the tutorial?"),
          handler: function () {
            bg.sendLpImprove("onboardingtour::welcomechoice", { action: "nothanks", version: "sso" }), t.close(!0);
          }
        })),
      LPProxy.setPreferences("showIntroTutorial", !1);
  });
