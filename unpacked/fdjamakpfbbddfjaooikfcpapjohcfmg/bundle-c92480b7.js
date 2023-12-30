"use strict";
(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [5496],
  {
    187319: (e, t, a) => {
      a.d(t, { Z: () => o });
      var n = a(696832),
        s = a(692077),
        i = a(454107);
      function o({ path: e }) {
        return n.createElement(
          s.GB,
          { exact: !0, path: [e, `${e}/create`, `${e}/create/confirm`] },
          n.createElement(
            s.rs,
            null,
            n.createElement(s.l_, { exact: !0, from: `${e}/`, to: `${e}/create` }),
            n.createElement(i.Z, { path: `${e}/create`, options: { flowIndicator: "memberAccount" } })
          )
        );
      }
    },
    990028: (e, t, a) => {
      a.d(t, { t: () => o });
      var n = a(696832),
        s = a(488203);
      const i = ({ title: e, description: t, example: a }) =>
          n.createElement(
            "section",
            null,
            n.createElement("h3", { className: "tipTitle--E1xwuwFYGQ" }, e),
            n.createElement("div", { className: "tipDescription--F8jzGudxgL" }, t),
            a ? n.createElement("p", { className: "tipExample--OSKD8mHhgv" }, a) : null
          ),
        o = () => {
          const { translate: e } = (0, s.Z)();
          return n.createElement(
            n.Fragment,
            null,
            n.createElement(i, {
              title: e("webapp_account_security_settings_passwordtips_general_rules_title"),
              description: n.createElement(
                "ul",
                null,
                n.createElement("li", null, e("webapp_account_security_settings_passwordtips_general_rules_description_1")),
                n.createElement("li", null, e("webapp_account_security_settings_passwordtips_general_rules_description_2")),
                n.createElement("li", null, e("webapp_account_security_settings_passwordtips_general_rules_description_3"))
              )
            }),
            n.createElement(i, {
              title: e("webapp_account_security_settings_passwordtips_story_method_title"),
              description: e("webapp_account_security_settings_passwordtips_story_method_description"),
              example: e("webapp_account_security_settings_passwordtips_story_method_example")
            }),
            n.createElement(i, {
              title: e("webapp_account_security_settings_passwordtips_series_words_title"),
              description: e("webapp_account_security_settings_passwordtips_series_words_description"),
              example: e("webapp_account_security_settings_passwordtips_series_words_example")
            }),
            n.createElement(i, {
              title: e("webapp_account_security_settings_passwordtips_letters_numbers_title"),
              description: e("webapp_account_security_settings_passwordtips_letters_numbers_description"),
              example: e("webapp_account_security_settings_passwordtips_letters_numbers_example")
            })
          );
        };
    },
    535412: (e, t, a) => {
      var n = a(404394),
        s = a(459522),
        i = a(429705),
        o = a(696832),
        r = a(140431),
        l = a(182510),
        c = a(245094),
        d = a(133392),
        u = a(560791),
        _ = a(176014),
        m = a(397769),
        p = (a(886730), a(241901)),
        g = a(197446),
        y = a(403092),
        h = a(140),
        b = a.n(h);
      const x = (0, a(435681).Z)("STATE_IN_URL", {}),
        S = (e, t) => {
          if (t.length > 0) {
            const a = t[0];
            return a in e || (e[a] = {}), S(e[a], t.slice(1));
          }
          return e;
        },
        v = x.registerAction("RESTORE_DATA", (e, t) => {
          const a = {};
          return (
            Object.keys(t).forEach((e) => {
              const n = e.split(".");
              S(a, n.slice(0, n.length - 1))[n[n.length - 1]] = t[e];
            }),
            b()({}, e, a)
          );
        }),
        { apply: f } = x,
        C = f,
        Z = function (e, t) {
          const a = (0, y.parse)(e);
          return Object.keys(t)
            .filter((e) => e in a)
            .map((e) => ({ urlValue: a[e], userValue: t[e] }))
            .map(({ urlValue: e, userValue: t }) => ("string" == typeof t ? { [t]: e } : t(e) || {}))
            .reduce(
              (e, t) => (
                Object.keys(t).forEach((t) => {
                  if (t in e) throw new Error("Some URL options conflict");
                }),
                Object.assign(e, t)
              ),
              {}
            );
        };
      var E = a(692077),
        D = a(373880),
        T = a(158649),
        N = a(554452),
        M = a(335396),
        I = a(249808),
        w = a(730583),
        k = a(182422),
        A = a(74929),
        O = a(75743),
        L = a(447614),
        z = a(158296),
        j = a(326021),
        R = a(780300),
        P = a(300572),
        U = a(303198),
        B = a(712369),
        G = a(500358),
        F = a(309937),
        q = a(144134),
        $ = a(158432),
        V = a(524179);
      let W;
      function H() {
        return (
          W ||
            (W = (function (e) {
              const t = [];
              i.bq && t.push((0, V.createLogger)({ timestamp: !1, collapsed: !0, diff: !0 }));
              const a = (0, k.compose)((0, k.applyMiddleware)(...t), (window.devToolsExtension, (e) => e))(k.createStore)(
                (function (e) {
                  const t = (0, $.RC)(e);
                  return function (e, a) {
                    return (
                      (e = (0, k.combineReducers)({
                        initialSyncProgress: q.Z.apply,
                        notifications: O.Z.apply,
                        carbon: A.ZP.apply,
                        directorySyncKey: G.ZP.apply,
                        cursor: (e = {}) => e,
                        locale: z.ZP.apply,
                        logs: L.Z.apply,
                        user: j.ZP.apply,
                        webapp: P.ZP.apply,
                        dialog: U.Z.apply,
                        afterLogin: B.Z.apply,
                        ieNotifications: F.Z.apply
                      })(e, a)),
                      (e = t(e, a)),
                      (e = (0, R.Z)(e, a)),
                      C(e, a)
                    );
                  };
                })(e)
              );
              return a;
            })(w.Z)),
          W
        );
      }
      var K,
        Y = a(160399);
      const Q = a(851285),
        X = document.getElementById("app"),
        J = window.location.host,
        ee = null != (K = X?.getAttribute("data-base")) ? K : "",
        te = (X?.getAttribute("data-build-type"), (0, p.q_)({ basename: "/", hashType: "slash" }));
      let ae;
      (0, E.JB)(te);
      const ne = "graphene-background-port";
      async function se(e, t) {
        const a = await (async function (e) {
            return (
              await (async function (e) {
                await (function (e) {
                  return Promise.all([(0, c.ZP)({ store: e, storage: localStorage, whiteList: ["locale/language", "locale/country"] })]);
                })(e),
                  (0, l.Z)(e),
                  (0, u.CA)(e),
                  (function (e, t, a, n) {
                    const s = Object.assign(Z("", n), Z(t, n));
                    Object.keys(s).length > 0 && a.dispatch(v(s));
                  })(0, (0, E.NW)(), e, {
                    login: (e) =>
                      "dummy" === e
                        ? { "user.session.login": "dummy-login@example.com", "user.session.uki": "dummy-uki", "user.password": null }
                        : { "user.session.login": e },
                    password: "user.session.password",
                    showBillingAdmin: "cursor.app.team.account.billing.admin._.showConfirm",
                    uki: "user.session.uki"
                  });
              })(e),
              await (0, m.yd)(e),
              new I.G(ne)
            );
          })(e),
          { client: n } = (0, D.X)({ appDefinition: M.R, channels: { background: new T.N(a) }, channelsListener: N.y }),
          s = n["carbon-legacy"].queries.carbonState({ path: "userSession.sync.status" });
        return await (0, Y.z)(s), n;
      }
      var ie = a(303810),
        oe = a(589789);
      ((e, t) => {
        if (ie.isInsideIframe()) throw new Error("Leeloo should not be run in an iframe");
        a(928058), a(853049), a(794383), (0, i.ZP)();
        const n = (0, oe.r9)(e);
        (async (e, t) => {
          const a = H();
          !(function (e, t) {
            e.addEventListener("error", (e) => {
              e.preventDefault(),
                "ResizeObserver loop limit exceeded" !== e.message ? t.dispatch((0, g.Z)(e.message, e.error)) : e.stopPropagation();
            }),
              (e.onunhandledrejection = (e) => {
                e.preventDefault && e.preventDefault();
                const a = e.reason,
                  n =
                    a instanceof Error
                      ? a
                      : new Error('Promise rejection reason is not an error, but is "' + JSON.stringify(a) + '" instead');
                t.dispatch((0, g.Z)(`Unhandled promise rejection: ${n}`, n));
              });
          })(window, a);
          const n = await (0, d.eG)(a);
          if ((ae || ((ae = await se(a)), (0, _.Q)(ae)), !ae)) throw new Error();
          Q.render(
            o.createElement(r.Z, { host: J, basePath: ee, history: te, store: a, translate: n, namedRoutes: t, routes: e, coreClient: ae }),
            X
          );
        })(t(n, e), n),
          (() => {
            const e = document.querySelectorAll("link.light-scheme-favicon"),
              t = document.querySelectorAll("link.dark-scheme-favicon"),
              a = window.matchMedia("(prefers-color-scheme: dark)");
            function n() {
              a.matches
                ? (e.forEach((e) => e.remove()), t.forEach((e) => document.head.append(e)))
                : (t.forEach((e) => e.remove()), e.forEach((e) => document.head.append(e)));
            }
            a.addEventListener ? a.addEventListener("change", n) : a.addListener(n), n();
          })();
      })(s.vX.CLIENT, n.t);
    },
    429705: (e, t, a) => {
      a.d(t, { ZP: () => o, bq: () => i, sY: () => s });
      var n = a(403092);
      let s = !1,
        i = !1;
      function o() {
        const e = "kw_verbose";
        "verbose" in (0, n.parseLocationParams)(window.location) && sessionStorage.setItem(e, "true");
        const t = "true" === sessionStorage.getItem(e);
        t && console.info("~~~ Logs activated ~~~"), (s = t), (i = t), (window.KW_LOG = s);
      }
    },
    916631: (e, t, a) => {
      a.d(t, { j: () => _ });
      var n = a(696832),
        s = a(962899),
        i = a(561605),
        o = a(692077),
        r = a(488203),
        l = a(119471);
      const c = "activateSSOText--uGZ1mGdPI0";
      var d, u;
      const _ = ({ activateLink: e, onClose: t, localSsoRedirect: a, isNitroSSO: _, nitroLoginCommand: m }) => {
        const { translate: p } = (0, r.Z)(),
          [g, y] = n.useState(!0);
        return n.createElement(
          s.VqE,
          {
            closeIconName: p("_common_dialog_dismiss_button"),
            isOpen: g,
            onClose: () => {
              y(!1), t();
            },
            disableOutsideClickClose: !0
          },
          n.createElement(
            "div",
            { className: "dialogContainer--R1vvi6YG8s" },
            n.createElement(
              s.$N8,
              null,
              d || (d = n.createElement(s.HeP, { size: 90 })),
              n.createElement("h2", { className: "activateSSOTitle--TSG6RZuM4T" }, p("activate_sso_popup_title"))
            ),
            n.createElement(
              s.a7O,
              null,
              n.createElement("p", { className: c }, p("activate_sso_popup_body")),
              n.createElement("p", { className: c }, p("activate_sso_popup_body_secondary"))
            ),
            n.createElement(s.cNS, {
              primaryButtonOnClick: async () => {
                if (a) return (0, o.uX)(e);
                _ ? m() : (0, i.nL)(e);
              },
              primaryButtonTitle: p("activate_sso_popup_primary_button"),
              secondaryButtonOnClick: () => (0, i.Yo)(l.n0),
              secondaryButtonTitle: n.createElement(
                n.Fragment,
                null,
                u || (u = n.createElement(s.RTC, { size: 20 })),
                n.createElement("p", { className: "activateSSOTextWithIcon--p3VZNI9NKb" }, p("activate_sso_popup_secondary_button"))
              )
            })
          )
        );
      };
    },
    328107: (e, t, a) => {
      a.d(t, { S: () => H });
      var n = a(696832),
        s = a(103128),
        i = (a(532779), a(148038)),
        o = a(828298),
        r = a(784995),
        l = a(929986),
        c = a(799852),
        d = a(192120),
        u = a(421548),
        _ = a(72133),
        m = a(548122),
        p = a(13403),
        g = a(488203),
        y = a(740300),
        h = a(561605),
        b = a(210051),
        x = a(692077),
        S = a(459522),
        v = a(169340),
        f = a(119471),
        C = a(127521),
        Z = a(881391);
      let E = (function (e) {
        return (
          (e.ASK_FOR_MP = "ASK_FOR_MP"),
          (e.ACCOUNT_CREATION = "ACCOUNT_CREATION"),
          (e.D_SPINNER = "D_SPINNER"),
          (e.CHANGE_MP_PROGRESS = "CHANGE_MP_PROGRESS"),
          e
        );
      })({});
      var D = a(162864),
        T = a(781826);
      var N;
      const M = ({ dispatchGlobal: e, onSubmit: t }) =>
        n.createElement(
          "div",
          { className: "panelsContainer--jB02U43E37" },
          N || (N = n.createElement(D.w, null)),
          n.createElement(T.R, { dispatchGlobal: e, onSubmit: t })
        );
      var I = a(962899);
      const w = ({ animation: e, shouldLoopAnimation: t = !1, progressValue: a = 0 }) => {
        const { translate: s } = (0, g.Z)();
        return n.createElement(
          n.Fragment,
          null,
          n.createElement(
            "div",
            { className: "logo--zwQR6n8P2E" },
            n.createElement(I.D1W, { color: I.vei.DashGreen, size: I.r1z.Size39, title: s("_common_dashlane_logo_title") })
          ),
          n.createElement(
            "div",
            { className: "progressContainer--uN3zEbYKRy" },
            n.createElement(
              "div",
              { className: "content--g692RTJxEb" },
              n.createElement(_.Z, {
                height: 96,
                width: 96,
                animationParams: { renderer: "svg", animationData: e, loop: t, autoplay: !0 }
              }),
              n.createElement("p", { className: "progressValue--EWZwTNi5yM" }, s("_common_generic_percentage", { number: a })),
              n.createElement("h2", { className: "description--urcB98N4_F" }, s("webapp_sso_changemp_loading_desc")),
              n.createElement("p", { className: "subDescription--dtFN1rQZIb" }, s("webapp_sso_changemp_loading_warning"))
            )
          )
        );
      };
      var k = a(876307),
        A = a(966136),
        O = a(383849),
        L = a.n(O),
        z = a(89368),
        j = a(928136),
        R = a(599203),
        P = a(411538);
      const U = "disclaimerCheckboxWrapper--H9bH4mWFEN",
        B = "visible--tgv48_Tn6M",
        G = "disclaimerCheckbox--I9w4KoQzGz";
      var F;
      const q = ({ error: e, isEu: t, memberEmail: a, onSubmit: s }) => {
          const i = null === t,
            o = n.useCallback(() => Boolean(!!i || t), [t, i]),
            { translate: r } = (0, g.Z)(),
            [l, c] = (0, n.useState)(!o()),
            [d, u] = (0, n.useState)(!1),
            [_, m] = (0, n.useState)(!1),
            p = n.createRef();
          (0, n.useEffect)(() => {
            c(!o());
          }, [c, o]);
          const y = o()
            ? r("member_account_creation_info_tips_and_offers_label")
            : r("member_account_creation_i_want_to_receive_spam_and_ads");
          return n.createElement(
            "div",
            { className: "inner--PRBfrJ8ztr" },
            n.createElement(
              "h1",
              { className: L()("heading--xkXNXFnweh _headingBase--w98gFdP6ar", "acceptHeading--bN5eLgP37u") },
              r("member_account_creation_accept_content_heading")
            ),
            i
              ? F || (F = n.createElement(P.Z, { size: 40 }))
              : n.createElement(
                  "form",
                  { className: "form--mbE1UdEyiO" },
                  n.createElement(z.n, {
                    isDisabled: !0,
                    placeholder: r("member_account_creation_email_hint_text"),
                    labelText: r("member_account_creation_email_floating_label"),
                    ref: p,
                    defaultValue: a
                  }),
                  e ? n.createElement("div", { className: "errorText--kkUVthMMSK" }, e) : null,
                  n.createElement(
                    "div",
                    { className: L()(U, B, "consentCheckbox--OxdBTmWrRI") },
                    n.createElement(j.Z, {
                      label: y,
                      labelClass: G,
                      name: "emailsTipsAndOffers",
                      onCheck: () => {
                        c(!l);
                      },
                      checked: l
                    })
                  ),
                  o() &&
                    n.createElement(
                      "div",
                      { className: L()(U, B) },
                      n.createElement(j.Z, {
                        label: n.createElement(n.Fragment, null, r.markup("account_creation_confirm_terms_of_service_markup")),
                        labelClass: G,
                        name: "termsAndConditions",
                        onCheck: () => {
                          u(!d);
                        },
                        checked: d
                      })
                    ),
                  n.createElement(
                    "div",
                    { className: "formAction--_jE50Dey_6" },
                    n.createElement(R.Z, {
                      size: "large",
                      label: r("member_account_creation_accept_next"),
                      disabled: Boolean(o() && !d),
                      onClick: () => {
                        const e = { privacyPolicyAndToS: d, subscribed: l, isEu: o(), setIsLoading: m };
                        s(e);
                      },
                      loading: _,
                      classNames: ["nextButton--v8loMwl8E9"]
                    })
                  ),
                  o()
                    ? null
                    : n.createElement(
                        "p",
                        { className: "disclaimer--HdF8Agopgb" },
                        r.markup("member_account_creation_accept_tos_markup", {}, { linkTarget: "_blank" })
                      )
                )
          );
        },
        $ = (e) => {
          const { ...t } = e,
            a = { standardHeader: "standardHeader--mQMlxYDQNk", logoContainer: "logoContainer--U1og3U_Xxu", logo: "logo--I6WuRV58HI" },
            n = (0, k.tZ)("div", { onClick: () => (0, x.uX)(S.SF) });
          return (0, k.tZ)(
            "div",
            { className: "wrapper--wU7M482wCS" },
            (0, k.tZ)(A.A, { classes: a, logoComponent: n }),
            (0, k.tZ)("div", { className: "content--HXxzOJoWsC" }, (0, k.tZ)(q, { ...t }))
          );
        },
        V = "webapp_login_form_regsiter_fallback_browser_name",
        W = (e) => {
          const t = (0, x.Xo)(),
            { login: a, ssoToken: s, key: D, exists: T, currentAuths: N, expectedAuths: I, inStore: k } = (0, Z.Ae)(e),
            { lee: A } = e,
            O = "true" === T,
            [L, z] = (0, n.useState)(O ? E.D_SPINNER : E.ACCOUNT_CREATION),
            { translate: j } = (0, g.Z)(),
            [R, P] = (0, n.useState)(""),
            [U, B] = (0, n.useState)(0),
            G = (0, d.f)(),
            F = (0, c.k)(l.V, "getSsoUserSettings"),
            q = (0, b.vV)(a) ? a : "",
            W = (0, i.K_)({ live: y.C.liveChangeMasterPasswordStatus }, []);
          (0, n.useEffect)(() => {
            k || (q.length && D.length && s.length) || (0, x.uX)(S.TT);
          }, [k, q, D, s]),
            (0, n.useEffect)(() => {
              O &&
                F.status === i.rq.Success &&
                G.status === i.rq.Success &&
                (async () => {
                  N === o.hr.MP && I === o.hr.SSO && z(E.CHANGE_MP_PROGRESS);
                  const n = e.lee.carbon.localAccounts?.find((e) => e.login === a && "sso" === e.rememberMeType),
                    r = (F.status === i.rq.Success && F.data.rememberMeForSSOPreference) || "true" === localStorage.getItem(m.MG),
                    l = !n && r && G.status === i.rq.Success && !G.data,
                    c = {
                      deviceName: (0, v.M)(j(V)),
                      exist: !0,
                      ssoServiceProviderKey: D,
                      login: q,
                      ssoToken: s,
                      currentAuths: N,
                      expectedAuths: I,
                      inStore: k,
                      requiredPermissions: (0, Z.ox)(),
                      shouldRememberMeForSSO: l
                    };
                  n && t.store.dispatch((0, p.zi)(S.sL)),
                    (await y.C.loginViaSSO(c)).success ? I === o.hr.MP && z(E.ASK_FOR_MP) : (0, x.uX)(S.TT);
                })();
            }, [O, F.status, G.status]),
            (0, n.useEffect)(() => {
              if (W.status !== i.iD.Received || !W.data) return;
              const { value: e } = W.data;
              B(e);
            }, [W]);
          const H = async ({ password: e }) => {
              const t = { newPassword: e, flow: r.pT.SSO_TO_MP };
              await (async (e) => {
                if ((z(E.CHANGE_MP_PROGRESS), !(await y.C.changeMasterPassword(e)).success)) return (0, x.uX)(S.TT);
              })(t);
            },
            K = async ({ isEu: e, privacyPolicyAndToS: t, setIsLoading: a, subscribed: n }) => {
              var i;
              if (e && !t) {
                const e = new Error("termsOfService set to false on accept submit");
                A.reportError(e), (0, x.uX)(S.rM);
              }
              a(!0);
              const r = [];
              if (e) {
                const e = { consentType: "privacyPolicyAndToS", status: t };
                r.push(e);
              }
              const l = { consentType: "emailsOffersAndTips", status: n };
              r.push(l);
              const c = {
                consents: r,
                deviceName: (0, v.M)(j(V)),
                exist: !1,
                ssoServiceProviderKey: D,
                login: q,
                ssoToken: s,
                currentAuths: N,
                expectedAuths: I,
                inStore: !1,
                requiredPermissions: (0, Z.ox)(),
                anonymousUserId: (0, C.n5)(A.globalState),
                shouldRememberMeForSSO: "true" === localStorage.getItem(m.MG)
              };
              localStorage.removeItem(m.MG);
              const d = await y.C.loginViaSSO(c);
              if ((a(!1), d.success)) {
                P("");
                let e = f.BJ;
                (e = `${f.Mv}?email=${q}`), (0, h.nL)(e);
              } else {
                const e = q.slice(q.indexOf("@") + 1);
                d.error.code === o.E6.SSO_VERIFICATION_FAILED
                  ? P(j("webapp_sso_page_create_account_error", { domain: e }))
                  : P(null != (i = d.error.message) ? i : "");
              }
            },
            { isEu: Y } = A.carbon.currentLocation;
          switch (L) {
            case E.ACCOUNT_CREATION:
              return n.createElement($, { isEu: Y, onSubmit: K, memberEmail: q, error: R });
            case E.ASK_FOR_MP:
              return n.createElement(M, { onSubmit: H, dispatchGlobal: A.dispatchGlobal });
            case E.CHANGE_MP_PROGRESS:
              return n.createElement(w, { animation: u, shouldLoopAnimation: !0, progressValue: U });
            case E.D_SPINNER:
            default:
              return n.createElement(
                "div",
                { className: "loadingContainer--z9wx9Wo1ko" },
                n.createElement(_.Z, {
                  height: 150,
                  width: 150,
                  animationParams: { renderer: "svg", animationData: u, loop: !0, autoplay: !0 }
                })
              );
          }
        },
        H = (e) => {
          const { loading: t } = (0, s.G)();
          return t ? null : n.createElement(W, { ...e });
        };
    },
    881391: (e, t, a) => {
      a.d(t, { $9: () => o, Ae: () => i, ox: () => r });
      var n = a(342868),
        s = a(828298);
      const i = (e) => {
          const {
              location: { search: t }
            } = e,
            a = { login: "", ssoToken: "", key: "", exists: "", currentAuths: s.hr.SSO, expectedAuths: s.hr.SSO, inStore: !1 };
          try {
            if (t?.includes("ssoToken")) return { ...a, ...(0, n.parse)(t) };
          } catch (e) {
            return a;
          }
          return a;
        },
        o = () =>
          `/sso?${(0, n.stringify)({
            ssoToken: "inStore",
            key: "inStore",
            currentAuths: s.hr.MP,
            expectedAuths: s.hr.SSO,
            exists: !0,
            inStore: !0
          })}`,
        r = () => (window.location.host.startsWith("console") ? "BILLING" : null);
    },
    435681: (e, t, a) => {
      function n(e, t) {
        const a = {};
        return {
          apply: function (e = t, n) {
            return a[n.type] ? a[n.type](e, n.params) : e;
          },
          registerAction: function (t, n) {
            const s = `${e}/${t}`;
            return (
              (a[s] = n),
              function (e) {
                return { type: s, params: e };
              }
            );
          }
        };
      }
      a.d(t, { Z: () => n });
    },
    204523: (e, t, a) => {
      a.d(t, { C: () => c });
      var n = a(803843),
        s = a(148038),
        i = a(740300),
        o = a(264997),
        r = a(965454),
        l = a(696832);
      const c = ({ b2c: e, handleCardUpdate: t, pollInterval: a = 2e3, timeoutAmount: c = 6e5 }) => {
        const [d, u] = (0, l.useState)(!1),
          [_, m] = (0, l.useState)({}),
          p = (0, o.Z)(),
          g = p.status !== s.rq.Success || !p.data,
          y = p?.status === s.rq.Success && p.data ? p.data[e ? "b2cSubscription" : "b2bSubscription"]?.billingInformation : void 0,
          h = !(!y?.exp_year || !y?.exp_month) && (0, n.Z)(new Date(y.exp_year, y.exp_month, 0)),
          b = y?.last4 ? Number(y.last4).toLocaleString("en-US", { minimumIntegerDigits: 4, useGrouping: !1 }) : void 0,
          x = y?.type ? (0, r.v)(y.type) : void 0,
          S = y?.exp_year,
          v = y?.exp_month,
          f = S && v ? `${v}/${S.toString().substring(2)}` : "",
          [C, Z] = (0, l.useState)(),
          E = (0, l.useCallback)(() => {
            d && u(!1), C && clearTimeout(C);
          }, [d, C]);
        return (
          (0, l.useEffect)(() => E, []),
          (0, l.useEffect)(() => {
            if (d) {
              const e = setInterval(() => {
                i.C.refreshSubscriptionInformation();
              }, a);
              if (!C) {
                const e = window.setTimeout(E, c);
                Z(e);
              }
              return () => clearInterval(e);
            }
          }, [a, d, E, c, C]),
          (0, l.useEffect)(() => {
            if (d && _ && (_.last4DigitsFormatted !== b || _.expFormatted !== f) && (E(), t)) {
              const e = !_.last4DigitsFormatted;
              t(e);
            }
          }, [d, b, f, _, _.expFormatted, _.last4DigitsFormatted, E, t]),
          {
            loading: g,
            billingInformation: y,
            hasCreditCardPaymentMethod: y && !!y.last4,
            last4Digits: y?.last4,
            last4DigitsFormatted: b,
            cardSvg: x,
            isExpired: h,
            expYear: y?.exp_year,
            expMonth: y?.exp_month,
            expFormatted: f,
            pollUntilCardUpdate: () => {
              u(!0), m({ last4DigitsFormatted: b, expFormatted: f });
            }
          }
        );
      };
    },
    183086: (e, t, a) => {
      a.d(t, { Z: () => n });
      const n = (0, a(158432).SP)("master-password-reset-requests", {});
    },
    337466: (e, t, a) => {
      a.d(t, { a: () => o });
      var n = a(773817),
        s = a(962899),
        i = a(411538);
      const o = ({ scopedToPage: e = !1 }) =>
        (0, n.tZ)(
          s.Ejs,
          {
            justifyContent: "center",
            alignItems: "center",
            sx: {
              backgroundColor: "rgba(245, 247, 247, 0.7)",
              ...(e ? {} : { position: "absolute", top: 0, left: 0, right: 0, height: "100%" })
            }
          },
          (0, n.tZ)(i.Z, { containerStyle: { marginTop: "-90px", ...(e ? { position: "relative", height: "90vh" } : {}) } })
        );
    },
    500358: (e, t, a) => {
      a.d(t, { HK: () => p, M2: () => u, Qz: () => d, ZP: () => y, b3: () => _, er: () => g, vg: () => m });
      var n = a(526849);
      const s = (0, a(435681).Z)("directory-sync-key", { displayDialog: !1, checkDirectorySyncKeyRequest: null, validationPostponed: !1 });
      function i(e) {
        return { ...e, displayDialog: !1 };
      }
      function o(e) {
        return { ...e, displayDialog: !0 };
      }
      function r(e) {
        return { ...e, validationPostponed: !1 };
      }
      function l(e, t) {
        return { ...e, checkDirectorySyncKeyRequest: t };
      }
      function c(e) {
        return l(e, null);
      }
      const d = s.registerAction("CHECK_DIRECTORY_SYNC_KEY_REQUEST", (e, t) => {
          if (!t) return e;
          const a = l(e, t);
          return e.validationPostponed ? a : o(a);
        }),
        u = s.registerAction(
          "KEY_VALIDATION_POSTPONED",
          (0, n.pipe)(i, function (e) {
            return { ...e, validationPostponed: !0 };
          })
        ),
        _ = s.registerAction("REOPEN_DIALOG", (0, n.pipe)(o, r)),
        m = s.registerAction("CLOSE_NOTIFICATION", r),
        p =
          (s.registerAction("KEY_VALIDATED", (0, n.pipe)(i, r, c)),
          s.registerAction("KEY_REJECTED", (0, n.pipe)(i, r, c)),
          s.registerAction("HIDE_DIALOG", i)),
        g = s.registerAction("TERMINATE_REQUEST", (0, n.pipe)(r, c)),
        y = s;
    },
    316172: (e, t, a) => {
      a.d(t, { LD: () => C, DX: () => v, Bf: () => E, p_: () => f, tb: () => T });
      var n = a(696832),
        s = a(148038),
        i = a(470180),
        o = a(799852),
        r = a(482598),
        l = a(133354),
        c = a(57904);
      const d = (e) => {
        const { data: t, status: a } = (0, o.k)(c.h, "hasSeenNotification", { notification: e }),
          { markNotificationAsSeen: n } = (0, r.u)(c.h);
        return {
          status: a,
          hasSeenNotification: a === l.rq.Success ? t : null,
          markNotificationAsSeen: () => {
            n({ notification: e });
          }
        };
      };
      var u = a(876307),
        _ = a(506295),
        m = a(361607),
        p = a(379846),
        g = a(488203),
        y = a(692077),
        h = a(718108);
      const b = (e, t = !1) => {
        const a = (0, y.k6)(),
          i = (0, y.Xo)(),
          { translate: o } = (0, g.Z)(),
          { showToast: r, closeToast: c } = (0, u.pm)(),
          d = (0, m._)(),
          b = d.status !== l.rq.Success,
          { onboarding_web_tacgetstarted: x = !1 } = b ? {} : d.data,
          { interacted: S, status: v } = (0, p.d)(_.O.TacGetStartedDismissPage),
          { isTeamAdmin: f, status: C } = (() => {
            const [e, t] = (0, n.useState)(null),
              a = (0, h.E)();
            if (a.status === s.rq.Success) {
              var i;
              const n = null != (i = a.data.some((e) => e.isTeamAdmin)) && i;
              n !== e && t(n);
            }
            return { status: a.status, isTeamAdmin: e };
          })(),
          Z = C === l.rq.Success && v === l.rq.Success && !b;
        return {
          showNotification: (0, n.useCallback)(() => {
            Z &&
              f &&
              !S &&
              x &&
              r({
                isManualDismiss: !0,
                description: o.markup(e),
                closeActionLabel: o("team_get_started_notification_close_label"),
                action: t
                  ? {
                      label: o("team_get_started_notification_action_go_to_get_started"),
                      onClick: (e) => {
                        c(e), a.push(i.routes.teamGetStartedRoutePath);
                      }
                    }
                  : void 0
              });
          }, [Z, f, S, x]),
          hasDataLoaded: Z
        };
      };
      var x = a(672153),
        S = a(29267);
      const v = () => {
          const e = x.G.CHECK_PASSWORD_HEALTH,
            { showNotification: t, hasDataLoaded: a } = b("team_get_started_notification_content_check_password_health_markup", !0),
            { status: o, hasSeenNotification: r, markNotificationAsSeen: l } = d(e),
            { hasSecurityScore: c, status: u } = (0, i.h)(),
            _ = a && u === s.rq.Success && o === s.rq.Success;
          (0, n.useEffect)(() => {
            _ && !r && c && (t(), l(), (0, S.c)(S.O.VisitDashboardPasswordHealth));
          }, [c, r, _]);
        },
        f = () => {
          const e = x.G.INVITE_MEMBERS,
            { showNotification: t, hasDataLoaded: a } = b("team_get_started_notification_content_invite_members_markup", !0),
            { status: o, hasSeenNotification: r, markNotificationAsSeen: l } = d(e),
            { hasMinimumMemberCount: c, status: u } = (0, i.h)(),
            _ = a && u === s.rq.Success && o === s.rq.Success;
          (0, n.useEffect)(() => {
            _ && !r && c && (t(), l(), (0, S.c)(S.O.InvitePlanMembers));
          }, [c, r, _]);
        },
        C = () => {
          const e = x.G.ASSIGN_ADMIN,
            { showNotification: t, hasDataLoaded: a } = b("team_get_started_notification_content_assign_admin_markup", !0),
            { status: o, hasSeenNotification: r, markNotificationAsSeen: l } = d(e),
            { hasMoreThanOneAdmin: c, status: u } = (0, i.h)(),
            _ = a && u === s.rq.Success && o === s.rq.Success;
          (0, n.useEffect)(() => {
            _ && !r && c && (t(), l(), (0, S.c)(S.O.AssignNewAdmin));
          }, [c, r, _]);
        };
      var Z = a(633272);
      const E = () => {
        const e = x.G.CREATE_SHARING_GROUP,
          { showNotification: t, hasDataLoaded: a } = b("team_get_started_notification_content_create_sharing_group_markup", !0),
          { status: o, hasSeenNotification: r, markNotificationAsSeen: l } = d(e),
          { isSharingDisabled: c, status: u } = (0, i.h)(),
          { hasSharedGroupWithMembers: _ = !1, status: m } = (0, Z.A)(),
          p = a && u === s.rq.Success && o === s.rq.Success && m === s.rq.Success;
        (0, n.useEffect)(() => {
          p && !r && !c && _ && (t(), l(), (0, S.c)(S.O.CreateSharingGroup));
        }, [c, r, _, p]);
      };
      var D = a(109215);
      const T = () => {
        const e = x.G.SHARE_ITEM,
          { showNotification: t, hasDataLoaded: a } = b("team_get_started_notification_content_share_item_markup", !0),
          { status: o, hasSeenNotification: r, markNotificationAsSeen: l } = d(e),
          { isSharingDisabled: c, status: u } = (0, i.h)(),
          { hasSharedAnItemWithAGroup: _ = !1, status: m } = (0, D.W)(),
          p = a && u === s.rq.Success && o === s.rq.Success && m === s.rq.Success;
        (0, n.useEffect)(() => {
          p && !r && !c && _ && (t(), l(), (0, S.c)(S.O.ShareItem));
        }, [c, r, _, p]);
      };
    },
    29267: (e, t, a) => {
      a.d(t, { O: () => n.OnboardingTask, c: () => i });
      var n = a(593039),
        s = a(45272);
      const i = (e) => {
        (0, s.Kz)(new n.UserCompleteOnboardingTaskEvent({ onboardingTask: e }));
      };
    },
    109215: (e, t, a) => {
      a.d(t, { W: () => o });
      var n = a(133354),
        s = a(619122),
        i = a(958602);
      const o = () => {
        const { currentSpaceId: e } = (0, s.fV)(),
          t = (0, i.c)("ascend", e);
        return t.status !== n.rq.Success
          ? { status: t.status }
          : { status: n.rq.Success, hasSharedAnItemWithAGroup: !!t.data.items?.find((e) => e.itemCount > 0) };
      };
    },
    633272: (e, t, a) => {
      a.d(t, { A: () => o });
      var n = a(148038),
        s = a(133354),
        i = a(740300);
      const o = () => {
        const e = (0, n.qr)(
          { queryConfig: { query: i.C.getAdministrableUserGroups }, liveConfig: { live: i.C.liveAdministrableUserGroups } },
          []
        );
        return e.status !== s.rq.Success
          ? e
          : { status: s.rq.Success, hasSharedGroupWithMembers: !!e.data.find((e) => e.users.length > 0) };
      };
    },
    55961: (e, t, a) => {
      a.d(t, { V: () => r });
      var n = a(799852),
        s = a(482598),
        i = a(133354),
        o = a(57904);
      const r = () => {
        const { data: e, status: t } = (0, n.k)(o.h, "hasVisitedVault"),
          { markVaultAsVisited: a } = (0, s.u)(o.h);
        return {
          status: t,
          hasVisitedVault: t === i.rq.Success ? e : null,
          markVaultAsVisited: () => {
            a(void 0);
          }
        };
      };
    },
    136577: (e, t, a) => {
      a.d(t, { m: () => o });
      var n = a(799852),
        s = a(133354),
        i = a(57904);
      const o = () => {
        const { data: e, status: t } = (0, n.k)(i.h, "isTeamCreator");
        return t !== s.rq.Success ? { status: t } : { status: t, isTeamCreator: e };
      };
    },
    470180: (e, t, a) => {
      a.d(t, { h: () => o });
      var n = a(799852),
        s = a(133354),
        i = a(57904);
      const o = () => {
        const { data: e, status: t } = (0, n.k)(i.h, "teamTasksCompletion");
        return t !== s.rq.Success
          ? {
              status: t,
              hasMinimumMemberCount: !1,
              hasMoreThanOneAdmin: !1,
              hasSecurityScore: !1,
              hasOnlyOneMember: !1,
              isSharingDisabled: !1
            }
          : { status: t, ...e };
      };
    },
    672153: (e, t, a) => {
      a.d(t, { G: () => n });
      let n = (function (e) {
        return (
          (e.CREATE_ACCOUNT = "createAccount"),
          (e.VISIT_VAULT = "visitVault"),
          (e.INVITE_MEMBERS = "inviteMembers"),
          (e.ASSIGN_ADMIN = "assignAdmin"),
          (e.CREATE_SHARING_GROUP = "createSharingGroup"),
          (e.SHARE_ITEM = "shareItem"),
          (e.CHECK_PASSWORD_HEALTH = "checkPasswordHealth"),
          e
        );
      })({});
    },
    728207: (e, t, a) => {
      a.d(t, { u: () => o });
      var n = a(799852),
        s = a(133354),
        i = a(551453);
      const o = () => {
        const { data: e, status: t } = (0, n.k)(i.o, "getTeamCreationDateUnix");
        return t !== s.rq.Success ? { status: t } : { status: t, teamCreationDate: e };
      };
    },
    309937: (e, t, a) => {
      a.d(t, { Z: () => i, w: () => s });
      const n = (0, a(435681).Z)("ie-drop-notification", { displayIeDropNotification: !0 }),
        s = n.registerAction("IE_DROP_NOTIFICATION", () => ({ displayIeDropNotification: !1 })),
        i = n;
    },
    893383: (e, t, a) => {
      a.d(t, {
        Jo: () => y,
        Rb: () => g,
        S2: () => d,
        VW: () => _,
        Wq: () => l,
        ZP: () => b,
        bh: () => c,
        bj: () => u,
        eY: () => h,
        lp: () => p,
        vE: () => m,
        xF: () => r
      });
      var n = a(233377),
        s = a(158432),
        i = a(438042);
      const o = (0, s.SP)("members", {
          members: n.Maybe.nothing(),
          totalSeatCount: n.Maybe.nothing(),
          isFreeTrial: n.Maybe.nothing(),
          teamName: n.Maybe.nothing(),
          teamSecurityScore: n.Maybe.nothing()
        }),
        r = o.action("status-loaded", ({ param: e }) => ({
          isFreeTrial: n.Maybe.just(e.isFreeTrial),
          totalSeatCount: n.Maybe.just(e.membersNumber + e.extraFreeSlots),
          teamName: n.Maybe.maybe(e.teamName),
          teamSecurityScore: n.Maybe.maybe(e.teamSecurityScore)
        })),
        l = o.action("members-loaded", ({ param: e }) => ({ members: n.Maybe.just(e.members) })),
        c = o.action("user-resent-invitation", ({ param: e, state: t }) => ({
          members: t.members.map((t) =>
            t.map((t) =>
              t.login === e.login ? Object.assign({}, t, { status: "pending", isChecked: !1, isTeamCaptain: !1, isGroupManager: !1 }) : t
            )
          )
        })),
        d = o.action("user-resent-invitation-failed", ({ param: e, state: t }) => ({
          members: t.members.map((t) => t.map((t) => (t.login === e.login ? e : t)))
        })),
        u = o.action("user-demoted-captain", ({ state: e, param: t }) => ({
          members: e.members.fmap((e) => e.map((e) => Object.assign({}, e, { isTeamCaptain: e.login !== t.login && e.isTeamCaptain })))
        })),
        _ = o.action("user-promoted-captain", ({ state: e, param: t }) => ({
          members: e.members.map((e) => e.map((e) => Object.assign({}, e, { isTeamCaptain: e.login === t.login || e.isTeamCaptain })))
        })),
        m = o.action("user-removed-group-manager", ({ state: e, param: t }) => ({
          members: e.members.fmap((e) => e.map((e) => Object.assign({}, e, { isGroupManager: e.login !== t.login && e.isGroupManager })))
        })),
        p = o.action("user-added-group-manager", ({ state: e, param: t }) => ({
          members: e.members.map((e) => e.map((e) => Object.assign({}, e, { isGroupManager: e.login === t.login || e.isGroupManager })))
        })),
        g = o.action("user-revoked-single-member", ({ state: e, param: t }) => ({
          members: e.members.map((e) =>
            e
              .map((e) => (e.login === t.login ? Object.assign({}, e, { revokedDateUnix: (0, i.Z)(new Date()), status: "removed" }) : e))
              .filter((e) => Boolean(e))
          )
        })),
        y = o.action("user-revoked-single-member-failed", ({ state: e, param: t }) => ({
          members: e.members.map((e) => [...e.filter((e) => e.login !== t.login), t])
        })),
        h = o.action("members-proposed", ({ state: e, param: t }) => ({
          members: n.Maybe.just(
            e.members
              .valueOr([])
              .concat(
                t.map((e) => ({
                  login: e,
                  status: "pending",
                  isTeamCaptain: !1,
                  isGroupManager: !1,
                  lastUpdateDateUnix: (0, i.Z)(new Date())
                }))
              )
          ),
          totalSeatCount: e.totalSeatCount.map((a) =>
            Math.max(a, t.length + e.members.valueOr([]).filter((e) => "removed" !== e.status).length)
          )
        })),
        b = o;
    },
    897078: (e, t, a) => {
      a.d(t, { Z: () => c });
      var n = a(158432),
        s = a(758480),
        i = a(678128),
        o = a(874466),
        r = a(893383),
        l = a(183086);
      const c = (0, n.SP)("team", {}, [s.ZP, i.ZP, o.ZP, r.ZP, l.Z]);
    },
    743277: (e, t, a) => {
      a.d(t, { Z: () => hx });
      var n = a(696832),
        s = a(459522),
        i = a(692077),
        o = a(593039),
        r = a(148038),
        l = a(876307),
        c = a(962899),
        d = a(799852),
        u = a(551453),
        _ = a(581598),
        m = a(27144),
        p = a(387532),
        g = a(488203),
        y = a(204523);
      const h = () => {
        const { translate: e } = (0, g.Z)(),
          { loading: t, last4DigitsFormatted: a, expFormatted: n, cardSvg: s } = (0, y.C)({});
        return t
          ? (0, l.tZ)(c.HoD, { color: c.colors.midGreen00 })
          : (0, l.tZ)(
              c.Ejs,
              {
                flexDirection: "column",
                gap: "16px",
                sx: {
                  borderStyle: "solid",
                  borderColor: "ds.border.neutral.quiet.idle",
                  borderWidth: "1px",
                  backgroundColor: "ds.container.agnostic.neutral.supershy",
                  padding: "24px",
                  borderRadius: "4px"
                }
              },
              (0, l.tZ)(c.X6q, { size: "small" }, e("team_account_addseats_success_credit_card_header")),
              (0, l.tZ)(
                c.Ejs,
                { flexDirection: "column", gap: "8px" },
                (0, l.tZ)(
                  c.Ejs,
                  { alignItems: "center", gap: "8px" },
                  s,
                  (0, l.tZ)(c.nvN, { color: "ds.text.neutral.standard" }, "•••• ", a)
                ),
                (0, l.tZ)(
                  c.Ejs,
                  null,
                  (0, l.tZ)(
                    c.nvN,
                    { color: "ds.text.neutral.standard" },
                    e("team_account_addseats_success_credit_card_expires", { expirationDate: n })
                  )
                )
              )
            );
      };
      var b;
      const x = () => {
        const { translate: e } = (0, g.Z)(),
          { routes: t } = (0, i.Xo)(),
          a = (0, i.k6)();
        return (0, l.tZ)(
          c.k$b,
          null,
          (0, l.tZ)(
            l.zx,
            {
              mood: "neutral",
              intensity: "supershy",
              onClick: () => {
                a.length > 1 ? a.goBack() : (0, i.uX)(t.teamAccountRoutePath);
              }
            },
            (0, l.tZ)(
              c.Ejs,
              { alignItems: "center" },
              b || (b = (0, l.tZ)(l.JO, { size: "medium", name: "ArrowLeftOutlined" })),
              (0, l.tZ)(
                l.nv,
                { color: "ds.text.neutral.standard", textStyle: "ds.title.block.medium", sx: { marginLeft: "14px" } },
                e("_common_action_back")
              )
            )
          )
        );
      };
      var S = a(264997);
      const v = () => {
        const e = (0, S.Z)(),
          t = e.status !== r.rq.Success || !e.data,
          a = e?.status === r.rq.Success ? e?.data?.b2bSubscription?.billingInformation : null,
          n = a?.country;
        return { loading: t, billingCountry: n };
      };
      var f = a(139378),
        C = a(38452),
        Z = a(618854),
        E = a(198983),
        D = a(281551),
        T = a(66485);
      const N = {
          alignItems: "center",
          backgroundColor: "ds.background.alternate",
          borderBottom: "1px solid ds.border.neutral.quiet.idle",
          display: "flex",
          height: "80px",
          justifyContent: "flex-end",
          padding: "0 48px"
        },
        M = ({ children: e }) => (0, l.tZ)("header", { sx: N }, e),
        I = {
          LAYOUT_CONTAINER: { display: "flex", flexDirection: "column", overflowY: "hidden" },
          MAIN_AREA: {
            display: "flex",
            backgroundColor: "ds.background.alternate",
            height: " 100vh",
            position: "relative",
            overflowY: "hidden",
            width: "100vw"
          },
          CONTENT: { width: "100%", overflowY: "auto" },
          SIDE_NAV: {
            backgroundColor: "ds.container.agnostic.inverse.standard",
            nav: { backgroundColor: "ds.container.agnostic.inverse.standard" }
          }
        },
        w = (e) => {
          const { brand: t, children: a, header: n, sideNav: s, banner: i, dialog: o, bottomButton: r } = e;
          return (0, l.tZ)(
            "div",
            { sx: I.LAYOUT_CONTAINER },
            (0, l.tZ)(
              "div",
              { sx: I.MAIN_AREA },
              (0, l.tZ)("div", { sx: I.SIDE_NAV }, (0, l.tZ)("div", null, t), (0, l.tZ)("div", null, s), (0, l.tZ)("div", null, r)),
              (0, l.tZ)(
                "div",
                { sx: I.CONTENT },
                i ? (0, l.tZ)("div", null, i) : null,
                (0, l.tZ)("div", null, n),
                (0, l.tZ)("div", null, a)
              ),
              o ? (0, l.tZ)("div", null, o, " ") : null
            )
          );
        };
      var k = a(383849),
        A = a.n(k),
        O = a(580443),
        L = a(777550),
        z = a(925918),
        j = a(561605),
        R = a(778301),
        P = a(45272),
        U = a(909673),
        B = a(773817),
        G = a(65255),
        F = a(377377),
        q = a(717676);
      const $ = n.createContext(null),
        V = "NETWORK ERROR",
        W = ({ globalReportError: e, children: t }) => {
          const [a, s] = n.useState([]),
            { translate: i } = (0, g.Z)(),
            o = (e) => {
              a.find((t) => t.title === e.title && t.message === e.message) || s((t) => [...t, e]);
            };
          return n.createElement(
            $.Provider,
            {
              value: {
                queue: a,
                addAlertToQueue: o,
                popAlertFromQueue: () => {
                  s((e) => e.slice(1));
                },
                reportTACError: (t, a) => {
                  t.message.toUpperCase() === V &&
                    o({ title: i("_common_alert_network_error_title"), message: i("_common_alert_network_error_message") }),
                    e(t, a);
                }
              }
            },
            t
          );
        },
        H = () => {
          const e = n.useContext($);
          if (!e) throw new Error("useAlertQueue must be called from within an AlertQueueProvider");
          return e;
        },
        K = "text--SF6xWDSFRD",
        Y = "error--Pyuel29pVU",
        Q = "team_feedback_dialog_button_ok",
        X = "team_feedback_dialog_error_markup",
        J = ({ lee: e, onDismiss: t, onFeedbackSent: a }) => {
          const [s, i] = (0, n.useState)(!0),
            [r, l] = (0, n.useState)(!1),
            [d, u] = (0, n.useState)(!1),
            _ = (0, F.w)(G.w.ItadminTacPhonesupport),
            { translate: m } = (0, g.Z)(),
            { reportTACError: p } = H(),
            y = (0, n.useRef)();
          (0, n.useEffect)(() => {
            (0, P.Nc)(o.PageView.TacAccountSendFeedback, o.BrowseComponent.Tac);
          }, []);
          const h = () => {
            (0, P.Kz)(new o.UserCallToActionEvent({ hasChosenNoAction: !0 })), t();
          };
          function b(e) {
            const { value: t } = e.target;
            i(!t);
          }
          async function x() {
            l(!0), u(!1);
            try {
              var t;
              await e.apiMiddleware.feedback?.send({ body: null != (t = y.current?.value) ? t : "" }),
                (0, P.Kz)(
                  new o.UserCallToActionEvent({
                    callToActionList: [o.CallToAction.SendEmail],
                    chosenAction: o.CallToAction.SendEmail,
                    hasChosenNoAction: !1
                  })
                ),
                a();
            } catch (e) {
              var n, s;
              const t = new Error(null != (n = null != (s = e.message) ? s : e) ? n : "unknown error in _sendFeedback");
              p(t), l(!1), u(!0);
            }
          }
          return _
            ? (0, B.tZ)(
                q.o,
                {
                  isOpen: !0,
                  onRequestClose: h,
                  footer: (0, B.tZ)(c.cNS, {
                    intent: "primary",
                    primaryButtonTitle: m(Q),
                    primaryButtonOnClick: () => x(),
                    primaryButtonProps: { disabled: s || r }
                  }),
                  title: m("team_feedback_dialog_upd_title"),
                  showCloseIcon: !0
                },
                (0, B.tZ)("div", { className: K }, m.markup("team_feedback_dialog_upd_text_markup", {}, { linkTarget: "_blank" })),
                (0, B.tZ)(c.oil, {
                  sx: { resize: "vertical", maxHeight: "300px" },
                  fullWidth: !0,
                  ref: y,
                  multiline: !0,
                  placeholder: m("team_feedback_dialog_upd_textarea_label"),
                  onChange: b.bind(void 0)
                }),
                d ? (0, B.tZ)("div", { className: Y }, m.markup(X)) : null
              )
            : (0, B.tZ)(
                q.o,
                {
                  isOpen: !0,
                  onRequestClose: h,
                  footer: (0, B.tZ)(c.cNS, {
                    intent: "primary",
                    primaryButtonTitle: m(Q),
                    primaryButtonOnClick: () => x(),
                    primaryButtonProps: { disabled: s || r },
                    secondaryButtonTitle: m("team_feedback_dialog_button_cancel"),
                    secondaryButtonOnClick: h
                  }),
                  title: m("team_feedback_dialog_title")
                },
                (0, B.tZ)("div", { className: K }, m.markup("team_feedback_dialog_text_markup", {}, { linkTarget: "_blank" })),
                (0, B.tZ)(c.oil, {
                  sx: { resize: "vertical", maxHeight: "300px" },
                  fullWidth: !0,
                  ref: y,
                  multiline: !0,
                  placeholder: m("team_feedback_dialog_textarea_label"),
                  onChange: b.bind(void 0)
                }),
                d ? (0, B.tZ)("div", { className: Y }, m.markup(X)) : null
              );
        },
        ee = ({ onDismiss: e }) => {
          const { translate: t } = (0, g.Z)();
          return n.createElement(
            "div",
            null,
            n.createElement(
              q.o,
              { isOpen: !0, onRequestClose: e, title: t("team_feedback_result_dialog_title") },
              n.createElement(
                "div",
                { className: "container--qOtqKRdBaF" },
                n.createElement("h1", null, t("team_feedback_result_body_title")),
                n.createElement("p", { className: "text--chLJWXuATn" }, t("team_feedback_result_body_text"))
              )
            )
          );
        };
      var te = (function (e) {
        return (e[(e.FeedbackPopup = 0)] = "FeedbackPopup"), (e[(e.ResultPopup = 1)] = "ResultPopup"), (e[(e.Done = 2)] = "Done"), e;
      })(te || {});
      const ae = ({ lee: e, onDismiss: t, onSend: a }) => {
        const [s, i] = (0, n.useState)(te.FeedbackPopup);
        let o;
        const r = () => {
          clearTimeout(o), i(te.Done), a();
        };
        return (0, B.tZ)(
          "div",
          null,
          s === te.FeedbackPopup &&
            (0, B.tZ)(J, {
              lee: e,
              onDismiss: t,
              onFeedbackSent: () => {
                i(te.ResultPopup),
                  (o = window.setTimeout(() => {
                    r();
                  }, 1e4));
              }
            }),
          s === te.ResultPopup && (0, B.tZ)(ee, { onDismiss: r })
        );
      };
      var ne = a(68691),
        se = a(133354);
      const ie = () => {
          const e = (0, d.k)(u.o, "getTeamCapabilities");
          return e.status === se.rq.Success ? e.data : null;
        },
        oe = {
          CONTAINER: { display: "flex", padding: "16px 8px", justifyContent: "space-between", alignItems: "center" },
          ITEM: { display: "flex", gap: "16px", alignItems: "flex-start" }
        },
        re = ({ title: e, description: t, iconName: a, button: n }) => {
          const { content: s, onClick: i, isUpgradeButton: o, isRoleLink: r } = n;
          return (0, l.tZ)(
            "div",
            { sx: oe.CONTAINER },
            (0, l.tZ)(
              "div",
              { sx: oe.ITEM },
              (0, l.tZ)(l.JO, { name: a, size: "large", color: "ds.text.neutral.standard" }),
              (0, l.tZ)(
                "div",
                { sx: { gap: " 4px", maxWidth: "320px" } },
                (0, l.tZ)(l.nv, { textStyle: "ds.title.block.small", color: "ds.text.neutral.catchy" }, e),
                (0, l.tZ)(l.nv, { textStyle: "ds.body.reduced.regular", color: "ds.text.neutral.quiet" }, t)
              )
            ),
            (0, l.tZ)(
              l.zx,
              {
                mood: o ? "brand" : "neutral",
                intensity: "quiet",
                icon: o ? "PremiumOutlined" : void 0,
                layout: o ? "iconLeading" : void 0,
                role: r ? "link" : void 0,
                onClick: i,
                size: "small"
              },
              s
            )
          );
        },
        le = () =>
          (0, l.tZ)("hr", {
            sx: { border: "0", borderTop: "1px solid ds.border.neutral.quiet.idle", height: "1px", width: "100%", mt: "8px", mb: "8px" }
          });
      var ce = a(119471);
      let de = (function (e) {
        return (e.SECURITY_GUIDANCE = "security_guidance"), (e.TRAINING = "training"), (e.SEND_MESSAGE = "send_message"), e;
      })({});
      const ue = { [de.SECURITY_GUIDANCE]: ce.mA, [de.TRAINING]: ce.J0, [de.SEND_MESSAGE]: ce.hc },
        _e = {
          [de.SECURITY_GUIDANCE]: o.CallToAction.RequestDemo,
          [de.TRAINING]: o.CallToAction.RegisterWebinar,
          [de.SEND_MESSAGE]: o.CallToAction.SendEmail
        },
        me = (e, t) => {
          const a = [o.CallToAction.SendEmail, o.CallToAction.RequestDemo, o.CallToAction.RegisterWebinar, o.CallToAction.Dismiss];
          a.push(t ? o.CallToAction.ContactPhoneSupport : o.CallToAction.RequestUpgrade),
            (0, P.Kz)(new o.UserCallToActionEvent({ callToActionList: a, chosenAction: _e[e], hasChosenNoAction: !1 })),
            (0, j.Yo)(ue[e]);
        };
      var pe, ge, ye, he;
      const be = ({ onDismiss: e }) => {
        var t;
        const { translate: a } = (0, g.Z)(),
          { routes: s } = (0, i.Xo)(),
          r = (0, L.B)(),
          d = (0, ne.C)(),
          u = ie(),
          _ = null === u || null === d,
          m = null != (t = u?.phoneSupport.enabled) && t;
        return (
          (0, n.useEffect)(() => {
            (0, P.Nc)(o.PageView.TacModalContactSupport);
          }, []),
          (0, l.tZ)(
            l.Vq,
            {
              isOpen: !0,
              onClose: () =>
                ((e, t) => {
                  const a = [o.CallToAction.SendEmail, o.CallToAction.RequestDemo, o.CallToAction.RegisterWebinar, o.CallToAction.Dismiss];
                  a.push(t ? o.CallToAction.ContactPhoneSupport : o.CallToAction.RequestUpgrade),
                    (0, P.Kz)(new o.UserCallToActionEvent({ callToActionList: a, hasChosenNoAction: !0 })),
                    e();
                })(e, m),
              closeActionLabel: a("_common_dialog_dismiss_button"),
              title: a("team_contact_support_dialog_title")
            },
            _
              ? (0, l.tZ)(l.nv, { sx: { textAlign: "center" } }, pe || (pe = (0, l.tZ)(c.HoD, { color: "primaries.5", size: 44 })))
              : (0, l.tZ)(
                  n.Fragment,
                  null,
                  (0, l.tZ)(l.nv, { sx: { marginBottom: "16px" } }, a("team_contact_support_dialog_text")),
                  (0, l.tZ)(
                    "div",
                    { sx: { gap: "8px" } },
                    (0, l.tZ)(re, {
                      title: a("team_contact_support_phone_support_title"),
                      description: a("team_contact_support_phone_support_subtitle"),
                      iconName: "ItemPhoneHomeOutlined",
                      button: {
                        content: a(m ? "team_contact_support_request_call" : "team_contact_support_upgrade_to_business_cta"),
                        onClick: () =>
                          ((e, t, a, n, s) => {
                            const r = [
                              o.CallToAction.SendEmail,
                              o.CallToAction.RequestDemo,
                              o.CallToAction.RegisterWebinar,
                              o.CallToAction.Dismiss
                            ];
                            return e
                              ? (r.push(o.CallToAction.ContactPhoneSupport),
                                (0, P.Kz)(
                                  new o.UserCallToActionEvent({
                                    callToActionList: r,
                                    chosenAction: o.CallToAction.ContactPhoneSupport,
                                    hasChosenNoAction: !1
                                  })
                                ),
                                void (0, j.Yo)(ce.$b))
                              : e || (!a && !n)
                              ? (r.push(o.CallToAction.RequestUpgrade),
                                (0, P.Kz)(
                                  new o.UserCallToActionEvent({
                                    callToActionList: r,
                                    chosenAction: o.CallToAction.RequestUpgrade,
                                    hasChosenNoAction: !1
                                  })
                                ),
                                (0, i.uX)(`${t.teamAccountChangePlanRoutePath}?plan=business`))
                              : (r.push(o.CallToAction.RequestUpgrade),
                                (0, P.Kz)(
                                  new o.UserCallToActionEvent({
                                    callToActionList: r,
                                    chosenAction: o.CallToAction.RequestUpgrade,
                                    hasChosenNoAction: !1
                                  })
                                ),
                                void (0, j.Yo)(
                                  `${ce.ub}?plan=business&subCode=${
                                    null != s ? s : ""
                                  }&utm_source=button:upgrade_business_tier+origin_page:tac/modal_contact_support+origin_component:main_app`
                                ));
                          })(m, s, d?.isFreeTrial, d?.isGracePeriod, r?.subscriptionCode),
                        isUpgradeButton: !m,
                        isRoleLink: m || d?.isFreeTrial || d?.isGracePeriod
                      }
                    }),
                    ge || (ge = (0, l.tZ)(le, null)),
                    (0, l.tZ)(re, {
                      title: a("team_contact_support_security_guidance_title"),
                      description: a("team_contact_support_security_guidance_subtitle"),
                      iconName: "ProtectionOutlined",
                      button: {
                        content: a("team_contact_support_request_demo"),
                        onClick: () => me(de.SECURITY_GUIDANCE, m),
                        isRoleLink: !0
                      }
                    }),
                    ye || (ye = (0, l.tZ)(le, null)),
                    (0, l.tZ)(re, {
                      title: a("team_contact_support_training_title"),
                      description: a("team_contact_support_training_subtitle"),
                      iconName: "AccountSettingsOutlined",
                      button: { content: a("team_contact_support_register_for_webinar"), onClick: () => me(de.TRAINING, m), isRoleLink: !0 }
                    }),
                    he || (he = (0, l.tZ)(le, null)),
                    (0, l.tZ)(re, {
                      title: a("team_contact_support_help_customer_support_title"),
                      description: a("team_contact_support_help_customer_support_subtitle"),
                      iconName: "ItemEmailOutlined",
                      button: { content: a("team_contact_support_send_message"), onClick: () => me(de.SEND_MESSAGE, m), isRoleLink: !0 }
                    })
                  )
                )
          )
        );
      };
      var xe;
      const Se = ({ showVaultNavigationModal: e, setShowVaultNavigationModal: t, onBeforeNavigate: a }) => {
          const { translate: s } = (0, g.Z)();
          return (0, l.tZ)(
            c.VqE,
            {
              closeIconName: s("_common_dialog_dismiss_button"),
              isOpen: e,
              onClose: () => {
                (0, P.Kz)(
                  new o.UserCallToActionEvent({
                    callToActionList: [o.CallToAction.Skip, o.CallToAction.InstallExtension],
                    hasChosenNoAction: !0
                  })
                ),
                  t(!1);
              }
            },
            (0, l.tZ)(c.$N8, {
              title: (0, l.tZ)(
                "span",
                { color: "ds.text.neutral.catchy", sx: { margin: "0px 15px", fontSize: "25px", fontWeight: "800", display: "block" } },
                s("team_vault_navigation_dialog_title")
              )
            }),
            (0, l.tZ)(
              c.a7O,
              null,
              (0, l.tZ)(
                l.nv,
                { sx: { margin: "15px", fontSiz: "16px" }, color: "ds.text.neutral.standard" },
                s("team_vault_navigation_dialog_paragrah")
              ),
              (0, l.tZ)(
                l.nv,
                { sx: { margin: "15px", fontSiz: "16px" }, color: "ds.text.neutral.standard" },
                s("team_vault_navigation_dialog_paragrah_two")
              )
            ),
            (0, l.tZ)(c.cNS, {
              primaryButtonTitle: (0, l.tZ)(
                n.Fragment,
                null,
                (0, l.tZ)("span", { sx: { marginRight: "8px" } }, s("team_vault_navigation_dialog_install_cta")),
                xe || (xe = (0, l.tZ)(l.JO, { name: "ActionOpenExternalLinkOutlined", size: "small", color: "ds.text.inverse.catchy" }))
              ),
              primaryButtonOnClick: () => {
                (0, P.Kz)(
                  new o.UserCallToActionEvent({
                    callToActionList: [o.CallToAction.Skip, o.CallToAction.InstallExtension],
                    chosenAction: o.CallToAction.InstallExtension,
                    hasChosenNoAction: !1
                  })
                ),
                  a?.(),
                  (0, j.Yo)(ce.yi);
              },
              primaryButtonProps: { type: "button" },
              secondaryButtonTitle: s("team_vault_navigation_dialog_skip_btn"),
              secondaryButtonOnClick: () => {
                (0, P.Kz)(
                  new o.UserCallToActionEvent({
                    callToActionList: [o.CallToAction.Skip, o.CallToAction.InstallExtension],
                    chosenAction: o.CallToAction.Skip,
                    hasChosenNoAction: !1
                  })
                ),
                  a?.(),
                  (0, i.uX)("/"),
                  t(!1);
              }
            })
          );
        },
        ve = n.createContext({
          isVaultNavigationModalOpen: !1,
          setIsVaultNavigationModalOpen: () => {},
          setOnBeforeNavigateCallback: () => {}
        }),
        fe = ({ children: e }) => {
          const [t, a] = n.useState(!1),
            [s, i] = n.useState(void 0);
          return n.createElement(
            ve.Provider,
            { value: { isVaultNavigationModalOpen: t, setIsVaultNavigationModalOpen: a, setOnBeforeNavigateCallback: i } },
            e,
            t ? n.createElement(Se, { showVaultNavigationModal: t, setShowVaultNavigationModal: a, onBeforeNavigate: s }) : null
          );
        };
      var Ce = a(242714),
        Ze = a(115607);
      const Ee = () => {
        const e = (0, ne.C)(),
          t = (0, Ze.lZ)(),
          a = (0, Ce.o)(G.w.EcommerceWebB2BDiscontinuationPhase1),
          { translate: n } = (0, g.Z)();
        if (!e || t.isLoading || void 0 === t.isTeamSoftDiscontinued || void 0 === t.isTrial || "boolean" != typeof a) return null;
        const s = e.daysLeftInTrial,
          i = e.spaceTier === _.lD.Team,
          o = e.isGracePeriod,
          r = t.isTeamSoftDiscontinued && t.isTrial && a;
        return (0, l.tZ)(l.Ct, {
          label: r
            ? n("trial_ended_discontinued")
            : o
            ? n("free_trial_expired_badge")
            : n(i ? "team_trial_days_left_badge" : "business_trial_days_left_badge", { count: s }),
          mood: o || r ? "warning" : "brand",
          layout: "labelOnly",
          intensity: o ? "catchy" : "quiet",
          sx: { marginTop: "3px" }
        });
      };
      var De, Te;
      const Ne = ({ lee: e }) => {
        const [t, a] = (0, n.useState)(!1),
          [s, r] = (0, n.useState)(!1),
          [d, u] = (0, n.useState)(!1),
          _ = (0, L.B)(),
          { translate: m } = (0, g.Z)(),
          p = (0, R.a)(e.dispatchGlobal),
          y = (0, U.w)(),
          { setIsVaultNavigationModalOpen: h } = (0, n.useContext)(ve),
          { routes: b } = (0, i.Xo)(),
          x = (e, t, a) => (e) => {
            a(e);
          },
          S = ({ className: e, ...t }) =>
            (0, l.tZ)(c.zxk, { type: "button", nature: "ghost", className: A()("dropdownElement--fRxFyumXai", e), ...t }),
          v = s ? (0, l.tZ)(ae, { lee: e, onDismiss: () => r(!1), onSend: () => r(!1) }) : null,
          f = d ? (0, l.tZ)(be, { onDismiss: () => u(!1) }) : null,
          C = _?.premiumStatus && !(0, O.wt)(_?.premiumStatus) && ((0, O.pq)(_?.premiumStatus) || (0, O.f1)(_?.premiumStatus)),
          Z = _?.premiumStatus && (0, O.pq)(_?.premiumStatus) ? "team" : "business",
          E = _?.premiumStatus && (0, O.wt)(_?.premiumStatus),
          D = e.permission.adminAccess.hasBillingAccess,
          T = `button:buy_dashlane+click_origin:account_dropdown+origin_page:${y || void 0}+origin_component:main_app`,
          N = `${ce.ub}?plan=${Z}&subCode=${_?.subscriptionCode}&utm_source=${T}`;
        return (0, l.tZ)(
          n.Fragment,
          null,
          (0, l.tZ)(
            "div",
            { className: "teamAccountDropdown--XD04fGIw1S" },
            (0, l.tZ)(
              z.Lt,
              {
                alignment: z.oA.End,
                position: z.ir.Bottom,
                onToggle: () => {
                  a(!t);
                },
                withBackdrop: !1,
                renderRoot: (e) =>
                  ((e) =>
                    (0, l.tZ)(
                      l.zx,
                      {
                        mood: "neutral",
                        intensity: "quiet",
                        layout: "iconTrailing",
                        icon: t ? "CaretUpOutlined" : "CaretDownOutlined",
                        onClick: e
                      },
                      m("team_account")
                    ))(e)
              },
              (0, l.tZ)(
                "div",
                { className: "dropdownMenu--Uz1kni0KIt" },
                D
                  ? (0, l.tZ)(
                      S,
                      {
                        onClick: x(0, 0, () => {
                          (0, i.uX)(b.teamAccountRoutePath);
                        })
                      },
                      m("team_plan")
                    )
                  : null,
                (0, l.tZ)(
                  S,
                  {
                    onClick: x(0, 0, () => {
                      (0, i.uX)("/");
                    })
                  },
                  m("team_webapp")
                ),
                E && D
                  ? (0, l.tZ)(
                      S,
                      {
                        onClick: x(
                          0,
                          0,
                          () => (
                            (0, P.Kz)(new o.UserClickEvent({ button: o.Button.BuyDashlane, clickOrigin: o.ClickOrigin.AccountDropdown })),
                            void (0, j.Yo)(N)
                          )
                        )
                      },
                      (0, l.tZ)("div", null, m("team_buy_dashlane"), De || (De = (0, l.tZ)(Ee, null)))
                    )
                  : null,
                C && D
                  ? (0, l.tZ)(S, { onClick: x(0, 0, () => (0, i.uX)(`${b.teamAccountChangePlanRoutePath}`)) }, m("team_upgrade"))
                  : null,
                (0, l.tZ)(S, { onClick: x(0, 0, () => (0, j.Yo)(ce.Pr)) }, m("team_service_status")),
                (0, l.tZ)(S, { onClick: x(0, 0, () => (0, j.Yo)(ce.FX)) }, m("team_support")),
                D ? (0, l.tZ)(S, { onClick: () => u(!0) }, m("team_contact_support_menu_item")) : null,
                (0, l.tZ)(S, { onClick: x(0, 0, () => r(!0)) }, m("team_feedback")),
                Te || (Te = (0, l.tZ)("hr", null)),
                (0, l.tZ)(
                  S,
                  {
                    onClick: x(0, 0, () => {
                      p();
                    }),
                    className: "logout--x9WN8NkY4R"
                  },
                  m("team_logout")
                )
              )
            )
          ),
          v,
          f
        );
      };
      var Me = a(506295),
        Ie = a(361607),
        we = a(379846);
      let ke = (function (e) {
        return (
          (e.POLICIES = "policies"),
          (e.DUO = "duo"),
          (e.DIRECTORY_SYNC = "directory-sync"),
          (e.ACCOUNT_RECOVERY = "account-recovery"),
          (e.SSO = "sso"),
          e
        );
      })({});
      var Ae = a(16037);
      const Oe = n.createContext(null),
        Le = ({ children: e }) => {
          const [t, a] = n.useState(!1);
          return n.createElement(Oe.Provider, { value: { hasNewBreaches: t, setHasNewBreaches: a } }, e);
        },
        ze = () => {
          const e = n.useContext(Oe);
          if (!e) throw new Error("useSideNavNotification must be called from within an SideNavNotificationProvider");
          return e;
        },
        je = G.w.EcommerceWebPaywallUpdate;
      function Re(e) {
        var t, a;
        const n = (0, L.B)(),
          s = (0, Ce.o)(je),
          i = (0, ne.C)();
        if (!i || null == s) return null;
        let o;
        return (
          (o = ("hasFullAccess" in e && e.hasFullAccess) || e.hasBillingAccess),
          {
            shouldShowBuyOrUpgradePaywall: null != (t = s && o) && t,
            isTrialOrGracePeriod: i.isFreeTrial || i.isGracePeriod,
            planType: i.spaceTier,
            accountSubscriptionCode: null != (a = n?.subscriptionCode) ? a : ""
          }
        );
      }
      var Pe = a(136577),
        Ue = a(15192),
        Be = a(784133);
      const Ge = ({ isSidenavCollapsed: e, settingsRoute: t, children: a }) => {
          const { translate: n } = (0, g.Z)(),
            s = (0, Ue.k6)(),
            i = (0, Be.h)(),
            { unseen: o, setAsSeen: r } = (0, we.m)(Me.O.AccountRecoveryAvailableAdminTooltip);
          return !o || i.status !== se.rq.Success || i.data
            ? (0, B.tZ)("div", null, a)
            : (0, B.tZ)(
                "div",
                { sx: { position: "relative" } },
                (0, B.tZ)(
                  c.ua7,
                  {
                    sx: { width: "312px", minWidth: "312px", textAlign: "left", top: e ? 0 : "-100px" },
                    trigger: "persist",
                    placement: "left",
                    offset: [0, 30],
                    arrowSize: 12,
                    content: (0, B.tZ)(
                      c.Ejs,
                      { gap: "8px", sx: { padding: "8px" } },
                      (0, B.tZ)(
                        c.nvN,
                        { size: "large", as: "h3", sx: { fontWeight: 600, color: "ds.text.inverse.catchy" } },
                        n("team_account_recovery_popover_title")
                      ),
                      (0, B.tZ)(c.nvN, { color: "white", size: "x-small" }, n("team_account_recovery_popover_description")),
                      (0, B.tZ)(
                        c.Ejs,
                        { gap: "8px", justifyContent: "flex-end", sx: { width: "100%", marginTop: "8px" } },
                        (0, B.tZ)(
                          l.zx,
                          { type: "button", mood: "neutral", size: "small", "data-testid": "ar-tooltip-dismiss", onClick: () => r() },
                          n("team_account_recovery_popover_dismiss")
                        ),
                        (0, B.tZ)(
                          l.zx,
                          {
                            type: "button",
                            mood: "brand",
                            size: "small",
                            "data-testid": "ar-tooltip-go-to-settings",
                            onClick: () => {
                              r(), s.push(t);
                            }
                          },
                          n("team_account_recovery_popover_go_to_settings")
                        )
                      )
                    )
                  },
                  (0, B.tZ)("div", { sx: { position: "relative" } }, " ", a)
                )
              );
        },
        Fe = {
          CONTAINER: {
            alignItems: "center",
            borderRadius: "4px",
            cursor: "pointer",
            display: "flex",
            padding: "16px 24px",
            position: "relative",
            "&:hover": { backgroundColor: "ds.container.expressive.neutral.supershy.hover" }
          },
          CONTAINER_COLLAPSED: { textStyle: "ds.title.block.small", alignItems: "center", flexDirection: "column", padding: "6px" },
          CONTAINER_SELECTED: { backgroundColor: "ds.container.expressive.neutral.supershy.active" },
          END_ADORNMENT_COLLAPSED: { display: "none" },
          ICON: { marginBottom: "0", marginRight: "16px", minWidth: "20px", svg: { fill: "ds.text.inverse.catchy" } },
          ICON_COLLAPSED: { marginBottom: "4px", marginRight: "0" },
          LABEL: { color: "ds.text.inverse.catchy", hyphens: "auto", minWidth: "0", wordWrap: "break-word" },
          LABEL_COLLAPSED: { textStyle: "ds.title.block.small", textAlign: "center", width: "100%" },
          LABEL_CONTAINER: { display: "flex", alignItems: "flex-start", flexDirection: "column", gap: "2px" },
          NOTIFICATION: {
            alignSelf: "flex-start",
            backgroundColor: "ds.container.expressive.warning.catchy.idle",
            borderRadius: "50%",
            flexShrink: "0",
            height: "8px",
            marginLeft: "4px",
            width: "8px"
          },
          NOTIFICATION_COLLAPSED: { position: "absolute", right: "18px" },
          TEXT_MEDIUM: { textStyle: "ds.title.block.medium" }
        },
        qe = ({ collapsed: e, hasNotification: t, icon: a, label: n, endAdornment: s, selected: i, ...o }) => {
          const r = (0, l.jM)([Fe.CONTAINER, e ? Fe.CONTAINER_COLLAPSED : Fe.TEXT_MEDIUM, i ? Fe.CONTAINER_SELECTED : {}]),
            c = (0, l.jM)([Fe.ICON, e ? Fe.ICON_COLLAPSED : {}]),
            d = (0, l.jM)([Fe.LABEL, e ? Fe.LABEL_COLLAPSED : Fe.TEXT_MEDIUM]),
            u = (0, l.jM)([Fe.NOTIFICATION, e ? Fe.NOTIFICATION_COLLAPSED : {}]);
          return (0, l.tZ)(
            "span",
            { sx: r, ...o },
            (0, l.tZ)("span", { sx: c }, " ", a, " "),
            s
              ? (0, l.tZ)(
                  "div",
                  { sx: Fe.LABEL_CONTAINER },
                  (0, l.tZ)("span", { sx: d }, n),
                  (0, l.tZ)("div", { sx: e ? Fe.END_ADORNMENT_COLLAPSED : {} }, s)
                )
              : (0, l.tZ)("span", { sx: d }, n),
            t ? (0, l.tZ)("span", { sx: u }) : null
          );
        };
      var $e = a(482598),
        Ve = a(375062),
        We = a(470750);
      const He = () => {
          const { translate: e } = (0, g.Z)(),
            { markNewRestrictSharingPolicySeen: t } = (0, $e.u)(Ve.t),
            { data: a, status: n } = (0, d.k)(Ve.t, "hasSeenNewRestrictSharingPolicy");
          return n !== se.rq.Success || a
            ? null
            : (0, l.tZ)(We.M, {
                title: e("team_tooltip_title_restrict_sharing_info"),
                description: e("team_tooltip_description_restrict_sharing_info"),
                setIsNotificationVisible: t
              });
        },
        Ke = {
          collapsedLogo: "collapsedLogo--BjOqWIOARt",
          settingsMenuContainer: "settingsMenuContainer--EascJOgBpz",
          settingsHoverContainer: "settingsHoverContainer--z9ins4al2D",
          iconContainer: "iconContainer--E97FJLapaB",
          tooltipMenuOption: "tooltipMenuOption--uuMY2Xcfk0",
          accordionLinkWithBadge: "accordionLinkWithBadge--j4Qg9gk9xp",
          securityCategory: "securityCategory--Clfv_8oKCw",
          categoryTitle: "categoryTitle--krvL3iQ_mG"
        };
      var Ye, Qe, Xe, Je, et, tt, at, nt, st, it, ot, rt, lt, ct, dt;
      const ut = "team_settings_menu_title_account_recovery",
        _t = "team_settings_menu_title_directory_sync",
        mt = "team_settings_tab_duo",
        pt = "team_settings_menu_title_policies",
        gt = "team_settings",
        yt = "team_settings_menu_title_single_sign_on",
        ht = "team_new_label",
        bt = "team_upgrade_label",
        xt = (e, t) => {
          var a;
          return (null != (a = t?.[e].length) ? a : 0) > 0;
        },
        St = ({ isCollapsed: e = !1, permissionChecker: t, routes: a, selectedTab: n, teamNotifications: r, teamSettings: d }) => {
          var u;
          const { translate: m } = (0, g.Z)(),
            p = {
              DIRECTORY_SYNC: `${a.teamSettingsRoutePath}${s.B9.DIRECTORY_SYNC}`,
              DUO: `${a.teamSettingsRoutePath}${s.B9.DUO}`,
              MASTER_PASSWORD_POLICIES: `${a.teamSettingsRoutePath}${s.B9.MASTER_PASSWORD_POLICIES}`,
              POLICIES: `${a.teamSettingsRoutePath}${s.B9.POLICIES}`,
              SSO: `${a.teamSettingsRoutePath}${s.B9.SSO}`
            },
            { unseen: y } = (0, we.m)(Me.O.TacDarkWebInsightsNewBadge),
            { hasNewBreaches: h } = ze(),
            b = (0, Ze.lZ)(),
            x = (0, Ie._)(),
            S = x.status !== se.rq.Success,
            { interacted: v, status: f } = (0, we.d)(Me.O.TacGetStartedDismissPage),
            { shouldShowBuyOrUpgradePaywall: C, planType: Z } = null != (u = Re(t.adminAccess)) ? u : {},
            E = (0, Pe.m)(),
            D = E.status === se.rq.Success && E.isTeamCreator,
            { "BBCOM-238-duo": T = !1, onboarding_web_tacgetstarted: N = !1 } = S ? {} : x.data,
            M = f === se.rq.Loading || E.status === se.rq.Loading || S || b.isLoading,
            I = C && (Z === _.lD.Team || Z === _.lD.Starter),
            w = d && !d.ssoEnabled && !I && void 0 !== I,
            k = N && !v && D && !b.isLoading && !b.isTeamSoftDiscontinued,
            O = ({ requiredPermission: e, children: a, ...n }) =>
              t.adminAccess.hasPermissionLevel(e) ? (0, B.tZ)(c.KJW, { ...n }, a) : null;
          return (0, B.tZ)(
            c.t7v,
            { collapsed: e },
            (0, B.tZ)(
              c.sMA,
              {
                sx: {
                  pointerEvents: S ? "none" : "auto",
                  visibility: M ? "hidden" : "visible",
                  backgroundColor: "ds.container.agnostic.inverse.standard"
                }
              },
              k
                ? (0, B.tZ)(
                    O,
                    { requiredPermission: "FULL", collapsed: e },
                    (0, B.tZ)(
                      i.rU,
                      { to: a.teamGetStartedRoutePath },
                      (0, B.tZ)(qe, {
                        collapsed: e,
                        icon: Ye || (Ye = (0, B.tZ)(l.JO, { name: "TipOutlined" })),
                        label: m("team_get_started"),
                        selected: n === Ae.$.GET_STARTED
                      })
                    )
                  )
                : null,
              (0, B.tZ)(
                O,
                { requiredPermission: "FULL", collapsed: e },
                (0, B.tZ)(
                  i.rU,
                  { to: a.teamDashboardRoutePath },
                  (0, B.tZ)(qe, {
                    collapsed: e,
                    icon: Qe || (Qe = (0, B.tZ)(c.QGC, null)),
                    label: m("team_general"),
                    selected: n === Ae.$.DASHBOARD
                  })
                )
              ),
              (0, B.tZ)(
                O,
                { requiredPermission: "FULL", collapsed: e },
                (0, B.tZ)(
                  i.rU,
                  { to: a.teamMembersRoutePath },
                  (0, B.tZ)(qe, {
                    collapsed: e,
                    icon: Xe || (Xe = (0, B.tZ)(c.lMe, null)),
                    label: m("team_members"),
                    selected: n === Ae.$.MEMBERS
                  })
                )
              ),
              (0, B.tZ)(
                O,
                { requiredPermission: "GROUP_READ", collapsed: e },
                (0, B.tZ)(
                  i.rU,
                  { to: a.teamGroupsRoutePath },
                  (0, B.tZ)(qe, {
                    collapsed: e,
                    icon: Je || (Je = (0, B.tZ)(c.c6E, null)),
                    label: m("team_groups"),
                    selected: n === Ae.$.GROUPS
                  })
                )
              ),
              (0, B.tZ)(
                O,
                { requiredPermission: "FULL", collapsed: e },
                (0, B.tZ)(
                  i.rU,
                  { to: a.teamActivityRoutePath },
                  (0, B.tZ)(qe, {
                    collapsed: e,
                    hasNotification: xt("accountRecoveryRequests", r),
                    icon: et || (et = (0, B.tZ)(c.X4t, null)),
                    label: m("team_activity"),
                    selected: n === Ae.$.ACTIVITY
                  })
                )
              ),
              (0, B.tZ)(
                O,
                { requiredPermission: "FULL", collapsed: e },
                (0, B.tZ)(
                  Ge,
                  { isSidenavCollapsed: e, settingsRoute: p.MASTER_PASSWORD_POLICIES },
                  e
                    ? (0, B.tZ)(
                        c.ua7,
                        {
                          placement: "right",
                          offset: [0, 15],
                          hoverCloseDelay: 500,
                          sx: { padding: "4px 0", "svg, svg:hover": { fill: "ds.text.inverse.catchy" } },
                          content: (0, B.tZ)(
                            "div",
                            { sx: { width: w ? "180px" : "148px" } },
                            (0, B.tZ)(
                              "div",
                              { style: { display: "flex" } },
                              (0, B.tZ)(
                                i.rU,
                                { to: p.POLICIES, style: { width: "100%" } },
                                (0, B.tZ)("div", { className: Ke.tooltipMenuOption }, m(pt))
                              ),
                              tt || (tt = (0, B.tZ)(He, null))
                            ),
                            (0, B.tZ)(
                              i.rU,
                              { to: p.SSO },
                              (0, B.tZ)(
                                "div",
                                { className: A()(Ke.tooltipMenuOption, { [Ke.tooltipMenuOptionWithBadge]: w }) },
                                m(yt),
                                w || I
                                  ? (0, B.tZ)(l.Ct, {
                                      mood: "brand",
                                      intensity: "catchy",
                                      label: m(w ? ht : bt),
                                      layout: "iconLeading",
                                      iconName: I ? "PremiumOutlined" : void 0
                                    })
                                  : null
                              )
                            ),
                            (0, B.tZ)(i.rU, { to: p.DIRECTORY_SYNC }, (0, B.tZ)("div", { className: Ke.tooltipMenuOption }, m(_t))),
                            (0, B.tZ)(
                              i.rU,
                              { to: p.MASTER_PASSWORD_POLICIES },
                              (0, B.tZ)("div", { className: Ke.tooltipMenuOption }, m(ut))
                            ),
                            T ? (0, B.tZ)(i.rU, { to: p.DUO }, (0, B.tZ)("div", { className: Ke.tooltipMenuOption }, m(mt))) : null
                          )
                        },
                        (0, B.tZ)(
                          "div",
                          { tabIndex: 0 },
                          (0, B.tZ)(qe, {
                            collapsed: e,
                            icon: at || (at = (0, B.tZ)(c.ewm, null)),
                            label: m(gt),
                            selected: n === Ae.$.SETTINGS
                          })
                        )
                      )
                    : (0, B.tZ)(
                        c.UlM,
                        {
                          size: "large",
                          open: !0,
                          sx: {
                            backgroundColor: "ds.container.agnostic.inverse.standard",
                            span: { color: "ds.text.inverse.catchy" },
                            "> summary": { padding: "16px 0" },
                            "&[open]": { padding: 0 },
                            "&[open] > summary": { padding: "16px 0" },
                            "&[open] > div:nth-of-type(1)": { pointerEvents: S ? "none" : "auto", padding: 0 },
                            "svg, svg:hover": { fill: "ds.text.inverse.catchy" }
                          }
                        },
                        (0, B.tZ)(
                          c._Oh,
                          null,
                          (0, B.tZ)(
                            "span",
                            { className: Ke.settingsMenuContainer },
                            (0, B.tZ)("span", { className: Ke.iconContainer }, nt || (nt = (0, B.tZ)(c.ewm, null))),
                            (0, B.tZ)(c.nvN, { size: "medium", bold: !0, as: "span" }, m(gt))
                          )
                        ),
                        (0, B.tZ)(
                          c.rN7,
                          null,
                          (0, B.tZ)(
                            "div",
                            { style: { display: "flex" } },
                            (0, B.tZ)(
                              i.rU,
                              { to: p.POLICIES, style: { width: "100%" } },
                              (0, B.tZ)(qe, { icon: st || (st = (0, B.tZ)("span", null)), label: m(pt), selected: n === ke.POLICIES })
                            ),
                            it || (it = (0, B.tZ)(He, null))
                          ),
                          (0, B.tZ)(
                            i.rU,
                            { to: p.SSO },
                            (0, B.tZ)(qe, {
                              icon: ot || (ot = (0, B.tZ)("span", null)),
                              label: m(yt),
                              endAdornment:
                                w || I
                                  ? (0, B.tZ)(l.Ct, {
                                      mood: "brand",
                                      intensity: "catchy",
                                      label: m(w ? ht : bt),
                                      layout: "iconLeading",
                                      iconName: I ? "PremiumOutlined" : void 0
                                    })
                                  : null,
                              selected: n === ke.SSO
                            })
                          ),
                          (0, B.tZ)(
                            i.rU,
                            { to: p.DIRECTORY_SYNC },
                            (0, B.tZ)(qe, { icon: rt || (rt = (0, B.tZ)("span", null)), label: m(_t), selected: n === ke.DIRECTORY_SYNC })
                          ),
                          (0, B.tZ)(
                            i.rU,
                            { to: p.MASTER_PASSWORD_POLICIES },
                            (0, B.tZ)(qe, { icon: lt || (lt = (0, B.tZ)("span", null)), label: m(ut), selected: n === ke.ACCOUNT_RECOVERY })
                          ),
                          T
                            ? (0, B.tZ)(
                                i.rU,
                                { to: p.DUO },
                                (0, B.tZ)(qe, { icon: ct || (ct = (0, B.tZ)("span", null)), label: m(mt), selected: n === ke.DUO })
                              )
                            : null
                        )
                      )
                )
              ),
              t.adminAccess.hasFullAccess
                ? (0, B.tZ)(
                    "div",
                    { className: Ke.securityCategory },
                    (0, B.tZ)(
                      "div",
                      { className: Ke.categoryTitle },
                      (0, B.tZ)(
                        c.nvN,
                        { color: "ds.text.inverse.quiet", caps: !0, size: "x-small" },
                        m("webapp_sidemenu_category_maintenance")
                      )
                    ),
                    (0, B.tZ)(
                      O,
                      { requiredPermission: "FULL", collapsed: e },
                      (0, B.tZ)(
                        i.rU,
                        {
                          to: a.teamDarkWebInsightsRoutePath,
                          onClick: () => {
                            (0, P.Kz)(
                              new o.UserOpenDomainDarkWebMonitoringEvent({ accessPath: o.AccessPath.NavLeftMenuButton, isFirstVisit: y })
                            );
                          }
                        },
                        (0, B.tZ)(qe, {
                          collapsed: e,
                          icon: dt || (dt = (0, B.tZ)(l.JO, { name: "FeatureDarkWebMonitoringOutlined" })),
                          label: m("team_dashboard_dark_web_insights_heading"),
                          selected: n === Ae.$.DARK_WEB_INSIGHTS,
                          hasNotification: h
                        })
                      )
                    )
                  )
                : null
            )
          );
        };
      var vt;
      const ft = ({ isCollapsed: e }) => {
          const { translate: t } = (0, g.Z)(),
            a = e || !1;
          return (0, l.tZ)(
            c.t7v,
            { collapsed: a },
            (0, l.tZ)(
              c.QUQ,
              {
                "data-testid": "logo-header",
                sx: { height: "80px !important", borderBottomColor: "ds.border.neutral.quiet.idle !important" }
              },
              a
                ? (0, l.tZ)(
                    "div",
                    { className: Ke.collapsedLogo },
                    vt || (vt = (0, l.tZ)(c.NJ6, { color: "ds.text.inverse.catchy", height: 39, width: 39 }))
                  )
                : (0, l.tZ)(c.D1W, { color: c.vei.White, size: c.r1z.Size39, title: t("_common_dashlane_logo_title") })
            )
          );
        },
        Ct = "webapp_sidemenu_open_vault_cta",
        Zt = ({ isCollapsed: e }) => {
          const { translate: t } = (0, g.Z)(),
            { setIsVaultNavigationModalOpen: a } = (0, n.useContext)(ve);
          return (0, l.tZ)(
            "div",
            {
              sx: {
                display: "flex",
                justifyContent: "center",
                borderTop: "1px solid",
                position: "fixed",
                bottom: "0",
                borderTopColor: "ds.border.neutral.quiet.idle",
                backgroundColor: "ds.container.agnostic.inverse.standard",
                width: e ? "96px" : "256px"
              }
            },
            (0, l.tZ)(
              l.zx,
              {
                layout: e ? "iconOnly" : "iconLeading",
                "aria-label": t(Ct),
                fullsize: !e,
                sx: { margin: "20px 25px" },
                icon: "VaultOutlined",
                mood: "brand",
                intensity: "catchy",
                onClick: () => {
                  (0, j.nL)(ce.F1);
                }
              },
              t(Ct)
            )
          );
        };
      var Et, Dt;
      const Tt = () => document.documentElement.clientWidth < 1371,
        Nt = n.createContext({ navBarChildren: null, setNavBarChildren: () => {} }),
        Mt = ({ selectedTab: e, children: t, lee: a }) => {
          const [s, o] = (0, n.useState)(Tt()),
            [r, l] = (0, n.useState)(),
            { routes: c } = (0, i.Xo)(),
            d = a.permission.adminAccess,
            u = (0, D.a)(d) && e !== Ae.$.GET_STARTED,
            _ = d.hasBillingAccess || d.hasFullAccess;
          (0, n.useEffect)(() => {
            const e = (0, f.throttle)(() => {
              const e = Tt();
              e && !s ? o(!0) : !e && s && o(!1);
            }, 100);
            return window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
          }, [s]);
          const m = (0, C.kA)(a.globalState),
            p = (0, C.xO)(a.globalState),
            g = n.createElement(M, null, r, n.createElement(Ne, { lee: a })),
            y = n.createElement(ft, { isCollapsed: s }),
            h = n.createElement(St, {
              isCollapsed: s,
              permissionChecker: a.permission,
              routes: c,
              selectedTab: e,
              teamNotifications: m?.notifications,
              teamSettings: p?.details.info
            }),
            b = n.createElement(Zt, { isCollapsed: s }),
            x = { navBarChildren: r, setNavBarChildren: l },
            S = u ? Et || (Et = n.createElement(E.b, null)) : null,
            v = _ ? Dt || (Dt = n.createElement(Z.XA, null)) : null;
          return n.createElement(
            Nt.Provider,
            { value: x },
            n.createElement(
              T.dw,
              { adminAccess: d },
              n.createElement(w, { brand: y, header: g, sideNav: h, bottomButton: b, banner: S, dialog: v }, t)
            )
          );
        };
      var It = a(128510);
      const wt = () => {
        const { data: e, status: t } = (0, d.k)(It.F, "getTeamOffers", {});
        return t !== se.rq.Success ? null : e;
      };
      var kt = a(114943);
      const At = ({ offer: e, currentSeats: t = 0, additionalSeats: a = 0 }) => {
          const n = [...e.priceRanges].sort((e, t) => e.startMembers - t.startMembers),
            s = t + a;
          return n.reduce((e, t) => (t.startMembers < s && t.startMembers > e.startMembers ? t : e), n[0]);
        },
        Ot = ({ offer: e, currentSeats: t, additionalSeats: a, priceTarget: n = "price" }) =>
          At({ offer: e, currentSeats: t, additionalSeats: a })[n] / (e.duration.includes("y") ? 12 : 1),
        Lt = ({ offer: e, currentSeats: t, additionalSeats: a }) => {
          const n = At({ offer: e, currentSeats: t, additionalSeats: a }).price;
          return e.duration.includes("y") ? n : 12 * n;
        },
        zt = (e) => !!e.name.match(/_team_/u),
        jt = (e) => !!e.name.match(/_business_/u),
        Rt = (e) => (e ? e.priceRanges[1].startMembers - 1 : 0),
        Pt = () => {
          const { translate: e } = (0, g.Z)(),
            t = (0, kt.Y)(),
            a = wt();
          if (!a || t.status !== r.rq.Success) return { hasLimitedOffer: !1 };
          const n = !(0, O.NG)(t.data),
            { businessOffer: s } = a,
            i = Ot({ offer: s }),
            o = Ot({ offer: s, priceTarget: "equivalentPrice" });
          return {
            hasLimitedOffer: n && i !== o,
            translatedPrice: e.price(s.currency, i / 100, { notation: "compact" }),
            translatedEquivalentPrice: e.price(s.currency, o / 100, { notation: "compact" })
          };
        };
      var Ut, Bt, Gt, Ft;
      const qt = ({ plan: e, handleSelectClick: t, selected: a }) => {
          const { translate: n } = (0, g.Z)(),
            {
              currentPlan: s,
              limitedOffer: i,
              heading: o,
              price: r,
              equivalentPrice: d,
              planName: u,
              footer: _,
              priceDescription1: m,
              priceDescription2: p,
              features: y
            } = e;
          return (0, l.tZ)(
            c.Ejs,
            {
              flexDirection: "column",
              sx: {
                minHeight: "480px",
                display: "flex",
                flexDirection: "column",
                borderRadius: "4px",
                border: `1px solid ${s ? "transparent" : l.O9.lightTheme.ds.border.neutral.quiet.idle}`,
                flexGrow: "1",
                flexShrink: 0,
                width: "188px",
                backgroundColor: s ? l.O9.lightTheme.ds.container.expressive.neutral.supershy.hover : null,
                padding: "16px",
                gap: "24px"
              }
            },
            (0, l.tZ)(
              c.Ejs,
              { flexDirection: "column", gap: "16px" },
              (0, l.tZ)(
                c.Ejs,
                { flexDirection: "column", gap: "8px" },
                (0, l.tZ)(
                  "div",
                  { sx: { minHeight: "16px" } },
                  s ? (0, l.tZ)(l.Ct, { label: n("team_account_teamplan_changeplan_plans_plan_current") }) : null,
                  i
                    ? (0, l.tZ)(l.Ct, {
                        mood: "brand",
                        intensity: "catchy",
                        label: n("team_account_teamplan_changeplan_plans_plan_limited_offer")
                      })
                    : null
                ),
                (0, l.tZ)(c.nvN, { bold: !0, size: "medium" }, n(o.key))
              ),
              (0, l.tZ)(
                c.Ejs,
                { flexDirection: "column" },
                (0, l.tZ)(
                  c.Ejs,
                  { gap: "4px" },
                  r
                    ? (0, l.tZ)(c.X6q, { as: "p", size: "large" }, r)
                    : (0, l.tZ)(c.HoD, { size: 44, color: l.O9.lightTheme.ds.text.neutral.standard }),
                  d
                    ? (0, l.tZ)(
                        l.nv,
                        { textStyle: "ds.title.block.medium", color: "ds.text.neutral.quiet", sx: { whiteSpace: "break-spaces" } },
                        n("team_account_teamplan_changeplan_plans_previous_price"),
                        Ut || (Ut = (0, l.tZ)("br", null)),
                        (0, l.tZ)("span", { sx: { textDecoration: "line-through" } }, d)
                      )
                    : null
                ),
                (0, l.tZ)(
                  c.Ejs,
                  { flexDirection: "column", sx: { height: "48px" } },
                  (0, l.tZ)(c.nvN, { size: "x-small", color: l.O9.lightTheme.ds.text.neutral.quiet }, n(m.key, m.variables)),
                  (0, l.tZ)(c.nvN, { size: "x-small", color: l.O9.lightTheme.ds.text.neutral.quiet }, n(p.key, p.variables))
                )
              )
            ),
            a
              ? (0, l.tZ)(
                  l.zx,
                  { disabled: !0, mood: "brand", size: "small", type: "button", fullsize: !0, icon: Bt || (Bt = (0, l.tZ)(c.nQG, null)) },
                  n("team_account_teamplan_changeplan_plans_selected")
                )
              : t
              ? (0, l.tZ)(
                  l.zx,
                  { mood: "brand", size: "small", onClick: t, fullsize: !0, "data-testid": `btn-${u}-select` },
                  n("team_account_teamplan_changeplan_plans_select")
                )
              : (0, l.tZ)("div", { style: { height: "32px", width: "100%" } }),
            (0, l.tZ)(
              c.Ejs,
              { flexDirection: "column", gap: "6px" },
              y.map(({ key: e, icon: t, variables: a, loading: i }) =>
                (0, l.tZ)(
                  c.Ejs,
                  {
                    key: e,
                    sx: {
                      display: "flex",
                      alignItems: "center",
                      gap: "9px",
                      flexWrap: "nowrap",
                      strong: { color: s ? null : l.O9.lightTheme.ds.text.neutral.catchy }
                    }
                  },
                  (0, l.tZ)(
                    c.k$b,
                    { sx: { width: "10px" } },
                    "check" === t
                      ? Gt || (Gt = (0, l.tZ)(c.nQG, { size: 14 }))
                      : "add" === t
                      ? Ft || (Ft = (0, l.tZ)(c.dtP, { size: 12 }))
                      : null
                  ),
                  i
                    ? (0, l.tZ)(
                        c.k$b,
                        { sx: { display: "flex", alignItems: "center", justifyContent: "center", flexGrow: "1" } },
                        (0, l.tZ)(c.HoD, { size: 32, color: l.O9.lightTheme.ds.text.neutral.catchy })
                      )
                    : (0, l.tZ)(
                        c.nvN,
                        { color: l.O9.lightTheme.ds.text.neutral.quiet, size: "x-small" },
                        e.includes("markup") ? n.markup(e, a) : n(e, a)
                      )
                )
              )
            ),
            i ? (0, l.tZ)(l.ke, { mood: "brand", title: n("team_account_teamplan_changeplan_plans_limited_price_infobox") }) : null,
            _
              ? (0, l.tZ)(
                  c.Ejs,
                  { alignItems: "center", gap: "9px", sx: { paddingLeft: "20px" } },
                  (0, l.tZ)(
                    c.nvN,
                    { color: l.O9.lightTheme.ds.text.neutral.quiet, size: "x-small" },
                    _.key.includes("markup") ? n.markup(_.key) : n(_.key)
                  )
                )
              : null
          );
        },
        $t = ({ title: e, children: t, sx: a }) =>
          n.createElement(
            c.Zbd,
            {
              sx: (0, c.jMf)([
                {
                  display: "flex",
                  flexDirection: "column",
                  padding: "24px",
                  gap: "16px",
                  backgroundColor: c.colors.white,
                  borderRadius: "4px",
                  border: `1px solid ${c.colors.dashGreen05}`
                },
                ...(a ? [a] : [])
              ])
            },
            n.createElement(
              c.Ejs,
              { flexDirection: "column", sx: { display: "flex", flexDirection: "column", height: "100%" } },
              e ? ("string" == typeof e ? n.createElement(c.X6q, { size: "small" }, e) : e) : null,
              n.createElement(c.k$b, { flex: "1" }, t)
            )
          );
      var Vt, Wt, Ht;
      const Kt = ({ handleSelectClick: e, selected: t, businessOffer: a }) => {
        const { translate: n } = (0, g.Z)(),
          s = Pt(),
          i = a ? Ot({ offer: a }) : null;
        return (0, l.tZ)(
          c.Ejs,
          {
            flexDirection: "column",
            sx: {
              display: "flex",
              flexDirection: "column",
              width: "367px",
              padding: "18px 28px 32px",
              border: `1px solid ${c.colors.dashGreen05}`,
              borderRadius: "4px",
              gap: "18px"
            }
          },
          s.hasLimitedOffer
            ? (0, l.tZ)(l.Ct, { mood: "brand", intensity: "catchy", label: n("team_account_teamplan_changeplan_plans_plan_limited_offer") })
            : (0, l.tZ)(l.Ct, { mood: "brand", intensity: "quiet", label: n("team_account_teamplan_changeplan_plans_plan_recommended") }),
          (0, l.tZ)(
            c.Ejs,
            { fullWidth: !0, gap: "12px" },
            (0, l.tZ)(
              c.Ejs,
              { fullWidth: !0 },
              (0, l.tZ)(
                c.Ejs,
                { sx: { display: "flex", alignItems: "center", flex: 1 } },
                (0, l.tZ)(c.X6q, { size: "x-small" }, n("team_account_teamplan_changeplan_plans_business_name"))
              ),
              (0, l.tZ)(
                c.k$b,
                null,
                a?.currency && i
                  ? (0, l.tZ)(
                      c.Ejs,
                      { flexDirection: "column", alignItems: "flex-end" },
                      (0, l.tZ)(
                        c.Ejs,
                        { alignItems: "flex-end", gap: "0", flexDirection: "column" },
                        (0, l.tZ)(
                          c.nvN,
                          { size: "small" },
                          n.price(a.currency, i / 100, { notation: "compact" }),
                          " ",
                          n("team_account_teamplan_changeplan_plans_seat")
                        ),
                        s.hasLimitedOffer
                          ? (0, l.tZ)(
                              c.nvN,
                              { size: "small", color: "ds.text.neutral.quiet" },
                              n("team_account_teamplan_changeplan_plans_previous_price"),
                              " ",
                              (0, l.tZ)("span", { sx: { textDecoration: "line-through" } }, s.translatedEquivalentPrice)
                            )
                          : null
                      ),
                      (0, l.tZ)(
                        c.nvN,
                        { color: "ds.text.neutral.quiet", size: "x-small" },
                        n("team_account_teamplan_changeplan_plans_billed_anually")
                      )
                    )
                  : (0, l.tZ)(c.HoD, { size: 16, color: c.colors.black })
              )
            ),
            (0, l.tZ)("hr", { style: { width: "100%", borderTop: `1px solid ${c.colors.grey02}`, borderBottom: "0", margin: "0" } })
          ),
          (0, l.tZ)(
            c.k$b,
            { flex: "1" },
            (0, l.tZ)(
              c.Ejs,
              { flexDirection: "column", gap: "6px" },
              (0, l.tZ)(c.nvN, { color: c.colors.grey00, size: "x-small" }, n("team_account_teamplan_changeplan_plans_business_header")),
              (0, l.tZ)(
                c.Ejs,
                { alignItems: "center", gap: "9px", sx: { display: "flex", alignItems: "center", gap: "9px", marginTop: "10px" } },
                Vt || (Vt = (0, l.tZ)(c.dtP, { size: 8 })),
                (0, l.tZ)(
                  c.nvN,
                  { size: "x-small", color: c.colors.black },
                  n.markup(
                    "team_account_teamplan_changeplan_plans_business_saml_markup",
                    { ssoUrl: "https://support.dashlane.com/hc/articles/360015111019-SSO-FAQ" },
                    { linkTarget: "_blank" },
                    { color: c.colors.black }
                  )
                )
              ),
              (0, l.tZ)(
                c.Ejs,
                { alignItems: "center", gap: "9px" },
                Wt || (Wt = (0, l.tZ)(c.dtP, { size: 8 })),
                (0, l.tZ)(
                  c.nvN,
                  { size: "x-small" },
                  (0, l.tZ)(
                    c.rUS,
                    {
                      rel: "noopener noreferrer",
                      href: "https://blog.dashlane.com/how-admins-can-simplify-provisioning/",
                      target: "_blank"
                    },
                    n("team_account_teamplan_changeplan_plans_business_scim_provisioning")
                  )
                )
              ),
              (0, l.tZ)(
                c.Ejs,
                { alignItems: "center", gap: "9px" },
                Ht || (Ht = (0, l.tZ)(c.dtP, { size: 8 })),
                (0, l.tZ)(
                  c.nvN,
                  { size: "x-small", color: c.colors.black },
                  n.markup(
                    "team_account_teamplan_changeplan_plans_business_free_family_plan_markup",
                    {
                      familyPlanUrl: "https://support.dashlane.com/hc/articles/360015393479-Getting-Premium-Family-with-Dashlane-Business"
                    },
                    { linkTarget: "_blank" },
                    { color: c.colors.black }
                  )
                )
              )
            )
          ),
          s.hasLimitedOffer
            ? (0, l.tZ)(l.ke, { title: n("team_account_teamplan_changeplan_plans_limited_price_infobox"), mood: "brand" })
            : null,
          a
            ? t
              ? (0, l.tZ)(
                  c.zxk,
                  { sx: { width: "100%" }, disabled: !0, nature: "secondary", size: "small", type: "button" },
                  n("team_account_teamplan_changeplan_plans_selected")
                )
              : (0, l.tZ)(
                  c.zxk,
                  { "data-testid": "btn-business-select", sx: { width: "100%" }, size: "small", type: "button", onClick: e },
                  n("team_account_teamplan_changeplan_plans_select")
                )
            : (0, l.tZ)(c.Ejs, { justifyContent: "center", fullWidth: !0 }, (0, l.tZ)(c.HoD, { size: 30, color: c.colors.black }))
        );
      };
      var Yt;
      const Qt = [
          "team_account_teamplan_changeplan_plans_team_security_dashboard",
          "team_account_teamplan_changeplan_plans_team_policy_management",
          "team_account_teamplan_changeplan_plans_team_advanced_reporting",
          "team_account_teamplan_changeplan_plans_team_group_sharing",
          "team_account_teamplan_changeplan_plans_team_active_directory_integration",
          "team_account_teamplan_changeplan_plans_team_dark_web_insights",
          "team_account_teamplan_changeplan_plans_team_vpn_via_hotspot_shield",
          "team_account_teamplan_changeplan_plans_team_audit_logs"
        ],
        Xt = () => {
          const { translate: e } = (0, g.Z)();
          return n.createElement(
            c.Ejs,
            {
              flexDirection: "column",
              sx: {
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                height: "fit-content",
                minWidth: "223px",
                width: "fit-content",
                backgroundColor: c.colors.grey06,
                padding: "16px"
              }
            },
            n.createElement(
              c.Ejs,
              null,
              n.createElement(
                c.Ejs,
                { sx: { borderRadius: "1px", border: `1px solid ${c.colors.midGreen03}`, padding: "1px", lineHeight: "10px" } },
                n.createElement(c.j49, { size: "small" }, e("team_account_teamplan_changeplan_plans_plan_current"))
              )
            ),
            n.createElement(c.X6q, { color: c.colors.grey00, size: "x-small" }, e("team_account_teamplan_changeplan_plans_team_name")),
            " ",
            n.createElement("hr", { style: { width: "100%", borderTop: `1px solid ${c.colors.grey02}`, borderBottom: "0", margin: "0" } }),
            n.createElement(
              c.Ejs,
              { flexDirection: "column", gap: "6px" },
              Qt.map((t) =>
                n.createElement(
                  c.Ejs,
                  { key: t, alignItems: "center", gap: "9px" },
                  Yt || (Yt = n.createElement(c.nQG, { size: 8 })),
                  n.createElement(c.nvN, { color: c.colors.grey00, size: "x-small" }, e(t))
                )
              )
            )
          );
        };
      var Jt;
      const ea = ({ selectedOffer: e, handleSelection: t, teamOffers: a, currentSpaceTier: n }) => {
        const { translate: s } = (0, g.Z)(),
          i = ((e, t) => {
            const { translate: a } = (0, g.Z)(),
              n = e?.businessOffer?.currency,
              s = e?.businessOffer ? Ot({ offer: e.businessOffer }) : null,
              i = e?.teamOffer ? Ot({ offer: e.teamOffer }) : null,
              o = e?.starterOffer ? Ot({ offer: e.starterOffer }) : null,
              r = Rt(e?.starterOffer),
              l = e?.starterOffer && o ? r * o : 0;
            return {
              starter: {
                currentPlan: !0,
                planName: "starter",
                price: o && n ? a.price(n, o / 100, { notation: "compact" }) : null,
                heading: { key: "team_account_teamplan_changeplan_plans_starter_name" },
                priceDescription1: { key: "team_account_teamplan_changeplan_plans_per_seat_month" },
                priceDescription2: {
                  key: "team_account_teamplan_changeplan_plans_billed_monthly_at",
                  variables: { numberSeats: r, monthlyPrice: o && n ? a.price(n, l / 100, { notation: "compact" }) : null }
                },
                features: [
                  {
                    key: "team_account_teamplan_changeplan_plans_seats_flat_rate_markup",
                    icon: "check",
                    loading: !o,
                    variables: { numberSeats: r, monthlyPrice: o && n ? a.price(n, l / 100, { notation: "compact" }) : null }
                  },
                  { icon: "check", key: "team_account_teamplan_changeplan_plans_unlimited_passwords" },
                  { icon: "check", key: "team_account_teamplan_changeplan_plans_secure_sharing" },
                  { icon: "check", key: "team_account_teamplan_changeplan_plans_business_and_personal_spaces" },
                  { icon: "check", key: "team_account_teamplan_changeplan_plans_audit_logs" },
                  { icon: "check", key: "team_account_teamplan_changeplan_plans_dark_web_insights" }
                ],
                footer: { key: "team_account_teamplan_changeplan_plans_starter_footer_markup" }
              },
              team: {
                recommended: !t.hasLimitedOffer,
                planName: "team",
                price: i && n ? a.price(n, i / 100, { notation: "compact" }) : null,
                heading: { key: "team_account_teamplan_changeplan_plans_name_V2" },
                priceDescription1: { key: "team_account_teamplan_changeplan_plans_per_seat_month" },
                priceDescription2: { key: "team_account_teamplan_changeplan_plans_billed_anually" },
                features: [
                  { key: "team_account_teamplan_changeplan_plans_everything_in_starter_markup", icon: "check" },
                  { key: "team_account_teamplan_changeplan_plans_unlimited_seats", icon: "add" },
                  { key: "team_account_teamplan_changeplan_plans_vpn_for_wifi_protection", icon: "add" }
                ]
              },
              business: {
                planName: "business",
                price: s && n ? a.price(n, s / 100, { notation: "compact" }) : null,
                equivalentPrice: t.hasLimitedOffer && s && n ? t.translatedEquivalentPrice : null,
                limitedOffer: t.hasLimitedOffer,
                heading: { key: "team_account_teamplan_changeplan_plans_business_name_V2" },
                priceDescription1: { key: "team_account_teamplan_changeplan_plans_per_seat_month" },
                priceDescription2: { key: "team_account_teamplan_changeplan_plans_billed_anually" },
                features: [
                  { key: "team_account_teamplan_changeplan_plans_everything_in_team_markup", icon: "check" },
                  { icon: "add", key: "team_account_teamplan_changeplan_plans_sso_integration" },
                  { icon: "add", key: "team_account_teamplan_changeplan_plans_scim_provisioning" },
                  { icon: "add", key: "team_account_teamplan_changeplan_plans_free_friends_family_plan" },
                  { icon: "add", key: "team_account_teamplan_changeplan_plans_phone_support" }
                ]
              }
            };
          })(a, Pt()),
          o = n === _.lD.Starter,
          { businessOffer: r, teamOffer: d } = null != a ? a : {};
        return (0, l.tZ)(
          $t,
          { title: s("team_account_teamplan_changeplan_plans") },
          o
            ? (0, l.tZ)(
                c.Ejs,
                { sx: { height: "100%", display: "flex", gap: "16px", paddingTop: "8px" } },
                (0, l.tZ)(qt, { plan: i.starter }),
                (0, l.tZ)(qt, { plan: i.team, handleSelectClick: d ? () => t(d) : void 0, selected: !!d && e?.name === d?.name }),
                (0, l.tZ)(qt, { plan: i.business, handleSelectClick: r ? () => t(r) : void 0, selected: !!r && e?.name === r?.name })
              )
            : (0, l.tZ)(
                c.Ejs,
                { alignItems: "center", flexWrap: "unset" },
                Jt || (Jt = (0, l.tZ)(Xt, null)),
                (0, l.tZ)(Kt, { businessOffer: r, selected: !!r && e?.name === r?.name, handleSelectClick: r ? () => t(r) : void 0 })
              )
        );
      };
      var ta = a(23914);
      const aa = () =>
          n.createElement("hr", { style: { width: "100%", borderTop: `1px solid ${c.colors.grey02}`, borderBottom: "0", margin: "0" } }),
        na = ({ label: e, value: t }) =>
          (0, B.tZ)(
            c.Ejs,
            { justifyContent: "flex-end", sx: { display: "flex", justifyContent: "flexEnd", padding: "0 10px" } },
            e ? (0, B.tZ)(c.k$b, { flex: "1", sx: { display: "flex", alignItems: "center" } }, e) : null,
            t ? (0, B.tZ)(c.k$b, { sx: { display: "flex", alignItems: "center" } }, t) : null
          );
      var sa;
      const ia = ({ currency: e, costData: t, isProratedDiscountLoading: a, isTaxLoading: s, selectedOffer: i, setAdditionalSeats: o }) => {
        const { translate: r } = (0, g.Z)(),
          { loading: l, billingCountry: d } = v();
        if (l) return (0, B.tZ)(c.HoD, { color: c.colors.midGreen00 });
        const u = "US" === d ? "team_account_teamplan_changeplan_order_summary_tax" : "team_account_teamplan_vat";
        return (0, B.tZ)(
          n.Fragment,
          null,
          i && e
            ? (0, B.tZ)(
                n.Fragment,
                null,
                (0, B.tZ)(na, {
                  label: (0, B.tZ)(
                    c.nvN,
                    { bold: !0, size: "medium" },
                    r("team_account_teamplan_changeplan_order_summary_seats_total", { totalSeats: t.totalSeats })
                  ),
                  value: (0, B.tZ)(
                    c.k$b,
                    { sx: { width: "146px" } },
                    (0, B.tZ)(ta.w, { id: "test", inputWidth: "66px", label: "", minValue: 0, onChange: o, defaultValue: 0 })
                  )
                }),
                (0, B.tZ)(na, {
                  label: (0, B.tZ)(
                    c.nvN,
                    { bold: !0, size: "small" },
                    r("team_account_teamplan_changeplan_order_summary_seats_upgraded", { upgradedSeats: t.currentSeats })
                  ),
                  value: (0, B.tZ)(c.nvN, { bold: !0, size: "small" }, r.price(e, t.upgradedSeatsPrice / 100))
                }),
                t.additionalSeats
                  ? (0, B.tZ)(na, {
                      label: (0, B.tZ)(
                        c.nvN,
                        { bold: !0, size: "small" },
                        r("team_account_teamplan_changeplan_order_summary_seats_new", { newSeats: t.additionalSeats })
                      ),
                      value: (0, B.tZ)(c.nvN, { bold: !0, size: "small" }, r.price(e, t.additionalSeatsPrice / 100))
                    })
                  : null,
                sa || (sa = (0, B.tZ)(aa, null)),
                (0, B.tZ)(na, {
                  label: (0, B.tZ)(c.nvN, { bold: !0, size: "small" }, r("team_account_teamplan_changeplan_order_summary_subtotal")),
                  value: e ? (0, B.tZ)(c.nvN, { bold: !0, size: "small" }, r.price(e, t.subtotal / 100)) : null
                }),
                t?.proratedDiscount
                  ? (0, B.tZ)(na, {
                      label: (0, B.tZ)(
                        c.Ejs,
                        { alignItems: "center", gap: "5px" },
                        (0, B.tZ)(
                          c.nvN,
                          { size: "small", color: c.colors.grey00 },
                          r("team_account_teamplan_changeplan_order_summary_prorated_discount")
                        ),
                        (0, B.tZ)(
                          c.ua7,
                          { content: r("team_account_teamplan_changeplan_order_summary_prorated_discount_tooltip") },
                          (0, B.tZ)(c.uMt, { size: 16, color: c.colors.grey00 })
                        )
                      ),
                      value: a
                        ? (0, B.tZ)(c.HoD, { color: c.colors.black, size: 13 })
                        : t.proratedDiscount && e
                        ? (0, B.tZ)(c.nvN, { size: "small", color: c.colors.grey00 }, r.price(e, t.proratedDiscount / 100))
                        : null
                    })
                  : null,
                t.tax
                  ? (0, B.tZ)(na, {
                      label: (0, B.tZ)(c.nvN, { size: "small", color: c.colors.grey00 }, r(u)),
                      value: s
                        ? (0, B.tZ)(c.HoD, { color: c.colors.black, size: 13 })
                        : (0, B.tZ)(c.nvN, { size: "small", color: c.colors.grey00 }, r.price(e, t.tax / 100))
                    })
                  : null
              )
            : null
        );
      };
      var oa = a(210994),
        ra = a(241185),
        la = a(1086);
      var ca = a(740300);
      function da({ total: e, onError: t }) {
        const [a, s] = (0, n.useState)(),
          [i, o] = (0, n.useState)(!1),
          [r, l] = (0, n.useState)();
        return (
          (!e && 0 !== e) ||
            e === a ||
            (s(e),
            o(!0),
            (async () => {
              if (e && e > 0) {
                const a = await ca.C.getExpectedTaxInformation({ priceInCents: e });
                if ((o(!1), !a.success)) return void (t && t());
                l(() => a.data);
              } else o(!1), l({ expectedTaxesInCents: 0 });
            })()),
          { isLoading: i, expectedTaxInformation: r }
        );
      }
      function ua({
        selectedOffer: e,
        currentSeats: t,
        additionalSeats: a,
        discountedTeamOffers: s,
        promoCode: i,
        email: o,
        onSuccess: r,
        onError: l
      }) {
        var c, d;
        const [u, _] = (0, n.useState)(!1),
          { translate: m } = (0, g.Z)(),
          { changeTierMidcycle: p } = (0, $e.u)(la.R),
          y = !!i,
          h = !!e && jt(e),
          b = !!e && zt(e),
          x = s && e ? (h ? s.businessOffer : b ? s.teamOffer : s.starterOffer) : e,
          { isLoading: S, midCycleTierUpgradePrice: v } = (function ({ seats: e, planName: t, onError: a }) {
            const [s, i] = (0, n.useState)(0),
              [o, r] = (0, n.useState)(),
              [l, c] = (0, n.useState)(!1),
              [d, u] = (0, n.useState)(),
              { midcycleTierUpgradePrice: _ } = (0, $e.u)(la.R);
            return (
              (e !== s || (t && t !== o)) &&
                (i(e),
                r(t),
                c(!0),
                (async () => {
                  if (void 0 !== e && t) {
                    const n = await _({ numberOfSeats: e, newPlan: t });
                    if ((c(!1), n.error)) return void (a && a());
                    u(() => n.data);
                  }
                })()),
              { isLoading: l, midCycleTierUpgradePrice: d }
            );
          })({ seats: a, planName: x?.name }),
          f = x ? At({ offer: x, currentSeats: t, additionalSeats: a }) : null,
          C = null != (c = f?.equivalentPrice) ? c : 0,
          Z = null != (d = f?.price) ? d : 0,
          E = y ? C : Z,
          D = t + a,
          T = a * E,
          N = t * E,
          M = D * E,
          I = M - (void 0 !== Z ? D * Z : M),
          w = void 0 !== v?.discountAmount ? M + v?.discountAmount : void 0,
          k = w ? w - I : w,
          A = v?.nextBillingDateUnix ? (0, oa.Z)(v?.nextBillingDateUnix) : (0, ra.Z)(new Date(), 1),
          { isLoading: O, expectedTaxInformation: L } = da({ total: k }),
          z = O || void 0 === L?.expectedTaxesInCents ? 0 : L.expectedTaxesInCents,
          j = O || void 0 === L?.expectedTaxesInCents || void 0 === k ? void 0 : k + z;
        return {
          isSaving: u,
          changeTierMidCycle: async (e) => {
            if (void 0 === k || !L || !x) return void l("Error with retrieving midCycleTierUpgradePrice, tax information or target offer");
            _(() => !0);
            const t = await p({
              amountToPay: k,
              taxes: z,
              planId: x.name,
              couponCode: e || i,
              seatsToAdd: a,
              billingContactEmail: "" !== o ? o : void 0
            });
            if ((_(() => !1), t.error)) {
              const e = ((e) => {
                switch (e) {
                  case "PaymentMeanIsNotCreditCard":
                    return "The team does not have a credit card payment mean";
                  case "CurrentPlanStartDateInFuture":
                    return "The current plan start date must be in the past";
                  case "ChangeTierMidCycleError":
                    return "Team is ineligible to change tier mid cycle";
                  case "PaymentMeanIsNotInvoice":
                    return "Team Payment mean is not invoice";
                  case "ChangeTierAmountTooExpensive":
                    return "The amount to pay entered is more than 10 times the recommended price";
                  case "ErrorCalculatingTierChange":
                    return "Unable to calculate prorated discount for mid cycle tier change";
                  case "InsufficientAmount":
                    return "Credit Card payment must be zero or more than 50 cents";
                  case "AssignedPlanSameTierAsCurrentPlan":
                    return "The assigned plan tier cannot be the same as the team's current plan";
                  case "SalesTaxMismatch":
                    return "Tax amount sent does not correspond to the supposed taxed amount";
                  case "NotBillingAdmin":
                    return "User is not a billing admin";
                  default:
                    return m("team_account_teamplan_changeplan_error_generic");
                }
              })(t.error.tag);
              l(e);
            } else r();
          },
          isProratedDiscountLoading: S,
          isTaxLoading: O,
          costData: {
            seatPrice: E,
            additionalSeats: a,
            currentSeats: t,
            totalSeats: D,
            upgradedSeatsPrice: N,
            additionalSeatsPrice: T,
            subtotal: M,
            proratedDiscount: v?.discountAmount,
            tax: z,
            pretaxTotal: w,
            promoPrice: I,
            total: j,
            renewalPrice: M,
            renewalDate: A
          }
        };
      }
      const _a = ({ selectedOffer: e, hasPromo: t, currentSeats: a, additionalSeats: n, planChangeStep: s }) => {
          const i = (0, kt.Y)(),
            l = i.status === r.rq.Success && "2022_team_starter_tier" === i.data.planName ? o.B2bPlanTier.StarterTeam : o.B2bPlanTier.Team;
          return {
            logChangePlanEvent: (i) => {
              const r = i || e,
                c = r ? (jt(r) ? o.B2bPlanTier.Business : o.B2bPlanTier.Team) : l;
              (0, P.Kz)(
                new o.UserChangeTeamPlanTierEvent({
                  currentBillingPlanTier: l,
                  currentPlanPaidSeatsCount: a,
                  hasPromo: t,
                  nextBillingPlanTier: c,
                  planChangeStep: s,
                  seatAddedCount: n
                })
              );
            }
          };
        },
        ma = ({ selectedOffer: e, costData: t }) => {
          const { translate: a } = (0, g.Z)();
          return (0, B.tZ)(
            n.Fragment,
            null,
            e
              ? (0, B.tZ)(
                  n.Fragment,
                  null,
                  (0, B.tZ)(na, {
                    label: (0, B.tZ)(
                      c.Ejs,
                      { gap: "5px" },
                      (0, B.tZ)(
                        c.nvN,
                        { bold: !0, size: "medium" },
                        a("team_account_teamplan_changeplan_order_summary_seats_total", { totalSeats: t.totalSeats })
                      ),
                      (0, B.tZ)(
                        c.nvN,
                        { bold: !0, size: "medium" },
                        "(",
                        a("team_account_teamplan_changeplan_order_summary_seats_new", { newSeats: t.additionalSeats }),
                        ")"
                      )
                    )
                  }),
                  (0, B.tZ)(c.vDh, {
                    severity: "subtle",
                    size: "small",
                    title: a("team_account_teamplan_changeplan_order_summary_invoice_info")
                  })
                )
              : null,
            (0, B.tZ)(
              c.zxk,
              {
                "data-testid": "btn-request-a-quote",
                size: "large",
                sx: { width: "100%" },
                type: "button",
                disabled: !e,
                onClick: () => {
                  window.open(ce.vS, "_blank");
                }
              },
              a("team_account_teamplan_changeplan_order_summary_request_an_upgrade")
            )
          );
        };
      var pa = a(616782);
      const ga = ({ selectedOffer: e, currency: t, costData: a }) => {
          const { translate: n } = (0, g.Z)(),
            { isLoading: s, expectedTaxInformation: i } = da({ total: a.renewalPrice }),
            { loading: r, billingCountry: l } = v();
          if (r) return (0, B.tZ)(c.HoD, { color: c.colors.midGreen00 });
          const d =
              "US" === l
                ? "team_account_teamplan_changeplan_order_summary_footer_renewal"
                : "team_account_teamplan_changeplan_order_summary_renewal_vat",
            u = !s && void 0 !== i?.expectedTaxesInCents && i?.expectedTaxesInCents > 0,
            _ = u && i?.expectedTaxesInCents ? a.renewalPrice + i.expectedTaxesInCents : void 0,
            m = u ? d : "team_account_teamplan_changeplan_order_summary_footer_header",
            p = u ? _ : a.renewalPrice;
          return (0, B.tZ)(
            "div",
            { sx: { display: "flex", flexDirection: "column", gap: "12px", padding: "16px", backgroundColor: c.colors.grey06 } },
            e && t && p
              ? (0, B.tZ)(
                  c.nvN,
                  { bold: !0, size: "small", color: c.colors.grey00 },
                  n(m, { price: n.price(t, p / 100), date: n.shortDate(a.renewalDate, pa.qG.ll) })
                )
              : null,
            (0, B.tZ)(
              c.nvN,
              { size: "x-small", color: c.colors.grey00 },
              n.markup(
                "team_account_teamplan_changeplan_order_summary_footer_markup",
                { privacyPolicyUrl: ce.Bz, termsUrl: ce.sz },
                {
                  linkTarget: "_blank",
                  onLinkClicked: (e) => {
                    e === ce.Bz
                      ? (0, P.Kz)(
                          new o.UserCallToActionEvent({
                            callToActionList: [o.CallToAction.PrivacyPolicy],
                            chosenAction: o.CallToAction.PrivacyPolicy,
                            hasChosenNoAction: !1
                          })
                        )
                      : e === ce.sz &&
                        (0, P.Kz)(
                          new o.UserCallToActionEvent({
                            callToActionList: [o.CallToAction.TermsOfService],
                            chosenAction: o.CallToAction.TermsOfService,
                            hasChosenNoAction: !1
                          })
                        );
                  }
                }
              )
            )
          );
        },
        ya = {
          display: "flex",
          alignItems: "center",
          padding: "12px 10px",
          justifyContent: "space-between",
          backgroundColor: c.colors.dashGreen06
        },
        ha = ({ selectedOffer: e, currency: t, costData: a }) => {
          const { translate: n } = (0, g.Z)();
          return e && t
            ? (0, B.tZ)(
                "div",
                { sx: ya, "data-testid": "order-summary-plan-name" },
                (0, B.tZ)(
                  c.nvN,
                  { bold: !0, color: c.colors.dashGreen01 },
                  jt(e) ? n("team_account_teamplan_changeplan_plans_business_name") : n("team_account_teamplan_changeplan_plans_team_name")
                ),
                (0, B.tZ)(
                  c.nvN,
                  { color: c.colors.dashGreen01 },
                  n("team_account_teamplan_changeplan_order_summary_seat_year", {
                    cost: n.price(t, a.seatPrice / 100, { notation: "compact" })
                  })
                )
              )
            : (0, B.tZ)(
                "div",
                { sx: ya },
                (0, B.tZ)(c.nvN, { color: c.colors.dashGreen01 }, n("team_account_teamplan_changeplan_order_summary_select_plan"))
              );
        };
      var ba;
      const xa = ({ onDismiss: e, value: t, buttonProps: a }) =>
        (0, B.tZ)(
          c.Ejs,
          { alignItems: "center", gap: "6px" },
          (0, B.tZ)(
            c.Ejs,
            { sx: { backgroundColor: c.colors.midGreen05, padding: "4px 8px", borderRadius: "4px" } },
            "string" == typeof t ? (0, B.tZ)(c.nvN, { size: "x-small" }, t) : { value: t }
          ),
          e
            ? (0, B.tZ)(
                c.zxk,
                { size: "small", type: "button", nature: "ghost", onClick: e, sx: { padding: 0, minWidth: 0 }, ...a },
                ba || (ba = (0, B.tZ)(c.Two, { size: 18 }))
              )
            : null
        );
      var Sa, va;
      const fa = ({
        currency: e,
        promoPrice: t,
        promoCode: a,
        hasError: n,
        isLoading: s,
        showInput: i,
        setShowInput: o,
        onSubmit: r,
        onCancel: l,
        onChange: d,
        onClear: u
      }) => {
        const { translate: _ } = (0, g.Z)();
        return i
          ? (0, B.tZ)(
              c.Ejs,
              { gap: "6px", fullWidth: !0, sx: { padding: "0 10px" } },
              (0, B.tZ)(
                c.k$b,
                { flex: "1" },
                (0, B.tZ)(c.oil, {
                  fullWidth: !0,
                  value: a,
                  placeholder: _("team_account_teamplan_changeplan_order_summary_promo_code_cta"),
                  feedbackText: n ? _("team_account_teamplan_changeplan_order_summary_promo_code_error") : null,
                  feedbackType: n ? "error" : void 0,
                  onChange: d ? (e) => d(e?.target?.value) : void 0
                })
              ),
              (0, B.tZ)(
                c.zxk,
                {
                  disabled: s,
                  "data-testid": "promo_code_button_submit",
                  type: "button",
                  nature: "secondary",
                  onClick: async () => {
                    r && (await r());
                  }
                },
                s ? (0, B.tZ)(c.HoD, { size: 20, color: c.colors.black }) : Sa || (Sa = (0, B.tZ)(c.nQG, { size: 20 }))
              ),
              (0, B.tZ)(
                c.zxk,
                {
                  "data-testid": "promo_code_button_cancel",
                  type: "button",
                  nature: "ghost",
                  onClick: () => {
                    l && l();
                  }
                },
                va || (va = (0, B.tZ)(c.Two, { size: 20 }))
              )
            )
          : a
          ? (0, B.tZ)(
              c.Ejs,
              { gap: "4px", fullWidth: !0, alignItems: "center", justifyContent: "space-between", sx: { padding: "0 10px" } },
              (0, B.tZ)(
                c.Ejs,
                { sx: { display: "flex", alignItems: "center", gap: "4px" } },
                (0, B.tZ)(c.nvN, { size: "small", color: c.colors.black }, _("team_account_teamplan_changeplan_order_summary_promo_code")),
                (0, B.tZ)(xa, { value: a, onDismiss: u, buttonProps: { "data-testid": "promo_code_button_clear" } })
              ),
              (0, B.tZ)(
                c.k$b,
                null,
                t && e ? (0, B.tZ)(c.nvN, { size: "small", color: c.colors.black }, _.price(e, ((e) => (e ? -e / 100 : 0))(t))) : null
              )
            )
          : (0, B.tZ)(
              c.Ejs,
              { sx: { padding: "0 10px" } },
              (0, B.tZ)(
                c.zxk,
                {
                  "data-testid": "promo_code_button_enter",
                  size: "small",
                  type: "button",
                  nature: "ghost",
                  onClick: () => (o ? o(!0) : null),
                  sx: { margin: 0, padding: 0, minWidth: 0 },
                  "aria-label": _("team_account_teamplan_changeplan_order_summary_promo_code_cta")
                },
                (0, B.tZ)(
                  c.rUS,
                  null,
                  (0, B.tZ)(
                    c.nvN,
                    { size: "x-small", color: c.colors.midGreen00 },
                    _("team_account_teamplan_changeplan_order_summary_promo_code_cta")
                  )
                )
              )
            );
      };
      var Ca, Za;
      const Ea = ({
        currency: e,
        currentSeats: t,
        additionalSeats: a,
        selectedOffer: s,
        email: i,
        emailValid: r,
        onSuccess: l,
        onError: u,
        setAdditionalSeats: p,
        setOrderSummaryData: y
      }) => {
        const { translate: h } = (0, g.Z)(),
          b = (0, m.s)(),
          x = b?.billingType === _.qo.Invoice,
          {
            promoCode: S,
            currentPromoCode: v,
            showInput: f,
            isLoading: C,
            setShowInput: Z,
            setCurrentPromoCode: E,
            validatePromoCode: D,
            clearPromoCode: T,
            cancelPromoCode: N,
            hasError: M,
            teamOffers: I
          } = (function ({ selectedOffer: e, currentSeats: t, additionalSeats: a }) {
            const [s, i] = (0, n.useState)(""),
              [o, r] = (0, n.useState)(""),
              [l, c] = (0, n.useState)(),
              [u, _] = (0, n.useState)(!1),
              [m, p] = (0, n.useState)(!1),
              [g, y] = (0, n.useState)(!1),
              [h, b] = (0, n.useState)(a),
              [x, S] = (0, n.useState)(e),
              { data: v, status: f } = (0, d.k)(It.F, "getTeamOffers", { couponCode: o }),
              C = (0, n.useCallback)(() => {
                if (!o) return !1;
                if (f === se.rq.Error && !v) return y(!1), _(!0), p(!0), !1;
                if (f === se.rq.Loading && !v) return y(!0), !1;
                const n = At({ offer: v.businessOffer, currentSeats: t, additionalSeats: a }),
                  s = n.price !== n.equivalentPrice,
                  r = At({ offer: v.teamOffer, currentSeats: t, additionalSeats: a }),
                  l = r.price !== r.equivalentPrice;
                return (e && jt(e) ? s : l) ? (y(!1), i(o), c(() => v), _(!1), p(!1), !0) : (y(!1), _(!0), p(!0), !1);
              }, [o, f, v, t, a, e]);
            return (
              (0, n.useEffect)(() => {
                a !== h && (b(a), C());
              }, [h, a, C]),
              (0, n.useEffect)(() => {
                e?.name !== x?.name && (S(e), C());
              }, [e, x, C]),
              {
                promoCode: s,
                currentPromoCode: o,
                setCurrentPromoCode: r,
                validatePromoCode: C,
                clearPromoCode: () => {
                  i(""), r(""), c(void 0), _(!1);
                },
                cancelPromoCode: () => {
                  u ? (i(""), r("")) : r(s), _(!1), p(!1);
                },
                showInput: m,
                setShowInput: p,
                hasError: u,
                teamOffers: l,
                isLoading: g,
                setIsLoading: y
              }
            );
          })({ selectedOffer: s, additionalSeats: a, currentSeats: t }),
          {
            isSaving: w,
            costData: k,
            changeTierMidCycle: A,
            isTaxLoading: O,
            isProratedDiscountLoading: L
          } = ua({
            selectedOffer: s,
            discountedTeamOffers: I,
            currentSeats: t,
            additionalSeats: a,
            promoCode: S,
            email: i,
            onSuccess: l,
            onError: u
          }),
          { logChangePlanEvent: z } = _a({
            selectedOffer: s,
            hasPromo: !!S,
            currentSeats: t,
            additionalSeats: a,
            planChangeStep: o.PlanChangeStep.ConfirmAndPayCta
          });
        return b
          ? (0, B.tZ)(
              $t,
              { title: h("team_account_teamplan_changeplan_order_summary_header") },
              (0, B.tZ)(
                c.Ejs,
                { flexDirection: "column", gap: "16px", sx: { marginTop: "16px" } },
                (0, B.tZ)(ha, { selectedOffer: s, currency: e, costData: k }),
                x
                  ? (0, B.tZ)(ma, { selectedOffer: s, costData: k })
                  : (0, B.tZ)(
                      n.Fragment,
                      null,
                      (0, B.tZ)(ia, {
                        currency: e,
                        costData: k,
                        isProratedDiscountLoading: L,
                        isTaxLoading: O,
                        selectedOffer: s,
                        setAdditionalSeats: p
                      }),
                      s && e
                        ? (0, B.tZ)(fa, {
                            currency: e,
                            promoCode: v,
                            promoPrice: k?.promoPrice,
                            hasError: M,
                            showInput: f,
                            isLoading: C,
                            setShowInput: Z,
                            onSubmit: D,
                            onChange: E,
                            onCancel: N,
                            onClear: T
                          })
                        : null,
                      Ca || (Ca = (0, B.tZ)(aa, null)),
                      (0, B.tZ)(na, {
                        label: (0, B.tZ)(
                          c.nvN,
                          { bold: !0, size: "large" },
                          h("team_account_teamplan_changeplan_order_summary_due_today_V2")
                        ),
                        value:
                          !e || O || L
                            ? (0, B.tZ)(c.HoD, { size: 23, color: c.colors.black })
                            : s
                            ? k.total
                              ? (0, B.tZ)(c.nvN, { bold: !0, size: "large" }, h.price(e, k.total / 100))
                              : null
                            : (0, B.tZ)(c.nvN, { bold: !0, size: "large" }, `${h.priceSymbol(e)}--.--`)
                      }),
                      w
                        ? (0, B.tZ)(
                            c.zxk,
                            { size: "large", sx: { width: "100%" }, type: "button", disabled: !0 },
                            Za || (Za = (0, B.tZ)(c.HoD, null))
                          )
                        : (0, B.tZ)(
                            c.zxk,
                            {
                              "data-testid": "btn-confirm-and-pay",
                              size: "large",
                              sx: { width: "100%" },
                              type: "button",
                              disabled: !s || !r || C,
                              onClick: async () => {
                                ((!M && S === v) || (await D())) && (z(), A(v), y(k));
                              }
                            },
                            h("team_account_teamplan_changeplan_order_summary_confirm_and_pay")
                          )
                    ),
                (0, B.tZ)(ga, { selectedOffer: s, currency: e, costData: k })
              )
            )
          : null;
      };
      var Da,
        Ta = a(448827),
        Na = a(210051);
      const Ma = ({ email: e, emailValid: t, setEmail: a, setEmailValid: s }) => {
          const { translate: i } = (0, g.Z)(),
            o = (0, Ta.G)(),
            [r, l] = n.useState(!1);
          return o?.email
            ? n.createElement(
                $t,
                { title: i("team_account_teamplan_changeplan_billing_contact_header") },
                Da || (Da = n.createElement("br", null)),
                n.createElement(
                  c.nvN,
                  { size: "medium", color: "ds.text.neutral.quiet", className: "automation-tests-tac-billing" },
                  i.markup("team_account_teamplan_changeplan_billing_contact_copy_markup", { billContactEmail: o.email })
                ),
                n.createElement(
                  "div",
                  { style: { margin: "20px 0px" } },
                  n.createElement(c.XZJ, {
                    "data-testid": "additionalEmailCheckbox",
                    label: i("team_account_teamplan_changeplan_billing_contact_checkbox_label"),
                    checked: r,
                    onChange: (e) => {
                      a(""), s(!0), l(e.currentTarget.checked);
                    }
                  })
                ),
                r
                  ? n.createElement(c.oil, {
                      "data-testid": "additionalEmailInput",
                      type: "text",
                      onChange: (e) => a(e.currentTarget.value),
                      onBlur: (e) =>
                        ((e) => {
                          (0, Na.vV)(e.currentTarget.value) ? s(!0) : s(!1);
                        })(e),
                      value: e,
                      feedbackType: t ? void 0 : "error",
                      feedbackText: t ? "" : i("team_account_teamplan_changeplan_billing_contact_input_warning"),
                      autoFocus: !0
                    })
                  : null
              )
            : null;
        },
        Ia = () => {
          const { translate: e } = (0, g.Z)();
          return n.createElement(
            $t,
            { title: n.createElement(c.nvN, { bold: !0, size: "large" }, e("team_account_teamplan_changeplan_questions_header")) },
            n.createElement(
              c.nvN,
              { color: c.colors.grey00, size: "small", style: { marginBottom: "10px" } },
              e.markup(
                "team_account_teamplan_changeplan_questions_help_center_markup",
                { helpCenterUrl: ce.Vr },
                {
                  linkTarget: "_blank",
                  onLinkClicked: () => {
                    (0, P.Kz)(new o.UserOpenHelpCenterEvent({ helpCenterArticleCta: o.HelpCenterArticleCta.HelpCenter }));
                  }
                }
              )
            ),
            n.createElement(
              c.nvN,
              { size: "small", color: c.colors.grey00 },
              e.markup(
                "team_account_teamplan_changeplan_questions_customer_support_markup",
                { customerSupportUrl: ce.to },
                {
                  linkTarget: "_blank",
                  onLinkClicked: () => {
                    (0, P.Kz)(
                      new o.UserCallToActionEvent({
                        callToActionList: [o.CallToAction.ContactCustomerSupport],
                        chosenAction: o.CallToAction.ContactCustomerSupport,
                        hasChosenNoAction: !1
                      })
                    );
                  }
                }
              )
            )
          );
        };
      var wa, ka, Aa, Oa, La, za;
      const ja = ({ targetPlan: e }) => {
        const { translate: t } = (0, g.Z)(),
          { data: a } = (({ targetPlan: e }) => {
            const { routes: t } = (0, i.Xo)(),
              a = {
                DIRECTORY_SYNC: `${t.teamSettingsRoutePath}${s.B9.DIRECTORY_SYNC}`,
                POLICIES: `${t.teamSettingsRoutePath}${s.B9.POLICIES}`,
                SSO: `${t.teamSettingsRoutePath}${s.B9.SSO}`
              };
            return {
              data: {
                team: {
                  header: "team_account_teamplan_changeplan_success_team_header",
                  description: "team_account_teamplan_changeplan_success_team_description",
                  alert: "team_account_teamplan_changeplan_success_team_alert",
                  features: [
                    {
                      header: "team_account_teamplan_changeplan_success_features_vpn_header",
                      description: "team_account_teamplan_changeplan_success_features_vpn_description",
                      icon: wa || (wa = (0, l.tZ)(c.Qut, { size: 24 })),
                      actions: [
                        {
                          mood: "brand",
                          intensity: "catchy",
                          content: "team_account_teamplan_changeplan_success_features_actions_turn_on_vpn_access",
                          link: a.POLICIES
                        },
                        {
                          external: !0,
                          mood: "neutral",
                          intensity: "quiet",
                          content: "team_account_teamplan_changeplan_success_features_actions_see_setup_guide",
                          link: "https://support.dashlane.com/hc/articles/360000037900#title1"
                        }
                      ]
                    },
                    {
                      header: "team_account_teamplan_changeplan_success_features_protection_header",
                      description: "team_account_teamplan_changeplan_success_features_protection_description",
                      icon: ka || (ka = (0, l.tZ)(c.c6E, { size: 24 })),
                      actions: [
                        {
                          mood: "brand",
                          intensity: "catchy",
                          content: "team_account_teamplan_changeplan_success_features_actions_add_seats",
                          link: `${t.teamAccountRoutePath}?showSeatsDialog=true`
                        }
                      ]
                    }
                  ]
                },
                business: {
                  header: "team_account_teamplan_changeplan_success_business_header",
                  description: "team_account_teamplan_changeplan_success_business_description",
                  alert: "team_account_teamplan_changeplan_success_business_alert",
                  features: [
                    {
                      header: "team_account_teamplan_changeplan_success_sso_header",
                      description: "team_account_teamplan_changeplan_success_sso_copy",
                      icon: Aa || (Aa = (0, l.tZ)(c.oEX, { size: 24 })),
                      actions: [
                        {
                          mood: "brand",
                          intensity: "catchy",
                          content: "team_account_teamplan_changeplan_success_features_actions_start_setup",
                          link: a.SSO
                        },
                        {
                          external: !0,
                          mood: "neutral",
                          intensity: "quiet",
                          content: "team_account_teamplan_changeplan_success_features_actions_see_setup_guide",
                          link: "https://support.dashlane.com/hc/articles/360015973719-Set-up-SSO-and-SCIM-with-Azure-AD"
                        }
                      ]
                    },
                    {
                      header: "team_account_teamplan_changeplan_success_features_scim_header",
                      description: "team_account_teamplan_changeplan_success_features_scim_description",
                      icon: Oa || (Oa = (0, l.tZ)(c.kpp, { size: 24 })),
                      actions: [
                        {
                          mood: "brand",
                          intensity: "catchy",
                          content: "team_account_teamplan_changeplan_success_features_actions_start_setup",
                          link: a.DIRECTORY_SYNC
                        },
                        {
                          external: !0,
                          mood: "neutral",
                          intensity: "quiet",
                          content: "team_account_teamplan_changeplan_success_features_actions_see_setup_guide",
                          link: "https://support.dashlane.com/hc/articles/360015973719#h_01FTXPSRCV3CY1QVY1B5S5TD0J"
                        }
                      ]
                    },
                    {
                      header: "team_account_teamplan_changeplan_success_features_friends_and_family_header",
                      description: "team_account_teamplan_changeplan_success_features_friends_and_family_description",
                      icon: La || (La = (0, l.tZ)(c.c6E, { size: 24 })),
                      actions: [
                        {
                          external: !0,
                          mood: "brand",
                          intensity: "catchy",
                          content: "team_account_teamplan_changeplan_success_features_actions_learn_more",
                          link: "https://www.dashlane.com/plans/family"
                        }
                      ]
                    },
                    {
                      header: "team_account_teamplan_changeplan_success_features_phone_support_header",
                      description: "team_account_teamplan_changeplan_success_features_phone_support_description",
                      icon: za || (za = (0, l.tZ)(c.qWc, { size: 24 })),
                      actions: [
                        {
                          external: !0,
                          mood: "brand",
                          intensity: "catchy",
                          content: "team_account_teamplan_changeplan_success_features_actions_schedule_a_call",
                          link: "https://calendly.com/dashlane-support/call_back_form",
                          logEvent: new o.UserCallToActionEvent({
                            callToActionList: [o.CallToAction.ContactPhoneSupport],
                            chosenAction: o.CallToAction.ContactPhoneSupport,
                            hasChosenNoAction: !1
                          })
                        }
                      ]
                    }
                  ]
                }
              }[e]
            };
          })({ targetPlan: e }),
          { alert: r, show: d } = (0, c.VYq)({ message: t(a.alert), severity: c.BLW.SUCCESS, size: c.k3y.SMALL, dismissDelay: 5e3 });
        return (
          (0, n.useEffect)(() => {
            d();
          }, []),
          (0, l.tZ)(
            n.Fragment,
            null,
            (0, l.tZ)(
              "div",
              {
                style: { bottom: "12px", position: "absolute", marginLeft: "auto", marginRight: "auto", left: 0, right: 0, width: "600px" }
              },
              r
            ),
            (0, l.tZ)(
              $t,
              { title: t(a.header), sx: { width: "632px", padding: "32px" } },
              (0, l.tZ)(
                "div",
                { style: { marginTop: "8px" } },
                (0, l.tZ)(c.nvN, { size: "medium", color: l.O9.lightTheme.ds.text.neutral.quiet }, t(a.description))
              ),
              (0, l.tZ)(
                c.Ejs,
                {
                  sx: {
                    marginTop: "32px",
                    display: "flex",
                    flexDirection: "column",
                    borderBottom: `1px solid ${l.O9.lightTheme.ds.border.neutral.quiet.idle}`
                  }
                },
                a.features.map((e) =>
                  (0, l.tZ)(
                    c.Ejs,
                    {
                      key: e.header,
                      flexDirection: "column",
                      sx: {
                        display: "flex",
                        flexDirection: "column",
                        borderTop: `1px solid ${l.O9.lightTheme.ds.border.neutral.quiet.idle}`,
                        padding: "32px 0"
                      }
                    },
                    (0, l.tZ)(
                      c.Ejs,
                      { flexDirection: "row", gap: "16px", flexWrap: "nowrap" },
                      (0, l.tZ)(
                        "div",
                        {
                          style: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                            width: "40px",
                            height: "40px",
                            borderRadius: "8px",
                            backgroundColor: l.O9.lightTheme.ds.container.expressive.brand.quiet.idle
                          }
                        },
                        e.icon
                      ),
                      (0, l.tZ)(
                        c.Ejs,
                        { flexDirection: "column", gap: "8px" },
                        (0, l.tZ)(c.nvN, { bold: !0, color: l.O9.lightTheme.ds.text.neutral.catchy }, t(e.header)),
                        (0, l.tZ)(c.nvN, { size: "x-small", color: l.O9.lightTheme.ds.text.neutral.quiet }, t(e.description)),
                        (0, l.tZ)(
                          c.Ejs,
                          { gap: "8px" },
                          e.actions.map((e) =>
                            e.external
                              ? (0, l.tZ)(
                                  "a",
                                  { href: e.link, key: e.content, target: "_blank", rel: "noopener noreferrer" },
                                  (0, l.tZ)(
                                    l.zx,
                                    {
                                      mood: e.mood,
                                      intensity: e.intensity,
                                      size: "small",
                                      type: "button",
                                      onClick: () => {
                                        e.logEvent && (0, P.Kz)(e.logEvent);
                                      }
                                    },
                                    t(e.content)
                                  )
                                )
                              : (0, l.tZ)(
                                  i.rU,
                                  { to: e.link, key: e.content },
                                  (0, l.tZ)(l.zx, { mood: e.mood, intensity: e.intensity, size: "small", type: "button" }, t(e.content))
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
      var Ra;
      const Pa = ({ currentSeats: e, teamOffers: t }) => {
        const { translate: a } = (0, g.Z)(),
          n = (0, kt.Y)(),
          s = n.status === r.rq.Success && (0, O.f1)(n.data),
          i = n.status === r.rq.Success && (0, O.pq)(n.data),
          o = n.status === r.rq.Success && (0, O.NG)(n.data),
          l = t?.businessOffer?.currency,
          d = t?.businessOffer ? Lt({ offer: t.businessOffer }) : null,
          u = t?.teamOffer ? Lt({ offer: t.teamOffer }) : null,
          _ = t?.starterOffer ? Lt({ offer: t.starterOffer }) : null,
          m = Rt(t?.starterOffer),
          p =
            s && _ && l
              ? a.price(l, (_ * m) / 100, { notation: "compact" })
              : i && u && l
              ? a.price(l, (u * e) / 100, { notation: "compact" })
              : o && d && l
              ? a.price(l, (d * e) / 100, { notation: "compact" })
              : null;
        return (0, B.tZ)(
          $t,
          { title: a("team_account_teamplan_changeplan_current_plan_header") },
          (0, B.tZ)(
            c.Ejs,
            { flexDirection: "column", gap: "16px", sx: { marginTop: "16px" } },
            (0, B.tZ)(
              "div",
              {
                sx: {
                  display: "flex",
                  alignItems: "center",
                  padding: "12px 10px",
                  justifyContent: "space-between",
                  backgroundColor: "ds.container.agnostic.neutral.quiet"
                }
              },
              (0, B.tZ)(
                c.nvN,
                { bold: !0, color: "ds.text.neutral.standard" },
                s
                  ? a("team_account_teamplan_changeplan_current_plan_starter")
                  : i
                  ? a("manage_subscription_plan_name_dashlane_team")
                  : o
                  ? a("manage_subscription_plan_name_dashlane_business")
                  : Ra || (Ra = (0, B.tZ)(c.HoD, { size: 30, color: "ds.text.neutral.standard" }))
              ),
              (0, B.tZ)(
                c.nvN,
                { color: "ds.text.neutral.standard" },
                p ? a("team_account_teamplan_changeplan_current_plan_per_year", { cost: p }) : null
              )
            )
          )
        );
      };
      var Ua,
        Ba,
        Ga = a(307973);
      const Fa = ({ currency: e, selectedOffer: t, costData: a }) => {
          const { translate: s } = (0, g.Z)(),
            { loading: i, billingCountry: o } = v();
          if (i) return n.createElement(c.HoD, { color: c.colors.midGreen00 });
          const r = "US" === o ? "team_account_teamplan_changeplan_order_summary_tax" : "team_account_teamplan_vat";
          return n.createElement(
            c.Ejs,
            {
              flexDirection: "column",
              gap: "32px",
              sx: {
                borderStyle: "solid",
                borderColor: "ds.border.neutral.quiet.idle",
                borderWidth: "1px",
                borderRadius: "4px",
                backgroundColor: "ds.container.agnostic.neutral.supershy",
                padding: "24px"
              }
            },
            n.createElement(na, {
              label: n.createElement(c.X6q, { size: "small" }, s("team_account_teamplan_changeplan_order_summary_header")),
              value: n.createElement(c.nvN, { color: "ds.text.neutral.quiet" }, (0, Ga.Z)(new Date(), "MM/dd/yyyy"))
            }),
            n.createElement(
              c.Ejs,
              { flexDirection: "column", gap: "16px", sx: { padding: "32px 0" } },
              n.createElement(ha, { selectedOffer: t, currency: e, costData: a })
            ),
            n.createElement(
              c.Ejs,
              { flexDirection: "column", gap: "16px" },
              n.createElement(
                c.nvN,
                { size: "small", color: "ds.text.neutral.catchy", sx: { padding: "0 10px", fontWeight: "light" } },
                s("team_account_teamplan_changeplan_order_summary_seats_total", { totalSeats: a.totalSeats })
              ),
              n.createElement(na, {
                label: n.createElement(
                  c.nvN,
                  { size: "small", color: "ds.text.neutral.standard" },
                  s("team_account_teamplan_changeplan_order_summary_subtotal")
                ),
                value: e ? n.createElement(c.nvN, { size: "small", color: "ds.text.neutral.standard" }, s.price(e, a.subtotal / 100)) : null
              }),
              a.tax && e
                ? n.createElement(na, {
                    label: n.createElement(c.nvN, { size: "small", color: "ds.text.neutral.quiet" }, s(r)),
                    value: n.createElement(c.nvN, { size: "small", color: "ds.text.neutral.quiet" }, s.price(e, a.tax / 100))
                  })
                : null,
              a?.proratedDiscount
                ? n.createElement(na, {
                    label: n.createElement(
                      c.Ejs,
                      { alignItems: "center", gap: "5px" },
                      n.createElement(
                        c.nvN,
                        { size: "small", color: "ds.text.neutral.quiet" },
                        s("team_account_teamplan_changeplan_order_summary_prorated_discount")
                      ),
                      n.createElement(
                        c.ua7,
                        { content: s("team_account_teamplan_changeplan_order_summary_prorated_discount_tooltip") },
                        Ua || (Ua = n.createElement(c.uMt, { size: 16, color: "ds.text.neutral.quiet" }))
                      )
                    ),
                    value: e
                      ? n.createElement(c.nvN, { size: "small", color: "ds.text.neutral.quiet" }, s.price(e, a.proratedDiscount / 100))
                      : null
                  })
                : null,
              a?.promoPrice
                ? n.createElement(na, {
                    label: n.createElement(
                      c.nvN,
                      { size: "small", color: "ds.text.neutral.quiet" },
                      s("team_account_teamplan_upgrade_premium_coupon")
                    ),
                    value: e
                      ? n.createElement(c.nvN, { size: "small", color: "ds.text.neutral.quiet" }, "-", s.price(e, a.promoPrice / 100))
                      : null
                  })
                : null,
              Ba || (Ba = n.createElement(aa, null)),
              a?.total
                ? n.createElement(na, {
                    label: n.createElement(c.nvN, { bold: !0, size: "large" }, s("team_account_teamplan_total")),
                    value: e ? n.createElement(c.nvN, { bold: !0, size: "large" }, s.price(e, a.total / 100)) : null
                  })
                : null
            )
          );
        },
        qa = () => {
          const { translate: e } = (0, g.Z)();
          return n.createElement(
            $t,
            { title: e("team_account_teamplan_changeplan_payment_method_header") },
            n.createElement(
              c.Ejs,
              { sx: { display: "flex", gap: "6px", marginTop: "16px" } },
              n.createElement(c.UXA, { size: 16, color: c.colors.grey00 }),
              n.createElement(
                c.nvN,
                { size: "medium", color: c.colors.grey00 },
                e("team_account_teamplan_changeplan_payment_method_invoice_body")
              )
            )
          );
        };
      var $a = a(788355),
        Va = a(925930),
        Wa = a(86498);
      const Ha =
          /^((AT)(U\d{8})|(BE)(0\d{9}|\d{10})|(BG)(\d{9,10})|(CHE)(\d{9})|(CY)(\d{8}[A-Z])|(CZ)(\d{8,10})|(DE)(\d{9})|(DK)(\d{8})|(EE)(\d{9})|(GB)(\d{5,12})|(EL|GR)(\d{9})|(ES)([\dA-Z]\d{7}[\dA-Z])|(FI)(\d{8})|(FR)([\dA-Z]{2}\d{9})|(HU)(\d{8})|(HR)(\d{11})|(IE)(\d{7}[A-Z]{1,2})|(IT)(\d{11})|(LT)(\d{9}|\d{12})|(LU)(\d{8})|(LV)(\d{11})|(MT)(\d{8})|(NL)(\d{9}(B\d{2}|BO2))|(PL)(\d{10})|(PT)(\d{9})|(RO)(\d{2,10})|(SE)(\d{12})|(SI)(\d{8})|(SK)(\d{10})|(\d{9}MVA))$/i,
        Ka = "team_account_vat_number_add_description",
        Ya = "team_account_vat_number";
      var Qa = (function (e) {
          return (e[(e.ADD = 0)] = "ADD"), (e[(e.UPDATE = 1)] = "UPDATE"), e;
        })(Qa || {}),
        Xa = (function (e) {
          return (e.INITIAL_VIEW = "initialView"), (e.EDIT = "edit"), (e.SAVE = "save"), (e.SAVING = "saving"), e;
        })(Xa || {});
      const Ja = ({ isInAccountSummary: e }) => {
          const { translate: t } = (0, g.Z)(),
            [a, s] = (0, n.useState)(""),
            [i, o] = (0, n.useState)("cancel"),
            [r, d] = (0, n.useState)(!1),
            [u, _] = (0, n.useState)(Qa.ADD),
            [m, p] = (0, n.useState)(Xa.INITIAL_VIEW),
            y = (0, Wa.V)(),
            { deleteTeamVat: h, getTeamVat: b, upsertTeamVat: x } = (0, $e.u)(Va.a);
          (0, n.useEffect)(() => {
            (async () => {
              const e = await b();
              "success" === e.tag ? (s(e.data?.vatNumber), o("delete"), p(Xa.EDIT)) : p(Xa.INITIAL_VIEW);
            })();
          }, [b]);
          const S = async () => {
              "success" === (await h()).tag &&
                (s(""),
                p(Xa.INITIAL_VIEW),
                o("cancel"),
                _(Qa.ADD),
                y.showAlert(t("team_account_vat_number_delete_success_alert"), c.BLW.SUCCESS));
            },
            v = (e) =>
              e &&
              !((e) => {
                const t = e.replaceAll(/\./g, "");
                return Ha.test(t);
              })(e)
                ? t("team_account_vat_number_invalid")
                : null,
            f = { vatNumber: a },
            C = u === Qa.ADD ? "team_account_vat_number_add_success" : "team_account_vat_number_update_success";
          return (0, l.tZ)(
            n.Fragment,
            null,
            "" === a &&
              (e
                ? (0, l.tZ)(l.nv, { color: "ds.text.neutral.quiet", textStyle: "ds.body.standard.regular" }, t(Ka))
                : (0, l.tZ)(c.nvN, { color: "ds.text.neutral.quiet", size: "medium" }, t(Ka))),
            m === Xa.INITIAL_VIEW
              ? (0, l.tZ)(
                  "div",
                  { sx: { marginTop: "16px" } },
                  (0, l.tZ)(
                    l.zx,
                    {
                      mood: "neutral",
                      intensity: "quiet",
                      icon: "ActionAddOutlined",
                      layout: "iconLeading",
                      onClick: () => {
                        p(Xa.SAVE);
                      }
                    },
                    t("team_account_vat_number_add_label")
                  )
                )
              : (0, l.tZ)(
                  "div",
                  { sx: { marginTop: "16px" } },
                  (0, l.tZ)(
                    $a.J9,
                    {
                      initialValues: f,
                      onSubmit:
                        m === Xa.SAVE
                          ? async (e) => {
                              p(Xa.SAVING),
                                "success" === (await x({ newVATNumber: e.vatNumber })).tag &&
                                  (s(e.vatNumber),
                                  d(!0),
                                  p(Xa.EDIT),
                                  o("delete"),
                                  setTimeout(() => {
                                    d(!1);
                                  }, 2e3));
                            }
                          : m === Xa.EDIT
                          ? () => {
                              d(!1), p(Xa.SAVE), _(Qa.UPDATE);
                            }
                          : () => {}
                    },
                    ({ errors: e, resetForm: a, touched: n, values: s }) =>
                      (0, l.tZ)(
                        $a.l0,
                        null,
                        (0, l.tZ)(
                          c.T5p,
                          { gap: "16px", gridTemplateColumns: "2fr 0.25fr 1fr" },
                          (0, l.tZ)(
                            c.dDn,
                            { gridColumn: "1 / 2" },
                            (0, l.tZ)($a.gN, { name: "vatNumber", validate: v }, ({ field: { onChange: e, ...a } }) =>
                              (0, l.tZ)(l.oi, {
                                label: t(Ya),
                                disabled: m === Xa.EDIT,
                                onChange: (t) => {
                                  e(t), m === Xa.EDIT && (p(Xa.SAVE), d(!1));
                                },
                                ...a,
                                sx: { input: { textTransform: "uppercase" } }
                              })
                            ),
                            e.vatNumber && n.vatNumber && (0, l.tZ)(c.nvN, { color: "ds.text.danger.quiet", size: "x-small" }, e.vatNumber)
                          ),
                          (0, l.tZ)(
                            c.dDn,
                            { gridColumn: "2 / 3", sx: { marginTop: "16px" } },
                            m === Xa.SAVING
                              ? (0, l.tZ)(
                                  l.zx,
                                  { intensity: "catchy", layout: "labelOnly", disabled: !0, type: "submit" },
                                  t("team_account_name_saving_label")
                                )
                              : m === Xa.SAVE
                              ? (0, l.tZ)(
                                  l.zx,
                                  { intensity: "catchy", layout: "labelOnly", disabled: "" === s.vatNumber, type: "submit" },
                                  t("team_settings_button_save_label")
                                )
                              : (0, l.tZ)(
                                  l.zx,
                                  {
                                    mood: "neutral",
                                    intensity: "quiet",
                                    icon: "ActionEditOutlined",
                                    layout: "iconLeading",
                                    disabled: "" === s.vatNumber,
                                    type: "submit"
                                  },
                                  t("team_account_name_edit_label")
                                )
                          ),
                          (0, l.tZ)(
                            c.dDn,
                            { gridColumn: "3 / 4", sx: { marginTop: "16px" } },
                            "cancel" === i
                              ? (0, l.tZ)(
                                  l.zx,
                                  {
                                    mood: "neutral",
                                    intensity: "quiet",
                                    layout: "labelOnly",
                                    disabled: m === Xa.SAVING,
                                    onClick: () => p(Xa.INITIAL_VIEW)
                                  },
                                  t("_common_action_cancel")
                                )
                              : (0, l.tZ)(
                                  l.zx,
                                  {
                                    mood: "neutral",
                                    intensity: "quiet",
                                    icon: "ActionDeleteOutlined",
                                    layout: "iconLeading",
                                    disabled: m === Xa.SAVING,
                                    onClick: () => {
                                      a({ values: f }), S();
                                    }
                                  },
                                  t("team_account_delete_label")
                                )
                          )
                        )
                      )
                  )
                ),
            r && (0, l.tZ)(c.nvN, { color: "ds.text.positive.quiet", size: "x-small" }, t(C))
          );
        },
        en = ({ isInAccountSummary: e }) => {
          const { translate: t } = (0, g.Z)();
          return (0, l.tZ)(
            "div",
            null,
            e
              ? (0, l.tZ)(
                  "div",
                  { sx: { marginTop: "24px" } },
                  (0, l.tZ)(l.X6, { color: "ds.text.neutral.catchy", as: "h2", textStyle: "ds.title.section.medium" }, t(Ya)),
                  (0, l.tZ)("div", { sx: { marginTop: "16px" } }, (0, l.tZ)(Ja, { isInAccountSummary: e }))
                )
              : (0, l.tZ)($t, { title: t(Ya) }, (0, l.tZ)("div", { sx: { marginTop: "16px" } }, (0, l.tZ)(Ja, { isInAccountSummary: e })))
          );
        };
      let tn = (function (e) {
        return (e.FORM = "form"), (e.SUCCESS = "success"), e;
      })({});
      var an, nn, sn, on, rn, ln;
      const cn = () => {
        const { data: e, status: t } = (0, d.k)(u.o, "getTeamName");
        return t !== se.rq.Success ? null : e;
      };
      var dn = a(417799),
        un = a(63756),
        _n = a(344554);
      const mn = () => {
          const { translate: e } = (0, g.Z)(),
            t = wt(),
            a = Pt();
          if (!t || !a.hasLimitedOffer) return null;
          const { translatedEquivalentPrice: s, translatedPrice: i } = a;
          return (0, l.tZ)(l.ke, {
            title: e("team_dashboard_upgrade_tile_infobox_title"),
            description: (0, l.tZ)(
              n.Fragment,
              null,
              (0, l.tZ)(
                l.X6,
                { as: "h5", textStyle: "ds.title.block.small", color: "ds.text.brand.standard", sx: { marginBottom: "4px" } },
                (0, l.tZ)("span", { sx: { textDecoration: "line-through" } }, s),
                " ",
                i,
                " ",
                e("team_dashboard_upgrade_tile_infobox_price")
              ),
              (0, l.tZ)(
                l.nv,
                { textStyle: "ds.body.helper.regular", color: "ds.text.brand.standard" },
                e("team_dashboard_upgrade_tile_infobox_description")
              )
            ),
            mood: "brand"
          });
        },
        pn = "team_dashboard_upgrade_tile_feature_unlimited_seats",
        gn = "team_dashboard_upgrade_tile_feature_vpn",
        yn = "team_dashboard_upgrade_tile_cta_buy_dashlane",
        hn = "team_dashboard_upgrade_tile_cta_upgrade",
        bn = "team_dashboard_upgrade_tile_feature_sso",
        xn = "team_dashboard_upgrade_tile_feature_scim",
        Sn = "team_dashboard_upgrade_tile_feature_friends_and_family",
        vn = "team_dashboard_upgrade_tile_feature_support";
      var fn, Cn, Zn;
      const En = ({ dismissible: e }) => {
          const t = (0, un.D)(),
            a = (0, ne.C)(),
            n = (0, Ze.lZ)(),
            s = (0, Ce.o)(G.w.EcommerceWebB2BDiscontinuationPhase1);
          if (!a || n.isLoading) return !1;
          const i = a.isFreeTrial;
          if (a.spaceTier === _.lD.Business && !i) return !1;
          const { isTeamSoftDiscontinued: o, isTrial: r } = n;
          if (o && r && s) return !1;
          const l = t.find((e) => e.type === dn.U.DASHBOARD_UPRADE && e.dismissedAt);
          return !e || !l;
        },
        Dn = ({ iconName: e, children: t }) =>
          (0, l.tZ)(
            c.Ejs,
            { flexDirection: "row", gap: "12px", alignItems: "center", flexWrap: "nowrap" },
            (0, l.tZ)(
              "div",
              { sx: { padding: "8px", backgroundColor: "ds.container.expressive.brand.quiet.idle", borderRadius: "8px" } },
              (0, l.tZ)(l.JO, { name: e, size: "large", color: "ds.text.brand.standard" })
            ),
            (0, l.tZ)(l.nv, { textStyle: "ds.body.standard.regular", color: "ds.text.neutral.catchy" }, t)
          ),
        Tn = ({ dismissible: e }) => {
          const { translate: t } = (0, g.Z)(),
            a = (() => {
              const e = (0, L.B)(),
                { routes: t } = (0, i.Xo)(),
                a = (0, ne.C)();
              if (!a) return null;
              const n = a.isFreeTrial,
                s = a.spaceTier === _.lD.Starter,
                o = a.spaceTier === _.lD.Team,
                r = a.spaceTier === _.lD.Business,
                l = a.daysLeftInTrial;
              return n && o
                ? {
                    header: {
                      key: l
                        ? "team_dashboard_upgrade_tile_team_trial_header_markup"
                        : "team_dashboard_upgrade_tile_team_trial_header_last_day",
                      variables: { daysLeft: l }
                    },
                    description: { key: "team_dashboard_upgrade_tile_business_trial_description" },
                    features: [
                      { iconName: "GroupOutlined", key: pn },
                      { iconName: "FeatureVpnOutlined", key: gn }
                    ],
                    cta: { key: yn, external: !0, link: `${ce.ub}?plan=team&subCode=${e?.subscriptionCode}` }
                  }
                : n && r
                ? {
                    header: {
                      key: l
                        ? "team_dashboard_upgrade_tile_business_trial_header_markup"
                        : "team_dashboard_upgrade_tile_business_trial_header_last_day",
                      variables: { daysLeft: l }
                    },
                    description: { key: "team_dashboard_upgrade_tile_business_trial_description" },
                    features: [
                      { iconName: "ToolsOutlined", key: bn },
                      { iconName: "SharedOutlined", key: xn },
                      { iconName: "GroupOutlined", key: Sn },
                      { iconName: "ItemPhoneHomeOutlined", key: vn }
                    ],
                    cta: { key: yn, external: !0, link: `${ce.ub}?plan=business&subCode=${e?.subscriptionCode}` }
                  }
                : !n && s
                ? {
                    header: { key: "team_dashboard_upgrade_tile_team_upgrade_header" },
                    description: { key: "team_dashboard_upgrade_tile_team_upgrade_description" },
                    features: [
                      { iconName: "GroupOutlined", key: pn },
                      { iconName: "FeatureVpnOutlined", key: gn }
                    ],
                    cta: { key: hn, link: t.teamAccountChangePlanRoutePath }
                  }
                : !n && o
                ? {
                    header: { key: "team_dashboard_upgrade_tile_business_upgrade_header" },
                    description: { key: "team_dashboard_upgrade_tile_business_upgrade_description" },
                    features: [
                      { iconName: "ToolsOutlined", key: bn },
                      { iconName: "SharedOutlined", key: xn },
                      { iconName: "GroupOutlined", key: Sn },
                      { iconName: "ItemPhoneHomeOutlined", key: vn }
                    ],
                    cta: { key: hn, link: t.teamAccountChangePlanRoutePath }
                  }
                : null;
            })(),
            n = (0, kt.Y)(),
            s = (0, i.k6)(),
            d = n.status === r.rq.Success && (0, O.pq)(n.data);
          return a
            ? (0, l.tZ)(
                c.Ejs,
                { flexDirection: "column", gap: "24px" },
                (0, l.tZ)(
                  c.Ejs,
                  { flexDirection: "column", gap: "8px" },
                  (0, l.tZ)(
                    c.Ejs,
                    { alignItems: "start", flexWrap: "nowrap", justifyContent: "space-between" },
                    (0, l.tZ)(
                      l.X6,
                      { as: "h5", textStyle: "ds.title.block.medium", color: "ds.text.neutral.catchy" },
                      a.header.key.includes("markup") ? t.markup(a.header.key, a.header.variables) : t(a.header.key, a.header.variables)
                    ),
                    e
                      ? (0, l.tZ)(l.zx, {
                          sx: { padding: "4px" },
                          mood: "neutral",
                          intensity: "supershy",
                          size: "medium",
                          layout: "iconOnly",
                          onClick: () => (0, _n.ql)({ type: dn.U.DASHBOARD_UPRADE }),
                          icon: Cn || (Cn = (0, l.tZ)(l.JO, { color: "ds.text.neutral.quiet", name: "ActionCloseOutlined" }))
                        })
                      : null
                  ),
                  (0, l.tZ)(l.nv, { textStyle: "ds.body.standard.regular", color: "ds.text.neutral.quiet" }, t(a.description.key))
                ),
                a.features.map((e) =>
                  (0, l.tZ)(Dn, { key: e.key, iconName: e.iconName }, e.key.includes("markup") ? t.markup(e.key) : t(e.key))
                ),
                d ? Zn || (Zn = (0, l.tZ)(mn, null)) : null,
                (0, l.tZ)(
                  l.zx,
                  {
                    fullsize: !0,
                    mood: e ? "brand" : "neutral",
                    intensity: e ? "catchy" : "quiet",
                    key: a.cta.key,
                    onClick: () => {
                      a &&
                        (a.cta.external ? (0, j.Yo)(a.cta.link) : s.push(a.cta.link),
                        (0, P.Kz)(
                          new o.UserClickEvent({ button: o.Button.BuyDashlane, clickOrigin: o.ClickOrigin.FeatureLimitationsBlock })
                        ));
                    }
                  },
                  t(a.cta.key)
                )
              )
            : fn || (fn = (0, l.tZ)(c.HoD, { size: "24px", color: "ds.text.neutral.catchy" }));
        };
      var Nn = a(127521),
        Mn = a(891828),
        In = (function (e) {
          return (
            (e[(e.DUPLICATE = 0)] = "DUPLICATE"),
            (e[(e.SOMETHING_WRONG = 1)] = "SOMETHING_WRONG"),
            (e[(e.EMPTY = 2)] = "EMPTY"),
            (e[(e.MALFORMED = 3)] = "MALFORMED"),
            e
          );
        })(In || {});
      const wn = (e, t) => {
        switch (t) {
          case In.DUPLICATE:
            return e("team_account_name_already_exists");
          case In.SOMETHING_WRONG:
            return e("team_account_name_error_something_wrong");
          case In.EMPTY:
            return e("team_account_name_is_empty");
          case In.MALFORMED:
            return e("team_account_name_is_malformed");
          default:
            return e("team_account_name_error_something_wrong");
        }
      };
      var kn = a(824107);
      const An = "col1--a1XY6sTFa0",
        On = "col2--K8GKZ0pbNU";
      var Ln;
      const zn = ({ hasFullAdminAccess: e, handleSave: t, defaultValue: a }) => {
          const { translate: n } = (0, g.Z)();
          return (0, l.tZ)(
            "div",
            null,
            (0, l.tZ)(
              l.X6,
              { color: "ds.text.neutral.catchy", as: "h2", textStyle: "ds.title.section.medium", sx: { mb: "1em" } },
              n("team_account_heading_team_name")
            ),
            e
              ? (0, l.tZ)(
                  "div",
                  null,
                  (0, l.tZ)(kn.X, {
                    defaultValue: a,
                    saveBtnLabel: n("team_account_name_save_label"),
                    savingBtnLabel: n("team_account_name_saving_label"),
                    editBtnLabel: n("team_account_name_edit_label"),
                    placeholder: n("team_account_name_add_your_team_name"),
                    successMessage: n("team_account_name_add_your_team_success"),
                    textFieldClassName: An,
                    buttonClassName: On,
                    onSave: t,
                    layout: "iconLeading",
                    icon: Ln || (Ln = (0, l.tZ)(l.JO, { name: "ActionEditOutlined" })),
                    inputStyle: { fontSize: "15px" }
                  })
                )
              : a
          );
        },
        jn = "team_account_teamplan_buy_more",
        Rn = ({ isFreeTrial: e, isGracePeriod: t, isStarter: a, isDiscontinuedTrial: n, onClick: s, licenseCount: i }) => {
          const { translate: o } = (0, g.Z)();
          return a
            ? null
            : t && !e
            ? (0, l.tZ)(
                l.zx,
                { mood: "neutral", intensity: "quiet", title: o("team_account_teamplan_hint_cannot_add_seats"), disabled: !0 },
                o(jn)
              )
            : n
            ? (0, l.tZ)(l.zx, { mood: "brand", intensity: "catchy", onClick: s }, o("team_account_teamplan_trial_ended_buy_dashlane"))
            : e
            ? (0, l.tZ)(l.zx, { mood: "neutral", intensity: "quiet", onClick: s, disabled: !1 }, o("team_account_teamplan_upgrade_button"))
            : (0, l.tZ)(l.zx, { mood: "neutral", intensity: "quiet", onClick: s, disabled: !i }, o(jn));
        };
      var Pn;
      const Un = { width: "300px", margin: "10px 0px", flexWrap: "wrap", gap: "8px" },
        Bn = { margin: "10px", gap: "8px" },
        Gn = ({ style: e, licenseCount: t, onRequestTeamUpgrade: a, onRequestBuyMoreSeats: s }) => {
          const { routes: r } = (0, i.Xo)(),
            { translate: d } = (0, g.Z)(),
            u = (0, ne.C)(),
            m = (0, Ze.lZ)(),
            p = (0, Ce.o)("ecommerce_web_offerToExtend_phase1"),
            [y, h] = (0, n.useState)(!1),
            b = (0, Ce.o)(G.w.EcommerceWebB2BDiscontinuationPhase1),
            x = !!u && u.spaceTier === _.lD.Starter,
            S = !!u && u.spaceTier === _.lD.Team,
            v = !!u && u.spaceTier === _.lD.Business,
            f = !!u?.isFreeTrial,
            C = (0, n.useMemo)(() => {
              let e;
              return (
                (e = d(
                  x
                    ? "team_account_teamplan_changeplan_plans_starter_name"
                    : S
                    ? "team_account_teamplan_team"
                    : "team_account_teamplan_business"
                )),
                f ? d("team_account_teamplan_trial", { planName: e }) : `Dashlane ${e}`
              );
            }, [x, S, f, d]),
            { logChangePlanEvent: E } = _a({
              hasPromo: !1,
              currentSeats: t,
              additionalSeats: 0,
              planChangeStep: o.PlanChangeStep.ChangePlanCta
            });
          if (m.isLoading) return null;
          const { isTeamSoftDiscontinued: D, isTrial: T } = m,
            N = !!b && D && T;
          if (!u) return null;
          const M = u.isGracePeriod,
            I = 0 === u.daysLeftInTrial;
          return f
            ? (0, l.tZ)(
                n.Fragment,
                null,
                (0, l.tZ)(
                  "div",
                  { style: e },
                  (0, l.tZ)(
                    "div",
                    { sx: { display: "flex" } },
                    (0, l.tZ)(
                      "div",
                      { sx: (0, l.jM)([{ display: "flex", flexDirection: "row" }, Un]) },
                      (0, l.tZ)("span", { className: "licenseCountText--hXtj4u8ji3" }, C),
                      N ? (0, l.tZ)(l.Ct, { mood: "danger", label: d("team_account_teamplan_trial_ended_badge") }) : null
                    ),
                    (0, l.tZ)(
                      "div",
                      { sx: (0, l.jM)([{ display: "flex", flexDirection: "row" }, Bn]) },
                      (0, l.tZ)(Rn, {
                        isGracePeriod: M,
                        isFreeTrial: f,
                        isStarter: x,
                        isDiscontinuedTrial: !!N,
                        onClick: () => a(o.ClickOrigin.AccountStatus),
                        licenseCount: t
                      }),
                      !M && I && p && !D
                        ? (0, l.tZ)(
                            l.zx,
                            {
                              mood: "brand",
                              intensity: "supershy",
                              layout: "labelOnly",
                              onClick: () => {
                                (0, P.Kz)(new o.UserClickEvent({ button: o.Button.ExtendTrial, clickOrigin: o.ClickOrigin.AccountStatus })),
                                  h(!0);
                              }
                            },
                            d("team_dashboard_extend_trial_button")
                          )
                        : null,
                      N
                        ? (0, l.tZ)(
                            l.zx,
                            {
                              mood: "brand",
                              intensity: "supershy",
                              onClick: () => {
                                (0, j.Yo)(ce.oH);
                              }
                            },
                            d("team_account_teamplan_trial_ended_pay_by_invoice_button")
                          )
                        : null
                    )
                  ),
                  (0, l.tZ)("div", { className: "licenseCountContainer--bEWqbHZbKG" }, d("team_account_teamplan_users", { count: t }))
                ),
                y ? (0, l.tZ)(Z.XA, { initialDialog: Z.s9.SURVEY }) : null
              )
            : (0, l.tZ)(
                c.Ejs,
                { flexDirection: "column", sx: { marginTop: "8px" } },
                (0, l.tZ)(
                  c.Ejs,
                  { alignItems: "center" },
                  (0, l.tZ)(
                    "div",
                    { sx: Un },
                    (0, l.tZ)(l.nv, { textStyle: "ds.body.standard.regular" }, d("team_account_teamplan_plan_name", { planName: C }))
                  ),
                  (0, l.tZ)(
                    "div",
                    { sx: Bn },
                    v
                      ? null
                      : (0, l.tZ)(
                          l.zx,
                          {
                            mood: "neutral",
                            intensity: "quiet",
                            type: "button",
                            onClick: () => {
                              E(), (0, i.uX)(r.teamAccountChangePlanRoutePath);
                            }
                          },
                          d("team_account_teamplan_change_plan")
                        )
                  )
                ),
                (0, l.tZ)(
                  c.Ejs,
                  { alignItems: "center", sx: { marginTop: "8px" } },
                  (0, l.tZ)(
                    "div",
                    { sx: Un },
                    (0, l.tZ)(l.nv, { textStyle: "ds.body.standard.regular" }, d("team_account_teamplan_seats", { numSeats: t }))
                  ),
                  (0, l.tZ)(
                    "div",
                    { sx: Bn },
                    (0, l.tZ)(Rn, {
                      isGracePeriod: M,
                      isFreeTrial: f,
                      isStarter: x,
                      onClick: s,
                      licenseCount: t,
                      isDiscontinuedTrial: !!N
                    }),
                    N ? Pn || (Pn = (0, l.tZ)(l.zx, null)) : null
                  )
                )
              );
        },
        Fn = {
          CARD_BORDER: { border: "1px solid ds.border.neutral.quiet.idle", borderRadius: "8px", overflow: "hidden" },
          ACCOUNT_PAGE: {
            backgroundColor: "ds.background.alternate",
            minHeight: "100%",
            "& > div": { maxWidth: "74em", padding: "32px 48px" }
          }
        };
      var qn;
      const $n = ({
        lee: e,
        seatsNumber: t,
        isWindowCollapsed: a,
        hasFullAdminAccess: n,
        onRequestBuyMoreSeats: s,
        onRequestTeamUpgrade: i
      }) => {
        const { translate: o } = (0, g.Z)(),
          { reportTACError: r } = H(),
          d = En({}),
          u = cn();
        return null === u
          ? null
          : (0, l.tZ)(
              c.Ejs,
              { flexDirection: "column" },
              (0, l.tZ)(
                l.X6,
                { textStyle: "ds.title.section.large", as: "h1", color: "ds.text.neutral.standard", sx: { marginBottom: "32px" } },
                o("team_account_heading_team_setup")
              ),
              (0, l.tZ)(
                c.Ejs,
                { flexDirection: "row", gap: "24px" },
                (0, l.tZ)(
                  c.Ejs,
                  {
                    flexDirection: "column",
                    sx: (0, l.jM)([
                      { flexGrow: "1", backgroundColor: "ds.container.agnostic.neutral.supershy", padding: "32px", maxWidth: "40em" },
                      Fn.CARD_BORDER
                    ])
                  },
                  (0, l.tZ)(zn, {
                    hasFullAdminAccess: n,
                    handleSave: (t) =>
                      (async (e, t, a, n) => {
                        const s = (0, Nn.v0)(t.globalState);
                        if (!s) {
                          const e = new Error(wn(a, In.SOMETHING_WRONG));
                          throw (n(e), e);
                        }
                        if (!e.length) throw new Error(wn(a, In.EMPTY));
                        if (!/^[\w\s-.]*$/.test(e)) throw new Error(wn(a, In.MALFORMED));
                        try {
                          var i;
                          const t = await new Mn.Z().editSettings({ auth: s, operations: [{ type: "set_name", value: e }] });
                          return null != (i = t.content.team?.info.name) ? i : "";
                        } catch (e) {
                          const t = "team_name_already_exists" === e.message ? In.DUPLICATE : In.SOMETHING_WRONG;
                          throw new Error(wn(a, t));
                        }
                      })(t, e, o, r),
                    defaultValue: u
                  }),
                  (0, l.tZ)(
                    "div",
                    { sx: { marginTop: "2em" } },
                    (0, l.tZ)(
                      l.X6,
                      { color: "ds.text.neutral.catchy", as: "h2", textStyle: "ds.title.section.medium" },
                      o("team_account_teamplan")
                    ),
                    (0, l.tZ)(Gn, { licenseCount: t, onRequestBuyMoreSeats: s, onRequestTeamUpgrade: i })
                  )
                ),
                d
                  ? (0, l.tZ)(
                      c.k$b,
                      {
                        sx: (0, l.jM)([
                          { backgroundColor: "ds.container.agnostic.neutral.supershy", width: a ? "40em" : "416px", padding: "32px" },
                          Fn.CARD_BORDER
                        ])
                      },
                      qn || (qn = (0, l.tZ)(Tn, null))
                    )
                  : null
              )
            );
      };
      var Vn = a(972833),
        Wn = a(798423);
      const Hn = ({ children: e }) =>
          (0, l.tZ)(
            c.Ejs,
            {
              flexDirection: "column",
              sx: (0, c.jMf)([
                Fn.CARD_BORDER,
                { backgroundColor: "ds.container.agnostic.neutral.supershy", padding: "24px", flex: "1", overflow: "visible" }
              ])
            },
            e
          ),
        Kn = {
          none: {
            paragraph: "team_account_cancel_widget_unsolicited_content_markup",
            button: "team_account_cancel_widget_unsolicited_button"
          },
          pending: {
            heading: "team_account_cancel_widget_requested_pending_heading",
            paragraph: "team_account_cancel_widget_requested_pending_content_markup"
          },
          canceled: {
            heading: "team_account_cancel_widget_requested_complete_heading",
            paragraph: "team_account_cancel_widget_requested_complete_content",
            button: "team_account_cancel_widget_requested_complete_button"
          }
        },
        Yn = (e, t, a) => {
          var n, s, i, o, r;
          switch (e) {
            case _.Uz.None:
              return "paragraph" === t
                ? a.markup(null != (n = Kn.none[t]) ? n : "", {}, { linkTarget: "_blank" })
                : a(null != (s = Kn.none[t]) ? s : "");
            case _.Uz.Pending:
              return "paragraph" === t
                ? a.markup(null != (i = Kn.pending[t]) ? i : "", {}, { linkTarget: "_blank" })
                : a(null != (o = Kn.pending[t]) ? o : "");
            case _.Uz.Canceled:
              return a(null != (r = Kn.canceled[t]) ? r : "");
          }
        },
        Qn = ({ status: e, handleClickButton: t }) => {
          const { translate: a } = (0, g.Z)();
          return (0, l.tZ)(
            Hn,
            null,
            e !== _.Uz.None
              ? (0, l.tZ)(
                  l.X6,
                  { as: "h2", color: "ds.text.neutral.catchy", textStyle: "ds.title.block.medium", sx: { marginBottom: "16px" } },
                  Yn(e, "heading", a)
                )
              : null,
            (0, l.tZ)(l.nv, { color: "ds.text.neutral.quiet", sx: { fontSize: "15px" } }, Yn(e, "paragraph", a)),
            e !== _.Uz.Pending
              ? (0, l.tZ)(l.zx, { intensity: "quiet", mood: "neutral", sx: { marginTop: "16px" }, onClick: t }, Yn(e, "button", a))
              : null
          );
        };
      var Xn = a(668531);
      const Jn = ({ spaceTier: e, handleClose: t, sendCancelRequest: a, requestStatus: s }) => {
        const { translate: i } = (0, g.Z)(),
          [r, c] = (0, n.useState)({
            chose_other_password_manager: !1,
            missing_critical_features: !1,
            no_internal_usage: !1,
            downsized_employee_count: !1,
            other: !1,
            technical_issues: !1,
            too_expensive: !1
          });
        (0, n.useEffect)(() => {
          (0, P.Nc)(o.PageView.TacModalReasonsToCancelSubscription);
        }, []);
        const d = `${e[0].toUpperCase()}${e.slice(1)}`,
          u = (e) => {
            const t = !r[e];
            c({ ...r, [e]: t });
          };
        return (0, l.tZ)(
          l.Vq,
          {
            isOpen: !0,
            onClose: () => {
              (0, P.Kz)(
                new o.UserCallToActionEvent({ callToActionList: [o.CallToAction.Confirm, o.CallToAction.Cancel], hasChosenNoAction: !0 })
              ),
                t();
            },
            title: i("team_account_cancel_form_heading"),
            actions: {
              primary: {
                children: i("team_account_cancel_form_button_confirm"),
                onClick: () => {
                  const e = Object.keys(r).filter((e) => r[e]),
                    t = e.map((e) => Xn.V[e]);
                  if (!e.every(_.ud)) throw new Error("Invalid cancel subscription reason");
                  a(t),
                    (0, P.Kz)(
                      new o.UserCallToActionEvent({
                        callToActionList: [o.CallToAction.Confirm, o.CallToAction.Cancel],
                        chosenAction: o.CallToAction.Confirm,
                        hasChosenNoAction: !1
                      })
                    ),
                    (0, P.Kz)(
                      new o.UserSubmitInProductFormAnswerEvent({
                        formName: o.FormName.ReasonToCancelSubscription,
                        answerList: Object.keys(r).map((e) => Xn.V[e]),
                        chosenAnswerList: t
                      })
                    );
                },
                isLoading: "pending" === s
              },
              secondary: {
                children: i("team_account_cancel_form_button_cancel", { planTier: d }),
                onClick: () => {
                  (0, P.Kz)(
                    new o.UserCallToActionEvent({
                      callToActionList: [o.CallToAction.Confirm, o.CallToAction.Cancel],
                      chosenAction: o.CallToAction.Cancel,
                      hasChosenNoAction: !1
                    })
                  ),
                    t();
                }
              }
            },
            isDestructive: !0,
            closeActionLabel: i("_common_dialog_dismiss_button")
          },
          (0, l.tZ)(
            l.nv,
            { sx: { marginBottom: "20px" }, textStyle: "ds.body.standard.regular", color: "ds.text.neutral.quiet" },
            i("team_account_cancel_form_subheading")
          ),
          (0, l.tZ)(l.nv, { textStyle: "ds.title.block.medium" }, i("team_account_cancel_form_question")),
          (0, l.tZ)(l.nv, { sx: { marginBottom: "20px" }, textStyle: "ds.body.standard.regular" }, i("team_account_cancel_form_context")),
          (0, l.tZ)(
            "div",
            { sx: { display: "flex", flexDirection: "column", gap: "20px" } },
            (0, l.tZ)(l.XZ, {
              label: i("team_account_cancel_form_option_1"),
              checked: r.no_internal_usage,
              disabled: "pending" === s,
              onChange: () => u("no_internal_usage")
            }),
            (0, l.tZ)(l.XZ, {
              label: i("team_account_cancel_form_option_2_revised"),
              checked: r.downsized_employee_count,
              disabled: "pending" === s,
              onChange: () => u("downsized_employee_count")
            }),
            (0, l.tZ)(l.XZ, {
              label: i("team_account_cancel_form_option_3"),
              checked: r.chose_other_password_manager,
              disabled: "pending" === s,
              onChange: () => u("chose_other_password_manager")
            }),
            (0, l.tZ)(l.XZ, {
              label: i("team_account_cancel_form_option_4"),
              checked: r.missing_critical_features,
              disabled: "pending" === s,
              onChange: () => u("missing_critical_features")
            }),
            (0, l.tZ)(l.XZ, {
              label: i("team_account_cancel_form_option_5"),
              checked: r.technical_issues,
              disabled: "pending" === s,
              onChange: () => u("technical_issues")
            }),
            (0, l.tZ)(l.XZ, {
              label: i("team_account_cancel_form_option_6"),
              checked: r.too_expensive,
              disabled: "pending" === s,
              onChange: () => u("too_expensive")
            }),
            (0, l.tZ)(l.XZ, {
              sx: { marginBottom: "8px" },
              label: i("team_account_cancel_form_option_7"),
              checked: r.other,
              disabled: "pending" === s,
              onChange: () => u("other")
            })
          ),
          (0, l.tZ)(
            l.nv,
            { sx: { margin: "20px 0" }, textStyle: "ds.body.standard.regular", color: "ds.text.neutral.quiet" },
            i.markup("team_account_cancel_form_help_markup", {}, { linkTarget: "_blank" })
          )
        );
      };
      var es, ts;
      const as = {
          ITEM: { display: "flex", flexDirection: "row", alignItems: "flex-start", gap: "16px" },
          WRAPPER: { margin: "16px 0", gap: "24px", display: "flex", flexDirection: "column" }
        },
        ns = "team_account_cancel_confirmation_dialog_close",
        ss = ({ handleClose: e }) => {
          const { translate: t } = (0, g.Z)();
          return (
            (0, n.useEffect)(() => {
              (0, P.Nc)(o.PageView.TacConfirmSubscriptionCancellationRequestSubmission);
            }, []),
            (0, l.tZ)(
              l.Vq,
              {
                isOpen: !0,
                onClose: e,
                title: t("team_account_cancel_confirmation_dialog_heading"),
                closeActionLabel: t(ns),
                actions: { primary: { children: t(ns), onClick: e } }
              },
              (0, l.tZ)(
                "div",
                { sx: as.WRAPPER },
                (0, l.tZ)(
                  "div",
                  { sx: as.ITEM },
                  es || (es = (0, l.tZ)(l.JO, { name: "ItemEmailOutlined", size: "xlarge" })),
                  (0, l.tZ)(l.nv, null, t.markup("team_account_cancel_confirmation_dialog_paragraph_1_markup"))
                ),
                (0, l.tZ)(
                  "div",
                  { sx: as.ITEM },
                  ts || (ts = (0, l.tZ)(l.JO, { name: "ActionUndoOutlined", size: "xlarge" })),
                  (0, l.tZ)(l.nv, null, t("team_account_cancel_confirmation_dialog_paragraph_2"))
                )
              )
            )
          );
        };
      let is = (function (e) {
        return (
          (e.NONE = "none"), (e.SURVEY = "survey"), (e.REQUEST_SUCCESS = "requestSentConfirmation"), (e.REQUEST_ERROR = "requestError"), e
        );
      })({});
      const os = ({ status: e }) => {
        const [t, a] = (0, n.useState)(is.NONE),
          [s, i] = (0, n.useState)("idle"),
          r = (0, Ze.lZ)(),
          d = (0, ne.C)(),
          { translate: m } = (0, g.Z)(),
          p = (0, Wa.V)();
        (0, n.useEffect)(() => {
          t === is.REQUEST_ERROR && p.showAlert(m("team_account_cancel_request_error"), c.BLW.ERROR, !1, void 0, void 0, 1e4);
        }, [t]);
        const { requestTeamPlanCancellation: y } = (0, $e.u)(u.o);
        return r.isLoading || !d || r.isTeamSoftDiscontinued || d.isFreeTrial || d.isGracePeriod
          ? null
          : (0, l.tZ)(
              n.Fragment,
              null,
              (0, l.tZ)(Qn, {
                status: e,
                handleClickButton:
                  e === _.Uz.None
                    ? () => {
                        (0, P.Kz)(
                          new o.UserClickEvent({ clickOrigin: o.ClickOrigin.BillingInformation, button: o.Button.CancelSubscription })
                        ),
                          a(is.SURVEY);
                      }
                    : () => {
                        (0, P.Kz)(
                          new o.UserClickEvent({ clickOrigin: o.ClickOrigin.BillingInformation, button: o.Button.ReactivateSubscription })
                        ),
                          (0, j.Yo)(ce.lh);
                      }
              }),
              t === is.SURVEY
                ? (0, l.tZ)(Jn, {
                    spaceTier: d.spaceTier,
                    handleClose: () => {
                      a(is.NONE);
                    },
                    sendCancelRequest: async (e) => {
                      i("pending");
                      try {
                        const t = await y({ reasons: e });
                        if ((i("finished"), "failure" === t.tag)) throw new Error("Failed to request team plan cancellation.");
                        a(is.REQUEST_SUCCESS);
                      } catch (e) {
                        a(is.REQUEST_ERROR);
                      }
                    },
                    requestStatus: s
                  })
                : null,
              t === is.REQUEST_SUCCESS
                ? (0, l.tZ)(ss, {
                    handleClose: () => {
                      a(is.NONE);
                    }
                  })
                : null
            );
      };
      var rs = a(526849),
        ls = a(729274),
        cs = a(522640),
        ds = a(319474);
      var us;
      const _s = (e) => e.trim().toLocaleLowerCase(),
        ms = ({ defaultSelected: e, handleConfirmClick: t, handleClose: a, allMembersCount: s, membersList: i }) => {
          const { translate: o } = (0, g.Z)(),
            [r, l] = (0, n.useState)(e),
            [d, u] = (0, n.useState)(""),
            [_, m] = (0, n.useState)([]),
            [p, y] = (0, n.useState)(!1);
          (0, n.useEffect)(() => {
            m(((e, t) => ("" === t.trim() ? e : e.filter(({ login: e }) => _s(e).includes(_s(t)))))(i, d).slice(0, 5));
          }, [i, d]);
          const h = n.useCallback(() => {
              a();
            }, [a]),
            b = !_.length || e === r;
          return n.createElement(
            q.o,
            {
              isOpen: !0,
              showCloseIcon: !0,
              title: o("team_account_billing_admin_dialog_title"),
              footer: n.createElement(c.cNS, {
                primaryButtonTitle: o("team_account_billing_admin_dialog_confirm"),
                primaryButtonOnClick: () => t(r),
                primaryButtonProps: { disabled: b }
              }),
              onRequestClose: h
            },
            n.createElement(
              c.T5p,
              { gap: "1.5em", gridTemplateColumns: "auto" },
              n.createElement(c.nvN, null, o("team_account_billing_admin_dialog_warning")),
              n.createElement(c.oil, {
                fullWidth: !0,
                autoFocus: !0,
                startAdornment: us || (us = n.createElement(c.W1M, null)),
                onChange: ({ target: { value: e } }) => {
                  u(e), p || y(!0);
                },
                placeholder: o("team_account_billing_admin_search_field_placeholder")
              }),
              _.length > 0
                ? n.createElement(
                    n.Fragment,
                    null,
                    n.createElement(
                      ds.S,
                      {
                        value: r,
                        onChange: ({ target: { value: e } }) => {
                          l(e);
                        },
                        groupName: "billingAdmins"
                      },
                      _.map(({ login: e }) => n.createElement(ds.E, { key: e, value: e, className: "radioWrapper--zUHiaWj5BN" }, e))
                    ),
                    n.createElement(
                      c.nvN,
                      { color: "neutrals.8" },
                      _.length < s ? o("team_account_billing_admin_display_disclaimer", { count: _.length || "-", total: s || "-" }) : null
                    )
                  )
                : null,
              0 === _.length ? n.createElement(c.nvN, null, o("team_account_billing_admin_search_no_match")) : null
            )
          );
        };
      var ps;
      const gs = ({ lee: e }) => {
        const { globalState: t } = e,
          [a, s] = (0, n.useState)(""),
          [i, r] = (0, n.useState)(0),
          [d, u] = (0, n.useState)([]),
          [_, m] = (0, n.useState)(!1),
          p = (0, Nn.v0)(t),
          { translate: y } = (0, g.Z)(),
          { reportTACError: h } = H(),
          b = (0, Wa.V)();
        return (
          (0, n.useEffect)(() => {
            (async () => {
              if (!p?.teamId) return;
              const e = await (0, cs.YY)({ teamId: p.teamId }),
                t = e.filter((e) => "accepted" === e.status),
                a = (0, rs.sortWith)([(0, rs.descend)((0, rs.prop)("isBillingAdmin")), (0, rs.descend)((0, rs.prop)("isTeamCaptain"))])(t);
              u(a), r(e.length);
              const n = a[0].login;
              s(n);
            })().catch(h);
          }, [p?.teamId]),
          p
            ? (0, l.tZ)(
                n.Fragment,
                null,
                (0, l.tZ)(
                  c.Ejs,
                  { gap: "16px" },
                  (0, l.tZ)(
                    l.X6,
                    { color: "ds.text.neutral.catchy", as: "h2", textStyle: "ds.title.section.medium" },
                    y("team_account_heading_billing_admin")
                  ),
                  (0, l.tZ)(
                    l.nv,
                    { color: "ds.text.neutral.quiet", textStyle: "ds.body.standard.regular" },
                    y("team_account_billing_admin_access_information")
                  )
                ),
                (0, l.tZ)(
                  "div",
                  { className: "container--cNaXIUykkA" },
                  (0, l.tZ)(
                    "div",
                    { className: An },
                    (0, l.tZ)(
                      "span",
                      { className: A()("text--Jm4WO6KPbc", { "emptyText--YnRMwaHw2m": !a }, "automation-tests-tac-billing") },
                      a || "████████████████"
                    )
                  ),
                  (0, l.tZ)(
                    "div",
                    { className: On },
                    e.permission.adminAccess.hasFullAccess
                      ? (0, l.tZ)(
                          "div",
                          { className: "editContainer--ZJk2BSq6aw" },
                          (0, l.tZ)(
                            l.zx,
                            {
                              mood: "neutral",
                              intensity: "quiet",
                              icon: ps || (ps = (0, l.tZ)(l.JO, { name: "ActionEditOutlined" })),
                              layout: "iconLeading",
                              disabled: !d.length,
                              onClick: () => {
                                m(!0), (0, P.Nc)(o.PageView.TacAccountBillingInfo);
                              }
                            },
                            y("team_account_billing_admin_edit_contact_info")
                          ),
                          _
                            ? (0, l.tZ)(ms, {
                                defaultSelected: a,
                                handleConfirmClick: async (e) => {
                                  if (a === e) return;
                                  m(!1), (0, P.Nc)(o.PageView.TacAccount);
                                  const n = (0, Nn.v0)(t);
                                  if (n)
                                    try {
                                      await new Mn.Z().updateBillingAdmin({ auth: n, newAdminLogin: e, oldAdminLogin: a }),
                                        b.showAlert(y("team_account_billing_admin_notification_success"), c.BLW.SUCCESS),
                                        s(e);
                                    } catch {
                                      b.showAlert(y("team_account_billing_admin_notification_something_wrong"), c.BLW.ERROR);
                                    }
                                  else h(new Error(ls.N));
                                },
                                handleClose: () => {
                                  m(!1), (0, P.Nc)(o.PageView.TacAccount);
                                },
                                membersList: d,
                                allMembersCount: i
                              })
                            : null
                        )
                      : null
                  )
                )
              )
            : (h(new Error(ls.N)), null)
        );
      };
      var ys;
      const hs = () => {
        const { translate: e } = (0, g.Z)();
        return (0, B.tZ)(
          c.Ejs,
          { gap: "16px", sx: { margin: "24px 0" } },
          (0, B.tZ)(c.nvN, { color: "ds.text.neutral.catchy", as: "h2", size: "large" }, e("team_account_invoice_payment_plan_heading")),
          (0, B.tZ)(
            "div",
            null,
            (0, B.tZ)(c.nvN, { color: "ds.text.neutral.quiet", size: "small" }, e("team_account_invoice_payment_plan_pay_credit_card")),
            (0, B.tZ)(
              c.nvN,
              { size: "small" },
              (0, B.tZ)(
                c.rUS,
                { href: ce.Bw, target: "_blank", rel: "noopener noreferrer", sx: { color: "ds.text.neutral.quiet", fontWeight: "400" } },
                e("team_account_invoice_payment_plan_contact_support")
              )
            )
          ),
          (0, B.tZ)(
            c.Ejs,
            { flexDirection: "row", gap: "8px", alignItems: "center", sx: { width: "100%" } },
            (0, B.tZ)(
              "div",
              { sx: { padding: "8px", backgroundColor: "ds.container.expressive.brand.quiet.idle", borderRadius: "8px" } },
              ys || (ys = (0, B.tZ)(l.JO, { name: "ItemTaxNumberOutlined", size: "large", color: "ds.text.brand.standard" }))
            ),
            (0, B.tZ)(c.nvN, { color: "ds.text.neutral.catchy", size: "medium" }, e("team_account_invoice_payment"))
          )
        );
      };
      var bs,
        xs = a(83175);
      const Ss = ({ isDisabled: e }) => {
        const [t, a] = (0, n.useState)(!1),
          { translate: s } = (0, g.Z)(),
          {
            loading: i,
            hasCreditCardPaymentMethod: r,
            last4DigitsFormatted: d,
            cardSvg: u,
            isExpired: _,
            expFormatted: m,
            pollUntilCardUpdate: p
          } = (0, y.C)({
            handleCardUpdate: (e) => {
              e && (0, P.Kz)(new o.UserAddNewPaymentMethodEvent({ flowStep: o.FlowStep.Complete }));
            }
          });
        return i
          ? (0, B.tZ)(c.HoD, { color: c.colors.midGreen00 })
          : (0, B.tZ)(
              c.Ejs,
              { gap: "16px", sx: { marginTop: "24px" } },
              (0, B.tZ)(
                c.nvN,
                { color: "ds.text.neutral.catchy", as: "h2", size: "large" },
                s("team_account_invoice_payment_seats_heading")
              ),
              r
                ? (0, B.tZ)(
                    c.T5p,
                    { gridTemplateColumns: "1fr 1fr", sx: { width: "100%" } },
                    (0, B.tZ)(
                      c.dDn,
                      { sx: { width: "300px" } },
                      (0, B.tZ)(
                        c.nvN,
                        { color: "ds.text.neutral.standard", sx: { display: "flex", alignItems: "center" } },
                        u,
                        (0, B.tZ)("span", { style: { marginLeft: "10px" } }, "••••"),
                        (0, B.tZ)("span", { "data-testid": "card-last-four", style: { marginLeft: "3px" } }, d)
                      ),
                      _
                        ? (0, B.tZ)(
                            c.nvN,
                            { color: c.colors.red00, sx: { marginTop: "8px", fontSize: 14 } },
                            s("manage_subscription_payment_section_expired_stripe")
                          )
                        : (0, B.tZ)(
                            c.nvN,
                            { color: "ds.text.neutral.standard", sx: { marginTop: "8px" } },
                            m ? s("manage_subscription_payment_section_expiration_date", { date: m }) : null
                          )
                    ),
                    (0, B.tZ)(
                      c.dDn,
                      { alignSelf: "center" },
                      (0, B.tZ)(
                        l.zx,
                        {
                          mood: "neutral",
                          intensity: "quiet",
                          icon: bs || (bs = (0, B.tZ)(l.JO, { name: "ActionEditOutlined" })),
                          layout: "iconLeading",
                          onClick: () => {
                            p(), a(!0);
                          },
                          disabled: e
                        },
                        t ? (0, B.tZ)(xs.J, { b2c: !1, setPaymentLoading: a }) : s("team_account_payment_edit_credit_card")
                      )
                    )
                  )
                : (0, B.tZ)(
                    n.Fragment,
                    null,
                    (0, B.tZ)(
                      "div",
                      null,
                      (0, B.tZ)(
                        c.nvN,
                        { color: "ds.text.neutral.quiet", size: "small" },
                        s("team_account_invoice_payment_seats_save_credit_card")
                      ),
                      (0, B.tZ)(
                        c.nvN,
                        { color: "ds.text.neutral.quiet", size: "small" },
                        s("team_account_invoice_payment_seats_subscription")
                      )
                    ),
                    (0, B.tZ)(
                      "div",
                      null,
                      (0, B.tZ)(
                        l.zx,
                        {
                          mood: "neutral",
                          intensity: "quiet",
                          onClick: () => {
                            (0, P.Kz)(new o.UserAddNewPaymentMethodEvent({ flowStep: o.FlowStep.Start })), p(), a(!0);
                          }
                        },
                        t ? (0, B.tZ)(xs.J, { b2c: !1, setPaymentLoading: a }) : s("team_account_payment_add_credit_card")
                      )
                    )
                  )
            );
      };
      var vs = a(909216);
      const fs = "billing--etj61dTqkE";
      var Cs, Zs;
      const Es = ({ isDisabled: e }) => {
          var t;
          const [a, s] = n.useState(!1),
            { translate: i } = (0, g.Z)(),
            o = (0, kt.Y)(),
            {
              loading: d,
              billingInformation: u,
              last4DigitsFormatted: _,
              cardSvg: m,
              isExpired: p,
              expFormatted: h,
              pollUntilCardUpdate: b
            } = (0, y.C)({});
          if (o.status !== r.rq.Success || !o.data || d) return (0, l.tZ)(c.HoD, { color: c.colors.midGreen00 });
          const x = () =>
            (0, l.tZ)(
              "div",
              null,
              (0, l.tZ)(
                l.zx,
                {
                  mood: "neutral",
                  intensity: "quiet",
                  icon: Cs || (Cs = (0, l.tZ)(l.JO, { name: "ActionAddOutlined" })),
                  layout: "iconLeading",
                  onClick: () => {
                    b(), s(!0);
                  },
                  sx: { marginTop: "1em" }
                },
                a ? t || (t = (0, l.tZ)(xs.J, { b2c: !1, setPaymentLoading: s })) : i("team_account_payment_add_credit_card")
              )
            );
          return (0, l.tZ)(
            "div",
            { style: { marginTop: "24px" } },
            (0, l.tZ)(
              l.X6,
              { color: "ds.text.neutral.catchy", as: "h2", textStyle: "ds.title.section.medium" },
              i("team_account_paymentmethod_heading")
            ),
            u?.billingType
              ? _
                ? (0, l.tZ)(
                    "div",
                    { className: "container--GmEeyXCXpH" },
                    (0, l.tZ)(
                      "div",
                      { className: An },
                      (0, l.tZ)(
                        "div",
                        { className: fs },
                        (0, l.tZ)(
                          "div",
                          { className: fs },
                          m,
                          (0, l.tZ)(
                            l.nv,
                            { color: "ds.text.neutral.standard" },
                            (0, l.tZ)("span", { style: { marginLeft: "10px" } }, "••••"),
                            (0, l.tZ)("span", { "data-testid": "card-last-four", style: { marginLeft: "3px" } }, _)
                          )
                        )
                      ),
                      p
                        ? (0, l.tZ)(
                            l.nv,
                            { color: "ds.text.danger.standard", sx: { marginBottom: "8px", fontSize: 14 } },
                            i("manage_subscription_payment_section_expired_stripe")
                          )
                        : (0, l.tZ)(
                            l.nv,
                            { color: "ds.text.neutral.standard", sx: { marginBottom: "8px" } },
                            h ? i("manage_subscription_payment_section_expiration_date", { date: h }) : null
                          )
                    ),
                    (0, l.tZ)(
                      "div",
                      { className: On },
                      (0, l.tZ)(
                        l.zx,
                        {
                          mood: "neutral",
                          intensity: "quiet",
                          icon: Zs || (Zs = (0, l.tZ)(l.JO, { name: "ActionEditOutlined" })),
                          layout: "iconLeading",
                          onClick: () => {
                            b(), s(!0), (0, vs.dV)(o.data);
                          },
                          disabled: e
                        },
                        a ? (0, l.tZ)(xs.J, { b2c: !1, setPaymentLoading: s }) : i("team_account_payment_edit_credit_card")
                      )
                    )
                  )
                : (0, l.tZ)(
                    "div",
                    { sx: { margin: "16px 0 24px" } },
                    (0, l.tZ)(
                      "div",
                      null,
                      (0, l.tZ)(
                        l.nv,
                        { color: "ds.text.neutral.quiet", textStyle: "ds.body.standard.regular" },
                        i("team_account_paymentmethod_payment_method_unknow")
                      )
                    ),
                    (0, l.tZ)(x, null)
                  )
              : (0, l.tZ)(
                  "div",
                  { sx: { margin: "16px 0 24px" } },
                  (0, l.tZ)(
                    "div",
                    null,
                    (0, l.tZ)(
                      l.nv,
                      { color: "ds.text.neutral.quiet", textStyle: "ds.body.standard.regular" },
                      i("team_account_paymentmethod_no_payment_method")
                    )
                  ),
                  (0, l.tZ)(x, null)
                )
          );
        },
        Ds = ({ handleGetPastReceipts: e }) => {
          const { translate: t } = (0, g.Z)();
          return (0, l.tZ)(
            c.Ejs,
            { sx: { marginTop: "16px", display: "flex", justifyContent: "center" } },
            (0, l.tZ)(
              l.zx,
              { mood: "neutral", intensity: "quiet", icon: "DownloadOutlined", layout: "iconLeading", onClick: e, sx: { width: "100%" } },
              t("team_account_teamplan_plan_download_billing_history")
            )
          );
        };
      var Ts;
      const Ns = {
          WRAPPER: { display: "flex", flexDirection: "column", padding: "24px", backgroundColor: "ds.container.agnostic.neutral.supershy" },
          BUY_DASHLANE_BUTTON: {
            marginTop: "20px",
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px"
          }
        },
        Ms = ({ isRenewalStopped: e, onClickBuyDashlane: t, handleGetPastReceipts: a, usersToBeRenewedCount: s, discontinuedTrial: i }) => {
          const { translate: r } = (0, g.Z)(),
            d = (0, Ce.o)("ecommerce_web_offerToExtend_phase1"),
            { loading: u, billingCountry: p } = v(),
            [y, h] = (0, n.useState)(!1),
            b = (0, ne.C)(),
            x = (0, m.s)(),
            S = x?.nextBillingDetails,
            { isLoading: f, expectedTaxInformation: C } = da({ total: S?.amount });
          if (u || !b || !S) return Ts || (Ts = (0, l.tZ)(l.ZX, { mood: "brand" }));
          const E = b.isFreeTrial,
            D = 0 === b.daysLeftInTrial,
            T = S.amount,
            N = S.currency,
            M = b.spaceTier === _.lD.Team,
            I = (0, oa.Z)(S.dateUnix),
            w = T / 100,
            k = w && s ? w / s : 0,
            A = "US" === p ? "team_account_teamplan_plan_total_with_tax" : "team_account_teamplan_plan_total_with_vat",
            O = !f && void 0 !== C?.expectedTaxesInCents && C?.expectedTaxesInCents > 0,
            L = O && T && C?.expectedTaxesInCents ? (T + C.expectedTaxesInCents) / 100 : void 0;
          return (0, l.tZ)(
            n.Fragment,
            null,
            (0, l.tZ)(
              c.Ejs,
              { flexDirection: "column", gap: "12px", sx: Fn.CARD_BORDER },
              E &&
                !i &&
                (0, l.tZ)(
                  c.Ejs,
                  { sx: Ns.WRAPPER },
                  (0, l.tZ)(
                    l.nv,
                    { textStyle: "ds.title.block.medium", color: "ds.text.neutral.quiet" },
                    r("team_account_teamplan_plan_header_trial")
                  ),
                  (0, l.tZ)(
                    c.Ejs,
                    { sx: { margin: "16px 0px" } },
                    (0, l.tZ)(
                      l.nv,
                      { color: "ds.text.neutral.standard", textStyle: "ds.specialty.spotlight.small" },
                      I ? r.shortDate(I, pa.qG.LL) : null
                    )
                  ),
                  (0, l.tZ)(
                    l.nv,
                    { color: "ds.text.neutral.catchy", textStyle: "ds.title.block.medium" },
                    I ? r("team_account_teamplan_plan_copy_trial", { expireDate: r.shortDate(I, pa.qG.MMMM_D) }) : null
                  ),
                  (0, l.tZ)(
                    "div",
                    { sx: Ns.BUY_DASHLANE_BUTTON },
                    (0, l.tZ)(
                      l.zx,
                      { mood: "neutral", intensity: "quiet", size: "medium", fullsize: !0, onClick: t },
                      r("team_account_teamplan_plan_buy_dashlane")
                    ),
                    !b.isGracePeriod && D && d
                      ? (0, l.tZ)(
                          l.zx,
                          {
                            mood: "brand",
                            intensity: "supershy",
                            layout: "labelOnly",
                            size: "medium",
                            fullsize: !0,
                            onClick: () => {
                              (0, P.Kz)(
                                new o.UserClickEvent({ button: o.Button.ExtendTrial, clickOrigin: o.ClickOrigin.BillingInformation })
                              ),
                                h(!0);
                            }
                          },
                          r("team_dashboard_extend_trial_button")
                        )
                      : null
                  )
                ),
              !E &&
                !i &&
                (0, l.tZ)(
                  c.Ejs,
                  { sx: Ns.WRAPPER },
                  (0, l.tZ)(
                    l.nv,
                    { textStyle: "ds.title.block.medium", color: "ds.text.neutral.quiet" },
                    r(e ? "team_account_teamplan_plan_expiration_header" : "team_account_teamplan_plan_header_annual")
                  ),
                  (0, l.tZ)(
                    c.Ejs,
                    { sx: { margin: "16px 0px" } },
                    (0, l.tZ)(
                      l.nv,
                      {
                        color: "ds.text.neutral.standard",
                        textStyle: "ds.specialty.spotlight.small",
                        className: "automation-tests-tac-billing"
                      },
                      r.shortDate(I, pa.qG.LL)
                    )
                  ),
                  e
                    ? (0, l.tZ)(
                        l.nv,
                        { color: "ds.text.neutral.catchy", textStyle: "ds.title.block.medium" },
                        r("team_account_teamplan_plan_expiration_description", { expireDate: r.shortDate(I, pa.qG.LL) })
                      )
                    : (0, l.tZ)(
                        l.nv,
                        { color: "ds.text.neutral.catchy", textStyle: "ds.title.block.medium" },
                        O
                          ? r(A, {
                              numSeats: s,
                              seatCost: k ? r.price(N, k, { notation: "compact" }) : null,
                              totalCost: L ? r.price(N, L) : null
                            })
                          : r("team_account_teamplan_plan_copy", {
                              numSeats: s,
                              seatCost: k ? r.price(N, k, { notation: "compact" }) : null,
                              totalCost: w ? r.price(N, w, { notation: "compact" }) : null
                            })
                      ),
                  (0, l.tZ)(Ds, { handleGetPastReceipts: a })
                ),
              i &&
                (0, l.tZ)(
                  c.Ejs,
                  { sx: Ns.WRAPPER },
                  (0, l.tZ)(
                    l.nv,
                    { textStyle: "ds.title.block.medium", color: "ds.text.danger.standard" },
                    r("team_account_teamplan_plan_header_trial_discontinued")
                  ),
                  (0, l.tZ)(
                    c.Ejs,
                    { sx: { margin: "16px 0px" } },
                    (0, l.tZ)(
                      l.nv,
                      { color: "ds.text.danger.standard", textStyle: "ds.specialty.spotlight.small" },
                      r.shortDate(I, pa.qG.LL)
                    )
                  ),
                  (0, l.tZ)(
                    l.nv,
                    { color: "ds.text.neutral.catchy", textStyle: "ds.title.block.medium" },
                    r(
                      M
                        ? "team_account_teamplan_plan_copy_trial_team_discontinued"
                        : "team_account_teamplan_plan_copy_trial_business_discontinued"
                    )
                  ),
                  (0, l.tZ)(
                    "div",
                    { sx: Ns.BUY_DASHLANE_BUTTON },
                    (0, l.tZ)(
                      l.zx,
                      { mood: "neutral", intensity: "quiet", size: "medium", fullsize: !0, onClick: t },
                      r("team_account_teamplan_plan_buy_dashlane_trial_discontinued")
                    )
                  ),
                  (0, l.tZ)(Ds, { handleGetPastReceipts: a })
                )
            ),
            y ? (0, l.tZ)(Z.XA, { initialDialog: Z.s9.SURVEY }) : null
          );
        },
        Is = () => {
          const { translate: e } = (0, g.Z)();
          return (0, l.tZ)(
            Hn,
            null,
            (0, l.tZ)(
              l.nv,
              { color: "ds.text.neutral.quiet", textStyle: "ds.body.standard.regular" },
              e.markup("team_account_discontinued_downgrade_message_markup", {}, { linkTarget: "_blank" })
            )
          );
        };
      var ws, ks, As, Os, Ls, zs;
      const js = { backgroundColor: "ds.container.agnostic.neutral.supershy", padding: "32px", flex: "1", overflow: "visible" },
        Rs = ({
          lee: e,
          planName: t,
          usersToBeRenewedCount: a,
          isWindowCollapsed: s,
          handleGetPastReceipts: i,
          onRequestTeamUpgrade: o
        }) => {
          const { translate: d } = (0, g.Z)(),
            u = (0, kt.Y)(),
            _ = (0, Ze.JS)(),
            m = (0, Ze.lZ)(),
            { loading: p, billingCountry: y } = v(),
            h = (0, Wn.M)(),
            b = !t,
            x = (0, Ce.o)(Vn.P.EcommerceWebSadPathProd),
            S = (0, Ce.o)(G.w.EcommerceWebB2BDiscontinuationPhase1);
          if (u.status !== r.rq.Success || !u.data || _.status !== r.rq.Success || !_.data || !h || m.isLoading || p)
            return (0, l.tZ)(c.HoD, { color: c.colors.midGreen00 });
          const f = _.data.b2bStatus?.currentTeam?.isRenewalStopped,
            C = "invoice" === u.data.planType,
            Z = !C && "US" !== y,
            E = m.isTrial && m.isTeamSoftDiscontinued,
            D = S && E;
          return (0, l.tZ)(
            c.Ejs,
            { flexDirection: "column" },
            (0, l.tZ)(
              l.X6,
              { textStyle: "ds.title.section.large", as: "h1", color: "ds.text.neutral.standard", sx: { mb: "32px" } },
              d("team_account_heading_billing_information")
            ),
            (0, l.tZ)(
              c.Ejs,
              { gap: "24px" },
              (0, l.tZ)(
                c.Ejs,
                { flexDirection: "column", sx: { maxWidth: "40em" } },
                (0, l.tZ)(
                  c.Ejs,
                  { sx: (0, l.jM)([Fn.CARD_BORDER, js]), flexDirection: "column" },
                  (0, l.tZ)(gs, { lee: e }),
                  ws || (ws = (0, l.tZ)(aa, null)),
                  C
                    ? (0, l.tZ)(
                        n.Fragment,
                        null,
                        ks || (ks = (0, l.tZ)(hs, null)),
                        As || (As = (0, l.tZ)(aa, null)),
                        (0, l.tZ)(Ss, { isDisabled: b })
                      )
                    : (0, l.tZ)(Es, { isDisabled: b }),
                  Z
                    ? (0, l.tZ)(
                        n.Fragment,
                        null,
                        (0, l.tZ)("div", { sx: { marginBottom: "16px" } }),
                        Os || (Os = (0, l.tZ)(aa, null)),
                        Ls || (Ls = (0, l.tZ)(en, { isInAccountSummary: !0 }))
                      )
                    : null
                )
              ),
              (0, l.tZ)(
                c.k$b,
                { sx: { width: s ? "40em" : "416px" } },
                (0, l.tZ)(Ms, {
                  onClickBuyDashlane: o,
                  handleGetPastReceipts: i,
                  usersToBeRenewedCount: a,
                  isRenewalStopped: f,
                  discontinuedTrial: !!D
                })
              ),
              (0, l.tZ)(
                c.Ejs,
                { flexDirection: "column", sx: { maxWidth: "40em" } },
                D ? zs || (zs = (0, l.tZ)(Is, null)) : x ? (0, l.tZ)(os, { status: h.status }) : null
              )
            )
          );
        };
      var Ps = a(342868);
      const Us = ({ isOpen: e, lee: t, onClose: a }) => {
        const s = (0, n.useRef)(),
          i = (0, n.useRef)(),
          o = (0, n.useRef)(),
          r = (0, n.useRef)(),
          { translate: d } = (0, g.Z)(),
          { reportTACError: u } = H(),
          [_, m] = (0, n.useState)(!1),
          p = cn();
        if (!p) return null;
        const y = () => {
            m(!1), a();
          },
          h = () => {
            const e = (0, Nn.v0)(t.globalState);
            if (e)
              if (s.current?.value) {
                y();
                try {
                  (0, j.Yo)(
                    "https://ws1.dashlane.com/1/invoiceGeneration/generateTeamReceipt.pdf?" +
                      ((e) => {
                        const t = {
                          ...e,
                          recipient: s.current?.value,
                          company: i.current?.value,
                          address: o.current?.value,
                          vatNumber: r.current?.value
                        };
                        return Ps.stringify(t);
                      })(e)
                  );
                } catch (e) {
                  u(e);
                }
              } else m(!0);
            else u(new Error(ls.N));
          },
          b = _ ? { feedbackText: d("team_account_past_receipts_dialog_recipient_is_required"), feedbackType: "error" } : {};
        return (0, l.tZ)(
          q.o,
          {
            title: d("team_account_past_receipts_dialog_title"),
            showCloseIcon: !0,
            isOpen: e,
            onRequestClose: y,
            footer: (0, l.tZ)(c.cNS, {
              primaryButtonTitle: d("team_account_past_receipts_dialog_button_generate"),
              primaryButtonOnClick: h
            })
          },
          (0, l.tZ)(
            c.T5p,
            { as: "form", onSubmit: h, gap: "1em" },
            (0, l.tZ)(c.oil, {
              fullWidth: !0,
              label: d("team_account_past_receipts_dialog_recipient") + " *",
              placeholder: d("team_account_past_receipts_dialog_recipient_hint"),
              onKeyDown: () => {
                _ && "" !== s.current?.value && m(!1);
              },
              ref: s,
              ...b
            }),
            (0, l.tZ)(c.oil, {
              fullWidth: !0,
              label: d("team_account_past_receipts_dialog_company"),
              defaultValue: p,
              placeholder: d("team_account_past_receipts_dialog_company_hint"),
              ref: i
            }),
            (0, l.tZ)(c.oil, {
              fullWidth: !0,
              label: d("team_account_past_receipts_dialog_billing_address"),
              placeholder: d("team_account_past_receipts_dialog_billing_address_hint"),
              ref: o
            }),
            (0, l.tZ)(c.oil, {
              fullWidth: !0,
              label: d("team_account_past_receipts_dialog_vat"),
              placeholder: d("team_account_past_receipts_dialog_vat_hint"),
              ref: r
            })
          )
        );
      };
      var Bs, Gs, Fs, qs, $s, Vs, Ws;
      const Hs = { marginTop: "16px", "&:hover": { cursor: "pointer", borderWidth: "2px", borderColor: "ds.border.brand.standard.hover" } },
        Ks = { width: "100%", padding: "20px 16px" },
        Ys = { padding: "8px", backgroundColor: "ds.container.expressive.brand.quiet.idle", borderRadius: "8px", margin: "auto" },
        Qs = ({ cardTitle: e, cardDescription: t }) =>
          (0, B.tZ)(
            n.Fragment,
            null,
            Bs ||
              (Bs = (0, B.tZ)(
                c.dDn,
                { sx: Ys },
                (0, B.tZ)(l.JO, { name: "ItemPaymentOutlined", size: "large", color: "ds.text.brand.standard" })
              )),
            (0, B.tZ)(
              c.dDn,
              null,
              (0, B.tZ)(c.nvN, { color: "ds.text.neutral.standard", bold: !0 }, e),
              (0, B.tZ)(c.nvN, { color: "ds.text.neutral.quiet", size: "small", sx: { marginTop: "4px" } }, t)
            )
          ),
        Xs = ({ handleClose: e, openUpgradeDialog: t }) => {
          const [a, s] = (0, n.useState)(!1),
            [i, o] = (0, n.useState)(!1),
            { translate: r } = (0, g.Z)(),
            { loading: d, hasCreditCardPaymentMethod: u, isExpired: _, pollUntilCardUpdate: m } = (0, y.C)({ handleCardUpdate: t });
          if (d) return (0, B.tZ)(c.HoD, { color: c.colors.midGreen00 });
          const h = u
              ? {
                  cardTitle: "team_payment_method_dialog_another_credit_card",
                  cardDescription: "team_payment_method_dialog_replace_credit_card"
                }
              : { cardTitle: "team_payment_method_dialog_credit_card", cardDescription: "team_payment_method_dialog_secondary_payment" },
            b = u ? xs.A.REPLACE : xs.A.ADD;
          return (0, B.tZ)(
            c.VqE,
            { isOpen: !0, closeIconName: r("_common_dialog_dismiss_button"), onClose: e, ariaDescribedby: "dialogContent" },
            (0, B.tZ)(c.j49, { color: "ds.text.neutral.quiet", sx: { marginBottom: "16px" } }, r("team_payment_method_dialog_buy_seats")),
            (0, B.tZ)(c.$N8, { title: r("team_payment_method_dialog_title") }),
            (0, B.tZ)(
              c.a7O,
              null,
              u &&
                (0, B.tZ)(
                  c.Zbd,
                  {
                    sx: Hs,
                    onClick: () => {
                      _ ? (m(), o(!0)) : t();
                    }
                  },
                  (0, B.tZ)(
                    c.T5p,
                    { gap: "12px", gridTemplateColumns: "1fr 60px", sx: { width: "100%", padding: "0 16px" } },
                    Gs ||
                      (Gs = (0, B.tZ)(
                        c.dDn,
                        null,
                        (0, B.tZ)(p.I, { b2b: !0, hideTitle: !0, hideUpdateButton: !0, displayModifiedCreditCardView: !0 })
                      )),
                    (0, B.tZ)(
                      c.dDn,
                      { sx: { margin: "auto" } },
                      _
                        ? (0, B.tZ)(
                            l.zx,
                            { mood: "brand", intensity: "supershy", size: "large" },
                            i
                              ? (0, B.tZ)(xs.J, { b2c: !1, setPaymentLoading: o, mode: xs.A.UPDATE })
                              : Fs ||
                                  (Fs = (0, B.tZ)(l.JO, { name: "ArrowRightOutlined", size: "medium", color: "ds.text.neutral.standard" }))
                          )
                        : qs ||
                            (qs = (0, B.tZ)(l.zx, {
                              mood: "brand",
                              intensity: "supershy",
                              size: "large",
                              layout: "iconOnly",
                              icon: (0, B.tZ)(l.JO, { name: "ArrowRightOutlined", size: "medium", color: "ds.text.neutral.standard" })
                            }))
                    )
                  )
                ),
              (0, B.tZ)(
                c.Zbd,
                {
                  sx: Hs,
                  onClick: () => {
                    m(), s(!0);
                  }
                },
                (0, B.tZ)(
                  c.T5p,
                  { gap: "12px", gridTemplateColumns: "40px 1fr 60px", sx: Ks },
                  (0, B.tZ)(Qs, { cardTitle: r(h.cardTitle), cardDescription: r(h.cardDescription) }),
                  (0, B.tZ)(
                    c.dDn,
                    { sx: { margin: "auto" } },
                    (0, B.tZ)(
                      l.zx,
                      { mood: "brand", intensity: "supershy", size: "large" },
                      a
                        ? (0, B.tZ)(xs.J, { b2c: !1, setPaymentLoading: s, mode: b })
                        : $s || ($s = (0, B.tZ)(l.JO, { name: "ArrowRightOutlined", size: "medium", color: "ds.text.neutral.standard" }))
                    )
                  )
                )
              ),
              (0, B.tZ)(
                c.Zbd,
                {
                  sx: Hs,
                  onClick: () => {
                    (0, j.Yo)(ce.i1);
                  }
                },
                (0, B.tZ)(
                  c.T5p,
                  { gap: "12px", gridTemplateColumns: "40px 1fr 60px", sx: Ks },
                  Vs ||
                    (Vs = (0, B.tZ)(
                      c.dDn,
                      { sx: Ys },
                      (0, B.tZ)(l.JO, { name: "ItemTaxNumberOutlined", size: "large", color: "ds.text.brand.standard" })
                    )),
                  (0, B.tZ)(
                    c.dDn,
                    null,
                    (0, B.tZ)(c.nvN, { color: "ds.text.neutral.standard", bold: !0 }, r("team_account_invoice_payment")),
                    (0, B.tZ)(
                      c.nvN,
                      { color: "ds.text.neutral.quiet", size: "small", sx: { marginTop: "4px" } },
                      r("team_payment_method_dialog_support_team")
                    )
                  ),
                  (0, B.tZ)(
                    c.dDn,
                    { sx: { margin: "auto" } },
                    Ws ||
                      (Ws = (0, B.tZ)(l.zx, {
                        mood: "brand",
                        intensity: "supershy",
                        size: "large",
                        layout: "iconOnly",
                        icon: (0, B.tZ)(l.JO, { name: "ArrowRightOutlined", size: "medium", color: "ds.text.neutral.standard" })
                      }))
                  )
                )
              )
            )
          );
        },
        Js = 54999,
        ei = "sales@dashlane.com",
        ti = "leeloo_teamplan_starter",
        ai = "leeloo_teamplan_business",
        ni = "leeloo_teamplan_team",
        si = (e) => e > Js,
        ii = (e) => {
          (0, P.Kz)(
            new o.UserBuySeatEvent({
              flowStep: o.FlowStep.Error,
              hasPromo: !1,
              initialSeatCount: e.renewal.seatsCount,
              priceAmountCents: e.additionalSeats.value,
              priceCurrencyCode: o.PriceCurrencyCode[e.currency],
              purchasedSeatCount: e.additionalSeats.seatsCount,
              errorCheckout: o.ErrorCheckout.UnexpectedUnknown
            })
          );
        };
      var oi = a(411538);
      const ri = ({ isComputing: e, className: t, price: a }) => {
          const n = e ? (0, l.tZ)(oi.Z, { size: 16, containerStyle: { display: "inline-block", position: "relative" } }) : a;
          return (0, l.tZ)("span", { className: t }, n);
        },
        li = ({ billingDetails: e, additionalSeatsDetails: t }) => {
          var a, n;
          const { translate: s } = (0, g.Z)(),
            i = e.additionalSeats.seatsCount,
            o = null != (a = e.additionalSeats.taxes) ? a : 0,
            r = s.price(e.currency, o / 100),
            l = o > 0,
            c = e.renewal.value + (null != (n = e.renewal.taxes) ? n : 0),
            d = s.price(e.currency, c / 100),
            u = 100 * t.reduce((e, t) => e + t.costPerSeat * t.numberOfSeats, 0),
            _ = s.price(e.currency, u / 100),
            m = u - e.additionalSeats.value,
            p = u + o - m;
          return {
            additionalSeatsCount: i,
            additionalSeatsTaxesTranslation: r,
            hasTax: l,
            renewalTotalPrice: d,
            tierPriceTranslation: _,
            proratedDiscountTranslation: s.price(e.currency, m / 100),
            hasProratedDiscount: m > 0,
            dueTodayTranslation: s.price(e.currency, p / 100)
          };
        };
      var ci, di, ui, _i, mi;
      const pi = { display: "flex", margin: "24px 0", color: "ds.text.neutral.standard" },
        gi = ({ label: e, labelSx: t, value: a }) =>
          (0, l.tZ)(
            c.Ejs,
            { sx: pi },
            e ? (0, l.tZ)(c.k$b, { flex: "1", sx: { ...t } }, e) : null,
            a ? (0, l.tZ)(c.k$b, { flex: "0" }, a) : null
          ),
        yi = ({
          nextBillingDate: e,
          billingDetails: t,
          dueNowTranslation: a,
          seatCountLabel: s,
          totalSeatCount: i,
          onAdditionalSeatCountChange: o,
          isComputingBilling: r,
          additionalSeatsDetails: d,
          planType: u,
          billingCountry: _
        }) => {
          const { translate: m } = (0, g.Z)(),
            {
              additionalSeatsCount: h,
              additionalSeatsTaxesTranslation: b,
              hasTax: x,
              renewalTotalPrice: S,
              tierPriceTranslation: v,
              proratedDiscountTranslation: f,
              hasProratedDiscount: C
            } = li({ billingDetails: t, additionalSeatsDetails: d }),
            { pollUntilCardUpdate: Z } = (0, y.C)({}),
            [E, D] = (0, n.useState)(!1),
            T = "US" === _ ? "team_account_teamplan_upgrade_tax" : "team_account_teamplan_vat",
            N =
              "invoice" === u
                ? "team_account_teamplan_upgrade_invoice_renewal_price"
                : x
                ? "US" === _
                  ? "team_account_teamplan_upgrade_renewal_tax_price"
                  : "team_account_teamplan_upgrade_renewal_vat_price"
                : "team_account_teamplan_upgrade_renewal_price";
          return (0, l.tZ)(
            n.Fragment,
            null,
            (0, l.tZ)(
              c.Ejs,
              { sx: { padding: "28px 0", fontSize: 4, fontWeight: "bold", color: "ds.text.neutral.catchy" } },
              (0, l.tZ)(ta.w, { inputWidth: "66px", label: s, id: "numberOfSeats", defaultValue: 1, minValue: 1, onChange: o })
            ),
            ci || (ci = (0, l.tZ)(aa, null)),
            (0, l.tZ)(gi, { label: m("team_account_teamplan_upgrade_premium_number_of_seats"), value: i }),
            (0, l.tZ)(gi, { label: m("team_account_teamplan_upgrade_new_seat", { count: h }), value: v }),
            x && (0, l.tZ)(gi, { label: m(T), value: b }),
            C &&
              (0, l.tZ)(gi, {
                label: (0, l.tZ)(
                  n.Fragment,
                  null,
                  (0, l.tZ)(c.nvN, null, m("team_account_teamplan_changeplan_order_summary_prorated_discount")),
                  (0, l.tZ)(
                    c.ua7,
                    { content: m("team_account_teamplan_changeplan_order_summary_prorated_discount_tooltip") },
                    (0, l.tZ)(c.uMt, { size: 16, color: c.colors.grey00 })
                  )
                ),
                labelSx: { display: "flex", alignItems: "center" },
                value: f
              }),
            (0, l.tZ)(
              n.Fragment,
              null,
              di || (di = (0, l.tZ)(aa, null)),
              (0, l.tZ)(c.nvN, { sx: { marginTop: "24px", fontSize: "18px" } }, m("team_payment_method_dialog_credit_card")),
              (0, l.tZ)(
                c.Ejs,
                {
                  sx: { ...pi, borderWidth: "1px", borderStyle: "solid", borderColor: "ds.border.neutral.quiet.idle", borderRadius: "4px" }
                },
                (0, l.tZ)(
                  c.k$b,
                  { flex: "1", sx: { paddingLeft: "16px" } },
                  ui || (ui = (0, l.tZ)(p.I, { b2b: !0, hideTitle: !0, hideUpdateButton: !0, displayModifiedCreditCardView: !0 }))
                ),
                (0, l.tZ)(
                  c.k$b,
                  { flex: "0", sx: { margin: "auto 0", paddingRight: "12px" } },
                  (0, l.tZ)(
                    l.zx,
                    {
                      icon: _i || (_i = (0, l.tZ)(l.JO, { name: "ActionEditOutlined" })),
                      layout: "iconLeading",
                      intensity: "supershy",
                      onClick: () => {
                        Z(), D(!0);
                      }
                    },
                    E ? (0, l.tZ)(xs.J, { b2c: !1, setPaymentLoading: D, mode: xs.A.UPDATE }) : m("team_account_name_edit_label")
                  )
                )
              )
            ),
            (0, l.tZ)(c.Ejs, { sx: pi }, (0, l.tZ)(l.ke, { title: m(N, { totalPrice: S, totalSeat: i, date: m.shortDate(e, pa._T.LL) }) })),
            mi || (mi = (0, l.tZ)(aa, null)),
            (0, l.tZ)(
              c.Ejs,
              { sx: { display: "flex", marginTop: "24px", fontSize: 4 } },
              (0, l.tZ)(c.k$b, { flex: "1" }, m("team_account_teamplan_upgrade_due_now")),
              (0, l.tZ)(ri, { isComputing: r, price: a, className: "totalAmount--BaEFEdvow1" })
            )
          );
        },
        hi = (e, t) => t.startMembers - e.startMembers,
        bi = (e, t, a) => {
          if (!a) return [];
          const n = a.slice(0).sort(hi);
          if (0 !== n[n.length - 1].startMembers) throw new Error("getAdditionalSeatsCostDetails:: missing tier one in price ranges");
          if (e < 0 || t < 0) throw new Error("getAdditionalSeatsCostDetails:: number of licences cannot be negative");
          return n.reduce(
            (
              (e, t) =>
              ({ membersRangeEnd: a, costDetails: n }, s) => {
                const i = s.startMembers;
                if (i <= t && a > e && t > e) {
                  const o = Math.max(Math.max(i - 1, e), 0),
                    r = Math.min(t, a - 1);
                  n.unshift({ costPerSeat: s.price / 100, numberOfSeats: r - o });
                }
                return { membersRangeEnd: i, costDetails: n };
              }
            )(e, t),
            { membersRangeEnd: Number.MAX_VALUE, costDetails: [] }
          ).costDetails;
        },
        xi = (0, n.forwardRef)(function (
          {
            nextBillingDetails: e,
            billingDetails: t,
            isComputingBilling: a,
            onSeatCountChange: s,
            numberOfCurrentPaidSlots: i,
            numberOfCurrentUsedSlots: o,
            currentPlanPriceRanges: r,
            planType: c,
            billingCountry: d
          },
          u
        ) {
          var _;
          const [m, p] = (0, n.useState)(1),
            [y, h] = (0, n.useState)(!1),
            { translate: b } = (0, g.Z)();
          (0, n.useImperativeHandle)(u, () => ({ additionalSeatCount: m }));
          const x = i + m,
            S = (0, oa.Z)(e.dateUnix),
            v = bi(i, t.renewal.seatsCount, r),
            f = null != (_ = t.additionalSeats.taxes) ? _ : 0,
            C = t.additionalSeats.value + f,
            Z = y ? "-" : b.price(t.currency, C / 100),
            E = b("team_account_teamplan_upgrade_premium_number_of_additional_seats"),
            D = y
              ? b("team_account_teamplan_upgrade_premium_buy_more_seats_than_cap", { seatCap: Js, salesEmail: ei })
              : m < 1
              ? b("team_account_teamplan_upgrade_premium_buy_more_seats_when_premium", { count: 1 })
              : o > x
              ? b("team_account_teamplan_upgrade_premium_below_used_seat_count", { usedSeatCount: o })
              : null;
          return (0, l.tZ)(
            n.Fragment,
            null,
            D ? (0, l.tZ)(l.ke, { className: "errorToaster--MU18Q0SFxy", title: D, mood: "danger" }) : null,
            (0, l.tZ)(yi, {
              nextBillingDate: S,
              billingDetails: t,
              dueNowTranslation: Z,
              seatCountLabel: E,
              totalSeatCount: x,
              onAdditionalSeatCountChange: (e) => {
                const t = e < 0,
                  a = e > Js;
                h(a), p(e), a || t || s(e);
              },
              isComputingBilling: a,
              additionalSeatsDetails: v,
              planType: null != c ? c : "",
              billingCountry: d
            })
          );
        }),
        Si = xi,
        vi = () => {
          const { translate: e } = (0, g.Z)();
          return (0, l.tZ)(
            c.u_l,
            { isOpen: !0, onClose: () => {} },
            (0, l.tZ)(
              c.Ejs,
              {
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "center",
                sx: { width: "100vw", height: "100vh", backgroundColor: c.colors.dashGreen06 }
              },
              (0, l.tZ)(c.HoD, { size: "88px", color: c.colors.dashGreen00 }),
              (0, l.tZ)(
                c.Ejs,
                { alignItems: "center", flexDirection: "column", justifyContent: "center", gap: "6px", sx: { paddingTop: "22px" } },
                (0, l.tZ)(c.nvN, { size: "medium", color: c.colors.grey00 }, e("team_account_addseats_processing_copy_line_1")),
                (0, l.tZ)(c.nvN, { size: "medium", color: c.colors.grey00 }, e("team_account_addseats_processing_copy_line_2"))
              )
            )
          );
        };
      var fi = a(169340);
      const Ci = (e) => {
        const { reportTACError: t } = H(),
          [a, s] = (0, n.useState)({
            renewal: { seatsCount: 0, value: 0, taxes: 0 },
            additionalSeats: { seatsCount: 0, value: 0, taxes: 0 },
            currency: "usd"
          }),
          [i, o] = (0, n.useState)(!1),
          [r, l] = (0, n.useState)(0),
          [c, d] = (0, n.useState)(0),
          u = (0, f.debounce)((a) => {
            (async (a) => {
              try {
                var n;
                const t = await ca.C.computePlanPricing({ seats: a });
                if (!t.success) return;
                const r = {
                  renewal: { seatsCount: (i = t.data).renewal.seatsCount, value: i.renewal.price.value, taxes: i.renewal.price.taxes },
                  additionalSeats: {
                    seatsCount: i.additionalSeats.seatsCount,
                    value: i.additionalSeats.price.value,
                    taxes: i.additionalSeats.price.taxes
                  },
                  currency: i.renewal.price.currency
                };
                if (null !== e && e() !== r.additionalSeats.seatsCount) return;
                const c = r.additionalSeats.value,
                  u = null != (n = r.additionalSeats.taxes) ? n : 0;
                l(c), d(u), s(r), o(!1);
              } catch (e) {
                const a = new Error((0, fi.i)(e));
                t(a);
              }
              var i;
            })(a);
          }, 500);
        return {
          billingDetails: a,
          isComputingBilling: i,
          amountToPay: r,
          amountToTax: c,
          onSeatCountChange: (e) => {
            u(e), o(!0);
          }
        };
      };
      var Zi;
      const Ei = ({
        onUpgradeSuccess: e,
        nextBillingDetails: t,
        numberOfCurrentPaidSlots: a,
        numberOfCurrentUsedSlots: s,
        onRequestClose: i,
        planTier: r
      }) => {
        const c = (0, n.useRef)(null),
          [m, p] = (0, n.useState)(!0),
          [y, h] = (0, n.useState)(!1),
          { translate: b } = (0, g.Z)(),
          { reportTACError: x } = H(),
          S = (0, d.k)(u.o, "getTeamBillingInformation"),
          f = (0, Ze.JS)(),
          { loading: C, billingCountry: Z } = v(),
          E = S.status === se.rq.Success ? S.data.planDetails.priceRanges : void 0,
          D = f.status === se.rq.Success ? f.data.planType : void 0,
          T = (0, n.useCallback)(() => {
            var e;
            return null != (e = c?.current?.additionalSeatCount) ? e : 1;
          }, []),
          N = null === c || S.status === se.rq.Loading || f.status === se.rq.Loading || C || void 0 === Z,
          { billingDetails: M, isComputingBilling: I, onSeatCountChange: w } = Ci(T),
          k = (function (e, t) {
            switch (e) {
              case _.lD.Starter:
                return t(ti);
              case _.lD.Team:
                return t(ni);
              case _.lD.Business:
                return t(ai);
              default:
                throw new Error("Cannot retrieve default key");
            }
          })(r, b);
        (0, n.useEffect)(() => {
          (0, P.Nc)(o.PageView.TacAccountBuy);
        }, []),
          (0, n.useEffect)(() => {
            if (S.status === se.rq.Error) {
              const e = new Error("Error retrieving TeamBillingInformation to update price ranges");
              x(e);
            }
          }, [S]),
          (0, n.useEffect)(() => {
            w(T());
          }, [T]);
        const A = bi(a, M.renewal.seatsCount, E);
        if (N) return null;
        const O = (0, l.tZ)(
          "div",
          { style: { display: "flex", flexDirection: "row", justifyContent: "flex-end", maxWidth: "100%" } },
          (0, l.tZ)(
            l.zx,
            { intensity: "quiet", mood: "neutral", size: "medium", onClick: i, sx: { marginRight: "8px" } },
            b("team_account_teamplan_upgrade_premium_cancel")
          ),
          (0, l.tZ)(
            l.zx,
            {
              size: "medium",
              onClick: async () => {
                p(!1), h(!0);
                try {
                  (await ca.C.addSeats({ seats: T() })).success
                    ? (((e) => {
                        (0, P.Kz)(
                          new o.UserBuySeatEvent({
                            flowStep: o.FlowStep.Complete,
                            hasPromo: !1,
                            initialSeatCount: e.renewal.seatsCount,
                            priceAmountCents: e.additionalSeats.value,
                            priceCurrencyCode: o.PriceCurrencyCode[e.currency],
                            purchasedSeatCount: e.additionalSeats.seatsCount
                          })
                        );
                      })(M),
                      e(A, M))
                    : ii(M);
                } catch {
                  ii(M);
                }
              }
            },
            b("team_account_teamplan_upgrade_buy_seat", { count: T() })
          )
        );
        return (0, l.tZ)(
          n.Fragment,
          null,
          y ? Zi || (Zi = (0, l.tZ)(vi, null)) : null,
          m
            ? (0, l.tZ)(
                q.o,
                {
                  showCloseIcon: !0,
                  footer: O,
                  title: b("team_account_teamplan_upgrade_add_seats_title", { plan: k }),
                  isOpen: !0,
                  onRequestClose: i
                },
                (0, l.tZ)(Si, {
                  ref: c,
                  planType: D,
                  nextBillingDetails: t,
                  billingDetails: M,
                  isComputingBilling: I,
                  onSeatCountChange: w,
                  numberOfCurrentPaidSlots: a,
                  numberOfCurrentUsedSlots: s,
                  currentPlanPriceRanges: E,
                  billingCountry: Z
                })
              )
            : null
        );
      };
      var Di;
      const Ti = ({ label: e, value: t, ...a }) =>
          (0, l.tZ)(
            c.Ejs,
            { justifyContent: "flex-end", sx: { display: "flex", justifyContent: "flexEnd" }, ...a },
            e ? (0, l.tZ)(c.k$b, { flex: "1", sx: { display: "flex", alignItems: "center" } }, e) : null,
            t ? (0, l.tZ)(c.k$b, { sx: { display: "flex", alignItems: "center" } }, t) : null
          ),
        Ni = ({ billingDetails: e, additionalSeatsDetails: t }) => {
          const { translate: a } = (0, g.Z)(),
            {
              additionalSeatsCount: n,
              additionalSeatsTaxesTranslation: s,
              hasTax: i,
              tierPriceTranslation: o,
              proratedDiscountTranslation: r,
              hasProratedDiscount: d,
              dueTodayTranslation: u
            } = li({ billingDetails: e, additionalSeatsDetails: t });
          return (0, l.tZ)(
            c.Ejs,
            {
              flexDirection: "column",
              gap: "32px",
              sx: {
                borderStyle: "solid",
                borderColor: "ds.border.neutral.quiet.idle",
                borderWidth: "1px",
                backgroundColor: "ds.container.agnostic.neutral.supershy",
                padding: "24px",
                borderRadius: "4px"
              }
            },
            (0, l.tZ)(Ti, {
              alignItems: "end",
              label: (0, l.tZ)(c.X6q, { size: "small" }, a("team_account_addseats_success_order_summary_header")),
              value: (0, l.tZ)(c.nvN, { color: "ds.text.neutral.quiet" }, (0, Ga.Z)(new Date(), "MM/dd/yyyy"))
            }),
            (0, l.tZ)(
              c.Ejs,
              { flexDirection: "column", gap: "16px" },
              (0, l.tZ)(Ti, {
                label: (0, l.tZ)(
                  c.nvN,
                  { size: "small", color: "ds.text.neutral.catchy" },
                  a("team_account_teamplan_upgrade_new_seat", { count: n })
                ),
                value: (0, l.tZ)(c.nvN, { size: "small", color: "ds.text.neutral.catchy" }, o)
              }),
              i
                ? (0, l.tZ)(Ti, {
                    label: (0, l.tZ)(
                      c.nvN,
                      { size: "small", color: "ds.text.neutral.catchy" },
                      a("team_account_addseats_success_order_summary_tax")
                    ),
                    value: (0, l.tZ)(c.nvN, { size: "small", color: "ds.text.neutral.catchy" }, s)
                  })
                : null,
              d
                ? (0, l.tZ)(Ti, {
                    label: (0, l.tZ)(
                      c.Ejs,
                      { alignItems: "center", gap: "5px" },
                      (0, l.tZ)(
                        c.nvN,
                        { size: "small", color: "ds.text.neutral.catchy" },
                        a("team_account_addseats_success_order_summary_prorated_discount")
                      ),
                      (0, l.tZ)(
                        c.ua7,
                        { content: a("team_account_addseats_success_order_summary_prorated_discount_tooltip") },
                        Di || (Di = (0, l.tZ)(c.uMt, { size: 16, color: "ds.text.neutral.catchy" }))
                      )
                    ),
                    value: (0, l.tZ)(c.nvN, { size: "small", color: "ds.text.neutral.catchy" }, r)
                  })
                : null,
              (0, l.tZ)("div", {
                style: {
                  width: "100%",
                  borderColor: l.O9.lightTheme.ds.border.neutral.quiet.idle,
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderBottom: "0",
                  margin: "0"
                }
              }),
              (0, l.tZ)(Ti, {
                label: (0, l.tZ)(
                  c.nvN,
                  { size: "large", bold: !0, color: "ds.text.neutral.catchy" },
                  a("team_account_addseats_success_order_summary_total")
                ),
                value: (0, l.tZ)(c.nvN, { size: "large", bold: !0, color: "ds.text.neutral.catchy" }, u)
              })
            )
          );
        },
        Mi = ({ isBusiness: e, additionalSeats: t, onGetPastReceipts: a }) => {
          const { routes: n } = (0, i.Xo)(),
            { translate: s } = (0, g.Z)();
          return (0, l.tZ)(
            c.Ejs,
            {
              flexDirection: "column",
              gap: "40px",
              sx: {
                borderStyle: "solid",
                borderColor: "ds.border.neutral.quiet.idle",
                borderWidth: "1px",
                borderRadius: "4px",
                backgroundColor: "ds.container.agnostic.neutral.supershy",
                padding: "32px"
              }
            },
            (0, l.tZ)(
              c.Ejs,
              { flexDirection: "column", gap: "8px" },
              e
                ? (0, l.tZ)(c.X6q, { size: "small" }, s("team_account_addseats_success_newseats_header_business", { count: t }))
                : (0, l.tZ)(c.X6q, { size: "small" }, s("team_account_addseats_success_newseats_header_team", { count: t })),
              (0, l.tZ)(c.nvN, { color: "ds.text.neutral.quiet" }, s("team_account_addseats_success_newseats_body"))
            ),
            (0, l.tZ)(
              c.Ejs,
              { gap: "8px" },
              (0, l.tZ)(
                i.rU,
                { to: n.teamMembersRoutePath },
                (0, l.tZ)(
                  l.zx,
                  {
                    onClick: () => {
                      (0, P.Kz)(
                        new o.UserSendManualInviteEvent({
                          flowStep: o.FlowStep.Start,
                          inviteCount: 0,
                          inviteFailedCount: 0,
                          inviteResentCount: 0,
                          inviteSuccessfulCount: 0,
                          isImport: !0,
                          isResend: !1
                        })
                      );
                    },
                    mood: "brand"
                  },
                  s("team_account_addseats_success_newseats_invite_users_cta")
                )
              ),
              (0, l.tZ)(
                l.zx,
                { mood: "neutral", intensity: "quiet", onClick: a },
                s("team_account_addseats_success_newseats_billing_history_cta")
              )
            )
          );
        };
      var Ii;
      const wi = () => {
        const { translate: e } = (0, g.Z)();
        return (0, l.tZ)(
          c.Ejs,
          {
            flexWrap: "nowrap",
            gap: "16px",
            sx: {
              borderStyle: "solid",
              borderColor: "ds.border.neutral.quiet.idle",
              borderWidth: "1px",
              backgroundColor: "ds.container.agnostic.neutral.supershy",
              borderRadius: "4px",
              padding: "32px"
            }
          },
          (0, l.tZ)(
            c.Ejs,
            {
              sx: {
                padding: "10px 8px",
                width: "40px",
                height: "40px",
                borderRadius: "8px",
                backgroundColor: "ds.container.expressive.brand.quiet.idle"
              }
            },
            Ii || (Ii = (0, l.tZ)(l.JO, { name: "GroupOutlined", color: "ds.text.neutral.standard" }))
          ),
          (0, l.tZ)(
            c.Ejs,
            { flexDirection: "column", gap: "16px", sx: { flexGrow: "1" } },
            (0, l.tZ)(
              c.Ejs,
              { flexDirection: "column", gap: "8px" },
              (0, l.tZ)(
                c.nvN,
                { size: "large", bold: !0, color: "ds.text.neutral.catchy" },
                e("team_account_addseats_success_friends_family_header")
              ),
              (0, l.tZ)(c.nvN, { size: "small", color: "ds.text.neutral.quiet" }, e("team_account_addseats_success_friends_family_body"))
            ),
            (0, l.tZ)(
              "a",
              {
                href: "https://support.dashlane.com/hc/articles/360013369820-Dashlane-Friends-Family-plan",
                target: "_blank",
                rel: "noopener noreferrer"
              },
              (0, l.tZ)(l.zx, { mood: "neutral", intensity: "quiet" }, e("team_account_addseats_success_friends_family_learn_more_cta"))
            )
          )
        );
      };
      var ki, Ai, Oi;
      const Li = ({ planTier: e, lastBillingDetails: t, lastAdditionalSeatsDetails: a, onGetPastReceipts: s, onNavigateBack: i }) => {
          const { translate: o } = (0, g.Z)(),
            [r, d] = (0, n.useState)(a),
            [u, m] = (0, n.useState)(t),
            { additionalSeatsCount: p } = li({ billingDetails: u, additionalSeatsDetails: r }),
            y = (0, l.tZ)(
              "div",
              null,
              (0, l.tZ)(
                c.zxk,
                { type: "button", nature: "ghost", onClick: i },
                (0, l.tZ)(
                  c.Ejs,
                  { alignItems: "center" },
                  ki || (ki = (0, l.tZ)(c.xCe, { size: 14 })),
                  (0, l.tZ)(
                    c.nvN,
                    { bold: !0, sx: { marginLeft: "14px", color: "ds.text.neutral.standard" } },
                    o("team_account_teamplan_changeplan_back")
                  )
                )
              )
            ),
            b = e === _.lD.Business,
            { setNavBarChildren: x } = (0, n.useContext)(Nt);
          return (
            (0, n.useEffect)(
              () => (
                x(y),
                () => {
                  x(null), i();
                }
              ),
              []
            ),
            (0, n.useEffect)(() => {
              m(t), d(a);
            }, [t, a]),
            (0, l.tZ)(
              c.Ejs,
              { flexDirection: "column", gap: "32px", sx: { padding: "32px", flexWrap: "nowrap" } },
              (0, l.tZ)(
                c.Ejs,
                { gap: "16px", sx: { flexWrap: "nowrap" } },
                (0, l.tZ)(
                  c.Ejs,
                  { flexDirection: "column", gap: "16px", sx: { flexGrow: "2", maxWidth: "632px" } },
                  (0, l.tZ)(Mi, { onGetPastReceipts: s, isBusiness: b, additionalSeats: p }),
                  b ? Ai || (Ai = (0, l.tZ)(wi, null)) : null
                ),
                (0, l.tZ)(
                  c.Ejs,
                  { flexDirection: "column", gap: "16px", sx: { flexGrow: "1" } },
                  (0, l.tZ)(Ni, { billingDetails: u, additionalSeatsDetails: r }),
                  Oi || (Oi = (0, l.tZ)(h, null))
                )
              )
            )
          );
        },
        zi = () => document.documentElement.clientWidth < 1371;
      var ji = a(80237),
        Ri = a(276376);
      const Pi = { width: "auto", whiteSpace: "nowrap", color: "ds.text.neutral.standard" },
        Ui = (e, t) => [e.url, ...(e.subPaths ? e.subPaths.map((t) => `${e.url}${t}`) : [])].includes(t),
        Bi = { TITLE: { display: "flex", alignItems: "center", gap: "12px", marginBottom: "32px" } },
        Gi = n.memo(({ title: e, titleBadge: t, subtitle: a, tabs: n = [], extraInfo: s }) => {
          const { pathname: o } = (0, i.TH)();
          return e || n.length
            ? (0, l.tZ)(
                "nav",
                { className: "tabMenuContainer--y2MfbHSdck" },
                e
                  ? (0, l.tZ)(
                      l.X6,
                      { as: "h1", textStyle: "ds.title.section.large", color: "ds.text.neutral.catchy" },
                      (0, l.tZ)("span", { sx: Bi.TITLE }, e, t)
                    )
                  : null,
                a
                  ? (0, l.tZ)(
                      l.nv,
                      {
                        as: "h2",
                        textStyle: "ds.body.standard.regular",
                        color: "ds.text.neutral.quiet",
                        sx: { marginBottom: "32px", a: { fontWeight: 600 } }
                      },
                      a
                    )
                  : null,
                null != s ? s : null,
                n.length
                  ? (0, l.tZ)(
                      c.G8v,
                      null,
                      n.map((e) =>
                        (0, l.tZ)(c.h2L, {
                          key: e.label,
                          label: e.label,
                          notification: e.notifications,
                          selected: Ui(e, o),
                          sx: (0, l.jM)([
                            Pi,
                            e.isDisabled ? { pointerEvents: "none", color: "ds.text.oddity.disabled" } : {},
                            Ui(e, o) ? { backgroundColor: "ds.container.expressive.neutral.supershy.active" } : {}
                          ]),
                          as: (t) => (0, l.tZ)(i.OL, { to: e.url, ...t })
                        })
                      )
                    )
                  : null
              )
            : null;
        }),
        Fi = (0, n.memo)(({ title: e }) => {
          const { translate: t } = (0, g.Z)(),
            { routes: a } = (0, Ri.Xo)(),
            n = (0, r.qr)(
              { queryConfig: { query: ca.C.getAccountRecoveryRequestCount }, liveConfig: { live: ca.C.liveAccountRecoveryRequestCount } },
              []
            ),
            s = (0, Be.h)(),
            i = n.status === r.rq.Success && n.data,
            o = t.markup("team_activity_header_subtitle_markup", {}, { linkTarget: "_blank" });
          return (0, B.tZ)(Gi, {
            title: e,
            subtitle: o,
            tabs: (() => {
              const e = [];
              return (
                e.push({ label: t("team_activity_header_tab_activity_logs"), url: `${a.teamActivityRoutePath}/recent` }),
                s.status === r.rq.Success &&
                  s.data &&
                  e.push({
                    label: t("team_activity_header_tab_mpr_requests"),
                    url: `${a.teamActivityRoutePath}/requests`,
                    notifications: i || 0
                  }),
                e
              );
            })()
          });
        }),
        qi = { CONTENT: { display: "flex", flexDirection: "column", padding: "0 48px" } },
        $i = ({ header: e, children: t }) =>
          (0, l.tZ)(
            "div",
            { className: "consolePage--HtrkOKa6CF" },
            (0, l.tZ)("div", { className: "consolePageHeader--XGguZ6asj0" }, e),
            (0, l.tZ)("div", { sx: qi.CONTENT }, t)
          ),
        Vi = {
          ACTIVITY_PANEL: {
            display: "inline-block",
            backgroundColor: "ds.container.agnostic.neutral.supershy",
            padding: "24px 32px",
            borderRadius: "8px",
            border: "1px solid ds.border.neutral.quiet.idle",
            flex: "1"
          }
        },
        Wi = ({ isLoading: e, children: t }) => {
          const { translate: a } = (0, g.Z)();
          return (0, l.tZ)(
            $i,
            { header: (0, l.tZ)(Fi, { title: a("team_activity_header_title") }) },
            e ? (0, l.tZ)(oi.Z, { containerStyle: { minHeight: 240 } }) : (0, l.tZ)("div", { sx: Vi.ACTIVITY_PANEL }, t)
          );
        };
      var Hi = a(973183),
        Ki = a(354760);
      const Yi = ({ text: e }) => {
        if (!e) return null;
        const t = e.split("**");
        return 1 === t.length
          ? n.createElement("span", null, e)
          : n.createElement(
              "span",
              null,
              t.map((e, t) => (t % 2 == 1 ? n.createElement("strong", { key: `${e}-${t}` }, e) : e))
            );
      };
      var Qi = a(755920);
      const Xi = Object.values(Qi.z),
        Ji = "team_audit_log_user_private_collection_renamed",
        eo = "team_audit_log_user_imported_credentials_one",
        to = "team_audit_log_user_imported_credentials_many",
        ao = {
          [Qi.z.UserInvited]: (e, t) => t("team_audit_log_user_invited", { email: `**${e?.properties?.target_login}**` }),
          [Qi.z.UserReinvited]: (e, t) => t("team_audit_log_user_reinvited", { email: `**${e?.properties?.target_login}**` }),
          [Qi.z.UserRemoved]: (e, t) => t("team_audit_log_user_removed", { email: `**${e?.properties?.target_login}**` }),
          [Qi.z.TeamCaptainAdded]: (e, t) => t("team_audit_log_team_captain_added", { email: `**${e?.properties?.target_login}**` }),
          [Qi.z.TeamCaptainRemoved]: (e, t) => t("team_audit_log_team_captain_removed", { email: `**${e?.properties?.target_login}**` }),
          [Qi.z.GroupManagerAdded]: (e, t) => t("team_audit_log_group_manager_added", { email: `**${e?.properties?.target_login}**` }),
          [Qi.z.GroupManagerRemoved]: (e, t) => t("team_audit_log_group_manager_removed", { email: `**${e?.properties?.target_login}**` }),
          [Qi.z.MasterPasswordResetAccepted]: (e, t) =>
            t("team_audit_log_master_password_reset_accepted", { email: `**${e?.properties?.target_login}**` }),
          [Qi.z.MasterPasswordResetRefused]: (e, t) =>
            t("team_audit_log_master_password_reset_refused", { email: `**${e?.properties?.target_login}**` }),
          [Qi.z.BillingAdminAdded]: (e, t) => t("team_audit_log_billing_admin_added", { email: `**${e?.properties?.target_login}**` }),
          [Qi.z.BillingAdminRemoved]: (e, t) => t("team_audit_log_billing_admin_removed", { email: `**${e?.properties?.target_login}**` }),
          [Qi.z.UserGroupCreated]: (e, t) => t("team_audit_log_user_group_created", { groupName: `**${e.properties?.group_name}**` }),
          [Qi.z.UserGroupRenamed]: (e, t) =>
            t("team_audit_log_user_group_renamed", {
              newGroupName: `**${e.properties?.group_name}**`,
              oldGroupName: `**${e.properties?.old_group_name}**`
            }),
          [Qi.z.UserGroupDeleted]: (e, t) => t("team_audit_log_user_group_deleted", { groupName: `**${e.properties?.group_name}**` }),
          [Qi.z.UserJoinedUserGroup]: (e, t) =>
            t("team_audit_log_user_joined_user_group", { groupName: `**${e.properties?.group_name}**` }),
          [Qi.z.UserLeftUserGroup]: (e, t) => t("team_audit_log_user_left_user_group", { groupName: `**${e.properties?.group_name}**` }),
          [Qi.z.UserInvitedToUserGroup]: (e, t) =>
            t("team_audit_log_user_invited_to_user_group", {
              groupName: `**${e.properties?.group_name}**`,
              email: `**${e?.properties?.target_login}**`
            }),
          [Qi.z.UserDeclinedInviteToUserGroup]: (e, t) =>
            t("team_audit_log_user_declined_invite_to_user_group", { groupName: `**${e.properties?.group_name}**` }),
          [Qi.z.UserRemovedFromUserGroup]: (e, t) =>
            t("team_audit_log_user_removed_from_user_group", {
              groupName: `**${e.properties?.group_name}**`,
              email: `**${e?.properties?.target_login}**`
            }),
          [Qi.z.DomainRequested]: (e, t) => t("team_audit_log_domain_requested", { domain: `**${e.properties?.domain_url}**` }),
          [Qi.z.DomainValidated]: (e, t) => t("team_audit_log_domain_validated", { domain: `**${e.properties?.domain_url}**` }),
          [Qi.z.SensitiveLogsEnabled]: (e, t) => t("team_audit_log_collect_sensitive_data_audit_logs_enabled"),
          [Qi.z.SensitiveLogsDisabled]: (e, t) => t("team_audit_log_collect_sensitive_data_audit_logs_disabled"),
          [Qi.z.SsoIdpMetadataSet]: (e, t) => t("team_audit_log_sso_idp_metadata_set"),
          [Qi.z.SsoServiceProviderUrlSet]: (e, t) => t("team_audit_log_sso_service_provider_url_set"),
          [Qi.z.SsoEnabled]: (e, t) => t("team_audit_log_sso_enabled"),
          [Qi.z.SsoDisabled]: (e, t) => t("team_audit_log_sso_disabled"),
          [Qi.z.TeamNameChanged]: (e, t) => t("team_audit_log_team_name_changed", { name: `**${e.properties?.name}**` }),
          [Qi.z.NewBillingPeriodCreated]: (e, t) =>
            t("team_audit_log_new_billing_period_created", {
              date: `**${t.shortDate((0, oa.Z)(e.properties?.new_end_date_unix), pa._T.L)}**`
            }),
          [Qi.z.SeatsAdded]: (e, t) => t("team_audit_log_seats_added", { count: `**${e.properties?.seats_added}**` }),
          [Qi.z.ContactEmailChanged]: (e, t) =>
            t("team_audit_log_contact_email_changed", { email: `**${e?.properties?.new_contact_email}**` }),
          [Qi.z.MasterPasswordMobileResetEnabled]: (e, t) =>
            t("team_audit_log_master_password_mobile_reset_enabled", {
              deviceName: e?.properties?.device_name ? `**${e?.properties?.device_name}**` : "mobile"
            }),
          [Qi.z.MasterPasswordMobileResetDisabled]: (e, t) =>
            t("team_audit_log_master_password_mobile_reset_disabled", {
              deviceName: e?.properties?.device_name ? `**${e?.properties?.device_name}**` : "mobile"
            }),
          [Qi.z.MasterPasswordChanged]: (e, t) => t("team_audit_log_master_password_changed"),
          [Qi.z.MpToViewPasswordsEnabled]: (e, t) => t("team_audit_log_mp_to_view_passwords_enabled"),
          [Qi.z.MpToViewPasswordsDisabled]: (e, t) => t("team_audit_log_mp_to_view_passwords_disabled"),
          [Qi.z.TwoFactorAuthenticationLoginMethodAdded]: (e, t) => t("team_audit_log_two_factor_authentication_login_method_added"),
          [Qi.z.TwoFactorAuthenticationLoginMethodRemoved]: (e, t) => t("team_audit_log_two_factor_authentication_login_method_removed"),
          [Qi.z.BiometricSignInDisabled]: (e, t) =>
            t("team_audit_log_biometric_sign_in_disabled", { deviceName: `**${e?.properties?.device_name}**` }),
          [Qi.z.NitroSsoSetupStarted]: (e, t) => t("team_audit_log_nitro_sso_setup_started"),
          [Qi.z.NitroSsoDomainProvisioned]: (e, t) =>
            t("team_audit_log_nitro_sso_domain_provisioned", { domain: `**${e?.properties?.domain_url}**` }),
          [Qi.z.NitroSsoDomainRemoved]: (e, t) =>
            t("team_audit_log_nitro_sso_domain_removed", { domain: `**${e?.properties?.domain_url}**` }),
          [Qi.z.NitroSsoDomainVerified]: (e, t) =>
            t("team_audit_log_nitro_sso_domain_verified", { domain: `**${e?.properties?.domain_url}**` }),
          [Qi.z.DWMEmailAdded]: (e, t) => t("team_audit_log_dwm_email_added", { email: `**${e?.properties?.dark_web_monitoring_email}**` }),
          [Qi.z.DWMEmailRemoved]: (e, t) =>
            t("team_audit_log_dwm_email_removed", { email: `**${e?.properties?.dark_web_monitoring_email}**` }),
          [Qi.z.DWMAlertReceived]: (e, t) =>
            t("team_audit_log_dwm_alert_received", { email: `**${e?.properties?.dark_web_monitoring_email}**` }),
          [Qi.z.UserDeviceAdded]: (e, t) => t("team_audit_log_user_device_added", { name: `**${e.properties?.device_name}**` }),
          [Qi.z.UserDeviceRemoved]: (e, t) => t("team_audit_log_user_device_removed", { name: `**${e.properties?.device_name}**` }),
          [Qi.z.UserDeviceLogin]: (e, t) => t("team_audit_log_user_device_login", { name: `**${e.properties?.device_name}**` }),
          [Qi.z.MasterPasswordReset]: (e, t) => t("team_audit_log_master_password_reset"),
          [Qi.z.RequestedAccountRecovery]: (e, t) => t("team_audit_log_requested_account_recovery"),
          [Qi.z.CompletedAccountRecovery]: (e, t) => t("team_audit_log_completed_account_recovery"),
          [Qi.z.MasterPasswordMobileReset]: (e, t) =>
            t("team_audit_log_master_password_mobile_reset", {
              deviceName: e?.properties?.device_name ? `**${e?.properties?.device_name}**` : "mobile"
            }),
          [Qi.z.UserSharedCredentialWithGroup]: (e, t) => {
            const a = e;
            return t(
              "admin" === a.properties.permission
                ? "team_audit_log_user_shared_credential_with_group_full"
                : "team_audit_log_user_shared_credential_with_group_limited",
              { domain: `**${a.properties.domain_url}**`, group: `**${a.properties.group_name}**` }
            );
          },
          [Qi.z.UserSharedCredentialWithEmail]: (e, t) => {
            const a = e;
            return t(
              "admin" === a.properties.permission
                ? "team_audit_log_user_shared_credential_with_email_full"
                : "team_audit_log_user_shared_credential_with_email_limited",
              { domain: `**${a.properties.domain_url}**`, email: `**${a.properties.target_login}**` }
            );
          },
          [Qi.z.UserSharedCredentialWithExternal]: (e, t) => {
            const a = e;
            return t(
              "admin" === a.properties.permission
                ? "team_audit_log_user_shared_credential_with_external_full"
                : "team_audit_log_user_shared_credential_with_external_limited",
              { domain: `**${a.properties.domain_url}**`, email: `**${a.properties.target_login}**` }
            );
          },
          [Qi.z.UserSharedSecureNoteWithGroup]: (e, t) => {
            const a = e;
            return t(
              "admin" === a.properties.permission
                ? "team_audit_log_user_shared_secure_note_with_group_full"
                : "team_audit_log_user_shared_secure_note_with_group_limited",
              { name: `**${a.properties.item_name}**`, group: `**${a.properties.group_name}**` }
            );
          },
          [Qi.z.UserSharedSecureNoteWithEmail]: (e, t) => {
            const a = e;
            return t(
              "admin" === a.properties.permission
                ? "team_audit_log_user_shared_secure_note_with_email_full"
                : "team_audit_log_user_shared_secure_note_with_email_limited",
              { name: `**${a.properties.item_name}**`, email: `**${a.properties.target_login}**` }
            );
          },
          [Qi.z.UserSharedSecureNoteWithExternal]: (e, t) => {
            const a = e;
            return t(
              "admin" === a.properties.permission
                ? "team_audit_log_user_shared_secure_note_with_external_full"
                : "team_audit_log_user_shared_secure_note_with_external_limited",
              { name: `**${a.properties.item_name}**`, email: `**${a.properties.target_login}**` }
            );
          },
          [Qi.z.UserRevokedSharedCredentialGroup]: (e, t) => {
            const a = e;
            return t("team_audit_log_user_revoked_shared_credential_group", {
              domain: `**${a.properties.domain_url}**`,
              group: `**${a.properties.group_name}**`
            });
          },
          [Qi.z.UserRevokedSharedCredentialEmail]: (e, t) => {
            const a = e;
            return t("team_audit_log_user_revoked_shared_credential_email", {
              domain: `**${a.properties.domain_url}**`,
              email: `**${a.properties.target_login}**`
            });
          },
          [Qi.z.UserRevokedSharedCredentialExternal]: (e, t) => {
            const a = e;
            return t("team_audit_log_user_revoked_shared_credential_external", {
              domain: `**${a.properties.domain_url}**`,
              email: `**${a.properties.target_login}**`
            });
          },
          [Qi.z.UserRevokedSharedSecureNoteGroup]: (e, t) => {
            const a = e;
            return t("team_audit_log_user_revoked_shared_secure_note_group", {
              name: `**${a.properties.item_name}**`,
              group: `**${a.properties.group_name}**`
            });
          },
          [Qi.z.UserRevokedSharedSecureNoteEmail]: (e, t) => {
            const a = e;
            return t("team_audit_log_user_revoked_shared_secure_note_email", {
              name: `**${a.properties.item_name}**`,
              email: `**${a.properties.target_login}**`
            });
          },
          [Qi.z.UserRevokedSharedSecureNoteExternal]: (e, t) => {
            const a = e;
            return t("team_audit_log_user_revoked_shared_secure_note_external", {
              name: `**${a.properties.item_name}**`,
              email: `**${a.properties.target_login}**`
            });
          },
          [Qi.z.UserAcceptedSharingInviteSecureNote]: (e, t) =>
            t("team_audit_log_user_accepted_sharing_invite_secure_note", { name: `**${e.properties.item_name}**` }),
          [Qi.z.UserRejectedSharingInviteSecureNote]: (e, t) =>
            t("team_audit_log_user_rejected_sharing_invite_secure_note", { name: `**${e.properties.item_name}**` }),
          [Qi.z.UserAcceptedSharingInviteCredential]: (e, t) =>
            t("team_audit_log_user_accepted_sharing_invite_credential", { domain: `**${e.properties.domain_url}**` }),
          [Qi.z.UserRejectedSharingInviteCredential]: (e, t) =>
            t("team_audit_log_user_rejected_sharing_invite_credential", { domain: `**${e.properties.domain_url}**` }),
          [Qi.z.UserCreatedCollection]: (e, t) =>
            t("team_audit_log_user_private_collection_created", {
              user: `${e.properties.author_login}`,
              name: `**${e.properties.collection_name}**`
            }),
          [Qi.z.UserImportedCollection]: (e, t) =>
            t("team_audit_log_user_private_collection_imported", {
              user: `${e.properties.author_login}`,
              number: `${e.properties.credential_count}`,
              collection: `**${e.properties.collection_name}**`
            }),
          [Qi.z.UserAddedCredentialToCollection]: (e, t) =>
            t("team_audit_log_user_private_collection_added_credential", {
              user: `${e.properties.author_login}`,
              domain: `**${e.properties.domain_url}**`,
              name: `**${e.properties.collection_name}**`
            }),
          [Qi.z.UserRemovedCredentialFromCollection]: (e, t) =>
            t("team_audit_log_user_private_collection_removed_credential", {
              user: `${e.properties.author_login}`,
              domain: `**${e.properties.domain_url}**`,
              name: `**${e.properties.collection_name}**`
            }),
          [Qi.z.UserRenamedCollection]: (e, t) =>
            t(Ji, {
              user: `${e.properties.author_login}`,
              old: `**${e.properties.collection_name}**`,
              new: `**${e.properties.old_collection_name}**`
            }),
          [Qi.z.UserDeletedCollection]: (e, t) =>
            t("team_audit_log_user_private_collection_deleted", {
              user: `${e.properties.author_login}`,
              name: `**${e.properties.collection_name}**`
            }),
          [Qi.z.UserSharedCollectionWithUser]: (e, t) =>
            t("team_audit_log_user_shared_collection_shared_with_user", {
              user: `${e.properties.author_login}`,
              name: `**${e.properties.collection_name}**`,
              role: `${e.properties.permission}`,
              email: `${e.properties.target_login}`
            }),
          [Qi.z.UserSharedCollectionWithGroup]: (e, t) =>
            t("team_audit_log_user_shared_collection_shared_with_group", {
              user: `${e.properties.author_login}`,
              name: `**${e.properties.collection_name}**`,
              role: `${e.properties.permission}`,
              group: `${e.properties.group_name}`
            }),
          [Qi.z.UserAcceptedCollection]: (e, t) =>
            t("team_audit_log_user_shared_collection_accepted", {
              user: `${e.properties.author_login}`,
              name: `**${e.properties.collection_name}**`
            }),
          [Qi.z.UserRejectedCollection]: (e, t) =>
            t("team_audit_log_user_shared_collection_rejected", {
              user: `${e.properties.author_login}`,
              name: `**${e.properties.collection_name}**`
            }),
          [Qi.z.UserAddedItemToCollection]: (e, t) =>
            t("team_audit_log_user_shared_collection_added_credential", {
              user: `${e.properties.author_login}`,
              domain: `**${e.properties.domain_url}**`,
              rights: `${e.properties.permission}`,
              name: `**${e.properties.collection_name}**`
            }),
          [Qi.z.UserRemovedItemFromCollection]: (e, t) =>
            t("team_audit_log_user_shared_collection_removed_credential", {
              user: `${e.properties.author_login}`,
              domain: `**${e.properties.domain_url}**`,
              name: `**${e.properties.collection_name}**`
            }),
          [Qi.z.UserUpdatedGroupRoleInCollection]: (e, t) =>
            t("team_audit_log_user_shared_collection_group_roles", {
              user: `${e.properties.author_login}`,
              group: `**${e.properties.group_name}**`,
              role1: `${e.properties.old_permission}`,
              role2: `${e.properties.permission}`,
              name: `**${e.properties.collection_name}**`
            }),
          [Qi.z.UserUpdatedUserRoleInCollection]: (e, t) =>
            t("team_audit_log_user_shared_collection_user_roles", {
              user: `${e.properties.author_login}`,
              email: `**${e.properties.group_name}**`,
              role1: `${e.properties.old_permission}`,
              role2: `${e.properties.permission}`,
              name: `**${e.properties.collection_name}**`
            }),
          [Qi.z.UserRevokedGroupFromCollection]: (e, t) =>
            t("team_audit_log_user_shared_collection_revoked_groups", {
              user: `${e.properties.author_login}`,
              name: `**${e.properties.collection_name}**`,
              group: `**${e.properties.group_name}**`
            }),
          [Qi.z.UserRevokedUserFromCollection]: (e, t) =>
            t("team_audit_log_user_shared_collection_revoked_user", {
              user: `${e.properties.author_login}`,
              name: `**${e.properties.collection_name}**`,
              email: `**${e.properties.target_login}**`
            }),
          [Qi.z.UserRenamedSharedCollection]: (e, t) =>
            t(Ji, {
              user: `${e.properties.author_login}`,
              name: `**${e.properties.collection_name}**`,
              email: `**${e.properties.target_login}**`
            }),
          [Qi.z.UserCreatedCredential]: (e, t) => t("team_audit_log_user_created_credential", { domain: `**${e.properties.domain_url}**` }),
          [Qi.z.UserModifiedCredential]: (e, t) =>
            t("team_audit_log_user_modified_credential", { domain: `**${e.properties.domain_url}**` }),
          [Qi.z.UserDeletedCredential]: (e, t) => t("team_audit_log_user_deleted_credential", { domain: `**${e.properties.domain_url}**` }),
          [Qi.z.UserImportedCredentials]: (e, t) =>
            t(e.properties.import_count > 1 ? to : eo, { importCount: `**${e.properties.import_count}**` }),
          [Qi.z.UserCreatedSecureNote]: (e, t) => t("team_audit_log_user_created_secure_note", { name: `**${e.properties.item_name}**` }),
          [Qi.z.UserModifiedSecureNote]: (e, t) => t("team_audit_log_user_modified_secure_note", { name: `**${e.properties.item_name}**` }),
          [Qi.z.UserDeletedSecureNote]: (e, t) => t("team_audit_log_user_deleted_secure_note", { name: `**${e.properties.item_name}**` })
        },
        no = (e, t) => (Xi.includes(e.log_type) ? ao[e.log_type](e, t) : ""),
        so = Object.values(Qi.z),
        io = (e) => (t) => {
          !e || ("Enter" !== t.key && " " !== t.key) || (e(), t.preventDefault());
        },
        oo = {
          padding: "16px 0 16px 16px",
          textAlign: "left",
          fontSize: "12px",
          fontWeight: "600",
          verticalAlign: "middle",
          whiteSpace: "break-spaces",
          textTransform: "uppercase",
          cursor: "default"
        },
        ro = ({ onClick: e, sortOrder: t, colSpan: a, tooltipLabel: s, headerLabel: i, headerElement: o }) => {
          const [r, c] = (0, n.useState)(!1);
          return (0, l.tZ)(
            "th",
            {
              scope: "col",
              role: "columnheader",
              colSpan: a,
              tabIndex: 0,
              "aria-sort": ((d = t), "asc" === d ? "ascending" : "desc" === d ? "descending" : "none"),
              onClick: e,
              onMouseEnter: () => c(!0),
              onMouseLeave: () => c(!1),
              onFocus: () => c(!0),
              onBlur: () => c(!1),
              onKeyDown: io(e),
              sx: oo
            },
            (0, l.tZ)(
              "div",
              { sx: { display: "flex", height: "100%", maxWidth: "140px", alignItems: "center" } },
              o || null,
              s
                ? (0, l.tZ)(
                    l.u,
                    { content: s, isOpen: r },
                    (0, l.tZ)("span", { sx: { marginTop: "-5px", paddingTop: "5px", minWidth: 0, whiteSpace: "break-spaces" } }, i)
                  )
                : (0, l.tZ)("span", { sx: { minWidth: 0, whiteSpace: "break-spaces" } }, i),
              (0, l.tZ)(
                "div",
                { sx: { width: "10px" } },
                t
                  ? (0, l.tZ)(l.JO, { sx: { ml: "4px" }, name: "desc" === t ? "CaretDownOutlined" : "CaretUpOutlined", size: "small" })
                  : null
              )
            )
          );
          var d;
        },
        lo = ({ headerElement: e, colSpan: t, headerLabel: a, tooltipLabel: n }) =>
          (0, l.tZ)(
            "th",
            { colSpan: t, sx: oo },
            e || null,
            n
              ? (0, l.tZ)(l.u, { content: n }, (0, l.tZ)("span", { sx: { minWidth: 0, whiteSpace: "break-spaces" } }, a))
              : (0, l.tZ)("span", { sx: { minWidth: 0, whiteSpace: "break-spaces" } }, a)
          ),
        co = ({ columns: e, sx: t }) =>
          (0, l.tZ)(
            "thead",
            { sx: t },
            (0, l.tZ)(
              "tr",
              { "aria-rowindex": 1, sx: { color: "ds.text.neutral.quiet" } },
              e.map((e) => (e.onClick ? (0, l.tZ)(ro, { key: e.headerKey, ...e }) : (0, l.tZ)(lo, { key: e.headerKey, ...e })))
            )
          ),
        uo = {
          TABLE_BODY: {
            tr: {
              boxShadow: "inset 0 -1px 0 0 ds.border.neutral.quiet.idle",
              height: "60px",
              td: { padding: "16px", verticalAlign: "middle", variant: "text.ds.body.reduced.regular", color: "ds.text.neutral.standard" }
            }
          }
        },
        _o = ({ children: e }) => {
          const { translate: t } = (0, g.Z)(),
            a = [
              { headerLabel: t("team_activity_list_head_admin"), headerKey: "admin" },
              { headerLabel: t("team_activity_list_head_action"), headerKey: "action" },
              { headerLabel: t("team_activity_list_head_time"), headerKey: "time" }
            ];
          return (0, l.tZ)(
            "table",
            { className: "table--mfR78xcZe9" },
            (0, l.tZ)(co, { columns: a }),
            (0, l.tZ)("tbody", { key: "table-body", sx: uo.TABLE_BODY }, e)
          );
        };
      var mo = a(232814),
        po = a(53506);
      const go = {
          LOGIN_CELL: { display: "flex", padding: "15px 16px 14px" },
          LOGIN_TEXT: {
            height: "31px",
            marginLeft: "16px",
            maxWidth: "300px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
          }
        },
        yo = ({ login: e, action: t, date: a }) =>
          (0, l.tZ)(
            "tr",
            null,
            (0, l.tZ)(
              "td",
              { sx: go.LOGIN_CELL },
              (0, l.tZ)(mo.q, { email: e, size: 30 }),
              (0, l.tZ)(
                "div",
                { id: "user-email", sx: go.LOGIN_TEXT },
                (0, l.tZ)(l.nv, { color: "ds.text.neutral.catchy", textStyle: "ds.body.standard.regular" }, e)
              )
            ),
            (0, l.tZ)("td", null, t),
            (0, l.tZ)("td", { className: "dateCell--JBqTpeYwB5" }, (0, l.tZ)(po.v, { date: a }))
          );
      var ho = a(438042),
        bo = a(909087),
        xo = a(319586);
      const So = 1e3;
      async function vo() {
        const e = new Date(),
          t = (0, ho.Z)((0, bo.Z)(e, 3)),
          a = (0, ho.Z)(e),
          n = await ca.C.startAuditLogsQuery({ startDateRangeUnix: t, endDateRangeUnix: a });
        if (n.success) return n;
        throw (
          ((0, P.Kz)(
            new o.UserDownloadAuditLogsDataEvent({
              flowStep: o.FlowStep.Error,
              auditLogDownloadError: o.AuditLogDownloadError.UnexpectedUnknown
            })
          ),
          new Error("[startAuditLogsQuery] - Server Error: Unable to start audit logs query and fetch queryExecutionId"))
        );
      }
      async function fo(e, t, a) {
        const n = await ca.C.getAuditLogQueryResults({ queryExecutionId: e, maxResults: t, nextToken: a });
        return !n.success || (n.data.state !== xo.L.Running && n.data.state !== xo.L.Queued)
          ? n
          : (await new Promise((e) => setTimeout(() => e(), 3e3)), await fo(e, t, a));
      }
      async function Co(e, t, a = 1, n) {
        const s = await fo(t, So, n);
        if ((e(a), s.success)) {
          let n = s.data.auditLogs;
          if (s.data.nextToken) {
            const i = await Co(e, t, a + 1, s.data.nextToken);
            return i && (n = n.concat(i)), n;
          }
          return n;
        }
        throw (
          ((0, P.Kz)(
            new o.UserDownloadAuditLogsDataEvent({ flowStep: o.FlowStep.Error, auditLogDownloadError: o.AuditLogDownloadError.NoLogData })
          ),
          new Error("[fetchAuditLogsPages] - Server Error: Unable to load audit logs data"))
        );
      }
      const Zo = { display: "block", height: "4px", borderRadius: 1, transition: "width 1s ease-out", bg: "successes.4" },
        Eo = ({ progressPercent: e }) => {
          const { translate: t } = (0, g.Z)(),
            a = Math.min(Math.max(e, 0), 100),
            n = { width: `${a}%` },
            s = (0, c.jMf)([Zo, n]),
            i = "download-progress-description";
          return (0, B.tZ)(
            c.Ejs,
            { alignItems: "flex-start", flexDirection: "column", fullWidth: !0, sx: { mt: "8px", maxWidth: "100%" } },
            (0, B.tZ)(
              c.Ejs,
              { flexDirection: "row", justifyContent: "space-between", fullWidth: !0, sx: { bg: "primaries.1", maxWidth: "100%" } },
              (0, B.tZ)(
                "div",
                { sx: { position: "relative", width: "100%" } },
                (0, B.tZ)("span", { "aria-describedby": i, "data-testid": "download-progress-bar", role: "img", sx: s })
              )
            ),
            (0, B.tZ)(
              c.nvN,
              { sx: { mt: "4px", color: c.colors.dashGreen01 }, size: "x-small", id: i },
              t("team_activity_download_modal_progress", { progressPercentage: a })
            )
          );
        },
        Do = ({ isOpen: e, progress: t, onClose: a }) => {
          const { translate: n } = (0, g.Z)();
          return (0, B.tZ)(
            c.VqE,
            {
              isOpen: e,
              onClose: a,
              closeIconName: n("_common_dialog_dismiss_button"),
              ariaDescribedby: "csv-download-dialog-body",
              ariaLabelledby: "csv-download-dialog-title"
            },
            (0, B.tZ)(c.$N8, { id: "csv-download-dialog-title", title: n("team_activity_download_modal_title") }),
            (0, B.tZ)(
              "div",
              { sx: { maxHeight: "fit-content", overflowX: "hidden", overflowY: "auto" } },
              (0, B.tZ)(Eo, { progressPercent: t }),
              (0, B.tZ)(
                c.nvN,
                { size: "medium", sx: { marginTop: 5, marginBottom: 6, color: c.colors.grey00 } },
                n("team_activity_download_modal_body")
              ),
              (0, B.tZ)(c.vDh, { severity: "warning", size: "small", title: n("team_activity_download_modal_warning") })
            )
          );
        },
        To = Object.values(Qi.z);
      var No;
      const Mo = ({ lee: e }) => {
        const { translate: t } = (0, g.Z)(),
          [a, s] = (0, n.useState)(""),
          {
            isStartAuditLogsQueryTriggered: i,
            isLoading: r,
            nextToken: d,
            hasError: u,
            list: _
          } = ((e) => {
            const [t, a] = (0, n.useState)(!1),
              [s, i] = (0, n.useState)(!1),
              [o, r] = (0, n.useState)([]),
              [l, c] = (0, n.useState)(""),
              [d, u] = (0, n.useState)(""),
              [_, m] = (0, n.useState)(!1),
              p = (0, n.useCallback)(
                async (t) => {
                  try {
                    a(!0);
                    const n = await fo(t, 50, e && "" !== e ? e : void 0),
                      s = [xo.L.Failed, xo.L.Cancelled];
                    !n.success || s.includes(n.data.state)
                      ? i(!0)
                      : (r((e = []) => [...e, ...n.data.auditLogs]), n?.data.nextToken ? c(n.data.nextToken) : c(null));
                  } catch (e) {
                    i(!0);
                  } finally {
                    a(!1);
                  }
                },
                [e]
              ),
              g = (0, n.useCallback)(async () => {
                try {
                  a(!0);
                  const e = await vo(),
                    { queryExecutionId: t } = e.data;
                  await p(t), u(t), m(!0);
                } catch (e) {
                  a(!1), i(!0);
                }
              }, [p]);
            return (
              (0, n.useEffect)(() => {
                _ ? ("" !== d ? p(d) : i(!0)) : g();
              }, [p]),
              { isStartAuditLogsQueryTriggered: _, isLoading: t, nextToken: l, hasError: s, list: o }
            );
          })(a),
          m = !i && r,
          p = i && r,
          y = null !== d,
          h = (0, n.useRef)(null),
          b = (0, n.useRef)(null);
        (0, ji.M)({
          hasMore: y,
          scrollContainerRef: h,
          bottomRef: b,
          loadMore: () => {
            y && s(d);
          }
        });
        const [x, S] = (0, n.useState)(!1),
          [v, f] = (0, n.useState)(!1),
          [C, Z] = (0, n.useState)(0),
          E = (0, Wa.V)(),
          D = (0, n.useCallback)(() => {
            f(!1), (0, P.Nc)(o.PageView.TacActivityList);
          }, []),
          T = (0, n.useCallback)((e) => {
            const t = 50 + e - 10;
            e <= 10 ? Z(5 * e) : e <= 40 && e > 10 && Z(t);
          }, []),
          N = async () => {
            f(!0),
              Z(0),
              S(!0),
              (0, P.Nc)(o.PageView.TacActivityDownload),
              (0, P.Kz)(new o.UserDownloadAuditLogsDataEvent({ flowStep: o.FlowStep.Start, auditLogCount: 0 }));
            try {
              let e = [];
              const a = await vo();
              (e = await Co(T, a.data.queryExecutionId)), Z(100);
              const n = "\ufeff",
                s = ((e, t) => {
                  const a =
                      [t("team_activity_list_head_admin"), t("team_activity_list_head_action"), t("team_activity_list_head_time_csv")].join(
                        ","
                      ) + "\n",
                    n = e
                      .filter((e) => To.includes(e.log_type))
                      .map((e) => {
                        var a;
                        const n = null != (a = e.properties?.author_login) ? a : "",
                          s = no(e, t).replace(/\*\*/g, "").replace(/[“”]/g, '"'),
                          i = new Date(e.date_time).toISOString();
                        return `${n},${s},${i.substr(0, 10)} ${i.substr(11, 8)}`;
                      });
                  return (
                    (0, P.Kz)(new o.UserDownloadAuditLogsDataEvent({ flowStep: o.FlowStep.Complete, auditLogCount: n.length })),
                    a + n.join("\n")
                  );
                })(e, t);
              setTimeout(() => {
                try {
                  (0, Ki.S)([n, s], "dashlane-activity-export.csv", "text/csv;charset=utf-8"), S(!1), D();
                } catch (e) {
                  (0, P.Kz)(
                    new o.UserDownloadAuditLogsDataEvent({
                      flowStep: o.FlowStep.Error,
                      auditLogDownloadError: o.AuditLogDownloadError.NoCsv
                    })
                  );
                }
              }, 1e3);
            } catch (t) {
              e.dispatchGlobal(
                (0, Hi.wN)(
                  ((e, t) => {
                    const a = "directorySyncKeyValidationError",
                      n = () => e.dispatchGlobal((0, Hi.FV)(a)),
                      s = c.BLW.ERROR;
                    return {
                      key: a,
                      level: s,
                      textKey: "team_activity_download_modal_alert_error",
                      handleClose: n,
                      handleButtonClick: () => {
                        t(), n();
                      },
                      buttonTextKey: "team_activity_download_modal_alert_action"
                    };
                  })(e, N)
                )
              ),
                (0, P.Kz)(
                  new o.UserDownloadAuditLogsDataEvent({
                    flowStep: o.FlowStep.Error,
                    auditLogDownloadError: o.AuditLogDownloadError.UnexpectedUnknown
                  })
                ),
                Z(0),
                S(!1),
                D();
            }
          },
          M = _.map((e) =>
            ((e, t) => {
              var a;
              return so.includes(e.log_type)
                ? {
                    uuid: e.uuid,
                    date: new Date(e.date_time),
                    activityDescription: no(e, t),
                    userLogin: null != (a = e.properties?.author_login) ? a : ""
                  }
                : null;
            })(e, t)
          ).filter((e) => null !== e);
        return (0, l.tZ)(
          Wi,
          { isLoading: !v && m },
          (0, l.tZ)(
            "div",
            { className: "container--XdLBgpl4YX", ref: h },
            (0, l.tZ)(
              "div",
              { className: "top--RuWypqAKoN" },
              (0, l.tZ)(
                l.zx,
                { onClick: N, disabled: x, layout: "iconLeading", icon: "DownloadOutlined" },
                t("team_activity_download_button")
              )
            ),
            (0, l.tZ)(
              _o,
              null,
              M.map((e) =>
                (0, l.tZ)(yo, { login: e.userLogin, action: (0, l.tZ)(Yi, { text: e.activityDescription }), date: e.date, key: e.uuid })
              )
            ),
            u ? E.showAlert(t("_common_generic_error"), c.BLW.ERROR) : null,
            (0, l.tZ)(
              "div",
              { ref: b },
              p
                ? (0, l.tZ)(
                    "div",
                    { sx: { display: "flex", height: "40px", justifyContent: "center", paddingTop: "20px", paddingBottom: "60px" } },
                    No || (No = (0, l.tZ)(c.HoD, { size: 40, color: "ds.text.brand.quiet" }))
                  )
                : null
            )
          ),
          v
            ? (0, l.tZ)(Do, {
                isOpen: v,
                progress: C,
                onClose: () => {
                  D();
                }
              })
            : null
        );
      };
      var Io = a(421484);
      const wo = () => (0, d.k)(u.o, "getTeamPolicies"),
        ko = { table: "table--qduhC1TPu3", actionCell: "actionCell--cglSMoOlh7", button: "button--v4n4SCN07C" },
        Ao = {
          TABLE_BODY: {
            tr: {
              boxShadow: "inset 0 -1px 0 0 ds.border.neutral.quiet.idle",
              height: "60px",
              td: { padding: "16px", verticalAlign: "middle", variant: "text.ds.body.reduced.regular", color: "ds.text.neutral.standard" }
            }
          },
          LOGIN_CELL: { display: "flex", padding: "15px 16px 14px" },
          LOGIN_TEXT: {
            height: "31px",
            marginLeft: "16px",
            maxWidth: "300px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
          }
        },
        Oo = (0, n.memo)(({ onAccept: e, onDecline: t, dateFormatter: a, requests: n }) => {
          const { translate: s } = (0, g.Z)(),
            i = [
              { headerLabel: s("team_master_password_reset_table_head_member"), headerKey: "member" },
              { headerLabel: s("team_master_password_reset_table_head_time"), headerKey: "time" },
              { headerLabel: "", headerKey: "actions" }
            ];
          return (0, l.tZ)(
            "table",
            { className: ko.table },
            (0, l.tZ)(co, { columns: i }),
            (0, l.tZ)(
              "tbody",
              { key: "table-body", sx: Ao.TABLE_BODY },
              n.map((n) => {
                const s = (0, oa.Z)(n.creationDateUnix),
                  i = a(s);
                return (0, l.tZ)(
                  "tr",
                  { key: (0, f.uniqueId)() },
                  (0, l.tZ)(
                    "td",
                    { sx: Ao.LOGIN_CELL },
                    (0, l.tZ)(mo.q, { email: n.login, size: 30 }),
                    (0, l.tZ)(
                      "div",
                      { id: "user-email", sx: Ao.LOGIN_TEXT },
                      (0, l.tZ)(l.nv, { color: "ds.text.neutral.catchy", textStyle: "ds.body.standard.regular" }, n.login)
                    )
                  ),
                  (0, l.tZ)("td", { className: ko.dateCell }, i),
                  (0, l.tZ)(
                    "td",
                    { className: ko.actionCell },
                    (0, l.tZ)("img", {
                      className: ko.button,
                      onClick: () => t(n),
                      src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNNS41IDEyLjVMMTIuNSA1LjVNMTIuNSAxMi41TDUuNSA1LjVNMC41IDlDMC41IDQuMzA1ODcgNC4zMDU4NyAwLjUgOSAwLjVDMTMuNjk0MSAwLjUgMTcuNSA0LjMwNTg3IDE3LjUgOUMxNy41IDEzLjY5NDEgMTMuNjk0MSAxNy41IDkgMTcuNUM0LjMwNTg3IDE3LjUgMC41IDEzLjY5NDEgMC41IDlaIiBzdHJva2U9IiNGRjAwMkQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K"
                    }),
                    (0, l.tZ)("img", {
                      className: ko.button,
                      onClick: () => e(n),
                      src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNNiA5TDcuOTU5MjggMTFMMTEuOTc5NiA3TTAuNSA5QzAuNSA0LjMwNTQ1IDQuMzA2MyAwLjUgOSAwLjVDMTMuNjkzNyAwLjUgMTcuNSA0LjMwNTQ1IDE3LjUgOUMxNy41IDEzLjY5NDYgMTMuNjkzNyAxNy41IDkgMTcuNUM0LjMwNjMgMTcuNSAwLjUgMTMuNjk0NiAwLjUgOVoiIHN0cm9rZT0iIzIwQjQyMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo="
                    })
                  )
                );
              })
            )
          );
        }),
        Lo = "dialogContent--koRKDSa9Ov",
        zo = "dialogContentStrong--OG0LUgIyIm dialogContent--koRKDSa9Ov";
      var jo;
      var Ro = a(183086);
      const Po = (e, t) => (a) => n.createElement(Mt, { selectedTab: t, lee: a.lee }, n.createElement(e, { ...a })),
        Uo = Po(
          (e) => (
            n.useEffect(() => {
              (0, P.Nc)(o.PageView.TacActivityList);
            }, []),
            n.createElement(Mo, { lee: e.lee })
          ),
          "activity"
        ),
        Bo = Po(({ lee: e }) => {
          var t;
          const { translate: a } = (0, g.Z)(),
            { reportTACError: s } = H(),
            [i, o] = (0, n.useState)(!1),
            { status: r, data: l } = wo(),
            d = { dialogIsVisible: !1, dialogType: null, selectedRequest: null },
            [u, _] = (0, n.useState)(d),
            m = (0, n.useCallback)(() => {
              const t = (0, Nn.v0)(e.globalState);
              return t || s(new Error(ls.N)), t;
            }, []),
            p = (0, n.useCallback)(async () => {
              const e = m();
              e?.teamId && (await (0, cs.mP)({ teamId: e.teamId }));
            }, [m]);
          if (
            ((0, n.useEffect)(() => {
              (async () => {
                try {
                  o(!0), l?.recoveryEnabled && (await p(), o(!1));
                } catch (e) {
                  console.error(`RequestsActivity - fetchStatus failed with error ${e}`), o(!1);
                }
              })();
            }, [p, l]),
            r !== se.rq.Success || !l)
          )
            return null;
          const y = (e) => {
              _({ dialogIsVisible: !0, dialogType: "accept", selectedRequest: e });
            },
            h = (e) => {
              _({ dialogIsVisible: !0, dialogType: "decline", selectedRequest: e });
            },
            b = (e) => [a.shortDate(e, pa._T.l), a.shortDate(e, pa._T.LT)].join(" - "),
            x = () => {
              _(d);
            },
            S = () => {
              _(d);
            };
          return (0, B.tZ)(
            Wi,
            { isLoading: i },
            (() => {
              const t = (() => {
                var t;
                const a = m();
                if (!a) return [];
                const { teams: n } = (0, Io.e)(e.globalState),
                  { teamId: s } = a;
                return null == s ? [] : null != (t = n[s]?.notifications?.accountRecoveryRequests) ? t : [];
              })();
              return t.length
                ? (0, B.tZ)(
                    "div",
                    { className: "container--DRtotEoFLA" },
                    (0, B.tZ)(Oo, { onAccept: y, onDecline: h, dateFormatter: b, requests: t })
                  )
                : (0, B.tZ)(
                    "div",
                    { className: "containerNoItem--U7KH6tddpl container--DRtotEoFLA" },
                    jo ||
                      (jo = (0, B.tZ)("img", {
                        src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDQwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMzMuODMxOCAyNC45MTQ3QzM0LjIxMTggMjUuNDI0NyAzNC41NjE4IDI2LjA4NDcgMzQuNjYxOCAyNi43MDQ4QzM0Ljc1MTggMjcuMDI0NyAzNC43ODE4IDI3LjMxNDcgMzQuNzgxOCAyNy41OTQ3TDM0LjgxMTggMjguMDI0N0MzNC44MTE4IDI4LjE4NDcgMzQuODExOCAyOC4zOTQ3IDM0Ljc4MTggMjguNTc0N0MzNC42MDE4IDMwLjEwNDcgMzMuNDAxOCAzMS40MDQ3IDMxLjkxMTggMzEuNzI0N0MzMS43MzE4IDMxLjc2NDcgMzEuNTQxOCAzMS43OTQ3IDMxLjM1MTggMzEuODA0N0wzMS4wODE4IDMxLjgxNDhIMzAuOTExOEgzMC4yMzE4SDI4Ljg3MThIMjYuMTYxOEgxNS4zMTE4SDkuODkxOEg5LjIxMThIOC44NzE4SDguNjkxOEw4LjQxMTggMzEuODA0N0M3LjY1MTggMzEuNzQ0NyA2LjkyMTggMzEuNDM0NyA2LjM0MTggMzAuOTU0OEM1Ljc2MTggMzAuNDY0OCA1LjMzMTggMjkuODA0NyA1LjEzMTggMjkuMDc0N0M1LjAyMTggMjguNzI0NyA0Ljk5MTggMjguMjk0NyA1LjAwMTggMjcuOTg0N0w1LjA3MTggMjcuMTI0N0M1LjA4OTc3IDI3LjA0NTIgNS4xMDY0MyAyNi45NjU2IDUuMTIzMTEgMjYuODg1OEM1LjE3MTQzIDI2LjY1NDkgNS4yMjAwNCAyNi40MjI2IDUuMzAxOCAyNi4xODQ3QzUuMzI4NyAyNi4xMjMzIDUuMzU0ODcgMjYuMDYxIDUuMzgxMDcgMjUuOTk4N0M1LjQ5MTI0IDI1LjczNjcgNS42MDIxNiAyNS40NzI5IDUuNzcxOCAyNS4yNTQ3QzYuMTAyODcgMjQuNzM2OSA2LjQ5MTU5IDI0LjM5OTMgNi44Mjc4NSAyNC4xMDcyQzYuODg3NyAyNC4wNTUyIDYuOTQ1ODkgMjQuMDA0NiA3LjAwMTggMjMuOTU0OEM3LjczMTggMjMuMzY0NyA4LjEzMTggMjIuOTc0NyA4LjQ3MTggMjIuMzc0N0M5LjE0MTggMjEuMjA0NyA5LjM2MTggMTkuNDk0OCA5LjQ0MTggMTcuODE0OEw5LjQ3MTggMTYuNjg0N0MxMC40NjE4IDE3LjAzNDcgMTEuNDUxOCAxNy40MTQ3IDEyLjQ0MTggMTcuODM0N0wxMi40MzE4IDE4LjIzNDdDMTIuMzcxOCAxOS4yMTQ3IDEyLjI3MTggMjAuMjI0OCAxMi4wNTE4IDIxLjI0NDhDMTEuNzkxOCAyMi4yNjQ4IDExLjQ3MTggMjMuMzM0NyAxMC43OTE4IDI0LjMzNDdDMTAuMjYzIDI1LjE0MzkgOS40OTY4IDI1Ljc3OTggOC45NDU1OCAyNi4yMzcyQzguODA4NzcgMjYuMzUwNyA4LjY4NTIgMjYuNDUzMyA4LjU4MTgxIDI2LjU0NDdDOC41NTM1IDI2LjU3NTYgOC41MjYzNiAyNi42MDQ4IDguNTAwNDEgMjYuNjMyOEM4LjMyNDcgMjYuODIxOSA4LjIwNDA5IDI2Ljk1MTggOC4xNTE4IDI3LjEzNDhDOC4wNzE4MSAyNy4zMzQ4IDguMDIxOCAyNy42MjQ3IDguMDExOCAyNy45NzQ3TDguMDAxOCAyOC4wOTQ3VjI4LjE1NDdWMjguMTU0OEM4LjAwMTggMjguMTk0OCA4LjAwMTggMjguMjM0OCA4LjAxMTggMjguMjQ0OEM4LjAzMTggMjguMzI0OCA4LjA2MTggMjguMzk0OCA4LjEwMTggMjguNDU0OEM4LjE4MTggMjguNTk0NyA4LjMwMTggMjguNjk0NyA4LjQ0MTggMjguNzU0N0M4LjUxMTggMjguNzg0NyA4LjU4MTggMjguNzk0NyA4LjY2MTggMjguODA0N0g4LjcyMThIOC44OTE4SDkuMjQxODFIMTAuNjQxOEgxMy40MzE4SDI0LjYwMThIMzAuMTgxOEMzMS4wNTM3IDI4LjgxMiAzMS4yNzY2IDI4LjgxNCAzMS40NDE1IDI4LjcxNzNDMzEuNTA1NSAyOC42Nzk3IDMxLjU2MDggMjguNjI3NCAzMS42NDE4IDI4LjU1NDdDMzEuNzQxOCAyOC40NDQ3IDMxLjgwMTggMjguMzA0NyAzMS44MjE4IDI4LjE1NDdDMzEuODI5MiAyOC4xMjU0IDMxLjgyMDMgMjguMDA0MiAzMS44MTExIDI3Ljg3ODVDMzEuODA3OCAyNy44MzMxIDMxLjgwNDUgMjcuNzg3MiAzMS44MDE4IDI3Ljc0NDhDMzEuODAxOCAyNy41OTM3IDMxLjc3MzYgMjcuNDc3OSAzMS43NDY5IDI3LjM2NzdDMzEuNzQxNyAyNy4zNDY2IDMxLjczNjYgMjcuMzI1NyAzMS43MzE4IDI3LjMwNDdDMzEuNjcxOCAyNy4wMzQ3IDMxLjU3MTggMjYuODg0NyAzMS4zOTE4IDI2LjY0NDdDMzEuMjYyMiAyNi40ODc4IDMxLjA2NzMgMjYuMjk4MyAzMC44NDIzIDI2LjA3OTNDMzAuNzM3NSAyNS45Nzc0IDMwLjYyNjIgMjUuODY5MSAzMC41MTE4IDI1Ljc1NDdDMjkuNzYxOCAyNS4wNDQ3IDI5LjAzMTggMjQuMDI0NyAyOC42MjE4IDIzLjAyNDdDMjguNDQ4MSAyMi42NjI4IDI4LjMzMiAyMi4yOTU2IDI4LjIxNjYgMjEuOTMwOEMyOC4xNzI2IDIxLjc5MTYgMjguMTI4NyAyMS42NTI4IDI4LjA4MTggMjEuNTE0N0MyOC4wNTE4IDIxLjM4OTcgMjguMDIwNSAyMS4yNjQ3IDI3Ljk4OTMgMjEuMTM5N0MyNy44OTU1IDIwLjc2NDcgMjcuODAxOCAyMC4zODk3IDI3Ljc0MTggMjAuMDE0N0MyNy43MTk4IDE5Ljg2MDQgMjcuNjk2NyAxOS43MDUxIDI3LjY3MzYgMTkuNTQ5NEMyNy42MjM0IDE5LjIxMDggMjcuNTcyOSAxOC44NzA0IDI3LjUzMTggMTguNTM0N0wyNy40MTE4IDE3LjA3NDdDMjcuMzczNCAxNi4zMzY2IDI3LjM1ODYgMTUuNTY4OCAyNy4zNDQ3IDE0Ljg0ODhDMjcuMzQwNSAxNC42MzI0IDI3LjMzNjQgMTQuNDIwNCAyNy4zMzE4IDE0LjIxNDdDMjcuMzIxOCAxMy4zMzQ3IDI3LjI2MTggMTIuNDY0NyAyNy4xMzE4IDExLjY1NDdDMjYuODgxOCAxMC4wMDQ3IDI2LjI1MTggOC42ODQ3NSAyNS4xMjE4IDcuNDU0NzVDMjQuNTQxOCA2LjgxNDc1IDI0LjAwMTggNi4yODQ3NSAyMy4zNjE4IDUuOTA0NzVDMjIuNzMxOCA1LjUxNDc1IDIyLjAzMTggNS4yNTQ3NSAyMS4yODE4IDUuMTE0NzVDMTkuNzYxOCA0Ljg1NDc1IDE4LjEwMTggNS4wMTQ3NSAxNi44MjE4IDUuNzA0NzVDMTYuMTUxOCA2LjA1NDc1IDE1LjY0MTggNi40ODQ3NSAxNS4wMjE4IDcuMTM0NzVDMTQuNDMxOCA3Ljc0NDc1IDEzLjkyMTggOC4zNjQ3NCAxMy41NTE4IDkuMDM0NzRDMTIuNzkxOCAxMC4zMzQ3IDEyLjU0MTggMTEuOTc0NyAxMi40ODE4IDEzLjcyNDdMOS40ODE4IDEzLjYyNDdDOS41NDE4IDExLjc0NDcgOS44MDE4IDkuNjM0NzUgMTAuODQxOCA3LjcyNDc1QzExLjM0MTggNi43NzQ3NSAxMi4wMDE4IDUuOTU0NzUgMTIuNjgxOCA1LjIzNDc1QzEzLjMwMTggNC41NzQ3NSAxNC4xNDE4IDMuNzY0NzUgMTUuMDkxOCAzLjIzNDc1QzE3LjAwMTggMi4xMTQ3NSAxOS4yMjE4IDEuODM0NzUgMjEuMjgxOCAyLjA4NDc1QzIzLjM4MTggMi4zMTQ3NSAyNS41MTE4IDMuNDQ0NzQgMjYuODgxOCA0Ljk2NDc0QzI4LjI3MTggNi4zMTQ3NCAyOS41MTE4IDguMjg0NzUgMjkuOTIxOCAxMC4zMTQ4QzMwLjE1MTggMTEuMzE0OCAzMC4yNTE4IDEyLjMwNDcgMzAuMzAxOCAxMy4yNjQ3QzMwLjMyNDIgMTMuNjIzMyAzMC4zMjk5IDEzLjk4MTggMzAuMzM1NSAxNC4zMzYyQzMwLjMzNzQgMTQuNDU2MyAzMC4zMzkzIDE0LjU3NTggMzAuMzQxOCAxNC42OTQ3TDMwLjM3MTggMTYuMDA0N0MzMC40NDE4IDE3LjcyNDcgMzAuNTgxOCAxOS40NjQ3IDMxLjA1MTggMjAuOTY0N0MzMS4yNzE4IDIxLjcyNDcgMzEuNTkxOCAyMi4zNzQ3IDMyLjAwMTggMjIuOTM0N0MzMi4yMTA2IDIzLjIzNTIgMzIuNDY4NiAyMy40ODg5IDMyLjc3OTggMjMuNzk1QzMzLjA3OTggMjQuMDkgMzMuNDI5MyAyNC40MzM3IDMzLjgzMTggMjQuOTE0N1pNMjQuMTgxOCAzNi4zNTQ3QzIzLjAwMTggMzcuNTM0NyAyMS40NTE4IDM4LjEyNDcgMTkuOTAxOCAzOC4xMjQ3QzE4LjM2MTggMzguMTI0NyAxNi44MTE4IDM3LjUzNDcgMTUuNjQxOCAzNi4zNTQ3TDE0LjU4MTggMzUuMjk0N0wxNi43MDE4IDMzLjE3NDdMMTcuNzYxOCAzNC4yMzQ3QzE4Ljk0MTggMzUuNDI0NyAyMC44NzE4IDM1LjQyNDcgMjIuMDYxOCAzNC4yMzQ3TDIzLjEyMTggMzMuMTc0N0wyNS4yNDE4IDM1LjI5NDdMMjQuMTgxOCAzNi4zNTQ3WiIgZmlsbD0iI0U3RTdFNyIvPgo8L3N2Zz4K"
                      })),
                    (0, B.tZ)("div", { className: "noItemLabel--AypyKunLpo" }, a("team_master_password_reset_table_empty_label")),
                    (0, B.tZ)("div", { className: "noItemHelper--c9bX9Yn5sj" }, a("team_master_password_reset_table_empty_helper"))
                  );
            })(),
            (0, B.tZ)(
              q.o,
              {
                isOpen: u.dialogIsVisible && "accept" === u.dialogType,
                onRequestClose: x,
                footer: (0, B.tZ)(c.cNS, {
                  intent: "primary",
                  primaryButtonTitle: a("team_master_password_reset_dialog_accept_button_ok"),
                  primaryButtonOnClick: () => {
                    m() &&
                      u.selectedRequest &&
                      (0, cs.Z8)({
                        login: u.selectedRequest.login,
                        recoveryKey: u.selectedRequest.recoveryClientKey,
                        userPublicKey: u.selectedRequest.publicKey
                      })
                        .then(() => {
                          p(), _(d);
                        })
                        .catch((e) => {
                          console.error(e);
                        });
                  },
                  secondaryButtonTitle: a("team_master_password_reset_dialog_accept_button_cancel"),
                  secondaryButtonOnClick: x
                }),
                title: a("team_master_password_reset_dialog_accept_title")
              },
              u.selectedRequest?.login
                ? (0, B.tZ)(
                    "p",
                    { className: zo },
                    a("team_master_password_reset_dialog_accept_content_bold", { login: u.selectedRequest.login })
                  )
                : null,
              (0, B.tZ)("p", { className: Lo }, a("team_master_password_reset_dialog_accept_content"))
            ),
            (0, B.tZ)(
              q.o,
              {
                isOpen: u.dialogIsVisible && "decline" === u.dialogType,
                onRequestClose: S,
                footer: (0, B.tZ)(c.cNS, {
                  intent: "danger",
                  primaryButtonTitle: a("team_master_password_reset_dialog_decline_button_ok"),
                  primaryButtonOnClick: async () => {
                    if ((0, Nn.v0)(e.globalState)) {
                      if (u.selectedRequest)
                        try {
                          await (0, cs.VK)({ login: u.selectedRequest.login }), p(), _(d);
                        } catch (e) {
                          console.error(e);
                        }
                    } else s(new Error(ls.N));
                  },
                  secondaryButtonTitle: a("team_master_password_reset_dialog_decline_button_cancel"),
                  secondaryButtonOnClick: S
                }),
                title: a("team_master_password_reset_dialog_decline_title")
              },
              u.selectedRequest?.login
                ? (0, B.tZ)(
                    "p",
                    { className: zo },
                    a("team_master_password_reset_dialog_decline_content_bold", { login: null != (t = u.selectedRequest?.login) ? t : "" })
                  )
                : null,
              (0, B.tZ)("p", { className: Lo }, a("team_master_password_reset_dialog_decline_content"))
            )
          );
        }, "activity");
      function Go({ path: e }) {
        return n.createElement(
          i.GB,
          { path: [e, `${e}/recent`, `${e}/requests`], permission: (e) => e.adminAccess.hasFullAccess },
          n.createElement(
            i.rs,
            null,
            n.createElement(i.l_, { exact: !0, from: `${e}/`, to: `${e}/recent` }),
            n.createElement(i.Vy, { path: `${e}/requests`, component: Bo, reducer: Ro.Z }),
            n.createElement(i.Vy, { path: `${e}/recent`, component: Uo })
          )
        );
      }
      a(568030);
      var Fo = a(500358);
      a(461238);
      const qo = ({ children: e, onRequestClose: t, footer: a }) => {
          const { translate: s } = (0, g.Z)(),
            i = s("team_directory_sync_key_dialog_title");
          return n.createElement(q.o, { isOpen: !0, showCloseIcon: !0, onRequestClose: t, footer: a, title: i }, e);
        },
        $o = ({ onSubmitKeySuccess: e, onSubmitKeyError: t, checkDirectorySyncKeyRequest: a, handleDismiss: s, handleError: i }) => {
          const { translate: o } = (0, g.Z)(),
            [r, d] = (0, n.useState)({ inputKey: "", isInputKeyInvalid: !1 });
          return (0, l.tZ)(
            qo,
            {
              onRequestClose: s,
              footer: (0, l.tZ)(c.cNS, {
                primaryButtonTitle: o("team_directory_sync_key_dialog_key_input_verify"),
                primaryButtonOnClick: async () => {
                  var n;
                  const { publicKey: s = "" } = null != (n = a()) ? n : {},
                    o = r.inputKey.replace(/\s/g, "").replace(/\n/g, "");
                  var l;
                  o === s
                    ? (() => {
                        const e = a();
                        return e ? (0, cs.QV)(e, "validated") : Promise.reject(new Error("missing params"));
                      })()
                        .then(() => {
                          e();
                        })
                        .catch(i)
                    : (l = o).length % 4 == 0 && atob(l).includes("</RSAKeyValue>")
                    ? t()
                    : d((e) => ({ ...e, isInputKeyInvalid: !0 }));
                },
                secondaryButtonTitle: o("team_directory_sync_key_dialog_key_input_postpone"),
                secondaryButtonOnClick: s,
                intent: "primary"
              })
            },
            (0, l.tZ)(
              l.nv,
              { sx: { marginBottom: "2em" }, color: "ds.text.neutral.quiet" },
              o.markup("team_directory_sync_key_dialog_key_input_message_markup")
            ),
            (0, l.tZ)(l.Kx, {
              placeholder: o("team_directory_sync_key_dialog_key_input_placeholder"),
              onChange: ({ target: { value: e } }) => {
                d({ inputKey: e, isInputKeyInvalid: !1 });
              },
              value: r.inputKey,
              feedback: r.isInputKeyInvalid ? { text: o("team_directory_sync_key_dialog_key_input_invalid") } : void 0,
              error: r.isInputKeyInvalid
            })
          );
        };
      var Vo = (function (e) {
        return (
          (e[(e.Initial = 0)] = "Initial"),
          (e[(e.KeyInput = 1)] = "KeyInput"),
          (e[(e.KeySuccess = 2)] = "KeySuccess"),
          (e[(e.KeyError = 3)] = "KeyError"),
          (e[(e.KeySuspended = 4)] = "KeySuspended"),
          e
        );
      })(Vo || {});
      const Wo = (e) => {
          var t;
          const { translate: a } = (0, g.Z)(),
            [s, i] = (0, n.useState)(Vo.Initial),
            o = () => e.lee.globalState.directorySyncKey.checkDirectorySyncKeyRequest,
            r = () => {
              e.lee.dispatchGlobal((0, Fo.M2)());
            },
            d = () => {
              e.lee.dispatchGlobal((0, Fo.HK)());
            },
            u = () => {
              e.lee.dispatchGlobal((0, Fo.er)());
            },
            _ = () => {
              const t = "directorySyncKeyValidationError",
                a = c.BLW.ERROR,
                n = {
                  key: t,
                  level: a,
                  textKey: "team_directory_sync_key_error_markup",
                  handleClose: () => e.lee.dispatchGlobal((0, Hi.FV)(t))
                };
              e.lee.dispatchGlobal((0, Hi.wN)(n)), d();
            },
            m = () => {
              i(Vo.KeyInput);
            },
            p = () => {
              (() => {
                const e = o();
                return e ? (0, cs.QV)(e, "rejected") : Promise.reject(new Error("missing params"));
              })()
                .then(() => {
                  i(Vo.KeySuspended), u();
                })
                .catch(_);
            },
            y = () => {
              i(Vo.KeySuccess), u();
            },
            h = () => {
              i(Vo.KeyError);
            };
          switch (s) {
            case Vo.Initial:
              return (0, l.tZ)(
                qo,
                {
                  onRequestClose: r,
                  footer: (0, l.tZ)(c.cNS, {
                    primaryButtonTitle: a("team_directory_sync_key_dialog_initial_continue"),
                    primaryButtonOnClick: m,
                    secondaryButtonTitle: a("team_directory_sync_key_dialog_initial_postpone"),
                    secondaryButtonOnClick: r,
                    intent: "primary"
                  })
                },
                (0, l.tZ)(l.nv, { color: "ds.text.neutral.quiet" }, a.markup("team_directory_sync_key_dialog_initial_message_markup"))
              );
            case Vo.KeyInput:
              return (
                t ||
                (0, l.tZ)($o, {
                  onSubmitKeySuccess: y,
                  onSubmitKeyError: h,
                  checkDirectorySyncKeyRequest: o,
                  handleDismiss: r,
                  handleError: _
                })
              );
            case Vo.KeySuccess:
              return (0, l.tZ)(
                qo,
                {
                  onRequestClose: d,
                  footer: (0, l.tZ)(c.cNS, {
                    secondaryButtonTitle: a("team_directory_sync_key_dialog_key_success_close"),
                    secondaryButtonOnClick: d
                  })
                },
                (0, l.tZ)(
                  c.Ejs,
                  { gap: "8px" },
                  (0, l.tZ)(l.JO, {
                    name: "FeedbackSuccessOutlined",
                    size: "xlarge",
                    color: "ds.text.positive.quiet",
                    sx: { width: "64px", height: "64px" }
                  }),
                  (0, l.tZ)(
                    "div",
                    null,
                    (0, l.tZ)(l.X6, { as: "h1" }, a("team_directory_sync_key_dialog_key_success_header")),
                    (0, l.tZ)(l.nv, null, a("team_directory_sync_key_dialog_key_success_message"))
                  )
                )
              );
            case Vo.KeyError:
              return (0, l.tZ)(
                qo,
                {
                  onRequestClose: d,
                  footer: (0, l.tZ)(c.cNS, {
                    primaryButtonTitle: a("team_directory_sync_key_dialog_key_error_validate"),
                    primaryButtonOnClick: p,
                    secondaryButtonTitle: a("team_directory_sync_key_dialog_key_error_retry"),
                    secondaryButtonOnClick: m,
                    intent: "danger"
                  })
                },
                (0, l.tZ)(
                  c.Ejs,
                  { gap: "8px" },
                  (0, l.tZ)(l.JO, {
                    name: "FeedbackFailOutlined",
                    size: "xlarge",
                    color: "ds.text.danger.quiet",
                    sx: { width: "64px", height: "64px" }
                  }),
                  (0, l.tZ)(
                    "div",
                    null,
                    (0, l.tZ)(l.X6, { as: "h1" }, a("team_directory_sync_key_dialog_key_error_header")),
                    (0, l.tZ)(l.nv, { color: "ds.text.neutral.quiet" }, a("team_directory_sync_key_dialog_key_error_message"))
                  )
                )
              );
            case Vo.KeySuspended:
              return (0, l.tZ)(
                qo,
                {
                  onRequestClose: d,
                  footer: (0, l.tZ)(c.cNS, {
                    secondaryButtonTitle: a("team_directory_sync_key_dialog_key_suspended_close"),
                    secondaryButtonOnClick: d
                  })
                },
                (0, l.tZ)(l.nv, { color: "ds.text.neutral.quiet" }, a.markup("team_directory_sync_key_dialog_key_suspended_message_markup"))
              );
          }
        },
        Ho = () => {
          var e;
          const { translate: t } = (0, g.Z)(),
            { queue: a, popAlertFromQueue: s } = H(),
            i = () => {
              s();
            },
            [o] = a;
          return o
            ? n.createElement(
                q.o,
                {
                  isOpen: !0,
                  onRequestClose: i,
                  footer: n.createElement(c.cNS, {
                    secondaryButtonTitle: null != (e = o.okButtonLabel) ? e : t("_common_alert_dismiss_button"),
                    secondaryButtonOnClick: i
                  }),
                  title: o.title
                },
                n.createElement("div", null, o.message)
              )
            : null;
        };
      var Ko = a(263272);
      const Yo = ({
        lee: e,
        notificationKey: t,
        buttonTextKey: a,
        level: n,
        redirectPath: s,
        onClickButton: o,
        keyParams: r,
        notificationName: l
      }) => {
        const c = {
          key: t,
          level: n,
          textKey: t,
          buttonTextKey: a,
          keyParams: r,
          handleClose: () => {
            e.dispatchGlobal((0, Hi.FV)(t)), l && ca.C.markNotificationAsSeen(l);
          }
        };
        s &&
          (c.handleLinkClick = (a) => {
            a.preventDefault(), (0, j.Tx)(s) ? (0, j.Yk)(s, { type: "", action: "" }) : (e.dispatchGlobal((0, Hi.FV)(t)), (0, i.uX)(s));
          }),
          o &&
            (c.handleButtonClick = () => {
              o();
            }),
          e.dispatchGlobal((0, Hi.wN)(c));
      };
      var Qo = a(170226);
      const Xo = "TRIAL_PERIOD_0_15D",
        Jo = "GRACE_PERIOD_PAID",
        er = "ENABLE_RECOVERY",
        tr = "ADD_ADMINS",
        ar = "TAC_IN_EXTENSION";
      var nr = a(309937);
      const sr = { notification: "notification--JlZi_NwcwA" },
        ir = ({ level: e = c.BLW.SUCCESS, text: t, buttonTextKey: a, onClose: s, onLinkClick: i, onClickButton: o }) => {
          const r = n.useRef(null),
            { translate: l } = (0, g.Z)(),
            d = (0, n.useCallback)(
              (e) => {
                if (!i) return;
                const t = e.target;
                t && "a" === t.tagName.toLowerCase() && i(e);
              },
              [i]
            );
          return (
            (0, n.useEffect)(() => {
              if (!r || !r.current) return;
              const e = r.current;
              return (
                e.addEventListener("click", d),
                () => {
                  e.removeEventListener("click", d);
                }
              );
            }, [d]),
            n.createElement(
              "div",
              { className: sr.notification },
              n.createElement(
                c.bZj,
                {
                  severity: e,
                  size: c.k3y.SMALL,
                  showIcon: !0,
                  closeIconName: l("_common_alert_dismiss_button"),
                  onClose: s,
                  onAction: o || void 0,
                  actionText: a || void 0
                },
                n.createElement("span", { ref: r, className: sr.text }, t)
              )
            )
          );
        },
        or = ({ lee: e }) => {
          var t;
          const { translate: a } = (0, g.Z)(),
            s = null == (t = (0, Ce.o)("onboarding_web_tacgetstarted")) || t,
            { setIsVaultNavigationModalOpen: i } = (0, n.useContext)(ve),
            [o, r] = (0, n.useState)([]),
            d = (0, n.useCallback)((t) => {
              t &&
                (async ({
                  lee: e,
                  teamStatus: t,
                  showTacInExtension: a,
                  translate: n,
                  setIsVaultNavigationModalOpen: s,
                  isTacGetStartedFFEnabled: i
                }) => {
                  const o = (({ lee: e, teamStatus: t, showTacInExtension: a }) => {
                    const n = new Set();
                    a && n.add(ar),
                      t.isGracePeriod && !t.isFreeTrial && n.add(Jo),
                      t.isFreeTrial &&
                        !t.isGracePeriod &&
                        ((0, Qo.PY)(t.nextBillingDetails.dateUnix) < 15 ? n.add("TRIAL_PERIOD_15_30D") : n.add(Xo)),
                      t.info.recoveryEnabled || t.info.ssoEnabled || n.add(er);
                    const s = (0, C.ev)(e.globalState) || 0,
                      i = e.carbon.spaceData.spaces.find((e) => s === +e.teamId);
                    return i && i.details.teamAdmins.length <= 1 && n.add(tr), n;
                  })({ lee: e, teamStatus: t, showTacInExtension: a });
                  e.dispatchGlobal((0, Hi.L1)());
                  const r = e.permission.adminAccess.hasFullAccess,
                    l = await ca.C.getNotificationStatus();
                  o.has(ar) && l.tacGetTheExtensionBanner === Me.E.Unseen && Ko.isSafari(),
                    o.has(Jo) &&
                      ((e) => {
                        Yo({
                          lee: e,
                          notificationKey: "team_notifications_renewal_grace_period_markup",
                          level: c.BLW.ERROR,
                          redirectPath: e.routes.teamAccountRoutePath
                        });
                      })(e),
                    r &&
                      (o.has(er) &&
                        l.tacEnableAccountRecoveryBanner === Me.E.Unseen &&
                        !i &&
                        ((e) => {
                          const t = `${e.routes.teamSettingsRoutePath}/master-password-policies`;
                          Yo({
                            lee: e,
                            notificationKey: "team_notifications_enable_account_recovery_markup",
                            level: c.BLW.WARNING,
                            redirectPath: t,
                            notificationName: Me.O.TacEnableAccountRecoveryBanner
                          });
                        })(e),
                      !o.has(tr) ||
                        l.tacOnlyOneAdminBanner !== Me.E.Unseen ||
                        Ko.isSafari() ||
                        i ||
                        ((e) => {
                          const t = e.routes.teamAccountRoutePath;
                          Yo({
                            lee: e,
                            notificationKey: "team_notifications_add_admins_markup",
                            level: c.BLW.WARNING,
                            redirectPath: t,
                            notificationName: Me.O.TacOnlyOneAdminBanner
                          });
                        })(e)),
                    o.has(Xo) &&
                      (({ lee: e, spaceTier: t, translate: a }) => {
                        const n = (0, O.Uo)({ tier: t, translate: a });
                        Yo({
                          lee: e,
                          notificationKey: "team_notifications_free_trial_D0_T15_markup",
                          keyParams: { planTier: n },
                          level: c.BLW.SUCCESS,
                          redirectPath: e.routes.teamAccountRoutePath
                        });
                      })({ lee: e, spaceTier: t.planTier, translate: n });
                })({
                  lee: e,
                  teamStatus: t,
                  showTacInExtension: !1,
                  translate: a,
                  setIsVaultNavigationModalOpen: i,
                  isTacGetStartedFFEnabled: s
                });
            }, []);
          return (
            (0, n.useEffect)(() => {
              r(
                (() => {
                  const t = e.globalState.notifications.list,
                    a = (function (e) {
                      const t = e.permission.adminAccess.hasFullAccess,
                        a = e.globalState.directorySyncKey;
                      return t && a.validationPostponed
                        ? [
                            {
                              key: "directorySyncPosponedValidation",
                              level: c.BLW.WARNING,
                              textKey: "team_directory_sync_key_postponed_notif_markup",
                              handleLinkClick: (t) => {
                                t.preventDefault(), e.dispatchGlobal((0, Fo.b3)());
                              },
                              handleClose: () => e.dispatchGlobal((0, Fo.vg)())
                            }
                          ]
                        : [];
                    })(e),
                    n = (function (e) {
                      const t = e.permission.adminAccess.hasFullAccess,
                        a = e.globalState.ieNotifications;
                      return t && Ko.isInternetExplorer() && a.displayIeDropNotification
                        ? [
                            {
                              key: "directorySyncPosponedValidation",
                              level: c.BLW.WARNING,
                              textKey: "wac_ie_drop_message_markup",
                              handleClose: () => e.dispatchGlobal((0, nr.w)())
                            }
                          ]
                        : [];
                    })(e);
                  return [...t, ...a, ...n];
                })()
              );
            }, [e.globalState.ieNotifications, e.globalState.directorySyncKey, e.globalState.notifications.list]),
            (0, n.useEffect)(() => {
              const t = (0, Nn.v0)(e.globalState);
              t &&
                new Mn.Z()
                  .status({ auth: t })
                  .then((e) => {
                    if (200 !== e.code) return;
                    const {
                      content: { team: t }
                    } = e;
                    d(t);
                  })
                  .catch();
            }, [e.globalState.user.session.uki]),
            (0, l.tZ)(
              "div",
              { className: "notifications--SCKfre7VSM" },
              o.map((e) =>
                (0, l.tZ)(ir, {
                  key: e.key,
                  level: e.level,
                  text: (0, pa.t5)(e.textKey) ? a.markup(e.textKey, e.keyParams) : a(e.textKey),
                  buttonTextKey: e.buttonTextKey ? a(e.buttonTextKey) : void 0,
                  onClose: e.handleClose,
                  onLinkClick: e.handleLinkClick,
                  onClickButton: e.handleButtonClick
                })
              )
            )
          );
        };
      var rr = a(430959),
        lr = a(619122);
      var cr, dr;
      const ur = (e) => {
        const [t, a] = n.useState(!1);
        (0, rr._)();
        const s = (0, R.a)(e.lee.dispatchGlobal),
          i = () => {
            const t = e.lee.globalState.carbon.loginStatus?.loggedIn,
              a = e.lee.globalState.user.session.login,
              n = e.lee.globalState.user.session.uki,
              s = e.lee.globalState.carbon.accountInfo?.premiumStatus,
              i = e.lee.globalState.user.session.permissions?.tacAccessPermissions;
            return t && Boolean(a && n) && Boolean(s) && Boolean(i);
          },
          o = () => {
            const t = e.lee.globalState.user.session.permissions?.tacAccessPermissions;
            return Boolean(t?.size);
          };
        return (
          n.useEffect(() => {
            !i() || o() || s();
          }, [t]),
          i() && o()
            ? n.createElement(
                W,
                { globalReportError: e.lee.reportError },
                n.createElement(
                  lr.qc,
                  { lee: e.lee },
                  n.createElement(
                    Le,
                    null,
                    n.createElement(
                      fe,
                      null,
                      n.createElement(
                        "div",
                        null,
                        e.children,
                        dr || (dr = n.createElement(Ho, null)),
                        n.createElement(or, { lee: e.lee }),
                        e.lee.globalState.directorySyncKey.displayDialog ? n.createElement(Wo, { lee: e.lee }) : null,
                        n.createElement("div", { className: "alertPopup--S9uF3SnYTj", id: "alert-popup-portal" })
                      )
                    )
                  )
                )
              )
            : cr || (cr = n.createElement("div", null))
        );
      };
      var _r = a(481030),
        mr = a(740763);
      let pr = (function (e) {
        return (
          (e.Loading = "loading"),
          (e.Start = "start"),
          (e.Pending = "pending"),
          (e.Validated = "validated"),
          (e.Deactivating = "deactivating"),
          e
        );
      })({});
      const gr = () => {
        const [e, t] = (0, n.useState)({ domain: null, status: pr.Loading }),
          [a, s] = (0, n.useState)([]),
          i = (0, n.useCallback)(async () => {
            try {
              const e = await ca.C.getTeamDomains();
              if (e.success && e.domains.length) {
                const a = e.domains.filter((e) => e.status === mr.p.pending),
                  n = e.domains.filter((e) => e.status === mr.p.valid);
                if (n.length) {
                  s(n);
                  const e = n[0];
                  t({ domain: e, status: pr.Validated });
                } else if (a.length) {
                  const e = a[a.length - 1];
                  t({ domain: e, status: pr.Pending });
                } else t({ domain: e.domains[e.domains.length - 1], status: pr.Pending });
              } else t({ domain: null, status: pr.Start });
            } catch (e) {
              t({ domain: null, status: pr.Start });
            }
          }, []);
        return (
          (0, n.useEffect)(() => {
            i();
          }, [i]),
          {
            verifiedOrPendingDomain: e,
            verifiedDomains: a,
            updateDomainState: i,
            deactivateDomain: async () => {
              if (null !== e.domain) {
                t((e) => ({ domain: e.domain, status: pr.Deactivating }));
                try {
                  (await ca.C.deactivateTeamDomain({ domain: e.domain.name })).success ? t({ domain: null, status: pr.Start }) : i();
                } catch (e) {
                  i();
                }
              }
            },
            tryVerifyDomain: async () => {
              await ca.C.completeTeamDomainRegistration(), await i();
            },
            selectVerifiedDomain: (e) => {
              t({ domain: e, status: pr.Validated });
            }
          }
        );
      };
      var yr = a(337466),
        hr = a(316172);
      const br = (e) => {
          const t = e.toFixed(1),
            a = e.toFixed();
          return parseFloat(a) - parseFloat(t) == 0 ? a : t;
        },
        xr = ({ showPasswordHealthScore: e, securityIndex: t, shieldSize: a }) => {
          let s = "";
          return e
            ? ((s = t >= 80 ? "ds.text.positive.quiet" : t >= 40 ? "ds.text.warning.quiet" : "ds.text.danger.quiet"),
              t >= 60
                ? n.createElement(n.Fragment, null, n.createElement(c.FjK, { size: a, color: s, viewBox: "5 5 40 40" }), `${br(t)}%`)
                : n.createElement(n.Fragment, null, n.createElement(c.sQG, { size: a, color: s, viewBox: "5 5 40 40" }), `${br(t)}%`))
            : ((s = "ds.text.brand.quiet"), n.createElement(n.Fragment, null, n.createElement(c.P2E, { size: a, color: s }), "-"));
        },
        Sr = "value--w9XKkttPDT",
        vr = "link--nWXIzseKub";
      var fr;
      const Cr = { HEADER: { display: "flex", marginBottom: "8px" }, FOOTER: { marginTop: "16px", lineHeight: "1", fontSize: "16px" } },
        Zr = ({ title: e }) =>
          (0, l.tZ)(
            c.ua7,
            { sx: { fontSize: 2, maxWidth: "180px" }, placement: "bottom", content: e },
            fr || (fr = (0, l.tZ)(c.uMt, { size: 13, tabIndex: 0, color: "ds.text.neutral.quiet" }))
          ),
        Er = (e) => (0, l.tZ)(l.X6, { as: "h1", color: "ds.text.neutral.quiet", textStyle: "ds.title.supporting.small" }, e),
        Dr = ({ children: e }) =>
          (0, l.tZ)(
            c.Zbd,
            {
              sx: {
                height: "132px",
                width: "232px",
                marginRight: "32px",
                flexShrink: "0",
                padding: "16px",
                overflow: "inherit",
                color: "ds.text.neutral.catchy",
                backgroundColor: "ds.container.agnostic.neutral.supershy",
                borderColor: "ds.border.neutral.quiet.idle"
              }
            },
            e
          ),
        Tr = ({ passwordHealth: e, seats: t, passwordHealthHistoryEmpty: a }) => {
          const { translate: n } = (0, g.Z)(),
            { routes: s } = (0, Ri.Xo)(),
            { compromised: o, securityIndex: r } = e,
            c = `${t.used}/${t.provisioned}`,
            { openDialog: d, shouldShowTrialDiscontinuedDialog: u } = (0, T.yp)(),
            _ = () => {
              u && d();
            };
          return (0, l.tZ)(
            "section",
            { className: "cardsRow--UeIGdGJnGY", sx: { display: "flex", justifyContent: "flex-start" } },
            (0, l.tZ)(
              Dr,
              null,
              (0, l.tZ)(
                "header",
                { sx: Cr.HEADER },
                Er(n("team_dashboard_card_health_score")),
                (0, l.tZ)(Zr, { title: n("team_dashboard_card_health_score_info") })
              ),
              (0, l.tZ)("div", { className: Sr }, (0, l.tZ)(xr, { showPasswordHealthScore: !a, securityIndex: r, shieldSize: 32 }))
            ),
            (0, l.tZ)(
              Dr,
              null,
              (0, l.tZ)(
                "header",
                { sx: Cr.HEADER },
                Er(n("team_dashboard_card_compromised")),
                (0, l.tZ)(Zr, { title: n("team_dashboard_card_compromised_info") })
              ),
              (0, l.tZ)("div", { className: A()(Sr, o ? "compromised--m8LmAYo_e5" : void 0) }, o),
              o
                ? (0, l.tZ)(
                    "footer",
                    { sx: Cr.FOOTER },
                    (0, l.tZ)(i.rU, { className: vr, to: s.teamMembersRoutePath }, n("team_dashboard_card_compromised_details_link"))
                  )
                : null
            ),
            (0, l.tZ)(
              Dr,
              null,
              (0, l.tZ)(
                "header",
                { sx: Cr.HEADER },
                Er(n("team_dashboard_card_seats_taken")),
                (0, l.tZ)(Zr, { title: n("team_dashboard_card_seats_taken_info") })
              ),
              (0, l.tZ)("div", { className: A()(Sr, { "fontSizeBigger--f83OiWuf4K": c.length >= 8 }) }, c),
              (0, l.tZ)(
                "footer",
                { sx: Cr.FOOTER },
                (0, l.tZ)(i.rU, { className: vr, to: u ? {} : s.teamAccountRoutePath, onClick: _ }, n("team_dashboard_card_seats_buy_link"))
              )
            ),
            (0, l.tZ)(
              Dr,
              null,
              (0, l.tZ)(
                "header",
                { sx: Cr.HEADER },
                Er(n("team_dashboard_card_pending_invitations")),
                (0, l.tZ)(Zr, { title: n("team_dashboard_card_pending_invitations_info") })
              ),
              (0, l.tZ)("div", { className: Sr }, t.pending),
              (0, l.tZ)(
                "footer",
                { sx: Cr.FOOTER },
                (0, l.tZ)(
                  i.rU,
                  {
                    onClick: _,
                    className: vr,
                    to: u
                      ? {}
                      : {
                          pathname: s.teamMembersRoutePath,
                          state: t.pending ? { openResendPendingInvitationsDialog: !0 } : { openSendInvitesDialog: !0 }
                        }
                  },
                  t.pending ? n("team_dashboard_card_resend_invitations_link") : n("team_dashboard_card_send_invitations_link")
                )
              )
            )
          );
        };
      let Nr = (function (e) {
        return (e[(e.AllTime = 0)] = "AllTime"), (e[(e.Last7Days = 1)] = "Last7Days"), (e[(e.Last30Days = 2)] = "Last30Days"), e;
      })({});
      var Mr = a(983114),
        Ir = a(566155),
        wr = a(582671),
        kr = a(476927),
        Ar = a(321672),
        Or = a(365473),
        Lr = a(433117),
        zr = a(328290),
        jr = a(440934),
        Rr = a(142094),
        Pr = a(365580),
        Ur = a(744913);
      const Br = (e, t, a) => {
          const n = [];
          switch (e) {
            case Nr.AllTime: {
              if (a >= 5 && a <= 8) {
                t.forEach((e) => {
                  const { date: t } = e;
                  1 === new Date(t).getDate() && n.push(t);
                });
                break;
              }
              const { length: e } = t;
              if (e <= 7) {
                t.forEach((e) => {
                  n.push(e.date);
                });
                break;
              }
              const s = e / 7;
              let i = e - 1;
              for (; i >= 0; ) n.push(t[Math.round(i)]?.date), (i -= s);
              break;
            }
            case Nr.Last7Days:
              t.forEach((e) => {
                n.push(e.date);
              });
              break;
            case Nr.Last30Days:
              t.forEach((e) => {
                const { date: t } = e;
                0 === new Date(t).getDay() && n.push(t);
              });
              break;
            default:
              (0, Pr.U)(e);
          }
          return n;
        },
        Gr = "legendItem--MoxC6xF4tG",
        Fr = "legendIcon--p8Emm90xE4",
        qr = ({ active: e, label: t, payload: a }) => {
          const { translate: s } = (0, g.Z)();
          if (!e) return null;
          const i = a ? `${br(a[0]?.value)}%` : null;
          return n.createElement(
            "div",
            { className: "customTooltipContainer--iAM2rWgGzw" },
            n.createElement("time", { className: "date--JuYmIy6PnQ" }, t),
            n.createElement(
              "div",
              { className: "score--RRdFFcOQCh" },
              n.createElement(
                "div",
                { className: Gr },
                n.createElement("div", { className: Fr }),
                n.createElement("p", null, s("team_dashboard_graph_score_hover_legend"))
              ),
              n.createElement("p", null, i)
            )
          );
        };
      var $r;
      const Vr = ({ history: e, passwordHealthHistoryEmpty: t }) => {
        const [a, s] = (0, n.useState)(Nr.AllTime),
          i = ((e) => {
            const { length: t } = e;
            if (t <= 2) return e;
            const a = (0, Lr.Z)(e[0].date),
              n = (0, Lr.Z)(e[t - 1].date),
              s = (0, zr.Z)(n, a);
            if (s === t - 1) return e;
            const i = [];
            let o = 0,
              r = e[o].securityIndex,
              l = a,
              c = a;
            for (let t = 0; t <= s; t++)
              (0, jr.Z)(c, l)
                ? (i.push(e[o]), (r = e[o].securityIndex), o++, (l = (0, Lr.Z)(e[o]?.date)))
                : i.push({ date: c.toISOString().slice(0, 10), securityIndex: r }),
                (c = (0, Rr.Z)(c, 1));
            return i;
          })(e),
          o = ((e, t) => {
            switch (e) {
              case Nr.AllTime:
                return t;
              case Nr.Last7Days:
                return t.slice(t.length - 7, t.length);
              case Nr.Last30Days:
                return t.slice(t.length - 30, t.length);
              default:
                (0, Pr.U)(e);
            }
          })(a, i),
          { translate: r } = (0, g.Z)();
        return (0, l.tZ)(
          n.Fragment,
          null,
          (0, l.tZ)(
            "section",
            { className: A()("topSection--nM0XDipPte", { "addMarginTop--fLzJVO2qx1": t }) },
            (0, l.tZ)(
              "div",
              { className: Gr },
              (0, l.tZ)("div", { className: Fr }),
              (0, l.tZ)(
                l.nv,
                { textStyle: "ds.body.helper.regular", color: "ds.text.neutral.quiet" },
                r("team_dashboard_graph_score_legend")
              )
            ),
            (0, l.tZ)(
              c.G8v,
              null,
              i.length > 7
                ? (0, l.tZ)(c.yPU, {
                    label: r("team_dashboard_graph_7_days_button"),
                    selected: a === Nr.Last7Days,
                    onClick: () => {
                      s(Nr.Last7Days);
                    },
                    size: "small"
                  })
                : null,
              i.length > 30
                ? (0, l.tZ)(c.yPU, {
                    label: r("team_dashboard_graph_30_days_button"),
                    selected: a === Nr.Last30Days,
                    onClick: () => {
                      s(Nr.Last30Days);
                    },
                    size: "small"
                  })
                : null,
              (0, l.tZ)(c.yPU, {
                label: r("team_dashboard_graph_all_time_button"),
                selected: a === Nr.AllTime,
                onClick: () => {
                  i.length <= 7 || s(Nr.AllTime);
                },
                size: "small"
              })
            )
          ),
          (0, l.tZ)(
            "section",
            { sx: { width: "100%", height: "100px", flexGrow: 1 } },
            (0, l.tZ)(
              Mr.h,
              { sx: { height: "100%", width: "100%" } },
              (0, l.tZ)(
                Ir.w,
                { data: t ? [] : o, sx: { position: "relative", right: "18px" } },
                $r || ($r = (0, l.tZ)(wr.q, { vertical: !1 })),
                (0, l.tZ)(kr.B, { domain: [0, 100], tickFormatter: (e) => `${e}%`, fontSize: "small" }),
                (({ historyToDisplay: e, passwordHealthHistoryEmpty: t, view: a }) => {
                  const { translate: s } = (0, g.Z)(),
                    i =
                      0 !== e.length
                        ? ((e) => {
                            const t = new Date(),
                              a = new Date(e);
                            let n = 12 * (t.getFullYear() - a.getFullYear());
                            return (n -= a.getMonth()), (n += t.getMonth()), n + 1;
                          })(e[0].date)
                        : 0;
                  return (
                    Br(a, e, i),
                    n.createElement(Ur.K, {
                      dataKey: "date",
                      ticks: t ? [] : Br(a, e, i),
                      tickSize: 4,
                      tickFormatter: t
                        ? () => ""
                        : (e) =>
                            ((e, t, a, n) => {
                              const s = t === Nr.AllTime && a >= 5,
                                i = new Date(e),
                                o = n.shortDate(i, s ? pa._T.MMM_YYYY : pa._T.L_M_D),
                                r = n.shortDate(i, pa._T.MMMM);
                              if (s) return o === r || o.endsWith(".") ? o : `${o}.`;
                              const [l, c] = o.split(" ");
                              return l === r ? o : `${l}. ${c}`;
                            })(e, a, i, s),
                      fontSize: "small"
                    })
                  );
                })({ historyToDisplay: o, passwordHealthHistoryEmpty: t, view: a }),
                (0, l.tZ)(Ar.u, {
                  content: (e) => {
                    const t = r.shortDate((0, Lr.Z)(e.label), { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
                    return (0, l.tZ)(qr, { ...e, label: t });
                  },
                  animationDuration: 500,
                  animationEasing: "ease-out",
                  cursor: !t
                }),
                (0, l.tZ)(Or.x, {
                  dataKey: "securityIndex",
                  stroke: "#0e6476",
                  strokeWidth: "2",
                  dot: !1,
                  activeDot: { strokeWidth: 0, r: 4 },
                  animationDuration: 500,
                  isAnimationActive: !0
                })
              )
            )
          )
        );
      };
      var Wr = a(980936),
        Hr = a(728207);
      const Kr = ({ isLoading: e, history: t, passwordHealthHistoryEmpty: a }) => {
          const { translate: n } = (0, g.Z)(),
            s = (0, Wr.I)(),
            i = (0, Hr.u)();
          if (i.status !== se.rq.Success) return null;
          const o = s.status === se.rq.Success && !s.isDisabled,
            r = !e && a,
            c = !e && !a && i.teamCreationDate < 1589932800;
          return (0, l.tZ)(
            "section",
            { sx: { padding: "3%", flexGrow: 1, display: "flex", flexDirection: "column" } },
            (0, l.tZ)(
              l.X6,
              { as: "h5", color: "ds.text.neutral.catchy", textStyle: "ds.title.section.medium", sx: { marginBottom: "1%" } },
              n("team_dashboard_graph_heading")
            ),
            r
              ? (0, l.tZ)(l.ke, {
                  size: "small",
                  sx: { marginBottom: "11px" },
                  title: n(o ? "team_dashboard_graph_not_enough_data_warning" : "team_dashboard_graph_not_enough_data_warning_min", {
                    minPasswords: 5
                  })
                })
              : null,
            c
              ? (0, l.tZ)(l.ke, { size: "small", sx: { marginBottom: "11px" }, title: n("team_dashboard_graph_no_old_data_warning") })
              : null,
            (0, l.tZ)(Vr, { history: t, passwordHealthHistoryEmpty: a })
          );
        },
        Yr = ({ title: e, value: t, color: a }) =>
          (0, l.tZ)(
            "div",
            { sx: { marginRight: "8px", minWidth: "70px" } },
            (0, l.tZ)(
              "header",
              null,
              (0, l.tZ)(l.nv, { as: "h2", color: "ds.text.neutral.quiet", textStyle: "ds.body.helper.regular" }, e)
            ),
            (0, l.tZ)("div", { sx: { fontSize: "x-large", fontWeight: "bold", color: null != a ? a : "ds.text.neutral.standard" } }, t)
          ),
        Qr = ({ compromised: e, passwords: t, reused: a, safe: n, securityIndex: s, weak: i, passwordHealthHistoryEmpty: o }) => {
          const { translate: r } = (0, g.Z)();
          return (0, l.tZ)(
            "section",
            { sx: { borderTop: "1px solid", borderTopColor: "ds.border.neutral.quiet.idle", display: "flex", padding: "3% 2%" } },
            (0, l.tZ)(
              "div",
              { sx: { width: "240px", padding: "0 24px", borderRight: "1px solid", borderRightColor: "ds.border.neutral.quiet.idle" } },
              (0, l.tZ)(
                "header",
                null,
                (0, l.tZ)(
                  l.nv,
                  { as: "h2", color: "ds.text.neutral.quiet", textStyle: "ds.body.helper.regular" },
                  r("team_dashboard_password_health_breakdown_score")
                )
              ),
              (0, l.tZ)(
                "div",
                {
                  sx: {
                    fontSize: "x-large",
                    fontWeight: "bold",
                    display: "inline-flex",
                    alignItems: "center",
                    "& > svg": { marginRight: "7px" },
                    color: "ds.text.neutral.standard"
                  }
                },
                (0, l.tZ)(xr, { showPasswordHealthScore: !o, securityIndex: s, shieldSize: 20 })
              )
            ),
            (0, l.tZ)(
              "div",
              { sx: { display: "flex", justifyContent: "space-between", padding: "0 24px", width: "100%" } },
              (0, l.tZ)(Yr, { title: r("team_dashboard_password_health_breakdown_total"), value: t }),
              (0, l.tZ)(Yr, {
                title: r("team_dashboard_password_health_breakdown_safe"),
                value: n,
                color: n ? "ds.text.positive.quiet" : void 0
              }),
              (0, l.tZ)(Yr, {
                title: r("team_dashboard_password_health_breakdown_weak"),
                value: i,
                color: i ? "ds.text.warning.quiet" : void 0
              }),
              (0, l.tZ)(Yr, {
                title: r("team_dashboard_password_health_breakdown_reused"),
                value: a,
                color: a ? "ds.text.warning.quiet" : void 0
              }),
              (0, l.tZ)(Yr, {
                title: r("team_dashboard_password_health_breakdown_compromised"),
                value: e,
                color: e ? "ds.text.danger.quiet" : void 0
              })
            )
          );
        },
        Xr = ({ isLoading: e, report: t, passwordHealthHistoryEmpty: a }) =>
          (0, B.tZ)(
            c.Zbd,
            {
              sx: {
                height: "100%",
                display: "flex",
                flexDirection: "column",
                backgroundColor: "ds.container.agnostic.neutral.supershy",
                borderColor: "ds.border.neutral.quiet.idle"
              }
            },
            (0, B.tZ)(Kr, { isLoading: e, history: t.passwordHealthHistory, passwordHealthHistoryEmpty: a }),
            (0, B.tZ)(Qr, { ...t.passwordHealth, passwordHealthHistoryEmpty: a })
          ),
        Jr = "https://support.dashlane.com/hc/articles/4507132108946",
        el = {
          HEADING: "team_dashboard_dark_web_insights_heading",
          SECURITY_INCIDENTS: {
            LABEL: "team_dashboard_dark_web_insights_security_incidents",
            TOOLTIP: "team_dashboard_dark_web_insights_security_incidents_tooltip"
          },
          EMAILS_AFFECTED: {
            LABEL: "team_dashboard_dark_web_insights_emails_affected",
            TOOLTIP: "team_dashboard_dark_web_insights_emails_affected_tooltip"
          },
          SUGGESTED_INVITATION: {
            LABEL: "team_dashboard_dark_web_insights_suggested_invitations",
            TOOLTIP: "team_dashboard_dark_web_insights_suggested_invitations_tooltip"
          },
          RETURNING_USER_CTA: "team_dashboard_dark_web_insights_go_to_cta",
          RETURNING_USER_VIEW_DOMAIN_GUIDE_CTA: "team_dashboard_dark_web_insights_view_guide_cta",
          UNVERIFIED_MSG: "team_dashboard_dark_web_insights_domain_unverified_msg",
          UNVERIFIED_SUBTEXT: "team_dashboard_dark_web_insights_domain_unverified_sub_text",
          INCIDENT_FREE_MSG: "team_dashboard_dark_web_insights_domain_incident_free_msg",
          INCIDENT_FREE_SUBTEXT: "team_dashboard_dark_web_insights_domain_incident_free_sub_text",
          GENERATING_INSIGHTS_MESSAGE: "team_dashboard_dark_web_insights_generating_msg",
          NEW_INCIDENTS_NOTIFICATION_MSG: {
            ONE: "team_dashboard_dark_web_insights_notify_new_incidents_one",
            MANY: "team_dashboard_dark_web_insights_notify_new_incidents_many"
          },
          TEAM_NEW_LABEL: "team_new_label"
        },
        tl = ({ count: e, labelAndTooltip: t, primaryColor: a, secondaryColor: n }) => {
          const { translate: s } = (0, g.Z)();
          return (0, l.tZ)(
            c.Ejs,
            { gap: "6px", sx: { margin: "16px 0" } },
            (0, l.tZ)(c.X6q, { size: "x-small", color: a, sx: { width: "44px" } }, e),
            (0, l.tZ)(
              c.ua7,
              { sx: { fontSize: 2, maxWidth: "180px" }, placement: "top", content: s(t.TOOLTIP) },
              (0, l.tZ)(
                c.nvN,
                {
                  "aria-label": s(t.LABEL),
                  size: "small",
                  sx: { minWidth: "calc(100% - 70px)", width: "min-content" },
                  color: null != n ? n : a
                },
                s(t.LABEL)
              ),
              (0, l.tZ)(c.uMt, { size: 13, tabIndex: 0, color: null != n ? n : a })
            )
          );
        },
        al = ({ children: e }) =>
          (0, l.tZ)(
            c.Zbd,
            {
              sx: {
                minHeight: "418px",
                width: "282px",
                backgroundColor: "ds.container.agnostic.neutral.supershy",
                borderColor: "ds.border.neutral.quiet.idle"
              }
            },
            (0, l.tZ)(
              c.Ejs,
              {
                sx: { minHeight: "418px", padding: "20px" },
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "start"
              },
              e
            )
          ),
        nl = ({ text: e, subtext: t, imgSrc: a }) =>
          (0, l.tZ)(
            n.Fragment,
            null,
            (0, l.tZ)("img", { src: a }),
            (0, l.tZ)(c.nvN, { size: "medium", bold: !0, sx: { marginBottom: "8px" } }, e),
            (0, l.tZ)(c.nvN, { size: "small", color: c.colors.grey00 }, t)
          ),
        sl = ({ domain: e }) =>
          (0, l.tZ)(
            c.nvN,
            {
              size: "x-small",
              bold: !0,
              sx: {
                padding: "4px 8px",
                backgroundColor: `${c.colors.dashGreen06}`,
                borderRadius: "4px",
                width: "fit-content",
                height: "24px",
                marginBottom: "34px"
              }
            },
            e
          ),
        il = ({ newLeaksCount: e, newLeaksAffectedEmailCount: t }) => {
          const { translate: a } = (0, g.Z)(),
            { setHasNewBreaches: s } = ze();
          (0, n.useEffect)(() => {
            e > 0 && s(!0);
          }, [e, s]);
          const i = e > 1 ? el.NEW_INCIDENTS_NOTIFICATION_MSG.MANY : el.NEW_INCIDENTS_NOTIFICATION_MSG.ONE;
          return e > 0
            ? (0, l.tZ)(
                c.Ejs,
                {
                  flexDirection: "row",
                  sx: { backgroundColor: c.colors.pink05, borderRadius: "4px", padding: "5px 8px", marginTop: "25px" }
                },
                (0, l.tZ)(
                  c.nvN,
                  { size: "small", color: c.colors.red00, sx: { width: "calc(100% - 5px)" } },
                  a(i, { numIncidents: e, count: t })
                ),
                (0, l.tZ)(c.P_k, { dot: !0, ariaLabel: a(el.TEAM_NEW_LABEL) })
              )
            : null;
        },
        ol = ({ domainInfo: e }) => {
          const t = e.leaksCount,
            a = e.emailsImpactedCount,
            s = e.emailsImpactedCount - e.teamMembersImpactedCount;
          return (0, l.tZ)(
            n.Fragment,
            null,
            (0, l.tZ)(tl, {
              count: t,
              labelAndTooltip: el.SECURITY_INCIDENTS,
              primaryColor: c.colors.dashGreen00,
              secondaryColor: c.colors.dashGreen01
            }),
            (0, l.tZ)(tl, {
              count: a,
              labelAndTooltip: el.EMAILS_AFFECTED,
              primaryColor: c.colors.dashGreen00,
              secondaryColor: c.colors.dashGreen01
            }),
            (0, l.tZ)(tl, {
              count: s,
              labelAndTooltip: el.SUGGESTED_INVITATION,
              primaryColor: c.colors.dashGreen00,
              secondaryColor: c.colors.dashGreen01
            }),
            (0, l.tZ)(il, { newLeaksCount: e.newLeaksCount, newLeaksAffectedEmailCount: e.newLeaksAffectedEmailCount })
          );
        },
        rl = ({ domainName: e, domainInfo: t }) => {
          const { translate: a } = (0, g.Z)(),
            { routes: s } = (0, Ri.Xo)();
          return (0, l.tZ)(
            n.Fragment,
            null,
            (0, l.tZ)(
              "section",
              { sx: { width: "100%" } },
              (0, l.tZ)(sl, { domain: e }),
              t.leaksCount > 0
                ? (0, l.tZ)(ol, { domainInfo: t })
                : (0, l.tZ)(nl, {
                    imgSrc:
                      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTIiIGhlaWdodD0iNTIiIHZpZXdCb3g9IjAgMCA1MiA1MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzMxMTNfMTkwOTY0KSI+CjxyZWN0IHdpZHRoPSI1MiIgaGVpZ2h0PSI1MiIgcng9IjI2IiBmaWxsPSIjRDlERkUwIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjAuNzIxOSAxMy40NzMzQzE0LjI4MjEgMTQuMjgxNiA5LjcxNjc2IDIwLjE1NzMgMTAuNTI1IDI2LjU5NzJMMTEuMTk1MyAzMS45MzgxTDcuOTg0NDUgMzIuMzQxMUM2Ljg4ODQ4IDMyLjQ3ODYgNi4xMTE1MiAzMy40Nzg2IDYuMjQ5MDggMzQuNTc0Nkw5LjE2NTA4IDU3LjgwOEM5LjMwMjYzIDU4LjkwNCAxMC4zMDI2IDU5LjY4MDkgMTEuMzk4NiA1OS41NDM0TDQwLjI5OTIgNTUuOTE2MUM0MS4zOTUyIDU1Ljc3ODYgNDIuMTcyMSA1NC43Nzg2IDQyLjAzNDYgNTMuNjgyNkwzOS4xMTg2IDMwLjQ0OTJDMzguOTgxIDI5LjM1MzIgMzcuOTgxIDI4LjU3NjIgMzYuODg1MSAyOC43MTM4TDM0LjUxNjEgMjkuMDExMUwzMy44NDU4IDIzLjY3MDJDMzMuMDM3NiAxNy4yMzA0IDI3LjE2MTggMTIuNjY1MSAyMC43MjE5IDEzLjQ3MzNaTTE0LjE3NjUgMjYuNjYxTDE0Ljc4MjQgMzEuNDg3OUwzMC45Mjc1IDI5LjQ2MTVMMzAuMzIxNyAyNC42MzQ2QzI5Ljc2MjIgMjAuMTc2MiAyNS42OTQzIDE3LjAxNTYgMjEuMjM2IDE3LjU3NTJDMTYuNzc3NiAxOC4xMzQ4IDEzLjYxNyAyMi4yMDI2IDE0LjE3NjUgMjYuNjYxWk00Ni43NzUzIDE4LjY1ODZMNDAuNDg1NiAyMi42MTkzTDQxLjkxMTEgMjQuODgyOUw0OC4yMDA3IDIwLjkyMjJMNDYuNzc1MyAxOC42NTg2Wk00My4xODE2IDI3LjI3NjRMNDcuMDcxNyAyNy4zNjhMNDcuMDEwMyAyOS45Nzc3TDQzLjEyMDIgMjkuODg2MUw0My4xODE2IDI3LjI3NjRaTTM3LjQ1NiAxNS43NDIyTDM2LjA3NyAyMC42Nzc3TDM4LjgxNzQgMjEuNDQzNEw0MC4xOTY0IDE2LjUwNzlMMzcuNDU2IDE1Ljc0MjJaIiBmaWxsPSIjMEUzNTNEIi8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMzExM18xOTA5NjQiPgo8cmVjdCB3aWR0aD0iNTIiIGhlaWdodD0iNTIiIHJ4PSIyNiIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K",
                    text: a(el.INCIDENT_FREE_MSG, { domainName: e }),
                    subtext: a(el.INCIDENT_FREE_SUBTEXT)
                  })
            ),
            (0, l.tZ)(
              i.rU,
              {
                to: s.teamDarkWebInsightsRoutePath,
                sx: {
                  textDecoration: "none",
                  color: `${c.colors.midGreen00}`,
                  marginBottom: "16px",
                  "&:hover": { textDecoration: "underline" }
                },
                onClick: () => {
                  (0, P.Kz)(new o.UserOpenDomainDarkWebMonitoringEvent({ accessPath: o.AccessPath.MainDashboardButton, isFirstVisit: !1 }));
                }
              },
              a(el.RETURNING_USER_CTA)
            )
          );
        },
        ll = ({ domainName: e }) => {
          const { translate: t } = (0, g.Z)();
          return (0, l.tZ)(
            n.Fragment,
            null,
            (0, l.tZ)(
              "section",
              { sx: { width: "100%" } },
              (0, l.tZ)(sl, { domain: e }),
              (0, l.tZ)(nl, {
                imgSrc:
                  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTMiIGhlaWdodD0iNTMiIHZpZXdCb3g9IjAgMCA1MyA1MyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjUzIiBoZWlnaHQ9IjUzIiByeD0iMjYuNSIgZmlsbD0iI0Q5REZFMCIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTI2LjgwMDQgMTMuNzUzN0wyNi45NjE2IDEzLjEwOTFDMjcuNjA2MiAxMC42MTEzIDI5Ljg2MjIgOSAzMi4zNjAxIDlDMzUuMzQxMyA5IDM4IDExLjQxNzMgMzggMTQuNDc4OUMzOCAxNi45NzY4IDM2LjMwNzkgMTkuMDcxNiAzMy45NzEyIDE5LjcxNjRWMjAuNzY0SDMwLjc0ODJWMTguODMwM0MzMC43NDgyIDE3Ljc4MjcgMzEuNTU0IDE2LjgxNiAzMi42ODE5IDE2LjczNTRDMzMuODA5OSAxNi41NzQyIDM0Ljc3NjggMTUuNjg3OSAzNC43NzY4IDE0LjQ3OTRDMzQuNzc2OCAxMy4xOTAyIDMzLjY0ODkgMTIuMjIzMyAzMi4zNTk1IDEyLjIyMzNDMzEuMjMxNiAxMi4yMjMzIDMwLjM0NTMgMTIuODY3OSAzMC4wMjI5IDEzLjkxNTRMMjkuODYxNyAxNC41NTk5TDI2LjggMTMuNzU0MkwyNi44MDA0IDEzLjc1MzdaTTM0LjM3NDQgMjMuNzQ1NUMzNC4zNzQ0IDI0Ljg1OCAzMy40NzI2IDI1Ljc2IDMyLjM2MDEgMjUuNzZDMzEuMjQ3NiAyNS43NiAzMC4zNDU2IDI0Ljg1OCAzMC4zNDU2IDIzLjc0NTVDMzAuMzQ1NiAyMi42MzMgMzEuMjQ3NiAyMS43MzEzIDMyLjM2MDEgMjEuNzMxM0MzMy40NzI2IDIxLjczMTMgMzQuMzc0NCAyMi42MzMgMzQuMzc0NCAyMy43NDU1Wk0zNi44NzkxIDM0LjYzMzlDMzYuODc5MSAzMi42MTggMzYuNDE5MyAzMC42ODU5IDM1LjU0MTMgMjguODhMMzEuNjk1OCAyOC44OEwzMi4xOTczIDI5LjcxOTlDMzIuODI0MiAzMC43Njk5IDMzLjIwMDQgMzEuOTAzOSAzMy40MDk0IDMzLjA3OTlMMjkuMzEyOSAzMy4wNzk5QzI5LjI3MTIgMzAuOTggMjguOTc4NCAyOC44OCAyOC41MTg2IDI2LjgyMTlDMjcuNTk4OSAyMy4xNjgxIDI1LjkyNjkgMjEuMzIgMjMuNTAyNCAyMS4zMkMxNi4xMDMyIDIxLjI3OCAxMC4wNDE5IDI3LjI4NDEgMTAuMDAwMiAzNC42NzU5QzkuOTU4NDIgNDIuMDY3NyAxNS44OTQzIDQ4LjE1NzkgMjMuMjkzMyA0OC4xOTk4SDIzLjYyNzhDMzEuMDI2NyA0OC4xMTU4IDM2Ljk2MjUgNDIuMDY3OSAzNi44NzkxIDM0LjYzMzlaTTIxLjAzNjEgMzYuNDRMMjUuOTY4NiAzNi40NEMyNS43NTk1IDQxLjIyNzkgMjQuNzU2NSA0NC44Mzk5IDIzLjUwMjMgNDQuODM5OUMyMi4yNDgyIDQ0LjgzOTkgMjEuMjQ1MSA0MS4yMjc5IDIxLjAzNjEgMzYuNDRaTTIzLjUwMjMgMjQuNjgwM0MyNC43NTY1IDI0LjY4MDMgMjUuNzU5NSAyOC4zMzQyIDI1Ljk2ODYgMzMuMDgwMkgyMS4wMzYxQzIxLjI0NTIgMjguMzM0MiAyMi4yNDgyIDI0LjY4MDMgMjMuNTAyMyAyNC42ODAzWk0xNy42OTE3IDMzLjA4MDJMMTMuNjM2OSAzMy4wODAzQzE0LjA5NjcgMzAuMTQwMSAxNS44OTQxIDI3LjUzNjIgMTguNDg2IDI2LjAyNDJMMTguNzM2OCAyNS44OTgyQzE4LjY1MzEgMjYuMTkyMyAxOC41Njk3IDI2LjQ4NjIgMTguNDg2IDI2LjgyMjJDMTguMDI2MiAyOC44ODAzIDE3LjczMzQgMzAuOTgwMyAxNy42OTE3IDMzLjA4MDJaTTE4LjQ4NiA0Mi42OTgyQzE4LjU2OTcgNDMuMDM0MiAxOC42NTMxIDQzLjMyOCAxOC43MzY4IDQzLjYyMjFMMTguNzM2OCA0My42MjIyQzE3LjEwNjUgNDIuNzQwMSAxNS43MjcgNDEuNDM4MiAxNC44NDkgMzkuODAwMkMxNC4yMjIxIDM4Ljc1MDIgMTMuODQ1OSAzNy42MTYxIDEzLjYzNjkgMzYuNDQwMUgxNy42OTE3QzE3LjczMzQgMzguNTQwMSAxOC4wMjYyIDQwLjY0MDEgMTguNDg2IDQyLjY5ODJaTTI5LjMxMjggMzYuNDQwMUwzMy4zNjc2IDM2LjQ0QzMyLjkwNzggMzkuNDIyMSAzMS4xMTA0IDQxLjk4NDEgMjguNTE4NCA0My40OTYxTDI4LjI2NzcgNDMuNjIyMUMyOC4zNTE0IDQzLjMyOCAyOC40MzQ4IDQzLjAzNDEgMjguNTE4NCA0Mi42OTgxQzI4Ljk3ODMgNDAuNjQgMjkuMjcxMSAzOC41NCAyOS4zMTI4IDM2LjQ0MDFaIiBmaWxsPSIjMEUzNTNEIi8+Cjwvc3ZnPgo=",
                text: t(el.UNVERIFIED_MSG),
                subtext: t(el.UNVERIFIED_SUBTEXT)
              })
            ),
            (0, l.tZ)(
              c.rUS,
              {
                sx: { textDecoration: "none", fontWeight: "lighter", marginBottom: "16px", "&:hover": { textDecoration: "underline" } },
                color: c.colors.midGreen00,
                target: "_blank",
                rel: "noopener noreferrer",
                href: Jr,
                onClick: () => {
                  (0, P.Kz)(new o.UserOpenHelpCenterEvent({ helpCenterArticleCta: o.HelpCenterArticleCta.ViewDomainVerificationGuide }));
                }
              },
              t(el.RETURNING_USER_VIEW_DOMAIN_GUIDE_CTA)
            )
          );
        },
        cl = ({ domainName: e }) => {
          const { translate: t } = (0, g.Z)();
          return (0, l.tZ)(
            n.Fragment,
            null,
            (0, l.tZ)(sl, { domain: e }),
            (0, l.tZ)(c.HoD, { size: 44, color: c.colors.dashGreen00, sx: { alignSelf: "center" } }),
            (0, l.tZ)(
              c.nvN,
              { size: "small", color: c.colors.grey00, sx: { marginBottom: "3em", overflow: "hidden", width: "-webkit-fill-available" } },
              t(el.GENERATING_INSIGHTS_MESSAGE)
            )
          );
        },
        dl = ({ verifiedOrPendingDomain: e, dwiSummaryResponse: t }) => {
          const { translate: a } = (0, g.Z)(),
            n = e.status === mr.p.valid,
            s = e.name;
          return (0, l.tZ)(
            al,
            null,
            (0, l.tZ)(l.X6, { as: "h5", textStyle: "ds.title.section.medium", color: "ds.text.neutral.catchy" }, a(el.HEADING)),
            n
              ? t?.success
                ? (0, l.tZ)(rl, { domainName: s, domainInfo: t.data[s] })
                : (0, l.tZ)(cl, { domainName: s })
              : (0, l.tZ)(ll, { domainName: s })
          );
        },
        ul = a.p + "daa928a30146cfbef943.png";
      var _l, ml;
      const pl = {
          TEAM_NEW_LABEL: "team_new_label",
          HEADING: "team_dashboard_dark_web_insights_discovery_heading",
          SUBTEXT: "team_dashboard_dark_web_insights_discovery_subtext",
          ALTERNATE_HEADING: "team_dashboard_dark_web_insights_discovery_heading_alternate",
          ALTERNATE_SUBTEXT: "team_dashboard_dark_web_insights_discovery_subtext_alternate",
          SECURITY_INCIDENTS: {
            LABEL: "team_dashboard_dark_web_insights_security_incidents",
            TOOLTIP: "team_dashboard_dark_web_insights_security_incidents_tooltip"
          },
          EMAILS_AFFECTED: {
            LABEL: "team_dashboard_dark_web_insights_emails_affected",
            TOOLTIP: "team_dashboard_dark_web_insights_emails_affected_tooltip"
          },
          GET_STARTED_CTA: "team_dashboard_dark_web_insights_discovery_get_started_cta"
        },
        gl = () => {
          const { translate: e } = (0, g.Z)(),
            { routes: t } = (0, Ri.Xo)(),
            a = (0, i.k6)(),
            { unseen: n } = (0, we.m)(Me.O.TacDarkWebInsightsNewBadge);
          return (0, l.tZ)(
            l.zx,
            {
              key: "primary",
              onClick: () => {
                (0, P.Kz)(new o.UserOpenDomainDarkWebMonitoringEvent({ accessPath: o.AccessPath.MainDashboardButton, isFirstVisit: n })),
                  a.push(t.teamDarkWebInsightsRoutePath);
              }
            },
            e(pl.GET_STARTED_CTA)
          );
        },
        yl = ({ data: e, companyName: t }) => {
          const { translate: a } = (0, g.Z)(),
            [n] = Object.keys(e),
            s = e[n];
          return (0, l.tZ)(
            al,
            null,
            (0, l.tZ)(l.Ct, { layout: "labelOnly", label: a(pl.TEAM_NEW_LABEL), mood: "brand" }),
            (0, l.tZ)(
              l.X6,
              {
                textStyle: "ds.title.section.medium",
                color: "ds.text.neutral.catchy",
                as: "h3",
                sx: { marginTop: "1em", width: "100%", overflow: "hidden" }
              },
              a(pl.HEADING, { companyName: t })
            ),
            (0, l.tZ)(l.nv, { textStyle: "ds.body.standard.regular", color: "ds.text.neutral.standard" }, a(pl.SUBTEXT)),
            (0, l.tZ)(
              "div",
              { sx: { backgroundColor: `${c.colors.dashGreen06}`, padding: "2px 14px", width: "100%", borderRadius: "10px" } },
              (0, l.tZ)(tl, { count: s.leaksCount, labelAndTooltip: pl.SECURITY_INCIDENTS, primaryColor: c.colors.dashGreen01 }),
              (0, l.tZ)(tl, { count: s.emailsImpactedCount, labelAndTooltip: pl.EMAILS_AFFECTED, primaryColor: c.colors.dashGreen01 })
            ),
            _l || (_l = (0, l.tZ)(gl, null))
          );
        },
        hl = ({ companyName: e }) => {
          const { translate: t } = (0, g.Z)();
          return (0, l.tZ)(
            al,
            null,
            (0, l.tZ)(
              "div",
              { sx: { alignSelf: "end" } },
              (0, l.tZ)(l.Ct, { layout: "labelOnly", label: t(pl.TEAM_NEW_LABEL), mood: "brand" })
            ),
            (0, l.tZ)("img", {
              sx: {
                backgroundColor: `${c.colors.midGreen05}`,
                height: "122px",
                width: "122px",
                borderRadius: "50%",
                backgroundImage: `url(${ul})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPositionX: "60%"
              }
            }),
            (0, l.tZ)(
              l.X6,
              { textStyle: "ds.title.section.medium", color: "ds.text.neutral.catchy", as: "h3", sx: { width: "100%" } },
              t(pl.ALTERNATE_HEADING, { companyName: e })
            ),
            (0, l.tZ)(l.nv, { textStyle: "ds.body.standard.regular", color: "ds.text.neutral.standard" }, t(pl.ALTERNATE_SUBTEXT)),
            ml || (ml = (0, l.tZ)(gl, null))
          );
        },
        bl = ({ dwiSummaryResponse: e }) => {
          var t;
          const { spaceDetails: a } = (0, lr.fV)(),
            n = null != (t = a?.teamName) ? t : "-";
          return e?.success ? (0, l.tZ)(yl, { data: e.data, companyName: n }) : (0, l.tZ)(hl, { companyName: n });
        };
      var xl, Sl, vl, fl;
      const Cl = { marginTop: "16px", "&:hover": { cursor: "pointer", borderWidth: "2px", borderColor: "ds.border.brand.standard.hover" } },
        Zl = { width: "100%", padding: "20px 16px" },
        El = { padding: "8px", backgroundColor: "ds.container.expressive.brand.quiet.idle", borderRadius: "8px", margin: "auto" },
        Dl = ({ isOpen: e, plan: t, setModalState: a }) => {
          const { translate: n } = (0, g.Z)(),
            s = (0, L.B)();
          return (0, B.tZ)(
            c.VqE,
            { isOpen: e, ariaDescribedby: "dialogContent", onClose: () => {} },
            (0, B.tZ)(c.$N8, { title: n("team_payment_method_dialog_title") }),
            (0, B.tZ)(
              c.a7O,
              null,
              (0, B.tZ)(
                c.Zbd,
                {
                  sx: Cl,
                  onClick: () => {
                    const e = `${ce.ub}?plan=${t}&subCode=${s?.subscriptionCode}`;
                    (0, j.Yo)(e);
                  }
                },
                (0, B.tZ)(
                  c.T5p,
                  { gap: "12px", gridTemplateColumns: "40px 480px 60px", sx: Zl },
                  xl ||
                    (xl = (0, B.tZ)(
                      c.dDn,
                      { sx: El },
                      (0, B.tZ)(l.JO, { name: "ItemPaymentOutlined", size: "large", color: "ds.text.brand.standard" })
                    )),
                  (0, B.tZ)(
                    c.dDn,
                    { sx: { margin: "auto 0" } },
                    (0, B.tZ)(c.nvN, { color: "ds.text.neutral.standard", bold: !0 }, n("team_payment_method_dialog_credit_card"))
                  ),
                  (0, B.tZ)(
                    c.dDn,
                    { sx: { margin: "auto" } },
                    Sl ||
                      (Sl = (0, B.tZ)(
                        l.zx,
                        { mood: "brand", intensity: "supershy", size: "large" },
                        (0, B.tZ)(l.JO, { name: "ArrowRightOutlined", size: "medium", color: "ds.text.neutral.standard" })
                      ))
                  )
                )
              ),
              (0, B.tZ)(
                c.Zbd,
                {
                  sx: Cl,
                  onClick: () => {
                    (0, j.Yo)(
                      "https://support.dashlane.com/hc/requests/new?req_type=dashlane_for_business&topic=upgrade_to_dashlane_business"
                    );
                  }
                },
                (0, B.tZ)(
                  c.T5p,
                  { gap: "12px", gridTemplateColumns: "40px 480px 60px", sx: Zl },
                  vl ||
                    (vl = (0, B.tZ)(
                      c.dDn,
                      { sx: El },
                      (0, B.tZ)(l.JO, { name: "ItemTaxNumberOutlined", size: "large", color: "ds.text.brand.standard" })
                    )),
                  (0, B.tZ)(
                    c.dDn,
                    null,
                    (0, B.tZ)(c.nvN, { color: "ds.text.neutral.standard", bold: !0 }, n("team_account_invoice_payment")),
                    (0, B.tZ)(
                      c.nvN,
                      { color: "ds.text.neutral.quiet", size: "small", sx: { marginTop: "4px" } },
                      n("team_payment_method_dialog_support_team")
                    )
                  ),
                  (0, B.tZ)(
                    c.dDn,
                    { sx: { margin: "auto" } },
                    fl ||
                      (fl = (0, B.tZ)(l.zx, {
                        mood: "brand",
                        intensity: "supershy",
                        size: "large",
                        layout: "iconOnly",
                        icon: (0, B.tZ)(l.JO, { name: "ArrowRightOutlined", size: "medium", color: "ds.text.neutral.standard" })
                      }))
                  )
                )
              )
            ),
            (0, B.tZ)(
              c.Ejs,
              { sx: { justifyContent: "flex-end" } },
              (0, B.tZ)(
                l.zx,
                {
                  intensity: "quiet",
                  mood: "neutral",
                  onClick: () => {
                    a(Al.PURCHASE);
                  }
                },
                n("_common_action_back")
              )
            )
          );
        },
        Tl = ({ isOpen: e, planCopy: t, setModalState: a, handleClose: s }) => {
          const { translate: i } = (0, g.Z)();
          return (
            (0, n.useEffect)(() => {
              (0, P.Nc)(o.PageView.TacAccountTrialEndModal);
            }, []),
            (0, B.tZ)(
              c.VqE,
              {
                isOpen: e,
                ariaDescribedby: "dialogContent",
                closeIconName: i("_common_dialog_dismiss_button"),
                onClose: () => {
                  (0, P.Kz)(new o.UserCallToActionEvent({ callToActionList: [o.CallToAction.AllOffers], hasChosenNoAction: !0 })), s();
                }
              },
              (0, B.tZ)(c.$N8, { title: i("team_dashboard_purchase_dialog_title", { plan: t }) }),
              (0, B.tZ)(
                c.a7O,
                null,
                (0, B.tZ)(c.nvN, { color: "ds.text.neutral.standard" }, i("team_dashboard_purchase_dialog_paragraph_1")),
                (0, B.tZ)(
                  c.nvN,
                  { color: "ds.text.neutral.standard", sx: { marginTop: "8px" } },
                  i("team_dashboard_purchase_dialog_paragraph_2")
                ),
                (0, B.tZ)(
                  "div",
                  { sx: { marginTop: "24px" } },
                  (0, B.tZ)(l.ke, {
                    size: "large",
                    mood: "warning",
                    title: i("team_dashboard_purchase_dialog_infobox_copy_1"),
                    description: i("team_dashboard_purchase_dialog_infobox_copy_2")
                  })
                )
              ),
              (0, B.tZ)(
                c.Ejs,
                { sx: { justifyContent: "flex-end" } },
                (0, B.tZ)(
                  l.zx,
                  {
                    mood: "brand",
                    onClick: () => {
                      (0, P.Kz)(
                        new o.UserCallToActionEvent({
                          callToActionList: [o.CallToAction.AllOffers],
                          chosenAction: o.CallToAction.AllOffers,
                          hasChosenNoAction: !1
                        })
                      ),
                        a(Al.PAYMENT);
                    }
                  },
                  i("team_account_teamplan_plan_buy_dashlane")
                )
              )
            )
          );
        };
      var Nl, Ml, Il;
      const wl = { PAGE: { minHeight: "100%", width: "min-content", padding: "32px 48px" } },
        kl = {
          seats: { pending: 0, provisioned: 0, used: 0 },
          passwordHealthHistory: [],
          passwordHealth: { compromised: 0, passwords: 0, reused: 0, safe: 0, securityIndex: 0, weak: 0 }
        };
      let Al = (function (e) {
        return (e[(e.PURCHASE = 0)] = "PURCHASE"), (e[(e.PAYMENT = 1)] = "PAYMENT"), e;
      })({});
      const Ol = ({ supportHeader: e, children: t }) => {
        const { translate: a } = (0, g.Z)();
        return (0, l.tZ)(
          c.Zbd,
          {
            sx: {
              display: "flex",
              gap: "8px",
              flexDirection: "column",
              padding: "32px 24px",
              background: "ds.container.agnostic.neutral.supershy"
            }
          },
          (0, l.tZ)(
            l.X6,
            { as: "h2", textStyle: "ds.title.supporting.small", color: "ds.text.neutral.quiet", sx: { marginBottom: "8px" } },
            null != e ? e : a("webapp_tac_infocard_title")
          ),
          t
        );
      };
      var Ll;
      const zl = {
          display: "flex",
          gap: "4px",
          padding: "5px 0px",
          alignItems: "center",
          color: "ds.text.brand.standard",
          backgroundColor: "ds.background.default",
          cursor: "pointer",
          marginTop: "5px"
        },
        jl = ({ internalAction: e, linkText: t }) =>
          (0, l.tZ)(
            "button",
            { onClick: e, sx: zl },
            (0, l.tZ)(l.nv, { as: "span", sx: { fontWeight: "500" } }, t),
            Ll || (Ll = (0, l.tZ)(l.JO, { name: "ArrowRightOutlined", size: "small", color: "ds.text.brand.standard" }))
          );
      var Rl;
      const Pl = ({ children: e, href: t, onClick: a, ...n }) =>
        (0, l.tZ)(
          l.nv,
          {
            as: "a",
            onClick: a,
            href: t,
            rel: "noopener noreferrer",
            target: "_blank",
            color: "ds.text.brand.quiet",
            sx: {
              display: "inline-flex",
              textDecoration: "underline",
              flexDirection: "row",
              ":hover": { textDecoration: "none", color: "ds.text.brand.standard" },
              ":hover + svg": { fill: "ds.text.brand.standard" }
            },
            ...n
          },
          e,
          Rl || (Rl = (0, l.tZ)(l.JO, { name: "ActionOpenExternalLinkOutlined", color: "ds.text.brand.quiet" }))
        );
      let Ul = (function (e) {
        return (e[(e.ExternalLink = 0)] = "ExternalLink"), (e[(e.InternalLink = 1)] = "InternalLink"), e;
      })({});
      const Bl = ({ heading: e, description: t, linkText: a, supportHeading: s, linkProps: i }) =>
          (0, l.tZ)(
            Ol,
            { supportHeader: s },
            (0, l.tZ)(l.nv, { sx: { mb: "8px" }, color: "ds.text.neutral.catchy", textStyle: "ds.title.block.medium", as: "h3" }, e),
            (0, n.isValidElement)(t)
              ? t
              : (0, l.tZ)(
                  l.nv,
                  {
                    color: "ds.text.neutral.standard",
                    textStyle: "ds.body.standard.regular",
                    sx: { mb: a && i.linkType === Ul.ExternalLink && i.linkHref ? "24px" : 0 }
                  },
                  t
                ),
            i.linkType === Ul.ExternalLink && i.linkHref ? (0, l.tZ)(Pl, { href: i.linkHref }, a) : null,
            i.linkType === Ul.InternalLink ? (0, l.tZ)(jl, { linkText: a, internalAction: i.internalAction }) : null
          ),
        Gl = () => {
          const { translate: e } = (0, g.Z)();
          return (0, l.tZ)(
            "div",
            null,
            (0, l.tZ)(
              Ol,
              null,
              (0, l.tZ)(l.X6, { as: "h3", textStyle: "ds.title.block.medium" }, e("team_breach_report_need_help")),
              (0, l.tZ)(
                l.nv,
                { textStyle: "ds.body.standard.regular", color: "ds.text.neutral.quiet" },
                e("team_dark_web_insights_need_help_description")
              ),
              (0, l.tZ)(
                Pl,
                {
                  href: "https://support.dashlane.com/hc/articles/5015658490514",
                  onClick: () => {
                    (0, P.Kz)(new o.UserOpenHelpCenterEvent({ helpCenterArticleCta: o.HelpCenterArticleCta.LearnAboutDarkWebInsights }));
                  }
                },
                e("team_dark_web_insights_learn_more_txt")
              ),
              (0, l.tZ)(
                Pl,
                {
                  href: Jr,
                  onClick: () => {
                    (0, P.Kz)(new o.UserOpenHelpCenterEvent({ helpCenterArticleCta: o.HelpCenterArticleCta.LearnAboutDomainVerification }));
                  }
                },
                e("team_breach_report_learn_domain_verification_txt")
              )
            )
          );
        },
        Fl = ({
          registerDomain: e = () => {},
          disabled: t,
          registrationError: a,
          clearRegistrationErrors: s = () => {},
          domainLoadError: i
        }) => {
          const { translate: o } = (0, g.Z)(),
            [r, l] = n.useState(""),
            d = i ? "" : o("team_settings_domain_url_placeholder");
          return n.createElement(
            n.Fragment,
            null,
            n.createElement(
              "div",
              { className: "domainUrlInput--VQjVVbbN2d" },
              n.createElement(c.oil, {
                value: r,
                placeholder: d,
                fullWidth: !0,
                feedbackText: a,
                feedbackType: a ? "error" : void 0,
                onChange: (e) => {
                  a && s(), l(e.target.value);
                },
                disabled: !!i || t
              }),
              i && n.createElement("p", { className: "domainLoadErrorText--WEJL2Ne0Pt" }, i)
            ),
            n.createElement(
              c.zxk,
              {
                type: "button",
                className: A()("domainUrlButton--lFqlfJ3Gzv", { "domainLoadError--ajAHmgDUO9": i }),
                disabled: t,
                nature: "secondary",
                onClick: () => e(r)
              },
              o("team_settings_domain_button_add")
            )
          );
        };
      var ql = a(418402),
        $l = a.n(ql);
      const Vl = ({ domain: e, onConfirm: t, onDismiss: a }) => {
          const { translate: s } = (0, g.Z)(),
            [i, o] = (0, n.useState)(!1),
            r = (0, n.useRef)(!1);
          return (
            (0, n.useEffect)(
              () => () => {
                r.current = !0;
              },
              [r]
            ),
            (0, B.tZ)(
              q.o,
              {
                isOpen: !0,
                onRequestClose: a,
                footer: (0, B.tZ)(c.cNS, {
                  primaryButtonTitle: s("team_settings_domain_deactivate_button_remove"),
                  primaryButtonOnClick: async () => {
                    o(!0), await t(), r.current || (o(!1), a());
                  },
                  primaryButtonProps: { disabled: i },
                  secondaryButtonTitle: s("team_settings_domain_deactivate_button_cancel"),
                  secondaryButtonOnClick: a,
                  intent: "primary"
                }),
                title: s("team_settings_domain_deactivate_title")
              },
              (0, B.tZ)("p", null, s.markup("team_settings_domain_deactivate_description_markup", { domainUrl: e.name }))
            )
          );
        },
        Wl = ({ domain: e, deactivateDomain: t, isDisabled: a, disabledTooltipText: s }) => {
          const [i, o] = (0, n.useState)(!1);
          return (0, B.tZ)(
            n.Fragment,
            null,
            i ? (0, B.tZ)(Vl, { domain: e, onConfirm: t, onDismiss: () => o(!1) }) : null,
            (0, B.tZ)(
              "div",
              {
                className: "deactivateTrashcan--nLkrRLE9CS",
                onClick: () => {
                  a || o(!0);
                }
              },
              (0, B.tZ)(
                c.ua7,
                { passThrough: !a, placement: "top", content: null != s ? s : "", sx: { maxWidth: "180px" } },
                (0, B.tZ)(c.XHJ, { disabled: a, size: 25, color: $l()["--dash-green-00"] })
              )
            )
          );
        },
        Hl = "column--QmWD9Od6Ul",
        Kl = ({ label: e, centerLabel: t, labelHelper: a, children: s }) =>
          n.createElement(
            "div",
            { className: "row--b0sY7KH6EJ" },
            n.createElement(
              "div",
              { className: Hl },
              n.createElement("div", { className: A()("label--IAVg4TIabV", { "centerLabel--kRDzb_3UrS": t }) }, e),
              a ? n.createElement("div", { className: "labelHelper--ZvFzwTua9S" }, a) : null
            ),
            n.createElement("div", { className: Hl }, s)
          );
      let Yl = (function (e) {
          return (
            (e[(e.ClaimDomain = 0)] = "ClaimDomain"),
            (e[(e.VerifyDomain = 1)] = "VerifyDomain"),
            (e[(e.SSOConnector = 2)] = "SSOConnector"),
            (e[(e.EnableSSO = 3)] = "EnableSSO"),
            e
          );
        })({}),
        Ql = (function (e) {
          return (
            (e[(e.SSOConnector = 0)] = "SSOConnector"), (e[(e.ConfigureIDP = 1)] = "ConfigureIDP"), (e[(e.EnableSSO = 2)] = "EnableSSO"), e
          );
        })({}),
        Xl = (function (e) {
          return (e[(e.dismiss = 0)] = "dismiss"), (e[(e.action = 1)] = "action"), e;
        })({});
      const Jl = "team_settings_domain_deactivate_button_tooltip_error",
        ec = ({ currentStep: e, deactivateDomain: t, domain: a, isDisabled: s, setCurrentSteps: i, verifyDomain: o }) => {
          var r;
          const [l, c] = n.useState(!1),
            { translate: d } = (0, g.Z)();
          return n.createElement(
            "div",
            { className: "domainContainer--uTWD0PQykR", key: a.id },
            (() => {
              if (!a) return null;
              switch (e) {
                case sc.Verify:
                case sc.VerifyFailed:
                  return n.createElement(
                    n.Fragment,
                    null,
                    n.createElement(lc, { domain: a, verifyDomain: () => c(!0), domainStep: e }),
                    n.createElement(Wl, { domain: a, deactivateDomain: () => t(a), isDisabled: s, disabledTooltipText: d(Jl) })
                  );
                case sc.Complete:
                  return n.createElement(
                    n.Fragment,
                    null,
                    r || (r = n.createElement(uc, { domain: a })),
                    n.createElement(Wl, { domain: a, deactivateDomain: () => t(a), isDisabled: s, disabledTooltipText: d(Jl) })
                  );
                default:
                  return null;
              }
            })(),
            (() => {
              if (!a || !l) return null;
              switch (e) {
                case sc.Verify:
                  return n.createElement(pc, { domainName: a.name, onConfirm: () => o(a), onDismiss: () => c(!1) });
                case sc.VerifyFailed:
                  return n.createElement(gc, {
                    onDismiss: () => {
                      i((e) => ({ ...e, [a.id]: sc.Verify })), c(!1);
                    }
                  });
                default:
                  return null;
              }
            })()
          );
        },
        tc = a(894017),
        ac = "team_settings_domain_register_invalid_error",
        nc = {
          INVALID_PUBLIC_DOMAIN: "team_settings_domain_register_public_error",
          DOMAIN_CONTAINS_EXISTING_NONTEAM_USERS: "team_settings_domain_register_contact_support"
        };
      let sc = (function (e) {
        return (
          (e[(e.Register = 0)] = "Register"),
          (e[(e.Verify = 1)] = "Verify"),
          (e[(e.VerifyFailed = 2)] = "VerifyFailed"),
          (e[(e.Complete = 3)] = "Complete"),
          e
        );
      })({});
      const ic = ({ isTeamSettingsLoading: e, teamSettings: t, setStepComplete: a, uncompleteSteps: s }) => {
          const { translate: i } = (0, g.Z)(),
            [o, r] = n.useState(!1),
            [l, c] = n.useState([]),
            [d, u] = n.useState(""),
            [_, m] = n.useState(""),
            [p, y] = n.useState({}),
            h = (e) => "valid" === e.status,
            b = () => l.filter((e) => h(e)),
            x = t?.ssoEnabled || !1,
            S = n.useCallback((e = []) => {
              e.forEach((e) => {
                switch (e.status) {
                  case mr.p.pending:
                    y((t) => ({ ...t, [e.id]: sc.Verify })), a(Yl.ClaimDomain);
                    break;
                  case mr.p.valid:
                    y((t) => ({ ...t, [e.id]: sc.Complete })), a(Yl.ClaimDomain), a(Yl.VerifyDomain);
                    break;
                  default:
                    y((t) => ({ ...t, [e.id]: sc.Register }));
                }
              });
            }, []),
            v = n.useCallback(async () => {
              r(!0), m("");
              const e = await ca.C.getTeamDomains();
              return r(!1), e.success ? (c(e.domains), e.domains) : (m(i("team_settings_domain_fetch_error")), Promise.resolve(void 0));
            }, [ca.C.getTeamDomains]),
            f = async (e) => {
              const t = await ca.C.completeTeamDomainRegistration();
              t.success && t.domains.find((t) => t.name === e.name) && t.domains.find((t) => t.name === e.name)?.status === mr.p.valid
                ? (a(Yl.VerifyDomain), y((t) => ({ ...t, [e.id]: sc.Complete })))
                : y((t) => ({ ...t, [e.id]: sc.VerifyFailed }));
            },
            C = async (e) => {
              e &&
                (await ca.C.deactivateTeamDomain({ domain: e.name })).success &&
                (S(await v()), b().length || s([Yl.EnableSSO, Yl.SSOConnector, Yl.ClaimDomain, Yl.VerifyDomain]));
            };
          return (
            n.useEffect(() => {
              (async () => {
                S(await v());
              })();
            }, [v, S]),
            n.createElement(
              n.Fragment,
              null,
              n.createElement(
                Kl,
                { label: `1. ${i("team_settings_domain_title")}`, labelHelper: i("team_settings_domain_multi_description") },
                o || e
                  ? n.createElement(oi.Z, { size: 20, containerStyle: { alignItems: "normal" } })
                  : n.createElement(Fl, {
                      registerDomain: async (e) => {
                        if (l.length >= 5) return;
                        if (!tc.isFQDN(e)) return void u(i(ac));
                        const t = await ca.C.registerTeamDomain({ domain: e });
                        if (t.success) S(await v());
                        else if (!t.success) {
                          const {
                              error: { code: e }
                            } = t,
                            a = nc[e];
                          u(i(null != a ? a : ac));
                        }
                      },
                      domainLoadError: _,
                      registrationError: d,
                      disabled: l.length >= 5,
                      clearRegistrationErrors: () => u("")
                    })
              ),
              o || e || 0 === l.length
                ? null
                : n.createElement(
                    n.Fragment,
                    null,
                    n.createElement("div", { className: "divider--SU_Ctssudp" }),
                    n.createElement(
                      Kl,
                      { label: i("team_settings_domain_added") },
                      n.createElement(
                        "div",
                        { className: "domainsContainer--eO_SBqHaFr" },
                        l.map((e, t) =>
                          t < 5
                            ? n.createElement(ec, {
                                key: e.id,
                                currentStep: p[e.id],
                                deactivateDomain: C,
                                domain: e,
                                isDisabled: x && 1 === b().length && h(e),
                                setCurrentSteps: y,
                                verifyDomain: f
                              })
                            : null
                        )
                      )
                    )
                  )
            )
          );
        },
        { orange00: oc, dashGreen02: rc } = c.colors,
        lc = ({ verifyDomain: e, domain: t, domainStep: a }) => {
          const { translate: s } = (0, g.Z)();
          return n.createElement(
            c.T5p,
            { gap: "10px", gridTemplateColumns: "1fr auto" },
            n.createElement(c.oil, {
              value: t ? t.name : "",
              fullWidth: !0,
              readOnly: !0,
              endAdornment: n.createElement(
                c.T5p,
                { gridTemplateColumns: "auto auto", gap: "5px" },
                n.createElement(
                  c.nvN,
                  { size: "small", color: a === sc.VerifyFailed ? oc : rc },
                  a === sc.VerifyFailed ? s("team_settings_domain_verify_failed") : s("team_settings_domain_not_verified")
                ),
                n.createElement(c.enX, { color: a === sc.VerifyFailed ? oc : rc })
              ),
              feedbackType: a === sc.VerifyFailed ? "warning" : void 0
            }),
            n.createElement(c.zxk, { nature: "secondary", onClick: e, type: "button" }, s("team_settings_domain_button_verify"))
          );
        };
      var cc;
      const { accessibleValidatorGreen: dc } = c.colors,
        uc = ({ domain: e }) =>
          n.createElement(c.oil, {
            value: e.name,
            endAdornment: cc || (cc = n.createElement(c.rE2, { color: dc })),
            readOnly: !0,
            fullWidth: !0
          });
      var _c = a(501234);
      const mc = "team_settings_domain_verify_load_error",
        pc = ({
          description: e,
          isDarkWebInsights: t,
          secondaryDescription: a,
          domainName: s,
          href: i = "https://support.dashlane.com/hc/articles/360013149040",
          linkLabel: r,
          onClick: l,
          onDismiss: d,
          onConfirm: u
        }) => {
          const { translate: _ } = (0, g.Z)(),
            [m, p] = (0, n.useState)({ id: 0, name: "" }),
            [y, h] = (0, n.useState)(""),
            [b, x] = (0, n.useState)(!1),
            [S, v] = (0, n.useState)(!1);
          (0, n.useEffect)(() => {
            (async () => {
              x(!0);
              try {
                const e = await ca.C.getTeamDomains();
                if (e.success) {
                  const t = e.domains.find((e) => e.name === s);
                  t ? p(t) : h(_(mc));
                }
              } catch (e) {
                h(_(mc));
              } finally {
                x(!1);
              }
            })();
          }, [s, _]);
          const { dnsToken: { computedToken: f, challengeDomain: C } = { computedToken: "", challengeDomain: "" } } = m,
            Z = ({ id: e, inputValue: t, labelText: a }) => ({
              textInputProps: {
                id: e,
                label: a,
                readOnly: !0,
                disabled: b,
                fullWidth: !0,
                startAdornment: b ? (0, B.tZ)(c.HoD, { color: c.colors.midGreen00 }) : void 0
              },
              iconButtonProps: { disabled: b },
              inputValue: t
            });
          return (0, B.tZ)(
            c.VqE,
            { isOpen: !0, onClose: d, closeIconName: _("_common_dialog_dismiss_button") },
            (0, B.tZ)(c.$N8, { title: _("team_settings_domain_verify_title") }),
            (0, B.tZ)(
              c.a7O,
              null,
              (0, B.tZ)(
                c.T5p,
                { gap: "32px", gridTemplateColumns: "1fr", gridAutoRows: "auto" },
                (0, B.tZ)(
                  c.nvN,
                  { color: c.colors.grey00 },
                  e || _.markup("team_settings_domain_verify_description_markup", { domainUrl: s })
                ),
                y
                  ? (0, B.tZ)(c.nvN, { color: c.colors.red00 }, y)
                  : (0, B.tZ)(
                      n.Fragment,
                      null,
                      (0, B.tZ)(_c.x, { ...Z({ id: "hostnameInput", labelText: _("team_settings_domain_verify_host"), inputValue: C }) }),
                      (0, B.tZ)(_c.x, { ...Z({ id: "txtValueInput", labelText: _("team_settings_domain_verify_txt"), inputValue: f }) })
                    ),
                a ? (0, B.tZ)(c.nvN, { color: c.colors.grey00 }, a) : null
              )
            ),
            (0, B.tZ)(
              c.cNS,
              {
                primaryButtonTitle: _("team_settings_domain_verify_confirm"),
                primaryButtonOnClick: async () => {
                  v(!0);
                  try {
                    await u();
                  } catch (e) {
                    h(e.message),
                      t &&
                        (0, P.Kz)(
                          new o.UserVerifyDomainEvent({ domainVerificationStep: o.DomainVerificationStep.DomainVerificationError })
                        );
                  } finally {
                    v(!1),
                      t &&
                        (0, P.Kz)(
                          new o.UserVerifyDomainEvent({
                            domainVerificationStep: o.DomainVerificationStep.TapVerifyDomainCtaWithDnsInformation
                          })
                        );
                  }
                },
                primaryButtonProps: { disabled: !!y || b || S },
                intent: "primary"
              },
              (0, B.tZ)(
                c.rUS,
                {
                  sx: { alignSelf: "center", mr: "auto" },
                  color: c.colors.midGreen00,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  href: i,
                  onClick: l
                },
                r || _("team_settings_domain_verify_setup")
              )
            )
          );
        },
        gc = ({ onDismiss: e, domainName: t }) => {
          const { translate: a } = (0, g.Z)(),
            s = t
              ? a.markup("team_settings_domain_verify_failure_title_markup", { domainUrl: t })
              : a("team_settings_domain_verify_failure_title");
          return n.createElement(
            c.VqE,
            { isOpen: !0, onClose: e },
            n.createElement(c.$N8, { title: s }),
            n.createElement(c.a7O, null, a("team_settings_domain_verify_failure_desc")),
            n.createElement(c.cNS, {
              primaryButtonTitle: a("team_settings_domain_verify_failure_button"),
              primaryButtonOnClick: e,
              intent: "primary"
            })
          );
        },
        yc = ({
          description: e,
          isDarkWebInsights: t,
          secondaryDescription: a,
          domainName: s,
          linkLabel: i,
          href: o,
          onClick: r,
          onDismiss: l,
          onError: c,
          onSuccess: d
        }) => {
          const [u, _] = (0, n.useState)(!1),
            m = (0, n.useRef)(!1),
            p = (0, n.useCallback)(async () => {
              const e = await ca.C.completeTeamDomainRegistration();
              if (!m.current) {
                if (e.success) {
                  const t = e.domains.find((e) => e.name === s);
                  t?.status === mr.p.valid ? d() : c && c();
                } else _(!0);
                return () => {
                  m.current = !0;
                };
              }
            }, [s, d, c]);
          return u
            ? (0, B.tZ)(gc, { onDismiss: l, domainName: s })
            : (0, B.tZ)(pc, {
                description: e,
                isDarkWebInsights: t,
                secondaryDescription: a,
                linkLabel: i,
                domainName: s,
                href: o,
                onConfirm: p,
                onDismiss: l,
                onClick: r
              });
        },
        hc = ({ img: e, title: t, subtitle: a, stepLabel: n, stepNumber: s, caps: i, dotStyle: o }) =>
          (0, B.tZ)(
            "div",
            { className: "container--vE8T8LPnPv" },
            (0, B.tZ)("img", { src: e, className: "img--m_seeXYeAW" }),
            (0, B.tZ)(c.nvN, { size: "medium", caps: !!i || void 0, sx: { marginTop: "-43px", marginBottom: "11px" } }, t),
            (0, B.tZ)(c.nvN, { color: c.colors.grey00, size: "small" }, a),
            (0, B.tZ)(
              "div",
              { className: "numberContainer--QTEn2wceZi" },
              (0, B.tZ)("div", { className: "dot--jKi_w8fAhr", style: o }),
              n && s ? (0, B.tZ)(c.nvN, { size: "small", sx: { textAlign: "left" } }, n, " ", s) : null
            )
          ),
        bc = () => {
          const { translate: e } = (0, g.Z)(),
            t = { marginTop: "18px" };
          return (0, B.tZ)(
            c.Zbd,
            { sx: { padding: "12px 12px 48px", minHeight: "200px" } },
            (0, B.tZ)(
              c.Ejs,
              {
                sx: {
                  justifyContent: "space-between",
                  marginTop: "80px",
                  paddingLeft: "24px",
                  borderBottom: `solid 2px ${c.colors.grey00}`
                }
              },
              (0, B.tZ)(hc, {
                img: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTMiIGhlaWdodD0iNTMiIHZpZXdCb3g9IjAgMCA1MyA1MyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNi40NTgzIDEuNUMxMi42NzQyIDEuNSAxLjUgMTIuNjc0MiAxLjUgMjYuNDU4M0MxLjUgNDAuMjQyNCAxMi42NzQyIDUxLjQxNjcgMjYuNDU4MyA1MS40MTY3QzQwLjI0MjQgNTEuNDE2NyA1MS40MTY3IDQwLjI0MjQgNTEuNDE2NyAyNi40NTgzQzUxLjQxNjcgMTIuNjc0MiA0MC4yNDI0IDEuNSAyNi40NTgzIDEuNVpNMC41IDI2LjQ1ODNDMC41IDEyLjEyMTkgMTIuMTIxOSAwLjUgMjYuNDU4MyAwLjVDNDAuNzk0NyAwLjUgNTIuNDE2NyAxMi4xMjE5IDUyLjQxNjcgMjYuNDU4M0M1Mi40MTY3IDQwLjc5NDcgNDAuNzk0NyA1Mi40MTY3IDI2LjQ1ODMgNTIuNDE2N0MxMi4xMjE5IDUyLjQxNjcgMC41IDQwLjc5NDcgMC41IDI2LjQ1ODNaIiBmaWxsPSIjNjE1QjU3Ii8+CjxwYXRoIGQ9Ik0yNi4xMjgzIDMwSDI3LjYxNjNWMjEuMzI0SDI2LjYyMDNDMjYuNTYwMyAyMi4wNSAyNi4wMzgzIDIyLjQ0NiAyNC41MjAzIDIyLjQ0NlYyMy4zMTZIMjYuMTI4M1YzMFoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=",
                title: e("team_breach_report_verify_domain_stepper_title"),
                subtitle: e("team_dark_web_insights_stepper_verify_domain_subtitle"),
                caps: !0,
                dotStyle: t
              }),
              (0, B.tZ)(hc, {
                img: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTMiIGhlaWdodD0iNTMiIHZpZXdCb3g9IjAgMCA1MyA1MyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNi40NTgzIDEuNUMxMi42NzQyIDEuNSAxLjUgMTIuNjc0MiAxLjUgMjYuNDU4M0MxLjUgNDAuMjQyNCAxMi42NzQyIDUxLjQxNjcgMjYuNDU4MyA1MS40MTY3QzQwLjI0MjQgNTEuNDE2NyA1MS40MTY3IDQwLjI0MjQgNTEuNDE2NyAyNi40NTgzQzUxLjQxNjcgMTIuNjc0MiA0MC4yNDI0IDEuNSAyNi40NTgzIDEuNVpNMC41IDI2LjQ1ODNDMC41IDEyLjEyMTkgMTIuMTIxOSAwLjUgMjYuNDU4MyAwLjVDNDAuNzk0NyAwLjUgNTIuNDE2NyAxMi4xMjE5IDUyLjQxNjcgMjYuNDU4M0M1Mi40MTY3IDQwLjc5NDcgNDAuNzk0NyA1Mi40MTY3IDI2LjQ1ODMgNTIuNDE2N0MxMi4xMjE5IDUyLjQxNjcgMC41IDQwLjc5NDcgMC41IDI2LjQ1ODNaIiBmaWxsPSIjNjE1QjU3Ii8+CjxwYXRoIGQ9Ik0yNC4wMDQ5IDMwSDMwLjEyNDlWMjguNzUySDI1LjYzMDlWMjguNjI2QzI1LjYzMDkgMjYuNTYyIDMwLjEwNjkgMjYuODUgMzAuMTA2OSAyMy43NTRDMzAuMTA2OSAyMi4yMyAyOC45NDI5IDIxLjIwNCAyNy4wODg5IDIxLjIwNEMyNC45NDA5IDIxLjIwNCAyMy44NTQ5IDIyLjQ4MiAyMy44MzA5IDI0LjA2NkgyNS4yNDY5QzI1LjM2MDkgMjMuMDI4IDI2LjA1MDkgMjIuNDQgMjcuMDQ2OSAyMi40NEMyNy45ODI5IDIyLjQ0IDI4LjU3MDkgMjIuOTggMjguNTcwOSAyMy43NkMyOC41NzA5IDI1Ljg2IDI0LjAwNDkgMjUuNzIyIDI0LjAwNDkgMjguODE4VjMwWiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg==",
                title: e("team_dark_web_insights_view_insights_stepper_title"),
                subtitle: e("team_dark_web_insights_view_insights_stepper_subtitle"),
                caps: !0,
                dotStyle: t
              }),
              (0, B.tZ)(hc, {
                img: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTQiIGhlaWdodD0iNTMiIHZpZXdCb3g9IjAgMCA1NCA1MyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNi45NDc5IDEuNUMxMi44ODQ0IDEuNSAxLjUgMTIuNjgzMiAxLjUgMjYuNDU4M0MxLjUgNDAuMjMzNSAxMi44ODQ0IDUxLjQxNjcgMjYuOTQ3OSA1MS40MTY3QzQxLjAxMTQgNTEuNDE2NyA1Mi4zOTU4IDQwLjIzMzUgNTIuMzk1OCAyNi40NTgzQzUyLjM5NTggMTIuNjgzMiA0MS4wMTE0IDEuNSAyNi45NDc5IDEuNVpNMC41IDI2LjQ1ODNDMC41IDEyLjExMyAxMi4zNTAyIDAuNSAyNi45NDc5IDAuNUM0MS41NDU3IDAuNSA1My4zOTU4IDEyLjExMyA1My4zOTU4IDI2LjQ1ODNDNTMuMzk1OCA0MC44MDM3IDQxLjU0NTcgNTIuNDE2NyAyNi45NDc5IDUyLjQxNjdDMTIuMzUwMiA1Mi40MTY3IDAuNSA0MC44MDM3IDAuNSAyNi40NTgzWiIgZmlsbD0iIzYxNUI1NyIvPgo8cGF0aCBkPSJNMjMuNzMzNSAyMy45MjhIMjUuMTQ5NUMyNS4yMDM1IDIyLjgwNiAyNi4wMDE1IDIyLjM2OCAyNi44Nzc1IDIyLjM2OEMyNy45MDk1IDIyLjM2OCAyOC41NjM1IDIyLjg3OCAyOC41NjM1IDIzLjU1QzI4LjU2MzUgMjQuMjgyIDI3Ljg0MzUgMjQuODUyIDI2LjgxNzUgMjQuODgyTDI2LjA3MzUgMjQuOTEyVjI2LjFMMjYuODc3NSAyNi4xMjRDMjcuOTYzNSAyNi4xNDggMjguNzc5NSAyNi42NTIgMjguNzc5NSAyNy41MzRDMjguNzc5NSAyOC4zNTYgMjguMDUzNSAyOC45MjYgMjYuODgzNSAyOC45MjZDMjUuOTQxNSAyOC45MjYgMjUuMjQ1NSAyOC40MzQgMjUuMDc3NSAyNy40MDJIMjMuNjU1NUMyMy42OTE1IDI5LjA4MiAyNC45MDM1IDMwLjEyIDI2Ljg1MzUgMzAuMTMyQzI4LjgwOTUgMzAuMTQ0IDMwLjM0NTUgMjkuMjIgMzAuMzQ1NSAyNy41N0MzMC4zNDU1IDI2LjQxOCAyOS41NTM1IDI1LjcxNiAyOC41MDk1IDI1LjQyOEMyOS42MjU1IDI1LjA0NCAzMC4xMjk1IDI0LjM0OCAzMC4xMjk1IDIzLjQ5QzMwLjEyOTUgMjEuOTcyIDI4Ljc3MzUgMjEuMjA0IDI2Ljg5NTUgMjEuMjA0QzI1LjE0MzUgMjEuMjA0IDIzLjczMzUgMjIuMTQ2IDIzLjczMzUgMjMuOTI4WiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg==",
                title: e("team_breach_report_reduce_risk_title"),
                subtitle: e("team_breach_report_reduce_risk_subtitle"),
                caps: !0,
                dotStyle: t
              })
            )
          );
        };
      var xc,
        Sc = a(997962);
      const vc = a(894017),
        fc = "team_breach_report_domain_register_invalid_error",
        Cc = {
          INVALID_PUBLIC_DOMAIN: "team_settings_domain_register_public_error",
          DOMAIN_CONTAINS_EXISTING_NONTEAM_USERS: "team_settings_domain_register_contact_support",
          DOMAIN_ALREADY_EXISTS: "team_settings_domain_register_duplicated_error"
        },
        Zc = ({ onSuccess: e, onError: t }) => {
          const { translate: a } = (0, g.Z)(),
            s = (0, Sc.f)(),
            { openDialog: i, shouldShowTrialDiscontinuedDialog: r } = (0, T.yp)(),
            [l, d] = (0, n.useState)(""),
            [u, _] = (0, n.useState)(""),
            [m, p] = (0, n.useState)(!1),
            [y, h] = (0, n.useState)(!1);
          return (
            (0, n.useEffect)(() => {
              if (void 0 !== s) {
                const e = s.substring(s.lastIndexOf("@") + 1);
                d(e);
              }
            }, [s]),
            (0, B.tZ)(
              n.Fragment,
              null,
              xc || (xc = (0, B.tZ)(bc, null)),
              (0, B.tZ)(
                "div",
                null,
                (0, B.tZ)(
                  c.Zbd,
                  { sx: { padding: "24px", margin: "24px 0" } },
                  (0, B.tZ)(c.X6q, { size: "x-small" }, a("team_dark_web_insights_verify_domain_title")),
                  (0, B.tZ)(
                    c.nvN,
                    { sx: { marginBottom: "20px", marginTop: "10px" }, color: c.colors.grey00 },
                    a("team_breach_report_verify_domain_description")
                  ),
                  (0, B.tZ)(
                    c.Ejs,
                    { gap: "16px" },
                    (0, B.tZ)(
                      c.k$b,
                      { sx: { width: "75%" } },
                      (0, B.tZ)(c.oil, {
                        onChange: (e) => {
                          d(e.target.value), _("");
                        },
                        fullWidth: !0,
                        value: l,
                        autoFocus: !0,
                        endAdornment:
                          u || "" === l || !vc.isFQDN(l) ? void 0 : (0, B.tZ)(c.rE2, { color: c.colors.accessibleValidatorGreen }),
                        feedbackText: u || void 0,
                        feedbackType: u ? "error" : void 0
                      })
                    ),
                    (0, B.tZ)(
                      c.k$b,
                      { sx: { width: "20%" } },
                      (0, B.tZ)(
                        c.zxk,
                        {
                          type: "button",
                          disabled: "" === l || y,
                          onClick: () => {
                            (async (e) => {
                              if (
                                ((0, P.Kz)(
                                  new o.UserVerifyDomainEvent({
                                    domainVerificationStep: o.DomainVerificationStep.TapContinueCtaWithDomainUrl
                                  })
                                ),
                                r)
                              )
                                return void i();
                              if (!vc.isFQDN(e)) return void _(a(fc));
                              h(!0);
                              const t = await ca.C.registerTeamDomain({ domain: e });
                              if ((h(!1), t.success)) return _(""), void p(!0);
                              if (!t.success) {
                                const {
                                    error: { code: e }
                                  } = t,
                                  n = Cc[e];
                                _(a(null != n ? n : fc));
                              }
                            })(l),
                              (0, P.Kz)(
                                new o.UserVerifyDomainEvent({
                                  domainVerificationStep: o.DomainVerificationStep.TapContinueCtaWithDomainUrl
                                })
                              );
                          }
                        },
                        a("team_dwi_verify_domain_button")
                      )
                    )
                  )
                ),
                m
                  ? (0, B.tZ)(yc, {
                      description: a.markup("breach_report_verify_domain_dialog_description_markup"),
                      secondaryDescription: a("breach_report_verify_domain_dialog_secondary_description"),
                      linkLabel: a("breach_report_verify_domain_href_label"),
                      href: Jr,
                      onClick: () => {
                        (0, P.Kz)(
                          new o.UserOpenHelpCenterEvent({ helpCenterArticleCta: o.HelpCenterArticleCta.ViewDomainVerificationGuide })
                        );
                      },
                      domainName: l,
                      onSuccess: () => {
                        e(l);
                      },
                      isDarkWebInsights: !0,
                      onError: t,
                      onDismiss: t
                    })
                  : null
              )
            )
          );
        };
      async function Ec(e, t, a = 0) {
        const n = await ca.C.getDarkWebInsightsReportResults({ domain: e, offset: a, count: t });
        if (n?.success) return n.data;
        throw new Error("[fetchDarkWebInsightsResults] - Server Error: Unable to load dark web insight report results data");
      }
      var Dc, Tc, Nc;
      const Mc = ({ domainName: e }) => {
        const { translate: t } = (0, g.Z)();
        return (0, B.tZ)(
          c.Zbd,
          {
            sx: {
              minHeight: "575px",
              padding: "24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column"
            }
          },
          Dc ||
            (Dc = (0, B.tZ)("img", {
              src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEzIiBoZWlnaHQ9IjExMyIgdmlld0JveD0iMCAwIDExMyAxMTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHg9IjAuNSIgd2lkdGg9IjExMiIgaGVpZ2h0PSIxMTMiIHJ4PSI1NiIgZmlsbD0iI0Y1RjdGNyIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTUwLjAzMzggMjYuNTYyMkM0MC45NzkgMjcuNjk4NiAzNC41NiAzNS45NjAyIDM1LjY5NjQgNDUuMDE1TDM2LjY0OTUgNTIuNjA4NUwzMS45OTUyIDUzLjE5MjZDMzAuODk5MiA1My4zMzAyIDMwLjEyMjMgNTQuMzMwMSAzMC4yNTk4IDU1LjQyNjFMMzQuNTYyMSA4OS43MDVDMzQuNjk5NyA5MC44MDEgMzUuNjk5NyA5MS41Nzc5IDM2Ljc5NTYgOTEuNDQwNEw3OS4wNDI4IDg2LjEzOEM4MC4xMzg4IDg2LjAwMDQgODAuOTE1NyA4NS4wMDA1IDgwLjc3ODIgODMuOTA0NUw3Ni40NzU5IDQ5LjYyNTZDNzYuMzM4MyA0OC41Mjk2IDc1LjMzODQgNDcuNzUyNyA3NC4yNDI0IDQ3Ljg5MDJMNjkuNDM5NiA0OC40OTNMNjguNDg2NiA0MC44OTk1QzY3LjM1MDEgMzEuODQ0OCA1OS4wODg1IDI1LjQyNTcgNTAuMDMzOCAyNi41NjIyWk00MC43NDk5IDQ0LjQ2OTlMNDEuNjkxOSA1MS45NzU2TDY0LjM5MjggNDkuMTI2NUw2My40NTA3IDQxLjYyMDhDNjIuNjY0IDM1LjM1MjEgNTYuOTQ0NCAzMC45MDgxIDUwLjY3NTcgMzEuNjk0OUM0NC40MDcxIDMyLjQ4MTcgMzkuOTYzMSAzOC4yMDEyIDQwLjc0OTkgNDQuNDY5OVpNNzguMTg0MiAzMi4yODA4TDc0LjE0ODUgMzYuNDAzNkw3NS43NCAzNy45NjE2TDc5Ljc3NTggMzMuODM4OEw3OC4xODQyIDMyLjI4MDhaTTc3LjI0NzEgNDAuMDg4Mkw3OS45MzA0IDM5LjUxNDhMODAuMjkzMiA0MS4yMTI1TDc3LjYwOTkgNDEuNzg1OUw3Ny4yNDcxIDQwLjA4ODJaTTcxLjA0MTMgMzEuODczOEw3MC44ODg3IDM1Ljg0ODRMNzIuNzg0MiAzNS45MjEyTDcyLjkzNjggMzEuOTQ2Nkw3MS4wNDEzIDMxLjg3MzhaIiBmaWxsPSIjOUZBRUIxIi8+Cjwvc3ZnPgo="
            })),
          Tc || (Tc = (0, B.tZ)("br", null)),
          (0, B.tZ)(
            c.nvN,
            { color: c.colors.black, bold: !0, size: "large" },
            t("team_dashboard_dark_web_insights_domain_incident_free_title", { domainName: e })
          ),
          Nc || (Nc = (0, B.tZ)("br", null)),
          (0, B.tZ)(c.nvN, { color: c.colors.grey00 }, t("team_dwi_domain_incident_free_description"))
        );
      };
      var Ic, wc;
      const kc = {
          minHeight: "575px",
          padding: "24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column"
        },
        Ac = () => {
          const { translate: e } = (0, g.Z)();
          return (0, B.tZ)(
            c.Zbd,
            { sx: kc },
            (0, B.tZ)(c.HoD, { size: 88, color: c.colors.dashGreen00, strokeWidth: 1 }),
            Ic || (Ic = (0, B.tZ)("br", null)),
            (0, B.tZ)(c.nvN, { color: c.colors.grey00 }, e("team_dark_web_insights_scanning_incidents_txt"))
          );
        },
        Oc = () => {
          const { translate: e } = (0, g.Z)();
          return (0, B.tZ)(
            c.Zbd,
            { sx: kc },
            (0, B.tZ)(c.HoD, { size: 88, color: c.colors.dashGreen00, strokeWidth: 1 }),
            wc || (wc = (0, B.tZ)("br", null)),
            (0, B.tZ)(c.nvN, { color: c.colors.grey00 }, e("team_dashboard_dark_web_insights_generating_msg"))
          );
        },
        Lc = (e) => {
          const [t, a] = (0, n.useState)(!1),
            [s, i] = (0, n.useState)([]),
            [o, r] = (0, n.useState)(null),
            l = (0, n.useCallback)(
              async (t) => {
                if (!t?.signal?.aborted)
                  if (null !== e) {
                    a(!0);
                    try {
                      const t = await (0, cs.YY)({ teamId: e });
                      i(t);
                    } catch (e) {
                      const t = new Error(`useTeamMember: ${e}`);
                      r(t);
                    } finally {
                      a(!1);
                    }
                  } else r(new Error("No team id provided"));
              },
              [e]
            );
          return (
            (0, n.useEffect)(() => {
              const e = new AbortController();
              return (
                l(),
                () => {
                  e.abort();
                }
              );
            }, [l]),
            { teamMembersLoading: t, teamMembersError: o, teamMembers: s, refreshTeamMembers: l }
          );
        },
        zc = (e) => e.filter(({ status: e }) => "removed" !== e).length;
      var jc = a(351055),
        Rc = a(891032),
        Pc = a(164467),
        Uc = a(174537),
        Bc = a(133392);
      const Gc = {
        INVITE_RESTRICTED: "team_invite_result_dialog_refused_member_reason_admin_restricted_markup",
        PRE_EXISTING_MP_USER: "team_invite_result_dialog_refused_member_reason_pre_existing_mp_user_markup",
        GENERIC_ERROR: "team_invite_result_dialog_refused_member_reason_generic_error_markup",
        EMAIL_DOES_NOT_MATCH_SSO_DOMAIN: "team_invite_result_dialog_refused_member_reason_EMAIL_DOES_NOT_MATCH_SSO_DOMAIN",
        ALREADY_MEMBER: "team_invite_result_dialog_refused_member_reason_already_member",
        ALREADY_MEMBER_OTHER_TEAM: "team_invite_result_dialog_refused_member_reason_already_member_other_team",
        HAS_AUTOMATIC_RENEW: "team_invite_result_dialog_refused_member_reason_has_automatic_renew",
        NO_FREE_SLOT_FREE_PLAN: "team_invite_result_dialog_refused_member_reason_no_free_slot_free_plan",
        SSO_ALREADY_ACTIVATED: "team_invite_result_dialog_refused_member_reason_sso_already_activated",
        PENDING_DEACTIVATION_DOMAIN_DOES_NOT_MATCH:
          "team_invite_result_dialog_refused_member_reason_pending_deactivation_domain_does_not_match"
      };
      let Fc = (function (e) {
        return (e.SSO_ALREADY_ACTIVATED = "sso_already_activated"), (e.USER_HAS_MASTER_PASSWORD = "USER_HAS_MASTER_PASSWORD"), e;
      })({});
      async function qc() {
        const e = await ca.C.getTeamInfo();
        if (e.success) {
          const {
            data: { teamInfo: t, planTier: a, capabilities: n, seats: s }
          } = e;
          return { teamInfo: t, planTier: a, capabilities: n, seats: s };
        }
        {
          const { message: t } = e;
          throw new Error(`getTeamInfo: failed with error: ${t}`);
        }
      }
      function $c(e) {
        const [t, a] = n.useState(!0),
          [s, i] = n.useState({}),
          [o, r] = n.useState(null),
          [l, c] = n.useState(null),
          [d, u] = n.useState(null);
        return (
          n.useEffect(() => {
            if (void 0 === e) return;
            const t = new AbortController();
            return (
              (async () => {
                a(!0);
                try {
                  const {
                    teamInfo: {
                      ssoServiceProviderUrl: e,
                      ssoIdpMetadata: a,
                      ssoEnabled: n,
                      recoveryEnabled: s,
                      duoSecretKey: o,
                      duoIntegrationKey: r,
                      duoApiHostname: l,
                      duo: d,
                      activeDirectoryToken: _,
                      activeDirectorySyncType: m,
                      activeDirectorySyncStatus: p,
                      uuid: g
                    },
                    capabilities: y,
                    planTier: h
                  } = await qc();
                  if (t.signal.aborted) return;
                  i({
                    ssoServiceProviderUrl: e,
                    ssoIdpMetadata: a,
                    ssoEnabled: n,
                    recoveryEnabled: s,
                    duoSecretKey: o,
                    duoIntegrationKey: r,
                    duoApiHostname: l,
                    duo: d,
                    activeDirectoryToken: _,
                    activeDirectorySyncType: m,
                    activeDirectorySyncStatus: p,
                    uuid: g
                  }),
                    u(h),
                    c(y);
                } catch (e) {
                  const t = new Error(`useTeamSettings: ${e}`);
                  r(t);
                } finally {
                  a(!1);
                }
              })(),
              () => {
                t.abort();
              }
            );
          }, [e]),
          {
            teamSettingsLoading: t,
            teamSettingsError: o,
            teamSettings: s,
            updateTeamSettings: async (t) => {
              if (null === e) return;
              const a = { teamId: e, settings: t };
              try {
                await (0, cs.jy)(a);
              } catch (e) {
                var n;
                throw new Error(null != (n = e?.additionalInfo?.message) ? n : "Failed to save metadata");
              }
              const o = { ...s, ...t };
              i(o);
            },
            planTier: d,
            teamCapabilities: l
          }
        );
      }
      const Vc = "inviteResultDialogHeader--v_8lOJQXCj",
        Wc = "refusedMember--SNbCU5FzB1",
        Hc = "reason--jFHJ7kk1d9",
        Kc = "irDialogIcon--Rx0OQmu57r";
      var Yc;
      const Qc = { invitedMembers: {}, refusedMembers: {}, show: !1 },
        Xc = () => {
          const [e, t] = n.useState(Qc);
          return {
            invitePartialSuccessState: e,
            setInvitePartialSuccessState: t,
            handleInvitationResultClosed: () => {
              t(Qc);
            }
          };
        },
        Jc = ({ teamId: e, isOpen: t, invitedMembers: a, refusedMembers: s, onClose: i }) => {
          const { translate: o } = (0, g.Z)(),
            [r, l] = n.useState([]),
            [d, u] = n.useState([]),
            _ = Object.keys(a).length,
            m = Object.keys(s).length,
            { teamSettings: p, teamSettingsLoading: y } = $c(e),
            h = p?.ssoEnabled;
          return (
            n.useEffect(() => {
              if (y) return;
              const e = [],
                t = [];
              Object.keys(s).forEach((a) => {
                const n = s[a];
                n !== Fc.SSO_ALREADY_ACTIVATED || h
                  ? n === Fc.USER_HAS_MASTER_PASSWORD && h
                    ? t.push({ email: a, key: Gc.PRE_EXISTING_MP_USER, errorType: n })
                    : e.push({ email: a, errorType: n })
                  : t.push({ email: a, key: Gc.INVITE_RESTRICTED, errorType: n });
              }),
                l(e),
                u(t);
            }, [y, h, s]),
            n.createElement(
              c.VqE,
              { closeIconName: o("_common_dialog_dismiss_button"), isOpen: t, onClose: i, ariaDescribedby: "refusedList" },
              n.createElement(c.$N8, { title: o("team_invite_result_dialog_title") }),
              n.createElement(
                c.a7O,
                null,
                y
                  ? Yc || (Yc = n.createElement(oi.Z, { size: 30 }))
                  : n.createElement(
                      n.Fragment,
                      null,
                      _
                        ? n.createElement(
                            "div",
                            { className: "successfulInvitesRatio--Jbd0Eax7op" },
                            n.createElement("img", {
                              src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNNiA5TDcuOTU5MjggMTFMMTEuOTc5NiA3TTAuNSA5QzAuNSA0LjMwNTQ1IDQuMzA2MyAwLjUgOSAwLjVDMTMuNjkzNyAwLjUgMTcuNSA0LjMwNTQ1IDE3LjUgOUMxNy41IDEzLjY5NDYgMTMuNjkzNyAxNy41IDkgMTcuNUM0LjMwNjMgMTcuNSAwLjUgMTMuNjk0NiAwLjUgOVoiIHN0cm9rZT0iIzIwQjQyMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=",
                              className: Kc
                            }),
                            n.createElement(
                              "span",
                              { className: Vc },
                              o("team_invite_result_dialog_successful_invites_rate", { proposedMembers: _ + m, invitedMembers: _ })
                            )
                          )
                        : null,
                      n.createElement(
                        "div",
                        { className: "refusedMemberListTitle--Omq1aAlxkx" },
                        n.createElement("img", {
                          src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNNS41IDEyLjVMMTIuNSA1LjVNMTIuNSAxMi41TDUuNSA1LjVNMC41IDlDMC41IDQuMzA1ODcgNC4zMDU4NyAwLjUgOSAwLjVDMTMuNjk0MSAwLjUgMTcuNSA0LjMwNTg3IDE3LjUgOUMxNy41IDEzLjY5NDEgMTMuNjk0MSAxNy41IDkgMTcuNUM0LjMwNTg3IDE3LjUgMC41IDEzLjY5NDEgMC41IDlaIiBzdHJva2U9IiNGRjAwMkQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K",
                          className: Kc
                        }),
                        n.createElement(
                          "span",
                          { id: "refusedList", className: Vc },
                          o("team_invite_result_dialog_refused_member_list_title", { count: m })
                        )
                      ),
                      n.createElement(
                        "ul",
                        { className: "refusedMemberList--pPxtCXVRX3" },
                        r.map((e) =>
                          n.createElement(
                            "li",
                            { className: Wc, key: e.email },
                            e.email,
                            n.createElement(
                              "span",
                              { className: Hc },
                              ": ",
                              Gc[e.errorType.toUpperCase()]
                                ? o(Gc[e.errorType.toUpperCase()])
                                : o.markup(Gc.GENERIC_ERROR, { helpCenter: ce.Bw }, { linkTarget: "_blank" })
                            )
                          )
                        ),
                        d.map((e) =>
                          n.createElement(
                            "li",
                            { className: Wc, key: e.email },
                            e.email,
                            n.createElement(
                              "span",
                              { className: Hc },
                              ": ",
                              ((e) => {
                                switch (e) {
                                  case Gc.INVITE_RESTRICTED:
                                    return Bc.Iu.markup(Gc.INVITE_RESTRICTED, { helpCenter: ce.Iw });
                                  case Gc.PRE_EXISTING_MP_USER:
                                    return Bc.Iu.markup(Gc.PRE_EXISTING_MP_USER, { ssoLimitations: ce.Iw, dashlaneSupport: ce.Bw });
                                  default:
                                    return Bc.Iu.markup(Gc.GENERIC_ERROR, { helpCenter: ce.Bw });
                                }
                              })(e.key)
                            )
                          )
                        )
                      )
                    )
              ),
              n.createElement(c.cNS, {
                primaryButtonTitle: o("team_invite_result_dialog_button_ok"),
                primaryButtonOnClick: i,
                secondaryButtonTitle: o("team_invite_result_dialog_button_help_center"),
                secondaryButtonOnClick: () => (0, j.Yo)(ce.Bw)
              })
            )
          );
        },
        ed = ({ handleClickOnRetry: e }) => {
          const { translate: t } = (0, g.Z)();
          return (0, B.tZ)(
            n.Fragment,
            null,
            (0, B.tZ)(
              "div",
              { sx: { transform: "translate(-5px, -5px)", margin: "25px 0px" } },
              (0, B.tZ)(c.enX, { color: l.O9.lightTheme.ds.text.danger.quiet, size: 75 })
            ),
            (0, B.tZ)(c.$N8, {
              id: "backup-code-generation-error-dialog-title",
              title: t("team_members_generate_recovery_codes_error_dialog_title")
            }),
            (0, B.tZ)(
              c.a7O,
              null,
              (0, B.tZ)(
                c.nvN,
                { id: "backup-code-generation-error-dialog-description", sx: { color: l.O9.lightTheme.ds.text.neutral.standard } },
                t("team_members_generate_recovery_codes_error_dialog_description")
              )
            ),
            (0, B.tZ)(c.cNS, {
              primaryButtonTitle: t("team_members_generate_recovery_codes_error_dialog_confirm_button"),
              primaryButtonProps: { id: "backup-code-generation-error-dialog-try-again-button", type: "button", autoFocus: !0 },
              primaryButtonOnClick: () => e()
            })
          );
        };
      var td,
        ad = a(122958);
      const nd = ({ memberLogin: e, recoveryCodes: t, handleClickOnDone: a }) => {
        const { translate: n } = (0, g.Z)();
        return (0, B.tZ)(
          "div",
          null,
          (0, B.tZ)(c.$N8, {
            id: "backup-code-generation-dialog-list-title",
            title: n("team_members_generate_recovery_codes_dialog_title", { memberLogin: e })
          }),
          (0, B.tZ)(
            c.a7O,
            null,
            (0, B.tZ)(
              c.nvN,
              {
                id: 'id="backup-code-generation-dialog-list-description"',
                sx: { mb: "24px", mt: "6px", color: l.O9.lightTheme.ds.text.neutral.standard }
              },
              n("team_members_generate_recovery_codes_dialog_description", { memberLogin: e })
            ),
            (0, B.tZ)(
              c.j49,
              { color: l.O9.lightTheme.ds.text.brand.standard, id: 'id="backup-code-generation-dialog-list-eyebrow"' },
              n("team_members_generate_recovery_codes_dialog_codes_label")
            ),
            (0, B.tZ)(
              c.Zbd,
              { sx: { mt: "6px", padding: "8px 12px", width: "100%" } },
              t?.map((e, t) => (0, B.tZ)(c.nvN, { key: e, "data-testid": `two-factor-authentication-backup-code-${t}` }, e))
            ),
            (0, B.tZ)(
              c.zxk,
              {
                sx: { mt: "24px" },
                type: "button",
                nature: "secondary",
                id: "backup-code-generation-dialog-list-download-button",
                onClick: () => {
                  const e = t?.join("\n");
                  (0, Ki.W)(e, ad.B);
                }
              },
              (0, B.tZ)(
                c.Ejs,
                null,
                (0, B.tZ)(c.k$b, { sx: { mr: "10px" } }, td || (td = (0, B.tZ)(c._8t, { size: 16 }))),
                n("team_members_generate_recovery_codes_dialog_download_button")
              )
            )
          ),
          (0, B.tZ)(c.cNS, {
            primaryButtonTitle: n("team_members_generate_recovery_codes_dialog_confirm_button"),
            primaryButtonProps: { id: "id=backup-code-generation-dialog-list-done-button", type: "button", autoFocus: !0 },
            primaryButtonOnClick: () => a()
          })
        );
      };
      var sd;
      const id = ({ isOpen: e, memberLogin: t, closeBackupCodeDialog: a }) => {
        const [s, i] = (0, n.useState)(!1),
          [o, r] = (0, n.useState)(),
          l = async () => {
            const e = await ca.C.getRecoveryCodesAsTeamCaptain({ login: t });
            e.success ? r(e.data.recoveryCodes) : i(!0);
          },
          d = () => {
            i(!1), r(void 0), a();
          };
        (0, n.useEffect)(() => {
          e && !s && l();
        }, [e]);
        const { translate: u } = (0, g.Z)();
        return (0, B.tZ)(
          c.VqE,
          {
            isOpen: e,
            closeIconName: s ? u("BUTTON_CLOSE_DIALOG") : "",
            onClose: () => {
              d();
            }
          },
          s
            ? (0, B.tZ)(ed, {
                handleClickOnRetry: () => {
                  i(!1), l();
                }
              })
            : o
            ? (0, B.tZ)(nd, { memberLogin: t, recoveryCodes: o, handleClickOnDone: d })
            : (0, B.tZ)(
                n.Fragment,
                null,
                (0, B.tZ)(c.$N8, {
                  id: "backup-code-generation-dialog-loader-title",
                  title: u("team_members_generate_recovery_codes_dialog_loading_title", { memberLogin: t })
                }),
                (0, B.tZ)(c.a7O, null, (0, B.tZ)("div", { sx: { mt: "26px" } }, sd || (sd = (0, B.tZ)(oi.Z, { mode: "light", size: 75 }))))
              )
        );
      };
      var od = a(893383),
        rd = a(93437);
      const ld = ({ closeDialog: e, resendOrReactivate: t }) => {
          const { translate: a } = (0, g.Z)(),
            { showToast: s } = (0, l.pm)(),
            [i, o] = (0, n.useState)(!1),
            { getInviteLinkDataForAdmin: r, inviteLinkDataForAdmin: c } = (0, rd.h)(),
            d = !1 === c?.disabled,
            u = (0, ce.cI)(c?.teamKey);
          return (
            (0, n.useEffect)(() => {
              r();
            }, []),
            (0, l.tZ)(
              l.Vq,
              {
                title: a("team_members_reinvite_dialog_title"),
                isOpen: !0,
                onClose: e,
                closeActionLabel: "Closing dialog",
                actions: {
                  primary: {
                    isLoading: i,
                    disabled: i,
                    children: a("team_members_resend_invite_dialog_resend_confirm"),
                    onClick: async () => {
                      o(!0), await t(), o(!1), e();
                    }
                  },
                  secondary: d
                    ? {
                        children: a("team_members_resend_copy_invite_link"),
                        onClick: () => {
                          navigator.clipboard.writeText(u), s({ description: a("team_members_share_invite_link_copied"), mood: "brand" });
                        }
                      }
                    : void 0
                }
              },
              (0, l.tZ)(l.nv, null, a("team_members_resend_invite_dialog_message")),
              d
                ? (0, l.tZ)(
                    n.Fragment,
                    null,
                    (0, l.tZ)(l.nv, { textStyle: "ds.body.standard.regular" }, a("team_members_resend_invite_link_description")),
                    (0, l.tZ)(l.nv, { textStyle: "ds.body.standard.regular", sx: { textDecoration: "underline" } }, u)
                  )
                : null
            )
          );
        },
        cd = {
          REVOKE_ERROR_MSG: "team_members_revoke_error_message",
          REVOKE_SUCCESS_MSG: "team_members_revoke_success_message",
          SINGLE: {
            REVOKE_DIALOG_CONFIRM: "team_members_revoke_single_dialog_confirm",
            REVOKE_DIALOG_CANCEL: "team_members_revoke_single_dialog_cancel",
            REVOKE_DIALOG_MSG: "team_members_revoke_single_dialog_message",
            REVOKE_DIALOG_MSG_B2B_ONLY: "team_members_revoke_single_dialog_message_b2b_only",
            REVOKE_DIALOG_TITLE: "team_members_revoke_single_dialog_title"
          },
          MULTIPLE: {
            REVOKE_DIALOG_CONFIRM: "team_members_remove_multiple_dialog_confirm",
            REVOKE_DIALOG_CANCEL: "team_members_revoke_multiple_dialog_cancel",
            REVOKE_DIALOG_MSG: "team_members_revoke_multiple_dialog_message",
            REVOKE_DIALOG_MSG_B2B_ONLY: "team_members_revoke_multiple_dialog_message_b2b_only",
            REVOKE_DIALOG_TITLE: "team_members_remove_multiple_dialog_title"
          }
        },
        dd = ({ lee: e, closeDialog: t, selectedMembers: a }) => {
          const { translate: n } = (0, g.Z)(),
            s = (0, Wa.V)(),
            { reportTACError: i } = H(),
            o = (0, Wr.I)(),
            r = 1 === a.length,
            d = o.status !== se.rq.Success || !o.isDisabled,
            u = r ? cd.SINGLE : cd.MULTIPLE;
          return (0, l.tZ)(
            l.Vq,
            {
              isOpen: !0,
              onClose: t,
              isDestructive: !0,
              actions: {
                primary: {
                  children: n(u.REVOKE_DIALOG_CONFIRM),
                  onClick: async () => {
                    t();
                    const o = (0, Nn.v0)(e.globalState);
                    if (!o) return void i(new Error(ls.N));
                    const { teamId: r } = o;
                    if (r)
                      try {
                        const t = a.map((e) => e.login),
                          {
                            content: { removedMembers: i, unproposedMembers: l, refusedMembers: d }
                          } = await new Mn.Z().revokeMembers({ auth: o, memberLogins: t }),
                          u = Object.keys({ ...i, ...l });
                        u.forEach((t) => {
                          const n = a.find((e) => e.login === t);
                          e.dispatch(od.Rb(n));
                        }),
                          Object.keys(d).forEach((t) => {
                            const i = a.find((e) => e.login === t);
                            if (!i) throw new Error(`member '${t}' not found in members list`);
                            s.showAlert(n(cd.REVOKE_ERROR_MSG), c.BLW.ERROR), e.dispatch(od.Jo(i));
                          }),
                          u.length &&
                            (s.showAlert(n(cd.REVOKE_SUCCESS_MSG, { count: u.length }), c.BLW.SUCCESS),
                            await (0, cs.hh)({ teamId: r, action: "memberRevoked", users: u }));
                      } catch (e) {
                        i(e);
                      }
                  }
                },
                secondary: { children: n(u.REVOKE_DIALOG_CANCEL), onClick: t }
              },
              closeActionLabel: "",
              title: r ? n(cd.SINGLE.REVOKE_DIALOG_TITLE) : n(cd.MULTIPLE.REVOKE_DIALOG_TITLE, { count: a.length })
            },
            (0, l.tZ)(
              l.nv,
              { className: "automation-tests-revoke-member-dialog-content" },
              r
                ? n(d ? cd.SINGLE.REVOKE_DIALOG_MSG : cd.SINGLE.REVOKE_DIALOG_MSG_B2B_ONLY, { username: a[0].login || a[0].name })
                : n(d ? cd.MULTIPLE.REVOKE_DIALOG_MSG : cd.MULTIPLE.REVOKE_DIALOG_MSG_B2B_ONLY)
            )
          );
        };
      var ud;
      const _d = ({ closeDialog: e }) => {
          const { translate: t } = (0, g.Z)(),
            a = (0, Wa.V)(),
            { inviteLinkDataForAdmin: s, getInviteLinkDataForAdmin: i } = (0, rd.h)();
          (0, n.useEffect)(() => {
            i();
          }, [i]);
          const o = (0, ce.cI)(s?.teamKey);
          return (0, B.tZ)(
            q.o,
            {
              showCloseIcon: !0,
              isOpen: !0,
              footer: (0, B.tZ)(c.cNS, {
                intent: "primary",
                primaryButtonTitle: (0, B.tZ)(
                  n.Fragment,
                  null,
                  ud || (ud = (0, B.tZ)(l.JO, { name: "ActionCopyOutlined", size: "medium", color: "ds.text.inverse.catchy" })),
                  t("team_memebers_share_link_dialog_copy_link_button")
                ),
                primaryButtonOnClick: async () => {
                  await navigator.clipboard.writeText(o), a.showAlert(t("team_members_share_invite_link_copied"), c.BLW.SUCCESS);
                }
              }),
              onRequestClose: e,
              title: t("team_memebers_share_link_dialog_title")
            },
            (0, B.tZ)(
              n.Fragment,
              null,
              (0, B.tZ)(c.nvN, null, t("team_memebers_share_link_dialog_paragraph")),
              (0, B.tZ)(c.nvN, { sx: { marginTop: "16px", fontWeight: "600" } }, o)
            )
          );
        },
        md = ({ membersWithoutPublicKey: e, onClose: t }) => {
          const { translate: a } = (0, g.Z)();
          return (0, B.tZ)(
            q.o,
            {
              isOpen: Boolean(e.length),
              footer: (0, B.tZ)(c.cNS, {
                intent: "secondary",
                secondaryButtonTitle: a("team_members_error_popup_public_keys_ok"),
                secondaryButtonOnClick: t
              }),
              onRequestClose: t,
              title: a("team_members_error_popup_public_keys_title")
            },
            (0, B.tZ)(
              "div",
              null,
              a("team_members_error_popup_public_keys_message"),
              (0, B.tZ)(
                "ul",
                { sx: { listStyleType: "disc", paddingLeft: "40px", marginTop: "1em", marginBottom: "1em" } },
                e.map(({ login: e }) => (0, B.tZ)("li", { key: e }, e))
              )
            )
          );
        },
        pd = ({ closeDialog: e, applyActionOnMembers: t }) => {
          const { translate: a } = (0, g.Z)(),
            s = (0, Wa.V)(),
            { getInviteLinkDataForAdmin: i, inviteLinkDataForAdmin: o, createInviteLink: r, toggleInviteLink: l } = (0, rd.h)(),
            d = cn();
          return (
            (0, n.useEffect)(() => {
              i();
            }, [i]),
            d
              ? (0, B.tZ)(
                  q.o,
                  {
                    showCloseIcon: !0,
                    isOpen: !0,
                    footer: (0, B.tZ)(c.cNS, {
                      intent: "primary",
                      primaryButtonTitle: a("team_activation_dialog_activate_button"),
                      primaryButtonOnClick: () =>
                        (async () => {
                          o?.teamKey ? o?.disabled && (await l(!1)) : await r(d),
                            s.showAlert(a("team_activation_dialog_notification"), c.BLW.SUCCESS),
                            await i(),
                            t("shareInviteLink");
                        })(),
                      secondaryButtonTitle: a("team_activation_dialog_notrightnow_button"),
                      secondaryButtonOnClick: e
                    }),
                    onRequestClose: e,
                    title: a("team_activation_dialog_title")
                  },
                  (0, B.tZ)(c.nvN, null, a("team_activation_dialog_paragrah"))
                )
              : null
          );
        };
      var gd = a(918007),
        yd = a(909748);
      const hd = {
          teamCaptain: "team_members_assignment_dialog_admin_description",
          groupManager: "team_members_assignment_dialog_group_manager_description",
          member: "team_members_assignment_dialog_member_description"
        },
        bd = ({ member: e, newRole: t, updateUsersRights: a, closeDialog: s }) => {
          const { translate: i } = (0, g.Z)(),
            o = (0, Wa.V)(),
            r = (0, yd.U)(),
            d = fd(e),
            [u, _] = (0, n.useState)(null != t ? t : d);
          return null === r
            ? null
            : (0, l.tZ)(
                c.VqE,
                { isOpen: !0, onClose: s, closeIconName: i("_common_dialog_dismiss_button") },
                (0, l.tZ)(c.$N8, { title: i("team_members_assignment_dialog_title", { user: e.login }) }),
                (0, l.tZ)(
                  c.a7O,
                  null,
                  (0, l.tZ)(
                    ds.S,
                    {
                      value: u,
                      onChange: (e) => {
                        _(e.target.value);
                      },
                      groupName: "roles"
                    },
                    Object.values(vd).map((e) => {
                      return (0, l.tZ)(
                        ds.E,
                        { key: e, value: e, disabled: ((t = e), !(!r || t === vd.TeamCaptain || t === u)) },
                        (0, l.tZ)(c.nvN, { color: "ds.text.neutral.standard", size: "small" }, i(Cd[e])),
                        (0, l.tZ)(c.nvN, { color: "ds.text.neutral.quiet", size: "small" }, i(hd[e]))
                      );
                      var t;
                    })
                  ),
                  u !== vd.Member ? (0, l.tZ)(l.ke, { mood: "brand", title: i("team_members_assignment_dialog_groups_infobox") }) : null
                ),
                (0, l.tZ)(c.cNS, {
                  primaryButtonTitle: i("team_members_assignment_dialog_update_button"),
                  primaryButtonOnClick: async () => {
                    if (u === d) return s();
                    try {
                      const t = await a([{ member: e, oldRole: d, newRole: u }]);
                      if (!t) return;
                      if (t.successes.length)
                        o.showAlert(
                          i("team_members_assignment_single_success", {
                            username: e.name || e.login || "Member",
                            previousRole: i(Cd[d]),
                            newRole: i(Cd[u])
                          }),
                          c.BLW.SUCCESS
                        );
                      else if (t.errors.length) throw t.errors[0].error;
                    } catch {
                      o.showAlert(i("team_members_assignment_single_error", { username: e.name || e.login || "Member" }), c.BLW.ERROR);
                    } finally {
                      s();
                    }
                  },
                  primaryButtonProps: { type: "button", style: { padding: "0 20px" }, disabled: u === d },
                  secondaryButtonTitle: i("team_members_assignment_dialog_cancel_button"),
                  secondaryButtonOnClick: s,
                  secondaryButtonProps: {
                    type: "button",
                    style: {
                      border: "none",
                      padding: "0 20px",
                      color: "ds.text.neutral.catchy",
                      backgroundColor: "ds.container.expressive.neutral.quiet.idle"
                    }
                  }
                })
              );
        },
        xd = "team_members_assignment_multiple_error",
        Sd = ({ selectedMembers: e, newRole: t, updateUsersRights: a, closeDialog: n }) => {
          const { translate: s } = (0, g.Z)(),
            i = (0, Wa.V)();
          return (0, l.tZ)(
            q.o,
            {
              isOpen: !0,
              footer: (0, l.tZ)(c.cNS, {
                intent: "primary",
                primaryButtonTitle: s("team_members_assignment_multiple_dialog_submit"),
                primaryButtonOnClick: async () => {
                  const o = e.map((e) => ({ member: e, oldRole: fd(e), newRole: t }));
                  try {
                    const e = await a(o);
                    if (!e) return;
                    const n = s(Cd[t]);
                    e.successes.length && e.errors.length
                      ? i.showAlert(
                          s("team_members_assignment_multiple_partial_success", {
                            countSuccess: e.successes.length,
                            countTotal: o.length,
                            newRole: n
                          }),
                          c.BLW.WARNING
                        )
                      : e.successes.length
                      ? i.showAlert(s("team_members_assignment_multiple_success", { count: e.successes.length, newRole: n }), c.BLW.SUCCESS)
                      : e.errors.length && i.showAlert(s(xd, { count: e.errors.length }), c.BLW.ERROR);
                  } catch {
                    i.showAlert(s(xd, { count: e.length }), c.BLW.ERROR);
                  } finally {
                    n();
                  }
                },
                secondaryButtonTitle: s("team_members_assignment_multiple_dialog_cancel"),
                secondaryButtonOnClick: n
              }),
              onRequestClose: n,
              title: s("team_members_assignment_multiple_dialog_title", { countTotal: e.length, newRole: s(Cd[t]) })
            },
            (() => {
              switch (t) {
                case vd.TeamCaptain:
                  return s("team_members_assignment_multiple_dialog_admin_message");
                case vd.GroupManager:
                  return s("team_members_assignment_multiple_dialog_group_manager_message");
                default:
                  return s("team_members_assignment_multiple_dialog_member_message");
              }
            })()
          );
        };
      let vd = (function (e) {
        return (e.TeamCaptain = "teamCaptain"), (e.GroupManager = "groupManager"), (e.Member = "member"), e;
      })({});
      const fd = (e) => (e.isTeamCaptain ? vd.TeamCaptain : e.isGroupManager ? vd.GroupManager : vd.Member),
        Cd = {
          teamCaptain: "team_members_assignment_dialog_admin_label",
          groupManager: "team_members_assignment_dialog_group_manager_label",
          member: "team_members_assignment_dialog_member_label"
        },
        Zd = ({ selectedMembers: e, newRole: t, lee: a, closeDialog: n }) => {
          const { reportTACError: s } = H(),
            { translate: i } = (0, g.Z)(),
            { addGroupManager: o, removeGroupManager: r } = (0, $e.u)(gd.J),
            d = async (e) => {
              const t = (0, Nn.v0)(a.globalState);
              if (!t) return void s(new Error(ls.N));
              const { teamId: n } = t;
              if (!n) throw new Error("No team ID when attempting role assignment");
              const i = { errors: [], successes: [] };
              for await (const { member: t, oldRole: s, newRole: l } of e)
                try {
                  switch (s) {
                    case vd.TeamCaptain:
                      await (0, cs.Lx)({ teamId: n, memberLogin: t.login }),
                        a.dispatch(od.bj(t)),
                        await (0, cs.hh)({ teamId: n, action: "adminDemoted", users: [t.login] });
                      break;
                    case vd.GroupManager:
                      await r({ memberLogin: t.login, teamId: n }), a.dispatch(od.vE(t));
                  }
                  switch (l) {
                    case vd.TeamCaptain:
                      await (0, cs.JQ)({ teamId: n, memberLogin: t.login }),
                        a.dispatch(od.VW(t)),
                        await (0, cs.hh)({ teamId: n, action: "adminPromoted", users: [t.login] });
                      break;
                    case vd.GroupManager:
                      await o({ memberLogin: t.login, teamId: n }), a.dispatch(od.lp(t));
                  }
                  i.successes.push(t.login);
                } catch (e) {
                  i.errors.push({ member: t.login, error: e });
                }
              return i;
            };
          return e.length
            ? 1 === e.length
              ? (0, l.tZ)(bd, { member: e[0], newRole: t, updateUsersRights: d, closeDialog: n })
              : (0, l.tZ)(Sd, { selectedMembers: e, newRole: null != t ? t : vd.Member, updateUsersRights: d, closeDialog: n })
            : (0, l.tZ)(
                q.o,
                {
                  isOpen: !0,
                  footer: (0, l.tZ)(c.cNS, {
                    intent: "secondary",
                    secondaryButtonTitle: i("team_members_assignment_nobody_dialog_cancel"),
                    secondaryButtonOnClick: n
                  }),
                  onRequestClose: n,
                  title: i("team_members_assignment_nobody_dialog_title")
                },
                i("team_members_assignment_nobody_dialog_message", { newRole: t ? i(Cd[t]) : "" })
              );
        },
        Ed = (e) => e.filter((e) => ["pending", "proposed"].includes(e.status));
      var Dd;
      const Td = ({ title: e, titleColor: t, subtitle: a, action: n, isLoading: s }) =>
          (0, l.tZ)(
            "div",
            { sx: { display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "16px", flex: 1 } },
            s
              ? Dd || (Dd = (0, l.tZ)(l.ZX, { mood: "brand" }))
              : (0, l.tZ)(l.nv, { textStyle: "ds.specialty.monospace.medium", color: null != t ? t : "ds.text.neutral.quiet" }, e),
            (0, l.tZ)(l.nv, { as: "h2", textStyle: "ds.body.standard.regular", color: "ds.text.neutral.quiet" }, a),
            (0, l.tZ)(
              l.zx,
              { disabled: n.disabled, mood: n.mood, intensity: n.intensity, onClick: n.onClick, layout: "iconTrailing", icon: n.icon },
              n.label
            )
          ),
        Nd = ({ onReinviteAllClick: e }) => {
          const { translate: t } = (0, g.Z)(),
            { routes: a } = (0, i.Xo)(),
            s = (0, i.k6)(),
            { data: r, status: c } = (0, d.k)(_r.B, "getReport"),
            { openDialog: u, shouldShowTrialDiscontinuedDialog: _ } = (0, T.yp)(),
            [m, p] = (0, n.useState)(!0),
            [y, h] = (0, n.useState)(0),
            [b, x] = (0, n.useState)(0),
            [S, v] = (0, n.useState)(0),
            [f, C] = (0, n.useState)(0),
            [Z, E] = (0, n.useState)(0),
            [D, N] = (0, n.useState)(!0);
          return (
            (0, n.useEffect)(() => {
              "success" === c &&
                null !== _ &&
                (C(r.seats.pending),
                h(r.seats.provisioned - r.seats.used),
                x(r.seats.provisioned),
                v(r.seats.used / r.seats.provisioned),
                E(r.passwordHealth.securityIndex),
                p(!1),
                N(0 === r.seats.pending && 1 === r.seats.used));
            }, [r, c, _]),
            (0, l.tZ)(
              "div",
              {
                sx: {
                  display: "flex",
                  flexDirection: "column",
                  gap: "24px",
                  backgroundColor: "ds.container.agnostic.neutral.supershy",
                  border: "1px solid ds.border.neutral.quiet.idle",
                  borderRadius: "8px",
                  padding: "24px"
                }
              },
              (0, l.tZ)(
                l.X6,
                { as: "h2", textStyle: "ds.title.supporting.small", color: "ds.text.neutral.quiet" },
                t("team_members_summary_title")
              ),
              (0, l.tZ)(
                "div",
                { sx: { display: "flex", flexDirection: "row", justifyContent: "space-between", gap: "24px" } },
                (0, l.tZ)(Td, {
                  isLoading: m,
                  title: `${y}`,
                  titleColor: S <= 0.5 ? "ds.text.positive.quiet" : S <= 0.9 ? "ds.text.warning.quiet" : "ds.text.danger.quiet",
                  subtitle: t("team_members_summary_seat_count_content", { totalSeats: b }),
                  action: {
                    label: t("team_members_summary_seat_count_cta"),
                    disabled: m,
                    mood: "brand",
                    intensity: S > 0.5 ? "catchy" : "quiet",
                    onClick: () => {
                      (0, P.Kz)(new o.UserClickEvent({ button: o.Button.BuySeats, clickOrigin: o.ClickOrigin.UsersSummary })),
                        _ ? u() : s.push(a.teamAccountRoutePath);
                    }
                  }
                }),
                (0, l.tZ)("div", { sx: { width: "1px", backgroundColor: "ds.border.neutral.quiet.idle" } }),
                (0, l.tZ)(Td, {
                  isLoading: m,
                  title: `${f || (D ? "-" : t("team_members_summary_reinvite_users_no_new_invites_label"))}`,
                  titleColor: D ? "ds.text.neutral.quiet" : 0 === f ? "ds.text.positive.quiet" : "ds.text.warning.quiet",
                  subtitle:
                    0 === f
                      ? t(
                          D
                            ? "team_members_summary_reinvite_users_no_members_content"
                            : "team_members_summary_reinvite_users_no_new_invites_content"
                        )
                      : t("team_members_summary_reinvite_users_content", { count: f }),
                  action: {
                    label: t("team_members_summary_reinvite_users_cta", { count: f }),
                    mood: "neutral",
                    intensity: "quiet",
                    disabled: m || 0 === f,
                    onClick: () => {
                      (0, P.Kz)(new o.UserClickEvent({ button: o.Button.ReInviteUsers, clickOrigin: o.ClickOrigin.UsersSummary })),
                        _ ? u() : e();
                    }
                  }
                }),
                (0, l.tZ)("div", { sx: { width: "1px", backgroundColor: "ds.border.neutral.quiet.idle" } }),
                (0, l.tZ)(Td, {
                  isLoading: m,
                  title: `${Z || "-"}`,
                  titleColor:
                    Z >= 80
                      ? "ds.text.positive.quiet"
                      : Z >= 40
                      ? "ds.text.warning.quiet"
                      : Z > 0
                      ? "ds.text.danger.quiet"
                      : "ds.text.neutral.quiet",
                  subtitle: t(
                    !Z || m ? "team_members_summary_security_score_content_no_data" : "team_members_summary_security_score_content"
                  ),
                  action: {
                    label: t("team_members_summary_security_score_cta"),
                    mood: "neutral",
                    intensity: "quiet",
                    icon: "ActionOpenExternalLinkOutlined",
                    onClick: () => {
                      (0, P.Kz)(
                        new o.UserClickEvent({ button: o.Button.CheckImproveHealthScore, clickOrigin: o.ClickOrigin.UsersSummary })
                      ),
                        (0, j.Yo)(
                          "https://support.dashlane.com/hc/en-us/articles/360016225300-Manage-the-Password-Health-of-your-Starter-Team-or-Business-plan"
                        );
                    }
                  }
                })
              )
            )
          );
        };
      var Md = a(196266),
        Id = a(428746),
        wd = a(89368);
      const kd = ({ title: e, icon: t, description: a, onClick: n, key: s }) =>
        (0, l.tZ)(
          c.W7o,
          { key: s, fullWidth: !0, onClick: n, sx: { height: "auto", textAlign: "left" } },
          (0, l.tZ)(
            c.T5p,
            { gap: "4px", gridTemplateColumns: "20px auto", gridTemplateRows: "auto auto" },
            (0, l.tZ)(c.dDn, null, (0, l.tZ)(l.JO, { name: t, size: "medium" })),
            (0, l.tZ)(c.dDn, null, (0, l.tZ)(l.nv, { as: "span", textStyle: "ds.body.standard.strong" }, e)),
            a
              ? (0, l.tZ)(
                  c.dDn,
                  { gridArea: "2 / 2 / 3 / 3", sx: { textWrap: "wrap" } },
                  (0, l.tZ)(l.nv, { as: "span", color: "ds.text.neutral.quiet", textStyle: "ds.title.block.small" }, a)
                )
              : null
          )
        );
      var Ad;
      const Od = ({ members: e, onMembersActionSelect: t }) => {
        const { translate: a } = (0, g.Z)(),
          { getInviteLinkDataForAdmin: n } = (0, rd.h)(),
          s = (0, Ce.o)(G.w.OnboardingWebTeamsignuppage);
        return (0, l.tZ)(
          c.h_2,
          {
            sx: { zIndex: 1001 },
            content: [
              (0, l.tZ)(kd, {
                key: "resendInvite",
                onClick: () => {
                  t("reinviteAll", Ed(e));
                },
                icon: "NotificationOutlined",
                title: a("team_members_resend_invite_all")
              }),
              !!s &&
                (0, l.tZ)(kd, {
                  key: "shareInviteLink",
                  onClick: async () => {
                    const e = await n();
                    t(!e?.teamKey || e?.disabled ? "enableInviteLink" : "shareInviteLink");
                  },
                  icon: "ActionCopyOutlined",
                  title: a("team_members_share_invite_link")
                }),
              (0, l.tZ)(kd, {
                key: "exportUserCSV",
                onClick: () => {
                  (0, P.Kz)(new o.UserClickEvent({ button: o.Button.DownloadCsv })),
                    ((e) => {
                      (0, Ki.S)(
                        ((e) => {
                          const t = e
                            .map((e) => {
                              var t, a, n, s;
                              return [
                                e.login,
                                e.status,
                                e.twoFAInformation.type,
                                null != (t = e.nbrPasswords) ? t : 0,
                                null != (a = e.weakPasswords) ? a : 0,
                                null != (n = e.reused) ? n : 0,
                                null != (s = e.compromisedPasswords) ? s : 0,
                                e.nbrPasswords >= 5 ? e.securityIndex : "unavailable",
                                e.ssoStatus,
                                e.recoveryCreationDateUnix ? "enabled" : "disabled"
                              ].join(",");
                            })
                            .join("\n");
                          return `${[
                            "login email",
                            "status",
                            "twoFA_Status",
                            "number_passwords",
                            "weak_passwords",
                            "reused_passwords",
                            "compromised_passwords",
                            "password_health_score",
                            "sso_status",
                            "admin_recovery_status"
                          ].join(",")}\n${t}`;
                        })(e),
                        "team-members.csv",
                        "text/csv;charset=utf-8"
                      );
                    })(e);
                },
                icon: "DownloadOutlined",
                title: a("team_members_download_csv"),
                description: a("team_members_download_csv_description")
              })
            ].filter(Boolean)
          },
          (0, l.tZ)(l.zx, {
            id: "expand-invite-option",
            intensity: "quiet",
            mood: "neutral",
            size: "medium",
            layout: "iconOnly",
            sx: { marginLeft: "16px" },
            icon: Ad || (Ad = (0, l.tZ)(l.JO, { name: "ActionMoreOutlined", size: "medium", color: "ds.text.neutral.standard" }))
          })
        );
      };
      var Ld = a(57341),
        zd = a(207867);
      const jd = ({ onMultipleReassignActionSelect: e }) => {
        const { translate: t } = (0, g.Z)(),
          { openDialog: a, shouldShowTrialDiscontinuedDialog: s } = (0, T.yp)(),
          [i, o] = n.useState(!1),
          r = (t) => {
            s && t !== vd.TeamCaptain ? a() : e(t), o(!1);
          };
        return n.createElement(
          zd.j,
          {
            onOutsideClick: () => {
              o(!1);
            }
          },
          n.createElement(
            "div",
            { className: "container--zGfanmJ20J" },
            n.createElement(Ld.Z, {
              label: t("team_members_bulk_actions_menu_label"),
              onClick: () => {
                o(!i);
              },
              classNames: ["dropdownButton--eX1Pwf6noX"],
              icon: n.createElement("img", {
                className: A()("buttonIcon--K7qOhGWIeC", { "flip--CjjllwCv0e": i }),
                src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iNiIgdmlld0JveD0iMCAwIDEwIDYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZD0iTTkuNSAwLjVMNSA1LjVMMC41IDAuNSIgc3Ryb2tlPSIjNkU4NjhCIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg=="
              }),
              iconClassName: ["iconContainer--_MWkwTD793"],
              iconPosition: "right"
            }),
            i
              ? n.createElement(
                  "ul",
                  { className: "menu--svPbw6Qghp" },
                  n.createElement("li", { key: "admin", onClick: () => r(vd.TeamCaptain) }, t("team_members_bulk_actions_menu_admin")),
                  n.createElement(
                    "li",
                    { key: "groupManager", onClick: () => r(vd.GroupManager) },
                    t("team_members_bulk_actions_menu_group_manager")
                  ),
                  n.createElement("li", { key: "member", onClick: () => r(vd.Member) }, t("team_members_bulk_actions_menu_member"))
                )
              : null
          )
        );
      };
      var Rd = (function (e) {
        return (
          (e[(e.TEAM_CAPTAIN = 0)] = "TEAM_CAPTAIN"),
          (e[(e.GROUP_MANAGER = 1)] = "GROUP_MANAGER"),
          (e[(e.BILLING_ADMIN = 2)] = "BILLING_ADMIN"),
          (e[(e.ACCEPTED = 3)] = "ACCEPTED"),
          (e[(e.PENDING_PROPOSED = 4)] = "PENDING_PROPOSED"),
          (e[(e.DEFAULT = 5)] = "DEFAULT"),
          e
        );
      })(Rd || {});
      const Pd = ({ isTeamCaptain: e, isBillingAdmin: t, isGroupManager: a, status: n }) => {
          switch (!0) {
            case e:
              return Rd.TEAM_CAPTAIN;
            case a:
              return Rd.GROUP_MANAGER;
            case t:
              return Rd.BILLING_ADMIN;
            case "accepted" === n:
              return Rd.ACCEPTED;
            case ["pending", "proposed"].includes(n):
              return Rd.PENDING_PROPOSED;
            default:
              return Rd.DEFAULT;
          }
        },
        Ud = (e, t) => ("number" == typeof e ? e : t && ["pending", "removed"].includes(t) ? -1 : 0),
        Bd = (e) =>
          e.map((e) => ({
            ...e,
            filterableStatus: "proposed" === e.status ? "pending" : e.status,
            sortableLastActivity: e.revokedDateUnix || e.lastUpdateDateUnix || 0,
            sortablePasswords: Ud(e.nbrPasswords, e.status),
            sortableRights: Pd(e),
            sortableSecurityScore: Ud(e.securityIndex, e.status),
            sortableSafePasswords: Ud(e.safePasswords, e.status),
            sortableWeakPasswords: Ud(e.weakPasswords, e.status),
            sortableReused: Ud(e.reused, e.status),
            sortableCompromisedPasswords: Ud(e.compromisedPasswords, e.status)
          }));
      var Gd = a(233377),
        Fd = a(573630),
        qd = a(915622);
      const $d = ({ member: e, onDismiss: t, onMemberActionSelect: a }) => {
          const { translate: n } = (0, g.Z)(),
            s =
              !!e.twoFAInformation && ("totp_device_registration" === e.twoFAInformation.type || "totp_login" === e.twoFAInformation.type);
          return (0, l.tZ)(
            zd.j,
            { onOutsideClick: t },
            (0, l.tZ)(
              "ul",
              { className: "menu--tp5V4puFsY" },
              (() => {
                if ("removed" === e.status)
                  return (0, l.tZ)(
                    "li",
                    { key: "reactivate", id: "reactivate-quick-action", onClick: () => a("reactivate", e) },
                    (0, l.tZ)(l.JO, { name: "ItemEmailOutlined", color: "ds.text.neutral.quiet", sx: { marginRight: "16px" } }),
                    n("team_members_reactivate_single_label")
                  );
                const t = [];
                return (
                  ("pending" !== e.status && "proposed" !== e.status) ||
                    t.push(
                      (0, l.tZ)(
                        "li",
                        { key: "resendInvite", id: "reinvite-quick-action", onClick: () => a("reinvite", e) },
                        (0, l.tZ)(l.JO, { name: "ItemEmailOutlined", color: "ds.text.neutral.quiet", sx: { marginRight: "16px" } }),
                        n("team_members_resend_invite_label")
                      )
                    ),
                  "pending" !== e.status &&
                    "proposed" !== e.status &&
                    t.push(
                      (0, l.tZ)(
                        "li",
                        { key: "reassign", id: "reassign-quick-action", onClick: () => a("reassign", e) },
                        (0, l.tZ)(l.JO, { name: "ItemPersonalInfoOutlined", color: "ds.text.neutral.quiet", sx: { marginRight: "16px" } }),
                        n("team_members_change_role_label")
                      )
                    ),
                  t.push(
                    (0, l.tZ)(
                      l.u,
                      {
                        key: "revoke",
                        content: n("team_members_assignment_dialog_remove_billing_contact_tooltip"),
                        location: "top",
                        passThrough: !e.isBillingAdmin,
                        sx: { whiteSpace: "normal" }
                      },
                      (0, l.tZ)(
                        "li",
                        {
                          key: "revoke",
                          id: "revoke-quick-action",
                          onClick: e.isBillingAdmin ? void 0 : () => a("revoke", e),
                          sx: e.isBillingAdmin ? { cursor: "not-allowed !important", opacity: "0.5" } : void 0
                        },
                        (0, l.tZ)(l.JO, { name: "ActionDeleteOutlined", color: "ds.text.neutral.quiet", sx: { marginRight: "16px" } }),
                        n("team_members_revoke_single_label")
                      )
                    )
                  ),
                  s &&
                    "pending" !== e.status &&
                    "proposed" !== e.status &&
                    t.push(
                      (0, l.tZ)(
                        "li",
                        {
                          key: "generate2FABackupCodes",
                          id: "generate-2fa-recovery-code-quick-action",
                          onClick: () => a("generateBackupCode", e)
                        },
                        (0, l.tZ)(l.JO, { name: "RecoveryKeyOutlined", color: "ds.text.neutral.quiet", sx: { marginRight: "16px" } }),
                        n("team_members_generate_recovery_codes_label")
                      )
                    ),
                  t
                );
              })()
            )
          );
        },
        Vd = "securityScoreOver80--Hgr2G6S0v_",
        Wd = "securityScoreOver60--_JHvGMsVMu",
        Hd = "securityScoreOver40--uopteVjbhe",
        Kd = "securityScoreOver20--DGwlRT6aTn",
        Yd = "securityScoreOver0--KWOlPM746R",
        Qd = "securityScoreUnknown--X1UUUGTTOI",
        Xd = "box--b300GjbePX",
        Jd = "shield--aR0K8YOyOo",
        eu = "medium--oK53lyprG3",
        tu = "small--Y3Ur7GidSI",
        au = ({ score: e, size: t, children: a }) => {
          const s = "small" === t ? tu : eu;
          return n.createElement(
            "div",
            {
              className: A()(
                Xd,
                ((i = e), i.caseOf({ nothing: () => Qd, just: (e) => (e >= 80 ? Vd : e >= 60 ? Wd : e >= 40 ? Hd : e >= 20 ? Kd : Yd) })),
                s
              )
            },
            n.createElement("div", { className: Jd }),
            n.createElement("div", null, a)
          );
          var i;
        };
      var nu;
      const su = () =>
        nu ||
        (nu = (0, l.tZ)(
          "svg",
          { width: "368", height: "226", viewBox: "0 0 368 226", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
          (0, l.tZ)("rect", { width: "368", height: "226", rx: "2", fill: "#EFF0F0" }),
          (0, l.tZ)("path", {
            d: "M52 32C52 27.5817 55.5817 24 60 24H308C312.418 24 316 27.5817 316 32V192H52V32Z",
            fill: "#6EA2AD",
            fillOpacity: "0.2"
          }),
          (0, l.tZ)("rect", { x: "36", y: "192", width: "296", height: "10", rx: "5", fill: "#6EA2AD", fillOpacity: "0.2" }),
          (0, l.tZ)("path", { d: "M60 34C60 32.8954 60.8954 32 62 32H306C307.105 32 308 32.8954 308 34V192H60V34Z", fill: "white" }),
          (0, l.tZ)("rect", { x: "76", y: "54", width: "8", height: "8", rx: "4", fill: "#D9DFE0" }),
          (0, l.tZ)("rect", { x: "88", y: "56", width: "23", height: "4", rx: "2", fill: "#D9DFE0" }),
          (0, l.tZ)("rect", { x: "122", y: "54", width: "8", height: "8", rx: "4", fill: "#D9DFE0" }),
          (0, l.tZ)("rect", { x: "134", y: "56", width: "23", height: "4", rx: "2", fill: "#D9DFE0" }),
          (0, l.tZ)("rect", { x: "168", y: "54", width: "8", height: "8", rx: "4", fill: "#D9DFE0" }),
          (0, l.tZ)("rect", { x: "180", y: "56", width: "23", height: "4", rx: "2", fill: "#D9DFE0" }),
          (0, l.tZ)("rect", { x: "250", y: "52", width: "26", height: "12", rx: "4", fill: "#0E6173" }),
          (0, l.tZ)("rect", { x: "280", y: "52", width: "12", height: "12", rx: "4", fill: "#A2A3A3", fillOpacity: "0.2" }),
          (0, l.tZ)("rect", { x: "76", y: "78", width: "8", height: "8", rx: "4", fill: "#D9DFE0" }),
          (0, l.tZ)("rect", { x: "88", y: "76", width: "12", height: "12", rx: "6", fill: "#3E5D64" }),
          (0, l.tZ)("rect", { x: "104", y: "78", width: "47", height: "8", rx: "4", fill: "#D9DFE0" }),
          (0, l.tZ)("rect", { x: "172", y: "78", width: "10", height: "8", rx: "4", fill: "#D9DFE0" }),
          (0, l.tZ)("rect", { x: "208", y: "78", width: "10", height: "8", rx: "4", fill: "#D9DFE0" }),
          (0, l.tZ)("rect", { x: "244", y: "78", width: "10", height: "8", rx: "4", fill: "#D9DFE0" }),
          (0, l.tZ)("rect", { x: "76", y: "98", width: "8", height: "8", rx: "4", fill: "#D9DFE0" }),
          (0, l.tZ)("rect", { x: "88", y: "96", width: "12", height: "12", rx: "6", fill: "#9FAEB1" }),
          (0, l.tZ)("rect", { x: "104", y: "98", width: "35", height: "8", rx: "4", fill: "#D9DFE0" }),
          (0, l.tZ)("rect", { x: "172", y: "98", width: "10", height: "8", rx: "4", fill: "#D9DFE0" }),
          (0, l.tZ)("rect", { x: "208", y: "98", width: "10", height: "8", rx: "4", fill: "#D9DFE0" }),
          (0, l.tZ)("rect", { x: "244", y: "98", width: "10", height: "8", rx: "4", fill: "#D9DFE0" }),
          (0, l.tZ)("path", {
            d: "M287 102C287 102.109 286.982 102.215 286.95 102.313L287.696 103.06C287.889 102.753 288 102.389 288 102C288 100.895 287.105 100 286 100C284.895 100 284 100.895 284 102C284 103.105 284.895 104 286 104C286.352 104 286.684 103.909 286.971 103.749L286.202 102.98C286.137 102.993 286.069 103 286 103C285.448 103 285 102.552 285 102C285 101.448 285.448 101 286 101C286.552 101 287 101.448 287 102Z",
            fill: "#232425",
            fillOpacity: "0.92"
          }),
          (0, l.tZ)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M285.052 97L284.648 98.5289C284.603 98.5474 284.558 98.5667 284.513 98.5868L283.128 97.8012L281.801 99.1279L282.577 100.496C282.553 100.548 282.53 100.602 282.509 100.655L281 101.066V102.959L282.526 103.362C282.545 103.41 282.564 103.456 282.585 103.501L281.801 104.884L283.128 106.21L284.495 105.435C284.549 105.459 284.602 105.481 284.656 105.503L285.067 107H286.959L287.361 105.489C287.41 105.47 287.459 105.45 287.507 105.43L288.884 106.21L290.21 104.884L289.431 103.51C289.453 103.46 289.473 103.409 289.492 103.358L291 102.944V101.052L289.481 100.648C289.462 100.604 289.442 100.561 289.422 100.519L290.21 99.1279L288.884 97.8012L287.51 98.58C287.46 98.5587 287.41 98.5385 287.359 98.5194L286.945 97H285.052ZM284.227 99.5741C284.253 99.5884 284.279 99.6003 284.305 99.6099C284.44 99.6678 284.6 99.6656 284.74 99.5901C284.894 99.5069 285.055 99.4377 285.221 99.3832L285.479 99.2986L285.822 98H286.181L286.537 99.3085L286.805 99.3876C286.979 99.4391 287.148 99.5067 287.31 99.5896C287.488 99.6808 287.695 99.655 287.843 99.5405L288.715 99.0465L288.965 99.2968L288.437 100.227L288.442 100.23C288.363 100.352 288.337 100.507 288.386 100.657L288.419 100.758L288.44 100.798C288.529 100.962 288.577 101.064 288.628 101.221L288.713 101.479L290 101.821V102.182L288.703 102.538L288.624 102.805C288.572 102.979 288.505 103.148 288.422 103.31C288.331 103.488 288.356 103.695 288.471 103.844L288.965 104.715L288.715 104.965L287.866 104.484C287.716 104.353 287.494 104.32 287.306 104.418C287.145 104.503 286.975 104.572 286.801 104.625L286.535 104.706L286.19 106H285.829L285.565 105.036C285.533 104.814 285.354 104.639 285.13 104.612C284.986 104.562 284.846 104.5 284.711 104.427C284.532 104.33 284.319 104.354 284.167 104.471L283.297 104.965L283.046 104.715L283.528 103.866C283.604 103.778 283.65 103.663 283.65 103.538V103.396L283.593 103.287C283.503 103.114 283.437 102.965 283.387 102.801L283.305 102.534L282 102.189V101.83L283.039 101.547L283.032 101.521C283.22 101.473 283.365 101.319 283.4 101.126C283.451 100.983 283.513 100.845 283.585 100.711C283.682 100.531 283.657 100.317 283.539 100.165L283.046 99.2968L283.297 99.0465L284.227 99.5741Z",
            fill: "#232425",
            fillOpacity: "0.92"
          }),
          (0, l.tZ)("rect", { x: "76", y: "118", width: "8", height: "8", rx: "4", fill: "#D9DFE0" }),
          (0, l.tZ)("rect", { x: "88", y: "116", width: "12", height: "12", rx: "6", fill: "#3E5D64" }),
          (0, l.tZ)("rect", { x: "104", y: "118", width: "47", height: "8", rx: "4", fill: "#D9DFE0" }),
          (0, l.tZ)("rect", { x: "172", y: "118", width: "10", height: "8", rx: "4", fill: "#D9DFE0" }),
          (0, l.tZ)("rect", { x: "208", y: "118", width: "10", height: "8", rx: "4", fill: "#D9DFE0" }),
          (0, l.tZ)("rect", { x: "244", y: "118", width: "10", height: "8", rx: "4", fill: "#D9DFE0" }),
          (0, l.tZ)("path", {
            d: "M287 122C287 122.109 286.982 122.215 286.95 122.313L287.696 123.06C287.889 122.753 288 122.389 288 122C288 120.895 287.105 120 286 120C284.895 120 284 120.895 284 122C284 123.105 284.895 124 286 124C286.352 124 286.684 123.909 286.971 123.749L286.202 122.98C286.137 122.993 286.069 123 286 123C285.448 123 285 122.552 285 122C285 121.448 285.448 121 286 121C286.552 121 287 121.448 287 122Z",
            fill: "#232425",
            fillOpacity: "0.92"
          }),
          (0, l.tZ)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M285.052 117L284.648 118.529C284.603 118.547 284.558 118.567 284.513 118.587L283.128 117.801L281.801 119.128L282.577 120.496C282.553 120.548 282.53 120.602 282.509 120.655L281 121.066V122.959L282.526 123.362C282.545 123.41 282.564 123.456 282.585 123.501L281.801 124.884L283.128 126.21L284.495 125.435C284.549 125.459 284.602 125.481 284.656 125.503L285.067 127H286.959L287.361 125.489C287.41 125.47 287.459 125.45 287.507 125.43L288.884 126.21L290.21 124.884L289.431 123.51C289.453 123.46 289.473 123.409 289.492 123.358L291 122.944V121.052L289.481 120.648C289.462 120.604 289.442 120.561 289.422 120.519L290.21 119.128L288.884 117.801L287.51 118.58C287.46 118.559 287.41 118.539 287.359 118.519L286.945 117H285.052ZM284.227 119.574C284.253 119.588 284.279 119.6 284.305 119.61C284.44 119.668 284.6 119.666 284.74 119.59C284.894 119.507 285.055 119.438 285.221 119.383L285.479 119.299L285.822 118H286.181L286.537 119.309L286.805 119.388C286.979 119.439 287.148 119.507 287.31 119.59C287.488 119.681 287.695 119.655 287.843 119.54L288.715 119.047L288.965 119.297L288.437 120.227L288.442 120.23C288.363 120.352 288.337 120.507 288.386 120.657L288.419 120.758L288.44 120.798C288.529 120.962 288.577 121.064 288.628 121.221L288.713 121.479L290 121.821V122.182L288.703 122.538L288.624 122.805C288.572 122.979 288.505 123.148 288.422 123.31C288.331 123.488 288.356 123.695 288.471 123.844L288.965 124.715L288.715 124.965L287.866 124.484C287.716 124.353 287.494 124.32 287.306 124.418C287.145 124.503 286.975 124.572 286.801 124.625L286.535 124.706L286.19 126H285.829L285.565 125.036C285.533 124.814 285.354 124.639 285.13 124.612C284.986 124.562 284.846 124.5 284.711 124.427C284.532 124.33 284.319 124.354 284.167 124.471L283.297 124.965L283.046 124.715L283.528 123.866C283.604 123.778 283.65 123.663 283.65 123.538V123.396L283.593 123.287C283.503 123.114 283.437 122.965 283.387 122.801L283.305 122.534L282 122.189V121.83L283.039 121.547L283.032 121.521C283.22 121.473 283.365 121.319 283.4 121.126C283.451 120.983 283.513 120.845 283.585 120.711C283.682 120.531 283.657 120.317 283.539 120.165L283.046 119.297L283.297 119.047L284.227 119.574Z",
            fill: "#232425",
            fillOpacity: "0.92"
          }),
          (0, l.tZ)("rect", { x: "76", y: "138", width: "8", height: "8", rx: "4", fill: "#D9DFE0" }),
          (0, l.tZ)("rect", { x: "88", y: "136", width: "12", height: "12", rx: "6", fill: "#6E868B" }),
          (0, l.tZ)("rect", { x: "104", y: "138", width: "41", height: "8", rx: "4", fill: "#D9DFE0" }),
          (0, l.tZ)("rect", { x: "172", y: "138", width: "10", height: "8", rx: "4", fill: "#D9DFE0" }),
          (0, l.tZ)("rect", { x: "208", y: "138", width: "10", height: "8", rx: "4", fill: "#D9DFE0" }),
          (0, l.tZ)("rect", { x: "244", y: "138", width: "10", height: "8", rx: "4", fill: "#D9DFE0" }),
          (0, l.tZ)("path", {
            d: "M287 142C287 142.109 286.982 142.215 286.95 142.313L287.696 143.06C287.889 142.753 288 142.389 288 142C288 140.895 287.105 140 286 140C284.895 140 284 140.895 284 142C284 143.105 284.895 144 286 144C286.352 144 286.684 143.909 286.971 143.749L286.202 142.98C286.137 142.993 286.069 143 286 143C285.448 143 285 142.552 285 142C285 141.448 285.448 141 286 141C286.552 141 287 141.448 287 142Z",
            fill: "#232425",
            fillOpacity: "0.92"
          }),
          (0, l.tZ)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M285.052 137L284.648 138.529C284.603 138.547 284.558 138.567 284.513 138.587L283.128 137.801L281.801 139.128L282.577 140.496C282.553 140.548 282.53 140.602 282.509 140.655L281 141.066V142.959L282.526 143.362C282.545 143.41 282.564 143.456 282.585 143.501L281.801 144.884L283.128 146.21L284.495 145.435C284.549 145.459 284.602 145.481 284.656 145.503L285.067 147H286.959L287.361 145.489C287.41 145.47 287.459 145.45 287.507 145.43L288.884 146.21L290.21 144.884L289.431 143.51C289.453 143.46 289.473 143.409 289.492 143.358L291 142.944V141.052L289.481 140.648C289.462 140.604 289.442 140.561 289.422 140.519L290.21 139.128L288.884 137.801L287.51 138.58C287.46 138.559 287.41 138.539 287.359 138.519L286.945 137H285.052ZM284.227 139.574C284.253 139.588 284.279 139.6 284.305 139.61C284.44 139.668 284.6 139.666 284.74 139.59C284.894 139.507 285.055 139.438 285.221 139.383L285.479 139.299L285.822 138H286.181L286.537 139.309L286.805 139.388C286.979 139.439 287.148 139.507 287.31 139.59C287.488 139.681 287.695 139.655 287.843 139.54L288.715 139.047L288.965 139.297L288.437 140.227L288.442 140.23C288.363 140.352 288.337 140.507 288.386 140.657L288.419 140.758L288.44 140.798C288.529 140.962 288.577 141.064 288.628 141.221L288.713 141.479L290 141.821V142.182L288.703 142.538L288.624 142.805C288.572 142.979 288.505 143.148 288.422 143.31C288.331 143.488 288.356 143.695 288.471 143.844L288.965 144.715L288.715 144.965L287.866 144.484C287.716 144.353 287.494 144.32 287.306 144.418C287.145 144.503 286.975 144.572 286.801 144.625L286.535 144.706L286.19 146H285.829L285.565 145.036C285.533 144.814 285.354 144.639 285.13 144.612C284.986 144.562 284.846 144.5 284.711 144.427C284.532 144.33 284.319 144.354 284.167 144.471L283.297 144.965L283.046 144.715L283.528 143.866C283.604 143.778 283.65 143.663 283.65 143.538V143.396L283.593 143.287C283.503 143.114 283.437 142.965 283.387 142.801L283.305 142.534L282 142.189V141.83L283.039 141.547L283.032 141.521C283.22 141.473 283.365 141.319 283.4 141.126C283.451 140.983 283.513 140.845 283.585 140.711C283.682 140.531 283.657 140.317 283.539 140.165L283.046 139.297L283.297 139.047L284.227 139.574Z",
            fill: "#232425",
            fillOpacity: "0.92"
          }),
          (0, l.tZ)("path", {
            d: "M301.378 106.526L286.622 102.184L290.094 117.815L292.698 111.736L298.774 117.815L301.378 115.21L295.302 109.131L301.378 106.526Z",
            fill: "#444444"
          }),
          (0, l.tZ)("path", {
            d: "M290.094 118.249C290.081 118.249 290.067 118.249 290.053 118.248C289.866 118.23 289.711 118.094 289.67 117.909L286.198 102.278C286.165 102.128 286.213 101.972 286.325 101.867C286.437 101.762 286.598 101.724 286.744 101.767L301.501 106.109C301.676 106.161 301.801 106.317 301.812 106.5C301.822 106.683 301.717 106.853 301.549 106.925L296.062 109.278L301.685 114.903C301.855 115.073 301.855 115.348 301.685 115.517L299.081 118.123C298.911 118.292 298.637 118.292 298.467 118.123L292.844 112.497L290.493 117.986C290.424 118.147 290.266 118.249 290.094 118.249ZM292.698 111.302C292.812 111.302 292.923 111.347 293.005 111.429L298.774 117.201L300.765 115.21L294.995 109.438C294.894 109.337 294.849 109.191 294.876 109.049C294.903 108.908 294.999 108.789 295.132 108.732L300.099 106.602L287.205 102.808L290.225 116.406L292.299 111.566C292.356 111.433 292.474 111.338 292.616 111.31C292.643 111.305 292.671 111.302 292.698 111.302Z",
            fill: "white"
          })
        ));
      var iu;
      const ou = "onboarding_web_tacgetstarted",
        ru = ({ tooltipDismissed: e, setTooltipDismissed: t, children: a }) => {
          const { translate: n } = (0, g.Z)(),
            s = (0, Ie._)(),
            { [ou]: i = !1 } = s.status !== se.rq.Success ? {} : s.data;
          return (0, l.tZ)(
            c.ua7,
            {
              sx: { maxWidth: "400px" },
              passThrough: e || !i,
              placement: "left-start",
              arrowSize: 8,
              trigger: "persist",
              content: (0, l.tZ)(
                c.Ejs,
                { flexDirection: "column", gap: "8px", sx: { padding: "8px", textAlign: "left", width: "auto" } },
                (0, l.tZ)(l.X6, { as: "h1", color: "ds.text.inverse.catchy" }, n("team_groups_add_assign_admin_tooltip_title")),
                (0, l.tZ)(l.nv, { color: "ds.text.inverse.standard" }, n("team_groups_add_assign_admin_tooltip_description")),
                iu || (iu = (0, l.tZ)(su, null)),
                (0, l.tZ)(
                  l.zx,
                  { onClick: () => t(!0), sx: { alignSelf: "end" } },
                  n("team_groups_add_assign_admin_tooltip_confirm_button")
                )
              )
            },
            a
          );
        };
      var lu = a(873670);
      const cu = "team_get_started_task_learn_more",
        du = ({
          isCompleted: e,
          isDisabled: t,
          title: a,
          content: n,
          helpDocLink: s,
          ctaOnClick: i,
          ctaText: o,
          upNextImage: r,
          disabledText: d,
          isCtaDisabled: u,
          disabledCtaTooltipText: _,
          isUpNext: m,
          infoBoxText: p
        }) => {
          const { translate: y } = (0, g.Z)();
          return (0, l.tZ)(
            c.Zbd,
            {
              sx: {
                padding: "32px",
                marginTop: "8px",
                marginBottom: m ? "32px" : "auto",
                borderColor: "ds.border.neutral.quiet.idle",
                backgroundColor: e ? "ds.container.agnostic.neutral.standard" : "ds.container.agnostic.neutral.supershy",
                boxShadow: m ? "0px 12px 24px rgba(0, 0, 0, 0.24)" : "unset"
              }
            },
            (0, l.tZ)(
              c.T5p,
              {
                gap: "8px",
                gridTemplateRows: "auto",
                gridTemplateColumns: "2fr auto",
                gridTemplateAreas: m ? "'title image' 'content image' 'cta image'" : "'title cta' 'content cta' 'learnMore cta'"
              },
              (0, l.tZ)(
                c.dDn,
                { gridArea: "title" },
                (0, l.tZ)(
                  l.X6,
                  {
                    as: "h2",
                    textStyle: m ? "ds.title.section.medium" : "ds.title.block.medium",
                    sx: { marginBottom: m ? "16px" : "8px", fontWeight: "bold" },
                    color: e ? "ds.text.neutral.quiet" : "ds.text.neutral.catchy"
                  },
                  y(a)
                )
              ),
              (0, l.tZ)(
                c.dDn,
                { gridArea: "content" },
                (0, l.tZ)(
                  l.nv,
                  {
                    textStyle: m ? "ds.body.standard.regular" : "ds.body.reduced.regular",
                    color: e ? "ds.text.neutral.quiet" : "ds.text.neutral.standard"
                  },
                  y(n)
                ),
                p && !e && m && !u ? (0, l.tZ)(l.ke, { sx: { marginTop: "16px" }, mood: "brand", title: y(p) }) : null
              ),
              m ? (0, l.tZ)(c.dDn, { gridArea: "image", sx: { paddingLeft: "32px" } }, r) : null,
              (0, l.tZ)(
                c.dDn,
                { gridArea: "cta", justifySelf: m ? "start" : "end", sx: { marginTop: m ? "32px" : "0" } },
                e || t
                  ? (0, l.tZ)(l.Ct, {
                      label: y(t ? d || "team_get_started_task_disabled" : "team_get_started_task_completed"),
                      mood: t ? "neutral" : "positive",
                      intensity: "catchy"
                    })
                  : (0, l.tZ)(
                      lu.M,
                      {
                        disabled: u,
                        size: m ? "medium" : "small",
                        mood: m ? "brand" : "neutral",
                        intensity: m ? "catchy" : "quiet",
                        onClick: i,
                        content: _ ? y(_) : ""
                      },
                      y(o)
                    ),
                m
                  ? (0, l.tZ)(
                      () =>
                        s
                          ? (0, l.tZ)(
                              l.zx,
                              {
                                sx: { marginLeft: "8px" },
                                mood: "brand",
                                intensity: "supershy",
                                size: "medium",
                                onClick: () => (0, j.Yo)(s)
                              },
                              y(cu)
                            )
                          : null,
                      null
                    )
                  : null
              ),
              m
                ? null
                : (0, l.tZ)(
                    c.dDn,
                    { gridArea: "learnMore" },
                    (0, l.tZ)(
                      () =>
                        s
                          ? (0, l.tZ)(
                              c.k$b,
                              {
                                as: l.nv,
                                innerAs: c.rUS,
                                size: "small",
                                color: e ? "ds.text.neutral.quiet" : "ds.text.brand.standard",
                                rel: "noopener noreferrer",
                                target: "_blank",
                                href: s
                              },
                              y(cu)
                            )
                          : null,
                      null
                    )
                  )
            ),
            !p || e || m || u ? null : (0, l.tZ)(l.ke, { sx: { marginTop: "32px" }, mood: "brand", title: y(p) })
          );
        },
        uu = a.p + "2d07f8aaf28eb418a6e1.png",
        _u = () => {
          (0, P.Kz)(new o.UserClickEvent({ button: o.Button.OpenUsersPage }));
        };
      var mu;
      const pu = "showAssignAdminTipState";
      var gu, yu, hu;
      const bu = {
          LOGIN_TEXT: {
            variant: "text.ds.body.reduced.regular",
            wordBreak: "break-word",
            color: "ds.text.neutral.catchy",
            marginLeft: "16px",
            maxWidth: "280px",
            minWidth: "140px"
          },
          ROW: {
            boxShadow: "inset 0 -1px 0 0 ds.border.neutral.quiet.idle",
            height: "60px",
            variant: "text.ds.body.reduced.regular",
            td: { padding: "16px", verticalAlign: "middle" }
          },
          ACTIVE: { color: "ds.text.neutral.standard" },
          REVOKED: { color: "ds.text.neutral.quiet" }
        },
        xu = "team_members_row_invitation_pending",
        Su = ({ checkedMembers: e, currentLoggedLogin: t, members: a, onMemberActionSelect: s, onMemberToggleCheck: o }) => {
          var r, d, u;
          const { translate: _ } = (0, g.Z)(),
            m = (0, i.TH)(),
            p = null != (r = m.state?.[pu]) && r,
            [y, h] = (0, n.useState)(null),
            [b, x] = (0, n.useState)(!1),
            S = (e) => {
              h(e === y ? null : e);
            },
            v = (e, t) => {
              S(y), s(e, t);
            },
            f = () =>
              (0, l.tZ)(
                c.Ejs,
                { gap: "4px" },
                (0, l.tZ)(
                  l.nv,
                  { textStyle: "ds.body.standard.regular", color: "ds.text.neutral.quiet" },
                  _("team_members_row_security_score_unavailable")
                ),
                (0, l.tZ)(
                  l.u,
                  { wrapTrigger: !0, location: "bottom", content: _("team_members_row_security_score_breakdown_less_than_five") },
                  (0, l.tZ)(
                    "div",
                    { sx: { display: "flex", alignItems: "center" } },
                    gu || (gu = (0, l.tZ)(l.JO, { name: "FeedbackInfoOutlined", color: "ds.text.neutral.quiet", size: "xsmall" }))
                  )
                )
              );
          return (0, l.tZ)(
            "tbody",
            { className: "tableBody--UVKDDE_osD" },
            (() => {
              const n = (e, t) => (null != t ? t : "accepted" !== e ? "-" : 0);
              return a.map((a, s) => {
                return (0, l.tZ)(
                  "tr",
                  {
                    id: "removed" === a.status ? "revoked" : "active",
                    key: a.login,
                    sx: (0, l.jM)([bu.ROW, "removed" === a.status ? bu.REVOKED : bu.ACTIVE])
                  },
                  (0, l.tZ)(
                    "td",
                    null,
                    a.login !== t &&
                      "removed" !== a.status &&
                      (0, l.tZ)(l.XZ, {
                        checked: !!Array.from(e).find((e) => e.login === a.login),
                        "aria-label": "Select user",
                        onChange: () => o(a)
                      })
                  ),
                  (0, l.tZ)(
                    "td",
                    { className: "loginCell--zmWQn6nt_m" },
                    (0, l.tZ)(mo.q, { email: a.login, size: 30 }),
                    (0, l.tZ)(
                      "div",
                      { sx: bu.LOGIN_TEXT, className: "automation-tests-member-login" },
                      (0, l.tZ)(Fd.Z, { tooltipText: a.login }, a.login)
                    )
                  ),
                  (0, l.tZ)(
                    "td",
                    { className: "securityScoreCell--TRrWX93JKm" },
                    ((e) => {
                      const t = Gd.Maybe.maybe(
                        e.nbrPasswords >= 5 || (!e.nbrPasswords && e.securityIndex && e.securityIndex > 0) ? e.securityIndex : null
                      );
                      return t.caseOf({
                        just: (e) =>
                          0 === e
                            ? d || (d = (0, l.tZ)(f, null))
                            : (0, l.tZ)(
                                au,
                                { score: t, size: "small" },
                                (0, l.tZ)("div", { className: "securityScoreCellText--uh3PGGldwN" }, `${br(e)}%`)
                              ),
                        nothing: () => u || (u = (0, l.tZ)(f, null))
                      });
                    })(a)
                  ),
                  (0, l.tZ)(
                    "td",
                    { className: "passwordsCell--gft4asedk5" },
                    (0, l.tZ)("span", { className: "passwordsCellIcon--oJaMYYHQ_9" }),
                    ((i = a.status), (r = a.nbrPasswords), "accepted" !== i ? "-" : !r || r < 5 ? "<5" : r)
                  ),
                  (0, l.tZ)("td", null, n(a.status, a.safePasswords)),
                  (0, l.tZ)("td", null, n(a.status, a.weakPasswords)),
                  (0, l.tZ)("td", null, n(a.status, a.reused)),
                  (0, l.tZ)("td", null, n(a.status, a.compromisedPasswords)),
                  (0, l.tZ)(
                    "td",
                    null,
                    ((e) => {
                      switch (!0) {
                        case ["pending", "proposed"].includes(e.status):
                          return _(xu);
                        case Boolean(e.lastUpdateDateUnix || e.revokedDateUnix):
                          return (0, l.tZ)(qd.Z, { date: (0, oa.Z)(e.lastUpdateDateUnix || e.revokedDateUnix) });
                        case "pending" === e.status:
                          return _(xu);
                        default:
                          return _("team_members_row_never_logged_in");
                      }
                    })(a)
                  ),
                  (0, l.tZ)(
                    "td",
                    null,
                    a.isBillingAdmin
                      ? (0, l.tZ)(
                          l.u,
                          { location: "top", content: _("team_account_heading_billing_admin_tooltip"), sx: { textAlign: "start" } },
                          (0, l.tZ)(
                            "div",
                            { sx: { display: "flex", alignItems: "center" } },
                            (0, l.tZ)(
                              l.nv,
                              { textStyle: "ds.body.standard.strong", sx: { display: "inline-block" } },
                              _("team_account_heading_billing_admin")
                            ),
                            (0, l.tZ)(l.JO, {
                              color: "ds.text.neutral.standard",
                              name: "FeedbackInfoOutlined",
                              sx: { display: "inline-block", marginLeft: "4px" },
                              size: "small"
                            })
                          )
                        )
                      : null,
                    ((e) =>
                      "removed" === e.status
                        ? _("team_members_row_revoked")
                        : e.isTeamCaptain
                        ? _("team_members_row_captain")
                        : e.isGroupManager
                        ? _("team_members_row_group_manager")
                        : _("team_members_row_member"))(a)
                  ),
                  (0, l.tZ)(
                    "td",
                    { className: "actionsCell--NotN6ngLnK", style: { position: "relative" } },
                    a.login === y ? ((e) => (0, l.tZ)($d, { member: e, onDismiss: () => S(e.login), onMemberActionSelect: v }))(a) : null,
                    a.login !== t
                      ? 1 === s && p
                        ? (0, l.tZ)(
                            ru,
                            { tooltipDismissed: b, setTooltipDismissed: x },
                            (0, l.tZ)(l.zx, {
                              id: "users-action-menu-button",
                              onClick: () => S(a.login),
                              layout: "iconOnly",
                              intensity: "supershy",
                              icon: yu || (yu = (0, l.tZ)(l.JO, { name: "SettingsOutlined", color: "ds.text.neutral.standard" }))
                            })
                          )
                        : (0, l.tZ)(l.zx, {
                            id: "users-action-menu-button",
                            onClick: () => S(a.login),
                            layout: "iconOnly",
                            intensity: "supershy",
                            icon: hu || (hu = (0, l.tZ)(l.JO, { name: "SettingsOutlined", color: "ds.text.neutral.standard" }))
                          })
                      : null
                  )
                );
                var i, r;
              });
            })()
          );
        },
        vu = {
          TOP: { display: "flex", justifyContent: "space-between", height: "90px", marginBottom: "16px", color: "ds.text.neutral.quiet" },
          TOP_PAGINATION_TEXT: {
            whiteSpace: "nowrap",
            display: "flex",
            gap: "5px",
            alignItems: "center",
            maxHeight: "42px",
            overflowY: "hidden",
            marginRight: "16px"
          }
        },
        fu = "team_members_heading_name",
        Cu = "team_members_heading_security_score",
        Zu = "team_members_heading_password_count",
        Eu = "team_members_heading_last_login",
        Du = 24,
        Tu = ({ lee: e, members: t, onMembersActionSelect: a, onMembersInvite: s }) => {
          var i;
          const { translate: o } = (0, g.Z)(),
            r = (0, Nn.v0)(e.globalState),
            c = null != (i = r?.login) ? i : "",
            [d, u] = (0, n.useState)(Bd(t)),
            [_, m] = (0, n.useState)(new Set()),
            [p, y] = (0, n.useState)(0),
            [h, b] = (0, n.useState)(["accepted", "pending", "removed"]),
            [x, S] = (0, n.useState)(""),
            [v, f] = (0, n.useState)({ sortBy: "sortableRights", sortOrder: "asc" });
          (0, n.useEffect)(() => {
            m(new Set()), u(Bd(t));
          }, [t]);
          const C = () => {
              const e = x?.toLocaleUpperCase(),
                t = "asc" === v.sortOrder ? rs.ascend : rs.descend;
              return (0, rs.sortWith)([t((0, rs.prop)(v.sortBy))])(
                d
                  .filter((e) => e.filterableStatus && h.includes(e.filterableStatus))
                  .filter((t) => !x || t.login.toLocaleUpperCase().includes(e))
              );
            },
            Z = (e) => {
              y(e);
            },
            E = (e) => {
              const t = e === v.sortBy && "asc" === v.sortOrder ? "desc" : "asc";
              f({ sortBy: e, sortOrder: t });
            },
            D = (e) => {
              y(0), b((t) => (t.includes(e) ? t.filter((t) => t !== e) : t.concat([e])));
            },
            T = (e) => !e.isBillingAdmin && ["accepted", "pending", "proposed"].includes(e.status),
            N = () => {
              m(new Set());
            },
            M = () => {
              const e = p * Du,
                t = new Set();
              C()
                .slice(e, e + Du)
                .reduce((e, t) => (c === t.login || e.add({ ...t }), e), t),
                Array.from(_).forEach((e) => t.add({ ...e })),
                m(t);
            },
            I = p * Du,
            w = C(),
            k = { first: w.length ? I + 1 : 0, last: Math.min(w.length, I + Du) },
            A = w.slice(I, I + Du),
            O = ((e) => {
              const t = e.filter((e) => Array.from(_).find((t) => t.login === e.login)).length;
              let a;
              return (
                e.find((e) => e.login === c), e.length, (a = 0 === t ? M : N), (0, l.tZ)(l.XZ, { onChange: a, "aria-label": "select-all" })
              );
            })(A),
            L = [
              { headerLabel: "", headerElement: O, headerKey: "checkbox" },
              {
                headerLabel: o(fu),
                tooltipLabel: o(fu),
                onClick: () => E("login"),
                sortOrder: "login" !== v.sortBy ? void 0 : v.sortOrder,
                headerKey: "login"
              },
              {
                headerLabel: o(Cu),
                tooltipLabel: o(Cu),
                onClick: () => E("sortableSecurityScore"),
                sortOrder: "sortableSecurityScore" !== v.sortBy ? void 0 : v.sortOrder,
                headerKey: "security-score"
              },
              {
                headerLabel: o(Zu),
                tooltipLabel: o(Zu),
                onClick: () => E("sortablePasswords"),
                sortOrder: "sortablePasswords" !== v.sortBy ? void 0 : v.sortOrder,
                headerKey: "num-passwords"
              },
              {
                headerLabel: o("team_members_heading_safe"),
                tooltipLabel: o("team_members_heading_safe_tooltip"),
                onClick: () => E("sortableSafePasswords"),
                sortOrder: "sortableSafePasswords" !== v.sortBy ? void 0 : v.sortOrder,
                headerKey: "safe-passwords"
              },
              {
                headerLabel: o("team_members_heading_weak"),
                tooltipLabel: o("team_members_heading_weak_tooltip"),
                onClick: () => E("sortableWeakPasswords"),
                sortOrder: "sortableWeakPasswords" !== v.sortBy ? void 0 : v.sortOrder,
                headerKey: "weak-passwords"
              },
              {
                headerLabel: o("team_members_heading_reused"),
                tooltipLabel: o("team_members_heading_reused_tooltip"),
                onClick: () => E("sortableReused"),
                sortOrder: "sortableReused" !== v.sortBy ? void 0 : v.sortOrder,
                headerKey: "reused-passwords"
              },
              {
                headerLabel: o("team_members_heading_compromised"),
                tooltipLabel: o("team_members_heading_compromised_tooltip"),
                onClick: () => E("sortableCompromisedPasswords"),
                sortOrder: "sortableCompromisedPasswords" !== v.sortBy ? void 0 : v.sortOrder,
                headerKey: "compromised-passwords"
              },
              {
                headerLabel: o(Eu),
                tooltipLabel: o(Eu),
                onClick: () => E("sortableLastActivity"),
                sortOrder: "sortableLastActivity" !== v.sortBy ? void 0 : v.sortOrder,
                headerKey: "last-login"
              },
              {
                headerLabel: (0, l.tZ)(
                  "span",
                  { sx: { display: "flex", alignItems: "center" } },
                  o("team_members_heading_rights"),
                  " ",
                  (0, l.tZ)(l.JO, {
                    color: "ds.text.neutral.quiet",
                    name: "FeedbackInfoOutlined",
                    sx: { display: "inline-block", marginLeft: "4px" },
                    size: "small"
                  })
                ),
                tooltipLabel: (0, l.tZ)(
                  "div",
                  { sx: { "& > * > p:not(:last-child)": { marginBottom: "10px" } } },
                  o.markup("team_members_heading_rights_tooltip_markup")
                ),
                onClick: () => E("sortableRights"),
                sortOrder: "sortableRights" !== v.sortBy ? void 0 : v.sortOrder,
                headerKey: "permissions"
              },
              { headerLabel: "", headerKey: "actions" }
            ];
          return (0, l.tZ)(
            "div",
            { className: "container--lTIFkRrWrT" },
            (0, l.tZ)(
              "div",
              { sx: vu.TOP },
              (0, l.tZ)(
                "div",
                { className: "tableHeaderContainer--NOzH1jto0x" },
                (0, l.tZ)(wd.n, {
                  type: "search",
                  containerStyle: { flexGrow: 1, maxWidth: "300px", marginBottom: "15px" },
                  onChange: (e) => {
                    y(0), S(e.currentTarget.value);
                  },
                  placeholder: o("team_members_filter_control_search_placeholder"),
                  placeholderIcon:
                    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAyMSAyMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNNy4zNzUgMTMuNzY0Nkw0LjM3NSAxNi43NjQ2TTE2LjM3NSA5LjI2NDY1QzE2LjM3NSAxMS43NDk5IDE0LjM2MDMgMTMuNzY0NiAxMS44NzUgMTMuNzY0NkM5LjM4OTcyIDEzLjc2NDYgNy4zNzUgMTEuNzQ5OSA3LjM3NSA5LjI2NDY1QzcuMzc1IDYuNzc5MzcgOS4zODk3MiA0Ljc2NDY1IDExLjg3NSA0Ljc2NDY1QzE0LjM2MDMgNC43NjQ2NSAxNi4zNzUgNi43NzkzNyAxNi4zNzUgOS4yNjQ2NVoiIHN0cm9rZT0iI0NDQzdDMiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KPC9zdmc+Cg=="
                }),
                (0, l.tZ)(
                  "div",
                  { className: "topContainer--ST6B1mEZjJ" },
                  (0, l.tZ)(
                    "div",
                    { className: "topLeft--viTEuhR25Z" },
                    (0, l.tZ)(
                      "div",
                      { className: "statusFilters--SMNEn98faE" },
                      (0, l.tZ)(l.XZ, {
                        label: o("team_members_filter_control_include_active"),
                        onChange: () => D("accepted"),
                        checked: h.includes("accepted")
                      }),
                      (0, l.tZ)(l.XZ, {
                        label: o("team_members_filter_control_include_invited"),
                        onChange: () => D("pending"),
                        checked: h.includes("pending")
                      }),
                      (0, l.tZ)(l.XZ, {
                        label: o("team_members_filter_control_include_revoked"),
                        onChange: () => D("removed"),
                        checked: h.includes("removed")
                      })
                    )
                  ),
                  _.size > 0 && [
                    (0, l.tZ)(jd, {
                      key: "dropdown",
                      onMultipleReassignActionSelect: (e) => {
                        let t = [..._];
                        switch (e) {
                          case "member":
                            t = t.filter((e) => e.isTeamCaptain || e.isGroupManager);
                            break;
                          case "teamCaptain":
                            t = t.filter((e) => !e.isTeamCaptain && "accepted" === e.status);
                            break;
                          case "groupManager":
                            t = t.filter((e) => !e.isGroupManager && "accepted" === e.status);
                        }
                        a("reassign", t, e);
                      }
                    }),
                    (0, l.tZ)(Md.Z, {
                      key: "button",
                      classNames: ["revokeButton--_sdxTpsqR2 topButton--vxY2fF8Lv4"],
                      label: o("team_members_revoke_multiple_label"),
                      disabled: ![..._].some(T),
                      onClick: () => {
                        let e = [..._];
                        (e = e.filter(T)), a("revoke", e);
                      }
                    })
                  ],
                  (0, l.tZ)(
                    "div",
                    { className: "topRight--YZ2DF7wcrD" },
                    (0, l.tZ)(
                      "div",
                      { className: "topPagination--rTlBiQ0EDF" },
                      (0, l.tZ)(
                        "div",
                        { sx: vu.TOP_PAGINATION_TEXT },
                        (0, l.tZ)(
                          l.nv,
                          { textStyle: "ds.body.standard.regular", color: "ds.text.neutral.catchy" },
                          o("team_members_filter_pagination_top_count", { first: k.first, last: k.last })
                        ),
                        (0, l.tZ)(
                          l.nv,
                          { textStyle: "ds.body.standard.regular", color: "ds.text.neutral.quiet" },
                          o("team_members_filter_pagination_top_total", { total: w.length })
                        )
                      ),
                      (0, l.tZ)(Id.Z, { currentPageIndex: p, isShort: !0, itemsLength: w.length, itemsPerPage: Du, onChange: Z })
                    ),
                    (0, l.tZ)(l.zx, { icon: "ActionAddOutlined", layout: "iconLeading", onClick: s }, o("team_members_quota_progress_add")),
                    t.length > 1 && (0, l.tZ)(Od, { members: t, onMembersActionSelect: a })
                  )
                )
              )
            ),
            (0, l.tZ)(
              "table",
              { className: "table--a8O2px0gHj" },
              (0, l.tZ)(co, { columns: L }),
              (0, l.tZ)(Su, {
                checkedMembers: _,
                currentLoggedLogin: c,
                members: A,
                onMemberActionSelect: (e, t) => {
                  a(e, [t]);
                },
                onMemberToggleCheck: (e) => {
                  m((t) => {
                    const a = Array.from(t).find((t) => t.login === e.login),
                      n = new Set(t);
                    return a ? n.delete(a) : n.add({ ...e }), n;
                  });
                }
              })
            ),
            (0, l.tZ)(
              "div",
              { className: "bottom--b6BPTxGASq" },
              (0, l.tZ)(Id.Z, { currentPageIndex: p, itemsLength: w.length, itemsPerPage: Du, onChange: Z })
            )
          );
        },
        Nu = ({ refusedMembers: e = {} } = {}) => Object.keys(e).length > 0,
        Mu = "counter--NpfuOeApPm",
        Iu = "active--VJ5ITGfmuJ";
      var wu;
      const ku = ["text/*", ".csv", ".txt"],
        Au = ({
          lee: e,
          isFreeTrial: t,
          isOpen: a,
          slotsTaken: s,
          slotsTotal: l,
          exclude: d,
          preFilledEmails: u,
          closeInviteDialog: _,
          handleInviteCompleteSuccess: m,
          handleInvitePartialSuccess: p,
          setShowActivationDialog: y
        }) => {
          const { routes: h } = (0, i.Xo)(),
            { translate: b } = (0, g.Z)(),
            x = (0, Wa.V)(),
            { reportTACError: S } = H(),
            { proposeMembers: C } = (0, $e.u)(jc.L),
            Z = (0, kt.Y)(),
            { billingDetails: E, amountToPay: D, amountToTax: T, onSeatCountChange: N } = Ci(null),
            [M, I] = (0, n.useState)(!1),
            [w, k] = (0, n.useState)(!1),
            [L, z] = (0, n.useState)(null != u ? u : new Set([])),
            [j, R] = (0, n.useState)(0),
            [U, G] = (0, n.useState)(0),
            [F, q] = (0, n.useState)(0),
            [$, V] = (0, n.useState)(0),
            [W, K] = (0, n.useState)(!1);
          (0, n.useEffect)(() => {
            k(M);
          }, [M]),
            (0, n.useEffect)(() => {
              z(null != u ? u : new Set([]));
            }, [u]),
            (0, n.useEffect)(() => {
              L.size || q(0);
            }, [L]);
          const Y = () => {
              _(), I(!1), R(0), G(0);
            },
            Q = async (t, a) => {
              var n;
              (a = null != (n = a) ? n : 0), G(t.length), I(!0);
              const s = a + Math.min(t.length - a, 500),
                i = t.slice(a, s),
                r = {};
              try {
                const a = await (async (t) => {
                  if (!(0, Nn.v0)(e.globalState)) {
                    const e = new Error(ls.N);
                    throw (S(e), e);
                  }
                  if (!e.apiMiddleware.teamPlans) throw new Error("we want to remove this middleware but we can't just yet!");
                  try {
                    const e = await C({ proposedMemberLogins: t, force: !0 });
                    if ("failure" === e.tag) throw new Error(e.error);
                    return e.data;
                  } catch (e) {
                    const t = e.code && e.subCode ? `invite_error_${e.code}_${e.subCode}` : "team_members_invite_error_message";
                    throw (x.showAlert(b(t), c.BLW.ERROR), new Error(b(t)));
                  }
                })(i);
                if ((R(s), (0, f.merge)(r, a), s < t.length)) return Q(t, s);
                if (Nu(r)) {
                  p(r.proposedMembers, r.refusedMembers);
                  const e = Object.keys(r.proposedMembers).length,
                    t = Object.keys(r.refusedMembers).length;
                  (0, P.Kz)(
                    new o.UserSendManualInviteEvent({
                      flowStep: o.FlowStep.Complete,
                      inviteCount: e,
                      inviteFailedCount: t,
                      inviteResentCount: 0,
                      inviteSuccessfulCount: e - t,
                      isImport: F > 0,
                      importSize: F,
                      isResend: !1
                    })
                  );
                } else
                  m(t),
                    $ < 0
                      ? 1 === L.size
                        ? x.showAlert(
                            b("team_members_invite_success_message_with_added_seats_one_invite", {
                              cost: b.price(E.currency, (D + T) / 100)
                            }),
                            c.BLW.SUCCESS
                          )
                        : x.showAlert(
                            b("team_members_invite_success_message_with_added_seats", {
                              total: L.size,
                              count: -$,
                              cost: b.price(E.currency, (D + T) / 100)
                            }),
                            c.BLW.SUCCESS
                          )
                      : x.showAlert(b("team_members_invite_success_message_with_count", { count: L.size }), c.BLW.SUCCESS),
                    (0, P.Kz)(
                      new o.UserSendManualInviteEvent({
                        flowStep: o.FlowStep.Complete,
                        inviteCount: t.length,
                        inviteFailedCount: 0,
                        inviteResentCount: 0,
                        inviteSuccessfulCount: t.length,
                        isImport: F > 0,
                        importSize: F,
                        isResend: !1
                      })
                    );
                return Y();
              } catch (e) {
                throw (
                  ((0, P.Kz)(
                    new o.UserSendManualInviteEvent({
                      flowStep: o.FlowStep.Error,
                      inviteCount: L.size,
                      inviteFailedCount: 0,
                      inviteResentCount: 0,
                      inviteSuccessfulCount: 0,
                      isImport: F > 0,
                      importSize: F,
                      isResend: !1
                    })
                  ),
                  Y(),
                  e)
                );
              }
            },
            X = (e) =>
              (function (e) {
                if (
                  (function (e) {
                    const t = e.match(/[\x00-\x09\x0e-\x1F]/g);
                    return !!t && t.length / e.length > 0.03;
                  })(e)
                )
                  return [];
                if (!e.includes("@")) return [e];
                return (function (e) {
                  const t = {};
                  return e.forEach((e) => (t[e] = !0)), Object.keys(t);
                })(e.match(/[^<> ,;:\t\n\r"']+@[a-zA-Z0-9_.-]+/g) || []);
              })(e).filter((e) => !L.has(e)),
            J = (e) => (0, Na.vV)(e) && !((e) => !!d?.includes(e))(e),
            ee = (e) => {
              q(e.length), z(new Set([...L, ...e]));
            },
            te = (e) => {
              S(e);
            },
            ae = [...L].filter((e) => !J(e)).length;
          let ne = 0 === L.size || ae > 0 || ($ < 0 && si(-$)) || W,
            se = null;
          (0, n.useEffect)(() => {
            if (l) {
              const e = l - (L.size - ae) - s;
              V(e), e < 0 ? (N(-e), Z.status === r.rq.Success && (0, O.f1)(Z.data) && K(!0)) : K(!1);
            }
          }, [L, Z, l, s]);
          const { loading: ie, billingCountry: oe } = v();
          if (ie) return (0, B.tZ)(c.HoD, { color: c.colors.midGreen00 });
          const re = "US" === oe ? "team_invite_dialog_input_counter_negative_tax" : "team_invite_dialog_input_counter_negative_vat";
          if (l) {
            const e =
                $ < 0
                  ? si(-$)
                    ? b("team_account_teamplan_upgrade_premium_buy_more_seats_than_cap", { seatCap: Js, salesEmail: ei })
                    : T
                    ? b(re, { count: -$, total: l, cost: b.price(E.currency, (D + T) / 100) })
                    : b("team_invite_dialog_input_counter_negative", { count: -$, total: l, cost: b.price(E.currency, D / 100) })
                  : b("team_invite_dialog_input_counter", { count: $, total: l }),
              a = b("team_invite_dialog_input_counter_special", { total: l });
            let n = e;
            t && $ < 1 && ((ne = $ < 0 || ne), (n = a));
            const s = A()(Mu, { "alert--WcUXIwBMog": $ < 1, [Iu]: !M });
            se = (0, B.tZ)("div", { className: s }, n);
          }
          return (0, B.tZ)(
            c.VqE,
            {
              isOpen: a,
              closeIconName: M ? void 0 : b("_common_dialog_dismiss_button"),
              onClose: () => {
                M ||
                  ((0, P.Kz)(
                    new o.UserSendManualInviteEvent({
                      flowStep: o.FlowStep.Cancel,
                      inviteCount: L.size,
                      inviteFailedCount: 0,
                      inviteResentCount: 0,
                      inviteSuccessfulCount: 0,
                      isImport: F > 0,
                      importSize: F,
                      isResend: !1
                    })
                  ),
                  Y(),
                  z(new Set([])));
              },
              ariaDescribedby: "dialogContent"
            },
            (0, B.tZ)(c.$N8, { title: b("invite_user_dialog_title") }),
            (0, B.tZ)(
              c.a7O,
              null,
              (0, B.tZ)(
                "div",
                { className: "dialog--QnJrEK3_WD" },
                (0, B.tZ)(
                  "div",
                  { id: "dialogContent", className: "instruction--MOkv4LlYxY" },
                  b(M ? "team_invite_dialog_input_label_sending" : "invite_user_dialog_input_label")
                ),
                (0, B.tZ)(
                  Rc.Z,
                  {
                    accept: ku,
                    passClicksThrough: !0,
                    className: "fileDropZone--_MXyrjuinL",
                    onChange: (e) => {
                      ee(X(e.join("\0")));
                    },
                    onError: te
                  },
                  (0, B.tZ)(Pc.L, {
                    key: "tags",
                    setIsOverlayVisible: k,
                    placeholder: b("team_invite_dialog_input_placeholder"),
                    tags: [...L],
                    isOverlayVisible: w,
                    setTags: (e) => {
                      z(new Set(e));
                    },
                    formatToTags: X,
                    validate: J
                  })
                ),
                !W && se,
                W
                  ? (0, B.tZ)(
                      "div",
                      { className: "alertOverride--o2y2pG7WQg" },
                      (0, B.tZ)(
                        c.bZj,
                        { severity: c.BLW.SUBTLE },
                        (0, B.tZ)(
                          "span",
                          { style: { fontSize: "14px", fontWeight: "400" } },
                          b("team_dialog_starter_limit_warning"),
                          wu || (wu = (0, B.tZ)("br", null)),
                          (0, B.tZ)(i.rU, { to: h.teamAccountRoutePath }, b("team_dialog_starter_change_plan"))
                        )
                      )
                    )
                  : null,
                (0, B.tZ)("div", { className: A()(Mu, { [Iu]: M }) }, b("team_invite_dialog_invitations_counter", { count: j, total: U })),
                (0, B.tZ)(
                  "div",
                  { className: A()("import--aJf1GXo5F5", { [Iu]: !M }) },
                  (0, B.tZ)(
                    Rc.Z,
                    {
                      accept: ku,
                      onChange: (e) => {
                        ee(X(e.join("\0")));
                      },
                      onError: te
                    },
                    (0, B.tZ)("span", { className: "importTextAction--H7eyxahYri" }, b("team_invite_dialog_import_description"))
                  )
                ),
                (0, B.tZ)("div", { className: A()("importHint--xIB2QYXXMo", { [Iu]: !M }) }, b("team_invite_dialog_import_example_text"))
              )
            ),
            (0, B.tZ)(c.cNS, {
              primaryButtonTitle: (0, B.tZ)(
                n.Fragment,
                null,
                (0, B.tZ)("span", { sx: { marginRight: "8px" } }, (0, B.tZ)(c.bV6, { color: c.colors.white })),
                b("invite_user_dialog_button")
              ),
              primaryButtonOnClick: async () => {
                try {
                  await Q([...L]), y(!0);
                } catch (e) {
                  (0, P.Kz)(
                    new o.UserSendManualInviteEvent({
                      flowStep: o.FlowStep.Error,
                      inviteCount: L.size,
                      inviteFailedCount: 0,
                      inviteResentCount: 0,
                      inviteSuccessfulCount: 0,
                      isImport: F > 0,
                      importSize: F,
                      isResend: !1
                    })
                  ),
                    x.showAlert(b("_common_generic_error"), c.BLW.ERROR);
                }
                z(new Set([]));
              },
              primaryButtonProps: { disabled: ne, type: "button" }
            })
          );
        },
        Ou = ({ showActivationDialog: e, setShowActivationDialog: t, setShowSharingDialog: a }) => {
          const { toggleInviteLink: n, createInviteLink: s, getInviteLinkDataForAdmin: i } = (0, rd.h)(),
            { setAsInteracted: o } = (0, we.d)(Me.O.ActivateInviteLink),
            { translate: r } = (0, g.Z)(),
            l = (0, Wa.V)(),
            d = cn();
          return d
            ? (0, B.tZ)(
                c.VqE,
                { closeIconName: r("_common_dialog_dismiss_button"), isOpen: e, onClose: () => t(!1) },
                (0, B.tZ)(c.$N8, { title: r("team_activation_dialog_title") }),
                (0, B.tZ)(
                  c.a7O,
                  null,
                  (0, B.tZ)(c.nvN, { sx: { marginBottom: "15px" }, color: c.colors.dashGreen01 }, r("team_activation_dialog_paragrah"))
                ),
                (0, B.tZ)(c.cNS, {
                  primaryButtonTitle: r("team_activation_dialog_activate_button"),
                  primaryButtonOnClick: async () => {
                    o?.(), t(!1);
                    const e = await i();
                    e?.teamKey ? await n(!1) : (await s(d), l.showAlert(r("team_activation_dialog_notification"), c.BLW.SUCCESS)), a(!0);
                  },
                  primaryButtonProps: { type: "button" },
                  secondaryButtonTitle: r("team_activation_dialog_notrightnow_button"),
                  secondaryButtonOnClick: () => {
                    o?.(), t(!1), l.showAlert(r("team_activation_dialog_cancel_notification"), c.BLW.SUBTLE);
                  }
                })
              )
            : null;
        };
      var Lu = a(833090);
      const zu = ({ showSharingDialog: e, setShowSharingDialog: t }) => {
          const { translate: a } = (0, g.Z)(),
            { inviteLinkDataForAdmin: s, getInviteLinkDataForAdmin: i } = (0, rd.h)(),
            o = (0, Wa.V)();
          return (
            (0, n.useEffect)(() => {
              i();
            }, [i]),
            (0, B.tZ)(
              c.VqE,
              { closeIconName: a("_common_dialog_dismiss_button"), isOpen: e, onClose: () => t(!1) },
              (0, B.tZ)(c.$N8, { title: a("team_sharing_invite_dialog_title") }),
              (0, B.tZ)(
                c.a7O,
                null,
                (0, B.tZ)(c.nvN, { sx: { marginBottom: "15px" }, color: c.colors.dashGreen01 }, a("team_sharing_invite_dialog_paragrah")),
                (0, B.tZ)(c.nvN, { sx: { marginBottom: "15px", fontWeight: "600" }, color: c.colors.dashGreen01 }, (0, ce.cI)(s?.teamKey))
              ),
              (0, B.tZ)(
                c.cNS,
                null,
                (0, B.tZ)(Lu.q, {
                  copyValue: (0, ce.cI)(s?.teamKey),
                  buttonText: a("team_sharing_invite_dialog_copy_link"),
                  onClick: () => {
                    navigator.clipboard.writeText((0, ce.cI)(s?.teamKey)),
                      o.showAlert(a("team_sharing_invite_dialog_copied_notification"), c.BLW.SUCCESS);
                  }
                })
              )
            )
          );
        },
        ju = ({
          lee: e,
          teamId: t,
          isFreeTrial: a,
          totalSeatCount: s,
          numSeatsTaken: i,
          excludedInviteMembers: o,
          shouldShowInviteDialog: r,
          handleCloseInviteDialog: l,
          handleInvitePartialSuccess: c,
          handleInviteCompleteSuccess: d,
          invitePartialSuccessState: u,
          handleInvitationResultClosed: _,
          preFilledInviteEmails: m
        }) => {
          const { inviteLinkDataForAdmin: p, inviteLinkDataLoading: g, getInviteLinkDataForAdmin: y } = (0, rd.h)(),
            [h, b] = n.useState(!1),
            [x, S] = n.useState(!1),
            { interacted: v } = (0, we.d)(Me.O.ActivateInviteLink);
          return (
            n.useEffect(() => {
              y();
            }, [y]),
            n.createElement(
              n.Fragment,
              null,
              r
                ? n.createElement(Au, {
                    lee: e,
                    slotsTotal: s,
                    slotsTaken: i,
                    exclude: o,
                    isFreeTrial: a,
                    isOpen: r,
                    closeInviteDialog: l,
                    handleInvitePartialSuccess: c,
                    handleInviteCompleteSuccess: (e) => {
                      !1 === p?.disabled && S(!0), d(e);
                    },
                    preFilledEmails: m,
                    setShowActivationDialog: b
                  })
                : null,
              v || !h || g || p?.teamKey
                ? null
                : n.createElement(Ou, { showActivationDialog: h, setShowActivationDialog: b, setShowSharingDialog: S }),
              x ? n.createElement(zu, { showSharingDialog: x, setShowSharingDialog: S }) : null,
              u.show
                ? n.createElement(Jc, {
                    teamId: t,
                    isOpen: u.show,
                    onClose: _,
                    invitedMembers: u.invitedMembers,
                    refusedMembers: u.refusedMembers
                  })
                : null
            )
          );
        },
        Ru = ({ lee: e, isOpen: t, onClose: a, prefilledEmails: s, teamMembers: i, handleInviteCompleteSuccess: o }) => {
          const r = (0, n.useRef)(!1),
            { invitePartialSuccessState: l, setInvitePartialSuccessState: c, handleInvitationResultClosed: d } = Xc(),
            { teamId: u } = (0, lr.fV)(),
            _ = zc(i),
            [m, p] = (0, n.useState)(0),
            [g, y] = (0, n.useState)(!1);
          return (
            (0, n.useEffect)(() => {
              const t = (0, Nn.v0)(e.globalState);
              if (t)
                return (
                  new Mn.Z()
                    .status({ auth: t })
                    .then((e) => {
                      r.current || (p(e.content.team.membersNumber + e.content.team.extraFreeSlots), y(e.content.team.isFreeTrial));
                    })
                    .catch(),
                  () => {
                    r.current = !0;
                  }
                );
            }, []),
            (0, B.tZ)(ju, {
              lee: e,
              teamId: u,
              totalSeatCount: m,
              numSeatsTaken: _,
              excludedInviteMembers: i.filter(({ status: e }) => "removed" !== e).map(({ login: e }) => e),
              isFreeTrial: g,
              shouldShowInviteDialog: t,
              handleCloseInviteDialog: a,
              handleInvitePartialSuccess: (e, t) => c({ show: !0, invitedMembers: e, refusedMembers: t }),
              handleInviteCompleteSuccess: o,
              invitePartialSuccessState: l,
              handleInvitationResultClosed: d,
              preFilledInviteEmails: s
            })
          );
        },
        Pu = "_common_toast_close_label",
        Uu = ({ domainName: e }) => {
          const { showToast: t } = (0, l.pm)(),
            [a, s] = (0, n.useState)(!1),
            [i, r] = (0, n.useState)(!1),
            { translate: c } = (0, g.Z)();
          return (0, l.tZ)(
            l.zx,
            {
              mood: "neutral",
              intensity: "quiet",
              layout: "iconLeading",
              onClick: async () => {
                let a;
                try {
                  (0, P.Kz)(new o.UserClickEvent({ button: o.Button.DownloadCsv })),
                    s(!0),
                    (a = setTimeout(() => {
                      r(!0);
                    }, 2e3)),
                    await (async () => {
                      const t = [],
                        a = await Ec(e, 10, 0),
                        n = Math.ceil(a.emailsImpactedCount / 10);
                      t.push(...a.emails);
                      const s = async (a = 0) => {
                        const i = [];
                        for (; a < n || (n - a) % 5 != 0; ) i.push(Ec(e, 10, 10 * a)), (a += 1);
                        const o = await Promise.all(i);
                        t.push(...o.flatMap((e) => e.emails)), a < n && s(a);
                      };
                      await s(1),
                        ((e, t) => {
                          (0, Ki.S)(
                            ((e, t) => {
                              let a = ["email", "domain", "data_affected", "incident_date", "view_status"].join(",") + "\n";
                              for (const n of e)
                                for (const e of n.leaks)
                                  a +=
                                    [
                                      `"${n.email}"`,
                                      `"${e.domain}"`,
                                      `"${e.types.join(", ")}"`,
                                      `"${t((0, oa.Z)(e.breachDateUnix))}"`,
                                      `"${n.viewStatus}"`
                                    ].join(",") + "\n";
                              return a;
                            })(e, t),
                            "DWI-report.csv",
                            "text/csv;charset=utf-8"
                          );
                        })(t, c.shortDate);
                    })(),
                    t({ description: c("team_dark_web_insights_download_csv_success"), closeActionLabel: c(Pu) });
                } catch (e) {
                  t({ description: c("_common_generic_error"), mood: "danger", closeActionLabel: c(Pu) });
                } finally {
                  clearTimeout(a), s(!1), r(!1);
                }
              },
              icon: "DownloadOutlined",
              disabled: a,
              isLoading: i
            },
            c("team_dark_web_insights_download_csv")
          );
        };
      var Bu = a(735760);
      const Gu = ({ breach: e, id: t, isFirstInGroup: a = !1, isLastInGroup: n = !1, opened: s = !1 }) => {
          const { translate: i } = (0, g.Z)();
          return (0, B.tZ)(
            "tr",
            {
              id: t,
              sx: {
                backgroundColor: c.colors.grey06,
                borderLeft: `3px solid ${c.colors.dashGreen00}`,
                display: s ? "table-row" : "none",
                height: "44px",
                "> td": {
                  verticalAlign: "middle",
                  padding: "5px 16px",
                  paddingTop: a ? "18px" : void 0,
                  paddingBottom: n ? "18px" : void 0
                }
              }
            },
            (0, B.tZ)(
              "td",
              { colSpan: 2 },
              (0, B.tZ)(
                c.nvN,
                {
                  size: "small",
                  as: "div",
                  sx: { fontWeight: "light", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-end" }
                },
                (0, B.tZ)(
                  "div",
                  { sx: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-end" } },
                  e.domain && "" !== e.domain
                    ? (0, B.tZ)(c.plG, { size: "small", text: e.domain, backgroundColor: c.colors.dashGreen00 })
                    : null,
                  (0, B.tZ)(
                    "div",
                    {
                      title: e.domain,
                      sx: { paddingLeft: "8px", width: "100px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }
                    },
                    e.domain
                  )
                )
              )
            ),
            (0, B.tZ)(
              "td",
              null,
              (0, B.tZ)(
                c.nvN,
                {
                  sx: { "::first-letter": { textTransform: "uppercase" }, textTransform: "lowercase" },
                  size: "x-small",
                  color: c.colors.grey00
                },
                e.types.map((e) => i(qu[e])).join(", ")
              )
            ),
            (0, B.tZ)(
              "td",
              { colSpan: 3 },
              (0, B.tZ)(
                c.nvN,
                { size: "x-small", as: "span", color: c.colors.grey00 },
                (0, B.tZ)(po.v, { date: (0, oa.Z)(e.breachDateUnix), format: pa._T.ll })
              )
            )
          );
        },
        Fu = {
          borderBottom: `1px solid ${c.colors.dashGreen05}`,
          height: "55px",
          position: "relative",
          borderLeft: "3px solid white",
          "&:hover,:focus-visible": { cursor: "pointer", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.16)" },
          '&[aria-expanded="true"]': { borderLeftColor: c.colors.dashGreen00 },
          "> td": { verticalAlign: "middle", padding: "0 16px" }
        },
        qu = {
          [Bu.hb.Password]: "team_dark_web_insights_incident_data_type_password",
          [Bu.hb.CreditCard]: "team_dark_web_insights_incident_data_type_credit_card",
          [Bu.hb.IPAddress]: "team_dark_web_insights_incident_data_type_ip_address",
          [Bu.hb.MailingAddress]: "team_dark_web_insights_incident_data_type_mailing_address",
          [Bu.hb.Phone]: "team_dark_web_insights_incident_data_type_phone",
          [Bu.hb.Email]: "team_dark_web_insights_incident_data_type_email",
          [Bu.hb.Social]: "team_dark_web_insights_incident_data_type_social",
          [Bu.hb.GeoLocation]: "team_dark_web_insights_incident_data_type_geolocation",
          [Bu.hb.UserName]: "team_dark_web_insights_incident_data_type_username",
          [Bu.hb.PersonalInfo]: "team_dark_web_insights_incident_data_type_personalinfo"
        },
        $u = ({ userReport: e, isPendingMember: t = !1, onInviteAction: a, shouldShowInviteButton: s }) => {
          const { translate: i } = (0, g.Z)(),
            [o, r] = (0, n.useState)(!1),
            l = e.leaks?.map((t, a) => `${e.email}-${a}`).join(" ");
          return (0, B.tZ)(
            n.Fragment,
            null,
            (0, B.tZ)(
              "tr",
              {
                id: e.email,
                key: e.email,
                tabIndex: 0,
                "aria-expanded": o,
                "aria-controls": l,
                onKeyDown: (e) => {
                  "Enter" === e.key && (e.preventDefault(), r((e) => !e));
                },
                onClick: () => {
                  r((e) => !e);
                },
                sx: Fu
              },
              (0, B.tZ)("td", null, (0, B.tZ)(c.nvN, { size: "x-small", as: "span" }, e.email)),
              (0, B.tZ)(
                "td",
                null,
                (0, B.tZ)(
                  c.Ejs,
                  { flexDirection: "row" },
                  (0, B.tZ)(c.nvN, { size: "medium", as: "span", sx: { fontWeight: "bold" } }, e.breachesCount),
                  e.viewStatus === Bu.j8.New ? (0, B.tZ)(c.P_k, { dot: !0, ariaLabel: i("team_new_label") }) : null
                )
              ),
              (0, B.tZ)(
                c.nvN,
                {
                  size: "x-small",
                  as: "td",
                  color: c.colors.grey00,
                  sx: {
                    maxWidth: "160px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    textTransform: "lowercase",
                    "::first-letter": { textTransform: "uppercase" }
                  }
                },
                ((e) => {
                  const t = e.leaks.map((e) => e.types.map((e) => i(qu[e])));
                  return [...new Set(t.flat())].join(", ");
                })(e)
              ),
              (0, B.tZ)(
                "td",
                null,
                (0, B.tZ)(
                  c.nvN,
                  { size: "x-small", as: "span", color: c.colors.grey00 },
                  (0, B.tZ)(po.v, { date: (0, oa.Z)(e.leaks[0].breachDateUnix), format: pa._T.ll })
                )
              ),
              (0, B.tZ)(
                "td",
                null,
                s
                  ? (0, B.tZ)(
                      c.zxk,
                      {
                        onClick: () => {
                          a(e.email);
                        },
                        type: "button",
                        nature: "secondary"
                      },
                      i("team_dark_web_insights_incident_summary_invite_button")
                    )
                  : (0, B.tZ)(
                      c.nvN,
                      { size: "x-small", as: "span", color: c.colors.grey00 },
                      i(t ? "team_dark_web_insights_incident_summary_pending" : "team_dark_web_insights_incident_summary_member")
                    )
              ),
              (0, B.tZ)(
                "td",
                { "aria-label": i("team_dark_web_insights_incident_summary_expand") },
                (0, B.tZ)(c.veu, { sx: { transform: o ? "scale3D(1, -1, 1)" : "scale3D(1, 1, 1)" } })
              )
            ),
            e.leaks.map((t, a, n) => {
              const s = `${e.email}-${t.domain}-${t.breachDateUnix}`;
              return (0, B.tZ)(Gu, { id: s, key: s, breach: t, opened: o, isFirstInGroup: 0 === a, isLastInGroup: a === n.length - 1 });
            })
          );
        },
        Vu = ({ emailsToInvite: e, reports: t, isLoading: a, pendingMembers: n, onInviteAction: s }) => {
          const { translate: i } = (0, g.Z)(),
            o = [
              { headerLabel: i("team_dark_web_insights_table_header_email_affected"), headerKey: "email-affected" },
              { headerLabel: i("team_dark_web_insights_table_header_incidents"), headerKey: "incidents" },
              { headerLabel: i("team_dark_web_insights_table_header_data_affected"), headerKey: "data-affected" },
              { headerLabel: i("team_dark_web_insights_table_header_last_incident"), headerKey: "last-incident" },
              { headerLabel: i("team_dark_web_insights_table_header_member_status"), headerKey: "member-status" },
              { headerLabel: "", headerKey: "actions" }
            ];
          return (0, B.tZ)(
            "div",
            { sx: { minWidth: "100%", minHeight: "600px" } },
            a
              ? (0, B.tZ)(
                  "div",
                  { sx: { display: "block", width: "950px", height: "600px", position: "absolute", textAlign: "center" } },
                  (0, B.tZ)(c.HoD, { sx: { position: "relative", top: "50%" }, size: 120, color: c.colors.dashGreen00, strokeWidth: 1 })
                )
              : null,
            (0, B.tZ)(
              "table",
              { sx: { minWidth: "100%" } },
              (0, B.tZ)(co, { columns: o }),
              (0, B.tZ)(
                "tbody",
                { sx: a ? { opacity: "0.5" } : {} },
                t.map((t) =>
                  (0, B.tZ)($u, {
                    key: t.email,
                    userReport: t,
                    onInviteAction: s,
                    isPendingMember: n.includes(t.email),
                    shouldShowInviteButton: e.includes(t.email)
                  })
                )
              )
            )
          );
        },
        Wu = ({ label: e, labelGridArea: t, title: a, titleGridArea: s }) =>
          (0, l.tZ)(
            n.Fragment,
            null,
            (0, l.tZ)(l.nv, { sx: { gridArea: t }, textStyle: "ds.specialty.monospace.small", color: "ds.text.warning.quiet" }, a),
            (0, l.tZ)(l.nv, { color: "ds.text.neutral.quiet", sx: { gridArea: s } }, e)
          ),
        Hu = ({ gridArea: e }) =>
          (0, l.tZ)("div", {
            sx: { gridArea: e, backgroundColor: "ds.border.neutral.quiet.idle", height: "100%", width: "1px", alignSelf: "center" }
          });
      var Ku, Yu;
      const Qu = ({ reports: e, suggestedInvitees: t, onInviteAll: a }) => {
        const { translate: n } = (0, g.Z)();
        return (0, l.tZ)(
          c.Zbd,
          { sx: { marginBottom: "24px", padding: "24px 24px" } },
          (0, l.tZ)(l.X6, { as: "h3", sx: { marginBottom: "24px" } }, n("team_dark_web_insights_summary_title")),
          (0, l.tZ)(
            c.T5p,
            {
              gridTemplateColumns: "1fr 1px 1fr 1px 1fr max-content",
              gridTemplateAreas:
                '"label-0 divider-left label-1 divider-right label-2 invite-all" "title-0 divider-left title-1 divider-right title-2 invite-all"',
              alignItems: "center",
              sx: { columnGap: "16px", justifyContent: "center" }
            },
            (0, l.tZ)(Wu, {
              labelGridArea: "label-0",
              label: n("team_dark_web_insights_summary_employees_affected"),
              titleGridArea: "title-0",
              title: e.emailsImpactedCount
            }),
            Ku || (Ku = (0, l.tZ)(Hu, { gridArea: "divider-left" })),
            (0, l.tZ)(Wu, {
              labelGridArea: "label-1",
              label: n("team_dark_web_insights_summary_total_incidents"),
              titleGridArea: "title-1",
              title: e.leaksCount
            }),
            Yu || (Yu = (0, l.tZ)(Hu, { gridArea: "divider-right" })),
            (0, l.tZ)(Wu, {
              labelGridArea: "label-2",
              label: n("team_dark_web_insights_summary_not_protected"),
              titleGridArea: "title-2",
              title: n("team_dark_web_insights_summary_employee_invitation", { count: t.length })
            }),
            (0, l.tZ)(
              c.dDn,
              { gridArea: "invite-all", alignSelf: "center" },
              (0, l.tZ)(l.zx, { onClick: a }, n("team_dark_web_insights_summary_invite_all_button"))
            )
          )
        );
      };
      var Xu, Ju;
      const e_ = ({ lee: e, domainName: t }) => {
        const { translate: a } = (0, g.Z)(),
          s = (0, Wa.V)(),
          { teamId: i } = (0, lr.fV)(),
          { teamMembers: r, refreshTeamMembers: d } = Lc(i),
          { setHasNewBreaches: u } = ze(),
          { openDialog: _, shouldShowTrialDiscontinuedDialog: m } = (0, T.yp)(),
          [p, y] = (0, n.useState)(!0),
          [h, b] = (0, n.useState)(null),
          [x, S] = (0, n.useState)(!1),
          [v, f] = (0, n.useState)(1),
          [C, Z] = (0, n.useReducer)((e) => e + 1, 0),
          { unseen: E, setAsSeen: D } = (0, we.m)(Me.O.TacDarkWebInsightsNewBadge),
          [N, M] = (0, n.useState)(!1),
          [I, w] = (0, n.useState)(new Set([])),
          k = r.filter((e) => ["pending", "proposed"].includes(e.status)).map((e) => e.login),
          A = r.filter((e) => ["pending", "proposed", "accepted"].includes(e.status)).map((e) => e.login),
          O = (0, n.useMemo)(() => {
            var e;
            return null != (e = h?.allImpactedEmails.filter((e) => !A.includes(e))) ? e : [];
          }, [h?.allImpactedEmails, A]),
          L = async (e, t) => {
            try {
              const a = await Ec(e, 10, t);
              return !!a && (b(a), !0);
            } catch {
              return !1;
            }
          };
        (0, n.useEffect)(() => {
          (0, P.Nc)(o.PageView.TacDarkWebInsights),
            u(!1),
            L(t, 0).then(() => {
              (0, P.Kz)(new o.UserLoadDarkWebInsightsResultsEvent({})), y(!1);
            });
        }, [u, t]),
          (0, n.useEffect)(() => {
            E && h?.emails && D();
          }, [E, D, h?.emails]);
        const z = (0, n.useCallback)(
            async (e) => {
              S(!0), (await L(t, 10 * (e - 1))) ? f(e) : (s.showAlert(a("team_dark_web_insights_generic_error"), c.BLW.ERROR), Z()), S(!1);
            },
            [s, t, a]
          ),
          j = (0, n.useCallback)(() => {
            m
              ? _()
              : O.length <= 0 ||
                (M(!0),
                (0, P.Kz)(
                  new o.UserSendManualInviteEvent({
                    flowStep: o.FlowStep.Start,
                    inviteCount: 0,
                    inviteFailedCount: 0,
                    inviteResentCount: 0,
                    inviteSuccessfulCount: 0,
                    isImport: !1,
                    isResend: !1
                  })
                ),
                w(new Set(O)));
          }, [O]);
        return (0, l.tZ)(
          n.Fragment,
          null,
          p ? Xu || (Xu = (0, l.tZ)(Ac, null)) : null,
          !p && h?.emails
            ? 0 === h.leaksCount
              ? (0, l.tZ)(Mc, { domainName: t })
              : (0, l.tZ)(
                  n.Fragment,
                  null,
                  (0, l.tZ)(Qu, { reports: h, suggestedInvitees: O, onInviteAll: j }),
                  (0, l.tZ)(
                    c.Zbd,
                    { sx: { padding: "32px 24px" } },
                    (0, l.tZ)(
                      "div",
                      { sx: { display: "flex", justifyContent: "space-between", marginBottom: "24px", alignItems: "center" } },
                      (0, l.tZ)(l.X6, { as: "h3" }, a("team_dark_web_insights_table_title")),
                      (0, l.tZ)(Uu, { domainName: t })
                    ),
                    (0, l.tZ)(Vu, {
                      reports: h.emails,
                      isLoading: x,
                      pendingMembers: k,
                      emailsToInvite: O,
                      onInviteAction: (e) => {
                        m
                          ? _()
                          : (M(!0),
                            (0, P.Kz)(
                              new o.UserSendManualInviteEvent({
                                flowStep: o.FlowStep.Start,
                                inviteCount: 0,
                                inviteFailedCount: 0,
                                inviteResentCount: 0,
                                inviteSuccessfulCount: 0,
                                isImport: !1,
                                isResend: !1
                              })
                            ),
                            w(new Set([e])));
                      }
                    }),
                    (0, l.tZ)(
                      c.T5p,
                      { gridTemplateColumns: "1fr auto 1fr", alignItems: "center", sx: { paddingTop: 6, paddingBottom: 3 } },
                      (0, l.tZ)(
                        l.nv,
                        { color: "ds.text.neutral.quiet", textStyle: "ds.title.block.small" },
                        a("team_dark_web_insights_table_pagination_page_size", { pageSize: 10 })
                      ),
                      (0, l.tZ)(c.tlE, { key: C, totalPages: Math.ceil(h.emailsImpactedCount / 10), currentPage: v, onPageChange: z })
                    ),
                    (0, l.tZ)(Ru, {
                      lee: e,
                      isOpen: N,
                      prefilledEmails: I,
                      onClose: () => {
                        M(!1), w(new Set([]));
                      },
                      handleInviteCompleteSuccess: () => d(),
                      teamMembers: r
                    })
                  )
                )
            : null,
          p || h?.emails || "" === t ? null : Ju || (Ju = (0, l.tZ)(Oc, null))
        );
      };
      var t_, a_;
      const n_ = ({ lastVerificationAttemptDateUnix: e, onRetry: t }) => {
          const { translate: a } = (0, g.Z)();
          return (0, B.tZ)(
            c.Ejs,
            {
              sx: {
                justifyContent: "space-between",
                flexDirection: "column",
                margin: "30px 0",
                paddingLeft: "24px",
                borderLeft: `solid 2px ${c.colors.grey00}`,
                gap: 5
              }
            },
            (0, B.tZ)(
              c.nvN,
              { size: "x-small", bold: !0 },
              a("team_dwi_pending_latest_attempt_label"),
              " ",
              e ? (0, B.tZ)(qd.Z, { date: (0, oa.Z)(e) }) : null
            ),
            (0, B.tZ)(
              c.zxk,
              {
                type: "button",
                nature: "ghost",
                sx: {
                  width: "fit-content",
                  margin: 0,
                  padding: 0,
                  minWidth: 0,
                  height: "fit-content",
                  "&:hover": { backgroundColor: "transparent !important", textDecoration: "underline" },
                  "&:focus": { backgroundColor: "transparent !important", textDecoration: "underline" }
                },
                onClick: t
              },
              (0, B.tZ)(
                c.Ejs,
                { sx: { alignItems: "center", flexDirection: "row", gap: 2 } },
                t_ || (t_ = (0, B.tZ)(c.DuK, { size: 12 })),
                (0, B.tZ)(c.nvN, { size: "x-small", color: c.colors.midGreen00 }, a("team_dwi_pending_retry_button_label"))
              )
            )
          );
        },
        s_ = ({ domain: e, isDeactivating: t, handleDeactivateDomain: a, handleRetryValidateDomain: s }) => {
          const { translate: i } = (0, g.Z)(),
            {
              dnsToken: { computedToken: o, challengeDomain: r } = { computedToken: "", challengeDomain: "" },
              lastVerificationAttemptDateUnix: l
            } = e;
          return (0, B.tZ)(
            n.Fragment,
            null,
            a_ || (a_ = (0, B.tZ)(bc, null)),
            (0, B.tZ)(
              "div",
              null,
              (0, B.tZ)(
                c.Zbd,
                { sx: { padding: "24px", margin: "24px 0" } },
                (0, B.tZ)(c.X6q, { size: "x-small" }, i("team_breach_report_domain_verify_pending_title")),
                (0, B.tZ)(
                  c.nvN,
                  { sx: { marginBottom: "20px", marginTop: "10px" }, color: c.colors.grey00 },
                  i("team_dwi_pending_verification_txt")
                ),
                (0, B.tZ)(n_, { lastVerificationAttemptDateUnix: l, onRetry: s }),
                (0, B.tZ)(
                  c.Ejs,
                  { gap: "16px" },
                  (0, B.tZ)(c.k$b, { sx: { width: "70%" } }, (0, B.tZ)(c.oil, { fullWidth: !0, defaultValue: e.name, disabled: !0 })),
                  (0, B.tZ)(
                    c.k$b,
                    null,
                    (0, B.tZ)(
                      c.zxk,
                      { type: "button", disabled: t, nature: "secondary", onClick: a },
                      i("team_dwi_pending_cancel_button_label")
                    )
                  ),
                  (0, B.tZ)(
                    c.k$b,
                    null,
                    (0, B.tZ)(c.zxk, { type: "button", disabled: !0, sx: { maxWidth: "120px" } }, i("team_breach_report_verifying_txt"))
                  )
                )
              ),
              (0, B.tZ)(
                c.UQy,
                { size: "medium" },
                (0, B.tZ)(
                  c.UlM,
                  { open: !0 },
                  (0, B.tZ)(c._Oh, null, i("team_breach_report_domain_verify_dns_confirm_text")),
                  (0, B.tZ)(
                    c.rN7,
                    null,
                    (0, B.tZ)(
                      c.T5p,
                      { gap: "24px", gridTemplateColumns: "1fr", gridAutoRows: "auto" },
                      (0, B.tZ)(c.nvN, { size: "small", color: c.colors.grey00 }, i("team_breach_report_domain_verify_dns_description")),
                      (0, B.tZ)(_c.x, {
                        inputValue: r,
                        textInputProps: { fullWidth: !0, readOnly: !0, label: i("team_settings_domain_verify_host") }
                      }),
                      (0, B.tZ)(_c.x, {
                        inputValue: o,
                        textInputProps: { fullWidth: !0, readOnly: !0, label: i("team_settings_domain_verify_txt") }
                      }),
                      (0, B.tZ)(
                        c.nvN,
                        { size: "small", sx: { marginBottom: "20px" }, color: c.colors.grey00 },
                        i("team_breach_report_domain_verify_dns_secondary_description")
                      )
                    )
                  )
                )
              )
            )
          );
        },
        i_ = { background: "ds.container.expressive.neutral.quiet.idle", color: "ds.text.neutral.standard", cursor: "default" },
        o_ = ({ label: e }) =>
          (0, B.tZ)(c.OTy, { sx: { ":hover": i_, ":focus": i_, ...i_ }, disabled: !0, selected: !1, size: "medium", label: e }),
        r_ = ({ activeDomain: e, verifiedDomains: t, selectVerifiedDomain: a }) => {
          var n;
          const s = (0, Ce.o)(G.w.DwiMultipleDomainsProd),
            i = null != (n = e?.name) ? n : "",
            o = t.map((e) =>
              (0, B.tZ)(c.OTy, {
                sx: i_,
                key: e.name,
                onClick: () => {
                  i !== e.name && a(e);
                },
                selected: i === e.name,
                size: "medium",
                label: e.name
              })
            );
          return (0, B.tZ)(
            c.G8v,
            { sx: { marginTop: "12px", padding: 0 } },
            s && t.length > 1 ? o : "" !== i ? (0, B.tZ)(o_, { label: i }) : null
          );
        },
        l_ = (e) => (e ? "auto" : "800px"),
        c_ = ({ mainContent: e, mainProps: t, secondaryContent: a, secondaryProps: n, fullWidth: s, ...i }) =>
          (0, B.tZ)(
            c.T5p,
            {
              gap: "32px",
              gridTemplateAreas: ["'top' 'bottom'", "'top' 'bottom'", "'left right'"],
              gridTemplateColumns: [null, null, `minmax(auto, ${l_(null != s && s)}) 256px`],
              gridTemplateRows: ["auto auto", "auto auto", "auto"],
              alignContent: "flex-start",
              sx: { py: "32px", px: "42px" },
              ...i
            },
            (0, B.tZ)(c.dDn, { alignSelf: "flex-start", gridArea: ["top", "top", "right"] }, (0, B.tZ)(a, { ...n })),
            (0, B.tZ)(c.dDn, { gridArea: ["bottom", "bottom", "left"] }, (0, B.tZ)(e, { ...t }))
          ),
        d_ = {
          display: "flex",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          backgroundColor: `${c.colors.dashGreen06}`,
          alignItems: "center"
        },
        u_ = (e) => n.createElement("div", { className: "container--INT3GORhR4" }, e.children);
      var __ = a(814691);
      const m_ = ({ header: e, children: t }) => (0, B.tZ)($i, { header: e }, (0, B.tZ)("div", { className: "content--zBGSSVE1dv" }, t)),
        p_ = "group_name_already_in_use";
      var g_ = a(868505);
      const y_ = ({ children: e }) => (0, B.tZ)("div", { className: "groupHeader--al0rVgMEDT" }, e),
        h_ = {
          nameContainer: "nameContainer--NmQCGqTrTR",
          nameInput: "nameInput--Vpc7anR7aO",
          nameEditIcon: "nameEditIcon--Thlp4CT5Bq",
          spinner: "spinner--QQ6Zpwc8Zd",
          _errorText: "_errorText--shQIAebNjL",
          errorMessage: "errorMessage--Btb66DLL6K _errorText--shQIAebNjL",
          error: "error--UkyphHJLOB _errorText--shQIAebNjL"
        },
        b_ = ({ onNameChanged: e, defaultValue: t, editable: a, saving: s }) => {
          const i = (0, n.useRef)(null),
            [o, r] = (0, n.useState)(t),
            [c, d] = (0, n.useState)(!1),
            [u, _] = (0, n.useState)(null);
          (0, n.useEffect)(() => {
            c && i.current?.focus();
          }, [c, i]);
          const m = () => {
              const a = i.current?.value.trim();
              d(!1),
                r(a || t),
                e &&
                  a &&
                  e(a).then(({ success: e, error: t = null }) => {
                    d(!e), _(e ? null : t);
                  });
            },
            p = Boolean(u);
          return (0, l.tZ)(
            l.X6,
            { as: "h1", color: "ds.text.neutral.standard", textStyle: "ds.title.section.large" },
            !c &&
              (0, l.tZ)(
                "div",
                {
                  className: A()(h_.nameContainer, { [h_.hoverableContainer]: a }),
                  onClick: () => {
                    a && d(!0);
                  }
                },
                o,
                s
                  ? (0, l.tZ)(oi.Z, { size: 20, containerClassName: h_.nameEditIcon })
                  : (0, l.tZ)("img", {
                      className: h_.nameEditIcon,
                      src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAxNSAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNMTAuMTY3OCAxLjA3MjAzQzEwLjkzMDUgMC4zMDkzMjMgMTIuMTY2OCAwLjMwOTMyMyAxMi45Mjk1IDEuMDcyMDNDMTMuNjkyMyAxLjgzNDc0IDEzLjY5MjMgMy4wNzEwOSAxMi45Mjk1IDMuODM0NzhNMS4xOTA0NCAxMC4wNDlMMC41IDEzLjUwMjJMMy45NTIyMSAxMi44MTE4TDExLjU0ODEgNS4yMTQ5N0w4Ljc4NjI4IDIuNDUzMkwxLjE5MDQ0IDEwLjA0OVoiIHN0cm9rZT0iIzBFNjQ3NiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo="
                    })
              ),
            c &&
              (0, l.tZ)(
                "div",
                { className: h_.editNameContainer },
                (0, l.tZ)("input", {
                  ref: i,
                  type: "text",
                  className: A()(h_.nameInput, { [h_.error]: p }),
                  defaultValue: o,
                  onBlur: m,
                  onKeyUp: (e) => {
                    13 === e.keyCode && m();
                  }
                })
              ),
            c && p ? (0, l.tZ)("div", { className: h_.errorMessage }, u) : null
          );
        };
      var x_ = a(303431);
      const S_ =
          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNSAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNOC41IDEuMTMyMzJMMTQuNSA3LjEzMjMyTTguNSAxMy4xMzIzTDE0LjUgNy4xMzIzMk0xNC41IDcuMTMyMzJMMC41MDAwMDEgNy4xMzIzMiIgc3Ryb2tlPSIjRDZEMkNFIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==",
        v_ = "onboardingStepArrow--gqb_E47Df_",
        f_ = "onboardingStepPanel--qnDSxlGTtS",
        C_ = "onboardingStepCounterPanel--KZLs4foheX",
        Z_ = "onboardingStepText--K_Kh_SIwEm",
        E_ = "circle--mihUuCFcJa";
      var D_, T_;
      const N_ = {
          CONTAINER: {
            width: "100%",
            textAlign: "center",
            marginTop: "32px",
            paddingTop: "58px",
            border: "dashed 1px ds.border.neutral.quiet.idle",
            backgroundColor: "ds.container.agnostic.neutral.supershy"
          }
        },
        M_ = () => {
          const { translate: e } = (0, g.Z)();
          return (0, l.tZ)(
            "div",
            { sx: N_.CONTAINER },
            (0, l.tZ)(
              "div",
              { className: "onboardingTitlePanel--yGKYcW_2lp" },
              (0, l.tZ)(
                l.X6,
                { as: "h1", textStyle: "ds.title.section.large", color: "ds.text.neutral.catchy" },
                e("team_groups_list_onboarding_title")
              )
            ),
            (0, l.tZ)(
              "div",
              { className: "onboardingStepsContainer--LZ8j5MDbRH" },
              (0, l.tZ)(
                "div",
                { className: f_ },
                (0, l.tZ)("div", { className: C_ }, (0, l.tZ)("div", { className: E_ }, "1")),
                (0, l.tZ)("div", { className: Z_ }, e("team_groups_list_onboarding_step_1"))
              ),
              (0, l.tZ)("div", { className: v_ }, D_ || (D_ = (0, l.tZ)("img", { src: S_ }))),
              (0, l.tZ)(
                "div",
                { className: f_ },
                (0, l.tZ)("div", { className: C_ }, (0, l.tZ)("div", { className: E_ }, "2")),
                (0, l.tZ)("div", { className: Z_ }, e("team_groups_list_onboarding_step_2"))
              ),
              (0, l.tZ)("div", { className: v_ }, T_ || (T_ = (0, l.tZ)("img", { src: S_ }))),
              (0, l.tZ)(
                "div",
                { className: f_ },
                (0, l.tZ)("div", { className: C_ }, (0, l.tZ)("div", { className: E_ }, "3")),
                (0, l.tZ)("div", { className: Z_ }, e("team_groups_list_onboarding_step_3"))
              )
            )
          );
        };
      var I_ = a(589789);
      const w_ = "onboarding_web_tacgetstarted",
        k_ = ({ key: e, index: t, isFirstTimeGroupCreation: a, hasNewGroupDelayPassed: n, children: s }) => {
          const { translate: i } = (0, g.Z)(),
            o = (0, Ie._)(),
            { [w_]: r = !1 } = o.status !== se.rq.Success ? {} : o.data;
          return (0, l.tZ)(
            c.ua7,
            {
              sx: { "@keyframes fadeIn": { "0%": { opacity: 0 }, "100%": { opacity: 1 } }, animation: "fadeIn 250ms ease-out" },
              key: e,
              passThrough: 0 !== t || !a || !r || !n,
              placement: "bottom",
              arrowSize: 12,
              trigger: "persist",
              content: (0, l.tZ)(l.nv, { color: "ds.text.inverse.standard" }, i("team_groups_list_new_group_tooltip"))
            },
            s
          );
        };
      var A_, O_;
      const L_ = {
          GROUP_GRID: {
            padding: "32px",
            borderRadius: "8px",
            backgroundColor: "ds.container.agnostic.neutral.supershy",
            border: "1px solid ds.border.neutral.quiet.idle"
          },
          GROUP_ITEM: {
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            backgroundColor: "ds.container.expressive.neutral.supershy.idle",
            borderRadius: "4px",
            border: "1px solid ds.border.neutral.quiet.idle",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
            padding: "20px 16px"
          }
        },
        z_ = "team_groups_list_search_placeholder",
        j_ = "isFirstTimeGroupCreation",
        R_ = (e, t) => {
          const a = e.name.toLocaleLowerCase(),
            n = t.name.toLocaleLowerCase();
          return a.localeCompare(n);
        },
        P_ = "onboarding_web_tacgetstarted",
        U_ = ({ tooltipDismissed: e, setTooltipDismissed: t, children: a }) => {
          var n;
          const s = (0, i.TH)(),
            { translate: o } = (0, g.Z)(),
            r = (0, Ie._)(),
            d = null != (n = s.state?.[j_]) && n,
            { [P_]: u = !1 } = r.status !== se.rq.Success ? {} : r.data;
          return (0, l.tZ)(
            c.ua7,
            {
              sx: { maxWidth: "400px" },
              passThrough: e || !d || !u,
              placement: "left-start",
              arrowSize: 0,
              trigger: "persist",
              content: (0, l.tZ)(
                c.Ejs,
                { flexDirection: "column", gap: "8px", sx: { padding: "8px", textAlign: "left", width: "auto" } },
                (0, l.tZ)(l.X6, { as: "h1", color: "ds.text.inverse.catchy" }, o("team_groups_edit_add_member_tooltip_title")),
                (0, l.tZ)(l.nv, { color: "ds.text.inverse.standard" }, o("team_groups_edit_add_member_tooltip_content")),
                (0, l.tZ)(l.zx, { onClick: () => t(!0), sx: { alignSelf: "end" } }, o("team_invite_dialog_infobox_action"))
              )
            },
            a
          );
        },
        B_ = ({ lee: e, userGroup: t }) => {
          const a = (0, n.useRef)(null),
            { translate: s } = (0, g.Z)(),
            { teamId: i } = (0, lr.fV)(),
            { teamMembers: o } = Lc(i),
            [r, l] = (0, n.useState)(null),
            [d, u] = (0, n.useState)(!1),
            [_, m] = (0, n.useState)([]),
            { invitePartialSuccessState: p, setInvitePartialSuccessState: y, handleInvitationResultClosed: h } = Xc(),
            b = (0, Wa.V)(),
            x = (e) => (0, B.tZ)(mo.q, { className: "avatar--ZwBEp_dc1w", email: e, size: 32 }),
            S = () => Boolean(_.length);
          return (0, B.tZ)(
            "div",
            null,
            (0, B.tZ)(
              g_.e,
              {
                ref: a,
                buttonLabel: s("team_groups_edit_add_members"),
                confirmButtonLabel: s("team_groups_edit_add_member_confirm"),
                cancelButtonLabel: s("team_groups_edit_add_member_cancel"),
                confirmButtonDisabled: !S(),
                onCancelButtonClick: () => {
                  m([]), l(null);
                },
                onConfirmButtonClick: async () => {
                  if (!S()) return;
                  const n = _,
                    { groupId: o, revision: r, name: d } = t,
                    p = n.map((e) => ({ alias: e.toLowerCase(), permission: "limited" }));
                  if (null === i) return void e.reportError(new Error(ls.N));
                  const g = await (0, cs.j_)({ teamId: i, groupId: o, revision: r, users: p });
                  if (g.error)
                    return "no_free_slot" === g.error.message || "not_enough_free_slots" === g.error.message
                      ? void b.showAlert(
                          s("team_group_edit_add_member_not_enough_slots_error", { count: p.length, groupName: d }),
                          c.BLW.ERROR
                        )
                      : void b.showAlert(s("team_groups_edit_invite_member_to_group_error_message_markup"), c.BLW.ERROR);
                  Object.keys(g.refusedMembers).length && y({ invitedMembers: {}, refusedMembers: g.refusedMembers, show: !0 }),
                    a.current && a.current.hidePopup(),
                    m([]),
                    l(null),
                    u(!0);
                },
                popupClassName: "addMemberPopup--Zd2J1smSL4"
              },
              (0, B.tZ)(
                U_,
                { tooltipDismissed: d, setTooltipDismissed: u },
                (0, B.tZ)("span", { className: "addMemberLabel--DXxhvug4yq" }, s("team_groups_edit_add_member_header")),
                r && (0, B.tZ)("div", { className: "error--IjVtbntYUX" }, r),
                (0, B.tZ)(x_.J, {
                  autoFocus: !0,
                  className: "addMemberMultiselect--CDfv8wJoB6",
                  dataSource: (() => {
                    const e = new Set(t.users.filter(({ status: e }) => ["accepted", "pending"].includes(e)).map(({ alias: e }) => e));
                    return o
                      .filter(({ login: t, status: a }) => "removed" !== a && !e.has(t))
                      .map(({ login: e }) => ({ text: e, icon: x(e) }));
                  })(),
                  getCurrentSelectionAvatar: x,
                  defaultValue: _,
                  isItemValid: (e) => (0, Na.vV)(e),
                  onChange: (e) => {
                    m(e);
                  },
                  onError: (e) => l(e ? s(`team_groups_edit_error_${e.message}`) : null),
                  placeholder: s("team_groups_edit_add_member_input_placeholder")
                })
              )
            ),
            (0, B.tZ)(Jc, {
              teamId: (0, C.ev)(e.globalState),
              isOpen: p.show,
              onClose: h,
              invitedMembers: p.invitedMembers,
              refusedMembers: p.refusedMembers
            })
          );
        };
      var G_;
      const F_ = Gd.Maybe.nothing(),
        q_ = ({ onBackLinkClick: e, onDeleteClick: t, onRenameGroup: a, groupName: s, lee: i, userGroup: o }) => {
          const { translate: r } = (0, g.Z)(),
            [d, u] = (0, n.useState)(Gd.Maybe.nothing()),
            [_, m] = (0, n.useState)(!1);
          return (0, l.tZ)(
            y_,
            null,
            (0, l.tZ)(
              l.zx,
              {
                mood: "brand",
                intensity: "supershy",
                layout: "iconLeading",
                icon: G_ || (G_ = (0, l.tZ)(l.JO, { name: "ArrowLeftOutlined" })),
                onClick: (t) => {
                  e(t);
                }
              },
              r("team_groups_edit_header_back")
            ),
            (0, l.tZ)(
              "div",
              { style: { display: "flex", justifyContent: "space-between" } },
              (0, l.tZ)(b_, {
                defaultValue: s,
                editable: !0,
                saving: _,
                onNameChanged: async (e) => {
                  m(!0);
                  const { error: t } = await a(e);
                  return m(!1), t === p_ ? { success: !1, error: r("team_groups_edit_header_name_already_exists") } : { success: !0 };
                }
              }),
              (0, l.tZ)(
                "div",
                { style: { display: "flex", justifyContent: "left" } },
                (0, l.tZ)("span", { style: { marginRight: "8px" } }, (0, l.tZ)(B_, { lee: i, userGroup: o })),
                (0, l.tZ)(
                  g_.e,
                  {
                    buttonLabel: r("team_groups_edit_header_delete_group"),
                    cancelButtonLabel: r("team_groups_edit_header_delete_group_cancel_button"),
                    confirmButtonLabel: r("team_groups_edit_header_delete_group_confirm_button"),
                    onCancelButtonClick: () => {
                      u(F_);
                    },
                    onConfirmButtonClick: () => {
                      u(F_), t();
                    },
                    confirmButtonDisabled: !d.caseOf({ just: (e) => e === s, nothing: () => !1 }),
                    popupClassName: "confirmPopup--NTDDMjDo4B",
                    buttonMood: "neutral",
                    buttonIntensity: "quiet",
                    buttonIconName: "ActionDeleteOutlined"
                  },
                  (0, l.tZ)(
                    "div",
                    { style: { display: "flex", flexDirection: "column", gap: 10, marginBottom: 12 } },
                    (0, l.tZ)(
                      c.nvN,
                      { size: "large" },
                      r.markup("team_groups_edit_header_delete_group_confirm_title_markup", { group: s })
                    ),
                    (0, l.tZ)(c.nvN, { color: "neutrals.8" }, r("team_groups_edit_header_delete_group_confirm_subtitle")),
                    (0, l.tZ)(c.oil, {
                      fullWidth: !0,
                      onChange: (e) => {
                        const t = e.target.value && e.target.value.trim();
                        u(Gd.Maybe.maybe(t));
                      },
                      type: "text",
                      defaultValue: d.caseOf({ just: (e) => e, nothing: () => {} }),
                      autoFocus: !0
                    })
                  )
                )
              )
            )
          );
        };
      var $_;
      const V_ = (e) =>
        n.createElement(
          "svg",
          { className: e.className, width: "16", height: "16", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg", fill: "none" },
          $_ ||
            ($_ = n.createElement("path", {
              d: "M13.5 2.5V15.5H2.5V2.5M10.5 2.5V0.5H5.5V2.5M1 2.5H15M5.5 6V11M8 6V11M10.5 6V11",
              stroke: "#0E6476",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }))
        );
      var W_;
      const H_ = n.memo(({ member: e, handleRemoveMember: t }) => {
          const { translate: a } = (0, g.Z)();
          return n.createElement(
            "tr",
            null,
            n.createElement(
              "td",
              { className: "emailCell--c3avC4hgf6" },
              n.createElement(
                "div",
                { className: "emailCellContainer--yFS7a4HnT_" },
                n.createElement(mo.q, { className: "avatar--XHrkwJbc_C", email: e.alias, size: 32 }),
                e.alias
              )
            ),
            n.createElement(
              "td",
              { className: "rightsCell--Z6diiNotCT" },
              a(
                ((s = e.permission),
                (i = e.status),
                "admin" === s && "accepted" === i
                  ? "team_groups_edit_member_list_rights_manager"
                  : "limited" === s && "accepted" === i
                  ? "team_groups_edit_member_list_rights_member"
                  : "pending" === i
                  ? "team_groups_edit_member_list_rights_pending"
                  : "")
              )
            ),
            n.createElement(
              "td",
              { className: "plusCell--B02g3LGOlG" },
              n.createElement("div", { style: { cursor: "pointer" }, onClick: () => t(e) }, W_ || (W_ = n.createElement(V_, null)))
            )
          );
          var s, i;
        }),
        K_ = (0, rs.ascend)((0, rs.prop)("permission")),
        Y_ = (0, rs.ascend)((0, rs.compose)(rs.toLower, (0, rs.prop)("alias"))),
        Q_ = (0, rs.sortWith)([K_, Y_]),
        X_ = Gd.Maybe.nothing(),
        J_ = ({ lee: e, className: t, userGroup: a, revokeMembers: s }) => {
          const { translate: i } = (0, g.Z)(),
            [o, r] = (0, n.useState)(0),
            [l, d] = (0, n.useState)({ showRemoveUserDialog: !1, removeMemberCandidate: Gd.Maybe.nothing() }),
            u = (e) => {
              d({ showRemoveUserDialog: !0, removeMemberCandidate: Gd.Maybe.just(e) });
            },
            _ = () => (a.users || []).filter((e) => "accepted" === e.status || "pending" === e.status),
            m = () => {
              d({ showRemoveUserDialog: !1, removeMemberCandidate: X_ });
            },
            p = (0, rs.map)((e) => n.createElement(H_, { key: e.alias, member: e, handleRemoveMember: u })),
            y = [
              { headerLabel: i("team_groups_edit_member_list_header_email"), headerKey: "email" },
              { headerLabel: i("team_groups_edit_member_list_header_group_rights"), colSpan: 2, headerKey: "group-rights" }
            ];
          return n.createElement(
            "div",
            null,
            n.createElement(
              "table",
              { className: A()(t, "table--hj3WYleNh5") },
              n.createElement(co, { columns: y }),
              n.createElement(
                "tbody",
                null,
                (() => {
                  const e = 24 * o;
                  return (0, rs.compose)(p, (0, rs.slice)(e, e + 24), Q_)(_());
                })()
              )
            ),
            n.createElement(
              "div",
              { className: "pagination--Xk8h572zZ7" },
              n.createElement(Id.Z, {
                currentPageIndex: o,
                itemsLength: _().length,
                itemsPerPage: 24,
                onChange: (e) => {
                  r(e);
                }
              })
            ),
            n.createElement(
              q.o,
              {
                isOpen: l.showRemoveUserDialog,
                onRequestClose: m,
                footer: n.createElement(c.cNS, {
                  primaryButtonTitle: i("team_groups_edit_member_list_action_remove_dialog_cta"),
                  primaryButtonOnClick: () => {
                    Gd.Maybe.sequence({ removeMemberCandidate: l.removeMemberCandidate, userGroup: Gd.Maybe.just(a) }).caseOf({
                      just: ({ removeMemberCandidate: t, userGroup: a }) => {
                        s(
                          e.dispatchGlobal,
                          { groupId: a.groupId, revision: a.revision, users: [t.userId] },
                          {
                            title: i("team_groups_edit_revoke_member_from_group_error_title"),
                            message: i("team_groups_edit_revoke_member_from_group_error_message")
                          }
                        );
                      },
                      nothing: () => {}
                    }),
                      d({ showRemoveUserDialog: !1, removeMemberCandidate: X_ });
                  },
                  secondaryButtonTitle: i("team_groups_edit_member_list_action_remove_dialog_cancel"),
                  secondaryButtonOnClick: m
                }),
                title: i("team_groups_edit_member_list_action_remove_dialog_header")
              },
              n.createElement(
                "div",
                null,
                n.createElement(
                  "div",
                  { className: "removeDialogTitle--Zn2JmJtOF0" },
                  i("team_groups_edit_member_list_action_remove_dialog_title", {
                    email: l.removeMemberCandidate.caseOf({ just: (e) => e.userId, nothing: () => "" })
                  })
                ),
                n.createElement("div", null, i("team_groups_edit_member_list_action_remove_dialog_subtitle"))
              )
            )
          );
        };
      var em = a(689611),
        tm = a(886662);
      const am = (e) => `{${e.match.params.uuid}}`,
        nm = { userGroup: { live: ca.C.liveAdministrableUserGroup, liveParam: am, query: ca.C.getAdministrableUserGroup, queryParam: am } },
        sm = { strategies: nm },
        im = (0, em.$)(
          (0, tm.i)(({ lee: e, userGroup: t }) => {
            const { routes: a } = (0, i.Xo)(),
              { translate: s } = (0, g.Z)(),
              { addAlertToQueue: r } = H();
            (0, hr.Bf)(),
              (0, n.useEffect)(() => {
                (0, P.Nc)(o.PageView.TacGroupDetails);
              }, []);
            const c = (e, t, a, n) => {
              try {
                const e = JSON.parse(n);
                e.code && (t.message += ` : ${e.code}`);
              } finally {
                e(__.Qy.error({ message: a, content: { error: n } })), r(t);
              }
            };
            if (!t) return null;
            const d = (0, l.tZ)(q_, {
              onBackLinkClick: () => {
                (0, i.uX)(a.teamGroupsRoutePath);
              },
              onDeleteClick: () => {
                const { groupId: n, revision: o } = t;
                (0, cs.FU)({ groupId: n, revision: o })
                  .then(() => {
                    (0, i.uX)(a.teamGroupsRoutePath);
                  })
                  .catch((t) => {
                    const a = {
                      title: s("team_groups_edit_delete_group_error_title"),
                      message: s("team_groups_edit_delete_group_error_message")
                    };
                    c(e.dispatchGlobal, a, "Group deletion failed", t.message);
                  });
              },
              onRenameGroup: async (a) => {
                if (a === t.name) return { success: !0 };
                const n = (t, a) => {
                  const n = {
                    title: s("team_groups_edit_rename_group_error_title"),
                    message: s("team_groups_edit_rename_group_error_message")
                  };
                  return c(e.dispatchGlobal, n, a, t.message), { success: !1, error: "group_renaming_failed" };
                };
                try {
                  if (!(await ca.C.isGroupNameAvailable(a))) return { success: !1, error: p_ };
                } catch (e) {
                  return n(e, "Group name availability check failed");
                }
                try {
                  const { groupId: e, revision: n } = t;
                  return await (0, cs.J0)({ groupId: e, revision: n, name: a }), { success: !0 };
                } catch (e) {
                  return n(e, "Group renaming failed");
                }
              },
              groupName: t.name,
              lee: e.child(),
              userGroup: t
            });
            return (0, l.tZ)(
              m_,
              { header: d },
              (0, l.tZ)(J_, {
                lee: e.child(),
                userGroup: t,
                revokeMembers: (e, t, a) => {
                  try {
                    ca.C.revokeUserGroupMembers(t).then(({ error: t }) => {
                      t && c(e, a, "Revoke member from group failed", t.message);
                    });
                  } catch (t) {
                    c(e, a, "Revoke member from group failed", t.message);
                  }
                }
              })
            );
          }, sm),
          nm
        );
      var om = a(158432);
      const rm = (0, om.SP)("edit", {}, []),
        lm = { userGroups: { live: ca.C.liveAdministrableUserGroups, query: ca.C.getAdministrableUserGroups } },
        cm = { strategies: lm, loadingComponent: n.createElement(oi.Z, { containerStyle: { minHeight: 240 } }) },
        dm = (0, em.$)(
          (0, tm.i)(({ userGroups: e, lee: t }) => {
            const a = (0, n.useRef)(null),
              { translate: s } = (0, g.Z)(),
              { teamId: r } = (0, lr.fV)(),
              { routes: d } = (0, Ri.Xo)(),
              { addAlertToQueue: u, reportTACError: _ } = H(),
              [m, p] = (0, n.useState)(""),
              [y, h] = (0, n.useState)(!1),
              [b, x] = (0, n.useState)(!1),
              [S, v] = (0, n.useState)(""),
              [f, C] = (0, n.useState)(e),
              Z = (0, n.useRef)(!1),
              E = (0, i.k6)();
            (0, n.useEffect)(() => {
              (0, P.Nc)(o.PageView.TacGroupList);
            }, []),
              (0, n.useEffect)(() => {
                const t = [...e].sort(R_),
                  a = S ? t.filter((e) => e.name.toLocaleLowerCase().includes(S.trim().toLocaleLowerCase())) : t;
                C(a);
              }, [S, e]);
            const D = (e) => {
                E.push({ pathname: d.teamGroupRoutePath((0, I_.FN)(e.groupId)), state: { [j_]: Z.current } });
              },
              T = async (e) => {
                var t;
                const a = null != (t = e.target.value.trim()) ? t : "",
                  n = "" !== a && (await ca.C.isGroupNameAvailable(a));
                p(a), h(n);
              },
              N = () => {
                p("");
              },
              M = async () => {
                if (!r) throw new Error("teamId missing when attempting to create group");
                try {
                  await (0, cs.wZ)(t.dispatchGlobal, { name: m, teamId: r }),
                    a.current?.hidePopup(),
                    p(""),
                    e?.length
                      ? Z.current && (Z.current = !1)
                      : ((Z.current = !0),
                        setTimeout(() => {
                          x(!0);
                        }, 700));
                } catch (e) {
                  let t;
                  try {
                    t = JSON.parse(e.message)?.code;
                  } catch {
                    t = `${e?.message}`.toUpperCase();
                  }
                  t !== V &&
                    u({
                      title: s("team_groups_list_create_group_error_title"),
                      message: s(
                        "MISSING_PUBLIC_KEY" === t
                          ? "team_groups_list_create_group_missing_public_key_error_message"
                          : "team_groups_list_create_group_error_message"
                      )
                    }),
                    _(new Error(e.message));
                }
              };
            return (0, l.tZ)(
              m_,
              {
                header: (() => {
                  const e = !y && "" !== m;
                  return (0, l.tZ)(
                    y_,
                    null,
                    (0, l.tZ)(
                      "div",
                      { sx: { display: "flex", justifyContent: "space-between" } },
                      (0, l.tZ)(
                        l.X6,
                        { as: "h1", color: "ds.text.neutral.standard", textStyle: "ds.title.section.large" },
                        s("team_groups_list_title")
                      ),
                      (0, l.tZ)(
                        g_.e,
                        {
                          ref: a,
                          buttonLabel: s("team_groups_list_new_group_cta"),
                          confirmButtonLabel: s("team_groups_list_new_group_creation_confirm_btn"),
                          cancelButtonLabel: s("team_groups_list_new_group_creation_cancel_btn"),
                          onConfirmButtonClick: M,
                          onCancelButtonClick: N,
                          confirmButtonDisabled: !y
                        },
                        (0, l.tZ)(
                          "div",
                          { style: { display: "flex", flexDirection: "column", gap: 10, marginBottom: 12 } },
                          (0, l.tZ)(l.nv, { as: "label" }, s("team_groups_list_new_group_creation_header")),
                          (0, l.tZ)(c.oil, {
                            fullWidth: !0,
                            onChange: T,
                            defaultValue: m,
                            type: "text",
                            placeholder: s("team_groups_list_new_group_input_placeholder"),
                            feedbackType: e ? "error" : void 0,
                            feedbackText: e ? s("team_groups_list_create_group_name_already_exists") : void 0,
                            autoFocus: !0
                          })
                        )
                      )
                    )
                  );
                })()
              },
              (() => {
                const t = e?.length
                  ? (0, l.tZ)(
                      c.T5p,
                      {
                        sx: L_.GROUP_GRID,
                        gap: "16px",
                        gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))",
                        gridAutoRows: "62px"
                      },
                      f.map((e, t) =>
                        e
                          ? (0, l.tZ)(
                              k_,
                              { key: e.groupId, index: t, isFirstTimeGroupCreation: Z.current, hasNewGroupDelayPassed: b },
                              (0, l.tZ)(
                                "div",
                                {
                                  className: "groupItem",
                                  onClick: () => D(e),
                                  onKeyDown: (t) => {
                                    "Enter" === t.key && D(e);
                                  },
                                  tabIndex: 0,
                                  role: "button",
                                  title: e.name,
                                  sx: L_.GROUP_ITEM
                                },
                                (0, l.tZ)(l.X6, { as: "h2", textStyle: "ds.title.block.medium", color: "ds.text.neutral.catchy" }, e.name)
                              )
                            )
                          : null
                      )
                    )
                  : A_ || (A_ = (0, l.tZ)(M_, null));
                return (0, l.tZ)(
                  "div",
                  { sx: { paddingY: "24px" } },
                  (0, l.tZ)(l.ke, { title: s("team_groups_list_info_box_title"), mood: "brand" }),
                  (0, l.tZ)(l.oi, {
                    "aria-label": s(z_),
                    placeholder: s(z_),
                    type: "search",
                    onChange: (e) => {
                      var t;
                      return v(null != (t = e.target.value) ? t : "");
                    },
                    prefixIcon: O_ || (O_ = (0, l.tZ)(l.JO, { name: "ActionSearchOutlined" })),
                    sx: { maxWidth: "365px", margin: 0, padding: "16px 0" }
                  }),
                  t
                );
              })()
            );
          }, cm),
          lm
        ),
        um = (0, om.SP)("list", {}, []),
        _m = Po(dm, Ae.$.GROUPS),
        mm = Po(im, Ae.$.GROUPS);
      function pm(e) {
        const { path: t, permission: a } = e;
        return n.createElement(
          i.GB,
          { exact: !0, path: [t, `${t}/:uuid`], component: u_, permission: a },
          n.createElement(
            i.rs,
            null,
            n.createElement(i.Vy, { exact: !0, path: t, component: _m, reducer: um }),
            n.createElement(i.Vy, { path: `${t}/:uuid`, component: mm, reducer: rm })
          )
        );
      }
      var gm = a(678128);
      const ym = {
        settingsPage: "settingsPage--k2Ztg5L3TZ",
        withoutHeader: "withoutHeader--K7wlLBUI31",
        settingsContainer: "settingsContainer--nyZHFHWont",
        settingsRow: "settingsRow--Mid_I3S6Qx",
        settingsLabelContainer: "settingsLabelContainer--rCMIUljV94",
        settingsGreyedLabel: "settingsGreyedLabel--L0ZP86y4UJ",
        textSettingRow: "textSettingRow--JwyTaO5qbq",
        selectSettingRow: "selectSettingRow--CRjY3loqBA",
        switchSettingRow: "switchSettingRow--THK1RoaDKQ",
        textFieldInputColumn: "textFieldInputColumn--G3ALnYhur_",
        helperLabelPanel: "helperLabelPanel--gGU7C6m_r2",
        infoBoxPanel: "infoBoxPanel--TMnBp9xS5d",
        textWithButtonSettingRow: "textWithButtonSettingRow--rWQRX8E5Np",
        versionContainer: "versionContainer--eWfpg9oE65",
        versionNumber: "versionNumber--uHC_eBvZbs",
        confirmationContent: "confirmationContent--C7lnmdM6Vl"
      };
      var hm;
      const bm = {
          SETTINGS_PANEL: {
            display: "inline-block",
            backgroundColor: "ds.container.agnostic.neutral.supershy",
            padding: "32px",
            marginBottom: "10px",
            flex: "1",
            borderRadius: "8px"
          }
        },
        xm = ({ children: e, secondaryContent: t, title: a, isLoading: n = !1 }) =>
          n
            ? hm || (hm = (0, l.tZ)(yr.a, { scopedToPage: !0 }))
            : (0, l.tZ)(
                "div",
                { className: A()(ym.settingsPage, { [ym.withoutHeader]: !a }) },
                (0, l.tZ)(
                  "div",
                  { className: ym.settingsContainer },
                  a
                    ? (0, l.tZ)(
                        l.X6,
                        { as: "h1", textStyle: "ds.title.section.large", color: "ds.text.neutral.catchy", sx: { marginBottom: "32px" } },
                        a
                      )
                    : null,
                  (0, l.tZ)("div", { sx: bm.SETTINGS_PANEL }, e),
                  t
                )
              );
      var Sm = a(723104),
        vm = a(599203);
      const fm = ({ data: e, targetUri: t, ...a }) => {
          const s = (0, n.useRef)(null);
          return (0, B.tZ)(
            "form",
            { action: t, method: "post", ref: s, target: "_blank", rel: "noopener" },
            (() => {
              const t = [];
              return (
                Object.keys(e).forEach((a) =>
                  t.push(
                    (0, B.tZ)("input", {
                      defaultValue: e[a],
                      key: String(65535 * Math.random()).replace(/\./, ""),
                      type: "hidden",
                      name: a
                    })
                  )
                ),
                (0, B.tZ)("div", null, t)
              );
            })(),
            (0, B.tZ)(Md.Z, { onClick: () => s.current?.submit(), ...a })
          );
        },
        Cm = {
          uploadCsvLabel: "uploadCsvLabel--sX4DnYKGlL",
          fileContainer: "fileContainer--M2SFpr0Pvl",
          file: "file--dJtQQDGzSk",
          fileIcon: "fileIcon--MKumqlXPl7",
          fileTitle: "fileTitle--d2cupH4GiA",
          fileTitleHeader: "fileTitleHeader--jqYDFR_MsK",
          fileTitleHint: "fileTitleHint--g2OBjT1L4G",
          fileTitleHintError: "fileTitleHintError--F4iw3QsNVb",
          fileTitleHintSuccess: "fileTitleHintSuccess--JPyWdw7GS8",
          fileProgressBackground: "fileProgressBackground--NEs2tyO8Pe",
          fileProgress: "fileProgress--cr0wc0wF3w",
          fileProgressAnimation: "fileProgressAnimation--aFpkqnmOMV",
          fileProgressComplete: "fileProgressComplete--y2f1JLicyr",
          fileButtons: "fileButtons--ofyh4FIc7u",
          fileError: "fileError--RHrDBIVtVA",
          fileErrorTitle: "fileErrorTitle--Jx5QASYwkS",
          fileErrorTitleIcon: "fileErrorTitleIcon--b8GGJ4i0UT",
          fileErrorContent: "fileErrorContent--G67_aw40u7"
        },
        Zm = "team_settings_duo_header_general";
      var Em = a(901286),
        Dm = a(874466);
      const Tm = ({ content: e, header: t, index: a }) =>
          (0, l.tZ)(
            c.Ejs,
            { gap: "8px", sx: { flexFlow: "row", flexBasis: "25%" } },
            (0, l.tZ)(
              c.Ejs,
              {
                justifyContent: "center",
                alignItems: "center",
                sx: {
                  width: 36,
                  height: 36,
                  borderRadius: 36,
                  flexShrink: 0,
                  backgroundColor: "ds.container.expressive.brand.quiet.idle",
                  color: "ds.text.brand.standard"
                }
              },
              a
            ),
            (0, l.tZ)(
              "section",
              null,
              (0, l.tZ)(
                c.X6q,
                {
                  sx: {
                    fontSize: 16,
                    fontFamily: "Public Sans, PublicSans-Regular, Public Sans Regular",
                    fontWeight: 400,
                    marginBottom: "8px"
                  }
                },
                t
              ),
              (0, l.tZ)(c.nvN, { sx: { fontSize: 12, lineHeight: "16px", color: "ds.text.neutral.quiet" } }, e)
            )
          ),
        Nm = () => {
          const { translate: e } = (0, g.Z)();
          return (0, B.tZ)(
            "div",
            { sx: { display: "flex", flexDirection: "row", marginBottom: 40, gap: "24px" } },
            (0, B.tZ)(Tm, {
              index: 1,
              header: e("team_settings_master_password_policies_settings_stepper_step_request_title"),
              content: e("team_settings_master_password_policies_settings_stepper_step_request_subtitle")
            }),
            (0, B.tZ)(Tm, {
              index: 2,
              header: e("team_settings_master_password_policies_settings_stepper_step_approval_title"),
              content: e("team_settings_master_password_policies_settings_stepper_step_approval_subtitle")
            }),
            (0, B.tZ)(Tm, {
              index: 3,
              header: e("team_settings_master_password_policies_settings_stepper_step_recover_title"),
              content: e("team_settings_master_password_policies_settings_stepper_step_recover_subtitle")
            }),
            (0, B.tZ)(Tm, {
              index: 4,
              header: e("team_settings_master_password_policies_settings_stepper_step_login_title"),
              content: e("team_settings_master_password_policies_settings_stepper_step_login_subtitle")
            })
          );
        };
      var Mm, Im;
      var wm = a(164718);
      const km = (e, t, a, n) => {
          const { shouldShowBuyOrUpgradePaywall: s, isTrialOrGracePeriod: r, accountSubscriptionCode: l, planType: c } = e,
            d = s && r,
            u = s && "starter" === c,
            m = `${ce.ub}?plan=${
              c === _.lD.Team ? "team" : "business"
            }&subCode=${l}&utm_source=button:buy_dashlane+click_origin:vpn_feature_activation_setting+origin_page:tac/settings/policies+origin_component:main_app`;
          let p, g, y;
          return (
            d
              ? ((p = t("team_settings_available_in_paid_subscription_badge")),
                (g = () => {
                  (0, P.Kz)(new o.UserClickEvent({ button: o.Button.BuyDashlane, clickOrigin: o.ClickOrigin.VpnFeatureActivationSetting })),
                    (0, j.Yo)(m);
                }),
                (y = t("team_settings_buy_dashlane_cta")))
              : u &&
                ((p = t("team_settings_upgrade_badge")),
                (g = () => {
                  (0, P.Kz)(new o.UserClickEvent({ button: o.Button.SeePlan, clickOrigin: o.ClickOrigin.VpnFeatureActivationSetting })),
                    (0, i.uX)(`${n.teamAccountChangePlanRoutePath}`);
                }),
                (y = t("team_settings_see_plans_cta"))),
            {
              type: u || d ? "cta" : "switch",
              badgeIconName: u || d ? "PremiumOutlined" : void 0,
              badgeLabel: p,
              ctaAction: g,
              ctaLabel: y,
              label: t("team_settings_vpn"),
              helperLabel: t("team_settings_vpn_helper"),
              value: a.enableVPN,
              feature: "enableVPN",
              getErrorMessageForKey: (e) => {
                switch (e) {
                  case "too_many_requests":
                    return t("team_settings_too_many_requests");
                  case "not_authorized":
                    return t("team_settings_vpn_disabled_for_free_trial");
                  default:
                    return t("team_settings_vpn_save_error_msg_generic_error");
                }
              }
            }
          );
        },
        Am = "team_settings_space_management_infobox_learn_more_button",
        Om = "team_settings_too_many_requests",
        Lm = "team_settings_enable_space_restrictions_save_error_msg_generic_error",
        zm = a(894017),
        jm = "team_settings_too_many_requests",
        Rm = "team_settings_lock_on_exit_save_error_msg_generic_error",
        Pm = ({ header: e }) =>
          (0, l.tZ)(l.X6, { as: "h2", key: e.label, textStyle: "ds.title.supporting.small", color: "ds.text.neutral.quiet" }, e.label),
        Um = ({ onClick: e, content: t }) =>
          (0, l.tZ)(l.zx, { mood: "brand", intensity: "quiet", onClick: e, sx: { maxWidth: "fit-content" } }, t),
        Bm = "team_settings_saving_label",
        Gm = "team_settings_save_success_label",
        Fm = {
          SETTINGS_LABEL_MARGIN_TOP: { marginTop: "13px" },
          HELPER_LABEL_PANEL: {
            color: "ds.text.neutral.standard",
            marginTop: "13px",
            marginBottom: "8px",
            paddingRight: "70px",
            fontSize: "12px",
            fontWeight: "400"
          }
        },
        qm = ({ field: e, editSettings: t, checkForAuthenticationError: a }) => {
          const { translate: s } = (0, g.Z)(),
            { reportTACError: i } = H(),
            o = !!e.multiLine,
            r = e.deserializer ? e.deserializer(e.value) : e.value,
            c = (0, n.useCallback)(
              async (n) => {
                var s;
                if (!t) return;
                if (e.validator) {
                  const t = e.serializer ? e.serializer(n) : n,
                    a = e.validator(t);
                  if (a) throw new Error(e.getErrorMessageForKey?.(a));
                }
                if (a?.()) return;
                const o = {};
                if (["disableAutoLoginDomains", "teamDomain"].includes(null != (s = e.feature) ? s : "")) {
                  const t = e.value;
                  if (t.length) {
                    const a = e.serializer?.(n),
                      s = t.filter((e) => !a.some((t) => t === e)),
                      i = a.filter((e) => !t.some((t) => t === e));
                    e.feature && (o[e.feature] = { removed: s, added: i.map((e) => e.toLowerCase()) });
                  } else e.serializer && e.feature && (o[e.feature] = { added: e.serializer(n) });
                } else e.feature && (o[e.feature] = e.serializer ? e.serializer(n) : n);
                if (Object.keys(o).length)
                  try {
                    await t(o);
                  } catch (t) {
                    i(t, e.getErrorMessageForKey?.(t.message));
                  }
              },
              [a, t, e, i]
            );
          return (0, l.tZ)(kn.X, {
            multiLine: o,
            defaultValue: r,
            key: e.label,
            ariaLabelledBy: e.feature,
            saveBtnLabel: s("team_settings_button_save_label"),
            savingBtnLabel: s(Bm),
            editBtnLabel: s("team_settings_button_edit_label"),
            placeholder: e.hintText,
            inputStyle: e.inputStyle,
            hintStyle: e.hintStyle,
            successMessage: s(Gm),
            onSave: c,
            textFieldClassName: ym.textFieldInputColumn,
            isDisabled: e.isReadOnly
          });
        };
      var $m = a(259284);
      var Vm, Wm;
      const { accessibleValidatorGreen: Hm } = c.colors,
        Km = ({
          value: e,
          isDisabled: t,
          onSelectElementClick: a,
          options: s,
          saveValueFunction: i,
          successMessage: o,
          savingMessage: r
        }) => {
          const [d, u] = (0, n.useState)(""),
            [_, m] = (0, n.useState)(!1),
            [p, g] = (0, n.useState)(!1);
          return (0, l.tZ)(
            "div",
            { className: "container--Wz5267l08y" },
            (0, l.tZ)(
              "div",
              { className: "select--EypTcJ6Y5l" },
              (0, l.tZ)(
                $m.m,
                {
                  value: e,
                  disabled: t || _,
                  onChangeExtended: (e, t, a) => {
                    m(!0),
                      i(a)
                        .then(() => {
                          m(!1),
                            g(!0),
                            u(""),
                            setTimeout(() => {
                              g(!1);
                            }, 1e3);
                        })
                        .catch((e) => {
                          m(!1), g(!1);
                          const t = (0, fi.i)(e);
                          u(t);
                        });
                  },
                  onClick: a,
                  errorText: d,
                  successText: p ? o : _ ? r : "",
                  style: { marginTop: "-1.5em", width: 320 }
                },
                s.map((e) => (0, l.tZ)($m.t, { key: e.value, value: e.value, primaryText: e.label, disabled: e.disabled }))
              )
            ),
            _ || p
              ? (0, l.tZ)(
                  "div",
                  { className: "feedback--XqG4rKApan" },
                  _ ? Vm || (Vm = (0, l.tZ)(c.HoD, { color: Hm, size: 18 })) : Wm || (Wm = (0, l.tZ)(c.rE2, { size: 20, color: Hm }))
                )
              : null
          );
        },
        Ym = ({ field: e, checkForAuthenticationError: t, editSettings: a }) => {
          const { translate: s } = (0, g.Z)(),
            { reportTACError: i } = H(),
            o = (0, n.useCallback)(
              async (n) => {
                if (!a || t?.() || !e.feature) return;
                const s = {};
                s[e.feature] = "unset" === n ? null : e.serializer ? e.serializer(n) : n;
                try {
                  await a(s);
                } catch (t) {
                  const a = t.data?.content || {},
                    n = e.getErrorMessageForKey?.(a.error);
                  i(t, n);
                }
              },
              [t, a, e, i]
            );
          return (0, l.tZ)(Km, {
            key: e.label,
            value: e.value,
            saveValueFunction: o,
            successMessage: s(Gm),
            savingMessage: s(Bm),
            options: e.options,
            isDisabled: e.isReadOnly
          });
        },
        Qm = ({ field: e, editSettings: t, checkForAuthenticationError: a, policies: s }) => {
          var i;
          const { translate: o } = (0, g.Z)(),
            { reportTACError: r } = H(),
            [c, d] = (0, n.useState)(!1),
            [u, _] = (0, n.useState)(""),
            [m, p] = (0, n.useState)(!1),
            y = null != (i = e.value) && i ? e.confirmDisable : e.confirmEnable,
            h = e.value ? e.confirmDisable : e.confirmEnable,
            b = (0, n.useCallback)(async () => {
              if (!t || a?.()) return;
              const n = {};
              if (e.feature) {
                const t = void 0 !== e.value && !e.value;
                (n[e.feature] = e.serializer ? e.serializer(t) : t),
                  t || e.constraintsFromOtherFields?.requiredFor?.forEach((e) => e.reset?.(n));
              }
              try {
                await t(n);
              } catch (t) {
                const a =
                    t.data?.content ||
                    (429 === t.code && { error: "too_many_requests" }) ||
                    ("not_authorized" === t.message && { error: "not_authorized" }) ||
                    {},
                  n = e.getErrorMessageForKey?.(a.error);
                r(t, n);
              }
            }, [a, t, e, r]),
            x = (0, n.useCallback)(() => {
              d(!1), _(""), p(!1);
            }, []),
            S = (0, n.useCallback)(() => (d(!0), _(""), p(!1), Promise.resolve()), []),
            v = (0, n.useCallback)(async () => {
              const e = await (0, cs.RR)({ masterPassword: null != u ? u : "" });
              return p(!e), e ? (x(), b()) : Promise.resolve();
            }, [b, x, u]),
            f = (0, n.useCallback)((e) => {
              _(e.target.value), p(!1);
            }, []),
            C = (0, n.useCallback)(
              (e) => {
                "Enter" === e.key && u && v();
              },
              [v, u]
            ),
            Z = (0, n.useCallback)(async () => {
              e.customSwitchHandler ? await e.customSwitchHandler() : y ? await S() : await b();
            }, [y, e, b, S]);
          return (0, l.tZ)(
            n.Fragment,
            null,
            (0, l.tZ)(Sm.Z, {
              isLoading: e.isLoading,
              genericErrorMessage: o("_common_generic_error"),
              ariaLabelledBy: e.feature,
              key: e.label,
              value: e.value,
              isReadOnly: e.isReadOnly,
              isDisabled: e.constraintsFromOtherFields?.disabledWhen?.some((e) => s && e?.condition?.(s)),
              disabledFeedbackMessage: e.constraintsFromOtherFields?.disabledWhen?.find((e) => s && e?.condition?.(s) && e?.warningMessage)
                ?.warningMessage,
              saveValueFunction: Z,
              successMessage: o("team_settings_save_success_label"),
              savingMessage: o("team_settings_saving_label")
            }),
            c && h
              ? (0, l.tZ)(
                  Em.Z,
                  {
                    isOpen: !0,
                    title: h.title,
                    labelDismiss: h.dismiss,
                    labelConfirm: h.confirm,
                    onDismiss: x,
                    onConfirm: v,
                    onChange: f,
                    isMasterPasswordInvalid: m,
                    ctaIsDisabled: !u,
                    onKeyDown: C
                  },
                  (0, l.tZ)(l.nv, { color: "ds.text.neutral.quiet" }, h.helper1),
                  (0, l.tZ)(l.nv, { color: "ds.text.neutral.quiet" }, h.helper2),
                  (0, l.tZ)(l.nv, { color: "ds.text.neutral.quiet" }, h.label)
                )
              : null
          );
        },
        Xm = (e) => {
          const { field: t, ...a } = e;
          switch (t.type) {
            case "text":
              return (0, l.tZ)(qm, { field: t, ...a });
            case "select":
              return (0, l.tZ)(Ym, { field: t, ...a });
            case "switch":
              return (0, l.tZ)(Qm, { ...e });
            case "cta":
              return (0, l.tZ)(Um, { onClick: t.ctaAction, content: t.ctaLabel });
            default:
              return null;
          }
        },
        Jm = (e) => {
          var t;
          const a = { "> *": { flex: "1" }, display: "flex", alignItems: "flex-start", flexDirection: "row", marginBottom: "32px" },
            { field: n } = e;
          switch (n.type) {
            case "text":
              a.marginTop = "7px";
              break;
            case "select":
              a.marginTop = "4px";
              break;
            case "switch":
            case "cta":
              a.marginTop = "20px";
          }
          return (0, l.tZ)(
            "div",
            { key: n.feature, sx: a },
            (0, l.tZ)(
              "div",
              { sx: { maxWidth: "50%" } },
              (0, l.tZ)(
                "div",
                { sx: { display: "flex", flexDirection: "row", gap: "8px" } },
                (0, l.tZ)(
                  l.X6,
                  {
                    as: "h3",
                    textStyle: "ds.title.block.medium",
                    color: "ds.text.neutral.catchy",
                    sx: "select" === n.type || "text" === n.type ? Fm.SETTINGS_LABEL_MARGIN_TOP : {},
                    id: n.feature
                  },
                  n.label
                    .split("//")
                    .map((e, t) =>
                      t % 2 ? (0, l.tZ)("span", { key: e, sx: { color: "ds.text.oddity.disabled", fontWeight: "300" } }, e) : e
                    )
                ),
                n.badgeLabel
                  ? (0, l.tZ)(l.Ct, { label: n.badgeLabel, mood: "brand", iconName: n.badgeIconName, layout: "iconLeading" })
                  : null
              ),
              n.helperLabel ? (0, l.tZ)("div", { id: "helper-label-panel", sx: Fm.HELPER_LABEL_PANEL }, n.helperLabel) : null,
              n.infoBox
                ? (0, l.tZ)(
                    "div",
                    { sx: { marginTop: "20px" } },
                    (0, l.tZ)(l.ke, {
                      size: "large",
                      title: n.infoBox.title,
                      description: n.infoBox.description,
                      mood: null != (t = n.infoBox.mood) ? t : "neutral"
                    })
                  )
                : null
            ),
            (0, l.tZ)(Xm, { ...e })
          );
        },
        ep = "_common_generic_error",
        tp = () => {
          const { translate: e } = (0, g.Z)(),
            {
              inviteLinkDataForAdmin: t,
              getInviteLinkDataForAdmin: a,
              inviteLinkDataLoading: s,
              createInviteLink: i,
              toggleInviteLink: o
            } = (0, rd.h)(),
            r = cn(),
            d = (0, yd.U)();
          if (
            ((0, n.useEffect)(() => {
              a();
            }, [a]),
            !r || null === d)
          )
            return null;
          const u = { type: "header", label: e("team_settings_header_user_access") },
            _ = {
              type: "switch",
              isLoading: s,
              label: e("team_settings_enable_invite_link_label"),
              isReadOnly: d,
              feature: "inviteLink",
              helperLabel: (0, l.tZ)(
                n.Fragment,
                null,
                e("team_settings_disable_enable_invite_link_helper"),
                !1 === t?.disabled
                  ? (0, l.tZ)(
                      c.Ejs,
                      { flexDirection: "row", flexWrap: "nowrap", alignItems: "center", gap: "8px", sx: { marginTop: "12px" } },
                      (0, l.tZ)(Lu.q, {
                        mood: "neutral",
                        intensity: "supershy",
                        iconProps: { color: "ds.text.neutral.standard" },
                        copyValue: (0, ce.cI)(t.teamKey)
                      }),
                      (0, l.tZ)(c.nvN, { bold: !0, size: "x-small", sx: { textDecoration: "underline" } }, (0, ce.cI)(t.teamKey))
                    )
                  : null
              ),
              value: !1 === t?.disabled,
              customSwitchHandler: async () => {
                const n = t?.teamKey;
                if (n) {
                  if (!(await o(!t?.disabled))) throw Error(e(ep));
                } else if (!(await i(r))) throw Error(e(ep));
                if (!(await a())) throw Error(e(ep));
              }
            };
          return (0, l.tZ)(n.Fragment, null, (0, l.tZ)(Pm, { header: u }), (0, l.tZ)(Jm, { field: _ }));
        },
        ap = ({ settingRow: e, editSettings: t, checkForAuthenticationError: a }) => {
          const { reportTACError: n } = H();
          return (0, l.tZ)(l.ke, {
            sx: { margin: "16px 0" },
            title: e.label,
            description: e.description,
            icon: e.icon,
            size: "large",
            mood: e.mood,
            actions: [
              e.actions?.secondary
                ? (0, l.tZ)(
                    l.zx,
                    {
                      mood: e.mood,
                      intensity: "quiet",
                      icon: "ActionOpenExternalLinkOutlined",
                      layout: "iconLeading",
                      key: e.actions?.secondary.label,
                      onClick: e.actions?.secondary.onClick
                    },
                    e.actions?.secondary.label
                  )
                : null,
              e.actions?.primary
                ? (0, l.tZ)(
                    l.zx,
                    {
                      mood: e.mood,
                      intensity: "catchy",
                      key: e.actions?.primary.label,
                      onClick: async () => {
                        if (t && e.featuresToDisable && !a?.())
                          try {
                            await t(e.featuresToDisable);
                          } catch (e) {
                            n(e);
                          }
                      }
                    },
                    e.actions?.primary.label
                  )
                : null
            ]
          });
        },
        np = ({ textWithButton: e }) =>
          (0, l.tZ)(
            "div",
            {
              key: e.label,
              sx: { display: "flex", alignItems: "flex-start", flexDirection: "row", marginBottom: "32px", marginTop: "7px" }
            },
            (0, l.tZ)(
              "div",
              null,
              (0, l.tZ)(
                l.X6,
                { as: "h3", textStyle: "ds.title.block.medium", color: "ds.text.neutral.catchy", sx: Fm.SETTINGS_LABEL_MARGIN_TOP },
                e.label
                  .split("//")
                  .map((e, t) =>
                    t % 2 ? (0, l.tZ)("span", { sx: { color: "ds.text.oddity.disabled", fontWeight: "300" }, key: e }, e) : e
                  )
              ),
              e.helperLabel ? (0, l.tZ)("div", { id: "helper-label-panel", sx: Fm.HELPER_LABEL_PANEL }, e.helperLabel) : null
            ),
            (0, l.tZ)("div", null, (0, l.tZ)(vm.Z, { label: e.buttonLabel, onClick: e?.onClick }))
          ),
        sp = ({ settingRow: e, ...t }) => {
          switch (e.type) {
            case "header":
              return (0, l.tZ)(Pm, { header: e });
            case "textwithbutton":
              return (0, l.tZ)(np, { textWithButton: e });
            case "quickDisable":
              return (0, l.tZ)(ap, { settingRow: e });
            default:
              return (0, l.tZ)(Jm, { field: e, ...t });
          }
        };
      var ip,
        op,
        rp = a(460384),
        lp = a(287279);
      const cp = new Map([
          [_.lD.Business, o.B2bPlanTier.Business],
          [_.lD.Team, o.B2bPlanTier.Team],
          [_.lD.Legacy, o.B2bPlanTier.Legacy],
          [_.lD.Enterprise, o.B2bPlanTier.Business]
        ]),
        dp = ({
          currentBillingPlanTier: e,
          emailDomainError: t,
          emailDomainSubmittedCount: a,
          emailDomainValidatedCount: n,
          encryptionServicePlatformSelected: s,
          idpValidationResponse: i,
          ssoSetupStep: r,
          ssoSolutionChosen: l,
          testSsoResponse: c
        }) => {
          (0, P.Kz)(
            new o.UserSetupSsoEvent({
              currentBillingPlanTier: e,
              emailDomainError: null != t ? t : o.EmailDomainError.OtherError,
              emailDomainSubmittedCount: null != a ? a : 0,
              emailDomainValidatedCount: null != n ? n : 0,
              encryptionServicePlatformSelected: null != s ? s : o.EncryptionServicePlatformSelected.AmazonWebServices,
              idpValidationResponse: null != i ? i : o.IdpValidationResponse.Success,
              ssoSetupStep: r,
              ssoSolutionChosen: l,
              testSsoResponse: null != c ? c : o.TestSsoResponse.NotTested
            })
          );
        },
        up = (e) => (e && cp.get(e)) || o.B2bPlanTier.Business,
        _p = (e) => {
          dp({ ...e, currentBillingPlanTier: up(e.currentBillingPlanTier), ssoSolutionChosen: o.SsoSolutionChosen.SelfHostedSso });
        },
        mp = (e) => {
          dp({ ...e, currentBillingPlanTier: up(e.currentBillingPlanTier), ssoSolutionChosen: o.SsoSolutionChosen.NitroSso });
        };
      var pp = a(533258),
        gp = a(605961),
        yp = a.n(gp),
        hp = a(324047);
      const bp = (e) => {
          const { markdownValue: t = "", linkParams: a = {}, linkProps: s } = e,
            { linkTarget: i, onLinkClicked: o = () => {} } = a,
            r = t.includes("\n");
          return n.createElement(yp(), {
            source: t,
            allowedTypes: ["Text", "Link", "Emph", "Strong", "Paragraph", "Softbreak", "List", "Item", "Code"],
            containerTagName: "span",
            softBreak: "br",
            renderers: {
              Paragraph: r ? "p" : "span",
              Link: function (e) {
                return n.createElement(
                  hp.Z,
                  {
                    ...s,
                    "aria-label": t,
                    href: e.href,
                    target: i,
                    onClick: () => {
                      o(e.href);
                    }
                  },
                  e.children
                );
              }
            }
          });
        },
        xp = ({ onClose: e, onConfirm: t, titleText: a, bodyText: s }) => {
          const { translate: i } = (0, g.Z)(),
            [o, r] = (0, n.useState)(!1),
            [d, u] = (0, n.useState)(null),
            _ = i("_common_action_cancel");
          return (0, l.tZ)(
            c.VqE,
            { isOpen: !0, disableOutsideClickClose: !0, disableScrolling: !0, closeIconName: _, onClose: e },
            (0, l.tZ)(c.$N8, { title: a }),
            (0, l.tZ)(
              c.a7O,
              null,
              (0, l.tZ)(c.nvN, { color: d ? "ds.text.danger.standard" : "ds.text.neutral.standard" }, null != d ? d : s)
            ),
            (0, l.tZ)(
              c.cNS,
              null,
              (0, l.tZ)(
                l.zx,
                {
                  sx: { mr: "12px" },
                  mood: "neutral",
                  intensity: "quiet",
                  onClick: () => {
                    e();
                  },
                  disabled: o
                },
                _
              ),
              (0, l.tZ)(
                l.zx,
                {
                  mood: "brand",
                  intensity: "catchy",
                  onClick: async () => {
                    r(!0), u(null);
                    try {
                      await t(), r(!1), e();
                    } catch (e) {
                      u(e instanceof Error ? e.message : i("_common_generic_error")), r(!1);
                    }
                  },
                  isLoading: o,
                  disabled: o
                },
                "Yes, clear setup"
              )
            )
          );
        };
      let Sp = (function (e) {
        return (e.ChooseSso = "ChooseSso"), (e.SelfHosted = "SelfHosted"), (e.Nitro = "Nitro"), e;
      })({});
      const vp = ({ pageContext: e, onSetupClear: t }) => {
        const { routes: a } = (0, i.Xo)(),
          s = (0, L.B)(),
          { translate: r } = (0, g.Z)(),
          [c, u] = (0, n.useState)(!1),
          { teamId: _ } = (0, lr.fV)(),
          { clearSettings: m, initSsoProvisioning: p } = (0, $e.u)(rp.y),
          { status: y, data: h } = (0, d.k)(rp.y, "ssoProvisioning");
        if (y !== se.rq.Success || h.enableSSO.ssoEnabled) return null;
        const {
          global: { inferredSsoState: b, ssoCapable: x }
        } = h;
        if (!1 === x)
          return (0, l.tZ)(l.ke, {
            mood: "neutral",
            size: "large",
            title: r("team_settings_es_sso_plan_error_header"),
            description: r("team_settings_es_sso_plan_missing_body"),
            actions: s?.premiumStatus
              ? [
                  (0, O.wt)(s.premiumStatus)
                    ? (0, l.tZ)(
                        l.zx,
                        {
                          key: "buy",
                          onClick: () => {
                            (0, P.Kz)(new o.UserClickEvent({ button: o.Button.BuyDashlane, clickOrigin: o.ClickOrigin.SsoPaywallBanner })),
                              (0, j.Yo)(`${ce.ub}?plan=business&subCode=${s?.subscriptionCode}`);
                          },
                          role: "link"
                        },
                        r("team_account_teamplan_plan_buy_dashlane")
                      )
                    : (0, l.tZ)(
                        i.rU,
                        { key: "upgrade", to: `${a.teamAccountChangePlanRoutePath}?plan=business` },
                        (0, l.tZ)(l.zx, null, r("team_settings_es_sso_plan_missing_button"))
                      )
                ]
              : []
          });
        const S = [pp.s5.enum.NitroIncomplete, pp.s5.enum.SelfHostedIncomplete];
        if (e !== Sp.ChooseSso && S.includes(b)) {
          let a = null,
            s = async () => {
              await t?.(), _p({ ssoSetupStep: o.SsoSetupStep.ClearSsoSettings });
            };
          e === Sp.SelfHosted && b === pp.s5.enum.NitroIncomplete
            ? ((a = {
                title: "To use self-hosted SSO, clear Confidential SSO setup",
                description:
                  "If you want to use self-hosted SSO, which supports SCIM provisioning, select **Clear setup** to erase your progress in Dashlane. Make sure to also delete your progress in your IdP.",
                cta: "Clear setup"
              }),
              (s = async () => {
                await m(), await p({ teamId: `${_}` }), await t?.();
              }))
            : e === Sp.Nitro &&
              b === pp.s5.enum.SelfHostedIncomplete &&
              ((a = {
                title: "To use Confidential SSO, clear self-hosted SSO setup",
                description:
                  "If you want to use Confidential SSO, select **Clear setup** to erase your progress in Dashlane. Make sure to also delete your progress in your IdP.",
                cta: "Clear setup"
              }),
              (s = async () => {
                await ca.C.clearSelfHostedESSettings(), await p({ teamId: `${_}` }), await t?.();
              }));
          const i = [pp.s5.enum.NitroComplete, pp.s5.enum.SelfHostedComplete];
          if (a && !i.includes(b))
            return (0, l.tZ)(
              n.Fragment,
              null,
              c
                ? (0, l.tZ)(xp, {
                    onClose: () => u(!1),
                    onConfirm: s,
                    titleText: "Are you sure?",
                    bodyText: "This action can’t be undone."
                  })
                : null,
              (0, l.tZ)(l.ke, {
                mood: "neutral",
                size: "large",
                title: a.title,
                description: (0, l.tZ)(bp, { markdownValue: a.description }),
                actions: [(0, l.tZ)(l.zx, { key: "clear", onClick: () => u(!0) }, a.cta)]
              })
            );
        }
        return (0, l.tZ)(l.ke, {
          mood: "warning",
          size: "large",
          title: "Switching between SSO options isn't available right now",
          description:
            "We're in the process of adding new capabilities to Confidential SSO. During this period, you can't switch between the two options. Before turning on your chosen SSO option, please make sure it meets your organization's needs."
        });
      };
      var fp,
        Cp = a(165911);
      const Zp = [
          { li: "In a separate window, log in to your IdP account." },
          {
            li: "Find the section to create a new SSO application.",
            ol: [
              { li: "Add the ID and URLs provided here to your application." },
              { li: "Add members who will log in to Dashlane with SSO to your application." }
            ]
          }
        ],
        Ep = ({ content: e }) =>
          (0, l.tZ)(
            "ol",
            { sx: { color: "ds.text.neutral.quiet" } },
            e.map(({ li: e, ol: t }, a) =>
              (0, l.tZ)(
                l.nv,
                { key: a, as: "li", textStyle: "ds.body.standard.regular" },
                (0, l.tZ)(bp, { markdownValue: e }),
                t ? (0, l.tZ)(Ep, { content: t }) : null
              )
            )
          ),
        Dp = () => {
          var e, t, a;
          const { translate: n } = (0, g.Z)(),
            s = (0, d.k)(rp.y, "ssoProvisioning"),
            i = s.status === se.rq.Loading,
            o = {
              entityId: null != (e = s.data?.idpApplication.entityId) ? e : "",
              acsUrl: null != (t = s.data?.idpApplication.acsUrl) ? t : "",
              signOnUrl: null != (a = s.data?.idpApplication.signOnUrl) ? a : ""
            };
          return (0, l.tZ)(
            "div",
            { sx: { display: "grid", gridTemplateColumns: "auto", gridAutoRows: "auto", gap: "24px", marginBottom: "32px" } },
            (0, l.tZ)(
              "div",
              { sx: { ol: { listStyleType: "decimal", ml: "20px", ol: { listStyleType: "lower-alpha" } } } },
              (0, l.tZ)(
                l.X6,
                { as: "h2", textStyle: "ds.title.section.medium", color: "ds.text.neutral.standard", sx: { mb: "8px" } },
                n("sso_confidential_idp_setup_page_title")
              ),
              fp || (fp = (0, l.tZ)(Ep, { content: Zp }))
            ),
            (0, l.tZ)(l.ke, { mood: "brand", size: "small", title: n("sso_confidential_idp_setup_infobox_message") }),
            (0, l.tZ)(
              "div",
              { sx: { display: "grid", gridTemplateColumns: "auto", gridAutoRows: "auto", gap: "24px" } },
              (0, l.tZ)(Cp.x, { isLoading: i, value: o.entityId, label: n("sso_confidential_idp_setup_entity_id_label"), readOnly: !0 }),
              (0, l.tZ)(Cp.x, { isLoading: i, value: o.acsUrl, label: n("sso_confidential_idp_setup_acs_url_label"), readOnly: !0 }),
              (0, l.tZ)(Cp.x, { isLoading: i, value: o.signOnUrl, label: n("sso_confidential_idp_setup_sign_on_url_label"), readOnly: !0 })
            )
          );
        },
        Tp = "sso_confidential_metadata_form_field_placeholder",
        Np = "sso_confidential_metadata_form_error_could_not_find_entrypoint",
        Mp = "sso_confidential_metadata_form_error_cound_not_validate_certificate",
        Ip = "sso_confidential_metadata_form_error_server_error",
        wp = {
          XML_PARSE_FAILED: "sso_confidential_metadata_form_error_could_not_read_metadata",
          KEY_DESCRIPTOR_NOT_FOUND: Np,
          IDP_ENTRYPOINT_NOT_FOUND: Np,
          INVALID_IDP_SSO_DESCRIPTOR: Np,
          MISSING_CERTIFICATE: "sso_confidential_metadata_form_error_no_certificate",
          MULTIPLE_CERTIFICATES: "sso_confidential_metadata_form_error_multiple_certificates",
          INVALID_ENTRYPOINT: "sso_confidential_metadata_form_error_invalid_entrypoint",
          CERTIFICATE_TOO_SHORT: Mp,
          CERTIFICATE_TOO_LONG: Mp,
          CERTIFICATE_DECODE_FAILED: Mp
        },
        kp = {
          INVALID_METADATA_CONTENT: "sso_confidential_metadata_form_error_invalid_metadata_content",
          INVALID_METADATA_URL: "sso_confidential_metadata_form_error_invalid_metadata_url",
          DOMAIN_UPDATE_FAILED: Ip,
          SAVE_METADATA_FAILED: Ip,
          INTERNAL_ERROR: "sso_confidential_metadata_form_error_internal_error"
        },
        Ap = "Unexpected server error. Please try again or contact Customer Support.",
        Op = "ssoIdpMetadata",
        Lp = () => {
          var e;
          const [t, a] = (0, n.useState)(!1),
            { translate: s } = (0, g.Z)(),
            i = (0, d.k)(rp.y, "ssoProvisioning"),
            { createTeam: r, validateMetadata: c, updateMetadata: u } = (0, $e.u)(rp.y),
            _ = i.status === se.rq.Loading,
            m = null != (e = i.data?.idpMetadata.metadataValue) ? e : "",
            p = { ssoIdpMetadata: m },
            y = i.data?.global.inferredSsoState,
            h = [pp.s5.enum.SelfHostedIncomplete, pp.s5.enum.SelfHostedComplete].includes(y),
            b = (0, n.useCallback)(
              async (e, t) => {
                try {
                  a(!0);
                  const n = i.data?.global.isTeamProvisionedInNitro;
                  n || (await r(), mp({ ssoSetupStep: o.SsoSetupStep.CreateSsoApplication })),
                    mp({ ssoSetupStep: o.SsoSetupStep.UpdateIdpSettings });
                  const l = await u({ metadata: "" === e.ssoIdpMetadata ? null : e.ssoIdpMetadata });
                  if ((a(!1), (0, lp.hx)(l))) {
                    const e = l.error.tag.toUpperCase();
                    return t.setFieldError(Op, s(e in kp ? kp[e] : Ap));
                  }
                } catch (e) {
                  return t.setFieldError(Op, Ap);
                }
              },
              [r, i.data?.global.isTeamProvisionedInNitro, s, u]
            ),
            x = async (e) => {
              var t;
              if (e && !new wm.Y(e).isUrlValid())
                try {
                  const a = await c({ metadata: e });
                  if (
                    (mp({
                      ssoSetupStep: o.SsoSetupStep.ValidateIdpMetadata,
                      idpValidationResponse:
                        ((t = a),
                        (0, lp.hx)(t)
                          ? Object.values(o.IdpValidationResponse).includes(t.error.tag)
                            ? t.error.tag
                            : o.IdpValidationResponse.XmlParseFailed
                          : o.IdpValidationResponse.Success)
                    }),
                    (0, lp.hx)(a))
                  ) {
                    const e = a.error.tag.toUpperCase();
                    return s(e in wp ? wp[e] : wp.XML_PARSE_FAILED);
                  }
                } catch (e) {
                  return e instanceof Error ? e.message : "Unknown error";
                }
            };
          return (0, l.tZ)(
            $a.J9,
            { initialValues: p, onSubmit: b, enableReinitialize: !0 },
            ({ isSubmitting: e, isValid: a, isValidating: n, dirty: i }) => {
              const o = h || e || _,
                r = o || !a || n || !i;
              return (0, l.tZ)(
                $a.l0,
                { noValidate: !0 },
                (0, l.tZ)(
                  "div",
                  { sx: { display: "grid", gridTemplateColumns: "auto", gridAutoRows: "auto", gap: "8px" } },
                  (0, l.tZ)(
                    l.X6,
                    { as: "h2", textStyle: "ds.title.section.medium", color: "ds.text.neutral.standard" },
                    s("sso_confidential_metadata_form_section_heading")
                  ),
                  (0, l.tZ)(
                    l.nv,
                    { textStyle: "ds.body.standard.regular", color: "ds.text.neutral.standard", sx: { marginBottom: "24px" } },
                    s("sso_confidential_metadata_form_paragraph")
                  ),
                  (0, l.tZ)($a.gN, { name: Op, validateOnChange: !0, validate: x }, ({ field: t, meta: { error: a } }) =>
                    (0, l.tZ)(l.Kx, {
                      required: !0,
                      id: t.name,
                      label: s("sso_confidential_metadata_form_field_label"),
                      placeholder: s(Tp),
                      "aria-label": s(Tp),
                      autoCorrect: "off",
                      autoComplete: "off",
                      spellCheck: "false",
                      disabled: o,
                      feedback: !a || e || n ? void 0 : { text: a },
                      error: !(!a || e || n),
                      ...t
                    })
                  ),
                  (0, l.tZ)(
                    l.zx,
                    {
                      type: "submit",
                      sx: { mt: "12px", justifySelf: "end" },
                      mood: m ? "neutral" : "brand",
                      intensity: m ? "quiet" : "catchy",
                      disabled: r,
                      isLoading: t
                    },
                    s("sso_confidential_metadata_form_button_submit")
                  )
                )
              );
            }
          );
        },
        zp = "sso_confidential_enable_nitro_sso_confirm_dialog_cancel",
        jp = ({ title: e, body: t, primaryActionLabel: a, onConfirm: s, onCancel: i }) => {
          const { translate: o } = (0, g.Z)(),
            [r, c] = (0, n.useState)(!1);
          return (0, l.tZ)(
            l.Vq,
            {
              closeActionLabel: o(zp),
              title: e,
              isOpen: !0,
              onClose: i,
              actions: {
                primary: {
                  children: a,
                  onClick: async () => {
                    try {
                      c(!0), await s();
                    } catch {
                      c(!1);
                    }
                  },
                  disabled: r,
                  isLoading: r
                },
                secondary: { children: o(zp), onClick: i, disabled: r }
              }
            },
            t
          );
        },
        Rp = () => {
          const { translate: e } = (0, g.Z)(),
            { showAlert: t } = (0, Wa.V)(),
            [a, s] = (0, n.useState)(!1),
            i = (0, d.k)(rp.y, "ssoProvisioning"),
            { enableSso: r } = (0, $e.u)(rp.y),
            u = i.data?.domainSetup[0]?.domainName,
            _ = u ? i.data?.domainVerificationInfo[u] : null,
            m = _?.verificationStatus !== pp.X5.enum.valid,
            p = i.data?.enableSSO.ssoEnabled,
            y = Boolean(m || p);
          return (0, l.tZ)(
            n.Fragment,
            null,
            (0, l.tZ)(
              "div",
              { sx: { display: "grid", gap: "8px" } },
              (0, l.tZ)(
                l.nv,
                { as: "h2", textStyle: "ds.title.section.medium", color: "ds.text.neutral.standard" },
                e("sso_confidential_enable_nitro_sso_section_heading")
              ),
              (0, l.tZ)(
                l.nv,
                {
                  textStyle: "ds.body.standard.regular",
                  color: "ds.text.neutral.standard",
                  sx: { mb: "4px", gridRow: "2", gridColumn: "1/1" }
                },
                e("sso_confidential_enable_nitro_sso_description")
              ),
              (0, l.tZ)(
                "div",
                { sx: { justifySelf: "end" } },
                (0, l.tZ)(
                  l.zx,
                  {
                    id: "enableSso",
                    onClick: () => {
                      s(!0), mp({ ssoSetupStep: o.SsoSetupStep.TurnOnSso });
                    },
                    disabled: y
                  },
                  e("sso_confidential_enable_nitro_sso_button_label")
                )
              )
            ),
            a
              ? (0, l.tZ)(jp, {
                  title: e("sso_confidential_enable_nitro_sso_confirm_dialog_title"),
                  body: e("sso_confidential_enable_nitro_sso_confirm_dialog_body"),
                  primaryActionLabel: e("sso_confidential_enable_nitro_sso_confirm_dialog_primary_action_label"),
                  onConfirm: async () => {
                    await (async () => {
                      const a = await r();
                      (0, lp.d6)(a)
                        ? t(e("sso_confidential_enable_nitro_sso_success_feedback"), c.BLW.SUCCESS)
                        : t(a.error.tag, c.BLW.ERROR);
                    })(),
                      mp({ ssoSetupStep: o.SsoSetupStep.CompleteSsoSetup }),
                      s(!1);
                  },
                  onCancel: () => {
                    s(!1);
                  }
                })
              : null
          );
        },
        Pp = () => {
          var e;
          const { translate: t } = (0, g.Z)(),
            [a, s] = (0, n.useState)(!1),
            [i, r] = (0, n.useState)(!1),
            [u, _] = (0, n.useState)(!1),
            { testLoginUserWithEnclaveSSO: m } = (0, $e.u)(rp.y),
            p = (0, d.k)(rp.y, "ssoProvisioning"),
            y = null != (e = p.data?.domainSetup[0]?.domainName) ? e : "",
            h = p.data?.domainVerificationInfo[y]?.verificationStatus !== pp.X5.enum?.valid || !1;
          return (0, l.tZ)(
            "div",
            { sx: { display: "grid", gridTemplateColumns: "auto", gridAutoRows: "auto", gap: "8px" } },
            (0, l.tZ)(
              "div",
              null,
              (0, l.tZ)(
                l.X6,
                { as: "h2", textStyle: "ds.title.section.medium", color: "ds.text.neutral.standard", sx: { mb: "8px" } },
                t("sso_confidential_test_nitro_sso_section_heading")
              ),
              (0, l.tZ)(
                l.nv,
                { textStyle: "ds.body.standard.regular", color: "ds.text.neutral.standard" },
                t("sso_confidential_test_nitro_sso_description")
              )
            ),
            (0, l.tZ)(
              "div",
              { sx: { justifySelf: "end", gridColumn: "2" } },
              (0, l.tZ)(
                lu.M,
                {
                  disabled: h,
                  onClick: async () => {
                    s(!0);
                    try {
                      const e = await m({ domainName: y }),
                        t = (0, lp.d6)(e);
                      mp({
                        ssoSetupStep: o.SsoSetupStep.TestSsoConnection,
                        testSsoResponse: t ? o.TestSsoResponse.Success : o.TestSsoResponse.Failure
                      }),
                        r(t),
                        _(!t);
                    } finally {
                      s(!1);
                    }
                  },
                  loading: a,
                  content: t("sso_confidential_test_nitro_sso_no_extension_feedback"),
                  neverShowTooltip: !0
                },
                t("sso_confidential_test_nitro_sso_button_label")
              )
            ),
            i
              ? (0, l.tZ)(
                  "div",
                  { sx: { gridColumn: "1/span 2" } },
                  (0, l.tZ)(
                    c.bZj,
                    {
                      showIcon: !0,
                      size: c.k3y.SMALL,
                      severity: c.BLW.SUCCESS,
                      onClose: () => {
                        r(!1);
                      },
                      closeIconName: "Close"
                    },
                    t("sso_confidential_test_nitro_sso_success_feedback")
                  )
                )
              : null,
            u
              ? (0, l.tZ)(
                  "div",
                  { sx: { gridColumn: "1/span 2" } },
                  (0, l.tZ)(
                    c.bZj,
                    {
                      showIcon: !0,
                      size: c.k3y.SMALL,
                      severity: c.BLW.ERROR,
                      onClose: () => {
                        _(!1);
                      },
                      closeIconName: "Close"
                    },
                    t("sso_confidential_test_nitro_sso_error_feedback")
                  )
                )
              : null
          );
        },
        Up = ({ domainName: e, showModal: t, onClose: a }) => {
          var s, i;
          const { translate: o } = (0, g.Z)(),
            r = (0, d.k)(rp.y, "ssoProvisioning"),
            { checkDNSValidation: c } = (0, $e.u)(rp.y),
            [u, _] = (0, n.useState)(!1);
          if (r.status !== se.rq.Success) return null;
          const m = e ? r.data.domainVerificationInfo[e] : void 0;
          if (!m) return null;
          let p = o("sso_confidential_verify_domain_modal_verify_domain_button");
          return (
            "valid" === m.verificationStatus
              ? (p = o("sso_confidential_verify_domain_modal_verify_domain_button_close"))
              : (("pending" === m.verificationStatus && m.pendingReason) || "invalid" === m.verificationStatus) &&
                (p = o("sso_confidential_verify_domain_modal_verify_domain_button_retry")),
            (0, l.tZ)(
              l.Vq,
              {
                closeActionLabel: o("_common_dialog_dismiss_button"),
                title: o("sso_confidential_verify_domain_modal_title", { domainName: e }),
                isOpen: t,
                onClose: a,
                actions: {
                  primary: {
                    children: p,
                    onClick:
                      "valid" === m.verificationStatus
                        ? a
                        : async () => {
                            _(!0);
                            try {
                              await c({ domainName: e });
                            } finally {
                              _(!1), a();
                            }
                          },
                    isLoading: u
                  }
                }
              },
              (0, l.tZ)(
                "ol",
                { sx: { listStyleType: "decimal", ml: "20px" } },
                (0, l.tZ)(
                  l.nv,
                  { as: "li", textStyle: "ds.body.standard.regular", color: "ds.text.neutral.standard" },
                  o("sso_confidential_verify_domain_modal_instruction_1")
                ),
                (0, l.tZ)(
                  l.nv,
                  { as: "li", textStyle: "ds.body.standard.regular", color: "ds.text.neutral.standard" },
                  o("sso_confidential_verify_domain_modal_instruction_2")
                ),
                (0, l.tZ)(
                  l.nv,
                  { as: "li", textStyle: "ds.body.standard.regular", color: "ds.text.neutral.standard" },
                  o("sso_confidential_verify_domain_modal_instruction_3")
                )
              ),
              (0, l.tZ)(l.ke, { title: o("sso_confidential_verify_domain_modal_infobox_title"), mood: "brand" }),
              (0, l.tZ)(Cp.x, {
                label: o("sso_confidential_verify_domain_modal_subdomain_label"),
                value: null != (s = m.subdomainValue) ? s : "",
                readOnly: !0
              }),
              (0, l.tZ)(Cp.x, {
                label: o("sso_confidential_verify_domain_modal_txt_label"),
                value: null != (i = m.txtValue) ? i : "",
                readOnly: !0
              }),
              m.verificationStatus === pp.X5.enum.pending && m.pendingReason === pp.Q8.enum.invalidToken
                ? (0, l.tZ)(l.ke, {
                    title: o("sso_confidential_verify_domain_modal_error_infobox_title_invalid_token"),
                    description: m.tokenFound,
                    mood: "danger",
                    size: "medium"
                  })
                : null,
              m.verificationStatus === pp.X5.enum.pending && m.pendingReason === pp.Q8.enum.tokenNotFound
                ? (0, l.tZ)(l.ke, {
                    title: o("sso_confidential_verify_domain_modal_error_infobox_title_token_not_found"),
                    description: o("sso_confidential_verify_domain_modal_error_infobox_description_token_not_found"),
                    mood: "danger",
                    size: "medium"
                  })
                : null,
              m.verificationStatus === pp.X5.enum.invalid
                ? (0, l.tZ)(l.ke, {
                    title: o("sso_confidential_verify_domain_modal_error_infobox_title_generic_error"),
                    mood: "danger",
                    size: "medium"
                  })
                : null
            )
          );
        };
      var Bp,
        Gp = a(198187),
        Fp = a(87065),
        qp = a(52273);
      const $p = () => {
        const { translate: e } = (0, g.Z)(),
          [t, a] = (0, n.useState)(!1),
          {
            data: s,
            editTeamPolicies: i,
            status: o
          } = (() => {
            const { data: e, status: t } = (0, d.k)(u.o, "getTeamId"),
              { data: a, status: n } = (0, d.k)(u.o, "getTeamPolicies"),
              { editTeamPolicies: s } = (0, $e.u)(u.o);
            return n === se.rq.Error || t === se.rq.Error
              ? { status: se.rq.Error }
              : n === se.rq.Loading || t === se.rq.Loading
              ? { status: se.rq.Loading }
              : {
                  status: se.rq.Success,
                  data: { teamPolicies: a },
                  editTeamPolicies: (t) => s({ teamId: Number(e.teamId), policyUpdates: t })
                };
          })(),
          r = (0, d.k)(rp.y, "ssoProvisioning");
        return (
          (0, n.useEffect)(() => {
            if (r.status === se.rq.Success) {
              var e;
              const n = null != (e = r.data?.global.inferredSsoState) ? e : "";
              var t;
              ["SelfHostedComplete", "SelfHostedIncomplete"].includes(n)
                ? ca.C.getTeamDomains().then((e) => {
                    e.success && a(e.domains.some((e) => "valid" === e.status));
                  })
                : a((null != (t = r.data?.domainSetup) ? t : []).some((e) => e.verificationStatus === pp.X5.enum.valid));
            }
          }, [r]),
          (0, l.tZ)(
            "div",
            {
              sx: {
                backgroundColor: "ds.container.agnostic.neutral.quiet",
                borderRadius: "8px",
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                gap: "16px"
              }
            },
            (0, l.tZ)(
              l.X6,
              { as: "h3", textStyle: "ds.title.supporting.small", color: "ds.text.neutral.quiet" },
              e("jit_provisioning_cat_title"),
              " "
            ),
            " ",
            (0, l.tZ)(
              "div",
              { sx: { display: "flex", flexDirection: "row", gap: "16px" } },
              (0, l.tZ)(
                "div",
                { sx: { display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "8px" } },
                (0, l.tZ)(
                  l.X6,
                  { as: "h2", textStyle: "ds.title.block.medium", color: "ds.text.neutral.catchy" },
                  e("jit_provisioning_title")
                ),
                (0, l.tZ)(
                  l.nv,
                  { textStyle: "ds.body.standard.regular", color: "ds.text.neutral.standard" },
                  e("jit_provisioning_description")
                )
              ),
              (0, l.tZ)(
                "div",
                null,
                o === se.rq.Loading
                  ? Bp || (Bp = (0, l.tZ)(l.ZX, { mood: "brand" }))
                  : (0, l.tZ)(l.ZD, {
                      disabled: !t,
                      onChange: (e) => {
                        e.preventDefault(), o === se.rq.Success && i?.({ ssoProvisioning: e.target.checked });
                      },
                      defaultChecked: !!s?.teamPolicies.ssoProvisioning
                    })
              )
            )
          )
        );
      };
      var Vp, Wp, Hp;
      const Kp = "sso_confidential_verify_domain_step_domain_input_label",
        Yp = "sso_confidential_verify_domain_step_domain_input_button_view_details",
        Qp = { valid: 3, pending: 2, expired: 1, invalid: 0 },
        Xp = ({ status: e, ssoActive: t }) => {
          const { translate: a } = (0, g.Z)();
          let n, s, i;
          switch (e) {
            case pp.X5.enum.valid:
              (n = a(
                t ? "sso_confidential_verify_domain_step_sso_status_active" : "sso_confidential_verify_domain_step_sso_status_verified"
              )),
                (i = t ? "catchy" : "quiet"),
                (s = "positive");
              break;
            case pp.X5.enum.expired:
            case pp.X5.enum.invalid:
              (n = a("sso_confidential_verify_domain_step_sso_status_error")), (s = "danger"), (i = "quiet");
              break;
            case pp.X5.enum.pending:
            default:
              (n = a("sso_confidential_verify_domain_step_sso_status_unverified")), (i = "quiet"), (s = "neutral");
          }
          return (0, l.tZ)(l.Ct, { mood: s, intensity: i, label: n });
        },
        Jp = ({ domainName: e, ssoActive: t, onModalOpen: a, onDeleteDomain: s, onTextInputChange: i, disabled: o, duplicate: r }) => {
          var u;
          const { translate: _ } = (0, g.Z)(),
            { provisionDomain: m, deleteDomain: p } = (0, $e.u)(rp.y),
            y = (0, d.k)(rp.y, "ssoProvisioning"),
            [h, b] = (0, n.useState)(!1),
            x = (0, n.useMemo)(() => new Gp.x(), []),
            S = (0, n.useCallback)(i, [i]),
            v = r ? void 0 : y.data?.domainVerificationInfo[e];
          return (
            (0, n.useEffect)(() => {
              x.asObservable()
                .pipe(
                  (0, Fp.U)((e) => e.currentTarget.value),
                  (0, qp.b)(200)
                )
                .subscribe((e) => {
                  e && S(e);
                });
            }, [x, S]),
            (0, l.tZ)(
              n.Fragment,
              null,
              (0, l.tZ)(
                c.dDn,
                { sx: { display: "flex", alignItems: "center" } },
                (0, l.tZ)(Xp, {
                  status: v?.pendingReason || r ? "invalid" : null != (u = v?.verificationStatus) ? u : null,
                  ssoActive: t && !r
                })
              ),
              (0, l.tZ)(
                c.dDn,
                null,
                (0, l.tZ)(l.qo, {
                  label: _(Kp),
                  placeholder: _(Kp),
                  labelPersists: !1,
                  autoCorrect: "off",
                  autoComplete: "off",
                  disabled: o,
                  hasClearAction: v?.verificationStatus !== pp.X5.enum.valid,
                  readOnly: v?.verificationStatus === pp.X5.enum.valid,
                  onChange: (e) => x.next(e),
                  value: e,
                  sx: { width: "400px" },
                  error:
                    v?.verificationStatus === pp.X5.enum.invalid ||
                    (v?.verificationStatus === pp.X5.enum.pending && !!v?.pendingReason) ||
                    r,
                  feedback: r
                    ? { text: _("sso_confidential_verify_domain_error_domain_already_provisioned") }
                    : v?.verificationStatus === pp.X5.enum.valid && t
                    ? { text: _("sso_confidential_verify_domain_step_domain_input_feedback_sso_active") }
                    : v?.verificationStatus === pp.X5.enum.pending && v?.pendingReason === pp.Q8.enum.invalidToken
                    ? { text: _("sso_confidential_verify_domain_step_domain_input_feedback_sso_error_invalid_token") }
                    : v?.verificationStatus === pp.X5.enum.pending && v?.pendingReason === pp.Q8.enum.tokenNotFound
                    ? { text: _("sso_confidential_verify_domain_step_domain_input_feedback_sso_error_token_not_found") }
                    : v?.verificationStatus === pp.X5.enum.invalid
                    ? { text: _("sso_confidential_verify_domain_step_domain_input_feedback_sso_error_generic") }
                    : void 0
                })
              ),
              v?.verificationStatus === pp.X5.enum.valid && t && !r
                ? (0, l.tZ)(
                    c.dDn,
                    { justifySelf: "end", alignSelf: "center", gridColumnStart: "3", gridColumnEnd: "5" },
                    (0, l.tZ)(l.zx, { mood: "neutral", intensity: "quiet", onClick: a, disabled: o || r }, _(Yp))
                  )
                : v?.verificationStatus === pp.X5.enum.valid
                ? (0, l.tZ)(
                    c.dDn,
                    { justifySelf: "end", alignSelf: "center" },
                    (0, l.tZ)(l.zx, { mood: "neutral", intensity: "quiet", onClick: a, disabled: o || r }, _(Yp))
                  )
                : (0, l.tZ)(
                    c.dDn,
                    { justifySelf: "end", alignSelf: "center" },
                    (0, l.tZ)(
                      l.zx,
                      {
                        mood: "brand",
                        intensity: "quiet",
                        disabled: !e || o || r,
                        isLoading: h,
                        onClick: async () => {
                          v || (b(!0), await m({ domainName: e }), b(!1)), a();
                        },
                        sx: { position: "relative" }
                      },
                      _("sso_confidential_verify_domain_step_domain_input_button_verify")
                    )
                  ),
              v?.verificationStatus === pp.X5.enum.valid && t
                ? null
                : (0, l.tZ)(
                    c.dDn,
                    { justifySelf: "end", alignSelf: "center", sx: { display: "flex", alignItems: "center" } },
                    (0, l.tZ)(l.zx, {
                      mood: "danger",
                      intensity: "supershy",
                      layout: "iconOnly",
                      icon: Vp || (Vp = (0, l.tZ)(l.JO, { name: "ActionDeleteOutlined" })),
                      isLoading: h,
                      onClick: async () => {
                        if (v && !r) {
                          b(!0);
                          try {
                            await p({ domainName: e }), s();
                          } finally {
                            b(!1);
                          }
                        }
                      },
                      sx: { position: "relative" },
                      disabled: o
                    })
                  )
            )
          );
        },
        eg = () => {
          var e, t, a;
          const { translate: s } = (0, g.Z)(),
            [i, o] = (0, n.useState)([]),
            [r, u] = (0, n.useState)(null),
            { spaceDetails: _ } = (0, lr.fV)(),
            m = (0, d.k)(rp.y, "ssoProvisioning"),
            [, p] = null != (e = _?.associatedEmail.split("@")) ? e : ["", ""],
            y = m.data?.domainVerificationInfo,
            h = (0, n.useCallback)(
              (e, t) => {
                if (!y) return 0;
                const a = y[e],
                  n = y[t];
                if (null === a?.verificationStatus && null === n?.verificationStatus) return 0;
                const s = a?.verificationStatus ? Qp[a.verificationStatus] : -1,
                  i = n?.verificationStatus ? Qp[n.verificationStatus] : -1;
                if (s > i) return -1;
                if (i > s) return 1;
                const o = e.toLowerCase().replace(/ /g, ""),
                  r = t.toLowerCase().replace(/ /g, "");
                return o === r ? 0 : r < o ? ("" !== r ? 1 : -1) : o < r ? ("" !== o ? -1 : 1) : 0;
              },
              [y]
            ),
            b = null != (t = m.data?.enableSSO.ssoEnabled) && t,
            x = null != (a = m.data?.global.isTeamProvisionedInNitro) && a && m.data?.idpMetadata.metadataValue;
          return (
            (0, n.useEffect)(() => {
              if (m.data?.domainVerificationInfo && 0 === i.length) {
                var e;
                const t = Object.keys(null != (e = m.data?.domainVerificationInfo) ? e : {}).sort((e, t) => h(e, t));
                o(t.length > 0 ? t.map((e) => e) : [p]);
              }
            }, [i.length, p, m.data?.domainVerificationInfo, h]),
            m.status !== se.rq.Success
              ? null
              : (0, l.tZ)(
                  "div",
                  { sx: { display: "flex", flexDirection: "column", gap: "32px" } },
                  (0, l.tZ)(
                    l.X6,
                    { as: "h3", color: "ds.text.neutral.standard", textStyle: "ds.title.section.medium" },
                    s("sso_confidential_verify_domain_step_title")
                  ),
                  (0, l.tZ)(
                    c.T5p,
                    {
                      gap: "16px 10px",
                      gridTemplateColumns: "100px 1fr 126px 40px",
                      sx: { "& > *::after": { content: '""', position: "absolute", borderBottom: "1px solid #8C8F90" } }
                    },
                    (0, l.tZ)(
                      c.dDn,
                      { sx: { "& > ::after": { content: '""', borderBottom: "1px solid #8C8F90" } } },
                      (0, l.tZ)(
                        l.X6,
                        { as: "h4", color: "ds.text.neutral.quiet", textStyle: "ds.title.supporting.small" },
                        s("sso_confidential_verify_domain_step_table_header_status")
                      )
                    ),
                    (0, l.tZ)(
                      c.dDn,
                      { gridColumnStart: 2, gridColumnEnd: 5 },
                      (0, l.tZ)(
                        l.X6,
                        { as: "h4", color: "ds.text.neutral.quiet", textStyle: "ds.title.supporting.small" },
                        s("sso_confidential_verify_domain_step_table_header_domain")
                      )
                    ),
                    (() => {
                      const e = new Set();
                      return i.map((t, a) => {
                        const n = y
                          ? (0, l.tZ)(Jp, {
                              key: a,
                              domainName: t,
                              ssoActive: b,
                              onTextInputChange: (e) =>
                                ((e, t) => {
                                  const a = i.map((a, n) => (n === e ? t : a));
                                  o(a);
                                })(a, e),
                              onModalOpen: () =>
                                (async (e) => {
                                  const t = i[e];
                                  o([...i]), u(t);
                                })(a),
                              onDeleteDomain: () =>
                                (async (e) => {
                                  i.splice(e, 1), o([...i]);
                                })(a),
                              disabled: !x,
                              duplicate: e.has(t)
                            })
                          : void 0;
                        return e.add(t), n;
                      });
                    })(),
                    (0, l.tZ)(
                      c.dDn,
                      { gridColumnStart: 2 },
                      (0, l.tZ)(
                        l.zx,
                        {
                          mood: "brand",
                          intensity: "supershy",
                          layout: "iconLeading",
                          icon: Wp || (Wp = (0, l.tZ)(l.JO, { name: "ActionAddOutlined" })),
                          size: "small",
                          onClick: () => {
                            o([...i, ""]);
                          },
                          disabled: !x
                        },
                        s("sso_confidential_verify_domain_step_add_domain_button_label")
                      )
                    )
                  ),
                  Hp || (Hp = (0, l.tZ)($p, null)),
                  (0, l.tZ)(Up, {
                    domainName: null != r ? r : "",
                    showModal: null !== r,
                    onClose: () => {
                      u(null);
                    }
                  })
                )
          );
        },
        tg = ({ title: e, paragraph: t, badgeLabel: a, children: n, onBackClicked: s, showBackButton: i = !0 }) => {
          const o = (0, Ue.k6)(),
            r =
              null != s
                ? s
                : () => {
                    o.push(".");
                  };
          return (0, l.tZ)(
            "div",
            { sx: { padding: "24px 0" } },
            (0, l.tZ)(
              "div",
              { sx: { padding: "0 32px" } },
              (0, l.tZ)(
                c.Ejs,
                { flexDirection: "row", gap: "8px", sx: { marginBottom: "16px" }, alignItems: "center" },
                i,
                (0, l.tZ)(l.zx, { layout: "iconOnly", icon: "CaretLeftOutlined", intensity: "supershy", mood: "neutral", onClick: r }),
                (0, l.tZ)(l.X6, { as: "h1", textStyle: "ds.title.section.large" }, e),
                a ? (0, l.tZ)(l.Ct, { label: a, mood: "brand" }) : null
              ),
              t ? (0, l.tZ)(l.nv, { sx: { marginBottom: "32px" } }, t) : null
            ),
            n
          );
        };
      var ag, ng, sg, ig, og;
      const rg = {
          CARD_1_HEADING: "Before you start",
          CARD_1_BODY_INTRO: "To set up SSO, you'll need:",
          CARD_1_BODY_POINTS: [
            "Access to your IdP and public DNS provider accounts",
            "A list of members to add to your SSO application",
            "IdP metadata",
            "Email domain"
          ],
          CARD_1_SUB_HEADING: "Need help?",
          CARD_1_SUB_BODY: "For help setting up SSO, contact our Customer Support.",
          CARD_2_HEADING: "After turning on SSO",
          CARD_2_BODY_FIRST: "After SSO is turned on, non-admin members are required to log in with SSO.",
          CARD_2_BODY_SECOND:
            "They must use the browser extension when using Dashlane on a computer. They can also log in with SSO on mobile.",
          CARD_2_BODY_THIRD: "Admins can't log in with SSO. They still need to enter their Master Password."
        },
        lg = "support@dashlane.com",
        cg = () => {
          const { status: e, data: t } = (0, d.k)(rp.y, "ssoProvisioning");
          if (e !== r.rq.Success) return null;
          const a = e === r.rq.Success ? !t.enableSSO.ssoEnabled : null;
          return (0, l.tZ)(
            "div",
            null,
            (0, l.tZ)(
              c.Ejs,
              { flexDirection: "column", gap: "32px", sx: { flexGrow: 1 } },
              a ? (0, l.tZ)(vp, { pageContext: Sp.Nitro }) : null,
              (0, l.tZ)(c.Zbd, { sx: { padding: "32px" } }, ag || (ag = (0, l.tZ)(Dp, null)), ng || (ng = (0, l.tZ)(Lp, null))),
              (0, l.tZ)(c.Zbd, { sx: { padding: "32px" } }, sg || (sg = (0, l.tZ)(eg, null))),
              (0, l.tZ)(c.Zbd, { sx: { padding: "32px" } }, ig || (ig = (0, l.tZ)(Pp, null))),
              (0, l.tZ)(c.Zbd, { sx: { padding: "32px" } }, og || (og = (0, l.tZ)(Rp, null)))
            )
          );
        },
        dg = (e) =>
          (0, l.tZ)(
            "div",
            { sx: { border: "none", display: "flex", gap: "24px", flexDirection: "column" }, ...e },
            (0, l.tZ)(
              Ol,
              null,
              (0, l.tZ)(l.X6, { as: "h3", textStyle: "ds.title.block.medium" }, rg.CARD_1_HEADING),
              (0, l.tZ)(l.nv, { textStyle: "ds.body.standard.regular", color: "ds.text.neutral.quiet" }, rg.CARD_1_BODY_INTRO),
              (0, l.tZ)(
                l.nv,
                {
                  as: "ul",
                  textStyle: "ds.body.standard.regular",
                  color: "ds.text.neutral.quiet",
                  sx: { margin: "0px 0px 8px 20px", listStyleType: "disc" }
                },
                rg.CARD_1_BODY_POINTS.map((e) => (0, l.tZ)("li", { key: e }, e))
              ),
              (0, l.tZ)(l.X6, { as: "h3", textStyle: "ds.title.block.medium" }, rg.CARD_1_SUB_HEADING),
              (0, l.tZ)(l.nv, { textStyle: "ds.body.standard.regular", color: "ds.text.neutral.quiet" }, rg.CARD_1_SUB_BODY),
              (0, l.tZ)(Pl, { href: `mailto:${lg}`, sx: { fontSize: "14px" } }, lg)
            ),
            (0, l.tZ)(
              Ol,
              null,
              (0, l.tZ)(l.X6, { as: "h3", textStyle: "ds.title.block.medium" }, rg.CARD_2_HEADING),
              (0, l.tZ)(l.nv, { textStyle: "ds.title.block.small", color: "ds.text.neutral.quiet" }, rg.CARD_2_BODY_FIRST),
              (0, l.tZ)(l.nv, { textStyle: "ds.title.block.small", color: "ds.text.neutral.quiet" }, rg.CARD_2_BODY_SECOND),
              (0, l.tZ)(l.nv, { textStyle: "ds.title.block.small", color: "ds.text.danger.standard" }, rg.CARD_2_BODY_THIRD)
            )
          ),
        ug = ({ backRoute: e }) => {
          const { data: t } = (0, d.k)(rp.y, "ssoProvisioning"),
            { translate: a } = (0, g.Z)(),
            n = !t?.enableSSO.ssoEnabled,
            s = !t?.enableSSO.ssoEnabled;
          return (0, l.tZ)(
            tg,
            {
              title: a("sso_confidential_page_title"),
              badgeLabel: n ? a("team_new_label") : "",
              showBackButton: s,
              onBackClicked: () => {
                mp({ ssoSetupStep: o.SsoSetupStep.ReturnToSsoSelection }), (0, i.uX)(e);
              }
            },
            (0, l.tZ)(c_, {
              mainContent: cg,
              mainProps: { gridTemplateColumns: "auto", gridAutoRows: "min-content", gap: "32px" },
              secondaryContent: dg
            })
          );
        };
      var _g = a(823512);
      const mg = () => {
        const [e, t] = (0, n.useState)(!1),
          [a, s] = (0, n.useState)(),
          i = (0, n.useCallback)(async () => {
            try {
              return await ca.C.getEncryptionServiceConfig();
            } catch {
              return { success: !1, error: { code: _g.S2 } };
            }
          }, []),
          o = (0, n.useCallback)(
            async (e = new AbortController()) => {
              e.signal.aborted || t(!0);
              const a = await i();
              return e.signal.aborted || (a.success && s(a.data), t(!1)), a;
            },
            [i]
          );
        return (
          (0, n.useEffect)(() => {
            const e = new AbortController();
            return (
              o(e),
              () => {
                e.abort();
              }
            );
          }, [o]),
          { esConfigLoading: e, esConfig: a, refreshEncryptionServiceConfig: o }
        );
      };
      var pg = a(320144),
        gg = a(40010),
        yg = a(454661);
      const hg = "esConfigurationLabel",
        bg = ({ value: e, disabled: t, error: a, isLoading: s = !1, configRegenRequired: i, lastGeneratedTimeStamp: o }) => {
          const { translate: r } = (0, g.Z)(),
            d = o
              ? (0, B.tZ)(
                  c.Ejs,
                  { gap: "4px", sx: { mt: "8px" }, justifyContent: "center" },
                  (0, B.tZ)(
                    l.nv,
                    { textStyle: "ds.body.reduced.strong" },
                    r("team_settings_encryption_service_generate_configuration_timestamp")
                  ),
                  (0, B.tZ)(
                    l.nv,
                    { textStyle: "ds.body.reduced.regular" },
                    (0, oa.Z)(o).toLocaleString(navigator.language, { ...pa.qG.lll, timeZoneName: "short" })
                  )
                )
              : null;
          return (0, B.tZ)(
            c.T5p,
            {
              gridTemplateAreas: "'label button' 'description button' 'timestamp timestamp' 'config buttons'",
              gridTemplateColumns: "3fr 1fr",
              sx: { gridColumnGap: "8px" }
            },
            (0, B.tZ)(
              c.dDn,
              { gridArea: "label", sx: { paddingBottom: "8px" }, as: l.nv, innerAs: "label", id: hg, textStyle: "ds.title.block.medium" },
              r("team_settings_encryption_service_generate_configuration_label")
            ),
            (0, B.tZ)(
              c.dDn,
              { gridArea: "description", as: l.nv },
              r("team_settings_encryption_service_generate_configuration_label_helper")
            ),
            (0, B.tZ)(
              c.dDn,
              { gridArea: "button" },
              (0, B.tZ)(
                l.zx,
                {
                  disabled: t || s,
                  mood: e && !i ? "neutral" : "brand",
                  intensity: e && !i ? "quiet" : "catchy",
                  fullsize: !0,
                  type: "submit",
                  isLoading: s
                },
                r("team_settings_encryption_service_generate_configuration_button")
              ),
              i ? null : d
            ),
            e
              ? (0, B.tZ)(
                  n.Fragment,
                  null,
                  (0, B.tZ)(
                    c.dDn,
                    { gridArea: "config", sx: { marginTop: "18px" } },
                    (0, B.tZ)(l.Kx, {
                      "aria-labelledby": hg,
                      readOnly: !0,
                      disabled: i,
                      value: e,
                      feedback: a ? { text: a } : void 0,
                      error: !!a
                    })
                  ),
                  (0, B.tZ)(
                    c.dDn,
                    { as: c.Ejs, gridArea: "buttons", sx: { marginTop: "18px" }, flexDirection: "column", gap: "8px" },
                    (0, B.tZ)(Lu.q, { disabled: i, copyValue: e, buttonText: r("input_copy_button"), fullsize: !0 }),
                    (0, B.tZ)(yg.o, {
                      disabled: i,
                      buttonText: r("team_settings_encryption_service_config_download_button"),
                      downloadString: e,
                      fileName: "dashlane-encryption-service-config.txt",
                      fileType: "text/plain",
                      fullsize: !0
                    })
                  )
                )
              : null
          );
        };
      function xg(e) {
        const t = (0, n.useMemo)(() => e, [e]),
          [a, s] = (0, n.useState)(!1),
          [i, o] = (0, n.useState)(),
          r = (0, n.useCallback)(async () => {
            const e = { success: !1, error: { code: _g.S2 } };
            try {
              return t ? await ca.C.getTeamDevice({ teamDeviceAccessKey: t }) : e;
            } catch {
              return e;
            }
          }, [t]),
          l = (0, n.useCallback)(
            async (e = new AbortController()) => {
              e.signal.aborted || s(!0);
              const t = await r();
              return e.signal.aborted || (t.success && o(t.data.teamDevice), s(!1)), t;
            },
            [r]
          );
        return (
          (0, n.useEffect)(() => {
            const e = new AbortController();
            return (
              l(e),
              () => {
                e.abort();
              }
            );
          }, [l]),
          { teamDeviceLoading: a, teamDevice: i, refreshTeamDevice: l }
        );
      }
      const Sg = {
          AWS: "https://support.dashlane.com/hc/articles/4404322174482-Dashlane-Encryption-Service-Overview-and-Setup?utm_source=extension#h_01FTXGN0C8B9HMKRD8J0BSYRAH",
          "Microsoft Azure":
            "https://support.dashlane.com/hc/articles/4404322174482-Dashlane-Encryption-Service-Overview-and-Setup?utm_source=extension#h_01FTXGMVBAEK5GB0TZJ86K7ZWE"
        },
        vg = ({ context: e = "GENERIC", ...t }) => {
          var a, s;
          const { esConfig: i, esConfigLoading: o } = mg(),
            { teamDevice: r, teamDeviceLoading: c } = xg(i?.deviceAccessKey),
            [d, u] = (0, n.useState)(!1),
            { translate: _ } = (0, g.Z)(),
            m = {
              CONTENT: _.markup(
                "team_settings_encryption_service_restart_failed_info_content_markup",
                {
                  helpArticle: null != (a = Sg[null != (s = i?.deploymentLocation) ? s : ""]) ? a : "",
                  supportLink: "https://support.dashlane.com/hc/requests/new?utm_source=extension"
                },
                { linkTarget: "_blank" }
              )
            },
            p = {
              GENERIC: { TITLE: _("team_settings_encryption_service_restart_failed_info_title"), ...m },
              SCIM: { TITLE: _("team_settings_encryption_service_restart_failed_info_title_scim"), ...m },
              ES: { TITLE: _("team_settings_encryption_service_restart_failed_info_title_es"), ...m },
              SSO: { TITLE: _("team_settings_encryption_service_restart_failed_info_title_sso"), ...m }
            };
          return (
            (0, n.useEffect)(() => {
              if (!c && !o && r && i) {
                const t = (!r.hasLatestConfig && "GENERIC" === e) || "GENERIC" !== e;
                u(t);
              }
            }, [r, i, c, o, e]),
            d
              ? (0, l.tZ)(l.ke, {
                  mood: "warning",
                  size: "large",
                  title: p[e].TITLE,
                  description: p[e].CONTENT,
                  actions: p[e].BUTTON
                    ? [
                        (0, l.tZ)(
                          l.zx,
                          {
                            mood: "brand",
                            intensity: "catchy",
                            key: "primary",
                            onClick: () => {
                              u(!1);
                            }
                          },
                          p[e].BUTTON
                        )
                      ]
                    : void 0,
                  ...t
                })
              : null
          );
        };
      var fg, Cg, Zg, Eg, Dg;
      const Tg = "team_settings_encryption_service_enter_endpoint_placeholder_aws_linux",
        Ng = "_common_generic_error",
        Mg = "https://",
        Ig = {
          AWS: "https://eu-west-1.console.aws.amazon.com/acm/home?region=eu-west-1#/welcome",
          "Microsoft Azure":
            "https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fget.dashlane.com%2Fazure%2Farm%2Fes%2Fazuredeploy.json"
        },
        wg = {
          AWS: "https://support.dashlane.com/hc/articles/4404322174482-Dashlane-Encryption-Service-Overview-and-Setup?utm_source=extension#h_01FTXGN0C8B9HMKRD8J0BSYRAH",
          "Microsoft Azure":
            "https://support.dashlane.com/hc/articles/4404322174482-Dashlane-Encryption-Service-Overview-and-Setup?utm_source=extension#h_01FTXGMVBAEK5GB0TZJ86K7ZWE"
        },
        kg = {
          AWS: "team_settings_encryption_service_go_to_label_helper_aws_markup",
          "Microsoft Azure": "team_settings_encryption_service_go_to_label_helper_azure_markup"
        },
        Ag = {
          AWS: "team_settings_encryption_service_enter_endpoint_helper_aws_linux",
          "Microsoft Azure": "team_settings_encryption_service_enter_endpoint_helper_azure"
        },
        Og = { "Microsoft Azure": "team_settings_encryption_service_enter_endpoint_placeholder_azure", AWS: Tg },
        Lg = "config",
        zg = "deploymentLocation",
        jg = "encryptionServiceEndpoint",
        Rg = "ssoConnectorKey",
        Pg = "-sso.azurewebsites.net",
        Ug = ({ migratingFromSSOConnector: e = !1, esConfig: t, onSave: a, teamSettings: s, updateTeamSettings: r }) => {
          var d, u, _;
          const [m, p] = (0, n.useState)(!1),
            [y, h] = (0, n.useState)(""),
            [b, x] = (0, n.useState)(!1),
            [S, v] = (0, n.useState)(!1),
            { translate: f } = (0, g.Z)(),
            { spaceDetails: C, teamId: Z } = (0, lr.fV)(),
            { initSsoProvisioning: E } = (0, $e.u)(rp.y),
            D = null != (d = C?.associatedEmail) ? d : "",
            T = (0, i.k6)(),
            N = s?.ssoServiceProviderUrl,
            M = {
              encryptionServiceEndpoint: (null != N ? N : "").replace(Mg, ""),
              config: null != (u = t?.config) ? u : "",
              deploymentLocation: null != (_ = t?.deploymentLocation) ? _ : "",
              ssoConnectorKey: ""
            },
            I = () => T.goBack(),
            w = (e) => (e ? null : f("team_settings_encryption_service_error_select_service")),
            k = (e) => {
              const t = f("team_settings_encryption_service_error_invalid_ssoConnectorKey");
              try {
                const [t, a] = e.split("|"),
                  n = atob(a);
                if (!t || !a || !n || 36 !== t.length || 64 !== n.length) throw new Error("Invalid key format");
              } catch {
                return t;
              }
              return null;
            },
            A = (e) => {
              const t = f("team_settings_encryption_service_error_invalid_endpoint");
              if (!e) return t;
              let a;
              try {
                a = new URL(`${Mg}${e}`);
              } catch (e) {
                return t;
              }
              return "/" !== a.pathname || "" !== a.search || "" !== a.hash || a.href.includes("?") ? t : null;
            };
          return (0, l.tZ)(
            $a.J9,
            {
              onSubmit: async (t, { setFieldValue: n, setFieldTouched: s }) => {
                h(""), p(!0), v(!1);
                const { deploymentLocation: i, encryptionServiceEndpoint: l, ssoConnectorKey: c } = t;
                if (!i) return void s(zg);
                if (e && !c) return void s(Rg);
                n(Lg, "");
                const d = (e) => e.replace(/\/$/, "").toLowerCase();
                try {
                  const s = { deploymentLocation: i, encryptionServiceEndpoint: Mg + d(l), updateTeamDeviceConfigParams: {} };
                  e && c && (s.updateTeamDeviceConfigParams.ssoConnectorKey = c);
                  const u = await ca.C.generateAndSaveEncryptionServiceConfig(s);
                  if (!u.success) return void h(f(Ng));
                  const _ = u.data.basicConfig;
                  if (
                    (n(Lg, _.config),
                    t[jg] !== M.encryptionServiceEndpoint &&
                      (await r({ ssoServiceProviderUrl: t[jg] ? `${Mg}` + d(`${t[jg]}`) : null }), await E({ teamId: `${Z}` })),
                    p(!1),
                    u.data.encryptionServiceReloadingStatus !== pg.x.OK)
                  )
                    return v(!0), x(!1), void a?.();
                  _p({ ssoSetupStep: o.SsoSetupStep.GenerateAndSaveConfiguration }), y || a?.();
                } catch (e) {
                  p(!1), h(f(Ng));
                }
              },
              initialValues: M,
              onReset: I
            },
            (a) => {
              var s, i;
              return (0, l.tZ)(
                $a.l0,
                { autoComplete: "off" },
                (0, l.tZ)(gg.X, { dirty: a.dirty && !m && !S }),
                (0, l.tZ)(
                  c.Zbd,
                  null,
                  (0, l.tZ)(c.Ol2, null, f("team_settings_encryption_service_header")),
                  (0, l.tZ)(
                    c.aYP,
                    null,
                    e
                      ? (0, l.tZ)(
                          n.Fragment,
                          null,
                          (0, l.tZ)(
                            c.T5p,
                            {
                              gridTemplateAreas: "'header header' 'description description' 'input button'",
                              gridTemplateColumns: "1fr auto",
                              gap: "10px"
                            },
                            (0, l.tZ)(
                              c.dDn,
                              { gridArea: "header" },
                              (0, l.tZ)(
                                l.nv,
                                { as: "h3", textStyle: "ds.title.block.medium" },
                                f("team_settings_encryption_service_migrate_sso_title")
                              )
                            ),
                            (0, l.tZ)(
                              c.dDn,
                              { gridArea: "description" },
                              (0, l.tZ)(
                                l.nv,
                                { color: "ds.text.neutral.quiet", textStyle: "ds.body.standard.regular" },
                                f.markup("team_settings_encryption_service_migrate_sso_description_markup")
                              )
                            ),
                            (0, l.tZ)(
                              c.dDn,
                              { gridArea: "input" },
                              (0, l.tZ)(
                                $a.gN,
                                { name: Rg, validate: k },
                                ({ field: { onChange: e, ...t }, meta: { error: n, touched: s } }) =>
                                  (0, l.tZ)(c.oil, {
                                    onChange: (t) => {
                                      e(t);
                                    },
                                    id: "ssoConnectorKey",
                                    placeholder: f("team_settings_encryption_service_sso_connector_key_placeholder"),
                                    fullWidth: !0,
                                    feedbackText: s && n ? n : void 0,
                                    feedbackType: s && n ? "error" : void 0,
                                    "aria-invalid": s && !!n,
                                    readOnly: a.isSubmitting,
                                    ...t
                                  })
                              )
                            )
                          ),
                          fg || (fg = (0, l.tZ)("hr", null))
                        )
                      : null,
                    (0, l.tZ)(
                      c.T5p,
                      { gridTemplateAreas: "'label select' 'desc select'", gap: "8px" },
                      (0, l.tZ)(
                        c.dDn,
                        {
                          gridArea: "label",
                          as: l.nv,
                          innerAs: "label",
                          htmlFor: "deploymentLocation",
                          sx: { gridArea: "label" },
                          textStyle: "ds.title.block.medium"
                        },
                        f("team_settings_encryption_service_deploy_label")
                      ),
                      (0, l.tZ)(
                        c.dDn,
                        { gridArea: "desc", as: l.nv },
                        f.markup(
                          "team_settings_encryption_service_deploy_label_helper_markup",
                          { customerSupport: "https://support.dashlane.com/hc/requests/new?utm_source=extension" },
                          { linkTarget: "_blank" }
                        )
                      ),
                      (0, l.tZ)(
                        c.dDn,
                        { gridArea: "select" },
                        (0, l.tZ)($a.gN, { name: zg, validate: w }, ({ field: { onChange: e, ...t }, meta: { error: n, touched: s } }) =>
                          (0, l.tZ)(c.PhF, {
                            onChange: (t) => {
                              a.setFieldValue(
                                jg,
                                ((e, t) => {
                                  if (!e || !t) return "";
                                  const a = e.replace(/.+@/, "");
                                  if ("Microsoft Azure" === t) {
                                    const [e, t, ...n] = a.split(".").reverse(),
                                      s = t + Pg;
                                    return s.length <= 42 ? s : t.slice(0, 42 - Pg.length) + Pg;
                                  }
                                  return "AWS" === t ? "dashlane-sso." + a : "";
                                })(D, t.target.value)
                              ),
                                x(M.deploymentLocation !== t.target.value),
                                _p({
                                  ssoSetupStep: o.SsoSetupStep.SelectEncryptionServicePlatform,
                                  encryptionServicePlatformSelected:
                                    "AWS" === t.target.value
                                      ? o.EncryptionServicePlatformSelected.AmazonWebServices
                                      : o.EncryptionServicePlatformSelected.Azure
                                }),
                                e(t);
                            },
                            feedbackId: "deploymentLocationFeedback",
                            selectId: "deploymentLocation",
                            options: Object.keys(Ag),
                            placeholder: f("team_settings_encryption_service_select_host"),
                            intent: s && n ? "error" : void 0,
                            feedbackText: s && n ? n : void 0,
                            readOnly: a.isSubmitting,
                            ...t
                          })
                        )
                      )
                    ),
                    Cg || (Cg = (0, l.tZ)("hr", null)),
                    (0, l.tZ)(
                      c.T5p,
                      { gridTemplateColumns: "auto", gap: "8px" },
                      (0, l.tZ)(
                        c.dDn,
                        { as: l.nv, innerAs: "label", htmlFor: "endpointInput", textStyle: "ds.title.block.medium" },
                        f("team_settings_encryption_service_enter_endpoint_label")
                      ),
                      (0, l.tZ)(
                        c.dDn,
                        { as: l.nv, sx: { mb: "16px" } },
                        f(null != (s = Ag[a.values[zg]]) ? s : "team_settings_encryption_service_enter_endpoint_label_helper_no_selection")
                      ),
                      e ? (0, l.tZ)(l.nv, null, f("team_settings_encryption_service_current_endpoint_label"), " ", N) : null,
                      (0, l.tZ)(
                        $a.gN,
                        { name: jg, validate: A },
                        ({
                          field: { onChange: e, ...t },
                          meta: { error: n, touched: s },
                          form: {
                            values: { deploymentLocation: i }
                          }
                        }) => {
                          var o;
                          return (0, l.tZ)(c.oil, {
                            sx: { pl: 0 },
                            onChange: (t) => {
                              x(M.encryptionServiceEndpoint !== t.target.value), e(t);
                            },
                            startAdornment: Zg || (Zg = (0, l.tZ)(l.nv, { color: "ds.text.neutral.quiet" }, Mg)),
                            id: "endpointInput",
                            placeholder: f(null != (o = Og[i]) ? o : Tg),
                            fullWidth: !0,
                            feedbackText: s && n ? n : void 0,
                            feedbackType: s && n ? "error" : void 0,
                            "aria-invalid": s && !!n,
                            readOnly: a.isSubmitting,
                            ...t
                          });
                        }
                      )
                    ),
                    Eg || (Eg = (0, l.tZ)("hr", null)),
                    S ? (0, l.tZ)(vg, { sx: { marginBottom: "20px" }, context: "ES" }) : null,
                    (0, l.tZ)(
                      $a.gN,
                      { name: Lg },
                      ({
                        field: n,
                        meta: s,
                        form: {
                          values: { deploymentLocation: i, ssoConnectorKey: o }
                        }
                      }) => {
                        var r;
                        return (0, l.tZ)(bg, {
                          configRegenRequired: b,
                          disabled: !i || (e && !o),
                          lastGeneratedTimeStamp: t?.lastGeneratedTimeStamp,
                          value: n.value,
                          error: (null != (r = s.error) ? r : !a.isSubmitting && b)
                            ? f("team_settings_encryption_service_config_regen_warning")
                            : void 0,
                          isLoading: m || a.isSubmitting
                        });
                      }
                    ),
                    Dg || (Dg = (0, l.tZ)("hr", null)),
                    (0, l.tZ)(
                      c.T5p,
                      { gridTemplateAreas: "'header button' 'description button'", gap: "8px" },
                      (0, l.tZ)(
                        c.dDn,
                        { gridArea: "header", as: l.nv, textStyle: "ds.title.block.medium" },
                        f("team_settings_encryption_service_go_to_label")
                      ),
                      (0, l.tZ)(
                        c.dDn,
                        { gridArea: "description", as: l.nv, sx: { mb: "16px" } },
                        ((i = a.values.deploymentLocation) || (i = "AWS"), f.markup(kg[i], { setupGuide: wg[i] }, { linkTarget: "_blank" }))
                      ),
                      (0, l.tZ)(
                        c.dDn,
                        {
                          gridArea: "button",
                          as: l.zx,
                          type: "button",
                          mood: a.values.config && !b ? "brand" : "neutral",
                          disabled: !a.values[zg] || !a.values[Lg] || b,
                          onClick: () => {
                            _p({ ssoSetupStep: o.SsoSetupStep.AddConfigurationToServiceHost }), (0, j.Yo)(Ig[a.values[zg]]);
                          },
                          icon: "ActionOpenExternalLinkOutlined",
                          layout: "iconTrailing",
                          sx: { gridArea: "button", height: "fit-content" }
                        },
                        f("team_settings_encryption_service_go_to_button")
                      )
                    )
                  ),
                  (0, l.tZ)(
                    c.eWM,
                    { flexWrap: "nowrap" },
                    y
                      ? (0, l.tZ)(
                          l.nv,
                          {
                            sx: { width: "40%", ml: 0, mr: "auto" },
                            textStyle: "ds.title.supporting.small",
                            color: "ds.text.danger.standard"
                          },
                          y
                        )
                      : null,
                    (0, l.tZ)(
                      l.zx,
                      { mood: "neutral", intensity: "quiet", size: "large", type: "button", onClick: () => I() },
                      f("team_settings_encryption_service_button_cancel")
                    )
                  )
                )
              );
            }
          );
        };
      var Bg,
        Gg = a(491684);
      const Fg = "team_settings_encryption_service_not_available",
        qg = ({ config: e }) => {
          var t;
          const { translate: a } = (0, g.Z)(),
            { teamDevice: n, refreshTeamDevice: s, teamDeviceLoading: i } = xg(e.deviceAccessKey),
            o = a.markup(
              "team_settings_encryption_service_tooltip_text_markup",
              { updateServiceUrl: "https://support.dashlane.com/hc/articles/360015973719" },
              { linkTarget: "_blank" },
              { color: "ds.text.inverse.catchy", hoverColor: "ds.text.brand.quiet", activeColor: "ds.text.brand.standard" }
            );
          return (0, l.tZ)(
            Gg.R,
            null,
            i
              ? Bg || (Bg = (0, l.tZ)(c.HoD, { color: "ds.text.brand.standard" }))
              : (0, l.tZ)(
                  c.Ejs,
                  { flexDirection: "column", gap: "5px" },
                  (0, l.tZ)(
                    l.nv,
                    { textStyle: "ds.body.reduced.regular", color: "ds.text.neutral.standard" },
                    `${a("team_settings_encryption_service_last_restart")}\n                    ${
                      n?.lastStartDateUnix
                        ? (0, oa.Z)(n.lastStartDateUnix).toLocaleString(navigator.language, { ...pa.qG.lll, timeZoneName: "short" })
                        : a(Fg)
                    }`
                  ),
                  (0, l.tZ)(
                    c.Ejs,
                    { gap: "8px" },
                    (0, l.tZ)(
                      l.nv,
                      { textStyle: "ds.body.reduced.regular", color: "ds.text.neutral.standard" },
                      `\n                   ${a("team_settings_encryption_service_version")}\n                   ${
                        null != (t = n?.version) ? t : a(Fg)
                      }\n                  `
                    ),
                    !1 === n?.hasLatestVersion
                      ? (0, l.tZ)(
                          l.u,
                          { wrapTrigger: !0, content: o },
                          (0, l.tZ)(l.Ct, {
                            mood: "danger",
                            iconName: "FeedbackWarningOutlined",
                            layout: "iconLeading",
                            label: a("team_settings_encryption_service_new_version")
                          })
                        )
                      : null
                  ),
                  (0, l.tZ)(
                    l.nv,
                    {
                      as: "a",
                      color: "ds.text.brand.standard",
                      sx: { textDecoration: "none", fontWeight: "normal" },
                      onClick: () => s(),
                      textStyle: "ds.body.reduced.regular"
                    },
                    (0, l.tZ)(l.JO, {
                      sx: { display: "inline", marginRight: "5px" },
                      name: "ActionRefreshOutlined",
                      size: "xsmall",
                      color: "ds.text.brand.standard"
                    }),
                    a("team_settings_encryption_service_refresh")
                  )
                )
          );
        };
      var $g;
      const Vg = ({ esConfig: e, loading: t, parentPath: a, disableSetupButton: n }) => {
        const { translate: s } = (0, g.Z)(),
          r = (0, i.k6)(),
          d = !e && !t;
        return (0, l.tZ)(
          c.Zbd,
          null,
          (0, l.tZ)(
            c.T5p,
            {
              as: c.aYP,
              gridTemplateAreas: "'header button' 'description button' 'status .'",
              gridTemplateColumns: "1fr auto",
              gap: "8px",
              sx: { bg: "white", border: "none" }
            },
            (0, l.tZ)(
              c.dDn,
              { gridArea: "header" },
              e
                ? null
                : (0, l.tZ)(
                    l.X6,
                    { as: "h3", color: "ds.text.neutral.quiet", textStyle: "ds.title.supporting.small" },
                    s("team_settings_encryption_service_get_started")
                  ),
              (0, l.tZ)(l.X6, { as: "h3", textStyle: "ds.title.section.medium" }, s("team_settings_encryption_service_header"))
            ),
            (0, l.tZ)(
              c.dDn,
              { gridArea: "description" },
              (0, l.tZ)(
                l.nv,
                { textStyle: "ds.title.block.small", color: "ds.text.neutral.quiet" },
                s("team_settings_encryption_service_description")
              ),
              $g || ($g = (0, l.tZ)("br", null)),
              (0, l.tZ)(
                l.nv,
                {
                  as: "a",
                  textStyle: "ds.title.block.small",
                  href: "https://support.dashlane.com/hc/articles/360013149040#why-encryption",
                  color: "ds.text.brand.standard",
                  rel: "noopener noreferrer",
                  target: "_blank"
                },
                s("team_settings_encryption_service_more_info_link")
              )
            ),
            (0, l.tZ)(
              c.dDn,
              {
                id: "esSetupButton",
                as: l.zx,
                disabled: t || n,
                mood: d ? "brand" : "neutral",
                intensity: d ? "catchy" : "quiet",
                gridArea: "button",
                type: "button",
                alignSelf: "center",
                size: "large",
                onClick: () => {
                  _p({ ssoSetupStep: o.SsoSetupStep.SetUpEncryptionServiceSettings }), r.push(`${a}/encryption-service-settings`);
                },
                isLoading: t
              },
              s(e ? "team_settings_button_edit_label" : "team_settings_encryption_service_set_up")
            ),
            e ? (0, l.tZ)(c.dDn, { gridArea: "status", sx: { mt: "20px" } }, (0, l.tZ)(qg, { config: e })) : null
          )
        );
      };
      var Wg = a(879869),
        Hg = a(347418);
      const Kg = ({ actions: e, endIcon: t, fieldName: a, feedbackType: n, feedbackText: s, handleAdd: i, ...o }) => {
        const [
            {
              value: { name: r },
              onBlur: l,
              ...c
            },
            { error: d },
            { setValue: u }
          ] = (0, $a.U$)(a),
          _ = r ? (null != s ? s : d) : void 0,
          m = (null != n ? n : _) ? "error" : void 0;
        return (0, B.tZ)(Hg.h, {
          textInputProps: {
            id: a,
            endAdornment: t,
            feedbackText: _,
            feedbackType: m,
            fullWidth: !0,
            value: r,
            ...c,
            ...o,
            onChange: ({ currentTarget: { value: e } }) => {
              u({ name: e });
            },
            onKeyPress: (e) => {
              "Enter" === e.key && (i(), e.preventDefault(), e.stopPropagation());
            },
            onBlur: (e) => {
              e.currentTarget.value && !e.currentTarget.readOnly && i(), l?.(e);
            }
          },
          tooltipProps: { passThrough: !0 },
          replacementActions: e
        });
      };
      var Yg,
        Qg,
        Xg,
        Jg,
        ey = a(894017),
        ty = a.n(ey);
      const { accessibleValidatorGreen: ay, orange00: ny, dashGreen02: sy } = c.colors,
        iy = "team_settings_domain_register_invalid_error",
        oy = ({ fieldArrayName: e, domainLoadError: t, refreshDomains: a }) => {
          const { translate: s } = (0, g.Z)(),
            { values: i } = (0, $a.u6)(),
            [o, r] = (0, n.useState)({}),
            [l, d] = (0, n.useState)({}),
            [u, _] = (0, n.useState)(""),
            [m, p] = (0, n.useState)(null),
            y = (e, t) => {
              r((a) => ({ ...a, [e]: t }));
            },
            h = async (t) => {
              const a = t.trim();
              if (!ty().isFQDN(a)) throw new Error(s(iy));
              if (i[e].reduce((e, t) => (t.name === a ? e + 1 : e), 0) > 1)
                throw new Error(s("team_settings_domain_register_duplicated_error"));
              ((e) => {
                d((t) => ({ ...t, [e]: !0 }));
              })(t);
              const n = await ca.C.registerTeamDomain({ domain: a });
              var o;
              if (
                (((e) => {
                  d(({ [e]: t, ...a }) => a);
                })(t),
                !n.success)
              )
                throw new Error(
                  s(
                    null !=
                      (o = {
                        INVALID_PUBLIC_DOMAIN: "team_settings_domain_register_public_error",
                        DOMAIN_CONTAINS_EXISTING_NONTEAM_USERS: "team_settings_domain_register_contact_support"
                      }[n.error.code])
                      ? o
                      : iy
                  )
                );
            },
            b = async (e) => {
              await h(e.name), await a();
            };
          return t
            ? (0, B.tZ)(c.Ejs, { fullWidth: !0, justifyContent: "center" }, (0, B.tZ)(c.j49, { color: "errors.4" }, t))
            : (0, B.tZ)(
                n.Fragment,
                null,
                (0, B.tZ)(
                  c.nvN,
                  { as: "label", htmlFor: `${e}.${i[e].length - 1}`, bold: !0, sx: { display: "inline-block", mb: "8px" } },
                  s("team_settings_domain_title")
                ),
                (0, B.tZ)(c.nvN, { size: "small", sx: { mb: "24px" } }, s("team_settings_es_sso_setup_domain_description")),
                (0, B.tZ)($a.F2, { name: e }, (e) =>
                  (0, B.tZ)(
                    c.T5p,
                    { justifyContent: "stretch", gridTemplateColumns: "auto", gap: "8px", gridAutoRows: "auto" },
                    i[e.name].map((t, a) => {
                      var r, d;
                      const u = l[t.name],
                        m = t.status === mr.p.valid,
                        g = t.status === mr.p.pending || t.status === mr.p.invalid || t.status === mr.p.expired,
                        h = u
                          ? Yg || (Yg = (0, B.tZ)(c.HoD, { color: "primaries.5", size: 20 }))
                          : m
                          ? Qg || (Qg = (0, B.tZ)(c.rE2, { color: ay }))
                          : g
                          ? (0, B.tZ)(c.enX, { color: t.status === mr.p.pending ? sy : ny })
                          : void 0;
                      return (0, B.tZ)(
                        n.Fragment,
                        { key: `${e.name}.${null != (r = t.id) ? r : a}` },
                        (0, B.tZ)(Kg, {
                          placeholder: s("team_settings_es_sso_domain_url_placeholder"),
                          fieldName: `${e.name}.${a}`,
                          readOnly: null != (d = !!t.status) ? d : u,
                          autoFocus: a === i[e.name].length - 1,
                          endIcon: h,
                          feedbackType: !t.status && o[t.name] ? "error" : void 0,
                          feedbackText: t.status ? void 0 : o[t.name],
                          handleAdd: async () => {
                            try {
                              await b(t), _(t.name);
                            } catch (e) {
                              y(t.name, e.message);
                            }
                          },
                          actions: (0, B.tZ)(
                            n.Fragment,
                            null,
                            [void 0, mr.p.pending].includes(t.status)
                              ? (0, B.tZ)(
                                  c.zxk,
                                  {
                                    nature: "secondary",
                                    type: "button",
                                    disabled: u,
                                    onClick: () =>
                                      (async (e) => {
                                        try {
                                          void 0 === e.status && (await b(e)), _(e.name);
                                        } catch (t) {
                                          y(e.name, t.message);
                                        }
                                      })(t)
                                  },
                                  s(
                                    void 0 === t.status
                                      ? "team_settings_es_sso_setup_add_domain"
                                      : "team_settings_es_sso_setup_verify_button"
                                  )
                                )
                              : null,
                            t.name.length && void 0 !== t.status
                              ? (0, B.tZ)(Wg.h, {
                                  nature: "secondary",
                                  type: "button",
                                  disabled: u,
                                  onClick: () => p(t),
                                  icon: Xg || (Xg = (0, B.tZ)(c.XHJ, null))
                                })
                              : null
                          )
                        })
                      );
                    })
                  )
                ),
                Jg || (Jg = (0, B.tZ)($p, null)),
                u
                  ? (0, B.tZ)(yc, {
                      domainName: u,
                      onSuccess: async () => {
                        _(""), await a();
                      },
                      onDismiss: () => _("")
                    })
                  : null,
                m
                  ? (0, B.tZ)(Vl, {
                      domain: m,
                      onDismiss: () => p(null),
                      onConfirm: async () => {
                        await (async (e) => {
                          if (!e) return;
                          const t = await ca.C.deactivateTeamDomain({ domain: e });
                          return t.success ? void 0 : t.error.code;
                        })(m.name),
                          await a();
                      }
                    })
                  : null
              );
        };
      var ry;
      const ly = ({ inputValue: e, labelText: t, disabled: a, loading: n, id: s }) =>
          (0, B.tZ)(_c.x, {
            inputValue: e,
            textInputProps: {
              fullWidth: !0,
              readOnly: !0,
              disabled: a,
              id: s,
              startAdornment: n ? ry || (ry = (0, B.tZ)(c.HoD, { color: "primaries.5" })) : void 0,
              label: (0, B.tZ)(c.nvN, { as: "label", bold: !0, sx: { mb: "4px" }, htmlFor: s }, t)
            },
            iconButtonProps: { disabled: a }
          }),
        cy = (e) => {
          const t = (0, n.useMemo)(() => {
              var t, a;
              return { draft: null != (t = e?.draft) && t, deviceAccessKey: null != (a = e?.deviceAccessKey) ? a : "" };
            }, [e?.draft, e?.deviceAccessKey]),
            [a, s] = (0, n.useState)(!0),
            [i, o] = (0, n.useState)(null),
            [r, l] = (0, n.useState)(null),
            c = (0, n.useCallback)(async () => {
              try {
                return await ca.C.getTeamDeviceEncryptedConfig(t);
              } catch {
                return { success: !1, error: { code: _g.S2 } };
              }
            }, [t]),
            d = (0, n.useCallback)(
              async (e = new AbortController()) => {
                e.signal.aborted || s(!0);
                const t = await c();
                return e.signal.aborted || (o(t.success ? null : t.error.code), t.success && l(t.data), s(!1)), t;
              },
              [c]
            ),
            u = (0, n.useCallback)(async (e) => {
              s(!0);
              try {
                return await ca.C.updateTeamDeviceEncryptedConfig(e);
              } catch {
                return { success: !1, error: { code: _g.S2 } };
              } finally {
                s(!1);
              }
            }, []);
          return (
            (0, n.useEffect)(() => {
              const e = new AbortController();
              return (
                d(e),
                () => {
                  e.abort();
                }
              );
            }, [d]),
            {
              teamDeviceConfigLoading: a,
              loadTeamDeviceConfigErrorCode: i,
              teamDeviceConfig: r,
              updateTeamDeviceConfig: u,
              refreshTeamDeviceConfig: d
            }
          );
        };
      var dy, uy, _y, my;
      const { grey00: py } = c.colors,
        gy = "team_settings_es_sso_setup_header",
        yy = "team_settings_domain_fetch_error",
        hy = { GENERIC_ERROR: "_common_generic_error" },
        by = (e) => (e ? `${e}/saml/callback` : ""),
        xy = "ssoIdpMetadata",
        Sy = () => {
          var e;
          const { translate: t } = (0, g.Z)(),
            { teamId: a } = (0, lr.fV)(),
            { updateTeamDeviceConfig: s } = cy(),
            [o, r] = (0, n.useState)(!1),
            [d, u] = (0, n.useState)(!1),
            [_, m] = (0, n.useState)([]),
            p = (0, n.useRef)(null),
            [y, h] = (0, n.useState)(!1),
            [b, x] = (0, n.useState)(""),
            { teamSettings: S = {}, teamSettingsLoading: v } = $c(a),
            { ssoIdpMetadata: f, ssoServiceProviderUrl: C = "" } = S,
            Z = (0, i.k6)(),
            E = (0, n.useCallback)(async () => {
              try {
                x("");
                const e = await ca.C.getTeamDomains();
                if (e.success) {
                  const t = e.domains.length ? e.domains : [];
                  m([...t, { name: "", id: 0 }]);
                } else x(t(yy));
              } catch (a) {
                var e;
                x(null != (e = a.message) ? e : t(yy));
              }
            }, [t]);
          (0, n.useEffect)(() => {
            h(!0), E().then(() => h(!1));
          }, [E]);
          const D = { domains: _, ssoIdpMetadata: null != (e = null != f ? f : p.current?.value) ? e : "" },
            T = () => Z.goBack();
          return v || y
            ? (0, B.tZ)(
                c.Zbd,
                null,
                (0, B.tZ)(c.Ol2, null, t(gy)),
                dy ||
                  (dy = (0, B.tZ)(
                    c.aYP,
                    null,
                    (0, B.tZ)(c.Ejs, { fullWidth: !0, justifyContent: "center" }, (0, B.tZ)(c.HoD, { size: 60, color: "primaries.5" }))
                  ))
              )
            : (0, B.tZ)(
                $a.J9,
                {
                  onSubmit: async (e, a) => {
                    try {
                      var n;
                      r(!0), u(!1);
                      const i = await s({
                        ssoEnabled: !0,
                        [xy]: e[xy],
                        connectorEndpoint: C || void 0,
                        teamDeviceUrl: null != (n = S.ssoServiceProviderUrl) ? n : void 0
                      });
                      if (!i.success) {
                        const e = i.error.code.toUpperCase();
                        if ("DEACTIVATED_TEAM_DEVICE" === e) return;
                        const n = t(hy[e] ? hy[e] : hy.GENERIC_ERROR);
                        return void a.setFieldError(xy, n);
                      }
                      if (i.data.encryptionServiceReloadingStatus !== pg.x.OK) return void u(!0);
                      T();
                    } catch (e) {
                      a.setFieldError(xy, t(hy.GENERIC_ERROR));
                    } finally {
                      r(!1);
                    }
                  },
                  initialValues: D,
                  enableReinitialize: !0
                },
                ({ isSubmitting: e, dirty: a }) => {
                  return (0, B.tZ)(
                    $a.l0,
                    { autoComplete: "off", noValidate: !0 },
                    (0, B.tZ)(gg.X, { dirty: a && !o && !d }),
                    (0, B.tZ)(
                      c.Zbd,
                      null,
                      (0, B.tZ)(c.Ol2, null, t(gy)),
                      (0, B.tZ)(
                        c.aYP,
                        null,
                        (0, B.tZ)(oy, { fieldArrayName: "domains", domainLoadError: b, refreshDomains: E }),
                        uy || (uy = (0, B.tZ)("hr", null)),
                        (0, B.tZ)(l.ke, { title: t.markup("team_settings_es_sso_setup_copy_info_to_idp_markup"), sx: { mb: "32px" } }),
                        (0, B.tZ)(
                          c.T5p,
                          { justifyContent: "stretch", gridTemplateColumns: "auto", gap: "32px", gridAutoRows: "auto" },
                          (0, B.tZ)(ly, {
                            id: "entity-id-input",
                            inputValue: ((n = C), n ? `${n}/saml/` : ""),
                            labelText: t("team_settings_es_sso_entity_id_label"),
                            disabled: v || !C,
                            loading: v
                          }),
                          (0, B.tZ)(ly, {
                            id: "acs-url-input",
                            inputValue: by(C),
                            labelText: t("team_settings_es_sso_acs_url_label"),
                            disabled: v || !C,
                            loading: v
                          })
                        ),
                        _y || (_y = (0, B.tZ)("hr", null)),
                        (0, B.tZ)(
                          c.nvN,
                          { as: "label", bold: !0, htmlFor: "sso-metadata-input" },
                          t("team_settings_es_sso_metadata_label")
                        ),
                        (0, B.tZ)(
                          c.nvN,
                          { size: "small", color: py, sx: { mt: "8px", mb: "24px" } },
                          t("team_settings_es_sso_metadata_description")
                        ),
                        (0, B.tZ)($a.gN, { name: xy }, ({ field: e, meta: { error: t, touched: a } }) =>
                          (0, B.tZ)(c.oil, {
                            id: "sso-metadata-input",
                            sx: { height: "10em", resize: "vertical" },
                            ...e,
                            ref: p,
                            multiline: !0,
                            fullWidth: !0,
                            feedbackText: a && t ? t : void 0,
                            feedbackType: a && t ? "error" : void 0
                          })
                        )
                      ),
                      (0, B.tZ)(
                        c.eWM,
                        null,
                        d
                          ? (0, B.tZ)(
                              c.Ejs,
                              { sx: { flexGrow: 1, justifyContent: "center" } },
                              my || (my = (0, B.tZ)(vg, { context: "SSO" }))
                            )
                          : null,
                        (0, B.tZ)(
                          c.zxk,
                          { disabled: e, nature: "secondary", size: "large", type: "button", onClick: T },
                          t("team_settings_es_sso_setup_cancel")
                        ),
                        (0, B.tZ)(
                          c.zxk,
                          { disabled: e, nature: "primary", type: "submit", size: "large" },
                          t("team_settings_es_sso_setup_save")
                        )
                      )
                    )
                  );
                  var n;
                }
              );
        },
        { grey00: vy } = c.colors,
        fy = "team_settings_enable_sso_test_button",
        Cy = ({ actionsDisabled: e, ssoServiceProviderUrl: t }) => {
          const { translate: a } = (0, g.Z)(),
            n = t ? `${t}/saml/login?redirect=test_idp` : "";
          return (0, B.tZ)(
            c.T5p,
            { gap: "8px", gridTemplateAreas: "'header buttons' 'description buttons' ", gridTemplateColumns: "1fr auto" },
            (0, B.tZ)(
              c.dDn,
              { as: c.nvN, innerAs: "h3", size: "large", bold: !0, gridArea: "header" },
              a("team_settings_enable_sso_test_title")
            ),
            (0, B.tZ)(
              c.dDn,
              { gridArea: "description", as: c.nvN, size: "small", color: vy },
              a("team_settings_enable_sso_test_description")
            ),
            (0, B.tZ)(
              c.T5p,
              { gap: "8px", gridTemplateAreas: "'test copy'", as: c.dDn, gridArea: "buttons" },
              (0, B.tZ)(
                c.dDn,
                { gridArea: "test" },
                (0, B.tZ)(
                  lu.M,
                  {
                    onClick: () => {
                      (0, j.Yo)(n);
                    },
                    size: "medium",
                    "aria-label": a(fy),
                    disabled: null != e ? e : !n,
                    content: a("team_settings_es_sso_setup_incomplete")
                  },
                  a(fy),
                  (0, B.tZ)(c.RTC, { sx: { ml: "4px" }, color: "white" })
                )
              ),
              (0, B.tZ)(
                c.dDn,
                { gridArea: "copy" },
                (0, B.tZ)(Lu.q, {
                  buttonText: a("team_settings_copy_sso_url_button"),
                  disabled: null != e ? e : !n,
                  copyValue: null != n ? n : ""
                })
              )
            )
          );
        },
        Zy = ({ closeDialog: e }) => {
          const { translate: t } = (0, g.Z)();
          return n.createElement(
            q.o,
            {
              isOpen: !0,
              onRequestClose: () => e(Xl.dismiss),
              footer: n.createElement(c.cNS, {
                primaryButtonTitle: t("team_settings_enable_sso_dialog_disable_action"),
                primaryButtonOnClick: () => e(Xl.action),
                secondaryButtonTitle: t("team_settings_enable_sso_cancel"),
                secondaryButtonOnClick: () => e(Xl.dismiss),
                intent: "danger"
              }),
              title: t("team_settings_enable_sso_dialog_disable_title")
            },
            t("team_settings_enable_sso_dialog_disable_description")
          );
        };
      var Ey,
        Dy = a(440234);
      const { grey00: Ty } = c.colors,
        Ny = ({ actionsDisabled: e, ssoEnabled: t, updateTeamSettings: a, loading: s }) => {
          const { translate: i } = (0, g.Z)(),
            [r, d] = (0, n.useState)(!1),
            [u, _] = (0, n.useState)(!1),
            m = (0, Wa.V)(),
            { initSsoProvisioning: p } = (0, $e.u)(Dy.y),
            { teamId: y } = (0, lr.fV)(),
            h = () => {
              m.showAlert(
                t
                  ? i("_common_generic_error")
                  : i.markup("team_settings_enable_sso_action_toggle_warning_markup", void 0, { linkTarget: "_blank" }),
                c.BLW.ERROR
              );
            };
          return (0, B.tZ)(
            n.Fragment,
            null,
            (0, B.tZ)(
              c.T5p,
              { gap: "8px", gridTemplateAreas: "'header buttons' 'description toggle' ", gridTemplateColumns: "1fr auto" },
              (0, B.tZ)(
                c.dDn,
                { as: c.nvN, innerAs: "h3", size: "large", bold: !0, gridArea: "header" },
                i("team_settings_enable_sso_action_title")
              ),
              (0, B.tZ)(
                c.dDn,
                { gridArea: "description", as: c.nvN, size: "small", color: Ty },
                i("team_settings_enable_sso_action_description"),
                Ey || (Ey = (0, B.tZ)("br", null)),
                i("team_settings_enable_sso_action_description_note")
              ),
              (0, B.tZ)(
                c.dDn,
                { gridArea: "toggle" },
                (0, B.tZ)(l.ZD, {
                  disabled: e || s,
                  checked: t,
                  onChange: async () => {
                    t ? d(!0) : (_(!0), _p({ ssoSetupStep: o.SsoSetupStep.TurnOnSso }));
                  }
                })
              )
            ),
            r
              ? (0, B.tZ)(Zy, {
                  closeDialog: async (e) => {
                    if ((d(!1), e !== Xl.dismiss && y))
                      try {
                        const e = !t;
                        await a({ ssoEnabled: e }), await p({ teamId: y });
                      } catch (e) {
                        h();
                      }
                  }
                })
              : null,
            u
              ? (0, B.tZ)(jp, {
                  title: i("team_settings_enable_sso_confirm_dialog_title"),
                  body: i("team_settings_enable_sso_confirm_dialog_body"),
                  primaryActionLabel: i("team_settings_enable_sso_confirm_dialog_primary_action_label"),
                  onCancel: () => {
                    _(!1);
                  },
                  onConfirm: async () => {
                    await (async () => {
                      if (y)
                        try {
                          await a({ ssoEnabled: !0 }), await p({ teamId: y }), _p({ ssoSetupStep: o.SsoSetupStep.CompleteSsoSetup });
                        } catch (e) {
                          h();
                        }
                    })(),
                      _(!1);
                  }
                })
              : null
          );
        };
      var My;
      const { grey00: Iy } = c.colors;
      var wy = (function (e) {
        return (
          (e.UNKNOWN = "UNKNOWN"),
          (e.LOADING = "LOADING"),
          (e.COMPLETE = "COMPLETE"),
          (e.INCOMPLETE = "INCOMPLETE"),
          (e.NOT_STARTED = "NOT_STARTED"),
          (e.UNAVAILABLE = "UNAVAILABLE"),
          (e.ERROR = "ERROR"),
          e
        );
      })(wy || {});
      const ky = [pp.s5.enum.NitroComplete, pp.s5.enum.NitroIncomplete],
        Ay = ({ disableSetupButton: e, isSsoCapable: t }) => {
          var a;
          const { translate: s } = (0, g.Z)(),
            { teamId: o } = (0, lr.fV)(),
            { teamSettings: r = {}, updateTeamSettings: l, teamSettingsLoading: u } = $c(o),
            { ssoEnabled: _ = !1, ssoServiceProviderUrl: m = "", ssoIdpMetadata: p } = r,
            [y, h] = (0, n.useState)(wy.UNKNOWN),
            b = (0, d.k)(rp.y, "ssoProvisioning"),
            x = null != (a = b.data?.global.inferredSsoState) ? a : pp.s5.enum.Unknown;
          (0, n.useEffect)(() => {
            h(wy.LOADING),
              ca.C.getTeamDomains().then((e) => {
                if (!e.success) return void h(wy.ERROR);
                const t = ky.includes(x);
                if (!m || t) return void h(wy.UNAVAILABLE);
                const a = e.domains.some(({ status: e }) => "valid" === e),
                  n = e.domains.length > 0,
                  s = !!p;
                switch (!0) {
                  case a && s:
                    h(wy.COMPLETE);
                    break;
                  case (!n && s) || (n && !s) || (!a && n && s):
                    h(wy.INCOMPLETE);
                    break;
                  case !n && !s:
                    h(wy.NOT_STARTED);
                }
              });
          }, [x, p, m]);
          const S = y === wy.UNAVAILABLE || u || e,
            { path: v } = (0, i.$B)(),
            f = (0, i.k6)(),
            C = [wy.COMPLETE, wy.INCOMPLETE].includes(y);
          return (0, B.tZ)(
            c.Zbd,
            null,
            (0, B.tZ)(
              c.T5p,
              {
                as: c.aYP,
                gridTemplateAreas: "'header button' 'description button'",
                gridTemplateColumns: "1fr auto",
                gap: "8px",
                sx: { bg: "white", border: "none" }
              },
              (0, B.tZ)(
                c.dDn,
                { as: c.nvN, innerAs: "h3", size: "large", bold: !0, gridArea: "header" },
                s("team_settings_es_sso_setup_header")
              ),
              (0, B.tZ)(
                c.dDn,
                { gridArea: "description", as: c.nvN, size: "small", color: Iy },
                s("team_settings_es_sso_setup_description")
              ),
              (0, B.tZ)(
                c.dDn,
                { gridArea: "button", alignSelf: "center" },
                (0, B.tZ)(
                  lu.M,
                  {
                    id: "ssoSetupButton",
                    loading: u || y === wy.LOADING,
                    disabled: S,
                    type: "button",
                    size: "large",
                    onClick: () => {
                      f.push(`${v}/sso-settings`);
                    },
                    content: s("team_settings_es_sso_setup_configure_es_tooltip"),
                    neverShowTooltip: !t,
                    mood: C ? "neutral" : "brand",
                    intensity: C ? "quiet" : "catchy"
                  },
                  s(C ? "team_settings_button_edit_label" : "team_settings_es_sso_setup_button")
                )
              )
            ),
            C
              ? (0, B.tZ)(
                  c.aYP,
                  { sx: { bg: "white" } },
                  (0, B.tZ)(Cy, { actionsDisabled: y !== wy.COMPLETE, ssoServiceProviderUrl: m }),
                  My || (My = (0, B.tZ)("br", null)),
                  (0, B.tZ)(Ny, { actionsDisabled: y !== wy.COMPLETE, ssoEnabled: _, loading: u, updateTeamSettings: l })
                )
              : null
          );
        };
      var Oy, Ly, zy;
      const { dashDarkerGreen00: jy, dashGreen00: Ry, dashGreen06: Py, midGreen00: Uy } = c.colors,
        By = ({ backRoute: e }) => {
          const { translate: t } = (0, g.Z)(),
            { path: a } = (0, i.$B)(),
            { esConfig: n, esConfigLoading: s, refreshEncryptionServiceConfig: r } = mg(),
            { teamId: u } = (0, lr.fV)(),
            { teamSettings: _, updateTeamSettings: m, teamSettingsLoading: p } = $c(u),
            { status: y, data: h } = (0, d.k)(rp.y, "ssoProvisioning");
          if (y !== se.rq.Success) return null;
          const {
              global: { ssoCapable: b, inferredSsoState: x },
              enableSSO: { ssoEnabled: S }
            } = h,
            v = x === pp.s5.enum.NitroIncomplete,
            f = !S,
            C = x === pp.s5.enum.SsoConnectorToSelfHostedMigration;
          return (0, B.tZ)(
            c.T5p,
            { gridTemplateColumns: "auto", gridTemplateRows: "auto 1fr", fullWidth: !0, sx: { height: "100%" } },
            (0, B.tZ)(
              "div",
              { sx: { bg: Py, px: "48px", pt: "32px", pb: "4px" } },
              (0, B.tZ)(Gi, { title: t("team_settings_es_sso_title") }),
              f
                ? (0, B.tZ)(
                    c.rUS,
                    {
                      color: Uy,
                      hoverColor: Ry,
                      activeColor: jy,
                      onClick: () => {
                        _p({ ssoSetupStep: o.SsoSetupStep.ReturnToSsoSelection }), (0, i.uX)(e);
                      },
                      sx: { fontSize: "16px", display: "flex", textDecoration: "none", marginTop: "-18px" }
                    },
                    (0, B.tZ)(l.JO, { name: "ArrowLeftOutlined", size: "small", color: Ry, sx: { marginRight: "10px" } }),
                    " ",
                    "Back"
                  )
                : null
            ),
            (0, B.tZ)(c_, {
              mainContent: c.T5p,
              mainProps: {
                gridTemplateColumns: "auto",
                gridAutoRows: "min-content",
                gap: "32px",
                children: (0, B.tZ)(
                  i.rs,
                  null,
                  (0, B.tZ)(
                    i.AW,
                    { exact: !0, path: a },
                    (0, B.tZ)(vp, { pageContext: Sp.SelfHosted, onSetupClear: () => m({ ssoServiceProviderUrl: null }) }),
                    Oy || (Oy = (0, B.tZ)(vg, null)),
                    C
                      ? (0, B.tZ)(l.ke, {
                          title: t("team_settings_es_sso_migration_infobox_title"),
                          description: t("team_settings_es_sso_migration_infobox_body")
                        })
                      : null,
                    (0, B.tZ)(Vg, { loading: s || null === b, esConfig: n, parentPath: a, disableSetupButton: !b || v }),
                    (0, B.tZ)(Ay, { isSsoCapable: b, disableSetupButton: !b || !n?.config })
                  ),
                  (0, B.tZ)(
                    i.AW,
                    { path: `${a}/encryption-service-settings` },
                    s || p
                      ? Ly || (Ly = (0, B.tZ)(c.HoD, null))
                      : (0, B.tZ)(Ug, {
                          migratingFromSSOConnector: C,
                          onSave: () => r(),
                          teamSettings: _,
                          updateTeamSettings: m,
                          esConfig: n
                        })
                  ),
                  (0, B.tZ)(i.AW, { path: `${a}/sso-settings` }, zy || (zy = (0, B.tZ)(Sy, null)))
                )
              },
              secondaryContent: Bl,
              secondaryProps: {
                description: t("team_settings_es_sso_setup_guide_description"),
                heading: t("team_settings_es_sso_setup_guide_heading"),
                linkText: t("team_settings_es_sso_setup_guide_link_text"),
                linkProps: { linkType: Ul.ExternalLink, linkHref: "https://support.dashlane.com/hc/articles/360013149040" }
              }
            })
          );
        },
        Gy = ({ closeDialog: e }) => {
          const { translate: t } = (0, g.Z)(),
            a = t.markup("team_settings_sso_desktop_infobox_warning_markup", { learnMore: ce.rh }, { linkTarget: "_blank" });
          return n.createElement(
            c.VqE,
            { closeIconName: t("_common_dialog_dismiss_button"), isOpen: !0, onClose: () => e(Xl.dismiss) },
            n.createElement(
              "div",
              { className: "container--m6KmsQvg_3" },
              n.createElement(c.$N8, { title: t("team_settings_enable_sso_dialog_activate_title") }),
              n.createElement(
                c.a7O,
                null,
                n.createElement(
                  "div",
                  { className: "toggleInfoBox--y5TmWAMYcl" },
                  a && n.createElement(c.vDh, { severity: "warning", size: "small", title: a })
                )
              ),
              n.createElement(c.cNS, {
                primaryButtonOnClick: () => e(Xl.action),
                primaryButtonTitle: t("team_settings_enable_sso_dialog_activate_action"),
                secondaryButtonOnClick: () => e(Xl.dismiss),
                secondaryButtonTitle: t("team_settings_enable_sso_cancel")
              })
            )
          );
        },
        Fy = ({ closeDialog: e }) => {
          const { translate: t } = (0, g.Z)();
          return n.createElement(
            q.o,
            {
              isOpen: !0,
              onRequestClose: () => e(Xl.dismiss),
              footer: n.createElement(c.cNS, {
                primaryButtonTitle: t("team_settings_enable_sso_dialog_disable_action"),
                primaryButtonOnClick: () => e(Xl.action),
                secondaryButtonTitle: t("team_settings_enable_sso_cancel"),
                secondaryButtonOnClick: () => e(Xl.dismiss),
                intent: "danger"
              }),
              title: t("team_settings_enable_sso_dialog_disable_title")
            },
            t("team_settings_enable_sso_dialog_disable_description")
          );
        },
        qy = ({ teamSettings: e, updateTeamSettings: t, teamId: a, planTier: s, setStepComplete: i }) => {
          var o;
          const [r, l] = (0, n.useState)(null != (o = e?.ssoEnabled) && o),
            [d, u] = (0, n.useState)(!1),
            [_, m] = (0, n.useState)(!1),
            [p, y] = (0, n.useState)([]),
            [h, b] = (0, n.useState)(!1);
          (0, n.useEffect)(() => {
            if (!r) return "legacy" === s || "team" === s ? b(!0) : void 0;
            i(Yl.EnableSSO);
          }, [a, p, r, s, i]),
            (0, n.useEffect)(() => {
              (async () => {
                const e = await ca.C.getTeamDomains();
                e.success && y(e.domains.filter((e) => "valid" === e.status).map((e) => e.name));
              })();
            }, []);
          const { translate: x } = (0, g.Z)(),
            S = async (e) => {
              if ((m(!1), e !== Xl.dismiss))
                try {
                  const e = !r;
                  await t({ ssoEnabled: e }), l(e);
                } catch (e) {
                  u(!0);
                }
            };
          return n.createElement(
            "div",
            { className: "enableSSOContainer--VLsANoM8AQ" },
            n.createElement(
              Kl,
              { label: x("team_settings_enable_sso_test_title"), labelHelper: x("team_settings_enable_sso_test_description") },
              n.createElement(
                c.zxk,
                {
                  type: "button",
                  nature: "primary",
                  onClick: () => {
                    (0, j.Yo)(`${e?.ssoServiceProviderUrl}/saml/login?redirect=test_idp`);
                  },
                  disabled: !(e && e.ssoServiceProviderUrl)
                },
                x("team_settings_enable_sso_test_button")
              )
            ),
            n.createElement(
              Kl,
              { label: x("team_settings_enable_sso_action_title"), labelHelper: x("team_settings_enable_sso_action_description") },
              h
                ? n.createElement(
                    c.zxk,
                    { nature: "primary", onClick: () => (0, j.Yo)(ce.Bw), type: "button" },
                    x("team_settings_enable_sso_contact_support")
                  )
                : n.createElement(
                    "div",
                    null,
                    n.createElement(c.ZDl, { onClick: () => m(!0), checked: r, disabled: d }),
                    r
                      ? n.createElement(
                          "div",
                          { className: "toggleDescription--S3OccP6JDd" },
                          x("team_settings_enable_sso_action_toggle_description")
                        )
                      : null,
                    d
                      ? n.createElement(
                          "div",
                          { className: "toggleWarning--TU8a__FJDp" },
                          x.markup("team_settings_enable_sso_action_toggle_warning_markup")
                        )
                      : null
                  )
            ),
            _ ? (r ? n.createElement(Fy, { closeDialog: S }) : n.createElement(Gy, { closeDialog: S })) : null
          );
        };
      var $y = a(568197);
      const Vy = ({ isTeamSettingsLoading: e, teamSettings: t }) => {
        const { translate: a } = (0, g.Z)(),
          [s, i] = n.useState(""),
          [o, r] = n.useState(""),
          [l, c] = n.useState(""),
          d = t?.ssoServiceProviderUrl;
        return (
          n.useEffect(() => {
            !e && d && (i((0, $y.UQ)(d, "saml")), r((0, $y.UQ)(d, "saml/")), c((0, $y.UQ)(d, "saml/callback")));
          }, [e, d]),
          n.createElement(
            "div",
            { className: "configureIDPContainer--ACoVdM7s0N" },
            n.createElement(
              Kl,
              { label: a("team_settings_configure_idp_connector_metadata"), centerLabel: !0 },
              n.createElement(_c.x, { inputValue: s, textInputProps: { fullWidth: !0, readOnly: !0 } })
            ),
            n.createElement(
              Kl,
              { label: a("team_settings_configure_idp_entity_id"), centerLabel: !0 },
              n.createElement(_c.x, { inputValue: o, textInputProps: { fullWidth: !0, readOnly: !0 } })
            ),
            n.createElement(
              Kl,
              { label: a("team_settings_configure_idp_login_url"), centerLabel: !0 },
              n.createElement(_c.x, { inputValue: l, textInputProps: { fullWidth: !0, readOnly: !0 } })
            )
          )
        );
      };
      var Wy = a(798783),
        Hy = a.n(Wy);
      const Ky = "connectorInfoContainer--e07d9cT8Hu",
        Yy = "textField--Nk7DpcX8Pp",
        Qy = "loading--sfYFOqhXPS",
        Xy = "installerButtonContainer--iP6MNTnQrn",
        Jy = "errorText--snbBoX2meA",
        eh = ({ keyValue: e, onGenerateClicked: t, isGeneratorDisabled: a, generatorDisabledText: s }) => {
          const { translate: i } = (0, g.Z)(),
            [o, r] = (0, n.useState)(!1),
            l = (0, n.useRef)(null);
          return (
            (0, n.useEffect)(() => {
              l.current && new (Hy())(l.current, { text: () => e });
            }, [e]),
            (0, B.tZ)(
              Kl,
              { label: i("team_settings_connector_generator_title"), labelHelper: i("team_settings_connector_generator_description") },
              (0, B.tZ)(
                "div",
                { className: "generatorContainer--_83Buo4tVF" },
                (0, B.tZ)(
                  c.ua7,
                  { content: s, passThrough: !a, sx: { maxWidth: "210px" } },
                  (0, B.tZ)(
                    "div",
                    { className: a ? "generatorDisableContent--Olv4UpdAqY" : "" },
                    (0, B.tZ)(
                      c.zxk,
                      {
                        type: "button",
                        "aria-describedby": "errorKeyWarning",
                        className: "generatorButton--I0z2qEK25R",
                        onClick: () => {
                          r(!0), t();
                        },
                        disabled: a
                      },
                      i("team_settings_connector_generator_button")
                    ),
                    (0, B.tZ)(
                      "div",
                      { className: "generatorInputContainer--M4lkXUrCCY" },
                      (0, B.tZ)(_c.x, {
                        inputValue: e,
                        textInputProps: { readOnly: !0, fullWidth: !0, disabled: a, style: { cursor: a ? "not-allowed" : "text" } },
                        tooltipProps: { passThrough: a },
                        iconButtonProps: { disabled: a }
                      })
                    ),
                    o && (0, B.tZ)("p", { id: "errorKeyWarning", className: Jy }, i("team_settings_connector_generator_warning"))
                  )
                )
              )
            )
          );
        },
        th = "team_settings_connector_installer_tooltip",
        ah = ({ isTeamSettingsLoading: e, isSsoEnabled: t, idpMetadata: a, connectorUrl: s }) => {
          const { translate: i } = (0, g.Z)(),
            [o, r] = (0, n.useState)(""),
            [l, d] = (0, n.useState)("");
          (0, n.useEffect)(() => {
            r("");
          }, [a, s]);
          const u = Boolean(a && s && (l || t));
          return (0, B.tZ)(
            n.Fragment,
            null,
            (0, B.tZ)(eh, {
              keyValue: l,
              onGenerateClicked: async () => {
                const e = await ca.C.generateSSOConnectorKey();
                d(e);
              },
              isGeneratorDisabled: t,
              generatorDisabledText: i("team_settings_connector_generator_instance_help")
            }),
            (0, B.tZ)(
              Kl,
              { label: i("team_settings_connector_installer_title"), labelHelper: i("team_settings_connector_installer_description") },
              (0, B.tZ)(
                "div",
                { className: e ? Qy : Xy },
                (0, B.tZ)(
                  c.ua7,
                  { content: i(th), passThrough: u, sx: { maxWidth: "210px" } },
                  (0, B.tZ)(
                    c.zxk,
                    {
                      type: "button",
                      "aria-describedby": "configError",
                      disabled: !u,
                      onClick: async () => {
                        r("");
                        const e = await ca.C.createSSOConnectorConfig({ connectorUrl: s, connectorKey: l, idpMetadata: a });
                        e.success ? (0, Ki.S)(e.config, "dashlane-sso-config.txt", "text/plain") : e.success || r(e.error.code);
                      }
                    },
                    (0, B.tZ)("div", { className: "downloadIcon--dtf6SHkd51" }, (0, B.tZ)(c._8t, { color: $l()["--white"] })),
                    i("team_settings_connector_installer_config_button")
                  ),
                  o ? (0, B.tZ)("p", { id: "configError", className: Jy }, i("team_settings_connector_installer_error")) : null
                )
              )
            ),
            (0, B.tZ)(
              Kl,
              {
                label: i("team_settings_connector_installer_setup_title"),
                labelHelper: i("team_settings_connector_installer_setup_description")
              },
              (0, B.tZ)(
                "div",
                { className: e ? Qy : Xy },
                (0, B.tZ)(
                  c.ua7,
                  { content: i(th), passThrough: u, sx: { maxWidth: "210px" } },
                  (0, B.tZ)(
                    c.zxk,
                    { type: "button", disabled: !u, onClick: () => (0, j.Yo)(ce.nC) },
                    (0, B.tZ)("div", { className: "openIcon--Jft6n3KJTS" }, (0, B.tZ)(c.RTC, { color: $l()["--white"] })),
                    i("team_settings_connector_installer_button")
                  )
                )
              )
            )
          );
        },
        nh = "team_settings_connector_edit",
        sh = "team_settings_connector_save",
        ih = "team_settings_connector_saving",
        oh = "team_settings_connector_success",
        rh = ({ isTeamSettingsLoading: e, saveConnectorURL: t, saveIdpMetadata: a, teamSettings: s }) => {
          var i, o;
          const { translate: r } = (0, g.Z)();
          return n.createElement(
            n.Fragment,
            null,
            n.createElement(
              Kl,
              { label: r("team_settings_connector_metadata_title") },
              n.createElement(
                "div",
                { className: Ky },
                n.createElement(kn.X, {
                  isDisabled: e,
                  multiLine: !0,
                  defaultValue: null != (i = s?.ssoIdpMetadata) ? i : "",
                  saveBtnLabel: r(sh),
                  savingBtnLabel: r(ih),
                  editBtnLabel: r(nh),
                  placeholder: r("team_settings_connector_metadata_placeholder"),
                  successMessage: r(oh),
                  onSave: a,
                  inputFieldClassName: "inputField--SXqAbTX3lX",
                  textFieldClassName: Yy
                })
              )
            ),
            n.createElement(
              Kl,
              { label: r("team_settings_connector_url_title"), labelHelper: r("team_settings_connector_url_description") },
              n.createElement(
                "div",
                { className: Ky },
                n.createElement(kn.X, {
                  isDisabled: e,
                  defaultValue: null != (o = s?.ssoServiceProviderUrl) ? o : "",
                  saveBtnLabel: r(sh),
                  savingBtnLabel: r(ih),
                  editBtnLabel: r(nh),
                  placeholder: r("team_settings_connector_url_placeholder"),
                  successMessage: r(oh),
                  onSave: t,
                  textFieldClassName: Yy
                })
              )
            )
          );
        },
        lh = ({ setStepComplete: e, isTeamSettingsLoading: t = !1, teamSettings: a, updateTeamSettings: s }) => {
          var i, o, r;
          const { translate: l } = (0, g.Z)(),
            c = n.useCallback(
              async (e) => {
                try {
                  await s({ ssoIdpMetadata: e });
                } catch (e) {
                  throw Error(l("team_settings_connector_metadata_error"));
                }
              },
              [s, l]
            ),
            d = n.useCallback(
              async (e) => {
                try {
                  const t = e ? (0, $y.Yw)(e) : null;
                  await s({ ssoServiceProviderUrl: t });
                } catch (e) {
                  throw Error(l("team_settings_connector_url_error"));
                }
              },
              [s, l]
            ),
            u = a?.ssoServiceProviderUrl,
            _ = a?.ssoIdpMetadata;
          return (
            n.useEffect(() => {
              t || (_ && u && e(Yl.SSOConnector));
            }, [t, u, _, e]),
            n.createElement(
              "div",
              { className: "ssoConnectorContainer--ndf4jAvwn0" },
              n.createElement(rh, { isTeamSettingsLoading: t, teamSettings: a, saveConnectorURL: d, saveIdpMetadata: c }),
              n.createElement(ah, {
                isTeamSettingsLoading: t,
                isSsoEnabled: null != (i = a?.ssoEnabled) && i,
                idpMetadata: null != (o = a?.ssoIdpMetadata) ? o : "",
                connectorUrl: null != (r = a?.ssoServiceProviderUrl) ? r : ""
              })
            )
          );
        },
        ch = ({ lee: e }) => {
          const { translate: t } = (0, g.Z)(),
            [a, s] = (0, n.useState)(new Set()),
            [i, r] = (0, n.useState)(new Set()),
            [l, d] = (0, n.useState)(new Set([Ql.EnableSSO, Ql.SSOConnector]));
          (0, n.useEffect)(() => {
            (0, P.Nc)(o.PageView.TacSettingsSsoLegacy);
          }, []),
            (0, n.useEffect)(() => {
              const e = new Set(),
                t = new Set([Ql.EnableSSO, Ql.ConfigureIDP, Ql.SSOConnector]);
              a.has(Yl.ClaimDomain) &&
                a.has(Yl.VerifyDomain) &&
                (e.add(Ql.SSOConnector),
                e.add(Ql.ConfigureIDP),
                e.add(Ql.EnableSSO),
                t.delete(Ql.SSOConnector),
                t.delete(Ql.ConfigureIDP),
                t.delete(Ql.EnableSSO)),
                a.has(Yl.EnableSSO) && (e.delete(Ql.SSOConnector), e.delete(Ql.ConfigureIDP)),
                r(e),
                d(t);
            }, [a]);
          const u = (0, n.useCallback)((e) => {
              s((t) => {
                const a = (e) => e.every((e) => t.has(e));
                let n = !0;
                switch (e) {
                  case Yl.EnableSSO | Yl.VerifyDomain:
                    n = !0;
                    break;
                  case Yl.SSOConnector:
                    n = a([Yl.ClaimDomain, Yl.VerifyDomain]);
                    break;
                  case Yl.EnableSSO:
                    n = a([Yl.ClaimDomain, Yl.VerifyDomain, Yl.SSOConnector]);
                }
                return n && !t.has(e) ? new Set([...t, e]) : t;
              });
            }, []),
            _ = (0, n.useCallback)((e) => {
              s((t) => {
                const a = new Set(t);
                return (
                  e.forEach((e) => {
                    a.delete(e);
                  }),
                  a
                );
              });
            }, []),
            m = (0, C.ev)(e.globalState),
            { teamSettingsLoading: p, teamSettings: y, updateTeamSettings: h, planTier: b } = $c(m),
            x = [
              {
                label: t("team_settings_sso_connector_title"),
                component: lh,
                locked: l.has(Ql.SSOConnector),
                open: i.has(Ql.SSOConnector),
                index: 2
              },
              {
                label: t("team_settings_sso_identity_provider_title"),
                component: Vy,
                locked: l.has(Ql.ConfigureIDP),
                open: i.has(Ql.ConfigureIDP),
                index: 3
              },
              {
                label: t("team_settings_sso_enable_title"),
                component: qy,
                locked: l.has(Ql.EnableSSO),
                open: i.has(Ql.EnableSSO),
                index: 4
              }
            ];
          return n.createElement(
            xm,
            {
              secondaryContent: p
                ? n.createElement(oi.Z, { containerClassName: "loadingContainer--Qcn7EL4GD5", size: 40 })
                : n.createElement(
                    c.UQy,
                    { size: "large" },
                    x.map((e) =>
                      n.createElement(
                        c.UlM,
                        { open: e.open, key: e.label, readOnly: e.locked },
                        n.createElement(c._Oh, null, `${e.index}. ${e.label}`),
                        n.createElement(
                          c.rN7,
                          null,
                          n.createElement(
                            "fieldset",
                            { disabled: e.locked },
                            n.createElement(e.component, {
                              isTeamSettingsLoading: p,
                              teamSettings: y,
                              setStepComplete: u,
                              updateTeamSettings: h,
                              teamId: null != m ? m : null,
                              planTier: null != b ? b : null
                            })
                          )
                        )
                      )
                    )
                  ),
              title: t("team_settings_menu_title_single_sign_on")
            },
            (() => {
              if (!y || y.ssoEnabled) return null;
              if ("team" === b || "legacy" === b) {
                const e = t.markup("team_settings_sso_teamplan_infobox_warning_markup"),
                  a = t("team_settings_sso_teamplan_infobox_warning_button");
                return n.createElement(
                  "div",
                  { className: "infoBox--w1PtJInNuc" },
                  n.createElement(c.vDh, { title: e, size: "simple", secondaryLabel: a, secondary: () => (0, j.Yo)(ce.Bw) })
                );
              }
              return null;
            })(),
            n.createElement("p", { className: ym.settingsHeader }, t("team_settings_sso_title")),
            n.createElement(
              Kl,
              { label: t("team_settings_sso_guide_title"), labelHelper: t("team_settings_sso_guide_description") },
              n.createElement(vm.Z, {
                label: t("team_settings_sso_setup_button"),
                onClick: () => {
                  (0, j.Yo)(ce.nC);
                }
              })
            ),
            n.createElement(ic, {
              isTeamSettingsLoading: p,
              teamSettings: y,
              setStepComplete: u,
              uncompleteSteps: _,
              updateTeamSettings: h,
              teamId: m,
              planTier: b
            })
          );
        };
      var dh = a(818995);
      const uh = {
          title: "tac_settings_choose_sso_card_self_hosted_title",
          redirectUrl: "self-hosted-sso",
          supportedFeatures: [
            { title: "tac_settings_sso_self_hosted_card_zero_knowledge", description: "", isSupported: !0 },
            {
              title: "tac_settings_sso_self_hosted_card_simplified_setup",
              description: "tac_settings_sso_self_hosted_card_not_simplified_setup_description",
              isSupported: !1
            },
            { title: "tac_settings_sso_self_hosted_card_verified_domain", description: "", isSupported: !0 },
            { title: "tac_settings_sso_self_hosted_card_scim_support", description: "", isSupported: !0 }
          ]
        },
        _h = {
          title: "tac_settings_choose_sso_card_nitro_title",
          redirectUrl: "confidential-sso",
          supportedFeatures: [
            { title: "tac_settings_sso_self_hosted_card_zero_knowledge", description: "", isSupported: !0 },
            {
              title: "tac_settings_sso_self_hosted_card_simplified_setup",
              description: "tac_settings_sso_nitro_card_simplified_setup_description",
              isSupported: !0
            },
            { title: "tac_settings_sso_self_hosted_card_verified_domain", description: "", isSupported: !0 },
            { title: "tac_settings_sso_self_hosted_card_scim_support", description: "", isSupported: !0 }
          ]
        },
        mh = ({ backgroundColor: e, withBorder: t, paddingSize: a = "normal", ...n }) =>
          (0, B.tZ)("div", {
            sx: {
              bg: null != e ? e : "ds.container.agnostic.neutral.quiet",
              p: "tight" === a ? "24px" : "32px 24px",
              border: t ? "1px solid #8C8F9033" : void 0,
              borderRadius: 3,
              height: "fit-content"
            },
            ...n
          });
      var ph;
      const gh = () => {
          const [e, t] = (0, n.useState)(!1),
            [a, s] = (0, n.useState)(!1),
            { teamId: i } = (0, lr.fV)(),
            { clearSettings: o, initSsoProvisioning: r } = (0, $e.u)(rp.y);
          return n.createElement(
            c.T5p,
            {
              as: mh,
              backgroundColor: "ds.background.default",
              paddingSize: "normal",
              gridTemplateRows: "auto 1fr auto",
              justifyItems: "center"
            },
            n.createElement(
              l.nv,
              { color: "ds.text.neutral.standard", textStyle: "ds.body.standard.regular" },
              "Use this button to reset the SSO configuration in case of error"
            ),
            n.createElement(
              l.zx,
              {
                layout: "iconLeading",
                tooltip: "Reset SSO configuration",
                "aria-label": "Reset SSO Button",
                icon: "ActionRefreshOutlined",
                type: "button",
                isLoading: e,
                onClick: async () => {
                  try {
                    t(!0);
                    const e = await o();
                    (0, lp.d6)(e) && i && (await r({ teamId: i }));
                  } catch (e) {
                    console.error(e), s(!0);
                  } finally {
                    t(!1);
                  }
                }
              },
              "Reset"
            ),
            a
              ? ph ||
                  (ph = n.createElement(
                    l.nv,
                    { color: "ds.text.danger.standard", textStyle: "ds.body.standard.regular" },
                    "Reset has fail, please check the console"
                  ))
              : null
          );
        },
        yh = ({ title: e, description: t, isSupported: a, disabled: n = !1 }) => {
          const { translate: s } = (0, g.Z)();
          return (0, l.tZ)(
            c.Ejs,
            { flexDirection: "row", gap: "8px", flexWrap: "nowrap", alignItems: "flex-start" },
            (0, l.tZ)(
              "div",
              {
                sx: {
                  padding: "10px",
                  borderRadius: "12px",
                  background: a ? "ds.container.expressive.positive.quiet.disabled" : "ds.container.expressive.danger.quiet.disabled"
                }
              },
              (0, l.tZ)(l.JO, {
                name: a ? "FeedbackSuccessOutlined" : "FeedbackFailOutlined",
                color: n ? "ds.text.oddity.disabled" : a ? "ds.text.positive.quiet" : "ds.text.danger.quiet"
              })
            ),
            (0, l.tZ)(
              c.Ejs,
              { flexDirection: "column", gap: "4px" },
              (0, l.tZ)(
                l.nv,
                { textStyle: "ds.body.standard.regular", color: n ? "ds.text.oddity.disabled" : "ds.text.neutral.catchy" },
                s(e)
              ),
              t
                ? (0, l.tZ)(
                    l.nv,
                    { textStyle: "ds.body.helper.regular", color: n ? "ds.text.oddity.disabled" : "ds.text.neutral.quiet" },
                    s(t)
                  )
                : null
            )
          );
        },
        hh = ({
          title: e,
          redirectUrl: t,
          optionNumber: a,
          supportedFeatures: n,
          buttonLabel: s,
          onCtaClick: o,
          disabled: r = !1,
          selected: d = !1
        }) => {
          const { translate: u } = (0, g.Z)(),
            _ = (0, i.k6)(),
            m = `${(0, i.$B)().path}/${t}`;
          return (0, l.tZ)(
            c.Zbd,
            { sx: { padding: "24px", borderColor: d ? "ds.border.brand.standard.idle" : "ds.border.neutral.quiet.idle", width: "100%" } },
            (0, l.tZ)(
              c.T5p,
              { gridTemplateAreas: "'option badge' 'title title' 'body body' 'button button'" },
              (0, l.tZ)(
                c.dDn,
                { gridArea: "option", sx: { marginBottom: "8px" } },
                (0, l.tZ)(
                  l.nv,
                  { color: r ? "ds.text.oddity.disabled" : "ds.text.neutral.quiet", textStyle: "ds.body.helper.regular" },
                  `${u("tac_settings_directory_sync_card_option")} ${a}`
                )
              ),
              d
                ? (0, l.tZ)(
                    c.dDn,
                    { gridArea: "badge", justifySelf: "right" },
                    (0, l.tZ)(l.Ct, { mood: "positive", intensity: "catchy", label: u("tac_settings_directory_sync_card_badge_enabled") })
                  )
                : null,
              (0, l.tZ)(
                c.dDn,
                { gridArea: "title", sx: { marginBottom: "32px" } },
                (0, l.tZ)(
                  l.X6,
                  {
                    as: "h3",
                    textStyle: "ds.title.section.medium",
                    color: r ? "ds.text.oddity.disabled" : "ds.text.neutral.catchy",
                    sx: { display: "inline-block" }
                  },
                  u(e)
                )
              ),
              (0, l.tZ)(
                c.dDn,
                { gridArea: "body" },
                (0, l.tZ)(
                  c.Ejs,
                  { gap: "32px", flexDirection: "column", sx: { marginBottom: "32px" } },
                  n.map((e) => (0, l.tZ)(yh, { key: a + e.title, disabled: r, ...e }))
                )
              ),
              (0, l.tZ)(
                c.dDn,
                { gridArea: "button", justifySelf: "right" },
                (0, l.tZ)(
                  l.zx,
                  {
                    onClick: () => {
                      o?.(), _.push(m);
                    },
                    disabled: r,
                    intensity: "catchy"
                  },
                  s
                )
              )
            )
          );
        };
      var bh, xh, Sh;
      const vh = () => {
          const e = (0, m.s)(),
            t = (0, Ce.o)("setup_rollout_reset_confidential_button"),
            a = (0, d.k)(rp.y, "ssoProvisioning"),
            s = (0, d.k)(dh.m, "scimConfiguration");
          if (
            ((0, n.useEffect)(() => {
              (0, P.Nc)(o.Page.TacSso);
            }, []),
            a.status !== se.rq.Success || s.status !== se.rq.Success || !e)
          )
            return null;
          const { inferredSsoState: i, ssoCapable: r } = a.data.global,
            u = !r || i === pp.s5.enum.Unknown,
            _ = i === pp.s5.enum.SelfHostedIncomplete || i === pp.s5.enum.SelfHostedComplete,
            p = i === pp.s5.enum.NitroIncomplete || i === pp.s5.enum.NitroComplete;
          return (0, l.tZ)(
            c.T5p,
            { gap: "16px", alignContent: "start", sx: { px: "48px", pt: "32px", pb: "12px" } },
            (0, l.tZ)(
              c.T5p,
              { fullWidth: !0, gap: "24px", gridTemplateColumns: "1fr 1fr" },
              (0, l.tZ)(hh, {
                selected: p,
                optionNumber: 1,
                ..._h,
                buttonLabel: p
                  ? (0, Bc.Iu)("tac_settings_choose_sso_confidential_card_button_edit")
                  : (0, Bc.Iu)("tac_settings_choose_sso_confidential_card_button_setup"),
                disabled: u || i === pp.s5.enum.NitroComplete || !!s.data.token,
                onCtaClick: () => {
                  _p({ currentBillingPlanTier: e.spaceTier, ssoSetupStep: o.SsoSetupStep.ChooseYourSsoSolution });
                }
              }),
              (0, l.tZ)(hh, {
                optionNumber: 2,
                ...uh,
                selected: _,
                buttonLabel: _
                  ? (0, Bc.Iu)("tac_settings_choose_sso_self_hosted_card_button_edit")
                  : (0, Bc.Iu)("tac_settings_choose_sso_self_hosted_card_button_setup"),
                disabled: u || i === pp.s5.enum.SelfHostedComplete,
                onCtaClick: () => {
                  mp({ currentBillingPlanTier: e.spaceTier, ssoSetupStep: o.SsoSetupStep.ChooseYourSsoSolution });
                }
              })
            ),
            t ? bh || (bh = (0, l.tZ)(gh, null)) : null
          );
        },
        fh = () =>
          (0, l.tZ)(
            c.T5p,
            { gridTemplateColumns: "auto", gridTemplateRows: "auto 1fr", fullWidth: !0, sx: { height: "100%" } },
            (0, l.tZ)(
              c.T5p,
              { sx: { px: "48px", pt: "32px", pb: "12px" } },
              (0, l.tZ)(Gi, { title: "Choose your single sign-on (SSO) configuration" }),
              (0, l.tZ)(l.nv, { textStyle: "ds.body.standard.regular" }, (0, Bc.Iu)("choose_sso_screen_paragraph_sso_description")),
              (0, l.tZ)(
                "div",
                { sx: { display: "flex", alignItems: "center" } },
                (0, l.tZ)(
                  l.nv,
                  {
                    as: "a",
                    href: "https://support.dashlane.com/hc/en-us/articles/360013149040",
                    textStyle: "ds.body.standard.regular",
                    color: "ds.text.brand.quiet",
                    sx: { padding: "5px 5px 5px 0px", gap: "4px" }
                  },
                  " ",
                  (0, Bc.Iu)("choose_sso_screen_link_lean_more")
                ),
                xh || (xh = (0, l.tZ)(l.JO, { name: "ActionOpenExternalLinkOutlined", size: "small", color: "ds.text.brand.quiet" }))
              )
            ),
            Sh || (Sh = (0, l.tZ)(vh, null))
          ),
        Ch = (e) => {
          const { translate: t } = (0, g.Z)();
          return (0, l.tZ)(Bl, {
            supportHeading: t("team_settings_contact_us_support_header"),
            heading: t("team_settings_contact_us_heading"),
            description: t("team_settings_contact_us_description"),
            linkText: t("team_settings_contact_us_link_title"),
            linkProps: { linkType: Ul.InternalLink, internalAction: e }
          });
        };
      var Zh = a(385993);
      const Eh = { ITEM: { display: "flex", flexDirection: "row", alignItems: "flex-start", gap: "16px" } },
        Dh = ({ iconName: e, title: t, subtitle: a }) => {
          const { translate: n } = (0, g.Z)();
          return (0, l.tZ)(
            "div",
            { sx: Eh.ITEM },
            (0, l.tZ)(l.JO, { name: e, size: "xlarge" }),
            (0, l.tZ)(
              "div",
              null,
              (0, l.tZ)(l.nv, { textStyle: "ds.title.block.medium", sx: { marginBottom: "5px" } }, n(t)),
              (0, l.tZ)(l.nv, { textStyle: "ds.body.reduced.regular", color: "ds.text.neutral.quiet" }, n(a))
            )
          );
        };
      var Th;
      const Nh = {
          WHATS_SSO: { i18nKey: "team_settings_sso_paywall_whats_sso", url: ce.Tz },
          ZERO_KNOWLEDGE: { i18nKey: "team_settings_sso_paywall_zero_knowledge", url: ce.mn },
          MULTI_DOMAINS: { i18nKey: "team_settings_sso_paywall_multi_domains", url: ce.I9 },
          SELF_HOSTED: { i18nKey: "team_settings_sso_paywall_self_hosted", url: ce.bx },
          CONFIDENTIAL_SSO: { i18nKey: "team_settings_sso_paywall_confidential_sso", url: ce.Fn },
          IDENTITY_PROVIDER: { i18nKey: "team_settings_sso_paywall_identity_provider", url: ce.HX },
          HELP_CENTER: { i18nKey: "team_settings_sso_paywall_helper_center", url: ce.Tx }
        },
        Mh = {
          CONTAINER: {
            borderRadius: "8px",
            border: "1px solid ds.border.neutral.quiet.idle",
            padding: "32px",
            backgroundColor: "ds.background.default",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start"
          },
          HEADER: { display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "8px", alignSelf: "stretch" },
          ITEMS: { display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "32px", alignSelf: "stretch" },
          ACTIONS: { display: "flex", justifyContent: "space-between", alignItems: "center", alignSelf: "stretch" }
        },
        Ih = ({ isTrialOrGracePeriod: e }) => {
          const [t, a] = (0, n.useState)(!1);
          (0, n.useEffect)(() => {
            (0, P.Nc)(o.PageView.TacSsoPaywall);
          }, []);
          const s = () => a(!0);
          return (0, l.tZ)(
            n.Fragment,
            null,
            (0, l.tZ)(c_, {
              mainContent: c.T5p,
              mainProps: {
                gridTemplateColumns: "auto",
                gridAutoRows: "min-content",
                gap: "32px",
                children: () =>
                  ((e) => {
                    const { translate: t } = (0, g.Z)(),
                      { routes: a } = (0, i.Xo)(),
                      n = (0, L.B)();
                    return (0, l.tZ)(
                      c.T5p,
                      { gap: "32px", alignContent: "start", sx: Mh.CONTAINER },
                      (0, l.tZ)(
                        "div",
                        { sx: Mh.HEADER },
                        (0, l.tZ)(l.Ct, {
                          iconName: "PremiumOutlined",
                          layout: "iconLeading",
                          label: t("team_settings_sso_paywall_business_badge"),
                          mood: "brand",
                          intensity: "quiet"
                        }),
                        (0, l.tZ)(l.nv, { textStyle: "ds.title.section.large" }, t("team_settings_sso_paywall_title")),
                        (0, l.tZ)(
                          l.nv,
                          { textStyle: "ds.body.standard.regular", color: "ds.text.neutral.quiet" },
                          t("team_settings_sso_paywall_description")
                        )
                      ),
                      (0, l.tZ)(
                        "div",
                        { sx: Mh.ITEMS },
                        (0, l.tZ)(Dh, {
                          iconName: "ProtectionOutlined",
                          title: "team_settings_sso_paywall_user_experience_item",
                          subtitle: "team_settings_sso_paywall_user_experience_description"
                        }),
                        (0, l.tZ)(Dh, {
                          iconName: "FeatureDarkWebMonitoringOutlined",
                          title: "team_settings_sso_paywall_transparency_item",
                          subtitle: "team_settings_sso_paywall_transparency_description"
                        }),
                        (0, l.tZ)(Dh, {
                          iconName: "AccountSettingsOutlined",
                          title: "team_settings_sso_paywall_access_item",
                          subtitle: "team_settings_sso_paywall_access_description"
                        }),
                        (0, l.tZ)(Dh, {
                          iconName: "ToolsOutlined",
                          title: "team_settings_sso_paywall_confidential_sso_item",
                          subtitle: "team_settings_sso_paywall_confidential_sso_description"
                        })
                      ),
                      (0, l.tZ)(
                        "div",
                        { sx: Mh.ACTIONS },
                        Th || (Th = (0, l.tZ)(Zh.a, { dropdownItems: Nh, titleKey: "team_settings_sso_paywall_learn_more" })),
                        (0, l.tZ)(
                          l.zx,
                          {
                            mood: "brand",
                            intensity: "catchy",
                            icon: "PremiumOutlined",
                            layout: "iconLeading",
                            role: e ? "link" : void 0,
                            onClick: () => {
                              var t;
                              (0, P.Kz)(
                                new o.UserClickEvent({ button: o.Button.UpgradeBusinessTier, clickOrigin: o.ClickOrigin.SsoPaywallPage })
                              ),
                                e
                                  ? (0, j.Yo)(
                                      `${ce.ub}?plan=business&subCode=${
                                        null != (t = n?.subscriptionCode) ? t : ""
                                      }&utm_source=button:upgrade_business_tier+click_origin:sso_paywall_page+origin_page:tac/sso/paywall+origin_component:main_app`
                                    )
                                  : (0, i.uX)(`${a.teamAccountChangePlanRoutePath}?plan=business`);
                            }
                          },
                          t("team_settings_sso_paywall_upgrade_business")
                        )
                      )
                    );
                  })(e)
              },
              secondaryContent: () => Ch(s)
            }),
            t ? (0, l.tZ)(be, { onDismiss: () => a(!1) }) : null
          );
        },
        wh = {
          CouldNotGetTeamStatus: "COULD_NOT_GET_TEAM_STATUS",
          TeamIdNotFound: "TEAM_ID_NOT_FOUND",
          UserNotAuthorized: "USER_NOT_AUTHORIZED",
          InvalidSsoState: "INVALID_SSO_STATE",
          GenericSsoError: "GENERIC_SSO_ERROR"
        },
        kh = {
          ERROR_HEADER: "team_settings_sso_error_header",
          RETRY: "team_settings_sso_error_button_retry",
          RESET: "team_settings_sso_error_button_reset",
          RETRY_MODAL_TITLE: "team_settings_sso_error_retry_modal_title",
          RETRY_MODAL_BODY: "team_settings_sso_error_retry_modal_body",
          RETRY_MODAL_CANCEL: "team_settings_sso_error_retry_modal_button_cancel",
          RETRY_MODAL_CONFIRM: "team_settings_sso_error_retry_modal_button_confirm",
          COULD_NOT_GET_TEAM_STATUS: "team_settings_sso_error_message_team_status",
          TEAM_ID_NOT_FOUND: "team_settings_sso_error_message_team_id",
          USER_NOT_AUTHORIZED: "team_settings_sso_error_message_not_authorized",
          INVALID_SSO_STATE: "team_settings_sso_error_message_invalid_sso_state",
          GENERIC_SSO_ERROR: "team_settings_sso_error_message_generic"
        },
        Ah = ({ onReloadData: e, errorTag: t }) => {
          const { translate: a } = (0, g.Z)(),
            { clearSettings: s } = (0, $e.u)(rp.y),
            i = (0, Ce.o)("setup_rollout_reset_confidential_button"),
            [o, r] = (0, n.useState)(!1),
            [d, u] = (0, n.useState)(!1);
          return (0, B.tZ)(
            c.Ejs,
            { alignItems: "center", justifyContent: "center", fullWidth: !0, gap: "40px", sx: { mt: "20vh", flexDirection: "column" } },
            (0, B.tZ)(l.JO, { name: "FeedbackFailOutlined", color: "ds.text.danger.quiet", sx: { height: "64px", width: "64px" } }),
            (0, B.tZ)(
              c.Ejs,
              { alignItems: "center", flexDirection: "column", gap: "8px" },
              (0, B.tZ)(l.X6, { textStyle: "ds.title.section.large", as: "h1" }, a(kh.ERROR_HEADER)),
              (0, B.tZ)(l.nv, null, a(kh[wh[t]]))
            ),
            (0, B.tZ)(
              c.Ejs,
              { gap: "16px" },
              i
                ? (0, B.tZ)(
                    n.Fragment,
                    null,
                    (0, B.tZ)(l.zx, { mood: "neutral", intensity: "quiet", onClick: () => r(!0), isLoading: d }, a(kh.RESET)),
                    (0, B.tZ)(
                      l.Vq,
                      {
                        actions: {
                          primary: {
                            children: a(kh.RETRY_MODAL_CONFIRM),
                            onClick: async () => {
                              r(!1), u(!0), await s(), e();
                            }
                          },
                          secondary: { children: a(kh.RETRY_MODAL_CANCEL), onClick: () => r(!1) }
                        },
                        closeActionLabel: "Close",
                        onClose: () => r(!1),
                        title: a(kh.RETRY_MODAL_TITLE),
                        isOpen: o,
                        isDestructive: !0
                      },
                      (0, B.tZ)(l.nv, null, a(kh.RETRY_MODAL_BODY))
                    )
                  )
                : null,
              (0, B.tZ)(l.zx, { mood: "brand", intensity: "catchy", onClick: e, disabled: d }, a(kh.RETRY))
            )
          );
        };
      var Oh, Lh;
      const zh = "/paywall",
        jh = () => (0, B.tZ)(c.T5p, { justifyItems: "center" }, (0, B.tZ)(l.ZX, { size: 75, sx: { marginTop: "20vh" } }));
      var Rh = a(758480);
      const Ph = ({ accountInfo: e }) => {
        const { translate: t } = (0, g.Z)(),
          { routes: a } = (0, i.Xo)();
        return e?.premiumStatus
          ? (0, l.tZ)(l.ke, {
              title: t("team_settings_active_directory_paywall_title"),
              description: t("team_settings_active_directory_paywall_description"),
              actions: [
                (0, O.wt)(e.premiumStatus)
                  ? (0, l.tZ)(
                      l.zx,
                      {
                        key: "buy",
                        onClick: () => {
                          (0, j.Yo)(`${ce.ub}?plan=business&subCode=${e?.subscriptionCode}`);
                        }
                      },
                      t("team_settings_active_directory_paywall_buy")
                    )
                  : (0, l.tZ)(
                      i.rU,
                      { key: "upgrade", to: `${a.teamAccountChangePlanRoutePath}?plan=business` },
                      (0, l.tZ)(l.zx, null, t("team_settings_active_directory_paywall_upgrade"))
                    )
              ],
              size: "large",
              sx: { marginBottom: "32px" }
            })
          : null;
      };
      var Uh, Bh;
      const Gh = "_common_generic_error",
        Fh = ({
          lee: e,
          teamSettings: t,
          teamSettingsLoading: a,
          updateTeamSettings: s,
          disableForm: i,
          adSyncEnabled: r,
          isAdSyncCapable: d,
          accountInfo: u
        }) => {
          const { translate: _ } = (0, g.Z)(),
            { reportTACError: m } = H(),
            {
              lastADSyncDateError: p,
              lastADSyncDateLoading: y,
              lastADSyncDate: h
            } = (function () {
              const [e, t] = (0, n.useState)(!1),
                [a, s] = (0, n.useState)(),
                [i, o] = (0, n.useState)(null),
                r = (0, n.useCallback)(async (e) => {
                  try {
                    e.signal.aborted || t(!0);
                    const a = await (async function () {
                      const e = await ca.C.getLastADSyncDate();
                      if (e.success)
                        return {
                          lastSyncRequestForTeamUnix: e.data.lastSyncRequestForTeam,
                          lastSuccessfulSyncRequestForTeamUnix: e.data.lastSuccessfulSyncRequestForTeam
                        };
                      throw new Error(`getScimLastSyncDate: failed with error ${e.error}`);
                    })();
                    e.signal.aborted || (s(a), t(!1), o(null));
                  } catch (a) {
                    e.signal.aborted || (t(!1), o(a));
                  }
                }, []);
              return (
                (0, n.useEffect)(() => {
                  const e = new AbortController();
                  return (
                    r(e),
                    () => {
                      e.abort();
                    }
                  );
                }, [r]),
                { lastADSyncDateLoading: e, lastADSyncDate: a, lastADSyncDateError: i }
              );
            })(),
            b = _.shortDate,
            [x, S] = (0, n.useState)(!0),
            [v, f] = (0, n.useState)(!1),
            [C, Z] = (0, n.useState)(!1),
            [E, D] = (0, n.useState)(!1),
            [T, N] = (0, n.useState)(!1),
            { inviteLinkDataForAdmin: M, getInviteLinkDataForAdmin: I } = (0, rd.h)(),
            [w, k] = (0, n.useState)(!1),
            { teamId: A } = (0, lr.fV)(),
            O = (0, n.useCallback)(
              () =>
                e.apiMiddleware.teamPlans
                  ? e.apiMiddleware.teamPlans
                  : (m(new Error("teamPlans service missing from apiMiddleware")), null),
              []
            );
          (0, n.useEffect)(() => {
            (0, P.Nc)(o.PageView.TacSettingsDirectorySyncActiveDirectory);
          }, []),
            (0, n.useEffect)(() => {
              I();
            }, [I]),
            (0, n.useEffect)(() => {
              a ||
                (async () => {
                  let a = t.activeDirectoryToken,
                    n = t.activeDirectorySyncStatus;
                  if (!a) {
                    const e = await O();
                    if (!e) return;
                    const { activeDirectorySyncStatus: t, activeDirectoryToken: s } = e.getADToken();
                    (a = s), (n = t);
                  }
                  const { activeDirectorySyncType: s } = t;
                  try {
                    const t = { activeDirectorySyncStatus: n, activeDirectorySyncType: s, activeDirectoryToken: a, teamId: A };
                    e.dispatch(Rh.vo(t)),
                      Z(["full", "deprovision-only"].includes(null != s ? s : "")),
                      N(["full", "provision-only"].includes(null != s ? s : "")),
                      S(!1);
                  } catch (e) {
                    console.error(`ActiveDirectorySettings - fetchData: failed with error: ${e}`);
                  }
                })();
            }, [b, a]);
          const L = (e, t) => (e ? (t ? "full" : "provision-only") : t ? "deprovision-only" : null),
            z = (0, ce.cI)(M?.teamKey);
          return (0, l.tZ)(
            tg,
            { title: "Active Directory" },
            (0, l.tZ)(zu, { showSharingDialog: w, setShowSharingDialog: k }),
            (0, l.tZ)(
              c.T5p,
              {
                gap: "10px",
                gridTemplateAreas: "'mainContent secondaryContent'",
                gridTemplateColumns: "auto 1fr",
                alignContent: "flex-start"
              },
              (0, l.tZ)(
                c.dDn,
                { gridArea: "mainContent" },
                (0, l.tZ)(
                  xm,
                  null,
                  d ? null : (0, l.tZ)(Ph, { accountInfo: u }),
                  (0, l.tZ)(
                    l.nv,
                    { sx: { marginTop: i ? "32px" : void 0 }, color: "ds.text.neutral.quiet", textStyle: "ds.body.standard.strong" },
                    _("team_settings_active_directory_title_help")
                  ),
                  (0, l.tZ)(
                    Kl,
                    {
                      label: _("team_settings_active_directory_header_label"),
                      labelHelper: _("team_settings_active_directory_header_helper")
                    },
                    (0, l.tZ)(
                      "div",
                      null,
                      (0, l.tZ)(vm.Z, {
                        label: _("team_settings_active_directory_header_button_label"),
                        onClick: () => {
                          window.open("https://support.dashlane.com/hc/articles/115002155485", "_blank");
                        }
                      })
                    )
                  ),
                  (0, l.tZ)(
                    l.nv,
                    { color: "ds.text.neutral.quiet", textStyle: "ds.body.standard.strong" },
                    _("team_settings_active_directory_title_status")
                  ),
                  (0, l.tZ)(
                    Kl,
                    { label: _("team_settings_active_directory_last_successful_sync_date_label") },
                    y
                      ? Uh || (Uh = (0, l.tZ)(c.HoD, { color: "ds.oddity.focus", size: "20px" }))
                      : p
                      ? `${_("_common_generic_error")} ${p.message.toLowerCase()}`
                      : h?.lastSuccessfulSyncRequestForTeamUnix
                      ? b((0, oa.Z)(h.lastSuccessfulSyncRequestForTeamUnix), pa._T.lll)
                      : _("team_settings_active_directory_last_successful_sync_date_value_never")
                  ),
                  (() => {
                    const { activeDirectorySyncStatus: t } = e.state;
                    return t?.failedSyncCount
                      ? (0, l.tZ)(
                          n.Fragment,
                          null,
                          (0, l.tZ)(
                            Kl,
                            { label: _("team_settings_active_directory_last_error_message_label") },
                            (0, l.tZ)("span", { sx: { color: "ds.text.danger.standard" } }, t.lastFailedSync?.error)
                          ),
                          (0, l.tZ)(
                            Kl,
                            { label: _("team_settings_active_directory_last_error_date_label") },
                            (0, l.tZ)(
                              "span",
                              { sx: { color: "ds.text.danger.standard" } },
                              t?.lastFailedSync ? b((0, oa.Z)(t.lastFailedSync.eventDateUnix), pa._T.lll) : null
                            )
                          ),
                          (0, l.tZ)(
                            Kl,
                            { label: _("team_settings_active_directory_fail_count_label") },
                            (0, l.tZ)(
                              "span",
                              { sx: { color: "ds.text.danger.standard" } },
                              e.state.activeDirectorySyncStatus.failedSyncCount
                            )
                          )
                        )
                      : null;
                  })(),
                  (0, l.tZ)(
                    l.nv,
                    { color: "ds.text.neutral.quiet", textStyle: "ds.body.standard.strong" },
                    _("team_settings_active_directory_title_setup")
                  ),
                  (0, l.tZ)(
                    Kl,
                    {
                      label: _("team_settings_active_directory_automated_provisioning_label"),
                      labelHelper: _("team_settings_active_directory_automated_provisioning_helper")
                    },
                    (0, l.tZ)(Sm.Z, {
                      genericErrorMessage: _(Gh),
                      isDisabled: x || E || i,
                      saveValueFunction: async () => {
                        if (E) return Promise.resolve();
                        D(!0);
                        const t = !T,
                          a = L(t, C);
                        try {
                          await s({ activeDirectorySyncType: a }), e.dispatch(Rh.dV(a)), N(t), D(!1);
                        } catch (e) {
                          m(e);
                        }
                      },
                      value: T
                    })
                  ),
                  (0, l.tZ)(
                    Kl,
                    {
                      label: _("team_settings_active_directory_automated_deprovisioning_label"),
                      labelHelper: _("team_settings_active_directory_automated_deprovisioning_helper")
                    },
                    (0, l.tZ)(Sm.Z, {
                      genericErrorMessage: _(Gh),
                      isDisabled: x || v || i,
                      saveValueFunction: async () => {
                        if (v) return Promise.resolve();
                        f(!0);
                        const t = !C,
                          a = L(T, t);
                        try {
                          await s({ activeDirectorySyncType: a }), e.dispatch(Rh.dV(a)), Z(t), f(!1);
                        } catch (e) {
                          m(e);
                        }
                      },
                      value: C
                    })
                  ),
                  (0, l.tZ)(
                    Kl,
                    {
                      label: _("team_settings_active_directory_cron_script_label"),
                      labelHelper: _("team_settings_active_directory_cron_script_helper")
                    },
                    (0, l.tZ)(wd.n, {
                      defaultValue: e.state.activeDirectoryScript,
                      isDisabled: !0,
                      multiLine: !0,
                      style: {
                        backgroundColor: "ds.container.expressive.neutral.quiet.active",
                        fontSize: "12px",
                        height: "180px",
                        width: "300px"
                      }
                    }),
                    (0, l.tZ)(
                      "div",
                      null,
                      (0, l.tZ)(Md.Z, {
                        label: e.state.isCopied
                          ? _("team_settings_active_directory_button_copy_feedback")
                          : _("team_settings_active_directory_button_copy_label"),
                        onClick: () => {
                          navigator.clipboard.writeText(e.state.activeDirectoryScript).then(() => {
                            e.dispatch(Rh.Kk(!0)), window.setTimeout(() => e.dispatch(Rh.Kk(!1)), 700);
                          });
                        }
                      })
                    )
                  )
                )
              ),
              r
                ? (0, l.tZ)(
                    c.dDn,
                    { gridArea: "secondaryContent", sx: { maxWidth: "500px", minWidth: "250px" }, alignSelf: "flex-start" },
                    (0, l.tZ)(Bl, {
                      linkProps: { linkType: Ul.ExternalLink },
                      heading: _("team_settings_encryption_service_scim_invite_link_heading"),
                      description: (0, l.tZ)(
                        "div",
                        null,
                        (0, l.tZ)(l.nv, { sx: { mb: "8px" } }, _("team_settings_encryption_service_scim_invite_link_description_first")),
                        (0, l.tZ)(
                          l.nv,
                          {
                            as: "a",
                            onClick: (e) => {
                              e.preventDefault(), navigator.clipboard.writeText(z), k(!0);
                            },
                            sx: { display: "flex", gap: "4px" },
                            href: "_blank"
                          },
                          _("team_settings_encryption_service_scim_invite_link_copy"),
                          Bh || (Bh = (0, l.tZ)(l.JO, { color: "ds.text.brand.standard", name: "ActionCopyOutlined", size: "medium" }))
                        )
                      )
                    })
                  )
                : null
            )
          );
        };
      var qh, $h;
      const Vh = {
          CONTAINER: {
            borderRadius: "8px",
            padding: "24px",
            border: "1px solid ds.border.neutral.quiet.idle",
            background: "ds.container.agnostic.neutral.supershy",
            "& h1": { margin: "8px 0px" }
          },
          MAIN_TITLE: {
            margin: "8px 0px",
            fontFamily: "Public Sans",
            fontSize: "22px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "28px"
          },
          CONTENT_CARD: { margin: "32px 0px", display: "flex", flexDirection: "row", gap: "16px" },
          CONTENT_CARD_FEATURE_TITLE: {
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "20px",
            color: "ds.text.neutral.catchy"
          },
          CONTENT_CARD_FEATURE_DESC: {
            color: "ds.text.neutral.quiet",
            fontSize: "13px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "18px",
            maxWidth: "600px"
          },
          BUTTONS: { display: "flex", justifyContent: "space-between" }
        },
        Wh = {
          LINK_ZEROKNOWLEDGE: { i18nKey: "team_settings_directory_sync_scim_paywall_link_zeroknowledge", url: ce.mn },
          LINK_MULTIPLEDOMAINS: { i18nKey: "team_settings_directory_sync_scim_paywall_link_multiple_domains", url: ce.I9 },
          LINK_SELFHOSTED: { i18nKey: "team_settings_directory_sync_scim_paywall_link_self_hosted", url: ce.uR },
          LINK_CONFIDENTIAL: { i18nKey: "team_settings_directory_sync_scim_paywall_link_confidential", url: ce.FP },
          LINK_IDP_INTEGRATION: { i18nKey: "team_settings_directory_sync_scim_paywall_link_idp", url: ce.uC },
          LINK_ADMIN_HC: { i18nKey: "team_settings_directory_sync_scim_paywall_link_help_center", url: ce.Tx }
        },
        Hh = ({ isTrialOrGracePeriod: e }) => {
          const { translate: t } = (0, g.Z)(),
            { routes: a } = (0, i.Xo)(),
            s = (0, L.B)();
          return (
            (0, n.useEffect)(() => {
              (0, P.Nc)(o.PageView.TacSettingsDirectorySyncPaywall);
            }, []),
            (0, l.tZ)(
              "div",
              { sx: Vh.CONTAINER },
              (0, l.tZ)(l.Ct, {
                iconName: "PremiumOutlined",
                label: t("team_settings_directory_sync_scim_paywall_business_badge"),
                layout: "iconLeading",
                intensity: "quiet",
                mood: "brand",
                sx: { height: "16px" }
              }),
              (0, l.tZ)("h2", { sx: Vh.MAIN_TITLE }, t("team_settings_directory_sync_scim_paywall_title")),
              (0, l.tZ)(
                l.nv,
                { color: "ds.text.neutral.quiet", textStyle: "ds.body.standard.regular" },
                t("team_settings_directory_sync_scim_paywall_description")
              ),
              (0, l.tZ)(
                "div",
                { sx: Vh.CONTENT_CARD },
                qh || (qh = (0, l.tZ)(l.JO, { name: "ToolsOutlined", size: "xlarge", tooltip: "bli" })),
                (0, l.tZ)(
                  "div",
                  null,
                  (0, l.tZ)(
                    "span",
                    { sx: Vh.CONTENT_CARD_FEATURE_TITLE },
                    t("team_settings_directory_sync_scim_paywall_feature_selfhosted_title")
                  ),
                  (0, l.tZ)(
                    l.nv,
                    { sx: Vh.CONTENT_CARD_FEATURE_DESC },
                    t("team_settings_directory_sync_scim_paywall_feature_selfhosted_desc")
                  )
                )
              ),
              (0, l.tZ)(
                "div",
                { sx: Vh.CONTENT_CARD },
                $h || ($h = (0, l.tZ)(l.JO, { name: "ToolsOutlined", size: "xlarge", tooltip: "bli" })),
                (0, l.tZ)(
                  "div",
                  null,
                  (0, l.tZ)(
                    "div",
                    { sx: { display: "flex", gap: "5px" } },
                    (0, l.tZ)(
                      "span",
                      { sx: Vh.CONTENT_CARD_FEATURE_TITLE },
                      t("team_settings_directory_sync_scim_paywall_feature_confidential_title")
                    )
                  ),
                  (0, l.tZ)(
                    l.nv,
                    { sx: Vh.CONTENT_CARD_FEATURE_DESC },
                    t("team_settings_directory_sync_scim_paywall_feature_confidential_desc")
                  )
                )
              ),
              (0, l.tZ)(
                "div",
                { sx: Vh.BUTTONS },
                (0, l.tZ)(Zh.a, { dropdownItems: Wh, titleKey: "team_settings_directory_sync_scim_paywall_dropdown_learn_more" }),
                (0, l.tZ)(
                  l.zx,
                  {
                    layout: "iconLeading",
                    icon: "PremiumOutlined",
                    mood: "brand",
                    intensity: "quiet",
                    onClick: () => {
                      (0, P.Kz)(
                        new o.UserClickEvent({ button: o.Button.UpgradeBusinessTier, clickOrigin: o.ClickOrigin.DirectorySyncPaywallPage })
                      ),
                        e
                          ? (0, j.Yo)(
                              `${ce.ub}?plan=business&subCode=${s?.subscriptionCode}&utm_source=button:upgrade_business_tier+click_origin:directory_sync_paywall_page+origin_page:tac/settings/directory_sync/paywall+origin_component:main_app`
                            )
                          : (0, i.uX)(`${a.teamAccountChangePlanRoutePath}?plan=business`);
                    },
                    role: e ? "link" : "button"
                  },
                  t("team_settings_directory_sync_scim_paywall_upgrade_business")
                )
              )
            )
          );
        },
        Kh = "SCIM provisioning is not currently supported by Confidential SSO",
        Yh =
          "If you plan to set up both SCIM and single sign-on (SSO), you'll need to use the self-hosted option. Both SCIM and self-hosted SSO require the encryption service you configure and host yourself on AWS or Azure.",
        Qh = "Learn more",
        Xh = ({ isScimEnabled: e, isSCIMCapable: t, isTrialOrGracePeriod: a, onSetupClear: s, showPaywall: i }) => {
          const [o, r] = (0, n.useState)(!1),
            { teamId: u } = (0, lr.fV)(),
            { clearSettings: _, initSsoProvisioning: m } = (0, $e.u)(rp.y),
            { data: p, status: g } = (0, d.k)(rp.y, "ssoProvisioning");
          if (g !== se.rq.Success) return null;
          const {
            global: { inferredSsoState: y }
          } = p;
          if (y === pp.s5.enum.NitroComplete)
            throw new Error("Invalid state: cannot access SCIM if the team is using Confidential SSO until the enclave supports SCIM.");
          if (!1 === t && i && void 0 !== a) return (0, l.tZ)(Hh, { isTrialOrGracePeriod: a });
          if (y === pp.s5.enum.NitroIncomplete && !i) {
            const e = async () => {
              await _(), await m({ teamId: `${u}` }), await s?.();
            };
            return (0, l.tZ)(
              n.Fragment,
              null,
              o
                ? (0, l.tZ)(xp, {
                    onClose: () => r(!1),
                    onConfirm: e,
                    titleText: "Are you sure?",
                    bodyText: "This action can’t be undone."
                  })
                : null,
              (0, l.tZ)(l.ke, {
                mood: "neutral",
                size: "large",
                title: "To use SCIM, clear Confidential SSO setup",
                description: (0, l.tZ)(bp, {
                  markdownValue:
                    "If you want to use SCIM, select **Clear setup** to erase your progress in Dashlane. Make sure to also delete your progress in your IdP."
                }),
                actions: [(0, l.tZ)(l.zx, { key: "clear", onClick: () => r(!0) }, "Clear setup")]
              })
            );
          }
          return y === pp.s5.enum.SelfHostedComplete || !1 !== e || i
            ? null
            : (0, l.tZ)(l.ke, {
                mood: "neutral",
                size: "large",
                title: Kh,
                description: Yh,
                actions: [
                  (0, l.tZ)(
                    c.rUS,
                    { key: "learn-more", href: ce.B7, target: "_blank", rel: "noopener noreferrer" },
                    (0, l.tZ)(l.zx, { onClick: () => {} }, Qh)
                  )
                ]
              });
        };
      var Jh;
      const eb = ({ lastSyncUnix: e, version: t, loading: a, refreshData: n }) => {
          const { translate: s } = (0, g.Z)();
          return (0, l.tZ)(
            Gg.R,
            null,
            a
              ? Jh || (Jh = (0, l.tZ)(l.ZX, null))
              : (0, l.tZ)(
                  c.Ejs,
                  { flexDirection: "column", gap: "5px" },
                  (0, l.tZ)(
                    c.k$b,
                    { as: l.nv, textStyle: "ds.body.reduced.regular", color: "ds.text.neutral.standard" },
                    `${s("team_settings_directory_sync_last_sync")} ${
                      e
                        ? (0, oa.Z)(e).toLocaleString(navigator.language, { ...pa.qG.lll, timeZoneName: "short" })
                        : s("team_settings_directory_sync_not_available")
                    }`
                  ),
                  (0, l.tZ)(
                    c.k$b,
                    { as: l.nv, textStyle: "ds.body.reduced.regular", color: "ds.text.neutral.standard" },
                    `${s("team_settings_encryption_service_version")} ${
                      null != t ? t : s("team_settings_encryption_service_not_available")
                    }`
                  ),
                  (0, l.tZ)(
                    c.k$b,
                    {
                      as: l.nv,
                      innerAs: "a",
                      color: "ds.text.brand.standard",
                      sx: { textDecoration: "none", fontWeight: "normal", display: "flex", flexDirection: "row" },
                      onClick: () => n()
                    },
                    (0, l.tZ)(l.JO, {
                      name: "ActionRefreshOutlined",
                      sx: { marginRight: "5px" },
                      color: "ds.text.brand.standard",
                      size: "xsmall"
                    }),
                    s("team_settings_scim_sync_refresh")
                  )
                )
          );
        },
        tb = ({ loading: e, parentPath: t, teamSettings: a, esConfig: n, isScimCapable: s, disableSetupButton: o }) => {
          const r = (0, i.k6)(),
            { translate: d } = (0, g.Z)(),
            { teamDeviceConfigLoading: u, teamDeviceConfig: _ } = cy({ draft: !1, deviceAccessKey: n?.deviceAccessKey }),
            { teamDeviceLoading: m, teamDevice: p, refreshTeamDevice: y } = xg(n?.deviceAccessKey),
            h = e || u,
            b = !a?.ssoServiceProviderUrl || h || o || !s,
            x = !_?.configProperties?.scimAuthToken;
          return (0, l.tZ)(
            c.Zbd,
            null,
            (0, l.tZ)(
              c.T5p,
              {
                as: c.aYP,
                gap: "8px",
                gridTemplateAreas: "'header button' 'description button' 'status status'",
                gridTemplateColumns: "1fr auto",
                sx: { bg: "white", border: "none" }
              },
              (0, l.tZ)(
                c.dDn,
                { as: l.X6, innerAs: "h3", size: "large", bold: !0, gridArea: "header", textStyle: "ds.title.section.medium" },
                d("team_settings_directory_sync_scim_header")
              ),
              (0, l.tZ)(
                c.dDn,
                { gridArea: "description", as: l.nv, size: "small", textStyle: "ds.title.block.small", color: "ds.text.neutral.quiet" },
                d("team_settings_directory_sync_scim_description")
              ),
              (0, l.tZ)(
                c.dDn,
                { gridArea: "button" },
                (0, l.tZ)(
                  lu.M,
                  {
                    id: "scimSetupButton",
                    loading: h,
                    disabled: b,
                    neverShowTooltip: o,
                    size: "large",
                    onClick: () => {
                      r.push(`${t}${_b}`);
                    },
                    content: d("team_settings_es_sso_setup_configure_es_tooltip"),
                    mood: x && !b ? "brand" : "neutral",
                    intensity: x && !b ? "catchy" : "quiet"
                  },
                  d(x ? "team_settings_directory_sync_scim_set_up_button" : "team_settings_button_edit_label")
                )
              ),
              _?.configProperties?.scimEnabled
                ? (0, l.tZ)(
                    c.dDn,
                    { gridArea: "status", sx: { mt: "20px" } },
                    (0, l.tZ)(eb, { loading: m, version: p?.version, refreshData: y, lastSyncUnix: p?.lastActivityDateUnix })
                  )
                : null
            )
          );
        };
      var ab,
        nb,
        sb,
        ib = a(957459);
      const ob = { GENERIC_ERROR: "_common_generic_error" },
        rb = ({ config: e, esEndpoint: t }) => {
          var a;
          const { translate: s } = (0, g.Z)(),
            o = (0, i.k6)(),
            {
              teamDeviceConfigLoading: r,
              teamDeviceConfig: d,
              updateTeamDeviceConfig: u,
              refreshTeamDeviceConfig: _,
              loadTeamDeviceConfigErrorCode: m
            } = cy({ draft: !1, deviceAccessKey: e?.deviceAccessKey }),
            [p, y] = (0, n.useState)(""),
            [h, b] = (0, n.useState)(!1),
            [x, S] = (0, n.useState)(!1),
            [v, f] = (0, n.useState)(!1),
            [C, Z] = (0, n.useState)(!1),
            E = r;
          (0, n.useEffect)(() => {
            const e = m;
            e && e !== _g.Bf && y(e);
          }, [m, s]);
          const D = () => o.goBack(),
            T = async ({ values: e, resetForm: a }) => {
              S(!0), b(!1);
              const n = { scimEnabled: e.encryptionServiceSync, teamDeviceUrl: null != t ? t : void 0 };
              (!v && d?.configProperties?.scimAuthToken) || (n.scimAuthToken = e.scimToken);
              const s = await u(n);
              f(!1),
                await _(),
                S(!1),
                s.success ? (s.data.encryptionServiceReloadingStatus === pg.x.OK ? (a({ values: e }), D()) : b(!0)) : y(s.error.code);
            },
            N = {
              scimToken: ((M = d?.configProperties?.scimAuthToken), null != (I = M?.replace(/./g, "*")) ? I : ""),
              scimEndpoint: t ? (0, $y.UQ)(t, "scim/2.0") : "",
              encryptionServiceSync: null != (a = d?.configProperties?.scimEnabled) && a
            };
          var M, I;
          const w = () => {
            Z(!1);
          };
          return (0, l.tZ)(
            $a.J9,
            {
              onSubmit: async (e, t) => {
                e.encryptionServiceSync ? Z(!0) : await T({ values: e, resetForm: t.resetForm });
              },
              enableReinitialize: !0,
              initialValues: N
            },
            ({ values: e, setFieldValue: t, isSubmitting: a, dirty: n, resetForm: i }) => {
              var o, u;
              return (0, l.tZ)(
                $a.l0,
                { autoComplete: "off", noValidate: !0 },
                (0, l.tZ)(gg.X, { dirty: n && !x && !h }),
                (0, l.tZ)(
                  c.Zbd,
                  null,
                  (0, l.tZ)(c.Ol2, null, s("team_settings_directory_sync_scim_header")),
                  (0, l.tZ)(
                    c.aYP,
                    null,
                    (0, l.tZ)(l.ke, { mood: "brand", title: s("team_settings_directory_sync_scim_infobox") }),
                    (0, l.tZ)(
                      c.T5p,
                      { gridTemplateAreas: "'header button' 'desc button' 'inputField inputField'", gap: "8px", sx: { mt: "32px" } },
                      (0, l.tZ)(
                        c.dDn,
                        { gridArea: "header", as: l.nv, innerAs: "label", htmlFor: "scimTokenInput", textStyle: "ds.title.block.medium" },
                        s("team_settings_directory_sync_scim_set_up_token_label")
                      ),
                      (0, l.tZ)(
                        c.dDn,
                        {
                          as: l.zx,
                          gridArea: "button",
                          type: "button",
                          alignSelf: "right",
                          intensity: "quiet",
                          mood: "brand",
                          disabled: E || a,
                          onClick: () =>
                            ((e) => {
                              f(!0), e("scimToken", (0, ib.Z)());
                            })(t),
                          sx: { height: "fit-content", width: "100%" }
                        },
                        e.scimToken
                          ? s("team_settings_directory_sync_scim_set_up_reset_buttons")
                          : s("team_settings_directory_sync_scim_set_up_generate_buttons")
                      ),
                      (0, l.tZ)(
                        c.dDn,
                        { gridArea: "desc", as: l.nv, size: "medium", sx: { marginBottom: "24px" }, color: "ds.text.neutral.quiet" },
                        s("team_settings_directory_sync_scim_set_up_token_description")
                      ),
                      (0, l.tZ)(
                        c.dDn,
                        { gridArea: "inputField" },
                        (0, l.tZ)($a.gN, { name: "scimToken" }, ({ field: t }) =>
                          t.value
                            ? (0, l.tZ)(_c.x, {
                                inputValue: t.value,
                                iconButtonProps: { disabled: (Boolean(e.scimToken) && !v) || a },
                                passwordInputProps: {
                                  disabled: (Boolean(e.scimToken) && !v) || a,
                                  fullWidth: !0,
                                  readOnly: !0,
                                  ...t,
                                  id: "scimTokenInput"
                                }
                              })
                            : null
                        )
                      )
                    ),
                    (0, l.tZ)(
                      c.T5p,
                      { gridTemplateColumns: "auto", gap: "8px" },
                      (0, l.tZ)(
                        c.dDn,
                        {
                          as: l.nv,
                          innerAs: "label",
                          htmlFor: "endpointInput",
                          sx: { marginTop: "32px" },
                          textStyle: "ds.title.block.medium"
                        },
                        s("team_settings_directory_sync_scim_set_up_endpoint_label")
                      ),
                      (0, l.tZ)($a.gN, { name: "scimEndpoint" }, ({ field: e }) =>
                        (0, l.tZ)(_c.x, { inputValue: e.value, textInputProps: { fullWidth: !0, readOnly: !0, ...e, id: "endpointInput" } })
                      )
                    ),
                    ab || (ab = (0, l.tZ)("hr", null)),
                    (0, l.tZ)(
                      c.T5p,
                      { gridTemplateAreas: "'label toggle' 'desc .'", gap: "8px" },
                      (0, l.tZ)(
                        c.dDn,
                        {
                          gridArea: "label",
                          as: l.nv,
                          innerAs: "label",
                          htmlFor: "encryptionServiceSync",
                          textStyle: "ds.title.block.medium"
                        },
                        s("team_settings_directory_sync_scim_set_up_service_label")
                      ),
                      (0, l.tZ)(
                        c.dDn,
                        { gridArea: "desc", as: l.nv, color: "ds.text.neutral.quiet" },
                        s("team_settings_directory_sync_scim_set_up_service_description")
                      ),
                      (0, l.tZ)(
                        c.dDn,
                        { gridArea: "toggle" },
                        r
                          ? nb || (nb = (0, l.tZ)(l.ZX, { mood: "brand" }))
                          : (0, l.tZ)(l.ZD, {
                              disabled: E || a,
                              id: "encryptionServiceSync",
                              onChange: (e) =>
                                ((e, t) => {
                                  t("encryptionServiceSync", e.currentTarget.checked);
                                })(e, t),
                              defaultChecked: null != (o = d?.configProperties?.scimEnabled) && o
                            })
                      )
                    )
                  ),
                  (0, l.tZ)(
                    c.eWM,
                    null,
                    p
                      ? (0, l.tZ)(
                          l.nv,
                          { sx: { width: "40%", ml: 0, mr: "auto" }, textStyle: "ds.title.supporting.small" },
                          s(null != (u = ob?.[p]) ? u : ob.GENERIC_ERROR)
                        )
                      : null,
                    h
                      ? (0, l.tZ)(c.Ejs, { sx: { flexGrow: 1, justifyContent: "center" } }, sb || (sb = (0, l.tZ)(vg, { context: "SCIM" })))
                      : null,
                    (0, l.tZ)(
                      l.zx,
                      { mood: "neutral", intensity: "quiet", size: "large", type: "button", onClick: D },
                      s("team_settings_directory_sync_scim_set_up_button_cancel")
                    ),
                    (0, l.tZ)(
                      l.zx,
                      { type: "submit", disabled: E || a || !n },
                      s("team_settings_directory_sync_scim_set_up_button_save_changes")
                    )
                  )
                ),
                C
                  ? (0, l.tZ)(jp, {
                      title: s("team_settings_directory_sync_scim_confirm_dialog_title"),
                      body: s("team_settings_directory_sync_scim_confirm_dialog_body"),
                      primaryActionLabel: s("team_settings_directory_sync_scim_confirm_dialog_primary_action_label"),
                      onCancel: w,
                      onConfirm: () =>
                        (async ({ values: e, resetForm: t }) => {
                          await T({ values: e, resetForm: t }), Z(!1);
                        })({ values: e, resetForm: i })
                    })
                  : null
              );
            }
          );
        };
      var lb;
      const cb = (e) => {
        const { translate: t } = (0, g.Z)(),
          a = (0, F.w)(G.w.OnboardingWebTeamsignuppage),
          { getInviteLinkDataForAdmin: s } = (0, rd.h)(),
          [i, o] = (0, n.useState)(!1),
          [r, d] = (0, n.useState)(!1);
        return (0, l.tZ)(
          c.Ejs,
          { gap: "6", ...e },
          a ? (0, l.tZ)(zu, { showSharingDialog: i, setShowSharingDialog: o }) : null,
          a && r ? (0, l.tZ)(Ou, { showActivationDialog: r, setShowActivationDialog: d, setShowSharingDialog: o }) : null,
          (0, l.tZ)(Bl, {
            linkProps: {
              linkType: Ul.ExternalLink,
              linkHref: "https://support.dashlane.com/hc/articles/4404301553938?utm_source=extension"
            },
            heading: t("team_settings_encryption_service_scim_setup_guide_heading"),
            description: t("team_settings_encryption_service_scim_setup_guide_description"),
            linkText: t("team_settings_encryption_service_scim_setup_guide_link_text")
          }),
          a && e.isScimEnabled
            ? (0, l.tZ)(Bl, {
                linkProps: { linkType: Ul.ExternalLink },
                heading: t("team_settings_encryption_service_scim_invite_link_heading"),
                description: (0, l.tZ)(
                  "div",
                  null,
                  (0, l.tZ)(
                    l.nv,
                    { color: "ds.text.neutral.standard", textStyle: "ds.body.standard.regular", sx: { mb: "8px" } },
                    t("team_settings_encryption_service_scim_invite_link_description_first")
                  ),
                  (0, l.tZ)(
                    c.k$b,
                    {
                      as: l.nv,
                      innerAs: "a",
                      color: "ds.text.brand.standard",
                      onClick: async (e) => {
                        e.preventDefault();
                        const t = await s();
                        t?.disabled || !t?.teamKey ? d(!0) : o(!0);
                      },
                      gap: "4px",
                      href: "_blank"
                    },
                    (0, l.tZ)("span", null, t("team_settings_encryption_service_scim_invite_link_copy")),
                    lb || (lb = (0, l.tZ)(l.JO, { name: "ActionCopyOutlined", size: "medium", color: "ds.text.brand.standard" }))
                  )
                )
              })
            : null
        );
      };
      var db, ub;
      const _b = "/scim-settings",
        mb = ({
          isScimEnabled: e,
          isScimCapable: t,
          teamSettings: a,
          updateTeamSettings: s,
          disableForm: r = !1,
          adSyncEnabled: d,
          ssoConnectorSetup: u
        }) => {
          const [m, p] = (0, n.useState)(!1),
            y = () => p(!0),
            { translate: h } = (0, g.Z)(),
            { path: b } = (0, i.$B)(),
            { esConfig: x, esConfigLoading: S, refreshEncryptionServiceConfig: v } = mg(),
            f = (0, Ce.o)(G.w.ItadminTacEncryptionserviceSSOmigrationReset),
            C = Boolean(f || (!S && u));
          (0, n.useEffect)(() => {
            (0, P.Nc)(o.PageView.TacSettingsDirectorySyncSelfHostedScim);
          }, []);
          const Z = Re({ hasBillingAccess: !0 });
          if (!Z) return null;
          const { shouldShowBuyOrUpgradePaywall: E, planType: D, isTrialOrGracePeriod: T } = Z,
            N = E && D !== _.lD.Business;
          return (0, l.tZ)(
            tg,
            { title: "Self-hosted SCIM" },
            (0, l.tZ)(c_, {
              mainContent: c.T5p,
              mainProps: {
                gridTemplateColumns: "auto",
                gridAutoRows: "min-content",
                gap: "32px",
                children: (0, l.tZ)(
                  i.rs,
                  null,
                  (0, l.tZ)(
                    i.AW,
                    { exact: !0, path: b },
                    N
                      ? (0, l.tZ)(Xh, {
                          isScimEnabled: e,
                          isSCIMCapable: t,
                          onSetupClear: () => s({ ssoServiceProviderUrl: null }),
                          isTrialOrGracePeriod: T,
                          showPaywall: !0
                        })
                      : (0, l.tZ)(
                          n.Fragment,
                          null,
                          db || (db = (0, l.tZ)(vg, null)),
                          (0, l.tZ)(Xh, { isScimEnabled: e, isSCIMCapable: t, onSetupClear: () => s({ ssoServiceProviderUrl: null }) }),
                          d
                            ? (0, l.tZ)(l.ke, {
                                size: "medium",
                                mood: "neutral",
                                title: h("team_settings_encryption_service_scim_setup_ad_sync_warning_heading"),
                                description: h("team_settings_encryption_service_scim_setup_ad_sync_warning_description")
                              })
                            : null,
                          C
                            ? (0, l.tZ)(l.ke, {
                                size: "medium",
                                mood: "brand",
                                title: h("team_settings_es_sso_migration_infobox_title"),
                                description: (0, l.tZ)(l.nv, null, h("team_settings_es_sso_migration_infobox_body"))
                              })
                            : null,
                          (0, l.tZ)(Vg, { parentPath: b, loading: S || null === t, esConfig: x, disableSetupButton: !1 === t || r }),
                          (0, l.tZ)(tb, {
                            teamSettings: a,
                            parentPath: b,
                            loading: S || null === t,
                            esConfig: x,
                            isScimCapable: !0 === t,
                            disableSetupButton: r
                          })
                        ),
                    m ? (0, l.tZ)(be, { onDismiss: () => p(!1) }) : null
                  ),
                  (0, l.tZ)(
                    i.AW,
                    { path: `${b}/encryption-service-settings` },
                    S
                      ? ub || (ub = (0, l.tZ)(l.ZX, { mood: "brand" }))
                      : (0, l.tZ)(Ug, {
                          migratingFromSSOConnector: C,
                          onSave: () => v(),
                          teamSettings: a,
                          updateTeamSettings: s,
                          esConfig: x
                        })
                  ),
                  (0, l.tZ)(i.AW, { path: `${b}${_b}` }, (0, l.tZ)(rb, { config: x, esEndpoint: a?.ssoServiceProviderUrl }))
                )
              },
              secondaryContent: N ? () => Ch(y) : cb
            })
          );
        },
        pb = {
          title: "tac_settings_directory_sync_card_title_confidential_scim",
          redirectUrl: "confidential-scim",
          supportedFeatures: [
            {
              title: "tac_settings_directory_sync_card_cloud_based",
              description: "tac_settings_directory_sync_confidential_card_cloud_based_description",
              isSupported: !0
            },
            {
              title: "tac_settings_directory_sync_card_confidential_automatic_syncs",
              description: "tac_settings_directory_sync_card_confidential_automatic_syncs_description",
              isSupported: !0
            },
            {
              title: "tac_settings_directory_sync_card_user_provisioning",
              description: "tac_settings_directory_sync_card_user_provisioning_description",
              isSupported: !0
            },
            {
              title: "tac_settings_directory_sync_card_sharing_group",
              description: "tac_settings_directory_sync_card_sharing_group_description",
              isSupported: !1
            }
          ]
        },
        gb = {
          title: "tac_settings_directory_sync_card_title_selfhosted_scim",
          redirectUrl: "scim-provisioning",
          supportedFeatures: [
            {
              title: "tac_settings_directory_sync_card_cloud_based",
              description: "tac_settings_directory_sync_card_selfhosted_scim_cloud_based_description",
              isSupported: !0
            },
            {
              title: "tac_settings_directory_sync_card_automatic_syncs",
              description: "tac_settings_directory_sync_card_automatic_selfhosted_scim_syncs_description",
              isSupported: !0
            },
            {
              title: "tac_settings_directory_sync_card_user_provisioning",
              description: "tac_settings_directory_sync_card_user_provisioning_description",
              isSupported: !0
            },
            {
              title: "tac_settings_directory_sync_card_sharing_group",
              description: "tac_settings_directory_sync_card_sharing_group_description",
              isSupported: !0
            }
          ]
        },
        yb = {
          title: "tac_settings_directory_sync_card_title_ad_sync",
          redirectUrl: "active-directory",
          supportedFeatures: [
            {
              title: "tac_settings_directory_sync_card_cloud_based",
              description: "tac_settings_directory_sync_card_ad_sync_cloud_based_description",
              isSupported: !1
            },
            {
              title: "tac_settings_directory_sync_card_automatic_syncs",
              description: "tac_settings_directory_sync_card_automatic_ad_sync_syncs_description",
              isSupported: !0
            },
            {
              title: "tac_settings_directory_sync_card_user_provisioning",
              description: "tac_settings_directory_sync_card_user_provisioning_description",
              isSupported: !0
            },
            {
              title: "tac_settings_directory_sync_card_sharing_group",
              description: "tac_settings_directory_sync_card_sharing_group_description",
              isSupported: !0
            }
          ]
        },
        hb = "tac_settings_directory_sync_card_button_setup",
        bb = "tac_settings_directory_sync_card_button_edit",
        xb = ({ ssoState: e, isAdSyncEnabled: t, isSelfhostedScimEnabled: a, isNitroSCIMEnabled: s, isLoading: i = !1 }) => {
          const { translate: r } = (0, g.Z)(),
            d = "NitroComplete" === e,
            u = d || "NitroIncomplete" === e,
            _ = ((e) => "SelfHostedComplete" === e || "SelfHostedIncomplete" === e)(e),
            m = ie(),
            [p, y] = (0, n.useState)(!0),
            [h, b] = (0, n.useState)(!1),
            x = Re({ hasBillingAccess: !0 });
          return (
            (0, n.useEffect)(() => {
              m && y(!!m.scim.enabled);
            }, [m]),
            (0, n.useEffect)(() => {
              (0, P.Nc)(o.PageView.TacSettingsDirectorySync);
            }, []),
            (0, n.useEffect)(() => {
              x?.isTrialOrGracePeriod && b(x.isTrialOrGracePeriod);
            }, [x]),
            i
              ? (0, l.tZ)(c.T5p, { justifyItems: "center" }, (0, l.tZ)(l.ZX, { size: 75, sx: { marginTop: "20vh" } }))
              : (0, l.tZ)(
                  "div",
                  { sx: { margin: "32px" } },
                  (0, l.tZ)(
                    l.X6,
                    { as: "h1", textStyle: "ds.title.section.large", sx: { marginBottom: "16px" } },
                    r("tac_settings_directory_sync_header")
                  ),
                  (0, l.tZ)(l.nv, { sx: { marginBottom: "8px" } }, r("tac_settings_directory_sync_header_helper")),
                  (0, l.tZ)(
                    Pl,
                    { sx: { marginBottom: "32px" }, href: "https://support.dashlane.com/hc/articles/4404301553938?utm_source=extension" },
                    r("tac_settings_directory_sync_header_link")
                  ),
                  (0, l.tZ)(
                    c.T5p,
                    { fullWidth: !0, gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" },
                    p
                      ? (0, l.tZ)(
                          n.Fragment,
                          null,
                          (0, l.tZ)(hh, {
                            optionNumber: 1,
                            ...pb,
                            selected: s,
                            buttonLabel: r(s ? bb : hb),
                            disabled: (!s && !d) || _ || a || t,
                            onCtaClick: () => {
                              (0, P.Kz)(new o.UserSetupConfidentialScimEvent({ scimSetupStep: o.ScimSetupStep.ClickSetUp }));
                            }
                          }),
                          (0, l.tZ)(hh, { optionNumber: 2, ...gb, selected: a, buttonLabel: r(a ? bb : hb), disabled: u || s || t }),
                          (0, l.tZ)(hh, { optionNumber: 3, ...yb, selected: t, buttonLabel: r(t ? bb : hb), disabled: s || a })
                        )
                      : (0, l.tZ)(
                          n.Fragment,
                          null,
                          (0, l.tZ)(hh, { optionNumber: 1, ...yb, selected: t, buttonLabel: r(t ? bb : hb), disabled: s || a }),
                          (0, l.tZ)(Hh, { isTrialOrGracePeriod: h })
                        )
                  )
                )
          );
        };
      var Sb = a(676240);
      const vb = ({ isTokenGenerated: e }) => {
          const [t, a] = (0, n.useState)(!1),
            [s, i] = (0, n.useState)(!1),
            { translate: r } = (0, g.Z)(),
            { generateScimToken: c } = (0, $e.u)(Sb.m),
            d = (0, n.useCallback)(async () => {
              a(!0),
                await c(void 0),
                (0, P.Kz)(
                  new o.UserSetupConfidentialScimEvent({
                    scimSetupStep: e ? o.ScimSetupStep.ReGenerateToken : o.ScimSetupStep.GenerateScimToken
                  })
                ),
                a(!1);
            }, [c, e]);
          return (0, l.tZ)(
            n.Fragment,
            null,
            (0, l.tZ)(
              l.X6,
              { as: "h2", textStyle: "ds.title.section.medium", sx: { marginBottom: "8px" } },
              r("tac_settings_confidential_scim_generate_token_header")
            ),
            (0, l.tZ)(
              l.nv,
              { color: "ds.text.neutral.quiet", sx: { marginBottom: "24px" } },
              r("tac_settings_confidential_scim_generate_token_header_helper")
            ),
            (0, l.tZ)(
              l.zx,
              { intensity: e ? "quiet" : "catchy", mood: "brand", isLoading: !e && t, onClick: e ? () => i(!0) : d },
              r(e ? "tac_settings_confidential_scim_regenerate_token_button" : "tac_settings_confidential_scim_generate_token_button")
            ),
            (0, l.tZ)(
              l.Vq,
              {
                actions: {
                  primary: {
                    children: r("tac_settings_confidential_scim_regenerate_token_dialog_primary_action"),
                    onClick: () => {
                      d(), i(!1);
                    },
                    isLoading: t
                  },
                  secondary: {
                    children: r("tac_settings_confidential_scim_regenerate_token_dialog_secondary_action"),
                    onClick: () => i(!1)
                  }
                },
                closeActionLabel: "Close",
                onClose: () => i(!1),
                title: r("tac_settings_confidential_scim_regenerate_token_dialog_title"),
                isOpen: s
              },
              (0, l.tZ)(l.nv, null, r("tac_settings_confidential_scim_regenerate_token_dialog"))
            )
          );
        },
        fb = ({ scimApiToken: e, scimEndpoint: t }) => {
          const { translate: a } = (0, g.Z)(),
            [s, i] = (0, n.useState)(!1),
            r = async (e) => {
              e && (await navigator.clipboard.writeText(e));
            };
          return (0, l.tZ)(
            n.Fragment,
            null,
            (0, l.tZ)(
              l.X6,
              { as: "h2", textStyle: "ds.title.section.medium", sx: { marginBottom: "8px" } },
              a("tac_settings_confidential_scim_copy_token_header")
            ),
            (0, l.tZ)(
              l.nv,
              { color: "ds.text.neutral.quiet", sx: { marginBottom: "24px" } },
              a("tac_settings_confidential_scim_copy_token_header_helper")
            ),
            (0, l.tZ)(l.qo, {
              label: a("tac_settings_confidential_scim_copy_token_field_token_label"),
              type: s ? "text" : "password",
              value: null != e ? e : "",
              disabled: !e,
              readOnly: !!e,
              sx: { marginBottom: "16px" },
              actions: [
                { iconName: "ActionRevealOutlined", key: "copy-token", label: "", onClick: () => i(!s) },
                {
                  iconName: "ActionCopyOutlined",
                  key: "view-token",
                  label: "",
                  onClick: () => {
                    r(null != e ? e : ""), (0, P.Kz)(new o.UserSetupConfidentialScimEvent({ scimSetupStep: o.ScimSetupStep.CopyApiToken }));
                  }
                }
              ]
            }),
            (0, l.tZ)(l.qo, {
              value: null != t ? t : "",
              label: a("tac_settings_confidential_scim_copy_token_field_endpoint_label"),
              disabled: !t,
              readOnly: !!t,
              actions: [
                {
                  iconName: "ActionCopyOutlined",
                  key: "copy-endpoint",
                  label: "",
                  onClick: () => {
                    r(null != t ? t : ""),
                      (0, P.Kz)(new o.UserSetupConfidentialScimEvent({ scimSetupStep: o.ScimSetupStep.CopyEndpointLink }));
                  }
                }
              ]
            })
          );
        },
        Cb = ({ active: e }) => {
          const t = (0, n.useRef)(!1),
            { translate: a } = (0, g.Z)(),
            { updateScimConfiguration: s } = (0, $e.u)(dh.m),
            { showToast: i } = (0, l.pm)();
          return (
            (0, n.useEffect)(
              () => (
                !0 === t.current &&
                  i({
                    description: a(e ? "tac_settings_activate_automatic_provisioning" : "tac_settings_deactivate_automatic_provisioning"),
                    closeActionLabel: "close"
                  }),
                () => {
                  t.current = !0;
                }
              ),
              [e]
            ),
            (0, l.tZ)(
              c.T5p,
              { gridTemplateAreas: "'title title' 'description button'" },
              (0, l.tZ)(
                c.dDn,
                { gridArea: "title", as: l.X6, innerAs: "h2", textStyle: "ds.title.section.medium", sx: { marginBottom: "8px" } },
                a("tac_settings_confidential_scim_activate_header")
              ),
              (0, l.tZ)(
                c.dDn,
                { gridArea: "description", as: l.nv, color: "ds.text.neutral.quiet" },
                a("tac_settings_confidential_scim_activate_header_helper")
              ),
              (0, l.tZ)(c.dDn, {
                justifySelf: "end",
                gridArea: "button",
                as: l.ZD,
                onChange: () => {
                  (0, P.Kz)(
                    new o.UserSetupConfidentialScimEvent({
                      scimSetupStep: e ? o.ScimSetupStep.DeactivateDirectorySync : o.ScimSetupStep.ActivateDirectorySync
                    })
                  ),
                    s({ active: !e });
                },
                checked: e
              })
            )
          );
        },
        Zb = () => {
          const { data: e } = (0, d.k)(dh.m, "scimConfiguration"),
            { data: t } = (0, d.k)(dh.m, "scimEndpoint");
          return e
            ? (0, l.tZ)(
                c.Ejs,
                { gap: "32px", flexDirection: "column", as: c.Zbd, sx: { padding: "32px" } },
                (0, l.tZ)(c.k$b, null, (0, l.tZ)(vb, { isTokenGenerated: !!e?.token })),
                (0, l.tZ)(c.k$b, null, (0, l.tZ)(fb, { scimEndpoint: t?.endpoint, scimApiToken: e?.token })),
                (0, l.tZ)(c.k$b, null, (0, l.tZ)(Cb, { active: e.active }))
              )
            : null;
        },
        Eb = () => {
          const { translate: e } = (0, g.Z)();
          return (
            (0, n.useEffect)(() => {
              (0, P.Nc)(o.PageView.TacSettingsDirectorySyncConfidentialScim);
            }, []),
            (0, l.tZ)(
              tg,
              { title: e("tac_settings_confidential_scim_header"), paragraph: e("tac_settings_confidential_scim_header_helper") },
              (0, l.tZ)(c_, {
                sx: { padding: "0 32px" },
                fullWidth: !0,
                mainContent: Zb,
                secondaryContent: Bl,
                secondaryProps: {
                  heading: e("tac_settings_confidential_scim_help_card_header"),
                  description: e("tac_settings_confidential_scim_help_card_description"),
                  linkProps: {
                    linkType: Ul.ExternalLink,
                    linkHref: "https://support.dashlane.com/hc/articles/360013149040",
                    onClick: () => {
                      (0, P.Kz)(new o.UserClickEvent({ button: o.Button.SeeSetupGuide, clickOrigin: o.ClickOrigin.NeedHelp }));
                    }
                  },
                  linkText: e("tac_settings_confidential_scim_help_card_link")
                }
              })
            )
          );
        },
        Db = Po(({ lee: e }) => {
          const { routes: t } = (0, i.Xo)(),
            { translate: a } = (0, g.Z)(),
            s = Re(e.permission.adminAccess),
            r = (function (e) {
              var t;
              const a = (0, L.B)(),
                n = (0, ne.C)();
              if (!n || !a) return null;
              const s = e.hasBillingAccess,
                i = n.isFreeTrial || n.isGracePeriod;
              return {
                shouldShowBuyPaywall: s && i,
                shouldShowUpgradePaywall: s && !i && n.spaceTier !== _.lD.Business,
                accountSubscriptionCode: null != (t = a?.subscriptionCode) ? t : ""
              };
            })(e.permission.adminAccess),
            c = (0, yd.U)(),
            d = (() => {
              const e = (0, Ze.lZ)(),
                t = (0, Ce.o)(G.w.EcommerceWebB2BDiscontinuationDev);
              return e.isLoading || "boolean" != typeof t ? null : t && !!e.isTeamSoftDiscontinued && !!e.isTrial;
            })(),
            { reportTACError: m } = H(),
            { data: p, status: y } = wo(),
            h = (() => {
              const { editTeamPolicies: e } = (0, $e.u)(u.o);
              return e;
            })();
          (0, n.useEffect)(() => {
            (0, P.Nc)(o.PageView.TacSettingsPolicies);
          }, []);
          const b = async (t) => {
              const a = (0, Nn.v0)(e.globalState);
              if (0 === Object.keys(t).length || !a?.teamId) return Promise.resolve();
              await h({ teamId: a.teamId, policyUpdates: t });
            },
            x = () => !(0, Nn.v0)(e.globalState) && (m(new Error(ls.N)), !0);
          return s && r && null !== c && null !== d
            ? (y === se.rq.Error && m(new Error("Error loading team policies")),
              (0, l.tZ)(
                xm,
                { title: a("team_settings_menu_title_policies"), isLoading: y === se.rq.Loading },
                op || (op = (0, l.tZ)(tp, { key: "inviteLinkPolicy" })),
                y === se.rq.Success
                  ? ((S = p),
                    ((e, t, a, n, s, r, l) => {
                      const c = [],
                        { accountSubscriptionCode: d, shouldShowBuyPaywall: u, shouldShowUpgradePaywall: _ } = a,
                        m = r.enablePersonalSpace;
                      m &&
                        c.push(
                          ...((e, t, a) => {
                            const n = [],
                              s = a && (t.enableForcedDomains || t.enableRemoveForcedContent),
                              i = a && !t.enableForcedDomains && !t.enableRemoveForcedContent;
                            return (
                              n.push({ type: "header", label: e("team_settings_header_team_space_options") }),
                              s &&
                                n.push({
                                  type: "quickDisable",
                                  label: e("team_settings_space_management_click_to_disable_infobox_title"),
                                  description: e("team_settings_space_management_click_to_disable_infobox_subtitle"),
                                  mood: "brand",
                                  featuresToDisable: { enableForcedDomains: !1, enableRemoveForcedContent: !1 },
                                  actions: {
                                    primary: { label: e("team_settings_space_management_infobox_disable_button") },
                                    secondary: { label: e(Am), onClick: () => (0, j.Yo)(ce.Rf) }
                                  }
                                }),
                              i &&
                                n.push({
                                  type: "quickDisable",
                                  label: e("team_settings_space_management_disabled_infobox_title"),
                                  description: e("team_settings_space_management_disabled_infobox_subtitle"),
                                  icon: "FeedbackSuccessOutlined",
                                  mood: "positive",
                                  actions: { secondary: { label: e(Am), onClick: () => (0, j.Yo)(ce.Rf) } }
                                }),
                              n.push({
                                type: "text",
                                multiLine: !0,
                                isReadOnly: i,
                                label: e("team_settings_team_domain"),
                                helperLabel: e("team_settings_team_domain_helper"),
                                hintText: e("team_settings_team_domain_placeholder"),
                                feature: "teamDomain",
                                value: t.teamDomain,
                                serializer: (e) =>
                                  e
                                    ? e
                                        .split(";")
                                        .map((e) => e.trim().toLowerCase())
                                        .filter((e) => Boolean(e.length))
                                    : [],
                                deserializer: (e) => (e?.length ? e.join(";") : ""),
                                validator: (e) =>
                                  e.some((e) => !zm.isFQDN(e)) ? "wrong_url" : e.some((e) => e.length > 255) ? "wrong_size" : null,
                                getErrorMessageForKey: (t) => {
                                  switch (t) {
                                    case "wrong_size":
                                      return e("team_settings_team_domain_save_error_msg_wrong_size", { lengthLimit: 255 });
                                    case "wrong_url":
                                      return e("team_settings_team_domain_save_error_msg_wrong_url");
                                    case "too_many_requests":
                                      return e(Om);
                                    default:
                                      return e("team_settings_team_domain_save_error_msg_generic_error");
                                  }
                                }
                              }),
                              n.push({
                                type: "switch",
                                isReadOnly: i,
                                label: e("team_settings_enable_space_restrictions"),
                                helperLabel: e("team_settings_enable_space_restrictions_helper"),
                                value: t.enableForcedDomains,
                                feature: "enableForcedDomains",
                                getErrorMessageForKey: (t) => e("too_many_requests" === t ? Om : Lm),
                                constraintsFromOtherFields: {
                                  disabledWhen: [
                                    {
                                      feature: "teamDomain",
                                      condition: (e) => !e.teamDomain?.length,
                                      warningMessage: e("team_settings_enable_space_restrictions_define_team_domain_first")
                                    }
                                  ],
                                  requiredFor: [{ feature: "enableRemoveForcedContent", reset: (e) => (e.enableRemoveForcedContent = !1) }]
                                }
                              }),
                              n.push({
                                type: "switch",
                                label: e("team_settings_remove_forced_content"),
                                isReadOnly: i,
                                helperLabel: e("team_settings_remove_forced_content_helper"),
                                value: t.enableRemoveForcedContent,
                                feature: "enableRemoveForcedContent",
                                getErrorMessageForKey: (t) => e("too_many_requests" === t ? Om : Lm),
                                constraintsFromOtherFields: {
                                  disabledWhen: [
                                    {
                                      feature: "teamDomain",
                                      condition: (e) => !e.teamDomain?.length,
                                      warningMessage: e("team_settings_remove_forced_content_define_team_domain_first")
                                    },
                                    {
                                      feature: "enableForcedDomains",
                                      condition: (e) => !e.enableForcedDomains,
                                      warningMessage: e("team_settings_remove_forced_content_enable_forced_domains_first")
                                    }
                                  ]
                                }
                              }),
                              n
                            );
                          })(e, r, s)
                        ),
                        c.push(
                          { type: "header", label: e("team_settings_header_browser_settings") },
                          {
                            type: "text",
                            isReadOnly: n,
                            multiLine: !0,
                            label: e("team_settings_disable_auto_login_domains"),
                            helperLabel: e("team_settings_disable_auto_login_domains_helper"),
                            hintText: e("team_settings_disable_auto_login_domains_placeholder"),
                            value: r.disableAutoLoginDomains,
                            serializer: (e) => (e.length ? e.split(";") : []).filter((e) => !!e.length).map((e) => e.trim()),
                            deserializer: (e) => (e?.length ? e.join(";") : ""),
                            validator: (e) =>
                              e.some((e) => !new wm.Y(e).isUrlValid()) ? "wrong_url" : e.some((e) => e.length > 255) ? "wrong_size" : null,
                            feature: "disableAutoLoginDomains",
                            getErrorMessageForKey: (t) => {
                              switch (t) {
                                case "wrong_size":
                                  return e("team_settings_disable_auto_login_domains_save_error_msg_wrong_size", { lengthLimit: 255 });
                                case "wrong_url":
                                  return e("team_settings_disable_auto_login_domains_save_error_msg_" + t);
                                case "too_many_requests":
                                  return e(jm);
                                default:
                                  return e("team_settings_disable_auto_login_domains_save_error_msg_generic_error");
                              }
                            }
                          }
                        );
                      const p = `${ce.ub}?plan=business\n    }&subCode=${d}&utm_source=button:buy_dashlane+click_origin:restrict_sharing_to_team_activation_setting+origin_page:tac/settings/policies+origin_component:main_app`,
                        g = () =>
                          (0, P.Kz)(
                            new o.UserClickEvent({ button: o.Button.SeeB2bPlanTiers, clickOrigin: o.ClickOrigin.TacSettingsPolicies })
                          );
                      let y, h;
                      return (
                        u
                          ? ((y = () => {
                              g(), (0, j.Yo)(p);
                            }),
                            (h = e("team_settings_buy_dashlane_cta")))
                          : _ &&
                            ((y = () => {
                              g(), (0, i.uX)(`${l.teamAccountChangePlanRoutePath}`);
                            }),
                            (h = e("team_settings_see_plans_cta"))),
                        c.push(
                          { type: "header", label: e("team_setting_header_sharing") },
                          ((e, t, a) => ({
                            type: "switch",
                            isReadOnly: t,
                            label: e("team_settings_allow_sharing"),
                            helperLabel: e("team_settings_allow_sharing_helper"),
                            value: a.allowSharing,
                            feature: "allowSharing",
                            getErrorMessageForKey: (t) =>
                              e("too_many_requests" === t ? jm : "team_settings_allow_sharing_save_error_msg_generic_error"),
                            constraintsFromOtherFields: {
                              requiredFor: [{ feature: "restrictSharingToTeam", reset: (e) => (e.restrictSharingToTeam = !1) }]
                            }
                          }))(e, n, r),
                          {
                            type: u || _ ? "cta" : "switch",
                            badgeIconName: u || _ ? "PremiumOutlined" : void 0,
                            badgeLabel: u || _ ? e("team_settings_available_in_business_plan") : void 0,
                            ctaAction: y,
                            ctaLabel: h,
                            isReadOnly: n,
                            label: e("team_settings_restrict_sharing_to_team_title"),
                            helperLabel: e("team_settings_restrict_sharing_to_team_description"),
                            value: r.restrictSharingToTeam,
                            feature: "restrictSharingToTeam",
                            getErrorMessageForKey: (t) =>
                              e("too_many_requests" === t ? jm : "team_settings_restrict_sharing_to_team_generic_error"),
                            constraintsFromOtherFields: {
                              disabledWhen: [
                                {
                                  feature: "allowSharing",
                                  condition: (e) => !e.allowSharing,
                                  warningMessage: e("team_settings_restrict_sharing_to_team_enable_sharing_first")
                                }
                              ]
                            }
                          }
                        ),
                        c.push({ type: "header", label: e("team_settings_header_security") }),
                        m ||
                          c.push({
                            type: "switch",
                            label: e("team_settings_allow_export"),
                            helperLabel: e("team_settings_allow_export_helper"),
                            infoBox: n
                              ? {
                                  title: e("team_settings_allow_export_infobox_title"),
                                  description: e("team_settings_allow_export_infobox_subtitle"),
                                  mood: "brand"
                                }
                              : void 0,
                            value: r.vaultExportEnabled,
                            feature: "vaultExportEnabled",
                            getErrorMessageForKey: (t) => e("too_many_requests" === t ? jm : "_common_generic_error")
                          }),
                        c.push({
                          type: "select",
                          isReadOnly: n,
                          label: e("team_settings_force_auto_logout_after"),
                          helperLabel: e("team_settings_force_auto_logout_after_helper"),
                          value: r.forceAutomaticLogout,
                          feature: "forceAutomaticLogout",
                          options: ["unset", "15", "30", "60"].map((t) => ({
                            label: e("team_settings_force_auto_logout_after_" + t),
                            value: t
                          })),
                          getErrorMessageForKey: (t) =>
                            e("too_many_requests" === t ? jm : "team_settings_force_auto_logout_after_save_error_msg_generic_error")
                        }),
                        c.push({
                          type: "switch",
                          isReadOnly: n,
                          label: e("team_settings_lock_on_exit"),
                          helperLabel: e("team_settings_lock_on_exit_helper"),
                          value: r.lockOnExit,
                          feature: "lockOnExit",
                          getErrorMessageForKey: (t) => e("too_many_requests" === t ? jm : Rm)
                        }),
                        c.push({
                          type: "switch",
                          isReadOnly: n,
                          label: e("team_settings_collect_sensitive_data_audit_logs_enabled"),
                          helperLabel: e(
                            m
                              ? "team_settings_collect_sensitive_data_audit_logs_enabled_helper"
                              : "team_settings_collect_sensitive_data_audit_logs_enabled_helper_without_space"
                          ),
                          value: r.collectSensitiveDataAuditLogsEnabled,
                          feature: "collectSensitiveDataAuditLogsEnabled",
                          getErrorMessageForKey: (t) => e("too_many_requests" === t ? jm : Rm)
                        }),
                        c.push({
                          type: "select",
                          label: e("team_settings_force_crypto_payload_label"),
                          isReadOnly: n,
                          helperLabel: e("team_settings_force_crypto_payload_helper"),
                          value: r.cryptoForcedPayload,
                          feature: "cryptoForcedPayload",
                          options: [
                            { label: e("team_settings_force_crypto_payload_option_disabled"), value: "" },
                            {
                              label: e("team_settings_force_crypto_payload_option_argon2"),
                              value: "$1$argon2d$16$3$32768$2$aes256$cbchmac$16$"
                            },
                            {
                              label: e("team_settings_force_crypto_payload_option_pbkdf2_advanced"),
                              value: "$1$pbkdf2$16$200000$sha256$aes256$cbchmac$16$"
                            },
                            { label: e("team_settings_force_crypto_payload_option_pbkdf2_standard"), value: "KWC3", disabled: !0 }
                          ],
                          getErrorMessageForKey: (t) =>
                            e("too_many_requests" === t ? jm : "team_settings_force_crypto_payload_save_error_msg_generic_error")
                        }),
                        c.push(km(t, e, r, l)),
                        c.push({
                          type: "switch",
                          isReadOnly: n,
                          label: e("team_settings_enforce_2fa"),
                          helperLabel: e("team_settings_enforce_2fa_helper"),
                          infoBox: {
                            title: e("team_settings_generate_recovery_codes_infobox_title"),
                            description: e.markup("team_settings_generate_recovery_codes_infobox_description_markup")
                          },
                          value: r.enforce2FA,
                          feature: "enforce2FA",
                          confirmEnable: {
                            title: e("team_settings_enforce_2fa_confirm_enable_title"),
                            label: e("team_settings_enforce_2fa_confirm_enable_helper2"),
                            dismiss: e("team_settings_enforce_2fa_confirm_enable_dismiss"),
                            confirm: e("team_settings_enforce_2fa_confirm_enable_confirm")
                          },
                          getErrorMessageForKey: (t) =>
                            e("too_many_requests" === t ? jm : "team_settings_enforce_2fa_save_error_msg_generic_error")
                        }),
                        c
                      );
                    })(a, s, r, c, d, S, t)).map((e) =>
                      (0, l.tZ)(sp, { key: e.label, checkForAuthenticationError: x, policies: p, editSettings: b, settingRow: e })
                    )
                  : null
              ))
            : ip || (ip = (0, l.tZ)(yr.a, null));
          var S;
        }, ke.POLICIES),
        Tb = Po(() => {
          var e, t;
          const { path: a } = (0, i.$B)(),
            { esConfig: s, esConfigLoading: o } = mg(),
            { teamDeviceConfig: r } = cy({ draft: !1, deviceAccessKey: s?.deviceAccessKey }),
            { teamId: u } = (0, lr.fV)(),
            { teamSettings: _ = {}, teamSettingsLoading: m, updateTeamSettings: p, teamCapabilities: g } = $c(u),
            y = (0, L.B)(),
            { initSsoProvisioning: h } = (0, $e.u)(rp.y),
            { data: b } = (0, d.k)(rp.y, "ssoProvisioning"),
            { data: x, status: S } = (0, d.k)(Sb.m, "scimConfiguration");
          (0, n.useEffect)(() => {
            b?.global.inferredSsoState === pp.s5.enum.Unknown && u && h({ teamId: `${u}` });
          }, [h, b?.global.inferredSsoState, u]);
          const v = !m && _.activeDirectorySyncType,
            f = r?.configProperties.scimEnabled,
            C = null != (e = g?.activeDirectorySync.enabled) ? e : null,
            Z = (f && !v) || !C,
            E = b?.global.inferredSsoState === pp.s5.enum.NitroIncomplete || (v && !f),
            D = m || o || !y || b?.global.inferredSsoState === pp.s5.enum.Unknown || S === se.rq.Loading,
            T = [pp.s5.enum.SsoConnectorComplete, pp.s5.enum.SsoConnectorIncomplete],
            N = b?.global.inferredSsoState && T.includes(b?.global.inferredSsoState);
          return (0, l.tZ)(
            c.T5p,
            { gridTemplateColumns: "auto", gridTemplateRows: "auto 1fr", fullWidth: !0, sx: { height: "100%" } },
            D
              ? (0, l.tZ)(c.T5p, { justifyItems: "center" }, (0, l.tZ)(l.ZX, { size: 75, sx: { marginTop: "20vh" } }))
              : (0, l.tZ)(
                  i.rs,
                  null,
                  (0, l.tZ)(i.Vy, {
                    exact: !0,
                    path: a,
                    component: xb,
                    permission: (e) => e.adminAccess.hasFullAccess || e.adminAccess.hasBillingAccess,
                    additionalProps: {
                      ssoState: b?.global.inferredSsoState,
                      isAdSyncEnabled: v,
                      isSelfhostedScimEnabled: f,
                      isNitroSCIMEnabled: x?.active,
                      isLoading: D
                    }
                  }),
                  (0, l.tZ)(i.Vy, {
                    exact: !0,
                    path: `${a}/confidential-scim`,
                    component: Eb,
                    permission: (e) => e.adminAccess.hasFullAccess || e.adminAccess.hasBillingAccess
                  }),
                  (0, l.tZ)(i.Vy, {
                    path: `${a}/scim-provisioning`,
                    component: mb,
                    additionalProps: {
                      isScimEnabled: null != f ? f : null,
                      isScimCapable: null != (t = g?.scim.enabled) ? t : null,
                      teamSettings: _,
                      updateTeamSettings: p,
                      disableForm: E,
                      adSyncEnabled: v,
                      ssoConnectorSetup: N
                    },
                    permission: (e) => e.adminAccess.hasFullAccess || e.adminAccess.hasBillingAccess
                  }),
                  (0, l.tZ)(i.Vy, {
                    path: `${a}/active-directory`,
                    component: Fh,
                    additionalProps: {
                      isAdSyncCapable: C,
                      teamSettingsLoading: m,
                      teamSettings: _,
                      updateTeamSettings: p,
                      disableForm: Z,
                      adSyncEnabled: v,
                      accountInfo: y
                    },
                    reducer: Rh.ZP
                  })
                )
          );
        }, ke.DIRECTORY_SYNC),
        Nb = Po((e) => {
          const { translate: t } = (0, g.Z)(),
            { reportTACError: a } = H(),
            s = n.useRef(null),
            [i, o] = n.useState(!0),
            [r, l] = n.useState(!1),
            [c, d] = n.useState(!1),
            [u, _] = n.useState(!1),
            [m, p] = n.useState(!1),
            [y, h] = n.useState(!1),
            [b, x] = n.useState(!1),
            [S, v] = n.useState(!1),
            [f, C] = n.useState(null),
            [Z, E] = n.useState(!1),
            [D, T] = n.useState(null),
            N = e.lee.apiMiddleware.teamPlans
              ? e.lee.apiMiddleware.teamPlans
              : (a(new Error("teamPlans service not set in apiMiddleware")), null),
            M = e.lee.apiMiddleware.strongAuth
              ? e.lee.apiMiddleware.strongAuth
              : (a(new Error("strongAuth service not set in apiMiddleware")), null);
          return (
            n.useEffect(() => {
              (async () => {
                try {
                  const {
                    teamInfo: { duo: t, duoIntegrationKey: a, duoSecretKey: n, duoApiHostname: s }
                  } = await qc();
                  e.lee.dispatch(gm.k0({ duo: t, duoIntegrationKey: a, duoSecretKey: n, duoApiHostname: s })), o(!1);
                } catch (e) {
                  console.error(`DuoSettings: fetchData failed with error: ${e}`);
                }
              })();
            }, []),
            n.createElement(
              xm,
              { title: t(Zm) },
              n.createElement("p", { className: ym.settingsHeader }, t(Zm)),
              n.createElement(
                Kl,
                { label: t("team_settings_duo_enable_label"), labelHelper: t("team_settings_duo_enable_helper") },
                n.createElement(Sm.Z, {
                  genericErrorMessage: t("_common_generic_error"),
                  isDisabled: i || r,
                  saveValueFunction: () => {
                    const t = !e.lee.state.hasDuo;
                    return (
                      l(!0),
                      e.lee.dispatch(gm.FC(t)),
                      N?.setSettings({ duo: t })
                        .then(() => l(!1))
                        .catch(() => {})
                    );
                  },
                  value: e.lee.state.hasDuo
                })
              ),
              n.createElement("p", { className: ym.settingsHeader }, t("team_settings_duo_header_setup")),
              n.createElement(
                Kl,
                { label: t("team_settings_duo_integration_key_label"), labelHelper: t("team_settings_duo_integration_key_helper") },
                n.createElement(wd.n, {
                  containerStyle: { width: "300px" },
                  inputStyle: { minHeight: 42 },
                  defaultValue: e.lee.state.duoIntegrationKey,
                  isDisabled: c,
                  onBlur: (t) => {
                    if (c) return;
                    const a = t.target.value;
                    e.lee.dispatch(gm.a2(a)),
                      d(!0),
                      _(!1),
                      N &&
                        N.setSettings({ duoIntegrationKey: a })
                          .then(() => {
                            d(!1);
                          })
                          .catch(() => {});
                  },
                  onFocus: () => _(!0),
                  placeholder: t("team_settings_duo_integration_key_hint")
                }),
                u || c
                  ? n.createElement(
                      "div",
                      null,
                      n.createElement(Md.Z, { label: t("team_settings_duo_integration_key_button"), loading: c })
                    )
                  : null
              ),
              n.createElement(
                Kl,
                { label: t("team_settings_duo_secret_key_label"), labelHelper: t("team_settings_duo_secret_key_helper") },
                n.createElement(wd.n, {
                  containerStyle: { width: "300px" },
                  inputStyle: { minHeight: 42 },
                  defaultValue: e.lee.state.duoSecretKey,
                  isDisabled: m,
                  onBlur: ((t) => {
                    if (m) return;
                    const a = t.target.value;
                    e.lee.dispatch(gm.E4(a)),
                      p(!0),
                      h(!1),
                      N &&
                        N.setSettings({ duoSecretKey: a })
                          .then(() => {
                            p(!1);
                          })
                          .catch(() => {});
                  }).bind(void 0),
                  onFocus: () => h(!0),
                  placeholder: t("team_settings_duo_secret_key_hint")
                }),
                y || m
                  ? n.createElement("div", null, n.createElement(Md.Z, { label: t("team_settings_duo_secret_key_button"), loading: m }))
                  : null
              ),
              n.createElement(
                Kl,
                { label: t("team_settings_duo_api_host_label"), labelHelper: t("team_settings_duo_api_host_helper") },
                n.createElement(wd.n, {
                  containerStyle: { width: "300px" },
                  inputStyle: { minHeight: 42 },
                  defaultValue: e.lee.state.duoApiHostname,
                  isDisabled: b,
                  onBlur: ((t) => {
                    if (b) return;
                    const a = t.target.value;
                    e.lee.dispatch(gm.qf(a)),
                      x(!0),
                      v(!1),
                      N &&
                        N.setSettings({ duoApiHostname: a })
                          .then(() => {
                            x(!1);
                          })
                          .catch(() => {});
                  }).bind(void 0),
                  onFocus: () => v(!0),
                  placeholder: t("team_settings_duo_api_host_hint")
                }),
                S || b
                  ? n.createElement("div", null, n.createElement(Md.Z, { label: t("team_settings_duo_api_host_button"), loading: b }))
                  : null
              ),
              n.createElement("p", { className: ym.settingsHeader }, t("team_settings_duo_header_directory")),
              n.createElement(
                Kl,
                {
                  label: t("team_settings_duo_upload_csv_label"),
                  labelHelper: n.createElement(
                    "ol",
                    { className: Cm.uploadCsvLabel },
                    n.createElement("li", null, t("team_settings_duo_upload_csv_helper_step_one")),
                    n.createElement("li", null, t("team_settings_duo_upload_csv_helper_step_two")),
                    n.createElement("li", null, t("team_settings_duo_upload_csv_helper_step_three"))
                  )
                },
                n.createElement(
                  "div",
                  { className: Cm.fileContainer },
                  n.createElement(
                    "div",
                    { className: Cm.file },
                    n.createElement("span", { className: Cm.fileIcon }),
                    n.createElement(
                      "div",
                      { className: Cm.fileTitle },
                      D
                        ? [
                            n.createElement("div", { key: "header", className: Cm.fileTitleHeader }, D),
                            n.createElement(
                              "div",
                              { key: "progress", className: Cm.fileProgressBackground },
                              n.createElement("div", { className: Z ? Cm.fileProgressComplete : Cm.fileProgress })
                            ),
                            n.createElement(
                              "p",
                              {
                                key: "hint",
                                className: [Cm.fileTitleHint, Z && f ? Cm.fileTitleHintError : Cm.fileTitleHintSuccess].join(" ")
                              },
                              t(
                                Z
                                  ? f
                                    ? "team_settings_duo_upload_csv_feedback_error"
                                    : "team_settings_duo_upload_csv_feedback_success"
                                  : "team_settings_duo_upload_csv_feedback_progress"
                              )
                            )
                          ]
                        : [n.createElement("div", { key: "header", className: Cm.fileTitleHeader }, "duo_usernames.csv")]
                    )
                  ),
                  n.createElement(
                    "div",
                    { className: Cm.fileButtons },
                    n.createElement("input", {
                      type: "file",
                      id: "file",
                      accept: "text/csv, text/plain, .csv",
                      ref: s,
                      style: { display: "none" },
                      onChange: (() => {
                        var e;
                        D && T(null);
                        const t = null != (e = s.current?.files?.[0]) ? e : { name: "" };
                        T(t.name),
                          M &&
                            M.uploadDuoCsv(t)
                              .then(() => {
                                E(!0), setTimeout(() => T(null), 2e3);
                              })
                              .catch((e) => {
                                C(e.code.toLowerCase()), E(!0);
                              });
                      }).bind(void 0)
                    }),
                    n.createElement(vm.Z, {
                      label: t("team_settings_duo_upload_csv_button_upload"),
                      onClick: (() => {
                        s.current?.click();
                      }).bind(void 0)
                    }),
                    n.createElement(fm, {
                      data: { login: e.lee.globalState.user.session.login, uki: e.lee.globalState.user.session.uki },
                      label: t("team_settings_duo_upload_csv_button_download"),
                      style: { marginLeft: "16px" },
                      targetUri: "https://ws1.dashlane.com/3/strongauth/exportDuoUsernames"
                    })
                  ),
                  f
                    ? n.createElement(
                        "div",
                        { className: Cm.fileError },
                        n.createElement(
                          "div",
                          { className: Cm.fileErrorTitle },
                          n.createElement("span", { className: Cm.fileErrorTitleIcon }, "!"),
                          t("team_settings_duo_upload_csv_error_title")
                        ),
                        n.createElement("p", { className: Cm.fileErrorContent }, t(`team_settings_duo_upload_csv_error_${f}`))
                      )
                    : null
                )
              )
            )
          );
        }, ke.DUO),
        Mb = Po((e) => {
          const [t, a] = (0, n.useState)(!1),
            [i, r] = (0, n.useState)(!1),
            [d, u] = (0, n.useState)(!1),
            [_, m] = (0, n.useState)(!1),
            [p, y] = (0, n.useState)(""),
            [h, b] = (0, n.useState)(!1),
            { translate: x } = (0, g.Z)(),
            { reportTACError: S } = H(),
            v = (0, yd.U)(),
            { status: f, data: Z } = wo(),
            { showToast: E } = (0, l.pm)();
          if (
            ((0, n.useEffect)(() => {
              null !== v &&
                ((0, P.Nc)(o.PageView.TacSettingsAccountRecovery),
                (async () => {
                  if ((a(!0), (0, Nn.v0)(e.lee.globalState)))
                    try {
                      const t = Z?.recoveryEnabled;
                      e.lee.dispatch(Dm.x({ recoveryEnabled: t }));
                      const a = await (async () => {
                        const t = (0, Nn.v0)(e.lee.globalState);
                        if (t && t.teamId) {
                          const e = await (0, cs.mP)({ teamId: t.teamId });
                          return Boolean(e.length);
                        }
                        return S(new Error(ls.N)), !1;
                      })();
                      m(a);
                    } catch (e) {
                      console.error(e);
                    } finally {
                      a(!1);
                    }
                  else S(new Error(ls.N));
                })());
            }, [v, Z]),
            f !== se.rq.Success || !Z)
          )
            return null;
          const D = async (t) => {
              a(!0);
              const n = (0, C.ev)(e.lee.globalState);
              if (n)
                try {
                  await (0, cs.jy)({ teamId: n, settings: { recoveryEnabled: t } }),
                    e.lee.dispatch(Dm.Zn(t)),
                    E({
                      id: "toggleRecovery",
                      description: x(
                        t
                          ? "team_settings_master_password_policies_dialog_alert_label_available"
                          : "team_settings_master_password_policies_dialog_alert_label_unavailable"
                      ),
                      action: {
                        label: x("common_alert_undo_action"),
                        onClick: () => {
                          D(!t);
                        }
                      }
                    }),
                    a(!1);
                } catch (e) {
                  a(!1);
                }
              else S(new Error(ls.N));
            },
            T = async () => {
              u((e) => !e);
            },
            N = async () => {
              r(!0);
              const t = await (0, cs.RR)({ masterPassword: p });
              r(!1), t ? (await Promise.all([T(), D(!e.lee.state.recoveryEnabled)]), y(""), b(!1)) : b(!0);
            },
            M = _ && e.lee.state.recoveryEnabled;
          return (0, B.tZ)(
            xm,
            { title: x("team_settings_menu_title_account_recovery") },
            (0, B.tZ)(
              "div",
              null,
              (0, B.tZ)(
                "div",
                { sx: { position: "relative" } },
                (0, B.tZ)(
                  c.nvN,
                  { size: "large", as: "h3", sx: { fontWeight: 600, marginBottom: "8px", color: "ds.text.neutral.catchy" } },
                  x("team_settings_master_password_policies_settings_recover_label")
                ),
                (0, B.tZ)(
                  c.nvN,
                  { sx: { fontSize: 14, marginBottom: "40px", paddingRight: "80px" } },
                  x("team_settings_master_password_policies_settings_recover_label_helper")
                ),
                (0, B.tZ)(l.ZD, {
                  sx: { position: "absolute", top: 0, right: 0 },
                  disabled: t || M,
                  readOnly: !!v,
                  tooltip: v ? x("team_settings_master_password_policies_settings_recovery_blocked_discontinued") : void 0,
                  checked: e.lee.state.recoveryEnabled,
                  onChange: T
                })
              ),
              (0, B.tZ)(
                c.nvN,
                { size: "large", as: "h3", sx: { fontWeight: 600, marginBottom: "24px", color: "ds.text.neutral.catchy" } },
                x("team_settings_master_password_policies_settings_how_it_works_label")
              ),
              Mm || (Mm = (0, B.tZ)(Nm, null)),
              (0, B.tZ)(
                c.nvN,
                { sx: { fontSize: 14, lineHeight: "20px", marginBottom: "4px", color: "ds.text.neutral.quiet" } },
                x("team_settings_master_password_policies_settings_how_it_works_label_helper")
              ),
              (0, B.tZ)(
                c.rUS,
                {
                  sx: {
                    fontSize: 14,
                    fontWeight: 500,
                    lineHeight: "20px",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    color: "ds.text.brand.standard"
                  },
                  href: s.WW
                },
                (0, B.tZ)(c.Ejs, { as: "span" }, x("team_settings_master_password_policies_settings_how_it_works_label_helper_link_text")),
                Im || (Im = (0, B.tZ)(l.JO, { name: "ActionOpenExternalLinkOutlined", size: "small", color: "ds.text.brand.standard" }))
              )
            ),
            (0, B.tZ)(
              Em.Z,
              {
                isOpen: d,
                title: e.lee.state.recoveryEnabled
                  ? x("team_settings_master_password_policies_dialog_title_disable")
                  : x("team_settings_master_password_policies_dialog_title_enable"),
                labelDismiss: x("team_settings_master_password_policies_dialog_cta_cancel_label"),
                labelConfirm: e.lee.state.recoveryEnabled
                  ? x("team_settings_master_password_policies_dialog_cta_confirm_label_disable")
                  : x("team_settings_master_password_policies_dialog_cta_confirm_label_enable"),
                onDismiss: () => {
                  y(""), b(!1), u(!1);
                },
                onConfirm: () => N(),
                ctaIsDisabled: i || !p,
                onChange: (e) => {
                  y(e.target.value), b(!1);
                },
                isMasterPasswordInvalid: h,
                onKeyDown: (e) => {
                  (async (e) => {
                    13 === e.keyCode && p && (await N());
                  })(e);
                }
              },
              e.lee.state.recoveryEnabled &&
                (0, B.tZ)(
                  "div",
                  null,
                  (0, B.tZ)(
                    "p",
                    { className: ym.confirmationContent },
                    x.markup("team_settings_master_password_policies_confirmation_dialog_disable_label_markup")
                  ),
                  (0, B.tZ)(
                    "p",
                    { className: ym.confirmationContent },
                    x("team_settings_master_password_policies_confirmation_dialog_disable_sublabel")
                  )
                ),
              !e.lee.state.recoveryEnabled &&
                (0, B.tZ)(
                  "div",
                  null,
                  (0, B.tZ)(
                    "p",
                    { className: ym.confirmationContent },
                    x.markup("team_settings_master_password_policies_confirmation_dialog_enable_label_markup", {}, { linkTarget: "_blank" })
                  ),
                  (0, B.tZ)(
                    "p",
                    { className: ym.confirmationContent },
                    x("team_settings_master_password_policies_confirmation_dialog_enable_sublabel")
                  )
                )
            )
          );
        }, ke.ACCOUNT_RECOVERY),
        Ib = Po(({ lee: e }) => {
          var t;
          const a = (0, i.$B)(),
            { teamId: s } = (0, lr.fV)(),
            [o, r] = (0, n.useState)(!1),
            [l, c] = (0, n.useState)(""),
            { initSsoProvisioning: u } = (0, $e.u)(rp.y),
            { esConfig: m, esConfigLoading: p } = mg(),
            { teamDeviceConfigLoading: g } = cy({ draft: !1, deviceAccessKey: m?.deviceAccessKey }),
            {
              shouldShowBuyOrUpgradePaywall: y,
              isTrialOrGracePeriod: h,
              planType: b
            } = null != (t = Re(e.permission.adminAccess)) ? t : {},
            x = y && (b === _.lD.Starter || b === _.lD.Team),
            S = (0, n.useCallback)(
              async (e) => {
                if (!e) return;
                r(!1), c("");
                const t = await u({ teamId: `${e}` });
                r(!0), (0, lp.hx)(t) && c(t.error.tag);
              },
              [u]
            );
          (0, n.useEffect)(() => {
            S(s);
          }, [S, s]);
          const v = (0, d.k)(rp.y, "ssoProvisioning");
          return l || v.status === se.rq.Error
            ? (0, B.tZ)(Ah, {
                onReloadData: () => {
                  S(s);
                },
                errorTag: l
              })
            : !o || p || g || v.status === se.rq.Loading
            ? Oh || (Oh = (0, B.tZ)(jh, null))
            : (0, B.tZ)(
                i.rs,
                null,
                (0, B.tZ)(i.AW, { path: `${a.path}/self-hosted-sso` }, (0, B.tZ)(By, { backRoute: a.url })),
                (0, B.tZ)(i.AW, { path: `${a.path}/confidential-sso` }, (0, B.tZ)(ug, { backRoute: a.url })),
                (0, B.tZ)(i.AW, { path: `${a.path}${zh}` }, (0, B.tZ)(Ih, { isTrialOrGracePeriod: null != h && h })),
                (0, B.tZ)(i.AW, { path: `${a.path}/sso-connector` }, (0, B.tZ)(ch, { lee: e })),
                (0, B.tZ)(
                  i.AW,
                  { exact: !0, path: a.path },
                  x ? (0, B.tZ)(i.l_, { to: `${a.path}${zh}` }) : Lh || (Lh = (0, B.tZ)(fh, null))
                )
              );
        }, ke.SSO);
      function wb({ path: e }) {
        return n.createElement(
          i.GB,
          { path: e, permission: (e) => e.adminAccess.hasFullAccess },
          n.createElement(
            i.rs,
            null,
            n.createElement(i.l_, { exact: !0, from: e, to: `${e}${s.B9.POLICIES}` }),
            n.createElement(i.Vy, { path: `${e}${s.B9.POLICIES}`, component: Db }),
            n.createElement(i.Vy, { path: `${e}${s.B9.DIRECTORY_SYNC}`, component: Tb }),
            n.createElement(i.Vy, { path: `${e}${s.B9.DUO}`, component: Nb, reducer: gm.ZP }),
            n.createElement(i.Vy, { path: `${e}${s.B9.MASTER_PASSWORD_POLICIES}`, component: Mb, reducer: Dm.ZP }),
            n.createElement(i.Vy, { path: `${e}${s.B9.SSO}`, component: Ib })
          )
        );
      }
      var kb,
        Ab,
        Ob,
        Lb,
        zb,
        jb,
        Rb,
        Pb = a(897078),
        Ub = a(57904),
        Bb = a(633272),
        Gb = a(109215),
        Fb = a(672153),
        qb = a(55961),
        $b = a(470180);
      const Vb = ({ title: e, content: t, ctaText: a, ctaAction: n, buttonIcon: s }) =>
          (0, l.tZ)(
            c.Ejs,
            { flexDirection: "column", gap: 4 },
            (0, l.tZ)(l.X6, { as: "h1" }, e),
            (0, l.tZ)(l.nv, null, t),
            (0, l.tZ)(
              l.zx,
              {
                onClick: n,
                sx: { marginTop: "16px" },
                size: "small",
                mood: "neutral",
                intensity: "quiet",
                layout: s ? "iconTrailing" : "labelOnly",
                icon: s
              },
              a
            )
          ),
        Wb = ({ setContactSupportDialogIsOpen: e }) => {
          const { translate: t } = (0, g.Z)(),
            a = (0, i.Xo)(),
            s = (0, i.k6)(),
            o = [
              (0, l.tZ)(Vb, {
                key: "accessGuides",
                title: t("team_get_started_help_access_guide_title"),
                content: t("team_get_started_help_access_guide_content"),
                ctaText: t("team_get_started_help_access_guide_cta"),
                ctaAction: () => {
                  (0, j.Yo)(ce.EL);
                },
                buttonIcon: kb || (kb = (0, l.tZ)(l.JO, { name: "ActionOpenExternalLinkOutlined" }))
              }),
              (0, l.tZ)(Vb, {
                key: "customize",
                title: t("team_get_started_help_customize_title"),
                content: t("team_get_started_help_customize_content"),
                ctaText: t("team_get_started_help_customize_cta"),
                ctaAction: () => {
                  s.push(a.routes.teamSettingsRoutePath);
                }
              }),
              (0, l.tZ)(Vb, {
                key: "activity",
                title: t("team_get_started_help_activity_title"),
                content: t("team_get_started_help_activity_content"),
                ctaText: t("team_get_started_help_activity_cta"),
                ctaAction: () => {
                  s.push(a.routes.teamActivityRoutePath);
                }
              }),
              (0, l.tZ)(Vb, {
                key: "deploy",
                title: t("team_get_started_help_deploy_title"),
                content: t("team_get_started_help_deploy_content"),
                ctaText: t("team_get_started_help_deploy_cta"),
                ctaAction: () => {
                  (0, j.Yo)("https://support.dashlane.com/hc/articles/360012482199-Dashlane-deployment-guide-for-admins#invite_members");
                },
                buttonIcon: Ab || (Ab = (0, l.tZ)(l.JO, { name: "ActionOpenExternalLinkOutlined" }))
              }),
              (0, l.tZ)(
                c.Ejs,
                { key: "moreHelp", flexDirection: "column", gap: 4, justifyContent: "start" },
                (0, l.tZ)(l.X6, { as: "h1" }, t("team_get_started_help_more_title")),
                (0, l.tZ)(
                  l.zx,
                  {
                    size: "small",
                    mood: "brand",
                    sx: { textAlign: "left" },
                    intensity: "supershy",
                    layout: "iconTrailing",
                    icon: Ob || (Ob = (0, l.tZ)(l.JO, { name: "ActionOpenExternalLinkOutlined" })),
                    onClick: () => (0, j.Yo)(ce.EL)
                  },
                  t("team_get_started_help_visit_help_center")
                ),
                (0, l.tZ)(
                  l.zx,
                  {
                    size: "small",
                    mood: "brand",
                    sx: { textAlign: "left" },
                    intensity: "supershy",
                    layout: "iconTrailing",
                    icon: Lb || (Lb = (0, l.tZ)(l.JO, { name: "ActionOpenExternalLinkOutlined" })),
                    onClick: () => (0, j.Yo)(ce.VH)
                  },
                  t("team_get_started_help_visit_help_resources")
                ),
                (0, l.tZ)(
                  l.zx,
                  {
                    size: "small",
                    mood: "brand",
                    sx: { textAlign: "left" },
                    intensity: "supershy",
                    layout: "iconTrailing",
                    icon: zb || (zb = (0, l.tZ)(l.JO, { name: "ActionOpenExternalLinkOutlined" })),
                    onClick: () => e(!0)
                  },
                  t("team_get_started_help_visit_help_contact_support")
                )
              )
            ],
            [r, d] = (0, n.useState)(0),
            u = o.length;
          return (0, l.tZ)(
            c.Zbd,
            {
              sx: {
                padding: "32px",
                backgroundColor: "ds.container.agnostic.neutral.supershy",
                borderColor: "ds.border.neutral.quiet.idle",
                maxWidth: "480px",
                minWidth: "320px"
              }
            },
            (0, l.tZ)(
              c.Ejs,
              {
                alignItems: "center",
                sx: { marginBottom: "16px" },
                flexDirection: "row",
                flexWrap: "nowrap",
                justifyContent: "space-between"
              },
              (0, l.tZ)(l.nv, { color: "ds.text.neutral.quiet" }, r + 1, "/", u),
              (0, l.tZ)(
                c.Ejs,
                { gap: 4 },
                (0, l.tZ)(l.zx, {
                  "aria-label": t("_common_action_back"),
                  onClick: () => {
                    d((e) => (e - 1 < 0 ? u - 1 : (e - 1) % u));
                  },
                  mood: "neutral",
                  intensity: "supershy",
                  icon: jb || (jb = (0, l.tZ)(l.JO, { name: "CaretLeftOutlined" })),
                  layout: "iconOnly"
                }),
                (0, l.tZ)(l.zx, {
                  "aria-label": t("_common_action_continue"),
                  onClick: () => {
                    d((e) => (e + 1) % u);
                  },
                  mood: "neutral",
                  intensity: "supershy",
                  icon: Rb || (Rb = (0, l.tZ)(l.JO, { name: "CaretRightOutlined" })),
                  layout: "iconOnly"
                })
              )
            ),
            o[r]
          );
        },
        Hb = ({ isOpen: e, setIsOpen: t }) => {
          const { translate: a } = (0, g.Z)(),
            n = (0, i.k6)(),
            { setAsInteracted: s } = (0, we.d)(Me.O.TacGetStartedDismissPage),
            r = (0, i.Xo)();
          return (0, l.tZ)(
            q.o,
            {
              title: a("team_get_started_close_page_title"),
              isOpen: e,
              onRequestClose: () => {
                (0, P.Kz)(
                  new o.UserCallToActionEvent({ callToActionList: [o.CallToAction.Cancel, o.CallToAction.Confirm], hasChosenNoAction: !0 })
                ),
                  t(!1);
              },
              footer: (0, l.tZ)(
                c.cNS,
                null,
                (0, l.tZ)(
                  l.zx,
                  {
                    sx: { mr: "12px" },
                    mood: "neutral",
                    intensity: "quiet",
                    onClick: () => {
                      (0, P.Kz)(
                        new o.UserCallToActionEvent({
                          callToActionList: [o.CallToAction.Cancel, o.CallToAction.Confirm],
                          chosenAction: o.CallToAction.Cancel,
                          hasChosenNoAction: !1
                        })
                      ),
                        t(!1);
                    }
                  },
                  a("_common_action_cancel")
                ),
                (0, l.tZ)(
                  l.zx,
                  {
                    mood: "danger",
                    intensity: "catchy",
                    onClick: () => {
                      (0, P.Kz)(
                        new o.UserCallToActionEvent({
                          callToActionList: [o.CallToAction.Cancel, o.CallToAction.Confirm],
                          chosenAction: o.CallToAction.Confirm,
                          hasChosenNoAction: !1
                        })
                      ),
                        s(),
                        n.push(r.routes.teamDashboardRoutePath);
                    }
                  },
                  a("team_get_started_close_page_cta")
                )
              )
            },
            a("team_get_started_close_page_content")
          );
        },
        Kb = ({ allTasksCompleted: e }) => {
          const { translate: t } = (0, g.Z)(),
            a = cn();
          return a
            ? (0, l.tZ)(
                c.Ejs,
                { flexDirection: "column", gap: "8px" },
                (0, l.tZ)(
                  l.nv,
                  { textStyle: "ds.specialty.brand.small", sx: { fontWeight: "700" } },
                  t(e ? "team_get_started_title_tasks_completed" : "team_get_started_welcome_title")
                ),
                (0, l.tZ)(l.nv, { color: "ds.text.neutral.quiet" }, e ? null : t("team_get_started_welcome_subtitle", { team: a }))
              )
            : null;
        },
        Yb = a.p + "b86402fcddc7bfe6ab1b.png";
      var Qb;
      const Xb = a.p + "f2c931634a3b982f7f78.png";
      var Jb;
      var ex;
      var tx;
      var ax;
      var nx,
        sx = a(29267);
      const ix = {
          [Fb.G.CREATE_ACCOUNT]: ({ isUpNext: e }) =>
            n.createElement(du, {
              isUpNext: e,
              upNextImage: Jb || (Jb = n.createElement("img", { alt: "", src: Xb })),
              isCompleted: !0,
              title: "team_get_started_create_account_title",
              content: "team_get_started_create_account_content",
              helpDocLink: "",
              ctaOnClick: () => {},
              ctaText: "team_get_started_visit_vault_cta"
            }),
          [Fb.G.VISIT_VAULT]: ({ isCompleted: e, isUpNext: t }) => {
            const { setIsVaultNavigationModalOpen: a, setOnBeforeNavigateCallback: s } = (0, n.useContext)(ve),
              { markVaultAsVisited: i } = (0, qb.V)();
            return n.createElement(du, {
              isUpNext: t,
              upNextImage: nx || (nx = n.createElement("img", { alt: "", src: uu })),
              isCompleted: e,
              title: "team_get_started_visit_vault_title",
              content: "team_get_started_visit_vault_content",
              helpDocLink: "https://support.dashlane.com/hc/en-us/articles/115004367629",
              ctaOnClick: () => {
                (0, P.Kz)(new o.UserClickEvent({ button: o.Button.OpenVault })), (0, j.nL)(ce.F1), i(), (0, sx.c)(sx.O.VisitVault);
              },
              ctaText: "team_get_started_visit_vault_cta",
              infoBoxText: "team_get_started_visit_vault_infobox"
            });
          },
          [Fb.G.INVITE_MEMBERS]: ({ isCompleted: e, isUpNext: t }) => {
            const a = (0, i.Xo)(),
              s = (0, i.k6)();
            return n.createElement(du, {
              isUpNext: t,
              upNextImage: tx || (tx = n.createElement("img", { alt: "", src: uu })),
              isCompleted: e,
              title: "team_get_started_invite_title",
              content: "team_get_started_invite_content",
              helpDocLink: "https://support.dashlane.com/hc/en-us/articles/208864325",
              ctaOnClick: () => {
                _u(), s.push({ pathname: a.routes.teamMembersRoutePath, state: { openSendInvitesDialog: !0 } });
              },
              ctaText: "team_get_started_invite_cta",
              infoBoxText: "team_get_started_invite_member_infobox"
            });
          },
          [Fb.G.ASSIGN_ADMIN]: ({ isCompleted: e, isUpNext: t, isCtaDisabled: a }) => {
            const s = (0, i.Xo)(),
              o = (0, i.k6)();
            return n.createElement(du, {
              isUpNext: t,
              upNextImage: mu || (mu = n.createElement("img", { alt: "", src: uu })),
              isCompleted: e,
              isCtaDisabled: a,
              disabledCtaTooltipText: "team_get_started_assign_admin_disabled_tooltip",
              title: "team_get_started_assign_admin_title",
              content: "team_get_started_assign_admin_content",
              helpDocLink: "https://support.dashlane.com/hc/articles/208022229-Manage-Starter-Team-or-Business-plan-members#change-role",
              ctaOnClick: () => {
                _u(), o.push({ pathname: s.routes.teamMembersRoutePath, state: { [pu]: !0 } });
              },
              ctaText: "team_get_started_assign_admin_cta",
              infoBoxText: "team_get_started_assign_admin_infobox"
            });
          },
          [Fb.G.CREATE_SHARING_GROUP]: ({ isCompleted: e, isUpNext: t, isCtaDisabled: a, isDisabled: s }) => {
            const r = (0, i.Xo)(),
              l = (0, i.k6)();
            return n.createElement(du, {
              isUpNext: t,
              upNextImage: ex || (ex = n.createElement("img", { alt: "", src: uu })),
              isDisabled: s,
              disabledText: "team_get_started_sharing_turned_off",
              isCtaDisabled: a,
              disabledCtaTooltipText: "team_get_started_sharing_group_disabled_tooltip",
              isCompleted: e,
              title: "team_get_started_sharing_group_title",
              content: "team_get_started_sharing_group_content",
              helpDocLink: "https://support.dashlane.com/hc/articles/115003949765",
              ctaOnClick: () => {
                (0, P.Kz)(new o.UserClickEvent({ button: o.Button.OpenGroupsPage })), l.push(r.routes.teamGroupsRoutePath);
              },
              ctaText: "team_get_started_sharing_group_cta",
              infoBoxText: "team_get_started_sharing_group_infobox"
            });
          },
          [Fb.G.SHARE_ITEM]: ({ isCompleted: e, isUpNext: t, isCtaDisabled: a, isDisabled: s }) => {
            const r = (0, i.Xo)();
            return n.createElement(du, {
              isUpNext: t,
              upNextImage: ax || (ax = n.createElement("img", { alt: "", src: Xb })),
              isDisabled: s,
              disabledText: "team_get_started_sharing_turned_off",
              isCompleted: e,
              isCtaDisabled: a,
              disabledCtaTooltipText: "team_get_started_sharing_disabled_tooltip",
              title: "team_get_started_sharing_items_title",
              content: "team_get_started_sharing_items_content",
              helpDocLink: "https://support.dashlane.com/hc/en-us/articles/202699021",
              ctaOnClick: () => {
                (0, P.Kz)(new o.UserClickEvent({ button: o.Button.OpenSharingCenter })),
                  (0, j.nL)(`${ce.F1}#${r.routes.userSharingCenter}`);
              },
              ctaText: "team_get_started_sharing_items_cta",
              infoBoxText: "team_get_started_sharing_items_infobox"
            });
          },
          [Fb.G.CHECK_PASSWORD_HEALTH]: ({ isCompleted: e, isUpNext: t, isCtaDisabled: a }) => {
            const s = (0, i.Xo)(),
              r = (0, i.k6)();
            return n.createElement(du, {
              isUpNext: t,
              upNextImage: Qb || (Qb = n.createElement("img", { alt: "", src: Yb })),
              isCompleted: e,
              isCtaDisabled: a,
              title: "team_get_started_password_health_title",
              content: "team_get_started_password_health_content",
              helpDocLink: "https://support.dashlane.com/hc/en-us/articles/360016225300",
              ctaOnClick: () => {
                (0, P.Kz)(new o.UserClickEvent({ button: o.Button.OpenDashboard })), r.push(s.routes.teamDashboardRoutePath);
              },
              ctaText: "team_get_started_password_health_cta",
              disabledCtaTooltipText: "team_get_started_password_health_cta_disabled",
              infoBoxText: "team_get_started_password_health_infobox"
            });
          }
        },
        ox = ({ tasks: e, completed: t, isUpNext: a }) => {
          const { translate: s } = (0, g.Z)();
          if (!e.length) return null;
          const i = a
            ? null
            : (0, l.tZ)(
                l.X6,
                { as: "h2", textStyle: "ds.title.section.medium", sx: { marginTop: "16px", marginBottom: "8px" } },
                s(t ? "team_get_started_completed_tasks_title" : "team_get_started_tasks_title")
              );
          return (0, l.tZ)(
            n.Fragment,
            null,
            i,
            e.map((e) =>
              t === e.isCompleted
                ? (({ key: e, ...t }) => {
                    if (!ix[e]) return null;
                    const a = ix[e];
                    return n.createElement(a, { key: e, ...t });
                  })({ isUpNext: a, ...e })
                : null
            )
          );
        },
        rx = ({ upNextTask: e, toDoTasks: t, completedTasks: a }) =>
          (0, l.tZ)(
            c.Ejs,
            { flexDirection: "column" },
            (0, l.tZ)(ox, { completed: !1, tasks: e ? [e] : [], isUpNext: !0 }),
            (0, l.tZ)(ox, { completed: !1, tasks: t, isUpNext: !1 }),
            (0, l.tZ)(ox, { completed: !0, tasks: a, isUpNext: !1 })
          ),
        lx = ({ openDialog: e, allTasksCompleted: t }) => {
          const { translate: a } = (0, g.Z)();
          return n.createElement(
            c.Ejs,
            {
              sx: { display: "flex", marginTop: t ? "0px" : "40px", marginBottom: t ? "16px" : "80px", alignItems: "center", gap: "16px" }
            },
            n.createElement(l.nv, { color: "ds.text.neutral.quiet" }, a("team_get_started_close_guide")),
            n.createElement(
              l.zx,
              {
                onClick: () => {
                  (0, P.Kz)(new o.UserCompleteTacOnboardingTaskEvent({ onboardingTask: o.OnboardingTask.CloseGuide })), e(!0);
                },
                size: "small",
                mood: "neutral",
                intensity: "quiet"
              },
              a("team_get_started_close_guide_cta")
            )
          );
        };
      var cx;
      function dx(e, t) {
        return !t.adminAccess || t.adminAccess.hasPermissionLevel(e);
      }
      const ux = Po(() => {
          var e, t;
          const a = wt(),
            s = (0, m.s)(),
            { setNavBarChildren: g } = (0, n.useContext)(Nt),
            { data: y, status: b } = (0, d.k)(u.o, "getTeamSeats"),
            [S, f] = (0, n.useState)(0),
            [C, Z] = (0, n.useState)(),
            [E, D] = (0, n.useState)(""),
            [T, N] = (0, n.useState)(!0),
            [M, I] = (0, n.useState)(tn.FORM),
            [w, k] = (0, n.useState)(),
            [A, O] = (0, n.useState)(""),
            { showToast: L } = (0, l.pm)();
          (0, n.useEffect)(() => {
            const e = (0, i.CN)().get("plan");
            a && "business" === e && Z(a.businessOffer);
          }, [a]),
            (0, n.useEffect)(() => {
              "" !== A && L({ mood: "danger", description: A }), O("");
            }, [A]);
          const z = (null != (e = y?.paid) ? e : 0) + (null != (t = y?.extraFree) ? t : 0),
            { logChangePlanEvent: j } = _a({
              selectedOffer: C,
              hasPromo: !1,
              currentSeats: z,
              additionalSeats: S,
              planChangeStep: o.PlanChangeStep.SelectPlanTier
            });
          (0, n.useEffect)(
            () => (
              M === tn.FORM ? g(an || (an = (0, l.tZ)(x, null))) : g(null),
              () => {
                g(null);
              }
            ),
            [M]
          ),
            (0, n.useEffect)(() => {
              const e = (0, i.CN)().get("plan");
              a && "business" === e && Z(a.businessOffer);
            }, [a]);
          const { loading: R, billingCountry: P } = v();
          if (R || b !== r.rq.Success || !y || !s || !a) return nn || (nn = (0, l.tZ)(l.ZX, { mood: "brand" }));
          const U = s.billingType === _.qo.Invoice,
            B = a.businessOffer.currency,
            G = s.spaceTier;
          return (0, l.tZ)(
            c.Ejs,
            { sx: { margin: "45px", width: "1180px" } },
            (0, l.tZ)(
              c.Ejs,
              { flexDirection: "column", gap: "8px" },
              M === tn.FORM
                ? (0, l.tZ)(
                    c.Ejs,
                    { gap: "8px" },
                    (0, l.tZ)(
                      c.k$b,
                      { sx: { width: "646px" } },
                      (0, l.tZ)(
                        c.Ejs,
                        { flexDirection: "column", gap: "8px" },
                        (0, l.tZ)(ea, {
                          teamOffers: a,
                          currentSpaceTier: G,
                          selectedOffer: C,
                          handleSelection: (e) => {
                            j(e), Z(e);
                          }
                        }),
                        U
                          ? sn || (sn = (0, l.tZ)(qa, null))
                          : "US" !== P
                          ? (0, l.tZ)(
                              n.Fragment,
                              null,
                              (0, l.tZ)(p.I, { b2b: !0, hideUpdateButton: !0, styles: { padding: "32px" } }),
                              on || (on = (0, l.tZ)(en, { isInAccountSummary: !1 })),
                              (0, l.tZ)(Ma, { email: E, emailValid: T, setEmail: D, setEmailValid: N })
                            )
                          : (0, l.tZ)(
                              n.Fragment,
                              null,
                              (0, l.tZ)(p.I, { b2b: !0, hideUpdateButton: !0, styles: { padding: "32px" } }),
                              (0, l.tZ)(Ma, { email: E, emailValid: T, setEmail: D, setEmailValid: N })
                            )
                      )
                    ),
                    (0, l.tZ)(
                      c.k$b,
                      { sx: { width: "470px" } },
                      (0, l.tZ)(
                        c.Ejs,
                        { flexDirection: "column", gap: "8px" },
                        (0, l.tZ)(Pa, { teamOffers: a, currentSeats: z }),
                        (0, l.tZ)(Ea, {
                          currentSeats: z,
                          additionalSeats: S,
                          currency: B,
                          selectedOffer: C,
                          email: E,
                          emailValid: T,
                          onSuccess: () => {
                            I(() => tn.SUCCESS);
                          },
                          onError: (e) => {
                            O(e);
                          },
                          setAdditionalSeats: f,
                          setOrderSummaryData: k
                        }),
                        rn || (rn = (0, l.tZ)(Ia, null))
                      )
                    )
                  )
                : null,
              M === tn.SUCCESS && w && C
                ? (0, l.tZ)(
                    c.Ejs,
                    { sx: { display: "flex", flexWrap: "nowrap", gap: "16px" } },
                    (0, l.tZ)(
                      c.Ejs,
                      { sx: { display: "flex", flexGrow: "2", maxWidth: "632px", flexDirection: "column" } },
                      (0, l.tZ)(ja, { targetPlan: jt(C) ? "business" : "team" })
                    ),
                    (0, l.tZ)(
                      c.Ejs,
                      { sx: { display: "flex", flexGrow: "1", gap: "16px", flexDirection: "column" } },
                      (0, l.tZ)(Fa, { currency: B, selectedOffer: C, costData: w }),
                      ln || (ln = (0, l.tZ)(h, null))
                    )
                  )
                : null
            )
          );
        }, Ae.$.CHANGE_PLAN),
        _x = Po(({ lee: e }) => {
          const t = (0, L.B)(),
            a = (0, Ze.JS)(),
            s = (0, ne.C)(),
            i = (0, m.s)(),
            { search: r } = (0, Ue.TH)(),
            [c, d] = (0, n.useState)(zi()),
            [u, p] = (0, n.useState)(!1),
            [g, y] = (0, n.useState)(!1),
            [h, b] = (0, n.useState)(!1),
            [x, S] = (0, n.useState)(!1),
            [v, C] = (0, n.useState)(),
            [Z, E] = (0, n.useState)(),
            D = a.status === se.rq.Success ? a.data.b2bStatus?.currentTeam?.planName : void 0;
          (0, n.useEffect)(() => {
            (0, P.Nc)(o.PageView.TacAccount);
          }, []);
          const T = (e) => {
            "open" === e && (b(!0), y(!1), S(!1)), "close" === e && ((0, P.Nc)(o.PageView.TacAccount), b(!1), S(!1));
          };
          if (
            ((0, n.useEffect)(() => {
              r?.includes("showSeatsDialog") &&
                setTimeout(() => {
                  var e, t, a, n;
                  (0, P.Kz)(
                    new o.UserBuySeatEvent({
                      flowStep: o.FlowStep.Start,
                      hasPromo: !1,
                      initialSeatCount: null != (e = i?.seatsNumber) ? e : 0,
                      priceAmountCents: null != (t = i?.nextBillingDetails.amount) ? t : 0,
                      priceCurrencyCode: o.PriceCurrencyCode[null != (a = i?.nextBillingDetails.currency) ? a : ""],
                      purchasedSeatCount: null != (n = i?.seatsNumber) ? n : 0
                    })
                  ),
                    T("open");
                }, 2e3);
            }, []),
            (0, n.useEffect)(() => {
              const e = (0, f.throttle)(() => {
                const e = zi();
                e && !c ? d(!0) : !e && c && d(!1);
              }, 100);
              return window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
            }, [c]),
            !s || !i || a.status === se.rq.Loading)
          )
            return null;
          const { lastBillingDateUnix: N, nextBillingDetails: M, spaceTier: I, seatsNumber: w, usersToBeRenewedCount: k } = i,
            A = a.status === se.rq.Success && !!a.data.b2bStatus?.currentTeam?.teamMembership.isTeamAdmin,
            { isFreeTrial: O } = s,
            z = (e) => {
              const a = I === _.lD.Team ? "team" : "business",
                n = `${ce.ub}?plan=${a}&subCode=${t?.subscriptionCode}`;
              (0, P.Kz)(new o.UserClickEvent({ button: o.Button.BuyDashlane, clickOrigin: e })), (0, j.Yo)(n);
            },
            R = () => {
              (0, P.Nc)(o.PageView.TacAccountCustomizeInvoice), p(!0);
            },
            U = !(a.status !== se.rq.Success || !a.data) && "invoice" === a.data.planType,
            B = () => {
              U ? y(!0) : T("open");
            };
          return (0, l.tZ)(
            "div",
            { sx: Fn.ACCOUNT_PAGE },
            x
              ? null
              : (0, l.tZ)(
                  n.Fragment,
                  null,
                  (0, l.tZ)($n, {
                    lee: e,
                    onRequestBuyMoreSeats: () => {
                      (0, P.Kz)(
                        new o.UserBuySeatEvent({
                          flowStep: o.FlowStep.Start,
                          hasPromo: !1,
                          initialSeatCount: w,
                          priceAmountCents: M.amount,
                          priceCurrencyCode: o.PriceCurrencyCode[M.currency],
                          purchasedSeatCount: w
                        })
                      ),
                        B();
                    },
                    onRequestTeamUpgrade: z,
                    seatsNumber: w,
                    isWindowCollapsed: c,
                    hasFullAdminAccess: A
                  }),
                  g ? (0, l.tZ)(Xs, { openUpgradeDialog: () => T("open"), handleClose: () => y(!1) }) : null,
                  (0, l.tZ)(Rs, {
                    lee: e,
                    handleGetPastReceipts: R,
                    onRequestTeamUpgrade: () => {
                      O ? z(o.ClickOrigin.BillingInformation) : B();
                    },
                    planName: D,
                    usersToBeRenewedCount: k,
                    isWindowCollapsed: c
                  })
                ),
            h
              ? (0, l.tZ)(Ei, {
                  key: N,
                  nextBillingDetails: M,
                  numberOfCurrentPaidSlots: w,
                  numberOfCurrentUsedSlots: k,
                  onUpgradeSuccess: (e, t) => {
                    C(e), E(t), b(!1), S(!0);
                  },
                  onRequestClose: () => T("close"),
                  planTier: I
                })
              : null,
            (0, l.tZ)(Us, {
              lee: e,
              onClose: () => {
                (0, P.Nc)(o.PageView.TacAccount), p(!1);
              },
              isOpen: u
            }),
            x && v && Z
              ? (0, l.tZ)(Li, {
                  planTier: I,
                  lastAdditionalSeatsDetails: v,
                  lastBillingDetails: Z,
                  onGetPastReceipts: R,
                  onNavigateBack: () => {
                    S(!1), C(void 0), E(void 0);
                  }
                })
              : null
          );
        }, Ae.$.ACCOUNT),
        mx = Po(() => {
          const { translate: e } = (0, g.Z)(),
            [t, a] = (0, n.useState)(!1),
            [s, i] = (0, n.useState)(!1),
            { isLoading: u, tasks: _ } = (() => {
              const { hasSharedGroupWithMembers: e = !1, status: t } = (0, Bb.A)(),
                { hasSharedAnItemWithAGroup: a = !1, status: n } = (0, Gb.W)(),
                { hasVisitedVault: s } = (0, qb.V)(),
                {
                  hasMinimumMemberCount: i,
                  hasMoreThanOneAdmin: o,
                  hasSecurityScore: l,
                  hasOnlyOneMember: c,
                  isSharingDisabled: d,
                  status: u
                } = (0, $b.h)();
              return t === r.rq.Loading || n === r.rq.Loading || u === r.rq.Loading
                ? { isLoading: !0, tasks: [] }
                : {
                    isLoading: !1,
                    tasks: [
                      { key: Fb.G.CREATE_ACCOUNT, isCompleted: !0 },
                      { key: Fb.G.VISIT_VAULT, isCompleted: null != s && s },
                      { key: Fb.G.INVITE_MEMBERS, isCompleted: i },
                      { key: Fb.G.ASSIGN_ADMIN, isCompleted: o, isCtaDisabled: c },
                      { key: Fb.G.CREATE_SHARING_GROUP, isCompleted: e, isCtaDisabled: c, isDisabled: d },
                      { key: Fb.G.SHARE_ITEM, isCompleted: a, isCtaDisabled: !e, isDisabled: d },
                      { key: Fb.G.CHECK_PASSWORD_HEALTH, isCtaDisabled: !l, isCompleted: l }
                    ]
                  };
            })(),
            {
              isHasSeenGetStartedLoading: m,
              hasSeenGetStarted: p,
              markGetStartedAsSeen: y
            } = (() => {
              const { data: e, status: t } = (0, d.k)(Ub.h, "hasSeenGetStarted"),
                { markGetStartedAsSeen: a } = (0, $e.u)(Ub.h);
              return {
                isHasSeenGetStartedLoading: t === se.rq.Loading,
                hasSeenGetStarted: t === se.rq.Success && e,
                markGetStartedAsSeen: () => {
                  a(void 0);
                }
              };
            })();
          (0, n.useEffect)(() => {
            (0, P.Nc)(o.PageView.TacOnboardingChecklist);
          }, []),
            (0, n.useEffect)(() => {
              p || m || y();
            }, [p, m]);
          const {
              upNextTask: h,
              toDoTasks: b,
              completedTasks: x
            } = (() => {
              const e = _,
                t = _.findIndex((e) => !e.isCompleted);
              let a = null;
              return (
                t >= 0 && ((a = e[t]), e.splice(t, 1)),
                { upNextTask: a, toDoTasks: e.filter((e) => !e.isCompleted), completedTasks: e.filter((e) => e.isCompleted) }
              );
            })(),
            S = 0 === b.length && null === h;
          return (0, l.tZ)(
            c.Ejs,
            { sx: { paddingX: "80px", paddingY: "32px", maxWidth: "1900px" }, gap: "8px", flexDirection: "column" },
            (0, l.tZ)(Kb, { allTasksCompleted: S }),
            S ? (0, l.tZ)(lx, { allTasksCompleted: S, openDialog: a }) : null,
            h
              ? (0, l.tZ)(
                  l.X6,
                  { as: "h2", textStyle: "ds.title.section.medium", sx: { marginTop: "16px" } },
                  e("team_get_started_up_next_task_title")
                )
              : null,
            (0, l.tZ)(
              c.T5p,
              { fullWidth: !0, gap: "64px", gridTemplateColumns: "2fr 1fr", gridTemplateAreas: "'tasks helpTips'" },
              (0, l.tZ)(
                c.dDn,
                { gridArea: "tasks" },
                u
                  ? cx || (cx = (0, l.tZ)(yr.a, null))
                  : (0, l.tZ)(
                      n.Fragment,
                      null,
                      (0, l.tZ)(rx, { upNextTask: h, completedTasks: x, toDoTasks: b }),
                      S ? null : (0, l.tZ)(lx, { allTasksCompleted: S, openDialog: a })
                    )
              ),
              (0, l.tZ)(c.dDn, { gridArea: "helpTips", sx: { paddingTop: "8px" } }, (0, l.tZ)(Wb, { setContactSupportDialogIsOpen: i }))
            ),
            s ? (0, l.tZ)(be, { onDismiss: () => i(!1) }) : null,
            (0, l.tZ)(Hb, { isOpen: t, setIsOpen: a })
          );
        }, Ae.$.GET_STARTED),
        px = Po(() => {
          const { data: e, status: t } = (0, d.k)(_r.B, "getReport"),
            a = (0, Ce.o)(G.w.EcommerceWebB2BDiscontinuationPhase1),
            s = t === se.rq.Success ? e : kl,
            i = t === se.rq.Loading,
            [r, l] = (0, n.useState)(Al.PURCHASE),
            {
              verifiedOrPendingDomain: { domain: u, status: _ }
            } = gr(),
            [m, p] = (0, n.useState)(null),
            y = t === se.rq.Success && 0 === s.passwordHealthHistory.length,
            h = (0, n.useCallback)(async () => {
              const e = await ca.C.getDarkWebInsightsSummary();
              p(e);
            }, []);
          (0, n.useEffect)(() => {
            (0, P.Nc)(o.PageView.TacDashboard), h();
          }, [h]);
          const b = En({ dismissible: !0 }),
            { translate: x } = (0, g.Z)(),
            [S, v] = (0, n.useState)(!1),
            f = (0, Ze.lZ)(),
            C = !f.isLoading && f.isTeamSoftDiscontinued && f.isTrial && !1 === a;
          return (
            (0, n.useEffect)(() => {
              C && v(!0);
            }, [C]),
            (0, hr.DX)(),
            (0, B.tZ)(
              "div",
              { sx: wl.PAGE },
              (0, B.tZ)(
                c.T5p,
                {
                  fullWidth: !0,
                  alignItems: "top",
                  gap: "32px",
                  gridTemplateColumns: "auto auto auto auto",
                  gridTemplateRows: "auto auto",
                  gridTemplateAreas: `'cards cards cards cards' '${
                    b ? "pwHealth pwHealth pwHealth upgrade" : "pwHealth pwHealth pwHealth dwi"
                  }'`
                },
                (0, B.tZ)(
                  c.dDn,
                  { gridArea: "cards" },
                  (0, B.tZ)(Tr, { passwordHealth: s.passwordHealth, seats: s.seats, passwordHealthHistoryEmpty: y })
                ),
                (0, B.tZ)(
                  c.dDn,
                  { gridArea: "pwHealth", sx: { height: "418px", width: "710px" } },
                  (0, B.tZ)(Xr, { isLoading: i, report: s, passwordHealthHistoryEmpty: y })
                ),
                b
                  ? (0, B.tZ)(
                      c.dDn,
                      { gridArea: "upgrade", sx: { width: "282px" } },
                      (0, B.tZ)(
                        c.Zbd,
                        {
                          sx: {
                            padding: "16px",
                            backgroundColor: "ds.container.agnostic.neutral.supershy",
                            borderColor: "ds.border.neutral.quiet.idle"
                          }
                        },
                        Nl || (Nl = (0, B.tZ)(Tn, { dismissible: !0 }))
                      )
                    )
                  : (0, B.tZ)(
                      c.dDn,
                      { gridArea: "dwi" },
                      _ === pr.Loading
                        ? Ml || (Ml = (0, B.tZ)(al, null))
                        : null !== u
                        ? (0, B.tZ)(dl, { verifiedOrPendingDomain: u, dwiSummaryResponse: m })
                        : (0, B.tZ)(bl, { dwiSummaryResponse: m })
                    )
              ),
              i ? Il || (Il = (0, B.tZ)(yr.a, null)) : null,
              S && !f.isLoading && f.planCopy
                ? r === Al.PURCHASE
                  ? (0, B.tZ)(Tl, {
                      isOpen: !0,
                      planCopy: x(f.planCopy),
                      setModalState: l,
                      handleClose: () => {
                        v(!1);
                      }
                    })
                  : (0, B.tZ)(Dl, { isOpen: !0, plan: f.planFeature, setModalState: l })
                : null
            )
          );
        }, Ae.$.DASHBOARD),
        gx = Po(({ lee: e, location: t }) => {
          const a = (0, n.useRef)(!1),
            { translate: s } = (0, g.Z)(),
            { reportTACError: i } = H(),
            r = (0, Wa.V)(),
            c = (0, Uc.v)(),
            { proposeMembers: d } = (0, $e.u)(jc.L),
            { showToast: u } = (0, l.pm)(),
            { openDialog: _, shouldShowTrialDiscontinuedDialog: m } = (0, T.yp)(),
            [p, y] = (0, n.useState)(!0),
            { invitePartialSuccessState: h, setInvitePartialSuccessState: b, handleInvitationResultClosed: x } = Xc(),
            [S, v] = (0, n.useState)(null),
            [f, Z] = (0, n.useState)(!1),
            [E, D] = (0, n.useState)({ showError: !1, membersWithoutPublicKey: [] }),
            N = (0, n.useCallback)(() => {
              const t = (0, Nn.v0)(e.globalState);
              return t || i(new Error(ls.N)), t;
            }, [e.globalState, i]),
            M = (0, n.useCallback)(() => {
              m
                ? _()
                : (Z(!0),
                  (0, P.Kz)(
                    new o.UserSendManualInviteEvent({
                      flowStep: o.FlowStep.Start,
                      inviteCount: 0,
                      inviteFailedCount: 0,
                      inviteResentCount: 0,
                      inviteSuccessfulCount: 0,
                      isImport: !1,
                      isResend: !1
                    })
                  ));
            }, [m]),
            I = (t) => {
              e.dispatch(od.eY(t));
            },
            w = (e, t) => {
              b({ show: !0, invitedMembers: e, refusedMembers: t }), I(Object.keys(e));
            },
            k = (0, n.useCallback)(
              (t, a = [], n) => {
                const i = async () => {
                    if (
                      (a.forEach((t) => {
                        e.dispatch(od.bh(t));
                      }),
                      !N())
                    )
                      return;
                    const t = a.map((e) => e.login);
                    try {
                      const n = await d({ proposedMemberLogins: t });
                      if ("failure" === n.tag) throw new Error(n.error);
                      if (n.data && Nu(n.data)) {
                        const { refusedMembers: s } = n.data.content;
                        Object.values(s).forEach((t) => {
                          const s = a.find((e) => e.login === t);
                          w(n.data.proposedMembers, n.data.refusedMembers), e.dispatch(od.S2(s));
                        }),
                          (0, P.Kz)(
                            new o.UserSendManualInviteEvent({
                              flowStep: o.FlowStep.Complete,
                              inviteCount: 0,
                              inviteFailedCount: Object.keys(s).length,
                              inviteResentCount: t.length,
                              inviteSuccessfulCount: t.length - Object.keys(s).length,
                              isImport: !1,
                              isResend: !0
                            })
                          );
                      } else
                        u({ description: s("team_members_invite_success_message"), mood: "brand" }),
                          (0, P.Kz)(
                            new o.UserSendManualInviteEvent({
                              flowStep: o.FlowStep.Complete,
                              inviteCount: 0,
                              inviteFailedCount: 0,
                              inviteResentCount: t.length,
                              inviteSuccessfulCount: t.length,
                              isImport: !1,
                              isResend: !0
                            })
                          );
                    } catch (n) {
                      const { message: i = "", data: r = {} } = n,
                        l = s("team_members_invite_error_message_no_free_slot"),
                        c = s("team_members_invite_error_message"),
                        { content: { error: d = i } = {} } = r,
                        _ = ["no_free_slot_free_plan", "no_free_slot"].includes(d) ? l : c;
                      a.forEach((t) => {
                        e.dispatch(od.S2(t));
                      }),
                        u({ description: _, mood: "danger" }),
                        (0, P.Kz)(
                          new o.UserSendManualInviteEvent({
                            flowStep: o.FlowStep.Error,
                            inviteCount: 0,
                            inviteFailedCount: t.length,
                            inviteResentCount: t.length,
                            inviteSuccessfulCount: 0,
                            isImport: !1,
                            isResend: !0
                          })
                        );
                    }
                  },
                  r = a.map((e) => e.login);
                switch (t) {
                  case "reassign":
                    return v((0, l.tZ)(Zd, { lee: e, selectedMembers: a, newRole: n, closeDialog: () => v(null) }));
                  case "reactivate":
                  case "reinvite":
                    return m ? void _() : void i();
                  case "reinviteAll":
                    return m ? void _() : v((0, l.tZ)(ld, { resendOrReactivate: i, closeDialog: () => v(null) }));
                  case "revoke":
                    return v((0, l.tZ)(dd, { lee: e, selectedMembers: a, closeDialog: () => v(null) }));
                  case "generateBackupCode":
                    return v((0, l.tZ)(id, { memberLogin: r[0], isOpen: !0, closeBackupCodeDialog: () => v(null) }));
                  case "enableInviteLink":
                    return m ? void _() : v((0, l.tZ)(pd, { closeDialog: () => v(null), applyActionOnMembers: k }));
                  case "shareInviteLink":
                    return m ? void _() : v((0, l.tZ)(_d, { closeDialog: () => v(null) }));
                }
              },
              [r, N, w, m, s]
            );
          (0, n.useEffect)(() => {
            if (a.current || null === c || null === m) return;
            a.current = !0;
            const n = N();
            if (!n) return;
            const { teamId: s } = n;
            s &&
              (new Mn.Z()
                .status({ auth: n })
                .then((t) => {
                  var a;
                  return (
                    e.dispatch(
                      od.xF({
                        extraFreeSlots: t.content.team.extraFreeSlots,
                        membersNumber: t.content.team.membersNumber,
                        isFreeTrial: t.content.team.isFreeTrial,
                        teamName: null != (a = t.content.team.info.name) ? a : "",
                        teamSecurityScore: t.content.team.securityIndex
                      })
                    ),
                    (0, cs.YY)({ teamId: s })
                  );
                })
                .then((a) => {
                  e.dispatch(od.Wq({ members: a })), y(!1);
                  const n = a && 1 === a.length,
                    s = t.state?.openSendInvitesDialog;
                  if (!m && ((!c && n) || s)) M();
                  else if (t.state?.openResendPendingInvitationsDialog && !m) return void k("reinviteAll", Ed(a));
                  const i = a.filter((e) => !e.hasPublicKey).filter((e) => "accepted" === e.status);
                  i.length && D({ showError: !0, membersWithoutPublicKey: i });
                })
                .catch(i),
              (0, P.Nc)(o.PageView.TacUserList));
          }, [M, k, N, e, t.state?.openResendPendingInvitationsDialog, t.state?.openSendInvitesDialog, c, i, m, s]);
          const A = zc(e.state.members.valueOr([]));
          return (
            (0, hr.p_)(),
            (0, hr.LD)(),
            (0, l.tZ)(
              "div",
              { sx: { padding: "16px 32px 32px 32px", display: "flex", flexDirection: "column", gap: "56px" } },
              (0, l.tZ)(Nd, {
                onReinviteAllClick: () => {
                  k("reinviteAll", Ed(e.state.members.valueOr([])));
                }
              }),
              (0, l.tZ)(
                "div",
                { sx: { display: "flex", justifyContent: "center" } },
                p
                  ? (0, l.tZ)(oi.Z, { containerStyle: { minHeight: 240 } })
                  : (0, l.tZ)(Tu, { lee: e, members: e.state.members.valueOr([]), onMembersActionSelect: k, onMembersInvite: () => M() })
              ),
              E.showError
                ? (0, l.tZ)(md, { membersWithoutPublicKey: E.membersWithoutPublicKey, onClose: () => D((e) => ({ ...e, showError: !1 })) })
                : null,
              S,
              (0, l.tZ)(ju, {
                lee: e,
                teamId: (0, C.ev)(e.globalState),
                totalSeatCount: e.state.totalSeatCount.valueOr(0),
                numSeatsTaken: A,
                excludedInviteMembers: e.state.members
                  .valueOr([])
                  .filter(({ status: e }) => "removed" !== e)
                  .map(({ login: e }) => e),
                isFreeTrial: e.state.isFreeTrial.valueOr(!0),
                shouldShowInviteDialog: f,
                handleCloseInviteDialog: () => Z(!1),
                handleInvitePartialSuccess: w,
                handleInviteCompleteSuccess: I,
                invitePartialSuccessState: h,
                handleInvitationResultClosed: x
              })
            )
          );
        }, Ae.$.MEMBERS),
        yx = Po(({ lee: e }) => {
          var t;
          const { translate: a } = (0, g.Z)(),
            {
              verifiedOrPendingDomain: { domain: s, status: i },
              verifiedDomains: r,
              updateDomainState: d,
              deactivateDomain: u,
              tryVerifyDomain: _,
              selectVerifiedDomain: m
            } = gr();
          return (
            (0, n.useEffect)(() => {
              (0, P.Nc)(o.PageView.TacDarkWebInsights);
            }, []),
            (0, l.tZ)(
              n.Fragment,
              null,
              (0, l.tZ)(
                "div",
                { sx: { px: "48px", pt: "32px", pb: "12px" } },
                (0, l.tZ)(l.X6, { as: "h1" }, a("team_dashboard_dark_web_insights_heading")),
                (0, l.tZ)(r_, { activeDomain: s, verifiedDomains: r, selectVerifiedDomain: m })
              ),
              (0, l.tZ)(c_, {
                fullWidth: !0,
                mainContent: () =>
                  (0, l.tZ)(
                    "div",
                    null,
                    i === pr.Loading
                      ? (0, l.tZ)("div", { sx: d_ }, (0, l.tZ)(c.HoD, { size: 120, color: c.colors.dashGreen00, strokeWidth: 1 }))
                      : null === s || i === pr.Start
                      ? t || (t = (0, l.tZ)(Zc, { onSuccess: d, onError: d }))
                      : i === pr.Validated
                      ? (0, l.tZ)(e_, { lee: e, domainName: s.name })
                      : (0, l.tZ)(s_, {
                          domain: s,
                          isDeactivating: i === pr.Deactivating,
                          handleDeactivateDomain: u,
                          handleRetryValidateDomain: _
                        })
                  ),
                secondaryContent: Gl
              })
            )
          );
        }, Ae.$.DARK_WEB_INSIGHTS),
        hx = ({ basePath: e, path: t }) =>
          n.createElement(
            i.GB,
            { path: t, reducer: Pb.Z, permission: (e) => e.loggedIn && e.adminAccess.hasTACAccess, redirectPath: s.TT, component: ur },
            n.createElement(
              i.rs,
              null,
              n.createElement(i.l_, { exact: !0, from: `${e}/`, to: `${e}/${Ae.$.DASHBOARD}` }),
              n.createElement(i.Vy, { component: ux, path: `${e}/${Ae.$.CHANGE_PLAN}`, permission: (e) => dx("BILLING", e) }),
              n.createElement(i.Vy, {
                component: _x,
                path: `${e}/${Ae.$.ACCOUNT}`,
                permission: (e) => dx("BILLING", e),
                redirectPath: `${e}/${Ae.$.GROUPS}`
              }),
              n.createElement(i.Vy, {
                component: mx,
                path: `${e}/${Ae.$.GET_STARTED}`,
                permission: (e) => dx("FULL", e),
                redirectPath: `${e}/${Ae.$.ACCOUNT}`
              }),
              n.createElement(i.Vy, {
                component: px,
                path: `${e}/${Ae.$.DASHBOARD}`,
                permission: (e) => dx("FULL", e),
                redirectPath: `${e}/${Ae.$.ACCOUNT}`
              }),
              n.createElement(Go, { path: `${e}/${Ae.$.ACTIVITY}` }),
              n.createElement(pm, { path: `${e}/${Ae.$.GROUPS}`, permission: (e) => dx("GROUP_READ", e) }),
              n.createElement(i.Vy, {
                component: gx,
                path: `${e}/${Ae.$.MEMBERS}`,
                permission: (e) => dx("FULL", e),
                redirectPath: `${e}/${Ae.$.ACCOUNT}`,
                reducer: od.ZP
              }),
              n.createElement(i.Vy, {
                component: yx,
                path: `${e}/${Ae.$.DARK_WEB_INSIGHTS}`,
                permission: (e) => dx("FULL", e),
                redirectPath: `${e}/${Ae.$.DARK_WEB_INSIGHTS}`,
                reducer: od.ZP
              }),
              n.createElement(wb, { path: `${e}/${Ae.$.SETTINGS}` })
            )
          );
    },
    619122: (e, t, a) => {
      a.d(t, { fV: () => l, qc: () => r });
      var n = a(696832),
        s = a(38452),
        i = a(739649);
      const o = n.createContext({ currentSpaceId: null, spaceDetails: null, teamId: null }),
        r = ({ lee: e, children: t }) => {
          var a;
          const r = (0, i.B)(e.globalState),
            l = null != (a = (0, s.xO)(e.globalState)?.details) ? a : null,
            c = (0, s.ev)(e.globalState);
          return n.createElement(o.Provider, { value: { teamId: c, currentSpaceId: r, spaceDetails: l } }, t);
        },
        l = () => n.useContext(o);
    },
    758480: (e, t, a) => {
      a.d(t, { vo: () => s, ZP: () => r, dV: () => o, Kk: () => i });
      const n = (0, a(158432).SP)("active-directory-settings", {
          activeDirectoryScript: "",
          activeDirectorySyncStatus: { failedSyncCount: 0, lastFailedSync: null, lastSuccessfulSync: null },
          activeDirectorySyncType: null,
          isCopied: !1
        }),
        s = n.action("active-directory-settings-loaded", ({ param: e }) => {
          var t, a, n;
          return {
            activeDirectoryScript:
              ((a = e.activeDirectoryToken),
              (n = e.teamId),
              `#################################################################################\n## dashlane-ad-sync.ps1\n##\n## For more information, please visit :\n## https://support.dashlane.com/hc/articles/115002155485\n##\n## This script will:\n## 1. Search each Group's GroupMembers\n## 2. Export all GroupMember AD User Email Address values to a temp CSV file\n## 3. Sign the data extract\n## 4. Synchronize the data with Dashlane\n#################################################################################\n\nPROCESS {\n##################################################################################\n## List the Group Names you'd like to extract Users from and sync with Dashlane ##\n##################################################################################\n\n$Groups = @(\n    "AGroup",\n    "AnotherGroup"\n)\n\n##################################################################################\n## Replace this with the attribute containing your employees' Dashlane logins   ##\n##################################################################################\n\n$DASHLANE_LOGIN_ATTR = "mail"\n\n#################################################################################\n##  DO NOT CHANGE THE PROCESS BELOW                                            ##\n#################################################################################\n\nImport-Module ActiveDirectory\n\nWrite-Host "Running Dashlane AD synchronization"\n\n$GroupMembers = @()\n$GroupInfos = @()\n$CSV_TEMP_PATH = $env:TEMP + "\\dashlane_export.csv"\n$INSTALL_TOKEN = "${a}"\n$TEAM_ID = "${n}"\n\n##################################################################################\n## Anaylzing Groups                                                                ##\n##################################################################################\n\nforeach ($Group in $Groups | Select-Object -Unique) {\n    Try {\n        $GroupInfo = Get-ADGroup -Identity $Group | Select Name, ObjectGUID\n        $GroupInfo | Add-Member Members @()\n\n        $Members = Get-ADGroupMember -Identity $Group | Get-ADUser -Properties Mail\n\n        # Roughly filtering out users with invalid emails.\n        # A user with an invalid email is filtered out by Dashlane servers: it will therefore not\n        # be included in the verified data, which will lead to an invalid signature check if it is\n        # included in the signed data.\n        $ValidMembers = $Members | Where-Object {($_ | Select -ExpandProperty $DASHLANE_LOGIN_ATTR) -like '*@*.*' }\n        # Lower case and trim all emails to make consistent with Dashlane servers; only need email\n        $ValidMembers = $ValidMembers | Select @{\n            Label=$DASHLANE_LOGIN_ATTR;\n            Expression={($_ | Select -ExpandProperty $DASHLANE_LOGIN_ATTR).ToLower().Trim() }\n        }\n        # Sort the users and get rid of any potential duplicates\n        $ValidMembers = $ValidMembers | Sort-Object -Property $DASHLANE_LOGIN_ATTR | Get-Unique -AsString\n        # Get a count\n        $measure = $ValidMembers | measure\n        $count = $measure.count\n        Write-Host "Exporting $count valid members from $Group"\n\n        if ($count -gt 0) {\n            foreach ($Member in $ValidMembers) {\n                $Member | Add-Member GroupName $GroupInfo.Name\n                $Member | Add-Member GroupGUID $GroupInfo.ObjectGUID\n                $GroupMembers += $Member\n                $GroupInfo.Members += $Member\n            }\n            $GroupInfos += $GroupInfo\n        }\n    } Catch {\n        $ErrorMessage = $_.Exception.Message\n        $FailedItem = $_.Exception.GetType().FullName\n\n        Write-Host "Error: $FailedItem - $ErrorMessage"\n        Write-Host "Message: It seems there is no account on this Group: $Group."\n        Exit 2\n    }\n}\n\n##################################################################################\n## Writing temp CSV                                                             ##\n##################################################################################\n\nWrite-Host ""\nWrite-Host "Writing debug information to $CSV_TEMP_PATH"\n$GroupMembers | Export-Csv -Path $CSV_TEMP_PATH -NoTypeInformation -Encoding UTF8\n\n##################################################################################\n## Generate signature                                                           ##\n##################################################################################\n\nTry {\n    $CspParameters = New-Object -TypeName System.Security.Cryptography.CspParameters\n    $CspParameters.KeyContainerName = "DashlaneDirectorySyncKey53"\n\n    $RSA = New-Object -TypeName System.Security.Cryptography.RSACryptoServiceProvider -ArgumentList $CspParameters\n    $PublicKey = $RSA.ToXmlString($false)\n    $PublicKeyHash = [System.Convert]::ToBase64String([System.Text.Encoding]::UTF8.GetBytes($PublicKey))\n\n    Write-Host ""\n    Write-Host "---------- Provide your Dashlane admin with this key on setup: -----------"\n    Write-Host ""\n    Write-Host $PublicKeyHash\n    Write-Host ""\n    Write-Host "--------------------------------------------------------------------------"\n    Write-Host ""\n\n    $RSAFormatter = New-Object -TypeName System.Security.Cryptography.RSAPKCS1SignatureFormatter -ArgumentList $RSA\n    $RSAFormatter.SetHashAlgorithm("SHA256")\n\n    $DataStr = $TEAM_ID\n    foreach ($GroupInfo in $GroupInfos | Sort-Object -Property ObjectGUID) {\n        $DataStr += $GroupInfo.ObjectGUID\n        $DataStr += $GroupInfo.Name\n\n        foreach ($Member in $GroupInfo.Members | Sort-Object -Property $DASHLANE_LOGIN_ATTR) {\n            $DashlaneLogin = $Member | Select -ExpandProperty $DASHLANE_LOGIN_ATTR\n            $DataStr += $DashlaneLogin\n        }\n    }\n\n    ## Uncomment following lines for debugging purposes on 'invalid_signature' error investigations\n    # Write-Host ""\n    # Write-Host "--------------------------------------------------------------------------"\n    # Write-Host ""\n    # Write-Host $DataStr\n    # Write-Host ""\n    # Write-Host "--------------------------------------------------------------------------"\n    # Write-Host ""\n\n    $DataBytes = [System.Text.Encoding]::UTF8.GetBytes($DataStr)\n    $SHA256 = New-Object -TypeName System.Security.Cryptography.SHA256CryptoServiceProvider\n    $DataHash = $SHA256.ComputeHash($DataBytes)\n\n    $SignatureBytes = $RSAFormatter.CreateSignature($DataHash)\n    $SignatureHash = [System.Convert]::ToBase64String($SignatureBytes)\n\n} Catch {\n    $ErrorMessage = $_.Exception.Message\n    $FailedItem = $_.Exception.GetType().FullName\n    Write-Host "Failed: $FailedItem - $ErrorMessage"\n    Exit 3\n}\n\n##################################################################################\n## Send data to Dashlane                                                        ##\n##################################################################################\n\n$FileContent = Get-Content $CSV_TEMP_PATH | Out-String\n$FileContentBytes = [System.Text.Encoding]::UTF8.GetBytes($FileContent)\n$FileContentEncoded = [System.Convert]::ToBase64String($FileContentBytes)\n\n[System.Net.ServicePointManager]::SecurityProtocol = [System.Net.SecurityProtocolType]::Tls12;\n\n$URL = "https://ws1.dashlane.com/1/teamPlans/syncFromDirectory"\n$Payload = @{adLogins=$FileContentEncoded;adToken=$INSTALL_TOKEN;teamId=$TEAM_ID;signature=$SignatureHash;publicKey=$PublicKeyHash}\n\nTry {\n    $Response = Invoke-WebRequest -Uri $URL -Method POST -Body $Payload\n    Write-Host "Dashlane sync responded with: $Response"\n\n} Catch {\n    $ErrorMessage = $_.Exception.Message\n    $FailedItem = $_.Exception.GetType().FullName\n    Write-Host ""\n    Write-Host "Dashlane sync error: $FailedItem - $ErrorMessage"\n}\n\n##################################################################################\n## Cleaning up temp CSV                                                         ##\n##################################################################################\n\nRemove-Item $CSV_TEMP_PATH\n\n}`),
            activeDirectorySyncStatus: e.activeDirectorySyncStatus || null,
            activeDirectorySyncType: null != (t = e.activeDirectorySyncType) ? t : null
          };
        }),
        i = n.action("script-copy-feedback-toggled", ({ param: e }) => ({ isCopied: e })),
        o = n.action("active-directory-sync-type-set", ({ param: e }) => ({ activeDirectorySyncType: e })),
        r = n;
    },
    678128: (e, t, a) => {
      a.d(t, { E4: () => r, FC: () => i, ZP: () => c, a2: () => o, k0: () => s, qf: () => l });
      const n = (0, a(158432).SP)("duo-settings", { hasDuo: !1, duoIntegrationKey: "", duoSecretKey: "", duoApiHostname: "" }),
        s = n.action("duo-settings-loaded", ({ param: e }) => ({
          hasDuo: e.duo || !1,
          duoIntegrationKey: e.duoIntegrationKey || "",
          duoSecretKey: e.duoSecretKey || "",
          duoApiHostname: e.duoApiHostname || ""
        })),
        i = n.action("duo-set", ({ param: e }) => ({ hasDuo: e })),
        o = n.action("duo-integration-key-set", ({ param: e }) => ({ duoIntegrationKey: e })),
        r = n.action("duo-secret-key-set", ({ param: e }) => ({ duoSecretKey: e })),
        l = n.action("duo-api-hostname-set", ({ param: e }) => ({ duoApiHostname: e })),
        c = n;
    },
    212637: (e, t, a) => {
      a.d(t, { j: () => c });
      var n = a(361607),
        s = a(133354),
        i = a(65255),
        o = a(136577),
        r = a(700091),
        l = a(728207);
      const c = () => {
        var e;
        const t = (0, n._)(),
          a = t.status !== s.rq.Success,
          { [i.w.OnboardingWebAdminVaultGetStartedGuide]: c = !1 } = a ? {} : t.data,
          d = (0, r.F)(),
          u = (0, l.u)(),
          _ = (0, o.m)();
        if (t.status === s.rq.Error || d.status === s.rq.Error || u.status === s.rq.Error || _.status === s.rq.Error)
          return { status: s.rq.Success, shouldDisplayAdminVaultGetStartedGuide: !1 };
        if (t.status !== s.rq.Success || d.status !== s.rq.Success || u.status !== s.rq.Success || _.status !== s.rq.Success)
          return { status: s.rq.Loading };
        const m = c && !d.isGetStartedDismissed && u.teamCreationDate >= 1702508400 && null != (e = _.isTeamCreator) && e;
        return { status: s.rq.Success, shouldDisplayAdminVaultGetStartedGuide: m };
      };
    },
    93437: (e, t, a) => {
      a.d(t, { h: () => o });
      var n = a(696832),
        s = a(823512),
        i = a(740300);
      function o() {
        const [e, t] = (0, n.useState)(!0),
          [a, o] = (0, n.useState)(null),
          [r, l] = (0, n.useState)(null),
          [c, d] = (0, n.useState)(null),
          u = (0, n.useCallback)(async (e, t) => {
            try {
              const a = await i.C.requestInviteLinkToken({ teamUuid: e, login: t });
              if (a.success) return a.data;
              d(a.error.code);
            } catch {
              d(s.S2);
            }
            return null;
          }, []);
        return {
          inviteLinkDataLoading: e,
          inviteLinkError: c,
          inviteLinkData: a,
          inviteLinkDataForAdmin: r,
          getInviteLinkData: (0, n.useCallback)(async (e) => {
            t(!0);
            try {
              const t = await i.C.getInviteLink({ teamKey: e });
              if (t.success) return o(t.data), t.data;
              d(t.error.code);
            } catch {
              d(s.S2);
            } finally {
              t(!1);
            }
            return null;
          }, []),
          requestInviteLinkToken: u,
          getInviteLinkDataForAdmin: (0, n.useCallback)(async () => {
            t(!0);
            try {
              const e = await i.C.getInviteLinkForAdmin({});
              if (e.success) return l(e.data), e.data;
              d(e.error.code);
            } catch {
              d(s.S2);
            } finally {
              t(!1);
            }
            return null;
          }, []),
          createInviteLink: (0, n.useCallback)(async (e) => {
            t(!0);
            try {
              const t = await i.C.createInviteLink({ displayName: e });
              if (t.success) return t.data;
              d(t.error.code);
            } catch {
              d(s.S2);
            } finally {
              t(!1);
            }
            return null;
          }, []),
          changeInviteLinkTeamKey: (0, n.useCallback)(async () => {
            t(!0);
            try {
              const e = await i.C.changeInviteLinkTeamKey({});
              if (e.success) return e.data;
              d(e.error.code);
            } catch {
              d(s.S2);
            } finally {
              t(!1);
            }
            return null;
          }, []),
          toggleInviteLink: (0, n.useCallback)(async (e) => {
            t(!0);
            try {
              const t = await i.C.toggleInviteLink({ disabled: e });
              if (t.success) return t.data;
              d(t.error.code);
            } catch {
              d(s.S2);
            } finally {
              t(!1);
            }
            return null;
          }, [])
        };
      }
    },
    874466: (e, t, a) => {
      a.d(t, { ZP: () => o, Zn: () => i, x: () => s });
      const n = (0, a(158432).SP)("master-password-policies-settings", { recoveryEnabled: !1 }),
        s = n.action("master-password-policies-settings-loaded", ({ param: e }) => ({ recoveryEnabled: Boolean(e.recoveryEnabled) })),
        i = n.action("set-recovery-enabled", ({ param: e }) => ({ recoveryEnabled: e })),
        o = n;
    },
    16037: (e, t, a) => {
      a.d(t, { $: () => n });
      let n = (function (e) {
        return (
          (e.ACCOUNT = "account"),
          (e.ACTIVITY = "activity"),
          (e.CHANGE_PLAN = "account/changeplan"),
          (e.DASHBOARD = "dashboard"),
          (e.GROUPS = "groups"),
          (e.MEMBERS = "members"),
          (e.SETTINGS = "settings"),
          (e.DARK_WEB_INSIGHTS = "dark-web-insights"),
          (e.GET_STARTED = "get-started"),
          e
        );
      })({});
    },
    119471: (e, t, a) => {
      a.d(t, {
        $b: () => h,
        B7: () => S,
        BJ: () => E,
        Bw: () => g,
        Bz: () => P,
        EL: () => d,
        F1: () => n,
        FL: () => j,
        FP: () => k,
        FX: () => m,
        Fn: () => M,
        HX: () => Z,
        I9: () => T,
        Iw: () => x,
        J0: () => L,
        M: () => W,
        Mv: () => s,
        Pr: () => v,
        Rf: () => z,
        Tx: () => I,
        Tz: () => F,
        VH: () => l,
        Vr: () => c,
        XP: () => V,
        bx: () => N,
        cI: () => K,
        hc: () => y,
        i1: () => B,
        lh: () => G,
        mA: () => O,
        mn: () => q,
        n0: () => p,
        nC: () => f,
        o2: () => $,
        oH: () => _,
        rh: () => D,
        sz: () => R,
        tU: () => C,
        to: () => u,
        tz: () => r,
        uC: () => A,
        uR: () => w,
        ub: () => o,
        vS: () => U,
        xz: () => i,
        yi: () => b,
        zF: () => H
      });
      const n = "https://app.dashlane.com",
        s = "https://app.dashlane.com#/login",
        i = "https://app.dashlane.com#/console",
        o = "https://www.dashlane.com/business/directbuy",
        r = "https://www.dashlane.com/pricing",
        l = "https://www.dashlane.com/resources",
        c = "https://support.dashlane.com/hc",
        d = "https://support.dashlane.com/hc/en-us/categories/200958889-Admins",
        u = "https://support.dashlane.com/hc/requests/new",
        _ = "https://support.dashlane.com/hc/requests/new?req_type=dashlane_for_business",
        m = "https://support.dashlane.com/hc/categories/200958889-Dashlane-Business",
        p = "https://support.dashlane.com/hc/en-us/articles/360015304999-Joining-a-Dashlane-Business-plan-with-SSO-enabled#title2",
        g = "https://support.dashlane.com/hc/requests/new",
        y = "https://support.dashlane.com/hc/en-us/requests/new?utm_medium=misc&utm_source=dashlane_admin_console",
        h = "https://support.dashlane.com/hc/en-us/articles/6351573344786?utm_medium=misc&utm_source=dashlane_admin_console",
        b = "https://www.dashlane.com/download",
        x = "https://support.dashlane.com/hc/articles/360014345059",
        S = "https://support.dashlane.com/hc/articles/360014345059",
        v = "https://dashlane.status.io/",
        f = "https://support.dashlane.com/hc/articles/360013149040",
        C = "https://support.dashlane.com/hc/articles/360000112339",
        Z = "https://support.dashlane.com/hc/articles/360013149040",
        E = "https://www.dashlane.com/business/sso-download",
        D = "https://support.dashlane.com/hc/articles/360017434219",
        T = "https://support.dashlane.com/hc/en-us/articles/210826449",
        N = "https://support.dashlane.com/hc/en-us/articles/360015973719-Use-self-hosted-SSO-to-integrate-Dashlane-with-your-IdP",
        M = "https://support.dashlane.com/hc/en-us/articles/10992671925778-Use-Dashlane-Confidential-SSO-to-integrate-with-your-IdP",
        I = "https://support.dashlane.com/hc/en-us/categories/200958889-Admins",
        w = "https://support.dashlane.com/hc/en-us/articles/360013149040",
        k = "https://support.dashlane.com/hc/en-us/articles/360013149040",
        A = "https://support.dashlane.com/hc/en-us/articles/360013149040",
        O = "https://www.dashlane.com/business-password-manager/enterprise",
        L = "https://dashlane.zoom.us/webinar/register/6216504012380/WN_j-3JwzI0T1q1alUxHqsM7g#/registration",
        z = "https://support.dashlane.com/hc/en-us/articles/212491369",
        j = "https://support.dashlane.com/hc/articles/4516905332370",
        R = "https://www.dashlane.com/terms",
        P = "https://www.dashlane.com/privacy",
        U =
          "https://support.dashlane.com/hc/requests/new?req_type=dashlane_for_business&ticket_form_id=4659353761426&topic=upgrade_to_dashlane_business",
        B = "https://support.dashlane.com/hc/requests/new?req_type=dashlane_for_business&topic=add_seats",
        G = `${c}/articles/4516905332370#chatbot`,
        F = "https://www.dashlane.com/blog/what-is-single-sign-on-sso",
        q = "https://www.dashlane.com/resources/dashlane-zero-knowledge-security",
        $ = "https://support.apple.com/HT202039",
        V = "https://support.apple.com/HT204088",
        W = "https://support.google.com/googleplay/answer/7018481?co=GENIE.Platform%3DDesktop",
        H = "https://support.google.com/store/answer/6160235",
        K = (e = "") => `https://app.dashlane.com/#/team/signup?team=${e}`;
    },
    127521: (e, t, a) => {
      a.d(t, { MQ: () => r, n5: () => l, t2: () => i, v0: () => o }), a(233377);
      var n = a(38452);
      const s = (e) => (((e) => "function" == typeof e.getState)(e) ? e.getState() : e),
        i = (e) => s(e).user.session.login,
        o = (e) => {
          const t = i(e),
            a = s(e).user.session.uki;
          return a ? { login: t || null, uki: a || null, teamId: (0, n.ev)(s(e)) } : null;
        },
        r = (e) => s(e).user.session.sessionId,
        l = (e) => s(e).user.session.anonymousUserId;
    }
  }
]);
