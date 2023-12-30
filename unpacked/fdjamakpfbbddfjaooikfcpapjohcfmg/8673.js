"use strict";
(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [8673],
  {
    611913: (e, t, a) => {
      a.d(t, { Z: () => g });
      var s = a(696832),
        n = a(554712),
        l = a(383849),
        r = a.n(l),
        i = a(526849),
        o = a(957459),
        p = a(158549),
        d = a.n(p),
        h = a(876307),
        u = a(573630);
      const c = {
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
        },
        m = (e) => {
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
            className: c.textarea,
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
              className: r()(c.input, { [c.error]: Boolean(this.props.error) }),
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
                { className: c.inputRow },
                (0, h.tZ)("input", { ...a, ...t }),
                (0, h.tZ)(
                  "div",
                  {
                    hidden: !this.props.error || "string" != typeof this.props.error,
                    sx: { color: "ds.text.danger.quiet" },
                    className: c.errorMessage
                  },
                  this.props.error
                )
              );
        }
        render() {
          const e = "password" !== this.props.type ? this.props.value || this.props.placeholder : "";
          return (0, h.tZ)(
            "div",
            { className: r()(c.container, this.props.multiLine ? c.containerMultiLine : null) },
            this.props.label &&
              (0, h.tZ)(
                "label",
                { className: c.label, sx: { color: "ds.text.neutral.catchy" }, htmlFor: this.state.fieldHtmlId },
                (0, h.tZ)("span", { className: c.text, title: this.props.label }, this.props.label)
              ),
            (0, h.tZ)(
              u.Z,
              { tooltipText: e, className: r()(c.value, { [c.placeholder]: !this.props.value, [c.multiline]: this.props.multiLine }) },
              this.props.multiLine ? this.getTextarea() : this.getInput()
            )
          );
        }
      }
      g.defaultProps = { maskProps: { maskChar: "" } };
    },
    242521: (e, t, a) => {
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
    748673: (e, t, a) => {
      a.r(t), a.d(t, { CompanyAddPanel: () => o });
      var s = a(696832),
        n = a(382706),
        l = a(562606),
        r = a(53748),
        i = a(615446);
      const o = (0, r.B)({
        iconType: i.Tu.company,
        vaultItemType: n.U.Company,
        renderForm: (e, t, a, n) => {
          const r = { jobTitle: "", companyName: "", spaceId: n };
          return s.createElement(l.$, { lee: e, currentValues: r, signalEditedValues: a, ref: t });
        }
      });
    },
    562606: (e, t, a) => {
      a.d(t, { $: () => o });
      var s = a(696832),
        n = a(611913),
        l = a(66485),
        r = a(242521),
        i = a(167406);
      class o extends r.ZP {
        isFormValid() {
          return this.validateValues({ companyName: r.UE });
        }
        render() {
          var e;
          const t = this.props.lee.translate.namespace("webapp_personal_info_edition_company_"),
            { shouldShowTrialDiscontinuedDialog: a } = this.context;
          return s.createElement(
            s.Fragment,
            null,
            s.createElement(n.Z, {
              label: t("name_label"),
              placeholder: t("placeholder_no_name"),
              dataName: "companyName",
              value: this.state.values.companyName,
              error: this.state.errors.companyName,
              onChange: this.handleChange,
              disabled: !!a
            }),
            s.createElement(n.Z, {
              label: t("jobTitle_label"),
              placeholder: t("placeholder_no_jobTitle"),
              dataName: "jobTitle",
              value: this.state.values.jobTitle,
              onChange: this.handleChange,
              disabled: !!a
            }),
            s.createElement(i.M, {
              labelSx: i.e,
              spaceId: null != (e = this.state.values.spaceId) ? e : "",
              onChange: (e) => this.handleChange(e, "spaceId"),
              disabled: !!a
            })
          );
        }
      }
      o.contextType = l.gD;
    },
    53748: (e, t, a) => {
      a.d(t, { B: () => I });
      var s = a(696832),
        n = a(593039),
        l = a(876307),
        r = a(962899),
        i = a(482598),
        o = a(448430),
        p = a(382706),
        d = a(692077),
        h = a(739649),
        u = a(86498),
        c = a(488203),
        m = a(45272),
        g = a(66485),
        v = a(376452),
        b = a(615446),
        y = a(718462),
        f = a(418402),
        C = a.n(f);
      function I(e) {
        const { renderForm: t, vaultItemType: a, iconType: f } = e;
        return ({ lee: e }) => {
          const { translate: I } = (0, c.Z)(),
            { routes: V } = (0, d.Xo)(),
            w = (0, u.V)(),
            { createVaultItem: E } = (0, i.u)(o.L),
            x = (0, s.useRef)(null),
            { openDialog: _, shouldShowTrialDiscontinuedDialog: T } = (0, g.yp)(),
            [Z, N] = (0, s.useState)(!1);
          (0, s.useEffect)(() => {
            const e = {
              [p.U.Address]: n.PageView.ItemAddressCreate,
              [p.U.Company]: n.PageView.ItemCompanyCreate,
              [p.U.Email]: n.PageView.ItemEmailCreate,
              [p.U.Identity]: n.PageView.ItemIdentityCreate,
              [p.U.Phone]: n.PageView.ItemPhoneCreate,
              [p.U.Website]: n.PageView.ItemWebsiteCreate
            };
            (0, m.Nc)(e[a]);
          }, []),
            (0, s.useEffect)(() => {
              T && _();
            }, [T]);
          const R = () => {
              (0, m.Nc)(n.PageView.ItemPersonalInfoList), (0, d.uX)(V.userPersonalInfo);
            },
            S = (0, h.B)(e.globalState),
            P = (0, l.tZ)(b.ZP, { iconSize: b.Jh.headerEditPanelIcon, iconType: f }),
            k = (0, y.gV)(I, a);
          return (0, l.tZ)(
            v.zI,
            {
              isViewingExistingItem: !1,
              itemHasBeenEdited: Z,
              onNavigateOut: R,
              onSubmit: async () => {
                Boolean(x.current?.isFormValid()) &&
                  (await (async () => {
                    const e = x.current?.getValues();
                    e &&
                      "success" !== (await E({ vaultItemType: a, content: e })).tag &&
                      w.showAlert(I("_common_generic_error"), r.BLW.ERROR);
                  })(),
                  R());
              },
              formId: "add_personalinfo_panel",
              header: (0, l.tZ)(v.V9, { icon: P, iconBackgroundColor: C()["--dash-green-00"], title: k })
            },
            t(e, x, () => N(!0), S)
          );
        };
      }
    }
  }
]);
