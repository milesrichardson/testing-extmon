"use strict";
(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [6868],
  {
    611913: (e, t, s) => {
      s.d(t, { Z: () => g });
      var a = s(696832),
        n = s(554712),
        r = s(383849),
        l = s.n(r),
        i = s(526849),
        o = s(957459),
        d = s(158549),
        p = s.n(d),
        h = s(876307),
        u = s(573630);
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
            s = {
              ref: (e) => {
                this.field = e;
              },
              id: this.state.fieldHtmlId,
              autoComplete: "off",
              className: l()(c.input, { [c.error]: Boolean(this.props.error) }),
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
                { className: c.inputRow },
                (0, h.tZ)("input", { ...s, ...t }),
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
            { className: l()(c.container, this.props.multiLine ? c.containerMultiLine : null) },
            this.props.label &&
              (0, h.tZ)(
                "label",
                { className: c.label, sx: { color: "ds.text.neutral.catchy" }, htmlFor: this.state.fieldHtmlId },
                (0, h.tZ)("span", { className: c.text, title: this.props.label }, this.props.label)
              ),
            (0, h.tZ)(
              u.Z,
              { tooltipText: e, className: l()(c.value, { [c.placeholder]: !this.props.value, [c.multiline]: this.props.multiLine }) },
              this.props.multiLine ? this.getTextarea() : this.getInput()
            )
          );
        }
      }
      g.defaultProps = { maskProps: { maskChar: "" } };
    },
    242521: (e, t, s) => {
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
    53748: (e, t, s) => {
      s.d(t, { B: () => C });
      var a = s(696832),
        n = s(593039),
        r = s(876307),
        l = s(962899),
        i = s(482598),
        o = s(448430),
        d = s(382706),
        p = s(692077),
        h = s(739649),
        u = s(86498),
        c = s(488203),
        m = s(45272),
        g = s(66485),
        v = s(376452),
        f = s(615446),
        y = s(718462),
        I = s(418402),
        b = s.n(I);
      function C(e) {
        const { renderForm: t, vaultItemType: s, iconType: I } = e;
        return ({ lee: e }) => {
          const { translate: C } = (0, c.Z)(),
            { routes: V } = (0, p.Xo)(),
            w = (0, u.V)(),
            { createVaultItem: x } = (0, i.u)(o.L),
            E = (0, a.useRef)(null),
            { openDialog: R, shouldShowTrialDiscontinuedDialog: P } = (0, g.yp)(),
            [S, Z] = (0, a.useState)(!1);
          (0, a.useEffect)(() => {
            const e = {
              [d.U.Address]: n.PageView.ItemAddressCreate,
              [d.U.Company]: n.PageView.ItemCompanyCreate,
              [d.U.Email]: n.PageView.ItemEmailCreate,
              [d.U.Identity]: n.PageView.ItemIdentityCreate,
              [d.U.Phone]: n.PageView.ItemPhoneCreate,
              [d.U.Website]: n.PageView.ItemWebsiteCreate
            };
            (0, m.Nc)(e[s]);
          }, []),
            (0, a.useEffect)(() => {
              P && R();
            }, [P]);
          const N = () => {
              (0, m.Nc)(n.PageView.ItemPersonalInfoList), (0, p.uX)(V.userPersonalInfo);
            },
            k = (0, h.B)(e.globalState),
            T = (0, r.tZ)(f.ZP, { iconSize: f.Jh.headerEditPanelIcon, iconType: I }),
            U = (0, y.gV)(C, s);
          return (0, r.tZ)(
            v.zI,
            {
              isViewingExistingItem: !1,
              itemHasBeenEdited: S,
              onNavigateOut: N,
              onSubmit: async () => {
                Boolean(E.current?.isFormValid()) &&
                  (await (async () => {
                    const e = E.current?.getValues();
                    e &&
                      "success" !== (await x({ vaultItemType: s, content: e })).tag &&
                      w.showAlert(C("_common_generic_error"), l.BLW.ERROR);
                  })(),
                  N());
              },
              formId: "add_personalinfo_panel",
              header: (0, r.tZ)(v.V9, { icon: T, iconBackgroundColor: b()["--dash-green-00"], title: U })
            },
            t(e, E, () => Z(!0), k)
          );
        };
      }
    },
    945352: (e, t, s) => {
      s.r(t), s.d(t, { IdentityAddPanel: () => h });
      var a = s(696832),
        n = s(307973),
        r = s(575257),
        l = s(511329),
        i = s(382706),
        o = s(879862),
        d = s(53748),
        p = s(615446);
      const h = (0, d.B)({
        iconType: p.Tu.identity,
        vaultItemType: i.U.Identity,
        renderForm: (e, t, s, i) => {
          const d = r.c[e.globalState.locale.country] || r.c.US,
            p = {
              birthDate: (0, n.Z)(new Date(), "yyyy-MM-dd"),
              birthPlace: "",
              firstName: "",
              lastName2: "",
              lastName: "",
              localeFormat: d,
              middleName: "",
              pseudo: "",
              spaceId: i,
              title: l.t.Mr
            };
          return a.createElement(o.P, { lee: e, currentValues: p, signalEditedValues: s, ref: t });
        }
      });
    }
  }
]);
