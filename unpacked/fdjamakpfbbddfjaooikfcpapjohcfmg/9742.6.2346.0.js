"use strict";
(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [9742],
  {
    313661: (e, t, s) => {
      s.d(t, { Z: () => g });
      var a = s(696832),
        n = s(554712),
        r = s(383849),
        l = s.n(r),
        i = s(526849),
        o = s(769183),
        d = s(317894),
        p = s.n(d),
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
            (this.state = { fieldHtmlId: (0, o.Z)(), selectionRangeStart: null, selectionRangeEnd: null });
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
          return (0, h.tZ)(n.Z, {
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
              className: l()(c.Z.input, { [c.Z.error]: Boolean(this.props.error) }),
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
                p(),
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
            { className: l()(c.Z.container, this.props.multiLine ? c.Z.containerMultiLine : null) },
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
                className: l()(c.Z.value, { [c.Z.placeholder]: !this.props.value, [c.Z.multiline]: this.props.multiLine })
              },
              this.props.multiLine ? this.getTextarea() : this.getInput()
            )
          );
        }
      }
      g.defaultProps = { maskProps: { maskChar: "" } };
    },
    919551: (e, t, s) => {
      s.d(t, { Jh: () => i, UE: () => r, ZP: () => o });
      var a = s(696832),
        n = s(526849);
      const r = (0, n.compose)(n.not, n.isEmpty, n.trim, (0, n.defaultTo)("")),
        l = /.+@.+\..+/,
        i = (e) => l.test(e.trim());
      class o extends a.Component {
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
              const t = (0, n.reduce)(
                  (t, s) => ((t[s] = e[s] ? (0, n.compose)(n.not, e[s]) : () => !1), t),
                  {},
                  Object.keys(this.state.values)
                ),
                s = (0, n.evolve)(t, this.state.values);
              return this.setState({ errors: s }), (0, n.all)((0, n.equals)(!1), (0, n.values)(s));
            }),
            (this.hasFormBeenEdited = () => !(0, n.equals)(this.state.values, this.props.currentValues)),
            (this.getValues = () => this.state.values);
          const t = Object.keys(e.currentValues).reduce((e, t) => ((e[t] = !1), e), {});
          this.state = { internal: {}, values: e.currentValues, errors: t };
        }
        componentDidUpdate(e) {
          (0, n.equals)(this.props.currentValues, e.currentValues) || this.setState({ values: this.props.currentValues });
        }
      }
    },
    242965: (e, t, s) => {
      s.d(t, { B: () => v });
      var a = s(696832),
        n = s(660765),
        r = s(142897),
        l = s(453576),
        i = s(635164),
        o = s(66941),
        d = s(537026),
        p = s(201389),
        h = s(418402),
        u = s.n(h),
        c = s(62429),
        m = s(796446),
        g = s(347613),
        y = s(933741);
      function v(e) {
        const { renderForm: t, kwType: s, iconType: h, type: v } = e;
        return ({ lee: e }) => {
          const { translate: f } = (0, p.Z)(),
            { routes: C } = (0, i.Xo)(),
            I = (0, a.useRef)(null),
            [Z, b] = (0, a.useState)(!1);
          (0, a.useEffect)(() => {
            const e = {
              [l.DataModelType.KWAddress]: n.PageView.ItemAddressCreate,
              [l.DataModelType.KWCompany]: n.PageView.ItemCompanyCreate,
              [l.DataModelType.KWEmail]: n.PageView.ItemEmailCreate,
              [l.DataModelType.KWIdentity]: n.PageView.ItemIdentityCreate,
              [l.DataModelType.KWPhone]: n.PageView.ItemPhoneCreate,
              [l.DataModelType.KWPersonalWebsite]: n.PageView.ItemWebsiteCreate
            };
            (0, c.Nc)(e[s]);
          }, []);
          const w = () => {
              (0, c.Nc)(n.PageView.ItemPersonalInfoList), (0, i.uX)(C.userPersonalInfo);
            },
            V = (0, d.B)(e.globalState),
            x = (0, r.tZ)(g.ZP, { iconSize: g.Jh.headerEditPanelIcon, iconType: h }),
            E = (0, y.gV)(f, v);
          return (0, r.tZ)(
            m.zI,
            {
              isViewingExistingItem: !1,
              itemHasBeenEdited: Z,
              onNavigateOut: () => {
                w();
              },
              onSubmit: async () => {
                if (Boolean(I.current?.isFormValid()))
                  try {
                    await (() => {
                      const e = I.current?.getValues(),
                        t = { kwType: s, origin: l.SaveOrigin.MANUAL, content: e };
                      return o.C.savePersonalDataItem(t);
                    })(),
                      w();
                  } catch (e) {}
              },
              formId: "add_personalinfo_panel",
              header: (0, r.tZ)(m.V9, { icon: x, iconBackgroundColor: u()["--dash-green-00"], title: E })
            },
            t(e, I, () => b(!0), V)
          );
        };
      }
    },
    396813: (e, t, s) => {
      s.r(t), s.d(t, { IdentityAddPanel: () => d });
      var a = s(696832),
        n = s(307973),
        r = s(453576),
        l = s(985440),
        i = s(242965),
        o = s(347613);
      const d = (0, i.B)({
        iconType: o.Tu.identity,
        kwType: "KWIdentity",
        renderForm: (e, t, s, i) => {
          const o = r.Country[e.globalState.locale.country] || r.Country.US,
            d = {
              birthDate: (0, n.Z)(new Date(), "yyyy-MM-dd"),
              birthPlace: "",
              firstName: "",
              lastName2: "",
              lastName: "",
              localeFormat: o,
              middleName: "",
              pseudo: "",
              spaceId: i,
              title: "MR"
            };
          return a.createElement(l.P, { lee: e, currentValues: d, signalEditedValues: s, ref: t });
        },
        type: "identity"
      });
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
    }
  }
]);
