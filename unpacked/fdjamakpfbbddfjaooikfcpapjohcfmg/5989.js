"use strict";
(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [5989],
  {
    611913: (e, t, s) => {
      s.d(t, { Z: () => g });
      var a = s(696832),
        l = s(554712),
        i = s(383849),
        n = s.n(i),
        o = s(526849),
        r = s(957459),
        p = s(158549),
        d = s.n(p),
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
              className: n()(c.input, { [c.error]: Boolean(this.props.error) }),
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
            { className: n()(c.container, this.props.multiLine ? c.containerMultiLine : null) },
            this.props.label &&
              (0, h.tZ)(
                "label",
                { className: c.label, sx: { color: "ds.text.neutral.catchy" }, htmlFor: this.state.fieldHtmlId },
                (0, h.tZ)("span", { className: c.text, title: this.props.label }, this.props.label)
              ),
            (0, h.tZ)(
              u.Z,
              { tooltipText: e, className: n()(c.value, { [c.placeholder]: !this.props.value, [c.multiline]: this.props.multiLine }) },
              this.props.multiLine ? this.getTextarea() : this.getInput()
            )
          );
        }
      }
      g.defaultProps = { maskProps: { maskChar: "" } };
    },
    504085: (e, t, s) => {
      s.d(t, { Z: () => h });
      var a = s(696832),
        l = s(876307),
        i = s(526849),
        n = s(383849),
        o = s.n(n),
        r = s(957459);
      var p = s(855541);
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
              null === this.props.defaultOption ? (0, i.head)(this.props.options).value : this.props.defaultOption.value
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
          let n;
          this.state.optionSelected
            ? (n = this.state.optionSelected.value)
            : this.props.options.length &&
              (n = null === this.props.defaultOption ? (0, i.head)(this.props.options).value : this.props.defaultOption.value);
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
                  value: n,
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
    242521: (e, t, s) => {
      s.d(t, { Jh: () => o, UE: () => i, ZP: () => r });
      var a = s(696832),
        l = s(526849);
      const i = (0, l.compose)(l.not, l.isEmpty, l.trim, (0, l.defaultTo)("")),
        n = /.+@.+\..+/,
        o = (e) => n.test(e.trim());
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
    375989: (e, t, s) => {
      s.r(t), s.d(t, { EmailAddPanel: () => p });
      var a = s(696832),
        l = s(649341),
        i = s(382706),
        n = s(546257),
        o = s(53748),
        r = s(615446);
      const p = (0, o.B)({
        iconType: r.Tu.email,
        vaultItemType: i.U.Email,
        renderForm: (e, t, s, i) => {
          const o = { emailAddress: "", itemName: "", spaceId: i, type: l.V.Perso };
          return a.createElement(n._, { lee: e, currentValues: o, signalEditedValues: s, ref: t });
        }
      });
    },
    546257: (e, t, s) => {
      s.d(t, { _: () => h });
      var a = s(696832),
        l = s(526849),
        i = s(649341),
        n = s(611913),
        o = s(504085),
        r = s(66485),
        p = s(242521),
        d = s(167406);
      class h extends p.ZP {
        isFormValid() {
          return this.validateValues({ emailAddress: p.Jh });
        }
        render() {
          var e, t;
          const s = this.props.lee.translate.namespace("webapp_personal_info_edition_email_"),
            { shouldShowTrialDiscontinuedDialog: r } = this.context,
            p = [
              { label: s("perso_type"), value: i.V.Perso },
              { label: s("pro_type"), value: i.V.Pro }
            ],
            h = null != (e = (0, l.find)((0, l.propEq)("value", this.state.values.type), p)) ? e : (0, l.head)(p);
          return a.createElement(
            a.Fragment,
            null,
            a.createElement(n.Z, {
              type: "email",
              label: s("email_label"),
              placeholder: s("placeholder_no_email"),
              dataName: "emailAddress",
              value: this.state.values.emailAddress,
              error: this.state.errors.emailAddress,
              onChange: this.handleChange,
              disabled: !!r
            }),
            a.createElement(o.Z, {
              label: s("type_label"),
              placeholder: h.label,
              dataName: "type",
              options: p,
              defaultOption: h,
              onChange: this.handleChange,
              disabled: !!r
            }),
            a.createElement(n.Z, {
              label: s("name_label"),
              placeholder: s("placeholder_no_emailName"),
              dataName: "itemName",
              value: this.state.values.itemName,
              onChange: this.handleChange,
              disabled: !!r
            }),
            a.createElement(d.M, {
              labelSx: d.e,
              spaceId: null != (t = this.state.values.spaceId) ? t : "",
              onChange: (e) => this.handleChange(e, "spaceId"),
              disabled: !!r
            })
          );
        }
      }
      h.contextType = r.gD;
    },
    53748: (e, t, s) => {
      s.d(t, { B: () => S });
      var a = s(696832),
        l = s(593039),
        i = s(876307),
        n = s(962899),
        o = s(482598),
        r = s(448430),
        p = s(382706),
        d = s(692077),
        h = s(739649),
        u = s(86498),
        c = s(488203),
        m = s(45272),
        g = s(66485),
        v = s(376452),
        b = s(615446),
        f = s(718462),
        y = s(418402),
        C = s.n(y);
      function S(e) {
        const { renderForm: t, vaultItemType: s, iconType: y } = e;
        return ({ lee: e }) => {
          const { translate: S } = (0, c.Z)(),
            { routes: I } = (0, d.Xo)(),
            V = (0, u.V)(),
            { createVaultItem: w } = (0, o.u)(r.L),
            Z = (0, a.useRef)(null),
            { openDialog: E, shouldShowTrialDiscontinuedDialog: x } = (0, g.yp)(),
            [N, _] = (0, a.useState)(!1);
          (0, a.useEffect)(() => {
            const e = {
              [p.U.Address]: l.PageView.ItemAddressCreate,
              [p.U.Company]: l.PageView.ItemCompanyCreate,
              [p.U.Email]: l.PageView.ItemEmailCreate,
              [p.U.Identity]: l.PageView.ItemIdentityCreate,
              [p.U.Phone]: l.PageView.ItemPhoneCreate,
              [p.U.Website]: l.PageView.ItemWebsiteCreate
            };
            (0, m.Nc)(e[s]);
          }, []),
            (0, a.useEffect)(() => {
              x && E();
            }, [x]);
          const R = () => {
              (0, m.Nc)(l.PageView.ItemPersonalInfoList), (0, d.uX)(I.userPersonalInfo);
            },
            k = (0, h.B)(e.globalState),
            F = (0, i.tZ)(b.ZP, { iconSize: b.Jh.headerEditPanelIcon, iconType: y }),
            P = (0, f.gV)(S, s);
          return (0, i.tZ)(
            v.zI,
            {
              isViewingExistingItem: !1,
              itemHasBeenEdited: N,
              onNavigateOut: R,
              onSubmit: async () => {
                Boolean(Z.current?.isFormValid()) &&
                  (await (async () => {
                    const e = Z.current?.getValues();
                    e &&
                      "success" !== (await w({ vaultItemType: s, content: e })).tag &&
                      V.showAlert(S("_common_generic_error"), n.BLW.ERROR);
                  })(),
                  R());
              },
              formId: "add_personalinfo_panel",
              header: (0, i.tZ)(v.V9, { icon: F, iconBackgroundColor: C()["--dash-green-00"], title: P })
            },
            t(e, Z, () => _(!0), k)
          );
        };
      }
    },
    855541: (e, t, s) => {
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
