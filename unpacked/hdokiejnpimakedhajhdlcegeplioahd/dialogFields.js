DialogInput = (function () {
  var i = function (t) {
      var e = {},
        n;
      for (n in t) t.hasOwnProperty(n) && (t[n] instanceof o ? (e[n] = i(t[n])) : (e[n] = !0));
      return e;
    },
    o = function () {},
    n =
      ((o.prototype.validate = function () {
        var t = !0,
          e;
        for (e in this) this.hasOwnProperty(e) && (t = this[e].validate() && t);
        return t;
      }),
      (o.prototype.clear = function () {
        for (var t in this) this.hasOwnProperty(t) && this[t].clear();
      }),
      (o.prototype.clearErrors = function () {
        for (var t in this) this.hasOwnProperty(t) && this[t].clearErrors();
      }),
      (o.prototype.adjustView = function () {
        for (var t in this) {
          var t;
          this.hasOwnProperty(t) && "function" == typeof (t = this[t]).adjustView && t.adjustView();
        }
      }),
      (o.prototype.getValue = function (t) {
        var e = {},
          n;
        for (n in this) this.hasOwnProperty(n) && (e[n] = this[n].getValue(t));
        return e;
      }),
      (o.prototype.setValue = function (t) {
        for (var e in this) this.hasOwnProperty(e) && this[e].setValue(void 0 === t[e] ? "" : t[e]);
      }),
      (o.prototype.hasError = function () {
        for (var t in this) if (this.hasOwnProperty(t) && this[t].hasError()) return !0;
        return !1;
      }),
      function (t) {
        (this.items = {}), (this.groupName = t);
      }),
    r =
      ((n.prototype.getValue = function () {
        for (var t in this.items) if (this.items[t].prop("checked")) return t;
      }),
      (n.prototype.setValue = function (t) {
        var t = this.items[t];
        if (t) t.prop("checked", !0);
        else for (var e in this.items) this.items[e].prop("checked", !1);
      }),
      (n.prototype.addRadioInput = function (t) {
        var e = t.attr("value");
        if (!e) throw "RadioGroup member must have a value!";
        if (t.attr("name") !== this.groupName)
          throw "RadioGroup member must have the same name attribute as the other radio inputs in the group (based on dialogField)!";
        this.items[e] = t;
      }),
      function () {
        (this._errors = []), (this._errorContainer = null), (this._errorOptions = null), (this._hasError = !1);
      }),
    a =
      ((r.prototype.postValidate = function () {
        (this._hasError = 0 < this._errors.length),
          this._hasError &&
            this._errorContainerWrapper
              .find("input,select,textarea")
              .bind("focus", this.focusHandler)
              .bind("blur", this.blurHandler)
              .bind("change", this.changeHandler);
      }),
      (r.prototype.hasError = function () {
        return this._hasError;
      }),
      (r.prototype.buildError = function () {
        var t = this.getElement(),
          e = { element: t, alignTop: "SELECT" === this.input.prop("nodeName").toUpperCase() };
        return "checkbox" === t.attr("type") && ((e.element = e.element.add(t.next())), (e.static = !0)), this.buildErrorElement(e);
      }),
      (r.prototype.buildErrorElement = function (t) {
        this._errorOptions = t = $.extend(this.getDialog().getErrorOptions(), t);
        var e = (this._errorContainerWrapper = $(LPTools.createElement("div", "relative"))),
          n =
            ((this._errorContainer = $(LPTools.createElement("div", "dialogErrorContainer"))),
            t.element.before(e),
            t.static && e.addClass("staticError"),
            t.alignTop && this._errorContainer.addClass("alignTop"),
            t.static && !t.alignTop
              ? (e.append(t.element), e.append(this._errorContainer))
              : (e.append(this._errorContainer), e.append(t.element)),
            this.getDialog());
        (this.focusHandler = function () {
          e.addClass("focus");
        }),
          (this.blurHandler = function () {
            e.removeClass("focus");
          }),
          (this.changeHandler = function () {
            n.performValidate({ data: n.getData(), errorsOnly: !0 });
          });
      }),
      (r.prototype.addError = function (t, e) {
        (e = this.dialog = this.getDialog() || e),
          ((this.disabled || LPTools.getOption(e.validateOptions, "errorsOnly", !1)) && !this.hasError()) ||
            ((this._hasError = !0), this._errors.push(t), this.buildErrorMessage());
      }),
      (r.prototype.clearErrors = function () {
        (this._errors = []),
          this._errorContainer &&
            (this._errorContainer.empty(),
            this._errorContainerWrapper.removeClass("error"),
            this._errorContainerWrapper
              .find("input,select,textarea")
              .unbind("focus", this.focusHandler)
              .unbind("blur", this.blurHandler)
              .unbind("change", this.changeHandler));
      }),
      (r.prototype.clear = function () {
        this._hasError = !1;
      }),
      (r.prototype.adjustView = function () {}),
      (r.prototype.buildErrorMessage = function () {
        this._errorContainer || this.buildError(),
          this._errorContainerWrapper.addClass("error"),
          this._errors.forEach(function (t) {
            var e = LPTools.createElement("div", "dialogError");
            e.appendChild(LPTools.createElement("div", "validation-img warning")),
              LPTools.getOption(this._errorOptions, "showErrorLabel", !0) &&
                e.appendChild(LPTools.createElement("span", "errorLabel", Strings.translateString("ERROR") + ": ")),
              e.appendChild(LPTools.createElement("span", "", t)),
              this._errorContainer.append(e);
          }, this);
      }),
      (r.prototype.getDialog = function () {
        return this.dialog;
      }),
      (r.prototype.getElement = function () {
        return this.input;
      }),
      function (t, e) {
        r.call(this), this.setElement(t), (this.disabled = !1), (this.dialog = e), (this.radioGroup = null), (this.actualPassword = null);
      }),
    s =
      ((a.prototype = Object.create(r.prototype)),
      function (t) {
        return t instanceof $ ? t : $(t);
      }),
    t =
      (((a.prototype.constructor = a).prototype.shouldHidePassword = function () {
        return "password" == this.input.attr("type") && this.dialog && this.dialog.vaultItem && !this.dialog.vaultItem.canViewPassword();
      }),
      (a.prototype.getNativeElement = function () {
        return this.getElement().get(0);
      }),
      (a.prototype.setElement = function (t) {
        (this.input = s(t)),
          "SELECT" === this.input.prop("nodeName") && this.input.prepend(LPTools.createElement("option", { value: "" }, ""));
      }),
      (a.prototype.default = function () {
        this.setValue("");
      }),
      (a.prototype.validate = function () {
        return !0;
      }),
      (a.prototype.focus = function () {
        this.input.focus();
      }),
      (a.prototype.disable = function () {
        this.disabled || ((this.disabled = !0), this.input.prop("disabled", !0));
      }),
      (a.prototype.enable = function () {
        this.disabled && ((this.disabled = !1), this.input.prop("disabled", !1));
      }),
      (a.prototype.clear = function () {
        if ((r.prototype.clear.apply(this, arguments), this.input)) {
          switch (this.input.attr("type")) {
            case "checkbox":
            case "radio":
              this.setValue(!1);
              break;
            default:
              this.setValue("");
          }
          this.input.passwordShown && this.input.hidePassword(),
            null !== this.actualPassword && ((this.actualPassword = null), this.enable());
        }
      }),
      (a.prototype.getValue = function () {
        if (this.shouldHidePassword()) return this.actualPassword;
        switch (this.input.attr("type")) {
          case "radio":
            if (this.radioGroup) return this.radioGroup.getValue();
          case "checkbox":
            return this.input.prop("checked");
          case "text":
            if ("unencryptedUsername" === this.input.attr("dialogField")) return this.input.val().trim() || "";
          default:
            return this.input.val() || "";
        }
      }),
      (a.prototype.setValue = function (t) {
        var e = this.getValue();
        if (this.shouldHidePassword()) (this.actualPassword = t), this.disable();
        else
          switch (this.input.attr("type")) {
            case "radio":
              if (this.radioGroup) return this.radioGroup.setValue(t);
            case "checkbox":
              this.input.prop("checked", t);
              break;
            case "file":
              break;
            default:
              this.input.val(t);
          }
        e !== t && this.fireOnChange();
      }),
      (a.prototype.addRadioInput = function (t, e) {
        null === this.radioGroup && ((this.radioGroup = new n(t)), this.radioGroup.addRadioInput(this.input)),
          this.radioGroup.addRadioInput(s(e));
      }),
      (a.prototype.fireOnChange = function () {
        this.onChangeCallback && this.onChangeCallback(this.getValue());
      }),
      (a.prototype.fireOnFocusOut = function () {
        this.onFocusOutCallback && this.onFocusOutCallback(this.getValue());
      }),
      (a.prototype.onChange = function (t) {
        var e;
        (this.onChangeCallback = t),
          (e = this).getElement().bind("change", function () {
            e.fireOnChange();
          });
      }),
      (a.prototype.onFocusOut = function (t) {
        var e;
        (this.onFocusOutCallback = t),
          (e = this).getElement().bind("focusout", function () {
            e.fireOnFocusOut();
          });
      }),
      (a.prototype.buildInputElement = function () {
        return this.getNativeElement();
      }),
      (a.prototype.adjustView = function () {}),
      function (t, e, n) {
        (this.field = t),
          (this.inputObject = e),
          void 0 === (n = n || {}).label
            ? (this.label = Strings.translateString(t))
            : n.label
            ? (this.label = Strings.translateString(n.label))
            : (this.label = null),
          (this.isTopAlign = n.topAlign);
      }),
    e =
      ((t.prototype.build = function () {
        var t = "settingLabel",
          e = (this.isTopAlign && (t += " topAlign"), LPTools.createElement("tr")),
          n = LPTools.createElement("td");
        return (
          this.label && e.appendChild(LPTools.createElement("td", t, this.label)),
          e.appendChild(n),
          n.appendChild(this.inputObject.buildInputElement()),
          e
        );
      }),
      (t.prototype.getNativeElement = function () {
        return this.inputObject.getNativeElement();
      }),
      (t.prototype.setElement = function (t) {
        this.inputObject.setElement(t);
      }),
      (t.prototype.default = function () {
        this.inputObject.default();
      }),
      (t.prototype.clearErrors = function () {
        this.inputObject.clearErrors();
      }),
      (t.prototype.validate = function () {
        return this.inputObject.validate();
      }),
      (t.prototype.focus = function () {
        this.inputObject.focus();
      }),
      (t.prototype.disable = function () {
        this.inputObject.disable();
      }),
      (t.prototype.enable = function () {
        this.inputObject.enable();
      }),
      (t.prototype.clear = function () {
        this.inputObject.clear();
      }),
      (t.prototype.getValue = function () {
        return this.inputObject.getValue();
      }),
      (t.prototype.setValue = function (t) {
        this.inputObject.setValue(t);
      }),
      (t.prototype.fireOnChange = function () {
        this.inputObject.fireOnChange();
      }),
      (t.prototype.fireOnFocusOut = function (t) {
        this.inputObject.fireOnFocusOut(t);
      }),
      (t.prototype.onChange = function (t) {
        this.inputObject.onChange(t);
      }),
      (t.prototype.onFocusOut = function (t) {
        this.inputObject.onFocusOut(t);
      }),
      (t.prototype.adjustView = function () {
        this.inputObject.adjustView();
      }),
      function (t) {
        a.call(this, LPTools.createElement("input", { class: "dialogInput", type: "text", "data-field-name": t ? t.fieldName : "" })),
          (this.options = t);
      }),
    p =
      ((((e.prototype = Object.create(a.prototype)).constructor = e).prototype.buildInputElement = function () {
        var t = this.getNativeElement(),
          e = LPTools.getOption(this.options, "inputButton", null),
          n,
          i,
          o;
        return e
          ? ((this.dialog = this.dialog || dialogs.note.getDialog()),
            (n = LPTools.createElement("div", "relative")).appendChild(t),
            (this.inputButtonElement = LPTools.createElement("button", "dialogInputButton", e)),
            (i = LPTools.getOption(this.options, "inputButtonHandler", null)) &&
              ((o = this),
              LPPlatform.addEventListener(o.inputButtonElement, "click", function () {
                i.apply(o);
              })),
            n.appendChild(this.inputButtonElement),
            n)
          : t;
      }),
      (e.prototype.adjustView = function () {
        var t;
        this.inputButtonElement &&
          ((t = parseInt(this.input.css("padding-right"))), this.input.css("padding-right", t + $(this.inputButtonElement).outerWidth()));
      }),
      function (t) {
        a.call(this, LPTools.createElement("input", { class: "dialogInput", type: "password", "data-field-name": t ? t.fieldName : "" }));
      }),
    u =
      ((((p.prototype = Object.create(a.prototype)).constructor = p).prototype.buildInputElement = function () {
        this.input.LP_addPasswordEye({ includeGenerateButton: !0 });
        var t = this.input.parents();
        return t[t.length - 1];
      }),
      function (t, e) {
        (this.options = e || {}),
          a.call(this, LPTools.createElement("textarea", { class: "dialogInput " + t, "data-field-name": e ? e.fieldName : "" }));
      }),
    l =
      ((((u.prototype = Object.create(a.prototype)).constructor = u).prototype.buildInputElement = function () {
        var t = this.getNativeElement(),
          e = LPTools.getOption(this.options, "inputButton", null),
          n,
          i,
          o;
        return e
          ? ((this.dialog = this.dialog || dialogs.note.getDialog()),
            (n = LPTools.createElement("div", "relative")).appendChild(t),
            (this.inputButtonElement = LPTools.createElement("button", "dialogInputButton copy", e)),
            (i = LPTools.getOption(this.options, "inputButtonHandler", null)) &&
              ((o = this),
              LPPlatform.addEventListener(o.inputButtonElement, "click", function () {
                i.apply(o);
              })),
            n.appendChild(this.inputButtonElement),
            n)
          : t;
      }),
      (u.prototype.adjustView = function () {
        var t;
        this.inputButtonElement &&
          ((t = parseInt(this.input.css("padding-right"))), this.input.css("padding-right", t + $(this.inputButtonElement).outerWidth()));
      }),
      ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]),
    h = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
    c = [],
    d = [],
    f = [],
    y = function (t) {
      a.call(this),
        (this.includeDay = LPTools.getOption(t, "includeDay", !0)),
        (this.options = t),
        this.generateMonthLabels(),
        this.generateAlphaMonthOptions(),
        this.generateNumericMonthOptions();
    },
    g =
      ((((y.prototype = Object.create(a.prototype)).constructor = y).prototype.buildError = function () {
        return this.buildErrorElement({ element: $(this.container) });
      }),
      (y.prototype.buildInputElement = function () {
        var t = "",
          t =
            (this.includeDay || (t = "monthYearDate"),
            (this.container = LPTools.createElement("div", { class: t })),
            LPTools.createElement("div", "dateInputMonth"));
        return (
          (this.monthInput = LPTools.createSelectElement(this.getMonthOptions(), {
            "data-field-name": this.options ? this.options.fieldName : ""
          })),
          (this.dayInput = null),
          this.includeDay &&
            (this.dayInput = LPTools.createElement("input", {
              class: "dialogInput dateInputDay",
              type: "text",
              "data-field-name": this.options ? this.options.fieldName : ""
            })),
          (this.yearInput = LPTools.createElement("input", {
            class: "dialogInput dateInputYear",
            type: "text",
            "data-field-name": this.options ? this.options.fieldName : ""
          })),
          t.appendChild(this.monthInput),
          this.container.appendChild(t),
          null !== this.dayInput && this.container.appendChild(this.dayInput),
          this.container.appendChild(this.yearInput),
          this.container
        );
      }),
      (y.prototype.clear = function () {
        this.monthInput && (this.monthInput.value = ""),
          this.dayInput && (this.dayInput.value = ""),
          this.yearInput && (this.yearInput.value = "");
      }),
      (y.prototype.getValue = function () {
        return this.toString();
      }),
      (y.prototype.setValue = function (t) {
        var t = this.parse(t),
          e = "",
          n = "",
          i = "";
        t && ((e = t.shift()), 2 === t.length && (n = t.shift()), (i = t.shift())),
          (this.monthInput.value = e),
          this.includeDay && (this.dayInput.value = n),
          (this.yearInput.value = i);
      }),
      (y.prototype.generateMonthLabels = function () {
        if (c && 0 === c.length)
          for (var t = 0, e = l.length; t < e; ++t) {
            var n = t + 1,
              i;
            c.push((n < 10 ? "0" + n : n) + " - " + Strings.translateString(l[t]));
          }
      }),
      (y.prototype.generateAlphaMonthOptions = function () {
        if (d && 0 === d.length) {
          d.push({ value: "", label: "" });
          for (var t = 0, e = l.length; t < e; ++t) d.push({ value: l[t], label: c[t] });
        }
      }),
      (y.prototype.generateNumericMonthOptions = function () {
        if (f && 0 === f.length) {
          f.push({ value: "", label: "" });
          for (var t = 0, e = l.length; t < e; ++t) f.push({ value: h[t], label: c[t] });
        }
      }),
      function (t) {
        y.call(this, t);
      }),
    m =
      ((((g.prototype = Object.create(y.prototype)).constructor = g).prototype.toString = function () {
        var t = this.monthInput.value;
        return this.dayInput && (t += "," + this.dayInput.value), (t += "," + this.yearInput.value);
      }),
      (g.prototype.parse = function (t) {
        return t ? t.split(",") : null;
      }),
      (g.prototype.getMonthOptions = function () {
        return d;
      }),
      function (t) {
        y.call(this, t);
      }),
    b =
      ((((m.prototype = Object.create(y.prototype)).constructor = m).prototype.toString = function () {
        var t = this.yearInput.value + "-" + this.monthInput.value;
        return this.includeDay && (t += "-" + this.dayInput.value), (t = "-" !== t && "--" !== t ? t : "");
      }),
      (m.prototype.parse = function (t) {
        var t;
        return t ? ((t = t.split("-")).push(t.shift()), t) : null;
      }),
      (m.prototype.getMonthOptions = function () {
        return f;
      }),
      function (t) {
        a.call(this, LPTools.createTimezoneSelect({ "data-field-name": t ? t.fieldName : "" }));
      }),
    E =
      (((b.prototype = Object.create(a.prototype)).constructor = b),
      function (t, e) {
        a.call(this, LPTools.createSelectElement(t, { "data-field-name": e ? e.fieldName : "" }));
      }),
    v =
      (((E.prototype = Object.create(a.prototype)).constructor = E),
      function (t) {
        a.call(this, LPTools.createCountrySelect({ "data-field-name": t ? t.fieldName : "" }));
      });
  return (
    (v.prototype = Object.create(a.prototype)),
    {
      ErrorDisplayInput: r,
      Input: a,
      LabelledInput: t,
      TextInput: e,
      PasswordInput: p,
      TextArea: u,
      NumericDateInput: m,
      AlphaDateInput: g,
      NestedFields: o,
      SelectInput: E,
      TimezoneInput: b,
      CountryInput: (v.prototype.constructor = v),
      getProperties: i
    }
  );
})();
