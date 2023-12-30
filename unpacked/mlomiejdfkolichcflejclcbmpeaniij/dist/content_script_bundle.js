typeof browser < "u" && (chrome = browser),
  (() => {
    var de = {
        78747: (x) => {
          var n = Object.defineProperty,
            d = Object.getOwnPropertyDescriptor,
            w = Object.getOwnPropertyNames,
            g = Object.prototype.hasOwnProperty,
            m = (e, t) => {
              for (var i in t) n(e, i, { get: t[i], enumerable: !0 });
            },
            s = (e, t, i, l) => {
              if ((t && typeof t == "object") || typeof t == "function")
                for (let O of w(t)) !g.call(e, O) && O !== i && n(e, O, { get: () => t[O], enumerable: !(l = d(t, O)) || l.enumerable });
              return e;
            },
            C = (e) => s(n({}, "__esModule", { value: !0 }), e),
            f = {};
          m(f, { default: () => Fe }), (x.exports = C(f));
          var p = class K {
            static setBase(t) {
              K.base = t;
            }
            static findElement(t, i = null, l = !1) {
              let O = null;
              return (
                i != null
                  ? (O = Array.from(i.querySelectorAll(t.selector)))
                  : K.base != null
                  ? (O = Array.from(K.base.querySelectorAll(t.selector)))
                  : (O = Array.from(document.querySelectorAll(t.selector))),
                t.textFilter != null &&
                  (O = O.filter((F) => {
                    const j = F.textContent.toLowerCase();
                    if (Array.isArray(t.textFilter)) {
                      let H = !1;
                      for (const X of t.textFilter)
                        if (j.indexOf(X.toLowerCase()) !== -1) {
                          H = !0;
                          break;
                        }
                      return H;
                    } else if (t.textFilter != null) return j.indexOf(t.textFilter.toLowerCase()) !== -1;
                  })),
                t.styleFilters != null &&
                  (O = O.filter((F) => {
                    const j = window.getComputedStyle(F);
                    let H = !0;
                    for (const X of t.styleFilters) {
                      const J = j[X.option];
                      X.negated ? (H = H && J !== X.value) : (H = H && J === X.value);
                    }
                    return H;
                  })),
                t.displayFilter != null && (O = O.filter((F) => (t.displayFilter ? F.offsetHeight !== 0 : F.offsetHeight === 0))),
                t.iframeFilter != null &&
                  (O = O.filter(() =>
                    t.iframeFilter ? window.location !== window.parent.location : window.location === window.parent.location
                  )),
                t.childFilter != null &&
                  (O = O.filter((F) => {
                    const j = K.base;
                    K.setBase(F);
                    const H = K.find(t.childFilter);
                    return K.setBase(j), H.target != null;
                  })),
                l ? O : (O.length > 1 && console.warn("Multiple possible targets: ", O, t, i), O[0])
              );
            }
            static find(t, i = !1) {
              const l = [];
              if (t.parent != null) {
                const O = K.findElement(t.parent, null, i);
                if (O != null) {
                  if (O instanceof Array)
                    return (
                      O.forEach((F) => {
                        const j = K.findElement(t.target, F, i);
                        j instanceof Array
                          ? j.forEach((H) => {
                              l.push({ parent: F, target: H });
                            })
                          : l.push({ parent: F, target: j });
                      }),
                      l
                    );
                  {
                    const F = K.findElement(t.target, O, i);
                    F instanceof Array
                      ? F.forEach((j) => {
                          l.push({ parent: O, target: j });
                        })
                      : l.push({ parent: O, target: F });
                  }
                }
              } else {
                const O = K.findElement(t.target, null, i);
                O instanceof Array
                  ? O.forEach((F) => {
                      l.push({ parent: null, target: F });
                    })
                  : l.push({ parent: null, target: O });
              }
              return (
                l.length === 0 && l.push({ parent: null, target: null }),
                i ? l : (l.length !== 1 && console.warn("Multiple results found, even though multiple false", l), l[0])
              );
            }
          };
          p.base = null;
          var u = p;
          function r(e) {
            const t = u.find(e);
            if (e.type === "css") return !!t.target;
            if (e.type === "checkbox") return !!t.target && t.target.checked;
          }
          async function c(e, t) {
            switch (e.type) {
              case "click":
                return S(e);
              case "list":
                return T(e, t);
              case "consent":
                return I(e, t);
              case "ifcss":
                return k(e, t);
              case "waitcss":
                return L(e);
              case "foreach":
                return D(e, t);
              case "hide":
                return a(e);
              case "slide":
                return h(e);
              case "close":
                return E();
              case "wait":
                return y(e);
              case "eval":
                return P(e);
              default:
                throw "Unknown action type: " + e.type;
            }
          }
          var A = 0;
          function _(e) {
            return new Promise((t) => {
              setTimeout(() => {
                t();
              }, e);
            });
          }
          async function S(e) {
            const t = u.find(e);
            return t.target != null && t.target.click(), _(A);
          }
          async function T(e, t) {
            for (const i of e.actions) await c(i, t);
          }
          async function I(e, t) {
            for (const i of e.consents) {
              const l = t.indexOf(i.type) !== -1;
              i.matcher && i.toggleAction
                ? r(i.matcher) !== l && (await c(i.toggleAction))
                : l
                ? await c(i.trueAction)
                : await c(i.falseAction);
            }
          }
          async function k(e, t) {
            u.find(e).target ? e.falseAction && (await c(e.falseAction, t)) : e.trueAction && (await c(e.trueAction, t));
          }
          async function L(e) {
            await new Promise((t) => {
              let i = e.retries || 10;
              const l = e.waitTime || 250,
                O = () => {
                  const F = u.find(e);
                  ((e.negated && F.target) || (!e.negated && !F.target)) && i > 0 ? ((i -= 1), setTimeout(O, l)) : t();
                };
              O();
            });
          }
          async function D(e, t) {
            const i = u.find(e, !0),
              l = u.base;
            for (const O of i) O.target && (u.setBase(O.target), await c(e.action, t));
            u.setBase(l);
          }
          async function a(e) {
            const t = u.find(e);
            t.target && t.target.classList.add("Autoconsent-Hidden");
          }
          async function h(e) {
            const t = u.find(e),
              i = u.find(e.dragTarget);
            if (t.target) {
              const l = t.target.getBoundingClientRect(),
                O = i.target.getBoundingClientRect();
              let F = O.top - l.top,
                j = O.left - l.left;
              this.config.axis.toLowerCase() === "y" && (j = 0), this.config.axis.toLowerCase() === "x" && (F = 0);
              const H = window.screenX + l.left + l.width / 2,
                X = window.screenY + l.top + l.height / 2,
                J = l.left + l.width / 2,
                se = l.top + l.height / 2,
                ce = document.createEvent("MouseEvents");
              ce.initMouseEvent("mousedown", !0, !0, window, 0, H, X, J, se, !1, !1, !1, !1, 0, t.target);
              const ue = document.createEvent("MouseEvents");
              ue.initMouseEvent("mousemove", !0, !0, window, 0, H + j, X + F, J + j, se + F, !1, !1, !1, !1, 0, t.target);
              const le = document.createEvent("MouseEvents");
              le.initMouseEvent("mouseup", !0, !0, window, 0, H + j, X + F, J + j, se + F, !1, !1, !1, !1, 0, t.target),
                t.target.dispatchEvent(ce),
                await this.waitTimeout(10),
                t.target.dispatchEvent(ue),
                await this.waitTimeout(10),
                t.target.dispatchEvent(le);
            }
          }
          async function y(e) {
            await _(e.waitTime);
          }
          async function E() {
            window.close();
          }
          async function P(e) {
            return (
              console.log("eval!", e.code),
              new Promise((t) => {
                try {
                  e.async
                    ? (window.eval(e.code),
                      setTimeout(() => {
                        t(window.eval("window.__consentCheckResult"));
                      }, e.timeout || 250))
                    : t(window.eval(e.code));
                } catch (i) {
                  console.warn("eval error", i, e.code), t(!1);
                }
              })
            );
          }
          var o = !1;
          function v(e = "autoconsent-css-rules") {
            const t = `style#${e}`,
              i = document.querySelector(t);
            if (i && i instanceof HTMLStyleElement) return i;
            {
              const l = document.head || document.getElementsByTagName("head")[0] || document.documentElement,
                O = document.createElement("style");
              return (O.id = e), l.appendChild(O), O;
            }
          }
          function R(e, t, i = "display") {
            const l = i === "opacity" ? "opacity: 0" : "display: none",
              O = `${t.join(",")} { ${l} !important; z-index: -1 !important; pointer-events: none !important; } `;
            return e instanceof HTMLStyleElement ? ((e.innerText += O), t.length > 0) : !1;
          }
          async function N(e, t, i) {
            const l = await e();
            return !l && t > 0
              ? new Promise((O) => {
                  setTimeout(async () => {
                    O(N(e, t - 1, i));
                  }, i);
                })
              : Promise.resolve(l);
          }
          function B(e) {
            if (!e) return !1;
            if (e.offsetParent !== null) return !0;
            {
              const t = window.getComputedStyle(e);
              if (t.position === "fixed" && t.display !== "none") return !0;
            }
            return !1;
          }
          function b(e, t = !1) {
            const i = ee(e);
            return o && console.log("[click]", e, t, i), i.length > 0 && (t ? i.forEach((l) => l.click()) : i[0].click()), i.length > 0;
          }
          function U(e) {
            return ee(e).length > 0;
          }
          function M(e, t) {
            const i = ee(e),
              l = new Array(i.length);
            return (
              i.forEach((O, F) => {
                l[F] = B(O);
              }),
              t === "none" ? l.every((O) => !O) : l.length === 0 ? !1 : t === "any" ? l.some((O) => O) : l.every((O) => O)
            );
          }
          function V(e, t = 1e4) {
            const l = Math.ceil(t / 200);
            return N(() => ee(e).length > 0, l, 200);
          }
          function q(e, t = 1e4, i = "any") {
            const O = Math.ceil(t / 200);
            return N(() => M(e, i), O, 200);
          }
          async function W(e, t = 1e4, i = !1) {
            return await V(e, t), b(e, i);
          }
          function $(e) {
            return new Promise((t) => {
              setTimeout(() => {
                t(!0);
              }, e);
            });
          }
          function G(e, t) {
            const i = v();
            return R(i, e, t);
          }
          function Q(e) {
            const t = v("autoconsent-prehide");
            return o && console.log("[prehide]", t, location.href), R(t, e, "opacity");
          }
          function fe() {
            const e = v("autoconsent-prehide");
            return o && console.log("[undoprehide]", e, location.href), e && e.remove(), !!e;
          }
          function ie(e, t = document) {
            if (e.startsWith("aria/")) return [];
            if (e.startsWith("xpath/")) {
              const i = e.slice(6),
                l = document.evaluate(i, t, null, XPathResult.ANY_TYPE, null);
              let O = null;
              const F = [];
              for (; (O = l.iterateNext()); ) F.push(O);
              return F;
            }
            return e.startsWith("text/")
              ? []
              : e.startsWith("pierce/")
              ? []
              : t.shadowRoot
              ? Array.from(t.shadowRoot.querySelectorAll(e))
              : Array.from(t.querySelectorAll(e));
          }
          function me(e) {
            let t = document,
              i;
            for (const l of e) {
              if (((i = ie(l, t)), i.length === 0)) return [];
              t = i[0];
            }
            return i;
          }
          function ee(e) {
            return typeof e == "string" ? ie(e) : me(e);
          }
          function ae() {
            return crypto && typeof crypto.randomUUID < "u" ? crypto.randomUUID() : Math.random().toString();
          }
          var he = class {
              constructor(e, t = 1e3) {
                (this.id = e),
                  (this.promise = new Promise((i, l) => {
                    (this.resolve = i), (this.reject = l);
                  })),
                  (this.timer = window.setTimeout(() => {
                    this.reject(new Error("timeout"));
                  }, t));
              }
            },
            Z = { pending: new Map(), sendContentMessage: null };
          function pe(e) {
            const t = ae();
            Z.sendContentMessage({ type: "eval", id: t, code: e });
            const i = new he(t);
            return Z.pending.set(i.id, i), i.promise;
          }
          function ge(e, t) {
            const i = Z.pending.get(e);
            i ? (Z.pending.delete(e), i.timer && window.clearTimeout(i.timer), i.resolve(t)) : console.warn("no eval #", e);
          }
          var Ae = {
            EVAL_0: () => console.log(1),
            EVAL_CONSENTMANAGER_1: () => window.__cmp && typeof __cmp("getCMPData") == "object",
            EVAL_CONSENTMANAGER_2: () => !__cmp("consentStatus").userChoiceExists,
            EVAL_CONSENTMANAGER_3: () => __cmp("setConsent", 0),
            EVAL_CONSENTMANAGER_4: () => __cmp("setConsent", 1),
            EVAL_CONSENTMANAGER_5: () => __cmp("consentStatus").userChoiceExists,
            EVAL_COOKIEBOT_1: () => window.CookieConsent.hasResponse !== !0,
            EVAL_COOKIEBOT_2: () => window.Cookiebot.dialog.submitConsent(),
            EVAL_COOKIEBOT_3: () => endCookieProcess(),
            EVAL_COOKIEBOT_4: () => window.CookieConsent.declined === !0,
            EVAL_KLARO_1: () => klaro.getManager().config.services.every((e) => e.required || !klaro.getManager().consents[e.name]),
            EVAL_ONETRUST_1: () => window.OnetrustActiveGroups.split(",").filter((e) => e.length > 0).length <= 1,
            EVAL_TRUSTARC_TOP: () => window && window.truste && window.truste.eu.bindMap.prefCookie === "0",
            EVAL_ADROLL_0: () => !document.cookie.includes("__adroll_fpc"),
            EVAL_AFFINITY_SERIF_COM_0: () =>
              document.cookie.includes("serif_manage_cookies_viewed") && !document.cookie.includes("serif_allow_analytics"),
            EVAL_AXEPTIO_0: () => document.cookie.includes("axeptio_authorized_vendors=%2C%2C"),
            EVAL_BING_0: () => document.cookie.includes("AL=0") && document.cookie.includes("AD=0") && document.cookie.includes("SM=0"),
            EVAL_BORLABS_0: () =>
              !JSON.parse(
                decodeURIComponent(
                  document.cookie
                    .split(";")
                    .find((e) => e.indexOf("borlabs-cookie") !== -1)
                    .split("=", 2)[1]
                )
              ).consents.statistics,
            EVAL_BUNDESREGIERUNG_DE_0: () => document.cookie.match("cookie-allow-tracking=0"),
            EVAL_CANVA_0: () => !document.cookie.includes("gtm_fpc_engagement_event"),
            EVAL_CLICKIO_0: () => document.cookie.includes("__lxG__consent__v2_daisybit="),
            EVAL_CLINCH_0: () => document.cookie.includes("ctc_rejected=1"),
            EVAL_COINBASE_0: () =>
              JSON.parse(decodeURIComponent(document.cookie.match(/cm_(eu|default)_preferences=([0-9a-zA-Z\\{\\}\\[\\]%:]*);?/)[2])).consent
                .length <= 1,
            EVAL_COMPLIANZ_BANNER_0: () => document.cookie.includes("cmplz_banner-status=dismissed"),
            EVAL_COMPLIANZ_CATEGORIES_0: () => !!document.cookie.match(/cmplz_[^=]+=deny/),
            EVAL_COMPLIANZ_OPTIN_0: () => !!document.cookie.match(/cookieconsent_preferences_disabled=[^;]+/),
            EVAL_COOKIE_LAW_INFO_0: () => CLI.disableAllCookies() || CLI.reject_close() || !0,
            EVAL_COOKIE_LAW_INFO_1: () => document.cookie.indexOf("cookielawinfo-checkbox-non-necessary=yes") === -1,
            EVAL_COOKIE_MANAGER_POPUP_0: () =>
              JSON.parse(
                document.cookie
                  .split(";")
                  .find((e) => e.trim().startsWith("CookieLevel"))
                  .split("=")[1]
              ).social === !1,
            EVAL_COOKIEALERT_0: () => document.querySelector("body").removeAttribute("style") || !0,
            EVAL_COOKIEALERT_1: () => document.querySelector("body").removeAttribute("style") || !0,
            EVAL_COOKIEALERT_2: () => window.CookieConsent.declined === !0,
            EVAL_COOKIEFIRST_0: () =>
              ((e) => e.performance === !1 && e.functional === !1 && e.advertising === !1)(
                JSON.parse(
                  decodeURIComponent(
                    document.cookie
                      .split(";")
                      .find((e) => e.indexOf("cookiefirst") !== -1)
                      .trim()
                  ).split("=")[1]
                )
              ),
            EVAL_COOKIEFIRST_1: () =>
              document
                .querySelectorAll("button[data-cookiefirst-accent-color=true][role=checkbox]:not([disabled])")
                .forEach((e) => e.getAttribute("aria-checked") == "true" && e.click()) || !0,
            EVAL_COOKIEINFORMATION_0: () => CookieInformation.declineAllCategories() || !0,
            EVAL_COOKIEINFORMATION_1: () => CookieInformation.submitAllCategories() || !0,
            EVAL_COOKIEINFORMATION_2: () => document.cookie.includes("CookieInformationConsent="),
            EVAL_DAILYMOTION_0: () => !!document.cookie.match("dm-euconsent-v2"),
            EVAL_DSGVO_0: () => !document.cookie.includes("sp_dsgvo_cookie_settings"),
            EVAL_DUNELM_0: () => document.cookie.includes("cc_functional=0") && document.cookie.includes("cc_targeting=0"),
            EVAL_ETSY_0: () =>
              document.querySelectorAll(".gdpr-overlay-body input").forEach((e) => {
                e.checked = !1;
              }) || !0,
            EVAL_ETSY_1: () => document.querySelector(".gdpr-overlay-view button[data-wt-overlay-close]").click() || !0,
            EVAL_EU_COOKIE_COMPLIANCE_0: () => document.cookie.indexOf("cookie-agreed=2") === -1,
            EVAL_EU_COOKIE_LAW_0: () => !document.cookie.includes("euCookie"),
            EVAL_EZOIC_0: () => ezCMP.handleAcceptAllClick(),
            EVAL_EZOIC_1: () => !!document.cookie.match(/ezCMPCookieConsent=[^;]+\|2=0\|3=0\|4=0/),
            EVAL_GOOGLE_0: () => !!document.cookie.match(/SOCS=CAE/),
            EVAL_IUBENDA_0: () =>
              document.querySelectorAll(".purposes-item input[type=checkbox]:not([disabled])").forEach((e) => {
                e.checked && e.click();
              }) || !0,
            EVAL_IUBENDA_1: () => !!document.cookie.match(/_iub_cs-\d+=/),
            EVAL_JQUERY_COOKIEBAR_0: () => !document.cookie.includes("cookies-state=accepted"),
            EVAL_MEDIAVINE_0: () =>
              document.querySelectorAll('[data-name="mediavine-gdpr-cmp"] input[type=checkbox]').forEach((e) => e.checked && e.click()) ||
              !0,
            EVAL_MICROSOFT_0: () =>
              Array.from(document.querySelectorAll("div > button"))
                .filter((e) => e.innerText.match("Reject|Ablehnen"))[0]
                .click() || !0,
            EVAL_MICROSOFT_1: () =>
              Array.from(document.querySelectorAll("div > button"))
                .filter((e) => e.innerText.match("Accept|Annehmen"))[0]
                .click() || !0,
            EVAL_MICROSOFT_2: () => !!document.cookie.match("MSCC"),
            EVAL_MOOVE_0: () =>
              document.querySelectorAll("#moove_gdpr_cookie_modal input").forEach((e) => {
                !e.disabled && e.name !== "moove_gdpr_strict_cookies" && (e.checked = !1);
              }) || !0,
            EVAL_ONENINETWO_0: () => document.cookie.includes("CC_ADVERTISING=NO") && document.cookie.includes("CC_ANALYTICS=NO"),
            EVAL_PAYPAL_0: () => document.cookie.includes("cookie_prefs") === !0,
            EVAL_PRIMEBOX_0: () => !document.cookie.includes("cb-enabled=accepted"),
            EVAL_PUBTECH_0: () =>
              document.cookie.includes("euconsent-v2") &&
              (document.cookie.match(/.YAAAAAAAAAAA/) || document.cookie.match(/.aAAAAAAAAAAA/) || document.cookie.match(/.YAAACFgAAAAA/)),
            EVAL_REDDIT_0: () => document.cookie.includes("eu_cookie={%22opted%22:true%2C%22nonessential%22:false}"),
            EVAL_SIBBO_0: () => !!window.localStorage.getItem("euconsent-v2"),
            EVAL_SIRDATA_0: () => document.cookie.includes("euconsent-v2"),
            EVAL_SNIGEL_0: () => !!document.cookie.match("snconsent"),
            EVAL_STEAMPOWERED_0: () =>
              JSON.parse(
                decodeURIComponent(
                  document.cookie
                    .split(";")
                    .find((e) => e.trim().startsWith("cookieSettings"))
                    .split("=")[1]
                )
              ).preference_state === 2,
            EVAL_TARTEAUCITRON_0: () => tarteaucitron.userInterface.respondAll(!1) || !0,
            EVAL_TARTEAUCITRON_1: () => tarteaucitron.userInterface.respondAll(!0) || !0,
            EVAL_TARTEAUCITRON_2: () => document.cookie.match(/tarteaucitron=[^;]*/)[0].includes("false"),
            EVAL_TEALIUM_0: () => typeof window.utag < "u" && typeof utag.gdpr == "object",
            EVAL_TEALIUM_1: () => utag.gdpr.setConsentValue(!1) || !0,
            EVAL_TEALIUM_2: () => utag.gdpr.setConsentValue(!0) || !0,
            EVAL_TEALIUM_3: () => utag.gdpr.getConsentState() !== 1,
            EVAL_TESTCMP_0: () => window.results.results[0] === "button_clicked",
            EVAL_TESTCMP_COSMETIC_0: () => window.results.results[0] === "banner_hidden",
            EVAL_THEFREEDICTIONARY_0: () => cmpUi.showPurposes() || cmpUi.rejectAll() || !0,
            EVAL_THEFREEDICTIONARY_1: () => cmpUi.allowAll() || !0,
            EVAL_THEVERGE_0: () => document.cookie.includes("_duet_gdpr_acknowledged=1"),
            EVAL_UBUNTU_COM_0: () => document.cookie === "_cookies_accepted=essential",
            EVAL_UK_COOKIE_CONSENT_0: () => !document.cookie.includes("catAccCookies"),
            EVAL_USERCENTRICS_API_0: () => typeof UC_UI == "object",
            EVAL_USERCENTRICS_API_1: () => !!UC_UI.closeCMP(),
            EVAL_USERCENTRICS_API_2: () => !!UC_UI.denyAllConsents(),
            EVAL_USERCENTRICS_API_3: () => !!UC_UI.acceptAllConsents(),
            EVAL_USERCENTRICS_API_4: () => !!UC_UI.closeCMP(),
            EVAL_USERCENTRICS_API_5: () => UC_UI.areAllConsentsAccepted() === !0,
            EVAL_USERCENTRICS_API_6: () => UC_UI.areAllConsentsAccepted() === !1,
            EVAL_USERCENTRICS_BUTTON_0: () =>
              JSON.parse(localStorage.getItem("usercentrics")).consents.every((e) => e.isEssential || !e.consentStatus),
            EVAL_WAITROSE_0: () => Array.from(document.querySelectorAll("label[id$=cookies-deny-label]")).forEach((e) => e.click()) || !0,
            EVAL_WAITROSE_1: () =>
              document.cookie.includes("wtr_cookies_advertising=0") && document.cookie.includes("wtr_cookies_analytics=0"),
            EVAL_WP_COOKIE_NOTICE_0: () => document.cookie.includes("wpl_viewed_cookie=no"),
            EVAL_XING_0: () => document.cookie.includes("userConsent=%7B%22marketing%22%3Afalse"),
            EVAL_YOUTUBE_DESKTOP_0: () => !!document.cookie.match(/SOCS=CAE/),
            EVAL_YOUTUBE_MOBILE_0: () => !!document.cookie.match(/SOCS=CAE/)
          };
          function _e(e) {
            const t = e.toString();
            return t.substring(t.indexOf("=>") + 2);
          }
          var te = { main: !0, frame: !1, urlPattern: "" },
            z = class {
              constructor(e) {
                (this.runContext = te), (this.autoconsent = e);
              }
              get hasSelfTest() {
                throw new Error("Not Implemented");
              }
              get isIntermediate() {
                throw new Error("Not Implemented");
              }
              get isCosmetic() {
                throw new Error("Not Implemented");
              }
              mainWorldEval(e) {
                const t = Ae[e];
                if (!t) return console.warn("Snippet not found", e), Promise.resolve(!1);
                if (this.autoconsent.config.isMainWorld) {
                  o && console.log("inline eval:", e, t);
                  let l = !1;
                  try {
                    l = !!t.call(globalThis);
                  } catch (O) {
                    o && console.error("error evaluating rule", e, O);
                  }
                  return Promise.resolve(l);
                }
                const i = _e(t);
                return o && console.log("async eval:", e, i), pe(i).catch((l) => (o && console.error("error evaluating rule", e, l), !1));
              }
              checkRunContext() {
                const e = { ...te, ...this.runContext },
                  t = window.top === window;
                return !((t && !e.main) || (!t && !e.frame) || (e.urlPattern && !window.location.href.match(e.urlPattern)));
              }
              detectCmp() {
                throw new Error("Not Implemented");
              }
              async detectPopup() {
                return !1;
              }
              optOut() {
                throw new Error("Not Implemented");
              }
              optIn() {
                throw new Error("Not Implemented");
              }
              openCmp() {
                throw new Error("Not Implemented");
              }
              async test() {
                return Promise.resolve(!0);
              }
            },
            ye = class extends z {
              constructor(e, t) {
                super(t), (this.config = e), (this.name = e.name), (this.runContext = e.runContext || te);
              }
              get hasSelfTest() {
                return !!this.config.test;
              }
              get isIntermediate() {
                return !!this.config.intermediate;
              }
              get isCosmetic() {
                return !!this.config.cosmetic;
              }
              get prehideSelectors() {
                return this.config.prehideSelectors;
              }
              async detectCmp() {
                return this.config.detectCmp ? this._runRulesParallel(this.config.detectCmp) : !1;
              }
              async detectPopup() {
                return this.config.detectPopup ? this._runRulesSequentially(this.config.detectPopup) : !1;
              }
              async optOut() {
                return this.config.optOut
                  ? (o && console.log("Initiated optOut()", this.config.optOut), this._runRulesSequentially(this.config.optOut))
                  : !1;
              }
              async optIn() {
                return this.config.optIn
                  ? (o && console.log("Initiated optIn()", this.config.optIn), this._runRulesSequentially(this.config.optIn))
                  : !1;
              }
              async openCmp() {
                return this.config.openCmp ? this._runRulesSequentially(this.config.openCmp) : !1;
              }
              async test() {
                return this.hasSelfTest ? this._runRulesSequentially(this.config.test) : super.test();
              }
              async evaluateRuleStep(e) {
                const t = [];
                if ((e.exists && t.push(U(e.exists)), e.visible && t.push(M(e.visible, e.check)), e.eval)) {
                  const l = this.mainWorldEval(e.eval);
                  t.push(l);
                }
                if (
                  (e.waitFor && t.push(V(e.waitFor, e.timeout)),
                  e.waitForVisible && t.push(q(e.waitForVisible, e.timeout, e.check)),
                  e.click && t.push(b(e.click, e.all)),
                  e.waitForThenClick && t.push(W(e.waitForThenClick, e.timeout, e.all)),
                  e.wait && t.push($(e.wait)),
                  e.hide && t.push(G(e.hide, e.method)),
                  e.if)
                ) {
                  if (!e.if.exists && !e.if.visible) return console.error("invalid conditional rule", e.if), !1;
                  const l = await this.evaluateRuleStep(e.if);
                  o && console.log("Condition is", l),
                    l ? t.push(this._runRulesSequentially(e.then)) : e.else && t.push(this._runRulesSequentially(e.else));
                }
                if (e.any) {
                  for (const l of e.any) if (await this.evaluateRuleStep(l)) return !0;
                  return !1;
                }
                return t.length === 0
                  ? (o && console.warn("Unrecognized rule", e), !1)
                  : (await Promise.all(t)).reduce((l, O) => l && O, !0);
              }
              async _runRulesParallel(e) {
                const t = e.map((l) => this.evaluateRuleStep(l));
                return (await Promise.all(t)).every((l) => !!l);
              }
              async _runRulesSequentially(e) {
                for (const t of e) {
                  o && console.log("Running rule...", t);
                  const i = await this.evaluateRuleStep(t);
                  if ((o && console.log("...rule result", i), !i && !t.optional)) return !1;
                }
                return !0;
              }
            },
            Ee = class {
              constructor(e, t) {
                (this.name = e),
                  (this.config = t),
                  (this.methods = new Map()),
                  (this.runContext = te),
                  (this.isCosmetic = !1),
                  t.methods.forEach((i) => {
                    i.action && this.methods.set(i.name, i.action);
                  }),
                  (this.hasSelfTest = !1);
              }
              get isIntermediate() {
                return !1;
              }
              checkRunContext() {
                return !0;
              }
              async detectCmp() {
                return this.config.detectors.map((t) => r(t.presentMatcher)).some((t) => !!t);
              }
              async detectPopup() {
                return this.config.detectors.map((t) => r(t.showingMatcher)).some((t) => !!t);
              }
              async executeAction(e, t) {
                return this.methods.has(e) ? c(this.methods.get(e), t) : !0;
              }
              async optOut() {
                return (
                  await this.executeAction("HIDE_CMP"),
                  await this.executeAction("OPEN_OPTIONS"),
                  await this.executeAction("HIDE_CMP"),
                  await this.executeAction("DO_CONSENT", []),
                  await this.executeAction("SAVE_CONSENT"),
                  !0
                );
              }
              async optIn() {
                return (
                  await this.executeAction("HIDE_CMP"),
                  await this.executeAction("OPEN_OPTIONS"),
                  await this.executeAction("HIDE_CMP"),
                  await this.executeAction("DO_CONSENT", ["D", "A", "B", "E", "F", "X"]),
                  await this.executeAction("SAVE_CONSENT"),
                  !0
                );
              }
              async openCmp() {
                return await this.executeAction("HIDE_CMP"), await this.executeAction("OPEN_OPTIONS"), !0;
              }
              async test() {
                return !0;
              }
            },
            re = "#truste-show-consent",
            be = "#truste-consent-required",
            we = "#truste-consent-button",
            Ce = "#truste-consent-content",
            Se = "#trustarc-banner-overlay",
            ne = "#truste-consent-track",
            ve = class extends z {
              constructor(e) {
                super(e),
                  (this.name = "TrustArc-top"),
                  (this.prehideSelectors = [".trustarc-banner-container", `.truste_popframe,.truste_overlay,.truste_box_overlay,${ne}`]),
                  (this.runContext = { main: !0, frame: !1 }),
                  (this._shortcutButton = null),
                  (this._optInDone = !1);
              }
              get hasSelfTest() {
                return !1;
              }
              get isIntermediate() {
                return this._optInDone ? !1 : !this._shortcutButton;
              }
              get isCosmetic() {
                return !1;
              }
              async detectCmp() {
                const e = U(`${re},${ne}`);
                return e && (this._shortcutButton = document.querySelector(be)), e;
              }
              async detectPopup() {
                return M(`${Ce},${Se},${ne}`, "all");
              }
              openFrame() {
                b(re);
              }
              async optOut() {
                return this._shortcutButton
                  ? (this._shortcutButton.click(), !0)
                  : (R(v(), [".truste_popframe", ".truste_overlay", ".truste_box_overlay", ne]),
                    b(re),
                    setTimeout(() => {
                      v().remove();
                    }, 1e4),
                    !0);
              }
              async optIn() {
                return (this._optInDone = !0), b(we);
              }
              async openCmp() {
                return !0;
              }
              async test() {
                return await this.mainWorldEval("EVAL_TRUSTARC_TOP");
              }
            },
            Oe = class extends z {
              constructor() {
                super(...arguments),
                  (this.name = "TrustArc-frame"),
                  (this.runContext = { main: !1, frame: !0, urlPattern: "^https://consent-pref\\.trustarc\\.com/\\?" });
              }
              get hasSelfTest() {
                return !1;
              }
              get isIntermediate() {
                return !1;
              }
              get isCosmetic() {
                return !1;
              }
              async detectCmp() {
                return !0;
              }
              async detectPopup() {
                return M("#defaultpreferencemanager", "any") && M(".mainContent", "any");
              }
              async navigateToSettings() {
                return (
                  await N(async () => U(".shp") || M(".advance", "any") || U(".switch span:first-child"), 10, 500),
                  U(".shp") && b(".shp"),
                  await V(".prefPanel", 5e3),
                  M(".advance", "any") && b(".advance"),
                  await N(() => M(".switch span:first-child", "any"), 5, 1e3)
                );
              }
              async optOut() {
                return (
                  await N(() => document.readyState === "complete", 20, 100),
                  await V(".mainContent[aria-hidden=false]", 5e3),
                  b(".rejectAll")
                    ? !0
                    : (U(".prefPanel") && (await V('.prefPanel[style="visibility: visible;"]', 3e3)),
                      b("#catDetails0")
                        ? (b(".submit"), waitForThenClick("#gwt-debug-close_id", 5e3), !0)
                        : b(".required")
                        ? (waitForThenClick("#gwt-debug-close_id", 5e3), !0)
                        : (await this.navigateToSettings(),
                          b(".switch span:nth-child(1):not(.active)", !0),
                          b(".submit"),
                          waitForThenClick("#gwt-debug-close_id", 3e5),
                          !0))
                );
              }
              async optIn() {
                return (
                  b(".call") ||
                    (await this.navigateToSettings(),
                    b(".switch span:nth-child(2)", !0),
                    b(".submit"),
                    V("#gwt-debug-close_id", 3e5).then(() => {
                      b("#gwt-debug-close_id");
                    })),
                  !0
                );
              }
            },
            ke = class extends z {
              constructor() {
                super(...arguments),
                  (this.name = "Cybotcookiebot"),
                  (this.prehideSelectors = ["#CybotCookiebotDialog,#dtcookie-container,#cookiebanner,#cb-cookieoverlay"]);
              }
              get hasSelfTest() {
                return !0;
              }
              get isIntermediate() {
                return !1;
              }
              get isCosmetic() {
                return !1;
              }
              async detectCmp() {
                return U("#CybotCookiebotDialogBodyLevelButtonPreferences");
              }
              async detectPopup() {
                return U("#CybotCookiebotDialog,#dtcookie-container,#cookiebanner,#cb-cookiebanner");
              }
              async optOut() {
                return b(".cookie-alert-extended-detail-link")
                  ? (await V(".cookie-alert-configuration", 2e3),
                    b(".cookie-alert-configuration-input:checked", !0),
                    b(".cookie-alert-extended-button-secondary"),
                    !0)
                  : U("#dtcookie-container")
                  ? b(".h-dtcookie-decline")
                  : (b(".cookiebot__button--settings") ||
                      b("#CybotCookiebotDialogBodyButtonDecline") ||
                      (b(".cookiebanner__link--details"),
                      b(
                        '.CybotCookiebotDialogBodyLevelButton:checked:enabled,input[id*="CybotCookiebotDialogBodyLevelButton"]:checked:enabled',
                        !0
                      ),
                      b("#CybotCookiebotDialogBodyButtonDecline"),
                      b("input[id^=CybotCookiebotDialogBodyLevelButton]:checked", !0),
                      U("#CybotCookiebotDialogBodyButtonAcceptSelected")
                        ? b("#CybotCookiebotDialogBodyButtonAcceptSelected")
                        : b(
                            "#CybotCookiebotDialogBodyLevelButtonAccept,#CybotCookiebotDialogBodyButtonAccept,#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection",
                            !0
                          ),
                      (await this.mainWorldEval("EVAL_COOKIEBOT_1")) && (await this.mainWorldEval("EVAL_COOKIEBOT_2"), await $(500)),
                      U("#cb-confirmedSettings") && (await this.mainWorldEval("EVAL_COOKIEBOT_3"))),
                    !0);
              }
              async optIn() {
                return U("#dtcookie-container")
                  ? b(".h-dtcookie-accept")
                  : (b(".CybotCookiebotDialogBodyLevelButton:not(:checked):enabled", !0),
                    b("#CybotCookiebotDialogBodyLevelButtonAccept"),
                    b("#CybotCookiebotDialogBodyButtonAccept"),
                    !0);
              }
              async test() {
                return this.mainWorldEval("EVAL_COOKIEBOT_4");
              }
            },
            Te = class extends z {
              constructor() {
                super(...arguments),
                  (this.name = "Sourcepoint-frame"),
                  (this.prehideSelectors = ["div[id^='sp_message_container_'],.message-overlay", "#sp_privacy_manager_container"]),
                  (this.ccpaNotice = !1),
                  (this.ccpaPopup = !1),
                  (this.runContext = { main: !1, frame: !0 });
              }
              get hasSelfTest() {
                return !1;
              }
              get isIntermediate() {
                return !1;
              }
              get isCosmetic() {
                return !1;
              }
              async detectCmp() {
                const e = new URL(location.href);
                return e.searchParams.has("message_id") && e.hostname === "ccpa-notice.sp-prod.net"
                  ? ((this.ccpaNotice = !0), !0)
                  : e.hostname === "ccpa-pm.sp-prod.net"
                  ? ((this.ccpaPopup = !0), !0)
                  : (e.pathname === "/index.html" || e.pathname === "/privacy-manager/index.html") &&
                    (e.searchParams.has("message_id") || e.searchParams.has("requestUUID") || e.searchParams.has("consentUUID"));
              }
              async detectPopup() {
                return this.ccpaNotice
                  ? !0
                  : this.ccpaPopup
                  ? await V(".priv-save-btn", 2e3)
                  : (await V(".sp_choice_type_11,.sp_choice_type_12,.sp_choice_type_13,.sp_choice_type_ACCEPT_ALL", 2e3),
                    !U(".sp_choice_type_9"));
              }
              async optIn() {
                return (
                  await V(".sp_choice_type_11,.sp_choice_type_ACCEPT_ALL", 2e3),
                  !!(b(".sp_choice_type_11") || b(".sp_choice_type_ACCEPT_ALL"))
                );
              }
              isManagerOpen() {
                return location.pathname === "/privacy-manager/index.html";
              }
              async optOut() {
                if (this.ccpaPopup) {
                  const e = document.querySelectorAll(".priv-purpose-container .sp-switch-arrow-block a.neutral.on .right");
                  for (const i of e) i.click();
                  const t = document.querySelectorAll(".priv-purpose-container .sp-switch-arrow-block a.switch-bg.on");
                  for (const i of t) i.click();
                  return b(".priv-save-btn");
                }
                if (!this.isManagerOpen()) {
                  if (!(await V(".sp_choice_type_12,.sp_choice_type_13"))) return !1;
                  if (!U(".sp_choice_type_12")) return b(".sp_choice_type_13");
                  b(".sp_choice_type_12"), await N(() => this.isManagerOpen(), 200, 100);
                }
                await V(".type-modal", 2e4);
                try {
                  const e = ".sp_choice_type_REJECT_ALL",
                    t = ".reject-toggle",
                    i = await Promise.race([
                      V(e, 2e3).then((l) => (l ? 0 : -1)),
                      V(t, 2e3).then((l) => (l ? 1 : -1)),
                      V(".pm-features", 2e3).then((l) => (l ? 2 : -1))
                    ]);
                  if (i === 0) return await $(1e3), b(e);
                  i === 1 ? b(t) : i === 2 && (await V(".pm-features", 1e4), b(".checked > span", !0), b(".chevron"));
                } catch (e) {
                  o && console.warn(e);
                }
                return b(".sp_choice_type_SAVE_AND_EXIT");
              }
            },
            Pe = class extends z {
              constructor() {
                super(...arguments),
                  (this.name = "consentmanager.net"),
                  (this.prehideSelectors = ["#cmpbox,#cmpbox2"]),
                  (this.apiAvailable = !1);
              }
              get hasSelfTest() {
                return this.apiAvailable;
              }
              get isIntermediate() {
                return !1;
              }
              get isCosmetic() {
                return !1;
              }
              async detectCmp() {
                return (this.apiAvailable = await this.mainWorldEval("EVAL_CONSENTMANAGER_1")), this.apiAvailable ? !0 : U("#cmpbox");
              }
              async detectPopup() {
                return this.apiAvailable ? (await $(500), await this.mainWorldEval("EVAL_CONSENTMANAGER_2")) : M("#cmpbox .cmpmore", "any");
              }
              async optOut() {
                return (
                  await $(500),
                  this.apiAvailable
                    ? await this.mainWorldEval("EVAL_CONSENTMANAGER_3")
                    : b(".cmpboxbtnno")
                    ? !0
                    : U(".cmpwelcomeprpsbtn")
                    ? (b(".cmpwelcomeprpsbtn > a[aria-checked=true]", !0), b(".cmpboxbtnsave"), !0)
                    : (b(".cmpboxbtncustom"),
                      await V(".cmptblbox", 2e3),
                      b(".cmptdchoice > a[aria-checked=true]", !0),
                      b(".cmpboxbtnyescustomchoices"),
                      !0)
                );
              }
              async optIn() {
                return this.apiAvailable ? await this.mainWorldEval("EVAL_CONSENTMANAGER_4") : b(".cmpboxbtnyes");
              }
              async test() {
                if (this.apiAvailable) return await this.mainWorldEval("EVAL_CONSENTMANAGER_5");
              }
            },
            Ie = class extends z {
              constructor() {
                super(...arguments), (this.name = "Evidon");
              }
              get hasSelfTest() {
                return !1;
              }
              get isIntermediate() {
                return !1;
              }
              get isCosmetic() {
                return !1;
              }
              async detectCmp() {
                return U("#_evidon_banner");
              }
              async detectPopup() {
                return M("#_evidon_banner", "any");
              }
              async optOut() {
                return (
                  b("#_evidon-decline-button") ||
                    (R(v(), ["#evidon-prefdiag-overlay", "#evidon-prefdiag-background"]),
                    b("#_evidon-option-button"),
                    await V("#evidon-prefdiag-overlay", 5e3),
                    b("#evidon-prefdiag-decline")),
                  !0
                );
              }
              async optIn() {
                return b("#_evidon-accept-button");
              }
            },
            Le = class extends z {
              constructor() {
                super(...arguments),
                  (this.name = "Onetrust"),
                  (this.prehideSelectors = ["#onetrust-banner-sdk,#onetrust-consent-sdk,.onetrust-pc-dark-filter,.js-consent-banner"]),
                  (this.runContext = { urlPattern: "^(?!.*https://www\\.nba\\.com/)" });
              }
              get hasSelfTest() {
                return !0;
              }
              get isIntermediate() {
                return !1;
              }
              get isCosmetic() {
                return !1;
              }
              async detectCmp() {
                return U("#onetrust-banner-sdk");
              }
              async detectPopup() {
                return M("#onetrust-banner-sdk", "all");
              }
              async optOut() {
                return (
                  U("#onetrust-pc-btn-handler") ? b("#onetrust-pc-btn-handler") : b(".ot-sdk-show-settings,button.js-cookie-settings"),
                  await V("#onetrust-consent-sdk", 2e3),
                  await $(1e3),
                  b("#onetrust-consent-sdk input.category-switch-handler:checked,.js-editor-toggle-state:checked", !0),
                  await $(1e3),
                  await V(".save-preference-btn-handler,.js-consent-save", 2e3),
                  b(".save-preference-btn-handler,.js-consent-save"),
                  await N(() => M("#onetrust-banner-sdk", "none"), 10, 500),
                  !0
                );
              }
              async optIn() {
                return b("#onetrust-accept-btn-handler,.js-accept-cookies");
              }
              async test() {
                return await this.mainWorldEval("EVAL_ONETRUST_1");
              }
            },
            Me = class extends z {
              constructor() {
                super(...arguments), (this.name = "Klaro"), (this.prehideSelectors = [".klaro"]), (this.settingsOpen = !1);
              }
              get hasSelfTest() {
                return !0;
              }
              get isIntermediate() {
                return !1;
              }
              get isCosmetic() {
                return !1;
              }
              async detectCmp() {
                return U(".klaro > .cookie-modal") ? ((this.settingsOpen = !0), !0) : U(".klaro > .cookie-notice");
              }
              async detectPopup() {
                return M(".klaro > .cookie-notice,.klaro > .cookie-modal", "any");
              }
              async optOut() {
                return b(".klaro .cn-decline") ||
                  (this.settingsOpen || (b(".klaro .cn-learn-more"), await V(".klaro > .cookie-modal", 2e3), (this.settingsOpen = !0)),
                  b(".klaro .cn-decline"))
                  ? !0
                  : (b(".cm-purpose:not(.cm-toggle-all) > input:not(.half-checked)", !0), b(".cm-btn-accept"));
              }
              async optIn() {
                return b(".klaro .cm-btn-accept-all")
                  ? !0
                  : this.settingsOpen
                  ? (b(".cm-purpose:not(.cm-toggle-all) > input.half-checked", !0), b(".cm-btn-accept"))
                  : b(".klaro .cookie-notice .cm-btn-success");
              }
              async test() {
                return await this.mainWorldEval("EVAL_KLARO_1");
              }
            },
            Re = class extends z {
              constructor() {
                super(...arguments), (this.name = "Uniconsent");
              }
              get prehideSelectors() {
                return [".unic", ".modal:has(.unic)"];
              }
              get hasSelfTest() {
                return !0;
              }
              get isIntermediate() {
                return !1;
              }
              get isCosmetic() {
                return !1;
              }
              async detectCmp() {
                return U(".unic .unic-box,.unic .unic-bar");
              }
              async detectPopup() {
                return M(".unic .unic-box,.unic .unic-bar", "any");
              }
              async optOut() {
                if (
                  (await V(".unic button", 1e3),
                  document.querySelectorAll(".unic button").forEach((e) => {
                    const t = e.textContent;
                    (t.includes("Manage Options") || t.includes("Optionen verwalten")) && e.click();
                  }),
                  await V(".unic input[type=checkbox]", 1e3))
                ) {
                  await V(".unic button", 1e3),
                    document.querySelectorAll(".unic input[type=checkbox]").forEach((e) => {
                      e.checked && e.click();
                    });
                  for (const e of document.querySelectorAll(".unic button")) {
                    const t = e.textContent;
                    for (const i of ["Confirm Choices", "Save Choices", "Auswahl speichern"])
                      if (t.includes(i)) return e.click(), await $(500), !0;
                  }
                }
                return !1;
              }
              async optIn() {
                return W(".unic #unic-agree");
              }
              async test() {
                return await $(1e3), !U(".unic .unic-box,.unic .unic-bar");
              }
            },
            xe = class extends z {
              constructor() {
                super(...arguments), (this.prehideSelectors = [".cmp-root"]), (this.name = "Conversant");
              }
              get hasSelfTest() {
                return !0;
              }
              get isIntermediate() {
                return !1;
              }
              get isCosmetic() {
                return !1;
              }
              async detectCmp() {
                return U(".cmp-root .cmp-receptacle");
              }
              async detectPopup() {
                return M(".cmp-root .cmp-receptacle", "any");
              }
              async optOut() {
                if (!(await W(".cmp-main-button:not(.cmp-main-button--primary)")) || !(await V(".cmp-view-tab-tabs"))) return !1;
                await W(".cmp-view-tab-tabs > :first-child"), await W(".cmp-view-tab-tabs > .cmp-view-tab--active:first-child");
                for (const e of Array.from(document.querySelectorAll(".cmp-accordion-item"))) {
                  e.querySelector(".cmp-accordion-item-title").click(),
                    await N(() => !!e.querySelector(".cmp-accordion-item-content.cmp-active"), 10, 50);
                  const t = e.querySelector(".cmp-accordion-item-content.cmp-active");
                  t.querySelectorAll(".cmp-toggle-actions .cmp-toggle-deny:not(.cmp-toggle-deny--active)").forEach((i) => i.click()),
                    t
                      .querySelectorAll(".cmp-toggle-actions .cmp-toggle-checkbox:not(.cmp-toggle-checkbox--active)")
                      .forEach((i) => i.click());
                }
                return await b(".cmp-main-button:not(.cmp-main-button--primary)"), !0;
              }
              async optIn() {
                return W(".cmp-main-button.cmp-main-button--primary");
              }
              async test() {
                return document.cookie.includes("cmp-data=0");
              }
            },
            Ne = class extends z {
              constructor() {
                super(...arguments), (this.name = "tiktok.com"), (this.runContext = { urlPattern: "tiktok" });
              }
              get hasSelfTest() {
                return !0;
              }
              get isIntermediate() {
                return !1;
              }
              get isCosmetic() {
                return !1;
              }
              getShadowRoot() {
                const e = document.querySelector("tiktok-cookie-banner");
                return e ? e.shadowRoot : null;
              }
              async detectCmp() {
                return U("tiktok-cookie-banner");
              }
              async detectPopup() {
                const e = this.getShadowRoot().querySelector(".tiktok-cookie-banner");
                return B(e);
              }
              async optOut() {
                const e = this.getShadowRoot().querySelector(".button-wrapper button:first-child");
                return e ? (o && console.log("[clicking]", e), e.click(), !0) : (o && console.log("no decline button found"), !1);
              }
              async optIn() {
                const e = this.getShadowRoot().querySelector(".button-wrapper button:last-child");
                return e ? (o && console.log("[clicking]", e), e.click(), !0) : (o && console.log("no accept button found"), !1);
              }
              async test() {
                const e = document.cookie.match(/cookie-consent=([^;]+)/);
                if (!e) return !1;
                const t = JSON.parse(decodeURIComponent(e[1]));
                return Object.values(t).every((i) => typeof i != "boolean" || i === !1);
              }
            },
            De = class extends z {
              constructor() {
                super(...arguments),
                  (this.runContext = { urlPattern: "^https://(www\\.)?airbnb\\.[^/]+/" }),
                  (this.prehideSelectors = [
                    "div[data-testid=main-cookies-banner-container]",
                    'div:has(> div:first-child):has(> div:last-child):has(> section [data-testid="strictly-necessary-cookies"])'
                  ]);
              }
              get hasSelfTest() {
                return !0;
              }
              get isIntermediate() {
                return !1;
              }
              get isCosmetic() {
                return !1;
              }
              async detectCmp() {
                return U("div[data-testid=main-cookies-banner-container]");
              }
              async detectPopup() {
                return M("div[data-testid=main-cookies-banner-container", "any");
              }
              async optOut() {
                await W("div[data-testid=main-cookies-banner-container] button._snbhip0");
                let e;
                for (; (e = document.querySelector("[data-testid=modal-container] button[aria-checked=true]:not([disabled])")); ) e.click();
                return W("button[data-testid=save-btn]");
              }
              async optIn() {
                return W("div[data-testid=main-cookies-banner-container] button._148dgdpk");
              }
              async test() {
                return await N(() => !!document.cookie.match("OptanonAlertBoxClosed"), 20, 200);
              }
            },
            Ue = [ve, Oe, ke, Te, Pe, Ie, Le, Me, Re, xe, Ne, De];
          function Ve(e, t) {
            return e.filter((i) => (!t.disabledCmps || !t.disabledCmps.includes(i.name)) && (t.enableCosmeticRules || !i.isCosmetic));
          }
          var Fe = class {
            constructor(e, t = null, i = null) {
              if (
                ((this.id = ae()),
                (this.rules = []),
                (this.foundCmp = null),
                (this.state = {
                  lifecycle: "loading",
                  prehideOn: !1,
                  findCmpAttempts: 0,
                  detectedCmps: [],
                  detectedPopups: [],
                  selfTest: null
                }),
                (Z.sendContentMessage = e),
                (this.sendContentMessage = e),
                (this.rules = []),
                o && console.log("autoconsent init", window.location.href),
                this.updateState({ lifecycle: "loading" }),
                this.addDynamicRules(),
                t)
              )
                this.initialize(t, i);
              else {
                i && this.parseDeclarativeRules(i);
                const l = { type: "init", url: window.location.href };
                e(l), this.updateState({ lifecycle: "waitingForInitResponse" });
              }
            }
            initialize(e, t) {
              if (((this.config = e), !e.enabled)) {
                o && console.log("autoconsent is disabled");
                return;
              }
              if ((t && this.parseDeclarativeRules(t), (this.rules = Ve(this.rules, e)), e.enablePrehide))
                if (document.documentElement) this.prehideElements();
                else {
                  const i = () => {
                    window.removeEventListener("DOMContentLoaded", i), this.prehideElements();
                  };
                  window.addEventListener("DOMContentLoaded", i);
                }
              if (document.readyState === "loading") {
                const i = () => {
                  window.removeEventListener("DOMContentLoaded", i), this.start();
                };
                window.addEventListener("DOMContentLoaded", i);
              } else this.start();
              this.updateState({ lifecycle: "initialized" });
            }
            addDynamicRules() {
              Ue.forEach((e) => {
                this.rules.push(new e(this));
              });
            }
            parseDeclarativeRules(e) {
              Object.keys(e.consentomatic).forEach((t) => {
                this.addConsentomaticCMP(t, e.consentomatic[t]);
              }),
                e.autoconsent.forEach((t) => {
                  this.addDeclarativeCMP(t);
                }),
                o && console.log("added rules", this.rules);
            }
            addDeclarativeCMP(e) {
              this.rules.push(new ye(e, this));
            }
            addConsentomaticCMP(e, t) {
              this.rules.push(new Ee(`com_${e}`, t));
            }
            start() {
              window.requestIdleCallback ? window.requestIdleCallback(() => this._start(), { timeout: 500 }) : this._start();
            }
            async _start() {
              o && console.log(`Detecting CMPs on ${window.location.href}`), this.updateState({ lifecycle: "started" });
              const e = await this.findCmp(this.config.detectRetries);
              if ((this.updateState({ detectedCmps: e.map((i) => i.name) }), e.length === 0))
                return (
                  o && console.log("no CMP found", location.href),
                  this.config.enablePrehide && this.undoPrehide(),
                  this.updateState({ lifecycle: "nothingDetected" }),
                  !1
                );
              this.updateState({ lifecycle: "cmpDetected" });
              let t = await this.detectPopups(e.filter((i) => !i.isCosmetic));
              if ((t.length === 0 && (t = await this.detectPopups(e.filter((i) => i.isCosmetic))), t.length === 0))
                return o && console.log("no popup found"), this.config.enablePrehide && this.undoPrehide(), !1;
              if ((this.updateState({ lifecycle: "openPopupDetected" }), t.length > 1)) {
                const i = { msg: "Found multiple CMPs, check the detection rules.", cmps: t.map((l) => l.name) };
                o && console.warn(i.msg, i.cmps), this.sendContentMessage({ type: "autoconsentError", details: i });
              }
              return (
                (this.foundCmp = t[0]),
                this.config.autoAction === "optOut"
                  ? await this.doOptOut()
                  : this.config.autoAction === "optIn"
                  ? await this.doOptIn()
                  : (o && console.log("waiting for opt-out signal...", location.href), !0)
              );
            }
            async findCmp(e) {
              this.updateState({ findCmpAttempts: this.state.findCmpAttempts + 1 });
              const t = [];
              for (const i of this.rules)
                try {
                  if (!i.checkRunContext()) continue;
                  (await i.detectCmp()) &&
                    (o && console.log(`Found CMP: ${i.name} ${window.location.href}`),
                    this.sendContentMessage({ type: "cmpDetected", url: location.href, cmp: i.name }),
                    t.push(i));
                } catch (l) {
                  o && console.warn(`error detecting ${i.name}`, l);
                }
              return t.length === 0 && e > 0 ? (await $(500), this.findCmp(e - 1)) : t;
            }
            async detectPopups(e) {
              const t = [],
                i = e.map((l) =>
                  this.waitForPopup(l)
                    .then((O) => {
                      O &&
                        (this.updateState({ detectedPopups: this.state.detectedPopups.concat([l.name]) }),
                        this.sendContentMessage({ type: "popupFound", cmp: l.name, url: location.href }),
                        t.push(l));
                    })
                    .catch((O) => (o && console.warn(`error waiting for a popup for ${l.name}`, O), null))
                );
              return await Promise.all(i), t;
            }
            async doOptOut() {
              this.updateState({ lifecycle: "runningOptOut" });
              let e;
              return (
                this.foundCmp
                  ? (o && console.log(`CMP ${this.foundCmp.name}: opt out on ${window.location.href}`),
                    (e = await this.foundCmp.optOut()),
                    o && console.log(`${this.foundCmp.name}: opt out result ${e}`))
                  : (o && console.log("no CMP to opt out"), (e = !1)),
                this.config.enablePrehide && this.undoPrehide(),
                this.sendContentMessage({
                  type: "optOutResult",
                  cmp: this.foundCmp ? this.foundCmp.name : "none",
                  result: e,
                  scheduleSelfTest: this.foundCmp && this.foundCmp.hasSelfTest,
                  url: location.href
                }),
                e && !this.foundCmp.isIntermediate
                  ? (this.sendContentMessage({
                      type: "autoconsentDone",
                      cmp: this.foundCmp.name,
                      isCosmetic: this.foundCmp.isCosmetic,
                      url: location.href
                    }),
                    this.updateState({ lifecycle: "done" }))
                  : this.updateState({ lifecycle: e ? "optOutSucceeded" : "optOutFailed" }),
                e
              );
            }
            async doOptIn() {
              this.updateState({ lifecycle: "runningOptIn" });
              let e;
              return (
                this.foundCmp
                  ? (o && console.log(`CMP ${this.foundCmp.name}: opt in on ${window.location.href}`),
                    (e = await this.foundCmp.optIn()),
                    o && console.log(`${this.foundCmp.name}: opt in result ${e}`))
                  : (o && console.log("no CMP to opt in"), (e = !1)),
                this.config.enablePrehide && this.undoPrehide(),
                this.sendContentMessage({
                  type: "optInResult",
                  cmp: this.foundCmp ? this.foundCmp.name : "none",
                  result: e,
                  scheduleSelfTest: !1,
                  url: location.href
                }),
                e && !this.foundCmp.isIntermediate
                  ? (this.sendContentMessage({
                      type: "autoconsentDone",
                      cmp: this.foundCmp.name,
                      isCosmetic: this.foundCmp.isCosmetic,
                      url: location.href
                    }),
                    this.updateState({ lifecycle: "done" }))
                  : this.updateState({ lifecycle: e ? "optInSucceeded" : "optInFailed" }),
                e
              );
            }
            async doSelfTest() {
              let e;
              return (
                this.foundCmp
                  ? (o && console.log(`CMP ${this.foundCmp.name}: self-test on ${window.location.href}`), (e = await this.foundCmp.test()))
                  : (o && console.log("no CMP to self test"), (e = !1)),
                this.sendContentMessage({
                  type: "selfTestResult",
                  cmp: this.foundCmp ? this.foundCmp.name : "none",
                  result: e,
                  url: location.href
                }),
                this.updateState({ selfTest: e }),
                e
              );
            }
            async waitForPopup(e, t = 5, i = 500) {
              o && console.log("checking if popup is open...", e.name);
              const l = await e.detectPopup().catch((O) => (o && console.warn(`error detecting popup for ${e.name}`, O), !1));
              return !l && t > 0
                ? (await $(i), this.waitForPopup(e, t - 1, i))
                : (o && console.log(e.name, `popup is ${l ? "open" : "not open"}`), l);
            }
            prehideElements() {
              const e = [
                  "#didomi-popup,.didomi-popup-container,.didomi-popup-notice,.didomi-consent-popup-preferences,#didomi-notice,.didomi-popup-backdrop,.didomi-screen-medium"
                ],
                t = this.rules.reduce((i, l) => (l.prehideSelectors ? [...i, ...l.prehideSelectors] : i), e);
              return (
                this.updateState({ prehideOn: !0 }),
                setTimeout(() => {
                  this.config.enablePrehide &&
                    this.state.prehideOn &&
                    !["runningOptOut", "runningOptIn"].includes(this.state.lifecycle) &&
                    (o && console.log("Process is taking too long, unhiding elements"), this.undoPrehide());
                }, this.config.prehideTimeout || 2e3),
                Q(t)
              );
            }
            undoPrehide() {
              return this.updateState({ prehideOn: !1 }), fe();
            }
            updateState(e) {
              Object.assign(this.state, e),
                this.sendContentMessage({
                  type: "report",
                  instanceId: this.id,
                  url: window.location.href,
                  mainFrame: window.top === window.self,
                  state: this.state
                });
            }
            async receiveMessageCallback(e) {
              switch (
                (o && ["evalResp", "report"].includes(e.type) && console.log("received from background", e, window.location.href), e.type)
              ) {
                case "initResp":
                  this.initialize(e.config, e.rules);
                  break;
                case "optIn":
                  await this.doOptIn();
                  break;
                case "optOut":
                  await this.doOptOut();
                  break;
                case "selfTest":
                  await this.doSelfTest();
                  break;
                case "evalResp":
                  ge(e.id, e.result);
                  break;
              }
            }
          };
        },
        3803: (x, n) => {
          "use strict";
          /*!
           * Copyright (c) 2017-present Cliqz GmbH. All rights reserved.
           *
           * This Source Code Form is subject to the terms of the Mozilla Public
           * License, v. 2.0. If a copy of the MPL was not distributed with this
           * file, You can obtain one at https://mozilla.org/MPL/2.0/.
           */ Object.defineProperty(n, "__esModule", { value: !0 }),
            (n.injectScript = n.autoRemoveScript = n.DOMMonitor = n.extractFeaturesFromDOM = void 0);
          const d = "cliqz-adblocker-script",
            w = new Set(["br", "head", "link", "meta", "script", "style", "s"]);
          function g(u) {
            return u.nodeType === 1;
          }
          function m(u) {
            const r = [];
            for (const c of u)
              if (c.type === "attributes") g(c.target) && r.push(c.target);
              else if (c.type === "childList") for (const A of c.addedNodes) g(A) && A.id !== d && r.push(A);
            return r;
          }
          function s(u) {
            const r = new Set(["br", "head", "link", "meta", "script", "style", "s"]),
              c = new Set(),
              A = new Set(),
              _ = new Set();
            for (const S of u)
              for (const T of [
                S,
                ...S.querySelectorAll("[id]:not(html):not(body),[class]:not(html):not(body),[href]:not(html):not(body)")
              ]) {
                if (r.has(T.nodeName.toLowerCase())) continue;
                const I = T.id;
                I && _.add(I);
                const k = T.classList;
                if (k) for (const D of k) c.add(D);
                const L = T.getAttribute("href");
                typeof L == "string" && A.add(L);
              }
            return { classes: Array.from(c), hrefs: Array.from(A), ids: Array.from(_) };
          }
          n.extractFeaturesFromDOM = s;
          class C {
            constructor(r) {
              (this.cb = r),
                (this.knownIds = new Set()),
                (this.knownHrefs = new Set()),
                (this.knownClasses = new Set()),
                (this.observer = null);
            }
            queryAll(r) {
              this.cb({ type: "elements", elements: [r.document.documentElement] }), this.handleUpdatedNodes([r.document.documentElement]);
            }
            start(r) {
              this.observer === null &&
                r.MutationObserver !== void 0 &&
                ((this.observer = new r.MutationObserver((c) => {
                  this.handleUpdatedNodes(m(c));
                })),
                this.observer.observe(r.document.documentElement, {
                  attributes: !0,
                  attributeFilter: ["class", "id", "href"],
                  childList: !0,
                  subtree: !0
                }));
            }
            stop() {
              this.observer !== null && (this.observer.disconnect(), (this.observer = null));
            }
            handleNewFeatures({ hrefs: r, ids: c, classes: A }) {
              const _ = [],
                S = [],
                T = [];
              for (const I of c) this.knownIds.has(I) === !1 && (_.push(I), this.knownIds.add(I));
              for (const I of A) this.knownClasses.has(I) === !1 && (S.push(I), this.knownClasses.add(I));
              for (const I of r) this.knownHrefs.has(I) === !1 && (T.push(I), this.knownHrefs.add(I));
              return _.length !== 0 || S.length !== 0 || T.length !== 0
                ? (this.cb({ type: "features", classes: S, hrefs: T, ids: _ }), !0)
                : !1;
            }
            handleUpdatedNodes(r) {
              return r.length !== 0
                ? (this.cb({ type: "elements", elements: r.filter((c) => w.has(c.nodeName.toLowerCase()) === !1) }),
                  this.handleNewFeatures(s(r)))
                : !1;
            }
          }
          n.DOMMonitor = C;
          function f(u) {
            return `try{${u}}catch(c){}!function(){var c=document.currentScript,e=c&&c.parentNode;e&&e.removeChild(c)}();`;
          }
          n.autoRemoveScript = f;
          function p(u, r) {
            const c = r.createElement("script");
            (c.type = "text/javascript"), (c.id = d), (c.async = !1), c.appendChild(r.createTextNode(f(u)));
            const A = r.head || r.documentElement || r;
            A !== null && A.appendChild(c);
          }
          n.injectScript = p;
        },
        32261: function (x, n, d) {
          "use strict";
          /*!
           * Copyright (c) 2017-present Cliqz GmbH. All rights reserved.
           *
           * This Source Code Form is subject to the terms of the Mozilla Public
           * License, v. 2.0. If a copy of the MPL was not distributed with this
           * file, You can obtain one at https://mozilla.org/MPL/2.0/.
           */ var w =
              (this && this.__createBinding) ||
              (Object.create
                ? function (f, p, u, r) {
                    r === void 0 && (r = u);
                    var c = Object.getOwnPropertyDescriptor(p, u);
                    (!c || ("get" in c ? !p.__esModule : c.writable || c.configurable)) &&
                      (c = {
                        enumerable: !0,
                        get: function () {
                          return p[u];
                        }
                      }),
                      Object.defineProperty(f, r, c);
                  }
                : function (f, p, u, r) {
                    r === void 0 && (r = u), (f[r] = p[u]);
                  }),
            g =
              (this && this.__exportStar) ||
              function (f, p) {
                for (var u in f) u !== "default" && !Object.prototype.hasOwnProperty.call(p, u) && w(p, f, u);
              };
          Object.defineProperty(n, "__esModule", { value: !0 }),
            (n.classifySelector =
              n.SelectorType =
              n.PSEUDO_ELEMENTS =
              n.PSEUDO_CLASSES =
              n.EXTENDED_PSEUDO_CLASSES =
              n.matches =
              n.querySelectorAll =
              n.tokenize =
              n.parse =
                void 0);
          var m = d(45277);
          Object.defineProperty(n, "parse", {
            enumerable: !0,
            get: function () {
              return m.parse;
            }
          }),
            Object.defineProperty(n, "tokenize", {
              enumerable: !0,
              get: function () {
                return m.tokenize;
              }
            });
          var s = d(50315);
          Object.defineProperty(n, "querySelectorAll", {
            enumerable: !0,
            get: function () {
              return s.querySelectorAll;
            }
          }),
            Object.defineProperty(n, "matches", {
              enumerable: !0,
              get: function () {
                return s.matches;
              }
            }),
            g(d(83236), n);
          var C = d(16107);
          Object.defineProperty(n, "EXTENDED_PSEUDO_CLASSES", {
            enumerable: !0,
            get: function () {
              return C.EXTENDED_PSEUDO_CLASSES;
            }
          }),
            Object.defineProperty(n, "PSEUDO_CLASSES", {
              enumerable: !0,
              get: function () {
                return C.PSEUDO_CLASSES;
              }
            }),
            Object.defineProperty(n, "PSEUDO_ELEMENTS", {
              enumerable: !0,
              get: function () {
                return C.PSEUDO_ELEMENTS;
              }
            }),
            Object.defineProperty(n, "SelectorType", {
              enumerable: !0,
              get: function () {
                return C.SelectorType;
              }
            }),
            Object.defineProperty(n, "classifySelector", {
              enumerable: !0,
              get: function () {
                return C.classifySelector;
              }
            });
        },
        50315: (x, n) => {
          "use strict";
          /*!
           * Copyright (c) 2017-present Cliqz GmbH. All rights reserved.
           *
           * This Source Code Form is subject to the terms of the Mozilla Public
           * License, v. 2.0. If a copy of the MPL was not distributed with this
           * file, You can obtain one at https://mozilla.org/MPL/2.0/.
           */ Object.defineProperty(n, "__esModule", { value: !0 }), (n.querySelectorAll = n.matches = n.matchPattern = void 0);
          function d(m, s) {
            if (m.startsWith("/") && (m.endsWith("/") || m.endsWith("/i"))) {
              let C = !0;
              return (
                (m = m.slice(1)),
                m.endsWith("/") ? (m = m.slice(0, -1)) : ((m = m.slice(0, -2)), (C = !1)),
                new RegExp(m, C === !1 ? "i" : void 0).test(s)
              );
            }
            return s.includes(m);
          }
          n.matchPattern = d;
          function w(m, s) {
            if (s.type === "id" || s.type === "class" || s.type === "type" || s.type === "attribute") return m.matches(s.content);
            if (s.type === "list") return s.list.some((C) => w(m, C));
            if (s.type === "compound") return s.compound.every((C) => w(m, C));
            if (s.type === "pseudo-class") {
              if (s.name === "has" || s.name === "if") return s.subtree !== void 0 && g(m, s.subtree).length !== 0;
              if (s.name === "not") return s.subtree !== void 0 && w(m, s.subtree) === !1;
              if (s.name === "has-text") {
                const { argument: C } = s;
                if (C === void 0) return !1;
                const f = m.textContent;
                return f === null ? !1 : d(C, f);
              } else if (s.name === "min-text-length") {
                const C = Number(s.argument);
                if (Number.isNaN(C) || C < 0) return !1;
                const f = m.textContent;
                return f === null ? !1 : f.length >= C;
              }
            }
            return !1;
          }
          n.matches = w;
          function g(m, s) {
            const C = [];
            if (s.type === "id" || s.type === "class" || s.type === "type" || s.type === "attribute")
              C.push(...m.querySelectorAll(s.content));
            else if (s.type === "list") for (const f of s.list) C.push(...g(m, f));
            else if (s.type === "compound")
              s.compound.length !== 0 && C.push(...g(m, s.compound[0]).filter((f) => s.compound.slice(1).every((p) => w(f, p))));
            else if (s.type === "complex") {
              const f = s.left === void 0 ? [m] : g(m, s.left);
              if (s.combinator === " ") for (const p of f) C.push(...g(p, s.right));
              else if (s.combinator === ">") for (const p of f) for (const u of p.children) w(u, s.right) === !0 && C.push(u);
              else if (s.combinator === "~")
                for (const p of f) {
                  let u = p;
                  for (; (u = u.nextElementSibling) !== null; ) w(u, s.right) === !0 && C.push(u);
                }
              else if (s.combinator === "+")
                for (const p of f) {
                  const u = p.nextElementSibling;
                  u !== null && w(u, s.right) === !0 && C.push(u);
                }
            } else if (s.type === "pseudo-class") for (const f of m.querySelectorAll("*")) w(f, s) === !0 && C.push(f);
            return C;
          }
          n.querySelectorAll = g;
        },
        16107: (x, n, d) => {
          "use strict";
          /*!
           * Copyright (c) 2017-present Cliqz GmbH. All rights reserved.
           *
           * This Source Code Form is subject to the terms of the Mozilla Public
           * License, v. 2.0. If a copy of the MPL was not distributed with this
           * file, You can obtain one at https://mozilla.org/MPL/2.0/.
           */ Object.defineProperty(n, "__esModule", { value: !0 }),
            (n.classifySelector = n.SelectorType = n.PSEUDO_ELEMENTS = n.PSEUDO_CLASSES = n.EXTENDED_PSEUDO_CLASSES = void 0);
          const w = d(45277);
          (n.EXTENDED_PSEUDO_CLASSES = new Set(["has", "has-text", "if"])),
            (n.PSEUDO_CLASSES = new Set([
              "active",
              "any",
              "any-link",
              "blank",
              "checked",
              "default",
              "defined",
              "dir",
              "disabled",
              "empty",
              "enabled",
              "first",
              "first-child",
              "first-of-type",
              "focus",
              "focus-visible",
              "focus-within",
              "fullscreen",
              "host",
              "host-context",
              "hover",
              "in-range",
              "indeterminate",
              "invalid",
              "is",
              "lang",
              "last-child",
              "last-of-type",
              "left",
              "link",
              "matches",
              "not",
              "nth-child",
              "nth-last-child",
              "nth-last-of-type",
              "nth-of-type",
              "only-child",
              "only-of-type",
              "optional",
              "out-of-range",
              "placeholder-shown",
              "read-only",
              "read-write",
              "required",
              "right",
              "root",
              "scope",
              "target",
              "valid",
              "visited",
              "where"
            ])),
            (n.PSEUDO_ELEMENTS = new Set(["after", "before", "first-letter", "first-line"]));
          var g;
          (function (s) {
            (s[(s.Normal = 0)] = "Normal"), (s[(s.Extended = 1)] = "Extended"), (s[(s.Invalid = 2)] = "Invalid");
          })(g || (n.SelectorType = g = {}));
          function m(s) {
            if (s.indexOf(":") === -1) return g.Normal;
            const C = (0, w.tokenize)(s);
            let f = !1;
            for (const p of C)
              if (p.type === "pseudo-class") {
                const { name: u } = p;
                if (n.EXTENDED_PSEUDO_CLASSES.has(u) === !0) f = !0;
                else if (n.PSEUDO_CLASSES.has(u) === !1 && n.PSEUDO_ELEMENTS.has(u) === !1) return g.Invalid;
                if (f === !1 && p.argument !== void 0 && w.RECURSIVE_PSEUDO_CLASSES.has(u) === !0) {
                  const r = m(p.argument);
                  if (r === g.Invalid) return r;
                  r === g.Extended && (f = !0);
                }
              }
            return f === !0 ? g.Extended : g.Normal;
          }
          n.classifySelector = m;
        },
        45277: (x, n, d) => {
          "use strict";
          /*!
           * Based on parsel. Extended by Rémi Berson for Ghostery (2021).
           * https://github.com/LeaVerou/parsel
           *
           * MIT License
           *
           * Copyright (c) 2020 Lea Verou
           *
           * Permission is hereby granted, free of charge, to any person obtaining a copy
           * of this software and associated documentation files (the "Software"), to deal
           * in the Software without restriction, including without limitation the rights
           * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
           * copies of the Software, and to permit persons to whom the Software is
           * furnished to do so, subject to the following conditions:
           *
           * The above copyright notice and this permission notice shall be included in all
           * copies or substantial portions of the Software.
           *
           * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
           * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
           * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
           * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
           * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
           * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
           * SOFTWARE.
           */ Object.defineProperty(n, "__esModule", { value: !0 }),
            (n.parse = n.tokenize = n.replace = n.gobbleParens = n.gobbleQuotes = n.isEscaped = n.RECURSIVE_PSEUDO_CLASSES = void 0);
          const w = d(83236);
          n.RECURSIVE_PSEUDO_CLASSES = new Set(["any", "dir", "has", "host-context", "if", "if-not", "is", "matches", "not", "where"]);
          const g = {
              attribute: new RegExp(
                "\\[\\s*(?:(?<namespace>\\*|[-\\w]*)\\|)?(?<name>[-\\w\\u{0080}-\\u{FFFF}]+)\\s*(?:(?<operator>\\W?=)\\s*(?<value>.+?)\\s*(?<caseSensitive>[iIsS])?\\s*)?\\]",
                "gu"
              ),
              id: new RegExp("#(?<name>(?:[-\\w\\u{0080}-\\u{FFFF}]|\\\\.)+)", "gu"),
              class: new RegExp("\\.(?<name>(?:[-\\w\\u{0080}-\\u{FFFF}]|\\\\.)+)", "gu"),
              comma: /\s*,\s*/g,
              combinator: /\s*[\s>+~]\s*/g,
              "pseudo-element": new RegExp("::(?<name>[-\\w\\u{0080}-\\u{FFFF}]+)(?:\\((?:\xB6*)\\))?", "gu"),
              "pseudo-class": new RegExp(":(?<name>[-\\w\\u{0080}-\\u{FFFF}]+)(?:\\((?<argument>\xB6*)\\))?", "gu"),
              type: new RegExp("(?:(?<namespace>\\*|[-\\w]*)\\|)?(?<name>[-\\w\\u{0080}-\\u{FFFF}]+)|\\*", "gu")
            },
            m = new Set(["pseudo-class", "pseudo-element"]),
            s = new Set([...m, "attribute"]),
            C = new Set(["combinator", "comma"]),
            f = Object.assign({}, g);
          (f["pseudo-element"] = RegExp(g["pseudo-element"].source.replace("(?<argument>\xB6*)", "(?<argument>.*?)"), "gu")),
            (f["pseudo-class"] = RegExp(g["pseudo-class"].source.replace("(?<argument>\xB6*)", "(?<argument>.*)"), "gu"));
          function p(a, h) {
            a.lastIndex = 0;
            const y = a.exec(h);
            if (y === null) return;
            const E = y.index - 1,
              P = y[0],
              o = h.slice(0, E + 1),
              v = h.slice(E + P.length + 1);
            return [o, [P, y.groups || {}], v];
          }
          const u = [
            (a) => {
              const h = p(g.attribute, a);
              if (h === void 0) return;
              const [y, [E, { name: P, operator: o, value: v, namespace: R, caseSensitive: N }], B] = h;
              if (P !== void 0)
                return [
                  y,
                  {
                    type: "attribute",
                    content: E,
                    length: E.length,
                    namespace: R,
                    caseSensitive: N,
                    pos: [],
                    name: P,
                    operator: o,
                    value: v
                  },
                  B
                ];
            },
            (a) => {
              const h = p(g.id, a);
              if (h === void 0) return;
              const [y, [E, { name: P }], o] = h;
              if (P !== void 0) return [y, { type: "id", content: E, length: E.length, pos: [], name: P }, o];
            },
            (a) => {
              const h = p(g.class, a);
              if (h === void 0) return;
              const [y, [E, { name: P }], o] = h;
              if (P !== void 0) return [y, { type: "class", content: E, length: E.length, pos: [], name: P }, o];
            },
            (a) => {
              const h = p(g.comma, a);
              if (h === void 0) return;
              const [y, [E], P] = h;
              return [y, { type: "comma", content: E, length: E.length, pos: [] }, P];
            },
            (a) => {
              const h = p(g.combinator, a);
              if (h === void 0) return;
              const [y, [E], P] = h;
              return [y, { type: "combinator", content: E, length: E.length, pos: [] }, P];
            },
            (a) => {
              const h = p(g["pseudo-element"], a);
              if (h === void 0) return;
              const [y, [E, { name: P }], o] = h;
              if (P !== void 0) return [y, { type: "pseudo-element", content: E, length: E.length, pos: [], name: P }, o];
            },
            (a) => {
              const h = p(g["pseudo-class"], a);
              if (h === void 0) return;
              const [y, [E, { name: P, argument: o }], v] = h;
              if (P !== void 0)
                return [y, { type: "pseudo-class", content: E, length: E.length, pos: [], name: P, argument: o, subtree: void 0 }, v];
            },
            (a) => {
              const h = p(g.type, a);
              if (h === void 0) return;
              const [y, [E, { name: P, namespace: o }], v] = h;
              return [y, { type: "type", content: E, length: E.length, namespace: o, pos: [], name: P }, v];
            }
          ];
          function r(a) {
            if (!a) return [];
            const h = [a];
            for (const E of u)
              for (let P = 0; P < h.length; P++) {
                const o = h[P];
                if (typeof o == "string") {
                  const v = E(o);
                  v !== void 0 && h.splice(P, 1, ...v.filter((R) => R.length !== 0));
                }
              }
            let y = 0;
            for (const E of h)
              typeof E != "string" && ((E.pos = [y, y + E.length]), C.has(E.type) && (E.content = E.content.trim() || " ")),
                (y += E.length);
            return (0, w.isAtoms)(h) ? h : [];
          }
          function c(a, h, y, E) {
            for (const P of h)
              for (const o of a)
                if (E.has(o.type) && o.pos[0] < P.start && P.start < o.pos[1]) {
                  const v = o.content;
                  if (((o.content = o.content.replace(y, P.str)), o.content !== v)) {
                    f[o.type].lastIndex = 0;
                    const R = f[o.type].exec(o.content);
                    R !== null && Object.assign(o, R.groups);
                  }
                }
          }
          function A(a, h) {
            let y = 0;
            for (h -= 1; h >= 0 && a[h] === "\\"; ) (y += 1), (h -= 1);
            return y % 2 !== 0;
          }
          n.isEscaped = A;
          function _(a, h, y) {
            let E = y + 1;
            for (; (E = a.indexOf(h, E)) !== -1 && A(a, E) === !0; ) E += 1;
            if (E !== -1) return a.slice(y, E + 1);
          }
          n.gobbleQuotes = _;
          function S(a, h) {
            let y = 0;
            for (let E = h; E < a.length; E++) {
              const P = a[E];
              if (P === "(") y += 1;
              else if (P === ")")
                if (y > 0) y -= 1;
                else return;
              if (y === 0) return a.slice(h, E + 1);
            }
          }
          n.gobbleParens = S;
          function T(a, h, y, E) {
            const P = [];
            let o = 0;
            for (; (o = a.indexOf(y, o)) !== -1; ) {
              const v = E(a, o);
              if (v === void 0) break;
              P.push({ str: v, start: o }),
                (a = `${a.slice(0, o + 1)}${h.repeat(v.length - 2)}${a.slice(o + v.length - 1)}`),
                (o += v.length);
            }
            return [P, a];
          }
          n.replace = T;
          function I(a) {
            if (typeof a != "string") return [];
            if (((a = a.trim()), a.length === 0)) return [];
            const [h, y] = T(a, "\xA7", '"', (N, B) => _(N, '"', B)),
              [E, P] = T(y, "\xA7", "'", (N, B) => _(N, "'", B)),
              [o, v] = T(P, "\xB6", "(", S),
              R = r(v);
            return c(R, o, /\(¶*\)/, m), c(R, h, /"§*"/, s), c(R, E, /'§*'/, s), R;
          }
          n.tokenize = I;
          function k(a, { list: h = !0 } = {}) {
            if (h === !0 && a.some((y) => y.type === "comma")) {
              const y = [],
                E = [];
              for (let P = 0; P < a.length; P += 1) {
                const o = a[P];
                if (o.type === "comma") {
                  if (E.length === 0) throw new Error("Incorrect comma at " + P);
                  const v = k(E, { list: !1 });
                  v !== void 0 && y.push(v), (E.length = 0);
                } else E.push(o);
              }
              if (E.length === 0) throw new Error("Trailing comma");
              {
                const P = k(E, { list: !1 });
                P !== void 0 && y.push(P);
              }
              return { type: "list", list: y };
            }
            for (let y = a.length - 1; y >= 0; y--) {
              const E = a[y];
              if (E.type === "combinator") {
                const P = k(a.slice(0, y)),
                  o = k(a.slice(y + 1));
                return o === void 0 || (E.content !== " " && E.content !== "~" && E.content !== "+" && E.content !== ">")
                  ? void 0
                  : { type: "complex", combinator: E.content, left: P, right: o };
              }
            }
            if (a.length !== 0 && (0, w.isAST)(a)) return a.length === 1 ? a[0] : { type: "compound", compound: [...a] };
          }
          function L(a, h, y, E) {
            if (a !== void 0) {
              if (a.type === "complex") L(a.left, h, y, a), L(a.right, h, y, a);
              else if (a.type === "compound") for (const P of a.compound) L(P, h, y, a);
              else
                a.type === "pseudo-class" &&
                  a.subtree !== void 0 &&
                  y !== void 0 &&
                  y.type === "pseudo-class" &&
                  y.subtree !== void 0 &&
                  L(a.subtree, h, y, a);
              h(a, E);
            }
          }
          function D(a, { recursive: h = !0, list: y = !0 } = {}) {
            const E = I(a);
            if (E.length === 0) return;
            const P = k(E, { list: y });
            return (
              h === !0 &&
                L(P, (o) => {
                  o.type === "pseudo-class" &&
                    o.argument &&
                    o.name !== void 0 &&
                    n.RECURSIVE_PSEUDO_CLASSES.has(o.name) &&
                    (o.subtree = D(o.argument, { recursive: !0, list: !0 }));
                }),
              P
            );
          }
          n.parse = D;
        },
        83236: (x, n) => {
          "use strict";
          /*!
           * Copyright (c) 2017-present Cliqz GmbH. All rights reserved.
           *
           * This Source Code Form is subject to the terms of the Mozilla Public
           * License, v. 2.0. If a copy of the MPL was not distributed with this
           * file, You can obtain one at https://mozilla.org/MPL/2.0/.
           */ Object.defineProperty(n, "__esModule", { value: !0 }), (n.isAST = n.isAtoms = void 0);
          const d = null;
          function w(m) {
            return m.every((s) => typeof s != "string");
          }
          n.isAtoms = w;
          function g(m) {
            return m.every((s) => s.type !== "comma" && s.type !== "combinator");
          }
          n.isAST = g;
        },
        40542: (x, n, d) => {
          "use strict";
          /*!
           * Copyright (c) 2017-present Cliqz GmbH. All rights reserved.
           *
           * This Source Code Form is subject to the terms of the Mozilla Public
           * License, v. 2.0. If a copy of the MPL was not distributed with this
           * file, You can obtain one at https://mozilla.org/MPL/2.0/.
           */ Object.defineProperty(n, "__esModule", { value: !0 }), (n.injectCosmetics = void 0);
          const w = d(32261),
            g = d(3803);
          let m = !0,
            s = null,
            C = null;
          const f = new Set(),
            p = [],
            u = new Map();
          function r() {
            s !== null && (s.stop(), (s = null));
          }
          function c(k) {
            return new Promise((L) => {
              chrome.runtime.sendMessage(Object.assign({ action: "getCosmeticsFilters" }, k), (D) => {
                D !== void 0 && L(D);
              });
            });
          }
          function A(k, L, D) {
            var a;
            const h = (a = D.get(k)) === null || a === void 0 ? void 0 : a.get(L);
            if (h !== void 0) return h;
            const y = new Set((0, w.querySelectorAll)(k, L.ast));
            if (L.attribute !== void 0) {
              let E = D.get(k);
              E === void 0 && ((E = new Map()), D.set(k, E));
              let P = E.get(L);
              P === void 0 && ((P = new Set()), E.set(L, P));
              for (const o of y) P.add(o);
            }
            return y;
          }
          function _() {
            if (f.size === 0 || p.length === 0) return;
            const k = new Map(),
              L = new Map(),
              D = [...f].filter((a) => a.isConnected === !0);
            f.clear();
            for (const a of D)
              for (const h of p)
                for (const y of A(a, h, k))
                  h.remove === !0
                    ? ((y.textContent = ""), y.remove())
                    : h.attribute !== void 0 && u.has(y) === !1 && L.set(y, { selector: h, root: a });
            for (const [a, { selector: h, root: y }] of L.entries())
              h.attribute !== void 0 && (a.setAttribute(h.attribute, ""), u.set(a, { selector: h, root: y }));
            for (const [a, { selector: h, root: y }] of [...u.entries()])
              h.attribute !== void 0 &&
                (y.isConnected === !1 || a.isConnected === !1 || A(y, h, k).has(a) === !1) &&
                (u.delete(a), a.removeAttribute(h.attribute));
          }
          function S(k) {
            if (p.length !== 0 && !f.has(window.document.documentElement)) {
              for (const L of k) {
                if (L === window.document.documentElement) {
                  f.clear(), f.add(L);
                  break;
                }
                f.add(L);
              }
              C === null &&
                (C = setTimeout(() => {
                  (C = null), _();
                }, 1e3));
            }
          }
          function T(k, { active: L, scripts: D, extended: a }) {
            if (L === !1) {
              (m = !1), r();
              return;
            } else m = !0;
            if (D)
              for (const h of D)
                try {
                  (0, g.injectScript)(h, k.document);
                } catch {}
            a && a.length > 0 && (p.push(...a), S([k.document.documentElement]));
          }
          function I(k, L = !0, D = c) {
            D({ lifecycle: "start", ids: [], classes: [], hrefs: [] }).then((a) => T(k, a)),
              k.addEventListener(
                "DOMContentLoaded",
                () => {
                  (s = new g.DOMMonitor((a) => {
                    a.type === "elements"
                      ? a.elements.length !== 0 && S(a.elements)
                      : D(Object.assign(Object.assign({}, a), { lifecycle: "dom-update" })).then((h) => T(k, h));
                  })),
                    s.queryAll(k),
                    m && L && s.start(k);
                },
                { once: !0, passive: !0 }
              ),
              k.addEventListener("pagehide", r, { once: !0, passive: !0 });
          }
          n.injectCosmetics = I;
        },
        23418: (x, n, d) => {
          "use strict";
          var w = m(d(77084)),
            g = d(54782);
          function m(s) {
            return s && s.__esModule ? s : { default: s };
          }
          /*!
           * Copyright (c) 2014-present Cliqz GmbH. All rights reserved.
           *
           * This Source Code Form is subject to the terms of the Mozilla Public
           * License, v. 2.0. If a copy of the MPL was not distributed with this
           * file, You can obtain one at https://mozilla.org/MPL/2.0/.
           */ (0, g.registerContentScript)({
            module: "adblocker",
            matches: ["http://*/*", "https://*/*"],
            matchAboutBlank: !0,
            allFrames: !0,
            js: [
              (s, C, f) => {
                (0, w.default)(s, !0, async (p) => (await f.app.modules.adblocker.action("getCosmeticsFilters", p)) || {});
              }
            ]
          });
        },
        30895: () => {
          "use strict"; /*!
           * Copyright (c) 2014-present Cliqz GmbH. All rights reserved.
           *
           * This Source Code Form is subject to the terms of the Mozilla Public
           * License, v. 2.0. If a copy of the MPL was not distributed with this
           * file, You can obtain one at https://mozilla.org/MPL/2.0/.
           */
        },
        13631: (x, n) => {
          "use strict";
          Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
          var d = {
            platform: "webextension",
            brocfile: "Brocfile.ghostery.js",
            baseURL: "/cliqz/",
            pack: "npm pack",
            publish:
              'echo "Uploading version: browser-core-$PACKAGE_VERSION.tgz" && aws s3 cp browser-core-$PACKAGE_VERSION.tgz s3://cdncliqz/update/edge/ghostery/$BRANCH_NAME/$VERSION.${GIT_COMMIT:0:7}.tgz --acl public-read && aws s3 cp s3://cdncliqz/update/edge/ghostery/$BRANCH_NAME/$VERSION.${GIT_COMMIT:0:7}.tgz s3://cdncliqz/update/edge/ghostery/$BRANCH/latest.tgz --acl public-read',
            sourceMaps: !1,
            format: "common",
            settings: {
              BACKGROUND_IMAGE_URL: "https://cdn.ghostery.net/brands-database/database/",
              CDN_BASEURL: "https://cdn.ghostery.net",
              ADBLOCKER_BASE_URL: "https://cdn.ghostery.com/adblocker/configs",
              ANTITRACKING_BASE_URL: "https://cdn.ghostery.com/antitracking",
              CONFIG_PROVIDER: "https://api.ghostery.net/api/v1/config",
              ENDPOINT_ANONPATTERNSURL: "https://cdn2.ghostery.com/human-web-chromium/patterns-anon.gz",
              ENDPOINT_HPNV2_DIRECT: "https://collector-hpn.ghostery.net",
              ENDPOINT_HPNV2_ANONYMOUS: "https://collector-hpn.ghostery.net",
              ENDPOINT_HUMAN_WEB_PATTERNS: "https://cdn2.ghostery.com/human-web-chromium/hw-patterns.gz",
              ENDPOINT_PATTERNSURL: "https://cdn2.ghostery.com/human-web-chromium/patterns.gz",
              ENDPOINT_SAFE_QUORUM_ENDPOINT: "https://safe-browsing-quorum.privacy.ghostery.net/",
              ENDPOINT_SAFE_QUORUM_PROVIDER: "https://safe-browsing-quorum.privacy.ghostery.net/config",
              FEEDBACK: "https://ghostery.net/feedback/",
              PRIVACY_SCORE_URL: "https://anti-tracking.ghostery.net/api/v1/score?",
              TRACKER_SCORE_URL: "https://cdn.ghostery.net/privacy-score/privacy_score.json",
              RESULTS_PROVIDER: "https://api.ghostery.net/api/v2/results?nrh=1&q=",
              RESULTS_PROVIDER_LOG: "https://api.ghostery.net/api/v1/logging?q=",
              RICH_HEADER: "https://api.ghostery.net/api/v2/rich-header?path=/v2/map",
              ROTATED_TOP_NEWS: "rotated-top-news.ghostery.net",
              SAFE_BROWSING: "https://safe-browsing.ghostery.net",
              STATISTICS: "https://stats.ghostery.net",
              SUGGESTIONS_URL: "https://ghostery.net/search?q=",
              UNINSTALL: "https://ghostery.net/home/offboarding",
              WTM_API: "https://whotracks.me/data/",
              SUPPORT_URL: "https://www.ghostery.com/support/",
              PRIVACY_POLICY_URL: "https://www.ghostery.com/about-ghostery/privacy-statements/",
              NEW_TAB_URL: "/freshtab/home.html",
              channel: "CH80",
              MSGCHANNEL: "web-extension",
              URL_CHANGED_EVENT_DEBOUNCE: 500,
              ATTRACK_TELEMETRY_PROVIDER: "hpnv2",
              HW_CHANNEL: "ghostery",
              ALLOWED_COUNTRY_CODES: [
                "ar",
                "at",
                "au",
                "be",
                "br",
                "ca",
                "ch",
                "cn",
                "cz",
                "de",
                "dk",
                "es",
                "fi",
                "fr",
                "gb",
                "gr",
                "hu",
                "id",
                "in",
                "it",
                "jp",
                "kr",
                "mx",
                "nl",
                "no",
                "nz",
                "ph",
                "pl",
                "pt",
                "ro",
                "ru",
                "se",
                "sg",
                "tr",
                "tw",
                "ua",
                "us"
              ],
              antitrackingPlaceholder: "ghostery",
              antitrackingHeader: "Ghostery-AntiTracking",
              HUMAN_WEB_LITE_COLLECTOR_VIA_PROXY: "https://collector-hpn.ghostery.net",
              HUMAN_WEB_LITE_COLLECTOR_DIRECT: "https://collector-hpn.ghostery.net",
              HUMAN_WEB_LITE_PATTERNS: "https://cdn2.ghostery.com/human-web-android/patterns.json",
              HUMAN_WEB_LITE_AUTO_TRIGGER: !0,
              frameScriptWhitelist: ["http://localhost:3000/"]
            },
            default_prefs: {
              "modules.human-web.enabled": !0,
              "modules.antitracking.enabled": !0,
              "modules.adblocker.enabled": !0,
              "modules.insights.enabled": !1,
              "cliqz-adb": 1,
              attrackBloomFilter: !0,
              humanWeb: !0,
              attrackTelemetryMode: 1,
              attrackDefaultAction: "placeholder",
              sendAntiTrackingHeader: !1,
              attrackCookieTrustReferers: !0,
              "attrack.cookieMode": "ghostery"
            },
            bundles: [
              "core/content-script.bundle.js",
              "hpnv2/worker.wasm.bundle.js",
              "hpnv2/worker.asmjs.bundle.js",
              "human-web/rusha.bundle.js"
            ],
            modules: [
              "core",
              "human-web",
              "hpnv2",
              "antitracking",
              "webrequest-pipeline",
              "adblocker",
              "insights",
              "hpn-lite",
              "human-web-lite"
            ],
            environment: "development",
            isBeta: !1,
            EXTENSION_VERSION: "1.3.12",
            VERSION: "1.3.12"
          };
          n.default = d;
        },
        33102: (x, n, d) => {
          "use strict";
          d(30265);
          var w = g(d(5131));
          function g(m) {
            return m && m.__esModule ? m : { default: m };
          }
          /*!
           * Copyright (c) 2014-present Cliqz GmbH. All rights reserved.
           *
           * This Source Code Form is subject to the terms of the Mozilla Public
           * License, v. 2.0. If a copy of the MPL was not distributed with this
           * file, You can obtain one at https://mozilla.org/MPL/2.0/.
           */ (0, w.default)();
        },
        76414: (x, n, d) => {
          "use strict";
          var w = d(68398),
            g = d(54782);
          /*!
           * Copyright (c) 2014-present Cliqz GmbH. All rights reserved.
           *
           * This Source Code Form is subject to the terms of the Mozilla Public
           * License, v. 2.0. If a copy of the MPL was not distributed with this
           * file, You can obtain one at https://mozilla.org/MPL/2.0/.
           */ function m(c) {
            let A = c.target,
              _;
            try {
              for (let S = 0; S < 5; S += 1) {
                if (((_ = A.innerHTML), _.indexOf("http://") !== -1 || _.indexOf("https://") !== -1)) return _;
                (A = A.parentNode), (S += 1);
              }
            } catch {}
          }
          function s(c, A) {
            const _ = [];
            if (window.parent !== window && window.document && window.document.scripts)
              for (let k = 0; k < window.document.scripts.length; k += 1) {
                const L = window.document.scripts[k].src;
                L.startsWith("http") && _.push(L);
              }
            let S = c.target;
            S.nodeType !== 1 && (S = S.parentNode);
            let T = null;
            S.closest("a[href]") && (T = S.closest("a[href]").getAttribute("href"));
            const I = {
              target: {
                baseURI: c.target.baseURI,
                value: c.target.value,
                href: c.target.href,
                parentNode: { href: c.target.parentNode ? c.target.parentNode.href : null },
                linksSrc: _
              }
            };
            A.app.modules.core.action("recordMouseDown", I, m(c), T);
          }
          function C(c, A) {
            if (!(0, w.isTopWindow)(c)) return;
            const _ = c.document.getElementsByTagName("html").item(0).getAttribute("lang"),
              S = c.document.querySelector("title"),
              T = c.document.querySelector("meta[name=description]"),
              I = c.document.querySelector('meta[property="og:title"]'),
              k = c.document.querySelector('meta[property="og:description"]'),
              L = c.document.querySelector('meta[property="og:image"]');
            A.app.modules.core.action("recordMeta", c.location.href, {
              title: S && S.innerHTML,
              description: T && T.content,
              ogTitle: I && I.content,
              ogDescription: k && k.content,
              ogImage: L && L.content,
              lang: _
            });
          }
          function f() {
            return window.document.documentElement.outerHTML;
          }
          function p(c) {
            const A = window.document.querySelector(c);
            try {
              return A.click(), !0;
            } catch {
              return !1;
            }
          }
          function u(c, A, { shadowRootSelector: _ = null, attributeType: S = "property" } = {}) {
            const T = _ ? window.document.querySelector(_).shadowRoot : window.document,
              I = A.split(","),
              k = (L, D) => (S === "property" ? L[D] : L.getAttribute(D));
            return Array.prototype.map.call(T.querySelectorAll(c), (L) =>
              I.length > 1 ? I.reduce((D, a) => ({ ...D, [a]: k(L, a) }), {}) : k(L, A)
            );
          }
          function r(c) {
            const A = window.document;
            return Array.prototype.map.call(A.querySelectorAll(c), (_) => window.getComputedStyle(_));
          }
          (0, g.registerContentScript)({
            module: "core",
            matches: ["<all_urls>"],
            allFrames: !0,
            matchAboutBlank: !0,
            js: [
              (c, A, _) => {
                const S = (I) => {
                  s(I, _);
                };
                c.addEventListener("mousedown", S);
                const T = () => {
                  C(c, _);
                };
                return (
                  c.addEventListener("DOMContentLoaded", T),
                  c.addEventListener(
                    "pagehide",
                    () => {
                      c.removeEventListener("mousedown", S), c.removeEventListener("DOMContentLoaded", T);
                    },
                    { once: !0 }
                  ),
                  { getHTML: f, click: p, queryHTML: u, queryComputedStyle: r }
                );
              }
            ]
          });
        },
        48958: (x, n, d) => {
          "use strict";
          Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
          var w = m(d(90607)),
            g = m(d(60132));
          function m(p) {
            return p && p.__esModule ? p : { default: p };
          }
          function s(p, u, r) {
            return u in p ? Object.defineProperty(p, u, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (p[u] = r), p;
          }
          class C {
            constructor() {
              s(this, "MAX_BUFFER_LEN", 5e3),
                (this.buffer = []),
                (this.onMessage = (u) =>
                  this.buffer.length < this.MAX_BUFFER_LEN
                    ? new Promise((r, c) => {
                        this.buffer.push({ message: u, resolve: r, reject: c });
                      })
                    : Promise.reject(
                        new Error(`content-script actions buffer limit exceeded: ${this.buffer.length} ${this.MAX_BUFFER_LEN}`)
                      ));
            }
            init() {
              g.default.onMessage.addListener(this.onMessage);
            }
            unload() {
              g.default.onMessage.removeListener(this.onMessage);
            }
          }
          class f {
            constructor() {
              (this.actions = null), (this.messageHandlers = [new C()]);
              for (const u of this.messageHandlers) u.init();
            }
            unload() {
              for (const u of this.messageHandlers) u.unload();
              this.messageHandlers = [];
            }
            setActionCallbacks(u) {
              const r = this.messageHandlers[0].buffer;
              this.unload();
              for (const [c, A] of Object.entries(u)) {
                const _ = new w.default(c, A);
                for (const { message: S, resolve: T, reject: I } of r) {
                  const k = _.onMessage(S);
                  k !== void 0 && k.then(T).catch(I);
                }
                _.init(), this.messageHandlers.push(_);
              }
            }
          }
          n.default = f;
        },
        77202: (x, n, d) => {
          "use strict";
          Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
          var w = d(93509),
            g = m(d(13631));
          function m(f) {
            return f && f.__esModule ? f : { default: f };
          }
          /*!
           * Copyright (c) 2014-present Cliqz GmbH. All rights reserved.
           *
           * This Source Code Form is subject to the terms of the Mozilla Public
           * License, v. 2.0. If a copy of the MPL was not distributed with this
           * file, You can obtain one at https://mozilla.org/MPL/2.0/.
           */ function s() {}
          var C =
            g.default.environment === "development"
              ? w.window.console
              : new Proxy(
                  {},
                  {
                    get() {
                      return s;
                    }
                  }
                );
          n.default = C;
        },
        68398: (x, n) => {
          "use strict";
          Object.defineProperty(n, "__esModule", { value: !0 }), (n.documentBodyReady = w), (n.isTopWindow = d);
          /*!
           * Copyright (c) 2014-present Cliqz GmbH. All rights reserved.
           *
           * This Source Code Form is subject to the terms of the Mozilla Public
           * License, v. 2.0. If a copy of the MPL was not distributed with this
           * file, You can obtain one at https://mozilla.org/MPL/2.0/.
           */ function d(g) {
            return g.self === g.top;
          }
          function w() {
            return window.document && window.document.body
              ? Promise.resolve()
              : new Promise((g) => {
                  window.addEventListener("DOMContentLoaded", g, { once: !0 });
                });
          }
        },
        44361: (x, n) => {
          "use strict";
          Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = p);
          /*!
           * Copyright (c) 2014-present Cliqz GmbH. All rights reserved.
           *
           * This Source Code Form is subject to the terms of the Mozilla Public
           * License, v. 2.0. If a copy of the MPL was not distributed with this
           * file, You can obtain one at https://mozilla.org/MPL/2.0/.
           */ const d = new Set(["http", "https", "ws", "wss", "ftp", "ftps", "data", "file"]),
            w = /^[.\w_-]+$/;
          function g(u) {
            return u.replace(/([|.$+?{}()[\]\\])/g, "\\$1").replace(/\*/g, ".*");
          }
          function m(u) {
            if (u === "*") return new Set(["http", "https", "ws", "wss"]);
            if (d.has(u)) return new Set([u]);
            throw new Error(`<scheme> is not valid: ${u}`);
          }
          function s(u, r) {
            if (r.includes(":")) throw new Error("<host> must not include a port number");
            if (r.length === 0) {
              if (u === "file") return /^$/;
              throw new Error('<host> is optional only if the scheme is "file"');
            }
            const c = r.lastIndexOf("*");
            if (c !== -1) {
              if (r === "*") return null;
              if (c !== 0) throw new Error("<host> wildcard may only appear at the start");
              if (r[1] !== ".") throw new Error('<host> only "*" and "*." followed by hostname parts are valid');
              const A = r.slice(2);
              if (w.test(A) === !1) throw new Error("<host> contains invalid characters");
              return new RegExp(`^(?:.*[.])?${g(A)}$`);
            }
            if (w.test(r) === !1) throw new Error("<host> contains invalid characters");
            return new RegExp(`^${g(r)}$`);
          }
          function C(u) {
            return new RegExp(`^${g(u)}$`);
          }
          function f(u) {
            if (u === "<all_urls>") return { scheme: d, host: null, path: null };
            const r = u.indexOf("://");
            if (r === -1) throw new Error('<scheme> missing, "://" not found');
            const c = u.slice(0, r),
              A = m(c),
              _ = u.indexOf("/", r + 3);
            if (_ === -1) throw new Error('<path> missing, "/" not found');
            const S = u.slice(r + 3, _),
              T = s(c, S),
              I = u.slice(_ + 1),
              k = C(I);
            return { scheme: A, host: T, path: k };
          }
          function p(u, r) {
            const { protocol: c, hostname: A, pathname: _, search: S } = new URL(r),
              T = f(u);
            return !(
              T.scheme.has(c.slice(0, c.length - 1)) === !1 ||
              (T.host !== null && T.host.test(A) === !1) ||
              (T.path !== null && T.path.test(`${_.slice(1)}${S}`) === !1)
            );
          }
        },
        54782: (x, n, d) => {
          "use strict";
          Object.defineProperty(n, "__esModule", { value: !0 }), (n.registerContentScript = p), (n.runContentScripts = u);
          var w = s(d(44361)),
            g = d(68398),
            m = s(d(77202));
          function s(r) {
            return r && r.__esModule ? r : { default: r };
          }
          /*!
           * Copyright (c) 2014-present Cliqz GmbH. All rights reserved.
           *
           * This Source Code Form is subject to the terms of the Mozilla Public
           * License, v. 2.0. If a copy of the MPL was not distributed with this
           * file, You can obtain one at https://mozilla.org/MPL/2.0/.
           */ function C(r, c) {
            if ((0, g.isTopWindow)(r) === !1 && c.allFrames !== !0) return !1;
            let A = r.location.href;
            if (A === "about:blank" || A === "about:srcdoc") {
              if (c.matchAboutBlank !== !0 || !r.parent) return !1;
              A = r.parent.location.href;
            }
            if (c.excludeMatches !== void 0) {
              for (const _ of c.excludeMatches) if ((0, w.default)(_, A)) return !1;
            }
            for (const _ of c.matches) if ((0, w.default)(_, A)) return !0;
            return !1;
          }
          const f = [];
          function p(r) {
            if (r.module === void 0) {
              m.default.error('"module" property should be specified in content.es', r);
              return;
            }
            if (Array.isArray(r.js) === !1) {
              m.default.error('"js" should be an array of functions', r);
              return;
            }
            if (Array.isArray(r.matches) === !1) {
              m.default.error('"matches" should be an array of match patterns', r);
              return;
            }
            if (r.excludeMatches !== void 0 && Array.isArray(r.excludeMatches) === !1) {
              m.default.error('"excludeMatches" should either be undefined or an array of match patterns', r);
              return;
            }
            f.push(r);
          }
          function u(r, c, A) {
            const _ = {};
            for (const S of f) {
              const { module: T, js: I } = S,
                { isEnabled: k } = A.app.modules[T] || { isEnabled: !1 };
              if (k && C(r, S))
                for (const L of I)
                  try {
                    const D = L(r, c, A) || {};
                    _[T] = { ..._[T], ...D };
                  } catch (D) {
                    m.default.error(`CLIQZ content-script failed: ${D} ${D.stack}`);
                  }
            }
            return _;
          }
        },
        5131: (x, n, d) => {
          "use strict";
          Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = u);
          var w = d(93509),
            g = C(d(60132)),
            m = C(d(48958)),
            s = d(54782);
          function C(r) {
            return r && r.__esModule ? r : { default: r };
          }
          /*!
           * Copyright (c) 2014-present Cliqz GmbH. All rights reserved.
           *
           * This Source Code Form is subject to the terms of the Mozilla Public
           * License, v. 2.0. If a copy of the MPL was not distributed with this
           * file, You can obtain one at https://mozilla.org/MPL/2.0/.
           */ function f() {
            return g.default.sendMessage({ module: "core", action: "status" }).then((r) => ({ app: r }));
          }
          function p() {
            return new Promise((r) => {
              w.window.CLIQZ !== void 0 ? r(w.window.CLIQZ) : ((w.window.runCliqz = r), f().then(r, () => {}));
            });
          }
          function u() {
            if (w.window.document.documentElement.nodeName.toLowerCase() !== "html") return;
            const r = new m.default();
            p().then((c) => {
              for (const [A, _] of Object.entries(c.app.modules))
                _.action = (S, ...T) => g.default.sendMessage({ module: A, action: S, args: T });
              r.setActionCallbacks((0, s.runContentScripts)(w.window, w.chrome, c)),
                w.window.addEventListener(
                  "pagehide",
                  () => {
                    r.unload();
                  },
                  { once: !0 }
                );
            });
          }
        },
        61118: (x, n, d) => {
          "use strict";
          Object.defineProperty(n, "__esModule", { value: !0 }),
            (n.deadline = f),
            (n.debounce = C),
            (n.nextIdle = u),
            (n.nextTick = p),
            (n.throttle = s),
            (n.tryPromise = c),
            (n.withTimeout = r);
          var w = m(d(42514)),
            g = d(98481);
          function m(A) {
            return A && A.__esModule ? A : { default: A };
          }
          /*!
           * Copyright (c) 2014-present Cliqz GmbH. All rights reserved.
           *
           * This Source Code Form is subject to the terms of the Mozilla Public
           * License, v. 2.0. If a copy of the MPL was not distributed with this
           * file, You can obtain one at https://mozilla.org/MPL/2.0/.
           */ function s(A, _, S) {
            let T, I;
            return (...k) => {
              const L = Date.now();
              T && L < T + S
                ? (A.clearTimeout(I),
                  (I = A.setTimeout(() => {
                    (T = L), _(...k);
                  }, S)))
                : ((T = L), _(...k));
            };
          }
          function C(A, _) {
            let S = null;
            return _
              ? function (...I) {
                  (0, g.clearTimeout)(S);
                  const k = () => {
                    (S = null), A(...I);
                  };
                  S = (0, g.setTimeout)(k, _);
                }
              : A;
          }
          function f(A, _) {
            return Promise.race([(0, w.default)(_), A]);
          }
          function p(A, ..._) {
            return Promise.resolve().then(() => A(..._));
          }
          function u() {
            return typeof window > "u" || !window.requestIdleCallback
              ? p(() => {})
              : new Promise((A) => {
                  window.requestIdleCallback(A);
                });
          }
          async function r(A, _) {
            let S;
            try {
              return (
                (S = new Promise((T, I) => {
                  (0, g.setTimeout)(() => I(new Error(`Timed out after ${_ / 1e3} seconds`)), _);
                })),
                await Promise.race([A, S])
              );
            } finally {
              (0, g.clearTimeout)(S);
            }
          }
          async function c(A, _ = 1e3) {
            try {
              return await r(A, _);
            } catch (S) {
              return `Failed: ${S}`;
            }
          }
        },
        90607: (x, n, d) => {
          "use strict";
          Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
          var w = g(d(60132));
          function g(s) {
            return s && s.__esModule ? s : { default: s };
          }
          /*!
           * Copyright (c) 2014-present Cliqz GmbH. All rights reserved.
           *
           * This Source Code Form is subject to the terms of the Mozilla Public
           * License, v. 2.0. If a copy of the MPL was not distributed with this
           * file, You can obtain one at https://mozilla.org/MPL/2.0/.
           */ class m {
            constructor(C, f) {
              this.onMessage = (p) => {
                if (p.module === C) {
                  const u = f[p.action];
                  if (u !== void 0) {
                    let r = p.args || [];
                    return p.message !== void 0 && (r = [p.message]), Promise.resolve(u(...r));
                  }
                }
              };
            }
            init() {
              w.default.onMessage.addListener(this.onMessage);
            }
            unload() {
              w.default.onMessage.removeListener(this.onMessage);
            }
          }
          n.default = m;
        },
        42514: (x, n, d) => {
          "use strict";
          Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = g);
          var w = d(98481);
          /*!
           * Copyright (c) 2014-present Cliqz GmbH. All rights reserved.
           *
           * This Source Code Form is subject to the terms of the Mozilla Public
           * License, v. 2.0. If a copy of the MPL was not distributed with this
           * file, You can obtain one at https://mozilla.org/MPL/2.0/.
           */ function g(m) {
            return new Promise((s) => (0, w.setTimeout)(s, m));
          }
        },
        98481: (x, n, d) => {
          "use strict";
          Object.defineProperty(n, "__esModule", { value: !0 }),
            Object.defineProperty(n, "clearInterval", {
              enumerable: !0,
              get: function () {
                return w.clearInterval;
              }
            }),
            Object.defineProperty(n, "clearTimeout", {
              enumerable: !0,
              get: function () {
                return w.clearTimeout;
              }
            }),
            Object.defineProperty(n, "setInterval", {
              enumerable: !0,
              get: function () {
                return w.setInterval;
              }
            }),
            Object.defineProperty(n, "setTimeout", {
              enumerable: !0,
              get: function () {
                return w.setTimeout;
              }
            });
          var w = d(6353);
        },
        33390: (x, n) => {
          "use strict";
          Object.defineProperty(n, "__esModule", { value: !0 }), (n.normalizeAclkUrl = d);
          /*!
           * Copyright (c) 2014-present Cliqz GmbH. All rights reserved.
           *
           * This Source Code Form is subject to the terms of the Mozilla Public
           * License, v. 2.0. If a copy of the MPL was not distributed with this
           * file, You can obtain one at https://mozilla.org/MPL/2.0/.
           */ function d(w) {
            const g = new URL(w, "https://www.googleadservices.com");
            if (g.pathname !== "/pagead/aclk" && g.pathname !== "/aclk")
              throw new Error(`Expected Google pagead "aclk" URL. Instead got: ${w}`);
            const m = (C) => !["ved", "dct"].includes(C[0]);
            return [...g.searchParams]
              .filter(m)
              .sort()
              .map((C) => C.join("="))
              .join("&");
          }
        },
        1916: (x, n, d) => {
          "use strict";
          Object.defineProperty(n, "__esModule", { value: !0 }), (n.parseDom = p);
          var w = C(d(60132)),
            g = d(54782),
            m = d(61118),
            s = d(33390);
          function C(r) {
            return r && r.__esModule ? r : { default: r };
          }
          /*!
           * Copyright (c) 2014-present Cliqz GmbH. All rights reserved.
           *
           * This Source Code Form is subject to the terms of the Mozilla Public
           * License, v. 2.0. If a copy of the MPL was not distributed with this
           * file, You can obtain one at https://mozilla.org/MPL/2.0/.
           */ function f(r) {
            window.console.error("[human-web] Exception caught:", r);
          }
          function p(r, c, A) {
            const _ = c.document;
            try {
              let S = null;
              if (((S = _.querySelector("script")), S && S.innerHTML.indexOf("location.replace") > -1)) {
                const T = _.querySelector("title").textContent;
                w.default.sendMessage({
                  module: "human-web",
                  action: "jsRedirect",
                  args: [{ message: { location: T, url: _.location.href } }]
                });
              }
            } catch (S) {
              f(S);
            }
            try {
              let S = "",
                T = !1;
              _.querySelector("#s0p1c0") && (S = _.querySelector("#s0p1c0").href),
                _.querySelector("#tads .ads-ad") && _.querySelector("#tads .ads-ad").offsetParent === null && (T = !0);
              const I = { type: "dom", ad: S, hidden: T };
              A.action("contentScriptTopAds", { message: I });
            } catch (S) {
              f(S);
            }
            try {
              const S = {},
                T = c.document;
              let I = 0;
              const k = {
                  query: { element: "#rso", attribute: "data-async-context" },
                  adSections: ["#tads div[data-text-ad]", ".pla-unit-container", ".pla-hovercard-content-ellip", ".cu-container tr"],
                  0: { cu: "a", cuAttr: "data-rw", fu: "a" },
                  1: { cu: "a[id^='plaurlg']", fu: "a[id^='vplaurlg']" },
                  2: { cu: "a[id^='plaurlh']", fu: "a[id^='vplaurlh']" },
                  3: { cu: "a[id^='plaurlt']", fu: "a[id^='vplaurlt']" }
                },
                L = T.querySelector(k.query.element);
              let D = "";
              if (L) {
                D = L.getAttribute(k.query.attribute).replace("query:", "");
                try {
                  D = decodeURIComponent(D);
                } catch {}
              }
              k.adSections.forEach((a, h) => {
                Array.prototype.slice.call(T.querySelectorAll(a)).forEach((E) => {
                  const P = k[h].cu,
                    o = k[h].fu,
                    v = E.querySelector(P),
                    R = E.querySelector(o);
                  if (v && R) {
                    const N = k[h].cuAttr || "href",
                      B = (0, s.normalizeAclkUrl)(v.getAttribute(N)),
                      b = k[h].fuAttr || "href";
                    (S[B] = { ts: Date.now(), query: D, furl: [R.getAttribute("data-preconnect-urls"), R.getAttribute(b)] }), (I += 1);
                  }
                });
              }),
                I > 0 && A.action("adClick", { ads: S });
            } catch (S) {
              f(S);
            }
          }
          function u(r, c, A) {
            const _ = r.location.href,
              S = A.app.modules["human-web"];
            r.top === r &&
              r.addEventListener("DOMContentLoaded", () => {
                p(_, r, S);
              });
            function T(h) {
              return (y) => {
                S.action(h, { target: { baseURI: y.target.baseURI } });
              };
            }
            const I = (0, m.throttle)(r, T("hw:keypress"), 250),
              k = (0, m.throttle)(r, T("hw:mousemove"), 250),
              L = (0, m.throttle)(r, T("hw:scroll"), 250),
              D = (0, m.throttle)(r, T("hw:copy"), 250);
            r.addEventListener("keypress", I),
              r.addEventListener("mousemove", k),
              r.addEventListener("scroll", L),
              r.addEventListener("copy", D);
            function a(h) {
              if (!(h && h.target !== r.document)) {
                try {
                  String(r);
                } catch {
                  return;
                }
                r.removeEventListener("keypress", I),
                  r.removeEventListener("mousemove", k),
                  r.removeEventListener("scroll", L),
                  r.removeEventListener("copy", D);
              }
            }
            r.addEventListener("pagehide", a);
          }
          (0, g.registerContentScript)({ module: "human-web", matches: ["http://*/*", "https://*/*"], js: [u], allFrames: !0 });
        },
        52562: (x, n, d) => {
          "use strict";
          var w = d(54782),
            g = d(98481);
          /*!
           * Copyright (c) 2014-present Cliqz GmbH. All rights reserved.
           *
           * This Source Code Form is subject to the terms of the Mozilla Public
           * License, v. 2.0. If a copy of the MPL was not distributed with this
           * file, You can obtain one at https://mozilla.org/MPL/2.0/.
           */ function m(C) {
            const { host: f, hostname: p, pathname: u, protocol: r } = document.location,
              A = performance.timing.domContentLoadedEventStart - performance.timing.requestStart || 0;
            C.app.modules.insights.action("recordPageInfo", {
              domain: `${r}//${f}${u}`,
              host: p,
              timestamp: performance.timing.navigationStart,
              latency: A,
              pageTiming: { timing: { navigationStart: performance.timing.navigationStart, loadEventEnd: performance.timing.loadEventEnd } }
            });
          }
          function s(C, f, p) {
            document.readyState !== "complete"
              ? C.addEventListener("load", () => {
                  (0, g.setTimeout)(() => {
                    m(p);
                  }, 1);
                })
              : m(p);
          }
          (0, w.registerContentScript)({ module: "insights", matches: ["http://*/*", "https://*/*"], js: [s] });
        },
        30265: (x, n, d) => {
          "use strict";
          d(76414), d(1916), d(30895), d(23418), d(52562);
        },
        93509: (x, n) => {
          "use strict";
          Object.defineProperty(n, "__esModule", { value: !0 }), (n.window = n.chrome = void 0);
          /*!
           * Copyright (c) 2014-present Cliqz GmbH. All rights reserved.
           *
           * This Source Code Form is subject to the terms of the Mozilla Public
           * License, v. 2.0. If a copy of the MPL was not distributed with this
           * file, You can obtain one at https://mozilla.org/MPL/2.0/.
           */ const d = typeof browser < "u" ? browser : chrome;
          n.chrome = d;
          const w = window;
          n.window = w;
        },
        77084: (x, n, d) => {
          "use strict";
          Object.defineProperty(n, "__esModule", { value: !0 }),
            Object.defineProperty(n, "default", {
              enumerable: !0,
              get: function () {
                return w.injectCosmetics;
              }
            });
          var w = d(40542);
        },
        60132: (x, n, d) => {
          "use strict";
          Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
          var w = g(d(58133));
          function g(s) {
            return s && s.__esModule ? s : { default: s };
          }
          /*!
           * Copyright (c) 2014-present Cliqz GmbH. All rights reserved.
           *
           * This Source Code Form is subject to the terms of the Mozilla Public
           * License, v. 2.0. If a copy of the MPL was not distributed with this
           * file, You can obtain one at https://mozilla.org/MPL/2.0/.
           */ var m = (typeof browser < "u" ? browser : w.default).runtime;
          n.default = m;
        },
        6353: (x, n) => {
          "use strict";
          Object.defineProperty(n, "__esModule", { value: !0 }), (n.setTimeout = n.setInterval = n.clearTimeout = n.clearInterval = void 0);
          /*!
           * Copyright (c) 2014-present Cliqz GmbH. All rights reserved.
           *
           * This Source Code Form is subject to the terms of the Mozilla Public
           * License, v. 2.0. If a copy of the MPL was not distributed with this
           * file, You can obtain one at https://mozilla.org/MPL/2.0/.
           */ const d = (...s) => (typeof setTimeout > "u" ? window.setTimeout.bind(window) : setTimeout)(...s);
          n.setTimeout = d;
          const w = (...s) => (typeof setInterval > "u" ? window.setInterval.bind(window) : setInterval)(...s);
          n.setInterval = w;
          const g = (...s) => (typeof clearTimeout > "u" ? window.clearTimeout.bind(window) : clearTimeout)(...s);
          n.clearTimeout = g;
          const m = (...s) => (typeof clearInterval > "u" ? window.clearInterval.bind(window) : clearInterval)(...s);
          n.clearInterval = m;
        },
        58133: function (x, n) {
          var d, w, g;
          (function (m, s) {
            if (!0) (w = [x]), (d = s), (g = typeof d == "function" ? d.apply(n, w) : d), g !== void 0 && (x.exports = g);
            else var C;
          })(typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : this, function (m) {
            "use strict";
            if (typeof browser > "u" || Object.getPrototypeOf(browser) !== Object.prototype) {
              const s = "The message port closed before a response was received.",
                C =
                  "Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)",
                f = (p) => {
                  const u = {
                    alarms: {
                      clear: { minArgs: 0, maxArgs: 1 },
                      clearAll: { minArgs: 0, maxArgs: 0 },
                      get: { minArgs: 0, maxArgs: 1 },
                      getAll: { minArgs: 0, maxArgs: 0 }
                    },
                    bookmarks: {
                      create: { minArgs: 1, maxArgs: 1 },
                      get: { minArgs: 1, maxArgs: 1 },
                      getChildren: { minArgs: 1, maxArgs: 1 },
                      getRecent: { minArgs: 1, maxArgs: 1 },
                      getSubTree: { minArgs: 1, maxArgs: 1 },
                      getTree: { minArgs: 0, maxArgs: 0 },
                      move: { minArgs: 2, maxArgs: 2 },
                      remove: { minArgs: 1, maxArgs: 1 },
                      removeTree: { minArgs: 1, maxArgs: 1 },
                      search: { minArgs: 1, maxArgs: 1 },
                      update: { minArgs: 2, maxArgs: 2 }
                    },
                    browserAction: {
                      disable: { minArgs: 0, maxArgs: 1, fallbackToNoCallback: !0 },
                      enable: { minArgs: 0, maxArgs: 1, fallbackToNoCallback: !0 },
                      getBadgeBackgroundColor: { minArgs: 1, maxArgs: 1 },
                      getBadgeText: { minArgs: 1, maxArgs: 1 },
                      getPopup: { minArgs: 1, maxArgs: 1 },
                      getTitle: { minArgs: 1, maxArgs: 1 },
                      openPopup: { minArgs: 0, maxArgs: 0 },
                      setBadgeBackgroundColor: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                      setBadgeText: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                      setIcon: { minArgs: 1, maxArgs: 1 },
                      setPopup: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                      setTitle: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 }
                    },
                    browsingData: {
                      remove: { minArgs: 2, maxArgs: 2 },
                      removeCache: { minArgs: 1, maxArgs: 1 },
                      removeCookies: { minArgs: 1, maxArgs: 1 },
                      removeDownloads: { minArgs: 1, maxArgs: 1 },
                      removeFormData: { minArgs: 1, maxArgs: 1 },
                      removeHistory: { minArgs: 1, maxArgs: 1 },
                      removeLocalStorage: { minArgs: 1, maxArgs: 1 },
                      removePasswords: { minArgs: 1, maxArgs: 1 },
                      removePluginData: { minArgs: 1, maxArgs: 1 },
                      settings: { minArgs: 0, maxArgs: 0 }
                    },
                    commands: { getAll: { minArgs: 0, maxArgs: 0 } },
                    contextMenus: {
                      remove: { minArgs: 1, maxArgs: 1 },
                      removeAll: { minArgs: 0, maxArgs: 0 },
                      update: { minArgs: 2, maxArgs: 2 }
                    },
                    cookies: {
                      get: { minArgs: 1, maxArgs: 1 },
                      getAll: { minArgs: 1, maxArgs: 1 },
                      getAllCookieStores: { minArgs: 0, maxArgs: 0 },
                      remove: { minArgs: 1, maxArgs: 1 },
                      set: { minArgs: 1, maxArgs: 1 }
                    },
                    devtools: {
                      inspectedWindow: { eval: { minArgs: 1, maxArgs: 2, singleCallbackArg: !1 } },
                      panels: {
                        create: { minArgs: 3, maxArgs: 3, singleCallbackArg: !0 },
                        elements: { createSidebarPane: { minArgs: 1, maxArgs: 1 } }
                      }
                    },
                    downloads: {
                      cancel: { minArgs: 1, maxArgs: 1 },
                      download: { minArgs: 1, maxArgs: 1 },
                      erase: { minArgs: 1, maxArgs: 1 },
                      getFileIcon: { minArgs: 1, maxArgs: 2 },
                      open: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                      pause: { minArgs: 1, maxArgs: 1 },
                      removeFile: { minArgs: 1, maxArgs: 1 },
                      resume: { minArgs: 1, maxArgs: 1 },
                      search: { minArgs: 1, maxArgs: 1 },
                      show: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 }
                    },
                    extension: {
                      isAllowedFileSchemeAccess: { minArgs: 0, maxArgs: 0 },
                      isAllowedIncognitoAccess: { minArgs: 0, maxArgs: 0 }
                    },
                    history: {
                      addUrl: { minArgs: 1, maxArgs: 1 },
                      deleteAll: { minArgs: 0, maxArgs: 0 },
                      deleteRange: { minArgs: 1, maxArgs: 1 },
                      deleteUrl: { minArgs: 1, maxArgs: 1 },
                      getVisits: { minArgs: 1, maxArgs: 1 },
                      search: { minArgs: 1, maxArgs: 1 }
                    },
                    i18n: { detectLanguage: { minArgs: 1, maxArgs: 1 }, getAcceptLanguages: { minArgs: 0, maxArgs: 0 } },
                    identity: { launchWebAuthFlow: { minArgs: 1, maxArgs: 1 } },
                    idle: { queryState: { minArgs: 1, maxArgs: 1 } },
                    management: {
                      get: { minArgs: 1, maxArgs: 1 },
                      getAll: { minArgs: 0, maxArgs: 0 },
                      getSelf: { minArgs: 0, maxArgs: 0 },
                      setEnabled: { minArgs: 2, maxArgs: 2 },
                      uninstallSelf: { minArgs: 0, maxArgs: 1 }
                    },
                    notifications: {
                      clear: { minArgs: 1, maxArgs: 1 },
                      create: { minArgs: 1, maxArgs: 2 },
                      getAll: { minArgs: 0, maxArgs: 0 },
                      getPermissionLevel: { minArgs: 0, maxArgs: 0 },
                      update: { minArgs: 2, maxArgs: 2 }
                    },
                    pageAction: {
                      getPopup: { minArgs: 1, maxArgs: 1 },
                      getTitle: { minArgs: 1, maxArgs: 1 },
                      hide: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                      setIcon: { minArgs: 1, maxArgs: 1 },
                      setPopup: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                      setTitle: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                      show: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 }
                    },
                    permissions: {
                      contains: { minArgs: 1, maxArgs: 1 },
                      getAll: { minArgs: 0, maxArgs: 0 },
                      remove: { minArgs: 1, maxArgs: 1 },
                      request: { minArgs: 1, maxArgs: 1 }
                    },
                    runtime: {
                      getBackgroundPage: { minArgs: 0, maxArgs: 0 },
                      getPlatformInfo: { minArgs: 0, maxArgs: 0 },
                      openOptionsPage: { minArgs: 0, maxArgs: 0 },
                      requestUpdateCheck: { minArgs: 0, maxArgs: 0 },
                      sendMessage: { minArgs: 1, maxArgs: 3 },
                      sendNativeMessage: { minArgs: 2, maxArgs: 2 },
                      setUninstallURL: { minArgs: 1, maxArgs: 1 }
                    },
                    sessions: {
                      getDevices: { minArgs: 0, maxArgs: 1 },
                      getRecentlyClosed: { minArgs: 0, maxArgs: 1 },
                      restore: { minArgs: 0, maxArgs: 1 }
                    },
                    storage: {
                      local: {
                        clear: { minArgs: 0, maxArgs: 0 },
                        get: { minArgs: 0, maxArgs: 1 },
                        getBytesInUse: { minArgs: 0, maxArgs: 1 },
                        remove: { minArgs: 1, maxArgs: 1 },
                        set: { minArgs: 1, maxArgs: 1 }
                      },
                      managed: { get: { minArgs: 0, maxArgs: 1 }, getBytesInUse: { minArgs: 0, maxArgs: 1 } },
                      sync: {
                        clear: { minArgs: 0, maxArgs: 0 },
                        get: { minArgs: 0, maxArgs: 1 },
                        getBytesInUse: { minArgs: 0, maxArgs: 1 },
                        remove: { minArgs: 1, maxArgs: 1 },
                        set: { minArgs: 1, maxArgs: 1 }
                      }
                    },
                    tabs: {
                      captureVisibleTab: { minArgs: 0, maxArgs: 2 },
                      create: { minArgs: 1, maxArgs: 1 },
                      detectLanguage: { minArgs: 0, maxArgs: 1 },
                      discard: { minArgs: 0, maxArgs: 1 },
                      duplicate: { minArgs: 1, maxArgs: 1 },
                      executeScript: { minArgs: 1, maxArgs: 2 },
                      get: { minArgs: 1, maxArgs: 1 },
                      getCurrent: { minArgs: 0, maxArgs: 0 },
                      getZoom: { minArgs: 0, maxArgs: 1 },
                      getZoomSettings: { minArgs: 0, maxArgs: 1 },
                      goBack: { minArgs: 0, maxArgs: 1 },
                      goForward: { minArgs: 0, maxArgs: 1 },
                      highlight: { minArgs: 1, maxArgs: 1 },
                      insertCSS: { minArgs: 1, maxArgs: 2 },
                      move: { minArgs: 2, maxArgs: 2 },
                      query: { minArgs: 1, maxArgs: 1 },
                      reload: { minArgs: 0, maxArgs: 2 },
                      remove: { minArgs: 1, maxArgs: 1 },
                      removeCSS: { minArgs: 1, maxArgs: 2 },
                      sendMessage: { minArgs: 2, maxArgs: 3 },
                      setZoom: { minArgs: 1, maxArgs: 2 },
                      setZoomSettings: { minArgs: 1, maxArgs: 2 },
                      update: { minArgs: 1, maxArgs: 2 }
                    },
                    topSites: { get: { minArgs: 0, maxArgs: 0 } },
                    webNavigation: { getAllFrames: { minArgs: 1, maxArgs: 1 }, getFrame: { minArgs: 1, maxArgs: 1 } },
                    webRequest: { handlerBehaviorChanged: { minArgs: 0, maxArgs: 0 } },
                    windows: {
                      create: { minArgs: 0, maxArgs: 1 },
                      get: { minArgs: 1, maxArgs: 2 },
                      getAll: { minArgs: 0, maxArgs: 1 },
                      getCurrent: { minArgs: 0, maxArgs: 1 },
                      getLastFocused: { minArgs: 0, maxArgs: 1 },
                      remove: { minArgs: 1, maxArgs: 1 },
                      update: { minArgs: 2, maxArgs: 2 }
                    }
                  };
                  if (Object.keys(u).length === 0) throw new Error("api-metadata.json has not been included in browser-polyfill");
                  class r extends WeakMap {
                    constructor(v, R = void 0) {
                      super(R), (this.createItem = v);
                    }
                    get(v) {
                      return this.has(v) || this.set(v, this.createItem(v)), super.get(v);
                    }
                  }
                  const c = (o) => o && typeof o == "object" && typeof o.then == "function",
                    A =
                      (o, v) =>
                      (...R) => {
                        p.runtime.lastError
                          ? o.reject(p.runtime.lastError)
                          : v.singleCallbackArg || (R.length <= 1 && v.singleCallbackArg !== !1)
                          ? o.resolve(R[0])
                          : o.resolve(R);
                      },
                    _ = (o) => (o == 1 ? "argument" : "arguments"),
                    S = (o, v) =>
                      function (N, ...B) {
                        if (B.length < v.minArgs)
                          throw new Error(`Expected at least ${v.minArgs} ${_(v.minArgs)} for ${o}(), got ${B.length}`);
                        if (B.length > v.maxArgs)
                          throw new Error(`Expected at most ${v.maxArgs} ${_(v.maxArgs)} for ${o}(), got ${B.length}`);
                        return new Promise((b, U) => {
                          if (v.fallbackToNoCallback)
                            try {
                              N[o](...B, A({ resolve: b, reject: U }, v));
                            } catch (M) {
                              console.warn(
                                `${o} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,
                                M
                              ),
                                N[o](...B),
                                (v.fallbackToNoCallback = !1),
                                (v.noCallback = !0),
                                b();
                            }
                          else v.noCallback ? (N[o](...B), b()) : N[o](...B, A({ resolve: b, reject: U }, v));
                        });
                      },
                    T = (o, v, R) =>
                      new Proxy(v, {
                        apply(N, B, b) {
                          return R.call(B, o, ...b);
                        }
                      });
                  let I = Function.call.bind(Object.prototype.hasOwnProperty);
                  const k = (o, v = {}, R = {}) => {
                      let N = Object.create(null),
                        B = {
                          has(U, M) {
                            return M in o || M in N;
                          },
                          get(U, M, V) {
                            if (M in N) return N[M];
                            if (!(M in o)) return;
                            let q = o[M];
                            if (typeof q == "function")
                              if (typeof v[M] == "function") q = T(o, o[M], v[M]);
                              else if (I(R, M)) {
                                let W = S(M, R[M]);
                                q = T(o, o[M], W);
                              } else q = q.bind(o);
                            else if (typeof q == "object" && q !== null && (I(v, M) || I(R, M))) q = k(q, v[M], R[M]);
                            else if (I(R, "*")) q = k(q, v[M], R["*"]);
                            else
                              return (
                                Object.defineProperty(N, M, {
                                  configurable: !0,
                                  enumerable: !0,
                                  get() {
                                    return o[M];
                                  },
                                  set(W) {
                                    o[M] = W;
                                  }
                                }),
                                q
                              );
                            return (N[M] = q), q;
                          },
                          set(U, M, V, q) {
                            return M in N ? (N[M] = V) : (o[M] = V), !0;
                          },
                          defineProperty(U, M, V) {
                            return Reflect.defineProperty(N, M, V);
                          },
                          deleteProperty(U, M) {
                            return Reflect.deleteProperty(N, M);
                          }
                        },
                        b = Object.create(o);
                      return new Proxy(b, B);
                    },
                    L = (o) => ({
                      addListener(v, R, ...N) {
                        v.addListener(o.get(R), ...N);
                      },
                      hasListener(v, R) {
                        return v.hasListener(o.get(R));
                      },
                      removeListener(v, R) {
                        v.removeListener(o.get(R));
                      }
                    });
                  let D = !1;
                  const a = new r((o) =>
                      typeof o != "function"
                        ? o
                        : function (R, N, B) {
                            let b = !1,
                              U,
                              M = new Promise(($) => {
                                U = function (G) {
                                  D || (console.warn(C, new Error().stack), (D = !0)), (b = !0), $(G);
                                };
                              }),
                              V;
                            try {
                              V = o(R, N, U);
                            } catch ($) {
                              V = Promise.reject($);
                            }
                            const q = V !== !0 && c(V);
                            if (V !== !0 && !q && !b) return !1;
                            const W = ($) => {
                              $.then(
                                (G) => {
                                  B(G);
                                },
                                (G) => {
                                  let Q;
                                  G && (G instanceof Error || typeof G.message == "string")
                                    ? (Q = G.message)
                                    : (Q = "An unexpected error occurred"),
                                    B({ __mozWebExtensionPolyfillReject__: !0, message: Q });
                                }
                              ).catch((G) => {
                                console.error("Failed to send onMessage rejected reply", G);
                              });
                            };
                            return W(q ? V : M), !0;
                          }
                    ),
                    h = ({ reject: o, resolve: v }, R) => {
                      p.runtime.lastError
                        ? p.runtime.lastError.message === s
                          ? v()
                          : o(p.runtime.lastError)
                        : R && R.__mozWebExtensionPolyfillReject__
                        ? o(new Error(R.message))
                        : v(R);
                    },
                    y = (o, v, R, ...N) => {
                      if (N.length < v.minArgs)
                        throw new Error(`Expected at least ${v.minArgs} ${_(v.minArgs)} for ${o}(), got ${N.length}`);
                      if (N.length > v.maxArgs)
                        throw new Error(`Expected at most ${v.maxArgs} ${_(v.maxArgs)} for ${o}(), got ${N.length}`);
                      return new Promise((B, b) => {
                        const U = h.bind(null, { resolve: B, reject: b });
                        N.push(U), R.sendMessage(...N);
                      });
                    },
                    E = {
                      runtime: {
                        onMessage: L(a),
                        onMessageExternal: L(a),
                        sendMessage: y.bind(null, "sendMessage", { minArgs: 1, maxArgs: 3 })
                      },
                      tabs: { sendMessage: y.bind(null, "sendMessage", { minArgs: 2, maxArgs: 3 }) }
                    },
                    P = { clear: { minArgs: 1, maxArgs: 1 }, get: { minArgs: 1, maxArgs: 1 }, set: { minArgs: 1, maxArgs: 1 } };
                  return (u.privacy = { network: { "*": P }, services: { "*": P }, websites: { "*": P } }), k(p, E, u);
                };
              if (typeof chrome != "object" || !chrome || !chrome.runtime || !chrome.runtime.id)
                throw new Error("This script should only be loaded in a browser extension.");
              m.exports = f(chrome);
            } else m.exports = browser;
          });
        }
      },
      oe = {};
    function Y(x) {
      var n = oe[x];
      if (n !== void 0) return n.exports;
      var d = (oe[x] = { exports: {} });
      return de[x].call(d.exports, d, d.exports, Y), d.exports;
    }
    (Y.n = (x) => {
      var n = x && x.__esModule ? () => x.default : () => x;
      return Y.d(n, { a: n }), n;
    }),
      (Y.d = (x, n) => {
        for (var d in n) Y.o(n, d) && !Y.o(x, d) && Object.defineProperty(x, d, { enumerable: !0, get: n[d] });
      }),
      (Y.o = (x, n) => Object.prototype.hasOwnProperty.call(x, n));
    var Be = {};
    (() => {
      "use strict";
      var x = Y(33102),
        n = Y(78747),
        d = Y.n(n);
      function w(s, C = "440px") {
        const f = document.createElement("ghostery-iframe-wrapper"),
          p = f.attachShadow({ mode: "closed" }),
          u = document.createElement("template");
        (u.innerHTML = `
    <iframe src="${s}" frameborder="0"></iframe>
    <style>
      :host {
        all: initial;
        display: flex !important;
        align-items: flex-end;
        position: fixed;
        top: 10px;
        right: 10px;
        left: 10px;
        bottom: 10px;
        z-index: 2147483647;
        pointer-events: none;
      }

      iframe {
        display: block;
        flex-grow: 1;
        width: min(100%, ${C});
        pointer-events: auto;
        box-shadow: 30px 60px 160px rgba(0, 0, 0, 0.4);
        border-radius: 16px;
        background: linear-gradient(90deg, rgba(0, 0, 0, 0.13) 0%, rgba(0, 0, 0, 0.27) 100%);
        opacity: 0;
        transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out;
        transform: translateY(20px);
      }

      iframe.active {
        opacity: 1;
        transform: translateY(0);
      }

      @media screen and (min-width: 640px) {
        :host {
          justify-content: flex-end;
          align-items: start;
        }

        iframe {
          flex-grow: 0;
          transform: translateY(-20px);
          max-width: ${C};
        }
      }
    </style>
  `),
          p.appendChild(u.content),
          document.documentElement.appendChild(f);
        const r = p.querySelector("iframe");
        setTimeout(() => {
          r.classList.add("active");
        }, 100),
          window.addEventListener("message", (c) => {
            var A;
            switch ((A = c.data) == null ? void 0 : A.type) {
              case "ghostery-resize-iframe": {
                const { height: _, width: S } = c.data;
                (r.style.height = _ + "px"), S && (r.style.width = S + "px");
                break;
              }
              case "ghostery-close-iframe":
                c.data.clear && chrome.runtime.sendMessage({ action: "clearIframe", url: s }),
                  c.data.reload ? window.location.reload() : setTimeout(() => f.parentElement.removeChild(f), 0);
                break;
              case "ghostery-clear-iframe":
                r.src === c.data.url && setTimeout(() => f.parentElement.removeChild(f), 0);
                break;
              default:
                break;
            }
          });
      }
      function g(s = !1, C = !1) {
        setTimeout(() => {
          window.parent.postMessage({ type: "ghostery-close-iframe", reload: s, clear: C }, "*");
        }, 100);
      }
      function m(s) {
        new ResizeObserver(() => {
          window.parent.postMessage({ type: "ghostery-resize-iframe", height: document.body.clientHeight, width: s }, "*");
        }).observe(document.body, { box: "border-box" }),
          (document.body.style.overflow = "hidden"),
          chrome.runtime.onMessage.addListener((f) => {
            f.action === "clearIframe" &&
              (console.log("clearIframe", f.url), window.parent.postMessage({ type: "ghostery-clear-iframe", url: f.url }, "*"));
          });
      }
      if (document.contentType === "text/html") {
        const s = new (d())((f) => chrome.runtime.sendMessage({ ...f, action: "autoconsent" }));
        let C = !1;
        chrome.runtime.onMessage.addListener((f) =>
          f.action === "autoconsent"
            ? f.type === "openIframe"
              ? (C ||
                  (w(
                    chrome.runtime.getURL(
                      `app/templates/autoconsent.html?host=${encodeURIComponent(f.domain)}&default=${f.defaultForAll ? "all" : ""}`
                    )
                  ),
                  (C = !0)),
                !1)
              : Promise.resolve(s.receiveMessageCallback(f))
            : !1
        );
      }
      chrome.runtime.onMessage.addListener((s) => {
        s.action === "renew:show" && w(chrome.runtime.getURL(`app/templates/renew.html?timestamp=${s.timestamp}`), "460px");
      });
    })();
  })();
