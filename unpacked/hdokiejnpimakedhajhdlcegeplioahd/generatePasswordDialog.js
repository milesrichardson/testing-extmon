var GeneratePasswordDialog = function (e) {
  VaultItemDialog.call(this, e, {
    additionalHeaderClasses: ["icon", "leftIcon"],
    dynamicHeight: !0,
    responsive: !1,
    title: Strings.translateString("Generate"),
    nextButtonText: Strings.translateString("Use Password"),
    confirmOnClose: !1,
    overlayDialog: !0
  });
};
(GeneratePasswordDialog.prototype = Object.create(Dialog.prototype)),
  ((GeneratePasswordDialog.prototype.constructor = GeneratePasswordDialog).prototype.open = function (e) {
    (e = $.extend(e, {
      defaultData: {
        length: bg.Preferences.get("generate_length"),
        minimumLengthByPolicy: 0,
        uppercase: bg.Preferences.get("generate_upper"),
        lowercase: bg.Preferences.get("generate_lower"),
        numeric: bg.Preferences.get("generate_digits"),
        special: bg.Preferences.get("generate_special"),
        minNumeric: bg.Preferences.get("generate_mindigits"),
        avoidAmbiguous: bg.Preferences.get("generate_ambig"),
        reqevery: bg.Preferences.get("generate_reqevery"),
        pronounceable: bg.Preferences.get("generate_pronounceable")
      }
    })),
      Dialog.prototype.open.call(this, e);
  }),
  (GeneratePasswordDialog.prototype.makePronounceable = function () {
    this.inputFields.numeric.setValue(!1),
      this.inputFields.numeric.disable(),
      this.inputFields.special.setValue(!1),
      this.inputFields.special.disable(),
      this.inputFields.minNumeric.disable(),
      this.inputFields.minNumeric.disable(),
      this.inputFields.avoidAmbiguous.disable();
  }),
  (GeneratePasswordDialog.prototype.initialize = function () {
    var t;
    Dialog.prototype.initialize.apply(this, arguments),
      this.inputFields.password.getElement().LP_addPasswordMeter(),
      LPFeatures.allowClipboardCopy() || $("#copyPassword").LP_hide(),
      (t = this).inputFields.password.getElement().on("copy", function () {
        t.setCopiedGeneratedPassword(t.inputFields.password.getValue());
      }),
      t.nextButton.unbind("click"),
      t.nextButton.bind("click", function () {
        t.usePassword();
      }),
      $("#generateButton").bind("click", function () {
        t.submit();
      }),
      t.updatePasswordLengthOptions(),
      t.inputFields.length.setReadOnly(),
      t.inputFields.length.onChange(function () {
        t.setupComplete && t.submit();
      }),
      LPPlatform.addEventListener(document.getElementById("copyPassword"), "click", function () {
        var e = t.inputFields.password.getValue();
        LPProxy.copyGeneratedPassword(e, t.data.saveOptions.source, -1),
          t.setCopiedGeneratedPassword(e),
          "function" == typeof t.data.onCopy && t.data.onCopy(),
          t.close();
      }),
      t.inputFields.reqevery.onChange(function (e) {
        e &&
          t.setupComplete &&
          (t.inputFields.uppercase.setValue(!0),
          t.inputFields.lowercase.setValue(!0),
          t.inputFields.numeric.enable(),
          t.inputFields.numeric.setValue(!0),
          t.inputFields.special.enable(),
          t.inputFields.special.setValue(!1),
          t.inputFields.minNumeric.enable(),
          t.inputFields.avoidAmbiguous.enable());
      }),
      t.inputFields.pronounceable.onChange(function (e) {
        e && t.setupComplete && t.makePronounceable();
      }),
      $("#length,#lengthInput,input[type='radio'],input[type='checkbox']").bind("change", function () {
        t.submit();
      });
  }),
  (GeneratePasswordDialog.prototype.updatePasswordLengthOptions = function () {
    for (var e = Math.max(4, this.data.defaultData.minimumLengthByPolicy), t = [], a = e; a < 101; a++)
      t.push({ value: a.toString(), label: a.toString() });
    this.inputFields.length.setOptions(t);
    var e = Math.max(this.data.defaultData.length, e);
    this.inputFields.length.setValue(e.toString());
  }),
  (GeneratePasswordDialog.prototype.setCopiedGeneratedPassword = function (e) {
    bg.LPTabState && bg.LPTabState.setCopiedGeneratedPassword && bg.LPTabState.setCopiedGeneratedPassword(e);
  }),
  (GeneratePasswordDialog.prototype.saveState = function () {
    var e = this.getData();
    bg.Preferences.set({
      generate_advanced: this.advancedOptionsShown,
      generate_length: e.length,
      generate_upper: e.uppercase,
      generate_lower: e.lowercase,
      generate_digits: e.numeric,
      generate_special: e.special,
      generate_mindigits: e.minNumeric,
      generate_ambig: e.avoidAmbiguous,
      generate_reqevery: e.reqevery,
      generate_pronounceable: e.pronounceable
    }),
      this.storePassword();
  }),
  (GeneratePasswordDialog.prototype.close = function () {
    return this.saveState(), Dialog.prototype.close.apply(this, arguments);
  }),
  (GeneratePasswordDialog.prototype.applySitePasswordLengthPolicy = function () {
    this.data.defaultData.minimumLengthByPolicy = 0;
    var t = bg.get("g_prefoverrides").sitepwlen,
      a,
      t;
    t &&
      ((t = JSON.parse(t)),
      "function" == typeof bg.get_selected_tab_data_no_extension
        ? ((a = this),
          bg.get_selected_tab_data_no_extension(null, function (e) {
            var e = bg.lp_gettld_url(e.url),
              e;
            t[e] && ((e = t[e]), (a.data.defaultData.minimumLengthByPolicy = e), a.updatePasswordLengthOptions());
          }))
        : ((a.data.defaultData.minimumLengthByPolicy = 0), a.updatePasswordLengthOptions()));
  }),
  (GeneratePasswordDialog.prototype.setup = function (e, t) {
    bg.Preferences.get("generate_advanced") && this.showAdvancedOptions(),
      this.applySitePasswordLengthPolicy(),
      Dialog.prototype.setup.apply(this, arguments),
      LPTools.getOption(this.data, "fillGenerated", !0)
        ? this.nextButton.LP_removeAttr("style")
        : void 0 === t.input && this.nextButton.hide();
    var a = this;
    bg.GenPassHistory.getWithoutDate(function (e) {
      a.inputFields.password.setValues(e);
    });
  }),
  (GeneratePasswordDialog.prototype.postSetup = function (e) {
    Dialog.prototype.postSetup.apply(this, arguments), this.submit();
  }),
  (GeneratePasswordDialog.prototype.storePassword = function () {
    var e = this.inputFields.password.getValue(),
      t;
    bg &&
      bg.GenPassHistory &&
      bg.GenPassHistory.add &&
      e &&
      0 < e.length &&
      (bg.GenPassHistory.add(e),
      (t = this),
      bg.GenPassHistory.getWithoutDate(function (e) {
        t.inputFields.password.setValues(e);
      }));
  }),
  (GeneratePasswordDialog.prototype.usePassword = function () {
    var e = this.inputFields.password.getValue();
    this.data.input
      ? (this.data.input.val(e), this.close())
      : (bg.fillGeneratedPassword(
          this.data.tabID,
          this.data.tabURL,
          e,
          $.extend(this.data.saveOptions, {
            avoidAmbiguous: this.inputFields.avoidAmbiguous.getValue(),
            length: this.inputFields.length.getValue(),
            lowercase: this.inputFields.lowercase.getValue(),
            numeric: this.inputFields.numeric.getValue(),
            pronounceable: this.inputFields.pronounceable.getValue(),
            special: this.inputFields.special.getValue(),
            uppercase: this.inputFields.uppercase.getValue()
          })
        ),
        LPPlatform.closePopup(!0)),
      this.saveState();
  }),
  (GeneratePasswordDialog.prototype.handleSubmit = function (e) {
    this.storePassword(),
      this.inputFields.password.setValue(
        bg.lpCreatePass(
          e.length,
          e.uppercase,
          e.lowercase,
          e.numeric,
          e.special,
          e.minNumeric,
          e.avoidAmbiguous,
          e.reqevery,
          e.pronounceable
        )
      );
  });
