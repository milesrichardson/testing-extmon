var ExtensionLoginDialogSimple = function (e) {
  ExtensionLoginDialog.call(this, e, { confirmOnClose: !0, responsive: !1 });
};
(ExtensionLoginDialogSimple.prototype = Object.create(ExtensionLoginDialog.prototype)),
  (ExtensionLoginDialogSimple.prototype.constructor = ExtensionLoginDialogSimple),
  (function () {
    var r,
      t = null;
    function o(o, a, n) {
      return function (e, i) {
        var t = !1;
        return (
          n &&
            (o.clearError(a),
            (t = n.validate(
              e,
              function (e) {
                o.addError(a, e);
              },
              i
            ))),
          t
        );
      };
    }
    function l(e) {
      var i = new FieldValidator({
        summary: {
          id: "validatorSummaryEmail",
          parentEl: $("label[for='loginDialogEmail'].error-summary"),
          labelEl: $("label[for='loginDialogEmail'].label")
        },
        validators: [
          {
            id: "emailRequired",
            name: LPTools.createElement("p", null, Strings.translateString("Email required")),
            errorMsg: LPTools.createElement("p", null, Strings.translateString("Please enter your email.")),
            isValid: function (e) {
              return "" !== e.email;
            }
          }
        ]
      });
      e.inputFields.email.validate = o(e, "email", i);
    }
    function s(e) {
      var i = new FieldValidator({
        summary: {
          id: "validatorSummaryPassword",
          parentEl: $("label[for='loginDialogPassword'].error-summary"),
          labelEl: $("label[for='loginDialogPassword'].label")
        },
        validators: [
          {
            id: "passwordRequired",
            name: LPTools.createElement("p", null, Strings.translateString("Password required")),
            errorMsg: LPTools.createElement("p", null, Strings.translateString("Please enter your password.")),
            isValid: function (e) {
              return "" !== e.password;
            }
          }
        ]
      });
      e.inputFields.password.validate = o(e, "password", i);
    }
    (ExtensionLoginDialogSimple.prototype.startLoginChecker = function (e) {
      var i;
      null === t &&
        ((i = this),
        (t = setInterval(function () {
          "undefined" == typeof VaultState && bg.getData && bg.getData({ context: "login" }),
            bg.get("lploggedin")
              ? (clearInterval(t),
                (t = null),
                e && "undefined" == typeof InstallTrigger ? bg.disablepasswordmanager(e, i) : i.handleLoggedIn())
              : bg.get("g_badgedata") &&
                "notification" === bg.get("g_badgedata").cmd &&
                "error" === bg.get("g_notification_type") &&
                (clearInterval(t),
                (t = null),
                dialogs.alert.open({
                  title: Strings.translateString("Login Error"),
                  text: Strings.translateString(bg.get("g_notification_data").msg),
                  onResize: i.data.onResize,
                  handler: function () {
                    r.hide(), reduxApp.setNotification(null), bg.clear_badge();
                  }
                }));
        }, 1e3)));
    }),
      (ExtensionLoginDialogSimple.prototype.handleLoggedIn = function () {
        this.close(!0);
      }),
      (ExtensionLoginDialogSimple.prototype.initialize = function (e) {
        var i, t, o, a, n;
        ExtensionLoginDialog.prototype.initialize.apply(this, arguments),
          l(this),
          s(this),
          Topics.get(Topics.CLEAR_DATA).subscribe(function () {
            r.hide();
          }),
          this.inputFields.rememberPassword.getElement().bind(
            "click",
            ((i = this),
            (t = !1),
            (o = function () {
              (t = !0), i.inputFields.rememberPassword.setValue(!0), r.hide();
            }),
            function () {
              var e = i.inputFields.rememberPassword.getValue();
              !t && e
                ? (r.show(),
                  dialogs.confirmation.open({
                    title: Strings.translateString("Are you sure?"),
                    text:
                      Strings.translateString(
                        "Saving your Master Password on this device is like leaving the keys in the door to your Vault."
                      ) +
                      "<br/><br/>" +
                      Strings.translateString(
                        "You should make sure this device is in a secure location and unlikely to be lost or stolen before enabling this option."
                      ),
                    handler: o,
                    closeHandler: function () {
                      r.hide();
                    },
                    onResize: i.data.onResize
                  }),
                  i.inputFields.rememberPassword.setValue(!1))
                : (t = !1);
            })
          ),
          (a = this).inputFields.email.getElement().change(function (e) {
            a.inputFields.password.validate({ email: a.inputFields.email.getValue() }),
              a.inputFields.email.validate({ email: a.inputFields.email.getValue() });
          }),
          a.inputFields.password.onChange(function (e) {
            e && a.inputFields.password.validate({ password: e });
          }),
          $("#changePasswordVisibility").click(function () {
            $(this).hasClass("show")
              ? ((a.inputFields.password.input[0].type = "password"), $(this).removeClass("show"))
              : ((a.inputFields.password.input[0].type = "text"), $(this).addClass("show"));
          }),
          $("#forgotPassword").off("click"),
          $("#forgotPassword").bind("click", function () {
            LPPlatform.openURL(LPPlatform.getBaseURL() + "forgot.php"), a.data.isPopup && a.close(!0);
          }),
          $("#newToLastPass").off("click"),
          $("#newToLastPass").bind("click", function (e) {
            e.preventDefault(),
              a.data.isPopup
                ? bg.get("LPContentScriptFeatures") && "context" === bg.get("LPContentScriptFeatures").intro_tutorial_version
                  ? bg.get("g_isedge")
                    ? (ExtensionDropdown.openDialog("createAccountIcon"), a.close(!0))
                    : bg.showModalOverlay(function () {
                        ExtensionDropdown.openDialog("createAccountIcon"), a.close(!0);
                      })
                  : (bg.LPPlatform.openTabDialog("createAccountSimple"), a.close(!0))
                : (dialogs.createAccountSimple.open(), a.close(!0));
          }),
          e.find(".showKeyboard").off("click"),
          e.find(".showKeyboard").bind("click", function () {
            a.data.isPopup ? (bg.LPPlatform.openTabDialog("loginSimple", { virtualKeyboard: !0 }), a.close(!0)) : a.toggleKeyboard();
          }),
          (n = { parentEl: $("body") }),
          a.data.isPopup && (n.shadeStyle = "light"),
          (a.backgroundOverlay = r = a.initializeBackgroundOverlay(n)),
          a.data.isPopup || $("body").addClass("login-background");
      }),
      (ExtensionLoginDialogSimple.prototype.initializeBackgroundOverlay = function (e) {
        return new BackgroundOverlay(e);
      }),
      (ExtensionLoginDialogSimple.prototype.close = function (e) {
        var i;
        e
          ? Dialog.prototype.close.apply(this, arguments)
          : ((i = this),
            LPTools.getOption(i.data, "showcloseconfirm", !0)
              ? (r.show(),
                dialogs.confirmation.open({
                  title: "LastPass",
                  text: Strings.translateString("Do you really want to quit? You cannot use LastPass without logging in to an account."),
                  closeHandler: function () {
                    r.hide();
                  },
                  handler: function () {
                    i.close(!0);
                  }
                }))
              : i.close(!0));
      }),
      (ExtensionLoginDialogSimple.prototype.handleSubmit = function (t) {
        var o, a;
        bg.sendLpEvent("login_clicked"),
          (t.email = bg.fix_username(t.email)),
          bg.Preferences.set({ rememberemail: t.rememberEmail, rememberpassword: t.rememberPassword }),
          bg.loggedOut(!0, "login"),
          bg.g_isLoginWithFederatedEmail
            ? (bg.FederatedLogin.login(t.email, t.rememberEmail), this.close(!0))
            : (bg.make_lp_key_hash(
                t.email,
                t.password,
                ((o = bg),
                (a = this),
                function (e, i) {
                  o.set("g_manual_login", !0),
                    o.LP_do_login(t.email, t.password, t.rememberEmail, t.rememberPassword, null, t.rememberShowVault, e, i),
                    a.data.isPopup &&
                      (t.disablePasswordManager && "undefined" == typeof InstallTrigger
                        ? o.disablepasswordmanager(t.disablePasswordManager, a)
                        : a.close(!0));
                })
              ),
              (this.data.isPopup && !this.options.showLoading) || r.show(!0),
              this.data.isPopup
                ? t.disablePasswordManager && bg.disablepasswordmanager(t.disablePasswordManager, this)
                : this.startLoginChecker(t.disablePasswordManager));
      }),
      (ExtensionLoginDialogSimple.prototype.addError = function (e, i) {
        var t = this.inputFields[e];
        t &&
          (t._errors.push(i),
          (t.clearErrors = function () {
            (this._errors = []),
              t._errorElement && t._errorElement.remove(),
              (this._errorElement = null),
              (t.inputObject.input[0].className = t.inputObject.input[0].className.replace(" errorInput", ""));
          }),
          t.inputObject.input[0].className.includes("errorInput") || (t.inputObject.input[0].className += " errorInput"));
      }),
      (ExtensionLoginDialogSimple.prototype.clearError = function (e) {
        var e = this.inputFields[e];
        e && e.clearErrors();
      }),
      (ExtensionLoginDialogSimple.prototype.validateField = function (e, i, t, o) {
        var a = !1;
        return (
          i &&
            (this.clearError(t),
            (a = i.validate(
              e,
              function (e) {
                this.addError(t, e);
              },
              !0
            )),
            o) &&
            (!1 === a ? o.hide() : o.show()),
          a
        );
      }),
      (ExtensionLoginDialogSimple.prototype.validate = function (e) {
        var i = Dialog.prototype.validate.apply(this, arguments),
          i = this.inputFields.email.validate(e);
        return (i &= this.inputFields.password.validate(e));
      });
  })();
