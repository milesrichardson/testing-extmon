"use strict";
(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [1720],
  {
    363338: (e, t, a) => {
      a.d(t, { N: () => s });
      var n = a(696832),
        o = a(383849),
        l = a.n(o);
      const s = ({ disableHover: e = !1, ...t }) => {
        const [a, o] = n.useState(!1),
          { children: [s, ...i] = [] } = t;
        return n.createElement(
          "div",
          { className: "buttonsContainer--TiPIoxROXR", onMouseEnter: () => o(!0), onMouseLeave: () => o(!1) },
          s,
          t.enabled && n.createElement("span", { className: l()("buttons--p98QFrEo3f", { "visible--aWYlZRshE_": e || a }) }, i)
        );
      };
    },
    611913: (e, t, a) => {
      a.d(t, { Z: () => m });
      var n = a(696832),
        o = a(554712),
        l = a(383849),
        s = a.n(l),
        i = a(526849),
        r = a(957459),
        p = a(158549),
        d = a.n(p),
        c = a(876307),
        u = a(573630);
      const h = {
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
        _ = (e) => {
          navigator.clipboard.writeText(e.replaceAll(" ", ""));
        };
      class m extends n.Component {
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
          return (0, c.tZ)(o.Z, {
            inputRef: (e) => {
              this.field = e;
            },
            id: this.state.fieldHtmlId,
            disabled: this.props.disabled,
            value: null != (e = this.props.value) ? e : "",
            name: this.props.name,
            "data-name": this.props.dataName,
            sx: { borderColor: this.props.error && "ds.border.danger.standard.idle" },
            className: h.textarea,
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
              className: s()(h.input, { [h.error]: Boolean(this.props.error) }),
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
            ? (0, c.tZ)(
                d(),
                { ...t, ...this.props.maskProps, mask: this.props.mask, onCopy: () => _(t.value), onCut: () => _(t.value) },
                (e) => (0, c.tZ)("input", { ...a, ...e })
              )
            : (0, c.tZ)(
                "div",
                { className: h.inputRow },
                (0, c.tZ)("input", { ...a, ...t }),
                (0, c.tZ)(
                  "div",
                  {
                    hidden: !this.props.error || "string" != typeof this.props.error,
                    sx: { color: "ds.text.danger.quiet" },
                    className: h.errorMessage
                  },
                  this.props.error
                )
              );
        }
        render() {
          const e = "password" !== this.props.type ? this.props.value || this.props.placeholder : "";
          return (0, c.tZ)(
            "div",
            { className: s()(h.container, this.props.multiLine ? h.containerMultiLine : null) },
            this.props.label &&
              (0, c.tZ)(
                "label",
                { className: h.label, sx: { color: "ds.text.neutral.catchy" }, htmlFor: this.state.fieldHtmlId },
                (0, c.tZ)("span", { className: h.text, title: this.props.label }, this.props.label)
              ),
            (0, c.tZ)(
              u.Z,
              { tooltipText: e, className: s()(h.value, { [h.placeholder]: !this.props.value, [h.multiline]: this.props.multiLine }) },
              this.props.multiLine ? this.getTextarea() : this.getInput()
            )
          );
        }
      }
      m.defaultProps = { maskProps: { maskChar: "" } };
    },
    504085: (e, t, a) => {
      a.d(t, { Z: () => c });
      var n = a(696832),
        o = a(876307),
        l = a(526849),
        s = a(383849),
        i = a.n(s),
        r = a(957459);
      var p = a(855541);
      function d(e, t) {
        const a = e.find((e) => String(e.value) === String(t));
        return null != a ? a : null;
      }
      class c extends n.Component {
        constructor(e) {
          super(e),
            (this.select = n.createRef()),
            (this.handleChange = (e) => {
              const t = e.target;
              if (!t) return;
              const a = t.value,
                n = d(this.props.options, a);
              this.setState({ optionSelected: n }), this.props.onChange && this.props.onChange(e);
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
              null === this.props.defaultOption ? (0, l.head)(this.props.options).value : this.props.defaultOption.value
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
            n = i()("selector--fgNHKzkAC3", this.props.classNames);
          let s;
          this.state.optionSelected
            ? (s = this.state.optionSelected.value)
            : this.props.options.length &&
              (s = null === this.props.defaultOption ? (0, l.head)(this.props.options).value : this.props.defaultOption.value);
          const r = this.state.optionSelected
            ? this.state.optionSelected.selectedLabel
              ? this.state.optionSelected.selectedLabel
              : this.state.optionSelected.label
            : this.props.placeholder;
          return (0, o.tZ)(
            "div",
            { className: "container--KChkEdb4YV" },
            this.props.label &&
              (0, o.tZ)(
                "label",
                { className: p.Z.label, color: "ds.text.neutral.catchy", htmlFor: this.state.fieldHtmlId, title: this.props.label },
                this.props.label
              ),
            (0, o.tZ)(
              "div",
              { className: a },
              (0, o.tZ)(
                "div",
                { className: n },
                this.state.optionSelected &&
                  this.state.optionSelected.icon &&
                  (0, o.tZ)("span", { className: "icon--p3a7nsSbg9" }, this.state.optionSelected.icon),
                (0, o.tZ)("span", { className: "text--SjkXyB7Kyp", sx: { color: "ds.text.neutral.catchy" } }, r)
              ),
              (0, o.tZ)(
                "select",
                {
                  key: this.state.fieldHtmlId,
                  className: p.Z.select,
                  ref: this.select,
                  id: this.state.fieldHtmlId,
                  value: s,
                  name: this.props.name,
                  disabled: this.props.disabled,
                  "data-name": this.props.dataName,
                  onKeyDown: this.handleKeyDown,
                  onChange: this.handleChange,
                  onFocus: this.handleFocus,
                  onBlur: this.handleBlur,
                  "aria-label": null != (e = this.props.ariaLabel) ? e : this.props.label
                },
                this.props.options.map((e) => (0, o.tZ)("option", { key: e.value, disabled: e.disabled, value: String(e.value) }, e.label))
              )
            )
          );
        }
      }
    },
    908940: (e, t, a) => {
      a.d(t, { o: () => O, e: () => D });
      var n = a(696832),
        o = a(575257),
        l = a(593039),
        s = a(876307),
        i = a(488203),
        r = a(611913),
        p = a(504085),
        d = a(363338),
        c = a(45272),
        u = a(66485),
        h = a(921310),
        _ = a(868819),
        m = a(167406),
        b = a(914662);
      const I = "webapp_payment_edition_field_bank_account_BIC",
        C = "webapp_payment_edition_field_bank_account_no_BIC_placeholder",
        y = "webapp_payment_edition_field_bank_account_account_number",
        v = "webapp_payment_edition_field_bank_account_no_account_number_placeholder",
        f = "webapp_payment_alert_bank_account_BIC_copied",
        g = "webapp_payment_alert_bank_account_account_number_copied";
      var k = a(148038),
        B = a(740300);
      const w = {},
        E = (e) => e !== w,
        N = [],
        Z = (e) => {
          const t = (() => {
            const e = n.useRef(w),
              t = (0, k.qr)({ queryConfig: { query: B.C.getAllBanks } }, []);
            return E(e.current) || t.status !== k.rq.Success || (e.current = t.data), e.current;
          })();
          return n.useMemo(() => {
            var a;
            if (!E(t)) return N;
            const n = (null != (a = t[e]) ? a : []).slice();
            return n.sort((e, t) => e.localizedString.localeCompare(t.localizedString)), n;
          }, [t, e]);
        },
        S = "webapp_payment_edition_field_bank_account_action_hide",
        A = "webapp_payment_edition_field_bank_account_action_show",
        R = "webapp_payment_edition_field_bank_account_country",
        x = "webapp_payment_edition_field_bank_account_bank_name",
        L = (e, t) => e.find(({ value: e }) => e === t),
        P = (e) =>
          null === e.buttons
            ? (0, s.tZ)(n.Fragment, null, e.children)
            : (0, s.tZ)(d.N, { enabled: e.showButtonsOnHover }, e.children, e.buttons),
        O = (0, n.forwardRef)((e, t) => {
          var a;
          const { bankAccount: d, errors: k = new Set(), signalEditedValues: B } = e,
            { bankCode: w, accountName: E, IBAN: O, BIC: D, ownerName: F, spaceId: H, country: T } = d,
            q = O.length > 0,
            K = D.length > 0,
            [z, V] = (0, n.useState)(!K),
            [U, M] = (0, n.useState)(!q),
            { translate: X } = (0, i.Z)(),
            { shouldShowTrialDiscontinuedDialog: W } = (0, u.yp)(),
            j = "edit" === e.variant ? !e.areProtectedItemsUnlocked : void 0,
            $ = ((e) => {
              switch (e) {
                case b.cH.MX:
                  return {
                    IBAN: "webapp_payment_edition_field_bank_account_CLABE",
                    BIC: I,
                    IBAN_PLACEHOLDER: "webapp_payment_edition_field_bank_account_no_CLABE_placeholder",
                    BIC_PLACEHOLDER: C,
                    IBAN_COPIED: "webapp_payment_alert_bank_account_CLABE_copied",
                    BIC_COPIED: f
                  };
                case b.cH.GB:
                  return {
                    IBAN: y,
                    BIC: "webapp_payment_edition_field_bank_account_sort_code",
                    IBAN_PLACEHOLDER: v,
                    BIC_PLACEHOLDER: "webapp_payment_edition_field_bank_account_no_sort_code_placeholder",
                    IBAN_COPIED: g,
                    BIC_COPIED: "webapp_payment_alert_bank_account_sort_code_copied"
                  };
                case b.cH.US:
                  return {
                    IBAN: y,
                    BIC: "webapp_payment_edition_field_bank_account_routing_number",
                    IBAN_PLACEHOLDER: v,
                    BIC_PLACEHOLDER: "webapp_payment_edition_field_bank_account_no_routing_number_placeholder",
                    IBAN_COPIED: g,
                    BIC_COPIED: "webapp_payment_alert_bank_account_routing_number_copied"
                  };
                default:
                  return {
                    IBAN: "webapp_payment_edition_field_bank_account_IBAN",
                    BIC: I,
                    IBAN_PLACEHOLDER: "webapp_payment_edition_field_bank_account_no_IBAN_placeholder",
                    BIC_PLACEHOLDER: C,
                    IBAN_COPIED: "webapp_payment_alert_bank_account_IBAN_copied",
                    BIC_COPIED: f
                  };
              }
            })(T),
            Q = (e) => (t) => {
              const a = "string" == typeof t ? t : t.target.value;
              B({ ...d, [e]: a });
            },
            Y =
              "edit" === e.variant
                ? (t) => {
                    (0, c.Kz)(
                      new l.UserRevealVaultItemFieldEvent({
                        field: t,
                        isProtected: !0,
                        itemId: e.itemId,
                        itemType: l.ItemType.BankStatement
                      })
                    );
                  }
                : void 0,
            G =
              "edit" === e.variant
                ? () => {
                    !z && Y && Y(l.Field.Bic);
                    const t = () => V((e) => !e);
                    j && "function" == typeof e.openProtectedItemsUnlocker
                      ? e.openProtectedItemsUnlocker({ action: _.P.Show, itemType: _.R.BankAccount, successCallback: t })
                      : t();
                  }
                : void 0,
            J =
              "edit" === e.variant
                ? () => {
                    !U && Y && Y(l.Field.Iban);
                    const t = () => M((e) => !e);
                    j && "function" == typeof e.openProtectedItemsUnlocker
                      ? e.openProtectedItemsUnlocker({ action: _.P.Show, itemType: _.R.BankAccount, successCallback: t })
                      : t();
                  }
                : void 0,
            ee =
              "edit" === e.variant
                ? (t) => {
                    (0, c.Kz)(
                      new l.UserCopyVaultItemFieldEvent({
                        itemType: l.ItemType.BankStatement,
                        field: l.Field.Bic,
                        itemId: e.itemId,
                        isProtected: !0
                      })
                    ),
                      t && e.onCopy(X($.BIC_COPIED));
                  }
                : void 0,
            te =
              "edit" === e.variant
                ? (t) => {
                    (0, c.Kz)(
                      new l.UserCopyVaultItemFieldEvent({
                        itemType: l.ItemType.BankStatement,
                        field: l.Field.Iban,
                        itemId: e.itemId,
                        isProtected: !0
                      })
                    ),
                      t && e.onCopy(X($.IBAN_COPIED));
                  }
                : void 0,
            ae = Z(T),
            ne = ae !== N,
            oe = (0, n.useMemo)(() => ae.map((e) => ({ label: e.localizedString, value: `${T}-${e.code}` })), [ae, T]);
          (0, n.useEffect)(() => {
            void 0 === L(oe, w) && oe.length > 0 && B({ ...d, bankCode: oe[0].value }, !0),
              "" !== w && !oe.length && ne && B({ ...d, bankCode: "" });
          }, [w, d, oe, ne, B]);
          const le = ((e, t) =>
            e
              .filter((e) => !(o.c[e] === o.c.UNIVERSAL || o.c[e] === o.c.NO_TYPE))
              .map((e) => ({ label: t(`country_name_${o.c[e]}`), value: o.c[e] }))
              .sort((e, t) => e.label.localeCompare(t.label)))(Object.keys(o.c), X);
          return (0, s.tZ)(
            n.Fragment,
            null,
            (0, s.tZ)(r.Z, {
              key: "name",
              value: E,
              label: X("webapp_payment_edition_field_bank_account_name"),
              placeholder: X("webapp_payment_edition_field_bank_account_no_name_placeholder"),
              onChange: Q("accountName"),
              ref: t,
              disabled: !!W
            }),
            (0, s.tZ)(r.Z, {
              key: "owner",
              value: F,
              label: X("webapp_payment_edition_field_bank_account_owner_name"),
              placeholder: X("webapp_payment_edition_field_bank_account_no_owner_name_placeholder"),
              onChange: Q("ownerName"),
              disabled: !!W
            }),
            (0, s.tZ)(
              P,
              {
                showButtonsOnHover: K,
                buttons:
                  "edit" === e.variant
                    ? (0, s.tZ)(
                        n.Fragment,
                        null,
                        G
                          ? (0, s.tZ)(s.zx, { mood: "neutral", intensity: "quiet", sx: { marginRight: "8px" }, onClick: G }, X(z ? S : A))
                          : null,
                        ee && void 0 !== j
                          ? (0, s.tZ)(h.m, { data: D, checkProtected: () => j, onCopy: ee, itemType: _.R.BankAccount })
                          : null
                      )
                    : null
              },
              (0, s.tZ)(r.Z, {
                key: "BIC",
                disabled: (!z && K) || !!W,
                value: z ? D : "●●●●●●",
                label: X($.BIC),
                placeholder: X($.BIC_PLACEHOLDER),
                type: "text",
                onChange: Q("BIC"),
                error: k.has("BIC")
              })
            ),
            (0, s.tZ)(
              P,
              {
                showButtonsOnHover: q,
                buttons:
                  "edit" === e.variant
                    ? (0, s.tZ)(
                        n.Fragment,
                        null,
                        J
                          ? (0, s.tZ)(s.zx, { mood: "neutral", intensity: "quiet", sx: { marginRight: "8px" }, onClick: J }, X(U ? S : A))
                          : null,
                        te && void 0 !== j
                          ? (0, s.tZ)(h.m, { data: O, checkProtected: () => j, onCopy: te, itemType: _.R.BankAccount })
                          : null
                      )
                    : null
              },
              (0, s.tZ)(r.Z, {
                key: "IBAN",
                label: X($.IBAN),
                placeholder: X($.IBAN_PLACEHOLDER),
                dataName: "IBAN",
                disabled: (!U && q) || !!W,
                type: "text",
                value: U ? O : "●●●●●●●●●●●●●●●●",
                onChange: Q("IBAN"),
                error: k.has("IBAN")
              })
            ),
            (0, s.tZ)(p.Z, {
              key: "country",
              label: X(R),
              placeholder: X(R) + T,
              onChange: Q("country"),
              options: le,
              defaultOption: { label: X(`country_name_${T}`), value: T },
              disabled: !!W
            }),
            oe.length > 0
              ? (0, s.tZ)(p.Z, {
                  key: `${T}bank`,
                  label: X(x),
                  placeholder: X(x) + w,
                  onChange: Q("bankCode"),
                  options: oe,
                  defaultOption: null != (a = L(oe, w)) ? a : oe[0],
                  disabled: !!W
                })
              : null,
            (0, s.tZ)(m.M, { spaceId: null != H ? H : "", labelSx: m.e, onChange: (e) => Q("spaceId")(e), disabled: !!W })
          );
        }),
        D = (e) => (e.BIC || e.IBAN ? { isValid: !0 } : { isValid: !1, errorSet: new Set(["BIC", "IBAN"]) });
    },
    860062: (e, t, a) => {
      a.d(t, { L: () => l });
      var n = a(696832),
        o = a(962899);
      const l = () =>
        n.createElement("div", { className: "iconWrapper--JneIZUVWyv" }, n.createElement(o.QCj, { size: 48, color: o.colors.white }));
    },
    855541: (e, t, a) => {
      a.d(t, { Z: () => n });
      const n = {
        left: "left--jltGqC2ld6",
        right: "right--r4mXfTZRXo",
        select: "select--ivbO452zoA",
        disable: "disable--F2KcdR2ssV",
        label: "label--EhkwVb63v9"
      };
    }
  }
]);
