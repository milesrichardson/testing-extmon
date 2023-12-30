(() => {
  var e = {
      4846: (e) => {
        let o,
          s = chrome || window.chrome || browser || window.browser;
        navigator.userAgent.includes("Firefox/") && (s = browser || window.browser),
          navigator.userAgent.includes("Edge/") && (s = browser || window.browser);
        try {
          o = indexedDB || window.indexedDB;
        } catch (e) {
          (o = null), console.log(`Error initializing indexedDB: ${e.message}`);
        }
        e.exports = { chrome: s, indexedDB: o, performance: performance || window.performance, URL: URL || window.URL };
      }
    },
    o = {};
  function s(n) {
    var t = o[n];
    if (void 0 !== t) return t.exports;
    var r = (o[n] = { exports: {} });
    return e[n](r, r.exports, s), r.exports;
  }
  (s.p = "/"),
    chrome || browser || (window.chrome = chrome || window.chrome || window.browser),
    (s.p = (chrome || window.chrome).runtime.getURL("")),
    (() => {
      "use strict";
      Object.freeze({
        LicenseStateUnknown: 0,
        LicenseStateFree: 1,
        LicenseStateTrial: 2,
        LicenseStateTrialExpired: 3,
        LicenseStateLicensed: 4,
        LicenseStateLicenseExpired: 5,
        LicenseStateLicenseGrace: 6
      }),
        Object.freeze([2, 4, 6]);
      const e = "sendTelemetry",
        o = "enableNativeMessaging",
        n = "enableProtection",
        t = "MSG_SETTINGS_SET";
      var r = s(4846);
      const i = { reload: null },
        c = (e) =>
          new Promise((o, s) => {
            r.chrome.runtime.sendMessage({ type: "MSG_SETTINGS_GET", payload: e }, function (e) {
              !e || e.error
                ? (console.debug("SETTINGS GET ASYNC: ERROR CALLING settingsGet"),
                  s(`Error calling settingsGet: ${e ? e.error : "No response received"}`))
                : o(e.success);
            });
          }),
        a = (e) => {
          let o = $(e).parent();
          e.checked ? o.addClass("checked") : o.removeClass("checked"),
            !0 === $(e).prop("disabled") ? o.addClass("disabled") : o.removeClass("disabled");
        },
        d = async function (s, d, l, m) {
          l && $(l).addClass("active");
          let g = document.getElementById(s);
          if (!g) return;
          await (async function (s, t) {
            if (t !== n && t !== e && t !== o && s) {
              const e = await c(n);
              $(s).prop("disabled", !1 === e);
            }
          })(g, d);
          const u = await c(d);
          (g.checked = d !== o ? !1 !== u : u),
            a(g),
            l && $(l).removeClass("active"),
            await (async function (e, s, c) {
              e.addEventListener("change", async () => {
                let d = $(e).prop("disabled");
                console.debug("CB: Default state of " + e.id + " is " + (d ? "disabled" : "active")), $(e).prop("disabled", !0);
                let l = {};
                var m;
                (l[s] = $(e).prop("checked")),
                  a(e),
                  s === o &&
                    (l[s]
                      ? (l[s] = await new Promise((e) => {
                          r.chrome.permissions.request({ permissions: ["nativeMessaging"] }, (o) => {
                            console.log("MMPPNM: Permissions request resp: ", o), e(o);
                          });
                        }))
                      : (l[s] = await new Promise((e) => {
                          r.chrome.permissions.remove({ permissions: ["nativeMessaging"] }, (o) => {
                            o
                              ? (console.debug("MRNM: Successfully removed permissions"), e(!1))
                              : (console.log("MRNM: Did not remove permissions... ", o), e(!0));
                          });
                        }))),
                  s !== n &&
                    (await ((m = l),
                    new Promise((e, o) => {
                      r.chrome.runtime.sendMessage({ type: t, payload: m }, function (s) {
                        !s || s.error ? o(`Error calling settingsSet: ${s ? s.error : "No response received"}`) : e(s.success);
                      });
                    }))),
                  console.debug("CB: Setting has been stored for " + e.id),
                  c && c(),
                  setTimeout(() => {
                    console.debug("CB: Restoring " + e.id + " to " + (d ? "disabled" : "active")),
                      (function (e, o) {
                        $(e).prop("disabled", o), a(e);
                      })(e, d);
                  }, 750),
                  s !== n &&
                    (i.reload ||
                      ((i.reload = r.chrome.runtime.connect({ name: "RELOAD_ON_CLOSE_PORT" })),
                      console.debug("Began listening for a popup close event")));
              });
            })(g, d, m);
        };
      r.chrome.i18n.getUILanguage().split("-")[0];
      let l = {
        noEmailInit: () => {
          const e = document.getElementById("email-go");
          if (!e) return l.success({ user_welcomed: !0 });
          e.setAttribute("type", "button"), e.addEventListener("click", () => l.success({ user_welcomed: !0 }));
        },
        success: (e) => {
          r.chrome.storage.sync.set(e, () => {
            console.log("User sync complete - ", e);
          }),
            r.chrome.runtime.sendMessage({ type: t, payload: { enableProtection: !0 } }, (e) => {
              !e || e.error
                ? console.log("Error calling settingsSet: ", e ? e.error : "No response received")
                : console.log("Protection layers are enabled");
            }),
            console.debug("Redirecting to Dashboard"),
            window
              ? (console.debug("Redirection to dashboard!"), (window.location.href = "../app.html"))
              : console.log("Redirection failed - cant access window from this scope!"),
            r.chrome.runtime.sendMessage({ type: "MSG_ICONS_REFRESH" });
        }
      };
      document.addEventListener("DOMContentLoaded", () => {
        console.debug("Email screen ready."),
          $("#telem-opt-in-label").popup({ inline: !0, position: "top center" }),
          ((e, o = document) => {
            [
              { id: "welcome-header", msg: "welcomeTitle", sub: "" },
              { id: "tagline", msg: "tagline" },
              { id: "email-go", msg: "letsGoButton" },
              { id: "telem-opt-in-label-text", msg: "telemOptInLabel" },
              { id: "email-pp", msg: "privacyPolicyText" }
            ].forEach(({ id: e, msg: s, sub: n = null }) => {
              const t = o.getElementById(e);
              t && (t.textContent = r.chrome.i18n.getMessage(s, n));
            });
          })(),
          document.getElementById("telem-opt-in-label").setAttribute("data-content", r.chrome.i18n.getMessage("telemOptInTooltip")),
          d("telem-consent", e, "#telem-opt-in-label .loader"),
          r.chrome.runtime.sendMessage({ type: "MSG_USER_GROUP_GET" }, ({ success: e, error: o }) => {
            o ? console.error("Error checking user group: ", o) : (console.debug("Successfully checked user group: ", e), l.noEmailInit());
          }),
          r.chrome.windows.getCurrent((e) => {
            e.height < 600 && document.getElementById("malwarebytes-app").classList.add("small-screen");
          });
      });
    })();
})();
