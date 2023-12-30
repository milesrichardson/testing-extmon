"use strict";
(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [2067],
  {
    619733: (e, t, a) => {
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
    313661: (e, t, a) => {
      a.d(t, { Z: () => m });
      var n = a(696832),
        o = a(554712),
        l = a(383849),
        s = a.n(l),
        i = a(526849),
        r = a(769183),
        p = a(317894),
        c = a.n(p),
        d = a(142897),
        u = a(654),
        h = a(83126);
      const _ = (e) => {
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
          return (0, d.tZ)(o.Z, {
            inputRef: (e) => {
              this.field = e;
            },
            id: this.state.fieldHtmlId,
            disabled: this.props.disabled,
            value: null != (e = this.props.value) ? e : "",
            name: this.props.name,
            "data-name": this.props.dataName,
            sx: { borderColor: this.props.error && "ds.border.danger.standard.idle" },
            className: h.Z.textarea,
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
              className: s()(h.Z.input, { [h.Z.error]: Boolean(this.props.error) }),
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
                c(),
                { ...t, ...this.props.maskProps, mask: this.props.mask, onCopy: () => _(t.value), onCut: () => _(t.value) },
                (e) => (0, d.tZ)("input", { ...a, ...e })
              )
            : (0, d.tZ)(
                "div",
                { className: h.Z.inputRow },
                (0, d.tZ)("input", { ...a, ...t }),
                (0, d.tZ)(
                  "div",
                  {
                    hidden: !this.props.error || "string" != typeof this.props.error,
                    sx: { color: "ds.text.danger.quiet" },
                    className: h.Z.errorMessage
                  },
                  this.props.error
                )
              );
        }
        render() {
          const e = "password" !== this.props.type ? this.props.value || this.props.placeholder : "";
          return (0, d.tZ)(
            "div",
            { className: s()(h.Z.container, this.props.multiLine ? h.Z.containerMultiLine : null) },
            this.props.label &&
              (0, d.tZ)(
                "label",
                { className: h.Z.label, sx: { color: "ds.text.neutral.catchy" }, htmlFor: this.state.fieldHtmlId },
                (0, d.tZ)("span", { className: h.Z.text, title: this.props.label }, this.props.label)
              ),
            (0, d.tZ)(
              u.Z,
              {
                tooltipText: e,
                className: s()(h.Z.value, { [h.Z.placeholder]: !this.props.value, [h.Z.multiline]: this.props.multiLine })
              },
              this.props.multiLine ? this.getTextarea() : this.getInput()
            )
          );
        }
      }
      m.defaultProps = { maskProps: { maskChar: "" } };
    },
    59896: (e, t, a) => {
      a.d(t, { Z: () => d });
      var n = a(696832),
        o = a(142897),
        l = a(526849),
        s = a(383849),
        i = a.n(s),
        r = a(769183);
      var p = a(255990);
      function c(e, t) {
        const a = e.find((e) => String(e.value) === String(t));
        return null != a ? a : null;
      }
      class d extends n.Component {
        constructor(e) {
          super(e),
            (this.select = n.createRef()),
            (this.handleChange = (e) => {
              const t = e.target;
              if (!t) return;
              const a = t.value,
                n = c(this.props.options, a);
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
            (t = c(
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
    103181: (e, t, a) => {
      a.d(t, { o: () => P });
      var n = a(696832),
        o = a(575257),
        l = a(660765),
        s = a(142897),
        i = a(201389),
        r = a(313661),
        p = a(59896),
        c = a(619733),
        d = a(62429),
        u = a(694802),
        h = a(826771),
        _ = a(839434),
        m = a(453576);
      const b = "webapp_payment_edition_field_bank_account_BIC",
        C = "webapp_payment_edition_field_bank_account_no_BIC_placeholder",
        I = "webapp_payment_edition_field_bank_account_account_number",
        y = "webapp_payment_edition_field_bank_account_no_account_number_placeholder",
        f = "webapp_payment_alert_bank_account_BIC_copied",
        v = "webapp_payment_alert_bank_account_account_number_copied";
      var g = a(148038),
        k = a(66941);
      const B = {},
        Z = (e) => e !== B,
        w = [],
        E = (e) => {
          const t = (() => {
            const e = n.useRef(B),
              t = (0, g.qr)({ queryConfig: { query: k.C.getAllBanks } }, []);
            return Z(e.current) || t.status !== g.rq.Success || (e.current = t.data), e.current;
          })();
          return n.useMemo(() => {
            var a;
            if (!Z(t)) return w;
            const n = (null != (a = t[e]) ? a : []).slice();
            return n.sort((e, t) => e.localizedString.localeCompare(t.localizedString)), n;
          }, [t, e]);
        },
        N = "webapp_payment_edition_field_bank_account_action_hide",
        S = "webapp_payment_edition_field_bank_account_action_show",
        A = "webapp_payment_edition_field_bank_account_country",
        R = "webapp_payment_edition_field_bank_account_bank_name",
        x = (e, t) => e.find(({ value: e }) => e === t),
        L = (e) =>
          null === e.buttons
            ? (0, s.tZ)(n.Fragment, null, e.children)
            : (0, s.tZ)(c.N, { enabled: e.showButtonsOnHover }, e.children, e.buttons),
        P = (0, n.forwardRef)((e, t) => {
          var a;
          const { bankAccount: c, errors: g = new Set(), signalEditedValues: k } = e,
            { bankCode: B, accountName: Z, IBAN: P, BIC: O, ownerName: D, spaceId: F, country: H } = c,
            T = P.length > 0,
            q = O.length > 0,
            [K, z] = (0, n.useState)(!q),
            [U, V] = (0, n.useState)(!T),
            { translate: M } = (0, i.Z)(),
            X = "edit" === e.variant ? !e.areProtectedItemsUnlocked : void 0,
            W = (e) => (t) => {
              const a = "string" == typeof t ? t : t.target.value;
              k({ ...c, [e]: a });
            },
            j =
              "edit" === e.variant
                ? (t) => {
                    (0, d.Kz)(
                      new l.UserRevealVaultItemFieldEvent({
                        field: t,
                        isProtected: !0,
                        itemId: e.itemId,
                        itemType: l.ItemType.BankStatement
                      })
                    );
                  }
                : void 0,
            $ =
              "edit" === e.variant
                ? () => {
                    !K && j && j(l.Field.Bic);
                    const t = () => z((e) => !e);
                    X && "function" == typeof e.openProtectedItemsUnlocker
                      ? e.openProtectedItemsUnlocker({ action: h.P.Show, itemType: h.R.BankAccount, successCallback: t })
                      : t();
                  }
                : void 0,
            Q =
              "edit" === e.variant
                ? () => {
                    !U && j && j(l.Field.Iban);
                    const t = () => V((e) => !e);
                    X && "function" == typeof e.openProtectedItemsUnlocker
                      ? e.openProtectedItemsUnlocker({ action: h.P.Show, itemType: h.R.BankAccount, successCallback: t })
                      : t();
                  }
                : void 0,
            Y =
              "edit" === e.variant
                ? (t, a, n) => {
                    (0, d.Kz)(
                      new l.UserCopyVaultItemFieldEvent({
                        itemType: l.ItemType.BankStatement,
                        field: l.Field.Bic,
                        itemId: e.itemId,
                        isProtected: !0
                      })
                    ),
                      a && e.onCopy(M(t.BIC_COPIED)),
                      n && "function" == typeof e.reportError && e.reportError(n, "[bank-account-form] Unable to copy to clipboard");
                  }
                : void 0,
            G =
              "edit" === e.variant
                ? (t, a, n) => {
                    (0, d.Kz)(
                      new l.UserCopyVaultItemFieldEvent({
                        itemType: l.ItemType.BankStatement,
                        field: l.Field.Iban,
                        itemId: e.itemId,
                        isProtected: !0
                      })
                    ),
                      a && e.onCopy(M(t.IBAN_COPIED)),
                      n && "function" == typeof e.reportError && e.reportError(n, "[bank-account-form] Unable to copy to clipboard");
                  }
                : void 0,
            J = E(H),
            ee = J !== w,
            te = (0, n.useMemo)(() => J.map((e) => ({ label: e.localizedString, value: `${H}-${e.code}` })), [J, H]);
          (0, n.useEffect)(() => {
            void 0 === x(te, B) && te.length > 0 && k({ ...c, bankCode: te[0].value }, !0),
              "" !== B && !te.length && ee && k({ ...c, bankCode: "" });
          }, [B, c, te, ee, k]);
          const ae = ((e, t) =>
              e
                .filter((e) => !(o.c[e] === o.c.UNIVERSAL || o.c[e] === o.c.NO_TYPE))
                .map((e) => ({ label: t(`country_name_${o.c[e]}`), value: o.c[e] }))
                .sort((e, t) => e.label.localeCompare(t.label)))(Object.keys(o.c), M),
            ne = ((e) => {
              switch (e) {
                case m.Country.MX:
                  return {
                    IBAN: "webapp_payment_edition_field_bank_account_CLABE",
                    BIC: b,
                    IBAN_PLACEHOLDER: "webapp_payment_edition_field_bank_account_no_CLABE_placeholder",
                    BIC_PLACEHOLDER: C,
                    IBAN_COPIED: "webapp_payment_alert_bank_account_CLABE_copied",
                    BIC_COPIED: f
                  };
                case m.Country.GB:
                  return {
                    IBAN: I,
                    BIC: "webapp_payment_edition_field_bank_account_sort_code",
                    IBAN_PLACEHOLDER: y,
                    BIC_PLACEHOLDER: "webapp_payment_edition_field_bank_account_no_sort_code_placeholder",
                    IBAN_COPIED: v,
                    BIC_COPIED: "webapp_payment_alert_bank_account_sort_code_copied"
                  };
                case m.Country.US:
                  return {
                    IBAN: I,
                    BIC: "webapp_payment_edition_field_bank_account_routing_number",
                    IBAN_PLACEHOLDER: y,
                    BIC_PLACEHOLDER: "webapp_payment_edition_field_bank_account_no_routing_number_placeholder",
                    IBAN_COPIED: v,
                    BIC_COPIED: "webapp_payment_alert_bank_account_routing_number_copied"
                  };
                default:
                  return {
                    IBAN: "webapp_payment_edition_field_bank_account_IBAN",
                    BIC: b,
                    IBAN_PLACEHOLDER: "webapp_payment_edition_field_bank_account_no_IBAN_placeholder",
                    BIC_PLACEHOLDER: C,
                    IBAN_COPIED: "webapp_payment_alert_bank_account_IBAN_copied",
                    BIC_COPIED: f
                  };
              }
            })(H);
          return (0, s.tZ)(
            n.Fragment,
            null,
            (0, s.tZ)(r.Z, {
              key: "name",
              value: Z,
              label: M("webapp_payment_edition_field_bank_account_name"),
              placeholder: M("webapp_payment_edition_field_bank_account_no_name_placeholder"),
              onChange: W("accountName"),
              ref: t
            }),
            (0, s.tZ)(r.Z, {
              key: "owner",
              value: D,
              label: M("webapp_payment_edition_field_bank_account_owner_name"),
              placeholder: M("webapp_payment_edition_field_bank_account_no_owner_name_placeholder"),
              onChange: W("ownerName")
            }),
            (0, s.tZ)(
              L,
              {
                showButtonsOnHover: q,
                buttons:
                  "edit" === e.variant
                    ? (0, s.tZ)(
                        n.Fragment,
                        null,
                        $
                          ? (0, s.tZ)(s.zx, { mood: "neutral", intensity: "quiet", sx: { marginRight: "8px" }, onClick: $ }, M(K ? N : S))
                          : null,
                        Y && void 0 !== X
                          ? (0, s.tZ)(u.m, { data: O, checkProtected: () => X, onCopy: (e, t) => Y(ne, e, t), itemType: h.R.BankAccount })
                          : null
                      )
                    : null
              },
              (0, s.tZ)(r.Z, {
                key: "BIC",
                disabled: !K && q,
                value: K ? O : "●●●●●●",
                label: M(ne.BIC),
                placeholder: M(ne.BIC_PLACEHOLDER),
                type: "text",
                onChange: W("BIC"),
                error: g.has("BIC")
              })
            ),
            (0, s.tZ)(
              L,
              {
                showButtonsOnHover: T,
                buttons:
                  "edit" === e.variant
                    ? (0, s.tZ)(
                        n.Fragment,
                        null,
                        Q
                          ? (0, s.tZ)(s.zx, { mood: "neutral", intensity: "quiet", sx: { marginRight: "8px" }, onClick: Q }, M(U ? N : S))
                          : null,
                        G && void 0 !== X
                          ? (0, s.tZ)(u.m, { data: P, checkProtected: () => X, onCopy: (e, t) => G(ne, e, t), itemType: h.R.BankAccount })
                          : null
                      )
                    : null
              },
              (0, s.tZ)(r.Z, {
                key: "IBAN",
                label: M(ne.IBAN),
                placeholder: M(ne.IBAN_PLACEHOLDER),
                dataName: "IBAN",
                disabled: !U && T,
                type: "text",
                value: U ? P : "●●●●●●●●●●●●●●●●",
                onChange: W("IBAN"),
                error: g.has("IBAN")
              })
            ),
            (0, s.tZ)(p.Z, {
              key: "country",
              label: M(A),
              placeholder: M(A) + H,
              onChange: W("country"),
              options: ae,
              defaultOption: { label: M(`country_name_${H}`), value: H }
            }),
            te.length > 0
              ? (0, s.tZ)(p.Z, {
                  key: `${H}bank`,
                  label: M(R),
                  placeholder: M(R) + B,
                  onChange: W("bankCode"),
                  options: te,
                  defaultOption: null != (a = x(te, B)) ? a : te[0]
                })
              : null,
            (0, s.tZ)(_.M, { spaceId: null != F ? F : "", labelSx: _.e, onChange: (e) => W("spaceId")(e) })
          );
        });
    },
    887982: (e, t, a) => {
      a.d(t, { L: () => l });
      var n = a(696832),
        o = a(441217);
      const l = () =>
        n.createElement("div", { className: "iconWrapper--JneIZUVWyv" }, n.createElement(o.QCj, { size: 48, color: o.colors.white }));
    },
    83126: (e, t, a) => {
      a.d(t, { Z: () => n });
      const n = {
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
