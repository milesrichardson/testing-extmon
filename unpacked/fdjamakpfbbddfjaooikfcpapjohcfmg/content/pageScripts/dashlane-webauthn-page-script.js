(() => {
  var e = {
      954: (e) => {
        (() => {
          "use strict";
          var t,
            n,
            r,
            o = {
              d: (e, t) => {
                for (var n in t) o.o(t, n) && !o.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
              },
              o: (e, t) => Object.prototype.hasOwnProperty.call(e, t),
              r: (e) => {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
                  Object.defineProperty(e, "__esModule", { value: !0 });
              }
            },
            a = {};
          function i(e) {
            return (
              "object" == typeof e &&
              null !== e &&
              "status" in e &&
              "success" === e.status &&
              "value" in e &&
              "object" == typeof e.value &&
              null !== e.value
            );
          }
          function s(e) {
            return (
              i(e) ||
              (function (e) {
                return "object" == typeof e && null !== e && "status" in e && "useFallback" === e.status;
              })(e) ||
              (function (e) {
                return (
                  "object" == typeof e &&
                  null !== e &&
                  "status" in e &&
                  "error" === e.status &&
                  "errorName" in e &&
                  "string" == typeof e.errorName
                );
              })(e)
            );
          }
          o.r(a),
            o.d(a, {
              WebAuthnStatus: () => t,
              WebauthnErrorName: () => n,
              WebauthnOperationType: () => r,
              isWebauthnResult: () => s,
              isWebauthnResultSuccess: () => i
            }),
            (function (e) {
              (e.Success = "Success"), (e.Error = "Error");
            })(t || (t = {})),
            (function (e) {
              (e.NotSupportedError = "NotSupportedError"),
                (e.SecurityError = "SecurityError"),
                (e.NotAllowedError = "NotAllowedError"),
                (e.InvalidStateError = "InvalidStateError"),
                (e.UnknownError = "UnknownError");
            })(n || (n = {})),
            (function (e) {
              (e.Create = "create"), (e.Get = "get");
            })(r || (r = {})),
            (e.exports = a);
        })();
      }
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var a = (t[r] = { exports: {} });
    return e[r](a, a.exports, n), a.exports;
  }
  (() => {
    "use strict";
    var e = n(954);
    const t = "dashlane-content-to-page",
      r = "dashlane-content-ready";
    let o = 0;
    const a = new Promise((e) => {
        const t = () => {
          document.removeEventListener(r, t), e();
        };
        document.addEventListener(r, t);
      }),
      i = async (e, n) => {
        var r;
        return (
          "forward_webauthn_ready" !==
            (null === (r = document.getElementById("dashlane_webauthn")) || void 0 === r ? void 0 : r.getAttribute("name")) && (await a),
          new Promise((r, a) => {
            const i = o + 1;
            o = i;
            const s = (e) => {
              const o = JSON.parse(e.detail);
              ((e, t) =>
                "object" == typeof e && null !== e && "msgId" in e && "number" == typeof e.msgId && "response" in e && t(e.response))(
                o,
                n
              ) &&
                o.msgId === i &&
                (document.removeEventListener(t, s), r(o.response));
            };
            document.addEventListener(t, s);
            const u = new CustomEvent("dashlane-page-to-content", { detail: { msgId: i, message: e } });
            document.dispatchEvent(u);
          })
        );
      },
      s = Math.pow(10, 6),
      u = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    function l(e) {
      const t = e.length,
        n = [];
      for (let r = 0; r < t; r += 3)
        n.push(u[e[r] >> 2]),
          n.push(u[((3 & e[r]) << 4) | (e[r + 1] >> 4)]),
          n.push(u[((15 & e[r + 1]) << 2) | (e[r + 2] >> 6)]),
          n.push(u[63 & e[r + 2]]);
      return n.join("");
    }
    function c(e) {
      return (function (e, t = s) {
        const n = new Uint8Array(e),
          r = n.length,
          o = t % 3,
          a = 0 === o ? t : t + (3 - o),
          i = Math.ceil(r / a);
        let u = "",
          c = -1;
        for (; c++ < i; ) {
          const e = c * a,
            t = c === i - 1 ? r : (c + 1) * a,
            o = l(n.slice(e, t));
          u = u.concat(o);
        }
        return r % 3 == 2 ? u.substring(0, u.length - 1) + "=" : r % 3 == 1 ? u.substring(0, u.length - 2) + "==" : u;
      })(new Uint8Array(e))
        .replace(/\+/g, "-")
        .replace(/\//g, "_")
        .replace(/=/g, "");
    }
    const d = new Uint8Array(256);
    for (let e = 0; e < u.length; e++) d[u.charCodeAt(e)] = e;
    function p(e) {
      const t = e.replace(/-/g, "+").replace(/_/g, "/"),
        n = (4 - (t.length % 4)) % 4;
      return (function (e) {
        let t = 0.75 * e.length;
        const n = e.length;
        let r,
          o,
          a,
          i,
          s,
          u = 0;
        e.endsWith("=") && (t--, "=" === e[e.length - 2] && t--);
        const l = new ArrayBuffer(t),
          c = new Uint8Array(l);
        for (r = 0; r < n; r += 4)
          (o = d[e.charCodeAt(r)]),
            (a = d[e.charCodeAt(r + 1)]),
            (i = d[e.charCodeAt(r + 2)]),
            (s = d[e.charCodeAt(r + 3)]),
            (c[u++] = (o << 2) | (a >> 4)),
            (c[u++] = ((15 & a) << 4) | (i >> 2)),
            (c[u++] = ((3 & i) << 6) | (63 & s));
        return l;
      })(t.padEnd(t.length + n, "="));
    }
    function h(e) {
      return "buffer" in e ? e.buffer : e;
    }
    const f = Object.freeze({ IS_CONDITIONAL_UI_AVAILABLE: "IS_CONDITIONAL_UI_AVAILABLE" });
    function b(t) {
      return (
        "object" == typeof t &&
        null !== t &&
        "function" in t &&
        "webauthn.create" === t.function &&
        "result" in t &&
        (0, e.isWebauthnResult)(t.result)
      );
    }
    function g(t) {
      return (
        "object" == typeof t &&
        null !== t &&
        "function" in t &&
        "webauthn.get" === t.function &&
        "result" in t &&
        (0, e.isWebauthnResult)(t.result)
      );
    }
    function v(e) {
      return (
        "object" == typeof e &&
        null !== e &&
        "function" in e &&
        e.function === f.IS_CONDITIONAL_UI_AVAILABLE &&
        "result" in e &&
        "boolean" == typeof e.result
      );
    }
    const y = {
      [e.WebauthnErrorName.NotSupportedError]: "The operation is not supported",
      [e.WebauthnErrorName.SecurityError]: "The operation is insecure",
      [e.WebauthnErrorName.NotAllowedError]:
        "The request is not allowed by the user agent or the platform in the current context, possibly because the user denied permission",
      [e.WebauthnErrorName.InvalidStateError]: "The object is in an invalid state",
      [e.WebauthnErrorName.UnknownError]: "The operation failed for an unknown transient reason (e.g. out of memory)"
    };
    class m {
      constructor(e) {
        (this._isFallbackForConditionalUI = (e, t) => "conditional" === e && "otherAuthenticator" === t.reason), (this._originals = e);
      }
      async create(e) {
        const t = null == e ? void 0 : e.publicKey;
        if (t) {
          const e = (function (e) {
              var t;
              return {
                function: "webauthn.create",
                param: {
                  ...e,
                  challenge: c(h(e.challenge)),
                  excludeCredentials: (null !== (t = e.excludeCredentials) && void 0 !== t ? t : []).map((e) => ({ ...e, id: c(h(e.id)) })),
                  user: { ...e.user, id: c(h(e.user.id)) }
                }
              };
            })(t),
            n = await i(e, b);
          if ("webauthn.create" === n.function && "useFallback" !== n.result.status) {
            if ("error" === n.result.status) throw new DOMException(y[n.result.errorName], n.result.errorName);
            return (function (e) {
              const t = {
                clientDataJSON: p(e.clientDataJSON),
                attestationObject: p(e.attestationObject),
                getTransports: () => e.transports,
                getPublicKeyAlgorithm: () => e.publicKeyAlgorithm,
                getAuthenticatorData: () => p(e.authenticatorData),
                getPublicKey: () => p(e.publicKey)
              };
              return {
                ...e,
                rawId: p(e.rawId),
                response: t,
                getClientExtensionResults: () => {
                  var t;
                  return null !== (t = e.clientExtensionResults) && void 0 !== t ? t : {};
                }
              };
            })(n.result.value);
          }
        }
        return this._originals.create(e);
      }
      async get(e) {
        const t = null == e ? void 0 : e.mediation,
          n = null == e ? void 0 : e.publicKey;
        if (n) {
          const r = (function (e, t) {
              var n;
              return {
                function: "webauthn.get",
                mediation: t,
                param: {
                  ...e,
                  challenge: c(h(e.challenge)),
                  allowCredentials: (null !== (n = e.allowCredentials) && void 0 !== n ? n : []).map((e) => ({ ...e, id: c(h(e.id)) }))
                }
              };
            })(n, t),
            o = await i(r, g);
          if ("webauthn.get" === o.function) {
            if ("useFallback" !== o.result.status) {
              if ("error" === o.result.status) throw new DOMException(y[o.result.errorName], o.result.errorName);
              return (function (e) {
                const t = {
                  clientDataJSON: p(e.response.clientDataJSON),
                  authenticatorData: p(e.response.authenticatorData),
                  signature: p(e.response.signature),
                  userHandle: e.response.userHandle ? p(e.response.userHandle) : null
                };
                return {
                  ...e,
                  rawId: p(e.rawId),
                  response: t,
                  getClientExtensionResults: () => {
                    var t;
                    return null !== (t = e.clientExtensionResults) && void 0 !== t ? t : {};
                  }
                };
              })(o.result.value);
            }
            this._isFallbackForConditionalUI(t, o.result) && delete e.mediation;
          }
        }
        return this._originals.get(e);
      }
      preventSilentAccess() {
        return this._originals.preventSilentAccess();
      }
      store(e) {
        return this._originals.store(e);
      }
    }
    !(function () {
      var e;
      const t = null === (e = window.PublicKeyCredential) || void 0 === e ? void 0 : e.isConditionalMediationAvailable;
      window.PublicKeyCredential &&
        Object.defineProperty(window.PublicKeyCredential, "isConditionalMediationAvailable", {
          value: async () => {
            const e = { function: f.IS_CONDITIONAL_UI_AVAILABLE };
            return (await i(e, v)).result || (null == t ? void 0 : t());
          }
        });
      try {
        Object.defineProperty(navigator, "credentials", { value: new m(navigator.credentials) });
      } catch (e) {}
    })();
  })();
})();
