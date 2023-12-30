"use strict";
(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [7232],
  {
    611913: (e, t, s) => {
      s.d(t, { Z: () => g });
      var a = s(696832),
        n = s(554712),
        l = s(383849),
        r = s.n(l),
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
    242521: (e, t, s) => {
      s.d(t, { Jh: () => i, UE: () => l, ZP: () => o });
      var a = s(696832),
        n = s(526849);
      const l = (0, n.compose)(n.not, n.isEmpty, n.trim, (0, n.defaultTo)("")),
        r = /.+@.+\..+/,
        i = (e) => r.test(e.trim());
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
      s.d(t, { B: () => w });
      var a = s(696832),
        n = s(593039),
        l = s(876307),
        r = s(962899),
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
        b = s(615446),
        f = s(718462),
        I = s(418402),
        C = s.n(I);
      function w(e) {
        const { renderForm: t, vaultItemType: s, iconType: I } = e;
        return ({ lee: e }) => {
          const { translate: w } = (0, c.Z)(),
            { routes: y } = (0, p.Xo)(),
            V = (0, u.V)(),
            { createVaultItem: E } = (0, i.u)(o.L),
            x = (0, a.useRef)(null),
            { openDialog: R, shouldShowTrialDiscontinuedDialog: _ } = (0, g.yp)(),
            [Z, S] = (0, a.useState)(!1);
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
              _ && R();
            }, [_]);
          const U = () => {
              (0, m.Nc)(n.PageView.ItemPersonalInfoList), (0, p.uX)(y.userPersonalInfo);
            },
            N = (0, h.B)(e.globalState),
            P = (0, l.tZ)(b.ZP, { iconSize: b.Jh.headerEditPanelIcon, iconType: I }),
            k = (0, f.gV)(w, s);
          return (0, l.tZ)(
            v.zI,
            {
              isViewingExistingItem: !1,
              itemHasBeenEdited: Z,
              onNavigateOut: U,
              onSubmit: async () => {
                Boolean(x.current?.isFormValid()) &&
                  (await (async () => {
                    const e = x.current?.getValues();
                    e &&
                      "success" !== (await E({ vaultItemType: s, content: e })).tag &&
                      V.showAlert(w("_common_generic_error"), r.BLW.ERROR);
                  })(),
                  U());
              },
              formId: "add_personalinfo_panel",
              header: (0, l.tZ)(v.V9, { icon: P, iconBackgroundColor: C()["--dash-green-00"], title: k })
            },
            t(e, x, () => S(!0), N)
          );
        };
      }
    },
    987232: (e, t, s) => {
      s.r(t), s.d(t, { WebsiteAddPanel: () => o });
      var a = s(696832),
        n = s(382706),
        l = s(647837),
        r = s(53748),
        i = s(615446);
      const o = (0, r.B)({
        iconType: i.Tu.website,
        vaultItemType: n.U.Website,
        renderForm: (e, t, s, n) => {
          const r = { itemName: "", spaceId: n, URL: "" };
          return a.createElement(l.m, { lee: e, currentValues: r, signalEditedValues: s, ref: t });
        }
      });
    },
    647837: (e, t, s) => {
      s.d(t, { m: () => o });
      var a = s(696832),
        n = s(611913),
        l = s(66485),
        r = s(242521),
        i = s(167406);
      class o extends r.ZP {
        isFormValid() {
          return this.validateValues({ URL: r.UE });
        }
        render() {
          var e;
          const t = this.props.lee.translate.namespace("webapp_personal_info_edition_website_"),
            { shouldShowTrialDiscontinuedDialog: s } = this.context;
          return a.createElement(
            a.Fragment,
            null,
            a.createElement(n.Z, {
              key: "website",
              label: t("website_label"),
              placeholder: t("placeholder_no_website"),
              dataName: "URL",
              value: this.state.values.URL,
              error: this.state.errors.URL,
              onChange: this.handleChange,
              disabled: !!s
            }),
            a.createElement(n.Z, {
              key: "name",
              label: t("name_label"),
              placeholder: t("placeholder_no_name"),
              dataName: "itemName",
              value: this.state.values.itemName,
              onChange: this.handleChange,
              disabled: !!s
            }),
            a.createElement(i.M, {
              labelSx: i.e,
              spaceId: null != (e = this.state.values.spaceId) ? e : "",
              onChange: (e) => this.handleChange(e, "spaceId"),
              disabled: !!s
            })
          );
        }
      }
      o.contextType = l.gD;
    }
  }
]);
