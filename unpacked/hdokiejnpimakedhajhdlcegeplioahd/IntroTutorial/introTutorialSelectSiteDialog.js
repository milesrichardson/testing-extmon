var IntroTutorialSelectSiteDialog = function (t) {
  Dialog.call(this, t, {
    closeButtonEnabled: !1,
    maximizeButtonEnabled: !1,
    dynamicHeight: !0,
    hideHeader: !0,
    hideButtons: !0,
    confirmOnClose: !1
  });
};
(IntroTutorialSelectSiteDialog.prototype = Object.create(Dialog.prototype)),
  (IntroTutorialSelectSiteDialog.prototype.constructor = IntroTutorialSelectSiteDialog),
  (function (r) {
    (IntroTutorialSelectSiteDialog.prototype.getBigIcon = function (t) {
      var e = null;
      return (e = r ? r.getImage(t.toLowerCase(), "large") : e);
    }),
      (IntroTutorialSelectSiteDialog.prototype.initialize = function (t) {
        Dialog.prototype.initialize.apply(this, arguments);
        var e = this,
          o = t.find("#btnClose");
        function i(t, e, o) {
          var i = t.find(e + " .bigIcon"),
            n = t.find(e + " .launchButton"),
            a = IntroTutorialSelectSiteDialog.prototype.getBigIcon(name),
            i =
              (i.attr("src", r.getImage(o.displayName.toLowerCase(), "large")),
              n.attr("href", o.loginURL),
              n.click(o.loginURL, function (t) {
                t.preventDefault(),
                  bg.sendLpImprove("onboardingtour::selected", { action: o.getDomainCode(), version: "sso" }),
                  bg.IntroTutorial.setState({
                    enabled: !0,
                    domain: o.domain,
                    name: o.displayName,
                    tile: o.getDomainCode(),
                    firstLogin: !0
                  }),
                  o.goToLogin();
              }),
              t.find(e + " .name")),
            n = t.find(e + " .overlayHelpText");
          i.text(name), n.text(n.text() + " " + name);
        }
        for (var n = LPSiteService.getSites(), a = 0; a < n.length; a++) i(t, "#tile" + (a + 1), n[a]);
        o.bind("click", function (t) {
          t.preventDefault(), e.close(!0), LPPlatform.openTour();
        });
      }),
      (IntroTutorialSelectSiteDialog.prototype.close = function (t) {
        t
          ? (bg.sendLpImprove("onboardingtour::selected", { action: "nothanks", version: "sso" }), Dialog.prototype.close.call(this, t))
          : dialogs.confirmation.open({
              title: Strings.translateString("Close"),
              text: Strings.translateString("Are you sure you'd like to exit the tutorial?"),
              handler: this.createHandler(this.close, !0)
            });
      });
  })(IntroTutorialImages);
