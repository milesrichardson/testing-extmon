var ExtensionCreateAccount = function (e, t) {
  (t = t || {}),
    Dialog.call(
      this,
      e,
      $.extend(t, {
        dynamicHeight: !1,
        responsive: !1,
        buttonAlign: this.RIGHT_ALIGN,
        largeButtons: !0,
        buttonsInsideContent: !0,
        title: Strings.translateString("Create Account"),
        hideHeaderTitle: !0,
        hideBackButton: !0,
        version: ""
      })
    ),
    (this.isSubmitting = !1);
};
(ExtensionCreateAccount.prototype = Object.create(CreateAccountDialog.prototype)),
  (ExtensionCreateAccount.prototype.constructor = ExtensionCreateAccount),
  (function () {
    var a,
      t,
      r = !1;
    function i() {
      var e = document.getElementById("chooseOtherwise");
      e &&
        (e.addEventListener("click", function (e) {
          n();
        }),
        e.addEventListener("keypress", function (e) {
          var t;
          32 === (e.keyCode || e.which) && n();
        }));
    }
    function n() {
      var e = document.querySelector(".contactPermissionContainer");
      e && ((r = !0), e.classList.add("is-expanded"));
    }
    function s() {
      a.inputFields.email.getElement().unbind("change"),
        a.inputFields.email.onChange(function (t) {
          t &&
            c(t, function (e) {
              a.inputFields.email.validate({ response: e }), b(t);
            });
        });
    }
    function o() {
      a.inputFields.password.onChange(function (e) {
        e && a.inputFields.password.validate({ password: a.inputFields.password.getValue(), email: a.inputFields.email.getValue() });
      }),
        a.inputFields.password.getElement().keyup(function (e) {
          a.inputFields.password.validate({ password: a.inputFields.password.getValue(), email: a.inputFields.email.getValue() }, !0);
        });
    }
    function l() {
      a.inputFields.reconfirm.onChange(function (e) {
        e &&
          a.inputFields.reconfirm.validate({ reconfirm: a.inputFields.reconfirm.getValue(), password: a.inputFields.password.getValue() });
      });
    }
    function d() {
      a.inputFields.reminder.onChange(function (e) {
        e && a.inputFields.reminder.validate({ reminder: a.inputFields.reminder.getValue(), password: a.inputFields.password.getValue() });
      });
    }
    function c(e, t) {
      bg.LPServer.textRequest({
        type: "GET",
        url: "create_account.php",
        CSRFToken: !1,
        data: { username: e, check: "avail", mistype: 1 },
        success: t,
        error: t
      });
    }
    function e(e, t) {
      bg.LPServer.jsonRequest({ type: "GET", url: "lmiapi/client-config", CSRFToken: !1, data: {}, success: t, error: e });
    }
    function u(e) {
      return { masterPasswordLength: e.masterPasswordLength, anonymousFeatureSwitches: e.anonymousFeatureSwitches };
    }
    function p() {
      e(
        function () {
          var e;
          h({ masterPasswordLength: 12, anonymousFeatureSwitches: [] }),
            console.log("Something went wrong with the request. Defaulting to presets.");
        },
        function (e) {
          var t;
          h(u(e));
        }
      );
    }
    function m(e) {
      var t = e.anonymousFeatureSwitches,
        n = [];
      if (!(t.length < 1)) for (var r = 0; r < t.length; r++) t[r].value && n.push(t[r].name);
      return n;
    }
    function g() {
      var e = {},
        e =
          (zxcvbnts.addToDictionary(e, zxcvbnts["language-common"].dictionary),
          zxcvbnts.addToDictionary(e, zxcvbnts["language-en"].dictionary),
          zxcvbnts.addToDictionary(e, zxcvbnts["language-de"].dictionary),
          zxcvbnts.addToDictionary(e, zxcvbnts["language-es-es"].dictionary),
          zxcvbnts.addToDictionary(e, zxcvbnts["language-fr"].dictionary),
          zxcvbnts.addToDictionary(e, zxcvbnts["language-it"].dictionary),
          zxcvbnts.addToDictionary(e, zxcvbnts["language-nl-be"].dictionary),
          zxcvbnts.addToDictionary(e, zxcvbnts["language-pt-br"].dictionary),
          {
            useLevenshteinDistance: !0,
            translations: zxcvbnts["language-en"].translations,
            graphs: zxcvbnts["language-common"].adjacencyGraphs,
            dictionary: e
          });
      zxcvbnts.core.zxcvbnOptions.setOptions(e);
    }
    function f(r, i) {
      return function (e, t) {
        var n = !1;
        return (
          i &&
            (a.clearError(r),
            (n = i.validate(
              e,
              function (e) {
                a.addError(r, e);
              },
              t
            ))),
          n
        );
      };
    }
    function v() {
      var e, t, e;
      a.inputFields.email.fieldValidator ||
        ((e = LPTools.createElement(
          "a",
          { class: "pull-right recovery-link", href: "https://lastpass.com/forgot.php", target: "_blank" },
          Strings.translateString("Recovery Help")
        )),
        (t = LPTools.createElement("p", null, Strings.translateString("Email address already in use "))).appendChild(e),
        (e = new FieldValidator({
          summary: {
            id: "validatorSummaryEmail",
            parentEl: $("label[for='createAccountEmail'].error-summary"),
            labelEl: $("label[for='createAccountEmail'].validator-label")
          },
          validators: [
            {
              id: "403",
              errorMsg: LPTools.createElement(
                "p",
                null,
                Strings.translateString("You've made too many attempts, wait 5 minutes and try again.")
              ),
              isValid: function (e) {
                return !(e.response.status && 403 === e.response.status);
              }
            },
            {
              id: "emailUsed",
              errorMsg: t,
              isValid: function (e) {
                return "no" !== e.response;
              }
            },
            {
              id: "emailInvalid",
              errorMsg: LPTools.createElement("p", null, Strings.translateString("Make sure to use a real email address")),
              isValid: function (e) {
                return "ok" === e.response && 0 !== e.response.indexOf("mistype:") && "emailinvalid" !== e.response;
              }
            }
          ]
        })),
        (a.inputFields.email.validate = f("email", e)),
        (a.inputFields.email.fieldValidator = e));
    }
    function w() {
      a.getConsentDetails(function (e) {
        var t = document.querySelector(".extensionCreateAccount"),
          n,
          r;
        (document.querySelector(".createAccountLoading").style.display = "none"),
          (t.style.display = "block"),
          (document.getElementById("termsAndConditionsSimple").style.display = "none");
      });
    }
    function h(e) {
      var t = bg.passwordValidator(),
        n = m(e),
        r = e.masterPasswordLength,
        e,
        n;
      function i(e, t) {
        return 25 * zxcvbnts.calculatePasswordStrength(e, t);
      }
      (a.inputFields.password.fieldValidator && "" !== a.inputFields.password.input.val()) ||
        ((e = [
          {
            id: "passwordLength",
            name: LPTools.createElement("p", null, Strings.translateString("At least 12 characters long")),
            errorMsg: LPTools.createElement("p", null, Strings.translateString("Must be at least 12 characters")),
            priority: 1,
            isValid: function (e) {
              return !0 === (e.password && e.password.length >= r);
            }
          },
          {
            id: "passwordNumber",
            name: LPTools.createElement("p", null, Strings.translateString("At least 1 number")),
            errorMsg: LPTools.createElement("p", null, Strings.translateString("Must have at least 1 number")),
            priority: 2,
            isValid: function (e) {
              return !0 === (e.password && -1 < e.password.search(/^(?=.*[0-9]).+$/));
            }
          },
          {
            id: "passwordUpper",
            name: LPTools.createElement("p", null, Strings.translateString("At least 1 uppercase letter")),
            errorMsg: LPTools.createElement("p", null, Strings.translateString("Must have at least 1 uppercase letter")),
            priority: 3,
            isValid: function (e) {
              return !0 === (e.password && -1 < e.password.search(/^(?=.*[A-Z]).+$/));
            }
          },
          {
            id: "passwordLower",
            name: LPTools.createElement("p", null, Strings.translateString("At least 1 lowercase letter")),
            errorMsg: LPTools.createElement("p", null, Strings.translateString("Must have at least 1 lowercase letter")),
            priority: 4,
            isValid: function (e) {
              return !0 === (e.password && -1 < e.password.search(/^(?=.*[a-z]).+$/));
            }
          },
          {
            id: "passwordSpecial",
            name: LPTools.createElement("p", null, Strings.translateString("At least 1 special character")),
            errorMsg: LPTools.createElement("p", null, Strings.translateString("Must have at least 1 special character")),
            priority: 5,
            isValid: function (e) {
              var t;
              return (
                !0 ===
                (e.password &&
                  -1 < e.password.search(/[ !"#$%&'()*+,\-.\/:;=<>?@\[\\\]^_`|{}~\u00A0¡¢£¤¥¦§¨©ª«¬\u00AD®¯°±²³´µ¶·¸¹º»¼½¾¿]/g))
              );
            }
          },
          {
            id: "passwordSameAsEmail",
            name: LPTools.createElement("p", null, Strings.translateString("Not your email")),
            errorMsg: LPTools.createElement("p", null, Strings.translateString("Don't use your email")),
            priority: 7,
            isValid: function (e) {
              return (
                !0 ===
                (e.password &&
                  e.email &&
                  -1 === e.password.toLowerCase().indexOf(e.email.toLowerCase()) &&
                  -1 === e.email.toLowerCase().indexOf(e.password.toLowerCase()))
              );
            }
          }
        ]),
        (bg.get("g_password_strength_hardening_enabled") || -1 < n.indexOf("password_strength_hardening")) &&
          (g(),
          e.unshift({
            id: "passwordStrength",
            name: LPTools.createElement("p", null, Strings.translateString("Strength meter at maximum")),
            errorMsg: LPTools.createElement("p", null, Strings.translateString("Strength meter must be at maximum")),
            priority: 6,
            isValid: function (e) {
              return 100 === i(e.password, e.email);
            }
          })),
        (n = new FieldValidator({
          summary: {
            id: "validatorSummaryPassword",
            parentEl: $("label[for='createAccountDialogPassword'].error-summary"),
            labelEl: $("label[for='createAccountDialogPassword'].validator-label"),
            errorMsg: LPTools.createElement("p", null, Strings.translateString("Sorry, your password is invalid"))
          },
          listParentEl: $("#mpValidators"),
          isPopup: a.data.isPopup,
          validators: e
        })),
        (a.inputFields.password.validate = f("password", n)),
        (a.inputFields.password.fieldValidator = n));
    }
    function y() {
      var e;
      (a.inputFields.reconfirm.fieldValidator && "" !== a.inputFields.reconfirm.input.val()) ||
        ($("#twinsies").hide(),
        (e = new FieldValidator({
          summary: {
            id: "validatorSummaryReconfirm",
            parentEl: $("label[for='createAccountDialogConfirmPassword'].error-summary"),
            labelEl: $("label[for='createAccountDialogConfirmPassword'].validator-label, #twinsies")
          },
          validators: [
            {
              id: "reconfirmSameAsPassword",
              name: LPTools.createElement("p", null, Strings.translateString("Reconfirm same as password")),
              errorMsg: LPTools.createElement("p", null, Strings.translateString("Make sure this matches your master password")),
              isValid: function (e) {
                return !0 === (e.reconfirm && e.password === e.reconfirm);
              }
            }
          ]
        })),
        (a.inputFields.reconfirm.validate = f("reconfirm", e)),
        (a.inputFields.reconfirm.fieldValidator = e));
    }
    function S() {
      var e;
      (a.inputFields.reminder.fieldValidator && "" !== a.inputFields.reminder.input.val()) ||
        ((e = new FieldValidator({
          summary: {
            id: "validatorSummaryReminder",
            parentEl: $("label[for='createAccountReminder'].error-summary"),
            labelEl: $("label[for='createAccountReminder'].validator-label")
          },
          validators: [
            {
              id: "reminderNotPassword",
              name: LPTools.createElement("p", null, Strings.translateString("Reminder doesn't contain password")),
              errorMsg: LPTools.createElement("p", null, Strings.translateString("Reminder can't contain your master password")),
              isValid: function (e) {
                return !(e.password && -1 !== e.reminder.toLowerCase().indexOf(e.password.toLowerCase()));
              }
            }
          ]
        })),
        (a.inputFields.reminder.validate = f("reminder", e)),
        (a.inputFields.reminder.fieldValidator = e));
    }
    function E() {
      var e = [],
        t;
      for (t in a.inputFields)
        a.inputFields.hasOwnProperty(t) &&
          a.inputFields[t].fieldValidator &&
          (e = e.concat(a.inputFields[t].fieldValidator.getValidationList()));
      return e;
    }
    function b(e) {
      e && $("#masterPasswordDialogTitle").text(e).attr("title", e);
    }
    (ExtensionCreateAccount.prototype.initialize = function (e) {
      CreateAccountDialog.prototype.initialize.apply(this, arguments),
        $(".meterContainer").remove(),
        this.inputFields.password.getElement().LP_addPasswordMeter(this.inputFields.email.getElement(), !this.data.isPopup),
        (a = this);
      var t = e.find(".buttonContent"),
        n = e.find(".buttons").detach();
      t.append(n),
        v(),
        w(),
        s(),
        o(),
        l(),
        d(),
        i(),
        Topics.get(Topics.ERROR).subscribe(function (e) {
          dialogs.alert.open({
            title: "LastPass",
            text: e,
            onClose: function () {
              a.close(!0);
            }
          });
        }),
        a.setDynamicHeight();
    }),
      (ExtensionCreateAccount.prototype.setNextView = function (e) {
        Dialog.prototype.setNextView.apply(this, arguments),
          bg.sendLpImprove("viewregform", { currentPage: 0 === this.currentViewIndex ? "email" : "mpw", version: a.data.version });
      }),
      (ExtensionCreateAccount.prototype.close = function (e) {
        e
          ? Dialog.prototype.close.apply(this, arguments)
          : (function (e) {
              LPTools.getOption(e.data, "showcloseconfirm", !0)
                ? (this._backgroundOverlay.show(),
                  dialogs.confirmation.open({
                    title: "LastPass",
                    text: Strings.translateString("Do you really want to quit?  You cannot use LastPass without creating an account."),
                    closeHandler: function () {
                      t.hide();
                    },
                    handler: function () {
                      e.close(!0);
                    }
                  }))
                : e.close(!0);
            })(this);
      }),
      (ExtensionCreateAccount.prototype.clearError = function (e) {
        var e = this.inputFields[e];
        e && e.clearErrors();
      }),
      (ExtensionCreateAccount.prototype.addError = function (e, t) {
        var n = this.inputFields[e];
        n &&
          (n._errors.push(t),
          (n.clearErrors = function () {
            (this._errors = []), n._errorElement && n._errorElement.remove(), (this._errorElement = null);
          }));
      }),
      (ExtensionCreateAccount.prototype.validate = function (t, n) {
        var e, e;
        0 === this.currentViewIndex
          ? c(t.email, function (e) {
              var e = a.inputFields.email.validate({ response: e });
              e && (e &= a.inputFields.termsAndConditions.validate(t)), n && n(e);
            })
          : this.currentViewIndex === this.views.length - 1 &&
            ((e = a.inputFields.password.validate(t)),
            (e = (e &= a.inputFields.reconfirm.validate(t)) & a.inputFields.reminder.validate(t)),
            n) &&
            n(e);
      }),
      (ExtensionCreateAccount.prototype.submit = function () {
        try {
          var n;
          a.isSubmitting ||
            ((a.isSubmitting = !0),
            ((n = this.getData()).marketingOptOutSeen = r ? "1" : "0"),
            (n.contactPermission = document.getElementById("contactPermissionCheckbox").checked ? "0" : "1"),
            this.validate(n, function (e) {
              var t, e, t;
              e
                ? ((t = { currentPage: "mpw", version: a.data.version }),
                  bg.sendLpImprove("viewregform", t),
                  a.getNextViewButton() === a.nextButton && a.views && a.currentViewIndex < a.views.length - 1
                    ? (p(), y(), S(), a.setNextView(a.currentViewIndex + 1), a.setDynamicHeight())
                    : (bg.sendLpImprove("completedregform", { version: a.data.version }), a.handleSubmit(n, this.data)))
                : ((t = { errorlist: (e = E().join(",")), version: a.data.version }),
                  a.inputFields.reminder && "" !== a.inputFields.reminder.getValue() && (t.isReminder = !0),
                  0 < e.length && ((t.currentPage = 0 === a.currentViewIndex ? "email" : "mpw"), bg.sendLpImprove("validationregform", t))),
                (a.isSubmitting = !1);
            }));
        } catch (e) {
          (a.isSubmitting = !1), LPPlatform.logException(e);
        }
      }),
      (ExtensionCreateAccount.prototype.showInProcessOverlay = function () {
        t.show(!0);
      }),
      (ExtensionCreateAccount.prototype.setBackgroundOverlay = function (e) {
        t = e;
      }),
      (ExtensionCreateAccount.prototype.hideInProcessOverlay = function () {
        t.hide();
      });
  })();
