/*!
 * © 2016 Avira Operations GmbH & Co. KG. All rights reserved.
 * No part of this extension may be reproduced, stored or transmitted in any
 * form, for any reason or by any means, without the prior permission in writing
 * from the copyright owner. The text, layout, and designs presented are
 * protected by the copyright laws of the United States and international
 * treaties.
 */
!(function e(t, n, r) {
  function o(s, a) {
    if (!n[s]) {
      if (!t[s]) {
        var u = "function" == typeof require && require;
        if (!a && u) return u(s, !0);
        if (i) return i(s, !0);
        var c = new Error("Cannot find module '" + s + "'");
        throw ((c.code = "MODULE_NOT_FOUND"), c);
      }
      var l = (n[s] = { exports: {} });
      t[s][0].call(
        l.exports,
        function (e) {
          return o(t[s][1][e] || e);
        },
        l,
        l.exports,
        e,
        t,
        n,
        r
      );
    }
    return n[s].exports;
  }
  for (var i = "function" == typeof require && require, s = 0; s < r.length; s++) o(r[s]);
  return o;
})(
  {
    1: [
      function (e, t, n) {
        "use strict";
        const r = { getManifest: () => chrome.runtime.getManifest(), getURL: (e) => chrome.runtime.getURL(e) };
        t.exports = r;
      },
      {}
    ],
    2: [
      function (e, t, n) {
        "use strict";
        e("core-js/modules/es6.array.iterator.js"), e("core-js/modules/web.dom.iterable.js");
        const r = e("content/Iframes/IframeTrackerNotification"),
          o = e("content/Iframes/IframeExtPermNotification"),
          i = e("browser_accessors/extensionAccessor"),
          s = e("content/searchEngineScan"),
          a = e("content/DocumentPhishingAnalyzer"),
          { events: u, messenger: c } = window.ABS;
        e("content/pushstate_handler")(() => c.publish("fragmentUpdated")), e("content/search/search");
        const l = (e, t) => (e.isMSE && t && !t.isTrustedSearchEngine) || e.hasUnsafeContent;
        u.on("iframe:removed", ({ isIFrameInserted: e }) => {
          const t = new URL(window.location.href);
          c.publish("Tabs:getData", { classifier: "AUCClassifier" }, (n) => {
            n &&
              c.publish("Mixpanel:track", {
                event: "iFrame removed by website",
                properties: { "iFrame was inserted": e, category: n.category, url: t.href, domain: t.host }
              });
          });
        }),
          c.publish("Tabs:getData", { classifier: "AUCClassifier" }, (e) => {
            e.isMSE && c.publish("MSEStatusDetected", { SearchEngineRegistered: s.getStatus() });
          }),
          c.subscribe("Tabs:change", (e) => {
            const t = e.AUCClassifier;
            t && l(t) && u.emit("iframe:include");
          });
        const f = new Promise((e) => c.publish("Tabs:getData", { classifier: "AUCClassifier" }, e)),
          p = new Promise((e) => c.publish("fetchTabStatuses", null, e));
        Promise.all([f, p]).then(
          ([e, t]) => (
            e && e.isAviraPage && document.body.classList.add("abs-installed"),
            e && l(e, t) && u.emit("iframe:include"),
            c.publish("DNTNotifications:threshold", {}, (e) => {
              if (null == e) return;
              const t = Date.now(),
                n = i.getURL(`html/trackerNotification.html?threshold=${e}&${t}`),
                o = new r(n);
              o.createEl(),
                o.attach(),
                c.publish("updateIframe", { url: n, id: o.id }),
                c.subscribe("closeTrackerNotification", () => o.remove());
            })
          )
        ),
          document.documentElement.lang && c.publish("Adguard:lang", { language: document.documentElement.lang }),
          c.publish("PhishingClassifier:shouldClassify", {}, (e) => {
            if (e) {
              new a(document).analyze((e) => {
                e && c.publish("PhishingClassifier:contentScriptDetection", e);
              });
            }
          });
        c.publish("ExtensionInfo:getShowNofication", {}, (e) => {
          if (!0 === e) {
            const e = new Date().getTime(),
              t = i.getURL(`html/ExtPermNotification.html?#${e}`),
              n = new o(t, "abs-ext-perm-notification", null, { left: "0px", top: "70px", margin: "auto" });
            n.createEl(),
              n.attach(),
              c.subscribe("closeEPNotification", () => {
                n.remove();
              });
          }
        });
      },
      {
        "browser_accessors/extensionAccessor": 1,
        "content/DocumentPhishingAnalyzer": 67,
        "content/Iframes/IframeExtPermNotification": 68,
        "content/Iframes/IframeTrackerNotification": 69,
        "content/pushstate_handler": 71,
        "content/search/search": 81,
        "content/searchEngineScan": 82,
        "core-js/modules/es6.array.iterator.js": 57,
        "core-js/modules/web.dom.iterable.js": 58
      }
    ],
    3: [
      function (e, t, n) {
        (t.exports = function (e) {
          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e;
        }),
          (t.exports.default = t.exports),
          (t.exports.__esModule = !0);
      },
      {}
    ],
    4: [
      function (e, t, n) {
        (t.exports = function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }),
          (t.exports.default = t.exports),
          (t.exports.__esModule = !0);
      },
      {}
    ],
    5: [
      function (e, t, n) {
        function r(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        (t.exports = function (e, t, n) {
          return t && r(e.prototype, t), n && r(e, n), e;
        }),
          (t.exports.default = t.exports),
          (t.exports.__esModule = !0);
      },
      {}
    ],
    6: [
      function (e, t, n) {
        function r(e) {
          return (
            (t.exports = r =
              Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                  }),
            (t.exports.default = t.exports),
            (t.exports.__esModule = !0),
            r(e)
          );
        }
        (t.exports = r), (t.exports.default = t.exports), (t.exports.__esModule = !0);
      },
      {}
    ],
    7: [
      function (e, t, n) {
        var r = e("./setPrototypeOf.js");
        (t.exports = function (e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
          (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && r(e, t);
        }),
          (t.exports.default = t.exports),
          (t.exports.__esModule = !0);
      },
      { "./setPrototypeOf.js": 10 }
    ],
    8: [
      function (e, t, n) {
        (t.exports = function (e) {
          return e && e.__esModule ? e : { default: e };
        }),
          (t.exports.default = t.exports),
          (t.exports.__esModule = !0);
      },
      {}
    ],
    9: [
      function (e, t, n) {
        var r = e("@babel/runtime/helpers/typeof").default,
          o = e("./assertThisInitialized.js");
        (t.exports = function (e, t) {
          return !t || ("object" !== r(t) && "function" != typeof t) ? o(e) : t;
        }),
          (t.exports.default = t.exports),
          (t.exports.__esModule = !0);
      },
      { "./assertThisInitialized.js": 3, "@babel/runtime/helpers/typeof": 11 }
    ],
    10: [
      function (e, t, n) {
        function r(e, n) {
          return (
            (t.exports = r =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e;
              }),
            (t.exports.default = t.exports),
            (t.exports.__esModule = !0),
            r(e, n)
          );
        }
        (t.exports = r), (t.exports.default = t.exports), (t.exports.__esModule = !0);
      },
      {}
    ],
    11: [
      function (e, t, n) {
        function r(e) {
          return (
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? ((t.exports = r =
                  function (e) {
                    return typeof e;
                  }),
                (t.exports.default = t.exports),
                (t.exports.__esModule = !0))
              : ((t.exports = r =
                  function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                  }),
                (t.exports.default = t.exports),
                (t.exports.__esModule = !0)),
            r(e)
          );
        }
        (t.exports = r), (t.exports.default = t.exports), (t.exports.__esModule = !0);
      },
      {}
    ],
    12: [
      function (e, t, n) {
        t.exports = function (e) {
          if ("function" != typeof e) throw TypeError(e + " is not a function!");
          return e;
        };
      },
      {}
    ],
    13: [
      function (e, t, n) {
        var r = e("./_wks")("unscopables"),
          o = Array.prototype;
        null == o[r] && e("./_hide")(o, r, {}),
          (t.exports = function (e) {
            o[r][e] = !0;
          });
      },
      { "./_hide": 28, "./_wks": 56 }
    ],
    14: [
      function (e, t, n) {
        var r = e("./_is-object");
        t.exports = function (e) {
          if (!r(e)) throw TypeError(e + " is not an object!");
          return e;
        };
      },
      { "./_is-object": 32 }
    ],
    15: [
      function (e, t, n) {
        var r = e("./_to-iobject"),
          o = e("./_to-length"),
          i = e("./_to-absolute-index");
        t.exports = function (e) {
          return function (t, n, s) {
            var a,
              u = r(t),
              c = o(u.length),
              l = i(s, c);
            if (e && n != n) {
              for (; c > l; ) if ((a = u[l++]) != a) return !0;
            } else for (; c > l; l++) if ((e || l in u) && u[l] === n) return e || l || 0;
            return !e && -1;
          };
        };
      },
      { "./_to-absolute-index": 49, "./_to-iobject": 51, "./_to-length": 52 }
    ],
    16: [
      function (e, t, n) {
        var r = {}.toString;
        t.exports = function (e) {
          return r.call(e).slice(8, -1);
        };
      },
      {}
    ],
    17: [
      function (e, t, n) {
        var r = (t.exports = { version: "2.6.12" });
        "number" == typeof __e && (__e = r);
      },
      {}
    ],
    18: [
      function (e, t, n) {
        var r = e("./_a-function");
        t.exports = function (e, t, n) {
          if ((r(e), void 0 === t)) return e;
          switch (n) {
            case 1:
              return function (n) {
                return e.call(t, n);
              };
            case 2:
              return function (n, r) {
                return e.call(t, n, r);
              };
            case 3:
              return function (n, r, o) {
                return e.call(t, n, r, o);
              };
          }
          return function () {
            return e.apply(t, arguments);
          };
        };
      },
      { "./_a-function": 12 }
    ],
    19: [
      function (e, t, n) {
        t.exports = function (e) {
          if (null == e) throw TypeError("Can't call method on  " + e);
          return e;
        };
      },
      {}
    ],
    20: [
      function (e, t, n) {
        t.exports = !e("./_fails")(function () {
          return (
            7 !=
            Object.defineProperty({}, "a", {
              get: function () {
                return 7;
              }
            }).a
          );
        });
      },
      { "./_fails": 24 }
    ],
    21: [
      function (e, t, n) {
        var r = e("./_is-object"),
          o = e("./_global").document,
          i = r(o) && r(o.createElement);
        t.exports = function (e) {
          return i ? o.createElement(e) : {};
        };
      },
      { "./_global": 26, "./_is-object": 32 }
    ],
    22: [
      function (e, t, n) {
        t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
      },
      {}
    ],
    23: [
      function (e, t, n) {
        var r = e("./_global"),
          o = e("./_core"),
          i = e("./_hide"),
          s = e("./_redefine"),
          a = e("./_ctx"),
          u = function (e, t, n) {
            var c,
              l,
              f,
              p,
              h = e & u.F,
              d = e & u.G,
              _ = e & u.S,
              b = e & u.P,
              v = e & u.B,
              g = d ? r : _ ? r[t] || (r[t] = {}) : (r[t] || {}).prototype,
              y = d ? o : o[t] || (o[t] = {}),
              m = y.prototype || (y.prototype = {});
            for (c in (d && (n = t), n))
              (f = ((l = !h && g && void 0 !== g[c]) ? g : n)[c]),
                (p = v && l ? a(f, r) : b && "function" == typeof f ? a(Function.call, f) : f),
                g && s(g, c, f, e & u.U),
                y[c] != f && i(y, c, p),
                b && m[c] != f && (m[c] = f);
          };
        (r.core = o), (u.F = 1), (u.G = 2), (u.S = 4), (u.P = 8), (u.B = 16), (u.W = 32), (u.U = 64), (u.R = 128), (t.exports = u);
      },
      { "./_core": 17, "./_ctx": 18, "./_global": 26, "./_hide": 28, "./_redefine": 45 }
    ],
    24: [
      function (e, t, n) {
        t.exports = function (e) {
          try {
            return !!e();
          } catch (e) {
            return !0;
          }
        };
      },
      {}
    ],
    25: [
      function (e, t, n) {
        t.exports = e("./_shared")("native-function-to-string", Function.toString);
      },
      { "./_shared": 48 }
    ],
    26: [
      function (e, t, n) {
        var r = (t.exports =
          "undefined" != typeof window && window.Math == Math
            ? window
            : "undefined" != typeof self && self.Math == Math
            ? self
            : Function("return this")());
        "number" == typeof __g && (__g = r);
      },
      {}
    ],
    27: [
      function (e, t, n) {
        var r = {}.hasOwnProperty;
        t.exports = function (e, t) {
          return r.call(e, t);
        };
      },
      {}
    ],
    28: [
      function (e, t, n) {
        var r = e("./_object-dp"),
          o = e("./_property-desc");
        t.exports = e("./_descriptors")
          ? function (e, t, n) {
              return r.f(e, t, o(1, n));
            }
          : function (e, t, n) {
              return (e[t] = n), e;
            };
      },
      { "./_descriptors": 20, "./_object-dp": 39, "./_property-desc": 44 }
    ],
    29: [
      function (e, t, n) {
        var r = e("./_global").document;
        t.exports = r && r.documentElement;
      },
      { "./_global": 26 }
    ],
    30: [
      function (e, t, n) {
        t.exports =
          !e("./_descriptors") &&
          !e("./_fails")(function () {
            return (
              7 !=
              Object.defineProperty(e("./_dom-create")("div"), "a", {
                get: function () {
                  return 7;
                }
              }).a
            );
          });
      },
      { "./_descriptors": 20, "./_dom-create": 21, "./_fails": 24 }
    ],
    31: [
      function (e, t, n) {
        var r = e("./_cof");
        t.exports = Object("z").propertyIsEnumerable(0)
          ? Object
          : function (e) {
              return "String" == r(e) ? e.split("") : Object(e);
            };
      },
      { "./_cof": 16 }
    ],
    32: [
      function (e, t, n) {
        t.exports = function (e) {
          return "object" == typeof e ? null !== e : "function" == typeof e;
        };
      },
      {}
    ],
    33: [
      function (e, t, n) {
        "use strict";
        var r = e("./_object-create"),
          o = e("./_property-desc"),
          i = e("./_set-to-string-tag"),
          s = {};
        e("./_hide")(s, e("./_wks")("iterator"), function () {
          return this;
        }),
          (t.exports = function (e, t, n) {
            (e.prototype = r(s, { next: o(1, n) })), i(e, t + " Iterator");
          });
      },
      { "./_hide": 28, "./_object-create": 38, "./_property-desc": 44, "./_set-to-string-tag": 46, "./_wks": 56 }
    ],
    34: [
      function (e, t, n) {
        "use strict";
        var r = e("./_library"),
          o = e("./_export"),
          i = e("./_redefine"),
          s = e("./_hide"),
          a = e("./_iterators"),
          u = e("./_iter-create"),
          c = e("./_set-to-string-tag"),
          l = e("./_object-gpo"),
          f = e("./_wks")("iterator"),
          p = !([].keys && "next" in [].keys()),
          h = "keys",
          d = "values",
          _ = function () {
            return this;
          };
        t.exports = function (e, t, n, b, v, g, y) {
          u(n, t, b);
          var m,
            x,
            w,
            S = function (e) {
              if (!p && e in E) return E[e];
              switch (e) {
                case h:
                case d:
                  return function () {
                    return new n(this, e);
                  };
              }
              return function () {
                return new n(this, e);
              };
            },
            j = t + " Iterator",
            k = v == d,
            O = !1,
            E = e.prototype,
            C = E[f] || E["@@iterator"] || (v && E[v]),
            M = C || S(v),
            T = v ? (k ? S("entries") : M) : void 0,
            R = ("Array" == t && E.entries) || C;
          if (
            (R && (w = l(R.call(new e()))) !== Object.prototype && w.next && (c(w, j, !0), r || "function" == typeof w[f] || s(w, f, _)),
            k &&
              C &&
              C.name !== d &&
              ((O = !0),
              (M = function () {
                return C.call(this);
              })),
            (r && !y) || (!p && !O && E[f]) || s(E, f, M),
            (a[t] = M),
            (a[j] = _),
            v)
          )
            if (((m = { values: k ? M : S(d), keys: g ? M : S(h), entries: T }), y)) for (x in m) x in E || i(E, x, m[x]);
            else o(o.P + o.F * (p || O), t, m);
          return m;
        };
      },
      {
        "./_export": 23,
        "./_hide": 28,
        "./_iter-create": 33,
        "./_iterators": 36,
        "./_library": 37,
        "./_object-gpo": 41,
        "./_redefine": 45,
        "./_set-to-string-tag": 46,
        "./_wks": 56
      }
    ],
    35: [
      function (e, t, n) {
        t.exports = function (e, t) {
          return { value: t, done: !!e };
        };
      },
      {}
    ],
    36: [
      function (e, t, n) {
        t.exports = {};
      },
      {}
    ],
    37: [
      function (e, t, n) {
        t.exports = !1;
      },
      {}
    ],
    38: [
      function (e, t, n) {
        var r = e("./_an-object"),
          o = e("./_object-dps"),
          i = e("./_enum-bug-keys"),
          s = e("./_shared-key")("IE_PROTO"),
          a = function () {},
          u = function () {
            var t,
              n = e("./_dom-create")("iframe"),
              r = i.length;
            for (
              n.style.display = "none",
                e("./_html").appendChild(n),
                n.src = "javascript:",
                (t = n.contentWindow.document).open(),
                t.write("<script>document.F=Object</script>"),
                t.close(),
                u = t.F;
              r--;

            )
              delete u.prototype[i[r]];
            return u();
          };
        t.exports =
          Object.create ||
          function (e, t) {
            var n;
            return (
              null !== e ? ((a.prototype = r(e)), (n = new a()), (a.prototype = null), (n[s] = e)) : (n = u()), void 0 === t ? n : o(n, t)
            );
          };
      },
      { "./_an-object": 14, "./_dom-create": 21, "./_enum-bug-keys": 22, "./_html": 29, "./_object-dps": 40, "./_shared-key": 47 }
    ],
    39: [
      function (e, t, n) {
        var r = e("./_an-object"),
          o = e("./_ie8-dom-define"),
          i = e("./_to-primitive"),
          s = Object.defineProperty;
        n.f = e("./_descriptors")
          ? Object.defineProperty
          : function (e, t, n) {
              if ((r(e), (t = i(t, !0)), r(n), o))
                try {
                  return s(e, t, n);
                } catch (e) {}
              if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
              return "value" in n && (e[t] = n.value), e;
            };
      },
      { "./_an-object": 14, "./_descriptors": 20, "./_ie8-dom-define": 30, "./_to-primitive": 54 }
    ],
    40: [
      function (e, t, n) {
        var r = e("./_object-dp"),
          o = e("./_an-object"),
          i = e("./_object-keys");
        t.exports = e("./_descriptors")
          ? Object.defineProperties
          : function (e, t) {
              o(e);
              for (var n, s = i(t), a = s.length, u = 0; a > u; ) r.f(e, (n = s[u++]), t[n]);
              return e;
            };
      },
      { "./_an-object": 14, "./_descriptors": 20, "./_object-dp": 39, "./_object-keys": 43 }
    ],
    41: [
      function (e, t, n) {
        var r = e("./_has"),
          o = e("./_to-object"),
          i = e("./_shared-key")("IE_PROTO"),
          s = Object.prototype;
        t.exports =
          Object.getPrototypeOf ||
          function (e) {
            return (
              (e = o(e)),
              r(e, i)
                ? e[i]
                : "function" == typeof e.constructor && e instanceof e.constructor
                ? e.constructor.prototype
                : e instanceof Object
                ? s
                : null
            );
          };
      },
      { "./_has": 27, "./_shared-key": 47, "./_to-object": 53 }
    ],
    42: [
      function (e, t, n) {
        var r = e("./_has"),
          o = e("./_to-iobject"),
          i = e("./_array-includes")(!1),
          s = e("./_shared-key")("IE_PROTO");
        t.exports = function (e, t) {
          var n,
            a = o(e),
            u = 0,
            c = [];
          for (n in a) n != s && r(a, n) && c.push(n);
          for (; t.length > u; ) r(a, (n = t[u++])) && (~i(c, n) || c.push(n));
          return c;
        };
      },
      { "./_array-includes": 15, "./_has": 27, "./_shared-key": 47, "./_to-iobject": 51 }
    ],
    43: [
      function (e, t, n) {
        var r = e("./_object-keys-internal"),
          o = e("./_enum-bug-keys");
        t.exports =
          Object.keys ||
          function (e) {
            return r(e, o);
          };
      },
      { "./_enum-bug-keys": 22, "./_object-keys-internal": 42 }
    ],
    44: [
      function (e, t, n) {
        t.exports = function (e, t) {
          return { enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t };
        };
      },
      {}
    ],
    45: [
      function (e, t, n) {
        var r = e("./_global"),
          o = e("./_hide"),
          i = e("./_has"),
          s = e("./_uid")("src"),
          a = e("./_function-to-string"),
          u = "toString",
          c = ("" + a).split(u);
        (e("./_core").inspectSource = function (e) {
          return a.call(e);
        }),
          (t.exports = function (e, t, n, a) {
            var u = "function" == typeof n;
            u && (i(n, "name") || o(n, "name", t)),
              e[t] !== n &&
                (u && (i(n, s) || o(n, s, e[t] ? "" + e[t] : c.join(String(t)))),
                e === r ? (e[t] = n) : a ? (e[t] ? (e[t] = n) : o(e, t, n)) : (delete e[t], o(e, t, n)));
          })(Function.prototype, u, function () {
            return ("function" == typeof this && this[s]) || a.call(this);
          });
      },
      { "./_core": 17, "./_function-to-string": 25, "./_global": 26, "./_has": 27, "./_hide": 28, "./_uid": 55 }
    ],
    46: [
      function (e, t, n) {
        var r = e("./_object-dp").f,
          o = e("./_has"),
          i = e("./_wks")("toStringTag");
        t.exports = function (e, t, n) {
          e && !o((e = n ? e : e.prototype), i) && r(e, i, { configurable: !0, value: t });
        };
      },
      { "./_has": 27, "./_object-dp": 39, "./_wks": 56 }
    ],
    47: [
      function (e, t, n) {
        var r = e("./_shared")("keys"),
          o = e("./_uid");
        t.exports = function (e) {
          return r[e] || (r[e] = o(e));
        };
      },
      { "./_shared": 48, "./_uid": 55 }
    ],
    48: [
      function (e, t, n) {
        var r = e("./_core"),
          o = e("./_global"),
          i = "__core-js_shared__",
          s = o[i] || (o[i] = {});
        (t.exports = function (e, t) {
          return s[e] || (s[e] = void 0 !== t ? t : {});
        })("versions", []).push({
          version: r.version,
          mode: e("./_library") ? "pure" : "global",
          copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
        });
      },
      { "./_core": 17, "./_global": 26, "./_library": 37 }
    ],
    49: [
      function (e, t, n) {
        var r = e("./_to-integer"),
          o = Math.max,
          i = Math.min;
        t.exports = function (e, t) {
          return (e = r(e)) < 0 ? o(e + t, 0) : i(e, t);
        };
      },
      { "./_to-integer": 50 }
    ],
    50: [
      function (e, t, n) {
        var r = Math.ceil,
          o = Math.floor;
        t.exports = function (e) {
          return isNaN((e = +e)) ? 0 : (e > 0 ? o : r)(e);
        };
      },
      {}
    ],
    51: [
      function (e, t, n) {
        var r = e("./_iobject"),
          o = e("./_defined");
        t.exports = function (e) {
          return r(o(e));
        };
      },
      { "./_defined": 19, "./_iobject": 31 }
    ],
    52: [
      function (e, t, n) {
        var r = e("./_to-integer"),
          o = Math.min;
        t.exports = function (e) {
          return e > 0 ? o(r(e), 9007199254740991) : 0;
        };
      },
      { "./_to-integer": 50 }
    ],
    53: [
      function (e, t, n) {
        var r = e("./_defined");
        t.exports = function (e) {
          return Object(r(e));
        };
      },
      { "./_defined": 19 }
    ],
    54: [
      function (e, t, n) {
        var r = e("./_is-object");
        t.exports = function (e, t) {
          if (!r(e)) return e;
          var n, o;
          if (t && "function" == typeof (n = e.toString) && !r((o = n.call(e)))) return o;
          if ("function" == typeof (n = e.valueOf) && !r((o = n.call(e)))) return o;
          if (!t && "function" == typeof (n = e.toString) && !r((o = n.call(e)))) return o;
          throw TypeError("Can't convert object to primitive value");
        };
      },
      { "./_is-object": 32 }
    ],
    55: [
      function (e, t, n) {
        var r = 0,
          o = Math.random();
        t.exports = function (e) {
          return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++r + o).toString(36));
        };
      },
      {}
    ],
    56: [
      function (e, t, n) {
        var r = e("./_shared")("wks"),
          o = e("./_uid"),
          i = e("./_global").Symbol,
          s = "function" == typeof i;
        (t.exports = function (e) {
          return r[e] || (r[e] = (s && i[e]) || (s ? i : o)("Symbol." + e));
        }).store = r;
      },
      { "./_global": 26, "./_shared": 48, "./_uid": 55 }
    ],
    57: [
      function (e, t, n) {
        "use strict";
        var r = e("./_add-to-unscopables"),
          o = e("./_iter-step"),
          i = e("./_iterators"),
          s = e("./_to-iobject");
        (t.exports = e("./_iter-define")(
          Array,
          "Array",
          function (e, t) {
            (this._t = s(e)), (this._i = 0), (this._k = t);
          },
          function () {
            var e = this._t,
              t = this._k,
              n = this._i++;
            return !e || n >= e.length ? ((this._t = void 0), o(1)) : o(0, "keys" == t ? n : "values" == t ? e[n] : [n, e[n]]);
          },
          "values"
        )),
          (i.Arguments = i.Array),
          r("keys"),
          r("values"),
          r("entries");
      },
      { "./_add-to-unscopables": 13, "./_iter-define": 34, "./_iter-step": 35, "./_iterators": 36, "./_to-iobject": 51 }
    ],
    58: [
      function (e, t, n) {
        for (
          var r = e("./es6.array.iterator"),
            o = e("./_object-keys"),
            i = e("./_redefine"),
            s = e("./_global"),
            a = e("./_hide"),
            u = e("./_iterators"),
            c = e("./_wks"),
            l = c("iterator"),
            f = c("toStringTag"),
            p = u.Array,
            h = {
              CSSRuleList: !0,
              CSSStyleDeclaration: !1,
              CSSValueList: !1,
              ClientRectList: !1,
              DOMRectList: !1,
              DOMStringList: !1,
              DOMTokenList: !0,
              DataTransferItemList: !1,
              FileList: !1,
              HTMLAllCollection: !1,
              HTMLCollection: !1,
              HTMLFormElement: !1,
              HTMLSelectElement: !1,
              MediaList: !0,
              MimeTypeArray: !1,
              NamedNodeMap: !1,
              NodeList: !0,
              PaintRequestList: !1,
              Plugin: !1,
              PluginArray: !1,
              SVGLengthList: !1,
              SVGNumberList: !1,
              SVGPathSegList: !1,
              SVGPointList: !1,
              SVGStringList: !1,
              SVGTransformList: !1,
              SourceBufferList: !1,
              StyleSheetList: !0,
              TextTrackCueList: !1,
              TextTrackList: !1,
              TouchList: !1
            },
            d = o(h),
            _ = 0;
          _ < d.length;
          _++
        ) {
          var b,
            v = d[_],
            g = h[v],
            y = s[v],
            m = y && y.prototype;
          if (m && (m[l] || a(m, l, p), m[f] || a(m, f, v), (u[v] = p), g)) for (b in r) m[b] || i(m, b, r[b], !0);
        }
      },
      {
        "./_global": 26,
        "./_hide": 28,
        "./_iterators": 36,
        "./_object-keys": 43,
        "./_redefine": 45,
        "./_wks": 56,
        "./es6.array.iterator": 57
      }
    ],
    59: [
      function (e, t, n) {
        "use strict";
        t.exports = e("./src/ContentMessenger");
      },
      { "./src/ContentMessenger": 60 }
    ],
    60: [
      function (e, t, n) {
        "use strict";
        var r = e("@babel/runtime/helpers/interopRequireDefault"),
          o = r(e("@babel/runtime/helpers/classCallCheck")),
          i = r(e("@babel/runtime/helpers/createClass")),
          s = r(e("@babel/runtime/helpers/assertThisInitialized")),
          a = r(e("@babel/runtime/helpers/inherits")),
          u = r(e("@babel/runtime/helpers/possibleConstructorReturn")),
          c = r(e("@babel/runtime/helpers/getPrototypeOf"));
        function l(e) {
          var t = (function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
            } catch (e) {
              return !1;
            }
          })();
          return function () {
            var n,
              r = (0, c.default)(e);
            if (t) {
              var o = (0, c.default)(this).constructor;
              n = Reflect.construct(r, arguments, o);
            } else n = r.apply(this, arguments);
            return (0, u.default)(this, n);
          };
        }
        var f = e("./Messenger"),
          p = e("./ContentTopic"),
          h = e("./chrome"),
          d = (function (e) {
            (0, a.default)(n, e);
            var t = l(n);
            function n() {
              var e;
              (0, o.default)(this, n);
              var r = (e = t.call(this, p))._onMessage.bind((0, s.default)(e));
              return (
                h.runtime.onMessage.addListener(r),
                window.addEventListener("unload", function () {
                  h.runtime.onMessage.removeListener(r);
                }),
                h.runtime.connect({ name: "ContentMessenger" }).onDisconnect.addListener(e._onDisconnect.bind((0, s.default)(e))),
                e
              );
            }
            return (
              (0, i.default)(n, [
                {
                  key: "_onMessage",
                  value: function (e, t, n) {
                    if (!t.tab && e.publish) {
                      var r = this._getTopic(e.publish);
                      r && r.publish(e.message, n);
                    }
                    return !0;
                  }
                },
                {
                  key: "_onDisconnect",
                  value: function () {
                    var e = this._getTopic("Background:closed");
                    e && e.publish();
                  }
                },
                {
                  key: "publish",
                  value: function (e, t, n) {
                    var r = 10;
                    !(function o() {
                      h.runtime.sendMessage({ publish: e, message: t }, function (e) {
                        var t = h.runtime.lastError;
                        t && "Could not establish connection. Receiving end does not exist." === t.message
                          ? (r -= 1) && setTimeout(o, 50)
                          : "function" == typeof n && n(e);
                      });
                    })();
                  }
                }
              ]),
              n
            );
          })(f);
        t.exports = d;
      },
      {
        "./ContentTopic": 61,
        "./Messenger": 62,
        "./chrome": 64,
        "@babel/runtime/helpers/assertThisInitialized": 3,
        "@babel/runtime/helpers/classCallCheck": 4,
        "@babel/runtime/helpers/createClass": 5,
        "@babel/runtime/helpers/getPrototypeOf": 6,
        "@babel/runtime/helpers/inherits": 7,
        "@babel/runtime/helpers/interopRequireDefault": 8,
        "@babel/runtime/helpers/possibleConstructorReturn": 9
      }
    ],
    61: [
      function (e, t, n) {
        "use strict";
        var r = e("@babel/runtime/helpers/interopRequireDefault"),
          o = r(e("@babel/runtime/helpers/classCallCheck")),
          i = r(e("@babel/runtime/helpers/inherits")),
          s = r(e("@babel/runtime/helpers/possibleConstructorReturn")),
          a = r(e("@babel/runtime/helpers/getPrototypeOf"));
        function u(e) {
          var t = (function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
            } catch (e) {
              return !1;
            }
          })();
          return function () {
            var n,
              r = (0, a.default)(e);
            if (t) {
              var o = (0, a.default)(this).constructor;
              n = Reflect.construct(r, arguments, o);
            } else n = r.apply(this, arguments);
            return (0, s.default)(this, n);
          };
        }
        var c = e("./Topic"),
          l = e("./chrome"),
          f = (function (e) {
            (0, i.default)(n, e);
            var t = u(n);
            function n(e) {
              var r;
              return (0, o.default)(this, n), (r = t.call(this, e)), l.runtime.sendMessage({ subscribe: e }), r;
            }
            return n;
          })(c);
        t.exports = f;
      },
      {
        "./Topic": 63,
        "./chrome": 64,
        "@babel/runtime/helpers/classCallCheck": 4,
        "@babel/runtime/helpers/getPrototypeOf": 6,
        "@babel/runtime/helpers/inherits": 7,
        "@babel/runtime/helpers/interopRequireDefault": 8,
        "@babel/runtime/helpers/possibleConstructorReturn": 9
      }
    ],
    62: [
      function (e, t, n) {
        "use strict";
        var r = e("@babel/runtime/helpers/interopRequireDefault"),
          o = r(e("@babel/runtime/helpers/classCallCheck")),
          i = r(e("@babel/runtime/helpers/createClass")),
          s = (function () {
            function e(t) {
              (0, o.default)(this, e), (this._topicClass = t), (this._topics = {});
            }
            return (
              (0, i.default)(
                e,
                [
                  {
                    key: "_getTopic",
                    value: function (e, t) {
                      var n = this._topics[e];
                      return !n && t && (this._topics[e] = n = new this._topicClass(e)), n;
                    }
                  },
                  {
                    key: "subscribe",
                    value: function (e, t) {
                      this._getTopic(e, !0).subscribe(t);
                    }
                  },
                  {
                    key: "publish",
                    value: function (e, t, n, r) {
                      var o = this._getTopic(e);
                      o && o.publish(t, n, r);
                    }
                  }
                ],
                [
                  {
                    key: "getInstance",
                    value: function () {
                      return this._instance || (this._instance = new this()), this._instance;
                    }
                  }
                ]
              ),
              e
            );
          })();
        t.exports = s;
      },
      {
        "@babel/runtime/helpers/classCallCheck": 4,
        "@babel/runtime/helpers/createClass": 5,
        "@babel/runtime/helpers/interopRequireDefault": 8
      }
    ],
    63: [
      function (e, t, n) {
        "use strict";
        var r = e("@babel/runtime/helpers/interopRequireDefault"),
          o = r(e("@babel/runtime/helpers/classCallCheck")),
          i = r(e("@babel/runtime/helpers/createClass")),
          s = (function () {
            function e(t) {
              (0, o.default)(this, e), (this._name = t), (this._callbacks = []);
            }
            return (
              (0, i.default)(e, [
                {
                  key: "publish",
                  value: function (e, t) {
                    var n = this._wrapCallback(t);
                    this._callbacks.forEach(function (t) {
                      return t(e, n);
                    });
                  }
                },
                {
                  key: "_wrapCallback",
                  value: function (e) {
                    return null == e
                      ? e
                      : function () {
                          try {
                            e.apply(void 0, arguments);
                          } catch (e) {
                            if ("Attempting to use a disconnected port object" !== e.message) throw e;
                          }
                        };
                  }
                },
                {
                  key: "subscribe",
                  value: function (e) {
                    this._callbacks.push(e);
                  }
                }
              ]),
              e
            );
          })();
        t.exports = s;
      },
      {
        "@babel/runtime/helpers/classCallCheck": 4,
        "@babel/runtime/helpers/createClass": 5,
        "@babel/runtime/helpers/interopRequireDefault": 8
      }
    ],
    64: [
      function (e, t, n) {
        "use strict";
        "undefined" != typeof browser && browser.runtime ? (t.exports = browser) : (t.exports = chrome);
      },
      {}
    ],
    65: [
      function (e, t, n) {
        (function (e) {
          (function () {
            !(function (e, r) {
              "object" == typeof n && void 0 !== t
                ? (t.exports = r())
                : "function" == typeof define && define.amd
                ? define("underscore", r)
                : ((e = "undefined" != typeof globalThis ? globalThis : e || self),
                  (function () {
                    var t = e._,
                      n = (e._ = r());
                    n.noConflict = function () {
                      return (e._ = t), n;
                    };
                  })());
            })(this, function () {
              var t = "1.13.1",
                n =
                  ("object" == typeof self && self.self === self && self) ||
                  ("object" == typeof e && e.global === e && e) ||
                  Function("return this")() ||
                  {},
                r = Array.prototype,
                o = Object.prototype,
                i = "undefined" != typeof Symbol ? Symbol.prototype : null,
                s = r.push,
                a = r.slice,
                u = o.toString,
                c = o.hasOwnProperty,
                l = "undefined" != typeof ArrayBuffer,
                f = "undefined" != typeof DataView,
                p = Array.isArray,
                h = Object.keys,
                d = Object.create,
                _ = l && ArrayBuffer.isView,
                b = isNaN,
                v = isFinite,
                g = !{ toString: null }.propertyIsEnumerable("toString"),
                y = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"],
                m = Math.pow(2, 53) - 1;
              function x(e, t) {
                return (
                  (t = null == t ? e.length - 1 : +t),
                  function () {
                    for (var n = Math.max(arguments.length - t, 0), r = Array(n), o = 0; o < n; o++) r[o] = arguments[o + t];
                    switch (t) {
                      case 0:
                        return e.call(this, r);
                      case 1:
                        return e.call(this, arguments[0], r);
                      case 2:
                        return e.call(this, arguments[0], arguments[1], r);
                    }
                    var i = Array(t + 1);
                    for (o = 0; o < t; o++) i[o] = arguments[o];
                    return (i[t] = r), e.apply(this, i);
                  }
                );
              }
              function w(e) {
                var t = typeof e;
                return "function" === t || ("object" === t && !!e);
              }
              function S(e) {
                return void 0 === e;
              }
              function j(e) {
                return !0 === e || !1 === e || "[object Boolean]" === u.call(e);
              }
              function k(e) {
                var t = "[object " + e + "]";
                return function (e) {
                  return u.call(e) === t;
                };
              }
              var O = k("String"),
                E = k("Number"),
                C = k("Date"),
                M = k("RegExp"),
                T = k("Error"),
                R = k("Symbol"),
                P = k("ArrayBuffer"),
                A = k("Function"),
                L = n.document && n.document.childNodes;
              "function" != typeof /./ &&
                "object" != typeof Int8Array &&
                "function" != typeof L &&
                (A = function (e) {
                  return "function" == typeof e || !1;
                });
              var I = A,
                D = k("Object"),
                N = f && D(new DataView(new ArrayBuffer(8))),
                B = "undefined" != typeof Map && D(new Map()),
                F = k("DataView");
              var U = N
                  ? function (e) {
                      return null != e && I(e.getInt8) && P(e.buffer);
                    }
                  : F,
                z = p || k("Array");
              function q(e, t) {
                return null != e && c.call(e, t);
              }
              var V = k("Arguments");
              !(function () {
                V(arguments) ||
                  (V = function (e) {
                    return q(e, "callee");
                  });
              })();
              var G = V;
              function W(e) {
                return E(e) && b(e);
              }
              function $(e) {
                return function () {
                  return e;
                };
              }
              function H(e) {
                return function (t) {
                  var n = e(t);
                  return "number" == typeof n && n >= 0 && n <= m;
                };
              }
              function K(e) {
                return function (t) {
                  return null == t ? void 0 : t[e];
                };
              }
              var Y = K("byteLength"),
                J = H(Y),
                Q = /\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/;
              var X = l
                  ? function (e) {
                      return _ ? _(e) && !U(e) : J(e) && Q.test(u.call(e));
                    }
                  : $(!1),
                Z = K("length");
              function ee(e, t) {
                t = (function (e) {
                  for (var t = {}, n = e.length, r = 0; r < n; ++r) t[e[r]] = !0;
                  return {
                    contains: function (e) {
                      return t[e];
                    },
                    push: function (n) {
                      return (t[n] = !0), e.push(n);
                    }
                  };
                })(t);
                var n = y.length,
                  r = e.constructor,
                  i = (I(r) && r.prototype) || o,
                  s = "constructor";
                for (q(e, s) && !t.contains(s) && t.push(s); n--; ) (s = y[n]) in e && e[s] !== i[s] && !t.contains(s) && t.push(s);
              }
              function te(e) {
                if (!w(e)) return [];
                if (h) return h(e);
                var t = [];
                for (var n in e) q(e, n) && t.push(n);
                return g && ee(e, t), t;
              }
              function ne(e, t) {
                var n = te(t),
                  r = n.length;
                if (null == e) return !r;
                for (var o = Object(e), i = 0; i < r; i++) {
                  var s = n[i];
                  if (t[s] !== o[s] || !(s in o)) return !1;
                }
                return !0;
              }
              function re(e) {
                return e instanceof re ? e : this instanceof re ? void (this._wrapped = e) : new re(e);
              }
              function oe(e) {
                return new Uint8Array(e.buffer || e, e.byteOffset || 0, Y(e));
              }
              (re.VERSION = t),
                (re.prototype.value = function () {
                  return this._wrapped;
                }),
                (re.prototype.valueOf = re.prototype.toJSON = re.prototype.value),
                (re.prototype.toString = function () {
                  return String(this._wrapped);
                });
              var ie = "[object DataView]";
              function se(e, t, n, r) {
                if (e === t) return 0 !== e || 1 / e == 1 / t;
                if (null == e || null == t) return !1;
                if (e != e) return t != t;
                var o = typeof e;
                return ("function" === o || "object" === o || "object" == typeof t) && ae(e, t, n, r);
              }
              function ae(e, t, n, r) {
                e instanceof re && (e = e._wrapped), t instanceof re && (t = t._wrapped);
                var o = u.call(e);
                if (o !== u.call(t)) return !1;
                if (N && "[object Object]" == o && U(e)) {
                  if (!U(t)) return !1;
                  o = ie;
                }
                switch (o) {
                  case "[object RegExp]":
                  case "[object String]":
                    return "" + e == "" + t;
                  case "[object Number]":
                    return +e != +e ? +t != +t : 0 == +e ? 1 / +e == 1 / t : +e == +t;
                  case "[object Date]":
                  case "[object Boolean]":
                    return +e == +t;
                  case "[object Symbol]":
                    return i.valueOf.call(e) === i.valueOf.call(t);
                  case "[object ArrayBuffer]":
                  case ie:
                    return ae(oe(e), oe(t), n, r);
                }
                var s = "[object Array]" === o;
                if (!s && X(e)) {
                  if (Y(e) !== Y(t)) return !1;
                  if (e.buffer === t.buffer && e.byteOffset === t.byteOffset) return !0;
                  s = !0;
                }
                if (!s) {
                  if ("object" != typeof e || "object" != typeof t) return !1;
                  var a = e.constructor,
                    c = t.constructor;
                  if (a !== c && !(I(a) && a instanceof a && I(c) && c instanceof c) && "constructor" in e && "constructor" in t) return !1;
                }
                r = r || [];
                for (var l = (n = n || []).length; l--; ) if (n[l] === e) return r[l] === t;
                if ((n.push(e), r.push(t), s)) {
                  if ((l = e.length) !== t.length) return !1;
                  for (; l--; ) if (!se(e[l], t[l], n, r)) return !1;
                } else {
                  var f,
                    p = te(e);
                  if (((l = p.length), te(t).length !== l)) return !1;
                  for (; l--; ) if (!q(t, (f = p[l])) || !se(e[f], t[f], n, r)) return !1;
                }
                return n.pop(), r.pop(), !0;
              }
              function ue(e) {
                if (!w(e)) return [];
                var t = [];
                for (var n in e) t.push(n);
                return g && ee(e, t), t;
              }
              function ce(e) {
                var t = Z(e);
                return function (n) {
                  if (null == n) return !1;
                  var r = ue(n);
                  if (Z(r)) return !1;
                  for (var o = 0; o < t; o++) if (!I(n[e[o]])) return !1;
                  return e !== de || !I(n[le]);
                };
              }
              var le = "forEach",
                fe = ["clear", "delete"],
                pe = ["get", "has", "set"],
                he = fe.concat(le, pe),
                de = fe.concat(pe),
                _e = ["add"].concat(fe, le, "has"),
                be = B ? ce(he) : k("Map"),
                ve = B ? ce(de) : k("WeakMap"),
                ge = B ? ce(_e) : k("Set"),
                ye = k("WeakSet");
              function me(e) {
                for (var t = te(e), n = t.length, r = Array(n), o = 0; o < n; o++) r[o] = e[t[o]];
                return r;
              }
              function xe(e) {
                for (var t = {}, n = te(e), r = 0, o = n.length; r < o; r++) t[e[n[r]]] = n[r];
                return t;
              }
              function we(e) {
                var t = [];
                for (var n in e) I(e[n]) && t.push(n);
                return t.sort();
              }
              function Se(e, t) {
                return function (n) {
                  var r = arguments.length;
                  if ((t && (n = Object(n)), r < 2 || null == n)) return n;
                  for (var o = 1; o < r; o++)
                    for (var i = arguments[o], s = e(i), a = s.length, u = 0; u < a; u++) {
                      var c = s[u];
                      (t && void 0 !== n[c]) || (n[c] = i[c]);
                    }
                  return n;
                };
              }
              var je = Se(ue),
                ke = Se(te),
                Oe = Se(ue, !0);
              function Ee(e) {
                if (!w(e)) return {};
                if (d) return d(e);
                var t = function () {};
                t.prototype = e;
                var n = new t();
                return (t.prototype = null), n;
              }
              function Ce(e) {
                return w(e) ? (z(e) ? e.slice() : je({}, e)) : e;
              }
              function Me(e) {
                return z(e) ? e : [e];
              }
              function Te(e) {
                return re.toPath(e);
              }
              function Re(e, t) {
                for (var n = t.length, r = 0; r < n; r++) {
                  if (null == e) return;
                  e = e[t[r]];
                }
                return n ? e : void 0;
              }
              function Pe(e, t, n) {
                var r = Re(e, Te(t));
                return S(r) ? n : r;
              }
              function Ae(e) {
                return e;
              }
              function Le(e) {
                return (
                  (e = ke({}, e)),
                  function (t) {
                    return ne(t, e);
                  }
                );
              }
              function Ie(e) {
                return (
                  (e = Te(e)),
                  function (t) {
                    return Re(t, e);
                  }
                );
              }
              function De(e, t, n) {
                if (void 0 === t) return e;
                switch (null == n ? 3 : n) {
                  case 1:
                    return function (n) {
                      return e.call(t, n);
                    };
                  case 3:
                    return function (n, r, o) {
                      return e.call(t, n, r, o);
                    };
                  case 4:
                    return function (n, r, o, i) {
                      return e.call(t, n, r, o, i);
                    };
                }
                return function () {
                  return e.apply(t, arguments);
                };
              }
              function Ne(e, t, n) {
                return null == e ? Ae : I(e) ? De(e, t, n) : w(e) && !z(e) ? Le(e) : Ie(e);
              }
              function Be(e, t) {
                return Ne(e, t, 1 / 0);
              }
              function Fe(e, t, n) {
                return re.iteratee !== Be ? re.iteratee(e, t) : Ne(e, t, n);
              }
              function Ue() {}
              function ze(e, t) {
                return null == t && ((t = e), (e = 0)), e + Math.floor(Math.random() * (t - e + 1));
              }
              (re.toPath = Me), (re.iteratee = Be);
              var qe =
                Date.now ||
                function () {
                  return new Date().getTime();
                };
              function Ve(e) {
                var t = function (t) {
                    return e[t];
                  },
                  n = "(?:" + te(e).join("|") + ")",
                  r = RegExp(n),
                  o = RegExp(n, "g");
                return function (e) {
                  return (e = null == e ? "" : "" + e), r.test(e) ? e.replace(o, t) : e;
                };
              }
              var Ge = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;" },
                We = Ve(Ge),
                $e = Ve(xe(Ge)),
                He = (re.templateSettings = { evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g }),
                Ke = /(.)^/,
                Ye = { "'": "'", "\\": "\\", "\r": "r", "\n": "n", "\u2028": "u2028", "\u2029": "u2029" },
                Je = /\\|'|\r|\n|\u2028|\u2029/g;
              function Qe(e) {
                return "\\" + Ye[e];
              }
              var Xe = /^\s*(\w|\$)+\s*$/;
              var Ze = 0;
              function et(e, t, n, r, o) {
                if (!(r instanceof t)) return e.apply(n, o);
                var i = Ee(e.prototype),
                  s = e.apply(i, o);
                return w(s) ? s : i;
              }
              var tt = x(function (e, t) {
                var n = tt.placeholder,
                  r = function () {
                    for (var o = 0, i = t.length, s = Array(i), a = 0; a < i; a++) s[a] = t[a] === n ? arguments[o++] : t[a];
                    for (; o < arguments.length; ) s.push(arguments[o++]);
                    return et(e, r, this, this, s);
                  };
                return r;
              });
              tt.placeholder = re;
              var nt = x(function (e, t, n) {
                  if (!I(e)) throw new TypeError("Bind must be called on a function");
                  var r = x(function (o) {
                    return et(e, r, t, this, n.concat(o));
                  });
                  return r;
                }),
                rt = H(Z);
              function ot(e, t, n, r) {
                if (((r = r || []), t || 0 === t)) {
                  if (t <= 0) return r.concat(e);
                } else t = 1 / 0;
                for (var o = r.length, i = 0, s = Z(e); i < s; i++) {
                  var a = e[i];
                  if (rt(a) && (z(a) || G(a)))
                    if (t > 1) ot(a, t - 1, n, r), (o = r.length);
                    else for (var u = 0, c = a.length; u < c; ) r[o++] = a[u++];
                  else n || (r[o++] = a);
                }
                return r;
              }
              var it = x(function (e, t) {
                var n = (t = ot(t, !1, !1)).length;
                if (n < 1) throw new Error("bindAll must be passed function names");
                for (; n--; ) {
                  var r = t[n];
                  e[r] = nt(e[r], e);
                }
                return e;
              });
              var st = x(function (e, t, n) {
                  return setTimeout(function () {
                    return e.apply(null, n);
                  }, t);
                }),
                at = tt(st, re, 1);
              function ut(e) {
                return function () {
                  return !e.apply(this, arguments);
                };
              }
              function ct(e, t) {
                var n;
                return function () {
                  return --e > 0 && (n = t.apply(this, arguments)), e <= 1 && (t = null), n;
                };
              }
              var lt = tt(ct, 2);
              function ft(e, t, n) {
                t = Fe(t, n);
                for (var r, o = te(e), i = 0, s = o.length; i < s; i++) if (t(e[(r = o[i])], r, e)) return r;
              }
              function pt(e) {
                return function (t, n, r) {
                  n = Fe(n, r);
                  for (var o = Z(t), i = e > 0 ? 0 : o - 1; i >= 0 && i < o; i += e) if (n(t[i], i, t)) return i;
                  return -1;
                };
              }
              var ht = pt(1),
                dt = pt(-1);
              function _t(e, t, n, r) {
                for (var o = (n = Fe(n, r, 1))(t), i = 0, s = Z(e); i < s; ) {
                  var a = Math.floor((i + s) / 2);
                  n(e[a]) < o ? (i = a + 1) : (s = a);
                }
                return i;
              }
              function bt(e, t, n) {
                return function (r, o, i) {
                  var s = 0,
                    u = Z(r);
                  if ("number" == typeof i) e > 0 ? (s = i >= 0 ? i : Math.max(i + u, s)) : (u = i >= 0 ? Math.min(i + 1, u) : i + u + 1);
                  else if (n && i && u) return r[(i = n(r, o))] === o ? i : -1;
                  if (o != o) return (i = t(a.call(r, s, u), W)) >= 0 ? i + s : -1;
                  for (i = e > 0 ? s : u - 1; i >= 0 && i < u; i += e) if (r[i] === o) return i;
                  return -1;
                };
              }
              var vt = bt(1, ht, _t),
                gt = bt(-1, dt);
              function yt(e, t, n) {
                var r = (rt(e) ? ht : ft)(e, t, n);
                if (void 0 !== r && -1 !== r) return e[r];
              }
              function mt(e, t, n) {
                var r, o;
                if (((t = De(t, n)), rt(e))) for (r = 0, o = e.length; r < o; r++) t(e[r], r, e);
                else {
                  var i = te(e);
                  for (r = 0, o = i.length; r < o; r++) t(e[i[r]], i[r], e);
                }
                return e;
              }
              function xt(e, t, n) {
                t = Fe(t, n);
                for (var r = !rt(e) && te(e), o = (r || e).length, i = Array(o), s = 0; s < o; s++) {
                  var a = r ? r[s] : s;
                  i[s] = t(e[a], a, e);
                }
                return i;
              }
              function wt(e) {
                var t = function (t, n, r, o) {
                  var i = !rt(t) && te(t),
                    s = (i || t).length,
                    a = e > 0 ? 0 : s - 1;
                  for (o || ((r = t[i ? i[a] : a]), (a += e)); a >= 0 && a < s; a += e) {
                    var u = i ? i[a] : a;
                    r = n(r, t[u], u, t);
                  }
                  return r;
                };
                return function (e, n, r, o) {
                  var i = arguments.length >= 3;
                  return t(e, De(n, o, 4), r, i);
                };
              }
              var St = wt(1),
                jt = wt(-1);
              function kt(e, t, n) {
                var r = [];
                return (
                  (t = Fe(t, n)),
                  mt(e, function (e, n, o) {
                    t(e, n, o) && r.push(e);
                  }),
                  r
                );
              }
              function Ot(e, t, n) {
                t = Fe(t, n);
                for (var r = !rt(e) && te(e), o = (r || e).length, i = 0; i < o; i++) {
                  var s = r ? r[i] : i;
                  if (!t(e[s], s, e)) return !1;
                }
                return !0;
              }
              function Et(e, t, n) {
                t = Fe(t, n);
                for (var r = !rt(e) && te(e), o = (r || e).length, i = 0; i < o; i++) {
                  var s = r ? r[i] : i;
                  if (t(e[s], s, e)) return !0;
                }
                return !1;
              }
              function Ct(e, t, n, r) {
                return rt(e) || (e = me(e)), ("number" != typeof n || r) && (n = 0), vt(e, t, n) >= 0;
              }
              var Mt = x(function (e, t, n) {
                var r, o;
                return (
                  I(t) ? (o = t) : ((t = Te(t)), (r = t.slice(0, -1)), (t = t[t.length - 1])),
                  xt(e, function (e) {
                    var i = o;
                    if (!i) {
                      if ((r && r.length && (e = Re(e, r)), null == e)) return;
                      i = e[t];
                    }
                    return null == i ? i : i.apply(e, n);
                  })
                );
              });
              function Tt(e, t) {
                return xt(e, Ie(t));
              }
              function Rt(e, t, n) {
                var r,
                  o,
                  i = -1 / 0,
                  s = -1 / 0;
                if (null == t || ("number" == typeof t && "object" != typeof e[0] && null != e))
                  for (var a = 0, u = (e = rt(e) ? e : me(e)).length; a < u; a++) null != (r = e[a]) && r > i && (i = r);
                else
                  (t = Fe(t, n)),
                    mt(e, function (e, n, r) {
                      ((o = t(e, n, r)) > s || (o === -1 / 0 && i === -1 / 0)) && ((i = e), (s = o));
                    });
                return i;
              }
              function Pt(e, t, n) {
                if (null == t || n) return rt(e) || (e = me(e)), e[ze(e.length - 1)];
                var r = rt(e) ? Ce(e) : me(e),
                  o = Z(r);
                t = Math.max(Math.min(t, o), 0);
                for (var i = o - 1, s = 0; s < t; s++) {
                  var a = ze(s, i),
                    u = r[s];
                  (r[s] = r[a]), (r[a] = u);
                }
                return r.slice(0, t);
              }
              function At(e, t) {
                return function (n, r, o) {
                  var i = t ? [[], []] : {};
                  return (
                    (r = Fe(r, o)),
                    mt(n, function (t, o) {
                      var s = r(t, o, n);
                      e(i, t, s);
                    }),
                    i
                  );
                };
              }
              var Lt = At(function (e, t, n) {
                  q(e, n) ? e[n].push(t) : (e[n] = [t]);
                }),
                It = At(function (e, t, n) {
                  e[n] = t;
                }),
                Dt = At(function (e, t, n) {
                  q(e, n) ? e[n]++ : (e[n] = 1);
                }),
                Nt = At(function (e, t, n) {
                  e[n ? 0 : 1].push(t);
                }, !0),
                Bt = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;
              function Ft(e, t, n) {
                return t in n;
              }
              var Ut = x(function (e, t) {
                  var n = {},
                    r = t[0];
                  if (null == e) return n;
                  I(r) ? (t.length > 1 && (r = De(r, t[1])), (t = ue(e))) : ((r = Ft), (t = ot(t, !1, !1)), (e = Object(e)));
                  for (var o = 0, i = t.length; o < i; o++) {
                    var s = t[o],
                      a = e[s];
                    r(a, s, e) && (n[s] = a);
                  }
                  return n;
                }),
                zt = x(function (e, t) {
                  var n,
                    r = t[0];
                  return (
                    I(r)
                      ? ((r = ut(r)), t.length > 1 && (n = t[1]))
                      : ((t = xt(ot(t, !1, !1), String)),
                        (r = function (e, n) {
                          return !Ct(t, n);
                        })),
                    Ut(e, r, n)
                  );
                });
              function qt(e, t, n) {
                return a.call(e, 0, Math.max(0, e.length - (null == t || n ? 1 : t)));
              }
              function Vt(e, t, n) {
                return null == e || e.length < 1 ? (null == t || n ? void 0 : []) : null == t || n ? e[0] : qt(e, e.length - t);
              }
              function Gt(e, t, n) {
                return a.call(e, null == t || n ? 1 : t);
              }
              var Wt = x(function (e, t) {
                  return (
                    (t = ot(t, !0, !0)),
                    kt(e, function (e) {
                      return !Ct(t, e);
                    })
                  );
                }),
                $t = x(function (e, t) {
                  return Wt(e, t);
                });
              function Ht(e, t, n, r) {
                j(t) || ((r = n), (n = t), (t = !1)), null != n && (n = Fe(n, r));
                for (var o = [], i = [], s = 0, a = Z(e); s < a; s++) {
                  var u = e[s],
                    c = n ? n(u, s, e) : u;
                  t && !n ? ((s && i === c) || o.push(u), (i = c)) : n ? Ct(i, c) || (i.push(c), o.push(u)) : Ct(o, u) || o.push(u);
                }
                return o;
              }
              var Kt = x(function (e) {
                return Ht(ot(e, !0, !0));
              });
              function Yt(e) {
                for (var t = (e && Rt(e, Z).length) || 0, n = Array(t), r = 0; r < t; r++) n[r] = Tt(e, r);
                return n;
              }
              var Jt = x(Yt);
              function Qt(e, t) {
                return e._chain ? re(t).chain() : t;
              }
              function Xt(e) {
                return (
                  mt(we(e), function (t) {
                    var n = (re[t] = e[t]);
                    re.prototype[t] = function () {
                      var e = [this._wrapped];
                      return s.apply(e, arguments), Qt(this, n.apply(re, e));
                    };
                  }),
                  re
                );
              }
              mt(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (e) {
                var t = r[e];
                re.prototype[e] = function () {
                  var n = this._wrapped;
                  return (
                    null != n && (t.apply(n, arguments), ("shift" !== e && "splice" !== e) || 0 !== n.length || delete n[0]), Qt(this, n)
                  );
                };
              }),
                mt(["concat", "join", "slice"], function (e) {
                  var t = r[e];
                  re.prototype[e] = function () {
                    var e = this._wrapped;
                    return null != e && (e = t.apply(e, arguments)), Qt(this, e);
                  };
                });
              var Zt = {
                  __proto__: null,
                  VERSION: t,
                  restArguments: x,
                  isObject: w,
                  isNull: function (e) {
                    return null === e;
                  },
                  isUndefined: S,
                  isBoolean: j,
                  isElement: function (e) {
                    return !(!e || 1 !== e.nodeType);
                  },
                  isString: O,
                  isNumber: E,
                  isDate: C,
                  isRegExp: M,
                  isError: T,
                  isSymbol: R,
                  isArrayBuffer: P,
                  isDataView: U,
                  isArray: z,
                  isFunction: I,
                  isArguments: G,
                  isFinite: function (e) {
                    return !R(e) && v(e) && !isNaN(parseFloat(e));
                  },
                  isNaN: W,
                  isTypedArray: X,
                  isEmpty: function (e) {
                    if (null == e) return !0;
                    var t = Z(e);
                    return "number" == typeof t && (z(e) || O(e) || G(e)) ? 0 === t : 0 === Z(te(e));
                  },
                  isMatch: ne,
                  isEqual: function (e, t) {
                    return se(e, t);
                  },
                  isMap: be,
                  isWeakMap: ve,
                  isSet: ge,
                  isWeakSet: ye,
                  keys: te,
                  allKeys: ue,
                  values: me,
                  pairs: function (e) {
                    for (var t = te(e), n = t.length, r = Array(n), o = 0; o < n; o++) r[o] = [t[o], e[t[o]]];
                    return r;
                  },
                  invert: xe,
                  functions: we,
                  methods: we,
                  extend: je,
                  extendOwn: ke,
                  assign: ke,
                  defaults: Oe,
                  create: function (e, t) {
                    var n = Ee(e);
                    return t && ke(n, t), n;
                  },
                  clone: Ce,
                  tap: function (e, t) {
                    return t(e), e;
                  },
                  get: Pe,
                  has: function (e, t) {
                    for (var n = (t = Te(t)).length, r = 0; r < n; r++) {
                      var o = t[r];
                      if (!q(e, o)) return !1;
                      e = e[o];
                    }
                    return !!n;
                  },
                  mapObject: function (e, t, n) {
                    t = Fe(t, n);
                    for (var r = te(e), o = r.length, i = {}, s = 0; s < o; s++) {
                      var a = r[s];
                      i[a] = t(e[a], a, e);
                    }
                    return i;
                  },
                  identity: Ae,
                  constant: $,
                  noop: Ue,
                  toPath: Me,
                  property: Ie,
                  propertyOf: function (e) {
                    return null == e
                      ? Ue
                      : function (t) {
                          return Pe(e, t);
                        };
                  },
                  matcher: Le,
                  matches: Le,
                  times: function (e, t, n) {
                    var r = Array(Math.max(0, e));
                    t = De(t, n, 1);
                    for (var o = 0; o < e; o++) r[o] = t(o);
                    return r;
                  },
                  random: ze,
                  now: qe,
                  escape: We,
                  unescape: $e,
                  templateSettings: He,
                  template: function (e, t, n) {
                    !t && n && (t = n), (t = Oe({}, t, re.templateSettings));
                    var r = RegExp(
                        [(t.escape || Ke).source, (t.interpolate || Ke).source, (t.evaluate || Ke).source].join("|") + "|$",
                        "g"
                      ),
                      o = 0,
                      i = "__p+='";
                    e.replace(r, function (t, n, r, s, a) {
                      return (
                        (i += e.slice(o, a).replace(Je, Qe)),
                        (o = a + t.length),
                        n
                          ? (i += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'")
                          : r
                          ? (i += "'+\n((__t=(" + r + "))==null?'':__t)+\n'")
                          : s && (i += "';\n" + s + "\n__p+='"),
                        t
                      );
                    }),
                      (i += "';\n");
                    var s,
                      a = t.variable;
                    if (a) {
                      if (!Xe.test(a)) throw new Error("variable is not a bare identifier: " + a);
                    } else (i = "with(obj||{}){\n" + i + "}\n"), (a = "obj");
                    i = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + i + "return __p;\n";
                    try {
                      s = new Function(a, "_", i);
                    } catch (e) {
                      throw ((e.source = i), e);
                    }
                    var u = function (e) {
                      return s.call(this, e, re);
                    };
                    return (u.source = "function(" + a + "){\n" + i + "}"), u;
                  },
                  result: function (e, t, n) {
                    var r = (t = Te(t)).length;
                    if (!r) return I(n) ? n.call(e) : n;
                    for (var o = 0; o < r; o++) {
                      var i = null == e ? void 0 : e[t[o]];
                      void 0 === i && ((i = n), (o = r)), (e = I(i) ? i.call(e) : i);
                    }
                    return e;
                  },
                  uniqueId: function (e) {
                    var t = ++Ze + "";
                    return e ? e + t : t;
                  },
                  chain: function (e) {
                    var t = re(e);
                    return (t._chain = !0), t;
                  },
                  iteratee: Be,
                  partial: tt,
                  bind: nt,
                  bindAll: it,
                  memoize: function (e, t) {
                    var n = function (r) {
                      var o = n.cache,
                        i = "" + (t ? t.apply(this, arguments) : r);
                      return q(o, i) || (o[i] = e.apply(this, arguments)), o[i];
                    };
                    return (n.cache = {}), n;
                  },
                  delay: st,
                  defer: at,
                  throttle: function (e, t, n) {
                    var r,
                      o,
                      i,
                      s,
                      a = 0;
                    n || (n = {});
                    var u = function () {
                        (a = !1 === n.leading ? 0 : qe()), (r = null), (s = e.apply(o, i)), r || (o = i = null);
                      },
                      c = function () {
                        var c = qe();
                        a || !1 !== n.leading || (a = c);
                        var l = t - (c - a);
                        return (
                          (o = this),
                          (i = arguments),
                          l <= 0 || l > t
                            ? (r && (clearTimeout(r), (r = null)), (a = c), (s = e.apply(o, i)), r || (o = i = null))
                            : r || !1 === n.trailing || (r = setTimeout(u, l)),
                          s
                        );
                      };
                    return (
                      (c.cancel = function () {
                        clearTimeout(r), (a = 0), (r = o = i = null);
                      }),
                      c
                    );
                  },
                  debounce: function (e, t, n) {
                    var r,
                      o,
                      i,
                      s,
                      a,
                      u = function () {
                        var c = qe() - o;
                        t > c ? (r = setTimeout(u, t - c)) : ((r = null), n || (s = e.apply(a, i)), r || (i = a = null));
                      },
                      c = x(function (c) {
                        return (a = this), (i = c), (o = qe()), r || ((r = setTimeout(u, t)), n && (s = e.apply(a, i))), s;
                      });
                    return (
                      (c.cancel = function () {
                        clearTimeout(r), (r = i = a = null);
                      }),
                      c
                    );
                  },
                  wrap: function (e, t) {
                    return tt(t, e);
                  },
                  negate: ut,
                  compose: function () {
                    var e = arguments,
                      t = e.length - 1;
                    return function () {
                      for (var n = t, r = e[t].apply(this, arguments); n--; ) r = e[n].call(this, r);
                      return r;
                    };
                  },
                  after: function (e, t) {
                    return function () {
                      if (--e < 1) return t.apply(this, arguments);
                    };
                  },
                  before: ct,
                  once: lt,
                  findKey: ft,
                  findIndex: ht,
                  findLastIndex: dt,
                  sortedIndex: _t,
                  indexOf: vt,
                  lastIndexOf: gt,
                  find: yt,
                  detect: yt,
                  findWhere: function (e, t) {
                    return yt(e, Le(t));
                  },
                  each: mt,
                  forEach: mt,
                  map: xt,
                  collect: xt,
                  reduce: St,
                  foldl: St,
                  inject: St,
                  reduceRight: jt,
                  foldr: jt,
                  filter: kt,
                  select: kt,
                  reject: function (e, t, n) {
                    return kt(e, ut(Fe(t)), n);
                  },
                  every: Ot,
                  all: Ot,
                  some: Et,
                  any: Et,
                  contains: Ct,
                  includes: Ct,
                  include: Ct,
                  invoke: Mt,
                  pluck: Tt,
                  where: function (e, t) {
                    return kt(e, Le(t));
                  },
                  max: Rt,
                  min: function (e, t, n) {
                    var r,
                      o,
                      i = 1 / 0,
                      s = 1 / 0;
                    if (null == t || ("number" == typeof t && "object" != typeof e[0] && null != e))
                      for (var a = 0, u = (e = rt(e) ? e : me(e)).length; a < u; a++) null != (r = e[a]) && r < i && (i = r);
                    else
                      (t = Fe(t, n)),
                        mt(e, function (e, n, r) {
                          ((o = t(e, n, r)) < s || (o === 1 / 0 && i === 1 / 0)) && ((i = e), (s = o));
                        });
                    return i;
                  },
                  shuffle: function (e) {
                    return Pt(e, 1 / 0);
                  },
                  sample: Pt,
                  sortBy: function (e, t, n) {
                    var r = 0;
                    return (
                      (t = Fe(t, n)),
                      Tt(
                        xt(e, function (e, n, o) {
                          return { value: e, index: r++, criteria: t(e, n, o) };
                        }).sort(function (e, t) {
                          var n = e.criteria,
                            r = t.criteria;
                          if (n !== r) {
                            if (n > r || void 0 === n) return 1;
                            if (n < r || void 0 === r) return -1;
                          }
                          return e.index - t.index;
                        }),
                        "value"
                      )
                    );
                  },
                  groupBy: Lt,
                  indexBy: It,
                  countBy: Dt,
                  partition: Nt,
                  toArray: function (e) {
                    return e ? (z(e) ? a.call(e) : O(e) ? e.match(Bt) : rt(e) ? xt(e, Ae) : me(e)) : [];
                  },
                  size: function (e) {
                    return null == e ? 0 : rt(e) ? e.length : te(e).length;
                  },
                  pick: Ut,
                  omit: zt,
                  first: Vt,
                  head: Vt,
                  take: Vt,
                  initial: qt,
                  last: function (e, t, n) {
                    return null == e || e.length < 1
                      ? null == t || n
                        ? void 0
                        : []
                      : null == t || n
                      ? e[e.length - 1]
                      : Gt(e, Math.max(0, e.length - t));
                  },
                  rest: Gt,
                  tail: Gt,
                  drop: Gt,
                  compact: function (e) {
                    return kt(e, Boolean);
                  },
                  flatten: function (e, t) {
                    return ot(e, t, !1);
                  },
                  without: $t,
                  uniq: Ht,
                  unique: Ht,
                  union: Kt,
                  intersection: function (e) {
                    for (var t = [], n = arguments.length, r = 0, o = Z(e); r < o; r++) {
                      var i = e[r];
                      if (!Ct(t, i)) {
                        var s;
                        for (s = 1; s < n && Ct(arguments[s], i); s++);
                        s === n && t.push(i);
                      }
                    }
                    return t;
                  },
                  difference: Wt,
                  unzip: Yt,
                  transpose: Yt,
                  zip: Jt,
                  object: function (e, t) {
                    for (var n = {}, r = 0, o = Z(e); r < o; r++) t ? (n[e[r]] = t[r]) : (n[e[r][0]] = e[r][1]);
                    return n;
                  },
                  range: function (e, t, n) {
                    null == t && ((t = e || 0), (e = 0)), n || (n = t < e ? -1 : 1);
                    for (var r = Math.max(Math.ceil((t - e) / n), 0), o = Array(r), i = 0; i < r; i++, e += n) o[i] = e;
                    return o;
                  },
                  chunk: function (e, t) {
                    if (null == t || t < 1) return [];
                    for (var n = [], r = 0, o = e.length; r < o; ) n.push(a.call(e, r, (r += t)));
                    return n;
                  },
                  mixin: Xt,
                  default: re
                },
                en = Xt(Zt);
              return (en._ = en), en;
            });
          }).call(this);
        }).call(
          this,
          "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}
        );
      },
      {}
    ],
    66: [
      function (e, t, n) {
        t.exports =
          '<div class="__avira__search_block_icon"></div>\n<div class="__avira__safetip">\n    <div class="__avira__safetip-content">\n        <div class="__avira__safetip-close">×</div>\n        <div class="__avira__safetip-title">{{ name }}</div>\n        <div class="__avira__safetip-description">{{ description }}</div>\n        <div class="__avira__safetip-copy"><span>{{ lb_powered_by_avira }}</span></div>\n    </div>\n</div>\n';
      },
      {}
    ],
    67: [
      function (e, t, n) {
        "use strict";
        e("core-js/modules/es6.array.iterator.js"), e("core-js/modules/web.dom.iterable.js");
        t.exports = class {
          constructor(e) {
            this._document = e;
          }
          _checkRule(e, t) {
            let n = !1;
            e.type.toLowerCase() === t.type && (n = !0);
            const r = new RegExp(t.name);
            return (r.test(e.id) || r.test(e.name)) && (n = !0), n ? { el: e, name: e.name, id: e.id, type: e.type, value: e.value } : null;
          }
          _isPasswordField(e) {
            return "input" === e.nodeName.toLowerCase() && "password" === e.type.toLowerCase();
          }
          _getFieldInfo(e) {
            return { el: e, name: e.name, id: e.id, type: e.type, value: e.value };
          }
          _getPageInfo() {
            return Array.from(this._document.getElementsByTagName("input")).filter(this._isPasswordField).map(this._getFieldInfo);
          }
          analyze(e) {
            document.body.addEventListener("input", (t) => {
              const n = t.target;
              this._isPasswordField(n) && e(this._getPageInfo());
            }),
              e(this._getPageInfo());
          }
        };
      },
      { "core-js/modules/es6.array.iterator.js": 57, "core-js/modules/web.dom.iterable.js": 58 }
    ],
    68: [
      function (e, t, n) {
        "use strict";
        const r = e("underscore"),
          o = e("content/Iframes/base/Iframe");
        class i extends o {}
        r.extend(i.prototype, {
          id: "abs-ext-perm-notification",
          containerSelector: "html",
          css: {
            position: "absolute",
            "z-index": 2 ** 32 - 1,
            overflow: "hidden",
            top: 0,
            right: 0,
            width: "312px",
            height: "384px",
            "max-height": "none",
            "min-height": 0,
            margin: "0",
            padding: "0",
            border: 0,
            "background-color": "transparent"
          }
        }),
          (t.exports = i);
      },
      { "content/Iframes/base/Iframe": 70, underscore: 65 }
    ],
    69: [
      function (e, t, n) {
        "use strict";
        const r = e("underscore"),
          o = e("content/Iframes/base/Iframe");
        class i extends o {}
        r.extend(i.prototype, {
          id: "abs-tracker-notification",
          containerSelector: "html",
          css: {
            position: "absolute",
            "z-index": 2 ** 32 - 1,
            overflow: "hidden",
            top: 0,
            right: 0,
            width: "352px",
            height: "512px",
            "max-height": "none",
            "min-height": 0,
            margin: "0",
            padding: "0",
            border: 0,
            "background-color": "transparent"
          }
        }),
          (t.exports = i);
      },
      { "content/Iframes/base/Iframe": 70, underscore: 65 }
    ],
    70: [
      function (e, t, n) {
        "use strict";
        const r = e("underscore");
        class o {
          static initClass() {
            (this.prototype.el = null),
              (this.prototype.css = {
                position: "absolute",
                "z-index": "auto",
                overflow: "hidden",
                width: "100%",
                height: "100%",
                "max-height": "none",
                "min-height": 0,
                margin: "0 auto",
                padding: 0,
                border: 0,
                "box-shadow": "none",
                "background-color": "transparent"
              });
          }
          constructor(e, t, n, o) {
            (this.url = e),
              (this.css = r.extend({}, this.css)),
              t && (this.id = t),
              n && (this.containerSelector = n),
              o && this._applyCssOverride(o);
          }
          createEl() {
            (this.el = document.createElement("iframe")),
              this.el.setAttribute("allowtransparency", !0),
              this.el.setAttribute("frameBorder", 0),
              this.el.setAttribute("id", this.id || "abs-iframe"),
              this.css && this._applyCss(this.css);
          }
          attach() {
            return document.querySelector(this.containerSelector).appendChild(this.el), this.el.setAttribute("src", this.url);
          }
          remove() {
            return this.el.parentNode.removeChild(this.el);
          }
          subscribe() {}
          _applyCssOverride(e) {
            for (const t in e) e.hasOwnProperty(t) && (this.css[t] = e[t]);
          }
          _applyCss(e) {
            for (const t in e) e.hasOwnProperty(t) && this._applyCssProperty(t, e[t]);
          }
          _applyCssProperty(e, t) {
            return this.el.style.setProperty(e, t, "important");
          }
        }
        o.initClass(), (t.exports = o);
      },
      { underscore: 65 }
    ],
    71: [
      function (e, t, n) {
        "use strict";
        t.exports = () => {};
      },
      {}
    ],
    72: [
      function (e, t, n) {
        "use strict";
        const r = e("mustache"),
          o = e("annotation.mustache"),
          i = "__avira__search_block",
          s = "__avira__show_tooltip";
        t.exports = class {
          constructor() {
            document.body.addEventListener("click", this.closeOpenTooltips, !1);
          }
          annotateResult(e) {
            const t = e.link.parentNode;
            let n = t.getElementsByClassName(i)[0];
            n ||
              ((n = document.createElement("div")),
              n.classList.add(i),
              n.addEventListener(
                "click",
                (e) => {
                  e.stopImmediatePropagation();
                  const t = e.currentTarget.classList;
                  t.contains(i) && (t.contains(s) || (this.closeOpenTooltips(), t.toggle(s))),
                    e.target.classList.contains("__avira__safetip-close") && this.closeOpenTooltips();
                },
                !1
              ),
              t.insertBefore(n, t.childNodes[0]),
              (t.style.position = "relative"),
              (t.style["content-visibility"] = "visible")),
              e.category.unsafe && n.classList.add("__avira__info-danger"),
              e.category.isWarning && n.classList.add("__avira__info-warning"),
              (n.innerHTML = r.render(o, e.category));
          }
          closeOpenTooltips() {
            const e = document.getElementsByClassName(s);
            Array.prototype.forEach.call(e, (e) => e.classList.remove(s));
          }
          static isSearchBlock(e) {
            return 0 === e.indexOf("__avira__");
          }
        };
      },
      { "annotation.mustache": 66, mustache: "mustache" }
    ],
    73: [
      function (e, t, n) {
        "use strict";
        t.exports = class {
          constructor(e, t, n) {
            (this.element = e), (this.link = t), (this.url = n), (this.classified = !1), (this.category = 1);
          }
          setCategory(e) {
            (this.category = e), (this.classified = !0);
          }
        };
      },
      {}
    ],
    74: [
      function (e, t, n) {
        "use strict";
        const r = e("content/search/engines/SearchEngine");
        t.exports = class extends r {
          static matches(e) {
            return /^https?:\/\/([\w-]+\.)*ask\.com\//.test(e);
          }
          constructor() {
            super(), (this._resultSelector = ".PartialSearchResults-item"), (this._linkSelector = "a.PartialSearchResults-item-title-link");
          }
        };
      },
      { "content/search/engines/SearchEngine": 78 }
    ],
    75: [
      function (e, t, n) {
        "use strict";
        const r = e("content/search/engines/SearchEngine");
        t.exports = class extends r {
          static matches(e) {
            return /^https?:\/\/([\w-]+\.)*bing\.com\//.test(e);
          }
          constructor() {
            super(),
              (this._resultSelector = ".b_algo, .b_ad li"),
              (this._linkSelector = "h2 a"),
              (this._observerTargetSelector = "#b_content");
          }
          _getSearchResultUrl(e, t) {
            return e.classList.contains("b_algo") ? super._getSearchResultUrl(e, t) : this._getBingAdDestination(t);
          }
        };
      },
      { "content/search/engines/SearchEngine": 78 }
    ],
    76: [
      function (e, t, n) {
        "use strict";
        const r = e("content/search/engines/SearchEngine");
        t.exports = class extends r {
          static matches(e) {
            return /^https?:\/\/([\w-]+\.)*duckduckgo\.com\//.test(e);
          }
          constructor() {
            super(),
              (this._resultSelector = "#links .result"),
              (this._linkSelector = "h2 a.result__a"),
              (this._observerTargetSelector = "#links");
          }
        };
      },
      { "content/search/engines/SearchEngine": 78 }
    ],
    77: [
      function (e, t, n) {
        "use strict";
        const r = e("content/search/engines/SearchEngine");
        t.exports = class extends r {
          static matches(e) {
            return /^https?:\/\/(www\.)?google\.(((com|co)\.[a-z]{2})|[a-z]{2,3})\//.test(e);
          }
          constructor() {
            super(),
              (this._resultSelector = "#rso .g, #taw [data-hveid], #bottomads [data-hveid]"),
              (this._linkSelector = ".rc > div > a, div > div > a[data-ved]"),
              (this._observerTargetSelector = "#main");
          }
        };
      },
      { "content/search/engines/SearchEngine": 78 }
    ],
    78: [
      function (e, t, n) {
        "use strict";
        const r = e("content/search/Result"),
          o = e("content/search/Annotator"),
          i = e("messenger/Content").getInstance();
        t.exports = class {
          static matches() {
            return !1;
          }
          constructor() {
            (this._resultSelector = null),
              (this._linkSelector = null),
              (this._observerTargetSelector = null),
              (this._results = []),
              (this._observer = null),
              (this._ignoreMutationsInterval = 200),
              (this._annotator = new o());
          }
          initialize() {
            "complete" === document.readyState || "interactive" === document.readyState
              ? (this._processPage(),
                this._initalizeObserver(),
                window.addEventListener("hashchange", () => {
                  this._processPage(), this._initalizeObserver();
                }))
              : document.addEventListener("DOMContentLoaded", this.initialize.bind(this));
          }
          _processPage() {
            (this._results = this._getResults()), this._classifyResults(this._results).then(this._annotateResults.bind(this));
          }
          _getResults() {
            return this._getSearchResults();
          }
          _getSearchResults() {
            const e = [];
            return (
              document.querySelectorAll(this._resultSelector).forEach((t) => {
                try {
                  e.push(this._getSearchResultFromCache(t) || this._getSearchResult(t));
                } catch (e) {}
              }),
              e
            );
          }
          _getSearchResultFromCache(e) {
            return this._results.find((t) => t.element === e);
          }
          _getSearchResult(e) {
            const t = e.querySelector(this._linkSelector),
              n = this._getSearchResultUrl(e, t);
            return new r(e, t, n);
          }
          _getSearchResultUrl(e, t) {
            return t.href;
          }
          _getBingAdDestination(e) {
            let t = new URL(e.href).searchParams.get("u");
            return /^https?:\/\//.test(t) || (t = `http://${t}`), new URL(t), t;
          }
          _classifyResults(e) {
            return new Promise((t) => {
              const n = e.filter((e) => !e.classified);
              if (0 === n.length) return void t(e);
              const r = e.map((e) => e.url);
              i.publish("classifyUrls", { urls: r }, (r) => {
                n.forEach((e, t) => {
                  e.setCategory(r[t]);
                }),
                  t(e);
              });
            });
          }
          _annotateResults(e) {
            e.forEach((e) => this._annotator.annotateResult(e));
          }
          _initalizeObserver() {
            if (!this._observerTargetSelector) return;
            this._observer && this._observer.disconnect();
            const e = document.querySelector(this._observerTargetSelector);
            if (!e) return;
            let t = !1;
            (this._observer = new MutationObserver((e) => {
              if (t) return;
              e.some((e) => "childList" === e.type && !this._isAnnotationMutation(e)) &&
                ((t = !0),
                setTimeout(() => {
                  (t = !1), this._processPage();
                }, this._ignoreMutationsInterval));
            })),
              this._observer.observe(e, { childList: !0, subtree: !0 });
          }
          _isAnnotationMutation(e) {
            try {
              return o.isSearchBlock(e.addedNodes[0].className);
            } catch (e) {
              return !1;
            }
          }
        };
      },
      { "content/search/Annotator": 72, "content/search/Result": 73, "messenger/Content": 59 }
    ],
    79: [
      function (e, t, n) {
        "use strict";
        const r = e("content/search/engines/SearchEngine");
        t.exports = class extends r {
          static matches(e) {
            return /^https?:\/\/suche\.web\.de\//.test(e);
          }
          constructor() {
            super(), (this._resultSelector = ".eMd"), (this._linkSelector = "a"), (this._observerTargetSelector = "body");
          }
        };
      },
      { "content/search/engines/SearchEngine": 78 }
    ],
    80: [
      function (e, t, n) {
        "use strict";
        const r = e("content/search/engines/SearchEngine");
        t.exports = class extends r {
          static matches(e) {
            return /^https?:\/\/([\w-]+\.)*yahoo\.com\//.test(e);
          }
          constructor() {
            super(), (this._resultSelector = "#main li, #right li"), (this._linkSelector = "h3 a"), (this._observerTargetSelector = "#web");
          }
          _getSearchResultUrl(e, t) {
            return t.classList.contains("td-u") ? super._getSearchResultUrl(e, t) : this._getBingAdDestination(t);
          }
        };
      },
      { "content/search/engines/SearchEngine": 78 }
    ],
    81: [
      function (e, t, n) {
        "use strict";
        const r = [
          e("content/search/engines/Ask"),
          e("content/search/engines/Bing"),
          e("content/search/engines/DuckDuckGo"),
          e("content/search/engines/Google"),
          e("content/search/engines/Yahoo"),
          e("content/search/engines/WebDe")
        ];
        let o = null;
        r.forEach((e) => {
          e.matches(window.location.href) && ((o = new e()), o.initialize());
        });
      },
      {
        "content/search/engines/Ask": 74,
        "content/search/engines/Bing": 75,
        "content/search/engines/DuckDuckGo": 76,
        "content/search/engines/Google": 77,
        "content/search/engines/WebDe": 79,
        "content/search/engines/Yahoo": 80
      }
    ],
    82: [
      function (e, t, n) {
        "use strict";
        t.exports = class {
          static getStatus() {
            let e;
            switch (window.external.IsSearchProviderInstalled(window.location.href)) {
              case 0:
                e = "not registered";
                break;
              case 1:
                e = "registered";
                break;
              case 2:
                e = "registered and default";
                break;
              default:
                e = "Unknown";
            }
            return e;
          }
        };
      },
      {}
    ]
  },
  {},
  [2]
);
