!(function s(i, r, o) {
  function a(t, e) {
    if (!r[t]) {
      if (!i[t]) {
        var n = "function" == typeof require && require;
        if (!e && n) return n(t, !0);
        if (u) return u(t, !0);
        throw (((n = new Error("Cannot find module '" + t + "'")).code = "MODULE_NOT_FOUND"), n);
      }
      (n = r[t] = { exports: {} }),
        i[t][0].call(
          n.exports,
          function (e) {
            return a(i[t][1][e] || e);
          },
          n,
          n.exports,
          s,
          i,
          r,
          o
        );
    }
    return r[t].exports;
  }
  for (var u = "function" == typeof require && require, e = 0; e < o.length; e++) a(o[e]);
  return a;
})(
  {
    1: [
      function (t, e, n) {
        !function (e) {
          !function () {
            const o = t("./services/share_service"),
              a = t("./services/chrome_ext_service"),
              u = t("./util/constants"),
              h = "bitmoji_chrome_extension_container";
            (e.ChromeExtensionShow = function (r) {
              void 0 !== r.shareMode && o.setMode(r.shareMode);
              chrome.storage.local.get(null, function (e) {
                var t = e[u.STORAGE_LOGIN_TOKEN_TYPE] || null;
                let n = null;
                (n = t === u.LOGIN_TOKEN_TYPE_SNAPCHAT ? e[u.STORAGE_SNAPCHAT_ACCESS_TOKEN] || null : e[u.STORAGE_BSAUTH_TOKEN] || null),
                  chrome.runtime.sendMessage({ signal: u.GET_BITMOJI_INIT_DATA, accessToken: n, accessType: t }, (e) => {
                    ((e) => {
                      var { avatarData: t, packsData: n, experimentsData: s, clientmojiMetadata: e } = e;
                      const i = {};
                      (i.context = r.shareMode),
                        void 0 !== r.closableCallback && null !== r.closableCallback && (i.closableCallback = r.closableCallback),
                        !0 === r.enableLogout &&
                          (t.accessType === u.LOGIN_TOKEN_TYPE_BSAUTH
                            ? (i.logoutCallback = a.logoutBSAuthUser)
                            : t.accessType === u.LOGIN_TOKEN_TYPE_SNAPCHAT && (i.logoutCallback = a.logoutSnapchatUserWithRedirect)),
                        (i.experiments = s),
                        (i.clientmojiMetadata = e),
                        (i.appVersion = chrome.runtime.getManifest().version || 0),
                        ("GMAIL" != r.shareMode && "INBOX" != r.shareMode) || !r.element
                          ? document.getElementById(h) &&
                            BitmojiWebPicker.mountBitmojiWebPicker(h, t, n, i, function (e) {
                              o.share(e.src, e.shareMethod);
                            })
                          : BitmojiWebPicker.mountBitmojiWebPicker(r.element.id, t, n, i, function (e) {
                              o.share(e.src, e.shareMethod);
                            });
                    })(e);
                  });
              });
            }),
              (e.ChromeExtensionHide = function (e) {
                const t = $("#" + e);
                t.length && (BitmojiWebPicker.unmountBitmojiWebPicker(e), t.remove());
              });
          }.call(this);
        }.call(
          this,
          "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}
        );
      },
      { "./services/chrome_ext_service": 2, "./services/share_service": 3, "./util/constants": 5 }
    ],
    2: [
      function (e, t, n) {
        const o = e("../util/constants"),
          a = e("../util/config"),
          u = e("superagent"),
          s = e("moment");
        function h(e, t) {
          let n = null;
          return (
            t === o.LOGIN_TOKEN_TYPE_BSAUTH
              ? (n = { "bitmoji-token": e })
              : t === o.LOGIN_TOKEN_TYPE_SNAPCHAT && (n = { authorization: "Bearer " + e }),
            n
          );
        }
        function i(t) {
          return new Promise((n, s) => {
            var e = a.endpoints.BITMOJI_API + "user/monouser_web_login";
            u.post(e)
              .type("application/x-www-form-urlencoded")
              .set("authorization", "Bearer " + t)
              .end((e, t) => {
                e || !t.ok ? s(t) : n(t.body);
              });
          });
        }
        function r(t) {
          return new Promise((n, s) => {
            var e = a.endpoints.BITMOJI_API + "user/bitmoji-web/avatar";
            u.get(e)
              .type("application/x-www-form-urlencoded")
              .set("authorization", "Bearer " + t)
              .end((e, t) => {
                e || !t.ok ? s(t) : n(t.body);
              });
          });
        }
        function l(e) {
          let t = new Date();
          t = t.setSeconds(t.getSeconds() + e.expires_in);
          var n = t - o.ALARM_SNAPCHAT_REFRESH_TIME_OFFSET_MS;
          chrome.storage.local.set({
            [o.STORAGE_LOGIN_TOKEN_TYPE]: o.LOGIN_TOKEN_TYPE_SNAPCHAT,
            [o.STORAGE_SNAPCHAT_ACCESS_TOKEN]: e.access_token,
            [o.STORAGE_SNAPCHAT_REFRESH_TOKEN]: e.refresh_token,
            [o.STORAGE_SNAPCHAT_EXPIRES_IN]: n
          });
        }
        function c(e, t, n) {
          u.post(t)
            .type("application/x-www-form-urlencoded")
            .set("Authorization", "Basic " + e)
            .send({ token: n })
            .end((e, t) => {
              (!e && t.ok) || console.error(t);
            });
        }
        t.exports = {
          logoutBSAuthUser: function () {
            chrome.storage.local.get(o.STORAGE_BSAUTH_TOKEN, function (e) {
              var t = a.endpoints.BITMOJI_API + "user/logout",
                e = e[o.STORAGE_BSAUTH_TOKEN];
              e &&
                u
                  .post(t)
                  .type("application/x-www-form-urlencoded")
                  .set("bitmoji-token", e)
                  .end((e, t) => {
                    e || !t.ok
                      ? console.error(t)
                      : (chrome.storage.local.clear(), (t = "" + a.misc.BITMOJI_COM_URL), chrome.tabs.create({ url: t }));
                  });
            });
          },
          logoutSnapchatUserWithoutRedirect: function () {
            chrome.storage.local.get(o.STORAGE_SNAPCHAT_REFRESH_TOKEN, function (e) {
              var t = window.btoa(a.oauth.CHROME_EXT_CLIENT_ID + ":" + a.oauth.CHROME_EXT_CLIENT_SECRET),
                e = e[o.STORAGE_SNAPCHAT_REFRESH_TOKEN];
              c(t, a.oauth.SNAPCHAT_REVOKE_TOKEN_URL, e), chrome.storage.local.clear();
            });
          },
          logoutSnapchatUserWithRedirect: function () {
            chrome.storage.local.get(o.STORAGE_SNAPCHAT_REFRESH_TOKEN, function (e) {
              var t = "" + a.misc.BITMOJI_COM_URL,
                n = window.btoa(a.oauth.CHROME_EXT_CLIENT_ID + ":" + a.oauth.CHROME_EXT_CLIENT_SECRET),
                e = e[o.STORAGE_SNAPCHAT_REFRESH_TOKEN];
              c(n, a.oauth.SNAPCHAT_REVOKE_TOKEN_URL, e), chrome.tabs.create({ url: t }), chrome.storage.local.clear();
            });
          },
          getSnapchatAccessTokenForUser: function (t, i, r, o) {
            return new Promise((n, s) => {
              var e = window.btoa(i + ":" + r);
              u.post(a.oauth.SNAPCHAT_LOGIN_TOKEN_URL)
                .type("application/x-www-form-urlencoded")
                .set("Authorization", "Basic " + e)
                .send({
                  grant_type: "authorization_code",
                  code: t,
                  redirect_uri: a.oauth.SNAPCHAT_ACCOUNTS_REDIRECT_URI,
                  client_id: i,
                  code_verifier: o
                })
                .end((e, t) => {
                  e || !t.ok ? s(t) : n(t.body);
                });
            });
          },
          refreshSnapchatAccessTokenForUser: function (t, i, r) {
            return new Promise((n, s) => {
              var e = window.btoa(t + ":" + i);
              u.post(a.oauth.SNAPCHAT_LOGIN_TOKEN_URL)
                .type("application/x-www-form-urlencoded")
                .set("Authorization", "Basic " + e)
                .send({ grant_type: "refresh_token", refresh_token: r })
                .end((e, t) => {
                  e || !t.ok ? s(t) : n(t.body);
                });
            });
          },
          syncMonoUserAvatarDataWithSnapchatUser: i,
          processSnapchatAccessTokenOnLogin: function (t, n) {
            l(t),
              i(t.access_token)
                .then((e) => {
                  r(t.access_token)
                    .then((e) => {
                      chrome.storage.local.set({ [o.STORAGE_AVATAR_UUID]: e.avatar_version_uuid }),
                        n({ signal: "ChromeExtLoginSuccess", avatarData: e });
                    })
                    .catch((e) => {
                      chrome.storage.local.clear(), n({ signal: "ChromeExtLoginFailure" });
                    });
                })
                .catch((e) => {
                  chrome.storage.local.clear(), n({ signal: "ChromeExtLoginFailure" });
                });
          },
          processSnapchatAccessTokenOnRefresh: function (e, t) {
            l(e),
              r(e.access_token).then((e) => {
                chrome.storage.local.set({ [o.STORAGE_AVATAR_UUID]: e.avatar_version_uuid }), t({ signal: "successOnRefreshRequest" });
              });
          },
          getMonoUserAvatarData: r,
          getAvatarData: function (t, i) {
            const r = a.endpoints.BITMOJI_API + "user/bitmoji-web/avatar";
            return new Promise((n, s) => {
              var e;
              t
                ? ((e = h(t, i)),
                  u
                    .get(r)
                    .set(e)
                    .send({ app_id: o.BITMOJI_WEB_SDK_ANALYTICS_ID })
                    .end((e, t) => {
                      e || !t.ok ? s({ statusCode: t, message: "Unable to get avatar" }) : n(t.body);
                    }))
                : s({ message: "accessToken is null" });
            });
          },
          getPacksData: function () {
            const e = a.endpoints.BITMOJI_API + "bitmoji-web",
              t = s().format("YYYY-MM-DDTHH:mm:ssZ");
            return new Promise((n, s) => {
              u.get(e)
                .query({ time: t, useuuid: !0 })
                .end((e, t) => {
                  200 === t.statusCode || 304 === t.statusCode ? n(t.body) : s(t);
                });
            });
          },
          getExperiments: function (t, i) {
            const r = a.endpoints.BITMOJI_API + "experiments";
            return new Promise((n, s) => {
              var e;
              t
                ? ((e = h(t, i)),
                  u
                    .get(r)
                    .set(e)
                    .end((e, t) => {
                      200 === t.statusCode ? n(t.body) : s(t);
                    }))
                : s({ message: "accessToken is null" });
            });
          },
          getClientmojiMetadata: function (t, i) {
            const r = a.endpoints.BITMOJI_API + "clientmoji/metadata";
            return new Promise((n, s) => {
              var e;
              t
                ? ((e = h(t, i)),
                  u
                    .get(r)
                    .set(e)
                    .end((e, t) => {
                      200 === t.statusCode ? n(t.body) : s(t);
                    }))
                : s({ message: "accessToken is null" });
            });
          }
        };
      },
      { "../util/config": 4, "../util/constants": 5, moment: 7, superagent: 9 }
    ],
    3: [
      function (e, t, n) {
        let s = "DEFAULT",
          i = null;
        const r = "https://chrome.google.com/webstore/detail/bitmoji/bfgdeiadkckfbkeigkoncpdieiiefpig";
        function o(e) {
          if (!i) throw new Error("Unknown share target");
          var t = i.selectionStart;
          const n = i.value;
          i.value = n.substring(0, t) + e + n.substring(t);
        }
        t.exports = {
          setMode: function (e) {
            s = e;
          },
          setTarget: function (e) {
            i = e;
          },
          share: function (e, t) {
            if ("right_click" !== t) {
              const n = window.parent != window && window.parent;
              n ? (chrome.runtime.sendMessge, n.postMessage({ webPickerAction: "share", bitmojiSrc: e }, "*")) : this.defaultShare(e);
            }
          },
          handleShareMessage: function (e) {
            if (e)
              switch (s) {
                case "GMAIL":
                  this.gmailShare(e);
                  break;
                case "BITBUCKET":
                  this.bitbucketShare(e);
                  break;
                case "JIRA":
                case "CORP-JIRA":
                  this.jiraShare(e);
                  break;
                case "CORP-GITHUB":
                case "GITHUB":
                  this.githubShare(e);
                  break;
                default:
                  throw new Error("Unknown share mode: " + s);
              }
          },
          defaultShare: function (t) {
            document.addEventListener("copy", function (e) {
              e.clipboardData.setData("text/plain", t), e.preventDefault(), document.removeEventListener("copy", this);
            }),
              document.execCommand("copy");
          },
          gmailShare: function (n) {
            new Promise(function (e, t) {
              return e(r);
            }).then((e) => {
              const t = $('[aria-label="Message Body"]');
              e = $(`
                <a style="text-decoration:none" href="${e}">
                    <img src="${n}" style="width:100px;height:100px"/>
                </a>
            `);
              t.append(e);
            });
          },
          bitbucketShare: function (e) {
            o(`![bitmoji](${e}&width=246)`);
          },
          jiraShare: function (e) {
            o(`!${e}&width=246!`);
          },
          githubShare: function (e) {
            o(`![bitmoji](${e}&width=246)`);
          }
        };
      },
      {}
    ],
    4: [
      function (e, t, n) {
        t.exports = {
          endpoints: { BITMOJI_API: "https://api.bitmoji.com/", RENDERING_ENDPOINT: "https://sdk.bitmoji.com/" },
          oauth: {
            SNAPCHAT_LOGIN_TOKEN_URL: "https://accounts.snapchat.com/accounts/oauth2/token",
            SNAPCHAT_REVOKE_TOKEN_URL: "https://accounts.snapchat.com/accounts/oauth2/revoke",
            SNAPCHAT_ACCOUNTS_REDIRECT_URI: "https://www.bitmoji.com/account_v2/",
            CHROME_EXT_CLIENT_ID: "b8b2fb03-128e-459f-b2bf-71a0890d2413",
            CHROME_EXT_CLIENT_SECRET: "atqHYu1s_8XORC4eolr1B6433gKSHCs2LvxlTFo8vqk",
            CHROME_EXT_SCOPE: "https://auth.snapchat.com/oauth2/api/bitmoji.read"
          },
          misc: {
            BITMOJI_COM_URL: "https://www.bitmoji.com/account_v2/",
            BITMOJI_COM_DOMAIN: "www.bitmoji.com",
            ANON_FLOATER_PATH: "static/media/bitmoji-icon-48.png"
          }
        };
      },
      {}
    ],
    5: [
      function (e, t, n) {
        t.exports = {
          BITMOJI_BSAUTH_COOKIE: "bitmoji_bsauth_token",
          BITMOJI_LOGIN_TYPE_COOKIE: "bitmoji_login_token_type",
          STORAGE_AVATAR_ID: "bitmoji.avatarId",
          STORAGE_AVATAR_ID_HASH: "bitmoji.avatarIdHash",
          STORAGE_AVATAR_UUID: "bitmoji.avatarUUID",
          STORAGE_LOGIN_TOKEN_TYPE: "bitmoji.loginTokenType",
          STORAGE_BSAUTH_TOKEN: "bitmoji.bsauthToken",
          STORAGE_LAST_TAB: "bitmoji.lastTab",
          OAUTH2_STATE_BYTES: 32,
          OAUTH2_CODE_VERIFIER_BYTES: 32,
          LOGIN_TOKEN_TYPE_BSAUTH: "bsAuth",
          LOGIN_TOKEN_TYPE_SNAPCHAT: "snapAuth",
          STORAGE_SNAPCHAT_STATE: "snapchat.state",
          STORAGE_SNAPCHAT_CODE_VERIFIER: "snapchat.codeVerifier",
          STORAGE_SNAPCHAT_CODE_CHALLENGE: "snapchat.codeChallenge",
          STORAGE_SNAPCHAT_ACCESS_TOKEN: "snapchat.accessToken",
          STORAGE_SNAPCHAT_REFRESH_TOKEN: "snapchat.refreshToken",
          STORAGE_SNAPCHAT_EXPIRES_IN: "snapchat.expiresIn",
          STORAGE_CHROME_EXT_ACCESS_EXPIRY: "chromeExt.accessExpiry",
          ALARM_SNAPCHAT_REFRESH_TOKEN: "alarm_snapchat_refresh_token",
          ALARM_SNAPCHAT_REFRESH_TIME_OFFSET_MS: 6e5,
          GET_BITMOJI_INIT_DATA: "get_bitmoji_init_data",
          REFRESH_REQUEST_NO_CONNECTION: "errorNoConnection",
          BITMOJI_WEB_SDK_ANALYTICS_ID: 12
        };
      },
      {}
    ],
    6: [
      function (e, t, n) {
        function s(e) {
          if (e)
            return (function (e) {
              for (var t in s.prototype) e[t] = s.prototype[t];
              return e;
            })(e);
        }
        void 0 !== t && (t.exports = s),
          (s.prototype.on = s.prototype.addEventListener =
            function (e, t) {
              return (this._callbacks = this._callbacks || {}), (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t), this;
            }),
          (s.prototype.once = function (e, t) {
            function n() {
              this.off(e, n), t.apply(this, arguments);
            }
            return (n.fn = t), this.on(e, n), this;
          }),
          (s.prototype.off =
            s.prototype.removeListener =
            s.prototype.removeAllListeners =
            s.prototype.removeEventListener =
              function (e, t) {
                if (((this._callbacks = this._callbacks || {}), 0 == arguments.length)) return (this._callbacks = {}), this;
                var n,
                  s = this._callbacks["$" + e];
                if (!s) return this;
                if (1 == arguments.length) return delete this._callbacks["$" + e], this;
                for (var i = 0; i < s.length; i++)
                  if ((n = s[i]) === t || n.fn === t) {
                    s.splice(i, 1);
                    break;
                  }
                return 0 === s.length && delete this._callbacks["$" + e], this;
              }),
          (s.prototype.emit = function (e) {
            this._callbacks = this._callbacks || {};
            for (var t = new Array(arguments.length - 1), n = this._callbacks["$" + e], s = 1; s < arguments.length; s++)
              t[s - 1] = arguments[s];
            if (n) for (var s = 0, i = (n = n.slice(0)).length; s < i; ++s) n[s].apply(this, t);
            return this;
          }),
          (s.prototype.listeners = function (e) {
            return (this._callbacks = this._callbacks || {}), this._callbacks["$" + e] || [];
          }),
          (s.prototype.hasListeners = function (e) {
            return !!this.listeners(e).length;
          });
      },
      {}
    ],
    7: [
      function (An, xn, e) {
        var t, n;
        (t = this),
          (n = function () {
            "use strict";
            var e;
            function c() {
              return e.apply(null, arguments);
            }
            function o(e) {
              return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e);
            }
            function a(e) {
              return null != e && "[object Object]" === Object.prototype.toString.call(e);
            }
            function d(e, t) {
              return Object.prototype.hasOwnProperty.call(e, t);
            }
            function u(e) {
              if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(e).length;
              for (var t in e) if (d(e, t)) return;
              return 1;
            }
            function r(e) {
              return void 0 === e;
            }
            function h(e) {
              return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e);
            }
            function s(e) {
              return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e);
            }
            function i(e, t) {
              for (var n = [], s = 0; s < e.length; ++s) n.push(t(e[s], s));
              return n;
            }
            function l(e, t) {
              for (var n in t) d(t, n) && (e[n] = t[n]);
              return d(t, "toString") && (e.toString = t.toString), d(t, "valueOf") && (e.valueOf = t.valueOf), e;
            }
            function f(e, t, n, s) {
              return Yt(e, t, n, s, !0).utc();
            }
            function _(e) {
              return (
                null == e._pf &&
                  (e._pf = {
                    empty: !1,
                    unusedTokens: [],
                    unusedInput: [],
                    overflow: -2,
                    charsLeftOver: 0,
                    nullInput: !1,
                    invalidEra: null,
                    invalidMonth: null,
                    invalidFormat: !1,
                    userInvalidated: !1,
                    iso: !1,
                    parsedDateParts: [],
                    era: null,
                    meridiem: null,
                    rfc2822: !1,
                    weekdayMismatch: !1
                  }),
                e._pf
              );
            }
            function m(e) {
              if (null == e._isValid) {
                var t = _(e),
                  n = y.call(t.parsedDateParts, function (e) {
                    return null != e;
                  }),
                  n =
                    !isNaN(e._d.getTime()) &&
                    t.overflow < 0 &&
                    !t.empty &&
                    !t.invalidEra &&
                    !t.invalidMonth &&
                    !t.invalidWeekday &&
                    !t.weekdayMismatch &&
                    !t.nullInput &&
                    !t.invalidFormat &&
                    !t.userInvalidated &&
                    (!t.meridiem || (t.meridiem && n));
                if (
                  (e._strict && (n = n && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour),
                  null != Object.isFrozen && Object.isFrozen(e))
                )
                  return n;
                e._isValid = n;
              }
              return e._isValid;
            }
            function p(e) {
              var t = f(NaN);
              return null != e ? l(_(t), e) : (_(t).userInvalidated = !0), t;
            }
            var y =
                Array.prototype.some ||
                function (e) {
                  for (var t = Object(this), n = t.length >>> 0, s = 0; s < n; s++) if (s in t && e.call(this, t[s], s, t)) return !0;
                  return !1;
                },
              g = (c.momentProperties = []),
              t = !1;
            function w(e, t) {
              var n, s, i;
              if (
                (r(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject),
                r(t._i) || (e._i = t._i),
                r(t._f) || (e._f = t._f),
                r(t._l) || (e._l = t._l),
                r(t._strict) || (e._strict = t._strict),
                r(t._tzm) || (e._tzm = t._tzm),
                r(t._isUTC) || (e._isUTC = t._isUTC),
                r(t._offset) || (e._offset = t._offset),
                r(t._pf) || (e._pf = _(t)),
                r(t._locale) || (e._locale = t._locale),
                0 < g.length)
              )
                for (n = 0; n < g.length; n++) r((i = t[(s = g[n])])) || (e[s] = i);
              return e;
            }
            function T(e) {
              w(this, e),
                (this._d = new Date(null != e._d ? e._d.getTime() : NaN)),
                this.isValid() || (this._d = new Date(NaN)),
                !1 === t && ((t = !0), c.updateOffset(this), (t = !1));
            }
            function S(e) {
              return e instanceof T || (null != e && null != e._isAMomentObject);
            }
            function v(e) {
              !1 === c.suppressDeprecationWarnings &&
                "undefined" != typeof console &&
                console.warn &&
                console.warn("Deprecation warning: " + e);
            }
            function n(i, r) {
              var o = !0;
              return l(function () {
                if ((null != c.deprecationHandler && c.deprecationHandler(null, i), o)) {
                  for (var e, t, n = [], s = 0; s < arguments.length; s++) {
                    if (((e = ""), "object" == typeof arguments[s])) {
                      for (t in ((e += "\n[" + s + "] "), arguments[0])) d(arguments[0], t) && (e += t + ": " + arguments[0][t] + ", ");
                      e = e.slice(0, -2);
                    } else e = arguments[s];
                    n.push(e);
                  }
                  v(i + "\nArguments: " + Array.prototype.slice.call(n).join("") + "\n" + new Error().stack), (o = !1);
                }
                return r.apply(this, arguments);
              }, r);
            }
            var k = {};
            function b(e, t) {
              null != c.deprecationHandler && c.deprecationHandler(e, t), k[e] || (v(t), (k[e] = !0));
            }
            function O(e) {
              return ("undefined" != typeof Function && e instanceof Function) || "[object Function]" === Object.prototype.toString.call(e);
            }
            function M(e, t) {
              var n,
                s = l({}, e);
              for (n in t)
                d(t, n) && (a(e[n]) && a(t[n]) ? ((s[n] = {}), l(s[n], e[n]), l(s[n], t[n])) : null != t[n] ? (s[n] = t[n]) : delete s[n]);
              for (n in e) d(e, n) && !d(t, n) && a(e[n]) && (s[n] = l({}, s[n]));
              return s;
            }
            function D(e) {
              null != e && this.set(e);
            }
            (c.suppressDeprecationWarnings = !1), (c.deprecationHandler = null);
            var E =
              Object.keys ||
              function (e) {
                var t,
                  n = [];
                for (t in e) d(e, t) && n.push(t);
                return n;
              };
            function Y(e, t, n) {
              var s = "" + Math.abs(e);
              return (
                (0 <= e ? (n ? "+" : "") : "-") +
                Math.pow(10, Math.max(0, t - s.length))
                  .toString()
                  .substr(1) +
                s
              );
            }
            var N =
                /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
              A = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
              x = {},
              R = {};
            function C(e, t, n, s) {
              var i =
                "string" == typeof s
                  ? function () {
                      return this[s]();
                    }
                  : s;
              e && (R[e] = i),
                t &&
                  (R[t[0]] = function () {
                    return Y(i.apply(this, arguments), t[1], t[2]);
                  }),
                n &&
                  (R[n] = function () {
                    return this.localeData().ordinal(i.apply(this, arguments), e);
                  });
            }
            function P(e, t) {
              return e.isValid()
                ? ((t = I(t, e.localeData())),
                  (x[t] =
                    x[t] ||
                    (function (s) {
                      for (var e, i = s.match(N), t = 0, r = i.length; t < r; t++)
                        R[i[t]]
                          ? (i[t] = R[i[t]])
                          : (i[t] = (e = i[t]).match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, ""));
                      return function (e) {
                        for (var t = "", n = 0; n < r; n++) t += O(i[n]) ? i[n].call(e, s) : i[n];
                        return t;
                      };
                    })(t)),
                  x[t](e))
                : e.localeData().invalidDate();
            }
            function I(e, t) {
              var n = 5;
              function s(e) {
                return t.longDateFormat(e) || e;
              }
              for (A.lastIndex = 0; 0 <= n && A.test(e); ) (e = e.replace(A, s)), (A.lastIndex = 0), --n;
              return e;
            }
            var H = {};
            function U(e, t) {
              var n = e.toLowerCase();
              H[n] = H[n + "s"] = H[t] = e;
            }
            function L(e) {
              return "string" == typeof e ? H[e] || H[e.toLowerCase()] : void 0;
            }
            function G(e) {
              var t,
                n,
                s = {};
              for (n in e) d(e, n) && (t = L(n)) && (s[t] = e[n]);
              return s;
            }
            var W = {};
            function j(e, t) {
              W[e] = t;
            }
            function F(e) {
              return (e % 4 == 0 && e % 100 != 0) || e % 400 == 0;
            }
            function V(e) {
              return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
            }
            function B(e) {
              var t = +e,
                e = 0;
              return (e = 0 != t && isFinite(t) ? V(t) : e);
            }
            function q(t, n) {
              return function (e) {
                return null != e ? (K(this, t, e), c.updateOffset(this, n), this) : z(this, t);
              };
            }
            function z(e, t) {
              return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN;
            }
            function K(e, t, n) {
              e.isValid() &&
                !isNaN(n) &&
                ("FullYear" === t && F(e.year()) && 1 === e.month() && 29 === e.date()
                  ? ((n = B(n)), e._d["set" + (e._isUTC ? "UTC" : "") + t](n, e.month(), Ee(n, e.month())))
                  : e._d["set" + (e._isUTC ? "UTC" : "") + t](n));
            }
            var J = /\d/,
              Z = /\d\d/,
              $ = /\d{3}/,
              X = /\d{4}/,
              Q = /[+-]?\d{6}/,
              ee = /\d\d?/,
              te = /\d\d\d\d?/,
              ne = /\d\d\d\d\d\d?/,
              se = /\d{1,3}/,
              ie = /\d{1,4}/,
              re = /[+-]?\d{1,6}/,
              oe = /\d+/,
              ae = /[+-]?\d+/,
              ue = /Z|[+-]\d\d:?\d\d/gi,
              he = /Z|[+-]\d\d(?::?\d\d)?/gi,
              le =
                /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;
            function ce(e, n, s) {
              _e[e] = O(n)
                ? n
                : function (e, t) {
                    return e && s ? s : n;
                  };
            }
            function de(e, t) {
              return d(_e, e)
                ? _e[e](t._strict, t._locale)
                : new RegExp(
                    fe(
                      e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (e, t, n, s, i) {
                        return t || n || s || i;
                      })
                    )
                  );
            }
            function fe(e) {
              return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
            }
            var _e = {},
              me = {};
            function pe(e, n) {
              var t,
                s = n;
              for (
                "string" == typeof e && (e = [e]),
                  h(n) &&
                    (s = function (e, t) {
                      t[n] = B(e);
                    }),
                  t = 0;
                t < e.length;
                t++
              )
                me[e[t]] = s;
            }
            function ye(e, i) {
              pe(e, function (e, t, n, s) {
                (n._w = n._w || {}), i(e, n._w, n, s);
              });
            }
            var ge,
              we = 0,
              Te = 1,
              Se = 2,
              ve = 3,
              ke = 4,
              be = 5,
              Oe = 6,
              Me = 7,
              De = 8;
            function Ee(e, t) {
              if (isNaN(e) || isNaN(t)) return NaN;
              var n = ((t % (n = 12)) + n) % n;
              return (e += (t - n) / 12), 1 == n ? (F(e) ? 29 : 28) : 31 - ((n % 7) % 2);
            }
            (ge =
              Array.prototype.indexOf ||
              function (e) {
                for (var t = 0; t < this.length; ++t) if (this[t] === e) return t;
                return -1;
              }),
              C("M", ["MM", 2], "Mo", function () {
                return this.month() + 1;
              }),
              C("MMM", 0, 0, function (e) {
                return this.localeData().monthsShort(this, e);
              }),
              C("MMMM", 0, 0, function (e) {
                return this.localeData().months(this, e);
              }),
              U("month", "M"),
              j("month", 8),
              ce("M", ee),
              ce("MM", ee, Z),
              ce("MMM", function (e, t) {
                return t.monthsShortRegex(e);
              }),
              ce("MMMM", function (e, t) {
                return t.monthsRegex(e);
              }),
              pe(["M", "MM"], function (e, t) {
                t[Te] = B(e) - 1;
              }),
              pe(["MMM", "MMMM"], function (e, t, n, s) {
                s = n._locale.monthsParse(e, s, n._strict);
                null != s ? (t[Te] = s) : (_(n).invalidMonth = e);
              });
            var Ye = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
              Ne = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
              Ae = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
              xe = le,
              Re = le;
            function Ce(e, t) {
              var n;
              if (!e.isValid()) return e;
              if ("string" == typeof t)
                if (/^\d+$/.test(t)) t = B(t);
                else if (!h((t = e.localeData().monthsParse(t)))) return e;
              return (n = Math.min(e.date(), Ee(e.year(), t))), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e;
            }
            function Pe(e) {
              return null != e ? (Ce(this, e), c.updateOffset(this, !0), this) : z(this, "Month");
            }
            function Ie() {
              function e(e, t) {
                return t.length - e.length;
              }
              for (var t, n = [], s = [], i = [], r = 0; r < 12; r++)
                (t = f([2e3, r])),
                  n.push(this.monthsShort(t, "")),
                  s.push(this.months(t, "")),
                  i.push(this.months(t, "")),
                  i.push(this.monthsShort(t, ""));
              for (n.sort(e), s.sort(e), i.sort(e), r = 0; r < 12; r++) (n[r] = fe(n[r])), (s[r] = fe(s[r]));
              for (r = 0; r < 24; r++) i[r] = fe(i[r]);
              (this._monthsRegex = new RegExp("^(" + i.join("|") + ")", "i")),
                (this._monthsShortRegex = this._monthsRegex),
                (this._monthsStrictRegex = new RegExp("^(" + s.join("|") + ")", "i")),
                (this._monthsShortStrictRegex = new RegExp("^(" + n.join("|") + ")", "i"));
            }
            function He(e) {
              return F(e) ? 366 : 365;
            }
            C("Y", 0, 0, function () {
              var e = this.year();
              return e <= 9999 ? Y(e, 4) : "+" + e;
            }),
              C(0, ["YY", 2], 0, function () {
                return this.year() % 100;
              }),
              C(0, ["YYYY", 4], 0, "year"),
              C(0, ["YYYYY", 5], 0, "year"),
              C(0, ["YYYYYY", 6, !0], 0, "year"),
              U("year", "y"),
              j("year", 1),
              ce("Y", ae),
              ce("YY", ee, Z),
              ce("YYYY", ie, X),
              ce("YYYYY", re, Q),
              ce("YYYYYY", re, Q),
              pe(["YYYYY", "YYYYYY"], we),
              pe("YYYY", function (e, t) {
                t[we] = 2 === e.length ? c.parseTwoDigitYear(e) : B(e);
              }),
              pe("YY", function (e, t) {
                t[we] = c.parseTwoDigitYear(e);
              }),
              pe("Y", function (e, t) {
                t[we] = parseInt(e, 10);
              }),
              (c.parseTwoDigitYear = function (e) {
                return B(e) + (68 < B(e) ? 1900 : 2e3);
              });
            var Ue = q("FullYear", !0);
            function Le(e, t, n, s, i, r, o) {
              var a;
              return (
                e < 100 && 0 <= e
                  ? ((a = new Date(e + 400, t, n, s, i, r, o)), isFinite(a.getFullYear()) && a.setFullYear(e))
                  : (a = new Date(e, t, n, s, i, r, o)),
                a
              );
            }
            function Ge(e) {
              var t;
              return (
                e < 100 && 0 <= e
                  ? (((t = Array.prototype.slice.call(arguments))[0] = e + 400),
                    (t = new Date(Date.UTC.apply(null, t))),
                    isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e))
                  : (t = new Date(Date.UTC.apply(null, arguments))),
                t
              );
            }
            function We(e, t, n) {
              n = 7 + t - n;
              return n - ((7 + Ge(e, 0, n).getUTCDay() - t) % 7) - 1;
            }
            function je(e, t, n, s, i) {
              var r,
                i = 1 + 7 * (t - 1) + ((7 + n - s) % 7) + We(e, s, i),
                i = i <= 0 ? He((r = e - 1)) + i : i > He(e) ? ((r = e + 1), i - He(e)) : ((r = e), i);
              return { year: r, dayOfYear: i };
            }
            function Fe(e, t, n) {
              var s,
                i,
                r = We(e.year(), t, n),
                r = Math.floor((e.dayOfYear() - r - 1) / 7) + 1;
              return (
                r < 1
                  ? (s = r + Ve((i = e.year() - 1), t, n))
                  : r > Ve(e.year(), t, n)
                  ? ((s = r - Ve(e.year(), t, n)), (i = e.year() + 1))
                  : ((i = e.year()), (s = r)),
                { week: s, year: i }
              );
            }
            function Ve(e, t, n) {
              var s = We(e, t, n),
                n = We(e + 1, t, n);
              return (He(e) - s + n) / 7;
            }
            C("w", ["ww", 2], "wo", "week"),
              C("W", ["WW", 2], "Wo", "isoWeek"),
              U("week", "w"),
              U("isoWeek", "W"),
              j("week", 5),
              j("isoWeek", 5),
              ce("w", ee),
              ce("ww", ee, Z),
              ce("W", ee),
              ce("WW", ee, Z),
              ye(["w", "ww", "W", "WW"], function (e, t, n, s) {
                t[s.substr(0, 1)] = B(e);
              });
            function Be(e, t) {
              return e.slice(t, 7).concat(e.slice(0, t));
            }
            C("d", 0, "do", "day"),
              C("dd", 0, 0, function (e) {
                return this.localeData().weekdaysMin(this, e);
              }),
              C("ddd", 0, 0, function (e) {
                return this.localeData().weekdaysShort(this, e);
              }),
              C("dddd", 0, 0, function (e) {
                return this.localeData().weekdays(this, e);
              }),
              C("e", 0, 0, "weekday"),
              C("E", 0, 0, "isoWeekday"),
              U("day", "d"),
              U("weekday", "e"),
              U("isoWeekday", "E"),
              j("day", 11),
              j("weekday", 11),
              j("isoWeekday", 11),
              ce("d", ee),
              ce("e", ee),
              ce("E", ee),
              ce("dd", function (e, t) {
                return t.weekdaysMinRegex(e);
              }),
              ce("ddd", function (e, t) {
                return t.weekdaysShortRegex(e);
              }),
              ce("dddd", function (e, t) {
                return t.weekdaysRegex(e);
              }),
              ye(["dd", "ddd", "dddd"], function (e, t, n, s) {
                s = n._locale.weekdaysParse(e, s, n._strict);
                null != s ? (t.d = s) : (_(n).invalidWeekday = e);
              }),
              ye(["d", "e", "E"], function (e, t, n, s) {
                t[s] = B(e);
              });
            var qe = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
              ze = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
              Ke = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
              Je = le,
              Ze = le,
              $e = le;
            function Xe() {
              function e(e, t) {
                return t.length - e.length;
              }
              for (var t, n, s, i = [], r = [], o = [], a = [], u = 0; u < 7; u++)
                (s = f([2e3, 1]).day(u)),
                  (t = fe(this.weekdaysMin(s, ""))),
                  (n = fe(this.weekdaysShort(s, ""))),
                  (s = fe(this.weekdays(s, ""))),
                  i.push(t),
                  r.push(n),
                  o.push(s),
                  a.push(t),
                  a.push(n),
                  a.push(s);
              i.sort(e),
                r.sort(e),
                o.sort(e),
                a.sort(e),
                (this._weekdaysRegex = new RegExp("^(" + a.join("|") + ")", "i")),
                (this._weekdaysShortRegex = this._weekdaysRegex),
                (this._weekdaysMinRegex = this._weekdaysRegex),
                (this._weekdaysStrictRegex = new RegExp("^(" + o.join("|") + ")", "i")),
                (this._weekdaysShortStrictRegex = new RegExp("^(" + r.join("|") + ")", "i")),
                (this._weekdaysMinStrictRegex = new RegExp("^(" + i.join("|") + ")", "i"));
            }
            function Qe() {
              return this.hours() % 12 || 12;
            }
            function et(e, t) {
              C(e, 0, 0, function () {
                return this.localeData().meridiem(this.hours(), this.minutes(), t);
              });
            }
            function tt(e, t) {
              return t._meridiemParse;
            }
            C("H", ["HH", 2], 0, "hour"),
              C("h", ["hh", 2], 0, Qe),
              C("k", ["kk", 2], 0, function () {
                return this.hours() || 24;
              }),
              C("hmm", 0, 0, function () {
                return "" + Qe.apply(this) + Y(this.minutes(), 2);
              }),
              C("hmmss", 0, 0, function () {
                return "" + Qe.apply(this) + Y(this.minutes(), 2) + Y(this.seconds(), 2);
              }),
              C("Hmm", 0, 0, function () {
                return "" + this.hours() + Y(this.minutes(), 2);
              }),
              C("Hmmss", 0, 0, function () {
                return "" + this.hours() + Y(this.minutes(), 2) + Y(this.seconds(), 2);
              }),
              et("a", !0),
              et("A", !1),
              U("hour", "h"),
              j("hour", 13),
              ce("a", tt),
              ce("A", tt),
              ce("H", ee),
              ce("h", ee),
              ce("k", ee),
              ce("HH", ee, Z),
              ce("hh", ee, Z),
              ce("kk", ee, Z),
              ce("hmm", te),
              ce("hmmss", ne),
              ce("Hmm", te),
              ce("Hmmss", ne),
              pe(["H", "HH"], ve),
              pe(["k", "kk"], function (e, t, n) {
                e = B(e);
                t[ve] = 24 === e ? 0 : e;
              }),
              pe(["a", "A"], function (e, t, n) {
                (n._isPm = n._locale.isPM(e)), (n._meridiem = e);
              }),
              pe(["h", "hh"], function (e, t, n) {
                (t[ve] = B(e)), (_(n).bigHour = !0);
              }),
              pe("hmm", function (e, t, n) {
                var s = e.length - 2;
                (t[ve] = B(e.substr(0, s))), (t[ke] = B(e.substr(s))), (_(n).bigHour = !0);
              }),
              pe("hmmss", function (e, t, n) {
                var s = e.length - 4,
                  i = e.length - 2;
                (t[ve] = B(e.substr(0, s))), (t[ke] = B(e.substr(s, 2))), (t[be] = B(e.substr(i))), (_(n).bigHour = !0);
              }),
              pe("Hmm", function (e, t, n) {
                var s = e.length - 2;
                (t[ve] = B(e.substr(0, s))), (t[ke] = B(e.substr(s)));
              }),
              pe("Hmmss", function (e, t, n) {
                var s = e.length - 4,
                  i = e.length - 2;
                (t[ve] = B(e.substr(0, s))), (t[ke] = B(e.substr(s, 2))), (t[be] = B(e.substr(i)));
              });
            var nt = q("Hours", !0);
            var st,
              it = {
                calendar: {
                  sameDay: "[Today at] LT",
                  nextDay: "[Tomorrow at] LT",
                  nextWeek: "dddd [at] LT",
                  lastDay: "[Yesterday at] LT",
                  lastWeek: "[Last] dddd [at] LT",
                  sameElse: "L"
                },
                longDateFormat: {
                  LTS: "h:mm:ss A",
                  LT: "h:mm A",
                  L: "MM/DD/YYYY",
                  LL: "MMMM D, YYYY",
                  LLL: "MMMM D, YYYY h:mm A",
                  LLLL: "dddd, MMMM D, YYYY h:mm A"
                },
                invalidDate: "Invalid date",
                ordinal: "%d",
                dayOfMonthOrdinalParse: /\d{1,2}/,
                relativeTime: {
                  future: "in %s",
                  past: "%s ago",
                  s: "a few seconds",
                  ss: "%d seconds",
                  m: "a minute",
                  mm: "%d minutes",
                  h: "an hour",
                  hh: "%d hours",
                  d: "a day",
                  dd: "%d days",
                  w: "a week",
                  ww: "%d weeks",
                  M: "a month",
                  MM: "%d months",
                  y: "a year",
                  yy: "%d years"
                },
                months: Ye,
                monthsShort: Ne,
                week: { dow: 0, doy: 6 },
                weekdays: qe,
                weekdaysMin: Ke,
                weekdaysShort: ze,
                meridiemParse: /[ap]\.?m?\.?/i
              },
              rt = {},
              ot = {};
            function at(e) {
              return e && e.toLowerCase().replace("_", "-");
            }
            function ut(e) {
              for (var t, n, s, i, r = 0; r < e.length; ) {
                for (t = (i = at(e[r]).split("-")).length, n = (n = at(e[r + 1])) ? n.split("-") : null; 0 < t; ) {
                  if ((s = ht(i.slice(0, t).join("-")))) return s;
                  if (
                    n &&
                    n.length >= t &&
                    (function (e, t) {
                      for (var n = Math.min(e.length, t.length), s = 0; s < n; s += 1) if (e[s] !== t[s]) return s;
                      return n;
                    })(i, n) >=
                      t - 1
                  )
                    break;
                  t--;
                }
                r++;
              }
              return st;
            }
            function ht(t) {
              var e;
              if (void 0 === rt[t] && void 0 !== xn && xn && xn.exports)
                try {
                  (e = st._abbr), An("./locale/" + t), lt(e);
                } catch (e) {
                  rt[t] = null;
                }
              return rt[t];
            }
            function lt(e, t) {
              return (
                e &&
                  ((t = r(t) ? dt(e) : ct(e, t))
                    ? (st = t)
                    : "undefined" != typeof console &&
                      console.warn &&
                      console.warn("Locale " + e + " not found. Did you forget to load it?")),
                st._abbr
              );
            }
            function ct(e, t) {
              if (null === t) return delete rt[e], null;
              var n,
                s = it;
              if (((t.abbr = e), null != rt[e]))
                b(
                  "defineLocaleOverride",
                  "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
                ),
                  (s = rt[e]._config);
              else if (null != t.parentLocale)
                if (null != rt[t.parentLocale]) s = rt[t.parentLocale]._config;
                else {
                  if (null == (n = ht(t.parentLocale)))
                    return ot[t.parentLocale] || (ot[t.parentLocale] = []), ot[t.parentLocale].push({ name: e, config: t }), null;
                  s = n._config;
                }
              return (
                (rt[e] = new D(M(s, t))),
                ot[e] &&
                  ot[e].forEach(function (e) {
                    ct(e.name, e.config);
                  }),
                lt(e),
                rt[e]
              );
            }
            function dt(e) {
              var t;
              if (!(e = e && e._locale && e._locale._abbr ? e._locale._abbr : e)) return st;
              if (!o(e)) {
                if ((t = ht(e))) return t;
                e = [e];
              }
              return ut(e);
            }
            function ft(e) {
              var t = e._a;
              return (
                t &&
                  -2 === _(e).overflow &&
                  ((t =
                    t[Te] < 0 || 11 < t[Te]
                      ? Te
                      : t[Se] < 1 || t[Se] > Ee(t[we], t[Te])
                      ? Se
                      : t[ve] < 0 || 24 < t[ve] || (24 === t[ve] && (0 !== t[ke] || 0 !== t[be] || 0 !== t[Oe]))
                      ? ve
                      : t[ke] < 0 || 59 < t[ke]
                      ? ke
                      : t[be] < 0 || 59 < t[be]
                      ? be
                      : t[Oe] < 0 || 999 < t[Oe]
                      ? Oe
                      : -1),
                  _(e)._overflowDayOfYear && (t < we || Se < t) && (t = Se),
                  _(e)._overflowWeeks && -1 === t && (t = Me),
                  _(e)._overflowWeekday && -1 === t && (t = De),
                  (_(e).overflow = t)),
                e
              );
            }
            var _t =
                /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
              mt =
                /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
              pt = /Z|[+-]\d\d(?::?\d\d)?/,
              yt = [
                ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
                ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
                ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
                ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
                ["YYYY-DDD", /\d{4}-\d{3}/],
                ["YYYY-MM", /\d{4}-\d\d/, !1],
                ["YYYYYYMMDD", /[+-]\d{10}/],
                ["YYYYMMDD", /\d{8}/],
                ["GGGG[W]WWE", /\d{4}W\d{3}/],
                ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
                ["YYYYDDD", /\d{7}/],
                ["YYYYMM", /\d{6}/, !1],
                ["YYYY", /\d{4}/, !1]
              ],
              gt = [
                ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
                ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
                ["HH:mm:ss", /\d\d:\d\d:\d\d/],
                ["HH:mm", /\d\d:\d\d/],
                ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
                ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
                ["HHmmss", /\d\d\d\d\d\d/],
                ["HHmm", /\d\d\d\d/],
                ["HH", /\d\d/]
              ],
              wt = /^\/?Date\((-?\d+)/i,
              Tt =
                /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
              St = { UT: 0, GMT: 0, EDT: -240, EST: -300, CDT: -300, CST: -360, MDT: -360, MST: -420, PDT: -420, PST: -480 };
            function vt(e) {
              var t,
                n,
                s,
                i,
                r,
                o,
                a = e._i,
                u = _t.exec(a) || mt.exec(a);
              if (u) {
                for (_(e).iso = !0, t = 0, n = yt.length; t < n; t++)
                  if (yt[t][1].exec(u[1])) {
                    (i = yt[t][0]), (s = !1 !== yt[t][2]);
                    break;
                  }
                if (null != i) {
                  if (u[3]) {
                    for (t = 0, n = gt.length; t < n; t++)
                      if (gt[t][1].exec(u[3])) {
                        r = (u[2] || " ") + gt[t][0];
                        break;
                      }
                    if (null == r) return void (e._isValid = !1);
                  }
                  if (s || null == r) {
                    if (u[4]) {
                      if (!pt.exec(u[4])) return void (e._isValid = !1);
                      o = "Z";
                    }
                    (e._f = i + (r || "") + (o || "")), Dt(e);
                  } else e._isValid = !1;
                } else e._isValid = !1;
              } else e._isValid = !1;
            }
            function kt(e, t, n, s, i, r) {
              i = [
                (function (e) {
                  e = parseInt(e, 10);
                  {
                    if (e <= 49) return 2e3 + e;
                    if (e <= 999) return 1900 + e;
                  }
                  return e;
                })(e),
                Ne.indexOf(t),
                parseInt(n, 10),
                parseInt(s, 10),
                parseInt(i, 10)
              ];
              return r && i.push(parseInt(r, 10)), i;
            }
            function bt(e) {
              var t,
                n,
                s,
                i,
                r = Tt.exec(
                  e._i
                    .replace(/\([^)]*\)|[\n\t]/g, " ")
                    .replace(/(\s\s+)/g, " ")
                    .replace(/^\s\s*/, "")
                    .replace(/\s\s*$/, "")
                );
              r
                ? ((t = kt(r[4], r[3], r[2], r[5], r[6], r[7])),
                  (n = r[1]),
                  (s = t),
                  (i = e),
                  n && ze.indexOf(n) !== new Date(s[0], s[1], s[2]).getDay()
                    ? ((_(i).weekdayMismatch = !0), (i._isValid = !1))
                    : ((e._a = t),
                      (e._tzm =
                        ((i = r[8]),
                        (t = r[9]),
                        (r = r[10]),
                        i ? St[i] : t ? 0 : 60 * (((t = parseInt(r, 10)) - (r = t % 100)) / 100) + r)),
                      (e._d = Ge.apply(null, e._a)),
                      e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
                      (_(e).rfc2822 = !0)))
                : (e._isValid = !1);
            }
            function Ot(e, t, n) {
              return null != e ? e : null != t ? t : n;
            }
            function Mt(e) {
              var t,
                n,
                s,
                i,
                r,
                o = [];
              if (!e._d) {
                for (
                  i = e,
                    r = new Date(c.now()),
                    n = i._useUTC ? [r.getUTCFullYear(), r.getUTCMonth(), r.getUTCDate()] : [r.getFullYear(), r.getMonth(), r.getDate()],
                    e._w &&
                      null == e._a[Se] &&
                      null == e._a[Te] &&
                      (function (e) {
                        var t, n, s, i, r, o, a, u;
                        null != (t = e._w).GG || null != t.W || null != t.E
                          ? ((r = 1),
                            (o = 4),
                            (n = Ot(t.GG, e._a[we], Fe(Nt(), 1, 4).year)),
                            (s = Ot(t.W, 1)),
                            ((i = Ot(t.E, 1)) < 1 || 7 < i) && (a = !0))
                          : ((r = e._locale._week.dow),
                            (o = e._locale._week.doy),
                            (u = Fe(Nt(), r, o)),
                            (n = Ot(t.gg, e._a[we], u.year)),
                            (s = Ot(t.w, u.week)),
                            null != t.d
                              ? ((i = t.d) < 0 || 6 < i) && (a = !0)
                              : null != t.e
                              ? ((i = t.e + r), (t.e < 0 || 6 < t.e) && (a = !0))
                              : (i = r));
                        s < 1 || s > Ve(n, r, o)
                          ? (_(e)._overflowWeeks = !0)
                          : null != a
                          ? (_(e)._overflowWeekday = !0)
                          : ((o = je(n, s, i, r, o)), (e._a[we] = o.year), (e._dayOfYear = o.dayOfYear));
                      })(e),
                    null != e._dayOfYear &&
                      ((s = Ot(e._a[we], n[we])),
                      (e._dayOfYear > He(s) || 0 === e._dayOfYear) && (_(e)._overflowDayOfYear = !0),
                      (s = Ge(s, 0, e._dayOfYear)),
                      (e._a[Te] = s.getUTCMonth()),
                      (e._a[Se] = s.getUTCDate())),
                    t = 0;
                  t < 3 && null == e._a[t];
                  ++t
                )
                  e._a[t] = o[t] = n[t];
                for (; t < 7; t++) e._a[t] = o[t] = null == e._a[t] ? (2 === t ? 1 : 0) : e._a[t];
                24 === e._a[ve] && 0 === e._a[ke] && 0 === e._a[be] && 0 === e._a[Oe] && ((e._nextDay = !0), (e._a[ve] = 0)),
                  (e._d = (e._useUTC ? Ge : Le).apply(null, o)),
                  (s = e._useUTC ? e._d.getUTCDay() : e._d.getDay()),
                  null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
                  e._nextDay && (e._a[ve] = 24),
                  e._w && void 0 !== e._w.d && e._w.d !== s && (_(e).weekdayMismatch = !0);
              }
            }
            function Dt(e) {
              if (e._f !== c.ISO_8601)
                if (e._f !== c.RFC_2822) {
                  (e._a = []), (_(e).empty = !0);
                  for (
                    var t, n, s, i, r, o = "" + e._i, a = o.length, u = 0, h = I(e._f, e._locale).match(N) || [], l = 0;
                    l < h.length;
                    l++
                  )
                    (n = h[l]),
                      (t = (o.match(de(n, e)) || [])[0]) &&
                        (0 < (i = o.substr(0, o.indexOf(t))).length && _(e).unusedInput.push(i),
                        (o = o.slice(o.indexOf(t) + t.length)),
                        (u += t.length)),
                      R[n]
                        ? (t ? (_(e).empty = !1) : _(e).unusedTokens.push(n),
                          (s = n),
                          (r = e),
                          null != (i = t) && d(me, s) && me[s](i, r._a, r, s))
                        : e._strict && !t && _(e).unusedTokens.push(n);
                  (_(e).charsLeftOver = a - u),
                    0 < o.length && _(e).unusedInput.push(o),
                    e._a[ve] <= 12 && !0 === _(e).bigHour && 0 < e._a[ve] && (_(e).bigHour = void 0),
                    (_(e).parsedDateParts = e._a.slice(0)),
                    (_(e).meridiem = e._meridiem),
                    (e._a[ve] = (function (e, t, n) {
                      if (null == n) return t;
                      return null != e.meridiemHour
                        ? e.meridiemHour(t, n)
                        : null != e.isPM
                        ? ((n = e.isPM(n)) && t < 12 && (t += 12), (t = n || 12 !== t ? t : 0))
                        : t;
                    })(e._locale, e._a[ve], e._meridiem)),
                    null !== (a = _(e).era) && (e._a[we] = e._locale.erasConvertYear(a, e._a[we])),
                    Mt(e),
                    ft(e);
                } else bt(e);
              else vt(e);
            }
            function Et(e) {
              var t = e._i,
                n = e._f;
              return (
                (e._locale = e._locale || dt(e._l)),
                null === t || (void 0 === n && "" === t)
                  ? p({ nullInput: !0 })
                  : ("string" == typeof t && (e._i = t = e._locale.preparse(t)),
                    S(t)
                      ? new T(ft(t))
                      : (s(t)
                          ? (e._d = t)
                          : o(n)
                          ? (function (e) {
                              var t,
                                n,
                                s,
                                i,
                                r,
                                o,
                                a = !1;
                              if (0 === e._f.length) return (_(e).invalidFormat = !0), (e._d = new Date(NaN));
                              for (i = 0; i < e._f.length; i++)
                                (r = 0),
                                  (o = !1),
                                  (t = w({}, e)),
                                  null != e._useUTC && (t._useUTC = e._useUTC),
                                  (t._f = e._f[i]),
                                  Dt(t),
                                  m(t) && (o = !0),
                                  (r += _(t).charsLeftOver),
                                  (r += 10 * _(t).unusedTokens.length),
                                  (_(t).score = r),
                                  a ? r < s && ((s = r), (n = t)) : (null == s || r < s || o) && ((s = r), (n = t), o && (a = !0));
                              l(e, n || t);
                            })(e)
                          : n
                          ? Dt(e)
                          : r((n = (t = e)._i))
                          ? (t._d = new Date(c.now()))
                          : s(n)
                          ? (t._d = new Date(n.valueOf()))
                          : "string" == typeof n
                          ? (function (e) {
                              var t = wt.exec(e._i);
                              null === t
                                ? (vt(e),
                                  !1 === e._isValid &&
                                    (delete e._isValid,
                                    bt(e),
                                    !1 === e._isValid && (delete e._isValid, e._strict ? (e._isValid = !1) : c.createFromInputFallback(e))))
                                : (e._d = new Date(+t[1]));
                            })(t)
                          : o(n)
                          ? ((t._a = i(n.slice(0), function (e) {
                              return parseInt(e, 10);
                            })),
                            Mt(t))
                          : a(n)
                          ? (function (e) {
                              var t, n;
                              e._d ||
                                ((n = void 0 === (t = G(e._i)).day ? t.date : t.day),
                                (e._a = i([t.year, t.month, n, t.hour, t.minute, t.second, t.millisecond], function (e) {
                                  return e && parseInt(e, 10);
                                })),
                                Mt(e));
                            })(t)
                          : h(n)
                          ? (t._d = new Date(n))
                          : c.createFromInputFallback(t),
                        m(e) || (e._d = null),
                        e))
              );
            }
            function Yt(e, t, n, s, i) {
              var r = {};
              return (
                (!0 !== t && !1 !== t) || ((s = t), (t = void 0)),
                (!0 !== n && !1 !== n) || ((s = n), (n = void 0)),
                ((a(e) && u(e)) || (o(e) && 0 === e.length)) && (e = void 0),
                (r._isAMomentObject = !0),
                (r._useUTC = r._isUTC = i),
                (r._l = n),
                (r._i = e),
                (r._f = t),
                (r._strict = s),
                (r = new T(ft(Et((r = r)))))._nextDay && (r.add(1, "d"), (r._nextDay = void 0)),
                r
              );
            }
            function Nt(e, t, n, s) {
              return Yt(e, t, n, s, !1);
            }
            (c.createFromInputFallback = n(
              "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
              function (e) {
                e._d = new Date(e._i + (e._useUTC ? " UTC" : ""));
              }
            )),
              (c.ISO_8601 = function () {}),
              (c.RFC_2822 = function () {});
            var At = n("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
                var e = Nt.apply(null, arguments);
                return this.isValid() && e.isValid() ? (e < this ? this : e) : p();
              }),
              xt = n("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
                var e = Nt.apply(null, arguments);
                return this.isValid() && e.isValid() ? (this < e ? this : e) : p();
              });
            function Rt(e, t) {
              var n, s;
              if (!(t = 1 === t.length && o(t[0]) ? t[0] : t).length) return Nt();
              for (n = t[0], s = 1; s < t.length; ++s) (t[s].isValid() && !t[s][e](n)) || (n = t[s]);
              return n;
            }
            var Ct = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];
            function Pt(e) {
              var t = G(e),
                n = t.year || 0,
                s = t.quarter || 0,
                i = t.month || 0,
                r = t.week || t.isoWeek || 0,
                o = t.day || 0,
                a = t.hour || 0,
                u = t.minute || 0,
                h = t.second || 0,
                e = t.millisecond || 0;
              (this._isValid = (function (e) {
                var t,
                  n,
                  s = !1;
                for (t in e) if (d(e, t) && (-1 === ge.call(Ct, t) || (null != e[t] && isNaN(e[t])))) return !1;
                for (n = 0; n < Ct.length; ++n)
                  if (e[Ct[n]]) {
                    if (s) return !1;
                    parseFloat(e[Ct[n]]) !== B(e[Ct[n]]) && (s = !0);
                  }
                return !0;
              })(t)),
                (this._milliseconds = +e + 1e3 * h + 6e4 * u + 1e3 * a * 60 * 60),
                (this._days = +o + 7 * r),
                (this._months = +i + 3 * s + 12 * n),
                (this._data = {}),
                (this._locale = dt()),
                this._bubble();
            }
            function It(e) {
              return e instanceof Pt;
            }
            function Ht(e) {
              return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e);
            }
            function Ut(e, n) {
              C(e, 0, 0, function () {
                var e = this.utcOffset(),
                  t = "+";
                return e < 0 && ((e = -e), (t = "-")), t + Y(~~(e / 60), 2) + n + Y(~~e % 60, 2);
              });
            }
            Ut("Z", ":"),
              Ut("ZZ", ""),
              ce("Z", he),
              ce("ZZ", he),
              pe(["Z", "ZZ"], function (e, t, n) {
                (n._useUTC = !0), (n._tzm = Gt(he, e));
              });
            var Lt = /([\+\-]|\d\d)/gi;
            function Gt(e, t) {
              var t = (t || "").match(e);
              return null === t
                ? null
                : 0 === (t = 60 * (e = ((t[t.length - 1] || []) + "").match(Lt) || ["-", 0, 0])[1] + B(e[2]))
                ? 0
                : "+" === e[0]
                ? t
                : -t;
            }
            function Wt(e, t) {
              var n;
              return t._isUTC
                ? ((n = t.clone()),
                  (t = (S(e) || s(e) ? e : Nt(e)).valueOf() - n.valueOf()),
                  n._d.setTime(n._d.valueOf() + t),
                  c.updateOffset(n, !1),
                  n)
                : Nt(e).local();
            }
            function jt(e) {
              return -Math.round(e._d.getTimezoneOffset());
            }
            function Ft() {
              return !!this.isValid() && this._isUTC && 0 === this._offset;
            }
            c.updateOffset = function () {};
            var Vt = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
              Bt =
                /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
            function qt(e, t) {
              var n,
                s = e,
                i = null;
              return (
                It(e)
                  ? (s = { ms: e._milliseconds, d: e._days, M: e._months })
                  : h(e) || !isNaN(+e)
                  ? ((s = {}), t ? (s[t] = +e) : (s.milliseconds = +e))
                  : (i = Vt.exec(e))
                  ? ((n = "-" === i[1] ? -1 : 1),
                    (s = { y: 0, d: B(i[Se]) * n, h: B(i[ve]) * n, m: B(i[ke]) * n, s: B(i[be]) * n, ms: B(Ht(1e3 * i[Oe])) * n }))
                  : (i = Bt.exec(e))
                  ? ((n = "-" === i[1] ? -1 : 1),
                    (s = {
                      y: zt(i[2], n),
                      M: zt(i[3], n),
                      w: zt(i[4], n),
                      d: zt(i[5], n),
                      h: zt(i[6], n),
                      m: zt(i[7], n),
                      s: zt(i[8], n)
                    }))
                  : null == s
                  ? (s = {})
                  : "object" == typeof s &&
                    ("from" in s || "to" in s) &&
                    ((n = (function (e, t) {
                      var n;
                      if (!e.isValid() || !t.isValid()) return { milliseconds: 0, months: 0 };
                      (t = Wt(t, e)),
                        e.isBefore(t) ? (n = Kt(e, t)) : (((n = Kt(t, e)).milliseconds = -n.milliseconds), (n.months = -n.months));
                      return n;
                    })(Nt(s.from), Nt(s.to))),
                    ((s = {}).ms = n.milliseconds),
                    (s.M = n.months)),
                (s = new Pt(s)),
                It(e) && d(e, "_locale") && (s._locale = e._locale),
                It(e) && d(e, "_isValid") && (s._isValid = e._isValid),
                s
              );
            }
            function zt(e, t) {
              e = e && parseFloat(e.replace(",", "."));
              return (isNaN(e) ? 0 : e) * t;
            }
            function Kt(e, t) {
              var n = {};
              return (
                (n.months = t.month() - e.month() + 12 * (t.year() - e.year())),
                e.clone().add(n.months, "M").isAfter(t) && --n.months,
                (n.milliseconds = +t - +e.clone().add(n.months, "M")),
                n
              );
            }
            function Jt(s, i) {
              return function (e, t) {
                var n;
                return (
                  null === t ||
                    isNaN(+t) ||
                    (b(
                      i,
                      "moment()." +
                        i +
                        "(period, number) is deprecated. Please use moment()." +
                        i +
                        "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
                    ),
                    (n = e),
                    (e = t),
                    (t = n)),
                  Zt(this, qt(e, t), s),
                  this
                );
              };
            }
            function Zt(e, t, n, s) {
              var i = t._milliseconds,
                r = Ht(t._days),
                t = Ht(t._months);
              e.isValid() &&
                ((s = null == s || s),
                t && Ce(e, z(e, "Month") + t * n),
                r && K(e, "Date", z(e, "Date") + r * n),
                i && e._d.setTime(e._d.valueOf() + i * n),
                s && c.updateOffset(e, r || t));
            }
            (qt.fn = Pt.prototype),
              (qt.invalid = function () {
                return qt(NaN);
              });
            var $t = Jt(1, "add"),
              le = Jt(-1, "subtract");
            function Xt(e) {
              return "string" == typeof e || e instanceof String;
            }
            function Qt(e) {
              return (
                S(e) ||
                s(e) ||
                Xt(e) ||
                h(e) ||
                (function (t) {
                  var e = o(t),
                    n = !1;
                  e &&
                    (n =
                      0 ===
                      t.filter(function (e) {
                        return !h(e) && Xt(t);
                      }).length);
                  return e && n;
                })(e) ||
                (function (e) {
                  var t,
                    n,
                    s = a(e) && !u(e),
                    i = !1,
                    r = [
                      "years",
                      "year",
                      "y",
                      "months",
                      "month",
                      "M",
                      "days",
                      "day",
                      "d",
                      "dates",
                      "date",
                      "D",
                      "hours",
                      "hour",
                      "h",
                      "minutes",
                      "minute",
                      "m",
                      "seconds",
                      "second",
                      "s",
                      "milliseconds",
                      "millisecond",
                      "ms"
                    ];
                  for (t = 0; t < r.length; t += 1) (n = r[t]), (i = i || d(e, n));
                  return s && i;
                })(e) ||
                null == e
              );
            }
            function en(e, t) {
              if (e.date() < t.date()) return -en(t, e);
              var n = 12 * (t.year() - e.year()) + (t.month() - e.month()),
                s = e.clone().add(n, "months"),
                s = t - s < 0 ? (t - s) / (s - e.clone().add(n - 1, "months")) : (t - s) / (e.clone().add(1 + n, "months") - s);
              return -(n + s) || 0;
            }
            function tn(e) {
              return void 0 === e ? this._locale._abbr : (null != (e = dt(e)) && (this._locale = e), this);
            }
            (c.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ"), (c.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]");
            te = n(
              "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
              function (e) {
                return void 0 === e ? this.localeData() : this.locale(e);
              }
            );
            function nn() {
              return this._locale;
            }
            var sn = 126227808e5;
            function rn(e, t) {
              return ((e % t) + t) % t;
            }
            function on(e, t, n) {
              return e < 100 && 0 <= e ? new Date(e + 400, t, n) - sn : new Date(e, t, n).valueOf();
            }
            function an(e, t, n) {
              return e < 100 && 0 <= e ? Date.UTC(e + 400, t, n) - sn : Date.UTC(e, t, n);
            }
            function un(e, t) {
              return t.erasAbbrRegex(e);
            }
            function hn() {
              for (var e = [], t = [], n = [], s = [], i = this.eras(), r = 0, o = i.length; r < o; ++r)
                t.push(fe(i[r].name)),
                  e.push(fe(i[r].abbr)),
                  n.push(fe(i[r].narrow)),
                  s.push(fe(i[r].name)),
                  s.push(fe(i[r].abbr)),
                  s.push(fe(i[r].narrow));
              (this._erasRegex = new RegExp("^(" + s.join("|") + ")", "i")),
                (this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i")),
                (this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i")),
                (this._erasNarrowRegex = new RegExp("^(" + n.join("|") + ")", "i"));
            }
            function ln(e, t) {
              C(0, [e, e.length], 0, t);
            }
            function cn(e, t, n, s, i) {
              var r;
              return null == e
                ? Fe(this, s, i).year
                : ((r = Ve(e, s, i)),
                  function (e, t, n, s, i) {
                    (i = je(e, t, n, s, i)), (i = Ge(i.year, 0, i.dayOfYear));
                    return this.year(i.getUTCFullYear()), this.month(i.getUTCMonth()), this.date(i.getUTCDate()), this;
                  }.call(this, e, (t = r < t ? r : t), n, s, i));
            }
            C("N", 0, 0, "eraAbbr"),
              C("NN", 0, 0, "eraAbbr"),
              C("NNN", 0, 0, "eraAbbr"),
              C("NNNN", 0, 0, "eraName"),
              C("NNNNN", 0, 0, "eraNarrow"),
              C("y", ["y", 1], "yo", "eraYear"),
              C("y", ["yy", 2], 0, "eraYear"),
              C("y", ["yyy", 3], 0, "eraYear"),
              C("y", ["yyyy", 4], 0, "eraYear"),
              ce("N", un),
              ce("NN", un),
              ce("NNN", un),
              ce("NNNN", function (e, t) {
                return t.erasNameRegex(e);
              }),
              ce("NNNNN", function (e, t) {
                return t.erasNarrowRegex(e);
              }),
              pe(["N", "NN", "NNN", "NNNN", "NNNNN"], function (e, t, n, s) {
                s = n._locale.erasParse(e, s, n._strict);
                s ? (_(n).era = s) : (_(n).invalidEra = e);
              }),
              ce("y", oe),
              ce("yy", oe),
              ce("yyy", oe),
              ce("yyyy", oe),
              ce("yo", function (e, t) {
                return t._eraYearOrdinalRegex || oe;
              }),
              pe(["y", "yy", "yyy", "yyyy"], we),
              pe(["yo"], function (e, t, n, s) {
                var i;
                n._locale._eraYearOrdinalRegex && (i = e.match(n._locale._eraYearOrdinalRegex)),
                  n._locale.eraYearOrdinalParse ? (t[we] = n._locale.eraYearOrdinalParse(e, i)) : (t[we] = parseInt(e, 10));
              }),
              C(0, ["gg", 2], 0, function () {
                return this.weekYear() % 100;
              }),
              C(0, ["GG", 2], 0, function () {
                return this.isoWeekYear() % 100;
              }),
              ln("gggg", "weekYear"),
              ln("ggggg", "weekYear"),
              ln("GGGG", "isoWeekYear"),
              ln("GGGGG", "isoWeekYear"),
              U("weekYear", "gg"),
              U("isoWeekYear", "GG"),
              j("weekYear", 1),
              j("isoWeekYear", 1),
              ce("G", ae),
              ce("g", ae),
              ce("GG", ee, Z),
              ce("gg", ee, Z),
              ce("GGGG", ie, X),
              ce("gggg", ie, X),
              ce("GGGGG", re, Q),
              ce("ggggg", re, Q),
              ye(["gggg", "ggggg", "GGGG", "GGGGG"], function (e, t, n, s) {
                t[s.substr(0, 2)] = B(e);
              }),
              ye(["gg", "GG"], function (e, t, n, s) {
                t[s] = c.parseTwoDigitYear(e);
              }),
              C("Q", 0, "Qo", "quarter"),
              U("quarter", "Q"),
              j("quarter", 7),
              ce("Q", J),
              pe("Q", function (e, t) {
                t[Te] = 3 * (B(e) - 1);
              }),
              C("D", ["DD", 2], "Do", "date"),
              U("date", "D"),
              j("date", 9),
              ce("D", ee),
              ce("DD", ee, Z),
              ce("Do", function (e, t) {
                return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
              }),
              pe(["D", "DD"], Se),
              pe("Do", function (e, t) {
                t[Se] = B(e.match(ee)[0]);
              });
            ne = q("Date", !0);
            C("DDD", ["DDDD", 3], "DDDo", "dayOfYear"),
              U("dayOfYear", "DDD"),
              j("dayOfYear", 4),
              ce("DDD", se),
              ce("DDDD", $),
              pe(["DDD", "DDDD"], function (e, t, n) {
                n._dayOfYear = B(e);
              }),
              C("m", ["mm", 2], 0, "minute"),
              U("minute", "m"),
              j("minute", 14),
              ce("m", ee),
              ce("mm", ee, Z),
              pe(["m", "mm"], ke);
            Ye = q("Minutes", !1);
            C("s", ["ss", 2], 0, "second"), U("second", "s"), j("second", 15), ce("s", ee), ce("ss", ee, Z), pe(["s", "ss"], be);
            var dn,
              qe = q("Seconds", !1);
            for (
              C("S", 0, 0, function () {
                return ~~(this.millisecond() / 100);
              }),
                C(0, ["SS", 2], 0, function () {
                  return ~~(this.millisecond() / 10);
                }),
                C(0, ["SSS", 3], 0, "millisecond"),
                C(0, ["SSSS", 4], 0, function () {
                  return 10 * this.millisecond();
                }),
                C(0, ["SSSSS", 5], 0, function () {
                  return 100 * this.millisecond();
                }),
                C(0, ["SSSSSS", 6], 0, function () {
                  return 1e3 * this.millisecond();
                }),
                C(0, ["SSSSSSS", 7], 0, function () {
                  return 1e4 * this.millisecond();
                }),
                C(0, ["SSSSSSSS", 8], 0, function () {
                  return 1e5 * this.millisecond();
                }),
                C(0, ["SSSSSSSSS", 9], 0, function () {
                  return 1e6 * this.millisecond();
                }),
                U("millisecond", "ms"),
                j("millisecond", 16),
                ce("S", se, J),
                ce("SS", se, Z),
                ce("SSS", se, $),
                dn = "SSSS";
              dn.length <= 9;
              dn += "S"
            )
              ce(dn, oe);
            function fn(e, t) {
              t[Oe] = B(1e3 * ("0." + e));
            }
            for (dn = "S"; dn.length <= 9; dn += "S") pe(dn, fn);
            (Ke = q("Milliseconds", !1)), C("z", 0, 0, "zoneAbbr"), C("zz", 0, 0, "zoneName");
            ie = T.prototype;
            function _n(e) {
              return e;
            }
            (ie.add = $t),
              (ie.calendar = function (e, t) {
                1 === arguments.length &&
                  (arguments[0]
                    ? Qt(arguments[0])
                      ? ((e = arguments[0]), (t = void 0))
                      : (function (e) {
                          for (
                            var t = a(e) && !u(e), n = !1, s = ["sameDay", "nextDay", "lastDay", "nextWeek", "lastWeek", "sameElse"], i = 0;
                            i < s.length;
                            i += 1
                          )
                            n = n || d(e, s[i]);
                          return t && n;
                        })(arguments[0]) && ((t = arguments[0]), (e = void 0))
                    : (t = e = void 0));
                var n = e || Nt(),
                  e = Wt(n, this).startOf("day"),
                  e = c.calendarFormat(this, e) || "sameElse",
                  t = t && (O(t[e]) ? t[e].call(this, n) : t[e]);
                return this.format(t || this.localeData().calendar(e, this, Nt(n)));
              }),
              (ie.clone = function () {
                return new T(this);
              }),
              (ie.diff = function (e, t, n) {
                var s, i, r;
                if (!this.isValid()) return NaN;
                if (!(s = Wt(e, this)).isValid()) return NaN;
                switch (((i = 6e4 * (s.utcOffset() - this.utcOffset())), (t = L(t)))) {
                  case "year":
                    r = en(this, s) / 12;
                    break;
                  case "month":
                    r = en(this, s);
                    break;
                  case "quarter":
                    r = en(this, s) / 3;
                    break;
                  case "second":
                    r = (this - s) / 1e3;
                    break;
                  case "minute":
                    r = (this - s) / 6e4;
                    break;
                  case "hour":
                    r = (this - s) / 36e5;
                    break;
                  case "day":
                    r = (this - s - i) / 864e5;
                    break;
                  case "week":
                    r = (this - s - i) / 6048e5;
                    break;
                  default:
                    r = this - s;
                }
                return n ? r : V(r);
              }),
              (ie.endOf = function (e) {
                var t, n;
                if (void 0 === (e = L(e)) || "millisecond" === e || !this.isValid()) return this;
                switch (((n = this._isUTC ? an : on), e)) {
                  case "year":
                    t = n(this.year() + 1, 0, 1) - 1;
                    break;
                  case "quarter":
                    t = n(this.year(), this.month() - (this.month() % 3) + 3, 1) - 1;
                    break;
                  case "month":
                    t = n(this.year(), this.month() + 1, 1) - 1;
                    break;
                  case "week":
                    t = n(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
                    break;
                  case "isoWeek":
                    t = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
                    break;
                  case "day":
                  case "date":
                    t = n(this.year(), this.month(), this.date() + 1) - 1;
                    break;
                  case "hour":
                    (t = this._d.valueOf()), (t += 36e5 - rn(t + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5) - 1);
                    break;
                  case "minute":
                    (t = this._d.valueOf()), (t += 6e4 - rn(t, 6e4) - 1);
                    break;
                  case "second":
                    (t = this._d.valueOf()), (t += 1e3 - rn(t, 1e3) - 1);
                }
                return this._d.setTime(t), c.updateOffset(this, !0), this;
              }),
              (ie.format = function (e) {
                return (e = e || (this.isUtc() ? c.defaultFormatUtc : c.defaultFormat)), (e = P(this, e)), this.localeData().postformat(e);
              }),
              (ie.from = function (e, t) {
                return this.isValid() && ((S(e) && e.isValid()) || Nt(e).isValid())
                  ? qt({ to: this, from: e }).locale(this.locale()).humanize(!t)
                  : this.localeData().invalidDate();
              }),
              (ie.fromNow = function (e) {
                return this.from(Nt(), e);
              }),
              (ie.to = function (e, t) {
                return this.isValid() && ((S(e) && e.isValid()) || Nt(e).isValid())
                  ? qt({ from: this, to: e }).locale(this.locale()).humanize(!t)
                  : this.localeData().invalidDate();
              }),
              (ie.toNow = function (e) {
                return this.to(Nt(), e);
              }),
              (ie.get = function (e) {
                return O(this[(e = L(e))]) ? this[e]() : this;
              }),
              (ie.invalidAt = function () {
                return _(this).overflow;
              }),
              (ie.isAfter = function (e, t) {
                return (
                  (e = S(e) ? e : Nt(e)),
                  !(!this.isValid() || !e.isValid()) &&
                    ("millisecond" === (t = L(t) || "millisecond")
                      ? this.valueOf() > e.valueOf()
                      : e.valueOf() < this.clone().startOf(t).valueOf())
                );
              }),
              (ie.isBefore = function (e, t) {
                return (
                  (e = S(e) ? e : Nt(e)),
                  !(!this.isValid() || !e.isValid()) &&
                    ("millisecond" === (t = L(t) || "millisecond")
                      ? this.valueOf() < e.valueOf()
                      : this.clone().endOf(t).valueOf() < e.valueOf())
                );
              }),
              (ie.isBetween = function (e, t, n, s) {
                return (
                  (e = S(e) ? e : Nt(e)),
                  (t = S(t) ? t : Nt(t)),
                  !!(this.isValid() && e.isValid() && t.isValid()) &&
                    ("(" === (s = s || "()")[0] ? this.isAfter(e, n) : !this.isBefore(e, n)) &&
                    (")" === s[1] ? this.isBefore(t, n) : !this.isAfter(t, n))
                );
              }),
              (ie.isSame = function (e, t) {
                var e = S(e) ? e : Nt(e);
                return (
                  !(!this.isValid() || !e.isValid()) &&
                  ("millisecond" === (t = L(t) || "millisecond")
                    ? this.valueOf() === e.valueOf()
                    : ((e = e.valueOf()), this.clone().startOf(t).valueOf() <= e && e <= this.clone().endOf(t).valueOf()))
                );
              }),
              (ie.isSameOrAfter = function (e, t) {
                return this.isSame(e, t) || this.isAfter(e, t);
              }),
              (ie.isSameOrBefore = function (e, t) {
                return this.isSame(e, t) || this.isBefore(e, t);
              }),
              (ie.isValid = function () {
                return m(this);
              }),
              (ie.lang = te),
              (ie.locale = tn),
              (ie.localeData = nn),
              (ie.max = xt),
              (ie.min = At),
              (ie.parsingFlags = function () {
                return l({}, _(this));
              }),
              (ie.set = function (e, t) {
                if ("object" == typeof e)
                  for (
                    var n = (function (e) {
                        var t,
                          n = [];
                        for (t in e) d(e, t) && n.push({ unit: t, priority: W[t] });
                        return (
                          n.sort(function (e, t) {
                            return e.priority - t.priority;
                          }),
                          n
                        );
                      })((e = G(e))),
                      s = 0;
                    s < n.length;
                    s++
                  )
                    this[n[s].unit](e[n[s].unit]);
                else if (O(this[(e = L(e))])) return this[e](t);
                return this;
              }),
              (ie.startOf = function (e) {
                var t, n;
                if (void 0 === (e = L(e)) || "millisecond" === e || !this.isValid()) return this;
                switch (((n = this._isUTC ? an : on), e)) {
                  case "year":
                    t = n(this.year(), 0, 1);
                    break;
                  case "quarter":
                    t = n(this.year(), this.month() - (this.month() % 3), 1);
                    break;
                  case "month":
                    t = n(this.year(), this.month(), 1);
                    break;
                  case "week":
                    t = n(this.year(), this.month(), this.date() - this.weekday());
                    break;
                  case "isoWeek":
                    t = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
                    break;
                  case "day":
                  case "date":
                    t = n(this.year(), this.month(), this.date());
                    break;
                  case "hour":
                    (t = this._d.valueOf()), (t -= rn(t + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5));
                    break;
                  case "minute":
                    (t = this._d.valueOf()), (t -= rn(t, 6e4));
                    break;
                  case "second":
                    (t = this._d.valueOf()), (t -= rn(t, 1e3));
                }
                return this._d.setTime(t), c.updateOffset(this, !0), this;
              }),
              (ie.subtract = le),
              (ie.toArray = function () {
                var e = this;
                return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()];
              }),
              (ie.toObject = function () {
                var e = this;
                return {
                  years: e.year(),
                  months: e.month(),
                  date: e.date(),
                  hours: e.hours(),
                  minutes: e.minutes(),
                  seconds: e.seconds(),
                  milliseconds: e.milliseconds()
                };
              }),
              (ie.toDate = function () {
                return new Date(this.valueOf());
              }),
              (ie.toISOString = function (e) {
                if (!this.isValid()) return null;
                var t = !0 !== e;
                return (e = t ? this.clone().utc() : this).year() < 0 || 9999 < e.year()
                  ? P(e, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ")
                  : O(Date.prototype.toISOString)
                  ? t
                    ? this.toDate().toISOString()
                    : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", P(e, "Z"))
                  : P(e, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ");
              }),
              (ie.inspect = function () {
                if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
                var e,
                  t = "moment",
                  n = "";
                return (
                  this.isLocal() || ((t = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone"), (n = "Z")),
                  (e = "[" + t + '("]'),
                  (t = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY"),
                  this.format(e + t + "-MM-DD[T]HH:mm:ss.SSS" + (n + '[")]'))
                );
              }),
              "undefined" != typeof Symbol &&
                null != Symbol.for &&
                (ie[Symbol.for("nodejs.util.inspect.custom")] = function () {
                  return "Moment<" + this.format() + ">";
                }),
              (ie.toJSON = function () {
                return this.isValid() ? this.toISOString() : null;
              }),
              (ie.toString = function () {
                return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
              }),
              (ie.unix = function () {
                return Math.floor(this.valueOf() / 1e3);
              }),
              (ie.valueOf = function () {
                return this._d.valueOf() - 6e4 * (this._offset || 0);
              }),
              (ie.creationData = function () {
                return { input: this._i, format: this._f, locale: this._locale, isUTC: this._isUTC, strict: this._strict };
              }),
              (ie.eraName = function () {
                for (var e, t = this.localeData().eras(), n = 0, s = t.length; n < s; ++n) {
                  if (((e = this.clone().startOf("day").valueOf()), t[n].since <= e && e <= t[n].until)) return t[n].name;
                  if (t[n].until <= e && e <= t[n].since) return t[n].name;
                }
                return "";
              }),
              (ie.eraNarrow = function () {
                for (var e, t = this.localeData().eras(), n = 0, s = t.length; n < s; ++n) {
                  if (((e = this.clone().startOf("day").valueOf()), t[n].since <= e && e <= t[n].until)) return t[n].narrow;
                  if (t[n].until <= e && e <= t[n].since) return t[n].narrow;
                }
                return "";
              }),
              (ie.eraAbbr = function () {
                for (var e, t = this.localeData().eras(), n = 0, s = t.length; n < s; ++n) {
                  if (((e = this.clone().startOf("day").valueOf()), t[n].since <= e && e <= t[n].until)) return t[n].abbr;
                  if (t[n].until <= e && e <= t[n].since) return t[n].abbr;
                }
                return "";
              }),
              (ie.eraYear = function () {
                for (var e, t, n = this.localeData().eras(), s = 0, i = n.length; s < i; ++s)
                  if (
                    ((e = n[s].since <= n[s].until ? 1 : -1),
                    (t = this.clone().startOf("day").valueOf()),
                    (n[s].since <= t && t <= n[s].until) || (n[s].until <= t && t <= n[s].since))
                  )
                    return (this.year() - c(n[s].since).year()) * e + n[s].offset;
                return this.year();
              }),
              (ie.year = Ue),
              (ie.isLeapYear = function () {
                return F(this.year());
              }),
              (ie.weekYear = function (e) {
                return cn.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
              }),
              (ie.isoWeekYear = function (e) {
                return cn.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4);
              }),
              (ie.quarter = ie.quarters =
                function (e) {
                  return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + (this.month() % 3));
                }),
              (ie.month = Pe),
              (ie.daysInMonth = function () {
                return Ee(this.year(), this.month());
              }),
              (ie.week = ie.weeks =
                function (e) {
                  var t = this.localeData().week(this);
                  return null == e ? t : this.add(7 * (e - t), "d");
                }),
              (ie.isoWeek = ie.isoWeeks =
                function (e) {
                  var t = Fe(this, 1, 4).week;
                  return null == e ? t : this.add(7 * (e - t), "d");
                }),
              (ie.weeksInYear = function () {
                var e = this.localeData()._week;
                return Ve(this.year(), e.dow, e.doy);
              }),
              (ie.weeksInWeekYear = function () {
                var e = this.localeData()._week;
                return Ve(this.weekYear(), e.dow, e.doy);
              }),
              (ie.isoWeeksInYear = function () {
                return Ve(this.year(), 1, 4);
              }),
              (ie.isoWeeksInISOWeekYear = function () {
                return Ve(this.isoWeekYear(), 1, 4);
              }),
              (ie.date = ne),
              (ie.day = ie.days =
                function (e) {
                  if (!this.isValid()) return null != e ? this : NaN;
                  var t,
                    n,
                    s = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                  return null != e
                    ? ((t = e),
                      (n = this.localeData()),
                      (e =
                        "string" != typeof t ? t : isNaN(t) ? ("number" == typeof (t = n.weekdaysParse(t)) ? t : null) : parseInt(t, 10)),
                      this.add(e - s, "d"))
                    : s;
                }),
              (ie.weekday = function (e) {
                if (!this.isValid()) return null != e ? this : NaN;
                var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
                return null == e ? t : this.add(e - t, "d");
              }),
              (ie.isoWeekday = function (e) {
                if (!this.isValid()) return null != e ? this : NaN;
                if (null == e) return this.day() || 7;
                var t = ((t = e), (e = this.localeData()), "string" == typeof t ? e.weekdaysParse(t) % 7 || 7 : isNaN(t) ? null : t);
                return this.day(this.day() % 7 ? t : t - 7);
              }),
              (ie.dayOfYear = function (e) {
                var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
                return null == e ? t : this.add(e - t, "d");
              }),
              (ie.hour = ie.hours = nt),
              (ie.minute = ie.minutes = Ye),
              (ie.second = ie.seconds = qe),
              (ie.millisecond = ie.milliseconds = Ke),
              (ie.utcOffset = function (e, t, n) {
                var s,
                  i = this._offset || 0;
                if (!this.isValid()) return null != e ? this : NaN;
                if (null == e) return this._isUTC ? i : jt(this);
                if ("string" == typeof e) {
                  if (null === (e = Gt(he, e))) return this;
                } else Math.abs(e) < 16 && !n && (e *= 60);
                return (
                  !this._isUTC && t && (s = jt(this)),
                  (this._offset = e),
                  (this._isUTC = !0),
                  null != s && this.add(s, "m"),
                  i !== e &&
                    (!t || this._changeInProgress
                      ? Zt(this, qt(e - i, "m"), 1, !1)
                      : this._changeInProgress ||
                        ((this._changeInProgress = !0), c.updateOffset(this, !0), (this._changeInProgress = null))),
                  this
                );
              }),
              (ie.utc = function (e) {
                return this.utcOffset(0, e);
              }),
              (ie.local = function (e) {
                return this._isUTC && (this.utcOffset(0, e), (this._isUTC = !1), e && this.subtract(jt(this), "m")), this;
              }),
              (ie.parseZone = function () {
                var e;
                return (
                  null != this._tzm
                    ? this.utcOffset(this._tzm, !1, !0)
                    : "string" == typeof this._i && (null != (e = Gt(ue, this._i)) ? this.utcOffset(e) : this.utcOffset(0, !0)),
                  this
                );
              }),
              (ie.hasAlignedHourOffset = function (e) {
                return !!this.isValid() && ((e = e ? Nt(e).utcOffset() : 0), (this.utcOffset() - e) % 60 == 0);
              }),
              (ie.isDST = function () {
                return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
              }),
              (ie.isLocal = function () {
                return !!this.isValid() && !this._isUTC;
              }),
              (ie.isUtcOffset = function () {
                return !!this.isValid() && this._isUTC;
              }),
              (ie.isUtc = Ft),
              (ie.isUTC = Ft),
              (ie.zoneAbbr = function () {
                return this._isUTC ? "UTC" : "";
              }),
              (ie.zoneName = function () {
                return this._isUTC ? "Coordinated Universal Time" : "";
              }),
              (ie.dates = n("dates accessor is deprecated. Use date instead.", ne)),
              (ie.months = n("months accessor is deprecated. Use month instead", Pe)),
              (ie.years = n("years accessor is deprecated. Use year instead", Ue)),
              (ie.zone = n(
                "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
                function (e, t) {
                  return null != e ? (this.utcOffset((e = "string" != typeof e ? -e : e), t), this) : -this.utcOffset();
                }
              )),
              (ie.isDSTShifted = n(
                "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
                function () {
                  if (!r(this._isDSTShifted)) return this._isDSTShifted;
                  var e,
                    t = {};
                  return (
                    w(t, this),
                    (t = Et(t))._a
                      ? ((e = (t._isUTC ? f : Nt)(t._a)),
                        (this._isDSTShifted =
                          this.isValid() &&
                          0 <
                            (function (e, t, n) {
                              for (var s = Math.min(e.length, t.length), i = Math.abs(e.length - t.length), r = 0, o = 0; o < s; o++)
                                ((n && e[o] !== t[o]) || (!n && B(e[o]) !== B(t[o]))) && r++;
                              return r + i;
                            })(t._a, e.toArray())))
                      : (this._isDSTShifted = !1),
                    this._isDSTShifted
                  );
                }
              ));
            X = D.prototype;
            function mn(e, t, n, s) {
              var i = dt(),
                t = f().set(s, t);
              return i[n](t, e);
            }
            function pn(e, t, n) {
              if ((h(e) && ((t = e), (e = void 0)), (e = e || ""), null != t)) return mn(e, t, n, "month");
              for (var s = [], i = 0; i < 12; i++) s[i] = mn(e, i, n, "month");
              return s;
            }
            function yn(e, t, n, s) {
              t =
                ("boolean" == typeof e ? h(t) && ((n = t), (t = void 0)) : ((t = e), (e = !1), h((n = t)) && ((n = t), (t = void 0))),
                t || "");
              var i,
                r = dt(),
                o = e ? r._week.dow : 0,
                a = [];
              if (null != n) return mn(t, (n + o) % 7, s, "day");
              for (i = 0; i < 7; i++) a[i] = mn(t, (i + o) % 7, s, "day");
              return a;
            }
            (X.calendar = function (e, t, n) {
              return O((e = this._calendar[e] || this._calendar.sameElse)) ? e.call(t, n) : e;
            }),
              (X.longDateFormat = function (e) {
                var t = this._longDateFormat[e],
                  n = this._longDateFormat[e.toUpperCase()];
                return t || !n
                  ? t
                  : ((this._longDateFormat[e] = n
                      .match(N)
                      .map(function (e) {
                        return "MMMM" === e || "MM" === e || "DD" === e || "dddd" === e ? e.slice(1) : e;
                      })
                      .join("")),
                    this._longDateFormat[e]);
              }),
              (X.invalidDate = function () {
                return this._invalidDate;
              }),
              (X.ordinal = function (e) {
                return this._ordinal.replace("%d", e);
              }),
              (X.preparse = _n),
              (X.postformat = _n),
              (X.relativeTime = function (e, t, n, s) {
                var i = this._relativeTime[n];
                return O(i) ? i(e, t, n, s) : i.replace(/%d/i, e);
              }),
              (X.pastFuture = function (e, t) {
                return O((e = this._relativeTime[0 < e ? "future" : "past"])) ? e(t) : e.replace(/%s/i, t);
              }),
              (X.set = function (e) {
                var t, n;
                for (n in e) d(e, n) && (O((t = e[n])) ? (this[n] = t) : (this["_" + n] = t));
                (this._config = e),
                  (this._dayOfMonthOrdinalParseLenient = new RegExp(
                    (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
                  ));
              }),
              (X.eras = function (e, t) {
                for (var n, s = this._eras || dt("en")._eras, i = 0, r = s.length; i < r; ++i)
                  switch (
                    ("string" == typeof s[i].since && ((n = c(s[i].since).startOf("day")), (s[i].since = n.valueOf())), typeof s[i].until)
                  ) {
                    case "undefined":
                      s[i].until = 1 / 0;
                      break;
                    case "string":
                      (n = c(s[i].until).startOf("day").valueOf()), (s[i].until = n.valueOf());
                  }
                return s;
              }),
              (X.erasParse = function (e, t, n) {
                var s,
                  i,
                  r,
                  o,
                  a,
                  u = this.eras();
                for (e = e.toUpperCase(), s = 0, i = u.length; s < i; ++s)
                  if (((r = u[s].name.toUpperCase()), (o = u[s].abbr.toUpperCase()), (a = u[s].narrow.toUpperCase()), n))
                    switch (t) {
                      case "N":
                      case "NN":
                      case "NNN":
                        if (o === e) return u[s];
                        break;
                      case "NNNN":
                        if (r === e) return u[s];
                        break;
                      case "NNNNN":
                        if (a === e) return u[s];
                    }
                  else if (0 <= [r, o, a].indexOf(e)) return u[s];
              }),
              (X.erasConvertYear = function (e, t) {
                var n = e.since <= e.until ? 1 : -1;
                return void 0 === t ? c(e.since).year() : c(e.since).year() + (t - e.offset) * n;
              }),
              (X.erasAbbrRegex = function (e) {
                return d(this, "_erasAbbrRegex") || hn.call(this), e ? this._erasAbbrRegex : this._erasRegex;
              }),
              (X.erasNameRegex = function (e) {
                return d(this, "_erasNameRegex") || hn.call(this), e ? this._erasNameRegex : this._erasRegex;
              }),
              (X.erasNarrowRegex = function (e) {
                return d(this, "_erasNarrowRegex") || hn.call(this), e ? this._erasNarrowRegex : this._erasRegex;
              }),
              (X.months = function (e, t) {
                return e
                  ? (o(this._months) ? this._months : this._months[(this._months.isFormat || Ae).test(t) ? "format" : "standalone"])[
                      e.month()
                    ]
                  : o(this._months)
                  ? this._months
                  : this._months.standalone;
              }),
              (X.monthsShort = function (e, t) {
                return e
                  ? (o(this._monthsShort) ? this._monthsShort : this._monthsShort[Ae.test(t) ? "format" : "standalone"])[e.month()]
                  : o(this._monthsShort)
                  ? this._monthsShort
                  : this._monthsShort.standalone;
              }),
              (X.monthsParse = function (e, t, n) {
                var s, i;
                if (this._monthsParseExact)
                  return function (e, t, n) {
                    var s,
                      i,
                      r,
                      e = e.toLocaleLowerCase();
                    if (!this._monthsParse)
                      for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], s = 0; s < 12; ++s)
                        (r = f([2e3, s])),
                          (this._shortMonthsParse[s] = this.monthsShort(r, "").toLocaleLowerCase()),
                          (this._longMonthsParse[s] = this.months(r, "").toLocaleLowerCase());
                    return n
                      ? "MMM" === t
                        ? -1 !== (i = ge.call(this._shortMonthsParse, e))
                          ? i
                          : null
                        : -1 !== (i = ge.call(this._longMonthsParse, e))
                        ? i
                        : null
                      : "MMM" === t
                      ? -1 !== (i = ge.call(this._shortMonthsParse, e)) || -1 !== (i = ge.call(this._longMonthsParse, e))
                        ? i
                        : null
                      : -1 !== (i = ge.call(this._longMonthsParse, e)) || -1 !== (i = ge.call(this._shortMonthsParse, e))
                      ? i
                      : null;
                  }.call(this, e, t, n);
                for (
                  this._monthsParse || ((this._monthsParse = []), (this._longMonthsParse = []), (this._shortMonthsParse = [])), s = 0;
                  s < 12;
                  s++
                ) {
                  if (
                    ((i = f([2e3, s])),
                    n &&
                      !this._longMonthsParse[s] &&
                      ((this._longMonthsParse[s] = new RegExp("^" + this.months(i, "").replace(".", "") + "$", "i")),
                      (this._shortMonthsParse[s] = new RegExp("^" + this.monthsShort(i, "").replace(".", "") + "$", "i"))),
                    n ||
                      this._monthsParse[s] ||
                      ((i = "^" + this.months(i, "") + "|^" + this.monthsShort(i, "")),
                      (this._monthsParse[s] = new RegExp(i.replace(".", ""), "i"))),
                    n && "MMMM" === t && this._longMonthsParse[s].test(e))
                  )
                    return s;
                  if (n && "MMM" === t && this._shortMonthsParse[s].test(e)) return s;
                  if (!n && this._monthsParse[s].test(e)) return s;
                }
              }),
              (X.monthsRegex = function (e) {
                return this._monthsParseExact
                  ? (d(this, "_monthsRegex") || Ie.call(this), e ? this._monthsStrictRegex : this._monthsRegex)
                  : (d(this, "_monthsRegex") || (this._monthsRegex = Re),
                    this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
              }),
              (X.monthsShortRegex = function (e) {
                return this._monthsParseExact
                  ? (d(this, "_monthsRegex") || Ie.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex)
                  : (d(this, "_monthsShortRegex") || (this._monthsShortRegex = xe),
                    this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
              }),
              (X.week = function (e) {
                return Fe(e, this._week.dow, this._week.doy).week;
              }),
              (X.firstDayOfYear = function () {
                return this._week.doy;
              }),
              (X.firstDayOfWeek = function () {
                return this._week.dow;
              }),
              (X.weekdays = function (e, t) {
                return (
                  (t = o(this._weekdays)
                    ? this._weekdays
                    : this._weekdays[e && !0 !== e && this._weekdays.isFormat.test(t) ? "format" : "standalone"]),
                  !0 === e ? Be(t, this._week.dow) : e ? t[e.day()] : t
                );
              }),
              (X.weekdaysMin = function (e) {
                return !0 === e ? Be(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
              }),
              (X.weekdaysShort = function (e) {
                return !0 === e ? Be(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
              }),
              (X.weekdaysParse = function (e, t, n) {
                var s, i;
                if (this._weekdaysParseExact)
                  return function (e, t, n) {
                    var s,
                      i,
                      r,
                      e = e.toLocaleLowerCase();
                    if (!this._weekdaysParse)
                      for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], s = 0; s < 7; ++s)
                        (r = f([2e3, 1]).day(s)),
                          (this._minWeekdaysParse[s] = this.weekdaysMin(r, "").toLocaleLowerCase()),
                          (this._shortWeekdaysParse[s] = this.weekdaysShort(r, "").toLocaleLowerCase()),
                          (this._weekdaysParse[s] = this.weekdays(r, "").toLocaleLowerCase());
                    return n
                      ? "dddd" === t
                        ? -1 !== (i = ge.call(this._weekdaysParse, e))
                          ? i
                          : null
                        : "ddd" === t
                        ? -1 !== (i = ge.call(this._shortWeekdaysParse, e))
                          ? i
                          : null
                        : -1 !== (i = ge.call(this._minWeekdaysParse, e))
                        ? i
                        : null
                      : "dddd" === t
                      ? -1 !== (i = ge.call(this._weekdaysParse, e)) ||
                        -1 !== (i = ge.call(this._shortWeekdaysParse, e)) ||
                        -1 !== (i = ge.call(this._minWeekdaysParse, e))
                        ? i
                        : null
                      : "ddd" === t
                      ? -1 !== (i = ge.call(this._shortWeekdaysParse, e)) ||
                        -1 !== (i = ge.call(this._weekdaysParse, e)) ||
                        -1 !== (i = ge.call(this._minWeekdaysParse, e))
                        ? i
                        : null
                      : -1 !== (i = ge.call(this._minWeekdaysParse, e)) ||
                        -1 !== (i = ge.call(this._weekdaysParse, e)) ||
                        -1 !== (i = ge.call(this._shortWeekdaysParse, e))
                      ? i
                      : null;
                  }.call(this, e, t, n);
                for (
                  this._weekdaysParse ||
                    ((this._weekdaysParse = []),
                    (this._minWeekdaysParse = []),
                    (this._shortWeekdaysParse = []),
                    (this._fullWeekdaysParse = [])),
                    s = 0;
                  s < 7;
                  s++
                ) {
                  if (
                    ((i = f([2e3, 1]).day(s)),
                    n &&
                      !this._fullWeekdaysParse[s] &&
                      ((this._fullWeekdaysParse[s] = new RegExp("^" + this.weekdays(i, "").replace(".", "\\.?") + "$", "i")),
                      (this._shortWeekdaysParse[s] = new RegExp("^" + this.weekdaysShort(i, "").replace(".", "\\.?") + "$", "i")),
                      (this._minWeekdaysParse[s] = new RegExp("^" + this.weekdaysMin(i, "").replace(".", "\\.?") + "$", "i"))),
                    this._weekdaysParse[s] ||
                      ((i = "^" + this.weekdays(i, "") + "|^" + this.weekdaysShort(i, "") + "|^" + this.weekdaysMin(i, "")),
                      (this._weekdaysParse[s] = new RegExp(i.replace(".", ""), "i"))),
                    n && "dddd" === t && this._fullWeekdaysParse[s].test(e))
                  )
                    return s;
                  if (n && "ddd" === t && this._shortWeekdaysParse[s].test(e)) return s;
                  if (n && "dd" === t && this._minWeekdaysParse[s].test(e)) return s;
                  if (!n && this._weekdaysParse[s].test(e)) return s;
                }
              }),
              (X.weekdaysRegex = function (e) {
                return this._weekdaysParseExact
                  ? (d(this, "_weekdaysRegex") || Xe.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex)
                  : (d(this, "_weekdaysRegex") || (this._weekdaysRegex = Je),
                    this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
              }),
              (X.weekdaysShortRegex = function (e) {
                return this._weekdaysParseExact
                  ? (d(this, "_weekdaysRegex") || Xe.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
                  : (d(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Ze),
                    this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
              }),
              (X.weekdaysMinRegex = function (e) {
                return this._weekdaysParseExact
                  ? (d(this, "_weekdaysRegex") || Xe.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
                  : (d(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = $e),
                    this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
              }),
              (X.isPM = function (e) {
                return "p" === (e + "").toLowerCase().charAt(0);
              }),
              (X.meridiem = function (e, t, n) {
                return 11 < e ? (n ? "pm" : "PM") : n ? "am" : "AM";
              }),
              lt("en", {
                eras: [
                  { since: "0001-01-01", until: 1 / 0, offset: 1, name: "Anno Domini", narrow: "AD", abbr: "AD" },
                  { since: "0000-12-31", until: -1 / 0, offset: 1, name: "Before Christ", narrow: "BC", abbr: "BC" }
                ],
                dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
                ordinal: function (e) {
                  var t = e % 10;
                  return e + (1 === B((e % 100) / 10) ? "th" : 1 == t ? "st" : 2 == t ? "nd" : 3 == t ? "rd" : "th");
                }
              }),
              (c.lang = n("moment.lang is deprecated. Use moment.locale instead.", lt)),
              (c.langData = n("moment.langData is deprecated. Use moment.localeData instead.", dt));
            var gn = Math.abs;
            function wn(e, t, n, s) {
              n = qt(t, n);
              return (e._milliseconds += s * n._milliseconds), (e._days += s * n._days), (e._months += s * n._months), e._bubble();
            }
            function Tn(e) {
              return e < 0 ? Math.floor(e) : Math.ceil(e);
            }
            function Sn(e) {
              return (4800 * e) / 146097;
            }
            function vn(e) {
              return (146097 * e) / 4800;
            }
            function kn(e) {
              return function () {
                return this.as(e);
              };
            }
            (re = kn("ms")),
              (Q = kn("s")),
              (J = kn("m")),
              (Z = kn("h")),
              (se = kn("d")),
              ($ = kn("w")),
              ($t = kn("M")),
              (xt = kn("Q")),
              (At = kn("y"));
            function bn(e) {
              return function () {
                return this.isValid() ? this._data[e] : NaN;
              };
            }
            (le = bn("milliseconds")),
              (nt = bn("seconds")),
              (Ye = bn("minutes")),
              (qe = bn("hours")),
              (Ke = bn("days")),
              (ne = bn("months")),
              (Ue = bn("years"));
            var On = Math.round,
              Mn = { ss: 44, s: 45, m: 45, h: 22, d: 26, w: null, M: 11 };
            function Dn(e, t, n, s) {
              var i = qt(e).abs(),
                r = On(i.as("s")),
                o = On(i.as("m")),
                a = On(i.as("h")),
                u = On(i.as("d")),
                h = On(i.as("M")),
                l = On(i.as("w")),
                i = On(i.as("y")),
                u =
                  (r <= n.ss ? ["s", r] : r < n.s && ["ss", r]) ||
                  (o <= 1 && ["m"]) ||
                  (o < n.m && ["mm", o]) ||
                  (a <= 1 && ["h"]) ||
                  (a < n.h && ["hh", a]) ||
                  (u <= 1 && ["d"]) ||
                  (u < n.d && ["dd", u]);
              return (
                ((u = (u = null != n.w ? u || (l <= 1 && ["w"]) || (l < n.w && ["ww", l]) : u) ||
                  (h <= 1 && ["M"]) ||
                  (h < n.M && ["MM", h]) ||
                  (i <= 1 && ["y"]) || ["yy", i])[2] = t),
                (u[3] = 0 < +e),
                (u[4] = s),
                function (e, t, n, s, i) {
                  return i.relativeTime(t || 1, !!n, e, s);
                }.apply(null, u)
              );
            }
            var En = Math.abs;
            function Yn(e) {
              return (0 < e) - (e < 0) || +e;
            }
            function Nn() {
              if (!this.isValid()) return this.localeData().invalidDate();
              var e,
                t,
                n,
                s,
                i,
                r,
                o,
                a = En(this._milliseconds) / 1e3,
                u = En(this._days),
                h = En(this._months),
                l = this.asSeconds();
              return l
                ? ((e = V(a / 60)),
                  (t = V(e / 60)),
                  (a %= 60),
                  (e %= 60),
                  (n = V(h / 12)),
                  (h %= 12),
                  (s = a ? a.toFixed(3).replace(/\.?0+$/, "") : ""),
                  (i = Yn(this._months) !== Yn(l) ? "-" : ""),
                  (r = Yn(this._days) !== Yn(l) ? "-" : ""),
                  (o = Yn(this._milliseconds) !== Yn(l) ? "-" : ""),
                  (l < 0 ? "-" : "") +
                    "P" +
                    (n ? i + n + "Y" : "") +
                    (h ? i + h + "M" : "") +
                    (u ? r + u + "D" : "") +
                    (t || e || a ? "T" : "") +
                    (t ? o + t + "H" : "") +
                    (e ? o + e + "M" : "") +
                    (a ? o + s + "S" : ""))
                : "P0D";
            }
            X = Pt.prototype;
            return (
              (X.isValid = function () {
                return this._isValid;
              }),
              (X.abs = function () {
                var e = this._data;
                return (
                  (this._milliseconds = gn(this._milliseconds)),
                  (this._days = gn(this._days)),
                  (this._months = gn(this._months)),
                  (e.milliseconds = gn(e.milliseconds)),
                  (e.seconds = gn(e.seconds)),
                  (e.minutes = gn(e.minutes)),
                  (e.hours = gn(e.hours)),
                  (e.months = gn(e.months)),
                  (e.years = gn(e.years)),
                  this
                );
              }),
              (X.add = function (e, t) {
                return wn(this, e, t, 1);
              }),
              (X.subtract = function (e, t) {
                return wn(this, e, t, -1);
              }),
              (X.as = function (e) {
                if (!this.isValid()) return NaN;
                var t,
                  n,
                  s = this._milliseconds;
                if ("month" === (e = L(e)) || "quarter" === e || "year" === e)
                  switch (((t = this._days + s / 864e5), (n = this._months + Sn(t)), e)) {
                    case "month":
                      return n;
                    case "quarter":
                      return n / 3;
                    case "year":
                      return n / 12;
                  }
                else
                  switch (((t = this._days + Math.round(vn(this._months))), e)) {
                    case "week":
                      return t / 7 + s / 6048e5;
                    case "day":
                      return t + s / 864e5;
                    case "hour":
                      return 24 * t + s / 36e5;
                    case "minute":
                      return 1440 * t + s / 6e4;
                    case "second":
                      return 86400 * t + s / 1e3;
                    case "millisecond":
                      return Math.floor(864e5 * t) + s;
                    default:
                      throw new Error("Unknown unit " + e);
                  }
              }),
              (X.asMilliseconds = re),
              (X.asSeconds = Q),
              (X.asMinutes = J),
              (X.asHours = Z),
              (X.asDays = se),
              (X.asWeeks = $),
              (X.asMonths = $t),
              (X.asQuarters = xt),
              (X.asYears = At),
              (X.valueOf = function () {
                return this.isValid()
                  ? this._milliseconds + 864e5 * this._days + (this._months % 12) * 2592e6 + 31536e6 * B(this._months / 12)
                  : NaN;
              }),
              (X._bubble = function () {
                var e = this._milliseconds,
                  t = this._days,
                  n = this._months,
                  s = this._data;
                return (
                  (0 <= e && 0 <= t && 0 <= n) || (e <= 0 && t <= 0 && n <= 0) || ((e += 864e5 * Tn(vn(n) + t)), (n = t = 0)),
                  (s.milliseconds = e % 1e3),
                  (e = V(e / 1e3)),
                  (s.seconds = e % 60),
                  (e = V(e / 60)),
                  (s.minutes = e % 60),
                  (e = V(e / 60)),
                  (s.hours = e % 24),
                  (t += V(e / 24)),
                  (n += e = V(Sn(t))),
                  (t -= Tn(vn(e))),
                  (e = V(n / 12)),
                  (n %= 12),
                  (s.days = t),
                  (s.months = n),
                  (s.years = e),
                  this
                );
              }),
              (X.clone = function () {
                return qt(this);
              }),
              (X.get = function (e) {
                return (e = L(e)), this.isValid() ? this[e + "s"]() : NaN;
              }),
              (X.milliseconds = le),
              (X.seconds = nt),
              (X.minutes = Ye),
              (X.hours = qe),
              (X.days = Ke),
              (X.weeks = function () {
                return V(this.days() / 7);
              }),
              (X.months = ne),
              (X.years = Ue),
              (X.humanize = function (e, t) {
                if (!this.isValid()) return this.localeData().invalidDate();
                var n = !1,
                  s = Mn;
                return (
                  "object" == typeof e && ((t = e), (e = !1)),
                  "boolean" == typeof e && (n = e),
                  "object" == typeof t && ((s = Object.assign({}, Mn, t)), null != t.s && null == t.ss && (s.ss = t.s - 1)),
                  (t = this.localeData()),
                  (s = Dn(this, !n, s, t)),
                  n && (s = t.pastFuture(+this, s)),
                  t.postformat(s)
                );
              }),
              (X.toISOString = Nn),
              (X.toString = Nn),
              (X.toJSON = Nn),
              (X.locale = tn),
              (X.localeData = nn),
              (X.toIsoString = n("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Nn)),
              (X.lang = te),
              C("X", 0, 0, "unix"),
              C("x", 0, 0, "valueOf"),
              ce("x", ae),
              ce("X", /[+-]?\d+(\.\d{1,3})?/),
              pe("X", function (e, t, n) {
                n._d = new Date(1e3 * parseFloat(e));
              }),
              pe("x", function (e, t, n) {
                n._d = new Date(B(e));
              }),
              (c.version = "2.29.1"),
              (e = Nt),
              (c.fn = ie),
              (c.min = function () {
                return Rt("isBefore", [].slice.call(arguments, 0));
              }),
              (c.max = function () {
                return Rt("isAfter", [].slice.call(arguments, 0));
              }),
              (c.now = function () {
                return Date.now ? Date.now() : +new Date();
              }),
              (c.utc = f),
              (c.unix = function (e) {
                return Nt(1e3 * e);
              }),
              (c.months = function (e, t) {
                return pn(e, t, "months");
              }),
              (c.isDate = s),
              (c.locale = lt),
              (c.invalid = p),
              (c.duration = qt),
              (c.isMoment = S),
              (c.weekdays = function (e, t, n) {
                return yn(e, t, n, "weekdays");
              }),
              (c.parseZone = function () {
                return Nt.apply(null, arguments).parseZone();
              }),
              (c.localeData = dt),
              (c.isDuration = It),
              (c.monthsShort = function (e, t) {
                return pn(e, t, "monthsShort");
              }),
              (c.weekdaysMin = function (e, t, n) {
                return yn(e, t, n, "weekdaysMin");
              }),
              (c.defineLocale = ct),
              (c.updateLocale = function (e, t) {
                var n, s;
                return (
                  null != t
                    ? ((s = it),
                      null != rt[e] && null != rt[e].parentLocale
                        ? rt[e].set(M(rt[e]._config, t))
                        : ((t = M((s = null != (n = ht(e)) ? n._config : s), t)),
                          null == n && (t.abbr = e),
                          ((t = new D(t)).parentLocale = rt[e]),
                          (rt[e] = t)),
                      lt(e))
                    : null != rt[e] &&
                      (null != rt[e].parentLocale ? ((rt[e] = rt[e].parentLocale), e === lt() && lt(e)) : null != rt[e] && delete rt[e]),
                  rt[e]
                );
              }),
              (c.locales = function () {
                return E(rt);
              }),
              (c.weekdaysShort = function (e, t, n) {
                return yn(e, t, n, "weekdaysShort");
              }),
              (c.normalizeUnits = L),
              (c.relativeTimeRounding = function (e) {
                return void 0 === e ? On : "function" == typeof e && ((On = e), !0);
              }),
              (c.relativeTimeThreshold = function (e, t) {
                return void 0 !== Mn[e] && (void 0 === t ? Mn[e] : ((Mn[e] = t), "s" === e && (Mn.ss = t - 1), !0));
              }),
              (c.calendarFormat = function (e, t) {
                return (t = e.diff(t, "days", !0)) < -6
                  ? "sameElse"
                  : t < -1
                  ? "lastWeek"
                  : t < 0
                  ? "lastDay"
                  : t < 1
                  ? "sameDay"
                  : t < 2
                  ? "nextDay"
                  : t < 7
                  ? "nextWeek"
                  : "sameElse";
              }),
              (c.prototype = ie),
              (c.HTML5_FMT = {
                DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
                DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
                DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
                DATE: "YYYY-MM-DD",
                TIME: "HH:mm",
                TIME_SECONDS: "HH:mm:ss",
                TIME_MS: "HH:mm:ss.SSS",
                WEEK: "GGGG-[W]WW",
                MONTH: "YYYY-MM"
              }),
              c
            );
          }),
          "object" == typeof e && void 0 !== xn
            ? (xn.exports = n())
            : "function" == typeof define && define.amd
            ? define(n)
            : (t.moment = n());
      },
      {}
    ],
    8: [
      function (e, t, n) {
        function s() {
          this._defaults = [];
        }
        [
          "use",
          "on",
          "once",
          "set",
          "query",
          "type",
          "accept",
          "auth",
          "withCredentials",
          "sortQuery",
          "retry",
          "ok",
          "redirects",
          "timeout",
          "buffer",
          "serialize",
          "parse",
          "ca",
          "key",
          "pfx",
          "cert"
        ].forEach(function (e) {
          s.prototype[e] = function () {
            return this._defaults.push({ fn: e, arguments: arguments }), this;
          };
        }),
          (s.prototype._setDefaults = function (t) {
            this._defaults.forEach(function (e) {
              t[e.fn].apply(t, e.arguments);
            });
          }),
          (t.exports = s);
      },
      {}
    ],
    9: [
      function (e, t, n) {
        var s =
            "undefined" != typeof window
              ? window
              : "undefined" != typeof self
              ? self
              : (console.warn("Using browser-only version of superagent in non-browser environment"), this),
          i = e("component-emitter"),
          r = e("./request-base"),
          o = e("./is-object"),
          a = e("./response-base"),
          u = e("./agent-base");
        function h() {}
        var l =
          (n =
          t.exports =
            function (e, t) {
              return "function" == typeof t
                ? new n.Request("GET", e).end(t)
                : 1 == arguments.length
                ? new n.Request("GET", e)
                : new n.Request(e, t);
            });
        (n.Request = p),
          (l.getXHR = function () {
            if (!(!s.XMLHttpRequest || (s.location && "file:" == s.location.protocol && s.ActiveXObject))) return new XMLHttpRequest();
            try {
              return new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {}
            try {
              return new ActiveXObject("Msxml2.XMLHTTP.6.0");
            } catch (e) {}
            try {
              return new ActiveXObject("Msxml2.XMLHTTP.3.0");
            } catch (e) {}
            try {
              return new ActiveXObject("Msxml2.XMLHTTP");
            } catch (e) {}
            throw Error("Browser-only version of superagent could not find XHR");
          });
        var c = "".trim
          ? function (e) {
              return e.trim();
            }
          : function (e) {
              return e.replace(/(^\s*|\s*$)/g, "");
            };
        function d(e) {
          if (!o(e)) return e;
          var t,
            n = [];
          for (t in e)
            !(function t(n, s, e) {
              if (null != e)
                if (Array.isArray(e))
                  e.forEach(function (e) {
                    t(n, s, e);
                  });
                else if (o(e)) for (var i in e) t(n, s + "[" + i + "]", e[i]);
                else n.push(encodeURIComponent(s) + "=" + encodeURIComponent(e));
              else null === e && n.push(encodeURIComponent(s));
            })(n, t, e[t]);
          return n.join("&");
        }
        function f(e) {
          for (var t, n, s = {}, i = e.split("&"), r = 0, o = i.length; r < o; ++r)
            -1 == (n = (t = i[r]).indexOf("="))
              ? (s[decodeURIComponent(t)] = "")
              : (s[decodeURIComponent(t.slice(0, n))] = decodeURIComponent(t.slice(n + 1)));
          return s;
        }
        function _(e) {
          return /[\/+]json\b/.test(e);
        }
        function m(e) {
          (this.req = e),
            (this.xhr = this.req.xhr),
            (this.text =
              ("HEAD" != this.req.method && ("" === this.xhr.responseType || "text" === this.xhr.responseType)) ||
              void 0 === this.xhr.responseType
                ? this.xhr.responseText
                : null),
            (this.statusText = this.req.xhr.statusText);
          var t = this.xhr.status;
          this._setStatusProperties((t = 1223 === t ? 204 : t)),
            (this.header = this.headers =
              (function (e) {
                for (var t, n, s, i = e.split(/\r?\n/), r = {}, o = 0, a = i.length; o < a; ++o)
                  -1 !== (s = (t = i[o]).indexOf(":")) && ((n = t.slice(0, s).toLowerCase()), (s = c(t.slice(s + 1))), (r[n] = s));
                return r;
              })(this.xhr.getAllResponseHeaders())),
            (this.header["content-type"] = this.xhr.getResponseHeader("content-type")),
            this._setHeaderProperties(this.header),
            null === this.text && e._responseType
              ? (this.body = this.xhr.response)
              : (this.body = "HEAD" != this.req.method ? this._parseBody(this.text || this.xhr.response) : null);
        }
        function p(e, t) {
          var s = this;
          (this._query = this._query || []),
            (this.method = e),
            (this.url = t),
            (this.header = {}),
            (this._header = {}),
            this.on("end", function () {
              var t,
                n = null,
                e = null;
              try {
                e = new m(s);
              } catch (e) {
                return (
                  ((n = new Error("Parser is unable to parse the response")).parse = !0),
                  (n.original = e),
                  s.xhr
                    ? ((n.rawResponse = void 0 === s.xhr.responseType ? s.xhr.responseText : s.xhr.response),
                      (n.status = s.xhr.status || null),
                      (n.statusCode = n.status))
                    : ((n.rawResponse = null), (n.status = null)),
                  s.callback(n)
                );
              }
              s.emit("response", e);
              try {
                s._isResponseOK(e) || (t = new Error(e.statusText || "Unsuccessful HTTP response"));
              } catch (e) {
                t = e;
              }
              t ? ((t.original = n), (t.response = e), (t.status = e.status), s.callback(t, e)) : s.callback(null, e);
            });
        }
        function y(e, t, n) {
          e = l("DELETE", e);
          return "function" == typeof t && ((n = t), (t = null)), t && e.send(t), n && e.end(n), e;
        }
        (l.serializeObject = d),
          (l.parseString = f),
          (l.types = {
            html: "text/html",
            json: "application/json",
            xml: "text/xml",
            urlencoded: "application/x-www-form-urlencoded",
            form: "application/x-www-form-urlencoded",
            "form-data": "application/x-www-form-urlencoded"
          }),
          (l.serialize = { "application/x-www-form-urlencoded": d, "application/json": JSON.stringify }),
          (l.parse = { "application/x-www-form-urlencoded": f, "application/json": JSON.parse }),
          a(m.prototype),
          (m.prototype._parseBody = function (e) {
            var t = l.parse[this.type];
            return this.req._parser
              ? this.req._parser(this, e)
              : (t = !t && _(this.type) ? l.parse["application/json"] : t) && e && (e.length || e instanceof Object)
              ? t(e)
              : null;
          }),
          (m.prototype.toError = function () {
            var e = this.req,
              t = e.method,
              n = e.url,
              e = "cannot " + t + " " + n + " (" + this.status + ")",
              e = new Error(e);
            return (e.status = this.status), (e.method = t), (e.url = n), e;
          }),
          (l.Response = m),
          i(p.prototype),
          r(p.prototype),
          (p.prototype.type = function (e) {
            return this.set("Content-Type", l.types[e] || e), this;
          }),
          (p.prototype.accept = function (e) {
            return this.set("Accept", l.types[e] || e), this;
          }),
          (p.prototype.auth = function (e, t, n) {
            "object" == typeof (t = 1 === arguments.length ? "" : t) && null !== t && ((n = t), (t = "")),
              (n = n || { type: "function" == typeof btoa ? "basic" : "auto" });
            return this._auth(e, t, n, function (e) {
              if ("function" == typeof btoa) return btoa(e);
              throw new Error("Cannot use basic auth, btoa is not a function");
            });
          }),
          (p.prototype.query = function (e) {
            return (e = "string" != typeof e ? d(e) : e) && this._query.push(e), this;
          }),
          (p.prototype.attach = function (e, t, n) {
            if (t) {
              if (this._data) throw Error("superagent can't mix .send() and .attach()");
              this._getFormData().append(e, t, n || t.name);
            }
            return this;
          }),
          (p.prototype._getFormData = function () {
            return this._formData || (this._formData = new s.FormData()), this._formData;
          }),
          (p.prototype.callback = function (e, t) {
            if (this._shouldRetry(e, t)) return this._retry();
            var n = this._callback;
            this.clearTimeout(), e && (this._maxRetries && (e.retries = this._retries - 1), this.emit("error", e)), n(e, t);
          }),
          (p.prototype.crossDomainError = function () {
            var e = new Error(
              "Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc."
            );
            (e.crossDomain = !0), (e.status = this.status), (e.method = this.method), (e.url = this.url), this.callback(e);
          }),
          (p.prototype.buffer =
            p.prototype.ca =
            p.prototype.agent =
              function () {
                return console.warn("This is not supported in browser version of superagent"), this;
              }),
          (p.prototype.pipe = p.prototype.write =
            function () {
              throw Error("Streaming is not supported in browser version of superagent");
            }),
          (p.prototype._isHost = function (e) {
            return e && "object" == typeof e && !Array.isArray(e) && "[object Object]" !== Object.prototype.toString.call(e);
          }),
          (p.prototype.end = function (e) {
            return (
              this._endCalled && console.warn("Warning: .end() was called twice. This is not supported in superagent"),
              (this._endCalled = !0),
              (this._callback = e || h),
              this._finalizeQueryString(),
              this._end()
            );
          }),
          (p.prototype._end = function () {
            var n = this,
              s = (this.xhr = l.getXHR()),
              e = this._formData || this._data;
            this._setTimeouts(),
              (s.onreadystatechange = function () {
                var t,
                  e = s.readyState;
                if ((2 <= e && n._responseTimeoutTimer && clearTimeout(n._responseTimeoutTimer), 4 == e)) {
                  try {
                    t = s.status;
                  } catch (e) {
                    t = 0;
                  }
                  if (!t) return n.timedout || n._aborted ? void 0 : n.crossDomainError();
                  n.emit("end");
                }
              });
            function t(e, t) {
              0 < t.total && (t.percent = (t.loaded / t.total) * 100), (t.direction = e), n.emit("progress", t);
            }
            var i, r, o;
            if (this.hasListeners("progress"))
              try {
                (s.onprogress = t.bind(null, "download")), s.upload && (s.upload.onprogress = t.bind(null, "upload"));
              } catch (e) {}
            try {
              this.username && this.password
                ? s.open(this.method, this.url, !0, this.username, this.password)
                : s.open(this.method, this.url, !0);
            } catch (e) {
              return this.callback(e);
            }
            for (o in (this._withCredentials && (s.withCredentials = !0),
            this._formData ||
              "GET" == this.method ||
              "HEAD" == this.method ||
              "string" == typeof e ||
              this._isHost(e) ||
              ((i = this._header["content-type"]),
              (r = !(r = this._serializer || l.serialize[i ? i.split(";")[0] : ""]) && _(i) ? l.serialize["application/json"] : r) &&
                (e = r(e))),
            this.header))
              null != this.header[o] && this.header.hasOwnProperty(o) && s.setRequestHeader(o, this.header[o]);
            return (
              this._responseType && (s.responseType = this._responseType), this.emit("request", this), s.send(void 0 !== e ? e : null), this
            );
          }),
          (l.agent = function () {
            return new u();
          }),
          ["GET", "POST", "OPTIONS", "PATCH", "PUT", "DELETE"].forEach(function (n) {
            u.prototype[n.toLowerCase()] = function (e, t) {
              e = new l.Request(n, e);
              return this._setDefaults(e), t && e.end(t), e;
            };
          }),
          (u.prototype.del = u.prototype.delete),
          (l.get = function (e, t, n) {
            e = l("GET", e);
            return "function" == typeof t && ((n = t), (t = null)), t && e.query(t), n && e.end(n), e;
          }),
          (l.head = function (e, t, n) {
            e = l("HEAD", e);
            return "function" == typeof t && ((n = t), (t = null)), t && e.query(t), n && e.end(n), e;
          }),
          (l.options = function (e, t, n) {
            e = l("OPTIONS", e);
            return "function" == typeof t && ((n = t), (t = null)), t && e.send(t), n && e.end(n), e;
          }),
          (l.del = y),
          (l.delete = y),
          (l.patch = function (e, t, n) {
            e = l("PATCH", e);
            return "function" == typeof t && ((n = t), (t = null)), t && e.send(t), n && e.end(n), e;
          }),
          (l.post = function (e, t, n) {
            e = l("POST", e);
            return "function" == typeof t && ((n = t), (t = null)), t && e.send(t), n && e.end(n), e;
          }),
          (l.put = function (e, t, n) {
            e = l("PUT", e);
            return "function" == typeof t && ((n = t), (t = null)), t && e.send(t), n && e.end(n), e;
          });
      },
      { "./agent-base": 8, "./is-object": 10, "./request-base": 11, "./response-base": 12, "component-emitter": 6 }
    ],
    10: [
      function (e, t, n) {
        "use strict";
        t.exports = function (e) {
          return null !== e && "object" == typeof e;
        };
      },
      {}
    ],
    11: [
      function (e, t, n) {
        "use strict";
        var i = e("./is-object");
        function s(e) {
          if (e)
            return (function (e) {
              for (var t in s.prototype) e[t] = s.prototype[t];
              return e;
            })(e);
        }
        ((t.exports = s).prototype.clearTimeout = function () {
          return (
            clearTimeout(this._timer), clearTimeout(this._responseTimeoutTimer), delete this._timer, delete this._responseTimeoutTimer, this
          );
        }),
          (s.prototype.parse = function (e) {
            return (this._parser = e), this;
          }),
          (s.prototype.responseType = function (e) {
            return (this._responseType = e), this;
          }),
          (s.prototype.serialize = function (e) {
            return (this._serializer = e), this;
          }),
          (s.prototype.timeout = function (e) {
            if (!e || "object" != typeof e) return (this._timeout = e), (this._responseTimeout = 0), this;
            for (var t in e)
              switch (t) {
                case "deadline":
                  this._timeout = e.deadline;
                  break;
                case "response":
                  this._responseTimeout = e.response;
                  break;
                default:
                  console.warn("Unknown timeout option", t);
              }
            return this;
          }),
          (s.prototype.retry = function (e, t) {
            return (
              (this._maxRetries = e = (e = 0 === arguments.length || !0 === e ? 1 : e) <= 0 ? 0 : e),
              (this._retries = 0),
              (this._retryCallback = t),
              this
            );
          });
        var r = ["ECONNRESET", "ETIMEDOUT", "EADDRINFO", "ESOCKETTIMEDOUT"];
        (s.prototype._shouldRetry = function (e, t) {
          if (!this._maxRetries || this._retries++ >= this._maxRetries) return !1;
          if (this._retryCallback)
            try {
              var n = this._retryCallback(e, t);
              if (!0 === n) return !0;
              if (!1 === n) return !1;
            } catch (e) {
              console.error(e);
            }
          if (t && t.status && 500 <= t.status && 501 != t.status) return !0;
          if (e) {
            if (e.code && ~r.indexOf(e.code)) return !0;
            if (e.timeout && "ECONNABORTED" == e.code) return !0;
            if (e.crossDomain) return !0;
          }
          return !1;
        }),
          (s.prototype._retry = function () {
            return (
              this.clearTimeout(),
              this.req && ((this.req = null), (this.req = this.request())),
              (this._aborted = !1),
              (this.timedout = !1),
              this._end()
            );
          }),
          (s.prototype.then = function (e, t) {
            var i;
            return (
              this._fullfilledPromise ||
                ((i = this)._endCalled &&
                  console.warn(
                    "Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises"
                  ),
                (this._fullfilledPromise = new Promise(function (n, s) {
                  i.end(function (e, t) {
                    e ? s(e) : n(t);
                  });
                }))),
              this._fullfilledPromise.then(e, t)
            );
          }),
          (s.prototype.catch = function (e) {
            return this.then(void 0, e);
          }),
          (s.prototype.use = function (e) {
            return e(this), this;
          }),
          (s.prototype.ok = function (e) {
            if ("function" != typeof e) throw Error("Callback required");
            return (this._okCallback = e), this;
          }),
          (s.prototype._isResponseOK = function (e) {
            return !!e && (this._okCallback ? this._okCallback(e) : 200 <= e.status && e.status < 300);
          }),
          (s.prototype.getHeader = s.prototype.get =
            function (e) {
              return this._header[e.toLowerCase()];
            }),
          (s.prototype.set = function (e, t) {
            if (i(e)) {
              for (var n in e) this.set(n, e[n]);
              return this;
            }
            return (this._header[e.toLowerCase()] = t), (this.header[e] = t), this;
          }),
          (s.prototype.unset = function (e) {
            return delete this._header[e.toLowerCase()], delete this.header[e], this;
          }),
          (s.prototype.field = function (e, t) {
            if (null == e) throw new Error(".field(name, val) name can not be empty");
            if (
              (this._data &&
                console.error(".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()"),
              i(e))
            ) {
              for (var n in e) this.field(n, e[n]);
              return this;
            }
            if (Array.isArray(t)) {
              for (var s in t) this.field(e, t[s]);
              return this;
            }
            if (null == t) throw new Error(".field(name, val) val can not be empty");
            return "boolean" == typeof t && (t = "" + t), this._getFormData().append(e, t), this;
          }),
          (s.prototype.abort = function () {
            return (
              this._aborted ||
                ((this._aborted = !0), this.xhr && this.xhr.abort(), this.req && this.req.abort(), this.clearTimeout(), this.emit("abort")),
              this
            );
          }),
          (s.prototype._auth = function (e, t, n, s) {
            switch (n.type) {
              case "basic":
                this.set("Authorization", "Basic " + s(e + ":" + t));
                break;
              case "auto":
                (this.username = e), (this.password = t);
                break;
              case "bearer":
                this.set("Authorization", "Bearer " + e);
            }
            return this;
          }),
          (s.prototype.withCredentials = function (e) {
            return (this._withCredentials = e = null == e ? !0 : e), this;
          }),
          (s.prototype.redirects = function (e) {
            return (this._maxRedirects = e), this;
          }),
          (s.prototype.maxResponseSize = function (e) {
            if ("number" != typeof e) throw TypeError("Invalid argument");
            return (this._maxResponseSize = e), this;
          }),
          (s.prototype.toJSON = function () {
            return { method: this.method, url: this.url, data: this._data, headers: this._header };
          }),
          (s.prototype.send = function (e) {
            var t = i(e),
              n = this._header["content-type"];
            if (
              (this._formData &&
                console.error(
                  ".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()"
                ),
              t && !this._data)
            )
              Array.isArray(e) ? (this._data = []) : this._isHost(e) || (this._data = {});
            else if (e && this._data && this._isHost(this._data)) throw Error("Can't merge these send calls");
            if (t && i(this._data)) for (var s in e) this._data[s] = e[s];
            else
              "string" == typeof e
                ? (n || this.type("form"),
                  (n = this._header["content-type"]),
                  (this._data =
                    "application/x-www-form-urlencoded" == n ? (this._data ? this._data + "&" + e : e) : (this._data || "") + e))
                : (this._data = e);
            return !t || this._isHost(e) || n || this.type("json"), this;
          }),
          (s.prototype.sortQuery = function (e) {
            return (this._sort = void 0 === e || e), this;
          }),
          (s.prototype._finalizeQueryString = function () {
            var e,
              t = this._query.join("&");
            t && (this.url += (0 <= this.url.indexOf("?") ? "&" : "?") + t),
              (this._query.length = 0),
              !this._sort ||
                (0 <= (e = this.url.indexOf("?")) &&
                  ((t = this.url.substring(e + 1).split("&")),
                  "function" == typeof this._sort ? t.sort(this._sort) : t.sort(),
                  (this.url = this.url.substring(0, e) + "?" + t.join("&"))));
          }),
          (s.prototype._appendQueryString = function () {
            console.trace("Unsupported");
          }),
          (s.prototype._timeoutError = function (e, t, n) {
            this._aborted ||
              (((e = new Error(e + t + "ms exceeded")).timeout = t),
              (e.code = "ECONNABORTED"),
              (e.errno = n),
              (this.timedout = !0),
              this.abort(),
              this.callback(e));
          }),
          (s.prototype._setTimeouts = function () {
            var e = this;
            this._timeout &&
              !this._timer &&
              (this._timer = setTimeout(function () {
                e._timeoutError("Timeout of ", e._timeout, "ETIME");
              }, this._timeout)),
              this._responseTimeout &&
                !this._responseTimeoutTimer &&
                (this._responseTimeoutTimer = setTimeout(function () {
                  e._timeoutError("Response timeout of ", e._responseTimeout, "ETIMEDOUT");
                }, this._responseTimeout));
          });
      },
      { "./is-object": 10 }
    ],
    12: [
      function (e, t, n) {
        "use strict";
        var i = e("./utils");
        function s(e) {
          if (e)
            return (function (e) {
              for (var t in s.prototype) e[t] = s.prototype[t];
              return e;
            })(e);
        }
        ((t.exports = s).prototype.get = function (e) {
          return this.header[e.toLowerCase()];
        }),
          (s.prototype._setHeaderProperties = function (e) {
            var t = e["content-type"] || "";
            this.type = i.type(t);
            var n,
              s = i.params(t);
            for (n in s) this[n] = s[n];
            this.links = {};
            try {
              e.link && (this.links = i.parseLinks(e.link));
            } catch (e) {}
          }),
          (s.prototype._setStatusProperties = function (e) {
            var t = (e / 100) | 0;
            (this.status = this.statusCode = e),
              (this.statusType = t),
              (this.info = 1 == t),
              (this.ok = 2 == t),
              (this.redirect = 3 == t),
              (this.clientError = 4 == t),
              (this.serverError = 5 == t),
              (this.error = (4 == t || 5 == t) && this.toError()),
              (this.accepted = 202 == e),
              (this.noContent = 204 == e),
              (this.badRequest = 400 == e),
              (this.unauthorized = 401 == e),
              (this.notAcceptable = 406 == e),
              (this.forbidden = 403 == e),
              (this.notFound = 404 == e);
          });
      },
      { "./utils": 13 }
    ],
    13: [
      function (e, t, n) {
        "use strict";
        (n.type = function (e) {
          return e.split(/ *; */).shift();
        }),
          (n.params = function (e) {
            return e.split(/ *; */).reduce(function (e, t) {
              var n = t.split(/ *= */),
                t = n.shift(),
                n = n.shift();
              return t && n && (e[t] = n), e;
            }, {});
          }),
          (n.parseLinks = function (e) {
            return e.split(/ *, */).reduce(function (e, t) {
              var n = t.split(/ *; */),
                t = n[0].slice(1, -1);
              return (e[n[1].split(/ *= */)[1].slice(1, -1)] = t), e;
            }, {});
          }),
          (n.cleanHeader = function (e, t) {
            return (
              delete e["content-type"], delete e["content-length"], delete e["transfer-encoding"], delete e.host, t && delete e.cookie, e
            );
          });
      },
      {}
    ]
  },
  {},
  [1]
);
