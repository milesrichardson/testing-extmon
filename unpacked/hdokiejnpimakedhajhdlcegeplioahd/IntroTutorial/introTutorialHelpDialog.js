var IntroTutorialHelpDialog = function (t) {
  Dialog.call(this, t, { submitDialog: !1, confirmOnClose: !1, hideButtons: !0, hideHeader: !0, additionalClasses: "lmiDialog" });
};
(IntroTutorialHelpDialog.prototype = Object.create(Dialog.prototype)),
  (IntroTutorialHelpDialog.prototype.constructor = IntroTutorialHelpDialog),
  (function () {
    "use strict";
    (IntroTutorialHelpDialog.prototype.blurPreviousDialog = function () {}),
      (IntroTutorialHelpDialog.prototype.focusPreviousDialog = function () {}),
      (IntroTutorialHelpDialog.prototype.setArrowClass = function (t, e) {
        if (e.show) {
          var o = "arrow_box";
          switch (e.orientation) {
            case "top":
              o += " a-top";
              break;
            case "bottom":
              o += " a-bottom";
              break;
            case "left":
              o += " a-left";
              break;
            case "right":
              o += " a-right";
          }
          switch (e.position) {
            case "left":
              o += " a-h-left";
              break;
            case "center":
              o += " a-h-center";
              break;
            case "right":
              o += " a-h-right";
              break;
            case "high":
              o += " a-v-high";
              break;
            case "middle":
              o += " a-v-middle";
              break;
            case "low":
              o += " a-v-low";
          }
          if (e.positionTarget) {
            var a = t.get(0).getBoundingClientRect(),
              i = $(e.positionTarget).get(0).getBoundingClientRect(),
              r = document.styleSheets[0];
            switch (e.orientation) {
              case "top":
              case "bottom":
                var s = i.left - a.left + i.width / 2;
                r.insertRule(".arrow_box.a-top:before, .arrow_box.a-top:after { left: " + s + "px }", r.cssRules.length);
                break;
              case "left":
              case "right":
                var s = i.top - a.top + i.height / 2;
                r.insertRule(".arrow_box.a-top:before, .arrow_box.a-top:after { top: " + s + "px }", r.cssRules.length);
            }
          }
          t.find(".tutorialDialog").addClass(o);
        }
      }),
      (IntroTutorialHelpDialog.prototype.initialize = function (t, e) {
        var o;
        Dialog.prototype.initialize.apply(this, arguments),
          (o = this),
          t.find(".hideButton").bind("click", function () {
            o.close();
          });
      }),
      (IntroTutorialHelpDialog.prototype.setup = function (t, e) {
        Dialog.prototype.setup.apply(this, arguments);
        var o = t.find(".topText"),
          a = t.find(".bottomText");
        switch (e.textChoice) {
          case "saveSite":
            o.text(Strings.translateString("Add site to LastPass")),
              a.text(Strings.translateString("Simply select 'Add' and we will add %s to your vault", e.siteName));
            break;
          case "siteLanding":
            o.text(Strings.translateString("Good choice!")), a.text(Strings.translateString("Next, sign in to your account."));
            break;
          case "tryAgain":
            o.text(Strings.translateString("Login failed")), a.text(Strings.translateString("Please try again."));
            break;
          case "downloadImporter":
            o.text(Strings.translateString("The LastPass Importer is downloading")),
              a.text(Strings.translateString("When it's done, just run it!")),
              setTimeout(this.createHandler(this.close), 15e3);
            break;
          case "loggingout":
            o.text(Strings.translateString("Just a second...")), a.text(Strings.translateString("Logging you out"));
        }
        this.setArrowClass(t, e.arrow),
          e.parentDialog && dialogs[e.parentDialog].getDialog().addChildDialog(this),
          e.css && t.css(e.css),
          e.addHide && t.addClass("allowHide"),
          e.alignBottom && t.css({ top: "auto", right: "auto", bottom: 15, left: 30 });
      });
  })();
