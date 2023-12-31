var ExtensionSiteTutorialDialog = function (t) {
  SiteDialog.call(this, t);
};
(ExtensionSiteTutorialDialog.prototype = Object.create(SiteDialog.prototype)),
  ((ExtensionSiteTutorialDialog.prototype.constructor = ExtensionSiteTutorialDialog).prototype.setup = function (t, o) {
    var i;
    SiteDialog.prototype.setup.apply(this, arguments),
      new IntroTutorialHelpDialog().initialize(document, {
        makeShade: !1,
        alignBottom: !1,
        addHide: !0,
        transparentBG: !0,
        position: {
          positionFn: function () {
            return $(".buttons .rbtn").offset();
          },
          offset: { top: -140, left: -200 }
        },
        textChoice: "finishSaveSite",
        arrow: { orientation: "bottom", position: "right" }
      });
  });
