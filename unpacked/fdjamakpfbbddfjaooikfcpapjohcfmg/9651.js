"use strict";
(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [9651],
  {
    363338: (e, t, a) => {
      a.d(t, { N: () => i });
      var l = a(696832),
        s = a(383849),
        n = a.n(s);
      const i = ({ disableHover: e = !1, ...t }) => {
        const [a, s] = l.useState(!1),
          { children: [i, ...o] = [] } = t;
        return l.createElement(
          "div",
          { className: "buttonsContainer--TiPIoxROXR", onMouseEnter: () => s(!0), onMouseLeave: () => s(!1) },
          i,
          t.enabled && l.createElement("span", { className: n()("buttons--p98QFrEo3f", { "visible--aWYlZRshE_": e || a }) }, o)
        );
      };
    },
    183218: (e, t, a) => {
      a.d(t, { j: () => f });
      var l = a(696832),
        s = a(651154),
        n = a(307973),
        i = a(535473),
        o = a(53830),
        r = a(400711),
        d = a(820283),
        p = a(488203),
        c = a(504085),
        h = a(962899);
      const u = (e, t) => (0, s.Z)(e, t, new Date("1900-01-01")),
        m = (e, t, a) => (l) => (s) => {
          if ("" === s.target.value) return void a("");
          const i = parseInt(s.target.value, 10),
            o = u(e, t),
            r = isNaN(o.getTime())
              ? (() => {
                  const e = new Date();
                  return e.setUTCHours(0, 0, 0, 0), e;
                })()
              : o;
          a((0, n.Z)(l(r, i), t));
        },
        b = (e, t) => {
          var a;
          return null != (a = e.find(({ value: e }) => t === e)) ? a : e[0];
        },
        _ = "webapp_id_form_field_placeholder_day",
        y = "webapp_id_form_field_placeholder_month",
        g = "webapp_id_form_field_placeholder_year",
        C = (e) => ({ label: e, value: "" }),
        f = ({
          yearsRange: e = [-120, 0],
          sortYears: t = "ASC",
          hideDay: a = !1,
          value: s,
          label: n,
          dateFormat: f,
          monthLabelFormatter: v,
          onChange: Z,
          allowEmpty: w = !1,
          locale: N,
          disabled: S = !1
        }) => {
          const { translate: k } = (0, p.Z)(),
            x = (([e, t], a = "ASC") => {
              const l = new Date().getFullYear() + e,
                s = Math.abs(t - e) + 1,
                n = new Array(s).fill(null).map((e, t) => ({ label: (l + t).toString(), value: l + t }));
              return "ASC" === a ? n : n.sort(({ value: e }, { value: t }) => t - e);
            })(e, t),
            R = ((I = (e) => v(e)), new Array(12).fill(null).map((e, t) => ({ label: I((0, r.Z)(new Date(), t)), value: t })));
          var I;
          const E = m(s, f, Z),
            F = E(i.Z),
            D = E(o.Z),
            L = E(r.Z),
            T = u(s, f),
            $ =
              ((M = (0, d.Z)("" === s ? 31 : T)),
              new Array(M || 31).fill(null).map((e, t) => ({ label: (t + 1).toString(), value: t + 1 })));
          var M;
          w && (x.unshift(C(k(g))), R.unshift(C(k(y))), $.unshift(C(k(_))));
          const B = b(x, T.getFullYear()),
            K = b(R, T.getMonth()),
            O = b($, T.getDate()),
            X = N || new Intl.NumberFormat().resolvedOptions().locale,
            q = new Date(Date.UTC(2013, 11, 21)),
            P = /\D/g,
            A = q.toLocaleDateString(X, { day: "numeric" }).replace(P, ""),
            H = q.toLocaleDateString(X, { month: "numeric" }).replace(P, ""),
            V = q.toLocaleDateString(X, { year: "numeric" }).replace(P, ""),
            z = q.toLocaleDateString(X, { year: "numeric", month: "numeric", day: "numeric" }),
            U = z.match(/[.\-/]/);
          let Y = ["month", "day", "year"];
          if (U) {
            const e = z.replace(/[\u200E\u200F]/g, "").split(U[0]);
            if (e.length >= 3) {
              const t = e.reduce((e, t) => {
                switch (t.replace(P, "")) {
                  case A:
                    a || e.push("day");
                    break;
                  case H:
                    e.push("month");
                    break;
                  case V:
                    e.push("year");
                }
                return e;
              }, []);
              (3 === t.length || (a && 2 === t.length)) && (Y = t);
            }
          }
          return l.createElement(
            h.Ejs,
            { alignItems: "center" },
            Y.map((e, t) => {
              switch (e) {
                case "day":
                  return a
                    ? ""
                    : l.createElement(c.Z, {
                        key: `day-${s}`,
                        label: t ? "" : n,
                        ariaLabel: `${n} :${k(_)}`,
                        placeholder: O.label,
                        dataName: "dateDay",
                        options: $,
                        defaultOption: O,
                        onChange: F,
                        disabled: S
                      });
                case "month":
                  return l.createElement(c.Z, {
                    key: `month-${s}`,
                    label: t ? "" : n,
                    ariaLabel: `${n} :${k(y)}`,
                    placeholder: K.label,
                    dataName: "dateMonth",
                    options: R,
                    defaultOption: K,
                    onChange: L,
                    disabled: S
                  });
                case "year":
                  return l.createElement(c.Z, {
                    key: `year-${s}`,
                    label: t ? "" : n,
                    ariaLabel: `${n} :${k(g)}`,
                    placeholder: B.label,
                    dataName: "dateYear",
                    options: x,
                    defaultOption: B,
                    onChange: D,
                    disabled: S
                  });
                default:
                  return "";
              }
            })
          );
        };
    },
    611913: (e, t, a) => {
      a.d(t, { Z: () => b });
      var l = a(696832),
        s = a(554712),
        n = a(383849),
        i = a.n(n),
        o = a(526849),
        r = a(957459),
        d = a(158549),
        p = a.n(d),
        c = a(876307),
        h = a(573630);
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
      class b extends l.Component {
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
          return (0, c.tZ)(s.Z, {
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
              className: i()(u.input, { [u.error]: Boolean(this.props.error) }),
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
                { className: u.inputRow },
                (0, c.tZ)("input", { ...a, ...t }),
                (0, c.tZ)(
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
          return (0, c.tZ)(
            "div",
            { className: i()(u.container, this.props.multiLine ? u.containerMultiLine : null) },
            this.props.label &&
              (0, c.tZ)(
                "label",
                { className: u.label, sx: { color: "ds.text.neutral.catchy" }, htmlFor: this.state.fieldHtmlId },
                (0, c.tZ)("span", { className: u.text, title: this.props.label }, this.props.label)
              ),
            (0, c.tZ)(
              h.Z,
              { tooltipText: e, className: i()(u.value, { [u.placeholder]: !this.props.value, [u.multiline]: this.props.multiLine }) },
              this.props.multiLine ? this.getTextarea() : this.getInput()
            )
          );
        }
      }
      b.defaultProps = { maskProps: { maskChar: "" } };
    },
    504085: (e, t, a) => {
      a.d(t, { Z: () => c });
      var l = a(696832),
        s = a(876307),
        n = a(526849),
        i = a(383849),
        o = a.n(i),
        r = a(957459);
      var d = a(855541);
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
            (this.state = { fieldHtmlId: (0, r.Z)(), optionSelected: t, isSelectFocused: !1 });
        }
        getValue() {
          if (!this.select.current) throw new Error("select ref not initialized");
          return this.select.current.value;
        }
        render() {
          var e;
          const t = this.props.marginSide || "none",
            a = o()("selectContainer--mo5uz0qo56", d.Z[t], {
              "transparent--pz8wb74Jmh": this.props.isTransparent,
              "disabled--I9BAM7Vdre": this.props.disabled,
              "focused--ietgHqFLIm": this.state.isSelectFocused
            }),
            l = o()("selector--fgNHKzkAC3", this.props.classNames);
          let i;
          this.state.optionSelected
            ? (i = this.state.optionSelected.value)
            : this.props.options.length &&
              (i = null === this.props.defaultOption ? (0, n.head)(this.props.options).value : this.props.defaultOption.value);
          const r = this.state.optionSelected
            ? this.state.optionSelected.selectedLabel
              ? this.state.optionSelected.selectedLabel
              : this.state.optionSelected.label
            : this.props.placeholder;
          return (0, s.tZ)(
            "div",
            { className: "container--KChkEdb4YV" },
            this.props.label &&
              (0, s.tZ)(
                "label",
                { className: d.Z.label, color: "ds.text.neutral.catchy", htmlFor: this.state.fieldHtmlId, title: this.props.label },
                this.props.label
              ),
            (0, s.tZ)(
              "div",
              { className: a },
              (0, s.tZ)(
                "div",
                { className: l },
                this.state.optionSelected &&
                  this.state.optionSelected.icon &&
                  (0, s.tZ)("span", { className: "icon--p3a7nsSbg9" }, this.state.optionSelected.icon),
                (0, s.tZ)("span", { className: "text--SjkXyB7Kyp", sx: { color: "ds.text.neutral.catchy" } }, r)
              ),
              (0, s.tZ)(
                "select",
                {
                  key: this.state.fieldHtmlId,
                  className: d.Z.select,
                  ref: this.select,
                  id: this.state.fieldHtmlId,
                  value: i,
                  name: this.props.name,
                  disabled: this.props.disabled,
                  "data-name": this.props.dataName,
                  onKeyDown: this.handleKeyDown,
                  onChange: this.handleChange,
                  onFocus: this.handleFocus,
                  onBlur: this.handleBlur,
                  "aria-label": null != (e = this.props.ariaLabel) ? e : this.props.label
                },
                this.props.options.map((e) => (0, s.tZ)("option", { key: e.value, disabled: e.disabled, value: String(e.value) }, e.label))
              )
            )
          );
        }
      }
    },
    69651: (e, t, a) => {
      a.d(t, { g: () => R, u: () => I });
      var l = a(696832),
        s = a(651154),
        n = a(935813),
        i = a(307973),
        o = a(945146),
        r = a(593039),
        d = a(876307),
        p = a(488203),
        c = a(611913),
        h = a(504085),
        u = a(183218),
        m = a(363338),
        b = a(616782),
        _ = a(45272),
        y = a(66485),
        g = a(921310),
        C = a(830894),
        f = a(868819),
        v = a(167406);
      const Z = "webapp_payment_edition_field_card_action_hide",
        w = "webapp_payment_edition_field_card_action_show",
        N = "webapp_payment_edition_field_cardColor_",
        S = "yyyy-MM",
        k = (e) => (t) => {
          t && (0, _.Kz)(new r.UserCopyVaultItemFieldEvent({ itemType: r.ItemType.CreditCard, field: e, itemId: t, isProtected: !0 }));
        },
        x = {
          [o.X.Black]: `${N}BLACK`,
          [o.X.Blue1]: `${N}BLUE_1`,
          [o.X.Blue2]: `${N}BLUE_2`,
          [o.X.Gold]: `${N}GOLD`,
          [o.X.Green1]: `${N}GREEN_1`,
          [o.X.Green2]: `${N}GREEN_2`,
          [o.X.Orange]: `${N}ORANGE`,
          [o.X.Red]: `${N}RED`,
          [o.X.Silver]: `${N}SILVER`,
          [o.X.White]: `${N}WHITE`
        },
        R = ({ itemId: e, errors: t, paymentCardContent: a, signalEditedValues: N, showCopyAlert: R }) => {
          const {
              cardNumber: I,
              color: E,
              expireMonth: F,
              expireYear: D,
              itemName: L,
              note: T,
              ownerName: $,
              securityCode: M,
              spaceId: B
            } = a,
            { translate: K } = (0, p.Z)(),
            { shouldShowTrialDiscontinuedDialog: O } = (0, y.yp)(),
            X = Boolean(I.length),
            q = Boolean(M.length),
            P = Boolean(T.length),
            A = (e) => (t) => {
              const l = "string" == typeof t ? t : t.target.value,
                s = "cardNumber" === e ? l.replaceAll(" ", "") : l;
              N({ ...a, [e]: s });
            },
            { areProtectedItemsUnlocked: H, openProtectedItemsUnlocker: V } = (0, C.tY)(),
            [z, U] = l.useState(!X),
            Y = l.useCallback(
              (t) => {
                e &&
                  (0, _.Kz)(new r.UserRevealVaultItemFieldEvent({ field: t, isProtected: !0, itemId: e, itemType: r.ItemType.CreditCard }));
              },
              [e]
            ),
            G = l.useCallback(() => {
              z || Y(r.Field.CardNumber), U((e) => !e);
            }, [z, Y]),
            W = l.useCallback(() => {
              z || H ? G() : V({ action: f.P.Show, itemType: f.R.CreditCard, successCallback: () => G() });
            }, [H, V, z, G]),
            j = !H,
            Q = (t, a) => {
              t(e), R && R(K(a));
            },
            [J, ee] = l.useState("" === M),
            [te, ae] = l.useState("" === T),
            le = l.useCallback(() => {
              J || Y(r.Field.SecurityCode), ee((e) => !e);
            }, [J, Y]),
            se = () => ae((e) => !e),
            ne = l.useCallback(() => {
              J || H ? le() : V({ action: f.P.Show, itemType: f.R.CreditCard, successCallback: () => le() });
            }, [H, V, J, le]),
            ie = l.useCallback(() => {
              te || H ? se() : V({ action: f.P.Show, itemType: f.R.CreditCard, successCallback: () => se() });
            }, [H, V, J, le]),
            oe = Object.values(o.X).map((e) => ({ label: K(x[e]), value: e })),
            re = X ? (z ? I : "●●●● ●●●● ●●●● ●●●●") : "",
            de = /^3[47]/.test(I) ? "9999 999999 999999" : "9999 9999 9999 99999",
            pe = z ? de : void 0,
            ce = D && F ? `${D}-${F}` : "";
          return (0, d.tZ)(
            l.Fragment,
            null,
            (0, d.tZ)(c.Z, {
              key: "ownerName",
              value: $,
              label: K("webapp_payment_edition_field_ownerName"),
              placeholder: K("webapp_payment_edition_field_placeholder_no_ownerName"),
              onChange: A("ownerName"),
              disabled: !!O
            }),
            (0, d.tZ)(
              m.N,
              { enabled: X },
              (0, d.tZ)(c.Z, {
                key: `cardNumber${z}`,
                label: K("webapp_payment_edition_field_cardNumber"),
                placeholder: K("webapp_payment_edition_field_placeholder_no_cardNumber"),
                dataName: "cardNumber",
                disabled: (!z && X) || !!O,
                type: "text",
                value: re,
                mask: pe,
                onChange: A("cardNumber"),
                error: t?.has("cardNumber")
              }),
              (0, d.tZ)(d.zx, { mood: "neutral", intensity: "quiet", sx: { marginRight: "16px" }, onClick: W }, K(z ? Z : w)),
              (0, d.tZ)(g.m, {
                data: I,
                checkProtected: () => j,
                onCopy: () => Q(k(r.Field.CardNumber), "webapp_payment_edition_field_cardNumber_copied"),
                itemType: f.R.CreditCard
              })
            ),
            (0, d.tZ)(
              m.N,
              { enabled: q },
              (0, d.tZ)(c.Z, {
                key: `securityCode${J}`,
                disabled: (!J && q) || !!O,
                value: J ? M : "●●●",
                label: K("webapp_payment_edition_field_securityCode"),
                placeholder: K("webapp_payment_edition_field_placeholder_no_securityCode"),
                type: "text",
                onChange: A("securityCode"),
                error: t?.has("securityCode")
              }),
              (0, d.tZ)(d.zx, { mood: "neutral", intensity: "quiet", sx: { marginRight: "16px" }, onClick: ne }, K(J ? Z : w)),
              (0, d.tZ)(g.m, {
                data: M,
                checkProtected: () => j,
                onCopy: () => Q(k(r.Field.SecurityCode), "webapp_payment_edition_field_securityCode_copied"),
                itemType: f.R.CreditCard
              })
            ),
            (0, d.tZ)(u.j, {
              value: ce,
              dateFormat: S,
              yearsRange: [0, 30],
              label: K("webapp_payment_edition_field_expireDate"),
              monthLabelFormatter: (e) => K.shortDate(e, b._T.MM),
              onChange: (e) => {
                const t = (0, s.Z)(e, S, new Date());
                N({ ...a, expireMonth: (0, n.Z)(t) ? (0, i.Z)(t, "MM") : "", expireYear: (0, n.Z)(t) ? (0, i.Z)(t, "yyyy") : "" });
              },
              hideDay: !0,
              allowEmpty: !0,
              disabled: !!O
            }),
            (0, d.tZ)("hr", { className: "separator--qhO55oU3dT" }),
            (0, d.tZ)(c.Z, {
              key: "cardname",
              value: L,
              label: K("webapp_payment_edition_field_cardname"),
              placeholder: K("webapp_payment_edition_field_placeholder_no_cardname"),
              onChange: A("itemName"),
              disabled: !!O
            }),
            (0, d.tZ)(h.Z, {
              key: `cardColor${E}`,
              label: K("webapp_payment_edition_field_cardColor"),
              placeholder: K(x[E]),
              options: oe,
              defaultOption: { label: K(x[E]), value: E },
              onChange: A("color"),
              disabled: !!O
            }),
            (0, d.tZ)(v.M, { spaceId: null != B ? B : "", labelSx: v.e, onChange: (e) => A("spaceId")(e), disabled: !!O }),
            (0, d.tZ)(
              m.N,
              { enabled: P },
              (0, d.tZ)(c.Z, {
                label: K("webapp_payment_edition_field_notes"),
                placeholder: K("webapp_payment_edition_field_placeholder_no_notes"),
                dataName: "note",
                disabled: (!te && P) || !!O,
                value: te || !P ? T : "●●●●",
                onChange: A("note"),
                multiLine: !0,
                testId: "credential_edit_note_value"
              }),
              (0, d.tZ)(d.zx, { mood: "neutral", intensity: "quiet", sx: { marginRight: "16px" }, onClick: ie }, K(te ? Z : w)),
              (0, d.tZ)(g.m, {
                data: T,
                checkProtected: () => j,
                onCopy: () => Q(k(r.Field.Note), "webapp_payment_edition_field_notes_copied"),
                itemType: f.R.CreditCard
              })
            )
          );
        },
        I = (e) => (e.cardNumber || e.securityCode ? { isValid: !0 } : { isValid: !1, errorSet: new Set(["cardNumber", "securityCode"]) });
    },
    855541: (e, t, a) => {
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
