var FormFillDialog = function (t) {
  VaultItemDialog.call(this, t, {
    additionalHeaderClasses: ["icon"],
    closeButtonEnabled: !0,
    maximizeButtonEnabled: !0,
    buttonAlign: this.RIGHT_ALIGN
  });
};
(FormFillDialog.prototype = Object.create(VaultItemDialog.prototype)),
  (FormFillDialog.prototype.constructor = FormFillDialog),
  (function (t) {
    var r = function (t) {
        DialogInput.Input.call(this, void 0), (this.customFieldElements = []), (this.container = t);
      },
      o =
        ((((r.prototype = Object.create(DialogInput.Input.prototype)).constructor = r).prototype.clear = function () {
          DialogInput.ErrorDisplayInput.prototype.clear.apply(this, arguments);
          for (var t = 0, e = this.customFieldElements.length; t < e; ++t) {
            var i = this.customFieldElements[t];
            (i.text.value = ""), (i.value.value = "");
          }
        }),
        (r.prototype.getValue = function () {
          for (var t = [], e = 0, i = this.customFieldElements.length; e < i; ++e) {
            var r = this.customFieldElements[e],
              r = { cfid: void 0 === r.cfid ? "0" : r.cfid, text: r.text.value, value: r.value.value };
            ("0" !== r.cfid || r.text || r.value) && t.push(r);
          }
          return t;
        }),
        (r.prototype.setValue = function (t) {
          LPTools.removeDOMChildren(this.container), (this.customFieldElements = []);
          for (var e = 0, i = t.length; e < i || e < 3; ++e) {
            var r = this.addElement(),
              o;
            e < i && ((o = t[e]), (r.text.value = o.text), (r.value.value = o.value), (r.cfid = o.cfid));
          }
        }),
        function (t, e) {
          var i = LPTools.createElement("td");
          i.appendChild(e), t.appendChild(i);
        });
    (r.prototype.addElement = function () {
      var t = LPTools.createElement("tr", "settingsRow"),
        e = LPTools.createElement("textarea", "dialogInput"),
        i = (o(t, e), LPTools.createElement("textarea", "dialogInput")),
        t = (o(t, i), this.container.appendChild(t), { text: e, value: i });
      return this.customFieldElements.push(t), t;
    }),
      (r.prototype.validate = function () {
        return !0;
      }),
      (FormFillDialog.prototype.validate = function (t) {
        var e = VaultItemDialog.prototype.validate.apply(this, arguments);
        return (
          "" === t.decprofilename && (this.addError("decprofilename", Strings.translateString("Name is required.")), (e = !1)),
          t.creditmon &&
            ("" === t.firstname &&
              (this.addError("firstname", Strings.translateString("First Name is required when Enable Free Credit Monitoring is checked.")),
              (e = !1)),
            "" === t.lastname &&
              (this.addError("lastname", Strings.translateString("Last Name is required when Enable Free Credit Monitoring is checked.")),
              (e = !1)),
            "" === t.birthday &&
              (this.addError("birthday", Strings.translateString("Birthday is required when Enable Free Credit Monitoring is checked.")),
              (e = !1)),
            "" === t.ssn &&
              (this.addError(
                "ssn",
                Strings.translateString("Social Security Number is required when Enable Free Credit Monitoring is checked.")
              ),
              (e = !1)),
            "" === t.city &&
              (this.addError("city", Strings.translateString("City / Town is required when Enable Free Credit Monitoring is checked.")),
              (e = !1)),
            "" === t.state &&
              (this.addError("state", Strings.translateString("State is required when Enable Free Credit Monitoring is checked.")),
              (e = !1)),
            "" === t.zip &&
              (this.addError(
                "zip",
                Strings.translateString("ZIP / Postal Code is required when Enable Free Credit Monitoring is checked.")
              ),
              (e = !1)),
            t.phone.length < 4 &&
              (this.addError("phone", Strings.translateString("Phone Number is required when Enable Free Credit Monitoring is checked.")),
              (e = !1)),
            "US" !== t.country) &&
            (this.addError("country", Strings.translateString("Credit monitoring is only available for addresses in the United States.")),
            (e = !1)),
          e
        );
      }),
      (FormFillDialog.prototype.open = function (t) {
        ((t = t || {}).title =
          t.title || (void 0 === t.vaultItem ? Strings.translateString("Add Form Fill") : Strings.translateString("Edit Form Fill"))),
          (t.sourceFunction = LPProxy.getFormFillModel),
          VaultItemDialog.prototype.open.call(this, t);
      }),
      (FormFillDialog.prototype.getData = function (t) {
        for (
          var e = VaultItemDialog.prototype.getData.apply(this, arguments),
            i =
              (void 0 !== this.inputFields.state.options[e.state]
                ? (e.state_name = this.inputFields.state.options[e.state].label)
                : (e.state_name = e.state),
              this.inputFields.country.getElement().prop("options")),
            r = 0;
          r < i.length;
          r++
        )
          if (i[r].value === e.country) {
            (e.country_name = i[r].text), (e.country_cc3l = CC3L[e.country]);
            break;
          }
        return e;
      }),
      (FormFillDialog.prototype.defaultFields = function (t) {
        (t.defaultData = $.extend({ profilelanguage: "en-US", profiletype: FormFill.prototype.FORM_FILL_TYPE_GENERIC }, t.defaultData)),
          VaultItemDialog.prototype.defaultFields.call(this, t);
      }),
      (FormFillDialog.prototype.initialize = function (t) {
        var e, i;
        VaultItemDialog.prototype.initialize.apply(this, arguments),
          (e = this).inputFields.profiletype.onChange(function (t) {
            t === FormFill.prototype.FORM_FILL_TYPE_CREDIT_CARD ? e.$element.addClass("creditCard") : e.$element.removeClass("creditCard"),
              e.selectFirstLeftMenuItem();
          }),
          (this.inputFields.custom_fields = new r(document.getElementById("custom_fields"))),
          (i = this),
          $("#addCustomFieldButton").bind("click", function () {
            var t;
            i.inputFields.custom_fields.addElement().text.focus();
          });
      }),
      (FormFillDialog.prototype.setup = function (t, e) {
        e.vaultItem ? this.inputFields.profiletype.disable() : this.inputFields.profiletype.enable(),
          VaultItemDialog.prototype.setup.apply(this, arguments);
      }),
      (FormFillDialog.prototype.add = function (t) {
        var e;
        new FormFill().addFromDialog(t, null, this.data.saveOptions);
      });
  })(document);
