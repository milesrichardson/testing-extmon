var ExtensionCreateAccountIcon = function (t) {
  ExtensionCreateAccount.call(this, t, {
    views: [
      { selector: "#emailEntry", nextButtonText: Strings.translateString("Create an account") },
      { selector: "#mpEntry", nextButtonText: Strings.translateString("Next") }
    ],
    hideHeader: !0,
    nextButtonText: Strings.translateString("Create an account")
  });
};
(ExtensionCreateAccountIcon.prototype = Object.create(ExtensionCreateAccount.prototype)),
  (ExtensionCreateAccountIcon.prototype.constructor = ExtensionCreateAccountIcon),
  (function () {
    function n(t, e) {
      var n = new FieldToolTip({ parentEl: e, isPopup: t.data.isPopup });
    }
    function o(t, e) {
      var e = e.find("#emailEntry .buttons"),
        n = LPTools.createElement("button", "nbtn wbtn", Strings.translateString("Sign In"));
      e.prepend(n),
        $(n).bind("click", function (t) {
          t.preventDefault(), (window.location = "webclient-popover.html");
        });
    }
    function r(e, t) {
      var t = t.find("#mpEntry .buttons"),
        n = LPTools.createElement("button", "nbtn wbtn", Strings.translateString("Back"));
      t.prepend(n),
        $(n).bind("click", function (t) {
          e.showPreviousView();
        });
    }
    function i() {
      var t = {
        parentElement: $(".dialogContent .extensionCreateAccount"),
        shadeStyle: "light untransparent top-left",
        text: Strings.translateString("Getting things set up")
      };
      ExtensionCreateAccount.prototype.setBackgroundOverlay(new CompositeBackgroundOverlay(t));
    }
    function a(t) {
      function e(t, e, n) {
        n = n || "";
        var o = r(t.attr("placeholder"));
        function r(t) {
          return t ? Strings.translateString(t) : "";
        }
        t.focus(function () {
          e.text(o), t.attr("placeholder", n);
        }),
          t.blur(function () {
            $.trim(t.val()) || (e.text(""), t.attr("placeholder", o));
          });
      }
      e(
        t.find("#createAccountEmail"),
        t.find("#createAccountEmailLabel"),
        Strings.translateString("You'll use this to sign in to LastPass")
      ),
        e(
          t.find("#createAccountDialogPassword"),
          t.find("#createAccountDialogPasswordLabel"),
          Strings.translateString("Make it a strong one")
        ),
        e(t.find("#createAccountDialogConfirmPassword"), t.find("#createAccountDialogConfirmPasswordLabel")),
        e(t.find("#createAccountReminder"), t.find("#createAccountReminderLabel"), Strings.translateString("In case you forget"));
    }
    function c(t) {
      var e = bg.get("LPContentScriptFeatures");
      e && "context" === e.intro_tutorial_version ? t(!0) : t(!1);
    }
    (ExtensionCreateAccountIcon.prototype.initialize = function (t) {
      ExtensionCreateAccount.prototype.initialize.apply(this, arguments);
      var e = this;
      (e.data.version = "incontext"), n(e, t), o(e, t), r(e, t), i(), a(t);
    }),
      (ExtensionCreateAccountIcon.prototype.addError = function (o, t) {
        var r = this,
          e = this.inputFields[o],
          e;
        e &&
          (void 0 !== (e = e.getElement().attr("errorgroup")) &&
            this.$element.find("[dialogfield][errorgroup='" + e + "']").each(function (t, e) {
              var e = $(e).attr("dialogfield"),
                n = r.inputFields[e];
              e !== o && n && n.fieldValidator && !n.fieldValidator.isValid && n.fieldValidator.updateStateSummary(!0);
            }),
          ExtensionCreateAccount.prototype.addError.apply(this, arguments));
      }),
      (ExtensionCreateAccountIcon.prototype.showPreviousView = function () {
        var t = { currentPage: "mpw", version: this.data.version };
        bg.sendLpImprove("backregform", t),
          (this.element.className = "dialog"),
          ExtensionCreateAccount.prototype.showPreviousView.apply(this, arguments);
      }),
      (ExtensionCreateAccountIcon.prototype.setNextView = function (t) {
        ExtensionCreateAccount.prototype.hideInProcessOverlay(),
          (this.element.className = 0 < t ? "dialog large-view" : "dialog"),
          ExtensionCreateAccount.prototype.setNextView.apply(this, arguments);
      }),
      (ExtensionCreateAccountIcon.prototype.addPasswordEye = function (t) {
        t.LP_addPasswordEye({ checkPermissionHandler: this.checkViewPasswordHandler, textual: !0, showOnlyIfPopulated: !0 });
      }),
      (ExtensionCreateAccountIcon.prototype.close = function (t) {
        var e = this,
          n = arguments;
        c(function (t) {
          t || bg.removeModalOverlay(), ExtensionCreateAccount.prototype.close.apply(e, n);
        });
      }),
      (ExtensionCreateAccountIcon.prototype.open = function (t) {
        ExtensionCreateAccount.prototype.open.apply(this, arguments),
          (this.element.className = "dialog"),
          c(function (t) {
            !bg.get("g_isedge") && t && bg.showModalOverlay();
          });
      });
  })();
