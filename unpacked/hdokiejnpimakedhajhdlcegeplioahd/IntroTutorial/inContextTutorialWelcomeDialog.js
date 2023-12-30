var InContextTutorialWelcomeDialog = function (e) {
  Dialog.call(this, e, {
    closeButtonEnabled: !1,
    maximizeButtonEnabled: !1,
    dynamicHeight: !1,
    hideHeader: !0,
    hideButtons: !0,
    confirmOnClose: !1
  });
};
(InContextTutorialWelcomeDialog.prototype = Object.create(Dialog.prototype)),
  (InContextTutorialWelcomeDialog.prototype.constructor = InContextTutorialWelcomeDialog),
  (function (e) {
    function p(t, e, o, n) {
      var o = new lpTile({
        id: o,
        name: n.displayName,
        tileClass: "tile-sm",
        iconSrc: IntroTutorialImages.getImage(n.displayName.toLowerCase(), "square"),
        clickHandler: function (e) {
          bg.removeModalOverlay(),
            e.preventDefault(),
            t.close(!0),
            bg.sendLpImprove("onboardingtour::selected", { action: n.getDomainCode(), version: "incontext" }),
            bg.IntroTutorial.setState({
              enabled: !0,
              domains: n.domains,
              name: n.displayName,
              tile: n.getDomainCode(),
              isInContext: !0,
              firstLogin: !0,
              inContextOnboardingStep: "add_first_site",
              isAllSet: !1
            }),
            bg.get("g_issafari_appext") ? bg.openURL(n.loginURL) : n.goToLogin();
        }
      });
      e.append(o.$tileEl);
    }
    (InContextTutorialWelcomeDialog.prototype.initialize = function (e) {
      Dialog.prototype.initialize.apply(this, arguments);
      for (var t = this, o = e.find("#tileContainer"), n = LPSiteService.getSites(), i = 0; i < n.length; i++)
        p(t, o, "#tile" + (i + 1), n[i]);
      function a(e) {
        e.preventDefault(),
          bg.sendLpImprove("onboardingtour::selected", { action: "nothanks", version: "incontext" }),
          LPProxy.setPreferences("showIntroTutorial", !1),
          bg.IntroTutorial.completeTutorial({ textChoice: "skipped" }),
          t.close(!0),
          t.element.remove();
      }
      var r = !0,
        l = LPProxy.getPreference("ShowIntroTutorialLater", null),
        l = (l && Date.now() >= new Date(l) && (r = !1), e.find("#showLater")),
        s = e.find("#noThanks"),
        c;
      r
        ? (s.hide(),
          l.show(),
          l.bind("click", function (e) {
            e.preventDefault(), bg.sendLpImprove("onboardingtour::selected", { action: "later", version: "incontext" });
            var e = new Date();
            e.setDate(e.getDate() + 3),
              LPProxy.setPreferences("ShowIntroTutorialLater", e.toString()),
              bg.IntroTutorial.completeTutorial({ textChoice: "skipped" }),
              t.close(!0),
              t.element.remove();
          }))
        : (l.hide(), s.show(), s.bind("click", a)),
        e.find("#btnClose").bind("click", a),
        bg.sendLpImprove("onboardingtour::seen", { version: "incontext" });
    }),
      (InContextTutorialWelcomeDialog.prototype.getSize = function () {
        return { "max-height": "100%", "max-width": "100%" };
      }),
      (InContextTutorialWelcomeDialog.prototype.open = function (e) {
        Dialog.prototype.open.apply(this, arguments), bg.showModalOverlay();
      });
  })(jQuery);
