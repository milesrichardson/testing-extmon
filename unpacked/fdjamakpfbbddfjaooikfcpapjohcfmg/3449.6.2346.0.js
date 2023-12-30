"use strict";
(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [3449],
  {
    313661: (e, t, a) => {
      a.d(t, { Z: () => g });
      var s = a(696832),
        n = a(554712),
        l = a(383849),
        r = a.n(l),
        i = a(526849),
        o = a(769183),
        p = a(317894),
        d = a.n(p),
        h = a(142897),
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
            a = {
              ref: (e) => {
                this.field = e;
              },
              id: this.state.fieldHtmlId,
              autoComplete: "off",
              className: r()(c.Z.input, { [c.Z.error]: Boolean(this.props.error) }),
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
                (e) => (0, h.tZ)("input", { ...a, ...e })
              )
            : (0, h.tZ)(
                "div",
                { className: c.Z.inputRow },
                (0, h.tZ)("input", { ...a, ...t }),
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
            { className: r()(c.Z.container, this.props.multiLine ? c.Z.containerMultiLine : null) },
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
                className: r()(c.Z.value, { [c.Z.placeholder]: !this.props.value, [c.Z.multiline]: this.props.multiLine })
              },
              this.props.multiLine ? this.getTextarea() : this.getInput()
            )
          );
        }
      }
      g.defaultProps = { maskProps: { maskChar: "" } };
    },
    919551: (e, t, a) => {
      a.d(t, { Jh: () => i, UE: () => l, ZP: () => o });
      var s = a(696832),
        n = a(526849);
      const l = (0, n.compose)(n.not, n.isEmpty, n.trim, (0, n.defaultTo)("")),
        r = /.+@.+\..+/,
        i = (e) => r.test(e.trim());
      class o extends s.Component {
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
              const t = (0, n.reduce)(
                  (t, a) => ((t[a] = e[a] ? (0, n.compose)(n.not, e[a]) : () => !1), t),
                  {},
                  Object.keys(this.state.values)
                ),
                a = (0, n.evolve)(t, this.state.values);
              return this.setState({ errors: a }), (0, n.all)((0, n.equals)(!1), (0, n.values)(a));
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
    613449: (e, t, a) => {
      a.r(t), a.d(t, { CompanyAddPanel: () => i });
      var s = a(696832),
        n = a(817509),
        l = a(242965),
        r = a(347613);
      const i = (0, l.B)({
        iconType: r.Tu.company,
        kwType: "KWCompany",
        renderForm: (e, t, a, l) => {
          const r = { jobTitle: "", name: "", spaceId: l };
          return s.createElement(n.$, { lee: e, currentValues: r, signalEditedValues: a, ref: t });
        },
        type: "company"
      });
    },
    817509: (e, t, a) => {
      a.d(t, { $: () => i });
      var s = a(696832),
        n = a(919551),
        l = a(313661),
        r = a(839434);
      class i extends n.ZP {
        isFormValid() {
          return this.validateValues({ name: n.UE });
        }
        render() {
          var e;
          const t = this.props.lee.translate.namespace("webapp_personal_info_edition_company_");
          return s.createElement(
            s.Fragment,
            null,
            s.createElement(l.Z, {
              label: t("name_label"),
              placeholder: t("placeholder_no_name"),
              dataName: "name",
              value: this.state.values.name,
              error: this.state.errors.name,
              onChange: this.handleChange
            }),
            s.createElement(l.Z, {
              label: t("jobTitle_label"),
              placeholder: t("placeholder_no_jobTitle"),
              dataName: "jobTitle",
              value: this.state.values.jobTitle,
              onChange: this.handleChange
            }),
            s.createElement(r.M, {
              labelSx: r.e,
              spaceId: null != (e = this.state.values.spaceId) ? e : "",
              onChange: (e) => this.handleChange(e, "spaceId")
            })
          );
        }
      }
    },
    242965: (e, t, a) => {
      a.d(t, { B: () => y });
      var s = a(696832),
        n = a(660765),
        l = a(142897),
        r = a(453576),
        i = a(635164),
        o = a(66941),
        p = a(537026),
        d = a(201389),
        h = a(418402),
        u = a.n(h),
        c = a(62429),
        m = a(796446),
        g = a(347613),
        v = a(933741);
      function y(e) {
        const { renderForm: t, kwType: a, iconType: h, type: y } = e;
        return ({ lee: e }) => {
          const { translate: b } = (0, d.Z)(),
            { routes: C } = (0, i.Xo)(),
            f = (0, s.useRef)(null),
            [Z, I] = (0, s.useState)(!1);
          (0, s.useEffect)(() => {
            const e = {
              [r.DataModelType.KWAddress]: n.PageView.ItemAddressCreate,
              [r.DataModelType.KWCompany]: n.PageView.ItemCompanyCreate,
              [r.DataModelType.KWEmail]: n.PageView.ItemEmailCreate,
              [r.DataModelType.KWIdentity]: n.PageView.ItemIdentityCreate,
              [r.DataModelType.KWPhone]: n.PageView.ItemPhoneCreate,
              [r.DataModelType.KWPersonalWebsite]: n.PageView.ItemWebsiteCreate
            };
            (0, c.Nc)(e[a]);
          }, []);
          const V = () => {
              (0, c.Nc)(n.PageView.ItemPersonalInfoList), (0, i.uX)(C.userPersonalInfo);
            },
            w = (0, p.B)(e.globalState),
            E = (0, l.tZ)(g.ZP, { iconSize: g.Jh.headerEditPanelIcon, iconType: h }),
            x = (0, v.gV)(b, y);
          return (0, l.tZ)(
            m.zI,
            {
              isViewingExistingItem: !1,
              itemHasBeenEdited: Z,
              onNavigateOut: () => {
                V();
              },
              onSubmit: async () => {
                if (Boolean(f.current?.isFormValid()))
                  try {
                    await (() => {
                      const e = f.current?.getValues(),
                        t = { kwType: a, origin: r.SaveOrigin.MANUAL, content: e };
                      return o.C.savePersonalDataItem(t);
                    })(),
                      V();
                  } catch (e) {}
              },
              formId: "add_personalinfo_panel",
              header: (0, l.tZ)(m.V9, { icon: E, iconBackgroundColor: u()["--dash-green-00"], title: x })
            },
            t(e, f, () => I(!0), w)
          );
        };
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
    }
  }
]);
