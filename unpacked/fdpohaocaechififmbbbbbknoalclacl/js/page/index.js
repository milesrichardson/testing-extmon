(() => {
  var t =
    "undefined" != typeof globalThis
      ? globalThis
      : "undefined" != typeof self
      ? self
      : "undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : {};
  const e = "capture",
    o = "captureComplete",
    i = "captureError",
    n = "captureFrame",
    r = "checkExists",
    s = "log",
    l = "scrollPage";
  function a(t, e, o, i, n, r, s) {
    try {
      var l = t[r](s),
        a = l.value;
    } catch (t) {
      return void o(t);
    }
    l.done ? e(a) : Promise.resolve(a).then(i, n);
  }
  function d(t) {
    return function () {
      var e = this,
        o = arguments;
      return new Promise(function (i, n) {
        var r = t.apply(e, o);
        function s(t) {
          a(r, i, n, s, l, "next", t);
        }
        function l(t) {
          a(r, i, n, s, l, "throw", t);
        }
        s(void 0);
      });
    };
  }
  function c(t, e, o) {
    return e in t ? Object.defineProperty(t, e, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = o), t;
  }
  function h(t) {
    for (var e = 1; e < arguments.length; e++) {
      var o = null != arguments[e] ? arguments[e] : {},
        i = Object.keys(o);
      "function" == typeof Object.getOwnPropertySymbols &&
        (i = i.concat(
          Object.getOwnPropertySymbols(o).filter(function (t) {
            return Object.getOwnPropertyDescriptor(o, t).enumerable;
          })
        )),
        i.forEach(function (e) {
          c(t, e, o[e]);
        });
    }
    return t;
  }
  function u(t, e) {
    return (
      (e = null != e ? e : {}),
      Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
        : (function (t, e) {
            var o = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(t);
              e &&
                (i = i.filter(function (e) {
                  return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })),
                o.push.apply(o, i);
            }
            return o;
          })(Object(e)).forEach(function (o) {
            Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(e, o));
          }),
      t
    );
  }
  function g(t, e) {
    var o,
      i,
      n,
      r,
      s = {
        label: 0,
        sent: function () {
          if (1 & n[0]) throw n[1];
          return n[1];
        },
        trys: [],
        ops: []
      };
    return (
      (r = { next: l(0), throw: l(1), return: l(2) }),
      "function" == typeof Symbol &&
        (r[Symbol.iterator] = function () {
          return this;
        }),
      r
    );
    function l(l) {
      return function (a) {
        return (function (l) {
          if (o) throw new TypeError("Generator is already executing.");
          for (; r && ((r = 0), l[0] && (s = 0)), s; )
            try {
              if (
                ((o = 1),
                i && (n = 2 & l[0] ? i.return : l[0] ? i.throw || ((n = i.return) && n.call(i), 0) : i.next) && !(n = n.call(i, l[1])).done)
              )
                return n;
              switch (((i = 0), n && (l = [2 & l[0], n.value]), l[0])) {
                case 0:
                case 1:
                  n = l;
                  break;
                case 4:
                  return s.label++, { value: l[1], done: !1 };
                case 5:
                  s.label++, (i = l[1]), (l = [0]);
                  continue;
                case 7:
                  (l = s.ops.pop()), s.trys.pop();
                  continue;
                default:
                  if (!((n = s.trys), (n = n.length > 0 && n[n.length - 1]) || (6 !== l[0] && 2 !== l[0]))) {
                    s = 0;
                    continue;
                  }
                  if (3 === l[0] && (!n || (l[1] > n[0] && l[1] < n[3]))) {
                    s.label = l[1];
                    break;
                  }
                  if (6 === l[0] && s.label < n[1]) {
                    (s.label = n[1]), (n = l);
                    break;
                  }
                  if (n && s.label < n[2]) {
                    (s.label = n[2]), s.ops.push(l);
                    break;
                  }
                  n[2] && s.ops.pop(), s.trys.pop();
                  continue;
              }
              l = e.call(t, s);
            } catch (t) {
              (l = [6, t]), (i = 0);
            } finally {
              o = n = 0;
            }
          if (5 & l[0]) throw l[1];
          return { value: l[0] ? l[1] : void 0, done: !0 };
        })([l, a]);
      };
    }
  }
  Object.create;
  Object.create;
  const p = new Set(["iframe", "frame"]),
    f = (t) => p.has(t.tagName.toLowerCase()),
    m = (t, e) => {
      e = null != e ? e : f(t);
      let o = t.getBoundingClientRect(),
        i = o.width,
        n = o.height,
        r = 0,
        s = 0,
        l = t;
      for (; l; ) {
        (r += l.offsetLeft), l === document.body ? (s += l.getBoundingClientRect().top + window.scrollY) : (s += l.offsetTop);
        let t = w(l);
        t && ((r += t.m41), (s += t.m42)), (l = l.offsetParent);
      }
      let a = { left: r, top: s, width: i, height: n };
      if (e) {
        let e = b(t);
        (a.box = e), (a.left += e.left), (a.top += e.top), (a.width -= e.left + e.right), (a.height -= e.top + e.bottom);
      }
      return a;
    },
    y = (t, e) =>
      0 != t.width &&
      0 != t.height &&
      t.left + t.width > 0 &&
      t.left < window.innerWidth &&
      t.top + t.height > 0 &&
      t.top < window.innerHeight &&
      "none" !== e.display &&
      "hidden" !== e.visibility &&
      "0" !== e.opacity,
    w = (t) => {
      if (window.DOMMatrix || window.WebKitCSSMatrix) {
        let e = window.getComputedStyle(t),
          o = e.transform || e.webkitTransform;
        return window.DOMMatrix ? new window.DOMMatrix(o) : new window.WebKitCSSMatrix(o);
      }
    },
    b = (t) => {
      let e = window.getComputedStyle(t);
      return {
        left: x(e, ["borderLeftWidth", "paddingLeft"]),
        right: x(e, ["borderRightWidth", "paddingRight"]),
        top: x(e, ["paddingTop", "borderTopWidth"]),
        bottom: x(e, ["paddingBottom", "borderBottomWidth"])
      };
    },
    x = (t, e) => e.reduce((e, o) => e + v(t[o]), 0),
    v = (t) => {
      let e = parseFloat(t);
      return isNaN(e) ? 0 : e;
    },
    S = {
      isBfs: !1,
      autoAdd: !1,
      onlyElementNodes: !0,
      ignoreNodeNames: new Set(["SCRIPT", "HEAD", "STYLE", "LINK", "META"]),
      ignoreHidden: !0
    };
  const E = (t) => parseInt(t, 10);
  var k = class {
    hasNext() {
      return this.search.length > 0;
    }
    next() {
      const t = this.isBfs ? this.search.shift() : this.search.pop();
      return this.autoAdd && this.addAll(t.childNodes), t;
    }
    addAll(t) {
      let e = Array.from(t);
      return (
        (this.onlyElementNodes || this.ignoreHidden) && (e = e.filter((t) => t.nodeType === t.ELEMENT_NODE)),
        this.ignoreNodeNames && (e = e.filter((t) => !this.ignoreNodeNames.has(t.nodeName))),
        this.ignoreHidden && (e = e.filter((t) => !this.isHidden(t))),
        this.search.push(...e),
        this
      );
    }
    isHidden(t) {
      if (
        !(function (t) {
          return (t && t.nodeType === Node.ELEMENT_NODE) || !1;
        })(t)
      )
        return !1;
      const e = getComputedStyle(t);
      return (
        "none" === e.display ||
        "hidden" === e.visibility ||
        (0 === E(e.height) && "hidden" === e.overflowY && "static" !== e.position) ||
        (0 === E(e.width) && "hidden" === e.overflowX && "static" !== e.position)
      );
    }
    constructor(t, e) {
      (this.root = t || document.body || document.documentElement), (e = e || {});
      const o = Object.keys(e).filter((t) => !(t in S));
      if (o.length) throw new Error(`Invalid SearchNodes keys: ${o.join(", ")}`);
      (e = h({}, S, e)),
        (this.isBfs = e.isBfs),
        (this.autoAdd = e.autoAdd),
        (this.onlyElementNodes = e.onlyElementNodes),
        (this.ignoreNodeNames = e.ignoreNodeNames),
        (this.ignoreHidden = e.ignoreHidden),
        (this.search = this.root ? [this.root] : []);
    }
  };
  const H = { ERROR: 40, WARN: 30, INFO: 20, DEBUG: 10, NOTSET: 0 };
  let O = H.INFO;
  try {
    const t = window.localStorage.getItem("__fploglevel");
    if (t && /^\d+$/.test(t)) {
      const e = parseInt(t, 10);
      O = e;
    }
  } catch (t) {}
  const $ = (t, e, o) => {
      if (!(t < O)) {
        (o && console[o]) || (o = t <= H.DEBUG ? "log" : t <= H.INFO ? "info" : t <= H.WARN ? "warn" : "error");
        try {
          (console[o] || console.log).apply(console, e);
        } catch (t) {}
      }
    },
    N = function (...t) {
      $(H.DEBUG, t);
    };
  var C = N;
  (N.debug = N),
    (N.info = function (...t) {
      $(H.INFO, t);
    }),
    (N.warn = function (...t) {
      $(H.WARN, t);
    }),
    (N.error = function (...t) {
      $(H.ERROR, t);
    }),
    (N.group = function (...t) {
      $(H.DEBUG, t, "group");
    }),
    (N.groupCollapsed = function (...t) {
      $(H.DEBUG, t, "groupCollapsed");
    }),
    (N.groupEnd = function (...t) {
      $(H.DEBUG, t, "groupEnd");
    }),
    (N.j = function (t) {
      if (void 0 === t) return "undefined";
      try {
        return JSON.stringify(t);
      } catch (e) {
        return t;
      }
    });
  const T = (t, e, o) =>
      function (...i) {
        N[!0 === o ? "groupCollapsed" : "group"](t);
        try {
          let t = e.apply(this, i);
          if (_(t)) {
            let e = !1;
            return t
              .then((t) => ((e = !0), N.groupEnd(), t))
              .catch((t) => {
                throw (e || ((e = !0), N.groupEnd()), t);
              });
          }
          return N.groupEnd(), t;
        } catch (t) {
          throw (N.groupEnd(), t);
        }
      },
    _ = (t) => null !== t && "object" == typeof t && "function" == typeof t.then && "function" == typeof t.catch,
    W = () => {
      let t = /Chrome\/([0-9]+)/.exec(navigator.userAgent);
      return t && "49" === t[1];
    };
  const P = new (class {
    _findByDim(t, e) {
      const o = e ? "vertical" : "horizontal",
        i = window.innerWidth,
        n = window.innerHeight;
      let r = 0,
        s = t,
        l = null,
        a = null,
        d = new k(t);
      for (; d.hasNext(); ) {
        let t = !1;
        const o = d.next(),
          c = o[e ? "offsetHeight" : "offsetWidth"],
          h = o[e ? "scrollHeight" : "scrollWidth"];
        if (h > c + 5 && c > 50 && h > r && o[e ? "offsetWidth" : "offsetHeight"] > 40) {
          const d = window.getComputedStyle(o),
            c = d[e ? "overflowY" : "overflowX"],
            u = e ? ["ps-active-y", "ps--active-y"] : ["ps-active-x", "ps--active-x"],
            g = ["ps", "ps-container"].some((t) => o.classList.contains(t)) && u.some((t) => o.classList.contains(t));
          if ("none" !== d.pointerEvents && (("hidden" !== c && "visible" !== c) || g)) {
            const e = m(o),
              c = 18;
            e.left + c >= 0 && e.left + e.width <= i + c && e.top + c >= 0 && e.top + e.height <= n + c
              ? ((a = e), (r = h), (s = o), (l = d), (t = !0))
              : C.debug("ScrollFinder extra off-screen check failed", o);
          } else C.debug("ScrollFinder elt off screen", o);
        }
        t || d.addAll(o.childNodes);
      }
      a = a || m(s);
      let c = a.height,
        h = a.width,
        u = s.scrollWidth,
        g = s.scrollHeight;
      if ("hidden" === (l && l[e ? "overflowX" : "overflowY"]))
        if (e) {
          let t = parseFloat(l.paddingLeft) || 0,
            e = parseFloat(l.paddingRight) || 0;
          (a.left += t), (h -= t + e), (u -= e + e);
        } else {
          let t = parseFloat(l.paddingTop) || 0,
            e = parseFloat(l.paddingBottom) || 0;
          (a.top += t), (c -= t + e), (g -= e + e);
        }
      if (s === document.body) return C.debug(`Skip ScrollFinder ${o}: max_elt is body`), null;
      if (t !== document.body && s === t && Math.abs(u - h) <= 2 && Math.abs(g - c) <= 2)
        return C.debug(`Skip ScrollFinder ${o}: max_elt is root and not scrollable`), null;
      let p = a.left;
      return (
        s.classList.contains("bodyCells") && document.querySelector(".pivotTableContainer .bodyCells") === s && ((h = p + h), (p = 0)),
        a.left + h > innerWidth && a.left < i && (h = i - a.left),
        a.top + c > innerHeight && a.top < innerHeight && (c = n - a.top),
        {
          type: "elt",
          elt: s,
          scrollHeight: Math.max(c, g),
          scrollWidth: Math.max(h, u),
          top: a.top,
          bottom: a.top + c,
          left: p,
          right: p + h,
          height: c,
          width: h,
          ready: !0
        }
      );
    }
    _findFrame(t, e) {
      if (W()) return null;
      const o = Array.from(document.querySelectorAll("iframe, frame")),
        i = Math.min((t * e) / 4, 18e4);
      let n = 0,
        r = null;
      return (
        o.forEach((o) => {
          let s = m(o),
            l = s.width,
            a = s.height,
            d = l * a;
          if (d >= i && d > n && s.left + 18 >= 0 && s.left + s.width <= t + 18 && s.top + 18 >= 0 && s.top + s.height <= e + 18) {
            n = d;
            let t = s.left,
              e = s.top;
            r = {
              type: "frame",
              frame: o,
              width: l,
              height: a,
              top: e,
              left: t,
              url: o.src,
              tagName: o.nodeName.toLowerCase(),
              bottom: e + a,
              right: t + l,
              ready: !1
            };
          }
        }),
        null !== r ? r : null
      );
    }
    bodyBg() {
      const t = [document.body, document.documentElement].filter((t) => t);
      for (; t.length; ) {
        const e = t.shift(),
          o = window.getComputedStyle(e).backgroundColor || "";
        if ("transparent" !== o && !o.match(/^rgba\(\d+,\s*\d+,\s*\d+,\s*0\)$/)) return o;
      }
      return "#ffffff";
    }
    constructor() {
      c(this, "empty", () => ({ type: "empty" })),
        c(
          this,
          "find",
          T("ScrollFinder.find", (t, e, o, i, n) => {
            const r = this.empty(),
              s = o > t + 15,
              l = i > e + 15;
            if (s || l) {
              const n = `${o} > ${t} + 15`,
                a = `${i} > ${e} + 15`;
              return C.debug(`Skip ScrollFinder: widthCheck(${n}, [${s}]) OR heightCheck(${a}, [${l}])`), r;
            }
            if ("chrome-extension:" === window.location.protocol && "/editor.html" === window.location.pathname) return r;
            if (!(n = n || document.body)) return C.debug("Skip ScrollFinder: no document.body"), r;
            if (!f(n)) {
              let t = !0;
              "trello.com" === window.location.hostname && (t = !1);
              const e = this._findByDim(n, t);
              if (e && e.elt !== document.body) return e;
              const o = this._findByDim(n, !t);
              if (o && o.elt !== document.body) return o;
              if (e || o) return e || o;
            }
            return this._findFrame(t, e) || r;
          })
        );
    }
  })();
  var A = P;
  function F(t) {
    if (Array.isArray(t)) return t;
  }
  function B(t) {
    if (("undefined" != typeof Symbol && null != t[Symbol.iterator]) || null != t["@@iterator"]) return Array.from(t);
  }
  function M() {
    throw new TypeError(
      "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
  }
  function R(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var o = 0, i = new Array(e); o < e; o++) i[o] = t[o];
    return i;
  }
  function I(t, e) {
    if (t) {
      if ("string" == typeof t) return R(t, e);
      var o = Object.prototype.toString.call(t).slice(8, -1);
      return (
        "Object" === o && t.constructor && (o = t.constructor.name),
        "Map" === o || "Set" === o
          ? Array.from(o)
          : "Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)
          ? R(t, e)
          : void 0
      );
    }
  }
  function L(t, e) {
    return F(t) || B(t) || I(t, e) || M();
  }
  var j = {};
  j = (function (t) {
    if (t.CSS && t.CSS.escape) return t.CSS.escape;
    var e = function (t) {
      if (0 == arguments.length) throw new TypeError("`CSS.escape` requires an argument.");
      for (var e, o = String(t), i = o.length, n = -1, r = "", s = o.charCodeAt(0); ++n < i; )
        0 != (e = o.charCodeAt(n))
          ? (r +=
              (e >= 1 && e <= 31) || 127 == e || (0 == n && e >= 48 && e <= 57) || (1 == n && e >= 48 && e <= 57 && 45 == s)
                ? "\\" + e.toString(16) + " "
                : (0 == n && 1 == i && 45 == e) ||
                  !(e >= 128 || 45 == e || 95 == e || (e >= 48 && e <= 57) || (e >= 65 && e <= 90) || (e >= 97 && e <= 122))
                ? "\\" + o.charAt(n)
                : o.charAt(n))
          : (r += "�");
      return r;
    };
    return t.CSS || (t.CSS = {}), (t.CSS.escape = e), e;
  })(void 0 !== t ? t : j);
  const D = (t, e, o) => {
    if (t.scrollTo && "function" == typeof t.scrollTo) t.scrollTo(e, o);
    else {
      const i = t;
      (i.scrollLeft = e), (i.scrollTop = o);
    }
  };
  const Y = {
    containsElt: function (t, e) {
      for (; e; ) {
        if (e === t) return !0;
        e = e.parentNode;
      }
      return !1;
    },
    findClass: function (t, e) {
      return Array.from((e || document).getElementsByClassName(t));
    }
  };
  q = d(function (t, e) {
    var o, i, n;
    return g(this, function (r) {
      return (
        (o = t.length),
        (i = void 0 === e),
        [
          2,
          (n = (r, s) => {
            if (r >= o) return s;
            let l;
            return (
              (l = i ? t[r]() : e(t[r])),
              (function (t) {
                return t && "object" == typeof t && t.then && "function" == typeof t.then;
              })(l)
                ? l.then((t) => n(r + 1, t))
                : n(r + 1, l)
            );
          })(0, void 0)
        ]
      );
    });
  });
  var q;
  const z = (t, e) =>
      new Promise((o) => {
        window.setTimeout(() => o(e), t);
      }),
    X = (t, e, o, i, n) =>
      new Promise((r, s) => {
        let l;
        e &&
          ((l = window.setTimeout(() => {
            n && n.delete(l);
            let t = `Promise timed out after ${e}ms`;
            o && (t += " " + o);
            const r = new Error(t);
            if (((r.name = "PromiseTimeout"), i)) {
              !1 === i(r, e) && s(r);
            } else s(r);
          }, e)),
          n && n.add(l)),
          t
            .then((t) => {
              window.clearTimeout(l), n && n.delete(l), r(t);
            })
            .catch((t) => {
              n && n.delete(l), s(t);
            });
      }),
    G = (t) => {
      t.forEach((t) => window.clearTimeout(t)), t.clear();
    },
    U = (t) =>
      ((t) =>
        new Promise((e, o) => {
          const i = new Image();
          (i.onerror = (t) => o(t)), (i.onload = () => e(i)), (i.src = t);
        }))(t).then((e) => ({ img: e, src: t, width: e.width, height: e.height })),
    J = !1,
    Z = new Set(["absolute", "fixed", "relative", "sticky"]),
    K = (function () {
      let t = [],
        e = [];
      const o = {
        _stack: t,
        _fixedStack: e,
        init: () => {
          o.add(document.documentElement, { scrollBehavior: "auto" });
          let t = document.body;
          t && "scroll" === window.getComputedStyle(t).overflowY && o.add(t, { overflowY: "visible" }),
            o._initHangingAbsolutes(),
            o._initFixedPseudos(),
            o.hideScrollbars(),
            o.parallaxHacks(),
            o.disableTransitions(),
            o.hacks();
        },
        _add: (t, e, i) => {
          if (t && t.style) {
            let n = t.style.cssText;
            o._applyStyles(t, e), i.push({ action: "css", elt: t, before: n, after: t.style.cssText });
          }
        },
        add: (e, i) => o._add(e, i, t),
        addFixed: (t, i) => o._add(t, i, e),
        _pop: (t) => {
          let e = t.pop();
          if (e)
            switch (e.action) {
              case "new_elt":
                e.elt.parentNode && e.elt.parentNode.removeChild(e.elt);
                break;
              case "removed_attr":
                e.elt.setAttribute(e.attr, e.value);
                break;
              case "func":
                e.undo();
                break;
              default:
                e.elt.style.cssText = e.before;
            }
          return e;
        },
        popAll: () => {
          for (J, C.debug("Styles popping stack", t.length); t.length; ) o._pop(t);
        },
        popAllFixed: (t) => {
          const i = t ? [document.querySelector("header.fusion-header-wrapper")].filter((t) => t) : [],
            n = [];
          for (; e.length; ) {
            if (i.length) {
              const t = e[e.length - 1];
              if ("func" !== t.action) {
                const o = t.elt,
                  r = i.find((t) => Y.containsElt(t, o));
                if (r) {
                  C.debug("skipping popFixed for", o, "because child of ", r), n.push(e.pop());
                  continue;
                }
              }
            }
            o._pop(e);
          }
          n.length && (e = o._fixedStack = n);
        },
        _initHangingAbsolutes: () => {
          let t = document.body;
          if (!t) return;
          const e = window.getComputedStyle(t);
          if (o.isPositioned(e.position)) return;
          let i = [],
            n = new k(document.body);
          for (; n.hasNext(); ) {
            let t = n.next(),
              e = window.getComputedStyle(t),
              r = e.position;
            if ("absolute" === r) {
              const n = t.nodeName.toLowerCase();
              ({ iframe: !0, img: !0 })[n] && o.pxToInt(e.width) <= 5 && o.pxToInt(e.height) <= 5
                ? C.debug(`skip hanging elt, small ${n}`, t)
                : i.push({ elt: t, style: e });
            } else o.isPositioned(r) || n.addAll(t.childNodes);
          }
          let r = t.getBoundingClientRect(),
            s = r.left + window.scrollX,
            l = r.top + window.scrollY;
          i.forEach((t) => {
            let i = t.elt,
              n = t.style,
              r = n.width,
              a = n.height,
              d = o.pxToFloat(n.left),
              c = o.pxToFloat(n.top) + o.pxToFloat(e.marginTop),
              h = { width: r, height: a, left: d - s + "px", top: c - l + "px", right: "auto", bottom: "auto" };
            C.debug("fix hanging abs", i, h), o.add(i, h);
          });
        },
        isPositioned: (t) => Z.has(t),
        _initFixedPseudos: () => {
          if (!document.body) return;
          let t = new k(document.body);
          for (; t.hasNext(); ) {
            let e = t.next(),
              i = e.getBoundingClientRect();
            if (i.width > 0.75 * window.innerWidth && i.height > 0.75 * window.innerHeight) {
              let i = !1;
              ["::before", "::after"].forEach((t) => {
                if ("fixed" === window.getComputedStyle(e, t).position) {
                  (i = !0), e.id || (e.id = tt.next());
                  let n = `#${window.CSS.escape(e.id)}${t}`,
                    r = `${n} { position: absolute; }`;
                  o.addStyleSheet(r), C.debug("fixed pseudo", n);
                }
              }),
                i || t.addAll(e.childNodes);
            }
          }
        },
        initFixed: () => {
          let t = document.body && window.getComputedStyle(document.body);
          if (t && "absolute" !== t.position) {
            let e = { position: "relative" };
            if (("inline" === t.display && (e.display = "block"), 0 === o.pxToInt(t.width) || 0 === o.pxToInt(t.height)))
              return (
                C.debug("Body has no area, hiding background"),
                void o.add(document.body, { backgroundColor: "transparent", backgroundImage: "none" })
              );
            let i = !1;
            if (
              ("none" === t.maxWidth &&
                0 === o.pxToInt(t.minWidth) &&
                0 === o.pxToInt(t.marginLeft) &&
                ((e.minWidth = "100vw"), (i = K.isBoxSizingRisky(t))),
              "none" === t.maxHeight && 0 === o.pxToInt(t.minHeight) && ((e.minHeight = "100vh"), (i = i || K.isBoxSizingRisky(t, !0))),
              "0px" !== t.marginTop)
            ) {
              let n = o.pxToInt(t.paddingTop) + o.pxToInt(t.marginTop);
              (e.paddingTop = `${n}px`), (e.marginTop = "0px"), (i = !0);
            }
            if ("0px" !== t.marginBottom) {
              let n = o.pxToInt(t.paddingBottom) + o.pxToInt(t.marginBottom);
              (e.paddingBottom = `${n}px`), (e.marginBottom = "0px"), (i = !0);
            }
            i && (e.boxSizing = "border-box"), o.add(document.body, e);
          }
        },
        updateFixed: (t, e, i, n, r, s) => {
          let l = !1;
          let a = o._getFixedAndStickyElts(t, s),
            d = a.fixed,
            c = a.sticky,
            h = a.fixedBg,
            u = a.fixedHeader;
          e ||
            u.forEach((t) => {
              C.debug("hide fixed header", t), o.addFixed(t, { visibility: "hidden", overflow: "hidden" });
            });
          d.forEach((t) => {
            C.group("fixed -> absolute"),
              C.debug(t),
              ((t) => {
                if ("fixed" === t.dataset.position && t.classList.contains("siteBackgroundcurrent"))
                  return void C.debug("%cskip bgimage", "color:pink");
                let e = window.getComputedStyle(t),
                  r = o.pxToFloat(e.left),
                  s = o.pxToFloat(e.right),
                  l = o.pxToFloat(e.top),
                  a = o.pxToFloat(e.bottom),
                  d = o.pxToFloat(e.width),
                  c = o.pxToFloat(e.height),
                  h = t.scrollHeight,
                  u = e.overflowY,
                  g = (p = t).computedStyleMap ? p.computedStyleMap() : null;
                var p;
                let f = {};
                ["left", "right", "top", "bottom", "width", "height"].forEach((t) => {
                  f[t] = g && "auto" !== g.get(t).value;
                }),
                  o.addFixed(t, { position: "absolute", transition: "none" });
                const y = t.offsetParent;
                if (!y) return void C.warn("No offsetParent for", t);
                let w = m(y),
                  b = r - w.left,
                  x = s - (n - (w.left + w.width)),
                  v = l - w.top,
                  S = a - (i - (w.top + w.height)),
                  E = Object.entries(f)
                    .filter((t) => {
                      let e = L(t, 2);
                      return e[0], e[1];
                    })
                    .map((t) => {
                      let e = L(t, 2),
                        o = e[0];
                      return e[1], o;
                    })
                    .join(","),
                  k = ["left", "top", "width", "height"].map((t) => w[t]).join(",");
                C.groupCollapsed("Fixed attrs"),
                  C.debug(`oldLeft=${r} (${e.left})`),
                  C.debug(`oldRight=${s} (${e.right})`),
                  C.debug(`oldTop=${l} (${e.top})`),
                  C.debug(`oldBottom=${a} (${e.bottom})`),
                  C.debug(`oldWidth=${d}, (${e.width})`),
                  C.debug(`oldHeight=${c}, (${e.height})`),
                  C.debug(`oldScrollHeight=${h}`),
                  C.debug(`oldOverflowY=${u}`),
                  C.debug(`specified?=${E}`),
                  C.debug(`parOffset=${k}`, y),
                  C.debug(`top=${v}`),
                  C.debug(`bottom=${S}`),
                  C.debug(`left=${b}`),
                  C.debug(`right=${x}`),
                  C.groupEnd();
                let H = !1,
                  O = {};
                if (
                  (!isNaN(b) && b <= 0
                    ? ((H = !0), f.left || f.right ? (f.left && (O.left = `${b}px`), f.right && (O.right = `${x}px`)) : (O.left = `${b}px`))
                    : f.right && !isNaN(x) && ((H = !0), (O.right = `${x}px`)),
                  !isNaN(v) && v <= 0)
                ) {
                  H = !0;
                  let e = c;
                  ("scroll" !== u && "auto" !== u) || (e = Math.max(e, h)),
                    (O.height = `${e}px`),
                    f.top || f.bottom
                      ? (f.top && f.bottom && delete O.height, f.top && (O.top = `${v}px`), f.bottom && (O.bottom = `${S}px`))
                      : 0 === a && 0 !== t.offsetParent.getBoundingClientRect().height
                      ? (O.bottom = "0px")
                      : ((O.top = `${v}px`), (O.bottom = "auto"));
                } else
                  f.bottom &&
                    !isNaN(S) &&
                    ((H = !0), 0 === a && 0 !== t.offsetParent.getBoundingClientRect().height ? (O.bottom = "0px") : (O.bottom = `${S}px`));
                (O.left ? !O.right : O.right) && f.width && (O.width = `${d}px`),
                  H && (O.width && (O.maxWidth = O.width), O.height && (O.maxHeight = O.height), C.debug("set", O), o.addFixed(t, O));
              })(t),
              C.groupEnd();
          });
          const g = [];
          if (
            (c.forEach((t) => {
              C.debug("sticky -> relative", t),
                o.add(t, { position: "relative", top: "auto", left: "auto", right: "auto", bottom: "auto" }),
                t.id || (t.id = tt.next()),
                g.push(t.id);
            }),
            g.length)
          ) {
            const t = g.map((t) => `#${window.CSS.escape(t)}`).join(","),
              e =
                "position: relative !important; left: auto !important; right: auto !important; top: auto !important; bottom: auto !important;";
            o.addStyleSheet(`${t} { ${e} }`);
          }
          return (
            h.forEach((t) => {
              C.debug("fixedBg -> scroll", t);
              let e = window.getComputedStyle(t),
                i = { backgroundAttachment: "scroll" };
              if (
                (Q(e.backgroundColor) && "no-repeat" === e.backgroundRepeat && (i.backgroundRepeat = "repeat"),
                "cover" === e.backgroundSize)
              ) {
                let n = m(t);
                n.top < 0 && (i.backgroundPositionY = -n.top + "px"),
                  (i.backgroundSize = `${window.innerWidth}px`),
                  C.debug("...override bg size", t, i);
                let r = e.backgroundImage.match(/^url\(["']?(.+)["']\)$/);
                if (r) {
                  let e = r[1];
                  U(e)
                    .then((e) => {
                      let i,
                        n,
                        r = e.width,
                        s = e.height,
                        l = window.innerHeight,
                        a = window.innerWidth,
                        d = (a * s) / r;
                      d >= l ? ((i = a), (n = d)) : ((i = (l * r) / s), (n = l)), o.add(t, { backgroundSize: `${i}px ${n}px` });
                    })
                    .catch((t) => C.error(t));
                }
              }
              o.add(t, i);
            }),
            r &&
              r.forEach((t) => {
                C.debug("overlap -> hidden", t), o.addFixed(t, { visibility: "hidden" });
              }),
            l && C.groupEnd(),
            d.length + c.length
          );
        },
        _getFixedAndStickyElts: (t, e) => {
          let i = [],
            n = [],
            r = [],
            s = { fixed: i, sticky: n, fixedBg: r, fixedHeader: [] },
            l = t || document.body;
          if (!l) return s;
          let a = new k(l, { autoAdd: !0 });
          for (; a.hasNext(); ) {
            let t = a.next();
            if (t === l) continue;
            let d = window.getComputedStyle(t),
              c = d.position,
              h = !1;
            if ((h && C.debug(`%cINSPECT - position: ${c}`, "color:#fff;background:#F90"), "sticky" === c)) n.push(t);
            else if ("fixed" === c) {
              let n = m(t),
                r = 20,
                l = window.innerHeight - n.top - r;
              if (n.top < r && n.height < l) {
                if ((h && C.debug("--\x3e isfixed header", n), e && C.debug("found fixed header", t), o._hasOverflowHiddenParent(t))) {
                  C.debug("skip, has overflow hidden parent", t);
                  continue;
                }
                s.fixedHeader.push(t);
              } else if (
                (n.top + n.height <= 0 && n.height > 0) ||
                (n.left + n.width <= 0 && n.width > 0) ||
                (n.top > window.innerHeight && n.height > 0) ||
                (n.left > window.innerWidth && n.width > 0)
              )
                h && C.debug("--\x3e offscreen", n), e && C.debug("skip fixed offscreen", JSON.stringify(n), t);
              else if (n.height > window.innerHeight && n.width >= (2 * window.innerWidth) / 3) {
                let o = n.height,
                  i = window.innerHeight;
                h && C.debug("--\x3e too tall", o, i), e && C.debug("skip too tall", t, o, i);
              } else {
                if (o._hasOverflowHiddenParent(t)) {
                  C.debug("skip, has overflow hidden parent", t);
                  continue;
                }
                h && C.debug("--\x3e add to fixed!"), i.push(t);
              }
            }
            "fixed" === d.backgroundAttachment && r.push(t);
          }
          return s;
        },
        _hasOverflowHiddenParent: (t) => {
          const e = t.parentNode;
          if (e && e !== document.documentElement && e !== document.body) {
            if ("hidden" === window.getComputedStyle(e).overflow) return !0;
          }
          return !1;
        },
        pxToInt: (t) => parseInt(t, 10),
        pxToFloat: (t) => parseFloat(t),
        _applyStyles: (t, e) => {
          if (t) {
            let i = `${t.style.cssText}; `;
            for (let t in e) {
              i += `${o._camelToDash(t)}: ${e[t]} !important; `;
            }
            t.style.cssText = i;
          }
        },
        _camelToDash: (t) => t.replace(/([a-zA-Z])(?=[A-Z])/g, "$1-").toLowerCase(),
        hideScrollbars: () => {
          if (
            ((o.isMobile() || o._isImage()) && o.add(document.documentElement, { overflow: "hidden" }),
            o._hideScrollbars(["html", "body"]),
            "dispatchEvent" in window && "CustomEvent" in window)
          )
            try {
              window.dispatchEvent(new CustomEvent("resize"));
            } catch (t) {
              C.warn("Error triggering custom resize event", t);
            }
        },
        isMobile: () => o._isTouch(),
        _isTouch: () => {
          try {
            return document.createEvent("TouchEvent"), !0;
          } catch (t) {
            return !1;
          }
        },
        _isImage: () => {
          let t = document.contentType;
          return t && t.startsWith("image/");
        },
        _hideScrollbars: (t) => {
          let e = t.map((t) => `${t}::-webkit-scrollbar`).join(", ") + "{ width: 0 !important; height: 0 !important }";
          o.addStyleSheet(e);
        },
        hideScrollbarsInner: (t) => {
          if ((t.id || (t.id = tt.next()), o._twitchHideScrollbars(t))) return void C.debug("Hide scrollbars twitch");
          let e = `#${window.CSS.escape(t.id)}`;
          o._gmailHideScrollbars(e), o._hideScrollbars([e]);
          let i = ["overflow", "overflowY", "overflowX"],
            n = {};
          i.forEach((e) => (n[e] = t.style[e])), (t.style.overflow = "hidden");
          t.offsetWidth;
          i.forEach((e) => (t.style[e] = n[e]));
        },
        _twitchHideScrollbars: (t) => {
          if (t.classList && t.classList.contains("simplebar-scroll-content")) {
            let e = Array.from(t.parentNode.childNodes).find(
              (t) =>
                t.nodeType === t.ELEMENT_NODE && t.classList && t.classList.contains("simplebar-track") && t.classList.contains("vertical")
            );
            return o.add(e, { opacity: 0 }), !0;
          }
          return !1;
        },
        _gmailHideScrollbars: (t) => {
          let e = [
            "::-webkit-scrollbar-button { width: 0 !important; height: 0 !important; display: none !important; }",
            "::-webkit-scrollbar-corner { background-color: transparent !important; border: 0 !important }",
            "::-webkit-scrollbar-thumb { background-color: transparent !important; box-shadow: none !important }"
          ]
            .map((e) => `${t}${e}`)
            .join("\n");
          o.addStyleSheet(e);
        },
        parallaxHacks: () => {
          if (
            ['div[data-effect="BackgroundParallax"] > .bgImage', 'div[data-effect="BackgroundParallaxZoom"] > .bgImage'].some((t) =>
              document.querySelector(t)
            )
          ) {
            C.debug("wix parallax update");
            const t =
              '\ndiv[data-effect="BackgroundParallax"] {\n  position: absolute !important;\n  left: auto !important;\n  top: auto !important;\n}\ndiv[data-effect="BackgroundParallaxZoom"] {\n  position: absolute !important;\n}\n.bgImage[data-type="image"] {\n  transform: translate3d(0, 0, 0) !important;\n}\n        ';
            o.addStyleSheet(t);
          }
          const t = ".enable-load-effects .Parallax-host .Parallax-item figure";
          if (document.querySelector(t)) {
            C.debug("squarespace parallax update");
            const e = `${t} { opacity: 1 !important; transition: all 0 ease-in-out; }`;
            o.addStyleSheet(e);
          }
        },
        postWarmupHacks: () => {
          const t = Y.findClass("hero-unit");
          if (t.length && t.every((t) => t.style.height)) {
            const e = t
              .map((t) => {
                let e = t.id;
                return e || ((e = tt.next()), (t.id = e)), `#${window.CSS.escape(e)} { height: ${t.style.height} !important; }`;
              })
              .join("\n");
            o.addStyleSheet(e);
          }
        },
        addStyleSheet: (e) => {
          let o = document.createElement("style");
          o.innerHTML = e;
          let i = document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0];
          i && (i.appendChild(o), t.push({ elt: o, action: "new_elt" }));
        },
        disableTransitions: () => {
          o.addStyleSheet(
            "* {\n          transition: none !important;\n          transition-delay: 0s !important;\n          animation-duration: 0s !important;\n          animation-delay: 0s !important;\n        }"
          );
          let e = "data-aos",
            i = Array.from(document.querySelectorAll(`[${e}]`));
          if (
            (i.length &&
              (C.debug("disable AOS"),
              i.forEach((o) => {
                let i = o.getAttribute(e);
                o.removeAttribute(e), t.push({ elt: o, action: "removed_attr", attr: e, value: i });
              })),
            document.documentElement.classList.contains("skrollr"))
          ) {
            C.debug("disable Skrollr");
            let t = document.body || document.head;
            if (t) {
              let e = document.createElement("script");
              e.innerHTML = 'skrollr.init().destroy(); throw new Error("haha")';
              try {
                t.appendChild(e);
              } catch (t) {
                C.error(t);
              }
            }
          }
          if (
            (window.dispatchEvent(new CustomEvent("animateme:destroy")),
            t.push({
              action: "func",
              undo: () => {
                window.dispatchEvent(new CustomEvent("animateme:enable"));
              }
            }),
            document.querySelector("body > .Parallax-host-outer .Parallax-host"))
          ) {
            let t =
              "\n          .Parallax-item, .Parallax-item figure {\n            position: absolute !important;\n            transform: translate3d(0px, 0px, 0px) !important;\n          }";
            o.addStyleSheet(t);
          }
          let n = "body.parallax-scrolling #parallax-images .image-container";
          if (document.querySelector(n)) {
            let t = `${n}, ${n} img {\n              transform: translate3d(0px, 0px, 0px) !important;\n            }\n        `;
            o.addStyleSheet(t);
          }
          let r = Array.from(document.querySelectorAll('[data-parallax="scroll"][data-image-src]')),
            s = Array.from(document.getElementsByClassName("parallax-mirror"));
          if (r.length && r.length === s.length) {
            let t = "\n          .parallax-mirror { display: none !important; }\n        ";
            o.addStyleSheet(t),
              r.forEach((t) => {
                o.add(t, { backgroundImage: `url(${t.dataset.imageSrc})`, backgroundPosition: "center", backgroundSize: "cover" });
              });
          }
        },
        hacks: () => {
          o._googleHack(), o._quoraHack(), o._adwordsStickyClassHack(), o._squarespaceHack(), o._notionHack();
        },
        _googleHack: () => {
          document.querySelectorAll('[role="progressbar"]').forEach((t) => {
            "none" === t.style.display &&
              (C.debug("%cHide progressbar!", "font-size:24px;color:red", t), o.add(t, { visibility: "hidden" }));
          });
        },
        _squarespaceHack: () => {
          o.addStyleSheet(".sqs-layout .sqs-row .sqs-block-content figure { opacity: 1 !important; }");
        },
        _quoraHack: () => {
          const t = window.location.host,
            e = "quora.com";
          if (t === e || t.endsWith(e)) {
            const t = ".Answer.ActionBar.sticky { position: static !important }";
            o.addStyleSheet(t);
          }
        },
        _adwordsStickyClassHack: () => {
          o.addStyleSheet(
            '[stickyclass="sticky"], ess-particle-table [role="row"], [acxscrollhost] .header-sticky-container  { transform: translate(0px, 0px) !important }'
          );
        },
        _notionHack: () => {
          if (document.querySelector(".notion-scroller")) {
            const t = ".notion-scroller > .notion-table-view > .notion-selectable > div { transform: none !important; }";
            o.addStyleSheet(t);
          }
        },
        isBoxSizingRisky: (t, e) => {
          const o = ["paddingTop", "paddingBottom", "borderTopWidth", "borderBottomWidth"];
          !0 !== e && o.push("paddingRight", "paddingLeft", "borderRightWidth", "borderRightWidth");
          const i = o.some((e) => t[e] && "0px" !== t[e]);
          return "content-box" === t.boxSizing && i;
        }
      };
      return o;
    })();
  var V = K;
  const Q = (t) =>
      ({ "": !0, "rgba(0,0,0,0)": !0, "#0000": !0, "#00000000": !0, transparent: !0 })[(t = (t || "").toLowerCase().replace(/\s+/g, ""))] ||
      !1,
    tt = (function () {
      let t = 0;
      return { next: () => (t++, `__FPSC_ID_${t}_${new Date().getTime()}`) };
    })(),
    et = "color:#4A6;";
  class ot {
    calculate() {
      T("[arrangements.calculate]", () => {
        void 0 === this.scrollable && this.getScrollable(), this._setRegions(), this._setPositions();
      })();
    }
    popNextPosition() {
      let t = this.positions.shift();
      return (this.lastPosition = t), t;
    }
    addPageHeightChange(t, e) {
      C.debug(`%c[arrangements.addPageHeightChange] ${e}`, "color:#B60", "for", t),
        this.addedHeightChange && C.debug("%c[arrangements.addPageHeightChange] ALREADY ADDED", "color:#F00"),
        (this.addedHeightChange = !0),
        this.positions.unshift(t);
      let o = this.positions.filter((t) => !1 === t.isFrame && t.isMain && t.scrollY > 0),
        i = it(o.map((t) => (!1 === t.isFrame ? t.scrollY : 0)));
      i > 0 &&
        (o.forEach((t) => (t.yAdjust = e)),
        o.forEach((t) => {
          if (!1 === t.isFrame && t.scrollY === i) {
            let o = Object.assign({}, t);
            (o.scrollY -= e), this.positions.push(o);
          }
        }));
    }
    getDimensions() {
      let t = this,
        e = t.body,
        o = t.docElt,
        i = (t.origBodyHeightZero, window.innerWidth),
        n = window.innerHeight;
      const r = e ? window.getComputedStyle(e) : {},
        s = [
          o.clientWidth,
          o.offsetWidth,
          "hidden" !== r.overflowX ? o.scrollWidth : 0,
          e ? e.offsetWidth : 0,
          e && "hidden" !== r.overflowX ? e.scrollWidth : 0
        ],
        l = "hidden" === r.overflowY && "hidden" === r.overflowX,
        a = [o.clientHeight, o.offsetHeight, l ? 0 : o.scrollHeight],
        d = [e ? e.offsetHeight : 0, e && !l ? e.scrollHeight : 0],
        c = it(a),
        h = it(d);
      let u;
      C.debug(`arrangements:\n\n*  widths: ${JSON.stringify(s)}\n*  docEHt: ${JSON.stringify(a)}\n*  bodyHt: ${JSON.stringify(d)}\n`);
      let g = it(s),
        p = it([c, h]);
      if (document.body) {
        let t = document.getElementById("lightbox-wrap");
        if (t) {
          let e = m(t),
            o = window.getComputedStyle(t);
          const r = (t) => {
            let e = parseInt(t, 10);
            return isNaN(e) ? 0 : e;
          };
          if ("fixed" === o.position && r(o.zIndex) >= 1e3 && y(e, o)) {
            let r = 2;
            [e.left, e.top, i - e.width, n - e.height].every((t) => Math.abs(t) <= r) &&
              (C.debug("OVERRIDE DIMS:", e, `zIndex=${o.zIndex}`, t), (u = t), (g = i), (p = n));
          }
        }
      }
      const f = {
        windowWidth: i,
        windowHeight: n,
        bodyMaxHeight: h,
        docEltMaxHeight: c,
        fullWidth: g,
        fullHeight: p,
        nonadjustedFullHeight: p,
        nonadjustedFullWidth: g,
        root: u
      };
      return C.debug("DIMENSIONS:", f), f;
    }
    ignoreScrollable() {
      this.scrollable = A.empty();
    }
    getScrollable() {
      let t = this.dimensions,
        e = A.find(t.windowWidth, t.windowHeight, t.fullWidth, t.fullHeight, t.root);
      return (this.scrollable = e), e;
    }
    addFrameResponse(t) {
      if (!this.scrollable) {
        const t = new Error("No scrollable set inside addFrameResponse");
        throw ((t.name = "AddFrameResponseError"), t);
      }
      if (t) {
        const e = ["width", "height"].filter((e) => void 0 === t[e]);
        if (e.length) {
          const t = new Error(`Bad attrs inside frameResponse: ${e.join(", ")}`);
          throw ((t.name = "AddFrameResponseError"), t);
        }
        Object.assign(this.scrollable, { ready: !0, scrollWidth: t.width, scrollHeight: t.height });
      }
    }
    _setRegions() {
      const t = [],
        e = [],
        o = this.scrollable,
        i = this.dimensions,
        n = i.fullWidth,
        r = i.fullHeight;
      let s = window;
      const l = this.dimensions,
        a = l.bodyMaxHeight,
        d = l.docEltMaxHeight;
      if ((a - 20 > d && (C.debug(`Scroll via body: ${a} vs ${d}`), (s = this.body)), "empty" !== o.type && o.ready)) {
        const i = o.bottom < r,
          l = o.right < n;
        let a, d;
        if (
          ("elt" === o.type
            ? (d = {
                type: "inner_elt",
                page: {
                  elt: o.elt,
                  eltHeight: o.height,
                  eltWidth: o.width,
                  eltOffsetLeft: o.left,
                  eltOffsetTop: o.top,
                  top: 0,
                  left: 0,
                  right: o.scrollWidth,
                  bottom: o.scrollHeight
                },
                capture: { x: o.left, y: o.top, width: o.scrollWidth, height: o.scrollHeight }
              })
            : "frame" === o.type &&
              (d = {
                type: "inner_frame",
                page: {
                  eltHeight: o.height,
                  eltWidth: o.width,
                  eltOffsetLeft: o.left,
                  eltOffsetTop: o.top,
                  top: 0,
                  left: 0,
                  right: o.scrollWidth,
                  bottom: o.scrollHeight
                },
                capture: { x: o.left, y: o.top, width: o.scrollWidth, height: o.scrollHeight }
              }),
          i &&
            l &&
            (C.debug("%c...SE region", et),
            t.push({
              type: "main",
              page: { elt: s, top: o.bottom, left: o.right, right: n, bottom: r },
              capture: {
                delay: 0,
                x: o.right + (o.scrollWidth - o.width),
                y: o.bottom + (o.scrollHeight - o.height),
                width: n - o.right,
                height: r - o.bottom
              }
            })),
          i)
        ) {
          C.debug("%c...SW region", et),
            (a = {
              type: "main",
              page: { elt: s, top: o.bottom, left: 0, right: o.right, bottom: r },
              capture: { delay: 0, x: 0, y: o.bottom + (o.scrollHeight - o.height), width: o.right, height: r - o.bottom }
            }),
            t.push(a);
          const i = a.capture.height,
            n = a.capture.y;
          e.push({
            type: "fill",
            fill: { x: a.capture.x + a.capture.width, y: n, width: d.capture.width - o.width, height: i },
            sample: { x: d.capture.x, y: n, height: i, width: o.width }
          });
        }
        if (l) {
          C.debug("%c...NE region", et),
            (a = {
              type: "main",
              page: { elt: s, top: 0, left: o.right, right: n, bottom: o.bottom },
              capture: { delay: 0, x: o.right + (o.scrollWidth - o.width), y: 0, width: n - o.right, height: o.bottom }
            }),
            t.push(a);
          const i = a.capture.width,
            r = a.capture.x,
            l = a.capture.y + a.capture.height;
          e.push({
            type: "fill",
            fill: { x: r, y: l, width: i, height: d.capture.y + d.capture.height - l },
            sample: { x: r, y: d.capture.y, width: i, height: a.page.bottom - d.capture.y }
          });
        }
        C.debug("%c...NW region (no if-statement)", et),
          (a = {
            type: "main",
            page: { elt: s, top: 0, left: 0, right: o.right, bottom: o.bottom },
            capture: { delay: 0, x: 0, y: 0, width: o.right, height: o.bottom }
          }),
          t.push(a);
        let c = a.capture.y + a.capture.height,
          h = 0,
          u = d.capture.x;
        e.push({
          type: "fill",
          fill: { x: h, y: c, width: u, height: d.capture.y + d.capture.height - c },
          sample: { x: h, y: d.capture.y, width: u, height: a.page.bottom - d.capture.y }
        }),
          (c = 0);
        let g = d.capture.y - c;
        e.push({
          type: "fill",
          fill: { x: a.capture.x + a.capture.width, y: c, width: d.capture.width - o.width, height: g },
          sample: { x: d.capture.x, y: c, width: o.width, height: g }
        }),
          C.debug("%c...innerRegion", et),
          t.push(d),
          (this.dimensions.fullWidth += Math.max(0, d.page.right - d.page.eltWidth)),
          (this.dimensions.fullHeight += Math.max(0, d.page.bottom - d.page.eltHeight));
      } else
        C.debug("%c...no scrollable, 1 region", et),
          t.push({ type: "main", page: { elt: s, top: 0, left: 0, right: n, bottom: r }, capture: { x: 0, y: 0, width: n, height: r } });
      (this.regions = t), (this.bgRegions = e);
      const c = A.bodyBg();
      (this.canvasBg = c),
        C.debug("%c[arrangements._setRegions] REGIONS:", et, t),
        (function (t) {
          const e = 1,
            o = { type: "", page: { top: e, left: e, right: e, bottom: e }, capture: { x: e, y: e, width: e, height: e } },
            i = { eltHeight: e, eltWidth: e, eltOffsetTop: e, eltOffsetLeft: e },
            n =
              0 ===
              t.filter((t, e) => {
                let n = !1;
                if (!nt(t, o)) {
                  n = !0;
                  let i = rt(t);
                  C.error(`Bad shape for region ${e}: ${i}, expects: ${rt(o)}`);
                }
                if (("inner_elt" === t.type || "inner_frame" === t.type) && !nt(t.page, i)) {
                  n = !0;
                  let o = rt(t.page);
                  C.error(`Bad capture element shape for region ${e}: ${o}, expects: ${rt(i)}`);
                }
                return n;
              }).length;
          if (!n) throw new Error("Bad regions setup!");
        })(t),
        (function (t) {
          const e = 1,
            o = { x: e, y: e, width: e, height: e },
            i =
              0 ===
              t.filter((t) => {
                ["sample", "fill"].filter((e) =>
                  t[e]
                    ? !nt(t[e], o) && (C.error(`Bad bgRegion shape ${rt(t[e])}, expects: ${rt(o)}`), !0)
                    : (C.error(`Missing ${e} element on bgRegion!`), !0)
                ).length;
              }).length;
          if (!i) throw new Error("Bad bgRegions setup!");
        })(e);
    }
    _setPositions() {
      const t = this.dimensions,
        e = t.windowWidth,
        o = t.windowHeight,
        i = t.fullWidth,
        n = (t.fullHeight, []);
      this.regions.forEach((t) => {
        if ("inner_frame" === t.type) return void n.push({ isFrame: !0 });
        const r = t.page,
          s = "main" === t.type ? 200 : 100,
          l = { x: r.left, y: r.top, width: Math.min(e, r.right - r.left), height: Math.min(o, r.bottom - r.top) };
        "main" !== t.type &&
          ((l.x += t.page.eltOffsetLeft || 0),
          (l.y += t.page.eltOffsetTop || 0),
          (l.width = t.page.eltWidth || l.width),
          (l.height = t.page.eltHeight || l.height));
        let a = [];
        if ("inner_elt" === t.type) {
          const e = t.page.elt === window ? document.documentElement : t.page.elt,
            o = dt(t.page);
          document.querySelectorAll(".absolute.bottom-0").forEach((t) => {
            const i = t;
            if (!Y.containsElt(e, i)) {
              const t = m(i),
                e = at(t);
              if (lt(e, o)) {
                const t = o.y2 - o.y1,
                  n = (e.y1 - o.y1) / t;
                o.y2, e.y2;
                n > 0.5 && a.push(i);
              }
            }
          });
        }
        if (0 === l.width || 0 === l.height) return void C.warn("clip has zero area", t, l);
        const d = Object.assign({}, l),
          c = Object.assign({}, t.capture);
        d.height - s > 0 && c.height - s > 0 && ((d.y += s), (d.height -= s), (c.y += s), (c.height -= s));
        const h = ("inner_elt" === t.type && t.page.eltHeight) || o;
        let u = h - (h > s ? s : 0),
          g = ("inner_elt" === t.type && t.page.eltWidth) || e;
        window.devicePixelRatio < 1 ? (u -= Math.ceil(1 / window.devicePixelRatio)) : (u -= Math.ceil(window.devicePixelRatio));
        let p = 0;
        for (; p < r.bottom; ) {
          const e = 0 === p,
            o = p + h >= r.bottom;
          let s = r.left;
          for (; s < i; ) {
            const i = {
              isMain: "main" === t.type,
              isFrame: !1,
              isTopOfElt: e,
              elt: t.page.elt,
              scrollX: s,
              scrollY: p,
              clip: e ? l : d,
              capture: e ? t.capture : c,
              hideElts: !o && a.length ? a : void 0
            };
            n.push(i), (s += g);
          }
          if (o) break;
          p += u;
        }
      }),
        C.debug("%c[arrangements._setPositions] POSITIONS:", et, n.slice()),
        (this.positions = n),
        (this.numPositions = n.length),
        n.forEach((t, e) => {
          t.index = e;
        });
    }
    constructor(t, e, o) {
      (this.origBodyHeightZero = t),
        (this.origWindowX = e),
        (this.origWindowY = o),
        (this.scrollable = null),
        (this.regions = []),
        (this.bgRegions = []),
        (this.positions = []),
        (this.numPositions = 0),
        (this.canvasBg = null),
        (this.addedHeightChange = !1),
        (this.scrollableScrollWidth = null),
        (this.scrollableScrollHeight = null),
        (this.lastPosition = null),
        (this.docElt = document.documentElement),
        (this.body = document.body),
        (this.dimensions = this.getDimensions());
    }
  }
  function it(t) {
    return Math.max(...t.filter((t) => "number" == typeof t));
  }
  const nt = (t, e) => {
      if (t === e) return !0;
      let o = typeof t;
      return (
        null != t && null != e && o === typeof e && ("object" !== o || 0 === Object.keys(e).filter((o) => !0 !== nt(t[o], e[o])).length)
      );
    },
    rt = (t) => JSON.stringify(t, st, 2);
  function st(t, e) {
    return e === window ? "<window>" : e;
  }
  const lt = (t, e) =>
      ((t.x1 >= e.x1 && t.x1 <= e.x2) ||
        (t.x2 >= e.x1 && t.x2 <= e.x2) ||
        (e.x1 >= t.x1 && e.x1 <= t.x2) ||
        (e.x2 >= t.x1 && e.x2 <= t.x2)) &&
      ((t.y1 >= e.y1 && t.y1 <= e.y2) ||
        (t.y2 >= e.y1 && t.y2 <= e.y2) ||
        (e.y1 >= t.y1 && e.y1 <= t.y2) ||
        (e.y2 >= t.y1 && e.y2 <= t.y2)),
    at = (t) => ({ x1: t.left, x2: t.left + t.width, y1: t.top, y2: t.top + t.height }),
    dt = (t) => ({ x1: t.eltOffsetLeft, x2: t.eltOffsetLeft + t.eltHeight, y1: t.eltOffsetTop, y2: t.eltOffsetTop + t.eltHeight }),
    ct = (t) =>
      new Promise((e, o) => {
        chrome.runtime.sendMessage(t, (t) => {
          const i = chrome.runtime.lastError;
          i ? o({ name: "ChromeRuntimeError", message: i.message, via: "sendMessage" }) : e(t);
        });
      }),
    ht = "background:#FF0;color:#000";
  var ut = (t) => {
    const e = t.scrollable;
    if ("empty" === e.type) throw Error("Cannot do frame for empty response");
    const o = {
      msg: n,
      windowWidth: window.innerWidth,
      url: "frame" === e.type ? e.url : void 0,
      tagName: "frame" === e.type ? e.tagName : void 0,
      top: e.top,
      left: e.left,
      width: e.width,
      height: e.height
    };
    return (
      C.debug("%c[frame.sendMessage] start: request ", ht, o),
      ct(o).then(
        (e) => (
          C.debug("%c[frame.sendMessage] end: response ", ht, e),
          !e.skip && e.width && e.height ? { width: e.width, height: e.height } : void t.ignoreScrollable()
        )
      )
    );
  };
  const gt = (t, e, o) => {
      if (!t || !t.getBoundingClientRect) return [];
      const i = t.getBoundingClientRect(),
        n = { x: e, y: o, width: i.width, height: i.height };
      if (yt(t)) return [n];
      const r = pt(t, !0),
        s = pt(t, !1);
      if (!r || !s) return [n];
      ft(r) && window.getComputedStyle(r).display;
      const l = r.getBoundingClientRect(),
        a = s.getBoundingClientRect();
      let d = 0,
        c = 0;
      if (mt(r) && ((c = i.x - l.x), (d = i.y - l.y), ft(r) && -1 === window.getComputedStyle(r).display.indexOf("inline"))) {
        const t = m(r);
        (e = t.left), (o = t.top);
      }
      const h = (t) => {
        let n = i.y - l.y;
        return { x: t.x - l.x + e - 0, y: t.y - l.y + o - n, width: t.width, height: t.height };
      };
      if (bt(l, a)) return [h(wt(l, a))];
      const u = l.height,
        g = a.height,
        p = Math.min(u, g),
        f = a.y + a.height - l.y - l.height - a.height,
        y = { x: l.x, y: l.y, width: i.width - (l.x - i.x), height: l.height },
        w = { x: i.x, y: a.y, width: a.x + a.width - i.x, height: a.height };
      let b;
      if (f >= p) {
        b = [y, { x: i.x, y: i.y + l.height, width: i.width, height: f }, w].map(h);
      } else b = [y, w].map(h);
      return b;
    },
    pt = (t, e) => {
      let o = void 0 === e || e;
      if (!t) return null;
      switch (t.nodeType) {
        case Node.ELEMENT_NODE: {
          const e = t;
          if (yt(e)) return e;
          break;
        }
        case Node.TEXT_NODE: {
          const e = t,
            i = document.createRange();
          e.length ? (i.setStart(e, o ? 0 : e.length - 1), i.setEnd(e, o ? 1 : e.length)) : i.selectNode(e);
          const n = i.getBoundingClientRect();
          return 0 === n.x && 0 === n.y && 0 === n.width && 0 === n.height && 0 === n.left && 0 === n.right && 0 === n.top && 0 === n.bottom
            ? null
            : i;
        }
        default:
          return null;
      }
      const i = t.childNodes.length;
      let n = o ? 0 : i - 1;
      const r = o ? i : -1,
        s = o ? 1 : -1;
      for (; n !== r; ) {
        const e = t.childNodes[n],
          i = pt(e, o);
        if (i) return i;
        n += s;
      }
      return null;
    };
  function ft(t) {
    return t && "string" == typeof t.nodeName;
  }
  const mt = (t) => {
      if (t && ft(t)) {
        if ("IMG" === t.nodeName || "CANVAS" === t.nodeName) return !0;
        const e = window.getComputedStyle(t);
        return "inline" !== e.display || "left" === e.float || "right" === e.float;
      }
      return !1;
    },
    yt = (t) => t && (0 === t.childNodes.length || "inline" !== window.getComputedStyle(t).display),
    wt = (t, e) => {
      let o = Math.min(t.x, e.x),
        i = Math.min(t.y, e.y);
      return { x: o, y: i, width: Math.max(t.x + t.width, e.x + e.width) - o, height: Math.max(t.y + t.height, e.y + e.height) - i };
    },
    bt = (t, e) => {
      const o = t.y,
        i = t.y + t.height,
        n = e.y,
        r = e.y + e.height;
      return (o === n && i === r) || xt(o, n, r) || xt(i, n, r) || xt(n, o, i) || xt(r, o, i);
    },
    xt = (t, e, o) => t > Math.min(e, o) && t < Math.max(e, o);
  class vt {
    step(t) {
      const e = this.linkObserver.takeRecords();
      let o = null;
      t && "empty" !== t.type && !0 === t.ready && (o = t);
      return this.asLinks(e, o);
    }
    end() {
      this.linkObserver.disconnect();
    }
    asLinks(t, e) {
      const o = [];
      let i = 0;
      if (document.body) {
        const t = window.getComputedStyle(document.body);
        i = (parseInt(t.left, 10) || 0) + (parseInt(t.marginLeft, 10) || 0);
      }
      return (
        t.forEach((t) => {
          const n = m(t);
          if (0 !== n.width && 0 !== n.height) {
            const r = gt(t, n.left + i, n.top);
            e && St(t, r, e);
            const s = { bounds: r, url: t.href };
            o.push(s);
          }
        }),
        o
      );
    }
    constructor() {
      this.linkObserver = new Et();
    }
  }
  const St = (t, e, o) => {
    console.log("%cSCROLLABLE", "font-size:40px;background:pink", "left", o.left, "width", o.width, "scrollWidth", o.scrollWidth);
    const i = o.left + o.width,
      n = o.top + o.height,
      r = o.scrollWidth - o.width,
      s = o.scrollHeight - o.height;
    "elt" === o.type && o.elt,
      ("elt" === o.type && o.elt.contains(t)) || (e[0].x >= i && e.forEach((t) => (t.x += r)), e[0].y >= n && e.forEach((t) => (t.y += s)));
  };
  class Et {
    _processIntersections(t) {
      t.forEach((t) => {
        t.isIntersecting && (this.onObserve(t.target), this.intersectionObserver && this.intersectionObserver.unobserve(t.target));
      });
    }
    _processMutations(t) {
      var e = !0,
        o = !1,
        i = void 0;
      try {
        for (var n, r = t[Symbol.iterator](); !(e = (n = r.next()).done); e = !0) {
          const t = n.value;
          if ("childList" === t.type) {
            const e = t.target;
            t.addedNodes.forEach((t) => {
              this.addElts([e]);
            });
          }
        }
      } catch (t) {
        (o = !0), (i = t);
      } finally {
        try {
          e || null == r.return || r.return();
        } finally {
          if (o) throw i;
        }
      }
    }
    takeRecords(t) {
      if (t && this.mutationObserver && this.intersectionObserver) {
        const t = this.mutationObserver.takeRecords();
        this._processMutations(t);
        const e = this.intersectionObserver.takeRecords();
        this._processIntersections(e);
      }
      const e = this._elts;
      return (this._elts = []), e;
    }
    addElts(t) {
      const e = (t) => {
        this._prevLinks.has(t) ||
          (this._prevLinks.add(t), this.intersectionObserver ? this.intersectionObserver.observe(t) : this.onObserve(t));
      };
      t.forEach((t) => {
        "A" === t.nodeName ? e(t) : t.querySelectorAll("a").forEach((t) => e(t));
      });
    }
    onObserve(t) {
      this._elts.push(t);
    }
    disconnect() {
      var t, e;
      null === (t = this.mutationObserver) || void 0 === t || t.disconnect(),
        null === (e = this.intersectionObserver) || void 0 === e || e.disconnect();
    }
    constructor() {
      c(this, "_prevLinks", new Set()),
        (this.intersectionObserver = null),
        (this.mutationObserver = null),
        (this._elts = []),
        document.body &&
          ((this.intersectionObserver = window.IntersectionObserver
            ? new IntersectionObserver((t, e) => {
                this._processIntersections(t);
              }, {})
            : null),
          this.addElts(document.querySelectorAll("a")),
          (this.mutationObserver = new MutationObserver((t, e) => {
            this._processMutations(t);
          })),
          this.mutationObserver.observe(document.body, { attributes: !1, childList: !0, subtree: !0 }));
    }
  }
  const kt = !1,
    Ht = !0;
  kt && (O = H.DEBUG);
  const Ot = 150,
    $t = 0;
  let Nt = null;
  const Ct = Math.round(new Date().getTime() / 1e3),
    Tt = new Set();
  function _t(t, a, d) {
    switch ((C.debug(`%c[[[onMessage]]](${Ct})`, "background:red;color:#fff;", t.msg), t.msg)) {
      case r:
        return G(Tt), V.popAll(), V.popAllFixed(), d({ startTime: Ct, script: "js/page/index.js" }), !1;
      case l:
        try {
          !(function (t) {
            C.debug(`\n### Initiate: ${window.location.href}\n`);
            let e = document.body,
              i = window.scrollX,
              n = window.scrollY,
              r = (e && 0 === e.offsetHeight) || !1;
            V.init(), Ht && V.initFixed();
            let s = new ot(r, i, n);
            const l = new vt(),
              a = s.getScrollable();
            C.debug("SCROLLABLE:", `type=${a.type}`, "frame" === a.type ? a.frame : "elt" === a.type ? a.elt : "<NONE>"),
              Promise.resolve()
                .then(() => ("frame" === a.type && a.frame && 0 === t ? ut(s) : void 0))
                .then(
                  (t) => (
                    s.addFrameResponse(t),
                    s.calculate(),
                    "elt" === a.type && a.elt && (V.add(a.elt, { scrollBehavior: "auto" }), V.hideScrollbarsInner(a.elt)),
                    (function (t) {
                      return Wt.apply(this, arguments);
                    })(s)
                  )
                )
                .then(() => Pt(s, t, l))
                .then(() => C.debug("capture response", t))
                .then(() => ct({ msg: o, canvasId: t }))
                .catch((t) => {
                  C.error(t), Dt(t);
                });
          })(t.canvasId);
        } catch (t) {
          Dt(t);
        }
        return d({ info: "send response immediately for chromium 114 bug" }), !1;
      case s:
        C.info("[POPUP LOG]", t.data);
        break;
      case e:
      case i:
      case n:
        C.error(`Not expecting this message: ${t.msg}`, t);
        break;
      default:
        C.info(`Ignoring message: ${t.msg}`, t);
    }
  }
  function Wt() {
    return (Wt = d(function (t) {
      var e, o, i;
      return g(this, function (n) {
        switch (n.label) {
          case 0:
            return t.numPositions
              ? /^(.*\.)?imgur\.com$/.test(window.location.hostname)
                ? [2]
                : ((e = t.positions.filter((t) => !1 === t.isFrame)),
                  [4, It((o = e.reduce((t, e) => (e.scrollY > t.scrollY ? e : t))).elt, o.scrollX, o.scrollY)])
              : [2];
          case 1:
            return (i = n.sent()), C.debug("warmup page:", i), [4, It(o.elt, 0, 0)];
          case 2:
            return n.sent(), V.postWarmupHacks(), [4, z(60)];
          case 3:
            return n.sent(), [2];
        }
      });
    })).apply(this, arguments);
  }
  function Pt(t, e, o) {
    return At.apply(this, arguments);
  }
  function At() {
    return (At = d(function (t, e, o) {
      return g(this, function (i) {
        return t.positions.length ? [2, Bt(t, e, o).then((i) => (i ? Pt(t, e, o) : (Mt(t, o), !1)))] : (Mt(t, o), [2, !0]);
      });
    })).apply(this, arguments);
  }
  function Ft() {
    return (Ft = d(function (t, o, i) {
      var n, r, s, l, a, d, c, p, f, m, y, w, b, x, v, S, E, k, H, O;
      return g(this, function (g) {
        switch (g.label) {
          case 0:
            return (
              (n = t.positions.length === t.numPositions),
              (r = t.lastPosition),
              (s = t.popNextPosition()),
              (l = 0),
              (a = 0),
              (d = !1),
              !1 === s.isFrame && ((l = s.scrollX), (a = s.scrollY), (d = s.isMain)),
              (c = s.yAdjust || 0),
              (p = !t.addedHeightChange && d && r && (1 === s.index || 2 === s.index) && a > 0),
              (f = (t.numPositions - t.positions.length) / t.numPositions),
              (m = {
                msg: e,
                canvasId: o,
                complete: f,
                canvasBg: t.canvasBg,
                bgRegions: t.bgRegions,
                windowWidth: t.dimensions.windowWidth,
                windowHeight: t.dimensions.windowHeight,
                totalWidth: t.dimensions.fullWidth,
                totalHeight: t.dimensions.fullHeight,
                devicePixelRatio: window.devicePixelRatio
              }),
              kt && (m.debug = !0),
              "page.sendMessage",
              (y = (e) => X(e, 1e4, "page.sendMessage", () => (C.warn("Cleanup timeout triggered"), Mt(t, i), !0), Tt)),
              !0 === s.isFrame
                ? ((w = u(h({ scriptStart: Ct }, m), { isFrame: !0 })), [2, y(ct(w)).then((t) => !!t)])
                : s.elt
                ? [4, It(s.elt, l, a + c, p)]
                : (C.error("Missing next.elt!", s),
                  ((b = new Error("Missing next.elt! " + s)).name = "ArrangementsError"),
                  [2, Promise.reject(b)])
            );
          case 1:
            if (
              ((x = g.sent()),
              C.debug(`docElt scrollheight: ${document.documentElement.scrollHeight}`),
              (v = u(h({ scriptStart: Ct }, m), { isFrame: !1, x: x.x, y: x.y - c, clip: s.clip, capture: s.capture })),
              p)
            ) {
              if (
                (C.group(`check for height change... (step: ${s.index}) (scrollHeight: ${document.documentElement.scrollHeight})`),
                (S = t.getDimensions()),
                (E = Math.ceil(S.nonadjustedFullHeight - t.dimensions.nonadjustedFullHeight)) < 0)
              )
                return (
                  C.debug(`%cHeight change: ${E} {{do extra capture step}}`, "color:#b60"),
                  C.groupEnd(),
                  t.addPageHeightChange(s, E),
                  [2, Bt(t, o, i)]
                );
              C.debug(`no height change: ${E}`), C.groupEnd();
            }
            return (k = 20), n && V.isMobile() && (k = 500), [4, z(k)];
          case 2:
            return (
              g.sent(),
              Ht &&
                V.updateFixed(
                  "elt" === t.scrollable.type ? t.scrollable.elt : null,
                  s.isTopOfElt,
                  t.dimensions.nonadjustedFullHeight,
                  t.dimensions.nonadjustedFullWidth,
                  s.hideElts,
                  n
                ) &&
                ((t.origWindowX = window.scrollX), (t.origWindowY = window.scrollY)),
              (H = void 0 === s.capture.delay ? Ot : s.capture.delay),
              [4, z(H)]
            );
          case 3:
            return g.sent(), (v.links = i.step(t.scrollable)), [4, y(ct(v))];
          case 4:
            return (O = g.sent()), C.debug("sendMessage.callback", !!O), V.popAllFixed(!0), O ? [4, z($t)] : [3, 6];
          case 5:
            return g.sent(), [2, !0];
          case 6:
            return [2, !1];
          case 7:
            return [2];
        }
      });
    })).apply(this, arguments);
  }
  const Bt = T("Do capture step", function (t, e, o) {
    return Ft.apply(this, arguments);
  });
  function Mt(t, e) {
    e.end(), V.popAll(), V.popAllFixed(), window.scrollTo(t.origWindowX, t.origWindowY);
  }
  let Rt = !1;
  function It(t, e, o) {
    return Lt.apply(this, arguments);
  }
  function Lt() {
    return (Lt = d(function (t, e, o, i) {
      var n, r, s, l;
      return g(this, function (a) {
        switch (a.label) {
          case 0:
            return (n = void 0 !== i && i), t !== document.body ? [3, 2] : ((r = jt(window)), [4, It(window, e, o, n)]);
          case 1:
            if (((s = a.sent()), r.y !== s.y || r.x !== s.x || Rt)) return (Rt = !0), [2, s];
            a.label = 2;
          case 2:
            if ((C.debug(`scroll via ${Yt(t)} to (${e}, ${o})`), D(t, e, o), "dispatchEvent" in t && "CustomEvent" in window))
              try {
                t.dispatchEvent(new CustomEvent("scroll"));
              } catch (t) {
                C.warn("Error triggering custom scroll event", t);
              }
            return (
              (l = jt(t)),
              C.debug(`scroll result: ${JSON.stringify(l)} (${window.pageYOffset})`),
              n ? (C.debug("retry scroll..."), [4, z(50)]) : [3, 4]
            );
          case 3:
            return a.sent(), [2, It(t, e, o, !1)];
          case 4:
            return [2, l];
          case 5:
            return [2];
        }
      });
    })).apply(this, arguments);
  }
  function jt(t) {
    return (function (t) {
      return void 0 !== t.scrollX;
    })(t)
      ? { x: t.scrollX, y: t.scrollY }
      : { x: t.scrollLeft, y: t.scrollTop };
  }
  function Dt(t) {
    const e = {
      msg: i,
      name: (null == t ? void 0 : t.name) || "unknown",
      message: (null == t ? void 0 : t.message) || "unknown",
      stack: null == t ? void 0 : t.stack
    };
    try {
      console.error(JSON.stringify(e));
    } catch (t) {
      console.error(e);
    }
    chrome.runtime.sendMessage(e, function () {});
  }
  const Yt = (t) => {
    if (t === window) return "window";
    if (document.body && t === document.body) return "body";
    {
      const e = t;
      let o = e.nodeName.toLowerCase();
      return e.id ? (o += `#${e.id}`) : e.className && (o += `.${e.className.split(" ").join(".")}`), o;
    }
  };
  C.debug(`%c[[[MAIN]]](${Ct})`, "background:red;color:#fff;", `prevListener?=${Boolean(Nt)}`),
    Nt && chrome.runtime.onMessage.removeListener(Nt),
    chrome.runtime.onMessage.addListener(_t),
    (Nt = _t);
})();
//# sourceMappingURL=index.js.map
