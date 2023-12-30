(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [2356],
  {
    376868: (e) => {
      e.exports = { LANGUAGES: ["en", "fr", "de", "es", "it", "ja", "pt", "ko", "zh", "sv", "nl"] };
    },
    764549: (e, t, a) => {
      "use strict";
      a.d(t, { g: () => i });
      var n = a(696832),
        o = a(962899),
        r = a(488203),
        s = a(929514);
      const i = ({ handleDismiss: e, isAccountRecoveryApproved: t, handleAccountRecovery: a }) => {
        const { translate: i } = (0, r.Z)();
        return n.createElement(
          o.VqE,
          { isOpen: t, onClose: e, disableEscapeKeyClose: !0, disableOutsideClickClose: !0 },
          n.createElement("div", { className: s.Z.icon }, n.createElement(o.H0w, { size: 62, color: o.colors.midGreen00 })),
          n.createElement(o.$N8, { title: i("webapp_account_recovery_approval_title") }),
          n.createElement(
            o.a7O,
            null,
            n.createElement(o.nvN, { color: o.colors.dashGreen01 }, i("webapp_account_recovery_approval_subtitle"))
          ),
          n.createElement(o.cNS, { primaryButtonTitle: i("webapp_account_recovery_approval_continue"), primaryButtonOnClick: a })
        );
      };
    },
    814119: (e, t, a) => {
      "use strict";
      a.d(t, { W: () => l });
      var n = a(696832),
        o = a(692077),
        r = a(962899),
        s = a(276376),
        i = a(488203);
      const l = ({ showAccountRecoveryDialog: e, handleDismiss: t }) => {
        const { translate: a } = (0, i.Z)(),
          l = (0, o.k6)(),
          { routes: c } = (0, s.Xo)(),
          _ = () => {
            t();
          };
        return n.createElement(
          r.VqE,
          { closeIconName: a("_common_dialog_dismiss_button"), isOpen: e, onClose: _ },
          n.createElement(r.$N8, { title: a("webapp_login_form_account_recovery_title") }),
          n.createElement(
            r.a7O,
            null,
            n.createElement(r.nvN, { color: r.colors.dashGreen01 }, a("webapp_login_form_account_recovery_subtitle"))
          ),
          n.createElement(r.cNS, {
            primaryButtonTitle: a("webapp_login_form_account_recovery_confirm"),
            primaryButtonOnClick: () => {
              t(), l.push(c.userDeviceRegistration);
            },
            secondaryButtonTitle: a("webapp_login_form_account_recovery_dismiss"),
            secondaryButtonOnClick: _
          })
        );
      };
    },
    3985: (e, t, a) => {
      "use strict";
      a.d(t, { w: () => _ });
      var n = a(696832),
        o = a(692077),
        r = a(962899),
        s = a(740300),
        i = a(488203),
        l = a(86498),
        c = a(459522);
      const _ = ({ showCancelRequestDialog: e, handleDismiss: t, handleShowGenericRecoveryError: a }) => {
        const { translate: _ } = (0, i.Z)(),
          u = (0, o.k6)(),
          p = (0, l.V)(),
          d = () => {
            t(), a();
          };
        return n.createElement(
          r.VqE,
          { closeIconName: _("_common_dialog_dismiss_button"), isOpen: e, onClose: t },
          n.createElement(r.$N8, { title: _("webapp_account_recovery_request_dialog_title") }),
          n.createElement(
            r.a7O,
            null,
            n.createElement(r.nvN, { color: r.colors.dashGreen01 }, _("webapp_account_recovery_request_dialog_subtitle"))
          ),
          n.createElement(r.cNS, {
            intent: "danger",
            primaryButtonTitle: _("webapp_account_recovery_request_dialog_confirm"),
            primaryButtonOnClick: async () => {
              try {
                if (!(await s.C.cancelRecoveryRequest()).success) return void d();
                p.showAlert(_("webapp_account_recovery_request_dialog_alert"), r.BLW.SUCCESS), u.replace(c.TT);
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
    703267: (e, t, a) => {
      "use strict";
      a.d(t, { H: () => i });
      var n = a(696832),
        o = a(962899),
        r = a(488203),
        s = a(929514);
      const i = ({ isAccountRecoveryError: e, handleGenericRecoveryErrorClose: t }) => {
        const { translate: a } = (0, r.Z)();
        return n.createElement(
          o.VqE,
          { closeIconName: a("_common_dialog_dismiss_button"), isOpen: e, onClose: t },
          n.createElement("div", { className: s.Z.icon }, n.createElement(o.enX, { size: 62, color: o.colors.functionalRed02 })),
          n.createElement(o.$N8, { title: a("webapp_account_recovery_generic_error_title") }),
          n.createElement(
            o.a7O,
            null,
            n.createElement(o.nvN, { color: o.colors.dashGreen01 }, a("webapp_account_recovery_generic_error_subtitle"))
          ),
          n.createElement(o.cNS, { primaryButtonTitle: a("webapp_account_recovery_generic_error_dismiss"), primaryButtonOnClick: t })
        );
      };
    },
    78848: (e, t, a) => {
      "use strict";
      a.d(t, { g1: () => h.g, WE: () => E.W, Hc: () => f.H, H4: () => x.H, Yt: () => g, _H: () => w._ });
      var n,
        o = a(696832),
        r = a(962899),
        s = a(773817),
        i = a(86498),
        l = a(740300),
        c = a(488203),
        _ = a(148038),
        u = a(506295),
        p = a(115607),
        d = a(379846),
        m = a(459522);
      const g = () => {
        const { translate: e } = (0, c.Z)(),
          [t, a] = o.useState(!1),
          g = (0, i.V)(),
          { showDialog: h, markDialogAsSeen: E } = (function () {
            const e = (0, _.qr)({ queryConfig: { query: l.C.getShouldShowFeatureActivationModal } }, []),
              { unseen: t, setAsSeen: a } = (0, d.m)(u.O.AccountRecoveryAvailableEmployeeDialog),
              n = (0, p.lZ)();
            return {
              showDialog:
                t &&
                e.status === _.rq.Success &&
                e.data &&
                !n.isLoading &&
                void 0 !== n.isTeamSoftDiscontinued &&
                !n.isTeamSoftDiscontinued,
              markDialogAsSeen: a
            };
          })();
        return (0, s.tZ)(
          r.VqE,
          { isOpen: h, onClose: () => E(), closeIconName: e("_common_dialog_dismiss_button") },
          (0, s.tZ)("div", { style: { marginBottom: "30px" } }, n || (n = (0, s.tZ)(r._m8, { size: 90 }))),
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
              a(!0),
                await l.C.activateAccountRecovery(),
                g.showAlert(e("webapp_account_recovery_activation_success_message"), r.BLW.SUCCESS),
                a(!1),
                E();
            },
            primaryButtonProps: { disabled: t, id: "activate-recovery-button" },
            secondaryButtonTitle: e("webapp_account_recovery_activation_dialog_secondary_button"),
            secondaryButtonOnClick: async () => {
              window.open(m.WW), E();
            },
            secondaryButtonProps: { disabled: t }
          })
        );
      };
      var h = a(764549),
        E = a(814119),
        f = (a(3985), a(703267)),
        x = a(77826),
        w = a(176762);
    },
    77826: (e, t, a) => {
      "use strict";
      a.d(t, { H: () => l });
      var n = a(696832),
        o = a(962899),
        r = a(740300),
        s = a(488203),
        i = a(929514);
      const l = ({
        isAccountRecoveryPending: e,
        shouldSendNewRequest: t,
        handleShowGenericRecoveryError: a,
        handleShowAccountRecoveryDialog: l,
        handleDismiss: c
      }) => {
        const { translate: _ } = (0, s.Z)(),
          u = _(t ? "webapp_login_form_account_recovery_pending_start_new" : "webapp_login_form_account_recovery_pending_cancel_request"),
          p = t
            ? l
            : async () => {
                try {
                  (await r.C.cancelRecoveryRequest()).success || a();
                } catch (e) {
                  a();
                }
                c();
              };
        return n.createElement(
          o.VqE,
          {
            closeIconName: _("_common_dialog_dismiss_button"),
            isOpen: e,
            onClose: () => {
              c();
            }
          },
          n.createElement("div", { className: i.Z.icon }, n.createElement(o.vFK, { size: 62, color: o.colors.grey04 })),
          n.createElement(o.$N8, { title: _("webapp_login_form_account_recovery_pending_title") }),
          n.createElement(
            o.a7O,
            null,
            n.createElement(o.nvN, { color: o.colors.dashGreen01 }, _("webapp_login_form_account_recovery_pending_subtitle"))
          ),
          n.createElement(o.cNS, {
            primaryButtonTitle: _("webapp_login_form_account_recovery_pending_confirm"),
            primaryButtonOnClick: () => {
              c();
            },
            secondaryButtonTitle: u,
            secondaryButtonOnClick: p
          })
        );
      };
    },
    176762: (e, t, a) => {
      "use strict";
      a.d(t, { _: () => c });
      var n = a(696832),
        o = a(692077),
        r = a(962899),
        s = a(276376),
        i = a(488203),
        l = a(929514);
      const c = ({ handleDismiss: e, isAccountRecoveryRejected: t }) => {
        const { translate: a } = (0, i.Z)(),
          c = (0, o.k6)(),
          { routes: _ } = (0, s.Xo)(),
          u = () => {
            e();
          };
        return n.createElement(
          r.VqE,
          { closeIconName: a("_common_dialog_dismiss_button"), isOpen: t, onClose: u },
          n.createElement("div", { className: l.Z.icon }, n.createElement(r.enX, { size: 62, color: r.colors.functionalRed02 })),
          n.createElement(r.$N8, { title: a("webapp_account_recovery_rejection_title") }),
          n.createElement(
            r.a7O,
            null,
            n.createElement(r.nvN, { color: r.colors.dashGreen01 }, a("webapp_account_recovery_rejection_subtitle"))
          ),
          n.createElement(r.cNS, {
            primaryButtonTitle: a("webapp_account_recovery_rejection_dismiss"),
            primaryButtonOnClick: u,
            secondaryButtonTitle: a("webapp_account_recovery_rejection_try_again"),
            secondaryButtonOnClick: () => {
              c.replace(_.userDeviceRegistration);
            }
          })
        );
      };
    },
    197731: (e, t, a) => {
      "use strict";
      a.d(t, { T: () => l });
      var n = a(696832),
        o = a(488203),
        r = a(588790),
        s = a(285465);
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
      a(212913);
      const l = ({ children: e, id: t, passwordStrength: a, showTooltip: s }) => {
        const { translate: l } = (0, o.Z)(),
          c = ((e) => {
            if (!e || !e.feedback) return [];
            const { suggestions: t = [], warning: a } = e.feedback;
            return [...t.map((e) => i[e]), ...(a ? [i[a]] : [])];
          })(a);
        return n.createElement(
          r.Z,
          {
            destroyTooltipOnHide: !0,
            id: t,
            trigger: [],
            visible: s && c.length > 0,
            placement: "top",
            overlayClassName: "tooltipContainer--xsb1AhXlhs",
            overlay: n.createElement(
              "div",
              { className: "inner--ydeRHKlnlU" },
              n.createElement(
                "ul",
                null,
                c.map((e) => n.createElement("li", { key: `${t}${e}` }, l(e)))
              )
            )
          },
          n.createElement("div", null, e)
        );
      };
    },
    454107: (e, t, a) => {
      "use strict";
      a.d(t, { Z: () => te });
      var n = a(696832),
        o = a(692077),
        r = a(876307),
        s = (a(568030), a(127521)),
        i = a(459522),
        l = a(421548),
        c = a(740300),
        _ = a(963888),
        u = a(72133),
        p = a(561605),
        d = a(488203),
        m = a(952092),
        g = a(787685),
        h = a(210051),
        E = a(383849),
        f = a.n(E),
        x = a(233377),
        w = a(962899),
        b = a(928136),
        v = a(599203),
        k = a(324047),
        y = a(30432),
        S = a(321501);
      const T = { teamTrial: "/team/create", webAccount: "/account/create", memberAccount: "/member/create" },
        A = { teamTrial: "team_account_creation_", webAccount: "account_creation_", memberAccount: "member_account_creation_" };
      var N = a(966136);
      var O;
      const C = n.memo(() => {
        const e = {
          standardHeader: f()("standardHeader--KZAU9tYuXU"),
          logoContainer: f()("logoContainer--Sno28FgBRQ"),
          logo: f()("logo--dwbg5fgk4X"),
          tab: f()("tab--RqSTiGm5PV")
        };
        return n.createElement(N.A, {
          includeLockup: !0,
          classes: e,
          logoComponent: O || (O = n.createElement(o.rU, { to: "/", target: "_blank", rel: "noopener noreferrer" })),
          lockupSize: w.r1z.Size39
        });
      });
      var R = a(197731);
      const D = "wrapper--ZJuFdaKb8_",
        I = "content--h1Az1R7W53",
        Z = "inner--MhiMeaJ06f",
        P = "heading--G6oMw7P6Ry _headingBase--S56PdbmTz8",
        L = "subHeading--kBAdohsy6N _headingBase--S56PdbmTz8",
        M = "form--GSok6tWyZq",
        U = "formAction--aKLW_xTAiu",
        V = {
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
      var B,
        F = (function (e) {
          return (
            (e.WRONG_PASSWORD_ERROR = "wrong_password"),
            (e.PASSWORDS_DONT_MATCH_ERROR = "passwords_dont_match"),
            (e.WEAK_PASSWORD_ERROR = "weak_password"),
            (e.SAME_MASTER_PASSWORD = "same_master_password"),
            e
          );
        })(F || {}),
        z = (function (e) {
          return (e.SUBMIT = "submit"), (e.ENCRYPTION_ADVANCED = "encryption_advanced"), (e.ENCRYPTION_STARTED = "encryption_started"), e;
        })(z || {});
      const G = ({ onSubmit: e, options: t, isEu: a }) => {
        const { translate: r } = (0, d.Z)(),
          [s, i] = (0, n.useState)(x.Maybe.nothing()),
          [l, _] = (0, n.useState)(x.Maybe.nothing()),
          [u, p] = (0, n.useState)(""),
          [m, g] = (0, n.useState)(null),
          {
            passwordStrength: h,
            resetPasswordStrength: E,
            setPasswordStrength: N,
            isPasswordStrengthScore: O,
            isPasswordStrongEnough: G
          } = (0, y.R)(),
          [W, j] = (0, n.useState)(""),
          [q, K] = (0, n.useState)(null),
          [H, $] = (0, n.useState)(!1),
          [X, Y] = (0, n.useState)(!1),
          [Q, J] = (0, n.useState)(z.SUBMIT),
          ee = (e) => {
            i(x.Maybe.maybe(e));
          };
        (0, n.useEffect)(() => {
          ee(!a);
        }, [a]);
        const te = (e) => {
            if (e) return r(A[t.flowIndicator] + "error_" + e);
          },
          ae = r.namespace(A[t.flowIndicator]),
          ne = ae.markup("confirm_terms_of_service_markup", {}, { linkTarget: "_blank" }),
          oe = ae("confirm_tips_and_offers_label"),
          re = null !== a;
        return n.createElement(
          "div",
          { className: D },
          B || (B = n.createElement(C, null)),
          n.createElement(
            "div",
            { className: I },
            n.createElement(
              "div",
              { className: Z },
              n.createElement("h1", { className: P }, ae("confirm_create_your_password")),
              n.createElement("h2", { className: L }, ae("confirm_subheader")),
              n.createElement(
                "form",
                {
                  className: M,
                  autoComplete: "off",
                  noValidate: !0,
                  onSubmit: (t) => {
                    if ((t.preventDefault(), u !== W)) return void K(F.PASSWORDS_DONT_MATCH_ERROR);
                    const n = { emailsTipsAndOffers: s, isEu: a, password: u, privacyPolicyAndToS: l };
                    J(z.ENCRYPTION_STARTED),
                      $(!0),
                      e(n).then(
                        () => {
                          $(!0), J(z.ENCRYPTION_ADVANCED);
                        },
                        () => {
                          $(!1), J(z.SUBMIT);
                        }
                      );
                  }
                },
                n.createElement(
                  "div",
                  { className: "createPasswordContainer--tiiyd9q8cb" },
                  n.createElement(
                    R.T,
                    { showTooltip: X, passwordStrength: h, id: "password-tooltip" },
                    n.createElement(
                      n.Fragment,
                      null,
                      n.createElement(w.WUg, {
                        id: "primaryPasswordInput",
                        showPasswordTooltipText: ae("password_show_label"),
                        hidePasswordTooltipText: ae("password_hide_label"),
                        onBlur: () => {
                          Y(!1), u && (u && !G ? g(F.WEAK_PASSWORD_ERROR) : W && u && u !== W && K(F.PASSWORDS_DONT_MATCH_ERROR));
                        },
                        onFocus: () => {
                          Y(!0);
                        },
                        onChange: async (e) => {
                          const t = e.target.value;
                          if ((p(t), m && g(null), q && K(null), "" === t && E(), "" !== t)) {
                            const e = await c.C.evaluatePassword({ password: t });
                            N(e);
                          }
                        },
                        placeholder: ae("password_hint_text"),
                        value: u,
                        label: ae("password_floating_label"),
                        feedbackType: m ? "error" : void 0,
                        feedbackText: m ? te(m) : ""
                      })
                    )
                  ),
                  h &&
                    O(h.score) &&
                    n.createElement(w.YVT, {
                      score: h.score,
                      showAdditionalText: !0,
                      additionalText: r(`${A[t.flowIndicator]}${S.Yh[h.score]}`)
                    })
                ),
                n.createElement(w.WUg, {
                  inputId: "secondaryPasswordInput",
                  value: W,
                  showPasswordTooltipText: ae("confirm_password_show_label"),
                  hidePasswordTooltipText: ae("confirm_password_hide_label"),
                  placeholder: ae("confirm_password_hint_text"),
                  onBlur: () => {
                    W && u !== W && K(F.PASSWORDS_DONT_MATCH_ERROR);
                  },
                  onChange: (e) => {
                    K(null), j(e.target.value);
                  },
                  label: ae("confirm_password_floating_label"),
                  feedbackType: q ? "error" : void 0,
                  feedbackText: q ? te(q) : ""
                }),
                n.createElement(
                  "div",
                  { className: f()(V.disclaimerCheckboxWrapper, re ? V.visible : {}) },
                  n.createElement(b.Z, {
                    label: oe,
                    labelClass: V.disclaimerCheckbox,
                    name: "emailsTipsAndOffers",
                    onCheck: ee,
                    checked: s.valueOr(!a)
                  })
                ),
                a &&
                  n.createElement(
                    "div",
                    { className: V.disclaimer },
                    n.createElement(b.Z, {
                      label: ne,
                      labelClass: f()(V.disclaimerCheckbox, V.mandatory),
                      name: "privacyPolicyAndToS",
                      onCheck: (e) => {
                        _(x.Maybe.maybe(e));
                      },
                      checked: l.valueOr(!1)
                    })
                  ),
                n.createElement(
                  "div",
                  { className: U },
                  n.createElement(v.Z, {
                    type: "submit",
                    size: "large",
                    label: ((se = Q), r(A[t.flowIndicator] + "button_text_" + se)),
                    disabled: !(!a || l.valueOr(!1)) || !(u && W && W === u && G),
                    loading: H,
                    classNames: ["nextButton--RcIAhT4SH2"]
                  })
                ),
                !a &&
                  n.createElement(
                    "p",
                    { className: f()(V.disclaimer, V.disclaimerUs) },
                    `${ae("content_form_disclaimer1")} `,
                    n.createElement(
                      k.Z,
                      {
                        href: "https://www.dashlane.com/terms",
                        title: ae("content_form_dashlane_terms_title"),
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: V.link
                      },
                      ae("content_form_dashlane_terms")
                    ),
                    ` ${ae("content_form_disclaimer2")} `,
                    n.createElement(
                      k.Z,
                      {
                        href: "https://www.dashlane.com/privacy",
                        title: ae("content_form_privacy_policy_title"),
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: V.link
                      },
                      ae("content_form_privacy_policy")
                    ),
                    ae("content_form_disclaimer3")
                  ),
                n.createElement(
                  "div",
                  { className: f()(V.disclaimerCheckbox, V.backButtonContainer) },
                  n.createElement(
                    "button",
                    {
                      disabled: H,
                      className: V.backButton,
                      onClick: (e) => {
                        e.preventDefault(), g(null), K(null), (0, o.uX)(T[t.flowIndicator]);
                      },
                      type: "button"
                    },
                    ae("confirm_back_button")
                  )
                )
              )
            )
          )
        );
        var se;
      };
      var W,
        j,
        q = a(773817),
        K = a(258163),
        H = a(814691),
        $ = a(411538);
      let X = "";
      try {
        X = window.sessionStorage?.accountCreationInfoLogin;
      } catch {}
      const Y = ({ lockedLoginValue: e, preFilledLoginValue: t, onSubmit: a, lee: o, options: r }) => {
        var s;
        const { translate: i } = (0, d.Z)(),
          [l, u] = (0, n.useState)(!1),
          [m, g] = (0, n.useState)(null != (s = null != e ? e : t) ? s : ""),
          [E, f] = (0, n.useState)(null),
          x = (0, n.createRef)(),
          b = (0, n.useRef)([]),
          v = () => {
            var e;
            return null != (e = x.current?.value.toLowerCase()) ? e : "";
          },
          k = m || X,
          y = A[r.flowIndicator];
        (0, n.useEffect)(() => {
          (b.current = b.current.concat([
            c.C.liveServiceProviderUrl.on((e) => {
              (0, p.nL)((0, p.C0)(e));
            })
          ])),
            _.Z.webAccountCreation.started({ anonymouscomputerid: o.globalState.logs.websiteTrackingId });
        }, []),
          (0, n.useEffect)(() => {
            m || g(X);
          }, [X]),
          (0, n.useEffect)(
            () => () => {
              u(!1), b.current.forEach((e) => e()), (b.current = []);
            },
            []
          );
        const S = (e) => {
            if (!e) return;
            let t;
            if ("sso_non_provisioned" === e) {
              const a = m,
                n = a.slice(a.indexOf("@") + 1);
              t = i(A[r.flowIndicator] + "error_" + e, { domain: n });
            } else
              t =
                "nitro_sso_extension_needed" === e
                  ? "You must use the Dashlane Extension to create your account."
                  : i(A[r.flowIndicator] + "error_" + e);
            return t;
          },
          T = (e) => {
            e.preventDefault();
            const t = { email: v(), isEu: null === o.carbon.currentLocation.isEu || o.carbon.currentLocation.isEu };
            if ((f((0, h.vV)(m) ? null : "invalid_email"), !((e) => (0, h.vV)(e.email))(t))) return;
            u(!0);
            const n = t.email;
            c.C.checkLogin(n)
              .then(({ accountCreationCode: e }) => {
                const t = e === K.r.USER_EXISTS,
                  o = e !== K.r.USER_DOESNT_EXIST_INVALID_MX,
                  r = e === K.r.USER_DOESNT_EXIST_SSO_NON_PROVISIONED,
                  s = e === K.r.USER_SSO_PROVISIONED || e === K.r.USER_DOESNT_EXIST_SSO_NON_PROVISIONED,
                  i = e === K.r.USER_NITRO_SSO_PROVISIONED;
                let l = null;
                o || (l = "invalid_email"),
                  r && (l = "sso_non_provisioned"),
                  t && (l = "account_already_exists"),
                  i && (l = "nitro_sso_extension_needed"),
                  f(l),
                  t || r || s || i || !o || a({ login: n });
              })
              .catch((e) => {
                o.dispatchGlobal(H.Qy.error({ message: "Login validation failed", content: { error: e.message } }));
              })
              .finally(() => {
                u(!1);
              });
          };
        return (0, q.tZ)(
          "div",
          { className: D },
          W || (W = (0, q.tZ)(C, null)),
          (0, q.tZ)(
            "div",
            { className: I },
            (0, q.tZ)(
              "div",
              { className: Z },
              (0, q.tZ)("h1", { className: P }, i(y + "info_content_heading")),
              (0, q.tZ)("h2", { className: L + " e2e-createSubHeading" }, i(y + "info_content_subheading")),
              (0, q.tZ)(
                "form",
                { className: M, onSubmit: T },
                (0, q.tZ)(w.oil, {
                  id: "primaryEmailInput",
                  fullWidth: !0,
                  disabled: !!e,
                  type: "email",
                  placeholder: i(y + "email_hint_text"),
                  label: i(y + "email_floating_label"),
                  ref: x,
                  autoFocus: !X,
                  onBlur: () => {
                    f(!m || (0, h.vV)(m) ? null : "invalid_email");
                  },
                  onChange: () => {
                    f(null), g(v()), window.sessionStorage && (window.sessionStorage.accountCreationInfoLogin = v());
                  },
                  onKeyDown: (e) => {
                    "Enter" === e.key && T(e);
                  },
                  defaultValue: k,
                  key: e ? "predefined" : "real",
                  feedbackText: S(E),
                  feedbackType: S(E) ? "error" : void 0
                }),
                (0, q.tZ)(
                  "div",
                  { className: U },
                  (0, q.tZ)(
                    w.zxk,
                    { type: "submit", sx: { minWidth: "190px" }, size: "large", onClick: T, disabled: l },
                    l ? j || (j = (0, q.tZ)($.Z, { size: 30, mode: "dark" })) : i(y + "button_next")
                  )
                )
              )
            )
          )
        );
      };
      var Q = a(169340);
      const J = {
          teamTrial: { info: "/team/create", confirm: "/team/create/confirm" },
          webAccount: { info: "/account/create", confirm: "/account/create/confirm" },
          memberAccount: { info: "/member/create", confirm: "/member/create/confirm" }
        },
        ee = ({ basePath: e, lee: t, options: a, location: E }) => {
          var f;
          const { translate: x } = (0, d.Z)(),
            w = new URLSearchParams(E.search),
            [b, v] = (0, n.useState)(null != (f = w.get("login")) ? f : w.get("email")),
            [k] = (0, n.useState)(b && (0, h.vV)(b) ? b : ""),
            [y, S] = (0, n.useState)("true" === w.get("forceStartOnWeb")),
            [T, A] = (0, n.useState)(!1);
          return (
            (0, n.useEffect)(() => {
              const e = new AbortController();
              return () => {
                e.abort();
              };
            }, []),
            T
              ? (0, r.tZ)(
                  "div",
                  { className: "loadingContainer--dgcyrXJk8Z" },
                  (0, r.tZ)(u.Z, {
                    height: 150,
                    width: 150,
                    animationParams: { renderer: "svg", animationData: l, loop: !0, autoplay: !0 }
                  })
                )
              : (0, r.tZ)(
                  n.Fragment,
                  null,
                  (0, r.tZ)(o.Vy, {
                    path: e,
                    exact: !0,
                    component: Y,
                    additionalProps: {
                      onSubmit: (e) => {
                        v(e.login), (0, o.uX)(J[a.flowIndicator].confirm);
                      },
                      lockedLoginValue: k,
                      preFilledLoginValue: b
                    },
                    options: a
                  }),
                  (0, r.tZ)(o.Vy, {
                    path: `${e}/confirm`,
                    component: G,
                    additionalProps: {
                      onSubmit: async (e) => {
                        const n = e;
                        if (!b) return;
                        const r = {
                          anonymousUserId: (0, s.n5)(t.globalState),
                          login: b,
                          password: n.password,
                          format: "US",
                          language: "en",
                          subscribe: n.emailsTipsAndOffers.valueOr(!1),
                          deviceName: (0, Q.M)(x("webapp_login_form_regsiter_fallback_browser_name"))
                        };
                        try {
                          const s = await c.C.createAccountStep1(r);
                          if (!s.valid) {
                            const e = new Error("accountCreationStep1.valid was not defined on confirm submit");
                            t.reportError(e), (0, o.uX)(J[a.flowIndicator].info);
                          }
                          if (e.isEu && !e.privacyPolicyAndToS.valueOr(!1)) {
                            const e = new Error("termsOfService set to false on confirm submit");
                            t.reportError(e), (0, o.uX)(J[a.flowIndicator].confirm);
                          }
                          const l = e.privacyPolicyAndToS.caseOf({
                              just: (e) => [{ consentType: "privacyPolicyAndToS", status: e }],
                              nothing: () => []
                            }),
                            u = { consentType: "emailsOffersAndTips", status: s.encryptSettingsRequest.subscribe },
                            d = {
                              createAccountResult: s,
                              options: { flowIndicator: a.flowIndicator },
                              isStandAlone: !1,
                              consents: [...l, u]
                            },
                            h = (0, g.D)();
                          c.C.createAccountStep2(d).then(({ m2dToken: e }) => {
                            var o;
                            let r;
                            "webAccount" === a.flowIndicator &&
                              _.Z.webAccountCreation.accountCreated({}, (e) => {
                                e && t.reportError(e, "Failed to connect with extension");
                              }),
                              (0, m.$)(h, n.emailsTipsAndOffers.valueOr(!1)),
                              ((e) => "teamTrial" === e)(a.flowIndicator)
                                ? (r = `${i.n2}#/members`)
                                : ((e) => "memberAccount" === e)(a.flowIndicator) &&
                                  (r = y
                                    ? "https://www.dashlane.com/business/download/saex"
                                    : `https://www.dashlane.com/download?m2dRawToken=${e}`),
                              (0, p.nL)(null != (o = r) ? o : `https://www.dashlane.com/download?m2dRawToken=${e}`);
                          });
                        } catch (e) {
                          t.reportError(e, "Account creation failed");
                        }
                      },
                      isEu: t.carbon.currentLocation.isEu,
                      dispatchGlobal: t.dispatchGlobal
                    },
                    options: a
                  })
                )
          );
        };
      function te({ path: e, options: t }) {
        return n.createElement(o.Vy, { exact: !0, path: [e, `${e}/confirm`], component: ee, additionalProps: { basePath: e }, options: t });
      }
    },
    703381: (e, t, a) => {
      "use strict";
      a.d(t, { L: () => i, Z: () => l });
      var n = a(495326),
        o = a.n(n),
        r = a(342868);
      let s = {};
      function i() {
        s = {};
      }
      class l {
        constructor({ login: e, uki: t, teamId: a } = { login: null, uki: null, teamId: null }) {
          (this._auth = void 0), (this._fetchRequests = []), (this._auth = { login: e, uki: t, teamId: a });
        }
        _debounce(e, t, a) {
          if (a) return t();
          s[e] || (s[e] = { isPending: !1, lastUpdateTimestamp: 0, promise: null });
          const { promise: n, isPending: o } = s[e];
          if (n && o) return n;
          s[e].isPending = !0;
          const r = this._isCacheUpToDate(e).then((a) =>
            a.isUpToDate && s[e]
              ? ((s[e].isPending = !1), s[e].response)
              : t().then((t) => {
                  if (!s[e]) throw new Error("Cache has been cleared");
                  return (s[e] = { promise: null, isPending: !1, response: t, lastUpdateTimestamp: a.remoteLastUpdateTimestamp }), t;
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
        async _post({ apiVersion: e, apiObject: t }, a, n = {}) {
          n = Object.assign(n || {}, this._auth);
          const s = Object.keys(n),
            i = s.some((e) => n[e] instanceof File);
          n = i ? s.reduce((e, t) => (e.append(t, n[t]), e), new FormData()) : r.stringify(n);
          try {
            const r = (await o().post(`https://ws1.dashlane.com/${e}/${t}/${a}`, n)).data.content;
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
        fetch({ apiVersion: e, apiObject: t }, a, n = {}) {
          const o = { data: n.data || {}, noCache: !!n.noCache },
            r = `${t}${a}${e}`;
          return new Promise((n, s) =>
            this._debounce(r, () => this._post({ apiVersion: e, apiObject: t }, a, o.data), o.noCache).then((e) =>
              e.isError ? s(e) : n(e)
            )
          );
        }
        fetchAll() {
          const e = this._fetchRequests;
          return (this._fetchRequests = []), Promise.all(e.map((e) => this.fetch(e.params, e.apiMethod, e.data)));
        }
        push({ apiVersion: e, apiObject: t }, a, n) {
          this._fetchRequests.push({ params: { apiVersion: e, apiObject: t }, apiMethod: a, data: n });
        }
      }
    },
    805008: (e, t, a) => {
      "use strict";
      a.d(t, { N: () => b, Z: () => v });
      var n = a(326021),
        o = a(197446),
        r = a(696426),
        s = a(703381);
      class i {
        constructor(e) {
          (this._api = void 0), (this._api = e);
        }
      }
      const l = { apiVersion: 3, apiObject: "strongauth" };
      class c extends i {
        constructor(...e) {
          super(...e),
            (this._routeParams = l),
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
      var p = a(139378);
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
      var E = a(127521);
      function f(e) {
        const t = (0, E.v0)(e);
        if (!t) return {};
        const a = new s.Z(t);
        return { feedback: new u(a), strongAuth: new c(a), teamPlans: new h(a) };
      }
      var x = a(718835),
        w = a(692077);
      const b = "Incorrect authentication";
      function v(e) {
        return {
          carbon: e.cursor.globalState.carbon,
          dispatchGlobal: e.cursor.dispatchGlobal,
          globalState: e.cursor.globalState,
          reportError: (t, a) => {
            const r = a ? (0, o.Z)(a, t) : (0, o.Z)(t);
            t.message === b || (t.data && t.data.content === b)
              ? (e.cursor.dispatchGlobal(n._e()), (0, w.uX)("/login"))
              : e.cursor.dispatchGlobal(r);
          },
          apiMiddleware: f(e.cursor.globalState),
          permission: (0, r.V)(e.cursor.globalState),
          routes: e.routes,
          styleVars: x.Z,
          translate: e.translate
        };
      }
    },
    807371: (e, t, a) => {
      "use strict";
      a.d(t, { Z: () => r });
      var n = a(805008);
      function o(e, t) {
        return function (a, n) {
          return a ? r(Object.assign({}, t, { cursor: t.cursor.child(a, n) })) : e;
        };
      }
      function r(e) {
        const t = (0, n.Z)(e);
        return Object.assign({}, t, { child: o(t, e), dispatch: e.cursor.dispatch, state: e.cursor.state });
      }
    },
    140431: (e, t, a) => {
      "use strict";
      a.d(t, { Z: () => y });
      var n = a(696832),
        o = a(754793),
        r = a(876307),
        s = a(148038),
        i = a(643892),
        l = a(864803),
        c = a(692077),
        _ = a(229004),
        u = a(368976),
        p = a(837527);
      function d(e, t, a) {
        const n = e[t] || (() => 0);
        e[t] = () => {
          n.call(e), a.call(e);
        };
      }
      class m extends n.Component {
        getChildContext() {
          return {};
        }
        constructor(e) {
          super(e),
            (function (e, t) {
              let a = null;
              const n = (function (e) {
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
                a && e.forceUpdate();
              });
              d(e, "componentDidMount", () => {
                (a = t.subscribe(n)), n();
              }),
                d(e, "componentWillUnmount", () => {
                  a && a(), (a = null);
                });
            })(this, this.props.store);
        }
        render() {
          return n.Children.only(this.props.children);
        }
      }
      m.childContextTypes = {};
      var g = a(962899),
        h = (a(468253), a(407870));
      const E = ({ children: e }) => {
          const [, t] = (0, r.If)();
          return (
            n.useLayoutEffect(() => {
              const e = window.localStorage.getItem(h.x2);
              t("true" === e ? "dark" : "light"),
                document.documentElement.style.setProperty("color-scheme", "true" === e ? "dark" : "light");
            }, [t]),
            n.createElement(n.Fragment, null, e)
          );
        },
        f = (e) =>
          n.createElement(g.f6W, { theme: (0, r.It)(r.uH, g.uHP) }, n.createElement(r.SG, null, n.createElement(E, null, e.children))),
        x = (e) => n.createElement(f, null, n.createElement("div", null, n.Children.only(e.children))),
        w = (e) => n.createElement(x, null, n.createElement(m, { store: e.store }, n.Children.only(e.children)));
      var b = a(730583),
        v = a(367198),
        k = a(909673);
      const y = (e) => {
        const t = { host: e.host, basePath: e.basePath, reducer: b.Z, store: e.store, translate: e.translate, routes: e.namedRoutes };
        return (
          window.dispatchEvent(new Event("display-app")),
          n.createElement(
            w,
            { store: e.store },
            n.createElement(
              i.i,
              { client: e.coreClient },
              n.createElement(
                s.wz,
                { channel: l.Z },
                n.createElement(
                  c.F0,
                  { history: e.history },
                  n.createElement(
                    o.zt,
                    { store: e.store },
                    n.createElement(
                      _.b,
                      { value: { translate: e.translate } },
                      n.createElement(
                        u.u,
                        { portalId: "alert-popup-portal" },
                        n.createElement(
                          r.VW,
                          {
                            portalId: p.ex,
                            defaultCloseActionLabel: e.translate("_common_toast_close_label"),
                            sectionName: e.translate("_common_toast_section_name"),
                            itemName: e.translate("_common_toast_item_name")
                          },
                          n.createElement(
                            c.v1,
                            { value: t },
                            n.createElement(
                              k.G,
                              null,
                              n.createElement(v.r, { moduleName: "leeloo-routes", useCaseName: e.history.location.pathname }, e.routes)
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
    730583: (e, t, a) => {
      "use strict";
      a.d(t, { Z: () => r });
      var n = a(158432),
        o = a(897078);
      const r = (0, n.SP)("app", {}, [o.Z]);
    },
    459522: (e, t, a) => {
      "use strict";
      a.d(t, {
        $F: () => y,
        B9: () => ae,
        Bb: () => Z,
        G9: () => U,
        GG: () => V,
        Ht: () => B,
        J: () => z,
        J$: () => A,
        JQ: () => de,
        Jw: () => K,
        Kn: () => h,
        M0: () => p,
        Ml: () => u,
        Mv: () => D,
        N5: () => _e,
        NO: () => I,
        NW: () => ce,
        Nq: () => O,
        P: () => S,
        QF: () => F,
        Qz: () => m,
        S: () => v,
        SF: () => k,
        Sb: () => G,
        Sm: () => N,
        TD: () => L,
        TT: () => b,
        U3: () => d,
        WK: () => te,
        WW: () => J,
        Wt: () => _,
        XP: () => ne,
        ZL: () => P,
        _9: () => ie,
        _G: () => w,
        _x: () => $,
        aS: () => c,
        bE: () => s,
        cO: () => E,
        ci: () => i,
        ef: () => j,
        fL: () => X,
        g: () => l,
        lM: () => ee,
        lP: () => M,
        m$: () => ue,
        mA: () => le,
        mE: () => se,
        n2: () => H,
        qy: () => W,
        rI: () => Q,
        rM: () => f,
        rP: () => q,
        rR: () => C,
        sL: () => R,
        uN: () => T,
        v$: () => pe,
        vX: () => o,
        w0: () => x,
        wi: () => g,
        yE: () => Y,
        zF: () => oe,
        zi: () => re
      });
      var n = a(263272);
      let o = (function (e) {
        return (
          (e.ALL_APPS = "all-apps"),
          (e.TEAM_ADMIN_CONSOLE = "teamadminconsole"),
          (e.CLIENT = "client"),
          (e.WEB_ACCOUNT_CREATION = "webaccountcreation"),
          e
        );
      })({});
      const r = (e, t = "dashlane:///getpremium") => (n.isSafari() ? t : e),
        s = "/account-recovery",
        i = `${s}/admin-assisted-recovery`,
        l = `${s}/account-recovery-key`,
        c = "/account-recovery-key-result",
        _ = "/account-settings?view=recovery-key-reactivate",
        u = "/device-transfer-success",
        p = "/team",
        d = "/client/console",
        m = "/client/console/login",
        g = "/console",
        h = "/client",
        E = "/member",
        f = "/sso",
        x = "/directlogin",
        w = "/console/directlogin",
        b = "/login",
        v = "/console/login",
        k = "/signup",
        y = "/team/signup",
        S = "/console/signup",
        T = "/dependencies",
        A = "/family",
        N = "/loader",
        O = "/onboarding",
        C = "/chrome-welcome",
        R = "/auto-login-sso-success",
        D = "/delete-account",
        I = "/reset-account",
        Z = "/recover-2fa-codes",
        P = r("https://www.dashlane.com/plans/"),
        L = r("https://www.dashlane.com/getadvanced/"),
        M = r("https://www.dashlane.com/getessentials/"),
        U = r("https://www.dashlane.com/getpremium/"),
        V = r("https://www.dashlane.com/getfamily/"),
        B = "https://www.dashlane.com/features/",
        F = "https://www.dashlane.com/pricing?page=personal&currentPlan=free&variant=devices",
        z = "https://www.dashlane.com/account/reset/info",
        G = "https://www.dashlane.com/privacy",
        W = "https://www.dashlane.com/terms",
        j = "https://accounts.dashlane.com",
        q = "https://accounts.dashlane.com/payment?app=b2b",
        K = "https://accounts.dashlane.com/payment?app=b2c",
        H = "https://console.dashlane.com",
        $ = "https://support.dashlane.com/hc/articles/202625042-Protect-your-account-using-two-factor-authentication",
        X = "https://support.dashlane.com/hc/en-us/articles/202699211",
        Y = "https://support.dashlane.com/hc/en-us/articles/115003111325-I-forgot-my-Master-Password",
        Q = "https://support.dashlane.com/hc/articles/11282971791634",
        J = "https://support.dashlane.com/hc/articles/115005111905",
        ee = "https://support.dashlane.com/hc/en-us/articles/11282971791634",
        te = "https://support.dashlane.com/hc/articles/7865163497618",
        ae = {
          DIRECTORY_SYNC: "/directory-sync",
          POLICIES: "/policies",
          SSO: "/sso",
          DUO: "/duo",
          MASTER_PASSWORD_POLICIES: "/master-password-policies"
        },
        ne = "https://support.apple.com/HT204088",
        oe = "https://support.google.com/store/answer/6160235",
        re = "dashlane.com",
        se = "mailto:support@dashlane.com?subject=%5BGDPR%20Request%5D%20Right%20to%20Withdraw%20Consent",
        ie = "mailto:support@dashlane.com?subject=%5BGDPR%20Request%5D%20Right%20to%20Erasure%20or%20to%20be%20Forgotten",
        le = "mailto:support@dashlane.com?subject=%5BGDPR%20Request%5D%20Right%20of%20Access",
        ce = "mailto:support@dashlane.com?subject=%5BGDPR%20Request%5D%20Right%20to%20Rectification",
        _e = "mailto:support@dashlane.com?subject=%5BGDPR%20Request%5D%20Right%20to%20Restriction%20of%20Processing",
        ue = "mailto:support@dashlane.com?subject=%5BGDPR%20Request%5D%20Right%20to%20Data%20Portability",
        pe = "mailto:support@dashlane.com?subject=%5BGDPR%20Request%5D%20Right%20to%20Object",
        de = "mailto:support@dashlane.com?subject=%5BGDPR%20Request%5D%20Right%20to%20Lodge%20a%20Complaint";
    },
    7978: (e, t, a) => {
      "use strict";
      a.d(t, { aH: () => o, cX: () => r });
      var n = a(342868);
      a(459522);
      const o = (e, t) => {
          const a = (0, n.stringify)({ subCode: t });
          return `${e}${a ? `?${a}` : ""}`;
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
    404394: (e, t, a) => {
      "use strict";
      a.d(t, { t: () => Ss });
      var n,
        o = a(696832),
        r = a(692077),
        s = a(102984),
        i = a(459522),
        l = a(962899),
        c = a(773817);
      const { midGreen00: _ } = l.colors,
        u = () => {
          const [e, t] = (0, o.useState)([]),
            [a, r] = (0, o.useState)(""),
            [s, i] = (0, o.useState)(!1);
          return (
            (0, o.useEffect)(() => {
              i(!0),
                fetch("/assets/licenses.json")
                  .then(async (e) => {
                    const a = await e.json();
                    t(((e) => e.filter(({ licenses: e }) => "Dashlane" !== e))(a));
                  })
                  .catch(() => {
                    r("There was an error loading dependencies.");
                  })
                  .finally(() => {
                    i(!1);
                  });
            }, []),
            (0, c.tZ)(
              l.Ejs,
              { flexDirection: "column", alignItems: "center", sx: { m: "50px auto", p: "20px", maxWidth: "550px", bg: "neutrals.3" } },
              s ? (0, c.tZ)(l.HoD, { color: _, size: "75px", sx: { margin: "0 50%", position: "relative", left: "-37px" } }) : null,
              !s && a ? (0, c.tZ)(l.nvN, { color: "errors.5" }, a) : null,
              s || a
                ? null
                : (0, c.tZ)(
                    "div",
                    null,
                    n || (n = (0, c.tZ)(l.nvN, null, "3rd party packages used in this software along with their licenses:")),
                    (0, c.tZ)(
                      "ul",
                      null,
                      e.map(({ name: e, licenses: t, version: a }) =>
                        (0, c.tZ)(
                          l.nvN,
                          { as: "li", key: e + a, size: "small" },
                          (0, c.tZ)(l.rUS, { href: "https://www.npmjs.com/package/" + e }, e),
                          "@",
                          a,
                          ": ",
                          t
                        )
                      )
                    )
                  )
            )
          );
        };
      var p = a(328107);
      const d = () => {
        var e;
        const { routes: t } = (0, r.Xo)(),
          a = `${t.teamRoutesBasePath}/login`,
          n = (0, r.CN)(),
          s = null != (e = n.get("login")) ? e : "";
        s && n.append("email", s), n.delete("login");
        const i = `${a}?${n}`;
        return o.createElement(r.l_, { to: i });
      };
      var m = a(799852),
        g = a(929986),
        h = a(55510),
        E = a(933823),
        f = a(276376),
        x = a(19811);
      const w = () => {
        const e = (0, r.k6)(),
          { routes: t } = (0, f.Xo)();
        return o.createElement(x.j, {
          onOpenUserVault: () => {
            e.replace(t.clientRoutesBasePath);
          }
        });
      };
      var b = a(876307),
        v = a(148038),
        k = a(740300),
        y = a(501346),
        S = a(809205),
        T = a(656810),
        A = a(72133),
        N = a(488203),
        O = a(45272),
        C = a(593039);
      var R;
      var D = (function (e) {
        return (e.CODE_ERROR = "code_error"), e;
      })(D || {});
      const I = ["email_token", "totp", "u2f"],
        Z = ({ dispatchGlobal: e, setShowGenericRecoveryError: t }) => {
          const a = (0, r.k6)(),
            { routes: n } = (0, f.Xo)(),
            { translate: s } = (0, N.Z)(),
            i = (function () {
              const e = (0, v.qr)({ queryConfig: { query: k.C.getUserLogin } }, []);
              let t = "";
              return e.status === v.rq.Success && e.data && (t = e.data), t;
            })(),
            [c, _] = o.useState(""),
            [u, p] = o.useState(!1),
            [d, m] = o.useState(!0),
            [g, h] = o.useState(),
            [E, x] = o.useState(""),
            [w, Z] = o.useState(null),
            P = o.useRef(),
            L = () => k.C.requestEmailToken(),
            M = o.useCallback(async () => {
              if ("" !== i) {
                const e = await k.C.startAccountRecovery({ login: i });
                if (!e.success) return void x("");
                const t = e.verification[0]?.type;
                I.includes(t) ? x(t) : x("");
              }
            }, [i]);
          o.useEffect(
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
                const e = await k.C.registerDeviceForRecovery({ login: i, token: c });
                if ((p(!1), !e.success)) return void Z(D.CODE_ERROR);
                a.push(n.userCreateMasterPassword);
              } catch (e) {
                t(!0);
              }
            },
            V = "" === E || E === I[0];
          return (0, b.tZ)(
            "div",
            { className: "verifyAccountPanelContainer--HsKJRidmuy" },
            (0, b.tZ)(
              "div",
              { className: "content--HPbzWlOGN8" },
              (0, b.tZ)(y.r, { dispatchGlobal: e }),
              (0, b.tZ)(
                l.Ejs,
                { className: "inner--hpQi9UHEkx" },
                (0, b.tZ)(l.X6q, { size: "medium", className: "heading--SwRRkO4yt9" }, s("webapp_account_recovery_verify_account_title")),
                (0, b.tZ)(
                  l.nvN,
                  { size: "medium", color: l.colors.grey00 },
                  (() => {
                    let e = null;
                    return (
                      (e = s(
                        V
                          ? "webapp_account_recovery_security_code_description"
                          : "webapp_login_form_password_fieldset_security_code_otp_description"
                      )),
                      e
                    );
                  })()
                ),
                (0, b.tZ)(l.nvN, { className: "setEmail--m8QM72iC4D", bold: !0, size: "medium", color: l.colors.midGreen00 }, i),
                (0, b.tZ)(
                  "form",
                  { className: "form--P1i9dKGA_q", onSubmit: U },
                  (0, b.tZ)(l.rRH, {
                    autoFocus: !0,
                    value: c,
                    maxLength: 6,
                    inputMode: "numeric",
                    feedbackType: w ? "error" : void 0,
                    feedbackText: w === D.CODE_ERROR ? s("webapp_login_form_password_fieldset_security_code_error_token_not_valid") : "",
                    onChange: (e) => {
                      const t = e.target.value.replace(/\D/g, "");
                      6 === t.length ? m(!1) : m(!0), c !== t && (_(t), Z(null));
                    }
                  }),
                  (0, b.tZ)(
                    l.zxk,
                    { type: "submit", size: "large", onClick: U, className: "verifyButton--YXRqZgkug1", disabled: d || u },
                    u ? R || (R = (0, b.tZ)(l.HoD, null)) : s("webapp_account_recovery_verify_button")
                  )
                ),
                V
                  ? (0, b.tZ)(
                      "div",
                      null,
                      (0, b.tZ)(l.nvN, null, s("webapp_dashlane_authenticator_authentication_didnt_receive_code")),
                      (0, b.tZ)(
                        l.Ejs,
                        null,
                        (0, b.tZ)(
                          l.rUS,
                          {
                            onClick: async () => {
                              try {
                                (0, O.Kz)(new C.UserResendTokenEvent({})), _(""), m(!0), Z(null);
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
                          ? (0, b.tZ)(
                              l.Ejs,
                              { style: { marginTop: "24px", marginBottom: "24px", flexWrap: "nowrap" } },
                              (0, b.tZ)(A.Z, {
                                height: 18.5,
                                width: 18.5,
                                animationParams: { renderer: "svg", animationData: g.success ? S : T, loop: !1, autoplay: !0 }
                              }),
                              (0, b.tZ)(
                                l.nvN,
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
      var P = a(703267),
        L = a(383849),
        M = a.n(L),
        U = a(832718);
      let V = (function (e) {
        return (
          (e[(e.VERIFY_ACCOUNT = 0)] = "VERIFY_ACCOUNT"),
          (e[(e.CREATE_MASTER_PASSWORD = 1)] = "CREATE_MASTER_PASSWORD"),
          (e[(e.ACCOUNT_RECOVERY_REQUEST = 2)] = "ACCOUNT_RECOVERY_REQUEST"),
          e
        );
      })({});
      const B = "step--bHzEjZHWev",
        F = "stepIcon--m1fcOV0LM1",
        z = "stepActive--AWuyqApW12",
        G = "stepNonActive--bfkD23eyiV",
        W = "stepChecked--KfpXKQjMyz",
        j = "verticalLine--J5rpCcWlvj",
        q = ({ step: e }) => {
          const { translate: t } = (0, N.Z)();
          let a, n, o, r, s, i;
          switch (e) {
            case V.VERIFY_ACCOUNT:
              (a = (0, c.tZ)("div", { className: M()(F, z) }, "1")),
                (n = (0, c.tZ)("div", { className: M()(F, G) }, "2")),
                (o = (0, c.tZ)("div", { className: M()(F, G) }, "3")),
                (r = l.colors.dashGreen00),
                (s = l.colors.dashGreen00),
                (i = l.colors.dashGreen00);
              break;
            case V.CREATE_MASTER_PASSWORD:
              (a = (0, c.tZ)("div", { className: M()(F, W) }, (0, c.tZ)(l.nQG, { size: 16, color: l.colors.white }))),
                (n = (0, c.tZ)("div", { className: M()(F, z) }, "2")),
                (o = (0, c.tZ)("div", { className: M()(F, G) }, "3")),
                (r = l.colors.dashGreen02),
                (s = l.colors.dashGreen00),
                (i = l.colors.dashGreen00);
              break;
            case V.ACCOUNT_RECOVERY_REQUEST:
              (a = (0, c.tZ)("div", { className: M()(F, W) }, (0, c.tZ)(l.nQG, { size: 16, color: l.colors.white }))),
                (n = (0, c.tZ)("div", { className: M()(F, W) }, (0, c.tZ)(l.nQG, { size: 16, color: l.colors.white }))),
                (o = (0, c.tZ)("div", { className: M()(F, z) }, "3")),
                (r = l.colors.dashGreen02),
                (s = l.colors.dashGreen02),
                (i = l.colors.dashGreen00);
          }
          return (0, c.tZ)(
            U.L,
            null,
            (0, c.tZ)(
              "div",
              { className: "marketingContent--N8jldLHbmf" },
              (0, c.tZ)(
                "div",
                { className: "marketingInner--zPgP67OYQ2" },
                (0, c.tZ)(l.X6q, { caps: !0, size: "large" }, t("webapp_account_recovery_marketing_heading")),
                (0, c.tZ)(l.nvN, { sx: { paddingTop: "24px" }, size: "large" }, t("webapp_account_recovery_marketing_subheading")),
                (0, c.tZ)(
                  "div",
                  { className: "stepsContainer--RD_r0nw9HD" },
                  (0, c.tZ)(
                    "div",
                    { className: B },
                    a,
                    (0, c.tZ)(l.nvN, { sx: { padding: "12px" }, size: "large", color: r }, t("webapp_account_recovery_marketing_step_1"))
                  ),
                  (0, c.tZ)("div", { className: j }),
                  (0, c.tZ)(
                    "div",
                    { className: B },
                    n,
                    (0, c.tZ)(l.nvN, { sx: { padding: "12px" }, size: "large", color: s }, t("webapp_account_recovery_marketing_step_2"))
                  ),
                  (0, c.tZ)("div", { className: j }),
                  (0, c.tZ)(
                    "div",
                    { className: B },
                    o,
                    (0, c.tZ)(l.nvN, { sx: { padding: "12px" }, size: "large", color: i }, t("webapp_account_recovery_marketing_step_3"))
                  )
                )
              )
            )
          );
        },
        K = "panelsContainer--Ep6NC4HsfM",
        H = ({ lee: e }) => {
          const [t, a] = o.useState(!1);
          return o.createElement(
            "div",
            { className: K },
            o.createElement(q, { step: V.VERIFY_ACCOUNT }),
            o.createElement(Z, { dispatchGlobal: e.dispatchGlobal, setShowGenericRecoveryError: a }),
            o.createElement(P.H, {
              isAccountRecoveryError: t,
              handleGenericRecoveryErrorClose: () => {
                a(!1);
              }
            })
          );
        };
      var $ = a(781826);
      const X = ({ lee: e }) => {
          const t = (0, r.k6)(),
            { routes: a } = (0, f.Xo)(),
            [n, s] = o.useState(!1),
            [i, l] = o.useState("");
          return o.createElement(
            "div",
            { className: K },
            o.createElement(q, { step: V.CREATE_MASTER_PASSWORD }),
            o.createElement($.R, {
              dispatchGlobal: e.dispatchGlobal,
              onSubmit: async (e) => {
                try {
                  const n = await k.C.setupMasterPasswordForRecovery({ masterPassword: e });
                  if (!n.success) return void l(n.error.code);
                  t.push(a.userSendRequest);
                } catch (e) {
                  s(!0);
                }
              },
              createMPForAccountRecovery: !0,
              showCreateMasterPasswordError: i
            }),
            o.createElement(P.H, {
              isAccountRecoveryError: n,
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
          const { translate: a } = (0, N.Z)(),
            n = (0, r.k6)(),
            [s, i] = o.useState(!1),
            { routes: _ } = (0, f.Xo)();
          return (0, c.tZ)(
            "div",
            { className: Y.recoveryRequestPanelContainer },
            (0, c.tZ)(
              "div",
              { className: Y.content },
              (0, c.tZ)(y.r, { dispatchGlobal: e }),
              (0, c.tZ)(
                "div",
                { className: Y.inner },
                (0, c.tZ)("div", { className: Y.iconHolder }, (0, c.tZ)(l.bV6, { color: l.colors.midGreen00, size: 70 })),
                (0, c.tZ)(l.X6q, { sx: { marginTop: "32px", marginBottom: "8px" } }, a("webapp_account_recovery_request_header")),
                (0, c.tZ)(l.nvN, { color: l.colors.grey00 }, a("webapp_account_recovery_request_description")),
                (0, c.tZ)(
                  l.Ejs,
                  { sx: { marginTop: "40px" }, justifyContent: "space-between" },
                  (0, c.tZ)(
                    r.rU,
                    { className: Y.previousStepContainer, to: _.userCreateMasterPassword, replace: !0 },
                    Q || (Q = (0, c.tZ)(l.xCe, { size: 14 })),
                    (0, c.tZ)(l.nvN, { sx: { marginLeft: "10px" } }, a("webapp_account_recovery_previous_step"))
                  ),
                  (0, c.tZ)(
                    l.zxk,
                    {
                      type: "button",
                      size: "large",
                      onClick: async () => {
                        try {
                          i(!0);
                          const e = await k.C.sendRecoveryRequest();
                          if ((i(!1), !e.success)) return void t(!0);
                          n.replace(_.userPendingRequest);
                        } catch (e) {
                          t(!0);
                        }
                      },
                      className: Y.sendButton,
                      disabled: s
                    },
                    s ? J || (J = (0, c.tZ)(l.HoD, null)) : a("webapp_account_recovery_request_confirm")
                  )
                )
              )
            )
          );
        },
        te = ({ lee: e }) => {
          const [t, a] = o.useState(!1);
          return o.createElement(
            "div",
            { className: K },
            o.createElement(q, { step: V.ACCOUNT_RECOVERY_REQUEST }),
            o.createElement(ee, { dispatchGlobal: e.dispatchGlobal, setShowGenericRecoveryError: a }),
            o.createElement(P.H, {
              isAccountRecoveryError: t,
              handleGenericRecoveryErrorClose: () => {
                a(!1);
              }
            })
          );
        },
        ae = "subheading--m6CV4agX6G";
      var ne = a(3985);
      const oe = () => {
        const { translate: e } = (0, N.Z)(),
          [t, a] = o.useState(!1),
          [n, r] = o.useState(!1);
        return o.createElement(
          o.Fragment,
          null,
          o.createElement(
            l.Ejs,
            { className: "standardHeader--ZXfog_ViVz", alignItems: "center", justifyContent: "space-between" },
            o.createElement(
              l.k$b,
              null,
              o.createElement(l.D1W, { color: l.vei.DashGreen, size: l.r1z.Size39, title: e("_common_dashlane_logo_title") })
            )
          ),
          o.createElement(
            l.Ejs,
            { className: "accountRecoveryContent--NmOxECHiFv", alignItems: "center", flexDirection: "column" },
            o.createElement("img", {
              src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzUyIiBoZWlnaHQ9IjIwNiIgdmlld0JveD0iMCAwIDM1MiAyMDYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0zMS41IDEyQzMxLjUgNS4zNzI1OCAzNi44NzI2IDAgNDMuNSAwSDMwNy41QzMxNC4xMjcgMCAzMTkuNSA1LjM3MjU4IDMxOS41IDEyVjE3OEgzMS41VjEyWiIgZmlsbD0iI0Q5RTZFOSIvPgo8cGF0aCBkPSJNMzUuNSAxNEMzNS41IDguNDc3MTUgMzkuOTc3MiA0IDQ1LjUgNEgzMDUuNUMzMTEuMDIzIDQgMzE1LjUgOC40NzcxNSAzMTUuNSAxNFYxNzhIMzUuNVYxNFoiIGZpbGw9IiMwRTM1M0QiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNzguNzUgNzYuOEwxNzguNzUgNzkuNDUwOEwxNzIuOCA4My40MTc0Vjk3LjhIMTYxLjhWMTAzLjhIMTc1LjhIMTc4LjhWMTAwLjhWNzYuOEgxNzguNzVaIiBmaWxsPSIjQ0ZFMEU0Ii8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTkwLjYyMyAxMTguMjhDMTg2LjUxMSAxMjEuMjUgMTgxLjQ2IDEyMyAxNzYgMTIzQzE2Mi4xOTMgMTIzIDE1MSAxMTEuODA3IDE1MSA5OEMxNTEgODQuMTkyOSAxNjIuMTkzIDczIDE3NiA3M0MxODkuODA3IDczIDIwMSA4NC4xOTI5IDIwMSA5OEMyMDEgMTAzLjQ2IDE5OS4yNSAxMDguNTExIDE5Ni4yOCAxMTIuNjIzTDIwMC41NjcgMTE2LjkxQzIwNC42MDEgMTExLjY3NyAyMDcgMTA1LjExOSAyMDcgOThDMjA3IDgwLjg3OTIgMTkzLjEyMSA2NyAxNzYgNjdDMTU4Ljg3OSA2NyAxNDUgODAuODc5MiAxNDUgOThDMTQ1IDExNS4xMjEgMTU4Ljg3OSAxMjkgMTc2IDEyOUMxODMuMTE4IDEyOSAxODkuNjc3IDEyNi42MDEgMTk0LjkxIDEyMi41NjdMMTkwLjYyMyAxMTguMjhaIiBmaWxsPSIjQ0ZFMEU0Ii8+CjxwYXRoIGQ9Ik0wLjUgMTc4SDM1MS41VjE5MEMzNTEuNSAxOTMuMzE0IDM0OC44MTQgMTk2IDM0NS41IDE5Nkg2LjVDMy4xODYyOSAxOTYgMC41IDE5My4zMTQgMC41IDE5MFYxNzhaIiBmaWxsPSIjRDlFNkU5Ii8+Cjwvc3ZnPgo=",
              alt: e("webapp_account_recovery_request_laptop_alt_tag")
            }),
            o.createElement("h1", { className: "heading--uoul9OhZJX" }, e("webapp_account_recovery_request_sent_header")),
            o.createElement("p", { className: ae }, e("webapp_account_recovery_request_sent_recieve_email")),
            o.createElement("p", { className: ae }, e("webapp_account_recovery_request_sent_contact_admin")),
            o.createElement(
              l.zxk,
              {
                className: "cancelRequestButton--xkP9XaRiYO",
                nature: "secondary",
                type: "button",
                onClick: () => {
                  a(!0);
                }
              },
              e("webapp_account_recovery_request_sent_label")
            ),
            o.createElement(ne.w, {
              showCancelRequestDialog: t,
              handleDismiss: () => {
                a(!1);
              },
              handleShowGenericRecoveryError: () => {
                r(!0);
              }
            }),
            o.createElement(P.H, {
              isAccountRecoveryError: n,
              handleGenericRecoveryErrorClose: () => {
                r(!1);
              }
            })
          )
        );
      };
      function re({ path: e }) {
        return o.createElement(
          r.GB,
          { path: e },
          o.createElement(
            r.rs,
            null,
            o.createElement(r.l_, { exact: !0, from: `${e}/`, to: `${e}/device-registration` }),
            o.createElement(r.Vy, {
              permission: (e) => !e.loggedIn,
              redirectPath: "/",
              exact: !0,
              path: `${e}/device-registration`,
              component: H
            }),
            o.createElement(r.Vy, {
              permission: (e) => !e.loggedIn,
              redirectPath: "/",
              exact: !0,
              path: `${e}/create-master-password`,
              component: X
            }),
            o.createElement(r.Vy, {
              permission: (e) => !e.loggedIn,
              redirectPath: "/",
              exact: !0,
              path: `${e}/send-request`,
              component: te
            }),
            o.createElement(r.Vy, {
              permission: (e) => !e.loggedIn,
              redirectPath: "/",
              exact: !0,
              path: `${e}/pending-request`,
              component: oe
            }),
            o.createElement(r.Vy, { exact: !0, path: `${e}/change-master-password`, component: w })
          )
        );
      }
      var se = a(15192),
        ie = a(764130),
        le = a(201705),
        ce = a(482598),
        _e = a(55548),
        ue = a(147484),
        pe = a(797483),
        de = a(13403);
      const me = {
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
        ge = ({ onSubmit: e, onCancel: t, error: a, accountType: n }) => {
          const { translate: s } = (0, N.Z)(),
            { trackPageView: _ } = (0, _e.D)(),
            u = (0, r.Xo)();
          (0, o.useEffect)(() => {
            _({ pageView: C.PageView.LoginMasterPasswordAccountRecoveryEnterRecoveryKey });
          }, []);
          const {
            inputValue: p,
            isInputValid: d,
            handleChangeInputValue: m
          } = (function () {
            const [e, t] = (0, o.useState)("");
            return {
              inputValue: e,
              isInputValid: e.length === pe.Yh,
              handleChangeInputValue: (e) => {
                const a = ("string" == typeof e ? e : e.target.value).replaceAll("-", "").toUpperCase();
                t(a);
              }
            };
          })();
          return (0, c.tZ)(
            o.Fragment,
            null,
            (0, c.tZ)(l._m8, { size: 77, color: "ds.text.brand.quiet", sx: { margin: "0px 0 53px 12px" } }),
            (0, c.tZ)(
              b.nv,
              { color: "ds.text.neutral.quiet", sx: { marginBottom: "8px" } },
              s(me.ACCOUNT_RECOVERY_STEP_COUNT, { count: 1, total: 2 })
            ),
            (0, c.tZ)(b.X6, { as: "h1", textStyle: "ds.title.section.large", sx: { margin: "0 0 24px 0" } }, s(me.CONFIRM_ARK_STEP_TITLE)),
            (0, c.tZ)(b.nv, { sx: { marginBottom: "34px" } }, s(me.CONFIRM_ARK_STEP_DESCRIPTION)),
            (0, c.tZ)(
              l.k$b,
              { sx: { width: "100%", marginBottom: "36px" } },
              (0, c.tZ)(ue.C, { value: p, onChange: m, error: a && s(me[null != a ? a : "GENERIC_ERROR"]) })
            ),
            (0, c.tZ)(
              l.Ejs,
              { justifyContent: "flex-end", sx: { width: "100%" }, flexDirection: "row" },
              (0, c.tZ)(
                b.zx,
                {
                  intensity: "quiet",
                  mood: "neutral",
                  sx: { marginRight: "8px" },
                  onClick: () => {
                    t(), (0, O.Kz)(new C.UserUseAccountRecoveryKeyEvent({ flowStep: C.FlowStep.Cancel })), (0, r.uX)(i.TT);
                  }
                },
                s(me.CONFIRM_ARK_STEP_CANCEL)
              ),
              (0, c.tZ)(
                b.zx,
                {
                  mood: "brand",
                  disabled: !d,
                  onClick: () => {
                    "invisibleMasterPassword" === n && u.store.dispatch((0, de.zi)(i.aS)), e({ recoveryKey: p });
                  }
                },
                s(me.CONFIRM_ARK_STEP_CONTINUE)
              )
            )
          );
        };
      var he,
        Ee = a(911966),
        fe = a(850857);
      const xe = ({ onSubmit: e, onCancel: t }) => {
          const { translate: a } = (0, N.Z)(),
            { trackPageView: n } = (0, _e.D)(),
            [s, c] = (0, o.useState)(!1),
            _ = (0, r.Xo)();
          return (
            (0, o.useEffect)(() => {
              n({ pageView: C.PageView.LoginMasterPasswordAccountRecoveryCreateNewMp });
            }, []),
            (0, b.tZ)(
              l.Ejs,
              { sx: { flexDirection: "column", alignItems: "start", textAlign: "left" } },
              (0, b.tZ)(fe.x, {
                showPasswordTipsDialog: s,
                handleDismiss: () => {
                  c(!1);
                }
              }),
              he || (he = (0, b.tZ)(l._m8, { color: "ds.text.brand.quiet", size: 72 })),
              (0, b.tZ)(
                b.nv,
                { color: "ds.text.neutral.quiet", sx: { marginBottom: "8px" } },
                a("login_confirm_account_recovery_key_step_count", { count: 2, total: 2 })
              ),
              (0, b.tZ)(
                b.X6,
                { as: "h1", textStyle: "ds.title.section.large", sx: { margin: "0 0 24px 0" } },
                a("login_account_recovery_key_create_password_step_title")
              ),
              (0, b.tZ)(b.nv, null, a("login_account_recovery_key_create_password_step_help_1")),
              (0, b.tZ)(b.nv, { sx: { margin: "16px 0" } }, a("login_account_recovery_key_create_password_step_help_2")),
              (0, b.tZ)(
                l.rUS,
                {
                  href: "#",
                  role: "button",
                  onClick: (e) => {
                    e.preventDefault(), c(!0);
                  },
                  sx: { display: "block", margin: "0 0 24px 0", color: "ds.text.brand.quiet" }
                },
                a("webapp_account_security_settings_changemp_panel_infotext")
              ),
              (0, b.tZ)(Ee.f, {
                onDismiss: () => {
                  t(), (0, O.Kz)(new C.UserUseAccountRecoveryKeyEvent({ flowStep: C.FlowStep.Cancel })), (0, r.uX)(i.TT);
                },
                onSubmit: (t) => {
                  _.store.dispatch((0, de.zi)(i.aS)), e({ password: t });
                },
                primaryButtonTitle: a("_common_action_continue"),
                secondaryButtonTitle: a("_common_action_cancel"),
                createPasswordInputLabel: a("login_account_recovery_key_create_password_step_password_field_label"),
                createPasswordPlaceholderLabel: a("login_account_recovery_key_create_password_step_password_field_placeholder"),
                confirmPasswordInputLabel: a("login_account_recovery_key_create_password_step_confirm_password_field_label"),
                confirmPasswordPlaceholderLabel: a("login_account_recovery_key_create_password_step_confirm_password_field_placeholder")
              })
            )
          );
        },
        we = () => {
          const { translate: e } = (0, N.Z)();
          return (0, b.tZ)(
            l.Ejs,
            { sx: { flexDirection: "column", margin: "0 auto", textAlign: "center", alignItems: "center" } },
            (0, b.tZ)(l.HoD, { size: 78, color: b.O9.lightTheme.ds.text.brand.quiet, strokeWidth: 1 }),
            (0, b.tZ)(
              b.X6,
              { as: "h1", textStyle: "ds.title.section.large", sx: { margin: "61px 0 24px" } },
              e("login_account_recovery_key_processing_request")
            )
          );
        };
      var be = a(611433),
        ve = a(788355),
        ke = a(110551),
        ye = a(718763),
        Se = a(902092);
      const Te = {
          TOKEN_NOT_VALID: "webapp_account_security_settings_two_factor_authentication_turn_off_authenticator_invalid_security_code",
          TOKEN_EXPIRED: "webapp_login_form_password_fieldset_security_code_error_token_expired",
          TOKEN_TOO_MANY_ATTEMPTS: "webapp_login_form_password_fieldset_security_code_error_token_too_many_attempts",
          TOKEN_ACCOUNT_LOCKED: "webapp_login_form_password_fieldset_security_code_error_token_account_locked",
          UNKNOWN_ERROR: "webapp_login_form_password_fieldset_security_code_error_unkown",
          NETWORK_ERROR: "webapp_login_form_password_fieldset_network_error_offline"
        },
        Ae = ({
          error: e,
          isLoading: t,
          isDashlaneAuthenticatorAvailable: a,
          resendEmailToken: n,
          switchToDashlaneAuthenticator: s,
          submitEmailToken: c,
          cancelAccountRecoveryKey: _,
          clearInputError: u
        }) => {
          var p;
          const { translate: d } = (0, N.Z)(),
            [m, g] = (0, o.useState)(!1),
            h = { display: "flex", flexDirection: "column", gap: "4px", lineHeight: "20px" },
            {
              setFieldValue: E,
              handleSubmit: f,
              values: { emailToken: x }
            } = (0, ve.TA)({
              initialValues: { emailToken: "" },
              onSubmit: ({ emailToken: e }) => {
                c({ emailToken: e, deviceName: ke.getDefaultDeviceName() });
              }
            });
          return (0, b.tZ)(
            "form",
            { onSubmit: f },
            (0, b.tZ)(Se.ae, {
              title: d("webapp_login_form_password_fieldset_security_code_description"),
              securityToken: x,
              maxLength: ye.N3,
              onTokenInputChange: (e) => {
                const {
                  target: { value: t }
                } = e;
                u(), E("emailToken", ((e) => e.replace(/\D/g, ""))(t)), t.length === ye.N3 && f();
              },
              errorMessage: e ? d(null != (p = Te[e]) ? p : Te.UNKNOWN_ERROR) : void 0
            }),
            (0, b.tZ)(
              l.Ejs,
              { flexDirection: "row", sx: { margin: "24px 0px 16px" } },
              (0, b.tZ)(
                l.nvN,
                { color: "ds.text.neutral.quiet", sx: { ...h, marginRight: "4px" } },
                d("webapp_dashlane_authenticator_authentication_didnt_receive_code")
              ),
              (0, b.tZ)(
                l.rUS,
                {
                  onClick: () => {
                    (0, O.Kz)(new C.UserResendTokenEvent({})),
                      n(),
                      g(!0),
                      setTimeout(() => {
                        g(!1);
                      }, ye.Rq);
                  },
                  color: "ds.text.brand.quiet",
                  sx: { marginRight: "4px" }
                },
                d("webapp_login_form_password_fieldset_resend_token")
              )
            ),
            m
              ? (0, b.tZ)(
                  l.Ejs,
                  { style: { marginTop: "24px", marginBottom: "24px" } },
                  (0, b.tZ)(A.Z, {
                    height: 18.5,
                    width: 18.5,
                    animationParams: { renderer: "svg", animationData: S, loop: !1, autoplay: !0 }
                  }),
                  (0, b.tZ)(
                    l.nvN,
                    { color: "ds.text.positive.quiet", sx: { marginLeft: "4px" } },
                    d("webapp_login_form_password_fieldset_security_code_resent")
                  )
                )
              : null,
            a
              ? (0, b.tZ)(
                  l.Ejs,
                  { flexDirection: "row" },
                  (0, b.tZ)(
                    l.nvN,
                    { color: "ds.text.neutral.quiet", sx: { ...h, marginRight: "4px" } },
                    d("webapp_dashlane_authenticator_authentication_cant_access_your_email")
                  ),
                  (0, b.tZ)(
                    l.rUS,
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
            (0, b.tZ)(
              "div",
              { sx: { display: "flex", flexDirection: "row", justifyContent: "flex-end", marginTop: "42px" } },
              (0, b.tZ)(
                b.zx,
                {
                  id: "cancel-button",
                  "data-testid": "cancel-button",
                  mood: "neutral",
                  intensity: "quiet",
                  sx: { marginRight: "16px" },
                  onClick: () => {
                    _(), (0, O.Kz)(new C.UserUseAccountRecoveryKeyEvent({ flowStep: C.FlowStep.Cancel })), (0, r.uX)(i.TT);
                  }
                },
                d("_common_action_cancel")
              ),
              (0, b.tZ)(
                b.zx,
                {
                  type: "submit",
                  id: "extng-submit-email-token-button",
                  "data-testid": "login-button",
                  isLoading: t,
                  disabled: x.length < 6,
                  onClick: () => f()
                },
                d("login_verify_your_identity_step_button")
              )
            )
          );
        };
      var Ne = a(581173);
      const Oe = {
          EMPTY_OTP: "webapp_login_form_password_fieldset_security_code_error_empty_otp",
          OTP_NOT_VALID: "webapp_account_security_settings_two_factor_authentication_turn_off_authenticator_invalid_security_code",
          OTP_ALREADY_USED: "webapp_login_form_password_fieldset_security_code_error_otp_already_used",
          OTP_TOO_MANY_ATTEMPTS: "webapp_login_form_password_fieldset_security_code_error_token_too_many_attempts",
          UNKNOWN_ERROR: "webapp_login_form_password_fieldset_security_code_error_unkown",
          NETWORK_ERROR: "webapp_login_form_password_fieldset_network_error_offline"
        },
        Ce = RegExp("^[0-9]{6}$"),
        Re = { display: "flex", flexDirection: "column", gap: "4px", lineHeight: "20px" },
        De = ({
          error: e,
          isLoading: t,
          submitTotp: a,
          changeTwoFactorAuthenticationOtpType: n,
          cancelAccountRecoveryKey: s,
          clearInputError: c,
          login: _
        }) => {
          var u;
          const { translate: p } = (0, N.Z)(),
            { routes: d } = (0, r.Xo)(),
            [m, g] = (0, o.useState)(!1),
            h = (0, o.useRef)();
          (0, o.useEffect)(() => {
            e && (g(h.current === e && e === Ne._V[Ne._V.OTP_NOT_VALID]), (h.current = e));
          }, [e]);
          const {
            setFieldValue: E,
            handleSubmit: f,
            values: { twoFactorAuthenticationOtpValue: x }
          } = (0, ve.TA)({
            initialValues: { twoFactorAuthenticationOtpValue: "" },
            onSubmit: ({ twoFactorAuthenticationOtpValue: e }) => {
              a({ twoFactorAuthenticationOtpValue: e });
            }
          });
          return (0, b.tZ)(
            "form",
            { onSubmit: f },
            (0, b.tZ)(Se.ae, {
              title: p("webapp_login_form_password_fieldset_security_code_otp_description"),
              securityToken: x,
              maxLength: ye.N3,
              onTokenInputChange: (e) => {
                const {
                  target: { value: t }
                } = e;
                c(), E("twoFactorAuthenticationOtpValue", ((e) => e.replace(/\D/g, ""))(t)), Ce.test(t) && f();
              },
              errorMessage: e ? p(null != (u = Oe[e]) ? u : Oe.UNKNOWN_ERROR) : void 0
            }),
            m
              ? (0, b.tZ)(b.ke, {
                  sx: { marginTop: "24px" },
                  title: p.markup(
                    "webapp_two_factor_authentication_sync_devices_time_infobox_markup",
                    { supportArticleLink: i.fL },
                    { linkTarget: "_blank" }
                  ),
                  mood: "brand",
                  size: "small"
                })
              : null,
            (0, b.tZ)(
              l.Ejs,
              { flexDirection: "row", sx: { margin: "24px 0px 16px" } },
              (0, b.tZ)(
                l.nvN,
                { color: "ds.text.neutral.quiet", sx: { ...Re, marginRight: "4px" } },
                p("webapp_two_factor_authentication_cant_access_your_app")
              ),
              (0, b.tZ)(
                l.rUS,
                { onClick: () => n({ twoFactorAuthenticationOtpType: "backupCode" }), color: "ds.text.brand.quiet", target: "_self" },
                p("webapp_two_factor_authentication_use_backup_code")
              )
            ),
            (0, b.tZ)(
              l.Ejs,
              { flexDirection: "row" },
              (0, b.tZ)(
                l.nvN,
                { color: "ds.text.neutral.quiet", sx: { ...Re, marginRight: "4px" } },
                p("webapp_two_factor_authentication_lost_your_phone")
              ),
              (0, b.tZ)(
                r.OL,
                { color: "ds.text.brand.standard", to: d.recover2faCodes(_), target: "_blank", rel: "noopener noreferrer" },
                p("webapp_two_factor_authentication_reset_2fa")
              )
            ),
            (0, b.tZ)(
              "div",
              { sx: { display: "flex", flexDirection: "row", justifyContent: "flex-end", marginTop: "40px" } },
              (0, b.tZ)(
                b.zx,
                {
                  id: "cancel-button",
                  "data-testid": "cancel-button",
                  mood: "neutral",
                  intensity: "quiet",
                  sx: { marginRight: "16px" },
                  onClick: () => {
                    s(), (0, O.Kz)(new C.UserUseAccountRecoveryKeyEvent({ flowStep: C.FlowStep.Cancel })), (0, r.uX)(i.TT);
                  }
                },
                p("_common_action_cancel")
              ),
              (0, b.tZ)(
                b.zx,
                { type: "submit", "data-testid": "submitTotp", isLoading: t, disabled: x.length < 6 },
                p("login_verify_your_identity_step_button")
              )
            )
          );
        },
        Ie = {
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
        Pe = ({
          error: e,
          isLoading: t,
          submitBackupCode: a,
          changeTwoFactorAuthenticationOtpType: n,
          cancelAccountRecoveryKey: s,
          login: c
        }) => {
          var _;
          const { translate: u } = (0, N.Z)(),
            { routes: p } = (0, r.Xo)(),
            d = (0, o.useRef)(null),
            {
              setFieldValue: m,
              handleSubmit: g,
              values: { twoFactorAuthenticationOtpValue: h }
            } = (0, ve.TA)({
              initialValues: { twoFactorAuthenticationOtpValue: "" },
              onSubmit: ({ twoFactorAuthenticationOtpValue: e }) => {
                a({ twoFactorAuthenticationOtpValue: e }), d.current?.focus();
              }
            });
          return (0, b.tZ)(
            "form",
            { onSubmit: g },
            (0, b.tZ)(
              l.nvN,
              { color: "ds.text.neutral.quiet", sx: { marginBottom: "16px" } },
              u("webapp_two_factor_authentication_use_backup_codes")
            ),
            (0, b.tZ)(b.qo, {
              value: h,
              label: u("webapp_two_factor_authentication_backup_code_label"),
              onChange: (e) => {
                const {
                  target: { value: t }
                } = e;
                m("twoFactorAuthenticationOtpValue", t);
              },
              error: !!e,
              ref: d,
              feedback: e ? { id: "login-feedback-text", text: u(null != (_ = Ie[e]) ? _ : Ie.UNKNOWN_ERROR) } : void 0,
              autoFocus: !0
            }),
            (0, b.tZ)(
              l.Ejs,
              { flexDirection: "row", sx: { margin: "24px 0px 16px" } },
              (0, b.tZ)(
                l.nvN,
                { color: "ds.text.neutral.quiet", sx: { ...Ze, marginRight: "4px" } },
                u("webapp_two_factor_authentication_cant_access_your_backup_codes")
              ),
              (0, b.tZ)(
                l.rUS,
                { onClick: () => n({ twoFactorAuthenticationOtpType: "totp" }), target: "_self", color: "ds.text.brand.quiet" },
                u("webapp_two_factor_authentication_use_6_digits_code")
              )
            ),
            (0, b.tZ)(
              l.Ejs,
              { flexDirection: "row" },
              (0, b.tZ)(
                l.nvN,
                { color: "ds.text.neutral.quiet", sx: { ...Ze, marginRight: "4px" } },
                u("webapp_two_factor_authentication_lost_your_backup_codes")
              ),
              (0, b.tZ)(
                r.OL,
                { to: p.recover2faCodes(c), target: "_blank", rel: "noopener noreferrer", color: "ds.text.brand.standard" },
                u("webapp_two_factor_authentication_reset_2fa")
              )
            ),
            (0, b.tZ)(
              "div",
              { sx: { display: "flex", flexDirection: "row", justifyContent: "flex-end", marginTop: "40px" } },
              (0, b.tZ)(
                b.zx,
                {
                  id: "cancel-button",
                  "data-testid": "cancel-button",
                  mood: "neutral",
                  intensity: "quiet",
                  sx: { marginRight: "16px" },
                  onClick: () => {
                    s(), (0, O.Kz)(new C.UserUseAccountRecoveryKeyEvent({ flowStep: C.FlowStep.Cancel })), (0, r.uX)(i.TT);
                  }
                },
                u("_common_action_cancel")
              ),
              (0, b.tZ)(
                b.zx,
                { type: "submit", isLoading: t, "data-testid": "submitBackupCode" },
                u("login_verify_your_identity_step_button")
              )
            )
          );
        },
        Le = {
          generic: "_common_generic_error",
          [Ne._V[Ne._V.DASHLANE_AUTHENTICATOR_PUSH_NOTIFICATION_DENIED]]: "webapp_dashlane_authenticator_authentication_error_denied",
          [Ne._V[Ne._V.TOKEN_EXPIRED]]: "webapp_dashlane_authenticator_authentication_error_timeout"
        },
        Me = ({ cancelAccountRecoveryKey: e, error: t, resendPushNotification: a, switchToEmailToken: n }) => {
          var s;
          const { translate: c } = (0, N.Z)(),
            _ = { display: "flex", flexDirection: "column", gap: "4px", lineHeight: "20px" };
          return (0, b.tZ)(
            o.Fragment,
            null,
            (0, b.tZ)(
              b.X6,
              { as: "h2", color: "ds.text.neutral.catchy", textStyle: "ds.title.section.medium" },
              c("webapp_dashlane_authenticator_authentication_title")
            ),
            t
              ? (0, b.tZ)(
                  l.Ejs,
                  { flexDirection: "column", sx: { margin: "32px 0px" } },
                  (0, b.tZ)(
                    "div",
                    null,
                    (0, b.tZ)(A.Z, {
                      height: 88,
                      width: 88,
                      animationParams: { renderer: "svg", animationData: T, loop: !1, autoplay: !0 }
                    })
                  ),
                  (0, b.tZ)(
                    l.nvN,
                    { size: "small", color: "ds.text.danger.quiet", sx: { ..._, marginTop: "16px " } },
                    c(t && null != (s = Le[t]) ? s : Le.generic)
                  )
                )
              : (0, b.tZ)(l.HoD, {
                  "data-testid": "dashlane-authenticator-loading-icon",
                  size: "88px",
                  color: "ds.container.expressive.brand.catchy.active",
                  sx: { margin: "32px 0px" }
                }),
            (0, b.tZ)(
              l.Ejs,
              { flexDirection: "row" },
              (0, b.tZ)(
                l.nvN,
                { color: "ds.text.neutral.quiet", sx: { ..._, paddingRight: "4px" } },
                c("webapp_dashlane_authenticator_authentication_cant_access_your_app")
              ),
              (0, b.tZ)(
                l.rUS,
                {
                  target: "_blank",
                  rel: "noopener noreferrer",
                  onClick: () => {
                    n();
                  },
                  color: "ds.text.brand.standard"
                },
                c("webapp_dashlane_authenticator_authentication_send_code_by_email_link")
              )
            ),
            (0, b.tZ)(
              "div",
              { sx: { display: "flex", flexDirection: "row", justifyContent: "flex-end", marginTop: "40px" } },
              (0, b.tZ)(
                b.zx,
                {
                  id: "cancel-button",
                  "data-testid": "cancel-button",
                  mood: "neutral",
                  intensity: "quiet",
                  sx: { marginRight: "16px" },
                  onClick: () => {
                    e(), (0, O.Kz)(new C.UserUseAccountRecoveryKeyEvent({ flowStep: C.FlowStep.Cancel })), (0, r.uX)(i.TT);
                  }
                },
                c("_common_action_cancel")
              ),
              t
                ? (0, b.tZ)(
                    b.zx,
                    {
                      onClick: () => {
                        a();
                      }
                    },
                    c("webapp_dashlane_authenticator_authentication_send_another_push_button")
                  )
                : null
            )
          );
        },
        Ue = (e) => {
          const { translate: t } = (0, N.Z)(),
            a = (0, m.k)(ie.j, "recoveryFlowStatus"),
            { cancelRecoveryFlow: n } = (0, ce.u)(ie.j),
            o = (0, m.k)(be.i, "identityVerificationFlowStatus"),
            {
              submitEmailToken: r,
              resendEmailToken: s,
              switchToDashlaneAuthenticator: i,
              changeTwoFactorAuthenticationOtpType: l,
              clearError: c,
              resendPushNotification: _,
              submitTotp: u,
              submitBackupCode: p,
              switchToEmailToken: d
            } = (0, ce.u)(be.i),
            g = () => {
              o.data?.error && c();
            };
          return (0, b.tZ)(
            "div",
            null,
            (0, b.tZ)(
              b.X6,
              { as: "h1", textStyle: "ds.title.section.large", color: "ds.text.neutral.catchy", sx: { marginBottom: "32px" } },
              t("login_verify_your_identity_step_title")
            ),
            a.data?.step === le.G.IdentityVerification
              ? (0, b.tZ)(b.nv, { textStyle: "ds.body.standard.strong", sx: { marginBottom: "16px" } }, a.data.login, " ")
              : null,
            (() => {
              if (a.data?.step === le.G.IdentityVerification)
                switch (o.data?.step) {
                  case "EmailTokenStep":
                    return (0, b.tZ)(Ae, {
                      clearInputError: g,
                      resendEmailToken: s,
                      submitEmailToken: r,
                      switchToDashlaneAuthenticator: i,
                      cancelAccountRecoveryKey: n,
                      ...o.data
                    });
                  case "DashlaneAuthenticatorStep":
                    return (0, b.tZ)(Me, { cancelAccountRecoveryKey: n, resendPushNotification: _, switchToEmailToken: d, ...o.data });
                  case "TwoFactorAuthenticationOtpStep":
                    return void 0 !== o.data.twoFactorAuthenticationOtpType && "backupCode" === o.data.twoFactorAuthenticationOtpType
                      ? (0, b.tZ)(Pe, {
                          submitBackupCode: p,
                          changeTwoFactorAuthenticationOtpType: l,
                          cancelAccountRecoveryKey: n,
                          ...o.data,
                          login: e.login
                        })
                      : (0, b.tZ)(De, {
                          submitTotp: u,
                          changeTwoFactorAuthenticationOtpType: l,
                          cancelAccountRecoveryKey: n,
                          clearInputError: g,
                          ...o.data,
                          login: e.login
                        });
                  default:
                    return null;
                }
            })()
          );
        };
      var Ve,
        Be,
        Fe = a(295087);
      const ze = () => {
        var e;
        const { cancelRecoveryFlow: t, submitRecoveryKey: a, confirmNewPassword: n } = (0, ce.u)(ie.j),
          o = (0, m.k)(ie.j, "recoveryFlowStatus");
        return (0, b.tZ)(
          U.L,
          { backgroundColor: "ds.background.default" },
          (0, b.tZ)(
            l.Ejs,
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
              const r = o.data;
              if (!r) return (0, b.tZ)(l.HoD, { size: 78, color: b.O9.lightTheme.ds.text.brand.quiet, strokeWidth: 1 });
              const s = r.step;
              switch (s) {
                case void 0:
                case le.G.InitRecovery:
                  return null;
                case le.G.IdentityVerification:
                  return (0, b.tZ)(Ue, { login: r.login });
                case le.G.EnterRecoveryKey:
                  return (0, b.tZ)(ge, { ...r, onSubmit: a, onCancel: t });
                case le.G.ChangeMasterPassword:
                  return e || (e = (0, b.tZ)(xe, { onSubmit: n, onCancel: t }));
                case le.G.Finalising:
                  return Ve || (Ve = (0, b.tZ)(we, null));
                case le.G.Success:
                case le.G.Failure:
                  return Be || (Be = (0, b.tZ)(se.l_, { to: i.aS }));
                default:
                  return (0, Fe.U)(s);
              }
            })()
          )
        );
      };
      function Ge({ path: e }) {
        const t = (0, m.k)(g.V, "authenticationFlowStatus"),
          a = (0, E.j)();
        return o.createElement(
          r.GB,
          { path: [`${e}/admin-assisted-recovery`, `${e}/account-recovery-key`] },
          o.createElement(re, { path: `${e}/admin-assisted-recovery` }),
          o.createElement(r.Vy, {
            exact: !0,
            path: `${e}/account-recovery-key`,
            component:
              "MasterPasswordStep" === t.data?.step || "DeviceToDeviceAuthenticationStep" === t.data?.step || a === h.sM.Open ? ze : void 0
          })
        );
      }
      const We = () => o.createElement(U.L, null, o.createElement("div", { className: "illustration--Av9l1deedh" })),
        je = () => {
          const { translate: e } = (0, N.Z)();
          return o.createElement(
            U.L,
            null,
            o.createElement(
              "div",
              { className: "marketingContent--bWK28oFGE3" },
              o.createElement(
                "div",
                { className: "marketingInner--EcSRAo0mTh" },
                o.createElement(
                  b.nv,
                  { color: "ds.text.neutral.catchy", textStyle: "ds.specialty.brand.medium", style: { marginBottom: "24px" } },
                  e("webapp_auth_panel_marketing_heading")
                ),
                o.createElement(
                  b.nv,
                  { className: "subtitle--SNiHHCj3Da", color: "ds.text.neutral.standard" },
                  e("webapp_auth_panel_marketing_subtitle")
                )
              )
            )
          );
        };
      var qe = a(93437),
        Ke = a(342868);
      const He = () => {
        var e;
        const { translate: t } = (0, N.Z)(),
          { search: a } = (0, r.TH)(),
          n = Ke.parse(a),
          { getInviteLinkData: s, inviteLinkData: i } = (0, qe.h)(),
          c = null != (e = n.team) ? e : "";
        (0, o.useEffect)(() => {
          c && s(c);
        }, [s, c]);
        const _ = i?.displayName;
        return (0, b.tZ)(
          U.L,
          null,
          (0, b.tZ)(
            "div",
            { sx: { paddingLeft: "80px", paddingRight: "80px", width: "100%" } },
            (0, b.tZ)(
              l.Ejs,
              { gap: 4, sx: { paddingTop: "240px", maxWidth: "66%", minWidth: "320px" } },
              (0, b.tZ)(
                l.X6q,
                {
                  color: "ds.text.neutral.catchy",
                  size: "large",
                  sx: { textTransform: "uppercase", em: { color: "ds.text.brand.standard", fontStyle: "inherit" } }
                },
                _
                  ? (0, b.tZ)("div", null, t.markup("webapp_auth_panel_tsup_company_markup", { companyName: `*${_}*` }))
                  : (0, b.tZ)("div", null, t("webapp_auth_panel_tsup_generic"))
              ),
              (0, b.tZ)(l.nvN, { color: "ds.text.neutral.quiet", size: "large" }, t("webapp_auth_panel_tsup_subtitle"))
            )
          )
        );
      };
      var $e = a(882772);
      function Xe() {
        return (0, v.qr)({ queryConfig: { query: k.C.getLoginNotifications }, liveConfig: { live: k.C.liveLoginNotifications } }, []);
      }
      const Ye = () => {
        const [e, t] = (0, o.useState)(null),
          { translate: a } = (0, N.Z)(),
          n = Xe(),
          r = n.status === v.rq.Success && n.data;
        (0, o.useEffect)(() => {
          r && r.length > 0
            ? t(
                r.map((e) =>
                  ((e, t) => {
                    switch (e) {
                      case $e.A.SSO_FEATURE_BLOCKED:
                        return { message: a("webapp_login_notification_sso_feature_blocked"), severity: l.BLW.WARNING };
                      case $e.A.SSO_SETUP_ERROR:
                        return { message: a("webapp_login_notification_sso_setup_error"), severity: l.BLW.WARNING };
                      case $e.A.RELOGIN_NEEDED:
                        return { message: a("webapp_login_notification_re_login"), severity: l.BLW.STRONG };
                      case $e.A.TEAM_ACCEPTANCE_SUCCESS:
                        return { message: a("standalone_account_creation_error_invite_link_acceptance_success"), severity: l.BLW.SUCCESS };
                      case $e.A.TEAM_ACCEPTANCE_ERROR:
                        return { message: a("standalone_account_creation_error_invite_link_acceptance_failed"), severity: l.BLW.WARNING };
                      case $e.A.UNKNOWN_ERROR:
                      default:
                        return { message: a("webapp_login_notification_unknown_error", { message: t }), severity: l.BLW.WARNING };
                    }
                  })(e.type, e.message)
                )
              )
            : t(null);
        }, [r]);
        const s = () => {
          k.C.clearAllStoredLoginNotification();
        };
        return o.createElement(
          l.YcA,
          null,
          e &&
            e.length > 0 &&
            e.map((e, t) =>
              o.createElement(
                l.bZj,
                { key: `${t}-${e.message}`, severity: e.severity, closeIconName: a("_common_alert_dismiss_button"), onClose: s },
                e.message
              )
            )
        );
      };
      var Qe = a(421548);
      const Je = ({ containerHeight: e = "100vh", customMargin: t, customAnimationHeight: a = 150, customAnimationWidth: n = 150 }) =>
        o.createElement(
          l.Ejs,
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
          o.createElement(A.Z, { height: a, width: n, animationParams: { renderer: "svg", animationData: Qe, loop: !0, autoplay: !0 } })
        );
      var et = a(754793),
        tt = a(365580),
        at = a(561605),
        nt = a(210994),
        ot = a(915622);
      const rt = ({ platform: e }) => {
          const t = { height: 36, width: 36 };
          switch (e) {
            case "android":
              return o.createElement(l.j7I, { "aria-hidden": !0, viewBox: "0 0 24 30", ...t });
            case "windows":
              return o.createElement(l.WIA, { "aria-hidden": !0, viewBox: "0 0 28 28", ...t });
            case "macosx":
            case "iphone":
            case "ipad":
            case "ipod":
              return o.createElement(l.qwG, { "aria-hidden": !0, viewBox: "0 0 25 30", ...t });
            default:
              return o.createElement(l.Gzy, { "aria-hidden": !0, viewBox: "0 0 20 20", ...t });
          }
        },
        st = (e) => {
          const { previousDeviceInfo: t } = e;
          return (
            (0, o.useEffect)(() => {
              (0, O.Nc)(C.PageView.PaywallDeviceSyncLimitUnlinkDevice);
            }, []),
            (0, c.tZ)(
              l.Ejs,
              {
                flexDirection: "row",
                alignItems: "center",
                sx: {
                  borderTopWidth: "1px",
                  borderTopStyle: "solid",
                  borderTopColor: l.colors.grey05,
                  borderBottomWidth: "1px",
                  borderBottomStyle: "solid",
                  borderBottomColor: l.colors.grey05,
                  height: "80px"
                }
              },
              (0, c.tZ)(rt, { platform: t.platform }),
              (0, c.tZ)(
                l.Ejs,
                { flexDirection: "column", sx: { marginLeft: "10px" } },
                (0, c.tZ)(l.nvN, { sx: { fontWeight: "bolder" } }, t.name),
                (0, c.tZ)(
                  l.nvN,
                  { size: "x-small", bold: !0, color: l.colors.grey01 },
                  (0, c.tZ)(ot.Z, {
                    date: (0, nt.Z)(t.lastActive),
                    i18n: { key: "webapp_login_one_device_limit_device_info_last_active", param: "timeAgo" }
                  })
                )
              )
            )
          );
        },
        it = ({ handleOnCancel: e, handleOnConfirm: t, handleOnGetUnlimitedAccess: a, isOpen: n, previousDeviceInfo: r }) => {
          const { translate: s } = (0, N.Z)();
          return (0, b.tZ)(
            l.VqE,
            { closeIconName: s("_common_dialog_dismiss_button"), isOpen: n, onClose: e },
            (0, b.tZ)(
              o.Fragment,
              null,
              (0, b.tZ)(l.$N8, { title: s("webapp_login_one_device_limit_dialog_title_confirm", { deviceName: r?.name }) }),
              (0, b.tZ)(
                l.a7O,
                { sx: { color: "ds.text.neutral.standard" } },
                r ? (0, b.tZ)(st, { previousDeviceInfo: r }) : null,
                (0, b.tZ)(l.nvN, { sx: { marginTop: "20px" } }, s("webapp_login_one_device_limit_dialog_transfer_text")),
                (0, b.tZ)(l.nvN, { sx: { marginTop: "20px" } }, s("webapp_login_one_device_limit_dialog_upgrade_text"))
              ),
              (0, b.tZ)(
                l.Ejs,
                { sx: { justifyContent: "flex-end" } },
                (0, b.tZ)(
                  b.zx,
                  { intensity: "quiet", mood: "brand", onClick: a, sx: { marginRight: "16px" } },
                  s("webapp_login_one_device_limit_dialog_unlimited_access")
                ),
                (0, b.tZ)(b.zx, { mood: "brand", onClick: t }, s("webapp_login_one_device_limit_dialog_confirm_unlink"))
              )
            )
          );
        };
      let lt = (function (e) {
        return (e.INTRO = "INTRO"), (e.INNER_LOOP = "INNER_LOOP"), (e.OUTRO = "OUTRO"), e;
      })({});
      const ct = { autoplay: !0, renderer: "svg", rendererSettings: { preserveAspectRatio: "xMidYMid", viewBoxOnly: !0 } },
        _t = { [lt.INTRO]: !1, [lt.INNER_LOOP]: !0, [lt.OUTRO]: !1 },
        ut = {},
        pt = async (e) => {
          const t = await a(812272)(`./${e}_animation.json`);
          ut[e] = { ...ct, animationData: t, loop: _t[e] };
        };
      let dt = !1;
      const mt = ({ className: e }) => o.createElement("div", { className: e }),
        gt = ({ containerClassName: e, ...t }) => {
          const {
              onIntroComplete: a,
              onInnerLoopComplete: n,
              onOutroComplete: r,
              phase: s
            } = (({ loop: e, advanced: t }) => {
              const [a, n] = o.useState(lt.INTRO),
                r = o.useCallback(() => {
                  n(lt.INNER_LOOP);
                }, []),
                s = o.useCallback(() => {
                  n(lt.OUTRO);
                }, []),
                i = o.useCallback(() => {
                  e && n(lt.INTRO);
                }, [e]),
                l = o.useCallback(() => t?.onIntroComplete?.(n), [t?.onIntroComplete]),
                c = o.useCallback(() => t?.onInnerLoopComplete?.(n), [t?.onInnerLoopComplete]),
                _ = o.useCallback(() => t?.onOutroComplete?.(n), [t?.onOutroComplete]);
              return (
                o.useEffect(() => {
                  switch (a) {
                    case lt.INTRO:
                      t?.onIntroStart?.(n);
                      break;
                    case lt.INNER_LOOP:
                      t?.onInnerLoopStart?.(n);
                      break;
                    case lt.OUTRO:
                      t?.onOutroStart?.(n);
                  }
                }, [a, t?.onIntroStart, t?.onInnerLoopStart, t?.onOutroStart]),
                { phase: a, onIntroComplete: t ? l : r, onInnerLoopComplete: t ? c : s, onOutroComplete: t ? _ : i }
              );
            })(t),
            i = o.useMemo(() => [{ eventName: "complete", callback: a }], [a]),
            l = o.useMemo(() => [{ eventName: "loopComplete", callback: n }], [n]),
            c = o.useMemo(() => [{ eventName: "complete", callback: r }], [r]),
            [_, u] = o.useState(dt);
          if (
            (o.useEffect(() => {
              let e = !1;
              return (
                (async () => {
                  dt || (await Promise.all([lt.INTRO, lt.INNER_LOOP, lt.OUTRO].map(pt)), (dt = !0));
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
            return o.createElement(mt, { className: e });
          switch (s) {
            case lt.INTRO:
              return o.createElement(A.Z, { animationParams: ut[lt.INTRO], containerClassName: e, eventListeners: i });
            case lt.INNER_LOOP:
              return o.createElement(A.Z, { animationParams: ut[lt.INNER_LOOP], containerClassName: e, eventListeners: l });
            case lt.OUTRO:
              return o.createElement(A.Z, { animationParams: ut[lt.OUTRO], containerClassName: e, eventListeners: c });
            default:
              (0, tt.U)(s);
          }
        },
        ht = ({ children: e, handleLogOut: t }) => {
          const { translate: a } = (0, N.Z)();
          return (0, c.tZ)(
            l.Ejs,
            { flexDirection: "column", flexWrap: "nowrap", sx: { height: "100vh", width: "100%" } },
            (0, c.tZ)(
              l.Ejs,
              {
                alignItems: "center",
                flexWrap: "nowrap",
                justifyContent: "space-between",
                sx: { height: "122px", minHeight: "122px", padding: "0px 56px 0px 56px" }
              },
              (0, c.tZ)(l.D1W, { color: l.vei.DashGreen, size: l.r1z.Size39 }),
              (0, c.tZ)(l.zxk, { nature: "secondary", onClick: t, type: "button" }, a("webapp_login_one_device_limit_log_out"))
            ),
            (0, c.tZ)(
              l.Ejs,
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
              (0, c.tZ)(gt, { containerClassName: "animationContainer--SqIU7ZLOcD", loop: !0 })
            )
          );
        },
        Et = () => (0, O.Nc)(C.PageView.PaywallDeviceSyncLimit),
        ft = () => {
          (0, O.Kz)(new C.UserCallToActionEvent({ callToActionList: [C.CallToAction.Unlink], hasChosenNoAction: !0 }));
        },
        xt = () => {
          (0, O.Kz)(
            new C.UserCallToActionEvent({
              callToActionList: [C.CallToAction.Unlink, C.CallToAction.AllOffers],
              hasChosenNoAction: !1,
              chosenAction: C.CallToAction.Unlink
            })
          );
        },
        wt = () => {
          (0, O.Kz)(
            new C.UserCallToActionEvent({
              callToActionList: [C.CallToAction.Unlink],
              hasChosenNoAction: !1,
              chosenAction: C.CallToAction.Unlink
            })
          );
        },
        bt = () => {
          (0, O.Kz)(
            new C.UserCallToActionEvent({ callToActionList: [C.CallToAction.Unlink, C.CallToAction.AllOffers], hasChosenNoAction: !0 })
          );
        },
        vt = () => {
          (0, O.Kz)(
            new C.UserCallToActionEvent({
              callToActionList: [C.CallToAction.Unlink, C.CallToAction.AllOffers],
              hasChosenNoAction: !1,
              chosenAction: C.CallToAction.AllOffers
            })
          );
        },
        kt = ({ iconName: e, children: t }) =>
          (0, b.tZ)(
            l.Ejs,
            { flexDirection: "row", gap: "12px", alignItems: "center" },
            (0, b.tZ)(
              "div",
              { sx: { padding: "8px", backgroundColor: "ds.container.expressive.brand.quiet.idle", borderRadius: "8px" } },
              (0, b.tZ)(b.JO, { name: e, size: "large", color: "ds.text.brand.standard" })
            ),
            (0, b.tZ)(l.nvN, { size: "large" }, t)
          ),
        yt = ({ previousDevice: e }) => {
          const { translate: t } = (0, N.Z)();
          (0, o.useEffect)(() => {
            Et();
          }, []);
          const [a, n] = o.useState(!1),
            r = () => k.C.abortDeviceLimitFlow(),
            s = () => k.C.unlinkPreviousDevice(),
            c = () => {
              (0, at.Yk)(i.QF, { type: "oneDeviceLimit", action: "getUnlimitedAccess" }, { newTab: !1 });
            };
          return (0, b.tZ)(
            o.Fragment,
            null,
            (0, b.tZ)(
              ht,
              {
                handleLogOut: () => {
                  r(), bt();
                }
              },
              (0, b.tZ)(
                l.Ejs,
                {
                  as: "main",
                  flexDirection: "column",
                  flexWrap: "nowrap",
                  gap: "40px",
                  sx: { paddingTop: "60px", minHeight: "270px", maxWidth: "696px", minWidth: "429px" }
                },
                (0, b.tZ)(l.X6q, { caps: !0, size: "large" }, t("webapp_login_one_device_limit_header_V2")),
                (0, b.tZ)(
                  l.Ejs,
                  { flexDirection: "column", gap: "24px" },
                  (0, b.tZ)(l.nvN, { size: "large" }, t.markup("webapp_login_one_device_limit_feature_copy_markup")),
                  (0, b.tZ)(kt, { iconName: "FeatureAuthenticatorOutlined" }, t("webapp_login_one_device_limit_feature_unlimited_devices")),
                  (0, b.tZ)(
                    kt,
                    { iconName: "FeatureDarkWebMonitoringOutlined" },
                    t("webapp_login_one_device_limit_feature_dark_web_monitoring")
                  ),
                  (0, b.tZ)(kt, { iconName: "FeatureVpnOutlined" }, t("webapp_login_one_device_limit_feature_vpn")),
                  (0, b.tZ)(l.nvN, { size: "large" }, t("webapp_login_one_device_limit_not_ready"))
                ),
                (0, b.tZ)(
                  l.Ejs,
                  { flexDirection: "row", flexWrap: "nowrap", gap: "16px" },
                  (0, b.tZ)(b.zx, { mood: "brand", onClick: c, size: "large" }, t("webapp_login_one_device_limit_see_premium_plan")),
                  (0, b.tZ)(
                    b.zx,
                    {
                      mood: "neutral",
                      intensity: "quiet",
                      onClick: () => {
                        n(!0), xt();
                      },
                      size: "large"
                    },
                    t("webapp_login_one_device_limit_start_transfer")
                  )
                )
              )
            ),
            (0, b.tZ)(it, {
              isOpen: a,
              handleOnCancel: () => {
                n(!1), ft();
              },
              handleOnConfirm: () => {
                s(), wt();
              },
              handleOnGetUnlimitedAccess: c,
              previousDeviceInfo: e
            })
          );
        };
      var St = a(65255),
        Tt = a(377377),
        At = a(114943),
        Nt = a(956854);
      function Ot() {
        const e = (0, At.Y)(),
          { routes: t } = (0, f.Xo)(),
          { logout: a } = (0, ce.u)(g.V);
        return {
          logOut: () => a(),
          unlinkMultipleDevices: k.C.unlinkMultipleDevices,
          onHandleGoToPremiumPlan: (a) =>
            ((a) => {
              if (e.status === v.rq.Success) {
                const n = t.userGoPremium(a, (0, Nt.c)(e.data.autoRenewInfo)),
                  o = { type: "multipleDevicesLimit", action: "goPremium" };
                (0, at.Yk)(n, o, { newTab: !1 });
              }
            })(a)
        };
      }
      const Ct = ({ errorStage: e }) => {
        const { retryPayload: t, subscriptionCode: a } = e,
          { translate: n } = (0, N.Z)(),
          r = Ot();
        return o.createElement(
          l.VqE,
          { isOpen: !0, onClose: r.logOut, closeIconName: n("_common_dialog_dismiss_button") },
          o.createElement(l.$N8, { title: n("webapp_login_multiple_devices_limit_error_dialog_title") }),
          o.createElement(l.a7O, null, o.createElement(l.nvN, null, n("webapp_login_multiple_devices_limit_error_dialog_body"))),
          o.createElement(l.cNS, {
            primaryButtonTitle: n("webapp_login_multiple_devices_limit_error_dialog_try_again"),
            primaryButtonOnClick: () => {
              r.unlinkMultipleDevices(t);
            },
            secondaryButtonTitle: n("webapp_login_multiple_devices_limit_error_dialog_see_premium"),
            secondaryButtonOnClick: () => {
              r.onHandleGoToPremiumPlan(a);
            }
          })
        );
      };
      var Rt = a(144134);
      const Dt = Rt.Z.registerAction("IS_INITIAL_SYNC_ANIMATION_PENDING", (e, t) => ({ ...e, isPending: t })),
        It = Rt.Z.registerAction("IS_INITIAL_SYNC_ANIMATION_INTRO_PENDING", (e, t) => ({ ...e, isIntroPhasePending: t }));
      var Zt = a(87697);
      let Pt = (function (e) {
        return (
          (e.UNLINKING_PREVIOUS_DEVICE = "UNLINKING_PREVIOUS_DEVICE"),
          (e.TRANSFERRING_DATA = "TRANSFERRING_DATA"),
          (e.STORING_DATA = "STORING_DATA"),
          e
        );
      })({});
      const Lt = {
          MAY_TAKE_A_MINUTE: "webapp_login_initial_sync_progress_may_take_a_minute",
          STORING_DATA: "webapp_login_initial_sync_progress_storing_data",
          TRANSFERRING_DATA: "webapp_login_initial_sync_progress_transferring_data",
          UNLINKING_PREVIOUS_DEVICE: "webapp_login_initial_sync_progress_unlinking_previous_device"
        },
        Mt = {
          STORING_DATA: "webapp_login_initial_sync_progress_step_finish_transfer",
          TRANSFERRING_DATA: "webapp_login_initial_sync_progress_step_securely_transferring_data",
          UNLINKING_PREVIOUS_DEVICE: "webapp_login_initial_sync_progress_step_unlinking_other_device"
        },
        Ut = {
          STORING_DATA: "webapp_login_initial_sync_progress_almost_done",
          TRANSFERRING_DATA: "webapp_login_initial_sync_progress_may_take_few_moments",
          UNLINKING_PREVIOUS_DEVICE: "webapp_login_initial_sync_progress_may_take_few_moments"
        },
        Vt = { STORING_DATA: "80%", TRANSFERRING_DATA: "50%", UNLINKING_PREVIOUS_DEVICE: "10%" },
        Bt = (e) => {
          const { translate: t } = (0, N.Z)(),
            { step: a, animationProps: n } = (({ stage: e }) => {
              const t = (0, et.I0)(),
                [a, n] = o.useState(Pt.UNLINKING_PREVIOUS_DEVICE),
                r = o.useRef(null),
                s = o.useRef(null),
                i = o.useRef(null),
                l = (e) => () => {
                  t(Dt(e));
                },
                c = (e) => {
                  t(It(e));
                },
                _ = () =>
                  new Promise((e) => {
                    i.current = e;
                  }),
                u = o.useCallback(() => {
                  (s.current = new Promise((e) => {
                    r.current = e;
                  })),
                    n(Pt.UNLINKING_PREVIOUS_DEVICE),
                    c(!0);
                }, []),
                p = o.useCallback((e) => {
                  c(!1), e(lt.INNER_LOOP);
                }, []),
                d = o.useCallback((e) => {
                  (() => {
                    if (!s.current) throw new Error("Expected initial sync to be initiated");
                    return s.current;
                  })()
                    .then(_)
                    .then(() => e(lt.OUTRO)),
                    n(Pt.TRANSFERRING_DATA);
                }, []),
                m = o.useCallback(() => i.current?.(), []),
                g = o.useCallback(() => {
                  n(Pt.STORING_DATA);
                }, []),
                h = o.useCallback(l(!1), []);
              return (
                o.useEffect(l(!0), []),
                o.useEffect(() => {
                  e?.name === Zt.s.DeviceLimitDone && "function" == typeof r.current && r.current();
                }, [e?.name]),
                {
                  step: a,
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
            r = (0, Tt.w)(St.w.GrowthproductDSLPaywallDemogorgon);
          return (0, c.tZ)(
            l.Ejs,
            { flexDirection: "column", flexWrap: "nowrap", fullWidth: !0, sx: { height: "100vh", position: "relative" } },
            (0, c.tZ)(
              l.Ejs,
              {
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "5",
                sx: { height: "122px", minHeight: "122px", padding: "0px 56px 0px 56px" }
              },
              (0, c.tZ)(l.D1W, { color: l.vei.DashGreen, size: l.r1z.Size39 })
            ),
            (0, c.tZ)(
              l.Ejs,
              {
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                sx: { flexGrow: 1, padding: "0px 56px 0px 56px", position: "relative", top: "-10%" }
              },
              (0, c.tZ)(gt, { containerClassName: "animationContainer--Opz_rdjAMM", ...n }),
              (0, c.tZ)(
                l.Ejs,
                { as: "main", alignItems: "center", flexDirection: "column", sx: { maxWidth: "500px" } },
                r
                  ? (0, c.tZ)(
                      o.Fragment,
                      null,
                      (0, c.tZ)(
                        l.nvN,
                        {
                          color: "ds.text.neutral.catchy",
                          sx: { fontSize: 6, fontFamily: "heading", fontWeight: "light", marginBottom: "8px" }
                        },
                        t(Mt[a])
                      ),
                      (0, c.tZ)(l.nvN, { color: "ds.text.neutral.quiet", sx: { marginBottom: "24px" } }, t(Ut[a])),
                      (0, c.tZ)(l.nvN, { color: "ds.text.neutral.quiet" }, Vt[a])
                    )
                  : (0, c.tZ)(
                      o.Fragment,
                      null,
                      (0, c.tZ)(
                        l.nvN,
                        {
                          color: l.colors.dashGreen00,
                          sx: { fontSize: 5, fontFamily: "heading", fontWeight: "bolder", marginBottom: "16px" }
                        },
                        t(Lt[a])
                      ),
                      (0, c.tZ)(l.nvN, { color: l.colors.grey00 }, t(Lt.MAY_TAKE_A_MINUTE))
                    )
              )
            ),
            e.stage.name === Zt.s.UnlinkingMultipleDevicesError ? (0, c.tZ)(Ct, { errorStage: e.stage }) : null
          );
        };
      var Ft = a(427216);
      const zt = ({ deviceToDeactivate: e, handleOnSelection: t, checked: a }) => {
          var n;
          return e?.isCurrentDevice
            ? null
            : (0, c.tZ)(
                l.Ejs,
                {
                  alignItems: "center",
                  sx: {
                    borderTopWidth: "1px",
                    borderTopStyle: "solid",
                    borderTopColor: l.colors.grey05,
                    borderBottomWidth: "1px",
                    borderBottomStyle: "solid",
                    borderBottomColor: l.colors.grey05,
                    height: "80px",
                    backgroundColor: a ? l.colors.dashGreen06 : l.colors.white,
                    "&:hover": { backgroundColor: l.colors.dashGreen06 }
                  }
                },
                (0, c.tZ)("input", {
                  type: "checkbox",
                  id: e.deviceId,
                  name: null != (n = e.deviceName) ? n : "",
                  checked: a,
                  sx: { marginLeft: "23px" },
                  onChange: () => t(e)
                }),
                (0, c.tZ)(
                  "label",
                  { htmlFor: e.deviceId, style: { flexGrow: 1, padding: "21px 0 21px 0" } },
                  (0, c.tZ)(
                    l.Ejs,
                    { flexDirection: "row", alignItems: "center" },
                    (0, c.tZ)("span", { style: { paddingLeft: "33px", paddingRight: "33px" } }, (0, c.tZ)(rt, { platform: e.platform })),
                    (0, c.tZ)(
                      l.Ejs,
                      { flexDirection: "column", sx: { paddingLeft: "10px" } },
                      (0, c.tZ)(l.nvN, { sx: { fontWeight: "bolder" } }, e.deviceName),
                      (0, c.tZ)(
                        l.nvN,
                        { size: "x-small", bold: !0, color: l.colors.grey01 },
                        (0, c.tZ)(ot.Z, {
                          date: (0, nt.Z)(e.lastActivityDate),
                          i18n: { key: "webapp_login_one_device_limit_device_info_last_active", param: "timeAgo" }
                        })
                      )
                    )
                  )
                )
              );
        },
        Gt = ({ isOpen: e, devicesToDeactivate: t, handleOnConfirm: a, handleOnCancel: n, onHandleGoToPremiumPlan: r }) => {
          var s;
          const [i, c] = o.useState([]),
            { translate: _ } = (0, N.Z)(),
            u = (null != (s = t?.length) ? s : 0) - 2,
            p = i.length >= u,
            d = (e) => {
              i.includes(e.deviceId) ? c(i.filter((t) => t !== e.deviceId)) : c([...i, e.deviceId]);
            };
          return o.createElement(
            l.VqE,
            {
              closeIconName: _("_common_dialog_dismiss_button"),
              isOpen: e,
              onClose: () => {
                n(), ft();
              }
            },
            o.createElement(l.$N8, { title: _("webapp_login_multiple_devices_limit_dialog_title") }),
            o.createElement(
              l.nvN,
              { color: l.colors.grey00, sx: { marginBottom: "20px" } },
              _.markup("webapp_login_multiple_devices_limit_dialog_text_markup")
            ),
            o.createElement(
              l.a7O,
              null,
              t
                ? t.map((e) =>
                    o.createElement(zt, { key: e.deviceId, deviceToDeactivate: e, handleOnSelection: d, checked: i.includes(e.deviceId) })
                  )
                : null
            ),
            o.createElement(l.cNS, {
              primaryButtonTitle: _("webapp_login_multiple_devices_limit_dialog_unlink"),
              primaryButtonOnClick: () => {
                a(
                  i.reduce((e, a) => {
                    const n = t?.find(({ deviceId: e }) => e === a);
                    return (
                      n?.isPairingGroup
                        ? e.pairingGroupIds
                          ? e.pairingGroupIds.push(n?.deviceId)
                          : (e.pairingGroupIds = [n?.deviceId])
                        : n && (e.deviceIds ? e.deviceIds.push(n?.deviceId) : (e.deviceIds = [n?.deviceId])),
                      e
                    );
                  }, {})
                ),
                  xt();
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
        Wt = ({ devicesToDeactivate: e, subscriptionCode: t, wasRefreshed: a }) => {
          const { translate: n } = (0, N.Z)(),
            r = Ot(),
            s = () => r.onHandleGoToPremiumPlan(t);
          o.useEffect(() => {
            a || Et();
          }, [a]);
          const [i, _] = o.useState(!1);
          return (0, c.tZ)(
            o.Fragment,
            null,
            (0, c.tZ)(
              ht,
              {
                handleLogOut: () => {
                  r?.logOut(), bt();
                }
              },
              (0, c.tZ)(
                l.Ejs,
                {
                  as: "main",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  flexWrap: "nowrap",
                  sx: { maxHeight: "min(50vh, 400px)", minHeight: "270px", maxWidth: "589px", minWidth: "429px" }
                },
                (0, c.tZ)(
                  l.X6q,
                  { caps: !0, size: "large", sx: { marginBottom: "43px" } },
                  n("webapp_login_multiple_devices_limit_header")
                ),
                (0, c.tZ)(l.nvN, { size: "large" }, n("webapp_login_multiple_devices_limit_description_upgrade")),
                (0, c.tZ)(
                  l.Ejs,
                  { flexDirection: "row", flexWrap: "nowrap", sx: { marginTop: "32px" } },
                  (0, c.tZ)(
                    l.zxk,
                    {
                      nature: "primary",
                      onClick: () => {
                        s(), vt();
                      },
                      size: "large",
                      type: "button"
                    },
                    n("webapp_login_multiple_devices_limit_see_premium_plan")
                  ),
                  (0, c.tZ)(
                    l.zxk,
                    {
                      nature: "ghost",
                      onClick: () => {
                        _(!0), xt();
                      },
                      size: "large",
                      type: "button"
                    },
                    n("webapp_login_multiple_devices_limit_unlink_previous_devices")
                  )
                )
              )
            ),
            (0, c.tZ)(Gt, {
              isOpen: i,
              handleOnCancel: () => {
                _(!1), ft();
              },
              onHandleGoToPremiumPlan: s,
              handleOnConfirm: async (e) => {
                await r?.unlinkMultipleDevices(e), wt();
              },
              devicesToDeactivate: e
            })
          );
        };
      var jt;
      const qt = ({ stage: e }) => {
        const [t, a] = o.useState(!1),
          n = (0, et.v9)(Ft.t);
        if (e.name === Zt.s.OneDeviceLimitReached && n) return o.createElement(Bt, { stage: e });
        switch ((t || e.name !== Zt.s.RefreshingDeviceLimitStatus || a(!0), e.name)) {
          case Zt.s.UnlinkingAndOpeningSession:
          case Zt.s.DeviceLimitDone:
          case Zt.s.UnlinkingMultipleDevicesError:
            return o.createElement(Bt, { stage: e });
          case Zt.s.RefreshingDeviceLimitStatus:
          case Zt.s.OpeningSessionAfterDeviceLimitRemoval:
            return jt || (jt = o.createElement(Je, null));
          case Zt.s.OneDeviceLimitReached:
            return o.createElement(yt, { previousDevice: e.previousDevice });
          case Zt.s.MultipleDevicesLimitReached:
            return o.createElement(Wt, {
              subscriptionCode: e.subscriptionCode,
              devicesToDeactivate: e.devicesToDeactivate,
              wasRefreshed: t
            });
          default:
            return (0, tt.U)(e);
        }
      };
      var Kt = a(100839);
      const Ht = "panelsContainer--d1AY9zIUmF",
        $t = "panelContainer--KH_IXYeRAb",
        Xt = "loginPanelContainer--Nc48WJlOX4",
        Yt = ({ handleConsentSet: e }) => {
          const [t, a] = (0, o.useState)({ interactionDataConsent: !0, personalDataConsent: !0 }),
            { translate: n } = (0, N.Z)();
          return (0, c.tZ)(
            l.Ejs,
            { as: "form", className: "accountCreationPanel--gNIIBVYOIt" },
            (0, c.tZ)(l.X6q, { size: "large", sx: { mb: "16px" } }, n("account_creation_user_consent_title")),
            (0, c.tZ)(
              l.nvN,
              { as: "div", sx: { p: { mb: "24px" }, "p:last-of-type": { mb: "16px" } } },
              n.markup("account_creation_user_consent_description_markup")
            ),
            (0, c.tZ)(l.XZJ, {
              label: n("account_creation_user_consent_usage_data_label"),
              checked: t.interactionDataConsent,
              onChange: (e) => {
                return "interactionDataConsent", (t = e.currentTarget.checked), void a((e) => ({ ...e, interactionDataConsent: t }));
                var t;
              },
              sx: { mb: "40px" }
            }),
            (0, c.tZ)(
              l.T5p,
              { gridTemplateColumns: "auto auto", gap: "8px", justifyContent: "end", fullWidth: !0, sx: { mb: "40px" } },
              (0, c.tZ)(
                l.zxk,
                {
                  type: "button",
                  nature: "secondary",
                  onClick: async () => {
                    await ((0, Kt.Ez)("management.uninstallSelf")
                      ? chrome.management.uninstallSelf(undefined)
                      : Promise.reject(new Error("No management.uninstallSelf support")));
                  }
                },
                n("account_creation_user_consent_decline")
              ),
              (0, c.tZ)(
                l.zxk,
                {
                  type: "button",
                  nature: "primary",
                  onClick: async () => {
                    await e(t);
                  }
                },
                n("account_creation_user_consent_agree")
              )
            ),
            (0, c.tZ)(l.nvN, { size: "x-small" }, n.markup("account_creation_user_consent_disclaimer_markup", {}, { linkTarget: "_blank" }))
          );
        };
      var Qt = a(164718),
        Jt = a(661222),
        ea = a(329),
        ta = a(598641),
        aa = a(549259);
      const na = "teamSignupPageData";
      var oa = a(891828);
      var ra, sa, ia, la, ca;
      let _a = (function (e) {
        return (e.DashlaneBusiness = "dashlaneBusiness"), (e.Standard = "standard"), e;
      })({});
      const ua = ({ children: e, options: { marketingContentType: t } = { marketingContentType: _a.Standard } }) => {
        const { pathname: a } = (0, r.TH)();
        (() => {
          const e = (0, r.k6)(),
            { pathname: t } = (0, r.TH)(),
            a = t === i.$F;
          (0, o.useEffect)(() => {
            (async () => {
              const t = (await (0, Jt.I)({ url: `*://*.${i.zi}/*` })).find(
                  (e) => e.url && new Qt.Y(e.url).getRootDomain() === i.zi && e.url?.includes(i.$F) && !e.active
                ),
                n = (await (0, ea.g)({ domain: i.zi, name: na }))[0];
              if (n || t) {
                var o, s, l;
                const [c, _] = null != (o = n?.value?.split(",")) ? o : [],
                  u = t?.url ? t?.url : void 0,
                  p = null != (s = null != c ? c : (0, r.CN)(u).get("email")) ? s : "",
                  d = null != (l = null != _ ? _ : (0, r.CN)(u).get("team")) ? l : "";
                n && (await (0, ta.O)({ url: `https://${i.zi}`, name: na })),
                  a || (t?.id && (await (0, aa.O)([t.id])), e.push(`${i.$F}?email=${p}&team=${d}`));
              }
            })();
          }, [e, a]);
        })();
        const n = a === i.$F,
          [s, l] = (0, o.useState)(!1),
          { getIsConsentNeeded: c, setUserConsent: _ } = {
            getIsConsentNeeded: async () => !0 !== (await k.C.getGlobalExtensionSettings()).personalDataConsent,
            setUserConsent: async (e) => await k.C.setGlobalExtensionSettings(e),
            getUserConsent: async () => await k.C.getGlobalExtensionSettings()
          };
        (0, o.useEffect)(() => {
          void 0 === s &&
            Promise.all([k.C.getLocalAccountsList(null), c()]).then(([{ localAccounts: e = [] }, t]) => {
              const a = e.length > 0 || !t;
              _({ interactionDataConsent: a, personalDataConsent: a }), l(!a);
            });
        }, []),
          (() => {
            var e;
            const { search: t } = (0, r.TH)(),
              a = null != (e = Ke.parse(t).inviteToken) ? e : "";
            (0, o.useEffect)(() => {
              a &&
                (async (e) => {
                  const t = await new oa.Z().acceptTeam({ token: e });
                  !t || t?.content?.error
                    ? await k.C.addLoginNotification({ type: $e.A.TEAM_ACCEPTANCE_ERROR })
                    : await k.C.addLoginNotification({ type: $e.A.TEAM_ACCEPTANCE_SUCCESS });
                })(a);
            }, [a]);
          })();
        const u = (function () {
          const e = (0, v.qr)(
              { queryConfig: { query: k.C.getLoginDeviceLimitFlow }, liveConfig: { live: k.C.liveLoginDeviceLimitFlow } },
              []
            ),
            t = (function (e) {
              const [t, a] = (0, o.useState)(void 0);
              return (
                (0, o.useEffect)(() => {
                  e.status !== v.rq.Success || t || (a(e), e.data && k.C.deviceLimitCapabilityUpdated());
                }, [e.status, t]),
                t
              );
            })(e);
          if (e.status === v.rq.Success && void 0 !== t) return e.data;
        })();
        return void 0 === s || void 0 === u
          ? ra || (ra = (0, b.tZ)(Je, null))
          : (0, b.tZ)(
              o.Fragment,
              null,
              u
                ? (0, b.tZ)(qt, { stage: u })
                : (0, b.tZ)(
                    "div",
                    { sx: { backgroundColor: "ds.container.agnostic.neutral.supershy" }, className: Ht },
                    n
                      ? sa || (sa = (0, b.tZ)(He, null))
                      : t === _a.DashlaneBusiness
                      ? ia || (ia = (0, b.tZ)(We, null))
                      : la || (la = (0, b.tZ)(je, null)),
                    (0, b.tZ)(
                      "div",
                      {
                        className: M()($t, {
                          "globalConsentLayout--P45_YzK7MO": s,
                          [Xt]: a === i.TT,
                          "accountCreationPanelContainer--uRGG02y4j6": a !== i.TT
                        })
                      },
                      s
                        ? (0, b.tZ)(Yt, {
                            handleConsentSet: async (e) => {
                              await _(e), l(!1);
                            }
                          })
                        : e
                    )
                  ),
              ca || (ca = (0, b.tZ)(Ye, null))
            );
      };
      var pa,
        da,
        ma = a(127521),
        ga = a(103128),
        ha = a(133354),
        Ea = a(532779),
        fa = a(266687);
      const xa = ({ location: e, isTacFlow: t, logoutHandler: a }) => {
        var n;
        const [r, s] = (0, o.useState)({ type: fa.O.NONE }),
          { search: i } = (0, se.TH)(),
          c = Ke.parse(i),
          [_, u] = (0, o.useState)(c.email),
          [p, d] = (0, o.useState)(c.token),
          h = () => {
            u(void 0);
          },
          E = () => {
            d(void 0);
          },
          f = (0, m.k)(g.V, "authenticationFlowStatus"),
          {
            changeLogin: x,
            sendAccountEmail: w,
            submitEmailToken: b,
            submitTotp: v,
            submitBackupCode: k,
            changeTwoFactorAuthenticationOtpType: y,
            sendMasterPassword: S,
            resendEmailToken: T,
            resendPushNotification: A,
            switchToEmailToken: N,
            switchToDashlaneAuthenticator: O,
            clearError: C,
            useMasterPassword: R,
            retryWebAuthnAuthentication: D,
            webAuthnAuthenticationFail: I
          } = (0, ce.u)(g.V),
          Z = () => {
            const e = f.data?.error;
            e && C();
          };
        (0, o.useEffect)(() => {
          e.search.includes("askmp") ? s({ type: fa.O.ASK_MP }) : _ && "EmailStep" !== f.data?.step && x({});
        }, [e, e.hash]);
        const P = f.status === ha.rq.Loading;
        return o.createElement(
          l.Ejs,
          { justifyContent: "center", alignItems: "center", flexDirection: "column" },
          t ? null : pa || (pa = o.createElement(Se.W_, null)),
          P
            ? da ||
                (da = o.createElement(Je, {
                  containerHeight: "100%",
                  customMargin: "30% 0 0 0;",
                  customAnimationHeight: 100,
                  customAnimationWidth: 100
                }))
            : null !=
              (n =
                r.type === fa.O.ASK_MP && "MasterPasswordStep" === f.data?.step
                  ? o.createElement(Ea.Wo, { clearInputError: Z, sendMasterPassword: S, logoutHandler: a, location: e, ...f.data })
                  : r.type === fa.O.WAITING_IDP_REDIRECTION
                  ? o.createElement(Ea.ku, {
                      loginEmail: r.login,
                      setUseClientBypass: () => {},
                      sendUsageLog: !1,
                      localAccounts: [],
                      isNitroProvider: !1,
                      serviceProviderRedirectUrl: ""
                    })
                  : null)
            ? n
            : (() => {
                const t = f.data;
                if (!t) return null;
                if (!t.step || void 0 === t.step || "StartingStep" === t.step) return null;
                switch (t.step) {
                  case "EmailStep":
                    return o.createElement(Ea.W2, { clearInputError: Z, sendEmail: w, prefilledEmail: _, onClearPrefilledEmail: h, ...t });
                  case "EmailTokenStep":
                    return o.createElement(Ea.rG, {
                      clearInputError: Z,
                      resendEmailToken: T,
                      submitEmailToken: b,
                      switchToDashlaneAuthenticator: O,
                      prefilledToken: p,
                      onClearPrefilledToken: E,
                      ...t
                    });
                  case "DashlaneAuthenticatorStep":
                    return o.createElement(Ea.a3, { resendPushNotification: A, switchToEmailToken: N, ...t });
                  case "TwoFactorAuthenticationOtpStep":
                    return void 0 !== t.twoFactorAuthenticationOtpType && "backupCode" === t.twoFactorAuthenticationOtpType
                      ? o.createElement(Ea.sI, { submitBackupCode: k, changeTwoFactorAuthenticationOtpType: y, ...t })
                      : o.createElement(Ea.JU, {
                          submitTotp: v,
                          clearInputError: Z,
                          changeTwoFactorAuthenticationOtpType: y,
                          prefilledToken: p,
                          onClearPrefilledToken: E,
                          ...t
                        });
                  case "MasterPasswordStep":
                    return o.createElement(Ea.Wo, { clearInputError: Z, sendMasterPassword: S, logoutHandler: a, location: e, ...t });
                  case "WebAuthnStep":
                    return o.createElement(Ea.UV, {
                      webAuthnAuthenticationFail: I,
                      retryWebAuthnAuthentication: D,
                      switchToMasterPassword: R,
                      ...t
                    });
                  case "SSORedirectionToIdpStep":
                    return o.createElement(Ea.ku, { setUseClientBypass: s, sendUsageLog: !0, changeLogin: x, ...t });
                  case "DeviceToDeviceAuthenticationStep":
                    return o.createElement(Ea.Lv, { ...t });
                  default:
                    return (0, Fe.U)(t);
                }
              })()
        );
      };
      var wa = a(139632);
      const ba = ({ onClick: e, redirectLocation: t, helperText: a, buttonText: n }) => {
        const o = (0, r.k6)();
        return (0, b.tZ)(
          l.Ejs,
          {
            justifyContent: "flex-end",
            alignItems: "center",
            gap: "10px",
            sx: { position: "sticky", top: "40px", paddingRight: "40px", height: "40px" }
          },
          (0, b.tZ)(b.nv, { color: "ds.text.neutral.quiet" }, a),
          (0, b.tZ)(
            b.zx,
            {
              mood: "neutral",
              intensity: "quiet",
              onClick: (a) => {
                e?.(a), o.push(t);
              }
            },
            n
          )
        );
      };
      var va = a(214049),
        ka = a(828298),
        ya = a(784995),
        Sa = a(64496),
        Ta = a(460384),
        Aa = a(916631),
        Na = a(881391);
      let Oa = (function (e) {
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
      var Ca = a(119471);
      const Ra = () => {
        const { translate: e } = (0, N.Z)();
        return o.createElement(
          l.vDh,
          {
            size: "simple",
            title: o.createElement("h2", { className: "title--WGgiDPzjDw" }, e("webapp_update_title")),
            className: "infoBox--knTQ3UB8R9"
          },
          o.createElement(
            o.Fragment,
            null,
            o.createElement("p", { className: "description--RjLLcWrV_L" }, e.markup("webapp_update_body_markup")),
            e.markup("webapp_update_body_secondary_markup", { learnMore: Ca.tU })
          )
        );
      };
      var Da = a(599203);
      const Ia = "fieldContainer--ufpPaGgkOx",
        Za = "otpContainer--OzUbAXHLmF";
      var Pa;
      const La = b.O9.lightTheme.ds,
        Ma = {
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
        Ua = "other_account",
        Va = (e) => e === Ne._V[Ne._V.CLIENT_VERSION_DOES_NOT_SUPPORT_SSO_MIGRATION];
      class Ba extends o.Component {
        constructor(...e) {
          super(...e),
            (this.handleSelectChange = (e) => {
              const t = e.value;
              t !== Ua ? this.props.handleLoginChange(t) : this.props.handleOtherAccountSelect();
            }),
            (this.loginInputChangeHandler = (e) => {
              this.props.handleLoginChange(e.target.value);
            }),
            (this.handleKeyDown = (e) => {
              "Enter" === e.key && (e.preventDefault(), this.props.onLoginSubmit(e));
            }),
            (this.getLoginSelect = (e) => {
              const { login: t, translate: a } = this.props,
                n = e.map(({ login: e }) => ({ label: e, value: e }));
              n.push({ label: a("webapp_login_form_email_fieldset_select_option_other_account"), value: Ua });
              const o = e.find((e) => e.isLastSuccessfulLogin);
              if (!o) return null;
              const r = o.login,
                s = { label: t || r, value: t || r },
                i = { option: (e, { data: { value: t } }) => (t === Ua ? { ...e, color: La.text.neutral.quiet } : e) };
              return (0, c.tZ)(l.qWE, {
                id: "login-select",
                isClearable: !1,
                isSearchable: !1,
                options: n,
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
          const { error: e, login: t, localAccounts: a, translate: n } = this.props,
            o = this.getLoginSelect(a),
            r = (0, c.tZ)("input", {
              autoFocus: !0,
              className: M()({ "loginInput--TXjEY61Kfy": !0, "inputError--TYcRlxfNfk": Ma[e] || Va(e) }),
              onChange: this.loginInputChangeHandler,
              onKeyDown: this.handleKeyDown,
              type: "email",
              placeholder: n("webapp_login_form_email_fieldset_email_placeholder"),
              defaultValue: t || ""
            });
          return (0, c.tZ)(
            "fieldset",
            null,
            (0, c.tZ)(
              "label",
              { className: "label--YR4HUyYcFH" },
              n("webapp_login_form_email_fieldset_email_description"),
              (0, c.tZ)(
                "div",
                { className: Ia, "data-testid": "login_container" },
                this.shouldDisplayLoginDropdown() ? o : r,
                Ma[e] ? (0, c.tZ)("div", { className: "errorText--O2Zkblh9Af", id: "login-account-email-input-error" }, n(Ma[e])) : null
              )
            ),
            Va(this.props.error) ? Pa || (Pa = (0, c.tZ)(Ra, null)) : null,
            (0, c.tZ)(Da.Z, {
              size: "large",
              fullWidth: !0,
              "data-testid": "login-button",
              loading: this.props.isCarbonRequestPending,
              label: n("webapp_login_form_email_fieldset_email_confirm"),
              onClick: this.onSubmit
            })
          );
        }
      }
      var Fa = a(480225);
      const za = ({ login: e, onBackToEmailStepClick: t }) => {
        const { translate: a } = (0, N.Z)();
        return o.createElement(
          "div",
          { className: "emailContainer--h43t4MEpwR" },
          o.createElement("h3", { className: "email--wCQBPc2ueW", "data-testid": "login-email-header" }, e),
          o.createElement(
            "button",
            { className: "anotherAccount--fmwIuIguIe", onClick: t, type: "button" },
            a("webapp_login_form_password_fieldset_log_in_different_account")
          )
        );
      };
      var Ga = a(509746);
      const Wa = {
          enter: "enter--rQNtxt1w51",
          enterActive: "enterActive--KCBiqtuJxe",
          exit: "exit--gDe9N2gRNw",
          exitActive: "exitActive--giRj4YPE7L"
        },
        ja = {
          EMPTY_OTP: "webapp_login_form_password_fieldset_security_code_error_empty_otp",
          OTP_NOT_VALID: "webapp_login_form_password_fieldset_security_code_error_otp_not_valid",
          OTP_ALREADY_USED: "webapp_login_form_password_fieldset_security_code_error_otp_already_used",
          OTP_TOO_MANY_ATTEMPTS: "webapp_login_form_password_fieldset_security_code_error_token_too_many_attempts",
          UNKNOWN_ERROR: "webapp_login_form_password_fieldset_security_code_error_unkown",
          THROTTLED: "webapp_login_form_password_fieldset_error_throttled",
          NETWORK_ERROR: "webapp_login_form_password_fieldset_network_error_offline"
        },
        qa = {
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
        Ka = "webapp_login_form_password_fieldset_password_forgot",
        Ha = "webapp_two_factor_authentication_reset_2fa",
        $a = {
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
        Xa = ({ error: e, hasError: t, onKeyDown: a, onPasswordInputChange: n, onTogglePasswordVisibility: r }) => {
          const { translate: s } = (0, N.Z)();
          return o.createElement(l.WUg, {
            autoFocus: !0,
            showPasswordTooltipText: s($a.SHOW_LABEL),
            hidePasswordTooltipText: s($a.HIDE_LABEL),
            placeholder: s($a.PLACEHOLDER),
            label: s($a.LABEL),
            onChange: (e) => {
              n(e.target.value);
            },
            onKeyDown: a,
            onPasswordVisibilityChanged: (e) => r?.(e),
            feedbackType: t ? "error" : void 0,
            feedbackText: t
              ? s("UNKNOWN_SYNC_ERROR" === e ? $a.UNKNOWN_SYNC_ERROR_EXTENSION : null != (i = $a[e]) ? i : $a.UNKNOWN_ERROR)
              : void 0,
            spellCheck: !1
          });
          var i;
        },
        Ya = ({ securityCode: e, maxLength: t, onTokenInputChange: a, onKeyDown: n, hasError: r, error: s }) => {
          var i;
          const { translate: c } = (0, N.Z)();
          return o.createElement(
            o.Fragment,
            null,
            o.createElement(
              l.nvN,
              { sx: { marginBottom: "12px" }, color: l.colors.grey00 },
              c("webapp_login_form_password_fieldset_security_code_description")
            ),
            o.createElement(l.rRH, {
              autoFocus: !0,
              value: e,
              maxLength: t,
              inputMode: "numeric",
              "data-testid": "token-input",
              onChange: a,
              onKeyDown: n,
              feedbackType: r ? "error" : void 0,
              feedbackText: r ? c(null != (i = qa[s]) ? i : qa.UNKNOWN_ERROR) : ""
            })
          );
        };
      var Qa,
        Ja,
        en,
        tn = a(185794);
      const an = ({
        securityCode: e,
        maxLength: t,
        toggleBackupCodeInput: a,
        onOTPInputChange: n,
        onKeyDown: s,
        hasError: i,
        error: c,
        login: _
      }) => {
        var u;
        const { translate: p } = (0, N.Z)(),
          { routes: d } = (0, r.Xo)(),
          [m, g] = (0, o.useState)(!1),
          h = (0, o.useRef)();
        return (
          (0, o.useEffect)(() => {
            c && (g(h.current === c && c === Ne._V[Ne._V.OTP_NOT_VALID]), (h.current = c));
          }, [c]),
          o.createElement(
            o.Fragment,
            null,
            o.createElement(
              l.nvN,
              { sx: { marginBottom: "12px" }, color: l.colors.grey00 },
              p("webapp_login_form_password_fieldset_security_code_otp_description")
            ),
            o.createElement(l.rRH, {
              autoFocus: !0,
              value: e,
              maxLength: t,
              inputMode: "numeric",
              "data-testid": "token-input",
              onChange: n,
              onKeyDown: s,
              feedbackType: i ? "error" : void 0,
              feedbackText: i ? p(null != (u = ja[c]) ? u : ja.UNKNOWN_ERROR) : ""
            }),
            m ? Qa || (Qa = o.createElement(tn.T, null)) : null,
            o.createElement(
              l.nvN,
              { sx: { marginTop: "16px", lineHeight: 1.25 }, color: l.colors.grey00 },
              p("webapp_two_factor_authentication_cant_access_your_app"),
              " ",
              Ja || (Ja = o.createElement("br", null)),
              o.createElement(
                l.rUS,
                { color: l.colors.midGreen00, onClick: a, target: "_self" },
                p("webapp_two_factor_authentication_use_backup_code")
              )
            ),
            o.createElement(
              l.nvN,
              { sx: { margin: "8px 0", lineHeight: 1.25 }, color: l.colors.grey00 },
              p("webapp_two_factor_authentication_lost_your_phone"),
              en || (en = o.createElement("br", null)),
              o.createElement(
                r.OL,
                { color: "ds.text.brand.standard", to: d.recover2faCodes(_), target: "_blank", rel: "noopener noreferrer" },
                p(Ha)
              )
            )
          )
        );
      };
      var nn, on;
      const rn = ({ securityCode: e, toggleBackupCodeInput: t, onOTPInputChange: a, hasError: n, error: s, login: i }) => {
        var _;
        const { translate: u } = (0, N.Z)(),
          { routes: p } = (0, r.Xo)();
        return (0, c.tZ)(
          o.Fragment,
          null,
          (0, c.tZ)(
            l.nvN,
            { sx: { marginBottom: "18px", lineHeight: 1.25 }, color: l.colors.grey00 },
            u("webapp_two_factor_authentication_use_backup_codes")
          ),
          (0, c.tZ)(l.oil, {
            autoFocus: !0,
            type: "text",
            fullWidth: !0,
            label: u("webapp_two_factor_authentication_backup_code_label"),
            value: e,
            feedbackType: n ? "error" : void 0,
            feedbackText: n ? u(null != (_ = ja[s]) ? _ : ja.UNKNOWN_ERROR) : "",
            onChange: a
          }),
          (0, c.tZ)(
            l.nvN,
            { sx: { marginTop: "16px" }, color: l.colors.grey00 },
            u("webapp_two_factor_authentication_cant_access_your_backup_codes"),
            nn || (nn = (0, c.tZ)("br", null)),
            (0, c.tZ)(
              l.rUS,
              { color: l.colors.midGreen00, onClick: t, target: "_self" },
              u("webapp_two_factor_authentication_use_6_digits_code")
            )
          ),
          (0, c.tZ)(
            l.nvN,
            { sx: { margin: "8px 0" }, color: l.colors.grey00 },
            u("webapp_two_factor_authentication_lost_your_backup_codes"),
            on || (on = (0, c.tZ)("br", null)),
            (0, c.tZ)(
              r.OL,
              { color: "ds.text.brand.standard", to: p.recover2faCodes(i), target: "_blank", rel: "noopener noreferrer" },
              u(Ha)
            )
          )
        );
      };
      var sn;
      class ln extends o.Component {
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
            (this.otp = (0, o.createRef)()),
            (this.otpToken = (0, o.createRef)()),
            (this.password = (0, o.createRef)()),
            (this.logUserForgetMasterPasswordEvent = (e) => {
              (0, O.Kz)(new C.UserForgetMasterPasswordEvent({ hasBiometricReset: !1, hasTeamAccountRecovery: e }));
            }),
            (this.unsubToSessionProgress = () => {}),
            (this.checkIsAccountRecoveryActivated = async () => {
              const e = await k.C.checkDoesLocalRecoveryKeyExist();
              e.success && e.doesExist ? this.props.handleIsAccountRecoveryAvailable(!0) : this.props.handleIsAccountRecoveryAvailable(!1);
            }),
            (this.preFillOtpToken = () => {
              this.props.loginStep === Oa.OtpToken &&
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
              (0, O.Kz)(new C.UserResendTokenEvent({})),
                k.C.openSessionResendToken({ login: this.props.login || "" }),
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
                (0, at.YT)({ type: "login", action: "forgotPassword" })(e);
            }),
            (this.handleDevicePersistenceChange = (e) => {
              this.props.handleDevicePersistenceChange(e.target.checked);
            }),
            (this.getAdditionalInput = () => {
              const { error: e, loginStep: t, translate: a } = this.props,
                n = Boolean(e),
                { showBackupCodeInput: o } = this.state,
                r = () => {
                  this.setState({ securityCode: "", showBackupCodeInput: !o }),
                    this.props.handleUseOTPBackup(!o),
                    this.props.handleTokenInputChange("");
                },
                s = () => {
                  const { defaultDevicePersistenceValue: e } = this.props;
                  return !1;
                };
              return t === Oa.OtpToken
                ? (0, c.tZ)(
                    "div",
                    { className: M()(Ia, Za) },
                    (0, c.tZ)(Ya, {
                      securityCode: this.state.securityCode,
                      maxLength: 6,
                      onTokenInputChange: this.handleTokenInputChange,
                      onKeyDown: this.handleKeyDown,
                      hasError: n,
                      error: e
                    }),
                    s()
                  )
                : t === Oa.Otp || t === Oa.OtpForNewDevice
                ? (0, c.tZ)(
                    "div",
                    { className: M()(Ia, Za) },
                    o
                      ? (0, c.tZ)(rn, {
                          onOTPInputChange: this.handleOtpInputChange,
                          securityCode: this.state.securityCode,
                          hasError: n,
                          toggleBackupCodeInput: r,
                          error: e,
                          login: null != (i = this.props.login) ? i : ""
                        })
                      : (0, c.tZ)(an, {
                          securityCode: this.state.securityCode,
                          maxLength: 6,
                          onOTPInputChange: this.handleOtpInputChange,
                          onKeyDown: this.handleKeyDown,
                          hasError: n,
                          toggleBackupCodeInput: r,
                          error: e,
                          login: null != (l = this.props.login) ? l : ""
                        }),
                    t === Oa.OtpForNewDevice && s()
                  )
                : null;
              var i, l;
            }),
            (this.showRememberMeCheckbox = () => {
              const e = this.props.localAccounts;
              return !!e && e.some((e) => !e.hasLoginOtp && e.login === this.props.login && "webauthn" !== e.rememberMeType);
            }),
            (this.showDashlaneUpdateInfoBox = (e) => e === Ne._V[Ne._V.CLIENT_VERSION_DOES_NOT_SUPPORT_SSO_MIGRATION]);
        }
        componentDidMount() {
          this.checkIsAccountRecoveryActivated(), this.preFillOtpToken();
          const e = this.showRememberMeCheckbox();
          this.setState({ showRememberMeCheckbox: e }),
            (this.unsubToSessionProgress = k.C.openSessionProgressChanged.on(({ statusProgress: e }) => {
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
            case Oa.Otp:
            case Oa.OtpForNewDevice:
              this.otp.current && this.otp.current.focus();
              break;
            case Oa.OtpToken:
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
              loginStep: a,
              login: n,
              translate: r,
              isDashlaneAuthenticatorAvailable: s,
              switchToDashlaneAuthenticatorStep: i
            } = this.props,
            { rememberMeIsChecked: _, showConfirmTokenResent: u, showRememberMeCheckbox: p } = this.state,
            d = [Oa.OtpToken, Oa.Otp, Oa.OtpForNewDevice].includes(a),
            m = Boolean(e),
            g = a === Oa.OtpToken;
          return (0, c.tZ)(
            "fieldset",
            null,
            (0, c.tZ)(za, { login: n, onBackToEmailStepClick: this.handleBackToEmailStepClick }),
            d
              ? (0, c.tZ)("div", null, this.getAdditionalInput())
              : (0, c.tZ)(
                  "div",
                  { className: Ia },
                  (0, c.tZ)(Xa, {
                    error: e,
                    hasError: m,
                    onKeyDown: this.handleKeyDown,
                    onPasswordInputChange: this.props.handlePasswordInputChange
                  }),
                  p &&
                    !this.showDashlaneUpdateInfoBox(e) &&
                    (0, c.tZ)(
                      "div",
                      { sx: { marginTop: "16px" } },
                      (0, c.tZ)(b.XZ, {
                        label: r("webapp_login_form_password_fieldset_remember_me"),
                        defaultChecked: _,
                        onChange: (e) => {
                          this.onRememberMeCheckboxChange(e.target.checked);
                        }
                      }),
                      _ &&
                        (0, c.tZ)(
                          "div",
                          { className: "warningOnlyEnable--uJf_gb1hOc" },
                          r("webapp_login_form_password_fieldset_remember_me_warning_text")
                        )
                    )
                ),
            this.showDashlaneUpdateInfoBox(e) ? sn || (sn = (0, c.tZ)(Ra, null)) : null,
            !m && this.state.openSessionProgress > 0
              ? (0, c.tZ)(Ga.Z, { progress: this.state.openSessionProgress })
              : (0, c.tZ)(Da.Z, {
                  size: "large",
                  fullWidth: !0,
                  loading: t,
                  label: r("webapp_login_form_password_fieldset_password_confirm_log_in"),
                  onClick: this.handleFormSubmit,
                  "data-testid": "login-button"
                }),
            !d && this.props.isAccountRecoveryAvailable
              ? (0, c.tZ)(
                  "button",
                  {
                    type: "button",
                    onClick: this.onAccountRecoveryButtonClick,
                    className: "disclaimerButton--IfDDo_tB6_ disclaimerLink--BOkSbZ0BF2"
                  },
                  r(Ka)
                )
              : null,
            d || this.props.isAccountRecoveryAvailable
              ? null
              : (0, c.tZ)(
                  "a",
                  {
                    href: "https://support.dashlane.com/hc/articles/202698981-I-forgot-my-master-password-what-can-I-do-",
                    onClick: this.onForgetPasswordLinkClick,
                    className: "disclaimerLink--BOkSbZ0BF2",
                    target: "_blank",
                    rel: "noopener noreferrer"
                  },
                  r(Ka)
                ),
            g
              ? (0, c.tZ)(
                  o.Fragment,
                  null,
                  (0, c.tZ)(
                    l.Ejs,
                    { alignItems: "center", sx: { marginTop: "36px", marginBottom: "24px" } },
                    (0, c.tZ)(l.nvN, { sx: { marginRight: "5px" } }, r("webapp_dashlane_authenticator_authentication_didnt_receive_code")),
                    (0, c.tZ)(
                      l.zxk,
                      { type: "button", nature: "ghost", onClick: this.handleTokenResent, sx: { textDecoration: "underline" } },
                      r("webapp_login_form_password_fieldset_resend_token")
                    ),
                    (0, c.tZ)(
                      Fa.Z,
                      null,
                      u
                        ? (0, c.tZ)(
                            wa.Z,
                            { classNames: { ...Wa }, timeout: { enter: 400, exit: 0 }, exit: !1 },
                            (0, c.tZ)(
                              "div",
                              { className: "emailTokenConfirmation--ZpNoLyqhOQ" },
                              r("webapp_login_form_password_fieldset_security_code_resent")
                            )
                          )
                        : null
                    )
                  ),
                  s
                    ? (0, c.tZ)(
                        l.Ejs,
                        { alignItems: "center", sx: { margin: "24px 0px" } },
                        (0, c.tZ)(
                          l.nvN,
                          { sx: { marginRight: "5px" } },
                          r("webapp_dashlane_authenticator_authentication_cant_access_your_email")
                        ),
                        (0, c.tZ)(
                          l.rUS,
                          { onClick: i, color: l.colors.midGreen00 },
                          r("webapp_dashlane_authenticator_authentication_use_dashlane_authenticator_app")
                        )
                      )
                    : null
                )
              : null
          );
        }
      }
      var cn = a(298049);
      const _n = "actionButton--QTqWFEK7g6";
      var un,
        pn = a(107556);
      const dn = ({ login: e, switchToPasswordStep: t, switchToEmailStep: a }) => {
          const { translate: n } = (0, N.Z)(),
            [r, s] = (0, o.useState)(!1),
            i = o.useRef(new AbortController()),
            c = async () => {
              try {
                const t = await (0, pn.rD)(e);
                if (!t.success) return void s(!0);
                (await (0, pn.nv)(t, e, i.current.signal)).success || s(!0);
              } catch (e) {
                s(!0);
              }
            };
          return (
            (0, o.useEffect)(() => {
              c();
            }, []),
            o.createElement(
              l.Ejs,
              { flexDirection: "column" },
              o.createElement(za, { login: e, onBackToEmailStepClick: a }),
              o.createElement(
                l.Ejs,
                { flexDirection: "column", alignItems: "center", justifyContent: "center" },
                o.createElement(
                  l.k$b,
                  { sx: { mb: 50, mt: 24 }, alignSelf: "center" },
                  un || (un = o.createElement(l.oie, { size: 60, "aria-hidden": "true" }))
                )
              ),
              r
                ? o.createElement(
                    o.Fragment,
                    null,
                    o.createElement(l.k$b, null, o.createElement(l.X6q, { size: "x-small" }, n("webapp_login_form_webauthn_error_title"))),
                    o.createElement(
                      l.k$b,
                      null,
                      o.createElement(
                        l.nvN,
                        { id: "disableDialogBody", color: "neutrals.8", sx: { mt: "10px", mb: "26px" } },
                        n("webapp_login_form_webauthn_error_title_description")
                      )
                    )
                  )
                : null,
              o.createElement(
                l.k$b,
                { sx: { mb: 5 } },
                o.createElement(
                  l.zxk,
                  {
                    nature: "primary",
                    type: "button",
                    onClick: () => {
                      i && (i.current.abort(), (i.current = new AbortController())),
                        (0, O.Kz)(new C.UserAskUseOtherAuthenticationEvent({ next: C.Mode.MasterPassword, previous: C.Mode.Biometric })),
                        t();
                    },
                    className: _n
                  },
                  n("webapp_login_form_webauthn_button_use_master_password")
                ),
                r
                  ? o.createElement(
                      l.k$b,
                      { sx: { mt: 3 } },
                      o.createElement(
                        l.zxk,
                        {
                          nature: "secondary",
                          type: "button",
                          onClick: () => {
                            s(!1), c();
                          },
                          className: _n
                        },
                        n("webapp_login_form_webauthn_error_title_button_retry")
                      )
                    )
                  : null
              )
            )
          );
        },
        mn = ({ login: e, step: t, lastSuccessfulAccount: a }) => {
          const { translate: n } = (0, N.Z)(),
            r = t === Oa.Password && e === a?.login && "webauthn" === a.rememberMeType && a.shouldAskMasterPassword;
          return o.createElement(
            "header",
            null,
            o.createElement(
              "h1",
              { className: M()("heading--OVR_vOnimN", { "headingWithDescription--czkfC1wkxh": r }) },
              n("webapp_login_form_heading_log_in")
            ),
            r
              ? o.createElement(
                  l.nvN,
                  { color: l.colors.dashGreen01, size: "x-small", sx: { mb: "16px", fontSize: "14px", lineHeight: "20px" } },
                  n("webapp_login_form_password_step_webauthn_description")
                )
              : null
          );
        };
      var gn = a(814119),
        hn = a(77826),
        En = a(764549),
        fn = a(176762),
        xn = a(169340),
        wn = a(846086),
        bn = a(267678);
      const vn = {
          generic: "_common_generic_error",
          [Ne._V[Ne._V.DASHLANE_AUTHENTICATOR_PUSH_NOTIFICATION_DENIED]]: "webapp_dashlane_authenticator_authentication_error_denied",
          [Ne._V[Ne._V.TOKEN_EXPIRED]]: "webapp_dashlane_authenticator_authentication_error_timeout"
        },
        kn = ({ switchToOtpTokenStep: e, sendDashlaneAuthenticatorPush: t, errorKey: a }) => {
          const { translate: n } = (0, N.Z)(),
            [r, s] = (0, o.useState)(!1);
          return (
            (0, o.useEffect)(() => {
              s(!a);
            }, [a]),
            (0, c.tZ)(
              o.Fragment,
              null,
              (0, c.tZ)(l.nvN, { sx: { fontSize: "32px", fontWeight: 500 } }, n("webapp_dashlane_authenticator_authentication_title")),
              r
                ? (0, c.tZ)(l.HoD, {
                    "data-testid": "dashlane-authenticator-loading-icon",
                    sx: { margin: "24px 0px" },
                    size: "80px",
                    color: l.colors.dashGreen00
                  })
                : (0, c.tZ)(
                    l.Ejs,
                    { flexDirection: "column", sx: { margin: "24px 0px" } },
                    (0, c.tZ)(A.Z, {
                      height: 80,
                      width: 80,
                      animationParams: { renderer: "svg", animationData: T, loop: !1, autoplay: !0 }
                    }),
                    a
                      ? (0, c.tZ)(
                          o.Fragment,
                          null,
                          (0, c.tZ)(
                            l.nvN,
                            { size: "small", color: l.colors.functionalRed02, sx: { margin: "24px 0px" } },
                            n(vn[a] ? vn[a] : vn.generic)
                          ),
                          (0, c.tZ)(
                            l.zxk,
                            { sx: { alignSelf: "baseline" }, type: "button", nature: "primary", onClick: t },
                            n("webapp_dashlane_authenticator_authentication_send_another_push_button")
                          )
                        )
                      : null
                  ),
              (0, c.tZ)(
                l.Ejs,
                { alignItems: "center" },
                (0, c.tZ)(
                  l.nvN,
                  { size: "small", sx: { marginRight: "5px" } },
                  n("webapp_dashlane_authenticator_authentication_cant_access_your_app")
                ),
                (0, c.tZ)(
                  l.rUS,
                  { target: "_blank", rel: "noopener noreferrer", onClick: e, color: l.colors.midGreen00, sx: { fontSize: "14px" } },
                  n("webapp_dashlane_authenticator_authentication_send_code_by_email_link")
                )
              )
            )
          );
        };
      var yn = a(563794);
      const Sn = ({ switchToEmailStep: e }) => {
        const { translate: t } = (0, N.Z)();
        return (0, c.tZ)(
          o.Fragment,
          null,
          (0, c.tZ)(l.X6q, null, t("webapp_login_form_password_less_title")),
          (0, c.tZ)(l.nvN, { color: "neutrals.8", sx: { margin: "12px 0px 32px 0px" } }, t("webapp_login_form_password_less_description")),
          (0, c.tZ)(
            l.Ejs,
            { flexDirection: "column", gap: "8px" },
            (0, c.tZ)(l.zxk, { nature: "primary", type: "button", onClick: e }, t("webapp_login_form_password_less_confirm_button")),
            (0, c.tZ)(
              l.zxk,
              { nature: "secondary", type: "button", onClick: () => (0, at.nL)(yn.V6) },
              t("webapp_login_form_password_less_help_button")
            )
          )
        );
      };
      var Tn,
        An = a(499906),
        Nn = a(778301),
        On = a(134677),
        Cn = a(548122);
      const Rn = {
          [Oa.ActivateSSO]: C.PageView.LoginSso,
          [Oa.Email]: C.PageView.LoginEmail,
          [Oa.Password]: C.PageView.LoginMasterPassword,
          [Oa.Otp]: C.PageView.LoginTokenAuthenticator,
          [Oa.OtpToken]: C.PageView.LoginTokenEmail,
          [Oa.OtpForNewDevice]: C.PageView.LoginTokenAuthenticator,
          [Oa.WebAuthn]: C.PageView.LoginWebauthn
        },
        Dn = ({
          accounts: e,
          lee: t,
          shouldAskMasterPassword: a,
          requiredPermissions: n,
          preFilledEmail: s,
          preFilledOtpToken: l,
          isTACFlow: _ = !1
        }) => {
          const u = (0, An.t)(),
            { logout: p } = (0, ce.u)(g.V),
            d = (0, Nn.a)(t.dispatchGlobal),
            [m, h] = (0, o.useState)(""),
            [E, f] = (0, o.useState)(""),
            [x, w] = (0, o.useState)(!1),
            [b, v] = (0, o.useState)(!1),
            [y, S] = (0, o.useState)(!1),
            [T, A] = (0, o.useState)(!1),
            [R, D] = (0, o.useState)(!1),
            [I, Z] = (0, o.useState)(!1),
            [L, M] = (0, o.useState)(!1),
            [U, V] = (0, o.useState)(!1),
            [B, F] = (0, o.useState)(null != s ? s : ""),
            [z, G] = (0, o.useState)(""),
            [W, j] = (0, o.useState)(!1),
            [q, K] = (0, o.useState)(""),
            [H, $] = (0, o.useState)(null),
            [X, Y] = (0, o.useState)(!1),
            [Q, J] = (0, o.useState)(!0),
            [ee, te] = (0, o.useState)(Oa.Email),
            [ae, ne] = (0, o.useState)(""),
            [oe, re] = (0, o.useState)(!1),
            [se, ie] = (0, o.useState)(!1),
            [le, _e] = (0, o.useState)(!1),
            [ue, pe] = (0, o.useState)(!1),
            [de, me] = (0, o.useState)(!1),
            { translate: ge } = (0, N.Z)(),
            he = (0, o.useRef)([]),
            Ee = (0, o.useRef)(u?.step),
            [fe, xe] = (0, o.useState)(!1),
            { loginUserWithEnclaveSSO: we } = (0, ce.u)(Ta.y),
            be = (0, o.useCallback)(async () => {
              "failure" === (await we({ userEmailAddress: B })).tag && (Z(!1), f("UNKNOWN_ERROR"));
            }, [we, B]),
            ve = (0, o.useCallback)(
              (e) => {
                Rn[e] && (0, O.Nc)(Rn[e], _ ? C.BrowseComponent.Tac : C.BrowseComponent.MainApp);
              },
              [_]
            ),
            ke = (0, o.useCallback)(
              (e) => {
                const t = e !== ee;
                f(""), t && (te(e), ve(e));
              },
              [ee, ve]
            );
          (0, o.useEffect)(() => {
            f("");
          }, [B, H, X, q, z]);
          const ye = (0, o.useCallback)(async () => {
              const { migration: e, serviceProviderUrl: t } = await k.C.getSSOMigrationInfo(),
                { isNitroProvider: a } = await k.C.getSSOProviderInfo();
              void 0 !== e &&
                t &&
                (e === Sa.vX.MP_TO_SSO
                  ? (ke(Oa.ActivateSSO), ne((0, at.C0)(t)), xe(null != a && a), ie(!1))
                  : e === Sa.vX.MP_TO_SSO_WITH_INFO && (ke(Oa.ActivateSSO), ne((0, Na.$9)()), ie(!0)));
            }, [ke]),
            Se = (0, o.useCallback)(() => e.find((e) => e.isLastSuccessfulLogin), [e]),
            Te = (0, o.useCallback)(() => {
              if (a) return void ke(Oa.Password);
              if (!(0, wn._U)()) return;
              const e = Se();
              e && "webauthn" === e.rememberMeType && (e.shouldAskMasterPassword ? ke(Oa.Password) : ke(Oa.WebAuthn));
            }, [Se, a, ke]),
            Ae = (0, o.useCallback)(() => {
              he.current = he.current.concat([
                k.C.openSessionFailed.on((e) => {
                  const t = e.errorCode;
                  "USER_DOESNT_EXIST_SSO" === t && (0, r.uX)(`${i.SF}?email=${B}`), f(t), Z(!1);
                }),
                k.C.liveLoginStatus.on((e) => {
                  e.loggedIn && e.needsSSOMigration && ye();
                }),
                k.C.openSessionMasterPasswordLess.on(() => {
                  ke(Oa.MasterPasswordLess);
                }),
                k.C.openSessionTokenSent.on(() => {
                  ke(Oa.OtpToken);
                }),
                k.C.openSessionDashlaneAuthenticator.on(() => {
                  ke(Oa.DashlaneAuthenticator),
                    pe(!0),
                    k.C.openSessionWithDashlaneAuthenticator({ login: B, password: H, persistData: Q, deviceName: m });
                }),
                k.C.openSessionOTPSent.on(() => {
                  ke(Oa.Otp);
                }),
                k.C.openSessionOTPForNewDeviceRequired.on(() => {
                  ke(Oa.OtpForNewDevice);
                }),
                k.C.openSessionAskMasterPassword.on(() => {
                  ke(Oa.Password);
                })
              ]);
            }, [ye, Te, ee, m, B, H, Q, ke]);
          (0, o.useEffect)(
            () => (
              Ae(),
              () => {
                he.current.forEach((e) => e());
              }
            ),
            [Ae]
          ),
            (0, o.useEffect)(() => {
              if (!Ee.current && u?.step) {
                Ee.current = u.step;
                const e = ((e) => {
                  switch (e) {
                    case va.F.BackupCodeOTP1:
                    case va.F.OTP1:
                      return Oa.OtpForNewDevice;
                    case va.F.BackupCodeOTP2:
                    case va.F.OTP2:
                      return Oa.Otp;
                    case va.F.OTPToken:
                      return Oa.OtpToken;
                    case va.F.Password:
                      return Oa.Password;
                    case va.F.Email:
                      return Oa.Email;
                    default:
                      return;
                  }
                })(Ee.current);
                e && te(e);
              }
            }, [u]),
            (0, o.useEffect)(() => {
              Te();
            }, []),
            (0, o.useEffect)(() => {
              Z(!1), ve(ee);
            }, [ee, ve]),
            (0, o.useEffect)(() => {
              if ((h((0, xn.M)(ge("webapp_login_form_regsiter_fallback_browser_name"))), f(""), !s)) {
                const e = Se()?.login;
                e && F(e),
                  k.C.getUserLogin().then((e) => {
                    null != e && e !== B && F(e);
                  });
              }
              (async () => {
                const e = await k.C.isRecoveryRequestPending();
                e.success && v(e.response);
              })();
            }, []);
          const Ne = (0, o.useCallback)(
            async (e) => {
              e && e.preventDefault(), f(""), Z(!0);
              const t = await k.C.openSession({ login: B }),
                { isNitroProvider: a, serviceProviderUrl: n } = await k.C.getSSOProviderInfo();
              if (n) {
                localStorage.setItem(Cn.MG, "true");
                const e = (0, at.C0)(n);
                if ((ne(e), xe(null != a && a), t === ka.xZ.SSOLogin)) return void (a ? be() : (0, at.nL)(e));
              }
            },
            [B, be]
          );
          (0, o.useEffect)(() => {
            s && Ne();
          }, [Ne, s]);
          const Oe = async (e) => {
              if ((e && e.preventDefault(), f(""), Z(!0), x && null !== H)) {
                const e = await (async (e) => await k.C.checkRecoveryRequestStatus({ masterPassword: e }))(H);
                if (e.success)
                  switch ((v(!1), D(!1), S(!1), A(!1), Z(!1), e.response.status)) {
                    case "PENDING":
                      return v(!0), void D(!0);
                    case "APPROVED":
                      return void S(!0);
                    case "REFUSED":
                      return void A(!0);
                    case "OVERRIDDEN":
                      return;
                    case "CANCELED":
                      return void D(!0);
                  }
              }
              switch (ee) {
                case Oa.OtpToken:
                  k.C.openSessionWithToken({ login: B, password: H, token: q, persistData: Q, deviceName: m });
                  break;
                case Oa.Otp:
                  k.C.openSessionWithOTP({ login: B, password: H, otp: z, withBackupCode: W });
                  break;
                case Oa.OtpForNewDevice:
                  k.C.openSessionWithOTPForNewDevice({ login: B, password: H, otp: z, persistData: Q, deviceName: m, withBackupCode: W });
                  break;
                case Oa.Password:
                  k.C.openSessionWithMasterPassword({
                    login: B,
                    password: null != H ? H : "",
                    rememberPassword: X,
                    requiredPermissions: n
                  });
              }
            },
            Ce = () => {
              _e(!1), D(!1), S(!1), A(!1), M(!1);
            },
            Re = async () => {
              (0, O.Kz)(new C.UserUseAnotherAccountEvent({})),
                h(""),
                Ce(),
                Z(!1),
                V(!1),
                G(""),
                K(""),
                $(null),
                ne(""),
                re(!1),
                ie(!1),
                pe(!1),
                te(Oa.Email),
                p();
            },
            De = () => {
              S(!1);
            },
            Ie = () => {
              Ce(), _e(!0);
            },
            Ze = ee === Oa.Email,
            Pe = ee === Oa.Password,
            Le = ee === Oa.Otp || ee === Oa.OtpToken || ee === Oa.OtpForNewDevice,
            Me = ee === Oa.ActivateSSO,
            Ue = ee === Oa.WebAuthn,
            Ve = ee === Oa.DashlaneAuthenticator,
            Be = ee === Oa.MasterPasswordLess,
            Fe = Se();
          return (0, c.tZ)(
            "div",
            null,
            Tn || (Tn = (0, c.tZ)("div", { id: "dashlane-dialog" })),
            (0, c.tZ)(
              bn.r,
              null,
              Ve || Be ? null : (0, c.tZ)(mn, { login: B, step: ee, lastSuccessfulAccount: Fe }),
              (0, c.tZ)(
                "form",
                {
                  autoComplete: "off",
                  className: "form--E2abwVNcMi",
                  onSubmit: (e) => {
                    const t = ee === Oa.Password,
                      a = ee === Oa.Otp || ee === Oa.OtpToken || ee === Oa.OtpForNewDevice,
                      n = ee === Oa.DashlaneAuthenticator;
                    (t || a || n) && (e.preventDefault(), Oe());
                  }
                },
                Ze
                  ? (0, c.tZ)(Ba, {
                      error: E,
                      handleLoginChange: F,
                      handleOtherAccountSelect: () => {
                        F(""), V(!0);
                      },
                      isCarbonRequestPending: I,
                      isLoginUsingAnotherLocalAccount: U,
                      localAccounts: e,
                      login: B,
                      onLoginSubmit: Ne,
                      translate: ge
                    })
                  : null,
                Pe || Le || Me
                  ? (0, c.tZ)(ln, {
                      defaultDevicePersistenceValue: Q,
                      dispatchGlobal: t.dispatchGlobal,
                      error: E,
                      handleBackToEmailStepClick: Re,
                      handleDevicePersistenceChange: (e) => {
                        J(e), f("");
                      },
                      handleFormSubmit: Oe,
                      handlePasswordInputChange: $,
                      handleRememberMeCheckboxChange: Y,
                      handleOtpInputChange: G,
                      handleUseOTPBackup: j,
                      handleTokenInputChange: K,
                      handleShowAccountRecoveryDialog: Ie,
                      handleIsAccountRecoveryAvailable: w,
                      handleShowRecoveryPendingDialog: () => {
                        Ce(), D(!0);
                      },
                      isCarbonRequestPending: I,
                      isAccountRecoveryAvailable: x,
                      isAccountRecoveryPending: b,
                      login: B,
                      localAccounts: e,
                      loginStep: ee,
                      preFilledOtpToken: l,
                      translate: ge,
                      isDashlaneAuthenticatorAvailable: ue,
                      switchToDashlaneAuthenticatorStep: async () => {
                        ke(Oa.DashlaneAuthenticator),
                          await k.C.openSessionWithDashlaneAuthenticator({ login: B, password: H, persistData: Q, deviceName: m });
                      }
                    })
                  : null,
                Ue ? (0, c.tZ)(dn, { login: B, switchToPasswordStep: () => ke(Oa.Password), switchToEmailStep: Re }) : null
              ),
              Me && !oe
                ? (0, c.tZ)(Aa.j, {
                    activateLink: ae,
                    onClose: () => {
                      re(!0);
                    },
                    localSsoRedirect: se,
                    isNitroSSO: fe,
                    nitroLoginCommand: be
                  })
                : null,
              Ve
                ? (0, c.tZ)(kn, {
                    errorKey: E,
                    switchToOtpTokenStep: async () => {
                      await k.C.cancelDashlaneAuthenticatorRegistration(),
                        ke(Oa.OtpToken),
                        await k.C.openSessionResendToken({ login: B || "" });
                    },
                    sendDashlaneAuthenticatorPush: async () => {
                      Z(!0),
                        f(""),
                        await k.C.openSessionWithDashlaneAuthenticator({ login: B, password: H, persistData: Q, deviceName: m });
                    }
                  })
                : null,
              Be ? (0, c.tZ)(Sn, { switchToEmailStep: Re }) : null,
              (0, c.tZ)(cn.v, {
                isOpen: oe,
                onLogout: () => {
                  d(), re(!1);
                },
                onDismiss: () => {
                  re(!1);
                }
              }),
              (0, c.tZ)(gn.W, {
                showAccountRecoveryDialog: le,
                handleDismiss: () => {
                  _e(!1);
                }
              }),
              (0, c.tZ)(hn.H, {
                isAccountRecoveryPending: R,
                shouldSendNewRequest: !H,
                handleShowAccountRecoveryDialog: Ie,
                handleShowGenericRecoveryError: () => {
                  Ce(), M(!0);
                },
                handleDismiss: () => {
                  D(!1);
                }
              }),
              (0, c.tZ)(En.g, {
                isAccountRecoveryApproved: y,
                handleDismiss: De,
                handleAccountRecovery: async () => {
                  if (!H) return Z(!1), void S(!1);
                  De();
                  const e = await k.C.recoverUserData({ masterPassword: H });
                  Z(!1),
                    e.success &&
                      (k.C.changeMasterPassword({ newPassword: H, flow: ya.pT.ADMIN_ASSISTED_RECOVERY }),
                      (0, r.uX)(`${i.ci}/change-master-password`));
                }
              }),
              (0, c.tZ)(fn._, {
                isAccountRecoveryRejected: T,
                handleDismiss: () => {
                  A(!1);
                }
              }),
              (0, c.tZ)(P.H, {
                isAccountRecoveryError: L,
                handleGenericRecoveryErrorClose: () => {
                  M(!1);
                }
              }),
              (0, c.tZ)(On.ko, {
                isOpen: de,
                handleButtonClick: (e) => {
                  e.preventDefault(), (0, at.nL)(yn.JW);
                },
                handleClose: () => {
                  me(!1);
                }
              })
            )
          );
        },
        In = { appear: "appear--tCOfkY_4m1", appearActive: "appearActive--Rmhri1AxL1" };
      var Zn,
        Pn = a(817809);
      const Ln = _a.Standard,
        Mn = ({ options: { marketingContentType: e = Ln, requiredPermissions: t } = {}, location: a, lee: n }) => {
          const {
              carbon: { localAccounts: s }
            } = n,
            { search: l } = (0, r.TH)(),
            _ = Ke.parse(l),
            u = _.email,
            p = _.token,
            { translate: d } = (0, N.Z)(),
            [m, g] = (0, o.useState)(void 0);
          (0, o.useEffect)(() => {
            const e = !a.state?.ignoreRedirect && a.search.includes("askmp");
            g(e);
          }, [a.search]);
          const h = e === _a.DashlaneBusiness,
            E =
              (_a.Standard, { redirectLocation: "dashlaneBusiness" === e ? i.P : i.SF, buttonText: d("webapp_auth_panel_create_sign_up") });
          return void 0 === m
            ? null
            : (0, c.tZ)(
                o.Fragment,
                null,
                (0, c.tZ)(ba, { ...E, helperText: d("webapp_auth_panel_create_an_account") }),
                (0, c.tZ)(
                  wa.Z,
                  {
                    classNames: { appear: In.appear, appearActive: In.appearActive },
                    appear: !0,
                    in: !0,
                    timeout: { appear: 500, enter: 0, exit: 0 }
                  },
                  (0, c.tZ)(
                    "div",
                    { className: "loginPanelWrapper--mw7ALD4B3k" },
                    (0, c.tZ)(
                      "div",
                      { className: M()("panel--AjV4TV2oGi", "loginPanel--EpThv9MZB4") },
                      null !== s
                        ? (0, c.tZ)(Dn, {
                            accounts: s,
                            lee: n,
                            requiredPermissions: t,
                            shouldAskMasterPassword: m,
                            preFilledEmail: u,
                            preFilledOtpToken: p,
                            isTACFlow: h
                          })
                        : (0, c.tZ)("h1", { className: "subheading--QeqKHbbK06" }, d("webapp_login_panel_loading"))
                    )
                  )
                ),
                Zn || (Zn = (0, c.tZ)(Pn.r, { layout: "absolute" }))
              );
        },
        Un = (e) => {
          const { options: t } = e,
            a = t?.marketingContentType === _a.DashlaneBusiness,
            { loading: n, data: r } = (0, ga.G)(),
            s = window.localStorage.getItem("extng.loginFlow.forceLegacyFallback"),
            i = (0, Nn.a)(e.lee.dispatchGlobal);
          return n
            ? null
            : (s && "true" === s) || r
            ? o.createElement(Mn, { ...e })
            : o.createElement(xa, { location: e.location, isTacFlow: a, logoutHandler: i });
        };
      var Vn = a(133392);
      const Bn = async (e, t, a, n) => {
          const o = t,
            r = {
              anonymousUserId: (0, ma.n5)(e.globalState),
              login: a,
              password: o.password,
              format: "US",
              language: "en",
              subscribe: o.emailsTipsAndOffers.valueOr(!1),
              deviceName: (0, xn.M)((0, Vn.Iu)("webapp_login_form_regsiter_fallback_browser_name"))
            },
            s = await k.C.createAccountStep1(r);
          await (async (e, t, a, n) => {
            if (!a.valid) {
              const t = new Error("accountCreationStep1.valid was not defined on confirm submit");
              return e.reportError(t), Promise.reject(t);
            }
            if (t.isEu && !t.privacyPolicyAndToS.valueOr(!1)) {
              const t = new Error("termsOfService set to false on confirm submit");
              return e.reportError(t), Promise.reject(t);
            }
            const o = t.privacyPolicyAndToS.caseOf({ just: (e) => [{ consentType: "privacyPolicyAndToS", status: e }], nothing: () => [] }),
              r = { consentType: "emailsOffersAndTips", status: a.encryptSettingsRequest.subscribe };
            try {
              await k.C.createAccountStep2({
                createAccountResult: a,
                options: { flowIndicator: n ? "teamTrial" : "standaloneAccount" },
                isStandAlone: !0,
                consents: [...o, r]
              });
            } catch (t) {
              const a = t instanceof Error ? t : new Error("Unknown error");
              e.reportError(a, "Account creation failed");
            }
          })(e, t, s, n);
        },
        Fn = ({ teamUuid: e, login: t }) => {
          var a;
          const { search: n } = (0, r.TH)(),
            s = `${null != (a = Ke.parse(n).team) ? a : ""}`,
            [i, c] = (0, o.useState)(!1),
            { translate: _ } = (0, N.Z)(),
            { requestInviteLinkToken: u } = (0, qe.h)(),
            p = (0, o.useCallback)(async () => {
              c(!0), await u(e, t), c(!1);
            }, [t, u, e]);
          return (
            (0, o.useEffect)(() => {
              p();
            }, [p]),
            (0, o.useEffect)(() => {
              (0, O.Nc)(C.PageView.JoinDashlaneTeamVerifyEmailAddress),
                (0, O.Kz)(
                  new C.UserSignupToDashlaneEvent({
                    invitationLinkClickOrigin: s
                      ? C.InvitationLinkClickOrigin.SharedInvitationLink
                      : C.InvitationLinkClickOrigin.InvitationEmail,
                    signupFlowStep: C.SignupFlowStep.VerifyEmail
                  })
                );
            }, [s]),
            (0, b.tZ)(
              l.Ejs,
              { gap: 6, flexDirection: "column" },
              (0, b.tZ)(l.X6q, null, _("webapp_invite_link_header")),
              (0, b.tZ)(l.nvN, null, _.markup("webapp_invite_link_email_sent_description_markup", { login: t })),
              (0, b.tZ)(l.nvN, null, _("webapp_invite_link_email_not_received_description")),
              (0, b.tZ)(
                b.zx,
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
      var zn = a(210051),
        Gn = a(258163),
        Wn = a(814691);
      const jn = ({
        lee: e,
        onSubmit: t,
        fields: a,
        setIsLoading: n,
        setLoginErrorType: o,
        loginUserWithEnclaveSSO: s,
        isInviteLinkFlow: i
      }) => {
        var l;
        if ((o((0, zn.vV)(a.email) ? null : Xn.INVALID_EMAIL), !((e) => (0, zn.vV)(e.email))(a))) return;
        n(!0);
        const c = null != (l = a.email) ? l : "";
        k.C.checkLogin(c)
          .then(({ accountCreationCode: e, isUserProposed: l, isUserAccepted: _ }) => {
            const u = {
              login: c,
              isSsoUser: e === Gn.r.USER_SSO_PROVISIONED || e === Gn.r.USER_DOESNT_EXIST_SSO_NON_PROVISIONED,
              isNitroSsoUser: e === Gn.r.USER_NITRO_SSO_PROVISIONED,
              isSsoNonProvisioned: e === Gn.r.USER_DOESNT_EXIST_SSO_NON_PROVISIONED,
              alreadyExists: e === Gn.r.USER_EXISTS,
              isValid: e !== Gn.r.USER_DOESNT_EXIST_INVALID_MX
            };
            let p = null,
              d = !1;
            const m = i && !1 === l && !1 === _,
              g = i && !0 === l && !1 === _;
            if ((u.isValid || (p = Xn.INVALID_EMAIL), u.isNitroSsoUser && (s({ userEmailAddress: u.login }), (d = !0)), u.isSsoUser))
              u.isSsoNonProvisioned ? (p = Xn.SSO_USER_NON_PROVISIONED) : (d = !0);
            else {
              if (u.alreadyExists) return void (0, r.uX)(`/login?email=${a.email}`);
              !m || (u.isNitroSsoUser && u.isSsoUser) ? g && (p = Xn.TEAM_ACCEPTANCE_NEEDED) : (p = Xn.USER_NOT_PROPOSED);
            }
            n(d), o(p), u.isSsoUser || u.isNitroSsoUser || p || !u.isValid || t({ login: a.email });
          })
          .catch((t) => {
            n(!1), o(Xn.FAILED), e.dispatchGlobal(Wn.Qy.error({ message: "Login validation failed", content: { error: t.message } }));
          });
      };
      var qn;
      let Kn = (function (e) {
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
      const Hn = {
          [Kn.SSO_USER_NON_PROVISIONED]: "standalone_account_creation_error_sso_user_non_provisioned",
          [Kn.INVALID_EMAIL]: "standalone_account_creation_error_invalid_email",
          [Kn.FAILED]: "standalone_account_creation_error_failed",
          [Kn.USER_NOT_PROPOSED]: "standalone_account_creation_error_sso_user_non_proposed",
          [Kn.TEAM_ACCEPTANCE_NEEDED]: "standalone_account_creation_error_invite_link_not_accepted",
          [Kn.TEAM_ACCEPTANCE_FAILED]: "standalone_account_creation_error_invite_link_acceptance_failed"
        },
        $n = ({
          onSubmit: e,
          lee: t,
          isB2BFlow: a,
          hasBeenRedirected: n,
          setHasBeenRedirected: s,
          loginErrorType: _,
          setLoginErrorType: u,
          loginValue: p,
          setLoginValue: d
        }) => {
          var m, g;
          const { search: h, pathname: E } = (0, r.TH)(),
            f = Ke.parse(h),
            x = `${null != (m = f.email) ? m : ""}`,
            w = `${null != (g = f.team) ? g : ""}`,
            { translate: v } = (0, N.Z)(),
            [k, y] = (0, o.useState)(!1),
            S = (0, o.useRef)(null),
            { loginUserWithEnclaveSSO: T } = (0, ce.u)(Ta.y),
            { getInviteLinkData: A, inviteLinkData: R } = (0, qe.h)(),
            D = E === i.$F,
            I = D && !!w,
            Z = I && !0 === R?.disabled;
          (0, o.useEffect)(() => {
            S.current?.focus?.();
          }, []),
            (0, o.useEffect)(() => {
              D &&
                ((0, O.Nc)(C.PageView.JoinDashlaneTeamEnterEmailAddress),
                (0, O.Kz)(
                  new C.UserSignupToDashlaneEvent({
                    invitationLinkClickOrigin: I
                      ? C.InvitationLinkClickOrigin.SharedInvitationLink
                      : C.InvitationLinkClickOrigin.InvitationEmail,
                    signupFlowStep: C.SignupFlowStep.EnterEmailAddress
                  })
                ));
            }, [D, I]),
            (0, o.useEffect)(() => {
              w && A(w);
            }, [A, w]);
          const P = () => {
              var e;
              return (null != (e = S?.current?.value) ? e : "").toLocaleLowerCase();
            },
            L = () => ({ email: P(), isB2B: a }),
            M = (0, o.useCallback)(
              (a) => {
                a?.preventDefault();
                const n = L();
                return (
                  jn({
                    lee: t,
                    onSubmit: e,
                    fields: n,
                    setIsLoading: y,
                    setLoginErrorType: u,
                    loginUserWithEnclaveSSO: T,
                    isInviteLinkFlow: I
                  }),
                  !1
                );
              },
              [L, e]
            );
          (0, o.useEffect)(() => {
            x && !n && (s(!0), M());
          }, [M, n, x, s]);
          const U = ((e) => {
              if (!e) return null;
              let t;
              if (e === Kn.SSO_USER_NON_PROVISIONED) {
                const e = P(),
                  a = e.slice(e.indexOf("@") + 1);
                t = v(Hn[Kn.SSO_USER_NON_PROVISIONED], { domain: a });
              } else t = v(Hn[e]);
              return t;
            })(_),
            V = a && !!x;
          return (0, c.tZ)(
            l.Ejs,
            { gap: 6, flexDirection: "column", as: "form", autoComplete: "off", noValidate: !0, onSubmit: M },
            Z
              ? (0, c.tZ)(b.ke, {
                  size: "medium",
                  mood: "warning",
                  title: v("webapp_account_creation_invite_link_disabled_info_title"),
                  description: v("webapp_account_creation_invite_link_disabled_info_description")
                })
              : null,
            (0, c.tZ)(
              l.X6q,
              { sx: { fontWeight: "600" }, color: Z ? "ds.text.oddity.disabled" : "ds.text.neutral.catchy" },
              v(I ? "webapp_auth_panel_account_creation_employee_header" : "webapp_auth_panel_standalone_account_creation_step1_header")
            ),
            I ? null : (0, c.tZ)(l.nvN, null, v("webapp_auth_panel_standalone_account_creation_step1_sub_header")),
            (0, c.tZ)(b.oi, {
              id: "primaryEmailInput",
              type: "email",
              ref: S,
              disabled: V || Z,
              label: v(
                I
                  ? "webapp_auth_panel_standalone_account_creation_email_invite_link_label"
                  : "webapp_auth_panel_standalone_account_creation_email_label"
              ),
              placeholder: I ? "name@example.com" : v("webapp_auth_panel_standalone_account_creation_email_placeholder"),
              onBlur: () => {
                u(!p || (0, zn.vV)(p) ? null : Kn.INVALID_EMAIL);
              },
              onChange: () => {
                const e = P();
                u(null), d(e);
              },
              value: p,
              feedback: U ? { id: "error-message", text: U, type: "error" } : void 0
            }),
            (0, c.tZ)(
              b.zx,
              {
                sx: { alignSelf: "end" },
                size: "large",
                mood: "brand",
                intensity: "catchy",
                type: "submit",
                disabled: k || Z,
                "data-testid": "login-button"
              },
              k ? qn || (qn = (0, c.tZ)(l.HoD, null)) : v("webapp_auth_panel_standalone_account_creation_step1_confirm_button")
            )
          );
        };
      let Xn = (function (e) {
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
      const Yn = (e) => {
        var t, a;
        const { search: n, pathname: s } = (0, r.TH)(),
          l = Ke.parse(n),
          _ = `${null != (t = l.email) ? t : ""}`,
          u = `${null != (a = l.team) ? a : ""}`,
          [p, d] = (0, o.useState)(!1),
          [m, g] = (0, o.useState)(_),
          [h, E] = (0, o.useState)(null),
          f = (0, o.useRef)(null),
          x = (0, o.useRef)([]),
          { getInviteLinkData: w, inviteLinkData: b } = (0, qe.h)(),
          v = s === i.$F,
          y = v && !!u,
          S = y && !0 === b?.disabled,
          T = Xe();
        return (
          (0, o.useEffect)(() => {
            f.current?.focus?.();
          }, []),
          (0, o.useEffect)(() => {
            v &&
              ((0, O.Nc)(C.PageView.JoinDashlaneTeamEnterEmailAddress),
              (0, O.Kz)(
                new C.UserSignupToDashlaneEvent({
                  invitationLinkClickOrigin: y
                    ? C.InvitationLinkClickOrigin.SharedInvitationLink
                    : C.InvitationLinkClickOrigin.InvitationEmail,
                  signupFlowStep: C.SignupFlowStep.EnterEmailAddress
                })
              ));
          }, [v, y]),
          (0, o.useEffect)(
            () => (
              (x.current = x.current.concat([
                k.C.liveServiceProviderUrl.on((e) => {
                  (0, at.nL)((0, at.C0)(e));
                })
              ])),
              () => {
                x.current.forEach((e) => e()), (x.current = []);
              }
            ),
            []
          ),
          (0, o.useEffect)(() => {
            u && w(u);
          }, [w, u]),
          (0, o.useEffect)(() => {
            var e;
            (T.status === ha.rq.Success && null != (e = T.data) ? e : []).some((e) => e.type === $e.A.TEAM_ACCEPTANCE_SUCCESS)
              ? (d(!1), E(null))
              : h === Xn.TEAM_ACCEPTANCE_NEEDED && d(!0);
          }, [h, T]),
          !S && p && m && b?.teamUuid
            ? (0, c.tZ)(Fn, { teamUuid: b.teamUuid, login: m })
            : (0, c.tZ)($n, { ...e, loginValue: m, setLoginValue: g, loginErrorType: h, setLoginErrorType: E })
        );
      };
      var Qn = a(233377),
        Jn = a(30432),
        eo = a(588790);
      a(811933);
      const to = "webapp_auth_panel_standalone_account_creation_",
        ao = ({ id: e, passwordStrength: t, children: a, showTooltip: n }) => {
          const { translate: r } = (0, N.Z)(),
            s = ((e) => {
              if (!e || !e.feedback) return [];
              const { suggestions: t = [], warning: a } = e.feedback;
              return [...t.map((e) => `${to}${e}`), ...(a ? [`${to}${a}`] : [])];
            })(t).map((e) => r(e)),
            i = n && s.length > 0;
          return o.createElement(
            eo.Z,
            {
              destroyTooltipOnHide: !0,
              id: e,
              trigger: [],
              visible: i,
              placement: "top",
              overlayClassName: "tooltipContainer--DOS58UYBWN",
              overlay: o.createElement(
                "div",
                { className: "inner--DSQWE2KZTT" },
                o.createElement(
                  "ul",
                  null,
                  s.map((e) => o.createElement("li", { key: e }, e))
                )
              )
            },
            o.createElement("div", null, a)
          );
        };
      var no;
      const oo = "standalone_account_creation_error_",
        ro = "webapp_auth_panel_standalone_account_creation_password_hide_label",
        so = "webapp_auth_panel_standalone_account_creation_password_show_label",
        io = {
          0: "webapp_auth_panel_standalone_account_creation_zxcvbn_weakest_password",
          1: "webapp_auth_panel_standalone_account_creation_zxcvbn_weak_password",
          2: "webapp_auth_panel_standalone_account_creation_zxcvbn_acceptable_password",
          3: "webapp_auth_panel_standalone_account_creation_zxcvbn_good_password",
          4: "webapp_auth_panel_standalone_account_creation_zxcvbn_awesome_password"
        },
        lo = ({ backStep: e, onSubmit: t, isEu: a, isTACFlow: n, login: s, isEmployeeSignUp: i }) => {
          var c;
          const { translate: _ } = (0, N.Z)(),
            { search: u } = (0, r.TH)(),
            p = `${null != (c = Ke.parse(u).team) ? c : ""}`,
            [d, m] = (0, o.useState)(Qn.Maybe.nothing()),
            [g, h] = (0, o.useState)(Qn.Maybe.nothing()),
            [E, f] = (0, o.useState)(""),
            [x, w] = (0, o.useState)(null),
            [v, y] = (0, o.useState)(""),
            [S, T] = (0, o.useState)(null),
            {
              passwordStrength: A,
              resetPasswordStrength: R,
              setPasswordStrength: D,
              isPasswordStrengthScore: I,
              isPasswordStrongEnough: Z
            } = (0, Jn.R)(),
            [P, L] = (0, o.useState)(!1),
            [M, U] = (0, o.useState)(!1),
            V = (e) => {
              m(Qn.Maybe.maybe(e));
            };
          (0, o.useEffect)(() => {
            i &&
              ((0, O.Nc)(C.PageView.JoinDashlaneTeamCreateMasterPassword),
              (0, O.Kz)(
                new C.UserSignupToDashlaneEvent({
                  invitationLinkClickOrigin: p
                    ? C.InvitationLinkClickOrigin.SharedInvitationLink
                    : C.InvitationLinkClickOrigin.InvitationEmail,
                  signupFlowStep: C.SignupFlowStep.CreateMasterPassword
                })
              ));
          }, [i, p]),
            (0, o.useEffect)(() => {
              V(!a);
            }, [a]);
          const B = (e) => (e ? _(`${oo}${e}`) : null),
            F = () => {
              v && v !== E && T("passwords_dont_match");
            },
            z = _(
              a
                ? "webapp_auth_panel_standalone_account_creation_tips_and_offers_label"
                : "webapp_auth_panel_standalone_account_creation_subscription_label"
            ),
            G = B(x),
            W = B(S);
          return (0, b.tZ)(
            o.Fragment,
            null,
            (0, b.tZ)(l.X6q, { sx: { fontWeight: "600" } }, _("webapp_auth_panel_standalone_account_creation_step2_header")),
            (0, b.tZ)(l.nvN, null, _("webapp_auth_panel_standalone_account_creation_step2_sub_header")),
            (0, b.tZ)(
              "form",
              {
                sx: { marginTop: "12px" },
                autoComplete: "off",
                noValidate: !0,
                onSubmit: (e) => (
                  e.preventDefault(),
                  Z
                    ? v !== E
                      ? T("passwords_dont_match")
                      : (L(!0), t({ emailsTipsAndOffers: d, password: E, privacyPolicyAndToS: g, isEu: !!a }))
                    : w("weak_password"),
                  !1
                )
              },
              (0, b.tZ)(
                l.Ejs,
                { flexDirection: "column", gap: 4 },
                (0, b.tZ)(l.nvN, { bold: !0, sx: { marginBottom: "12px" } }, s),
                (0, b.tZ)(
                  ao,
                  { showTooltip: M, passwordStrength: A, id: "password-tooltip" },
                  (0, b.tZ)(
                    o.Fragment,
                    null,
                    (0, b.tZ)(b.WU, {
                      id: "primaryPasswordInput",
                      "aria-describedby": "password-tooltip",
                      label: _("webapp_auth_panel_standalone_account_creation_password_label"),
                      onBlur: () => {
                        U(!1), E && v && E !== v && T("passwords_dont_match");
                      },
                      onChange: async (e) => {
                        const t = e.target.value;
                        if ((f(t), x && w(null), S && T(null), "" === t && R(), "" !== t)) {
                          const e = await k.C.evaluatePassword({ password: t });
                          D(e);
                        }
                      },
                      onFocus: () => {
                        U(!0);
                      },
                      placeholder: _("webapp_auth_panel_standalone_account_creation_password_placeholder"),
                      value: E,
                      showPasswordButton: { showPasswordText: _(so), hidePasswordText: _(ro) }
                    }),
                    A && I(A.score) && (0, b.tZ)(l.YVT, { score: A.score, showAdditionalText: !0, additionalText: _(`${io[A.score]}`) })
                  )
                ),
                (0, b.tZ)(b.WU, {
                  id: "secondaryPasswordInput",
                  label: _("webapp_auth_panel_standalone_account_creation_confirm_password_label"),
                  onBlur: () => setTimeout(F, 150),
                  onChange: (e) => {
                    T(null), y(e.target.value);
                  },
                  placeholder: _("webapp_auth_panel_standalone_account_creation_confirm_password_placeholder"),
                  value: v,
                  showPasswordButton: { showPasswordText: _(so), hidePasswordText: _(ro) },
                  feedback: S ? { text: _(`${oo}${S}`), type: "error" } : void 0
                }),
                (0, b.tZ)(b.XZ, {
                  name: "emailsTipsAndOffers",
                  onChange: (e) => V(e.target.checked),
                  checked: d.valueOr(!a),
                  label: z,
                  sx: { fontSize: "14px" }
                }),
                (0, b.tZ)(b.XZ, {
                  name: "privacyPolicyAndToS",
                  onChange: (e) => {
                    return (t = e.target.checked), void h(Qn.Maybe.maybe(t));
                    var t;
                  },
                  checked: g.valueOr(!a),
                  label: _.markup("webapp_auth_panel_standalone_account_creation_tos_markup", {}, { linkTarget: "_blank" }),
                  sx: { fontSize: "14px" }
                }),
                (0, b.tZ)(
                  l.Ejs,
                  { sx: { marginTop: "24px" }, justifyContent: "space-between" },
                  (0, b.tZ)(
                    b.zx,
                    {
                      mood: "brand",
                      intensity: "supershy",
                      size: "large",
                      disabled: P,
                      sx: { alignSelf: "start" },
                      layout: "iconLeading",
                      icon: no || (no = (0, b.tZ)(b.JO, { name: "ArrowLeftOutlined" })),
                      onClick: (t) => {
                        t.preventDefault(), P || e(uo.Info);
                      }
                    },
                    _("webapp_auth_panel_standalone_account_creation_back_label")
                  ),
                  (0, b.tZ)(
                    l.Ejs,
                    { flexDirection: "column", alignItems: "end", gap: 4 },
                    (0, b.tZ)(
                      b.zx,
                      {
                        type: "submit",
                        mood: "brand",
                        intensity: "catchy",
                        size: "large",
                        isLoading: P,
                        disabled: (() => {
                          if (!g.valueOr(!a)) return !0;
                          const e = !E || !v,
                            t = v === E,
                            n = Boolean(G) || Boolean(W);
                          return e || !t || !Z || n;
                        })()
                      },
                      _(
                        n
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
      var co = a(952092),
        _o = a(787685);
      let uo = (function (e) {
        return (e.Info = "info"), (e.Confirm = "confirm"), (e.Creation = "creation"), e;
      })({});
      const po = {
          info: C.PageView.AccountCreationEmail,
          confirm: C.PageView.AccountCreationConfirmMasterPassword,
          creation: C.PageView.AccountCreationCreateMasterPassword
        },
        mo = ({ lee: e, isTACFlow: t }) => {
          var a, n;
          const { routes: s } = (0, r.Xo)(),
            { pathname: _ } = (0, r.TH)(),
            u = (0, r.k6)(),
            { search: p } = (0, r.TH)(),
            d = Ke.parse(p),
            m = `${null != (a = d.email) ? a : ""}`,
            g = `${null != (n = d.team) ? n : ""}`,
            [h, E] = (0, o.useState)(m),
            [f, x] = (0, o.useState)(!1),
            [w, v] = (0, o.useState)(uo.Info),
            { translate: k } = (0, N.Z)(),
            y = _ === i.$F,
            S = y && !1,
            T = (0, o.useCallback)(
              (e) => {
                po[null != e ? e : w] && (0, O.Nc)(po[null != e ? e : w], t ? C.BrowseComponent.Tac : C.BrowseComponent.MainApp);
              },
              [w, t]
            );
          (0, o.useEffect)(() => {
            T();
          }, [T]),
            (0, o.useEffect)(() => {
              S &&
                ((0, O.Nc)(C.PageView.JoinDashlaneTeamInstallExtension),
                (0, O.Kz)(
                  new C.UserSignupToDashlaneEvent({
                    invitationLinkClickOrigin: g
                      ? C.InvitationLinkClickOrigin.SharedInvitationLink
                      : C.InvitationLinkClickOrigin.InvitationEmail,
                    signupFlowStep: C.SignupFlowStep.InstallExtension
                  })
                ));
            }, [S, g]),
            (0, o.useEffect)(() => {}, [u, y, h, g]);
          const A = (e) => {
            v(e), T(e);
          };
          return (0, c.tZ)(
            "div",
            null,
            S
              ? (0, c.tZ)(
                  l.Ejs,
                  { flexDirection: "column", sx: { margin: "80px" }, gap: 4 },
                  (0, c.tZ)(l.X6q, { size: "medium" }, k("webapp_auth_panel_account_creation_no_extension_header")),
                  (0, c.tZ)(l.nvN, { color: "ds.text.neutral.quiet" }, k("webapp_auth_panel_account_creation_no_extension_description")),
                  (0, c.tZ)(
                    l.k$b,
                    { alignSelf: "end" },
                    (0, c.tZ)(
                      b.zx,
                      {
                        onClick: () => {
                          (0, at.Yo)(yn.JW);
                        },
                        size: "large",
                        mood: "brand",
                        intensity: "catchy",
                        type: "button"
                      },
                      k("webapp_auth_panel_account_creation_no_extension_download_button")
                    )
                  )
                )
              : (0, c.tZ)(
                  o.Fragment,
                  null,
                  w === uo.Info &&
                    (0, c.tZ)(
                      l.Ejs,
                      { flexDirection: "column", gap: 4, sx: { marginTop: "80px" } },
                      (0, c.tZ)(Yn, {
                        hasBeenRedirected: f,
                        setHasBeenRedirected: x,
                        lee: e,
                        onSubmit: (e) => {
                          var t;
                          E(null != (t = e.login) ? t : ""), A(uo.Confirm);
                        },
                        isB2BFlow: t || y
                      })
                    ),
                  (w === uo.Confirm || w === uo.Creation) &&
                    (0, c.tZ)(
                      l.Ejs,
                      { flexDirection: "column", gap: 4 },
                      (0, c.tZ)(lo, {
                        login: h,
                        isEu: e.carbon.currentLocation.isEu,
                        backStep: A,
                        onSubmit: async (a) => {
                          const n = await (0, _o.r)();
                          A(uo.Creation),
                            await Bn(e, a, h, t),
                            (0, co.$)(n, a.emailsTipsAndOffers.valueOr(!1)),
                            y &&
                              (0, O.Kz)(
                                new C.UserSignupToDashlaneEvent({
                                  signupFlowStep: C.SignupFlowStep.LoginToAccount,
                                  invitationLinkClickOrigin: g
                                    ? C.InvitationLinkClickOrigin.SharedInvitationLink
                                    : C.InvitationLinkClickOrigin.InvitationEmail
                                })
                              ),
                            t && u.push(s.teamRoutesBasePath);
                        },
                        isTACFlow: t,
                        isEmployeeSignUp: y
                      })
                    )
                )
          );
        },
        go = ({ lee: e, options: { isTACFlow: t } = { isTACFlow: !1 } }) => {
          const { translate: a } = (0, N.Z)(),
            { routes: n } = (0, r.Xo)();
          return (0, c.tZ)(
            o.Fragment,
            null,
            (0, c.tZ)(ba, {
              redirectLocation: { pathname: t ? n.teamRoutesBasePath + i.TT : i.TT, search: "", hash: "", state: { ignoreRedirect: !0 } },
              helperText: a("webapp_auth_panel_already_an_account"),
              buttonText: a("webapp_auth_panel_login")
            }),
            (0, c.tZ)(
              Fa.Z,
              { sx: { paddingTop: "120px" } },
              (0, c.tZ)(
                wa.Z,
                { classNames: { ...In }, timeout: { appear: 500, enter: 0, exit: 0 }, appear: !0 },
                (0, c.tZ)("div", { sx: { padding: "50px", margin: "0 auto", maxWidth: "800px" } }, (0, c.tZ)(mo, { isTACFlow: t, lee: e }))
              )
            )
          );
        };
      var ho;
      const Eo = ({ lee: e }) => {
          var t;
          const { search: a, pathname: n } = (0, r.TH)(),
            o = (0, At.Y)(),
            {
              routes: { teamRoutesBasePath: s }
            } = (0, r.Xo)(),
            l = (null != (t = new URLSearchParams(a).get("email")) ? t : "") === (0, ma.t2)(e.globalState);
          if (o.status !== v.rq.Success || !o.data) return null;
          const _ = e.permission.adminAccess.hasTACAccess;
          return e.permission.loggedIn && !(0, Ft.D)(e.globalState)
            ? l && n === i.S && _
              ? (0, c.tZ)(r.l_, { to: s })
              : ho || (ho = (0, c.tZ)(r.l_, { to: "/" }))
            : null;
        },
        fo = ({ options: e, path: t }) => {
          const a = e?.marketingContentType === _a.DashlaneBusiness;
          return (0, c.tZ)(
            r.AW,
            { path: t },
            (0, c.tZ)(r.Vy, { component: Eo, path: t }),
            (0, c.tZ)(
              ua,
              { options: e },
              (0, c.tZ)(r.Vy, { path: [i.TT, i.S], options: e, component: Un }),
              (0, c.tZ)(r.Vy, { options: { isTACFlow: a }, path: [i.SF, i.P, i.$F], component: go })
            )
          );
        };
      var xo = a(441847),
        wo = a(187319),
        bo = a(786980);
      var vo;
      const ko = ({ children: e }) => {
        const { translate: t } = (0, N.Z)();
        return o.createElement(
          "div",
          { className: "wrapper--CVn5ptNKJv" },
          o.createElement(
            "div",
            { className: "joinFamilyWrapper--yfFMqyz_UA" },
            o.createElement(
              "div",
              { className: "logo--BmwhTQRLTa" },
              o.createElement(l.D1W, { color: l.vei.DashGreen, size: l.r1z.Size39, title: t("_common_dashlane_logo_title") })
            ),
            e
          ),
          vo || (vo = o.createElement(bo.$, null))
        );
      };
      var yo = a(418402),
        So = a.n(yo);
      const To = () => {
        const { translate: e } = (0, N.Z)();
        return o.createElement(
          "div",
          { className: "wrapper--wvb2wHtW32" },
          o.createElement(
            "p",
            { className: "titleSection--tP0VuaSiVJ" },
            o.createElement(l.uMt, { color: So()["--dash-green-00"] }),
            o.createElement("span", { className: "title--iZZ9Dbt3Sc" }, e("family_invitee_page_form_privacy_note_title"))
          ),
          o.createElement(
            "p",
            { className: "description--Mek6KKjdaw" },
            e.markup("family_invitee_page_form_privacy_note_description_markup")
          )
        );
      };
      var Ao = a(717676);
      const No = new Set([
          "CANNOT_JOIN_MULTIPLE_FAMILIES",
          "USER_MUST_CANCEL_PREMIUM_PLUS_RENEWAL_TO_DOWNGRADE_TO_FAMILY",
          "USER_SUBSCRIPTION_IS_UP_FOR_RENEWAL"
        ]),
        Oo = ({ errorCode: e, resetErrorCode: t }) => {
          const { translate: a } = (0, N.Z)(),
            n = "ALREADY_JOINED_THIS_FAMILY" === e,
            r = "USER_MUST_CANCEL_PREMIUM_PLUS_RENEWAL_TO_DOWNGRADE_TO_FAMILY" === e,
            s = No.has(e);
          return "ALREADY_JOINED_THIS_FAMILY" === e || s
            ? o.createElement(
                Ao.o,
                {
                  isOpen: !0,
                  showCloseIcon: !0,
                  onRequestClose: t,
                  footer: o.createElement(l.cNS, {
                    primaryButtonTitle: a("family_invitee_page_failed_button_title_another_plan"),
                    primaryButtonOnClick: () => {
                      (0, at.nL)("https://app.dashlane.com");
                    },
                    intent: "primary"
                  }),
                  title: a(n ? "family_invitee_page_failed_heading_already_in_plan" : "family_invitee_page_failed_heading_in_another_plan")
                },
                o.createElement(
                  l.nvN,
                  { className: "subtitle--CywVAyuJAX" },
                  n
                    ? a("family_invitee_page_failed_heading_already_in_plan_description")
                    : r
                    ? a.markup("family_invitee_page_failed_heading_already_premium_plus_description_markup")
                    : a("family_invitee_page_failed_heading_in_another_plan_description")
                )
              )
            : null;
        },
        Co = JSON.parse(
          '{"v":"5.5.9","fr":30,"ip":0,"op":105,"w":506,"h":506,"nm":"Family_Icon_NEW","ddd":0,"assets":[{"id":"comp_0","layers":[{"ddd":0,"ind":1,"ty":4,"nm":"child 2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[200,200,0],"ix":2},"a":{"a":0,"k":[75.5,75,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0.226,-0.751],[0,0],[0.392,0.754],[15.431,0],[1.745,-3.358]],"o":[[0,0],[-0.226,-0.751],[-1.745,-3.358],[-15.431,0],[-0.393,0.754]],"v":[[-22.859,5.5],[22.861,5.5],[21.944,3.229],[0.001,-5.5],[-21.942,3.229]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[75.367,117.5],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":180,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"child 1","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"t":5,"s":[100]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[200,200,0],"ix":2},"a":{"a":0,"k":[75.5,75,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[4.439,-3.96],[0,0],[0.249,-1.263],[0.063,-0.512],[0,0],[0,0],[0.39,3.15],[0.109,0.553],[0.576,1.381],[0,0],[12.082,0]],"o":[[0,0],[-0.576,1.381],[-0.11,0.553],[-0.39,3.15],[0,0],[0,0],[-0.063,-0.512],[-0.25,-1.263],[0,0],[-4.439,-3.96],[-12.083,0]],"v":[[-23.865,-5.5],[-28.852,1.5],[-30.061,5.5],[-30.317,7.1],[-30.317,12.5],[30.318,12.5],[30.318,7.1],[30.062,5.5],[28.853,1.5],[23.865,-5.5],[0.001,-12.5]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0.243137269862,0.364705882353,0.392156892664,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[75.367,117.5],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-4.418],[-4.417,0],[-0.904,0.355],[0,0],[2.981,0],[0,8.284],[-8.282,0],[0,-8.284],[1.641,-2.406],[0,0],[0,1.187],[4.416,0]],"o":[[0,4.419],[1.029,0],[0,0],[-2.335,1.5],[-8.282,0],[0,-8.284],[8.281,0],[0,3.133],[0,0],[0.464,-1.013],[0,-4.418],[-4.417,0]],"v":[[-7.997,0],[0,8],[2.917,7.451],[8.094,12.63],[0,15],[-14.995,0],[0,-15],[14.995,0],[12.395,8.446],[7.275,3.326],[7.997,0],[0,-8]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.243137269862,0.364705882353,0.392156892664,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[75.868,83],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 5","np":2,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":180,"st":0,"bm":0}]},{"id":"comp_1","layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Shape Layer 4","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[261,213,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[36,34],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":12,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[-30,-39],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[73,73],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"sr","sy":1,"d":1,"pt":{"a":0,"k":5,"ix":3},"p":{"a":0,"k":[0,0],"ix":4},"r":{"a":0,"k":0,"ix":5},"ir":{"a":0,"k":50,"ix":6},"is":{"a":0,"k":0,"ix":8},"or":{"a":0,"k":100,"ix":7},"os":{"a":0,"k":0,"ix":9},"ix":2,"nm":"Polystar Path 1","mn":"ADBE Vector Shape - Star","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":1,"k":[{"i":{"x":[0],"y":[1]},"o":{"x":[0.43],"y":[0.009]},"t":0,"s":[0]},{"t":25,"s":[95]}],"ix":2},"o":{"a":0,"k":-214,"ix":3},"m":1,"ix":3,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":180,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Shape Layer 3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[200,200,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[36,34],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":11,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[-30,-39],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[77,77],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":1,"k":[{"i":{"x":[0],"y":[1]},"o":{"x":[0.43],"y":[0.009]},"t":0,"s":[0]},{"t":25,"s":[95]}],"ix":2},"o":{"a":0,"k":-215,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":180,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Shape Layer 2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[200,200,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[-18.5,40],[-60,40],[-60,25],[-60,8.5],[-56.5,-3],[-49.75,-9.25],[-44,-12],[-38,-13.25],[-32.5,-13.75],[-25.5,-14.25],[-21.25,-13.25],[-13,-11],[-7,-7.5]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":9,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":1,"k":[{"i":{"x":[0],"y":[1]},"o":{"x":[0.43],"y":[0.01]},"t":0,"s":[0]},{"t":25,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":180,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"Shape Layer 1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[200,200,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[22.5,40],[61,40],[61,14],[56,5.5],[49.75,2.25],[43.25,0.25],[37,-0.5],[31,-1],[22,-1],[15.75,-0.75]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":9,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":1,"k":[{"i":{"x":[0],"y":[1]},"o":{"x":[0.43],"y":[0.01]},"t":0,"s":[0]},{"t":25,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":180,"st":0,"bm":0}]}],"layers":[{"ddd":0,"ind":1,"ty":3,"nm":"Position","sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[251,259,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ip":0,"op":300,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":3,"nm":"rotate 1","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.34],"y":[1]},"o":{"x":[0.03],"y":[0.85]},"t":0,"s":[90]},{"t":90,"s":[0]}],"ix":10},"p":{"a":0,"k":[0.5,-4.5,0],"ix":2},"a":{"a":0,"k":[-7.5,43.5,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ip":0,"op":300,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":0,"nm":"Child","parent":1,"refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0.575,-2.475,0],"ix":2},"a":{"a":0,"k":[200,200,0],"ix":1},"s":{"a":0,"k":[115,115,100],"ix":6}},"ao":0,"w":400,"h":400,"ip":0,"op":180,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":0,"nm":"People Icon","parent":1,"td":1,"refId":"comp_1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0.575,-2.475,0],"ix":2},"a":{"a":0,"k":[200,200,0],"ix":1},"s":{"a":0,"k":[115,115,100],"ix":6}},"ao":0,"w":400,"h":400,"ip":0,"op":180,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"parents","parent":1,"tt":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0.575,-2.475,0],"ix":2},"a":{"a":0,"k":[75.5,75,0],"ix":1},"s":{"a":0,"k":[115,115,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0.043,-4.48],[0.015,-1.243],[0,0],[0,0],[0,0],[0,0],[-0.008,0.705],[-0.021,2.244],[0,4.368],[5.663,4.47],[11.975,0.013],[0,0],[0,0],[3.453,-0.656],[-0.537,-2.381],[-3.406,0.002],[-3.907,-3.084],[0,-3.778]],"o":[[-0.016,1.658],[0,0],[0,0],[0,0],[0,0],[0.005,-0.389],[0.017,-1.411],[0.043,-4.485],[0,-5.713],[-5.56,-4.389],[0,0],[0,0],[-4.348,0.005],[1.239,2.02],[2.63,-0.414],[11.072,0.006],[3.825,3.018],[0,4.333]],"v":[[15.591,13.339],[15.591,17.251],[-18.027,17.251],[-13.04,24.251],[22.589,24.251],[22.589,20.751],[22.589,19.251],[22.589,13.339],[22.589,-1.031],[15.16,-17.198],[-10.857,-24.251],[-10.9,-24.251],[-10.945,-24.251],[-22.632,-23.238],[-19.934,-16.602],[-10.9,-17.251],[10.826,-11.702],[15.591,-1.031]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.243137269862,0.364705882353,0.392156892664,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[117.259,94.749],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-5.534,5.667],[-12.191,0.017],[0,0],[0,0],[-5.331,-3.377],[1.877,-1.841],[6.398,0.005],[3.915,-4.009],[0,-5.486],[-0.043,-5.814],[-0.015,-1.775],[0,0],[0,0],[0,0],[0,0],[0.022,2.91],[0,5.659]],"o":[[5.553,-5.687],[0,0],[0,0],[9.121,0.013],[-2.437,1.077],[-3.768,-1.707],[-10.857,0.008],[-3.953,4.049],[0,5.632],[0.02,2.631],[0,0],[0,0],[0,0],[0,0],[-0.016,-1.83],[-0.044,-5.818],[0,-6.828]],"v":[[-20.436,-21.519],[5.918,-30.75],[5.962,-30.75],[6.006,-30.75],[27.572,-25.383],[21.053,-20.958],[5.962,-23.75],[-15.43,-16.628],[-20.531,-1.661],[-20.531,16.75],[-20.531,23.75],[12.088,23.75],[7.1,30.75],[-27.529,30.75],[-27.529,26.75],[-27.529,17.25],[-27.529,-1.661]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.243137269862,0.364705882353,0.392156892664,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[39.415,88.25],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 3","np":2,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-4.971],[-4.97,0],[-0.918,0.316],[0,0],[2.984,0],[0,8.836],[-8.834,0],[0,-8.836],[1.765,-2.572],[0,0],[0,1.411],[4.969,0]],"o":[[0,4.971],[1.024,0],[0,0],[-2.392,1.424],[-8.834,0],[0,-8.836],[8.834,0],[0,3.355],[0,0],[0.579,-1.188],[0,-4.971],[-4.97,0]],"v":[[-8.997,0],[0.001,9],[2.928,8.513],[8.171,13.758],[0.001,16],[-15.995,0],[0.001,-16],[15.995,0],[13.199,9.041],[8.094,3.935],[8.999,0],[0.001,-9]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.243137269862,0.364705882353,0.392156892664,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[106.358,49],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 4","np":2,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-5.523],[-5.521,0],[-1.031,0.359],[0,0],[3.116,0],[0,9.389],[-9.386,0],[0,-9.389],[1.694,-2.644],[0,0],[0,1.423],[5.522,0]],"o":[[0,5.523],[1.154,0],[0,0],[-2.51,1.464],[-9.386,0],[0,-9.389],[9.386,0],[0,3.373],[0,0],[0.536,-1.226],[0,-5.523],[-5.521,0]],"v":[[-9.997,0],[0,10],[3.294,9.445],[8.545,14.698],[0,17],[-16.995,0],[0,-17],[16.995,0],[14.319,9.16],[9.164,4.003],[9.997,0],[0,-10]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.243137269862,0.364705882353,0.392156892664,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[45.376,36],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 6","np":2,"cix":2,"bm":0,"ix":4,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":180,"st":0,"bm":0},{"ddd":0,"ind":6,"ty":3,"nm":"message","parent":2,"sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.34],"y":[1]},"o":{"x":[0.03],"y":[0.85]},"t":2,"s":[-90]},{"t":62,"s":[0]}],"ix":10},"p":{"a":0,"k":[-164.5,31.5,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ip":2,"op":302,"st":2,"bm":0},{"ddd":0,"ind":7,"ty":4,"nm":"message","parent":6,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":3,"s":[0]},{"t":8,"s":[100]}],"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.66],"y":[0.97]},"o":{"x":[0.08],"y":[0.456]},"t":3,"s":[15]},{"i":{"x":[0],"y":[1]},"o":{"x":[0.43],"y":[0.005]},"t":7,"s":[-25]},{"t":37,"s":[0]}],"ix":10},"p":{"a":0,"k":[-20.5,34.5,0],"ix":2},"a":{"a":0,"k":[886.5,762.5,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[2.151,8.37],[0,5.024],[-2.151,8.37],[-6.865,5.496],[-4.505,1.826],[-8.825,1.005],[-7.759,-4.311],[-2.781,-3.364],[-2.781,-8.37],[2.781,-8.37],[2.781,-3.364],[7.759,-4.311],[8.825,1.005],[4.505,1.826],[6.865,5.496]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.243000000598,0.365000017952,0.39199999641,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[919.144,726.32],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":1,"k":[{"i":{"x":[0.34],"y":[1]},"o":{"x":[0.03],"y":[0.425]},"t":3,"s":[360]},{"t":48,"s":[0]}],"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[-2.773,-8.37],[-2.773,-3.364],[-7.751,-4.31],[-8.817,1.005],[-4.498,1.826],[-6.858,5.496],[-2.144,8.37],[0.008,5.025],[2.159,8.37],[6.873,5.496],[4.512,1.824],[8.816,1.005],[7.748,-4.31],[2.789,-3.365],[2.789,-8.37]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.243000000598,0.365000017952,0.39199999641,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[893.075,726.32],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":1,"k":[{"i":{"x":[0.34],"y":[1]},"o":{"x":[0.03],"y":[0.567]},"t":3,"s":[270]},{"t":48,"s":[0]}],"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":2,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[-33.48,11.16],[-16.74,11.16],[-16.74,22.32],[-1.86,11.16],[33.48,11.16],[33.48,5.611],[39.06,5.611],[39.06,16.74],[0,16.74],[-22.32,33.48],[-22.32,16.74],[-39.06,16.74],[-39.06,-33.48],[39.06,-33.48],[39.06,-6.346],[33.48,-2.702],[33.48,-27.9],[-33.48,-27.9]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.243000000598,0.365000017952,0.39199999641,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[906.579,733.76],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 3","np":2,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false}],"ip":2,"op":302,"st":2,"bm":0},{"ddd":0,"ind":8,"ty":4,"nm":"message cover","parent":7,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":3,"s":[0]},{"t":8,"s":[100]}],"ix":11},"r":{"a":0,"k":-0.666,"ix":10},"p":{"a":0,"k":[1065.482,738.483,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-195,-38],[-195.5,6.5],[-123,7.5],[-121.5,-36.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.054901964524,0.207843152214,0.239215701234,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":2,"op":300,"st":0,"bm":0},{"ddd":0,"ind":9,"ty":3,"nm":"credit card","parent":2,"sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.34],"y":[1]},"o":{"x":[0.03],"y":[0.85]},"t":6,"s":[-90]},{"t":66,"s":[0]}],"ix":10},"p":{"a":0,"k":[-6.5,-119.5,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ip":6,"op":306,"st":6,"bm":0},{"ddd":0,"ind":10,"ty":4,"nm":"credit card 2","parent":9,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":12,"s":[0]},{"t":17,"s":[100]}],"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.66],"y":[0.964]},"o":{"x":[0.08],"y":[0.543]},"t":12,"s":[-10]},{"i":{"x":[0],"y":[1]},"o":{"x":[0.43],"y":[0.012]},"t":17,"s":[25]},{"t":57,"s":[0]}],"ix":10},"p":{"a":0,"k":[29.5,20,0],"ix":2},"a":{"a":0,"k":[1094.5,597,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-19.164,2.906],[-24.219,-2.906],[-28.094,-2.906],[-28.094,2.906]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-14.531,2.906],[28.094,2.906],[28.094,-2.906],[-14.531,-2.906]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0.243000000598,0.365000017952,0.39199999641,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[1064.579,570.119],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 13","np":4,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":6,"op":306,"st":6,"bm":0},{"ddd":0,"ind":11,"ty":4,"nm":"Shape Layer 2","parent":10,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1065.466,738.5,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[56,35],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[0.054901998183,0.207843002619,0.239216000426,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-1,-161.5],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":6,"op":306,"st":6,"bm":0},{"ddd":0,"ind":12,"ty":4,"nm":"credit card","parent":9,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":12,"s":[0]},{"t":17,"s":[100]}],"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.66],"y":[0.964]},"o":{"x":[0.08],"y":[0.543]},"t":12,"s":[-10]},{"i":{"x":[0],"y":[1]},"o":{"x":[0.43],"y":[0.012]},"t":17,"s":[25]},{"t":57,"s":[0]}],"ix":10},"p":{"a":0,"k":[29.5,20,0],"ix":2},"a":{"a":0,"k":[1094.5,597,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[33.906,-23.25],[-33.906,-23.25],[-33.906,23.25],[33.906,23.25]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[28.095,17.438],[28.095,-17.437],[-28.093,-17.438],[-28.093,17.437]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0.243000000598,0.365000017952,0.39199999641,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[1064.578,576.9],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 14","np":4,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":6,"op":306,"st":6,"bm":0},{"ddd":0,"ind":13,"ty":3,"nm":"screens","parent":2,"sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.34],"y":[1]},"o":{"x":[0.03],"y":[0.85]},"t":10,"s":[-90]},{"t":70,"s":[0]}],"ix":10},"p":{"a":0,"k":[173.5,36.5,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ip":10,"op":310,"st":10,"bm":0},{"ddd":0,"ind":14,"ty":4,"nm":"Shape Layer 3","parent":13,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.34,"y":1},"o":{"x":0.03,"y":0.472},"t":21,"s":[-179.001,23.462,0],"to":[0,-3,0],"ti":[0,3,0]},{"t":51,"s":[-179.001,5.462,0]}],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[13,24],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":2,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[0.054901998183,0.207843002619,0.239216000426,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[145.5,6],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":10,"op":310,"st":10,"bm":0},{"ddd":0,"ind":15,"ty":4,"nm":"screens 2","parent":13,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-173.5,-36.5,0],"ix":2},"a":{"a":0,"k":[1071.5,696.5,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-4.912,14],[-7.262,22],[7.139,22],[4.371,14]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":1,"k":[{"i":{"x":0.66,"y":0.95},"o":{"x":0.08,"y":0.76},"t":21,"s":[1245.079,737.4],"to":[0,-0.667],"ti":[0,0.667]},{"t":51,"s":[1245.079,733.4]}],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 5","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":10,"op":310,"st":10,"bm":0},{"ddd":0,"ind":16,"ty":4,"nm":"screens 3","parent":13,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":21,"s":[0]},{"t":26,"s":[100]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-173.5,-36.5,0],"ix":2},"a":{"a":0,"k":[1071.5,696.5,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,-2.762],[0,0],[-2.762,0],[0,0],[0,2.761],[0,0],[2.761,0]],"o":[[-2.762,0],[0,0],[0,2.761],[0,0],[2.761,0],[0,0],[0,-2.762],[0,0]],"v":[[-6.5,-16.5],[-11.5,-11.5],[-11.5,11.5],[-6.5,16.5],[6.5,16.5],[11.5,11.5],[11.5,-11.5],[6.5,-16.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[6.5,-11.5],[-6.5,-11.5],[-6.5,11.5],[6.5,11.5]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0.243000000598,0.365000017952,0.39199999641,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":1,"k":[{"i":{"x":0.66,"y":0.95},"o":{"x":0.08,"y":0.76},"t":21,"s":[1211.579,760.9],"to":[0,-2.667],"ti":[0,2.667]},{"t":51,"s":[1211.579,744.9]}],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 4","np":4,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-4.912,14],[-7.262,22],[7.139,22],[4.371,14]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,2.761],[0,0],[2.761,0],[0,0],[0,-2.762],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[2.761,0],[0,0],[0,-2.762],[0,0],[-2.762,0],[0,0],[0,0]],"v":[[-25,-7],[-25,-22],[25,-22],[25,8],[-20,8],[-20,14],[-11.165,14],[-13.515,22],[-17,22],[-17,28],[17,28],[17,22],[13.487,22],[10.72,14],[26,14],[31,9],[31,-23],[26,-28],[-26,-28],[-31,-23],[-31,-7]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0.243000000598,0.365000017952,0.39199999641,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":1,"k":[{"i":{"x":0.66,"y":0.95},"o":{"x":0.08,"y":0.76},"t":21,"s":[1245.079,737.4],"to":[0,-0.667],"ti":[0,0.667]},{"t":51,"s":[1245.079,733.4]}],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 5","np":4,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false}],"ip":10,"op":310,"st":10,"bm":0},{"ddd":0,"ind":18,"ty":4,"nm":"screen white bg","parent":13,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-179.633,-0.67,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[146,-1.5],[138.75,-1.25],[137.25,2],[136.5,24.75],[141.25,26.75],[152.5,27.25],[155.25,23.25],[156,5],[153.75,-1.25]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.054901998183,0.207843002619,0.239216000426,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":10,"op":310,"st":10,"bm":0},{"ddd":0,"ind":19,"ty":3,"nm":"wifi","parent":2,"sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.34],"y":[1]},"o":{"x":[0.03],"y":[0.85]},"t":14,"s":[-90]},{"t":74,"s":[0]}],"ix":10},"p":{"a":0,"k":[-6.5,199.5,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ip":14,"op":314,"st":14,"bm":0},{"ddd":0,"ind":20,"ty":4,"nm":"wifi","parent":19,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":30,"s":[0]},{"t":35,"s":[100]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[6.5,-199.5,0],"ix":2},"a":{"a":0,"k":[1071.5,696.5,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[-2.457,0],[-1.814,-1.809],[0,0]],"o":[[0,0],[1.835,-1.44],[2.838,0],[0,0],[0,0]],"v":[[0.077,4.695],[-6.996,-2.284],[0.032,-4.695],[6.996,-2.065],[1.078,3.776]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.243000000598,0.365000017952,0.39199999641,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[1064.129,920.705],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":30,"s":[0]},{"t":42,"s":[100]}],"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 7","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[3.949,-2.86],[0,0],[-6.972,0],[-5.073,-3.899],[0,0],[5.306,0]],"o":[[0,0],[5.08,-3.92],[6.951,0],[0,0],[-3.941,-2.83],[-5.328,0]],"v":[[-14.157,5.25],[-18.455,1.01],[0.023,-5.25],[18.454,0.979],[14.156,5.21],[0.023,0.689]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.243000000598,0.365000017952,0.39199999641,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[1064.259,906.24],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":32,"s":[0]},{"t":44,"s":[100]}],"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 8","np":2,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[6.371,-5.45],[0,0],[-10.827,0],[-0.983,-0.069],[-1.042,-1.47],[-0.178,-0.2],[2,0]],"o":[[0,0],[7.481,-6.53],[1,0],[0.607,2.221],[0.122,0.17],[-1.91,-0.3],[-9.189,0]],"v":[[-12.769,7.35],[-17.036,3.14],[11.164,-7.35],[14.14,-7.251],[16.585,-1.52],[17.036,-0.96],[11.164,-1.421]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.243000000598,0.365000017952,0.39199999641,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[1053.117,894.52],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":34,"s":[0]},{"t":46,"s":[100]}],"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 9","np":2,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0.05,1.211],[0.354,0],[10.06,-8.979],[0,0],[-13.084,0],[-0.507,-0.019]],"o":[[-0.353,-0.01],[-14.721,0],[0,0],[8.953,-7.9],[0.51,0],[-0.292,-2.55]],"v":[[19.399,-9.32],[18.339,-9.33],[-19.864,5.13],[-15.601,9.33],[18.339,-3.389],[19.864,-3.37]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.243000000598,0.365000017952,0.39199999641,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[1045.943,882.67],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":36,"s":[0]},{"t":48,"s":[100]}],"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 10","np":2,"cix":2,"bm":0,"ix":4,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[-0.001,0.03],[0,0]],"o":[[0.001,-0.04],[0,0],[0,0]],"v":[[-0.001,0.065],[0.001,-0.035],[0.001,-0.065]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.243000000598,0.365000017952,0.39199999641,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[1071.963,875.435],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 11","np":2,"cix":2,"bm":0,"ix":5,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[-0.143,-1.01],[-1.474,-2.09],[-2.176,-1.41],[-0.666,-0.37],[-0.919,0.59],[-1.204,1.71],[-0.391,2.73],[-0.046,0.75],[0,0]],"o":[[0.047,0.75],[0.391,2.73],[1.204,1.71],[0.919,0.59],[0.666,-0.37],[2.175,-1.41],[1.477,-2.09],[0.144,-1.01],[0,0],[0,0]],"v":[[-11.038,-6.795],[-10.709,-4.015],[-8.044,3.805],[-2.437,8.675],[0,10.135],[2.439,8.675],[8.044,3.805],[10.71,-4.015],[11.038,-6.795],[0,-10.765]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,-0.14],[0.021,-0.5],[0.223,-1.55],[2.265,-3.23],[2.318,-1.5],[0.795,-0.43],[0.229,-0.12],[0.066,-0.03],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0.115,0.06],[0.397,0.22],[1.199,0.77],[1.885,2.67],[0.433,3.02],[0.041,0.98],[0.002,0.28],[-0.001,0.08],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0.001,0.08],[-0.001,0.28],[-0.04,0.98],[-0.431,3.02],[-1.886,2.67],[-1.2,0.77],[-0.399,0.22],[-0.117,0.06],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[-0.064,-0.03],[-0.232,-0.12],[-0.795,-0.43],[-2.318,-1.5],[-2.265,-3.23],[-0.221,-1.55],[-0.02,-0.5],[0,-0.14],[0,0],[0,0]],"v":[[0,-16.725],[17.005,-10.735],[17.057,-8.765],[17.057,-8.755],[17.057,-8.725],[17.058,-8.695],[17.059,-8.625],[17.06,-8.295],[17.031,-7.115],[16.673,-3.215],[13.018,7.105],[5.776,13.535],[2.688,15.365],[1.733,15.875],[1.459,16.015],[1.382,16.055],[1.359,16.065],[1.35,16.065],[0,16.725],[-1.349,16.065],[-1.351,16.065],[-1.358,16.065],[-1.382,16.055],[-1.459,16.015],[-1.73,15.875],[-2.686,15.365],[-5.775,13.535],[-13.017,7.105],[-16.673,-3.215],[-17.031,-7.115],[-17.059,-8.295],[-17.058,-8.625],[-17.005,-10.735]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0.243000000598,0.365000017952,0.39199999641,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":1,"k":[{"i":{"x":0.66,"y":0.95},"o":{"x":0.08,"y":0.76},"t":30,"s":[1089.02,890.125],"to":[0,-1],"ti":[0,1]},{"t":54,"s":[1089.02,884.125]}],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":30,"s":[0]},{"t":37,"s":[100]}],"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 12","np":4,"cix":2,"bm":0,"ix":6,"mn":"ADBE Vector Group","hd":false}],"ip":14,"op":314,"st":14,"bm":0},{"ddd":0,"ind":21,"ty":4,"nm":"Shape Layer 5","parent":20,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":30,"s":[0]},{"t":35,"s":[100]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1065.5,738.5,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[28,133],[18.5,133],[8.5,137.5],[9.5,146.5],[18,156.5],[25,160],[33.5,153],[38.5,140.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.054901964524,0.207843152214,0.239215701234,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":14,"op":300,"st":0,"bm":0},{"ddd":0,"ind":22,"ty":4,"nm":"dotted lines","parent":2,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"t":10,"s":[100]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0,0,0],"ix":2},"a":{"a":0,"k":[1071.5,696.5,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-82.566,0],[0,-82.566],[82.567,0],[0,82.567]],"o":[[82.567,0],[0,82.567],[-82.566,0],[0,-82.566]],"v":[[0,-149.5],[149.5,0],[0,149.5],[-149.5,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.922000002394,0.913999968884,0.905999995213,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":9,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"d":[{"n":"d","nm":"dash","v":{"a":0,"k":25,"ix":1}},{"n":"g","nm":"gap","v":{"a":0,"k":30,"ix":2}},{"n":"o","nm":"offset","v":{"a":0,"k":0,"ix":7}}],"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[1064.079,742.4],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 15","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":300,"st":0,"bm":0},{"ddd":0,"ind":23,"ty":4,"nm":"Shape Layer 1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[253,253,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[2143,1393],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[0.054901998183,0.207843002619,0.239216000426,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":300,"st":0,"bm":0}],"markers":[]}'
        ),
        Ro = "joinFamilyRow--ljWcN80TEF",
        Do = "joinFamilyColumn--ZJJsbJtcu_",
        Io = "title--c2y7kaVDZo",
        Zo = "description--b7m6j7Jpnp",
        Po = "link--xCd6lyq98Z",
        Lo = "mediaContainer--qcrkLnoKCp";
      var Mo;
      const Uo = ({ handleJoinFamily: e, displayLoginErrorCode: t }) => {
          const { translate: a } = (0, N.Z)(),
            [n, r] = o.useState(""),
            [s, i] = o.useState(!1),
            c = o.useCallback(
              (e) => {
                r(e.target.value), s && i(!1);
              },
              [r, s]
            );
          return o.createElement(
            "form",
            {
              className: "loginWrapper--T8_3hzgkgj",
              onSubmit: (t) => {
                t.preventDefault(), (0, zn.vV)(n) ? e(n) : i(!0);
              },
              noValidate: !0
            },
            o.createElement(
              "div",
              { className: "loginTextFieldWrapper--hOsk98T0Iv" },
              o.createElement(l.oil, {
                type: "email",
                value: n,
                placeholder: a("family_invitee_page_form_login_placeholder"),
                fullWidth: !0,
                feedbackText: s || t ? a("family_invitee_page_form_invalid_email") : void 0,
                feedbackTextId: "badLoginInputError",
                feedbackType: s || t ? "error" : void 0,
                onChange: c,
                disabled: !1,
                autoFocus: !0,
                style: { minHeight: 48 },
                "aria-describedby": "badLoginInputError"
              })
            ),
            o.createElement(
              l.zxk,
              { nature: "primary", type: "submit", size: "large", "aria-describedby": "badLoginInputError" },
              a("family_invitee_page_form_button_title")
            )
          );
        },
        Vo = ({ errorCode: e, handleJoinFamily: t, handleResetErrorCode: a }) => {
          const { translate: n } = (0, N.Z)(),
            r = "BAD_LOGIN" === e;
          return o.createElement(
            ko,
            null,
            o.createElement(
              "div",
              { className: Ro },
              o.createElement(
                "div",
                { className: Do },
                o.createElement("h1", { className: Io }, n("family_invitee_page_form_heading")),
                o.createElement("p", { className: Zo }, n("family_invitee_page_form_description")),
                o.createElement(Uo, { handleJoinFamily: t, displayLoginErrorCode: r }),
                o.createElement(
                  "a",
                  {
                    className: Po,
                    onClick: (e) => {
                      e.preventDefault(), (0, at.nL)(i.Ht);
                    },
                    href: i.Ht
                  },
                  n("family_invitee_page_learn_more_link_title")
                ),
                Mo || (Mo = o.createElement(To, null))
              ),
              o.createElement(
                "div",
                { className: M()("hideOnMobile--yRQBVFuDDQ", "animation--eHSGXsf0KA", Do, Lo) },
                o.createElement(A.Z, {
                  height: 400,
                  width: 400,
                  animationParams: { renderer: "svg", loop: !1, autoplay: !0, animationData: Co }
                })
              ),
              e ? o.createElement(Oo, { errorCode: e, resetErrorCode: a }) : null
            )
          );
        };
      var Bo = a(317150),
        Fo = a(418554),
        zo = a(61890);
      const Go = { PLAYSTORE: zo.g.PLAYSTORE, APPLE: zo.g.APPLE },
        Wo = ({ platform: e }) => {
          const { translate: t } = (0, N.Z)();
          return e
            ? o.createElement(
                "div",
                { className: "wrapper--FrM2Zquge7" },
                o.createElement(
                  "p",
                  { className: "titleSection--YzGeq8l_6K" },
                  o.createElement(l.uMt, { color: So()["--functional-red-00"] }),
                  o.createElement("span", { className: "title--Z0juKivWxO" }, t("family_invitee_page_confirm_renewal_message_title"))
                ),
                o.createElement(
                  "p",
                  { className: "description--vpCtvu1W3i" },
                  e === Bo.H9.IOS_APP_STORE
                    ? t("family_invitee_page_confirm_renewal_message_description_ios")
                    : e === Bo.H9.MAC_STORE
                    ? t("family_invitee_page_confirm_renewal_message_description_mac")
                    : e === Bo.H9.PLAY_STORE
                    ? t("family_invitee_page_confirm_renewal_message_description_playstore")
                    : (0, tt.U)(e)
                ),
                o.createElement(Fo.Z, {
                  size: "small",
                  classNames: ["button--Ko3qMdbbnH"],
                  label: t("family_invitee_page_confirm_renewal_message_button_title"),
                  onClick: () => {
                    (0, at.nL)(
                      ((e) =>
                        e === Bo.H9.PLAY_STORE
                          ? Go.PLAYSTORE
                          : e === Bo.H9.IOS_APP_STORE || e === Bo.H9.MAC_STORE
                          ? Go.APPLE
                          : (0, tt.U)(e))(e)
                    );
                  }
                })
              )
            : null;
        };
      var jo = a(610320),
        qo = a.n(jo);
      const Ko = a.p + "705d49310d2503a36d73.jpg",
        Ho = a.p + "8b139fc19129e29e36ef.jpg",
        $o = a.p + "8b04ca4e9580c6edfefb.jpg";
      var Xo;
      const Yo = ({ userStatus: e, renewalInformation: t }) => {
          const { translate: a } = (0, N.Z)();
          if (!e) return null;
          const {
              description: n,
              button: r,
              link: s,
              media: l
            } = ((e) => ({
              NEW_USER: {
                description: [
                  e("family_invitee_page_confirm_description_new_user"),
                  e("family_invitee_page_confirm_description_perk_new_user")
                ],
                button: {
                  title: e("family_invitee_page_confirm_button_title_new_user"),
                  href: "https://www.dashlane.com/download",
                  icon: Xo || (Xo = o.createElement(qo(), null))
                },
                link: { title: e("family_invitee_page_learn_more_link_title"), href: i.Ht },
                media: {
                  title: e("family_invitee_page_confirm_media_title_new_user"),
                  href: "https://blog.dashlane.com/what-is-dashlane/",
                  imgsrc: Ko
                }
              },
              EXISTING_FREE_USER: {
                description: [
                  e("family_invitee_page_confirm_description_existing_free_user"),
                  e("family_invitee_page_confirm_description_perk_existing_free_user")
                ],
                button: { title: e("family_invitee_page_confirm_button_title_existing_free_user"), href: "https://app.dashlane.com" },
                media: {
                  title: e("family_invitee_page_confirm_media_title_existing_free_user"),
                  href: "https://blog.dashlane.com/ways-to-make-the-most-of-dashlane/",
                  imgsrc: Ho
                }
              },
              EXISTING_PREMIUM_USER: {
                description: [
                  e("family_invitee_page_confirm_description_existing_premium_user"),
                  e("family_invitee_page_confirm_description_perk_existing_premium_user")
                ],
                button: { title: e("family_invitee_page_confirm_button_title_existing_premium_user"), href: "https://app.dashlane.com" },
                media: {
                  title: e("family_invitee_page_confirm_media_title_existing_premium_user"),
                  href: "https://blog.dashlane.com/how-do-i-make-my-passwords-stronger/",
                  imgsrc: $o
                }
              }
            }))(a)[e],
            c = (e, t) => {
              e.preventDefault(), (0, at.nL)(t);
            };
          return o.createElement(
            ko,
            null,
            o.createElement(
              "div",
              { className: Ro },
              o.createElement(
                "div",
                { className: Do },
                o.createElement("h1", { className: Io }, a("family_invitee_page_confirm_heading")),
                n.map((e, t) => o.createElement("p", { key: t, className: Zo }, e)),
                o.createElement(Da.Z, {
                  size: "medium",
                  classNames: ["button--gceJ14Grxd"],
                  label: r.title,
                  icon: r.icon,
                  onClick: (e) => c(e, r.href)
                }),
                s ? o.createElement("a", { href: s.href, className: Po, onClick: (e) => c(e, s.href) }, s.title) : null,
                t.showRenewalMessage ? o.createElement(Wo, { platform: t.platform }) : null
              ),
              o.createElement(
                "div",
                { className: M()("reverseColumnOnMobile--LLX7uEU_u2", Do, Lo) },
                o.createElement(
                  "a",
                  { href: l.href, onClick: (e) => c(e, l.href), title: l.title },
                  o.createElement("img", { className: "mediaImage--p1HKLIH5ZJ", src: l.imgsrc, alt: l.title })
                ),
                o.createElement("h2", { className: "mediaTitle--xB_TQB3LrJ" }, l.title)
              )
            )
          );
        },
        Qo = ({ errorCode: e }) => {
          const { translate: t } = (0, N.Z)();
          return o.createElement(
            ko,
            null,
            o.createElement(
              "div",
              { className: Ro },
              o.createElement(
                "div",
                { className: Do },
                o.createElement(
                  "h1",
                  { className: Io },
                  ((e) =>
                    t(
                      "FAMILY_FULL" === e || "JOIN_FAMILY_TOKEN_NOT_FOUND" === e
                        ? "family_invitee_page_failed_heading_link_expired_plan_full"
                        : "family_invitee_page_failed_heading"
                    ))(e)
                ),
                o.createElement(
                  "p",
                  { className: Zo },
                  ((e) =>
                    t(
                      "FAMILY_FULL" === e || "JOIN_FAMILY_TOKEN_NOT_FOUND" === e
                        ? "family_invitee_page_failed_heading_link_expired_plan_full_description"
                        : "family_invitee_page_failed_description"
                    ))(e)
                )
              ),
              o.createElement("div", { className: Do })
            )
          );
        },
        Jo = new Set([
          "BAD_LOGIN",
          "CANNOT_JOIN_MULTIPLE_FAMILIES",
          "ALREADY_JOINED_THIS_FAMILY",
          "USER_SUBSCRIPTION_IS_UP_FOR_RENEWAL",
          "USER_MUST_CANCEL_PREMIUM_PLUS_RENEWAL_TO_DOWNGRADE_TO_FAMILY"
        ]),
        er = ({ basePath: e, location: t }) => {
          const [a, n] = o.useState(""),
            [s, i] = o.useState(),
            [l, c] = o.useState(null);
          return (
            o.useEffect(() => {
              l &&
                ("FAMILY_FULL" === l || "JOIN_FAMILY_TOKEN_NOT_FOUND" === l || ((e) => !(!e || ("UNKNOWN_ERROR" !== e && Jo.has(e))))(l)) &&
                (0, r.uX)(`${e}/failed`);
            }, [e, l]),
            o.useEffect(() => {
              s && (0, r.uX)(`${e}/confirm`);
            }, [e, s]),
            o.useEffect(() => {
              const e = new URLSearchParams(t.search).get("accept");
              e && n(e);
            }, [t.search]),
            o.createElement(
              o.Fragment,
              null,
              o.createElement(r.Vy, {
                path: e,
                exact: !0,
                component: Vo,
                additionalProps: {
                  errorCode: l,
                  handleJoinFamily: async (e) => {
                    try {
                      const t = await k.C.joinFamily({ login: e, joinToken: a });
                      if (!t.success) return void c(t.error.code);
                      const { userStatus: n, renewalInformation: o } = t.response;
                      i({ userStatus: n, renewalInformation: o });
                    } catch (e) {
                      c("UNKNOWN_ERROR");
                    }
                  },
                  handleResetErrorCode: () => {
                    c(null);
                  }
                }
              }),
              o.createElement(r.Vy, { path: `${e}/confirm`, component: Yo, additionalProps: s }),
              o.createElement(r.Vy, { path: `${e}/failed`, component: Qo, additionalProps: { errorCode: l } })
            )
          );
        };
      function tr({ path: e }) {
        const t = `${e}/join`;
        return o.createElement(
          r.rs,
          null,
          o.createElement(r.l_, { exact: !0, from: `${e}/`, to: t }),
          o.createElement(r.Vy, { exact: !0, path: [t, `${t}/confirm`, `${t}/failed`], component: er, additionalProps: { basePath: t } })
        );
      }
      var ar,
        nr,
        or,
        rr,
        sr = a(943280),
        ir = a(448547),
        lr = a(343875),
        cr = a(572492);
      const _r = ({ children: e }) =>
        o.createElement(
          o.Fragment,
          null,
          o.createElement(
            r.rs,
            null,
            ar || (ar = o.createElement(ir.N, { path: "*ssoToken=*" })),
            nr || (nr = o.createElement(sr.L, { path: "*/new*" })),
            o.createElement(lr.r, { path: `*${lr.Q}*` }),
            e,
            or || (or = o.createElement(r.TX, null))
          ),
          rr || (rr = o.createElement(cr.O, null))
        );
      var ur = a(7978),
        pr = a(277899);
      const dr = ({ error: e }) => {
        const { tryAgainRecovery: t } = (0, ce.u)(ie.j);
        (0, o.useEffect)(() => {
          (0, O.Kz)(
            new C.UserUseAccountRecoveryKeyEvent({
              flowStep: C.FlowStep.Error,
              useKeyErrorName: "WRONG_RECOVERY_KEY_ERROR" === e ? C.UseKeyErrorName.WrongKeyEntered : C.UseKeyErrorName.Unknown
            })
          );
        }, []);
        const { translate: a } = (0, N.Z)();
        return (0, b.tZ)(
          l.Ejs,
          { sx: { flexDirection: "column", margin: "0 auto", textAlign: "center", alignItems: "center" } },
          (0, b.tZ)(b.JO, {
            name: "FeedbackFailOutlined",
            size: "large",
            color: "ds.text.danger.quiet",
            sx: { marginBottom: "48px", width: "62px", height: "62px" }
          }),
          (0, b.tZ)(
            b.X6,
            { as: "h1", textStyle: "ds.title.section.large", sx: { marginBottom: "16px" } },
            a("login_account_recovery_key_error_screen_title")
          ),
          (0, b.tZ)(
            b.nv,
            { as: "label", textStyle: "ds.body.standard.regular", sx: { marginBottom: "48px" } },
            a("login_account_recovery_key_error_screen_description")
          ),
          (0, b.tZ)(
            b.zx,
            {
              onClick: () => {
                t(), (0, r.uX)(i.g);
              }
            },
            a("login_account_recovery_key_error_screen_try_again_button")
          )
        );
      };
      var mr = a(485823),
        gr = a(154350);
      const hr = () => {
        const { translate: e } = (0, N.Z)(),
          t = (0, r.k6)(),
          { trackPageView: a } = (0, _e.D)(),
          { isMPLessUser: n } = (0, gr.Z)();
        return (
          (0, o.useEffect)(() => {
            a({ pageView: C.PageView.LoginMasterPasswordAccountRecoverySuccess });
          }, []),
          (0, o.useEffect)(() => {
            (0, O.Kz)(new C.UserUseAccountRecoveryKeyEvent({ flowStep: C.FlowStep.Complete })),
              (0, mr.EZ)(C.DeleteKeyReason.RecoveryKeyUsed);
          }, []),
          (0, b.tZ)(
            l.Ejs,
            { sx: { flexDirection: "column", margin: "0 auto", textAlign: "center", alignItems: "center" } },
            (0, b.tZ)(b.JO, {
              name: "FeedbackSuccessOutlined",
              color: "ds.text.brand.quiet",
              sx: { marginBottom: "48px", width: "62px", height: "62px" }
            }),
            (0, b.tZ)(
              b.X6,
              { as: "h1", textStyle: "ds.title.section.large", sx: { marginBottom: "16px" } },
              e("login_account_recovery_key_success_screen_title")
            ),
            (0, b.tZ)(
              b.nv,
              { as: "label", textStyle: "ds.body.standard.regular", sx: { marginBottom: "48px" } },
              e(
                n
                  ? "login_account_recovery_key_success_screen_description_passwordless"
                  : "login_account_recovery_key_success_screen_description"
              )
            ),
            (0, b.tZ)(
              b.zx,
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
      var Er;
      const fr = () => {
        const e = (0, m.k)(ie.j, "recoveryFlowStatus");
        return (0, b.tZ)(
          U.L,
          { backgroundColor: "ds.background.default" },
          (0, b.tZ)(
            l.Ejs,
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
                case le.G.Success:
                  return Er || (Er = (0, b.tZ)(hr, null));
                case le.G.Failure:
                  return (0, b.tZ)(dr, { ...e.data });
                default:
                  return null;
              }
            })()
          )
        );
      };
      var xr, wr;
      const br = () => {
        const { translate: e } = (0, N.Z)(),
          { routes: t } = (0, r.Xo)();
        return (0, b.tZ)(
          "div",
          { sx: { backgroundColor: "ds.container.agnostic.neutral.supershy" }, className: Ht },
          xr || (xr = (0, b.tZ)(je, null)),
          (0, b.tZ)(
            "div",
            { className: M()($t, Xt) },
            wr || (wr = (0, b.tZ)(Se.W_, null)),
            (0, b.tZ)(
              U.L,
              { backgroundColor: "ds.background.default" },
              (0, b.tZ)(
                Se.L,
                null,
                (0, b.tZ)(Se.h4, { text: e("webapp_device_to_device_authentication_device_setup_title") }),
                (0, b.tZ)(b.nv, null, e.markup("webapp_device_to_device_authentication_device_setup_description_markup")),
                (0, b.tZ)(
                  b.zx,
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
      var vr,
        kr = a(69401),
        yr = a(287279);
      const Sr = "webapp_recover_otp_codes_header_subtitle",
        Tr = "webapp_recover_otp_codes_business_infobox_help_title",
        Ar = "webapp_recover_otp_codes_business_infobox_help_description",
        Nr = "webapp_recover_otp_codes_steps_title",
        Or = "webapp_recover_otp_codes_steps_enter_email",
        Cr = "webapp_recover_otp_codes_steps_get_sms",
        Rr = "webapp_recover_otp_codes_steps_login_with_recovery_code",
        Dr = "webapp_recover_otp_codes_steps_complete_2fa_setup",
        Ir = "webapp_recover_otp_codes_form_email_label",
        Zr = "webapp_recover_otp_codes_form_get_recovery_code_cta",
        Pr = "webapp_recover_otp_codes_more_info_title",
        Lr = "webapp_recover_otp_codes_more_info_link",
        Mr = {
          NetworkError: "_common_alert_network_error_message",
          UnknownError: "_common_generic_error",
          AccountNotEligible: "webapp_recover_otp_codes_account_not_eligible"
        };
      var Ur = (function (e) {
        return (e[(e.Idle = 0)] = "Idle"), (e[(e.Sending = 1)] = "Sending"), (e[(e.Error = 2)] = "Error"), e;
      })(Ur || {});
      const Vr = ({ onSuccess: e }) => {
          var t;
          const { search: a } = (0, se.TH)(),
            n = Ke.parse(a),
            { translate: r } = (0, N.Z)(),
            [s, i] = (0, o.useState)(null != (t = n.account) ? t : ""),
            [c, _] = (0, o.useState)(Ur.Idle),
            { showToast: u } = (0, b.pm)(),
            [p, d] = (0, o.useState)(null),
            { recoverOtpCodes: m } = (({ onSuccess: e, onError: t }) => {
              const { request2FaCodesByPhone: a } = (0, ce.u)(kr.M);
              return {
                recoverOtpCodes: async (n) => {
                  try {
                    const o = await a({ email: n });
                    return (0, yr.d6)(o) ? e() : t(o.error.tag);
                  } catch (e) {
                    return t("UnknownError");
                  }
                }
              };
            })({
              onSuccess: e,
              onError: (e) => {
                "NetworkError" === e || "UnknownError" === e ? (u({ mood: "danger", description: r(Mr[e]) }), d(null)) : d(e), _(Ur.Error);
              }
            }),
            g = c === Ur.Idle || c === Ur.Error;
          return (0, b.tZ)(
            "div",
            null,
            (0, b.tZ)(
              l.Ejs,
              { flexDirection: "column", gap: "16px" },
              (0, b.tZ)(b.X6, { as: "h1", textStyle: "ds.title.section.medium" }, r(Sr)),
              (0, b.tZ)(b.ke, { mood: "brand", title: r(Tr), description: r(Ar) }),
              (0, b.tZ)(b.nv, null, r(Nr)),
              (0, b.tZ)(
                b.nv,
                { as: "ul", sx: { listStyleType: "disc", listStylePosition: "outside", marginLeft: "24px" } },
                (0, b.tZ)("li", null, r(Or)),
                (0, b.tZ)("li", null, r(Cr)),
                (0, b.tZ)("li", null, r(Rr)),
                (0, b.tZ)("li", null, r(Dr))
              ),
              (0, b.tZ)(
                "form",
                {
                  onSubmit: (e) => {
                    d(null), _(Ur.Sending), m(s), e.preventDefault();
                  }
                },
                (0, b.tZ)(
                  l.Ejs,
                  {
                    gap: "16px",
                    sx: {
                      margin: "24px 8px 8px 8px",
                      padding: "40px",
                      alignItems: "flex-start",
                      alignContent: "flex-start",
                      bg: "ds.container.agnostic.neutral.quiet",
                      borderRadius: "8px",
                      alignSelf: "stretch",
                      flexWrap: "wrap",
                      justify: "stretch",
                      justifyContent: "flex-end"
                    }
                  },
                  (0, b.tZ)(
                    "div",
                    { sx: { flex: 1, minWidth: "280px" } },
                    (0, b.tZ)(b.s8, {
                      label: r(Ir),
                      value: s,
                      onChange: (e) => i(e.target.value),
                      disabled: !g,
                      error: !!p,
                      feedback: p ? r(Mr[p]) : void 0
                    })
                  ),
                  (0, b.tZ)(
                    b.zx,
                    { size: "large", type: "submit", disabled: !g || 0 === s.length, sx: { marginTop: "4px" } },
                    c === Ur.Sending ? vr || (vr = (0, b.tZ)(b.ZX, { mood: "brand" })) : r(Zr)
                  )
                )
              ),
              (0, b.tZ)(b.nv, null, r(Pr)),
              (0, b.tZ)(
                l.rUS,
                { href: "https://support.dashlane.com/hc/articles/202699101", sx: { color: "ds.text.brand.standard" } },
                r(Lr)
              )
            )
          );
        },
        Br = "webapp_recover_otp_codes_success_two_codes_warning_title",
        Fr = "webapp_recover_otp_codes_success_two_codes_warning",
        zr = "webapp_recover_otp_codes_success_two_codes_warning_learn_more",
        Gr = "webapp_recover_otp_disable_2fa_instructions_title",
        Wr = "webapp_recover_otp_disable_2fa_instructions_complete_login",
        jr = "webapp_recover_otp_disable_2fa_instructions_open_web_app_markup",
        qr = "webapp_recover_otp_disable_2fa_instructions_open_security_settings_markup",
        Kr = "webapp_recover_otp_disable_2fa_instructions_toggle_off_markup",
        Hr = "webapp_recover_otp_disable_2fa_instructions_enter_second_code",
        $r = "webapp_recover_otp_disable_2fa_instructions_now_disabled",
        Xr = () => {
          const { translate: e } = (0, N.Z)();
          return (0, b.tZ)(
            "div",
            null,
            (0, b.tZ)(
              l.Ejs,
              { flexDirection: "column", gap: "16px" },
              (0, b.tZ)(b.X6, { as: "h1", textStyle: "ds.title.section.medium" }, e("webapp_recover_otp_codes_success_header_title")),
              (0, b.tZ)(b.ke, {
                title: e(Br),
                mood: "warning",
                description: (0, b.tZ)(
                  l.Ejs,
                  { flexDirection: "column" },
                  (0, b.tZ)(b.nv, null, e(Fr)),
                  (0, b.tZ)(
                    l.rUS,
                    {
                      href: "https://support.dashlane.com/hc/en-us/articles/202625042-Protect-your-account-using-Two-Factor-Authentication",
                      sx: { color: "ds.text.brand.standard" }
                    },
                    e(zr)
                  )
                )
              }),
              (0, b.tZ)(b.X6, { as: "h2" }, e(Gr)),
              (0, b.tZ)(
                b.nv,
                { as: "ul", sx: { listStyleType: "disc", listStylePosition: "outside", marginLeft: "24px" } },
                (0, b.tZ)("li", null, e(Wr)),
                (0, b.tZ)("li", null, e.markup(jr)),
                (0, b.tZ)("li", null, e.markup(qr)),
                (0, b.tZ)("li", null, e.markup(Kr)),
                (0, b.tZ)("li", null, e(Hr)),
                (0, b.tZ)("li", null, e($r))
              )
            )
          );
        };
      var Yr, Qr;
      const Jr = "webapp_recover_otp_codes_header_title",
        es = () => {
          const [e, t] = (0, o.useState)(!1),
            { translate: a } = (0, N.Z)();
          return (0, b.tZ)(
            "div",
            { sx: { height: "100vh", width: "100%", bg: "ds.background.alternate" } },
            (0, b.tZ)(
              l.Ejs,
              { flexDirection: "column" },
              (0, b.tZ)(
                l.Ejs,
                {
                  sx: {
                    bg: "ds.container.agnostic.neutral.standard",
                    padding: "32px",
                    alignSelf: "stretch",
                    justifyContent: "center",
                    gap: "8px"
                  }
                },
                (0, b.tZ)(
                  l.Ejs,
                  { sx: { maxWidth: "800px", alignItems: "center", gap: "16px", flex: "1 0 0" } },
                  Yr || (Yr = (0, b.tZ)(l.NJ6, { size: 48, color: "ds.oddity.brand" })),
                  (0, b.tZ)(b.X6, { as: "h1", textStyle: "ds.title.section.large", color: "ds.text.neutral.catchy" }, a(Jr))
                )
              ),
              (0, b.tZ)(
                l.Ejs,
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
                (0, b.tZ)(
                  l.Ejs,
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
                  e ? Qr || (Qr = (0, b.tZ)(Xr, null)) : (0, b.tZ)(Vr, { onSuccess: () => t(!0) })
                )
              )
            )
          );
        };
      var ts = a(474281);
      const as = () => {
        const e = (0, m.k)(ts.d, "userAuthenticationMethod"),
          t = (0, m.k)(ts.d, "isFlowCompleted"),
          { initiateFlow: a, completeFlow: n } = (0, ce.u)(ts.d);
        return {
          userAuthenticationMethod: e.status === ha.rq.Success ? e.data : null,
          isFlowCompleted: t.status === ha.rq.Success && t.data,
          initiateFlow: async (e) => {
            const t = await a({ login: e });
            if ((0, yr.hx)(t)) return t.error.tag;
          },
          completeFlow: async (e, t) => {
            const a = await n({ token: e, isDelete: t });
            return (0, yr.hx)(a) ? a.error.tag : null;
          }
        };
      };
      var ns = a(495843);
      const os = ({ isDelete: e }) => {
        const [t, a] = (0, o.useState)(!1),
          [n, r] = (0, o.useState)(null),
          { translate: s } = (0, N.Z)(),
          { initiateFlow: i, userAuthenticationMethod: c } = as(),
          _ = (0, o.useCallback)(
            (e) => {
              a(!0),
                i(e.username).then((e) => {
                  switch ((e && a(!1), e)) {
                    case ns.U.UNKNOWN_USER:
                      r("webapp_error_user_not_found_deletion");
                      break;
                    case ns.U.SSO_BLOCKED:
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
          (0, o.useEffect)(() => {
            c && a(!1);
          }, [c]),
          (0, b.tZ)(
            o.Fragment,
            null,
            (0, b.tZ)(b.nv, null, s(e ? "webapp_step_unsername_instructions_deletion" : "webapp_step_username_instructions_reset")),
            (0, b.tZ)(ve.J9, { initialValues: { username: "" }, onSubmit: _ }, (e) =>
              (0, b.tZ)(
                l.Ejs,
                { fullWidth: !0, flexDirection: "column", gap: "6", as: ve.l0, autoComplete: "off" },
                (0, b.tZ)(ve.gN, { name: "username" }, ({ field: t }) =>
                  (0, b.tZ)(b.s8, {
                    ...t,
                    error: !!n,
                    readOnly: e.isSubmitting && !n,
                    label: s("webapp_form_email_label_deletion"),
                    required: !0,
                    feedback: { text: n ? s(n) : "" }
                  })
                ),
                (0, b.tZ)(
                  b.zx,
                  { sx: { alignSelf: "end" }, type: "submit", mood: "brand", intensity: "catchy", size: "large", isLoading: t },
                  s("webapp_continue_step_two_deletion")
                )
              )
            )
          )
        );
      };
      let rs = (function (e) {
        return (e.Username = "Username"), (e.TokenValidation = "TokenValidation"), (e.DeletionSuccess = " DeletionSuccess"), e;
      })({});
      var ss = a(75456),
        is = a(385169);
      const ls = "webapp_form_error_verification_timeout",
        cs = {
          [ss.O.INVALID_OTP_ALREADY_USED]: "webapp_form_error_invalid_otp_already_used",
          [ss.O.INVALID_OTP_BLOCKED]: "webapp_form_error_invalid_otp_blocked",
          [ss.O.ACCOUNT_BLOCKED_CONTACT_SUPPORT]: "webapp_form_error_account_blocked_contact_support",
          [ss.O.VERIFICATION_FAILED]: "webapp_form_error_verification_failed",
          [ss.O.VERIFICATION_REQUIRES_REQUEST]: ls,
          [ss.O.VERIFICATION_TIMEOUT]: ls
        },
        _s = ({ isDelete: e }) => {
          const [t, a] = (0, o.useState)(null),
            { completeFlow: n, userAuthenticationMethod: r } = as(),
            { translate: s } = (0, N.Z)();
          return (0, b.tZ)(
            o.Fragment,
            null,
            (0, b.tZ)(
              b.nv,
              null,
              s(
                ((e, t) =>
                  t ? "webapp_totp_instructions_deletion" : e ? "webapp_email_instructions_deletion" : "webapp_email_instructions_reset")(
                  e,
                  r === is.k.TOTP
                )
              )
            ),
            (0, b.tZ)(
              ve.J9,
              {
                initialValues: { emailCode: "" },
                onSubmit: async (t) => {
                  try {
                    const o = await n(t.emailCode, e);
                    o && a(cs[o]);
                  } catch (e) {
                    a("webapp_form_generic_error_deletion");
                  }
                }
              },
              (a) =>
                (0, b.tZ)(
                  l.Ejs,
                  { fullWidth: !0, flexDirection: "column", gap: "6", as: ve.l0, autoComplete: "off" },
                  (0, b.tZ)(ve.gN, { name: "emailCode" }, ({ field: { onChange: e, ...n } }) =>
                    (0, b.tZ)(b.qo, {
                      ...n,
                      onChange: (t) => {
                        e(t);
                      },
                      error: !!t,
                      label: s("webapp_form_code-label_deletion"),
                      readOnly: a.isSubmitting && !t,
                      feedback: { text: t ? s(t) : "" }
                    })
                  ),
                  (0, b.tZ)(
                    b.zx,
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
        us = ({ isDelete: e }) => {
          const { translate: t } = (0, N.Z)();
          return (0, b.tZ)(
            o.Fragment,
            null,
            (0, b.tZ)(b.X6, { as: "h2" }, t(e ? "webapp_success_step_title_account_deletion" : "webapp_success_step_title_account_reset")),
            (0, b.tZ)(
              b.nv,
              null,
              e ? t("webapp_success_step_message_account_deletion") : t.markup("webapp_success_step_message_account_reset_markup")
            )
          );
        },
        ps = ({ isDelete: e }) => {
          const { translate: t } = (0, N.Z)(),
            { userAuthenticationMethod: a, isFlowCompleted: n } = as(),
            o = ((e, t) => (e ? rs.DeletionSuccess : t ? rs.TokenValidation : rs.Username))(n, null !== a),
            r = null !== a ? 2 : 1,
            s = {
              [rs.Username]: t("webapp_step_username_paragraph_delete"),
              [rs.TokenValidation]: t(e ? "webapp_step_verification_paragraph_delete" : "webapp_step_verification_paragraph_reset"),
              [rs.DeletionSuccess]: null
            },
            i = {
              [rs.Username]: (0, b.tZ)(os, { isDelete: e }),
              [rs.TokenValidation]: (0, b.tZ)(_s, { isDelete: e }),
              [rs.DeletionSuccess]: (0, b.tZ)(us, { isDelete: e })
            };
          return (0, b.tZ)(
            U.L,
            { backgroundColor: "ds.container.agnostic.neutral.standard" },
            (0, b.tZ)(
              l.Ejs,
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
              (0, b.tZ)(
                b.X6,
                { textStyle: "ds.title.section.large", as: "h1", sx: { marginBottom: "16px" } },
                t(e ? "webapp_delete_account_title" : "webapp_reset_account_title")
              ),
              n
                ? null
                : (0, b.tZ)(b.ke, {
                    sx: { width: "100%" },
                    size: "large",
                    mood: "danger",
                    title: t(e ? "webapp_infobox_delete_account_title" : "webapp_infobox_reset_account_title"),
                    description: (0, b.tZ)(b.nv, null, s[o]),
                    actions: [
                      (0, b.tZ)(
                        b.zx,
                        {
                          intensity: "quiet",
                          key: "learnMore",
                          icon: "ActionOpenExternalLinkOutlined",
                          layout: "iconTrailing",
                          onClick: () => {
                            (0, at.nL)(e ? yn.h4 : yn.vD);
                          }
                        },
                        t("webapp_delete_account_learn_more")
                      )
                    ]
                  }),
              (0, b.tZ)(
                l.Ejs,
                {
                  flexWrap: "nowrap",
                  as: l.Zbd,
                  flexDirection: "column",
                  fullWidth: !0,
                  sx: {
                    padding: "24px",
                    backgroundColor: "ds.container.agnostic.neutral.supershy",
                    borderColor: "ds.border.neutral.quiet.idle",
                    gap: "16px"
                  }
                },
                n ? null : (0, b.tZ)(l.j49, null, "Step ", r, " of ", 2),
                i[o]
              )
            )
          );
        };
      var ds, ms, gs, hs, Es, fs, xs, ws, bs, vs, ks, ys;
      const Ss = (e, t) => {
        const a = e.clientRoutesBasePath;
        return o.createElement(
          _r,
          null,
          o.createElement(r.l_, { exact: !0, from: "/", to: `${a}/credentials` }),
          ds || (ds = o.createElement(r.AW, { path: i.Bb, component: es })),
          o.createElement(fo, { path: [i.S, i.P], options: { marketingContentType: _a.DashlaneBusiness } }),
          ms || (ms = o.createElement(fo, { path: [i.TT, i.SF, i.$F] })),
          gs || (gs = o.createElement(r.Vy, { path: i.rM, component: p.S })),
          hs || (hs = o.createElement(Ge, { path: i.bE })),
          Es || (Es = o.createElement(r.Vy, { path: i.aS, component: fr })),
          fs || (fs = o.createElement(r.Vy, { path: i.sL, component: Ea.rI })),
          xs || (xs = o.createElement(r.Vy, { path: i.Ml, component: br })),
          ws || (ws = o.createElement(wo.Z, { path: i.cO })),
          bs || (bs = o.createElement(tr, { path: i.J$ })),
          vs || (vs = o.createElement(r.Vy, { path: i.uN, component: u })),
          ks || (ks = o.createElement(r.Vy, { path: i.Sm, component: pr.B })),
          ys || (ys = o.createElement(r.Vy, { path: i._G, component: d })),
          o.createElement(r.Vy, { path: i.Mv, component: ps, additionalProps: { isDelete: !0 } }),
          o.createElement(r.Vy, { path: i.NO, component: ps, additionalProps: { isDelete: !1 } }),
          o.createElement(s.V, { ...(0, s.S)(a) }),
          o.createElement(xo.Z, { routingSchemeOptions: t, basePath: a, path: [...(0, ur.cX)(a)] })
        );
      };
    },
    589789: (e, t, a) => {
      "use strict";
      a.d(t, { FN: () => l, r9: () => c });
      var n = a(382706),
        o = a(459522),
        r = a(568197);
      const s = (...e) => e.join("/"),
        i = {
          [n.U.Address]: "/addresses",
          [n.U.BankAccount]: "/bank-accounts",
          [n.U.Company]: "/companies",
          [n.U.Credential]: "/credentials",
          [n.U.DriversLicense]: "/driver-licenses",
          [n.U.Email]: "/emails",
          [n.U.FiscalId]: "/fiscal-ids",
          [n.U.IdCard]: "/id-cards",
          [n.U.Identity]: "/identities",
          [n.U.Passkey]: "/passkeys",
          [n.U.Passport]: "/passports",
          [n.U.PaymentCard]: "/cards",
          [n.U.Phone]: "/phones",
          [n.U.Secret]: "/secrets",
          [n.U.SecureNote]: "/secure-notes",
          [n.U.SocialSecurityId]: "/social-security-ids",
          [n.U.Website]: "/websites"
        },
        l = (e) => {
          let t,
            a = 0;
          return e.startsWith("{") && (a = 1), e.endsWith("}") && (t = -1), e.toUpperCase().slice(a, t);
        },
        c = (e) => {
          e === o.vX.CLIENT ? o.M0 : o.U3;
          const t = o.wi,
            a = e === o.vX.TEAM_ADMIN_CONSOLE ? "" : t,
            n = o.ci,
            c = e === o.vX.CLIENT ? "" : o.Kn;
          return {
            teamRoutesBasePath: a,
            teamMembersRoutePath: s(a, "members"),
            teamSettingsRoutePath: s(a, "settings"),
            teamSettingsSso: s(a, "settings/sso-settings"),
            teamSettingsSsoEncryption: s(a, "settings/sso/self-hosted-sso"),
            teamAccountRoutePath: s(a, "account"),
            teamAccountChangePlanRoutePath: s(a, "account/changeplan"),
            teamActivityRoutePath: s(a, "activity"),
            teamGetStartedRoutePath: s(a, "get-started"),
            teamDashboardRoutePath: s(a, "dashboard"),
            teamDarkWebInsightsRoutePath: s(a, "dark-web-insights"),
            teamGroupsRoutePath: s(a, "groups"),
            teamGroupRoutePath: (e) => s(a, `groups/${e}`),
            familyDashboard: s(c, "family-dashboard"),
            clientRoutesBasePath: c,
            userDeviceRegistration: s(n, "device-registration"),
            userCreateMasterPassword: s(n, "create-master-password"),
            userSendRequest: s(n, "send-request"),
            userPendingRequest: s(n, "pending-request"),
            userAddApplicationCredential: s(c, "credentials/add/application"),
            userAddDatabaseCredential: s(c, "credentials/add/database"),
            userAddWebsiteCredential: s(c, "credentials/add"),
            userAddWebsiteCredentialWithPrefilledParameters: (e) => ({ pathname: s(c, "password-history/credentials/add"), state: e }),
            userCollection: (e) => s(c, `collections/${l(e)}`),
            userCollections: s(c, "collections"),
            userCredentials: s(c, "credentials"),
            userCredentialsAccountSettings: s(c, "credentials/account-settings"),
            userPasskeys: s(c, "passkeys"),
            userPasskey: (e) => s(c, `passkeys/${l(e)}`),
            userVaultItem: (e, t, a) => {
              const n = i[t];
              return a.includes(n) || (a += n), `${a}/${l(e)}`;
            },
            userCredential: (e) => s(c, `credentials/${l(e)}`),
            userPasswordHistory: s(c, "password-history"),
            userPasswordHistoryFilteredByCredential: (e) => s(c, `password-history/filter/${l(e)}`),
            userAddBlankNote: s(c, "secure-notes/add"),
            userSecureNotes: s(c, "secure-notes"),
            userAddBlankSecret: s(c, "secrets/add"),
            userSecrets: s(c, "secrets"),
            userOnboarding: s(c, "onboarding"),
            userReferral: s(c, "referral"),
            userChromeWelcome: s(c, "chrome-welcome"),
            userPasswordSites: s(c, "onboarding/add-password"),
            userAddMobile: s(c, "onboarding/add-mobile"),
            userTryAutofill: s(c, "onboarding/try-autofill"),
            userSecureNote: (e) => s(c, `secure-notes/${l(e)}`),
            userSecret: (e) => s(c, `secrets/${l(e)}`),
            userAddPersonalInfoCompany: s(c, "personal-info/companies/add"),
            userAddPersonalInfoEmail: s(c, "personal-info/emails/add"),
            userAddPersonalInfoAddress: s(c, "personal-info/addresses/add"),
            userAddPersonalInfoIdentity: s(c, "personal-info/identities/add"),
            userAddPersonalInfoPhone: s(c, "personal-info/phones/add"),
            userAddPersonalInfoWebsite: s(c, "personal-info/websites/add"),
            userPersonalInfo: s(c, "personal-info"),
            userPersonalInfoAddress: (e) => s(c, `personal-info/addresses/${l(e)}`),
            userPersonalInfoCompany: (e) => s(c, `personal-info/companies/${l(e)}`),
            userPersonalInfoEmail: (e) => s(c, `personal-info/emails/${l(e)}`),
            userPersonalInfoIdentity: (e) => s(c, `personal-info/identities/${l(e)}`),
            userPersonalInfoPhone: (e) => s(c, `personal-info/phones/${l(e)}`),
            userPersonalInfoWebsite: (e) => s(c, `personal-info/websites/${l(e)}`),
            userPayments: s(c, "payments"),
            userAddPaymentCard: s(c, "payments/card/add"),
            userPaymentCard: (e) => s(c, `payments/card/${l(e)}`),
            userAddBankAccount: s(c, "payments/bank-account/add"),
            userBankAccount: (e) => s(c, `payments/bank-account/${l(e)}`),
            userIdsDocuments: s(c, "ids"),
            userAddIdDocument: (e) => s(c, `ids${i[e]}/add`),
            userEditIdDocument: (e, t) => s(c, `ids${i[e]}/${l(t)}`),
            userEmergency: s(c, "emergency"),
            userSettings: s(c, "settings"),
            userUpsell: s(c, "go-premium"),
            userSharingCenter: s(c, "sharing-center"),
            userGoPlans: o.ZL,
            userGoAdvanced: (e, t) => (0, r.g3)(o.TD, { subCode: e, pricing: t }),
            userGoEssentials: (e, t) => (0, r.g3)(o.lP, { subCode: e, pricing: t }),
            userGoFamily: (e, t) => (0, r.g3)(o.GG, { subCode: e, pricing: t }),
            userGoPremium: (e, t) => (0, r.g3)(o.G9, { subCode: e, pricing: t }),
            userSharingGroupInfo: (e) => s(c, `sharing-center/group/${l(e)}`),
            userSharingUserInfo: (e) => s(c, `sharing-center/user/${e.toLowerCase()}`),
            userPasswordHealth: s(c, "password-health"),
            userSubscriptionManagement: s(c, "subscription"),
            deviceTransfer: s(c, "device-transfer"),
            darkWebMonitoring: s(c, "darkweb-monitoring"),
            antiPhishing: s(c, "anti-phishing"),
            premiumPlus: s(c, "premium-plus"),
            vpn: s(c, "vpn"),
            importData: s(c, "import/source"),
            twoFactorAuthenticationEnforce: s(c, "two-factor-authentication/enforce"),
            dashlaneLabs: s(c, "dashlane-labs"),
            privacySettings: s(c, "privacy-settings"),
            recover2faCodes: (e) => (e ? `recover-2fa-codes?account=${e}` : "recover-2fa-codes")
          };
        };
    },
    832718: (e, t, a) => {
      "use strict";
      a.d(t, { L: () => r });
      var n = a(876307),
        o = a(962899);
      const r = ({ children: e, backgroundColor: t = "ds.background.alternate" }) =>
        (0, n.tZ)(
          "div",
          { sx: { backgroundColor: t, minHeight: "100%", width: "100%" } },
          (0, n.tZ)(
            "div",
            { sx: { position: "sticky", paddingLeft: "80px", top: "50px" } },
            (0, n.tZ)(o.D1W, { color: o.vei.DashGreen, size: o.r1z.Size39 })
          ),
          e
        );
    },
    144134: (e, t, a) => {
      "use strict";
      a.d(t, { Z: () => n });
      const n = (0, a(435681).Z)("INITIAL_SYNC_PROGRESS", { isPending: !1, isIntroPhasePending: !1 });
    },
    427216: (e, t, a) => {
      "use strict";
      a.d(t, { D: () => n, t: () => o });
      const n = (e) => e.initialSyncProgress.isPending,
        o = (e) => e.initialSyncProgress.isIntroPhasePending;
    },
    298049: (e, t, a) => {
      "use strict";
      a.d(t, { v: () => i });
      var n = a(696832),
        o = a(154350),
        r = a(876307),
        s = a(488203);
      const i = ({ isOpen: e, onLogout: t, onDismiss: a }) => {
        const { translate: i } = (0, s.Z)(),
          l = (0, o.Z)().isMPLessUser,
          c = () => {
            a && a();
          };
        return n.createElement(
          r.Vq,
          {
            title: i(l ? "webapp_logout_dialog_title_mpless_specific" : "webapp_logout_dialog_title"),
            isOpen: e,
            onClose: c,
            closeActionLabel: i("_common_dialog_dismiss_button"),
            isDestructive: !0,
            actions: {
              primary: {
                children: i("webapp_logout_dialog_confirm"),
                onClick: () => {
                  t();
                }
              },
              secondary: { children: i("webapp_logout_dialog_dismiss"), onClick: c }
            }
          },
          n.createElement(
            r.nv,
            { color: "ds.text.neutral.standard" },
            i(l ? "webapp_logout_dialog_mpless_text" : "webapp_logout_dialog_text")
          )
        );
      };
    },
    895980: (e, t, a) => {
      "use strict";
      a.d(t, { a: () => c });
      var n = a(696832),
        o = a(754793),
        r = a(148038),
        s = a(740300),
        i = a(952296),
        l = a(427216);
      function c() {
        const e = (0, r.qr)({ queryConfig: { query: s.C.getLoginStatus }, liveConfig: { live: s.C.loginStatusChanged } }, []),
          t = (0, o.v9)(l.D),
          a = (0, o.oR)(),
          c = n.useRef(!0);
        n.useEffect(() => {
          if (e.status === r.rq.Success) {
            const { loggedIn: n, needsSSOMigration: o } = e.data;
            n || (c.current = !0), n && c.current && !t && !o && ((0, i.et)(a), (c.current = !1));
          }
        }, [a, e, t]);
      }
    },
    122225: (e, t, a) => {
      "use strict";
      a.d(t, { a: () => v });
      var n = a(696832),
        o = a(383849),
        r = a.n(o),
        s = a(962899),
        i = a(488203),
        l = a(837527),
        c = a(764130),
        _ = a(929986),
        u = a(876307),
        p = a(482598),
        d = a(799852),
        m = a(593039),
        g = a(459522),
        h = a(45272),
        E = a(692077);
      const f = ({ onLostKey: e }) => {
        const { translate: t } = (0, i.Z)(),
          { startRecoveryFlow: a } = (0, p.u)(c.j),
          o = (0, d.k)(_.V, "authenticationFlowStatus");
        return (0, u.tZ)(
          n.Fragment,
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
                  if ("MasterPasswordStep" !== o.data?.step)
                    throw new Error("Cant perform AR outside of Master Password step of the Login flow");
                  a({ login: o.data?.loginEmail }),
                    (0, h.Kz)(new m.UserUseAccountRecoveryKeyEvent({ flowStep: m.FlowStep.Start })),
                    (0, E.uX)(g.g);
                }
              },
              t("webapp_login_form_use_your_recovery_key_start_button")
            )
          )
        );
      };
      var x = a(773817);
      const w = () => {
        const { translate: e } = (0, i.Z)();
        return (0, x.tZ)(
          n.Fragment,
          null,
          (0, x.tZ)(
            s.$N8,
            null,
            (0, x.tZ)(
              u.X6,
              { as: "h2", color: "ds.text.neutral.catchy", sx: { margin: "32px 0 16px 0" } },
              e("webapp_login_form_lost_recovery_key_start_title")
            )
          ),
          (0, x.tZ)(
            s.a7O,
            null,
            (0, x.tZ)(
              u.nv,
              { color: "ds.text.neutral.standard", sx: { marginBottom: "24px" } },
              e("webapp_login_form_lost_recovery_key_description_primary")
            ),
            (0, x.tZ)(u.nv, { color: "ds.text.neutral.standard" }, e("webapp_login_form_lost_recovery_key_description_secondary"))
          ),
          (0, x.tZ)(
            s.cNS,
            null,
            (0, x.tZ)(
              "a",
              { href: g.yE, target: "_blank", rel: "noopener noreferrer" },
              (0, x.tZ)(
                u.zx,
                { intensity: "quiet", mood: "neutral", sx: { marginRight: "8px" } },
                e("webapp_login_form_lost_recovery_key_learn_more_button")
              )
            ),
            (0, x.tZ)(
              "a",
              { href: g.J, target: "_blank", rel: "noopener noreferrer" },
              (0, x.tZ)(u.zx, null, e("webapp_login_form_lost_recovery_key_reset_account_button"))
            )
          )
        );
      };
      var b;
      const v = ({ onClose: e }) => {
        const { translate: t } = (0, i.Z)(),
          [a, o] = (0, n.useState)(!1);
        return n.createElement(
          s.VqE,
          {
            isOpen: !0,
            modalContentClassName: r()(l.Ht),
            disableOutsideClickClose: !0,
            disableScrolling: !0,
            disableUserInputTrap: !0,
            disableEscapeKeyClose: !0,
            closeIconName: t("_common_dialog_dismiss_button"),
            onClose: e
          },
          a ? b || (b = n.createElement(w, null)) : n.createElement(f, { onLostKey: () => o(!0) })
        );
      };
    },
    899496: (e, t, a) => {
      "use strict";
      a.d(t, { H: () => p });
      var n,
        o = a(696832),
        r = a(784995),
        s = a(181151),
        i = a(267678),
        l = a(692077),
        c = a(740300),
        _ = a(459522),
        u = a(78848);
      const p = ({ onClose: e, masterPassword: t, existingARStatus: a }) => {
        const [p, d] = (0, o.useState)(null != a ? a : { processStatus: "UNSET" });
        (0, o.useEffect)(() => {
          "UNSET" === p.processStatus &&
            (async () => {
              const e = await c.C.isRecoveryRequestPending();
              if (e.success && e.response) {
                const e = await c.C.checkRecoveryRequestStatus({ masterPassword: t });
                e.success && d({ processStatus: "PENDING", requestStatus: e.response.status });
              }
            })();
        }, []);
        const m = () => {
            d({ processStatus: "UNSET" });
          },
          g = () => {
            m(), e();
          };
        return o.createElement(
          o.Fragment,
          null,
          n || (n = o.createElement("div", { id: "dashlane-dialog" })),
          o.createElement(
            i.r,
            null,
            "UNSET" === p.processStatus && o.createElement(u.WE, { showAccountRecoveryDialog: !0, handleDismiss: g }),
            "ERROR" === p.processStatus && o.createElement(u.Hc, { isAccountRecoveryError: !0, handleGenericRecoveryErrorClose: g }),
            "PENDING" === p.processStatus &&
              o.createElement(
                o.Fragment,
                null,
                o.createElement(u.H4, {
                  isAccountRecoveryPending: p.requestStatus === s.e.PENDING,
                  shouldSendNewRequest: !t,
                  handleShowAccountRecoveryDialog: m,
                  handleShowGenericRecoveryError: () => {
                    d({ processStatus: "ERROR" });
                  },
                  handleDismiss: g
                }),
                o.createElement(u.g1, {
                  isAccountRecoveryApproved: p.requestStatus === s.e.APPROVED,
                  handleDismiss: g,
                  handleAccountRecovery: async () => {
                    t &&
                      0 !== t.length &&
                      ((await c.C.recoverUserData({ masterPassword: t })).success
                        ? (c.C.changeMasterPassword({ newPassword: t, flow: r.pT.ADMIN_ASSISTED_RECOVERY }),
                          (0, l.uX)(`${_.ci}/change-master-password`))
                        : d({ processStatus: "ERROR" }));
                  }
                }),
                o.createElement(u._H, { isAccountRecoveryRejected: p.requestStatus === s.e.REFUSED, handleDismiss: g })
              )
          )
        );
      };
    },
    19636: (e, t, a) => {
      "use strict";
      a.d(t, { z: () => x });
      var n,
        o = a(383849),
        r = a.n(o),
        s = a(764130),
        i = a(929986),
        l = a(876307),
        c = a(593039),
        _ = a(482598),
        u = a(799852),
        p = a(773817),
        d = a(962899),
        m = a(45272),
        g = a(488203),
        h = a(837527),
        E = a(459522),
        f = a(692077);
      const x = ({ onClose: e }) => {
        const { translate: t } = (0, g.Z)(),
          { startRecoveryFlow: a } = (0, _.u)(s.j),
          o = (0, u.k)(i.V, "authenticationFlowStatus");
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
              l.X6,
              { as: "h2", color: "ds.text.neutral.catchy", sx: { marginBottom: "16px" } },
              t("webapp_login_form_choose_account_recovery_key_method_title")
            )
          ),
          (0, p.tZ)(
            d.a7O,
            null,
            (0, p.tZ)(l.nv, { color: "ds.text.neutral.standard" }, t("webapp_login_form_choose_account_recovery_key_method_description")),
            (0, p.tZ)(
              d.rUS,
              {
                target: "_blank",
                rel: "noopener noreferrer",
                href: E.rI,
                sx: { display: "flex", alignItems: "center", marginTop: "16px" }
              },
              (0, p.tZ)(
                l.nv,
                { color: "ds.text.brand.quiet", textStyle: "ds.body.standard.strong", sx: { marginRight: "6px" } },
                t("webapp_login_form_choose_account_recovery_key_method_link")
              ),
              n || (n = (0, p.tZ)(l.JO, { name: "ActionOpenExternalLinkOutlined", size: "small", color: "ds.text.brand.standard" }))
            )
          ),
          (0, p.tZ)(
            d.cNS,
            null,
            (0, p.tZ)(
              l.zx,
              {
                intensity: "quiet",
                mood: "neutral",
                sx: { marginRight: "8px" },
                onClick: () => {
                  if ("MasterPasswordStep" !== o.data?.step)
                    throw new Error("Cant perform AR outside of Master Password step of the Login flow");
                  a({ login: o.data?.loginEmail }),
                    (0, m.Kz)(new c.UserUseAccountRecoveryKeyEvent({ flowStep: c.FlowStep.Start })),
                    (0, f.uX)(E.g);
                }
              },
              t("webapp_login_form_choose_account_recovery_key_method_use_ark_button")
            ),
            (0, p.tZ)(
              l.zx,
              {
                mood: "brand",
                onClick: () => {
                  (0, f.uX)(E.ci);
                }
              },
              t("webapp_login_form_choose_account_recovery_key_method_use_admin_ar_button")
            )
          )
        );
      };
    },
    902092: (e, t, a) => {
      "use strict";
      a.d(t, { A3: () => g, h4: () => _, W_: () => c, ae: () => f, L: () => r });
      var n = a(876307),
        o = a(962899);
      const r = ({ children: e }) =>
        (0, n.tZ)(
          o.Ejs,
          { justifyContent: "center", alignItems: "center", flexDirection: "column", sx: { marginTop: "150px" } },
          (0, n.tZ)(
            o.Ejs,
            { justifyContent: "left", flexDirection: "column", gap: "32px", sx: { width: "350px", position: "relative" } },
            e
          )
        );
      var s = a(692077),
        i = a(488203),
        l = a(459522);
      const c = () => {
          const { translate: e } = (0, i.Z)();
          return (0, n.tZ)(
            o.Ejs,
            { justifyContent: "flex-end", alignItems: "center", sx: { alignSelf: "end", marginRight: "80px", marginTop: "40px" } },
            (0, n.tZ)(n.nv, { color: "ds.text.neutral.quiet" }, e("webapp_auth_panel_create_an_account")),
            (0, n.tZ)(
              n.zx,
              {
                sx: { marginLeft: "15px" },
                type: "button",
                intensity: "quiet",
                onClick: () => {
                  (0, s.uX)(l.SF);
                }
              },
              e("webapp_auth_panel_create_sign_up")
            )
          );
        },
        _ = ({ text: e }) => (0, n.tZ)("header", null, (0, n.tZ)(n.X6, { as: "h2", textStyle: "ds.title.section.large" }, e));
      var u = a(929986),
        p = a(482598),
        d = a(593039),
        m = a(45272);
      const g = ({ selectedEmail: e }) => {
        const { translate: t } = (0, i.Z)(),
          { changeLogin: a } = (0, p.u)(u.V),
          o = t("webapp_login_form_password_fieldset_log_in_different_account");
        return (0, n.tZ)(
          "div",
          null,
          (0, n.tZ)(n.nv, { sx: { fontWeight: 500, wordBreak: "break-all", marginBottom: "5px" }, "data-testid": "login-email-header" }, e),
          (0, n.tZ)(
            n.zx,
            {
              type: "button",
              intensity: "supershy",
              onClick: () => (a({}), void (0, m.Kz)(new d.UserUseAnotherAccountEvent({}))),
              sx: {
                padding: "0",
                height: "auto",
                fontWeight: "400",
                fontSize: "13px",
                "&:hover": { backgroundColor: "transparent !important" }
              },
              "aria-label": o
            },
            o
          )
        );
      };
      var h = a(696832);
      const E = "securityCodeInstruction",
        f = ({ securityToken: e, maxLength: t, title: a, onTokenInputChange: r, errorMessage: s }) =>
          h.createElement(
            h.Fragment,
            null,
            h.createElement(n.nv, { id: E, color: "ds.text.neutral.quiet", style: { marginBottom: "16px" } }, a),
            h.createElement(o.rRH, {
              autoFocus: !0,
              value: e,
              maxLength: t,
              inputMode: "numeric",
              id: "security-code-input",
              "data-testid": "token-input",
              onChange: r,
              feedbackType: s ? "error" : void 0,
              feedbackText: s,
              "aria-labelledby": E
            })
          );
      a(122225), a(899496), a(19636);
    },
    718763: (e, t, a) => {
      "use strict";
      a.d(t, { N3: () => n, Rq: () => o, Z6: () => r });
      const n = 6,
        o = 2e3,
        r = "ask-account-recovery-key";
    },
    192120: (e, t, a) => {
      "use strict";
      a.d(t, { f: () => r });
      var n = a(148038),
        o = a(740300);
      const r = () =>
        (0, n.qr)({ queryConfig: { query: o.C.getIsAutoSSOLoginDisabled }, liveConfig: { live: o.C.liveIsAutoSSOLoginDisabled } }, []);
    },
    103128: (e, t, a) => {
      "use strict";
      a.d(t, { G: () => r });
      var n = a(148038),
        o = a(740300);
      function r() {
        const e = (0, n.qr)(
          { queryConfig: { query: o.C.getIsLoginFlowMigrationDisabled }, liveConfig: { live: o.C.liveIsLoginFlowMigrationDisabled } },
          []
        );
        return e.status !== n.rq.Success ? { loading: !0 } : { loading: !1, data: e.data };
      }
    },
    247240: (e, t, a) => {
      "use strict";
      a.d(t, { c: () => s });
      var n = a(764130),
        o = a(799852),
        r = a(300044);
      function s() {
        var e;
        const t = (0, r.f)(),
          { data: a } = (0, o.k)(n.j, "accountRecoveryKeyStatus", { login: null != t ? t : "" });
        return null != (e = a?.isEnabled) && e;
      }
    },
    532779: (e, t, a) => {
      "use strict";
      a.d(t, {
        sI: () => R,
        W2: () => h,
        rG: () => k,
        Wo: () => Q,
        ku: () => ce,
        JU: () => N,
        UV: () => oe,
        rI: () => fe,
        a3: () => te,
        Lv: () => Le,
        NA: () => he
      });
      var n = a(696832),
        o = a(788355),
        r = a(876307),
        s = a(55548),
        i = a(593039),
        l = a(962899),
        c = a(459522),
        _ = a(488203),
        u = a(692077),
        p = a(902092);
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
          loginEmail: a,
          isLoading: h,
          error: E,
          clearInputError: f,
          prefilledEmail: x,
          onClearPrefilledEmail: w
        }) => {
          var b;
          const { translate: v } = (0, _.Z)(),
            [k, y] = (0, n.useState)(e && e.length > 0 && e.some((e) => e.isLastSuccessfulLogin)),
            { trackPageView: S } = (0, s.D)();
          (0, n.useEffect)(() => {
            S({ pageView: i.PageView.LoginEmail });
          }, []);
          const T = e.find((e) => e.isLastSuccessfulLogin),
            A = null != (b = null != a ? a : T?.login) ? b : "";
          (0, n.useEffect)(() => {
            x && (w(), t({ login: x }));
          }, [x]),
            (0, n.useEffect)(() => {
              "USER_DOESNT_EXIST_SSO" === E && (f(), (0, u.uX)(`${c.SF}?email=${a}`));
            }, [E, a, f]);
          const N = (0, o.TA)({
              initialValues: { email: A },
              onSubmit: (e) => {
                const { email: a } = e;
                t({ login: a });
              }
            }),
            {
              values: { email: O },
              setFieldValue: C
            } = N,
            R = [
              ...e.map(({ login: e }) => ({ label: e, value: e })),
              { label: v("webapp_login_form_email_fieldset_select_option_other_account"), value: g }
            ];
          return (0, r.tZ)(
            p.L,
            null,
            (0, r.tZ)(p.h4, { text: v("webapp_login_form_heading_log_in") }),
            (0, r.tZ)(
              "form",
              { noValidate: !0, onSubmit: N.handleSubmit, sx: { gap: "25px", display: "flex", flexDirection: "column" } },
              k && e
                ? (0, r.tZ)(
                    r.nv,
                    { as: "label", htmlFor: "login-select", "data-testid": "login_container", color: "ds.text.neutral.quiet" },
                    (0, r.tZ)(l.qWE, {
                      id: "login-select",
                      "data-testid": "login_container",
                      name: "email",
                      isClearable: !1,
                      isSearchable: !1,
                      options: R,
                      onChange: (e) => {
                        const t = e.value;
                        f(), t === g ? (C("email", ""), y(!1)) : C("email", t);
                      },
                      value: { label: O, value: O }
                    })
                  )
                : (0, r.tZ)(r.s8, {
                    name: "email",
                    id: "extng-account-email-input",
                    value: O,
                    type: "email",
                    onChange: (e) => {
                      const {
                        target: { value: t }
                      } = e;
                      f(), t === g ? (C("email", ""), y(!1)) : C("email", t);
                    },
                    placeholder: v("webapp_login_form_email_fieldset_email_placeholder"),
                    label: v("webapp_login_form_email_fieldset_email_description"),
                    error: !!E,
                    feedback: E ? { id: "login-account-email-input-error", text: v(m[E]) } : void 0,
                    autoFocus: !0
                  }),
              (0, r.tZ)(
                r.zx,
                {
                  type: "submit",
                  id: "extng-account-email-next-button",
                  "aria-label": v(d),
                  "data-testid": "login-button",
                  fullsize: !0,
                  size: "large",
                  disabled: h,
                  isLoading: h
                },
                v(d)
              )
            )
          );
        };
      var E = a(110551),
        f = a(718763),
        x = a(809205),
        w = a(72133),
        b = a(45272);
      const v = {
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
        k = ({
          loginEmail: e,
          error: t,
          isLoading: a,
          isDashlaneAuthenticatorAvailable: c,
          resendEmailToken: u,
          switchToDashlaneAuthenticator: d,
          submitEmailToken: m,
          clearInputError: g,
          prefilledToken: h,
          onClearPrefilledToken: k
        }) => {
          var y;
          const { translate: S } = (0, _.Z)(),
            [T, A] = (0, n.useState)(!1),
            { trackPageView: N } = (0, s.D)();
          (0, n.useEffect)(() => {
            N({ pageView: i.PageView.LoginTokenEmail });
          }, []),
            (0, n.useEffect)(() => {
              h && (k(), m({ emailToken: h, deviceName: E.getDefaultDeviceName() }));
            }, [h]);
          const {
            setFieldValue: O,
            handleSubmit: C,
            values: { emailToken: R }
          } = (0, o.TA)({
            initialValues: { emailToken: "" },
            onSubmit: ({ emailToken: e }) => {
              m({ emailToken: e, deviceName: E.getDefaultDeviceName() });
            }
          });
          return (0, r.tZ)(
            p.L,
            null,
            (0, r.tZ)(p.h4, { text: S("webapp_login_form_heading_log_in") }),
            (0, r.tZ)(p.A3, { selectedEmail: e }),
            (0, r.tZ)(
              "form",
              { onSubmit: C },
              (0, r.tZ)(p.ae, {
                title: S("webapp_login_form_password_fieldset_security_code_description"),
                securityToken: R,
                maxLength: f.N3,
                onTokenInputChange: (e) => {
                  const {
                    target: { value: t }
                  } = e;
                  g(), O("emailToken", ((e) => e.replace(/\D/g, ""))(t)), t.length === f.N3 && C();
                },
                errorMessage: t ? S(null != (y = v[t]) ? y : v.UNKNOWN_ERROR) : void 0
              }),
              (0, r.tZ)(
                r.zx,
                {
                  type: "submit",
                  id: "extng-submit-email-token-button",
                  "data-testid": "login-button",
                  isLoading: a,
                  disabled: R.length < 6,
                  size: "large",
                  fullsize: !0,
                  sx: { marginTop: "16px" }
                },
                S("webapp_auth_panel_login")
              )
            ),
            (0, r.tZ)(
              "div",
              null,
              (0, r.tZ)(r.nv, null, S("webapp_dashlane_authenticator_authentication_didnt_receive_code")),
              (0, r.tZ)(
                l.Ejs,
                null,
                (0, r.tZ)(
                  l.rUS,
                  {
                    onClick: () => {
                      (0, b.Kz)(new i.UserResendTokenEvent({})),
                        u(),
                        A(!0),
                        setTimeout(() => {
                          A(!1);
                        }, f.Rq);
                    },
                    color: "ds.text.brand.quiet",
                    sx: { marginRight: "4px" }
                  },
                  S("webapp_login_form_password_fieldset_resend_token")
                ),
                T
                  ? (0, r.tZ)(
                      l.Ejs,
                      { style: { marginTop: "24px", marginBottom: "24px" } },
                      (0, r.tZ)(w.Z, {
                        height: 18.5,
                        width: 18.5,
                        animationParams: { renderer: "svg", animationData: x, loop: !1, autoplay: !0 }
                      }),
                      (0, r.tZ)(
                        r.nv,
                        { color: "ds.text.positive.quiet", sx: { marginLeft: "4px" } },
                        S("webapp_login_form_password_fieldset_security_code_resent")
                      )
                    )
                  : null
              ),
              c
                ? (0, r.tZ)(
                    l.Ejs,
                    { flexDirection: "column", sx: { marginTop: "24px" } },
                    (0, r.tZ)(r.nv, null, S("webapp_dashlane_authenticator_authentication_cant_access_your_email")),
                    (0, r.tZ)(
                      l.rUS,
                      {
                        onClick: () => {
                          d();
                        },
                        color: "ds.text.brand.quiet"
                      },
                      S("webapp_dashlane_authenticator_authentication_use_dashlane_authenticator_app")
                    )
                  )
                : null
            )
          );
        };
      var y = a(581173);
      const S = {
          EMPTY_OTP: "webapp_login_form_password_fieldset_security_code_error_empty_otp",
          OTP_NOT_VALID: "webapp_account_security_settings_two_factor_authentication_turn_off_authenticator_invalid_security_code",
          OTP_ALREADY_USED: "webapp_login_form_password_fieldset_security_code_error_otp_already_used",
          OTP_TOO_MANY_ATTEMPTS: "webapp_login_form_password_fieldset_security_code_error_token_too_many_attempts",
          UNKNOWN_ERROR: "webapp_login_form_password_fieldset_security_code_error_unkown",
          NETWORK_ERROR: "webapp_login_form_password_fieldset_network_error_offline"
        },
        T = RegExp("^[0-9]{6}$"),
        A = { display: "flex", flexDirection: "column", gap: "4px", lineHeight: "20px" },
        N = ({
          loginEmail: e,
          error: t,
          isLoading: a,
          changeTwoFactorAuthenticationOtpType: d,
          clearInputError: m,
          submitTotp: g,
          prefilledToken: h,
          onClearPrefilledToken: E
        }) => {
          var x;
          const { translate: w } = (0, _.Z)(),
            { routes: b } = (0, u.Xo)(),
            [v, k] = (0, n.useState)(!1),
            N = (0, n.useRef)();
          (0, n.useEffect)(() => {
            h && (E(), g({ twoFactorAuthenticationOtpValue: h }));
          }, [h]);
          const { trackPageView: O } = (0, s.D)();
          (0, n.useEffect)(() => {
            O({ pageView: i.PageView.LoginTokenAuthenticator });
          }, []),
            (0, n.useEffect)(() => {
              t && (k(N.current === t && t === y._V[y._V.OTP_NOT_VALID]), (N.current = t));
            }, [t]);
          const {
            setFieldValue: C,
            handleSubmit: R,
            values: { twoFactorAuthenticationOtpValue: D }
          } = (0, o.TA)({
            initialValues: { twoFactorAuthenticationOtpValue: "" },
            onSubmit: ({ twoFactorAuthenticationOtpValue: e }) => {
              g({ twoFactorAuthenticationOtpValue: e });
            }
          });
          return (0, r.tZ)(
            p.L,
            null,
            (0, r.tZ)(p.h4, { text: w("webapp_login_form_heading_log_in") }),
            (0, r.tZ)(p.A3, { selectedEmail: e }),
            (0, r.tZ)(
              "form",
              { onSubmit: R },
              (0, r.tZ)(p.ae, {
                title: w("webapp_login_form_password_fieldset_security_code_otp_description"),
                securityToken: D,
                maxLength: f.N3,
                onTokenInputChange: (e) => {
                  const {
                    target: { value: t }
                  } = e;
                  m(), C("twoFactorAuthenticationOtpValue", ((e) => e.replace(/\D/g, ""))(t)), T.test(t) && R();
                },
                errorMessage: t ? w(null != (x = S[t]) ? x : S.UNKNOWN_ERROR) : void 0
              }),
              v
                ? (0, r.tZ)(r.ke, {
                    sx: { marginTop: "16px" },
                    title: w.markup(
                      "webapp_two_factor_authentication_sync_devices_time_infobox_markup",
                      { supportArticleLink: c.fL },
                      { linkTarget: "_blank" }
                    ),
                    mood: "brand",
                    size: "small"
                  })
                : null,
              (0, r.tZ)(
                l.nvN,
                { color: "ds.text.neutral.quiet", sx: { ...A, margin: "16px 0 8px 0" } },
                w("webapp_two_factor_authentication_cant_access_your_app"),
                (0, r.tZ)(
                  l.rUS,
                  { onClick: () => d({ twoFactorAuthenticationOtpType: "backupCode" }), color: "ds.text.brand.quiet", target: "_self" },
                  w("webapp_two_factor_authentication_use_backup_code")
                )
              ),
              (0, r.tZ)(
                l.nvN,
                { color: "ds.text.neutral.quiet", sx: { ...A, margin: "8px 0" } },
                w("webapp_two_factor_authentication_lost_your_phone"),
                (0, r.tZ)(
                  u.OL,
                  {
                    sx: { color: "ds.text.brand.quiet", fontWeight: 600 },
                    to: b.recover2faCodes(e),
                    target: "_blank",
                    rel: "noopener noreferrer"
                  },
                  w("webapp_two_factor_authentication_reset_2fa")
                )
              ),
              (0, r.tZ)(
                r.zx,
                {
                  type: "submit",
                  "data-testid": "submitTotp",
                  isLoading: a,
                  disabled: D.length < 6,
                  size: "large",
                  fullsize: !0,
                  sx: { marginTop: "16px" }
                },
                w("webapp_auth_panel_login")
              )
            )
          );
        },
        O = {
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
        C = { display: "flex", flexDirection: "column", gap: "4px", lineHeight: "20px" },
        R = ({ loginEmail: e, error: t, isLoading: a, changeTwoFactorAuthenticationOtpType: s, submitBackupCode: i }) => {
          var c;
          const { translate: d } = (0, _.Z)(),
            { routes: m } = (0, u.Xo)(),
            g = (0, n.useRef)(null),
            {
              setFieldValue: h,
              handleSubmit: E,
              values: { twoFactorAuthenticationOtpValue: f }
            } = (0, o.TA)({
              initialValues: { twoFactorAuthenticationOtpValue: "" },
              onSubmit: ({ twoFactorAuthenticationOtpValue: e }) => {
                i({ twoFactorAuthenticationOtpValue: e }), g.current?.focus();
              }
            });
          return (0, r.tZ)(
            p.L,
            null,
            (0, r.tZ)(p.h4, { text: d("webapp_account_security_settings_two_factor_authentication_backup_code_title") }),
            (0, r.tZ)(p.A3, { selectedEmail: e }),
            (0, r.tZ)(
              "form",
              { onSubmit: E },
              (0, r.tZ)(
                r.nv,
                { color: "ds.text.neutral.quiet", sx: { marginBottom: "16px" } },
                d("webapp_two_factor_authentication_use_backup_codes")
              ),
              (0, r.tZ)(r.qo, {
                value: f,
                label: d("webapp_two_factor_authentication_backup_code_label"),
                onChange: (e) => {
                  const {
                    target: { value: t }
                  } = e;
                  h("twoFactorAuthenticationOtpValue", t);
                },
                error: !!t,
                ref: g,
                feedback: t ? { id: "login-feedback-text", text: d(null != (c = O[t]) ? c : O.UNKNOWN_ERROR) } : void 0,
                autoFocus: !0,
                "data-testid": "auth-backup-code-input"
              }),
              (0, r.tZ)(
                r.nv,
                { color: "ds.text.neutral.quiet", sx: { ...C, margin: "16px 0 8px 0" } },
                d("webapp_two_factor_authentication_cant_access_your_backup_codes"),
                (0, r.tZ)(
                  l.rUS,
                  { color: "ds.text.brand.standard", onClick: () => s({ twoFactorAuthenticationOtpType: "totp" }), target: "_self" },
                  d("webapp_two_factor_authentication_use_6_digits_code")
                )
              ),
              (0, r.tZ)(
                r.nv,
                { color: "ds.text.neutral.quiet", sx: { ...C, margin: "8px 0" } },
                d("webapp_two_factor_authentication_lost_your_backup_codes"),
                (0, r.tZ)(
                  u.OL,
                  { color: "ds.text.brand.standard", to: m.recover2faCodes(e), target: "_blank", rel: "noopener noreferrer" },
                  d("webapp_two_factor_authentication_reset_2fa")
                )
              ),
              (0, r.tZ)(
                r.zx,
                { type: "submit", isLoading: a, "data-testid": "submitBackupCode", fullsize: !0, size: "large", sx: { marginTop: "16px" } },
                d("webapp_auth_panel_login")
              )
            )
          );
        };
      var D = a(482598),
        I = a(133354),
        Z = a(460384),
        P = a(740300),
        L = a(916631),
        M = a(561605),
        U = a(298049),
        V = a(247240),
        B = a(181151),
        F = a(122225),
        z = a(899496),
        G = a(19636);
      const W = ({
        onClose: e,
        masterPassword: t,
        isAccountRecoveryKeyAvailable: a,
        isAdminAssistedRecoveryAvailable: n,
        existingAdminAssistedRecoveryStatus: o
      }) =>
        a && !n
          ? (0, r.tZ)(F.a, { onClose: e })
          : (!a && n) || ("PENDING" === o?.processStatus && o.requestStatus === B.e.APPROVED)
          ? (0, r.tZ)(z.H, { onClose: e, masterPassword: t, existingARStatus: o })
          : a && n
          ? (0, r.tZ)(G.z, { onClose: e })
          : null;
      var j = a(799852),
        q = a(565766),
        K = a(757755),
        H = a(64496),
        $ = a(148038),
        X = a(881391);
      const Y = {
          EMPTY_MASTER_PASSWORD: "webapp_login_form_password_fieldset_security_code_error_empty_password",
          WRONG_PASSWORD: "webapp_login_form_password_fieldset_security_code_error_wrong_password",
          THROTTLED: "webapp_login_form_password_fieldset_error_throttled",
          USER_UNAUTHORIZED: "webapp_login_form_email_fieldset_error_user_unauthorized",
          UNKNOWN_ERROR: "webapp_login_form_password_fieldset_security_code_error_unkown",
          NETWORK_ERROR: "webapp_login_form_password_fieldset_network_error_offline"
        },
        Q = ({
          loginEmail: e,
          localAccounts: t,
          error: a,
          isAccountRecoveryAvailable: l,
          isLoading: u,
          sendMasterPassword: d,
          clearInputError: m,
          logoutHandler: g,
          serviceProviderRedirectUrl: h,
          isNitroProvider: E,
          location: x
        }) => {
          var w;
          const { translate: v } = (0, _.Z)(),
            k = (() => {
              const e = (0, j.k)(q.Y, "isAllowed");
              return {
                status: e.status,
                data:
                  e.status !== I.rq.Success ||
                  e.data.isAllowed ||
                  (!e.data.reasons.includes(K.Oq.RequiresSSO2MPMigration) && !e.data.reasons.includes(K.Oq.RequiresMP2SSOMigration))
                    ? void 0
                    : e.data.reasons
              };
            })(),
            y = (function () {
              const e = (0, $.qr)({ queryConfig: { query: P.C.getSSOMigrationInfo } }, []);
              return e.status === $.rq.Success && e.data.migration === H.vX.MP_TO_SSO_WITH_INFO;
            })(),
            S = (0, V.c)(),
            { loginUserWithEnclaveSSO: T } = (0, D.u)(Z.y),
            A = (0, n.useCallback)(async () => {
              await T({ userEmailAddress: e });
            }, [T, e]),
            [N, O] = (0, n.useState)({ processStatus: "UNSET" }),
            [C, R] = (0, n.useState)(!1),
            [B, F] = (0, n.useState)(!1),
            [z, G] = (0, n.useState)(!1),
            [Q, J] = (0, n.useState)(!1),
            [ee, te] = (0, n.useState)(""),
            { trackPageView: ae } = (0, s.D)();
          (0, n.useEffect)(() => {
            ae({ pageView: i.PageView.LoginMasterPassword });
          }, []);
          const ne = n.useMemo(() => !!t && t.some((t) => !t.hasLoginOtp && t.login === e && "webauthn" !== t.rememberMeType), [e, t]);
          (0, n.useEffect)(() => {
            k.status === I.rq.Success &&
              void 0 !== k.data &&
              h &&
              k.data.includes(K.Oq.RequiresMP2SSOMigration) &&
              (y ? (te((0, X.$9)()), G(!0)) : (te((0, M.C0)(h)), G(!1)));
          }, [k, y, h]),
            (0, n.useEffect)(() => {
              const e = x.search.includes(f.Z6);
              J(e);
            }, [x, x.hash]);
          const {
            handleChange: oe,
            handleSubmit: re,
            values: { masterPassword: se, rememberMe: ie },
            setFieldValue: le
          } = (0, o.TA)({
            initialValues: { masterPassword: "", rememberMe: !1 },
            onSubmit: async ({ masterPassword: e, rememberMe: t }) => {
              if (l) {
                const a = await P.C.checkRecoveryRequestStatus({ masterPassword: e });
                a.success
                  ? (O({ processStatus: "PENDING", requestStatus: a.response.status }), R(!0))
                  : d({ masterPassword: e, rememberMe: t });
              } else d({ masterPassword: e, rememberMe: t });
            }
          });
          return (0, r.tZ)(
            p.L,
            null,
            (0, r.tZ)(p.h4, { text: v("webapp_login_form_heading_log_in") }),
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
                  m(), le("masterPassword", t);
                },
                placeholder: v("webapp_login_form_password_fieldset_password_placeholder"),
                disabled: u,
                label: v("webapp_login_form_password_fieldset_password_label"),
                feedback: a ? { id: "login-feedback-text", text: v(null != (w = Y[a]) ? w : Y.UNKNOWN_ERROR) } : void 0,
                error: !!a,
                toggleVisibilityLabel: { show: v("_common_password_show_label"), hide: v("_common_password_hide_label") },
                autoFocus: !0
              }),
              ne
                ? (0, r.tZ)(r.XZ, {
                    name: "rememberMe",
                    checked: ie,
                    onChange: oe,
                    label: (0, r.tZ)(
                      r.nv,
                      { color: "ds.text.neutral.quiet", textStyle: "ds.title.block.small" },
                      v("webapp_login_form_password_fieldset_remember_me")
                    ),
                    sx: { marginTop: "12px", marginBottom: "12px" }
                  })
                : null,
              ie
                ? (0, r.tZ)(
                    r.nv,
                    { color: "ds.text.neutral.quiet", textStyle: "ds.title.block.small" },
                    v("webapp_login_form_password_fieldset_remember_me_warning_text")
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
                v("webapp_auth_panel_login")
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
                    (e = l),
                      (0, b.Kz)(new i.UserForgetMasterPasswordEvent({ hasBiometricReset: !1, hasTeamAccountRecovery: e })),
                      S || l ? R(!0) : window.open(c.yE, "_blank");
                  },
                  sx: { marginTop: "8px", padding: "14px 16px" }
                },
                v("webapp_login_form_password_fieldset_password_forgot")
              )
            ),
            k.status === I.rq.Success && k.data && k.data.includes(K.Oq.RequiresMP2SSOMigration) && !B
              ? (0, r.tZ)(L.j, {
                  activateLink: ee,
                  onClose: () => {
                    F(!0);
                  },
                  localSsoRedirect: z,
                  isNitroSSO: E,
                  nitroLoginCommand: A
                })
              : null,
            (0, r.tZ)(U.v, {
              isOpen: B,
              onLogout: () => {
                g(), F(!1);
              },
              onDismiss: () => {
                F(!1);
              }
            }),
            C || Q
              ? (0, r.tZ)(W, {
                  onClose: () => {
                    R(!1), J(!1), O({ processStatus: "UNSET" });
                  },
                  masterPassword: se,
                  isAccountRecoveryKeyAvailable: S,
                  isAdminAssistedRecoveryAvailable: l,
                  existingAdminAssistedRecoveryStatus: N
                })
              : null
          );
        };
      var J = a(656810);
      const ee = {
          generic: "_common_generic_error",
          [y._V[y._V.DASHLANE_AUTHENTICATOR_PUSH_NOTIFICATION_DENIED]]: "webapp_dashlane_authenticator_authentication_error_denied",
          [y._V[y._V.TOKEN_EXPIRED]]: "webapp_dashlane_authenticator_authentication_error_timeout"
        },
        te = ({ error: e, resendPushNotification: t, switchToEmailToken: a }) => {
          var o;
          const { translate: c } = (0, _.Z)(),
            [u, d] = (0, n.useState)(!0),
            { trackPageView: m } = (0, s.D)();
          var g;
          return (
            (g = () => {
              d(!1);
            }),
            (0, $.lU)((e) => {
              e === $.ae.KILLED && g();
            }, []),
            (0, n.useEffect)(() => {
              m({ pageView: i.PageView.LoginTokenAuthenticator });
            }, []),
            (0, r.tZ)(
              p.L,
              null,
              (0, r.tZ)(r.X6, { color: "ds.text.neutral.catchy", as: "h2" }, c("webapp_dashlane_authenticator_authentication_title")),
              !e && u
                ? (0, r.tZ)(l.HoD, {
                    "data-testid": "dashlane-authenticator-loading-icon",
                    size: "88px",
                    color: "ds.container.expressive.brand.catchy.active",
                    sx: { margin: "16px 0px" }
                  })
                : (0, r.tZ)(
                    n.Fragment,
                    null,
                    (0, r.tZ)(
                      l.Ejs,
                      { flexDirection: "column", sx: { marginTop: "16px" } },
                      (0, r.tZ)(w.Z, {
                        height: 88,
                        width: 88,
                        animationParams: { renderer: "svg", animationData: J, loop: !1, autoplay: !0 }
                      }),
                      (0, r.tZ)(
                        r.nv,
                        {
                          textStyle: "ds.body.standard.regular",
                          color: "ds.text.danger.quiet",
                          sx: { marginTop: "24px", marginBottom: "8px" }
                        },
                        c(e && null != (o = ee[e]) ? o : ee.generic)
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
                      c("webapp_dashlane_authenticator_authentication_send_another_push_button")
                    )
                  ),
              (0, r.tZ)(
                l.Ejs,
                { flexDirection: "row" },
                (0, r.tZ)(
                  r.nv,
                  { color: "ds.text.neutral.quiet", sx: { paddingRight: "4px" } },
                  c("webapp_dashlane_authenticator_authentication_cant_access_your_app")
                ),
                (0, r.tZ)(
                  l.rUS,
                  {
                    target: "_blank",
                    rel: "noopener noreferrer",
                    onClick: () => {
                      a();
                    },
                    color: "ds.text.brand.standard"
                  },
                  c("webapp_dashlane_authenticator_authentication_send_code_by_email_link")
                )
              )
            )
          );
        };
      var ae = a(714124),
        ne = a(846086);
      const oe = ({
        loginEmail: e,
        error: t,
        retryWebAuthnAuthentication: a,
        switchToMasterPassword: o,
        webAuthnAuthenticationFail: c
      }) => {
        const { translate: u } = (0, _.Z)(),
          { trackPageView: d } = (0, s.D)();
        (0, n.useEffect)(() => {
          d({ pageView: i.PageView.LoginWebauthn });
        }, []);
        const m = (0, n.useRef)(new AbortController()),
          g = async () => {
            if (e) {
              const t = await (async (e, t) => {
                try {
                  const a = (0, ae.Me)();
                  if (!a)
                    return {
                      success: !1,
                      error: new Error("WebAuthn Authentication init Open Session cannot be started as extension Id is missing")
                    };
                  const n = await P.C.initOpenSessionWithWebAuthnAuthenticator({ relyingPartyId: a, login: e });
                  if (!n.success) return { success: !1, error: n.error.code };
                  const { publicKeyOptions: o } = n.response,
                    r = await (0, ne.pM)(o, t),
                    s = n.response.authenticatorsInfo.find((e) => e.credentialId === r.id),
                    i = await P.C.openSessionWithWebAuthnAuthenticator({ credential: r, login: e, isRoamingAuthenticator: s?.isRoaming });
                  return i.success ? i : { success: !1, error: i.error.code };
                } catch (e) {
                  return { success: !1, error: e };
                }
              })(e, m.current.signal);
              !t.success && m.current.signal.aborted ? (m.current = new AbortController()) : t.success || c({ webAuthnError: t.error });
            }
          };
        return (
          (0, n.useEffect)(() => {
            g();
          }, []),
          (0, r.tZ)(
            p.L,
            null,
            (0, r.tZ)(p.h4, { text: u("webapp_login_form_heading_log_in") }),
            (0, r.tZ)(p.A3, { selectedEmail: e }),
            (0, r.tZ)(
              l.Ejs,
              { flexDirection: "column", alignItems: "center", justifyContent: "center" },
              (0, r.tZ)(
                l.k$b,
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
                  l.Ejs,
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
              l.Ejs,
              null,
              (0, r.tZ)(
                r.zx,
                {
                  onClick: () => {
                    m.current && m.current.abort(),
                      (0, b.Kz)(new i.UserAskUseOtherAuthenticationEvent({ next: i.Mode.MasterPassword, previous: i.Mode.Biometric })),
                      o();
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
                        a(), g();
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
      var re = a(563794),
        se = a(134677),
        ie = a(266687);
      const le = {
          EMAIL_PLACEHOLDER: "webapp_login_form_email_fieldset_email_placeholder",
          HEADING: "webapp_login_form_heading_log_in",
          NEXT: "webapp_login_form_email_fieldset_email_confirm",
          SELECTOR_LABEL: "webapp_login_form_email_fieldset_email_description",
          USE_ANOTHER_ACCOUNT: "webapp_login_form_email_fieldset_select_option_other_account",
          CLOSE: "_common_dialog_dismiss_button",
          ...se.v1
        },
        ce = ({
          serviceProviderRedirectUrl: e,
          isNitroProvider: t,
          loginEmail: a,
          sendUsageLog: o,
          changeLogin: l,
          setUseClientBypass: c
        }) => {
          const [u, d] = (0, n.useState)(!1),
            { translate: m } = (0, _.Z)(),
            { trackPageView: g } = (0, s.D)();
          (0, n.useEffect)(() => {
            o && g({ pageView: i.PageView.LoginSso });
          }, []);
          const { loginUserWithEnclaveSSO: h } = (0, D.u)(Z.y),
            E = (0, n.useCallback)(async () => {
              await h({ userEmailAddress: null != a ? a : "" });
            }, [h, a]);
          return (
            (0, n.useEffect)(() => {
              if (e) {
                const n = (0, M.C0)(e);
                t ? E() : (l?.({ login: "" }), c({ type: ie.O.WAITING_IDP_REDIRECTION, login: a }), (0, M.nL)(n));
              }
            }, [t, e, E, c, a, l]),
            (0, r.tZ)(
              n.Fragment,
              null,
              (0, r.tZ)(
                r.Vq,
                {
                  title: "",
                  isOpen: u,
                  actions: {
                    primary: {
                      children: se.v1.DIALOG_CTA,
                      onClick: (e) => {
                        e.preventDefault(), (0, M.nL)(re.JW);
                      }
                    }
                  },
                  onClose: () => d(!1),
                  closeActionLabel: m(le.CLOSE)
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
                (0, r.tZ)(r.X6, { title: se.v1.DIALOG_TITLE, as: "h1" }),
                (0, r.tZ)(r.nv, { sx: { marginBottom: "24px" } }, se.v1.DIALOG_BODY)
              ),
              (0, r.tZ)(
                p.L,
                null,
                (0, r.tZ)(p.h4, { text: m(le.HEADING) }),
                (0, r.tZ)(
                  "div",
                  { sx: { gap: "25px", display: "flex", flexDirection: "column" } },
                  (0, r.tZ)(r.s8, { name: "email", id: "extng-account-email-input", value: a, type: "email", label: "" }),
                  (0, r.tZ)(
                    r.zx,
                    {
                      type: "submit",
                      id: "extng-account-email-next-button",
                      "aria-label": m(le.NEXT),
                      "data-testid": "login-button",
                      fullsize: !0,
                      size: "large",
                      disabled: !0,
                      isLoading: !0
                    },
                    m(le.NEXT)
                  )
                )
              )
            )
          );
        };
      var _e = a(929986),
        ue = a(13403),
        pe = a(210051),
        de = a(421548),
        me = a(169340),
        ge = a(192120);
      const he = (e) => {
        const t = (0, u.Xo)(),
          { translate: a } = (0, _.Z)(),
          { loginViaSSO: o } = (0, D.u)(_e.V),
          r = (0, j.k)(_e.V, "getSsoUserSettings"),
          { login: s, ssoToken: i, key: l, currentAuths: p, expectedAuths: d, inStore: m } = (0, X.Ae)(e);
        p !== d && console.error("[Auth] - SSO Migration is not yet supported with MV3 login");
        const g = (0, ge.f)(),
          h = e.lee.carbon.localAccounts?.find((e) => e.login === s && "sso" === e.rememberMeType),
          E = g.status === I.rq.Success && !g.data && !h && r.status === I.rq.Success && r.data.rememberMeForSSOPreference;
        return (
          h && t.store.dispatch((0, ue.zi)(c.sL)),
          n.useEffect(() => {
            r.status !== I.rq.Loading &&
              g.status !== I.rq.Loading &&
              o({
                deviceName: (0, me.M)(a("webapp_login_form_regsiter_fallback_browser_name")),
                exist: !0,
                ssoServiceProviderKey: l,
                login: (0, pe.vV)(s) ? s : "",
                ssoToken: i,
                currentAuths: p,
                expectedAuths: d,
                inStore: m,
                requiredPermissions: (0, X.ox)(),
                shouldRememberMeForSSO: E
              });
          }, [r.status, g.status]),
          n.createElement(
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
            n.createElement(w.Z, {
              height: 150,
              width: 150,
              animationParams: { renderer: "svg", animationData: de, loop: !0, autoplay: !0 }
            })
          )
        );
      };
      var Ee = a(832718);
      const fe = () => {
        const e = (0, u.k6)(),
          { translate: t } = (0, _.Z)(),
          [a, o] = (0, n.useState)(5);
        return (
          (0, n.useEffect)(() => {
            let e;
            return (
              a > 0 ? (e = setInterval(() => o(a - 1), 1e3)) : window.close(),
              () => {
                clearInterval(e);
              }
            );
          }, [a]),
          (0, r.tZ)(
            Ee.L,
            { backgroundColor: "ds.background.default" },
            (0, r.tZ)(
              l.Ejs,
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
                l.Ejs,
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
                  t("login_auto_sso_success_description", { count: a })
                ),
                (0, r.tZ)(
                  r.zx,
                  {
                    onClick: () => {
                      e.push(c.Kn);
                    }
                  },
                  t("login_auto_sso_success_cta")
                )
              )
            )
          )
        );
      };
      var xe,
        we,
        be,
        ve = a(15192),
        ke = a(764130);
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
        Te = ({ loginEmail: e }) => {
          if (!e) throw new Error("No login email");
          const { translate: t } = (0, _.Z)(),
            [a, o] = (0, n.useState)(!1),
            [s, d] = (0, n.useState)(!1),
            { startRecoveryFlow: m } = (0, D.u)(ke.j);
          return (0, r.tZ)(
            p.L,
            null,
            (0, r.tZ)(p.h4, { text: t("webapp_device_to_device_authentication_instructions_title") }),
            (0, r.tZ)(p.A3, { selectedEmail: e }),
            null,
            (0, r.tZ)(
              l.Ejs,
              { alignItems: "center", flexWrap: "nowrap" },
              xe ||
                (xe = (0, r.tZ)(
                  "div",
                  { sx: ye },
                  (0, r.tZ)(r.nv, { color: "ds.text.brand.standard", textStyle: "ds.body.standard.strong" }, "1")
                )),
              (0, r.tZ)(r.nv, null, t("webapp_device_to_device_authentication_instructions_first_paragraph"))
            ),
            (0, r.tZ)(
              l.Ejs,
              { alignItems: "center", flexWrap: "nowrap" },
              we ||
                (we = (0, r.tZ)(
                  "div",
                  { sx: ye },
                  (0, r.tZ)(r.nv, { color: "ds.text.brand.standard", textStyle: "ds.body.standard.strong" }, "2")
                )),
              (0, r.tZ)(r.nv, null, t.markup("webapp_device_to_device_authentication_instructions_second_paragraph_markup"))
            ),
            (0, r.tZ)(
              l.Ejs,
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
                type: "button",
                intensity: "quiet",
                sx: { marginTop: "8px", width: "100%" },
                onClick: () => {
                  o(!0);
                }
              },
              t("webapp_device_to_device_authentication_instructions_button")
            ),
            (0, r.tZ)(
              r.Vq,
              {
                title: t("webapp_device_to_device_account_recovery_dialog_title"),
                isOpen: a,
                closeActionLabel: Se,
                onClose: () => o(!1),
                actions: {
                  primary: {
                    children: t("webapp_device_to_device_account_recovery_dialog_start_recovery_button"),
                    onClick: () => {
                      m({ login: e }), (0, b.Kz)(new i.UserUseAccountRecoveryKeyEvent({ flowStep: i.FlowStep.Start })), (0, u.uX)(c.g);
                    }
                  },
                  secondary: {
                    children: t("webapp_device_to_device_account_recovery_dialog_lost_your_key_button"),
                    onClick: () => {
                      o(!1), d(!0);
                    }
                  }
                }
              },
              (0, r.tZ)(r.nv, { color: "ds.text.neutral.quiet" }, t("webapp_device_to_device_account_recovery_dialog_description"))
            ),
            (0, r.tZ)(
              r.Vq,
              {
                title: t("webapp_device_to_device_lost_your_key_dialog_title"),
                isOpen: s,
                closeActionLabel: Se,
                onClose: () => d(!1),
                actions: {
                  primary: {
                    children: t("webapp_device_to_device_lost_your_key_dialog_reset_account_button"),
                    onClick: () => {
                      window.open(c.J);
                    }
                  },
                  secondary: {
                    children: t("webapp_device_to_device_lost_your_key_dialog_learn_more_button"),
                    onClick: () => {
                      window.open(c.lM);
                    }
                  }
                }
              },
              (0, r.tZ)(r.nv, { color: "ds.text.neutral.quiet" }, t("webapp_device_to_device_lost_your_key_dialog_description"))
            )
          );
        },
        Ae = ({ loginEmail: e, passphrase: t }) => {
          const { translate: a } = (0, _.Z)(),
            o = (0, u.Xo)();
          return (
            (0, n.useEffect)(() => {
              o.store.dispatch((0, ue.zi)(c.Ml));
            }, []),
            (0, r.tZ)(
              p.L,
              null,
              (0, r.tZ)(p.h4, { text: a("webapp_device_to_device_authentication_passphrase_challenge_title") }),
              (0, r.tZ)(p.A3, { selectedEmail: e }),
              (0, r.tZ)(r.nv, null, a("webapp_device_to_device_authentication_passphrase_challenge_info")),
              (0, r.tZ)(
                l.Ejs,
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
        Ne = {
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
            { changeLogin: a } = (0, D.u)(_e.V);
          return (0, r.tZ)(
            p.L,
            null,
            (0, r.tZ)(p.h4, { text: t(Ne.LOGIN_HEADER) }),
            (0, r.tZ)(
              l.Ejs,
              { flexDirection: "column", alignItems: "center" },
              (0, r.tZ)(r.JO, { name: "FeedbackFailOutlined", color: "ds.text.danger.quiet", sx: { width: "77px", height: "77px" } }),
              (0, r.tZ)(
                r.nv,
                { sx: { textAlign: "center", margin: "32px 0", color: "ds.text.danger.standard" } },
                t(Ne[null != e ? e : "GENERIC_ERROR"])
              ),
              (0, r.tZ)(r.zx, { fullsize: !0, onClick: () => a({}) }, t(Ne.GO_TO_LOGIN)),
              (({ error: e }) => e && H.ao(e) && [H.UY.ACCOUNT_ERROR, H.UY.RATE_LIMIT].includes(e))({ error: e })
                ? (0, r.tZ)(
                    r.zx,
                    { fullsize: !0, mood: "neutral", intensity: "quiet", sx: { marginTop: "8px" }, onClick: () => (0, M.Yo)(re.lh) },
                    t(Ne.CONTACT_SUPPORT)
                  )
                : null
            )
          );
        };
      var Ce;
      const Re = {
          LOGIN_HEADER: "webapp_login_form_heading_log_in",
          LOADING_ACCOUNT: "webapp_device_to_device_authentication_loading_account",
          LOADING_PASSPHRASE: "webapp_device_to_device_authentication_loading_challenge",
          CANCEL_BUTTON: "_common_action_cancel"
        },
        De = ({ step: e }) => {
          const { translate: t } = (0, _.Z)(),
            { changeLogin: a } = (0, D.u)(_e.V);
          return (0, r.tZ)(
            p.L,
            null,
            (0, r.tZ)(p.h4, { text: t(Re.LOGIN_HEADER) }),
            (0, r.tZ)(
              l.Ejs,
              { flexDirection: "column", alignItems: "center" },
              Ce || (Ce = (0, r.tZ)(r.ZX, { mood: "brand", size: 77 })),
              (0, r.tZ)(r.nv, { sx: { textAlign: "center", margin: "32px 0" } }, t(Re[e])),
              "LOADING_ACCOUNT" === e
                ? (0, r.tZ)(
                    r.zx,
                    { fullsize: !0, mood: "neutral", intensity: "quiet", sx: { marginTop: "8px" }, onClick: () => a({}) },
                    t(Re.CANCEL_BUTTON)
                  )
                : null
            )
          );
        };
      var Ie, Ze, Pe;
      const Le = ({ loginEmail: e, passphrase: t, deviceToDeviceStep: a, error: n }) => {
        var o, s, i;
        return (() => {
          switch (a) {
            case H.E6.DisplayInstructions:
              return o || (o = (0, r.tZ)(Te, { loginEmail: e }));
            case H.E6.LoadingPassphrase:
              return Ie || (Ie = (0, r.tZ)(De, { step: "LOADING_PASSPHRASE" }));
            case H.E6.DisplayPassphrase:
              return s || (s = (0, r.tZ)(Ae, { loginEmail: e, passphrase: t }));
            case H.E6.LoadingAccount:
              return Ze || (Ze = (0, r.tZ)(De, { step: "LOADING_ACCOUNT" }));
            case H.E6.DeviceRegistered:
              return Pe || (Pe = (0, r.tZ)(ve.l_, { to: c.Ml }));
            case H.E6.Error:
              return i || (i = (0, r.tZ)(Oe, { error: n }));
            default:
              return null;
          }
        })();
      };
    },
    266687: (e, t, a) => {
      "use strict";
      a.d(t, { O: () => n });
      let n = (function (e) {
        return (e.NONE = "NONE"), (e.ASK_MP = "ASK_MP"), (e.WAITING_IDP_REDIRECTION = "WAITING_IDP_REDIRECTION"), e;
      })({});
    },
    134677: (e, t, a) => {
      "use strict";
      a.d(t, { ko: () => i, v1: () => s });
      var n = a(696832),
        o = a(962899),
        r = a(488203);
      const s = {
          DIALOG_TITLE: "Extension required to log in",
          DIALOG_BODY: "Because you’re using SSO with Dashlane, you need to log in to your account with the extension.",
          DIALOG_CTA: "Add extension"
        },
        i = ({ isOpen: e, handleButtonClick: t, handleClose: a }) => {
          const { translate: i } = (0, r.Z)();
          return n.createElement(
            o.VqE,
            { closeIconName: i("_common_dialog_dismiss_button"), isOpen: e, onClose: a },
            n.createElement(
              "div",
              { style: { marginBottom: "25px" } },
              n.createElement(o.enX, { size: 62, color: o.colors.functionalRed02 })
            ),
            n.createElement(o.$N8, { title: s.DIALOG_TITLE }),
            n.createElement(o.a7O, null, n.createElement(o.nvN, null, s.DIALOG_BODY)),
            n.createElement(o.cNS, { primaryButtonTitle: s.DIALOG_CTA, primaryButtonOnClick: t })
          );
        };
    },
    162864: (e, t, a) => {
      "use strict";
      a.d(t, { w: () => s });
      var n = a(696832),
        o = a(488203),
        r = a(832718);
      const s = () => {
        const { translate: e } = (0, o.Z)();
        return n.createElement(
          r.L,
          null,
          n.createElement(
            "div",
            { className: "marketingContent--qlldYG150Q" },
            n.createElement(
              "div",
              { className: "marketingInner--cLA6qnkW9L" },
              n.createElement("h2", { className: "heading--L55NA6pQ8m" }, e("webapp_sso_to_mp_marketing_heading")),
              n.createElement("h3", { className: "subheading--qf9W636FxS" }, e("webapp_sso_to_mp_marketing_subheading"))
            )
          )
        );
      };
    },
    781826: (e, t, a) => {
      "use strict";
      a.d(t, { R: () => w });
      var n = a(696832),
        o = a(692077),
        r = a(773817),
        s = a(962899),
        i = a(276376),
        l = a(197731),
        c = a(488203),
        _ = a(740300),
        u = a(321501),
        p = a(30432),
        d = a(850857),
        m = a(501346);
      var g,
        h,
        E,
        f = (function (e) {
          return (e.PASSWORDS_DONT_MATCH_ERROR = "passwords_dont_match"), (e.WEAK_PASSWORD_ERROR = "weak_password"), e;
        })(f || {});
      const x = {
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
        w = ({ dispatchGlobal: e, onSubmit: t, createMPForAccountRecovery: a, showCreateMasterPasswordError: w }) => {
          const { translate: b } = (0, c.Z)(),
            { routes: v } = (0, i.Xo)(),
            [k, y] = n.useState(!1),
            [S, T] = n.useState(""),
            [A, N] = n.useState(null),
            [O, C] = n.useState(!0),
            [R, D] = n.useState(""),
            [I, Z] = n.useState(null),
            {
              passwordStrength: P,
              resetPasswordStrength: L,
              setPasswordStrength: M,
              isPasswordStrengthScore: U,
              isPasswordStrongEnough: V
            } = (0, p.R)(),
            [B, F] = n.useState(!1),
            z = (e, t) => {
              if (e) return e === f.WEAK_PASSWORD_ERROR ? t(x.ERROR_WEAK_PASSWORD) : t(x.ERROR_PASSWORDS_DONT_MATCH);
            },
            G = () => !S || !R || !(R === S) || !V || B;
          return (0, r.tZ)(
            "div",
            { className: "createPasswordPanelContainer--MUmAusgsY8" },
            (0, r.tZ)(d.x, {
              showPasswordTipsDialog: k,
              handleDismiss: () => {
                y(!1);
              }
            }),
            (0, r.tZ)(
              "div",
              { className: "content--bb7jRK6yl9" },
              (0, r.tZ)(m.r, { dispatchGlobal: e }),
              (0, r.tZ)(
                "div",
                { className: "inner--wckgqnqGbN" },
                (0, r.tZ)(s.X6q, { sx: { marginBottom: "16px" } }, b(x.CREATE_PASSWORD_HEADER)),
                (0, r.tZ)(
                  s.Ejs,
                  { sx: { marginBottom: "40px" } },
                  g || (g = (0, r.tZ)(s.byK, null)),
                  (0, r.tZ)(
                    s.rUS,
                    {
                      sx: { marginLeft: "5px" },
                      onClick: () => {
                        y(!0);
                      }
                    },
                    (0, r.tZ)(s.nvN, { bold: !0, color: s.colors.midGreen00 }, b(x.NEED_HELP))
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
                        G() || (S === R ? (F(!0), a ? await t(S) : await t({ password: S }), F(!1)) : Z(f.PASSWORDS_DONT_MATCH_ERROR));
                    }
                  },
                  (0, r.tZ)(
                    "div",
                    { className: "createPasswordContainer--egmbogdCZ1" },
                    (0, r.tZ)(
                      l.T,
                      { id: "password-tooltip", passwordStrength: P, showTooltip: O },
                      (0, r.tZ)(s.WUg, {
                        showPasswordTooltipText: b(x.CREATE_PASSWORD_SHOW_LABEL),
                        hidePasswordTooltipText: b(x.CREATE_PASSWORD_HIDE_LABEL),
                        onBlur: () => {
                          const e = S && R && S !== R;
                          N(!S || V ? null : f.WEAK_PASSWORD_ERROR), C(!1), Z(e ? f.PASSWORDS_DONT_MATCH_ERROR : null);
                        },
                        onFocus: () => {
                          C(!0);
                        },
                        onChange: async (e) => {
                          const t = e.target.value;
                          T(t), A && N(null), I && Z(null), "" === t && L();
                          const a = await _.C.evaluatePassword({ password: t });
                          M(a);
                        },
                        placeholder: b(x.CREATE_PASSWORD_HINT_TEXT),
                        value: S,
                        label: b(x.CREATE_PASSWORD_FLOATING_LABEL),
                        feedbackType: A ? "error" : void 0,
                        feedbackText: A ? z(A, b) : ""
                      })
                    ),
                    P &&
                      U(P.score) &&
                      (0, r.tZ)(s.YVT, { score: P.score, showAdditionalText: !0, additionalText: b(`account_creation_${u.Yh[P.score]}`) })
                  ),
                  (0, r.tZ)(s.WUg, {
                    value: R,
                    showPasswordTooltipText: b(x.CONFIRM_PASSWORD_SHOW_LABEL),
                    hidePasswordTooltipText: b(x.CONFIRM_PASSWORD_HIDE_LABEL),
                    placeholder: b(x.CONFIRM_PASSWORD_HINT_TEXT),
                    onBlur: () => {
                      R && S !== R && Z(f.PASSWORDS_DONT_MATCH_ERROR);
                    },
                    onChange: (e) => {
                      D(e.target.value), Z(null);
                    },
                    label: b(x.CONFIRM_PASSWORD_FLOATING_LABEL),
                    feedbackType: I ? "error" : void 0,
                    feedbackText: I ? z(I, b) : ""
                  }),
                  (0, r.tZ)(
                    s.Ejs,
                    { className: "formAction--lsGvbpUphT" },
                    a
                      ? (0, r.tZ)(
                          o.rU,
                          { className: "previousStepContainer--guBERAFCZo", to: v.userDeviceRegistration, replace: !0 },
                          h || (h = (0, r.tZ)(s.xCe, { size: 14 })),
                          (0, r.tZ)(s.nvN, { sx: { paddingLeft: "10px" } }, b(x.PREVIOUS_STEP))
                        )
                      : null,
                    (0, r.tZ)(
                      s.zxk,
                      { type: "submit", size: "large", disabled: G(), className: "nextButton--TLnzBk_x48" },
                      B ? E || (E = (0, r.tZ)(s.HoD, null)) : b(x.CREATE_PASSWORD_BUTTON)
                    )
                  ),
                  w && x[w] ? (0, r.tZ)("div", { className: "errorText--UN7VI6QP62" }, x[w]) : null
                )
              )
            )
          );
        };
    },
    850857: (e, t, a) => {
      "use strict";
      a.d(t, { x: () => l });
      var n,
        o = a(696832),
        r = a(962899),
        s = a(488203),
        i = a(990028);
      const l = ({ showPasswordTipsDialog: e, handleDismiss: t }) => {
        const { translate: a } = (0, s.Z)();
        return o.createElement(
          r.VqE,
          { closeIconName: a("_common_dialog_dismiss_button"), isOpen: e, onClose: t },
          o.createElement(r.X6q, { size: "small" }, a("webapp_account_security_settings_passwordtips_panel_subtitle")),
          n || (n = o.createElement(r.a7O, null, o.createElement(i.t, null))),
          o.createElement(r.cNS, { primaryButtonTitle: a("webapp_password_tips_dialog_got_it"), primaryButtonOnClick: t })
        );
      };
    },
    169340: (e, t, a) => {
      "use strict";
      a.d(t, { M: () => r, i: () => s });
      var n = a(263272),
        o = a(528509);
      const r = (e) => `${n.getBrowserName() || e} - ${o.getOSName()}`,
        s = (e) => {
          let t;
          return (t = e instanceof Error ? e.message : String(e)), t;
        };
    },
    729274: (e, t, a) => {
      "use strict";
      a.d(t, { N: () => n.N });
      var n = a(805008);
    },
    929514: (e, t, a) => {
      "use strict";
      a.d(t, { Z: () => n });
      const n = { icon: "icon--zE_DwR7GSR" };
    },
    610320: (e, t, a) => {
      var n = a(696832);
      function o(e) {
        return n.createElement("svg", e, [
          n.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M1.5 14.5V8H0v8h16V8h-1.5v6.5h-13Z",
            fill: "#fff",
            key: 0
          }),
          n.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M8 11.06 4.47 7.53l1.06-1.06 1.72 1.72V0h1.5v8.19l1.72-1.72 1.06 1.06L8 11.06Z",
            fill: "#fff",
            key: 1
          })
        ]);
      }
      (o.defaultProps = { width: "16", height: "16", fill: "none" }), (e.exports = o), (o.default = o);
    },
    689273: (e, t, a) => {
      const { LANGUAGES: n } = a(376868);
      e.exports = { i18n: { locales: n, defaultLocale: "en", defaultCountry: "US" } };
    },
    812272: (e, t, a) => {
      var n = { "./INNER_LOOP_animation.json": 51102, "./INTRO_animation.json": 733695, "./OUTRO_animation.json": 856419 };
      function o(e) {
        return r(e).then((e) => a.t(e, 19));
      }
      function r(e) {
        return a.e(6461).then(() => {
          if (!a.o(n, e)) {
            var t = new Error("Cannot find module '" + e + "'");
            throw ((t.code = "MODULE_NOT_FOUND"), t);
          }
          return n[e];
        });
      }
      (o.keys = () => Object.keys(n)), (o.resolve = r), (o.id = 812272), (e.exports = o);
    },
    263272: (e, t, a) => {
      "use strict";
      a.r(t),
        a.d(t, {
          getBrowserCountry: () => c,
          getBrowserLanguage: () => l,
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
      var n,
        o = a(196471),
        r = a(264785);
      function s() {
        return (0, r.r)().browser.name ?? "";
      }
      function i() {
        return (0, r.r)().browser.version ?? "";
      }
      function l() {
        const e = (0, o.getNavigator)();
        return e?.language ?? "";
      }
      function c() {
        const e = (0, o.getNavigator)(),
          t = e?.language ?? "";
        let a = "";
        return t.length >= 5 && (a = t.substr(3, 2)), a;
      }
      function _() {
        return s() === n.CHROME;
      }
      function u() {
        return s() === n.FIREFOX;
      }
      function p() {
        return s() === n.EDGE;
      }
      function d() {
        return s() === n.SAFARI;
      }
      function m() {
        return s() === n.OPERA;
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
      })(n || (n = {}));
    },
    110551: (e, t, a) => {
      "use strict";
      a.r(t),
        a.d(t, {
          getDefaultDeviceName: () => i,
          getDeviceType: () => l,
          isDeviceConsole: () => _,
          isDeviceEmbedded: () => m,
          isDeviceMobile: () => c,
          isDeviceSmartTV: () => p,
          isDeviceTablet: () => u,
          isDeviceWearable: () => d
        });
      var n,
        o = a(263272),
        r = a(528509),
        s = a(264785);
      function i() {
        return `${(0, o.getBrowserName)()} - ${(0, r.getOSName)()}`;
      }
      !(function (e) {
        (e.MOBILE = "mobile"),
          (e.CONSOLE = "console"),
          (e.TABLET = "tablet"),
          (e.SMARTTV = "smarttv"),
          (e.WEARABLE = "wearable"),
          (e.EMBEDDED = "embedded");
      })(n || (n = {}));
      const l = () => (0, s.r)().device.type,
        c = () => l() === n.MOBILE,
        _ = () => l() === n.CONSOLE,
        u = () => l() === n.TABLET,
        p = () => l() === n.SMARTTV,
        d = () => l() === n.WEARABLE,
        m = () => l() === n.EMBEDDED;
    },
    33493: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { isBrowserEnvironment: () => o, isNodeEnvironment: () => s, isWorkerEnvironment: () => r });
      var n = a(173656);
      function o() {
        return "object" == typeof window;
      }
      function r() {
        return "object" == typeof self && "function" == typeof importScripts;
      }
      function s() {
        return "object" == typeof n && !o() && !r();
      }
    },
    196471: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { getNavigator: () => o });
      var n = a(33493);
      function o() {
        return (0, n.isBrowserEnvironment)() ? window.navigator : (0, n.isWorkerEnvironment)() ? self.navigator : void 0;
      }
    },
    650038: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { getUserAgent: () => o });
      var n = a(196471);
      function o() {
        const e = (0, n.getNavigator)();
        return e?.userAgent;
      }
    },
    303810: (e, t, a) => {
      "use strict";
      function n() {
        return window.location !== window.parent.location;
      }
      a.r(t), a.d(t, { isInsideIframe: () => n });
    },
    926625: (e, t, a) => {
      "use strict";
      a.r(t),
        a.d(t, {
          browser: () => s,
          cookie: () => n,
          device: () => _,
          env: () => u,
          iframe: () => p,
          navigator: () => d,
          os: () => m,
          storage: () => o,
          url: () => r,
          userAgent: () => O
        });
      var n = {};
      a.r(n), a.d(n, { desktopAnonymousComputerId: () => l, websiteTrackingId: () => c });
      var o = {};
      a.r(o), a.d(o, { makeBrowserStorage: () => T });
      var r = {};
      a.r(r), a.d(r, { getAuthorityForUrl: () => N, getDomainForUrl: () => A });
      var s = a(263272),
        i = a(975077);
      function l() {
        return i.Q(document.cookie).anonid;
      }
      function c() {
        try {
          const e = i.Q(document.cookie);
          return JSON.parse(e.userFunnelCookie).trackingId;
        } catch (e) {
          return null;
        }
      }
      var _ = a(110551),
        u = a(33493),
        p = a(303810),
        d = a(196471),
        m = a(528509);
      const g = 1,
        h = "dashlane",
        E = "user-data";
      function f() {
        return new Promise((e, t) => {
          const a = (0, u.isBrowserEnvironment)() ? window.indexedDB : (0, u.isWorkerEnvironment)() ? self.indexedDB : null;
          if (!a) return t(new Error("indexedDB is not supported in this environment"));
          const n = a.open(h, g);
          (n.onerror = function () {
            t(n.error);
          }),
            (n.onupgradeneeded = () => {
              n.result.objectStoreNames.contains(E) || n.result.createObjectStore(E);
            }),
            (n.onsuccess = function () {
              (n.onsuccess = null), e(n.result);
            });
        });
      }
      async function x(e = "readwrite") {
        return (await f()).transaction([E], e).objectStore(E);
      }
      async function w(e) {
        const t = await x("readonly");
        return new Promise((a) => {
          const n = t.get(e);
          n.onsuccess = () => {
            (n.onsuccess = null), a(n.result);
          };
        });
      }
      const b = {
          isSupported: async function () {
            if (!(0, u.isBrowserEnvironment)() && !(0, u.isWorkerEnvironment)()) return !1;
            if (s.isInternetExplorer()) return !1;
            if ((0, u.isBrowserEnvironment)() && !window.indexedDB) return !1;
            if ((0, u.isWorkerEnvironment)() && !self.indexedDB) return !1;
            try {
              return await f(), !0;
            } catch (e) {
              return !1;
            }
          },
          readItem: w,
          writeItem: async function (e, t) {
            const a = await x("readwrite");
            return new Promise((n) => {
              const o = a.put(t, e);
              o.onsuccess = () => {
                (o.onsuccess = null), n();
              };
            });
          },
          removeItem: async function (e) {
            const t = await x("readwrite");
            return new Promise((a) => {
              const n = t.delete(e);
              n.onsuccess = () => {
                (n.onsuccess = null), a();
              };
            });
          },
          itemExists: async function (e) {
            return null != (await w(e));
          }
        },
        v = b,
        k = {
          isSupported: () => Promise.resolve(void 0 !== typeof window && !!window.localStorage),
          readItem: (e) => Promise.resolve(window.localStorage.getItem(e)),
          writeItem: (e, t) => Promise.resolve(window.localStorage.setItem(e, t)),
          removeItem: (e) => Promise.resolve(window.localStorage.removeItem(e)),
          itemExists: (e) => {
            const t = window.localStorage.getItem(e);
            return Promise.resolve(null != t);
          }
        },
        y = {},
        S = {
          isSupported: () => Promise.resolve(!0),
          readItem: (e) => {
            const t = e in y;
            return Promise.resolve(t ? y[e] : null);
          },
          writeItem: (e, t) => ((y[e] = t), Promise.resolve()),
          removeItem: (e) => (delete y[e], Promise.resolve()),
          itemExists: (e) => Promise.resolve(e in y)
        },
        T = async () => {
          try {
            if (await v.isSupported()) return v;
            if (await k.isSupported()) return k;
          } catch (e) {}
          return S;
        },
        A = (e) => {
          if (!e) return null;
          const t = e.trim(),
            a = ["http://", "https://", "ftp://", "ftps://", "file://", "afp://", "smb://"].filter((e) => t.startsWith(e))[0],
            n = a ? t.substr(a.length) : t,
            o = n.indexOf("/"),
            r = o > -1 ? n.slice(0, o) : n,
            s = r.split(""),
            i = s.filter((e) => "." === e),
            l = s.filter((e) => ":" === e),
            c = s.filter((e) => !Number.isNaN(Number(e)));
          if (3 === i.length && (c.length === r.length - 3 || (c.length === r.length - 4 && 1 === l.length))) return r;
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
          const a = ["afp://", "file://", "ftp://", "ftps://", "http://", "https://", "smb://"].find((e) => t.startsWith(e)),
            n = a ? t.substr(a.length) : t,
            o = n.indexOf("/");
          return o > -1 ? n.slice(0, o) : n;
        };
      var O = a(650038);
    },
    528509: (e, t, a) => {
      "use strict";
      a.r(t),
        a.d(t, {
          getOSName: () => r,
          getOSVersion: () => s,
          isAndroid: () => i,
          isIOS: () => l,
          isLinux: () => u,
          isMacOS: () => _,
          isWindows: () => c
        });
      var n,
        o = a(264785);
      function r() {
        return "Chromium OS" === (0, o.r)().os.name ? "Chrome OS" : (0, o.r)().os.name;
      }
      function s() {
        const { version: e = "" } = (0, o.r)().os;
        return "Mac OS" === r() ? `OS_X_${e.replace(/\./g, "_")}` : e;
      }
      !(function (e) {
        (e.ANDROID = "Android"), (e.IOS = "iOS"), (e.WINDOWS = "Windows"), (e.LINUX = "Linux"), (e.MACOS = "Mac OS");
      })(n || (n = {}));
      const i = () => r() === n.ANDROID,
        l = () => r() === n.IOS,
        c = () => r() === n.WINDOWS,
        _ = () => r() === n.MACOS,
        u = () => r() === n.LINUX;
    },
    264785: (e, t, a) => {
      "use strict";
      a.d(t, { r: () => s });
      var n = a(108473),
        o = a.n(n),
        r = a(650038);
      function s() {
        return new (o())((0, r.getUserAgent)(), {
          browser: [
            [/(AVG|Avast)\/([\w.]+)/i],
            [[o().BROWSER.NAME, "Avast"], o().BROWSER.VERSION],
            [/(edge|edgios|edga|edg)\/((\d+)?[\w.]+)/i],
            [[o().BROWSER.NAME, "Edge"], o().BROWSER.VERSION]
          ]
        }).getResult();
      }
    },
    516241: (e, t, a) => {
      "use strict";
      a.d(t, { B: () => o });
      var n = a(100839);
      function o(e, t) {
        return new Promise((a, o) => {
          (0, n.Ez)("action.setIcon") || (0, n.Ez)("browserAction.setIcon")
            ? (chrome.action?.setIcon ?? chrome.browserAction.setIcon)({ path: e, tabId: t }, () => {
                if (chrome.runtime.lastError) {
                  const e = chrome.runtime.lastError.message ?? "Unknown chrome.runtime.lastError",
                    t = new Error(`action/setIcon: ${e}`);
                  o(t);
                } else a();
              })
            : o(new Error("No action.setIcon support"));
        });
      }
    },
    531034: (e, t, a) => {
      "use strict";
      a.d(t, { U: () => o });
      var n = a(100839);
      const o = (e, t) => {
        if (!(0, n.qX)(["alarms"])) throw new Error("No alarms.create support, permission is missing");
        if (!(0, n.Ez)("alarms.create")) throw new Error("No alarms.create support");
        chrome.alarms.create(e, t);
      };
    },
    665496: (e, t, a) => {
      "use strict";
      a.d(t, { G: () => o });
      var n = a(100839);
      function o() {
        return (0, n.Ez)("alarms.clear") && (0, n.qX)(["alarms"]);
      }
    },
    418477: (e, t, a) => {
      "use strict";
      a.d(t, { i: () => o });
      var n = a(100839);
      const o = {
        addListener: (e) => {
          if (!(0, n.qX)(["alarms"])) throw new Error("No alarms.onAlarm.addListener support, permission is missing");
          if (!(0, n.Ez)("alarms.onAlarm.addListener")) throw new Error("No alarms.onAlarm.addListener support");
          chrome.alarms.onAlarm.addListener(e);
          const t = chrome.runtime.lastError?.message;
          if (t) throw new Error("alarms/onAlarm error:" + t);
        },
        removeListener: (e) => {
          if (!(0, n.qX)(["alarms"])) throw new Error("No alarms.onAlarm.removeListener support, permission is missing");
          if (!(0, n.Ez)("alarms.onAlarm.removeListener")) throw new Error("No alarms.onAlarm.removeListener support");
          chrome.alarms.onAlarm.removeListener(e);
          const t = chrome.runtime.lastError?.message;
          if (t) throw new Error("alarms/onAlarm error:" + t);
        }
      };
    },
    690123: (e, t, a) => {
      "use strict";
      a.d(t, { g: () => o });
      var n = a(100839);
      function o() {
        return new Promise((e, t) => {
          (0, n.Ez)("commands.getAll")
            ? chrome.commands.getAll((a) => {
                if (chrome.runtime.lastError) {
                  const e = chrome.runtime.lastError.message ?? "Unknown chrome.runtime.lastError",
                    a = new Error(`commands/getAll: ${e}`);
                  t(a);
                } else e(a);
              })
            : t(new Error("No commands.getAll support"));
        });
      }
    },
    329: (e, t, a) => {
      "use strict";
      a.d(t, { g: () => o });
      var n = a(100839);
      function o(e = {}) {
        return new Promise((t, a) => {
          (0, n.qX)(["cookies"])
            ? (0, n.Ez)("cookies.getAll")
              ? chrome.cookies.getAll(e, (e) => {
                  if (chrome.runtime.lastError) {
                    const e = chrome.runtime.lastError.message ?? "Unknown chrome.runtime.lastError",
                      t = new Error(`cookies/getAll: ${e}`);
                    a(t);
                  } else t(e);
                })
              : a(new Error("No cookies.getAll support"))
            : a(new Error("No cookies.getAll support, permission is missing"));
        });
      }
    },
    598641: (e, t, a) => {
      "use strict";
      a.d(t, { O: () => o });
      var n = a(100839);
      function o(e) {
        return new Promise((t, a) => {
          (0, n.qX)(["cookies"])
            ? (0, n.Ez)("cookies.remove")
              ? chrome.cookies.remove(e, (e) => {
                  if (chrome.runtime.lastError) {
                    const e = chrome.runtime.lastError.message ?? "Unknown chrome.runtime.lastError",
                      t = new Error(`cookies/remove: ${e}`);
                    a(t);
                  } else t(e);
                })
              : a(new Error("No cookies.remove support"))
            : a(new Error("No cookies.remove support, permission is missing"));
        });
      }
    },
    100839: (e, t, a) => {
      "use strict";
      a.d(t, { Ez: () => r, qX: () => o });
      var n = a(384318);
      function o(e) {
        const t = (0, n.W)().permissions ?? [];
        return e.every((e) => t.includes(e));
      }
      function r(e) {
        if ("undefined" == typeof chrome) return !1;
        const t = e.split(".").reduce((e, t) => e?.[t], chrome);
        return Boolean(t);
      }
    },
    782324: (e, t, a) => {
      "use strict";
      a.d(t, { I: () => o, b: () => r });
      var n = a(274972);
      function o(e) {
        return !("object" != typeof e || !e) && !!("reason" in e) && e.reason === n.$.RuntimeError;
      }
      function r(e) {
        return !("object" != typeof e || !e) && !!("reason" in e) && e.reason === n.$.SettingNotSupported;
      }
    },
    930754: (e, t, a) => {
      "use strict";
      a.d(t, { U: () => s });
      var n = a(100839),
        o = a(274972);
      const r = { reason: o.$.SettingNotSupported };
      function s(e) {
        return new Promise((t, a) => {
          (0, n.qX)(["privacy"]) && (0, n.Ez)(`privacy.services.${e}.get`)
            ? chrome.privacy.services[e].get({}, (e) => {
                if (chrome.runtime.lastError) {
                  const e = chrome.runtime.lastError.message ?? "Unknown chrome.runtime.lastError",
                    t = { reason: o.$.RuntimeError, runtimeError: new Error(e) };
                  a(t);
                } else t(e);
              })
            : a(r);
        });
      }
    },
    274972: (e, t, a) => {
      "use strict";
      var n;
      a.d(t, { $: () => n }),
        (function (e) {
          (e.RuntimeError = "runtimeError"), (e.SettingNotSupported = "settingNotSupported");
        })(n || (n = {}));
    },
    781805: (e, t, a) => {
      "use strict";
      a.d(t, { t: () => s });
      var n = a(100839),
        o = a(274972);
      const r = { reason: o.$.SettingNotSupported };
      function s(e, t) {
        return new Promise((a, s) => {
          (0, n.qX)(["privacy"]) && (0, n.Ez)(`privacy.services.${e}.set`)
            ? chrome.privacy.services[e].set({ value: t }, () => {
                if (chrome.runtime.lastError) {
                  const e = chrome.runtime.lastError.message ?? "Unknown chrome.runtime.lastError",
                    t = { reason: o.$.RuntimeError, runtimeError: new Error(e) };
                  s(t);
                } else a();
              })
            : s(r);
        });
      }
    },
    505441: (e, t, a) => {
      "use strict";
      a.d(t, { $: () => o });
      var n = a(100839);
      function o(e) {
        if (!(0, n.Ez)("runtime.connect")) throw new Error("No runtime.connect support");
        return chrome.runtime.connect(e);
      }
    },
    648593: (e, t, a) => {
      "use strict";
      function n() {
        return chrome.runtime.id;
      }
      a.d(t, { z: () => n });
    },
    384318: (e, t, a) => {
      "use strict";
      a.d(t, { W: () => o });
      var n = a(100839);
      function o() {
        if (!(0, n.Ez)("runtime.getManifest")) throw new Error("No runtime.getManifest support");
        return chrome.runtime.getManifest();
      }
    },
    92204: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => o });
      var n = a(100839);
      function o(e) {
        if (!(0, n.Ez)("runtime.getURL")) throw new Error("No runtime.getURL support");
        return chrome.runtime.getURL(e);
      }
    },
    20500: (e, t, a) => {
      "use strict";
      a.d(t, { b: () => o });
      var n = a(100839);
      const o = {
        addListener: function (e) {
          if (!(0, n.Ez)("runtime.onConnect.addListener")) throw new Error("No runtime.onConnect.addListener support");
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
          if (!(0, n.Ez)("runtime.onConnect.removeListener")) throw new Error("No runtime.onConnect.removeListener support");
          chrome.runtime.onConnect.removeListener(e);
        }
      };
    },
    939680: (e, t, a) => {
      "use strict";
      a.d(t, { G: () => o, y: () => r });
      var n = a(100839);
      function o() {
        return !!chrome.storage?.local.getBytesInUse;
      }
      function r(e) {
        return new Promise((t, a) => {
          (0, n.qX)(["storage"])
            ? (0, n.Ez)("storage.local.getBytesInUse")
              ? chrome.storage.local.getBytesInUse(e, (e) => {
                  if (chrome.runtime.lastError) {
                    const e = chrome.runtime.lastError.message ?? "Unknown chrome.runtime.lastError",
                      t = new Error(`storage/local/getBytesInUse: ${e}`);
                    a(t);
                  } else t(e);
                })
              : a(new Error("No storage.local.getBytesInUse support"))
            : a(new Error("No storage.local.getBytesInUse support, permission is missing"));
        });
      }
    },
    641808: (e, t, a) => {
      "use strict";
      a.d(t, { U: () => o });
      var n = a(100839);
      function o(e) {
        return new Promise((t, a) => {
          (0, n.qX)(["storage"])
            ? (0, n.Ez)("storage.local.get")
              ? chrome.storage.local.get(e, (e) => {
                  if (chrome.runtime.lastError) {
                    const e = chrome.runtime.lastError.message ?? "Unknown chrome.runtime.lastError",
                      t = new Error(`storage/local/get: ${e}`);
                    a(t);
                  } else t(e);
                })
              : a(new Error("No storage.local.get support"))
            : a(new Error("No storage.local.get support, permission is missing"));
        });
      }
    },
    945441: (e, t, a) => {
      "use strict";
      a.d(t, { O: () => o });
      var n = a(100839);
      function o(e) {
        return new Promise((t, a) => {
          (0, n.qX)(["storage"])
            ? (0, n.Ez)("storage.local.remove")
              ? chrome.storage.local.remove(e, () => {
                  if (chrome.runtime.lastError) {
                    const e = chrome.runtime.lastError.message ?? "Unknown chrome.runtime.lastError",
                      t = new Error(`storage/local/remove: ${e}`);
                    a(t);
                  } else t();
                })
              : a(new Error("No storage.local.remove support"))
            : a(new Error("No storage.local.remove support, permission is missing"));
        });
      }
    },
    9244: (e, t, a) => {
      "use strict";
      a.d(t, { t: () => o });
      var n = a(100839);
      function o(e) {
        return new Promise((t, a) => {
          (0, n.qX)(["storage"])
            ? (0, n.Ez)("storage.local.set")
              ? chrome.storage.local.set(e, () => {
                  if (chrome.runtime.lastError) {
                    const e = chrome.runtime.lastError.message ?? "Unknown chrome.runtime.lastError",
                      t = new Error(`storage/local/set: ${e}`);
                    a(t);
                  } else t();
                })
              : a(new Error("No storage.local.set support"))
            : a(new Error("No storage.local.set support, permission is missing"));
        });
      }
    },
    15026: (e, t, a) => {
      "use strict";
      a.d(t, { U: () => o });
      var n = a(100839);
      function o(e) {
        return new Promise((t, a) => {
          (0, n.qX)(["storage"])
            ? (0, n.Ez)("storage.session.get")
              ? chrome.storage.session.get(e, (e) => {
                  if (chrome.runtime.lastError) {
                    const e = chrome.runtime.lastError.message ?? "Unknown chrome.runtime.lastError",
                      t = new Error(`storage/session/get: ${e}`);
                    a(t);
                  }
                  t(e);
                })
              : a(new Error("No storage.session.get support"))
            : a(new Error("No storage.session.get support, permission is missing"));
        });
      }
    },
    732012: (e, t, a) => {
      "use strict";
      a.d(t, { G: () => r });
      var n = a(100839),
        o = a(384318);
      function r() {
        return (0, n.Ez)("storage.session") && (0, n.qX)(["storage"]) && 3 === (0, o.W)().manifest_version;
      }
    },
    826603: (e, t, a) => {
      "use strict";
      a.d(t, { r: () => o });
      var n = a(100839);
      const o = {
        addListener: function (e) {
          if (!(0, n.qX)(["storage"])) throw new Error("No storage.session.onChanged.addListener support, permission is missing");
          if (!(0, n.Ez)("storage.session.onChanged.addListener")) throw new Error("No storage.session.onChanged.addListener support");
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
          if (!(0, n.qX)(["storage"])) throw new Error("No storage.session.onChanged.removeListener support, permission is missing");
          if (!(0, n.Ez)("storage.session.onChanged.removeListener"))
            throw new Error("No storage.session.onChanged.removeListener support");
          chrome.storage.session.onChanged.removeListener(e);
        }
      };
    },
    252477: (e, t, a) => {
      "use strict";
      a.d(t, { O: () => o });
      var n = a(100839);
      function o(e) {
        return new Promise((t, a) => {
          (0, n.qX)(["storage"])
            ? (0, n.Ez)("storage.session.remove")
              ? chrome.storage.session.remove(e, () => {
                  if (chrome.runtime.lastError) {
                    const e = chrome.runtime.lastError.message ?? "Unknown chrome.runtime.lastError",
                      t = new Error(`storage/session/remove: ${e}`);
                    a(t);
                  }
                  t();
                })
              : a(new Error("No storage.session.remove support"))
            : a(new Error("No storage.session.remove support, permission is missing"));
        });
      }
    },
    56847: (e, t, a) => {
      "use strict";
      a.d(t, { t: () => o });
      var n = a(100839);
      function o(e) {
        return new Promise((t, a) => {
          (0, n.qX)(["storage"])
            ? (0, n.Ez)("storage.session.set")
              ? chrome.storage.session.set(e, () => {
                  if (chrome.runtime.lastError) {
                    const e = chrome.runtime.lastError.message ?? "Unknown chrome.runtime.lastError",
                      t = new Error(`storage/session/set: ${e}`);
                    a(t);
                  }
                  t();
                })
              : a(new Error("No storage.session.set support"))
            : a(new Error("No storage.session.set support, permission is missing"));
        });
      }
    },
    215904: (e, t, a) => {
      "use strict";
      function n() {
        return chrome.tabs.TAB_ID_NONE;
      }
      a.d(t, { a: () => n });
    },
    724715: (e, t, a) => {
      "use strict";
      a.d(t, { U: () => o });
      var n = a(100839);
      function o(e) {
        return new Promise((t, a) => {
          (0, n.Ez)("tabs.create")
            ? chrome.tabs.create(e, (e) => {
                if (chrome.runtime.lastError) {
                  const e = chrome.runtime.lastError.message ?? "Unknown chrome.runtime.lastError",
                    t = new Error(`tabs/create: ${e}`);
                  a(t);
                } else t(e);
              })
            : a(new Error("No tabs.create support"));
        });
      }
    },
    237335: (e, t, a) => {
      "use strict";
      a.d(t, { T: () => o });
      var n = a(100839);
      function o() {
        return new Promise((e, t) => {
          (0, n.Ez)("tabs.getCurrent")
            ? chrome.tabs.getCurrent((a) => {
                if (chrome.runtime.lastError) {
                  const e = chrome.runtime.lastError.message ?? "Unknown chrome.runtime.lastError",
                    a = new Error(`tabs/get-current: ${e}`);
                  t(a);
                } else e(a);
              })
            : t(new Error("No tabs.getCurrent support"));
        });
      }
    },
    661222: (e, t, a) => {
      "use strict";
      a.d(t, { I: () => o });
      var n = a(100839);
      function o(e) {
        return new Promise((t, a) => {
          (0, n.qX)(["tabs"])
            ? (0, n.Ez)("tabs.query")
              ? chrome.tabs.query(e, (e) => {
                  if (chrome.runtime.lastError) {
                    const e = chrome.runtime.lastError.message ?? "Unknown chrome.runtime.lastError",
                      t = new Error(`tabs/query: ${e}`);
                    a(t);
                  } else t(e);
                })
              : a(new Error("No tabs.query support"))
            : a(new Error("No tabs.query support, permission is missing"));
        });
      }
    },
    549259: (e, t, a) => {
      "use strict";
      a.d(t, { O: () => o });
      var n = a(100839);
      function o(e) {
        return new Promise((t, a) => {
          (0, n.Ez)("tabs.remove")
            ? chrome.tabs.remove(e, () => {
                if (chrome.runtime.lastError) {
                  const e = chrome.runtime.lastError.message ?? "Unknown chrome.runtime.lastError",
                    t = new Error(`tabs/remove: ${e}`);
                  a(t);
                } else t();
              })
            : a(new Error("No tabs.remove support"));
        });
      }
    },
    731460: (e, t, a) => {
      "use strict";
      a.d(t, { V: () => o });
      var n = a(100839);
      function o(e, t) {
        return new Promise((a, o) => {
          (0, n.Ez)("tabs.update")
            ? chrome.tabs.update(e, t, (e) => {
                if (chrome.runtime.lastError) {
                  const e = chrome.runtime.lastError.message ?? "Unknown chrome.runtime.lastError",
                    t = new Error(`tabs/update: ${e}`);
                  o(t);
                } else a(e);
              })
            : o(new Error("No tabs.update support"));
        });
      }
    },
    772733: (e, t, a) => {
      "use strict";
      a.d(t, { T: () => o });
      var n = a(100839);
      function o(e) {
        return new Promise((t, a) => {
          if (!(0, n.Ez)("windows.getCurrent")) return void a(new Error("No windows.getCurrent support"));
          const o = (e) => {
            if (chrome.runtime.lastError) {
              const e = chrome.runtime.lastError.message ?? "Unknown chrome.runtime.lastError",
                t = new Error(`windows/getCurrent: ${e}`);
              a(t);
            } else t(e);
          };
          e ? chrome.windows.getCurrent(e, o) : chrome.windows.getCurrent(o);
        });
      }
    },
    457306: (e, t, a) => {
      "use strict";
      a.d(t, { V: () => o });
      var n = a(100839);
      function o(e, t) {
        return new Promise((a, o) => {
          (0, n.Ez)("windows.update")
            ? chrome.windows.update(e, t, (e) => {
                if (chrome.runtime.lastError) {
                  const e = chrome.runtime.lastError.message ?? "Unknown chrome.runtime.lastError",
                    t = new Error(`windows/update: ${e}`);
                  o(t);
                } else a(e);
              })
            : o(new Error("No windows.update support"));
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
