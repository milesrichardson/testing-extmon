var PreferencesDialog = function (e) {
  Dialog.call(this, e, {
    additionalHeaderClasses: "icon",
    title: Strings.translateString("Preferences"),
    closeButtonEnabled: !0,
    maximizeButtonEnabled: !0,
    buttonAlign: this.RIGHT_ALIGN
  }),
    (this.hotkeyFields = {});
};
(PreferencesDialog.prototype = Object.create(Dialog.prototype)),
  (PreferencesDialog.prototype.constructor = PreferencesDialog),
  (function () {
    var g = "hotkeyField",
      p = "checkboxField",
      c,
      r = function (e) {
        var t = [];
        if (
          (e.ctrlKey && t.push("control"),
          e.metaKey && t.push("meta"),
          e.altKey && t.push("alt"),
          e.shiftKey && t.push("shift"),
          t.length > e.shiftKey)
        )
          switch (e.which) {
            case 16:
            case 17:
            case 18:
            case 91:
            case 92:
              break;
            default:
              this.setValue(e.which, t.join(" "));
          }
        switch (e.which) {
          case 8:
          case 46:
            this.clear();
            break;
          case 9:
            break;
          default:
            e.preventDefault(), e.stopPropagation();
        }
      },
      i = function (e, t, a) {
        bg.switchLanguage(t),
          bg.saveUserLanguage(t, function () {
            bg.sendLpImprove("change_language", { previous_language: e, selected_language: t, source: "extension_preferences" }), a();
          });
      },
      d = function (e, t) {
        var a;
        DialogInput.Input.apply(this, arguments),
          (this.keyCode = 0),
          (this.mods = ""),
          (a = this).input.bind("keydown", function (e) {
            r.call(a, e);
          });
      },
      e,
      t,
      s,
      u,
      f =
        ((((d.prototype = Object.create(DialogInput.Input.prototype)).constructor = d).prototype.setValue =
          ((t = e = null),
          (s = function () {
            return (t =
              null === t
                ? {
                    control: Strings.translateString("Ctrl"),
                    meta: Strings.translateString("Meta"),
                    alt: Strings.translateString("Alt"),
                    shift: Strings.translateString("Shift")
                  }
                : t);
          }),
          (u = function () {
            return (e =
              null === e
                ? {
                    33: Strings.translateString("Page Up"),
                    34: Strings.translateString("Page Down"),
                    35: Strings.translateString("End"),
                    36: Strings.translateString("Home"),
                    37: Strings.translateString("Left"),
                    38: Strings.translateString("Up"),
                    39: Strings.translateString("Right"),
                    40: Strings.translateString("Down"),
                    189: "-",
                    219: "[",
                    220: "\\",
                    221: "]",
                    186: ";",
                    222: "'",
                    188: ",",
                    187: "+",
                    190: ".",
                    191: "/",
                    106: "*",
                    192: "~",
                    124: Strings.translateString("Print Screen")
                  }
                : e);
          }),
          function (e, t) {
            var a = "";
            if (t && e) {
              for (var r = t.split(" "), i = s(), n = 0, o = r.length; n < o; ++n) r[n] = i[r[n]];
              var l = u();
              void 0 !== l[e] ? r.push(l[e]) : r.push(String.fromCharCode(e).toUpperCase()),
                (a = r.join("+")),
                (this.keyCode = e),
                (this.mods = t);
            } else (this.keyCode = 0), (this.mods = "");
            DialogInput.Input.prototype.setValue.call(this, a);
          })),
        function (e, t) {
          var a, r;
          DialogInput.Input.apply(this, arguments),
            (this.checkboxField = $("#" + this.input.attr(p))),
            (r = null),
            void 0 === (a = this).checkboxField.attr(Dialog.prototype.DIALOG_FIELD) &&
              (a.checkboxField.bind("change", function () {
                if (a.checkboxField.prop("checked"))
                  if (null !== r) a.setValue(r), (r = null);
                  else
                    switch (a.checkboxField.selector) {
                      case "#autoautoEnabled":
                        a.setValue(25);
                        break;
                      case "#pollServerEnabled":
                        a.setValue(15);
                        break;
                      case "#recentUsed":
                        a.setValue(10);
                    }
                else (r = a.getValue()), a.setValue("");
              }),
              a.onChange(function (e) {
                a.checkboxField.prop("checked", 0 < e);
              }));
        }),
      o =
        ((((f.prototype = Object.create(DialogInput.Input.prototype)).constructor = f).prototype.enable = function () {
          DialogInput.Input.prototype.enable.apply(this, arguments), this.checkboxField.prop("disabled", !1);
        }),
        (f.prototype.disable = function () {
          DialogInput.Input.prototype.disable.apply(this, arguments), this.checkboxField.prop("disabled", !0);
        }),
        (f.prototype.buildError = function () {
          return this.buildErrorElement({ element: this.input.parent().children() });
        }),
        (f.prototype.setValue = function (e) {
          ("number" != typeof e || 0 < e) && DialogInput.Input.prototype.setValue.apply(this, arguments);
        }),
        (f.prototype.validate = function (e, t, a) {
          if (a) {
            var a = parseInt(a);
            if (isNaN(a) || a < 0) return e.addError(t, Strings.translateString("Value must be greater than or equal to %d.", 0)), !1;
          }
          return !0;
        }),
        function () {
          for (var e = LPProxy.getFormFillModels(), t = [{ value: 0, label: "" }], a = 0, r = e.length; a < r; ++a) {
            var i = e[a];
            t.push({ value: i.getID(), label: i.getName() });
          }
          return t;
        }),
      l = function () {
        var e = [],
          t = bg.get("g_langs"),
          a;
        for (a in t) e.push({ value: a, label: t[a] });
        return e;
      },
      h =
        ((PreferencesDialog.prototype.setupButtons = function (e) {
          Dialog.prototype.setupButtons.apply(this, arguments),
            (this.resetDefaultsButton = $(LPTools.createElement("button", "nbtn btn_midi wbtn dynamicWidth leftButton"))),
            this.resetDefaultsButton.bind("click", this.createHandler(this.resetDefaults)),
            this.buttonContainer.prepend(this.resetDefaultsButton);
        }),
        (PreferencesDialog.prototype.resetDefaults = function () {
          for (var e = this.currentViewElement.find("[" + this.DIALOG_FIELD + "]"), t = {}, a = 0, r = e.length; a < r; ++a)
            t[e[a].getAttribute(this.DIALOG_FIELD)] = !0;
          this.populateFields(bg.Preferences.getDefault(t));
        }),
        (PreferencesDialog.prototype.leftMenuChange = function (e) {
          this.resetDefaultsButton.text(Strings.translateString("Restore '%s' Defaults", e.text()));
        }),
        (PreferencesDialog.prototype.getHotKeyPreferenceNames = function () {
          var e = {},
            t;
          for (t in this.hotkeyFields) (e[t + "KeyCode"] = !0), (e[t + "Mods"] = !0);
          return e;
        }),
        (PreferencesDialog.prototype.getData = function () {
          var e = Dialog.prototype.getData.apply(this, arguments),
            t;
          for (t in this.hotkeyFields) {
            var a = this.hotkeyFields[t];
            (e[t + "KeyCode"] = a.keyCode), (e[t + "Mods"] = a.mods);
          }
          return e;
        }),
        (PreferencesDialog.prototype.defaultFields = function (e) {
          (e.defaultData = $.extend(e.defaultData, bg.Preferences.get(DialogInput.getProperties(this.inputFields)))),
            LPTools.setSelectOptions(this.inputFields.defaultffid.getNativeElement(), o()),
            LPTools.setSelectOptions(this.inputFields.language.getNativeElement(), l()),
            Dialog.prototype.defaultFields.apply(this, arguments);
          var t = bg.Preferences.get(this.getHotKeyPreferenceNames()),
            a,
            r;
          for (a in this.hotkeyFields) {
            this.hotkeyFields[a].setValue(t[a + "KeyCode"], t[a + "Mods"]);
          }
          var i = bg.get("g_prefoverrides"),
            n;
          -1 < i.logoffclosebrowser && this.inputFields.logoffWhenCloseBrowser.disable(),
            -1 < i.logoffidle
              ? (this.inputFields.idleLogoffVal.setValue(i.logoffidle), this.inputFields.idleLogoffVal.disable())
              : this.inputFields.idleLogoffVal.enable(),
            bg.get("g_flags").pollIntervalSetByPolicy ? this.inputFields.pollServerVal.disable() : this.inputFields.pollServerVal.enable();
        }),
        (PreferencesDialog.prototype.clearFields = function () {
          for (var e in (Dialog.prototype.clearFields.apply(this, arguments), this.hotkeyFields)) this.hotkeyFields[e].clear();
        }),
        function (a) {
          return function (e) {
            var t = a.getValue();
            t &&
              (a.clear(),
              LPTools.requireBinary(function () {
                a.setValue(t);
              }));
          };
        }),
      a;
    (PreferencesDialog.prototype.initialize = function (e) {
      (c = { usepopupfill: !bg.get("LPContentScriptFeatures").web_client_fill, enablenamedpipes: !0 }),
        this.initializeInputFields(e.find("input[" + p + "]"), function (e) {
          return new f(e, this);
        }),
        Dialog.prototype.initialize.apply(this, arguments);
      for (var t = e.find("input[" + g + "]"), a = 0, r = t.length; a < r; ++a) {
        var i = t[a],
          n = i.getAttribute(g);
        this.hotkeyFields[n] = new d(i, this);
      }
      var o = LPPlatform.getUnavailablePreferences(),
        l;
      for (l in o)
        o[l] &&
          (e
            .find("input[" + this.DIALOG_FIELD + "=" + l + "]")
            .closest("tr")
            .detach(),
          e
            .find("select[" + this.DIALOG_FIELD + "=" + l + "]")
            .closest("tr")
            .detach(),
          e
            .find("input[" + g + "=" + l + "]")
            .closest("tr")
            .detach());
      var s = LPPlatform.getPreferencesRequiringBinary(),
        l,
        u;
      for (l in s) {
        s[l] && (u = this.inputFields[l]) && u.input.bind("change", h(u));
      }
      bg.get("g_hidelogoffprefs") && $("#securityPrefs").remove(),
        bg.get("g_hideappearancebox") && $("#appearancePrefs").remove(),
        bg.get("g_issafari_appext") && $("#iconMenuItem").LP_hide(),
        bg.get("g_disableautofill") &&
          (document
            .getElementById("automaticallyFill")
            .parentElement.appendChild(document.createTextNode("-- This feature has been disabled by an Enterprise Policy.")),
          document.getElementById("automaticallyFill").remove()),
        bg.get("LPContentScriptFeatures").ziggy &&
          (document.getElementById("toplevelmatchingsites").parentNode.parentNode.style.display = "none"),
        bg.get("LPContentScriptFeatures").omaria && $("#showAcctsInGroupsContainer").hide(),
        bg.get("g_loggedinonline") || bg.get("g_loggedinoffline")
          ? $("#language").removeAttr("disabled", "disabled")
          : $("#language").attr("disabled", "disabled"),
        $("#automaticallyFill").bind("click", function () {
          $("#automaticallyFill")[0].checked &&
            dialogs.alert.open({
              title: Strings.translateString("Are you sure?"),
              text: Strings.translateString(
                "Are you sure you want to enable autofill? Enabling autofill increases the risk of exposing a site's password if that site is compromised."
              )
            });
        });
    }),
      (PreferencesDialog.prototype.postSetup = function (e) {
        Dialog.prototype.postSetup.apply(this, arguments),
          location.search.includes("tab=notifications") && $("#notificationsMenuItem").click(),
          $('label[for="fillAddresses"]').text("Offer to fill addresses"),
          $('label[for="fillPaymentCards"]').text("Offer to fill payment card info");
      }),
      (PreferencesDialog.prototype.validate = function (e) {
        var t = Dialog.prototype.validate.apply(this, arguments);
        return (
          e.autoautoVal && "" != e.autoautoVal
            ? e.autoautoVal &&
              e.autoautoVal < 10 &&
              (this.addError("autoautoVal", Strings.translateString("Value must be greater than or equal to %d.", 10)), (t = !1))
            : (e.autoautoVal = -1),
          e.pollServerVal && "" != e.pollServerVal
            ? e.pollServerVal &&
              e.pollServerVal < 5 &&
              (this.addError("pollServerVal", Strings.translateString("Value must be greater than or equal to %d.", 5)), (t = !1))
            : (e.pollServerVal = -1),
          e.clearClipboardSecsVal || (e.clearClipboardSecsVal = -1),
          (e.recentUsedCount && "" != e.recentUsedCount) || (e.recentUsedCount = -1),
          t
        );
      }),
      (PreferencesDialog.prototype.checkForLanguageChange = function (e, t) {
        var a, r;
        e.language === this.originalData.language
          ? t()
          : ((a = bg.get("g_language")),
            (r = e.language),
            dialogs.alert.open({
              title: Strings.translateString("Your language is set"),
              text: Strings.translateString("You may need to log in again on your devices to apply the change."),
              handler: function () {
                i(a, r, t);
              },
              closeHandler: function () {
                i(a, r, t);
              }
            }));
      }),
      (PreferencesDialog.prototype.checkForRestartOrLogoff = function (e, t) {
        for (var a in c)
          if (c[a] && e[a] !== this.originalData[a])
            return void dialogs.alert.open({
              title: Strings.translateString("Restart Required"),
              text: Strings.translateString("You must restart your browser before all of the changes will take effect."),
              handler: t,
              closeHandler: t
            });
        t();
      }),
      (PreferencesDialog.prototype.handleSubmit =
        ((a = function (e) {
          var t = this.getChanges(e);
          this.checkForLanguageChange(
            e,
            this.createHandler(function () {
              this.checkForRestartOrLogoff(
                e,
                this.createHandler(function () {
                  bg.Preferences.set(t), LPPlatform.handlePreferenceChanges(t), this.close(!0);
                })
              );
            })
          );
        }),
        function (e) {
          (e.logoffWhenCloseBrowser || e.idleLogoffEnabled) && (bg.Preferences.get("rememberpassword") || bg.get("g_master_password_saved"))
            ? dialogs.confirmation.open({
                title: Strings.translateString("Remember Password"),
                text: Strings.translateString(
                  "You currently have LastPass set to remember your password.  Doing so essentially makes the automatically log out options you've chosen useless.  Would you like LastPass to stop remembering your password?"
                ),
                handler: this.createHandler(function () {
                  bg.Preferences.set("rememberpassword", !1), bg.deletesavedpw(bg.get("g_username")), a.call(this, e);
                }),
                closeHandler: this.createHandler(a, e)
              })
            : a.call(this, e);
        }));
  })();
