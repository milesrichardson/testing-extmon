!(function (e) {
  var t = {};
  function r(n) {
    if (t[n]) return t[n].exports;
    var o = (t[n] = { i: n, l: !1, exports: {} });
    return e[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
  }
  (r.m = e),
    (r.c = t),
    (r.d = function (e, t, n) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (r.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (r.t = function (e, t) {
      if ((1 & t && (e = r(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if ((r.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
        for (var o in e)
          r.d(
            n,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
          );
      return n;
    }),
    (r.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return r.d(t, "a", t), t;
    }),
    (r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (r.p = ""),
    r((r.s = 234));
})({
  0: function (e, t, r) {
    "use strict";
    e.exports = r(15);
  },
  1: function (e, t, r) {
    "use strict";
    e.exports = r(14);
  },
  12: function (e, t) {
    window.chrome ? window.browser || (window.browser = window.chrome) : (window.chrome = window.browser ? window.browser : {});
  },
  14: function (e, t, r) {
    "use strict";
    /** @license React v17.0.2
     * react.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */ var n = r(6),
      o = 60103,
      i = 60106;
    (t.Fragment = 60107), (t.StrictMode = 60108), (t.Profiler = 60114);
    var c = 60109,
      u = 60110,
      a = 60112;
    t.Suspense = 60113;
    var l = 60115,
      s = 60116;
    if ("function" == typeof Symbol && Symbol.for) {
      var f = Symbol.for;
      (o = f("react.element")),
        (i = f("react.portal")),
        (t.Fragment = f("react.fragment")),
        (t.StrictMode = f("react.strict_mode")),
        (t.Profiler = f("react.profiler")),
        (c = f("react.provider")),
        (u = f("react.context")),
        (a = f("react.forward_ref")),
        (t.Suspense = f("react.suspense")),
        (l = f("react.memo")),
        (s = f("react.lazy"));
    }
    var d = "function" == typeof Symbol && Symbol.iterator;
    function p(e) {
      for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1; r < arguments.length; r++)
        t += "&args[]=" + encodeURIComponent(arguments[r]);
      return (
        "Minified React error #" +
        e +
        "; visit " +
        t +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
      );
    }
    var m = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {}
      },
      y = {};
    function _(e, t, r) {
      (this.props = e), (this.context = t), (this.refs = y), (this.updater = r || m);
    }
    function h() {}
    function v(e, t, r) {
      (this.props = e), (this.context = t), (this.refs = y), (this.updater = r || m);
    }
    (_.prototype.isReactComponent = {}),
      (_.prototype.setState = function (e, t) {
        if ("object" != typeof e && "function" != typeof e && null != e) throw Error(p(85));
        this.updater.enqueueSetState(this, e, t, "setState");
      }),
      (_.prototype.forceUpdate = function (e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      }),
      (h.prototype = _.prototype);
    var w = (v.prototype = new h());
    (w.constructor = v), n(w, _.prototype), (w.isPureReactComponent = !0);
    var g = { current: null },
      b = Object.prototype.hasOwnProperty,
      j = { key: !0, ref: !0, __self: !0, __source: !0 };
    function O(e, t, r) {
      var n,
        i = {},
        c = null,
        u = null;
      if (null != t)
        for (n in (void 0 !== t.ref && (u = t.ref), void 0 !== t.key && (c = "" + t.key), t))
          b.call(t, n) && !j.hasOwnProperty(n) && (i[n] = t[n]);
      var a = arguments.length - 2;
      if (1 === a) i.children = r;
      else if (1 < a) {
        for (var l = Array(a), s = 0; s < a; s++) l[s] = arguments[s + 2];
        i.children = l;
      }
      if (e && e.defaultProps) for (n in (a = e.defaultProps)) void 0 === i[n] && (i[n] = a[n]);
      return { $$typeof: o, type: e, key: c, ref: u, props: i, _owner: g.current };
    }
    function S(e) {
      return "object" == typeof e && null !== e && e.$$typeof === o;
    }
    var E = /\/+/g;
    function C(e, t) {
      return "object" == typeof e && null !== e && null != e.key
        ? (function (e) {
            var t = { "=": "=0", ":": "=2" };
            return (
              "$" +
              e.replace(/[=:]/g, function (e) {
                return t[e];
              })
            );
          })("" + e.key)
        : t.toString(36);
    }
    function k(e, t, r, n, c) {
      var u = typeof e;
      ("undefined" !== u && "boolean" !== u) || (e = null);
      var a = !1;
      if (null === e) a = !0;
      else
        switch (u) {
          case "string":
          case "number":
            a = !0;
            break;
          case "object":
            switch (e.$$typeof) {
              case o:
              case i:
                a = !0;
            }
        }
      if (a)
        return (
          (c = c((a = e))),
          (e = "" === n ? "." + C(a, 0) : n),
          Array.isArray(c)
            ? ((r = ""),
              null != e && (r = e.replace(E, "$&/") + "/"),
              k(c, t, r, "", function (e) {
                return e;
              }))
            : null != c &&
              (S(c) &&
                (c = (function (e, t) {
                  return { $$typeof: o, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
                })(c, r + (!c.key || (a && a.key === c.key) ? "" : ("" + c.key).replace(E, "$&/") + "/") + e)),
              t.push(c)),
          1
        );
      if (((a = 0), (n = "" === n ? "." : n + ":"), Array.isArray(e)))
        for (var l = 0; l < e.length; l++) {
          var s = n + C((u = e[l]), l);
          a += k(u, t, r, s, c);
        }
      else if (
        "function" ==
        typeof (s = (function (e) {
          return null === e || "object" != typeof e ? null : "function" == typeof (e = (d && e[d]) || e["@@iterator"]) ? e : null;
        })(e))
      )
        for (e = s.call(e), l = 0; !(u = e.next()).done; ) a += k((u = u.value), t, r, (s = n + C(u, l++)), c);
      else if ("object" === u)
        throw ((t = "" + e), Error(p(31, "[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t)));
      return a;
    }
    function $(e, t, r) {
      if (null == e) return e;
      var n = [],
        o = 0;
      return (
        k(e, n, "", "", function (e) {
          return t.call(r, e, o++);
        }),
        n
      );
    }
    function R(e) {
      if (-1 === e._status) {
        var t = e._result;
        (t = t()),
          (e._status = 0),
          (e._result = t),
          t.then(
            function (t) {
              0 === e._status && ((t = t.default), (e._status = 1), (e._result = t));
            },
            function (t) {
              0 === e._status && ((e._status = 2), (e._result = t));
            }
          );
      }
      if (1 === e._status) return e._result;
      throw e._result;
    }
    var x = { current: null };
    function P() {
      var e = x.current;
      if (null === e) throw Error(p(321));
      return e;
    }
    var T = {
      ReactCurrentDispatcher: x,
      ReactCurrentBatchConfig: { transition: 0 },
      ReactCurrentOwner: g,
      IsSomeRendererActing: { current: !1 },
      assign: n
    };
    (t.Children = {
      map: $,
      forEach: function (e, t, r) {
        $(
          e,
          function () {
            t.apply(this, arguments);
          },
          r
        );
      },
      count: function (e) {
        var t = 0;
        return (
          $(e, function () {
            t++;
          }),
          t
        );
      },
      toArray: function (e) {
        return (
          $(e, function (e) {
            return e;
          }) || []
        );
      },
      only: function (e) {
        if (!S(e)) throw Error(p(143));
        return e;
      }
    }),
      (t.Component = _),
      (t.PureComponent = v),
      (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T),
      (t.cloneElement = function (e, t, r) {
        if (null == e) throw Error(p(267, e));
        var i = n({}, e.props),
          c = e.key,
          u = e.ref,
          a = e._owner;
        if (null != t) {
          if ((void 0 !== t.ref && ((u = t.ref), (a = g.current)), void 0 !== t.key && (c = "" + t.key), e.type && e.type.defaultProps))
            var l = e.type.defaultProps;
          for (s in t) b.call(t, s) && !j.hasOwnProperty(s) && (i[s] = void 0 === t[s] && void 0 !== l ? l[s] : t[s]);
        }
        var s = arguments.length - 2;
        if (1 === s) i.children = r;
        else if (1 < s) {
          l = Array(s);
          for (var f = 0; f < s; f++) l[f] = arguments[f + 2];
          i.children = l;
        }
        return { $$typeof: o, type: e.type, key: c, ref: u, props: i, _owner: a };
      }),
      (t.createContext = function (e, t) {
        return (
          void 0 === t && (t = null),
          ((e = {
            $$typeof: u,
            _calculateChangedBits: t,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null
          }).Provider = { $$typeof: c, _context: e }),
          (e.Consumer = e)
        );
      }),
      (t.createElement = O),
      (t.createFactory = function (e) {
        var t = O.bind(null, e);
        return (t.type = e), t;
      }),
      (t.createRef = function () {
        return { current: null };
      }),
      (t.forwardRef = function (e) {
        return { $$typeof: a, render: e };
      }),
      (t.isValidElement = S),
      (t.lazy = function (e) {
        return { $$typeof: s, _payload: { _status: -1, _result: e }, _init: R };
      }),
      (t.memo = function (e, t) {
        return { $$typeof: l, type: e, compare: void 0 === t ? null : t };
      }),
      (t.useCallback = function (e, t) {
        return P().useCallback(e, t);
      }),
      (t.useContext = function (e, t) {
        return P().useContext(e, t);
      }),
      (t.useDebugValue = function () {}),
      (t.useEffect = function (e, t) {
        return P().useEffect(e, t);
      }),
      (t.useImperativeHandle = function (e, t, r) {
        return P().useImperativeHandle(e, t, r);
      }),
      (t.useLayoutEffect = function (e, t) {
        return P().useLayoutEffect(e, t);
      }),
      (t.useMemo = function (e, t) {
        return P().useMemo(e, t);
      }),
      (t.useReducer = function (e, t, r) {
        return P().useReducer(e, t, r);
      }),
      (t.useRef = function (e) {
        return P().useRef(e);
      }),
      (t.useState = function (e) {
        return P().useState(e);
      }),
      (t.version = "17.0.2");
  },
  15: function (e, t, r) {
    "use strict";
    /** @license React v17.0.2
     * react-jsx-runtime.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */ r(6);
    var n = r(1),
      o = 60103;
    if (((t.Fragment = 60107), "function" == typeof Symbol && Symbol.for)) {
      var i = Symbol.for;
      (o = i("react.element")), (t.Fragment = i("react.fragment"));
    }
    var c = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
      u = Object.prototype.hasOwnProperty,
      a = { key: !0, ref: !0, __self: !0, __source: !0 };
    function l(e, t, r) {
      var n,
        i = {},
        l = null,
        s = null;
      for (n in (void 0 !== r && (l = "" + r), void 0 !== t.key && (l = "" + t.key), void 0 !== t.ref && (s = t.ref), t))
        u.call(t, n) && !a.hasOwnProperty(n) && (i[n] = t[n]);
      if (e && e.defaultProps) for (n in (t = e.defaultProps)) void 0 === i[n] && (i[n] = t[n]);
      return { $$typeof: o, type: e, key: l, ref: s, props: i, _owner: c.current };
    }
    (t.jsx = l), (t.jsxs = l);
  },
  234: function (e, t, r) {
    "use strict";
    r.r(t);
    r(12);
    var n = class {
      static send(e, t, r, n) {
        browser.runtime.sendMessage({ from: e, method: t, message: r }, (e) => {
          n && n(e);
        });
      }
    };
    var o = class {
      constructor() {
        n.send("AdBlocker", "domRules", {}, (e) => {
          if (!e) return;
          const t = document.querySelectorAll(e);
          for (const e of t) e.parentElement.removeChild(e);
        });
      }
    };
    class i {
      static domReady() {
        return (
          i.elements || (i.elements = {}),
          new Promise((e, t) => {
            const r = function () {
              if ("complete" !== document.readyState && "interactive" !== document.readyState) return setTimeout(r, 100);
              e();
            };
            r();
          })
        );
      }
      static domFullyLoaded() {
        return new Promise((e, t) => {
          const r = function () {
            if ("complete" !== document.readyState) return setTimeout(r, 100);
            e();
          };
          r();
        });
      }
      static insertInBegining(e, t) {
        t.insertBefore(e, t.childNodes[0]);
      }
      static createElement() {
        if (!arguments[0]) return;
        let e;
        arguments[0].match(/^svg|circle|path$/gi)
          ? (e = document.createElementNS("http://www.w3.org/2000/svg", arguments[0]))
          : "style" === arguments[0]
          ? ((e = document.createElement(arguments[0])), (e.type = "text/css"))
          : (e = document.createElement(arguments[0]));
        for (let t = 1; t < arguments.length; t++)
          if (arguments[t])
            if ("string" != typeof arguments[t]) {
              if ("object" == typeof arguments[t] && arguments[t].tagName) e.appendChild(arguments[t]);
              else if ("object" == typeof arguments[t])
                for (const r in arguments[t]) {
                  const n = arguments[t][r];
                  "object" == typeof n && n.tagName
                    ? e.appendChild(n)
                    : r.match(/^onclick|click$/gi)
                    ? e.addEventListener("click", n)
                    : ("id" === r && (i.elements[n] = e), e.setAttribute(r, n));
                }
            } else e.appendChild(document.createTextNode(arguments[t]));
        return e;
      }
      static getElement(e, t) {
        if (e && "object" == typeof e && e.tagName) return e;
        if ((t && "string" == typeof t && (t = i.getElement(t)), "string" == typeof e)) {
          if (i.elements[e]) return i.elements[e];
          if (e.match(/^\./gi)) {
            const r = i.getByClassName(e.replace(/^\./gi, ""), t);
            return r && r[0] ? r[0] : void 0;
          }
          let r;
          return (r = t ? t.getElementsByTagName(e) : document.getElementsByTagName(e)), r && r[0] ? r[0] : void 0;
        }
        return e;
      }
    }
    var c = i,
      u = r(0);
    var a = class {
      constructor() {
        const e = document.location.href.match(/^[^:]+:\/\/(www.)?([^:/]+)/);
        e &&
          e[2] &&
          n.send("ContentWall", "shouldShow", { domain: e[2] }, (e) => {
            e && ((this.limit = e.limit), (this.timer = e.timer), this.draw());
          });
      }
      draw() {
        c.domReady().then(() => {
          c.insertInBegining(this.render(), document.body), this.startCounter();
        });
      }
      startCounter() {
        const e = 100 / this.limit,
          t = this.limit - this.timer,
          r = Math.floor(t / 60).toString(),
          o = t % 60 >= 10 ? (t % 60).toString() : "0" + (t % 60).toString();
        (c.getElement("_af_content_wall_timer").innerHTML = `0${r}:${o}`),
          c.getElement("_af_content_wall_counter2").setAttribute("style", `width: ${this.timer * e}% !important;`);
        const i = setInterval(() => {
          this.timer++;
          const t = this.limit - this.timer,
            r = Math.floor(t / 60).toString(),
            o = t % 60 >= 10 ? (t % 60).toString() : "0" + (t % 60).toString();
          (c.getElement("_af_content_wall_timer").innerHTML = `0${r}:${o}`),
            c.getElement("_af_content_wall_counter2").setAttribute("style", `width: ${this.timer * e}% !important;`),
            n.send("ContentWall", "increase"),
            this.timer >= this.limit && (clearInterval(i), this.disconnect());
        }, 1e3);
      }
      disconnect() {
        (c.getElement("_af_content_wall_text").innerHTML = "You are disconnected. Upgrade to Elite subscription for unlimited viewing."),
          (c.getElement("_af_content_wall_timer").innerHTML = ""),
          (c.getElement("_af_content_wall_button").innerHTML = "Upgrade");
        const e = document.location.href.match(/^[^:]+:\/\/(www.)?([^:/]+)/);
        e && e[2] && n.send("ContentWall", "disconnect", { domain: e[2] }, (e) => {});
      }
      open() {
        n.send("ContentWall", "open");
      }
      render() {
        return Object(u.jsxs)("div", {
          id: "_af_content_wall",
          children: [
            Object(u.jsx)("div", { id: "_af_content_wall_counter", children: Object(u.jsx)("div", { id: "_af_content_wall_counter2" }) }),
            Object(u.jsx)("div", { id: "_af_content_wall_logo" }),
            Object(u.jsx)("div", { id: "_af_content_wall_button", onClick: this.open.bind(this), children: "Unlock This Site" }),
            Object(u.jsxs)("div", {
              id: "_af_content_wall_text",
              children: ["You will be disconnected from this site in: ", Object(u.jsx)("div", { id: "_af_content_wall_timer" })]
            })
          ]
        });
      }
    };
    class l {
      constructor() {
        new o(), new a();
      }
    }
    try {
      new l();
    } catch (e) {
      console.log("CRITICAL ERROR"), console.log(e);
    }
  },
  6: function (e, t, r) {
    "use strict";
    /*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var n = Object.getOwnPropertySymbols,
      o = Object.prototype.hasOwnProperty,
      i = Object.prototype.propertyIsEnumerable;
    function c(e) {
      if (null == e) throw new TypeError("Object.assign cannot be called with null or undefined");
      return Object(e);
    }
    e.exports = (function () {
      try {
        if (!Object.assign) return !1;
        var e = new String("abc");
        if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0])) return !1;
        for (var t = {}, r = 0; r < 10; r++) t["_" + String.fromCharCode(r)] = r;
        if (
          "0123456789" !==
          Object.getOwnPropertyNames(t)
            .map(function (e) {
              return t[e];
            })
            .join("")
        )
          return !1;
        var n = {};
        return (
          "abcdefghijklmnopqrst".split("").forEach(function (e) {
            n[e] = e;
          }),
          "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("")
        );
      } catch (e) {
        return !1;
      }
    })()
      ? Object.assign
      : function (e, t) {
          for (var r, u, a = c(e), l = 1; l < arguments.length; l++) {
            for (var s in (r = Object(arguments[l]))) o.call(r, s) && (a[s] = r[s]);
            if (n) {
              u = n(r);
              for (var f = 0; f < u.length; f++) i.call(r, u[f]) && (a[u[f]] = r[u[f]]);
            }
          }
          return a;
        };
  }
});
