var IntroTutorialDialogOptions = (function () {
  "use strict";
  var t = function (t) {
    return (this.cssOptions = {}), (this.arrowOptions = {}), (this.trackElementOptions = {}), (this.name = ""), $.extend(this, t);
  };
  return (
    (t.prototype.getCssOptions = function () {
      return this.cssOptions;
    }),
    (t.prototype.getArrowOptions = function () {
      return this.arrowOptions;
    }),
    (t.prototype.getTrackElementOptions = function () {
      return this.trackElementOptions;
    }),
    (t.InContextIntroTutorialDialogDefaultOptions = new t({
      cssOptions: { width: "100%", height: "100%", "min-width": "168px" },
      arrowOptions: { show: !0, orientation: "left", position: "high" },
      trackElementOptions: { frameTranslation: { x: 10, y: -35 }, targetTranslation: { x: "100%", y: "50%" } },
      name: "inContextIntroTutorialHelpDialog"
    })),
    (t.InContextIntroTutorialDialogFlippedOptions = new t({
      cssOptions: { width: "100%", height: "100%", "min-width": "168px" },
      arrowOptions: { show: !0, orientation: "right", position: "high" },
      trackElementOptions: { frameTranslation: { x: -710, y: -35 }, targetTranslation: { x: "100%", y: "50%" } },
      name: "inContextIntroTutorialHelpDialog"
    })),
    (t.InContextIntroTutorialDialogNoArrowOptions = new t({
      cssOptions: { width: "100%", height: "100%", "min-width": "168px" },
      arrowOptions: { show: !1, orientation: "right", position: "high" },
      trackElementOptions: { frameTranslation: { x: 10, y: -35 }, targetTranslation: { x: "100%", y: "50%" } },
      name: "inContextIntroTutorialHelpDialog"
    })),
    (t.VaultIntroTutorialDialogOptions = new t({
      cssOptions: {},
      arrowOptions: { show: !0, orientation: "right", position: "middle" },
      trackElementOptions: { frameTranslation: { x: "-100%", y: "-50%" }, targetTranslation: { x: -10, y: "50%" } },
      name: "introTutorialHelp"
    })),
    t
  );
})();
