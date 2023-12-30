"use strict";
(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [5393],
  {
    619733: (e, t, a) => {
      a.d(t, { N: () => s });
      var l = a(696832),
        o = a(383849),
        n = a.n(o);
      const s = ({ disableHover: e = !1, ...t }) => {
        const [a, o] = l.useState(!1),
          { children: [s, ...r] = [] } = t;
        return l.createElement(
          "div",
          { className: "buttonsContainer--TiPIoxROXR", onMouseEnter: () => o(!0), onMouseLeave: () => o(!1) },
          s,
          t.enabled && l.createElement("span", { className: n()("buttons--p98QFrEo3f", { "visible--aWYlZRshE_": e || a }) }, r)
        );
      };
    },
    280148: (e, t, a) => {
      a.d(t, { j: () => f });
      var l = a(696832),
        o = a(651154),
        n = a(307973),
        s = a(535473),
        r = a(53830),
        i = a(400711),
        d = a(820283),
        p = a(201389),
        c = a(59896),
        h = a(441217);
      const u = (e, t) => (0, o.Z)(e, t, new Date("1900-01-01")),
        m = (e, t, a) => (l) => (o) => {
          if ("" === o.target.value) return void a("");
          const s = parseInt(o.target.value, 10),
            r = u(e, t),
            i = isNaN(r.getTime())
              ? (() => {
                  const e = new Date();
                  return e.setUTCHours(0, 0, 0, 0), e;
                })()
              : r;
          a((0, n.Z)(l(i, s), t));
        },
        b = (e, t) => {
          var a;
          return null != (a = e.find(({ value: e }) => t === e)) ? a : e[0];
        },
        _ = "webapp_id_form_field_placeholder_day",
        y = "webapp_id_form_field_placeholder_month",
        C = "webapp_id_form_field_placeholder_year",
        g = (e) => ({ label: e, value: "" }),
        f = ({
          yearsRange: e = [-120, 0],
          sortYears: t = "ASC",
          hideDay: a = !1,
          value: o,
          label: n,
          dateFormat: f,
          monthLabelFormatter: Z,
          onChange: v,
          allowEmpty: w = !1,
          locale: N
        }) => {
          const { translate: S } = (0, p.Z)(),
            k = (([e, t], a = "ASC") => {
              const l = new Date().getFullYear() + e,
                o = Math.abs(t - e) + 1,
                n = new Array(o).fill(null).map((e, t) => ({ label: (l + t).toString(), value: l + t }));
              return "ASC" === a ? n : n.sort(({ value: e }, { value: t }) => t - e);
            })(e, t),
            E = ((R = (e) => Z(e)), new Array(12).fill(null).map((e, t) => ({ label: R((0, i.Z)(new Date(), t)), value: t })));
          var R;
          const x = m(o, f, v),
            I = x(s.Z),
            F = x(r.Z),
            D = x(i.Z),
            L = u(o, f),
            X =
              ((T = (0, d.Z)("" === o ? 31 : L)),
              new Array(T || 31).fill(null).map((e, t) => ({ label: (t + 1).toString(), value: t + 1 })));
          var T;
          w && (k.unshift(g(S(C))), E.unshift(g(S(y))), X.unshift(g(S(_))));
          const B = b(k, L.getFullYear()),
            P = b(E, L.getMonth()),
            $ = b(X, L.getDate()),
            M = N || new Intl.NumberFormat().resolvedOptions().locale,
            O = new Date(Date.UTC(2013, 11, 21)),
            K = /\D/g,
            q = O.toLocaleDateString(M, { day: "numeric" }).replace(K, ""),
            A = O.toLocaleDateString(M, { month: "numeric" }).replace(K, ""),
            G = O.toLocaleDateString(M, { year: "numeric" }).replace(K, ""),
            H = O.toLocaleDateString(M, { year: "numeric", month: "numeric", day: "numeric" }),
            U = H.match(/[.\-/]/);
          let V = ["month", "day", "year"];
          if (U) {
            const e = H.replace(/[\u200E\u200F]/g, "").split(U[0]);
            if (e.length >= 3) {
              const t = e.reduce((e, t) => {
                switch (t.replace(K, "")) {
                  case q:
                    a || e.push("day");
                    break;
                  case A:
                    e.push("month");
                    break;
                  case G:
                    e.push("year");
                }
                return e;
              }, []);
              (3 === t.length || (a && 2 === t.length)) && (V = t);
            }
          }
          return l.createElement(
            h.Ejs,
            { alignItems: "center" },
            V.map((e, t) => {
              switch (e) {
                case "day":
                  return a
                    ? ""
                    : l.createElement(c.Z, {
                        key: `day-${o}`,
                        label: t ? "" : n,
                        ariaLabel: `${n} :${S(_)}`,
                        placeholder: $.label,
                        dataName: "dateDay",
                        options: X,
                        defaultOption: $,
                        onChange: I
                      });
                case "month":
                  return l.createElement(c.Z, {
                    key: `month-${o}`,
                    label: t ? "" : n,
                    ariaLabel: `${n} :${S(y)}`,
                    placeholder: P.label,
                    dataName: "dateMonth",
                    options: E,
                    defaultOption: P,
                    onChange: D
                  });
                case "year":
                  return l.createElement(c.Z, {
                    key: `year-${o}`,
                    label: t ? "" : n,
                    ariaLabel: `${n} :${S(C)}`,
                    placeholder: B.label,
                    dataName: "dateYear",
                    options: k,
                    defaultOption: B,
                    onChange: F
                  });
                default:
                  return "";
              }
            })
          );
        };
    },
    313661: (e, t, a) => {
      a.d(t, { Z: () => b });
      var l = a(696832),
        o = a(554712),
        n = a(383849),
        s = a.n(n),
        r = a(526849),
        i = a(769183),
        d = a(317894),
        p = a.n(d),
        c = a(142897),
        h = a(654),
        u = a(83126);
      const m = (e) => {
        navigator.clipboard.writeText(e.replaceAll(" ", ""));
      };
      class b extends l.Component {
        constructor(e) {
          super(e),
            (this.field = void 0),
            (this.handleChange = (e) => {
              this.setState({ selectionRangeStart: e.target.selectionStart, selectionRangeEnd: e.target.selectionEnd }),
                this.props.onChange && this.props.onChange(e);
            }),
            (this.state = { fieldHtmlId: (0, i.Z)(), selectionRangeStart: null, selectionRangeEnd: null });
        }
        componentDidUpdate() {
          null !== this.state.selectionRangeStart &&
            null !== this.state.selectionRangeEnd &&
            this.field.setSelectionRange(this.state.selectionRangeStart, this.state.selectionRangeEnd);
        }
        shouldComponentUpdate(e, t) {
          return !(
            (0, r.equals)(this.props.value, e.value) &&
            (0, r.equals)(this.props.error, e.error) &&
            (0, r.equals)(this.props.mask, e.mask) &&
            (0, r.equals)(this.props.label, e.label) &&
            (0, r.equals)(this.state.selectionRangeStart, t.selectionRangeStart) &&
            (0, r.equals)(this.state.selectionRangeEnd, t.selectionRangeEnd)
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
            className: u.Z.textarea,
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
              className: s()(u.Z.input, { [u.Z.error]: Boolean(this.props.error) }),
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
                p(),
                { ...t, ...this.props.maskProps, mask: this.props.mask, onCopy: () => m(t.value), onCut: () => m(t.value) },
                (e) => (0, c.tZ)("input", { ...a, ...e })
              )
            : (0, c.tZ)(
                "div",
                { className: u.Z.inputRow },
                (0, c.tZ)("input", { ...a, ...t }),
                (0, c.tZ)(
                  "div",
                  {
                    hidden: !this.props.error || "string" != typeof this.props.error,
                    sx: { color: "ds.text.danger.quiet" },
                    className: u.Z.errorMessage
                  },
                  this.props.error
                )
              );
        }
        render() {
          const e = "password" !== this.props.type ? this.props.value || this.props.placeholder : "";
          return (0, c.tZ)(
            "div",
            { className: s()(u.Z.container, this.props.multiLine ? u.Z.containerMultiLine : null) },
            this.props.label &&
              (0, c.tZ)(
                "label",
                { className: u.Z.label, sx: { color: "ds.text.neutral.catchy" }, htmlFor: this.state.fieldHtmlId },
                (0, c.tZ)("span", { className: u.Z.text, title: this.props.label }, this.props.label)
              ),
            (0, c.tZ)(
              h.Z,
              {
                tooltipText: e,
                className: s()(u.Z.value, { [u.Z.placeholder]: !this.props.value, [u.Z.multiline]: this.props.multiLine })
              },
              this.props.multiLine ? this.getTextarea() : this.getInput()
            )
          );
        }
      }
      b.defaultProps = { maskProps: { maskChar: "" } };
    },
    59896: (e, t, a) => {
      a.d(t, { Z: () => c });
      var l = a(696832),
        o = a(142897),
        n = a(526849),
        s = a(383849),
        r = a.n(s),
        i = a(769183);
      var d = a(255990);
      function p(e, t) {
        const a = e.find((e) => String(e.value) === String(t));
        return null != a ? a : null;
      }
      class c extends l.Component {
        constructor(e) {
          super(e),
            (this.select = l.createRef()),
            (this.handleChange = (e) => {
              const t = e.target;
              if (!t) return;
              const a = t.value,
                l = p(this.props.options, a);
              this.setState({ optionSelected: l }), this.props.onChange && this.props.onChange(e);
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
            (t = p(
              this.props.options,
              null === this.props.defaultOption ? (0, n.head)(this.props.options).value : this.props.defaultOption.value
            )),
            (this.state = { fieldHtmlId: (0, i.Z)(), optionSelected: t, isSelectFocused: !1 });
        }
        getValue() {
          if (!this.select.current) throw new Error("select ref not initialized");
          return this.select.current.value;
        }
        render() {
          var e;
          const t = this.props.marginSide || "none",
            a = r()("selectContainer--mo5uz0qo56", d.Z[t], {
              "transparent--pz8wb74Jmh": this.props.isTransparent,
              "disabled--I9BAM7Vdre": this.props.disabled,
              "focused--ietgHqFLIm": this.state.isSelectFocused
            }),
            l = r()("selector--fgNHKzkAC3", this.props.classNames);
          let s;
          this.state.optionSelected
            ? (s = this.state.optionSelected.value)
            : this.props.options.length &&
              (s = null === this.props.defaultOption ? (0, n.head)(this.props.options).value : this.props.defaultOption.value);
          const i = this.state.optionSelected
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
                { className: d.Z.label, color: "ds.text.neutral.catchy", htmlFor: this.state.fieldHtmlId, title: this.props.label },
                this.props.label
              ),
            (0, o.tZ)(
              "div",
              { className: a },
              (0, o.tZ)(
                "div",
                { className: l },
                this.state.optionSelected &&
                  this.state.optionSelected.icon &&
                  (0, o.tZ)("span", { className: "icon--p3a7nsSbg9" }, this.state.optionSelected.icon),
                (0, o.tZ)("span", { className: "text--SjkXyB7Kyp", sx: { color: "ds.text.neutral.catchy" } }, i)
              ),
              (0, o.tZ)(
                "select",
                {
                  key: this.state.fieldHtmlId,
                  className: d.Z.select,
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
    175730: (e, t, a) => {
      a.d(t, { g: () => E });
      var l = a(696832),
        o = a(651154),
        n = a(935813),
        s = a(307973),
        r = a(945146),
        i = a(660765),
        d = a(142897),
        p = a(201389),
        c = a(313661),
        h = a(59896),
        u = a(280148),
        m = a(619733),
        b = a(819923),
        _ = a(62429),
        y = a(694802),
        C = a(889483),
        g = a(826771),
        f = a(839434);
      const Z = "webapp_payment_edition_field_card_action_hide",
        v = "webapp_payment_edition_field_card_action_show",
        w = "webapp_payment_edition_field_cardColor_",
        N = "yyyy-MM",
        S = (e) => (t) => {
          t && (0, _.Kz)(new i.UserCopyVaultItemFieldEvent({ itemType: i.ItemType.CreditCard, field: e, itemId: t, isProtected: !0 }));
        },
        k = {
          [r.X.Black]: `${w}BLACK`,
          [r.X.Blue1]: `${w}BLUE_1`,
          [r.X.Blue2]: `${w}BLUE_2`,
          [r.X.Gold]: `${w}GOLD`,
          [r.X.Green1]: `${w}GREEN_1`,
          [r.X.Green2]: `${w}GREEN_2`,
          [r.X.Orange]: `${w}ORANGE`,
          [r.X.Red]: `${w}RED`,
          [r.X.Silver]: `${w}SILVER`,
          [r.X.White]: `${w}WHITE`
        },
        E = ({ itemId: e, errors: t, paymentCardContent: a, signalEditedValues: w, showCopyAlert: E }) => {
          const {
              cardNumber: R,
              color: x,
              expireMonth: I,
              expireYear: F,
              itemName: D,
              note: L,
              ownerName: X,
              securityCode: T,
              spaceId: B
            } = a,
            { translate: P } = (0, p.Z)(),
            $ = Boolean(R.length),
            M = Boolean(T.length),
            O = Boolean(L.length),
            K = (e) => (t) => {
              const l = "string" == typeof t ? t : t.target.value,
                o = "cardNumber" === e ? l.replaceAll(" ", "") : l;
              w({ ...a, [e]: o });
            },
            { areProtectedItemsUnlocked: q, openProtectedItemsUnlocker: A } = (0, C.tY)(),
            [G, H] = l.useState(!$),
            U = l.useCallback(
              (t) => {
                e &&
                  (0, _.Kz)(new i.UserRevealVaultItemFieldEvent({ field: t, isProtected: !0, itemId: e, itemType: i.ItemType.CreditCard }));
              },
              [e]
            ),
            V = l.useCallback(() => {
              G || U(i.Field.CardNumber), H((e) => !e);
            }, [G, U]),
            z = l.useCallback(() => {
              G || q ? V() : A({ action: g.P.Show, itemType: g.R.CreditCard, successCallback: () => V() });
            }, [q, A, G, V]),
            W = !q,
            Y = (t, a) => {
              t(e), E && E(P(a));
            },
            [j, Q] = l.useState("" === T),
            [J, ee] = l.useState("" === L),
            te = l.useCallback(() => {
              j || U(i.Field.SecurityCode), Q((e) => !e);
            }, [j, U]),
            ae = () => ee((e) => !e),
            le = l.useCallback(() => {
              j || q ? te() : A({ action: g.P.Show, itemType: g.R.CreditCard, successCallback: () => te() });
            }, [q, A, j, te]),
            oe = l.useCallback(() => {
              J || q ? ae() : A({ action: g.P.Show, itemType: g.R.CreditCard, successCallback: () => ae() });
            }, [q, A, j, te]),
            ne = Object.values(r.X).map((e) => ({ label: P(k[e]), value: e })),
            se = $ ? (G ? R : "●●●● ●●●● ●●●● ●●●●") : "",
            re = /^3[47]/.test(R) ? "9999 999999 999999" : "9999 9999 9999 99999",
            ie = G ? re : void 0,
            de = F && I ? `${F}-${I}` : "";
          return (0, d.tZ)(
            l.Fragment,
            null,
            (0, d.tZ)(c.Z, {
              key: "ownerName",
              value: X,
              label: P("webapp_payment_edition_field_ownerName"),
              placeholder: P("webapp_payment_edition_field_placeholder_no_ownerName"),
              onChange: K("ownerName")
            }),
            (0, d.tZ)(
              m.N,
              { enabled: $ },
              (0, d.tZ)(c.Z, {
                key: `cardNumber${G}`,
                label: P("webapp_payment_edition_field_cardNumber"),
                placeholder: P("webapp_payment_edition_field_placeholder_no_cardNumber"),
                dataName: "cardNumber",
                disabled: !G && $,
                type: "text",
                value: se,
                mask: ie,
                onChange: K("cardNumber"),
                error: t?.has("cardNumber")
              }),
              (0, d.tZ)(d.zx, { mood: "neutral", intensity: "quiet", sx: { marginRight: "16px" }, onClick: z }, P(G ? Z : v)),
              (0, d.tZ)(y.m, {
                data: R,
                checkProtected: () => W,
                onCopy: () => Y(S(i.Field.CardNumber), "webapp_payment_edition_field_cardNumber_copied"),
                itemType: g.R.CreditCard
              })
            ),
            (0, d.tZ)(
              m.N,
              { enabled: M },
              (0, d.tZ)(c.Z, {
                key: `securityCode${j}`,
                disabled: !j && M,
                value: j ? T : "●●●",
                label: P("webapp_payment_edition_field_securityCode"),
                placeholder: P("webapp_payment_edition_field_placeholder_no_securityCode"),
                type: "text",
                onChange: K("securityCode"),
                error: t?.has("securityCode")
              }),
              (0, d.tZ)(d.zx, { mood: "neutral", intensity: "quiet", sx: { marginRight: "16px" }, onClick: le }, P(j ? Z : v)),
              (0, d.tZ)(y.m, {
                data: T,
                checkProtected: () => W,
                onCopy: () => Y(S(i.Field.SecurityCode), "webapp_payment_edition_field_securityCode_copied"),
                itemType: g.R.CreditCard
              })
            ),
            (0, d.tZ)(u.j, {
              value: de,
              dateFormat: N,
              yearsRange: [0, 30],
              label: P("webapp_payment_edition_field_expireDate"),
              monthLabelFormatter: (e) => P.shortDate(e, b._T.MM),
              onChange: (e) => {
                const t = (0, o.Z)(e, N, new Date());
                w({ ...a, expireMonth: (0, n.Z)(t) ? (0, s.Z)(t, "MM") : "", expireYear: (0, n.Z)(t) ? (0, s.Z)(t, "yyyy") : "" });
              },
              hideDay: !0,
              allowEmpty: !0
            }),
            (0, d.tZ)("hr", { className: "separator--qhO55oU3dT" }),
            (0, d.tZ)(c.Z, {
              key: "cardname",
              value: D,
              label: P("webapp_payment_edition_field_cardname"),
              placeholder: P("webapp_payment_edition_field_placeholder_no_cardname"),
              onChange: K("itemName")
            }),
            (0, d.tZ)(h.Z, {
              key: `cardColor${x}`,
              label: P("webapp_payment_edition_field_cardColor"),
              placeholder: P(k[x]),
              options: ne,
              defaultOption: { label: P(k[x]), value: x },
              onChange: K("color")
            }),
            (0, d.tZ)(f.M, { spaceId: null != B ? B : "", labelSx: f.e, onChange: (e) => K("spaceId")(e) }),
            (0, d.tZ)(
              m.N,
              { enabled: O },
              (0, d.tZ)(c.Z, {
                label: P("webapp_payment_edition_field_notes"),
                placeholder: P("webapp_payment_edition_field_placeholder_no_notes"),
                dataName: "note",
                disabled: !J && O,
                value: J || !O ? L : "●●●●",
                onChange: K("note"),
                multiLine: !0,
                testId: "credential_edit_note_value"
              }),
              (0, d.tZ)(d.zx, { mood: "neutral", intensity: "quiet", sx: { marginRight: "16px" }, onClick: oe }, P(J ? Z : v)),
              (0, d.tZ)(y.m, {
                data: L,
                checkProtected: () => W,
                onCopy: () => Y(S(i.Field.Note), "webapp_payment_edition_field_notes_copied"),
                itemType: g.R.CreditCard
              })
            )
          );
        };
    },
    264980: (e, t, a) => {
      a.d(t, { M: () => n });
      var l = a(945146),
        o = a(453576);
      const n = {
        [l.X.Black]: o.PaymentCardColor.BLACK,
        [l.X.Blue1]: o.PaymentCardColor.BLUE_1,
        [l.X.Blue2]: o.PaymentCardColor.BLUE_2,
        [l.X.Gold]: o.PaymentCardColor.GOLD,
        [l.X.Green1]: o.PaymentCardColor.GREEN_1,
        [l.X.Green2]: o.PaymentCardColor.GREEN_2,
        [l.X.Orange]: o.PaymentCardColor.ORANGE,
        [l.X.Red]: o.PaymentCardColor.RED,
        [l.X.Silver]: o.PaymentCardColor.SILVER,
        [l.X.White]: o.PaymentCardColor.WHITE
      };
    },
    83126: (e, t, a) => {
      a.d(t, { Z: () => l });
      const l = {
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
      a.d(t, { Z: () => l });
      const l = {
        left: "left--jltGqC2ld6",
        right: "right--r4mXfTZRXo",
        select: "select--ivbO452zoA",
        disable: "disable--F2KcdR2ssV",
        label: "label--EhkwVb63v9"
      };
    }
  }
]);
