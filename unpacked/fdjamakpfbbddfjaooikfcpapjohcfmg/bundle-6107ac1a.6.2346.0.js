(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [2356],
  {
    376868: (e) => {
      e.exports = { LANGUAGES: ["en", "fr", "de", "es", "it", "ja", "pt", "ko", "zh", "sv", "nl"] };
    },
    193096: (e, t, n) => {
      "use strict";
      n.d(t, { g: () => i });
      var o = n(696832),
        a = n(441217),
        r = n(201389),
        s = n(683463);
      const i = ({ handleDismiss: e, isAccountRecoveryApproved: t, handleAccountRecovery: n }) => {
        const { translate: i } = (0, r.Z)();
        return o.createElement(
          a.VqE,
          { isOpen: t, onClose: e, disableEscapeKeyClose: !0, disableOutsideClickClose: !0 },
          o.createElement("div", { className: s.Z.icon }, o.createElement(a.H0w, { size: 62, color: a.colors.midGreen00 })),
          o.createElement(a.$N8, { title: i("webapp_account_recovery_approval_title") }),
          o.createElement(
            a.a7O,
            null,
            o.createElement(a.nvN, { color: a.colors.dashGreen01 }, i("webapp_account_recovery_approval_subtitle"))
          ),
          o.createElement(a.cNS, { primaryButtonTitle: i("webapp_account_recovery_approval_continue"), primaryButtonOnClick: n })
        );
      };
    },
    548559: (e, t, n) => {
      "use strict";
      n.d(t, { W: () => c });
      var o = n(696832),
        a = n(635164),
        r = n(441217),
        s = n(60043),
        i = n(201389);
      const c = ({ showAccountRecoveryDialog: e, handleDismiss: t }) => {
        const { translate: n } = (0, i.Z)(),
          c = (0, a.k6)(),
          { routes: l } = (0, s.Xo)(),
          _ = () => {
            t();
          };
        return o.createElement(
          r.VqE,
          { closeIconName: n("_common_dialog_dismiss_button"), isOpen: e, onClose: _ },
          o.createElement(r.$N8, { title: n("webapp_login_form_account_recovery_title") }),
          o.createElement(
            r.a7O,
            null,
            o.createElement(r.nvN, { color: r.colors.dashGreen01 }, n("webapp_login_form_account_recovery_subtitle"))
          ),
          o.createElement(r.cNS, {
            primaryButtonTitle: n("webapp_login_form_account_recovery_confirm"),
            primaryButtonOnClick: () => {
              t(), c.push(l.userDeviceRegistration);
            },
            secondaryButtonTitle: n("webapp_login_form_account_recovery_dismiss"),
            secondaryButtonOnClick: _
          })
        );
      };
    },
    830803: (e, t, n) => {
      "use strict";
      n.d(t, { w: () => _ });
      var o = n(696832),
        a = n(635164),
        r = n(441217),
        s = n(66941),
        i = n(201389),
        c = n(787268),
        l = n(974769);
      const _ = ({ showCancelRequestDialog: e, handleDismiss: t, handleShowGenericRecoveryError: n }) => {
        const { translate: _ } = (0, i.Z)(),
          u = (0, a.k6)(),
          p = (0, c.V)(),
          d = () => {
            t(), n();
          };
        return o.createElement(
          r.VqE,
          { closeIconName: _("_common_dialog_dismiss_button"), isOpen: e, onClose: t },
          o.createElement(r.$N8, { title: _("webapp_account_recovery_request_dialog_title") }),
          o.createElement(
            r.a7O,
            null,
            o.createElement(r.nvN, { color: r.colors.dashGreen01 }, _("webapp_account_recovery_request_dialog_subtitle"))
          ),
          o.createElement(r.cNS, {
            intent: "danger",
            primaryButtonTitle: _("webapp_account_recovery_request_dialog_confirm"),
            primaryButtonOnClick: async () => {
              try {
                if (!(await s.C.cancelRecoveryRequest()).success) return void d();
                p.showAlert(_("webapp_account_recovery_request_dialog_alert"), r.BLW.SUCCESS), u.replace(l.TT);
              } catch (e) {
                return void d();
              }
            },
            secondaryButtonTitle: _("webapp_account_recovery_request_dialog_dismiss"),
            secondaryButtonOnClick: t
          })
        );
      };
    },
    309448: (e, t, n) => {
      "use strict";
      n.d(t, { H: () => i });
      var o = n(696832),
        a = n(441217),
        r = n(201389),
        s = n(683463);
      const i = ({ isAccountRecoveryError: e, handleGenericRecoveryErrorClose: t }) => {
        const { translate: n } = (0, r.Z)();
        return o.createElement(
          a.VqE,
          { closeIconName: n("_common_dialog_dismiss_button"), isOpen: e, onClose: t },
          o.createElement("div", { className: s.Z.icon }, o.createElement(a.enX, { size: 62, color: a.colors.functionalRed02 })),
          o.createElement(a.$N8, { title: n("webapp_account_recovery_generic_error_title") }),
          o.createElement(
            a.a7O,
            null,
            o.createElement(a.nvN, { color: a.colors.dashGreen01 }, n("webapp_account_recovery_generic_error_subtitle"))
          ),
          o.createElement(a.cNS, { primaryButtonTitle: n("webapp_account_recovery_generic_error_dismiss"), primaryButtonOnClick: t })
        );
      };
    },
    969331: (e, t, n) => {
      "use strict";
      n.d(t, { g1: () => h.g, WE: () => w.W, Hc: () => E.H, H4: () => f.H, Yt: () => g, _H: () => b._ });
      var o,
        a = n(696832),
        r = n(441217),
        s = n(695495),
        i = n(787268),
        c = n(66941),
        l = n(201389),
        _ = n(148038),
        u = n(453576),
        p = n(64183),
        d = n(351551),
        m = n(974769);
      const g = () => {
        const { translate: e } = (0, l.Z)(),
          [t, n] = a.useState(!1),
          g = (0, i.V)(),
          { showDialog: h, markDialogAsSeen: w } = (function () {
            const e = (0, _.qr)({ queryConfig: { query: c.C.getShouldShowFeatureActivationModal } }, []),
              { unseen: t, setAsSeen: n } = (0, d.m)(u.NotificationName.AccountRecoveryAvailableEmployeeDialog),
              { isTeamSoftDiscontinued: o } = (0, p.lZ)();
            return { showDialog: t && e.status === _.rq.Success && e.data && !o, markDialogAsSeen: n };
          })();
        return (0, s.tZ)(
          r.VqE,
          { isOpen: h, onClose: () => w(), closeIconName: e("_common_dialog_dismiss_button") },
          (0, s.tZ)("div", { style: { marginBottom: "30px" } }, o || (o = (0, s.tZ)(r._m8, { size: 90 }))),
          (0, s.tZ)(r.$N8, { title: e("webapp_account_recovery_activation_dialog_title") }),
          (0, s.tZ)(
            r.a7O,
            null,
            (0, s.tZ)(
              r.nvN,
              { sx: { marginBottom: "15px" }, color: r.colors.dashGreen01 },
              e("webapp_account_recovery_activation_dialog_body")
            ),
            (0, s.tZ)(r.vDh, { severity: "subtle", size: "small", title: e("webapp_account_recovery_activation_dialog_infobox_text") })
          ),
          (0, s.tZ)(r.cNS, {
            primaryButtonTitle: e("webapp_account_recovery_activation_dialog_primary_button"),
            primaryButtonOnClick: async () => {
              n(!0),
                await c.C.activateAccountRecovery(),
                g.showAlert(e("webapp_account_recovery_activation_success_message"), r.BLW.SUCCESS),
                n(!1),
                w();
            },
            primaryButtonProps: { disabled: t, id: "activate-recovery-button" },
            secondaryButtonTitle: e("webapp_account_recovery_activation_dialog_secondary_button"),
            secondaryButtonOnClick: async () => {
              window.open(m.WW), w();
            },
            secondaryButtonProps: { disabled: t }
          })
        );
      };
      var h = n(193096),
        w = n(548559),
        E = (n(830803), n(309448)),
        f = n(829645),
        b = n(265727);
    },
    829645: (e, t, n) => {
      "use strict";
      n.d(t, { H: () => c });
      var o = n(696832),
        a = n(441217),
        r = n(66941),
        s = n(201389),
        i = n(683463);
      const c = ({
        isAccountRecoveryPending: e,
        shouldSendNewRequest: t,
        handleShowGenericRecoveryError: n,
        handleShowAccountRecoveryDialog: c,
        handleDismiss: l
      }) => {
        const { translate: _ } = (0, s.Z)(),
          u = _(t ? "webapp_login_form_account_recovery_pending_start_new" : "webapp_login_form_account_recovery_pending_cancel_request"),
          p = t
            ? c
            : async () => {
                try {
                  (await r.C.cancelRecoveryRequest()).success || n();
                } catch (e) {
                  n();
                }
                l();
              };
        return o.createElement(
          a.VqE,
          {
            closeIconName: _("_common_dialog_dismiss_button"),
            isOpen: e,
            onClose: () => {
              l();
            }
          },
          o.createElement("div", { className: i.Z.icon }, o.createElement(a.vFK, { size: 62, color: a.colors.grey04 })),
          o.createElement(a.$N8, { title: _("webapp_login_form_account_recovery_pending_title") }),
          o.createElement(
            a.a7O,
            null,
            o.createElement(a.nvN, { color: a.colors.dashGreen01 }, _("webapp_login_form_account_recovery_pending_subtitle"))
          ),
          o.createElement(a.cNS, {
            primaryButtonTitle: _("webapp_login_form_account_recovery_pending_confirm"),
            primaryButtonOnClick: () => {
              l();
            },
            secondaryButtonTitle: u,
            secondaryButtonOnClick: p
          })
        );
      };
    },
    265727: (e, t, n) => {
      "use strict";
      n.d(t, { _: () => l });
      var o = n(696832),
        a = n(635164),
        r = n(441217),
        s = n(60043),
        i = n(201389),
        c = n(683463);
      const l = ({ handleDismiss: e, isAccountRecoveryRejected: t }) => {
        const { translate: n } = (0, i.Z)(),
          l = (0, a.k6)(),
          { routes: _ } = (0, s.Xo)(),
          u = () => {
            e();
          };
        return o.createElement(
          r.VqE,
          { closeIconName: n("_common_dialog_dismiss_button"), isOpen: t, onClose: u },
          o.createElement("div", { className: c.Z.icon }, o.createElement(r.enX, { size: 62, color: r.colors.functionalRed02 })),
          o.createElement(r.$N8, { title: n("webapp_account_recovery_rejection_title") }),
          o.createElement(
            r.a7O,
            null,
            o.createElement(r.nvN, { color: r.colors.dashGreen01 }, n("webapp_account_recovery_rejection_subtitle"))
          ),
          o.createElement(r.cNS, {
            primaryButtonTitle: n("webapp_account_recovery_rejection_dismiss"),
            primaryButtonOnClick: u,
            secondaryButtonTitle: n("webapp_account_recovery_rejection_try_again"),
            secondaryButtonOnClick: () => {
              l.replace(_.userDeviceRegistration);
            }
          })
        );
      };
    },
    472476: (e, t, n) => {
      "use strict";
      n.d(t, { T: () => c });
      var o = n(696832),
        a = n(201389),
        r = n(774931),
        s = n(285465);
      const i = {
        [s.EvaluatePasswordSuggestions.ADD_ANOTHER_WORD]: "account_creation_zxcvbn_add_another_word_or_two_uncommon_words_are_better",
        [s.EvaluatePasswordSuggestions.ALL_UPPERCASE]: "account_creation_zxcvbn_all_uppercase_is_almost_as_easy_to_guess_as_all_lowercase",
        [s.EvaluatePasswordSuggestions.AVOID_RECENT_YEARS]: "account_creation_zxcvbn_avoid_recent_years",
        [s.EvaluatePasswordSuggestions.AVOID_RELATED_DATES]: "account_creation_zxcvbn_avoid_dates_and_years_that_are_associated_with_you",
        [s.EvaluatePasswordSuggestions.AVOID_RELATED_YEARS]: "account_creation_zxcvbn_avoid_years_that_are_associated_with_you",
        [s.EvaluatePasswordSuggestions.AVOID_REPEATED]: "account_creation_zxcvbn_avoid_repeated_words_and_characters",
        [s.EvaluatePasswordSuggestions.AVOID_SEQUENCES]: "account_creation_zxcvbn_avoid_sequences",
        [s.EvaluatePasswordSuggestions.CAPITALIZATION]: "account_creation_zxcvbn_capitalization_doesnt_help_very_much",
        [s.EvaluatePasswordSuggestions.NO_NEED_FOR_SYMBOL]: "account_creation_zxcvbn_no_need_for_symbols_digits_or_uppercase_letters",
        [s.EvaluatePasswordSuggestions.PREDICTABLE_SUBSTITUTIONS]:
          "account_creation_zxcvbn_predictable_substitutions_like_at_instead_of_a_dont_help_very_much",
        [s.EvaluatePasswordSuggestions.REVERSED_WORDS]: "account_creation_zxcvbn_reversed_words_arent_much_harder_to_guess",
        [s.EvaluatePasswordSuggestions.USE_A_FEW_WORDS]: "account_creation_zxcvbn_use_a_few_words_avoid_common_phrases",
        [s.EvaluatePasswordSuggestions.USE_A_LONGER]: "account_creation_zxcvbn_use_a_longer_keyboard_pattern_with_more_turns",
        [s.EvaluatePasswordWarning.COMMON_NAMES]: "account_creation_zxcvbn_common_names_and_surnames_are_easy_to_guess",
        [s.EvaluatePasswordWarning.COMMON_PASSWORD]: "account_creation_zxcvbn_this_is_a_very_common_password",
        [s.EvaluatePasswordWarning.DATES_TOO_EASY]: "account_creation_zxcvbn_dates_are_often_easy_to_guess",
        [s.EvaluatePasswordWarning.NAMES]: "account_creation_zxcvbn_names_and_surnames_by_themselves_are_easy_to_guess",
        [s.EvaluatePasswordWarning.RECENT_YEARS]: "account_creation_zxcvbn_recent_years_are_easy_to_guess",
        [s.EvaluatePasswordWarning.REPEATS_EASY]: "account_creation_zxcvbn_repeats_like_aaa_are_easy_to_guess",
        [s.EvaluatePasswordWarning.REPEATS_SLIGHTLY_HARDER]:
          "account_creation_zxcvbn_repeats_like_abcabcabc_are_only_slightly_harder_to_guess_than_abc",
        [s.EvaluatePasswordWarning.SEQUENCES]: "account_creation_zxcvbn_sequences_like_abc_or_6543_are_easy_to_guess",
        [s.EvaluatePasswordWarning.SHORT_KEYBOARD_PATTERNS]: "account_creation_zxcvbn_short_keyboard_patterns_are_easy_to_guess",
        [s.EvaluatePasswordWarning.SIMILAR_COMMON_PASSWORD]: "account_creation_zxcvbn_this_is_similar_to_a_commonly_used_password",
        [s.EvaluatePasswordWarning.SINGLE_WORD]: "account_creation_zxcvbn_a_word_by_itself_is_easy_to_guess",
        [s.EvaluatePasswordWarning.STRAIGHT_ROWS]: "account_creation_zxcvbn_straight_rows_of_keys_are_easy_to_guess",
        [s.EvaluatePasswordWarning.TOP_100_COMMON_PASSWORD]: "account_creation_zxcvbn_this_is_a_top_100_common_password",
        [s.EvaluatePasswordWarning.TOP_10_COMMON_PASSWORD]: "account_creation_zxcvbn_this_is_a_top_10_common_password"
      };
      n(761682);
      const c = ({ children: e, id: t, passwordStrength: n, showTooltip: s }) => {
        const { translate: c } = (0, a.Z)(),
          l = ((e) => {
            if (!e || !e.feedback) return [];
            const { suggestions: t = [], warning: n } = e.feedback;
            return [...t.map((e) => i[e]), ...(n ? [i[n]] : [])];
          })(n);
        return o.createElement(
          r.Z,
          {
            destroyTooltipOnHide: !0,
            id: t,
            trigger: [],
            visible: s && l.length > 0,
            placement: "top",
            overlayClassName: "tooltipContainer--xsb1AhXlhs",
            overlay: o.createElement(
              "div",
              { className: "inner--ydeRHKlnlU" },
              o.createElement(
                "ul",
                null,
                l.map((e) => o.createElement("li", { key: `${t}${e}` }, c(e)))
              )
            )
          },
          o.createElement("div", null, e)
        );
      };
    },
    19835: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => te });
      var o = n(696832),
        a = n(635164),
        r = n(142897),
        s = (n(568030), n(295946)),
        i = n(974769),
        c = n(421548),
        l = n(66941),
        _ = n(218523),
        u = n(121911),
        p = n(447725),
        d = n(201389),
        m = n(530398),
        g = n(197606),
        h = n(51662),
        w = n(383849),
        E = n.n(w),
        f = n(233377),
        b = n(441217),
        v = n(332794),
        y = n(754674),
        S = n(968074),
        x = n(448081),
        T = n(764488);
      const C = { teamTrial: "/team/create", webAccount: "/account/create", memberAccount: "/member/create" },
        O = { teamTrial: "team_account_creation_", webAccount: "account_creation_", memberAccount: "member_account_creation_" };
      var N = n(812585);
      var A;
      const k = o.memo(() => {
        const e = {
          standardHeader: E()("standardHeader--KZAU9tYuXU"),
          logoContainer: E()("logoContainer--Sno28FgBRQ"),
          logo: E()("logo--dwbg5fgk4X"),
          tab: E()("tab--RqSTiGm5PV")
        };
        return o.createElement(N.A, {
          includeLockup: !0,
          classes: e,
          logoComponent: A || (A = o.createElement(a.rU, { to: "/", target: "_blank", rel: "noopener noreferrer" })),
          lockupSize: b.r1z.Size39
        });
      });
      var R = n(472476);
      const I = "wrapper--ZJuFdaKb8_",
        D = "content--h1Az1R7W53",
        Z = "inner--MhiMeaJ06f",
        P = "heading--G6oMw7P6Ry _headingBase--S56PdbmTz8",
        L = "subHeading--kBAdohsy6N _headingBase--S56PdbmTz8",
        M = "form--GSok6tWyZq",
        U = "formAction--aKLW_xTAiu",
        z = {
          disclaimer: "disclaimer--gddT7RHEq_",
          disclaimerUs: "disclaimerUs--EDTOrmhsVt",
          link: "link--qnhxaUYEXj",
          disclaimerCheckboxWrapper: "disclaimerCheckboxWrapper--BspJWiSBn3",
          visible: "visible--t9hayN3ENX",
          disclaimerCheckbox: "disclaimerCheckbox--YzSzpghB9E",
          consentCheckbox: "consentCheckbox--RlpVCZxGAN",
          consentLink: "consentLink--y8mwJYOM5b",
          backButtonContainer: "backButtonContainer--fvxB5zti4X",
          backButton: "backButton--h08HsRNzsD"
        };
      var F,
        B = (function (e) {
          return (
            (e.WRONG_PASSWORD_ERROR = "wrong_password"),
            (e.PASSWORDS_DONT_MATCH_ERROR = "passwords_dont_match"),
            (e.WEAK_PASSWORD_ERROR = "weak_password"),
            (e.SAME_MASTER_PASSWORD = "same_master_password"),
            e
          );
        })(B || {}),
        W = (function (e) {
          return (e.SUBMIT = "submit"), (e.ENCRYPTION_ADVANCED = "encryption_advanced"), (e.ENCRYPTION_STARTED = "encryption_started"), e;
        })(W || {});
      const V = ({ onSubmit: e, options: t, isEu: n }) => {
        const { translate: r } = (0, d.Z)(),
          [s, i] = (0, o.useState)(f.Maybe.nothing()),
          [c, _] = (0, o.useState)(f.Maybe.nothing()),
          [u, p] = (0, o.useState)(""),
          [m, g] = (0, o.useState)(null),
          {
            passwordStrength: h,
            resetPasswordStrength: w,
            setPasswordStrength: N,
            isPasswordStrengthScore: A,
            isPasswordStrongEnough: V
          } = (0, x.R)(),
          [j, q] = (0, o.useState)(""),
          [G, K] = (0, o.useState)(null),
          [$, H] = (0, o.useState)(!1),
          [X, Y] = (0, o.useState)(!1),
          [Q, J] = (0, o.useState)(W.SUBMIT),
          ee = (e) => {
            i(f.Maybe.maybe(e));
          };
        (0, o.useEffect)(() => {
          ee(!n);
        }, [n]);
        const te = (e) => {
            if (e) return r(O[t.flowIndicator] + "error_" + e);
          },
          ne = r.namespace(O[t.flowIndicator]),
          oe = ne.markup("confirm_terms_of_service_markup", {}, { linkTarget: "_blank" }),
          ae = ne("confirm_tips_and_offers_label"),
          re = null !== n;
        return o.createElement(
          "div",
          { className: I },
          F || (F = o.createElement(k, null)),
          o.createElement(
            "div",
            { className: D },
            o.createElement(
              "div",
              { className: Z },
              o.createElement("h1", { className: P }, ne("confirm_create_your_password")),
              o.createElement("h2", { className: L }, ne("confirm_subheader")),
              o.createElement(
                "form",
                {
                  className: M,
                  autoComplete: "off",
                  noValidate: !0,
                  onSubmit: (t) => {
                    if ((t.preventDefault(), u !== j)) return void K(B.PASSWORDS_DONT_MATCH_ERROR);
                    const o = { emailsTipsAndOffers: s, isEu: n, password: u, privacyPolicyAndToS: c };
                    J(W.ENCRYPTION_STARTED),
                      H(!0),
                      e(o).then(
                        () => {
                          H(!0), J(W.ENCRYPTION_ADVANCED);
                        },
                        () => {
                          H(!1), J(W.SUBMIT);
                        }
                      );
                  }
                },
                o.createElement(
                  "div",
                  { className: "createPasswordContainer--tiiyd9q8cb" },
                  o.createElement(
                    R.T,
                    { showTooltip: X, passwordStrength: h, id: "password-tooltip" },
                    o.createElement(
                      o.Fragment,
                      null,
                      o.createElement(b.WUg, {
                        id: "primaryPasswordInput",
                        showPasswordTooltipText: ne("password_show_label"),
                        hidePasswordTooltipText: ne("password_hide_label"),
                        onBlur: () => {
                          Y(!1), u && (u && !V ? g(B.WEAK_PASSWORD_ERROR) : j && u && u !== j && K(B.PASSWORDS_DONT_MATCH_ERROR));
                        },
                        onFocus: () => {
                          Y(!0);
                        },
                        onChange: async (e) => {
                          const t = e.target.value;
                          if ((p(t), m && g(null), G && K(null), "" === t && w(), "" !== t)) {
                            const e = await l.C.evaluatePassword({ password: t });
                            N(e);
                          }
                        },
                        placeholder: ne("password_hint_text"),
                        value: u,
                        label: ne("password_floating_label"),
                        feedbackType: m ? "error" : void 0,
                        feedbackText: m ? te(m) : ""
                      })
                    )
                  ),
                  h &&
                    A(h.score) &&
                    o.createElement(b.YVT, {
                      score: h.score,
                      showAdditionalText: !0,
                      additionalText: r(`${O[t.flowIndicator]}${T.Yh[h.score]}`)
                    })
                ),
                o.createElement(b.WUg, {
                  inputId: "secondaryPasswordInput",
                  value: j,
                  showPasswordTooltipText: ne("confirm_password_show_label"),
                  hidePasswordTooltipText: ne("confirm_password_hide_label"),
                  placeholder: ne("confirm_password_hint_text"),
                  onBlur: () => {
                    j && u !== j && K(B.PASSWORDS_DONT_MATCH_ERROR);
                  },
                  onChange: (e) => {
                    K(null), q(e.target.value);
                  },
                  label: ne("confirm_password_floating_label"),
                  feedbackType: G ? "error" : void 0,
                  feedbackText: G ? te(G) : ""
                }),
                o.createElement(
                  "div",
                  { className: E()(z.disclaimerCheckboxWrapper, re ? z.visible : {}) },
                  o.createElement(v.Z, {
                    label: ae,
                    labelClass: z.disclaimerCheckbox,
                    name: "emailsTipsAndOffers",
                    onCheck: ee,
                    checked: s.valueOr(!n)
                  })
                ),
                n &&
                  o.createElement(
                    "div",
                    { className: z.disclaimer },
                    o.createElement(v.Z, {
                      label: oe,
                      labelClass: E()(z.disclaimerCheckbox, z.mandatory),
                      name: "privacyPolicyAndToS",
                      onCheck: (e) => {
                        _(f.Maybe.maybe(e));
                      },
                      checked: c.valueOr(!1)
                    })
                  ),
                o.createElement(
                  "div",
                  { className: U },
                  o.createElement(y.Z, {
                    type: "submit",
                    size: "large",
                    label: ((se = Q), r(O[t.flowIndicator] + "button_text_" + se)),
                    disabled: !(!n || c.valueOr(!1)) || !(u && j && j === u && V),
                    loading: $,
                    classNames: ["nextButton--RcIAhT4SH2"]
                  })
                ),
                !n &&
                  o.createElement(
                    "p",
                    { className: E()(z.disclaimer, z.disclaimerUs) },
                    `${ne("content_form_disclaimer1")} `,
                    o.createElement(
                      S.Z,
                      {
                        href: "https://www.dashlane.com/terms",
                        title: ne("content_form_dashlane_terms_title"),
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: z.link
                      },
                      ne("content_form_dashlane_terms")
                    ),
                    ` ${ne("content_form_disclaimer2")} `,
                    o.createElement(
                      S.Z,
                      {
                        href: "https://www.dashlane.com/privacy",
                        title: ne("content_form_privacy_policy_title"),
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: z.link
                      },
                      ne("content_form_privacy_policy")
                    ),
                    ne("content_form_disclaimer3")
                  ),
                o.createElement(
                  "div",
                  { className: E()(z.disclaimerCheckbox, z.backButtonContainer) },
                  o.createElement(
                    "button",
                    {
                      disabled: $,
                      className: z.backButton,
                      onClick: (e) => {
                        e.preventDefault(), g(null), K(null), (0, a.uX)(C[t.flowIndicator]);
                      },
                      type: "button"
                    },
                    ne("confirm_back_button")
                  )
                )
              )
            )
          )
        );
        var se;
      };
      var j,
        q,
        G = n(695495),
        K = n(453576),
        $ = n(303724),
        H = n(583988);
      let X = "";
      try {
        X = window.sessionStorage?.accountCreationInfoLogin;
      } catch {}
      const Y = ({ lockedLoginValue: e, preFilledLoginValue: t, onSubmit: n, lee: a, options: r }) => {
        var s;
        const { translate: i } = (0, d.Z)(),
          [c, u] = (0, o.useState)(!1),
          [m, g] = (0, o.useState)(null != (s = null != e ? e : t) ? s : ""),
          [w, E] = (0, o.useState)(null),
          f = (0, o.createRef)(),
          v = (0, o.useRef)([]),
          y = () => {
            var e;
            return null != (e = f.current?.value.toLowerCase()) ? e : "";
          },
          S = m || X,
          x = O[r.flowIndicator];
        (0, o.useEffect)(() => {
          (v.current = v.current.concat([
            l.C.liveServiceProviderUrl.on((e) => {
              (0, p.nL)((0, p.C0)(e));
            })
          ])),
            _.Z.webAccountCreation.started({ anonymouscomputerid: a.globalState.logs.websiteTrackingId });
        }, []),
          (0, o.useEffect)(() => {
            m || g(X);
          }, [X]),
          (0, o.useEffect)(
            () => () => {
              u(!1), v.current.forEach((e) => e()), (v.current = []);
            },
            []
          );
        const T = (e) => {
            if (!e) return;
            let t;
            if ("sso_non_provisioned" === e) {
              const n = m,
                o = n.slice(n.indexOf("@") + 1);
              t = i(O[r.flowIndicator] + "error_" + e, { domain: o });
            } else
              t =
                "nitro_sso_extension_needed" === e
                  ? "You must use the Dashlane Extension to create your account."
                  : i(O[r.flowIndicator] + "error_" + e);
            return t;
          },
          C = (e) => {
            e.preventDefault();
            const t = { email: y(), isEu: null === a.carbon.currentLocation.isEu || a.carbon.currentLocation.isEu };
            if ((E((0, h.vV)(m) ? null : "invalid_email"), !((e) => (0, h.vV)(e.email))(t))) return;
            u(!0);
            const o = t.email;
            l.C.checkLogin(o)
              .then(({ accountCreationCode: e }) => {
                const t = e === K.AccountCreationCode.USER_EXISTS,
                  a = e !== K.AccountCreationCode.USER_DOESNT_EXIST_INVALID_MX,
                  r = e === K.AccountCreationCode.USER_DOESNT_EXIST_SSO_NON_PROVISIONED,
                  s = e === K.AccountCreationCode.USER_SSO_PROVISIONED || e === K.AccountCreationCode.USER_DOESNT_EXIST_SSO_NON_PROVISIONED,
                  i = e === K.AccountCreationCode.USER_NITRO_SSO_PROVISIONED;
                let c = null;
                a || (c = "invalid_email"),
                  r && (c = "sso_non_provisioned"),
                  t && (c = "account_already_exists"),
                  i && (c = "nitro_sso_extension_needed"),
                  E(c),
                  t || r || s || i || !a || n({ login: o });
              })
              .catch((e) => {
                a.dispatchGlobal($.Qy.error({ message: "Login validation failed", content: { error: e.message } }));
              })
              .finally(() => {
                u(!1);
              });
          };
        return (0, G.tZ)(
          "div",
          { className: I },
          j || (j = (0, G.tZ)(k, null)),
          (0, G.tZ)(
            "div",
            { className: D },
            (0, G.tZ)(
              "div",
              { className: Z },
              (0, G.tZ)("h1", { className: P }, i(x + "info_content_heading")),
              (0, G.tZ)("h2", { className: L + " e2e-createSubHeading" }, i(x + "info_content_subheading")),
              (0, G.tZ)(
                "form",
                { className: M, onSubmit: C },
                (0, G.tZ)(b.oil, {
                  id: "primaryEmailInput",
                  fullWidth: !0,
                  disabled: !!e,
                  type: "email",
                  placeholder: i(x + "email_hint_text"),
                  label: i(x + "email_floating_label"),
                  ref: f,
                  autoFocus: !X,
                  onBlur: () => {
                    E(!m || (0, h.vV)(m) ? null : "invalid_email");
                  },
                  onChange: () => {
                    E(null), g(y()), window.sessionStorage && (window.sessionStorage.accountCreationInfoLogin = y());
                  },
                  onKeyDown: (e) => {
                    "Enter" === e.key && C(e);
                  },
                  defaultValue: S,
                  key: e ? "predefined" : "real",
                  feedbackText: T(w),
                  feedbackType: T(w) ? "error" : void 0
                }),
                (0, G.tZ)(
                  "div",
                  { className: U },
                  (0, G.tZ)(
                    b.zxk,
                    { type: "submit", sx: { minWidth: "190px" }, size: "large", onClick: C, disabled: c },
                    c ? q || (q = (0, G.tZ)(H.Z, { size: 30, mode: "dark" })) : i(x + "button_next")
                  )
                )
              )
            )
          )
        );
      };
      var Q = n(955370);
      const J = {
          teamTrial: { info: "/team/create", confirm: "/team/create/confirm" },
          webAccount: { info: "/account/create", confirm: "/account/create/confirm" },
          memberAccount: { info: "/member/create", confirm: "/member/create/confirm" }
        },
        ee = ({ basePath: e, lee: t, options: n, location: w }) => {
          var E;
          const { translate: f } = (0, d.Z)(),
            b = new URLSearchParams(w.search),
            [v, y] = (0, o.useState)(null != (E = b.get("login")) ? E : b.get("email")),
            [S] = (0, o.useState)(v && (0, h.vV)(v) ? v : ""),
            [x, T] = (0, o.useState)("true" === b.get("forceStartOnWeb")),
            [C, O] = (0, o.useState)(!1);
          return (
            (0, o.useEffect)(() => {
              const e = new AbortController();
              return () => {
                e.abort();
              };
            }, []),
            C
              ? (0, r.tZ)(
                  "div",
                  { className: "loadingContainer--dgcyrXJk8Z" },
                  (0, r.tZ)(u.Z, {
                    height: 150,
                    width: 150,
                    animationParams: { renderer: "svg", animationData: c, loop: !0, autoplay: !0 }
                  })
                )
              : (0, r.tZ)(
                  o.Fragment,
                  null,
                  (0, r.tZ)(a.Vy, {
                    path: e,
                    exact: !0,
                    component: Y,
                    additionalProps: {
                      onSubmit: (e) => {
                        y(e.login), (0, a.uX)(J[n.flowIndicator].confirm);
                      },
                      lockedLoginValue: S,
                      preFilledLoginValue: v
                    },
                    options: n
                  }),
                  (0, r.tZ)(a.Vy, {
                    path: `${e}/confirm`,
                    component: V,
                    additionalProps: {
                      onSubmit: async (e) => {
                        const o = e;
                        if (!v) return;
                        const r = {
                          anonymousUserId: (0, s.n5)(t.globalState),
                          login: v,
                          password: o.password,
                          format: "US",
                          language: "en",
                          subscribe: o.emailsTipsAndOffers.valueOr(!1),
                          deviceName: (0, Q.M)(f("webapp_login_form_regsiter_fallback_browser_name"))
                        };
                        try {
                          const s = await l.C.createAccountStep1(r);
                          if (!s.valid) {
                            const e = new Error("accountCreationStep1.valid was not defined on confirm submit");
                            t.reportError(e), (0, a.uX)(J[n.flowIndicator].info);
                          }
                          if (e.isEu && !e.privacyPolicyAndToS.valueOr(!1)) {
                            const e = new Error("termsOfService set to false on confirm submit");
                            t.reportError(e), (0, a.uX)(J[n.flowIndicator].confirm);
                          }
                          const c = e.privacyPolicyAndToS.caseOf({
                              just: (e) => [{ consentType: "privacyPolicyAndToS", status: e }],
                              nothing: () => []
                            }),
                            u = { consentType: "emailsOffersAndTips", status: s.encryptSettingsRequest.subscribe },
                            d = {
                              createAccountResult: s,
                              options: { flowIndicator: n.flowIndicator },
                              isStandAlone: !1,
                              consents: [...c, u]
                            },
                            h = (0, g.D)();
                          l.C.createAccountStep2(d).then(({ m2dToken: e }) => {
                            var a;
                            let r;
                            "webAccount" === n.flowIndicator &&
                              _.Z.webAccountCreation.accountCreated({}, (e) => {
                                e && t.reportError(e, "Failed to connect with extension");
                              }),
                              (0, m.$)(h, o.emailsTipsAndOffers.valueOr(!1)),
                              ((e) => "teamTrial" === e)(n.flowIndicator)
                                ? (r = `${i.n2}#/members`)
                                : ((e) => "memberAccount" === e)(n.flowIndicator) &&
                                  (r = x
                                    ? "https://www.dashlane.com/business/download/saex"
                                    : `https://www.dashlane.com/download?m2dRawToken=${e}`),
                              (0, p.nL)(null != (a = r) ? a : `https://www.dashlane.com/download?m2dRawToken=${e}`);
                          });
                        } catch (e) {
                          t.reportError(e, "Account creation failed");
                        }
                      },
                      isEu: t.carbon.currentLocation.isEu,
                      dispatchGlobal: t.dispatchGlobal
                    },
                    options: n
                  })
                )
          );
        };
      function te({ path: e, options: t }) {
        return o.createElement(a.Vy, { exact: !0, path: [e, `${e}/confirm`], component: ee, additionalProps: { basePath: e }, options: t });
      }
    },
    178318: (e, t, n) => {
      "use strict";
      n.d(t, { L: () => i, Z: () => c });
      var o = n(495326),
        a = n.n(o),
        r = n(342868);
      let s = {};
      function i() {
        s = {};
      }
      class c {
        constructor({ login: e, uki: t, teamId: n } = { login: null, uki: null, teamId: null }) {
          (this._auth = void 0), (this._fetchRequests = []), (this._auth = { login: e, uki: t, teamId: n });
        }
        _debounce(e, t, n) {
          if (n) return t();
          s[e] || (s[e] = { isPending: !1, lastUpdateTimestamp: 0, promise: null });
          const { promise: o, isPending: a } = s[e];
          if (o && a) return o;
          s[e].isPending = !0;
          const r = this._isCacheUpToDate(e).then((n) =>
            n.isUpToDate && s[e]
              ? ((s[e].isPending = !1), s[e].response)
              : t().then((t) => {
                  if (!s[e]) throw new Error("Cache has been cleared");
                  return (s[e] = { promise: null, isPending: !1, response: t, lastUpdateTimestamp: n.remoteLastUpdateTimestamp }), t;
                })
          );
          return (s[e].promise = r), r;
        }
        async _isCacheUpToDate(e) {
          const t = await this._post({ apiVersion: 1, apiObject: "teamPlans" }, "getTeamLastUpdateTs");
          return "timestamp" in t
            ? { isUpToDate: Boolean(t.timestamp && s[e].lastUpdateTimestamp === t.timestamp), remoteLastUpdateTimestamp: t.timestamp }
            : { isUpToDate: !1, remoteLastUpdateTimestamp: 0 };
        }
        async _post({ apiVersion: e, apiObject: t }, n, o = {}) {
          o = Object.assign(o || {}, this._auth);
          const s = Object.keys(o),
            i = s.some((e) => o[e] instanceof File);
          o = i ? s.reduce((e, t) => (e.append(t, o[t]), e), new FormData()) : r.stringify(o);
          try {
            const r = (await a().post(`https://ws1.dashlane.com/${e}/${t}/${n}`, o)).data.content;
            if (!r) return {};
            if (r.error) {
              const e = { code: r.error, isError: !0 };
              return r.stripeError && (e.subCode = r.stripeError), e;
            }
            return r;
          } catch (e) {
            return { code: "Generic", isError: !0, message: e instanceof Error ? e.message : "Unexpected error" };
          }
        }
        fetch({ apiVersion: e, apiObject: t }, n, o = {}) {
          const a = { data: o.data || {}, noCache: !!o.noCache },
            r = `${t}${n}${e}`;
          return new Promise((o, s) =>
            this._debounce(r, () => this._post({ apiVersion: e, apiObject: t }, n, a.data), a.noCache).then((e) =>
              e.isError ? s(e) : o(e)
            )
          );
        }
        fetchAll() {
          const e = this._fetchRequests;
          return (this._fetchRequests = []), Promise.all(e.map((e) => this.fetch(e.params, e.apiMethod, e.data)));
        }
        push({ apiVersion: e, apiObject: t }, n, o) {
          this._fetchRequests.push({ params: { apiVersion: e, apiObject: t }, apiMethod: n, data: o });
        }
      }
    },
    447041: (e, t, n) => {
      "use strict";
      n.d(t, { N: () => v, Z: () => y });
      var o = n(648106),
        a = n(583266),
        r = n(923869),
        s = n(178318);
      class i {
        constructor(e) {
          (this._api = void 0), (this._api = e);
        }
      }
      const c = { apiVersion: 3, apiObject: "strongauth" };
      class l extends i {
        constructor(...e) {
          super(...e),
            (this._routeParams = c),
            (this.uploadDuoCsv = (e) =>
              this._api.fetch(this._routeParams, "importDuoUsernames", { data: { duoUsernamesCSV: e }, noCache: !0 }));
        }
      }
      const _ = { apiVersion: 1, apiObject: "feedback" };
      class u extends i {
        constructor(...e) {
          super(...e),
            (this._routeParams = _),
            (this.send = ({ body: e }) =>
              this._api.fetch(this._routeParams, "sendFeedback", {
                data: { body: e, source: "TAC", title: "A TAC Admin just wrote to us :" },
                noCache: !0
              }));
        }
      }
      var p = n(139378);
      const d = (e) => e.replace(/([A-Z])/g, (e, t) => `_${t.toLowerCase()}`),
        m = (e, t) => (null !== t ? { type: `set_${d(e)}`, value: t } : { type: `unset_${d(e)}` }),
        g = { apiVersion: 1, apiObject: "teamPlans" };
      class h extends i {
        constructor(...e) {
          super(...e),
            (this._routeParams = g),
            (this.addMembers = (e) =>
              this._api.fetch(this._routeParams, "proposeMembers", {
                data: { force: !0, proposedMemberLogins: JSON.stringify(e) },
                noCache: !0
              })),
            (this.addSeats = (e) => this._api.fetch(this._routeParams, "addSeats", { data: e, noCache: !0 })),
            (this.computePlanPricing = (e) => this._api.fetch(this._routeParams, "computePlanPricing", { data: e, noCache: !0 })),
            (this.getMembers = () => this._api.fetch(this._routeParams, "members")),
            (this.getADToken = () => this._api.fetch(this._routeParams, "getADToken")),
            (this.setSettings = (e) =>
              this._api.fetch(this._routeParams, "editSettings", {
                data: { operations: JSON.stringify((0, p.zipWith)((0, p.keys)(e), (0, p.values)(e), m)) },
                noCache: !0
              }));
        }
      }
      var w = n(295946);
      function E(e) {
        const t = (0, w.v0)(e);
        if (!t) return {};
        const n = new s.Z(t);
        return { feedback: new u(n), strongAuth: new l(n), teamPlans: new h(n) };
      }
      var f = n(482360),
        b = n(635164);
      const v = "Incorrect authentication";
      function y(e) {
        return {
          carbon: e.cursor.globalState.carbon,
          dispatchGlobal: e.cursor.dispatchGlobal,
          globalState: e.cursor.globalState,
          reportError: (t, n) => {
            const r = n ? (0, a.Z)(n, t) : (0, a.Z)(t);
            t.message === v || (t.data && t.data.content === v)
              ? (e.cursor.dispatchGlobal(o._e()), (0, b.uX)("/login"))
              : e.cursor.dispatchGlobal(r);
          },
          apiMiddleware: E(e.cursor.globalState),
          permission: (0, r.V)(e.cursor.globalState),
          routes: e.routes,
          styleVars: f.Z,
          translate: e.translate
        };
      }
    },
    991908: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => r });
      var o = n(447041);
      function a(e, t) {
        return function (n, o) {
          return n ? r(Object.assign({}, t, { cursor: t.cursor.child(n, o) })) : e;
        };
      }
      function r(e) {
        const t = (0, o.Z)(e);
        return Object.assign({}, t, { child: a(t, e), dispatch: e.cursor.dispatch, state: e.cursor.state });
      }
    },
    688167: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => x });
      var o = n(696832),
        a = n(969950),
        r = n(142897),
        s = n(148038),
        i = n(643892),
        c = n(676624),
        l = n(635164),
        _ = n(522999),
        u = n(868389),
        p = n(177704);
      function d(e, t, n) {
        const o = e[t] || (() => 0);
        e[t] = () => {
          o.call(e), n.call(e);
        };
      }
      class m extends o.Component {
        getChildContext() {
          return {};
        }
        constructor(e) {
          super(e),
            (function (e, t) {
              let n = null;
              const o = (function (e) {
                let t = !1;
                return () => {
                  t ||
                    ((t = !0),
                    window.requestAnimationFrame &&
                      window.requestAnimationFrame(() => {
                        e(), (t = !1);
                      }));
                };
              })(() => {
                n && e.forceUpdate();
              });
              d(e, "componentDidMount", () => {
                (n = t.subscribe(o)), o();
              }),
                d(e, "componentWillUnmount", () => {
                  n && n(), (n = null);
                });
            })(this, this.props.store);
        }
        render() {
          return o.Children.only(this.props.children);
        }
      }
      m.childContextTypes = {};
      var g = n(441217),
        h = (n(774513), n(208888));
      const w = ({ children: e }) => {
          const [, t] = (0, r.If)();
          return (
            o.useLayoutEffect(() => {
              const e = window.localStorage.getItem(h.x2);
              t("true" === e ? "dark" : "light"),
                document.documentElement.style.setProperty("color-scheme", "true" === e ? "dark" : "light");
            }, [t]),
            o.createElement(o.Fragment, null, e)
          );
        },
        E = (e) =>
          o.createElement(g.f6W, { theme: (0, r.It)(r.uH, g.uHP) }, o.createElement(r.SG, null, o.createElement(w, null, e.children))),
        f = (e) => o.createElement(E, null, o.createElement("div", null, o.Children.only(e.children))),
        b = (e) => o.createElement(f, null, o.createElement(m, { store: e.store }, o.Children.only(e.children)));
      var v = n(263907),
        y = n(755305),
        S = n(222924);
      const x = (e) => {
        const t = { host: e.host, basePath: e.basePath, reducer: v.Z, store: e.store, translate: e.translate, routes: e.namedRoutes };
        return (
          window.dispatchEvent(new Event("display-app")),
          o.createElement(
            b,
            { store: e.store },
            o.createElement(
              i.i,
              { client: e.coreClient },
              o.createElement(
                s.wz,
                { channel: c.Z },
                o.createElement(
                  l.F0,
                  { history: e.history },
                  o.createElement(
                    a.zt,
                    { store: e.store },
                    o.createElement(
                      _.b,
                      { value: { translate: e.translate } },
                      o.createElement(
                        u.u,
                        { portalId: "alert-popup-portal" },
                        o.createElement(
                          r.VW,
                          {
                            portalId: p.ex,
                            defaultCloseActionLabel: e.translate("_common_toast_close_label"),
                            sectionName: e.translate("_common_toast_section_name"),
                            itemName: e.translate("_common_toast_item_name")
                          },
                          o.createElement(
                            l.v1,
                            { value: t },
                            o.createElement(
                              S.G,
                              null,
                              o.createElement(y.r, { moduleName: "leeloo-routes", useCaseName: e.history.location.pathname }, e.routes)
                            )
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        );
      };
    },
    263907: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => r });
      var o = n(158432),
        a = n(1294);
      const r = (0, o.SP)("app", {}, [a.Z]);
    },
    974769: (e, t, n) => {
      "use strict";
      n.d(t, {
        $F: () => x,
        B9: () => ee,
        Bb: () => D,
        G9: () => M,
        GG: () => U,
        J: () => B,
        JQ: () => ue,
        Jw: () => G,
        Kn: () => h,
        M0: () => p,
        Ml: () => u,
        Mv: () => R,
        N5: () => ce,
        NO: () => I,
        NW: () => ie,
        Nq: () => N,
        P: () => T,
        QF: () => F,
        Qz: () => m,
        S: () => y,
        SF: () => S,
        Sb: () => W,
        Sm: () => O,
        TD: () => P,
        TT: () => v,
        U3: () => d,
        WK: () => J,
        WW: () => Q,
        Wt: () => _,
        XP: () => te,
        ZL: () => Z,
        _9: () => re,
        _G: () => b,
        _x: () => $,
        aS: () => l,
        bE: () => s,
        cO: () => w,
        ci: () => i,
        cm: () => z,
        ef: () => j,
        fL: () => H,
        g: () => c,
        lP: () => L,
        m$: () => le,
        mA: () => se,
        mE: () => ae,
        n2: () => K,
        qy: () => V,
        rI: () => Y,
        rM: () => E,
        rP: () => q,
        rR: () => A,
        sL: () => k,
        uN: () => C,
        v$: () => _e,
        vX: () => a,
        w0: () => f,
        wi: () => g,
        yE: () => X,
        zF: () => ne,
        zi: () => oe
      });
      var o = n(263272);
      let a = (function (e) {
        return (
          (e.ALL_APPS = "all-apps"),
          (e.TEAM_ADMIN_CONSOLE = "teamadminconsole"),
          (e.CLIENT = "client"),
          (e.WEB_ACCOUNT_CREATION = "webaccountcreation"),
          e
        );
      })({});
      const r = (e, t = "dashlane:///getpremium") => (o.isSafari() ? t : e),
        s = "/account-recovery",
        i = `${s}/admin-assisted-recovery`,
        c = `${s}/account-recovery-key`,
        l = "/account-recovery-key-result",
        _ = "/account-settings?view=recovery-key-reactivate",
        u = "/device-transfer-success",
        p = "/team",
        d = "/client/console",
        m = "/client/console/login",
        g = "/console",
        h = "/client",
        w = "/member",
        E = "/sso",
        f = "/directlogin",
        b = "/console/directlogin",
        v = "/login",
        y = "/console/login",
        S = "/signup",
        x = "/team/signup",
        T = "/console/signup",
        C = "/dependencies",
        O = "/loader",
        N = "/onboarding",
        A = "/chrome-welcome",
        k = "/auto-login-sso-success",
        R = "/delete-account",
        I = "/reset-account",
        D = "/recover-2fa-codes",
        Z = r("https://www.dashlane.com/plans/"),
        P = r("https://www.dashlane.com/getadvanced/"),
        L = r("https://www.dashlane.com/getessentials/"),
        M = r("https://www.dashlane.com/getpremium/"),
        U = r("https://www.dashlane.com/getfamily/"),
        z = "https://www.dashlane.com/referral",
        F = "https://www.dashlane.com/pricing?page=personal&currentPlan=free&variant=devices",
        B = "https://www.dashlane.com/account/reset/info",
        W = "https://www.dashlane.com/privacy",
        V = "https://www.dashlane.com/terms",
        j = "https://accounts.dashlane.com",
        q = "https://accounts.dashlane.com/payment?app=b2b",
        G = "https://accounts.dashlane.com/payment?app=b2c",
        K = "https://console.dashlane.com",
        $ = "https://support.dashlane.com/hc/articles/202625042-Protect-your-account-using-two-factor-authentication",
        H = "https://support.dashlane.com/hc/en-us/articles/202699211",
        X = "https://support.dashlane.com/hc/en-us/articles/115003111325-I-forgot-my-Master-Password",
        Y = "https://support.dashlane.com/hc/articles/11282971791634",
        Q = "https://support.dashlane.com/hc/articles/115005111905",
        J = "https://support.dashlane.com/hc/articles/7865163497618",
        ee = {
          DIRECTORY_SYNC: "/directory-sync",
          POLICIES: "/policies",
          SSO: "/sso",
          DUO: "/duo",
          MASTER_PASSWORD_POLICIES: "/master-password-policies"
        },
        te = "https://support.apple.com/HT204088",
        ne = "https://support.google.com/store/answer/6160235",
        oe = "dashlane.com",
        ae = "mailto:support@dashlane.com?subject=%5BGDPR%20Request%5D%20Right%20to%20Withdraw%20Consent",
        re = "mailto:support@dashlane.com?subject=%5BGDPR%20Request%5D%20Right%20to%20Erasure%20or%20to%20be%20Forgotten",
        se = "mailto:support@dashlane.com?subject=%5BGDPR%20Request%5D%20Right%20of%20Access",
        ie = "mailto:support@dashlane.com?subject=%5BGDPR%20Request%5D%20Right%20to%20Rectification",
        ce = "mailto:support@dashlane.com?subject=%5BGDPR%20Request%5D%20Right%20to%20Restriction%20of%20Processing",
        le = "mailto:support@dashlane.com?subject=%5BGDPR%20Request%5D%20Right%20to%20Data%20Portability",
        _e = "mailto:support@dashlane.com?subject=%5BGDPR%20Request%5D%20Right%20to%20Object",
        ue = "mailto:support@dashlane.com?subject=%5BGDPR%20Request%5D%20Right%20to%20Lodge%20a%20Complaint";
    },
    320815: (e, t, n) => {
      "use strict";
      n.d(t, { aH: () => a, cX: () => r });
      var o = n(342868);
      n(974769);
      const a = (e, t) => {
          const n = (0, o.stringify)({ subCode: t });
          return `${e}${n ? `?${n}` : ""}`;
        },
        r = (e) => [
          `${e}/account-settings`,
          `${e}/collections`,
          `${e}/credentials`,
          `${e}/device-transfer`,
          `${e}/passkeys`,
          `${e}/darkweb-monitoring`,
          `${e}/anti-phishing`,
          `${e}/go-premium`,
          `${e}/ids`,
          `${e}/import`,
          `${e}/notifications`,
          `${e}/onboarding`,
          `${e}/password-health`,
          `${e}/password-history`,
          `${e}/payments`,
          `${e}/personal-info`,
          `${e}/premium-plus`,
          `${e}/referral`,
          `${e}/secrets`,
          `${e}/secure-notes`,
          `${e}/sharing-center`,
          `${e}/subscription`,
          `${e}/vpn`,
          `${e}/family-dashboard`,
          `${e}/chrome-welcome`,
          `${e}/two-factor-authentication`,
          `${e}/account-recovery-key-result`,
          `${e}/auto-login-sso-success`,
          `${e}/device-transfer-success`,
          `${e}/console`,
          `${e}/dashlane-labs`,
          `${e}/privacy-settings`
        ];
    },
    228492: (e, t, n) => {
      "use strict";
      n.d(t, { t: () => Mr });
      var o,
        a = n(696832),
        r = n(635164),
        s = n(274166),
        i = n(974769),
        c = n(441217),
        l = n(695495);
      const { midGreen00: _ } = c.colors,
        u = () => {
          const [e, t] = (0, a.useState)([]),
            [n, r] = (0, a.useState)(""),
            [s, i] = (0, a.useState)(!1);
          return (
            (0, a.useEffect)(() => {
              i(!0),
                fetch("/assets/licenses.json")
                  .then(async (e) => {
                    const n = await e.json();
                    t(((e) => e.filter(({ licenses: e }) => "Dashlane" !== e))(n));
                  })
                  .catch(() => {
                    r("There was an error loading dependencies.");
                  })
                  .finally(() => {
                    i(!1);
                  });
            }, []),
            (0, l.tZ)(
              c.Ejs,
              { flexDirection: "column", alignItems: "center", sx: { m: "50px auto", p: "20px", maxWidth: "550px", bg: "neutrals.3" } },
              s ? (0, l.tZ)(c.HoD, { color: _, size: "75px", sx: { margin: "0 50%", position: "relative", left: "-37px" } }) : null,
              !s && n ? (0, l.tZ)(c.nvN, { color: "errors.5" }, n) : null,
              s || n
                ? null
                : (0, l.tZ)(
                    "div",
                    null,
                    o || (o = (0, l.tZ)(c.nvN, null, "3rd party packages used in this software along with their licenses:")),
                    (0, l.tZ)(
                      "ul",
                      null,
                      e.map(({ name: e, licenses: t, version: n }) =>
                        (0, l.tZ)(
                          c.nvN,
                          { as: "li", key: e + n, size: "small" },
                          (0, l.tZ)(c.rUS, { href: "https://www.npmjs.com/package/" + e }, e),
                          "@",
                          n,
                          ": ",
                          t
                        )
                      )
                    )
                  )
            )
          );
        };
      var p = n(808537);
      const d = () => {
        var e;
        const { routes: t } = (0, r.Xo)(),
          n = `${t.teamRoutesBasePath}/login`,
          o = (0, r.CN)(),
          s = null != (e = o.get("login")) ? e : "";
        s && o.append("email", s), o.delete("login");
        const i = `${n}?${o}`;
        return a.createElement(r.l_, { to: i });
      };
      var m = n(799852),
        g = n(929986),
        h = n(55510),
        w = n(957018),
        E = n(60043),
        f = n(245658);
      const b = () => {
        const e = (0, r.k6)(),
          { routes: t } = (0, E.Xo)();
        return a.createElement(f.j, {
          onOpenUserVault: () => {
            e.replace(t.clientRoutesBasePath);
          }
        });
      };
      var v = n(142897),
        y = n(148038),
        S = n(66941),
        x = n(503871),
        T = n(809205),
        C = n(656810),
        O = n(121911),
        N = n(201389),
        A = n(62429),
        k = n(660765);
      var R;
      var I = (function (e) {
        return (e.CODE_ERROR = "code_error"), e;
      })(I || {});
      const D = ["email_token", "totp", "u2f"],
        Z = ({ dispatchGlobal: e, setShowGenericRecoveryError: t }) => {
          const n = (0, r.k6)(),
            { routes: o } = (0, E.Xo)(),
            { translate: s } = (0, N.Z)(),
            i = (function () {
              const e = (0, y.qr)({ queryConfig: { query: S.C.getUserLogin } }, []);
              let t = "";
              return e.status === y.rq.Success && e.data && (t = e.data), t;
            })(),
            [l, _] = a.useState(""),
            [u, p] = a.useState(!1),
            [d, m] = a.useState(!0),
            [g, h] = a.useState(),
            [w, f] = a.useState(""),
            [b, Z] = a.useState(null),
            P = a.useRef(),
            L = () => S.C.requestEmailToken(),
            M = a.useCallback(async () => {
              if ("" !== i) {
                const e = await S.C.startAccountRecovery({ login: i });
                if (!e.success) return void f("");
                const t = e.verification[0]?.type;
                D.includes(t) ? f(t) : f("");
              }
            }, [i]);
          a.useEffect(
            () => (
              L(),
              M(),
              () => {
                clearTimeout(P.current);
              }
            ),
            [M]
          );
          const U = async (e) => {
              e.preventDefault();
              try {
                p(!0);
                const e = await S.C.registerDeviceForRecovery({ login: i, token: l });
                if ((p(!1), !e.success)) return void Z(I.CODE_ERROR);
                n.push(o.userCreateMasterPassword);
              } catch (e) {
                t(!0);
              }
            },
            z = "" === w || w === D[0];
          return (0, v.tZ)(
            "div",
            { className: "verifyAccountPanelContainer--HsKJRidmuy" },
            (0, v.tZ)(
              "div",
              { className: "content--HPbzWlOGN8" },
              (0, v.tZ)(x.r, { dispatchGlobal: e }),
              (0, v.tZ)(
                c.Ejs,
                { className: "inner--hpQi9UHEkx" },
                (0, v.tZ)(c.X6q, { size: "medium", className: "heading--SwRRkO4yt9" }, s("webapp_account_recovery_verify_account_title")),
                (0, v.tZ)(
                  c.nvN,
                  { size: "medium", color: c.colors.grey00 },
                  (() => {
                    let e = null;
                    return (
                      (e = s(
                        z
                          ? "webapp_account_recovery_security_code_description"
                          : "webapp_login_form_password_fieldset_security_code_otp_description"
                      )),
                      e
                    );
                  })()
                ),
                (0, v.tZ)(c.nvN, { className: "setEmail--m8QM72iC4D", bold: !0, size: "medium", color: c.colors.midGreen00 }, i),
                (0, v.tZ)(
                  "form",
                  { className: "form--P1i9dKGA_q", onSubmit: U },
                  (0, v.tZ)(c.rRH, {
                    autoFocus: !0,
                    value: l,
                    maxLength: 6,
                    inputMode: "numeric",
                    feedbackType: b ? "error" : void 0,
                    feedbackText: b === I.CODE_ERROR ? s("webapp_login_form_password_fieldset_security_code_error_token_not_valid") : "",
                    onChange: (e) => {
                      const t = e.target.value.replace(/\D/g, "");
                      6 === t.length ? m(!1) : m(!0), l !== t && (_(t), Z(null));
                    }
                  }),
                  (0, v.tZ)(
                    c.zxk,
                    { type: "submit", size: "large", onClick: U, className: "verifyButton--YXRqZgkug1", disabled: d || u },
                    u ? R || (R = (0, v.tZ)(c.HoD, null)) : s("webapp_account_recovery_verify_button")
                  )
                ),
                z
                  ? (0, v.tZ)(
                      "div",
                      null,
                      (0, v.tZ)(c.nvN, null, s("webapp_dashlane_authenticator_authentication_didnt_receive_code")),
                      (0, v.tZ)(
                        c.Ejs,
                        null,
                        (0, v.tZ)(
                          c.rUS,
                          {
                            onClick: async () => {
                              try {
                                (0, A.Kz)(new k.UserResendTokenEvent({})), _(""), m(!0), Z(null);
                                const e = await L();
                                h(e);
                              } catch (e) {
                                h({ success: !1, error: e });
                              }
                              P.current = setTimeout(() => {
                                h(void 0);
                              }, 2e3);
                            },
                            color: "ds.text.brand.quiet",
                            sx: { marginRight: "4px" }
                          },
                          s("webapp_login_form_password_fieldset_resend_token")
                        ),
                        g
                          ? (0, v.tZ)(
                              c.Ejs,
                              { style: { marginTop: "24px", marginBottom: "24px", flexWrap: "nowrap" } },
                              (0, v.tZ)(O.Z, {
                                height: 18.5,
                                width: 18.5,
                                animationParams: { renderer: "svg", animationData: g.success ? T : C, loop: !1, autoplay: !0 }
                              }),
                              (0, v.tZ)(
                                c.nvN,
                                { color: g.success ? "ds.text.positive.quiet" : "ds.text.danger.quiet", sx: { marginLeft: "4px" } },
                                s(g.success ? "webapp_login_form_password_fieldset_security_code_resent" : "_common_generic_error")
                              )
                            )
                          : null
                      )
                    )
                  : null
              )
            )
          );
        };
      var P = n(309448),
        L = n(383849),
        M = n.n(L),
        U = n(23600);
      let z = (function (e) {
        return (
          (e[(e.VERIFY_ACCOUNT = 0)] = "VERIFY_ACCOUNT"),
          (e[(e.CREATE_MASTER_PASSWORD = 1)] = "CREATE_MASTER_PASSWORD"),
          (e[(e.ACCOUNT_RECOVERY_REQUEST = 2)] = "ACCOUNT_RECOVERY_REQUEST"),
          e
        );
      })({});
      const F = "step--bHzEjZHWev",
        B = "stepIcon--m1fcOV0LM1",
        W = "stepActive--AWuyqApW12",
        V = "stepNonActive--bfkD23eyiV",
        j = "stepChecked--KfpXKQjMyz",
        q = "verticalLine--J5rpCcWlvj",
        G = ({ step: e }) => {
          const { translate: t } = (0, N.Z)();
          let n, o, a, r, s, i;
          switch (e) {
            case z.VERIFY_ACCOUNT:
              (n = (0, l.tZ)("div", { className: M()(B, W) }, "1")),
                (o = (0, l.tZ)("div", { className: M()(B, V) }, "2")),
                (a = (0, l.tZ)("div", { className: M()(B, V) }, "3")),
                (r = c.colors.dashGreen00),
                (s = c.colors.dashGreen00),
                (i = c.colors.dashGreen00);
              break;
            case z.CREATE_MASTER_PASSWORD:
              (n = (0, l.tZ)("div", { className: M()(B, j) }, (0, l.tZ)(c.nQG, { size: 16, color: c.colors.white }))),
                (o = (0, l.tZ)("div", { className: M()(B, W) }, "2")),
                (a = (0, l.tZ)("div", { className: M()(B, V) }, "3")),
                (r = c.colors.dashGreen02),
                (s = c.colors.dashGreen00),
                (i = c.colors.dashGreen00);
              break;
            case z.ACCOUNT_RECOVERY_REQUEST:
              (n = (0, l.tZ)("div", { className: M()(B, j) }, (0, l.tZ)(c.nQG, { size: 16, color: c.colors.white }))),
                (o = (0, l.tZ)("div", { className: M()(B, j) }, (0, l.tZ)(c.nQG, { size: 16, color: c.colors.white }))),
                (a = (0, l.tZ)("div", { className: M()(B, W) }, "3")),
                (r = c.colors.dashGreen02),
                (s = c.colors.dashGreen02),
                (i = c.colors.dashGreen00);
          }
          return (0, l.tZ)(
            U.L,
            null,
            (0, l.tZ)(
              "div",
              { className: "marketingContent--N8jldLHbmf" },
              (0, l.tZ)(
                "div",
                { className: "marketingInner--zPgP67OYQ2" },
                (0, l.tZ)(c.X6q, { caps: !0, size: "large" }, t("webapp_account_recovery_marketing_heading")),
                (0, l.tZ)(c.nvN, { sx: { paddingTop: "24px" }, size: "large" }, t("webapp_account_recovery_marketing_subheading")),
                (0, l.tZ)(
                  "div",
                  { className: "stepsContainer--RD_r0nw9HD" },
                  (0, l.tZ)(
                    "div",
                    { className: F },
                    n,
                    (0, l.tZ)(c.nvN, { sx: { padding: "12px" }, size: "large", color: r }, t("webapp_account_recovery_marketing_step_1"))
                  ),
                  (0, l.tZ)("div", { className: q }),
                  (0, l.tZ)(
                    "div",
                    { className: F },
                    o,
                    (0, l.tZ)(c.nvN, { sx: { padding: "12px" }, size: "large", color: s }, t("webapp_account_recovery_marketing_step_2"))
                  ),
                  (0, l.tZ)("div", { className: q }),
                  (0, l.tZ)(
                    "div",
                    { className: F },
                    a,
                    (0, l.tZ)(c.nvN, { sx: { padding: "12px" }, size: "large", color: i }, t("webapp_account_recovery_marketing_step_3"))
                  )
                )
              )
            )
          );
        },
        K = "panelsContainer--Ep6NC4HsfM",
        $ = ({ lee: e }) => {
          const [t, n] = a.useState(!1);
          return a.createElement(
            "div",
            { className: K },
            a.createElement(G, { step: z.VERIFY_ACCOUNT }),
            a.createElement(Z, { dispatchGlobal: e.dispatchGlobal, setShowGenericRecoveryError: n }),
            a.createElement(P.H, {
              isAccountRecoveryError: t,
              handleGenericRecoveryErrorClose: () => {
                n(!1);
              }
            })
          );
        };
      var H = n(441309);
      const X = ({ lee: e }) => {
          const t = (0, r.k6)(),
            { routes: n } = (0, E.Xo)(),
            [o, s] = a.useState(!1),
            [i, c] = a.useState("");
          return a.createElement(
            "div",
            { className: K },
            a.createElement(G, { step: z.CREATE_MASTER_PASSWORD }),
            a.createElement(H.R, {
              dispatchGlobal: e.dispatchGlobal,
              onSubmit: async (e) => {
                try {
                  const o = await S.C.setupMasterPasswordForRecovery({ masterPassword: e });
                  if (!o.success) return void c(o.error.code);
                  t.push(n.userSendRequest);
                } catch (e) {
                  s(!0);
                }
              },
              createMPForAccountRecovery: !0,
              showCreateMasterPasswordError: i
            }),
            a.createElement(P.H, {
              isAccountRecoveryError: o,
              handleGenericRecoveryErrorClose: () => {
                s(!1);
              }
            })
          );
        },
        Y = {
          recoveryRequestPanelContainer: "recoveryRequestPanelContainer--wUuT0bogUY",
          content: "content--Bi16jmKCeE",
          inner: "inner--O0fGjLUpxh",
          errorText: "errorText--wc3nqyQ5F9",
          sendButton: "sendButton--hMCJjwuniy",
          previousStepContainer: "previousStepContainer--iUqYAm4eN6"
        };
      var Q, J;
      const ee = ({ dispatchGlobal: e, setShowGenericRecoveryError: t }) => {
          const { translate: n } = (0, N.Z)(),
            o = (0, r.k6)(),
            [s, i] = a.useState(!1),
            { routes: _ } = (0, E.Xo)();
          return (0, l.tZ)(
            "div",
            { className: Y.recoveryRequestPanelContainer },
            (0, l.tZ)(
              "div",
              { className: Y.content },
              (0, l.tZ)(x.r, { dispatchGlobal: e }),
              (0, l.tZ)(
                "div",
                { className: Y.inner },
                (0, l.tZ)("div", { className: Y.iconHolder }, (0, l.tZ)(c.bV6, { color: c.colors.midGreen00, size: 70 })),
                (0, l.tZ)(c.X6q, { sx: { marginTop: "32px", marginBottom: "8px" } }, n("webapp_account_recovery_request_header")),
                (0, l.tZ)(c.nvN, { color: c.colors.grey00 }, n("webapp_account_recovery_request_description")),
                (0, l.tZ)(
                  c.Ejs,
                  { sx: { marginTop: "40px" }, justifyContent: "space-between" },
                  (0, l.tZ)(
                    r.rU,
                    { className: Y.previousStepContainer, to: _.userCreateMasterPassword, replace: !0 },
                    Q || (Q = (0, l.tZ)(c.xCe, { size: 14 })),
                    (0, l.tZ)(c.nvN, { sx: { marginLeft: "10px" } }, n("webapp_account_recovery_previous_step"))
                  ),
                  (0, l.tZ)(
                    c.zxk,
                    {
                      type: "button",
                      size: "large",
                      onClick: async () => {
                        try {
                          i(!0);
                          const e = await S.C.sendRecoveryRequest();
                          if ((i(!1), !e.success)) return void t(!0);
                          o.replace(_.userPendingRequest);
                        } catch (e) {
                          t(!0);
                        }
                      },
                      className: Y.sendButton,
                      disabled: s
                    },
                    s ? J || (J = (0, l.tZ)(c.HoD, null)) : n("webapp_account_recovery_request_confirm")
                  )
                )
              )
            )
          );
        },
        te = ({ lee: e }) => {
          const [t, n] = a.useState(!1);
          return a.createElement(
            "div",
            { className: K },
            a.createElement(G, { step: z.ACCOUNT_RECOVERY_REQUEST }),
            a.createElement(ee, { dispatchGlobal: e.dispatchGlobal, setShowGenericRecoveryError: n }),
            a.createElement(P.H, {
              isAccountRecoveryError: t,
              handleGenericRecoveryErrorClose: () => {
                n(!1);
              }
            })
          );
        },
        ne = "subheading--m6CV4agX6G";
      var oe = n(830803);
      const ae = () => {
        const { translate: e } = (0, N.Z)(),
          [t, n] = a.useState(!1),
          [o, r] = a.useState(!1);
        return a.createElement(
          a.Fragment,
          null,
          a.createElement(
            c.Ejs,
            { className: "standardHeader--ZXfog_ViVz", alignItems: "center", justifyContent: "space-between" },
            a.createElement(
              c.k$b,
              null,
              a.createElement(c.D1W, { color: c.vei.DashGreen, size: c.r1z.Size39, title: e("_common_dashlane_logo_title") })
            )
          ),
          a.createElement(
            c.Ejs,
            { className: "accountRecoveryContent--NmOxECHiFv", alignItems: "center", flexDirection: "column" },
            a.createElement("img", {
              src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzUyIiBoZWlnaHQ9IjIwNiIgdmlld0JveD0iMCAwIDM1MiAyMDYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0zMS41IDEyQzMxLjUgNS4zNzI1OCAzNi44NzI2IDAgNDMuNSAwSDMwNy41QzMxNC4xMjcgMCAzMTkuNSA1LjM3MjU4IDMxOS41IDEyVjE3OEgzMS41VjEyWiIgZmlsbD0iI0Q5RTZFOSIvPgo8cGF0aCBkPSJNMzUuNSAxNEMzNS41IDguNDc3MTUgMzkuOTc3MiA0IDQ1LjUgNEgzMDUuNUMzMTEuMDIzIDQgMzE1LjUgOC40NzcxNSAzMTUuNSAxNFYxNzhIMzUuNVYxNFoiIGZpbGw9IiMwRTM1M0QiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNzguNzUgNzYuOEwxNzguNzUgNzkuNDUwOEwxNzIuOCA4My40MTc0Vjk3LjhIMTYxLjhWMTAzLjhIMTc1LjhIMTc4LjhWMTAwLjhWNzYuOEgxNzguNzVaIiBmaWxsPSIjQ0ZFMEU0Ii8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTkwLjYyMyAxMTguMjhDMTg2LjUxMSAxMjEuMjUgMTgxLjQ2IDEyMyAxNzYgMTIzQzE2Mi4xOTMgMTIzIDE1MSAxMTEuODA3IDE1MSA5OEMxNTEgODQuMTkyOSAxNjIuMTkzIDczIDE3NiA3M0MxODkuODA3IDczIDIwMSA4NC4xOTI5IDIwMSA5OEMyMDEgMTAzLjQ2IDE5OS4yNSAxMDguNTExIDE5Ni4yOCAxMTIuNjIzTDIwMC41NjcgMTE2LjkxQzIwNC42MDEgMTExLjY3NyAyMDcgMTA1LjExOSAyMDcgOThDMjA3IDgwLjg3OTIgMTkzLjEyMSA2NyAxNzYgNjdDMTU4Ljg3OSA2NyAxNDUgODAuODc5MiAxNDUgOThDMTQ1IDExNS4xMjEgMTU4Ljg3OSAxMjkgMTc2IDEyOUMxODMuMTE4IDEyOSAxODkuNjc3IDEyNi42MDEgMTk0LjkxIDEyMi41NjdMMTkwLjYyMyAxMTguMjhaIiBmaWxsPSIjQ0ZFMEU0Ii8+CjxwYXRoIGQ9Ik0wLjUgMTc4SDM1MS41VjE5MEMzNTEuNSAxOTMuMzE0IDM0OC44MTQgMTk2IDM0NS41IDE5Nkg2LjVDMy4xODYyOSAxOTYgMC41IDE5My4zMTQgMC41IDE5MFYxNzhaIiBmaWxsPSIjRDlFNkU5Ii8+Cjwvc3ZnPgo=",
              alt: e("webapp_account_recovery_request_laptop_alt_tag")
            }),
            a.createElement("h1", { className: "heading--uoul9OhZJX" }, e("webapp_account_recovery_request_sent_header")),
            a.createElement("p", { className: ne }, e("webapp_account_recovery_request_sent_recieve_email")),
            a.createElement("p", { className: ne }, e("webapp_account_recovery_request_sent_contact_admin")),
            a.createElement(
              c.zxk,
              {
                className: "cancelRequestButton--xkP9XaRiYO",
                nature: "secondary",
                type: "button",
                onClick: () => {
                  n(!0);
                }
              },
              e("webapp_account_recovery_request_sent_label")
            ),
            a.createElement(oe.w, {
              showCancelRequestDialog: t,
              handleDismiss: () => {
                n(!1);
              },
              handleShowGenericRecoveryError: () => {
                r(!0);
              }
            }),
            a.createElement(P.H, {
              isAccountRecoveryError: o,
              handleGenericRecoveryErrorClose: () => {
                r(!1);
              }
            })
          )
        );
      };
      function re({ path: e }) {
        return a.createElement(
          r.GB,
          { path: e },
          a.createElement(
            r.rs,
            null,
            a.createElement(r.l_, { exact: !0, from: `${e}/`, to: `${e}/device-registration` }),
            a.createElement(r.Vy, {
              permission: (e) => !e.loggedIn,
              redirectPath: "/",
              exact: !0,
              path: `${e}/device-registration`,
              component: $
            }),
            a.createElement(r.Vy, {
              permission: (e) => !e.loggedIn,
              redirectPath: "/",
              exact: !0,
              path: `${e}/create-master-password`,
              component: X
            }),
            a.createElement(r.Vy, {
              permission: (e) => !e.loggedIn,
              redirectPath: "/",
              exact: !0,
              path: `${e}/send-request`,
              component: te
            }),
            a.createElement(r.Vy, {
              permission: (e) => !e.loggedIn,
              redirectPath: "/",
              exact: !0,
              path: `${e}/pending-request`,
              component: ae
            }),
            a.createElement(r.Vy, { exact: !0, path: `${e}/change-master-password`, component: b })
          )
        );
      }
      var se = n(15192),
        ie = n(764130),
        ce = n(201705),
        le = n(482598),
        _e = n(55548),
        ue = n(664319),
        pe = n(110958);
      const de = {
          ACCOUNT_RECOVERY_STEP_COUNT: "login_confirm_account_recovery_key_step_count",
          CONFIRM_ARK_STEP_TITLE: "login_confirm_account_recovery_key_step_title",
          CONFIRM_ARK_STEP_DESCRIPTION: "login_confirm_account_recovery_key_step_description",
          CONFIRM_ARK_STEP_INPUT_LABEL: "webapp_account_recovery_key_input_label",
          CONFIRM_ARK_STEP_INPUT_PLACEHOLDER: "webapp_account_recovery_key_input_placeholder",
          CONFIRM_ARK_STEP_CANCEL: "_common_action_cancel",
          CONFIRM_ARK_STEP_CONTINUE: "_common_action_continue",
          WRONG_RECOVERY_KEY_ERROR: "webapp_account_recovery_key_third_step_wrong_key_error",
          GENERIC_ERROR: "_common_generic_error"
        },
        me = ({ onSubmit: e, onCancel: t, error: n }) => {
          const { translate: o } = (0, N.Z)(),
            { trackPageView: s } = (0, _e.D)();
          (0, a.useEffect)(() => {
            s({ pageView: k.PageView.LoginMasterPasswordAccountRecoveryEnterRecoveryKey });
          }, []);
          const {
            inputValue: _,
            isInputValid: u,
            handleChangeInputValue: p
          } = (function () {
            const [e, t] = (0, a.useState)("");
            return {
              inputValue: e,
              isInputValid: e.length === pe.Yh,
              handleChangeInputValue: (e) => {
                const n = ("string" == typeof e ? e : e.target.value).replaceAll("-", "").toUpperCase();
                t(n);
              }
            };
          })();
          return (0, l.tZ)(
            a.Fragment,
            null,
            (0, l.tZ)(c._m8, { size: 77, color: "ds.text.brand.quiet", sx: { margin: "0px 0 53px 12px" } }),
            (0, l.tZ)(
              v.nv,
              { color: "ds.text.neutral.quiet", sx: { marginBottom: "8px" } },
              o(de.ACCOUNT_RECOVERY_STEP_COUNT, { count: 1, total: 2 })
            ),
            (0, l.tZ)(v.X6, { as: "h1", textStyle: "ds.title.section.large", sx: { margin: "0 0 24px 0" } }, o(de.CONFIRM_ARK_STEP_TITLE)),
            (0, l.tZ)(v.nv, { sx: { marginBottom: "34px" } }, o(de.CONFIRM_ARK_STEP_DESCRIPTION)),
            (0, l.tZ)(
              c.k$b,
              { sx: { width: "100%", marginBottom: "36px" } },
              (0, l.tZ)(ue.C, { value: _, onChange: p, error: n && o(de[null != n ? n : "GENERIC_ERROR"]) })
            ),
            (0, l.tZ)(
              c.Ejs,
              { justifyContent: "flex-end", sx: { width: "100%" }, flexDirection: "row" },
              (0, l.tZ)(
                v.zx,
                {
                  intensity: "quiet",
                  mood: "neutral",
                  sx: { marginRight: "8px" },
                  onClick: () => {
                    t(), (0, A.Kz)(new k.UserUseAccountRecoveryKeyEvent({ flowStep: k.FlowStep.Cancel })), (0, r.uX)(i.TT);
                  }
                },
                o(de.CONFIRM_ARK_STEP_CANCEL)
              ),
              (0, l.tZ)(
                v.zx,
                {
                  mood: "brand",
                  disabled: !u,
                  onClick: () => {
                    e({ recoveryKey: _ });
                  }
                },
                o(de.CONFIRM_ARK_STEP_CONTINUE)
              )
            )
          );
        };
      var ge,
        he = n(41177),
        we = n(370947),
        Ee = n(355612);
      const fe = ({ onSubmit: e, onCancel: t }) => {
          const { translate: n } = (0, N.Z)(),
            { trackPageView: o } = (0, _e.D)(),
            [s, l] = (0, a.useState)(!1),
            _ = (0, r.Xo)();
          return (
            (0, a.useEffect)(() => {
              o({ pageView: k.PageView.LoginMasterPasswordAccountRecoveryCreateNewMp });
            }, []),
            (0, v.tZ)(
              c.Ejs,
              { sx: { flexDirection: "column", alignItems: "start", textAlign: "left" } },
              (0, v.tZ)(we.x, {
                showPasswordTipsDialog: s,
                handleDismiss: () => {
                  l(!1);
                }
              }),
              ge || (ge = (0, v.tZ)(c._m8, { color: "ds.text.brand.quiet", size: 72 })),
              (0, v.tZ)(
                v.nv,
                { color: "ds.text.neutral.quiet", sx: { marginBottom: "8px" } },
                n("login_confirm_account_recovery_key_step_count", { count: 2, total: 2 })
              ),
              (0, v.tZ)(
                v.X6,
                { as: "h1", textStyle: "ds.title.section.large", sx: { margin: "0 0 24px 0" } },
                n("login_account_recovery_key_create_password_step_title")
              ),
              (0, v.tZ)(v.nv, null, n("login_account_recovery_key_create_password_step_help_1")),
              (0, v.tZ)(v.nv, { sx: { margin: "16px 0" } }, n("login_account_recovery_key_create_password_step_help_2")),
              (0, v.tZ)(
                c.rUS,
                {
                  href: "#",
                  role: "button",
                  onClick: (e) => {
                    e.preventDefault(), l(!0);
                  },
                  sx: { display: "block", margin: "0 0 24px 0", color: "ds.text.brand.quiet" }
                },
                n("webapp_account_security_settings_changemp_panel_infotext")
              ),
              (0, v.tZ)(he.f, {
                onDismiss: () => {
                  t(), (0, A.Kz)(new k.UserUseAccountRecoveryKeyEvent({ flowStep: k.FlowStep.Cancel })), (0, r.uX)(i.TT);
                },
                onSubmit: (t) => {
                  _.store.dispatch((0, Ee.zi)(i.aS)), e({ password: t });
                },
                primaryButtonTitle: n("_common_action_continue"),
                secondaryButtonTitle: n("_common_action_cancel"),
                createPasswordInputLabel: n("login_account_recovery_key_create_password_step_password_field_label"),
                createPasswordPlaceholderLabel: n("login_account_recovery_key_create_password_step_password_field_placeholder"),
                confirmPasswordInputLabel: n("login_account_recovery_key_create_password_step_confirm_password_field_label"),
                confirmPasswordPlaceholderLabel: n("login_account_recovery_key_create_password_step_confirm_password_field_placeholder")
              })
            )
          );
        },
        be = () => {
          const { translate: e } = (0, N.Z)();
          return (0, v.tZ)(
            c.Ejs,
            { sx: { flexDirection: "column", margin: "0 auto", textAlign: "center", alignItems: "center" } },
            (0, v.tZ)(c.HoD, { size: 78, color: v.O9.lightTheme.ds.text.brand.quiet, strokeWidth: 1 }),
            (0, v.tZ)(
              v.X6,
              { as: "h1", textStyle: "ds.title.section.large", sx: { margin: "61px 0 24px" } },
              e("login_account_recovery_key_processing_request")
            )
          );
        };
      var ve = n(611433),
        ye = n(788355),
        Se = n(110551),
        xe = n(837533),
        Te = n(290287);
      const Ce = {
          TOKEN_NOT_VALID: "webapp_account_security_settings_two_factor_authentication_turn_off_authenticator_invalid_security_code",
          TOKEN_EXPIRED: "webapp_login_form_password_fieldset_security_code_error_token_expired",
          TOKEN_TOO_MANY_ATTEMPTS: "webapp_login_form_password_fieldset_security_code_error_token_too_many_attempts",
          TOKEN_ACCOUNT_LOCKED: "webapp_login_form_password_fieldset_security_code_error_token_account_locked",
          UNKNOWN_ERROR: "webapp_login_form_password_fieldset_security_code_error_unkown",
          NETWORK_ERROR: "webapp_login_form_password_fieldset_network_error_offline"
        },
        Oe = ({
          error: e,
          isLoading: t,
          isDashlaneAuthenticatorAvailable: n,
          resendEmailToken: o,
          switchToDashlaneAuthenticator: s,
          submitEmailToken: l,
          cancelAccountRecoveryKey: _,
          clearInputError: u
        }) => {
          var p;
          const { translate: d } = (0, N.Z)(),
            [m, g] = (0, a.useState)(!1),
            h = { display: "flex", flexDirection: "column", gap: "4px", lineHeight: "20px" },
            {
              setFieldValue: w,
              handleSubmit: E,
              values: { emailToken: f }
            } = (0, ye.TA)({
              initialValues: { emailToken: "" },
              onSubmit: ({ emailToken: e }) => {
                l({ emailToken: e, deviceName: Se.getDefaultDeviceName() });
              }
            });
          return (0, v.tZ)(
            "form",
            { onSubmit: E },
            (0, v.tZ)(Te.ae, {
              title: d("webapp_login_form_password_fieldset_security_code_description"),
              securityToken: f,
              maxLength: xe.N3,
              onTokenInputChange: (e) => {
                const {
                  target: { value: t }
                } = e;
                u(), w("emailToken", ((e) => e.replace(/\D/g, ""))(t)), t.length === xe.N3 && E();
              },
              errorMessage: e ? d(null != (p = Ce[e]) ? p : Ce.UNKNOWN_ERROR) : void 0
            }),
            (0, v.tZ)(
              c.Ejs,
              { flexDirection: "row", sx: { margin: "24px 0px 16px" } },
              (0, v.tZ)(
                c.nvN,
                { color: "ds.text.neutral.quiet", sx: { ...h, marginRight: "4px" } },
                d("webapp_dashlane_authenticator_authentication_didnt_receive_code")
              ),
              (0, v.tZ)(
                c.rUS,
                {
                  onClick: () => {
                    (0, A.Kz)(new k.UserResendTokenEvent({})),
                      o(),
                      g(!0),
                      setTimeout(() => {
                        g(!1);
                      }, xe.Rq);
                  },
                  color: "ds.text.brand.quiet",
                  sx: { marginRight: "4px" }
                },
                d("webapp_login_form_password_fieldset_resend_token")
              )
            ),
            m
              ? (0, v.tZ)(
                  c.Ejs,
                  { style: { marginTop: "24px", marginBottom: "24px" } },
                  (0, v.tZ)(O.Z, {
                    height: 18.5,
                    width: 18.5,
                    animationParams: { renderer: "svg", animationData: T, loop: !1, autoplay: !0 }
                  }),
                  (0, v.tZ)(
                    c.nvN,
                    { color: "ds.text.positive.quiet", sx: { marginLeft: "4px" } },
                    d("webapp_login_form_password_fieldset_security_code_resent")
                  )
                )
              : null,
            n
              ? (0, v.tZ)(
                  c.Ejs,
                  { flexDirection: "row" },
                  (0, v.tZ)(
                    c.nvN,
                    { color: "ds.text.neutral.quiet", sx: { ...h, marginRight: "4px" } },
                    d("webapp_dashlane_authenticator_authentication_cant_access_your_email")
                  ),
                  (0, v.tZ)(
                    c.rUS,
                    {
                      onClick: () => {
                        s();
                      },
                      color: "ds.text.brand.quiet"
                    },
                    d("webapp_dashlane_authenticator_authentication_use_dashlane_authenticator_app")
                  )
                )
              : null,
            (0, v.tZ)(
              "div",
              { sx: { display: "flex", flexDirection: "row", justifyContent: "flex-end", marginTop: "42px" } },
              (0, v.tZ)(
                v.zx,
                {
                  id: "cancel-button",
                  "data-testid": "cancel-button",
                  mood: "neutral",
                  intensity: "quiet",
                  sx: { marginRight: "16px" },
                  onClick: () => {
                    _(), (0, A.Kz)(new k.UserUseAccountRecoveryKeyEvent({ flowStep: k.FlowStep.Cancel })), (0, r.uX)(i.TT);
                  }
                },
                d("_common_action_cancel")
              ),
              (0, v.tZ)(
                v.zx,
                {
                  type: "submit",
                  id: "extng-submit-email-token-button",
                  "data-testid": "login-button",
                  isLoading: t,
                  disabled: f.length < 6,
                  onClick: () => E()
                },
                d("login_verify_your_identity_step_button")
              )
            )
          );
        };
      var Ne = n(453576);
      const Ae = {
          EMPTY_OTP: "webapp_login_form_password_fieldset_security_code_error_empty_otp",
          OTP_NOT_VALID: "webapp_account_security_settings_two_factor_authentication_turn_off_authenticator_invalid_security_code",
          OTP_ALREADY_USED: "webapp_login_form_password_fieldset_security_code_error_otp_already_used",
          OTP_TOO_MANY_ATTEMPTS: "webapp_login_form_password_fieldset_security_code_error_token_too_many_attempts",
          UNKNOWN_ERROR: "webapp_login_form_password_fieldset_security_code_error_unkown",
          NETWORK_ERROR: "webapp_login_form_password_fieldset_network_error_offline"
        },
        ke = RegExp("^[0-9]{6}$"),
        Re = { display: "flex", flexDirection: "column", gap: "4px", lineHeight: "20px" },
        Ie = ({
          error: e,
          isLoading: t,
          submitTotp: n,
          changeTwoFactorAuthenticationOtpType: o,
          cancelAccountRecoveryKey: s,
          clearInputError: l
        }) => {
          var _;
          const { translate: u } = (0, N.Z)(),
            [p, d] = (0, a.useState)(!1),
            m = (0, a.useRef)();
          (0, a.useEffect)(() => {
            e && (d(m.current === e && e === Ne.AuthenticationCode[Ne.AuthenticationCode.OTP_NOT_VALID]), (m.current = e));
          }, [e]);
          const {
            setFieldValue: g,
            handleSubmit: h,
            values: { twoFactorAuthenticationOtpValue: w }
          } = (0, ye.TA)({
            initialValues: { twoFactorAuthenticationOtpValue: "" },
            onSubmit: ({ twoFactorAuthenticationOtpValue: e }) => {
              n({ twoFactorAuthenticationOtpValue: e });
            }
          });
          return (0, v.tZ)(
            "form",
            { onSubmit: h },
            (0, v.tZ)(Te.ae, {
              title: u("webapp_login_form_password_fieldset_security_code_otp_description"),
              securityToken: w,
              maxLength: xe.N3,
              onTokenInputChange: (e) => {
                const {
                  target: { value: t }
                } = e;
                l(), g("twoFactorAuthenticationOtpValue", ((e) => e.replace(/\D/g, ""))(t)), ke.test(t) && h();
              },
              errorMessage: e ? u(null != (_ = Ae[e]) ? _ : Ae.UNKNOWN_ERROR) : void 0
            }),
            p
              ? (0, v.tZ)(v.ke, {
                  sx: { marginTop: "24px" },
                  title: u.markup(
                    "webapp_two_factor_authentication_sync_devices_time_infobox_markup",
                    { supportArticleLink: i.fL },
                    { linkTarget: "_blank" }
                  ),
                  mood: "brand",
                  size: "small"
                })
              : null,
            (0, v.tZ)(
              c.Ejs,
              { flexDirection: "row", sx: { margin: "24px 0px 16px" } },
              (0, v.tZ)(
                c.nvN,
                { color: "ds.text.neutral.quiet", sx: { ...Re, marginRight: "4px" } },
                u("webapp_two_factor_authentication_cant_access_your_app")
              ),
              (0, v.tZ)(
                c.rUS,
                { onClick: () => o({ twoFactorAuthenticationOtpType: "backupCode" }), color: "ds.text.brand.quiet", target: "_self" },
                u("webapp_two_factor_authentication_use_backup_code")
              )
            ),
            (0, v.tZ)(
              c.Ejs,
              { flexDirection: "row" },
              (0, v.tZ)(
                c.nvN,
                { color: "ds.text.neutral.quiet", sx: { ...Re, marginRight: "4px" } },
                u("webapp_two_factor_authentication_lost_your_phone")
              ),
              (0, v.tZ)(
                c.rUS,
                { color: "ds.text.brand.quiet", href: xe.IT, target: "_blank", rel: "noopener noreferrer" },
                u("webapp_two_factor_authentication_reset_2fa")
              )
            ),
            (0, v.tZ)(
              "div",
              { sx: { display: "flex", flexDirection: "row", justifyContent: "flex-end", marginTop: "40px" } },
              (0, v.tZ)(
                v.zx,
                {
                  id: "cancel-button",
                  "data-testid": "cancel-button",
                  mood: "neutral",
                  intensity: "quiet",
                  sx: { marginRight: "16px" },
                  onClick: () => {
                    s(), (0, A.Kz)(new k.UserUseAccountRecoveryKeyEvent({ flowStep: k.FlowStep.Cancel })), (0, r.uX)(i.TT);
                  }
                },
                u("_common_action_cancel")
              ),
              (0, v.tZ)(
                v.zx,
                { type: "submit", "data-testid": "submitTotp", isLoading: t, disabled: w.length < 6 },
                u("login_verify_your_identity_step_button")
              )
            )
          );
        },
        De = {
          EMPTY_OTP: "webapp_login_form_password_fieldset_security_code_error_otp_not_valid",
          EMPTY_TOKEN: "webapp_login_form_password_fieldset_security_code_error_empty_token",
          TOKEN_NOT_VALID: "webapp_login_form_password_fieldset_security_code_error_token_not_valid",
          TOKEN_LOCKED: "webapp_login_form_password_fieldset_security_code_error_token_locked",
          TOKEN_TOO_MANY_ATTEMPTS: "webapp_login_form_password_fieldset_security_code_error_token_too_many_attempts",
          TOKEN_ACCOUNT_LOCKED: "webapp_login_form_password_fieldset_security_code_error_token_account_locked",
          TOKEN_EXPIRED: "webapp_login_form_password_fieldset_security_code_error_token_expired",
          UNKNOWN_ERROR: "webapp_login_form_password_fieldset_security_code_error_unkown",
          THROTTLED: "webapp_login_form_password_fieldset_error_throttled",
          NETWORK_ERROR: "webapp_login_form_password_fieldset_network_error_offline"
        },
        Ze = { display: "flex", flexDirection: "column", gap: "4px", lineHeight: "20px" },
        Pe = ({ error: e, isLoading: t, submitBackupCode: n, changeTwoFactorAuthenticationOtpType: o, cancelAccountRecoveryKey: s }) => {
          var l;
          const { translate: _ } = (0, N.Z)(),
            u = (0, a.useRef)(null),
            {
              setFieldValue: p,
              handleSubmit: d,
              values: { twoFactorAuthenticationOtpValue: m }
            } = (0, ye.TA)({
              initialValues: { twoFactorAuthenticationOtpValue: "" },
              onSubmit: ({ twoFactorAuthenticationOtpValue: e }) => {
                n({ twoFactorAuthenticationOtpValue: e }), u.current?.focus();
              }
            });
          return (0, v.tZ)(
            "form",
            { onSubmit: d },
            (0, v.tZ)(
              c.nvN,
              { color: "ds.text.neutral.quiet", sx: { marginBottom: "16px" } },
              _("webapp_two_factor_authentication_use_backup_codes")
            ),
            (0, v.tZ)(v.qo, {
              value: m,
              label: _("webapp_two_factor_authentication_backup_code_label"),
              onChange: (e) => {
                const {
                  target: { value: t }
                } = e;
                p("twoFactorAuthenticationOtpValue", t);
              },
              error: !!e,
              ref: u,
              feedback: e ? { id: "login-feedback-text", text: _(null != (l = De[e]) ? l : De.UNKNOWN_ERROR) } : void 0,
              autoFocus: !0
            }),
            (0, v.tZ)(
              c.Ejs,
              { flexDirection: "row", sx: { margin: "24px 0px 16px" } },
              (0, v.tZ)(
                c.nvN,
                { color: "ds.text.neutral.quiet", sx: { ...Ze, marginRight: "4px" } },
                _("webapp_two_factor_authentication_cant_access_your_backup_codes")
              ),
              (0, v.tZ)(
                c.rUS,
                { onClick: () => o({ twoFactorAuthenticationOtpType: "totp" }), target: "_self", color: "ds.text.brand.quiet" },
                _("webapp_two_factor_authentication_use_6_digits_code")
              )
            ),
            (0, v.tZ)(
              c.Ejs,
              { flexDirection: "row" },
              (0, v.tZ)(
                c.nvN,
                { color: "ds.text.neutral.quiet", sx: { ...Ze, marginRight: "4px" } },
                _("webapp_two_factor_authentication_lost_your_backup_codes")
              ),
              (0, v.tZ)(
                c.rUS,
                { href: xe.IT, target: "_blank", rel: "noopener noreferrer", color: "ds.text.brand.quiet" },
                _("webapp_two_factor_authentication_reset_2fa")
              )
            ),
            (0, v.tZ)(
              "div",
              { sx: { display: "flex", flexDirection: "row", justifyContent: "flex-end", marginTop: "40px" } },
              (0, v.tZ)(
                v.zx,
                {
                  id: "cancel-button",
                  "data-testid": "cancel-button",
                  mood: "neutral",
                  intensity: "quiet",
                  sx: { marginRight: "16px" },
                  onClick: () => {
                    s(), (0, A.Kz)(new k.UserUseAccountRecoveryKeyEvent({ flowStep: k.FlowStep.Cancel })), (0, r.uX)(i.TT);
                  }
                },
                _("_common_action_cancel")
              ),
              (0, v.tZ)(
                v.zx,
                { type: "submit", isLoading: t, "data-testid": "submitBackupCode" },
                _("login_verify_your_identity_step_button")
              )
            )
          );
        },
        Le = {
          generic: "_common_generic_error",
          [Ne.AuthenticationCode[Ne.AuthenticationCode.DASHLANE_AUTHENTICATOR_PUSH_NOTIFICATION_DENIED]]:
            "webapp_dashlane_authenticator_authentication_error_denied",
          [Ne.AuthenticationCode[Ne.AuthenticationCode.TOKEN_EXPIRED]]: "webapp_dashlane_authenticator_authentication_error_timeout"
        },
        Me = ({ cancelAccountRecoveryKey: e, error: t, resendPushNotification: n, switchToEmailToken: o }) => {
          var s;
          const { translate: l } = (0, N.Z)(),
            _ = { display: "flex", flexDirection: "column", gap: "4px", lineHeight: "20px" };
          return (0, v.tZ)(
            a.Fragment,
            null,
            (0, v.tZ)(
              v.X6,
              { as: "h2", color: "ds.text.neutral.catchy", textStyle: "ds.title.section.medium" },
              l("webapp_dashlane_authenticator_authentication_title")
            ),
            t
              ? (0, v.tZ)(
                  c.Ejs,
                  { flexDirection: "column", sx: { margin: "32px 0px" } },
                  (0, v.tZ)(
                    "div",
                    null,
                    (0, v.tZ)(O.Z, {
                      height: 88,
                      width: 88,
                      animationParams: { renderer: "svg", animationData: C, loop: !1, autoplay: !0 }
                    })
                  ),
                  (0, v.tZ)(
                    c.nvN,
                    { size: "small", color: "ds.text.danger.quiet", sx: { ..._, marginTop: "16px " } },
                    l(t && null != (s = Le[t]) ? s : Le.generic)
                  )
                )
              : (0, v.tZ)(c.HoD, {
                  "data-testid": "dashlane-authenticator-loading-icon",
                  size: "88px",
                  color: "ds.container.expressive.brand.catchy.active",
                  sx: { margin: "32px 0px" }
                }),
            (0, v.tZ)(
              c.Ejs,
              { flexDirection: "row" },
              (0, v.tZ)(
                c.nvN,
                { color: "ds.text.neutral.quiet", sx: { ..._, paddingRight: "4px" } },
                l("webapp_dashlane_authenticator_authentication_cant_access_your_app")
              ),
              (0, v.tZ)(
                c.rUS,
                {
                  target: "_blank",
                  rel: "noopener noreferrer",
                  onClick: () => {
                    o();
                  },
                  color: "ds.text.brand.standard"
                },
                l("webapp_dashlane_authenticator_authentication_send_code_by_email_link")
              )
            ),
            (0, v.tZ)(
              "div",
              { sx: { display: "flex", flexDirection: "row", justifyContent: "flex-end", marginTop: "40px" } },
              (0, v.tZ)(
                v.zx,
                {
                  id: "cancel-button",
                  "data-testid": "cancel-button",
                  mood: "neutral",
                  intensity: "quiet",
                  sx: { marginRight: "16px" },
                  onClick: () => {
                    e(), (0, A.Kz)(new k.UserUseAccountRecoveryKeyEvent({ flowStep: k.FlowStep.Cancel })), (0, r.uX)(i.TT);
                  }
                },
                l("_common_action_cancel")
              ),
              t
                ? (0, v.tZ)(
                    v.zx,
                    {
                      onClick: () => {
                        n();
                      }
                    },
                    l("webapp_dashlane_authenticator_authentication_send_another_push_button")
                  )
                : null
            )
          );
        },
        Ue = () => {
          const { translate: e } = (0, N.Z)(),
            t = (0, m.k)(ie.j, "recoveryFlowStatus"),
            { cancelRecoveryFlow: n } = (0, le.u)(ie.j),
            o = (0, m.k)(ve.i, "identityVerificationFlowStatus"),
            {
              submitEmailToken: a,
              resendEmailToken: r,
              switchToDashlaneAuthenticator: s,
              changeTwoFactorAuthenticationOtpType: i,
              clearError: c,
              resendPushNotification: l,
              submitTotp: _,
              submitBackupCode: u,
              switchToEmailToken: p
            } = (0, le.u)(ve.i),
            d = () => {
              o.data?.error && c();
            };
          return (0, v.tZ)(
            "div",
            null,
            (0, v.tZ)(
              v.X6,
              { as: "h1", textStyle: "ds.title.section.large", color: "ds.text.neutral.catchy", sx: { marginBottom: "32px" } },
              e("login_verify_your_identity_step_title")
            ),
            t.data?.step === ce.G.IdentityVerification
              ? (0, v.tZ)(v.nv, { textStyle: "ds.body.standard.strong", sx: { marginBottom: "16px" } }, t.data.login, " ")
              : null,
            (() => {
              if (t.data?.step === ce.G.IdentityVerification)
                switch (o.data?.step) {
                  case "EmailTokenStep":
                    return (0, v.tZ)(Oe, {
                      clearInputError: d,
                      resendEmailToken: r,
                      submitEmailToken: a,
                      switchToDashlaneAuthenticator: s,
                      cancelAccountRecoveryKey: n,
                      ...o.data
                    });
                  case "DashlaneAuthenticatorStep":
                    return (0, v.tZ)(Me, { cancelAccountRecoveryKey: n, resendPushNotification: l, switchToEmailToken: p, ...o.data });
                  case "TwoFactorAuthenticationOtpStep":
                    return void 0 !== o.data.twoFactorAuthenticationOtpType && "backupCode" === o.data.twoFactorAuthenticationOtpType
                      ? (0, v.tZ)(Pe, {
                          submitBackupCode: u,
                          changeTwoFactorAuthenticationOtpType: i,
                          cancelAccountRecoveryKey: n,
                          ...o.data
                        })
                      : (0, v.tZ)(Ie, {
                          submitTotp: _,
                          changeTwoFactorAuthenticationOtpType: i,
                          cancelAccountRecoveryKey: n,
                          clearInputError: d,
                          ...o.data
                        });
                  default:
                    return null;
                }
            })()
          );
        };
      var ze, Fe, Be;
      const We = () => {
        var e;
        const { cancelRecoveryFlow: t, submitRecoveryKey: n, confirmNewPassword: o } = (0, le.u)(ie.j),
          a = (0, m.k)(ie.j, "recoveryFlowStatus");
        return (0, v.tZ)(
          U.L,
          { backgroundColor: "ds.background.default" },
          (0, v.tZ)(
            c.Ejs,
            {
              sx: {
                flexDirection: "column",
                margin: "0px auto 0px auto",
                alignItems: "flex-start",
                justifyContent: "center",
                height: "calc(100vh - 50px)",
                width: "550px"
              }
            },
            (() => {
              switch (a.data?.step) {
                case ce.G.IdentityVerification:
                  return ze || (ze = (0, v.tZ)(Ue, null));
                case ce.G.EnterRecoveryKey:
                  return (0, v.tZ)(me, { ...a.data, onSubmit: n, onCancel: t });
                case ce.G.ChangeMasterPassword:
                  return e || (e = (0, v.tZ)(fe, { onSubmit: o, onCancel: t }));
                case ce.G.Finalising:
                  return Fe || (Fe = (0, v.tZ)(be, null));
                case ce.G.Success:
                case ce.G.Failure:
                  return Be || (Be = (0, v.tZ)(se.l_, { to: i.aS }));
                default:
                  return null;
              }
            })()
          )
        );
      };
      function Ve({ path: e }) {
        const t = (0, m.k)(g.V, "authenticationFlowStatus"),
          n = (0, w.j)();
        return a.createElement(
          r.GB,
          { path: [`${e}/admin-assisted-recovery`, `${e}/account-recovery-key`] },
          a.createElement(re, { path: `${e}/admin-assisted-recovery` }),
          a.createElement(r.Vy, {
            exact: !0,
            path: `${e}/account-recovery-key`,
            component: "MasterPasswordStep" === t.data?.step || n === h.sM.Open ? We : void 0
          })
        );
      }
      const je = () => a.createElement(U.L, null, a.createElement("div", { className: "illustration--Av9l1deedh" })),
        qe = () => {
          const { translate: e } = (0, N.Z)();
          return a.createElement(
            U.L,
            null,
            a.createElement(
              "div",
              { className: "marketingContent--bWK28oFGE3" },
              a.createElement(
                "div",
                { className: "marketingInner--EcSRAo0mTh" },
                a.createElement(
                  v.nv,
                  { color: "ds.text.neutral.catchy", textStyle: "ds.specialty.brand.medium", style: { marginBottom: "24px" } },
                  e("webapp_auth_panel_marketing_heading")
                ),
                a.createElement(
                  v.nv,
                  { className: "subtitle--SNiHHCj3Da", color: "ds.text.neutral.standard" },
                  e("webapp_auth_panel_marketing_subtitle")
                )
              )
            )
          );
        };
      var Ge = n(714072),
        Ke = n(342868);
      const $e = () => {
        var e;
        const { translate: t } = (0, N.Z)(),
          { search: n } = (0, r.TH)(),
          o = Ke.parse(n),
          { getInviteLinkData: s, inviteLinkData: i } = (0, Ge.h)(),
          l = null != (e = o.team) ? e : "";
        (0, a.useEffect)(() => {
          l && s(l);
        }, [s, l]);
        const _ = i?.displayName;
        return (0, v.tZ)(
          U.L,
          null,
          (0, v.tZ)(
            "div",
            { sx: { paddingLeft: "80px", paddingRight: "80px", width: "100%" } },
            (0, v.tZ)(
              c.Ejs,
              { gap: 4, sx: { paddingTop: "240px", maxWidth: "66%", minWidth: "320px" } },
              (0, v.tZ)(
                c.X6q,
                {
                  color: "ds.text.neutral.catchy",
                  size: "large",
                  sx: { textTransform: "uppercase", em: { color: "ds.text.brand.standard", fontStyle: "inherit" } }
                },
                _
                  ? (0, v.tZ)("div", null, t.markup("webapp_auth_panel_tsup_company_markup", { companyName: `*${_}*` }))
                  : (0, v.tZ)("div", null, t("webapp_auth_panel_tsup_generic"))
              ),
              (0, v.tZ)(c.nvN, { color: "ds.text.neutral.quiet", size: "large" }, t("webapp_auth_panel_tsup_subtitle"))
            )
          )
        );
      };
      function He() {
        return (0, y.qr)({ queryConfig: { query: S.C.getLoginNotifications }, liveConfig: { live: S.C.liveLoginNotifications } }, []);
      }
      const Xe = () => {
        const [e, t] = (0, a.useState)(null),
          { translate: n } = (0, N.Z)(),
          o = He(),
          r = o.status === y.rq.Success && o.data;
        (0, a.useEffect)(() => {
          r && r.length > 0
            ? t(
                r.map((e) =>
                  ((e, t) => {
                    switch (e) {
                      case Ne.LoginNotificationType.SSO_FEATURE_BLOCKED:
                        return { message: n("webapp_login_notification_sso_feature_blocked"), severity: c.BLW.WARNING };
                      case Ne.LoginNotificationType.SSO_SETUP_ERROR:
                        return { message: n("webapp_login_notification_sso_setup_error"), severity: c.BLW.WARNING };
                      case Ne.LoginNotificationType.RELOGIN_NEEDED:
                        return { message: n("webapp_login_notification_re_login"), severity: c.BLW.STRONG };
                      case Ne.LoginNotificationType.TEAM_ACCEPTANCE_SUCCESS:
                        return { message: n("standalone_account_creation_error_invite_link_acceptance_success"), severity: c.BLW.SUCCESS };
                      case Ne.LoginNotificationType.TEAM_ACCEPTANCE_ERROR:
                        return { message: n("standalone_account_creation_error_invite_link_acceptance_failed"), severity: c.BLW.WARNING };
                      case Ne.LoginNotificationType.UNKNOWN_ERROR:
                      default:
                        return { message: n("webapp_login_notification_unknown_error", { message: t }), severity: c.BLW.WARNING };
                    }
                  })(e.type, e.message)
                )
              )
            : t(null);
        }, [r]);
        const s = () => {
          S.C.clearAllStoredLoginNotification();
        };
        return a.createElement(
          c.YcA,
          null,
          e &&
            e.length > 0 &&
            e.map((e, t) =>
              a.createElement(
                c.bZj,
                { key: `${t}-${e.message}`, severity: e.severity, closeIconName: n("_common_alert_dismiss_button"), onClose: s },
                e.message
              )
            )
        );
      };
      var Ye = n(421548);
      const Qe = ({ containerHeight: e = "100vh", customMargin: t, customAnimationHeight: n = 150, customAnimationWidth: o = 150 }) =>
        a.createElement(
          c.Ejs,
          {
            sx: {
              display: "flex",
              height: e,
              width: "100%",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              margin: t
            }
          },
          a.createElement(O.Z, { height: n, width: o, animationParams: { renderer: "svg", animationData: Ye, loop: !0, autoplay: !0 } })
        );
      var Je = n(969950),
        et = n(151796),
        tt = n(447725),
        nt = n(210994),
        ot = n(988852);
      const at = ({ platform: e }) => {
          const t = { height: 36, width: 36 };
          switch (e) {
            case "android":
              return a.createElement(c.j7I, { "aria-hidden": !0, viewBox: "0 0 24 30", ...t });
            case "windows":
              return a.createElement(c.WIA, { "aria-hidden": !0, viewBox: "0 0 28 28", ...t });
            case "macosx":
            case "iphone":
            case "ipad":
            case "ipod":
              return a.createElement(c.qwG, { "aria-hidden": !0, viewBox: "0 0 25 30", ...t });
            default:
              return a.createElement(c.Gzy, { "aria-hidden": !0, viewBox: "0 0 20 20", ...t });
          }
        },
        rt = (e) => {
          const { previousDeviceInfo: t } = e;
          return (
            (0, a.useEffect)(() => {
              (0, A.Nc)(k.PageView.PaywallDeviceSyncLimitUnlinkDevice);
            }, []),
            (0, l.tZ)(
              c.Ejs,
              {
                flexDirection: "row",
                alignItems: "center",
                sx: {
                  borderTopWidth: "1px",
                  borderTopStyle: "solid",
                  borderTopColor: c.colors.grey05,
                  borderBottomWidth: "1px",
                  borderBottomStyle: "solid",
                  borderBottomColor: c.colors.grey05,
                  height: "80px"
                }
              },
              (0, l.tZ)(at, { platform: t.platform }),
              (0, l.tZ)(
                c.Ejs,
                { flexDirection: "column", sx: { marginLeft: "10px" } },
                (0, l.tZ)(c.nvN, { sx: { fontWeight: "bolder" } }, t.name),
                (0, l.tZ)(
                  c.nvN,
                  { size: "x-small", bold: !0, color: c.colors.grey01 },
                  (0, l.tZ)(ot.Z, {
                    date: (0, nt.Z)(t.lastActive),
                    i18n: { key: "webapp_login_one_device_limit_device_info_last_active", param: "timeAgo" }
                  })
                )
              )
            )
          );
        },
        st = ({ handleOnCancel: e, handleOnConfirm: t, handleOnGetUnlimitedAccess: n, isOpen: o, previousDeviceInfo: r }) => {
          const { translate: s } = (0, N.Z)();
          return (0, v.tZ)(
            c.VqE,
            { closeIconName: s("_common_dialog_dismiss_button"), isOpen: o, onClose: e },
            (0, v.tZ)(
              a.Fragment,
              null,
              (0, v.tZ)(c.$N8, { title: s("webapp_login_one_device_limit_dialog_title_confirm", { deviceName: r?.name }) }),
              (0, v.tZ)(
                c.a7O,
                { sx: { color: "ds.text.neutral.standard" } },
                r ? (0, v.tZ)(rt, { previousDeviceInfo: r }) : null,
                (0, v.tZ)(c.nvN, { sx: { marginTop: "20px" } }, s("webapp_login_one_device_limit_dialog_transfer_text")),
                (0, v.tZ)(c.nvN, { sx: { marginTop: "20px" } }, s("webapp_login_one_device_limit_dialog_upgrade_text"))
              ),
              (0, v.tZ)(
                c.Ejs,
                { sx: { justifyContent: "flex-end" } },
                (0, v.tZ)(
                  v.zx,
                  { intensity: "quiet", mood: "brand", onClick: n, sx: { marginRight: "16px" } },
                  s("webapp_login_one_device_limit_dialog_unlimited_access")
                ),
                (0, v.tZ)(v.zx, { mood: "brand", onClick: t }, s("webapp_login_one_device_limit_dialog_confirm_unlink"))
              )
            )
          );
        };
      let it = (function (e) {
        return (e.INTRO = "INTRO"), (e.INNER_LOOP = "INNER_LOOP"), (e.OUTRO = "OUTRO"), e;
      })({});
      const ct = { autoplay: !0, renderer: "svg", rendererSettings: { preserveAspectRatio: "xMidYMid", viewBoxOnly: !0 } },
        lt = { [it.INTRO]: !1, [it.INNER_LOOP]: !0, [it.OUTRO]: !1 },
        _t = {},
        ut = async (e) => {
          const t = await n(812272)(`./${e}_animation.json`);
          _t[e] = { ...ct, animationData: t, loop: lt[e] };
        };
      let pt = !1;
      const dt = ({ className: e }) => a.createElement("div", { className: e }),
        mt = ({ containerClassName: e, ...t }) => {
          const {
              onIntroComplete: n,
              onInnerLoopComplete: o,
              onOutroComplete: r,
              phase: s
            } = (({ loop: e, advanced: t }) => {
              const [n, o] = a.useState(it.INTRO),
                r = a.useCallback(() => {
                  o(it.INNER_LOOP);
                }, []),
                s = a.useCallback(() => {
                  o(it.OUTRO);
                }, []),
                i = a.useCallback(() => {
                  e && o(it.INTRO);
                }, [e]),
                c = a.useCallback(() => t?.onIntroComplete?.(o), [t?.onIntroComplete]),
                l = a.useCallback(() => t?.onInnerLoopComplete?.(o), [t?.onInnerLoopComplete]),
                _ = a.useCallback(() => t?.onOutroComplete?.(o), [t?.onOutroComplete]);
              return (
                a.useEffect(() => {
                  switch (n) {
                    case it.INTRO:
                      t?.onIntroStart?.(o);
                      break;
                    case it.INNER_LOOP:
                      t?.onInnerLoopStart?.(o);
                      break;
                    case it.OUTRO:
                      t?.onOutroStart?.(o);
                  }
                }, [n, t?.onIntroStart, t?.onInnerLoopStart, t?.onOutroStart]),
                { phase: n, onIntroComplete: t ? c : r, onInnerLoopComplete: t ? l : s, onOutroComplete: t ? _ : i }
              );
            })(t),
            i = a.useMemo(() => [{ eventName: "complete", callback: n }], [n]),
            c = a.useMemo(() => [{ eventName: "loopComplete", callback: o }], [o]),
            l = a.useMemo(() => [{ eventName: "complete", callback: r }], [r]),
            [_, u] = a.useState(pt);
          if (
            (a.useEffect(() => {
              let e = !1;
              return (
                (async () => {
                  pt || (await Promise.all([it.INTRO, it.INNER_LOOP, it.OUTRO].map(ut)), (pt = !0));
                })().then(() => {
                  e || u(!0);
                }),
                () => {
                  e = !0;
                }
              );
            }, []),
            !_)
          )
            return a.createElement(dt, { className: e });
          switch (s) {
            case it.INTRO:
              return a.createElement(O.Z, { animationParams: _t[it.INTRO], containerClassName: e, eventListeners: i });
            case it.INNER_LOOP:
              return a.createElement(O.Z, { animationParams: _t[it.INNER_LOOP], containerClassName: e, eventListeners: c });
            case it.OUTRO:
              return a.createElement(O.Z, { animationParams: _t[it.OUTRO], containerClassName: e, eventListeners: l });
            default:
              (0, et.U)(s);
          }
        },
        gt = ({ children: e, handleLogOut: t }) => {
          const { translate: n } = (0, N.Z)();
          return (0, l.tZ)(
            c.Ejs,
            { flexDirection: "column", flexWrap: "nowrap", sx: { height: "100vh", width: "100%" } },
            (0, l.tZ)(
              c.Ejs,
              {
                alignItems: "center",
                flexWrap: "nowrap",
                justifyContent: "space-between",
                sx: { height: "122px", minHeight: "122px", padding: "0px 56px 0px 56px" }
              },
              (0, l.tZ)(c.D1W, { color: c.vei.DashGreen, size: c.r1z.Size39 }),
              (0, l.tZ)(c.zxk, { nature: "secondary", onClick: t, type: "button" }, n("webapp_login_one_device_limit_log_out"))
            ),
            (0, l.tZ)(
              c.Ejs,
              {
                flexDirection: "row",
                flexWrap: "nowrap",
                sx: {
                  flexGrow: 1,
                  padding: "0px 56px 50px 56px",
                  backgroundImage:
                    'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTcyIiBoZWlnaHQ9IjIyNTAiIHZpZXdCb3g9IjAgMCA5NzIgMjI1MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIuOTM3OTVlLTA1IDExMjUuMkMyLjkzNzk1ZS0wNSAxMjM4LjU2IDIuOTM3OTVlLTA1IDEwOTEuMzcgMi45Mzc5NWUtMDUgMTA4Ny4wOEMyLjkzNzk1ZS0wNSA4ODkuOCAwLjA5MDQ1NjQgNjkyLjQzNCAyLjkzNzk1ZS0wNSA0OTUuMTUxQzIuOTM3OTVlLTA1IDQzNC4xODQgMjguNjY1NCAzODkuMDI2IDg1LjYzNDQgMzU5LjE3MkMzMDEuMjEyIDI0Ni4xNTEgNTE2LjcgMTMzLjIxNCA3MzIuMjc4IDIwLjM2MTFDODI3Ljg1OSAtMjkuNjc0MyA5NDMuNjA2IDE2LjU3NjkgOTY4LjIwMiAxMTQuNjNDOTcwLjczNCAxMjQuNzIxIDk3MS44MTkgMTM1LjQwMSA5NzEuODE5IDE0NS44MjhDOTcyIDQ2MC42NzMgOTcyIDc3NS41MTggOTcyIDEwOTAuMzZDOTcyIDEwOTMuNTYgOTcyIDExMjUuMiA5NzIgMTEyOS4xNUM2NDggMTEyOS4yNCAzMjQuODE0IDExMjUuMiAyLjkzNzk1ZS0wNSAxMTI1LjJaIiBmaWxsPSIjRjVGN0Y3Ii8+CjxwYXRoIGQ9Ik05NzIgMTEyNC44Qzk3MiAxMDExLjQ0IDk3MiAxMTU4LjYzIDk3MiAxMTYyLjkyQzk3MiAxMzYwLjIgOTcxLjkwOSAxNTU3LjU3IDk3MiAxNzU0Ljg1Qzk3MiAxODE1LjgyIDk0My4zMzUgMTg2MC45NyA4ODYuMzY2IDE4OTAuODNDNjcwLjc4OCAyMDAzLjg1IDQ1NS4zIDIxMTYuNzkgMjM5LjcyMiAyMjI5LjY0QzE0NC4xNDEgMjI3OS42NyAyOC4zOTQxIDIyMzMuNDIgMy43OTc5MSAyMTM1LjM3QzEuMjY1OTUgMjEyNS4yOCAwLjE4MDg0MyAyMTE0LjYgMC4xODA4NDMgMjEwNC4xN0MtMS4xMTQ2MWUtMDUgMTc4OS4zMyAwIDE0NzQuNDggMCAxMTU5LjY0QzAgMTE1Ni40NCAwIDExMjQuOCAwIDExMjAuODVDMzI0IDExMjAuNzYgNjQ3LjE4NiAxMTI0LjggOTcyIDExMjQuOFoiIGZpbGw9IiNGNUY3RjciLz4KPC9zdmc+Cg==")',
                  backgroundRepeat: "repeat-y",
                  backgroundPosition: "top center",
                  backgroundSize: "min(972px, calc(100% - 50px))"
                }
              },
              e,
              (0, l.tZ)(mt, { containerClassName: "animationContainer--SqIU7ZLOcD", loop: !0 })
            )
          );
        },
        ht = () => (0, A.Nc)(k.PageView.PaywallDeviceSyncLimit),
        wt = () => {
          (0, A.Kz)(new k.UserCallToActionEvent({ callToActionList: [k.CallToAction.Unlink], hasChosenNoAction: !0 }));
        },
        Et = () => {
          (0, A.Kz)(
            new k.UserCallToActionEvent({
              callToActionList: [k.CallToAction.Unlink, k.CallToAction.AllOffers],
              hasChosenNoAction: !1,
              chosenAction: k.CallToAction.Unlink
            })
          );
        },
        ft = () => {
          (0, A.Kz)(
            new k.UserCallToActionEvent({
              callToActionList: [k.CallToAction.Unlink],
              hasChosenNoAction: !1,
              chosenAction: k.CallToAction.Unlink
            })
          );
        },
        bt = () => {
          (0, A.Kz)(
            new k.UserCallToActionEvent({ callToActionList: [k.CallToAction.Unlink, k.CallToAction.AllOffers], hasChosenNoAction: !0 })
          );
        },
        vt = () => {
          (0, A.Kz)(
            new k.UserCallToActionEvent({
              callToActionList: [k.CallToAction.Unlink, k.CallToAction.AllOffers],
              hasChosenNoAction: !1,
              chosenAction: k.CallToAction.AllOffers
            })
          );
        },
        yt = ({ iconName: e, children: t }) =>
          (0, v.tZ)(
            c.Ejs,
            { flexDirection: "row", gap: "12px", alignItems: "center" },
            (0, v.tZ)(
              "div",
              { sx: { padding: "8px", backgroundColor: "ds.container.expressive.brand.quiet.idle", borderRadius: "8px" } },
              (0, v.tZ)(v.JO, { name: e, size: "large", color: "ds.text.brand.standard" })
            ),
            (0, v.tZ)(c.nvN, { size: "large" }, t)
          ),
        St = ({ previousDevice: e }) => {
          const { translate: t } = (0, N.Z)();
          (0, a.useEffect)(() => {
            ht();
          }, []);
          const [n, o] = a.useState(!1),
            r = () => S.C.abortDeviceLimitFlow(),
            s = () => S.C.unlinkPreviousDevice(),
            l = () => {
              (0, tt.Yk)(i.QF, { type: "oneDeviceLimit", action: "getUnlimitedAccess" }, { newTab: !1 });
            };
          return (0, v.tZ)(
            a.Fragment,
            null,
            (0, v.tZ)(
              gt,
              {
                handleLogOut: () => {
                  r(), bt();
                }
              },
              (0, v.tZ)(
                c.Ejs,
                {
                  as: "main",
                  flexDirection: "column",
                  flexWrap: "nowrap",
                  gap: "40px",
                  sx: { paddingTop: "60px", minHeight: "270px", maxWidth: "696px", minWidth: "429px" }
                },
                (0, v.tZ)(c.X6q, { caps: !0, size: "large" }, t("webapp_login_one_device_limit_header_V2")),
                (0, v.tZ)(
                  c.Ejs,
                  { flexDirection: "column", gap: "24px" },
                  (0, v.tZ)(c.nvN, { size: "large" }, t.markup("webapp_login_one_device_limit_feature_copy_markup")),
                  (0, v.tZ)(yt, { iconName: "FeatureAuthenticatorOutlined" }, t("webapp_login_one_device_limit_feature_unlimited_devices")),
                  (0, v.tZ)(
                    yt,
                    { iconName: "FeatureDarkWebMonitoringOutlined" },
                    t("webapp_login_one_device_limit_feature_dark_web_monitoring")
                  ),
                  (0, v.tZ)(yt, { iconName: "FeatureVpnOutlined" }, t("webapp_login_one_device_limit_feature_vpn")),
                  (0, v.tZ)(c.nvN, { size: "large" }, t("webapp_login_one_device_limit_not_ready"))
                ),
                (0, v.tZ)(
                  c.Ejs,
                  { flexDirection: "row", flexWrap: "nowrap", gap: "16px" },
                  (0, v.tZ)(v.zx, { mood: "brand", onClick: l, size: "large" }, t("webapp_login_one_device_limit_see_premium_plan")),
                  (0, v.tZ)(
                    v.zx,
                    {
                      mood: "neutral",
                      intensity: "quiet",
                      onClick: () => {
                        o(!0), Et();
                      },
                      size: "large"
                    },
                    t("webapp_login_one_device_limit_start_transfer")
                  )
                )
              )
            ),
            (0, v.tZ)(st, {
              isOpen: n,
              handleOnCancel: () => {
                o(!1), wt();
              },
              handleOnConfirm: () => {
                s(), ft();
              },
              handleOnGetUnlimitedAccess: l,
              previousDeviceInfo: e
            })
          );
        };
      var xt = n(65255),
        Tt = n(915970),
        Ct = n(38025),
        Ot = n(648811);
      function Nt() {
        const e = (0, Ct.Y)(),
          { routes: t } = (0, E.Xo)(),
          { logout: n } = (0, le.u)(g.V);
        return {
          logOut: () => n(),
          unlinkMultipleDevices: S.C.unlinkMultipleDevices,
          onHandleGoToPremiumPlan: (n) =>
            ((n) => {
              if (e.status === y.rq.Success) {
                const o = t.userGoPremium(n, (0, Ot.c)(e.data.autoRenewInfo)),
                  a = { type: "multipleDevicesLimit", action: "goPremium" };
                (0, tt.Yk)(o, a, { newTab: !1 });
              }
            })(n)
        };
      }
      const At = ({ errorStage: e }) => {
        const { retryPayload: t, subscriptionCode: n } = e,
          { translate: o } = (0, N.Z)(),
          r = Nt();
        return a.createElement(
          c.VqE,
          { isOpen: !0, onClose: r.logOut, closeIconName: o("_common_dialog_dismiss_button") },
          a.createElement(c.$N8, { title: o("webapp_login_multiple_devices_limit_error_dialog_title") }),
          a.createElement(c.a7O, null, a.createElement(c.nvN, null, o("webapp_login_multiple_devices_limit_error_dialog_body"))),
          a.createElement(c.cNS, {
            primaryButtonTitle: o("webapp_login_multiple_devices_limit_error_dialog_try_again"),
            primaryButtonOnClick: () => {
              r.unlinkMultipleDevices(t);
            },
            secondaryButtonTitle: o("webapp_login_multiple_devices_limit_error_dialog_see_premium"),
            secondaryButtonOnClick: () => {
              r.onHandleGoToPremiumPlan(n);
            }
          })
        );
      };
      var kt = n(364075);
      const Rt = kt.Z.registerAction("IS_INITIAL_SYNC_ANIMATION_PENDING", (e, t) => ({ ...e, isPending: t })),
        It = kt.Z.registerAction("IS_INITIAL_SYNC_ANIMATION_INTRO_PENDING", (e, t) => ({ ...e, isIntroPhasePending: t }));
      let Dt = (function (e) {
        return (
          (e.UNLINKING_PREVIOUS_DEVICE = "UNLINKING_PREVIOUS_DEVICE"),
          (e.TRANSFERRING_DATA = "TRANSFERRING_DATA"),
          (e.STORING_DATA = "STORING_DATA"),
          e
        );
      })({});
      const Zt = {
          MAY_TAKE_A_MINUTE: "webapp_login_initial_sync_progress_may_take_a_minute",
          STORING_DATA: "webapp_login_initial_sync_progress_storing_data",
          TRANSFERRING_DATA: "webapp_login_initial_sync_progress_transferring_data",
          UNLINKING_PREVIOUS_DEVICE: "webapp_login_initial_sync_progress_unlinking_previous_device"
        },
        Pt = {
          STORING_DATA: "webapp_login_initial_sync_progress_step_finish_transfer",
          TRANSFERRING_DATA: "webapp_login_initial_sync_progress_step_securely_transferring_data",
          UNLINKING_PREVIOUS_DEVICE: "webapp_login_initial_sync_progress_step_unlinking_other_device"
        },
        Lt = {
          STORING_DATA: "webapp_login_initial_sync_progress_almost_done",
          TRANSFERRING_DATA: "webapp_login_initial_sync_progress_may_take_few_moments",
          UNLINKING_PREVIOUS_DEVICE: "webapp_login_initial_sync_progress_may_take_few_moments"
        },
        Mt = { STORING_DATA: "80%", TRANSFERRING_DATA: "50%", UNLINKING_PREVIOUS_DEVICE: "10%" },
        Ut = (e) => {
          const { translate: t } = (0, N.Z)(),
            { step: n, animationProps: o } = (({ stage: e }) => {
              const t = (0, Je.I0)(),
                [n, o] = a.useState(Dt.UNLINKING_PREVIOUS_DEVICE),
                r = a.useRef(null),
                s = a.useRef(null),
                i = a.useRef(null),
                c = (e) => () => {
                  t(Rt(e));
                },
                l = (e) => {
                  t(It(e));
                },
                _ = () =>
                  new Promise((e) => {
                    i.current = e;
                  }),
                u = a.useCallback(() => {
                  (s.current = new Promise((e) => {
                    r.current = e;
                  })),
                    o(Dt.UNLINKING_PREVIOUS_DEVICE),
                    l(!0);
                }, []),
                p = a.useCallback((e) => {
                  l(!1), e(it.INNER_LOOP);
                }, []),
                d = a.useCallback((e) => {
                  (() => {
                    if (!s.current) throw new Error("Expected initial sync to be initiated");
                    return s.current;
                  })()
                    .then(_)
                    .then(() => e(it.OUTRO)),
                    o(Dt.TRANSFERRING_DATA);
                }, []),
                m = a.useCallback(() => i.current?.(), []),
                g = a.useCallback(() => {
                  o(Dt.STORING_DATA);
                }, []),
                h = a.useCallback(c(!1), []);
              return (
                a.useEffect(c(!0), []),
                a.useEffect(() => {
                  e?.name === Ne.LoginDeviceLimitFlowStage.DeviceLimitDone && "function" == typeof r.current && r.current();
                }, [e?.name]),
                {
                  step: n,
                  animationProps: {
                    advanced: {
                      onIntroStart: u,
                      onIntroComplete: p,
                      onInnerLoopStart: d,
                      onInnerLoopComplete: m,
                      onOutroStart: g,
                      onOutroComplete: h
                    }
                  }
                }
              );
            })(e),
            r = (0, Tt.w)(xt.w.GrowthproductDSLPaywallDemogorgon);
          return (0, l.tZ)(
            c.Ejs,
            { flexDirection: "column", flexWrap: "nowrap", fullWidth: !0, sx: { height: "100vh", position: "relative" } },
            (0, l.tZ)(
              c.Ejs,
              {
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "5",
                sx: { height: "122px", minHeight: "122px", padding: "0px 56px 0px 56px" }
              },
              (0, l.tZ)(c.D1W, { color: c.vei.DashGreen, size: c.r1z.Size39 })
            ),
            (0, l.tZ)(
              c.Ejs,
              {
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                sx: { flexGrow: 1, padding: "0px 56px 0px 56px", position: "relative", top: "-10%" }
              },
              (0, l.tZ)(mt, { containerClassName: "animationContainer--Opz_rdjAMM", ...o }),
              (0, l.tZ)(
                c.Ejs,
                { as: "main", alignItems: "center", flexDirection: "column", sx: { maxWidth: "500px" } },
                r
                  ? (0, l.tZ)(
                      a.Fragment,
                      null,
                      (0, l.tZ)(
                        c.nvN,
                        {
                          color: "ds.text.neutral.catchy",
                          sx: { fontSize: 6, fontFamily: "heading", fontWeight: "light", marginBottom: "8px" }
                        },
                        t(Pt[n])
                      ),
                      (0, l.tZ)(c.nvN, { color: "ds.text.neutral.quiet", sx: { marginBottom: "24px" } }, t(Lt[n])),
                      (0, l.tZ)(c.nvN, { color: "ds.text.neutral.quiet" }, Mt[n])
                    )
                  : (0, l.tZ)(
                      a.Fragment,
                      null,
                      (0, l.tZ)(
                        c.nvN,
                        {
                          color: c.colors.dashGreen00,
                          sx: { fontSize: 5, fontFamily: "heading", fontWeight: "bolder", marginBottom: "16px" }
                        },
                        t(Zt[n])
                      ),
                      (0, l.tZ)(c.nvN, { color: c.colors.grey00 }, t(Zt.MAY_TAKE_A_MINUTE))
                    )
              )
            ),
            e.stage.name === Ne.LoginDeviceLimitFlowStage.UnlinkingMultipleDevicesError ? (0, l.tZ)(At, { errorStage: e.stage }) : null
          );
        };
      var zt = n(864011);
      const Ft = ({ deviceToDeactivate: e, handleOnSelection: t, checked: n }) => {
          var o;
          return e?.isCurrentDevice
            ? null
            : (0, l.tZ)(
                c.Ejs,
                {
                  alignItems: "center",
                  sx: {
                    borderTopWidth: "1px",
                    borderTopStyle: "solid",
                    borderTopColor: c.colors.grey05,
                    borderBottomWidth: "1px",
                    borderBottomStyle: "solid",
                    borderBottomColor: c.colors.grey05,
                    height: "80px",
                    backgroundColor: n ? c.colors.dashGreen06 : c.colors.white,
                    "&:hover": { backgroundColor: c.colors.dashGreen06 }
                  }
                },
                (0, l.tZ)("input", {
                  type: "checkbox",
                  id: e.deviceId,
                  name: null != (o = e.deviceName) ? o : "",
                  checked: n,
                  sx: { marginLeft: "23px" },
                  onChange: () => t(e)
                }),
                (0, l.tZ)(
                  "label",
                  { htmlFor: e.deviceId, style: { flexGrow: 1, padding: "21px 0 21px 0" } },
                  (0, l.tZ)(
                    c.Ejs,
                    { flexDirection: "row", alignItems: "center" },
                    (0, l.tZ)("span", { style: { paddingLeft: "33px", paddingRight: "33px" } }, (0, l.tZ)(at, { platform: e.platform })),
                    (0, l.tZ)(
                      c.Ejs,
                      { flexDirection: "column", sx: { paddingLeft: "10px" } },
                      (0, l.tZ)(c.nvN, { sx: { fontWeight: "bolder" } }, e.deviceName),
                      (0, l.tZ)(
                        c.nvN,
                        { size: "x-small", bold: !0, color: c.colors.grey01 },
                        (0, l.tZ)(ot.Z, {
                          date: (0, nt.Z)(e.lastActivityDate),
                          i18n: { key: "webapp_login_one_device_limit_device_info_last_active", param: "timeAgo" }
                        })
                      )
                    )
                  )
                )
              );
        },
        Bt = ({ isOpen: e, devicesToDeactivate: t, handleOnConfirm: n, handleOnCancel: o, onHandleGoToPremiumPlan: r }) => {
          var s;
          const [i, l] = a.useState([]),
            { translate: _ } = (0, N.Z)(),
            u = (null != (s = t?.length) ? s : 0) - 2,
            p = i.length >= u,
            d = (e) => {
              i.includes(e.deviceId) ? l(i.filter((t) => t !== e.deviceId)) : l([...i, e.deviceId]);
            };
          return a.createElement(
            c.VqE,
            {
              closeIconName: _("_common_dialog_dismiss_button"),
              isOpen: e,
              onClose: () => {
                o(), wt();
              }
            },
            a.createElement(c.$N8, { title: _("webapp_login_multiple_devices_limit_dialog_title") }),
            a.createElement(
              c.nvN,
              { color: c.colors.grey00, sx: { marginBottom: "20px" } },
              _.markup("webapp_login_multiple_devices_limit_dialog_text_markup")
            ),
            a.createElement(
              c.a7O,
              null,
              t
                ? t.map((e) =>
                    a.createElement(Ft, { key: e.deviceId, deviceToDeactivate: e, handleOnSelection: d, checked: i.includes(e.deviceId) })
                  )
                : null
            ),
            a.createElement(c.cNS, {
              primaryButtonTitle: _("webapp_login_multiple_devices_limit_dialog_unlink"),
              primaryButtonOnClick: () => {
                n(
                  i.reduce((e, n) => {
                    const o = t?.find(({ deviceId: e }) => e === n);
                    return (
                      o?.isPairingGroup
                        ? e.pairingGroupIds
                          ? e.pairingGroupIds.push(o?.deviceId)
                          : (e.pairingGroupIds = [o?.deviceId])
                        : o && (e.deviceIds ? e.deviceIds.push(o?.deviceId) : (e.deviceIds = [o?.deviceId])),
                      e
                    );
                  }, {})
                ),
                  Et();
              },
              primaryButtonProps: { type: "button", disabled: !p },
              secondaryButtonTitle: _("webapp_login_multiple_devices_limit_dialog_cancel"),
              secondaryButtonOnClick: () => {
                r(), vt();
              },
              secondaryButtonProps: { type: "button" }
            })
          );
        },
        Wt = ({ devicesToDeactivate: e, subscriptionCode: t, wasRefreshed: n }) => {
          const { translate: o } = (0, N.Z)(),
            r = Nt(),
            s = () => r.onHandleGoToPremiumPlan(t);
          a.useEffect(() => {
            n || ht();
          }, [n]);
          const [i, _] = a.useState(!1);
          return (0, l.tZ)(
            a.Fragment,
            null,
            (0, l.tZ)(
              gt,
              {
                handleLogOut: () => {
                  r?.logOut(), bt();
                }
              },
              (0, l.tZ)(
                c.Ejs,
                {
                  as: "main",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  flexWrap: "nowrap",
                  sx: { maxHeight: "min(50vh, 400px)", minHeight: "270px", maxWidth: "589px", minWidth: "429px" }
                },
                (0, l.tZ)(
                  c.X6q,
                  { caps: !0, size: "large", sx: { marginBottom: "43px" } },
                  o("webapp_login_multiple_devices_limit_header")
                ),
                (0, l.tZ)(c.nvN, { size: "large" }, o("webapp_login_multiple_devices_limit_description_upgrade")),
                (0, l.tZ)(
                  c.Ejs,
                  { flexDirection: "row", flexWrap: "nowrap", sx: { marginTop: "32px" } },
                  (0, l.tZ)(
                    c.zxk,
                    {
                      nature: "primary",
                      onClick: () => {
                        s(), vt();
                      },
                      size: "large",
                      type: "button"
                    },
                    o("webapp_login_multiple_devices_limit_see_premium_plan")
                  ),
                  (0, l.tZ)(
                    c.zxk,
                    {
                      nature: "ghost",
                      onClick: () => {
                        _(!0), Et();
                      },
                      size: "large",
                      type: "button"
                    },
                    o("webapp_login_multiple_devices_limit_unlink_previous_devices")
                  )
                )
              )
            ),
            (0, l.tZ)(Bt, {
              isOpen: i,
              handleOnCancel: () => {
                _(!1), wt();
              },
              onHandleGoToPremiumPlan: s,
              handleOnConfirm: async (e) => {
                await r?.unlinkMultipleDevices(e), ft();
              },
              devicesToDeactivate: e
            })
          );
        };
      var Vt;
      const jt = ({ stage: e }) => {
        const [t, n] = a.useState(!1),
          o = (0, Je.v9)(zt.t);
        if (e.name === Ne.LoginDeviceLimitFlowStage.OneDeviceLimitReached && o) return a.createElement(Ut, { stage: e });
        switch ((t || e.name !== Ne.LoginDeviceLimitFlowStage.RefreshingDeviceLimitStatus || n(!0), e.name)) {
          case Ne.LoginDeviceLimitFlowStage.UnlinkingAndOpeningSession:
          case Ne.LoginDeviceLimitFlowStage.DeviceLimitDone:
          case Ne.LoginDeviceLimitFlowStage.UnlinkingMultipleDevicesError:
            return a.createElement(Ut, { stage: e });
          case Ne.LoginDeviceLimitFlowStage.RefreshingDeviceLimitStatus:
          case Ne.LoginDeviceLimitFlowStage.OpeningSessionAfterDeviceLimitRemoval:
            return Vt || (Vt = a.createElement(Qe, null));
          case Ne.LoginDeviceLimitFlowStage.OneDeviceLimitReached:
            return a.createElement(St, { previousDevice: e.previousDevice });
          case Ne.LoginDeviceLimitFlowStage.MultipleDevicesLimitReached:
            return a.createElement(Wt, {
              subscriptionCode: e.subscriptionCode,
              devicesToDeactivate: e.devicesToDeactivate,
              wasRefreshed: t
            });
          default:
            return (0, et.U)(e);
        }
      };
      var qt = n(100839);
      const Gt = "panelsContainer--d1AY9zIUmF",
        Kt = "panelContainer--KH_IXYeRAb",
        $t = "loginPanelContainer--Nc48WJlOX4",
        Ht = ({ handleConsentSet: e }) => {
          const [t, n] = (0, a.useState)({ interactionDataConsent: !0, personalDataConsent: !0 }),
            { translate: o } = (0, N.Z)();
          return (0, l.tZ)(
            c.Ejs,
            { as: "form", className: "accountCreationPanel--gNIIBVYOIt" },
            (0, l.tZ)(c.X6q, { size: "large", sx: { mb: "16px" } }, o("account_creation_user_consent_title")),
            (0, l.tZ)(
              c.nvN,
              { as: "div", sx: { p: { mb: "24px" }, "p:last-of-type": { mb: "16px" } } },
              o.markup("account_creation_user_consent_description_markup")
            ),
            (0, l.tZ)(c.XZJ, {
              label: o("account_creation_user_consent_usage_data_label"),
              checked: t.interactionDataConsent,
              onChange: (e) => {
                return "interactionDataConsent", (t = e.currentTarget.checked), void n((e) => ({ ...e, interactionDataConsent: t }));
                var t;
              },
              sx: { mb: "40px" }
            }),
            (0, l.tZ)(
              c.T5p,
              { gridTemplateColumns: "auto auto", gap: "8px", justifyContent: "end", fullWidth: !0, sx: { mb: "40px" } },
              (0, l.tZ)(
                c.zxk,
                {
                  type: "button",
                  nature: "secondary",
                  onClick: async () => {
                    await ((0, qt.Ez)("management.uninstallSelf")
                      ? chrome.management.uninstallSelf(undefined)
                      : Promise.reject(new Error("No management.uninstallSelf support")));
                  }
                },
                o("account_creation_user_consent_decline")
              ),
              (0, l.tZ)(
                c.zxk,
                {
                  type: "button",
                  nature: "primary",
                  onClick: async () => {
                    await e(t);
                  }
                },
                o("account_creation_user_consent_agree")
              )
            ),
            (0, l.tZ)(c.nvN, { size: "x-small" }, o.markup("account_creation_user_consent_disclaimer_markup", {}, { linkTarget: "_blank" }))
          );
        };
      var Xt = n(164718),
        Yt = n(661222),
        Qt = n(329),
        Jt = n(598641),
        en = n(549259);
      const tn = "teamSignupPageData";
      var nn = n(119452);
      var on, an, rn, sn, cn;
      let ln = (function (e) {
        return (e.DashlaneBusiness = "dashlaneBusiness"), (e.Standard = "standard"), e;
      })({});
      const _n = ({ children: e, options: { marketingContentType: t } = { marketingContentType: ln.Standard } }) => {
        const { pathname: n } = (0, r.TH)();
        (() => {
          const e = (0, r.k6)(),
            { pathname: t } = (0, r.TH)(),
            n = t === i.$F;
          (0, a.useEffect)(() => {
            (async () => {
              const t = (await (0, Yt.I)({ url: `*://*.${i.zi}/*` })).find(
                  (e) => e.url && new Xt.Y(e.url).getRootDomain() === i.zi && e.url?.includes(i.$F) && !e.active
                ),
                o = (await (0, Qt.g)({ domain: i.zi, name: tn }))[0];
              if (o || t) {
                var a, s, c;
                const [l, _] = null != (a = o?.value?.split(",")) ? a : [],
                  u = t?.url ? t?.url : void 0,
                  p = null != (s = null != l ? l : (0, r.CN)(u).get("email")) ? s : "",
                  d = null != (c = null != _ ? _ : (0, r.CN)(u).get("team")) ? c : "";
                o && (await (0, Jt.O)({ url: `https://${i.zi}`, name: tn })),
                  n || (t?.id && (await (0, en.O)([t.id])), e.push(`${i.$F}?email=${p}&team=${d}`));
              }
            })();
          }, [e, n]);
        })();
        const o = n === i.$F,
          [s, c] = (0, a.useState)(!1),
          { getIsConsentNeeded: l, setUserConsent: _ } = {
            getIsConsentNeeded: async () => !0 !== (await S.C.getGlobalExtensionSettings()).personalDataConsent,
            setUserConsent: async (e) => await S.C.setGlobalExtensionSettings(e),
            getUserConsent: async () => await S.C.getGlobalExtensionSettings()
          };
        (0, a.useEffect)(() => {
          void 0 === s &&
            Promise.all([S.C.getLocalAccountsList(null), l()]).then(([{ localAccounts: e = [] }, t]) => {
              const n = e.length > 0 || !t;
              _({ interactionDataConsent: n, personalDataConsent: n }), c(!n);
            });
        }, []),
          (() => {
            var e;
            const { search: t } = (0, r.TH)(),
              n = null != (e = Ke.parse(t).inviteToken) ? e : "";
            (0, a.useEffect)(() => {
              n &&
                (async (e) => {
                  const t = await new nn.Z().acceptTeam({ token: e });
                  !t || t?.content?.error
                    ? await S.C.addLoginNotification({ type: Ne.LoginNotificationType.TEAM_ACCEPTANCE_ERROR })
                    : await S.C.addLoginNotification({ type: Ne.LoginNotificationType.TEAM_ACCEPTANCE_SUCCESS });
                })(n);
            }, [n]);
          })();
        const u = (function () {
          const e = (0, y.qr)(
              { queryConfig: { query: S.C.getLoginDeviceLimitFlow }, liveConfig: { live: S.C.liveLoginDeviceLimitFlow } },
              []
            ),
            t = (function (e) {
              const [t, n] = (0, a.useState)(void 0);
              return (
                (0, a.useEffect)(() => {
                  e.status !== y.rq.Success || t || (n(e), e.data && S.C.deviceLimitCapabilityUpdated());
                }, [e.status, t]),
                t
              );
            })(e);
          if (e.status === y.rq.Success && void 0 !== t) return e.data;
        })();
        return void 0 === s || void 0 === u
          ? on || (on = (0, v.tZ)(Qe, null))
          : (0, v.tZ)(
              a.Fragment,
              null,
              u
                ? (0, v.tZ)(jt, { stage: u })
                : (0, v.tZ)(
                    "div",
                    { sx: { backgroundColor: "ds.container.agnostic.neutral.supershy" }, className: Gt },
                    o
                      ? an || (an = (0, v.tZ)($e, null))
                      : t === ln.DashlaneBusiness
                      ? rn || (rn = (0, v.tZ)(je, null))
                      : sn || (sn = (0, v.tZ)(qe, null)),
                    (0, v.tZ)(
                      "div",
                      {
                        className: M()(Kt, {
                          "globalConsentLayout--P45_YzK7MO": s,
                          [$t]: n === i.TT,
                          "accountCreationPanelContainer--uRGG02y4j6": n !== i.TT
                        })
                      },
                      s
                        ? (0, v.tZ)(Ht, {
                            handleConsentSet: async (e) => {
                              await _(e), c(!1);
                            }
                          })
                        : e
                    )
                  ),
              cn || (cn = (0, v.tZ)(Xe, null))
            );
      };
      var un,
        pn,
        dn = n(295946),
        mn = n(339227),
        gn = n(133354),
        hn = n(765695),
        wn = n(753653),
        En = n(295087);
      const fn = ({ location: e, isTacFlow: t, logoutHandler: n }) => {
        var o;
        const [r, s] = (0, a.useState)({ type: wn.O.NONE }),
          { search: i } = (0, se.TH)(),
          l = Ke.parse(i),
          [_, u] = (0, a.useState)(l.email),
          [p, d] = (0, a.useState)(l.token),
          h = () => {
            u(void 0);
          },
          w = () => {
            d(void 0);
          },
          E = (0, m.k)(g.V, "authenticationFlowStatus"),
          {
            changeLogin: f,
            sendAccountEmail: b,
            submitEmailToken: v,
            submitTotp: y,
            submitBackupCode: S,
            changeTwoFactorAuthenticationOtpType: x,
            sendMasterPassword: T,
            resendEmailToken: C,
            resendPushNotification: O,
            switchToEmailToken: N,
            switchToDashlaneAuthenticator: A,
            clearError: k,
            useMasterPassword: R,
            retryWebAuthnAuthentication: I,
            webAuthnAuthenticationFail: D
          } = (0, le.u)(g.V),
          Z = () => {
            const e = E.data?.error;
            e && k();
          };
        (0, a.useEffect)(() => {
          e.search.includes("askmp") ? s({ type: wn.O.ASK_MP }) : _ && "EmailStep" !== E.data?.step && f({});
        }, [e, e.hash]);
        const P = E.status === gn.rq.Loading;
        return a.createElement(
          c.Ejs,
          { justifyContent: "center", alignItems: "center", flexDirection: "column" },
          t ? null : un || (un = a.createElement(Te.W_, null)),
          P
            ? pn ||
                (pn = a.createElement(Qe, {
                  containerHeight: "100%",
                  customMargin: "30% 0 0 0;",
                  customAnimationHeight: 100,
                  customAnimationWidth: 100
                }))
            : null !=
              (o =
                r.type === wn.O.ASK_MP && "MasterPasswordStep" === E.data?.step
                  ? a.createElement(hn.Wo, { clearInputError: Z, sendMasterPassword: T, logoutHandler: n, location: e, ...E.data })
                  : r.type === wn.O.WAITING_IDP_REDIRECTION
                  ? a.createElement(hn.ku, {
                      loginEmail: r.login,
                      setUseClientBypass: () => {},
                      sendUsageLog: !1,
                      localAccounts: [],
                      isNitroProvider: !1,
                      serviceProviderRedirectUrl: ""
                    })
                  : null)
            ? o
            : (() => {
                const t = E.data;
                if (!t) return null;
                if (!t.step || void 0 === t.step || "StartingStep" === t.step) return null;
                switch (t.step) {
                  case "EmailStep":
                    return a.createElement(hn.W2, { clearInputError: Z, sendEmail: b, prefilledEmail: _, onClearPrefilledEmail: h, ...t });
                  case "EmailTokenStep":
                    return a.createElement(hn.rG, {
                      clearInputError: Z,
                      resendEmailToken: C,
                      submitEmailToken: v,
                      switchToDashlaneAuthenticator: A,
                      prefilledToken: p,
                      onClearPrefilledToken: w,
                      ...t
                    });
                  case "DashlaneAuthenticatorStep":
                    return a.createElement(hn.a3, { resendPushNotification: O, switchToEmailToken: N, ...t });
                  case "TwoFactorAuthenticationOtpStep":
                    return void 0 !== t.twoFactorAuthenticationOtpType && "backupCode" === t.twoFactorAuthenticationOtpType
                      ? a.createElement(hn.sI, { submitBackupCode: S, changeTwoFactorAuthenticationOtpType: x, ...t })
                      : a.createElement(hn.JU, {
                          submitTotp: y,
                          clearInputError: Z,
                          changeTwoFactorAuthenticationOtpType: x,
                          prefilledToken: p,
                          onClearPrefilledToken: w,
                          ...t
                        });
                  case "MasterPasswordStep":
                    return a.createElement(hn.Wo, { clearInputError: Z, sendMasterPassword: T, logoutHandler: n, location: e, ...t });
                  case "WebAuthnStep":
                    return a.createElement(hn.UV, {
                      webAuthnAuthenticationFail: D,
                      retryWebAuthnAuthentication: I,
                      switchToMasterPassword: R,
                      ...t
                    });
                  case "SSORedirectionToIdpStep":
                    return a.createElement(hn.ku, { setUseClientBypass: s, sendUsageLog: !0, changeLogin: f, ...t });
                  case "DeviceToDeviceAuthenticationStep":
                    return a.createElement(hn.Lv, { ...t });
                  case "AuthenticationDoneStep":
                    return t.isDeviceToDeviceAuthentication
                      ? null
                      : a.createElement(hn.Wo, { clearInputError: Z, sendMasterPassword: T, logoutHandler: n, location: e, ...t });
                  default:
                    return (0, En.U)(t);
                }
              })()
        );
      };
      var bn = n(782038);
      const vn = ({ onClick: e, redirectLocation: t, helperText: n, buttonText: o }) => {
        const a = (0, r.k6)();
        return (0, v.tZ)(
          c.Ejs,
          {
            justifyContent: "flex-end",
            alignItems: "center",
            gap: "10px",
            sx: { position: "sticky", top: "40px", paddingRight: "40px", height: "40px" }
          },
          (0, v.tZ)(v.nv, { color: "ds.text.neutral.quiet" }, n),
          (0, v.tZ)(
            v.zx,
            {
              mood: "neutral",
              intensity: "quiet",
              onClick: (n) => {
                e?.(n), a.push(t);
              }
            },
            o
          )
        );
      };
      var yn = n(64496),
        Sn = n(460384),
        xn = n(948143),
        Tn = n(355053);
      let Cn = (function (e) {
        return (
          (e[(e.Email = 0)] = "Email"),
          (e[(e.OtpForNewDevice = 1)] = "OtpForNewDevice"),
          (e[(e.OtpToken = 2)] = "OtpToken"),
          (e[(e.Otp = 3)] = "Otp"),
          (e[(e.Password = 4)] = "Password"),
          (e[(e.ActivateSSO = 5)] = "ActivateSSO"),
          (e[(e.WebAuthn = 6)] = "WebAuthn"),
          (e[(e.DashlaneAuthenticator = 7)] = "DashlaneAuthenticator"),
          (e[(e.MasterPasswordLess = 8)] = "MasterPasswordLess"),
          e
        );
      })({});
      var On = n(145623);
      const Nn = () => {
        const { translate: e } = (0, N.Z)();
        return a.createElement(
          c.vDh,
          {
            size: "simple",
            title: a.createElement("h2", { className: "title--WGgiDPzjDw" }, e("webapp_update_title")),
            className: "infoBox--knTQ3UB8R9"
          },
          a.createElement(
            a.Fragment,
            null,
            a.createElement("p", { className: "description--RjLLcWrV_L" }, e.markup("webapp_update_body_markup")),
            e.markup("webapp_update_body_secondary_markup", { learnMore: On.tU })
          )
        );
      };
      var An = n(754674);
      const kn = "fieldContainer--ufpPaGgkOx",
        Rn = "otpContainer--OzUbAXHLmF";
      var In;
      const Dn = v.O9.lightTheme.ds,
        Zn = {
          INVALID_LOGIN: "webapp_login_form_email_fieldset_error_invalid_login",
          EMPTY_LOGIN: "webapp_login_form_email_fieldset_error_empty_login",
          NETWORK_ERROR: "webapp_login_form_email_fieldset_network_error_offline",
          USER_DOESNT_EXIST: "webapp_login_form_email_fieldset_error_user_doesnt_exist",
          USER_DOESNT_EXIST_UNLIKELY_MX: "webapp_login_form_email_fieldset_error_user_doesnt_exist_unlikely_mx",
          USER_DOESNT_EXIST_INVALID_MX: "webapp_login_form_email_fieldset_error_user_doesnt_exist_invalid_mx",
          THROTTLED: "webapp_login_form_email_fieldset_error_throttled",
          UNKNOWN_ERROR: "webapp_login_form_email_fieldset_error_unknown",
          SSO_BLOCKED: "webapp_login_form_email_fieldset_error_sso_blocked",
          TEAM_GENERIC_ERROR: "webapp_login_form_email_fieldset_error_team_generic_error"
        },
        Pn = "other_account",
        Ln = (e) => e === Ne.AuthenticationCode[Ne.AuthenticationCode.CLIENT_VERSION_DOES_NOT_SUPPORT_SSO_MIGRATION];
      class Mn extends a.Component {
        constructor(...e) {
          super(...e),
            (this.handleSelectChange = (e) => {
              const t = e.value;
              t !== Pn ? this.props.handleLoginChange(t) : this.props.handleOtherAccountSelect();
            }),
            (this.loginInputChangeHandler = (e) => {
              this.props.handleLoginChange(e.target.value);
            }),
            (this.handleKeyDown = (e) => {
              "Enter" === e.key && (e.preventDefault(), this.props.onLoginSubmit(e));
            }),
            (this.getLoginSelect = (e) => {
              const { login: t, translate: n } = this.props,
                o = e.map(({ login: e }) => ({ label: e, value: e }));
              o.push({ label: n("webapp_login_form_email_fieldset_select_option_other_account"), value: Pn });
              const a = e.find((e) => e.isLastSuccessfulLogin);
              if (!a) return null;
              const r = a.login,
                s = { label: t || r, value: t || r },
                i = { option: (e, { data: { value: t } }) => (t === Pn ? { ...e, color: Dn.text.neutral.quiet } : e) };
              return (0, l.tZ)(c.qWE, {
                id: "login-select",
                isClearable: !1,
                isSearchable: !1,
                options: o,
                onChange: this.handleSelectChange,
                value: s,
                customStyles: i
              });
            }),
            (this.shouldDisplayLoginDropdown = () =>
              !this.props.isLoginUsingAnotherLocalAccount && Boolean(this.props.localAccounts.length)),
            (this.onSubmit = (e) => {
              this.props.onLoginSubmit(e);
            });
        }
        render() {
          const { error: e, login: t, localAccounts: n, translate: o } = this.props,
            a = this.getLoginSelect(n),
            r = (0, l.tZ)("input", {
              autoFocus: !0,
              className: M()({ "loginInput--TXjEY61Kfy": !0, "inputError--TYcRlxfNfk": Zn[e] || Ln(e) }),
              onChange: this.loginInputChangeHandler,
              onKeyDown: this.handleKeyDown,
              type: "email",
              placeholder: o("webapp_login_form_email_fieldset_email_placeholder"),
              defaultValue: t || ""
            });
          return (0, l.tZ)(
            "fieldset",
            null,
            (0, l.tZ)(
              "label",
              { className: "label--YR4HUyYcFH" },
              o("webapp_login_form_email_fieldset_email_description"),
              (0, l.tZ)(
                "div",
                { className: kn, "data-testid": "login_container" },
                this.shouldDisplayLoginDropdown() ? a : r,
                Zn[e] ? (0, l.tZ)("div", { className: "errorText--O2Zkblh9Af", id: "login-account-email-input-error" }, o(Zn[e])) : null
              )
            ),
            Ln(this.props.error) ? In || (In = (0, l.tZ)(Nn, null)) : null,
            (0, l.tZ)(An.Z, {
              size: "large",
              fullWidth: !0,
              "data-testid": "login-button",
              loading: this.props.isCarbonRequestPending,
              label: o("webapp_login_form_email_fieldset_email_confirm"),
              onClick: this.onSubmit
            })
          );
        }
      }
      var Un = n(549967);
      const zn = ({ login: e, onBackToEmailStepClick: t }) => {
        const { translate: n } = (0, N.Z)();
        return a.createElement(
          "div",
          { className: "emailContainer--h43t4MEpwR" },
          a.createElement("h3", { className: "email--wCQBPc2ueW", "data-testid": "login-email-header" }, e),
          a.createElement(
            "button",
            { className: "anotherAccount--fmwIuIguIe", onClick: t, type: "button" },
            n("webapp_login_form_password_fieldset_log_in_different_account")
          )
        );
      };
      var Fn = n(797299);
      const Bn = {
          enter: "enter--rQNtxt1w51",
          enterActive: "enterActive--KCBiqtuJxe",
          exit: "exit--gDe9N2gRNw",
          exitActive: "exitActive--giRj4YPE7L"
        },
        Wn = {
          EMPTY_OTP: "webapp_login_form_password_fieldset_security_code_error_empty_otp",
          OTP_NOT_VALID: "webapp_login_form_password_fieldset_security_code_error_otp_not_valid",
          OTP_ALREADY_USED: "webapp_login_form_password_fieldset_security_code_error_otp_already_used",
          OTP_TOO_MANY_ATTEMPTS: "webapp_login_form_password_fieldset_security_code_error_token_too_many_attempts",
          UNKNOWN_ERROR: "webapp_login_form_password_fieldset_security_code_error_unkown",
          THROTTLED: "webapp_login_form_password_fieldset_error_throttled",
          NETWORK_ERROR: "webapp_login_form_password_fieldset_network_error_offline"
        },
        Vn = {
          EMPTY_TOKEN: "webapp_login_form_password_fieldset_security_code_error_empty_token",
          TOKEN_NOT_VALID: "webapp_account_security_settings_two_factor_authentication_turn_off_authenticator_invalid_security_code",
          REGISTER_DEVICE_FAILED: "webapp_login_form_password_fieldset_security_code_error_token_not_valid",
          TOKEN_LOCKED: "webapp_login_form_password_fieldset_security_code_error_token_locked",
          TOKEN_TOO_MANY_ATTEMPTS: "webapp_login_form_password_fieldset_security_code_error_token_too_many_attempts",
          TOKEN_ACCOUNT_LOCKED: "webapp_login_form_password_fieldset_security_code_error_token_account_locked",
          TOKEN_EXPIRED: "webapp_login_form_password_fieldset_security_code_error_token_expired",
          UNKNOWN_ERROR: "webapp_login_form_password_fieldset_security_code_error_unkown",
          THROTTLED: "webapp_login_form_password_fieldset_error_throttled",
          NETWORK_ERROR: "webapp_login_form_password_fieldset_network_error_offline"
        },
        jn = "webapp_login_form_password_fieldset_password_forgot",
        qn = "webapp_two_factor_authentication_reset_2fa",
        Gn = {
          LABEL: "webapp_login_form_password_fieldset_password_label",
          PLACEHOLDER: "webapp_login_form_password_fieldset_password_placeholder",
          HIDE_LABEL: "webapp_login_form_password_fieldset_password_hide_label",
          SHOW_LABEL: "webapp_login_form_password_fieldset_password_show_label",
          EMPTY_MASTER_PASSWORD: "webapp_login_form_password_fieldset_security_code_error_empty_password",
          NETWORK_ERROR: "webapp_login_form_password_fieldset_network_error_offline",
          WRONG_PASSWORD: "webapp_login_form_password_fieldset_security_code_error_wrong_password",
          THROTTLED: "webapp_login_form_password_fieldset_error_throttled",
          UNKNOWN_ERROR: "webapp_login_form_password_fieldset_security_code_error_unkown",
          USER_UNAUTHORIZED: "webapp_login_form_email_fieldset_error_user_unauthorized",
          UNKNOWN_SYNC_ERROR_EXTENSION: "webapp_login_form_email_fieldset_error_initial_sync_failed_try_again",
          UNKNOWN_SYNC_ERROR_WEBAPP: "webapp_login_form_email_fieldset_error_initial_sync_failed_contact_cs"
        },
        Kn = ({ error: e, hasError: t, onKeyDown: n, onPasswordInputChange: o, onTogglePasswordVisibility: r }) => {
          const { translate: s } = (0, N.Z)();
          return a.createElement(c.WUg, {
            autoFocus: !0,
            showPasswordTooltipText: s(Gn.SHOW_LABEL),
            hidePasswordTooltipText: s(Gn.HIDE_LABEL),
            placeholder: s(Gn.PLACEHOLDER),
            label: s(Gn.LABEL),
            onChange: (e) => {
              o(e.target.value);
            },
            onKeyDown: n,
            onPasswordVisibilityChanged: (e) => r?.(e),
            feedbackType: t ? "error" : void 0,
            feedbackText: t
              ? s("UNKNOWN_SYNC_ERROR" === e ? Gn.UNKNOWN_SYNC_ERROR_EXTENSION : null != (i = Gn[e]) ? i : Gn.UNKNOWN_ERROR)
              : void 0,
            spellCheck: !1
          });
          var i;
        },
        $n = ({ securityCode: e, maxLength: t, onTokenInputChange: n, onKeyDown: o, hasError: r, error: s }) => {
          var i;
          const { translate: l } = (0, N.Z)();
          return a.createElement(
            a.Fragment,
            null,
            a.createElement(
              c.nvN,
              { sx: { marginBottom: "12px" }, color: c.colors.grey00 },
              l("webapp_login_form_password_fieldset_security_code_description")
            ),
            a.createElement(c.rRH, {
              autoFocus: !0,
              value: e,
              maxLength: t,
              inputMode: "numeric",
              "data-testid": "token-input",
              onChange: n,
              onKeyDown: o,
              feedbackType: r ? "error" : void 0,
              feedbackText: r ? l(null != (i = Vn[s]) ? i : Vn.UNKNOWN_ERROR) : ""
            })
          );
        };
      var Hn,
        Xn,
        Yn,
        Qn = n(840376),
        Jn = n(340793);
      const eo = ({
        securityCode: e,
        maxLength: t,
        toggleBackupCodeInput: n,
        onOTPInputChange: o,
        onKeyDown: r,
        hasError: s,
        error: i
      }) => {
        var l;
        const { translate: _ } = (0, N.Z)(),
          [u, p] = (0, a.useState)(!1),
          d = (0, a.useRef)();
        return (
          (0, a.useEffect)(() => {
            i && (p(d.current === i && i === Ne.AuthenticationCode[Ne.AuthenticationCode.OTP_NOT_VALID]), (d.current = i));
          }, [i]),
          a.createElement(
            a.Fragment,
            null,
            a.createElement(
              c.nvN,
              { sx: { marginBottom: "12px" }, color: c.colors.grey00 },
              _("webapp_login_form_password_fieldset_security_code_otp_description")
            ),
            a.createElement(c.rRH, {
              autoFocus: !0,
              value: e,
              maxLength: t,
              inputMode: "numeric",
              "data-testid": "token-input",
              onChange: o,
              onKeyDown: r,
              feedbackType: s ? "error" : void 0,
              feedbackText: s ? _(null != (l = Wn[i]) ? l : Wn.UNKNOWN_ERROR) : ""
            }),
            u ? Hn || (Hn = a.createElement(Jn.T, null)) : null,
            a.createElement(
              c.nvN,
              { sx: { marginTop: "16px", lineHeight: 1.25 }, color: c.colors.grey00 },
              _("webapp_two_factor_authentication_cant_access_your_app"),
              " ",
              Xn || (Xn = a.createElement("br", null)),
              a.createElement(
                c.rUS,
                { color: c.colors.midGreen00, onClick: n, target: "_self" },
                _("webapp_two_factor_authentication_use_backup_code")
              )
            ),
            a.createElement(
              c.nvN,
              { sx: { margin: "8px 0", lineHeight: 1.25 }, color: c.colors.grey00 },
              _("webapp_two_factor_authentication_lost_your_phone"),
              Yn || (Yn = a.createElement("br", null)),
              a.createElement(c.rUS, { color: c.colors.midGreen00, href: Qn.IT, target: "_blank", rel: "noopener noreferrer" }, _(qn))
            )
          )
        );
      };
      var to, no;
      const oo = ({ securityCode: e, toggleBackupCodeInput: t, onOTPInputChange: n, hasError: o, error: r }) => {
        var s;
        const { translate: i } = (0, N.Z)();
        return (0, l.tZ)(
          a.Fragment,
          null,
          (0, l.tZ)(
            c.nvN,
            { sx: { marginBottom: "18px", lineHeight: 1.25 }, color: c.colors.grey00 },
            i("webapp_two_factor_authentication_use_backup_codes")
          ),
          (0, l.tZ)(c.oil, {
            autoFocus: !0,
            type: "text",
            fullWidth: !0,
            label: i("webapp_two_factor_authentication_backup_code_label"),
            value: e,
            feedbackType: o ? "error" : void 0,
            feedbackText: o ? i(null != (s = Wn[r]) ? s : Wn.UNKNOWN_ERROR) : "",
            onChange: n
          }),
          (0, l.tZ)(
            c.nvN,
            { sx: { marginTop: "16px" }, color: c.colors.grey00 },
            i("webapp_two_factor_authentication_cant_access_your_backup_codes"),
            to || (to = (0, l.tZ)("br", null)),
            (0, l.tZ)(
              c.rUS,
              { color: c.colors.midGreen00, onClick: t, target: "_self" },
              i("webapp_two_factor_authentication_use_6_digits_code")
            )
          ),
          (0, l.tZ)(
            c.nvN,
            { sx: { margin: "8px 0" }, color: c.colors.grey00 },
            i("webapp_two_factor_authentication_lost_your_backup_codes"),
            no || (no = (0, l.tZ)("br", null)),
            (0, l.tZ)(c.rUS, { color: c.colors.midGreen00, href: Qn.IT, target: "_blank", rel: "noopener noreferrer" }, i(qn))
          )
        );
      };
      var ao;
      class ro extends a.Component {
        constructor(...e) {
          super(...e),
            (this.state = {
              securityCode: "",
              showConfirmTokenResent: !1,
              rememberMeIsChecked: !1,
              showRememberMeCheckbox: !1,
              openSessionProgress: 0,
              showBackupCodeInput: !1
            }),
            (this.otp = (0, a.createRef)()),
            (this.otpToken = (0, a.createRef)()),
            (this.password = (0, a.createRef)()),
            (this.logUserForgetMasterPasswordEvent = (e) => {
              (0, A.Kz)(new k.UserForgetMasterPasswordEvent({ hasBiometricReset: !1, hasTeamAccountRecovery: e }));
            }),
            (this.unsubToSessionProgress = () => {}),
            (this.checkIsAccountRecoveryActivated = async () => {
              const e = await S.C.checkDoesLocalRecoveryKeyExist();
              e.success && e.doesExist ? this.props.handleIsAccountRecoveryAvailable(!0) : this.props.handleIsAccountRecoveryAvailable(!1);
            }),
            (this.preFillOtpToken = () => {
              this.props.loginStep === Cn.OtpToken &&
                this.props.preFilledOtpToken &&
                this.handleTokenValueChange(this.props.preFilledOtpToken);
            }),
            (this.handleOtpInputChange = (e) => {
              const { value: t } = e.target;
              if (this.state.showBackupCodeInput) this.setState({ securityCode: t }), this.props.handleOtpInputChange(t);
              else {
                const e = t.replace(/\D/g, "");
                this.props.handleOtpInputChange(e),
                  this.setState({ securityCode: e }, () => {
                    6 === e.length && this.handleFormSubmit();
                  });
              }
            }),
            (this.handleTokenValueChange = (e) => {
              const t = e.replace(/\D/g, "");
              this.props.handleTokenInputChange(t),
                this.setState({ securityCode: t }, () => {
                  6 === t.length && this.handleFormSubmit();
                });
            }),
            (this.handleTokenInputChange = ({ target: { value: e } }) => {
              this.handleTokenValueChange(e);
            }),
            (this.handleTokenResent = () => {
              (0, A.Kz)(new k.UserResendTokenEvent({})),
                S.C.openSessionResendToken({ login: this.props.login || "" }),
                this.setState({ showConfirmTokenResent: !0 }),
                setTimeout(() => {
                  this.setState({ showConfirmTokenResent: !1 });
                }, 2e3);
            }),
            (this.handleBackToEmailStepClick = () => {
              this.props.handleBackToEmailStepClick();
            }),
            (this.handleKeyDown = (e) => {
              if ("Enter" === e.key) return e.preventDefault(), void this.handleFormSubmit(e);
            }),
            (this.onRememberMeCheckboxChange = (e) => {
              this.setState({ rememberMeIsChecked: e }), this.props.handleRememberMeCheckboxChange(e);
            }),
            (this.handleFormSubmit = (e) => {
              this.props.handleFormSubmit(e);
            }),
            (this.onAccountRecoveryButtonClick = () => {
              this.logUserForgetMasterPasswordEvent(this.props.isAccountRecoveryAvailable),
                this.props.isAccountRecoveryPending && this.props.handleShowRecoveryPendingDialog(),
                this.props.handleShowAccountRecoveryDialog();
            }),
            (this.onForgetPasswordLinkClick = (e) => {
              this.logUserForgetMasterPasswordEvent(this.props.isAccountRecoveryAvailable),
                (0, tt.YT)({ type: "login", action: "forgotPassword" })(e);
            }),
            (this.handleDevicePersistenceChange = (e) => {
              this.props.handleDevicePersistenceChange(e.target.checked);
            }),
            (this.getAdditionalInput = () => {
              const { error: e, loginStep: t, translate: n } = this.props,
                o = Boolean(e),
                { showBackupCodeInput: a } = this.state,
                r = () => {
                  this.setState({ securityCode: "", showBackupCodeInput: !a }),
                    this.props.handleUseOTPBackup(!a),
                    this.props.handleTokenInputChange("");
                },
                s = () => {
                  const { defaultDevicePersistenceValue: e } = this.props;
                  return !1;
                };
              return t === Cn.OtpToken
                ? (0, l.tZ)(
                    "div",
                    { className: M()(kn, Rn) },
                    (0, l.tZ)($n, {
                      securityCode: this.state.securityCode,
                      maxLength: 6,
                      onTokenInputChange: this.handleTokenInputChange,
                      onKeyDown: this.handleKeyDown,
                      hasError: o,
                      error: e
                    }),
                    s()
                  )
                : t === Cn.Otp || t === Cn.OtpForNewDevice
                ? (0, l.tZ)(
                    "div",
                    { className: M()(kn, Rn) },
                    a
                      ? (0, l.tZ)(oo, {
                          onOTPInputChange: this.handleOtpInputChange,
                          securityCode: this.state.securityCode,
                          hasError: o,
                          toggleBackupCodeInput: r,
                          error: e
                        })
                      : (0, l.tZ)(eo, {
                          securityCode: this.state.securityCode,
                          maxLength: 6,
                          onOTPInputChange: this.handleOtpInputChange,
                          onKeyDown: this.handleKeyDown,
                          hasError: o,
                          toggleBackupCodeInput: r,
                          error: e
                        }),
                    t === Cn.OtpForNewDevice && s()
                  )
                : null;
            }),
            (this.showRememberMeCheckbox = () => {
              const e = this.props.localAccounts;
              return !!e && e.some((e) => !e.hasLoginOtp && e.login === this.props.login && "webauthn" !== e.rememberMeType);
            }),
            (this.showDashlaneUpdateInfoBox = (e) =>
              e === Ne.AuthenticationCode[Ne.AuthenticationCode.CLIENT_VERSION_DOES_NOT_SUPPORT_SSO_MIGRATION]);
        }
        componentDidMount() {
          this.checkIsAccountRecoveryActivated(), this.preFillOtpToken();
          const e = this.showRememberMeCheckbox();
          this.setState({ showRememberMeCheckbox: e }),
            (this.unsubToSessionProgress = S.C.openSessionProgressChanged.on(({ statusProgress: e }) => {
              this.setState({ openSessionProgress: e });
            }));
        }
        componentWillUnmount() {
          this.unsubToSessionProgress();
        }
        componentDidUpdate() {
          const { isCarbonRequestPending: e } = this.props;
          e || this.focusField();
        }
        focusField() {
          const { loginStep: e } = this.props;
          switch (e) {
            case Cn.Otp:
            case Cn.OtpForNewDevice:
              this.otp.current && this.otp.current.focus();
              break;
            case Cn.OtpToken:
              this.otpToken.current && this.otpToken.current.focus();
              break;
            default:
              this.password.current && this.password.current.focus();
          }
        }
        render() {
          const {
              error: e,
              isCarbonRequestPending: t,
              loginStep: n,
              login: o,
              translate: r,
              isDashlaneAuthenticatorAvailable: s,
              switchToDashlaneAuthenticatorStep: i
            } = this.props,
            { rememberMeIsChecked: _, showConfirmTokenResent: u, showRememberMeCheckbox: p } = this.state,
            d = [Cn.OtpToken, Cn.Otp, Cn.OtpForNewDevice].includes(n),
            m = Boolean(e),
            g = n === Cn.OtpToken;
          return (0, l.tZ)(
            "fieldset",
            null,
            (0, l.tZ)(zn, { login: o, onBackToEmailStepClick: this.handleBackToEmailStepClick }),
            d
              ? (0, l.tZ)("div", null, this.getAdditionalInput())
              : (0, l.tZ)(
                  "div",
                  { className: kn },
                  (0, l.tZ)(Kn, {
                    error: e,
                    hasError: m,
                    onKeyDown: this.handleKeyDown,
                    onPasswordInputChange: this.props.handlePasswordInputChange
                  }),
                  p &&
                    !this.showDashlaneUpdateInfoBox(e) &&
                    (0, l.tZ)(
                      "div",
                      { sx: { marginTop: "16px" } },
                      (0, l.tZ)(v.XZ, {
                        label: r("webapp_login_form_password_fieldset_remember_me"),
                        defaultChecked: _,
                        onChange: (e) => {
                          this.onRememberMeCheckboxChange(e.target.checked);
                        }
                      }),
                      _ &&
                        (0, l.tZ)(
                          "div",
                          { className: "warningOnlyEnable--uJf_gb1hOc" },
                          r("webapp_login_form_password_fieldset_remember_me_warning_text")
                        )
                    )
                ),
            this.showDashlaneUpdateInfoBox(e) ? ao || (ao = (0, l.tZ)(Nn, null)) : null,
            !m && this.state.openSessionProgress > 0
              ? (0, l.tZ)(Fn.Z, { progress: this.state.openSessionProgress })
              : (0, l.tZ)(An.Z, {
                  size: "large",
                  fullWidth: !0,
                  loading: t,
                  label: r("webapp_login_form_password_fieldset_password_confirm_log_in"),
                  onClick: this.handleFormSubmit,
                  "data-testid": "login-button"
                }),
            !d && this.props.isAccountRecoveryAvailable
              ? (0, l.tZ)(
                  "button",
                  {
                    type: "button",
                    onClick: this.onAccountRecoveryButtonClick,
                    className: "disclaimerButton--IfDDo_tB6_ disclaimerLink--BOkSbZ0BF2"
                  },
                  r(jn)
                )
              : null,
            d || this.props.isAccountRecoveryAvailable
              ? null
              : (0, l.tZ)(
                  "a",
                  {
                    href: "https://support.dashlane.com/hc/articles/202698981-I-forgot-my-master-password-what-can-I-do-",
                    onClick: this.onForgetPasswordLinkClick,
                    className: "disclaimerLink--BOkSbZ0BF2",
                    target: "_blank",
                    rel: "noopener noreferrer"
                  },
                  r(jn)
                ),
            g
              ? (0, l.tZ)(
                  a.Fragment,
                  null,
                  (0, l.tZ)(
                    c.Ejs,
                    { alignItems: "center", sx: { marginTop: "36px", marginBottom: "24px" } },
                    (0, l.tZ)(c.nvN, { sx: { marginRight: "5px" } }, r("webapp_dashlane_authenticator_authentication_didnt_receive_code")),
                    (0, l.tZ)(
                      c.zxk,
                      { type: "button", nature: "ghost", onClick: this.handleTokenResent, sx: { textDecoration: "underline" } },
                      r("webapp_login_form_password_fieldset_resend_token")
                    ),
                    (0, l.tZ)(
                      Un.Z,
                      null,
                      u
                        ? (0, l.tZ)(
                            bn.Z,
                            { classNames: { ...Bn }, timeout: { enter: 400, exit: 0 }, exit: !1 },
                            (0, l.tZ)(
                              "div",
                              { className: "emailTokenConfirmation--ZpNoLyqhOQ" },
                              r("webapp_login_form_password_fieldset_security_code_resent")
                            )
                          )
                        : null
                    )
                  ),
                  s
                    ? (0, l.tZ)(
                        c.Ejs,
                        { alignItems: "center", sx: { margin: "24px 0px" } },
                        (0, l.tZ)(
                          c.nvN,
                          { sx: { marginRight: "5px" } },
                          r("webapp_dashlane_authenticator_authentication_cant_access_your_email")
                        ),
                        (0, l.tZ)(
                          c.rUS,
                          { onClick: i, color: c.colors.midGreen00 },
                          r("webapp_dashlane_authenticator_authentication_use_dashlane_authenticator_app")
                        )
                      )
                    : null
                )
              : null
          );
        }
      }
      var so = n(545431);
      const io = "actionButton--QTqWFEK7g6";
      var co,
        lo = n(867167);
      const _o = ({ login: e, switchToPasswordStep: t, switchToEmailStep: n }) => {
          const { translate: o } = (0, N.Z)(),
            [r, s] = (0, a.useState)(!1),
            i = a.useRef(new AbortController()),
            l = async () => {
              try {
                const t = await (0, lo.rD)(e);
                if (!t.success) return void s(!0);
                (await (0, lo.nv)(t, e, i.current.signal)).success || s(!0);
              } catch (e) {
                s(!0);
              }
            };
          return (
            (0, a.useEffect)(() => {
              l();
            }, []),
            a.createElement(
              c.Ejs,
              { flexDirection: "column" },
              a.createElement(zn, { login: e, onBackToEmailStepClick: n }),
              a.createElement(
                c.Ejs,
                { flexDirection: "column", alignItems: "center", justifyContent: "center" },
                a.createElement(
                  c.k$b,
                  { sx: { mb: 50, mt: 24 }, alignSelf: "center" },
                  co || (co = a.createElement(c.oie, { size: 60, "aria-hidden": "true" }))
                )
              ),
              r
                ? a.createElement(
                    a.Fragment,
                    null,
                    a.createElement(c.k$b, null, a.createElement(c.X6q, { size: "x-small" }, o("webapp_login_form_webauthn_error_title"))),
                    a.createElement(
                      c.k$b,
                      null,
                      a.createElement(
                        c.nvN,
                        { id: "disableDialogBody", color: "neutrals.8", sx: { mt: "10px", mb: "26px" } },
                        o("webapp_login_form_webauthn_error_title_description")
                      )
                    )
                  )
                : null,
              a.createElement(
                c.k$b,
                { sx: { mb: 5 } },
                a.createElement(
                  c.zxk,
                  {
                    nature: "primary",
                    type: "button",
                    onClick: () => {
                      i && (i.current.abort(), (i.current = new AbortController())),
                        (0, A.Kz)(new k.UserAskUseOtherAuthenticationEvent({ next: k.Mode.MasterPassword, previous: k.Mode.Biometric })),
                        t();
                    },
                    className: io
                  },
                  o("webapp_login_form_webauthn_button_use_master_password")
                ),
                r
                  ? a.createElement(
                      c.k$b,
                      { sx: { mt: 3 } },
                      a.createElement(
                        c.zxk,
                        {
                          nature: "secondary",
                          type: "button",
                          onClick: () => {
                            s(!1), l();
                          },
                          className: io
                        },
                        o("webapp_login_form_webauthn_error_title_button_retry")
                      )
                    )
                  : null
              )
            )
          );
        },
        uo = ({ login: e, step: t, lastSuccessfulAccount: n }) => {
          const { translate: o } = (0, N.Z)(),
            r = t === Cn.Password && e === n?.login && "webauthn" === n.rememberMeType && n.shouldAskMasterPassword;
          return a.createElement(
            "header",
            null,
            a.createElement(
              "h1",
              { className: M()("heading--OVR_vOnimN", { "headingWithDescription--czkfC1wkxh": r }) },
              o("webapp_login_form_heading_log_in")
            ),
            r
              ? a.createElement(
                  c.nvN,
                  { color: c.colors.dashGreen01, size: "x-small", sx: { mb: "16px", fontSize: "14px", lineHeight: "20px" } },
                  o("webapp_login_form_password_step_webauthn_description")
                )
              : null
          );
        };
      var po = n(548559),
        mo = n(829645),
        go = n(193096),
        ho = n(265727),
        wo = n(955370),
        Eo = n(345728),
        fo = n(22393);
      const bo = {
          generic: "_common_generic_error",
          [Ne.AuthenticationCode[Ne.AuthenticationCode.DASHLANE_AUTHENTICATOR_PUSH_NOTIFICATION_DENIED]]:
            "webapp_dashlane_authenticator_authentication_error_denied",
          [Ne.AuthenticationCode[Ne.AuthenticationCode.TOKEN_EXPIRED]]: "webapp_dashlane_authenticator_authentication_error_timeout"
        },
        vo = ({ switchToOtpTokenStep: e, sendDashlaneAuthenticatorPush: t, errorKey: n }) => {
          const { translate: o } = (0, N.Z)(),
            [r, s] = (0, a.useState)(!1);
          return (
            (0, a.useEffect)(() => {
              s(!n);
            }, [n]),
            (0, l.tZ)(
              a.Fragment,
              null,
              (0, l.tZ)(c.nvN, { sx: { fontSize: "32px", fontWeight: 500 } }, o("webapp_dashlane_authenticator_authentication_title")),
              r
                ? (0, l.tZ)(c.HoD, {
                    "data-testid": "dashlane-authenticator-loading-icon",
                    sx: { margin: "24px 0px" },
                    size: "80px",
                    color: c.colors.dashGreen00
                  })
                : (0, l.tZ)(
                    c.Ejs,
                    { flexDirection: "column", sx: { margin: "24px 0px" } },
                    (0, l.tZ)(O.Z, {
                      height: 80,
                      width: 80,
                      animationParams: { renderer: "svg", animationData: C, loop: !1, autoplay: !0 }
                    }),
                    n
                      ? (0, l.tZ)(
                          a.Fragment,
                          null,
                          (0, l.tZ)(
                            c.nvN,
                            { size: "small", color: c.colors.functionalRed02, sx: { margin: "24px 0px" } },
                            o(bo[n] ? bo[n] : bo.generic)
                          ),
                          (0, l.tZ)(
                            c.zxk,
                            { sx: { alignSelf: "baseline" }, type: "button", nature: "primary", onClick: t },
                            o("webapp_dashlane_authenticator_authentication_send_another_push_button")
                          )
                        )
                      : null
                  ),
              (0, l.tZ)(
                c.Ejs,
                { alignItems: "center" },
                (0, l.tZ)(
                  c.nvN,
                  { size: "small", sx: { marginRight: "5px" } },
                  o("webapp_dashlane_authenticator_authentication_cant_access_your_app")
                ),
                (0, l.tZ)(
                  c.rUS,
                  { target: "_blank", rel: "noopener noreferrer", onClick: e, color: c.colors.midGreen00, sx: { fontSize: "14px" } },
                  o("webapp_dashlane_authenticator_authentication_send_code_by_email_link")
                )
              )
            )
          );
        },
        yo = ({ switchToEmailStep: e }) => {
          const { translate: t } = (0, N.Z)();
          return (0, l.tZ)(
            a.Fragment,
            null,
            (0, l.tZ)(c.X6q, null, t("webapp_login_form_password_less_title")),
            (0, l.tZ)(
              c.nvN,
              { color: "neutrals.8", sx: { margin: "12px 0px 32px 0px" } },
              t("webapp_login_form_password_less_description")
            ),
            (0, l.tZ)(
              c.Ejs,
              { flexDirection: "column", gap: "8px" },
              (0, l.tZ)(c.zxk, { nature: "primary", type: "button", onClick: e }, t("webapp_login_form_password_less_confirm_button")),
              (0, l.tZ)(
                c.zxk,
                { nature: "secondary", type: "button", onClick: () => (0, tt.nL)(Qn.V6) },
                t("webapp_login_form_password_less_help_button")
              )
            )
          );
        };
      var So,
        xo = n(412131),
        To = n(326061),
        Co = n(7633),
        Oo = n(930336);
      const No = {
          [Cn.ActivateSSO]: k.PageView.LoginSso,
          [Cn.Email]: k.PageView.LoginEmail,
          [Cn.Password]: k.PageView.LoginMasterPassword,
          [Cn.Otp]: k.PageView.LoginTokenAuthenticator,
          [Cn.OtpToken]: k.PageView.LoginTokenEmail,
          [Cn.OtpForNewDevice]: k.PageView.LoginTokenAuthenticator,
          [Cn.WebAuthn]: k.PageView.LoginWebauthn
        },
        Ao = ({
          accounts: e,
          lee: t,
          shouldAskMasterPassword: n,
          requiredPermissions: o,
          preFilledEmail: s,
          preFilledOtpToken: c,
          isTACFlow: _ = !1
        }) => {
          const u = (0, xo.t)(),
            { logout: p } = (0, le.u)(g.V),
            d = (0, To.a)(t.dispatchGlobal),
            [m, h] = (0, a.useState)(""),
            [w, E] = (0, a.useState)(""),
            [f, b] = (0, a.useState)(!1),
            [v, y] = (0, a.useState)(!1),
            [x, T] = (0, a.useState)(!1),
            [C, O] = (0, a.useState)(!1),
            [R, I] = (0, a.useState)(!1),
            [D, Z] = (0, a.useState)(!1),
            [L, M] = (0, a.useState)(!1),
            [U, z] = (0, a.useState)(!1),
            [F, B] = (0, a.useState)(null != s ? s : ""),
            [W, V] = (0, a.useState)(""),
            [j, q] = (0, a.useState)(!1),
            [G, K] = (0, a.useState)(""),
            [$, H] = (0, a.useState)(null),
            [X, Y] = (0, a.useState)(!1),
            [Q, J] = (0, a.useState)(!0),
            [ee, te] = (0, a.useState)(Cn.Email),
            [ne, oe] = (0, a.useState)(""),
            [ae, re] = (0, a.useState)(!1),
            [se, ie] = (0, a.useState)(!1),
            [ce, _e] = (0, a.useState)(!1),
            [ue, pe] = (0, a.useState)(!1),
            [de, me] = (0, a.useState)(!1),
            { translate: ge } = (0, N.Z)(),
            he = (0, a.useRef)([]),
            we = (0, a.useRef)(u?.step),
            [Ee, fe] = (0, a.useState)(!1),
            { loginUserWithEnclaveSSO: be } = (0, le.u)(Sn.y),
            ve = (0, a.useCallback)(async () => {
              "failure" === (await be({ userEmailAddress: F })).tag && (Z(!1), E("UNKNOWN_ERROR"));
            }, [be, F]),
            ye = (0, a.useCallback)(
              (e) => {
                No[e] && (0, A.Nc)(No[e], _ ? k.BrowseComponent.Tac : k.BrowseComponent.MainApp);
              },
              [_]
            ),
            Se = (0, a.useCallback)(
              (e) => {
                const t = e !== ee;
                E(""), t && (te(e), ye(e));
              },
              [ee, ye]
            );
          (0, a.useEffect)(() => {
            E("");
          }, [F, $, X, G, W]);
          const xe = (0, a.useCallback)(async () => {
              const { migration: e, serviceProviderUrl: t } = await S.C.getSSOMigrationInfo(),
                { isNitroProvider: n } = await S.C.getSSOProviderInfo();
              void 0 !== e &&
                t &&
                (e === yn.vX.MP_TO_SSO
                  ? (Se(Cn.ActivateSSO), oe((0, tt.C0)(t)), fe(null != n && n), ie(!1))
                  : e === yn.vX.MP_TO_SSO_WITH_INFO && (Se(Cn.ActivateSSO), oe((0, Tn.$9)()), ie(!0)));
            }, [Se]),
            Te = (0, a.useCallback)(() => e.find((e) => e.isLastSuccessfulLogin), [e]),
            Ce = (0, a.useCallback)(() => {
              if (n) return void Se(Cn.Password);
              if (!(0, Eo._U)()) return;
              const e = Te();
              e && "webauthn" === e.rememberMeType && (e.shouldAskMasterPassword ? Se(Cn.Password) : Se(Cn.WebAuthn));
            }, [Te, n, Se]),
            Oe = (0, a.useCallback)(() => {
              he.current = he.current.concat([
                S.C.openSessionFailed.on((e) => {
                  const t = e.errorCode;
                  "USER_DOESNT_EXIST_SSO" === t && (0, r.uX)(`${i.SF}?email=${F}`), E(t), Z(!1);
                }),
                S.C.liveLoginStatus.on((e) => {
                  e.loggedIn && e.needsSSOMigration && xe();
                }),
                S.C.openSessionMasterPasswordLess.on(() => {
                  Se(Cn.MasterPasswordLess);
                }),
                S.C.openSessionTokenSent.on(() => {
                  Se(Cn.OtpToken);
                }),
                S.C.openSessionDashlaneAuthenticator.on(() => {
                  Se(Cn.DashlaneAuthenticator),
                    pe(!0),
                    S.C.openSessionWithDashlaneAuthenticator({ login: F, password: $, persistData: Q, deviceName: m });
                }),
                S.C.openSessionOTPSent.on(() => {
                  Se(Cn.Otp);
                }),
                S.C.openSessionOTPForNewDeviceRequired.on(() => {
                  Se(Cn.OtpForNewDevice);
                }),
                S.C.openSessionAskMasterPassword.on(() => {
                  Se(Cn.Password);
                })
              ]);
            }, [xe, Ce, ee, m, F, $, Q, Se]);
          (0, a.useEffect)(
            () => (
              Oe(),
              () => {
                he.current.forEach((e) => e());
              }
            ),
            [Oe]
          ),
            (0, a.useEffect)(() => {
              if (!we.current && u?.step) {
                we.current = u.step;
                const e = ((e) => {
                  switch (e) {
                    case Ne.LoginStep.BackupCodeOTP1:
                    case Ne.LoginStep.OTP1:
                      return Cn.OtpForNewDevice;
                    case Ne.LoginStep.BackupCodeOTP2:
                    case Ne.LoginStep.OTP2:
                      return Cn.Otp;
                    case Ne.LoginStep.OTPToken:
                      return Cn.OtpToken;
                    case Ne.LoginStep.Password:
                      return Cn.Password;
                    case Ne.LoginStep.Email:
                      return Cn.Email;
                    default:
                      return;
                  }
                })(we.current);
                e && te(e);
              }
            }, [u]),
            (0, a.useEffect)(() => {
              Ce();
            }, []),
            (0, a.useEffect)(() => {
              Z(!1), ye(ee);
            }, [ee, ye]),
            (0, a.useEffect)(() => {
              if ((h((0, wo.M)(ge("webapp_login_form_regsiter_fallback_browser_name"))), E(""), !s)) {
                const e = Te()?.login;
                e && B(e),
                  S.C.getUserLogin().then((e) => {
                    null != e && e !== F && B(e);
                  });
              }
              (async () => {
                const e = await S.C.isRecoveryRequestPending();
                e.success && y(e.response);
              })();
            }, []);
          const Ae = (0, a.useCallback)(
            async (e) => {
              e && e.preventDefault(), E(""), Z(!0);
              const t = await S.C.openSession({ login: F }),
                { isNitroProvider: n, serviceProviderUrl: o } = await S.C.getSSOProviderInfo();
              if (o) {
                localStorage.setItem(Oo.MG, "true");
                const e = (0, tt.C0)(o);
                if ((oe(e), fe(null != n && n), t === Ne.LoginResultEnum.SSOLogin)) return void (n ? ve() : (0, tt.nL)(e));
              }
            },
            [F, ve]
          );
          (0, a.useEffect)(() => {
            s && Ae();
          }, [Ae, s]);
          const ke = async (e) => {
              if ((e && e.preventDefault(), E(""), Z(!0), f && null !== $)) {
                const e = await (async (e) => await S.C.checkRecoveryRequestStatus({ masterPassword: e }))($);
                if (e.success)
                  switch ((y(!1), I(!1), T(!1), O(!1), Z(!1), e.response.status)) {
                    case "PENDING":
                      return y(!0), void I(!0);
                    case "APPROVED":
                      return void T(!0);
                    case "REFUSED":
                      return void O(!0);
                    case "OVERRIDDEN":
                      return;
                    case "CANCELED":
                      return void I(!0);
                  }
              }
              switch (ee) {
                case Cn.OtpToken:
                  S.C.openSessionWithToken({ login: F, password: $, token: G, persistData: Q, deviceName: m });
                  break;
                case Cn.Otp:
                  S.C.openSessionWithOTP({ login: F, password: $, otp: W, withBackupCode: j });
                  break;
                case Cn.OtpForNewDevice:
                  S.C.openSessionWithOTPForNewDevice({ login: F, password: $, otp: W, persistData: Q, deviceName: m, withBackupCode: j });
                  break;
                case Cn.Password:
                  S.C.openSessionWithMasterPassword({
                    login: F,
                    password: null != $ ? $ : "",
                    rememberPassword: X,
                    requiredPermissions: o
                  });
              }
            },
            Re = () => {
              _e(!1), I(!1), T(!1), O(!1), M(!1);
            },
            Ie = async () => {
              (0, A.Kz)(new k.UserUseAnotherAccountEvent({})),
                h(""),
                Re(),
                Z(!1),
                z(!1),
                V(""),
                K(""),
                H(null),
                oe(""),
                re(!1),
                ie(!1),
                pe(!1),
                te(Cn.Email),
                p();
            },
            De = () => {
              T(!1);
            },
            Ze = () => {
              Re(), _e(!0);
            },
            Pe = ee === Cn.Email,
            Le = ee === Cn.Password,
            Me = ee === Cn.Otp || ee === Cn.OtpToken || ee === Cn.OtpForNewDevice,
            Ue = ee === Cn.ActivateSSO,
            ze = ee === Cn.WebAuthn,
            Fe = ee === Cn.DashlaneAuthenticator,
            Be = ee === Cn.MasterPasswordLess,
            We = Te();
          return (0, l.tZ)(
            "div",
            null,
            So || (So = (0, l.tZ)("div", { id: "dashlane-dialog" })),
            (0, l.tZ)(
              fo.r,
              null,
              Fe || Be ? null : (0, l.tZ)(uo, { login: F, step: ee, lastSuccessfulAccount: We }),
              (0, l.tZ)(
                "form",
                {
                  autoComplete: "off",
                  className: "form--E2abwVNcMi",
                  onSubmit: (e) => {
                    const t = ee === Cn.Password,
                      n = ee === Cn.Otp || ee === Cn.OtpToken || ee === Cn.OtpForNewDevice,
                      o = ee === Cn.DashlaneAuthenticator;
                    (t || n || o) && (e.preventDefault(), ke());
                  }
                },
                Pe
                  ? (0, l.tZ)(Mn, {
                      error: w,
                      handleLoginChange: B,
                      handleOtherAccountSelect: () => {
                        B(""), z(!0);
                      },
                      isCarbonRequestPending: D,
                      isLoginUsingAnotherLocalAccount: U,
                      localAccounts: e,
                      login: F,
                      onLoginSubmit: Ae,
                      translate: ge
                    })
                  : null,
                Le || Me || Ue
                  ? (0, l.tZ)(ro, {
                      defaultDevicePersistenceValue: Q,
                      dispatchGlobal: t.dispatchGlobal,
                      error: w,
                      handleBackToEmailStepClick: Ie,
                      handleDevicePersistenceChange: (e) => {
                        J(e), E("");
                      },
                      handleFormSubmit: ke,
                      handlePasswordInputChange: H,
                      handleRememberMeCheckboxChange: Y,
                      handleOtpInputChange: V,
                      handleUseOTPBackup: q,
                      handleTokenInputChange: K,
                      handleShowAccountRecoveryDialog: Ze,
                      handleIsAccountRecoveryAvailable: b,
                      handleShowRecoveryPendingDialog: () => {
                        Re(), I(!0);
                      },
                      isCarbonRequestPending: D,
                      isAccountRecoveryAvailable: f,
                      isAccountRecoveryPending: v,
                      login: F,
                      localAccounts: e,
                      loginStep: ee,
                      preFilledOtpToken: c,
                      translate: ge,
                      isDashlaneAuthenticatorAvailable: ue,
                      switchToDashlaneAuthenticatorStep: async () => {
                        Se(Cn.DashlaneAuthenticator),
                          await S.C.openSessionWithDashlaneAuthenticator({ login: F, password: $, persistData: Q, deviceName: m });
                      }
                    })
                  : null,
                ze ? (0, l.tZ)(_o, { login: F, switchToPasswordStep: () => Se(Cn.Password), switchToEmailStep: Ie }) : null
              ),
              Ue && !ae
                ? (0, l.tZ)(xn.j, {
                    activateLink: ne,
                    onClose: () => {
                      re(!0);
                    },
                    localSsoRedirect: se,
                    isNitroSSO: Ee,
                    nitroLoginCommand: ve
                  })
                : null,
              Fe
                ? (0, l.tZ)(vo, {
                    errorKey: w,
                    switchToOtpTokenStep: async () => {
                      await S.C.cancelDashlaneAuthenticatorRegistration(),
                        Se(Cn.OtpToken),
                        await S.C.openSessionResendToken({ login: F || "" });
                    },
                    sendDashlaneAuthenticatorPush: async () => {
                      Z(!0),
                        E(""),
                        await S.C.openSessionWithDashlaneAuthenticator({ login: F, password: $, persistData: Q, deviceName: m });
                    }
                  })
                : null,
              Be ? (0, l.tZ)(yo, { switchToEmailStep: Ie }) : null,
              (0, l.tZ)(so.v, {
                isOpen: ae,
                onLogout: () => {
                  d(), re(!1);
                },
                onDismiss: () => {
                  re(!1);
                },
                showCloseIcon: !1
              }),
              (0, l.tZ)(po.W, {
                showAccountRecoveryDialog: ce,
                handleDismiss: () => {
                  _e(!1);
                }
              }),
              (0, l.tZ)(mo.H, {
                isAccountRecoveryPending: R,
                shouldSendNewRequest: !$,
                handleShowAccountRecoveryDialog: Ze,
                handleShowGenericRecoveryError: () => {
                  Re(), M(!0);
                },
                handleDismiss: () => {
                  I(!1);
                }
              }),
              (0, l.tZ)(go.g, {
                isAccountRecoveryApproved: x,
                handleDismiss: De,
                handleAccountRecovery: async () => {
                  if (!$) return Z(!1), void T(!1);
                  De();
                  const e = await S.C.recoverUserData({ masterPassword: $ });
                  Z(!1),
                    e.success &&
                      (S.C.changeMasterPassword({ newPassword: $, flow: Ne.ChangeMPFlowPath.ADMIN_ASSISTED_RECOVERY }),
                      (0, r.uX)(`${i.ci}/change-master-password`));
                }
              }),
              (0, l.tZ)(ho._, {
                isAccountRecoveryRejected: C,
                handleDismiss: () => {
                  O(!1);
                }
              }),
              (0, l.tZ)(P.H, {
                isAccountRecoveryError: L,
                handleGenericRecoveryErrorClose: () => {
                  M(!1);
                }
              }),
              (0, l.tZ)(Co.ko, {
                isOpen: de,
                handleButtonClick: (e) => {
                  e.preventDefault(), (0, tt.nL)(Qn.JW);
                },
                handleClose: () => {
                  me(!1);
                }
              })
            )
          );
        },
        ko = { appear: "appear--tCOfkY_4m1", appearActive: "appearActive--Rmhri1AxL1" };
      var Ro,
        Io = n(48177);
      const Do = ln.Standard,
        Zo = ({ options: { marketingContentType: e = Do, requiredPermissions: t } = {}, location: n, lee: o }) => {
          const {
              carbon: { localAccounts: s }
            } = o,
            { search: c } = (0, r.TH)(),
            _ = Ke.parse(c),
            u = _.email,
            p = _.token,
            { translate: d } = (0, N.Z)(),
            [m, g] = (0, a.useState)(void 0);
          (0, a.useEffect)(() => {
            const e = !n.state?.ignoreRedirect && n.search.includes("askmp");
            g(e);
          }, [n.search]);
          const h = e === ln.DashlaneBusiness,
            w =
              (ln.Standard, { redirectLocation: "dashlaneBusiness" === e ? i.P : i.SF, buttonText: d("webapp_auth_panel_create_sign_up") });
          return void 0 === m
            ? null
            : (0, l.tZ)(
                a.Fragment,
                null,
                (0, l.tZ)(vn, { ...w, helperText: d("webapp_auth_panel_create_an_account") }),
                (0, l.tZ)(
                  bn.Z,
                  {
                    classNames: { appear: ko.appear, appearActive: ko.appearActive },
                    appear: !0,
                    in: !0,
                    timeout: { appear: 500, enter: 0, exit: 0 }
                  },
                  (0, l.tZ)(
                    "div",
                    { className: "loginPanelWrapper--mw7ALD4B3k" },
                    (0, l.tZ)(
                      "div",
                      { className: M()("panel--AjV4TV2oGi", "loginPanel--EpThv9MZB4") },
                      null !== s
                        ? (0, l.tZ)(Ao, {
                            accounts: s,
                            lee: o,
                            requiredPermissions: t,
                            shouldAskMasterPassword: m,
                            preFilledEmail: u,
                            preFilledOtpToken: p,
                            isTACFlow: h
                          })
                        : (0, l.tZ)("h1", { className: "subheading--QeqKHbbK06" }, d("webapp_login_panel_loading"))
                    )
                  )
                ),
                Ro || (Ro = (0, l.tZ)(Io.r, { layout: "absolute" }))
              );
        },
        Po = (e) => {
          const { options: t } = e,
            n = t?.marketingContentType === ln.DashlaneBusiness,
            { loading: o, data: r } = (0, mn.G)(),
            s = window.localStorage.getItem("extng.loginFlow.forceLegacyFallback"),
            i = (0, To.a)(e.lee.dispatchGlobal);
          return o
            ? null
            : (s && "true" === s) || r
            ? a.createElement(Zo, { ...e })
            : a.createElement(fn, { location: e.location, isTacFlow: n, logoutHandler: i });
        };
      var Lo = n(420145);
      const Mo = async (e, t, n, o) => {
          const a = t,
            r = {
              anonymousUserId: (0, dn.n5)(e.globalState),
              login: n,
              password: a.password,
              format: "US",
              language: "en",
              subscribe: a.emailsTipsAndOffers.valueOr(!1),
              deviceName: (0, wo.M)((0, Lo.Iu)("webapp_login_form_regsiter_fallback_browser_name"))
            },
            s = await S.C.createAccountStep1(r);
          await (async (e, t, n, o) => {
            if (!n.valid) {
              const t = new Error("accountCreationStep1.valid was not defined on confirm submit");
              return e.reportError(t), Promise.reject(t);
            }
            if (t.isEu && !t.privacyPolicyAndToS.valueOr(!1)) {
              const t = new Error("termsOfService set to false on confirm submit");
              return e.reportError(t), Promise.reject(t);
            }
            const a = t.privacyPolicyAndToS.caseOf({ just: (e) => [{ consentType: "privacyPolicyAndToS", status: e }], nothing: () => [] }),
              r = { consentType: "emailsOffersAndTips", status: n.encryptSettingsRequest.subscribe };
            try {
              await S.C.createAccountStep2({
                createAccountResult: n,
                options: { flowIndicator: o ? "teamTrial" : "standaloneAccount" },
                isStandAlone: !0,
                consents: [...a, r]
              });
            } catch (t) {
              const n = t instanceof Error ? t : new Error("Unknown error");
              e.reportError(n, "Account creation failed");
            }
          })(e, t, s, o);
        },
        Uo = ({ teamUuid: e, login: t }) => {
          var n;
          const { search: o } = (0, r.TH)(),
            s = `${null != (n = Ke.parse(o).team) ? n : ""}`,
            [i, l] = (0, a.useState)(!1),
            { translate: _ } = (0, N.Z)(),
            { requestInviteLinkToken: u } = (0, Ge.h)(),
            p = (0, a.useCallback)(async () => {
              l(!0), await u(e, t), l(!1);
            }, [t, u, e]);
          return (
            (0, a.useEffect)(() => {
              p();
            }, [p]),
            (0, a.useEffect)(() => {
              (0, A.Nc)(k.PageView.JoinDashlaneTeamVerifyEmailAddress),
                (0, A.Kz)(
                  new k.UserSignupToDashlaneEvent({
                    invitationLinkClickOrigin: s
                      ? k.InvitationLinkClickOrigin.SharedInvitationLink
                      : k.InvitationLinkClickOrigin.InvitationEmail,
                    signupFlowStep: k.SignupFlowStep.VerifyEmail
                  })
                );
            }, [s]),
            (0, v.tZ)(
              c.Ejs,
              { gap: 6, flexDirection: "column" },
              (0, v.tZ)(c.X6q, null, _("webapp_invite_link_header")),
              (0, v.tZ)(c.nvN, null, _.markup("webapp_invite_link_email_sent_description_markup", { login: t })),
              (0, v.tZ)(c.nvN, null, _("webapp_invite_link_email_not_received_description")),
              (0, v.tZ)(
                v.zx,
                {
                  sx: { alignSelf: "end" },
                  onClick: p,
                  size: "large",
                  mood: "neutral",
                  intensity: "quiet",
                  disabled: i,
                  "data-testid": "resend-invite"
                },
                _("webapp_auth_panel_standalone_account_creation_invite_link_resend_button")
              )
            )
          );
        };
      var zo = n(51662),
        Fo = n(303724);
      const Bo = ({
        lee: e,
        onSubmit: t,
        fields: n,
        setIsLoading: o,
        setLoginErrorType: a,
        loginUserWithEnclaveSSO: s,
        isInviteLinkFlow: i
      }) => {
        var c;
        if ((a((0, zo.vV)(n.email) ? null : Go.INVALID_EMAIL), !((e) => (0, zo.vV)(e.email))(n))) return;
        o(!0);
        const l = null != (c = n.email) ? c : "";
        S.C.checkLogin(l)
          .then(({ accountCreationCode: e, isUserProposed: c, isUserAccepted: _ }) => {
            const u = {
              login: l,
              isSsoUser:
                e === Ne.AccountCreationCode.USER_SSO_PROVISIONED || e === Ne.AccountCreationCode.USER_DOESNT_EXIST_SSO_NON_PROVISIONED,
              isNitroSsoUser: e === Ne.AccountCreationCode.USER_NITRO_SSO_PROVISIONED,
              isSsoNonProvisioned: e === Ne.AccountCreationCode.USER_DOESNT_EXIST_SSO_NON_PROVISIONED,
              alreadyExists: e === Ne.AccountCreationCode.USER_EXISTS,
              isValid: e !== Ne.AccountCreationCode.USER_DOESNT_EXIST_INVALID_MX
            };
            let p = null,
              d = !1;
            const m = i && !1 === c && !1 === _,
              g = i && !0 === c && !1 === _;
            if ((u.isValid || (p = Go.INVALID_EMAIL), u.isNitroSsoUser && (s({ userEmailAddress: u.login }), (d = !0)), u.isSsoUser))
              u.isSsoNonProvisioned ? (p = Go.SSO_USER_NON_PROVISIONED) : (d = !0);
            else {
              if (u.alreadyExists) return void (0, r.uX)(`/login?email=${n.email}`);
              !m || (u.isNitroSsoUser && u.isSsoUser) ? g && (p = Go.TEAM_ACCEPTANCE_NEEDED) : (p = Go.USER_NOT_PROPOSED);
            }
            o(d), a(p), u.isSsoUser || u.isNitroSsoUser || p || !u.isValid || t({ login: n.email });
          })
          .catch((t) => {
            o(!1), a(Go.FAILED), e.dispatchGlobal(Fo.Qy.error({ message: "Login validation failed", content: { error: t.message } }));
          });
      };
      var Wo;
      let Vo = (function (e) {
        return (
          (e.SSO_USER_NON_PROVISIONED = "sso_user_non_provisioned"),
          (e.INVALID_EMAIL = "invalid_email"),
          (e.FAILED = "failed"),
          (e.USER_NOT_PROPOSED = "user_non_proposed"),
          (e.TEAM_ACCEPTANCE_NEEDED = "team_acceptance_needed"),
          (e.TEAM_ACCEPTANCE_FAILED = "team_acceptance_failed"),
          e
        );
      })({});
      const jo = {
          [Vo.SSO_USER_NON_PROVISIONED]: "standalone_account_creation_error_sso_user_non_provisioned",
          [Vo.INVALID_EMAIL]: "standalone_account_creation_error_invalid_email",
          [Vo.FAILED]: "standalone_account_creation_error_failed",
          [Vo.USER_NOT_PROPOSED]: "standalone_account_creation_error_sso_user_non_proposed",
          [Vo.TEAM_ACCEPTANCE_NEEDED]: "standalone_account_creation_error_invite_link_not_accepted",
          [Vo.TEAM_ACCEPTANCE_FAILED]: "standalone_account_creation_error_invite_link_acceptance_failed"
        },
        qo = ({
          onSubmit: e,
          lee: t,
          isB2BFlow: n,
          hasBeenRedirected: o,
          setHasBeenRedirected: s,
          loginErrorType: _,
          setLoginErrorType: u,
          loginValue: p,
          setLoginValue: d
        }) => {
          var m, g;
          const { search: h, pathname: w } = (0, r.TH)(),
            E = Ke.parse(h),
            f = `${null != (m = E.email) ? m : ""}`,
            b = `${null != (g = E.team) ? g : ""}`,
            { translate: y } = (0, N.Z)(),
            [S, x] = (0, a.useState)(!1),
            T = (0, a.useRef)(null),
            { loginUserWithEnclaveSSO: C } = (0, le.u)(Sn.y),
            { getInviteLinkData: O, inviteLinkData: R } = (0, Ge.h)(),
            I = w === i.$F,
            D = I && !!b,
            Z = D && !0 === R?.disabled;
          (0, a.useEffect)(() => {
            T.current?.focus?.();
          }, []),
            (0, a.useEffect)(() => {
              I &&
                ((0, A.Nc)(k.PageView.JoinDashlaneTeamEnterEmailAddress),
                (0, A.Kz)(
                  new k.UserSignupToDashlaneEvent({
                    invitationLinkClickOrigin: D
                      ? k.InvitationLinkClickOrigin.SharedInvitationLink
                      : k.InvitationLinkClickOrigin.InvitationEmail,
                    signupFlowStep: k.SignupFlowStep.EnterEmailAddress
                  })
                ));
            }, [I, D]),
            (0, a.useEffect)(() => {
              b && O(b);
            }, [O, b]);
          const P = () => {
              var e;
              return (null != (e = T?.current?.value) ? e : "").toLocaleLowerCase();
            },
            L = () => ({ email: P(), isB2B: n }),
            M = (0, a.useCallback)(
              (n) => {
                n?.preventDefault();
                const o = L();
                return (
                  Bo({
                    lee: t,
                    onSubmit: e,
                    fields: o,
                    setIsLoading: x,
                    setLoginErrorType: u,
                    loginUserWithEnclaveSSO: C,
                    isInviteLinkFlow: D
                  }),
                  !1
                );
              },
              [L, e]
            );
          (0, a.useEffect)(() => {
            f && !o && (s(!0), M());
          }, [M, o, f, s]);
          const U = ((e) => {
              if (!e) return null;
              let t;
              if (e === Vo.SSO_USER_NON_PROVISIONED) {
                const e = P(),
                  n = e.slice(e.indexOf("@") + 1);
                t = y(jo[Vo.SSO_USER_NON_PROVISIONED], { domain: n });
              } else t = y(jo[e]);
              return t;
            })(_),
            z = n && !!f;
          return (0, l.tZ)(
            c.Ejs,
            { gap: 6, flexDirection: "column", as: "form", autoComplete: "off", noValidate: !0, onSubmit: M },
            Z
              ? (0, l.tZ)(v.ke, {
                  size: "medium",
                  mood: "warning",
                  title: y("webapp_account_creation_invite_link_disabled_info_title"),
                  description: y("webapp_account_creation_invite_link_disabled_info_description")
                })
              : null,
            (0, l.tZ)(
              c.X6q,
              { sx: { fontWeight: "600" }, color: Z ? "ds.text.oddity.disabled" : "ds.text.neutral.catchy" },
              y(D ? "webapp_auth_panel_account_creation_employee_header" : "webapp_auth_panel_standalone_account_creation_step1_header")
            ),
            D ? null : (0, l.tZ)(c.nvN, null, y("webapp_auth_panel_standalone_account_creation_step1_sub_header")),
            (0, l.tZ)(v.oi, {
              id: "primaryEmailInput",
              type: "email",
              ref: T,
              disabled: z || Z,
              label: y(
                D
                  ? "webapp_auth_panel_standalone_account_creation_email_invite_link_label"
                  : "webapp_auth_panel_standalone_account_creation_email_label"
              ),
              placeholder: D ? "name@example.com" : y("webapp_auth_panel_standalone_account_creation_email_placeholder"),
              onBlur: () => {
                u(!p || (0, zo.vV)(p) ? null : Vo.INVALID_EMAIL);
              },
              onChange: () => {
                const e = P();
                u(null), d(e);
              },
              value: p,
              feedback: U ? { id: "error-message", text: U, type: "error" } : void 0
            }),
            (0, l.tZ)(
              v.zx,
              {
                sx: { alignSelf: "end" },
                size: "large",
                mood: "brand",
                intensity: "catchy",
                type: "submit",
                disabled: S || Z,
                "data-testid": "login-button"
              },
              S ? Wo || (Wo = (0, l.tZ)(c.HoD, null)) : y("webapp_auth_panel_standalone_account_creation_step1_confirm_button")
            )
          );
        };
      let Go = (function (e) {
        return (
          (e.SSO_USER_NON_PROVISIONED = "sso_user_non_provisioned"),
          (e.INVALID_EMAIL = "invalid_email"),
          (e.FAILED = "failed"),
          (e.USER_NOT_PROPOSED = "user_non_proposed"),
          (e.TEAM_ACCEPTANCE_NEEDED = "team_acceptance_needed"),
          (e.TEAM_ACCEPTANCE_FAILED = "team_acceptance_failed"),
          e
        );
      })({});
      const Ko = (e) => {
        var t, n;
        const { search: o, pathname: s } = (0, r.TH)(),
          c = Ke.parse(o),
          _ = `${null != (t = c.email) ? t : ""}`,
          u = `${null != (n = c.team) ? n : ""}`,
          [p, d] = (0, a.useState)(!1),
          [m, g] = (0, a.useState)(_),
          [h, w] = (0, a.useState)(null),
          E = (0, a.useRef)(null),
          f = (0, a.useRef)([]),
          { getInviteLinkData: b, inviteLinkData: v } = (0, Ge.h)(),
          y = s === i.$F,
          x = y && !!u,
          T = x && !0 === v?.disabled,
          C = He();
        return (
          (0, a.useEffect)(() => {
            E.current?.focus?.();
          }, []),
          (0, a.useEffect)(() => {
            y &&
              ((0, A.Nc)(k.PageView.JoinDashlaneTeamEnterEmailAddress),
              (0, A.Kz)(
                new k.UserSignupToDashlaneEvent({
                  invitationLinkClickOrigin: x
                    ? k.InvitationLinkClickOrigin.SharedInvitationLink
                    : k.InvitationLinkClickOrigin.InvitationEmail,
                  signupFlowStep: k.SignupFlowStep.EnterEmailAddress
                })
              ));
          }, [y, x]),
          (0, a.useEffect)(
            () => (
              (f.current = f.current.concat([
                S.C.liveServiceProviderUrl.on((e) => {
                  (0, tt.nL)((0, tt.C0)(e));
                })
              ])),
              () => {
                f.current.forEach((e) => e()), (f.current = []);
              }
            ),
            []
          ),
          (0, a.useEffect)(() => {
            u && b(u);
          }, [b, u]),
          (0, a.useEffect)(() => {
            var e;
            (C.status === gn.rq.Success && null != (e = C.data) ? e : []).some(
              (e) => e.type === Ne.LoginNotificationType.TEAM_ACCEPTANCE_SUCCESS
            )
              ? (d(!1), w(null))
              : h === Go.TEAM_ACCEPTANCE_NEEDED && d(!0);
          }, [h, C]),
          !T && p && m && v?.teamUuid
            ? (0, l.tZ)(Uo, { teamUuid: v.teamUuid, login: m })
            : (0, l.tZ)(qo, { ...e, loginValue: m, setLoginValue: g, loginErrorType: h, setLoginErrorType: w })
        );
      };
      var $o = n(233377),
        Ho = n(448081),
        Xo = n(774931);
      n(105029);
      const Yo = "webapp_auth_panel_standalone_account_creation_",
        Qo = ({ id: e, passwordStrength: t, children: n, showTooltip: o }) => {
          const { translate: r } = (0, N.Z)(),
            s = ((e) => {
              if (!e || !e.feedback) return [];
              const { suggestions: t = [], warning: n } = e.feedback;
              return [...t.map((e) => `${Yo}${e}`), ...(n ? [`${Yo}${n}`] : [])];
            })(t).map((e) => r(e)),
            i = o && s.length > 0;
          return a.createElement(
            Xo.Z,
            {
              destroyTooltipOnHide: !0,
              id: e,
              trigger: [],
              visible: i,
              placement: "top",
              overlayClassName: "tooltipContainer--DOS58UYBWN",
              overlay: a.createElement(
                "div",
                { className: "inner--DSQWE2KZTT" },
                a.createElement(
                  "ul",
                  null,
                  s.map((e) => a.createElement("li", { key: e }, e))
                )
              )
            },
            a.createElement("div", null, n)
          );
        };
      var Jo;
      const ea = "standalone_account_creation_error_",
        ta = "webapp_auth_panel_standalone_account_creation_password_hide_label",
        na = "webapp_auth_panel_standalone_account_creation_password_show_label",
        oa = {
          0: "webapp_auth_panel_standalone_account_creation_zxcvbn_weakest_password",
          1: "webapp_auth_panel_standalone_account_creation_zxcvbn_weak_password",
          2: "webapp_auth_panel_standalone_account_creation_zxcvbn_acceptable_password",
          3: "webapp_auth_panel_standalone_account_creation_zxcvbn_good_password",
          4: "webapp_auth_panel_standalone_account_creation_zxcvbn_awesome_password"
        },
        aa = ({ backStep: e, onSubmit: t, isEu: n, isTACFlow: o, login: s, isEmployeeSignUp: i }) => {
          var l;
          const { translate: _ } = (0, N.Z)(),
            { search: u } = (0, r.TH)(),
            p = `${null != (l = Ke.parse(u).team) ? l : ""}`,
            [d, m] = (0, a.useState)($o.Maybe.nothing()),
            [g, h] = (0, a.useState)($o.Maybe.nothing()),
            [w, E] = (0, a.useState)(""),
            [f, b] = (0, a.useState)(null),
            [y, x] = (0, a.useState)(""),
            [T, C] = (0, a.useState)(null),
            {
              passwordStrength: O,
              resetPasswordStrength: R,
              setPasswordStrength: I,
              isPasswordStrengthScore: D,
              isPasswordStrongEnough: Z
            } = (0, Ho.R)(),
            [P, L] = (0, a.useState)(!1),
            [M, U] = (0, a.useState)(!1),
            z = (e) => {
              m($o.Maybe.maybe(e));
            };
          (0, a.useEffect)(() => {
            i &&
              ((0, A.Nc)(k.PageView.JoinDashlaneTeamCreateMasterPassword),
              (0, A.Kz)(
                new k.UserSignupToDashlaneEvent({
                  invitationLinkClickOrigin: p
                    ? k.InvitationLinkClickOrigin.SharedInvitationLink
                    : k.InvitationLinkClickOrigin.InvitationEmail,
                  signupFlowStep: k.SignupFlowStep.CreateMasterPassword
                })
              ));
          }, [i, p]),
            (0, a.useEffect)(() => {
              z(!n);
            }, [n]);
          const F = (e) => (e ? _(`${ea}${e}`) : null),
            B = () => {
              y && y !== w && C("passwords_dont_match");
            },
            W = _(
              n
                ? "webapp_auth_panel_standalone_account_creation_tips_and_offers_label"
                : "webapp_auth_panel_standalone_account_creation_subscription_label"
            ),
            V = F(f),
            j = F(T);
          return (0, v.tZ)(
            a.Fragment,
            null,
            (0, v.tZ)(c.X6q, { sx: { fontWeight: "600" } }, _("webapp_auth_panel_standalone_account_creation_step2_header")),
            (0, v.tZ)(c.nvN, null, _("webapp_auth_panel_standalone_account_creation_step2_sub_header")),
            (0, v.tZ)(
              "form",
              {
                sx: { marginTop: "12px" },
                autoComplete: "off",
                noValidate: !0,
                onSubmit: (e) => (
                  e.preventDefault(),
                  Z
                    ? y !== w
                      ? C("passwords_dont_match")
                      : (L(!0), t({ emailsTipsAndOffers: d, password: w, privacyPolicyAndToS: g, isEu: !!n }))
                    : b("weak_password"),
                  !1
                )
              },
              (0, v.tZ)(
                c.Ejs,
                { flexDirection: "column", gap: 4 },
                (0, v.tZ)(c.nvN, { bold: !0, sx: { marginBottom: "12px" } }, s),
                (0, v.tZ)(
                  Qo,
                  { showTooltip: M, passwordStrength: O, id: "password-tooltip" },
                  (0, v.tZ)(
                    a.Fragment,
                    null,
                    (0, v.tZ)(v.WU, {
                      id: "primaryPasswordInput",
                      "aria-describedby": "password-tooltip",
                      label: _("webapp_auth_panel_standalone_account_creation_password_label"),
                      onBlur: () => {
                        U(!1), w && y && w !== y && C("passwords_dont_match");
                      },
                      onChange: async (e) => {
                        const t = e.target.value;
                        if ((E(t), f && b(null), T && C(null), "" === t && R(), "" !== t)) {
                          const e = await S.C.evaluatePassword({ password: t });
                          I(e);
                        }
                      },
                      onFocus: () => {
                        U(!0);
                      },
                      placeholder: _("webapp_auth_panel_standalone_account_creation_password_placeholder"),
                      value: w,
                      showPasswordButton: { showPasswordText: _(na), hidePasswordText: _(ta) }
                    }),
                    O && D(O.score) && (0, v.tZ)(c.YVT, { score: O.score, showAdditionalText: !0, additionalText: _(`${oa[O.score]}`) })
                  )
                ),
                (0, v.tZ)(v.WU, {
                  id: "secondaryPasswordInput",
                  label: _("webapp_auth_panel_standalone_account_creation_confirm_password_label"),
                  onBlur: () => setTimeout(B, 150),
                  onChange: (e) => {
                    C(null), x(e.target.value);
                  },
                  placeholder: _("webapp_auth_panel_standalone_account_creation_confirm_password_placeholder"),
                  value: y,
                  showPasswordButton: { showPasswordText: _(na), hidePasswordText: _(ta) },
                  feedback: T ? { text: _(`${ea}${T}`), type: "error" } : void 0
                }),
                (0, v.tZ)(v.XZ, {
                  name: "emailsTipsAndOffers",
                  onChange: (e) => z(e.target.checked),
                  checked: d.valueOr(!n),
                  label: W,
                  sx: { fontSize: "14px" }
                }),
                (0, v.tZ)(v.XZ, {
                  name: "privacyPolicyAndToS",
                  onChange: (e) => {
                    return (t = e.target.checked), void h($o.Maybe.maybe(t));
                    var t;
                  },
                  checked: g.valueOr(!n),
                  label: _.markup("webapp_auth_panel_standalone_account_creation_tos_markup", {}, { linkTarget: "_blank" }),
                  sx: { fontSize: "14px" }
                }),
                (0, v.tZ)(
                  c.Ejs,
                  { sx: { marginTop: "24px" }, justifyContent: "space-between" },
                  (0, v.tZ)(
                    v.zx,
                    {
                      mood: "brand",
                      intensity: "supershy",
                      size: "large",
                      disabled: P,
                      sx: { alignSelf: "start" },
                      layout: "iconLeading",
                      icon: Jo || (Jo = (0, v.tZ)(v.JO, { name: "ArrowLeftOutlined" })),
                      onClick: (t) => {
                        t.preventDefault(), P || e(ia.Info);
                      }
                    },
                    _("webapp_auth_panel_standalone_account_creation_back_label")
                  ),
                  (0, v.tZ)(
                    c.Ejs,
                    { flexDirection: "column", alignItems: "end", gap: 4 },
                    (0, v.tZ)(
                      v.zx,
                      {
                        type: "submit",
                        mood: "brand",
                        intensity: "catchy",
                        size: "large",
                        isLoading: P,
                        disabled: (() => {
                          if (!g.valueOr(!n)) return !0;
                          const e = !w || !y,
                            t = y === w,
                            o = Boolean(V) || Boolean(j);
                          return e || !t || !Z || o;
                        })()
                      },
                      _(
                        o
                          ? "team_account_creation_button_text_submit"
                          : "webapp_auth_panel_standalone_account_creation_step2_confirm_button"
                      )
                    )
                  )
                )
              )
            )
          );
        };
      var ra = n(530398),
        sa = n(197606);
      let ia = (function (e) {
        return (e.Info = "info"), (e.Confirm = "confirm"), (e.Creation = "creation"), e;
      })({});
      const ca = {
          info: k.PageView.AccountCreationEmail,
          confirm: k.PageView.AccountCreationConfirmMasterPassword,
          creation: k.PageView.AccountCreationCreateMasterPassword
        },
        la = ({ lee: e, isTACFlow: t }) => {
          var n, o;
          const { routes: s } = (0, r.Xo)(),
            { pathname: _ } = (0, r.TH)(),
            u = (0, r.k6)(),
            { search: p } = (0, r.TH)(),
            d = Ke.parse(p),
            m = `${null != (n = d.email) ? n : ""}`,
            g = `${null != (o = d.team) ? o : ""}`,
            [h, w] = (0, a.useState)(m),
            [E, f] = (0, a.useState)(!1),
            [b, y] = (0, a.useState)(ia.Info),
            { translate: S } = (0, N.Z)(),
            x = _ === i.$F,
            T = x && !1,
            C = (0, a.useCallback)(
              (e) => {
                ca[null != e ? e : b] && (0, A.Nc)(ca[null != e ? e : b], t ? k.BrowseComponent.Tac : k.BrowseComponent.MainApp);
              },
              [b, t]
            );
          (0, a.useEffect)(() => {
            C();
          }, [C]),
            (0, a.useEffect)(() => {
              T &&
                ((0, A.Nc)(k.PageView.JoinDashlaneTeamInstallExtension),
                (0, A.Kz)(
                  new k.UserSignupToDashlaneEvent({
                    invitationLinkClickOrigin: g
                      ? k.InvitationLinkClickOrigin.SharedInvitationLink
                      : k.InvitationLinkClickOrigin.InvitationEmail,
                    signupFlowStep: k.SignupFlowStep.InstallExtension
                  })
                ));
            }, [T, g]),
            (0, a.useEffect)(() => {}, [u, x, h, g]);
          const O = (e) => {
            y(e), C(e);
          };
          return (0, l.tZ)(
            "div",
            null,
            T
              ? (0, l.tZ)(
                  c.Ejs,
                  { flexDirection: "column", sx: { margin: "80px" }, gap: 4 },
                  (0, l.tZ)(c.X6q, { size: "medium" }, S("webapp_auth_panel_account_creation_no_extension_header")),
                  (0, l.tZ)(c.nvN, { color: "ds.text.neutral.quiet" }, S("webapp_auth_panel_account_creation_no_extension_description")),
                  (0, l.tZ)(
                    c.k$b,
                    { alignSelf: "end" },
                    (0, l.tZ)(
                      v.zx,
                      {
                        onClick: () => {
                          (0, tt.Yo)(Qn.JW);
                        },
                        size: "large",
                        mood: "brand",
                        intensity: "catchy",
                        type: "button"
                      },
                      S("webapp_auth_panel_account_creation_no_extension_download_button")
                    )
                  )
                )
              : (0, l.tZ)(
                  a.Fragment,
                  null,
                  b === ia.Info &&
                    (0, l.tZ)(
                      c.Ejs,
                      { flexDirection: "column", gap: 4, sx: { marginTop: "80px" } },
                      (0, l.tZ)(Ko, {
                        hasBeenRedirected: E,
                        setHasBeenRedirected: f,
                        lee: e,
                        onSubmit: (e) => {
                          var t;
                          w(null != (t = e.login) ? t : ""), O(ia.Confirm);
                        },
                        isB2BFlow: t || x
                      })
                    ),
                  (b === ia.Confirm || b === ia.Creation) &&
                    (0, l.tZ)(
                      c.Ejs,
                      { flexDirection: "column", gap: 4 },
                      (0, l.tZ)(aa, {
                        login: h,
                        isEu: e.carbon.currentLocation.isEu,
                        backStep: O,
                        onSubmit: async (n) => {
                          const o = await (0, sa.r)();
                          O(ia.Creation),
                            await Mo(e, n, h, t),
                            (0, ra.$)(o, n.emailsTipsAndOffers.valueOr(!1)),
                            x &&
                              (0, A.Kz)(
                                new k.UserSignupToDashlaneEvent({
                                  signupFlowStep: k.SignupFlowStep.LoginToAccount,
                                  invitationLinkClickOrigin: g
                                    ? k.InvitationLinkClickOrigin.SharedInvitationLink
                                    : k.InvitationLinkClickOrigin.InvitationEmail
                                })
                              ),
                            t && u.push(s.teamRoutesBasePath);
                        },
                        isTACFlow: t,
                        isEmployeeSignUp: x
                      })
                    )
                )
          );
        },
        _a = ({ lee: e, options: { isTACFlow: t } = { isTACFlow: !1 } }) => {
          const { translate: n } = (0, N.Z)(),
            { routes: o } = (0, r.Xo)();
          return (0, l.tZ)(
            a.Fragment,
            null,
            (0, l.tZ)(vn, {
              redirectLocation: { pathname: t ? o.teamRoutesBasePath + i.TT : i.TT, search: "", hash: "", state: { ignoreRedirect: !0 } },
              helperText: n("webapp_auth_panel_already_an_account"),
              buttonText: n("webapp_auth_panel_login")
            }),
            (0, l.tZ)(
              Un.Z,
              { sx: { paddingTop: "120px" } },
              (0, l.tZ)(
                bn.Z,
                { classNames: { ...ko }, timeout: { appear: 500, enter: 0, exit: 0 }, appear: !0 },
                (0, l.tZ)("div", { sx: { padding: "50px", margin: "0 auto", maxWidth: "800px" } }, (0, l.tZ)(la, { isTACFlow: t, lee: e }))
              )
            )
          );
        };
      var ua;
      const pa = ({ lee: e }) => {
          var t;
          const { search: n, pathname: o } = (0, r.TH)(),
            a = (0, Ct.Y)(),
            {
              routes: { teamRoutesBasePath: s }
            } = (0, r.Xo)(),
            c = (null != (t = new URLSearchParams(n).get("email")) ? t : "") === (0, dn.t2)(e.globalState);
          if (a.status !== y.rq.Success || !a.data) return null;
          const _ = e.permission.adminAccess.hasTACAccess;
          return e.permission.loggedIn && !(0, zt.D)(e.globalState)
            ? c && o === i.S && _
              ? (0, l.tZ)(r.l_, { to: s })
              : ua || (ua = (0, l.tZ)(r.l_, { to: "/" }))
            : null;
        },
        da = ({ options: e, path: t }) => {
          const n = e?.marketingContentType === ln.DashlaneBusiness;
          return (0, l.tZ)(
            r.AW,
            { path: t },
            (0, l.tZ)(r.Vy, { component: pa, path: t }),
            (0, l.tZ)(
              _n,
              { options: e },
              (0, l.tZ)(r.Vy, { path: [i.TT, i.S], options: e, component: Po }),
              (0, l.tZ)(r.Vy, { options: { isTACFlow: n }, path: [i.SF, i.P, i.$F], component: _a })
            )
          );
        };
      var ma,
        ga,
        ha,
        wa,
        Ea = n(931223),
        fa = n(765499),
        ba = n(247260),
        va = n(60372),
        ya = n(776915),
        Sa = n(491381);
      const xa = ({ children: e }) =>
        a.createElement(
          a.Fragment,
          null,
          a.createElement(
            r.rs,
            null,
            ma || (ma = a.createElement(va.N, { path: "*ssoToken=*" })),
            ga || (ga = a.createElement(ba.L, { path: "*/new*" })),
            a.createElement(ya.r, { path: `*${ya.Q}*` }),
            e,
            ha || (ha = a.createElement(r.TX, null))
          ),
          wa || (wa = a.createElement(Sa.O, null))
        );
      var Ta = n(320815),
        Ca = n(109476);
      const Oa = ({ error: e }) => {
        const { tryAgainRecovery: t } = (0, le.u)(ie.j);
        (0, a.useEffect)(() => {
          (0, A.Kz)(
            new k.UserUseAccountRecoveryKeyEvent({
              flowStep: k.FlowStep.Error,
              useKeyErrorName: "WRONG_RECOVERY_KEY_ERROR" === e ? k.UseKeyErrorName.WrongKeyEntered : k.UseKeyErrorName.Unknown
            })
          );
        }, []);
        const { translate: n } = (0, N.Z)();
        return (0, v.tZ)(
          c.Ejs,
          { sx: { flexDirection: "column", margin: "0 auto", textAlign: "center", alignItems: "center" } },
          (0, v.tZ)(v.JO, {
            name: "FeedbackFailOutlined",
            size: "large",
            color: "ds.text.danger.quiet",
            sx: { marginBottom: "48px", width: "62px", height: "62px" }
          }),
          (0, v.tZ)(
            v.X6,
            { as: "h1", textStyle: "ds.title.section.large", sx: { marginBottom: "16px" } },
            n("login_account_recovery_key_error_screen_title")
          ),
          (0, v.tZ)(
            v.nv,
            { as: "label", textStyle: "ds.body.standard.regular", sx: { marginBottom: "48px" } },
            n("login_account_recovery_key_error_screen_description")
          ),
          (0, v.tZ)(
            v.zx,
            {
              onClick: () => {
                t(), (0, r.uX)(i.g);
              }
            },
            n("login_account_recovery_key_error_screen_try_again_button")
          )
        );
      };
      var Na = n(682690);
      const Aa = () => {
        const { translate: e } = (0, N.Z)(),
          t = (0, r.k6)(),
          { trackPageView: n } = (0, _e.D)();
        return (
          (0, a.useEffect)(() => {
            n({ pageView: k.PageView.LoginMasterPasswordAccountRecoverySuccess });
          }, []),
          (0, a.useEffect)(() => {
            (0, A.Kz)(new k.UserUseAccountRecoveryKeyEvent({ flowStep: k.FlowStep.Complete })),
              (0, Na.EZ)(k.DeleteKeyReason.RecoveryKeyUsed);
          }, []),
          (0, v.tZ)(
            c.Ejs,
            { sx: { flexDirection: "column", margin: "0 auto", textAlign: "center", alignItems: "center" } },
            (0, v.tZ)(v.JO, {
              name: "FeedbackSuccessOutlined",
              color: "ds.text.brand.quiet",
              sx: { marginBottom: "48px", width: "62px", height: "62px" }
            }),
            (0, v.tZ)(
              v.X6,
              { as: "h1", textStyle: "ds.title.section.large", sx: { marginBottom: "16px" } },
              e("login_account_recovery_key_success_screen_title")
            ),
            (0, v.tZ)(
              v.nv,
              { as: "label", textStyle: "ds.body.standard.regular", sx: { marginBottom: "48px" } },
              e("login_account_recovery_key_success_screen_description")
            ),
            (0, v.tZ)(
              v.zx,
              {
                onClick: () => {
                  t.push(i.Wt);
                }
              },
              e("_common_dialog_done_button")
            )
          )
        );
      };
      var ka;
      const Ra = () => {
        const e = (0, m.k)(ie.j, "recoveryFlowStatus");
        return (0, v.tZ)(
          U.L,
          { backgroundColor: "ds.background.default" },
          (0, v.tZ)(
            c.Ejs,
            {
              sx: {
                flexDirection: "column",
                margin: "0px auto 0px auto",
                alignItems: "flex-start",
                justifyContent: "center",
                height: "calc(100vh - 50px)",
                width: "550px"
              }
            },
            (() => {
              switch (e.data?.step) {
                case ce.G.Success:
                  return ka || (ka = (0, v.tZ)(Aa, null));
                case ce.G.Failure:
                  return (0, v.tZ)(Oa, { ...e.data });
                default:
                  return null;
              }
            })()
          )
        );
      };
      var Ia, Da;
      const Za = () => {
        const { translate: e } = (0, N.Z)(),
          { routes: t } = (0, r.Xo)();
        return (0, v.tZ)(
          "div",
          { sx: { backgroundColor: "ds.container.agnostic.neutral.supershy" }, className: Gt },
          Ia || (Ia = (0, v.tZ)(qe, null)),
          (0, v.tZ)(
            "div",
            { className: M()(Kt, $t) },
            Da || (Da = (0, v.tZ)(Te.W_, null)),
            (0, v.tZ)(
              U.L,
              { backgroundColor: "ds.background.default" },
              (0, v.tZ)(
                Te.n5,
                null,
                (0, v.tZ)(Te.h4, { text: e("webapp_device_to_device_authentication_device_setup_title") }),
                (0, v.tZ)(v.nv, null, e.markup("webapp_device_to_device_authentication_device_setup_description_markup")),
                (0, v.tZ)(
                  v.zx,
                  {
                    fullsize: !0,
                    mood: "brand",
                    intensity: "catchy",
                    onClick: () => {
                      (0, r.uX)(t.userCredentials);
                    }
                  },
                  e("webapp_device_to_device_authentication_device_setup_access_vault_cta")
                )
              )
            )
          )
        );
      };
      var Pa,
        La = n(69401),
        Ma = n(287279);
      const Ua = "webapp_recover_otp_codes_header_subtitle",
        za = "webapp_recover_otp_codes_business_infobox_help_title",
        Fa = "webapp_recover_otp_codes_business_infobox_help_description",
        Ba = "webapp_recover_otp_codes_steps_title",
        Wa = "webapp_recover_otp_codes_steps_enter_email",
        Va = "webapp_recover_otp_codes_steps_get_sms",
        ja = "webapp_recover_otp_codes_steps_login_with_recovery_code",
        qa = "webapp_recover_otp_codes_steps_complete_2fa_setup",
        Ga = "webapp_recover_otp_codes_form_email_label",
        Ka = "webapp_recover_otp_codes_form_get_recovery_code_cta",
        $a = "webapp_recover_otp_codes_more_info_title",
        Ha = "webapp_recover_otp_codes_more_info_link",
        Xa = {
          NetworkError: "_common_alert_network_error_message",
          UnknownError: "_common_generic_error",
          AccountNotEligible: "webapp_recover_otp_codes_account_not_eligible"
        };
      var Ya = (function (e) {
        return (e[(e.Idle = 0)] = "Idle"), (e[(e.Sending = 1)] = "Sending"), (e[(e.Error = 2)] = "Error"), e;
      })(Ya || {});
      const Qa = ({ onSuccess: e }) => {
          const { translate: t } = (0, N.Z)(),
            [n, o] = (0, a.useState)(""),
            [r, s] = (0, a.useState)(Ya.Idle),
            { showToast: i } = (0, v.pm)(),
            [l, _] = (0, a.useState)(null),
            { recoverOtpCodes: u } = (({ onSuccess: e, onError: t }) => {
              const { request2FaCodesByPhone: n } = (0, le.u)(La.M);
              return {
                recoverOtpCodes: async (o) => {
                  try {
                    const a = await n({ email: o });
                    return (0, Ma.d6)(a) ? e() : t(a.error.tag);
                  } catch (e) {
                    return t("UnknownError");
                  }
                }
              };
            })({
              onSuccess: e,
              onError: (e) => {
                "NetworkError" === e || "UnknownError" === e ? (i({ mood: "danger", description: t(Xa[e]) }), _(null)) : _(e), s(Ya.Error);
              }
            }),
            p = r === Ya.Idle || r === Ya.Error;
          return (0, v.tZ)(
            "div",
            null,
            (0, v.tZ)(
              c.Ejs,
              { flexDirection: "column", gap: "16px" },
              (0, v.tZ)(v.X6, { as: "h1", textStyle: "ds.title.section.medium" }, t(Ua)),
              (0, v.tZ)(v.ke, { mood: "brand", title: t(za), description: t(Fa) }),
              (0, v.tZ)(v.nv, null, t(Ba)),
              (0, v.tZ)(
                v.nv,
                { as: "ul", sx: { listStyleType: "disc", listStylePosition: "outside", marginLeft: "24px" } },
                (0, v.tZ)("li", null, t(Wa)),
                (0, v.tZ)("li", null, t(Va)),
                (0, v.tZ)("li", null, t(ja)),
                (0, v.tZ)("li", null, t(qa))
              ),
              (0, v.tZ)(
                "form",
                {
                  onSubmit: (e) => {
                    _(null), s(Ya.Sending), u(n), e.preventDefault();
                  }
                },
                (0, v.tZ)(
                  c.Ejs,
                  {
                    gap: "16px",
                    sx: {
                      margin: "24px 8px 8px 8px",
                      padding: "40px",
                      alignItems: "center",
                      alignContent: "center",
                      bg: "ds.container.agnostic.neutral.quiet",
                      borderRadius: "8px",
                      alignSelf: "stretch",
                      flexWrap: "wrap",
                      justify: "stretch",
                      justifyContent: "flex-end"
                    }
                  },
                  (0, v.tZ)(
                    "div",
                    { sx: { flex: 1, minWidth: "280px" } },
                    (0, v.tZ)(v.s8, {
                      label: t(Ga),
                      value: n,
                      onChange: (e) => o(e.target.value),
                      disabled: !p,
                      error: !!l,
                      feedback: l ? t(Xa[l]) : void 0
                    })
                  ),
                  (0, v.tZ)(
                    v.zx,
                    { size: "large", type: "submit", disabled: !p || 0 === n.length },
                    r === Ya.Sending ? Pa || (Pa = (0, v.tZ)(v.ZX, { mood: "brand" })) : t(Ka)
                  )
                )
              ),
              (0, v.tZ)(v.nv, null, t($a)),
              (0, v.tZ)(
                c.rUS,
                { href: "https://support.dashlane.com/hc/articles/202699101", sx: { color: "ds.text.brand.standard" } },
                t(Ha)
              )
            )
          );
        },
        Ja = "webapp_recover_otp_codes_success_two_codes_warning_title",
        er = "webapp_recover_otp_codes_success_two_codes_warning",
        tr = "webapp_recover_otp_codes_success_two_codes_warning_learn_more",
        nr = "webapp_recover_otp_disable_2fa_instructions_title",
        or = "webapp_recover_otp_disable_2fa_instructions_complete_login",
        ar = "webapp_recover_otp_disable_2fa_instructions_open_web_app_markup",
        rr = "webapp_recover_otp_disable_2fa_instructions_open_security_settings_markup",
        sr = "webapp_recover_otp_disable_2fa_instructions_toggle_off_markup",
        ir = "webapp_recover_otp_disable_2fa_instructions_enter_second_code",
        cr = "webapp_recover_otp_disable_2fa_instructions_now_disabled",
        lr = () => {
          const { translate: e } = (0, N.Z)();
          return (0, v.tZ)(
            "div",
            null,
            (0, v.tZ)(
              c.Ejs,
              { flexDirection: "column", gap: "16px" },
              (0, v.tZ)(v.X6, { as: "h1", textStyle: "ds.title.section.medium" }, e("webapp_recover_otp_codes_success_header_title")),
              (0, v.tZ)(v.ke, {
                title: e(Ja),
                mood: "warning",
                description: (0, v.tZ)(
                  c.Ejs,
                  { flexDirection: "column" },
                  (0, v.tZ)(v.nv, null, e(er)),
                  (0, v.tZ)(
                    c.rUS,
                    {
                      href: "https://support.dashlane.com/hc/en-us/articles/202625042-Protect-your-account-using-Two-Factor-Authentication",
                      sx: { color: "ds.text.brand.standard" }
                    },
                    e(tr)
                  )
                )
              }),
              (0, v.tZ)(v.X6, { as: "h2" }, e(nr)),
              (0, v.tZ)(
                v.nv,
                { as: "ul", sx: { listStyleType: "disc", listStylePosition: "outside", marginLeft: "24px" } },
                (0, v.tZ)("li", null, e(or)),
                (0, v.tZ)("li", null, e.markup(ar)),
                (0, v.tZ)("li", null, e.markup(rr)),
                (0, v.tZ)("li", null, e.markup(sr)),
                (0, v.tZ)("li", null, e(ir)),
                (0, v.tZ)("li", null, e(cr))
              )
            )
          );
        };
      var _r, ur;
      const pr = "webapp_recover_otp_codes_header_title",
        dr = () => {
          const [e, t] = (0, a.useState)(!1),
            { translate: n } = (0, N.Z)();
          return (0, v.tZ)(
            "div",
            { sx: { height: "100vh", width: "100%", bg: "ds.background.alternate" } },
            (0, v.tZ)(
              c.Ejs,
              { flexDirection: "column" },
              (0, v.tZ)(
                c.Ejs,
                {
                  sx: {
                    bg: "ds.container.agnostic.neutral.standard",
                    padding: "32px",
                    alignSelf: "stretch",
                    justifyContent: "center",
                    gap: "8px"
                  }
                },
                (0, v.tZ)(
                  c.Ejs,
                  { sx: { maxWidth: "800px", alignItems: "center", gap: "16px", flex: "1 0 0" } },
                  _r || (_r = (0, v.tZ)(c.NJ6, { size: 48, color: "ds.oddity.brand" })),
                  (0, v.tZ)(v.X6, { as: "h1", textStyle: "ds.title.section.large", color: "ds.text.neutral.catchy" }, n(pr))
                )
              ),
              (0, v.tZ)(
                c.Ejs,
                {
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "24px",
                  sx: {
                    marginLeft: "auto",
                    marginRight: "auto",
                    flexDirection: "column",
                    padding: "24px 24px 160px 24px",
                    maxWidth: "848px",
                    alignItems: "center",
                    alignSelf: "stretch"
                  }
                },
                (0, v.tZ)(
                  c.Ejs,
                  {
                    gap: "16px",
                    sx: {
                      padding: "24px",
                      alignItems: "flex-start",
                      alignSelf: "stretch",
                      borderRadius: "8px",
                      border: "1px solid transparent",
                      borderColor: "ds.border.neutral.quiet.idle",
                      bg: "ds.container.agnostic.neutral.supershy"
                    }
                  },
                  e ? ur || (ur = (0, v.tZ)(lr, null)) : (0, v.tZ)(Qa, { onSuccess: () => t(!0) })
                )
              )
            )
          );
        };
      var mr = n(371795);
      const gr = () => {
        const e = (0, m.k)(mr.m, "userAuthenticationMethod"),
          t = (0, m.k)(mr.m, "isFlowCompleted"),
          { initiateAccountDeletion: n, completeAccountDeletion: o } = (0, le.u)(mr.m);
        return {
          userAuthenticationMethod: e.status === gn.rq.Success ? e.data : null,
          isFlowCompleted: t.status === gn.rq.Success && t.data,
          initiateAccountDeletion: async (e) => {
            const t = await n({ login: e });
            if ((0, Ma.hx)(t)) return t.error.tag;
          },
          completeAccountDeletion: async (e, t) => {
            const n = await o({ token: e, isDelete: t });
            return (0, Ma.hx)(n) ? n.error.tag : null;
          }
        };
      };
      var hr = n(806118);
      const wr = ({ isDelete: e }) => {
        const [t, n] = (0, a.useState)(!1),
          [o, r] = (0, a.useState)(null),
          { translate: s } = (0, N.Z)(),
          { initiateAccountDeletion: i, userAuthenticationMethod: l } = gr(),
          _ = (0, a.useCallback)(
            (e) => {
              n(!0),
                i(e.username).then((e) => {
                  switch ((e && n(!1), e)) {
                    case hr.q.UNKNOWN_USER:
                      r("webapp_error_user_not_found_deletion");
                      break;
                    case hr.q.SSO_BLOCKED:
                      r("webapp_error_sso_blocked_deletion");
                      break;
                    default:
                      r(null);
                  }
                });
            },
            [i]
          );
        return (
          (0, a.useEffect)(() => {
            l && n(!1);
          }, [l]),
          (0, v.tZ)(
            a.Fragment,
            null,
            (0, v.tZ)(v.nv, null, s(e ? "webapp_step_unsername_instructions_deletion" : "webapp_step_username_instructions_reset")),
            (0, v.tZ)(ye.J9, { initialValues: { username: "" }, onSubmit: _ }, (e) =>
              (0, v.tZ)(
                c.Ejs,
                { fullWidth: !0, flexDirection: "column", gap: "6", as: ye.l0, autoComplete: "off" },
                (0, v.tZ)(ye.gN, { name: "username" }, ({ field: t }) =>
                  (0, v.tZ)(v.s8, {
                    ...t,
                    error: !!o,
                    readOnly: e.isSubmitting && !o,
                    label: s("webapp_form_email_label_deletion"),
                    required: !0,
                    feedback: { text: o ? s(o) : "" }
                  })
                ),
                (0, v.tZ)(
                  v.zx,
                  { sx: { alignSelf: "end" }, type: "submit", mood: "brand", intensity: "catchy", size: "large", isLoading: t },
                  s("webapp_continue_step_two_deletion")
                )
              )
            )
          )
        );
      };
      let Er = (function (e) {
        return (e.Username = "Username"), (e.TokenValidation = "TokenValidation"), (e.DeletionSuccess = " DeletionSuccess"), e;
      })({});
      var fr = n(312729),
        br = n(731788);
      const vr = "webapp_form_error_verification_timeout",
        yr = {
          [fr.D.INVALID_OTP_ALREADY_USED]: "webapp_form_error_invalid_otp_already_used",
          [fr.D.INVALID_OTP_BLOCKED]: "webapp_form_error_invalid_otp_blocked",
          [fr.D.ACCOUNT_BLOCKED_CONTACT_SUPPORT]: "webapp_form_error_account_blocked_contact_support",
          [fr.D.VERIFICATION_FAILED]: "webapp_form_error_verification_failed",
          [fr.D.VERIFICATION_REQUIRES_REQUEST]: vr,
          [fr.D.VERIFICATION_TIMEOUT]: vr
        },
        Sr = ({ isDelete: e }) => {
          const [t, n] = (0, a.useState)(null),
            { completeAccountDeletion: o, userAuthenticationMethod: r } = gr(),
            { translate: s } = (0, N.Z)();
          return (0, v.tZ)(
            a.Fragment,
            null,
            (0, v.tZ)(
              v.nv,
              null,
              s(
                ((e, t) =>
                  t ? "webapp_totp_instructions_deletion" : e ? "webapp_email_instructions_deletion" : "webapp_email_instructions_reset")(
                  e,
                  r === br.k.TOTP
                )
              )
            ),
            (0, v.tZ)(
              ye.J9,
              {
                initialValues: { emailCode: "" },
                onSubmit: async (t) => {
                  try {
                    const a = await o(t.emailCode, e);
                    a && n(yr[a]);
                  } catch (e) {
                    n("webapp_form_generic_error_deletion");
                  }
                }
              },
              (n) =>
                (0, v.tZ)(
                  c.Ejs,
                  { fullWidth: !0, flexDirection: "column", gap: "6", as: ye.l0, autoComplete: "off" },
                  (0, v.tZ)(ye.gN, { name: "emailCode" }, ({ field: { onChange: e, ...o } }) =>
                    (0, v.tZ)(v.qo, {
                      ...o,
                      onChange: (t) => {
                        e(t);
                      },
                      pattern: "[0-9]{6}",
                      error: !!t,
                      label: s("webapp_form_code-label_deletion"),
                      readOnly: n.isSubmitting && !t,
                      feedback: { text: t ? s(t) : "" }
                    })
                  ),
                  (0, v.tZ)(
                    v.zx,
                    {
                      sx: { alignSelf: "end" },
                      icon: "ActionDeleteOutlined",
                      type: "submit",
                      mood: "danger",
                      intensity: "catchy",
                      size: "large",
                      layout: "iconLeading"
                    },
                    s(e ? "webapp_form_submit_button_label_deletion" : "webapp_form_submit_button_label_reset")
                  )
                )
            )
          );
        },
        xr = ({ isDelete: e }) => {
          const { translate: t } = (0, N.Z)();
          return (0, v.tZ)(
            a.Fragment,
            null,
            (0, v.tZ)(v.X6, { as: "h2" }, t(e ? "webapp_success_step_title_account_deletion" : "webapp_success_step_title_account_reset")),
            (0, v.tZ)(
              v.nv,
              null,
              e ? t("webapp_success_step_message_account_deletion") : t.markup("webapp_success_step_message_account_reset_markup")
            )
          );
        },
        Tr = ({ isDelete: e }) => {
          const { translate: t } = (0, N.Z)(),
            { userAuthenticationMethod: n, isFlowCompleted: o } = gr(),
            a = ((e, t) => (e ? Er.DeletionSuccess : t ? Er.TokenValidation : Er.Username))(o, null !== n),
            r = null !== n ? 2 : 1,
            s = {
              [Er.Username]: t("webapp_step_username_paragraph_delete"),
              [Er.TokenValidation]: t(e ? "webapp_step_verification_paragraph_delete" : "webapp_step_verification_paragraph_reset"),
              [Er.DeletionSuccess]: null
            },
            i = {
              [Er.Username]: (0, v.tZ)(wr, { isDelete: e }),
              [Er.TokenValidation]: (0, v.tZ)(Sr, { isDelete: e }),
              [Er.DeletionSuccess]: (0, v.tZ)(xr, { isDelete: e })
            };
          return (0, v.tZ)(
            U.L,
            { backgroundColor: "ds.container.agnostic.neutral.standard" },
            (0, v.tZ)(
              c.Ejs,
              {
                flexWrap: "nowrap",
                sx: {
                  flexDirection: "column",
                  margin: "0px auto 0px auto",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  minHeight: "100vh",
                  maxWidth: "860px",
                  padding: "0 24px"
                },
                gap: "8px"
              },
              (0, v.tZ)(
                v.X6,
                { textStyle: "ds.title.section.large", as: "h1", sx: { marginBottom: "16px" } },
                t(e ? "webapp_delete_account_title" : "webapp_reset_account_title")
              ),
              o
                ? null
                : (0, v.tZ)(v.ke, {
                    sx: { width: "100%" },
                    size: "large",
                    mood: "danger",
                    title: t(e ? "webapp_infobox_delete_account_title" : "webapp_infobox_reset_account_title"),
                    description: (0, v.tZ)(v.nv, null, s[a]),
                    actions: [
                      (0, v.tZ)(
                        v.zx,
                        { intensity: "quiet", key: "learnMore", icon: "ActionOpenExternalLinkOutlined", layout: "iconTrailing" },
                        t("webapp_delete_account_learn_more")
                      )
                    ]
                  }),
              (0, v.tZ)(
                c.Ejs,
                {
                  flexWrap: "nowrap",
                  as: c.Zbd,
                  flexDirection: "column",
                  fullWidth: !0,
                  sx: {
                    padding: "24px",
                    backgroundColor: "ds.container.agnostic.neutral.supershy",
                    borderColor: "ds.border.neutral.quiet.idle",
                    gap: "16px"
                  }
                },
                o ? null : (0, v.tZ)(c.j49, null, "Step ", r, " of ", 2),
                i[a]
              )
            )
          );
        };
      var Cr, Or, Nr, Ar, kr, Rr, Ir, Dr, Zr, Pr, Lr;
      const Mr = (e, t) => {
        const n = e.clientRoutesBasePath;
        return a.createElement(
          xa,
          null,
          a.createElement(r.l_, { exact: !0, from: "/", to: `${n}/credentials` }),
          Cr || (Cr = a.createElement(r.Vy, { path: i.Bb, component: dr })),
          a.createElement(da, { path: [i.S, i.P], options: { marketingContentType: ln.DashlaneBusiness } }),
          Or || (Or = a.createElement(da, { path: [i.TT, i.SF, i.$F] })),
          Nr || (Nr = a.createElement(r.Vy, { path: i.rM, component: p.S })),
          Ar || (Ar = a.createElement(Ve, { path: i.bE })),
          kr || (kr = a.createElement(r.Vy, { path: i.aS, component: Ra })),
          Rr || (Rr = a.createElement(r.Vy, { path: i.sL, component: hn.rI })),
          Ir || (Ir = a.createElement(r.Vy, { path: i.Ml, component: Za })),
          Dr || (Dr = a.createElement(fa.Z, { path: i.cO })),
          Zr || (Zr = a.createElement(r.Vy, { path: i.uN, component: u })),
          Pr || (Pr = a.createElement(r.Vy, { path: i.Sm, component: Ca.B })),
          Lr || (Lr = a.createElement(r.Vy, { path: i._G, component: d })),
          a.createElement(r.Vy, { path: i.Mv, component: Tr, additionalProps: { isDelete: !0 } }),
          a.createElement(r.Vy, { path: i.NO, component: Tr, additionalProps: { isDelete: !1 } }),
          a.createElement(s.V, { ...(0, s.S)(n) }),
          a.createElement(Ea.Z, { routingSchemeOptions: t, basePath: n, path: [...(0, Ta.cX)(n)] })
        );
      };
    },
    739844: (e, t, n) => {
      "use strict";
      n.d(t, { FN: () => c, r9: () => l });
      var o = n(382706),
        a = n(974769),
        r = n(107274);
      const s = (...e) => e.join("/"),
        i = {
          [o.U.Address]: "/addresses",
          [o.U.BankAccount]: "/bank-accounts",
          [o.U.Company]: "/companies",
          [o.U.Credential]: "/credentials",
          [o.U.DriversLicense]: "/driver-licenses",
          [o.U.Email]: "/emails",
          [o.U.FiscalId]: "/fiscal-ids",
          [o.U.IdCard]: "/id-cards",
          [o.U.Identity]: "/identities",
          [o.U.Passkey]: "/passkeys",
          [o.U.Passport]: "/passports",
          [o.U.PaymentCard]: "/cards",
          [o.U.Phone]: "/phones",
          [o.U.SecureNote]: "/secure-notes",
          [o.U.SocialSecurityId]: "/social-security-ids",
          [o.U.Website]: "/websites"
        },
        c = (e) => {
          let t,
            n = 0;
          return e.startsWith("{") && (n = 1), e.endsWith("}") && (t = -1), e.toUpperCase().slice(n, t);
        },
        l = (e) => {
          e === a.vX.CLIENT ? a.M0 : a.U3;
          const t = a.wi,
            n = e === a.vX.TEAM_ADMIN_CONSOLE ? "" : t,
            o = a.ci,
            l = e === a.vX.CLIENT ? "" : a.Kn;
          return {
            teamRoutesBasePath: n,
            teamMembersRoutePath: s(n, "members"),
            teamSettingsRoutePath: s(n, "settings"),
            teamSettingsSso: s(n, "settings/sso-settings"),
            teamSettingsSsoEncryption: s(n, "settings/sso/self-hosted-sso"),
            teamAccountRoutePath: s(n, "account"),
            teamAccountChangePlanRoutePath: s(n, "account/changeplan"),
            teamActivityRoutePath: s(n, "activity"),
            teamGetStartedRoutePath: s(n, "get-started"),
            teamDashboardRoutePath: s(n, "dashboard"),
            teamDarkWebInsightsRoutePath: s(n, "dark-web-insights"),
            teamGroupsRoutePath: s(n, "groups"),
            teamGroupRoutePath: (e) => s(n, `groups/${e}`),
            familyDashboard: s(l, "family-dashboard"),
            clientRoutesBasePath: l,
            userDeviceRegistration: s(o, "device-registration"),
            userCreateMasterPassword: s(o, "create-master-password"),
            userSendRequest: s(o, "send-request"),
            userPendingRequest: s(o, "pending-request"),
            userAddApplicationCredential: s(l, "credentials/add/application"),
            userAddDatabaseCredential: s(l, "credentials/add/database"),
            userAddWebsiteCredential: s(l, "credentials/add"),
            userAddWebsiteCredentialWithPrefilledParameters: (e) => ({ pathname: s(l, "password-history/credentials/add"), state: e }),
            userCollection: (e) => s(l, `collections/${c(e)}`),
            userCollections: s(l, "collections"),
            userCredentials: s(l, "credentials"),
            userCredentialsAccountSettings: s(l, "credentials/account-settings"),
            userPasskeys: s(l, "passkeys"),
            userPasskey: (e) => s(l, `passkeys/${c(e)}`),
            userVaultItem: (e, t, n) => {
              const o = i[t];
              return n.includes(o) || (n += o), `${n}/${c(e)}`;
            },
            userCredential: (e) => s(l, `credentials/${c(e)}`),
            userPasswordHistory: s(l, "password-history"),
            userPasswordHistoryFilteredByCredential: (e) => s(l, `password-history/filter/${c(e)}`),
            userAddBlankNote: s(l, "secure-notes/add"),
            userSecureNotes: s(l, "secure-notes"),
            userAddBlankSecret: s(l, "secrets/add"),
            userSecrets: s(l, "secrets"),
            userOnboarding: s(l, "onboarding"),
            userReferral: s(l, "referral"),
            userChromeWelcome: s(l, "chrome-welcome"),
            userPasswordSites: s(l, "onboarding/add-password"),
            userAddMobile: s(l, "onboarding/add-mobile"),
            userTryAutofill: s(l, "onboarding/try-autofill"),
            userSecureNote: (e) => s(l, `secure-notes/${c(e)}`),
            userSecret: (e) => s(l, `secrets/${c(e)}`),
            userAddPersonalInfoCompany: s(l, "personal-info/companies/add"),
            userAddPersonalInfoEmail: s(l, "personal-info/emails/add"),
            userAddPersonalInfoAddress: s(l, "personal-info/addresses/add"),
            userAddPersonalInfoIdentity: s(l, "personal-info/identities/add"),
            userAddPersonalInfoPhone: s(l, "personal-info/phones/add"),
            userAddPersonalInfoWebsite: s(l, "personal-info/websites/add"),
            userPersonalInfo: s(l, "personal-info"),
            userPersonalInfoAddress: (e) => s(l, `personal-info/addresses/${c(e)}`),
            userPersonalInfoCompany: (e) => s(l, `personal-info/companies/${c(e)}`),
            userPersonalInfoEmail: (e) => s(l, `personal-info/emails/${c(e)}`),
            userPersonalInfoIdentity: (e) => s(l, `personal-info/identities/${c(e)}`),
            userPersonalInfoPhone: (e) => s(l, `personal-info/phones/${c(e)}`),
            userPersonalInfoWebsite: (e) => s(l, `personal-info/websites/${c(e)}`),
            userPayments: s(l, "payments"),
            userAddPaymentCard: s(l, "payments/card/add"),
            userPaymentCard: (e) => s(l, `payments/card/${c(e)}`),
            userAddBankAccount: s(l, "payments/bank-account/add"),
            userBankAccount: (e) => s(l, `payments/bank-account/${c(e)}`),
            userIdsDocuments: s(l, "ids"),
            userAddIdDocument: (e) => s(l, `ids${i[e]}/add`),
            userEditIdDocument: (e, t) => s(l, `ids${i[e]}/${c(t)}`),
            userEmergency: s(l, "emergency"),
            userSettings: s(l, "settings"),
            userUpsell: s(l, "go-premium"),
            userSharingCenter: s(l, "sharing-center"),
            userGoPlans: a.ZL,
            userGoAdvanced: (e, t) => (0, r.g3)(a.TD, { subCode: e, pricing: t }),
            userGoEssentials: (e, t) => (0, r.g3)(a.lP, { subCode: e, pricing: t }),
            userGoFamily: (e, t) => (0, r.g3)(a.GG, { subCode: e, pricing: t }),
            userGoPremium: (e, t) => (0, r.g3)(a.G9, { subCode: e, pricing: t }),
            userSharingGroupInfo: (e) => s(l, `sharing-center/group/${c(e)}`),
            userSharingUserInfo: (e) => s(l, `sharing-center/user/${e.toLowerCase()}`),
            userPasswordHealth: s(l, "password-health"),
            userSubscriptionManagement: s(l, "subscription"),
            deviceTransfer: s(l, "device-transfer"),
            darkWebMonitoring: s(l, "darkweb-monitoring"),
            antiPhishing: s(l, "anti-phishing"),
            premiumPlus: s(l, "premium-plus"),
            vpn: s(l, "vpn"),
            importData: s(l, "import/source"),
            twoFactorAuthenticationEnforce: s(l, "two-factor-authentication/enforce"),
            dashlaneLabs: s(l, "dashlane-labs"),
            privacySettings: s(l, "privacy-settings")
          };
        };
    },
    23600: (e, t, n) => {
      "use strict";
      n.d(t, { L: () => r });
      var o = n(142897),
        a = n(441217);
      const r = ({ children: e, backgroundColor: t = "ds.background.alternate" }) =>
        (0, o.tZ)(
          "div",
          { sx: { backgroundColor: t, minHeight: "100%", width: "100%" } },
          (0, o.tZ)(
            "div",
            { sx: { position: "sticky", paddingLeft: "80px", top: "50px" } },
            (0, o.tZ)(a.D1W, { color: a.vei.DashGreen, size: a.r1z.Size39 })
          ),
          e
        );
    },
    364075: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => o });
      const o = (0, n(577037).Z)("INITIAL_SYNC_PROGRESS", { isPending: !1, isIntroPhasePending: !1 });
    },
    864011: (e, t, n) => {
      "use strict";
      n.d(t, { D: () => o, t: () => a });
      const o = (e) => e.initialSyncProgress.isPending,
        a = (e) => e.initialSyncProgress.isIntroPhasePending;
    },
    545431: (e, t, n) => {
      "use strict";
      n.d(t, { v: () => i });
      var o = n(441217),
        a = n(696832),
        r = n(201389),
        s = n(542293);
      const i = ({ isOpen: e, onLogout: t, onDismiss: n, showCloseIcon: i }) => {
        const { translate: c } = (0, r.Z)(),
          l = () => {
            n && n();
          };
        return a.createElement(
          s.o,
          {
            isOpen: e,
            onRequestClose: l,
            footer: a.createElement(o.cNS, {
              primaryButtonTitle: c("webapp_logout_dialog_confirm"),
              primaryButtonOnClick: () => {
                t();
              },
              secondaryButtonTitle: c("webapp_logout_dialog_dismiss"),
              secondaryButtonOnClick: l,
              intent: "danger"
            }),
            title: c("webapp_logout_dialog_title"),
            showCloseIcon: i
          },
          c("webapp_logout_dialog_text")
        );
      };
    },
    607718: (e, t, n) => {
      "use strict";
      n.d(t, { a: () => l });
      var o = n(696832),
        a = n(969950),
        r = n(148038),
        s = n(66941),
        i = n(111984),
        c = n(864011);
      function l() {
        const e = (0, r.qr)({ queryConfig: { query: s.C.getLoginStatus }, liveConfig: { live: s.C.loginStatusChanged } }, []),
          t = (0, a.v9)(c.D),
          n = (0, a.oR)(),
          l = o.useRef(!0);
        o.useEffect(() => {
          if (e.status === r.rq.Success) {
            const { loggedIn: o, needsSSOMigration: a } = e.data;
            o || (l.current = !0), o && l.current && !t && !a && ((0, i.et)(n), (l.current = !1));
          }
        }, [n, e, t]);
      }
    },
    806638: (e, t, n) => {
      "use strict";
      n.d(t, { a: () => y });
      var o = n(696832),
        a = n(383849),
        r = n.n(a),
        s = n(441217),
        i = n(201389),
        c = n(177704),
        l = n(764130),
        _ = n(929986),
        u = n(142897),
        p = n(482598),
        d = n(799852),
        m = n(660765),
        g = n(974769),
        h = n(62429),
        w = n(635164);
      const E = ({ onLostKey: e }) => {
        const { translate: t } = (0, i.Z)(),
          { startRecoveryFlow: n } = (0, p.u)(l.j),
          a = (0, d.k)(_.V, "authenticationFlowStatus");
        return (0, u.tZ)(
          o.Fragment,
          null,
          (0, u.tZ)(s._m8, { size: 77, color: "ds.text.brand.quiet", sx: { margin: "10px 0 30px 0" } }),
          (0, u.tZ)(
            s.$N8,
            null,
            (0, u.tZ)(
              u.X6,
              { as: "h2", color: "ds.text.neutral.catchy", sx: { marginBottom: "16px" } },
              t("webapp_login_form_use_your_recovery_key_title")
            )
          ),
          (0, u.tZ)(
            s.a7O,
            null,
            (0, u.tZ)(u.nv, { color: "ds.text.neutral.standard" }, t("webapp_login_form_use_your_recovery_key_description"))
          ),
          (0, u.tZ)(
            s.cNS,
            null,
            (0, u.tZ)(
              u.zx,
              { intensity: "quiet", mood: "neutral", sx: { marginRight: "8px" }, onClick: e },
              t("webapp_login_form_use_your_recovery_key_lost_key_button")
            ),
            (0, u.tZ)(
              u.zx,
              {
                onClick: () => {
                  if ("MasterPasswordStep" !== a.data?.step)
                    throw new Error("Cant perform AR outside of Master Password step of the Login flow");
                  n({ login: a.data?.loginEmail }),
                    (0, h.Kz)(new m.UserUseAccountRecoveryKeyEvent({ flowStep: m.FlowStep.Start })),
                    (0, w.uX)(g.g);
                }
              },
              t("webapp_login_form_use_your_recovery_key_start_button")
            )
          )
        );
      };
      var f = n(695495);
      const b = () => {
        const { translate: e } = (0, i.Z)();
        return (0, f.tZ)(
          o.Fragment,
          null,
          (0, f.tZ)(
            s.$N8,
            null,
            (0, f.tZ)(
              u.X6,
              { as: "h2", color: "ds.text.neutral.catchy", sx: { margin: "32px 0 16px 0" } },
              e("webapp_login_form_lost_recovery_key_start_title")
            )
          ),
          (0, f.tZ)(
            s.a7O,
            null,
            (0, f.tZ)(
              u.nv,
              { color: "ds.text.neutral.standard", sx: { marginBottom: "24px" } },
              e("webapp_login_form_lost_recovery_key_description_primary")
            ),
            (0, f.tZ)(u.nv, { color: "ds.text.neutral.standard" }, e("webapp_login_form_lost_recovery_key_description_secondary"))
          ),
          (0, f.tZ)(
            s.cNS,
            null,
            (0, f.tZ)(
              "a",
              { href: g.yE, target: "_blank", rel: "noopener noreferrer" },
              (0, f.tZ)(
                u.zx,
                { intensity: "quiet", mood: "neutral", sx: { marginRight: "8px" } },
                e("webapp_login_form_lost_recovery_key_learn_more_button")
              )
            ),
            (0, f.tZ)(
              "a",
              { href: g.J, target: "_blank", rel: "noopener noreferrer" },
              (0, f.tZ)(u.zx, null, e("webapp_login_form_lost_recovery_key_reset_account_button"))
            )
          )
        );
      };
      var v;
      const y = ({ onClose: e }) => {
        const { translate: t } = (0, i.Z)(),
          [n, a] = (0, o.useState)(!1);
        return o.createElement(
          s.VqE,
          {
            isOpen: !0,
            modalContentClassName: r()(c.Ht),
            disableOutsideClickClose: !0,
            disableScrolling: !0,
            disableUserInputTrap: !0,
            disableEscapeKeyClose: !0,
            closeIconName: t("_common_dialog_dismiss_button"),
            onClose: e
          },
          n ? v || (v = o.createElement(b, null)) : o.createElement(E, { onLostKey: () => a(!0) })
        );
      };
    },
    147088: (e, t, n) => {
      "use strict";
      n.d(t, { H: () => u });
      var o,
        a = n(696832),
        r = n(453576),
        s = n(22393),
        i = n(635164),
        c = n(66941),
        l = n(974769),
        _ = n(969331);
      const u = ({ onClose: e, masterPassword: t, existingARStatus: n }) => {
        const [u, p] = (0, a.useState)(null != n ? n : { processStatus: "UNSET" });
        (0, a.useEffect)(() => {
          "UNSET" === u.processStatus &&
            (async () => {
              const e = await c.C.isRecoveryRequestPending();
              if (e.success && e.response) {
                const e = await c.C.checkRecoveryRequestStatus({ masterPassword: t });
                e.success && p({ processStatus: "PENDING", requestStatus: e.response.status });
              }
            })();
        }, []);
        const d = () => {
            p({ processStatus: "UNSET" });
          },
          m = () => {
            d(), e();
          };
        return a.createElement(
          a.Fragment,
          null,
          o || (o = a.createElement("div", { id: "dashlane-dialog" })),
          a.createElement(
            s.r,
            null,
            "UNSET" === u.processStatus && a.createElement(_.WE, { showAccountRecoveryDialog: !0, handleDismiss: m }),
            "ERROR" === u.processStatus && a.createElement(_.Hc, { isAccountRecoveryError: !0, handleGenericRecoveryErrorClose: m }),
            "PENDING" === u.processStatus &&
              a.createElement(
                a.Fragment,
                null,
                a.createElement(_.H4, {
                  isAccountRecoveryPending: u.requestStatus === r.RequestStatus.PENDING,
                  shouldSendNewRequest: !t,
                  handleShowAccountRecoveryDialog: d,
                  handleShowGenericRecoveryError: () => {
                    p({ processStatus: "ERROR" });
                  },
                  handleDismiss: m
                }),
                a.createElement(_.g1, {
                  isAccountRecoveryApproved: u.requestStatus === r.RequestStatus.APPROVED,
                  handleDismiss: m,
                  handleAccountRecovery: async () => {
                    t &&
                      0 !== t.length &&
                      ((await c.C.recoverUserData({ masterPassword: t })).success
                        ? (c.C.changeMasterPassword({ newPassword: t, flow: r.ChangeMPFlowPath.ADMIN_ASSISTED_RECOVERY }),
                          (0, i.uX)(`${l.ci}/change-master-password`))
                        : p({ processStatus: "ERROR" }));
                  }
                }),
                a.createElement(_._H, { isAccountRecoveryRejected: u.requestStatus === r.RequestStatus.REFUSED, handleDismiss: m })
              )
          )
        );
      };
    },
    526063: (e, t, n) => {
      "use strict";
      n.d(t, { z: () => f });
      var o,
        a = n(383849),
        r = n.n(a),
        s = n(764130),
        i = n(929986),
        c = n(142897),
        l = n(660765),
        _ = n(482598),
        u = n(799852),
        p = n(695495),
        d = n(441217),
        m = n(62429),
        g = n(201389),
        h = n(177704),
        w = n(974769),
        E = n(635164);
      const f = ({ onClose: e }) => {
        const { translate: t } = (0, g.Z)(),
          { startRecoveryFlow: n } = (0, _.u)(s.j),
          a = (0, u.k)(i.V, "authenticationFlowStatus");
        return (0, p.tZ)(
          d.VqE,
          {
            isOpen: !0,
            modalContentClassName: r()(h.Ht),
            disableOutsideClickClose: !0,
            disableScrolling: !0,
            disableUserInputTrap: !0,
            disableEscapeKeyClose: !0,
            closeIconName: t("_common_dialog_dismiss_button"),
            onClose: e
          },
          (0, p.tZ)(d._m8, { size: 77, color: "ds.text.brand.quiet", sx: { margin: "10px 0 30px 0" } }),
          (0, p.tZ)(
            d.$N8,
            null,
            (0, p.tZ)(
              c.X6,
              { as: "h2", color: "ds.text.neutral.catchy", sx: { marginBottom: "16px" } },
              t("webapp_login_form_choose_account_recovery_key_method_title")
            )
          ),
          (0, p.tZ)(
            d.a7O,
            null,
            (0, p.tZ)(c.nv, { color: "ds.text.neutral.standard" }, t("webapp_login_form_choose_account_recovery_key_method_description")),
            (0, p.tZ)(
              d.rUS,
              {
                target: "_blank",
                rel: "noopener noreferrer",
                href: w.rI,
                sx: { display: "flex", alignItems: "center", marginTop: "16px" }
              },
              (0, p.tZ)(
                c.nv,
                { color: "ds.text.brand.quiet", textStyle: "ds.body.standard.strong", sx: { marginRight: "6px" } },
                t("webapp_login_form_choose_account_recovery_key_method_link")
              ),
              o || (o = (0, p.tZ)(c.JO, { name: "ActionOpenExternalLinkOutlined", size: "small", color: "ds.text.brand.standard" }))
            )
          ),
          (0, p.tZ)(
            d.cNS,
            null,
            (0, p.tZ)(
              c.zx,
              {
                intensity: "quiet",
                mood: "neutral",
                sx: { marginRight: "8px" },
                onClick: () => {
                  if ("MasterPasswordStep" !== a.data?.step)
                    throw new Error("Cant perform AR outside of Master Password step of the Login flow");
                  n({ login: a.data?.loginEmail }),
                    (0, m.Kz)(new l.UserUseAccountRecoveryKeyEvent({ flowStep: l.FlowStep.Start })),
                    (0, E.uX)(w.g);
                }
              },
              t("webapp_login_form_choose_account_recovery_key_method_use_ark_button")
            ),
            (0, p.tZ)(
              c.zx,
              {
                mood: "brand",
                onClick: () => {
                  (0, E.uX)(w.ci);
                }
              },
              t("webapp_login_form_choose_account_recovery_key_method_use_admin_ar_button")
            )
          )
        );
      };
    },
    290287: (e, t, n) => {
      "use strict";
      n.d(t, { A3: () => g, n5: () => r, h4: () => _, W_: () => l, ae: () => E });
      var o = n(142897),
        a = n(441217);
      const r = ({ children: e }) =>
        (0, o.tZ)(
          a.Ejs,
          { justifyContent: "center", alignItems: "center", flexDirection: "column", sx: { marginTop: "150px" } },
          (0, o.tZ)(
            a.Ejs,
            { justifyContent: "left", flexDirection: "column", gap: "32px", sx: { width: "350px", position: "relative" } },
            e
          )
        );
      var s = n(635164),
        i = n(201389),
        c = n(974769);
      const l = () => {
          const { translate: e } = (0, i.Z)();
          return (0, o.tZ)(
            a.Ejs,
            { justifyContent: "flex-end", alignItems: "center", sx: { alignSelf: "end", marginRight: "80px", marginTop: "40px" } },
            (0, o.tZ)(o.nv, { color: "ds.text.neutral.quiet" }, e("webapp_auth_panel_create_an_account")),
            (0, o.tZ)(
              o.zx,
              {
                sx: { marginLeft: "15px" },
                type: "button",
                intensity: "quiet",
                onClick: () => {
                  (0, s.uX)(c.SF);
                }
              },
              e("webapp_auth_panel_create_sign_up")
            )
          );
        },
        _ = ({ text: e }) => (0, o.tZ)("header", null, (0, o.tZ)(o.X6, { as: "h2", textStyle: "ds.title.section.large" }, e));
      var u = n(929986),
        p = n(482598),
        d = n(660765),
        m = n(62429);
      const g = ({ selectedEmail: e }) => {
        const { translate: t } = (0, i.Z)(),
          { changeLogin: n } = (0, p.u)(u.V),
          a = t("webapp_login_form_password_fieldset_log_in_different_account");
        return (0, o.tZ)(
          "div",
          null,
          (0, o.tZ)(o.nv, { sx: { fontWeight: 500, wordBreak: "break-all", marginBottom: "5px" }, "data-testid": "login-email-header" }, e),
          (0, o.tZ)(
            o.zx,
            {
              type: "button",
              intensity: "supershy",
              onClick: () => (n({}), void (0, m.Kz)(new d.UserUseAnotherAccountEvent({}))),
              sx: {
                padding: "0",
                height: "auto",
                fontWeight: "400",
                fontSize: "13px",
                "&:hover": { backgroundColor: "transparent !important" }
              },
              "aria-label": a
            },
            a
          )
        );
      };
      var h = n(696832);
      const w = "securityCodeInstruction",
        E = ({ securityToken: e, maxLength: t, title: n, onTokenInputChange: r, errorMessage: s }) =>
          h.createElement(
            h.Fragment,
            null,
            h.createElement(o.nv, { id: w, color: "ds.text.neutral.quiet", style: { marginBottom: "16px" } }, n),
            h.createElement(a.rRH, {
              autoFocus: !0,
              value: e,
              maxLength: t,
              inputMode: "numeric",
              id: "security-code-input",
              "data-testid": "token-input",
              onChange: r,
              feedbackType: s ? "error" : void 0,
              feedbackText: s,
              "aria-labelledby": w
            })
          );
      n(806638), n(147088), n(526063);
    },
    837533: (e, t, n) => {
      "use strict";
      n.d(t, { IT: () => r, N3: () => o, Rq: () => a, Z6: () => s });
      const o = 6,
        a = 2e3,
        r = "https://www.dashlane.com/otpphonelost_codes",
        s = "ask-account-recovery-key";
    },
    176034: (e, t, n) => {
      "use strict";
      n.d(t, { f: () => r });
      var o = n(148038),
        a = n(66941);
      const r = () =>
        (0, o.qr)({ queryConfig: { query: a.C.getIsAutoSSOLoginDisabled }, liveConfig: { live: a.C.liveIsAutoSSOLoginDisabled } }, []);
    },
    339227: (e, t, n) => {
      "use strict";
      n.d(t, { G: () => r });
      var o = n(148038),
        a = n(66941);
      function r() {
        const e = (0, o.qr)(
          { queryConfig: { query: a.C.getIsLoginFlowMigrationDisabled }, liveConfig: { live: a.C.liveIsLoginFlowMigrationDisabled } },
          []
        );
        return e.status !== o.rq.Success ? { loading: !0 } : { loading: !1, data: e.data };
      }
    },
    690656: (e, t, n) => {
      "use strict";
      n.d(t, { c: () => s });
      var o = n(764130),
        a = n(799852),
        r = n(205760);
      function s() {
        var e;
        const t = (0, r.f)(),
          { data: n } = (0, a.k)(o.j, "accountRecoveryKeyStatus", { login: null != t ? t : "" });
        return null != (e = n?.isEnabled) && e;
      }
    },
    765695: (e, t, n) => {
      "use strict";
      n.d(t, {
        sI: () => R,
        W2: () => h,
        rG: () => S,
        Wo: () => Y,
        ku: () => ce,
        JU: () => N,
        UV: () => oe,
        rI: () => we,
        a3: () => ee,
        Lv: () => Ae,
        NA: () => ge
      });
      var o = n(696832),
        a = n(788355),
        r = n(142897),
        s = n(55548),
        i = n(660765),
        c = n(441217),
        l = n(974769),
        _ = n(201389),
        u = n(635164),
        p = n(290287);
      const d = "webapp_login_form_email_fieldset_email_confirm",
        m = {
          EMPTY_LOGIN: "webapp_login_form_email_fieldset_error_empty_login",
          INVALID_LOGIN: "webapp_login_form_email_fieldset_error_invalid_login",
          NETWORK_ERROR: "webapp_login_form_email_fieldset_network_error_offline",
          SSO_BLOCKED: "webapp_login_form_email_fieldset_error_sso_blocked",
          TEAM_GENERIC_ERROR: "webapp_login_form_email_fieldset_error_team_generic_error",
          THROTTLED: "webapp_login_form_email_fieldset_error_throttled",
          UNKNOWN_ERROR: "webapp_login_form_email_fieldset_error_unknown",
          USER_DOESNT_EXIST: "webapp_login_form_email_fieldset_error_user_doesnt_exist",
          USER_DOESNT_EXIST_SSO: "webapp_login_form_email_fieldset_error_user_doesnt_exist",
          USER_DOESNT_EXIST_UNLIKELY_MX: "webapp_login_form_email_fieldset_error_user_doesnt_exist_unlikely_mx",
          USER_DOESNT_EXIST_INVALID_MX: "webapp_login_form_email_fieldset_error_user_doesnt_exist_invalid_mx"
        },
        g = "USE_ANOTHER_ACCOUNT",
        h = ({
          localAccounts: e,
          sendEmail: t,
          loginEmail: n,
          isLoading: h,
          error: w,
          clearInputError: E,
          prefilledEmail: f,
          onClearPrefilledEmail: b
        }) => {
          var v;
          const { translate: y } = (0, _.Z)(),
            [S, x] = (0, o.useState)(e && e.length > 0 && e.some((e) => e.isLastSuccessfulLogin)),
            { trackPageView: T } = (0, s.D)();
          (0, o.useEffect)(() => {
            T({ pageView: i.PageView.LoginEmail });
          }, []);
          const C = e.find((e) => e.isLastSuccessfulLogin),
            O = null != (v = null != n ? n : C?.login) ? v : "";
          (0, o.useEffect)(() => {
            f && (b(), t({ login: f }));
          }, [f]),
            (0, o.useEffect)(() => {
              "USER_DOESNT_EXIST_SSO" === w && (E(), (0, u.uX)(`${l.SF}?email=${n}`));
            }, [w, n, E]);
          const N = (0, a.TA)({
              initialValues: { email: O },
              onSubmit: (e) => {
                const { email: n } = e;
                t({ login: n });
              }
            }),
            {
              values: { email: A },
              setFieldValue: k
            } = N,
            R = [
              ...e.map(({ login: e }) => ({ label: e, value: e })),
              { label: y("webapp_login_form_email_fieldset_select_option_other_account"), value: g }
            ];
          return (0, r.tZ)(
            p.n5,
            null,
            (0, r.tZ)(p.h4, { text: y("webapp_login_form_heading_log_in") }),
            (0, r.tZ)(
              "form",
              { noValidate: !0, onSubmit: N.handleSubmit, sx: { gap: "25px", display: "flex", flexDirection: "column" } },
              S && e
                ? (0, r.tZ)(
                    r.nv,
                    { as: "label", htmlFor: "login-select", "data-testid": "login_container", color: "ds.text.neutral.quiet" },
                    (0, r.tZ)(c.qWE, {
                      id: "login-select",
                      "data-testid": "login_container",
                      name: "email",
                      isClearable: !1,
                      isSearchable: !1,
                      options: R,
                      onChange: (e) => {
                        const t = e.value;
                        E(), t === g ? (k("email", ""), x(!1)) : k("email", t);
                      },
                      value: { label: A, value: A }
                    })
                  )
                : (0, r.tZ)(r.s8, {
                    name: "email",
                    id: "extng-account-email-input",
                    value: A,
                    type: "email",
                    onChange: (e) => {
                      const {
                        target: { value: t }
                      } = e;
                      E(), t === g ? (k("email", ""), x(!1)) : k("email", t);
                    },
                    placeholder: y("webapp_login_form_email_fieldset_email_placeholder"),
                    label: y("webapp_login_form_email_fieldset_email_description"),
                    error: !!w,
                    feedback: w ? { id: "login-account-email-input-error", text: y(m[w]) } : void 0,
                    autoFocus: !0
                  }),
              (0, r.tZ)(
                r.zx,
                {
                  type: "submit",
                  id: "extng-account-email-next-button",
                  "aria-label": y(d),
                  "data-testid": "login-button",
                  fullsize: !0,
                  size: "large",
                  disabled: h,
                  isLoading: h
                },
                y(d)
              )
            )
          );
        };
      var w = n(110551),
        E = n(837533),
        f = n(809205),
        b = n(121911),
        v = n(62429);
      const y = {
          EMPTY_TOKEN: "webapp_login_form_password_fieldset_security_code_error_empty_token",
          TOKEN_NOT_VALID: "webapp_account_security_settings_two_factor_authentication_turn_off_authenticator_invalid_security_code",
          REGISTER_DEVICE_FAILED: "webapp_login_form_password_fieldset_security_code_error_token_not_valid",
          TOKEN_LOCKED: "webapp_login_form_password_fieldset_security_code_error_token_locked",
          TOKEN_TOO_MANY_ATTEMPTS: "webapp_login_form_password_fieldset_security_code_error_token_too_many_attempts",
          TOKEN_ACCOUNT_LOCKED: "webapp_login_form_password_fieldset_security_code_error_token_account_locked",
          TOKEN_EXPIRED: "webapp_login_form_password_fieldset_security_code_error_token_expired",
          UNKNOWN_ERROR: "webapp_login_form_password_fieldset_security_code_error_unkown",
          THROTTLED: "webapp_login_form_password_fieldset_error_throttled",
          NETWORK_ERROR: "webapp_login_form_password_fieldset_network_error_offline"
        },
        S = ({
          loginEmail: e,
          error: t,
          isLoading: n,
          isDashlaneAuthenticatorAvailable: l,
          resendEmailToken: u,
          switchToDashlaneAuthenticator: d,
          submitEmailToken: m,
          clearInputError: g,
          prefilledToken: h,
          onClearPrefilledToken: S
        }) => {
          var x;
          const { translate: T } = (0, _.Z)(),
            [C, O] = (0, o.useState)(!1),
            { trackPageView: N } = (0, s.D)();
          (0, o.useEffect)(() => {
            N({ pageView: i.PageView.LoginTokenEmail });
          }, []),
            (0, o.useEffect)(() => {
              h && (S(), m({ emailToken: h, deviceName: w.getDefaultDeviceName() }));
            }, [h]);
          const {
            setFieldValue: A,
            handleSubmit: k,
            values: { emailToken: R }
          } = (0, a.TA)({
            initialValues: { emailToken: "" },
            onSubmit: ({ emailToken: e }) => {
              m({ emailToken: e, deviceName: w.getDefaultDeviceName() });
            }
          });
          return (0, r.tZ)(
            p.n5,
            null,
            (0, r.tZ)(p.h4, { text: T("webapp_login_form_heading_log_in") }),
            (0, r.tZ)(p.A3, { selectedEmail: e }),
            (0, r.tZ)(
              "form",
              { onSubmit: k },
              (0, r.tZ)(p.ae, {
                title: T("webapp_login_form_password_fieldset_security_code_description"),
                securityToken: R,
                maxLength: E.N3,
                onTokenInputChange: (e) => {
                  const {
                    target: { value: t }
                  } = e;
                  g(), A("emailToken", ((e) => e.replace(/\D/g, ""))(t)), t.length === E.N3 && k();
                },
                errorMessage: t ? T(null != (x = y[t]) ? x : y.UNKNOWN_ERROR) : void 0
              }),
              (0, r.tZ)(
                r.zx,
                {
                  type: "submit",
                  id: "extng-submit-email-token-button",
                  "data-testid": "login-button",
                  isLoading: n,
                  disabled: R.length < 6,
                  size: "large",
                  fullsize: !0,
                  sx: { marginTop: "16px" }
                },
                T("webapp_auth_panel_login")
              )
            ),
            (0, r.tZ)(
              "div",
              null,
              (0, r.tZ)(r.nv, null, T("webapp_dashlane_authenticator_authentication_didnt_receive_code")),
              (0, r.tZ)(
                c.Ejs,
                null,
                (0, r.tZ)(
                  c.rUS,
                  {
                    onClick: () => {
                      (0, v.Kz)(new i.UserResendTokenEvent({})),
                        u(),
                        O(!0),
                        setTimeout(() => {
                          O(!1);
                        }, E.Rq);
                    },
                    color: "ds.text.brand.quiet",
                    sx: { marginRight: "4px" }
                  },
                  T("webapp_login_form_password_fieldset_resend_token")
                ),
                C
                  ? (0, r.tZ)(
                      c.Ejs,
                      { style: { marginTop: "24px", marginBottom: "24px" } },
                      (0, r.tZ)(b.Z, {
                        height: 18.5,
                        width: 18.5,
                        animationParams: { renderer: "svg", animationData: f, loop: !1, autoplay: !0 }
                      }),
                      (0, r.tZ)(
                        r.nv,
                        { color: "ds.text.positive.quiet", sx: { marginLeft: "4px" } },
                        T("webapp_login_form_password_fieldset_security_code_resent")
                      )
                    )
                  : null
              ),
              l
                ? (0, r.tZ)(
                    c.Ejs,
                    { flexDirection: "column", sx: { marginTop: "24px" } },
                    (0, r.tZ)(r.nv, null, T("webapp_dashlane_authenticator_authentication_cant_access_your_email")),
                    (0, r.tZ)(
                      c.rUS,
                      {
                        onClick: () => {
                          d();
                        },
                        color: "ds.text.brand.quiet"
                      },
                      T("webapp_dashlane_authenticator_authentication_use_dashlane_authenticator_app")
                    )
                  )
                : null
            )
          );
        };
      var x = n(453576);
      const T = {
          EMPTY_OTP: "webapp_login_form_password_fieldset_security_code_error_empty_otp",
          OTP_NOT_VALID: "webapp_account_security_settings_two_factor_authentication_turn_off_authenticator_invalid_security_code",
          OTP_ALREADY_USED: "webapp_login_form_password_fieldset_security_code_error_otp_already_used",
          OTP_TOO_MANY_ATTEMPTS: "webapp_login_form_password_fieldset_security_code_error_token_too_many_attempts",
          UNKNOWN_ERROR: "webapp_login_form_password_fieldset_security_code_error_unkown",
          NETWORK_ERROR: "webapp_login_form_password_fieldset_network_error_offline"
        },
        C = RegExp("^[0-9]{6}$"),
        O = { display: "flex", flexDirection: "column", gap: "4px", lineHeight: "20px" },
        N = ({
          loginEmail: e,
          error: t,
          isLoading: n,
          changeTwoFactorAuthenticationOtpType: u,
          clearInputError: d,
          submitTotp: m,
          prefilledToken: g,
          onClearPrefilledToken: h
        }) => {
          var w;
          const { translate: f } = (0, _.Z)(),
            [b, v] = (0, o.useState)(!1),
            y = (0, o.useRef)();
          (0, o.useEffect)(() => {
            g && (h(), m({ twoFactorAuthenticationOtpValue: g }));
          }, [g]);
          const { trackPageView: S } = (0, s.D)();
          (0, o.useEffect)(() => {
            S({ pageView: i.PageView.LoginTokenAuthenticator });
          }, []),
            (0, o.useEffect)(() => {
              t && (v(y.current === t && t === x.AuthenticationCode[x.AuthenticationCode.OTP_NOT_VALID]), (y.current = t));
            }, [t]);
          const {
            setFieldValue: N,
            handleSubmit: A,
            values: { twoFactorAuthenticationOtpValue: k }
          } = (0, a.TA)({
            initialValues: { twoFactorAuthenticationOtpValue: "" },
            onSubmit: ({ twoFactorAuthenticationOtpValue: e }) => {
              m({ twoFactorAuthenticationOtpValue: e });
            }
          });
          return (0, r.tZ)(
            p.n5,
            null,
            (0, r.tZ)(p.h4, { text: f("webapp_login_form_heading_log_in") }),
            (0, r.tZ)(p.A3, { selectedEmail: e }),
            (0, r.tZ)(
              "form",
              { onSubmit: A },
              (0, r.tZ)(p.ae, {
                title: f("webapp_login_form_password_fieldset_security_code_otp_description"),
                securityToken: k,
                maxLength: E.N3,
                onTokenInputChange: (e) => {
                  const {
                    target: { value: t }
                  } = e;
                  d(), N("twoFactorAuthenticationOtpValue", ((e) => e.replace(/\D/g, ""))(t)), C.test(t) && A();
                },
                errorMessage: t ? f(null != (w = T[t]) ? w : T.UNKNOWN_ERROR) : void 0
              }),
              b
                ? (0, r.tZ)(r.ke, {
                    sx: { marginTop: "16px" },
                    title: f.markup(
                      "webapp_two_factor_authentication_sync_devices_time_infobox_markup",
                      { supportArticleLink: l.fL },
                      { linkTarget: "_blank" }
                    ),
                    mood: "brand",
                    size: "small"
                  })
                : null,
              (0, r.tZ)(
                c.nvN,
                { color: "ds.text.neutral.quiet", sx: { ...O, margin: "16px 0 8px 0" } },
                f("webapp_two_factor_authentication_cant_access_your_app"),
                (0, r.tZ)(
                  c.rUS,
                  { onClick: () => u({ twoFactorAuthenticationOtpType: "backupCode" }), color: "ds.text.brand.quiet", target: "_self" },
                  f("webapp_two_factor_authentication_use_backup_code")
                )
              ),
              (0, r.tZ)(
                c.nvN,
                { color: "ds.text.neutral.quiet", sx: { ...O, margin: "8px 0" } },
                f("webapp_two_factor_authentication_lost_your_phone"),
                (0, r.tZ)(
                  c.rUS,
                  { color: "ds.text.brand.quiet", href: E.IT, target: "_blank", rel: "noopener noreferrer" },
                  f("webapp_two_factor_authentication_reset_2fa")
                )
              ),
              (0, r.tZ)(
                r.zx,
                {
                  type: "submit",
                  "data-testid": "submitTotp",
                  isLoading: n,
                  disabled: k.length < 6,
                  size: "large",
                  fullsize: !0,
                  sx: { marginTop: "16px" }
                },
                f("webapp_auth_panel_login")
              )
            )
          );
        },
        A = {
          EMPTY_OTP: "webapp_login_form_password_fieldset_security_code_error_otp_not_valid",
          EMPTY_TOKEN: "webapp_login_form_password_fieldset_security_code_error_empty_token",
          TOKEN_NOT_VALID: "webapp_login_form_password_fieldset_security_code_error_token_not_valid",
          TOKEN_LOCKED: "webapp_login_form_password_fieldset_security_code_error_token_locked",
          TOKEN_TOO_MANY_ATTEMPTS: "webapp_login_form_password_fieldset_security_code_error_token_too_many_attempts",
          TOKEN_ACCOUNT_LOCKED: "webapp_login_form_password_fieldset_security_code_error_token_account_locked",
          TOKEN_EXPIRED: "webapp_login_form_password_fieldset_security_code_error_token_expired",
          UNKNOWN_ERROR: "webapp_login_form_password_fieldset_security_code_error_unkown",
          THROTTLED: "webapp_login_form_password_fieldset_error_throttled",
          NETWORK_ERROR: "webapp_login_form_password_fieldset_network_error_offline"
        },
        k = { display: "flex", flexDirection: "column", gap: "4px", lineHeight: "20px" },
        R = ({ loginEmail: e, error: t, isLoading: n, changeTwoFactorAuthenticationOtpType: s, submitBackupCode: i }) => {
          var l;
          const { translate: u } = (0, _.Z)(),
            d = (0, o.useRef)(null),
            {
              setFieldValue: m,
              handleSubmit: g,
              values: { twoFactorAuthenticationOtpValue: h }
            } = (0, a.TA)({
              initialValues: { twoFactorAuthenticationOtpValue: "" },
              onSubmit: ({ twoFactorAuthenticationOtpValue: e }) => {
                i({ twoFactorAuthenticationOtpValue: e }), d.current?.focus();
              }
            });
          return (0, r.tZ)(
            p.n5,
            null,
            (0, r.tZ)(p.h4, { text: u("webapp_account_security_settings_two_factor_authentication_backup_code_title") }),
            (0, r.tZ)(p.A3, { selectedEmail: e }),
            (0, r.tZ)(
              "form",
              { onSubmit: g },
              (0, r.tZ)(
                r.nv,
                { color: "ds.text.neutral.quiet", sx: { marginBottom: "16px" } },
                u("webapp_two_factor_authentication_use_backup_codes")
              ),
              (0, r.tZ)(r.qo, {
                value: h,
                label: u("webapp_two_factor_authentication_backup_code_label"),
                onChange: (e) => {
                  const {
                    target: { value: t }
                  } = e;
                  m("twoFactorAuthenticationOtpValue", t);
                },
                error: !!t,
                ref: d,
                feedback: t ? { id: "login-feedback-text", text: u(null != (l = A[t]) ? l : A.UNKNOWN_ERROR) } : void 0,
                autoFocus: !0,
                "data-testid": "auth-backup-code-input"
              }),
              (0, r.tZ)(
                r.nv,
                { color: "ds.text.neutral.quiet", sx: { ...k, margin: "16px 0 8px 0" } },
                u("webapp_two_factor_authentication_cant_access_your_backup_codes"),
                (0, r.tZ)(
                  c.rUS,
                  { color: "ds.text.brand.standard", onClick: () => s({ twoFactorAuthenticationOtpType: "totp" }), target: "_self" },
                  u("webapp_two_factor_authentication_use_6_digits_code")
                )
              ),
              (0, r.tZ)(
                r.nv,
                { color: "ds.text.neutral.quiet", sx: { ...k, margin: "8px 0" } },
                u("webapp_two_factor_authentication_lost_your_backup_codes"),
                (0, r.tZ)(
                  c.rUS,
                  { color: "ds.text.brand.standard", href: E.IT, target: "_blank", rel: "noopener noreferrer" },
                  u("webapp_two_factor_authentication_reset_2fa")
                )
              ),
              (0, r.tZ)(
                r.zx,
                { type: "submit", isLoading: n, "data-testid": "submitBackupCode", fullsize: !0, size: "large", sx: { marginTop: "16px" } },
                u("webapp_auth_panel_login")
              )
            )
          );
        };
      var I = n(482598),
        D = n(133354),
        Z = n(460384),
        P = n(66941),
        L = n(948143),
        M = n(447725),
        U = n(545431),
        z = n(690656),
        F = n(806638),
        B = n(147088),
        W = n(526063);
      const V = ({
        onClose: e,
        masterPassword: t,
        isAccountRecoveryKeyAvailable: n,
        isAdminAssistedRecoveryAvailable: o,
        existingAdminAssistedRecoveryStatus: a
      }) =>
        n && !o
          ? (0, r.tZ)(F.a, { onClose: e })
          : (!n && o) || ("PENDING" === a?.processStatus && a.requestStatus === x.RequestStatus.APPROVED)
          ? (0, r.tZ)(B.H, { onClose: e, masterPassword: t, existingARStatus: a })
          : n && o
          ? (0, r.tZ)(W.z, { onClose: e })
          : null;
      var j = n(799852),
        q = n(565766),
        G = n(757755),
        K = n(64496),
        $ = n(148038),
        H = n(355053);
      const X = {
          EMPTY_MASTER_PASSWORD: "webapp_login_form_password_fieldset_security_code_error_empty_password",
          WRONG_PASSWORD: "webapp_login_form_password_fieldset_security_code_error_wrong_password",
          THROTTLED: "webapp_login_form_password_fieldset_error_throttled",
          USER_UNAUTHORIZED: "webapp_login_form_email_fieldset_error_user_unauthorized",
          UNKNOWN_ERROR: "webapp_login_form_password_fieldset_security_code_error_unkown",
          NETWORK_ERROR: "webapp_login_form_password_fieldset_network_error_offline"
        },
        Y = ({
          loginEmail: e,
          localAccounts: t,
          error: n,
          isAccountRecoveryAvailable: c,
          isLoading: u,
          sendMasterPassword: d,
          clearInputError: m,
          logoutHandler: g,
          serviceProviderRedirectUrl: h,
          isNitroProvider: w,
          location: f
        }) => {
          var b;
          const { translate: y } = (0, _.Z)(),
            S = (() => {
              const e = (0, j.k)(q.Y, "isAllowed");
              return {
                status: e.status,
                data:
                  e.status !== D.rq.Success ||
                  e.data.isAllowed ||
                  (!e.data.reasons.includes(G.Oq.RequiresSSO2MPMigration) && !e.data.reasons.includes(G.Oq.RequiresMP2SSOMigration))
                    ? void 0
                    : e.data.reasons
              };
            })(),
            x = (function () {
              const e = (0, $.qr)({ queryConfig: { query: P.C.getSSOMigrationInfo } }, []);
              return e.status === $.rq.Success && e.data.migration === K.vX.MP_TO_SSO_WITH_INFO;
            })(),
            T = (0, z.c)(),
            { loginUserWithEnclaveSSO: C } = (0, I.u)(Z.y),
            O = (0, o.useCallback)(async () => {
              await C({ userEmailAddress: e });
            }, [C, e]),
            [N, A] = (0, o.useState)({ processStatus: "UNSET" }),
            [k, R] = (0, o.useState)(!1),
            [F, B] = (0, o.useState)(!1),
            [W, Y] = (0, o.useState)(!1),
            [Q, J] = (0, o.useState)(!1),
            [ee, te] = (0, o.useState)(""),
            { trackPageView: ne } = (0, s.D)();
          (0, o.useEffect)(() => {
            ne({ pageView: i.PageView.LoginMasterPassword });
          }, []);
          const oe = o.useMemo(() => !!t && t.some((t) => !t.hasLoginOtp && t.login === e && "webauthn" !== t.rememberMeType), [e, t]);
          (0, o.useEffect)(() => {
            S.status === D.rq.Success &&
              void 0 !== S.data &&
              h &&
              S.data.includes(G.Oq.RequiresMP2SSOMigration) &&
              (x ? (te((0, H.$9)()), Y(!0)) : (te((0, M.C0)(h)), Y(!1)));
          }, [S, x, h]),
            (0, o.useEffect)(() => {
              const e = f.search.includes(E.Z6);
              J(e);
            }, [f, f.hash]);
          const {
            handleChange: ae,
            handleSubmit: re,
            values: { masterPassword: se, rememberMe: ie },
            setFieldValue: ce
          } = (0, a.TA)({
            initialValues: { masterPassword: "", rememberMe: !1 },
            onSubmit: async ({ masterPassword: e, rememberMe: t }) => {
              if (c) {
                const n = await P.C.checkRecoveryRequestStatus({ masterPassword: e });
                n.success
                  ? (A({ processStatus: "PENDING", requestStatus: n.response.status }), R(!0))
                  : d({ masterPassword: e, rememberMe: t });
              } else d({ masterPassword: e, rememberMe: t });
            }
          });
          return (0, r.tZ)(
            p.n5,
            null,
            (0, r.tZ)(p.h4, { text: y("webapp_login_form_heading_log_in") }),
            (0, r.tZ)(p.A3, { selectedEmail: e }),
            (0, r.tZ)(
              "form",
              { onSubmit: re },
              (0, r.tZ)(r.ZI, {
                name: "masterPassword",
                id: "master-password-input-id",
                value: se,
                onChange: (e) => {
                  const {
                    target: { value: t }
                  } = e;
                  m(), ce("masterPassword", t);
                },
                placeholder: y("webapp_login_form_password_fieldset_password_placeholder"),
                disabled: u,
                label: y("webapp_login_form_password_fieldset_password_label"),
                feedback: n ? { id: "login-feedback-text", text: y(null != (b = X[n]) ? b : X.UNKNOWN_ERROR) } : void 0,
                error: !!n,
                toggleVisibilityLabel: { show: y("_common_password_show_label"), hide: y("_common_password_hide_label") },
                autoFocus: !0
              }),
              oe
                ? (0, r.tZ)(r.XZ, {
                    name: "rememberMe",
                    checked: ie,
                    onChange: ae,
                    label: (0, r.tZ)(
                      r.nv,
                      { color: "ds.text.neutral.quiet", textStyle: "ds.title.block.small" },
                      y("webapp_login_form_password_fieldset_remember_me")
                    ),
                    sx: { marginTop: "12px", marginBottom: "12px" }
                  })
                : null,
              ie
                ? (0, r.tZ)(
                    r.nv,
                    { color: "ds.text.neutral.quiet", textStyle: "ds.title.block.small" },
                    y("webapp_login_form_password_fieldset_remember_me_warning_text")
                  )
                : null,
              (0, r.tZ)(
                r.zx,
                {
                  type: "submit",
                  "data-testid": "login-button",
                  isLoading: u,
                  fullsize: !0,
                  size: "large",
                  sx: { marginTop: "40px", padding: "14px 16px" }
                },
                y("webapp_auth_panel_login")
              ),
              (0, r.tZ)(
                r.zx,
                {
                  intensity: "quiet",
                  mood: "neutral",
                  fullsize: !0,
                  size: "large",
                  onClick: () => {
                    var e;
                    (e = c),
                      (0, v.Kz)(new i.UserForgetMasterPasswordEvent({ hasBiometricReset: !1, hasTeamAccountRecovery: e })),
                      T || c ? R(!0) : window.open(l.yE, "_blank");
                  },
                  sx: { marginTop: "8px", padding: "14px 16px" }
                },
                y("webapp_login_form_password_fieldset_password_forgot")
              )
            ),
            S.status === D.rq.Success && S.data && S.data.includes(G.Oq.RequiresMP2SSOMigration) && !F
              ? (0, r.tZ)(L.j, {
                  activateLink: ee,
                  onClose: () => {
                    B(!0);
                  },
                  localSsoRedirect: W,
                  isNitroSSO: w,
                  nitroLoginCommand: O
                })
              : null,
            (0, r.tZ)(U.v, {
              isOpen: F,
              onLogout: () => {
                g(), B(!1);
              },
              onDismiss: () => {
                B(!1);
              },
              showCloseIcon: !1
            }),
            k || Q
              ? (0, r.tZ)(V, {
                  onClose: () => {
                    R(!1), J(!1), A({ processStatus: "UNSET" });
                  },
                  masterPassword: se,
                  isAccountRecoveryKeyAvailable: T,
                  isAdminAssistedRecoveryAvailable: c,
                  existingAdminAssistedRecoveryStatus: N
                })
              : null
          );
        };
      var Q = n(656810);
      const J = {
          generic: "_common_generic_error",
          [x.AuthenticationCode[x.AuthenticationCode.DASHLANE_AUTHENTICATOR_PUSH_NOTIFICATION_DENIED]]:
            "webapp_dashlane_authenticator_authentication_error_denied",
          [x.AuthenticationCode[x.AuthenticationCode.TOKEN_EXPIRED]]: "webapp_dashlane_authenticator_authentication_error_timeout"
        },
        ee = ({ error: e, resendPushNotification: t, switchToEmailToken: n }) => {
          var a;
          const { translate: l } = (0, _.Z)(),
            [u, d] = (0, o.useState)(!0),
            { trackPageView: m } = (0, s.D)();
          var g;
          return (
            (g = () => {
              d(!1);
            }),
            (0, $.lU)((e) => {
              e === $.ae.KILLED && g();
            }, []),
            (0, o.useEffect)(() => {
              m({ pageView: i.PageView.LoginTokenAuthenticator });
            }, []),
            (0, r.tZ)(
              p.n5,
              null,
              (0, r.tZ)(r.X6, { color: "ds.text.neutral.catchy", as: "h2" }, l("webapp_dashlane_authenticator_authentication_title")),
              !e && u
                ? (0, r.tZ)(c.HoD, {
                    "data-testid": "dashlane-authenticator-loading-icon",
                    size: "88px",
                    color: "ds.container.expressive.brand.catchy.active",
                    sx: { margin: "16px 0px" }
                  })
                : (0, r.tZ)(
                    o.Fragment,
                    null,
                    (0, r.tZ)(
                      c.Ejs,
                      { flexDirection: "column", sx: { marginTop: "16px" } },
                      (0, r.tZ)(b.Z, {
                        height: 88,
                        width: 88,
                        animationParams: { renderer: "svg", animationData: Q, loop: !1, autoplay: !0 }
                      }),
                      (0, r.tZ)(
                        r.nv,
                        {
                          textStyle: "ds.body.standard.regular",
                          color: "ds.text.danger.quiet",
                          sx: { marginTop: "24px", marginBottom: "8px" }
                        },
                        l(e && null != (a = J[e]) ? a : J.generic)
                      )
                    ),
                    (0, r.tZ)(
                      r.zx,
                      {
                        onClick: () => {
                          d(!0), t();
                        },
                        size: "large",
                        fullsize: !0,
                        sx: { marginBottom: "8px" }
                      },
                      l("webapp_dashlane_authenticator_authentication_send_another_push_button")
                    )
                  ),
              (0, r.tZ)(
                c.Ejs,
                { flexDirection: "row" },
                (0, r.tZ)(
                  r.nv,
                  { color: "ds.text.neutral.quiet", sx: { paddingRight: "4px" } },
                  l("webapp_dashlane_authenticator_authentication_cant_access_your_app")
                ),
                (0, r.tZ)(
                  c.rUS,
                  {
                    target: "_blank",
                    rel: "noopener noreferrer",
                    onClick: () => {
                      n();
                    },
                    color: "ds.text.brand.standard"
                  },
                  l("webapp_dashlane_authenticator_authentication_send_code_by_email_link")
                )
              )
            )
          );
        };
      var te = n(391238),
        ne = n(345728);
      const oe = ({
        loginEmail: e,
        error: t,
        retryWebAuthnAuthentication: n,
        switchToMasterPassword: a,
        webAuthnAuthenticationFail: l
      }) => {
        const { translate: u } = (0, _.Z)(),
          { trackPageView: d } = (0, s.D)();
        (0, o.useEffect)(() => {
          d({ pageView: i.PageView.LoginWebauthn });
        }, []);
        const m = (0, o.useRef)(new AbortController()),
          g = async () => {
            if (e) {
              const t = await (async (e, t) => {
                try {
                  const n = (0, te.Me)();
                  if (!n)
                    return {
                      success: !1,
                      error: new Error("WebAuthn Authentication init Open Session cannot be started as extension Id is missing")
                    };
                  const o = await P.C.initOpenSessionWithWebAuthnAuthenticator({ relyingPartyId: n, login: e });
                  if (!o.success) return { success: !1, error: o.error.code };
                  const { publicKeyOptions: a } = o.response,
                    r = await (0, ne.pM)(a, t),
                    s = o.response.authenticatorsInfo.find((e) => e.credentialId === r.id),
                    i = await P.C.openSessionWithWebAuthnAuthenticator({ credential: r, login: e, isRoamingAuthenticator: s?.isRoaming });
                  return i.success ? i : { success: !1, error: i.error.code };
                } catch (e) {
                  return { success: !1, error: e };
                }
              })(e, m.current.signal);
              !t.success && m.current.signal.aborted ? (m.current = new AbortController()) : t.success || l({ webAuthnError: t.error });
            }
          };
        return (
          (0, o.useEffect)(() => {
            g();
          }, []),
          (0, r.tZ)(
            p.n5,
            null,
            (0, r.tZ)(p.h4, { text: u("webapp_login_form_heading_log_in") }),
            (0, r.tZ)(p.A3, { selectedEmail: e }),
            (0, r.tZ)(
              c.Ejs,
              { flexDirection: "column", alignItems: "center", justifyContent: "center" },
              (0, r.tZ)(
                c.k$b,
                { sx: { margin: "18px 0px" }, alignSelf: "center" },
                (0, r.tZ)(r.JO, {
                  sx: { size: "60px" },
                  name: "FingerprintOutlined",
                  color: "ds.text.neutral.standard",
                  "aria-hidden": "true"
                })
              )
            ),
            t
              ? (0, r.tZ)(
                  c.Ejs,
                  null,
                  (0, r.tZ)(r.X6, { textStyle: "ds.title.block.medium", as: "h3" }, u("webapp_login_form_webauthn_error_title")),
                  (0, r.tZ)(
                    r.nv,
                    { id: "disableDialogBody", color: "ds.text.neutral.quiet", sx: { marginTop: "16px" } },
                    u("webapp_login_form_webauthn_error_title_description")
                  )
                )
              : null,
            (0, r.tZ)(
              c.Ejs,
              null,
              (0, r.tZ)(
                r.zx,
                {
                  onClick: () => {
                    m.current && m.current.abort(),
                      (0, v.Kz)(new i.UserAskUseOtherAuthenticationEvent({ next: i.Mode.MasterPassword, previous: i.Mode.Biometric })),
                      a();
                  },
                  fullsize: !0,
                  size: "large"
                },
                u("webapp_login_form_webauthn_button_use_master_password")
              ),
              t
                ? (0, r.tZ)(
                    r.zx,
                    {
                      onClick: () => {
                        n(), g();
                      },
                      intensity: "quiet",
                      size: "large",
                      fullsize: !0,
                      sx: { marginTop: "8px" }
                    },
                    u("webapp_login_form_webauthn_error_title_button_retry")
                  )
                : null
            )
          )
        );
      };
      var ae = n(840376),
        re = n(7633),
        se = n(753653);
      const ie = {
          EMAIL_PLACEHOLDER: "webapp_login_form_email_fieldset_email_placeholder",
          HEADING: "webapp_login_form_heading_log_in",
          NEXT: "webapp_login_form_email_fieldset_email_confirm",
          SELECTOR_LABEL: "webapp_login_form_email_fieldset_email_description",
          USE_ANOTHER_ACCOUNT: "webapp_login_form_email_fieldset_select_option_other_account",
          CLOSE: "_common_dialog_dismiss_button",
          ...re.v1
        },
        ce = ({
          serviceProviderRedirectUrl: e,
          isNitroProvider: t,
          loginEmail: n,
          sendUsageLog: a,
          changeLogin: c,
          setUseClientBypass: l
        }) => {
          const [u, d] = (0, o.useState)(!1),
            { translate: m } = (0, _.Z)(),
            { trackPageView: g } = (0, s.D)();
          (0, o.useEffect)(() => {
            a && g({ pageView: i.PageView.LoginSso });
          }, []);
          const { loginUserWithEnclaveSSO: h } = (0, I.u)(Z.y),
            w = (0, o.useCallback)(async () => {
              await h({ userEmailAddress: null != n ? n : "" });
            }, [h, n]);
          return (
            (0, o.useEffect)(() => {
              if (e) {
                const o = (0, M.C0)(e);
                t ? w() : (c?.({ login: "" }), l({ type: se.O.WAITING_IDP_REDIRECTION, login: n }), (0, M.nL)(o));
              }
            }, [t, e, w, l, n, c]),
            (0, r.tZ)(
              o.Fragment,
              null,
              (0, r.tZ)(
                r.Vq,
                {
                  title: "",
                  isOpen: u,
                  actions: {
                    primary: {
                      children: re.v1.DIALOG_CTA,
                      onClick: (e) => {
                        e.preventDefault(), (0, M.nL)(ae.JW);
                      }
                    }
                  },
                  onClose: () => d(!1),
                  closeActionLabel: m(ie.CLOSE)
                },
                (0, r.tZ)(
                  "div",
                  { sx: { marginBottom: "25px" } },
                  (0, r.tZ)(r.JO, {
                    sx: { size: "60px" },
                    name: "FeedbackFailOutlined",
                    color: "ds.container.expressive.danger.catchy.idle",
                    "aria-hidden": "true"
                  })
                ),
                (0, r.tZ)(r.X6, { title: re.v1.DIALOG_TITLE, as: "h1" }),
                (0, r.tZ)(r.nv, { sx: { marginBottom: "24px" } }, re.v1.DIALOG_BODY)
              ),
              (0, r.tZ)(
                p.n5,
                null,
                (0, r.tZ)(p.h4, { text: m(ie.HEADING) }),
                (0, r.tZ)(
                  "div",
                  { sx: { gap: "25px", display: "flex", flexDirection: "column" } },
                  (0, r.tZ)(r.s8, { name: "email", id: "extng-account-email-input", value: n, type: "email", label: "" }),
                  (0, r.tZ)(
                    r.zx,
                    {
                      type: "submit",
                      id: "extng-account-email-next-button",
                      "aria-label": m(ie.NEXT),
                      "data-testid": "login-button",
                      fullsize: !0,
                      size: "large",
                      disabled: !0,
                      isLoading: !0
                    },
                    m(ie.NEXT)
                  )
                )
              )
            )
          );
        };
      var le = n(929986),
        _e = n(355612),
        ue = n(51662),
        pe = n(421548),
        de = n(955370),
        me = n(176034);
      const ge = (e) => {
        const t = (0, u.Xo)(),
          { translate: n } = (0, _.Z)(),
          { loginViaSSO: a } = (0, I.u)(le.V),
          r = (0, j.k)(le.V, "getSsoUserSettings"),
          { login: s, ssoToken: i, key: c, currentAuths: p, expectedAuths: d, inStore: m } = (0, H.Ae)(e);
        p !== d && console.error("[Auth] - SSO Migration is not yet supported with MV3 login");
        const g = (0, me.f)(),
          h = e.lee.carbon.localAccounts?.find((e) => e.login === s && "sso" === e.rememberMeType),
          w = g.status === D.rq.Success && !g.data && !h && r.status === D.rq.Success && r.data.rememberMeForSSOPreference;
        return (
          h && t.store.dispatch((0, _e.zi)(l.sL)),
          o.useEffect(() => {
            r.status !== D.rq.Loading &&
              g.status !== D.rq.Loading &&
              a({
                deviceName: (0, de.M)(n("webapp_login_form_regsiter_fallback_browser_name")),
                exist: !0,
                ssoServiceProviderKey: c,
                login: (0, ue.vV)(s) ? s : "",
                ssoToken: i,
                currentAuths: p,
                expectedAuths: d,
                inStore: m,
                requiredPermissions: (0, H.ox)(),
                shouldRememberMeForSSO: w
              });
          }, [r.status, g.status]),
          o.createElement(
            "div",
            {
              style: {
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center"
              }
            },
            o.createElement(b.Z, {
              height: 150,
              width: 150,
              animationParams: { renderer: "svg", animationData: pe, loop: !0, autoplay: !0 }
            })
          )
        );
      };
      var he = n(23600);
      const we = () => {
        const e = (0, u.k6)(),
          { translate: t } = (0, _.Z)(),
          [n, a] = (0, o.useState)(5);
        return (
          (0, o.useEffect)(() => {
            let e;
            return (
              n > 0 ? (e = setInterval(() => a(n - 1), 1e3)) : window.close(),
              () => {
                clearInterval(e);
              }
            );
          }, [n]),
          (0, r.tZ)(
            he.L,
            { backgroundColor: "ds.background.default" },
            (0, r.tZ)(
              c.Ejs,
              {
                sx: {
                  flexDirection: "column",
                  margin: "0 auto",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  height: "calc(100vh - 50px)",
                  width: "550px"
                }
              },
              (0, r.tZ)(
                c.Ejs,
                { sx: { flexDirection: "column", margin: "0 auto", textAlign: "center", alignItems: "center" } },
                (0, r.tZ)(r.JO, {
                  name: "FeedbackSuccessOutlined",
                  color: "ds.text.brand.quiet",
                  sx: { marginBottom: "48px", width: "62px", height: "62px" }
                }),
                (0, r.tZ)(
                  r.X6,
                  { as: "h1", textStyle: "ds.title.section.large", sx: { marginBottom: "16px" } },
                  t("login_auto_sso_success_title")
                ),
                (0, r.tZ)(
                  r.nv,
                  { as: "label", textStyle: "ds.body.standard.regular", sx: { marginBottom: "48px" } },
                  t("login_auto_sso_success_description", { count: n })
                ),
                (0, r.tZ)(
                  r.zx,
                  {
                    onClick: () => {
                      e.push(l.Kn);
                    }
                  },
                  t("login_auto_sso_success_cta")
                )
              )
            )
          )
        );
      };
      var Ee,
        fe,
        be,
        ve = n(15192);
      const ye = {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bg: "ds.container.expressive.brand.quiet.idle",
          minWidth: "30px",
          height: "30px",
          borderRadius: "3000px",
          padding: "3px",
          marginRight: "12px"
        },
        Se = "_common_dialog_dismiss_button",
        xe = ({ loginEmail: e }) => {
          const { translate: t } = (0, _.Z)(),
            [n, a] = (0, o.useState)(!1),
            [s, i] = (0, o.useState)(!1);
          return (0, r.tZ)(
            p.n5,
            null,
            (0, r.tZ)(p.h4, { text: t("webapp_device_to_device_authentication_instructions_title") }),
            (0, r.tZ)(p.A3, { selectedEmail: e }),
            (0, r.tZ)(
              c.Ejs,
              { alignItems: "center", flexWrap: "nowrap" },
              Ee ||
                (Ee = (0, r.tZ)(
                  "div",
                  { sx: ye },
                  (0, r.tZ)(r.nv, { color: "ds.text.brand.standard", textStyle: "ds.body.standard.strong" }, "1")
                )),
              (0, r.tZ)(r.nv, null, t("webapp_device_to_device_authentication_instructions_first_paragraph"))
            ),
            (0, r.tZ)(
              c.Ejs,
              { alignItems: "center", flexWrap: "nowrap" },
              fe ||
                (fe = (0, r.tZ)(
                  "div",
                  { sx: ye },
                  (0, r.tZ)(r.nv, { color: "ds.text.brand.standard", textStyle: "ds.body.standard.strong" }, "2")
                )),
              (0, r.tZ)(r.nv, null, t.markup("webapp_device_to_device_authentication_instructions_second_paragraph_markup"))
            ),
            (0, r.tZ)(
              c.Ejs,
              { alignItems: "center", flexWrap: "nowrap" },
              be ||
                (be = (0, r.tZ)(
                  "div",
                  { sx: ye },
                  (0, r.tZ)(r.nv, { color: "ds.text.brand.standard", textStyle: "ds.body.standard.strong" }, "3")
                )),
              (0, r.tZ)(r.nv, null, t("webapp_device_to_device_authentication_instructions_third_paragraph"))
            ),
            (0, r.tZ)(
              r.zx,
              {
                mood: "neutral",
                intensity: "quiet",
                sx: { marginTop: "8px", width: "100%" },
                onClick: () => {
                  a(!0);
                }
              },
              t("webapp_device_to_device_authentication_instructions_button")
            ),
            (0, r.tZ)(
              r.Vq,
              {
                title: t("webapp_device_to_device_account_recovery_dialog_title"),
                isOpen: n,
                closeActionLabel: Se,
                onClose: () => a(!1),
                actions: {
                  primary: { children: t("webapp_device_to_device_account_recovery_dialog_start_recovery_button"), onClick: () => {} },
                  secondary: {
                    children: t("webapp_device_to_device_account_recovery_dialog_lost_your_key_button"),
                    onClick: () => {
                      a(!1), i(!0);
                    }
                  }
                }
              },
              (0, r.tZ)(r.nv, null, t("webapp_device_to_device_account_recovery_dialog_description"))
            ),
            (0, r.tZ)(
              r.Vq,
              {
                title: t("webapp_device_to_device_lost_your_key_dialog_title"),
                isOpen: s,
                closeActionLabel: Se,
                onClose: () => i(!1),
                actions: {
                  primary: { children: t("webapp_device_to_device_lost_your_key_dialog_reset_account_button"), onClick: () => {} },
                  secondary: { children: t("webapp_device_to_device_lost_your_key_dialog_learn_more_button"), onClick: () => {} }
                }
              },
              (0, r.tZ)(r.nv, null, t("webapp_device_to_device_lost_your_key_dialog_description"))
            )
          );
        },
        Te = ({ loginEmail: e, passphrase: t }) => {
          const { translate: n } = (0, _.Z)(),
            a = (0, u.Xo)();
          return (
            (0, o.useEffect)(() => {
              a.store.dispatch((0, _e.zi)(l.Ml));
            }, []),
            (0, r.tZ)(
              p.n5,
              null,
              (0, r.tZ)(p.h4, { text: n("webapp_device_to_device_authentication_passphrase_challenge_title") }),
              (0, r.tZ)(p.A3, { selectedEmail: e }),
              (0, r.tZ)(r.nv, null, n("webapp_device_to_device_authentication_passphrase_challenge_info")),
              (0, r.tZ)(
                c.Ejs,
                {
                  sx: {
                    flexDirection: "column",
                    gap: "20px",
                    bg: "ds.container.agnostic.neutral.quiet",
                    borderRadius: "8px",
                    padding: "24px 16px",
                    marginTop: "-16px"
                  }
                },
                t?.map((e) =>
                  (0, r.tZ)(
                    r.nv,
                    { key: e, textStyle: "ds.body.standard.monospace", style: { paddingLeft: "12px" }, "data-testid": "passphrase-word" },
                    e
                  )
                )
              )
            )
          );
        },
        Ce = {
          LOGIN_HEADER: "webapp_login_form_heading_log_in",
          GO_TO_LOGIN: "webapp_login_form_device_to_device_authentication_go_to_login_cta",
          CONTACT_SUPPORT: "webapp_login_form_device_to_device_authentication_contact_support_cta",
          GENERIC_ERROR: "_common_generic_error",
          TIMEOUT: "webapp_login_form_device_to_device_authentication_timeout_error",
          REQUEST_REJECTED: "webapp_login_form_device_to_device_authentication_rejected_error",
          ACCOUNT_ERROR: "webapp_login_form_device_to_device_authentication_account_error",
          RATE_LIMIT: "webapp_login_form_device_to_device_authentication_rate_limit"
        },
        Oe = ({ error: e }) => {
          const { translate: t } = (0, _.Z)(),
            { changeLogin: n } = (0, I.u)(le.V);
          return (0, r.tZ)(
            p.n5,
            null,
            (0, r.tZ)(p.h4, { text: t(Ce.LOGIN_HEADER) }),
            (0, r.tZ)(
              c.Ejs,
              { flexDirection: "column", alignItems: "center" },
              (0, r.tZ)(r.JO, { name: "FeedbackFailOutlined", color: "ds.text.danger.quiet", sx: { width: "77px", height: "77px" } }),
              (0, r.tZ)(
                r.nv,
                { sx: { textAlign: "center", margin: "32px 0", color: "ds.text.danger.standard" } },
                t(Ce[null != e ? e : "GENERIC_ERROR"])
              ),
              (0, r.tZ)(r.zx, { fullsize: !0, onClick: () => n({}) }, t(Ce.GO_TO_LOGIN)),
              (({ error: e }) => e && K.ao(e) && [K.UY.ACCOUNT_ERROR, K.UY.RATE_LIMIT].includes(e))({ error: e })
                ? (0, r.tZ)(
                    r.zx,
                    {
                      fullsize: !0,
                      mood: "neutral",
                      intensity: "quiet",
                      sx: { marginTop: "8px" },
                      onClick: () => (0, M.Yo)("https://support.dashlane.com/hc/requests/new")
                    },
                    t(Ce.CONTACT_SUPPORT)
                  )
                : null
            )
          );
        };
      var Ne;
      const Ae = ({ loginEmail: e, passphrase: t, deviceToDeviceStep: n, error: o }) => {
        var a, s, i;
        return (() => {
          switch (n) {
            case K.E6.DisplayInstructions:
              return a || (a = (0, r.tZ)(xe, { loginEmail: e }));
            case K.E6.DisplayPassphrase:
              return s || (s = (0, r.tZ)(Te, { loginEmail: e, passphrase: t }));
            case K.E6.DeviceRegistered:
              return Ne || (Ne = (0, r.tZ)(ve.l_, { to: l.Ml }));
            case K.E6.Error:
              return i || (i = (0, r.tZ)(Oe, { error: o }));
            default:
              return null;
          }
        })();
      };
    },
    753653: (e, t, n) => {
      "use strict";
      n.d(t, { O: () => o });
      let o = (function (e) {
        return (e.NONE = "NONE"), (e.ASK_MP = "ASK_MP"), (e.WAITING_IDP_REDIRECTION = "WAITING_IDP_REDIRECTION"), e;
      })({});
    },
    7633: (e, t, n) => {
      "use strict";
      n.d(t, { ko: () => i, v1: () => s });
      var o = n(696832),
        a = n(441217),
        r = n(201389);
      const s = {
          DIALOG_TITLE: "Extension required to log in",
          DIALOG_BODY: "Because you’re using SSO with Dashlane, you need to log in to your account with the extension.",
          DIALOG_CTA: "Add extension"
        },
        i = ({ isOpen: e, handleButtonClick: t, handleClose: n }) => {
          const { translate: i } = (0, r.Z)();
          return o.createElement(
            a.VqE,
            { closeIconName: i("_common_dialog_dismiss_button"), isOpen: e, onClose: n },
            o.createElement(
              "div",
              { style: { marginBottom: "25px" } },
              o.createElement(a.enX, { size: 62, color: a.colors.functionalRed02 })
            ),
            o.createElement(a.$N8, { title: s.DIALOG_TITLE }),
            o.createElement(a.a7O, null, o.createElement(a.nvN, null, s.DIALOG_BODY)),
            o.createElement(a.cNS, { primaryButtonTitle: s.DIALOG_CTA, primaryButtonOnClick: t })
          );
        };
    },
    891424: (e, t, n) => {
      "use strict";
      n.d(t, { w: () => s });
      var o = n(696832),
        a = n(201389),
        r = n(23600);
      const s = () => {
        const { translate: e } = (0, a.Z)();
        return o.createElement(
          r.L,
          null,
          o.createElement(
            "div",
            { className: "marketingContent--qlldYG150Q" },
            o.createElement(
              "div",
              { className: "marketingInner--cLA6qnkW9L" },
              o.createElement("h2", { className: "heading--L55NA6pQ8m" }, e("webapp_sso_to_mp_marketing_heading")),
              o.createElement("h3", { className: "subheading--qf9W636FxS" }, e("webapp_sso_to_mp_marketing_subheading"))
            )
          )
        );
      };
    },
    441309: (e, t, n) => {
      "use strict";
      n.d(t, { R: () => b });
      var o = n(696832),
        a = n(635164),
        r = n(695495),
        s = n(441217),
        i = n(60043),
        c = n(472476),
        l = n(201389),
        _ = n(66941),
        u = n(764488),
        p = n(448081),
        d = n(370947),
        m = n(503871);
      var g,
        h,
        w,
        E = (function (e) {
          return (e.PASSWORDS_DONT_MATCH_ERROR = "passwords_dont_match"), (e.WEAK_PASSWORD_ERROR = "weak_password"), e;
        })(E || {});
      const f = {
          BACK_TO_LOGIN_LABEL: "webapp_account_recovery_back_to_login",
          CONFIRM_PASSWORD_FLOATING_LABEL: "webapp_sso_to_mp_confirm_password_floating_label",
          CONFIRM_PASSWORD_HIDE_LABEL: "webapp_sso_to_mp_confirm_password_hide_label",
          CONFIRM_PASSWORD_HINT_TEXT: "webapp_sso_to_mp_confirm_password_hint_text",
          CONFIRM_PASSWORD_SHOW_LABEL: "webapp_sso_to_mp_confirm_password_show_label",
          CREATE_PASSWORD_BUTTON: "webapp_sso_to_mp_create_password_button",
          CREATE_PASSWORD_FLOATING_LABEL: "webapp_sso_to_mp_create_password_floating_label",
          CREATE_PASSWORD_HEADER: "webapp_sso_to_mp_confirm_create_your_password",
          CREATE_PASSWORD_HIDE_LABEL: "webapp_sso_to_mp_password_hide_label",
          CREATE_PASSWORD_HINT_TEXT: "webapp_sso_to_mp_password_hint_text",
          CREATE_PASSWORD_SHOW_LABEL: "webapp_sso_to_mp_password_show_label",
          ERROR_WEAK_PASSWORD: "webapp_sso_to_mp_error_weak_password",
          ERROR_PASSWORDS_DONT_MATCH: "webapp_sso_to_mp_error_passwords_dont_match",
          NEED_HELP: "webapp_sso_to_mp_need_help",
          PREVIOUS_STEP: "webapp_account_recovery_previous_step"
        },
        b = ({ dispatchGlobal: e, onSubmit: t, createMPForAccountRecovery: n, showCreateMasterPasswordError: b }) => {
          const { translate: v } = (0, l.Z)(),
            { routes: y } = (0, i.Xo)(),
            [S, x] = o.useState(!1),
            [T, C] = o.useState(""),
            [O, N] = o.useState(null),
            [A, k] = o.useState(!0),
            [R, I] = o.useState(""),
            [D, Z] = o.useState(null),
            {
              passwordStrength: P,
              resetPasswordStrength: L,
              setPasswordStrength: M,
              isPasswordStrengthScore: U,
              isPasswordStrongEnough: z
            } = (0, p.R)(),
            [F, B] = o.useState(!1),
            W = (e, t) => {
              if (e) return e === E.WEAK_PASSWORD_ERROR ? t(f.ERROR_WEAK_PASSWORD) : t(f.ERROR_PASSWORDS_DONT_MATCH);
            },
            V = () => !T || !R || !(R === T) || !z || F;
          return (0, r.tZ)(
            "div",
            { className: "createPasswordPanelContainer--MUmAusgsY8" },
            (0, r.tZ)(d.x, {
              showPasswordTipsDialog: S,
              handleDismiss: () => {
                x(!1);
              }
            }),
            (0, r.tZ)(
              "div",
              { className: "content--bb7jRK6yl9" },
              (0, r.tZ)(m.r, { dispatchGlobal: e }),
              (0, r.tZ)(
                "div",
                { className: "inner--wckgqnqGbN" },
                (0, r.tZ)(s.X6q, { sx: { marginBottom: "16px" } }, v(f.CREATE_PASSWORD_HEADER)),
                (0, r.tZ)(
                  s.Ejs,
                  { sx: { marginBottom: "40px" } },
                  g || (g = (0, r.tZ)(s.byK, null)),
                  (0, r.tZ)(
                    s.rUS,
                    {
                      sx: { marginLeft: "5px" },
                      onClick: () => {
                        x(!0);
                      }
                    },
                    (0, r.tZ)(s.nvN, { bold: !0, color: s.colors.midGreen00 }, v(f.NEED_HELP))
                  )
                ),
                (0, r.tZ)(
                  "form",
                  {
                    className: "form--HDYDWlLID3",
                    autoComplete: "off",
                    noValidate: !0,
                    onSubmit: async (e) => {
                      e.preventDefault(),
                        V() || (T === R ? (B(!0), n ? await t(T) : await t({ password: T }), B(!1)) : Z(E.PASSWORDS_DONT_MATCH_ERROR));
                    }
                  },
                  (0, r.tZ)(
                    "div",
                    { className: "createPasswordContainer--egmbogdCZ1" },
                    (0, r.tZ)(
                      c.T,
                      { id: "password-tooltip", passwordStrength: P, showTooltip: A },
                      (0, r.tZ)(s.WUg, {
                        showPasswordTooltipText: v(f.CREATE_PASSWORD_SHOW_LABEL),
                        hidePasswordTooltipText: v(f.CREATE_PASSWORD_HIDE_LABEL),
                        onBlur: () => {
                          const e = T && R && T !== R;
                          N(!T || z ? null : E.WEAK_PASSWORD_ERROR), k(!1), Z(e ? E.PASSWORDS_DONT_MATCH_ERROR : null);
                        },
                        onFocus: () => {
                          k(!0);
                        },
                        onChange: async (e) => {
                          const t = e.target.value;
                          C(t), O && N(null), D && Z(null), "" === t && L();
                          const n = await _.C.evaluatePassword({ password: t });
                          M(n);
                        },
                        placeholder: v(f.CREATE_PASSWORD_HINT_TEXT),
                        value: T,
                        label: v(f.CREATE_PASSWORD_FLOATING_LABEL),
                        feedbackType: O ? "error" : void 0,
                        feedbackText: O ? W(O, v) : ""
                      })
                    ),
                    P &&
                      U(P.score) &&
                      (0, r.tZ)(s.YVT, { score: P.score, showAdditionalText: !0, additionalText: v(`account_creation_${u.Yh[P.score]}`) })
                  ),
                  (0, r.tZ)(s.WUg, {
                    value: R,
                    showPasswordTooltipText: v(f.CONFIRM_PASSWORD_SHOW_LABEL),
                    hidePasswordTooltipText: v(f.CONFIRM_PASSWORD_HIDE_LABEL),
                    placeholder: v(f.CONFIRM_PASSWORD_HINT_TEXT),
                    onBlur: () => {
                      R && T !== R && Z(E.PASSWORDS_DONT_MATCH_ERROR);
                    },
                    onChange: (e) => {
                      I(e.target.value), Z(null);
                    },
                    label: v(f.CONFIRM_PASSWORD_FLOATING_LABEL),
                    feedbackType: D ? "error" : void 0,
                    feedbackText: D ? W(D, v) : ""
                  }),
                  (0, r.tZ)(
                    s.Ejs,
                    { className: "formAction--lsGvbpUphT" },
                    n
                      ? (0, r.tZ)(
                          a.rU,
                          { className: "previousStepContainer--guBERAFCZo", to: y.userDeviceRegistration, replace: !0 },
                          h || (h = (0, r.tZ)(s.xCe, { size: 14 })),
                          (0, r.tZ)(s.nvN, { sx: { paddingLeft: "10px" } }, v(f.PREVIOUS_STEP))
                        )
                      : null,
                    (0, r.tZ)(
                      s.zxk,
                      { type: "submit", size: "large", disabled: V(), className: "nextButton--TLnzBk_x48" },
                      F ? w || (w = (0, r.tZ)(s.HoD, null)) : v(f.CREATE_PASSWORD_BUTTON)
                    )
                  ),
                  b && f[b] ? (0, r.tZ)("div", { className: "errorText--UN7VI6QP62" }, f[b]) : null
                )
              )
            )
          );
        };
    },
    370947: (e, t, n) => {
      "use strict";
      n.d(t, { x: () => c });
      var o,
        a = n(696832),
        r = n(441217),
        s = n(201389),
        i = n(106826);
      const c = ({ showPasswordTipsDialog: e, handleDismiss: t }) => {
        const { translate: n } = (0, s.Z)();
        return a.createElement(
          r.VqE,
          { closeIconName: n("_common_dialog_dismiss_button"), isOpen: e, onClose: t },
          a.createElement(r.X6q, { size: "small" }, n("webapp_account_security_settings_passwordtips_panel_subtitle")),
          o || (o = a.createElement(r.a7O, null, a.createElement(i.t, null))),
          a.createElement(r.cNS, { primaryButtonTitle: n("webapp_password_tips_dialog_got_it"), primaryButtonOnClick: t })
        );
      };
    },
    955370: (e, t, n) => {
      "use strict";
      n.d(t, { M: () => r, i: () => s });
      var o = n(263272),
        a = n(528509);
      const r = (e) => `${o.getBrowserName() || e} - ${a.getOSName()}`,
        s = (e) => {
          let t;
          return (t = e instanceof Error ? e.message : String(e)), t;
        };
    },
    279684: (e, t, n) => {
      "use strict";
      n.d(t, { N: () => o.N });
      var o = n(447041);
    },
    683463: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => o });
      const o = { icon: "icon--zE_DwR7GSR" };
    },
    689273: (e, t, n) => {
      const { LANGUAGES: o } = n(376868);
      e.exports = { i18n: { locales: o, defaultLocale: "en", defaultCountry: "US" } };
    },
    812272: (e, t, n) => {
      var o = { "./INNER_LOOP_animation.json": 51102, "./INTRO_animation.json": 733695, "./OUTRO_animation.json": 856419 };
      function a(e) {
        return r(e).then((e) => n.t(e, 19));
      }
      function r(e) {
        return n.e(6461).then(() => {
          if (!n.o(o, e)) {
            var t = new Error("Cannot find module '" + e + "'");
            throw ((t.code = "MODULE_NOT_FOUND"), t);
          }
          return o[e];
        });
      }
      (a.keys = () => Object.keys(o)), (a.resolve = r), (a.id = 812272), (e.exports = a);
    },
    263272: (e, t, n) => {
      "use strict";
      n.r(t),
        n.d(t, {
          getBrowserCountry: () => l,
          getBrowserLanguage: () => c,
          getBrowserName: () => s,
          getBrowserVersion: () => i,
          isChrome: () => _,
          isChromiumEdge: () => g,
          isEdge: () => p,
          isFirefox: () => u,
          isInternetExplorer: () => h,
          isOpera: () => m,
          isSafari: () => d
        });
      var o,
        a = n(196471),
        r = n(264785);
      function s() {
        return (0, r.r)().browser.name ?? "";
      }
      function i() {
        return (0, r.r)().browser.version ?? "";
      }
      function c() {
        const e = (0, a.getNavigator)();
        return e?.language ?? "";
      }
      function l() {
        const e = (0, a.getNavigator)(),
          t = e?.language ?? "";
        let n = "";
        return t.length >= 5 && (n = t.substr(3, 2)), n;
      }
      function _() {
        return s() === o.CHROME;
      }
      function u() {
        return s() === o.FIREFOX;
      }
      function p() {
        return s() === o.EDGE;
      }
      function d() {
        return s() === o.SAFARI;
      }
      function m() {
        return s() === o.OPERA;
      }
      function g() {
        const e = i() ?? "";
        return p() && parseInt(e.split(".")[0], 10) >= 76;
      }
      function h() {
        const e = s();
        return "Internet Explorer" === e ?? "IE" === e;
      }
      !(function (e) {
        (e.CHROME = "Chrome"), (e.FIREFOX = "Firefox"), (e.EDGE = "Edge"), (e.SAFARI = "Safari"), (e.OPERA = "Opera");
      })(o || (o = {}));
    },
    110551: (e, t, n) => {
      "use strict";
      n.r(t),
        n.d(t, {
          getDefaultDeviceName: () => i,
          getDeviceType: () => c,
          isDeviceConsole: () => _,
          isDeviceEmbedded: () => m,
          isDeviceMobile: () => l,
          isDeviceSmartTV: () => p,
          isDeviceTablet: () => u,
          isDeviceWearable: () => d
        });
      var o,
        a = n(263272),
        r = n(528509),
        s = n(264785);
      function i() {
        return `${(0, a.getBrowserName)()} - ${(0, r.getOSName)()}`;
      }
      !(function (e) {
        (e.MOBILE = "mobile"),
          (e.CONSOLE = "console"),
          (e.TABLET = "tablet"),
          (e.SMARTTV = "smarttv"),
          (e.WEARABLE = "wearable"),
          (e.EMBEDDED = "embedded");
      })(o || (o = {}));
      const c = () => (0, s.r)().device.type,
        l = () => c() === o.MOBILE,
        _ = () => c() === o.CONSOLE,
        u = () => c() === o.TABLET,
        p = () => c() === o.SMARTTV,
        d = () => c() === o.WEARABLE,
        m = () => c() === o.EMBEDDED;
    },
    33493: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { isBrowserEnvironment: () => a, isNodeEnvironment: () => s, isWorkerEnvironment: () => r });
      var o = n(173656);
      function a() {
        return "object" == typeof window;
      }
      function r() {
        return "object" == typeof self && "function" == typeof importScripts;
      }
      function s() {
        return "object" == typeof o && !a() && !r();
      }
    },
    196471: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { getNavigator: () => a });
      var o = n(33493);
      function a() {
        return (0, o.isBrowserEnvironment)() ? window.navigator : (0, o.isWorkerEnvironment)() ? self.navigator : void 0;
      }
    },
    650038: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { getUserAgent: () => a });
      var o = n(196471);
      function a() {
        const e = (0, o.getNavigator)();
        return e?.userAgent;
      }
    },
    303810: (e, t, n) => {
      "use strict";
      function o() {
        return window.location !== window.parent.location;
      }
      n.r(t), n.d(t, { isInsideIframe: () => o });
    },
    926625: (e, t, n) => {
      "use strict";
      n.r(t),
        n.d(t, {
          browser: () => s,
          cookie: () => o,
          device: () => _,
          env: () => u,
          iframe: () => p,
          navigator: () => d,
          os: () => m,
          storage: () => a,
          url: () => r,
          userAgent: () => A
        });
      var o = {};
      n.r(o), n.d(o, { desktopAnonymousComputerId: () => c, websiteTrackingId: () => l });
      var a = {};
      n.r(a), n.d(a, { makeBrowserStorage: () => C });
      var r = {};
      n.r(r), n.d(r, { getAuthorityForUrl: () => N, getDomainForUrl: () => O });
      var s = n(263272),
        i = n(975077);
      function c() {
        return i.Q(document.cookie).anonid;
      }
      function l() {
        try {
          const e = i.Q(document.cookie);
          return JSON.parse(e.userFunnelCookie).trackingId;
        } catch (e) {
          return null;
        }
      }
      var _ = n(110551),
        u = n(33493),
        p = n(303810),
        d = n(196471),
        m = n(528509);
      const g = 1,
        h = "dashlane",
        w = "user-data";
      function E() {
        return new Promise((e, t) => {
          const n = (0, u.isBrowserEnvironment)() ? window.indexedDB : (0, u.isWorkerEnvironment)() ? self.indexedDB : null;
          if (!n) return t(new Error("indexedDB is not supported in this environment"));
          const o = n.open(h, g);
          (o.onerror = function () {
            t(o.error);
          }),
            (o.onupgradeneeded = () => {
              o.result.objectStoreNames.contains(w) || o.result.createObjectStore(w);
            }),
            (o.onsuccess = function () {
              (o.onsuccess = null), e(o.result);
            });
        });
      }
      async function f(e = "readwrite") {
        return (await E()).transaction([w], e).objectStore(w);
      }
      async function b(e) {
        const t = await f("readonly");
        return new Promise((n) => {
          const o = t.get(e);
          o.onsuccess = () => {
            (o.onsuccess = null), n(o.result);
          };
        });
      }
      const v = {
          isSupported: async function () {
            if (!(0, u.isBrowserEnvironment)() && !(0, u.isWorkerEnvironment)()) return !1;
            if (s.isInternetExplorer()) return !1;
            if ((0, u.isBrowserEnvironment)() && !window.indexedDB) return !1;
            if ((0, u.isWorkerEnvironment)() && !self.indexedDB) return !1;
            try {
              return await E(), !0;
            } catch (e) {
              return !1;
            }
          },
          readItem: b,
          writeItem: async function (e, t) {
            const n = await f("readwrite");
            return new Promise((o) => {
              const a = n.put(t, e);
              a.onsuccess = () => {
                (a.onsuccess = null), o();
              };
            });
          },
          removeItem: async function (e) {
            const t = await f("readwrite");
            return new Promise((n) => {
              const o = t.delete(e);
              o.onsuccess = () => {
                (o.onsuccess = null), n();
              };
            });
          },
          itemExists: async function (e) {
            return null != (await b(e));
          }
        },
        y = v,
        S = {
          isSupported: () => Promise.resolve(void 0 !== typeof window && !!window.localStorage),
          readItem: (e) => Promise.resolve(window.localStorage.getItem(e)),
          writeItem: (e, t) => Promise.resolve(window.localStorage.setItem(e, t)),
          removeItem: (e) => Promise.resolve(window.localStorage.removeItem(e)),
          itemExists: (e) => {
            const t = window.localStorage.getItem(e);
            return Promise.resolve(null != t);
          }
        },
        x = {},
        T = {
          isSupported: () => Promise.resolve(!0),
          readItem: (e) => {
            const t = e in x;
            return Promise.resolve(t ? x[e] : null);
          },
          writeItem: (e, t) => ((x[e] = t), Promise.resolve()),
          removeItem: (e) => (delete x[e], Promise.resolve()),
          itemExists: (e) => Promise.resolve(e in x)
        },
        C = async () => {
          try {
            if (await y.isSupported()) return y;
            if (await S.isSupported()) return S;
          } catch (e) {}
          return T;
        },
        O = (e) => {
          if (!e) return null;
          const t = e.trim(),
            n = ["http://", "https://", "ftp://", "ftps://", "file://", "afp://", "smb://"].filter((e) => t.startsWith(e))[0],
            o = n ? t.substr(n.length) : t,
            a = o.indexOf("/"),
            r = a > -1 ? o.slice(0, a) : o,
            s = r.split(""),
            i = s.filter((e) => "." === e),
            c = s.filter((e) => ":" === e),
            l = s.filter((e) => !Number.isNaN(Number(e)));
          if (3 === i.length && (l.length === r.length - 3 || (l.length === r.length - 4 && 1 === c.length))) return r;
          if (!i.length || 1 === i.length) return r;
          const _ = r.lastIndexOf("."),
            u = r.slice(0, _),
            p = r.substr(_),
            d = u.lastIndexOf("."),
            m = u.substr(d + 1),
            g = u.slice(0, d);
          if (
            !["co", "com", "fr", "ac", "gov", "org", "edu", "net"].includes(m) &&
            ![
              "judiciary.uk",
              "ltd.uk",
              "me.uk",
              "mod.uk",
              "nhs.uk",
              "nic.uk",
              "parliament.uk",
              "plc.uk",
              "sch.uk",
              "bl.uk",
              "jet.uk",
              "british-library.uk",
              "nls.uk",
              "qc.ca"
            ].includes(m + p)
          )
            return m + p;
          const h = g.lastIndexOf(".");
          return h > -1 ? g.substr(h + 1) + "." + m + p : r;
        },
        N = (e) => {
          const t = (e ?? "").trim();
          if (!t) return null;
          const n = ["afp://", "file://", "ftp://", "ftps://", "http://", "https://", "smb://"].find((e) => t.startsWith(e)),
            o = n ? t.substr(n.length) : t,
            a = o.indexOf("/");
          return a > -1 ? o.slice(0, a) : o;
        };
      var A = n(650038);
    },
    528509: (e, t, n) => {
      "use strict";
      n.r(t),
        n.d(t, {
          getOSName: () => r,
          getOSVersion: () => s,
          isAndroid: () => i,
          isIOS: () => c,
          isLinux: () => u,
          isMacOS: () => _,
          isWindows: () => l
        });
      var o,
        a = n(264785);
      function r() {
        return "Chromium OS" === (0, a.r)().os.name ? "Chrome OS" : (0, a.r)().os.name;
      }
      function s() {
        const { version: e = "" } = (0, a.r)().os;
        return "Mac OS" === r() ? `OS_X_${e.replace(/\./g, "_")}` : e;
      }
      !(function (e) {
        (e.ANDROID = "Android"), (e.IOS = "iOS"), (e.WINDOWS = "Windows"), (e.LINUX = "Linux"), (e.MACOS = "Mac OS");
      })(o || (o = {}));
      const i = () => r() === o.ANDROID,
        c = () => r() === o.IOS,
        l = () => r() === o.WINDOWS,
        _ = () => r() === o.MACOS,
        u = () => r() === o.LINUX;
    },
    264785: (e, t, n) => {
      "use strict";
      n.d(t, { r: () => s });
      var o = n(108473),
        a = n.n(o),
        r = n(650038);
      function s() {
        return new (a())((0, r.getUserAgent)(), {
          browser: [
            [/(AVG|Avast)\/([\w.]+)/i],
            [[a().BROWSER.NAME, "Avast"], a().BROWSER.VERSION],
            [/(edge|edgios|edga|edg)\/((\d+)?[\w.]+)/i],
            [[a().BROWSER.NAME, "Edge"], a().BROWSER.VERSION]
          ]
        }).getResult();
      }
    },
    516241: (e, t, n) => {
      "use strict";
      n.d(t, { B: () => a });
      var o = n(100839);
      function a(e, t) {
        return new Promise((n, a) => {
          (0, o.Ez)("action.setIcon") || (0, o.Ez)("browserAction.setIcon")
            ? (chrome.action?.setIcon ?? chrome.browserAction.setIcon)({ path: e, tabId: t }, () => {
                if (chrome.runtime.lastError) {
                  const e = chrome.runtime.lastError.message ?? "Unknown chrome.runtime.lastError",
                    t = new Error(`action/setIcon: ${e}`);
                  a(t);
                } else n();
              })
            : a(new Error("No action.setIcon support"));
        });
      }
    },
    531034: (e, t, n) => {
      "use strict";
      n.d(t, { U: () => a });
      var o = n(100839);
      const a = (e, t) => {
        if (!(0, o.qX)(["alarms"])) throw new Error("No alarms.create support, permission is missing");
        if (!(0, o.Ez)("alarms.create")) throw new Error("No alarms.create support");
        chrome.alarms.create(e, t);
      };
    },
    665496: (e, t, n) => {
      "use strict";
      n.d(t, { G: () => a });
      var o = n(100839);
      function a() {
        return (0, o.Ez)("alarms.clear") && (0, o.qX)(["alarms"]);
      }
    },
    418477: (e, t, n) => {
      "use strict";
      n.d(t, { i: () => a });
      var o = n(100839);
      const a = {
        addListener: (e) => {
          if (!(0, o.qX)(["alarms"])) throw new Error("No alarms.onAlarm.addListener support, permission is missing");
          if (!(0, o.Ez)("alarms.onAlarm.addListener")) throw new Error("No alarms.onAlarm.addListener support");
          chrome.alarms.onAlarm.addListener(e);
          const t = chrome.runtime.lastError?.message;
          if (t) throw new Error("alarms/onAlarm error:" + t);
        },
        removeListener: (e) => {
          if (!(0, o.qX)(["alarms"])) throw new Error("No alarms.onAlarm.removeListener support, permission is missing");
          if (!(0, o.Ez)("alarms.onAlarm.removeListener")) throw new Error("No alarms.onAlarm.removeListener support");
          chrome.alarms.onAlarm.removeListener(e);
          const t = chrome.runtime.lastError?.message;
          if (t) throw new Error("alarms/onAlarm error:" + t);
        }
      };
    },
    690123: (e, t, n) => {
      "use strict";
      n.d(t, { g: () => a });
      var o = n(100839);
      function a() {
        return new Promise((e, t) => {
          (0, o.Ez)("commands.getAll")
            ? chrome.commands.getAll((n) => {
                if (chrome.runtime.lastError) {
                  const e = chrome.runtime.lastError.message ?? "Unknown chrome.runtime.lastError",
                    n = new Error(`commands/getAll: ${e}`);
                  t(n);
                } else e(n);
              })
            : t(new Error("No commands.getAll support"));
        });
      }
    },
    329: (e, t, n) => {
      "use strict";
      n.d(t, { g: () => a });
      var o = n(100839);
      function a(e = {}) {
        return new Promise((t, n) => {
          (0, o.qX)(["cookies"])
            ? (0, o.Ez)("cookies.getAll")
              ? chrome.cookies.getAll(e, (e) => {
                  if (chrome.runtime.lastError) {
                    const e = chrome.runtime.lastError.message ?? "Unknown chrome.runtime.lastError",
                      t = new Error(`cookies/getAll: ${e}`);
                    n(t);
                  } else t(e);
                })
              : n(new Error("No cookies.getAll support"))
            : n(new Error("No cookies.getAll support, permission is missing"));
        });
      }
    },
    598641: (e, t, n) => {
      "use strict";
      n.d(t, { O: () => a });
      var o = n(100839);
      function a(e) {
        return new Promise((t, n) => {
          (0, o.qX)(["cookies"])
            ? (0, o.Ez)("cookies.remove")
              ? chrome.cookies.remove(e, (e) => {
                  if (chrome.runtime.lastError) {
                    const e = chrome.runtime.lastError.message ?? "Unknown chrome.runtime.lastError",
                      t = new Error(`cookies/remove: ${e}`);
                    n(t);
                  } else t(e);
                })
              : n(new Error("No cookies.remove support"))
            : n(new Error("No cookies.remove support, permission is missing"));
        });
      }
    },
    100839: (e, t, n) => {
      "use strict";
      n.d(t, { Ez: () => r, qX: () => a });
      var o = n(384318);
      function a(e) {
        const t = (0, o.W)().permissions ?? [];
        return e.every((e) => t.includes(e));
      }
      function r(e) {
        if ("undefined" == typeof chrome) return !1;
        const t = e.split(".").reduce((e, t) => e?.[t], chrome);
        return Boolean(t);
      }
    },
    782324: (e, t, n) => {
      "use strict";
      n.d(t, { I: () => a, b: () => r });
      var o = n(274972);
      function a(e) {
        return !("object" != typeof e || !e) && !!("reason" in e) && e.reason === o.$.RuntimeError;
      }
      function r(e) {
        return !("object" != typeof e || !e) && !!("reason" in e) && e.reason === o.$.SettingNotSupported;
      }
    },
    930754: (e, t, n) => {
      "use strict";
      n.d(t, { U: () => s });
      var o = n(100839),
        a = n(274972);
      const r = { reason: a.$.SettingNotSupported };
      function s(e) {
        return new Promise((t, n) => {
          (0, o.qX)(["privacy"]) && (0, o.Ez)(`privacy.services.${e}.get`)
            ? chrome.privacy.services[e].get({}, (e) => {
                if (chrome.runtime.lastError) {
                  const e = chrome.runtime.lastError.message ?? "Unknown chrome.runtime.lastError",
                    t = { reason: a.$.RuntimeError, runtimeError: new Error(e) };
                  n(t);
                } else t(e);
              })
            : n(r);
        });
      }
    },
    274972: (e, t, n) => {
      "use strict";
      var o;
      n.d(t, { $: () => o }),
        (function (e) {
          (e.RuntimeError = "runtimeError"), (e.SettingNotSupported = "settingNotSupported");
        })(o || (o = {}));
    },
    781805: (e, t, n) => {
      "use strict";
      n.d(t, { t: () => s });
      var o = n(100839),
        a = n(274972);
      const r = { reason: a.$.SettingNotSupported };
      function s(e, t) {
        return new Promise((n, s) => {
          (0, o.qX)(["privacy"]) && (0, o.Ez)(`privacy.services.${e}.set`)
            ? chrome.privacy.services[e].set({ value: t }, () => {
                if (chrome.runtime.lastError) {
                  const e = chrome.runtime.lastError.message ?? "Unknown chrome.runtime.lastError",
                    t = { reason: a.$.RuntimeError, runtimeError: new Error(e) };
                  s(t);
                } else n();
              })
            : s(r);
        });
      }
    },
    505441: (e, t, n) => {
      "use strict";
      n.d(t, { $: () => a });
      var o = n(100839);
      function a(e) {
        if (!(0, o.Ez)("runtime.connect")) throw new Error("No runtime.connect support");
        return chrome.runtime.connect(e);
      }
    },
    648593: (e, t, n) => {
      "use strict";
      function o() {
        return chrome.runtime.id;
      }
      n.d(t, { z: () => o });
    },
    384318: (e, t, n) => {
      "use strict";
      n.d(t, { W: () => a });
      var o = n(100839);
      function a() {
        if (!(0, o.Ez)("runtime.getManifest")) throw new Error("No runtime.getManifest support");
        return chrome.runtime.getManifest();
      }
    },
    92204: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => a });
      var o = n(100839);
      function a(e) {
        if (!(0, o.Ez)("runtime.getURL")) throw new Error("No runtime.getURL support");
        return chrome.runtime.getURL(e);
      }
    },
    20500: (e, t, n) => {
      "use strict";
      n.d(t, { b: () => a });
      var o = n(100839);
      const a = {
        addListener: function (e) {
          if (!(0, o.Ez)("runtime.onConnect.addListener")) throw new Error("No runtime.onConnect.addListener support");
          const t = (t) => {
            if (chrome.runtime.lastError) {
              const e = chrome.runtime.lastError.message ?? "Unknown chrome.runtime.lastError";
              throw new Error(`runtime/onConnect: ${e}`);
            }
            return e(t);
          };
          return chrome.runtime.onConnect.addListener(t), t;
        },
        removeListener: function (e) {
          if (!(0, o.Ez)("runtime.onConnect.removeListener")) throw new Error("No runtime.onConnect.removeListener support");
          chrome.runtime.onConnect.removeListener(e);
        }
      };
    },
    939680: (e, t, n) => {
      "use strict";
      n.d(t, { G: () => a, y: () => r });
      var o = n(100839);
      function a() {
        return !!chrome.storage?.local.getBytesInUse;
      }
      function r(e) {
        return new Promise((t, n) => {
          (0, o.qX)(["storage"])
            ? (0, o.Ez)("storage.local.getBytesInUse")
              ? chrome.storage.local.getBytesInUse(e, (e) => {
                  if (chrome.runtime.lastError) {
                    const e = chrome.runtime.lastError.message ?? "Unknown chrome.runtime.lastError",
                      t = new Error(`storage/local/getBytesInUse: ${e}`);
                    n(t);
                  } else t(e);
                })
              : n(new Error("No storage.local.getBytesInUse support"))
            : n(new Error("No storage.local.getBytesInUse support, permission is missing"));
        });
      }
    },
    641808: (e, t, n) => {
      "use strict";
      n.d(t, { U: () => a });
      var o = n(100839);
      function a(e) {
        return new Promise((t, n) => {
          (0, o.qX)(["storage"])
            ? (0, o.Ez)("storage.local.get")
              ? chrome.storage.local.get(e, (e) => {
                  if (chrome.runtime.lastError) {
                    const e = chrome.runtime.lastError.message ?? "Unknown chrome.runtime.lastError",
                      t = new Error(`storage/local/get: ${e}`);
                    n(t);
                  } else t(e);
                })
              : n(new Error("No storage.local.get support"))
            : n(new Error("No storage.local.get support, permission is missing"));
        });
      }
    },
    945441: (e, t, n) => {
      "use strict";
      n.d(t, { O: () => a });
      var o = n(100839);
      function a(e) {
        return new Promise((t, n) => {
          (0, o.qX)(["storage"])
            ? (0, o.Ez)("storage.local.remove")
              ? chrome.storage.local.remove(e, () => {
                  if (chrome.runtime.lastError) {
                    const e = chrome.runtime.lastError.message ?? "Unknown chrome.runtime.lastError",
                      t = new Error(`storage/local/remove: ${e}`);
                    n(t);
                  } else t();
                })
              : n(new Error("No storage.local.remove support"))
            : n(new Error("No storage.local.remove support, permission is missing"));
        });
      }
    },
    9244: (e, t, n) => {
      "use strict";
      n.d(t, { t: () => a });
      var o = n(100839);
      function a(e) {
        return new Promise((t, n) => {
          (0, o.qX)(["storage"])
            ? (0, o.Ez)("storage.local.set")
              ? chrome.storage.local.set(e, () => {
                  if (chrome.runtime.lastError) {
                    const e = chrome.runtime.lastError.message ?? "Unknown chrome.runtime.lastError",
                      t = new Error(`storage/local/set: ${e}`);
                    n(t);
                  } else t();
                })
              : n(new Error("No storage.local.set support"))
            : n(new Error("No storage.local.set support, permission is missing"));
        });
      }
    },
    15026: (e, t, n) => {
      "use strict";
      n.d(t, { U: () => a });
      var o = n(100839);
      function a(e) {
        return new Promise((t, n) => {
          (0, o.qX)(["storage"])
            ? (0, o.Ez)("storage.session.get")
              ? chrome.storage.session.get(e, (e) => {
                  if (chrome.runtime.lastError) {
                    const e = chrome.runtime.lastError.message ?? "Unknown chrome.runtime.lastError",
                      t = new Error(`storage/session/get: ${e}`);
                    n(t);
                  }
                  t(e);
                })
              : n(new Error("No storage.session.get support"))
            : n(new Error("No storage.session.get support, permission is missing"));
        });
      }
    },
    732012: (e, t, n) => {
      "use strict";
      n.d(t, { G: () => r });
      var o = n(100839),
        a = n(384318);
      function r() {
        return (0, o.Ez)("storage.session") && (0, o.qX)(["storage"]) && 3 === (0, a.W)().manifest_version;
      }
    },
    826603: (e, t, n) => {
      "use strict";
      n.d(t, { r: () => a });
      var o = n(100839);
      const a = {
        addListener: function (e) {
          if (!(0, o.qX)(["storage"])) throw new Error("No storage.session.onChanged.addListener support, permission is missing");
          if (!(0, o.Ez)("storage.session.onChanged.addListener")) throw new Error("No storage.session.onChanged.addListener support");
          const t = (t) => {
            if (chrome.runtime.lastError) {
              const e = chrome.runtime.lastError.message ?? "Unknown chrome.runtime.lastError";
              throw new Error(`storage/session/onChanged: ${e}`);
            }
            return e(t);
          };
          return chrome.storage.session.onChanged.addListener(t), t;
        },
        removeListener: function (e) {
          if (!(0, o.qX)(["storage"])) throw new Error("No storage.session.onChanged.removeListener support, permission is missing");
          if (!(0, o.Ez)("storage.session.onChanged.removeListener"))
            throw new Error("No storage.session.onChanged.removeListener support");
          chrome.storage.session.onChanged.removeListener(e);
        }
      };
    },
    252477: (e, t, n) => {
      "use strict";
      n.d(t, { O: () => a });
      var o = n(100839);
      function a(e) {
        return new Promise((t, n) => {
          (0, o.qX)(["storage"])
            ? (0, o.Ez)("storage.session.remove")
              ? chrome.storage.session.remove(e, () => {
                  if (chrome.runtime.lastError) {
                    const e = chrome.runtime.lastError.message ?? "Unknown chrome.runtime.lastError",
                      t = new Error(`storage/session/remove: ${e}`);
                    n(t);
                  }
                  t();
                })
              : n(new Error("No storage.session.remove support"))
            : n(new Error("No storage.session.remove support, permission is missing"));
        });
      }
    },
    56847: (e, t, n) => {
      "use strict";
      n.d(t, { t: () => a });
      var o = n(100839);
      function a(e) {
        return new Promise((t, n) => {
          (0, o.qX)(["storage"])
            ? (0, o.Ez)("storage.session.set")
              ? chrome.storage.session.set(e, () => {
                  if (chrome.runtime.lastError) {
                    const e = chrome.runtime.lastError.message ?? "Unknown chrome.runtime.lastError",
                      t = new Error(`storage/session/set: ${e}`);
                    n(t);
                  }
                  t();
                })
              : n(new Error("No storage.session.set support"))
            : n(new Error("No storage.session.set support, permission is missing"));
        });
      }
    },
    215904: (e, t, n) => {
      "use strict";
      function o() {
        return chrome.tabs.TAB_ID_NONE;
      }
      n.d(t, { a: () => o });
    },
    724715: (e, t, n) => {
      "use strict";
      n.d(t, { U: () => a });
      var o = n(100839);
      function a(e) {
        return new Promise((t, n) => {
          (0, o.Ez)("tabs.create")
            ? chrome.tabs.create(e, (e) => {
                if (chrome.runtime.lastError) {
                  const e = chrome.runtime.lastError.message ?? "Unknown chrome.runtime.lastError",
                    t = new Error(`tabs/create: ${e}`);
                  n(t);
                } else t(e);
              })
            : n(new Error("No tabs.create support"));
        });
      }
    },
    237335: (e, t, n) => {
      "use strict";
      n.d(t, { T: () => a });
      var o = n(100839);
      function a() {
        return new Promise((e, t) => {
          (0, o.Ez)("tabs.getCurrent")
            ? chrome.tabs.getCurrent((n) => {
                if (chrome.runtime.lastError) {
                  const e = chrome.runtime.lastError.message ?? "Unknown chrome.runtime.lastError",
                    n = new Error(`tabs/get-current: ${e}`);
                  t(n);
                } else e(n);
              })
            : t(new Error("No tabs.getCurrent support"));
        });
      }
    },
    661222: (e, t, n) => {
      "use strict";
      n.d(t, { I: () => a });
      var o = n(100839);
      function a(e) {
        return new Promise((t, n) => {
          (0, o.qX)(["tabs"])
            ? (0, o.Ez)("tabs.query")
              ? chrome.tabs.query(e, (e) => {
                  if (chrome.runtime.lastError) {
                    const e = chrome.runtime.lastError.message ?? "Unknown chrome.runtime.lastError",
                      t = new Error(`tabs/query: ${e}`);
                    n(t);
                  } else t(e);
                })
              : n(new Error("No tabs.query support"))
            : n(new Error("No tabs.query support, permission is missing"));
        });
      }
    },
    549259: (e, t, n) => {
      "use strict";
      n.d(t, { O: () => a });
      var o = n(100839);
      function a(e) {
        return new Promise((t, n) => {
          (0, o.Ez)("tabs.remove")
            ? chrome.tabs.remove(e, () => {
                if (chrome.runtime.lastError) {
                  const e = chrome.runtime.lastError.message ?? "Unknown chrome.runtime.lastError",
                    t = new Error(`tabs/remove: ${e}`);
                  n(t);
                } else t();
              })
            : n(new Error("No tabs.remove support"));
        });
      }
    },
    731460: (e, t, n) => {
      "use strict";
      n.d(t, { V: () => a });
      var o = n(100839);
      function a(e, t) {
        return new Promise((n, a) => {
          (0, o.Ez)("tabs.update")
            ? chrome.tabs.update(e, t, (e) => {
                if (chrome.runtime.lastError) {
                  const e = chrome.runtime.lastError.message ?? "Unknown chrome.runtime.lastError",
                    t = new Error(`tabs/update: ${e}`);
                  a(t);
                } else n(e);
              })
            : a(new Error("No tabs.update support"));
        });
      }
    },
    772733: (e, t, n) => {
      "use strict";
      n.d(t, { T: () => a });
      var o = n(100839);
      function a(e) {
        return new Promise((t, n) => {
          if (!(0, o.Ez)("windows.getCurrent")) return void n(new Error("No windows.getCurrent support"));
          const a = (e) => {
            if (chrome.runtime.lastError) {
              const e = chrome.runtime.lastError.message ?? "Unknown chrome.runtime.lastError",
                t = new Error(`windows/getCurrent: ${e}`);
              n(t);
            } else t(e);
          };
          e ? chrome.windows.getCurrent(e, a) : chrome.windows.getCurrent(a);
        });
      }
    },
    457306: (e, t, n) => {
      "use strict";
      n.d(t, { V: () => a });
      var o = n(100839);
      function a(e, t) {
        return new Promise((n, a) => {
          (0, o.Ez)("windows.update")
            ? chrome.windows.update(e, t, (e) => {
                if (chrome.runtime.lastError) {
                  const e = chrome.runtime.lastError.message ?? "Unknown chrome.runtime.lastError",
                    t = new Error(`windows/update: ${e}`);
                  a(t);
                } else n(e);
              })
            : a(new Error("No windows.update support"));
        });
      }
    },
    239967: (e) => {
      "use strict";
      e.exports = JSON.parse(
        '{"v":"5.7.0","fr":30,"ip":0,"op":26,"w":240,"h":240,"nm":"Loading Light Theme","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":3,"nm":"Null 4","sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[120,122,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ip":0,"op":150,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"load","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0,151,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[250,250,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[88,88],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.996078431373,0.356862745098,0.2,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":6,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0.5,-60.5],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[10]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.333],"y":[0]},"t":12.5,"s":[42]},{"t":25,"s":[10]}],"ix":2},"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.2],"y":[0]},"t":0,"s":[-19]},{"t":25,"s":[341]}],"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":106.197876042479,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"load 2","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0,151,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[250,250,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[88,88],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[1,0.870588235294,0.839215686275,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":6,"ix":5},"lc":2,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0.5,-60.5],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":106.197876042479,"st":0,"bm":0}],"markers":[]}'
      );
    }
  }
]);
