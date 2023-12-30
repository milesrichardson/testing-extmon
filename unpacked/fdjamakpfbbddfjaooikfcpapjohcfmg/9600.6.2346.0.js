"use strict";
(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [9600],
  {
    619733: (e, t, n) => {
      n.d(t, { N: () => l });
      var a = n(696832),
        i = n(383849),
        s = n.n(i);
      const l = ({ disableHover: e = !1, ...t }) => {
        const [n, i] = a.useState(!1),
          { children: [l, ...o] = [] } = t;
        return a.createElement(
          "div",
          { className: "buttonsContainer--TiPIoxROXR", onMouseEnter: () => i(!0), onMouseLeave: () => i(!1) },
          l,
          t.enabled && a.createElement("span", { className: s()("buttons--p98QFrEo3f", { "visible--aWYlZRshE_": e || n }) }, o)
        );
      };
    },
    313661: (e, t, n) => {
      n.d(t, { Z: () => h });
      var a = n(696832),
        i = n(554712),
        s = n(383849),
        l = n.n(s),
        o = n(526849),
        r = n(769183),
        d = n(317894),
        c = n.n(d),
        p = n(142897),
        u = n(654),
        m = n(83126);
      const _ = (e) => {
        navigator.clipboard.writeText(e.replaceAll(" ", ""));
      };
      class h extends a.Component {
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
          return (0, p.tZ)(i.Z, {
            inputRef: (e) => {
              this.field = e;
            },
            id: this.state.fieldHtmlId,
            disabled: this.props.disabled,
            value: null != (e = this.props.value) ? e : "",
            name: this.props.name,
            "data-name": this.props.dataName,
            sx: { borderColor: this.props.error && "ds.border.danger.standard.idle" },
            className: m.Z.textarea,
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
            n = {
              ref: (e) => {
                this.field = e;
              },
              id: this.state.fieldHtmlId,
              autoComplete: "off",
              className: l()(m.Z.input, { [m.Z.error]: Boolean(this.props.error) }),
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
            ? (0, p.tZ)(
                c(),
                { ...t, ...this.props.maskProps, mask: this.props.mask, onCopy: () => _(t.value), onCut: () => _(t.value) },
                (e) => (0, p.tZ)("input", { ...n, ...e })
              )
            : (0, p.tZ)(
                "div",
                { className: m.Z.inputRow },
                (0, p.tZ)("input", { ...n, ...t }),
                (0, p.tZ)(
                  "div",
                  {
                    hidden: !this.props.error || "string" != typeof this.props.error,
                    sx: { color: "ds.text.danger.quiet" },
                    className: m.Z.errorMessage
                  },
                  this.props.error
                )
              );
        }
        render() {
          const e = "password" !== this.props.type ? this.props.value || this.props.placeholder : "";
          return (0, p.tZ)(
            "div",
            { className: l()(m.Z.container, this.props.multiLine ? m.Z.containerMultiLine : null) },
            this.props.label &&
              (0, p.tZ)(
                "label",
                { className: m.Z.label, sx: { color: "ds.text.neutral.catchy" }, htmlFor: this.state.fieldHtmlId },
                (0, p.tZ)("span", { className: m.Z.text, title: this.props.label }, this.props.label)
              ),
            (0, p.tZ)(
              u.Z,
              {
                tooltipText: e,
                className: l()(m.Z.value, { [m.Z.placeholder]: !this.props.value, [m.Z.multiline]: this.props.multiLine })
              },
              this.props.multiLine ? this.getTextarea() : this.getInput()
            )
          );
        }
      }
      h.defaultProps = { maskProps: { maskChar: "" } };
    },
    169600: (e, t, n) => {
      n.d(t, { S: () => vt });
      var a = n(696832),
        i = n(660765),
        s = n(441217),
        l = n(164718),
        o = n(787268),
        r = n(66941),
        d = n(619733),
        c = n(313661),
        p = n(83126),
        u = n(201389),
        m = n(62429);
      let _ = (function (e) {
        return (e[(e.SECONDARY_LOGIN = 0)] = "SECONDARY_LOGIN"), (e[(e.OTP_CODE = 1)] = "OTP_CODE"), e;
      })({});
      const h = (e) => Boolean(e.otpURL),
        b = (e) => {
          const { username: t, alternativeUsername: n } = e;
          return Boolean(t) || Boolean(n);
        };
      var g = n(488856),
        w = n(839434),
        f = n(889483),
        C = n(826771),
        y = n(694802);
      const k = (e) => {
        const { requiresMasterPassword: t, credentialId: n, ...i } = e,
          { areProtectedItemsUnlocked: l, openProtectedItemsUnlocker: o } = (0, f.tY)(),
          r = a.useCallback(
            (e) =>
              e && !l && t && n
                ? new Promise((e, t) => {
                    o({
                      action: C.P.Show,
                      itemType: C.R.Password,
                      showNeverAskOption: !0,
                      credentialId: n,
                      successCallback: e,
                      cancelCallback: t
                    });
                  })
                : Promise.resolve(),
            [l, n, o, t]
          );
        return a.createElement(s.WUg, { ...i, onPasswordVisibilityChangeRequest: r });
      };
      var v,
        x = n(695495),
        Z = n(143265),
        E = n(142897),
        I = n(65255),
        P = n(915970),
        L = n(562150),
        S = n.n(L);
      const { black: T, midGreen00: W, white: R } = s.colors,
        D = {
          backgroundColor: R,
          borderRadius: "4px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center"
        },
        N = {
          display: "flex",
          flexWrap: "wrap",
          maxWidth: "20ch",
          wordWrap: "break-word",
          fontFamily: S()["--dashlane-fontfamily-mono"],
          fontSize: S()["--password-font-size"],
          lineHeight: S()["--password-line-height"],
          fontWeight: S()["--dashlane-font-weight-regular"],
          letterSpacing: S()["--password-letter-spacing"],
          fontVariantLigatures: "none",
          fontFeatureSettings: '"calt" 0'
        },
        O = { base: { display: "flex" }, numbers: { color: "#3366ff" }, symbols: { color: "#c15315" }, letters: { color: T } },
        U = ({ password: e, onRefreshPassword: t }) => {
          const { translate: n } = (0, u.Z)(),
            i = (e) => ("0123456789".includes(e) ? O.numbers : "&@$!#?".includes(e) ? O.symbols : O.letters),
            l = (0, a.useMemo)(
              () => e.split("").map((e, t) => (0, x.tZ)("span", { key: `char-${t}`, sx: { ...O.base, ...i(e) } }, e)),
              [e]
            );
          return (0, x.tZ)(
            "div",
            { sx: D },
            (0, x.tZ)("div", { sx: { ...N, transition: "opacity 0.1s ease" } }, l),
            (0, x.tZ)(
              s.zxk,
              {
                sx: { minWidth: "auto", padding: "4px", marginRight: "0" },
                size: "small",
                "aria-label": n("webapp_credential_edition_field_generator_refresh"),
                type: "button",
                nature: "ghost",
                onClick: t
              },
              v || (v = (0, x.tZ)(s.DuK, { hoverColor: W }))
            )
          );
        },
        B = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890!@#$&?";
      function A(e = 0, t = 1) {
        return Math.floor(Math.random() * (t - e)) + e;
      }
      function V() {
        return B.substr(A(0, B.length - 1), 1);
      }
      function M(e) {
        return B.substr(0, e)
          .split("")
          .map(() => V())
          .join("");
      }
      function q(e, t = A(0, e.length)) {
        return e.substr(0, t) + V() + e.substr(t + 1);
      }
      const F = { 0: "too_guessable", 1: "very_guessable", 2: "somewhat_guessable", 3: "safely_unguessable", 4: "very_unguessable" };
      function z(e) {
        return e >= 100 ? 4 : e >= 75 ? 3 : e >= 50 ? 2 : e >= 25 ? 1 : e >= 0 ? 0 : void 0;
      }
      const { midGreen03: H, white: G } = s.colors,
        Y = {
          margin: 0,
          borderRadius: "4px",
          padding: "10px",
          boxSizing: "border-box",
          color: G,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between"
        },
        K = { boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "center" },
        j = ({ isLoading: e, generatedPassword: t, passwordLength: n, onRefreshPassword: i, strength: l }) => {
          const { translate: o } = (0, u.Z)(),
            r = (0, P.w)(I.w.WebplatformWebPrideColors),
            d = (0, a.useMemo)(
              () =>
                (function (e) {
                  return `webapp_credential_edition_field_generator_strength/${
                    (function (e) {
                      const t = z(e);
                      return t ? F[t] : "";
                    })(e) || "none"
                  }`;
                })(l),
              [l]
            ),
            c = (0, a.useMemo)(() => z(l), [l]),
            { shuffledPassword: p, isPasswordShuffling: m } = (function ({ shouldShuffle: e, passwordLength: t }) {
              const n = (0, a.useRef)(null),
                [i, s] = (0, a.useState)(M(t)),
                l = (0, a.useCallback)(() => {
                  let e = q(i);
                  const t = e.length / 6;
                  for (let n = 0; n < t; n++) e = q(e);
                  s(e);
                }, [i]),
                [o, r] = (0, a.useState)(e);
              return (
                (0, a.useEffect)(() => {
                  let t;
                  return (
                    e
                      ? r(!0)
                      : (t = window.setTimeout(() => {
                          r(!1);
                        }, 150)),
                    () => window.clearTimeout(t)
                  );
                }, [e]),
                (0, a.useEffect)(
                  () => (
                    i.length !== t && s(M(t)),
                    o ? (n.current = window.setInterval(l, 10)) : n.current && window.clearInterval(n.current),
                    () => {
                      n.current && window.clearInterval(n.current);
                    }
                  ),
                  [o, t, l, i]
                ),
                { shuffledPassword: i, isPasswordShuffling: o }
              );
            })({ shouldShuffle: e, passwordLength: n }),
            _ = m ? p : t;
          return (0, x.tZ)(
            "div",
            { sx: Y },
            (0, x.tZ)(
              "div",
              { sx: K },
              (0, x.tZ)(U, { onRefreshPassword: i, password: _ }),
              (0, x.tZ)(
                "div",
                { sx: { marginTop: "4px" } },
                (0, x.tZ)(s.YVT, { score: c, showAdditionalText: !0, additionalText: o(d), backgroundColor: H, showQueerColors: r })
              )
            )
          );
        },
        { grey00: X } = s.colors,
        J = ({ options: e, onOptionsChanged: t }) => {
          const { translate: n } = (0, u.Z)(),
            i = (0, a.useCallback)(
              (n) => {
                const a = n.currentTarget.checked;
                t({ ...e, digits: a });
              },
              [t, e]
            ),
            l = (0, a.useCallback)(
              (n) => {
                const a = n.currentTarget.checked;
                t({ ...e, letters: a });
              },
              [t, e]
            ),
            o = (0, a.useCallback)(
              (n) => {
                const a = n.currentTarget.checked;
                t({ ...e, symbols: a });
              },
              [t, e]
            ),
            r = (0, a.useCallback)(
              (n) => {
                const a = n.currentTarget.checked;
                t({ ...e, avoidAmbiguous: !a });
              },
              [t, e]
            ),
            d = (0, a.useCallback)(
              (e) => {
                const t = n(e),
                  a = t.search(/(\(.*\))$/);
                if (-1 === a) return t;
                const i = t.substring(0, a),
                  l = t.substring(a);
                return (0, x.tZ)(s.nvN, { size: "small" }, i, (0, x.tZ)("span", { sx: { color: X } }, l));
              },
              [n]
            );
          return (0, x.tZ)(
            s.T5p,
            { justifyItems: "left", gap: "10px", sx: { paddingBottom: "10px" } },
            (0, x.tZ)(s.XZJ, {
              label: d("webapp_credential_edition_field_generator_use_letters"),
              onChange: l,
              checked: e.letters,
              disabled: e.letters && !e.digits
            }),
            (0, x.tZ)(s.XZJ, {
              label: d("webapp_credential_edition_field_generator_use_digits"),
              onChange: i,
              checked: e.digits,
              disabled: e.digits && !e.letters
            }),
            (0, x.tZ)(s.XZJ, { label: d("webapp_credential_edition_field_generator_use_symbols"), onChange: o, checked: e.symbols }),
            (0, x.tZ)(s.XZJ, {
              label: d("webapp_credential_edition_field_generator_similar_characters"),
              onChange: r,
              checked: !e.avoidAmbiguous
            })
          );
        },
        $ = ({ length: e, onLengthChanged: t }) => {
          const { translate: n } = (0, u.Z)(),
            [i, l] = (0, a.useState)(e);
          return (0, x.tZ)(
            "div",
            { "aria-label": n("webapp_credential_edition_field_generator_min_max_a11y", { min: 4, max: 40 }) },
            (0, x.tZ)(s.iRW, {
              label: n("webapp_credential_edition_field_generator_password_length", { length: i }),
              min: 4,
              max: 40,
              step: 1,
              onChange: (e) => {
                l(e);
              },
              onChangeComplete: t,
              value: i
            })
          );
        },
        { dashGreen05: Q, dashGreen06: ee } = s.colors,
        te = ({ options: e, handleSettingsChange: t, handleUsePassword: n }) => {
          const { translate: a } = (0, u.Z)();
          return (0, x.tZ)(
            s.T5p,
            { gap: "10px", sx: { padding: "10px" } },
            (0, x.tZ)(
              s.T5p,
              { gap: "10px", sx: { textAlign: "left", padding: "10px", backgroundColor: ee, borderRadius: "4px" } },
              (0, x.tZ)($, {
                length: e.length,
                onLengthChanged: (n) => {
                  t({ ...e, length: n });
                }
              }),
              (0, x.tZ)("hr", { sx: { border: "none", borderBottom: `solid 1px ${Q}`, margin: "10px 0" } }),
              (0, x.tZ)(J, {
                onOptionsChanged: (e) => {
                  t(e);
                },
                options: e
              })
            ),
            (0, x.tZ)(
              s.zxk,
              { sx: { mx: 0 }, type: "button", nature: "primary", size: "small", onClick: n },
              a("webapp_credential_edition_field_generator_use_password_button")
            )
          );
        };
      var ne, ae, ie;
      const { white: se, dashGreen06: le } = s.colors,
        oe = { length: 16, digits: !0, letters: !0, symbols: !0, avoidAmbiguous: !0 },
        re = "webapp_credential_edition_field_generator_generate_tooltip",
        de = ({ credential: e, handleChangePassword: t }) => {
          const [n, l] = (0, a.useState)(!1),
            [o, d] = (0, a.useState)(oe),
            { translate: c } = (0, u.Z)();
          (0, a.useEffect)(() => {
            r.C.getPasswordGenerationSettings().then((e) => {
              d(e);
            });
          }, []);
          const [p, _] = (0, a.useState)(!0),
            [h, b] = (0, a.useState)(""),
            [g, w] = (0, a.useState)(25),
            f = (e) => {
              _(!0),
                r.C.generatePassword({ settings: e })
                  .then((e) => {
                    e.success && (b(e.password), w(e.strength));
                  })
                  .finally(() => {
                    (0, m.Kz)(
                      new i.UserGeneratePasswordEvent({
                        hasDigits: e.digits,
                        hasLetters: e.letters,
                        hasSymbols: e.symbols,
                        hasSimilar: !e.avoidAmbiguous,
                        length: e.length
                      })
                    ),
                      _(!1);
                  });
            };
          return (0, x.tZ)(
            s.ua7,
            {
              sx: { width: "300px", backgroundColor: se, padding: "0", borderRadius: "4px" },
              offset: [0, 0],
              trigger: "persist",
              placement: "left",
              passThrough: !n,
              arrowSize: 0,
              content: (0, x.tZ)(
                Z.Y,
                { onClickOutside: () => l(!1), autoFocus: !1 },
                (0, x.tZ)(
                  s.T5p,
                  { sx: { bg: le } },
                  (0, x.tZ)(
                    s.dDn,
                    {
                      justifySelf: "end",
                      "aria-label": c("_common_dialog_dismiss_button"),
                      as: s.hU,
                      icon: ne || (ne = (0, x.tZ)(s.Two, null)),
                      onClick: () => l(!1)
                    },
                    ae || (ae = (0, x.tZ)(s.Two, null))
                  )
                ),
                (0, x.tZ)(
                  s.T5p,
                  { sx: { padding: "4px" } },
                  (0, x.tZ)(j, {
                    onRefreshPassword: () => {
                      f(o);
                    },
                    isLoading: p,
                    passwordLength: o.length,
                    generatedPassword: h,
                    strength: g
                  }),
                  (0, x.tZ)(te, {
                    options: o,
                    handleSettingsChange: (e) => {
                      d(e), f(e);
                    },
                    handleUsePassword: () => {
                      t(h), l(!1);
                    }
                  })
                )
              )
            },
            (0, x.tZ)(
              "div",
              null,
              (0, x.tZ)(
                s.ua7,
                { placement: "top", content: c(re) },
                (0, x.tZ)(
                  s.zxk,
                  {
                    "aria-label": c(re),
                    nature: "secondary",
                    type: "button",
                    onClick: () => {
                      n || f(o), l(!n);
                    },
                    disabled: e.limitedPermissions,
                    sx: { border: "none", minWidth: "fit-content", padding: "10px" }
                  },
                  ie || (ie = (0, x.tZ)(E.JO, { name: "FeaturePasswordGeneratorOutlined", color: "ds.oddity.brand" }))
                )
              )
            )
          );
        };
      var ce = n(148038),
        pe = n(846658);
      const ue = {
          title: "webapp_lock_items_require_master_password_for_credential_title_on",
          subtitle: "webapp_lock_items_require_master_password_for_credential_subtitle_on",
          confirm: "webapp_lock_items_require_master_password_confirm_on_for_credential"
        },
        me = {
          title: "webapp_lock_items_require_master_password_for_credential_title_off",
          subtitle: "webapp_lock_items_require_master_password_for_credential_subtitle_off",
          confirm: "webapp_lock_items_require_master_password_confirm_off_for_credential"
        },
        _e = ({ name: e, title: t, description: n, setValue: i, isMpProtected: l = !1, value: o, disabled: r = !1 }) => {
          const { areProtectedItemsUnlocked: d, openProtectedItemsUnlocker: c } = (0, f.tY)(),
            p = (0, a.useCallback)(
              (e) => {
                const t = e.target.checked,
                  n = async () => {
                    await i(t);
                  };
                return l && !d
                  ? ((0, pe.jF)(),
                    c({ itemType: C.R.SecuritySettings, options: { fieldsKeys: t ? ue : me, translated: !1 }, successCallback: n }))
                  : n();
              },
              [d, l, c, i]
            ),
            u = `setting-${e}`;
          return (0, x.tZ)(
            s.Ejs,
            { sx: { marginTop: "-0.5em" } },
            (0, x.tZ)(E.XZ, { label: t, description: n, checked: o, onChange: p, id: u, disabled: r })
          );
        };
      var he = n(985102),
        be = n(749446),
        ge = n(364776);
      const we = "webapp_credential_edition_field_options_always_log_me",
        fe = "webapp_credential_edition_field_options_always_log_me_details",
        Ce = "webapp_credential_edition_field_options_added_by_user_only",
        ye = "webapp_credential_edition_field_options_added_by_user_only_details",
        ke = "webapp_credential_edition_field_options_always_require_master_password",
        ve = "webapp_credential_edition_field_options_always_require_master_password_details",
        xe = "webapp_credential_edition_field_options_always_require_master_password_disable_feedback_markup",
        Ze = ({ credentialPreferences: e, isNewCredential: t, url: n, update: i }) => {
          const l = (0, he.q)(),
            o = (0, a.useMemo)(() => {
              if (!n) return !1;
              try {
                return new URL(n), !0;
              } catch (e) {
                try {
                  return new URL("https://" + n), !0;
                } catch (e) {
                  return !1;
                }
              }
            }, [n]),
            { translate: r } = (0, u.Z)(),
            d = (0, be.F)(),
            c = (0, ge.Z)(),
            p = !d && !c.isMPLessUser,
            m = (t) => i({ ...e, requireMasterPassword: t });
          return (0, x.tZ)(
            s.T5p,
            { gridTemplateColumns: "173px 1fr", alignItems: "flex-start", justifyItems: "flex-end" },
            (0, x.tZ)(s.nvN, { sx: { fontWeight: 600, paddingRight: "24px" } }, r("webapp_credential_edition_field_options")),
            (0, x.tZ)(
              s.Ejs,
              { gap: "24px" },
              o
                ? null
                : (0, x.tZ)(s.vDh, {
                    severity: "warning",
                    size: "small",
                    title: r("webapp_credential_edition_field_options_no_url_warning")
                  }),
              (0, x.tZ)(_e, {
                name: "useAutoLogin",
                description: r(fe),
                isMpProtected: !1,
                title: r(we),
                setValue: (t) => i({ ...e, useAutoLogin: t }),
                value: e.useAutoLogin,
                disabled: !o
              }),
              (0, x.tZ)(_e, {
                name: "onlyAutofillExactDomain",
                isMpProtected: !1,
                title: r(Ce),
                description: r(ye),
                setValue: (t) => i({ ...e, onlyAutofillExactDomain: t }),
                value: e.onlyAutofillExactDomain,
                disabled: !o
              }),
              p
                ? l.status === ce.rq.Success
                  ? (0, x.tZ)(_e, {
                      name: "requireMasterPassword",
                      isMpProtected: !t,
                      title: r(ke),
                      description: (0, x.tZ)(
                        "div",
                        null,
                        l.data ? (0, x.tZ)("div", { sx: { marginBottom: "8px", color: s.colors.midGreen00 } }, r.markup(xe)) : null,
                        (0, x.tZ)("span", null, r(ve))
                      ),
                      setValue: m,
                      value: !!l.data || e.requireMasterPassword,
                      disabled: !o || l.data
                    })
                  : (0, x.tZ)(_e, {
                      name: "requireMasterPassword",
                      isMpProtected: !t,
                      title: r(ke),
                      description: r(ve),
                      setValue: m,
                      value: e.requireMasterPassword,
                      disabled: !o
                    })
                : null
            )
          );
        };
      var Ee = n(755502),
        Ie = n(949603),
        Pe = n(170044);
      const Le = (0, a.createContext)({}),
        Se = (0, a.createContext)({}),
        Te = ({ children: e, vaultItemId: t, vaultItemTitle: n, spaceId: s, signalEditedValues: l, setHasOpenedDialogs: o }) => {
          const [r, d] = (0, a.useState)(""),
            [c, p] = (0, a.useState)(!1),
            { allCollections: u } = (0, Ee.b)(),
            [_, h] = (0, a.useState)(() =>
              "" === t
                ? []
                : u.flatMap((e) => (e.vaultItems.some((e) => e.id === t) ? { ...e, initiallyExisting: !0, hasBeenDeleted: !1 } : []))
            ),
            b = (0, a.useMemo)(() => _.filter((e) => !e.hasBeenDeleted), [_]),
            g = (0, a.useMemo)(() => u.filter((e) => !b.some((t) => t.id === e.id)), [u, b]),
            w = {
              setInput: d,
              setIsInputVisible: p,
              onSubmit: (e = r) => {
                if ((e = e.trim()).length <= 0) return;
                const t = _.findIndex((t) => t.name === e);
                if (-1 === t)
                  h((t) => {
                    var n;
                    const a = [...t],
                      i = u.find((t) => t.name === e && t.spaceId === s);
                    return (
                      a.push({
                        id: null != (n = i?.id) ? n : "",
                        name: e,
                        spaceId: s,
                        isShared: i?.isShared,
                        vaultItems: [],
                        initiallyExisting: !1,
                        hasBeenDeleted: !1
                      }),
                      (0, Pe.p)(a)
                    );
                  });
                else {
                  const e = _[t];
                  e.initiallyExisting &&
                    e.hasBeenDeleted &&
                    h((e) => {
                      const n = [...e];
                      return (n[t].hasBeenDeleted = !1), n;
                    });
                }
                l?.(!0), d("");
              },
              onDelete: (e) => {
                const t = _.findIndex((t) => t.name === e);
                if (-1 === t) return;
                const n = _[t];
                h((e) => {
                  const a = [...e];
                  return n.initiallyExisting ? (a[t].hasBeenDeleted = !0) : a.splice(t, 1), a;
                }),
                  (0, m.Nc)(i.PageView.CollectionDelete),
                  l?.(!0);
              },
              clearVaultItemCollections: () => h((e) => e.flatMap((e) => (e.initiallyExisting ? { ...e, hasBeenDeleted: !0 } : [])))
            };
          return a.createElement(
            Le.Provider,
            {
              value: {
                input: r,
                isInputVisible: c,
                filteredCollections: g,
                vaultItemCollections: _,
                vaultItemCollectionsToDisplay: b,
                vaultItemId: t,
                vaultItemTitle: n,
                setHasOpenedDialogs: o,
                spaceId: s
              }
            },
            a.createElement(Se.Provider, { value: w }, e)
          );
        },
        We = () => (0, a.useContext)(Le),
        Re = () => (0, a.useContext)(Se);
      var De,
        Ne = n(22393),
        Oe = n(971380);
      const Ue = ({ id: e, hasCollections: t, vaultItemTitle: n, setHasOpenedDialogs: i }) => {
          const { translate: l } = (0, u.Z)(),
            o = (0, a.useRef)(null),
            { isInputVisible: r, filteredCollections: d, input: c, spaceId: p } = We(),
            { openDialog: m, closeDialog: _ } = (0, Ne.R)(),
            { setInput: h, setIsInputVisible: b, onSubmit: g } = Re(),
            w = (e) => {
              g(e), _(), i?.(!1), o.current?.focus();
            },
            f = () => {
              _(), i?.(!1);
            };
          return r
            ? (0, E.tZ)(Ie.x5, {
                collections: d,
                id: e,
                input: c,
                inputRef: o,
                spaceId: p,
                selectionAsDropdown: !0,
                onSubmit: (e) => {
                  const t = d.find((t) => t.name === e && t.spaceId === p);
                  t?.isShared ? (m((0, E.tZ)(Oe.B, { onSubmit: w, onClose: f, itemTitle: n, collectionName: t.name })), i?.(!0)) : w(e);
                },
                setInput: h,
                onBlur: (e) => {
                  e.currentTarget.contains(e.relatedTarget) ||
                    window.setTimeout(() => {
                      b(!1);
                    }, 100);
                }
              })
            : (0, E.tZ)(
                E.zx,
                {
                  sx: { margin: "4px 0" },
                  onClick: () => b(!0),
                  icon: De || (De = (0, E.tZ)(s.dtP, null)),
                  layout: "iconLeading",
                  intensity: "supershy"
                },
                l(t ? "webapp_collections_input_placeholder_add_another" : "webapp_collections_input_placeholder_add_new")
              );
        },
        Be = (e) => (0, E.tZ)("div", { sx: { flex: "1", display: "flex", flexDirection: "column" }, ...e });
      var Ae,
        Ve = n(761753);
      const Me = ({ hasMultipleCollections: e, ...t }) => {
          const { spaceId: n } = We(),
            i = (0, Ve.b)(n),
            { translate: s } = (0, u.Z)();
          return (0, E.tZ)(
            "label",
            { sx: { display: "flex", width: "149px", justifyContent: "flex-end", fontWeight: "600", textAlign: "right" }, ...t },
            (0, E.tZ)(
              "span",
              { sx: { overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } },
              i && (0, E.tZ)(a.Fragment, null, `${i}`, Ae || (Ae = (0, E.tZ)("br", null))),
              s(e ? "webapp_credentials_header_row_category" : "webapp_credential_edition_field_category")
            )
          );
        },
        qe = (e) => (0, E.tZ)("div", { sx: { display: "flex", flexDirection: "row" }, ...e }),
        Fe = "collectionsFieldId",
        ze = (0, a.forwardRef)((e, t) => {
          const { vaultItemCollections: n, vaultItemCollectionsToDisplay: i, vaultItemTitle: s, setHasOpenedDialogs: l } = We(),
            { onDelete: o, clearVaultItemCollections: r } = Re(),
            d = i?.length > 0;
          return (
            (0, a.useImperativeHandle)(t, () => ({ getVaultItemCollections: () => n, clearVaultItemCollections: r })),
            (0, E.tZ)(
              qe,
              { sx: { gap: "24px", alignItems: !d && "center" } },
              (0, E.tZ)(Me, { hasMultipleCollections: i?.length > 1, htmlFor: Fe, sx: { marginTop: d && "15px" } }),
              (0, E.tZ)(
                Be,
                { sx: { ...(d && { gap: "8px", marginTop: "10px" }) } },
                (0, E.tZ)(Ie.zT, {
                  sx: { marginLeft: "16px" },
                  collectionListItems: i.map((e) =>
                    (0, E.tZ)(
                      Ie.cF,
                      { key: `collections_field_li_${e.name}` },
                      (0, E.tZ)(Ie.KH, { onDismiss: () => o(e.name), isShared: e.isShared }, e.name)
                    )
                  )
                }),
                (0, E.tZ)(Ue, { id: Fe, hasCollections: d, vaultItemTitle: s, setHasOpenedDialogs: l })
              )
            )
          );
        }),
        He = (0, a.forwardRef)(({ vaultItemId: e, vaultItemTitle: t, spaceId: n, signalEditedValues: a, setHasOpenedDialogs: i }, s) => {
          const { isCollectionsLoading: l } = (0, Ee.b)();
          return l
            ? null
            : (0, E.tZ)(
                Te,
                { vaultItemId: e, vaultItemTitle: t, spaceId: n, signalEditedValues: a, setHasOpenedDialogs: i },
                (0, E.tZ)(ze, { ref: s })
              );
        });
      var Ge = n(447725),
        Ye = n(950468),
        Ke = n(139378);
      const je = (e, t) => {
        (0, Ye.k)(e, t), (0, Ge.Yo)(t);
      };
      var Xe,
        Je = n(281086);
      const $e = (0, a.memo)(({ credential: e }) => {
        const { translate: t } = (0, u.Z)(),
          [n, i] = (0, a.useState)(null),
          l = (0, a.useCallback)((e) => i(e), []),
          o = (0, a.useCallback)(() => i(null), []);
        return (0, E.tZ)(
          a.Fragment,
          null,
          (0, E.tZ)(
            s.ua7,
            { placement: "top", content: t("webapp_credential_edition_autochange") },
            (0, E.tZ)(
              E.zx,
              {
                mood: "neutral",
                intensity: "supershy",
                onClick: () => l(e.id),
                disabled: e.limitedPermissions,
                sx: { border: "none", minWidth: "fit-content", padding: "10px" }
              },
              Xe || (Xe = (0, E.tZ)(s.HfT, null))
            )
          ),
          n && (0, E.tZ)(Je.R, { credentialId: n, dismissCallback: o })
        );
      });
      var Qe = n(38069),
        et = n(449354);
      const tt = ({
          children: e,
          url: t,
          hasUrlError: n,
          limitedPermissions: i,
          editViewButtonEnabled: s,
          handleMainWebsiteChange: l,
          handleGoToWebsite: o
        }) =>
          a.createElement(
            "div",
            { className: g.Z.containerBlock },
            a.createElement(et.d, {
              url: t,
              hasUrlError: n,
              editViewButtonEnabled: s,
              limitedPermissions: i,
              handleChange: l,
              handleGoToWebsite: o
            }),
            e
          ),
        nt = ({ url: e, hasUrlError: t, handleMainWebsiteChange: n, handleChanges: i, handleGoToWebsite: s }) => {
          const [l, o] = a.useState(!1),
            [r, d] = a.useState([]);
          return (
            a.useEffect(() => {
              r.length && o(!0), i({ linkedURLs: r });
            }, [r]),
            a.createElement(
              tt,
              {
                url: e,
                hasUrlError: t,
                limitedPermissions: !1,
                editViewButtonEnabled: !1,
                handleMainWebsiteChange: n,
                handleGoToWebsite: s
              },
              a.createElement(Qe.a, {
                linkedWebsitesList: r,
                areItemsLocked: !1,
                credentialId: "",
                isListEditable: !0,
                isEditing: l,
                showUrlProtocol: !0,
                updateLinkedWebsitesList: d
              })
            )
          );
        };
      var at,
        it = n(159713);
      const st = ({ linkedWebsitesAddedByUser: e, dashlaneDefinedLinkedWebsites: t, handleOnClickLinkedWebsitesCount: n }) => {
        const { translate: i } = (0, u.Z)(),
          l = e.length,
          o = (t && t.length > 1 ? t.length : 0) + l;
        return o > 0
          ? a.createElement(
              "button",
              { type: "button", className: it.Z.linkedWebsitesDetails, onClick: n },
              i("webapp_credential_edition_linked_websites_title_with_count", { count: o }),
              at || (at = a.createElement(s.XCv, { size: 12 }))
            )
          : null;
      };
      var lt = n(288330);
      const ot = ({
        url: e,
        linkedWebsitesAddedByUser: t,
        dashlaneDefinedLinkedWebsites: n,
        hasUrlError: i,
        editViewButtonEnabled: s,
        limitedPermissions: l = !1,
        handleChange: o,
        handleGoToWebsite: r,
        onClickAddNewWebsite: d,
        onClickLinkedWebsitesCount: c
      }) =>
        a.createElement(
          tt,
          { url: e, hasUrlError: i, limitedPermissions: l, editViewButtonEnabled: s, handleMainWebsiteChange: o, handleGoToWebsite: r },
          a.createElement(
            "div",
            { className: "linkedWebsitesContainer--xiS0SFSZB2" },
            c
              ? a.createElement(st, { linkedWebsitesAddedByUser: t, dashlaneDefinedLinkedWebsites: n, handleOnClickLinkedWebsitesCount: c })
              : null,
            d && !l ? a.createElement(lt.E, { handleOnClickAddLinkedWebsiteButton: d }) : null
          )
        );
      var rt = n(242714),
        dt = n(383849),
        ct = n.n(dt);
      let pt = (function (e) {
        return (e.Success = "success"), (e.Loading = "loading"), (e.Error = "error"), e;
      })({});
      pt.Loading;
      var ut = n(707076),
        mt = n(690056),
        _t = n(799852);
      function ht(e) {
        return (0, _t.k)(mt.i, "otpCodeForSecretOrUrl", { secretOrUrl: e });
      }
      const bt = ({ rank: e, content: t }) =>
          (0, E.tZ)(
            s.T5p,
            {
              as: "li",
              gap: "16px",
              gridTemplateColumns: "35px 1fr",
              alignItems: "center",
              justifyContent: "flex-start",
              sx: { width: "100%" }
            },
            (0, E.tZ)(s.dDn, { as: ut.m, rank: e }),
            t
          ),
        gt = ({ title: e, isOpen: t, url: n, onClose: i, onSubmit: o }) => {
          const { translate: r } = (0, u.Z)(),
            [d, c] = (0, a.useState)(""),
            p = ht(d),
            m = !!d && p.status === pt.Error,
            _ = p.status !== pt.Success,
            h = new l.Y(n).getHostname();
          return (0, E.tZ)(
            E.Vq,
            {
              title: `Set up OTP for ${e}`,
              isOpen: t,
              onClose: i,
              closeActionLabel: "Close",
              actions: {
                primary: h
                  ? {
                      icon: "ActionOpenExternalLinkOutlined",
                      layout: "iconTrailing",
                      children: r("webapp_credential_otp_setup_goto_website_button", { domain: h }),
                      onClick: () => (0, Ge.Yo)(n)
                    }
                  : void 0,
                secondary: {
                  children: r("webapp_credential_otp_setup_next_button"),
                  onClick: () => {
                    p.status === pt.Success && (o(p.data?.url), i());
                  },
                  disabled: _,
                  tooltip: r("webapp_credential_otp_setup_next_button_disabled_tooltip")
                }
              }
            },
            (0, E.tZ)(
              s.Ejs,
              { as: "ol", gap: "16px" },
              (0, E.tZ)(bt, { rank: 1, key: "2fa-settings", content: r("webapp_credential_otp_setup_step1_text") }),
              (0, E.tZ)(bt, { rank: 2, key: "2fa-turn-on", content: r("webapp_credential_otp_setup_step2_text") }),
              (0, E.tZ)(bt, { rank: 3, key: "enter-setup-code", content: r("webapp_credential_otp_setup_step3_text") })
            ),
            (0, E.tZ)(E.Kx, {
              error: m,
              feedback: m ? "Incorrect setup code entered" : "",
              label: "Enter setup code",
              onChange: (e) => {
                e.preventDefault(), e.stopPropagation(), c(e.target.value);
              }
            })
          );
        };
      var wt;
      const ft = ({ setHasOpenedDialogs: e, url: t, title: n, onSubmit: i }) => {
          const { translate: l } = (0, u.Z)(),
            [o, r] = (0, a.useState)(!1);
          return (0, E.tZ)(
            s.Ejs,
            { alignItems: "center", sx: { paddingRight: "18px" } },
            (0, E.tZ)(
              "label",
              { id: "otp-label", className: ct()([p.Z.label, p.Z.text]) },
              l("webapp_credential_edition_field_security_code")
            ),
            (0, E.tZ)(
              E.zx,
              {
                sx: { margin: "4px 0" },
                icon: wt || (wt = (0, E.tZ)(s.dtP, null)),
                layout: "iconLeading",
                intensity: "supershy",
                mood: "neutral",
                onClick: () => {
                  r(!0), e?.(!0);
                }
              },
              l("webapp_credential_edition_field_otp_setup_button")
            ),
            (0, E.tZ)(gt, {
              url: t,
              title: n,
              isOpen: o,
              onSubmit: i,
              onClose: () => {
                r(!1), e?.(!1);
              }
            })
          );
        },
        Ct = ({ secretOrUrl: e, isEditable: t, onCopy: n, onDelete: a }) => {
          const { translate: i } = (0, u.Z)(),
            l = ht(e);
          if (l.status !== ce.rq.Success || void 0 === l.data || null === l.data) return null;
          const [o, r, d] =
            l.status === ce.rq.Success && l.data ? [l.data.code, l.data.validityTime, l.data.validityEndDate] : [null, 3e4, 1 / 0];
          return (0, E.tZ)(
            s.T5p,
            { alignItems: "center", gap: "18px", gridTemplateColumns: "173px 215px auto" },
            (0, E.tZ)(
              "label",
              { id: "otp-label", className: ct()([p.Z.label, p.Z.text]) },
              i("webapp_credential_edition_field_security_code")
            ),
            (0, E.tZ)(
              s.dDn,
              { sx: { minWidth: "64px", maxWidth: "172px" } },
              (0, E.tZ)(s.CnT, {
                alertThreshold: 5e3,
                "aria-labelledby": "otp-label",
                clockSize: 18,
                code: o,
                validityPeriod: r,
                validityEndDate: d
              })
            ),
            (0, E.tZ)(
              s.dDn,
              null,
              (0, E.tZ)(y.m, { data: null != o ? o : "", onCopy: n, disabled: l.status !== ce.rq.Success }),
              t
                ? (0, E.tZ)(E.zx, {
                    sx: { marginLeft: "12px" },
                    icon: "ActionDeleteOutlined",
                    layout: "iconOnly",
                    intensity: "supershy",
                    mood: "neutral",
                    onClick: a
                  })
                : null
            )
          );
        },
        yt = ({ secretOrUrl: e, url: t, title: n, isEditable: a, onCopy: i, onDelete: s, onSubmit: l, setHasOpenedDialogs: o }) => {
          const r = (0, rt.o)("sharingVault_web_otp_setup_dev");
          return e
            ? (0, E.tZ)(Ct, { secretOrUrl: e, isEditable: a && !!r, onCopy: i, onDelete: s })
            : a && r
            ? (0, E.tZ)(ft, { url: t, title: n, onSubmit: l, setHasOpenedDialogs: o })
            : null;
        },
        kt = "webapp_credential_edition_field_password",
        vt = (0, a.forwardRef)(
          (
            {
              activeSpaces: e,
              areProtectedItemsUnlocked: t,
              dashlaneDefinedLinkedWebsites: n,
              editableValues: v,
              isNewItem: x,
              onClickAddNewWebsite: Z,
              onClickLinkedWebsitesCount: E,
              openProtectedItemsUnlocker: I,
              readonlyValues: P,
              setEditableValues: L,
              setHasOpenedDialogs: S,
              signalEditedValues: T
            },
            W
          ) => {
            var R, D, N, O, U, B;
            const [A, V] = (0, a.useState)({
                showingPassword: !1,
                credentialsGloballyRequireMP: !1,
                defaultSpaceId: null != (R = v.spaceId) ? R : ""
              }),
              { translate: M } = (0, u.Z)(),
              q = (0, a.useRef)(null),
              F = (0, o.V)();
            (0, a.useImperativeHandle)(W, () => ({
              isFormValid: () => !0,
              getVaultItemCollections: () => q.current?.getVaultItemCollections()
            }));
            const z = (e, t = "") => {
              if (e instanceof Event && t) throw new Error("handleChange was called with both a ChangeEvent and key.");
              if (!P.limitedPermissions || "spaceId" === t) {
                const n = e?.target ? { [e.target.dataset.name]: e.target.value } : { [t]: e },
                  a = Object.keys(n)[0];
                L({ ...v, [a]: n[a] });
              }
            };
            let H = v.spaceId;
            P.forceCategorizedSpace?.teamName && (H = P.forceCategorizedSpace?.teamId);
            const G = e?.find((e) => e.teamId === H),
              Y = null != (D = G?.teamName) ? D : "webapp_credential_edition_field_space_personal",
              K = (e) => {
                v.spaceId !== e &&
                  e !== A.defaultSpaceId &&
                  (V((t) => ({ ...t, defaultSpaceId: e })), q.current?.clearVaultItemCollections(), z(e, "spaceId"));
              },
              j = (t) => {
                if (e && e.length > 0 && e[0].info?.teamAdmins?.length > 0)
                  for (const a of e[0].info.teamAdmins)
                    if (t.target.value.includes(a)) {
                      var n;
                      V({ ...A, defaultSpaceId: null != (n = e[0].teamId) ? n : "" });
                      break;
                    }
              },
              X = (e) => {
                L({ ...v, ...e });
              },
              J = () => !!v.password && (void 0 !== t ? !t && (v.requireMasterPassword || A.credentialsGloballyRequireMP) : void 0),
              $ = ((e) => {
                const t = { [_.OTP_CODE]: h(e), [_.SECONDARY_LOGIN]: b(e) };
                return (e, n) => t[e] || !!n;
              })(v);
            (0, a.useEffect)(() => {
              var e;
              K(null != (e = A.defaultSpaceId) ? e : "");
            }, [A]),
              (0, a.useEffect)(() => {
                r.C.arePasswordsProtected().then((e) => {
                  V({ ...A, credentialsGloballyRequireMP: e });
                });
              }, []);
            const Q = async (e, t) => {
                const n = new l.Y(v.URL).getRootDomain();
                (0, m.Kz)(
                  new i.UserCopyVaultItemFieldEvent({
                    itemType: i.ItemType.Credential,
                    field: e,
                    itemId: P.id,
                    isProtected: !(e !== i.Field.Password || (!v.requireMasterPassword && !A.credentialsGloballyRequireMP))
                  })
                ),
                  (0, m.Kz)(
                    new i.AnonymousCopyVaultItemFieldEvent({
                      itemType: i.ItemType.Credential,
                      field: e,
                      domain: { id: await (0, i.hashDomain)(n), type: i.DomainType.Web }
                    })
                  ),
                  t || F.showAlert(M("_common_generic_error"), s.BLW.ERROR);
              },
              ee = Q.bind(void 0, i.Field.Email),
              te = Q.bind(void 0, i.Field.Login),
              ne = Q.bind(void 0, i.Field.OtpCode),
              ae = Q.bind(void 0, i.Field.Password),
              ie = Q.bind(void 0, i.Field.SecondaryLogin),
              se = Boolean(q.current?.getVaultItemCollections()?.some((e) => e.isShared)),
              le = Boolean(P.forceCategorizedSpace) || se;
            return a.createElement(
              a.Fragment,
              null,
              a.createElement(
                "div",
                { className: g.Z.containerBlock },
                x
                  ? a.createElement(nt, {
                      url: v.URL,
                      hasUrlError: !1,
                      handleMainWebsiteChange: z,
                      handleChanges: X,
                      handleGoToWebsite: () => je(P.id, v.URL)
                    })
                  : null,
                x
                  ? null
                  : a.createElement(
                      d.N,
                      { enabled: Boolean(v.email), disableHover: !0 },
                      a.createElement(c.Z, {
                        label: M("webapp_credential_edition_field_email"),
                        placeholder: M("webapp_credential_edition_field_placeholder_no_email"),
                        dataName: "email",
                        readOnly: P.limitedPermissions,
                        value: v.email,
                        onChange: (e) => {
                          z(e), j(e);
                        }
                      }),
                      a.createElement(y.m, { data: v.email, onCopy: ee })
                    ),
                a.createElement(
                  d.N,
                  { enabled: !x && Boolean(v.username), disableHover: !0 },
                  a.createElement(c.Z, {
                    label: M("webapp_credential_edition_field_login"),
                    placeholder: M("webapp_credential_edition_field_placeholder_no_login"),
                    dataName: "username",
                    readOnly: P.limitedPermissions,
                    value: v.username,
                    onChange: (e) => {
                      z(e), j(e);
                    }
                  }),
                  a.createElement(y.m, { data: v.username, onCopy: te })
                ),
                $(_.SECONDARY_LOGIN, v.alternativeUsername)
                  ? a.createElement(
                      d.N,
                      { enabled: Boolean(v.alternativeUsername), disableHover: !0 },
                      a.createElement(c.Z, {
                        label: M("webapp_credential_edition_field_secondary_login"),
                        placeholder: M("webapp_credential_edition_field_placeholder_no_secondary_login"),
                        dataName: "alternativeUsername",
                        value: v.alternativeUsername,
                        readOnly: P.limitedPermissions,
                        onChange: z
                      }),
                      a.createElement(y.m, { data: v.alternativeUsername, onCopy: ie })
                    )
                  : null,
                a.createElement(
                  d.N,
                  { enabled: !0, disableHover: !0 },
                  a.createElement(
                    "div",
                    { className: "centeredFieldContainer--hqprAHIrBT" },
                    a.createElement(
                      "label",
                      { className: p.Z.label, htmlFor: "password" },
                      a.createElement("span", { className: p.Z.text, title: M(kt) }, M(kt))
                    ),
                    a.createElement(k, {
                      key: "password",
                      className: "passwordInput--hOFtro6yVO",
                      id: "password",
                      requiresMasterPassword: !x && J(),
                      credentialId: P.id,
                      value: P.limitedPermissions ? "••••••••••••" : v.password,
                      placeholder: M("webapp_credential_edition_field_placeholder_no_password"),
                      hidePasswordTooltipText: M("webapp_credential_edition_field_password_action_hide"),
                      showPasswordTooltipText: M("webapp_credential_edition_field_password_action_show"),
                      disabled: !x && P.limitedPermissions,
                      readOnly: !x && J(),
                      onFocus: (e) => {
                        if (!x && J() && !A.showingPassword) {
                          const { currentTarget: t } = e,
                            n = () => {
                              t?.focus();
                            };
                          I({ action: f.P7.Show, itemType: C.R.Password, showNeverAskOption: !0, credentialId: P.id, successCallback: n });
                        }
                      },
                      onChange: (e) => z(e.target.value, "password"),
                      onPasswordVisibilityChanged: (e) => {
                        V({ ...A, showingPassword: e }),
                          e &&
                            (async (e, t, n, a) => {
                              const s = new l.Y(e).getRootDomain(),
                                o = !!n || !!a;
                              t &&
                                ((0, m.Kz)(
                                  new i.UserRevealVaultItemFieldEvent({
                                    field: i.Field.Password,
                                    isProtected: o,
                                    itemId: t,
                                    itemType: i.ItemType.Credential
                                  })
                                ),
                                (0, m.Kz)(
                                  new i.AnonymousRevealVaultItemFieldEvent({
                                    field: i.Field.Password,
                                    itemType: i.ItemType.Credential,
                                    domain: { id: await (0, i.hashDomain)(s), type: i.DomainType.Web }
                                  })
                                ));
                            })(v.URL, P.id, v.requireMasterPassword, A.credentialsGloballyRequireMP);
                      },
                      style: { width: "240px" }
                    })
                  ),
                  a.createElement(
                    "div",
                    { className: "passwordButtonsActions--sHufzyFHxV" },
                    x || P.limitedPermissions || !v.password
                      ? null
                      : a.createElement(
                          a.Fragment,
                          null,
                          a.createElement(y.m, { itemId: P.id, disabled: void 0 === J(), data: v.password, checkProtected: J, onCopy: ae }),
                          a.createElement($e, { credential: { id: P.id, limitedPermissions: P.limitedPermissions } })
                        ),
                    v.password
                      ? null
                      : a.createElement(de, {
                          handleChangePassword: (e) => z(e, "password"),
                          credential: { id: P.id, limitedPermissions: P.limitedPermissions, password: v.password }
                        })
                  )
                ),
                a.createElement(yt, {
                  secretOrUrl: null != (N = v.otpURL) ? N : "",
                  isEditable: !P.limitedPermissions,
                  url: v.URL,
                  title: v.itemName,
                  onCopy: ne,
                  onSubmit: (e) => z(e, "otpURL"),
                  onDelete: () => X({ otpURL: "" }),
                  setHasOpenedDialogs: S
                })
              ),
              x
                ? null
                : a.createElement(ot, {
                    url: v.URL,
                    linkedWebsitesAddedByUser: P.linkedURLs.length > 0 ? P.linkedURLs : v.linkedURLs,
                    dashlaneDefinedLinkedWebsites: n,
                    hasUrlError: !1,
                    editViewButtonEnabled: !x && Boolean(v.URL),
                    limitedPermissions: P.limitedPermissions,
                    handleChange: z,
                    handleGoToWebsite: () => je(P.id, v.URL),
                    onClickAddNewWebsite: Z,
                    onClickLinkedWebsitesCount: E
                  }),
              a.createElement(
                "div",
                { className: g.Z.containerBlock },
                a.createElement(c.Z, {
                  label: M("webapp_credential_edition_field_name"),
                  placeholder: M("webapp_credential_edition_field_placeholder_no_title"),
                  dataName: "itemName",
                  value: v.itemName || ((oe = v.URL), (0, Ke.capitalize)(new l.Y(oe).getRootDomain())),
                  readOnly: P.limitedPermissions,
                  onChange: z
                }),
                a.createElement(
                  s.ua7,
                  { content: M("webapp_credential_edition_field_force_categorized", { space: Y }), passThrough: !le },
                  a.createElement(
                    "div",
                    null,
                    a.createElement(w.M, {
                      labelSx: w.e,
                      spaceId: null != (O = v.spaceId) ? O : "",
                      isDisabled: le,
                      onChange: K,
                      defaultSpaceId: null != (U = A.defaultSpaceId) ? U : ""
                    })
                  )
                ),
                a.createElement(He, {
                  spaceId: null != (B = v.spaceId) ? B : "",
                  vaultItemId: P.id,
                  vaultItemTitle: v.itemName,
                  ref: q,
                  signalEditedValues: T,
                  setHasOpenedDialogs: S
                }),
                a.createElement(c.Z, {
                  label: M("webapp_credential_edition_field_note"),
                  placeholder: M("webapp_credential_edition_field_placeholder_no_note"),
                  dataName: "note",
                  value: v.note,
                  disabled: P.limitedPermissions,
                  onChange: z,
                  multiLine: !0,
                  testId: "credential_edit_note_value"
                })
              ),
              a.createElement(Ze, {
                isNewCredential: !!x,
                credentialPreferences: {
                  useAutoLogin: v.useAutoLogin,
                  requireMasterPassword: !!v.requireMasterPassword,
                  onlyAutofillExactDomain: !!v.onlyAutofillExactDomain
                },
                update: (e) => (
                  X({
                    useAutoLogin: e.useAutoLogin,
                    requireMasterPassword: e.requireMasterPassword,
                    onlyAutofillExactDomain: e.onlyAutofillExactDomain
                  }),
                  Promise.resolve()
                ),
                url: v.URL
              })
            );
            var oe;
          }
        );
      vt.displayName = "CredentialForm";
    },
    449354: (e, t, n) => {
      n.d(t, { d: () => p });
      var a,
        i = n(142897),
        s = n(695495),
        l = n(441217),
        o = n(619733),
        r = n(313661),
        d = n(201389);
      const c = "webapp_credential_edition_field_website_action_goto",
        p = ({
          url: e,
          hasUrlError: t,
          disabled: n,
          editViewButtonEnabled: p,
          limitedPermissions: u = !1,
          handleChange: m,
          handleGoToWebsite: _
        }) => {
          const { translate: h } = (0, d.Z)();
          return (0, s.tZ)(
            o.N,
            { enabled: p, disableHover: !0 },
            (0, s.tZ)(r.Z, {
              label: h("webapp_credential_edition_field_website"),
              placeholder: h("webapp_credential_edition_field_placeholder_no_url"),
              dataName: "URL",
              disabled: n,
              value: e,
              error: t,
              readOnly: u,
              onChange: m
            }),
            (0, s.tZ)(
              l.ua7,
              { placement: "top", content: h(c) },
              (0, s.tZ)(
                i.zx,
                {
                  mood: "neutral",
                  intensity: "supershy",
                  type: "button",
                  onClick: _,
                  sx: { border: "none", minWidth: "fit-content", padding: "10px" },
                  role: "link",
                  "aria-label": h(c)
                },
                a || (a = (0, s.tZ)(l.RTC, null))
              )
            )
          );
        };
    },
    288330: (e, t, n) => {
      n.d(t, { E: () => l });
      var a = n(696832),
        i = n(142897),
        s = n(201389);
      const l = ({ disabled: e = !1, handleOnClickAddLinkedWebsiteButton: t }) => {
        const { translate: n } = (0, s.Z)();
        return a.createElement(
          i.zx,
          { layout: "iconLeading", icon: "ActionAddOutlined", onClick: t, disabled: e, mood: "neutral", intensity: "supershy" },
          n("webapp_credential_edition_linked_websites_add_website")
        );
      };
    },
    38069: (e, t, n) => {
      n.d(t, { a: () => C });
      var a,
        i,
        s = n(696832),
        l = n(139378),
        o = n.n(l),
        r = n(441217),
        d = n(201389),
        c = n(313661),
        p = n(288330),
        u = n(660765),
        m = n(164718),
        _ = n(62429),
        h = n(447725);
      const b = "webapp_credential_linked_websites_action_delete",
        g = "webapp_credential_linked_websites_action_goto",
        w = ({ linkedWebsite: e, credentialId: t, onRemoveItem: n }) => {
          const { translate: l } = (0, d.Z)();
          return s.createElement(
            s.Fragment,
            null,
            e.trim()
              ? s.createElement(
                  r.ua7,
                  { placement: "top", content: l(g) },
                  s.createElement(
                    r.zxk,
                    {
                      nature: "secondary",
                      type: "button",
                      onClick:
                        ((o = e),
                        async () => {
                          const e = new m.Y(o);
                          (0, _.Kz)(
                            new u.UserOpenExternalVaultItemLinkEvent({
                              domainType: u.DomainType.Web,
                              itemId: t,
                              itemType: u.ItemTypeWithLink.Credential
                            })
                          ),
                            (0, _.Kz)(
                              new u.AnonymousOpenExternalVaultItemLinkEvent({
                                itemType: u.ItemTypeWithLink.Credential,
                                domain: { id: await (0, u.hashDomain)(e.getRootDomain()), type: u.DomainType.Web }
                              })
                            ),
                            (0, h.Yo)(e.getUrlWithFallbackHttpsProtocol());
                        }),
                      style: { border: "none", minWidth: "fit-content", padding: "10px" },
                      role: "link",
                      name: "hiddenAction",
                      "aria-label": l(g),
                      "data-testid": "open_linked_website"
                    },
                    a || (a = s.createElement(r.RTC, null))
                  )
                )
              : null,
            n
              ? s.createElement(
                  r.ua7,
                  { placement: "top", content: l(b) },
                  s.createElement(
                    r.zxk,
                    {
                      nature: "secondary",
                      type: "button",
                      onClick: n,
                      style: { border: "none", minWidth: "fit-content", padding: "10px" },
                      name: "hiddenAction",
                      "aria-label": l(b)
                    },
                    i || (i = s.createElement(r.XHJ, null))
                  )
                )
              : null
          );
          var o;
        };
      var f = n(159713);
      const C = s.memo(
        ({
          label: e,
          linkedWebsitesList: t,
          areItemsLocked: n,
          credentialId: a,
          isListEditable: i = !1,
          isEditing: l = !1,
          showUrlProtocol: u = !1,
          updateLinkedWebsitesList: m
        }) => {
          const { translate: _ } = (0, d.Z)(),
            h = s.useRef(null),
            [b, g] = s.useState(!1),
            [C, y] = s.useState(t.length),
            [k, v] = s.useState(t.map((e, t) => ({ linkedWebsite: e, id: t }))),
            x = (e) => {
              g(!0);
              const t = C + 1;
              v([...k, { linkedWebsite: "", id: t }]), y(t), e?.preventDefault(), e?.stopPropagation();
            },
            Z = (e) => {
              const { name: t, value: n } = e.target,
                a = Number(t),
                i = k.findIndex((e) => e.id === a);
              if (-1 !== i) {
                const e = o().cloneDeep(k);
                (e[i].linkedWebsite = n), v(e);
              }
            },
            E = (e) => {
              "Enter" === e.key && (e.preventDefault(), e.stopPropagation(), x());
            };
          return (
            s.useEffect(() => {
              l && x();
            }, []),
            s.useEffect(() => {
              C !== t.length && h.current?.focus();
            }, [C]),
            s.useEffect(() => {
              m?.(k.map(({ linkedWebsite: e }) => e)),
                ((e) => {
                  e.every((e) => e.linkedWebsite) ? g(!1) : g(!0);
                })(k);
            }, [m, JSON.stringify(k)]),
            s.createElement(
              "div",
              { className: f.Z.listContainer },
              s.createElement(
                "div",
                { className: f.Z.label },
                n ? s.createElement(r.UnL, { height: 12, sx: { paddingTop: "3px" } }) : null,
                e ? ` ${_(e)}` : null
              ),
              s.createElement(
                "div",
                { className: f.Z.addUrlContainer },
                i
                  ? s.createElement(
                      "div",
                      { className: f.Z.linkedWebsitesList },
                      k.map(({ linkedWebsite: e, id: t }) =>
                        s.createElement(
                          "div",
                          { className: f.Z.linkedWebsitesRow, key: t },
                          s.createElement(c.Z, {
                            placeholder: _("webapp_credential_linked_websites_new_website_placeholder"),
                            ref: h,
                            onChange: Z,
                            onFieldKeyDown: E,
                            value: e,
                            name: t.toString()
                          }),
                          s.createElement(w, {
                            linkedWebsite: e,
                            credentialId: a,
                            onRemoveItem: () =>
                              ((e) => {
                                v(k.filter((t) => t.id !== e));
                              })(t)
                          })
                        )
                      ),
                      s.createElement(p.E, { disabled: b, handleOnClickAddLinkedWebsiteButton: x })
                    )
                  : s.createElement(
                      "div",
                      { className: f.Z.linkedWebsitesList },
                      k.map(({ linkedWebsite: e, id: t }) =>
                        s.createElement(
                          "div",
                          { className: f.Z.linkedWebsitesRow, key: t },
                          s.createElement(
                            "div",
                            { className: f.Z.linkedWebsitesLockedItem },
                            u
                              ? e
                              : ((e) => {
                                  const t = e.match(/^(?:\w+:\/\/)?(.*)$/);
                                  return t && t.length >= 2 ? t[1] : e;
                                })(e)
                          ),
                          s.createElement(w, { linkedWebsite: e, credentialId: a })
                        )
                      )
                    )
              )
            )
          );
        }
      );
    },
    83126: (e, t, n) => {
      n.d(t, { Z: () => a });
      const a = {
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
    159713: (e, t, n) => {
      n.d(t, { Z: () => a });
      const a = {
        header: "header--GePOOHOBzn",
        backButton: "backButton--ApWZZ3esh6",
        listContainer: "listContainer--njknVVuG8n",
        label: "label--ERiGGqtKHY",
        linkedWebsitesList: "linkedWebsitesList--ZSuJnbXQxS",
        linkedWebsitesRow: "linkedWebsitesRow--WfdNXmrkL4",
        linkedWebsitesEditableItem: "linkedWebsitesEditableItem--Ns6V467EzV",
        linkedWebsitesLockedItem: "linkedWebsitesLockedItem--RYRFapL_Jw",
        addUrlContainer: "addUrlContainer--OJSLm0uPSs",
        linkedWebsitesDetails: "linkedWebsitesDetails--uaFRgv0zeT",
        addButton: "addButton--z1WN5Nny3_"
      };
    },
    488856: (e, t, n) => {
      n.d(t, { Z: () => a });
      const a = {
        container: "container--BvfulnQcuP",
        containerBlock: "containerBlock--lIB_8rMAqf",
        horizontalContainerBlock: "horizontalContainerBlock--XzyL0HxXte",
        secondItem: "secondItem--YxYGi1WTY5"
      };
    }
  }
]);
