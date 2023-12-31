var ExtensionCreateAccountSimple = function (t) {
  ExtensionCreateAccount.call(this, t, {
    views: [
      { selector: "#emailEntry", nextButtonText: Strings.translateString("Create Account") },
      { selector: "#mpEntry", nextButtonText: Strings.translateString("Unlock my Vault") }
    ],
    additionalHeaderClasses: ["icon"],
    nextButtonText: Strings.translateString("Create Account")
  });
};
(ExtensionCreateAccountSimple.prototype = Object.create(ExtensionCreateAccount.prototype)),
  (ExtensionCreateAccountSimple.prototype.constructor = ExtensionCreateAccountSimple),
  (function () {
    var i;
    (ExtensionCreateAccountSimple.prototype.initialize = function (t) {
      ExtensionCreateAccount.prototype.initialize.apply(this, arguments);
      var e = this,
        n = ((e.data.version = "sso"), new FieldToolTip({ parentEl: t, isPopup: e.data.isPopup })),
        o;
      (i = new EmailToolTip({
        toolTipEl: t.find("#mpCurrentEmail"),
        parentEl: $("body"),
        emailField: e.inputFields.email,
        backActionFn: function () {
          e.showPreviousView();
        }
      })),
        $("body").addClass("login-background"),
        t.find("#signInBtn").bind("click", function (t) {
          t.preventDefault(), (window.location = "vault.html");
        }),
        ExtensionCreateAccount.prototype.setBackgroundOverlay(new BackgroundOverlay({ parentEl: $("body") }));
    }),
      (ExtensionCreateAccountSimple.prototype.setNextView = function (t) {
        ExtensionCreateAccount.prototype.setNextView.apply(this, arguments), i && i.toggle(0 < t);
      });
  })();
