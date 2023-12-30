"use strict";
(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [7418],
  {
    611913: (e, t, a) => {
      a.d(t, { Z: () => b });
      var s = a(696832),
        l = a(554712),
        n = a(383849),
        o = a.n(n),
        i = a(526849),
        r = a(957459),
        p = a(158549),
        h = a.n(p),
        d = a(876307),
        c = a(573630);
      const u = {
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
      class b extends s.Component {
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
            className: u.textarea,
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
              className: o()(u.input, { [u.error]: Boolean(this.props.error) }),
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
                { className: u.inputRow },
                (0, d.tZ)("input", { ...a, ...t }),
                (0, d.tZ)(
                  "div",
                  {
                    hidden: !this.props.error || "string" != typeof this.props.error,
                    sx: { color: "ds.text.danger.quiet" },
                    className: u.errorMessage
                  },
                  this.props.error
                )
              );
        }
        render() {
          const e = "password" !== this.props.type ? this.props.value || this.props.placeholder : "";
          return (0, d.tZ)(
            "div",
            { className: o()(u.container, this.props.multiLine ? u.containerMultiLine : null) },
            this.props.label &&
              (0, d.tZ)(
                "label",
                { className: u.label, sx: { color: "ds.text.neutral.catchy" }, htmlFor: this.state.fieldHtmlId },
                (0, d.tZ)("span", { className: u.text, title: this.props.label }, this.props.label)
              ),
            (0, d.tZ)(
              c.Z,
              { tooltipText: e, className: o()(u.value, { [u.placeholder]: !this.props.value, [u.multiline]: this.props.multiLine }) },
              this.props.multiLine ? this.getTextarea() : this.getInput()
            )
          );
        }
      }
      b.defaultProps = { maskProps: { maskChar: "" } };
    },
    504085: (e, t, a) => {
      a.d(t, { Z: () => d });
      var s = a(696832),
        l = a(876307),
        n = a(526849),
        o = a(383849),
        i = a.n(o),
        r = a(957459);
      var p = a(855541);
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
    242521: (e, t, a) => {
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
    53748: (e, t, a) => {
      a.d(t, { B: () => Z });
      var s = a(696832),
        l = a(593039),
        n = a(876307),
        o = a(962899),
        i = a(482598),
        r = a(448430),
        p = a(382706),
        h = a(692077),
        d = a(739649),
        c = a(86498),
        u = a(488203),
        m = a(45272),
        b = a(66485),
        g = a(376452),
        v = a(615446),
        f = a(718462),
        y = a(418402),
        C = a.n(y);
      function Z(e) {
        const { renderForm: t, vaultItemType: a, iconType: y } = e;
        return ({ lee: e }) => {
          const { translate: Z } = (0, u.Z)(),
            { routes: _ } = (0, h.Xo)(),
            S = (0, c.V)(),
            { createVaultItem: I } = (0, i.u)(r.L),
            x = (0, s.useRef)(null),
            { openDialog: w, shouldShowTrialDiscontinuedDialog: N } = (0, b.yp)(),
            [V, k] = (0, s.useState)(!1);
          (0, s.useEffect)(() => {
            const e = {
              [p.U.Address]: l.PageView.ItemAddressCreate,
              [p.U.Company]: l.PageView.ItemCompanyCreate,
              [p.U.Email]: l.PageView.ItemEmailCreate,
              [p.U.Identity]: l.PageView.ItemIdentityCreate,
              [p.U.Phone]: l.PageView.ItemPhoneCreate,
              [p.U.Website]: l.PageView.ItemWebsiteCreate
            };
            (0, m.Nc)(e[a]);
          }, []),
            (0, s.useEffect)(() => {
              N && w();
            }, [N]);
          const E = () => {
              (0, m.Nc)(l.PageView.ItemPersonalInfoList), (0, h.uX)(_.userPersonalInfo);
            },
            F = (0, d.B)(e.globalState),
            B = (0, n.tZ)(v.ZP, { iconSize: v.Jh.headerEditPanelIcon, iconType: y }),
            R = (0, f.gV)(Z, a);
          return (0, n.tZ)(
            g.zI,
            {
              isViewingExistingItem: !1,
              itemHasBeenEdited: V,
              onNavigateOut: E,
              onSubmit: async () => {
                Boolean(x.current?.isFormValid()) &&
                  (await (async () => {
                    const e = x.current?.getValues();
                    e &&
                      "success" !== (await I({ vaultItemType: a, content: e })).tag &&
                      S.showAlert(Z("_common_generic_error"), o.BLW.ERROR);
                  })(),
                  E());
              },
              formId: "add_personalinfo_panel",
              header: (0, n.tZ)(g.V9, { icon: B, iconBackgroundColor: C()["--dash-green-00"], title: R })
            },
            t(e, x, () => k(!0), F)
          );
        };
      }
    },
    107418: (e, t, a) => {
      a.r(t), a.d(t, { PhoneAddPanel: () => h });
      var s = a(696832),
        l = a(575257),
        n = a(882009),
        o = a(382706),
        i = a(238983),
        r = a(53748),
        p = a(615446);
      const h = (0, r.B)({
        iconType: p.Tu.phone,
        vaultItemType: o.U.Phone,
        renderForm: (e, t, a, o) => {
          const r = {
            localeFormat: l.c[e.globalState.locale.country] || l.c.US,
            phoneNumber: "",
            itemName: "",
            type: n.z.Mobile,
            spaceId: o
          };
          return s.createElement(i.b, { lee: e, currentValues: r, signalEditedValues: a, ref: t });
        }
      });
    },
    238983: (e, t, a) => {
      a.d(t, { b: () => g });
      var s = a(696832),
        l = a(526849),
        n = a(876307),
        o = a(611913),
        i = a(504085),
        r = a(66485),
        p = a(242521),
        h = a(89600),
        d = a(167406),
        c = a(575257),
        u = a(882009);
      function m(e, t) {
        const a = e.namespace("country_name_");
        return (e) => ((e = e || c.c.US), { label: `${a(c.c[e])} (+${t[e]})`, selectedLabel: `${e} (+${t[e]})`, value: e });
      }
      var b = a(855541);
      class g extends p.ZP {
        isFormValid() {
          return this.validateValues({ phoneNumber: p.UE });
        }
        render() {
          var e, t;
          const { lee: a } = this.props,
            r = a.translate.namespace("webapp_personal_info_edition_phone_"),
            { shouldShowTrialDiscontinuedDialog: p } = this.context,
            g = (function (e) {
              const t = e.namespace("personal_info_");
              return [
                { label: t("phone_type_mobile"), value: u.z.Mobile },
                { label: t("phone_type_landline"), value: u.z.Landline },
                { label: t("phone_type_work_mobile"), value: u.z.WorkMobile },
                { label: t("phone_type_work_landline"), value: u.z.WorkLandline },
                { label: t("phone_type_fax"), value: u.z.Fax },
                { label: t("phone_type_work_fax"), value: u.z.WorkFax },
                { label: t("phone_type_any"), value: u.z.Any }
              ];
            })(a.translate),
            v = null != (e = (0, l.find)((0, l.propEq)("value", this.state.values.type), g)) ? e : (0, l.head)(g),
            f = a.globalState.webapp.callingCodes || {},
            y = (function (e, t) {
              const a = m(e, t);
              return Object.keys(t).map((e) => a(c.c[e]));
            })(a.translate, f),
            C = m(a.translate, f)(this.state.values.localeFormat);
          return (0, n.tZ)(
            s.Fragment,
            null,
            (0, n.tZ)(
              "div",
              { className: h.Z.container },
              (0, n.tZ)(
                "label",
                { className: b.Z.label, sx: { color: "ds.text.neutral.catchy" }, title: r("number_label") },
                r("number_label")
              ),
              (0, n.tZ)(i.Z, {
                placeholder: C.label,
                dataName: "localeFormat",
                options: y,
                defaultOption: C,
                onChange: this.handleChange,
                disabled: !!p
              }),
              (0, n.tZ)(o.Z, {
                type: "text",
                placeholder: r("placeholder_no_number"),
                dataName: "phoneNumber",
                value: this.state.values.phoneNumber,
                error: this.state.errors.phoneNumber,
                onChange: this.handleChange,
                disabled: !!p
              })
            ),
            (0, n.tZ)(o.Z, {
              type: "text",
              label: r("phonename_label"),
              placeholder: r("placeholder_no_phonename"),
              dataName: "itemName",
              value: this.state.values.itemName,
              onChange: this.handleChange,
              disabled: !!p
            }),
            (0, n.tZ)(i.Z, {
              label: r("type_label"),
              placeholder: v.label,
              dataName: "type",
              options: g,
              defaultOption: v,
              onChange: this.handleChange,
              disabled: !!p
            }),
            (0, n.tZ)(d.M, {
              labelSx: d.e,
              spaceId: null != (t = this.state.values.spaceId) ? t : "",
              onChange: (e) => this.handleChange(e, "spaceId"),
              disabled: !!p
            })
          );
        }
      }
      g.contextType = r.gD;
    },
    855541: (e, t, a) => {
      a.d(t, { Z: () => s });
      const s = {
        left: "left--jltGqC2ld6",
        right: "right--r4mXfTZRXo",
        select: "select--ivbO452zoA",
        disable: "disable--F2KcdR2ssV",
        label: "label--EhkwVb63v9"
      };
    },
    89600: (e, t, a) => {
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
