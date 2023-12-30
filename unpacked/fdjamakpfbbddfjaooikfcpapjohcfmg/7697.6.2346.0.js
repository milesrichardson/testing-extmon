"use strict";
(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [7697],
  {
    313661: (e, t, s) => {
      s.d(t, { Z: () => g });
      var a = s(696832),
        l = s(554712),
        n = s(383849),
        i = s.n(n),
        o = s(526849),
        r = s(769183),
        p = s(317894),
        d = s.n(p),
        h = s(142897),
        u = s(654),
        c = s(83126);
      const m = (e) => {
        navigator.clipboard.writeText(e.replaceAll(" ", ""));
      };
      class g extends a.Component {
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
            (0, o.equals)(this.props.value, e.value) &&
            (0, o.equals)(this.props.error, e.error) &&
            (0, o.equals)(this.props.mask, e.mask) &&
            (0, o.equals)(this.props.label, e.label) &&
            (0, o.equals)(this.state.selectionRangeStart, t.selectionRangeStart) &&
            (0, o.equals)(this.state.selectionRangeEnd, t.selectionRangeEnd)
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
          return (0, h.tZ)(l.Z, {
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
            s = {
              ref: (e) => {
                this.field = e;
              },
              id: this.state.fieldHtmlId,
              autoComplete: "off",
              className: i()(c.Z.input, { [c.Z.error]: Boolean(this.props.error) }),
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
            ? (0, h.tZ)(
                d(),
                { ...t, ...this.props.maskProps, mask: this.props.mask, onCopy: () => m(t.value), onCut: () => m(t.value) },
                (e) => (0, h.tZ)("input", { ...s, ...e })
              )
            : (0, h.tZ)(
                "div",
                { className: c.Z.inputRow },
                (0, h.tZ)("input", { ...s, ...t }),
                (0, h.tZ)(
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
          return (0, h.tZ)(
            "div",
            { className: i()(c.Z.container, this.props.multiLine ? c.Z.containerMultiLine : null) },
            this.props.label &&
              (0, h.tZ)(
                "label",
                { className: c.Z.label, sx: { color: "ds.text.neutral.catchy" }, htmlFor: this.state.fieldHtmlId },
                (0, h.tZ)("span", { className: c.Z.text, title: this.props.label }, this.props.label)
              ),
            (0, h.tZ)(
              u.Z,
              {
                tooltipText: e,
                className: i()(c.Z.value, { [c.Z.placeholder]: !this.props.value, [c.Z.multiline]: this.props.multiLine })
              },
              this.props.multiLine ? this.getTextarea() : this.getInput()
            )
          );
        }
      }
      g.defaultProps = { maskProps: { maskChar: "" } };
    },
    59896: (e, t, s) => {
      s.d(t, { Z: () => h });
      var a = s(696832),
        l = s(142897),
        n = s(526849),
        i = s(383849),
        o = s.n(i),
        r = s(769183);
      var p = s(255990);
      function d(e, t) {
        const s = e.find((e) => String(e.value) === String(t));
        return null != s ? s : null;
      }
      class h extends a.Component {
        constructor(e) {
          super(e),
            (this.select = a.createRef()),
            (this.handleChange = (e) => {
              const t = e.target;
              if (!t) return;
              const s = t.value,
                a = d(this.props.options, s);
              this.setState({ optionSelected: a }), this.props.onChange && this.props.onChange(e);
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
            (t = d(
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
            s = o()("selectContainer--mo5uz0qo56", p.Z[t], {
              "transparent--pz8wb74Jmh": this.props.isTransparent,
              "disabled--I9BAM7Vdre": this.props.disabled,
              "focused--ietgHqFLIm": this.state.isSelectFocused
            }),
            a = o()("selector--fgNHKzkAC3", this.props.classNames);
          let i;
          this.state.optionSelected
            ? (i = this.state.optionSelected.value)
            : this.props.options.length &&
              (i = null === this.props.defaultOption ? (0, n.head)(this.props.options).value : this.props.defaultOption.value);
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
              { className: s },
              (0, l.tZ)(
                "div",
                { className: a },
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
                  value: i,
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
    919551: (e, t, s) => {
      s.d(t, { Jh: () => o, UE: () => n, ZP: () => r });
      var a = s(696832),
        l = s(526849);
      const n = (0, l.compose)(l.not, l.isEmpty, l.trim, (0, l.defaultTo)("")),
        i = /.+@.+\..+/,
        o = (e) => i.test(e.trim());
      class r extends a.Component {
        constructor(e) {
          super(e),
            (this.setInternalState = (e) => {
              this.setState({ internal: { ...this.state.internal, ...e } });
            }),
            (this.setUpdatedValues = (e) => {
              const { signalEditedValues: t, onValuesUpdated: s } = this.props,
                a = { ...this.state.values, ...e };
              this.setState({ values: a }, () => {
                t && t(this.hasFormBeenEdited()), s && s(a);
              });
            }),
            (this.handleChange = (e, t = "") => {
              if (e instanceof Event && t) throw new Error("handleChange was called with both a ChangeEvent and key.");
              const s = e?.target ? { [e.target.dataset.name]: e.target.value } : { [t]: e };
              this.setUpdatedValues(s);
            }),
            (this.handleChanges = (e) => {
              this.setUpdatedValues(e);
            }),
            (this.validateValues = (e) => {
              if (0 === Object.keys(e).length) return !0;
              const t = (0, l.reduce)(
                  (t, s) => ((t[s] = e[s] ? (0, l.compose)(l.not, e[s]) : () => !1), t),
                  {},
                  Object.keys(this.state.values)
                ),
                s = (0, l.evolve)(t, this.state.values);
              return this.setState({ errors: s }), (0, l.all)((0, l.equals)(!1), (0, l.values)(s));
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
    707697: (e, t, s) => {
      s.r(t), s.d(t, { EmailAddPanel: () => o });
      var a = s(696832),
        l = s(122036),
        n = s(242965),
        i = s(347613);
      const o = (0, n.B)({
        iconType: i.Tu.email,
        kwType: "KWEmail",
        renderForm: (e, t, s, n) => {
          const i = { email: "", emailName: "", spaceId: n, type: "PERSO" };
          return a.createElement(l._, { lee: e, currentValues: i, signalEditedValues: s, ref: t });
        },
        type: "email"
      });
    },
    122036: (e, t, s) => {
      s.d(t, { _: () => p });
      var a = s(696832),
        l = s(526849),
        n = s(919551),
        i = s(313661),
        o = s(59896),
        r = s(839434);
      class p extends n.ZP {
        isFormValid() {
          return this.validateValues({ email: n.Jh });
        }
        render() {
          var e, t;
          const s = this.props.lee.translate.namespace("webapp_personal_info_edition_email_"),
            n = [
              { label: s("perso_type"), value: "PERSO" },
              { label: s("pro_type"), value: "PRO" }
            ],
            p = null != (e = (0, l.find)((0, l.propEq)("value", this.state.values.type), n)) ? e : (0, l.head)(n);
          return a.createElement(
            a.Fragment,
            null,
            a.createElement(i.Z, {
              type: "email",
              label: s("email_label"),
              placeholder: s("placeholder_no_email"),
              dataName: "email",
              value: this.state.values.email,
              error: this.state.errors.email,
              onChange: this.handleChange
            }),
            a.createElement(o.Z, {
              label: s("type_label"),
              placeholder: p.label,
              dataName: "type",
              options: n,
              defaultOption: p,
              onChange: this.handleChange
            }),
            a.createElement(i.Z, {
              label: s("name_label"),
              placeholder: s("placeholder_no_emailName"),
              dataName: "emailName",
              value: this.state.values.emailName,
              onChange: this.handleChange
            }),
            a.createElement(r.M, {
              labelSx: r.e,
              spaceId: null != (t = this.state.values.spaceId) ? t : "",
              onChange: (e) => this.handleChange(e, "spaceId")
            })
          );
        }
      }
    },
    242965: (e, t, s) => {
      s.d(t, { B: () => b });
      var a = s(696832),
        l = s(660765),
        n = s(142897),
        i = s(453576),
        o = s(635164),
        r = s(66941),
        p = s(537026),
        d = s(201389),
        h = s(418402),
        u = s.n(h),
        c = s(62429),
        m = s(796446),
        g = s(347613),
        v = s(933741);
      function b(e) {
        const { renderForm: t, kwType: s, iconType: h, type: b } = e;
        return ({ lee: e }) => {
          const { translate: f } = (0, d.Z)(),
            { routes: y } = (0, o.Xo)(),
            Z = (0, a.useRef)(null),
            [C, S] = (0, a.useState)(!1);
          (0, a.useEffect)(() => {
            const e = {
              [i.DataModelType.KWAddress]: l.PageView.ItemAddressCreate,
              [i.DataModelType.KWCompany]: l.PageView.ItemCompanyCreate,
              [i.DataModelType.KWEmail]: l.PageView.ItemEmailCreate,
              [i.DataModelType.KWIdentity]: l.PageView.ItemIdentityCreate,
              [i.DataModelType.KWPhone]: l.PageView.ItemPhoneCreate,
              [i.DataModelType.KWPersonalWebsite]: l.PageView.ItemWebsiteCreate
            };
            (0, c.Nc)(e[s]);
          }, []);
          const I = () => {
              (0, c.Nc)(l.PageView.ItemPersonalInfoList), (0, o.uX)(y.userPersonalInfo);
            },
            w = (0, p.B)(e.globalState),
            E = (0, n.tZ)(g.ZP, { iconSize: g.Jh.headerEditPanelIcon, iconType: h }),
            V = (0, v.gV)(f, b);
          return (0, n.tZ)(
            m.zI,
            {
              isViewingExistingItem: !1,
              itemHasBeenEdited: C,
              onNavigateOut: () => {
                I();
              },
              onSubmit: async () => {
                if (Boolean(Z.current?.isFormValid()))
                  try {
                    await (() => {
                      const e = Z.current?.getValues(),
                        t = { kwType: s, origin: i.SaveOrigin.MANUAL, content: e };
                      return r.C.savePersonalDataItem(t);
                    })(),
                      I();
                  } catch (e) {}
              },
              formId: "add_personalinfo_panel",
              header: (0, n.tZ)(m.V9, { icon: E, iconBackgroundColor: u()["--dash-green-00"], title: V })
            },
            t(e, Z, () => S(!0), w)
          );
        };
      }
    },
    83126: (e, t, s) => {
      s.d(t, { Z: () => a });
      const a = {
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
    255990: (e, t, s) => {
      s.d(t, { Z: () => a });
      const a = {
        left: "left--jltGqC2ld6",
        right: "right--r4mXfTZRXo",
        select: "select--ivbO452zoA",
        disable: "disable--F2KcdR2ssV",
        label: "label--EhkwVb63v9"
      };
    }
  }
]);
