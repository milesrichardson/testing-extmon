"use strict";
(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [6751],
  {
    313661: (e, t, a) => {
      a.d(t, { Z: () => g });
      var s = a(696832),
        l = a(554712),
        n = a(383849),
        o = a.n(n),
        i = a(526849),
        r = a(769183),
        p = a(317894),
        h = a.n(p),
        d = a(142897),
        u = a(654),
        c = a(83126);
      const m = (e) => {
        navigator.clipboard.writeText(e.replaceAll(" ", ""));
      };
      class g extends s.Component {
        constructor(e) {
          super(e),
            (this.field = void 0),
            (this.handleChange = (e) => {
              this.setState({ selectionRangeStart: e.target.selectionStart, selectionRangeEnd: e.target.selectionEnd }),
                this.props.onChange && this.props.onChange(e);
            }),
            (this.state = { fieldHtmlId: (0, r.Z)(), selectionRangeStart: null, selectionRangeEnd: null });
        }
        componentDidUpdate() {
          null !== this.state.selectionRangeStart &&
            null !== this.state.selectionRangeEnd &&
            this.field.setSelectionRange(this.state.selectionRangeStart, this.state.selectionRangeEnd);
        }
        shouldComponentUpdate(e, t) {
          return !(
            (0, i.equals)(this.props.value, e.value) &&
            (0, i.equals)(this.props.error, e.error) &&
            (0, i.equals)(this.props.mask, e.mask) &&
            (0, i.equals)(this.props.label, e.label) &&
            (0, i.equals)(this.state.selectionRangeStart, t.selectionRangeStart) &&
            (0, i.equals)(this.state.selectionRangeEnd, t.selectionRangeEnd)
          );
        }
        getValue() {
          return this.field.value;
        }
        focus() {
          this.field.focus();
        }
        getTextarea() {
          var e;
          return (0, d.tZ)(l.Z, {
            inputRef: (e) => {
              this.field = e;
            },
            id: this.state.fieldHtmlId,
            disabled: this.props.disabled,
            value: null != (e = this.props.value) ? e : "",
            name: this.props.name,
            "data-name": this.props.dataName,
            sx: { borderColor: this.props.error && "ds.border.danger.standard.idle" },
            className: c.Z.textarea,
            placeholder: this.props.placeholder,
            onBlur: this.props.handleFieldBlur,
            onKeyDown: this.props.onFieldKeyDown,
            onChange: this.handleChange
          });
        }
        getInput() {
          var e;
          const t = {
              onBlur: this.props.handleFieldBlur,
              onChange: this.handleChange,
              disabled: this.props.disabled,
              readOnly: this.props.readOnly,
              value: null != (e = this.props.value) ? e : ""
            },
            a = {
              ref: (e) => {
                this.field = e;
              },
              id: this.state.fieldHtmlId,
              autoComplete: "off",
              className: o()(c.Z.input, { [c.Z.error]: Boolean(this.props.error) }),
              sx: {
                ...(this.props.error && { "::placeholder": { color: "ds.text.danger.quiet" }, minWidth: "fit-content" }),
                border: "1px solid",
                borderColor: this.props.error ? "ds.border.danger.standard.idle" : "transparent"
              },
              name: this.props.name,
              "data-name": this.props.dataName,
              type: this.props.type || "text",
              placeholder: this.props.placeholder,
              onKeyDown: this.props.onFieldKeyDown
            };
          return this.props.mask
            ? (0, d.tZ)(
                h(),
                { ...t, ...this.props.maskProps, mask: this.props.mask, onCopy: () => m(t.value), onCut: () => m(t.value) },
                (e) => (0, d.tZ)("input", { ...a, ...e })
              )
            : (0, d.tZ)(
                "div",
                { className: c.Z.inputRow },
                (0, d.tZ)("input", { ...a, ...t }),
                (0, d.tZ)(
                  "div",
                  {
                    hidden: !this.props.error || "string" != typeof this.props.error,
                    sx: { color: "ds.text.danger.quiet" },
                    className: c.Z.errorMessage
                  },
                  this.props.error
                )
              );
        }
        render() {
          const e = "password" !== this.props.type ? this.props.value || this.props.placeholder : "";
          return (0, d.tZ)(
            "div",
            { className: o()(c.Z.container, this.props.multiLine ? c.Z.containerMultiLine : null) },
            this.props.label &&
              (0, d.tZ)(
                "label",
                { className: c.Z.label, sx: { color: "ds.text.neutral.catchy" }, htmlFor: this.state.fieldHtmlId },
                (0, d.tZ)("span", { className: c.Z.text, title: this.props.label }, this.props.label)
              ),
            (0, d.tZ)(
              u.Z,
              {
                tooltipText: e,
                className: o()(c.Z.value, { [c.Z.placeholder]: !this.props.value, [c.Z.multiline]: this.props.multiLine })
              },
              this.props.multiLine ? this.getTextarea() : this.getInput()
            )
          );
        }
      }
      g.defaultProps = { maskProps: { maskChar: "" } };
    },
    59896: (e, t, a) => {
      a.d(t, { Z: () => d });
      var s = a(696832),
        l = a(142897),
        n = a(526849),
        o = a(383849),
        i = a.n(o),
        r = a(769183);
      var p = a(255990);
      function h(e, t) {
        const a = e.find((e) => String(e.value) === String(t));
        return null != a ? a : null;
      }
      class d extends s.Component {
        constructor(e) {
          super(e),
            (this.select = s.createRef()),
            (this.handleChange = (e) => {
              const t = e.target;
              if (!t) return;
              const a = t.value,
                s = h(this.props.options, a);
              this.setState({ optionSelected: s }), this.props.onChange && this.props.onChange(e);
            }),
            (this.handleKeyDown = (e) => {
              "Enter" === e.key && e.preventDefault(), this.props.onFieldKeyDown?.(e);
            }),
            (this.handleFocus = () => {
              this.setState({ isSelectFocused: !0 });
            }),
            (this.handleBlur = () => {
              this.setState({ isSelectFocused: !1 });
            });
          let t = null;
          this.props.options.length &&
            (t = h(
              this.props.options,
              null === this.props.defaultOption ? (0, n.head)(this.props.options).value : this.props.defaultOption.value
            )),
            (this.state = { fieldHtmlId: (0, r.Z)(), optionSelected: t, isSelectFocused: !1 });
        }
        getValue() {
          if (!this.select.current) throw new Error("select ref not initialized");
          return this.select.current.value;
        }
        render() {
          var e;
          const t = this.props.marginSide || "none",
            a = i()("selectContainer--mo5uz0qo56", p.Z[t], {
              "transparent--pz8wb74Jmh": this.props.isTransparent,
              "disabled--I9BAM7Vdre": this.props.disabled,
              "focused--ietgHqFLIm": this.state.isSelectFocused
            }),
            s = i()("selector--fgNHKzkAC3", this.props.classNames);
          let o;
          this.state.optionSelected
            ? (o = this.state.optionSelected.value)
            : this.props.options.length &&
              (o = null === this.props.defaultOption ? (0, n.head)(this.props.options).value : this.props.defaultOption.value);
          const r = this.state.optionSelected
            ? this.state.optionSelected.selectedLabel
              ? this.state.optionSelected.selectedLabel
              : this.state.optionSelected.label
            : this.props.placeholder;
          return (0, l.tZ)(
            "div",
            { className: "container--KChkEdb4YV" },
            this.props.label &&
              (0, l.tZ)(
                "label",
                { className: p.Z.label, color: "ds.text.neutral.catchy", htmlFor: this.state.fieldHtmlId, title: this.props.label },
                this.props.label
              ),
            (0, l.tZ)(
              "div",
              { className: a },
              (0, l.tZ)(
                "div",
                { className: s },
                this.state.optionSelected &&
                  this.state.optionSelected.icon &&
                  (0, l.tZ)("span", { className: "icon--p3a7nsSbg9" }, this.state.optionSelected.icon),
                (0, l.tZ)("span", { className: "text--SjkXyB7Kyp", sx: { color: "ds.text.neutral.catchy" } }, r)
              ),
              (0, l.tZ)(
                "select",
                {
                  key: this.state.fieldHtmlId,
                  className: p.Z.select,
                  ref: this.select,
                  id: this.state.fieldHtmlId,
                  value: o,
                  name: this.props.name,
                  disabled: this.props.disabled,
                  "data-name": this.props.dataName,
                  onKeyDown: this.handleKeyDown,
                  onChange: this.handleChange,
                  onFocus: this.handleFocus,
                  onBlur: this.handleBlur,
                  "aria-label": null != (e = this.props.ariaLabel) ? e : this.props.label
                },
                this.props.options.map((e) => (0, l.tZ)("option", { key: e.value, disabled: e.disabled, value: String(e.value) }, e.label))
              )
            )
          );
        }
      }
    },
    919551: (e, t, a) => {
      a.d(t, { Jh: () => i, UE: () => n, ZP: () => r });
      var s = a(696832),
        l = a(526849);
      const n = (0, l.compose)(l.not, l.isEmpty, l.trim, (0, l.defaultTo)("")),
        o = /.+@.+\..+/,
        i = (e) => o.test(e.trim());
      class r extends s.Component {
        constructor(e) {
          super(e),
            (this.setInternalState = (e) => {
              this.setState({ internal: { ...this.state.internal, ...e } });
            }),
            (this.setUpdatedValues = (e) => {
              const { signalEditedValues: t, onValuesUpdated: a } = this.props,
                s = { ...this.state.values, ...e };
              this.setState({ values: s }, () => {
                t && t(this.hasFormBeenEdited()), a && a(s);
              });
            }),
            (this.handleChange = (e, t = "") => {
              if (e instanceof Event && t) throw new Error("handleChange was called with both a ChangeEvent and key.");
              const a = e?.target ? { [e.target.dataset.name]: e.target.value } : { [t]: e };
              this.setUpdatedValues(a);
            }),
            (this.handleChanges = (e) => {
              this.setUpdatedValues(e);
            }),
            (this.validateValues = (e) => {
              if (0 === Object.keys(e).length) return !0;
              const t = (0, l.reduce)(
                  (t, a) => ((t[a] = e[a] ? (0, l.compose)(l.not, e[a]) : () => !1), t),
                  {},
                  Object.keys(this.state.values)
                ),
                a = (0, l.evolve)(t, this.state.values);
              return this.setState({ errors: a }), (0, l.all)((0, l.equals)(!1), (0, l.values)(a));
            }),
            (this.hasFormBeenEdited = () => !(0, l.equals)(this.state.values, this.props.currentValues)),
            (this.getValues = () => this.state.values);
          const t = Object.keys(e.currentValues).reduce((e, t) => ((e[t] = !1), e), {});
          this.state = { internal: {}, values: e.currentValues, errors: t };
        }
        componentDidUpdate(e) {
          (0, l.equals)(this.props.currentValues, e.currentValues) || this.setState({ values: this.props.currentValues });
        }
      }
    },
    242965: (e, t, a) => {
      a.d(t, { B: () => v });
      var s = a(696832),
        l = a(660765),
        n = a(142897),
        o = a(453576),
        i = a(635164),
        r = a(66941),
        p = a(537026),
        h = a(201389),
        d = a(418402),
        u = a.n(d),
        c = a(62429),
        m = a(796446),
        g = a(347613),
        b = a(933741);
      function v(e) {
        const { renderForm: t, kwType: a, iconType: d, type: v } = e;
        return ({ lee: e }) => {
          const { translate: y } = (0, h.Z)(),
            { routes: f } = (0, i.Xo)(),
            _ = (0, s.useRef)(null),
            [Z, C] = (0, s.useState)(!1);
          (0, s.useEffect)(() => {
            const e = {
              [o.DataModelType.KWAddress]: l.PageView.ItemAddressCreate,
              [o.DataModelType.KWCompany]: l.PageView.ItemCompanyCreate,
              [o.DataModelType.KWEmail]: l.PageView.ItemEmailCreate,
              [o.DataModelType.KWIdentity]: l.PageView.ItemIdentityCreate,
              [o.DataModelType.KWPhone]: l.PageView.ItemPhoneCreate,
              [o.DataModelType.KWPersonalWebsite]: l.PageView.ItemWebsiteCreate
            };
            (0, c.Nc)(e[a]);
          }, []);
          const E = () => {
              (0, c.Nc)(l.PageView.ItemPersonalInfoList), (0, i.uX)(f.userPersonalInfo);
            },
            I = (0, p.B)(e.globalState),
            P = (0, n.tZ)(g.ZP, { iconSize: g.Jh.headerEditPanelIcon, iconType: d }),
            N = (0, b.gV)(y, v);
          return (0, n.tZ)(
            m.zI,
            {
              isViewingExistingItem: !1,
              itemHasBeenEdited: Z,
              onNavigateOut: () => {
                E();
              },
              onSubmit: async () => {
                if (Boolean(_.current?.isFormValid()))
                  try {
                    await (() => {
                      const e = _.current?.getValues(),
                        t = { kwType: a, origin: o.SaveOrigin.MANUAL, content: e };
                      return r.C.savePersonalDataItem(t);
                    })(),
                      E();
                  } catch (e) {}
              },
              formId: "add_personalinfo_panel",
              header: (0, n.tZ)(m.V9, { icon: P, iconBackgroundColor: u()["--dash-green-00"], title: N })
            },
            t(e, _, () => C(!0), I)
          );
        };
      }
    },
    786751: (e, t, a) => {
      a.r(t), a.d(t, { PhoneAddPanel: () => r });
      var s = a(696832),
        l = a(453576),
        n = a(131489),
        o = a(242965),
        i = a(347613);
      const r = (0, o.B)({
        iconType: i.Tu.phone,
        kwType: "KWPhone",
        renderForm: (e, t, a, o) => {
          const i = {
            localeFormat: l.Country[e.globalState.locale.country] || l.Country.US,
            number: "",
            phoneName: "",
            type: l.PhoneType.PHONE_TYPE_MOBILE,
            spaceId: o
          };
          return s.createElement(n.b, { lee: e, currentValues: i, signalEditedValues: a, ref: t });
        },
        type: "phone"
      });
    },
    131489: (e, t, a) => {
      a.d(t, { b: () => m });
      var s = a(696832),
        l = a(526849),
        n = a(142897),
        o = a(919551),
        i = a(313661),
        r = a(59896),
        p = a(453576);
      function h(e, t) {
        const a = e.namespace("country_name_");
        return (e) => ((e = e || p.Country.US), { label: `${a(p.Country[e])} (+${t[e]})`, selectedLabel: `${e} (+${t[e]})`, value: e });
      }
      var d = a(488856),
        u = a(255990),
        c = a(839434);
      class m extends o.ZP {
        isFormValid() {
          return this.validateValues({ number: o.UE });
        }
        render() {
          var e, t;
          const { lee: a } = this.props,
            o = a.translate.namespace("webapp_personal_info_edition_phone_"),
            m = (function (e) {
              const t = e.namespace("personal_info_");
              return [
                { label: t("phone_type_mobile"), value: p.PhoneType.PHONE_TYPE_MOBILE },
                { label: t("phone_type_landline"), value: p.PhoneType.PHONE_TYPE_LANDLINE },
                { label: t("phone_type_work_mobile"), value: p.PhoneType.PHONE_TYPE_WORK_MOBILE },
                { label: t("phone_type_work_landline"), value: p.PhoneType.PHONE_TYPE_WORK_LANDLINE },
                { label: t("phone_type_fax"), value: p.PhoneType.PHONE_TYPE_FAX },
                { label: t("phone_type_work_fax"), value: p.PhoneType.PHONE_TYPE_WORK_FAX },
                { label: t("phone_type_any"), value: p.PhoneType.PHONE_TYPE_ANY }
              ];
            })(a.translate),
            g = null != (e = (0, l.find)((0, l.propEq)("value", this.state.values.type), m)) ? e : (0, l.head)(m),
            b = a.globalState.webapp.callingCodes || {},
            v = (function (e, t) {
              const a = h(e, t);
              return Object.keys(t).map((e) => a(p.Country[e]));
            })(a.translate, b),
            y = h(a.translate, b)(this.state.values.localeFormat);
          return (0, n.tZ)(
            s.Fragment,
            null,
            (0, n.tZ)(
              "div",
              { className: d.Z.container },
              (0, n.tZ)(
                "label",
                { className: u.Z.label, sx: { color: "ds.text.neutral.catchy" }, title: o("number_label") },
                o("number_label")
              ),
              (0, n.tZ)(r.Z, { placeholder: y.label, dataName: "localeFormat", options: v, defaultOption: y, onChange: this.handleChange }),
              (0, n.tZ)(i.Z, {
                type: "text",
                placeholder: o("placeholder_no_number"),
                dataName: "number",
                value: this.state.values.number,
                error: this.state.errors.number,
                onChange: this.handleChange
              })
            ),
            (0, n.tZ)(i.Z, {
              type: "text",
              label: o("phonename_label"),
              placeholder: o("placeholder_no_phonename"),
              dataName: "phoneName",
              value: this.state.values.phoneName,
              onChange: this.handleChange
            }),
            (0, n.tZ)(r.Z, {
              label: o("type_label"),
              placeholder: g.label,
              dataName: "type",
              options: m,
              defaultOption: g,
              onChange: this.handleChange
            }),
            (0, n.tZ)(c.M, {
              labelSx: c.e,
              spaceId: null != (t = this.state.values.spaceId) ? t : "",
              onChange: (e) => this.handleChange(e, "spaceId")
            })
          );
        }
      }
    },
    83126: (e, t, a) => {
      a.d(t, { Z: () => s });
      const s = {
        container: "container--Qypu77vxOn",
        containerMultiLine: "containerMultiLine--ncWYFwQEnR",
        _field: "_field--KII5X4xmLN",
        input: "input--Iq10hxAz32 _field--KII5X4xmLN",
        inputRow: "inputRow--gdD_j5S1R8",
        textarea: "textarea--VpIWTZemV2 _field--KII5X4xmLN",
        label: "label--Ww_r49kt_J",
        text: "text--oXyCzpUMwG",
        value: "value--aD7nWEqBIq",
        multiline: "multiline--fdPM1KFHPT"
      };
    },
    255990: (e, t, a) => {
      a.d(t, { Z: () => s });
      const s = {
        left: "left--jltGqC2ld6",
        right: "right--r4mXfTZRXo",
        select: "select--ivbO452zoA",
        disable: "disable--F2KcdR2ssV",
        label: "label--EhkwVb63v9"
      };
    },
    488856: (e, t, a) => {
      a.d(t, { Z: () => s });
      const s = {
        container: "container--BvfulnQcuP",
        containerBlock: "containerBlock--lIB_8rMAqf",
        horizontalContainerBlock: "horizontalContainerBlock--XzyL0HxXte",
        secondItem: "secondItem--YxYGi1WTY5"
      };
    }
  }
]);
