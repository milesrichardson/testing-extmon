"use strict";
(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [5496],
  {
    765499: (e, t, a) => {
      a.d(t, { Z: () => o });
      var n = a(696832),
        s = a(635164),
        i = a(19835);
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
    106826: (e, t, a) => {
      a.d(t, { t: () => o });
      var n = a(696832),
        s = a(201389);
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
    139576: (e, t, a) => {
      var n = a(228492),
        s = a(974769),
        i = a(106487),
        o = a(696832),
        r = a(688167),
        l = a(130502),
        c = a(600385),
        d = a(420145),
        u = a(748085),
        _ = a(826411),
        m = a(362688),
        p = (a(664562), a(241901)),
        g = a(583266),
        y = a(403092),
        b = a(140),
        h = a.n(b);
      const x = (0, a(577037).Z)("STATE_IN_URL", {}),
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
            h()({}, e, a)
          );
        }),
        { apply: f } = x,
        C = f,
        E = function (e, t) {
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
      var Z = a(635164),
        T = a(373880),
        N = a(158649),
        D = a(554452),
        M = a(335396),
        I = a(249808),
        A = a(263907),
        w = a(182422),
        k = a(680930),
        O = a(374479),
        L = a(312706),
        z = a(330135),
        R = a(648106),
        j = a(671699),
        P = a(944991),
        U = a(6128),
        B = a(617770),
        G = a(625119),
        F = a(760946),
        q = a(364075),
        V = a(158432),
        $ = a(524179);
      let W;
      function H() {
        return (
          W ||
            (W = (function (e) {
              const t = [];
              i.bq && t.push((0, $.createLogger)({ timestamp: !1, collapsed: !0, diff: !0 }));
              const a = (0, w.compose)((0, w.applyMiddleware)(...t), (window.devToolsExtension, (e) => e))(w.createStore)(
                (function (e) {
                  const t = (0, V.RC)(e);
                  return function (e, a) {
                    return (
                      (e = (0, w.combineReducers)({
                        initialSyncProgress: q.Z.apply,
                        notifications: O.Z.apply,
                        carbon: k.ZP.apply,
                        directorySyncKey: G.ZP.apply,
                        cursor: (e = {}) => e,
                        locale: z.ZP.apply,
                        logs: L.Z.apply,
                        user: R.ZP.apply,
                        webapp: P.ZP.apply,
                        dialog: U.Z.apply,
                        afterLogin: B.Z.apply,
                        ieNotifications: F.Z.apply
                      })(e, a)),
                      (e = t(e, a)),
                      (e = (0, j.Z)(e, a)),
                      C(e, a)
                    );
                  };
                })(e)
              );
              return a;
            })(A.Z)),
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
      (0, Z.JB)(te);
      const ne = "graphene-background-port";
      async function se(e, t) {
        const a = await (async function (e) {
            return (
              await (async function (e) {
                await (0, c.X)(e),
                  (0, l.Z)(e),
                  (0, u.CA)(e),
                  (function (e, t, a, n) {
                    const s = Object.assign(E("", n), E(t, n));
                    Object.keys(s).length > 0 && a.dispatch(v(s));
                  })(0, (0, Z.NW)(), e, {
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
          { client: n } = (0, T.X)({ appDefinition: M.R, channels: { background: new N.N(a) }, channelsListener: D.y }),
          s = n["carbon-legacy"].queries.carbonState({ path: "userSession.sync.status" });
        return await (0, Y.z)(s), n;
      }
      var ie = a(303810),
        oe = a(739844);
      ((e, t) => {
        if (ie.isInsideIframe()) throw new Error("Leeloo should not be run in an iframe");
        a(928058), a(455733), a(794383), (0, i.ZP)();
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
    106487: (e, t, a) => {
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
    948143: (e, t, a) => {
      a.d(t, { j: () => _ });
      var n = a(696832),
        s = a(441217),
        i = a(447725),
        o = a(635164),
        r = a(201389),
        l = a(145623);
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
    808537: (e, t, a) => {
      a.d(t, { S: () => W });
      var n = a(696832),
        s = a(339227),
        i = (a(765695), a(148038)),
        o = a(453576),
        r = a(929986),
        l = a(799852),
        c = a(176034),
        d = a(421548),
        u = a(121911),
        _ = a(930336),
        m = a(355612),
        p = a(201389),
        g = a(66941),
        y = a(447725),
        b = a(51662),
        h = a(635164),
        x = a(974769),
        S = a(955370),
        v = a(145623),
        f = a(295946),
        C = a(355053);
      let E = (function (e) {
        return (
          (e.ASK_FOR_MP = "ASK_FOR_MP"),
          (e.ACCOUNT_CREATION = "ACCOUNT_CREATION"),
          (e.D_SPINNER = "D_SPINNER"),
          (e.CHANGE_MP_PROGRESS = "CHANGE_MP_PROGRESS"),
          e
        );
      })({});
      var Z = a(891424),
        T = a(441309);
      var N;
      const D = ({ dispatchGlobal: e, onSubmit: t }) =>
        n.createElement(
          "div",
          { className: "panelsContainer--jB02U43E37" },
          N || (N = n.createElement(Z.w, null)),
          n.createElement(T.R, { dispatchGlobal: e, onSubmit: t })
        );
      var M = a(441217);
      const I = ({ animation: e, shouldLoopAnimation: t = !1, progressValue: a = 0 }) => {
        const { translate: s } = (0, p.Z)();
        return n.createElement(
          n.Fragment,
          null,
          n.createElement(
            "div",
            { className: "logo--zwQR6n8P2E" },
            n.createElement(M.D1W, { color: M.vei.DashGreen, size: M.r1z.Size39, title: s("_common_dashlane_logo_title") })
          ),
          n.createElement(
            "div",
            { className: "progressContainer--uN3zEbYKRy" },
            n.createElement(
              "div",
              { className: "content--g692RTJxEb" },
              n.createElement(u.Z, {
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
      var A = a(142897),
        w = a(812585),
        k = a(383849),
        O = a.n(k),
        L = a(358389),
        z = a(332794),
        R = a(754674),
        j = a(583988);
      const P = "disclaimerCheckboxWrapper--H9bH4mWFEN",
        U = "visible--tgv48_Tn6M",
        B = "disclaimerCheckbox--I9w4KoQzGz";
      var G;
      const F = ({ error: e, isEu: t, memberEmail: a, onSubmit: s }) => {
          const i = null === t,
            o = n.useCallback(() => Boolean(!!i || t), [t, i]),
            { translate: r } = (0, p.Z)(),
            [l, c] = (0, n.useState)(!o()),
            [d, u] = (0, n.useState)(!1),
            [_, m] = (0, n.useState)(!1),
            g = n.createRef();
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
              { className: O()("heading--xkXNXFnweh _headingBase--w98gFdP6ar", "acceptHeading--bN5eLgP37u") },
              r("member_account_creation_accept_content_heading")
            ),
            i
              ? G || (G = n.createElement(j.Z, { size: 40 }))
              : n.createElement(
                  "form",
                  { className: "form--mbE1UdEyiO" },
                  n.createElement(L.n, {
                    isDisabled: !0,
                    placeholder: r("member_account_creation_email_hint_text"),
                    labelText: r("member_account_creation_email_floating_label"),
                    ref: g,
                    defaultValue: a
                  }),
                  e ? n.createElement("div", { className: "errorText--kkUVthMMSK" }, e) : null,
                  n.createElement(
                    "div",
                    { className: O()(P, U, "consentCheckbox--OxdBTmWrRI") },
                    n.createElement(z.Z, {
                      label: y,
                      labelClass: B,
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
                      { className: O()(P, U) },
                      n.createElement(z.Z, {
                        label: n.createElement(n.Fragment, null, r.markup("account_creation_confirm_terms_of_service_markup")),
                        labelClass: B,
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
        q = (e) => {
          const { ...t } = e,
            a = { standardHeader: "standardHeader--mQMlxYDQNk", logoContainer: "logoContainer--U1og3U_Xxu", logo: "logo--I6WuRV58HI" },
            n = (0, A.tZ)("div", { onClick: () => (0, h.uX)(x.SF) });
          return (0, A.tZ)(
            "div",
            { className: "wrapper--wU7M482wCS" },
            (0, A.tZ)(w.A, { classes: a, logoComponent: n }),
            (0, A.tZ)("div", { className: "content--HXxzOJoWsC" }, (0, A.tZ)(F, { ...t }))
          );
        },
        V = "webapp_login_form_regsiter_fallback_browser_name",
        $ = (e) => {
          const t = (0, h.Xo)(),
            { login: a, ssoToken: s, key: Z, exists: T, currentAuths: N, expectedAuths: M, inStore: A } = (0, C.Ae)(e),
            { lee: w } = e,
            k = "true" === T,
            [O, L] = (0, n.useState)(k ? E.D_SPINNER : E.ACCOUNT_CREATION),
            { translate: z } = (0, p.Z)(),
            [R, j] = (0, n.useState)(""),
            [P, U] = (0, n.useState)(0),
            B = (0, c.f)(),
            G = (0, l.k)(r.V, "getSsoUserSettings"),
            F = (0, b.vV)(a) ? a : "",
            $ = (0, i.K_)({ live: g.C.liveChangeMasterPasswordStatus }, []);
          (0, n.useEffect)(() => {
            A || (F.length && Z.length && s.length) || (0, h.uX)(x.TT);
          }, [A, F, Z, s]),
            (0, n.useEffect)(() => {
              k &&
                G.status === i.rq.Success &&
                B.status === i.rq.Success &&
                (async () => {
                  N === o.SsoMigrationServerMethod.MP && M === o.SsoMigrationServerMethod.SSO && L(E.CHANGE_MP_PROGRESS);
                  const n = e.lee.carbon.localAccounts?.find((e) => e.login === a && "sso" === e.rememberMeType),
                    r = (G.status === i.rq.Success && G.data.rememberMeForSSOPreference) || "true" === localStorage.getItem(_.MG),
                    l = !n && r && B.status === i.rq.Success && !B.data,
                    c = {
                      deviceName: (0, S.M)(z(V)),
                      exist: !0,
                      ssoServiceProviderKey: Z,
                      login: F,
                      ssoToken: s,
                      currentAuths: N,
                      expectedAuths: M,
                      inStore: A,
                      requiredPermissions: (0, C.ox)(),
                      shouldRememberMeForSSO: l
                    };
                  n && t.store.dispatch((0, m.zi)(x.sL)),
                    (await g.C.loginViaSSO(c)).success ? M === o.SsoMigrationServerMethod.MP && L(E.ASK_FOR_MP) : (0, h.uX)(x.TT);
                })();
            }, [k, G.status, B.status]),
            (0, n.useEffect)(() => {
              if ($.status !== i.iD.Received || !$.data) return;
              const { value: e } = $.data;
              U(e);
            }, [$]);
          const W = async ({ password: e }) => {
              const t = { newPassword: e, flow: o.ChangeMPFlowPath.SSO_TO_MP };
              await (async (e) => {
                if ((L(E.CHANGE_MP_PROGRESS), !(await g.C.changeMasterPassword(e)).success)) return (0, h.uX)(x.TT);
              })(t);
            },
            H = async ({ isEu: e, privacyPolicyAndToS: t, setIsLoading: a, subscribed: n }) => {
              var i;
              if (e && !t) {
                const e = new Error("termsOfService set to false on accept submit");
                w.reportError(e), (0, h.uX)(x.rM);
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
                deviceName: (0, S.M)(z(V)),
                exist: !1,
                ssoServiceProviderKey: Z,
                login: F,
                ssoToken: s,
                currentAuths: N,
                expectedAuths: M,
                inStore: !1,
                requiredPermissions: (0, C.ox)(),
                anonymousUserId: (0, f.n5)(w.globalState),
                shouldRememberMeForSSO: "true" === localStorage.getItem(_.MG)
              };
              localStorage.removeItem(_.MG);
              const d = await g.C.loginViaSSO(c);
              if ((a(!1), d.success)) {
                j("");
                let e = v.BJ;
                (e = `${v.Mv}?email=${F}`), (0, y.nL)(e);
              } else {
                const e = F.slice(F.indexOf("@") + 1);
                d.error.code === o.LoginViaSsoCode.SSO_VERIFICATION_FAILED
                  ? j(z("webapp_sso_page_create_account_error", { domain: e }))
                  : j(null != (i = d.error.message) ? i : "");
              }
            },
            { isEu: K } = w.carbon.currentLocation;
          switch (O) {
            case E.ACCOUNT_CREATION:
              return n.createElement(q, { isEu: K, onSubmit: H, memberEmail: F, error: R });
            case E.ASK_FOR_MP:
              return n.createElement(D, { onSubmit: W, dispatchGlobal: w.dispatchGlobal });
            case E.CHANGE_MP_PROGRESS:
              return n.createElement(I, { animation: d, shouldLoopAnimation: !0, progressValue: P });
            case E.D_SPINNER:
            default:
              return n.createElement(
                "div",
                { className: "loadingContainer--z9wx9Wo1ko" },
                n.createElement(u.Z, {
                  height: 150,
                  width: 150,
                  animationParams: { renderer: "svg", animationData: d, loop: !0, autoplay: !0 }
                })
              );
          }
        },
        W = (e) => {
          const { loading: t } = (0, s.G)();
          return t ? null : n.createElement($, { ...e });
        };
    },
    355053: (e, t, a) => {
      a.d(t, { $9: () => o, Ae: () => i, ox: () => r });
      var n = a(342868),
        s = a(453576);
      const i = (e) => {
          const {
              location: { search: t }
            } = e,
            a = {
              login: "",
              ssoToken: "",
              key: "",
              exists: "",
              currentAuths: s.SsoMigrationServerMethod.SSO,
              expectedAuths: s.SsoMigrationServerMethod.SSO,
              inStore: !1
            };
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
            currentAuths: s.SsoMigrationServerMethod.MP,
            expectedAuths: s.SsoMigrationServerMethod.SSO,
            exists: !0,
            inStore: !0
          })}`,
        r = () => (window.location.host.startsWith("console") ? "BILLING" : null);
    },
    577037: (e, t, a) => {
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
    28509: (e, t, a) => {
      a.d(t, { C: () => c });
      var n = a(803843),
        s = a(148038),
        i = a(66941),
        o = a(772257),
        r = a(861927),
        l = a(696832);
      const c = ({ b2c: e, handleCardUpdate: t, pollInterval: a = 2e3, timeoutAmount: c = 6e5 }) => {
        const [d, u] = (0, l.useState)(!1),
          [_, m] = (0, l.useState)({}),
          p = (0, o.Z)(),
          g = p.status !== s.rq.Success || !p.data,
          y = p?.status === s.rq.Success && p.data ? p.data[e ? "b2cSubscription" : "b2bSubscription"]?.billingInformation : void 0,
          b = !(!y?.exp_year || !y?.exp_month) && (0, n.Z)(new Date(y.exp_year, y.exp_month, 0)),
          h = y?.last4 ? Number(y.last4).toLocaleString("en-US", { minimumIntegerDigits: 4, useGrouping: !1 }) : void 0,
          x = y?.type ? (0, r.v)(y.type) : void 0,
          S = y?.exp_year,
          v = y?.exp_month,
          f = S && v ? `${v}/${S.toString().substring(2)}` : "",
          [C, E] = (0, l.useState)(),
          Z = (0, l.useCallback)(() => {
            d && u(!1), C && clearTimeout(C);
          }, [d, C]);
        return (
          (0, l.useEffect)(() => Z, []),
          (0, l.useEffect)(() => {
            if (d) {
              const e = setInterval(() => {
                i.C.refreshSubscriptionInformation();
              }, a);
              if (!C) {
                const e = window.setTimeout(Z, c);
                E(e);
              }
              return () => clearInterval(e);
            }
          }, [a, d, Z, c, C]),
          (0, l.useEffect)(() => {
            if (d && _ && (_.last4DigitsFormatted !== h || _.expFormatted !== f) && (Z(), t)) {
              const e = !_.last4DigitsFormatted;
              t(e);
            }
          }, [d, h, f, _, _.expFormatted, _.last4DigitsFormatted, Z, t]),
          {
            loading: g,
            billingInformation: y,
            hasCreditCardPaymentMethod: y && !!y.last4,
            last4Digits: y?.last4,
            last4DigitsFormatted: h,
            cardSvg: x,
            isExpired: b,
            expYear: y?.exp_year,
            expMonth: y?.exp_month,
            expFormatted: f,
            pollUntilCardUpdate: () => {
              u(!0), m({ last4DigitsFormatted: h, expFormatted: f });
            }
          }
        );
      };
    },
    736111: (e, t, a) => {
      a.d(t, { Z: () => n });
      const n = (0, a(158432).SP)("master-password-reset-requests", {});
    },
    973883: (e, t, a) => {
      a.d(t, { $l: () => i, AS: () => o, Jx: () => n, Qf: () => s, f: () => l, sK: () => r });
      const n = ({ offer: e, currentSeats: t = 0, additionalSeats: a = 0 }) => {
          const n = [...e.priceRanges].sort((e, t) => e.startMembers - t.startMembers),
            s = t + a;
          return n.reduce((e, t) => (t.startMembers < s && t.startMembers > e.startMembers ? t : e), n[0]);
        },
        s = ({ offer: e, currentSeats: t, additionalSeats: a, priceTarget: s = "price" }) =>
          n({ offer: e, currentSeats: t, additionalSeats: a })[s] / (e.duration.includes("y") ? 12 : 1),
        i = ({ offer: e, currentSeats: t, additionalSeats: a }) => {
          const s = n({ offer: e, currentSeats: t, additionalSeats: a }).price;
          return e.duration.includes("y") ? s : 12 * s;
        },
        o = (e) => !!e.name.match(/_team_/u),
        r = (e) => !!e.name.match(/_business_/u),
        l = (e) => (e ? e.priceRanges[1].startMembers - 1 : 0);
    },
    625119: (e, t, a) => {
      a.d(t, { HK: () => p, M2: () => u, Qz: () => d, ZP: () => y, b3: () => _, er: () => g, vg: () => m });
      var n = a(526849);
      const s = (0, a(577037).Z)("directory-sync-key", { displayDialog: !1, checkDirectorySyncKeyRequest: null, validationPostponed: !1 });
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
    754505: (e, t, a) => {
      a.d(t, { LD: () => C, DX: () => v, Bf: () => Z, p_: () => f, tb: () => N });
      var n = a(696832),
        s = a(148038),
        i = a(27302),
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
      var u = a(142897),
        _ = a(453576),
        m = a(361607),
        p = a(351551),
        g = a(201389),
        y = a(635164),
        b = a(416088);
      const h = (e, t = !1) => {
        const a = (0, y.k6)(),
          i = (0, y.Xo)(),
          { translate: o } = (0, g.Z)(),
          { showToast: r, closeToast: c } = (0, u.pm)(),
          d = (0, m._)(),
          h = d.status !== l.rq.Success,
          { onboarding_web_tacgetstarted: x = !1 } = h ? {} : d.data,
          { interacted: S, status: v } = (0, p.d)(_.NotificationName.TacGetStartedDismissPage),
          { isTeamAdmin: f, status: C } = (() => {
            const [e, t] = (0, n.useState)(null),
              a = (0, b.E)();
            if (a.status === s.rq.Success) {
              var i;
              const n = null != (i = a.data.some((e) => e.isTeamAdmin)) && i;
              n !== e && t(n);
            }
            return { status: a.status, isTeamAdmin: e };
          })(),
          E = C === l.rq.Success && v === l.rq.Success && !h;
        return {
          showNotification: (0, n.useCallback)(() => {
            E &&
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
          }, [E, f, S, x]),
          hasDataLoaded: E
        };
      };
      var x = a(771906),
        S = a(177960);
      const v = () => {
          const e = x.G.CHECK_PASSWORD_HEALTH,
            { showNotification: t, hasDataLoaded: a } = h("team_get_started_notification_content_check_password_health_markup", !0),
            { status: o, hasSeenNotification: r, markNotificationAsSeen: l } = d(e),
            { hasSecurityScore: c, status: u } = (0, i.h)(),
            _ = a && u === s.rq.Success && o === s.rq.Success;
          (0, n.useEffect)(() => {
            _ && !r && c && (t(), l(), (0, S.c)(S.O.VisitDashboardPasswordHealth));
          }, [c, r, _]);
        },
        f = () => {
          const e = x.G.INVITE_MEMBERS,
            { showNotification: t, hasDataLoaded: a } = h("team_get_started_notification_content_invite_members_markup", !0),
            { status: o, hasSeenNotification: r, markNotificationAsSeen: l } = d(e),
            { hasMinimumMemberCount: c, status: u } = (0, i.h)(),
            _ = a && u === s.rq.Success && o === s.rq.Success;
          (0, n.useEffect)(() => {
            _ && !r && c && (t(), l(), (0, S.c)(S.O.InvitePlanMembers));
          }, [c, r, _]);
        },
        C = () => {
          const e = x.G.ASSIGN_ADMIN,
            { showNotification: t, hasDataLoaded: a } = h("team_get_started_notification_content_assign_admin_markup", !0),
            { status: o, hasSeenNotification: r, markNotificationAsSeen: l } = d(e),
            { hasMoreThanOneAdmin: c, status: u } = (0, i.h)(),
            _ = a && u === s.rq.Success && o === s.rq.Success;
          (0, n.useEffect)(() => {
            _ && !r && c && (t(), l(), (0, S.c)(S.O.AssignNewAdmin));
          }, [c, r, _]);
        };
      var E = a(459199);
      const Z = () => {
        const e = x.G.CREATE_SHARING_GROUP,
          { showNotification: t, hasDataLoaded: a } = h("team_get_started_notification_content_create_sharing_group_markup", !0),
          { status: o, hasSeenNotification: r, markNotificationAsSeen: l } = d(e),
          { isSharingDisabled: c, status: u } = (0, i.h)(),
          { hasSharedGroupWithMembers: _ = !1, status: m } = (0, E.A)(),
          p = a && u === s.rq.Success && o === s.rq.Success && m === s.rq.Success;
        (0, n.useEffect)(() => {
          p && !r && !c && _ && (t(), l(), (0, S.c)(S.O.CreateSharingGroup));
        }, [c, r, _, p]);
      };
      var T = a(743265);
      const N = () => {
        const e = x.G.SHARE_ITEM,
          { showNotification: t, hasDataLoaded: a } = h("team_get_started_notification_content_share_item_markup", !0),
          { status: o, hasSeenNotification: r, markNotificationAsSeen: l } = d(e),
          { isSharingDisabled: c, status: u } = (0, i.h)(),
          { hasSharedAnItemWithAGroup: _ = !1, status: m } = (0, T.W)(),
          p = a && u === s.rq.Success && o === s.rq.Success && m === s.rq.Success;
        (0, n.useEffect)(() => {
          p && !r && !c && _ && (t(), l(), (0, S.c)(S.O.ShareItem));
        }, [c, r, _, p]);
      };
    },
    177960: (e, t, a) => {
      a.d(t, { O: () => n.OnboardingTask, c: () => i });
      var n = a(660765),
        s = a(62429);
      const i = (e) => {
        (0, s.Kz)(new n.UserCompleteOnboardingTaskEvent({ onboardingTask: e }));
      };
    },
    743265: (e, t, a) => {
      a.d(t, { W: () => o });
      var n = a(133354),
        s = a(352116),
        i = a(675542);
      const o = () => {
        const { currentSpaceId: e } = (0, s.fV)(),
          t = (0, i.c)("ascend", e);
        return t.status !== n.rq.Success
          ? { status: t.status }
          : { status: n.rq.Success, hasSharedAnItemWithAGroup: !!t.data.items?.find((e) => e.itemCount > 0) };
      };
    },
    459199: (e, t, a) => {
      a.d(t, { A: () => o });
      var n = a(148038),
        s = a(133354),
        i = a(66941);
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
    195764: (e, t, a) => {
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
    796365: (e, t, a) => {
      a.d(t, { m: () => o });
      var n = a(799852),
        s = a(133354),
        i = a(57904);
      const o = () => {
        const { data: e, status: t } = (0, n.k)(i.h, "isTeamCreator");
        return { status: t, isTeamCreator: t === s.rq.Success ? e : null };
      };
    },
    27302: (e, t, a) => {
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
    771906: (e, t, a) => {
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
    760946: (e, t, a) => {
      a.d(t, { Z: () => i, w: () => s });
      const n = (0, a(577037).Z)("ie-drop-notification", { displayIeDropNotification: !0 }),
        s = n.registerAction("IE_DROP_NOTIFICATION", () => ({ displayIeDropNotification: !1 })),
        i = n;
    },
    985548: (e, t, a) => {
      a.d(t, { q: () => l });
      var n = a(696832),
        s = a(142897),
        i = a(500275),
        o = a(201389),
        r = a(601765);
      const l = () => {
        const { translate: e } = (0, o.Z)(),
          { teamOffers: t } = (0, i.a)({}),
          a = (0, r.t)();
        if (!t || !a.hasLimitedOffer) return null;
        const { translatedEquivalentPrice: l, translatedPrice: c } = a;
        return (0, s.tZ)(s.ke, {
          title: e("team_dashboard_upgrade_tile_infobox_title"),
          description: (0, s.tZ)(
            n.Fragment,
            null,
            (0, s.tZ)(
              s.X6,
              { as: "h5", textStyle: "ds.title.block.small", color: "ds.text.brand.standard", sx: { marginBottom: "4px" } },
              (0, s.tZ)("span", { sx: { textDecoration: "line-through" } }, l),
              " ",
              c,
              " ",
              e("team_dashboard_upgrade_tile_infobox_price")
            ),
            (0, s.tZ)(
              s.nv,
              { textStyle: "ds.body.helper.regular", color: "ds.text.brand.standard" },
              e("team_dashboard_upgrade_tile_infobox_description")
            )
          ),
          mood: "brand"
        });
      };
    },
    601765: (e, t, a) => {
      a.d(t, { t: () => c });
      var n = a(148038),
        s = a(467387),
        i = a(38025),
        o = a(500275),
        r = a(201389),
        l = a(973883);
      const c = () => {
        const { translate: e } = (0, r.Z)(),
          t = (0, i.Y)(),
          { teamOffers: a } = (0, o.a)({});
        if (!a || t.status !== n.rq.Success) return { hasLimitedOffer: !1 };
        const c = !(0, s.NG)(t.data),
          { businessOffer: d } = a,
          u = (0, l.Qf)({ offer: d }),
          _ = (0, l.Qf)({ offer: d, priceTarget: "equivalentPrice" });
        return {
          hasLimitedOffer: c && u !== _,
          translatedPrice: e.price(d.currency, u / 100, { notation: "compact" }),
          translatedEquivalentPrice: e.price(d.currency, _ / 100, { notation: "compact" })
        };
      };
    },
    156652: (e, t, a) => {
      a.d(t, {
        Jo: () => y,
        Rb: () => g,
        S2: () => d,
        VW: () => _,
        Wq: () => l,
        ZP: () => h,
        bh: () => c,
        bj: () => u,
        eY: () => b,
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
        b = o.action("members-proposed", ({ state: e, param: t }) => ({
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
        h = o;
    },
    1294: (e, t, a) => {
      a.d(t, { Z: () => d });
      var n = a(158432),
        s = a(816694),
        i = a(986081),
        o = a(901500),
        r = a(156652),
        l = a(622880),
        c = a(736111);
      const d = (0, n.SP)("team", {}, [s.ZP, i.ZP, o.ZP, r.ZP, l.Z, c.Z]);
    },
    174498: (e, t, a) => {
      a.d(t, { Z: () => cx });
      var n = a(696832),
        s = a(974769),
        i = a(635164),
        o = a(660765),
        r = a(148038),
        l = a(453576),
        c = a(695495),
        d = a(441217),
        u = a(38025),
        _ = a(174183),
        m = a(500275),
        p = a(201389),
        g = a(895576),
        y = a(142897),
        b = a(28509);
      const h = () => {
        const { translate: e } = (0, p.Z)(),
          { loading: t, last4DigitsFormatted: a, expFormatted: n, cardSvg: s } = (0, b.C)({});
        return t
          ? (0, y.tZ)(d.HoD, { color: d.colors.midGreen00 })
          : (0, y.tZ)(
              d.Ejs,
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
              (0, y.tZ)(d.X6q, { size: "small" }, e("team_account_addseats_success_credit_card_header")),
              (0, y.tZ)(
                d.Ejs,
                { flexDirection: "column", gap: "8px" },
                (0, y.tZ)(
                  d.Ejs,
                  { alignItems: "center", gap: "8px" },
                  s,
                  (0, y.tZ)(d.nvN, { color: "ds.text.neutral.standard" }, "•••• ", a)
                ),
                (0, y.tZ)(
                  d.Ejs,
                  null,
                  (0, y.tZ)(
                    d.nvN,
                    { color: "ds.text.neutral.standard" },
                    e("team_account_addseats_success_credit_card_expires", { expirationDate: n })
                  )
                )
              )
            );
      };
      var x = a(772257);
      const S = () => {
        const e = (0, x.Z)(),
          t = e.status !== r.rq.Success || !e.data,
          a = e?.status === r.rq.Success ? e?.data?.b2bSubscription?.billingInformation : null,
          n = a?.country;
        return { loading: t, billingCountry: n };
      };
      var v = a(139378),
        f = a(75034),
        C = a(582234),
        E = a(281088),
        Z = a(963834),
        T = a(345727);
      const N = {
          alignItems: "center",
          backgroundColor: "ds.background.alternate",
          borderBottom: "1px solid ds.border.neutral.quiet.idle",
          display: "flex",
          height: "80px",
          justifyContent: "flex-end",
          padding: "0 48px"
        },
        D = ({ children: e }) => (0, y.tZ)("header", { sx: N }, e),
        M = {
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
        I = (e) => {
          const { brand: t, children: a, header: n, sideNav: s, banner: i, dialog: o, bottomButton: r } = e;
          return (0, y.tZ)(
            "div",
            { sx: M.LAYOUT_CONTAINER },
            (0, y.tZ)(
              "div",
              { sx: M.MAIN_AREA },
              (0, y.tZ)("div", { sx: M.SIDE_NAV }, (0, y.tZ)("div", null, t), (0, y.tZ)("div", null, s), (0, y.tZ)("div", null, r)),
              (0, y.tZ)(
                "div",
                { sx: M.CONTENT },
                i ? (0, y.tZ)("div", null, i) : null,
                (0, y.tZ)("div", null, n),
                (0, y.tZ)("div", null, a)
              ),
              o ? (0, y.tZ)("div", null, o, " ") : null
            )
          );
        };
      var A = a(383849),
        w = a.n(A),
        k = a(467387),
        O = a(887239),
        L = a(808451),
        z = a(447725),
        R = a(326061),
        j = a(62429),
        P = a(222924),
        U = a(65255),
        B = a(915970),
        G = a(542293);
      const F = n.createContext(null),
        q = "NETWORK ERROR",
        V = ({ globalReportError: e, children: t }) => {
          const [a, s] = n.useState([]),
            { translate: i } = (0, p.Z)(),
            o = (e) => {
              a.find((t) => t.title === e.title && t.message === e.message) || s((t) => [...t, e]);
            };
          return n.createElement(
            F.Provider,
            {
              value: {
                queue: a,
                addAlertToQueue: o,
                popAlertFromQueue: () => {
                  s((e) => e.slice(1));
                },
                reportTACError: (t, a) => {
                  t.message.toUpperCase() === q &&
                    o({ title: i("_common_alert_network_error_title"), message: i("_common_alert_network_error_message") }),
                    e(t, a);
                }
              }
            },
            t
          );
        },
        $ = () => {
          const e = n.useContext(F);
          if (!e) throw new Error("useAlertQueue must be called from within an AlertQueueProvider");
          return e;
        },
        W = "text--SF6xWDSFRD",
        H = "error--Pyuel29pVU",
        K = "team_feedback_dialog_button_ok",
        Y = "team_feedback_dialog_error_markup",
        Q = ({ lee: e, onDismiss: t, onFeedbackSent: a }) => {
          const [s, i] = (0, n.useState)(!0),
            [r, l] = (0, n.useState)(!1),
            [u, _] = (0, n.useState)(!1),
            m = (0, B.w)(U.w.ItadminTacPhonesupport),
            { translate: g } = (0, p.Z)(),
            { reportTACError: y } = $(),
            b = (0, n.useRef)();
          (0, n.useEffect)(() => {
            (0, j.Nc)(o.PageView.TacAccountSendFeedback, o.BrowseComponent.Tac);
          }, []);
          const h = () => {
            (0, j.Kz)(new o.UserCallToActionEvent({ hasChosenNoAction: !0 })), t();
          };
          function x(e) {
            const { value: t } = e.target;
            i(!t);
          }
          async function S() {
            l(!0), _(!1);
            try {
              var t;
              await e.apiMiddleware.feedback?.send({ body: null != (t = b.current?.value) ? t : "" }),
                (0, j.Kz)(
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
              y(t), l(!1), _(!0);
            }
          }
          return m
            ? (0, c.tZ)(
                G.o,
                {
                  isOpen: !0,
                  onRequestClose: h,
                  footer: (0, c.tZ)(d.cNS, {
                    intent: "primary",
                    primaryButtonTitle: g(K),
                    primaryButtonOnClick: () => S(),
                    primaryButtonProps: { disabled: s || r }
                  }),
                  title: g("team_feedback_dialog_upd_title"),
                  showCloseIcon: !0
                },
                (0, c.tZ)("div", { className: W }, g.markup("team_feedback_dialog_upd_text_markup", {}, { linkTarget: "_blank" })),
                (0, c.tZ)(d.oil, {
                  sx: { resize: "vertical", maxHeight: "300px" },
                  fullWidth: !0,
                  ref: b,
                  multiline: !0,
                  placeholder: g("team_feedback_dialog_upd_textarea_label"),
                  onChange: x.bind(void 0)
                }),
                u ? (0, c.tZ)("div", { className: H }, g.markup(Y)) : null
              )
            : (0, c.tZ)(
                G.o,
                {
                  isOpen: !0,
                  onRequestClose: h,
                  footer: (0, c.tZ)(d.cNS, {
                    intent: "primary",
                    primaryButtonTitle: g(K),
                    primaryButtonOnClick: () => S(),
                    primaryButtonProps: { disabled: s || r },
                    secondaryButtonTitle: g("team_feedback_dialog_button_cancel"),
                    secondaryButtonOnClick: h
                  }),
                  title: g("team_feedback_dialog_title")
                },
                (0, c.tZ)("div", { className: W }, g.markup("team_feedback_dialog_text_markup", {}, { linkTarget: "_blank" })),
                (0, c.tZ)(d.oil, {
                  sx: { resize: "vertical", maxHeight: "300px" },
                  fullWidth: !0,
                  ref: b,
                  multiline: !0,
                  placeholder: g("team_feedback_dialog_textarea_label"),
                  onChange: x.bind(void 0)
                }),
                u ? (0, c.tZ)("div", { className: H }, g.markup(Y)) : null
              );
        },
        X = ({ onDismiss: e }) => {
          const { translate: t } = (0, p.Z)();
          return n.createElement(
            "div",
            null,
            n.createElement(
              G.o,
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
      var J = (function (e) {
        return (e[(e.FeedbackPopup = 0)] = "FeedbackPopup"), (e[(e.ResultPopup = 1)] = "ResultPopup"), (e[(e.Done = 2)] = "Done"), e;
      })(J || {});
      const ee = ({ lee: e, onDismiss: t, onSend: a }) => {
        const [s, i] = (0, n.useState)(J.FeedbackPopup);
        let o;
        const r = () => {
          clearTimeout(o), i(J.Done), a();
        };
        return (0, c.tZ)(
          "div",
          null,
          s === J.FeedbackPopup &&
            (0, c.tZ)(Q, {
              lee: e,
              onDismiss: t,
              onFeedbackSent: () => {
                i(J.ResultPopup),
                  (o = window.setTimeout(() => {
                    r();
                  }, 1e4));
              }
            }),
          s === J.ResultPopup && (0, c.tZ)(X, { onDismiss: r })
        );
      };
      var te = a(186865),
        ae = a(760797);
      const ne = {
          CONTAINER: { display: "flex", padding: "16px 8px", justifyContent: "space-between", alignItems: "center" },
          ITEM: { display: "flex", gap: "16px", alignItems: "flex-start" }
        },
        se = ({ title: e, description: t, iconName: a, button: n }) => {
          const { content: s, onClick: i, isUpgradeButton: o, isRoleLink: r } = n;
          return (0, y.tZ)(
            "div",
            { sx: ne.CONTAINER },
            (0, y.tZ)(
              "div",
              { sx: ne.ITEM },
              (0, y.tZ)(y.JO, { name: a, size: "large", color: "ds.text.neutral.standard" }),
              (0, y.tZ)(
                "div",
                { sx: { gap: " 4px", maxWidth: "320px" } },
                (0, y.tZ)(y.nv, { textStyle: "ds.title.block.small", color: "ds.text.neutral.catchy" }, e),
                (0, y.tZ)(y.nv, { textStyle: "ds.body.reduced.regular", color: "ds.text.neutral.quiet" }, t)
              )
            ),
            (0, y.tZ)(
              y.zx,
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
        ie = () =>
          (0, y.tZ)("hr", {
            sx: { border: "0", borderTop: "1px solid ds.border.neutral.quiet.idle", height: "1px", width: "100%", mt: "8px", mb: "8px" }
          });
      var oe = a(145623);
      let re = (function (e) {
        return (e.SECURITY_GUIDANCE = "security_guidance"), (e.TRAINING = "training"), (e.SEND_MESSAGE = "send_message"), e;
      })({});
      const le = { [re.SECURITY_GUIDANCE]: oe.mA, [re.TRAINING]: oe.J0, [re.SEND_MESSAGE]: oe.hc },
        ce = {
          [re.SECURITY_GUIDANCE]: o.CallToAction.RequestDemo,
          [re.TRAINING]: o.CallToAction.RegisterWebinar,
          [re.SEND_MESSAGE]: o.CallToAction.SendEmail
        },
        de = (e, t) => {
          const a = [o.CallToAction.SendEmail, o.CallToAction.RequestDemo, o.CallToAction.RegisterWebinar, o.CallToAction.Dismiss];
          a.push(t ? o.CallToAction.ContactPhoneSupport : o.CallToAction.RequestUpgrade),
            (0, j.Kz)(new o.UserCallToActionEvent({ callToActionList: a, chosenAction: ce[e], hasChosenNoAction: !1 })),
            (0, z.Yo)(le[e]);
        };
      var ue, _e, me, pe;
      const ge = ({ onDismiss: e }) => {
        const { translate: t } = (0, p.Z)(),
          { routes: a } = (0, i.Xo)(),
          s = (0, O.B)(),
          r = (0, te.C)(),
          [l, c] = (0, n.useState)(null),
          u = null === l || null === r;
        return (
          (0, n.useEffect)(() => {
            (async () => {
              const e = await (0, ae.I)();
              c(e.capabilities.phoneSupport.enabled);
            })();
          }, []),
          (0, n.useEffect)(() => {
            (0, j.Nc)(o.PageView.TacModalContactSupport);
          }, []),
          (0, y.tZ)(
            y.Vq,
            {
              isOpen: !0,
              onClose: () =>
                ((e, t) => {
                  const a = [o.CallToAction.SendEmail, o.CallToAction.RequestDemo, o.CallToAction.RegisterWebinar, o.CallToAction.Dismiss];
                  a.push(t ? o.CallToAction.ContactPhoneSupport : o.CallToAction.RequestUpgrade),
                    (0, j.Kz)(new o.UserCallToActionEvent({ callToActionList: a, hasChosenNoAction: !0 })),
                    e();
                })(e, l),
              closeActionLabel: t("_common_dialog_dismiss_button"),
              title: t("team_contact_support_dialog_title")
            },
            u
              ? (0, y.tZ)(y.nv, { sx: { textAlign: "center" } }, ue || (ue = (0, y.tZ)(d.HoD, { color: "primaries.5", size: 44 })))
              : (0, y.tZ)(
                  n.Fragment,
                  null,
                  (0, y.tZ)(y.nv, { sx: { marginBottom: "16px" } }, t("team_contact_support_dialog_text")),
                  (0, y.tZ)(
                    "div",
                    { sx: { gap: "8px" } },
                    (0, y.tZ)(se, {
                      title: t("team_contact_support_phone_support_title"),
                      description: t("team_contact_support_phone_support_subtitle"),
                      iconName: "ItemPhoneHomeOutlined",
                      button: {
                        content: t(l ? "team_contact_support_request_call" : "team_contact_support_upgrade_to_business_cta"),
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
                                (0, j.Kz)(
                                  new o.UserCallToActionEvent({
                                    callToActionList: r,
                                    chosenAction: o.CallToAction.ContactPhoneSupport,
                                    hasChosenNoAction: !1
                                  })
                                ),
                                void (0, z.Yo)(oe.$b))
                              : e || (!a && !n)
                              ? (r.push(o.CallToAction.RequestUpgrade),
                                (0, j.Kz)(
                                  new o.UserCallToActionEvent({
                                    callToActionList: r,
                                    chosenAction: o.CallToAction.RequestUpgrade,
                                    hasChosenNoAction: !1
                                  })
                                ),
                                (0, i.uX)(`${t.teamAccountChangePlanRoutePath}?plan=business`))
                              : (r.push(o.CallToAction.RequestUpgrade),
                                (0, j.Kz)(
                                  new o.UserCallToActionEvent({
                                    callToActionList: r,
                                    chosenAction: o.CallToAction.RequestUpgrade,
                                    hasChosenNoAction: !1
                                  })
                                ),
                                void (0, z.Yo)(
                                  `${oe.ub}?plan=business&subCode=${
                                    null != s ? s : ""
                                  }&utm_source=button:upgrade_business_tier+origin_page:tac/modal_contact_support+origin_component:main_app`
                                ));
                          })(l, a, r?.isFreeTrial, r?.isGracePeriod, s?.subscriptionCode),
                        isUpgradeButton: !l,
                        isRoleLink: l || r?.isFreeTrial || r?.isGracePeriod
                      }
                    }),
                    _e || (_e = (0, y.tZ)(ie, null)),
                    (0, y.tZ)(se, {
                      title: t("team_contact_support_security_guidance_title"),
                      description: t("team_contact_support_security_guidance_subtitle"),
                      iconName: "ProtectionOutlined",
                      button: {
                        content: t("team_contact_support_request_demo"),
                        onClick: () => de(re.SECURITY_GUIDANCE, l),
                        isRoleLink: !0
                      }
                    }),
                    me || (me = (0, y.tZ)(ie, null)),
                    (0, y.tZ)(se, {
                      title: t("team_contact_support_training_title"),
                      description: t("team_contact_support_training_subtitle"),
                      iconName: "AccountSettingsOutlined",
                      button: { content: t("team_contact_support_register_for_webinar"), onClick: () => de(re.TRAINING, l), isRoleLink: !0 }
                    }),
                    pe || (pe = (0, y.tZ)(ie, null)),
                    (0, y.tZ)(se, {
                      title: t("team_contact_support_help_customer_support_title"),
                      description: t("team_contact_support_help_customer_support_subtitle"),
                      iconName: "ItemEmailOutlined",
                      button: { content: t("team_contact_support_send_message"), onClick: () => de(re.SEND_MESSAGE, l), isRoleLink: !0 }
                    })
                  )
                )
          )
        );
      };
      var ye;
      const be = ({ showVaultNavigationModal: e, setShowVaultNavigationModal: t, onBeforeNavigate: a }) => {
          const { translate: s } = (0, p.Z)();
          return (0, y.tZ)(
            d.VqE,
            {
              closeIconName: s("_common_dialog_dismiss_button"),
              isOpen: e,
              onClose: () => {
                (0, j.Kz)(
                  new o.UserCallToActionEvent({
                    callToActionList: [o.CallToAction.Skip, o.CallToAction.InstallExtension],
                    hasChosenNoAction: !0
                  })
                ),
                  t(!1);
              }
            },
            (0, y.tZ)(d.$N8, {
              title: (0, y.tZ)(
                "span",
                { color: "ds.text.neutral.catchy", sx: { margin: "0px 15px", fontSize: "25px", fontWeight: "800", display: "block" } },
                s("team_vault_navigation_dialog_title")
              )
            }),
            (0, y.tZ)(
              d.a7O,
              null,
              (0, y.tZ)(
                y.nv,
                { sx: { margin: "15px", fontSiz: "16px" }, color: "ds.text.neutral.standard" },
                s("team_vault_navigation_dialog_paragrah")
              ),
              (0, y.tZ)(
                y.nv,
                { sx: { margin: "15px", fontSiz: "16px" }, color: "ds.text.neutral.standard" },
                s("team_vault_navigation_dialog_paragrah_two")
              )
            ),
            (0, y.tZ)(d.cNS, {
              primaryButtonTitle: (0, y.tZ)(
                n.Fragment,
                null,
                (0, y.tZ)("span", { sx: { marginRight: "8px" } }, s("team_vault_navigation_dialog_install_cta")),
                ye || (ye = (0, y.tZ)(y.JO, { name: "ActionOpenExternalLinkOutlined", size: "small", color: "ds.text.inverse.catchy" }))
              ),
              primaryButtonOnClick: () => {
                (0, j.Kz)(
                  new o.UserCallToActionEvent({
                    callToActionList: [o.CallToAction.Skip, o.CallToAction.InstallExtension],
                    chosenAction: o.CallToAction.InstallExtension,
                    hasChosenNoAction: !1
                  })
                ),
                  a?.(),
                  (0, z.Yo)(oe.yi);
              },
              primaryButtonProps: { type: "button" },
              secondaryButtonTitle: s("team_vault_navigation_dialog_skip_btn"),
              secondaryButtonOnClick: () => {
                (0, j.Kz)(
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
        he = n.createContext({
          isVaultNavigationModalOpen: !1,
          setIsVaultNavigationModalOpen: () => {},
          setOnBeforeNavigateCallback: () => {}
        }),
        xe = ({ children: e }) => {
          const [t, a] = n.useState(!1),
            [s, i] = n.useState(void 0);
          return n.createElement(
            he.Provider,
            { value: { isVaultNavigationModalOpen: t, setIsVaultNavigationModalOpen: a, setOnBeforeNavigateCallback: i } },
            e,
            t ? n.createElement(be, { showVaultNavigationModal: t, setShowVaultNavigationModal: a, onBeforeNavigate: s }) : null
          );
        };
      var Se = a(581598),
        ve = a(242714),
        fe = a(64183);
      const Ce = () => {
        const e = (0, te.C)(),
          { isTeamSoftDiscontinued: t, isTrial: a } = (0, fe.lZ)(),
          n = (0, ve.o)(U.w.EcommerceWebB2BDiscontinuationPhase1),
          { translate: s } = (0, p.Z)();
        if (!e || "boolean" != typeof t || "boolean" != typeof a || "boolean" != typeof n) return null;
        const i = e.daysLeftInTrial,
          o = e.spaceTier === Se.lD.Team,
          r = e.isGracePeriod,
          l = t && a && n;
        return (0, y.tZ)(y.Ct, {
          label: l
            ? s("trial_ended_discontinued")
            : r
            ? s("free_trial_expired_badge")
            : s(o ? "team_trial_days_left_badge" : "business_trial_days_left_badge", { count: i }),
          mood: r || l ? "warning" : "brand",
          layout: "labelOnly",
          intensity: r ? "catchy" : "quiet",
          sx: { marginTop: "3px" }
        });
      };
      var Ee, Ze;
      const Te = ({ lee: e }) => {
        const [t, a] = (0, n.useState)(!1),
          [s, r] = (0, n.useState)(!1),
          [l, c] = (0, n.useState)(!1),
          u = (0, O.B)(),
          { translate: _ } = (0, p.Z)(),
          m = (0, R.a)(e.dispatchGlobal),
          g = (0, P.w)(),
          { setIsVaultNavigationModalOpen: b } = (0, n.useContext)(he),
          { routes: h } = (0, i.Xo)(),
          x = (e, t, a) => (e) => {
            a(e);
          },
          S = ({ className: e, ...t }) =>
            (0, y.tZ)(d.zxk, { type: "button", nature: "ghost", className: w()("dropdownElement--fRxFyumXai", e), ...t }),
          v = s ? (0, y.tZ)(ee, { lee: e, onDismiss: () => r(!1), onSend: () => r(!1) }) : null,
          f = l ? (0, y.tZ)(ge, { onDismiss: () => c(!1) }) : null,
          C = u?.premiumStatus && !(0, k.wt)(u?.premiumStatus) && ((0, k.pq)(u?.premiumStatus) || (0, k.f1)(u?.premiumStatus)),
          E = u?.premiumStatus && (0, k.pq)(u?.premiumStatus) ? "team" : "business",
          Z = u?.premiumStatus && (0, k.wt)(u?.premiumStatus),
          T = e.permission.adminAccess.hasBillingAccess,
          N = `button:buy_dashlane+click_origin:account_dropdown+origin_page:${g || void 0}+origin_component:main_app`,
          D = `${oe.ub}?plan=${E}&subCode=${u?.subscriptionCode}&utm_source=${N}`;
        return (0, y.tZ)(
          n.Fragment,
          null,
          (0, y.tZ)(
            "div",
            { className: "teamAccountDropdown--XD04fGIw1S" },
            (0, y.tZ)(
              L.Lt,
              {
                alignment: L.oA.End,
                position: L.ir.Bottom,
                onToggle: () => {
                  a(!t);
                },
                withBackdrop: !1,
                renderRoot: (e) =>
                  ((e) =>
                    (0, y.tZ)(
                      y.zx,
                      {
                        mood: "neutral",
                        intensity: "quiet",
                        layout: "iconTrailing",
                        icon: t ? "CaretUpOutlined" : "CaretDownOutlined",
                        onClick: e
                      },
                      _("team_account")
                    ))(e)
              },
              (0, y.tZ)(
                "div",
                { className: "dropdownMenu--Uz1kni0KIt" },
                T
                  ? (0, y.tZ)(
                      S,
                      {
                        onClick: x(0, 0, () => {
                          (0, i.uX)(h.teamAccountRoutePath);
                        })
                      },
                      _("team_plan")
                    )
                  : null,
                (0, y.tZ)(
                  S,
                  {
                    onClick: x(0, 0, () => {
                      (0, i.uX)("/");
                    })
                  },
                  _("team_webapp")
                ),
                Z && T
                  ? (0, y.tZ)(
                      S,
                      {
                        onClick: x(
                          0,
                          0,
                          () => (
                            (0, j.Kz)(new o.UserClickEvent({ button: o.Button.BuyDashlane, clickOrigin: o.ClickOrigin.AccountDropdown })),
                            void (0, z.Yo)(D)
                          )
                        )
                      },
                      (0, y.tZ)("div", null, _("team_buy_dashlane"), Ee || (Ee = (0, y.tZ)(Ce, null)))
                    )
                  : null,
                C && T
                  ? (0, y.tZ)(S, { onClick: x(0, 0, () => (0, i.uX)(`${h.teamAccountChangePlanRoutePath}`)) }, _("team_upgrade"))
                  : null,
                (0, y.tZ)(S, { onClick: x(0, 0, () => (0, z.Yo)(oe.Pr)) }, _("team_service_status")),
                (0, y.tZ)(S, { onClick: x(0, 0, () => (0, z.Yo)(oe.FX)) }, _("team_support")),
                T ? (0, y.tZ)(S, { onClick: () => c(!0) }, _("team_contact_support_menu_item")) : null,
                (0, y.tZ)(S, { onClick: x(0, 0, () => r(!0)) }, _("team_feedback")),
                Ze || (Ze = (0, y.tZ)("hr", null)),
                (0, y.tZ)(
                  S,
                  {
                    onClick: x(0, 0, () => {
                      m();
                    }),
                    className: "logout--x9WN8NkY4R"
                  },
                  _("team_logout")
                )
              )
            )
          ),
          v,
          f
        );
      };
      var Ne = a(361607),
        De = a(351551);
      let Me = (function (e) {
        return (
          (e.POLICIES = "policies"),
          (e.DUO = "duo"),
          (e.DIRECTORY_SYNC = "directory-sync"),
          (e.ACCOUNT_RECOVERY = "account-recovery"),
          (e.SSO = "sso"),
          e
        );
      })({});
      var Ie = a(140857);
      const Ae = n.createContext(null),
        we = ({ children: e }) => {
          const [t, a] = n.useState(!1);
          return n.createElement(Ae.Provider, { value: { hasNewBreaches: t, setHasNewBreaches: a } }, e);
        },
        ke = () => {
          const e = n.useContext(Ae);
          if (!e) throw new Error("useSideNavNotification must be called from within an SideNavNotificationProvider");
          return e;
        },
        Oe = U.w.EcommerceWebPaywallUpdate;
      function Le(e) {
        var t, a;
        const n = (0, O.B)(),
          s = (0, ve.o)(Oe),
          i = (0, te.C)();
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
      var ze = a(796365),
        Re = a(15192),
        je = a(133354),
        Pe = a(817559);
      const Ue = ({ isSidenavCollapsed: e, settingsRoute: t, children: a }) => {
          const { translate: n } = (0, p.Z)(),
            s = (0, Re.k6)(),
            i = (0, Pe.h)(),
            { unseen: o, setAsSeen: r } = (0, De.m)(l.NotificationName.AccountRecoveryAvailableAdminTooltip);
          return !o || i.status !== je.rq.Success || i.data
            ? (0, c.tZ)("div", null, a)
            : (0, c.tZ)(
                "div",
                { sx: { position: "relative" } },
                (0, c.tZ)(
                  d.ua7,
                  {
                    sx: { width: "312px", minWidth: "312px", textAlign: "left", top: e ? 0 : "-100px" },
                    trigger: "persist",
                    placement: "left",
                    offset: [0, 30],
                    arrowSize: 12,
                    content: (0, c.tZ)(
                      d.Ejs,
                      { gap: "8px", sx: { padding: "8px" } },
                      (0, c.tZ)(
                        d.nvN,
                        { size: "large", as: "h3", sx: { fontWeight: 600, color: "ds.text.inverse.catchy" } },
                        n("team_account_recovery_popover_title")
                      ),
                      (0, c.tZ)(d.nvN, { color: "white", size: "x-small" }, n("team_account_recovery_popover_description")),
                      (0, c.tZ)(
                        d.Ejs,
                        { gap: "8px", justifyContent: "flex-end", sx: { width: "100%", marginTop: "8px" } },
                        (0, c.tZ)(
                          y.zx,
                          { type: "button", mood: "neutral", size: "small", "data-testid": "ar-tooltip-dismiss", onClick: () => r() },
                          n("team_account_recovery_popover_dismiss")
                        ),
                        (0, c.tZ)(
                          y.zx,
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
                  (0, c.tZ)("div", { sx: { position: "relative" } }, " ", a)
                )
              );
        },
        Be = {
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
        Ge = ({ collapsed: e, hasNotification: t, icon: a, label: n, endAdornment: s, selected: i, ...o }) => {
          const r = (0, y.jM)([Be.CONTAINER, e ? Be.CONTAINER_COLLAPSED : Be.TEXT_MEDIUM, i ? Be.CONTAINER_SELECTED : {}]),
            l = (0, y.jM)([Be.ICON, e ? Be.ICON_COLLAPSED : {}]),
            c = (0, y.jM)([Be.LABEL, e ? Be.LABEL_COLLAPSED : Be.TEXT_MEDIUM]),
            d = (0, y.jM)([Be.NOTIFICATION, e ? Be.NOTIFICATION_COLLAPSED : {}]);
          return (0, y.tZ)(
            "span",
            { sx: r, ...o },
            (0, y.tZ)("span", { sx: l }, " ", a, " "),
            s
              ? (0, y.tZ)(
                  "div",
                  { sx: Be.LABEL_CONTAINER },
                  (0, y.tZ)("span", { sx: c }, n),
                  (0, y.tZ)("div", { sx: e ? Be.END_ADORNMENT_COLLAPSED : {} }, s)
                )
              : (0, y.tZ)("span", { sx: c }, n),
            t ? (0, y.tZ)("span", { sx: d }) : null
          );
        };
      var Fe = a(482598),
        qe = a(799852),
        Ve = a(375062),
        $e = a(751009);
      const We = () => {
          const e = (0, ve.o)(U.w.SharingVaultWebRestrictSharingToTeamDev),
            { translate: t } = (0, p.Z)(),
            { markNewRestrictSharingPolicySeen: a } = (0, Fe.u)(Ve.t),
            { data: n, status: s } = (0, qe.k)(Ve.t, "hasSeenNewRestrictSharingPolicy");
          return !e || s !== je.rq.Success || n
            ? null
            : (0, y.tZ)($e.M, {
                title: t("team_tooltip_title_restrict_sharing_info"),
                description: t("team_tooltip_description_restrict_sharing_info"),
                setIsNotificationVisible: a
              });
        },
        He = {
          collapsedLogo: "collapsedLogo--BjOqWIOARt",
          settingsMenuContainer: "settingsMenuContainer--EascJOgBpz",
          settingsHoverContainer: "settingsHoverContainer--z9ins4al2D",
          iconContainer: "iconContainer--E97FJLapaB",
          tooltipMenuOption: "tooltipMenuOption--uuMY2Xcfk0",
          accordionLinkWithBadge: "accordionLinkWithBadge--j4Qg9gk9xp",
          securityCategory: "securityCategory--Clfv_8oKCw",
          categoryTitle: "categoryTitle--krvL3iQ_mG"
        };
      var Ke, Ye, Qe, Xe, Je, et, tt, at, nt, st, it, ot, rt, lt, ct;
      const dt = "team_settings_menu_title_account_recovery",
        ut = "team_settings_menu_title_directory_sync",
        _t = "team_settings_tab_duo",
        mt = "team_settings_menu_title_policies",
        pt = "team_settings",
        gt = "team_settings_menu_title_single_sign_on",
        yt = "team_new_label",
        bt = "team_upgrade_label",
        ht = (e, t) => {
          var a;
          return (null != (a = t?.[e].length) ? a : 0) > 0;
        },
        xt = ({ isCollapsed: e = !1, permissionChecker: t, routes: a, selectedTab: n, teamNotifications: u, teamSettings: _ }) => {
          var m;
          const { translate: g } = (0, p.Z)(),
            b = {
              DIRECTORY_SYNC: `${a.teamSettingsRoutePath}${s.B9.DIRECTORY_SYNC}`,
              DUO: `${a.teamSettingsRoutePath}${s.B9.DUO}`,
              MASTER_PASSWORD_POLICIES: `${a.teamSettingsRoutePath}${s.B9.MASTER_PASSWORD_POLICIES}`,
              POLICIES: `${a.teamSettingsRoutePath}${s.B9.POLICIES}`,
              SSO: `${a.teamSettingsRoutePath}${s.B9.SSO}`
            },
            { unseen: h } = (0, De.m)(l.NotificationName.TacDarkWebInsightsNewBadge),
            { hasNewBreaches: x } = ke(),
            { isTeamSoftDiscontinued: S } = (0, fe.lZ)(),
            v = (0, Ne._)(),
            f = v.status !== r.rq.Success,
            { interacted: C, status: E } = (0, De.d)(l.NotificationName.TacGetStartedDismissPage),
            { shouldShowBuyOrUpgradePaywall: Z, planType: T } = null != (m = Le(t.adminAccess)) ? m : {},
            { isTeamCreator: N, status: D } = (0, ze.m)(),
            { "BBCOM-238-duo": M = !1, onboarding_web_tacgetstarted: I = !1 } = f ? {} : v.data,
            A = E === r.rq.Loading || D === r.rq.Loading || f || "boolean" != typeof S,
            k = Z && (T === Se.lD.Team || T === Se.lD.Starter),
            O = _ && !_.ssoEnabled && !k && void 0 !== k,
            L = I && !C && N && !S,
            z = ({ requiredPermission: e, children: a, ...n }) =>
              t.adminAccess.hasPermissionLevel(e) ? (0, c.tZ)(d.KJW, { ...n }, a) : null;
          return (0, c.tZ)(
            d.t7v,
            { collapsed: e },
            (0, c.tZ)(
              d.sMA,
              {
                sx: {
                  pointerEvents: f ? "none" : "auto",
                  visibility: A ? "hidden" : "visible",
                  backgroundColor: "ds.container.agnostic.inverse.standard"
                }
              },
              L
                ? (0, c.tZ)(
                    z,
                    { requiredPermission: "FULL", collapsed: e },
                    (0, c.tZ)(
                      i.rU,
                      { to: a.teamGetStartedRoutePath },
                      (0, c.tZ)(Ge, {
                        collapsed: e,
                        icon: Ke || (Ke = (0, c.tZ)(y.JO, { name: "TipOutlined" })),
                        label: g("team_get_started"),
                        selected: n === Ie.$.GET_STARTED
                      })
                    )
                  )
                : null,
              (0, c.tZ)(
                z,
                { requiredPermission: "FULL", collapsed: e },
                (0, c.tZ)(
                  i.rU,
                  { to: a.teamDashboardRoutePath },
                  (0, c.tZ)(Ge, {
                    collapsed: e,
                    icon: Ye || (Ye = (0, c.tZ)(d.QGC, null)),
                    label: g("team_general"),
                    selected: n === Ie.$.DASHBOARD
                  })
                )
              ),
              (0, c.tZ)(
                z,
                { requiredPermission: "FULL", collapsed: e },
                (0, c.tZ)(
                  i.rU,
                  { to: a.teamMembersRoutePath },
                  (0, c.tZ)(Ge, {
                    collapsed: e,
                    icon: Qe || (Qe = (0, c.tZ)(d.lMe, null)),
                    label: g("team_members"),
                    selected: n === Ie.$.MEMBERS
                  })
                )
              ),
              (0, c.tZ)(
                z,
                { requiredPermission: "GROUP_READ", collapsed: e },
                (0, c.tZ)(
                  i.rU,
                  { to: a.teamGroupsRoutePath },
                  (0, c.tZ)(Ge, {
                    collapsed: e,
                    icon: Xe || (Xe = (0, c.tZ)(d.c6E, null)),
                    label: g("team_groups"),
                    selected: n === Ie.$.GROUPS
                  })
                )
              ),
              (0, c.tZ)(
                z,
                { requiredPermission: "FULL", collapsed: e },
                (0, c.tZ)(
                  i.rU,
                  { to: a.teamActivityRoutePath },
                  (0, c.tZ)(Ge, {
                    collapsed: e,
                    hasNotification: ht("accountRecoveryRequests", u),
                    icon: Je || (Je = (0, c.tZ)(d.X4t, null)),
                    label: g("team_activity"),
                    selected: n === Ie.$.ACTIVITY
                  })
                )
              ),
              (0, c.tZ)(
                z,
                { requiredPermission: "FULL", collapsed: e },
                (0, c.tZ)(
                  Ue,
                  { isSidenavCollapsed: e, settingsRoute: b.MASTER_PASSWORD_POLICIES },
                  e
                    ? (0, c.tZ)(
                        d.ua7,
                        {
                          placement: "right",
                          offset: [0, 15],
                          hoverCloseDelay: 500,
                          sx: { padding: "4px 0", "svg, svg:hover": { fill: "ds.text.inverse.catchy" } },
                          content: (0, c.tZ)(
                            "div",
                            { sx: { width: O ? "180px" : "148px" } },
                            (0, c.tZ)(
                              "div",
                              { style: { display: "flex" } },
                              (0, c.tZ)(
                                i.rU,
                                { to: b.POLICIES, style: { width: "100%" } },
                                (0, c.tZ)("div", { className: He.tooltipMenuOption }, g(mt))
                              ),
                              et || (et = (0, c.tZ)(We, null))
                            ),
                            (0, c.tZ)(
                              i.rU,
                              { to: b.SSO },
                              (0, c.tZ)(
                                "div",
                                { className: w()(He.tooltipMenuOption, { [He.tooltipMenuOptionWithBadge]: O }) },
                                g(gt),
                                O || k
                                  ? (0, c.tZ)(y.Ct, {
                                      mood: "brand",
                                      intensity: "catchy",
                                      label: g(O ? yt : bt),
                                      layout: "iconLeading",
                                      iconName: k ? "PremiumOutlined" : void 0
                                    })
                                  : null
                              )
                            ),
                            (0, c.tZ)(i.rU, { to: b.DIRECTORY_SYNC }, (0, c.tZ)("div", { className: He.tooltipMenuOption }, g(ut))),
                            (0, c.tZ)(
                              i.rU,
                              { to: b.MASTER_PASSWORD_POLICIES },
                              (0, c.tZ)("div", { className: He.tooltipMenuOption }, g(dt))
                            ),
                            M ? (0, c.tZ)(i.rU, { to: b.DUO }, (0, c.tZ)("div", { className: He.tooltipMenuOption }, g(_t))) : null
                          )
                        },
                        (0, c.tZ)(
                          "div",
                          { tabIndex: 0 },
                          (0, c.tZ)(Ge, {
                            collapsed: e,
                            icon: tt || (tt = (0, c.tZ)(d.ewm, null)),
                            label: g(pt),
                            selected: n === Ie.$.SETTINGS
                          })
                        )
                      )
                    : (0, c.tZ)(
                        d.UlM,
                        {
                          size: "large",
                          open: !0,
                          sx: {
                            backgroundColor: "ds.container.agnostic.inverse.standard",
                            span: { color: "ds.text.inverse.catchy" },
                            "> summary": { padding: "16px 0" },
                            "&[open]": { padding: 0 },
                            "&[open] > summary": { padding: "16px 0" },
                            "&[open] > div:nth-of-type(1)": { pointerEvents: f ? "none" : "auto", padding: 0 },
                            "svg, svg:hover": { fill: "ds.text.inverse.catchy" }
                          }
                        },
                        (0, c.tZ)(
                          d._Oh,
                          null,
                          (0, c.tZ)(
                            "span",
                            { className: He.settingsMenuContainer },
                            (0, c.tZ)("span", { className: He.iconContainer }, at || (at = (0, c.tZ)(d.ewm, null))),
                            (0, c.tZ)(d.nvN, { size: "medium", bold: !0, as: "span" }, g(pt))
                          )
                        ),
                        (0, c.tZ)(
                          d.rN7,
                          null,
                          (0, c.tZ)(
                            "div",
                            { style: { display: "flex" } },
                            (0, c.tZ)(
                              i.rU,
                              { to: b.POLICIES, style: { width: "100%" } },
                              (0, c.tZ)(Ge, { icon: nt || (nt = (0, c.tZ)("span", null)), label: g(mt), selected: n === Me.POLICIES })
                            ),
                            st || (st = (0, c.tZ)(We, null))
                          ),
                          (0, c.tZ)(
                            i.rU,
                            { to: b.SSO },
                            (0, c.tZ)(Ge, {
                              icon: it || (it = (0, c.tZ)("span", null)),
                              label: g(gt),
                              endAdornment:
                                O || k
                                  ? (0, c.tZ)(y.Ct, {
                                      mood: "brand",
                                      intensity: "catchy",
                                      label: g(O ? yt : bt),
                                      layout: "iconLeading",
                                      iconName: k ? "PremiumOutlined" : void 0
                                    })
                                  : null,
                              selected: n === Me.SSO
                            })
                          ),
                          (0, c.tZ)(
                            i.rU,
                            { to: b.DIRECTORY_SYNC },
                            (0, c.tZ)(Ge, { icon: ot || (ot = (0, c.tZ)("span", null)), label: g(ut), selected: n === Me.DIRECTORY_SYNC })
                          ),
                          (0, c.tZ)(
                            i.rU,
                            { to: b.MASTER_PASSWORD_POLICIES },
                            (0, c.tZ)(Ge, { icon: rt || (rt = (0, c.tZ)("span", null)), label: g(dt), selected: n === Me.ACCOUNT_RECOVERY })
                          ),
                          M
                            ? (0, c.tZ)(
                                i.rU,
                                { to: b.DUO },
                                (0, c.tZ)(Ge, { icon: lt || (lt = (0, c.tZ)("span", null)), label: g(_t), selected: n === Me.DUO })
                              )
                            : null
                        )
                      )
                )
              ),
              t.adminAccess.hasFullAccess
                ? (0, c.tZ)(
                    "div",
                    { className: He.securityCategory },
                    (0, c.tZ)(
                      "div",
                      { className: He.categoryTitle },
                      (0, c.tZ)(
                        d.nvN,
                        { color: "ds.text.inverse.quiet", caps: !0, size: "x-small" },
                        g("webapp_sidemenu_category_maintenance")
                      )
                    ),
                    (0, c.tZ)(
                      z,
                      { requiredPermission: "FULL", collapsed: e },
                      (0, c.tZ)(
                        i.rU,
                        {
                          to: a.teamDarkWebInsightsRoutePath,
                          onClick: () => {
                            (0, j.Kz)(
                              new o.UserOpenDomainDarkWebMonitoringEvent({ accessPath: o.AccessPath.NavLeftMenuButton, isFirstVisit: h })
                            );
                          }
                        },
                        (0, c.tZ)(Ge, {
                          collapsed: e,
                          icon: ct || (ct = (0, c.tZ)(y.JO, { name: "FeatureDarkWebMonitoringOutlined" })),
                          label: g("team_dashboard_dark_web_insights_heading"),
                          selected: n === Ie.$.DARK_WEB_INSIGHTS,
                          hasNotification: x
                        })
                      )
                    )
                  )
                : null
            )
          );
        };
      var St;
      const vt = ({ isCollapsed: e }) => {
          const { translate: t } = (0, p.Z)(),
            a = e || !1;
          return (0, y.tZ)(
            d.t7v,
            { collapsed: a },
            (0, y.tZ)(
              d.QUQ,
              {
                "data-testid": "logo-header",
                sx: { height: "80px !important", borderBottomColor: "ds.border.neutral.quiet.idle !important" }
              },
              a
                ? (0, y.tZ)(
                    "div",
                    { className: He.collapsedLogo },
                    St || (St = (0, y.tZ)(d.NJ6, { color: "ds.text.inverse.catchy", height: 39, width: 39 }))
                  )
                : (0, y.tZ)(d.D1W, { color: d.vei.White, size: d.r1z.Size39, title: t("_common_dashlane_logo_title") })
            )
          );
        },
        ft = "webapp_sidemenu_open_vault_cta",
        Ct = ({ isCollapsed: e }) => {
          const { translate: t } = (0, p.Z)(),
            { setIsVaultNavigationModalOpen: a } = (0, n.useContext)(he);
          return (0, y.tZ)(
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
            (0, y.tZ)(
              y.zx,
              {
                layout: e ? "iconOnly" : "iconLeading",
                "aria-label": t(ft),
                fullsize: !e,
                sx: { margin: "20px 25px" },
                icon: "VaultOutlined",
                mood: "brand",
                intensity: "catchy",
                onClick: () => {
                  (0, z.nL)(oe.F1);
                }
              },
              t(ft)
            )
          );
        };
      var Et, Zt;
      const Tt = () => document.documentElement.clientWidth < 1371,
        Nt = n.createContext({ navBarChildren: null, setNavBarChildren: () => {} }),
        Dt = ({ selectedTab: e, children: t, lee: a }) => {
          const [s, o] = (0, n.useState)(Tt()),
            [r, l] = (0, n.useState)(),
            { routes: c } = (0, i.Xo)(),
            d = a.permission.adminAccess,
            u = (0, Z.a)(d) && e !== Ie.$.GET_STARTED,
            _ = d.hasBillingAccess || d.hasFullAccess;
          (0, n.useEffect)(() => {
            const e = (0, v.throttle)(() => {
              const e = Tt();
              e && !s ? o(!0) : !e && s && o(!1);
            }, 100);
            return window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
          }, [s]);
          const m = (0, f.kA)(a.globalState),
            p = (0, f.xO)(a.globalState),
            g = n.createElement(D, null, r, n.createElement(Te, { lee: a })),
            y = n.createElement(vt, { isCollapsed: s }),
            b = n.createElement(xt, {
              isCollapsed: s,
              permissionChecker: a.permission,
              routes: c,
              selectedTab: e,
              teamNotifications: m?.notifications,
              teamSettings: p?.details.info
            }),
            h = n.createElement(Ct, { isCollapsed: s }),
            x = { navBarChildren: r, setNavBarChildren: l },
            S = u ? Et || (Et = n.createElement(E.b, null)) : null,
            N = _ ? Zt || (Zt = n.createElement(C.XA, null)) : null;
          return n.createElement(
            Nt.Provider,
            { value: x },
            n.createElement(
              T.dw,
              { adminAccess: d },
              n.createElement(I, { brand: y, header: g, sideNav: b, bottomButton: h, banner: S, dialog: N }, t)
            )
          );
        };
      var Mt, It, At, wt;
      const kt = ({ plan: e, handleSelectClick: t, selected: a }) => {
          const { translate: n } = (0, p.Z)(),
            {
              currentPlan: s,
              limitedOffer: i,
              heading: o,
              price: r,
              equivalentPrice: l,
              planName: c,
              footer: u,
              priceDescription1: _,
              priceDescription2: m,
              features: g
            } = e;
          return (0, y.tZ)(
            d.Ejs,
            {
              flexDirection: "column",
              sx: {
                minHeight: "480px",
                display: "flex",
                flexDirection: "column",
                borderRadius: "4px",
                border: `1px solid ${s ? "transparent" : y.O9.lightTheme.ds.border.neutral.quiet.idle}`,
                flexGrow: "1",
                flexShrink: 0,
                width: "188px",
                backgroundColor: s ? y.O9.lightTheme.ds.container.expressive.neutral.supershy.hover : null,
                padding: "16px",
                gap: "24px"
              }
            },
            (0, y.tZ)(
              d.Ejs,
              { flexDirection: "column", gap: "16px" },
              (0, y.tZ)(
                d.Ejs,
                { flexDirection: "column", gap: "8px" },
                (0, y.tZ)(
                  "div",
                  { sx: { minHeight: "16px" } },
                  s ? (0, y.tZ)(y.Ct, { label: n("team_account_teamplan_changeplan_plans_plan_current") }) : null,
                  i
                    ? (0, y.tZ)(y.Ct, {
                        mood: "brand",
                        intensity: "catchy",
                        label: n("team_account_teamplan_changeplan_plans_plan_limited_offer")
                      })
                    : null
                ),
                (0, y.tZ)(d.nvN, { bold: !0, size: "medium" }, n(o.key))
              ),
              (0, y.tZ)(
                d.Ejs,
                { flexDirection: "column" },
                (0, y.tZ)(
                  d.Ejs,
                  { gap: "4px" },
                  r
                    ? (0, y.tZ)(d.X6q, { as: "p", size: "large" }, r)
                    : (0, y.tZ)(d.HoD, { size: 44, color: y.O9.lightTheme.ds.text.neutral.standard }),
                  l
                    ? (0, y.tZ)(
                        y.nv,
                        { textStyle: "ds.title.block.medium", color: "ds.text.neutral.quiet", sx: { whiteSpace: "break-spaces" } },
                        n("team_account_teamplan_changeplan_plans_previous_price"),
                        Mt || (Mt = (0, y.tZ)("br", null)),
                        (0, y.tZ)("span", { sx: { textDecoration: "line-through" } }, l)
                      )
                    : null
                ),
                (0, y.tZ)(
                  d.Ejs,
                  { flexDirection: "column", sx: { height: "48px" } },
                  (0, y.tZ)(d.nvN, { size: "x-small", color: y.O9.lightTheme.ds.text.neutral.quiet }, n(_.key, _.variables)),
                  (0, y.tZ)(d.nvN, { size: "x-small", color: y.O9.lightTheme.ds.text.neutral.quiet }, n(m.key, m.variables))
                )
              )
            ),
            a
              ? (0, y.tZ)(
                  y.zx,
                  { disabled: !0, mood: "brand", size: "small", type: "button", fullsize: !0, icon: It || (It = (0, y.tZ)(d.nQG, null)) },
                  n("team_account_teamplan_changeplan_plans_selected")
                )
              : t
              ? (0, y.tZ)(
                  y.zx,
                  { mood: "brand", size: "small", onClick: t, fullsize: !0, "data-testid": `btn-${c}-select` },
                  n("team_account_teamplan_changeplan_plans_select")
                )
              : (0, y.tZ)("div", { style: { height: "32px", width: "100%" } }),
            (0, y.tZ)(
              d.Ejs,
              { flexDirection: "column", gap: "6px" },
              g.map(({ key: e, icon: t, variables: a, loading: i }) =>
                (0, y.tZ)(
                  d.Ejs,
                  {
                    key: e,
                    sx: {
                      display: "flex",
                      alignItems: "center",
                      gap: "9px",
                      flexWrap: "nowrap",
                      strong: { color: s ? null : y.O9.lightTheme.ds.text.neutral.catchy }
                    }
                  },
                  (0, y.tZ)(
                    d.k$b,
                    { sx: { width: "10px" } },
                    "check" === t
                      ? At || (At = (0, y.tZ)(d.nQG, { size: 14 }))
                      : "add" === t
                      ? wt || (wt = (0, y.tZ)(d.dtP, { size: 12 }))
                      : null
                  ),
                  i
                    ? (0, y.tZ)(
                        d.k$b,
                        { sx: { display: "flex", alignItems: "center", justifyContent: "center", flexGrow: "1" } },
                        (0, y.tZ)(d.HoD, { size: 32, color: y.O9.lightTheme.ds.text.neutral.catchy })
                      )
                    : (0, y.tZ)(
                        d.nvN,
                        { color: y.O9.lightTheme.ds.text.neutral.quiet, size: "x-small" },
                        e.includes("markup") ? n.markup(e, a) : n(e, a)
                      )
                )
              )
            ),
            i ? (0, y.tZ)(y.ke, { mood: "brand", title: n("team_account_teamplan_changeplan_plans_limited_price_infobox") }) : null,
            u
              ? (0, y.tZ)(
                  d.Ejs,
                  { alignItems: "center", gap: "9px", sx: { paddingLeft: "20px" } },
                  (0, y.tZ)(
                    d.nvN,
                    { color: y.O9.lightTheme.ds.text.neutral.quiet, size: "x-small" },
                    u.key.includes("markup") ? n.markup(u.key) : n(u.key)
                  )
                )
              : null
          );
        },
        Ot = ({ title: e, children: t, sx: a }) =>
          n.createElement(
            d.Zbd,
            {
              sx: (0, d.jMf)([
                {
                  display: "flex",
                  flexDirection: "column",
                  padding: "24px",
                  gap: "16px",
                  backgroundColor: d.colors.white,
                  borderRadius: "4px",
                  border: `1px solid ${d.colors.dashGreen05}`
                },
                ...(a ? [a] : [])
              ])
            },
            n.createElement(
              d.Ejs,
              { flexDirection: "column", sx: { display: "flex", flexDirection: "column", height: "100%" } },
              e ? ("string" == typeof e ? n.createElement(d.X6q, { size: "small" }, e) : e) : null,
              n.createElement(d.k$b, { flex: "1" }, t)
            )
          );
      var Lt,
        zt,
        Rt,
        jt = a(973883),
        Pt = a(601765);
      const Ut = ({ handleSelectClick: e, selected: t, businessOffer: a }) => {
        const { translate: n } = (0, p.Z)(),
          s = (0, Pt.t)(),
          i = a ? (0, jt.Qf)({ offer: a }) : null;
        return (0, y.tZ)(
          d.Ejs,
          {
            flexDirection: "column",
            sx: {
              display: "flex",
              flexDirection: "column",
              width: "367px",
              padding: "18px 28px 32px",
              border: `1px solid ${d.colors.dashGreen05}`,
              borderRadius: "4px",
              gap: "18px"
            }
          },
          s.hasLimitedOffer
            ? (0, y.tZ)(y.Ct, { mood: "brand", intensity: "catchy", label: n("team_account_teamplan_changeplan_plans_plan_limited_offer") })
            : (0, y.tZ)(y.Ct, { mood: "brand", intensity: "quiet", label: n("team_account_teamplan_changeplan_plans_plan_recommended") }),
          (0, y.tZ)(
            d.Ejs,
            { fullWidth: !0, gap: "12px" },
            (0, y.tZ)(
              d.Ejs,
              { fullWidth: !0 },
              (0, y.tZ)(
                d.Ejs,
                { sx: { display: "flex", alignItems: "center", flex: 1 } },
                (0, y.tZ)(d.X6q, { size: "x-small" }, n("team_account_teamplan_changeplan_plans_business_name"))
              ),
              (0, y.tZ)(
                d.k$b,
                null,
                a?.currency && i
                  ? (0, y.tZ)(
                      d.Ejs,
                      { flexDirection: "column", alignItems: "flex-end" },
                      (0, y.tZ)(
                        d.Ejs,
                        { alignItems: "flex-end", gap: "0", flexDirection: "column" },
                        (0, y.tZ)(
                          d.nvN,
                          { size: "small" },
                          n.price(a.currency, i / 100, { notation: "compact" }),
                          " ",
                          n("team_account_teamplan_changeplan_plans_seat")
                        ),
                        s.hasLimitedOffer
                          ? (0, y.tZ)(
                              d.nvN,
                              { size: "small", color: "ds.text.neutral.quiet" },
                              n("team_account_teamplan_changeplan_plans_previous_price"),
                              " ",
                              (0, y.tZ)("span", { sx: { textDecoration: "line-through" } }, s.translatedEquivalentPrice)
                            )
                          : null
                      ),
                      (0, y.tZ)(
                        d.nvN,
                        { color: "ds.text.neutral.quiet", size: "x-small" },
                        n("team_account_teamplan_changeplan_plans_billed_anually")
                      )
                    )
                  : (0, y.tZ)(d.HoD, { size: 16, color: d.colors.black })
              )
            ),
            (0, y.tZ)("hr", { style: { width: "100%", borderTop: `1px solid ${d.colors.grey02}`, borderBottom: "0", margin: "0" } })
          ),
          (0, y.tZ)(
            d.k$b,
            { flex: "1" },
            (0, y.tZ)(
              d.Ejs,
              { flexDirection: "column", gap: "6px" },
              (0, y.tZ)(d.nvN, { color: d.colors.grey00, size: "x-small" }, n("team_account_teamplan_changeplan_plans_business_header")),
              (0, y.tZ)(
                d.Ejs,
                { alignItems: "center", gap: "9px", sx: { display: "flex", alignItems: "center", gap: "9px", marginTop: "10px" } },
                Lt || (Lt = (0, y.tZ)(d.dtP, { size: 8 })),
                (0, y.tZ)(
                  d.nvN,
                  { size: "x-small", color: d.colors.black },
                  n.markup(
                    "team_account_teamplan_changeplan_plans_business_saml_markup",
                    { ssoUrl: "https://support.dashlane.com/hc/articles/360015111019-SSO-FAQ" },
                    { linkTarget: "_blank" },
                    { color: d.colors.black }
                  )
                )
              ),
              (0, y.tZ)(
                d.Ejs,
                { alignItems: "center", gap: "9px" },
                zt || (zt = (0, y.tZ)(d.dtP, { size: 8 })),
                (0, y.tZ)(
                  d.nvN,
                  { size: "x-small" },
                  (0, y.tZ)(
                    d.rUS,
                    {
                      rel: "noopener noreferrer",
                      href: "https://blog.dashlane.com/how-admins-can-simplify-provisioning/",
                      target: "_blank"
                    },
                    n("team_account_teamplan_changeplan_plans_business_scim_provisioning")
                  )
                )
              ),
              (0, y.tZ)(
                d.Ejs,
                { alignItems: "center", gap: "9px" },
                Rt || (Rt = (0, y.tZ)(d.dtP, { size: 8 })),
                (0, y.tZ)(
                  d.nvN,
                  { size: "x-small", color: d.colors.black },
                  n.markup(
                    "team_account_teamplan_changeplan_plans_business_free_family_plan_markup",
                    {
                      familyPlanUrl: "https://support.dashlane.com/hc/articles/360015393479-Getting-Premium-Family-with-Dashlane-Business"
                    },
                    { linkTarget: "_blank" },
                    { color: d.colors.black }
                  )
                )
              )
            )
          ),
          s.hasLimitedOffer
            ? (0, y.tZ)(y.ke, { title: n("team_account_teamplan_changeplan_plans_limited_price_infobox"), mood: "brand" })
            : null,
          a
            ? t
              ? (0, y.tZ)(
                  d.zxk,
                  { sx: { width: "100%" }, disabled: !0, nature: "secondary", size: "small", type: "button" },
                  n("team_account_teamplan_changeplan_plans_selected")
                )
              : (0, y.tZ)(
                  d.zxk,
                  { "data-testid": "btn-business-select", sx: { width: "100%" }, size: "small", type: "button", onClick: e },
                  n("team_account_teamplan_changeplan_plans_select")
                )
            : (0, y.tZ)(d.Ejs, { justifyContent: "center", fullWidth: !0 }, (0, y.tZ)(d.HoD, { size: 30, color: d.colors.black }))
        );
      };
      var Bt;
      const Gt = [
          "team_account_teamplan_changeplan_plans_team_security_dashboard",
          "team_account_teamplan_changeplan_plans_team_policy_management",
          "team_account_teamplan_changeplan_plans_team_advanced_reporting",
          "team_account_teamplan_changeplan_plans_team_group_sharing",
          "team_account_teamplan_changeplan_plans_team_active_directory_integration",
          "team_account_teamplan_changeplan_plans_team_dark_web_insights",
          "team_account_teamplan_changeplan_plans_team_vpn_via_hotspot_shield",
          "team_account_teamplan_changeplan_plans_team_audit_logs"
        ],
        Ft = () => {
          const { translate: e } = (0, p.Z)();
          return n.createElement(
            d.Ejs,
            {
              flexDirection: "column",
              sx: {
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                height: "fit-content",
                minWidth: "223px",
                width: "fit-content",
                backgroundColor: d.colors.grey06,
                padding: "16px"
              }
            },
            n.createElement(
              d.Ejs,
              null,
              n.createElement(
                d.Ejs,
                { sx: { borderRadius: "1px", border: `1px solid ${d.colors.midGreen03}`, padding: "1px", lineHeight: "10px" } },
                n.createElement(d.j49, { size: "small" }, e("team_account_teamplan_changeplan_plans_plan_current"))
              )
            ),
            n.createElement(d.X6q, { color: d.colors.grey00, size: "x-small" }, e("team_account_teamplan_changeplan_plans_team_name")),
            " ",
            n.createElement("hr", { style: { width: "100%", borderTop: `1px solid ${d.colors.grey02}`, borderBottom: "0", margin: "0" } }),
            n.createElement(
              d.Ejs,
              { flexDirection: "column", gap: "6px" },
              Gt.map((t) =>
                n.createElement(
                  d.Ejs,
                  { key: t, alignItems: "center", gap: "9px" },
                  Bt || (Bt = n.createElement(d.nQG, { size: 8 })),
                  n.createElement(d.nvN, { color: d.colors.grey00, size: "x-small" }, e(t))
                )
              )
            )
          );
        };
      var qt, Vt;
      const $t = ({ selectedOffer: e, handleSelection: t, teamOffers: a }) => {
        const { translate: s } = (0, p.Z)(),
          i = (0, u.Y)(),
          o = ((e, t) => {
            const { translate: a } = (0, p.Z)(),
              n = e?.businessOffer?.currency,
              s = e?.businessOffer ? (0, jt.Qf)({ offer: e.businessOffer }) : null,
              i = e?.teamOffer ? (0, jt.Qf)({ offer: e.teamOffer }) : null,
              o = e?.starterOffer ? (0, jt.Qf)({ offer: e.starterOffer }) : null,
              r = (0, jt.f)(e?.starterOffer),
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
          })(a, (0, Pt.t)()),
          l = i.status !== r.rq.Success || !i.data,
          c = i.status === r.rq.Success && "2022_team_starter_tier" === i.data.planName,
          { businessOffer: _, teamOffer: m } = null != a ? a : {};
        return n.createElement(
          Ot,
          { title: s("team_account_teamplan_changeplan_plans") },
          l
            ? qt ||
                (qt = n.createElement(
                  d.Ejs,
                  { alignItems: "center", justifyContent: "center" },
                  n.createElement(d.HoD, { size: 30, color: "black" })
                ))
            : c
            ? n.createElement(
                d.Ejs,
                { sx: { height: "100%", display: "flex", gap: "16px", paddingTop: "8px" } },
                n.createElement(kt, { plan: o.starter }),
                n.createElement(kt, { plan: o.team, handleSelectClick: m ? () => t(m) : void 0, selected: !!m && e?.name === m?.name }),
                n.createElement(kt, { plan: o.business, handleSelectClick: _ ? () => t(_) : void 0, selected: !!_ && e?.name === _?.name })
              )
            : n.createElement(
                d.Ejs,
                { alignItems: "center", flexWrap: "unset" },
                Vt || (Vt = n.createElement(Ft, null)),
                n.createElement(Ut, { businessOffer: _, selected: !!_ && e?.name === _?.name, handleSelectClick: _ ? () => t(_) : void 0 })
              )
        );
      };
      var Wt = a(952284);
      const Ht = () =>
          n.createElement("hr", { style: { width: "100%", borderTop: `1px solid ${d.colors.grey02}`, borderBottom: "0", margin: "0" } }),
        Kt = ({ label: e, value: t }) =>
          (0, c.tZ)(
            d.Ejs,
            { justifyContent: "flex-end", sx: { display: "flex", justifyContent: "flexEnd", padding: "0 10px" } },
            e ? (0, c.tZ)(d.k$b, { flex: "1", sx: { display: "flex", alignItems: "center" } }, e) : null,
            t ? (0, c.tZ)(d.k$b, { sx: { display: "flex", alignItems: "center" } }, t) : null
          );
      var Yt;
      const Qt = ({ currency: e, costData: t, isProratedDiscountLoading: a, isTaxLoading: s, selectedOffer: i, setAdditionalSeats: o }) => {
        const { translate: r } = (0, p.Z)(),
          { loading: l, billingCountry: u } = S();
        if (l) return (0, c.tZ)(d.HoD, { color: d.colors.midGreen00 });
        const _ = "US" === u ? "team_account_teamplan_changeplan_order_summary_tax" : "team_account_teamplan_vat";
        return (0, c.tZ)(
          n.Fragment,
          null,
          i && e
            ? (0, c.tZ)(
                n.Fragment,
                null,
                (0, c.tZ)(Kt, {
                  label: (0, c.tZ)(
                    d.nvN,
                    { bold: !0, size: "medium" },
                    r("team_account_teamplan_changeplan_order_summary_seats_total", { totalSeats: t.totalSeats })
                  ),
                  value: (0, c.tZ)(
                    d.k$b,
                    { sx: { width: "146px" } },
                    (0, c.tZ)(Wt.w, { id: "test", inputWidth: "66px", label: "", minValue: 0, onChange: o, defaultValue: 0 })
                  )
                }),
                (0, c.tZ)(Kt, {
                  label: (0, c.tZ)(
                    d.nvN,
                    { bold: !0, size: "small" },
                    r("team_account_teamplan_changeplan_order_summary_seats_upgraded", { upgradedSeats: t.currentSeats })
                  ),
                  value: (0, c.tZ)(d.nvN, { bold: !0, size: "small" }, r.price(e, t.upgradedSeatsPrice / 100))
                }),
                t.additionalSeats
                  ? (0, c.tZ)(Kt, {
                      label: (0, c.tZ)(
                        d.nvN,
                        { bold: !0, size: "small" },
                        r("team_account_teamplan_changeplan_order_summary_seats_new", { newSeats: t.additionalSeats })
                      ),
                      value: (0, c.tZ)(d.nvN, { bold: !0, size: "small" }, r.price(e, t.additionalSeatsPrice / 100))
                    })
                  : null,
                Yt || (Yt = (0, c.tZ)(Ht, null)),
                (0, c.tZ)(Kt, {
                  label: (0, c.tZ)(d.nvN, { bold: !0, size: "small" }, r("team_account_teamplan_changeplan_order_summary_subtotal")),
                  value: e ? (0, c.tZ)(d.nvN, { bold: !0, size: "small" }, r.price(e, t.subtotal / 100)) : null
                }),
                t?.proratedDiscount
                  ? (0, c.tZ)(Kt, {
                      label: (0, c.tZ)(
                        d.Ejs,
                        { alignItems: "center", gap: "5px" },
                        (0, c.tZ)(
                          d.nvN,
                          { size: "small", color: d.colors.grey00 },
                          r("team_account_teamplan_changeplan_order_summary_prorated_discount")
                        ),
                        (0, c.tZ)(
                          d.ua7,
                          { content: r("team_account_teamplan_changeplan_order_summary_prorated_discount_tooltip") },
                          (0, c.tZ)(d.uMt, { size: 16, color: d.colors.grey00 })
                        )
                      ),
                      value: a
                        ? (0, c.tZ)(d.HoD, { color: d.colors.black, size: 13 })
                        : t.proratedDiscount && e
                        ? (0, c.tZ)(d.nvN, { size: "small", color: d.colors.grey00 }, r.price(e, t.proratedDiscount / 100))
                        : null
                    })
                  : null,
                t.tax
                  ? (0, c.tZ)(Kt, {
                      label: (0, c.tZ)(d.nvN, { size: "small", color: d.colors.grey00 }, r(_)),
                      value: s
                        ? (0, c.tZ)(d.HoD, { color: d.colors.black, size: 13 })
                        : (0, c.tZ)(d.nvN, { size: "small", color: d.colors.grey00 }, r.price(e, t.tax / 100))
                    })
                  : null
              )
            : null
        );
      };
      var Xt = a(210994),
        Jt = a(241185),
        ea = a(66941);
      function ta({ total: e, onError: t }) {
        const [a, s] = (0, n.useState)(),
          [i, o] = (0, n.useState)(!1),
          [r, l] = (0, n.useState)();
        return (
          e &&
            e !== a &&
            (s(e),
            o(!0),
            (async () => {
              if (e && e <= 0) o(!1), l({ expectedTaxesInCents: 0 });
              else if (e) {
                const a = await ea.C.getExpectedTaxInformation({ priceInCents: e });
                if ((o(!1), !a.success)) return void (t && t());
                l(() => a.data);
              }
            })()),
          { isLoading: i, expectedTaxInformation: r }
        );
      }
      const aa = ({ selectedOffer: e, hasPromo: t, currentSeats: a, additionalSeats: n, planChangeStep: s }) => {
          const i = (0, u.Y)(),
            l = i.status === r.rq.Success && "2022_team_starter_tier" === i.data.planName ? o.B2bPlanTier.StarterTeam : o.B2bPlanTier.Team;
          return {
            logChangePlanEvent: (i) => {
              const r = i || e,
                c = r ? ((0, jt.sK)(r) ? o.B2bPlanTier.Business : o.B2bPlanTier.Team) : l;
              (0, j.Kz)(
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
        na = ({ selectedOffer: e, costData: t }) => {
          const { translate: a } = (0, p.Z)();
          return (0, c.tZ)(
            n.Fragment,
            null,
            e
              ? (0, c.tZ)(
                  n.Fragment,
                  null,
                  (0, c.tZ)(Kt, {
                    label: (0, c.tZ)(
                      d.Ejs,
                      { gap: "5px" },
                      (0, c.tZ)(
                        d.nvN,
                        { bold: !0, size: "medium" },
                        a("team_account_teamplan_changeplan_order_summary_seats_total", { totalSeats: t.totalSeats })
                      ),
                      (0, c.tZ)(
                        d.nvN,
                        { bold: !0, size: "medium" },
                        "(",
                        a("team_account_teamplan_changeplan_order_summary_seats_new", { newSeats: t.additionalSeats }),
                        ")"
                      )
                    )
                  }),
                  (0, c.tZ)(d.vDh, {
                    severity: "subtle",
                    size: "small",
                    title: a("team_account_teamplan_changeplan_order_summary_invoice_info")
                  })
                )
              : null,
            (0, c.tZ)(
              d.zxk,
              {
                "data-testid": "btn-request-a-quote",
                size: "large",
                sx: { width: "100%" },
                type: "button",
                disabled: !e,
                onClick: () => {
                  window.open(oe.vS, "_blank");
                }
              },
              a("team_account_teamplan_changeplan_order_summary_request_an_upgrade")
            )
          );
        };
      var sa = a(819923);
      const ia = ({ selectedOffer: e, currency: t, costData: a }) => {
          const { translate: n } = (0, p.Z)(),
            { isLoading: s, expectedTaxInformation: i } = ta({ total: a.renewalPrice }),
            { loading: r, billingCountry: l } = S();
          if (r) return (0, c.tZ)(d.HoD, { color: d.colors.midGreen00 });
          const u =
              "US" === l
                ? "team_account_teamplan_changeplan_order_summary_footer_renewal"
                : "team_account_teamplan_changeplan_order_summary_renewal_vat",
            _ = !s && void 0 !== i?.expectedTaxesInCents && i?.expectedTaxesInCents > 0,
            m = _ && i?.expectedTaxesInCents ? a.renewalPrice + i.expectedTaxesInCents : void 0,
            g = _ ? u : "team_account_teamplan_changeplan_order_summary_footer_header",
            y = _ ? m : a.renewalPrice;
          return (0, c.tZ)(
            "div",
            { sx: { display: "flex", flexDirection: "column", gap: "12px", padding: "16px", backgroundColor: d.colors.grey06 } },
            e && t && y
              ? (0, c.tZ)(
                  d.nvN,
                  { bold: !0, size: "small", color: d.colors.grey00 },
                  n(g, { price: n.price(t, y / 100), date: n.shortDate(a.renewalDate, sa.qG.ll) })
                )
              : null,
            (0, c.tZ)(
              d.nvN,
              { size: "x-small", color: d.colors.grey00 },
              n.markup(
                "team_account_teamplan_changeplan_order_summary_footer_markup",
                { privacyPolicyUrl: oe.Bz, termsUrl: oe.sz },
                {
                  linkTarget: "_blank",
                  onLinkClicked: (e) => {
                    e === oe.Bz
                      ? (0, j.Kz)(
                          new o.UserCallToActionEvent({
                            callToActionList: [o.CallToAction.PrivacyPolicy],
                            chosenAction: o.CallToAction.PrivacyPolicy,
                            hasChosenNoAction: !1
                          })
                        )
                      : e === oe.sz &&
                        (0, j.Kz)(
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
        oa = {
          display: "flex",
          alignItems: "center",
          padding: "12px 10px",
          justifyContent: "space-between",
          backgroundColor: d.colors.dashGreen06
        },
        ra = ({ selectedOffer: e, currency: t, costData: a }) => {
          const { translate: n } = (0, p.Z)();
          return e && t
            ? (0, c.tZ)(
                "div",
                { sx: oa, "data-testid": "order-summary-plan-name" },
                (0, c.tZ)(
                  d.nvN,
                  { bold: !0, color: d.colors.dashGreen01 },
                  (0, jt.sK)(e)
                    ? n("team_account_teamplan_changeplan_plans_business_name")
                    : n("team_account_teamplan_changeplan_plans_team_name")
                ),
                (0, c.tZ)(
                  d.nvN,
                  { color: d.colors.dashGreen01 },
                  n("team_account_teamplan_changeplan_order_summary_seat_year", {
                    cost: n.price(t, a.seatPrice / 100, { notation: "compact" })
                  })
                )
              )
            : (0, c.tZ)(
                "div",
                { sx: oa },
                (0, c.tZ)(d.nvN, { color: d.colors.dashGreen01 }, n("team_account_teamplan_changeplan_order_summary_select_plan"))
              );
        };
      var la;
      const ca = ({ onDismiss: e, value: t, buttonProps: a }) =>
        (0, c.tZ)(
          d.Ejs,
          { alignItems: "center", gap: "6px" },
          (0, c.tZ)(
            d.Ejs,
            { sx: { backgroundColor: d.colors.midGreen05, padding: "4px 8px", borderRadius: "4px" } },
            "string" == typeof t ? (0, c.tZ)(d.nvN, { size: "x-small" }, t) : { value: t }
          ),
          e
            ? (0, c.tZ)(
                d.zxk,
                { size: "small", type: "button", nature: "ghost", onClick: e, sx: { padding: 0, minWidth: 0 }, ...a },
                la || (la = (0, c.tZ)(d.Two, { size: 18 }))
              )
            : null
        );
      var da, ua;
      const _a = ({
        currency: e,
        promoPrice: t,
        promoCode: a,
        hasError: n,
        isLoading: s,
        showInput: i,
        setShowInput: o,
        onSubmit: r,
        onCancel: l,
        onChange: u,
        onClear: _
      }) => {
        const { translate: m } = (0, p.Z)();
        return i
          ? (0, c.tZ)(
              d.Ejs,
              { gap: "6px", fullWidth: !0, sx: { padding: "0 10px" } },
              (0, c.tZ)(
                d.k$b,
                { flex: "1" },
                (0, c.tZ)(d.oil, {
                  fullWidth: !0,
                  value: a,
                  placeholder: m("team_account_teamplan_changeplan_order_summary_promo_code_cta"),
                  feedbackText: n ? m("team_account_teamplan_changeplan_order_summary_promo_code_error") : null,
                  feedbackType: n ? "error" : void 0,
                  onChange: u ? (e) => u(e?.target?.value) : void 0
                })
              ),
              (0, c.tZ)(
                d.zxk,
                {
                  disabled: s,
                  "data-testid": "promo_code_button_submit",
                  type: "button",
                  nature: "secondary",
                  onClick: async () => {
                    r && (await r());
                  }
                },
                s ? (0, c.tZ)(d.HoD, { size: 20, color: d.colors.black }) : da || (da = (0, c.tZ)(d.nQG, { size: 20 }))
              ),
              (0, c.tZ)(
                d.zxk,
                {
                  "data-testid": "promo_code_button_cancel",
                  type: "button",
                  nature: "ghost",
                  onClick: () => {
                    l && l();
                  }
                },
                ua || (ua = (0, c.tZ)(d.Two, { size: 20 }))
              )
            )
          : a
          ? (0, c.tZ)(
              d.Ejs,
              { gap: "4px", fullWidth: !0, alignItems: "center", justifyContent: "space-between", sx: { padding: "0 10px" } },
              (0, c.tZ)(
                d.Ejs,
                { sx: { display: "flex", alignItems: "center", gap: "4px" } },
                (0, c.tZ)(d.nvN, { size: "small", color: d.colors.black }, m("team_account_teamplan_changeplan_order_summary_promo_code")),
                (0, c.tZ)(ca, { value: a, onDismiss: _, buttonProps: { "data-testid": "promo_code_button_clear" } })
              ),
              (0, c.tZ)(
                d.k$b,
                null,
                t && e ? (0, c.tZ)(d.nvN, { size: "small", color: d.colors.black }, m.price(e, ((e) => (e ? -e / 100 : 0))(t))) : null
              )
            )
          : (0, c.tZ)(
              d.Ejs,
              { sx: { padding: "0 10px" } },
              (0, c.tZ)(
                d.zxk,
                {
                  "data-testid": "promo_code_button_enter",
                  size: "small",
                  type: "button",
                  nature: "ghost",
                  onClick: () => (o ? o(!0) : null),
                  sx: { margin: 0, padding: 0, minWidth: 0 },
                  "aria-label": m("team_account_teamplan_changeplan_order_summary_promo_code_cta")
                },
                (0, c.tZ)(
                  d.rUS,
                  null,
                  (0, c.tZ)(
                    d.nvN,
                    { size: "x-small", color: d.colors.midGreen00 },
                    m("team_account_teamplan_changeplan_order_summary_promo_code_cta")
                  )
                )
              )
            );
      };
      var ma, pa;
      const ga = ({
        currency: e,
        currentSeats: t,
        additionalSeats: a,
        selectedOffer: s,
        email: i,
        emailValid: _,
        onSuccess: m,
        onError: g,
        setAdditionalSeats: y,
        setOrderSummaryData: b
      }) => {
        const { translate: h } = (0, p.Z)(),
          x = (0, u.Y)(),
          S = x.status === r.rq.Success && x.data?.planType === l.PlanType.Invoice,
          {
            promoCode: v,
            currentPromoCode: f,
            showInput: C,
            isLoading: E,
            setShowInput: Z,
            setCurrentPromoCode: T,
            validatePromoCode: N,
            clearPromoCode: D,
            cancelPromoCode: M,
            hasError: I,
            teamOffers: A
          } = (function ({ selectedOffer: e, currentSeats: t, additionalSeats: a }) {
            const [s, i] = (0, n.useState)(""),
              [o, r] = (0, n.useState)(""),
              [l, c] = (0, n.useState)(),
              [d, u] = (0, n.useState)(!1),
              [_, m] = (0, n.useState)(!1),
              [p, g] = (0, n.useState)(!1),
              [y, b] = (0, n.useState)(a),
              [h, x] = (0, n.useState)(e),
              S = (0, n.useCallback)(async () => {
                if (!o) return !1;
                g(!0);
                const n = await ea.C.getTeamOffers({ couponCode: o });
                if (!n.success) return g(!1), u(!0), m(!0), !1;
                const s = (0, jt.Jx)({ offer: n.data.businessOffer, currentSeats: t, additionalSeats: a }),
                  r = s.price !== s.equivalentPrice,
                  l = (0, jt.Jx)({ offer: n.data.teamOffer, currentSeats: t, additionalSeats: a }),
                  d = l.price !== l.equivalentPrice;
                return (e && (0, jt.sK)(e) ? r : d) ? (g(!1), i(o), c(() => n.data), u(!1), m(!1), !0) : (g(!1), u(!0), m(!0), !1);
              }, [t, a, o, e]);
            return (
              (0, n.useEffect)(() => {
                a !== y && (b(a), S());
              }, [y, a, S]),
              (0, n.useEffect)(() => {
                e?.name !== h?.name && (x(e), S());
              }, [e, h, S]),
              {
                promoCode: s,
                currentPromoCode: o,
                setCurrentPromoCode: r,
                validatePromoCode: S,
                clearPromoCode: () => {
                  i(""), r(""), c(void 0), u(!1);
                },
                cancelPromoCode: () => {
                  d ? (i(""), r("")) : r(s), u(!1), m(!1);
                },
                showInput: _,
                setShowInput: m,
                hasError: d,
                teamOffers: l,
                isLoading: p,
                setIsLoading: g
              }
            );
          })({ selectedOffer: s, additionalSeats: a, currentSeats: t }),
          {
            isSaving: w,
            costData: k,
            changeTierMidCycle: O,
            isTaxLoading: L,
            isProratedDiscountLoading: z
          } = (function ({
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
              m = !!i,
              p = !!e && (0, jt.sK)(e),
              g = !!e && (0, jt.AS)(e),
              y = s && e ? (p ? s.businessOffer : g ? s.teamOffer : s.starterOffer) : e,
              { isLoading: b, midCycleTierUpgradePrice: h } = (function ({ seats: e, planName: t, onError: a }) {
                const [s, i] = (0, n.useState)(0),
                  [o, r] = (0, n.useState)(),
                  [l, c] = (0, n.useState)(!1),
                  [d, u] = (0, n.useState)();
                return (
                  (e !== s || (t && t !== o)) &&
                    (i(e),
                    r(t),
                    c(!0),
                    (async () => {
                      if (void 0 !== e && t) {
                        const n = await ea.C.getMidCycleTierUpgradePrice({ numberOfSeats: e, newPlan: t });
                        if ((c(!1), !n.success)) return void (a && a());
                        u(() => n.data);
                      }
                    })()),
                  { isLoading: l, midCycleTierUpgradePrice: d }
                );
              })({ seats: a, planName: y?.name }),
              x = y ? (0, jt.Jx)({ offer: y, currentSeats: t, additionalSeats: a }) : null,
              S = null != (c = x?.equivalentPrice) ? c : 0,
              v = null != (d = x?.price) ? d : 0,
              f = m ? S : v,
              C = t + a,
              E = a * f,
              Z = t * f,
              T = C * f,
              N = T - (v ? C * v : T),
              D = h?.discountAmount ? T + h?.discountAmount : void 0,
              M = D ? D - N : D,
              I = h?.nextBillingDateUnix ? (0, Xt.Z)(h?.nextBillingDateUnix) : (0, Jt.Z)(new Date(), 1),
              { isLoading: A, expectedTaxInformation: w } = ta({ total: M }),
              k = A || void 0 === w?.expectedTaxesInCents ? 0 : w.expectedTaxesInCents,
              O = A || void 0 === w?.expectedTaxesInCents || void 0 === M ? void 0 : M + k;
            return {
              isSaving: u,
              changeTierMidCycle: async (e) => {
                if (!(M && w && y)) return void l();
                _(() => !0);
                const t = await ea.C.changeTierMidCycle({
                  amountToPay: M,
                  taxes: k,
                  planId: y.name,
                  couponCode: e || i,
                  seatsToAdd: a,
                  billingContactEmail: "" !== o ? o : void 0
                });
                _(() => !1), t.success ? r() : l();
              },
              isProratedDiscountLoading: b,
              isTaxLoading: A,
              costData: {
                seatPrice: f,
                additionalSeats: a,
                currentSeats: t,
                totalSeats: C,
                upgradedSeatsPrice: Z,
                additionalSeatsPrice: E,
                subtotal: T,
                proratedDiscount: h?.discountAmount,
                tax: k,
                pretaxTotal: D,
                promoPrice: N,
                total: O,
                renewalPrice: T,
                renewalDate: I
              }
            };
          })({
            selectedOffer: s,
            discountedTeamOffers: A,
            currentSeats: t,
            additionalSeats: a,
            promoCode: v,
            email: i,
            onSuccess: m,
            onError: g
          }),
          { logChangePlanEvent: R } = aa({
            selectedOffer: s,
            hasPromo: !!v,
            currentSeats: t,
            additionalSeats: a,
            planChangeStep: o.PlanChangeStep.ConfirmAndPayCta
          });
        return (0, c.tZ)(
          Ot,
          { title: h("team_account_teamplan_changeplan_order_summary_header") },
          (0, c.tZ)(
            d.Ejs,
            { flexDirection: "column", gap: "16px", sx: { marginTop: "16px" } },
            (0, c.tZ)(ra, { selectedOffer: s, currency: e, costData: k }),
            S
              ? (0, c.tZ)(na, { selectedOffer: s, costData: k })
              : (0, c.tZ)(
                  n.Fragment,
                  null,
                  (0, c.tZ)(Qt, {
                    currency: e,
                    costData: k,
                    isProratedDiscountLoading: z,
                    isTaxLoading: L,
                    selectedOffer: s,
                    setAdditionalSeats: y
                  }),
                  s && e
                    ? (0, c.tZ)(_a, {
                        currency: e,
                        promoCode: f,
                        promoPrice: k?.promoPrice,
                        hasError: I,
                        showInput: C,
                        isLoading: E,
                        setShowInput: Z,
                        onSubmit: N,
                        onChange: T,
                        onCancel: M,
                        onClear: D
                      })
                    : null,
                  ma || (ma = (0, c.tZ)(Ht, null)),
                  (0, c.tZ)(Kt, {
                    label: (0, c.tZ)(d.nvN, { bold: !0, size: "large" }, h("team_account_teamplan_changeplan_order_summary_due_today_V2")),
                    value:
                      !e || L || z
                        ? (0, c.tZ)(d.HoD, { size: 23, color: d.colors.black })
                        : s
                        ? k.total
                          ? (0, c.tZ)(d.nvN, { bold: !0, size: "large" }, h.price(e, k.total / 100))
                          : null
                        : (0, c.tZ)(d.nvN, { bold: !0, size: "large" }, `${h.priceSymbol(e)}--.--`)
                  }),
                  w
                    ? (0, c.tZ)(
                        d.zxk,
                        { size: "large", sx: { width: "100%" }, type: "button", disabled: !0 },
                        pa || (pa = (0, c.tZ)(d.HoD, null))
                      )
                    : (0, c.tZ)(
                        d.zxk,
                        {
                          "data-testid": "btn-confirm-and-pay",
                          size: "large",
                          sx: { width: "100%" },
                          type: "button",
                          disabled: !s || !_ || E,
                          onClick: async () => {
                            ((!I && v === f) || (await N())) && (R(), O(f), b(k));
                          }
                        },
                        h("team_account_teamplan_changeplan_order_summary_confirm_and_pay")
                      )
                ),
            (0, c.tZ)(ia, { selectedOffer: s, currency: e, costData: k })
          )
        );
      };
      var ya,
        ba = a(990340),
        ha = a(51662);
      const xa = ({ email: e, emailValid: t, setEmail: a, setEmailValid: s }) => {
          const { translate: i } = (0, p.Z)(),
            o = (0, ba.G)(),
            [r, l] = n.useState(!1);
          return o?.email
            ? n.createElement(
                Ot,
                { title: i("team_account_teamplan_changeplan_billing_contact_header") },
                ya || (ya = n.createElement("br", null)),
                n.createElement(
                  d.nvN,
                  { size: "medium", color: "ds.text.neutral.quiet", className: "automation-tests-tac-billing" },
                  i.markup("team_account_teamplan_changeplan_billing_contact_copy_markup", { billContactEmail: o.email })
                ),
                n.createElement(
                  "div",
                  { style: { margin: "20px 0px" } },
                  n.createElement(d.XZJ, {
                    "data-testid": "additionalEmailCheckbox",
                    label: i("team_account_teamplan_changeplan_billing_contact_checkbox_label"),
                    checked: r,
                    onChange: (e) => {
                      a(""), s(!0), l(e.currentTarget.checked);
                    }
                  })
                ),
                r
                  ? n.createElement(d.oil, {
                      "data-testid": "additionalEmailInput",
                      type: "text",
                      onChange: (e) => a(e.currentTarget.value),
                      onBlur: (e) =>
                        ((e) => {
                          (0, ha.vV)(e.currentTarget.value) ? s(!0) : s(!1);
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
        Sa = () => {
          const { translate: e } = (0, p.Z)();
          return n.createElement(
            Ot,
            { title: n.createElement(d.nvN, { bold: !0, size: "large" }, e("team_account_teamplan_changeplan_questions_header")) },
            n.createElement(
              d.nvN,
              { color: d.colors.grey00, size: "small", style: { marginBottom: "10px" } },
              e.markup(
                "team_account_teamplan_changeplan_questions_help_center_markup",
                { helpCenterUrl: oe.Vr },
                {
                  linkTarget: "_blank",
                  onLinkClicked: () => {
                    (0, j.Kz)(new o.UserOpenHelpCenterEvent({ helpCenterArticleCta: o.HelpCenterArticleCta.HelpCenter }));
                  }
                }
              )
            ),
            n.createElement(
              d.nvN,
              { size: "small", color: d.colors.grey00 },
              e.markup(
                "team_account_teamplan_changeplan_questions_customer_support_markup",
                { customerSupportUrl: oe.to },
                {
                  linkTarget: "_blank",
                  onLinkClicked: () => {
                    (0, j.Kz)(
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
      var va, fa, Ca, Ea, Za, Ta;
      const Na = ({ targetPlan: e }) => {
        const { translate: t } = (0, p.Z)(),
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
                      icon: va || (va = (0, y.tZ)(d.Qut, { size: 24 })),
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
                      icon: fa || (fa = (0, y.tZ)(d.c6E, { size: 24 })),
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
                      icon: Ca || (Ca = (0, y.tZ)(d.oEX, { size: 24 })),
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
                      icon: Ea || (Ea = (0, y.tZ)(d.kpp, { size: 24 })),
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
                      icon: Za || (Za = (0, y.tZ)(d.c6E, { size: 24 })),
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
                      icon: Ta || (Ta = (0, y.tZ)(d.qWc, { size: 24 })),
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
          { alert: r, show: l } = (0, d.VYq)({ message: t(a.alert), severity: d.BLW.SUCCESS, size: d.k3y.SMALL, dismissDelay: 5e3 });
        return (
          (0, n.useEffect)(() => {
            l();
          }, []),
          (0, y.tZ)(
            n.Fragment,
            null,
            (0, y.tZ)(
              "div",
              {
                style: { bottom: "12px", position: "absolute", marginLeft: "auto", marginRight: "auto", left: 0, right: 0, width: "600px" }
              },
              r
            ),
            (0, y.tZ)(
              Ot,
              { title: t(a.header), sx: { width: "632px", padding: "32px" } },
              (0, y.tZ)(
                "div",
                { style: { marginTop: "8px" } },
                (0, y.tZ)(d.nvN, { size: "medium", color: y.O9.lightTheme.ds.text.neutral.quiet }, t(a.description))
              ),
              (0, y.tZ)(
                d.Ejs,
                {
                  sx: {
                    marginTop: "32px",
                    display: "flex",
                    flexDirection: "column",
                    borderBottom: `1px solid ${y.O9.lightTheme.ds.border.neutral.quiet.idle}`
                  }
                },
                a.features.map((e) =>
                  (0, y.tZ)(
                    d.Ejs,
                    {
                      key: e.header,
                      flexDirection: "column",
                      sx: {
                        display: "flex",
                        flexDirection: "column",
                        borderTop: `1px solid ${y.O9.lightTheme.ds.border.neutral.quiet.idle}`,
                        padding: "32px 0"
                      }
                    },
                    (0, y.tZ)(
                      d.Ejs,
                      { flexDirection: "row", gap: "16px", flexWrap: "nowrap" },
                      (0, y.tZ)(
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
                            backgroundColor: y.O9.lightTheme.ds.container.expressive.brand.quiet.idle
                          }
                        },
                        e.icon
                      ),
                      (0, y.tZ)(
                        d.Ejs,
                        { flexDirection: "column", gap: "8px" },
                        (0, y.tZ)(d.nvN, { bold: !0, color: y.O9.lightTheme.ds.text.neutral.catchy }, t(e.header)),
                        (0, y.tZ)(d.nvN, { size: "x-small", color: y.O9.lightTheme.ds.text.neutral.quiet }, t(e.description)),
                        (0, y.tZ)(
                          d.Ejs,
                          { gap: "8px" },
                          e.actions.map((e) =>
                            e.external
                              ? (0, y.tZ)(
                                  "a",
                                  { href: e.link, key: e.content, target: "_blank", rel: "noopener noreferrer" },
                                  (0, y.tZ)(
                                    y.zx,
                                    {
                                      mood: e.mood,
                                      intensity: e.intensity,
                                      size: "small",
                                      type: "button",
                                      onClick: () => {
                                        e.logEvent && (0, j.Kz)(e.logEvent);
                                      }
                                    },
                                    t(e.content)
                                  )
                                )
                              : (0, y.tZ)(
                                  i.rU,
                                  { to: e.link, key: e.content },
                                  (0, y.tZ)(y.zx, { mood: e.mood, intensity: e.intensity, size: "small", type: "button" }, t(e.content))
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
      var Da;
      const Ma = ({ currentSeats: e, teamOffers: t }) => {
        const { translate: a } = (0, p.Z)(),
          n = (0, u.Y)(),
          s = n.status === r.rq.Success && (0, k.f1)(n.data),
          i = n.status === r.rq.Success && (0, k.pq)(n.data),
          o = n.status === r.rq.Success && (0, k.NG)(n.data),
          l = t?.businessOffer?.currency,
          _ = t?.businessOffer ? (0, jt.$l)({ offer: t.businessOffer }) : null,
          m = t?.teamOffer ? (0, jt.$l)({ offer: t.teamOffer }) : null,
          g = t?.starterOffer ? (0, jt.$l)({ offer: t.starterOffer }) : null,
          y = (0, jt.f)(t?.starterOffer),
          b =
            s && g && l
              ? a.price(l, (g * y) / 100, { notation: "compact" })
              : i && m && l
              ? a.price(l, (m * e) / 100, { notation: "compact" })
              : o && _ && l
              ? a.price(l, (_ * e) / 100, { notation: "compact" })
              : null;
        return (0, c.tZ)(
          Ot,
          { title: a("team_account_teamplan_changeplan_current_plan_header") },
          (0, c.tZ)(
            d.Ejs,
            { flexDirection: "column", gap: "16px", sx: { marginTop: "16px" } },
            (0, c.tZ)(
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
              (0, c.tZ)(
                d.nvN,
                { bold: !0, color: "ds.text.neutral.standard" },
                s
                  ? a("team_account_teamplan_changeplan_current_plan_starter")
                  : i
                  ? a("manage_subscription_plan_name_dashlane_team")
                  : o
                  ? a("manage_subscription_plan_name_dashlane_business")
                  : Da || (Da = (0, c.tZ)(d.HoD, { size: 30, color: "ds.text.neutral.standard" }))
              ),
              (0, c.tZ)(
                d.nvN,
                { color: "ds.text.neutral.standard" },
                b ? a("team_account_teamplan_changeplan_current_plan_per_year", { cost: b }) : null
              )
            )
          )
        );
      };
      var Ia,
        Aa,
        wa = a(307973);
      const ka = ({ currency: e, selectedOffer: t, costData: a }) => {
          const { translate: s } = (0, p.Z)(),
            { loading: i, billingCountry: o } = S();
          if (i) return n.createElement(d.HoD, { color: d.colors.midGreen00 });
          const r = "US" === o ? "team_account_teamplan_changeplan_order_summary_tax" : "team_account_teamplan_vat";
          return n.createElement(
            d.Ejs,
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
            n.createElement(Kt, {
              label: n.createElement(d.X6q, { size: "small" }, s("team_account_teamplan_changeplan_order_summary_header")),
              value: n.createElement(d.nvN, { color: "ds.text.neutral.quiet" }, (0, wa.Z)(new Date(), "MM/dd/yyyy"))
            }),
            n.createElement(
              d.Ejs,
              { flexDirection: "column", gap: "16px", sx: { padding: "32px 0" } },
              n.createElement(ra, { selectedOffer: t, currency: e, costData: a })
            ),
            n.createElement(
              d.Ejs,
              { flexDirection: "column", gap: "16px" },
              n.createElement(
                d.nvN,
                { size: "small", color: "ds.text.neutral.catchy", sx: { padding: "0 10px", fontWeight: "light" } },
                s("team_account_teamplan_changeplan_order_summary_seats_total", { totalSeats: a.totalSeats })
              ),
              n.createElement(Kt, {
                label: n.createElement(
                  d.nvN,
                  { size: "small", color: "ds.text.neutral.standard" },
                  s("team_account_teamplan_changeplan_order_summary_subtotal")
                ),
                value: e ? n.createElement(d.nvN, { size: "small", color: "ds.text.neutral.standard" }, s.price(e, a.subtotal / 100)) : null
              }),
              a.tax && e
                ? n.createElement(Kt, {
                    label: n.createElement(d.nvN, { size: "small", color: "ds.text.neutral.quiet" }, s(r)),
                    value: n.createElement(d.nvN, { size: "small", color: "ds.text.neutral.quiet" }, s.price(e, a.tax / 100))
                  })
                : null,
              a?.proratedDiscount
                ? n.createElement(Kt, {
                    label: n.createElement(
                      d.Ejs,
                      { alignItems: "center", gap: "5px" },
                      n.createElement(
                        d.nvN,
                        { size: "small", color: "ds.text.neutral.quiet" },
                        s("team_account_teamplan_changeplan_order_summary_prorated_discount")
                      ),
                      n.createElement(
                        d.ua7,
                        { content: s("team_account_teamplan_changeplan_order_summary_prorated_discount_tooltip") },
                        Ia || (Ia = n.createElement(d.uMt, { size: 16, color: "ds.text.neutral.quiet" }))
                      )
                    ),
                    value: e
                      ? n.createElement(d.nvN, { size: "small", color: "ds.text.neutral.quiet" }, s.price(e, a.proratedDiscount / 100))
                      : null
                  })
                : null,
              a?.promoPrice
                ? n.createElement(Kt, {
                    label: n.createElement(
                      d.nvN,
                      { size: "small", color: "ds.text.neutral.quiet" },
                      s("team_account_teamplan_upgrade_premium_coupon")
                    ),
                    value: e
                      ? n.createElement(d.nvN, { size: "small", color: "ds.text.neutral.quiet" }, "-", s.price(e, a.promoPrice / 100))
                      : null
                  })
                : null,
              Aa || (Aa = n.createElement(Ht, null)),
              a?.total
                ? n.createElement(Kt, {
                    label: n.createElement(d.nvN, { bold: !0, size: "large" }, s("team_account_teamplan_total")),
                    value: e ? n.createElement(d.nvN, { bold: !0, size: "large" }, s.price(e, a.total / 100)) : null
                  })
                : null
            )
          );
        },
        Oa = () => {
          const { translate: e } = (0, p.Z)();
          return n.createElement(
            Ot,
            { title: e("team_account_teamplan_changeplan_payment_method_header") },
            n.createElement(
              d.Ejs,
              { sx: { display: "flex", gap: "6px", marginTop: "16px" } },
              n.createElement(d.UXA, { size: 16, color: d.colors.grey00 }),
              n.createElement(
                d.nvN,
                { size: "medium", color: d.colors.grey00 },
                e("team_account_teamplan_changeplan_payment_method_invoice_body")
              )
            )
          );
        };
      var La = a(788355),
        za = a(925930),
        Ra = a(787268);
      const ja =
          /^((AT)(U\d{8})|(BE)(0\d{9}|\d{10})|(BG)(\d{9,10})|(CHE)(\d{9})|(CY)(\d{8}[A-Z])|(CZ)(\d{8,10})|(DE)(\d{9})|(DK)(\d{8})|(EE)(\d{9})|(GB)(\d{5,12})|(EL|GR)(\d{9})|(ES)([\dA-Z]\d{7}[\dA-Z])|(FI)(\d{8})|(FR)([\dA-Z]{2}\d{9})|(HU)(\d{8})|(HR)(\d{11})|(IE)(\d{7}[A-Z]{2})|(IT)(\d{11})|(LT)(\d{9}|\d{12})|(LU)(\d{8})|(LV)(\d{11})|(MT)(\d{8})|(NL)(\d{9}(B\d{2}|BO2))|(PL)(\d{10})|(PT)(\d{9})|(RO)(\d{2,10})|(SE)(\d{12})|(SI)(\d{8})|(SK)(\d{10})|(\d{9}MVA))$/i,
        Pa = "team_account_vat_number_add_description",
        Ua = "team_account_vat_number";
      var Ba = (function (e) {
          return (e[(e.ADD = 0)] = "ADD"), (e[(e.UPDATE = 1)] = "UPDATE"), e;
        })(Ba || {}),
        Ga = (function (e) {
          return (e.INITIAL_VIEW = "initialView"), (e.EDIT = "edit"), (e.SAVE = "save"), (e.SAVING = "saving"), e;
        })(Ga || {});
      const Fa = ({ isInAccountSummary: e }) => {
          const { translate: t } = (0, p.Z)(),
            [a, s] = (0, n.useState)(""),
            [i, o] = (0, n.useState)("cancel"),
            [r, l] = (0, n.useState)(!1),
            [c, u] = (0, n.useState)(Ba.ADD),
            [_, m] = (0, n.useState)(Ga.INITIAL_VIEW),
            g = (0, Ra.V)(),
            { deleteTeamVat: b, getTeamVat: h, upsertTeamVat: x } = (0, Fe.u)(za.a);
          (0, n.useEffect)(() => {
            (async () => {
              const e = await h();
              "success" === e.tag ? (s(e.data?.vatNumber), o("delete"), m(Ga.EDIT)) : m(Ga.INITIAL_VIEW);
            })();
          }, [h]);
          const S = async () => {
              "success" === (await b()).tag &&
                (s(""),
                m(Ga.INITIAL_VIEW),
                o("cancel"),
                u(Ba.ADD),
                g.showAlert(t("team_account_vat_number_delete_success_alert"), d.BLW.SUCCESS));
            },
            v = (e) =>
              e &&
              !((e) => {
                const t = e.replaceAll(/\./g, "");
                return ja.test(t);
              })(e)
                ? t("team_account_vat_number_invalid")
                : null,
            f = { vatNumber: a },
            C = c === Ba.ADD ? "team_account_vat_number_add_success" : "team_account_vat_number_update_success";
          return (0, y.tZ)(
            n.Fragment,
            null,
            "" === a &&
              (e
                ? (0, y.tZ)(y.nv, { color: "ds.text.neutral.quiet", textStyle: "ds.body.standard.regular" }, t(Pa))
                : (0, y.tZ)(d.nvN, { color: "ds.text.neutral.quiet", size: "medium" }, t(Pa))),
            _ === Ga.INITIAL_VIEW
              ? (0, y.tZ)(
                  "div",
                  { sx: { marginTop: "16px" } },
                  (0, y.tZ)(
                    y.zx,
                    {
                      mood: "neutral",
                      intensity: "quiet",
                      icon: "ActionAddOutlined",
                      layout: "iconLeading",
                      onClick: () => {
                        m(Ga.SAVE);
                      }
                    },
                    t("team_account_vat_number_add_label")
                  )
                )
              : (0, y.tZ)(
                  "div",
                  { sx: { marginTop: "16px" } },
                  (0, y.tZ)(
                    La.J9,
                    {
                      initialValues: f,
                      onSubmit:
                        _ === Ga.SAVE
                          ? async (e) => {
                              m(Ga.SAVING),
                                "success" === (await x({ newVATNumber: e.vatNumber })).tag &&
                                  (s(e.vatNumber),
                                  l(!0),
                                  m(Ga.EDIT),
                                  o("delete"),
                                  setTimeout(() => {
                                    l(!1);
                                  }, 2e3));
                            }
                          : _ === Ga.EDIT
                          ? () => {
                              l(!1), m(Ga.SAVE), u(Ba.UPDATE);
                            }
                          : () => {}
                    },
                    ({ errors: e, resetForm: a, touched: n, values: s }) =>
                      (0, y.tZ)(
                        La.l0,
                        null,
                        (0, y.tZ)(
                          d.T5p,
                          { gap: "16px", gridTemplateColumns: "2fr 0.25fr 1fr" },
                          (0, y.tZ)(
                            d.dDn,
                            { gridColumn: "1 / 2" },
                            (0, y.tZ)(La.gN, { name: "vatNumber", validate: v }, ({ field: { onChange: e, ...a } }) =>
                              (0, y.tZ)(y.oi, {
                                label: t(Ua),
                                disabled: _ === Ga.EDIT,
                                onChange: (t) => {
                                  e(t), _ === Ga.EDIT && (m(Ga.SAVE), l(!1));
                                },
                                ...a,
                                sx: { input: { textTransform: "uppercase" } }
                              })
                            ),
                            e.vatNumber && n.vatNumber && (0, y.tZ)(d.nvN, { color: "ds.text.danger.quiet", size: "x-small" }, e.vatNumber)
                          ),
                          (0, y.tZ)(
                            d.dDn,
                            { gridColumn: "2 / 3", sx: { marginTop: "16px" } },
                            _ === Ga.SAVING
                              ? (0, y.tZ)(
                                  y.zx,
                                  { intensity: "catchy", layout: "labelOnly", disabled: !0, type: "submit" },
                                  t("team_account_name_saving_label")
                                )
                              : _ === Ga.SAVE
                              ? (0, y.tZ)(
                                  y.zx,
                                  { intensity: "catchy", layout: "labelOnly", disabled: "" === s.vatNumber, type: "submit" },
                                  t("team_settings_button_save_label")
                                )
                              : (0, y.tZ)(
                                  y.zx,
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
                          (0, y.tZ)(
                            d.dDn,
                            { gridColumn: "3 / 4", sx: { marginTop: "16px" } },
                            "cancel" === i
                              ? (0, y.tZ)(
                                  y.zx,
                                  {
                                    mood: "neutral",
                                    intensity: "quiet",
                                    layout: "labelOnly",
                                    disabled: _ === Ga.SAVING,
                                    onClick: () => m(Ga.INITIAL_VIEW)
                                  },
                                  t("_common_action_cancel")
                                )
                              : (0, y.tZ)(
                                  y.zx,
                                  {
                                    mood: "neutral",
                                    intensity: "quiet",
                                    icon: "ActionDeleteOutlined",
                                    layout: "iconLeading",
                                    disabled: _ === Ga.SAVING,
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
            r && (0, y.tZ)(d.nvN, { color: "ds.text.positive.quiet", size: "x-small" }, t(C))
          );
        },
        qa = ({ isInAccountSummary: e }) => {
          const { translate: t } = (0, p.Z)();
          return (0, y.tZ)(
            "div",
            null,
            e
              ? (0, y.tZ)(
                  "div",
                  { sx: { marginTop: "24px" } },
                  (0, y.tZ)(y.X6, { color: "ds.text.neutral.catchy", as: "h2", textStyle: "ds.title.section.medium" }, t(Ua)),
                  (0, y.tZ)("div", { sx: { marginTop: "16px" } }, (0, y.tZ)(Fa, { isInAccountSummary: e }))
                )
              : (0, y.tZ)(Ot, { title: t(Ua) }, (0, y.tZ)("div", { sx: { marginTop: "16px" } }, (0, y.tZ)(Fa, { isInAccountSummary: e })))
          );
        };
      let Va = (function (e) {
        return (e.FORM = "form"), (e.SUCCESS = "success"), e;
      })({});
      var $a, Wa, Ha, Ka, Ya, Qa;
      const Xa = () => {
        const { translate: e } = (0, p.Z)(),
          { routes: t } = (0, i.Xo)();
        return (0, c.tZ)(
          d.k$b,
          null,
          (0, c.tZ)(
            d.zxk,
            { type: "button", nature: "ghost", onClick: () => (0, i.uX)(t.teamAccountRoutePath) },
            (0, c.tZ)(
              d.Ejs,
              { alignItems: "center" },
              $a || ($a = (0, c.tZ)(d.xCe, { size: 14 })),
              (0, c.tZ)(
                d.nvN,
                { bold: !0, sx: { marginLeft: "14px", color: d.colors.dashGreen00 } },
                e("team_account_teamplan_changeplan_back")
              )
            )
          )
        );
      };
      var Ja = a(233377),
        en = a(279684),
        tn = a(955370),
        an = a(104227),
        nn = a(905083),
        sn = a(295946),
        on = a(447041),
        rn = a(119452),
        ln = (function (e) {
          return (
            (e[(e.DUPLICATE = 0)] = "DUPLICATE"),
            (e[(e.SOMETHING_WRONG = 1)] = "SOMETHING_WRONG"),
            (e[(e.EMPTY = 2)] = "EMPTY"),
            (e[(e.MALFORMED = 3)] = "MALFORMED"),
            e
          );
        })(ln || {});
      const cn = (e, t) => {
        switch (t) {
          case ln.DUPLICATE:
            return e("team_account_name_already_exists");
          case ln.SOMETHING_WRONG:
            return e("team_account_name_error_something_wrong");
          case ln.EMPTY:
            return e("team_account_name_is_empty");
          case ln.MALFORMED:
            return e("team_account_name_is_malformed");
          default:
            return e("team_account_name_error_something_wrong");
        }
      };
      var dn = a(646577);
      const un = "col1--a1XY6sTFa0",
        _n = "col2--K8GKZ0pbNU";
      var mn;
      const pn = ({ lee: e, handleSave: t, defaultValue: a }) => {
        const { translate: n } = (0, p.Z)();
        return (0, y.tZ)(
          "div",
          null,
          (0, y.tZ)(
            y.X6,
            { color: "ds.text.neutral.catchy", as: "h2", textStyle: "ds.title.section.medium", sx: { mb: "1em" } },
            n("team_account_heading_team_name")
          ),
          e.permission.adminAccess.hasFullAccess
            ? (0, y.tZ)(
                "div",
                null,
                (0, y.tZ)(dn.X, {
                  defaultValue: a,
                  saveBtnLabel: n("team_account_name_save_label"),
                  savingBtnLabel: n("team_account_name_saving_label"),
                  editBtnLabel: n("team_account_name_edit_label"),
                  placeholder: n("team_account_name_add_your_team_name"),
                  successMessage: n("team_account_name_add_your_team_success"),
                  textFieldClassName: un,
                  buttonClassName: _n,
                  onSave: t,
                  layout: "iconLeading",
                  icon: mn || (mn = (0, y.tZ)(y.JO, { name: "ActionEditOutlined" })),
                  inputStyle: { fontSize: "15px" }
                })
              )
            : a
        );
      };
      var gn = a(667355);
      const yn = "team_account_teamplan_buy_more",
        bn = ({ isFreeTrial: e, isGracePeriod: t, isStarter: a, isDiscontinuedTrial: n, onClick: s, licenseCount: i }) => {
          const { translate: o } = (0, p.Z)();
          return a
            ? null
            : t && !e
            ? (0, y.tZ)(
                y.zx,
                { mood: "neutral", intensity: "quiet", title: o("team_account_teamplan_hint_cannot_add_seats"), disabled: !0 },
                o(yn)
              )
            : n
            ? (0, y.tZ)(y.zx, { mood: "brand", intensity: "catchy", onClick: s }, o("team_account_teamplan_trial_ended_buy_dashlane"))
            : e
            ? (0, y.tZ)(y.zx, { mood: "neutral", intensity: "quiet", onClick: s, disabled: !1 }, o("team_account_teamplan_upgrade_button"))
            : (0, y.tZ)(y.zx, { mood: "neutral", intensity: "quiet", onClick: s, disabled: !i }, o(yn));
        };
      var hn;
      const xn = { width: "300px", margin: "10px 0px", flexWrap: "wrap", gap: "8px" },
        Sn = { margin: "10px", gap: "8px" },
        vn = ({ style: e, licenseCount: t, onRequestTeamUpgrade: a, onRequestBuyMoreSeats: s }) => {
          const { routes: r } = (0, i.Xo)(),
            { translate: l } = (0, p.Z)(),
            c = (0, te.C)(),
            { isTeamSoftDiscontinued: u, isTrial: _ } = (0, fe.lZ)(),
            m = (0, ve.o)("ecommerce_web_offerToExtend_phase1"),
            [g, b] = (0, n.useState)(!1),
            h = (0, ve.o)(U.w.EcommerceWebB2BDiscontinuationPhase1),
            x = !!c && c.spaceTier === Se.lD.Starter,
            S = !!c && c.spaceTier === Se.lD.Team,
            v = !!c && c.spaceTier === Se.lD.Business,
            f = !!c?.isFreeTrial,
            E = !!h && u && _,
            Z = (0, n.useMemo)(() => {
              let e;
              return (
                (e = l(
                  x
                    ? "team_account_teamplan_changeplan_plans_starter_name"
                    : S
                    ? "team_account_teamplan_team"
                    : "team_account_teamplan_business"
                )),
                f ? l("team_account_teamplan_trial", { planName: e }) : `Dashlane ${e}`
              );
            }, [x, S, f, l]),
            { logChangePlanEvent: T } = aa({
              hasPromo: !1,
              currentSeats: t,
              additionalSeats: 0,
              planChangeStep: o.PlanChangeStep.ChangePlanCta
            });
          if (!c) return null;
          const N = c.isGracePeriod,
            D = 0 === c.daysLeftInTrial;
          return f
            ? (0, y.tZ)(
                n.Fragment,
                null,
                (0, y.tZ)(
                  "div",
                  { style: e },
                  (0, y.tZ)(
                    "div",
                    { sx: { display: "flex" } },
                    (0, y.tZ)(
                      "div",
                      { sx: (0, y.jM)([{ display: "flex", flexDirection: "row" }, xn]) },
                      (0, y.tZ)("span", { className: "licenseCountText--hXtj4u8ji3" }, Z),
                      E ? (0, y.tZ)(y.Ct, { mood: "danger", label: l("team_account_teamplan_trial_ended_badge") }) : null
                    ),
                    (0, y.tZ)(
                      "div",
                      { sx: (0, y.jM)([{ display: "flex", flexDirection: "row" }, Sn]) },
                      (0, y.tZ)(bn, {
                        isGracePeriod: N,
                        isFreeTrial: f,
                        isStarter: x,
                        isDiscontinuedTrial: !!E,
                        onClick: () => a(o.ClickOrigin.AccountStatus),
                        licenseCount: t
                      }),
                      !N && D && m
                        ? (0, y.tZ)(
                            y.zx,
                            {
                              mood: "brand",
                              intensity: "supershy",
                              layout: "labelOnly",
                              onClick: () => {
                                (0, j.Kz)(new o.UserClickEvent({ button: o.Button.ExtendTrial, clickOrigin: o.ClickOrigin.AccountStatus })),
                                  b(!0);
                              }
                            },
                            l("team_dashboard_extend_trial_button")
                          )
                        : null,
                      E
                        ? (0, y.tZ)(
                            y.zx,
                            {
                              mood: "brand",
                              intensity: "supershy",
                              onClick: () => {
                                (0, z.Yo)(oe.oH);
                              }
                            },
                            l("team_account_teamplan_trial_ended_pay_by_invoice_button")
                          )
                        : null
                    )
                  ),
                  (0, y.tZ)("div", { className: "licenseCountContainer--bEWqbHZbKG" }, l("team_account_teamplan_users", { count: t }))
                ),
                g ? (0, y.tZ)(C.XA, { initialDialog: C.s9.SURVEY }) : null
              )
            : (0, y.tZ)(
                d.Ejs,
                { flexDirection: "column", sx: { marginTop: "8px" } },
                (0, y.tZ)(
                  d.Ejs,
                  { alignItems: "center" },
                  (0, y.tZ)(
                    "div",
                    { sx: xn },
                    (0, y.tZ)(y.nv, { textStyle: "ds.body.standard.regular" }, l("team_account_teamplan_plan_name", { planName: Z }))
                  ),
                  (0, y.tZ)(
                    "div",
                    { sx: Sn },
                    v
                      ? null
                      : (0, y.tZ)(
                          y.zx,
                          {
                            mood: "neutral",
                            intensity: "quiet",
                            type: "button",
                            onClick: () => {
                              T(), (0, i.uX)(r.teamAccountChangePlanRoutePath);
                            }
                          },
                          l("team_account_teamplan_change_plan")
                        )
                  )
                ),
                (0, y.tZ)(
                  d.Ejs,
                  { alignItems: "center", sx: { marginTop: "8px" } },
                  (0, y.tZ)(
                    "div",
                    { sx: xn },
                    (0, y.tZ)(y.nv, { textStyle: "ds.body.standard.regular" }, l("team_account_teamplan_seats", { numSeats: t }))
                  ),
                  (0, y.tZ)(
                    "div",
                    { sx: Sn },
                    (0, y.tZ)(bn, {
                      isGracePeriod: N,
                      isFreeTrial: f,
                      isStarter: x,
                      onClick: s,
                      licenseCount: t,
                      isDiscontinuedTrial: !!E
                    }),
                    E ? hn || (hn = (0, y.tZ)(y.zx, null)) : null
                  )
                )
              );
        },
        fn = {
          CARD_BORDER: { border: "1px solid ds.border.neutral.quiet.idle", borderRadius: "8px", overflow: "hidden" },
          ACCOUNT_PAGE: {
            backgroundColor: "ds.background.alternate",
            minHeight: "100%",
            "& > div": { maxWidth: "74em", padding: "32px 48px" }
          }
        };
      var Cn;
      const En = ({ lee: e, seatsNumber: t, onRequestBuyMoreSeats: a, onRequestTeamUpgrade: s }) => {
        const { translate: i } = (0, p.Z)(),
          { reportTACError: o } = $(),
          [r, l] = (0, n.useState)("");
        (0, n.useEffect)(() => {
          (async ({ globalState: e }) => {
            var t;
            const a = (0, sn.v0)(e);
            if (!a) throw new Error(on.N);
            const n = await new rn.Z().status({ auth: a });
            return null != (t = n.content.team?.info.name) ? t : "";
          })(e)
            .then(l)
            .catch(o);
        }, []);
        const c = (0, gn.C)({});
        return (0, y.tZ)(
          d.Ejs,
          { flexDirection: "column" },
          (0, y.tZ)(
            y.X6,
            { textStyle: "ds.title.section.large", as: "h1", color: "ds.text.neutral.standard", sx: { marginBottom: "32px" } },
            i("team_account_heading_team_setup")
          ),
          (0, y.tZ)(
            d.Ejs,
            { gap: "24px", flexWrap: "nowrap" },
            (0, y.tZ)(
              d.Ejs,
              {
                flexDirection: "column",
                sx: (0, y.jM)([
                  { flexGrow: "1", backgroundColor: "ds.container.agnostic.neutral.supershy", padding: "32px" },
                  fn.CARD_BORDER
                ])
              },
              (0, y.tZ)(pn, {
                lee: e,
                handleSave: (t) =>
                  (async (e, t, a, n) => {
                    const s = (0, sn.v0)(t.globalState);
                    if (!s) {
                      const e = new Error(cn(a, ln.SOMETHING_WRONG));
                      throw (n(e), e);
                    }
                    if (!e.length) throw new Error(cn(a, ln.EMPTY));
                    if (!/^[\w\s-.]*$/.test(e)) throw new Error(cn(a, ln.MALFORMED));
                    try {
                      var i;
                      const t = await new rn.Z().editSettings({ auth: s, operations: [{ type: "set_name", value: e }] });
                      return null != (i = t.content.team?.info.name) ? i : "";
                    } catch (e) {
                      const t = "team_name_already_exists" === e.message ? ln.DUPLICATE : ln.SOMETHING_WRONG;
                      throw new Error(cn(a, t));
                    }
                  })(t, e, i, o),
                defaultValue: r
              }),
              (0, y.tZ)(
                "div",
                { sx: { marginTop: "2em" } },
                (0, y.tZ)(
                  y.X6,
                  { color: "ds.text.neutral.catchy", as: "h2", textStyle: "ds.title.section.medium" },
                  i("team_account_teamplan")
                ),
                (0, y.tZ)(vn, { licenseCount: t, onRequestBuyMoreSeats: a, onRequestTeamUpgrade: s })
              )
            ),
            c
              ? (0, y.tZ)(
                  d.k$b,
                  {
                    sx: (0, y.jM)([
                      { backgroundColor: "ds.container.agnostic.neutral.supershy", width: "416px", padding: "32px" },
                      fn.CARD_BORDER
                    ])
                  },
                  Cn || (Cn = (0, y.tZ)(gn.P, null))
                )
              : null
          )
        );
      };
      var Zn = a(261892),
        Tn = a(551453);
      const Nn = ({ children: e }) =>
          (0, y.tZ)(
            d.Ejs,
            {
              flexDirection: "column",
              sx: (0, d.jMf)([
                fn.CARD_BORDER,
                {
                  backgroundColor: "ds.container.agnostic.neutral.supershy",
                  padding: "24px",
                  marginTop: "24px",
                  flex: "1",
                  overflow: "visible"
                }
              ])
            },
            e
          ),
        Dn = {
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
        Mn = (e, t, a) => {
          var n, s, i, o, r;
          switch (e) {
            case Se.Uz.None:
              return "paragraph" === t
                ? a.markup(null != (n = Dn.none[t]) ? n : "", {}, { linkTarget: "_blank" })
                : a(null != (s = Dn.none[t]) ? s : "");
            case Se.Uz.Pending:
              return "paragraph" === t
                ? a.markup(null != (i = Dn.pending[t]) ? i : "", {}, { linkTarget: "_blank" })
                : a(null != (o = Dn.pending[t]) ? o : "");
            case Se.Uz.Canceled:
              return a(null != (r = Dn.canceled[t]) ? r : "");
          }
        },
        In = ({ status: e, handleClickButton: t }) => {
          const { translate: a } = (0, p.Z)();
          return (0, y.tZ)(
            Nn,
            null,
            e !== Se.Uz.None
              ? (0, y.tZ)(
                  y.X6,
                  { as: "h2", color: "ds.text.neutral.catchy", textStyle: "ds.title.block.medium", sx: { marginBottom: "16px" } },
                  Mn(e, "heading", a)
                )
              : null,
            (0, y.tZ)(y.nv, { color: "ds.text.neutral.quiet", sx: { fontSize: "15px" } }, Mn(e, "paragraph", a)),
            e !== Se.Uz.Pending
              ? (0, y.tZ)(y.zx, { intensity: "quiet", mood: "neutral", sx: { marginTop: "16px" }, onClick: t }, Mn(e, "button", a))
              : null
          );
        },
        An = ({ spaceTier: e, handleClose: t, sendCancelRequest: a, requestStatus: s }) => {
          const { translate: i } = (0, p.Z)(),
            [r, l] = (0, n.useState)({
              [o.PossibleFormAnswers.ChoseOtherPasswordManager]: !1,
              [o.PossibleFormAnswers.MissingCriticalFeatures]: !1,
              [o.PossibleFormAnswers.NoInternalUsage]: !1,
              [o.PossibleFormAnswers.NoNeedForPasswordManager]: !1,
              [o.PossibleFormAnswers.Other]: !1,
              [o.PossibleFormAnswers.TechnicalIssues]: !1,
              [o.PossibleFormAnswers.TooExpensive]: !1
            });
          (0, n.useEffect)(() => {
            (0, j.Nc)(o.PageView.TacModalReasonsToCancelSubscription);
          }, []);
          const c = `${e[0].toUpperCase()}${e.slice(1)}`,
            d = (e) => {
              const t = !r[e];
              l({ ...r, [e]: t });
            };
          return (0, y.tZ)(
            y.Vq,
            {
              isOpen: !0,
              onClose: () => {
                (0, j.Kz)(
                  new o.UserCallToActionEvent({ callToActionList: [o.CallToAction.Confirm, o.CallToAction.Cancel], hasChosenNoAction: !0 })
                ),
                  t();
              },
              title: i("team_account_cancel_form_heading"),
              actions: {
                primary: {
                  children: i("team_account_cancel_form_button_confirm"),
                  onClick: () => {
                    const e = Object.keys(r).filter((e) => r[e]);
                    if (!e.every(Se.ud)) throw new Error("Invalid cancel subscription reason");
                    a(e),
                      (0, j.Kz)(
                        new o.UserCallToActionEvent({
                          callToActionList: [o.CallToAction.Confirm, o.CallToAction.Cancel],
                          chosenAction: o.CallToAction.Confirm,
                          hasChosenNoAction: !1
                        })
                      ),
                      (0, j.Kz)(
                        new o.UserSubmitInProductFormAnswerEvent({
                          formName: o.FormName.ReasonToCancelSubscription,
                          answerList: [
                            o.PossibleFormAnswers.NoInternalUsage,
                            o.PossibleFormAnswers.NoNeedForPasswordManager,
                            o.PossibleFormAnswers.ChoseOtherPasswordManager,
                            o.PossibleFormAnswers.MissingCriticalFeatures,
                            o.PossibleFormAnswers.TechnicalIssues,
                            o.PossibleFormAnswers.TooExpensive,
                            o.PossibleFormAnswers.Other
                          ],
                          chosenAnswerList: e
                        })
                      );
                  },
                  isLoading: "pending" === s
                },
                secondary: {
                  children: i("team_account_cancel_form_button_cancel", { planTier: c }),
                  onClick: () => {
                    (0, j.Kz)(
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
            (0, y.tZ)(
              y.nv,
              { sx: { marginBottom: "20px" }, textStyle: "ds.body.standard.regular", color: "ds.text.neutral.quiet" },
              i("team_account_cancel_form_subheading")
            ),
            (0, y.tZ)(y.nv, { textStyle: "ds.title.block.medium" }, i("team_account_cancel_form_question")),
            (0, y.tZ)(y.nv, { sx: { marginBottom: "20px" }, textStyle: "ds.body.standard.regular" }, i("team_account_cancel_form_context")),
            (0, y.tZ)(
              "div",
              { sx: { display: "flex", flexDirection: "column", gap: "20px" } },
              (0, y.tZ)(y.XZ, {
                label: i("team_account_cancel_form_option_1"),
                checked: r.no_internal_usage,
                disabled: "pending" === s,
                onChange: () => d(o.PossibleFormAnswers.NoInternalUsage)
              }),
              (0, y.tZ)(y.XZ, {
                label: i("team_account_cancel_form_option_2"),
                checked: r.no_need_for_password_manager,
                disabled: "pending" === s,
                onChange: () => d(o.PossibleFormAnswers.NoNeedForPasswordManager)
              }),
              (0, y.tZ)(y.XZ, {
                label: i("team_account_cancel_form_option_3"),
                checked: r.chose_other_password_manager,
                disabled: "pending" === s,
                onChange: () => d(o.PossibleFormAnswers.ChoseOtherPasswordManager)
              }),
              (0, y.tZ)(y.XZ, {
                label: i("team_account_cancel_form_option_4"),
                checked: r.missing_critical_features,
                disabled: "pending" === s,
                onChange: () => d(o.PossibleFormAnswers.MissingCriticalFeatures)
              }),
              (0, y.tZ)(y.XZ, {
                label: i("team_account_cancel_form_option_5"),
                checked: r.technical_issues,
                disabled: "pending" === s,
                onChange: () => d(o.PossibleFormAnswers.TechnicalIssues)
              }),
              (0, y.tZ)(y.XZ, {
                label: i("team_account_cancel_form_option_6"),
                checked: r.too_expensive,
                disabled: "pending" === s,
                onChange: () => d(o.PossibleFormAnswers.TooExpensive)
              }),
              (0, y.tZ)(y.XZ, {
                sx: { marginBottom: "8px" },
                label: i("team_account_cancel_form_option_7"),
                checked: r.other,
                disabled: "pending" === s,
                onChange: () => d(o.PossibleFormAnswers.Other)
              })
            ),
            (0, y.tZ)(
              y.nv,
              { sx: { margin: "20px 0" }, textStyle: "ds.body.standard.regular", color: "ds.text.neutral.quiet" },
              i.markup("team_account_cancel_form_help_markup", {}, { linkTarget: "_blank" })
            )
          );
        };
      var wn, kn;
      const On = {
          ITEM: { display: "flex", flexDirection: "row", alignItems: "flex-start", gap: "16px" },
          WRAPPER: { margin: "16px 0", gap: "24px", display: "flex", flexDirection: "column" }
        },
        Ln = "team_account_cancel_confirmation_dialog_close",
        zn = ({ handleClose: e }) => {
          const { translate: t } = (0, p.Z)();
          return (
            (0, n.useEffect)(() => {
              (0, j.Nc)(o.PageView.TacConfirmSubscriptionCancellationRequestSubmission);
            }, []),
            (0, y.tZ)(
              y.Vq,
              {
                isOpen: !0,
                onClose: e,
                title: t("team_account_cancel_confirmation_dialog_heading"),
                closeActionLabel: t(Ln),
                actions: { primary: { children: t(Ln), onClick: e } }
              },
              (0, y.tZ)(
                "div",
                { sx: On.WRAPPER },
                (0, y.tZ)(
                  "div",
                  { sx: On.ITEM },
                  wn || (wn = (0, y.tZ)(y.JO, { name: "ItemEmailOutlined", size: "xlarge" })),
                  (0, y.tZ)(y.nv, null, t.markup("team_account_cancel_confirmation_dialog_paragraph_1_markup"))
                ),
                (0, y.tZ)(
                  "div",
                  { sx: On.ITEM },
                  kn || (kn = (0, y.tZ)(y.JO, { name: "ActionUndoOutlined", size: "xlarge" })),
                  (0, y.tZ)(y.nv, null, t("team_account_cancel_confirmation_dialog_paragraph_2"))
                )
              )
            )
          );
        };
      let Rn = (function (e) {
        return (
          (e.NONE = "none"), (e.SURVEY = "survey"), (e.REQUEST_SUCCESS = "requestSentConfirmation"), (e.REQUEST_ERROR = "requestError"), e
        );
      })({});
      const jn = ({ status: e }) => {
        const [t, a] = (0, n.useState)(Rn.NONE),
          [s, i] = (0, n.useState)("idle"),
          { isTeamSoftDiscontinued: r } = (0, fe.lZ)(),
          l = (0, te.C)(),
          { translate: c } = (0, p.Z)(),
          u = (0, Ra.V)();
        (0, n.useEffect)(() => {
          t === Rn.REQUEST_ERROR && u.showAlert(c("team_account_cancel_request_error"), d.BLW.ERROR, !1, void 0, void 0, 1e4);
        }, [t]);
        const { requestTeamPlanCancellation: _ } = (0, Fe.u)(Tn.o);
        return null !== r && l
          ? r
            ? null
            : (0, y.tZ)(
                n.Fragment,
                null,
                (0, y.tZ)(In, {
                  status: e,
                  handleClickButton:
                    e === Se.Uz.None
                      ? () => {
                          (0, j.Kz)(
                            new o.UserClickEvent({ clickOrigin: o.ClickOrigin.BillingInformation, button: o.Button.CancelSubscription })
                          ),
                            a(Rn.SURVEY);
                        }
                      : () => {
                          (0, j.Kz)(
                            new o.UserClickEvent({ clickOrigin: o.ClickOrigin.BillingInformation, button: o.Button.ReactivateSubscription })
                          ),
                            (0, z.Yo)(oe.oH);
                        }
                }),
                t === Rn.SURVEY
                  ? (0, y.tZ)(An, {
                      spaceTier: l.spaceTier,
                      handleClose: () => {
                        a(Rn.NONE);
                      },
                      sendCancelRequest: async (e) => {
                        i("pending");
                        try {
                          const t = await _({ reasons: e });
                          if ((i("finished"), "failure" === t.tag)) throw new Error("Failed to request team plan cancellation.");
                          a(Rn.REQUEST_SUCCESS);
                        } catch (e) {
                          a(Rn.REQUEST_ERROR);
                        }
                      },
                      requestStatus: s
                    })
                  : null,
                t === Rn.REQUEST_SUCCESS
                  ? (0, y.tZ)(zn, {
                      handleClose: () => {
                        a(Rn.NONE);
                      }
                    })
                  : null
              )
          : null;
      };
      var Pn = a(526849),
        Un = a(797518),
        Bn = a(309293);
      var Gn;
      const Fn = (e) => e.trim().toLocaleLowerCase(),
        qn = ({ defaultSelected: e, handleConfirmClick: t, handleClose: a, allMembersCount: s, membersList: i }) => {
          const { translate: o } = (0, p.Z)(),
            [r, l] = (0, n.useState)(e),
            [c, u] = (0, n.useState)(""),
            [_, m] = (0, n.useState)([]),
            [g, y] = (0, n.useState)(!1);
          (0, n.useEffect)(() => {
            m(((e, t) => ("" === t.trim() ? e : e.filter(({ login: e }) => Fn(e).includes(Fn(t)))))(i, c).slice(0, 5));
          }, [i, c]);
          const b = n.useCallback(() => {
              a();
            }, [a]),
            h = !_.length || e === r;
          return n.createElement(
            G.o,
            {
              isOpen: !0,
              showCloseIcon: !0,
              title: o("team_account_billing_admin_dialog_title"),
              footer: n.createElement(d.cNS, {
                primaryButtonTitle: o("team_account_billing_admin_dialog_confirm"),
                primaryButtonOnClick: () => t(r),
                primaryButtonProps: { disabled: h }
              }),
              onRequestClose: b
            },
            n.createElement(
              d.T5p,
              { gap: "1.5em", gridTemplateColumns: "auto" },
              n.createElement(d.nvN, null, o("team_account_billing_admin_dialog_warning")),
              n.createElement(d.oil, {
                fullWidth: !0,
                autoFocus: !0,
                startAdornment: Gn || (Gn = n.createElement(d.W1M, null)),
                onChange: ({ target: { value: e } }) => {
                  u(e), g || y(!0);
                },
                placeholder: o("team_account_billing_admin_search_field_placeholder")
              }),
              _.length > 0
                ? n.createElement(
                    n.Fragment,
                    null,
                    n.createElement(
                      Bn.S,
                      {
                        value: r,
                        onChange: ({ target: { value: e } }) => {
                          l(e);
                        },
                        groupName: "billingAdmins"
                      },
                      _.map(({ login: e }) => n.createElement(Bn.E, { key: e, value: e, className: "radioWrapper--zUHiaWj5BN" }, e))
                    ),
                    n.createElement(
                      d.nvN,
                      { color: "neutrals.8" },
                      _.length < s ? o("team_account_billing_admin_display_disclaimer", { count: _.length || "-", total: s || "-" }) : null
                    )
                  )
                : null,
              0 === _.length ? n.createElement(d.nvN, null, o("team_account_billing_admin_search_no_match")) : null
            )
          );
        };
      var Vn;
      const $n = ({ lee: e }) => {
        const { globalState: t } = e,
          [a, s] = (0, n.useState)(""),
          [i, r] = (0, n.useState)(0),
          [l, c] = (0, n.useState)([]),
          [u, _] = (0, n.useState)(!1),
          m = (0, sn.v0)(t),
          { translate: g } = (0, p.Z)(),
          { reportTACError: b } = $(),
          h = (0, Ra.V)();
        return (
          (0, n.useEffect)(() => {
            (async () => {
              if (!m?.teamId) return;
              const e = await (0, Un.YY)({ teamId: m.teamId }),
                t = e.filter((e) => "accepted" === e.status),
                a = (0, Pn.sortWith)([(0, Pn.descend)((0, Pn.prop)("isBillingAdmin")), (0, Pn.descend)((0, Pn.prop)("isTeamCaptain"))])(t);
              c(a), r(e.length);
              const n = a[0].login;
              s(n);
            })().catch(b);
          }, [m?.teamId]),
          m
            ? (0, y.tZ)(
                n.Fragment,
                null,
                (0, y.tZ)(
                  d.Ejs,
                  { gap: "16px" },
                  (0, y.tZ)(
                    y.X6,
                    { color: "ds.text.neutral.catchy", as: "h2", textStyle: "ds.title.section.medium" },
                    g("team_account_heading_billing_admin")
                  ),
                  (0, y.tZ)(
                    y.nv,
                    { color: "ds.text.neutral.quiet", textStyle: "ds.body.standard.regular" },
                    g("team_account_billing_admin_access_information")
                  )
                ),
                (0, y.tZ)(
                  "div",
                  { className: "container--cNaXIUykkA" },
                  (0, y.tZ)(
                    "div",
                    { className: un },
                    (0, y.tZ)(
                      "span",
                      { className: w()("text--Jm4WO6KPbc", { "emptyText--YnRMwaHw2m": !a }, "automation-tests-tac-billing") },
                      a || "████████████████"
                    )
                  ),
                  (0, y.tZ)(
                    "div",
                    { className: _n },
                    e.permission.adminAccess.hasFullAccess
                      ? (0, y.tZ)(
                          "div",
                          { className: "editContainer--ZJk2BSq6aw" },
                          (0, y.tZ)(
                            y.zx,
                            {
                              mood: "neutral",
                              intensity: "quiet",
                              icon: Vn || (Vn = (0, y.tZ)(y.JO, { name: "ActionEditOutlined" })),
                              layout: "iconLeading",
                              disabled: !l.length,
                              onClick: () => {
                                _(!0), (0, j.Nc)(o.PageView.TacAccountBillingInfo);
                              }
                            },
                            g("team_account_billing_admin_edit_contact_info")
                          ),
                          u
                            ? (0, y.tZ)(qn, {
                                defaultSelected: a,
                                handleConfirmClick: async (e) => {
                                  if (a === e) return;
                                  _(!1), (0, j.Nc)(o.PageView.TacAccount);
                                  const n = (0, sn.v0)(t);
                                  if (n)
                                    try {
                                      await new rn.Z().updateBillingAdmin({ auth: n, newAdminLogin: e, oldAdminLogin: a }),
                                        h.showAlert(g("team_account_billing_admin_notification_success"), d.BLW.SUCCESS),
                                        s(e);
                                    } catch {
                                      h.showAlert(g("team_account_billing_admin_notification_something_wrong"), d.BLW.ERROR);
                                    }
                                  else b(new Error(en.N));
                                },
                                handleClose: () => {
                                  _(!1), (0, j.Nc)(o.PageView.TacAccount);
                                },
                                membersList: l,
                                allMembersCount: i
                              })
                            : null
                        )
                      : null
                  )
                )
              )
            : (b(new Error(en.N)), null)
        );
      };
      var Wn;
      const Hn = () => {
        const { translate: e } = (0, p.Z)();
        return (0, c.tZ)(
          d.Ejs,
          { gap: "16px", sx: { margin: "24px 0" } },
          (0, c.tZ)(d.nvN, { color: "ds.text.neutral.catchy", as: "h2", size: "large" }, e("team_account_invoice_payment_plan_heading")),
          (0, c.tZ)(
            "div",
            null,
            (0, c.tZ)(d.nvN, { color: "ds.text.neutral.quiet", size: "small" }, e("team_account_invoice_payment_plan_pay_credit_card")),
            (0, c.tZ)(
              d.nvN,
              { size: "small" },
              (0, c.tZ)(
                d.rUS,
                { href: oe.Bw, target: "_blank", rel: "noopener noreferrer", sx: { color: "ds.text.neutral.quiet", fontWeight: "400" } },
                e("team_account_invoice_payment_plan_contact_support")
              )
            )
          ),
          (0, c.tZ)(
            d.Ejs,
            { flexDirection: "row", gap: "8px", alignItems: "center", sx: { width: "100%" } },
            (0, c.tZ)(
              "div",
              { sx: { padding: "8px", backgroundColor: "ds.container.expressive.brand.quiet.idle", borderRadius: "8px" } },
              Wn || (Wn = (0, c.tZ)(y.JO, { name: "ItemTaxNumberOutlined", size: "large", color: "ds.text.brand.standard" }))
            ),
            (0, c.tZ)(d.nvN, { color: "ds.text.neutral.catchy", size: "medium" }, e("team_account_invoice_payment"))
          )
        );
      };
      var Kn,
        Yn = a(107377);
      const Qn = ({ isDisabled: e }) => {
        const [t, a] = (0, n.useState)(!1),
          { translate: s } = (0, p.Z)(),
          {
            loading: i,
            hasCreditCardPaymentMethod: r,
            last4DigitsFormatted: l,
            cardSvg: u,
            isExpired: _,
            expFormatted: m,
            pollUntilCardUpdate: g
          } = (0, b.C)({
            handleCardUpdate: (e) => {
              e && (0, j.Kz)(new o.UserAddNewPaymentMethodEvent({ flowStep: o.FlowStep.Complete }));
            }
          });
        return i
          ? (0, c.tZ)(d.HoD, { color: d.colors.midGreen00 })
          : (0, c.tZ)(
              d.Ejs,
              { gap: "16px", sx: { marginTop: "24px" } },
              (0, c.tZ)(
                d.nvN,
                { color: "ds.text.neutral.catchy", as: "h2", size: "large" },
                s("team_account_invoice_payment_seats_heading")
              ),
              r
                ? (0, c.tZ)(
                    d.T5p,
                    { gridTemplateColumns: "1fr 1fr", sx: { width: "100%" } },
                    (0, c.tZ)(
                      d.dDn,
                      { sx: { width: "300px" } },
                      (0, c.tZ)(
                        d.nvN,
                        { color: "ds.text.neutral.standard", sx: { display: "flex", alignItems: "center" } },
                        u,
                        (0, c.tZ)("span", { style: { marginLeft: "10px" } }, "••••"),
                        (0, c.tZ)("span", { "data-testid": "card-last-four", style: { marginLeft: "3px" } }, l)
                      ),
                      _
                        ? (0, c.tZ)(
                            d.nvN,
                            { color: d.colors.red00, sx: { marginTop: "8px", fontSize: 14 } },
                            s("manage_subscription_payment_section_expired_stripe")
                          )
                        : (0, c.tZ)(
                            d.nvN,
                            { color: "ds.text.neutral.standard", sx: { marginTop: "8px" } },
                            m ? s("manage_subscription_payment_section_expiration_date", { date: m }) : null
                          )
                    ),
                    (0, c.tZ)(
                      d.dDn,
                      { alignSelf: "center" },
                      (0, c.tZ)(
                        y.zx,
                        {
                          mood: "neutral",
                          intensity: "quiet",
                          icon: Kn || (Kn = (0, c.tZ)(y.JO, { name: "ActionEditOutlined" })),
                          layout: "iconLeading",
                          onClick: () => {
                            g(), a(!0);
                          },
                          disabled: e
                        },
                        t ? (0, c.tZ)(Yn.J, { b2c: !1, setPaymentLoading: a }) : s("team_account_payment_edit_credit_card")
                      )
                    )
                  )
                : (0, c.tZ)(
                    n.Fragment,
                    null,
                    (0, c.tZ)(
                      "div",
                      null,
                      (0, c.tZ)(
                        d.nvN,
                        { color: "ds.text.neutral.quiet", size: "small" },
                        s("team_account_invoice_payment_seats_save_credit_card")
                      ),
                      (0, c.tZ)(
                        d.nvN,
                        { color: "ds.text.neutral.quiet", size: "small" },
                        s("team_account_invoice_payment_seats_subscription")
                      )
                    ),
                    (0, c.tZ)(
                      "div",
                      null,
                      (0, c.tZ)(
                        y.zx,
                        {
                          mood: "neutral",
                          intensity: "quiet",
                          onClick: () => {
                            (0, j.Kz)(new o.UserAddNewPaymentMethodEvent({ flowStep: o.FlowStep.Start })), g(), a(!0);
                          }
                        },
                        t ? (0, c.tZ)(Yn.J, { b2c: !1, setPaymentLoading: a }) : s("team_account_payment_add_credit_card")
                      )
                    )
                  )
            );
      };
      var Xn = a(994495);
      const Jn = "billing--etj61dTqkE";
      var es, ts;
      const as = ({ isDisabled: e }) => {
          var t;
          const [a, s] = n.useState(!1),
            { translate: i } = (0, p.Z)(),
            o = (0, u.Y)(),
            {
              loading: l,
              billingInformation: c,
              last4DigitsFormatted: _,
              cardSvg: m,
              isExpired: g,
              expFormatted: h,
              pollUntilCardUpdate: x
            } = (0, b.C)({});
          if (o.status !== r.rq.Success || !o.data || l) return (0, y.tZ)(d.HoD, { color: d.colors.midGreen00 });
          const S = () =>
            (0, y.tZ)(
              "div",
              null,
              (0, y.tZ)(
                y.zx,
                {
                  mood: "neutral",
                  intensity: "quiet",
                  icon: es || (es = (0, y.tZ)(y.JO, { name: "ActionAddOutlined" })),
                  layout: "iconLeading",
                  onClick: () => {
                    x(), s(!0);
                  },
                  sx: { marginTop: "1em" }
                },
                a ? t || (t = (0, y.tZ)(Yn.J, { b2c: !1, setPaymentLoading: s })) : i("team_account_payment_add_credit_card")
              )
            );
          return (0, y.tZ)(
            "div",
            { style: { marginTop: "24px" } },
            (0, y.tZ)(
              y.X6,
              { color: "ds.text.neutral.catchy", as: "h2", textStyle: "ds.title.section.medium" },
              i("team_account_paymentmethod_heading")
            ),
            c?.billingType
              ? _
                ? (0, y.tZ)(
                    "div",
                    { className: "container--GmEeyXCXpH" },
                    (0, y.tZ)(
                      "div",
                      { className: un },
                      (0, y.tZ)(
                        "div",
                        { className: Jn },
                        (0, y.tZ)(
                          "div",
                          { className: Jn },
                          m,
                          (0, y.tZ)(
                            y.nv,
                            { color: "ds.text.neutral.standard" },
                            (0, y.tZ)("span", { style: { marginLeft: "10px" } }, "••••"),
                            (0, y.tZ)("span", { "data-testid": "card-last-four", style: { marginLeft: "3px" } }, _)
                          )
                        )
                      ),
                      g
                        ? (0, y.tZ)(
                            y.nv,
                            { color: "ds.text.danger.standard", sx: { marginBottom: "8px", fontSize: 14 } },
                            i("manage_subscription_payment_section_expired_stripe")
                          )
                        : (0, y.tZ)(
                            y.nv,
                            { color: "ds.text.neutral.standard", sx: { marginBottom: "8px" } },
                            h ? i("manage_subscription_payment_section_expiration_date", { date: h }) : null
                          )
                    ),
                    (0, y.tZ)(
                      "div",
                      { className: _n },
                      (0, y.tZ)(
                        y.zx,
                        {
                          mood: "neutral",
                          intensity: "quiet",
                          icon: ts || (ts = (0, y.tZ)(y.JO, { name: "ActionEditOutlined" })),
                          layout: "iconLeading",
                          onClick: () => {
                            x(), s(!0), (0, Xn.dV)(o.data);
                          },
                          disabled: e
                        },
                        a ? (0, y.tZ)(Yn.J, { b2c: !1, setPaymentLoading: s }) : i("team_account_payment_edit_credit_card")
                      )
                    )
                  )
                : (0, y.tZ)(
                    "div",
                    { sx: { margin: "16px 0 24px" } },
                    (0, y.tZ)(
                      "div",
                      null,
                      (0, y.tZ)(
                        y.nv,
                        { color: "ds.text.neutral.quiet", textStyle: "ds.body.standard.regular" },
                        i("team_account_paymentmethod_payment_method_unknow")
                      )
                    ),
                    (0, y.tZ)(S, null)
                  )
              : (0, y.tZ)(
                  "div",
                  { sx: { margin: "16px 0 24px" } },
                  (0, y.tZ)(
                    "div",
                    null,
                    (0, y.tZ)(
                      y.nv,
                      { color: "ds.text.neutral.quiet", textStyle: "ds.body.standard.regular" },
                      i("team_account_paymentmethod_no_payment_method")
                    )
                  ),
                  (0, y.tZ)(S, null)
                )
          );
        },
        ns = ({ handleGetPastReceipts: e }) => {
          const { translate: t } = (0, p.Z)();
          return (0, y.tZ)(
            d.Ejs,
            { sx: { marginTop: "16px", display: "flex", justifyContent: "center" } },
            (0, y.tZ)(
              y.zx,
              { mood: "neutral", intensity: "quiet", icon: "DownloadOutlined", layout: "iconLeading", onClick: e, sx: { width: "100%" } },
              t("team_account_teamplan_plan_download_billing_history")
            )
          );
        };
      var ss;
      const is = {
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
        os = ({ isRenewalStopped: e, onClickBuyDashlane: t, handleGetPastReceipts: a, usersToBeRenewedCount: s, discontinuedTrial: i }) => {
          const { translate: r } = (0, p.Z)(),
            l = (0, ve.o)("ecommerce_web_offerToExtend_phase1"),
            { loading: c, billingCountry: u } = S(),
            [_, m] = (0, n.useState)(!1),
            g = (0, te.C)(),
            b = (0, nn.s)(),
            h = b?.nextBillingDetails,
            { isLoading: x, expectedTaxInformation: v } = ta({ total: h?.amount });
          if (c || !g || !h) return ss || (ss = (0, y.tZ)(y.ZX, { mood: "brand" }));
          const f = g.isFreeTrial,
            E = 0 === g.daysLeftInTrial,
            Z = h.amount,
            T = h.currency,
            N = g.spaceTier === Se.lD.Team,
            D = (0, Xt.Z)(h.dateUnix),
            M = Z / 100,
            I = M && s ? M / s : 0,
            A = "US" === u ? "team_account_teamplan_plan_total_with_tax" : "team_account_teamplan_plan_total_with_vat",
            w = !x && void 0 !== v?.expectedTaxesInCents && v?.expectedTaxesInCents > 0,
            k = w && Z && v?.expectedTaxesInCents ? (Z + v.expectedTaxesInCents) / 100 : void 0;
          return (0, y.tZ)(
            n.Fragment,
            null,
            (0, y.tZ)(
              d.Ejs,
              { flexDirection: "column", gap: "12px", sx: fn.CARD_BORDER },
              f &&
                !i &&
                (0, y.tZ)(
                  d.Ejs,
                  { sx: is.WRAPPER },
                  (0, y.tZ)(
                    y.nv,
                    { textStyle: "ds.title.block.medium", color: "ds.text.neutral.quiet" },
                    r("team_account_teamplan_plan_header_trial")
                  ),
                  (0, y.tZ)(
                    d.Ejs,
                    { sx: { margin: "16px 0px" } },
                    (0, y.tZ)(
                      y.nv,
                      { color: "ds.text.neutral.standard", textStyle: "ds.specialty.spotlight.small" },
                      D ? r.shortDate(D, sa.qG.LL) : null
                    )
                  ),
                  (0, y.tZ)(
                    y.nv,
                    { color: "ds.text.neutral.catchy", textStyle: "ds.title.block.medium" },
                    D ? r("team_account_teamplan_plan_copy_trial", { expireDate: r.shortDate(D, sa.qG.MMMM_D) }) : null
                  ),
                  (0, y.tZ)(
                    "div",
                    { sx: is.BUY_DASHLANE_BUTTON },
                    (0, y.tZ)(
                      y.zx,
                      { mood: "neutral", intensity: "quiet", size: "medium", fullsize: !0, onClick: t },
                      r("team_account_teamplan_plan_buy_dashlane")
                    ),
                    !g.isGracePeriod && E && l
                      ? (0, y.tZ)(
                          y.zx,
                          {
                            mood: "brand",
                            intensity: "supershy",
                            layout: "labelOnly",
                            size: "medium",
                            fullsize: !0,
                            onClick: () => {
                              (0, j.Kz)(
                                new o.UserClickEvent({ button: o.Button.ExtendTrial, clickOrigin: o.ClickOrigin.BillingInformation })
                              ),
                                m(!0);
                            }
                          },
                          r("team_dashboard_extend_trial_button")
                        )
                      : null
                  )
                ),
              !f &&
                !i &&
                (0, y.tZ)(
                  d.Ejs,
                  { sx: is.WRAPPER },
                  (0, y.tZ)(
                    y.nv,
                    { textStyle: "ds.title.block.medium", color: "ds.text.neutral.quiet" },
                    r(e ? "team_account_teamplan_plan_expiration_header" : "team_account_teamplan_plan_header_annual")
                  ),
                  (0, y.tZ)(
                    d.Ejs,
                    { sx: { margin: "16px 0px" } },
                    (0, y.tZ)(
                      y.nv,
                      {
                        color: "ds.text.neutral.standard",
                        textStyle: "ds.specialty.spotlight.small",
                        className: "automation-tests-tac-billing"
                      },
                      r.shortDate(D, sa.qG.LL)
                    )
                  ),
                  e
                    ? (0, y.tZ)(
                        y.nv,
                        { color: "ds.text.neutral.catchy", textStyle: "ds.title.block.medium" },
                        r("team_account_teamplan_plan_expiration_description", { expireDate: r.shortDate(D, sa.qG.LL) })
                      )
                    : (0, y.tZ)(
                        y.nv,
                        { color: "ds.text.neutral.catchy", textStyle: "ds.title.block.medium" },
                        w
                          ? r(A, {
                              numSeats: s,
                              seatCost: I ? r.price(T, I, { notation: "compact" }) : null,
                              totalCost: k ? r.price(T, k) : null
                            })
                          : r("team_account_teamplan_plan_copy", {
                              numSeats: s,
                              seatCost: I ? r.price(T, I, { notation: "compact" }) : null,
                              totalCost: M ? r.price(T, M, { notation: "compact" }) : null
                            })
                      ),
                  (0, y.tZ)(ns, { handleGetPastReceipts: a })
                ),
              i &&
                (0, y.tZ)(
                  d.Ejs,
                  { sx: is.WRAPPER },
                  (0, y.tZ)(
                    y.nv,
                    { textStyle: "ds.title.block.medium", color: "ds.text.danger.standard" },
                    r("team_account_teamplan_plan_header_trial_discontinued")
                  ),
                  (0, y.tZ)(
                    d.Ejs,
                    { sx: { margin: "16px 0px" } },
                    (0, y.tZ)(
                      y.nv,
                      { color: "ds.text.danger.standard", textStyle: "ds.specialty.spotlight.small" },
                      r.shortDate(D, sa.qG.LL)
                    )
                  ),
                  (0, y.tZ)(
                    y.nv,
                    { color: "ds.text.neutral.catchy", textStyle: "ds.title.block.medium" },
                    r(
                      N
                        ? "team_account_teamplan_plan_copy_trial_team_discontinued"
                        : "team_account_teamplan_plan_copy_trial_business_discontinued"
                    )
                  ),
                  (0, y.tZ)(
                    "div",
                    { sx: is.BUY_DASHLANE_BUTTON },
                    (0, y.tZ)(
                      y.zx,
                      { mood: "neutral", intensity: "quiet", size: "medium", fullsize: !0, onClick: t },
                      r("team_account_teamplan_plan_buy_dashlane_trial_discontinued")
                    )
                  ),
                  (0, y.tZ)(ns, { handleGetPastReceipts: a })
                )
            ),
            _ ? (0, y.tZ)(C.XA, { initialDialog: C.s9.SURVEY }) : null
          );
        },
        rs = () => {
          const { translate: e } = (0, p.Z)();
          return (0, y.tZ)(
            Nn,
            null,
            (0, y.tZ)(
              y.nv,
              { color: "ds.text.neutral.quiet", textStyle: "ds.body.standard.regular" },
              e.markup("team_account_discontinued_downgrade_message_markup", {}, { linkTarget: "_blank" })
            )
          );
        };
      var ls, cs, ds, us, _s, ms;
      const ps = { backgroundColor: "ds.container.agnostic.neutral.supershy", padding: "32px", flex: "1", overflow: "visible" },
        gs = ({ lee: e, planName: t, usersToBeRenewedCount: a, handleGetPastReceipts: s, onRequestTeamUpgrade: i }) => {
          const { translate: o } = (0, p.Z)(),
            l = (0, u.Y)(),
            c = (0, fe.JS)(),
            { isTrial: _, isTeamSoftDiscontinued: m } = (0, fe.lZ)(),
            { loading: g, billingCountry: b } = S(),
            h = (0, Zn.M)(),
            x = t.caseOf({ just: () => !1, nothing: () => !0 }),
            v = (0, ve.o)(U.w.EcommerceWebSadPathDev),
            f = (0, ve.o)(U.w.EcommerceWebB2BDiscontinuationPhase1);
          if (l.status !== r.rq.Success || !l.data || c.status !== r.rq.Success || !c.data || !h || g)
            return (0, y.tZ)(d.HoD, { color: d.colors.midGreen00 });
          const C = c.data.b2bStatus?.currentTeam?.isRenewalStopped,
            E = "invoice" === l.data.planType,
            Z = !E && "US" !== b,
            T = f && _ && m;
          return (0, y.tZ)(
            d.Ejs,
            { flexDirection: "column" },
            (0, y.tZ)(
              y.X6,
              { textStyle: "ds.title.section.large", as: "h1", color: "ds.text.neutral.standard", sx: { mb: "32px" } },
              o("team_account_heading_billing_information")
            ),
            (0, y.tZ)(
              d.Ejs,
              { gap: "24px" },
              (0, y.tZ)(
                d.Ejs,
                { flexDirection: "column", sx: { maxWidth: "40em" } },
                (0, y.tZ)(
                  d.Ejs,
                  { sx: (0, y.jM)([fn.CARD_BORDER, ps]), flexDirection: "column" },
                  (0, y.tZ)($n, { lee: e }),
                  ls || (ls = (0, y.tZ)(Ht, null)),
                  E
                    ? (0, y.tZ)(
                        n.Fragment,
                        null,
                        cs || (cs = (0, y.tZ)(Hn, null)),
                        ds || (ds = (0, y.tZ)(Ht, null)),
                        (0, y.tZ)(Qn, { isDisabled: x })
                      )
                    : (0, y.tZ)(as, { isDisabled: x }),
                  Z
                    ? (0, y.tZ)(
                        n.Fragment,
                        null,
                        (0, y.tZ)("div", { sx: { marginBottom: "16px" } }),
                        us || (us = (0, y.tZ)(Ht, null)),
                        _s || (_s = (0, y.tZ)(qa, { isInAccountSummary: !0 }))
                      )
                    : null
                ),
                T ? ms || (ms = (0, y.tZ)(rs, null)) : v ? (0, y.tZ)(jn, { status: h }) : null
              ),
              (0, y.tZ)(
                d.k$b,
                { sx: { maxWidth: "416px" } },
                (0, y.tZ)(os, {
                  onClickBuyDashlane: i,
                  handleGetPastReceipts: s,
                  usersToBeRenewedCount: a,
                  isRenewalStopped: C,
                  discontinuedTrial: !!T
                })
              )
            )
          );
        };
      var ys = a(342868);
      const bs = ({ isOpen: e, lee: t, onClose: a }) => {
        const s = (0, n.useRef)(),
          i = (0, n.useRef)(),
          o = (0, n.useRef)(),
          r = (0, n.useRef)(),
          { translate: l } = (0, p.Z)(),
          { reportTACError: c } = $(),
          [u, _] = (0, n.useState)(void 0),
          [m, g] = (0, n.useState)(!1);
        (0, n.useEffect)(() => {
          const e = (0, sn.v0)(t.globalState);
          e
            ? new rn.Z()
                .status({ auth: e })
                .then((e) => {
                  _(e.content.team.info.name);
                })
                .catch(c)
            : c(new Error(en.N));
        }, []);
        const b = () => {
            g(!1), a();
          },
          h = () => {
            const e = (0, sn.v0)(t.globalState);
            if (e)
              if (s.current?.value) {
                b();
                try {
                  (0, z.Yo)(
                    "https://ws1.dashlane.com/1/invoiceGeneration/generateTeamReceipt.pdf?" +
                      ((e) => {
                        const t = {
                          ...e,
                          recipient: s.current?.value,
                          company: i.current?.value,
                          address: o.current?.value,
                          vatNumber: r.current?.value
                        };
                        return ys.stringify(t);
                      })(e)
                  );
                } catch (e) {
                  c(e);
                }
              } else g(!0);
            else c(new Error(en.N));
          },
          x = m ? { feedbackText: l("team_account_past_receipts_dialog_recipient_is_required"), feedbackType: "error" } : {};
        return (0, y.tZ)(
          G.o,
          {
            title: l("team_account_past_receipts_dialog_title"),
            showCloseIcon: !0,
            isOpen: e,
            onRequestClose: b,
            footer: (0, y.tZ)(d.cNS, {
              primaryButtonTitle: l("team_account_past_receipts_dialog_button_generate"),
              primaryButtonOnClick: h
            })
          },
          (0, y.tZ)(
            d.T5p,
            { as: "form", onSubmit: h, gap: "1em" },
            (0, y.tZ)(d.oil, {
              fullWidth: !0,
              label: l("team_account_past_receipts_dialog_recipient") + " *",
              placeholder: l("team_account_past_receipts_dialog_recipient_hint"),
              onKeyDown: () => {
                m && "" !== s.current?.value && g(!1);
              },
              ref: s,
              ...x
            }),
            (0, y.tZ)(d.oil, {
              fullWidth: !0,
              label: l("team_account_past_receipts_dialog_company"),
              defaultValue: null != u ? u : "",
              placeholder: l("team_account_past_receipts_dialog_company_hint"),
              ref: i
            }),
            (0, y.tZ)(d.oil, {
              fullWidth: !0,
              label: l("team_account_past_receipts_dialog_billing_address"),
              placeholder: l("team_account_past_receipts_dialog_billing_address_hint"),
              ref: o
            }),
            (0, y.tZ)(d.oil, {
              fullWidth: !0,
              label: l("team_account_past_receipts_dialog_vat"),
              placeholder: l("team_account_past_receipts_dialog_vat_hint"),
              ref: r
            })
          )
        );
      };
      var hs, xs, Ss, vs, fs, Cs, Es;
      const Zs = { marginTop: "16px", "&:hover": { cursor: "pointer", borderWidth: "2px", borderColor: "ds.border.brand.standard.hover" } },
        Ts = { width: "100%", padding: "20px 16px" },
        Ns = { padding: "8px", backgroundColor: "ds.container.expressive.brand.quiet.idle", borderRadius: "8px", margin: "auto" },
        Ds = ({ cardTitle: e, cardDescription: t }) =>
          (0, c.tZ)(
            n.Fragment,
            null,
            hs ||
              (hs = (0, c.tZ)(
                d.dDn,
                { sx: Ns },
                (0, c.tZ)(y.JO, { name: "ItemPaymentOutlined", size: "large", color: "ds.text.brand.standard" })
              )),
            (0, c.tZ)(
              d.dDn,
              null,
              (0, c.tZ)(d.nvN, { color: "ds.text.neutral.standard", bold: !0 }, e),
              (0, c.tZ)(d.nvN, { color: "ds.text.neutral.quiet", size: "small", sx: { marginTop: "4px" } }, t)
            )
          ),
        Ms = ({ handleClose: e, openUpgradeDialog: t }) => {
          const [a, s] = (0, n.useState)(!1),
            [i, o] = (0, n.useState)(!1),
            { translate: r } = (0, p.Z)(),
            { loading: l, hasCreditCardPaymentMethod: u, isExpired: _, pollUntilCardUpdate: m } = (0, b.C)({ handleCardUpdate: t });
          if (l) return (0, c.tZ)(d.HoD, { color: d.colors.midGreen00 });
          const h = u
              ? {
                  cardTitle: "team_payment_method_dialog_another_credit_card",
                  cardDescription: "team_payment_method_dialog_replace_credit_card"
                }
              : { cardTitle: "team_payment_method_dialog_credit_card", cardDescription: "team_payment_method_dialog_secondary_payment" },
            x = u ? Yn.A.REPLACE : Yn.A.ADD;
          return (0, c.tZ)(
            d.VqE,
            { isOpen: !0, closeIconName: r("_common_dialog_dismiss_button"), onClose: e, ariaDescribedby: "dialogContent" },
            (0, c.tZ)(d.j49, { color: "ds.text.neutral.quiet", sx: { marginBottom: "16px" } }, r("team_payment_method_dialog_buy_seats")),
            (0, c.tZ)(d.$N8, { title: r("team_payment_method_dialog_title") }),
            (0, c.tZ)(
              d.a7O,
              null,
              u &&
                (0, c.tZ)(
                  d.Zbd,
                  {
                    sx: Zs,
                    onClick: () => {
                      _ ? (m(), o(!0)) : t();
                    }
                  },
                  (0, c.tZ)(
                    d.T5p,
                    { gap: "12px", gridTemplateColumns: "1fr 60px", sx: { width: "100%", padding: "0 16px" } },
                    xs ||
                      (xs = (0, c.tZ)(
                        d.dDn,
                        null,
                        (0, c.tZ)(g.I, { b2b: !0, hideTitle: !0, hideUpdateButton: !0, displayModifiedCreditCardView: !0 })
                      )),
                    (0, c.tZ)(
                      d.dDn,
                      { sx: { margin: "auto" } },
                      _
                        ? (0, c.tZ)(
                            y.zx,
                            { mood: "brand", intensity: "supershy", size: "large" },
                            i
                              ? (0, c.tZ)(Yn.J, { b2c: !1, setPaymentLoading: o, mode: Yn.A.UPDATE })
                              : Ss ||
                                  (Ss = (0, c.tZ)(y.JO, { name: "ArrowRightOutlined", size: "medium", color: "ds.text.neutral.standard" }))
                          )
                        : vs ||
                            (vs = (0, c.tZ)(y.zx, {
                              mood: "brand",
                              intensity: "supershy",
                              size: "large",
                              layout: "iconOnly",
                              icon: (0, c.tZ)(y.JO, { name: "ArrowRightOutlined", size: "medium", color: "ds.text.neutral.standard" })
                            }))
                    )
                  )
                ),
              (0, c.tZ)(
                d.Zbd,
                {
                  sx: Zs,
                  onClick: () => {
                    m(), s(!0);
                  }
                },
                (0, c.tZ)(
                  d.T5p,
                  { gap: "12px", gridTemplateColumns: "40px 1fr 60px", sx: Ts },
                  (0, c.tZ)(Ds, { cardTitle: r(h.cardTitle), cardDescription: r(h.cardDescription) }),
                  (0, c.tZ)(
                    d.dDn,
                    { sx: { margin: "auto" } },
                    (0, c.tZ)(
                      y.zx,
                      { mood: "brand", intensity: "supershy", size: "large" },
                      a
                        ? (0, c.tZ)(Yn.J, { b2c: !1, setPaymentLoading: s, mode: x })
                        : fs || (fs = (0, c.tZ)(y.JO, { name: "ArrowRightOutlined", size: "medium", color: "ds.text.neutral.standard" }))
                    )
                  )
                )
              ),
              (0, c.tZ)(
                d.Zbd,
                {
                  sx: Zs,
                  onClick: () => {
                    (0, z.Yo)(oe.i1);
                  }
                },
                (0, c.tZ)(
                  d.T5p,
                  { gap: "12px", gridTemplateColumns: "40px 1fr 60px", sx: Ts },
                  Cs ||
                    (Cs = (0, c.tZ)(
                      d.dDn,
                      { sx: Ns },
                      (0, c.tZ)(y.JO, { name: "ItemTaxNumberOutlined", size: "large", color: "ds.text.brand.standard" })
                    )),
                  (0, c.tZ)(
                    d.dDn,
                    null,
                    (0, c.tZ)(d.nvN, { color: "ds.text.neutral.standard", bold: !0 }, r("team_account_invoice_payment")),
                    (0, c.tZ)(
                      d.nvN,
                      { color: "ds.text.neutral.quiet", size: "small", sx: { marginTop: "4px" } },
                      r("team_payment_method_dialog_support_team")
                    )
                  ),
                  (0, c.tZ)(
                    d.dDn,
                    { sx: { margin: "auto" } },
                    Es ||
                      (Es = (0, c.tZ)(y.zx, {
                        mood: "brand",
                        intensity: "supershy",
                        size: "large",
                        layout: "iconOnly",
                        icon: (0, c.tZ)(y.JO, { name: "ArrowRightOutlined", size: "medium", color: "ds.text.neutral.standard" })
                      }))
                  )
                )
              )
            )
          );
        },
        Is = 54999,
        As = "sales@dashlane.com",
        ws = "leeloo_teamplan_starter",
        ks = "leeloo_teamplan_business",
        Os = "leeloo_teamplan_team",
        Ls = (e) => e > Is,
        zs = (e) => {
          (0, j.Kz)(
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
      var Rs = a(583988);
      const js = ({ isComputing: e, className: t, price: a }) => {
          const n = e ? (0, y.tZ)(Rs.Z, { size: 16, containerStyle: { display: "inline-block", position: "relative" } }) : a;
          return (0, y.tZ)("span", { className: t }, n);
        },
        Ps = ({ billingDetails: e, additionalSeatsDetails: t }) => {
          var a, n;
          const { translate: s } = (0, p.Z)(),
            i = e.additionalSeats.seatsCount,
            o = null != (a = e.additionalSeats.taxes) ? a : 0,
            r = s.price(e.currency, o / 100),
            l = o > 0,
            c = e.renewal.value + (null != (n = e.renewal.taxes) ? n : 0),
            d = s.price(e.currency, c / 100),
            u = 100 * t.reduce((e, t) => e + t.costPerSeat * t.numberOfSeats, 0),
            _ = s.price(e.currency, u / 100),
            m = u - e.additionalSeats.value,
            g = u + o - m;
          return {
            additionalSeatsCount: i,
            additionalSeatsTaxesTranslation: r,
            hasTax: l,
            renewalTotalPrice: d,
            tierPriceTranslation: _,
            proratedDiscountTranslation: s.price(e.currency, m / 100),
            hasProratedDiscount: m > 0,
            dueTodayTranslation: s.price(e.currency, g / 100)
          };
        };
      var Us, Bs, Gs, Fs, qs;
      const Vs = { display: "flex", margin: "24px 0", color: "ds.text.neutral.standard" },
        $s = ({ label: e, labelSx: t, value: a }) =>
          (0, y.tZ)(
            d.Ejs,
            { sx: Vs },
            e ? (0, y.tZ)(d.k$b, { flex: "1", sx: { ...t } }, e) : null,
            a ? (0, y.tZ)(d.k$b, { flex: "0" }, a) : null
          ),
        Ws = ({
          nextBillingDate: e,
          billingDetails: t,
          dueNowTranslation: a,
          seatCountLabel: s,
          totalSeatCount: i,
          onAdditionalSeatCountChange: o,
          isComputingBilling: r,
          additionalSeatsDetails: l,
          planType: c
        }) => {
          const { translate: u } = (0, p.Z)(),
            {
              additionalSeatsCount: _,
              additionalSeatsTaxesTranslation: m,
              hasTax: h,
              renewalTotalPrice: x,
              tierPriceTranslation: v,
              proratedDiscountTranslation: f,
              hasProratedDiscount: C
            } = Ps({ billingDetails: t, additionalSeatsDetails: l }),
            { pollUntilCardUpdate: E } = (0, b.C)({}),
            { loading: Z, billingCountry: T } = S(),
            [N, D] = (0, n.useState)(!1);
          if (Z) return (0, y.tZ)(d.HoD, { color: d.colors.midGreen00 });
          const M = "US" === T ? "team_account_teamplan_upgrade_tax" : "team_account_teamplan_vat",
            I =
              "invoice" === c
                ? "team_account_teamplan_upgrade_invoice_renewal_price"
                : h
                ? "US" === T
                  ? "team_account_teamplan_upgrade_renewal_tax_price"
                  : "team_account_teamplan_upgrade_renewal_vat_price"
                : "team_account_teamplan_upgrade_renewal_price";
          return (0, y.tZ)(
            n.Fragment,
            null,
            (0, y.tZ)(
              d.Ejs,
              { sx: { padding: "28px 0", fontSize: 4, fontWeight: "bold", color: "ds.text.neutral.catchy" } },
              (0, y.tZ)(Wt.w, { inputWidth: "66px", label: s, id: "numberOfSeats", defaultValue: 1, minValue: 1, onChange: o })
            ),
            Us || (Us = (0, y.tZ)(Ht, null)),
            (0, y.tZ)($s, { label: u("team_account_teamplan_upgrade_premium_number_of_seats"), value: i }),
            (0, y.tZ)($s, { label: u("team_account_teamplan_upgrade_new_seat", { count: _ }), value: v }),
            h && (0, y.tZ)($s, { label: u(M), value: m }),
            C &&
              (0, y.tZ)($s, {
                label: (0, y.tZ)(
                  n.Fragment,
                  null,
                  (0, y.tZ)(d.nvN, null, u("team_account_teamplan_changeplan_order_summary_prorated_discount")),
                  (0, y.tZ)(
                    d.ua7,
                    { content: u("team_account_teamplan_changeplan_order_summary_prorated_discount_tooltip") },
                    (0, y.tZ)(d.uMt, { size: 16, color: d.colors.grey00 })
                  )
                ),
                labelSx: { display: "flex", alignItems: "center" },
                value: f
              }),
            (0, y.tZ)(
              n.Fragment,
              null,
              Bs || (Bs = (0, y.tZ)(Ht, null)),
              (0, y.tZ)(d.nvN, { sx: { marginTop: "24px", fontSize: "18px" } }, u("team_payment_method_dialog_credit_card")),
              (0, y.tZ)(
                d.Ejs,
                {
                  sx: { ...Vs, borderWidth: "1px", borderStyle: "solid", borderColor: "ds.border.neutral.quiet.idle", borderRadius: "4px" }
                },
                (0, y.tZ)(
                  d.k$b,
                  { flex: "1", sx: { paddingLeft: "16px" } },
                  Gs || (Gs = (0, y.tZ)(g.I, { b2b: !0, hideTitle: !0, hideUpdateButton: !0, displayModifiedCreditCardView: !0 }))
                ),
                (0, y.tZ)(
                  d.k$b,
                  { flex: "0", sx: { margin: "auto 0", paddingRight: "12px" } },
                  (0, y.tZ)(
                    y.zx,
                    {
                      icon: Fs || (Fs = (0, y.tZ)(y.JO, { name: "ActionEditOutlined" })),
                      layout: "iconLeading",
                      intensity: "supershy",
                      onClick: () => {
                        E(), D(!0);
                      }
                    },
                    N ? (0, y.tZ)(Yn.J, { b2c: !1, setPaymentLoading: D, mode: Yn.A.UPDATE }) : u("team_account_name_edit_label")
                  )
                )
              )
            ),
            (0, y.tZ)(d.Ejs, { sx: Vs }, (0, y.tZ)(y.ke, { title: u(I, { totalPrice: x, totalSeat: i, date: u.shortDate(e, sa._T.LL) }) })),
            qs || (qs = (0, y.tZ)(Ht, null)),
            (0, y.tZ)(
              d.Ejs,
              { sx: { display: "flex", marginTop: "24px", fontSize: 4 } },
              (0, y.tZ)(d.k$b, { flex: "1" }, u("team_account_teamplan_upgrade_due_now")),
              (0, y.tZ)(js, { isComputing: r, price: a, className: "totalAmount--BaEFEdvow1" })
            )
          );
        },
        Hs = (e, t) => t.startMembers - e.startMembers,
        Ks = (e, t, a) => {
          if (!a) return [];
          const n = a.slice(0).sort(Hs);
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
        Ys = (0, n.forwardRef)(function (
          {
            nextBillingDetails: e,
            billingDetails: t,
            isComputingBilling: a,
            onSeatCountChange: s,
            numberOfCurrentPaidSlots: i,
            numberOfCurrentUsedSlots: o,
            currentPlanPriceRanges: l
          },
          c
        ) {
          var d;
          const [_, m] = (0, n.useState)(1),
            [g, b] = (0, n.useState)(!1),
            { translate: h } = (0, p.Z)(),
            x = (0, u.Y)();
          (0, n.useImperativeHandle)(c, () => ({ additionalSeatCount: _ }));
          const S = i + _,
            v = (0, Xt.Z)(e.dateUnix),
            f = Ks(i, t.renewal.seatsCount, l),
            C = null != (d = t.additionalSeats.taxes) ? d : 0,
            E = t.additionalSeats.value + C,
            Z = g ? "-" : h.price(t.currency, E / 100),
            T = h("team_account_teamplan_upgrade_premium_number_of_additional_seats"),
            N = g
              ? h("team_account_teamplan_upgrade_premium_buy_more_seats_than_cap", { seatCap: Is, salesEmail: As })
              : _ < 1
              ? h("team_account_teamplan_upgrade_premium_buy_more_seats_when_premium", { count: 1 })
              : o > S
              ? h("team_account_teamplan_upgrade_premium_below_used_seat_count", { usedSeatCount: o })
              : null,
            D = x.status === r.rq.Success ? x.data.planType : "";
          return (0, y.tZ)(
            n.Fragment,
            null,
            N ? (0, y.tZ)(y.ke, { className: "errorToaster--MU18Q0SFxy", title: N, mood: "danger" }) : null,
            (0, y.tZ)(Ws, {
              nextBillingDate: v,
              billingDetails: t,
              dueNowTranslation: Z,
              seatCountLabel: T,
              totalSeatCount: S,
              onAdditionalSeatCountChange: (e) => {
                const t = e < 0,
                  a = e > Is;
                b(a), m(e), a || t || s(e);
              },
              isComputingBilling: a,
              additionalSeatsDetails: f,
              planType: D
            })
          );
        }),
        Qs = Ys,
        Xs = () => {
          const { translate: e } = (0, p.Z)();
          return (0, y.tZ)(
            d.u_l,
            { isOpen: !0, onClose: () => {} },
            (0, y.tZ)(
              d.Ejs,
              {
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "center",
                sx: { width: "100vw", height: "100vh", backgroundColor: d.colors.dashGreen06 }
              },
              (0, y.tZ)(d.HoD, { size: "88px", color: d.colors.dashGreen00 }),
              (0, y.tZ)(
                d.Ejs,
                { alignItems: "center", flexDirection: "column", justifyContent: "center", gap: "6px", sx: { paddingTop: "22px" } },
                (0, y.tZ)(d.nvN, { size: "medium", color: d.colors.grey00 }, e("team_account_addseats_processing_copy_line_1")),
                (0, y.tZ)(d.nvN, { size: "medium", color: d.colors.grey00 }, e("team_account_addseats_processing_copy_line_2"))
              )
            )
          );
        },
        Js = (e) => {
          const { reportTACError: t } = $(),
            [a, s] = (0, n.useState)({
              renewal: { seatsCount: 0, value: 0, taxes: 0 },
              additionalSeats: { seatsCount: 0, value: 0, taxes: 0 },
              currency: "usd"
            }),
            [i, o] = (0, n.useState)(!1),
            [r, l] = (0, n.useState)(0),
            [c, d] = (0, n.useState)(0),
            u = (0, v.debounce)((a) => {
              (async (a) => {
                try {
                  var n;
                  const t = await ea.C.computePlanPricing({ seats: a });
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
                  const a = new Error((0, tn.i)(e));
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
      var ei;
      const ti = ({
        lee: e,
        onUpgradeSuccess: t,
        nextBillingDetails: a,
        numberOfCurrentPaidSlots: s,
        numberOfCurrentUsedSlots: i,
        onRequestClose: r,
        planTier: l
      }) => {
        const c = (0, n.useRef)(null),
          [d, u] = (0, n.useState)(!0),
          [_, m] = (0, n.useState)(!1),
          [g, b] = (0, n.useState)(),
          { translate: h } = (0, p.Z)(),
          { reportTACError: x } = $(),
          S = (0, n.useCallback)(() => Ja.Maybe.maybe(c.current).caseOf({ just: (e) => e.additionalSeatCount, nothing: () => 1 }), []),
          { billingDetails: v, isComputingBilling: f, onSeatCountChange: C } = Js(S),
          E = (function (e, t) {
            switch (e) {
              case Se.lD.Starter:
                return t(ws);
              case Se.lD.Team:
                return t(Os);
              case Se.lD.Business:
                return t(ks);
              default:
                throw new Error("Cannot retrieve default key");
            }
          })(l, h);
        (0, n.useEffect)(() => {
          (0, j.Nc)(o.PageView.TacAccountBuy),
            (async () => {
              const t = (0, sn.v0)(e.globalState);
              if (t)
                try {
                  const { planDetails: e } = await (async (e) => {
                    const t = await new rn.Z().status({ auth: e }),
                      { planDetails: a } = t.content.team;
                    return { planDetails: a };
                  })(t);
                  b(e.priceRanges);
                } catch (e) {
                  const t = new Error((0, tn.i)(e));
                  x(t);
                }
              else x(new Error(en.N));
            })();
        }, []),
          (0, n.useEffect)(() => {
            C(S());
          }, [S]);
        const Z = Ks(s, v.renewal.seatsCount, g),
          T = (0, y.tZ)(
            "div",
            { style: { display: "flex", flexDirection: "row", justifyContent: "flex-end", maxWidth: "100%" } },
            (0, y.tZ)(
              y.zx,
              { intensity: "quiet", mood: "neutral", size: "medium", onClick: r, sx: { marginRight: "8px" } },
              h("team_account_teamplan_upgrade_premium_cancel")
            ),
            (0, y.tZ)(
              y.zx,
              {
                size: "medium",
                onClick: async () => {
                  u(!1), m(!0);
                  try {
                    (await ea.C.addSeats({ seats: S() })).success
                      ? (((e) => {
                          (0, j.Kz)(
                            new o.UserBuySeatEvent({
                              flowStep: o.FlowStep.Complete,
                              hasPromo: !1,
                              initialSeatCount: e.renewal.seatsCount,
                              priceAmountCents: e.additionalSeats.value,
                              priceCurrencyCode: o.PriceCurrencyCode[e.currency],
                              purchasedSeatCount: e.additionalSeats.seatsCount
                            })
                          );
                        })(v),
                        t(Z, v))
                      : zs(v);
                  } catch {
                    zs(v);
                  }
                }
              },
              h("team_account_teamplan_upgrade_buy_seat", { count: S() })
            )
          );
        return (0, y.tZ)(
          n.Fragment,
          null,
          _ ? ei || (ei = (0, y.tZ)(Xs, null)) : null,
          d
            ? (0, y.tZ)(
                G.o,
                {
                  showCloseIcon: !0,
                  footer: T,
                  title: h("team_account_teamplan_upgrade_add_seats_title", { plan: E }),
                  isOpen: !0,
                  onRequestClose: r
                },
                (0, y.tZ)(Qs, {
                  ref: c,
                  nextBillingDetails: a,
                  billingDetails: v,
                  isComputingBilling: f,
                  onSeatCountChange: C,
                  numberOfCurrentPaidSlots: s,
                  numberOfCurrentUsedSlots: i,
                  currentPlanPriceRanges: g
                })
              )
            : null
        );
      };
      var ai;
      const ni = ({ label: e, value: t, ...a }) =>
          (0, y.tZ)(
            d.Ejs,
            { justifyContent: "flex-end", sx: { display: "flex", justifyContent: "flexEnd" }, ...a },
            e ? (0, y.tZ)(d.k$b, { flex: "1", sx: { display: "flex", alignItems: "center" } }, e) : null,
            t ? (0, y.tZ)(d.k$b, { sx: { display: "flex", alignItems: "center" } }, t) : null
          ),
        si = ({ billingDetails: e, additionalSeatsDetails: t }) => {
          const { translate: a } = (0, p.Z)(),
            {
              additionalSeatsCount: n,
              additionalSeatsTaxesTranslation: s,
              hasTax: i,
              tierPriceTranslation: o,
              proratedDiscountTranslation: r,
              hasProratedDiscount: l,
              dueTodayTranslation: c
            } = Ps({ billingDetails: e, additionalSeatsDetails: t });
          return (0, y.tZ)(
            d.Ejs,
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
            (0, y.tZ)(ni, {
              alignItems: "end",
              label: (0, y.tZ)(d.X6q, { size: "small" }, a("team_account_addseats_success_order_summary_header")),
              value: (0, y.tZ)(d.nvN, { color: "ds.text.neutral.quiet" }, (0, wa.Z)(new Date(), "MM/dd/yyyy"))
            }),
            (0, y.tZ)(
              d.Ejs,
              { flexDirection: "column", gap: "16px" },
              (0, y.tZ)(ni, {
                label: (0, y.tZ)(
                  d.nvN,
                  { size: "small", color: "ds.text.neutral.catchy" },
                  a("team_account_teamplan_upgrade_new_seat", { count: n })
                ),
                value: (0, y.tZ)(d.nvN, { size: "small", color: "ds.text.neutral.catchy" }, o)
              }),
              i
                ? (0, y.tZ)(ni, {
                    label: (0, y.tZ)(
                      d.nvN,
                      { size: "small", color: "ds.text.neutral.catchy" },
                      a("team_account_addseats_success_order_summary_tax")
                    ),
                    value: (0, y.tZ)(d.nvN, { size: "small", color: "ds.text.neutral.catchy" }, s)
                  })
                : null,
              l
                ? (0, y.tZ)(ni, {
                    label: (0, y.tZ)(
                      d.Ejs,
                      { alignItems: "center", gap: "5px" },
                      (0, y.tZ)(
                        d.nvN,
                        { size: "small", color: "ds.text.neutral.catchy" },
                        a("team_account_addseats_success_order_summary_prorated_discount")
                      ),
                      (0, y.tZ)(
                        d.ua7,
                        { content: a("team_account_addseats_success_order_summary_prorated_discount_tooltip") },
                        ai || (ai = (0, y.tZ)(d.uMt, { size: 16, color: "ds.text.neutral.catchy" }))
                      )
                    ),
                    value: (0, y.tZ)(d.nvN, { size: "small", color: "ds.text.neutral.catchy" }, r)
                  })
                : null,
              (0, y.tZ)("div", {
                style: {
                  width: "100%",
                  borderColor: y.O9.lightTheme.ds.border.neutral.quiet.idle,
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderBottom: "0",
                  margin: "0"
                }
              }),
              (0, y.tZ)(ni, {
                label: (0, y.tZ)(
                  d.nvN,
                  { size: "large", bold: !0, color: "ds.text.neutral.catchy" },
                  a("team_account_addseats_success_order_summary_total")
                ),
                value: (0, y.tZ)(d.nvN, { size: "large", bold: !0, color: "ds.text.neutral.catchy" }, c)
              })
            )
          );
        },
        ii = ({ isBusiness: e, additionalSeats: t, onGetPastReceipts: a }) => {
          const { routes: n } = (0, i.Xo)(),
            { translate: s } = (0, p.Z)();
          return (0, y.tZ)(
            d.Ejs,
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
            (0, y.tZ)(
              d.Ejs,
              { flexDirection: "column", gap: "8px" },
              e
                ? (0, y.tZ)(d.X6q, { size: "small" }, s("team_account_addseats_success_newseats_header_business", { count: t }))
                : (0, y.tZ)(d.X6q, { size: "small" }, s("team_account_addseats_success_newseats_header_team", { count: t })),
              (0, y.tZ)(d.nvN, { color: "ds.text.neutral.quiet" }, s("team_account_addseats_success_newseats_body"))
            ),
            (0, y.tZ)(
              d.Ejs,
              { gap: "8px" },
              (0, y.tZ)(
                i.rU,
                { to: n.teamMembersRoutePath },
                (0, y.tZ)(
                  y.zx,
                  {
                    onClick: () => {
                      (0, j.Kz)(
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
              (0, y.tZ)(
                y.zx,
                { mood: "neutral", intensity: "quiet", onClick: a },
                s("team_account_addseats_success_newseats_billing_history_cta")
              )
            )
          );
        };
      var oi;
      const ri = () => {
        const { translate: e } = (0, p.Z)();
        return (0, y.tZ)(
          d.Ejs,
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
          (0, y.tZ)(
            d.Ejs,
            {
              sx: {
                padding: "10px 8px",
                width: "40px",
                height: "40px",
                borderRadius: "8px",
                backgroundColor: "ds.container.expressive.brand.quiet.idle"
              }
            },
            oi || (oi = (0, y.tZ)(y.JO, { name: "GroupOutlined", color: "ds.text.neutral.standard" }))
          ),
          (0, y.tZ)(
            d.Ejs,
            { flexDirection: "column", gap: "16px", sx: { flexGrow: "1" } },
            (0, y.tZ)(
              d.Ejs,
              { flexDirection: "column", gap: "8px" },
              (0, y.tZ)(
                d.nvN,
                { size: "large", bold: !0, color: "ds.text.neutral.catchy" },
                e("team_account_addseats_success_friends_family_header")
              ),
              (0, y.tZ)(d.nvN, { size: "small", color: "ds.text.neutral.quiet" }, e("team_account_addseats_success_friends_family_body"))
            ),
            (0, y.tZ)(
              "a",
              {
                href: "https://support.dashlane.com/hc/articles/360013369820-Dashlane-Friends-Family-plan",
                target: "_blank",
                rel: "noopener noreferrer"
              },
              (0, y.tZ)(y.zx, { mood: "neutral", intensity: "quiet" }, e("team_account_addseats_success_friends_family_learn_more_cta"))
            )
          )
        );
      };
      var li, ci, di;
      const ui = ({ planTier: e, lastBillingDetails: t, lastAdditionalSeatsDetails: a, onGetPastReceipts: s, onNavigateBack: i }) => {
        const { translate: o } = (0, p.Z)(),
          [r, l] = (0, n.useState)(a),
          [c, u] = (0, n.useState)(t),
          { additionalSeatsCount: _ } = Ps({ billingDetails: c, additionalSeatsDetails: r }),
          m = (0, y.tZ)(
            "div",
            null,
            (0, y.tZ)(
              d.zxk,
              { type: "button", nature: "ghost", onClick: i },
              (0, y.tZ)(
                d.Ejs,
                { alignItems: "center" },
                li || (li = (0, y.tZ)(d.xCe, { size: 14 })),
                (0, y.tZ)(
                  d.nvN,
                  { bold: !0, sx: { marginLeft: "14px", color: "ds.text.neutral.standard" } },
                  o("team_account_teamplan_changeplan_back")
                )
              )
            )
          ),
          g = e === Se.lD.Business,
          { setNavBarChildren: b } = (0, n.useContext)(Nt);
        return (
          (0, n.useEffect)(
            () => (
              b(m),
              () => {
                b(null), i();
              }
            ),
            []
          ),
          (0, n.useEffect)(() => {
            u(t), l(a);
          }, [t, a]),
          (0, y.tZ)(
            d.Ejs,
            { flexDirection: "column", gap: "32px", sx: { padding: "32px", flexWrap: "nowrap" } },
            (0, y.tZ)(
              d.Ejs,
              { gap: "16px", sx: { flexWrap: "nowrap" } },
              (0, y.tZ)(
                d.Ejs,
                { flexDirection: "column", gap: "16px", sx: { flexGrow: "2", maxWidth: "632px" } },
                (0, y.tZ)(ii, { onGetPastReceipts: s, isBusiness: g, additionalSeats: _ }),
                g ? ci || (ci = (0, y.tZ)(ri, null)) : null
              ),
              (0, y.tZ)(
                d.Ejs,
                { flexDirection: "column", gap: "16px", sx: { flexGrow: "1" } },
                (0, y.tZ)(si, { billingDetails: c, additionalSeatsDetails: r }),
                di || (di = (0, y.tZ)(h, null))
              )
            )
          )
        );
      };
      var _i = a(602013),
        mi = a(60043);
      let pi = (function (e) {
        return (
          (e[(e.TAB_SCIM = 0)] = "TAB_SCIM"),
          (e[(e.TAB_ACTIVE_DIRECTORY = 1)] = "TAB_ACTIVE_DIRECTORY"),
          (e[(e.TAB_AUTHENTICATION = 2)] = "TAB_AUTHENTICATION"),
          e
        );
      })({});
      const gi = { width: "auto", whiteSpace: "nowrap", color: "ds.text.neutral.standard" },
        yi = (e, t) => [e.url, ...(e.subPaths ? e.subPaths.map((t) => `${e.url}${t}`) : [])].includes(t),
        bi = { TITLE: { display: "flex", alignItems: "center", gap: "12px", marginBottom: "32px" } },
        hi = n.memo(({ title: e, titleBadge: t, subtitle: a, tabs: n = [], extraInfo: s }) => {
          const { pathname: o } = (0, i.TH)();
          return e || n.length
            ? (0, y.tZ)(
                "nav",
                { className: "tabMenuContainer--y2MfbHSdck" },
                e
                  ? (0, y.tZ)(
                      y.X6,
                      { as: "h1", textStyle: "ds.title.section.large", color: "ds.text.neutral.catchy" },
                      (0, y.tZ)("span", { sx: bi.TITLE }, e, t)
                    )
                  : null,
                a
                  ? (0, y.tZ)(
                      y.nv,
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
                  ? (0, y.tZ)(
                      d.G8v,
                      null,
                      n.map((e) =>
                        (0, y.tZ)(d.h2L, {
                          key: e.label,
                          label: e.label,
                          notification: e.notifications,
                          selected: yi(e, o),
                          sx: (0, y.jM)([
                            gi,
                            e.isDisabled ? { pointerEvents: "none", color: "ds.text.oddity.disabled" } : {},
                            yi(e, o) ? { backgroundColor: "ds.container.expressive.neutral.supershy.active" } : {}
                          ]),
                          as: (t) => (0, y.tZ)(i.OL, { to: e.url, ...t })
                        })
                      )
                    )
                  : null
              )
            : null;
        }),
        xi = (0, n.memo)(({ title: e }) => {
          const { translate: t } = (0, p.Z)(),
            { routes: a } = (0, mi.Xo)(),
            n = (0, r.qr)(
              { queryConfig: { query: ea.C.getAccountRecoveryRequestCount }, liveConfig: { live: ea.C.liveAccountRecoveryRequestCount } },
              []
            ),
            s = (0, Pe.h)(),
            i = n.status === r.rq.Success && n.data,
            o = t.markup("team_activity_header_subtitle_markup", {}, { linkTarget: "_blank" });
          return (0, c.tZ)(hi, {
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
        Si = { CONTENT: { display: "flex", flexDirection: "column", padding: "0 48px" } },
        vi = ({ header: e, children: t }) =>
          (0, y.tZ)(
            "div",
            { className: "consolePage--HtrkOKa6CF" },
            (0, y.tZ)("div", { className: "consolePageHeader--XGguZ6asj0" }, e),
            (0, y.tZ)("div", { sx: Si.CONTENT }, t)
          ),
        fi = {
          ACTIVITY_PANEL: {
            display: "inline-block",
            backgroundColor: "ds.container.agnostic.neutral.supershy",
            padding: "24px 32px",
            borderRadius: "8px",
            border: "1px solid ds.border.neutral.quiet.idle",
            flex: "1"
          }
        },
        Ci = ({ isLoading: e, children: t }) => {
          const { translate: a } = (0, p.Z)();
          return (0, y.tZ)(
            vi,
            { header: (0, y.tZ)(xi, { title: a("team_activity_header_title") }) },
            e ? (0, y.tZ)(Rs.Z, { containerStyle: { minHeight: 240 } }) : (0, y.tZ)("div", { sx: fi.ACTIVITY_PANEL }, t)
          );
        };
      var Ei = a(483490),
        Zi = a(246669);
      const Ti = ({ text: e }) => {
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
      var Ni = a(755920);
      const Di = Object.values(Ni.z),
        Mi = "team_audit_log_user_imported_credentials_one",
        Ii = "team_audit_log_user_imported_credentials_many",
        Ai = {
          [Ni.z.UserInvited]: (e, t) => t("team_audit_log_user_invited", { email: `**${e?.properties?.target_login}**` }),
          [Ni.z.UserReinvited]: (e, t) => t("team_audit_log_user_reinvited", { email: `**${e?.properties?.target_login}**` }),
          [Ni.z.UserRemoved]: (e, t) => t("team_audit_log_user_removed", { email: `**${e?.properties?.target_login}**` }),
          [Ni.z.TeamCaptainAdded]: (e, t) => t("team_audit_log_team_captain_added", { email: `**${e?.properties?.target_login}**` }),
          [Ni.z.TeamCaptainRemoved]: (e, t) => t("team_audit_log_team_captain_removed", { email: `**${e?.properties?.target_login}**` }),
          [Ni.z.GroupManagerAdded]: (e, t) => t("team_audit_log_group_manager_added", { email: `**${e?.properties?.target_login}**` }),
          [Ni.z.GroupManagerRemoved]: (e, t) => t("team_audit_log_group_manager_removed", { email: `**${e?.properties?.target_login}**` }),
          [Ni.z.MasterPasswordResetAccepted]: (e, t) =>
            t("team_audit_log_master_password_reset_accepted", { email: `**${e?.properties?.target_login}**` }),
          [Ni.z.MasterPasswordResetRefused]: (e, t) =>
            t("team_audit_log_master_password_reset_refused", { email: `**${e?.properties?.target_login}**` }),
          [Ni.z.BillingAdminAdded]: (e, t) => t("team_audit_log_billing_admin_added", { email: `**${e?.properties?.target_login}**` }),
          [Ni.z.BillingAdminRemoved]: (e, t) => t("team_audit_log_billing_admin_removed", { email: `**${e?.properties?.target_login}**` }),
          [Ni.z.UserGroupCreated]: (e, t) => t("team_audit_log_user_group_created", { groupName: `**${e.properties?.group_name}**` }),
          [Ni.z.UserGroupRenamed]: (e, t) =>
            t("team_audit_log_user_group_renamed", {
              newGroupName: `**${e.properties?.group_name}**`,
              oldGroupName: `**${e.properties?.old_group_name}**`
            }),
          [Ni.z.UserGroupDeleted]: (e, t) => t("team_audit_log_user_group_deleted", { groupName: `**${e.properties?.group_name}**` }),
          [Ni.z.UserJoinedUserGroup]: (e, t) =>
            t("team_audit_log_user_joined_user_group", { groupName: `**${e.properties?.group_name}**` }),
          [Ni.z.UserLeftUserGroup]: (e, t) => t("team_audit_log_user_left_user_group", { groupName: `**${e.properties?.group_name}**` }),
          [Ni.z.UserInvitedToUserGroup]: (e, t) =>
            t("team_audit_log_user_invited_to_user_group", {
              groupName: `**${e.properties?.group_name}**`,
              email: `**${e?.properties?.target_login}**`
            }),
          [Ni.z.UserDeclinedInviteToUserGroup]: (e, t) =>
            t("team_audit_log_user_declined_invite_to_user_group", { groupName: `**${e.properties?.group_name}**` }),
          [Ni.z.UserRemovedFromUserGroup]: (e, t) =>
            t("team_audit_log_user_removed_from_user_group", {
              groupName: `**${e.properties?.group_name}**`,
              email: `**${e?.properties?.target_login}**`
            }),
          [Ni.z.DomainRequested]: (e, t) => t("team_audit_log_domain_requested", { domain: `**${e.properties?.domain_url}**` }),
          [Ni.z.DomainValidated]: (e, t) => t("team_audit_log_domain_validated", { domain: `**${e.properties?.domain_url}**` }),
          [Ni.z.SensitiveLogsEnabled]: (e, t) => t("team_audit_log_collect_sensitive_data_audit_logs_enabled"),
          [Ni.z.SensitiveLogsDisabled]: (e, t) => t("team_audit_log_collect_sensitive_data_audit_logs_disabled"),
          [Ni.z.SsoIdpMetadataSet]: (e, t) => t("team_audit_log_sso_idp_metadata_set"),
          [Ni.z.SsoServiceProviderUrlSet]: (e, t) => t("team_audit_log_sso_service_provider_url_set"),
          [Ni.z.SsoEnabled]: (e, t) => t("team_audit_log_sso_enabled"),
          [Ni.z.SsoDisabled]: (e, t) => t("team_audit_log_sso_disabled"),
          [Ni.z.TeamNameChanged]: (e, t) => t("team_audit_log_team_name_changed", { name: `**${e.properties?.name}**` }),
          [Ni.z.NewBillingPeriodCreated]: (e, t) =>
            t("team_audit_log_new_billing_period_created", {
              date: `**${t.shortDate((0, Xt.Z)(e.properties?.new_end_date_unix), sa._T.L)}**`
            }),
          [Ni.z.SeatsAdded]: (e, t) => t("team_audit_log_seats_added", { count: `**${e.properties?.seats_added}**` }),
          [Ni.z.ContactEmailChanged]: (e, t) =>
            t("team_audit_log_contact_email_changed", { email: `**${e?.properties?.new_contact_email}**` }),
          [Ni.z.MasterPasswordMobileResetEnabled]: (e, t) =>
            t("team_audit_log_master_password_mobile_reset_enabled", {
              deviceName: e?.properties?.device_name ? `**${e?.properties?.device_name}**` : "mobile"
            }),
          [Ni.z.MasterPasswordMobileResetDisabled]: (e, t) =>
            t("team_audit_log_master_password_mobile_reset_disabled", {
              deviceName: e?.properties?.device_name ? `**${e?.properties?.device_name}**` : "mobile"
            }),
          [Ni.z.MasterPasswordChanged]: (e, t) => t("team_audit_log_master_password_changed"),
          [Ni.z.MpToViewPasswordsEnabled]: (e, t) => t("team_audit_log_mp_to_view_passwords_enabled"),
          [Ni.z.MpToViewPasswordsDisabled]: (e, t) => t("team_audit_log_mp_to_view_passwords_disabled"),
          [Ni.z.TwoFactorAuthenticationLoginMethodAdded]: (e, t) => t("team_audit_log_two_factor_authentication_login_method_added"),
          [Ni.z.TwoFactorAuthenticationLoginMethodRemoved]: (e, t) => t("team_audit_log_two_factor_authentication_login_method_removed"),
          [Ni.z.BiometricSignInDisabled]: (e, t) =>
            t("team_audit_log_biometric_sign_in_disabled", { deviceName: `**${e?.properties?.device_name}**` }),
          [Ni.z.NitroSsoSetupStarted]: (e, t) => t("team_audit_log_nitro_sso_setup_started"),
          [Ni.z.NitroSsoDomainProvisioned]: (e, t) =>
            t("team_audit_log_nitro_sso_domain_provisioned", { domain: `**${e?.properties?.domain_url}**` }),
          [Ni.z.NitroSsoDomainRemoved]: (e, t) =>
            t("team_audit_log_nitro_sso_domain_removed", { domain: `**${e?.properties?.domain_url}**` }),
          [Ni.z.NitroSsoDomainVerified]: (e, t) =>
            t("team_audit_log_nitro_sso_domain_verified", { domain: `**${e?.properties?.domain_url}**` }),
          [Ni.z.DWMEmailAdded]: (e, t) => t("team_audit_log_dwm_email_added", { email: `**${e?.properties?.dark_web_monitoring_email}**` }),
          [Ni.z.DWMEmailRemoved]: (e, t) =>
            t("team_audit_log_dwm_email_removed", { email: `**${e?.properties?.dark_web_monitoring_email}**` }),
          [Ni.z.DWMAlertReceived]: (e, t) =>
            t("team_audit_log_dwm_alert_received", { email: `**${e?.properties?.dark_web_monitoring_email}**` }),
          [Ni.z.UserDeviceAdded]: (e, t) => t("team_audit_log_user_device_added", { name: `**${e.properties?.device_name}**` }),
          [Ni.z.UserDeviceRemoved]: (e, t) => t("team_audit_log_user_device_removed", { name: `**${e.properties?.device_name}**` }),
          [Ni.z.UserDeviceLogin]: (e, t) => t("team_audit_log_user_device_login", { name: `**${e.properties?.device_name}**` }),
          [Ni.z.MasterPasswordReset]: (e, t) => t("team_audit_log_master_password_reset"),
          [Ni.z.RequestedAccountRecovery]: (e, t) => t("team_audit_log_requested_account_recovery"),
          [Ni.z.CompletedAccountRecovery]: (e, t) => t("team_audit_log_completed_account_recovery"),
          [Ni.z.MasterPasswordMobileReset]: (e, t) =>
            t("team_audit_log_master_password_mobile_reset", {
              deviceName: e?.properties?.device_name ? `**${e?.properties?.device_name}**` : "mobile"
            }),
          [Ni.z.UserSharedCredentialWithGroup]: (e, t) => {
            const a = e;
            return t(
              "admin" === a.properties.permission
                ? "team_audit_log_user_shared_credential_with_group_full"
                : "team_audit_log_user_shared_credential_with_group_limited",
              { domain: `**${a.properties.domain_url}**`, group: `**${a.properties.group_name}**` }
            );
          },
          [Ni.z.UserSharedCredentialWithEmail]: (e, t) => {
            const a = e;
            return t(
              "admin" === a.properties.permission
                ? "team_audit_log_user_shared_credential_with_email_full"
                : "team_audit_log_user_shared_credential_with_email_limited",
              { domain: `**${a.properties.domain_url}**`, email: `**${a.properties.target_login}**` }
            );
          },
          [Ni.z.UserSharedCredentialWithExternal]: (e, t) => {
            const a = e;
            return t(
              "admin" === a.properties.permission
                ? "team_audit_log_user_shared_credential_with_external_full"
                : "team_audit_log_user_shared_credential_with_external_limited",
              { domain: `**${a.properties.domain_url}**`, email: `**${a.properties.target_login}**` }
            );
          },
          [Ni.z.UserSharedSecureNoteWithGroup]: (e, t) => {
            const a = e;
            return t(
              "admin" === a.properties.permission
                ? "team_audit_log_user_shared_secure_note_with_group_full"
                : "team_audit_log_user_shared_secure_note_with_group_limited",
              { name: `**${a.properties.item_name}**`, group: `**${a.properties.group_name}**` }
            );
          },
          [Ni.z.UserSharedSecureNoteWithEmail]: (e, t) => {
            const a = e;
            return t(
              "admin" === a.properties.permission
                ? "team_audit_log_user_shared_secure_note_with_email_full"
                : "team_audit_log_user_shared_secure_note_with_email_limited",
              { name: `**${a.properties.item_name}**`, email: `**${a.properties.target_login}**` }
            );
          },
          [Ni.z.UserSharedSecureNoteWithExternal]: (e, t) => {
            const a = e;
            return t(
              "admin" === a.properties.permission
                ? "team_audit_log_user_shared_secure_note_with_external_full"
                : "team_audit_log_user_shared_secure_note_with_external_limited",
              { name: `**${a.properties.item_name}**`, email: `**${a.properties.target_login}**` }
            );
          },
          [Ni.z.UserRevokedSharedCredentialGroup]: (e, t) => {
            const a = e;
            return t("team_audit_log_user_revoked_shared_credential_group", {
              domain: `**${a.properties.domain_url}**`,
              group: `**${a.properties.group_name}**`
            });
          },
          [Ni.z.UserRevokedSharedCredentialEmail]: (e, t) => {
            const a = e;
            return t("team_audit_log_user_revoked_shared_credential_email", {
              domain: `**${a.properties.domain_url}**`,
              email: `**${a.properties.target_login}**`
            });
          },
          [Ni.z.UserRevokedSharedCredentialExternal]: (e, t) => {
            const a = e;
            return t("team_audit_log_user_revoked_shared_credential_external", {
              domain: `**${a.properties.domain_url}**`,
              email: `**${a.properties.target_login}**`
            });
          },
          [Ni.z.UserRevokedSharedSecureNoteGroup]: (e, t) => {
            const a = e;
            return t("team_audit_log_user_revoked_shared_secure_note_group", {
              name: `**${a.properties.item_name}**`,
              group: `**${a.properties.group_name}**`
            });
          },
          [Ni.z.UserRevokedSharedSecureNoteEmail]: (e, t) => {
            const a = e;
            return t("team_audit_log_user_revoked_shared_secure_note_email", {
              name: `**${a.properties.item_name}**`,
              email: `**${a.properties.target_login}**`
            });
          },
          [Ni.z.UserRevokedSharedSecureNoteExternal]: (e, t) => {
            const a = e;
            return t("team_audit_log_user_revoked_shared_secure_note_external", {
              name: `**${a.properties.item_name}**`,
              email: `**${a.properties.target_login}**`
            });
          },
          [Ni.z.UserAcceptedSharingInviteSecureNote]: (e, t) =>
            t("team_audit_log_user_accepted_sharing_invite_secure_note", { name: `**${e.properties.item_name}**` }),
          [Ni.z.UserRejectedSharingInviteSecureNote]: (e, t) =>
            t("team_audit_log_user_rejected_sharing_invite_secure_note", { name: `**${e.properties.item_name}**` }),
          [Ni.z.UserAcceptedSharingInviteCredential]: (e, t) =>
            t("team_audit_log_user_accepted_sharing_invite_credential", { domain: `**${e.properties.domain_url}**` }),
          [Ni.z.UserRejectedSharingInviteCredential]: (e, t) =>
            t("team_audit_log_user_rejected_sharing_invite_credential", { domain: `**${e.properties.domain_url}**` }),
          [Ni.z.UserCreatedCredential]: (e, t) => t("team_audit_log_user_created_credential", { domain: `**${e.properties.domain_url}**` }),
          [Ni.z.UserModifiedCredential]: (e, t) =>
            t("team_audit_log_user_modified_credential", { domain: `**${e.properties.domain_url}**` }),
          [Ni.z.UserDeletedCredential]: (e, t) => t("team_audit_log_user_deleted_credential", { domain: `**${e.properties.domain_url}**` }),
          [Ni.z.UserImportedCredentials]: (e, t) =>
            t(e.properties.import_count > 1 ? Ii : Mi, { importCount: `**${e.properties.import_count}**` }),
          [Ni.z.UserCreatedSecureNote]: (e, t) => t("team_audit_log_user_created_secure_note", { name: `**${e.properties.item_name}**` }),
          [Ni.z.UserModifiedSecureNote]: (e, t) => t("team_audit_log_user_modified_secure_note", { name: `**${e.properties.item_name}**` }),
          [Ni.z.UserDeletedSecureNote]: (e, t) => t("team_audit_log_user_deleted_secure_note", { name: `**${e.properties.item_name}**` })
        },
        wi = (e, t) => (Di.includes(e.log_type) ? Ai[e.log_type](e, t) : ""),
        ki = Object.values(Ni.z),
        Oi = (e) => (t) => {
          !e || ("Enter" !== t.key && " " !== t.key) || (e(), t.preventDefault());
        },
        Li = {
          padding: "16px 0 16px 16px",
          textAlign: "left",
          fontSize: "12px",
          fontWeight: "600",
          verticalAlign: "middle",
          whiteSpace: "break-spaces",
          textTransform: "uppercase",
          cursor: "default"
        },
        zi = ({ onClick: e, sortOrder: t, colSpan: a, tooltipLabel: s, headerLabel: i, headerElement: o }) => {
          const [r, l] = (0, n.useState)(!1);
          return (0, y.tZ)(
            "th",
            {
              scope: "col",
              role: "columnheader",
              colSpan: a,
              tabIndex: 0,
              "aria-sort": ((c = t), "asc" === c ? "ascending" : "desc" === c ? "descending" : "none"),
              onClick: e,
              onMouseEnter: () => l(!0),
              onMouseLeave: () => l(!1),
              onFocus: () => l(!0),
              onBlur: () => l(!1),
              onKeyDown: Oi(e),
              sx: Li
            },
            (0, y.tZ)(
              "div",
              { sx: { display: "flex", height: "100%", maxWidth: "140px", alignItems: "center" } },
              o || null,
              s
                ? (0, y.tZ)(
                    y.u,
                    { content: s, isOpen: r },
                    (0, y.tZ)("span", { sx: { marginTop: "-5px", paddingTop: "5px", minWidth: 0, whiteSpace: "break-spaces" } }, i)
                  )
                : (0, y.tZ)("span", { sx: { minWidth: 0, whiteSpace: "break-spaces" } }, i),
              (0, y.tZ)(
                "div",
                { sx: { width: "10px" } },
                t
                  ? (0, y.tZ)(y.JO, { sx: { ml: "4px" }, name: "desc" === t ? "CaretDownOutlined" : "CaretUpOutlined", size: "small" })
                  : null
              )
            )
          );
          var c;
        },
        Ri = ({ headerElement: e, colSpan: t, headerLabel: a, tooltipLabel: n }) =>
          (0, y.tZ)(
            "th",
            { colSpan: t, sx: Li },
            e || null,
            n
              ? (0, y.tZ)(y.u, { content: n }, (0, y.tZ)("span", { sx: { minWidth: 0, whiteSpace: "break-spaces" } }, a))
              : (0, y.tZ)("span", { sx: { minWidth: 0, whiteSpace: "break-spaces" } }, a)
          ),
        ji = ({ columns: e, sx: t }) =>
          (0, y.tZ)(
            "thead",
            { sx: t },
            (0, y.tZ)(
              "tr",
              { "aria-rowindex": 1, sx: { color: "ds.text.neutral.quiet" } },
              e.map((e) => (e.onClick ? (0, y.tZ)(zi, { key: e.headerKey, ...e }) : (0, y.tZ)(Ri, { key: e.headerKey, ...e })))
            )
          ),
        Pi = {
          TABLE_BODY: {
            tr: {
              boxShadow: "inset 0 -1px 0 0 ds.border.neutral.quiet.idle",
              height: "60px",
              td: { padding: "16px", verticalAlign: "middle", variant: "text.ds.body.reduced.regular", color: "ds.text.neutral.standard" }
            }
          }
        },
        Ui = ({ children: e }) => {
          const { translate: t } = (0, p.Z)(),
            a = [
              { headerLabel: t("team_activity_list_head_admin"), headerKey: "admin" },
              { headerLabel: t("team_activity_list_head_action"), headerKey: "action" },
              { headerLabel: t("team_activity_list_head_time"), headerKey: "time" }
            ];
          return (0, y.tZ)(
            "table",
            { className: "table--mfR78xcZe9" },
            (0, y.tZ)(ji, { columns: a }),
            (0, y.tZ)("tbody", { key: "table-body", sx: Pi.TABLE_BODY }, e)
          );
        };
      var Bi = a(351433),
        Gi = a(277559);
      const Fi = {
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
        qi = ({ login: e, action: t, date: a }) =>
          (0, y.tZ)(
            "tr",
            null,
            (0, y.tZ)(
              "td",
              { sx: Fi.LOGIN_CELL },
              (0, y.tZ)(Bi.q, { email: e, size: 30 }),
              (0, y.tZ)(
                "div",
                { id: "user-email", sx: Fi.LOGIN_TEXT },
                (0, y.tZ)(y.nv, { color: "ds.text.neutral.catchy", textStyle: "ds.body.standard.regular" }, e)
              )
            ),
            (0, y.tZ)("td", null, t),
            (0, y.tZ)("td", { className: "dateCell--JBqTpeYwB5" }, (0, y.tZ)(Gi.v, { date: a }))
          );
      var Vi = a(438042),
        $i = a(909087);
      const Wi = 1e3;
      async function Hi() {
        const e = new Date(),
          t = (0, Vi.Z)((0, $i.Z)(e, 3)),
          a = (0, Vi.Z)(e),
          n = await ea.C.startAuditLogsQuery({ startDateRangeUnix: t, endDateRangeUnix: a });
        if (n.success) return n;
        throw (
          ((0, j.Kz)(
            new o.UserDownloadAuditLogsDataEvent({
              flowStep: o.FlowStep.Error,
              auditLogDownloadError: o.AuditLogDownloadError.UnexpectedUnknown
            })
          ),
          new Error("[startAuditLogsQuery] - Server Error: Unable to start audit logs query and fetch queryExecutionId"))
        );
      }
      async function Ki(e, t, a) {
        const n = await ea.C.getAuditLogQueryResults({ queryExecutionId: e, maxResults: t, nextToken: a });
        return !n.success ||
          (n.data.state !== l.GetAuditLogQueryResultsState.Running && n.data.state !== l.GetAuditLogQueryResultsState.Queued)
          ? n
          : (await new Promise((e) => setTimeout(() => e(), 3e3)), await Ki(e, t, a));
      }
      async function Yi(e, t, a = 1, n) {
        const s = await Ki(t, Wi, n);
        if ((e(a), s.success)) {
          let n = s.data.auditLogs;
          if (s.data.nextToken) {
            const i = await Yi(e, t, a + 1, s.data.nextToken);
            return i && (n = n.concat(i)), n;
          }
          return n;
        }
        throw (
          ((0, j.Kz)(
            new o.UserDownloadAuditLogsDataEvent({ flowStep: o.FlowStep.Error, auditLogDownloadError: o.AuditLogDownloadError.NoLogData })
          ),
          new Error("[fetchAuditLogsPages] - Server Error: Unable to load audit logs data"))
        );
      }
      const Qi = { display: "block", height: "4px", borderRadius: 1, transition: "width 1s ease-out", bg: "successes.4" },
        Xi = ({ progressPercent: e }) => {
          const { translate: t } = (0, p.Z)(),
            a = Math.min(Math.max(e, 0), 100),
            n = { width: `${a}%` },
            s = (0, d.jMf)([Qi, n]),
            i = "download-progress-description";
          return (0, c.tZ)(
            d.Ejs,
            { alignItems: "flex-start", flexDirection: "column", fullWidth: !0, sx: { mt: "8px", maxWidth: "100%" } },
            (0, c.tZ)(
              d.Ejs,
              { flexDirection: "row", justifyContent: "space-between", fullWidth: !0, sx: { bg: "primaries.1", maxWidth: "100%" } },
              (0, c.tZ)(
                "div",
                { sx: { position: "relative", width: "100%" } },
                (0, c.tZ)("span", { "aria-describedby": i, "data-testid": "download-progress-bar", role: "img", sx: s })
              )
            ),
            (0, c.tZ)(
              d.nvN,
              { sx: { mt: "4px", color: d.colors.dashGreen01 }, size: "x-small", id: i },
              t("team_activity_download_modal_progress", { progressPercentage: a })
            )
          );
        },
        Ji = ({ isOpen: e, progress: t, onClose: a }) => {
          const { translate: n } = (0, p.Z)();
          return (0, c.tZ)(
            d.VqE,
            {
              isOpen: e,
              onClose: a,
              closeIconName: n("_common_dialog_dismiss_button"),
              ariaDescribedby: "csv-download-dialog-body",
              ariaLabelledby: "csv-download-dialog-title"
            },
            (0, c.tZ)(d.$N8, { id: "csv-download-dialog-title", title: n("team_activity_download_modal_title") }),
            (0, c.tZ)(
              "div",
              { sx: { maxHeight: "fit-content", overflowX: "hidden", overflowY: "auto" } },
              (0, c.tZ)(Xi, { progressPercent: t }),
              (0, c.tZ)(
                d.nvN,
                { size: "medium", sx: { marginTop: 5, marginBottom: 6, color: d.colors.grey00 } },
                n("team_activity_download_modal_body")
              ),
              (0, c.tZ)(d.vDh, { severity: "warning", size: "small", title: n("team_activity_download_modal_warning") })
            )
          );
        },
        eo = Object.values(Ni.z);
      var to;
      const ao = ({ lee: e }) => {
        const { translate: t } = (0, p.Z)(),
          [a, s] = (0, n.useState)(""),
          {
            isStartAuditLogsQueryTriggered: i,
            isLoading: r,
            nextToken: c,
            hasError: u,
            list: _
          } = ((e) => {
            const [t, a] = (0, n.useState)(!1),
              [s, i] = (0, n.useState)(!1),
              [o, r] = (0, n.useState)([]),
              [c, d] = (0, n.useState)(""),
              [u, _] = (0, n.useState)(""),
              [m, p] = (0, n.useState)(!1),
              g = (0, n.useCallback)(
                async (t) => {
                  try {
                    a(!0);
                    const n = await Ki(t, 50, e && "" !== e ? e : void 0),
                      s = [l.GetAuditLogQueryResultsState.Failed, l.GetAuditLogQueryResultsState.Cancelled];
                    !n.success || s.includes(n.data.state)
                      ? i(!0)
                      : (r((e = []) => [...e, ...n.data.auditLogs]), n?.data.nextToken ? d(n.data.nextToken) : d(null));
                  } catch (e) {
                    i(!0);
                  } finally {
                    a(!1);
                  }
                },
                [e]
              ),
              y = (0, n.useCallback)(async () => {
                try {
                  a(!0);
                  const e = await Hi(),
                    { queryExecutionId: t } = e.data;
                  await g(t), _(t), p(!0);
                } catch (e) {
                  a(!1), i(!0);
                }
              }, [g]);
            return (
              (0, n.useEffect)(() => {
                m ? ("" !== u ? g(u) : i(!0)) : y();
              }, [g]),
              { isStartAuditLogsQueryTriggered: m, isLoading: t, nextToken: c, hasError: s, list: o }
            );
          })(a),
          m = !i && r,
          g = i && r,
          b = null !== c,
          h = (0, n.useRef)(null),
          x = (0, n.useRef)(null);
        (0, _i.M)({
          hasMore: b,
          scrollContainerRef: h,
          bottomRef: x,
          loadMore: () => {
            b && s(c);
          }
        });
        const [S, v] = (0, n.useState)(!1),
          [f, C] = (0, n.useState)(!1),
          [E, Z] = (0, n.useState)(0),
          T = (0, Ra.V)(),
          N = (0, n.useCallback)(() => {
            C(!1), (0, j.Nc)(o.PageView.TacActivityList);
          }, []),
          D = (0, n.useCallback)((e) => {
            const t = 50 + e - 10;
            e <= 10 ? Z(5 * e) : e <= 40 && e > 10 && Z(t);
          }, []),
          M = async () => {
            C(!0),
              Z(0),
              v(!0),
              (0, j.Nc)(o.PageView.TacActivityDownload),
              (0, j.Kz)(new o.UserDownloadAuditLogsDataEvent({ flowStep: o.FlowStep.Start, auditLogCount: 0 }));
            try {
              let e = [];
              const a = await Hi();
              (e = await Yi(D, a.data.queryExecutionId)), Z(100);
              const n = "\ufeff",
                s = ((e, t) => {
                  const a =
                      [t("team_activity_list_head_admin"), t("team_activity_list_head_action"), t("team_activity_list_head_time_csv")].join(
                        ","
                      ) + "\n",
                    n = e
                      .filter((e) => eo.includes(e.log_type))
                      .map((e) => {
                        var a;
                        const n = null != (a = e.properties?.author_login) ? a : "",
                          s = wi(e, t).replace(/\*\*/g, "").replace(/[“”]/g, '"'),
                          i = new Date(e.date_time).toISOString();
                        return `${n},${s},${i.substr(0, 10)} ${i.substr(11, 8)}`;
                      });
                  return (
                    (0, j.Kz)(new o.UserDownloadAuditLogsDataEvent({ flowStep: o.FlowStep.Complete, auditLogCount: n.length })),
                    a + n.join("\n")
                  );
                })(e, t);
              setTimeout(() => {
                try {
                  (0, Zi.S)([n, s], "dashlane-activity-export.csv", "text/csv;charset=utf-8"), v(!1), N();
                } catch (e) {
                  (0, j.Kz)(
                    new o.UserDownloadAuditLogsDataEvent({
                      flowStep: o.FlowStep.Error,
                      auditLogDownloadError: o.AuditLogDownloadError.NoCsv
                    })
                  );
                }
              }, 1e3);
            } catch (t) {
              e.dispatchGlobal(
                (0, Ei.wN)(
                  ((e, t) => {
                    const a = "directorySyncKeyValidationError",
                      n = () => e.dispatchGlobal((0, Ei.FV)(a)),
                      s = d.BLW.ERROR;
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
                  })(e, M)
                )
              ),
                (0, j.Kz)(
                  new o.UserDownloadAuditLogsDataEvent({
                    flowStep: o.FlowStep.Error,
                    auditLogDownloadError: o.AuditLogDownloadError.UnexpectedUnknown
                  })
                ),
                Z(0),
                v(!1),
                N();
            }
          },
          I = _.map((e) =>
            ((e, t) => {
              var a;
              return ki.includes(e.log_type)
                ? {
                    uuid: e.uuid,
                    date: new Date(e.date_time),
                    activityDescription: wi(e, t),
                    userLogin: null != (a = e.properties?.author_login) ? a : ""
                  }
                : null;
            })(e, t)
          ).filter((e) => null !== e);
        return (0, y.tZ)(
          Ci,
          { isLoading: !f && m },
          (0, y.tZ)(
            "div",
            { className: "container--XdLBgpl4YX", ref: h },
            (0, y.tZ)(
              "div",
              { className: "top--RuWypqAKoN" },
              (0, y.tZ)(
                y.zx,
                { onClick: M, disabled: S, layout: "iconLeading", icon: "DownloadOutlined" },
                t("team_activity_download_button")
              )
            ),
            (0, y.tZ)(
              Ui,
              null,
              I.map((e) =>
                (0, y.tZ)(qi, { login: e.userLogin, action: (0, y.tZ)(Ti, { text: e.activityDescription }), date: e.date, key: e.uuid })
              )
            ),
            u ? T.showAlert(t("_common_generic_error"), d.BLW.ERROR) : null,
            (0, y.tZ)(
              "div",
              { ref: x },
              g
                ? (0, y.tZ)(
                    "div",
                    { sx: { display: "flex", height: "40px", justifyContent: "center", paddingTop: "20px", paddingBottom: "60px" } },
                    to || (to = (0, y.tZ)(d.HoD, { size: 40, color: "ds.text.brand.quiet" }))
                  )
                : null
            )
          ),
          f
            ? (0, y.tZ)(Ji, {
                isOpen: f,
                progress: E,
                onClose: () => {
                  N();
                }
              })
            : null
        );
      };
      var no = a(859817);
      const so = { table: "table--qduhC1TPu3", actionCell: "actionCell--cglSMoOlh7", button: "button--v4n4SCN07C" },
        io = {
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
        oo = (0, n.memo)(({ onAccept: e, onDecline: t, dateFormatter: a, requests: n }) => {
          const { translate: s } = (0, p.Z)(),
            i = [
              { headerLabel: s("team_master_password_reset_table_head_member"), headerKey: "member" },
              { headerLabel: s("team_master_password_reset_table_head_time"), headerKey: "time" },
              { headerLabel: "", headerKey: "actions" }
            ];
          return (0, y.tZ)(
            "table",
            { className: so.table },
            (0, y.tZ)(ji, { columns: i }),
            (0, y.tZ)(
              "tbody",
              { key: "table-body", sx: io.TABLE_BODY },
              n.map((n) => {
                const s = (0, Xt.Z)(n.creationDateUnix),
                  i = a(s);
                return (0, y.tZ)(
                  "tr",
                  { key: (0, v.uniqueId)() },
                  (0, y.tZ)(
                    "td",
                    { sx: io.LOGIN_CELL },
                    (0, y.tZ)(Bi.q, { email: n.login, size: 30 }),
                    (0, y.tZ)(
                      "div",
                      { id: "user-email", sx: io.LOGIN_TEXT },
                      (0, y.tZ)(y.nv, { color: "ds.text.neutral.catchy", textStyle: "ds.body.standard.regular" }, n.login)
                    )
                  ),
                  (0, y.tZ)("td", { className: so.dateCell }, i),
                  (0, y.tZ)(
                    "td",
                    { className: so.actionCell },
                    (0, y.tZ)("img", {
                      className: so.button,
                      onClick: () => t(n),
                      src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNNS41IDEyLjVMMTIuNSA1LjVNMTIuNSAxMi41TDUuNSA1LjVNMC41IDlDMC41IDQuMzA1ODcgNC4zMDU4NyAwLjUgOSAwLjVDMTMuNjk0MSAwLjUgMTcuNSA0LjMwNTg3IDE3LjUgOUMxNy41IDEzLjY5NDEgMTMuNjk0MSAxNy41IDkgMTcuNUM0LjMwNTg3IDE3LjUgMC41IDEzLjY5NDEgMC41IDlaIiBzdHJva2U9IiNGRjAwMkQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K"
                    }),
                    (0, y.tZ)("img", {
                      className: so.button,
                      onClick: () => e(n),
                      src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNNiA5TDcuOTU5MjggMTFMMTEuOTc5NiA3TTAuNSA5QzAuNSA0LjMwNTQ1IDQuMzA2MyAwLjUgOSAwLjVDMTMuNjkzNyAwLjUgMTcuNSA0LjMwNTQ1IDE3LjUgOUMxNy41IDEzLjY5NDYgMTMuNjkzNyAxNy41IDkgMTcuNUM0LjMwNjMgMTcuNSAwLjUgMTMuNjk0NiAwLjUgOVoiIHN0cm9rZT0iIzIwQjQyMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo="
                    })
                  )
                );
              })
            )
          );
        }),
        ro = "dialogContent--koRKDSa9Ov",
        lo = "dialogContentStrong--OG0LUgIyIm dialogContent--koRKDSa9Ov";
      var co;
      var uo = a(736111);
      const _o = (e, t) => (a) => n.createElement(Dt, { selectedTab: t, lee: a.lee }, n.createElement(e, { ...a })),
        mo = _o(
          (e) => (
            n.useEffect(() => {
              (0, j.Nc)(o.PageView.TacActivityList);
            }, []),
            n.createElement(ao, { lee: e.lee })
          ),
          "activity"
        ),
        po = _o(({ lee: e }) => {
          var t;
          const { translate: a } = (0, p.Z)(),
            { reportTACError: s } = $(),
            [i, o] = (0, n.useState)(!1),
            r = { dialogIsVisible: !1, dialogType: null, selectedRequest: null },
            [l, u] = (0, n.useState)(r),
            _ = (0, n.useCallback)(() => {
              const t = (0, sn.v0)(e.globalState);
              return t || s(new Error(en.N)), t;
            }, []),
            m = (0, n.useCallback)(async () => {
              const e = _();
              e?.teamId && (await (0, Un.mP)({ teamId: e.teamId }));
            }, [_]);
          (0, n.useEffect)(() => {
            (async () => {
              try {
                o(!0);
                const {
                  teamInfo: { recoveryEnabled: e }
                } = await (0, ae.I)();
                e && (await m(), o(!1));
              } catch (e) {
                console.error(`RequestsActivity - fetchStatus failed with error ${e}`), o(!1);
              }
            })();
          }, [m]);
          const g = (e) => {
              u({ dialogIsVisible: !0, dialogType: "accept", selectedRequest: e });
            },
            y = (e) => {
              u({ dialogIsVisible: !0, dialogType: "decline", selectedRequest: e });
            },
            b = (e) => [a.shortDate(e, sa._T.l), a.shortDate(e, sa._T.LT)].join(" - "),
            h = () => {
              u(r);
            },
            x = () => {
              u(r);
            };
          return (0, c.tZ)(
            Ci,
            { isLoading: i },
            (() => {
              const t = (() => {
                var t;
                const a = _();
                if (!a) return [];
                const { teams: n } = (0, no.e)(e.globalState),
                  { teamId: s } = a;
                return null == s ? [] : null != (t = n[s]?.notifications?.accountRecoveryRequests) ? t : [];
              })();
              return t.length
                ? (0, c.tZ)(
                    "div",
                    { className: "container--DRtotEoFLA" },
                    (0, c.tZ)(oo, { onAccept: g, onDecline: y, dateFormatter: b, requests: t })
                  )
                : (0, c.tZ)(
                    "div",
                    { className: "containerNoItem--U7KH6tddpl container--DRtotEoFLA" },
                    co ||
                      (co = (0, c.tZ)("img", {
                        src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDQwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMzMuODMxOCAyNC45MTQ3QzM0LjIxMTggMjUuNDI0NyAzNC41NjE4IDI2LjA4NDcgMzQuNjYxOCAyNi43MDQ4QzM0Ljc1MTggMjcuMDI0NyAzNC43ODE4IDI3LjMxNDcgMzQuNzgxOCAyNy41OTQ3TDM0LjgxMTggMjguMDI0N0MzNC44MTE4IDI4LjE4NDcgMzQuODExOCAyOC4zOTQ3IDM0Ljc4MTggMjguNTc0N0MzNC42MDE4IDMwLjEwNDcgMzMuNDAxOCAzMS40MDQ3IDMxLjkxMTggMzEuNzI0N0MzMS43MzE4IDMxLjc2NDcgMzEuNTQxOCAzMS43OTQ3IDMxLjM1MTggMzEuODA0N0wzMS4wODE4IDMxLjgxNDhIMzAuOTExOEgzMC4yMzE4SDI4Ljg3MThIMjYuMTYxOEgxNS4zMTE4SDkuODkxOEg5LjIxMThIOC44NzE4SDguNjkxOEw4LjQxMTggMzEuODA0N0M3LjY1MTggMzEuNzQ0NyA2LjkyMTggMzEuNDM0NyA2LjM0MTggMzAuOTU0OEM1Ljc2MTggMzAuNDY0OCA1LjMzMTggMjkuODA0NyA1LjEzMTggMjkuMDc0N0M1LjAyMTggMjguNzI0NyA0Ljk5MTggMjguMjk0NyA1LjAwMTggMjcuOTg0N0w1LjA3MTggMjcuMTI0N0M1LjA4OTc3IDI3LjA0NTIgNS4xMDY0MyAyNi45NjU2IDUuMTIzMTEgMjYuODg1OEM1LjE3MTQzIDI2LjY1NDkgNS4yMjAwNCAyNi40MjI2IDUuMzAxOCAyNi4xODQ3QzUuMzI4NyAyNi4xMjMzIDUuMzU0ODcgMjYuMDYxIDUuMzgxMDcgMjUuOTk4N0M1LjQ5MTI0IDI1LjczNjcgNS42MDIxNiAyNS40NzI5IDUuNzcxOCAyNS4yNTQ3QzYuMTAyODcgMjQuNzM2OSA2LjQ5MTU5IDI0LjM5OTMgNi44Mjc4NSAyNC4xMDcyQzYuODg3NyAyNC4wNTUyIDYuOTQ1ODkgMjQuMDA0NiA3LjAwMTggMjMuOTU0OEM3LjczMTggMjMuMzY0NyA4LjEzMTggMjIuOTc0NyA4LjQ3MTggMjIuMzc0N0M5LjE0MTggMjEuMjA0NyA5LjM2MTggMTkuNDk0OCA5LjQ0MTggMTcuODE0OEw5LjQ3MTggMTYuNjg0N0MxMC40NjE4IDE3LjAzNDcgMTEuNDUxOCAxNy40MTQ3IDEyLjQ0MTggMTcuODM0N0wxMi40MzE4IDE4LjIzNDdDMTIuMzcxOCAxOS4yMTQ3IDEyLjI3MTggMjAuMjI0OCAxMi4wNTE4IDIxLjI0NDhDMTEuNzkxOCAyMi4yNjQ4IDExLjQ3MTggMjMuMzM0NyAxMC43OTE4IDI0LjMzNDdDMTAuMjYzIDI1LjE0MzkgOS40OTY4IDI1Ljc3OTggOC45NDU1OCAyNi4yMzcyQzguODA4NzcgMjYuMzUwNyA4LjY4NTIgMjYuNDUzMyA4LjU4MTgxIDI2LjU0NDdDOC41NTM1IDI2LjU3NTYgOC41MjYzNiAyNi42MDQ4IDguNTAwNDEgMjYuNjMyOEM4LjMyNDcgMjYuODIxOSA4LjIwNDA5IDI2Ljk1MTggOC4xNTE4IDI3LjEzNDhDOC4wNzE4MSAyNy4zMzQ4IDguMDIxOCAyNy42MjQ3IDguMDExOCAyNy45NzQ3TDguMDAxOCAyOC4wOTQ3VjI4LjE1NDdWMjguMTU0OEM4LjAwMTggMjguMTk0OCA4LjAwMTggMjguMjM0OCA4LjAxMTggMjguMjQ0OEM4LjAzMTggMjguMzI0OCA4LjA2MTggMjguMzk0OCA4LjEwMTggMjguNDU0OEM4LjE4MTggMjguNTk0NyA4LjMwMTggMjguNjk0NyA4LjQ0MTggMjguNzU0N0M4LjUxMTggMjguNzg0NyA4LjU4MTggMjguNzk0NyA4LjY2MTggMjguODA0N0g4LjcyMThIOC44OTE4SDkuMjQxODFIMTAuNjQxOEgxMy40MzE4SDI0LjYwMThIMzAuMTgxOEMzMS4wNTM3IDI4LjgxMiAzMS4yNzY2IDI4LjgxNCAzMS40NDE1IDI4LjcxNzNDMzEuNTA1NSAyOC42Nzk3IDMxLjU2MDggMjguNjI3NCAzMS42NDE4IDI4LjU1NDdDMzEuNzQxOCAyOC40NDQ3IDMxLjgwMTggMjguMzA0NyAzMS44MjE4IDI4LjE1NDdDMzEuODI5MiAyOC4xMjU0IDMxLjgyMDMgMjguMDA0MiAzMS44MTExIDI3Ljg3ODVDMzEuODA3OCAyNy44MzMxIDMxLjgwNDUgMjcuNzg3MiAzMS44MDE4IDI3Ljc0NDhDMzEuODAxOCAyNy41OTM3IDMxLjc3MzYgMjcuNDc3OSAzMS43NDY5IDI3LjM2NzdDMzEuNzQxNyAyNy4zNDY2IDMxLjczNjYgMjcuMzI1NyAzMS43MzE4IDI3LjMwNDdDMzEuNjcxOCAyNy4wMzQ3IDMxLjU3MTggMjYuODg0NyAzMS4zOTE4IDI2LjY0NDdDMzEuMjYyMiAyNi40ODc4IDMxLjA2NzMgMjYuMjk4MyAzMC44NDIzIDI2LjA3OTNDMzAuNzM3NSAyNS45Nzc0IDMwLjYyNjIgMjUuODY5MSAzMC41MTE4IDI1Ljc1NDdDMjkuNzYxOCAyNS4wNDQ3IDI5LjAzMTggMjQuMDI0NyAyOC42MjE4IDIzLjAyNDdDMjguNDQ4MSAyMi42NjI4IDI4LjMzMiAyMi4yOTU2IDI4LjIxNjYgMjEuOTMwOEMyOC4xNzI2IDIxLjc5MTYgMjguMTI4NyAyMS42NTI4IDI4LjA4MTggMjEuNTE0N0MyOC4wNTE4IDIxLjM4OTcgMjguMDIwNSAyMS4yNjQ3IDI3Ljk4OTMgMjEuMTM5N0MyNy44OTU1IDIwLjc2NDcgMjcuODAxOCAyMC4zODk3IDI3Ljc0MTggMjAuMDE0N0MyNy43MTk4IDE5Ljg2MDQgMjcuNjk2NyAxOS43MDUxIDI3LjY3MzYgMTkuNTQ5NEMyNy42MjM0IDE5LjIxMDggMjcuNTcyOSAxOC44NzA0IDI3LjUzMTggMTguNTM0N0wyNy40MTE4IDE3LjA3NDdDMjcuMzczNCAxNi4zMzY2IDI3LjM1ODYgMTUuNTY4OCAyNy4zNDQ3IDE0Ljg0ODhDMjcuMzQwNSAxNC42MzI0IDI3LjMzNjQgMTQuNDIwNCAyNy4zMzE4IDE0LjIxNDdDMjcuMzIxOCAxMy4zMzQ3IDI3LjI2MTggMTIuNDY0NyAyNy4xMzE4IDExLjY1NDdDMjYuODgxOCAxMC4wMDQ3IDI2LjI1MTggOC42ODQ3NSAyNS4xMjE4IDcuNDU0NzVDMjQuNTQxOCA2LjgxNDc1IDI0LjAwMTggNi4yODQ3NSAyMy4zNjE4IDUuOTA0NzVDMjIuNzMxOCA1LjUxNDc1IDIyLjAzMTggNS4yNTQ3NSAyMS4yODE4IDUuMTE0NzVDMTkuNzYxOCA0Ljg1NDc1IDE4LjEwMTggNS4wMTQ3NSAxNi44MjE4IDUuNzA0NzVDMTYuMTUxOCA2LjA1NDc1IDE1LjY0MTggNi40ODQ3NSAxNS4wMjE4IDcuMTM0NzVDMTQuNDMxOCA3Ljc0NDc1IDEzLjkyMTggOC4zNjQ3NCAxMy41NTE4IDkuMDM0NzRDMTIuNzkxOCAxMC4zMzQ3IDEyLjU0MTggMTEuOTc0NyAxMi40ODE4IDEzLjcyNDdMOS40ODE4IDEzLjYyNDdDOS41NDE4IDExLjc0NDcgOS44MDE4IDkuNjM0NzUgMTAuODQxOCA3LjcyNDc1QzExLjM0MTggNi43NzQ3NSAxMi4wMDE4IDUuOTU0NzUgMTIuNjgxOCA1LjIzNDc1QzEzLjMwMTggNC41NzQ3NSAxNC4xNDE4IDMuNzY0NzUgMTUuMDkxOCAzLjIzNDc1QzE3LjAwMTggMi4xMTQ3NSAxOS4yMjE4IDEuODM0NzUgMjEuMjgxOCAyLjA4NDc1QzIzLjM4MTggMi4zMTQ3NSAyNS41MTE4IDMuNDQ0NzQgMjYuODgxOCA0Ljk2NDc0QzI4LjI3MTggNi4zMTQ3NCAyOS41MTE4IDguMjg0NzUgMjkuOTIxOCAxMC4zMTQ4QzMwLjE1MTggMTEuMzE0OCAzMC4yNTE4IDEyLjMwNDcgMzAuMzAxOCAxMy4yNjQ3QzMwLjMyNDIgMTMuNjIzMyAzMC4zMjk5IDEzLjk4MTggMzAuMzM1NSAxNC4zMzYyQzMwLjMzNzQgMTQuNDU2MyAzMC4zMzkzIDE0LjU3NTggMzAuMzQxOCAxNC42OTQ3TDMwLjM3MTggMTYuMDA0N0MzMC40NDE4IDE3LjcyNDcgMzAuNTgxOCAxOS40NjQ3IDMxLjA1MTggMjAuOTY0N0MzMS4yNzE4IDIxLjcyNDcgMzEuNTkxOCAyMi4zNzQ3IDMyLjAwMTggMjIuOTM0N0MzMi4yMTA2IDIzLjIzNTIgMzIuNDY4NiAyMy40ODg5IDMyLjc3OTggMjMuNzk1QzMzLjA3OTggMjQuMDkgMzMuNDI5MyAyNC40MzM3IDMzLjgzMTggMjQuOTE0N1pNMjQuMTgxOCAzNi4zNTQ3QzIzLjAwMTggMzcuNTM0NyAyMS40NTE4IDM4LjEyNDcgMTkuOTAxOCAzOC4xMjQ3QzE4LjM2MTggMzguMTI0NyAxNi44MTE4IDM3LjUzNDcgMTUuNjQxOCAzNi4zNTQ3TDE0LjU4MTggMzUuMjk0N0wxNi43MDE4IDMzLjE3NDdMMTcuNzYxOCAzNC4yMzQ3QzE4Ljk0MTggMzUuNDI0NyAyMC44NzE4IDM1LjQyNDcgMjIuMDYxOCAzNC4yMzQ3TDIzLjEyMTggMzMuMTc0N0wyNS4yNDE4IDM1LjI5NDdMMjQuMTgxOCAzNi4zNTQ3WiIgZmlsbD0iI0U3RTdFNyIvPgo8L3N2Zz4K"
                      })),
                    (0, c.tZ)("div", { className: "noItemLabel--AypyKunLpo" }, a("team_master_password_reset_table_empty_label")),
                    (0, c.tZ)("div", { className: "noItemHelper--c9bX9Yn5sj" }, a("team_master_password_reset_table_empty_helper"))
                  );
            })(),
            (0, c.tZ)(
              G.o,
              {
                isOpen: l.dialogIsVisible && "accept" === l.dialogType,
                onRequestClose: h,
                footer: (0, c.tZ)(d.cNS, {
                  intent: "primary",
                  primaryButtonTitle: a("team_master_password_reset_dialog_accept_button_ok"),
                  primaryButtonOnClick: () => {
                    _() &&
                      l.selectedRequest &&
                      (0, Un.Z8)({
                        login: l.selectedRequest.login,
                        recoveryKey: l.selectedRequest.recoveryClientKey,
                        userPublicKey: l.selectedRequest.publicKey
                      })
                        .then(() => {
                          m(), u(r);
                        })
                        .catch((e) => {
                          console.error(e);
                        });
                  },
                  secondaryButtonTitle: a("team_master_password_reset_dialog_accept_button_cancel"),
                  secondaryButtonOnClick: h
                }),
                title: a("team_master_password_reset_dialog_accept_title")
              },
              l.selectedRequest?.login
                ? (0, c.tZ)(
                    "p",
                    { className: lo },
                    a("team_master_password_reset_dialog_accept_content_bold", { login: l.selectedRequest.login })
                  )
                : null,
              (0, c.tZ)("p", { className: ro }, a("team_master_password_reset_dialog_accept_content"))
            ),
            (0, c.tZ)(
              G.o,
              {
                isOpen: l.dialogIsVisible && "decline" === l.dialogType,
                onRequestClose: x,
                footer: (0, c.tZ)(d.cNS, {
                  intent: "danger",
                  primaryButtonTitle: a("team_master_password_reset_dialog_decline_button_ok"),
                  primaryButtonOnClick: async () => {
                    if ((0, sn.v0)(e.globalState)) {
                      if (l.selectedRequest)
                        try {
                          await (0, Un.VK)({ login: l.selectedRequest.login }), m(), u(r);
                        } catch (e) {
                          console.error(e);
                        }
                    } else s(new Error(en.N));
                  },
                  secondaryButtonTitle: a("team_master_password_reset_dialog_decline_button_cancel"),
                  secondaryButtonOnClick: x
                }),
                title: a("team_master_password_reset_dialog_decline_title")
              },
              l.selectedRequest?.login
                ? (0, c.tZ)(
                    "p",
                    { className: lo },
                    a("team_master_password_reset_dialog_decline_content_bold", { login: null != (t = l.selectedRequest?.login) ? t : "" })
                  )
                : null,
              (0, c.tZ)("p", { className: ro }, a("team_master_password_reset_dialog_decline_content"))
            )
          );
        }, "activity");
      function go({ path: e }) {
        return n.createElement(
          i.GB,
          { path: [e, `${e}/recent`, `${e}/requests`], permission: (e) => e.adminAccess.hasFullAccess },
          n.createElement(
            i.rs,
            null,
            n.createElement(i.l_, { exact: !0, from: `${e}/`, to: `${e}/recent` }),
            n.createElement(i.Vy, { path: `${e}/requests`, component: po, reducer: uo.Z }),
            n.createElement(i.Vy, { path: `${e}/recent`, component: mo })
          )
        );
      }
      a(568030);
      var yo = a(625119);
      a(461238);
      const bo = ({ children: e, onRequestClose: t, footer: a }) => {
          const { translate: s } = (0, p.Z)(),
            i = s("team_directory_sync_key_dialog_title");
          return n.createElement(G.o, { isOpen: !0, showCloseIcon: !0, onRequestClose: t, footer: a, title: i }, e);
        },
        ho = ({ onSubmitKeySuccess: e, onSubmitKeyError: t, checkDirectorySyncKeyRequest: a, handleDismiss: s, handleError: i }) => {
          const { translate: o } = (0, p.Z)(),
            [r, l] = (0, n.useState)({ inputKey: "", isInputKeyInvalid: !1 });
          return (0, y.tZ)(
            bo,
            {
              onRequestClose: s,
              footer: (0, y.tZ)(d.cNS, {
                primaryButtonTitle: o("team_directory_sync_key_dialog_key_input_verify"),
                primaryButtonOnClick: async () => {
                  var n;
                  const { publicKey: s = "" } = null != (n = a()) ? n : {},
                    o = r.inputKey.replace(/\s/g, "").replace(/\n/g, "");
                  var c;
                  o === s
                    ? (() => {
                        const e = a();
                        return e ? (0, Un.QV)(e, "validated") : Promise.reject(new Error("missing params"));
                      })()
                        .then(() => {
                          e();
                        })
                        .catch(i)
                    : (c = o).length % 4 == 0 && atob(c).includes("</RSAKeyValue>")
                    ? t()
                    : l((e) => ({ ...e, isInputKeyInvalid: !0 }));
                },
                secondaryButtonTitle: o("team_directory_sync_key_dialog_key_input_postpone"),
                secondaryButtonOnClick: s,
                intent: "primary"
              })
            },
            (0, y.tZ)(
              y.nv,
              { sx: { marginBottom: "2em" }, color: "ds.text.neutral.quiet" },
              o.markup("team_directory_sync_key_dialog_key_input_message_markup")
            ),
            (0, y.tZ)(y.Kx, {
              placeholder: o("team_directory_sync_key_dialog_key_input_placeholder"),
              onChange: ({ target: { value: e } }) => {
                l({ inputKey: e, isInputKeyInvalid: !1 });
              },
              value: r.inputKey,
              feedback: r.isInputKeyInvalid ? { text: o("team_directory_sync_key_dialog_key_input_invalid") } : void 0,
              error: r.isInputKeyInvalid
            })
          );
        };
      var xo = (function (e) {
        return (
          (e[(e.Initial = 0)] = "Initial"),
          (e[(e.KeyInput = 1)] = "KeyInput"),
          (e[(e.KeySuccess = 2)] = "KeySuccess"),
          (e[(e.KeyError = 3)] = "KeyError"),
          (e[(e.KeySuspended = 4)] = "KeySuspended"),
          e
        );
      })(xo || {});
      const So = (e) => {
          var t;
          const { translate: a } = (0, p.Z)(),
            [s, i] = (0, n.useState)(xo.Initial),
            o = () => e.lee.globalState.directorySyncKey.checkDirectorySyncKeyRequest,
            r = () => {
              e.lee.dispatchGlobal((0, yo.M2)());
            },
            l = () => {
              e.lee.dispatchGlobal((0, yo.HK)());
            },
            c = () => {
              e.lee.dispatchGlobal((0, yo.er)());
            },
            u = () => {
              const t = "directorySyncKeyValidationError",
                a = d.BLW.ERROR,
                n = {
                  key: t,
                  level: a,
                  textKey: "team_directory_sync_key_error_markup",
                  handleClose: () => e.lee.dispatchGlobal((0, Ei.FV)(t))
                };
              e.lee.dispatchGlobal((0, Ei.wN)(n)), l();
            },
            _ = () => {
              i(xo.KeyInput);
            },
            m = () => {
              (() => {
                const e = o();
                return e ? (0, Un.QV)(e, "rejected") : Promise.reject(new Error("missing params"));
              })()
                .then(() => {
                  i(xo.KeySuspended), c();
                })
                .catch(u);
            },
            g = () => {
              i(xo.KeySuccess), c();
            },
            b = () => {
              i(xo.KeyError);
            };
          switch (s) {
            case xo.Initial:
              return (0, y.tZ)(
                bo,
                {
                  onRequestClose: r,
                  footer: (0, y.tZ)(d.cNS, {
                    primaryButtonTitle: a("team_directory_sync_key_dialog_initial_continue"),
                    primaryButtonOnClick: _,
                    secondaryButtonTitle: a("team_directory_sync_key_dialog_initial_postpone"),
                    secondaryButtonOnClick: r,
                    intent: "primary"
                  })
                },
                (0, y.tZ)(y.nv, { color: "ds.text.neutral.quiet" }, a.markup("team_directory_sync_key_dialog_initial_message_markup"))
              );
            case xo.KeyInput:
              return (
                t ||
                (0, y.tZ)(ho, {
                  onSubmitKeySuccess: g,
                  onSubmitKeyError: b,
                  checkDirectorySyncKeyRequest: o,
                  handleDismiss: r,
                  handleError: u
                })
              );
            case xo.KeySuccess:
              return (0, y.tZ)(
                bo,
                {
                  onRequestClose: l,
                  footer: (0, y.tZ)(d.cNS, {
                    secondaryButtonTitle: a("team_directory_sync_key_dialog_key_success_close"),
                    secondaryButtonOnClick: l
                  })
                },
                (0, y.tZ)(
                  d.Ejs,
                  { gap: "8px" },
                  (0, y.tZ)(y.JO, {
                    name: "FeedbackSuccessOutlined",
                    size: "xlarge",
                    color: "ds.text.positive.quiet",
                    sx: { width: "64px", height: "64px" }
                  }),
                  (0, y.tZ)(
                    "div",
                    null,
                    (0, y.tZ)(y.X6, { as: "h1" }, a("team_directory_sync_key_dialog_key_success_header")),
                    (0, y.tZ)(y.nv, null, a("team_directory_sync_key_dialog_key_success_message"))
                  )
                )
              );
            case xo.KeyError:
              return (0, y.tZ)(
                bo,
                {
                  onRequestClose: l,
                  footer: (0, y.tZ)(d.cNS, {
                    primaryButtonTitle: a("team_directory_sync_key_dialog_key_error_validate"),
                    primaryButtonOnClick: m,
                    secondaryButtonTitle: a("team_directory_sync_key_dialog_key_error_retry"),
                    secondaryButtonOnClick: _,
                    intent: "danger"
                  })
                },
                (0, y.tZ)(
                  d.Ejs,
                  { gap: "8px" },
                  (0, y.tZ)(y.JO, {
                    name: "FeedbackFailOutlined",
                    size: "xlarge",
                    color: "ds.text.danger.quiet",
                    sx: { width: "64px", height: "64px" }
                  }),
                  (0, y.tZ)(
                    "div",
                    null,
                    (0, y.tZ)(y.X6, { as: "h1" }, a("team_directory_sync_key_dialog_key_error_header")),
                    (0, y.tZ)(y.nv, { color: "ds.text.neutral.quiet" }, a("team_directory_sync_key_dialog_key_error_message"))
                  )
                )
              );
            case xo.KeySuspended:
              return (0, y.tZ)(
                bo,
                {
                  onRequestClose: l,
                  footer: (0, y.tZ)(d.cNS, {
                    secondaryButtonTitle: a("team_directory_sync_key_dialog_key_suspended_close"),
                    secondaryButtonOnClick: l
                  })
                },
                (0, y.tZ)(y.nv, { color: "ds.text.neutral.quiet" }, a.markup("team_directory_sync_key_dialog_key_suspended_message_markup"))
              );
          }
        },
        vo = () => {
          var e;
          const { translate: t } = (0, p.Z)(),
            { queue: a, popAlertFromQueue: s } = $(),
            i = () => {
              s();
            },
            [o] = a;
          return o
            ? n.createElement(
                G.o,
                {
                  isOpen: !0,
                  onRequestClose: i,
                  footer: n.createElement(d.cNS, {
                    secondaryButtonTitle: null != (e = o.okButtonLabel) ? e : t("_common_alert_dismiss_button"),
                    secondaryButtonOnClick: i
                  }),
                  title: o.title
                },
                n.createElement("div", null, o.message)
              )
            : null;
        };
      var fo = a(263272);
      const Co = ({
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
            e.dispatchGlobal((0, Ei.FV)(t)), l && ea.C.markNotificationAsSeen(l);
          }
        };
        s &&
          (c.handleLinkClick = (a) => {
            a.preventDefault(), (0, z.Tx)(s) ? (0, z.Yk)(s, { type: "", action: "" }) : (e.dispatchGlobal((0, Ei.FV)(t)), (0, i.uX)(s));
          }),
          o &&
            (c.handleButtonClick = () => {
              o();
            }),
          e.dispatchGlobal((0, Ei.wN)(c));
      };
      var Eo = a(825224);
      const Zo = "TRIAL_PERIOD_0_15D",
        To = "GRACE_PERIOD_PAID",
        No = "ENABLE_RECOVERY",
        Do = "ADD_ADMINS",
        Mo = "TAC_IN_EXTENSION",
        Io = async ({
          lee: e,
          teamStatus: t,
          showTacInExtension: a,
          translate: n,
          setIsVaultNavigationModalOpen: s,
          isTacGetStartedFFEnabled: i
        }) => {
          const o = (({ lee: e, teamStatus: t, showTacInExtension: a }) => {
            const n = new Set();
            a && n.add(Mo),
              t.isGracePeriod && !t.isFreeTrial && n.add(To),
              t.isFreeTrial &&
                !t.isGracePeriod &&
                ((0, Eo.PY)(t.nextBillingDetails.dateUnix) < 15 ? n.add("TRIAL_PERIOD_15_30D") : n.add(Zo)),
              t.info.recoveryEnabled || t.info.ssoEnabled || n.add(No);
            const s = (0, f.ev)(e.globalState) || 0,
              i = e.carbon.spaceData.spaces.find((e) => s === +e.teamId);
            return i && i.details.teamAdmins.length <= 1 && n.add(Do), n;
          })({ lee: e, teamStatus: t, showTacInExtension: a });
          e.dispatchGlobal((0, Ei.L1)());
          const r = e.permission.adminAccess.hasFullAccess,
            c = await ea.C.getNotificationStatus();
          o.has(Mo) && c.tacGetTheExtensionBanner === l.NotificationStatus.Unseen && fo.isSafari(),
            o.has(To) &&
              ((e) => {
                Co({
                  lee: e,
                  notificationKey: "team_notifications_renewal_grace_period_markup",
                  level: d.BLW.ERROR,
                  redirectPath: e.routes.teamAccountRoutePath
                });
              })(e),
            r &&
              (o.has(No) &&
                c.tacEnableAccountRecoveryBanner === l.NotificationStatus.Unseen &&
                !i &&
                ((e) => {
                  const t = `${e.routes.teamSettingsRoutePath}/master-password-policies`;
                  Co({
                    lee: e,
                    notificationKey: "team_notifications_enable_account_recovery_markup",
                    level: d.BLW.WARNING,
                    redirectPath: t,
                    notificationName: l.NotificationName.TacEnableAccountRecoveryBanner
                  });
                })(e),
              !o.has(Do) ||
                c.tacOnlyOneAdminBanner !== l.NotificationStatus.Unseen ||
                fo.isSafari() ||
                i ||
                ((e) => {
                  const t = e.routes.teamAccountRoutePath;
                  Co({
                    lee: e,
                    notificationKey: "team_notifications_add_admins_markup",
                    level: d.BLW.WARNING,
                    redirectPath: t,
                    notificationName: l.NotificationName.TacOnlyOneAdminBanner
                  });
                })(e)),
            o.has(Zo) &&
              (({ lee: e, spaceTier: t, translate: a }) => {
                const n = (0, k.Uo)({ tier: t, translate: a });
                Co({
                  lee: e,
                  notificationKey: "team_notifications_free_trial_D0_T15_markup",
                  keyParams: { planTier: n },
                  level: d.BLW.SUCCESS,
                  redirectPath: e.routes.teamAccountRoutePath
                });
              })({ lee: e, spaceTier: t.planTier, translate: n });
        };
      var Ao = a(760946);
      const wo = { notification: "notification--JlZi_NwcwA" },
        ko = ({ level: e = d.BLW.SUCCESS, text: t, buttonTextKey: a, onClose: s, onLinkClick: i, onClickButton: o }) => {
          const r = n.useRef(null),
            { translate: l } = (0, p.Z)(),
            c = (0, n.useCallback)(
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
                e.addEventListener("click", c),
                () => {
                  e.removeEventListener("click", c);
                }
              );
            }, [c]),
            n.createElement(
              "div",
              { className: wo.notification },
              n.createElement(
                d.bZj,
                {
                  severity: e,
                  size: d.k3y.SMALL,
                  showIcon: !0,
                  closeIconName: l("_common_alert_dismiss_button"),
                  onClose: s,
                  onAction: o || void 0,
                  actionText: a || void 0
                },
                n.createElement("span", { ref: r, className: wo.text }, t)
              )
            )
          );
        },
        Oo = ({ lee: e }) => {
          var t;
          const { translate: a } = (0, p.Z)(),
            s = null == (t = (0, ve.o)("onboarding_web_tacgetstarted")) || t,
            { setIsVaultNavigationModalOpen: i } = (0, n.useContext)(he),
            [o, r] = (0, n.useState)([]),
            l = (0, n.useCallback)((t) => {
              t &&
                Io({
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
                              level: d.BLW.WARNING,
                              textKey: "team_directory_sync_key_postponed_notif_markup",
                              handleLinkClick: (t) => {
                                t.preventDefault(), e.dispatchGlobal((0, yo.b3)());
                              },
                              handleClose: () => e.dispatchGlobal((0, yo.vg)())
                            }
                          ]
                        : [];
                    })(e),
                    n = (function (e) {
                      const t = e.permission.adminAccess.hasFullAccess,
                        a = e.globalState.ieNotifications;
                      return t && fo.isInternetExplorer() && a.displayIeDropNotification
                        ? [
                            {
                              key: "directorySyncPosponedValidation",
                              level: d.BLW.WARNING,
                              textKey: "wac_ie_drop_message_markup",
                              handleClose: () => e.dispatchGlobal((0, Ao.w)())
                            }
                          ]
                        : [];
                    })(e);
                  return [...t, ...a, ...n];
                })()
              );
            }, [e.globalState.ieNotifications, e.globalState.directorySyncKey, e.globalState.notifications.list]),
            (0, n.useEffect)(() => {
              const t = (0, sn.v0)(e.globalState);
              t &&
                new rn.Z()
                  .status({ auth: t })
                  .then((e) => {
                    if (200 !== e.code) return;
                    const {
                      content: { team: t }
                    } = e;
                    l(t);
                  })
                  .catch();
            }, [e.globalState.user.session.uki]),
            (0, y.tZ)(
              "div",
              { className: "notifications--SCKfre7VSM" },
              o.map((e) =>
                (0, y.tZ)(ko, {
                  key: e.key,
                  level: e.level,
                  text: (0, sa.t5)(e.textKey) ? a.markup(e.textKey, e.keyParams) : a(e.textKey),
                  buttonTextKey: e.buttonTextKey ? a(e.buttonTextKey) : void 0,
                  onClose: e.handleClose,
                  onLinkClick: e.handleLinkClick,
                  onClickButton: e.handleButtonClick
                })
              )
            )
          );
        };
      var Lo = a(821002),
        zo = a(352116);
      var Ro, jo;
      const Po = (e) => {
        const [t, a] = n.useState(!1);
        (0, Lo._)();
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
                V,
                { globalReportError: e.lee.reportError },
                n.createElement(
                  zo.qc,
                  { lee: e.lee },
                  n.createElement(
                    we,
                    null,
                    n.createElement(
                      xe,
                      null,
                      n.createElement(
                        "div",
                        null,
                        e.children,
                        jo || (jo = n.createElement(vo, null)),
                        n.createElement(Oo, { lee: e.lee }),
                        e.lee.globalState.directorySyncKey.displayDialog ? n.createElement(So, { lee: e.lee }) : null,
                        n.createElement("div", { className: "alertPopup--S9uF3SnYTj", id: "alert-popup-portal" })
                      )
                    )
                  )
                )
              )
            : Ro || (Ro = n.createElement("div", null))
        );
      };
      var Uo = a(481030);
      const Bo = 1589932800;
      let Go = (function (e) {
          return (e[(e.AllTime = 0)] = "AllTime"), (e[(e.Last7Days = 1)] = "Last7Days"), (e[(e.Last30Days = 2)] = "Last30Days"), e;
        })({}),
        Fo = (function (e) {
          return (
            (e.Loading = "loading"),
            (e.Start = "start"),
            (e.Pending = "pending"),
            (e.Validated = "validated"),
            (e.Deactivating = "deactivating"),
            e
          );
        })({});
      const qo = () => {
          const [e, t] = (0, n.useState)({ domain: null, status: Fo.Loading }),
            [a, s] = (0, n.useState)([]),
            i = (0, n.useCallback)(async () => {
              try {
                const e = await ea.C.getTeamDomains();
                if (e.success && e.domains.length) {
                  const a = e.domains.filter((e) => e.status === l.DomainStatus.pending),
                    n = e.domains.filter((e) => e.status === l.DomainStatus.valid);
                  if (n.length) {
                    s(n);
                    const e = n[0];
                    t({ domain: e, status: Fo.Validated });
                  } else if (a.length) {
                    const e = a[a.length - 1];
                    t({ domain: e, status: Fo.Pending });
                  } else t({ domain: e.domains[e.domains.length - 1], status: Fo.Pending });
                } else t({ domain: null, status: Fo.Start });
              } catch (e) {
                t({ domain: null, status: Fo.Start });
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
                  t((e) => ({ domain: e.domain, status: Fo.Deactivating }));
                  try {
                    (await ea.C.deactivateTeamDomain({ domain: e.domain.name })).success ? t({ domain: null, status: Fo.Start }) : i();
                  } catch (e) {
                    i();
                  }
                }
              },
              tryVerifyDomain: async () => {
                await ea.C.completeTeamDomainRegistration(), await i();
              },
              selectVerifiedDomain: (e) => {
                t({ domain: e, status: Fo.Validated });
              }
            }
          );
        },
        Vo = ({ scopedToPage: e = !1 }) =>
          (0, c.tZ)(
            d.Ejs,
            {
              justifyContent: "center",
              alignItems: "center",
              sx: {
                backgroundColor: "rgba(245, 247, 247, 0.7)",
                ...(e ? {} : { position: "absolute", top: 0, left: 0, right: 0, height: "100%" })
              }
            },
            (0, c.tZ)(Rs.Z, { containerStyle: { marginTop: "-90px", ...(e ? { position: "relative", height: "90vh" } : {}) } })
          );
      var $o = a(754505),
        Wo = a(109184);
      const Ho = ({ showPasswordHealthScore: e, securityIndex: t, shieldSize: a }) => {
          let s = "";
          return e
            ? ((s = t >= 80 ? "ds.text.positive.quiet" : t >= 40 ? "ds.text.warning.quiet" : "ds.text.danger.quiet"),
              t >= 60
                ? n.createElement(n.Fragment, null, n.createElement(d.FjK, { size: a, color: s, viewBox: "5 5 40 40" }), `${(0, Wo.E)(t)}%`)
                : n.createElement(
                    n.Fragment,
                    null,
                    n.createElement(d.sQG, { size: a, color: s, viewBox: "5 5 40 40" }),
                    `${(0, Wo.E)(t)}%`
                  ))
            : ((s = "ds.text.brand.quiet"), n.createElement(n.Fragment, null, n.createElement(d.P2E, { size: a, color: s }), "-"));
        },
        Ko = "value--w9XKkttPDT",
        Yo = "link--nWXIzseKub";
      var Qo;
      const Xo = { HEADER: { display: "flex", marginBottom: "8px" }, FOOTER: { marginTop: "16px", lineHeight: "1", fontSize: "16px" } },
        Jo = ({ title: e }) =>
          (0, y.tZ)(
            d.ua7,
            { sx: { fontSize: 2, maxWidth: "180px" }, placement: "bottom", content: e },
            Qo || (Qo = (0, y.tZ)(d.uMt, { size: 13, tabIndex: 0, color: "ds.text.neutral.quiet" }))
          ),
        er = (e) => (0, y.tZ)(y.X6, { as: "h1", color: "ds.text.neutral.quiet", textStyle: "ds.title.supporting.small" }, e),
        tr = ({ children: e }) =>
          (0, y.tZ)(
            d.Zbd,
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
        ar = ({ passwordHealth: e, seats: t, passwordHealthHistoryEmpty: a }) => {
          const { translate: n } = (0, p.Z)(),
            { routes: s } = (0, mi.Xo)(),
            { compromised: o, securityIndex: r } = e,
            l = `${t.used}/${t.provisioned}`;
          return (0, y.tZ)(
            "section",
            { className: "cardsRow--UeIGdGJnGY", sx: { display: "flex", justifyContent: "flex-start" } },
            (0, y.tZ)(
              tr,
              null,
              (0, y.tZ)(
                "header",
                { sx: Xo.HEADER },
                er(n("team_dashboard_card_health_score")),
                (0, y.tZ)(Jo, { title: n("team_dashboard_card_health_score_info") })
              ),
              (0, y.tZ)("div", { className: Ko }, (0, y.tZ)(Ho, { showPasswordHealthScore: !a, securityIndex: r, shieldSize: 32 }))
            ),
            (0, y.tZ)(
              tr,
              null,
              (0, y.tZ)(
                "header",
                { sx: Xo.HEADER },
                er(n("team_dashboard_card_compromised")),
                (0, y.tZ)(Jo, { title: n("team_dashboard_card_compromised_info") })
              ),
              (0, y.tZ)("div", { className: w()(Ko, o ? "compromised--m8LmAYo_e5" : void 0) }, o),
              o
                ? (0, y.tZ)(
                    "footer",
                    { sx: Xo.FOOTER },
                    (0, y.tZ)(i.rU, { className: Yo, to: s.teamMembersRoutePath }, n("team_dashboard_card_compromised_details_link"))
                  )
                : null
            ),
            (0, y.tZ)(
              tr,
              null,
              (0, y.tZ)(
                "header",
                { sx: Xo.HEADER },
                er(n("team_dashboard_card_seats_taken")),
                (0, y.tZ)(Jo, { title: n("team_dashboard_card_seats_taken_info") })
              ),
              (0, y.tZ)("div", { className: w()(Ko, { "fontSizeBigger--f83OiWuf4K": l.length >= 8 }) }, l),
              (0, y.tZ)(
                "footer",
                { sx: Xo.FOOTER },
                (0, y.tZ)(i.rU, { className: Yo, to: s.teamAccountRoutePath }, n("team_dashboard_card_seats_buy_link"))
              )
            ),
            (0, y.tZ)(
              tr,
              null,
              (0, y.tZ)(
                "header",
                { sx: Xo.HEADER },
                er(n("team_dashboard_card_pending_invitations")),
                (0, y.tZ)(Jo, { title: n("team_dashboard_card_pending_invitations_info") })
              ),
              (0, y.tZ)("div", { className: Ko }, t.pending),
              (0, y.tZ)(
                "footer",
                { sx: Xo.FOOTER },
                (0, y.tZ)(
                  i.rU,
                  {
                    className: Yo,
                    to: {
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
      var nr = a(617615),
        sr = a(271327),
        ir = a(101513),
        or = a(264441),
        rr = a(181037),
        lr = a(960377),
        cr = a(433117),
        dr = a(328290),
        ur = a(440934),
        _r = a(142094),
        mr = a(151796),
        pr = a(93443);
      const gr = (e, t, a) => {
          const n = [];
          switch (e) {
            case Go.AllTime: {
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
            case Go.Last7Days:
              t.forEach((e) => {
                n.push(e.date);
              });
              break;
            case Go.Last30Days:
              t.forEach((e) => {
                const { date: t } = e;
                0 === new Date(t).getDay() && n.push(t);
              });
              break;
            default:
              (0, mr.U)(e);
          }
          return n;
        },
        yr = "legendItem--MoxC6xF4tG",
        br = "legendIcon--p8Emm90xE4",
        hr = ({ active: e, label: t, payload: a }) => {
          const { translate: s } = (0, p.Z)();
          if (!e) return null;
          const i = a ? `${(0, Wo.E)(a[0]?.value)}%` : null;
          return n.createElement(
            "div",
            { className: "customTooltipContainer--iAM2rWgGzw" },
            n.createElement("time", { className: "date--JuYmIy6PnQ" }, t),
            n.createElement(
              "div",
              { className: "score--RRdFFcOQCh" },
              n.createElement(
                "div",
                { className: yr },
                n.createElement("div", { className: br }),
                n.createElement("p", null, s("team_dashboard_graph_score_hover_legend"))
              ),
              n.createElement("p", null, i)
            )
          );
        };
      var xr;
      const Sr = ({ history: e, passwordHealthHistoryEmpty: t }) => {
        const [a, s] = (0, n.useState)(Go.AllTime),
          i = ((e) => {
            const { length: t } = e;
            if (t <= 2) return e;
            const a = (0, cr.Z)(e[0].date),
              n = (0, cr.Z)(e[t - 1].date),
              s = (0, dr.Z)(n, a);
            if (s === t - 1) return e;
            const i = [];
            let o = 0,
              r = e[o].securityIndex,
              l = a,
              c = a;
            for (let t = 0; t <= s; t++)
              (0, ur.Z)(c, l)
                ? (i.push(e[o]), (r = e[o].securityIndex), o++, (l = (0, cr.Z)(e[o]?.date)))
                : i.push({ date: c.toISOString().slice(0, 10), securityIndex: r }),
                (c = (0, _r.Z)(c, 1));
            return i;
          })(e),
          o = ((e, t) => {
            switch (e) {
              case Go.AllTime:
                return t;
              case Go.Last7Days:
                return t.slice(t.length - 7, t.length);
              case Go.Last30Days:
                return t.slice(t.length - 30, t.length);
              default:
                (0, mr.U)(e);
            }
          })(a, i),
          { translate: r } = (0, p.Z)();
        return (0, y.tZ)(
          n.Fragment,
          null,
          (0, y.tZ)(
            "section",
            { className: w()("topSection--nM0XDipPte", { "addMarginTop--fLzJVO2qx1": t }) },
            (0, y.tZ)(
              "div",
              { className: yr },
              (0, y.tZ)("div", { className: br }),
              (0, y.tZ)(
                y.nv,
                { textStyle: "ds.body.helper.regular", color: "ds.text.neutral.quiet" },
                r("team_dashboard_graph_score_legend")
              )
            ),
            (0, y.tZ)(
              d.G8v,
              null,
              i.length > 7
                ? (0, y.tZ)(d.yPU, {
                    label: r("team_dashboard_graph_7_days_button"),
                    selected: a === Go.Last7Days,
                    onClick: () => {
                      s(Go.Last7Days);
                    },
                    size: "small"
                  })
                : null,
              i.length > 30
                ? (0, y.tZ)(d.yPU, {
                    label: r("team_dashboard_graph_30_days_button"),
                    selected: a === Go.Last30Days,
                    onClick: () => {
                      s(Go.Last30Days);
                    },
                    size: "small"
                  })
                : null,
              (0, y.tZ)(d.yPU, {
                label: r("team_dashboard_graph_all_time_button"),
                selected: a === Go.AllTime,
                onClick: () => {
                  i.length <= 7 || s(Go.AllTime);
                },
                size: "small"
              })
            )
          ),
          (0, y.tZ)(
            "section",
            { sx: { width: "100%", height: "100px", flexGrow: 1 } },
            (0, y.tZ)(
              nr.h,
              { sx: { height: "100%", width: "100%" } },
              (0, y.tZ)(
                sr.w,
                { data: t ? [] : o, sx: { position: "relative", right: "18px" } },
                xr || (xr = (0, y.tZ)(ir.q, { vertical: !1 })),
                (0, y.tZ)(or.B, { domain: [0, 100], tickFormatter: (e) => `${e}%`, fontSize: "small" }),
                (({ historyToDisplay: e, passwordHealthHistoryEmpty: t, view: a }) => {
                  const { translate: s } = (0, p.Z)(),
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
                    gr(a, e, i),
                    n.createElement(pr.K, {
                      dataKey: "date",
                      ticks: t ? [] : gr(a, e, i),
                      tickSize: 4,
                      tickFormatter: t
                        ? () => ""
                        : (e) =>
                            ((e, t, a, n) => {
                              const s = t === Go.AllTime && a >= 5,
                                i = new Date(e),
                                o = n.shortDate(i, s ? sa._T.MMM_YYYY : sa._T.L_M_D),
                                r = n.shortDate(i, sa._T.MMMM);
                              if (s) return o === r || o.endsWith(".") ? o : `${o}.`;
                              const [l, c] = o.split(" ");
                              return l === r ? o : `${l}. ${c}`;
                            })(e, a, i, s),
                      fontSize: "small"
                    })
                  );
                })({ historyToDisplay: o, passwordHealthHistoryEmpty: t, view: a }),
                (0, y.tZ)(rr.u, {
                  content: (e) => {
                    const t = r.shortDate((0, cr.Z)(e.label), { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
                    return (0, y.tZ)(hr, { ...e, label: t });
                  },
                  animationDuration: 500,
                  animationEasing: "ease-out",
                  cursor: !t
                }),
                (0, y.tZ)(lr.x, {
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
      var vr = a(979869);
      const fr = ({ isLoading: e, history: t, creationDateUnix: a, passwordHealthHistoryEmpty: n }) => {
          const { translate: s } = (0, p.Z)(),
            i = (0, vr.I)(),
            o = i.status === je.rq.Success && !i.isDisabled,
            r = !e && n,
            l = !e && !n && a < Bo;
          return (0, y.tZ)(
            "section",
            { sx: { padding: "3%", flexGrow: 1, display: "flex", flexDirection: "column" } },
            (0, y.tZ)(
              y.X6,
              { as: "h5", color: "ds.text.neutral.catchy", textStyle: "ds.title.section.medium", sx: { marginBottom: "1%" } },
              s("team_dashboard_graph_heading")
            ),
            r
              ? (0, y.tZ)(y.ke, {
                  size: "small",
                  sx: { marginBottom: "11px" },
                  title: s(o ? "team_dashboard_graph_not_enough_data_warning" : "team_dashboard_graph_not_enough_data_warning_min", {
                    minPasswords: 5
                  })
                })
              : null,
            l
              ? (0, y.tZ)(y.ke, { size: "small", sx: { marginBottom: "11px" }, title: s("team_dashboard_graph_no_old_data_warning") })
              : null,
            (0, y.tZ)(Sr, { history: t, passwordHealthHistoryEmpty: n })
          );
        },
        Cr = ({ title: e, value: t, color: a }) =>
          (0, y.tZ)(
            "div",
            { sx: { marginRight: "8px", minWidth: "70px" } },
            (0, y.tZ)(
              "header",
              null,
              (0, y.tZ)(y.nv, { as: "h2", color: "ds.text.neutral.quiet", textStyle: "ds.body.helper.regular" }, e)
            ),
            (0, y.tZ)("div", { sx: { fontSize: "x-large", fontWeight: "bold", color: null != a ? a : "ds.text.neutral.standard" } }, t)
          ),
        Er = ({ compromised: e, passwords: t, reused: a, safe: n, securityIndex: s, weak: i, passwordHealthHistoryEmpty: o }) => {
          const { translate: r } = (0, p.Z)();
          return (0, y.tZ)(
            "section",
            { sx: { borderTop: "1px solid", borderTopColor: "ds.border.neutral.quiet.idle", display: "flex", padding: "3% 2%" } },
            (0, y.tZ)(
              "div",
              { sx: { width: "240px", padding: "0 24px", borderRight: "1px solid", borderRightColor: "ds.border.neutral.quiet.idle" } },
              (0, y.tZ)(
                "header",
                null,
                (0, y.tZ)(
                  y.nv,
                  { as: "h2", color: "ds.text.neutral.quiet", textStyle: "ds.body.helper.regular" },
                  r("team_dashboard_password_health_breakdown_score")
                )
              ),
              (0, y.tZ)(
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
                (0, y.tZ)(Ho, { showPasswordHealthScore: !o, securityIndex: s, shieldSize: 20 })
              )
            ),
            (0, y.tZ)(
              "div",
              { sx: { display: "flex", justifyContent: "space-between", padding: "0 24px", width: "100%" } },
              (0, y.tZ)(Cr, { title: r("team_dashboard_password_health_breakdown_total"), value: t }),
              (0, y.tZ)(Cr, {
                title: r("team_dashboard_password_health_breakdown_safe"),
                value: n,
                color: n ? "ds.text.positive.quiet" : void 0
              }),
              (0, y.tZ)(Cr, {
                title: r("team_dashboard_password_health_breakdown_weak"),
                value: i,
                color: i ? "ds.text.warning.quiet" : void 0
              }),
              (0, y.tZ)(Cr, {
                title: r("team_dashboard_password_health_breakdown_reused"),
                value: a,
                color: a ? "ds.text.warning.quiet" : void 0
              }),
              (0, y.tZ)(Cr, {
                title: r("team_dashboard_password_health_breakdown_compromised"),
                value: e,
                color: e ? "ds.text.danger.quiet" : void 0
              })
            )
          );
        },
        Zr = ({ isLoading: e, report: t, passwordHealthHistoryEmpty: a, creationDateUnix: n }) =>
          (0, c.tZ)(
            d.Zbd,
            {
              sx: {
                height: "100%",
                display: "flex",
                flexDirection: "column",
                backgroundColor: "ds.container.agnostic.neutral.supershy",
                borderColor: "ds.border.neutral.quiet.idle"
              }
            },
            (0, c.tZ)(fr, { isLoading: e, history: t.passwordHealthHistory, passwordHealthHistoryEmpty: a, creationDateUnix: n }),
            (0, c.tZ)(Er, { ...t.passwordHealth, passwordHealthHistoryEmpty: a })
          ),
        Tr = "https://support.dashlane.com/hc/articles/4507132108946",
        Nr = {
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
        Dr = ({ count: e, labelAndTooltip: t, primaryColor: a, secondaryColor: n }) => {
          const { translate: s } = (0, p.Z)();
          return (0, y.tZ)(
            d.Ejs,
            { gap: "6px", sx: { margin: "16px 0" } },
            (0, y.tZ)(d.X6q, { size: "x-small", color: a, sx: { width: "44px" } }, e),
            (0, y.tZ)(
              d.ua7,
              { sx: { fontSize: 2, maxWidth: "180px" }, placement: "top", content: s(t.TOOLTIP) },
              (0, y.tZ)(
                d.nvN,
                {
                  "aria-label": s(t.LABEL),
                  size: "small",
                  sx: { minWidth: "calc(100% - 70px)", width: "min-content" },
                  color: null != n ? n : a
                },
                s(t.LABEL)
              ),
              (0, y.tZ)(d.uMt, { size: 13, tabIndex: 0, color: null != n ? n : a })
            )
          );
        },
        Mr = ({ children: e }) =>
          (0, y.tZ)(
            d.Zbd,
            {
              sx: {
                minHeight: "418px",
                width: "282px",
                backgroundColor: "ds.container.agnostic.neutral.supershy",
                borderColor: "ds.border.neutral.quiet.idle"
              }
            },
            (0, y.tZ)(
              d.Ejs,
              {
                sx: { minHeight: "418px", padding: "20px" },
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "start"
              },
              e
            )
          ),
        Ir = ({ text: e, subtext: t, imgSrc: a }) =>
          (0, y.tZ)(
            n.Fragment,
            null,
            (0, y.tZ)("img", { src: a }),
            (0, y.tZ)(d.nvN, { size: "medium", bold: !0, sx: { marginBottom: "8px" } }, e),
            (0, y.tZ)(d.nvN, { size: "small", color: d.colors.grey00 }, t)
          ),
        Ar = ({ domain: e }) =>
          (0, y.tZ)(
            d.nvN,
            {
              size: "x-small",
              bold: !0,
              sx: {
                padding: "4px 8px",
                backgroundColor: `${d.colors.dashGreen06}`,
                borderRadius: "4px",
                width: "fit-content",
                height: "24px",
                marginBottom: "34px"
              }
            },
            e
          ),
        wr = ({ newLeaksCount: e, newLeaksAffectedEmailCount: t }) => {
          const { translate: a } = (0, p.Z)(),
            { setHasNewBreaches: s } = ke();
          (0, n.useEffect)(() => {
            e > 0 && s(!0);
          }, [e, s]);
          const i = e > 1 ? Nr.NEW_INCIDENTS_NOTIFICATION_MSG.MANY : Nr.NEW_INCIDENTS_NOTIFICATION_MSG.ONE;
          return e > 0
            ? (0, y.tZ)(
                d.Ejs,
                {
                  flexDirection: "row",
                  sx: { backgroundColor: d.colors.pink05, borderRadius: "4px", padding: "5px 8px", marginTop: "25px" }
                },
                (0, y.tZ)(
                  d.nvN,
                  { size: "small", color: d.colors.red00, sx: { width: "calc(100% - 5px)" } },
                  a(i, { numIncidents: e, count: t })
                ),
                (0, y.tZ)(d.P_k, { dot: !0, ariaLabel: a(Nr.TEAM_NEW_LABEL) })
              )
            : null;
        },
        kr = ({ domainInfo: e }) => {
          const t = e.leaksCount,
            a = e.emailsImpactedCount,
            s = e.emailsImpactedCount - e.teamMembersImpactedCount;
          return (0, y.tZ)(
            n.Fragment,
            null,
            (0, y.tZ)(Dr, {
              count: t,
              labelAndTooltip: Nr.SECURITY_INCIDENTS,
              primaryColor: d.colors.dashGreen00,
              secondaryColor: d.colors.dashGreen01
            }),
            (0, y.tZ)(Dr, {
              count: a,
              labelAndTooltip: Nr.EMAILS_AFFECTED,
              primaryColor: d.colors.dashGreen00,
              secondaryColor: d.colors.dashGreen01
            }),
            (0, y.tZ)(Dr, {
              count: s,
              labelAndTooltip: Nr.SUGGESTED_INVITATION,
              primaryColor: d.colors.dashGreen00,
              secondaryColor: d.colors.dashGreen01
            }),
            (0, y.tZ)(wr, { newLeaksCount: e.newLeaksCount, newLeaksAffectedEmailCount: e.newLeaksAffectedEmailCount })
          );
        },
        Or = ({ domainName: e, domainInfo: t }) => {
          const { translate: a } = (0, p.Z)(),
            { routes: s } = (0, mi.Xo)();
          return (0, y.tZ)(
            n.Fragment,
            null,
            (0, y.tZ)(
              "section",
              { sx: { width: "100%" } },
              (0, y.tZ)(Ar, { domain: e }),
              t.leaksCount > 0
                ? (0, y.tZ)(kr, { domainInfo: t })
                : (0, y.tZ)(Ir, {
                    imgSrc:
                      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTIiIGhlaWdodD0iNTIiIHZpZXdCb3g9IjAgMCA1MiA1MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzMxMTNfMTkwOTY0KSI+CjxyZWN0IHdpZHRoPSI1MiIgaGVpZ2h0PSI1MiIgcng9IjI2IiBmaWxsPSIjRDlERkUwIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjAuNzIxOSAxMy40NzMzQzE0LjI4MjEgMTQuMjgxNiA5LjcxNjc2IDIwLjE1NzMgMTAuNTI1IDI2LjU5NzJMMTEuMTk1MyAzMS45MzgxTDcuOTg0NDUgMzIuMzQxMUM2Ljg4ODQ4IDMyLjQ3ODYgNi4xMTE1MiAzMy40Nzg2IDYuMjQ5MDggMzQuNTc0Nkw5LjE2NTA4IDU3LjgwOEM5LjMwMjYzIDU4LjkwNCAxMC4zMDI2IDU5LjY4MDkgMTEuMzk4NiA1OS41NDM0TDQwLjI5OTIgNTUuOTE2MUM0MS4zOTUyIDU1Ljc3ODYgNDIuMTcyMSA1NC43Nzg2IDQyLjAzNDYgNTMuNjgyNkwzOS4xMTg2IDMwLjQ0OTJDMzguOTgxIDI5LjM1MzIgMzcuOTgxIDI4LjU3NjIgMzYuODg1MSAyOC43MTM4TDM0LjUxNjEgMjkuMDExMUwzMy44NDU4IDIzLjY3MDJDMzMuMDM3NiAxNy4yMzA0IDI3LjE2MTggMTIuNjY1MSAyMC43MjE5IDEzLjQ3MzNaTTE0LjE3NjUgMjYuNjYxTDE0Ljc4MjQgMzEuNDg3OUwzMC45Mjc1IDI5LjQ2MTVMMzAuMzIxNyAyNC42MzQ2QzI5Ljc2MjIgMjAuMTc2MiAyNS42OTQzIDE3LjAxNTYgMjEuMjM2IDE3LjU3NTJDMTYuNzc3NiAxOC4xMzQ4IDEzLjYxNyAyMi4yMDI2IDE0LjE3NjUgMjYuNjYxWk00Ni43NzUzIDE4LjY1ODZMNDAuNDg1NiAyMi42MTkzTDQxLjkxMTEgMjQuODgyOUw0OC4yMDA3IDIwLjkyMjJMNDYuNzc1MyAxOC42NTg2Wk00My4xODE2IDI3LjI3NjRMNDcuMDcxNyAyNy4zNjhMNDcuMDEwMyAyOS45Nzc3TDQzLjEyMDIgMjkuODg2MUw0My4xODE2IDI3LjI3NjRaTTM3LjQ1NiAxNS43NDIyTDM2LjA3NyAyMC42Nzc3TDM4LjgxNzQgMjEuNDQzNEw0MC4xOTY0IDE2LjUwNzlMMzcuNDU2IDE1Ljc0MjJaIiBmaWxsPSIjMEUzNTNEIi8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMzExM18xOTA5NjQiPgo8cmVjdCB3aWR0aD0iNTIiIGhlaWdodD0iNTIiIHJ4PSIyNiIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K",
                    text: a(Nr.INCIDENT_FREE_MSG, { domainName: e }),
                    subtext: a(Nr.INCIDENT_FREE_SUBTEXT)
                  })
            ),
            (0, y.tZ)(
              i.rU,
              {
                to: s.teamDarkWebInsightsRoutePath,
                sx: {
                  textDecoration: "none",
                  color: `${d.colors.midGreen00}`,
                  marginBottom: "16px",
                  "&:hover": { textDecoration: "underline" }
                },
                onClick: () => {
                  (0, j.Kz)(new o.UserOpenDomainDarkWebMonitoringEvent({ accessPath: o.AccessPath.MainDashboardButton, isFirstVisit: !1 }));
                }
              },
              a(Nr.RETURNING_USER_CTA)
            )
          );
        },
        Lr = ({ domainName: e }) => {
          const { translate: t } = (0, p.Z)();
          return (0, y.tZ)(
            n.Fragment,
            null,
            (0, y.tZ)(
              "section",
              { sx: { width: "100%" } },
              (0, y.tZ)(Ar, { domain: e }),
              (0, y.tZ)(Ir, {
                imgSrc:
                  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTMiIGhlaWdodD0iNTMiIHZpZXdCb3g9IjAgMCA1MyA1MyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjUzIiBoZWlnaHQ9IjUzIiByeD0iMjYuNSIgZmlsbD0iI0Q5REZFMCIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTI2LjgwMDQgMTMuNzUzN0wyNi45NjE2IDEzLjEwOTFDMjcuNjA2MiAxMC42MTEzIDI5Ljg2MjIgOSAzMi4zNjAxIDlDMzUuMzQxMyA5IDM4IDExLjQxNzMgMzggMTQuNDc4OUMzOCAxNi45NzY4IDM2LjMwNzkgMTkuMDcxNiAzMy45NzEyIDE5LjcxNjRWMjAuNzY0SDMwLjc0ODJWMTguODMwM0MzMC43NDgyIDE3Ljc4MjcgMzEuNTU0IDE2LjgxNiAzMi42ODE5IDE2LjczNTRDMzMuODA5OSAxNi41NzQyIDM0Ljc3NjggMTUuNjg3OSAzNC43NzY4IDE0LjQ3OTRDMzQuNzc2OCAxMy4xOTAyIDMzLjY0ODkgMTIuMjIzMyAzMi4zNTk1IDEyLjIyMzNDMzEuMjMxNiAxMi4yMjMzIDMwLjM0NTMgMTIuODY3OSAzMC4wMjI5IDEzLjkxNTRMMjkuODYxNyAxNC41NTk5TDI2LjggMTMuNzU0MkwyNi44MDA0IDEzLjc1MzdaTTM0LjM3NDQgMjMuNzQ1NUMzNC4zNzQ0IDI0Ljg1OCAzMy40NzI2IDI1Ljc2IDMyLjM2MDEgMjUuNzZDMzEuMjQ3NiAyNS43NiAzMC4zNDU2IDI0Ljg1OCAzMC4zNDU2IDIzLjc0NTVDMzAuMzQ1NiAyMi42MzMgMzEuMjQ3NiAyMS43MzEzIDMyLjM2MDEgMjEuNzMxM0MzMy40NzI2IDIxLjczMTMgMzQuMzc0NCAyMi42MzMgMzQuMzc0NCAyMy43NDU1Wk0zNi44NzkxIDM0LjYzMzlDMzYuODc5MSAzMi42MTggMzYuNDE5MyAzMC42ODU5IDM1LjU0MTMgMjguODhMMzEuNjk1OCAyOC44OEwzMi4xOTczIDI5LjcxOTlDMzIuODI0MiAzMC43Njk5IDMzLjIwMDQgMzEuOTAzOSAzMy40MDk0IDMzLjA3OTlMMjkuMzEyOSAzMy4wNzk5QzI5LjI3MTIgMzAuOTggMjguOTc4NCAyOC44OCAyOC41MTg2IDI2LjgyMTlDMjcuNTk4OSAyMy4xNjgxIDI1LjkyNjkgMjEuMzIgMjMuNTAyNCAyMS4zMkMxNi4xMDMyIDIxLjI3OCAxMC4wNDE5IDI3LjI4NDEgMTAuMDAwMiAzNC42NzU5QzkuOTU4NDIgNDIuMDY3NyAxNS44OTQzIDQ4LjE1NzkgMjMuMjkzMyA0OC4xOTk4SDIzLjYyNzhDMzEuMDI2NyA0OC4xMTU4IDM2Ljk2MjUgNDIuMDY3OSAzNi44NzkxIDM0LjYzMzlaTTIxLjAzNjEgMzYuNDRMMjUuOTY4NiAzNi40NEMyNS43NTk1IDQxLjIyNzkgMjQuNzU2NSA0NC44Mzk5IDIzLjUwMjMgNDQuODM5OUMyMi4yNDgyIDQ0LjgzOTkgMjEuMjQ1MSA0MS4yMjc5IDIxLjAzNjEgMzYuNDRaTTIzLjUwMjMgMjQuNjgwM0MyNC43NTY1IDI0LjY4MDMgMjUuNzU5NSAyOC4zMzQyIDI1Ljk2ODYgMzMuMDgwMkgyMS4wMzYxQzIxLjI0NTIgMjguMzM0MiAyMi4yNDgyIDI0LjY4MDMgMjMuNTAyMyAyNC42ODAzWk0xNy42OTE3IDMzLjA4MDJMMTMuNjM2OSAzMy4wODAzQzE0LjA5NjcgMzAuMTQwMSAxNS44OTQxIDI3LjUzNjIgMTguNDg2IDI2LjAyNDJMMTguNzM2OCAyNS44OTgyQzE4LjY1MzEgMjYuMTkyMyAxOC41Njk3IDI2LjQ4NjIgMTguNDg2IDI2LjgyMjJDMTguMDI2MiAyOC44ODAzIDE3LjczMzQgMzAuOTgwMyAxNy42OTE3IDMzLjA4MDJaTTE4LjQ4NiA0Mi42OTgyQzE4LjU2OTcgNDMuMDM0MiAxOC42NTMxIDQzLjMyOCAxOC43MzY4IDQzLjYyMjFMMTguNzM2OCA0My42MjIyQzE3LjEwNjUgNDIuNzQwMSAxNS43MjcgNDEuNDM4MiAxNC44NDkgMzkuODAwMkMxNC4yMjIxIDM4Ljc1MDIgMTMuODQ1OSAzNy42MTYxIDEzLjYzNjkgMzYuNDQwMUgxNy42OTE3QzE3LjczMzQgMzguNTQwMSAxOC4wMjYyIDQwLjY0MDEgMTguNDg2IDQyLjY5ODJaTTI5LjMxMjggMzYuNDQwMUwzMy4zNjc2IDM2LjQ0QzMyLjkwNzggMzkuNDIyMSAzMS4xMTA0IDQxLjk4NDEgMjguNTE4NCA0My40OTYxTDI4LjI2NzcgNDMuNjIyMUMyOC4zNTE0IDQzLjMyOCAyOC40MzQ4IDQzLjAzNDEgMjguNTE4NCA0Mi42OTgxQzI4Ljk3ODMgNDAuNjQgMjkuMjcxMSAzOC41NCAyOS4zMTI4IDM2LjQ0MDFaIiBmaWxsPSIjMEUzNTNEIi8+Cjwvc3ZnPgo=",
                text: t(Nr.UNVERIFIED_MSG),
                subtext: t(Nr.UNVERIFIED_SUBTEXT)
              })
            ),
            (0, y.tZ)(
              d.rUS,
              {
                sx: { textDecoration: "none", fontWeight: "lighter", marginBottom: "16px", "&:hover": { textDecoration: "underline" } },
                color: d.colors.midGreen00,
                target: "_blank",
                rel: "noopener noreferrer",
                href: Tr,
                onClick: () => {
                  (0, j.Kz)(new o.UserOpenHelpCenterEvent({ helpCenterArticleCta: o.HelpCenterArticleCta.ViewDomainVerificationGuide }));
                }
              },
              t(Nr.RETURNING_USER_VIEW_DOMAIN_GUIDE_CTA)
            )
          );
        },
        zr = ({ domainName: e }) => {
          const { translate: t } = (0, p.Z)();
          return (0, y.tZ)(
            n.Fragment,
            null,
            (0, y.tZ)(Ar, { domain: e }),
            (0, y.tZ)(d.HoD, { size: 44, color: d.colors.dashGreen00, sx: { alignSelf: "center" } }),
            (0, y.tZ)(
              d.nvN,
              { size: "small", color: d.colors.grey00, sx: { marginBottom: "3em", overflow: "hidden", width: "-webkit-fill-available" } },
              t(Nr.GENERATING_INSIGHTS_MESSAGE)
            )
          );
        },
        Rr = ({ verifiedOrPendingDomain: e, dwiSummaryResponse: t }) => {
          const { translate: a } = (0, p.Z)(),
            n = e.status === l.DomainStatus.valid,
            s = e.name;
          return (0, y.tZ)(
            Mr,
            null,
            (0, y.tZ)(y.X6, { as: "h5", textStyle: "ds.title.section.medium", color: "ds.text.neutral.catchy" }, a(Nr.HEADING)),
            n
              ? t?.success
                ? (0, y.tZ)(Or, { domainName: s, domainInfo: t.data[s] })
                : (0, y.tZ)(zr, { domainName: s })
              : (0, y.tZ)(Lr, { domainName: s })
          );
        },
        jr = a.p + "daa928a30146cfbef943.png";
      var Pr, Ur;
      const Br = {
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
        Gr = () => {
          const { translate: e } = (0, p.Z)(),
            { routes: t } = (0, mi.Xo)(),
            a = (0, i.k6)(),
            { unseen: n } = (0, De.m)(l.NotificationName.TacDarkWebInsightsNewBadge);
          return (0, y.tZ)(
            y.zx,
            {
              key: "primary",
              onClick: () => {
                (0, j.Kz)(new o.UserOpenDomainDarkWebMonitoringEvent({ accessPath: o.AccessPath.MainDashboardButton, isFirstVisit: n })),
                  a.push(t.teamDarkWebInsightsRoutePath);
              }
            },
            e(Br.GET_STARTED_CTA)
          );
        },
        Fr = ({ data: e, companyName: t }) => {
          const { translate: a } = (0, p.Z)(),
            [n] = Object.keys(e),
            s = e[n];
          return (0, y.tZ)(
            Mr,
            null,
            (0, y.tZ)(y.Ct, { layout: "labelOnly", label: a(Br.TEAM_NEW_LABEL), mood: "brand" }),
            (0, y.tZ)(
              y.X6,
              {
                textStyle: "ds.title.section.medium",
                color: "ds.text.neutral.catchy",
                as: "h3",
                sx: { marginTop: "1em", width: "100%", overflow: "hidden" }
              },
              a(Br.HEADING, { companyName: t })
            ),
            (0, y.tZ)(y.nv, { textStyle: "ds.body.standard.regular", color: "ds.text.neutral.standard" }, a(Br.SUBTEXT)),
            (0, y.tZ)(
              "div",
              { sx: { backgroundColor: `${d.colors.dashGreen06}`, padding: "2px 14px", width: "100%", borderRadius: "10px" } },
              (0, y.tZ)(Dr, { count: s.leaksCount, labelAndTooltip: Br.SECURITY_INCIDENTS, primaryColor: d.colors.dashGreen01 }),
              (0, y.tZ)(Dr, { count: s.emailsImpactedCount, labelAndTooltip: Br.EMAILS_AFFECTED, primaryColor: d.colors.dashGreen01 })
            ),
            Pr || (Pr = (0, y.tZ)(Gr, null))
          );
        },
        qr = ({ companyName: e }) => {
          const { translate: t } = (0, p.Z)();
          return (0, y.tZ)(
            Mr,
            null,
            (0, y.tZ)(
              "div",
              { sx: { alignSelf: "end" } },
              (0, y.tZ)(y.Ct, { layout: "labelOnly", label: t(Br.TEAM_NEW_LABEL), mood: "brand" })
            ),
            (0, y.tZ)("img", {
              sx: {
                backgroundColor: `${d.colors.midGreen05}`,
                height: "122px",
                width: "122px",
                borderRadius: "50%",
                backgroundImage: `url(${jr})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPositionX: "60%"
              }
            }),
            (0, y.tZ)(
              y.X6,
              { textStyle: "ds.title.section.medium", color: "ds.text.neutral.catchy", as: "h3", sx: { width: "100%" } },
              t(Br.ALTERNATE_HEADING, { companyName: e })
            ),
            (0, y.tZ)(y.nv, { textStyle: "ds.body.standard.regular", color: "ds.text.neutral.standard" }, t(Br.ALTERNATE_SUBTEXT)),
            Ur || (Ur = (0, y.tZ)(Gr, null))
          );
        },
        Vr = ({ dwiSummaryResponse: e }) => {
          var t;
          const { spaceDetails: a } = (0, zo.fV)(),
            n = null != (t = a?.teamName) ? t : "-";
          return e?.success ? (0, y.tZ)(Fr, { data: e.data, companyName: n }) : (0, y.tZ)(qr, { companyName: n });
        };
      var $r, Wr, Hr, Kr;
      const Yr = { marginTop: "16px", "&:hover": { cursor: "pointer", borderWidth: "2px", borderColor: "ds.border.brand.standard.hover" } },
        Qr = { width: "100%", padding: "20px 16px" },
        Xr = { padding: "8px", backgroundColor: "ds.container.expressive.brand.quiet.idle", borderRadius: "8px", margin: "auto" },
        Jr = ({ isOpen: e, plan: t, setModalState: a }) => {
          const { translate: n } = (0, p.Z)(),
            s = (0, O.B)();
          return (0, c.tZ)(
            d.VqE,
            { isOpen: e, ariaDescribedby: "dialogContent", onClose: () => {} },
            (0, c.tZ)(d.$N8, { title: n("team_payment_method_dialog_title") }),
            (0, c.tZ)(
              d.a7O,
              null,
              (0, c.tZ)(
                d.Zbd,
                {
                  sx: Yr,
                  onClick: () => {
                    const e = `${oe.ub}?plan=${t}&subCode=${s?.subscriptionCode}`;
                    (0, z.Yo)(e);
                  }
                },
                (0, c.tZ)(
                  d.T5p,
                  { gap: "12px", gridTemplateColumns: "40px 480px 60px", sx: Qr },
                  $r ||
                    ($r = (0, c.tZ)(
                      d.dDn,
                      { sx: Xr },
                      (0, c.tZ)(y.JO, { name: "ItemPaymentOutlined", size: "large", color: "ds.text.brand.standard" })
                    )),
                  (0, c.tZ)(
                    d.dDn,
                    { sx: { margin: "auto 0" } },
                    (0, c.tZ)(d.nvN, { color: "ds.text.neutral.standard", bold: !0 }, n("team_payment_method_dialog_credit_card"))
                  ),
                  (0, c.tZ)(
                    d.dDn,
                    { sx: { margin: "auto" } },
                    Wr ||
                      (Wr = (0, c.tZ)(
                        y.zx,
                        { mood: "brand", intensity: "supershy", size: "large" },
                        (0, c.tZ)(y.JO, { name: "ArrowRightOutlined", size: "medium", color: "ds.text.neutral.standard" })
                      ))
                  )
                )
              ),
              (0, c.tZ)(
                d.Zbd,
                {
                  sx: Yr,
                  onClick: () => {
                    (0, z.Yo)(
                      "https://support.dashlane.com/hc/requests/new?req_type=dashlane_for_business&topic=upgrade_to_dashlane_business"
                    );
                  }
                },
                (0, c.tZ)(
                  d.T5p,
                  { gap: "12px", gridTemplateColumns: "40px 480px 60px", sx: Qr },
                  Hr ||
                    (Hr = (0, c.tZ)(
                      d.dDn,
                      { sx: Xr },
                      (0, c.tZ)(y.JO, { name: "ItemTaxNumberOutlined", size: "large", color: "ds.text.brand.standard" })
                    )),
                  (0, c.tZ)(
                    d.dDn,
                    null,
                    (0, c.tZ)(d.nvN, { color: "ds.text.neutral.standard", bold: !0 }, n("team_account_invoice_payment")),
                    (0, c.tZ)(
                      d.nvN,
                      { color: "ds.text.neutral.quiet", size: "small", sx: { marginTop: "4px" } },
                      n("team_payment_method_dialog_support_team")
                    )
                  ),
                  (0, c.tZ)(
                    d.dDn,
                    { sx: { margin: "auto" } },
                    Kr ||
                      (Kr = (0, c.tZ)(y.zx, {
                        mood: "brand",
                        intensity: "supershy",
                        size: "large",
                        layout: "iconOnly",
                        icon: (0, c.tZ)(y.JO, { name: "ArrowRightOutlined", size: "medium", color: "ds.text.neutral.standard" })
                      }))
                  )
                )
              )
            ),
            (0, c.tZ)(
              d.Ejs,
              { sx: { justifyContent: "flex-end" } },
              (0, c.tZ)(
                y.zx,
                {
                  intensity: "quiet",
                  mood: "neutral",
                  onClick: () => {
                    a(ol.PURCHASE);
                  }
                },
                n("_common_action_back")
              )
            )
          );
        },
        el = ({ isOpen: e, planCopy: t, setModalState: a, handleClose: s }) => {
          const { translate: i } = (0, p.Z)();
          return (
            (0, n.useEffect)(() => {
              (0, j.Nc)(o.PageView.TacAccountTrialEndModal);
            }, []),
            (0, c.tZ)(
              d.VqE,
              {
                isOpen: e,
                ariaDescribedby: "dialogContent",
                closeIconName: i("_common_dialog_dismiss_button"),
                onClose: () => {
                  (0, j.Kz)(new o.UserCallToActionEvent({ callToActionList: [o.CallToAction.AllOffers], hasChosenNoAction: !0 })), s();
                }
              },
              (0, c.tZ)(d.$N8, { title: i("team_dashboard_purchase_dialog_title", { plan: t }) }),
              (0, c.tZ)(
                d.a7O,
                null,
                (0, c.tZ)(d.nvN, { color: "ds.text.neutral.standard" }, i("team_dashboard_purchase_dialog_paragraph_1")),
                (0, c.tZ)(
                  d.nvN,
                  { color: "ds.text.neutral.standard", sx: { marginTop: "8px" } },
                  i("team_dashboard_purchase_dialog_paragraph_2")
                ),
                (0, c.tZ)(
                  "div",
                  { sx: { marginTop: "24px" } },
                  (0, c.tZ)(y.ke, {
                    size: "large",
                    mood: "warning",
                    title: i("team_dashboard_purchase_dialog_infobox_copy_1"),
                    description: i("team_dashboard_purchase_dialog_infobox_copy_2")
                  })
                )
              ),
              (0, c.tZ)(
                d.Ejs,
                { sx: { justifyContent: "flex-end" } },
                (0, c.tZ)(
                  y.zx,
                  {
                    mood: "brand",
                    onClick: () => {
                      (0, j.Kz)(
                        new o.UserCallToActionEvent({
                          callToActionList: [o.CallToAction.AllOffers],
                          chosenAction: o.CallToAction.AllOffers,
                          hasChosenNoAction: !1
                        })
                      ),
                        a(ol.PAYMENT);
                    }
                  },
                  i("team_account_teamplan_plan_buy_dashlane")
                )
              )
            )
          );
        };
      var tl, al, nl;
      const sl = { PAGE: { minHeight: "100%", width: "min-content", padding: "32px 48px" } },
        il = {
          seats: { pending: 0, provisioned: 0, used: 0 },
          passwordHealthHistory: [],
          passwordHealth: { compromised: 0, passwords: 0, reused: 0, safe: 0, securityIndex: 0, weak: 0 }
        };
      let ol = (function (e) {
        return (e[(e.PURCHASE = 0)] = "PURCHASE"), (e[(e.PAYMENT = 1)] = "PAYMENT"), e;
      })({});
      const rl = ({ supportHeader: e, children: t }) => {
        const { translate: a } = (0, p.Z)();
        return (0, y.tZ)(
          d.Zbd,
          {
            sx: {
              display: "flex",
              gap: "8px",
              flexDirection: "column",
              padding: "32px 24px",
              background: "ds.container.agnostic.neutral.supershy"
            }
          },
          (0, y.tZ)(
            y.X6,
            { as: "h2", textStyle: "ds.title.supporting.small", color: "ds.text.neutral.quiet", sx: { marginBottom: "8px" } },
            null != e ? e : a("webapp_tac_infocard_title")
          ),
          t
        );
      };
      var ll;
      const cl = {
          display: "flex",
          gap: "4px",
          padding: "5px 0px",
          alignItems: "center",
          color: "ds.text.brand.standard",
          backgroundColor: "ds.background.default",
          cursor: "pointer",
          marginTop: "5px"
        },
        dl = ({ internalAction: e, linkText: t }) =>
          (0, y.tZ)(
            "button",
            { onClick: e, sx: cl },
            (0, y.tZ)(y.nv, { as: "span", sx: { fontWeight: "500" } }, t),
            ll || (ll = (0, y.tZ)(y.JO, { name: "ArrowRightOutlined", size: "small", color: "ds.text.brand.standard" }))
          );
      var ul;
      const _l = ({ children: e, href: t, onClick: a, ...n }) =>
        (0, y.tZ)(
          y.nv,
          {
            as: "a",
            onClick: a,
            href: t,
            rel: "noopener noreferrer",
            target: "_blank",
            color: "ds.text.brand.standard",
            sx: {
              display: "inline-flex",
              flexDirection: "row",
              ":hover": { color: "ds.text.brand.quiet" },
              ":hover + svg": { fill: "ds.text.brand.quiet" }
            },
            ...n
          },
          e,
          ul || (ul = (0, y.tZ)(y.JO, { name: "ActionOpenExternalLinkOutlined", color: "ds.text.brand.standard" }))
        );
      let ml = (function (e) {
        return (e[(e.ExternalLink = 0)] = "ExternalLink"), (e[(e.InternalLink = 1)] = "InternalLink"), e;
      })({});
      const pl = ({ heading: e, description: t, linkText: a, supportHeading: s, linkProps: i }) =>
          (0, y.tZ)(
            rl,
            { supportHeader: s },
            (0, y.tZ)(y.nv, { sx: { mb: "8px" }, color: "ds.text.neutral.catchy", textStyle: "ds.title.block.medium", as: "h3" }, e),
            (0, n.isValidElement)(t)
              ? t
              : (0, y.tZ)(
                  y.nv,
                  {
                    color: "ds.text.neutral.standard",
                    textStyle: "ds.body.standard.regular",
                    sx: { mb: a && i.linkType === ml.ExternalLink && i.linkHref ? "24px" : 0 }
                  },
                  t
                ),
            i.linkType === ml.ExternalLink && i.linkHref ? (0, y.tZ)(_l, { href: i.linkHref }, a) : null,
            i.linkType === ml.InternalLink ? (0, y.tZ)(dl, { linkText: a, internalAction: i.internalAction }) : null
          ),
        gl = () => {
          const { translate: e } = (0, p.Z)();
          return (0, y.tZ)(
            "div",
            null,
            (0, y.tZ)(
              rl,
              null,
              (0, y.tZ)(y.X6, { as: "h3", textStyle: "ds.title.block.medium" }, e("team_breach_report_need_help")),
              (0, y.tZ)(
                y.nv,
                { textStyle: "ds.body.standard.regular", color: "ds.text.neutral.quiet" },
                e("team_dark_web_insights_need_help_description")
              ),
              (0, y.tZ)(
                _l,
                {
                  href: "https://support.dashlane.com/hc/articles/5015658490514",
                  onClick: () => {
                    (0, j.Kz)(new o.UserOpenHelpCenterEvent({ helpCenterArticleCta: o.HelpCenterArticleCta.LearnAboutDarkWebInsights }));
                  }
                },
                e("team_dark_web_insights_learn_more_txt")
              ),
              (0, y.tZ)(
                _l,
                {
                  href: Tr,
                  onClick: () => {
                    (0, j.Kz)(new o.UserOpenHelpCenterEvent({ helpCenterArticleCta: o.HelpCenterArticleCta.LearnAboutDomainVerification }));
                  }
                },
                e("team_breach_report_learn_domain_verification_txt")
              )
            )
          );
        },
        yl = ({
          registerDomain: e = () => {},
          disabled: t,
          registrationError: a,
          clearRegistrationErrors: s = () => {},
          domainLoadError: i
        }) => {
          const { translate: o } = (0, p.Z)(),
            [r, l] = n.useState(""),
            c = i ? "" : o("team_settings_domain_url_placeholder");
          return n.createElement(
            n.Fragment,
            null,
            n.createElement(
              "div",
              { className: "domainUrlInput--VQjVVbbN2d" },
              n.createElement(d.oil, {
                value: r,
                placeholder: c,
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
              d.zxk,
              {
                type: "button",
                className: w()("domainUrlButton--lFqlfJ3Gzv", { "domainLoadError--ajAHmgDUO9": i }),
                disabled: t,
                nature: "secondary",
                onClick: () => e(r)
              },
              o("team_settings_domain_button_add")
            )
          );
        };
      var bl = a(418402),
        hl = a.n(bl);
      const xl = ({ domain: e, onConfirm: t, onDismiss: a }) => {
          const { translate: s } = (0, p.Z)(),
            [i, o] = (0, n.useState)(!1),
            r = (0, n.useRef)(!1);
          return (
            (0, n.useEffect)(
              () => () => {
                r.current = !0;
              },
              [r]
            ),
            (0, c.tZ)(
              G.o,
              {
                isOpen: !0,
                onRequestClose: a,
                footer: (0, c.tZ)(d.cNS, {
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
              (0, c.tZ)("p", null, s.markup("team_settings_domain_deactivate_description_markup", { domainUrl: e.name }))
            )
          );
        },
        Sl = ({ domain: e, deactivateDomain: t, isDisabled: a, disabledTooltipText: s }) => {
          const [i, o] = (0, n.useState)(!1);
          return (0, c.tZ)(
            n.Fragment,
            null,
            i ? (0, c.tZ)(xl, { domain: e, onConfirm: t, onDismiss: () => o(!1) }) : null,
            (0, c.tZ)(
              "div",
              {
                className: "deactivateTrashcan--nLkrRLE9CS",
                onClick: () => {
                  a || o(!0);
                }
              },
              (0, c.tZ)(
                d.ua7,
                { passThrough: !a, placement: "top", content: null != s ? s : "", sx: { maxWidth: "180px" } },
                (0, c.tZ)(d.XHJ, { disabled: a, size: 25, color: hl()["--dash-green-00"] })
              )
            )
          );
        },
        vl = "column--QmWD9Od6Ul",
        fl = ({ label: e, centerLabel: t, labelHelper: a, children: s }) =>
          n.createElement(
            "div",
            { className: "row--b0sY7KH6EJ" },
            n.createElement(
              "div",
              { className: vl },
              n.createElement("div", { className: w()("label--IAVg4TIabV", { "centerLabel--kRDzb_3UrS": t }) }, e),
              a ? n.createElement("div", { className: "labelHelper--ZvFzwTua9S" }, a) : null
            ),
            n.createElement("div", { className: vl }, s)
          );
      let Cl = (function (e) {
          return (
            (e[(e.ClaimDomain = 0)] = "ClaimDomain"),
            (e[(e.VerifyDomain = 1)] = "VerifyDomain"),
            (e[(e.SSOConnector = 2)] = "SSOConnector"),
            (e[(e.EnableSSO = 3)] = "EnableSSO"),
            e
          );
        })({}),
        El = (function (e) {
          return (
            (e[(e.SSOConnector = 0)] = "SSOConnector"), (e[(e.ConfigureIDP = 1)] = "ConfigureIDP"), (e[(e.EnableSSO = 2)] = "EnableSSO"), e
          );
        })({}),
        Zl = (function (e) {
          return (e[(e.dismiss = 0)] = "dismiss"), (e[(e.action = 1)] = "action"), e;
        })({});
      const Tl = "team_settings_domain_deactivate_button_tooltip_error",
        Nl = ({ currentStep: e, deactivateDomain: t, domain: a, isDisabled: s, setCurrentSteps: i, verifyDomain: o }) => {
          var r;
          const [l, c] = n.useState(!1),
            { translate: d } = (0, p.Z)();
          return n.createElement(
            "div",
            { className: "domainContainer--uTWD0PQykR", key: a.id },
            (() => {
              if (!a) return null;
              switch (e) {
                case Al.Verify:
                case Al.VerifyFailed:
                  return n.createElement(
                    n.Fragment,
                    null,
                    n.createElement(Ll, { domain: a, verifyDomain: () => c(!0), domainStep: e }),
                    n.createElement(Sl, { domain: a, deactivateDomain: () => t(a), isDisabled: s, disabledTooltipText: d(Tl) })
                  );
                case Al.Complete:
                  return n.createElement(
                    n.Fragment,
                    null,
                    r || (r = n.createElement(jl, { domain: a })),
                    n.createElement(Sl, { domain: a, deactivateDomain: () => t(a), isDisabled: s, disabledTooltipText: d(Tl) })
                  );
                default:
                  return null;
              }
            })(),
            (() => {
              if (!a || !l) return null;
              switch (e) {
                case Al.Verify:
                  return n.createElement(Bl, { domainName: a.name, onConfirm: () => o(a), onDismiss: () => c(!1) });
                case Al.VerifyFailed:
                  return n.createElement(Gl, {
                    onDismiss: () => {
                      i((e) => ({ ...e, [a.id]: Al.Verify })), c(!1);
                    }
                  });
                default:
                  return null;
              }
            })()
          );
        },
        Dl = a(894017),
        Ml = "team_settings_domain_register_invalid_error",
        Il = {
          INVALID_PUBLIC_DOMAIN: "team_settings_domain_register_public_error",
          DOMAIN_CONTAINS_EXISTING_NONTEAM_USERS: "team_settings_domain_register_contact_support"
        };
      let Al = (function (e) {
        return (
          (e[(e.Register = 0)] = "Register"),
          (e[(e.Verify = 1)] = "Verify"),
          (e[(e.VerifyFailed = 2)] = "VerifyFailed"),
          (e[(e.Complete = 3)] = "Complete"),
          e
        );
      })({});
      const wl = ({ isTeamSettingsLoading: e, teamSettings: t, setStepComplete: a, uncompleteSteps: s }) => {
          const { translate: i } = (0, p.Z)(),
            [o, r] = n.useState(!1),
            [c, d] = n.useState([]),
            [u, _] = n.useState(""),
            [m, g] = n.useState(""),
            [y, b] = n.useState({}),
            h = (e) => "valid" === e.status,
            x = () => c.filter((e) => h(e)),
            S = t?.ssoEnabled || !1,
            v = n.useCallback((e = []) => {
              e.forEach((e) => {
                switch (e.status) {
                  case l.DomainStatus.pending:
                    b((t) => ({ ...t, [e.id]: Al.Verify })), a(Cl.ClaimDomain);
                    break;
                  case l.DomainStatus.valid:
                    b((t) => ({ ...t, [e.id]: Al.Complete })), a(Cl.ClaimDomain), a(Cl.VerifyDomain);
                    break;
                  default:
                    b((t) => ({ ...t, [e.id]: Al.Register }));
                }
              });
            }, []),
            f = n.useCallback(async () => {
              r(!0), g("");
              const e = await ea.C.getTeamDomains();
              return r(!1), e.success ? (d(e.domains), e.domains) : (g(i("team_settings_domain_fetch_error")), Promise.resolve(void 0));
            }, [ea.C.getTeamDomains]),
            C = async (e) => {
              const t = await ea.C.completeTeamDomainRegistration();
              t.success &&
              t.domains.find((t) => t.name === e.name) &&
              t.domains.find((t) => t.name === e.name)?.status === l.DomainStatus.valid
                ? (a(Cl.VerifyDomain), b((t) => ({ ...t, [e.id]: Al.Complete })))
                : b((t) => ({ ...t, [e.id]: Al.VerifyFailed }));
            },
            E = async (e) => {
              e &&
                (await ea.C.deactivateTeamDomain({ domain: e.name })).success &&
                (v(await f()), x().length || s([Cl.EnableSSO, Cl.SSOConnector, Cl.ClaimDomain, Cl.VerifyDomain]));
            };
          return (
            n.useEffect(() => {
              (async () => {
                v(await f());
              })();
            }, [f, v]),
            n.createElement(
              n.Fragment,
              null,
              n.createElement(
                fl,
                { label: `1. ${i("team_settings_domain_title")}`, labelHelper: i("team_settings_domain_multi_description") },
                o || e
                  ? n.createElement(Rs.Z, { size: 20, containerStyle: { alignItems: "normal" } })
                  : n.createElement(yl, {
                      registerDomain: async (e) => {
                        if (c.length >= 5) return;
                        if (!Dl.isFQDN(e)) return void _(i(Ml));
                        const t = await ea.C.registerTeamDomain({ domain: e });
                        if (t.success) v(await f());
                        else if (!t.success) {
                          const {
                              error: { code: e }
                            } = t,
                            a = Il[e];
                          _(i(null != a ? a : Ml));
                        }
                      },
                      domainLoadError: m,
                      registrationError: u,
                      disabled: c.length >= 5,
                      clearRegistrationErrors: () => _("")
                    })
              ),
              o || e || 0 === c.length
                ? null
                : n.createElement(
                    n.Fragment,
                    null,
                    n.createElement("div", { className: "divider--SU_Ctssudp" }),
                    n.createElement(
                      fl,
                      { label: i("team_settings_domain_added") },
                      n.createElement(
                        "div",
                        { className: "domainsContainer--eO_SBqHaFr" },
                        c.map((e, t) =>
                          t < 5
                            ? n.createElement(Nl, {
                                key: e.id,
                                currentStep: y[e.id],
                                deactivateDomain: E,
                                domain: e,
                                isDisabled: S && 1 === x().length && h(e),
                                setCurrentSteps: b,
                                verifyDomain: C
                              })
                            : null
                        )
                      )
                    )
                  )
            )
          );
        },
        { orange00: kl, dashGreen02: Ol } = d.colors,
        Ll = ({ verifyDomain: e, domain: t, domainStep: a }) => {
          const { translate: s } = (0, p.Z)();
          return n.createElement(
            d.T5p,
            { gap: "10px", gridTemplateColumns: "1fr auto" },
            n.createElement(d.oil, {
              value: t ? t.name : "",
              fullWidth: !0,
              readOnly: !0,
              endAdornment: n.createElement(
                d.T5p,
                { gridTemplateColumns: "auto auto", gap: "5px" },
                n.createElement(
                  d.nvN,
                  { size: "small", color: a === Al.VerifyFailed ? kl : Ol },
                  a === Al.VerifyFailed ? s("team_settings_domain_verify_failed") : s("team_settings_domain_not_verified")
                ),
                n.createElement(d.enX, { color: a === Al.VerifyFailed ? kl : Ol })
              ),
              feedbackType: a === Al.VerifyFailed ? "warning" : void 0
            }),
            n.createElement(d.zxk, { nature: "secondary", onClick: e, type: "button" }, s("team_settings_domain_button_verify"))
          );
        };
      var zl;
      const { accessibleValidatorGreen: Rl } = d.colors,
        jl = ({ domain: e }) =>
          n.createElement(d.oil, {
            value: e.name,
            endAdornment: zl || (zl = n.createElement(d.rE2, { color: Rl })),
            readOnly: !0,
            fullWidth: !0
          });
      var Pl = a(6483);
      const Ul = "team_settings_domain_verify_load_error",
        Bl = ({
          description: e,
          isDarkWebInsights: t,
          secondaryDescription: a,
          domainName: s,
          href: i = "https://support.dashlane.com/hc/articles/360013149040",
          linkLabel: r,
          onClick: l,
          onDismiss: u,
          onConfirm: _
        }) => {
          const { translate: m } = (0, p.Z)(),
            [g, y] = (0, n.useState)({ id: 0, name: "" }),
            [b, h] = (0, n.useState)(""),
            [x, S] = (0, n.useState)(!1),
            [v, f] = (0, n.useState)(!1);
          (0, n.useEffect)(() => {
            (async () => {
              S(!0);
              try {
                const e = await ea.C.getTeamDomains();
                if (e.success) {
                  const t = e.domains.find((e) => e.name === s);
                  t ? y(t) : h(m(Ul));
                }
              } catch (e) {
                h(m(Ul));
              } finally {
                S(!1);
              }
            })();
          }, [s, m]);
          const { dnsToken: { computedToken: C, challengeDomain: E } = { computedToken: "", challengeDomain: "" } } = g,
            Z = ({ id: e, inputValue: t, labelText: a }) => ({
              textInputProps: {
                id: e,
                label: a,
                readOnly: !0,
                disabled: x,
                fullWidth: !0,
                startAdornment: x ? (0, c.tZ)(d.HoD, { color: d.colors.midGreen00 }) : void 0
              },
              iconButtonProps: { disabled: x },
              inputValue: t
            });
          return (0, c.tZ)(
            d.VqE,
            { isOpen: !0, onClose: u, closeIconName: m("_common_dialog_dismiss_button") },
            (0, c.tZ)(d.$N8, { title: m("team_settings_domain_verify_title") }),
            (0, c.tZ)(
              d.a7O,
              null,
              (0, c.tZ)(
                d.T5p,
                { gap: "32px", gridTemplateColumns: "1fr", gridAutoRows: "auto" },
                (0, c.tZ)(
                  d.nvN,
                  { color: d.colors.grey00 },
                  e || m.markup("team_settings_domain_verify_description_markup", { domainUrl: s })
                ),
                b
                  ? (0, c.tZ)(d.nvN, { color: d.colors.red00 }, b)
                  : (0, c.tZ)(
                      n.Fragment,
                      null,
                      (0, c.tZ)(Pl.x, { ...Z({ id: "hostnameInput", labelText: m("team_settings_domain_verify_host"), inputValue: E }) }),
                      (0, c.tZ)(Pl.x, { ...Z({ id: "txtValueInput", labelText: m("team_settings_domain_verify_txt"), inputValue: C }) })
                    ),
                a ? (0, c.tZ)(d.nvN, { color: d.colors.grey00 }, a) : null
              )
            ),
            (0, c.tZ)(
              d.cNS,
              {
                primaryButtonTitle: m("team_settings_domain_verify_confirm"),
                primaryButtonOnClick: async () => {
                  f(!0);
                  try {
                    await _();
                  } catch (e) {
                    h(e.message),
                      t &&
                        (0, j.Kz)(
                          new o.UserVerifyDomainEvent({ domainVerificationStep: o.DomainVerificationStep.DomainVerificationError })
                        );
                  } finally {
                    f(!1),
                      t &&
                        (0, j.Kz)(
                          new o.UserVerifyDomainEvent({
                            domainVerificationStep: o.DomainVerificationStep.TapVerifyDomainCtaWithDnsInformation
                          })
                        );
                  }
                },
                primaryButtonProps: { disabled: !!b || x || v },
                intent: "primary"
              },
              (0, c.tZ)(
                d.rUS,
                {
                  sx: { alignSelf: "center", mr: "auto" },
                  color: d.colors.midGreen00,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  href: i,
                  onClick: l
                },
                r || m("team_settings_domain_verify_setup")
              )
            )
          );
        },
        Gl = ({ onDismiss: e, domainName: t }) => {
          const { translate: a } = (0, p.Z)(),
            s = t
              ? a.markup("team_settings_domain_verify_failure_title_markup", { domainUrl: t })
              : a("team_settings_domain_verify_failure_title");
          return n.createElement(
            d.VqE,
            { isOpen: !0, onClose: e },
            n.createElement(d.$N8, { title: s }),
            n.createElement(d.a7O, null, a("team_settings_domain_verify_failure_desc")),
            n.createElement(d.cNS, {
              primaryButtonTitle: a("team_settings_domain_verify_failure_button"),
              primaryButtonOnClick: e,
              intent: "primary"
            })
          );
        },
        Fl = ({
          description: e,
          isDarkWebInsights: t,
          secondaryDescription: a,
          domainName: s,
          linkLabel: i,
          href: o,
          onClick: r,
          onDismiss: d,
          onError: u,
          onSuccess: _
        }) => {
          const [m, p] = (0, n.useState)(!1),
            g = (0, n.useRef)(!1),
            y = (0, n.useCallback)(async () => {
              const e = await ea.C.completeTeamDomainRegistration();
              if (!g.current) {
                if (e.success) {
                  const t = e.domains.find((e) => e.name === s);
                  t?.status === l.DomainStatus.valid ? _() : u && u();
                } else p(!0);
                return () => {
                  g.current = !0;
                };
              }
            }, [s, _, u]);
          return m
            ? (0, c.tZ)(Gl, { onDismiss: d, domainName: s })
            : (0, c.tZ)(Bl, {
                description: e,
                isDarkWebInsights: t,
                secondaryDescription: a,
                linkLabel: i,
                domainName: s,
                href: o,
                onConfirm: y,
                onDismiss: d,
                onClick: r
              });
        },
        ql = ({ img: e, title: t, subtitle: a, stepLabel: n, stepNumber: s, caps: i, dotStyle: o }) =>
          (0, c.tZ)(
            "div",
            { className: "container--vE8T8LPnPv" },
            (0, c.tZ)("img", { src: e, className: "img--m_seeXYeAW" }),
            (0, c.tZ)(d.nvN, { size: "medium", caps: !!i || void 0, sx: { marginTop: "-43px", marginBottom: "11px" } }, t),
            (0, c.tZ)(d.nvN, { color: d.colors.grey00, size: "small" }, a),
            (0, c.tZ)(
              "div",
              { className: "numberContainer--QTEn2wceZi" },
              (0, c.tZ)("div", { className: "dot--jKi_w8fAhr", style: o }),
              n && s ? (0, c.tZ)(d.nvN, { size: "small", sx: { textAlign: "left" } }, n, " ", s) : null
            )
          ),
        Vl = () => {
          const { translate: e } = (0, p.Z)(),
            t = { marginTop: "18px" };
          return (0, c.tZ)(
            d.Zbd,
            { sx: { padding: "12px 12px 48px", minHeight: "200px" } },
            (0, c.tZ)(
              d.Ejs,
              {
                sx: {
                  justifyContent: "space-between",
                  marginTop: "80px",
                  paddingLeft: "24px",
                  borderBottom: `solid 2px ${d.colors.grey00}`
                }
              },
              (0, c.tZ)(ql, {
                img: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTMiIGhlaWdodD0iNTMiIHZpZXdCb3g9IjAgMCA1MyA1MyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNi40NTgzIDEuNUMxMi42NzQyIDEuNSAxLjUgMTIuNjc0MiAxLjUgMjYuNDU4M0MxLjUgNDAuMjQyNCAxMi42NzQyIDUxLjQxNjcgMjYuNDU4MyA1MS40MTY3QzQwLjI0MjQgNTEuNDE2NyA1MS40MTY3IDQwLjI0MjQgNTEuNDE2NyAyNi40NTgzQzUxLjQxNjcgMTIuNjc0MiA0MC4yNDI0IDEuNSAyNi40NTgzIDEuNVpNMC41IDI2LjQ1ODNDMC41IDEyLjEyMTkgMTIuMTIxOSAwLjUgMjYuNDU4MyAwLjVDNDAuNzk0NyAwLjUgNTIuNDE2NyAxMi4xMjE5IDUyLjQxNjcgMjYuNDU4M0M1Mi40MTY3IDQwLjc5NDcgNDAuNzk0NyA1Mi40MTY3IDI2LjQ1ODMgNTIuNDE2N0MxMi4xMjE5IDUyLjQxNjcgMC41IDQwLjc5NDcgMC41IDI2LjQ1ODNaIiBmaWxsPSIjNjE1QjU3Ii8+CjxwYXRoIGQ9Ik0yNi4xMjgzIDMwSDI3LjYxNjNWMjEuMzI0SDI2LjYyMDNDMjYuNTYwMyAyMi4wNSAyNi4wMzgzIDIyLjQ0NiAyNC41MjAzIDIyLjQ0NlYyMy4zMTZIMjYuMTI4M1YzMFoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=",
                title: e("team_breach_report_verify_domain_stepper_title"),
                subtitle: e("team_dark_web_insights_stepper_verify_domain_subtitle"),
                caps: !0,
                dotStyle: t
              }),
              (0, c.tZ)(ql, {
                img: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTMiIGhlaWdodD0iNTMiIHZpZXdCb3g9IjAgMCA1MyA1MyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNi40NTgzIDEuNUMxMi42NzQyIDEuNSAxLjUgMTIuNjc0MiAxLjUgMjYuNDU4M0MxLjUgNDAuMjQyNCAxMi42NzQyIDUxLjQxNjcgMjYuNDU4MyA1MS40MTY3QzQwLjI0MjQgNTEuNDE2NyA1MS40MTY3IDQwLjI0MjQgNTEuNDE2NyAyNi40NTgzQzUxLjQxNjcgMTIuNjc0MiA0MC4yNDI0IDEuNSAyNi40NTgzIDEuNVpNMC41IDI2LjQ1ODNDMC41IDEyLjEyMTkgMTIuMTIxOSAwLjUgMjYuNDU4MyAwLjVDNDAuNzk0NyAwLjUgNTIuNDE2NyAxMi4xMjE5IDUyLjQxNjcgMjYuNDU4M0M1Mi40MTY3IDQwLjc5NDcgNDAuNzk0NyA1Mi40MTY3IDI2LjQ1ODMgNTIuNDE2N0MxMi4xMjE5IDUyLjQxNjcgMC41IDQwLjc5NDcgMC41IDI2LjQ1ODNaIiBmaWxsPSIjNjE1QjU3Ii8+CjxwYXRoIGQ9Ik0yNC4wMDQ5IDMwSDMwLjEyNDlWMjguNzUySDI1LjYzMDlWMjguNjI2QzI1LjYzMDkgMjYuNTYyIDMwLjEwNjkgMjYuODUgMzAuMTA2OSAyMy43NTRDMzAuMTA2OSAyMi4yMyAyOC45NDI5IDIxLjIwNCAyNy4wODg5IDIxLjIwNEMyNC45NDA5IDIxLjIwNCAyMy44NTQ5IDIyLjQ4MiAyMy44MzA5IDI0LjA2NkgyNS4yNDY5QzI1LjM2MDkgMjMuMDI4IDI2LjA1MDkgMjIuNDQgMjcuMDQ2OSAyMi40NEMyNy45ODI5IDIyLjQ0IDI4LjU3MDkgMjIuOTggMjguNTcwOSAyMy43NkMyOC41NzA5IDI1Ljg2IDI0LjAwNDkgMjUuNzIyIDI0LjAwNDkgMjguODE4VjMwWiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg==",
                title: e("team_dark_web_insights_view_insights_stepper_title"),
                subtitle: e("team_dark_web_insights_view_insights_stepper_subtitle"),
                caps: !0,
                dotStyle: t
              }),
              (0, c.tZ)(ql, {
                img: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTQiIGhlaWdodD0iNTMiIHZpZXdCb3g9IjAgMCA1NCA1MyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNi45NDc5IDEuNUMxMi44ODQ0IDEuNSAxLjUgMTIuNjgzMiAxLjUgMjYuNDU4M0MxLjUgNDAuMjMzNSAxMi44ODQ0IDUxLjQxNjcgMjYuOTQ3OSA1MS40MTY3QzQxLjAxMTQgNTEuNDE2NyA1Mi4zOTU4IDQwLjIzMzUgNTIuMzk1OCAyNi40NTgzQzUyLjM5NTggMTIuNjgzMiA0MS4wMTE0IDEuNSAyNi45NDc5IDEuNVpNMC41IDI2LjQ1ODNDMC41IDEyLjExMyAxMi4zNTAyIDAuNSAyNi45NDc5IDAuNUM0MS41NDU3IDAuNSA1My4zOTU4IDEyLjExMyA1My4zOTU4IDI2LjQ1ODNDNTMuMzk1OCA0MC44MDM3IDQxLjU0NTcgNTIuNDE2NyAyNi45NDc5IDUyLjQxNjdDMTIuMzUwMiA1Mi40MTY3IDAuNSA0MC44MDM3IDAuNSAyNi40NTgzWiIgZmlsbD0iIzYxNUI1NyIvPgo8cGF0aCBkPSJNMjMuNzMzNSAyMy45MjhIMjUuMTQ5NUMyNS4yMDM1IDIyLjgwNiAyNi4wMDE1IDIyLjM2OCAyNi44Nzc1IDIyLjM2OEMyNy45MDk1IDIyLjM2OCAyOC41NjM1IDIyLjg3OCAyOC41NjM1IDIzLjU1QzI4LjU2MzUgMjQuMjgyIDI3Ljg0MzUgMjQuODUyIDI2LjgxNzUgMjQuODgyTDI2LjA3MzUgMjQuOTEyVjI2LjFMMjYuODc3NSAyNi4xMjRDMjcuOTYzNSAyNi4xNDggMjguNzc5NSAyNi42NTIgMjguNzc5NSAyNy41MzRDMjguNzc5NSAyOC4zNTYgMjguMDUzNSAyOC45MjYgMjYuODgzNSAyOC45MjZDMjUuOTQxNSAyOC45MjYgMjUuMjQ1NSAyOC40MzQgMjUuMDc3NSAyNy40MDJIMjMuNjU1NUMyMy42OTE1IDI5LjA4MiAyNC45MDM1IDMwLjEyIDI2Ljg1MzUgMzAuMTMyQzI4LjgwOTUgMzAuMTQ0IDMwLjM0NTUgMjkuMjIgMzAuMzQ1NSAyNy41N0MzMC4zNDU1IDI2LjQxOCAyOS41NTM1IDI1LjcxNiAyOC41MDk1IDI1LjQyOEMyOS42MjU1IDI1LjA0NCAzMC4xMjk1IDI0LjM0OCAzMC4xMjk1IDIzLjQ5QzMwLjEyOTUgMjEuOTcyIDI4Ljc3MzUgMjEuMjA0IDI2Ljg5NTUgMjEuMjA0QzI1LjE0MzUgMjEuMjA0IDIzLjczMzUgMjIuMTQ2IDIzLjczMzUgMjMuOTI4WiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg==",
                title: e("team_breach_report_reduce_risk_title"),
                subtitle: e("team_breach_report_reduce_risk_subtitle"),
                caps: !0,
                dotStyle: t
              })
            )
          );
        };
      var $l,
        Wl = a(417468);
      const Hl = a(894017),
        Kl = "team_breach_report_domain_register_invalid_error",
        Yl = {
          INVALID_PUBLIC_DOMAIN: "team_settings_domain_register_public_error",
          DOMAIN_CONTAINS_EXISTING_NONTEAM_USERS: "team_settings_domain_register_contact_support",
          DOMAIN_ALREADY_EXISTS: "team_settings_domain_register_duplicated_error"
        },
        Ql = ({ onSuccess: e, onError: t }) => {
          const { translate: a } = (0, p.Z)(),
            s = (0, Wl.f)(),
            [i, r] = (0, n.useState)(""),
            [l, u] = (0, n.useState)(""),
            [_, m] = (0, n.useState)(!1),
            [g, y] = (0, n.useState)(!1);
          return (
            (0, n.useEffect)(() => {
              if (void 0 !== s) {
                const e = s.substring(s.lastIndexOf("@") + 1);
                r(e);
              }
            }, [s]),
            (0, c.tZ)(
              n.Fragment,
              null,
              $l || ($l = (0, c.tZ)(Vl, null)),
              (0, c.tZ)(
                "div",
                null,
                (0, c.tZ)(
                  d.Zbd,
                  { sx: { padding: "24px", margin: "24px 0" } },
                  (0, c.tZ)(d.X6q, { size: "x-small" }, a("team_dark_web_insights_verify_domain_title")),
                  (0, c.tZ)(
                    d.nvN,
                    { sx: { marginBottom: "20px", marginTop: "10px" }, color: d.colors.grey00 },
                    a("team_breach_report_verify_domain_description")
                  ),
                  (0, c.tZ)(
                    d.Ejs,
                    { gap: "16px" },
                    (0, c.tZ)(
                      d.k$b,
                      { sx: { width: "75%" } },
                      (0, c.tZ)(d.oil, {
                        onChange: (e) => {
                          r(e.target.value), u("");
                        },
                        fullWidth: !0,
                        value: i,
                        autoFocus: !0,
                        endAdornment:
                          l || "" === i || !Hl.isFQDN(i) ? void 0 : (0, c.tZ)(d.rE2, { color: d.colors.accessibleValidatorGreen }),
                        feedbackText: l || void 0,
                        feedbackType: l ? "error" : void 0
                      })
                    ),
                    (0, c.tZ)(
                      d.k$b,
                      { sx: { width: "20%" } },
                      (0, c.tZ)(
                        d.zxk,
                        {
                          type: "button",
                          disabled: "" === i || g,
                          onClick: () => {
                            (async (e) => {
                              if (!Hl.isFQDN(e)) return void u(a(Kl));
                              y(!0);
                              const t = await ea.C.registerTeamDomain({ domain: e });
                              if ((y(!1), t.success)) return u(""), void m(!0);
                              if (!t.success) {
                                const {
                                    error: { code: e }
                                  } = t,
                                  n = Yl[e];
                                u(a(null != n ? n : Kl));
                              }
                            })(i),
                              (0, j.Kz)(
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
                _
                  ? (0, c.tZ)(Fl, {
                      description: a.markup("breach_report_verify_domain_dialog_description_markup"),
                      secondaryDescription: a("breach_report_verify_domain_dialog_secondary_description"),
                      linkLabel: a("breach_report_verify_domain_href_label"),
                      href: Tr,
                      onClick: () => {
                        (0, j.Kz)(
                          new o.UserOpenHelpCenterEvent({ helpCenterArticleCta: o.HelpCenterArticleCta.ViewDomainVerificationGuide })
                        );
                      },
                      domainName: i,
                      onSuccess: () => {
                        e(i);
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
      async function Xl(e, t, a = 0) {
        const n = await ea.C.getDarkWebInsightsReportResults({ domain: e, offset: a, count: t });
        if (n?.success) return n.data;
        throw new Error("[fetchDarkWebInsightsResults] - Server Error: Unable to load dark web insight report results data");
      }
      var Jl, ec, tc;
      const ac = ({ domainName: e }) => {
        const { translate: t } = (0, p.Z)();
        return (0, c.tZ)(
          d.Zbd,
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
          Jl ||
            (Jl = (0, c.tZ)("img", {
              src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEzIiBoZWlnaHQ9IjExMyIgdmlld0JveD0iMCAwIDExMyAxMTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHg9IjAuNSIgd2lkdGg9IjExMiIgaGVpZ2h0PSIxMTMiIHJ4PSI1NiIgZmlsbD0iI0Y1RjdGNyIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTUwLjAzMzggMjYuNTYyMkM0MC45NzkgMjcuNjk4NiAzNC41NiAzNS45NjAyIDM1LjY5NjQgNDUuMDE1TDM2LjY0OTUgNTIuNjA4NUwzMS45OTUyIDUzLjE5MjZDMzAuODk5MiA1My4zMzAyIDMwLjEyMjMgNTQuMzMwMSAzMC4yNTk4IDU1LjQyNjFMMzQuNTYyMSA4OS43MDVDMzQuNjk5NyA5MC44MDEgMzUuNjk5NyA5MS41Nzc5IDM2Ljc5NTYgOTEuNDQwNEw3OS4wNDI4IDg2LjEzOEM4MC4xMzg4IDg2LjAwMDQgODAuOTE1NyA4NS4wMDA1IDgwLjc3ODIgODMuOTA0NUw3Ni40NzU5IDQ5LjYyNTZDNzYuMzM4MyA0OC41Mjk2IDc1LjMzODQgNDcuNzUyNyA3NC4yNDI0IDQ3Ljg5MDJMNjkuNDM5NiA0OC40OTNMNjguNDg2NiA0MC44OTk1QzY3LjM1MDEgMzEuODQ0OCA1OS4wODg1IDI1LjQyNTcgNTAuMDMzOCAyNi41NjIyWk00MC43NDk5IDQ0LjQ2OTlMNDEuNjkxOSA1MS45NzU2TDY0LjM5MjggNDkuMTI2NUw2My40NTA3IDQxLjYyMDhDNjIuNjY0IDM1LjM1MjEgNTYuOTQ0NCAzMC45MDgxIDUwLjY3NTcgMzEuNjk0OUM0NC40MDcxIDMyLjQ4MTcgMzkuOTYzMSAzOC4yMDEyIDQwLjc0OTkgNDQuNDY5OVpNNzguMTg0MiAzMi4yODA4TDc0LjE0ODUgMzYuNDAzNkw3NS43NCAzNy45NjE2TDc5Ljc3NTggMzMuODM4OEw3OC4xODQyIDMyLjI4MDhaTTc3LjI0NzEgNDAuMDg4Mkw3OS45MzA0IDM5LjUxNDhMODAuMjkzMiA0MS4yMTI1TDc3LjYwOTkgNDEuNzg1OUw3Ny4yNDcxIDQwLjA4ODJaTTcxLjA0MTMgMzEuODczOEw3MC44ODg3IDM1Ljg0ODRMNzIuNzg0MiAzNS45MjEyTDcyLjkzNjggMzEuOTQ2Nkw3MS4wNDEzIDMxLjg3MzhaIiBmaWxsPSIjOUZBRUIxIi8+Cjwvc3ZnPgo="
            })),
          ec || (ec = (0, c.tZ)("br", null)),
          (0, c.tZ)(
            d.nvN,
            { color: d.colors.black, bold: !0, size: "large" },
            t("team_dashboard_dark_web_insights_domain_incident_free_title", { domainName: e })
          ),
          tc || (tc = (0, c.tZ)("br", null)),
          (0, c.tZ)(d.nvN, { color: d.colors.grey00 }, t("team_dwi_domain_incident_free_description"))
        );
      };
      var nc, sc;
      const ic = {
          minHeight: "575px",
          padding: "24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column"
        },
        oc = () => {
          const { translate: e } = (0, p.Z)();
          return (0, c.tZ)(
            d.Zbd,
            { sx: ic },
            (0, c.tZ)(d.HoD, { size: 88, color: d.colors.dashGreen00, strokeWidth: 1 }),
            nc || (nc = (0, c.tZ)("br", null)),
            (0, c.tZ)(d.nvN, { color: d.colors.grey00 }, e("team_dark_web_insights_scanning_incidents_txt"))
          );
        },
        rc = () => {
          const { translate: e } = (0, p.Z)();
          return (0, c.tZ)(
            d.Zbd,
            { sx: ic },
            (0, c.tZ)(d.HoD, { size: 88, color: d.colors.dashGreen00, strokeWidth: 1 }),
            sc || (sc = (0, c.tZ)("br", null)),
            (0, c.tZ)(d.nvN, { color: d.colors.grey00 }, e("team_dashboard_dark_web_insights_generating_msg"))
          );
        },
        lc = ({ breach: e, id: t, isFirstInGroup: a = !1, isLastInGroup: n = !1, opened: s = !1 }) => {
          const { translate: i } = (0, p.Z)();
          return (0, c.tZ)(
            "tr",
            {
              id: t,
              sx: {
                backgroundColor: d.colors.grey06,
                borderLeft: `3px solid ${d.colors.dashGreen00}`,
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
            (0, c.tZ)(
              "td",
              { colSpan: 2 },
              (0, c.tZ)(
                d.nvN,
                {
                  size: "small",
                  as: "div",
                  sx: { fontWeight: "light", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-end" }
                },
                (0, c.tZ)(
                  "div",
                  { sx: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-end" } },
                  e.domain && "" !== e.domain
                    ? (0, c.tZ)(d.plG, { size: "small", text: e.domain, backgroundColor: d.colors.dashGreen00 })
                    : null,
                  (0, c.tZ)(
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
            (0, c.tZ)(
              "td",
              null,
              (0, c.tZ)(
                d.nvN,
                {
                  sx: { "::first-letter": { textTransform: "uppercase" }, textTransform: "lowercase" },
                  size: "x-small",
                  color: d.colors.grey00
                },
                e.types.map((e) => i(dc[e])).join(", ")
              )
            ),
            (0, c.tZ)(
              "td",
              { colSpan: 3 },
              (0, c.tZ)(
                d.nvN,
                { size: "x-small", as: "span", color: d.colors.grey00 },
                (0, c.tZ)(Gi.v, { date: (0, Xt.Z)(e.breachDateUnix), format: sa._T.ll })
              )
            )
          );
        },
        cc = {
          borderBottom: `1px solid ${d.colors.dashGreen05}`,
          height: "55px",
          position: "relative",
          borderLeft: "3px solid white",
          "&:hover,:focus-visible": { cursor: "pointer", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.16)" },
          '&[aria-expanded="true"]': { borderLeftColor: d.colors.dashGreen00 },
          "> td": { verticalAlign: "middle", padding: "0 16px" }
        },
        dc = {
          [l.DarkWebInsightsBreachType.Password]: "team_dark_web_insights_incident_data_type_password",
          [l.DarkWebInsightsBreachType.CreditCard]: "team_dark_web_insights_incident_data_type_credit_card",
          [l.DarkWebInsightsBreachType.IPAddress]: "team_dark_web_insights_incident_data_type_ip_address",
          [l.DarkWebInsightsBreachType.MailingAddress]: "team_dark_web_insights_incident_data_type_mailing_address",
          [l.DarkWebInsightsBreachType.Phone]: "team_dark_web_insights_incident_data_type_phone",
          [l.DarkWebInsightsBreachType.Email]: "team_dark_web_insights_incident_data_type_email",
          [l.DarkWebInsightsBreachType.Social]: "team_dark_web_insights_incident_data_type_social",
          [l.DarkWebInsightsBreachType.GeoLocation]: "team_dark_web_insights_incident_data_type_geolocation",
          [l.DarkWebInsightsBreachType.UserName]: "team_dark_web_insights_incident_data_type_username",
          [l.DarkWebInsightsBreachType.PersonalInfo]: "team_dark_web_insights_incident_data_type_personalinfo"
        },
        uc = ({ userReport: e, isPendingMember: t = !1, onInviteAction: a, shouldShowInviteButton: s }) => {
          const { translate: i } = (0, p.Z)(),
            [o, r] = (0, n.useState)(!1),
            u = e.leaks?.map((t, a) => `${e.email}-${a}`).join(" ");
          return (0, c.tZ)(
            n.Fragment,
            null,
            (0, c.tZ)(
              "tr",
              {
                id: e.email,
                key: e.email,
                tabIndex: 0,
                "aria-expanded": o,
                "aria-controls": u,
                onKeyDown: (e) => {
                  "Enter" === e.key && (e.preventDefault(), r((e) => !e));
                },
                onClick: () => {
                  r((e) => !e);
                },
                sx: cc
              },
              (0, c.tZ)("td", null, (0, c.tZ)(d.nvN, { size: "x-small", as: "span" }, e.email)),
              (0, c.tZ)(
                "td",
                null,
                (0, c.tZ)(
                  d.Ejs,
                  { flexDirection: "row" },
                  (0, c.tZ)(d.nvN, { size: "medium", as: "span", sx: { fontWeight: "bold" } }, e.breachesCount),
                  e.viewStatus === l.EmailIncidentViewStatuses.New ? (0, c.tZ)(d.P_k, { dot: !0, ariaLabel: i("team_new_label") }) : null
                )
              ),
              (0, c.tZ)(
                d.nvN,
                {
                  size: "x-small",
                  as: "td",
                  color: d.colors.grey00,
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
                  const t = e.leaks.map((e) => e.types.map((e) => i(dc[e])));
                  return [...new Set(t.flat())].join(", ");
                })(e)
              ),
              (0, c.tZ)(
                "td",
                null,
                (0, c.tZ)(
                  d.nvN,
                  { size: "x-small", as: "span", color: d.colors.grey00 },
                  (0, c.tZ)(Gi.v, { date: (0, Xt.Z)(e.leaks[0].breachDateUnix), format: sa._T.ll })
                )
              ),
              (0, c.tZ)(
                "td",
                null,
                s
                  ? (0, c.tZ)(
                      d.zxk,
                      {
                        onClick: () => {
                          a(e.email);
                        },
                        type: "button",
                        nature: "secondary"
                      },
                      i("team_dark_web_insights_incident_summary_invite_button")
                    )
                  : (0, c.tZ)(
                      d.nvN,
                      { size: "x-small", as: "span", color: d.colors.grey00 },
                      i(t ? "team_dark_web_insights_incident_summary_pending" : "team_dark_web_insights_incident_summary_member")
                    )
              ),
              (0, c.tZ)(
                "td",
                { "aria-label": i("team_dark_web_insights_incident_summary_expand") },
                (0, c.tZ)(d.veu, { sx: { transform: o ? "scale3D(1, -1, 1)" : "scale3D(1, 1, 1)" } })
              )
            ),
            e.leaks.map((t, a, n) => {
              const s = `${e.email}-${t.domain}-${t.breachDateUnix}`;
              return (0, c.tZ)(lc, { id: s, key: s, breach: t, opened: o, isFirstInGroup: 0 === a, isLastInGroup: a === n.length - 1 });
            })
          );
        },
        _c = ({ emailsToInvite: e, reports: t, isLoading: a, pendingMembers: n, onInviteAction: s }) => {
          const { translate: i } = (0, p.Z)(),
            o = [
              { headerLabel: i("team_dark_web_insights_table_header_email_affected"), headerKey: "email-affected" },
              { headerLabel: i("team_dark_web_insights_table_header_incidents"), headerKey: "incidents" },
              { headerLabel: i("team_dark_web_insights_table_header_data_affected"), headerKey: "data-affected" },
              { headerLabel: i("team_dark_web_insights_table_header_last_incident"), headerKey: "last-incident" },
              { headerLabel: i("team_dark_web_insights_table_header_member_status"), headerKey: "member-status" },
              { headerLabel: "", headerKey: "actions" }
            ];
          return (0, c.tZ)(
            "div",
            { sx: { minWidth: "100%", minHeight: "600px" } },
            a
              ? (0, c.tZ)(
                  "div",
                  { sx: { display: "block", width: "950px", height: "600px", position: "absolute", textAlign: "center" } },
                  (0, c.tZ)(d.HoD, { sx: { position: "relative", top: "50%" }, size: 120, color: d.colors.dashGreen00, strokeWidth: 1 })
                )
              : null,
            (0, c.tZ)(
              "table",
              { sx: { minWidth: "100%" } },
              (0, c.tZ)(ji, { columns: o }),
              (0, c.tZ)(
                "tbody",
                { sx: a ? { opacity: "0.5" } : {} },
                t.map((t) =>
                  (0, c.tZ)(uc, {
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
        mc = ({ label: e, labelGridArea: t, title: a, titleGridArea: s }) =>
          (0, y.tZ)(
            n.Fragment,
            null,
            (0, y.tZ)(y.nv, { sx: { gridArea: t }, textStyle: "ds.specialty.monospace.small", color: "ds.text.warning.quiet" }, a),
            (0, y.tZ)(y.nv, { color: "ds.text.neutral.quiet", sx: { gridArea: s } }, e)
          ),
        pc = ({ gridArea: e }) =>
          (0, y.tZ)("div", {
            sx: { gridArea: e, backgroundColor: "ds.border.neutral.quiet.idle", height: "100%", width: "1px", alignSelf: "center" }
          });
      var gc, yc;
      const bc = ({ reports: e, suggestedInvitees: t, onInviteAll: a }) => {
          const { translate: n } = (0, p.Z)();
          return (0, y.tZ)(
            d.Zbd,
            { sx: { marginBottom: "24px", padding: "24px 24px" } },
            (0, y.tZ)(y.X6, { as: "h3", sx: { marginBottom: "24px" } }, n("team_dark_web_insights_summary_title")),
            (0, y.tZ)(
              d.T5p,
              {
                gridTemplateColumns: "1fr 1px 1fr 1px 1fr max-content",
                gridTemplateAreas:
                  '"label-0 divider-left label-1 divider-right label-2 invite-all" "title-0 divider-left title-1 divider-right title-2 invite-all"',
                alignItems: "center",
                sx: { columnGap: "16px", justifyContent: "center" }
              },
              (0, y.tZ)(mc, {
                labelGridArea: "label-0",
                label: n("team_dark_web_insights_summary_employees_affected"),
                titleGridArea: "title-0",
                title: e.emailsImpactedCount
              }),
              gc || (gc = (0, y.tZ)(pc, { gridArea: "divider-left" })),
              (0, y.tZ)(mc, {
                labelGridArea: "label-1",
                label: n("team_dark_web_insights_summary_total_incidents"),
                titleGridArea: "title-1",
                title: e.leaksCount
              }),
              yc || (yc = (0, y.tZ)(pc, { gridArea: "divider-right" })),
              (0, y.tZ)(mc, {
                labelGridArea: "label-2",
                label: n("team_dark_web_insights_summary_not_protected"),
                titleGridArea: "title-2",
                title: n("team_dark_web_insights_summary_employee_invitation", { count: t.length })
              }),
              (0, y.tZ)(
                d.dDn,
                { gridArea: "invite-all", alignSelf: "center" },
                (0, y.tZ)(y.zx, { onClick: a }, n("team_dark_web_insights_summary_invite_all_button"))
              )
            )
          );
        },
        hc = (e) => e.filter(({ status: e }) => "removed" !== e).length;
      var xc = a(351055),
        Sc = a(336039),
        vc = a(93131),
        fc = a(215230),
        Cc = a(420145);
      const Ec = {
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
      let Zc = (function (e) {
        return (e.SSO_ALREADY_ACTIVATED = "sso_already_activated"), (e.USER_HAS_MASTER_PASSWORD = "USER_HAS_MASTER_PASSWORD"), e;
      })({});
      function Tc(e) {
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
                    planTier: b
                  } = await (0, ae.I)();
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
                    u(b),
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
                await (0, Un.jy)(a);
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
      const Nc = "inviteResultDialogHeader--v_8lOJQXCj",
        Dc = "refusedMember--SNbCU5FzB1",
        Mc = "reason--jFHJ7kk1d9",
        Ic = "irDialogIcon--Rx0OQmu57r";
      var Ac;
      const wc = { invitedMembers: {}, refusedMembers: {}, show: !1 },
        kc = () => {
          const [e, t] = n.useState(wc);
          return {
            invitePartialSuccessState: e,
            setInvitePartialSuccessState: t,
            handleInvitationResultClosed: () => {
              t(wc);
            }
          };
        },
        Oc = ({ teamId: e, isOpen: t, invitedMembers: a, refusedMembers: s, onClose: i }) => {
          const { translate: o } = (0, p.Z)(),
            [r, l] = n.useState([]),
            [c, u] = n.useState([]),
            _ = Object.keys(a).length,
            m = Object.keys(s).length,
            { teamSettings: g, teamSettingsLoading: y } = Tc(e),
            b = g?.ssoEnabled;
          return (
            n.useEffect(() => {
              if (y) return;
              const e = [],
                t = [];
              Object.keys(s).forEach((a) => {
                const n = s[a];
                n !== Zc.SSO_ALREADY_ACTIVATED || b
                  ? n === Zc.USER_HAS_MASTER_PASSWORD && b
                    ? t.push({ email: a, key: Ec.PRE_EXISTING_MP_USER, errorType: n })
                    : e.push({ email: a, errorType: n })
                  : t.push({ email: a, key: Ec.INVITE_RESTRICTED, errorType: n });
              }),
                l(e),
                u(t);
            }, [y, b, s]),
            n.createElement(
              d.VqE,
              { closeIconName: o("_common_dialog_dismiss_button"), isOpen: t, onClose: i, ariaDescribedby: "refusedList" },
              n.createElement(d.$N8, { title: o("team_invite_result_dialog_title") }),
              n.createElement(
                d.a7O,
                null,
                y
                  ? Ac || (Ac = n.createElement(Rs.Z, { size: 30 }))
                  : n.createElement(
                      n.Fragment,
                      null,
                      _
                        ? n.createElement(
                            "div",
                            { className: "successfulInvitesRatio--Jbd0Eax7op" },
                            n.createElement("img", {
                              src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNNiA5TDcuOTU5MjggMTFMMTEuOTc5NiA3TTAuNSA5QzAuNSA0LjMwNTQ1IDQuMzA2MyAwLjUgOSAwLjVDMTMuNjkzNyAwLjUgMTcuNSA0LjMwNTQ1IDE3LjUgOUMxNy41IDEzLjY5NDYgMTMuNjkzNyAxNy41IDkgMTcuNUM0LjMwNjMgMTcuNSAwLjUgMTMuNjk0NiAwLjUgOVoiIHN0cm9rZT0iIzIwQjQyMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=",
                              className: Ic
                            }),
                            n.createElement(
                              "span",
                              { className: Nc },
                              o("team_invite_result_dialog_successful_invites_rate", { proposedMembers: _ + m, invitedMembers: _ })
                            )
                          )
                        : null,
                      n.createElement(
                        "div",
                        { className: "refusedMemberListTitle--Omq1aAlxkx" },
                        n.createElement("img", {
                          src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNNS41IDEyLjVMMTIuNSA1LjVNMTIuNSAxMi41TDUuNSA1LjVNMC41IDlDMC41IDQuMzA1ODcgNC4zMDU4NyAwLjUgOSAwLjVDMTMuNjk0MSAwLjUgMTcuNSA0LjMwNTg3IDE3LjUgOUMxNy41IDEzLjY5NDEgMTMuNjk0MSAxNy41IDkgMTcuNUM0LjMwNTg3IDE3LjUgMC41IDEzLjY5NDEgMC41IDlaIiBzdHJva2U9IiNGRjAwMkQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K",
                          className: Ic
                        }),
                        n.createElement(
                          "span",
                          { id: "refusedList", className: Nc },
                          o("team_invite_result_dialog_refused_member_list_title", { count: m })
                        )
                      ),
                      n.createElement(
                        "ul",
                        { className: "refusedMemberList--pPxtCXVRX3" },
                        r.map((e) =>
                          n.createElement(
                            "li",
                            { className: Dc, key: e.email },
                            e.email,
                            n.createElement(
                              "span",
                              { className: Mc },
                              ": ",
                              Ec[e.errorType.toUpperCase()]
                                ? o(Ec[e.errorType.toUpperCase()])
                                : o.markup(Ec.GENERIC_ERROR, { helpCenter: oe.Bw }, { linkTarget: "_blank" })
                            )
                          )
                        ),
                        c.map((e) =>
                          n.createElement(
                            "li",
                            { className: Dc, key: e.email },
                            e.email,
                            n.createElement(
                              "span",
                              { className: Mc },
                              ": ",
                              ((e) => {
                                switch (e) {
                                  case Ec.INVITE_RESTRICTED:
                                    return Cc.Iu.markup(Ec.INVITE_RESTRICTED, { helpCenter: oe.Iw });
                                  case Ec.PRE_EXISTING_MP_USER:
                                    return Cc.Iu.markup(Ec.PRE_EXISTING_MP_USER, { ssoLimitations: oe.Iw, dashlaneSupport: oe.Bw });
                                  default:
                                    return Cc.Iu.markup(Ec.GENERIC_ERROR, { helpCenter: oe.Bw });
                                }
                              })(e.key)
                            )
                          )
                        )
                      )
                    )
              ),
              n.createElement(d.cNS, {
                primaryButtonTitle: o("team_invite_result_dialog_button_ok"),
                primaryButtonOnClick: i,
                secondaryButtonTitle: o("team_invite_result_dialog_button_help_center"),
                secondaryButtonOnClick: () => (0, z.Yo)(oe.Bw)
              })
            )
          );
        },
        Lc = ({ handleClickOnRetry: e }) => {
          const { translate: t } = (0, p.Z)();
          return (0, c.tZ)(
            n.Fragment,
            null,
            (0, c.tZ)(
              "div",
              { sx: { transform: "translate(-5px, -5px)", margin: "25px 0px" } },
              (0, c.tZ)(d.enX, { color: y.O9.lightTheme.ds.text.danger.quiet, size: 75 })
            ),
            (0, c.tZ)(d.$N8, {
              id: "backup-code-generation-error-dialog-title",
              title: t("team_members_generate_recovery_codes_error_dialog_title")
            }),
            (0, c.tZ)(
              d.a7O,
              null,
              (0, c.tZ)(
                d.nvN,
                { id: "backup-code-generation-error-dialog-description", sx: { color: y.O9.lightTheme.ds.text.neutral.standard } },
                t("team_members_generate_recovery_codes_error_dialog_description")
              )
            ),
            (0, c.tZ)(d.cNS, {
              primaryButtonTitle: t("team_members_generate_recovery_codes_error_dialog_confirm_button"),
              primaryButtonProps: { id: "backup-code-generation-error-dialog-try-again-button", type: "button", autoFocus: !0 },
              primaryButtonOnClick: () => e()
            })
          );
        };
      var zc,
        Rc = a(757510);
      const jc = ({ memberLogin: e, recoveryCodes: t, handleClickOnDone: a }) => {
        const { translate: n } = (0, p.Z)();
        return (0, c.tZ)(
          "div",
          null,
          (0, c.tZ)(d.$N8, {
            id: "backup-code-generation-dialog-list-title",
            title: n("team_members_generate_recovery_codes_dialog_title", { memberLogin: e })
          }),
          (0, c.tZ)(
            d.a7O,
            null,
            (0, c.tZ)(
              d.nvN,
              {
                id: 'id="backup-code-generation-dialog-list-description"',
                sx: { mb: "24px", mt: "6px", color: y.O9.lightTheme.ds.text.neutral.standard }
              },
              n("team_members_generate_recovery_codes_dialog_description", { memberLogin: e })
            ),
            (0, c.tZ)(
              d.j49,
              { color: y.O9.lightTheme.ds.text.brand.standard, id: 'id="backup-code-generation-dialog-list-eyebrow"' },
              n("team_members_generate_recovery_codes_dialog_codes_label")
            ),
            (0, c.tZ)(
              d.Zbd,
              { sx: { mt: "6px", padding: "8px 12px", width: "100%" } },
              t?.map((e, t) => (0, c.tZ)(d.nvN, { key: e, "data-testid": `two-factor-authentication-backup-code-${t}` }, e))
            ),
            (0, c.tZ)(
              d.zxk,
              {
                sx: { mt: "24px" },
                type: "button",
                nature: "secondary",
                id: "backup-code-generation-dialog-list-download-button",
                onClick: () => {
                  const e = t?.join("\n");
                  (0, Zi.W)(e, Rc.B);
                }
              },
              (0, c.tZ)(
                d.Ejs,
                null,
                (0, c.tZ)(d.k$b, { sx: { mr: "10px" } }, zc || (zc = (0, c.tZ)(d._8t, { size: 16 }))),
                n("team_members_generate_recovery_codes_dialog_download_button")
              )
            )
          ),
          (0, c.tZ)(d.cNS, {
            primaryButtonTitle: n("team_members_generate_recovery_codes_dialog_confirm_button"),
            primaryButtonProps: { id: "id=backup-code-generation-dialog-list-done-button", type: "button", autoFocus: !0 },
            primaryButtonOnClick: () => a()
          })
        );
      };
      var Pc;
      const Uc = ({ isOpen: e, memberLogin: t, closeBackupCodeDialog: a }) => {
        const [s, i] = (0, n.useState)(!1),
          [o, r] = (0, n.useState)(),
          l = async () => {
            const e = await ea.C.getRecoveryCodesAsTeamCaptain({ login: t });
            e.success ? r(e.data.recoveryCodes) : i(!0);
          },
          u = () => {
            i(!1), r(void 0), a();
          };
        (0, n.useEffect)(() => {
          e && !s && l();
        }, [e]);
        const { translate: _ } = (0, p.Z)();
        return (0, c.tZ)(
          d.VqE,
          {
            isOpen: e,
            closeIconName: s ? _("BUTTON_CLOSE_DIALOG") : "",
            onClose: () => {
              u();
            }
          },
          s
            ? (0, c.tZ)(Lc, {
                handleClickOnRetry: () => {
                  i(!1), l();
                }
              })
            : o
            ? (0, c.tZ)(jc, { memberLogin: t, recoveryCodes: o, handleClickOnDone: u })
            : (0, c.tZ)(
                n.Fragment,
                null,
                (0, c.tZ)(d.$N8, {
                  id: "backup-code-generation-dialog-loader-title",
                  title: _("team_members_generate_recovery_codes_dialog_loading_title", { memberLogin: t })
                }),
                (0, c.tZ)(d.a7O, null, (0, c.tZ)("div", { sx: { mt: "26px" } }, Pc || (Pc = (0, c.tZ)(Rs.Z, { mode: "light", size: 75 }))))
              )
        );
      };
      var Bc = a(156652),
        Gc = a(714072);
      const Fc = ({ closeDialog: e, resendOrReactivate: t }) => {
          const { translate: a } = (0, p.Z)(),
            { showToast: s } = (0, y.pm)(),
            [i, o] = (0, n.useState)(!1),
            { getInviteLinkDataForAdmin: r, inviteLinkDataForAdmin: l } = (0, Gc.h)(),
            c = !1 === l?.disabled,
            d = (0, oe.cI)(l?.teamKey);
          return (
            (0, n.useEffect)(() => {
              r();
            }, []),
            (0, y.tZ)(
              y.Vq,
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
                  secondary: c
                    ? {
                        children: a("team_members_resend_copy_invite_link"),
                        onClick: () => {
                          navigator.clipboard.writeText(d), s({ description: a("team_members_share_invite_link_copied"), mood: "brand" });
                        }
                      }
                    : void 0
                }
              },
              (0, y.tZ)(y.nv, null, a("team_members_resend_invite_dialog_message")),
              c
                ? (0, y.tZ)(
                    n.Fragment,
                    null,
                    (0, y.tZ)(y.nv, { textStyle: "ds.body.standard.regular" }, a("team_members_resend_invite_link_description")),
                    (0, y.tZ)(y.nv, { textStyle: "ds.body.standard.regular", sx: { textDecoration: "underline" } }, d)
                  )
                : null
            )
          );
        },
        qc = {
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
        Vc = ({ lee: e, closeDialog: t, selectedMembers: a }) => {
          const { translate: n } = (0, p.Z)(),
            s = (0, Ra.V)(),
            { reportTACError: i } = $(),
            o = (0, vr.I)(),
            r = 1 === a.length,
            l = o.status !== je.rq.Success || !o.isDisabled,
            c = r ? qc.SINGLE : qc.MULTIPLE;
          return (0, y.tZ)(
            y.Vq,
            {
              isOpen: !0,
              onClose: t,
              isDestructive: !0,
              actions: {
                primary: {
                  children: n(c.REVOKE_DIALOG_CONFIRM),
                  onClick: async () => {
                    t();
                    const o = (0, sn.v0)(e.globalState);
                    if (!o) return void i(new Error(en.N));
                    const { teamId: r } = o;
                    if (r)
                      try {
                        const t = a.map((e) => e.login),
                          {
                            content: { removedMembers: i, unproposedMembers: l, refusedMembers: c }
                          } = await new rn.Z().revokeMembers({ auth: o, memberLogins: t }),
                          u = Object.keys({ ...i, ...l });
                        u.forEach((t) => {
                          const n = a.find((e) => e.login === t);
                          e.dispatch(Bc.Rb(n));
                        }),
                          Object.keys(c).forEach((t) => {
                            const i = a.find((e) => e.login === t);
                            if (!i) throw new Error(`member '${t}' not found in members list`);
                            s.showAlert(n(qc.REVOKE_ERROR_MSG), d.BLW.ERROR), e.dispatch(Bc.Jo(i));
                          }),
                          u.length &&
                            (s.showAlert(n(qc.REVOKE_SUCCESS_MSG, { count: u.length }), d.BLW.SUCCESS),
                            await (0, Un.hh)({ teamId: r, action: "memberRevoked", users: u }));
                      } catch (e) {
                        i(e);
                      }
                  }
                },
                secondary: { children: n(c.REVOKE_DIALOG_CANCEL), onClick: t }
              },
              closeActionLabel: "",
              title: r ? n(qc.SINGLE.REVOKE_DIALOG_TITLE) : n(qc.MULTIPLE.REVOKE_DIALOG_TITLE, { count: a.length })
            },
            (0, y.tZ)(
              y.nv,
              { className: "automation-tests-revoke-member-dialog-content" },
              r
                ? n(l ? qc.SINGLE.REVOKE_DIALOG_MSG : qc.SINGLE.REVOKE_DIALOG_MSG_B2B_ONLY, { username: a[0].login || a[0].name })
                : n(l ? qc.MULTIPLE.REVOKE_DIALOG_MSG : qc.MULTIPLE.REVOKE_DIALOG_MSG_B2B_ONLY)
            )
          );
        },
        $c = {
          CAPTAIN_PROMOTE_ERROR_GENERIC_TITLE: "team_members_captain_promote_error_generic_title",
          CAPTAIN_PROMOTE_ERROR_GENERIC_MESSAGE: "team_members_captain_promote_error_generic_message",
          CAPTAIN_PROMOTE_INVITE_ERROR_PK_TITLE: "team_members_captain_promote_invite_error_public_key_title",
          CAPTAIN_PROMOTE_INVITE_ERROR_PK_MESSAGE: "team_members_captain_promote_invite_error_public_key_message",
          CAPTAIN_PROMOTE_SUCCESS_MSG: "team_members_captain_promote_success_message",
          CAPTAIN_MULTIPLE_PROMOTE_DIALOG_MSG_NOBODY: "team_members_captain_multiple_promote_dialog_message_nobody",
          SINGLE: {
            PROMOTE_DIALOG_CONFIRM: "team_members_captain_single_promote_dialog_confirm",
            PROMOTE_DIALOG_CANCEL: "team_members_captain_single_promote_dialog_cancel",
            PROMOTE_DIALOG_MSG: "team_members_captain_single_promote_dialog_message",
            PROMOTE_DIALOG_TITLE: "team_members_captain_single_promote_dialog_title"
          },
          MULTIPLE: {
            PROMOTE_DIALOG_CONFIRM: "team_members_captain_multiple_promote_dialog_confirm",
            PROMOTE_DIALOG_CANCEL: "team_members_captain_multiple_promote_dialog_cancel",
            PROMOTE_DIALOG_MSG: "team_members_captain_multiple_promote_dialog_message",
            PROMOTE_DIALOG_TITLE: "team_members_captain_multiple_promote_dialog_title"
          }
        },
        Wc = ({ lee: e, closeDialog: t, selectedMembers: a }) => {
          const { translate: n } = (0, p.Z)(),
            s = (0, Ra.V)(),
            { reportTACError: i, addAlertToQueue: o } = $(),
            r = (e) => {
              const t = bu(e);
              ((e) => {
                e.forEach((e) => {
                  i(e);
                });
              })(t);
              const a = t[0],
                s = { title: n($c.CAPTAIN_PROMOTE_ERROR_GENERIC_TITLE), message: n($c.CAPTAIN_PROMOTE_ERROR_GENERIC_MESSAGE) },
                r = { title: n($c.CAPTAIN_PROMOTE_INVITE_ERROR_PK_TITLE), message: n($c.CAPTAIN_PROMOTE_INVITE_ERROR_PK_MESSAGE) };
              let l;
              try {
                l = JSON.parse(a.message);
              } catch {
                l = {};
              }
              o("MISSING_PUBLIC_KEY" === l?.code ? r : s);
            };
          if (!a.length)
            return (0, c.tZ)(
              G.o,
              {
                isOpen: !0,
                footer: (0, c.tZ)(d.cNS, {
                  intent: "secondary",
                  secondaryButtonTitle: n($c.MULTIPLE.PROMOTE_DIALOG_CANCEL),
                  secondaryButtonOnClick: t
                }),
                onRequestClose: t,
                title: n($c.MULTIPLE.PROMOTE_DIALOG_TITLE)
              },
              n($c.CAPTAIN_MULTIPLE_PROMOTE_DIALOG_MSG_NOBODY)
            );
          const l = 1 === a.length,
            u = l ? $c.SINGLE : $c.MULTIPLE;
          return (0, c.tZ)(
            G.o,
            {
              isOpen: !0,
              footer: (0, c.tZ)(d.cNS, {
                intent: "primary",
                primaryButtonTitle: l ? n($c.SINGLE.PROMOTE_DIALOG_CONFIRM) : n($c.MULTIPLE.PROMOTE_DIALOG_CONFIRM, { count: a.length }),
                primaryButtonOnClick: async () => {
                  const o = (0, sn.v0)(e.globalState);
                  if (!o) return void i(new Error(en.N));
                  const { teamId: l } = o;
                  if (!l) return;
                  const { errors: c, successes: u } = await gu(
                    a,
                    async (t) => (
                      await (0, Un.JQ)({ teamId: l, memberLogin: t.login }),
                      e.dispatch(Bc.VW(t)),
                      s.showAlert(n($c.CAPTAIN_PROMOTE_SUCCESS_MSG, { username: t.name || t.login || "Member" }), d.BLW.SUCCESS),
                      t.login
                    )
                  );
                  if (u.length)
                    try {
                      await (0, Un.hh)({ teamId: l, action: "adminPromoted", users: u });
                    } catch (e) {
                      r(e);
                    } finally {
                      t();
                    }
                  c.length && r(c);
                },
                secondaryButtonTitle: n(u.PROMOTE_DIALOG_CANCEL),
                secondaryButtonOnClick: t
              }),
              onRequestClose: t,
              title: n(u.PROMOTE_DIALOG_TITLE)
            },
            l ? n($c.SINGLE.PROMOTE_DIALOG_MSG, { username: a[0].login || a[0].name }) : n($c.MULTIPLE.PROMOTE_DIALOG_MSG)
          );
        },
        Hc = {
          CAPTAIN_DEMOTE_FAILURE_MSG: "team_members_captain_demote_failure_message",
          CAPTAIN_DEMOTE_SUCCESS_MSG: "team_members_captain_demote_success_message",
          CAPTAIN_MULTIPLE_DEMOTE_DIALOG_MSG_NOBODY: "team_members_captain_multiple_demote_dialog_message_nobody",
          SINGLE: {
            DEMOTE_DIALOG_CONFIRM: "team_members_captain_single_demote_dialog_confirm",
            DEMOTE_DIALOG_CANCEL: "team_members_captain_single_demote_dialog_cancel",
            DEMOTE_DIALOG_MSG: "team_members_captain_single_demote_dialog_message",
            DEMOTE_DIALOG_TITLE: "team_members_captain_single_demote_dialog_title"
          },
          MULTIPLE: {
            DEMOTE_DIALOG_CONFIRM: "team_members_captain_multiple_demote_dialog_confirm",
            DEMOTE_DIALOG_CANCEL: "team_members_captain_multiple_demote_dialog_cancel",
            DEMOTE_DIALOG_MSG: "team_members_captain_multiple_demote_dialog_message",
            DEMOTE_DIALOG_TITLE: "team_members_captain_multiple_demote_dialog_title"
          }
        },
        Kc = ({ lee: e, closeDialog: t, selectedMembers: a }) => {
          const { translate: n } = (0, p.Z)(),
            s = (0, Ra.V)(),
            { reportTACError: i } = $(),
            o = (e) => {
              ((e) => {
                e.forEach((e) => {
                  i(e);
                });
              })(bu(e)),
                s.showAlert(n(Hc.CAPTAIN_DEMOTE_FAILURE_MSG), d.BLW.ERROR);
            };
          if (!a.length)
            return (0, c.tZ)(
              G.o,
              {
                isOpen: !0,
                footer: (0, c.tZ)(d.cNS, {
                  intent: "secondary",
                  secondaryButtonTitle: n(Hc.MULTIPLE.DEMOTE_DIALOG_CANCEL),
                  secondaryButtonOnClick: t
                }),
                onRequestClose: t,
                title: n(Hc.MULTIPLE.DEMOTE_DIALOG_TITLE)
              },
              n(Hc.CAPTAIN_MULTIPLE_DEMOTE_DIALOG_MSG_NOBODY)
            );
          const r = 1 === a.length,
            l = r ? Hc.SINGLE : Hc.MULTIPLE;
          return (0, c.tZ)(
            G.o,
            {
              isOpen: !0,
              footer: (0, c.tZ)(d.cNS, {
                intent: "primary",
                primaryButtonTitle: r ? n(Hc.SINGLE.DEMOTE_DIALOG_CONFIRM) : n(Hc.MULTIPLE.DEMOTE_DIALOG_CONFIRM, { count: a.length }),
                primaryButtonOnClick: async () => {
                  const r = (0, sn.v0)(e.globalState);
                  if (!r) return void i(new Error(en.N));
                  const { teamId: l } = r;
                  if (!l) return;
                  const { errors: c, successes: u } = await gu(
                    a,
                    async (t) => (
                      await (0, Un.Lx)({ teamId: l, memberLogin: t.login }),
                      e.dispatch(Bc.bj(t)),
                      s.showAlert(n(Hc.CAPTAIN_DEMOTE_SUCCESS_MSG, { username: t.name || t.login || "Member" }), d.BLW.SUCCESS),
                      t.login
                    )
                  );
                  if (u.length)
                    try {
                      await (0, Un.hh)({ teamId: l, action: "adminDemoted", users: u });
                    } catch (e) {
                      o(e);
                    } finally {
                      t();
                    }
                  c.length && o(c);
                },
                secondaryButtonTitle: n(l.DEMOTE_DIALOG_CANCEL),
                secondaryButtonOnClick: t
              }),
              onRequestClose: t,
              title: n(l.DEMOTE_DIALOG_TITLE)
            },
            r ? n(Hc.SINGLE.DEMOTE_DIALOG_MSG, { username: a[0].login || a[0].name }) : n(Hc.MULTIPLE.DEMOTE_DIALOG_MSG)
          );
        };
      var Yc;
      const Qc = ({ closeDialog: e }) => {
          const { translate: t } = (0, p.Z)(),
            a = (0, Ra.V)(),
            { inviteLinkDataForAdmin: s, getInviteLinkDataForAdmin: i } = (0, Gc.h)();
          (0, n.useEffect)(() => {
            i();
          }, [i]);
          const o = (0, oe.cI)(s?.teamKey);
          return (0, c.tZ)(
            G.o,
            {
              showCloseIcon: !0,
              isOpen: !0,
              footer: (0, c.tZ)(d.cNS, {
                intent: "primary",
                primaryButtonTitle: (0, c.tZ)(
                  n.Fragment,
                  null,
                  Yc || (Yc = (0, c.tZ)(y.JO, { name: "ActionCopyOutlined", size: "medium", color: "ds.text.inverse.catchy" })),
                  t("team_memebers_share_link_dialog_copy_link_button")
                ),
                primaryButtonOnClick: async () => {
                  await navigator.clipboard.writeText(o), a.showAlert(t("team_members_share_invite_link_copied"), d.BLW.SUCCESS);
                }
              }),
              onRequestClose: e,
              title: t("team_memebers_share_link_dialog_title")
            },
            (0, c.tZ)(
              n.Fragment,
              null,
              (0, c.tZ)(d.nvN, null, t("team_memebers_share_link_dialog_paragraph")),
              (0, c.tZ)(d.nvN, { sx: { marginTop: "16px", fontWeight: "600" } }, o)
            )
          );
        },
        Xc = ({ membersWithoutPublicKey: e, onClose: t }) => {
          const { translate: a } = (0, p.Z)();
          return (0, c.tZ)(
            G.o,
            {
              isOpen: Boolean(e.length),
              footer: (0, c.tZ)(d.cNS, {
                intent: "secondary",
                secondaryButtonTitle: a("team_members_error_popup_public_keys_ok"),
                secondaryButtonOnClick: t
              }),
              onRequestClose: t,
              title: a("team_members_error_popup_public_keys_title")
            },
            (0, c.tZ)(
              "div",
              null,
              a("team_members_error_popup_public_keys_message"),
              (0, c.tZ)(
                "ul",
                { sx: { listStyleType: "disc", paddingLeft: "40px", marginTop: "1em", marginBottom: "1em" } },
                e.map(({ login: e }) => (0, c.tZ)("li", { key: e }, e))
              )
            )
          );
        },
        Jc = ({ closeDialog: e, applyActionOnMembers: t }) => {
          const { translate: a } = (0, p.Z)(),
            s = (0, Ra.V)(),
            { getInviteLinkDataForAdmin: i, inviteLinkDataForAdmin: o, createInviteLink: r, toggleInviteLink: l } = (0, Gc.h)(),
            { teamInfo: u } = (0, _.G)();
          return (
            (0, n.useEffect)(() => {
              i();
            }, [i]),
            (0, c.tZ)(
              G.o,
              {
                showCloseIcon: !0,
                isOpen: !0,
                footer: (0, c.tZ)(d.cNS, {
                  intent: "primary",
                  primaryButtonTitle: a("team_activation_dialog_activate_button"),
                  primaryButtonOnClick: () =>
                    (async () => {
                      var e;
                      const n = null != (e = u?.teamInfo?.name) ? e : "";
                      o?.teamKey ? o?.disabled && (await l(!1)) : await r(n),
                        s.showAlert(a("team_activation_dialog_notification"), d.BLW.SUCCESS),
                        await i(),
                        t("shareInviteLink");
                    })(),
                  secondaryButtonTitle: a("team_activation_dialog_notrightnow_button"),
                  secondaryButtonOnClick: e
                }),
                onRequestClose: e,
                title: a("team_activation_dialog_title")
              },
              (0, c.tZ)(d.nvN, null, a("team_activation_dialog_paragrah"))
            )
          );
        };
      var ed = a(918007);
      const td = {
          teamCaptain: "team_members_assignment_dialog_admin_description",
          groupManager: "team_members_assignment_dialog_group_manager_description",
          member: "team_members_assignment_dialog_member_description"
        },
        ad = ({ member: e, newRole: t, updateUsersRights: a, closeDialog: s }) => {
          const { translate: i } = (0, p.Z)(),
            o = (0, Ra.V)(),
            r = od(e),
            [l, c] = (0, n.useState)(null != t ? t : r);
          return (0, y.tZ)(
            d.VqE,
            { isOpen: !0, onClose: s, closeIconName: i("_common_dialog_dismiss_button") },
            (0, y.tZ)(d.$N8, { title: i("team_members_assignment_dialog_title", { user: e.login }) }),
            (0, y.tZ)(
              d.a7O,
              null,
              (0, y.tZ)(
                Bn.S,
                {
                  value: l,
                  onChange: (e) => {
                    c(e.target.value);
                  },
                  groupName: "roles"
                },
                Object.values(id).map((e) =>
                  (0, y.tZ)(
                    Bn.E,
                    { key: e, value: e },
                    (0, y.tZ)(d.nvN, { color: "ds.text.neutral.standard", size: "small" }, i(rd[e])),
                    (0, y.tZ)(d.nvN, { color: "ds.text.neutral.quiet", size: "small" }, i(td[e]))
                  )
                )
              ),
              l !== id.Member ? (0, y.tZ)(y.ke, { mood: "brand", title: i("team_members_assignment_dialog_groups_infobox") }) : null
            ),
            (0, y.tZ)(d.cNS, {
              primaryButtonTitle: i("team_members_assignment_dialog_update_button"),
              primaryButtonOnClick: async () => {
                if (l === r) return s();
                try {
                  const t = await a([{ member: e, oldRole: r, newRole: l }]);
                  if (!t) return;
                  if (t.successes.length)
                    o.showAlert(
                      i("team_members_assignment_single_success", {
                        username: e.name || e.login || "Member",
                        previousRole: i(rd[r]),
                        newRole: i(rd[l])
                      }),
                      d.BLW.SUCCESS
                    );
                  else if (t.errors.length) throw t.errors[0].error;
                } catch {
                  o.showAlert(i("team_members_assignment_single_error", { username: e.name || e.login || "Member" }), d.BLW.ERROR);
                } finally {
                  s();
                }
              },
              primaryButtonProps: { type: "button", style: { padding: "0 20px" }, disabled: l === r },
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
        nd = "team_members_assignment_multiple_error",
        sd = ({ selectedMembers: e, newRole: t, updateUsersRights: a, closeDialog: n }) => {
          const { translate: s } = (0, p.Z)(),
            i = (0, Ra.V)();
          return (0, y.tZ)(
            G.o,
            {
              isOpen: !0,
              footer: (0, y.tZ)(d.cNS, {
                intent: "primary",
                primaryButtonTitle: s("team_members_assignment_multiple_dialog_submit"),
                primaryButtonOnClick: async () => {
                  const o = e.map((e) => ({ member: e, oldRole: od(e), newRole: t }));
                  try {
                    const e = await a(o);
                    if (!e) return;
                    const n = s(rd[t]);
                    e.successes.length && e.errors.length
                      ? i.showAlert(
                          s("team_members_assignment_multiple_partial_success", {
                            countSuccess: e.successes.length,
                            countTotal: o.length,
                            newRole: n
                          }),
                          d.BLW.WARNING
                        )
                      : e.successes.length
                      ? i.showAlert(s("team_members_assignment_multiple_success", { count: e.successes.length, newRole: n }), d.BLW.SUCCESS)
                      : e.errors.length && i.showAlert(s(nd, { count: e.errors.length }), d.BLW.ERROR);
                  } catch {
                    i.showAlert(s(nd, { count: e.length }), d.BLW.ERROR);
                  } finally {
                    n();
                  }
                },
                secondaryButtonTitle: s("team_members_assignment_multiple_dialog_cancel"),
                secondaryButtonOnClick: n
              }),
              onRequestClose: n,
              title: s("team_members_assignment_multiple_dialog_title", { countTotal: e.length, newRole: s(rd[t]) })
            },
            (() => {
              switch (t) {
                case id.TeamCaptain:
                  return s("team_members_assignment_multiple_dialog_admin_message");
                case id.GroupManager:
                  return s("team_members_assignment_multiple_dialog_group_manager_message");
                default:
                  return s("team_members_assignment_multiple_dialog_member_message");
              }
            })()
          );
        };
      let id = (function (e) {
        return (e.TeamCaptain = "teamCaptain"), (e.GroupManager = "groupManager"), (e.Member = "member"), e;
      })({});
      const od = (e) => (e.isTeamCaptain ? id.TeamCaptain : e.isGroupManager ? id.GroupManager : id.Member),
        rd = {
          teamCaptain: "team_members_assignment_dialog_admin_label",
          groupManager: "team_members_assignment_dialog_group_manager_label",
          member: "team_members_assignment_dialog_member_label"
        },
        ld = ({ selectedMembers: e, newRole: t, lee: a, closeDialog: n }) => {
          const { reportTACError: s } = $(),
            { translate: i } = (0, p.Z)(),
            { addGroupManager: o, removeGroupManager: r } = (0, Fe.u)(ed.J),
            l = async (e) => {
              const t = (0, sn.v0)(a.globalState);
              if (!t) return void s(new Error(en.N));
              const { teamId: n } = t;
              if (!n) throw new Error("No team ID when attempting role assignment");
              const i = { errors: [], successes: [] };
              for await (const { member: t, oldRole: s, newRole: l } of e)
                try {
                  switch (s) {
                    case id.TeamCaptain:
                      await (0, Un.Lx)({ teamId: n, memberLogin: t.login }),
                        a.dispatch(Bc.bj(t)),
                        await (0, Un.hh)({ teamId: n, action: "adminDemoted", users: [t.login] });
                      break;
                    case id.GroupManager:
                      await r({ memberLogin: t.login, teamId: n }), a.dispatch(Bc.vE(t));
                  }
                  switch (l) {
                    case id.TeamCaptain:
                      await (0, Un.JQ)({ teamId: n, memberLogin: t.login }),
                        a.dispatch(Bc.VW(t)),
                        await (0, Un.hh)({ teamId: n, action: "adminPromoted", users: [t.login] });
                      break;
                    case id.GroupManager:
                      await o({ memberLogin: t.login, teamId: n }), a.dispatch(Bc.lp(t));
                  }
                  i.successes.push(t.login);
                } catch (e) {
                  i.errors.push({ member: t.login, error: e });
                }
              return i;
            };
          return e.length
            ? 1 === e.length
              ? (0, y.tZ)(ad, { member: e[0], newRole: t, updateUsersRights: l, closeDialog: n })
              : (0, y.tZ)(sd, { selectedMembers: e, newRole: null != t ? t : id.Member, updateUsersRights: l, closeDialog: n })
            : (0, y.tZ)(
                G.o,
                {
                  isOpen: !0,
                  footer: (0, y.tZ)(d.cNS, {
                    intent: "secondary",
                    secondaryButtonTitle: i("team_members_assignment_nobody_dialog_cancel"),
                    secondaryButtonOnClick: n
                  }),
                  onRequestClose: n,
                  title: i("team_members_assignment_nobody_dialog_title")
                },
                i("team_members_assignment_nobody_dialog_message", { newRole: t ? i(rd[t]) : "" })
              );
        },
        cd = (e) => e.filter((e) => ["pending", "proposed"].includes(e.status)),
        dd = "securityScoreOver80--Hgr2G6S0v_",
        ud = "securityScoreOver60--_JHvGMsVMu",
        _d = "securityScoreOver40--uopteVjbhe",
        md = "securityScoreOver20--DGwlRT6aTn",
        pd = "securityScoreOver0--KWOlPM746R",
        gd = "securityScoreUnknown--X1UUUGTTOI",
        yd = "box--b300GjbePX",
        bd = "shield--aR0K8YOyOo",
        hd = "medium--oK53lyprG3",
        xd = "small--Y3Ur7GidSI",
        Sd = ({ score: e, size: t, children: a }) => {
          const s = "small" === t ? xd : hd;
          return n.createElement(
            "div",
            {
              className: w()(
                yd,
                ((i = e), i.caseOf({ nothing: () => gd, just: (e) => (e >= 80 ? dd : e >= 60 ? ud : e >= 40 ? _d : e >= 20 ? md : pd) })),
                s
              )
            },
            n.createElement("div", { className: bd }),
            n.createElement("div", null, a)
          );
          var i;
        },
        vd = ({ score: e }) => {
          const { translate: t } = (0, p.Z)();
          return (0, y.tZ)(
            "div",
            { className: "separator--Ms8Z6xmqQa" },
            (0, y.tZ)(
              Sd,
              { score: e, size: "medium" },
              (0, y.tZ)(
                "div",
                { sx: { color: "ds.text.neutral.standard" } },
                t("team_members_team_security_score_label"),
                (0, y.tZ)(
                  d.ua7,
                  { placement: "left", content: t("team_account_heading_security_score_update_frequency") },
                  (0, y.tZ)(
                    "span",
                    null,
                    (0, y.tZ)(y.JO, {
                      name: "FeedbackInfoOutlined",
                      sx: { display: "inline-block", marginLeft: "4px" },
                      size: "xsmall",
                      color: "ds.text.neutral.standard"
                    })
                  )
                )
              ),
              (0, y.tZ)("div", { className: "score--R6OziY_sED" }, e.map((e) => `${(0, Wo.E)(e)}%`).valueOr("–"))
            )
          );
        },
        fd = {
          container: "container--Pih3tFzute",
          counter: "counter--qUaIaAvQ63",
          progressBarBackground: "progressBarBackground--iKhu1za_vU",
          progressBar: "progressBar--ihAKLss_mc",
          seatsCountBottomline: "seatsCountBottomline--hr897DNBX6",
          link: "link--y0d0DGiFaw"
        },
        Cd = {
          CONTAINER: { display: "flex", justifyContent: "space-between", backgroundColor: "ds.background.alternate", padding: "32px 48px" },
          SEATS_COUNT: { flexGrow: "1" },
          HEADER: { display: "flex", gap: "8px", alignItems: "center" },
          PROGRESS_BAR_BACKGROUND: {
            backgroundColor: "ds.border.neutral.quiet.idle",
            borderRadius: "20px",
            height: "16px",
            marginTop: "12px",
            marginRight: "12px",
            width: "360px"
          },
          PROGRESS_BAR: { backgroundColor: "ds.border.brand.standard.active", borderRadius: "20px", height: "16px" }
        },
        Ed = ({
          accountRoute: e,
          companyName: t,
          takenSeats: a,
          totalSeats: n,
          teamSecurityScore: s,
          shouldDisplayTeamSecurityScore: r
        }) => {
          const { translate: l } = (0, p.Z)(),
            c = n ? Math.round((360 * a) / n) : 0;
          return (0, y.tZ)(
            "div",
            { sx: Cd.CONTAINER },
            (0, y.tZ)(
              "div",
              { sx: Cd.SEATS_COUNT },
              (0, y.tZ)(
                "header",
                { sx: Cd.HEADER },
                (0, y.tZ)(y.nv, { as: "h1", textStyle: "ds.specialty.spotlight.medium", color: "ds.text.neutral.catchy" }, `${a}/${n}`),
                (0, y.tZ)(
                  y.nv,
                  { as: "h2", textStyle: "ds.body.reduced.regular", color: "ds.text.neutral.quiet" },
                  l("team_members_header_title_label", { companyName: t })
                )
              ),
              (0, y.tZ)(
                "div",
                { className: fd.seatsCountBottomline },
                (0, y.tZ)("div", { sx: Cd.PROGRESS_BAR_BACKGROUND }, (0, y.tZ)("div", { sx: (0, y.jM)([Cd.PROGRESS_BAR, { width: c }]) })),
                (0, y.tZ)(
                  i.rU,
                  {
                    to: e,
                    className: fd.link,
                    onClick: () => {
                      (0, j.Kz)(new o.UserClickEvent({ button: o.Button.BuySeats, clickOrigin: o.ClickOrigin.OnboardedUsersLimit }));
                    }
                  },
                  l("team_members_add_more_seats")
                )
              )
            ),
            r && (0, y.tZ)("div", { className: fd.teamSecurityScore }, (0, y.tZ)(vd, { score: s }))
          );
        };
      var Zd;
      const Td = ({ title: e, titleColor: t, subtitle: a, action: n, isLoading: s }) =>
          (0, y.tZ)(
            "div",
            { sx: { display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "16px", flex: 1 } },
            s
              ? Zd || (Zd = (0, y.tZ)(y.ZX, { mood: "brand" }))
              : (0, y.tZ)(y.nv, { textStyle: "ds.specialty.monospace.medium", color: null != t ? t : "ds.text.neutral.quiet" }, e),
            (0, y.tZ)(y.nv, { as: "h2", textStyle: "ds.body.standard.regular", color: "ds.text.neutral.quiet" }, a),
            (0, y.tZ)(
              y.zx,
              { disabled: n.disabled, mood: n.mood, intensity: n.intensity, onClick: n.onClick, layout: "iconTrailing", icon: n.icon },
              n.label
            )
          ),
        Nd = ({ onReinviteAllClick: e }) => {
          const { translate: t } = (0, p.Z)(),
            { routes: a } = (0, i.Xo)(),
            s = (0, i.k6)(),
            { data: r, status: l } = (0, qe.k)(Uo.B, "getReport"),
            [c, d] = (0, n.useState)(!0),
            [u, _] = (0, n.useState)(0),
            [m, g] = (0, n.useState)(0),
            [b, h] = (0, n.useState)(0),
            [x, S] = (0, n.useState)(0),
            [v, f] = (0, n.useState)(0),
            [C, E] = (0, n.useState)(!0);
          return (
            (0, n.useEffect)(() => {
              "success" === l &&
                (S(r.seats.pending),
                _(r.seats.used),
                g(r.seats.provisioned),
                h(r.seats.used / r.seats.provisioned),
                f(r.passwordHealth.securityIndex),
                d(!1),
                E(0 === r.seats.pending && 1 === r.seats.used));
            }, [r, l]),
            (0, y.tZ)(
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
              (0, y.tZ)(
                y.X6,
                { as: "h2", textStyle: "ds.title.supporting.small", color: "ds.text.neutral.quiet" },
                t("team_members_summary_title")
              ),
              (0, y.tZ)(
                "div",
                { sx: { display: "flex", flexDirection: "row", justifyContent: "space-between", gap: "24px" } },
                (0, y.tZ)(Td, {
                  isLoading: c,
                  title: `${u}`,
                  titleColor: b >= 0.5 ? "ds.text.positive.quiet" : b >= 0.1 ? "ds.text.warning.quiet" : "ds.text.danger.quiet",
                  subtitle: t("team_members_summary_seat_count_content", { totalSeats: m }),
                  action: {
                    label: t("team_members_summary_seat_count_cta"),
                    disabled: c,
                    mood: "brand",
                    intensity: b < 0.75 ? "catchy" : "quiet",
                    onClick: () => {
                      (0, j.Kz)(new o.UserClickEvent({ button: o.Button.BuySeats, clickOrigin: o.ClickOrigin.UsersSummary })),
                        s.push(a.teamAccountRoutePath);
                    }
                  }
                }),
                (0, y.tZ)("div", { sx: { width: "1px", backgroundColor: "ds.border.neutral.quiet.idle" } }),
                (0, y.tZ)(Td, {
                  isLoading: c,
                  title: `${x || (C ? "-" : t("team_members_summary_reinvite_users_no_new_invites_label"))}`,
                  titleColor: C ? "ds.text.neutral.quiet" : 0 === x ? "ds.text.positive.quiet" : "ds.text.warning.quiet",
                  subtitle:
                    0 === x
                      ? t(
                          C
                            ? "team_members_summary_reinvite_users_no_members_content"
                            : "team_members_summary_reinvite_users_no_new_invites_content"
                        )
                      : t("team_members_summary_reinvite_users_content", { count: x }),
                  action: {
                    label: t("team_members_summary_reinvite_users_cta", { count: x }),
                    mood: "neutral",
                    intensity: "quiet",
                    disabled: c || 0 === x,
                    onClick: () => {
                      (0, j.Kz)(new o.UserClickEvent({ button: o.Button.ReInviteUsers, clickOrigin: o.ClickOrigin.UsersSummary })), e();
                    }
                  }
                }),
                (0, y.tZ)("div", { sx: { width: "1px", backgroundColor: "ds.border.neutral.quiet.idle" } }),
                (0, y.tZ)(Td, {
                  isLoading: c,
                  title: `${v || "-"}`,
                  titleColor:
                    v >= 80
                      ? "ds.text.positive.quiet"
                      : v >= 40
                      ? "ds.text.warning.quiet"
                      : v > 0
                      ? "ds.text.danger.quiet"
                      : "ds.text.neutral.quiet",
                  subtitle: t(
                    !v || c ? "team_members_summary_security_score_content_no_data" : "team_members_summary_security_score_content"
                  ),
                  action: {
                    label: t("team_members_summary_security_score_cta"),
                    mood: "neutral",
                    intensity: "quiet",
                    icon: "ActionOpenExternalLinkOutlined",
                    onClick: () => {
                      (0, j.Kz)(
                        new o.UserClickEvent({ button: o.Button.CheckImproveHealthScore, clickOrigin: o.ClickOrigin.UsersSummary })
                      ),
                        (0, z.Yo)(
                          "https://support.dashlane.com/hc/en-us/articles/360016225300-Manage-the-Password-Health-of-your-Starter-Team-or-Business-plan"
                        );
                    }
                  }
                })
              )
            )
          );
        };
      var Dd = a(957549),
        Md = a(498196),
        Id = a(358389);
      const Ad = ({ title: e, icon: t, description: a, onClick: n, key: s }) =>
        (0, y.tZ)(
          d.W7o,
          { key: s, fullWidth: !0, onClick: n, sx: { height: "auto", textAlign: "left" } },
          (0, y.tZ)(
            d.T5p,
            { gap: "4px", gridTemplateColumns: "20px auto", gridTemplateRows: "auto auto" },
            (0, y.tZ)(d.dDn, null, (0, y.tZ)(y.JO, { name: t, size: "medium" })),
            (0, y.tZ)(d.dDn, null, (0, y.tZ)(y.nv, { as: "span", textStyle: "ds.body.standard.strong" }, e)),
            a
              ? (0, y.tZ)(
                  d.dDn,
                  { gridArea: "2 / 2 / 3 / 3", sx: { textWrap: "wrap" } },
                  (0, y.tZ)(y.nv, { as: "span", color: "ds.text.neutral.quiet", textStyle: "ds.title.block.small" }, a)
                )
              : null
          )
        );
      var wd;
      const kd = ({ members: e, onMembersActionSelect: t }) => {
        const { translate: a } = (0, p.Z)(),
          { getInviteLinkDataForAdmin: n } = (0, Gc.h)(),
          s = (0, ve.o)(U.w.OnboardingWebTeamsignuppage);
        return (0, y.tZ)(
          d.h_2,
          {
            sx: { zIndex: 1001 },
            content: [
              (0, y.tZ)(Ad, {
                key: "resendInvite",
                onClick: () => {
                  t("reinviteAll", cd(e));
                },
                icon: "NotificationOutlined",
                title: a("team_members_resend_invite_all")
              }),
              !!s &&
                (0, y.tZ)(Ad, {
                  key: "shareInviteLink",
                  onClick: async () => {
                    const e = await n();
                    t(!e?.teamKey || e?.disabled ? "enableInviteLink" : "shareInviteLink");
                  },
                  icon: "ActionCopyOutlined",
                  title: a("team_members_share_invite_link")
                }),
              (0, y.tZ)(Ad, {
                key: "exportUserCSV",
                onClick: () => {
                  (0, j.Kz)(new o.UserClickEvent({ button: o.Button.DownloadCsv })),
                    ((e) => {
                      (0, Zi.S)(
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
          (0, y.tZ)(y.zx, {
            id: "expand-invite-option",
            intensity: "quiet",
            mood: "neutral",
            size: "medium",
            layout: "iconOnly",
            sx: { marginLeft: "16px" },
            icon: wd || (wd = (0, y.tZ)(y.JO, { name: "ActionMoreOutlined", size: "medium", color: "ds.text.neutral.standard" }))
          })
        );
      };
      var Od = a(821458),
        Ld = a(833511);
      const zd = ({ onMultipleReassignActionSelect: e }) => {
        const { translate: t } = (0, p.Z)(),
          [a, s] = n.useState(!1),
          i = (t) => {
            e(t), s(!1);
          };
        return n.createElement(
          Ld.j,
          {
            onOutsideClick: () => {
              s(!1);
            }
          },
          n.createElement(
            "div",
            { className: "container--zGfanmJ20J" },
            n.createElement(Od.Z, {
              label: t("team_members_bulk_actions_menu_label"),
              onClick: () => {
                s(!a);
              },
              classNames: ["dropdownButton--eX1Pwf6noX"],
              icon: n.createElement("img", {
                className: w()("buttonIcon--K7qOhGWIeC", { "flip--CjjllwCv0e": a }),
                src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iNiIgdmlld0JveD0iMCAwIDEwIDYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZD0iTTkuNSAwLjVMNSA1LjVMMC41IDAuNSIgc3Ryb2tlPSIjNkU4NjhCIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg=="
              }),
              iconClassName: ["iconContainer--_MWkwTD793"],
              iconPosition: "right"
            }),
            a
              ? n.createElement(
                  "ul",
                  { className: "menu--svPbw6Qghp" },
                  n.createElement("li", { key: "admin", onClick: () => i(id.TeamCaptain) }, t("team_members_bulk_actions_menu_admin")),
                  n.createElement(
                    "li",
                    { key: "groupManager", onClick: () => i(id.GroupManager) },
                    t("team_members_bulk_actions_menu_group_manager")
                  ),
                  n.createElement("li", { key: "member", onClick: () => i(id.Member) }, t("team_members_bulk_actions_menu_member"))
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
      const jd = ({ isTeamCaptain: e, isBillingAdmin: t, isGroupManager: a, status: n }) => {
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
        Pd = (e, t) => ("number" == typeof e ? e : t && ["pending", "removed"].includes(t) ? -1 : 0),
        Ud = (e) =>
          e.map((e) => ({
            ...e,
            filterableStatus: "proposed" === e.status ? "pending" : e.status,
            sortableLastActivity: e.revokedDateUnix || e.lastUpdateDateUnix || 0,
            sortablePasswords: Pd(e.nbrPasswords, e.status),
            sortableRights: jd(e),
            sortableSecurityScore: Pd(e.securityIndex, e.status),
            sortableSafePasswords: Pd(e.safePasswords, e.status),
            sortableWeakPasswords: Pd(e.weakPasswords, e.status),
            sortableReused: Pd(e.reused, e.status),
            sortableCompromisedPasswords: Pd(e.compromisedPasswords, e.status)
          }));
      var Bd = a(654),
        Gd = a(988852);
      const Fd = ({ member: e, onDismiss: t, onMemberActionSelect: a }) => {
        const { translate: n } = (0, p.Z)(),
          s = !!e.twoFAInformation && ("totp_device_registration" === e.twoFAInformation.type || "totp_login" === e.twoFAInformation.type);
        return (0, y.tZ)(
          Ld.j,
          { onOutsideClick: t },
          (0, y.tZ)(
            "ul",
            { className: "menu--tp5V4puFsY" },
            (() => {
              if ("removed" === e.status)
                return (0, y.tZ)(
                  "li",
                  { key: "reactivate", id: "reactivate-quick-action", onClick: () => a("reactivate", e) },
                  (0, y.tZ)(y.JO, { name: "ItemEmailOutlined", color: "ds.text.neutral.quiet", sx: { marginRight: "16px" } }),
                  n("team_members_reactivate_single_label")
                );
              const t = [];
              return (
                ("pending" !== e.status && "proposed" !== e.status) ||
                  t.push(
                    (0, y.tZ)(
                      "li",
                      { key: "resendInvite", id: "reinvite-quick-action", onClick: () => a("reinvite", e) },
                      (0, y.tZ)(y.JO, { name: "ItemEmailOutlined", color: "ds.text.neutral.quiet", sx: { marginRight: "16px" } }),
                      n("team_members_resend_invite_label")
                    )
                  ),
                "pending" !== e.status &&
                  "proposed" !== e.status &&
                  t.push(
                    (0, y.tZ)(
                      "li",
                      { key: "reassign", id: "reassign-quick-action", onClick: () => a("reassign", e) },
                      (0, y.tZ)(y.JO, { name: "ItemPersonalInfoOutlined", color: "ds.text.neutral.quiet", sx: { marginRight: "16px" } }),
                      n("team_members_change_role_label")
                    )
                  ),
                t.push(
                  (0, y.tZ)(
                    y.u,
                    {
                      key: "revoke",
                      content: n("team_members_assignment_dialog_remove_billing_contact_tooltip"),
                      location: "top",
                      passThrough: !e.isBillingAdmin,
                      sx: { whiteSpace: "normal" }
                    },
                    (0, y.tZ)(
                      "li",
                      {
                        key: "revoke",
                        id: "revoke-quick-action",
                        onClick: e.isBillingAdmin ? void 0 : () => a("revoke", e),
                        sx: e.isBillingAdmin ? { cursor: "not-allowed !important", opacity: "0.5" } : void 0
                      },
                      (0, y.tZ)(y.JO, { name: "ActionDeleteOutlined", color: "ds.text.neutral.quiet", sx: { marginRight: "16px" } }),
                      n("team_members_revoke_single_label")
                    )
                  )
                ),
                s &&
                  "pending" !== e.status &&
                  "proposed" !== e.status &&
                  t.push(
                    (0, y.tZ)(
                      "li",
                      {
                        key: "generate2FABackupCodes",
                        id: "generate-2fa-recovery-code-quick-action",
                        onClick: () => a("generateBackupCode", e)
                      },
                      (0, y.tZ)(y.JO, { name: "RecoveryKeyOutlined", color: "ds.text.neutral.quiet", sx: { marginRight: "16px" } }),
                      n("team_members_generate_recovery_codes_label")
                    )
                  ),
                t
              );
            })()
          )
        );
      };
      var qd;
      const Vd = () =>
        qd ||
        (qd = (0, y.tZ)(
          "svg",
          { width: "368", height: "226", viewBox: "0 0 368 226", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
          (0, y.tZ)("rect", { width: "368", height: "226", rx: "2", fill: "#EFF0F0" }),
          (0, y.tZ)("path", {
            d: "M52 32C52 27.5817 55.5817 24 60 24H308C312.418 24 316 27.5817 316 32V192H52V32Z",
            fill: "#6EA2AD",
            fillOpacity: "0.2"
          }),
          (0, y.tZ)("rect", { x: "36", y: "192", width: "296", height: "10", rx: "5", fill: "#6EA2AD", fillOpacity: "0.2" }),
          (0, y.tZ)("path", { d: "M60 34C60 32.8954 60.8954 32 62 32H306C307.105 32 308 32.8954 308 34V192H60V34Z", fill: "white" }),
          (0, y.tZ)("rect", { x: "76", y: "54", width: "8", height: "8", rx: "4", fill: "#D9DFE0" }),
          (0, y.tZ)("rect", { x: "88", y: "56", width: "23", height: "4", rx: "2", fill: "#D9DFE0" }),
          (0, y.tZ)("rect", { x: "122", y: "54", width: "8", height: "8", rx: "4", fill: "#D9DFE0" }),
          (0, y.tZ)("rect", { x: "134", y: "56", width: "23", height: "4", rx: "2", fill: "#D9DFE0" }),
          (0, y.tZ)("rect", { x: "168", y: "54", width: "8", height: "8", rx: "4", fill: "#D9DFE0" }),
          (0, y.tZ)("rect", { x: "180", y: "56", width: "23", height: "4", rx: "2", fill: "#D9DFE0" }),
          (0, y.tZ)("rect", { x: "250", y: "52", width: "26", height: "12", rx: "4", fill: "#0E6173" }),
          (0, y.tZ)("rect", { x: "280", y: "52", width: "12", height: "12", rx: "4", fill: "#A2A3A3", fillOpacity: "0.2" }),
          (0, y.tZ)("rect", { x: "76", y: "78", width: "8", height: "8", rx: "4", fill: "#D9DFE0" }),
          (0, y.tZ)("rect", { x: "88", y: "76", width: "12", height: "12", rx: "6", fill: "#3E5D64" }),
          (0, y.tZ)("rect", { x: "104", y: "78", width: "47", height: "8", rx: "4", fill: "#D9DFE0" }),
          (0, y.tZ)("rect", { x: "172", y: "78", width: "10", height: "8", rx: "4", fill: "#D9DFE0" }),
          (0, y.tZ)("rect", { x: "208", y: "78", width: "10", height: "8", rx: "4", fill: "#D9DFE0" }),
          (0, y.tZ)("rect", { x: "244", y: "78", width: "10", height: "8", rx: "4", fill: "#D9DFE0" }),
          (0, y.tZ)("rect", { x: "76", y: "98", width: "8", height: "8", rx: "4", fill: "#D9DFE0" }),
          (0, y.tZ)("rect", { x: "88", y: "96", width: "12", height: "12", rx: "6", fill: "#9FAEB1" }),
          (0, y.tZ)("rect", { x: "104", y: "98", width: "35", height: "8", rx: "4", fill: "#D9DFE0" }),
          (0, y.tZ)("rect", { x: "172", y: "98", width: "10", height: "8", rx: "4", fill: "#D9DFE0" }),
          (0, y.tZ)("rect", { x: "208", y: "98", width: "10", height: "8", rx: "4", fill: "#D9DFE0" }),
          (0, y.tZ)("rect", { x: "244", y: "98", width: "10", height: "8", rx: "4", fill: "#D9DFE0" }),
          (0, y.tZ)("path", {
            d: "M287 102C287 102.109 286.982 102.215 286.95 102.313L287.696 103.06C287.889 102.753 288 102.389 288 102C288 100.895 287.105 100 286 100C284.895 100 284 100.895 284 102C284 103.105 284.895 104 286 104C286.352 104 286.684 103.909 286.971 103.749L286.202 102.98C286.137 102.993 286.069 103 286 103C285.448 103 285 102.552 285 102C285 101.448 285.448 101 286 101C286.552 101 287 101.448 287 102Z",
            fill: "#232425",
            fillOpacity: "0.92"
          }),
          (0, y.tZ)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M285.052 97L284.648 98.5289C284.603 98.5474 284.558 98.5667 284.513 98.5868L283.128 97.8012L281.801 99.1279L282.577 100.496C282.553 100.548 282.53 100.602 282.509 100.655L281 101.066V102.959L282.526 103.362C282.545 103.41 282.564 103.456 282.585 103.501L281.801 104.884L283.128 106.21L284.495 105.435C284.549 105.459 284.602 105.481 284.656 105.503L285.067 107H286.959L287.361 105.489C287.41 105.47 287.459 105.45 287.507 105.43L288.884 106.21L290.21 104.884L289.431 103.51C289.453 103.46 289.473 103.409 289.492 103.358L291 102.944V101.052L289.481 100.648C289.462 100.604 289.442 100.561 289.422 100.519L290.21 99.1279L288.884 97.8012L287.51 98.58C287.46 98.5587 287.41 98.5385 287.359 98.5194L286.945 97H285.052ZM284.227 99.5741C284.253 99.5884 284.279 99.6003 284.305 99.6099C284.44 99.6678 284.6 99.6656 284.74 99.5901C284.894 99.5069 285.055 99.4377 285.221 99.3832L285.479 99.2986L285.822 98H286.181L286.537 99.3085L286.805 99.3876C286.979 99.4391 287.148 99.5067 287.31 99.5896C287.488 99.6808 287.695 99.655 287.843 99.5405L288.715 99.0465L288.965 99.2968L288.437 100.227L288.442 100.23C288.363 100.352 288.337 100.507 288.386 100.657L288.419 100.758L288.44 100.798C288.529 100.962 288.577 101.064 288.628 101.221L288.713 101.479L290 101.821V102.182L288.703 102.538L288.624 102.805C288.572 102.979 288.505 103.148 288.422 103.31C288.331 103.488 288.356 103.695 288.471 103.844L288.965 104.715L288.715 104.965L287.866 104.484C287.716 104.353 287.494 104.32 287.306 104.418C287.145 104.503 286.975 104.572 286.801 104.625L286.535 104.706L286.19 106H285.829L285.565 105.036C285.533 104.814 285.354 104.639 285.13 104.612C284.986 104.562 284.846 104.5 284.711 104.427C284.532 104.33 284.319 104.354 284.167 104.471L283.297 104.965L283.046 104.715L283.528 103.866C283.604 103.778 283.65 103.663 283.65 103.538V103.396L283.593 103.287C283.503 103.114 283.437 102.965 283.387 102.801L283.305 102.534L282 102.189V101.83L283.039 101.547L283.032 101.521C283.22 101.473 283.365 101.319 283.4 101.126C283.451 100.983 283.513 100.845 283.585 100.711C283.682 100.531 283.657 100.317 283.539 100.165L283.046 99.2968L283.297 99.0465L284.227 99.5741Z",
            fill: "#232425",
            fillOpacity: "0.92"
          }),
          (0, y.tZ)("rect", { x: "76", y: "118", width: "8", height: "8", rx: "4", fill: "#D9DFE0" }),
          (0, y.tZ)("rect", { x: "88", y: "116", width: "12", height: "12", rx: "6", fill: "#3E5D64" }),
          (0, y.tZ)("rect", { x: "104", y: "118", width: "47", height: "8", rx: "4", fill: "#D9DFE0" }),
          (0, y.tZ)("rect", { x: "172", y: "118", width: "10", height: "8", rx: "4", fill: "#D9DFE0" }),
          (0, y.tZ)("rect", { x: "208", y: "118", width: "10", height: "8", rx: "4", fill: "#D9DFE0" }),
          (0, y.tZ)("rect", { x: "244", y: "118", width: "10", height: "8", rx: "4", fill: "#D9DFE0" }),
          (0, y.tZ)("path", {
            d: "M287 122C287 122.109 286.982 122.215 286.95 122.313L287.696 123.06C287.889 122.753 288 122.389 288 122C288 120.895 287.105 120 286 120C284.895 120 284 120.895 284 122C284 123.105 284.895 124 286 124C286.352 124 286.684 123.909 286.971 123.749L286.202 122.98C286.137 122.993 286.069 123 286 123C285.448 123 285 122.552 285 122C285 121.448 285.448 121 286 121C286.552 121 287 121.448 287 122Z",
            fill: "#232425",
            fillOpacity: "0.92"
          }),
          (0, y.tZ)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M285.052 117L284.648 118.529C284.603 118.547 284.558 118.567 284.513 118.587L283.128 117.801L281.801 119.128L282.577 120.496C282.553 120.548 282.53 120.602 282.509 120.655L281 121.066V122.959L282.526 123.362C282.545 123.41 282.564 123.456 282.585 123.501L281.801 124.884L283.128 126.21L284.495 125.435C284.549 125.459 284.602 125.481 284.656 125.503L285.067 127H286.959L287.361 125.489C287.41 125.47 287.459 125.45 287.507 125.43L288.884 126.21L290.21 124.884L289.431 123.51C289.453 123.46 289.473 123.409 289.492 123.358L291 122.944V121.052L289.481 120.648C289.462 120.604 289.442 120.561 289.422 120.519L290.21 119.128L288.884 117.801L287.51 118.58C287.46 118.559 287.41 118.539 287.359 118.519L286.945 117H285.052ZM284.227 119.574C284.253 119.588 284.279 119.6 284.305 119.61C284.44 119.668 284.6 119.666 284.74 119.59C284.894 119.507 285.055 119.438 285.221 119.383L285.479 119.299L285.822 118H286.181L286.537 119.309L286.805 119.388C286.979 119.439 287.148 119.507 287.31 119.59C287.488 119.681 287.695 119.655 287.843 119.54L288.715 119.047L288.965 119.297L288.437 120.227L288.442 120.23C288.363 120.352 288.337 120.507 288.386 120.657L288.419 120.758L288.44 120.798C288.529 120.962 288.577 121.064 288.628 121.221L288.713 121.479L290 121.821V122.182L288.703 122.538L288.624 122.805C288.572 122.979 288.505 123.148 288.422 123.31C288.331 123.488 288.356 123.695 288.471 123.844L288.965 124.715L288.715 124.965L287.866 124.484C287.716 124.353 287.494 124.32 287.306 124.418C287.145 124.503 286.975 124.572 286.801 124.625L286.535 124.706L286.19 126H285.829L285.565 125.036C285.533 124.814 285.354 124.639 285.13 124.612C284.986 124.562 284.846 124.5 284.711 124.427C284.532 124.33 284.319 124.354 284.167 124.471L283.297 124.965L283.046 124.715L283.528 123.866C283.604 123.778 283.65 123.663 283.65 123.538V123.396L283.593 123.287C283.503 123.114 283.437 122.965 283.387 122.801L283.305 122.534L282 122.189V121.83L283.039 121.547L283.032 121.521C283.22 121.473 283.365 121.319 283.4 121.126C283.451 120.983 283.513 120.845 283.585 120.711C283.682 120.531 283.657 120.317 283.539 120.165L283.046 119.297L283.297 119.047L284.227 119.574Z",
            fill: "#232425",
            fillOpacity: "0.92"
          }),
          (0, y.tZ)("rect", { x: "76", y: "138", width: "8", height: "8", rx: "4", fill: "#D9DFE0" }),
          (0, y.tZ)("rect", { x: "88", y: "136", width: "12", height: "12", rx: "6", fill: "#6E868B" }),
          (0, y.tZ)("rect", { x: "104", y: "138", width: "41", height: "8", rx: "4", fill: "#D9DFE0" }),
          (0, y.tZ)("rect", { x: "172", y: "138", width: "10", height: "8", rx: "4", fill: "#D9DFE0" }),
          (0, y.tZ)("rect", { x: "208", y: "138", width: "10", height: "8", rx: "4", fill: "#D9DFE0" }),
          (0, y.tZ)("rect", { x: "244", y: "138", width: "10", height: "8", rx: "4", fill: "#D9DFE0" }),
          (0, y.tZ)("path", {
            d: "M287 142C287 142.109 286.982 142.215 286.95 142.313L287.696 143.06C287.889 142.753 288 142.389 288 142C288 140.895 287.105 140 286 140C284.895 140 284 140.895 284 142C284 143.105 284.895 144 286 144C286.352 144 286.684 143.909 286.971 143.749L286.202 142.98C286.137 142.993 286.069 143 286 143C285.448 143 285 142.552 285 142C285 141.448 285.448 141 286 141C286.552 141 287 141.448 287 142Z",
            fill: "#232425",
            fillOpacity: "0.92"
          }),
          (0, y.tZ)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M285.052 137L284.648 138.529C284.603 138.547 284.558 138.567 284.513 138.587L283.128 137.801L281.801 139.128L282.577 140.496C282.553 140.548 282.53 140.602 282.509 140.655L281 141.066V142.959L282.526 143.362C282.545 143.41 282.564 143.456 282.585 143.501L281.801 144.884L283.128 146.21L284.495 145.435C284.549 145.459 284.602 145.481 284.656 145.503L285.067 147H286.959L287.361 145.489C287.41 145.47 287.459 145.45 287.507 145.43L288.884 146.21L290.21 144.884L289.431 143.51C289.453 143.46 289.473 143.409 289.492 143.358L291 142.944V141.052L289.481 140.648C289.462 140.604 289.442 140.561 289.422 140.519L290.21 139.128L288.884 137.801L287.51 138.58C287.46 138.559 287.41 138.539 287.359 138.519L286.945 137H285.052ZM284.227 139.574C284.253 139.588 284.279 139.6 284.305 139.61C284.44 139.668 284.6 139.666 284.74 139.59C284.894 139.507 285.055 139.438 285.221 139.383L285.479 139.299L285.822 138H286.181L286.537 139.309L286.805 139.388C286.979 139.439 287.148 139.507 287.31 139.59C287.488 139.681 287.695 139.655 287.843 139.54L288.715 139.047L288.965 139.297L288.437 140.227L288.442 140.23C288.363 140.352 288.337 140.507 288.386 140.657L288.419 140.758L288.44 140.798C288.529 140.962 288.577 141.064 288.628 141.221L288.713 141.479L290 141.821V142.182L288.703 142.538L288.624 142.805C288.572 142.979 288.505 143.148 288.422 143.31C288.331 143.488 288.356 143.695 288.471 143.844L288.965 144.715L288.715 144.965L287.866 144.484C287.716 144.353 287.494 144.32 287.306 144.418C287.145 144.503 286.975 144.572 286.801 144.625L286.535 144.706L286.19 146H285.829L285.565 145.036C285.533 144.814 285.354 144.639 285.13 144.612C284.986 144.562 284.846 144.5 284.711 144.427C284.532 144.33 284.319 144.354 284.167 144.471L283.297 144.965L283.046 144.715L283.528 143.866C283.604 143.778 283.65 143.663 283.65 143.538V143.396L283.593 143.287C283.503 143.114 283.437 142.965 283.387 142.801L283.305 142.534L282 142.189V141.83L283.039 141.547L283.032 141.521C283.22 141.473 283.365 141.319 283.4 141.126C283.451 140.983 283.513 140.845 283.585 140.711C283.682 140.531 283.657 140.317 283.539 140.165L283.046 139.297L283.297 139.047L284.227 139.574Z",
            fill: "#232425",
            fillOpacity: "0.92"
          }),
          (0, y.tZ)("path", {
            d: "M301.378 106.526L286.622 102.184L290.094 117.815L292.698 111.736L298.774 117.815L301.378 115.21L295.302 109.131L301.378 106.526Z",
            fill: "#444444"
          }),
          (0, y.tZ)("path", {
            d: "M290.094 118.249C290.081 118.249 290.067 118.249 290.053 118.248C289.866 118.23 289.711 118.094 289.67 117.909L286.198 102.278C286.165 102.128 286.213 101.972 286.325 101.867C286.437 101.762 286.598 101.724 286.744 101.767L301.501 106.109C301.676 106.161 301.801 106.317 301.812 106.5C301.822 106.683 301.717 106.853 301.549 106.925L296.062 109.278L301.685 114.903C301.855 115.073 301.855 115.348 301.685 115.517L299.081 118.123C298.911 118.292 298.637 118.292 298.467 118.123L292.844 112.497L290.493 117.986C290.424 118.147 290.266 118.249 290.094 118.249ZM292.698 111.302C292.812 111.302 292.923 111.347 293.005 111.429L298.774 117.201L300.765 115.21L294.995 109.438C294.894 109.337 294.849 109.191 294.876 109.049C294.903 108.908 294.999 108.789 295.132 108.732L300.099 106.602L287.205 102.808L290.225 116.406L292.299 111.566C292.356 111.433 292.474 111.338 292.616 111.31C292.643 111.305 292.671 111.302 292.698 111.302Z",
            fill: "white"
          })
        ));
      var $d;
      const Wd = "onboarding_web_tacgetstarted",
        Hd = ({ tooltipDismissed: e, setTooltipDismissed: t, children: a }) => {
          const { translate: n } = (0, p.Z)(),
            s = (0, Ne._)(),
            { [Wd]: i = !1 } = s.status !== je.rq.Success ? {} : s.data;
          return (0, y.tZ)(
            d.ua7,
            {
              sx: { maxWidth: "400px" },
              passThrough: e || !i,
              placement: "left-start",
              arrowSize: 8,
              trigger: "persist",
              content: (0, y.tZ)(
                d.Ejs,
                { flexDirection: "column", gap: "8px", sx: { padding: "8px", textAlign: "left", width: "auto" } },
                (0, y.tZ)(y.X6, { as: "h1", color: "ds.text.inverse.catchy" }, n("team_groups_add_assign_admin_tooltip_title")),
                (0, y.tZ)(y.nv, { color: "ds.text.inverse.standard" }, n("team_groups_add_assign_admin_tooltip_description")),
                $d || ($d = (0, y.tZ)(Vd, null)),
                (0, y.tZ)(
                  y.zx,
                  { onClick: () => t(!0), sx: { alignSelf: "end" } },
                  n("team_groups_add_assign_admin_tooltip_confirm_button")
                )
              )
            },
            a
          );
        };
      var Kd = a(360592);
      const Yd = "team_get_started_task_learn_more",
        Qd = ({
          isCompleted: e,
          isDisabled: t,
          title: a,
          content: n,
          helpDocLink: s,
          ctaOnClick: i,
          ctaText: o,
          upNextImage: r,
          disabledText: l,
          isCtaDisabled: c,
          disabledCtaTooltipText: u,
          isUpNext: _,
          infoBoxText: m
        }) => {
          const { translate: g } = (0, p.Z)();
          return (0, y.tZ)(
            d.Zbd,
            {
              sx: {
                padding: "32px",
                marginTop: "8px",
                marginBottom: _ ? "32px" : "auto",
                borderColor: "ds.border.neutral.quiet.idle",
                backgroundColor: e ? "ds.container.agnostic.neutral.standard" : "ds.container.agnostic.neutral.supershy",
                boxShadow: _ ? "0px 12px 24px rgba(0, 0, 0, 0.24)" : "unset"
              }
            },
            (0, y.tZ)(
              d.T5p,
              {
                gap: "8px",
                gridTemplateRows: "auto",
                gridTemplateColumns: "2fr auto",
                gridTemplateAreas: _ ? "'title image' 'content image' 'cta image'" : "'title cta' 'content cta' 'learnMore cta'"
              },
              (0, y.tZ)(
                d.dDn,
                { gridArea: "title" },
                (0, y.tZ)(
                  y.X6,
                  {
                    as: "h2",
                    textStyle: _ ? "ds.title.section.medium" : "ds.title.block.medium",
                    sx: { marginBottom: _ ? "16px" : "8px", fontWeight: "bold" },
                    color: e ? "ds.text.neutral.quiet" : "ds.text.neutral.catchy"
                  },
                  g(a)
                )
              ),
              (0, y.tZ)(
                d.dDn,
                { gridArea: "content" },
                (0, y.tZ)(
                  y.nv,
                  {
                    textStyle: _ ? "ds.body.standard.regular" : "ds.body.reduced.regular",
                    color: e ? "ds.text.neutral.quiet" : "ds.text.neutral.standard"
                  },
                  g(n)
                ),
                m && !e && _ && !c ? (0, y.tZ)(y.ke, { sx: { marginTop: "16px" }, mood: "brand", title: g(m) }) : null
              ),
              _ ? (0, y.tZ)(d.dDn, { gridArea: "image", sx: { paddingLeft: "32px" } }, r) : null,
              (0, y.tZ)(
                d.dDn,
                { gridArea: "cta", justifySelf: _ ? "start" : "end", sx: { marginTop: _ ? "32px" : "0" } },
                e || t
                  ? (0, y.tZ)(y.Ct, {
                      label: g(t ? l || "team_get_started_task_disabled" : "team_get_started_task_completed"),
                      mood: t ? "neutral" : "positive",
                      intensity: "catchy"
                    })
                  : (0, y.tZ)(
                      Kd.M,
                      {
                        disabled: c,
                        size: _ ? "medium" : "small",
                        mood: _ ? "brand" : "neutral",
                        intensity: _ ? "catchy" : "quiet",
                        onClick: i,
                        content: u ? g(u) : ""
                      },
                      g(o)
                    ),
                _
                  ? (0, y.tZ)(
                      () =>
                        s
                          ? (0, y.tZ)(
                              y.zx,
                              {
                                sx: { marginLeft: "8px" },
                                mood: "brand",
                                intensity: "supershy",
                                size: "medium",
                                onClick: () => (0, z.Yo)(s)
                              },
                              g(Yd)
                            )
                          : null,
                      null
                    )
                  : null
              ),
              _
                ? null
                : (0, y.tZ)(
                    d.dDn,
                    { gridArea: "learnMore" },
                    (0, y.tZ)(
                      () =>
                        s
                          ? (0, y.tZ)(
                              d.k$b,
                              {
                                as: y.nv,
                                innerAs: d.rUS,
                                size: "small",
                                color: e ? "ds.text.neutral.quiet" : "ds.text.brand.standard",
                                rel: "noopener noreferrer",
                                target: "_blank",
                                href: s
                              },
                              g(Yd)
                            )
                          : null,
                      null
                    )
                  )
            ),
            !m || e || _ || c ? null : (0, y.tZ)(y.ke, { sx: { marginTop: "32px" }, mood: "brand", title: g(m) })
          );
        },
        Xd = a.p + "2d07f8aaf28eb418a6e1.png",
        Jd = () => {
          (0, j.Kz)(new o.UserClickEvent({ button: o.Button.OpenUsersPage }));
        };
      var eu;
      const tu = "showAssignAdminTipState";
      var au, nu, su;
      const iu = {
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
        ou = "team_members_row_invitation_pending",
        ru = ({ checkedMembers: e, currentLoggedLogin: t, members: a, onMemberActionSelect: s, onMemberToggleCheck: o }) => {
          var r, l, c;
          const { translate: u } = (0, p.Z)(),
            _ = (0, i.TH)(),
            m = null != (r = _.state?.[tu]) && r,
            [g, b] = (0, n.useState)(null),
            [h, x] = (0, n.useState)(!1),
            S = (e) => {
              b(e === g ? null : e);
            },
            v = (e, t) => {
              S(g), s(e, t);
            },
            f = () =>
              (0, y.tZ)(
                d.Ejs,
                { gap: "4px" },
                (0, y.tZ)(
                  y.nv,
                  { textStyle: "ds.body.standard.regular", color: "ds.text.neutral.quiet" },
                  u("team_members_row_security_score_unavailable")
                ),
                (0, y.tZ)(
                  y.u,
                  { wrapTrigger: !0, location: "bottom", content: u("team_members_row_security_score_breakdown_less_than_five") },
                  (0, y.tZ)(
                    "div",
                    { sx: { display: "flex", alignItems: "center" } },
                    au || (au = (0, y.tZ)(y.JO, { name: "FeedbackInfoOutlined", color: "ds.text.neutral.quiet", size: "xsmall" }))
                  )
                )
              );
          return (0, y.tZ)(
            "tbody",
            { className: "tableBody--UVKDDE_osD" },
            (() => {
              const n = (e, t) => (null != t ? t : "accepted" !== e ? "-" : 0);
              return a.map((a, s) => {
                return (0, y.tZ)(
                  "tr",
                  {
                    id: "removed" === a.status ? "revoked" : "active",
                    key: a.login,
                    sx: (0, y.jM)([iu.ROW, "removed" === a.status ? iu.REVOKED : iu.ACTIVE])
                  },
                  (0, y.tZ)(
                    "td",
                    null,
                    a.login !== t &&
                      "removed" !== a.status &&
                      (0, y.tZ)(y.XZ, {
                        checked: !!Array.from(e).find((e) => e.login === a.login),
                        "aria-label": "Select user",
                        onChange: () => o(a)
                      })
                  ),
                  (0, y.tZ)(
                    "td",
                    { className: "loginCell--zmWQn6nt_m" },
                    (0, y.tZ)(Bi.q, { email: a.login, size: 30 }),
                    (0, y.tZ)(
                      "div",
                      { sx: iu.LOGIN_TEXT, className: "automation-tests-member-login" },
                      (0, y.tZ)(Bd.Z, { tooltipText: a.login }, a.login)
                    )
                  ),
                  (0, y.tZ)(
                    "td",
                    { className: "securityScoreCell--TRrWX93JKm" },
                    ((e) => {
                      const t = Ja.Maybe.maybe(
                        e.nbrPasswords >= 5 || (!e.nbrPasswords && e.securityIndex && e.securityIndex > 0) ? e.securityIndex : null
                      );
                      return t.caseOf({
                        just: (e) =>
                          0 === e
                            ? l || (l = (0, y.tZ)(f, null))
                            : (0, y.tZ)(
                                Sd,
                                { score: t, size: "small" },
                                (0, y.tZ)("div", { className: "securityScoreCellText--uh3PGGldwN" }, `${(0, Wo.E)(e)}%`)
                              ),
                        nothing: () => c || (c = (0, y.tZ)(f, null))
                      });
                    })(a)
                  ),
                  (0, y.tZ)(
                    "td",
                    { className: "passwordsCell--gft4asedk5" },
                    (0, y.tZ)("span", { className: "passwordsCellIcon--oJaMYYHQ_9" }),
                    ((i = a.status), (r = a.nbrPasswords), "accepted" !== i ? "-" : !r || r < 5 ? "<5" : r)
                  ),
                  (0, y.tZ)("td", null, n(a.status, a.safePasswords)),
                  (0, y.tZ)("td", null, n(a.status, a.weakPasswords)),
                  (0, y.tZ)("td", null, n(a.status, a.reused)),
                  (0, y.tZ)("td", null, n(a.status, a.compromisedPasswords)),
                  (0, y.tZ)(
                    "td",
                    null,
                    ((e) => {
                      switch (!0) {
                        case ["pending", "proposed"].includes(e.status):
                          return u(ou);
                        case Boolean(e.lastUpdateDateUnix || e.revokedDateUnix):
                          return (0, y.tZ)(Gd.Z, { date: (0, Xt.Z)(e.lastUpdateDateUnix || e.revokedDateUnix) });
                        case "pending" === e.status:
                          return u(ou);
                        default:
                          return u("team_members_row_never_logged_in");
                      }
                    })(a)
                  ),
                  (0, y.tZ)(
                    "td",
                    null,
                    a.isBillingAdmin
                      ? (0, y.tZ)(
                          y.u,
                          { location: "top", content: u("team_account_heading_billing_admin_tooltip"), sx: { textAlign: "start" } },
                          (0, y.tZ)(
                            "div",
                            { sx: { display: "flex", alignItems: "center" } },
                            (0, y.tZ)(
                              y.nv,
                              { textStyle: "ds.body.standard.strong", sx: { display: "inline-block" } },
                              u("team_account_heading_billing_admin")
                            ),
                            (0, y.tZ)(y.JO, {
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
                        ? u("team_members_row_revoked")
                        : e.isTeamCaptain
                        ? u("team_members_row_captain")
                        : e.isGroupManager
                        ? u("team_members_row_group_manager")
                        : u("team_members_row_member"))(a)
                  ),
                  (0, y.tZ)(
                    "td",
                    { className: "actionsCell--NotN6ngLnK", style: { position: "relative" } },
                    a.login === g ? ((e) => (0, y.tZ)(Fd, { member: e, onDismiss: () => S(e.login), onMemberActionSelect: v }))(a) : null,
                    a.login !== t
                      ? 1 === s && m
                        ? (0, y.tZ)(
                            Hd,
                            { tooltipDismissed: h, setTooltipDismissed: x },
                            (0, y.tZ)(y.zx, {
                              id: "users-action-menu-button",
                              onClick: () => S(a.login),
                              layout: "iconOnly",
                              intensity: "supershy",
                              icon: nu || (nu = (0, y.tZ)(y.JO, { name: "SettingsOutlined", color: "ds.text.neutral.standard" }))
                            })
                          )
                        : (0, y.tZ)(y.zx, {
                            id: "users-action-menu-button",
                            onClick: () => S(a.login),
                            layout: "iconOnly",
                            intensity: "supershy",
                            icon: su || (su = (0, y.tZ)(y.JO, { name: "SettingsOutlined", color: "ds.text.neutral.standard" }))
                          })
                      : null
                  )
                );
                var i, r;
              });
            })()
          );
        },
        lu = {
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
        cu = "team_members_heading_name",
        du = "team_members_heading_security_score",
        uu = "team_members_heading_password_count",
        _u = "team_members_heading_last_login",
        mu = 24,
        pu = ({ lee: e, members: t, onMembersActionSelect: a, onMembersInvite: s }) => {
          var i;
          const { translate: o } = (0, p.Z)(),
            r = (0, sn.v0)(e.globalState),
            l = null != (i = r?.login) ? i : "",
            [c, d] = (0, n.useState)(Ud(t)),
            [u, _] = (0, n.useState)(new Set()),
            [m, g] = (0, n.useState)(0),
            [b, h] = (0, n.useState)(["accepted", "pending", "removed"]),
            [x, S] = (0, n.useState)(""),
            [v, f] = (0, n.useState)({ sortBy: "sortableRights", sortOrder: "asc" });
          (0, n.useEffect)(() => {
            _(new Set()), d(Ud(t));
          }, [t]);
          const C = () => {
              const e = x?.toLocaleUpperCase(),
                t = "asc" === v.sortOrder ? Pn.ascend : Pn.descend;
              return (0, Pn.sortWith)([t((0, Pn.prop)(v.sortBy))])(
                c
                  .filter((e) => e.filterableStatus && b.includes(e.filterableStatus))
                  .filter((t) => !x || t.login.toLocaleUpperCase().includes(e))
              );
            },
            E = (e) => {
              g(e);
            },
            Z = (e) => {
              const t = e === v.sortBy && "asc" === v.sortOrder ? "desc" : "asc";
              f({ sortBy: e, sortOrder: t });
            },
            T = (e) => {
              g(0), h((t) => (t.includes(e) ? t.filter((t) => t !== e) : t.concat([e])));
            },
            N = (e) => !e.isBillingAdmin && ["accepted", "pending", "proposed"].includes(e.status),
            D = () => {
              _(new Set());
            },
            M = () => {
              const e = m * mu,
                t = new Set();
              C()
                .slice(e, e + mu)
                .reduce((e, t) => (l === t.login || e.add({ ...t }), e), t),
                Array.from(u).forEach((e) => t.add({ ...e })),
                _(t);
            },
            I = m * mu,
            A = C(),
            w = { first: A.length ? I + 1 : 0, last: Math.min(A.length, I + mu) },
            k = A.slice(I, I + mu),
            O = ((e) => {
              const t = e.filter((e) => Array.from(u).find((t) => t.login === e.login)).length;
              let a;
              return (
                e.find((e) => e.login === l), e.length, (a = 0 === t ? M : D), (0, y.tZ)(y.XZ, { onChange: a, "aria-label": "select-all" })
              );
            })(k),
            L = [
              { headerLabel: "", headerElement: O, headerKey: "checkbox" },
              {
                headerLabel: o(cu),
                tooltipLabel: o(cu),
                onClick: () => Z("login"),
                sortOrder: "login" !== v.sortBy ? void 0 : v.sortOrder,
                headerKey: "login"
              },
              {
                headerLabel: o(du),
                tooltipLabel: o(du),
                onClick: () => Z("sortableSecurityScore"),
                sortOrder: "sortableSecurityScore" !== v.sortBy ? void 0 : v.sortOrder,
                headerKey: "security-score"
              },
              {
                headerLabel: o(uu),
                tooltipLabel: o(uu),
                onClick: () => Z("sortablePasswords"),
                sortOrder: "sortablePasswords" !== v.sortBy ? void 0 : v.sortOrder,
                headerKey: "num-passwords"
              },
              {
                headerLabel: o("team_members_heading_safe"),
                tooltipLabel: o("team_members_heading_safe_tooltip"),
                onClick: () => Z("sortableSafePasswords"),
                sortOrder: "sortableSafePasswords" !== v.sortBy ? void 0 : v.sortOrder,
                headerKey: "safe-passwords"
              },
              {
                headerLabel: o("team_members_heading_weak"),
                tooltipLabel: o("team_members_heading_weak_tooltip"),
                onClick: () => Z("sortableWeakPasswords"),
                sortOrder: "sortableWeakPasswords" !== v.sortBy ? void 0 : v.sortOrder,
                headerKey: "weak-passwords"
              },
              {
                headerLabel: o("team_members_heading_reused"),
                tooltipLabel: o("team_members_heading_reused_tooltip"),
                onClick: () => Z("sortableReused"),
                sortOrder: "sortableReused" !== v.sortBy ? void 0 : v.sortOrder,
                headerKey: "reused-passwords"
              },
              {
                headerLabel: o("team_members_heading_compromised"),
                tooltipLabel: o("team_members_heading_compromised_tooltip"),
                onClick: () => Z("sortableCompromisedPasswords"),
                sortOrder: "sortableCompromisedPasswords" !== v.sortBy ? void 0 : v.sortOrder,
                headerKey: "compromised-passwords"
              },
              {
                headerLabel: o(_u),
                tooltipLabel: o(_u),
                onClick: () => Z("sortableLastActivity"),
                sortOrder: "sortableLastActivity" !== v.sortBy ? void 0 : v.sortOrder,
                headerKey: "last-login"
              },
              {
                headerLabel: (0, y.tZ)(
                  "span",
                  { sx: { display: "flex", alignItems: "center" } },
                  o("team_members_heading_rights"),
                  " ",
                  (0, y.tZ)(y.JO, {
                    color: "ds.text.neutral.quiet",
                    name: "FeedbackInfoOutlined",
                    sx: { display: "inline-block", marginLeft: "4px" },
                    size: "small"
                  })
                ),
                tooltipLabel: (0, y.tZ)(
                  "div",
                  { sx: { textAlign: "left", "& > * > p:not(:last-child)": { marginBottom: "10px" } } },
                  o.markup("team_members_heading_rights_tooltip_markup")
                ),
                onClick: () => Z("sortableRights"),
                sortOrder: "sortableRights" !== v.sortBy ? void 0 : v.sortOrder,
                headerKey: "permissions"
              },
              { headerLabel: "", headerKey: "actions" }
            ];
          return (0, y.tZ)(
            "div",
            { className: "container--lTIFkRrWrT" },
            (0, y.tZ)(
              "div",
              { sx: lu.TOP },
              (0, y.tZ)(
                "div",
                { className: "tableHeaderContainer--NOzH1jto0x" },
                (0, y.tZ)(Id.n, {
                  type: "search",
                  containerStyle: { flexGrow: 1, maxWidth: "300px", marginBottom: "15px" },
                  onChange: (e) => {
                    g(0), S(e.currentTarget.value);
                  },
                  placeholder: o("team_members_filter_control_search_placeholder"),
                  placeholderIcon:
                    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAyMSAyMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNNy4zNzUgMTMuNzY0Nkw0LjM3NSAxNi43NjQ2TTE2LjM3NSA5LjI2NDY1QzE2LjM3NSAxMS43NDk5IDE0LjM2MDMgMTMuNzY0NiAxMS44NzUgMTMuNzY0NkM5LjM4OTcyIDEzLjc2NDYgNy4zNzUgMTEuNzQ5OSA3LjM3NSA5LjI2NDY1QzcuMzc1IDYuNzc5MzcgOS4zODk3MiA0Ljc2NDY1IDExLjg3NSA0Ljc2NDY1QzE0LjM2MDMgNC43NjQ2NSAxNi4zNzUgNi43NzkzNyAxNi4zNzUgOS4yNjQ2NVoiIHN0cm9rZT0iI0NDQzdDMiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KPC9zdmc+Cg=="
                }),
                (0, y.tZ)(
                  "div",
                  { className: "topContainer--ST6B1mEZjJ" },
                  (0, y.tZ)(
                    "div",
                    { className: "topLeft--viTEuhR25Z" },
                    (0, y.tZ)(
                      "div",
                      { className: "statusFilters--SMNEn98faE" },
                      (0, y.tZ)(y.XZ, {
                        label: o("team_members_filter_control_include_active"),
                        onChange: () => T("accepted"),
                        checked: b.includes("accepted")
                      }),
                      (0, y.tZ)(y.XZ, {
                        label: o("team_members_filter_control_include_invited"),
                        onChange: () => T("pending"),
                        checked: b.includes("pending")
                      }),
                      (0, y.tZ)(y.XZ, {
                        label: o("team_members_filter_control_include_revoked"),
                        onChange: () => T("removed"),
                        checked: b.includes("removed")
                      })
                    )
                  ),
                  u.size > 0 && [
                    (0, y.tZ)(zd, {
                      key: "dropdown",
                      onMultipleReassignActionSelect: (e) => {
                        let t = [...u];
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
                    (0, y.tZ)(Dd.Z, {
                      key: "button",
                      classNames: ["revokeButton--_sdxTpsqR2 topButton--vxY2fF8Lv4"],
                      label: o("team_members_revoke_multiple_label"),
                      disabled: ![...u].some(N),
                      onClick: () => {
                        let e = [...u];
                        (e = e.filter(N)), a("revoke", e);
                      }
                    })
                  ],
                  (0, y.tZ)(
                    "div",
                    { className: "topRight--YZ2DF7wcrD" },
                    (0, y.tZ)(
                      "div",
                      { className: "topPagination--rTlBiQ0EDF" },
                      (0, y.tZ)(
                        "div",
                        { sx: lu.TOP_PAGINATION_TEXT },
                        (0, y.tZ)(
                          y.nv,
                          { textStyle: "ds.body.standard.regular", color: "ds.text.neutral.catchy" },
                          o("team_members_filter_pagination_top_count", { first: w.first, last: w.last })
                        ),
                        (0, y.tZ)(
                          y.nv,
                          { textStyle: "ds.body.standard.regular", color: "ds.text.neutral.quiet" },
                          o("team_members_filter_pagination_top_total", { total: A.length })
                        )
                      ),
                      (0, y.tZ)(Md.Z, { currentPageIndex: m, isShort: !0, itemsLength: A.length, itemsPerPage: mu, onChange: E })
                    ),
                    (0, y.tZ)(y.zx, { icon: "ActionAddOutlined", layout: "iconLeading", onClick: s }, o("team_members_quota_progress_add")),
                    t.length > 1 && (0, y.tZ)(kd, { members: t, onMembersActionSelect: a })
                  )
                )
              )
            ),
            (0, y.tZ)(
              "table",
              { className: "table--a8O2px0gHj" },
              (0, y.tZ)(ji, { columns: L }),
              (0, y.tZ)(ru, {
                checkedMembers: u,
                currentLoggedLogin: l,
                members: k,
                onMemberActionSelect: (e, t) => {
                  a(e, [t]);
                },
                onMemberToggleCheck: (e) => {
                  _((t) => {
                    const a = Array.from(t).find((t) => t.login === e.login),
                      n = new Set(t);
                    return a ? n.delete(a) : n.add({ ...e }), n;
                  });
                }
              })
            ),
            (0, y.tZ)(
              "div",
              { className: "bottom--b6BPTxGASq" },
              (0, y.tZ)(Md.Z, { currentPageIndex: m, itemsLength: A.length, itemsPerPage: mu, onChange: E })
            )
          );
        },
        gu = async (e, t) => {
          const a = { errors: [], successes: [] };
          for await (const n of e)
            try {
              const e = await t(n);
              a.successes.push(e);
            } catch (e) {
              a.errors.push(e);
            }
          return a;
        },
        yu = ({ refusedMembers: e = {} } = {}) => Object.keys(e).length > 0,
        bu = (e) =>
          (e instanceof Array ? e : [e]).map((e) =>
            e instanceof Error ? e : e instanceof Object ? new Error(JSON.stringify(e)) : new Error(e)
          ),
        hu = "counter--NpfuOeApPm",
        xu = "active--VJ5ITGfmuJ";
      var Su;
      const vu = ["text/*", ".csv", ".txt"],
        fu = ({
          lee: e,
          isFreeTrial: t,
          isOpen: a,
          slotsTaken: s,
          slotsTotal: l,
          exclude: _,
          preFilledEmails: m,
          closeInviteDialog: g,
          handleInviteCompleteSuccess: y,
          handleInvitePartialSuccess: b,
          setShowActivationDialog: h
        }) => {
          const { routes: x } = (0, i.Xo)(),
            { translate: f } = (0, p.Z)(),
            C = (0, Ra.V)(),
            { reportTACError: E } = $(),
            { proposeMembers: Z } = (0, Fe.u)(xc.L),
            T = (0, u.Y)(),
            { billingDetails: N, amountToPay: D, amountToTax: M, onSeatCountChange: I } = Js(null),
            [A, O] = (0, n.useState)(!1),
            [L, z] = (0, n.useState)(!1),
            [R, P] = (0, n.useState)(null != m ? m : new Set([])),
            [U, B] = (0, n.useState)(0),
            [G, F] = (0, n.useState)(0),
            [q, V] = (0, n.useState)(0),
            [W, H] = (0, n.useState)(0),
            [K, Y] = (0, n.useState)(!1);
          (0, n.useEffect)(() => {
            z(A);
          }, [A]),
            (0, n.useEffect)(() => {
              P(null != m ? m : new Set([]));
            }, [m]),
            (0, n.useEffect)(() => {
              R.size || V(0);
            }, [R]);
          const Q = () => {
              g(), O(!1), B(0), F(0);
            },
            X = async (t, a) => {
              var n;
              (a = null != (n = a) ? n : 0), F(t.length), O(!0);
              const s = a + Math.min(t.length - a, 500),
                i = t.slice(a, s),
                r = {};
              try {
                const a = await (async (t) => {
                  if (!(0, sn.v0)(e.globalState)) {
                    const e = new Error(en.N);
                    throw (E(e), e);
                  }
                  if (!e.apiMiddleware.teamPlans) throw new Error("we want to remove this middleware but we can't just yet!");
                  try {
                    const e = await Z({ proposedMemberLogins: t, force: !0 });
                    if ("failure" === e.tag) throw new Error(e.error);
                    return e.data;
                  } catch (e) {
                    const t = e.code && e.subCode ? `invite_error_${e.code}_${e.subCode}` : "team_members_invite_error_message";
                    throw (C.showAlert(f(t), d.BLW.ERROR), new Error(f(t)));
                  }
                })(i);
                if ((B(s), (0, v.merge)(r, a), s < t.length)) return X(t, s);
                if (yu(r)) {
                  b(r.proposedMembers, r.refusedMembers);
                  const e = Object.keys(r.proposedMembers).length,
                    t = Object.keys(r.refusedMembers).length;
                  (0, j.Kz)(
                    new o.UserSendManualInviteEvent({
                      flowStep: o.FlowStep.Complete,
                      inviteCount: e,
                      inviteFailedCount: t,
                      inviteResentCount: 0,
                      inviteSuccessfulCount: e - t,
                      isImport: q > 0,
                      importSize: q,
                      isResend: !1
                    })
                  );
                } else
                  y(t),
                    W < 0
                      ? 1 === R.size
                        ? C.showAlert(
                            f("team_members_invite_success_message_with_added_seats_one_invite", {
                              cost: f.price(N.currency, (D + M) / 100)
                            }),
                            d.BLW.SUCCESS
                          )
                        : C.showAlert(
                            f("team_members_invite_success_message_with_added_seats", {
                              total: R.size,
                              count: -W,
                              cost: f.price(N.currency, (D + M) / 100)
                            }),
                            d.BLW.SUCCESS
                          )
                      : C.showAlert(f("team_members_invite_success_message_with_count", { count: R.size }), d.BLW.SUCCESS),
                    (0, j.Kz)(
                      new o.UserSendManualInviteEvent({
                        flowStep: o.FlowStep.Complete,
                        inviteCount: t.length,
                        inviteFailedCount: 0,
                        inviteResentCount: 0,
                        inviteSuccessfulCount: t.length,
                        isImport: q > 0,
                        importSize: q,
                        isResend: !1
                      })
                    );
                return Q();
              } catch (e) {
                throw (
                  ((0, j.Kz)(
                    new o.UserSendManualInviteEvent({
                      flowStep: o.FlowStep.Error,
                      inviteCount: R.size,
                      inviteFailedCount: 0,
                      inviteResentCount: 0,
                      inviteSuccessfulCount: 0,
                      isImport: q > 0,
                      importSize: q,
                      isResend: !1
                    })
                  ),
                  Q(),
                  e)
                );
              }
            },
            J = (e) =>
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
              })(e).filter((e) => !R.has(e)),
            ee = (e) => (0, ha.vV)(e) && !((e) => !!_?.includes(e))(e),
            te = (e) => {
              V(e.length), P(new Set([...R, ...e]));
            },
            ae = (e) => {
              E(e);
            },
            ne = [...R].filter((e) => !ee(e)).length;
          let se = 0 === R.size || ne > 0 || (W < 0 && Ls(-W)) || K,
            ie = null;
          (0, n.useEffect)(() => {
            if (l) {
              const e = l - (R.size - ne) - s;
              H(e), e < 0 ? (I(-e), T.status === r.rq.Success && (0, k.f1)(T.data) && Y(!0)) : Y(!1);
            }
          }, [R, T, l, s]);
          const { loading: oe, billingCountry: re } = S();
          if (oe) return (0, c.tZ)(d.HoD, { color: d.colors.midGreen00 });
          const le = "US" === re ? "team_invite_dialog_input_counter_negative_tax" : "team_invite_dialog_input_counter_negative_vat";
          if (l) {
            const e =
                W < 0
                  ? Ls(-W)
                    ? f("team_account_teamplan_upgrade_premium_buy_more_seats_than_cap", { seatCap: Is, salesEmail: As })
                    : M
                    ? f(le, { count: -W, total: l, cost: f.price(N.currency, (D + M) / 100) })
                    : f("team_invite_dialog_input_counter_negative", { count: -W, total: l, cost: f.price(N.currency, D / 100) })
                  : f("team_invite_dialog_input_counter", { count: W, total: l }),
              a = f("team_invite_dialog_input_counter_special", { total: l });
            let n = e;
            t && W < 1 && ((se = W < 0 || se), (n = a));
            const s = w()(hu, { "alert--WcUXIwBMog": W < 1, [xu]: !A });
            ie = (0, c.tZ)("div", { className: s }, n);
          }
          return (0, c.tZ)(
            d.VqE,
            {
              isOpen: a,
              closeIconName: A ? void 0 : f("_common_dialog_dismiss_button"),
              onClose: () => {
                A ||
                  ((0, j.Kz)(
                    new o.UserSendManualInviteEvent({
                      flowStep: o.FlowStep.Cancel,
                      inviteCount: R.size,
                      inviteFailedCount: 0,
                      inviteResentCount: 0,
                      inviteSuccessfulCount: 0,
                      isImport: q > 0,
                      importSize: q,
                      isResend: !1
                    })
                  ),
                  Q(),
                  P(new Set([])));
              },
              ariaDescribedby: "dialogContent"
            },
            (0, c.tZ)(d.$N8, { title: f("invite_user_dialog_title") }),
            (0, c.tZ)(
              d.a7O,
              null,
              (0, c.tZ)(
                "div",
                { className: "dialog--QnJrEK3_WD" },
                (0, c.tZ)(
                  "div",
                  { id: "dialogContent", className: "instruction--MOkv4LlYxY" },
                  f(A ? "team_invite_dialog_input_label_sending" : "invite_user_dialog_input_label")
                ),
                (0, c.tZ)(
                  Sc.Z,
                  {
                    accept: vu,
                    passClicksThrough: !0,
                    className: "fileDropZone--_MXyrjuinL",
                    onChange: (e) => {
                      te(J(e.join("\0")));
                    },
                    onError: ae
                  },
                  (0, c.tZ)(vc.L, {
                    key: "tags",
                    setIsOverlayVisible: z,
                    placeholder: f("team_invite_dialog_input_placeholder"),
                    tags: [...R],
                    isOverlayVisible: L,
                    setTags: (e) => {
                      P(new Set(e));
                    },
                    formatToTags: J,
                    validate: ee
                  })
                ),
                !K && ie,
                K
                  ? (0, c.tZ)(
                      "div",
                      { className: "alertOverride--o2y2pG7WQg" },
                      (0, c.tZ)(
                        d.bZj,
                        { severity: d.BLW.SUBTLE },
                        (0, c.tZ)(
                          "span",
                          { style: { fontSize: "14px", fontWeight: "400" } },
                          f("team_dialog_starter_limit_warning"),
                          Su || (Su = (0, c.tZ)("br", null)),
                          (0, c.tZ)(i.rU, { to: x.teamAccountRoutePath }, f("team_dialog_starter_change_plan"))
                        )
                      )
                    )
                  : null,
                (0, c.tZ)("div", { className: w()(hu, { [xu]: A }) }, f("team_invite_dialog_invitations_counter", { count: U, total: G })),
                (0, c.tZ)(
                  "div",
                  { className: w()("import--aJf1GXo5F5", { [xu]: !A }) },
                  (0, c.tZ)(
                    Sc.Z,
                    {
                      accept: vu,
                      onChange: (e) => {
                        te(J(e.join("\0")));
                      },
                      onError: ae
                    },
                    (0, c.tZ)("span", { className: "importTextAction--H7eyxahYri" }, f("team_invite_dialog_import_description"))
                  )
                ),
                (0, c.tZ)("div", { className: w()("importHint--xIB2QYXXMo", { [xu]: !A }) }, f("team_invite_dialog_import_example_text"))
              )
            ),
            (0, c.tZ)(d.cNS, {
              primaryButtonTitle: (0, c.tZ)(
                n.Fragment,
                null,
                (0, c.tZ)("span", { sx: { marginRight: "8px" } }, (0, c.tZ)(d.bV6, { color: d.colors.white })),
                f("invite_user_dialog_button")
              ),
              primaryButtonOnClick: async () => {
                try {
                  await X([...R]), h(!0);
                } catch (e) {
                  (0, j.Kz)(
                    new o.UserSendManualInviteEvent({
                      flowStep: o.FlowStep.Error,
                      inviteCount: R.size,
                      inviteFailedCount: 0,
                      inviteResentCount: 0,
                      inviteSuccessfulCount: 0,
                      isImport: q > 0,
                      importSize: q,
                      isResend: !1
                    })
                  ),
                    C.showAlert(f("_common_generic_error"), d.BLW.ERROR);
                }
                P(new Set([]));
              },
              primaryButtonProps: { disabled: se, type: "button" }
            })
          );
        },
        Cu = ({ showActivationDialog: e, setShowActivationDialog: t, setShowSharingDialog: a }) => {
          const { toggleInviteLink: n, createInviteLink: s, getInviteLinkDataForAdmin: i } = (0, Gc.h)(),
            { setAsInteracted: o } = (0, De.d)(l.NotificationName.ActivateInviteLink),
            { translate: r } = (0, p.Z)(),
            { teamInfo: u } = (0, _.G)(),
            m = (0, Ra.V)();
          return (0, c.tZ)(
            d.VqE,
            { closeIconName: r("_common_dialog_dismiss_button"), isOpen: e, onClose: () => t(!1) },
            (0, c.tZ)(d.$N8, { title: r("team_activation_dialog_title") }),
            (0, c.tZ)(
              d.a7O,
              null,
              (0, c.tZ)(d.nvN, { sx: { marginBottom: "15px" }, color: d.colors.dashGreen01 }, r("team_activation_dialog_paragrah"))
            ),
            (0, c.tZ)(d.cNS, {
              primaryButtonTitle: r("team_activation_dialog_activate_button"),
              primaryButtonOnClick: async () => {
                var e;
                o?.(), t(!1);
                const l = null != (e = u?.teamInfo?.name) ? e : "",
                  c = await i();
                c?.teamKey ? await n(!1) : (await s(l), m.showAlert(r("team_activation_dialog_notification"), d.BLW.SUCCESS)), a(!0);
              },
              primaryButtonProps: { type: "button" },
              secondaryButtonTitle: r("team_activation_dialog_notrightnow_button"),
              secondaryButtonOnClick: () => {
                o?.(), t(!1), m.showAlert(r("team_activation_dialog_cancel_notification"), d.BLW.SUBTLE);
              }
            })
          );
        };
      var Eu = a(245338);
      const Zu = ({ showSharingDialog: e, setShowSharingDialog: t }) => {
          const { translate: a } = (0, p.Z)(),
            { inviteLinkDataForAdmin: s, getInviteLinkDataForAdmin: i } = (0, Gc.h)(),
            o = (0, Ra.V)();
          return (
            (0, n.useEffect)(() => {
              i();
            }, [i]),
            (0, c.tZ)(
              d.VqE,
              { closeIconName: a("_common_dialog_dismiss_button"), isOpen: e, onClose: () => t(!1) },
              (0, c.tZ)(d.$N8, { title: a("team_sharing_invite_dialog_title") }),
              (0, c.tZ)(
                d.a7O,
                null,
                (0, c.tZ)(d.nvN, { sx: { marginBottom: "15px" }, color: d.colors.dashGreen01 }, a("team_sharing_invite_dialog_paragrah")),
                (0, c.tZ)(d.nvN, { sx: { marginBottom: "15px", fontWeight: "600" }, color: d.colors.dashGreen01 }, (0, oe.cI)(s?.teamKey))
              ),
              (0, c.tZ)(
                d.cNS,
                null,
                (0, c.tZ)(Eu.q, {
                  copyValue: (0, oe.cI)(s?.teamKey),
                  buttonText: a("team_sharing_invite_dialog_copy_link"),
                  onClick: () => {
                    navigator.clipboard.writeText((0, oe.cI)(s?.teamKey)),
                      o.showAlert(a("team_sharing_invite_dialog_copied_notification"), d.BLW.SUCCESS);
                  }
                })
              )
            )
          );
        },
        Tu = ({
          lee: e,
          teamId: t,
          isFreeTrial: a,
          totalSeatCount: s,
          numSeatsTaken: i,
          excludedInviteMembers: o,
          shouldShowInviteDialog: r,
          handleCloseInviteDialog: c,
          handleInvitePartialSuccess: d,
          handleInviteCompleteSuccess: u,
          invitePartialSuccessState: _,
          handleInvitationResultClosed: m,
          preFilledInviteEmails: p
        }) => {
          const { inviteLinkDataForAdmin: g, inviteLinkDataLoading: y, getInviteLinkDataForAdmin: b } = (0, Gc.h)(),
            [h, x] = n.useState(!1),
            [S, v] = n.useState(!1),
            { interacted: f } = (0, De.d)(l.NotificationName.ActivateInviteLink);
          return (
            n.useEffect(() => {
              b();
            }, [b]),
            n.createElement(
              n.Fragment,
              null,
              r
                ? n.createElement(fu, {
                    lee: e,
                    slotsTotal: s,
                    slotsTaken: i,
                    exclude: o,
                    isFreeTrial: a,
                    isOpen: r,
                    closeInviteDialog: c,
                    handleInvitePartialSuccess: d,
                    handleInviteCompleteSuccess: (e) => {
                      !1 === g?.disabled && v(!0), u(e);
                    },
                    preFilledEmails: p,
                    setShowActivationDialog: x
                  })
                : null,
              f || !h || y || g?.teamKey
                ? null
                : n.createElement(Cu, { showActivationDialog: h, setShowActivationDialog: x, setShowSharingDialog: v }),
              S ? n.createElement(Zu, { showSharingDialog: S, setShowSharingDialog: v }) : null,
              _.show
                ? n.createElement(Oc, {
                    teamId: t,
                    isOpen: _.show,
                    onClose: m,
                    invitedMembers: _.invitedMembers,
                    refusedMembers: _.refusedMembers
                  })
                : null
            )
          );
        },
        Nu = ({ lee: e, isOpen: t, onClose: a, prefilledEmails: s, teamMembers: i, handleInviteCompleteSuccess: o }) => {
          const r = (0, n.useRef)(!1),
            { invitePartialSuccessState: l, setInvitePartialSuccessState: d, handleInvitationResultClosed: u } = kc(),
            { teamId: _ } = (0, zo.fV)(),
            m = hc(i),
            [p, g] = (0, n.useState)(0),
            [y, b] = (0, n.useState)(!1);
          return (
            (0, n.useEffect)(() => {
              const t = (0, sn.v0)(e.globalState);
              if (t)
                return (
                  new rn.Z()
                    .status({ auth: t })
                    .then((e) => {
                      r.current || (g(e.content.team.membersNumber + e.content.team.extraFreeSlots), b(e.content.team.isFreeTrial));
                    })
                    .catch(),
                  () => {
                    r.current = !0;
                  }
                );
            }, []),
            (0, c.tZ)(Tu, {
              lee: e,
              teamId: _,
              totalSeatCount: p,
              numSeatsTaken: m,
              excludedInviteMembers: i.filter(({ status: e }) => "removed" !== e).map(({ login: e }) => e),
              isFreeTrial: y,
              shouldShowInviteDialog: t,
              handleCloseInviteDialog: a,
              handleInvitePartialSuccess: (e, t) => d({ show: !0, invitedMembers: e, refusedMembers: t }),
              handleInviteCompleteSuccess: o,
              invitePartialSuccessState: l,
              handleInvitationResultClosed: u,
              preFilledInviteEmails: s
            })
          );
        },
        Du = (e) => {
          const [t, a] = (0, n.useState)(!1),
            [s, i] = (0, n.useState)([]),
            [o, r] = (0, n.useState)(null),
            l = (0, n.useCallback)(
              async (t) => {
                if (!t?.signal?.aborted)
                  if (null !== e) {
                    a(!0);
                    try {
                      const t = await (0, Un.YY)({ teamId: e });
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
        Mu = "_common_toast_close_label",
        Iu = ({ domainName: e }) => {
          const { showToast: t } = (0, y.pm)(),
            [a, s] = (0, n.useState)(!1),
            [i, r] = (0, n.useState)(!1),
            { translate: l } = (0, p.Z)();
          return (0, y.tZ)(
            y.zx,
            {
              mood: "neutral",
              intensity: "quiet",
              layout: "iconLeading",
              onClick: async () => {
                let a;
                try {
                  (0, j.Kz)(new o.UserClickEvent({ button: o.Button.DownloadCsv })),
                    s(!0),
                    (a = setTimeout(() => {
                      r(!0);
                    }, 2e3)),
                    await (async () => {
                      const t = [],
                        a = await Xl(e, 10, 0),
                        n = Math.ceil(a.emailsImpactedCount / 10);
                      t.push(...a.emails);
                      const s = async (a = 0) => {
                        const i = [];
                        for (; a < n || (n - a) % 5 != 0; ) i.push(Xl(e, 10, 10 * a)), (a += 1);
                        const o = await Promise.all(i);
                        t.push(...o.flatMap((e) => e.emails)), a < n && s(a);
                      };
                      await s(1),
                        ((e, t) => {
                          (0, Zi.S)(
                            ((e, t) => {
                              let a = ["email", "domain", "data_affected", "incident_date", "view_status"].join(",") + "\n";
                              for (const n of e)
                                for (const e of n.leaks)
                                  a +=
                                    [
                                      `"${n.email}"`,
                                      `"${e.domain}"`,
                                      `"${e.types.join(", ")}"`,
                                      `"${t((0, Xt.Z)(e.breachDateUnix))}"`,
                                      `"${n.viewStatus}"`
                                    ].join(",") + "\n";
                              return a;
                            })(e, t),
                            "DWI-report.csv",
                            "text/csv;charset=utf-8"
                          );
                        })(t, l.shortDate);
                    })(),
                    t({ description: l("team_dark_web_insights_download_csv_success"), closeActionLabel: l(Mu) });
                } catch (e) {
                  t({ description: l("_common_generic_error"), mood: "danger", closeActionLabel: l(Mu) });
                } finally {
                  clearTimeout(a), s(!1), r(!1);
                }
              },
              icon: "DownloadOutlined",
              disabled: a,
              isLoading: i
            },
            l("team_dark_web_insights_download_csv")
          );
        };
      var Au, wu;
      const ku = ({ lee: e, domainName: t }) => {
        const { translate: a } = (0, p.Z)(),
          s = (0, Ra.V)(),
          { teamId: i } = (0, zo.fV)(),
          { teamMembers: r, refreshTeamMembers: c } = Du(i),
          { setHasNewBreaches: u } = ke(),
          [_, m] = (0, n.useState)(!0),
          [g, b] = (0, n.useState)(null),
          [h, x] = (0, n.useState)(!1),
          [S, v] = (0, n.useState)(1),
          [f, C] = (0, n.useReducer)((e) => e + 1, 0),
          { unseen: E, setAsSeen: Z } = (0, De.m)(l.NotificationName.TacDarkWebInsightsNewBadge),
          [T, N] = (0, n.useState)(!1),
          [D, M] = (0, n.useState)(new Set([])),
          I = r.filter((e) => ["pending", "proposed"].includes(e.status)).map((e) => e.login),
          A = r.filter((e) => ["pending", "proposed", "accepted"].includes(e.status)).map((e) => e.login),
          w = (0, n.useMemo)(() => {
            var e;
            return null != (e = g?.allImpactedEmails.filter((e) => !A.includes(e))) ? e : [];
          }, [g?.allImpactedEmails, A]),
          k = async (e, t) => {
            try {
              const a = await Xl(e, 10, t);
              return !!a && (b(a), !0);
            } catch {
              return !1;
            }
          };
        (0, n.useEffect)(() => {
          (0, j.Nc)(o.PageView.TacDarkWebInsights),
            u(!1),
            k(t, 0).then(() => {
              (0, j.Kz)(new o.UserLoadDarkWebInsightsResultsEvent({})), m(!1);
            });
        }, [u, t]),
          (0, n.useEffect)(() => {
            E && g?.emails && Z();
          }, [E, Z, g?.emails]);
        const O = (0, n.useCallback)(
            async (e) => {
              x(!0), (await k(t, 10 * (e - 1))) ? v(e) : (s.showAlert(a("team_dark_web_insights_generic_error"), d.BLW.ERROR), C()), x(!1);
            },
            [s, t, a]
          ),
          L = (0, n.useCallback)(() => {
            w.length <= 0 ||
              (N(!0),
              (0, j.Kz)(
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
              M(new Set(w)));
          }, [w]);
        return (0, y.tZ)(
          n.Fragment,
          null,
          _ ? Au || (Au = (0, y.tZ)(oc, null)) : null,
          !_ && g?.emails
            ? 0 === g.leaksCount
              ? (0, y.tZ)(ac, { domainName: t })
              : (0, y.tZ)(
                  n.Fragment,
                  null,
                  (0, y.tZ)(bc, { reports: g, suggestedInvitees: w, onInviteAll: L }),
                  (0, y.tZ)(
                    d.Zbd,
                    { sx: { padding: "32px 24px" } },
                    (0, y.tZ)(
                      "div",
                      { sx: { display: "flex", justifyContent: "space-between", marginBottom: "24px", alignItems: "center" } },
                      (0, y.tZ)(y.X6, { as: "h3" }, a("team_dark_web_insights_table_title")),
                      (0, y.tZ)(Iu, { domainName: t })
                    ),
                    (0, y.tZ)(_c, {
                      reports: g.emails,
                      isLoading: h,
                      pendingMembers: I,
                      emailsToInvite: w,
                      onInviteAction: (e) => {
                        N(!0),
                          (0, j.Kz)(
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
                          M(new Set([e]));
                      }
                    }),
                    (0, y.tZ)(
                      d.T5p,
                      { gridTemplateColumns: "1fr auto 1fr", alignItems: "center", sx: { paddingTop: 6, paddingBottom: 3 } },
                      (0, y.tZ)(
                        y.nv,
                        { color: "ds.text.neutral.quiet", textStyle: "ds.title.block.small" },
                        a("team_dark_web_insights_table_pagination_page_size", { pageSize: 10 })
                      ),
                      (0, y.tZ)(d.tlE, { key: f, totalPages: Math.ceil(g.emailsImpactedCount / 10), currentPage: S, onPageChange: O })
                    ),
                    (0, y.tZ)(Nu, {
                      lee: e,
                      isOpen: T,
                      prefilledEmails: D,
                      onClose: () => {
                        N(!1), M(new Set([]));
                      },
                      handleInviteCompleteSuccess: () => c(),
                      teamMembers: r
                    })
                  )
                )
            : null,
          _ || g?.emails || "" === t ? null : wu || (wu = (0, y.tZ)(rc, null))
        );
      };
      var Ou, Lu;
      const zu = ({ lastVerificationAttemptDateUnix: e, onRetry: t }) => {
          const { translate: a } = (0, p.Z)();
          return (0, c.tZ)(
            d.Ejs,
            {
              sx: {
                justifyContent: "space-between",
                flexDirection: "column",
                margin: "30px 0",
                paddingLeft: "24px",
                borderLeft: `solid 2px ${d.colors.grey00}`,
                gap: 5
              }
            },
            (0, c.tZ)(
              d.nvN,
              { size: "x-small", bold: !0 },
              a("team_dwi_pending_latest_attempt_label"),
              " ",
              e ? (0, c.tZ)(Gd.Z, { date: (0, Xt.Z)(e) }) : null
            ),
            (0, c.tZ)(
              d.zxk,
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
              (0, c.tZ)(
                d.Ejs,
                { sx: { alignItems: "center", flexDirection: "row", gap: 2 } },
                Ou || (Ou = (0, c.tZ)(d.DuK, { size: 12 })),
                (0, c.tZ)(d.nvN, { size: "x-small", color: d.colors.midGreen00 }, a("team_dwi_pending_retry_button_label"))
              )
            )
          );
        },
        Ru = ({ domain: e, isDeactivating: t, handleDeactivateDomain: a, handleRetryValidateDomain: s }) => {
          const { translate: i } = (0, p.Z)(),
            {
              dnsToken: { computedToken: o, challengeDomain: r } = { computedToken: "", challengeDomain: "" },
              lastVerificationAttemptDateUnix: l
            } = e;
          return (0, c.tZ)(
            n.Fragment,
            null,
            Lu || (Lu = (0, c.tZ)(Vl, null)),
            (0, c.tZ)(
              "div",
              null,
              (0, c.tZ)(
                d.Zbd,
                { sx: { padding: "24px", margin: "24px 0" } },
                (0, c.tZ)(d.X6q, { size: "x-small" }, i("team_breach_report_domain_verify_pending_title")),
                (0, c.tZ)(
                  d.nvN,
                  { sx: { marginBottom: "20px", marginTop: "10px" }, color: d.colors.grey00 },
                  i("team_dwi_pending_verification_txt")
                ),
                (0, c.tZ)(zu, { lastVerificationAttemptDateUnix: l, onRetry: s }),
                (0, c.tZ)(
                  d.Ejs,
                  { gap: "16px" },
                  (0, c.tZ)(d.k$b, { sx: { width: "70%" } }, (0, c.tZ)(d.oil, { fullWidth: !0, defaultValue: e.name, disabled: !0 })),
                  (0, c.tZ)(
                    d.k$b,
                    null,
                    (0, c.tZ)(
                      d.zxk,
                      { type: "button", disabled: t, nature: "secondary", onClick: a },
                      i("team_dwi_pending_cancel_button_label")
                    )
                  ),
                  (0, c.tZ)(
                    d.k$b,
                    null,
                    (0, c.tZ)(d.zxk, { type: "button", disabled: !0, sx: { maxWidth: "120px" } }, i("team_breach_report_verifying_txt"))
                  )
                )
              ),
              (0, c.tZ)(
                d.UQy,
                { size: "medium" },
                (0, c.tZ)(
                  d.UlM,
                  { open: !0 },
                  (0, c.tZ)(d._Oh, null, i("team_breach_report_domain_verify_dns_confirm_text")),
                  (0, c.tZ)(
                    d.rN7,
                    null,
                    (0, c.tZ)(
                      d.T5p,
                      { gap: "24px", gridTemplateColumns: "1fr", gridAutoRows: "auto" },
                      (0, c.tZ)(d.nvN, { size: "small", color: d.colors.grey00 }, i("team_breach_report_domain_verify_dns_description")),
                      (0, c.tZ)(Pl.x, {
                        inputValue: r,
                        textInputProps: { fullWidth: !0, readOnly: !0, label: i("team_settings_domain_verify_host") }
                      }),
                      (0, c.tZ)(Pl.x, {
                        inputValue: o,
                        textInputProps: { fullWidth: !0, readOnly: !0, label: i("team_settings_domain_verify_txt") }
                      }),
                      (0, c.tZ)(
                        d.nvN,
                        { size: "small", sx: { marginBottom: "20px" }, color: d.colors.grey00 },
                        i("team_breach_report_domain_verify_dns_secondary_description")
                      )
                    )
                  )
                )
              )
            )
          );
        },
        ju = { background: "ds.container.expressive.neutral.quiet.idle", color: "ds.text.neutral.standard", cursor: "default" },
        Pu = ({ label: e }) =>
          (0, c.tZ)(d.OTy, { sx: { ":hover": ju, ":focus": ju, ...ju }, disabled: !0, selected: !1, size: "medium", label: e }),
        Uu = ({ activeDomain: e, verifiedDomains: t, selectVerifiedDomain: a }) => {
          var n;
          const s = (0, ve.o)(U.w.DwiMultipleDomainsProd),
            i = null != (n = e?.name) ? n : "",
            o = t.map((e) =>
              (0, c.tZ)(d.OTy, {
                sx: ju,
                key: e.name,
                onClick: () => {
                  i !== e.name && a(e);
                },
                selected: i === e.name,
                size: "medium",
                label: e.name
              })
            );
          return (0, c.tZ)(
            d.G8v,
            { sx: { marginTop: "12px", padding: 0 } },
            s && t.length > 1 ? o : "" !== i ? (0, c.tZ)(Pu, { label: i }) : null
          );
        },
        Bu = (e) => (e ? "auto" : "800px"),
        Gu = ({ mainContent: e, mainProps: t, secondaryContent: a, secondaryProps: n, withDefaultBackground: s, fullWidth: i, ...o }) =>
          (0, c.tZ)(
            d.T5p,
            {
              gap: "32px",
              gridTemplateAreas: ["'top' 'bottom'", "'top' 'bottom'", "'left right'"],
              gridTemplateColumns: [null, null, `minmax(auto, ${Bu(null != i && i)}) 256px`],
              gridTemplateRows: ["auto auto", "auto auto", "auto"],
              alignContent: "flex-start",
              sx: { py: "32px", px: "42px", bg: s ? void 0 : "white" },
              ...o
            },
            (0, c.tZ)(d.dDn, { alignSelf: "flex-start", gridArea: ["top", "top", "right"] }, (0, c.tZ)(a, { ...n })),
            (0, c.tZ)(d.dDn, { gridArea: ["bottom", "bottom", "left"] }, (0, c.tZ)(e, { ...t }))
          ),
        Fu = {
          display: "flex",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          backgroundColor: `${d.colors.dashGreen06}`,
          alignItems: "center"
        },
        qu = (e) => n.createElement("div", { className: "container--INT3GORhR4" }, e.children);
      var Vu = a(303724);
      const $u = ({ header: e, children: t }) => (0, c.tZ)(vi, { header: e }, (0, c.tZ)("div", { className: "content--zBGSSVE1dv" }, t)),
        Wu = "group_name_already_in_use";
      var Hu = a(799542);
      const Ku = ({ children: e }) => (0, c.tZ)("div", { className: "groupHeader--al0rVgMEDT" }, e),
        Yu = {
          nameContainer: "nameContainer--NmQCGqTrTR",
          nameInput: "nameInput--Vpc7anR7aO",
          nameEditIcon: "nameEditIcon--Thlp4CT5Bq",
          spinner: "spinner--QQ6Zpwc8Zd",
          _errorText: "_errorText--shQIAebNjL",
          errorMessage: "errorMessage--Btb66DLL6K _errorText--shQIAebNjL",
          error: "error--UkyphHJLOB _errorText--shQIAebNjL"
        },
        Qu = ({ onNameChanged: e, defaultValue: t, editable: a, saving: s }) => {
          const i = (0, n.useRef)(null),
            [o, r] = (0, n.useState)(t),
            [l, c] = (0, n.useState)(!1),
            [d, u] = (0, n.useState)(null);
          (0, n.useEffect)(() => {
            l && i.current?.focus();
          }, [l, i]);
          const _ = () => {
              const a = i.current?.value.trim();
              c(!1),
                r(a || t),
                e &&
                  a &&
                  e(a).then(({ success: e, error: t = null }) => {
                    c(!e), u(e ? null : t);
                  });
            },
            m = Boolean(d);
          return (0, y.tZ)(
            y.X6,
            { as: "h1", color: "ds.text.neutral.standard", textStyle: "ds.title.section.large" },
            !l &&
              (0, y.tZ)(
                "div",
                {
                  className: w()(Yu.nameContainer, { [Yu.hoverableContainer]: a }),
                  onClick: () => {
                    a && c(!0);
                  }
                },
                o,
                s
                  ? (0, y.tZ)(Rs.Z, { size: 20, containerClassName: Yu.nameEditIcon })
                  : (0, y.tZ)("img", {
                      className: Yu.nameEditIcon,
                      src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAxNSAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNMTAuMTY3OCAxLjA3MjAzQzEwLjkzMDUgMC4zMDkzMjMgMTIuMTY2OCAwLjMwOTMyMyAxMi45Mjk1IDEuMDcyMDNDMTMuNjkyMyAxLjgzNDc0IDEzLjY5MjMgMy4wNzEwOSAxMi45Mjk1IDMuODM0NzhNMS4xOTA0NCAxMC4wNDlMMC41IDEzLjUwMjJMMy45NTIyMSAxMi44MTE4TDExLjU0ODEgNS4yMTQ5N0w4Ljc4NjI4IDIuNDUzMkwxLjE5MDQ0IDEwLjA0OVoiIHN0cm9rZT0iIzBFNjQ3NiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo="
                    })
              ),
            l &&
              (0, y.tZ)(
                "div",
                { className: Yu.editNameContainer },
                (0, y.tZ)("input", {
                  ref: i,
                  type: "text",
                  className: w()(Yu.nameInput, { [Yu.error]: m }),
                  defaultValue: o,
                  onBlur: _,
                  onKeyUp: (e) => {
                    13 === e.keyCode && _();
                  }
                })
              ),
            l && m ? (0, y.tZ)("div", { className: Yu.errorMessage }, d) : null
          );
        };
      var Xu = a(176103);
      const Ju =
          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNSAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNOC41IDEuMTMyMzJMMTQuNSA3LjEzMjMyTTguNSAxMy4xMzIzTDE0LjUgNy4xMzIzMk0xNC41IDcuMTMyMzJMMC41MDAwMDEgNy4xMzIzMiIgc3Ryb2tlPSIjRDZEMkNFIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==",
        e_ = "onboardingStepArrow--gqb_E47Df_",
        t_ = "onboardingStepPanel--qnDSxlGTtS",
        a_ = "onboardingStepCounterPanel--KZLs4foheX",
        n_ = "onboardingStepText--K_Kh_SIwEm",
        s_ = "circle--mihUuCFcJa";
      var i_, o_;
      const r_ = {
          CONTAINER: {
            width: "100%",
            textAlign: "center",
            marginTop: "32px",
            paddingTop: "58px",
            border: "dashed 1px ds.border.neutral.quiet.idle",
            backgroundColor: "ds.container.agnostic.neutral.supershy"
          }
        },
        l_ = () => {
          const { translate: e } = (0, p.Z)();
          return (0, y.tZ)(
            "div",
            { sx: r_.CONTAINER },
            (0, y.tZ)(
              "div",
              { className: "onboardingTitlePanel--yGKYcW_2lp" },
              (0, y.tZ)(
                y.X6,
                { as: "h1", textStyle: "ds.title.section.large", color: "ds.text.neutral.catchy" },
                e("team_groups_list_onboarding_title")
              )
            ),
            (0, y.tZ)(
              "div",
              { className: "onboardingStepsContainer--LZ8j5MDbRH" },
              (0, y.tZ)(
                "div",
                { className: t_ },
                (0, y.tZ)("div", { className: a_ }, (0, y.tZ)("div", { className: s_ }, "1")),
                (0, y.tZ)("div", { className: n_ }, e("team_groups_list_onboarding_step_1"))
              ),
              (0, y.tZ)("div", { className: e_ }, i_ || (i_ = (0, y.tZ)("img", { src: Ju }))),
              (0, y.tZ)(
                "div",
                { className: t_ },
                (0, y.tZ)("div", { className: a_ }, (0, y.tZ)("div", { className: s_ }, "2")),
                (0, y.tZ)("div", { className: n_ }, e("team_groups_list_onboarding_step_2"))
              ),
              (0, y.tZ)("div", { className: e_ }, o_ || (o_ = (0, y.tZ)("img", { src: Ju }))),
              (0, y.tZ)(
                "div",
                { className: t_ },
                (0, y.tZ)("div", { className: a_ }, (0, y.tZ)("div", { className: s_ }, "3")),
                (0, y.tZ)("div", { className: n_ }, e("team_groups_list_onboarding_step_3"))
              )
            )
          );
        };
      var c_ = a(739844);
      const d_ = "onboarding_web_tacgetstarted",
        u_ = ({ key: e, index: t, isFirstTimeGroupCreation: a, hasNewGroupDelayPassed: n, children: s }) => {
          const { translate: i } = (0, p.Z)(),
            o = (0, Ne._)(),
            { [d_]: r = !1 } = o.status !== je.rq.Success ? {} : o.data;
          return (0, y.tZ)(
            d.ua7,
            {
              sx: { "@keyframes fadeIn": { "0%": { opacity: 0 }, "100%": { opacity: 1 } }, animation: "fadeIn 250ms ease-out" },
              key: e,
              passThrough: 0 !== t || !a || !r || !n,
              placement: "bottom",
              arrowSize: 12,
              trigger: "persist",
              content: (0, y.tZ)(y.nv, { color: "ds.text.inverse.standard" }, i("team_groups_list_new_group_tooltip"))
            },
            s
          );
        };
      var __, m_;
      const p_ = {
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
        g_ = "team_groups_list_search_placeholder",
        y_ = "isFirstTimeGroupCreation",
        b_ = (e, t) => {
          const a = e.name.toLocaleLowerCase(),
            n = t.name.toLocaleLowerCase();
          return a.localeCompare(n);
        },
        h_ = "onboarding_web_tacgetstarted",
        x_ = ({ tooltipDismissed: e, setTooltipDismissed: t, children: a }) => {
          var n;
          const s = (0, i.TH)(),
            { translate: o } = (0, p.Z)(),
            r = (0, Ne._)(),
            l = null != (n = s.state?.[y_]) && n,
            { [h_]: c = !1 } = r.status !== je.rq.Success ? {} : r.data;
          return (0, y.tZ)(
            d.ua7,
            {
              sx: { maxWidth: "400px" },
              passThrough: e || !l || !c,
              placement: "left-start",
              arrowSize: 0,
              trigger: "persist",
              content: (0, y.tZ)(
                d.Ejs,
                { flexDirection: "column", gap: "8px", sx: { padding: "8px", textAlign: "left", width: "auto" } },
                (0, y.tZ)(y.X6, { as: "h1", color: "ds.text.inverse.catchy" }, o("team_groups_edit_add_member_tooltip_title")),
                (0, y.tZ)(y.nv, { color: "ds.text.inverse.standard" }, o("team_groups_edit_add_member_tooltip_content")),
                (0, y.tZ)(y.zx, { onClick: () => t(!0), sx: { alignSelf: "end" } }, o("team_invite_dialog_infobox_action"))
              )
            },
            a
          );
        },
        S_ = ({ lee: e, userGroup: t }) => {
          const a = (0, n.useRef)(null),
            { translate: s } = (0, p.Z)(),
            { teamId: i } = (0, zo.fV)(),
            { teamMembers: o } = Du(i),
            [r, l] = (0, n.useState)(null),
            [u, _] = (0, n.useState)(!1),
            [m, g] = (0, n.useState)([]),
            { invitePartialSuccessState: y, setInvitePartialSuccessState: b, handleInvitationResultClosed: h } = kc(),
            x = (0, Ra.V)(),
            S = (e) => (0, c.tZ)(Bi.q, { className: "avatar--ZwBEp_dc1w", email: e, size: 32 }),
            v = () => Boolean(m.length);
          return (0, c.tZ)(
            "div",
            null,
            (0, c.tZ)(
              Hu.e,
              {
                ref: a,
                buttonLabel: s("team_groups_edit_add_members"),
                confirmButtonLabel: s("team_groups_edit_add_member_confirm"),
                cancelButtonLabel: s("team_groups_edit_add_member_cancel"),
                confirmButtonDisabled: !v(),
                onCancelButtonClick: () => {
                  g([]), l(null);
                },
                onConfirmButtonClick: async () => {
                  if (!v()) return;
                  const n = m,
                    { groupId: o, revision: r, name: c } = t,
                    u = n.map((e) => ({ alias: e.toLowerCase(), permission: "limited" }));
                  if (null === i) return void e.reportError(new Error(en.N));
                  const p = await (0, Un.j_)({ teamId: i, groupId: o, revision: r, users: u });
                  if (p.error)
                    return "no_free_slot" === p.error.message || "not_enough_free_slots" === p.error.message
                      ? void x.showAlert(
                          s("team_group_edit_add_member_not_enough_slots_error", { count: u.length, groupName: c }),
                          d.BLW.ERROR
                        )
                      : void x.showAlert(s("team_groups_edit_invite_member_to_group_error_message_markup"), d.BLW.ERROR);
                  Object.keys(p.refusedMembers).length && b({ invitedMembers: {}, refusedMembers: p.refusedMembers, show: !0 }),
                    a.current && a.current.hidePopup(),
                    g([]),
                    l(null),
                    _(!0);
                },
                popupClassName: "addMemberPopup--Zd2J1smSL4"
              },
              (0, c.tZ)(
                x_,
                { tooltipDismissed: u, setTooltipDismissed: _ },
                (0, c.tZ)("span", { className: "addMemberLabel--DXxhvug4yq" }, s("team_groups_edit_add_member_header")),
                r && (0, c.tZ)("div", { className: "error--IjVtbntYUX" }, r),
                (0, c.tZ)(Xu.J, {
                  autoFocus: !0,
                  className: "addMemberMultiselect--CDfv8wJoB6",
                  dataSource: (() => {
                    const e = new Set(t.users.filter(({ status: e }) => ["accepted", "pending"].includes(e)).map(({ alias: e }) => e));
                    return o
                      .filter(({ login: t, status: a }) => "removed" !== a && !e.has(t))
                      .map(({ login: e }) => ({ text: e, icon: S(e) }));
                  })(),
                  getCurrentSelectionAvatar: S,
                  defaultValue: m,
                  isItemValid: (e) => (0, ha.vV)(e),
                  onChange: (e) => {
                    g(e);
                  },
                  onError: (e) => l(e ? s(`team_groups_edit_error_${e.message}`) : null),
                  placeholder: s("team_groups_edit_add_member_input_placeholder")
                })
              )
            ),
            (0, c.tZ)(Oc, {
              teamId: (0, f.ev)(e.globalState),
              isOpen: y.show,
              onClose: h,
              invitedMembers: y.invitedMembers,
              refusedMembers: y.refusedMembers
            })
          );
        };
      var v_;
      const f_ = Ja.Maybe.nothing(),
        C_ = ({ onBackLinkClick: e, onDeleteClick: t, onRenameGroup: a, groupName: s, lee: i, userGroup: o }) => {
          const { translate: r } = (0, p.Z)(),
            [l, c] = (0, n.useState)(Ja.Maybe.nothing()),
            [u, _] = (0, n.useState)(!1);
          return (0, y.tZ)(
            Ku,
            null,
            (0, y.tZ)(
              y.zx,
              {
                mood: "brand",
                intensity: "supershy",
                layout: "iconLeading",
                icon: v_ || (v_ = (0, y.tZ)(y.JO, { name: "ArrowLeftOutlined" })),
                onClick: (t) => {
                  e(t);
                }
              },
              r("team_groups_edit_header_back")
            ),
            (0, y.tZ)(
              "div",
              { style: { display: "flex", justifyContent: "space-between" } },
              (0, y.tZ)(Qu, {
                defaultValue: s,
                editable: !0,
                saving: u,
                onNameChanged: async (e) => {
                  _(!0);
                  const { error: t } = await a(e);
                  return _(!1), t === Wu ? { success: !1, error: r("team_groups_edit_header_name_already_exists") } : { success: !0 };
                }
              }),
              (0, y.tZ)(
                "div",
                { style: { display: "flex", justifyContent: "left" } },
                (0, y.tZ)("span", { style: { marginRight: "8px" } }, (0, y.tZ)(S_, { lee: i, userGroup: o })),
                (0, y.tZ)(
                  Hu.e,
                  {
                    buttonLabel: r("team_groups_edit_header_delete_group"),
                    cancelButtonLabel: r("team_groups_edit_header_delete_group_cancel_button"),
                    confirmButtonLabel: r("team_groups_edit_header_delete_group_confirm_button"),
                    onCancelButtonClick: () => {
                      c(f_);
                    },
                    onConfirmButtonClick: () => {
                      c(f_), t();
                    },
                    confirmButtonDisabled: !l.caseOf({ just: (e) => e === s, nothing: () => !1 }),
                    popupClassName: "confirmPopup--NTDDMjDo4B",
                    buttonMood: "neutral",
                    buttonIntensity: "quiet",
                    buttonIconName: "ActionDeleteOutlined"
                  },
                  (0, y.tZ)(
                    "div",
                    { style: { display: "flex", flexDirection: "column", gap: 10, marginBottom: 12 } },
                    (0, y.tZ)(
                      d.nvN,
                      { size: "large" },
                      r.markup("team_groups_edit_header_delete_group_confirm_title_markup", { group: s })
                    ),
                    (0, y.tZ)(d.nvN, { color: "neutrals.8" }, r("team_groups_edit_header_delete_group_confirm_subtitle")),
                    (0, y.tZ)(d.oil, {
                      fullWidth: !0,
                      onChange: (e) => {
                        const t = e.target.value && e.target.value.trim();
                        c(Ja.Maybe.maybe(t));
                      },
                      type: "text",
                      defaultValue: l.caseOf({ just: (e) => e, nothing: () => {} }),
                      autoFocus: !0
                    })
                  )
                )
              )
            )
          );
        };
      var E_;
      const Z_ = (e) =>
        n.createElement(
          "svg",
          { className: e.className, width: "16", height: "16", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg", fill: "none" },
          E_ ||
            (E_ = n.createElement("path", {
              d: "M13.5 2.5V15.5H2.5V2.5M10.5 2.5V0.5H5.5V2.5M1 2.5H15M5.5 6V11M8 6V11M10.5 6V11",
              stroke: "#0E6476",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }))
        );
      var T_;
      const N_ = n.memo(({ member: e, handleRemoveMember: t }) => {
          const { translate: a } = (0, p.Z)();
          return n.createElement(
            "tr",
            null,
            n.createElement(
              "td",
              { className: "emailCell--c3avC4hgf6" },
              n.createElement(
                "div",
                { className: "emailCellContainer--yFS7a4HnT_" },
                n.createElement(Bi.q, { className: "avatar--XHrkwJbc_C", email: e.alias, size: 32 }),
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
              n.createElement("div", { style: { cursor: "pointer" }, onClick: () => t(e) }, T_ || (T_ = n.createElement(Z_, null)))
            )
          );
          var s, i;
        }),
        D_ = (0, Pn.ascend)((0, Pn.prop)("permission")),
        M_ = (0, Pn.ascend)((0, Pn.compose)(Pn.toLower, (0, Pn.prop)("alias"))),
        I_ = (0, Pn.sortWith)([D_, M_]),
        A_ = Ja.Maybe.nothing(),
        w_ = ({ lee: e, className: t, userGroup: a, revokeMembers: s }) => {
          const { translate: i } = (0, p.Z)(),
            [o, r] = (0, n.useState)(0),
            [l, c] = (0, n.useState)({ showRemoveUserDialog: !1, removeMemberCandidate: Ja.Maybe.nothing() }),
            u = (e) => {
              c({ showRemoveUserDialog: !0, removeMemberCandidate: Ja.Maybe.just(e) });
            },
            _ = () => (a.users || []).filter((e) => "accepted" === e.status || "pending" === e.status),
            m = () => {
              c({ showRemoveUserDialog: !1, removeMemberCandidate: A_ });
            },
            g = (0, Pn.map)((e) => n.createElement(N_, { key: e.alias, member: e, handleRemoveMember: u })),
            y = [
              { headerLabel: i("team_groups_edit_member_list_header_email"), headerKey: "email" },
              { headerLabel: i("team_groups_edit_member_list_header_group_rights"), colSpan: 2, headerKey: "group-rights" }
            ];
          return n.createElement(
            "div",
            null,
            n.createElement(
              "table",
              { className: w()(t, "table--hj3WYleNh5") },
              n.createElement(ji, { columns: y }),
              n.createElement(
                "tbody",
                null,
                (() => {
                  const e = 24 * o;
                  return (0, Pn.compose)(g, (0, Pn.slice)(e, e + 24), I_)(_());
                })()
              )
            ),
            n.createElement(
              "div",
              { className: "pagination--Xk8h572zZ7" },
              n.createElement(Md.Z, {
                currentPageIndex: o,
                itemsLength: _().length,
                itemsPerPage: 24,
                onChange: (e) => {
                  r(e);
                }
              })
            ),
            n.createElement(
              G.o,
              {
                isOpen: l.showRemoveUserDialog,
                onRequestClose: m,
                footer: n.createElement(d.cNS, {
                  primaryButtonTitle: i("team_groups_edit_member_list_action_remove_dialog_cta"),
                  primaryButtonOnClick: () => {
                    Ja.Maybe.sequence({ removeMemberCandidate: l.removeMemberCandidate, userGroup: Ja.Maybe.just(a) }).caseOf({
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
                      c({ showRemoveUserDialog: !1, removeMemberCandidate: A_ });
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
      var k_ = a(947843),
        O_ = a(988799);
      const L_ = (e) => `{${e.match.params.uuid}}`,
        z_ = { userGroup: { live: ea.C.liveAdministrableUserGroup, liveParam: L_, query: ea.C.getAdministrableUserGroup, queryParam: L_ } },
        R_ = { strategies: z_ },
        j_ = (0, k_.$)(
          (0, O_.i)(({ lee: e, userGroup: t }) => {
            const { routes: a } = (0, i.Xo)(),
              { translate: s } = (0, p.Z)(),
              { addAlertToQueue: r } = $();
            (0, $o.Bf)(),
              (0, n.useEffect)(() => {
                (0, j.Nc)(o.PageView.TacGroupDetails);
              }, []);
            const l = (e, t, a, n) => {
              try {
                const e = JSON.parse(n);
                e.code && (t.message += ` : ${e.code}`);
              } finally {
                e(Vu.Qy.error({ message: a, content: { error: n } })), r(t);
              }
            };
            if (!t) return null;
            const c = (0, y.tZ)(C_, {
              onBackLinkClick: () => {
                (0, i.uX)(a.teamGroupsRoutePath);
              },
              onDeleteClick: () => {
                const { groupId: n, revision: o } = t;
                (0, Un.FU)({ groupId: n, revision: o })
                  .then(() => {
                    (0, i.uX)(a.teamGroupsRoutePath);
                  })
                  .catch((t) => {
                    const a = {
                      title: s("team_groups_edit_delete_group_error_title"),
                      message: s("team_groups_edit_delete_group_error_message")
                    };
                    l(e.dispatchGlobal, a, "Group deletion failed", t.message);
                  });
              },
              onRenameGroup: async (a) => {
                if (a === t.name) return { success: !0 };
                const n = (t, a) => {
                  const n = {
                    title: s("team_groups_edit_rename_group_error_title"),
                    message: s("team_groups_edit_rename_group_error_message")
                  };
                  return l(e.dispatchGlobal, n, a, t.message), { success: !1, error: "group_renaming_failed" };
                };
                try {
                  if (!(await ea.C.isGroupNameAvailable(a))) return { success: !1, error: Wu };
                } catch (e) {
                  return n(e, "Group name availability check failed");
                }
                try {
                  const { groupId: e, revision: n } = t;
                  return await (0, Un.J0)({ groupId: e, revision: n, name: a }), { success: !0 };
                } catch (e) {
                  return n(e, "Group renaming failed");
                }
              },
              groupName: t.name,
              lee: e.child(),
              userGroup: t
            });
            return (0, y.tZ)(
              $u,
              { header: c },
              (0, y.tZ)(w_, {
                lee: e.child(),
                userGroup: t,
                revokeMembers: (e, t, a) => {
                  try {
                    ea.C.revokeUserGroupMembers(t).then(({ error: t }) => {
                      t && l(e, a, "Revoke member from group failed", t.message);
                    });
                  } catch (t) {
                    l(e, a, "Revoke member from group failed", t.message);
                  }
                }
              })
            );
          }, R_),
          z_
        );
      var P_ = a(158432);
      const U_ = (0, P_.SP)("edit", {}, []),
        B_ = { userGroups: { live: ea.C.liveAdministrableUserGroups, query: ea.C.getAdministrableUserGroups } },
        G_ = { strategies: B_, loadingComponent: n.createElement(Rs.Z, { containerStyle: { minHeight: 240 } }) },
        F_ = (0, k_.$)(
          (0, O_.i)(({ userGroups: e, lee: t }) => {
            const a = (0, n.useRef)(null),
              { translate: s } = (0, p.Z)(),
              { teamId: r } = (0, zo.fV)(),
              { routes: l } = (0, mi.Xo)(),
              { addAlertToQueue: c, reportTACError: u } = $(),
              [_, m] = (0, n.useState)(""),
              [g, b] = (0, n.useState)(!1),
              [h, x] = (0, n.useState)(!1),
              [S, v] = (0, n.useState)(""),
              [f, C] = (0, n.useState)(e),
              E = (0, n.useRef)(!1),
              Z = (0, i.k6)();
            (0, n.useEffect)(() => {
              (0, j.Nc)(o.PageView.TacGroupList);
            }, []),
              (0, n.useEffect)(() => {
                const t = [...e].sort(b_),
                  a = S ? t.filter((e) => e.name.toLocaleLowerCase().includes(S.trim().toLocaleLowerCase())) : t;
                C(a);
              }, [S, e]);
            const T = (e) => {
                Z.push({ pathname: l.teamGroupRoutePath((0, c_.FN)(e.groupId)), state: { [y_]: E.current } });
              },
              N = async (e) => {
                var t;
                const a = null != (t = e.target.value.trim()) ? t : "",
                  n = "" !== a && (await ea.C.isGroupNameAvailable(a));
                m(a), b(n);
              },
              D = () => {
                m("");
              },
              M = async () => {
                if (!r) throw new Error("teamId missing when attempting to create group");
                try {
                  await (0, Un.wZ)(t.dispatchGlobal, { name: _, teamId: r }),
                    a.current?.hidePopup(),
                    m(""),
                    e?.length
                      ? E.current && (E.current = !1)
                      : ((E.current = !0),
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
                  t !== q &&
                    c({
                      title: s("team_groups_list_create_group_error_title"),
                      message: s(
                        "MISSING_PUBLIC_KEY" === t
                          ? "team_groups_list_create_group_missing_public_key_error_message"
                          : "team_groups_list_create_group_error_message"
                      )
                    }),
                    u(new Error(e.message));
                }
              };
            return (0, y.tZ)(
              $u,
              {
                header: (() => {
                  const e = !g && "" !== _;
                  return (0, y.tZ)(
                    Ku,
                    null,
                    (0, y.tZ)(
                      "div",
                      { sx: { display: "flex", justifyContent: "space-between" } },
                      (0, y.tZ)(
                        y.X6,
                        { as: "h1", color: "ds.text.neutral.standard", textStyle: "ds.title.section.large" },
                        s("team_groups_list_title")
                      ),
                      (0, y.tZ)(
                        Hu.e,
                        {
                          ref: a,
                          buttonLabel: s("team_groups_list_new_group_cta"),
                          confirmButtonLabel: s("team_groups_list_new_group_creation_confirm_btn"),
                          cancelButtonLabel: s("team_groups_list_new_group_creation_cancel_btn"),
                          onConfirmButtonClick: M,
                          onCancelButtonClick: D,
                          confirmButtonDisabled: !g
                        },
                        (0, y.tZ)(
                          "div",
                          { style: { display: "flex", flexDirection: "column", gap: 10, marginBottom: 12 } },
                          (0, y.tZ)(y.nv, { as: "label" }, s("team_groups_list_new_group_creation_header")),
                          (0, y.tZ)(d.oil, {
                            fullWidth: !0,
                            onChange: N,
                            defaultValue: _,
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
                  ? (0, y.tZ)(
                      d.T5p,
                      {
                        sx: p_.GROUP_GRID,
                        gap: "16px",
                        gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))",
                        gridAutoRows: "62px"
                      },
                      f.map((e, t) =>
                        e
                          ? (0, y.tZ)(
                              u_,
                              { key: e.groupId, index: t, isFirstTimeGroupCreation: E.current, hasNewGroupDelayPassed: h },
                              (0, y.tZ)(
                                "div",
                                {
                                  className: "groupItem",
                                  onClick: () => T(e),
                                  onKeyDown: (t) => {
                                    "Enter" === t.key && T(e);
                                  },
                                  tabIndex: 0,
                                  role: "button",
                                  title: e.name,
                                  sx: p_.GROUP_ITEM
                                },
                                (0, y.tZ)(y.X6, { as: "h2", textStyle: "ds.title.block.medium", color: "ds.text.neutral.catchy" }, e.name)
                              )
                            )
                          : null
                      )
                    )
                  : __ || (__ = (0, y.tZ)(l_, null));
                return (0, y.tZ)(
                  "div",
                  { sx: { paddingY: "24px" } },
                  (0, y.tZ)(y.ke, { title: s("team_groups_list_info_box_title"), mood: "brand" }),
                  (0, y.tZ)(y.oi, {
                    "aria-label": s(g_),
                    placeholder: s(g_),
                    type: "search",
                    onChange: (e) => {
                      var t;
                      return v(null != (t = e.target.value) ? t : "");
                    },
                    prefixIcon: m_ || (m_ = (0, y.tZ)(y.JO, { name: "ActionSearchOutlined" })),
                    sx: { maxWidth: "365px", margin: 0, padding: "16px 0" }
                  }),
                  t
                );
              })()
            );
          }, G_),
          B_
        ),
        q_ = (0, P_.SP)("list", {}, []),
        V_ = _o(F_, Ie.$.GROUPS),
        $_ = _o(j_, Ie.$.GROUPS);
      function W_(e) {
        const { path: t, permission: a } = e;
        return n.createElement(
          i.GB,
          { exact: !0, path: [t, `${t}/:uuid`], component: qu, permission: a },
          n.createElement(
            i.rs,
            null,
            n.createElement(i.Vy, { exact: !0, path: t, component: V_, reducer: q_ }),
            n.createElement(i.Vy, { path: `${t}/:uuid`, component: $_, reducer: U_ })
          )
        );
      }
      var H_ = a(986081);
      const K_ = {
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
      var Y_;
      const Q_ = {
          SETTINGS_PANEL: {
            display: "inline-block",
            backgroundColor: "ds.container.agnostic.neutral.supershy",
            padding: "32px",
            marginBottom: "10px",
            flex: "1",
            borderRadius: "8px"
          }
        },
        X_ = ({ children: e, secondaryContent: t, title: a, isLoading: n = !1 }) =>
          n
            ? Y_ || (Y_ = (0, y.tZ)(Vo, { scopedToPage: !0 }))
            : (0, y.tZ)(
                "div",
                { className: w()(K_.settingsPage, { [K_.withoutHeader]: !a }) },
                (0, y.tZ)(
                  "div",
                  { className: K_.settingsContainer },
                  a
                    ? (0, y.tZ)(
                        y.X6,
                        { as: "h1", textStyle: "ds.title.section.large", color: "ds.text.neutral.catchy", sx: { marginBottom: "32px" } },
                        a
                      )
                    : null,
                  (0, y.tZ)("div", { sx: Q_.SETTINGS_PANEL }, e),
                  t
                )
              );
      var J_ = a(818345),
        em = a(754674);
      const tm = ({ data: e, targetUri: t, ...a }) => {
          const s = (0, n.useRef)(null);
          return (0, c.tZ)(
            "form",
            { action: t, method: "post", ref: s, target: "_blank", rel: "noopener" },
            (() => {
              const t = [];
              return (
                Object.keys(e).forEach((a) =>
                  t.push(
                    (0, c.tZ)("input", {
                      defaultValue: e[a],
                      key: String(65535 * Math.random()).replace(/\./, ""),
                      type: "hidden",
                      name: a
                    })
                  )
                ),
                (0, c.tZ)("div", null, t)
              );
            })(),
            (0, c.tZ)(Dd.Z, { onClick: () => s.current?.submit(), ...a })
          );
        },
        am = {
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
        nm = "team_settings_duo_header_general";
      var sm = a(183e3),
        im = a(901500);
      const om = ({ content: e, header: t, index: a }) =>
          (0, y.tZ)(
            d.Ejs,
            { gap: "8px", sx: { flexFlow: "row", flexBasis: "25%" } },
            (0, y.tZ)(
              d.Ejs,
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
            (0, y.tZ)(
              "section",
              null,
              (0, y.tZ)(
                d.X6q,
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
              (0, y.tZ)(d.nvN, { sx: { fontSize: 12, lineHeight: "16px", color: "ds.text.neutral.quiet" } }, e)
            )
          ),
        rm = () => {
          const { translate: e } = (0, p.Z)();
          return (0, c.tZ)(
            "div",
            { sx: { display: "flex", flexDirection: "row", marginBottom: 40, gap: "24px" } },
            (0, c.tZ)(om, {
              index: 1,
              header: e("team_settings_master_password_policies_settings_stepper_step_request_title"),
              content: e("team_settings_master_password_policies_settings_stepper_step_request_subtitle")
            }),
            (0, c.tZ)(om, {
              index: 2,
              header: e("team_settings_master_password_policies_settings_stepper_step_approval_title"),
              content: e("team_settings_master_password_policies_settings_stepper_step_approval_subtitle")
            }),
            (0, c.tZ)(om, {
              index: 3,
              header: e("team_settings_master_password_policies_settings_stepper_step_recover_title"),
              content: e("team_settings_master_password_policies_settings_stepper_step_recover_subtitle")
            }),
            (0, c.tZ)(om, {
              index: 4,
              header: e("team_settings_master_password_policies_settings_stepper_step_login_title"),
              content: e("team_settings_master_password_policies_settings_stepper_step_login_subtitle")
            })
          );
        };
      var lm, cm;
      const dm = ({ onClick: e, content: t }) =>
          (0, y.tZ)(y.zx, { mood: "brand", intensity: "quiet", onClick: e, sx: { maxWidth: "fit-content" } }, t),
        um = ({ header: e }) =>
          (0, y.tZ)(y.X6, { as: "h2", key: e.label, textStyle: "ds.title.supporting.small", color: "ds.text.neutral.quiet" }, e.label);
      var _m = a(920106),
        mm = a(361809);
      var pm, gm;
      const { accessibleValidatorGreen: ym } = d.colors,
        bm = ({
          value: e,
          isDisabled: t,
          onSelectElementClick: a,
          options: s,
          saveValueFunction: i,
          successMessage: o,
          savingMessage: r
        }) => {
          const [l, c] = (0, n.useState)(Ja.Maybe.nothing()),
            [u, _] = (0, n.useState)(!1),
            [m, p] = (0, n.useState)(!1);
          return (0, y.tZ)(
            "div",
            { className: "container--Wz5267l08y" },
            (0, y.tZ)(
              "div",
              { className: "select--EypTcJ6Y5l" },
              (0, y.tZ)(
                mm.m,
                {
                  value: e.valueOr(""),
                  disabled: t || u || e.caseOf({ just: () => !1, nothing: () => !0 }),
                  onChangeExtended: (e, t, a) => {
                    _(!0),
                      i(a)
                        .then(() => {
                          _(!1),
                            p(!0),
                            c(Ja.Maybe.nothing()),
                            setTimeout(() => {
                              p(!1);
                            }, 1e3);
                        })
                        .catch((e) => {
                          _(!1), p(!1);
                          const t = (0, tn.i)(e);
                          c(Ja.Maybe.just(t));
                        });
                  },
                  onClick: a,
                  errorText: l.valueOr(""),
                  successText: m ? o : u ? r : "",
                  style: { marginTop: "-1.5em", width: 320 }
                },
                s.map((e) => (0, y.tZ)(mm.t, { key: e.value, value: e.value, primaryText: e.label, disabled: e.disabled }))
              )
            ),
            u || m
              ? (0, y.tZ)(
                  "div",
                  { className: "feedback--XqG4rKApan" },
                  u ? pm || (pm = (0, y.tZ)(d.HoD, { color: ym, size: 18 })) : gm || (gm = (0, y.tZ)(d.rE2, { size: 20, color: ym }))
                )
              : null
          );
        },
        hm = {
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
        xm = {
          BUTTON_SAVE_LABEL: "team_settings_button_save_label",
          SAVING_LABEL: "team_settings_saving_label",
          BUTTON_EDIT_LABEL: "team_settings_button_edit_label",
          SAVE_SUCCESS_LABEL: "team_settings_save_success_label",
          SWITCH_DEFAULT_ERROR: "_common_generic_error"
        },
        Sm = (e) => (t) => {
          e.onClick && e.onClick(t);
        };
      async function vm(e, t, a) {
        return 0 !== Object.keys(t).length && e.teamId ? await a(e.teamId, t) : Promise.resolve();
      }
      function fm(e, t, a, n) {
        return (s) =>
          new Promise((i, o) => {
            let r = !1;
            if (e.validator) {
              const t = e.validator(e.serializer ? e.serializer(s) : s);
              t && ((r = !0), o(new Error(e.getErrorMessageForKey?.(t))));
            }
            if (!r) {
              var l;
              const r = (0, sn.v0)(t.globalState);
              if (!r) return n(new Error(en.N));
              const c = {};
              ["disableAutoLoginDomains", "teamDomain"].includes(null != (l = e.feature) ? l : "")
                ? e.value.caseOf({
                    just: (t) => {
                      const a = e.serializer?.(s),
                        n = t.filter((e) => !a.some((t) => t === e)),
                        i = a.filter((e) => !t.some((t) => t === e));
                      e.feature && (c[e.feature] = { removed: n, added: i.map((e) => e.toLowerCase()) });
                    },
                    nothing: () => {
                      e.serializer && e.feature && (c[e.feature] = { added: e.serializer(s) });
                    }
                  })
                : e.feature && (c[e.feature] = s),
                Object.keys(c).length
                  ? vm(r, c, a)
                      .then(() => {
                        const a = e.serializer ? e.serializer(s) : s;
                        e.feature && t.dispatch(_m.qs({ feature: e.feature, value: a })), i();
                      })
                      .catch((t) => o(new Error(e.getErrorMessageForKey?.(t.message))))
                  : i();
            }
          });
      }
      function Cm(e, t, a, n) {
        return async (s) => {
          e.feature && t.dispatch(_m.qs({ feature: e.feature, value: e.serializer ? e.serializer(s) : s }));
          const i = (0, sn.v0)(t.globalState);
          if (!i) return n(new Error(en.N));
          if (!e.feature) return;
          const o = {};
          o[e.feature] = "unset" === s ? null : e.serializer ? e.serializer(s) : s;
          try {
            await vm(i, o, a);
          } catch (t) {
            const a = t.data?.content || {},
              n = e.getErrorMessageForKey?.(a.error);
            throw new Error(n);
          }
        };
      }
      function Em(e, t) {
        return () =>
          Promise.resolve().then(() => {
            t(e);
          });
      }
      function Zm(e, t, a, n) {
        return async () => {
          const s = (0, sn.v0)(t.globalState);
          if (!s) return n(new Error(en.N));
          const i = {};
          if (
            (e.feature &&
              (i[e.feature] = e.value.caseOf({
                just: (t) => {
                  const a = !t;
                  return e.serializer ? e.serializer(a) : a;
                },
                nothing: () => !1
              })),
            e.value.valueOr(!1))
          ) {
            const { constraintsFromOtherFields: { requiredFor: a = [] } = {} } = e;
            a.filter((e) => {
              const a = t.state[e.feature];
              return Boolean(a?.value);
            }).forEach((e) => {
              i[e.feature] = !1;
            });
          }
          try {
            await vm(s, i, a);
          } catch (t) {
            const a =
                t.data?.content ||
                (429 === t.code && { error: "too_many_requests" }) ||
                ("not_authorized" === t.message && { error: "not_authorized" }) ||
                {},
              n = e.getErrorMessageForKey?.(a.error);
            throw new Error(n);
          }
        };
      }
      function Tm(e, t, a, n, s, i) {
        switch (e.type) {
          case "header":
            return (0, y.tZ)(um, { header: e });
          case "textwithbutton":
            return (
              (o = e),
              (0, y.tZ)(
                "div",
                { key: o.label, className: w()(K_.settingsRow, K_.textWithButtonSettingRow) },
                (0, y.tZ)(
                  "div",
                  null,
                  (0, y.tZ)(
                    y.X6,
                    { as: "h3", textStyle: "ds.title.block.medium", color: "ds.text.neutral.catchy", sx: hm.SETTINGS_LABEL_MARGIN_TOP },
                    o.label.split("//").map((e, t) => (t % 2 ? (0, y.tZ)("span", { className: K_.settingsGreyedLabel, key: e }, e) : e))
                  ),
                  o.helperLabel ? (0, y.tZ)("div", { id: "helper-label-panel", sx: hm.HELPER_LABEL_PANEL }, o.helperLabel) : null
                ),
                (0, y.tZ)("div", null, (0, y.tZ)(em.Z, { label: o.buttonLabel, onClick: Sm(o) }))
              )
            );
          default:
            return (function (e, t, a, n, s, i) {
              let o = null,
                r = K_.settingsRow;
              switch (e.type) {
                case "text":
                  (o = (function (e, t, a, n, s) {
                    const i = !!e.multiLine,
                      o = e.deserializer ? e.deserializer(e.value) : e.value;
                    return (0, y.tZ)(dn.X, {
                      multiLine: i,
                      defaultValue: o.valueOr(void 0),
                      key: e.label,
                      ariaLabelledBy: e.feature,
                      saveBtnLabel: n(xm.BUTTON_SAVE_LABEL),
                      savingBtnLabel: n(xm.SAVING_LABEL),
                      editBtnLabel: n(xm.BUTTON_EDIT_LABEL),
                      placeholder: e.hintText,
                      inputStyle: e.inputStyle,
                      hintStyle: e.hintStyle,
                      successMessage: n(xm.SAVE_SUCCESS_LABEL),
                      onSave: fm(e, t, a, s),
                      textFieldClassName: K_.textFieldInputColumn
                    });
                  })(e, t, a, s, i)),
                    (r = w()(K_.settingsRow, K_.textSettingRow));
                  break;
                case "select":
                  (o = (function (e, t, a, n, s) {
                    return (0, y.tZ)(bm, {
                      key: e.label,
                      value: e.value.map((e) => e.toString()),
                      saveValueFunction: Cm(e, t, a, s),
                      successMessage: n(xm.SAVE_SUCCESS_LABEL),
                      savingMessage: n(xm.SAVING_LABEL),
                      options: e.options
                    });
                  })(e, t, a, s, i)),
                    (r = w()(K_.settingsRow, K_.selectSettingRow));
                  break;
                case "switch":
                  (o = (function (e, t, a, n, s, i) {
                    var o;
                    const r = e.constraintsFromOtherFields?.disabledWhen
                        ? e.constraintsFromOtherFields.disabledWhen.reduce(
                            (e, a) =>
                              e.caseOf({
                                just: (e) => Ja.Maybe.just(e),
                                nothing: () => {
                                  const e = t.state[a.feature];
                                  return ("not_defined" === a.condition && e.caseOf({ just: (e) => !e.length, nothing: () => !0 })) ||
                                    ("is_disabled" === a.condition && e.caseOf({ just: (e) => !e, nothing: () => !0 })) ||
                                    ("is_enabled" === a.condition && e.caseOf({ just: (e) => e, nothing: () => !0 }))
                                    ? Ja.Maybe.maybe(a.warningMessage)
                                    : Ja.Maybe.nothing();
                                }
                              }),
                            Ja.Maybe.nothing()
                          )
                        : Ja.Maybe.nothing(),
                      l = e.value.valueOr(!1) ? e.confirmDisable : e.confirmEnable;
                    return (0, y.tZ)(J_.Z, {
                      isLoading: e.isLoading,
                      genericErrorMessage: s(xm.SWITCH_DEFAULT_ERROR),
                      ariaLabelledBy: e.feature,
                      key: e.label,
                      value: e.value,
                      isDisabled: r.caseOf({ just: () => !0, nothing: () => !1 }),
                      disabledFeedbackMessage: r.valueOr(null),
                      saveValueFunction: null != (o = e.customSwitchHandler) ? o : l ? Em(e, n) : Zm(e, t, a, i),
                      successMessage: s(xm.SAVE_SUCCESS_LABEL),
                      savingMessage: s(xm.SAVING_LABEL)
                    });
                  })(e, t, a, n, s, i)),
                    (r = w()(K_.settingsRow, K_.switchSettingRow));
                  break;
                case "cta":
                  (o = (0, y.tZ)(dm, { onClick: e.ctaAction, content: e.ctaLabel })), (r = w()(K_.settingsRow, K_.switchSettingRow));
              }
              return (0, y.tZ)(
                "div",
                { key: e.feature, className: r },
                (0, y.tZ)(
                  "div",
                  { sx: { maxWidth: "50%" } },
                  (0, y.tZ)(
                    "div",
                    { className: K_.settingsLabelContainer },
                    (0, y.tZ)(
                      y.X6,
                      {
                        as: "h3",
                        textStyle: "ds.title.block.medium",
                        color: "ds.text.neutral.catchy",
                        sx: "select" === e.type || "text" === e.type ? hm.SETTINGS_LABEL_MARGIN_TOP : {},
                        id: e.feature
                      },
                      e.label.split("//").map((e, t) => (t % 2 ? (0, y.tZ)("span", { key: e, className: K_.settingsGreyedLabel }, e) : e))
                    ),
                    e.badgeLabel
                      ? (0, y.tZ)(y.Ct, { label: e.badgeLabel, mood: "brand", iconName: e.badgeIconName, layout: "iconLeading" })
                      : null
                  ),
                  e.helperLabel ? (0, y.tZ)("div", { id: "helper-label-panel", sx: hm.HELPER_LABEL_PANEL }, e.helperLabel) : null,
                  e.infoBoxTitle && e.infoBoxDescription
                    ? (0, y.tZ)(
                        "div",
                        { className: K_.infoBoxPanel },
                        (0, y.tZ)(y.ke, { size: "large", title: e.infoBoxTitle, description: e.infoBoxDescription })
                      )
                    : null
                ),
                o
              );
            })(e, t, a, n, s, i);
        }
        var o;
      }
      const Nm = ({ lee: e, createFieldListFunction: t, title: a, pageView: s }) => {
        const { translate: i } = (0, p.Z)(),
          { reportTACError: o } = $(),
          [r, l] = (0, n.useState)(null),
          [c, d] = (0, n.useState)(!1),
          [u, _] = (0, n.useState)(""),
          [m, g] = (0, n.useState)(!1),
          { data: b, status: h } = (0, qe.k)(Tn.o, "getTeamPolicies"),
          { editTeamPolicies: x } = (0, Fe.u)(Tn.o),
          S = async (e, t) => {
            await x({ teamId: e, policyUpdates: t });
          },
          v = () => {
            l(null), d(!1), _(""), g(!1);
          },
          f = (e) => {
            l(e), d(!0), _(""), g(!1);
          },
          C = async () => {
            const t = await (0, Un.RR)({ masterPassword: null != u ? u : "" });
            if ((g(!t), !t)) return Promise.resolve();
            if (!r) return;
            const a = Zm(r, e, S, o);
            return v(), a();
          },
          E = (e) => {
            _(e.target.value), g(!1);
          },
          Z = (e) => {
            "Enter" === e.key && u && C();
          };
        if (
          ((0, n.useEffect)(() => {
            s && (0, j.Nc)(s);
          }, [s]),
          h === je.rq.Success)
        ) {
          if (!(0, sn.v0)(e.globalState)) return o(new Error(en.N)), null;
          try {
            e.dispatch(_m.MP(b));
          } catch (e) {
            return o(e), null;
          }
        }
        return (
          h === je.rq.Error && o(new Error("Error loading team policies")),
          (0, y.tZ)(
            X_,
            { title: a ? i(a) : void 0, isLoading: e.state.isLoading || h === je.rq.Loading },
            t(e, i).map((t) => Tm(t, e, S, f, i, o)),
            (() => {
              if (!c || !r) return null;
              const t = r.feature && e.state[r.feature].valueOr(!1) ? r.confirmDisable : r.confirmEnable;
              return t
                ? (0, y.tZ)(
                    sm.Z,
                    {
                      isOpen: !0,
                      title: t.title,
                      labelDismiss: t.dismiss,
                      labelConfirm: t.confirm,
                      onDismiss: v,
                      onConfirm: C,
                      onChange: E,
                      isMasterPasswordInvalid: m,
                      ctaIsDisabled: !u,
                      onKeyDown: Z
                    },
                    (0, y.tZ)("p", { className: K_.confirmationContent }, t.helper1),
                    (0, y.tZ)("p", { className: K_.confirmationContent }, t.helper2),
                    (0, y.tZ)("p", { className: K_.confirmationContent }, t.label)
                  )
                : null;
            })()
          )
        );
      };
      var Dm = a(164718);
      const Mm = "_common_generic_error",
        Im = a(894017),
        Am = "team_settings_too_many_requests",
        wm = "team_settings_enable_space_restrictions_save_error_msg_generic_error",
        km = "team_settings_lock_on_exit_save_error_msg_generic_error",
        Om = 255,
        Lm = (e, t) => ({
          type: "switch",
          label: t("team_settings_allow_sharing"),
          helperLabel: t("team_settings_allow_sharing_helper"),
          value: e.state.allowSharing,
          feature: "allowSharing",
          getErrorMessageForKey: (e) => t("too_many_requests" === e ? Am : "team_settings_allow_sharing_save_error_msg_generic_error"),
          constraintsFromOtherFields: { requiredFor: [{ feature: "restrictSharingToTeam" }] }
        }),
        zm = (e, t, a, s) => {
          const r = [],
            {
              accountSubscriptionCode: l,
              shouldShowBuyPaywall: c,
              shouldShowUpgradePaywall: u,
              isRestrictSharingToTeamFeatureEnabled: m
            } = s;
          r.push(
            ...(() => {
              const { translate: e } = (0, p.Z)(),
                {
                  inviteLinkDataForAdmin: t,
                  getInviteLinkDataForAdmin: a,
                  inviteLinkDataLoading: s,
                  createInviteLink: i,
                  toggleInviteLink: o
                } = (0, Gc.h)(),
                { teamInfo: r } = (0, _.G)();
              return (
                (0, n.useEffect)(() => {
                  a();
                }, [a]),
                [
                  { type: "header", label: e("team_settings_header_user_access") },
                  {
                    type: "switch",
                    isLoading: s,
                    label: e("team_settings_enable_invite_link_label"),
                    feature: "inviteLink",
                    helperLabel: (0, y.tZ)(
                      n.Fragment,
                      null,
                      e("team_settings_disable_enable_invite_link_helper"),
                      !1 === t?.disabled
                        ? (0, y.tZ)(
                            d.Ejs,
                            { flexDirection: "row", flexWrap: "nowrap", alignItems: "center", gap: "8px", sx: { marginTop: "12px" } },
                            (0, y.tZ)(Eu.q, {
                              mood: "neutral",
                              intensity: "supershy",
                              iconProps: { color: "ds.text.neutral.standard" },
                              copyValue: (0, oe.cI)(t.teamKey)
                            }),
                            (0, y.tZ)(d.nvN, { bold: !0, size: "x-small", sx: { textDecoration: "underline" } }, (0, oe.cI)(t.teamKey))
                          )
                        : null
                    ),
                    value: Ja.Maybe.maybe(!1 === t?.disabled),
                    customSwitchHandler: async (n) => {
                      const s = r?.teamInfo?.name,
                        l = t?.teamKey;
                      if (l) {
                        if (!(await o(n.valueOr(!0)))) throw Error(e(Mm));
                      } else if (!(await i(null != s ? s : ""))) throw Error(e(Mm));
                      if (!(await a())) throw Error(e(Mm));
                    }
                  }
                ]
              );
            })()
          );
          const g = e.state.enablePersonalSpace.valueOr(!0);
          if (
            (g &&
              r.push(
                ...((e, t) => {
                  const a = [];
                  return (
                    a.push(
                      { type: "header", label: t("team_settings_header_team_space_options") },
                      {
                        type: "text",
                        multiLine: !0,
                        label: t("team_settings_team_domain"),
                        helperLabel: t("team_settings_team_domain_helper"),
                        hintText: t("team_settings_team_domain_placeholder"),
                        feature: "teamDomain",
                        value: e.state.teamDomain,
                        serializer: (e) =>
                          e
                            ? e
                                .split(";")
                                .map((e) => e.trim().toLowerCase())
                                .filter((e) => Boolean(e.length))
                            : [],
                        deserializer: (e) => e.map((e) => (e.length ? e.join(";") : "")),
                        validator: (e) => (e.some((e) => !Im.isFQDN(e)) ? "wrong_url" : e.some((e) => e.length > Om) ? "wrong_size" : null),
                        getErrorMessageForKey: (e) => {
                          switch (e) {
                            case "wrong_size":
                              return t("team_settings_team_domain_save_error_msg_wrong_size", { lengthLimit: Om });
                            case "wrong_url":
                              return t("team_settings_team_domain_save_error_msg_wrong_url");
                            case "too_many_requests":
                              return t(Am);
                            default:
                              return t("team_settings_team_domain_save_error_msg_generic_error");
                          }
                        }
                      }
                    ),
                    a.push({
                      type: "switch",
                      label: t("team_settings_enable_space_restrictions"),
                      helperLabel: t("team_settings_enable_space_restrictions_helper"),
                      value: e.state.enableForcedDomains,
                      feature: "enableForcedDomains",
                      getErrorMessageForKey: (e) => t("too_many_requests" === e ? Am : wm),
                      constraintsFromOtherFields: {
                        disabledWhen: [
                          {
                            feature: "teamDomain",
                            condition: "not_defined",
                            warningMessage: t("team_settings_enable_space_restrictions_define_team_domain_first")
                          }
                        ],
                        requiredFor: [{ feature: "enableRemoveForcedContent" }]
                      }
                    }),
                    a.push({
                      type: "switch",
                      label: t("team_settings_remove_forced_content"),
                      helperLabel: t("team_settings_remove_forced_content_helper"),
                      value: e.state.enableRemoveForcedContent,
                      feature: "enableRemoveForcedContent",
                      getErrorMessageForKey: (e) => t("too_many_requests" === e ? Am : wm),
                      constraintsFromOtherFields: {
                        disabledWhen: [
                          {
                            feature: "teamDomain",
                            condition: "not_defined",
                            warningMessage: t("team_settings_remove_forced_content_define_team_domain_first")
                          },
                          {
                            feature: "enableForcedDomains",
                            condition: "is_disabled",
                            warningMessage: t("team_settings_remove_forced_content_enable_forced_domains_first")
                          }
                        ]
                      }
                    }),
                    a
                  );
                })(e, t)
              ),
            r.push(
              { type: "header", label: t("team_settings_header_browser_settings") },
              {
                type: "text",
                multiLine: !0,
                label: t("team_settings_disable_auto_login_domains"),
                helperLabel: t("team_settings_disable_auto_login_domains_helper"),
                hintText: t("team_settings_disable_auto_login_domains_placeholder"),
                value: e.state.disableAutoLoginDomains,
                serializer: (e) => (e.length ? e.split(";") : []).filter((e) => !!e.length).map((e) => e.trim()),
                deserializer: (e) => e.map((e) => e.join(";")),
                validator: (e) =>
                  e.some((e) => !new Dm.Y(e).isUrlValid()) ? "wrong_url" : e.some((e) => e.length > Om) ? "wrong_size" : null,
                feature: "disableAutoLoginDomains",
                getErrorMessageForKey: (e) => {
                  switch (e) {
                    case "wrong_size":
                      return t("team_settings_disable_auto_login_domains_save_error_msg_wrong_size", { lengthLimit: Om });
                    case "wrong_url":
                      return t("team_settings_disable_auto_login_domains_save_error_msg_" + e);
                    case "too_many_requests":
                      return t(Am);
                    default:
                      return t("team_settings_disable_auto_login_domains_save_error_msg_generic_error");
                  }
                }
              }
            ),
            m)
          ) {
            const a =
                "button:buy_dashlane+click_origin:restrict_sharing_to_team_activation_setting+origin_page:tac/settings/policies+origin_component:main_app",
              n = `${oe.ub}?plan=business\n    }&subCode=${l}&utm_source=${a}`,
              s = () =>
                (0, j.Kz)(new o.UserClickEvent({ button: o.Button.SeeB2bPlanTiers, clickOrigin: o.ClickOrigin.TacSettingsPolicies }));
            let d, _;
            c
              ? ((d = () => {
                  s(), (0, z.Yo)(n);
                }),
                (_ = t("team_settings_buy_dashlane_cta")))
              : u &&
                ((d = () => {
                  s(), (0, i.uX)(`${e.routes.teamAccountChangePlanRoutePath}`);
                }),
                (_ = t("team_settings_see_plans_cta"))),
              r.push({ type: "header", label: t("team_setting_header_sharing") }, Lm(e, t), {
                type: c || u ? "cta" : "switch",
                badgeIconName: c || u ? "PremiumOutlined" : void 0,
                badgeLabel: t("team_settings_available_in_business_plan"),
                ctaAction: d,
                ctaLabel: _,
                label: t("team_settings_restrict_sharing_to_team_title"),
                helperLabel: t("team_settings_restrict_sharing_to_team_description"),
                value: e.state.restrictSharingToTeam,
                feature: "restrictSharingToTeam",
                getErrorMessageForKey: (e) => t("too_many_requests" === e ? Am : "team_settings_restrict_sharing_to_team_generic_error"),
                constraintsFromOtherFields: {
                  disabledWhen: [
                    {
                      feature: "allowSharing",
                      condition: "is_disabled",
                      warningMessage: t("team_settings_restrict_sharing_to_team_enable_sharing_first")
                    }
                  ]
                }
              });
          }
          return (
            r.push({ type: "header", label: t("team_settings_header_security") }),
            g ||
              r.push({
                type: "switch",
                label: t("team_settings_allow_export"),
                helperLabel: t("team_settings_allow_export_helper"),
                value: e.state.vaultExportEnabled,
                feature: "vaultExportEnabled",
                getErrorMessageForKey: (e) => t("too_many_requests" === e ? Am : "_common_generic_error")
              }),
            r.push({
              type: "select",
              label: t("team_settings_force_auto_logout_after"),
              helperLabel: t("team_settings_force_auto_logout_after_helper"),
              value: e.state.forceAutomaticLogout,
              feature: "forceAutomaticLogout",
              options: ["unset", "15", "30", "60"].map((e) => ({ label: t("team_settings_force_auto_logout_after_" + e), value: e })),
              getErrorMessageForKey: (e) =>
                t("too_many_requests" === e ? Am : "team_settings_force_auto_logout_after_save_error_msg_generic_error")
            }),
            r.push({
              type: "switch",
              label: t("team_settings_lock_on_exit"),
              helperLabel: t("team_settings_lock_on_exit_helper"),
              value: e.state.lockOnExit,
              feature: "lockOnExit",
              getErrorMessageForKey: (e) => t("too_many_requests" === e ? Am : km)
            }),
            r.push({
              type: "switch",
              label: t("team_settings_collect_sensitive_data_audit_logs_enabled"),
              helperLabel: t(
                g
                  ? "team_settings_collect_sensitive_data_audit_logs_enabled_helper"
                  : "team_settings_collect_sensitive_data_audit_logs_enabled_helper_without_space"
              ),
              value: e.state.collectSensitiveDataAuditLogsEnabled,
              feature: "collectSensitiveDataAuditLogsEnabled",
              getErrorMessageForKey: (e) => t("too_many_requests" === e ? Am : km)
            }),
            r.push({
              type: "select",
              label: t("team_settings_force_crypto_payload_label"),
              helperLabel: t("team_settings_force_crypto_payload_helper"),
              value: e.state.cryptoForcedPayload,
              feature: "cryptoForcedPayload",
              options: [
                { label: t("team_settings_force_crypto_payload_option_disabled"), value: "" },
                { label: t("team_settings_force_crypto_payload_option_argon2"), value: "$1$argon2d$16$3$32768$2$aes256$cbchmac$16$" },
                {
                  label: t("team_settings_force_crypto_payload_option_pbkdf2_advanced"),
                  value: "$1$pbkdf2$16$200000$sha256$aes256$cbchmac$16$"
                },
                { label: t("team_settings_force_crypto_payload_option_pbkdf2_standard"), value: "KWC3", disabled: !0 }
              ],
              getErrorMessageForKey: (e) =>
                t("too_many_requests" === e ? Am : "team_settings_force_crypto_payload_save_error_msg_generic_error")
            }),
            m || r.push(Lm(e, t)),
            r.push(
              ((e, t, a) => {
                const { shouldShowBuyOrUpgradePaywall: n, isTrialOrGracePeriod: s, accountSubscriptionCode: r, planType: l } = t,
                  c = n && s,
                  d = n && "starter" === l,
                  u = `${oe.ub}?plan=${
                    l === Se.lD.Team ? "team" : "business"
                  }&subCode=${r}&utm_source=button:buy_dashlane+click_origin:vpn_feature_activation_setting+origin_page:tac/settings/policies+origin_component:main_app`;
                let _, m, p;
                return (
                  c
                    ? ((_ = a("team_settings_available_in_paid_subscription_badge")),
                      (m = () => {
                        (0, j.Kz)(
                          new o.UserClickEvent({ button: o.Button.BuyDashlane, clickOrigin: o.ClickOrigin.VpnFeatureActivationSetting })
                        ),
                          (0, z.Yo)(u);
                      }),
                      (p = a("team_settings_buy_dashlane_cta")))
                    : d &&
                      ((_ = a("team_settings_upgrade_badge")),
                      (m = () => {
                        (0, j.Kz)(
                          new o.UserClickEvent({ button: o.Button.SeePlan, clickOrigin: o.ClickOrigin.VpnFeatureActivationSetting })
                        ),
                          (0, i.uX)(`${e.routes.teamAccountChangePlanRoutePath}`);
                      }),
                      (p = a("team_settings_see_plans_cta"))),
                  {
                    type: d || c ? "cta" : "switch",
                    badgeIconName: d || c ? "PremiumOutlined" : void 0,
                    badgeLabel: _,
                    ctaAction: m,
                    ctaLabel: p,
                    label: a("team_settings_vpn"),
                    helperLabel: a("team_settings_vpn_helper"),
                    value: e.state.enableVPN,
                    feature: "enableVPN",
                    getErrorMessageForKey: (e) => {
                      switch (e) {
                        case "too_many_requests":
                          return a("team_settings_too_many_requests");
                        case "not_authorized":
                          return a("team_settings_vpn_disabled_for_free_trial");
                        default:
                          return a("team_settings_vpn_save_error_msg_generic_error");
                      }
                    }
                  }
                );
              })(e, a, t)
            ),
            r.push({
              type: "switch",
              label: t("team_settings_enforce_2fa"),
              helperLabel: t("team_settings_enforce_2fa_helper"),
              infoBoxTitle: t("team_settings_generate_recovery_codes_infobox_title"),
              infoBoxDescription: t.markup("team_settings_generate_recovery_codes_infobox_description_markup"),
              value: e.state.enforce2FA,
              feature: "enforce2FA",
              confirmEnable: {
                title: t("team_settings_enforce_2fa_confirm_enable_title"),
                label: t("team_settings_enforce_2fa_confirm_enable_helper2"),
                dismiss: t("team_settings_enforce_2fa_confirm_enable_dismiss"),
                confirm: t("team_settings_enforce_2fa_confirm_enable_confirm")
              },
              getErrorMessageForKey: (e) => t("too_many_requests" === e ? Am : "team_settings_enforce_2fa_save_error_msg_generic_error")
            }),
            r
          );
        };
      var Rm,
        jm = a(622880),
        Pm = a(533258),
        Um = a(460384),
        Bm = a(287279);
      const Gm = new Map([
          ["business", o.B2bPlanTier.Business],
          ["team", o.B2bPlanTier.Team],
          ["legacy", o.B2bPlanTier.Legacy],
          ["entreprise", o.B2bPlanTier.Business]
        ]),
        Fm = ({
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
          (0, j.Kz)(
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
        qm = (e) => (e && Gm.get(e)) || o.B2bPlanTier.Business,
        Vm = (e) => {
          Fm({ ...e, currentBillingPlanTier: qm(e.currentBillingPlanTier), ssoSolutionChosen: o.SsoSolutionChosen.SelfHostedSso });
        },
        $m = (e) => {
          Fm({ ...e, currentBillingPlanTier: qm(e.currentBillingPlanTier), ssoSolutionChosen: o.SsoSolutionChosen.NitroSso });
        };
      var Wm = a(605961),
        Hm = a.n(Wm),
        Km = a(968074);
      const Ym = (e) => {
          const { markdownValue: t = "", linkParams: a = {}, linkProps: s } = e,
            { linkTarget: i, onLinkClicked: o = () => {} } = a,
            r = t.includes("\n");
          return n.createElement(Hm(), {
            source: t,
            allowedTypes: ["Text", "Link", "Emph", "Strong", "Paragraph", "Softbreak", "List", "Item", "Code"],
            containerTagName: "span",
            softBreak: "br",
            renderers: {
              Paragraph: r ? "p" : "span",
              Link: function (e) {
                return n.createElement(
                  Km.Z,
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
        Qm = ({ onClose: e, onConfirm: t, titleText: a, bodyText: s }) => {
          const { translate: i } = (0, p.Z)(),
            [o, r] = (0, n.useState)(!1),
            [l, c] = (0, n.useState)(null),
            u = i("_common_action_cancel");
          return (0, y.tZ)(
            d.VqE,
            { isOpen: !0, disableOutsideClickClose: !0, disableScrolling: !0, closeIconName: u, onClose: e },
            (0, y.tZ)(d.$N8, { title: a }),
            (0, y.tZ)(
              d.a7O,
              null,
              (0, y.tZ)(d.nvN, { color: l ? "ds.text.danger.standard" : "ds.text.neutral.standard" }, null != l ? l : s)
            ),
            (0, y.tZ)(
              d.cNS,
              null,
              (0, y.tZ)(
                y.zx,
                {
                  sx: { mr: "12px" },
                  mood: "neutral",
                  intensity: "quiet",
                  onClick: () => {
                    e();
                  },
                  disabled: o
                },
                u
              ),
              (0, y.tZ)(
                y.zx,
                {
                  mood: "brand",
                  intensity: "catchy",
                  onClick: async () => {
                    r(!0), c(null);
                    try {
                      await t(), r(!1), e();
                    } catch (e) {
                      c(e instanceof Error ? e.message : i("_common_generic_error")), r(!1);
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
      let Xm = (function (e) {
        return (e.ChooseSso = "ChooseSso"), (e.SelfHosted = "SelfHosted"), (e.Nitro = "Nitro"), e;
      })({});
      const Jm = ({ pageContext: e, onSetupClear: t }) => {
        const { routes: a } = (0, i.Xo)(),
          s = (0, O.B)(),
          { translate: r } = (0, p.Z)(),
          [l, c] = (0, n.useState)(!1),
          { teamId: d } = (0, zo.fV)(),
          { clearSettings: u, initSsoProvisioning: _ } = (0, Fe.u)(Um.y),
          { status: m, data: g } = (0, qe.k)(Um.y, "ssoProvisioning");
        if (m !== je.rq.Success || g.enableSSO.ssoEnabled) return null;
        const {
          global: { inferredSsoState: b, ssoCapable: h }
        } = g;
        if (!1 === h)
          return (0, y.tZ)(y.ke, {
            mood: "neutral",
            size: "large",
            title: r("team_settings_es_sso_plan_error_header"),
            description: r("team_settings_es_sso_plan_missing_body"),
            actions: s?.premiumStatus
              ? [
                  (0, k.wt)(s.premiumStatus)
                    ? (0, y.tZ)(
                        y.zx,
                        {
                          key: "buy",
                          onClick: () => {
                            (0, j.Kz)(new o.UserClickEvent({ button: o.Button.BuyDashlane, clickOrigin: o.ClickOrigin.SsoPaywallBanner })),
                              (0, z.Yo)(`${oe.ub}?plan=business&subCode=${s?.subscriptionCode}`);
                          },
                          role: "link"
                        },
                        r("team_account_teamplan_plan_buy_dashlane")
                      )
                    : (0, y.tZ)(
                        i.rU,
                        { key: "upgrade", to: `${a.teamAccountChangePlanRoutePath}?plan=business` },
                        (0, y.tZ)(y.zx, null, r("team_settings_es_sso_plan_missing_button"))
                      )
                ]
              : []
          });
        const x = [Pm.s5.enum.NitroIncomplete, Pm.s5.enum.SelfHostedIncomplete];
        if (e !== Xm.ChooseSso && x.includes(b)) {
          let a = null,
            s = async () => {
              await t?.(), Vm({ ssoSetupStep: o.SsoSetupStep.ClearSsoSettings });
            };
          e === Xm.SelfHosted && b === Pm.s5.enum.NitroIncomplete
            ? ((a = {
                title: "To use self-hosted SSO, clear Confidential SSO setup",
                description:
                  "If you want to use self-hosted SSO, which supports SCIM provisioning, select **Clear setup** to erase your progress in Dashlane. Make sure to also delete your progress in your IdP.",
                cta: "Clear setup"
              }),
              (s = async () => {
                await u(), await _({ teamId: `${d}` }), await t?.();
              }))
            : e === Xm.Nitro &&
              b === Pm.s5.enum.SelfHostedIncomplete &&
              ((a = {
                title: "To use Confidential SSO, clear self-hosted SSO setup",
                description:
                  "If you want to use Confidential SSO, select **Clear setup** to erase your progress in Dashlane. Make sure to also delete your progress in your IdP.",
                cta: "Clear setup"
              }),
              (s = async () => {
                await ea.C.clearSelfHostedESSettings(), await _({ teamId: `${d}` }), await t?.();
              }));
          const i = [Pm.s5.enum.NitroComplete, Pm.s5.enum.SelfHostedComplete];
          if (a && !i.includes(b))
            return (0, y.tZ)(
              n.Fragment,
              null,
              l
                ? (0, y.tZ)(Qm, {
                    onClose: () => c(!1),
                    onConfirm: s,
                    titleText: "Are you sure?",
                    bodyText: "This action can’t be undone."
                  })
                : null,
              (0, y.tZ)(y.ke, {
                mood: "neutral",
                size: "large",
                title: a.title,
                description: (0, y.tZ)(Ym, { markdownValue: a.description }),
                actions: [(0, y.tZ)(y.zx, { key: "clear", onClick: () => c(!0) }, a.cta)]
              })
            );
        }
        return (0, y.tZ)(y.ke, {
          mood: "warning",
          size: "large",
          title: "Switching between SSO options isn't available right now",
          description:
            "We're in the process of adding new capabilities to Confidential SSO. During this period, you can't switch between the two options. Before turning on your chosen SSO option, please make sure it meets your organization's needs."
        });
      };
      var ep,
        tp = a(201428);
      const ap = [
          { li: "In a separate window, log in to your IdP account." },
          {
            li: "Find the section to create a new SSO application.",
            ol: [
              { li: "Add the ID and URLs provided here to your application." },
              { li: "Add members who will log in to Dashlane with SSO to your application." }
            ]
          }
        ],
        np = ({ content: e }) =>
          (0, y.tZ)(
            "ol",
            { sx: { color: "ds.text.neutral.quiet" } },
            e.map(({ li: e, ol: t }, a) =>
              (0, y.tZ)(
                y.nv,
                { key: a, as: "li", textStyle: "ds.body.standard.regular" },
                (0, y.tZ)(Ym, { markdownValue: e }),
                t ? (0, y.tZ)(np, { content: t }) : null
              )
            )
          ),
        sp = () => {
          var e, t, a;
          const { translate: n } = (0, p.Z)(),
            s = (0, qe.k)(Um.y, "ssoProvisioning"),
            i = s.status === je.rq.Loading,
            o = {
              entityId: null != (e = s.data?.idpApplication.entityId) ? e : "",
              acsUrl: null != (t = s.data?.idpApplication.acsUrl) ? t : "",
              signOnUrl: null != (a = s.data?.idpApplication.signOnUrl) ? a : ""
            };
          return (0, y.tZ)(
            "div",
            { sx: { display: "grid", gridTemplateColumns: "auto", gridAutoRows: "auto", gap: "24px", marginBottom: "32px" } },
            (0, y.tZ)(
              "div",
              { sx: { ol: { listStyleType: "decimal", ml: "20px", ol: { listStyleType: "lower-alpha" } } } },
              (0, y.tZ)(
                y.X6,
                { as: "h2", textStyle: "ds.title.section.medium", color: "ds.text.neutral.standard", sx: { mb: "8px" } },
                n("sso_confidential_idp_setup_page_title")
              ),
              ep || (ep = (0, y.tZ)(np, { content: ap }))
            ),
            (0, y.tZ)(y.ke, { mood: "brand", size: "small", title: n("sso_confidential_idp_setup_infobox_message") }),
            (0, y.tZ)(
              "div",
              { sx: { display: "grid", gridTemplateColumns: "auto", gridAutoRows: "auto", gap: "24px" } },
              (0, y.tZ)(tp.x, { isLoading: i, value: o.entityId, label: n("sso_confidential_idp_setup_entity_id_label"), readOnly: !0 }),
              (0, y.tZ)(tp.x, { isLoading: i, value: o.acsUrl, label: n("sso_confidential_idp_setup_acs_url_label"), readOnly: !0 }),
              (0, y.tZ)(tp.x, { isLoading: i, value: o.signOnUrl, label: n("sso_confidential_idp_setup_sign_on_url_label"), readOnly: !0 })
            )
          );
        },
        ip = "sso_confidential_metadata_form_field_placeholder",
        op = "sso_confidential_metadata_form_error_could_not_find_entrypoint",
        rp = "sso_confidential_metadata_form_error_cound_not_validate_certificate",
        lp = "sso_confidential_metadata_form_error_server_error",
        cp = {
          XML_PARSE_FAILED: "sso_confidential_metadata_form_error_could_not_read_metadata",
          KEY_DESCRIPTOR_NOT_FOUND: op,
          IDP_ENTRYPOINT_NOT_FOUND: op,
          INVALID_IDP_SSO_DESCRIPTOR: op,
          MISSING_CERTIFICATE: "sso_confidential_metadata_form_error_no_certificate",
          MULTIPLE_CERTIFICATES: "sso_confidential_metadata_form_error_multiple_certificates",
          INVALID_ENTRYPOINT: "sso_confidential_metadata_form_error_invalid_entrypoint",
          CERTIFICATE_TOO_SHORT: rp,
          CERTIFICATE_TOO_LONG: rp,
          CERTIFICATE_DECODE_FAILED: rp
        },
        dp = {
          INVALID_METADATA_CONTENT: "sso_confidential_metadata_form_error_invalid_metadata_content",
          INVALID_METADATA_URL: "sso_confidential_metadata_form_error_invalid_metadata_url",
          DOMAIN_UPDATE_FAILED: lp,
          SAVE_METADATA_FAILED: lp,
          INTERNAL_ERROR: "sso_confidential_metadata_form_error_internal_error"
        },
        up = "Unexpected server error. Please try again or contact Customer Support.",
        _p = "ssoIdpMetadata",
        mp = () => {
          var e;
          const [t, a] = (0, n.useState)(!1),
            { translate: s } = (0, p.Z)(),
            i = (0, qe.k)(Um.y, "ssoProvisioning"),
            { createTeam: r, validateMetadata: l, updateMetadata: c } = (0, Fe.u)(Um.y),
            d = i.status === je.rq.Loading,
            u = null != (e = i.data?.idpMetadata.metadataValue) ? e : "",
            _ = { ssoIdpMetadata: u },
            m = i.data?.global.inferredSsoState,
            g = [Pm.s5.enum.SelfHostedIncomplete, Pm.s5.enum.SelfHostedComplete].includes(m),
            b = async (e) => {
              var t;
              if (e && !new Dm.Y(e).isUrlValid())
                try {
                  const a = await l({ metadata: e });
                  if (
                    ($m({
                      ssoSetupStep: o.SsoSetupStep.ValidateIdpMetadata,
                      idpValidationResponse:
                        ((t = a),
                        (0, Bm.hx)(t)
                          ? Object.values(o.IdpValidationResponse).includes(t.error.tag)
                            ? t.error.tag
                            : o.IdpValidationResponse.XmlParseFailed
                          : o.IdpValidationResponse.Success)
                    }),
                    (0, Bm.hx)(a))
                  ) {
                    const e = a.error.tag.toUpperCase();
                    return s(e in cp ? cp[e] : cp.XML_PARSE_FAILED);
                  }
                } catch (e) {
                  return e instanceof Error ? e.message : "Unknown error";
                }
            };
          return (0, y.tZ)(
            La.J9,
            {
              initialValues: _,
              onSubmit: async (e, t) => {
                try {
                  a(!0);
                  const n = i.data?.global.isTeamProvisionedInNitro;
                  n || (await r(), $m({ ssoSetupStep: o.SsoSetupStep.CreateSsoApplication })),
                    $m({ ssoSetupStep: o.SsoSetupStep.UpdateIdpSettings });
                  const l = await c({ metadata: "" === e.ssoIdpMetadata ? null : e.ssoIdpMetadata });
                  if ((a(!1), (0, Bm.hx)(l))) {
                    const e = l.error.tag.toUpperCase();
                    return t.setFieldError(_p, s(e in dp ? dp[e] : up));
                  }
                } catch (e) {
                  return t.setFieldError(_p, up);
                }
              },
              enableReinitialize: !0
            },
            ({ isSubmitting: e, isValid: a, isValidating: n, dirty: i }) => {
              const o = g || e || d,
                r = o || !a || n || !i;
              return (0, y.tZ)(
                La.l0,
                { noValidate: !0 },
                (0, y.tZ)(
                  "div",
                  { sx: { display: "grid", gridTemplateColumns: "auto", gridAutoRows: "auto", gap: "8px" } },
                  (0, y.tZ)(
                    y.X6,
                    { as: "h2", textStyle: "ds.title.section.medium", color: "ds.text.neutral.standard" },
                    s("sso_confidential_metadata_form_section_heading")
                  ),
                  (0, y.tZ)(
                    y.nv,
                    { textStyle: "ds.body.standard.regular", color: "ds.text.neutral.standard", sx: { marginBottom: "24px" } },
                    s("sso_confidential_metadata_form_paragraph")
                  ),
                  (0, y.tZ)(La.gN, { name: _p, validateOnChange: !0, validate: b }, ({ field: t, meta: { error: a } }) =>
                    (0, y.tZ)(y.Kx, {
                      required: !0,
                      id: t.name,
                      label: s("sso_confidential_metadata_form_field_label"),
                      placeholder: s(ip),
                      "aria-label": s(ip),
                      autoCorrect: "off",
                      autoComplete: "off",
                      spellCheck: "false",
                      disabled: o,
                      feedback: !a || e || n ? void 0 : { text: a },
                      error: !(!a || e || n),
                      ...t
                    })
                  ),
                  (0, y.tZ)(
                    y.zx,
                    {
                      type: "submit",
                      sx: { mt: "12px", justifySelf: "end" },
                      mood: u ? "neutral" : "brand",
                      intensity: u ? "quiet" : "catchy",
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
        pp = "sso_confidential_enable_nitro_sso_confirm_dialog_cancel",
        gp = ({ title: e, body: t, primaryActionLabel: a, onConfirm: s, onCancel: i }) => {
          const { translate: o } = (0, p.Z)(),
            [r, l] = (0, n.useState)(!1);
          return (0, y.tZ)(
            y.Vq,
            {
              closeActionLabel: o(pp),
              title: e,
              isOpen: !0,
              onClose: i,
              actions: {
                primary: {
                  children: a,
                  onClick: async () => {
                    try {
                      l(!0), await s();
                    } catch {
                      l(!1);
                    }
                  },
                  disabled: r,
                  isLoading: r
                },
                secondary: { children: o(pp), onClick: i, disabled: r }
              }
            },
            t
          );
        },
        yp = () => {
          const { translate: e } = (0, p.Z)(),
            { showAlert: t } = (0, Ra.V)(),
            [a, s] = (0, n.useState)(!1),
            i = (0, qe.k)(Um.y, "ssoProvisioning"),
            { enableSso: r } = (0, Fe.u)(Um.y),
            l = i.data?.domainSetup[0]?.domainName,
            c = l ? i.data?.domainVerificationInfo[l] : null,
            u = c?.verificationStatus !== Pm.X5.enum.valid,
            _ = i.data?.enableSSO.ssoEnabled,
            m = Boolean(u || _);
          return (0, y.tZ)(
            n.Fragment,
            null,
            (0, y.tZ)(
              "div",
              { sx: { display: "grid", gap: "8px" } },
              (0, y.tZ)(
                y.nv,
                { as: "h2", textStyle: "ds.title.section.medium", color: "ds.text.neutral.standard" },
                e("sso_confidential_enable_nitro_sso_section_heading")
              ),
              (0, y.tZ)(
                y.nv,
                {
                  textStyle: "ds.body.standard.regular",
                  color: "ds.text.neutral.standard",
                  sx: { mb: "4px", gridRow: "2", gridColumn: "1/1" }
                },
                e("sso_confidential_enable_nitro_sso_description")
              ),
              (0, y.tZ)(
                "div",
                { sx: { justifySelf: "end" } },
                (0, y.tZ)(
                  y.zx,
                  {
                    id: "enableSso",
                    onClick: () => {
                      s(!0), $m({ ssoSetupStep: o.SsoSetupStep.TurnOnSso });
                    },
                    disabled: m
                  },
                  e("sso_confidential_enable_nitro_sso_button_label")
                )
              )
            ),
            a
              ? (0, y.tZ)(gp, {
                  title: e("sso_confidential_enable_nitro_sso_confirm_dialog_title"),
                  body: e("sso_confidential_enable_nitro_sso_confirm_dialog_body"),
                  primaryActionLabel: e("sso_confidential_enable_nitro_sso_confirm_dialog_primary_action_label"),
                  onConfirm: async () => {
                    await (async () => {
                      const a = await r();
                      (0, Bm.d6)(a)
                        ? t(e("sso_confidential_enable_nitro_sso_success_feedback"), d.BLW.SUCCESS)
                        : t(a.error.tag, d.BLW.ERROR);
                    })(),
                      $m({ ssoSetupStep: o.SsoSetupStep.CompleteSsoSetup }),
                      s(!1);
                  },
                  onCancel: () => {
                    s(!1);
                  }
                })
              : null
          );
        },
        bp = () => {
          var e;
          const { translate: t } = (0, p.Z)(),
            [a, s] = (0, n.useState)(!1),
            [i, r] = (0, n.useState)(!1),
            [l, c] = (0, n.useState)(!1),
            { testLoginUserWithEnclaveSSO: u } = (0, Fe.u)(Um.y),
            _ = (0, qe.k)(Um.y, "ssoProvisioning"),
            m = null != (e = _.data?.domainSetup[0]?.domainName) ? e : "",
            g = _.data?.domainVerificationInfo[m]?.verificationStatus !== Pm.X5.enum?.valid || !1;
          return (0, y.tZ)(
            "div",
            { sx: { display: "grid", gridTemplateColumns: "auto", gridAutoRows: "auto", gap: "8px" } },
            (0, y.tZ)(
              "div",
              null,
              (0, y.tZ)(
                y.X6,
                { as: "h2", textStyle: "ds.title.section.medium", color: "ds.text.neutral.standard", sx: { mb: "8px" } },
                t("sso_confidential_test_nitro_sso_section_heading")
              ),
              (0, y.tZ)(
                y.nv,
                { textStyle: "ds.body.standard.regular", color: "ds.text.neutral.standard" },
                t("sso_confidential_test_nitro_sso_description")
              )
            ),
            (0, y.tZ)(
              "div",
              { sx: { justifySelf: "end", gridColumn: "2" } },
              (0, y.tZ)(
                Kd.M,
                {
                  disabled: g,
                  onClick: async () => {
                    s(!0);
                    try {
                      const e = await u({ domainName: m }),
                        t = (0, Bm.d6)(e);
                      $m({
                        ssoSetupStep: o.SsoSetupStep.TestSsoConnection,
                        testSsoResponse: t ? o.TestSsoResponse.Success : o.TestSsoResponse.Failure
                      }),
                        r(t),
                        c(!t);
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
              ? (0, y.tZ)(
                  "div",
                  { sx: { gridColumn: "1/span 2" } },
                  (0, y.tZ)(
                    d.bZj,
                    {
                      showIcon: !0,
                      size: d.k3y.SMALL,
                      severity: d.BLW.SUCCESS,
                      onClose: () => {
                        r(!1);
                      },
                      closeIconName: "Close"
                    },
                    t("sso_confidential_test_nitro_sso_success_feedback")
                  )
                )
              : null,
            l
              ? (0, y.tZ)(
                  "div",
                  { sx: { gridColumn: "1/span 2" } },
                  (0, y.tZ)(
                    d.bZj,
                    {
                      showIcon: !0,
                      size: d.k3y.SMALL,
                      severity: d.BLW.ERROR,
                      onClose: () => {
                        c(!1);
                      },
                      closeIconName: "Close"
                    },
                    t("sso_confidential_test_nitro_sso_error_feedback")
                  )
                )
              : null
          );
        },
        hp = ({ domainName: e, showModal: t, onClose: a }) => {
          var s, i;
          const { translate: o } = (0, p.Z)(),
            r = (0, qe.k)(Um.y, "ssoProvisioning"),
            { checkDNSValidation: l } = (0, Fe.u)(Um.y),
            [c, d] = (0, n.useState)(!1);
          if (r.status !== je.rq.Success) return null;
          const u = e ? r.data.domainVerificationInfo[e] : void 0;
          if (!u) return null;
          let _ = o("sso_confidential_verify_domain_modal_verify_domain_button");
          return (
            "valid" === u.verificationStatus
              ? (_ = o("sso_confidential_verify_domain_modal_verify_domain_button_close"))
              : (("pending" === u.verificationStatus && u.pendingReason) || "invalid" === u.verificationStatus) &&
                (_ = o("sso_confidential_verify_domain_modal_verify_domain_button_retry")),
            (0, y.tZ)(
              y.Vq,
              {
                closeActionLabel: o("_common_dialog_dismiss_button"),
                title: o("sso_confidential_verify_domain_modal_title", { domainName: e }),
                isOpen: t,
                onClose: a,
                actions: {
                  primary: {
                    children: _,
                    onClick:
                      "valid" === u.verificationStatus
                        ? a
                        : async () => {
                            d(!0);
                            try {
                              await l({ domainName: e });
                            } finally {
                              d(!1), a();
                            }
                          },
                    isLoading: c
                  }
                }
              },
              (0, y.tZ)(
                "ol",
                { sx: { listStyleType: "decimal", ml: "20px" } },
                (0, y.tZ)(
                  y.nv,
                  { as: "li", textStyle: "ds.body.standard.regular", color: "ds.text.neutral.standard" },
                  o("sso_confidential_verify_domain_modal_instruction_1")
                ),
                (0, y.tZ)(
                  y.nv,
                  { as: "li", textStyle: "ds.body.standard.regular", color: "ds.text.neutral.standard" },
                  o("sso_confidential_verify_domain_modal_instruction_2")
                ),
                (0, y.tZ)(
                  y.nv,
                  { as: "li", textStyle: "ds.body.standard.regular", color: "ds.text.neutral.standard" },
                  o("sso_confidential_verify_domain_modal_instruction_3")
                )
              ),
              (0, y.tZ)(y.ke, { title: o("sso_confidential_verify_domain_modal_infobox_title"), mood: "brand" }),
              (0, y.tZ)(tp.x, {
                label: o("sso_confidential_verify_domain_modal_subdomain_label"),
                value: null != (s = u.subdomainValue) ? s : "",
                readOnly: !0
              }),
              (0, y.tZ)(tp.x, {
                label: o("sso_confidential_verify_domain_modal_txt_label"),
                value: null != (i = u.txtValue) ? i : "",
                readOnly: !0
              }),
              u.verificationStatus === Pm.X5.enum.pending && u.pendingReason === Pm.Q8.enum.invalidToken
                ? (0, y.tZ)(y.ke, {
                    title: o("sso_confidential_verify_domain_modal_error_infobox_title_invalid_token"),
                    description: u.tokenFound,
                    mood: "danger",
                    size: "medium"
                  })
                : null,
              u.verificationStatus === Pm.X5.enum.pending && u.pendingReason === Pm.Q8.enum.tokenNotFound
                ? (0, y.tZ)(y.ke, {
                    title: o("sso_confidential_verify_domain_modal_error_infobox_title_token_not_found"),
                    description: o("sso_confidential_verify_domain_modal_error_infobox_description_token_not_found"),
                    mood: "danger",
                    size: "medium"
                  })
                : null,
              u.verificationStatus === Pm.X5.enum.invalid
                ? (0, y.tZ)(y.ke, {
                    title: o("sso_confidential_verify_domain_modal_error_infobox_title_generic_error"),
                    mood: "danger",
                    size: "medium"
                  })
                : null
            )
          );
        };
      var xp,
        Sp = a(198187),
        vp = a(87065),
        fp = a(52273);
      const Cp = () => {
        const { translate: e } = (0, p.Z)(),
          [t, a] = (0, n.useState)(!1),
          {
            data: s,
            editTeamPolicies: i,
            status: o
          } = (() => {
            const { data: e, status: t } = (0, qe.k)(Tn.o, "getTeamId"),
              { data: a, status: n } = (0, qe.k)(Tn.o, "getTeamPolicies"),
              { editTeamPolicies: s } = (0, Fe.u)(Tn.o);
            return n === je.rq.Error || t === je.rq.Error
              ? { status: je.rq.Error }
              : n === je.rq.Loading || t === je.rq.Loading
              ? { status: je.rq.Loading }
              : {
                  status: je.rq.Success,
                  data: { teamPolicies: a },
                  editTeamPolicies: (t) => s({ teamId: Number(e.teamId), policyUpdates: t })
                };
          })(),
          r = (0, qe.k)(Um.y, "ssoProvisioning");
        return (
          (0, n.useEffect)(() => {
            var e;
            r.status === je.rq.Success &&
              a((null != (e = r.data?.domainSetup) ? e : []).some((e) => e.verificationStatus === Pm.X5.enum.valid));
          }, [r]),
          (0, y.tZ)(
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
            (0, y.tZ)(
              y.X6,
              { as: "h3", textStyle: "ds.title.supporting.small", color: "ds.text.neutral.quiet" },
              e("jit_provisioning_cat_title"),
              " "
            ),
            " ",
            (0, y.tZ)(
              "div",
              { sx: { display: "flex", flexDirection: "row", gap: "16px" } },
              (0, y.tZ)(
                "div",
                { sx: { display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "8px" } },
                (0, y.tZ)(
                  y.X6,
                  { as: "h2", textStyle: "ds.title.block.medium", color: "ds.text.neutral.catchy" },
                  e("jit_provisioning_title")
                ),
                (0, y.tZ)(
                  y.nv,
                  { textStyle: "ds.body.standard.regular", color: "ds.text.neutral.standard" },
                  e("jit_provisioning_description")
                )
              ),
              (0, y.tZ)(
                "div",
                null,
                o === je.rq.Loading
                  ? xp || (xp = (0, y.tZ)(y.ZX, { mood: "brand" }))
                  : (0, y.tZ)(y.ZD, {
                      disabled: !t,
                      onChange: (e) => {
                        e.preventDefault(), o === je.rq.Success && i?.({ ssoProvisioning: e.target.checked });
                      },
                      defaultChecked: !!s?.teamPolicies.ssoProvisioning
                    })
              )
            )
          )
        );
      };
      var Ep, Zp, Tp;
      const Np = "sso_confidential_verify_domain_step_domain_input_label",
        Dp = "sso_confidential_verify_domain_step_domain_input_button_view_details",
        Mp = { valid: 3, pending: 2, expired: 1, invalid: 0 },
        Ip = ({ status: e, ssoActive: t }) => {
          const { translate: a } = (0, p.Z)();
          let n, s, i;
          switch (e) {
            case Pm.X5.enum.valid:
              (n = a(
                t ? "sso_confidential_verify_domain_step_sso_status_active" : "sso_confidential_verify_domain_step_sso_status_verified"
              )),
                (i = t ? "catchy" : "quiet"),
                (s = "positive");
              break;
            case Pm.X5.enum.expired:
            case Pm.X5.enum.invalid:
              (n = a("sso_confidential_verify_domain_step_sso_status_error")), (s = "danger"), (i = "quiet");
              break;
            case Pm.X5.enum.pending:
            default:
              (n = a("sso_confidential_verify_domain_step_sso_status_unverified")), (i = "quiet"), (s = "neutral");
          }
          return (0, y.tZ)(y.Ct, { mood: s, intensity: i, label: n });
        },
        Ap = ({ domainName: e, ssoActive: t, onModalOpen: a, onDeleteDomain: s, onTextInputChange: i, disabled: o, duplicate: r }) => {
          var l;
          const { translate: c } = (0, p.Z)(),
            { provisionDomain: u, deleteDomain: _ } = (0, Fe.u)(Um.y),
            m = (0, qe.k)(Um.y, "ssoProvisioning"),
            [g, b] = (0, n.useState)(!1),
            h = (0, n.useMemo)(() => new Sp.x(), []),
            x = (0, n.useCallback)(i, [i]),
            S = r ? void 0 : m.data?.domainVerificationInfo[e];
          return (
            (0, n.useEffect)(() => {
              h.asObservable()
                .pipe(
                  (0, vp.U)((e) => e.currentTarget.value),
                  (0, fp.b)(200)
                )
                .subscribe((e) => {
                  e && x(e);
                });
            }, [h, x]),
            (0, y.tZ)(
              n.Fragment,
              null,
              (0, y.tZ)(
                d.dDn,
                { sx: { display: "flex", alignItems: "center" } },
                (0, y.tZ)(Ip, {
                  status: S?.pendingReason || r ? "invalid" : null != (l = S?.verificationStatus) ? l : null,
                  ssoActive: t && !r
                })
              ),
              (0, y.tZ)(
                d.dDn,
                null,
                (0, y.tZ)(y.qo, {
                  label: c(Np),
                  placeholder: c(Np),
                  labelPersists: !1,
                  autoCorrect: "off",
                  autoComplete: "off",
                  disabled: o,
                  hasClearAction: S?.verificationStatus !== Pm.X5.enum.valid,
                  readOnly: S?.verificationStatus === Pm.X5.enum.valid,
                  onChange: (e) => h.next(e),
                  value: e,
                  sx: { width: "400px" },
                  error:
                    S?.verificationStatus === Pm.X5.enum.invalid ||
                    (S?.verificationStatus === Pm.X5.enum.pending && !!S?.pendingReason) ||
                    r,
                  feedback: r
                    ? { text: c("sso_confidential_verify_domain_error_domain_already_provisioned") }
                    : S?.verificationStatus === Pm.X5.enum.valid && t
                    ? { text: c("sso_confidential_verify_domain_step_domain_input_feedback_sso_active") }
                    : S?.verificationStatus === Pm.X5.enum.pending && S?.pendingReason === Pm.Q8.enum.invalidToken
                    ? { text: c("sso_confidential_verify_domain_step_domain_input_feedback_sso_error_invalid_token") }
                    : S?.verificationStatus === Pm.X5.enum.pending && S?.pendingReason === Pm.Q8.enum.tokenNotFound
                    ? { text: c("sso_confidential_verify_domain_step_domain_input_feedback_sso_error_token_not_found") }
                    : S?.verificationStatus === Pm.X5.enum.invalid
                    ? { text: c("sso_confidential_verify_domain_step_domain_input_feedback_sso_error_generic") }
                    : void 0
                })
              ),
              S?.verificationStatus === Pm.X5.enum.valid && t && !r
                ? (0, y.tZ)(
                    d.dDn,
                    { justifySelf: "end", alignSelf: "center", gridColumnStart: "3", gridColumnEnd: "5" },
                    (0, y.tZ)(y.zx, { mood: "neutral", intensity: "quiet", onClick: a, disabled: o || r }, c(Dp))
                  )
                : S?.verificationStatus === Pm.X5.enum.valid
                ? (0, y.tZ)(
                    d.dDn,
                    { justifySelf: "end", alignSelf: "center" },
                    (0, y.tZ)(y.zx, { mood: "neutral", intensity: "quiet", onClick: a, disabled: o || r }, c(Dp))
                  )
                : (0, y.tZ)(
                    d.dDn,
                    { justifySelf: "end", alignSelf: "center" },
                    (0, y.tZ)(
                      y.zx,
                      {
                        mood: "brand",
                        intensity: "quiet",
                        disabled: !e || o || r,
                        isLoading: g,
                        onClick: async () => {
                          S || (b(!0), await u({ domainName: e }), b(!1)), a();
                        },
                        sx: { position: "relative" }
                      },
                      c("sso_confidential_verify_domain_step_domain_input_button_verify")
                    )
                  ),
              S?.verificationStatus === Pm.X5.enum.valid && t
                ? null
                : (0, y.tZ)(
                    d.dDn,
                    { justifySelf: "end", alignSelf: "center", sx: { display: "flex", alignItems: "center" } },
                    (0, y.tZ)(y.zx, {
                      mood: "danger",
                      intensity: "supershy",
                      layout: "iconOnly",
                      icon: Ep || (Ep = (0, y.tZ)(y.JO, { name: "ActionDeleteOutlined" })),
                      isLoading: g,
                      onClick: async () => {
                        if (S && !r) {
                          b(!0);
                          try {
                            await _({ domainName: e }), s();
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
        wp = () => {
          var e, t, a;
          const { translate: s } = (0, p.Z)(),
            [i, o] = (0, n.useState)([]),
            [r, l] = (0, n.useState)(null),
            { spaceDetails: c } = (0, zo.fV)(),
            u = (0, qe.k)(Um.y, "ssoProvisioning"),
            _ = (0, ve.o)("setup_rollout_sso_jit_setting"),
            [, m] = null != (e = c?.associatedEmail.split("@")) ? e : ["", ""],
            g = u.data?.domainVerificationInfo,
            b = (0, n.useCallback)(
              (e, t) => {
                if (!g) return 0;
                const a = g[e],
                  n = g[t];
                if (null === a?.verificationStatus && null === n?.verificationStatus) return 0;
                const s = a?.verificationStatus ? Mp[a.verificationStatus] : -1,
                  i = n?.verificationStatus ? Mp[n.verificationStatus] : -1;
                if (s > i) return -1;
                if (i > s) return 1;
                const o = e.toLowerCase().replace(/ /g, ""),
                  r = t.toLowerCase().replace(/ /g, "");
                return o === r ? 0 : r < o ? ("" !== r ? 1 : -1) : o < r ? ("" !== o ? -1 : 1) : 0;
              },
              [g]
            ),
            h = null != (t = u.data?.enableSSO.ssoEnabled) && t,
            x = null != (a = u.data?.global.isTeamProvisionedInNitro) && a && u.data?.idpMetadata.metadataValue;
          return (
            (0, n.useEffect)(() => {
              if (u.data?.domainVerificationInfo && 0 === i.length) {
                var e;
                const t = Object.keys(null != (e = u.data?.domainVerificationInfo) ? e : {}).sort((e, t) => b(e, t));
                o(t.length > 0 ? t.map((e) => e) : [m]);
              }
            }, [i.length, m, u.data?.domainVerificationInfo, b]),
            u.status !== je.rq.Success
              ? null
              : (0, y.tZ)(
                  "div",
                  { sx: { display: "flex", flexDirection: "column", gap: "32px" } },
                  (0, y.tZ)(
                    y.X6,
                    { as: "h3", color: "ds.text.neutral.standard", textStyle: "ds.title.section.medium" },
                    s("sso_confidential_verify_domain_step_title")
                  ),
                  (0, y.tZ)(
                    d.T5p,
                    {
                      gap: "16px 10px",
                      gridTemplateColumns: "100px 1fr 126px 40px",
                      sx: { "& > *::after": { content: '""', position: "absolute", borderBottom: "1px solid #8C8F90" } }
                    },
                    (0, y.tZ)(
                      d.dDn,
                      { sx: { "& > ::after": { content: '""', borderBottom: "1px solid #8C8F90" } } },
                      (0, y.tZ)(
                        y.X6,
                        { as: "h4", color: "ds.text.neutral.quiet", textStyle: "ds.title.supporting.small" },
                        s("sso_confidential_verify_domain_step_table_header_status")
                      )
                    ),
                    (0, y.tZ)(
                      d.dDn,
                      { gridColumnStart: 2, gridColumnEnd: 5 },
                      (0, y.tZ)(
                        y.X6,
                        { as: "h4", color: "ds.text.neutral.quiet", textStyle: "ds.title.supporting.small" },
                        s("sso_confidential_verify_domain_step_table_header_domain")
                      )
                    ),
                    (() => {
                      const e = new Set();
                      return i.map((t, a) => {
                        const n = g
                          ? (0, y.tZ)(Ap, {
                              key: a,
                              domainName: t,
                              ssoActive: h,
                              onTextInputChange: (e) =>
                                ((e, t) => {
                                  const a = i.map((a, n) => (n === e ? t : a));
                                  o(a);
                                })(a, e),
                              onModalOpen: () =>
                                (async (e) => {
                                  const t = i[e];
                                  o([...i]), l(t);
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
                    (0, y.tZ)(
                      d.dDn,
                      { gridColumnStart: 2 },
                      (0, y.tZ)(
                        y.zx,
                        {
                          mood: "brand",
                          intensity: "supershy",
                          layout: "iconLeading",
                          icon: Zp || (Zp = (0, y.tZ)(y.JO, { name: "ActionAddOutlined" })),
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
                  _ ? Tp || (Tp = (0, y.tZ)(Cp, null)) : null,
                  (0, y.tZ)(hp, {
                    domainName: null != r ? r : "",
                    showModal: null !== r,
                    onClose: () => {
                      l(null);
                    }
                  })
                )
          );
        };
      var kp, Op, Lp, zp, Rp;
      const { dashDarkerGreen00: jp, dashGreen00: Pp, midGreen00: Up } = d.colors,
        Bp = {
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
        Gp = "support@dashlane.com",
        Fp = () => {
          const { status: e, data: t } = (0, qe.k)(Um.y, "ssoProvisioning");
          if (e !== r.rq.Success) return null;
          const a = e === r.rq.Success ? !t.enableSSO.ssoEnabled : null;
          return (0, y.tZ)(
            "div",
            null,
            (0, y.tZ)(
              d.Ejs,
              { flexDirection: "column", gap: "32px", sx: { flexGrow: 1 } },
              a ? (0, y.tZ)(Jm, { pageContext: Xm.Nitro }) : null,
              (0, y.tZ)(d.Zbd, { sx: { padding: "32px" } }, kp || (kp = (0, y.tZ)(sp, null)), Op || (Op = (0, y.tZ)(mp, null))),
              (0, y.tZ)(d.Zbd, { sx: { padding: "32px" } }, Lp || (Lp = (0, y.tZ)(wp, null))),
              (0, y.tZ)(d.Zbd, { sx: { padding: "32px" } }, zp || (zp = (0, y.tZ)(bp, null))),
              (0, y.tZ)(d.Zbd, { sx: { padding: "32px" } }, Rp || (Rp = (0, y.tZ)(yp, null)))
            )
          );
        },
        qp = (e) =>
          (0, y.tZ)(
            "div",
            { sx: { border: "none", display: "flex", gap: "24px", flexDirection: "column" }, ...e },
            (0, y.tZ)(
              rl,
              null,
              (0, y.tZ)(y.X6, { as: "h3", textStyle: "ds.title.block.medium" }, Bp.CARD_1_HEADING),
              (0, y.tZ)(y.nv, { textStyle: "ds.body.standard.regular", color: "ds.text.neutral.quiet" }, Bp.CARD_1_BODY_INTRO),
              (0, y.tZ)(
                y.nv,
                {
                  as: "ul",
                  textStyle: "ds.body.standard.regular",
                  color: "ds.text.neutral.quiet",
                  sx: { margin: "0px 0px 8px 20px", listStyleType: "disc" }
                },
                Bp.CARD_1_BODY_POINTS.map((e) => (0, y.tZ)("li", { key: e }, e))
              ),
              (0, y.tZ)(y.X6, { as: "h3", textStyle: "ds.title.block.medium" }, Bp.CARD_1_SUB_HEADING),
              (0, y.tZ)(y.nv, { textStyle: "ds.body.standard.regular", color: "ds.text.neutral.quiet" }, Bp.CARD_1_SUB_BODY),
              (0, y.tZ)(d.rUS, { color: Up, hoverColor: Pp, activeColor: jp, href: `mailto:${Gp}`, sx: { fontSize: "14px" } }, Gp)
            ),
            (0, y.tZ)(
              rl,
              null,
              (0, y.tZ)(y.X6, { as: "h3", textStyle: "ds.title.block.medium" }, Bp.CARD_2_HEADING),
              (0, y.tZ)(y.nv, { textStyle: "ds.title.block.small", color: "ds.text.neutral.quiet" }, Bp.CARD_2_BODY_FIRST),
              (0, y.tZ)(y.nv, { textStyle: "ds.title.block.small", color: "ds.text.neutral.quiet" }, Bp.CARD_2_BODY_SECOND),
              (0, y.tZ)(y.nv, { textStyle: "ds.title.block.small", color: "ds.text.danger.standard" }, Bp.CARD_2_BODY_THIRD)
            )
          ),
        Vp = ({ backRoute: e }) => {
          const { data: t } = (0, qe.k)(Um.y, "ssoProvisioning"),
            { translate: a } = (0, p.Z)(),
            n = !t?.enableSSO.ssoEnabled,
            s = !t?.enableSSO.ssoEnabled;
          return (0, y.tZ)(
            d.T5p,
            { gridTemplateColumns: "auto", gridTemplateRows: "auto 1fr", fullWidth: !0, sx: { height: "100%" } },
            (0, y.tZ)(
              "div",
              { sx: { px: "48px", pt: "32px", pb: "12px" } },
              (0, y.tZ)(hi, {
                title: a("sso_confidential_page_title"),
                titleBadge: n
                  ? (0, y.tZ)(y.Ct, { intensity: "catchy", mood: "brand", layout: "labelOnly", label: a("team_new_label") })
                  : null
              }),
              s
                ? (0, y.tZ)(
                    d.rUS,
                    {
                      color: Up,
                      hoverColor: Pp,
                      activeColor: jp,
                      onClick: () => {
                        $m({ ssoSetupStep: o.SsoSetupStep.ReturnToSsoSelection }), (0, i.uX)(e);
                      },
                      sx: { fontSize: "16px", display: "flex", textDecoration: "none", marginTop: "-18px" }
                    },
                    (0, y.tZ)(y.JO, { name: "ArrowLeftOutlined", size: "small", color: Pp, sx: { marginRight: "10px" } }),
                    " ",
                    "Back"
                  )
                : null
            ),
            (0, y.tZ)(Gu, {
              mainContent: Fp,
              mainProps: { gridTemplateColumns: "auto", gridAutoRows: "min-content", gap: "32px" },
              secondaryContent: qp,
              sx: { background: "transparent" }
            })
          );
        },
        $p = () => {
          const [e, t] = (0, n.useState)(!1),
            [a, s] = (0, n.useState)(),
            i = (0, n.useCallback)(async () => {
              try {
                return await ea.C.getEncryptionServiceConfig();
              } catch {
                return { success: !1, error: { code: l.UnknownTeamAdminError } };
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
      var Wp = a(611999),
        Hp = a(44966);
      const Kp = "esConfigurationLabel",
        Yp = ({ value: e, disabled: t, error: a, isLoading: s = !1, configRegenRequired: i, lastGeneratedTimeStamp: o }) => {
          const { translate: r } = (0, p.Z)(),
            l = o
              ? (0, c.tZ)(
                  d.Ejs,
                  { gap: "4px", sx: { mt: "8px" }, justifyContent: "center" },
                  (0, c.tZ)(
                    y.nv,
                    { textStyle: "ds.body.reduced.strong" },
                    r("team_settings_encryption_service_generate_configuration_timestamp")
                  ),
                  (0, c.tZ)(
                    y.nv,
                    { textStyle: "ds.body.reduced.regular" },
                    (0, Xt.Z)(o).toLocaleString(navigator.language, { ...sa.qG.lll, timeZoneName: "short" })
                  )
                )
              : null;
          return (0, c.tZ)(
            d.T5p,
            {
              gridTemplateAreas: "'label button' 'description button' 'timestamp timestamp' 'config buttons'",
              gridTemplateColumns: "3fr 1fr",
              sx: { gridColumnGap: "8px" }
            },
            (0, c.tZ)(
              d.dDn,
              { gridArea: "label", sx: { paddingBottom: "8px" }, as: y.nv, innerAs: "label", id: Kp, textStyle: "ds.title.block.medium" },
              r("team_settings_encryption_service_generate_configuration_label")
            ),
            (0, c.tZ)(
              d.dDn,
              { gridArea: "description", as: y.nv },
              r("team_settings_encryption_service_generate_configuration_label_helper")
            ),
            (0, c.tZ)(
              d.dDn,
              { gridArea: "button" },
              (0, c.tZ)(
                y.zx,
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
              i ? null : l
            ),
            e
              ? (0, c.tZ)(
                  n.Fragment,
                  null,
                  (0, c.tZ)(
                    d.dDn,
                    { gridArea: "config", sx: { marginTop: "18px" } },
                    (0, c.tZ)(y.Kx, {
                      "aria-labelledby": Kp,
                      readOnly: !0,
                      disabled: i,
                      value: e,
                      feedback: a ? { text: a } : void 0,
                      error: !!a
                    })
                  ),
                  (0, c.tZ)(
                    d.dDn,
                    { as: d.Ejs, gridArea: "buttons", sx: { marginTop: "18px" }, flexDirection: "column", gap: "8px" },
                    (0, c.tZ)(Eu.q, { disabled: i, copyValue: e, buttonText: r("input_copy_button"), fullsize: !0 }),
                    (0, c.tZ)(Hp.o, {
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
      function Qp(e) {
        const t = (0, n.useMemo)(() => e, [e]),
          [a, s] = (0, n.useState)(!1),
          [i, o] = (0, n.useState)(),
          r = (0, n.useCallback)(async () => {
            const e = { success: !1, error: { code: l.UnknownTeamAdminError } };
            try {
              return t ? await ea.C.getTeamDevice({ teamDeviceAccessKey: t }) : e;
            } catch {
              return e;
            }
          }, [t]),
          c = (0, n.useCallback)(
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
              c(e),
              () => {
                e.abort();
              }
            );
          }, [c]),
          { teamDeviceLoading: a, teamDevice: i, refreshTeamDevice: c }
        );
      }
      const Xp = {
          AWS: "https://support.dashlane.com/hc/articles/4404322174482-Dashlane-Encryption-Service-Overview-and-Setup?utm_source=extension#h_01FTXGN0C8B9HMKRD8J0BSYRAH",
          "Microsoft Azure":
            "https://support.dashlane.com/hc/articles/4404322174482-Dashlane-Encryption-Service-Overview-and-Setup?utm_source=extension#h_01FTXGMVBAEK5GB0TZJ86K7ZWE"
        },
        Jp = ({ context: e = "GENERIC", ...t }) => {
          var a, s;
          const { esConfig: i, esConfigLoading: o } = $p(),
            { teamDevice: r, teamDeviceLoading: l } = Qp(i?.deviceAccessKey),
            [c, d] = (0, n.useState)(!1),
            { translate: u } = (0, p.Z)(),
            _ = {
              CONTENT: u.markup(
                "team_settings_encryption_service_restart_failed_info_content_markup",
                {
                  helpArticle: null != (a = Xp[null != (s = i?.deploymentLocation) ? s : ""]) ? a : "",
                  supportLink: "https://support.dashlane.com/hc/requests/new?utm_source=extension"
                },
                { linkTarget: "_blank" }
              )
            },
            m = {
              GENERIC: { TITLE: u("team_settings_encryption_service_restart_failed_info_title"), ..._ },
              SCIM: { TITLE: u("team_settings_encryption_service_restart_failed_info_title_scim"), ..._ },
              ES: { TITLE: u("team_settings_encryption_service_restart_failed_info_title_es"), ..._ },
              SSO: { TITLE: u("team_settings_encryption_service_restart_failed_info_title_sso"), ..._ }
            };
          return (
            (0, n.useEffect)(() => {
              if (!l && !o && r && i) {
                const t = (!r.hasLatestConfig && "GENERIC" === e) || "GENERIC" !== e;
                d(t);
              }
            }, [r, i, l, o, e]),
            c
              ? (0, y.tZ)(y.ke, {
                  mood: "warning",
                  size: "large",
                  title: m[e].TITLE,
                  description: m[e].CONTENT,
                  actions: m[e].BUTTON
                    ? [
                        (0, y.tZ)(
                          y.zx,
                          {
                            mood: "brand",
                            intensity: "catchy",
                            key: "primary",
                            onClick: () => {
                              d(!1);
                            }
                          },
                          m[e].BUTTON
                        )
                      ]
                    : void 0,
                  ...t
                })
              : null
          );
        };
      var eg, tg, ag, ng, sg;
      const ig = "team_settings_encryption_service_enter_endpoint_placeholder_aws_linux",
        og = "_common_generic_error",
        rg = "https://",
        lg = {
          AWS: "https://eu-west-1.console.aws.amazon.com/acm/home?region=eu-west-1#/welcome",
          "Microsoft Azure":
            "https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fget.dashlane.com%2Fazure%2Farm%2Fes%2Fazuredeploy.json"
        },
        cg = {
          AWS: "https://support.dashlane.com/hc/articles/4404322174482-Dashlane-Encryption-Service-Overview-and-Setup?utm_source=extension#h_01FTXGN0C8B9HMKRD8J0BSYRAH",
          "Microsoft Azure":
            "https://support.dashlane.com/hc/articles/4404322174482-Dashlane-Encryption-Service-Overview-and-Setup?utm_source=extension#h_01FTXGMVBAEK5GB0TZJ86K7ZWE"
        },
        dg = {
          AWS: "team_settings_encryption_service_go_to_label_helper_aws_markup",
          "Microsoft Azure": "team_settings_encryption_service_go_to_label_helper_azure_markup"
        },
        ug = {
          AWS: "team_settings_encryption_service_enter_endpoint_helper_aws_linux",
          "Microsoft Azure": "team_settings_encryption_service_enter_endpoint_helper_azure"
        },
        _g = { "Microsoft Azure": "team_settings_encryption_service_enter_endpoint_placeholder_azure", AWS: ig },
        mg = "config",
        pg = "deploymentLocation",
        gg = "encryptionServiceEndpoint",
        yg = "ssoConnectorKey",
        bg = "-sso.azurewebsites.net",
        hg = ({ migratingFromSSOConnector: e = !1, esConfig: t, onSave: a, teamSettings: s, updateTeamSettings: r }) => {
          var c, u, _;
          const [m, g] = (0, n.useState)(!1),
            [b, h] = (0, n.useState)(""),
            [x, S] = (0, n.useState)(!1),
            [v, f] = (0, n.useState)(!1),
            { translate: C } = (0, p.Z)(),
            { spaceDetails: E, teamId: Z } = (0, zo.fV)(),
            { initSsoProvisioning: T } = (0, Fe.u)(Um.y),
            N = null != (c = E?.associatedEmail) ? c : "",
            D = (0, i.k6)(),
            M = s?.ssoServiceProviderUrl,
            I = {
              encryptionServiceEndpoint: (null != M ? M : "").replace(rg, ""),
              config: null != (u = t?.config) ? u : "",
              deploymentLocation: null != (_ = t?.deploymentLocation) ? _ : "",
              ssoConnectorKey: ""
            },
            A = () => D.goBack(),
            w = (e) => (e ? null : C("team_settings_encryption_service_error_select_service")),
            k = (e) => {
              const t = C("team_settings_encryption_service_error_invalid_ssoConnectorKey");
              try {
                const [t, a] = e.split("|"),
                  n = atob(a);
                if (!t || !a || !n || 36 !== t.length || 64 !== n.length) throw new Error("Invalid key format");
              } catch {
                return t;
              }
              return null;
            },
            O = (e) => {
              const t = C("team_settings_encryption_service_error_invalid_endpoint");
              if (!e) return t;
              let a;
              try {
                a = new URL(`${rg}${e}`);
              } catch (e) {
                return t;
              }
              return "/" !== a.pathname || "" !== a.search || "" !== a.hash || a.href.includes("?") ? t : null;
            };
          return (0, y.tZ)(
            La.J9,
            {
              onSubmit: async (t, { setFieldValue: n, setFieldTouched: s }) => {
                h(""), g(!0), f(!1);
                const { deploymentLocation: i, encryptionServiceEndpoint: c, ssoConnectorKey: d } = t;
                if (!i) return void s(pg);
                if (e && !d) return void s(yg);
                n(mg, "");
                const u = (e) => e.replace(/\/$/, "").toLowerCase();
                try {
                  const s = { deploymentLocation: i, encryptionServiceEndpoint: rg + u(c), updateTeamDeviceConfigParams: {} };
                  e && d && (s.updateTeamDeviceConfigParams.ssoConnectorKey = d);
                  const _ = await ea.C.generateAndSaveEncryptionServiceConfig(s);
                  if (!_.success) return void h(C(og));
                  const m = _.data.basicConfig;
                  if (
                    (n(mg, m.config),
                    t[gg] !== I.encryptionServiceEndpoint &&
                      (await r({ ssoServiceProviderUrl: t[gg] ? `${rg}` + u(`${t[gg]}`) : null }), await T({ teamId: `${Z}` })),
                    g(!1),
                    _.data.encryptionServiceReloadingStatus !== l.EncryptionServiceRestartStatusCodes.OK)
                  )
                    return f(!0), S(!1), void a?.();
                  Vm({ ssoSetupStep: o.SsoSetupStep.GenerateAndSaveConfiguration }), b || a?.();
                } catch (e) {
                  g(!1), h(C(og));
                }
              },
              initialValues: I,
              onReset: A
            },
            (a) => {
              var s, i;
              return (0, y.tZ)(
                La.l0,
                { autoComplete: "off" },
                (0, y.tZ)(Wp.X, { dirty: a.dirty && !m && !v }),
                (0, y.tZ)(
                  d.Zbd,
                  null,
                  (0, y.tZ)(d.Ol2, null, C("team_settings_encryption_service_header")),
                  (0, y.tZ)(
                    d.aYP,
                    null,
                    e
                      ? (0, y.tZ)(
                          n.Fragment,
                          null,
                          (0, y.tZ)(
                            d.T5p,
                            {
                              gridTemplateAreas: "'header header' 'description description' 'input button'",
                              gridTemplateColumns: "1fr auto",
                              gap: "10px"
                            },
                            (0, y.tZ)(
                              d.dDn,
                              { gridArea: "header" },
                              (0, y.tZ)(
                                y.nv,
                                { as: "h3", textStyle: "ds.title.block.medium" },
                                C("team_settings_encryption_service_migrate_sso_title")
                              )
                            ),
                            (0, y.tZ)(
                              d.dDn,
                              { gridArea: "description" },
                              (0, y.tZ)(
                                y.nv,
                                { color: "ds.text.neutral.quiet", textStyle: "ds.body.standard.regular" },
                                C.markup("team_settings_encryption_service_migrate_sso_description_markup")
                              )
                            ),
                            (0, y.tZ)(
                              d.dDn,
                              { gridArea: "input" },
                              (0, y.tZ)(
                                La.gN,
                                { name: yg, validate: k },
                                ({ field: { onChange: e, ...t }, meta: { error: n, touched: s } }) =>
                                  (0, y.tZ)(d.oil, {
                                    onChange: (t) => {
                                      e(t);
                                    },
                                    id: "ssoConnectorKey",
                                    placeholder: C("team_settings_encryption_service_sso_connector_key_placeholder"),
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
                          eg || (eg = (0, y.tZ)("hr", null))
                        )
                      : null,
                    (0, y.tZ)(
                      d.T5p,
                      { gridTemplateAreas: "'label select' 'desc select'", gap: "8px" },
                      (0, y.tZ)(
                        d.dDn,
                        {
                          gridArea: "label",
                          as: y.nv,
                          innerAs: "label",
                          htmlFor: "deploymentLocation",
                          sx: { gridArea: "label" },
                          textStyle: "ds.title.block.medium"
                        },
                        C("team_settings_encryption_service_deploy_label")
                      ),
                      (0, y.tZ)(
                        d.dDn,
                        { gridArea: "desc", as: y.nv },
                        C.markup(
                          "team_settings_encryption_service_deploy_label_helper_markup",
                          { customerSupport: "https://support.dashlane.com/hc/requests/new?utm_source=extension" },
                          { linkTarget: "_blank" }
                        )
                      ),
                      (0, y.tZ)(
                        d.dDn,
                        { gridArea: "select" },
                        (0, y.tZ)(La.gN, { name: pg, validate: w }, ({ field: { onChange: e, ...t }, meta: { error: n, touched: s } }) =>
                          (0, y.tZ)(d.PhF, {
                            onChange: (t) => {
                              a.setFieldValue(
                                gg,
                                ((e, t) => {
                                  if (!e || !t) return "";
                                  const a = e.replace(/.+@/, "");
                                  if ("Microsoft Azure" === t) {
                                    const [e, t, ...n] = a.split(".").reverse(),
                                      s = t + bg;
                                    return s.length <= 42 ? s : t.slice(0, 42 - bg.length) + bg;
                                  }
                                  return "AWS" === t ? "dashlane-sso." + a : "";
                                })(N, t.target.value)
                              ),
                                S(I.deploymentLocation !== t.target.value),
                                Vm({
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
                            options: Object.keys(ug),
                            placeholder: C("team_settings_encryption_service_select_host"),
                            intent: s && n ? "error" : void 0,
                            feedbackText: s && n ? n : void 0,
                            readOnly: a.isSubmitting,
                            ...t
                          })
                        )
                      )
                    ),
                    tg || (tg = (0, y.tZ)("hr", null)),
                    (0, y.tZ)(
                      d.T5p,
                      { gridTemplateColumns: "auto", gap: "8px" },
                      (0, y.tZ)(
                        d.dDn,
                        { as: y.nv, innerAs: "label", htmlFor: "endpointInput", textStyle: "ds.title.block.medium" },
                        C("team_settings_encryption_service_enter_endpoint_label")
                      ),
                      (0, y.tZ)(
                        d.dDn,
                        { as: y.nv, sx: { mb: "16px" } },
                        C(null != (s = ug[a.values[pg]]) ? s : "team_settings_encryption_service_enter_endpoint_label_helper_no_selection")
                      ),
                      e ? (0, y.tZ)(y.nv, null, C("team_settings_encryption_service_current_endpoint_label"), " ", M) : null,
                      (0, y.tZ)(
                        La.gN,
                        { name: gg, validate: O },
                        ({
                          field: { onChange: e, ...t },
                          meta: { error: n, touched: s },
                          form: {
                            values: { deploymentLocation: i }
                          }
                        }) => {
                          var o;
                          return (0, y.tZ)(d.oil, {
                            sx: { pl: 0 },
                            onChange: (t) => {
                              S(I.encryptionServiceEndpoint !== t.target.value), e(t);
                            },
                            startAdornment: ag || (ag = (0, y.tZ)(y.nv, { color: "ds.text.neutral.quiet" }, rg)),
                            id: "endpointInput",
                            placeholder: C(null != (o = _g[i]) ? o : ig),
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
                    ng || (ng = (0, y.tZ)("hr", null)),
                    v ? (0, y.tZ)(Jp, { sx: { marginBottom: "20px" }, context: "ES" }) : null,
                    (0, y.tZ)(
                      La.gN,
                      { name: mg },
                      ({
                        field: n,
                        meta: s,
                        form: {
                          values: { deploymentLocation: i, ssoConnectorKey: o }
                        }
                      }) => {
                        var r;
                        return (0, y.tZ)(Yp, {
                          configRegenRequired: x,
                          disabled: !i || (e && !o),
                          lastGeneratedTimeStamp: t?.lastGeneratedTimeStamp,
                          value: n.value,
                          error: (null != (r = s.error) ? r : !a.isSubmitting && x)
                            ? C("team_settings_encryption_service_config_regen_warning")
                            : void 0,
                          isLoading: m || a.isSubmitting
                        });
                      }
                    ),
                    sg || (sg = (0, y.tZ)("hr", null)),
                    (0, y.tZ)(
                      d.T5p,
                      { gridTemplateAreas: "'header button' 'description button'", gap: "8px" },
                      (0, y.tZ)(
                        d.dDn,
                        { gridArea: "header", as: y.nv, textStyle: "ds.title.block.medium" },
                        C("team_settings_encryption_service_go_to_label")
                      ),
                      (0, y.tZ)(
                        d.dDn,
                        { gridArea: "description", as: y.nv, sx: { mb: "16px" } },
                        ((i = a.values.deploymentLocation) || (i = "AWS"), C.markup(dg[i], { setupGuide: cg[i] }, { linkTarget: "_blank" }))
                      ),
                      (0, y.tZ)(
                        d.dDn,
                        {
                          gridArea: "button",
                          as: y.zx,
                          type: "button",
                          mood: a.values.config && !x ? "brand" : "neutral",
                          disabled: !a.values[pg] || !a.values[mg] || x,
                          onClick: () => {
                            Vm({ ssoSetupStep: o.SsoSetupStep.AddConfigurationToServiceHost }), (0, z.Yo)(lg[a.values[pg]]);
                          },
                          icon: "ActionOpenExternalLinkOutlined",
                          layout: "iconTrailing",
                          sx: { gridArea: "button", height: "fit-content" }
                        },
                        C("team_settings_encryption_service_go_to_button")
                      )
                    )
                  ),
                  (0, y.tZ)(
                    d.eWM,
                    { flexWrap: "nowrap" },
                    b
                      ? (0, y.tZ)(
                          y.nv,
                          {
                            sx: { width: "40%", ml: 0, mr: "auto" },
                            textStyle: "ds.title.supporting.small",
                            color: "ds.text.danger.standard"
                          },
                          b
                        )
                      : null,
                    (0, y.tZ)(
                      y.zx,
                      { mood: "neutral", intensity: "quiet", size: "large", type: "button", onClick: () => A() },
                      C("team_settings_encryption_service_button_cancel")
                    )
                  )
                )
              );
            }
          );
        };
      var xg,
        Sg = a(287083);
      const vg = "team_settings_encryption_service_not_available",
        fg = ({ config: e }) => {
          var t;
          const { translate: a } = (0, p.Z)(),
            { teamDevice: n, refreshTeamDevice: s, teamDeviceLoading: i } = Qp(e.deviceAccessKey),
            o = a.markup(
              "team_settings_encryption_service_tooltip_text_markup",
              { updateServiceUrl: "https://support.dashlane.com/hc/en-us/articles/360013149040-Dashlane-SSO-Overview-Deployment-steps" },
              { linkTarget: "_blank" },
              { color: "ds.text.inverse.catchy", hoverColor: "ds.text.brand.quiet", activeColor: "ds.text.brand.standard" }
            );
          return (0, y.tZ)(
            Sg.R,
            null,
            i
              ? xg || (xg = (0, y.tZ)(d.HoD, { color: "ds.text.brand.standard" }))
              : (0, y.tZ)(
                  d.Ejs,
                  { flexDirection: "column", gap: "5px" },
                  (0, y.tZ)(
                    y.nv,
                    { textStyle: "ds.body.reduced.regular", color: "ds.text.neutral.standard" },
                    `${a("team_settings_encryption_service_last_restart")}\n                    ${
                      n?.lastStartDateUnix
                        ? (0, Xt.Z)(n.lastStartDateUnix).toLocaleString(navigator.language, { ...sa.qG.lll, timeZoneName: "short" })
                        : a(vg)
                    }`
                  ),
                  (0, y.tZ)(
                    d.Ejs,
                    { gap: "8px" },
                    (0, y.tZ)(
                      y.nv,
                      { textStyle: "ds.body.reduced.regular", color: "ds.text.neutral.standard" },
                      `\n                   ${a("team_settings_encryption_service_version")}\n                   ${
                        null != (t = n?.version) ? t : a(vg)
                      }\n                  `
                    ),
                    !1 === n?.hasLatestVersion
                      ? (0, y.tZ)(
                          y.u,
                          { wrapTrigger: !0, content: o },
                          (0, y.tZ)(y.Ct, {
                            mood: "danger",
                            iconName: "FeedbackWarningOutlined",
                            layout: "iconLeading",
                            label: a("team_settings_encryption_service_new_version")
                          })
                        )
                      : null
                  ),
                  (0, y.tZ)(
                    y.nv,
                    {
                      as: "a",
                      color: "ds.text.brand.standard",
                      sx: { textDecoration: "none", fontWeight: "normal" },
                      onClick: () => s(),
                      textStyle: "ds.body.reduced.regular"
                    },
                    (0, y.tZ)(y.JO, {
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
      var Cg;
      const Eg = ({ esConfig: e, loading: t, parentPath: a, disableSetupButton: n }) => {
        const { translate: s } = (0, p.Z)(),
          r = (0, i.k6)(),
          l = !e && !t;
        return (0, y.tZ)(
          d.Zbd,
          null,
          (0, y.tZ)(
            d.T5p,
            {
              as: d.aYP,
              gridTemplateAreas: "'header button' 'description button' 'status .'",
              gridTemplateColumns: "1fr auto",
              gap: "8px",
              sx: { bg: "white", border: "none" }
            },
            (0, y.tZ)(
              d.dDn,
              { gridArea: "header" },
              e
                ? null
                : (0, y.tZ)(
                    y.X6,
                    { as: "h3", color: "ds.text.neutral.quiet", textStyle: "ds.title.supporting.small" },
                    s("team_settings_encryption_service_get_started")
                  ),
              (0, y.tZ)(y.X6, { as: "h3", textStyle: "ds.title.section.medium" }, s("team_settings_encryption_service_header"))
            ),
            (0, y.tZ)(
              d.dDn,
              { gridArea: "description" },
              (0, y.tZ)(
                y.nv,
                { textStyle: "ds.title.block.small", color: "ds.text.neutral.quiet" },
                s("team_settings_encryption_service_description")
              ),
              Cg || (Cg = (0, y.tZ)("br", null)),
              (0, y.tZ)(
                y.nv,
                {
                  as: "a",
                  textStyle: "ds.title.block.small",
                  href: "https://support.dashlane.com/hc/articles/4404322174482",
                  color: "ds.text.brand.standard",
                  rel: "noopener noreferrer",
                  target: "_blank"
                },
                s("team_settings_encryption_service_more_info_link")
              )
            ),
            (0, y.tZ)(
              d.dDn,
              {
                id: "esSetupButton",
                as: y.zx,
                disabled: t || n,
                mood: l ? "brand" : "neutral",
                intensity: l ? "catchy" : "quiet",
                gridArea: "button",
                type: "button",
                alignSelf: "center",
                size: "large",
                onClick: () => {
                  Vm({ ssoSetupStep: o.SsoSetupStep.SetUpEncryptionServiceSettings }), r.push(`${a}/encryption-service-settings`);
                },
                isLoading: t
              },
              s(e ? "team_settings_button_edit_label" : "team_settings_encryption_service_set_up")
            ),
            e ? (0, y.tZ)(d.dDn, { gridArea: "status", sx: { mt: "20px" } }, (0, y.tZ)(fg, { config: e })) : null
          )
        );
      };
      var Zg = a(161367),
        Tg = a(109127);
      const Ng = ({ actions: e, endIcon: t, fieldName: a, feedbackType: n, feedbackText: s, handleAdd: i, ...o }) => {
        const [
            {
              value: { name: r },
              onBlur: l,
              ...d
            },
            { error: u },
            { setValue: _ }
          ] = (0, La.U$)(a),
          m = r ? (null != s ? s : u) : void 0,
          p = (null != n ? n : m) ? "error" : void 0;
        return (0, c.tZ)(Tg.h, {
          textInputProps: {
            id: a,
            endAdornment: t,
            feedbackText: m,
            feedbackType: p,
            fullWidth: !0,
            value: r,
            ...d,
            ...o,
            onChange: ({ currentTarget: { value: e } }) => {
              _({ name: e });
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
      var Dg,
        Mg,
        Ig,
        Ag,
        wg = a(894017),
        kg = a.n(wg);
      const { accessibleValidatorGreen: Og, orange00: Lg, dashGreen02: zg } = d.colors,
        Rg = "team_settings_domain_register_invalid_error",
        jg = ({ fieldArrayName: e, domainLoadError: t, refreshDomains: a }) => {
          const { translate: s } = (0, p.Z)(),
            { values: i } = (0, La.u6)(),
            [o, r] = (0, n.useState)({}),
            [u, _] = (0, n.useState)({}),
            [m, g] = (0, n.useState)(""),
            [y, b] = (0, n.useState)(null),
            h = (0, ve.o)("setup_rollout_sso_jit_setting"),
            x = (e, t) => {
              r((a) => ({ ...a, [e]: t }));
            },
            S = async (t) => {
              const a = t.trim();
              if (!kg().isFQDN(a)) throw new Error(s(Rg));
              if (i[e].reduce((e, t) => (t.name === a ? e + 1 : e), 0) > 1)
                throw new Error(s("team_settings_domain_register_duplicated_error"));
              ((e) => {
                _((t) => ({ ...t, [e]: !0 }));
              })(t);
              const n = await ea.C.registerTeamDomain({ domain: a });
              var o;
              if (
                (((e) => {
                  _(({ [e]: t, ...a }) => a);
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
                      : Rg
                  )
                );
            },
            v = async (e) => {
              await S(e.name), await a();
            };
          return t
            ? (0, c.tZ)(d.Ejs, { fullWidth: !0, justifyContent: "center" }, (0, c.tZ)(d.j49, { color: "errors.4" }, t))
            : (0, c.tZ)(
                n.Fragment,
                null,
                (0, c.tZ)(
                  d.nvN,
                  { as: "label", htmlFor: `${e}.${i[e].length - 1}`, bold: !0, sx: { display: "inline-block", mb: "8px" } },
                  s("team_settings_domain_title")
                ),
                (0, c.tZ)(d.nvN, { size: "small", sx: { mb: "24px" } }, s("team_settings_es_sso_setup_domain_description")),
                (0, c.tZ)(La.F2, { name: e }, (e) =>
                  (0, c.tZ)(
                    d.T5p,
                    { justifyContent: "stretch", gridTemplateColumns: "auto", gap: "8px", gridAutoRows: "auto" },
                    i[e.name].map((t, a) => {
                      var r, _;
                      const m = u[t.name],
                        p = t.status === l.DomainStatus.valid,
                        y =
                          t.status === l.DomainStatus.pending || t.status === l.DomainStatus.invalid || t.status === l.DomainStatus.expired,
                        h = m
                          ? Dg || (Dg = (0, c.tZ)(d.HoD, { color: "primaries.5", size: 20 }))
                          : p
                          ? Mg || (Mg = (0, c.tZ)(d.rE2, { color: Og }))
                          : y
                          ? (0, c.tZ)(d.enX, { color: t.status === l.DomainStatus.pending ? zg : Lg })
                          : void 0;
                      return (0, c.tZ)(
                        n.Fragment,
                        { key: `${e.name}.${null != (r = t.id) ? r : a}` },
                        (0, c.tZ)(Ng, {
                          placeholder: s("team_settings_es_sso_domain_url_placeholder"),
                          fieldName: `${e.name}.${a}`,
                          readOnly: null != (_ = !!t.status) ? _ : m,
                          autoFocus: a === i[e.name].length - 1,
                          endIcon: h,
                          feedbackType: !t.status && o[t.name] ? "error" : void 0,
                          feedbackText: t.status ? void 0 : o[t.name],
                          handleAdd: async () => {
                            try {
                              await v(t), g(t.name);
                            } catch (e) {
                              x(t.name, e.message);
                            }
                          },
                          actions: (0, c.tZ)(
                            n.Fragment,
                            null,
                            [void 0, l.DomainStatus.pending].includes(t.status)
                              ? (0, c.tZ)(
                                  d.zxk,
                                  {
                                    nature: "secondary",
                                    type: "button",
                                    disabled: m,
                                    onClick: () =>
                                      (async (e) => {
                                        try {
                                          void 0 === e.status && (await v(e)), g(e.name);
                                        } catch (t) {
                                          x(e.name, t.message);
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
                              ? (0, c.tZ)(Zg.h, {
                                  nature: "secondary",
                                  type: "button",
                                  disabled: m,
                                  onClick: () => b(t),
                                  icon: Ig || (Ig = (0, c.tZ)(d.XHJ, null))
                                })
                              : null
                          )
                        })
                      );
                    })
                  )
                ),
                h ? Ag || (Ag = (0, c.tZ)(Cp, null)) : null,
                m
                  ? (0, c.tZ)(Fl, {
                      domainName: m,
                      onSuccess: async () => {
                        g(""), await a();
                      },
                      onDismiss: () => g("")
                    })
                  : null,
                y
                  ? (0, c.tZ)(xl, {
                      domain: y,
                      onDismiss: () => b(null),
                      onConfirm: async () => {
                        await (async (e) => {
                          if (!e) return;
                          const t = await ea.C.deactivateTeamDomain({ domain: e });
                          return t.success ? void 0 : t.error.code;
                        })(y.name),
                          await a();
                      }
                    })
                  : null
              );
        };
      var Pg;
      const Ug = ({ inputValue: e, labelText: t, disabled: a, loading: n, id: s }) =>
          (0, c.tZ)(Pl.x, {
            inputValue: e,
            textInputProps: {
              fullWidth: !0,
              readOnly: !0,
              disabled: a,
              id: s,
              startAdornment: n ? Pg || (Pg = (0, c.tZ)(d.HoD, { color: "primaries.5" })) : void 0,
              label: (0, c.tZ)(d.nvN, { as: "label", bold: !0, sx: { mb: "4px" }, htmlFor: s }, t)
            },
            iconButtonProps: { disabled: a }
          }),
        Bg = (e) => {
          const t = (0, n.useMemo)(() => {
              var t, a;
              return { draft: null != (t = e?.draft) && t, deviceAccessKey: null != (a = e?.deviceAccessKey) ? a : "" };
            }, [e?.draft, e?.deviceAccessKey]),
            [a, s] = (0, n.useState)(!0),
            [i, o] = (0, n.useState)(null),
            [r, c] = (0, n.useState)(null),
            d = (0, n.useCallback)(async () => {
              try {
                return await ea.C.getTeamDeviceEncryptedConfig(t);
              } catch {
                return { success: !1, error: { code: l.UnknownTeamAdminError } };
              }
            }, [t]),
            u = (0, n.useCallback)(
              async (e = new AbortController()) => {
                e.signal.aborted || s(!0);
                const t = await d();
                return e.signal.aborted || (o(t.success ? null : t.error.code), t.success && c(t.data), s(!1)), t;
              },
              [d]
            ),
            _ = (0, n.useCallback)(async (e) => {
              s(!0);
              try {
                return await ea.C.updateTeamDeviceEncryptedConfig(e);
              } catch {
                return { success: !1, error: { code: l.UnknownTeamAdminError } };
              } finally {
                s(!1);
              }
            }, []);
          return (
            (0, n.useEffect)(() => {
              const e = new AbortController();
              return (
                u(e),
                () => {
                  e.abort();
                }
              );
            }, [u]),
            {
              teamDeviceConfigLoading: a,
              loadTeamDeviceConfigErrorCode: i,
              teamDeviceConfig: r,
              updateTeamDeviceConfig: _,
              refreshTeamDeviceConfig: u
            }
          );
        };
      var Gg, Fg, qg, Vg;
      const { grey00: $g } = d.colors,
        Wg = "team_settings_es_sso_setup_header",
        Hg = "team_settings_domain_fetch_error",
        Kg = { GENERIC_ERROR: "_common_generic_error" },
        Yg = (e) => (e ? `${e}/saml/callback` : ""),
        Qg = "ssoIdpMetadata",
        Xg = () => {
          var e;
          const { translate: t } = (0, p.Z)(),
            { teamId: a } = (0, zo.fV)(),
            { updateTeamDeviceConfig: s } = Bg(),
            [o, r] = (0, n.useState)(!1),
            [u, _] = (0, n.useState)(!1),
            [m, g] = (0, n.useState)([]),
            b = (0, n.useRef)(null),
            [h, x] = (0, n.useState)(!1),
            [S, v] = (0, n.useState)(""),
            { teamSettings: f = {}, teamSettingsLoading: C } = Tc(a),
            { ssoIdpMetadata: E, ssoServiceProviderUrl: Z = "" } = f,
            T = (0, i.k6)(),
            N = (0, n.useCallback)(async () => {
              try {
                v("");
                const e = await ea.C.getTeamDomains();
                if (e.success) {
                  const t = e.domains.length ? e.domains : [];
                  g([...t, { name: "", id: 0 }]);
                } else v(t(Hg));
              } catch (a) {
                var e;
                v(null != (e = a.message) ? e : t(Hg));
              }
            }, [t]);
          (0, n.useEffect)(() => {
            x(!0), N().then(() => x(!1));
          }, [N]);
          const D = { domains: m, ssoIdpMetadata: null != (e = null != E ? E : b.current?.value) ? e : "" },
            M = () => T.goBack();
          return C || h
            ? (0, c.tZ)(
                d.Zbd,
                null,
                (0, c.tZ)(d.Ol2, null, t(Wg)),
                Gg ||
                  (Gg = (0, c.tZ)(
                    d.aYP,
                    null,
                    (0, c.tZ)(d.Ejs, { fullWidth: !0, justifyContent: "center" }, (0, c.tZ)(d.HoD, { size: 60, color: "primaries.5" }))
                  ))
              )
            : (0, c.tZ)(
                La.J9,
                {
                  onSubmit: async (e, a) => {
                    try {
                      var n;
                      r(!0), _(!1);
                      const i = await s({
                        ssoEnabled: !0,
                        [Qg]: e[Qg],
                        connectorEndpoint: Z || void 0,
                        teamDeviceUrl: null != (n = f.ssoServiceProviderUrl) ? n : void 0
                      });
                      if (!i.success) {
                        const e = i.error.code.toUpperCase();
                        if ("DEACTIVATED_TEAM_DEVICE" === e) return;
                        const n = t(Kg[e] ? Kg[e] : Kg.GENERIC_ERROR);
                        return void a.setFieldError(Qg, n);
                      }
                      if (i.data.encryptionServiceReloadingStatus !== l.EncryptionServiceRestartStatusCodes.OK) return void _(!0);
                      M();
                    } catch (e) {
                      a.setFieldError(Qg, t(Kg.GENERIC_ERROR));
                    } finally {
                      r(!1);
                    }
                  },
                  initialValues: D,
                  enableReinitialize: !0
                },
                ({ isSubmitting: e, dirty: a }) => {
                  return (0, c.tZ)(
                    La.l0,
                    { autoComplete: "off", noValidate: !0 },
                    (0, c.tZ)(Wp.X, { dirty: a && !o && !u }),
                    (0, c.tZ)(
                      d.Zbd,
                      null,
                      (0, c.tZ)(d.Ol2, null, t(Wg)),
                      (0, c.tZ)(
                        d.aYP,
                        null,
                        (0, c.tZ)(jg, { fieldArrayName: "domains", domainLoadError: S, refreshDomains: N }),
                        Fg || (Fg = (0, c.tZ)("hr", null)),
                        (0, c.tZ)(y.ke, { title: t.markup("team_settings_es_sso_setup_copy_info_to_idp_markup"), sx: { mb: "32px" } }),
                        (0, c.tZ)(
                          d.T5p,
                          { justifyContent: "stretch", gridTemplateColumns: "auto", gap: "32px", gridAutoRows: "auto" },
                          (0, c.tZ)(Ug, {
                            id: "entity-id-input",
                            inputValue: ((n = Z), n ? `${n}/saml/` : ""),
                            labelText: t("team_settings_es_sso_entity_id_label"),
                            disabled: C || !Z,
                            loading: C
                          }),
                          (0, c.tZ)(Ug, {
                            id: "acs-url-input",
                            inputValue: Yg(Z),
                            labelText: t("team_settings_es_sso_acs_url_label"),
                            disabled: C || !Z,
                            loading: C
                          })
                        ),
                        qg || (qg = (0, c.tZ)("hr", null)),
                        (0, c.tZ)(
                          d.nvN,
                          { as: "label", bold: !0, htmlFor: "sso-metadata-input" },
                          t("team_settings_es_sso_metadata_label")
                        ),
                        (0, c.tZ)(
                          d.nvN,
                          { size: "small", color: $g, sx: { mt: "8px", mb: "24px" } },
                          t("team_settings_es_sso_metadata_description")
                        ),
                        (0, c.tZ)(La.gN, { name: Qg }, ({ field: e, meta: { error: t, touched: a } }) =>
                          (0, c.tZ)(d.oil, {
                            id: "sso-metadata-input",
                            sx: { height: "10em", resize: "vertical" },
                            ...e,
                            ref: b,
                            multiline: !0,
                            fullWidth: !0,
                            feedbackText: a && t ? t : void 0,
                            feedbackType: a && t ? "error" : void 0
                          })
                        )
                      ),
                      (0, c.tZ)(
                        d.eWM,
                        null,
                        u
                          ? (0, c.tZ)(
                              d.Ejs,
                              { sx: { flexGrow: 1, justifyContent: "center" } },
                              Vg || (Vg = (0, c.tZ)(Jp, { context: "SSO" }))
                            )
                          : null,
                        (0, c.tZ)(
                          d.zxk,
                          { disabled: e, nature: "secondary", size: "large", type: "button", onClick: M },
                          t("team_settings_es_sso_setup_cancel")
                        ),
                        (0, c.tZ)(
                          d.zxk,
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
        { grey00: Jg } = d.colors,
        ey = "team_settings_enable_sso_test_button",
        ty = ({ actionsDisabled: e, ssoServiceProviderUrl: t }) => {
          const { translate: a } = (0, p.Z)(),
            n = t ? `${t}/saml/login?redirect=test_idp` : "";
          return (0, c.tZ)(
            d.T5p,
            { gap: "8px", gridTemplateAreas: "'header buttons' 'description buttons' ", gridTemplateColumns: "1fr auto" },
            (0, c.tZ)(
              d.dDn,
              { as: d.nvN, innerAs: "h3", size: "large", bold: !0, gridArea: "header" },
              a("team_settings_enable_sso_test_title")
            ),
            (0, c.tZ)(
              d.dDn,
              { gridArea: "description", as: d.nvN, size: "small", color: Jg },
              a("team_settings_enable_sso_test_description")
            ),
            (0, c.tZ)(
              d.T5p,
              { gap: "8px", gridTemplateAreas: "'test copy'", as: d.dDn, gridArea: "buttons" },
              (0, c.tZ)(
                d.dDn,
                { gridArea: "test" },
                (0, c.tZ)(
                  Kd.M,
                  {
                    onClick: () => {
                      (0, z.Yo)(n);
                    },
                    size: "medium",
                    "aria-label": a(ey),
                    disabled: null != e ? e : !n,
                    content: a("team_settings_es_sso_setup_incomplete")
                  },
                  a(ey),
                  (0, c.tZ)(d.RTC, { sx: { ml: "4px" }, color: "white" })
                )
              ),
              (0, c.tZ)(
                d.dDn,
                { gridArea: "copy" },
                (0, c.tZ)(Eu.q, {
                  buttonText: a("team_settings_copy_sso_url_button"),
                  disabled: null != e ? e : !n,
                  copyValue: null != n ? n : ""
                })
              )
            )
          );
        },
        ay = ({ closeDialog: e }) => {
          const { translate: t } = (0, p.Z)();
          return n.createElement(
            G.o,
            {
              isOpen: !0,
              onRequestClose: () => e(Zl.dismiss),
              footer: n.createElement(d.cNS, {
                primaryButtonTitle: t("team_settings_enable_sso_dialog_disable_action"),
                primaryButtonOnClick: () => e(Zl.action),
                secondaryButtonTitle: t("team_settings_enable_sso_cancel"),
                secondaryButtonOnClick: () => e(Zl.dismiss),
                intent: "danger"
              }),
              title: t("team_settings_enable_sso_dialog_disable_title")
            },
            t("team_settings_enable_sso_dialog_disable_description")
          );
        };
      var ny,
        sy = a(821789);
      const { grey00: iy } = d.colors,
        oy = ({ actionsDisabled: e, ssoEnabled: t, updateTeamSettings: a, loading: s }) => {
          const { translate: i } = (0, p.Z)(),
            [r, l] = (0, n.useState)(!1),
            [u, _] = (0, n.useState)(!1),
            m = (0, Ra.V)(),
            { initSsoProvisioning: g } = (0, Fe.u)(sy.y),
            { teamId: b } = (0, zo.fV)(),
            h = () => {
              m.showAlert(
                t
                  ? i("_common_generic_error")
                  : i.markup("team_settings_enable_sso_action_toggle_warning_markup", void 0, { linkTarget: "_blank" }),
                d.BLW.ERROR
              );
            };
          return (0, c.tZ)(
            n.Fragment,
            null,
            (0, c.tZ)(
              d.T5p,
              { gap: "8px", gridTemplateAreas: "'header buttons' 'description toggle' ", gridTemplateColumns: "1fr auto" },
              (0, c.tZ)(
                d.dDn,
                { as: d.nvN, innerAs: "h3", size: "large", bold: !0, gridArea: "header" },
                i("team_settings_enable_sso_action_title")
              ),
              (0, c.tZ)(
                d.dDn,
                { gridArea: "description", as: d.nvN, size: "small", color: iy },
                i("team_settings_enable_sso_action_description"),
                ny || (ny = (0, c.tZ)("br", null)),
                i("team_settings_enable_sso_action_description_note")
              ),
              (0, c.tZ)(
                d.dDn,
                { gridArea: "toggle" },
                (0, c.tZ)(y.ZD, {
                  disabled: e || s,
                  checked: t,
                  onChange: async () => {
                    t ? l(!0) : (_(!0), Vm({ ssoSetupStep: o.SsoSetupStep.TurnOnSso }));
                  }
                })
              )
            ),
            r
              ? (0, c.tZ)(ay, {
                  closeDialog: async (e) => {
                    if ((l(!1), e !== Zl.dismiss && b))
                      try {
                        const e = !t;
                        await a({ ssoEnabled: e }), await g({ teamId: b });
                      } catch (e) {
                        h();
                      }
                  }
                })
              : null,
            u
              ? (0, c.tZ)(gp, {
                  title: i("team_settings_enable_sso_confirm_dialog_title"),
                  body: i("team_settings_enable_sso_confirm_dialog_body"),
                  primaryActionLabel: i("team_settings_enable_sso_confirm_dialog_primary_action_label"),
                  onCancel: () => {
                    _(!1);
                  },
                  onConfirm: async () => {
                    await (async () => {
                      if (b)
                        try {
                          await a({ ssoEnabled: !0 }), await g({ teamId: b }), Vm({ ssoSetupStep: o.SsoSetupStep.CompleteSsoSetup });
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
      var ry;
      const { grey00: ly } = d.colors;
      var cy = (function (e) {
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
      })(cy || {});
      const dy = [Pm.s5.enum.NitroComplete, Pm.s5.enum.NitroIncomplete],
        uy = ({ disableSetupButton: e, isSsoCapable: t }) => {
          var a;
          const { translate: s } = (0, p.Z)(),
            { teamId: o } = (0, zo.fV)(),
            { teamSettings: r = {}, updateTeamSettings: l, teamSettingsLoading: u } = Tc(o),
            { ssoEnabled: _ = !1, ssoServiceProviderUrl: m = "", ssoIdpMetadata: g } = r,
            [y, b] = (0, n.useState)(cy.UNKNOWN),
            h = (0, qe.k)(Um.y, "ssoProvisioning"),
            x = null != (a = h.data?.global.inferredSsoState) ? a : Pm.s5.enum.Unknown;
          (0, n.useEffect)(() => {
            b(cy.LOADING),
              ea.C.getTeamDomains().then((e) => {
                if (!e.success) return void b(cy.ERROR);
                const t = dy.includes(x);
                if (!m || t) return void b(cy.UNAVAILABLE);
                const a = e.domains.some(({ status: e }) => "valid" === e),
                  n = e.domains.length > 0,
                  s = !!g;
                switch (!0) {
                  case a && s:
                    b(cy.COMPLETE);
                    break;
                  case (!n && s) || (n && !s) || (!a && n && s):
                    b(cy.INCOMPLETE);
                    break;
                  case !n && !s:
                    b(cy.NOT_STARTED);
                }
              });
          }, [x, g, m]);
          const S = y === cy.UNAVAILABLE || u || e,
            { path: v } = (0, i.$B)(),
            f = (0, i.k6)(),
            C = [cy.COMPLETE, cy.INCOMPLETE].includes(y);
          return (0, c.tZ)(
            d.Zbd,
            null,
            (0, c.tZ)(
              d.T5p,
              {
                as: d.aYP,
                gridTemplateAreas: "'header button' 'description button'",
                gridTemplateColumns: "1fr auto",
                gap: "8px",
                sx: { bg: "white", border: "none" }
              },
              (0, c.tZ)(
                d.dDn,
                { as: d.nvN, innerAs: "h3", size: "large", bold: !0, gridArea: "header" },
                s("team_settings_es_sso_setup_header")
              ),
              (0, c.tZ)(
                d.dDn,
                { gridArea: "description", as: d.nvN, size: "small", color: ly },
                s("team_settings_es_sso_setup_description")
              ),
              (0, c.tZ)(
                d.dDn,
                { gridArea: "button", alignSelf: "center" },
                (0, c.tZ)(
                  Kd.M,
                  {
                    id: "ssoSetupButton",
                    loading: u || y === cy.LOADING,
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
              ? (0, c.tZ)(
                  d.aYP,
                  { sx: { bg: "white" } },
                  (0, c.tZ)(ty, { actionsDisabled: y !== cy.COMPLETE, ssoServiceProviderUrl: m }),
                  ry || (ry = (0, c.tZ)("br", null)),
                  (0, c.tZ)(oy, { actionsDisabled: y !== cy.COMPLETE, ssoEnabled: _, loading: u, updateTeamSettings: l })
                )
              : null
          );
        };
      var _y, my, py;
      const { dashDarkerGreen00: gy, dashGreen00: yy, dashGreen06: by, midGreen00: hy } = d.colors,
        xy = ({ backRoute: e }) => {
          const { translate: t } = (0, p.Z)(),
            { path: a } = (0, i.$B)(),
            { esConfig: n, esConfigLoading: s, refreshEncryptionServiceConfig: r } = $p(),
            { teamId: l } = (0, zo.fV)(),
            { teamSettings: u, updateTeamSettings: _, teamSettingsLoading: m } = Tc(l),
            { status: g, data: b } = (0, qe.k)(Um.y, "ssoProvisioning");
          if (g !== je.rq.Success) return null;
          const {
              global: { ssoCapable: h, inferredSsoState: x },
              enableSSO: { ssoEnabled: S }
            } = b,
            v = x === Pm.s5.enum.NitroIncomplete,
            f = !S,
            C = x === Pm.s5.enum.SsoConnectorToSelfHostedMigration;
          return (0, c.tZ)(
            d.T5p,
            { gridTemplateColumns: "auto", gridTemplateRows: "auto 1fr", fullWidth: !0, sx: { height: "100%" } },
            (0, c.tZ)(
              "div",
              { sx: { bg: by, px: "48px", pt: "32px", pb: "4px" } },
              (0, c.tZ)(hi, { title: t("team_settings_es_sso_title") }),
              f
                ? (0, c.tZ)(
                    d.rUS,
                    {
                      color: hy,
                      hoverColor: yy,
                      activeColor: gy,
                      onClick: () => {
                        Vm({ ssoSetupStep: o.SsoSetupStep.ReturnToSsoSelection }), (0, i.uX)(e);
                      },
                      sx: { fontSize: "16px", display: "flex", textDecoration: "none", marginTop: "-18px" }
                    },
                    (0, c.tZ)(y.JO, { name: "ArrowLeftOutlined", size: "small", color: yy, sx: { marginRight: "10px" } }),
                    " ",
                    "Back"
                  )
                : null
            ),
            (0, c.tZ)(Gu, {
              mainContent: d.T5p,
              mainProps: {
                gridTemplateColumns: "auto",
                gridAutoRows: "min-content",
                gap: "32px",
                children: (0, c.tZ)(
                  i.rs,
                  null,
                  (0, c.tZ)(
                    i.AW,
                    { exact: !0, path: a },
                    (0, c.tZ)(Jm, { pageContext: Xm.SelfHosted, onSetupClear: () => _({ ssoServiceProviderUrl: null }) }),
                    _y || (_y = (0, c.tZ)(Jp, null)),
                    C
                      ? (0, c.tZ)(y.ke, {
                          title: t("team_settings_es_sso_migration_infobox_title"),
                          description: t("team_settings_es_sso_migration_infobox_body")
                        })
                      : null,
                    (0, c.tZ)(Eg, { loading: s || null === h, esConfig: n, parentPath: a, disableSetupButton: !h || v }),
                    (0, c.tZ)(uy, { isSsoCapable: h, disableSetupButton: !h || !n?.config })
                  ),
                  (0, c.tZ)(
                    i.AW,
                    { path: `${a}/encryption-service-settings` },
                    s || m
                      ? my || (my = (0, c.tZ)(d.HoD, null))
                      : (0, c.tZ)(hg, {
                          migratingFromSSOConnector: C,
                          onSave: () => r(),
                          teamSettings: u,
                          updateTeamSettings: _,
                          esConfig: n
                        })
                  ),
                  (0, c.tZ)(i.AW, { path: `${a}/sso-settings` }, py || (py = (0, c.tZ)(Xg, null)))
                )
              },
              secondaryContent: pl,
              secondaryProps: {
                description: t("team_settings_es_sso_setup_guide_description"),
                heading: t("team_settings_es_sso_setup_guide_heading"),
                linkText: t("team_settings_es_sso_setup_guide_link_text"),
                linkProps: { linkType: ml.ExternalLink, linkHref: "https://support.dashlane.com/hc/articles/360013149040" }
              }
            })
          );
        },
        Sy = ({ closeDialog: e }) => {
          const { translate: t } = (0, p.Z)(),
            a = t.markup("team_settings_sso_desktop_infobox_warning_markup", { learnMore: oe.rh }, { linkTarget: "_blank" });
          return n.createElement(
            d.VqE,
            { closeIconName: t("_common_dialog_dismiss_button"), isOpen: !0, onClose: () => e(Zl.dismiss) },
            n.createElement(
              "div",
              { className: "container--m6KmsQvg_3" },
              n.createElement(d.$N8, { title: t("team_settings_enable_sso_dialog_activate_title") }),
              n.createElement(
                d.a7O,
                null,
                n.createElement(
                  "div",
                  { className: "toggleInfoBox--y5TmWAMYcl" },
                  a && n.createElement(d.vDh, { severity: "warning", size: "small", title: a })
                )
              ),
              n.createElement(d.cNS, {
                primaryButtonOnClick: () => e(Zl.action),
                primaryButtonTitle: t("team_settings_enable_sso_dialog_activate_action"),
                secondaryButtonOnClick: () => e(Zl.dismiss),
                secondaryButtonTitle: t("team_settings_enable_sso_cancel")
              })
            )
          );
        },
        vy = ({ closeDialog: e }) => {
          const { translate: t } = (0, p.Z)();
          return n.createElement(
            G.o,
            {
              isOpen: !0,
              onRequestClose: () => e(Zl.dismiss),
              footer: n.createElement(d.cNS, {
                primaryButtonTitle: t("team_settings_enable_sso_dialog_disable_action"),
                primaryButtonOnClick: () => e(Zl.action),
                secondaryButtonTitle: t("team_settings_enable_sso_cancel"),
                secondaryButtonOnClick: () => e(Zl.dismiss),
                intent: "danger"
              }),
              title: t("team_settings_enable_sso_dialog_disable_title")
            },
            t("team_settings_enable_sso_dialog_disable_description")
          );
        },
        fy = ({ teamSettings: e, updateTeamSettings: t, teamId: a, planTier: s, setStepComplete: i }) => {
          var o;
          const [r, l] = (0, n.useState)(null != (o = e?.ssoEnabled) && o),
            [c, u] = (0, n.useState)(!1),
            [_, m] = (0, n.useState)(!1),
            [g, y] = (0, n.useState)([]),
            [b, h] = (0, n.useState)(!1);
          (0, n.useEffect)(() => {
            if (!r) return "legacy" === s || "team" === s ? h(!0) : void 0;
            i(Cl.EnableSSO);
          }, [a, g, r, s, i]),
            (0, n.useEffect)(() => {
              (async () => {
                const e = await ea.C.getTeamDomains();
                e.success && y(e.domains.filter((e) => "valid" === e.status).map((e) => e.name));
              })();
            }, []);
          const { translate: x } = (0, p.Z)(),
            S = async (e) => {
              if ((m(!1), e !== Zl.dismiss))
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
              fl,
              { label: x("team_settings_enable_sso_test_title"), labelHelper: x("team_settings_enable_sso_test_description") },
              n.createElement(
                d.zxk,
                {
                  type: "button",
                  nature: "primary",
                  onClick: () => {
                    (0, z.Yo)(`${e?.ssoServiceProviderUrl}/saml/login?redirect=test_idp`);
                  },
                  disabled: !(e && e.ssoServiceProviderUrl)
                },
                x("team_settings_enable_sso_test_button")
              )
            ),
            n.createElement(
              fl,
              { label: x("team_settings_enable_sso_action_title"), labelHelper: x("team_settings_enable_sso_action_description") },
              b
                ? n.createElement(
                    d.zxk,
                    { nature: "primary", onClick: () => (0, z.Yo)(oe.Bw), type: "button" },
                    x("team_settings_enable_sso_contact_support")
                  )
                : n.createElement(
                    "div",
                    null,
                    n.createElement(d.ZDl, { onClick: () => m(!0), checked: r, disabled: c }),
                    r
                      ? n.createElement(
                          "div",
                          { className: "toggleDescription--S3OccP6JDd" },
                          x("team_settings_enable_sso_action_toggle_description")
                        )
                      : null,
                    c
                      ? n.createElement(
                          "div",
                          { className: "toggleWarning--TU8a__FJDp" },
                          x.markup("team_settings_enable_sso_action_toggle_warning_markup")
                        )
                      : null
                  )
            ),
            _ ? (r ? n.createElement(vy, { closeDialog: S }) : n.createElement(Sy, { closeDialog: S })) : null
          );
        };
      var Cy = a(107274);
      const Ey = ({ isTeamSettingsLoading: e, teamSettings: t }) => {
        const { translate: a } = (0, p.Z)(),
          [s, i] = n.useState(""),
          [o, r] = n.useState(""),
          [l, c] = n.useState(""),
          d = t?.ssoServiceProviderUrl;
        return (
          n.useEffect(() => {
            !e && d && (i((0, Cy.UQ)(d, "saml")), r((0, Cy.UQ)(d, "saml/")), c((0, Cy.UQ)(d, "saml/callback")));
          }, [e, d]),
          n.createElement(
            "div",
            { className: "configureIDPContainer--ACoVdM7s0N" },
            n.createElement(
              fl,
              { label: a("team_settings_configure_idp_connector_metadata"), centerLabel: !0 },
              n.createElement(Pl.x, { inputValue: s, textInputProps: { fullWidth: !0, readOnly: !0 } })
            ),
            n.createElement(
              fl,
              { label: a("team_settings_configure_idp_entity_id"), centerLabel: !0 },
              n.createElement(Pl.x, { inputValue: o, textInputProps: { fullWidth: !0, readOnly: !0 } })
            ),
            n.createElement(
              fl,
              { label: a("team_settings_configure_idp_login_url"), centerLabel: !0 },
              n.createElement(Pl.x, { inputValue: l, textInputProps: { fullWidth: !0, readOnly: !0 } })
            )
          )
        );
      };
      var Zy = a(798783),
        Ty = a.n(Zy);
      const Ny = "connectorInfoContainer--e07d9cT8Hu",
        Dy = "textField--Nk7DpcX8Pp",
        My = "loading--sfYFOqhXPS",
        Iy = "installerButtonContainer--iP6MNTnQrn",
        Ay = "errorText--snbBoX2meA",
        wy = ({ keyValue: e, onGenerateClicked: t, isGeneratorDisabled: a, generatorDisabledText: s }) => {
          const { translate: i } = (0, p.Z)(),
            [o, r] = (0, n.useState)(!1),
            l = (0, n.useRef)(null);
          return (
            (0, n.useEffect)(() => {
              l.current && new (Ty())(l.current, { text: () => e });
            }, [e]),
            (0, c.tZ)(
              fl,
              { label: i("team_settings_connector_generator_title"), labelHelper: i("team_settings_connector_generator_description") },
              (0, c.tZ)(
                "div",
                { className: "generatorContainer--_83Buo4tVF" },
                (0, c.tZ)(
                  d.ua7,
                  { content: s, passThrough: !a, sx: { maxWidth: "210px" } },
                  (0, c.tZ)(
                    "div",
                    { className: a ? "generatorDisableContent--Olv4UpdAqY" : "" },
                    (0, c.tZ)(
                      d.zxk,
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
                    (0, c.tZ)(
                      "div",
                      { className: "generatorInputContainer--M4lkXUrCCY" },
                      (0, c.tZ)(Pl.x, {
                        inputValue: e,
                        textInputProps: { readOnly: !0, fullWidth: !0, disabled: a, style: { cursor: a ? "not-allowed" : "text" } },
                        tooltipProps: { passThrough: a },
                        iconButtonProps: { disabled: a }
                      })
                    ),
                    o && (0, c.tZ)("p", { id: "errorKeyWarning", className: Ay }, i("team_settings_connector_generator_warning"))
                  )
                )
              )
            )
          );
        },
        ky = "team_settings_connector_installer_tooltip",
        Oy = ({ isTeamSettingsLoading: e, isSsoEnabled: t, idpMetadata: a, connectorUrl: s }) => {
          const { translate: i } = (0, p.Z)(),
            [o, r] = (0, n.useState)(""),
            [l, u] = (0, n.useState)("");
          (0, n.useEffect)(() => {
            r("");
          }, [a, s]);
          const _ = Boolean(a && s && (l || t));
          return (0, c.tZ)(
            n.Fragment,
            null,
            (0, c.tZ)(wy, {
              keyValue: l,
              onGenerateClicked: async () => {
                const e = await ea.C.generateSSOConnectorKey();
                u(e);
              },
              isGeneratorDisabled: t,
              generatorDisabledText: i("team_settings_connector_generator_instance_help")
            }),
            (0, c.tZ)(
              fl,
              { label: i("team_settings_connector_installer_title"), labelHelper: i("team_settings_connector_installer_description") },
              (0, c.tZ)(
                "div",
                { className: e ? My : Iy },
                (0, c.tZ)(
                  d.ua7,
                  { content: i(ky), passThrough: _, sx: { maxWidth: "210px" } },
                  (0, c.tZ)(
                    d.zxk,
                    {
                      type: "button",
                      "aria-describedby": "configError",
                      disabled: !_,
                      onClick: async () => {
                        r("");
                        const e = await ea.C.createSSOConnectorConfig({ connectorUrl: s, connectorKey: l, idpMetadata: a });
                        e.success ? (0, Zi.S)(e.config, "dashlane-sso-config.txt", "text/plain") : e.success || r(e.error.code);
                      }
                    },
                    (0, c.tZ)("div", { className: "downloadIcon--dtf6SHkd51" }, (0, c.tZ)(d._8t, { color: hl()["--white"] })),
                    i("team_settings_connector_installer_config_button")
                  ),
                  o ? (0, c.tZ)("p", { id: "configError", className: Ay }, i("team_settings_connector_installer_error")) : null
                )
              )
            ),
            (0, c.tZ)(
              fl,
              {
                label: i("team_settings_connector_installer_setup_title"),
                labelHelper: i("team_settings_connector_installer_setup_description")
              },
              (0, c.tZ)(
                "div",
                { className: e ? My : Iy },
                (0, c.tZ)(
                  d.ua7,
                  { content: i(ky), passThrough: _, sx: { maxWidth: "210px" } },
                  (0, c.tZ)(
                    d.zxk,
                    { type: "button", disabled: !_, onClick: () => (0, z.Yo)(oe.nC) },
                    (0, c.tZ)("div", { className: "openIcon--Jft6n3KJTS" }, (0, c.tZ)(d.RTC, { color: hl()["--white"] })),
                    i("team_settings_connector_installer_button")
                  )
                )
              )
            )
          );
        },
        Ly = "team_settings_connector_edit",
        zy = "team_settings_connector_save",
        Ry = "team_settings_connector_saving",
        jy = "team_settings_connector_success",
        Py = ({ isTeamSettingsLoading: e, saveConnectorURL: t, saveIdpMetadata: a, teamSettings: s }) => {
          var i, o;
          const { translate: r } = (0, p.Z)();
          return n.createElement(
            n.Fragment,
            null,
            n.createElement(
              fl,
              { label: r("team_settings_connector_metadata_title") },
              n.createElement(
                "div",
                { className: Ny },
                n.createElement(dn.X, {
                  isDisabled: e,
                  multiLine: !0,
                  defaultValue: null != (i = s?.ssoIdpMetadata) ? i : "",
                  saveBtnLabel: r(zy),
                  savingBtnLabel: r(Ry),
                  editBtnLabel: r(Ly),
                  placeholder: r("team_settings_connector_metadata_placeholder"),
                  successMessage: r(jy),
                  onSave: a,
                  inputFieldClassName: "inputField--SXqAbTX3lX",
                  textFieldClassName: Dy
                })
              )
            ),
            n.createElement(
              fl,
              { label: r("team_settings_connector_url_title"), labelHelper: r("team_settings_connector_url_description") },
              n.createElement(
                "div",
                { className: Ny },
                n.createElement(dn.X, {
                  isDisabled: e,
                  defaultValue: null != (o = s?.ssoServiceProviderUrl) ? o : "",
                  saveBtnLabel: r(zy),
                  savingBtnLabel: r(Ry),
                  editBtnLabel: r(Ly),
                  placeholder: r("team_settings_connector_url_placeholder"),
                  successMessage: r(jy),
                  onSave: t,
                  textFieldClassName: Dy
                })
              )
            )
          );
        },
        Uy = ({ setStepComplete: e, isTeamSettingsLoading: t = !1, teamSettings: a, updateTeamSettings: s }) => {
          var i, o, r;
          const { translate: l } = (0, p.Z)(),
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
                  const t = e ? (0, Cy.Yw)(e) : null;
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
              t || (_ && u && e(Cl.SSOConnector));
            }, [t, u, _, e]),
            n.createElement(
              "div",
              { className: "ssoConnectorContainer--ndf4jAvwn0" },
              n.createElement(Py, { isTeamSettingsLoading: t, teamSettings: a, saveConnectorURL: d, saveIdpMetadata: c }),
              n.createElement(Oy, {
                isTeamSettingsLoading: t,
                isSsoEnabled: null != (i = a?.ssoEnabled) && i,
                idpMetadata: null != (o = a?.ssoIdpMetadata) ? o : "",
                connectorUrl: null != (r = a?.ssoServiceProviderUrl) ? r : ""
              })
            )
          );
        },
        By = ({ lee: e }) => {
          const { translate: t } = (0, p.Z)(),
            [a, s] = (0, n.useState)(new Set()),
            [i, r] = (0, n.useState)(new Set()),
            [l, c] = (0, n.useState)(new Set([El.EnableSSO, El.SSOConnector]));
          (0, n.useEffect)(() => {
            (0, j.Nc)(o.PageView.TacSettingsSsoLegacy);
          }, []),
            (0, n.useEffect)(() => {
              const e = new Set(),
                t = new Set([El.EnableSSO, El.ConfigureIDP, El.SSOConnector]);
              a.has(Cl.ClaimDomain) &&
                a.has(Cl.VerifyDomain) &&
                (e.add(El.SSOConnector),
                e.add(El.ConfigureIDP),
                e.add(El.EnableSSO),
                t.delete(El.SSOConnector),
                t.delete(El.ConfigureIDP),
                t.delete(El.EnableSSO)),
                a.has(Cl.EnableSSO) && (e.delete(El.SSOConnector), e.delete(El.ConfigureIDP)),
                r(e),
                c(t);
            }, [a]);
          const u = (0, n.useCallback)((e) => {
              s((t) => {
                const a = (e) => e.every((e) => t.has(e));
                let n = !0;
                switch (e) {
                  case Cl.EnableSSO | Cl.VerifyDomain:
                    n = !0;
                    break;
                  case Cl.SSOConnector:
                    n = a([Cl.ClaimDomain, Cl.VerifyDomain]);
                    break;
                  case Cl.EnableSSO:
                    n = a([Cl.ClaimDomain, Cl.VerifyDomain, Cl.SSOConnector]);
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
            m = (0, f.ev)(e.globalState),
            { teamSettingsLoading: g, teamSettings: y, updateTeamSettings: b, planTier: h } = Tc(m),
            x = [
              {
                label: t("team_settings_sso_connector_title"),
                component: Uy,
                locked: l.has(El.SSOConnector),
                open: i.has(El.SSOConnector),
                index: 2
              },
              {
                label: t("team_settings_sso_identity_provider_title"),
                component: Ey,
                locked: l.has(El.ConfigureIDP),
                open: i.has(El.ConfigureIDP),
                index: 3
              },
              {
                label: t("team_settings_sso_enable_title"),
                component: fy,
                locked: l.has(El.EnableSSO),
                open: i.has(El.EnableSSO),
                index: 4
              }
            ];
          return n.createElement(
            X_,
            {
              secondaryContent: g
                ? n.createElement(Rs.Z, { containerClassName: "loadingContainer--Qcn7EL4GD5", size: 40 })
                : n.createElement(
                    d.UQy,
                    { size: "large" },
                    x.map((e) =>
                      n.createElement(
                        d.UlM,
                        { open: e.open, key: e.label, readOnly: e.locked },
                        n.createElement(d._Oh, null, `${e.index}. ${e.label}`),
                        n.createElement(
                          d.rN7,
                          null,
                          n.createElement(
                            "fieldset",
                            { disabled: e.locked },
                            n.createElement(e.component, {
                              isTeamSettingsLoading: g,
                              teamSettings: y,
                              setStepComplete: u,
                              updateTeamSettings: b,
                              teamId: null != m ? m : null,
                              planTier: null != h ? h : null
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
              if ("team" === h || "legacy" === h) {
                const e = t.markup("team_settings_sso_teamplan_infobox_warning_markup"),
                  a = t("team_settings_sso_teamplan_infobox_warning_button");
                return n.createElement(
                  "div",
                  { className: "infoBox--w1PtJInNuc" },
                  n.createElement(d.vDh, { title: e, size: "simple", secondaryLabel: a, secondary: () => (0, z.Yo)(oe.Bw) })
                );
              }
              return null;
            })(),
            n.createElement("p", { className: K_.settingsHeader }, t("team_settings_sso_title")),
            n.createElement(
              fl,
              { label: t("team_settings_sso_guide_title"), labelHelper: t("team_settings_sso_guide_description") },
              n.createElement(em.Z, {
                label: t("team_settings_sso_setup_button"),
                onClick: () => {
                  (0, z.Yo)(oe.nC);
                }
              })
            ),
            n.createElement(wl, {
              isTeamSettingsLoading: g,
              teamSettings: y,
              setStepComplete: u,
              uncompleteSteps: _,
              updateTeamSettings: b,
              teamId: m,
              planTier: h
            })
          );
        };
      var Gy = a(818995);
      const Fy = { NONE: 0, IDP_APPLICATION: 1, IDP_METADATA: 2, DOMAIN_NAME: 3, DOMAIN_VERIFICATION: 4, TEST_SSO: 5, ENABLE_SSO: 6 },
        qy = Object.keys(Fy).length - 1,
        Vy = (e, t, a) => `step ${t} of ${a}`,
        $y = ({ nitroStateStatus: e, nitroState: t }) => {
          const { translate: a } = (0, p.Z)();
          if (e !== je.rq.Success || !t) return null;
          const n = ((e) => {
            if (!e.global.isTeamProvisionedInNitro) return Fy.NONE;
            if (e.enableSSO.ssoEnabled) return Fy.ENABLE_SSO;
            const t = e.domainSetup[0]?.domainName;
            return e.domainVerificationInfo[t]?.verificationStatus === Pm.X5.enum?.valid
              ? Fy.DOMAIN_VERIFICATION
              : t
              ? Fy.DOMAIN_NAME
              : e.idpMetadata.metadataValue
              ? Fy.IDP_METADATA
              : e.global.isTeamProvisionedInNitro
              ? Fy.IDP_APPLICATION
              : Fy.NONE;
          })(t);
          return 0 === n
            ? (0, y.tZ)(y.Ct, { label: a("team_new_label"), mood: "brand", intensity: "quiet" })
            : (0, y.tZ)(y.Ct, { label: Vy`${n}${qy}`, mood: "neutral", intensity: "quiet" });
        },
        Wy = ({ backgroundColor: e, withBorder: t, paddingSize: a = "normal", ...n }) =>
          (0, c.tZ)("div", {
            sx: {
              bg: null != e ? e : "ds.container.agnostic.neutral.quiet",
              p: "tight" === a ? "24px" : "32px 24px",
              border: t ? "1px solid #8C8F9033" : void 0,
              borderRadius: 3,
              height: "fit-content"
            },
            ...n
          });
      var Hy, Ky, Yy;
      let Qy = (function (e) {
        return (e.Pro = "pro"), (e.Con = "con"), (e.Soon = "soon"), e;
      })({});
      const Xy = ({ title: e, badge: t, infoList: a, ctaText: n, ctaMuted: s, ctaAction: i, ctaDisabled: o }) =>
          (0, y.tZ)(
            d.T5p,
            { as: Wy, backgroundColor: "ds.background.default", paddingSize: "tight", gridTemplateRows: "auto 1fr auto" },
            (0, y.tZ)(
              d.T5p,
              { gridTemplateColumns: "1fr auto", alignItems: "center", gap: "8px", sx: { mb: "8px" } },
              (0, y.tZ)(d.nvN, { bold: !0, size: "medium" }, e),
              t
            ),
            (0, y.tZ)(
              "ul",
              null,
              a.map((e, t) => {
                var a, n;
                return (0, y.tZ)(
                  d.T5p,
                  {
                    as: "li",
                    key: null != (a = e.text) ? a : t,
                    gridTemplateColumns: "auto 1fr",
                    gap: "8px",
                    sx: { mb: "24px", "&:last-of-type": { mb: "38px" } }
                  },
                  ((e) => {
                    switch (e) {
                      case Qy.Pro:
                        return Hy || (Hy = (0, y.tZ)(y.JO, { name: "CheckmarkOutlined", color: "ds.text.positive.standard" }));
                      case Qy.Con:
                        return Ky || (Ky = (0, y.tZ)(y.JO, { name: "ActionCloseOutlined", color: "ds.text.warning.standard" }));
                      case Qy.Soon:
                        return Yy || (Yy = (0, y.tZ)(d.vFK, { color: "ds.text.warning.standard" }));
                      default:
                        throw new Error("Unexpected branch");
                    }
                  })(e.type),
                  (0, y.tZ)(
                    "div",
                    null,
                    (0, y.tZ)(d.nvN, { color: "ds.text.neutral.standard", size: "medium" }, e.text),
                    e.subtext
                      ? (0, y.tZ)(
                          d.nvN,
                          { color: "ds.text.neutral.standard", size: "x-small", sx: null != (n = e.variation?.subtext) ? n : {} },
                          e.subtext
                        )
                      : null
                  )
                );
              })
            ),
            (0, y.tZ)(
              y.zx,
              { disabled: o, size: "small", intensity: s ? "quiet" : "catchy", mood: "brand", sx: { justifySelf: "start" }, onClick: i },
              n
            )
          ),
        Jy = {
          TITLE: "Self-hosted SSO",
          CTA: "Set up self-hosted SSO",
          CONTINUE_CTA: "Continue setup",
          INFO_LIST: [
            { text: "Zero-knowledge security architecture", type: Qy.Pro },
            { text: "Simplified set-up", subtext: "You’ll need to host and manage the encryption service yourself", type: Qy.Con },
            { text: "Verify multiple domains", type: Qy.Pro },
            { text: "Supports SCIM directory sync", type: Qy.Pro }
          ]
        },
        eb = [
          {
            heading: "What is an encryption service?",
            description:
              "To maintain a zero-knowledge architecture when integrated with SSO or SCIM provisioning, Dashlane requires an additional layer of security we refer to as an encryption service.",
            linkText: "Learn more",
            linkHref: "https://support.dashlane.com/hc/articles/360013149040#encryption?utm_source=extension"
          },
          {
            heading: "What do I need to start?",
            listIntro: "To set up SSO, you’ll need",
            list: [
              "Access to your identity provider (IdP) and public DNS provider accounts",
              "A list of members to add to your SSO application",
              "IdP metadata",
              "Email domain"
            ],
            linkText: "Learn more",
            linkHref: "https://support.dashlane.com/hc/articles/360013149040?utm_source=extension"
          }
        ],
        tb = ({ listIntro: e, list: t }) =>
          (0, y.tZ)(
            "div",
            null,
            (0, y.tZ)(d.nvN, { color: "ds.text.neutral.standard", size: "small" }, e),
            (0, y.tZ)(
              "ul",
              { sx: { listStyleType: "disc", mt: "8px", mb: "24px", ml: "24px" } },
              t.map((e, t) => (0, y.tZ)(d.nvN, { as: "li", size: "small", key: null != e ? e : t }, e))
            )
          ),
        ab = (e) =>
          (0, y.tZ)(
            d.Ejs,
            { gap: "32px", flexDirection: "column", ...e },
            eb.map(({ heading: e, description: t, listIntro: a, list: n, linkText: s, linkHref: i }) => {
              const o = a && n ? (0, y.tZ)(tb, { listIntro: a, list: n }) : t;
              return (0, y.tZ)(pl, {
                linkProps: { linkType: ml.ExternalLink, linkHref: i },
                key: e,
                heading: e,
                description: o,
                linkText: s
              });
            })
          );
      var nb;
      const sb = () => {
        const [e, t] = (0, n.useState)(!1),
          [a, s] = (0, n.useState)(!1),
          { teamId: i } = (0, zo.fV)(),
          { clearSettings: o, initSsoProvisioning: r } = (0, Fe.u)(Um.y);
        return n.createElement(
          d.T5p,
          {
            as: Wy,
            backgroundColor: "ds.background.default",
            paddingSize: "normal",
            gridTemplateRows: "auto 1fr auto",
            justifyItems: "center"
          },
          n.createElement(
            y.nv,
            { color: "ds.text.neutral.standard", textStyle: "ds.body.standard.regular" },
            "Use this button to reset the SSO configuration in case of error"
          ),
          n.createElement(
            y.zx,
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
                  (0, Bm.d6)(e) && i && (await r({ teamId: i }));
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
            ? nb ||
                (nb = n.createElement(
                  y.nv,
                  { color: "ds.text.danger.standard", textStyle: "ds.body.standard.regular" },
                  "Reset has fail, please check the console"
                ))
            : null
        );
      };
      var ib;
      const ob = () => {
          const { path: e } = (0, i.$B)(),
            { teamInfo: t } = (0, _.G)(),
            a = (0, ve.o)("setup_rollout_reset_confidential_button"),
            s = (0, qe.k)(Um.y, "ssoProvisioning"),
            r = (0, qe.k)(Gy.m, "scimConfiguration");
          (0, n.useEffect)(() => {
            (0, j.Nc)(o.Page.TacSso);
          }, []);
          const l = {
            TITLE: "Confidential SSO",
            CTA: "Set up Confidential SSO",
            CONTINUE_CTA: "Continue setup",
            INFO_LIST: [
              { text: "Zero-knowledge security architecture", type: Qy.Pro },
              { text: "Simplified set-up", subtext: "The secure encryption service is hosted on the cloud for you", type: Qy.Pro },
              { text: "Verify multiple domains", type: Qy.Pro },
              { text: "Supports SCIM directory sync", type: Qy.Pro }
            ]
          };
          if (s.status !== je.rq.Success || r.status !== je.rq.Success) return null;
          const { inferredSsoState: c, ssoCapable: u } = s.data.global,
            m = !u || c === Pm.s5.enum.Unknown;
          return (0, y.tZ)(
            d.T5p,
            { gap: "32px", alignContent: "start" },
            (0, y.tZ)(Jm, { pageContext: Xm.ChooseSso }),
            (0, y.tZ)(
              d.T5p,
              { gap: "32px", gridTemplateColumns: "1fr 1fr" },
              (0, y.tZ)(Xy, {
                title: Jy.TITLE,
                infoList: Jy.INFO_LIST,
                ctaText: c === Pm.s5.enum.SelfHostedIncomplete ? Jy.CONTINUE_CTA : Jy.CTA,
                ctaAction: () => {
                  var a;
                  Vm({
                    currentBillingPlanTier: null != (a = t?.planTier) ? a : "business",
                    ssoSetupStep: o.SsoSetupStep.ChooseYourSsoSolution
                  }),
                    (0, i.uX)(`${e}${vb.SELF_HOSTED_SSO}`);
                },
                ctaMuted: c === Pm.s5.enum.NitroIncomplete,
                ctaDisabled: m || c === Pm.s5.enum.NitroComplete || !!r.data.token
              }),
              (0, y.tZ)(Xy, {
                title: l.TITLE,
                badge: (0, y.tZ)($y, { nitroStateStatus: s.status, nitroState: s.data }),
                infoList: l.INFO_LIST,
                ctaText: c === Pm.s5.enum.NitroIncomplete ? l.CONTINUE_CTA : l.CTA,
                ctaAction: () => {
                  var a;
                  $m({
                    currentBillingPlanTier: null != (a = t?.planTier) ? a : "business",
                    ssoSetupStep: o.SsoSetupStep.ChooseYourSsoSolution
                  }),
                    (0, i.uX)(`${e}${vb.CONFIDENTIAL_SSO}`);
                },
                ctaMuted: c === Pm.s5.enum.SelfHostedIncomplete,
                ctaDisabled: m || c === Pm.s5.enum.SelfHostedComplete
              })
            ),
            a ? ib || (ib = (0, y.tZ)(sb, null)) : null
          );
        },
        rb = () =>
          (0, y.tZ)(
            d.T5p,
            { gridTemplateColumns: "auto", gridTemplateRows: "auto 1fr", alignItems: "start", fullWidth: !0 },
            (0, y.tZ)(
              "div",
              { sx: { px: "48px", pt: "32px", pb: "4px" } },
              (0, y.tZ)(hi, { title: "Choose your single sign-on (SSO) configuration" })
            ),
            (0, y.tZ)(Gu, { mainContent: ob, secondaryContent: ab, sx: { bg: "ds.container.agnostic.neutral.quiet", pt: "0px" } })
          ),
        lb = (e) => {
          const { translate: t } = (0, p.Z)();
          return (0, y.tZ)(pl, {
            supportHeading: t("team_settings_contact_us_support_header"),
            heading: t("team_settings_contact_us_heading"),
            description: t("team_settings_contact_us_description"),
            linkText: t("team_settings_contact_us_link_title"),
            linkProps: { linkType: ml.InternalLink, internalAction: e }
          });
        };
      var cb = a(886910);
      const db = { ITEM: { display: "flex", flexDirection: "row", alignItems: "flex-start", gap: "16px" } },
        ub = ({ iconName: e, title: t, subtitle: a }) => {
          const { translate: n } = (0, p.Z)();
          return (0, y.tZ)(
            "div",
            { sx: db.ITEM },
            (0, y.tZ)(y.JO, { name: e, size: "xlarge" }),
            (0, y.tZ)(
              "div",
              null,
              (0, y.tZ)(y.nv, { textStyle: "ds.title.block.medium", sx: { marginBottom: "5px" } }, n(t)),
              (0, y.tZ)(y.nv, { textStyle: "ds.body.reduced.regular", color: "ds.text.neutral.quiet" }, n(a))
            )
          );
        };
      var _b;
      const mb = {
          WHATS_SSO: { i18nKey: "team_settings_sso_paywall_whats_sso", url: oe.Tz },
          ZERO_KNOWLEDGE: { i18nKey: "team_settings_sso_paywall_zero_knowledge", url: oe.mn },
          MULTI_DOMAINS: { i18nKey: "team_settings_sso_paywall_multi_domains", url: oe.I9 },
          SELF_HOSTED: { i18nKey: "team_settings_sso_paywall_self_hosted", url: oe.bx },
          CONFIDENTIAL_SSO: { i18nKey: "team_settings_sso_paywall_confidential_sso", url: oe.Fn },
          IDENTITY_PROVIDER: { i18nKey: "team_settings_sso_paywall_identity_provider", url: oe.HX },
          HELP_CENTER: { i18nKey: "team_settings_sso_paywall_helper_center", url: oe.Tx }
        },
        pb = {
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
        gb = ({ isTrialOrGracePeriod: e }) => {
          const [t, a] = (0, n.useState)(!1);
          (0, n.useEffect)(() => {
            (0, j.Nc)(o.PageView.TacSsoPaywall);
          }, []);
          const s = () => a(!0);
          return (0, y.tZ)(
            n.Fragment,
            null,
            (0, y.tZ)(Gu, {
              mainContent: d.T5p,
              mainProps: {
                gridTemplateColumns: "auto",
                gridAutoRows: "min-content",
                gap: "32px",
                children: () =>
                  ((e) => {
                    const { translate: t } = (0, p.Z)(),
                      { routes: a } = (0, i.Xo)(),
                      n = (0, O.B)();
                    return (0, y.tZ)(
                      d.T5p,
                      { gap: "32px", alignContent: "start", sx: pb.CONTAINER },
                      (0, y.tZ)(
                        "div",
                        { sx: pb.HEADER },
                        (0, y.tZ)(y.Ct, {
                          iconName: "PremiumOutlined",
                          layout: "iconLeading",
                          label: t("team_settings_sso_paywall_business_badge"),
                          mood: "brand",
                          intensity: "quiet"
                        }),
                        (0, y.tZ)(y.nv, { textStyle: "ds.title.section.large" }, t("team_settings_sso_paywall_title")),
                        (0, y.tZ)(
                          y.nv,
                          { textStyle: "ds.body.standard.regular", color: "ds.text.neutral.quiet" },
                          t("team_settings_sso_paywall_description")
                        )
                      ),
                      (0, y.tZ)(
                        "div",
                        { sx: pb.ITEMS },
                        (0, y.tZ)(ub, {
                          iconName: "ProtectionOutlined",
                          title: "team_settings_sso_paywall_user_experience_item",
                          subtitle: "team_settings_sso_paywall_user_experience_description"
                        }),
                        (0, y.tZ)(ub, {
                          iconName: "FeatureDarkWebMonitoringOutlined",
                          title: "team_settings_sso_paywall_transparency_item",
                          subtitle: "team_settings_sso_paywall_transparency_description"
                        }),
                        (0, y.tZ)(ub, {
                          iconName: "AccountSettingsOutlined",
                          title: "team_settings_sso_paywall_access_item",
                          subtitle: "team_settings_sso_paywall_access_description"
                        }),
                        (0, y.tZ)(ub, {
                          iconName: "ToolsOutlined",
                          title: "team_settings_sso_paywall_confidential_sso_item",
                          subtitle: "team_settings_sso_paywall_confidential_sso_description"
                        })
                      ),
                      (0, y.tZ)(
                        "div",
                        { sx: pb.ACTIONS },
                        _b || (_b = (0, y.tZ)(cb.a, { dropdownItems: mb, titleKey: "team_settings_sso_paywall_learn_more" })),
                        (0, y.tZ)(
                          y.zx,
                          {
                            mood: "brand",
                            intensity: "catchy",
                            icon: "PremiumOutlined",
                            layout: "iconLeading",
                            role: e ? "link" : void 0,
                            onClick: () => {
                              var t;
                              (0, j.Kz)(
                                new o.UserClickEvent({ button: o.Button.UpgradeBusinessTier, clickOrigin: o.ClickOrigin.SsoPaywallPage })
                              ),
                                e
                                  ? (0, z.Yo)(
                                      `${oe.ub}?plan=business&subCode=${
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
              withDefaultBackground: !0,
              secondaryContent: () => lb(s)
            }),
            t ? (0, y.tZ)(ge, { onDismiss: () => a(!1) }) : null
          );
        },
        yb = {
          CouldNotGetTeamStatus: "COULD_NOT_GET_TEAM_STATUS",
          TeamIdNotFound: "TEAM_ID_NOT_FOUND",
          UserNotAuthorized: "USER_NOT_AUTHORIZED",
          InvalidSsoState: "INVALID_SSO_STATE",
          GenericSsoError: "GENERIC_SSO_ERROR"
        },
        bb = {
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
        hb = ({ onReloadData: e, errorTag: t }) => {
          const { translate: a } = (0, p.Z)(),
            { clearSettings: s } = (0, Fe.u)(Um.y),
            i = (0, ve.o)("setup_rollout_reset_confidential_button"),
            [o, r] = (0, n.useState)(!1),
            [l, u] = (0, n.useState)(!1);
          return (0, c.tZ)(
            d.Ejs,
            { alignItems: "center", justifyContent: "center", fullWidth: !0, gap: "40px", sx: { mt: "20vh", flexDirection: "column" } },
            (0, c.tZ)(y.JO, { name: "FeedbackFailOutlined", color: "ds.text.danger.quiet", sx: { height: "64px", width: "64px" } }),
            (0, c.tZ)(
              d.Ejs,
              { alignItems: "center", flexDirection: "column", gap: "8px" },
              (0, c.tZ)(y.X6, { textStyle: "ds.title.section.large", as: "h1" }, a(bb.ERROR_HEADER)),
              (0, c.tZ)(y.nv, null, a(bb[yb[t]]))
            ),
            (0, c.tZ)(
              d.Ejs,
              { gap: "16px" },
              i
                ? (0, c.tZ)(
                    n.Fragment,
                    null,
                    (0, c.tZ)(y.zx, { mood: "neutral", intensity: "quiet", onClick: () => r(!0), isLoading: l }, a(bb.RESET)),
                    (0, c.tZ)(
                      y.Vq,
                      {
                        actions: {
                          primary: {
                            children: a(bb.RETRY_MODAL_CONFIRM),
                            onClick: async () => {
                              r(!1), u(!0), await s(), e();
                            }
                          },
                          secondary: { children: a(bb.RETRY_MODAL_CANCEL), onClick: () => r(!1) }
                        },
                        closeActionLabel: "Close",
                        onClose: () => r(!1),
                        title: a(bb.RETRY_MODAL_TITLE),
                        isOpen: o,
                        isDestructive: !0
                      },
                      (0, c.tZ)(y.nv, null, a(bb.RETRY_MODAL_BODY))
                    )
                  )
                : null,
              (0, c.tZ)(y.zx, { mood: "brand", intensity: "catchy", onClick: e, disabled: l }, a(bb.RETRY))
            )
          );
        };
      var xb, Sb;
      const vb = {
          SSO_CONNECTOR: "/sso-connector",
          SELF_HOSTED_SSO: "/self-hosted-sso",
          CONFIDENTIAL_SSO: "/confidential-sso",
          UPGRADE_PAYWALL: "/paywall"
        },
        fb = () => (0, c.tZ)(d.T5p, { justifyItems: "center" }, (0, c.tZ)(y.ZX, { size: 75, sx: { marginTop: "20vh" } }));
      var Cb = a(816694);
      const Eb = ({ accountInfo: e }) => {
          const { translate: t } = (0, p.Z)(),
            { routes: a } = (0, i.Xo)();
          return e?.premiumStatus
            ? (0, y.tZ)(y.ke, {
                title: t("team_settings_active_directory_paywall_title"),
                description: t("team_settings_active_directory_paywall_description"),
                actions: [
                  (0, k.wt)(e.premiumStatus)
                    ? (0, y.tZ)(
                        y.zx,
                        {
                          key: "buy",
                          onClick: () => {
                            (0, z.Yo)(`${oe.ub}?plan=business&subCode=${e?.subscriptionCode}`);
                          }
                        },
                        t("team_settings_active_directory_paywall_buy")
                      )
                    : (0, y.tZ)(
                        i.rU,
                        { key: "upgrade", to: `${a.teamAccountChangePlanRoutePath}?plan=business` },
                        (0, y.tZ)(y.zx, null, t("team_settings_active_directory_paywall_upgrade"))
                      )
                ],
                size: "large",
                sx: { marginBottom: "32px" }
              })
            : null;
        },
        Zb = ({ title: e, paragraph: t, children: a }) => {
          const n = (0, Re.k6)(),
            s = (0, ve.o)("setup_rollout_confidential_scim_prod");
          return null === s
            ? null
            : (0, y.tZ)(
                "div",
                { sx: { padding: "24px 0" } },
                s
                  ? (0, y.tZ)(
                      "div",
                      { sx: { padding: "0 32px" } },
                      (0, y.tZ)(
                        d.Ejs,
                        { flexDirection: "row", gap: "8px", sx: { marginBottom: "16px" } },
                        (0, y.tZ)(y.zx, {
                          layout: "iconOnly",
                          icon: "CaretLeftOutlined",
                          intensity: "supershy",
                          mood: "neutral",
                          onClick: () => {
                            n.push(".");
                          }
                        }),
                        (0, y.tZ)(y.X6, { as: "h1", textStyle: "ds.title.section.large" }, e)
                      ),
                      t ? (0, y.tZ)(y.nv, { sx: { marginBottom: "32px" } }, t) : null
                    )
                  : null,
                a
              );
        };
      var Tb, Nb;
      const Db = "_common_generic_error",
        Mb = ({
          lee: e,
          teamSettings: t,
          teamSettingsLoading: a,
          updateTeamSettings: s,
          disableForm: i,
          isNitroSSOInUse: r,
          adSyncEnabled: l,
          isAdSyncCapable: c,
          accountInfo: u
        }) => {
          const { translate: _ } = (0, p.Z)(),
            { reportTACError: m } = $(),
            {
              lastADSyncDateError: g,
              lastADSyncDateLoading: b,
              lastADSyncDate: h
            } = (function () {
              const [e, t] = (0, n.useState)(!1),
                [a, s] = (0, n.useState)(),
                [i, o] = (0, n.useState)(null),
                r = (0, n.useCallback)(async (e) => {
                  try {
                    e.signal.aborted || t(!0);
                    const a = await (0, ae.H)();
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
            x = _.shortDate,
            [S, v] = (0, n.useState)(!0),
            [f, C] = (0, n.useState)(!1),
            [E, Z] = (0, n.useState)(!1),
            [T, N] = (0, n.useState)(!1),
            [D, M] = (0, n.useState)(!1),
            { inviteLinkDataForAdmin: I, getInviteLinkDataForAdmin: A } = (0, Gc.h)(),
            [w, k] = (0, n.useState)(!1),
            { teamId: O } = (0, zo.fV)(),
            L = (0, n.useCallback)(
              () =>
                e.apiMiddleware.teamPlans
                  ? e.apiMiddleware.teamPlans
                  : (m(new Error("teamPlans service missing from apiMiddleware")), null),
              []
            );
          (0, n.useEffect)(() => {
            (0, j.Nc)(o.PageView.TacSettingsDirectorySyncActiveDirectory);
          }, []),
            (0, n.useEffect)(() => {
              A();
            }, [A]),
            (0, n.useEffect)(() => {
              a ||
                (async () => {
                  let a = t.activeDirectoryToken,
                    n = t.activeDirectorySyncStatus;
                  if (!a) {
                    const e = await L();
                    if (!e) return;
                    const { activeDirectorySyncStatus: t, activeDirectoryToken: s } = e.getADToken();
                    (a = s), (n = t);
                  }
                  const { activeDirectorySyncType: s } = t;
                  try {
                    const t = { activeDirectorySyncStatus: n, activeDirectorySyncType: s, activeDirectoryToken: a, teamId: O };
                    e.dispatch(Cb.vo(t)),
                      Z(["full", "deprovision-only"].includes(null != s ? s : "")),
                      M(["full", "provision-only"].includes(null != s ? s : "")),
                      v(!1);
                  } catch (e) {
                    console.error(`ActiveDirectorySettings - fetchData: failed with error: ${e}`);
                  }
                })();
            }, [x, a]);
          const z = (e, t) => (e ? (t ? "full" : "provision-only") : t ? "deprovision-only" : null),
            R =
              i && c
                ? {
                    size: "medium",
                    title: _("team_settings_active_directory_scim_warning_heading"),
                    description: _("team_settings_active_directory_scim_warning_description")
                  }
                : r
                ? {
                    size: "large",
                    title: "Confidential SSO does not currently support SCIM provisioning",
                    description:
                      "Until Confidential SSO supports SCIM, you can provision plan members by setting up Active Directory sync. You can also manually enter emails or upload a CSV or TXT file on the Users page.",
                    actions: [
                      (0, y.tZ)(
                        d.rUS,
                        {
                          key: "learn-more",
                          href: "https://support.dashlane.com/hc/sections/360004143940-Single-sign-on-SSO-?utm_source=extension",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        },
                        (0, y.tZ)(y.zx, null, "Learn more")
                      )
                    ]
                  }
                : null,
            P = (0, oe.cI)(I?.teamKey);
          return (0, y.tZ)(
            Zb,
            { title: "Active Directory" },
            (0, y.tZ)(Zu, { showSharingDialog: w, setShowSharingDialog: k }),
            (0, y.tZ)(
              d.T5p,
              {
                sx: { backgroundColor: "ds.container.agnostic.neutral.quiet" },
                gap: "10px",
                gridTemplateAreas: "'mainContent secondaryContent'",
                gridTemplateColumns: "auto 1fr",
                alignContent: "flex-start"
              },
              (0, y.tZ)(
                d.dDn,
                { gridArea: "mainContent" },
                (0, y.tZ)(
                  X_,
                  null,
                  c ? null : (0, y.tZ)(Eb, { accountInfo: u }),
                  R
                    ? (0, y.tZ)(
                        d.Ejs,
                        { alignItems: "flex-start", flexDirection: "row", sx: { marginBottom: "32px" } },
                        (0, y.tZ)(
                          "div",
                          { sx: "large" === R.size ? {} : { paddingRight: "40px", maxWidth: "50%" } },
                          (0, y.tZ)(y.ke, { mood: "neutral", ...R })
                        )
                      )
                    : null,
                  (0, y.tZ)(
                    y.nv,
                    { sx: { marginTop: i ? "32px" : void 0 }, color: "ds.text.neutral.quiet", textStyle: "ds.body.standard.strong" },
                    _("team_settings_active_directory_title_help")
                  ),
                  (0, y.tZ)(
                    fl,
                    {
                      label: _("team_settings_active_directory_header_label"),
                      labelHelper: _("team_settings_active_directory_header_helper")
                    },
                    (0, y.tZ)(
                      "div",
                      null,
                      (0, y.tZ)(em.Z, {
                        label: _("team_settings_active_directory_header_button_label"),
                        onClick: () => {
                          window.open("https://support.dashlane.com/hc/articles/115002155485", "_blank");
                        }
                      })
                    )
                  ),
                  (0, y.tZ)(
                    y.nv,
                    { color: "ds.text.neutral.quiet", textStyle: "ds.body.standard.strong" },
                    _("team_settings_active_directory_title_status")
                  ),
                  (0, y.tZ)(
                    fl,
                    { label: _("team_settings_active_directory_last_successful_sync_date_label") },
                    b
                      ? Tb || (Tb = (0, y.tZ)(d.HoD, { color: "ds.oddity.focus", size: "20px" }))
                      : g
                      ? `${_("_common_generic_error")} ${g.message.toLowerCase()}`
                      : h?.lastSuccessfulSyncRequestForTeamUnix
                      ? x((0, Xt.Z)(h.lastSuccessfulSyncRequestForTeamUnix), sa._T.lll)
                      : _("team_settings_active_directory_last_successful_sync_date_value_never")
                  ),
                  (() => {
                    const { activeDirectorySyncStatus: t } = e.state;
                    return t?.failedSyncCount
                      ? (0, y.tZ)(
                          n.Fragment,
                          null,
                          (0, y.tZ)(
                            fl,
                            { label: _("team_settings_active_directory_last_error_message_label") },
                            (0, y.tZ)("span", { sx: { color: "ds.text.danger.standard" } }, t.lastFailedSync?.error)
                          ),
                          (0, y.tZ)(
                            fl,
                            { label: _("team_settings_active_directory_last_error_date_label") },
                            (0, y.tZ)(
                              "span",
                              { sx: { color: "ds.text.danger.standard" } },
                              t?.lastFailedSync ? x((0, Xt.Z)(t.lastFailedSync.eventDateUnix), sa._T.lll) : null
                            )
                          ),
                          (0, y.tZ)(
                            fl,
                            { label: _("team_settings_active_directory_fail_count_label") },
                            (0, y.tZ)(
                              "span",
                              { sx: { color: "ds.text.danger.standard" } },
                              e.state.activeDirectorySyncStatus.failedSyncCount
                            )
                          )
                        )
                      : null;
                  })(),
                  (0, y.tZ)(
                    y.nv,
                    { color: "ds.text.neutral.quiet", textStyle: "ds.body.standard.strong" },
                    _("team_settings_active_directory_title_setup")
                  ),
                  (0, y.tZ)(
                    fl,
                    {
                      label: _("team_settings_active_directory_automated_provisioning_label"),
                      labelHelper: _("team_settings_active_directory_automated_provisioning_helper")
                    },
                    (0, y.tZ)(J_.Z, {
                      genericErrorMessage: _(Db),
                      isDisabled: S || T || i,
                      saveValueFunction: async () => {
                        if (T) return Promise.resolve();
                        N(!0);
                        const t = !D,
                          a = z(t, E);
                        try {
                          await s({ activeDirectorySyncType: a }), e.dispatch(Cb.dV(a)), M(t), N(!1);
                        } catch (e) {
                          m(e);
                        }
                      },
                      value: Ja.Maybe.maybe(D)
                    })
                  ),
                  (0, y.tZ)(
                    fl,
                    {
                      label: _("team_settings_active_directory_automated_deprovisioning_label"),
                      labelHelper: _("team_settings_active_directory_automated_deprovisioning_helper")
                    },
                    (0, y.tZ)(J_.Z, {
                      genericErrorMessage: _(Db),
                      isDisabled: S || f || i,
                      saveValueFunction: async () => {
                        if (f) return Promise.resolve();
                        C(!0);
                        const t = !E,
                          a = z(D, t);
                        try {
                          await s({ activeDirectorySyncType: a }), e.dispatch(Cb.dV(a)), Z(t), C(!1);
                        } catch (e) {
                          m(e);
                        }
                      },
                      value: Ja.Maybe.maybe(E)
                    })
                  ),
                  (0, y.tZ)(
                    fl,
                    {
                      label: _("team_settings_active_directory_cron_script_label"),
                      labelHelper: _("team_settings_active_directory_cron_script_helper")
                    },
                    (0, y.tZ)(Id.n, {
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
                    (0, y.tZ)(
                      "div",
                      null,
                      (0, y.tZ)(Dd.Z, {
                        label: e.state.isCopied
                          ? _("team_settings_active_directory_button_copy_feedback")
                          : _("team_settings_active_directory_button_copy_label"),
                        onClick: () => {
                          navigator.clipboard.writeText(e.state.activeDirectoryScript).then(() => {
                            e.dispatch(Cb.Kk(!0)), window.setTimeout(() => e.dispatch(Cb.Kk(!1)), 700);
                          });
                        }
                      })
                    )
                  )
                )
              ),
              l
                ? (0, y.tZ)(
                    d.dDn,
                    { gridArea: "secondaryContent", sx: { maxWidth: "500px", minWidth: "250px" }, alignSelf: "flex-start" },
                    (0, y.tZ)(pl, {
                      linkProps: { linkType: ml.ExternalLink },
                      heading: _("team_settings_encryption_service_scim_invite_link_heading"),
                      description: (0, y.tZ)(
                        "div",
                        null,
                        (0, y.tZ)(y.nv, { sx: { mb: "8px" } }, _("team_settings_encryption_service_scim_invite_link_description_first")),
                        (0, y.tZ)(
                          y.nv,
                          {
                            as: "a",
                            onClick: (e) => {
                              e.preventDefault(), navigator.clipboard.writeText(P), k(!0);
                            },
                            sx: { display: "flex", gap: "4px" },
                            href: "_blank"
                          },
                          _("team_settings_encryption_service_scim_invite_link_copy"),
                          Nb || (Nb = (0, y.tZ)(y.JO, { color: "ds.text.brand.standard", name: "ActionCopyOutlined", size: "medium" }))
                        )
                      )
                    })
                  )
                : null
            )
          );
        };
      var Ib, Ab;
      const wb = {
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
        kb = {
          LINK_ZEROKNOWLEDGE: { i18nKey: "team_settings_directory_sync_scim_paywall_link_zeroknowledge", url: oe.mn },
          LINK_MULTIPLEDOMAINS: { i18nKey: "team_settings_directory_sync_scim_paywall_link_multiple_domains", url: oe.I9 },
          LINK_SELFHOSTED: { i18nKey: "team_settings_directory_sync_scim_paywall_link_self_hosted", url: oe.uR },
          LINK_CONFIDENTIAL: { i18nKey: "team_settings_directory_sync_scim_paywall_link_confidential", url: oe.FP },
          LINK_IDP_INTEGRATION: { i18nKey: "team_settings_directory_sync_scim_paywall_link_idp", url: oe.uC },
          LINK_ADMIN_HC: { i18nKey: "team_settings_directory_sync_scim_paywall_link_help_center", url: oe.Tx }
        },
        Ob = ({ isTrialOrGracePeriod: e }) => {
          const { translate: t } = (0, p.Z)(),
            { routes: a } = (0, i.Xo)(),
            s = (0, O.B)(),
            r = (0, ve.o)("setup_rollout_confidential_scim_prod");
          return (
            (0, n.useEffect)(() => {
              (0, j.Nc)(o.PageView.TacSettingsDirectorySyncPaywall);
            }, []),
            (0, y.tZ)(
              "div",
              { sx: wb.CONTAINER },
              (0, y.tZ)(y.Ct, {
                iconName: "PremiumOutlined",
                label: t("team_settings_directory_sync_scim_paywall_business_badge"),
                layout: "iconLeading",
                intensity: "quiet",
                mood: "brand",
                sx: { height: "16px" }
              }),
              (0, y.tZ)("h2", { sx: wb.MAIN_TITLE }, t("team_settings_directory_sync_scim_paywall_title")),
              (0, y.tZ)(
                y.nv,
                { color: "ds.text.neutral.quiet", textStyle: "ds.body.standard.regular" },
                t("team_settings_directory_sync_scim_paywall_description")
              ),
              (0, y.tZ)(
                "div",
                { sx: wb.CONTENT_CARD },
                Ib || (Ib = (0, y.tZ)(y.JO, { name: "ToolsOutlined", size: "xlarge", tooltip: "bli" })),
                (0, y.tZ)(
                  "div",
                  null,
                  (0, y.tZ)(
                    "span",
                    { sx: wb.CONTENT_CARD_FEATURE_TITLE },
                    t("team_settings_directory_sync_scim_paywall_feature_selfhosted_title")
                  ),
                  (0, y.tZ)(
                    y.nv,
                    { sx: wb.CONTENT_CARD_FEATURE_DESC },
                    t("team_settings_directory_sync_scim_paywall_feature_selfhosted_desc")
                  )
                )
              ),
              (0, y.tZ)(
                "div",
                { sx: wb.CONTENT_CARD },
                Ab || (Ab = (0, y.tZ)(y.JO, { name: "ToolsOutlined", size: "xlarge", tooltip: "bli" })),
                (0, y.tZ)(
                  "div",
                  null,
                  (0, y.tZ)(
                    "div",
                    { sx: { display: "flex", gap: "5px" } },
                    (0, y.tZ)(
                      "span",
                      { sx: wb.CONTENT_CARD_FEATURE_TITLE },
                      t("team_settings_directory_sync_scim_paywall_feature_confidential_title")
                    ),
                    r
                      ? null
                      : (0, y.tZ)(y.Ct, {
                          label: t("team_settings_directory_sync_scim_paywall_coming_soon_badge"),
                          mood: "neutral",
                          intensity: "supershy"
                        })
                  ),
                  (0, y.tZ)(
                    y.nv,
                    { sx: wb.CONTENT_CARD_FEATURE_DESC },
                    t("team_settings_directory_sync_scim_paywall_feature_confidential_desc")
                  )
                )
              ),
              (0, y.tZ)(
                "div",
                { sx: wb.BUTTONS },
                (0, y.tZ)(cb.a, { dropdownItems: kb, titleKey: "team_settings_directory_sync_scim_paywall_dropdown_learn_more" }),
                (0, y.tZ)(
                  y.zx,
                  {
                    layout: "iconLeading",
                    icon: "PremiumOutlined",
                    mood: "brand",
                    intensity: "quiet",
                    onClick: () => {
                      (0, j.Kz)(
                        new o.UserClickEvent({ button: o.Button.UpgradeBusinessTier, clickOrigin: o.ClickOrigin.DirectorySyncPaywallPage })
                      ),
                        e
                          ? (0, z.Yo)(
                              `${oe.ub}?plan=business&subCode=${s?.subscriptionCode}&utm_source=button:upgrade_business_tier+click_origin:directory_sync_paywall_page+origin_page:tac/settings/directory_sync/paywall+origin_component:main_app`
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
        Lb = "SCIM provisioning is not currently supported by Confidential SSO",
        zb =
          "If you plan to set up both SCIM and single sign-on (SSO), you'll need to use the self-hosted option. Both SCIM and self-hosted SSO require the encryption service you configure and host yourself on AWS or Azure.",
        Rb = "Learn more",
        jb = ({ isScimEnabled: e, isSCIMCapable: t, isTrialOrGracePeriod: a, onSetupClear: s, showPaywall: i }) => {
          const [o, r] = (0, n.useState)(!1),
            { teamId: l } = (0, zo.fV)(),
            { clearSettings: c, initSsoProvisioning: u } = (0, Fe.u)(Um.y),
            { data: _, status: m } = (0, qe.k)(Um.y, "ssoProvisioning");
          if (m !== je.rq.Success) return null;
          const {
            global: { inferredSsoState: p }
          } = _;
          if (p === Pm.s5.enum.NitroComplete)
            throw new Error("Invalid state: cannot access SCIM if the team is using Confidential SSO until the enclave supports SCIM.");
          if (!1 === t && i && void 0 !== a) return (0, y.tZ)(Ob, { isTrialOrGracePeriod: a });
          if (p === Pm.s5.enum.NitroIncomplete && !i) {
            const e = async () => {
              await c(), await u({ teamId: `${l}` }), await s?.();
            };
            return (0, y.tZ)(
              n.Fragment,
              null,
              o
                ? (0, y.tZ)(Qm, {
                    onClose: () => r(!1),
                    onConfirm: e,
                    titleText: "Are you sure?",
                    bodyText: "This action can’t be undone."
                  })
                : null,
              (0, y.tZ)(y.ke, {
                mood: "neutral",
                size: "large",
                title: "To use SCIM, clear Confidential SSO setup",
                description: (0, y.tZ)(Ym, {
                  markdownValue:
                    "If you want to use SCIM, select **Clear setup** to erase your progress in Dashlane. Make sure to also delete your progress in your IdP."
                }),
                actions: [(0, y.tZ)(y.zx, { key: "clear", onClick: () => r(!0) }, "Clear setup")]
              })
            );
          }
          return p === Pm.s5.enum.SelfHostedComplete || !1 !== e || i
            ? null
            : (0, y.tZ)(y.ke, {
                mood: "neutral",
                size: "large",
                title: Lb,
                description: zb,
                actions: [
                  (0, y.tZ)(
                    d.rUS,
                    { key: "learn-more", href: oe.B7, target: "_blank", rel: "noopener noreferrer" },
                    (0, y.tZ)(y.zx, { onClick: () => {} }, Rb)
                  )
                ]
              });
        };
      var Pb;
      const Ub = ({ lastSyncUnix: e, version: t, loading: a, refreshData: n }) => {
          const { translate: s } = (0, p.Z)();
          return (0, y.tZ)(
            Sg.R,
            null,
            a
              ? Pb || (Pb = (0, y.tZ)(y.ZX, null))
              : (0, y.tZ)(
                  d.Ejs,
                  { flexDirection: "column", gap: "5px" },
                  (0, y.tZ)(
                    d.k$b,
                    { as: y.nv, textStyle: "ds.body.reduced.regular", color: "ds.text.neutral.standard" },
                    `${s("team_settings_directory_sync_last_sync")} ${
                      e
                        ? (0, Xt.Z)(e).toLocaleString(navigator.language, { ...sa.qG.lll, timeZoneName: "short" })
                        : s("team_settings_directory_sync_not_available")
                    }`
                  ),
                  (0, y.tZ)(
                    d.k$b,
                    { as: y.nv, textStyle: "ds.body.reduced.regular", color: "ds.text.neutral.standard" },
                    `${s("team_settings_encryption_service_version")} ${
                      null != t ? t : s("team_settings_encryption_service_not_available")
                    }`
                  ),
                  (0, y.tZ)(
                    d.k$b,
                    {
                      as: y.nv,
                      innerAs: "a",
                      color: "ds.text.brand.standard",
                      sx: { textDecoration: "none", fontWeight: "normal", display: "flex", flexDirection: "row" },
                      onClick: () => n()
                    },
                    (0, y.tZ)(y.JO, {
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
        Bb = ({ loading: e, parentPath: t, teamSettings: a, esConfig: n, isScimCapable: s, disableSetupButton: o }) => {
          const r = (0, i.k6)(),
            { translate: l } = (0, p.Z)(),
            { teamDeviceConfigLoading: c, teamDeviceConfig: u } = Bg({ draft: !1, deviceAccessKey: n?.deviceAccessKey }),
            { teamDeviceLoading: _, teamDevice: m, refreshTeamDevice: g } = Qp(n?.deviceAccessKey),
            b = e || c,
            h = !a?.ssoServiceProviderUrl || b || o || !s,
            x = !u?.configProperties?.scimAuthToken;
          return (0, y.tZ)(
            d.Zbd,
            null,
            (0, y.tZ)(
              d.T5p,
              {
                as: d.aYP,
                gap: "8px",
                gridTemplateAreas: "'header button' 'description button' 'status status'",
                gridTemplateColumns: "1fr auto",
                sx: { bg: "white", border: "none" }
              },
              (0, y.tZ)(
                d.dDn,
                { as: y.X6, innerAs: "h3", size: "large", bold: !0, gridArea: "header", textStyle: "ds.title.section.medium" },
                l("team_settings_directory_sync_scim_header")
              ),
              (0, y.tZ)(
                d.dDn,
                { gridArea: "description", as: y.nv, size: "small", textStyle: "ds.title.block.small", color: "ds.text.neutral.quiet" },
                l("team_settings_directory_sync_scim_description")
              ),
              (0, y.tZ)(
                d.dDn,
                { gridArea: "button" },
                (0, y.tZ)(
                  Kd.M,
                  {
                    id: "scimSetupButton",
                    loading: b,
                    disabled: h,
                    neverShowTooltip: o,
                    size: "large",
                    onClick: () => {
                      r.push(`${t}${Jb}`);
                    },
                    content: l("team_settings_es_sso_setup_configure_es_tooltip"),
                    mood: x && !h ? "brand" : "neutral",
                    intensity: x && !h ? "catchy" : "quiet"
                  },
                  l(x ? "team_settings_directory_sync_scim_set_up_button" : "team_settings_button_edit_label")
                )
              ),
              u?.configProperties?.scimEnabled
                ? (0, y.tZ)(
                    d.dDn,
                    { gridArea: "status", sx: { mt: "20px" } },
                    (0, y.tZ)(Ub, { loading: _, version: m?.version, refreshData: g, lastSyncUnix: m?.lastActivityDateUnix })
                  )
                : null
            )
          );
        };
      var Gb,
        Fb,
        qb,
        Vb = a(769183);
      const $b = { GENERIC_ERROR: "_common_generic_error" },
        Wb = ({ config: e, esEndpoint: t }) => {
          var a;
          const { translate: s } = (0, p.Z)(),
            o = (0, i.k6)(),
            {
              teamDeviceConfigLoading: r,
              teamDeviceConfig: c,
              updateTeamDeviceConfig: u,
              refreshTeamDeviceConfig: _,
              loadTeamDeviceConfigErrorCode: m
            } = Bg({ draft: !1, deviceAccessKey: e?.deviceAccessKey }),
            [g, b] = (0, n.useState)(""),
            [h, x] = (0, n.useState)(!1),
            [S, v] = (0, n.useState)(!1),
            [f, C] = (0, n.useState)(!1),
            [E, Z] = (0, n.useState)(!1),
            T = r;
          (0, n.useEffect)(() => {
            const e = m;
            e && e !== l.TeamDeviceEncryptedConfigNotFound && b(e);
          }, [m, s]);
          const N = () => o.goBack(),
            D = async ({ values: e, resetForm: a }) => {
              v(!0), x(!1);
              const n = { scimEnabled: e.encryptionServiceSync, teamDeviceUrl: null != t ? t : void 0 };
              (!f && c?.configProperties?.scimAuthToken) || (n.scimAuthToken = e.scimToken);
              const s = await u(n);
              C(!1),
                await _(),
                v(!1),
                s.success
                  ? s.data.encryptionServiceReloadingStatus === l.EncryptionServiceRestartStatusCodes.OK
                    ? (a({ values: e }), N())
                    : x(!0)
                  : b(s.error.code);
            },
            M = {
              scimToken: ((I = c?.configProperties?.scimAuthToken), null != (A = I?.replace(/./g, "*")) ? A : ""),
              scimEndpoint: t ? (0, Cy.UQ)(t, "scim/2.0") : "",
              encryptionServiceSync: null != (a = c?.configProperties?.scimEnabled) && a
            };
          var I, A;
          const w = () => {
            Z(!1);
          };
          return (0, y.tZ)(
            La.J9,
            {
              onSubmit: async (e, t) => {
                e.encryptionServiceSync ? Z(!0) : await D({ values: e, resetForm: t.resetForm });
              },
              enableReinitialize: !0,
              initialValues: M
            },
            ({ values: e, setFieldValue: t, isSubmitting: a, dirty: n, resetForm: i }) => {
              var o, l;
              return (0, y.tZ)(
                La.l0,
                { autoComplete: "off", noValidate: !0 },
                (0, y.tZ)(Wp.X, { dirty: n && !S && !h }),
                (0, y.tZ)(
                  d.Zbd,
                  null,
                  (0, y.tZ)(d.Ol2, null, s("team_settings_directory_sync_scim_header")),
                  (0, y.tZ)(
                    d.aYP,
                    null,
                    (0, y.tZ)(y.ke, { mood: "brand", title: s("team_settings_directory_sync_scim_infobox") }),
                    (0, y.tZ)(
                      d.T5p,
                      { gridTemplateAreas: "'header button' 'desc button' 'inputField inputField'", gap: "8px", sx: { mt: "32px" } },
                      (0, y.tZ)(
                        d.dDn,
                        { gridArea: "header", as: y.nv, innerAs: "label", htmlFor: "scimTokenInput", textStyle: "ds.title.block.medium" },
                        s("team_settings_directory_sync_scim_set_up_token_label")
                      ),
                      (0, y.tZ)(
                        d.dDn,
                        {
                          as: y.zx,
                          gridArea: "button",
                          type: "button",
                          alignSelf: "right",
                          intensity: "quiet",
                          mood: "brand",
                          disabled: T || a,
                          onClick: () =>
                            ((e) => {
                              C(!0), e("scimToken", (0, Vb.Z)());
                            })(t),
                          sx: { height: "fit-content", width: "100%" }
                        },
                        e.scimToken
                          ? s("team_settings_directory_sync_scim_set_up_reset_buttons")
                          : s("team_settings_directory_sync_scim_set_up_generate_buttons")
                      ),
                      (0, y.tZ)(
                        d.dDn,
                        { gridArea: "desc", as: y.nv, size: "medium", sx: { marginBottom: "24px" }, color: "ds.text.neutral.quiet" },
                        s("team_settings_directory_sync_scim_set_up_token_description")
                      ),
                      (0, y.tZ)(
                        d.dDn,
                        { gridArea: "inputField" },
                        (0, y.tZ)(La.gN, { name: "scimToken" }, ({ field: t }) =>
                          t.value
                            ? (0, y.tZ)(Pl.x, {
                                inputValue: t.value,
                                iconButtonProps: { disabled: (Boolean(e.scimToken) && !f) || a },
                                passwordInputProps: {
                                  disabled: (Boolean(e.scimToken) && !f) || a,
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
                    (0, y.tZ)(
                      d.T5p,
                      { gridTemplateColumns: "auto", gap: "8px" },
                      (0, y.tZ)(
                        d.dDn,
                        {
                          as: y.nv,
                          innerAs: "label",
                          htmlFor: "endpointInput",
                          sx: { marginTop: "32px" },
                          textStyle: "ds.title.block.medium"
                        },
                        s("team_settings_directory_sync_scim_set_up_endpoint_label")
                      ),
                      (0, y.tZ)(La.gN, { name: "scimEndpoint" }, ({ field: e }) =>
                        (0, y.tZ)(Pl.x, { inputValue: e.value, textInputProps: { fullWidth: !0, readOnly: !0, ...e, id: "endpointInput" } })
                      )
                    ),
                    Gb || (Gb = (0, y.tZ)("hr", null)),
                    (0, y.tZ)(
                      d.T5p,
                      { gridTemplateAreas: "'label toggle' 'desc .'", gap: "8px" },
                      (0, y.tZ)(
                        d.dDn,
                        {
                          gridArea: "label",
                          as: y.nv,
                          innerAs: "label",
                          htmlFor: "encryptionServiceSync",
                          textStyle: "ds.title.block.medium"
                        },
                        s("team_settings_directory_sync_scim_set_up_service_label")
                      ),
                      (0, y.tZ)(
                        d.dDn,
                        { gridArea: "desc", as: y.nv, color: "ds.text.neutral.quiet" },
                        s("team_settings_directory_sync_scim_set_up_service_description")
                      ),
                      (0, y.tZ)(
                        d.dDn,
                        { gridArea: "toggle" },
                        r
                          ? Fb || (Fb = (0, y.tZ)(y.ZX, { mood: "brand" }))
                          : (0, y.tZ)(y.ZD, {
                              disabled: T || a,
                              id: "encryptionServiceSync",
                              onChange: (e) =>
                                ((e, t) => {
                                  t("encryptionServiceSync", e.currentTarget.checked);
                                })(e, t),
                              defaultChecked: null != (o = c?.configProperties?.scimEnabled) && o
                            })
                      )
                    )
                  ),
                  (0, y.tZ)(
                    d.eWM,
                    null,
                    g
                      ? (0, y.tZ)(
                          y.nv,
                          { sx: { width: "40%", ml: 0, mr: "auto" }, textStyle: "ds.title.supporting.small" },
                          s(null != (l = $b?.[g]) ? l : $b.GENERIC_ERROR)
                        )
                      : null,
                    h
                      ? (0, y.tZ)(d.Ejs, { sx: { flexGrow: 1, justifyContent: "center" } }, qb || (qb = (0, y.tZ)(Jp, { context: "SCIM" })))
                      : null,
                    (0, y.tZ)(
                      y.zx,
                      { mood: "neutral", intensity: "quiet", size: "large", type: "button", onClick: N },
                      s("team_settings_directory_sync_scim_set_up_button_cancel")
                    ),
                    (0, y.tZ)(
                      y.zx,
                      { type: "submit", disabled: T || a || !n },
                      s("team_settings_directory_sync_scim_set_up_button_save_changes")
                    )
                  )
                ),
                E
                  ? (0, y.tZ)(gp, {
                      title: s("team_settings_directory_sync_scim_confirm_dialog_title"),
                      body: s("team_settings_directory_sync_scim_confirm_dialog_body"),
                      primaryActionLabel: s("team_settings_directory_sync_scim_confirm_dialog_primary_action_label"),
                      onCancel: w,
                      onConfirm: () =>
                        (async ({ values: e, resetForm: t }) => {
                          await D({ values: e, resetForm: t }), Z(!1);
                        })({ values: e, resetForm: i })
                    })
                  : null
              );
            }
          );
        };
      var Hb;
      const Kb = (e) => {
        const { translate: t } = (0, p.Z)(),
          a = (0, B.w)(U.w.OnboardingWebTeamsignuppage),
          { getInviteLinkDataForAdmin: s } = (0, Gc.h)(),
          [i, o] = (0, n.useState)(!1),
          [r, l] = (0, n.useState)(!1);
        return (0, y.tZ)(
          d.Ejs,
          { gap: "6", ...e },
          a ? (0, y.tZ)(Zu, { showSharingDialog: i, setShowSharingDialog: o }) : null,
          a && r ? (0, y.tZ)(Cu, { showActivationDialog: r, setShowActivationDialog: l, setShowSharingDialog: o }) : null,
          (0, y.tZ)(pl, {
            linkProps: {
              linkType: ml.ExternalLink,
              linkHref: "https://support.dashlane.com/hc/articles/4404301553938?utm_source=extension"
            },
            heading: t("team_settings_encryption_service_scim_setup_guide_heading"),
            description: t("team_settings_encryption_service_scim_setup_guide_description"),
            linkText: t("team_settings_encryption_service_scim_setup_guide_link_text")
          }),
          a && e.isScimEnabled
            ? (0, y.tZ)(pl, {
                linkProps: { linkType: ml.ExternalLink },
                heading: t("team_settings_encryption_service_scim_invite_link_heading"),
                description: (0, y.tZ)(
                  "div",
                  null,
                  (0, y.tZ)(
                    y.nv,
                    { color: "ds.text.neutral.standard", textStyle: "ds.body.standard.regular", sx: { mb: "8px" } },
                    t("team_settings_encryption_service_scim_invite_link_description_first")
                  ),
                  (0, y.tZ)(
                    d.k$b,
                    {
                      as: y.nv,
                      innerAs: "a",
                      color: "ds.text.brand.standard",
                      onClick: async (e) => {
                        e.preventDefault();
                        const t = await s();
                        t?.disabled || !t?.teamKey ? l(!0) : o(!0);
                      },
                      gap: "4px",
                      href: "_blank"
                    },
                    (0, y.tZ)("span", null, t("team_settings_encryption_service_scim_invite_link_copy")),
                    Hb || (Hb = (0, y.tZ)(y.JO, { name: "ActionCopyOutlined", size: "medium", color: "ds.text.brand.standard" }))
                  )
                )
              })
            : null
        );
      };
      var Yb, Qb;
      const Xb = "/encryption-service-settings",
        Jb = "/scim-settings",
        eh = ({
          isScimEnabled: e,
          isScimCapable: t,
          teamSettings: a,
          updateTeamSettings: s,
          disableForm: r = !1,
          adSyncEnabled: l,
          ssoConnectorSetup: c
        }) => {
          const [u, _] = (0, n.useState)(!1),
            m = () => _(!0),
            { translate: g } = (0, p.Z)(),
            { path: b } = (0, i.$B)(),
            { esConfig: h, esConfigLoading: x, refreshEncryptionServiceConfig: S } = $p(),
            v = (0, ve.o)(U.w.ItadminTacEncryptionserviceSSOmigrationReset),
            f = Boolean(v || (!x && c));
          (0, n.useEffect)(() => {
            (0, j.Nc)(o.PageView.TacSettingsDirectorySyncSelfHostedScim);
          }, []);
          const C = Le({ hasBillingAccess: !0 });
          if (!C) return null;
          const { shouldShowBuyOrUpgradePaywall: E, planType: Z, isTrialOrGracePeriod: T } = C,
            N = E && Z !== Se.lD.Business;
          return (0, y.tZ)(
            Zb,
            { title: "Self-hosted SCIM" },
            (0, y.tZ)(Gu, {
              mainContent: d.T5p,
              mainProps: {
                gridTemplateColumns: "auto",
                gridAutoRows: "min-content",
                gap: "32px",
                children: (0, y.tZ)(
                  i.rs,
                  null,
                  (0, y.tZ)(
                    i.AW,
                    { exact: !0, path: b },
                    N
                      ? (0, y.tZ)(jb, {
                          isScimEnabled: e,
                          isSCIMCapable: t,
                          onSetupClear: () => s({ ssoServiceProviderUrl: null }),
                          isTrialOrGracePeriod: T,
                          showPaywall: !0
                        })
                      : (0, y.tZ)(
                          n.Fragment,
                          null,
                          Yb || (Yb = (0, y.tZ)(Jp, null)),
                          (0, y.tZ)(jb, { isScimEnabled: e, isSCIMCapable: t, onSetupClear: () => s({ ssoServiceProviderUrl: null }) }),
                          l
                            ? (0, y.tZ)(y.ke, {
                                size: "medium",
                                mood: "neutral",
                                title: g("team_settings_encryption_service_scim_setup_ad_sync_warning_heading"),
                                description: g("team_settings_encryption_service_scim_setup_ad_sync_warning_description")
                              })
                            : null,
                          f
                            ? (0, y.tZ)(y.ke, {
                                size: "medium",
                                mood: "brand",
                                title: g("team_settings_es_sso_migration_infobox_title"),
                                description: (0, y.tZ)(y.nv, null, g("team_settings_es_sso_migration_infobox_body"))
                              })
                            : null,
                          (0, y.tZ)(Eg, { parentPath: b, loading: x || null === t, esConfig: h, disableSetupButton: !1 === t || r }),
                          (0, y.tZ)(Bb, {
                            teamSettings: a,
                            parentPath: b,
                            loading: x || null === t,
                            esConfig: h,
                            isScimCapable: !0 === t,
                            disableSetupButton: r
                          })
                        ),
                    u ? (0, y.tZ)(ge, { onDismiss: () => _(!1) }) : null
                  ),
                  (0, y.tZ)(
                    i.AW,
                    { path: `${b}${Xb}` },
                    x
                      ? Qb || (Qb = (0, y.tZ)(y.ZX, { mood: "brand" }))
                      : (0, y.tZ)(hg, {
                          migratingFromSSOConnector: f,
                          onSave: () => S(),
                          teamSettings: a,
                          updateTeamSettings: s,
                          esConfig: h
                        })
                  ),
                  (0, y.tZ)(i.AW, { path: `${b}${Jb}` }, (0, y.tZ)(Wb, { config: h, esEndpoint: a?.ssoServiceProviderUrl }))
                )
              },
              secondaryContent: N ? () => lb(m) : Kb
            })
          );
        },
        th = ({ title: e, description: t, isSupported: a, disabled: n = !1 }) => {
          const { translate: s } = (0, p.Z)();
          return (0, y.tZ)(
            d.Ejs,
            { flexDirection: "row", gap: "8px", flexWrap: "nowrap", alignItems: "flex-start" },
            (0, y.tZ)(
              "div",
              {
                sx: {
                  padding: "10px",
                  borderRadius: "12px",
                  background: a ? "ds.container.expressive.positive.quiet.disabled" : "ds.container.expressive.danger.quiet.disabled"
                }
              },
              (0, y.tZ)(y.JO, {
                name: a ? "FeedbackSuccessOutlined" : "FeedbackFailOutlined",
                color: n ? "ds.text.oddity.disabled" : a ? "ds.text.positive.quiet" : "ds.text.danger.quiet"
              })
            ),
            (0, y.tZ)(
              d.Ejs,
              { flexDirection: "column", gap: "4px" },
              (0, y.tZ)(
                y.nv,
                { textStyle: "ds.body.standard.regular", color: n ? "ds.text.oddity.disabled" : "ds.text.neutral.catchy" },
                s(e)
              ),
              t
                ? (0, y.tZ)(
                    y.nv,
                    { textStyle: "ds.body.helper.regular", color: n ? "ds.text.oddity.disabled" : "ds.text.neutral.quiet" },
                    s(t)
                  )
                : null
            )
          );
        },
        ah = ({
          title: e,
          redirectUrl: t,
          optionNumber: a,
          supportedFeatures: n,
          onCtaClick: s,
          disabled: o = !1,
          selected: r = !1,
          isBetaFeature: l = !1
        }) => {
          const { translate: c } = (0, p.Z)(),
            u = (0, i.k6)(),
            _ = `${(0, i.$B)().path}/${t}`;
          return (0, y.tZ)(
            d.Zbd,
            { sx: { padding: "24px", borderColor: r ? "ds.border.brand.standard.idle" : "ds.border.neutral.quiet.idle", width: "100%" } },
            (0, y.tZ)(
              d.T5p,
              { gridTemplateAreas: "'option badge' 'title title' 'body body' 'button button'" },
              (0, y.tZ)(
                d.dDn,
                { gridArea: "option", sx: { marginBottom: "8px" } },
                (0, y.tZ)(
                  y.nv,
                  { color: o ? "ds.text.oddity.disabled" : "ds.text.neutral.quiet", textStyle: "ds.body.helper.regular" },
                  `${c("tac_settings_directory_sync_card_option")} ${a}`
                )
              ),
              r
                ? (0, y.tZ)(
                    d.dDn,
                    { gridArea: "badge", justifySelf: "right" },
                    (0, y.tZ)(y.Ct, { mood: "positive", intensity: "catchy", label: c("tac_settings_directory_sync_card_badge_enabled") })
                  )
                : null,
              (0, y.tZ)(
                d.dDn,
                { gridArea: "title", sx: { marginBottom: "32px" } },
                (0, y.tZ)(
                  y.X6,
                  {
                    as: "h3",
                    textStyle: "ds.title.section.medium",
                    color: o ? "ds.text.oddity.disabled" : "ds.text.neutral.catchy",
                    sx: { display: "inline-block" }
                  },
                  c(e)
                ),
                l
                  ? (0, y.tZ)(y.Ct, {
                      mood: "brand",
                      label: c("tac_settings_directory_sync_card_title_badge_beta"),
                      sx: { display: "inline", marginLeft: "8px" }
                    })
                  : null
              ),
              (0, y.tZ)(
                d.dDn,
                { gridArea: "body" },
                (0, y.tZ)(
                  d.Ejs,
                  { gap: "32px", flexDirection: "column", sx: { marginBottom: "32px" } },
                  n.map((e) => (0, y.tZ)(th, { key: a + e.title, disabled: o, ...e }))
                )
              ),
              (0, y.tZ)(
                d.dDn,
                { gridArea: "button", justifySelf: "right" },
                (0, y.tZ)(
                  y.zx,
                  {
                    onClick: () => {
                      s?.(), u.push(_);
                    },
                    disabled: o,
                    intensity: "catchy"
                  },
                  c(r ? "tac_settings_directory_sync_card_button_edit" : "tac_settings_directory_sync_card_button_setup")
                )
              )
            )
          );
        },
        nh = {
          title: "tac_settings_directory_sync_card_title_confidential_scim",
          redirectUrl: "confidential-scim",
          isBetaFeature: !0,
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
        sh = {
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
        ih = {
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
        oh = ({ ssoState: e, isAdSyncEnabled: t, isSelfhostedScimEnabled: a, isNitroSCIMEnabled: s, isLoading: i = !1 }) => {
          const { translate: r } = (0, p.Z)(),
            l = "NitroComplete" === e,
            c = l || "NitroIncomplete" === e,
            u = ((e) => "SelfHostedComplete" === e || "SelfHostedIncomplete" === e)(e),
            _ = (() => {
              const e = (0, qe.k)(Tn.o, "getTeamCapabilities");
              return e.status === je.rq.Success ? e.data : null;
            })(),
            [m, g] = (0, n.useState)(!0),
            [b, h] = (0, n.useState)(!1),
            x = Le({ hasBillingAccess: !0 });
          return (
            (0, n.useEffect)(() => {
              _ && g(!!_.scim.enabled);
            }, [_]),
            (0, n.useEffect)(() => {
              (0, j.Nc)(o.PageView.TacSettingsDirectorySync);
            }, []),
            (0, n.useEffect)(() => {
              x?.isTrialOrGracePeriod && h(x.isTrialOrGracePeriod);
            }, [x]),
            i
              ? (0, y.tZ)(d.T5p, { justifyItems: "center" }, (0, y.tZ)(y.ZX, { size: 75, sx: { marginTop: "20vh" } }))
              : (0, y.tZ)(
                  "div",
                  { sx: { margin: "32px" } },
                  (0, y.tZ)(
                    y.X6,
                    { as: "h1", textStyle: "ds.title.section.large", sx: { marginBottom: "16px" } },
                    r("tac_settings_directory_sync_header")
                  ),
                  (0, y.tZ)(y.nv, { sx: { marginBottom: "8px" } }, r("tac_settings_directory_sync_header_helper")),
                  (0, y.tZ)(
                    _l,
                    { sx: { marginBottom: "32px" }, href: "https://support.dashlane.com/hc/articles/4404301553938?utm_source=extension" },
                    r("tac_settings_directory_sync_header_link")
                  ),
                  (0, y.tZ)(
                    d.T5p,
                    { fullWidth: !0, gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" },
                    m
                      ? (0, y.tZ)(
                          n.Fragment,
                          null,
                          (0, y.tZ)(ah, {
                            optionNumber: 1,
                            ...nh,
                            selected: s,
                            disabled: (!s && !l) || u || a || t,
                            onCtaClick: () => {
                              (0, j.Kz)(new o.UserSetupConfidentialScimEvent({ scimSetupStep: o.ScimSetupStep.ClickSetUp }));
                            }
                          }),
                          (0, y.tZ)(ah, { optionNumber: 2, ...sh, selected: a, disabled: c || s || t }),
                          (0, y.tZ)(ah, { optionNumber: 3, ...ih, selected: t, disabled: s || a })
                        )
                      : (0, y.tZ)(
                          n.Fragment,
                          null,
                          (0, y.tZ)(ah, { optionNumber: 1, ...ih, selected: t, disabled: s || a }),
                          (0, y.tZ)(Ob, { isTrialOrGracePeriod: b })
                        )
                  )
                )
          );
        };
      var rh = a(191354);
      const lh = ({ isTokenGenerated: e }) => {
          const [t, a] = (0, n.useState)(!1),
            [s, i] = (0, n.useState)(!1),
            { translate: r } = (0, p.Z)(),
            { generateScimToken: l } = (0, Fe.u)(rh.m),
            c = async () => {
              a(!0),
                await l(void 0),
                (0, j.Kz)(
                  new o.UserSetupConfidentialScimEvent({
                    scimSetupStep: e ? o.ScimSetupStep.ReGenerateToken : o.ScimSetupStep.GenerateScimToken
                  })
                ),
                a(!1);
            };
          return (0, y.tZ)(
            n.Fragment,
            null,
            (0, y.tZ)(
              y.X6,
              { as: "h2", textStyle: "ds.title.section.medium", sx: { marginBottom: "8px" } },
              r("tac_settings_confidential_scim_generate_token_header")
            ),
            (0, y.tZ)(
              y.nv,
              { color: "ds.text.neutral.quiet", sx: { marginBottom: "24px" } },
              r("tac_settings_confidential_scim_generate_token_header_helper")
            ),
            (0, y.tZ)(
              y.zx,
              { intensity: e ? "quiet" : "catchy", mood: "brand", isLoading: !e && t, onClick: e ? () => i(!0) : c },
              r(e ? "tac_settings_confidential_scim_regenerate_token_button" : "tac_settings_confidential_scim_generate_token_button")
            ),
            (0, y.tZ)(
              y.Vq,
              {
                actions: {
                  primary: {
                    children: r("tac_settings_confidential_scim_regenerate_token_dialog_primary_action"),
                    onClick: () => {
                      c(), i(!1);
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
              (0, y.tZ)(y.nv, null, r("tac_settings_confidential_scim_regenerate_token_dialog"))
            )
          );
        },
        ch = ({ scimApiToken: e, scimEndpoint: t }) => {
          const { translate: a } = (0, p.Z)(),
            [s, i] = (0, n.useState)(!1),
            r = async (e) => {
              e && (await navigator.clipboard.writeText(e));
            };
          return (0, y.tZ)(
            n.Fragment,
            null,
            (0, y.tZ)(
              y.X6,
              { as: "h2", textStyle: "ds.title.section.medium", sx: { marginBottom: "8px" } },
              a("tac_settings_confidential_scim_copy_token_header")
            ),
            (0, y.tZ)(
              y.nv,
              { color: "ds.text.neutral.quiet", sx: { marginBottom: "24px" } },
              a("tac_settings_confidential_scim_copy_token_header_helper")
            ),
            (0, y.tZ)(y.qo, {
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
                    r(null != e ? e : ""), (0, j.Kz)(new o.UserSetupConfidentialScimEvent({ scimSetupStep: o.ScimSetupStep.CopyApiToken }));
                  }
                }
              ]
            }),
            (0, y.tZ)(y.qo, {
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
                      (0, j.Kz)(new o.UserSetupConfidentialScimEvent({ scimSetupStep: o.ScimSetupStep.CopyEndpointLink }));
                  }
                }
              ]
            })
          );
        },
        dh = ({ active: e }) => {
          const t = (0, n.useRef)(!1),
            { translate: a } = (0, p.Z)(),
            { updateScimConfiguration: s } = (0, Fe.u)(Gy.m),
            { showToast: i } = (0, y.pm)();
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
            (0, y.tZ)(
              d.T5p,
              { gridTemplateAreas: "'title title' 'description button'" },
              (0, y.tZ)(
                d.dDn,
                { gridArea: "title", as: y.X6, innerAs: "h2", textStyle: "ds.title.section.medium", sx: { marginBottom: "8px" } },
                a("tac_settings_confidential_scim_activate_header")
              ),
              (0, y.tZ)(
                d.dDn,
                { gridArea: "description", as: y.nv, color: "ds.text.neutral.quiet" },
                a("tac_settings_confidential_scim_activate_header_helper")
              ),
              (0, y.tZ)(d.dDn, {
                justifySelf: "end",
                gridArea: "button",
                as: y.ZD,
                onChange: () => {
                  (0, j.Kz)(
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
        uh = () => {
          const { data: e } = (0, qe.k)(Gy.m, "scimConfiguration"),
            { data: t } = (0, qe.k)(Gy.m, "scimEndpoint");
          return e
            ? (0, y.tZ)(
                d.Ejs,
                { gap: "32px", flexDirection: "column", as: d.Zbd, sx: { padding: "32px" } },
                (0, y.tZ)(d.k$b, null, (0, y.tZ)(lh, { isTokenGenerated: !!e?.token })),
                (0, y.tZ)(d.k$b, null, (0, y.tZ)(ch, { scimEndpoint: t?.endpoint, scimApiToken: e?.token })),
                (0, y.tZ)(d.k$b, null, (0, y.tZ)(dh, { active: e.active }))
              )
            : null;
        },
        _h = () => {
          const { translate: e } = (0, p.Z)();
          return (
            (0, n.useEffect)(() => {
              (0, j.Nc)(o.PageView.TacSettingsDirectorySyncConfidentialScim);
            }, []),
            (0, y.tZ)(
              Zb,
              { title: e("tac_settings_confidential_scim_header"), paragraph: e("tac_settings_confidential_scim_header_helper") },
              (0, y.tZ)(Gu, {
                sx: { padding: "0 32px" },
                fullWidth: !0,
                withDefaultBackground: !0,
                mainContent: uh,
                secondaryContent: pl,
                secondaryProps: {
                  heading: e("tac_settings_confidential_scim_help_card_header"),
                  description: e("tac_settings_confidential_scim_help_card_description"),
                  linkProps: {
                    linkType: ml.ExternalLink,
                    linkHref: "https://support.dashlane.com/hc/articles/360013149040",
                    onClick: () => {
                      (0, j.Kz)(new o.UserClickEvent({ button: o.Button.SeeSetupGuide, clickOrigin: o.ClickOrigin.NeedHelp }));
                    }
                  },
                  linkText: e("tac_settings_confidential_scim_help_card_link")
                }
              })
            )
          );
        },
        mh = "/scim-provisioning",
        ph = "/active-directory",
        gh = _o((e) => {
          const t = Le(e.lee.permission.adminAccess),
            a = (function (e) {
              var t;
              const a = (0, O.B)(),
                n = (0, te.C)(),
                s = (0, ve.o)(U.w.SharingVaultWebRestrictSharingToTeamDev);
              if (!n || !a || void 0 === s) return null;
              const i = e.hasBillingAccess,
                o = n.isFreeTrial || n.isGracePeriod;
              return {
                shouldShowBuyPaywall: i && o,
                shouldShowUpgradePaywall: i && !o && n.spaceTier !== Se.lD.Business,
                accountSubscriptionCode: null != (t = a?.subscriptionCode) ? t : "",
                isRestrictSharingToTeamFeatureEnabled: !!s
              };
            })(e.lee.permission.adminAccess);
          return t && a
            ? n.createElement(Nm, {
                lee: e.lee.child(_m.ZP),
                createFieldListFunction: (e, n) => zm(e, n, t, a),
                title: "team_settings_menu_title_policies",
                pageView: o.PageView.TacSettingsPolicies
              })
            : Rm || (Rm = n.createElement(Vo, null));
        }, Me.POLICIES),
        yh = _o(() => {
          var e, t;
          const a = (0, ve.o)("setup_rollout_confidential_scim_prod"),
            { path: s } = (0, i.$B)(),
            { translate: o } = (0, p.Z)(),
            { esConfig: r, esConfigLoading: l } = $p(),
            { teamDeviceConfig: c } = Bg({ draft: !1, deviceAccessKey: r?.deviceAccessKey }),
            { teamId: u } = (0, zo.fV)(),
            { teamSettings: _ = {}, teamSettingsLoading: m, updateTeamSettings: g, teamCapabilities: b } = Tc(u),
            h = (0, O.B)(),
            { initSsoProvisioning: x } = (0, Fe.u)(Um.y),
            { data: S } = (0, qe.k)(Um.y, "ssoProvisioning"),
            { data: v, status: f } = (0, qe.k)(rh.m, "scimConfiguration");
          (0, n.useEffect)(() => {
            S?.global.inferredSsoState === Pm.s5.enum.Unknown && u && x({ teamId: `${u}` });
          }, [x, S?.global.inferredSsoState, u]);
          const C = !m && _.activeDirectorySyncType,
            E = c?.configProperties.scimEnabled,
            Z = null != (e = b?.activeDirectorySync.enabled) ? e : null,
            T = S?.global.inferredSsoState === Pm.s5.enum.NitroComplete,
            N = (E && !C) || !Z,
            D = S?.global.inferredSsoState === Pm.s5.enum.NitroIncomplete || (C && !E),
            M = m || l || !h || S?.global.inferredSsoState === Pm.s5.enum.Unknown || f === je.rq.Loading,
            I = [Pm.s5.enum.SsoConnectorComplete, Pm.s5.enum.SsoConnectorIncomplete],
            A = S?.global.inferredSsoState && I.includes(S?.global.inferredSsoState),
            w = !A,
            k = [
              { isDisabled: T, id: pi.TAB_SCIM, label: o("team_settings_tab_scim_provisioning"), url: `${s}${mh}`, subPaths: [Xb, Jb] },
              { id: pi.TAB_ACTIVE_DIRECTORY, label: o("team_settings_tab_active_directory"), url: `${s}${ph}` }
            ],
            L = `${s}${E || (w && !C && !T) ? mh : ph}`;
          return (0, y.tZ)(
            d.T5p,
            { gridTemplateColumns: "auto", gridTemplateRows: "auto 1fr", fullWidth: !0, sx: { height: "100%" } },
            M
              ? (0, y.tZ)(d.T5p, { justifyItems: "center" }, (0, y.tZ)(y.ZX, { size: 75, sx: { marginTop: "20vh" } }))
              : (0, y.tZ)(
                  n.Fragment,
                  null,
                  a
                    ? null
                    : (0, y.tZ)(
                        "div",
                        { sx: { px: "48px", pt: "32px", pb: "4px" } },
                        (0, y.tZ)(hi, { title: o("team_settings_tab_title_directory_sync"), tabs: k })
                      ),
                  (0, y.tZ)(
                    i.rs,
                    null,
                    a
                      ? (0, y.tZ)(i.Vy, {
                          exact: !0,
                          path: s,
                          component: oh,
                          permission: (e) => e.adminAccess.hasFullAccess || e.adminAccess.hasBillingAccess,
                          additionalProps: {
                            ssoState: S?.global.inferredSsoState,
                            isAdSyncEnabled: C,
                            isSelfhostedScimEnabled: E,
                            isNitroSCIMEnabled: v?.active,
                            isLoading: M
                          }
                        })
                      : (0, y.tZ)(i.l_, { exact: !0, from: `${s}/`, to: L }),
                    (0, y.tZ)(i.Vy, {
                      exact: !0,
                      path: `${s}/confidential-scim`,
                      component: _h,
                      permission: (e) => e.adminAccess.hasFullAccess || e.adminAccess.hasBillingAccess
                    }),
                    (0, y.tZ)(i.Vy, {
                      path: `${s}${mh}`,
                      component: eh,
                      additionalProps: {
                        isScimEnabled: null != E ? E : null,
                        isScimCapable: null != (t = b?.scim.enabled) ? t : null,
                        teamSettings: _,
                        updateTeamSettings: g,
                        disableForm: D,
                        adSyncEnabled: C,
                        ssoConnectorSetup: A
                      },
                      permission: (e) => e.adminAccess.hasFullAccess || e.adminAccess.hasBillingAccess
                    }),
                    (0, y.tZ)(i.Vy, {
                      path: `${s}${ph}`,
                      component: Mb,
                      additionalProps: {
                        isAdSyncCapable: Z,
                        teamSettingsLoading: m,
                        teamSettings: _,
                        updateTeamSettings: g,
                        disableForm: N,
                        isNitroSSOInUse: T,
                        adSyncEnabled: C,
                        accountInfo: h
                      },
                      reducer: Cb.ZP
                    })
                  )
                )
          );
        }, Me.DIRECTORY_SYNC),
        bh = _o((e) => {
          const { translate: t } = (0, p.Z)(),
            { reportTACError: a } = $(),
            s = n.useRef(null),
            [i, o] = n.useState(!0),
            [r, l] = n.useState(!1),
            [c, d] = n.useState(!1),
            [u, _] = n.useState(!1),
            [m, g] = n.useState(!1),
            [y, b] = n.useState(!1),
            [h, x] = n.useState(!1),
            [S, v] = n.useState(!1),
            [f, C] = n.useState(null),
            [E, Z] = n.useState(!1),
            [T, N] = n.useState(null),
            D = e.lee.apiMiddleware.teamPlans
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
                  } = await (0, ae.I)();
                  e.lee.dispatch(H_.k0({ duo: t, duoIntegrationKey: a, duoSecretKey: n, duoApiHostname: s })), o(!1);
                } catch (e) {
                  console.error(`DuoSettings: fetchData failed with error: ${e}`);
                }
              })();
            }, []),
            n.createElement(
              X_,
              { title: t(nm) },
              n.createElement("p", { className: K_.settingsHeader }, t(nm)),
              n.createElement(
                fl,
                { label: t("team_settings_duo_enable_label"), labelHelper: t("team_settings_duo_enable_helper") },
                n.createElement(J_.Z, {
                  genericErrorMessage: t("_common_generic_error"),
                  isDisabled: i || r,
                  saveValueFunction: () => {
                    const t = !e.lee.state.hasDuo;
                    return (
                      l(!0),
                      e.lee.dispatch(H_.FC(t)),
                      D?.setSettings({ duo: t })
                        .then(() => l(!1))
                        .catch(() => {})
                    );
                  },
                  value: Ja.Maybe.maybe(e.lee.state.hasDuo)
                })
              ),
              n.createElement("p", { className: K_.settingsHeader }, t("team_settings_duo_header_setup")),
              n.createElement(
                fl,
                { label: t("team_settings_duo_integration_key_label"), labelHelper: t("team_settings_duo_integration_key_helper") },
                n.createElement(Id.n, {
                  containerStyle: { width: "300px" },
                  inputStyle: { minHeight: 42 },
                  defaultValue: e.lee.state.duoIntegrationKey,
                  isDisabled: c,
                  onBlur: (t) => {
                    if (c) return;
                    const a = t.target.value;
                    e.lee.dispatch(H_.a2(a)),
                      d(!0),
                      _(!1),
                      D &&
                        D.setSettings({ duoIntegrationKey: a })
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
                      n.createElement(Dd.Z, { label: t("team_settings_duo_integration_key_button"), loading: c })
                    )
                  : null
              ),
              n.createElement(
                fl,
                { label: t("team_settings_duo_secret_key_label"), labelHelper: t("team_settings_duo_secret_key_helper") },
                n.createElement(Id.n, {
                  containerStyle: { width: "300px" },
                  inputStyle: { minHeight: 42 },
                  defaultValue: e.lee.state.duoSecretKey,
                  isDisabled: m,
                  onBlur: ((t) => {
                    if (m) return;
                    const a = t.target.value;
                    e.lee.dispatch(H_.E4(a)),
                      g(!0),
                      b(!1),
                      D &&
                        D.setSettings({ duoSecretKey: a })
                          .then(() => {
                            g(!1);
                          })
                          .catch(() => {});
                  }).bind(void 0),
                  onFocus: () => b(!0),
                  placeholder: t("team_settings_duo_secret_key_hint")
                }),
                y || m
                  ? n.createElement("div", null, n.createElement(Dd.Z, { label: t("team_settings_duo_secret_key_button"), loading: m }))
                  : null
              ),
              n.createElement(
                fl,
                { label: t("team_settings_duo_api_host_label"), labelHelper: t("team_settings_duo_api_host_helper") },
                n.createElement(Id.n, {
                  containerStyle: { width: "300px" },
                  inputStyle: { minHeight: 42 },
                  defaultValue: e.lee.state.duoApiHostname,
                  isDisabled: h,
                  onBlur: ((t) => {
                    if (h) return;
                    const a = t.target.value;
                    e.lee.dispatch(H_.qf(a)),
                      x(!0),
                      v(!1),
                      D &&
                        D.setSettings({ duoApiHostname: a })
                          .then(() => {
                            x(!1);
                          })
                          .catch(() => {});
                  }).bind(void 0),
                  onFocus: () => v(!0),
                  placeholder: t("team_settings_duo_api_host_hint")
                }),
                S || h
                  ? n.createElement("div", null, n.createElement(Dd.Z, { label: t("team_settings_duo_api_host_button"), loading: h }))
                  : null
              ),
              n.createElement("p", { className: K_.settingsHeader }, t("team_settings_duo_header_directory")),
              n.createElement(
                fl,
                {
                  label: t("team_settings_duo_upload_csv_label"),
                  labelHelper: n.createElement(
                    "ol",
                    { className: am.uploadCsvLabel },
                    n.createElement("li", null, t("team_settings_duo_upload_csv_helper_step_one")),
                    n.createElement("li", null, t("team_settings_duo_upload_csv_helper_step_two")),
                    n.createElement("li", null, t("team_settings_duo_upload_csv_helper_step_three"))
                  )
                },
                n.createElement(
                  "div",
                  { className: am.fileContainer },
                  n.createElement(
                    "div",
                    { className: am.file },
                    n.createElement("span", { className: am.fileIcon }),
                    n.createElement(
                      "div",
                      { className: am.fileTitle },
                      T
                        ? [
                            n.createElement("div", { key: "header", className: am.fileTitleHeader }, T),
                            n.createElement(
                              "div",
                              { key: "progress", className: am.fileProgressBackground },
                              n.createElement("div", { className: E ? am.fileProgressComplete : am.fileProgress })
                            ),
                            n.createElement(
                              "p",
                              {
                                key: "hint",
                                className: [am.fileTitleHint, E && f ? am.fileTitleHintError : am.fileTitleHintSuccess].join(" ")
                              },
                              t(
                                E
                                  ? f
                                    ? "team_settings_duo_upload_csv_feedback_error"
                                    : "team_settings_duo_upload_csv_feedback_success"
                                  : "team_settings_duo_upload_csv_feedback_progress"
                              )
                            )
                          ]
                        : [n.createElement("div", { key: "header", className: am.fileTitleHeader }, "duo_usernames.csv")]
                    )
                  ),
                  n.createElement(
                    "div",
                    { className: am.fileButtons },
                    n.createElement("input", {
                      type: "file",
                      id: "file",
                      accept: "text/csv, text/plain, .csv",
                      ref: s,
                      style: { display: "none" },
                      onChange: (() => {
                        var e;
                        T && N(null);
                        const t = null != (e = s.current?.files?.[0]) ? e : { name: "" };
                        N(t.name),
                          M &&
                            M.uploadDuoCsv(t)
                              .then(() => {
                                Z(!0), setTimeout(() => N(null), 2e3);
                              })
                              .catch((e) => {
                                C(e.code.toLowerCase()), Z(!0);
                              });
                      }).bind(void 0)
                    }),
                    n.createElement(em.Z, {
                      label: t("team_settings_duo_upload_csv_button_upload"),
                      onClick: (() => {
                        s.current?.click();
                      }).bind(void 0)
                    }),
                    n.createElement(tm, {
                      data: { login: e.lee.globalState.user.session.login, uki: e.lee.globalState.user.session.uki },
                      label: t("team_settings_duo_upload_csv_button_download"),
                      style: { marginLeft: "16px" },
                      targetUri: "https://ws1.dashlane.com/3/strongauth/exportDuoUsernames"
                    })
                  ),
                  f
                    ? n.createElement(
                        "div",
                        { className: am.fileError },
                        n.createElement(
                          "div",
                          { className: am.fileErrorTitle },
                          n.createElement("span", { className: am.fileErrorTitleIcon }, "!"),
                          t("team_settings_duo_upload_csv_error_title")
                        ),
                        n.createElement("p", { className: am.fileErrorContent }, t(`team_settings_duo_upload_csv_error_${f}`))
                      )
                    : null
                )
              )
            )
          );
        }, Me.DUO),
        hh = _o((e) => {
          const [t, a] = (0, n.useState)(!1),
            [i, r] = (0, n.useState)(!1),
            [l, u] = (0, n.useState)(!1),
            [_, m] = (0, n.useState)(!1),
            [g, b] = (0, n.useState)(""),
            [h, x] = (0, n.useState)(!1),
            { translate: S } = (0, p.Z)(),
            { reportTACError: v } = $(),
            { showToast: C } = (0, y.pm)();
          (0, n.useEffect)(() => {
            (0, j.Nc)(o.PageView.TacSettingsAccountRecovery),
              (async () => {
                if ((a(!0), (0, sn.v0)(e.lee.globalState)))
                  try {
                    const {
                      teamInfo: { recoveryEnabled: t }
                    } = await (0, ae.I)();
                    e.lee.dispatch(im.x({ recoveryEnabled: t }));
                    const a = await (async () => {
                      const t = (0, sn.v0)(e.lee.globalState);
                      if (t && t.teamId) {
                        const e = await (0, Un.mP)({ teamId: t.teamId });
                        return Boolean(e.length);
                      }
                      return v(new Error(en.N)), !1;
                    })();
                    m(a);
                  } catch (e) {
                    console.error(e);
                  } finally {
                    a(!1);
                  }
                else v(new Error(en.N));
              })();
          }, []);
          const E = async (t) => {
              a(!0);
              const n = (0, f.ev)(e.lee.globalState);
              if (n)
                try {
                  await (0, Un.jy)({ teamId: n, settings: { recoveryEnabled: t } }),
                    e.lee.dispatch(im.Zn(t)),
                    C({
                      id: "toggleRecovery",
                      description: S(
                        t
                          ? "team_settings_master_password_policies_dialog_alert_label_available"
                          : "team_settings_master_password_policies_dialog_alert_label_unavailable"
                      ),
                      action: {
                        label: S("common_alert_undo_action"),
                        onClick: () => {
                          E(!t);
                        }
                      }
                    }),
                    a(!1);
                } catch (e) {
                  a(!1);
                }
              else v(new Error(en.N));
            },
            Z = async () => {
              u((e) => !e);
            },
            T = async () => {
              r(!0);
              const t = await (0, Un.RR)({ masterPassword: g });
              r(!1), t ? (await Promise.all([Z(), E(!e.lee.state.recoveryEnabled)]), b(""), x(!1)) : x(!0);
            },
            N = _ && e.lee.state.recoveryEnabled;
          return (0, c.tZ)(
            X_,
            { title: S("team_settings_menu_title_account_recovery") },
            (0, c.tZ)(
              "div",
              null,
              (0, c.tZ)(
                "div",
                { sx: { position: "relative" } },
                (0, c.tZ)(
                  d.nvN,
                  { size: "large", as: "h3", sx: { fontWeight: 600, marginBottom: "8px", color: "ds.text.neutral.catchy" } },
                  S("team_settings_master_password_policies_settings_recover_label")
                ),
                (0, c.tZ)(
                  d.nvN,
                  { sx: { fontSize: 14, marginBottom: "40px", paddingRight: "80px" } },
                  S("team_settings_master_password_policies_settings_recover_label_helper")
                ),
                (0, c.tZ)(y.ZD, {
                  sx: { position: "absolute", top: 0, right: 0 },
                  disabled: t || N,
                  checked: e.lee.state.recoveryEnabled,
                  onChange: Z
                })
              ),
              (0, c.tZ)(
                d.nvN,
                { size: "large", as: "h3", sx: { fontWeight: 600, marginBottom: "24px", color: "ds.text.neutral.catchy" } },
                S("team_settings_master_password_policies_settings_how_it_works_label")
              ),
              lm || (lm = (0, c.tZ)(rm, null)),
              (0, c.tZ)(
                d.nvN,
                { sx: { fontSize: 14, lineHeight: "20px", marginBottom: "4px", color: "ds.text.neutral.quiet" } },
                S("team_settings_master_password_policies_settings_how_it_works_label_helper")
              ),
              (0, c.tZ)(
                d.rUS,
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
                (0, c.tZ)(d.Ejs, { as: "span" }, S("team_settings_master_password_policies_settings_how_it_works_label_helper_link_text")),
                cm || (cm = (0, c.tZ)(y.JO, { name: "ActionOpenExternalLinkOutlined", size: "small", color: "ds.text.brand.standard" }))
              )
            ),
            (0, c.tZ)(
              sm.Z,
              {
                isOpen: l,
                title: e.lee.state.recoveryEnabled
                  ? S("team_settings_master_password_policies_dialog_title_disable")
                  : S("team_settings_master_password_policies_dialog_title_enable"),
                labelDismiss: S("team_settings_master_password_policies_dialog_cta_cancel_label"),
                labelConfirm: e.lee.state.recoveryEnabled
                  ? S("team_settings_master_password_policies_dialog_cta_confirm_label_disable")
                  : S("team_settings_master_password_policies_dialog_cta_confirm_label_enable"),
                onDismiss: () => {
                  b(""), x(!1), u(!1);
                },
                onConfirm: () => T(),
                ctaIsDisabled: i || !g,
                onChange: (e) => {
                  b(e.target.value), x(!1);
                },
                isMasterPasswordInvalid: h,
                onKeyDown: (e) => {
                  (async (e) => {
                    13 === e.keyCode && g && (await T());
                  })(e);
                }
              },
              e.lee.state.recoveryEnabled &&
                (0, c.tZ)(
                  "div",
                  null,
                  (0, c.tZ)(
                    "p",
                    { className: K_.confirmationContent },
                    S.markup("team_settings_master_password_policies_confirmation_dialog_disable_label_markup")
                  ),
                  (0, c.tZ)(
                    "p",
                    { className: K_.confirmationContent },
                    S("team_settings_master_password_policies_confirmation_dialog_disable_sublabel")
                  )
                ),
              !e.lee.state.recoveryEnabled &&
                (0, c.tZ)(
                  "div",
                  null,
                  (0, c.tZ)(
                    "p",
                    { className: K_.confirmationContent },
                    S.markup("team_settings_master_password_policies_confirmation_dialog_enable_label_markup", {}, { linkTarget: "_blank" })
                  ),
                  (0, c.tZ)(
                    "p",
                    { className: K_.confirmationContent },
                    S("team_settings_master_password_policies_confirmation_dialog_enable_sublabel")
                  )
                )
            )
          );
        }, Me.ACCOUNT_RECOVERY),
        xh = _o(({ lee: e }) => {
          var t;
          const a = (0, i.$B)(),
            { teamId: s } = (0, zo.fV)(),
            [o, r] = (0, n.useState)(!1),
            [l, d] = (0, n.useState)(""),
            { initSsoProvisioning: u } = (0, Fe.u)(Um.y),
            { esConfig: _, esConfigLoading: m } = $p(),
            { teamDeviceConfig: p, teamDeviceConfigLoading: g } = Bg({ draft: !1, deviceAccessKey: _?.deviceAccessKey }),
            {
              shouldShowBuyOrUpgradePaywall: y,
              isTrialOrGracePeriod: b,
              planType: h
            } = null != (t = Le(e.permission.adminAccess)) ? t : {},
            x = y && (h === Se.lD.Starter || h === Se.lD.Team),
            S = (0, n.useCallback)(
              async (e) => {
                if (!e) return;
                r(!1), d("");
                const t = await u({ teamId: `${e}` });
                r(!0), (0, Bm.hx)(t) && d(t.error.tag);
              },
              [u]
            );
          (0, n.useEffect)(() => {
            S(s);
          }, [S, s]);
          const v = (0, qe.k)(Um.y, "ssoProvisioning");
          if (l || v.status === je.rq.Error)
            return (0, c.tZ)(hb, {
              onReloadData: () => {
                S(s);
              },
              errorTag: l
            });
          if (!o || m || g || v.status === je.rq.Loading) return xb || (xb = (0, c.tZ)(fb, null));
          const { inferredSsoState: f } = v.data.global,
            C = ((e, t, a, n) => {
              const s = `${e}${vb.SELF_HOSTED_SSO}`,
                i = `${e}${vb.CONFIDENTIAL_SSO}`,
                o = `${e}${vb.SSO_CONNECTOR}`,
                r = `${e}${vb.UPGRADE_PAYWALL}`;
              return a
                ? s
                : n
                ? r
                : {
                    [Pm.s5.enum.NitroComplete]: i,
                    [Pm.s5.enum.NitroIncomplete]: null,
                    [Pm.s5.enum.SelfHostedComplete]: s,
                    [Pm.s5.enum.SelfHostedIncomplete]: null,
                    [Pm.s5.enum.SsoConnectorComplete]: o,
                    [Pm.s5.enum.SsoConnectorIncomplete]: null,
                    [Pm.s5.enum.SsoConnectorToSelfHostedMigration]: s,
                    [Pm.s5.enum.None]: null,
                    [Pm.s5.enum.Unknown]: null
                  }[t];
            })(a.path, f, p?.configProperties.scimEnabled, x);
          return (0, c.tZ)(
            i.rs,
            null,
            (0, c.tZ)(i.AW, { path: `${a.path}${vb.SELF_HOSTED_SSO}` }, (0, c.tZ)(xy, { backRoute: a.url })),
            (0, c.tZ)(i.AW, { path: `${a.path}${vb.CONFIDENTIAL_SSO}` }, (0, c.tZ)(Vp, { backRoute: a.url })),
            (0, c.tZ)(i.AW, { path: `${a.path}${vb.UPGRADE_PAYWALL}` }, (0, c.tZ)(gb, { isTrialOrGracePeriod: null != b && b })),
            (0, c.tZ)(i.AW, { path: `${a.path}${vb.SSO_CONNECTOR}` }, (0, c.tZ)(By, { lee: e })),
            (0, c.tZ)(i.AW, { exact: !0, path: a.path }, C ? (0, c.tZ)(i.l_, { to: C }) : Sb || (Sb = (0, c.tZ)(rb, null)))
          );
        }, Me.SSO);
      function Sh({ path: e }) {
        return n.createElement(
          i.GB,
          { path: e, permission: (e) => e.adminAccess.hasFullAccess },
          n.createElement(
            i.rs,
            null,
            n.createElement(i.l_, { exact: !0, from: e, to: `${e}${s.B9.POLICIES}` }),
            n.createElement(i.Vy, { path: `${e}${s.B9.POLICIES}`, component: gh, reducer: jm.Z }),
            n.createElement(i.Vy, { path: `${e}${s.B9.DIRECTORY_SYNC}`, component: yh }),
            n.createElement(i.Vy, { path: `${e}${s.B9.DUO}`, component: bh, reducer: H_.ZP }),
            n.createElement(i.Vy, { path: `${e}${s.B9.MASTER_PASSWORD_POLICIES}`, component: hh, reducer: im.ZP }),
            n.createElement(i.Vy, { path: `${e}${s.B9.SSO}`, component: xh })
          )
        );
      }
      var vh,
        fh,
        Ch,
        Eh,
        Zh,
        Th,
        Nh,
        Dh = a(1294),
        Mh = a(57904),
        Ih = a(459199),
        Ah = a(743265),
        wh = a(771906),
        kh = a(195764),
        Oh = a(27302);
      const Lh = ({ title: e, content: t, ctaText: a, ctaAction: n, buttonIcon: s }) =>
          (0, y.tZ)(
            d.Ejs,
            { flexDirection: "column", gap: 4 },
            (0, y.tZ)(y.X6, { as: "h1" }, e),
            (0, y.tZ)(y.nv, null, t),
            (0, y.tZ)(
              y.zx,
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
        zh = ({ setContactSupportDialogIsOpen: e }) => {
          const { translate: t } = (0, p.Z)(),
            a = (0, i.Xo)(),
            s = (0, i.k6)(),
            o = [
              (0, y.tZ)(Lh, {
                key: "accessGuides",
                title: t("team_get_started_help_access_guide_title"),
                content: t("team_get_started_help_access_guide_content"),
                ctaText: t("team_get_started_help_access_guide_cta"),
                ctaAction: () => {
                  (0, z.Yo)(oe.EL);
                },
                buttonIcon: vh || (vh = (0, y.tZ)(y.JO, { name: "ActionOpenExternalLinkOutlined" }))
              }),
              (0, y.tZ)(Lh, {
                key: "customize",
                title: t("team_get_started_help_customize_title"),
                content: t("team_get_started_help_customize_content"),
                ctaText: t("team_get_started_help_customize_cta"),
                ctaAction: () => {
                  s.push(a.routes.teamSettingsRoutePath);
                }
              }),
              (0, y.tZ)(Lh, {
                key: "activity",
                title: t("team_get_started_help_activity_title"),
                content: t("team_get_started_help_activity_content"),
                ctaText: t("team_get_started_help_activity_cta"),
                ctaAction: () => {
                  s.push(a.routes.teamActivityRoutePath);
                }
              }),
              (0, y.tZ)(Lh, {
                key: "deploy",
                title: t("team_get_started_help_deploy_title"),
                content: t("team_get_started_help_deploy_content"),
                ctaText: t("team_get_started_help_deploy_cta"),
                ctaAction: () => {
                  (0, z.Yo)("https://support.dashlane.com/hc/articles/360012482199-Dashlane-deployment-guide-for-admins#invite_members");
                },
                buttonIcon: fh || (fh = (0, y.tZ)(y.JO, { name: "ActionOpenExternalLinkOutlined" }))
              }),
              (0, y.tZ)(
                d.Ejs,
                { key: "moreHelp", flexDirection: "column", gap: 4, justifyContent: "start" },
                (0, y.tZ)(y.X6, { as: "h1" }, t("team_get_started_help_more_title")),
                (0, y.tZ)(
                  y.zx,
                  {
                    size: "small",
                    mood: "brand",
                    sx: { textAlign: "left" },
                    intensity: "supershy",
                    layout: "iconTrailing",
                    icon: Ch || (Ch = (0, y.tZ)(y.JO, { name: "ActionOpenExternalLinkOutlined" })),
                    onClick: () => (0, z.Yo)(oe.EL)
                  },
                  t("team_get_started_help_visit_help_center")
                ),
                (0, y.tZ)(
                  y.zx,
                  {
                    size: "small",
                    mood: "brand",
                    sx: { textAlign: "left" },
                    intensity: "supershy",
                    layout: "iconTrailing",
                    icon: Eh || (Eh = (0, y.tZ)(y.JO, { name: "ActionOpenExternalLinkOutlined" })),
                    onClick: () => (0, z.Yo)(oe.VH)
                  },
                  t("team_get_started_help_visit_help_resources")
                ),
                (0, y.tZ)(
                  y.zx,
                  {
                    size: "small",
                    mood: "brand",
                    sx: { textAlign: "left" },
                    intensity: "supershy",
                    layout: "iconTrailing",
                    icon: Zh || (Zh = (0, y.tZ)(y.JO, { name: "ActionOpenExternalLinkOutlined" })),
                    onClick: () => e(!0)
                  },
                  t("team_get_started_help_visit_help_contact_support")
                )
              )
            ],
            [r, l] = (0, n.useState)(0),
            c = o.length;
          return (0, y.tZ)(
            d.Zbd,
            {
              sx: {
                padding: "32px",
                backgroundColor: "ds.container.agnostic.neutral.supershy",
                borderColor: "ds.border.neutral.quiet.idle",
                maxWidth: "480px",
                minWidth: "320px"
              }
            },
            (0, y.tZ)(
              d.Ejs,
              {
                alignItems: "center",
                sx: { marginBottom: "16px" },
                flexDirection: "row",
                flexWrap: "nowrap",
                justifyContent: "space-between"
              },
              (0, y.tZ)(y.nv, { color: "ds.text.neutral.quiet" }, r + 1, "/", c),
              (0, y.tZ)(
                d.Ejs,
                { gap: 4 },
                (0, y.tZ)(y.zx, {
                  "aria-label": t("_common_action_back"),
                  onClick: () => {
                    l((e) => (e - 1 < 0 ? c - 1 : (e - 1) % c));
                  },
                  mood: "neutral",
                  intensity: "supershy",
                  icon: Th || (Th = (0, y.tZ)(y.JO, { name: "CaretLeftOutlined" })),
                  layout: "iconOnly"
                }),
                (0, y.tZ)(y.zx, {
                  "aria-label": t("_common_action_continue"),
                  onClick: () => {
                    l((e) => (e + 1) % c);
                  },
                  mood: "neutral",
                  intensity: "supershy",
                  icon: Nh || (Nh = (0, y.tZ)(y.JO, { name: "CaretRightOutlined" })),
                  layout: "iconOnly"
                })
              )
            ),
            o[r]
          );
        },
        Rh = ({ isOpen: e, setIsOpen: t }) => {
          const { translate: a } = (0, p.Z)(),
            n = (0, i.k6)(),
            { setAsInteracted: s } = (0, De.d)(l.NotificationName.TacGetStartedDismissPage),
            r = (0, i.Xo)();
          return (0, y.tZ)(
            G.o,
            {
              title: a("team_get_started_close_page_title"),
              isOpen: e,
              onRequestClose: () => {
                (0, j.Kz)(
                  new o.UserCallToActionEvent({ callToActionList: [o.CallToAction.Cancel, o.CallToAction.Confirm], hasChosenNoAction: !0 })
                ),
                  t(!1);
              },
              footer: (0, y.tZ)(
                d.cNS,
                null,
                (0, y.tZ)(
                  y.zx,
                  {
                    sx: { mr: "12px" },
                    mood: "neutral",
                    intensity: "quiet",
                    onClick: () => {
                      (0, j.Kz)(
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
                (0, y.tZ)(
                  y.zx,
                  {
                    mood: "danger",
                    intensity: "catchy",
                    onClick: () => {
                      (0, j.Kz)(
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
        jh = ({ allTasksCompleted: e }) => {
          var t;
          const { translate: a } = (0, p.Z)(),
            { teamInfo: n } = (0, _.G)(),
            s = null != (t = n?.teamInfo?.name) ? t : "";
          return (0, y.tZ)(
            d.Ejs,
            { flexDirection: "column", gap: "8px" },
            (0, y.tZ)(
              y.nv,
              { textStyle: "ds.specialty.brand.small", sx: { fontWeight: "700" } },
              a(e ? "team_get_started_title_tasks_completed" : "team_get_started_welcome_title")
            ),
            (0, y.tZ)(y.nv, { color: "ds.text.neutral.quiet" }, e ? null : a("team_get_started_welcome_subtitle", { team: s }))
          );
        },
        Ph = a.p + "b86402fcddc7bfe6ab1b.png";
      var Uh;
      const Bh = a.p + "f2c931634a3b982f7f78.png";
      var Gh;
      var Fh;
      var qh;
      var Vh;
      var $h,
        Wh = a(177960);
      const Hh = {
          [wh.G.CREATE_ACCOUNT]: ({ isUpNext: e }) =>
            n.createElement(Qd, {
              isUpNext: e,
              upNextImage: Gh || (Gh = n.createElement("img", { alt: "", src: Bh })),
              isCompleted: !0,
              title: "team_get_started_create_account_title",
              content: "team_get_started_create_account_content",
              helpDocLink: "",
              ctaOnClick: () => {},
              ctaText: "team_get_started_visit_vault_cta"
            }),
          [wh.G.VISIT_VAULT]: ({ isCompleted: e, isUpNext: t }) => {
            const { setIsVaultNavigationModalOpen: a, setOnBeforeNavigateCallback: s } = (0, n.useContext)(he),
              { markVaultAsVisited: i } = (0, kh.V)();
            return n.createElement(Qd, {
              isUpNext: t,
              upNextImage: $h || ($h = n.createElement("img", { alt: "", src: Xd })),
              isCompleted: e,
              title: "team_get_started_visit_vault_title",
              content: "team_get_started_visit_vault_content",
              helpDocLink: "https://support.dashlane.com/hc/en-us/articles/115004367629",
              ctaOnClick: () => {
                (0, j.Kz)(new o.UserClickEvent({ button: o.Button.OpenVault })), (0, z.nL)(oe.F1), i(), (0, Wh.c)(Wh.O.VisitVault);
              },
              ctaText: "team_get_started_visit_vault_cta",
              infoBoxText: "team_get_started_visit_vault_infobox"
            });
          },
          [wh.G.INVITE_MEMBERS]: ({ isCompleted: e, isUpNext: t }) => {
            const a = (0, i.Xo)(),
              s = (0, i.k6)();
            return n.createElement(Qd, {
              isUpNext: t,
              upNextImage: qh || (qh = n.createElement("img", { alt: "", src: Xd })),
              isCompleted: e,
              title: "team_get_started_invite_title",
              content: "team_get_started_invite_content",
              helpDocLink: "https://support.dashlane.com/hc/en-us/articles/208864325",
              ctaOnClick: () => {
                Jd(), s.push({ pathname: a.routes.teamMembersRoutePath, state: { openSendInvitesDialog: !0 } });
              },
              ctaText: "team_get_started_invite_cta",
              infoBoxText: "team_get_started_invite_member_infobox"
            });
          },
          [wh.G.ASSIGN_ADMIN]: ({ isCompleted: e, isUpNext: t, isCtaDisabled: a }) => {
            const s = (0, i.Xo)(),
              o = (0, i.k6)();
            return n.createElement(Qd, {
              isUpNext: t,
              upNextImage: eu || (eu = n.createElement("img", { alt: "", src: Xd })),
              isCompleted: e,
              isCtaDisabled: a,
              disabledCtaTooltipText: "team_get_started_assign_admin_disabled_tooltip",
              title: "team_get_started_assign_admin_title",
              content: "team_get_started_assign_admin_content",
              helpDocLink: "https://support.dashlane.com/hc/articles/208022229-Manage-Starter-Team-or-Business-plan-members#change-role",
              ctaOnClick: () => {
                Jd(), o.push({ pathname: s.routes.teamMembersRoutePath, state: { [tu]: !0 } });
              },
              ctaText: "team_get_started_assign_admin_cta",
              infoBoxText: "team_get_started_assign_admin_infobox"
            });
          },
          [wh.G.CREATE_SHARING_GROUP]: ({ isCompleted: e, isUpNext: t, isCtaDisabled: a, isDisabled: s }) => {
            const r = (0, i.Xo)(),
              l = (0, i.k6)();
            return n.createElement(Qd, {
              isUpNext: t,
              upNextImage: Fh || (Fh = n.createElement("img", { alt: "", src: Xd })),
              isDisabled: s,
              disabledText: "team_get_started_sharing_turned_off",
              isCtaDisabled: a,
              disabledCtaTooltipText: "team_get_started_sharing_group_disabled_tooltip",
              isCompleted: e,
              title: "team_get_started_sharing_group_title",
              content: "team_get_started_sharing_group_content",
              helpDocLink: "https://support.dashlane.com/hc/articles/115003949765",
              ctaOnClick: () => {
                (0, j.Kz)(new o.UserClickEvent({ button: o.Button.OpenGroupsPage })), l.push(r.routes.teamGroupsRoutePath);
              },
              ctaText: "team_get_started_sharing_group_cta",
              infoBoxText: "team_get_started_sharing_group_infobox"
            });
          },
          [wh.G.SHARE_ITEM]: ({ isCompleted: e, isUpNext: t, isCtaDisabled: a, isDisabled: s }) => {
            const r = (0, i.Xo)();
            return n.createElement(Qd, {
              isUpNext: t,
              upNextImage: Vh || (Vh = n.createElement("img", { alt: "", src: Bh })),
              isDisabled: s,
              disabledText: "team_get_started_sharing_turned_off",
              isCompleted: e,
              isCtaDisabled: a,
              disabledCtaTooltipText: "team_get_started_sharing_disabled_tooltip",
              title: "team_get_started_sharing_items_title",
              content: "team_get_started_sharing_items_content",
              helpDocLink: "https://support.dashlane.com/hc/en-us/articles/202699021",
              ctaOnClick: () => {
                (0, j.Kz)(new o.UserClickEvent({ button: o.Button.OpenSharingCenter })),
                  (0, z.nL)(`${oe.F1}#${r.routes.userSharingCenter}`);
              },
              ctaText: "team_get_started_sharing_items_cta",
              infoBoxText: "team_get_started_sharing_items_infobox"
            });
          },
          [wh.G.CHECK_PASSWORD_HEALTH]: ({ isCompleted: e, isUpNext: t, isCtaDisabled: a }) => {
            const s = (0, i.Xo)(),
              r = (0, i.k6)();
            return n.createElement(Qd, {
              isUpNext: t,
              upNextImage: Uh || (Uh = n.createElement("img", { alt: "", src: Ph })),
              isCompleted: e,
              isCtaDisabled: a,
              title: "team_get_started_password_health_title",
              content: "team_get_started_password_health_content",
              helpDocLink: "https://support.dashlane.com/hc/en-us/articles/360016225300",
              ctaOnClick: () => {
                (0, j.Kz)(new o.UserClickEvent({ button: o.Button.OpenDashboard })), r.push(s.routes.teamDashboardRoutePath);
              },
              ctaText: "team_get_started_password_health_cta",
              disabledCtaTooltipText: "team_get_started_password_health_cta_disabled",
              infoBoxText: "team_get_started_password_health_infobox"
            });
          }
        },
        Kh = ({ tasks: e, completed: t, isUpNext: a }) => {
          const { translate: s } = (0, p.Z)();
          if (!e.length) return null;
          const i = a
            ? null
            : (0, y.tZ)(
                y.X6,
                { as: "h2", textStyle: "ds.title.section.medium", sx: { marginTop: "16px", marginBottom: "8px" } },
                s(t ? "team_get_started_completed_tasks_title" : "team_get_started_tasks_title")
              );
          return (0, y.tZ)(
            n.Fragment,
            null,
            i,
            e.map((e) =>
              t === e.isCompleted
                ? (({ key: e, ...t }) => {
                    if (!Hh[e]) return null;
                    const a = Hh[e];
                    return n.createElement(a, { key: e, ...t });
                  })({ isUpNext: a, ...e })
                : null
            )
          );
        },
        Yh = ({ upNextTask: e, toDoTasks: t, completedTasks: a }) =>
          (0, y.tZ)(
            d.Ejs,
            { flexDirection: "column" },
            (0, y.tZ)(Kh, { completed: !1, tasks: e ? [e] : [], isUpNext: !0 }),
            (0, y.tZ)(Kh, { completed: !1, tasks: t, isUpNext: !1 }),
            (0, y.tZ)(Kh, { completed: !0, tasks: a, isUpNext: !1 })
          ),
        Qh = ({ openDialog: e, allTasksCompleted: t }) => {
          const { translate: a } = (0, p.Z)();
          return n.createElement(
            d.Ejs,
            {
              sx: { display: "flex", marginTop: t ? "0px" : "40px", marginBottom: t ? "16px" : "80px", alignItems: "center", gap: "16px" }
            },
            n.createElement(y.nv, { color: "ds.text.neutral.quiet" }, a("team_get_started_close_guide")),
            n.createElement(
              y.zx,
              {
                onClick: () => {
                  (0, j.Kz)(new o.UserCompleteTacOnboardingTaskEvent({ onboardingTask: o.OnboardingTask.CloseGuide })), e(!0);
                },
                size: "small",
                mood: "neutral",
                intensity: "quiet"
              },
              a("team_get_started_close_guide_cta")
            )
          );
        };
      var Xh;
      var Jh;
      const ex = "onboarding_web_tacgetstarted",
        tx = ({ from: e }) => {
          const { isTeamCreator: t, status: a } = (0, ze.m)(),
            { isTeamSoftDiscontinued: s } = (0, fe.lZ)(),
            { interacted: o, status: r } = (0, De.d)(l.NotificationName.TacGetStartedDismissPage),
            c = (0, Ne._)(),
            { [ex]: d = !1 } = c.status !== je.rq.Success ? {} : c.data,
            u = (0, n.useMemo)(
              () =>
                c.status !== je.rq.Success || r !== je.rq.Success || a !== je.rq.Success || "boolean" != typeof s
                  ? null
                  : `${e}${d && !o && t && !s ? Ie.$.GET_STARTED : Ie.$.DASHBOARD}`,
              [c.status, e, d, o, r, t, a]
            );
          return u ? (0, y.tZ)(i.l_, { to: u }) : Jh || (Jh = (0, y.tZ)(Vo, null));
        };
      function ax(e, t) {
        return !t.adminAccess || t.adminAccess.hasPermissionLevel(e);
      }
      const nx = _o(() => {
          var e, t, a;
          const { translate: s } = (0, p.Z)(),
            { teamOffers: y } = (0, m.a)({}),
            { teamInfo: b } = (0, _.G)(),
            x = (0, u.Y)(),
            v = x.status === r.rq.Success && x.data?.planType === l.PlanType.Invoice,
            [f, C] = (0, n.useState)(0),
            [E, Z] = (0, n.useState)(),
            [T, N] = (0, n.useState)(""),
            [D, M] = (0, n.useState)(!0),
            [I, A] = (0, n.useState)(Va.FORM),
            [w, k] = (0, n.useState)();
          (0, n.useEffect)(() => {
            const e = (0, i.CN)().get("plan");
            y && "business" === e && Z(y.businessOffer);
          }, [y]);
          const { alert: O, show: L } = (0, d.VYq)({
              message: s("team_account_teamplan_changeplan_error_generic"),
              severity: d.BLW.ERROR,
              dismissDelay: 4e4
            }),
            z = null != (e = y?.businessOffer?.currency) ? e : "",
            R = (null != (t = b?.seats?.paid) ? t : 0) + (null != (a = b?.seats?.extraFree) ? a : 0),
            { logChangePlanEvent: j } = aa({
              selectedOffer: E,
              hasPromo: !1,
              currentSeats: R,
              additionalSeats: f,
              planChangeStep: o.PlanChangeStep.SelectPlanTier
            }),
            { setNavBarChildren: P } = (0, n.useContext)(Nt);
          (0, n.useEffect)(
            () => (
              P(Wa || (Wa = (0, c.tZ)(Xa, null))),
              () => {
                P(null);
              }
            ),
            []
          );
          const { loading: U, billingCountry: B } = S();
          return U
            ? (0, c.tZ)(d.HoD, { color: d.colors.midGreen00 })
            : (0, c.tZ)(
                d.Ejs,
                { sx: { margin: "45px", width: "1180px" } },
                (0, c.tZ)(
                  "div",
                  {
                    style: {
                      bottom: "12px",
                      position: "absolute",
                      marginLeft: "auto",
                      marginRight: "auto",
                      left: 0,
                      right: 0,
                      width: "600px"
                    }
                  },
                  O
                ),
                (0, c.tZ)(
                  d.Ejs,
                  { flexDirection: "column", gap: "8px" },
                  I === Va.FORM
                    ? (0, c.tZ)(
                        d.Ejs,
                        { gap: "8px" },
                        (0, c.tZ)(
                          d.k$b,
                          { sx: { width: "646px" } },
                          (0, c.tZ)(
                            d.Ejs,
                            { flexDirection: "column", gap: "8px" },
                            (0, c.tZ)($t, {
                              teamOffers: y,
                              selectedOffer: E,
                              handleSelection: (e) => {
                                j(e), Z(e);
                              }
                            }),
                            v
                              ? Ha || (Ha = (0, c.tZ)(Oa, null))
                              : "US" !== B
                              ? (0, c.tZ)(
                                  n.Fragment,
                                  null,
                                  (0, c.tZ)(g.I, { b2b: !0, hideUpdateButton: !0, styles: { padding: "32px" } }),
                                  Ka || (Ka = (0, c.tZ)(qa, { isInAccountSummary: !1 })),
                                  (0, c.tZ)(xa, { email: T, emailValid: D, setEmail: N, setEmailValid: M })
                                )
                              : (0, c.tZ)(
                                  n.Fragment,
                                  null,
                                  (0, c.tZ)(g.I, { b2b: !0, hideUpdateButton: !0, styles: { padding: "32px" } }),
                                  (0, c.tZ)(xa, { email: T, emailValid: D, setEmail: N, setEmailValid: M })
                                )
                          )
                        ),
                        (0, c.tZ)(
                          d.k$b,
                          { sx: { width: "470px" } },
                          (0, c.tZ)(
                            d.Ejs,
                            { flexDirection: "column", gap: "8px" },
                            (0, c.tZ)(Ma, { teamOffers: y, currentSeats: R }),
                            (0, c.tZ)(ga, {
                              currentSeats: R,
                              additionalSeats: f,
                              currency: z,
                              selectedOffer: E,
                              email: T,
                              emailValid: D,
                              onSuccess: () => {
                                A(() => Va.SUCCESS);
                              },
                              onError: L,
                              setAdditionalSeats: C,
                              setOrderSummaryData: k
                            }),
                            Ya || (Ya = (0, c.tZ)(Sa, null))
                          )
                        )
                      )
                    : null,
                  I === Va.SUCCESS && w && E
                    ? (0, c.tZ)(
                        d.Ejs,
                        { sx: { display: "flex", flexWrap: "nowrap", gap: "16px" } },
                        (0, c.tZ)(
                          d.Ejs,
                          { sx: { display: "flex", flexGrow: "2", maxWidth: "632px", flexDirection: "column" } },
                          (0, c.tZ)(Na, { targetPlan: (0, jt.sK)(E) ? "business" : "team" })
                        ),
                        (0, c.tZ)(
                          d.Ejs,
                          { sx: { display: "flex", flexGrow: "1", gap: "16px", flexDirection: "column" } },
                          (0, c.tZ)(ka, { currency: z, selectedOffer: E, costData: w }),
                          Qa || (Qa = (0, c.tZ)(h, null))
                        )
                      )
                    : null
                )
              );
        }, Ie.$.CHANGE_PLAN),
        sx = _o(({ lee: e }) => {
          const t = (0, O.B)(),
            a = (0, u.Y)(),
            s = (0, te.C)(),
            { reportTACError: i } = $(),
            r = (0, nn.s)(),
            { search: l } = (0, Re.TH)(),
            [c, d] = (0, n.useState)(!1),
            [_, m] = (0, n.useState)(!1),
            [p, g] = (0, n.useState)(!1),
            [b, h] = (0, n.useState)(!1),
            [x, S] = (0, n.useState)(),
            [v, f] = (0, n.useState)(),
            [C, E] = (0, n.useState)(Ja.Maybe.nothing()),
            Z = (0, n.useCallback)(async () => {
              const t = (0, sn.v0)(e.globalState);
              if (t)
                try {
                  const e = await new an.Z().status({ auth: t, teamInformation: !0, autoRenewal: !0 });
                  E(Ja.Maybe.maybe(e.planName));
                } catch (e) {
                  const t = new Error((0, tn.i)(e));
                  i(t);
                }
              else i(new Error(en.N));
            }, []);
          (0, n.useEffect)(() => {
            Z(), (0, j.Nc)(o.PageView.TacAccount);
          }, [Z]);
          const T = (e) => {
            "open" === e && (g(!0), m(!1), h(!1)), "close" === e && ((0, j.Nc)(o.PageView.TacAccount), g(!1), h(!1));
          };
          if (
            ((0, n.useEffect)(() => {
              l?.includes("showSeatsDialog") &&
                setTimeout(() => {
                  var e, t, a, n;
                  (0, j.Kz)(
                    new o.UserBuySeatEvent({
                      flowStep: o.FlowStep.Start,
                      hasPromo: !1,
                      initialSeatCount: null != (e = r?.seatsNumber) ? e : 0,
                      priceAmountCents: null != (t = r?.nextBillingDetails.amount) ? t : 0,
                      priceCurrencyCode: o.PriceCurrencyCode[null != (a = r?.nextBillingDetails.currency) ? a : ""],
                      purchasedSeatCount: null != (n = r?.seatsNumber) ? n : 0
                    })
                  ),
                    T("open");
                }, 2e3);
            }, []),
            !s || !r)
          )
            return null;
          const { lastBillingDateUnix: N, nextBillingDetails: D, spaceTier: M, seatsNumber: I, usersToBeRenewedCount: A } = r,
            { isFreeTrial: w } = s,
            k = (e) => {
              const a = M === Se.lD.Team ? "team" : "business",
                n = `${oe.ub}?plan=${a}&subCode=${t?.subscriptionCode}`;
              (0, j.Kz)(new o.UserClickEvent({ button: o.Button.BuyDashlane, clickOrigin: e })), (0, z.Yo)(n);
            },
            L = () => {
              (0, j.Nc)(o.PageView.TacAccountCustomizeInvoice), d(!0);
            },
            R = !(a.status !== je.rq.Success || !a.data) && "invoice" === a.data.planType,
            P = () => {
              R ? m(!0) : T("open");
            };
          return (0, y.tZ)(
            "div",
            { sx: fn.ACCOUNT_PAGE },
            b
              ? null
              : (0, y.tZ)(
                  n.Fragment,
                  null,
                  (0, y.tZ)(En, {
                    lee: e,
                    onRequestBuyMoreSeats: () => {
                      (0, j.Kz)(
                        new o.UserBuySeatEvent({
                          flowStep: o.FlowStep.Start,
                          hasPromo: !1,
                          initialSeatCount: I,
                          priceAmountCents: D.amount,
                          priceCurrencyCode: o.PriceCurrencyCode[D.currency],
                          purchasedSeatCount: I
                        })
                      ),
                        P();
                    },
                    onRequestTeamUpgrade: k,
                    seatsNumber: I
                  }),
                  _ ? (0, y.tZ)(Ms, { openUpgradeDialog: () => T("open"), handleClose: () => m(!1) }) : null,
                  (0, y.tZ)(gs, {
                    lee: e,
                    handleGetPastReceipts: L,
                    onRequestTeamUpgrade: () => {
                      w ? k(o.ClickOrigin.BillingInformation) : P();
                    },
                    planName: C,
                    usersToBeRenewedCount: A
                  })
                ),
            p
              ? (0, y.tZ)(ti, {
                  key: N,
                  lee: e,
                  nextBillingDetails: D,
                  numberOfCurrentPaidSlots: I,
                  numberOfCurrentUsedSlots: A,
                  onUpgradeSuccess: (e, t) => {
                    S(e), f(t), g(!1), h(!0);
                  },
                  onRequestClose: () => T("close"),
                  planTier: M
                })
              : null,
            (0, y.tZ)(bs, {
              lee: e,
              onClose: () => {
                (0, j.Nc)(o.PageView.TacAccount), d(!1);
              },
              isOpen: c
            }),
            b && x && v
              ? (0, y.tZ)(ui, {
                  planTier: M,
                  lastAdditionalSeatsDetails: x,
                  lastBillingDetails: v,
                  onGetPastReceipts: L,
                  onNavigateBack: () => {
                    h(!1), S(void 0), f(void 0), Z();
                  }
                })
              : null
          );
        }, Ie.$.ACCOUNT),
        ix = _o(() => {
          const { translate: e } = (0, p.Z)(),
            [t, a] = (0, n.useState)(!1),
            [s, i] = (0, n.useState)(!1),
            { isLoading: l, tasks: c } = (() => {
              const { hasSharedGroupWithMembers: e = !1, status: t } = (0, Ih.A)(),
                { hasSharedAnItemWithAGroup: a = !1, status: n } = (0, Ah.W)(),
                { hasVisitedVault: s } = (0, kh.V)(),
                {
                  hasMinimumMemberCount: i,
                  hasMoreThanOneAdmin: o,
                  hasSecurityScore: l,
                  hasOnlyOneMember: c,
                  isSharingDisabled: d,
                  status: u
                } = (0, Oh.h)();
              return t === r.rq.Loading || n === r.rq.Loading || u === r.rq.Loading
                ? { isLoading: !0, tasks: [] }
                : {
                    isLoading: !1,
                    tasks: [
                      { key: wh.G.CREATE_ACCOUNT, isCompleted: !0 },
                      { key: wh.G.VISIT_VAULT, isCompleted: null != s && s },
                      { key: wh.G.INVITE_MEMBERS, isCompleted: i },
                      { key: wh.G.ASSIGN_ADMIN, isCompleted: o, isCtaDisabled: c },
                      { key: wh.G.CREATE_SHARING_GROUP, isCompleted: e, isCtaDisabled: c, isDisabled: d },
                      { key: wh.G.SHARE_ITEM, isCompleted: a, isCtaDisabled: !e, isDisabled: d },
                      { key: wh.G.CHECK_PASSWORD_HEALTH, isCtaDisabled: !l, isCompleted: l }
                    ]
                  };
            })(),
            {
              isHasSeenGetStartedLoading: u,
              hasSeenGetStarted: _,
              markGetStartedAsSeen: m
            } = (() => {
              const { data: e, status: t } = (0, qe.k)(Mh.h, "hasSeenGetStarted"),
                { markGetStartedAsSeen: a } = (0, Fe.u)(Mh.h);
              return {
                isHasSeenGetStartedLoading: t === je.rq.Loading,
                hasSeenGetStarted: t === je.rq.Success && e,
                markGetStartedAsSeen: () => {
                  a(void 0);
                }
              };
            })();
          (0, n.useEffect)(() => {
            (0, j.Nc)(o.PageView.TacOnboardingChecklist);
          }, []),
            (0, n.useEffect)(() => {
              _ || u || m();
            }, [_, u]);
          const {
              upNextTask: g,
              toDoTasks: b,
              completedTasks: h
            } = (() => {
              const e = c,
                t = c.findIndex((e) => !e.isCompleted);
              let a = null;
              return (
                t >= 0 && ((a = e[t]), e.splice(t, 1)),
                { upNextTask: a, toDoTasks: e.filter((e) => !e.isCompleted), completedTasks: e.filter((e) => e.isCompleted) }
              );
            })(),
            x = 0 === b.length && null === g;
          return (0, y.tZ)(
            d.Ejs,
            { sx: { paddingX: "80px", paddingY: "32px", maxWidth: "1900px" }, gap: "8px", flexDirection: "column" },
            (0, y.tZ)(jh, { allTasksCompleted: x }),
            x ? (0, y.tZ)(Qh, { allTasksCompleted: x, openDialog: a }) : null,
            g
              ? (0, y.tZ)(
                  y.X6,
                  { as: "h2", textStyle: "ds.title.section.medium", sx: { marginTop: "16px" } },
                  e("team_get_started_up_next_task_title")
                )
              : null,
            (0, y.tZ)(
              d.T5p,
              { fullWidth: !0, gap: "64px", gridTemplateColumns: "2fr 1fr", gridTemplateAreas: "'tasks helpTips'" },
              (0, y.tZ)(
                d.dDn,
                { gridArea: "tasks" },
                l
                  ? Xh || (Xh = (0, y.tZ)(Vo, null))
                  : (0, y.tZ)(
                      n.Fragment,
                      null,
                      (0, y.tZ)(Yh, { upNextTask: g, completedTasks: h, toDoTasks: b }),
                      x ? null : (0, y.tZ)(Qh, { allTasksCompleted: x, openDialog: a })
                    )
              ),
              (0, y.tZ)(d.dDn, { gridArea: "helpTips", sx: { paddingTop: "8px" } }, (0, y.tZ)(zh, { setContactSupportDialogIsOpen: i }))
            ),
            s ? (0, y.tZ)(ge, { onDismiss: () => i(!1) }) : null,
            (0, y.tZ)(Rh, { isOpen: t, setIsOpen: a })
          );
        }, Ie.$.GET_STARTED),
        ox = _o(({ lee: e }) => {
          const { data: t, status: a } = (0, qe.k)(Uo.B, "getReport"),
            s = (0, ve.o)(U.w.EcommerceWebB2BDiscontinuationPhase1),
            i = a === je.rq.Success ? t : il,
            r = a === je.rq.Loading,
            [l, u] = (0, n.useState)(Bo),
            [_, m] = (0, n.useState)(ol.PURCHASE),
            { reportTACError: g } = $(),
            {
              verifiedOrPendingDomain: { domain: y, status: b }
            } = qo(),
            [h, x] = (0, n.useState)(null),
            S = a === je.rq.Success && 0 === i.passwordHealthHistory.length,
            v = (0, n.useCallback)(async () => {
              const t = (0, sn.v0)(e.globalState);
              if (t)
                try {
                  const e = await new rn.Z().status({ auth: t });
                  u(e.content.team.creationDateUnix);
                } catch (e) {
                  g(e);
                }
              else g(new Error(en.N));
            }, []),
            f = (0, n.useCallback)(async () => {
              const e = await ea.C.getDarkWebInsightsSummary();
              x(e);
            }, []);
          (0, n.useEffect)(() => {
            (0, j.Nc)(o.PageView.TacDashboard), v(), f();
          }, [f, v]);
          const C = (0, gn.C)({ dismissible: !0 }),
            { translate: E } = (0, p.Z)(),
            { planFeature: Z, planCopy: T, isTeamSoftDiscontinued: N, isTrial: D } = (0, fe.lZ)(),
            [M, I] = (0, n.useState)(!1);
          return (
            (0, n.useEffect)(() => {
              N && D && !1 === s && I(!0);
            }, [N, D, s]),
            (0, $o.DX)(),
            (0, c.tZ)(
              "div",
              { sx: sl.PAGE },
              (0, c.tZ)(
                d.T5p,
                {
                  fullWidth: !0,
                  alignItems: "top",
                  gap: "32px",
                  gridTemplateColumns: "auto auto auto auto",
                  gridTemplateRows: "auto auto",
                  gridTemplateAreas: `'cards cards cards cards' '${
                    C ? "pwHealth pwHealth pwHealth upgrade" : "pwHealth pwHealth pwHealth dwi"
                  }'`
                },
                (0, c.tZ)(
                  d.dDn,
                  { gridArea: "cards" },
                  (0, c.tZ)(ar, { passwordHealth: i.passwordHealth, seats: i.seats, passwordHealthHistoryEmpty: S })
                ),
                (0, c.tZ)(
                  d.dDn,
                  { gridArea: "pwHealth", sx: { height: "418px", width: "710px" } },
                  (0, c.tZ)(Zr, { isLoading: r, report: i, passwordHealthHistoryEmpty: S, creationDateUnix: l })
                ),
                C
                  ? (0, c.tZ)(
                      d.dDn,
                      { gridArea: "upgrade", sx: { width: "282px" } },
                      (0, c.tZ)(
                        d.Zbd,
                        {
                          sx: {
                            padding: "16px",
                            backgroundColor: "ds.container.agnostic.neutral.supershy",
                            borderColor: "ds.border.neutral.quiet.idle"
                          }
                        },
                        tl || (tl = (0, c.tZ)(gn.P, { dismissible: !0 }))
                      )
                    )
                  : (0, c.tZ)(
                      d.dDn,
                      { gridArea: "dwi" },
                      b === Fo.Loading
                        ? al || (al = (0, c.tZ)(Mr, null))
                        : null !== y
                        ? (0, c.tZ)(Rr, { verifiedOrPendingDomain: y, dwiSummaryResponse: h })
                        : (0, c.tZ)(Vr, { dwiSummaryResponse: h })
                    )
              ),
              r ? nl || (nl = (0, c.tZ)(Vo, null)) : null,
              M
                ? _ === ol.PURCHASE
                  ? (0, c.tZ)(el, {
                      isOpen: !0,
                      planCopy: E(T),
                      setModalState: m,
                      handleClose: () => {
                        I(!1);
                      }
                    })
                  : (0, c.tZ)(Jr, { isOpen: !0, plan: Z, setModalState: m })
                : null
            )
          );
        }, Ie.$.DASHBOARD),
        rx = _o(({ lee: e, location: t }) => {
          const a = (0, n.useRef)(!1),
            { translate: s } = (0, p.Z)(),
            { reportTACError: r } = $(),
            l = (0, Ra.V)(),
            c = (0, fc.v)(),
            { isTeamSoftDiscontinued: d } = (0, fe.lZ)(),
            { routes: u } = (0, i.Xo)(),
            { proposeMembers: _ } = (0, Fe.u)(xc.L),
            m = (0, ve.o)("setup_rollout_cta_prod"),
            { showToast: g } = (0, y.pm)(),
            [b, h] = (0, n.useState)(!0),
            { invitePartialSuccessState: x, setInvitePartialSuccessState: S, handleInvitationResultClosed: v } = kc(),
            [C, E] = (0, n.useState)(null),
            [Z, T] = (0, n.useState)(!1),
            [N, D] = (0, n.useState)({ showError: !1, membersWithoutPublicKey: [] }),
            M = (0, n.useCallback)(() => {
              const t = (0, sn.v0)(e.globalState);
              return t || r(new Error(en.N)), t;
            }, [e.globalState, r]),
            I = (0, n.useCallback)(() => {
              T(!0),
                (0, j.Kz)(
                  new o.UserSendManualInviteEvent({
                    flowStep: o.FlowStep.Start,
                    inviteCount: 0,
                    inviteFailedCount: 0,
                    inviteResentCount: 0,
                    inviteSuccessfulCount: 0,
                    isImport: !1,
                    isResend: !1
                  })
                );
            }, []),
            A = (t) => {
              e.dispatch(Bc.eY(t));
            },
            w = (e, t) => {
              S({ show: !0, invitedMembers: e, refusedMembers: t }), A(Object.keys(e));
            },
            k = (0, n.useCallback)(
              (t, a = [], n) => {
                const i = async () => {
                    if (
                      (a.forEach((t) => {
                        e.dispatch(Bc.bh(t));
                      }),
                      !M())
                    )
                      return;
                    const t = a.map((e) => e.login);
                    try {
                      const n = await _({ proposedMemberLogins: t });
                      if ("failure" === n.tag) throw new Error(n.error);
                      if (n.data && yu(n.data)) {
                        const { refusedMembers: s } = n.data.content;
                        Object.values(s).forEach((t) => {
                          const s = a.find((e) => e.login === t);
                          w(n.data.proposedMembers, n.data.refusedMembers), e.dispatch(Bc.S2(s));
                        }),
                          (0, j.Kz)(
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
                        g({ description: s("team_members_invite_success_message"), mood: "brand" }),
                          (0, j.Kz)(
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
                        u = ["no_free_slot_free_plan", "no_free_slot"].includes(d) ? l : c;
                      a.forEach((t) => {
                        e.dispatch(Bc.S2(t));
                      }),
                        g({ description: u, mood: "danger" }),
                        (0, j.Kz)(
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
                  case "demote":
                    return E((0, y.tZ)(Kc, { lee: e, selectedMembers: a, closeDialog: () => E(null) }));
                  case "promote":
                    return E((0, y.tZ)(Wc, { lee: e, selectedMembers: a, closeDialog: () => E(null) }));
                  case "reassign":
                    return E((0, y.tZ)(ld, { lee: e, selectedMembers: a, newRole: n, closeDialog: () => E(null) }));
                  case "reactivate":
                  case "reinvite":
                    return void i();
                  case "reinviteAll":
                    return E((0, y.tZ)(Fc, { resendOrReactivate: i, closeDialog: () => E(null) }));
                  case "revoke":
                    return E((0, y.tZ)(Vc, { lee: e, selectedMembers: a, closeDialog: () => E(null) }));
                  case "generateBackupCode":
                    return E((0, y.tZ)(Uc, { memberLogin: r[0], isOpen: !0, closeBackupCodeDialog: () => E(null) }));
                  case "enableInviteLink":
                    return E((0, y.tZ)(Jc, { closeDialog: () => E(null), applyActionOnMembers: k }));
                  case "shareInviteLink":
                    return E((0, y.tZ)(Qc, { closeDialog: () => E(null) }));
                }
              },
              [l, M, w, s]
            );
          (0, n.useEffect)(() => {
            if (a.current || null === c || "boolean" != typeof d) return;
            a.current = !0;
            const n = M();
            if (!n) return;
            const { teamId: s } = n;
            s &&
              (new rn.Z()
                .status({ auth: n })
                .then((t) => {
                  var a;
                  return (
                    e.dispatch(
                      Bc.xF({
                        extraFreeSlots: t.content.team.extraFreeSlots,
                        membersNumber: t.content.team.membersNumber,
                        isFreeTrial: t.content.team.isFreeTrial,
                        teamName: null != (a = t.content.team.info.name) ? a : "",
                        teamSecurityScore: t.content.team.securityIndex
                      })
                    ),
                    (0, Un.YY)({ teamId: s })
                  );
                })
                .then((a) => {
                  e.dispatch(Bc.Wq({ members: a })), h(!1);
                  const n = a && 1 === a.length,
                    s = t.state?.openSendInvitesDialog;
                  if ((!c && !d && n) || s) I();
                  else if (t.state?.openResendPendingInvitationsDialog) return void k("reinviteAll", cd(a));
                  const i = a.filter((e) => !e.hasPublicKey).filter((e) => "accepted" === e.status);
                  i.length && D({ showError: !0, membersWithoutPublicKey: i });
                })
                .catch(r),
              (0, j.Nc)(o.PageView.TacUserList));
          }, [I, k, M, e, t.state?.openResendPendingInvitationsDialog, t.state?.openSendInvitesDialog, c, d, r, s]);
          const O = hc(e.state.members.valueOr([]));
          return (
            (0, $o.p_)(),
            (0, $o.LD)(),
            (0, y.tZ)(
              "div",
              { sx: { padding: "16px 32px 32px 32px", display: "flex", flexDirection: "column", gap: "56px" } },
              m
                ? (0, y.tZ)(Nd, {
                    onReinviteAllClick: () => {
                      k("reinviteAll", cd(e.state.members.valueOr([])));
                    }
                  })
                : (0, y.tZ)(Ed, {
                    takenSeats: O,
                    totalSeats: e.state.totalSeatCount.valueOr(0),
                    teamSecurityScore: e.state.teamSecurityScore,
                    accountRoute: u.teamAccountRoutePath,
                    companyName: e.state.teamName.valueOr("—"),
                    shouldDisplayTeamSecurityScore: !0
                  }),
              (0, y.tZ)(
                "div",
                { sx: { display: "flex", justifyContent: "center" } },
                b
                  ? (0, y.tZ)(Rs.Z, { containerStyle: { minHeight: 240 } })
                  : (0, y.tZ)(pu, { lee: e, members: e.state.members.valueOr([]), onMembersActionSelect: k, onMembersInvite: () => I() })
              ),
              N.showError
                ? (0, y.tZ)(Xc, { membersWithoutPublicKey: N.membersWithoutPublicKey, onClose: () => D((e) => ({ ...e, showError: !1 })) })
                : null,
              C,
              (0, y.tZ)(Tu, {
                lee: e,
                teamId: (0, f.ev)(e.globalState),
                totalSeatCount: e.state.totalSeatCount.valueOr(0),
                numSeatsTaken: O,
                excludedInviteMembers: e.state.members
                  .valueOr([])
                  .filter(({ status: e }) => "removed" !== e)
                  .map(({ login: e }) => e),
                isFreeTrial: e.state.isFreeTrial.valueOr(!0),
                shouldShowInviteDialog: Z,
                handleCloseInviteDialog: () => T(!1),
                handleInvitePartialSuccess: w,
                handleInviteCompleteSuccess: A,
                invitePartialSuccessState: x,
                handleInvitationResultClosed: v
              })
            )
          );
        }, Ie.$.MEMBERS),
        lx = _o(({ lee: e }) => {
          var t;
          const { translate: a } = (0, p.Z)(),
            {
              verifiedOrPendingDomain: { domain: s, status: i },
              verifiedDomains: r,
              updateDomainState: l,
              deactivateDomain: c,
              tryVerifyDomain: u,
              selectVerifiedDomain: _
            } = qo();
          return (
            (0, n.useEffect)(() => {
              (0, j.Nc)(o.PageView.TacDarkWebInsights);
            }, []),
            (0, y.tZ)(
              n.Fragment,
              null,
              (0, y.tZ)(
                "div",
                { sx: { px: "48px", pt: "32px", pb: "12px" } },
                (0, y.tZ)(y.X6, { as: "h1" }, a("team_dashboard_dark_web_insights_heading")),
                (0, y.tZ)(Uu, { activeDomain: s, verifiedDomains: r, selectVerifiedDomain: _ })
              ),
              (0, y.tZ)(Gu, {
                fullWidth: !0,
                mainContent: () =>
                  (0, y.tZ)(
                    "div",
                    null,
                    i === Fo.Loading
                      ? (0, y.tZ)("div", { sx: Fu }, (0, y.tZ)(d.HoD, { size: 120, color: d.colors.dashGreen00, strokeWidth: 1 }))
                      : null === s || i === Fo.Start
                      ? t || (t = (0, y.tZ)(Ql, { onSuccess: l, onError: l }))
                      : i === Fo.Validated
                      ? (0, y.tZ)(ku, { lee: e, domainName: s.name })
                      : (0, y.tZ)(Ru, {
                          domain: s,
                          isDeactivating: i === Fo.Deactivating,
                          handleDeactivateDomain: c,
                          handleRetryValidateDomain: u
                        })
                  ),
                secondaryContent: gl
              })
            )
          );
        }, Ie.$.DARK_WEB_INSIGHTS),
        cx = ({ basePath: e, path: t }) =>
          n.createElement(
            i.GB,
            { path: t, reducer: Dh.Z, permission: (e) => e.loggedIn && e.adminAccess.hasTACAccess, redirectPath: s.TT, component: Po },
            n.createElement(
              i.rs,
              null,
              n.createElement(i.Vy, { exact: !0, path: `${e}/`, component: tx, additionalProps: { from: `${e}/` } }),
              n.createElement(i.Vy, { component: nx, path: `${e}/${Ie.$.CHANGE_PLAN}`, permission: (e) => ax("BILLING", e) }),
              n.createElement(i.Vy, {
                component: sx,
                path: `${e}/${Ie.$.ACCOUNT}`,
                permission: (e) => ax("BILLING", e),
                redirectPath: `${e}/${Ie.$.GROUPS}`
              }),
              n.createElement(i.Vy, {
                component: ix,
                path: `${e}/${Ie.$.GET_STARTED}`,
                permission: (e) => ax("FULL", e),
                redirectPath: `${e}/${Ie.$.ACCOUNT}`
              }),
              n.createElement(i.Vy, {
                component: ox,
                path: `${e}/${Ie.$.DASHBOARD}`,
                permission: (e) => ax("FULL", e),
                redirectPath: `${e}/${Ie.$.ACCOUNT}`
              }),
              n.createElement(go, { path: `${e}/${Ie.$.ACTIVITY}` }),
              n.createElement(W_, { path: `${e}/${Ie.$.GROUPS}`, permission: (e) => ax("GROUP_READ", e) }),
              n.createElement(i.Vy, {
                component: rx,
                path: `${e}/${Ie.$.MEMBERS}`,
                permission: (e) => ax("FULL", e),
                redirectPath: `${e}/${Ie.$.ACCOUNT}`,
                reducer: Bc.ZP
              }),
              n.createElement(i.Vy, {
                component: lx,
                path: `${e}/${Ie.$.DARK_WEB_INSIGHTS}`,
                permission: (e) => ax("FULL", e),
                redirectPath: `${e}/${Ie.$.DARK_WEB_INSIGHTS}`,
                reducer: Bc.ZP
              }),
              n.createElement(Sh, { path: `${e}/${Ie.$.SETTINGS}` })
            )
          );
    },
    920106: (e, t, a) => {
      a.d(t, { MP: () => o, ZP: () => l, qs: () => r });
      var n = a(158432),
        s = a(233377);
      const i = (0, n.SP)(
          "settings-page",
          {
            allowPersistenceForMasterPassword: s.Maybe.nothing(),
            allowSharing: s.Maybe.nothing(),
            restrictSharingToTeam: s.Maybe.nothing(),
            enforce2FA: s.Maybe.nothing(),
            cryptoForcedPayload: s.Maybe.nothing(),
            disableAutoLoginDomains: s.Maybe.nothing(),
            enableForcedDomains: s.Maybe.nothing(),
            enablePersonalSpace: s.Maybe.nothing(),
            enableRemoveForcedContent: s.Maybe.nothing(),
            enableVPN: s.Maybe.nothing(),
            forceAutomaticLogout: s.Maybe.nothing(),
            isLoading: !0,
            lockOnExit: s.Maybe.nothing(),
            vaultExportEnabled: s.Maybe.nothing(),
            collectSensitiveDataAuditLogsEnabled: s.Maybe.nothing(),
            teamDomain: s.Maybe.nothing(),
            ssoEnabled: s.Maybe.nothing()
          },
          []
        ),
        o = i.action("team-status-loaded", ({ param: e }) => ({
          allowPersistenceForMasterPassword: s.Maybe.maybe(e.allowPersistenceForMasterPassword),
          allowSharing: s.Maybe.maybe(e.allowSharing),
          restrictSharingToTeam: s.Maybe.maybe(e.restrictSharingToTeam),
          enforce2FA: s.Maybe.maybe(e.enforce2FA),
          cryptoForcedPayload: s.Maybe.maybe(e.cryptoForcedPayload),
          disableAutoLoginDomains: s.Maybe.maybe(e.disableAutoLoginDomains),
          enableForcedDomains: s.Maybe.maybe(e.enableForcedDomains),
          enablePersonalSpace: s.Maybe.maybe(e.enablePersonalSpace),
          enableRemoveForcedContent: s.Maybe.maybe(e.enableRemoveForcedContent),
          enableVPN: s.Maybe.maybe(e.enableVPN),
          forceAutomaticLogout: s.Maybe.maybe(e.forceAutomaticLogout),
          isLoading: !1,
          lockOnExit: s.Maybe.maybe(e.lockOnExit),
          vaultExportEnabled: s.Maybe.maybe(e.vaultExportEnabled),
          collectSensitiveDataAuditLogsEnabled: s.Maybe.maybe(e.collectSensitiveDataAuditLogsEnabled),
          ssoEnabled: s.Maybe.maybe(e.ssoEnabled),
          teamDomain: s.Maybe.maybe(e.teamDomain)
        })),
        r =
          (i.action("setting-switch-toggled", ({ param: e, state: t }) => {
            const a = {};
            return (a[e] = t[e].map((e) => !e)), a;
          }),
          i.action("setting-changed", ({ param: e }) => ({ [e.feature]: s.Maybe.maybe(e.value) }))),
        l = i;
    },
    352116: (e, t, a) => {
      a.d(t, { fV: () => l, qc: () => r });
      var n = a(696832),
        s = a(75034),
        i = a(537026);
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
    816694: (e, t, a) => {
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
              `#################################################################################\n## dashlane-ad-sync.ps1\n##\n## For more information, please visit :\n## https://support.dashlane.com/hc/articles/115002155485\n##\n## This script will:\n## 1. Search each Group's GroupMembers\n## 2. Export all GroupMember AD User Email Address values to a temp CSV file\n## 3. Sign the data extract\n## 4. Synchronize the data with Dashlane\n#################################################################################\n\nPROCESS {\n\n##################################################################################\n## List the Group Names you'd like to extract Users from and sync with Dashlane ##\n##################################################################################\n\n$Groups = @(\n    "AGroup",\n    "AnotherGroup"\n)\n\n##################################################################################\n## Replace this with the attribute containing your employees' Dashlane logins   ##\n##################################################################################\n\n$DASHLANE_LOGIN_ATTR = "mail"\n\n#################################################################################\n##  DO NOT CHANGE THE PROCESS BELOW                                            ##\n#################################################################################\n\nImport-Module ActiveDirectory\n\nWrite-Host "Running Dashlane AD synchronization"\n\n$GroupMembers = @()\n$GroupInfos = @()\n$CSV_TEMP_PATH = $env:TEMP + "dashlane_export.csv"\n$INSTALL_TOKEN = "${a}"\n$TEAM_ID = "${n}"\n\n##################################################################################\n## Anaylzing Groups                                                                ##\n##################################################################################\n\nforeach ($Group in $Groups) {\n    Try {\n        $GroupInfo = Get-ADGroup -Identity $Group | Select Name, ObjectGUID\n        $GroupInfo | Add-Member Members @()\n\n        $Members = Get-ADGroupMember -Identity $Group | Get-ADUser -Properties Mail\n\n        # Roughly filtering out users with invalid emails.\n        # A user with an invalid email is filtered out by Dashlane servers: it will therefore not\n        # be included in the verified data, which will lead to an invalid signature check if it is\n        # included in the signed data.\n        $ValidMembers = $Members | Where-Object {($_ | Select -ExpandProperty $DASHLANE_LOGIN_ATTR) -like '*@*.*' }\n        # Lower case and trim all emails to make consistent with Dashlane servers; only need email\n        $ValidMembers = $ValidMembers | Select @{ \n            Label=$DASHLANE_LOGIN_ATTR; \n            Expression={($_ | Select -ExpandProperty $DASHLANE_LOGIN_ATTR).ToLower().Trim() } \n        }\n        # Sort the users and get rid of any potential duplicates\n        $ValidMembers = $ValidMembers | Sort-Object -Property $DASHLANE_LOGIN_ATTR | Get-Unique -AsString\n        # Get a count\n        $measure = $ValidMembers | measure\n        $count = $measure.count\n        Write-Host "Exporting $count valid members from $Group"\n\n        if ($count -gt 0) {\n            foreach ($Member in $ValidMembers) {\n                $Member | Add-Member GroupName $GroupInfo.Name\n                $Member | Add-Member GroupGUID $GroupInfo.ObjectGUID\n                $GroupMembers += $Member\n                $GroupInfo.Members += $Member\n            }\n            $GroupInfos += $GroupInfo\n        }\n    } Catch {\n        $ErrorMessage = $_.Exception.Message\n        $FailedItem = $_.Exception.GetType().FullName\n\n        Write-Host "Error: $FailedItem - $ErrorMessage"\n        Write-Host "Message: It seems there is no account on this Group: $Group."\n        Exit 2\n    }\n}\n\n##################################################################################\n## Writing temp CSV                                                             ##\n##################################################################################\n\nWrite-Host ""\nWrite-Host "Writing debug information to $CSV_TEMP_PATH"\n$GroupMembers | Export-Csv -Path $CSV_TEMP_PATH -NoTypeInformation -Encoding UTF8\n\n##################################################################################\n## Generate signature                                                           ##\n##################################################################################\n\nTry {\n    $CspParameters = New-Object -TypeName System.Security.Cryptography.CspParameters\n    $CspParameters.KeyContainerName = "DashlaneDirectorySyncKey53"\n\n    $RSA = New-Object -TypeName System.Security.Cryptography.RSACryptoServiceProvider -ArgumentList $CspParameters\n    $PublicKey = $RSA.ToXmlString($false)\n    $PublicKeyHash = [System.Convert]::ToBase64String([System.Text.Encoding]::UTF8.GetBytes($PublicKey))\n\n    Write-Host ""\n    Write-Host "---------- Provide your Dashlane admin with this key on setup: -----------"\n    Write-Host ""\n    Write-Host $PublicKeyHash\n    Write-Host ""\n    Write-Host "--------------------------------------------------------------------------"\n    Write-Host ""\n\n    $RSAFormatter = New-Object -TypeName System.Security.Cryptography.RSAPKCS1SignatureFormatter -ArgumentList $RSA\n    $RSAFormatter.SetHashAlgorithm("SHA256")\n\n    $DataStr = $TEAM_ID\n    foreach ($GroupInfo in $GroupInfos | Sort-Object -Property ObjectGUID) {\n        $DataStr += $GroupInfo.ObjectGUID\n        $DataStr += $GroupInfo.Name\n\n        foreach ($Member in $GroupInfo.Members | Sort-Object -Property $DASHLANE_LOGIN_ATTR) {\n            $DashlaneLogin = $Member | Select -ExpandProperty $DASHLANE_LOGIN_ATTR\n            $DataStr += $DashlaneLogin\n        }\n    }\n    $DataBytes = [System.Text.Encoding]::UTF8.GetBytes($DataStr)\n    $SHA256 = New-Object -TypeName System.Security.Cryptography.SHA256CryptoServiceProvider\n    $DataHash = $SHA256.ComputeHash($DataBytes)\n\n    $SignatureBytes = $RSAFormatter.CreateSignature($DataHash)\n    $SignatureHash = [System.Convert]::ToBase64String($SignatureBytes)\n\n} Catch {\n    $ErrorMessage = $_.Exception.Message\n    $FailedItem = $_.Exception.GetType().FullName\n    Write-Host "Failed: $FailedItem - $ErrorMessage"\n    Exit 3\n}\n\n##################################################################################\n## Send data to Dashlane                                                        ##\n##################################################################################\n\n$FileContent = Get-Content $CSV_TEMP_PATH | Out-String\n$FileContentBytes = [System.Text.Encoding]::UTF8.GetBytes($FileContent)\n$FileContentEncoded = [System.Convert]::ToBase64String($FileContentBytes)\n\n[System.Net.ServicePointManager]::SecurityProtocol = [System.Net.SecurityProtocolType]::Tls12;\n\n$URL = "https://ws1.dashlane.com/1/teamPlans/syncFromDirectory"\n$Payload = @{adLogins=$FileContentEncoded;adToken=$INSTALL_TOKEN;teamId=$TEAM_ID;signature=$SignatureHash;publicKey=$PublicKeyHash}\n\nTry {\n    $Response = Invoke-WebRequest -Uri $URL -Method POST -Body $Payload\n    Write-Host "Dashlane sync responded with: $Response"\n\n} Catch {\n    $ErrorMessage = $_.Exception.Message\n    $FailedItem = $_.Exception.GetType().FullName\n    Write-Host ""\n    Write-Host "Dashlane sync error: $FailedItem - $ErrorMessage"\n}\n\n##################################################################################\n## Cleaning up temp CSV                                                         ##\n##################################################################################\n\nRemove-Item $CSV_TEMP_PATH\n\n}`),
            activeDirectorySyncStatus: e.activeDirectorySyncStatus || null,
            activeDirectorySyncType: null != (t = e.activeDirectorySyncType) ? t : null
          };
        }),
        i = n.action("script-copy-feedback-toggled", ({ param: e }) => ({ isCopied: e })),
        o = n.action("active-directory-sync-type-set", ({ param: e }) => ({ activeDirectorySyncType: e })),
        r = n;
    },
    986081: (e, t, a) => {
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
    714072: (e, t, a) => {
      a.d(t, { h: () => o });
      var n = a(696832),
        s = a(453576),
        i = a(66941);
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
              d(s.UnknownTeamAdminError);
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
              d(s.UnknownTeamAdminError);
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
              d(s.UnknownTeamAdminError);
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
              d(s.UnknownTeamAdminError);
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
              d(s.UnknownTeamAdminError);
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
              d(s.UnknownTeamAdminError);
            } finally {
              t(!1);
            }
            return null;
          }, [])
        };
      }
    },
    901500: (e, t, a) => {
      a.d(t, { ZP: () => o, Zn: () => i, x: () => s });
      const n = (0, a(158432).SP)("master-password-policies-settings", { recoveryEnabled: !1 }),
        s = n.action("master-password-policies-settings-loaded", ({ param: e }) => ({ recoveryEnabled: Boolean(e.recoveryEnabled) })),
        i = n.action("set-recovery-enabled", ({ param: e }) => ({ recoveryEnabled: e })),
        o = n;
    },
    622880: (e, t, a) => {
      a.d(t, { Z: () => i });
      var n = a(158432),
        s = a(920106);
      const i = (0, n.SP)("policies-settings", {}, [s.ZP]);
    },
    760797: (e, t, a) => {
      a.d(t, { H: () => i, I: () => s });
      var n = a(66941);
      async function s() {
        const e = await n.C.getTeamInfo();
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
      async function i() {
        const e = await n.C.getLastADSyncDate();
        if (e.success)
          return {
            lastSyncRequestForTeamUnix: e.data.lastSyncRequestForTeam,
            lastSuccessfulSyncRequestForTeamUnix: e.data.lastSuccessfulSyncRequestForTeam
          };
        throw new Error(`getScimLastSyncDate: failed with error ${e.error}`);
      }
    },
    140857: (e, t, a) => {
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
    }
  }
]);
