(self.webpackChunk = self.webpackChunk || []).push([
  [5068],
  {
    59769: (e, t, n) => {
      n.d(t, { _: () => o });
      var r = n(27378);
      const o = ({ title: e, titleId: t, desc: n, descId: o, ...i }) =>
        r.createElement(
          "svg",
          {
            width: 20,
            height: 20,
            viewBox: "0 0 20 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            "aria-hidden": "true",
            stroke: "transparent",
            "aria-labelledby": t,
            "aria-describedby": o,
            ...i
          },
          n ? r.createElement("desc", { id: o }, n) : null,
          e ? r.createElement("title", { id: t }, e) : null,
          r.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z",
            fill: "#15C39A"
          }),
          r.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M11.046 11.727c.047.262.293.442.56.442h.838l.485-.068c-.777 1.14-2.127 1.665-3.603 1.433a3.428 3.428 0 0 1-2.669-2.136C5.67 8.82 7.551 6.36 10.004 6.36c1.278 0 2.4.768 3.042 1.671.17.246.509.317.755.146a.536.536 0 0 0 .161-.712A4.694 4.694 0 0 0 9.68 5.31c-2.34.157-4.232 2.07-4.367 4.411-.156 2.724 2.005 4.947 4.692 4.947a4.65 4.65 0 0 0 3.536-1.609l-.102.57v.516c0 .266.179.513.44.56.345.062.644-.2.644-.533v-3.088h-2.944c-.332 0-.595.3-.532.643Z",
            fill: "#fff"
          })
        );
      o.__brand = "nocolor";
    },
    70604: (e, t, n) => {
      n.d(t, { g: () => o });
      var r = n(27378);
      const o = ({ title: e, titleId: t, desc: n, descId: o, ...i }) =>
        r.createElement(
          "svg",
          {
            width: 16,
            height: 16,
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            "aria-hidden": "true",
            stroke: "transparent",
            "aria-labelledby": t,
            "aria-describedby": o,
            ...i
          },
          n ? r.createElement("desc", { id: o }, n) : null,
          e ? r.createElement("title", { id: t }, e) : null,
          r.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M11.276 3c-.034.001-.1.02-.173.096l-.643.66 1.165 1.195.665-.682a.207.207 0 0 0 .004-.295l-.382-.392-.505-.517.357-.347-.357.347c-.06-.062-.104-.067-.13-.066Zm-.349 2.667L9.762 4.472l-5.208 5.34v1.21h1.152l5.221-5.355ZM11.224 2c.334-.018.653.112.9.366l.502.515.384.393a1.207 1.207 0 0 1-.004 1.692L6.274 11.87l-.147.151H3.554V9.406l.142-.146 6.69-6.862c.22-.226.513-.38.838-.397ZM2 13.498a.5.5 0 0 1 .5-.5h11.002a.5.5 0 1 1 0 1H2.499a.5.5 0 0 1-.5-.5Z",
            fill: "#646B81"
          })
        );
      o.__brand = "color";
    },
    49032: (e, t, n) => {
      n.d(t, { g: () => o });
      var r = n(27378);
      const o = ({ title: e, titleId: t, desc: n, descId: o, ...i }) =>
        r.createElement(
          "svg",
          {
            width: 16,
            height: 16,
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            "aria-hidden": "true",
            stroke: "transparent",
            "aria-labelledby": t,
            "aria-describedby": o,
            ...i
          },
          n ? r.createElement("desc", { id: o }, n) : null,
          e ? r.createElement("title", { id: t }, e) : null,
          r.createElement("path", {
            d: "m3.714 12 2.11-.88a2.143 2.143 0 0 0 1.319-1.977M12.286 12l-2.11-.88a2.143 2.143 0 0 1-1.319-1.977M6 6.286v1.143a2 2 0 1 0 4 0V6.286a2 2 0 1 0-4 0ZM14 8A6 6 0 1 1 2 8a6 6 0 0 1 12 0Z",
            stroke: "#646B81"
          })
        );
      o.__brand = "color";
    },
    6287: (e, t) => {
      function n(e) {
        return r(e, e.length - 1, []);
      }
      function r(e, t, n) {
        return function (o) {
          var i = n.concat([o]);
          return 0 === t ? e.apply(this, i) : r(e, t - 1, i);
        };
      }
      Object.defineProperty(t, "curry", {
        enumerable: !0,
        get: function () {
          return n;
        }
      });
    },
    48168: (e, t, n) => {
      !(function (e, t) {
        for (var n in t) Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
      })(t, {
        structuredClone: function () {
          return m;
        },
        isEqual: function () {
          return p;
        },
        objectWithoutProperties: function () {
          return b;
        },
        isObject: function () {
          return g;
        },
        isEmptyObject: function () {
          return y;
        },
        toArray: function () {
          return v;
        },
        immutableUpdate: function () {
          return h;
        },
        immutableUpdateC: function () {
          return x;
        },
        immutableUpdateOption: function () {
          return w;
        },
        immutableUpdateOptionC: function () {
          return k;
        },
        merge: function () {
          return O;
        },
        update: function () {
          return E;
        },
        deepUpdate: function () {
          return C;
        },
        modify: function () {
          return j;
        },
        keys: function () {
          return P;
        },
        filterKeys: function () {
          return I;
        },
        filterKeysBy: function () {
          return A;
        },
        pick: function () {
          return N;
        },
        pickProps: function () {
          return $;
        },
        set: function () {
          return M;
        },
        deepEqual: function () {
          return D;
        },
        fromEntries: function () {
          return L;
        },
        omit: function () {
          return B;
        }
      });
      var r = n(24178),
        o = n(99170),
        i = n(12780),
        l = n(56133),
        a = n(32267),
        c = n(73287),
        u = n(5114),
        s = n(40327),
        d = n(6287),
        m = function e(t) {
          if ("object" != typeof t) return t;
          var n,
            r,
            o = Object.prototype.toString.call(t);
          if ("[object Object]" === o) {
            if (t.constructor !== Object && "function" == typeof t.constructor)
              for (n in ((r = new t.constructor()), t)) t.hasOwnProperty(n) && r[n] !== t[n] && (r[n] = e(t[n]));
            else
              for (n in ((r = {}), t))
                "__proto__" === n
                  ? Object.defineProperty(r, n, { value: e(t[n]), configurable: !0, enumerable: !0, writable: !0 })
                  : (r[n] = e(t[n]));
            return r;
          }
          if ("[object Array]" === o) {
            for (n = t.length, r = Array(n); n--; ) r[n] = e(t[n]);
            return r;
          }
          if ("[object Date]" === o) return new Date(+t);
          if ("[object RegExp]" === o) return ((r = new RegExp(t.source, t.flags)).lastIndex = t.lastIndex), r;
          return t;
        };
      var f = Object.prototype.hasOwnProperty;
      function p(e, t) {
        var n, r;
        if (e === t) return !0;
        if (e && t && (n = e.constructor) === t.constructor) {
          if (n === Date) return e.getTime() === t.getTime();
          if (n === RegExp) return e.toString() === t.toString();
          if (n === Array) {
            if ((r = e.length) === t.length) for (; r-- && p(e[r], t[r]); );
            return -1 === r;
          }
          if (!n || "object" == typeof e) {
            for (n in ((r = 0), e)) {
              if (f.call(e, n) && ++r && !f.call(t, n)) return !1;
              if (!(n in t) || !p(e[n], t[n])) return !1;
            }
            return Object.keys(t).length === r;
          }
        }
        return e != e && t != t;
      }
      function b(e, t) {
        var n = {};
        for (var r in e) t.indexOf(r) >= 0 || (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
        return n;
      }
      function g(e) {
        return null != e && !Array.isArray(e) && "object" == typeof e;
      }
      function y(e) {
        for (var t in e) if (Object.prototype.hasOwnProperty.call(e, t)) return !1;
        return !0;
      }
      function v(e) {
        return Object.keys(e).map(function (t) {
          return e[t];
        });
      }
      function h(e, t, n) {
        var i = n[e],
          a = l._(n, [e].map(c._));
        return o._(r._({}, e, t(u.fromNullable(i))), a);
      }
      var x = (0, d.curry)(h);
      function w(e, t, n) {
        var i = n[e],
          a = l._(n, [e].map(c._)),
          d = "function" == typeof t ? t(u.fromNullable(i)) : t;
        return (0, s.pipe)(
          d,
          u.fold(
            function () {
              return a;
            },
            function (t) {
              return o._(r._({}, e, t), a);
            }
          )
        );
      }
      var k = (0, d.curry)(w);
      function O(e, t) {
        return S(S({}, e), t);
      }
      function S(e, t) {
        for (var n in t) {
          var r,
            o = null !== (r = e[n]) && void 0 !== r ? r : {},
            i = t[n];
          null != i && null != o && i.constructor === Object && o.constructor === Object ? (e[n] = S(o, i)) : (e[n] = i);
        }
        return e;
      }
      function E(e, t) {
        return Object.assign({}, e, t);
      }
      function C(e, t) {
        var n = {};
        for (var r in e) {
          var o = t[r];
          void 0 !== o ? (n[r] = "object" == typeof o ? C(e[r], o) : o) : (n[r] = e[r]);
        }
        return n;
      }
      function j(e) {
        return function (t) {
          return E(t, e);
        };
      }
      function P(e) {
        return Object.keys(e);
      }
      function I(e, t) {
        return P(e).filter(function (n) {
          return t(e[n]);
        });
      }
      function A(e) {
        return function (t) {
          return I(t, e);
        };
      }
      function N(e) {
        return function (t) {
          return t[e];
        };
      }
      function $() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return function (e) {
          return t.reduce(function (t, n) {
            return i._(o._({}, t), r._({}, n, e[n]));
          }, {});
        };
      }
      function M(e) {
        return function (t, n) {
          return i._(o._({}, n), r._({}, e, t));
        };
      }
      function D(e, t) {
        if (e === t) return !0;
        if (z(e) || z(t)) return e === t;
        if (Object.keys(e).length !== Object.keys(t).length) return !1;
        for (var n in e) {
          if (!(n in t)) return !1;
          if (!D(e[n], t[n])) return !1;
        }
        return !0;
      }
      function z(e) {
        return e !== Object(e);
      }
      function L(e) {
        return Array.from(e).reduce(function (e, t) {
          var n = a._(t, 2),
            l = n[0],
            c = n[1];
          return i._(o._({}, e), r._({}, l, c));
        }, {});
      }
      var B = function (e) {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        var i = o._({}, e);
        return (
          n.forEach(function (e) {
            return delete i[e];
          }),
          i
        );
      };
    },
    46324: (e, t, n) => {
      n.d(t, {
        $O: () => j,
        KF: () => M,
        ND: () => y,
        P5: () => C,
        U8: () => E,
        Yf: () => O,
        a3: () => L,
        g2: () => P,
        hc: () => w,
        hx: () => N,
        kG: () => $,
        o_: () => x,
        wy: () => S
      });
      var r = n(27378),
        o = n(57050),
        i = n(22232),
        l = n(71249),
        a = n(13578),
        c = n(77678),
        u = n(64757),
        s = n(89894),
        d = n(94632),
        m = n(79880),
        f = n(85627);
      function p(e, t, n) {
        return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
      }
      function b(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            r.forEach(function (t) {
              p(e, t, n[t]);
            });
        }
        return e;
      }
      function g(e, t) {
        return (
          (t = null != t ? t : {}),
          Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var r = Object.getOwnPropertySymbols(e);
                  t &&
                    (r = r.filter(function (t) {
                      return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    n.push.apply(n, r);
                }
                return n;
              })(Object(t)).forEach(function (n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
          e
        );
      }
      function y() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : D;
        return {
          primary: (0, f.n)(function (t) {
            return r.createElement(
              u.zx.Primary,
              g(b({}, z(t)), {
                className: s.ux.joinClasses([
                  e.main,
                  e.primary,
                  t.shape === m.jL.Round ? D.round : void 0,
                  t.verticalAlign === m.g$.Middle ? D.textMiddleAlign : void 0,
                  A(t.horizontalAlign)
                ])
              }),
              t.text
            );
          }),
          secondary: (0, f.n)(function (t) {
            return r.createElement(
              u.zx.Tertiary,
              g(b({}, z(t)), {
                className: s.ux.joinClasses([
                  e.secondary,
                  e.main,
                  t.shape === m.jL.Round ? D.round : void 0,
                  t.verticalAlign === m.g$.Middle ? D.textMiddleAlign : void 0,
                  A(t.horizontalAlign)
                ])
              }),
              t.text
            );
          }),
          toggle: (0, f.n)(function (t) {
            return r.createElement(
              u.zx.Secondary,
              g(b({}, z(t)), {
                className: s.ux.joinClasses([
                  d.LI,
                  e.toggle,
                  e.main,
                  t.shape === m.jL.Round ? D.round : void 0,
                  t.verticalAlign === m.g$.Middle ? D.textMiddleAlign : void 0,
                  A(t.horizontalAlign)
                ])
              }),
              t.text
            );
          }),
          yellow: (0, f.n)(function (t) {
            return r.createElement(
              u.zx.Primary,
              g(b({}, z(t)), {
                className: s.ux.joinClasses([
                  e.yellow,
                  t.shape === m.jL.Round ? D.round : void 0,
                  t.verticalAlign === m.g$.Middle ? D.textMiddleAlign : void 0,
                  A(t.horizontalAlign)
                ])
              }),
              t.text
            );
          }),
          outlined: (0, f.n)(function (t) {
            return r.createElement(
              u.zx.Secondary,
              g(b({}, z(t)), {
                className: s.ux.joinClasses([
                  e.outlined,
                  e.main,
                  t.shape === m.jL.Round ? D.round : void 0,
                  t.verticalAlign === m.g$.Middle ? D.textMiddleAlign : void 0,
                  A(t.horizontalAlign)
                ])
              }),
              t.text
            );
          }),
          link: (0, f.n)(function (t) {
            return r.createElement(u.zx, g(b({}, z(t)), { className: s.ux.joinClasses([e.link, e.main]) }), t.text);
          }),
          darkPrimary: (0, f.n)(function (t) {
            return r.createElement(
              u.zx.Tertiary,
              g(b({}, z(t)), {
                className: s.ux.joinClasses([
                  e.darkPrimary,
                  e.main,
                  t.shape === m.jL.Round ? D.round : void 0,
                  t.verticalAlign === m.g$.Middle ? D.textMiddleAlign : void 0,
                  A(t.horizontalAlign)
                ])
              }),
              t.text
            );
          }),
          darkSecondary: (0, f.n)(function (t) {
            return r.createElement(
              u.zx.Tertiary,
              g(b({}, z(t)), {
                className: s.ux.joinClasses([
                  e.darkSecondary,
                  e.main,
                  t.shape === m.jL.Round ? D.round : void 0,
                  t.verticalAlign === m.g$.Middle ? D.textMiddleAlign : void 0,
                  A(t.horizontalAlign)
                ])
              }),
              t.text
            );
          }),
          ggoPrimary: (0, f.n)(function (t) {
            return r.createElement(
              u.zx.Tertiary,
              g(b({}, z(t)), {
                className: s.ux.joinClasses([
                  e.ggoPrimary,
                  e.main,
                  t.shape === m.jL.Round ? D.round : void 0,
                  t.verticalAlign === m.g$.Middle ? D.textMiddleAlign : void 0,
                  A(t.horizontalAlign)
                ])
              }),
              t.text
            );
          })
        };
      }
      var v,
        h = { lineHeight: "calc(2px * var(--rem) - 2px)", padding: 0 },
        x = {
          flexShrink: 0,
          minHeight: s.ux.rem(2),
          justifyContent: "initial",
          $nest: { "& span": h, " & > div": { width: s.ux.percent(100) } }
        },
        w = [
          { $nest: { "&[data-textpos]": { padding: 0 } } },
          (0, d.T)({
            default: {
              backgroundColor: a.XY.Surface.Primary.Default,
              border: "1px solid ".concat(c.CoreNeutral20),
              whiteSpace: "normal",
              lineHeight: "calc(2px * var(--rem) - 2px)",
              fontWeight: 700
            },
            hovered: {},
            disabled: {},
            clicked: {},
            toggled: { backgroundColor: c.CoreNeutral1, borderColor: a.vU.InteractiveBranded.Primary.Default },
            hidden: {}
          })
        ],
        k = { fill: c.CoreNeutral0, stroke: c.CoreNeutral0 },
        O = (0, d.T)({
          default: {
            display: "inline-flex",
            color: c.CoreNeutral40,
            border: "1px solid ".concat(c.CoreNeutral20),
            lineHeight: "calc(1.75px * var(--rem) - 1px)"
          },
          hovered: {},
          clicked: {},
          disabled: {},
          toggled: {},
          hidden: {}
        }),
        S = b(
          {},
          (0, d.T)({
            default: { color: c.CoreBlue40, minHeight: "auto" },
            hovered: { opacity: 0.75 },
            clicked: {},
            disabled: {},
            toggled: {},
            hidden: {}
          })
        ),
        E = g(b({}, (0, d.T)({ default: {}, hovered: {}, clicked: {}, disabled: {}, toggled: {}, hidden: {} })), {
          $nest: { "& span": h, "& i": k, "&:not([data-disabled='true'])[data-hovered='true'] i": k }
        }),
        C = b({}, (0, d.T)({ default: {}, hovered: {}, clicked: {}, disabled: {}, toggled: {}, hidden: {} })),
        j = { borderRadius: s.ux.rem(100) },
        P = [
          x,
          (0, d.T)({
            default: { backgroundColor: c.CoreYellow20, color: c.CoreYellow80, lineHeight: s.ux.rem(2), transitionDuration: ".2s" },
            hovered: { backgroundColor: c.CoreYellow30, $nest: { "& i": { fill: c.CoreYellow80, stroke: c.CoreYellow80 } } },
            disabled: {},
            clicked: {},
            toggled: {},
            hidden: {}
          }),
          { $nest: { "& i": { fill: c.CoreYellow80, stroke: c.CoreYellow80 } } }
        ],
        I =
          (p((v = {}), m.Kq.Left, s.ux.style({ textAlign: "left" })),
          p(v, m.Kq.Center, s.ux.style({ textAlign: "center" })),
          p(v, m.Kq.Right, s.ux.style({ textAlign: "end" })),
          v);
      function A(e) {
        return null != e ? I[e] : I[m.Kq.Left];
      }
      var N = b(
          {},
          (0, d.T)({
            default: {
              backgroundColor: c.CoreBlue30,
              color: c.CoreNeutral90,
              lineHeight: s.ux.rem(2),
              transitionDuration: ".2s",
              fontWeight: 600
            },
            hovered: { backgroundColor: c.CoreBlue40, $nest: { "& i": { fill: c.CoreNeutral90, stroke: c.CoreNeutral90 } } },
            disabled: {},
            clicked: {},
            toggled: {},
            hidden: {}
          })
        ),
        $ = b(
          {},
          (0, d.T)({
            default: { backgroundColor: "transparent", color: c.CoreNeutral30, lineHeight: s.ux.rem(2), transitionDuration: ".2s" },
            hovered: { backgroundColor: c.CoreNeutral60, $nest: { "& i": { fill: c.CoreNeutral30, stroke: c.CoreNeutral30 } } },
            disabled: {},
            clicked: {},
            toggled: {},
            hidden: {}
          })
        ),
        M = g(
          b(
            {},
            (0, d.T)({
              default: { backgroundColor: c.CoreGreen60 },
              hovered: { backgroundColor: c.CoreGreen40 },
              disabled: {},
              clicked: {},
              toggled: {},
              hidden: {}
            })
          ),
          { $nest: { "& svg": k } }
        ),
        D = s.ux.stylesheet({
          textMiddleAlign: [{ $nest: { "& span": { verticalAlign: "initial" } } }],
          main: [x],
          primary: [E],
          secondary: [C],
          toggle: w,
          round: [j],
          yellow: P,
          outlined: [O, { $nest: { "& span": { lineHeight: "calc(1.75px * var(--rem) - 1px)", padding: 0 } } }],
          link: [S],
          darkPrimary: [N],
          darkSecondary: [$],
          ggoPrimary: [M]
        });
      function z(e) {
        return b(
          {
            name: e.name,
            onClick: e.onClick,
            "aria-label": e.meta.label,
            "aria-describedby": e["aria-describedby"],
            title: void 0 !== e.tooltip && e.state !== m.BN.Disabled ? L(e.tooltip) : void 0
          },
          (function (e) {
            switch (e) {
              case m.BN.Enabled:
                return { disabled: !1 };
              case m.BN.Disabled:
                return { disabled: !0 };
              case m.BN.Selected:
                return { disabled: !1, active: !0 };
              case m.BN.Deselected:
                return { disabled: !1, active: !1 };
              case m.BN.Hidden:
                return { hidden: !0 };
              default:
                return (0, i.vE)(e);
            }
          })(e.state)
        );
      }
      function L(e) {
        return r.createElement(
          r.Fragment,
          null,
          (0, o.zG)(e.split("\n"), function (e) {
            var t = e.length;
            return 0 === t
              ? e
              : l.QI(
                  e[0],
                  e.slice(1, t).map(function (e, t) {
                    return r.createElement(r.Fragment, { key: t }, r.createElement("br", null), e);
                  })
                );
          })
        );
      }
    },
    89572: (e, t, n) => {
      n.d(t, { k: () => Zo });
      var r = n(27378),
        o = n(42500);
      function i(e, t, n) {
        return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
      }
      function l(e, t) {
        return (
          (t = null != t ? t : {}),
          Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var r = Object.getOwnPropertySymbols(e);
                  t &&
                    (r = r.filter(function (t) {
                      return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    n.push.apply(n, r);
                }
                return n;
              })(Object(t)).forEach(function (n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
          e
        );
      }
      function a(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
        }
        return o;
      }
      var c = n(40333),
        u = n(89894),
        s = n(45368),
        d = n(85627);
      function m(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
        }
        return o;
      }
      var f = (0, d.n)(function (e) {
          var t = e.child,
            n = e.footer,
            o = e.id,
            i = e.meta,
            l = m(e, ["child", "footer", "id", "meta"]);
          return r.createElement(
            s.Q,
            { id: "".concat(o, "-container"), role: "region", "aria-label": i.label, "aria-describedby": l["aria-describedby"] },
            t,
            n ? r.createElement("div", { className: p.wrapper }, n) : null
          );
        }),
        p = u.ux.stylesheet({ wrapper: [{ display: "flex", flexDirection: "column" }] }),
        b = n(79880),
        g = n(64015),
        y = n(57050),
        v = n(5114),
        h = n(95195),
        x = n(81531),
        w = n(40330),
        k = n(63557);
      function O(e, t, n) {
        return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
      }
      function S(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            r.forEach(function (t) {
              O(e, t, n[t]);
            });
        }
        return e;
      }
      function E(e, t) {
        return (
          (t = null != t ? t : {}),
          Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var r = Object.getOwnPropertySymbols(e);
                  t &&
                    (r = r.filter(function (t) {
                      return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    n.push.apply(n, r);
                }
                return n;
              })(Object(t)).forEach(function (n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
          e
        );
      }
      var C = function (e) {
        return "selectAlternative" === e.type ? v.some(e.alternativeIndex) : v.none;
      };
      function j(e) {
        return function (t) {
          return (0, y.zG)(
            t,
            g.Ew(
              (0, y.ls)(
                C,
                v.exists(function (t) {
                  return t === e;
                })
              )
            ),
            v.isSome
          );
        };
      }
      var P = n(8543);
      function I(e, t, n) {
        return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
      }
      function A(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            r.forEach(function (t) {
              I(e, t, n[t]);
            });
        }
        return e;
      }
      function N(e, t) {
        return (
          (t = null != t ? t : {}),
          Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var r = Object.getOwnPropertySymbols(e);
                  t &&
                    (r = r.filter(function (t) {
                      return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    n.push.apply(n, r);
                }
                return n;
              })(Object(t)).forEach(function (n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
          e
        );
      }
      var $,
        M = n(46324),
        D = n(77678),
        z = n(7514);
      function L(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function B(e, t, n) {
        return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
      }
      function T(e) {
        if (("undefined" != typeof Symbol && null != e[Symbol.iterator]) || null != e["@@iterator"]) return Array.from(e);
      }
      function _(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          T(e) ||
          F(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function R(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return L(e);
          })(e) ||
          T(e) ||
          F(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function F(e, t) {
        if (e) {
          if ("string" == typeof e) return L(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(n)
              : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? L(e, t)
              : void 0
          );
        }
      }
      !(function (e) {
        (e[(e.HeadingLevel4LetterSpacing = 0)] = "HeadingLevel4LetterSpacing"),
          (e[(e.HeadingLevel3LetterSpacing = 0)] = "HeadingLevel3LetterSpacing"),
          (e[(e.HeadingLevel1LetterSpacing = -0.0025)] = "HeadingLevel1LetterSpacing"),
          (e[(e.BodyLetterSpacing = 0)] = "BodyLetterSpacing"),
          (e[(e.MediumLetterSpacing = 0)] = "MediumLetterSpacing"),
          (e[(e.SmallLetterSpacing = 0)] = "SmallLetterSpacing"),
          (e[(e.HeadingLevel4Size = 1)] = "HeadingLevel4Size"),
          (e[(e.HeadingLevel3Size = 1.25)] = "HeadingLevel3Size"),
          (e[(e.HeadingLevel1Size = 1.75)] = "HeadingLevel1Size"),
          (e[(e.BodySize = 0.875)] = "BodySize"),
          (e[(e.MediumLetterSize = 1)] = "MediumLetterSize"),
          (e[(e.SmallSize = 0.75)] = "SmallSize");
      })($ || ($ = {}));
      var H,
        K,
        U = u.ux.style({ padding: "".concat(u.ux.rem(0.15625), " 0") }),
        V = u.ux.style({
          position: "absolute",
          width: 1,
          height: 1,
          padding: 0,
          margin: -1,
          overflow: "hidden",
          clip: "rect(0,0,0,0)",
          whiteSpace: "nowrap",
          border: 0
        }),
        G = function (e) {
          var t = e.size,
            n = e.format,
            o = e.textColor,
            i = e.backgroundColor,
            l = e.outlineColor,
            a = e.text,
            c = e.meta,
            s = e.removeImplicitPadding,
            d = void 0 !== s && s,
            m = (function (e, t) {
              var n = "".concat(e, "-").concat(t),
                r = ce.get(n);
              if (void 0 !== r) return r;
              var o = u.ux.style({ color: D[e], backgroundColor: Boolean(t) ? D[t] : t });
              return ce.put(n, o), o;
            })(o, i),
            f = _(n),
            p = f[0],
            g = f.slice(1),
            y = void 0 !== p ? ae[p] : { name: "span", canHaveAriaLabel: !1 },
            v = g.map(function (e) {
              return e === b.SQ.StrikeoutDiagonal
                ? (function (e) {
                    var t = "sd-".concat(e),
                      n = ce.get(t);
                    if (void 0 !== n) return n;
                    var r = u.ux.style(
                      (function (e) {
                        return {
                          backgroundImage:
                            "linear-gradient(to top left,\n    rgba(0,0,0,0) 0%,\n    rgba(0,0,0,0) calc(50% - 0.5px),\n    ".concat(
                              D[e],
                              " 50%,\n    rgba(0,0,0,0) calc(50% + 0.5px),\n    rgba(0,0,0,0) 100%)"
                            )
                        };
                      })(e)
                    );
                    return ce.put(t, r), r;
                  })(null != l ? l : o)
                : le[e];
            });
          void 0 !== l &&
            v.push(
              (function (e) {
                var t = "ol-".concat(e),
                  n = ce.get(t);
                if (void 0 !== n) return n;
                var r = u.ux.style({ borderColor: D[e] });
                return ce.put(t, r), r;
              })(l)
            ),
            d || v.push(U);
          var h = u.ux.joinClasses([m, ie[t]].concat(R(v)));
          if (c.label && !y.canHaveAriaLabel) {
            var x = r.createElement(y.name, { className: h, "aria-hidden": !0, children: a });
            return r.createElement(r.Fragment, null, r.createElement("span", { className: V }, c.label), x);
          }
          return r.createElement(y.name, { className: h, "aria-label": c.label, children: a });
        },
        W = u.ux.rem(1.5),
        Z = u.ux.rem(1.5),
        q = u.ux.rem(2),
        J = u.ux.rem(1.5),
        X = u.ux.rem(21 / 16),
        Y = u.ux.rem(0.875),
        Q = { letterSpacing: u.ux.rem($.HeadingLevel4LetterSpacing), fontSize: u.ux.rem($.HeadingLevel4Size), lineHeight: W },
        ee = { letterSpacing: u.ux.rem($.HeadingLevel3LetterSpacing), fontSize: u.ux.rem($.HeadingLevel3Size), lineHeight: Z },
        te = { letterSpacing: "".concat($.HeadingLevel1LetterSpacing, "em"), fontSize: u.ux.rem($.HeadingLevel1Size), lineHeight: q },
        ne = { letterSpacing: u.ux.rem($.MediumLetterSpacing), fontSize: u.ux.rem($.MediumLetterSize), lineHeight: J },
        re = { letterSpacing: u.ux.rem($.BodyLetterSpacing), fontSize: u.ux.rem($.BodySize), lineHeight: X },
        oe = { letterSpacing: u.ux.rem($.SmallLetterSpacing), fontSize: u.ux.rem($.SmallSize), lineHeight: Y },
        ie = u.ux.stylesheet(
          (B((H = {}), b.yH.HeadingLevel4, [Q]),
          B(H, b.yH.HeadingLevel3, [ee]),
          B(H, b.yH.HeadingLevel1, [te]),
          B(H, b.yH.Medium, [ne]),
          B(H, b.yH.Regular, [re]),
          B(H, b.yH.Small, [oe]),
          H)
        ),
        le = u.ux.stylesheet(
          (B((K = {}), b.SQ.Bold, [{ fontWeight: "bolder" }]),
          B(K, b.SQ.Italic, [{ fontStyle: "italic" }]),
          B(K, b.SQ.StrikeoutHorizontal, [{ textDecoration: "line-through" }]),
          B(K, b.SQ.StrikeoutDiagonal, []),
          B(K, b.SQ.Outline, [
            {
              padding: ""
                .concat(u.ux.rem(1 / 16), " ")
                .concat(u.ux.rem(3.5 / 16), " ")
                .concat(u.ux.rem(1 / 16), " ")
                .concat(u.ux.rem(3.5 / 16)),
              border: "1px solid",
              borderRadius: "2px"
            }
          ]),
          K)
        ),
        ae = {
          strikeoutHorizontal: { name: "s", canHaveAriaLabel: !1 },
          strikeoutDiagonal: { name: "span", canHaveAriaLabel: !1 },
          outline: { name: "span", canHaveAriaLabel: !1 },
          bold: { name: "strong", canHaveAriaLabel: !1 },
          italic: { name: "em", canHaveAriaLabel: !1 }
        };
      var ce = new z.z6(100);
      function ue(e, t, n) {
        return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
      }
      var se = function (e) {
        return r.createElement("div", { "data-role": "box", className: de(e) }, e.children);
      };
      function de(e) {
        var t = e.padding,
          n = e.borderRadius,
          r = e.backgroundColor,
          o = e.minWidth,
          i = [fe.base];
        return (
          void 0 !== t &&
            i.push(
              (function (e) {
                var t,
                  n,
                  r,
                  o,
                  i = "p-"
                    .concat(null === (t = e) || void 0 === t ? void 0 : t.top, "-")
                    .concat(null === (n = e) || void 0 === n ? void 0 : n.bottom, "-")
                    .concat(null === (r = e) || void 0 === r ? void 0 : r.left, "-")
                    .concat(null === (o = e) || void 0 === o ? void 0 : o.right),
                  l = pe.get(i);
                if (void 0 !== l) return l;
                var a = { $debugName: "padding" };
                void 0 !== e &&
                  ((a.paddingRight = u.ux.rem(Number(e.right))),
                  (a.paddingBottom = u.ux.rem(Number(e.bottom))),
                  (a.paddingTop = u.ux.rem(Number(e.top))),
                  (a.paddingLeft = u.ux.rem(Number(e.left))));
                var c = u.ux.style(a);
                return pe.put(i, c), c;
              })(t)
            ),
          void 0 !== n &&
            i.push(
              (function (e) {
                var t = e.topLeft,
                  n = e.topRight,
                  r = e.bottomRight,
                  o = e.bottomLeft,
                  i = "bdr-".concat(t, "-").concat(n, "-").concat(r, "-").concat(o),
                  l = pe.get(i);
                if (void 0 !== l) return l;
                var a = { $debugName: "borderRadius" };
                void 0 !== e &&
                  ((a.borderTopLeftRadius = u.ux.rem(Number(be[t]))),
                  (a.borderTopRightRadius = u.ux.rem(Number(be[n]))),
                  (a.borderBottomRightRadius = u.ux.rem(Number(be[r]))),
                  (a.borderBottomLeftRadius = u.ux.rem(Number(be[o]))));
                var c = u.ux.style(a);
                return pe.put(i, c), c;
              })(n)
            ),
          void 0 !== r &&
            i.push(
              (function (e) {
                var t = "bgc-".concat(e),
                  n = pe.get(t);
                if (void 0 !== n) return n;
                var r = u.ux.style({ backgroundColor: D[e] });
                return pe.put(t, r), r;
              })(r)
            ),
          void 0 !== o &&
            i.push(
              (function (e) {
                var t = "minW-".concat(e),
                  n = pe.get(t);
                if (void 0 !== n) return n;
                var r = { $debugName: "minwidth" };
                void 0 !== e && (r.minWidth = u.ux.rem(Number(e)));
                var o = u.ux.style(r);
                return pe.put(t, o), o;
              })(o)
            ),
          i.length > 0 ? u.ux.joinClasses(i) : void 0
        );
      }
      var me,
        fe = u.ux.stylesheet({ base: [{ display: "block" }] }),
        pe = new z.z6(100);
      var be =
        (ue((me = {}), b.wU.Radius0, 0),
        ue(me, b.wU.RadiusHalf, 0.125),
        ue(me, b.wU.Radius1, 0.25),
        ue(me, b.wU.Radius2, 0.5),
        ue(me, b.wU.Radius3, 0.75),
        me);
      function ge(e, t, n) {
        return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
      }
      var ye = function (e) {
        var t = r.useRef(null);
        return (
          r.useEffect(
            function () {
              var n,
                r = e.maxLines && (null === (n = t.current) || void 0 === n ? void 0 : n.querySelector("*:last-child"));
              if (t.current && r) {
                var o = setTimeout(function () {
                  var e,
                    n,
                    o = self.getComputedStyle(r, null),
                    i = o.getPropertyValue("color"),
                    l = o.getPropertyValue("font-size"),
                    a = o.getPropertyValue("line-height"),
                    c = o.getPropertyValue("letter-spacing");
                  Object.assign(null !== (n = null === (e = t.current) || void 0 === e ? void 0 : e.style) && void 0 !== n ? n : {}, {
                    color: i,
                    fontSize: l,
                    lineHeight: a,
                    letterSpacing: c
                  });
                }, 0);
                return function () {
                  return clearTimeout(o);
                };
              }
              return function () {};
            },
            [e.maxLines]
          ),
          r.createElement("div", { ref: t, "data-role": "block-layout", className: ve(e) }, e.children)
        );
      };
      function ve(e) {
        var t = e.spacing,
          n = e.innerSpacing,
          r = e.horizontalAlign,
          o = e.verticalAlign,
          i = e.fraction,
          l = e.maxLines,
          a = [he.base];
        return (
          void 0 !== l &&
            a.push(
              (function (e) {
                var t = "m-".concat(e),
                  n = ke.get(t);
                if (void 0 !== n) return n;
                var r = u.ux.style({
                  display: "-webkit-inline-box",
                  overflow: "hidden",
                  WebkitBoxOrient: "vertical",
                  "-webkit-line-clamp": e
                });
                return ke.put(t, r), r;
              })(l)
            ),
          (void 0 === t && void 0 === n) ||
            a.push(
              (function (e) {
                var t,
                  n,
                  r,
                  o,
                  i,
                  l,
                  a = e.spacing,
                  c = e.innerSpacing,
                  s = ""
                    .concat(null === (t = a) || void 0 === t ? void 0 : t.top, "-")
                    .concat(null === (n = a) || void 0 === n ? void 0 : n.bottom, "-")
                    .concat(null === (r = a) || void 0 === r ? void 0 : r.left, "-")
                    .concat(null === (o = a) || void 0 === o ? void 0 : o.right, "-")
                    .concat(null === (i = c) || void 0 === i ? void 0 : i.vertical, "-")
                    .concat(null === (l = c) || void 0 === l ? void 0 : l.horizontal),
                  d = ke.get(s);
                if (void 0 !== d) return d;
                var m,
                  f,
                  p,
                  b,
                  g = { $debugName: "spacing" };
                void 0 !== a &&
                  ((g.marginRight = u.ux.rem(Number(a.right))),
                  (g.marginBottom = u.ux.rem(Number(a.bottom))),
                  (g.marginTop = u.ux.rem(Number(a.top))),
                  (g.marginLeft = u.ux.rem(Number(a.left)))),
                  void 0 !== c &&
                    ((g.marginRight = u.ux.rem(
                      Number(null !== (p = null === (m = a) || void 0 === m ? void 0 : m.right) && void 0 !== p ? p : 0) -
                        Number(c.horizontal)
                    )),
                    (g.marginBottom = u.ux.rem(
                      Number(null !== (b = null === (f = a) || void 0 === f ? void 0 : f.bottom) && void 0 !== b ? b : 0) -
                        Number(c.vertical)
                    )),
                    (g.$nest = { "& > *": { marginRight: u.ux.rem(Number(c.horizontal)), marginBottom: u.ux.rem(Number(c.vertical)) } }));
                var y = u.ux.style(g);
                return ke.put(s, y), y;
              })({ spacing: t, innerSpacing: n })
            ),
          void 0 !== r && a.push(Oe[r]),
          void 0 !== o && a.push(Se[o]),
          void 0 !== i &&
            a.push(
              (function (e) {
                var t = "f-".concat(e),
                  n = ke.get(t);
                if (void 0 !== n) return n;
                var r = u.ux.style({ flex: e, overflow: "hidden" });
                return ke.put(t, r), r;
              })(i)
            ),
          a.length > 0 ? u.ux.joinClasses(a) : void 0
        );
      }
      var he = u.ux.stylesheet({ base: [{ overflowWrap: "anywhere", display: "inline-block" }] });
      var xe,
        we,
        ke = new z.z6(100),
        Oe = u.ux.stylesheet(
          (ge((xe = {}), b.Kq.Left, [{ textAlign: "left" }]),
          ge(xe, b.Kq.Center, [{ textAlign: "center" }]),
          ge(xe, b.Kq.Right, [{ textAlign: "right" }]),
          xe)
        ),
        Se = u.ux.stylesheet(
          (ge((we = {}), b.g$.Top, [{ $nest: { "& > *": { verticalAlign: "top" } } }]),
          ge(we, b.g$.Middle, [{ $nest: { "& > *": { verticalAlign: "middle" } } }]),
          ge(we, b.g$.Bottom, [{ $nest: { "& > *": { verticalAlign: "bottom" } } }]),
          we)
        ),
        Ee = n(83926),
        Ce = { width: u.ux.rem(0.85), height: u.ux.rem(0.85) },
        je = {
          width: u.ux.rem(1.5),
          height: u.ux.rem(1.5),
          borderRadius: u.ux.rem(1.5),
          display: "inline-flex",
          justifyContent: "center",
          alignItems: "center"
        },
        Pe = u.ux.stylesheet({
          main: [{ objectFit: "contain", alignSelf: "center", overflow: "hidden" }],
          defaultSize: [Ce],
          wrapper: [je]
        });
      function Ie(e) {
        return void 0 === e ? Pe.wrapper : u.ux.joinClasses([Pe.wrapper, (0, Ee.H)(e)]);
      }
      function Ae(e) {
        return void 0 === e ? u.ux.joinClasses([Pe.main, Pe.defaultSize]) : u.ux.joinClasses([Pe.main, Ne(e)]);
      }
      function Ne(e) {
        var t = $e.get(e);
        if (void 0 !== t) return t;
        var n = u.ux.style({ width: u.ux.rem(Number(e)), height: u.ux.rem(Number(e)) });
        return $e.put(e, n), n;
      }
      var $e = new z.z6(100);
      function Me(e, t, n) {
        var r = "wrapper-".concat(e, "-").concat(t, "-backgroundColor"),
          o = ze.get(r);
        if (void 0 !== o) return o;
        var i = u.ux.style({
          width: u.ux.rem(Number(t)),
          height: u.ux.rem(Number(e)),
          display: "inline-flex",
          justifyContent: "center",
          alignItems: "center",
          margin: 0
        });
        return void 0 !== n && (i = u.ux.joinClasses([i, (0, Ee.H)(n)])), ze.put(r, i), i;
      }
      function De(e, t, n) {
        var r = n ? "content-".concat(e, "-").concat(t, "-").concat(n) : "content-".concat(e, "-").concat(t),
          o = ze.get(r);
        if (void 0 !== o) return o;
        var i = u.ux.style({ width: u.ux.rem(Number(t)), height: u.ux.rem(Number(e)), borderRadius: n ? u.ux.rem(Number(n)) : void 0 });
        return ze.put(r, i), i;
      }
      var ze = new z.z6(100);
      function Le(e, t, n) {
        return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
      }
      function Be(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            r.forEach(function (t) {
              Le(e, t, n[t]);
            });
        }
        return e;
      }
      function Te(e, t) {
        return (
          (t = null != t ? t : {}),
          Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var r = Object.getOwnPropertySymbols(e);
                  t &&
                    (r = r.filter(function (t) {
                      return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    n.push.apply(n, r);
                }
                return n;
              })(Object(t)).forEach(function (n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
          e
        );
      }
      var _e = { display: "flex", flexWrap: "nowrap", alignItems: "inherit", maxWidth: "100%" },
        Re = Te(Be({}, _e), { flexGrow: 1 }),
        Fe = Te(Be({}, _e), { marginLeft: "auto", flexShrink: 0 }),
        He = u.ux.stylesheet({ row: [{ display: "flex", flexDirection: "row", alignItems: "center" }], rowLeft: [Re], rowRight: [Fe] });
      function Ke(e) {
        return void 0 === e ? He.row : u.ux.joinClasses([He.row, Ge(e)]);
      }
      function Ue(e) {
        return void 0 === e ? He.rowLeft : u.ux.joinClasses([He.rowLeft, qe[e]]);
      }
      function Ve(e) {
        return void 0 === e ? He.rowRight : u.ux.joinClasses([He.rowRight, qe[e]]);
      }
      function Ge(e) {
        var t = e.top,
          n = e.bottom,
          r = e.left,
          o = e.right,
          i = "".concat(t, "-").concat(n, "-").concat(r, "-").concat(o),
          l = Ze.get(i);
        if (void 0 !== l) return l;
        var a = u.ux.style({
          marginTop: u.ux.rem(Number(t)),
          marginLeft: u.ux.rem(Number(r)),
          marginRight: u.ux.rem(Number(o)),
          marginBottom: u.ux.rem(Number(n))
        });
        return Ze.put(i, a), a;
      }
      var We,
        Ze = new z.z6(100),
        qe = u.ux.stylesheet(
          (Le((We = {}), b.g$.Top, [{ alignItems: "start" }]),
          Le(We, b.g$.Middle, [{ alignItems: "center" }]),
          Le(We, b.g$.Bottom, [{ alignItems: "end" }]),
          We)
        ),
        Je = n(50858),
        Xe = n(55818),
        Ye = n(98410),
        Qe = n(75923),
        et = n(48113);
      let tt = null;
      function nt(e, t = "assertive", n = 7e3) {
        tt || (tt = new rt()), tt.announce(e, t, n);
      }
      class rt {
        createLog(e) {
          let t = document.createElement("div");
          return t.setAttribute("role", "log"), t.setAttribute("aria-live", e), t.setAttribute("aria-relevant", "additions"), t;
        }
        destroy() {
          this.node && (document.body.removeChild(this.node), (this.node = null));
        }
        announce(e, t = "assertive", n = 7e3) {
          if (!this.node) return;
          let r = document.createElement("div");
          (r.textContent = e),
            "assertive" === t ? this.assertiveLog.appendChild(r) : this.politeLog.appendChild(r),
            "" !== e &&
              setTimeout(() => {
                r.remove();
              }, n);
        }
        clear(e) {
          this.node &&
            ((e && "assertive" !== e) || (this.assertiveLog.innerHTML = ""), (e && "polite" !== e) || (this.politeLog.innerHTML = ""));
        }
        constructor() {
          (this.node = document.createElement("div")),
            (this.node.dataset.liveAnnouncer = "true"),
            Object.assign(this.node.style, {
              border: 0,
              clip: "rect(0 0 0 0)",
              clipPath: "inset(50%)",
              height: "1px",
              margin: "-1px",
              overflow: "hidden",
              padding: 0,
              position: "absolute",
              width: "1px",
              whiteSpace: "nowrap"
            }),
            (this.assertiveLog = this.createLog("assertive")),
            this.node.appendChild(this.assertiveLog),
            (this.politeLog = this.createLog("polite")),
            this.node.appendChild(this.politeLog),
            document.body.prepend(this.node);
        }
      }
      var ot = n(92236);
      function it(e) {
        return e && e.__esModule ? e.default : e;
      }
      new WeakMap();
      var lt;
      function at(e, t) {
        var n;
        let {
            getRowText: o = (e) => {
              var r, o, i;
              return null !== (n = null === (o = (r = t.collection).getTextValue) || void 0 === o ? void 0 : o.call(r, e)) && void 0 !== n
                ? n
                : null === (i = t.collection.getItem(e)) || void 0 === i
                ? void 0
                : i.textValue;
            }
          } = e,
          i = (0, et.qb)(it(lt)),
          l = t.selectionManager.rawSelection,
          a = (0, r.useRef)(l);
        (0, Qe.rf)(() => {
          var e;
          if (!t.selectionManager.isFocused) return void (a.current = l);
          let n = ct(l, a.current),
            r = ct(a.current, l),
            c = "replace" === t.selectionManager.selectionBehavior,
            u = [];
          if (1 === t.selectionManager.selectedKeys.size && c) {
            if (t.collection.getItem(t.selectionManager.selectedKeys.keys().next().value)) {
              let e = o(t.selectionManager.selectedKeys.keys().next().value);
              e && u.push(i.format("selectedItem", { item: e }));
            }
          } else if (1 === n.size && 0 === r.size) {
            let e = o(n.keys().next().value);
            e && u.push(i.format("selectedItem", { item: e }));
          } else if (1 === r.size && 0 === n.size && t.collection.getItem(r.keys().next().value)) {
            let e = o(r.keys().next().value);
            e && u.push(i.format("deselectedItem", { item: e }));
          }
          "multiple" === t.selectionManager.selectionMode &&
            (0 === u.length ||
              "all" === l ||
              l.size > 1 ||
              "all" === a.current ||
              (null === (e = a.current) || void 0 === e ? void 0 : e.size) > 1) &&
            u.push("all" === l ? i.format("selectedAll") : i.format("selectedCount", { count: l.size })),
            u.length > 0 && nt(u.join(" ")),
            (a.current = l);
        }, [l]);
      }
      function ct(e, t) {
        let n = new Set();
        if ("all" === e || "all" === t) return n;
        for (let r of e.keys()) t.has(r) || n.add(r);
        return n;
      }
      function ut(e) {
        let t = (0, et.qb)(it(lt)),
          n = (0, ot.Kf)(),
          o = ("pointer" === n || "virtual" === n || null == n) && "undefined" != typeof self && "ontouchstart" in self,
          i = (0, r.useMemo)(() => {
            let n,
              r = e.selectionManager.selectionMode,
              i = e.selectionManager.selectionBehavior;
            return o && (n = t.format("longPressToSelect")), "replace" === i && "none" !== r && e.hasItemActions ? n : void 0;
          }, [e.selectionManager.selectionMode, e.selectionManager.selectionBehavior, e.hasItemActions, t, o]);
        return (0, Qe.PK)(i);
      }
      function st(e, t) {
        let { key: n } = e,
          r = t.selectionManager,
          o = (0, Qe.Me)(),
          i = !t.selectionManager.canSelectItem(n),
          l = t.selectionManager.isSelected(n);
        return {
          checkboxProps: {
            id: o,
            "aria-label": (0, et.qb)(it(lt)).format("select"),
            isSelected: l,
            isDisabled: i,
            onChange: () => r.select(n)
          }
        };
      }
      lt = {
        "ar-AE": {
          deselectedItem: (e) => `${e.item} غير المحدد`,
          longPressToSelect: "اضغط مطولًا للدخول إلى وضع التحديد.",
          select: "تحديد",
          selectedAll: "جميع العناصر المحددة.",
          selectedCount: (e, t) =>
            `${t.plural(e.count, {
              "=0": "لم يتم تحديد عناصر",
              one: () => `${t.number(e.count)} عنصر محدد`,
              other: () => `${t.number(e.count)} عنصر محدد`
            })}.`,
          selectedItem: (e) => `${e.item} المحدد`
        },
        "bg-BG": {
          deselectedItem: (e) => `${e.item} не е избран.`,
          longPressToSelect: "Натиснете и задръжте за да влезете в избирателен режим.",
          select: "Изберете",
          selectedAll: "Всички елементи са избрани.",
          selectedCount: (e, t) =>
            `${t.plural(e.count, {
              "=0": "Няма избрани елементи",
              one: () => `${t.number(e.count)} избран елемент`,
              other: () => `${t.number(e.count)} избрани елементи`
            })}.`,
          selectedItem: (e) => `${e.item} избран.`
        },
        "cs-CZ": {
          deselectedItem: (e) => `Položka ${e.item} není vybrána.`,
          longPressToSelect: "Dlouhým stisknutím přejdete do režimu výběru.",
          select: "Vybrat",
          selectedAll: "Vybrány všechny položky.",
          selectedCount: (e, t) =>
            `${t.plural(e.count, {
              "=0": "Nevybrány žádné položky",
              one: () => `Vybrána ${t.number(e.count)} položka`,
              other: () => `Vybráno ${t.number(e.count)} položek`
            })}.`,
          selectedItem: (e) => `Vybrána položka ${e.item}.`
        },
        "da-DK": {
          deselectedItem: (e) => `${e.item} ikke valgt.`,
          longPressToSelect: "Lav et langt tryk for at aktivere valgtilstand.",
          select: "Vælg",
          selectedAll: "Alle elementer valgt.",
          selectedCount: (e, t) =>
            `${t.plural(e.count, {
              "=0": "Ingen elementer valgt",
              one: () => `${t.number(e.count)} element valgt`,
              other: () => `${t.number(e.count)} elementer valgt`
            })}.`,
          selectedItem: (e) => `${e.item} valgt.`
        },
        "de-DE": {
          deselectedItem: (e) => `${e.item} nicht ausgewählt.`,
          longPressToSelect: "Gedrückt halten, um Auswahlmodus zu öffnen.",
          select: "Auswählen",
          selectedAll: "Alle Elemente ausgewählt.",
          selectedCount: (e, t) =>
            `${t.plural(e.count, {
              "=0": "Keine Elemente ausgewählt",
              one: () => `${t.number(e.count)} Element ausgewählt`,
              other: () => `${t.number(e.count)} Elemente ausgewählt`
            })}.`,
          selectedItem: (e) => `${e.item} ausgewählt.`
        },
        "el-GR": {
          deselectedItem: (e) => `Δεν επιλέχθηκε το στοιχείο ${e.item}.`,
          longPressToSelect: "Πατήστε παρατεταμένα για να μπείτε σε λειτουργία επιλογής.",
          select: "Επιλογή",
          selectedAll: "Επιλέχθηκαν όλα τα στοιχεία.",
          selectedCount: (e, t) =>
            `${t.plural(e.count, {
              "=0": "Δεν επιλέχθηκαν στοιχεία",
              one: () => `Επιλέχθηκε ${t.number(e.count)} στοιχείο`,
              other: () => `Επιλέχθηκαν ${t.number(e.count)} στοιχεία`
            })}.`,
          selectedItem: (e) => `Επιλέχθηκε το στοιχείο ${e.item}.`
        },
        "en-US": {
          deselectedItem: (e) => `${e.item} not selected.`,
          select: "Select",
          selectedCount: (e, t) =>
            `${t.plural(e.count, {
              "=0": "No items selected",
              one: () => `${t.number(e.count)} item selected`,
              other: () => `${t.number(e.count)} items selected`
            })}.`,
          selectedAll: "All items selected.",
          selectedItem: (e) => `${e.item} selected.`,
          longPressToSelect: "Long press to enter selection mode."
        },
        "es-ES": {
          deselectedItem: (e) => `${e.item} no seleccionado.`,
          longPressToSelect: "Mantenga pulsado para abrir el modo de selección.",
          select: "Seleccionar",
          selectedAll: "Todos los elementos seleccionados.",
          selectedCount: (e, t) =>
            `${t.plural(e.count, {
              "=0": "Ningún elemento seleccionado",
              one: () => `${t.number(e.count)} elemento seleccionado`,
              other: () => `${t.number(e.count)} elementos seleccionados`
            })}.`,
          selectedItem: (e) => `${e.item} seleccionado.`
        },
        "et-EE": {
          deselectedItem: (e) => `${e.item} pole valitud.`,
          longPressToSelect: "Valikurežiimi sisenemiseks vajutage pikalt.",
          select: "Vali",
          selectedAll: "Kõik üksused valitud.",
          selectedCount: (e, t) =>
            `${t.plural(e.count, {
              "=0": "Üksusi pole valitud",
              one: () => `${t.number(e.count)} üksus valitud`,
              other: () => `${t.number(e.count)} üksust valitud`
            })}.`,
          selectedItem: (e) => `${e.item} valitud.`
        },
        "fi-FI": {
          deselectedItem: (e) => `Kohdetta ${e.item} ei valittu.`,
          longPressToSelect: "Siirry valintatilaan painamalla pitkään.",
          select: "Valitse",
          selectedAll: "Kaikki kohteet valittu.",
          selectedCount: (e, t) =>
            `${t.plural(e.count, {
              "=0": "Ei yhtään kohdetta valittu",
              one: () => `${t.number(e.count)} kohde valittu`,
              other: () => `${t.number(e.count)} kohdetta valittu`
            })}.`,
          selectedItem: (e) => `${e.item} valittu.`
        },
        "fr-FR": {
          deselectedItem: (e) => `${e.item} non sélectionné.`,
          longPressToSelect: "Appuyez de manière prolongée pour passer en mode de sélection.",
          select: "Sélectionner",
          selectedAll: "Tous les éléments sélectionnés.",
          selectedCount: (e, t) =>
            `${t.plural(e.count, {
              "=0": "Aucun élément sélectionné",
              one: () => `${t.number(e.count)} élément sélectionné`,
              other: () => `${t.number(e.count)} éléments sélectionnés`
            })}.`,
          selectedItem: (e) => `${e.item} sélectionné.`
        },
        "he-IL": {
          deselectedItem: (e) => `${e.item} לא נבחר.`,
          longPressToSelect: "הקשה ארוכה לכניסה למצב בחירה.",
          select: "בחר",
          selectedAll: "כל הפריטים נבחרו.",
          selectedCount: (e, t) =>
            `${t.plural(e.count, {
              "=0": "לא נבחרו פריטים",
              one: () => `פריט ${t.number(e.count)} נבחר`,
              other: () => `${t.number(e.count)} פריטים נבחרו`
            })}.`,
          selectedItem: (e) => `${e.item} נבחר.`
        },
        "hr-HR": {
          deselectedItem: (e) => `Stavka ${e.item} nije odabrana.`,
          longPressToSelect: "Dugo pritisnite za ulazak u način odabira.",
          select: "Odaberite",
          selectedAll: "Odabrane su sve stavke.",
          selectedCount: (e, t) =>
            `${t.plural(e.count, {
              "=0": "Nije odabrana nijedna stavka",
              one: () => `Odabrana je ${t.number(e.count)} stavka`,
              other: () => `Odabrano je ${t.number(e.count)} stavki`
            })}.`,
          selectedItem: (e) => `Stavka ${e.item} je odabrana.`
        },
        "hu-HU": {
          deselectedItem: (e) => `${e.item} nincs kijelölve.`,
          longPressToSelect: "Nyomja hosszan a kijelöléshez.",
          select: "Kijelölés",
          selectedAll: "Az összes elem kijelölve.",
          selectedCount: (e, t) =>
            `${t.plural(e.count, {
              "=0": "Egy elem sincs kijelölve",
              one: () => `${t.number(e.count)} elem kijelölve`,
              other: () => `${t.number(e.count)} elem kijelölve`
            })}.`,
          selectedItem: (e) => `${e.item} kijelölve.`
        },
        "it-IT": {
          deselectedItem: (e) => `${e.item} non selezionato.`,
          longPressToSelect: "Premi a lungo per passare alla modalità di selezione.",
          select: "Seleziona",
          selectedAll: "Tutti gli elementi selezionati.",
          selectedCount: (e, t) =>
            `${t.plural(e.count, {
              "=0": "Nessun elemento selezionato",
              one: () => `${t.number(e.count)} elemento selezionato`,
              other: () => `${t.number(e.count)} elementi selezionati`
            })}.`,
          selectedItem: (e) => `${e.item} selezionato.`
        },
        "ja-JP": {
          deselectedItem: (e) => `${e.item} が選択されていません。`,
          longPressToSelect: "長押しして選択モードを開きます。",
          select: "選択",
          selectedAll: "すべての項目を選択しました。",
          selectedCount: (e, t) =>
            `${t.plural(e.count, {
              "=0": "項目が選択されていません",
              one: () => `${t.number(e.count)} 項目を選択しました`,
              other: () => `${t.number(e.count)} 項目を選択しました`
            })}。`,
          selectedItem: (e) => `${e.item} を選択しました。`
        },
        "ko-KR": {
          deselectedItem: (e) => `${e.item}이(가) 선택되지 않았습니다.`,
          longPressToSelect: "선택 모드로 들어가려면 길게 누르십시오.",
          select: "선택",
          selectedAll: "모든 항목이 선택되었습니다.",
          selectedCount: (e, t) =>
            `${t.plural(e.count, {
              "=0": "선택된 항목이 없습니다",
              one: () => `${t.number(e.count)}개 항목이 선택되었습니다`,
              other: () => `${t.number(e.count)}개 항목이 선택되었습니다`
            })}.`,
          selectedItem: (e) => `${e.item}이(가) 선택되었습니다.`
        },
        "lt-LT": {
          deselectedItem: (e) => `${e.item} nepasirinkta.`,
          longPressToSelect: "Norėdami įjungti pasirinkimo režimą, paspauskite ir palaikykite.",
          select: "Pasirinkti",
          selectedAll: "Pasirinkti visi elementai.",
          selectedCount: (e, t) =>
            `${t.plural(e.count, {
              "=0": "Nepasirinktas nė vienas elementas",
              one: () => `Pasirinktas ${t.number(e.count)} elementas`,
              other: () => `Pasirinkta elementų: ${t.number(e.count)}`
            })}.`,
          selectedItem: (e) => `Pasirinkta: ${e.item}.`
        },
        "lv-LV": {
          deselectedItem: (e) => `Vienums ${e.item} nav atlasīts.`,
          longPressToSelect: "Ilgi turiet nospiestu. lai ieslēgtu atlases režīmu.",
          select: "Atlasīt",
          selectedAll: "Atlasīti visi vienumi.",
          selectedCount: (e, t) =>
            `${t.plural(e.count, {
              "=0": "Nav atlasīts neviens vienums",
              one: () => `Atlasīto vienumu skaits: ${t.number(e.count)}`,
              other: () => `Atlasīto vienumu skaits: ${t.number(e.count)}`
            })}.`,
          selectedItem: (e) => `Atlasīts vienums ${e.item}.`
        },
        "nb-NO": {
          deselectedItem: (e) => `${e.item} er ikke valgt.`,
          longPressToSelect: "Bruk et langt trykk for å gå inn i valgmodus.",
          select: "Velg",
          selectedAll: "Alle elementer er valgt.",
          selectedCount: (e, t) =>
            `${t.plural(e.count, {
              "=0": "Ingen elementer er valgt",
              one: () => `${t.number(e.count)} element er valgt`,
              other: () => `${t.number(e.count)} elementer er valgt`
            })}.`,
          selectedItem: (e) => `${e.item} er valgt.`
        },
        "nl-NL": {
          deselectedItem: (e) => `${e.item} niet geselecteerd.`,
          longPressToSelect: "Druk lang om de selectiemodus te openen.",
          select: "Selecteren",
          selectedAll: "Alle items geselecteerd.",
          selectedCount: (e, t) =>
            `${t.plural(e.count, {
              "=0": "Geen items geselecteerd",
              one: () => `${t.number(e.count)} item geselecteerd`,
              other: () => `${t.number(e.count)} items geselecteerd`
            })}.`,
          selectedItem: (e) => `${e.item} geselecteerd.`
        },
        "pl-PL": {
          deselectedItem: (e) => `Nie zaznaczono ${e.item}.`,
          longPressToSelect: "Naciśnij i przytrzymaj, aby wejść do trybu wyboru.",
          select: "Zaznacz",
          selectedAll: "Wszystkie zaznaczone elementy.",
          selectedCount: (e, t) =>
            `${t.plural(e.count, {
              "=0": "Nie zaznaczono żadnych elementów",
              one: () => `${t.number(e.count)} zaznaczony element`,
              other: () => `${t.number(e.count)} zaznaczonych elementów`
            })}.`,
          selectedItem: (e) => `Zaznaczono ${e.item}.`
        },
        "pt-BR": {
          deselectedItem: (e) => `${e.item} não selecionado.`,
          longPressToSelect: "Mantenha pressionado para entrar no modo de seleção.",
          select: "Selecionar",
          selectedAll: "Todos os itens selecionados.",
          selectedCount: (e, t) =>
            `${t.plural(e.count, {
              "=0": "Nenhum item selecionado",
              one: () => `${t.number(e.count)} item selecionado`,
              other: () => `${t.number(e.count)} itens selecionados`
            })}.`,
          selectedItem: (e) => `${e.item} selecionado.`
        },
        "pt-PT": {
          deselectedItem: (e) => `${e.item} não selecionado.`,
          longPressToSelect: "Prima continuamente para entrar no modo de seleção.",
          select: "Selecionar",
          selectedAll: "Todos os itens selecionados.",
          selectedCount: (e, t) =>
            `${t.plural(e.count, {
              "=0": "Nenhum item selecionado",
              one: () => `${t.number(e.count)} item selecionado`,
              other: () => `${t.number(e.count)} itens selecionados`
            })}.`,
          selectedItem: (e) => `${e.item} selecionado.`
        },
        "ro-RO": {
          deselectedItem: (e) => `${e.item} neselectat.`,
          longPressToSelect: "Apăsați lung pentru a intra în modul de selectare.",
          select: "Selectare",
          selectedAll: "Toate elementele selectate.",
          selectedCount: (e, t) =>
            `${t.plural(e.count, {
              "=0": "Niciun element selectat",
              one: () => `${t.number(e.count)} element selectat`,
              other: () => `${t.number(e.count)} elemente selectate`
            })}.`,
          selectedItem: (e) => `${e.item} selectat.`
        },
        "ru-RU": {
          deselectedItem: (e) => `${e.item} не выбрано.`,
          longPressToSelect: "Нажмите и удерживайте для входа в режим выбора.",
          select: "Выбрать",
          selectedAll: "Выбраны все элементы.",
          selectedCount: (e, t) =>
            `${t.plural(e.count, {
              "=0": "Нет выбранных элементов",
              one: () => `${t.number(e.count)} элемент выбран`,
              other: () => `${t.number(e.count)} элементов выбрано`
            })}.`,
          selectedItem: (e) => `${e.item} выбрано.`
        },
        "sk-SK": {
          deselectedItem: (e) => `Nevybraté položky: ${e.item}.`,
          longPressToSelect: "Dlhším stlačením prejdite do režimu výberu.",
          select: "Vybrať",
          selectedAll: "Všetky vybraté položky.",
          selectedCount: (e, t) =>
            `${t.plural(e.count, {
              "=0": "Žiadne vybraté položky",
              one: () => `${t.number(e.count)} vybratá položka`,
              other: () => `Počet vybratých položiek:${t.number(e.count)}`
            })}.`,
          selectedItem: (e) => `Vybraté položky: ${e.item}.`
        },
        "sl-SI": {
          deselectedItem: (e) => `Element ${e.item} ni izbran.`,
          longPressToSelect: "Za izbirni način pritisnite in dlje časa držite.",
          select: "Izberite",
          selectedAll: "Vsi elementi so izbrani.",
          selectedCount: (e, t) =>
            `${t.plural(e.count, {
              "=0": "Noben element ni izbran",
              one: () => `${t.number(e.count)} element je izbran`,
              other: () => `${t.number(e.count)} elementov je izbranih`
            })}.`,
          selectedItem: (e) => `Element ${e.item} je izbran.`
        },
        "sr-SP": {
          deselectedItem: (e) => `${e.item} nije izabrano.`,
          longPressToSelect: "Dugo pritisnite za ulazak u režim biranja.",
          select: "Izaberite",
          selectedAll: "Izabrane su sve stavke.",
          selectedCount: (e, t) =>
            `${t.plural(e.count, {
              "=0": "Nije izabrana nijedna stavka",
              one: () => `Izabrana je ${t.number(e.count)} stavka`,
              other: () => `Izabrano je ${t.number(e.count)} stavki`
            })}.`,
          selectedItem: (e) => `${e.item} je izabrano.`
        },
        "sv-SE": {
          deselectedItem: (e) => `${e.item} ej markerat.`,
          longPressToSelect: "Tryck länge när du vill öppna väljarläge.",
          select: "Markera",
          selectedAll: "Alla markerade objekt.",
          selectedCount: (e, t) =>
            `${t.plural(e.count, {
              "=0": "Inga markerade objekt",
              one: () => `${t.number(e.count)} markerat objekt`,
              other: () => `${t.number(e.count)} markerade objekt`
            })}.`,
          selectedItem: (e) => `${e.item} markerat.`
        },
        "tr-TR": {
          deselectedItem: (e) => `${e.item} seçilmedi.`,
          longPressToSelect: "Seçim moduna girmek için uzun basın.",
          select: "Seç",
          selectedAll: "Tüm ögeler seçildi.",
          selectedCount: (e, t) =>
            `${t.plural(e.count, {
              "=0": "Hiçbir öge seçilmedi",
              one: () => `${t.number(e.count)} öge seçildi`,
              other: () => `${t.number(e.count)} öge seçildi`
            })}.`,
          selectedItem: (e) => `${e.item} seçildi.`
        },
        "uk-UA": {
          deselectedItem: (e) => `${e.item} не вибрано.`,
          longPressToSelect: "Виконайте довге натиснення, щоб перейти в режим вибору.",
          select: "Вибрати",
          selectedAll: "Усі елементи вибрано.",
          selectedCount: (e, t) =>
            `${t.plural(e.count, {
              "=0": "Жодних елементів не вибрано",
              one: () => `${t.number(e.count)} елемент вибрано`,
              other: () => `Вибрано елементів: ${t.number(e.count)}`
            })}.`,
          selectedItem: (e) => `${e.item} вибрано.`
        },
        "zh-CN": {
          deselectedItem: (e) => `未选择 ${e.item}。`,
          longPressToSelect: "长按以进入选择模式。",
          select: "选择",
          selectedAll: "已选择所有项目。",
          selectedCount: (e, t) =>
            `${t.plural(e.count, {
              "=0": "未选择项目",
              one: () => `已选择 ${t.number(e.count)} 个项目`,
              other: () => `已选择 ${t.number(e.count)} 个项目`
            })}。`,
          selectedItem: (e) => `已选择 ${e.item}。`
        },
        "zh-TW": {
          deselectedItem: (e) => `未選取「${e.item}」。`,
          longPressToSelect: "長按以進入選擇模式。",
          select: "選取",
          selectedAll: "已選取所有項目。",
          selectedCount: (e, t) =>
            `${t.plural(e.count, {
              "=0": "未選取任何項目",
              one: () => `已選取 ${t.number(e.count)} 個項目`,
              other: () => `已選取 ${t.number(e.count)} 個項目`
            })}。`,
          selectedItem: (e) => `已選取「${e.item}」。`
        }
      };
      var dt = n(15141),
        mt = n(75962),
        ft = function (e, t) {
          var n = {};
          for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
              t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
          }
          return n;
        };
      const pt = new WeakMap();
      function bt(e, t) {
        let { id: n } = pt.get(e);
        if (!n) throw new Error("Unknown list");
        return `${n}-${(function (e) {
          return "string" == typeof e ? e.replace(/\s*/g, "") : "" + e;
        })(t)}`;
      }
      function gt(e) {
        let t, n;
        do {
          (n = e.lastChild()), n && (t = n);
        } while (n);
        return t;
      }
      function yt(e, t) {
        let { key: n } = e;
        const { checkboxProps: r } = st(e, t);
        return { checkboxProps: Object.assign(Object.assign({}, r), { "aria-labelledby": `${r.id} ${bt(t, n)}` }) };
      }
      var vt = n(81402),
        ht = n(36278),
        xt = n(9834);
      class wt {
        *[Symbol.iterator]() {
          yield* this.iterable;
        }
        get size() {
          return this.keyMap.size;
        }
        getKeys() {
          return this.keyMap.keys();
        }
        getKeyBefore(e) {
          let t = this.keyMap.get(e);
          return t ? t.prevKey : null;
        }
        getKeyAfter(e) {
          let t = this.keyMap.get(e);
          return t ? t.nextKey : null;
        }
        getFirstKey() {
          return this.firstKey;
        }
        getLastKey() {
          return this.lastKey;
        }
        getItem(e) {
          return this.keyMap.get(e);
        }
        at(e) {
          const t = [...this.getKeys()];
          return this.getItem(t[e]);
        }
        getChildren(e) {
          let t = this.keyMap.get(e);
          return (null == t ? void 0 : t.childNodes) || [];
        }
        constructor(e) {
          (this.keyMap = new Map()), (this.iterable = e);
          let t,
            n = (e) => {
              if ((this.keyMap.set(e.key, e), e.childNodes && "section" === e.type)) for (let t of e.childNodes) n(t);
            };
          for (let t of e) n(t);
          let r = 0;
          for (let [e, n] of this.keyMap)
            t ? ((t.nextKey = e), (n.prevKey = t.key)) : ((this.firstKey = e), (n.prevKey = void 0)),
              "item" === n.type && (n.index = r++),
              (t = n),
              (t.nextKey = void 0);
          this.lastKey = null == t ? void 0 : t.key;
        }
      }
      function kt(e) {
        let { filter: t } = e,
          n = (0, vt.q)(e),
          o = (0, r.useMemo)(() => (e.disabledKeys ? new Set(e.disabledKeys) : new Set()), [e.disabledKeys]),
          i = (0, r.useCallback)((e) => new wt(t ? t(e) : e), [t]),
          l = (0, r.useMemo)(() => ({ suppressTextValueWarning: e.suppressTextValueWarning }), [e.suppressTextValueWarning]),
          a = (0, ht.Kx)(e, i, l),
          c = (0, r.useMemo)(() => new (0, vt.Z)(a, n), [a, n]);
        const u = (0, r.useRef)(null);
        return (
          (0, r.useEffect)(() => {
            if (null != n.focusedKey && !a.getItem(n.focusedKey)) {
              const e = u.current.getItem(n.focusedKey),
                t = [...u.current.getKeys()]
                  .map((e) => {
                    const t = u.current.getItem(e);
                    return "item" === t.type ? t : null;
                  })
                  .filter((e) => null !== e),
                r = [...a.getKeys()]
                  .map((e) => {
                    const t = a.getItem(e);
                    return "item" === t.type ? t : null;
                  })
                  .filter((e) => null !== e),
                o = t.length - r.length;
              let i,
                l = Math.min(o > 1 ? Math.max(e.index - o + 1, 0) : e.index, r.length - 1);
              for (; l >= 0; ) {
                if (!c.isDisabled(r[l].key)) {
                  i = r[l];
                  break;
                }
                l < r.length - 1 ? l++ : (l > e.index && (l = e.index), l--);
              }
              n.setFocusedKey(i ? i.key : null);
            }
            u.current = a;
          }, [a, c, n, n.focusedKey]),
          { collection: a, disabledKeys: o, selectionManager: c }
        );
      }
      function Ot(e) {
        var t;
        let [n, o] = (0, xt.zk)(e.selectedKey, null !== (t = e.defaultSelectedKey) && void 0 !== t ? t : null, e.onSelectionChange),
          i = (0, r.useMemo)(() => (null != n ? [n] : []), [n]),
          {
            collection: l,
            disabledKeys: a,
            selectionManager: c
          } = kt({
            ...e,
            selectionMode: "single",
            disallowEmptySelection: !0,
            allowDuplicateSelectionEvents: !0,
            selectedKeys: i,
            onSelectionChange: (t) => {
              var r;
              let i = null !== (r = t.values().next().value) && void 0 !== r ? r : null;
              i === n && e.onSelectionChange && e.onSelectionChange(i), o(i);
            }
          }),
          u = null != n ? l.getItem(n) : null;
        return { collection: l, disabledKeys: a, selectionManager: c, selectedKey: n, setSelectedKey: o, selectedItem: u };
      }
      var St,
        Et = n(32952),
        Ct = n(54001),
        jt = n(23239),
        Pt = n(77176),
        It = n(19962),
        At = n(14330),
        Nt = n(86732),
        $t = n(90845);
      !(function (e) {
        var t = function (e) {
            var t = e.theme,
              o = void 0 === t ? {} : t,
              i = e.itemAnimationMode,
              l = e.assistiveScroll,
              c = void 0 !== l && l,
              u = e.onClick,
              s = (0, Ye._)(e, ["theme", "itemAnimationMode", "assistiveScroll", "onClick"]),
              d = kt(s),
              m = r.useRef(null),
              f = (function (e, t, n) {
                let { isVirtualized: r, keyboardDelegate: o, onAction: i, linkBehavior: l = "action" } = e;
                e["aria-label"] ||
                  e["aria-labelledby"] ||
                  console.warn("An aria-label or aria-labelledby prop is required for accessibility.");
                let { listProps: a } = (0, mt._t)({
                    selectionManager: t.selectionManager,
                    collection: t.collection,
                    disabledKeys: t.disabledKeys,
                    ref: n,
                    keyboardDelegate: o,
                    isVirtualized: r,
                    selectOnFocus: "replace" === t.selectionManager.selectionBehavior,
                    shouldFocusWrap: e.shouldFocusWrap,
                    linkBehavior: l
                  }),
                  c = (0, Qe.Me)(e.id);
                pt.set(t, { id: c, onAction: i, linkBehavior: l });
                let u = ut({ selectionManager: t.selectionManager, hasItemActions: !!i }),
                  s = (0, dt.pu)(n, { isDisabled: 0 !== t.collection.size }),
                  d = (0, Qe.zL)(e, { labelable: !0 }),
                  m = (0, Qe.dG)(
                    d,
                    { role: "grid", id: c, "aria-multiselectable": "multiple" === t.selectionManager.selectionMode ? "true" : void 0 },
                    0 === t.collection.size ? { tabIndex: s ? -1 : 0 } : a,
                    u
                  );
                return r && ((m["aria-rowcount"] = t.collection.size), (m["aria-colcount"] = 1)), at({}, t), { gridProps: m };
              })(s, d, m).gridProps;
            return r.createElement(
              "ul",
              (0, Je._)((0, Xe._)((0, Je._)({}, f), { ref: m }), (0, Ct.Sh)(a.list, o.list)),
              Array.from(d.collection).map(function (e) {
                return r.createElement(n, {
                  key: e.key,
                  item: e,
                  state: d,
                  theme: o.item,
                  animationMode: i,
                  assistiveScroll: c,
                  onClick: u
                });
              })
            );
          },
          n = function (e) {
            var t = e.item,
              n = e.state,
              l = e.animationMode,
              c = e.assistiveScroll,
              u = e.onClick,
              s = e.showCheckbox,
              d = void 0 !== s && s,
              m = e.theme,
              f = void 0 === m ? {} : m,
              p = r.useRef(null),
              b = (function (e, t, n) {
                let { node: o, isVirtualized: i, shouldSelectOnPressUp: l } = e,
                  { direction: a } = (0, et.bU)(),
                  { onAction: c, linkBehavior: u } = pt.get(t),
                  s = (0, Qe.mp)(),
                  d = (0, r.useRef)(null),
                  m = (0, mt.Cs)({
                    selectionManager: t.selectionManager,
                    key: o.key,
                    ref: n,
                    isVirtualized: i,
                    shouldSelectOnPressUp: l,
                    onAction: c ? () => c(o.key) : void 0,
                    focus: () => {
                      ((null != d.current && o.key !== d.current) || !n.current.contains(document.activeElement)) && (0, dt.ex)(n.current);
                    },
                    linkBehavior: u
                  }),
                  { itemProps: f } = m,
                  p = ft(m, ["itemProps"]),
                  b = p.hasAction ? (0, Qe.ib)(o.props) : {},
                  g = (0, Qe.dG)(f, b, {
                    role: "row",
                    onKeyDownCapture: (e) => {
                      if (!e.currentTarget.contains(e.target)) return;
                      let t = (0, dt.QL)(n.current);
                      switch (((t.currentNode = document.activeElement), e.key)) {
                        case "ArrowLeft": {
                          let r = "rtl" === a ? t.nextNode() : t.previousNode();
                          if (r)
                            e.preventDefault(),
                              e.stopPropagation(),
                              (0, dt.ex)(r),
                              (0, Qe.Gt)(r, { containingElement: (0, Qe.rP)(n.current) });
                          else if ((e.preventDefault(), e.stopPropagation(), "rtl" === a))
                            (0, dt.ex)(n.current), (0, Qe.Gt)(n.current, { containingElement: (0, Qe.rP)(n.current) });
                          else {
                            t.currentNode = n.current;
                            let e = gt(t);
                            e && ((0, dt.ex)(e), (0, Qe.Gt)(e, { containingElement: (0, Qe.rP)(n.current) }));
                          }
                          break;
                        }
                        case "ArrowRight": {
                          let r = "rtl" === a ? t.previousNode() : t.nextNode();
                          if (r)
                            e.preventDefault(),
                              e.stopPropagation(),
                              (0, dt.ex)(r),
                              (0, Qe.Gt)(r, { containingElement: (0, Qe.rP)(n.current) });
                          else if ((e.preventDefault(), e.stopPropagation(), "ltr" === a))
                            (0, dt.ex)(n.current), (0, Qe.Gt)(n.current, { containingElement: (0, Qe.rP)(n.current) });
                          else {
                            t.currentNode = n.current;
                            let e = gt(t);
                            e && ((0, dt.ex)(e), (0, Qe.Gt)(e, { containingElement: (0, Qe.rP)(n.current) }));
                          }
                          break;
                        }
                        case "ArrowUp":
                        case "ArrowDown":
                          !e.altKey &&
                            n.current.contains(e.target) &&
                            (e.stopPropagation(),
                            e.preventDefault(),
                            n.current.parentElement.dispatchEvent(new KeyboardEvent(e.nativeEvent.type, e.nativeEvent)));
                      }
                    },
                    onFocus: (e) => {
                      (d.current = o.key), e.target === n.current || (0, ot.E)() || t.selectionManager.setFocusedKey(o.key);
                    },
                    "aria-label": o.textValue || void 0,
                    "aria-selected": t.selectionManager.canSelectItem(o.key) ? t.selectionManager.isSelected(o.key) : void 0,
                    "aria-disabled": t.selectionManager.isDisabled(o.key) || void 0,
                    "aria-labelledby": s && o.textValue ? `${bt(t, o.key)} ${s}` : void 0,
                    id: bt(t, o.key)
                  });
                return (
                  i && (g["aria-rowindex"] = o.index + 1),
                  Object.assign({ rowProps: g, gridCellProps: { role: "gridcell", "aria-colindex": 1 }, descriptionProps: { id: s } }, p)
                );
              })({ node: t }, n, p),
              g = b.rowProps,
              y = b.gridCellProps,
              v = b.isPressed,
              h = (0, dt.Fx)(),
              x = h.isFocusVisible,
              w = h.focusProps,
              k = r.useMemo(function () {
                return new Et.xQ();
              }, []),
              O = r.useCallback(
                function () {
                  return null != l && r.createElement(Nt.H, { mouseDownEvents: k, animationMode: l, className: f.ripple });
                },
                [k, l, f.ripple]
              );
            r.useEffect(
              function () {
                var e;
                c && x && (null === (e = p.current) || void 0 === e || e.scrollIntoView({ block: "nearest" }));
              },
              [x, c]
            );
            var S = d && "none" !== n.selectionManager.selectionMode && "toggle" === n.selectionManager.selectionBehavior,
              E = g.onPointerDown,
              C = (0, Ye._)(g, ["onPointerDown"]),
              j = (0, Qe.dG)(C, w, {
                onPointerDown: function (e) {
                  var t;
                  k.next({ pageX: e.pageX, pageY: e.pageY }), null === (t = E) || void 0 === t || t(e);
                }
              });
            return (
              $t.P.useEffectOnDidMount(function () {
                p.current && i(p.current);
              }),
              $t.P.useSubscriptionTo(
                k.pipe(
                  Pt.U(function (e) {
                    var n;
                    return null === (n = u) || void 0 === n
                      ? void 0
                      : n({ key: t.key, clickPoint: { x: Math.floor(e.pageX), y: Math.floor(e.pageY) } });
                  })
                )
              ),
              r.createElement(
                "li",
                (0, Je._)(
                  (0, Xe._)((0, Je._)({}, j), { ref: p }),
                  (0, Ct.Sh)(
                    "none" !== n.selectionManager.selectionMode ? a.selectableItem : a.item,
                    v ? f.pressed : void 0,
                    x ? f.focused : void 0,
                    f.base
                  )
                ),
                r.createElement("div", y, S && r.createElement(o, { item: t, state: n }), t.rendered),
                O()
              )
            );
          },
          o = function (e) {
            var t = e.item,
              n = e.state,
              o = yt({ key: t.key }, n).checkboxProps;
            return r.createElement(
              At.Ys,
              (0, Xe._)((0, Je._)({ name: "".concat(t.textValue, "-checkbox") }, o), { checked: jt.h.create(Boolean(o.isSelected)) })
            );
          },
          i = function (e) {
            It.Oq(It.NO.isButtonLike)(e).forEach(function (e) {
              var t,
                n = null === (t = e.onpointerdown) || void 0 === t ? void 0 : t.bind(e);
              e.onpointerdown = function (e) {
                var t;
                e.stopPropagation(), null === (t = n) || void 0 === t || t(e);
              };
            });
          };
        (e.List = t),
          (e.LiftedList = function (e) {
            return (0, Ct.xb)(t)(e);
          });
        e.Item = ht.ck;
        var l = {
            position: "relative",
            overflow: "hidden",
            $nest: {
              '& > [role="gridcell"]': { display: "flex", justifyContent: "space-between", alignItems: "center", width: u.ux.percent(100) }
            }
          },
          a = u.ux.stylesheet({
            list: [{ listStyle: "none", overflow: "auto", padding: 0 }],
            item: [l],
            selectableItem: [l, { cursor: "pointer" }]
          });
      })(St || (St = {}));
      var Mt = n(88392),
        Dt = n(9546),
        zt = (0, d.n)(function (e) {
          return r.createElement(
            St.List,
            {
              "data-role": "list",
              selectionMode: "single",
              selectionBehavior: "toggle",
              "aria-label": e.meta.label,
              "aria-describedby": e["aria-describedby"],
              assistiveScroll: !0,
              theme: {
                list: Lt.list,
                item: { base: u.ux.joinClasses([Lt.listItem, Tt(e.itemHoveredColor)]), focused: _t(e.itemFocusedColor) }
              },
              onSelectionChange: function (t) {
                return (
                  "all" === t
                    ? e.items
                    : e.items.filter(function (e) {
                        return t.has(e.id);
                      })
                ).forEach(e.onSelect);
              },
              onClick: function (t) {
                return e.onClick({ id: t.key.toString(), clickPoint: t.clickPoint });
              }
            },
            e.items.map(function (t, n) {
              return r.createElement(St.Item, { key: t.id, textValue: t.meta.label }, e.renderItem(t, n));
            })
          );
        }),
        Lt = u.ux.stylesheet({
          list: [{ margin: 0, display: "flex", flexDirection: "column" }],
          listItem: [
            {
              display: "flex",
              minHeight: u.ux.rem(2),
              cursor: "pointer",
              outline: "none",
              border: "none",
              backgroundColor: D.CoreNeutral0,
              borderRadius: u.ux.rem(Mt.xB),
              padding: "0 0 0 ".concat(u.ux.rem(Dt.x)),
              boxSizing: "border-box"
            }
          ]
        }),
        Bt = new z.z6(100);
      function Tt() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : b.Il.CoreNeutral10,
          t = "ihc-".concat(e),
          n = Bt.get(t);
        if (void 0 !== n) return n;
        var r = u.ux.style({
          $nest: { "&:hover": { backgroundColor: D[e], $nest: { '& [data-role="list-item-secondary-button"]': { opacity: 1 } } } }
        });
        return Bt.put(t, r), r;
      }
      function _t() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : b.Il.CoreNeutral10,
          t = "ifc-".concat(e),
          n = Bt.get(t);
        if (void 0 !== n) return n;
        var r = u.ux.style({ backgroundColor: D[e], $nest: { '& [data-role="list-item-secondary-button"]': { opacity: 1 } } });
        return Bt.put(t, r), r;
      }
      var Rt = n(65223);
      function Ft(e, t, n) {
        return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
      }
      var Ht = "listItemPrimaryButton",
        Kt = "listItemLabel",
        Ut = "listItemSecondaryButtonsContainer",
        Vt = "listItemSecondaryButton",
        Gt = {
          width: "calc(".concat(u.ux.rem(Dt.Ze), " - ").concat(u.ux.rem(Dt.yC), ")"),
          height: "calc(".concat(u.ux.rem(Dt.Ze), " - ").concat(u.ux.rem(Dt.F2), ")"),
          margin: "".concat(u.ux.rem(Dt.yC)),
          cursor: "pointer",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "none",
          backgroundColor: D.CoreNeutral10,
          borderRadius: u.ux.rem(Mt.xB),
          $nest: { "&:active, &:hover, &:focus-visible": { backgroundColor: D.CoreNeutral20, opacity: 1 } }
        },
        Wt = {
          listItemPrimaryButton: u.ux.joinClasses([
            Ht,
            u.ux.style({ cursor: "pointer", outline: "none", border: "none", background: "transparent", padding: 0 })
          ]),
          listItemLabel: u.ux.joinClasses([Kt, u.ux.style({ display: "inline-flex", textAlign: "left" })]),
          listItemSecondaryButtonsContainer: u.ux.joinClasses([
            Ut,
            u.ux.style({ display: "flex", alignItems: "center", opacity: 0, $nest: { "&:focus-within": { opacity: 1 } } })
          ]),
          listItemSecondaryButton: u.ux.joinClasses([Vt, u.ux.style(Gt)])
        },
        Zt = n(54678),
        qt = n(83078);
      function Jt(e, t, n) {
        return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
      }
      var Xt = { flexShrink: 0, alignItems: "center", justifyContent: "center", height: u.ux.rem(2), width: u.ux.rem(2) },
        Yt = { $nest: { "& i": { height: u.ux.rem(2), width: u.ux.rem(2) } } },
        Qt = u.ux.stylesheet({ button: [Xt], item: [Yt] }),
        en = n(85089),
        tn = n(60797),
        nn = n(73975),
        rn = n(85985),
        on = n(93508),
        ln = n(66310),
        an = n(80334),
        cn = n(76974),
        un = n(2844),
        sn = n(28043),
        dn = n(71249);
      function mn(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function fn(e, t, n) {
        return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
      }
      function pn(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n = null == e ? null : ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
            if (null != n) {
              var r,
                o,
                i = [],
                l = !0,
                a = !1;
              try {
                for (n = n.call(e); !(l = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); l = !0);
              } catch (e) {
                (a = !0), (o = e);
              } finally {
                try {
                  l || null == n.return || n.return();
                } finally {
                  if (a) throw o;
                }
              }
              return i;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return mn(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(n);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return mn(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      var bn = function (e, t) {
          var n = { root: e, rootMargin: "0px", threshold: [0, 1] };
          return en.n(t, n).pipe(
            rn.h(dn.Od),
            Pt.U(function (e) {
              return 1 !== e[0].intersectionRatio;
            }),
            on.O(t.offsetHeight > e.offsetHeight)
          );
        },
        gn = function (e, t) {
          return jt.h.combine(e, t, qt.vB(bn)).pipe(tn.oA, ln.w(y.yR), an.h(cn.of(!0)));
        },
        yn = nn.MW({ topOverflow: nn.vD, bottomOverflow: nn.vD });
      var vn = new z.z6(100);
      var hn = u.ux.stylesheet({
          "scroll-main": [
            {
              display: "flex",
              flexDirection: "column",
              borderTop: "1px solid transparent",
              borderBottom: "1px solid transparent",
              transitionProperty: "border-top-color, border-bottom-color",
              transitionDuration: ".2s",
              pointerEvents: "auto"
            }
          ],
          overflowBottom: [{ borderBottomColor: u.ux.important(D.CoreNeutral20) }],
          overflowTop: [{ borderTopColor: u.ux.important(D.CoreNeutral20) }]
        }),
        xn = n(95300),
        wn = n(24209),
        kn = n(17343),
        On = n(41398),
        Sn = n(2834);
      function En(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function Cn(e, t, n) {
        return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
      }
      function jn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            r.forEach(function (t) {
              Cn(e, t, n[t]);
            });
        }
        return e;
      }
      function Pn(e, t) {
        return (
          (t = null != t ? t : {}),
          Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var r = Object.getOwnPropertySymbols(e);
                  t &&
                    (r = r.filter(function (t) {
                      return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    n.push.apply(n, r);
                }
                return n;
              })(Object(t)).forEach(function (n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
          e
        );
      }
      function In(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n = null == e ? null : ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
            if (null != n) {
              var r,
                o,
                i = [],
                l = !0,
                a = !1;
              try {
                for (n = n.call(e); !(l = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); l = !0);
              } catch (e) {
                (a = !0), (o = e);
              } finally {
                try {
                  l || null == n.return || n.return();
                } finally {
                  if (a) throw o;
                }
              }
              return i;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return En(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(n);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return En(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      var An = "sliderOuterContainer",
        Nn = "sliderLabel",
        $n = "sliderContainer",
        Mn = "slider",
        Dn = "sliderDragging",
        zn = "sliderNotDragging",
        Ln = "sliderSliderDivisionPoint",
        Bn = "sliderDivisionPointHoverArea",
        Tn = "sliderInner",
        _n = "sliderInnerNotDragging",
        Rn = "sliderInnerDragging",
        Fn = "sliderInnerJiggle",
        Hn = "sliderKnob",
        Kn = "sliderKnobJiggle",
        Un = "sliderKnobNotDragging",
        Vn = "sliderKnobDragging",
        Gn = "sliderKnobEmoji",
        Wn = { fontWeight: 700, fontSize: u.ux.rem(0.875), lineHeight: u.ux.rem(1), width: u.ux.rem(8) },
        Zn = { height: u.ux.rem(2.625), display: "flex", flexDirection: "column", justifyContent: "center" },
        qn = {
          position: "relative",
          width: u.ux.percent(100),
          backgroundColor: D.CoreNeutral40,
          borderRadius: u.ux.rem(0.375),
          transition: "height 0.15s ease-in-out",
          $nest: Cn({ "&:hover": { height: u.ux.rem(0.5) } }, "&:hover .".concat(Ln), { visibility: "visible" })
        },
        Jn = { height: u.ux.rem(0.125) },
        Xn = { height: u.ux.rem(0.5), $nest: Cn({}, "& .".concat(Ln), { visibility: "visible" }) },
        Yn = {
          position: "absolute",
          height: u.ux.rem(0.25),
          backgroundColor: D.CoreNeutral0,
          top: u.ux.rem(0.125),
          bottom: u.ux.rem(0.125),
          borderRadius: u.ux.percent(100),
          visibility: "hidden"
        },
        Qn = {
          background: D.CoreNeutral90,
          opacity: 0,
          height: u.ux.rem(1.5),
          position: "absolute",
          borderRadius: u.ux.percent(100),
          cursor: "pointer",
          top: u.ux.rem(-0.5),
          zIndex: 1,
          $nest: { "&:hover": { opacity: 0.1 } }
        },
        er = {
          position: "relative",
          display: "flex",
          alignItems: "center",
          backgroundColor: D.CorePurple40,
          height: u.ux.percent(100),
          borderRadius: u.ux.rem(0.375)
        },
        tr = u.ux.keyframes({ from: { width: "100%" }, to: { width: "calc(100% - ".concat(u.ux.rem(1.5), ")") } }),
        nr = u.ux.keyframes({ from: { width: "calc(100% - ".concat(u.ux.rem(1.5), ")") }, to: { width: "100%" } }),
        rr = {
          animation: ""
            .concat(tr, " 0.8s cubic-bezier( 0.05, 0.46, 0.37, 0.92 ) 1s forwards,\n              ")
            .concat(nr, " 0.2s cubic-bezier( 0.05, 0.46, 0.37, 0.92 ) 2s forwards")
        },
        or = u.ux.keyframes({ from: { transform: "none" }, to: { transform: "translateX(".concat(u.ux.rem(-0.75), ")") } }),
        ir = u.ux.keyframes({ from: { transform: "translateX(".concat(u.ux.rem(-0.75), ")") }, to: { transform: "none" } }),
        lr = {
          animation: ""
            .concat(or, " 0.8s cubic-bezier( 0.05, 0.46, 0.37, 0.92 ) 1s forwards,\n              ")
            .concat(ir, " 0.2s cubic-bezier( 0.05, 0.46, 0.37, 0.92 ) 2s forwards")
        },
        ar = {
          position: "absolute",
          right: u.ux.rem(-0.875),
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: D.CoreNeutral0,
          borderRadius: u.ux.rem(1.875),
          cursor: "ew-resize",
          transitionProperty: "width, height",
          transitionDuration: "0.15s",
          transitionTimingFunction: "ease-in-out",
          zIndex: 1,
          $nest: {
            "&:hover": {
              width: u.ux.rem(2),
              height: u.ux.rem(2),
              boxShadow: "0px 0px 1.14286px rgba(109, 117, 141, 0.8), 0px 4px 12px rgba(109, 117, 141, 0.3)"
            }
          }
        },
        cr = {
          width: u.ux.rem(1.75),
          height: u.ux.rem(1.75),
          boxShadow: "0px 0px 1px rgba(109, 117, 141, 0.8), 0px 1px 8px rgba(109, 117, 141, 0.28)"
        },
        ur = {
          width: u.ux.rem(2),
          height: u.ux.rem(2),
          boxShadow: "0px 0px 1.14286px rgba(109, 117, 141, 0.8), 0px 4px 12px rgba(109, 117, 141, 0.3)"
        },
        sr = { width: u.ux.rem(0.9375), height: u.ux.rem(0.9375), pointerEvents: "none" },
        dr = {
          outerContainer: u.ux.joinClasses([An, u.ux.style({ display: "flex", alignItems: "center" })]),
          label: u.ux.joinClasses([Nn, u.ux.style(Wn)]),
          container: u.ux.joinClasses([$n, u.ux.style(Zn)]),
          slider: u.ux.joinClasses([Mn, u.ux.style(qn)]),
          sliderNotDragging: u.ux.joinClasses([zn, u.ux.style(Jn)]),
          sliderDragging: u.ux.joinClasses([Dn, u.ux.style(Xn)]),
          sliderDivisionPoint: u.ux.joinClasses([Ln, u.ux.style(Yn)]),
          sliderDivisionPointHoverArea: u.ux.joinClasses([Bn, u.ux.style(Qn)]),
          sliderInner: u.ux.joinClasses([Tn, u.ux.style(er)]),
          sliderInnerNotDragging: u.ux.joinClasses([_n, u.ux.style({ transition: "width 0.15s ease-in-out" })]),
          sliderInnerDragging: u.ux.joinClasses([Rn, u.ux.style({ transition: "none" })]),
          sliderInnerJiggle: u.ux.joinClasses([Fn, u.ux.style(rr)]),
          knob: u.ux.joinClasses([Hn, u.ux.style(ar)]),
          knobJiggle: u.ux.joinClasses([Kn, u.ux.style(lr)]),
          knobNotDragging: u.ux.joinClasses([Un, u.ux.style(cr)]),
          knobDragging: u.ux.joinClasses([Vn, u.ux.style(ur)]),
          knobEmoji: u.ux.joinClasses([Gn, u.ux.style(sr)])
        },
        mr = n(64757),
        fr = n(94632);
      function pr(e, t, n) {
        return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
      }
      function br(e, t) {
        return (
          (t = null != t ? t : {}),
          Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var r = Object.getOwnPropertySymbols(e);
                  t &&
                    (r = r.filter(function (t) {
                      return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    n.push.apply(n, r);
                }
                return n;
              })(Object(t)).forEach(function (n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
          e
        );
      }
      function gr(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
        }
        return o;
      }
      var yr = u.ux.stylesheet({ default: [{ overflow: "initial", userSelect: "initial", verticalAlign: "initial" }] }),
        vr = n(32881);
      function hr(e, t) {
        let n,
          {
            elementType: r = "button",
            isDisabled: o,
            onPress: i,
            onPressStart: l,
            onPressEnd: a,
            onPressChange: c,
            preventFocusOnPress: u,
            allowFocusWhenDisabled: s,
            onClick: d,
            href: m,
            target: f,
            rel: p,
            type: b = "button"
          } = e;
        n =
          "button" === r
            ? { type: b, disabled: o }
            : {
                role: "button",
                tabIndex: o ? void 0 : 0,
                href: "a" === r && o ? void 0 : m,
                target: "a" === r ? f : void 0,
                type: "input" === r ? b : void 0,
                disabled: "input" === r ? o : void 0,
                "aria-disabled": o && "input" !== r ? o : void 0,
                rel: "a" === r ? p : void 0
              };
        let { pressProps: g, isPressed: y } = (0, ot.r7)({
            onPressStart: l,
            onPressEnd: a,
            onPressChange: c,
            onPress: i,
            isDisabled: o,
            preventFocusOnPress: u,
            ref: t
          }),
          { focusableProps: v } = (0, dt.kc)(e, t);
        s && (v.tabIndex = o ? -1 : v.tabIndex);
        let h = (0, Qe.dG)(v, g, (0, Qe.zL)(e, { labelable: !0 }));
        return {
          isPressed: y,
          buttonProps: (0, Qe.dG)(n, h, {
            "aria-haspopup": e["aria-haspopup"],
            "aria-expanded": e["aria-expanded"],
            "aria-controls": e["aria-controls"],
            "aria-pressed": e["aria-pressed"],
            onClick: (e) => {
              d && (d(e), console.warn("onClick is deprecated, please use onPress"));
            }
          })
        };
      }
      function xr(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function wr(e, t, n) {
        return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
      }
      function kr(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            r.forEach(function (t) {
              wr(e, t, n[t]);
            });
        }
        return e;
      }
      function Or(e, t) {
        return (
          (t = null != t ? t : {}),
          Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var r = Object.getOwnPropertySymbols(e);
                  t &&
                    (r = r.filter(function (t) {
                      return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    n.push.apply(n, r);
                }
                return n;
              })(Object(t)).forEach(function (n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
          e
        );
      }
      function Sr(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n = null == e ? null : ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
            if (null != n) {
              var r,
                o,
                i = [],
                l = !0,
                a = !1;
              try {
                for (n = n.call(e); !(l = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); l = !0);
              } catch (e) {
                (a = !0), (o = e);
              } finally {
                try {
                  l || null == n.return || n.return();
                } finally {
                  if (a) throw o;
                }
              }
              return i;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return xr(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(n);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return xr(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      var Er = (0, d.n)(function (e) {
          var t = r.useRef(null),
            n = hr(
              {
                "aria-label": e.meta.label,
                "aria-labelledby": null == e.meta.label ? e.contentId : void 0,
                "aria-describedby": e["aria-describedby"],
                onPress: function (t) {
                  return e.onPress(t.target.getBoundingClientRect());
                },
                elementType: "div"
              },
              t
            ).buttonProps;
          return r.createElement("div", kr({ className: Cr.button }, n));
        }),
        Cr = u.ux.stylesheet({
          container: [{ position: "relative", minHeight: u.ux.rem(3.5), display: "grid" }],
          content: [{ display: "flex", alignItems: "center", $nest: { "& > div:first-of-type": { flexGrow: 1 } } }],
          button: [{ position: "absolute", left: 0, top: 0, width: "100%", height: "100%", background: "transparent", cursor: "pointer" }]
        }),
        jr = n(22232);
      function Pr(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function Ir(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n = null == e ? null : ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
            if (null != n) {
              var r,
                o,
                i = [],
                l = !0,
                a = !1;
              try {
                for (n = n.call(e); !(l = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); l = !0);
              } catch (e) {
                (a = !0), (o = e);
              } finally {
                try {
                  l || null == n.return || n.return();
                } finally {
                  if (a) throw o;
                }
              }
              return i;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return Pr(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(n);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Pr(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      var Ar = function (e) {
          return u.ux.rem(null != e ? e : 0.25);
        },
        Nr = function (e) {
          return u.ux.rem(1.25 * (null != e ? e : 0.25));
        },
        $r = function (e, t) {
          return u.ux.style({ height: "calc(".concat(Ar(t), " + ").concat(void 0 !== e ? Nr(t) : 0, ")") });
        },
        Mr = function (e, t, n) {
          return u.ux.style({
            height: Ar(n),
            backgroundColor: "".concat(D[e]),
            border: t ? "1px solid ".concat(D[t]) : "none",
            borderRadius: Ar(n)
          });
        },
        Dr = function (e, t, n) {
          return u.ux.style({ width: "".concat(e, "%"), height: Ar(n), backgroundColor: "".concat(D[t]) });
        },
        zr = function (e, t) {
          return u.ux.style({
            left: "calc("
              .concat(((n = e), (r = [2, 98]), (o = Ir(r, 2)), (i = o[0]), (l = o[1]), Math.min(l, Math.max(i, n))), "% - ")
              .concat(Ar(t), ")"),
            borderLeft: "".concat(Ar(t), " solid transparent"),
            borderRight: "".concat(Ar(t), " solid transparent"),
            borderTop: "".concat(Nr(t), " solid ").concat(D.CoreNeutral50)
          });
          var n, r, o, i, l;
        },
        Lr = u.ux.stylesheet({
          outerContainer: [{ position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-end" }],
          pinPoint: [{ position: "absolute", top: 0, width: 0, height: 0 }],
          background: [{ width: "100%", overflow: "hidden" }],
          fill: [{ position: "relative" }],
          loading: [
            {
              position: "absolute",
              width: "100%",
              backgroundImage:
                "linear-gradient(-45deg, rgba(255, 255, 255, .2) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .2) 50%, rgba(255, 255, 255, .2) 75%, transparent 75%, transparent)",
              backgroundSize: "20px 20px"
            }
          ]
        }),
        Br = n(17771),
        Tr = n(17889);
      function _r(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function Rr(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n = null == e ? null : ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
            if (null != n) {
              var r,
                o,
                i = [],
                l = !0,
                a = !1;
              try {
                for (n = n.call(e); !(l = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); l = !0);
              } catch (e) {
                (a = !0), (o = e);
              } finally {
                try {
                  l || null == n.return || n.return();
                } finally {
                  if (a) throw o;
                }
              }
              return i;
            }
          })(e, t) ||
          Hr(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function Fr(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return _r(e);
          })(e) ||
          (function (e) {
            if (("undefined" != typeof Symbol && null != e[Symbol.iterator]) || null != e["@@iterator"]) return Array.from(e);
          })(e) ||
          Hr(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function Hr(e, t) {
        if (e) {
          if ("string" == typeof e) return _r(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(n)
              : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? _r(e, t)
              : void 0
          );
        }
      }
      function Kr(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        return (0, y.zG)(
          e.parentElement,
          v.fromNullable,
          v.chain(function (e) {
            return Kr(e, Fr(t).concat([e]));
          }),
          v.alt(function () {
            return Tr.nI(t);
          })
        );
      }
      var Ur = function (e, t) {
          return {
            $nest: {
              "@media (prefers-reduced-motion: no-preference)": { animation: "".concat(e, " ").concat(u.ux.seconds(0.3), " ").concat(t) }
            }
          };
        },
        Vr = u.ux.keyframes({ from: { opacity: 0, visibility: "hidden" }, to: { opacity: 1, visibility: "visible" } }),
        Gr = u.ux.keyframes({ from: { opacity: 1, visibility: "visible" }, to: { opacity: 0, visibility: "hidden" } });
      function Wr(e) {
        return e.replace(/[A-Z]/g, function (e) {
          return "-".concat(e.toLowerCase());
        });
      }
      var Zr,
        qr,
        Jr,
        Xr,
        Yr,
        Qr,
        eo,
        to = u.ux.stylesheet({ default: [{ height: "1px", backgroundColor: D[b.Il.CoreNeutral20], border: "none", flex: 1 }] }),
        no = n(32096),
        ro = n(80900),
        oo = n(598),
        io = n(62172),
        lo = n(48168);
      function ao(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function co(e, t, n) {
        return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
      }
      function uo(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n = null == e ? null : ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
            if (null != n) {
              var r,
                o,
                i = [],
                l = !0,
                a = !1;
              try {
                for (n = n.call(e); !(l = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); l = !0);
              } catch (e) {
                (a = !0), (o = e);
              } finally {
                try {
                  l || null == n.return || n.return();
                } finally {
                  if (a) throw o;
                }
              }
              return i;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return ao(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(n);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ao(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      (qr = Zr || (Zr = {})),
        (Jr = qr.pointerWidth = Math.sqrt(200)),
        (qr.slightMargin = 17.5),
        (Xr = {
          position: "absolute",
          zIndex: no.$n,
          width: 220,
          backgroundColor: io.NeutralGray90,
          borderRadius: u.ux.rem(no.Jr),
          $nest: { "& button i path": { fill: D.CoreNeutral30, stroke: D.CoreNeutral30 } }
        }),
        (Yr = { position: "absolute", top: u.ux.rem(0.75), right: u.ux.rem(0.75), color: io.NeutralGray30, textDecoration: "none" }),
        (Qr = {
          display: "block",
          position: "absolute",
          width: 0,
          height: 0,
          borderTop: "".concat(Zr.pointerWidth, "px solid transparent"),
          borderBottom: "".concat(Zr.pointerWidth, "px solid transparent"),
          borderLeft: "".concat(Zr.pointerWidth, "px solid transparent"),
          borderRight: "".concat(Zr.pointerWidth, "px solid transparent")
        }),
        (eo = qr.stylesheet =
          u.ux.stylesheet({ wrapper: [{ position: "relative" }], popover: [Xr], closeButton: [Yr], anchorPointer: [Qr] })),
        (qr.modifiers = u.ux.stylesheet({
          preCheck: [{ $nest: co({}, "&.".concat(eo.anchorPointer), { visibility: "hidden", position: "fixed", top: -1e3, left: -1e3 }) }],
          top: [
            {
              $nest: co({}, "&.".concat(eo.anchorPointer), {
                borderTopColor: io.NeutralGray90,
                top: -Jr,
                left: "calc(50% - ".concat(Jr, "px)")
              })
            }
          ],
          bottom: [
            {
              $nest: co({}, "&.".concat(eo.anchorPointer), {
                borderBottomColor: io.NeutralGray90,
                bottom: -Jr,
                left: "calc(50% - ".concat(Jr, "px)")
              })
            }
          ],
          left: [
            {
              $nest: co({}, "&.".concat(eo.anchorPointer), {
                borderLeftColor: io.NeutralGray90,
                left: -Jr,
                top: "calc(50% - ".concat(Jr, "px)")
              })
            }
          ],
          right: [
            {
              $nest: co({}, "&.".concat(eo.anchorPointer), {
                borderRightColor: io.NeutralGray90,
                right: -Jr,
                top: "calc(50% - ".concat(Jr, "px)")
              })
            }
          ]
        }));
      var so = function (e, t) {
          return e.left >= t.left && e.top >= t.top && e.left + e.width < t.left + t.width && e.top + e.height < t.top + t.height;
        },
        mo = function (e, t, n, r) {
          switch (e) {
            case b.Ly.Left:
              return v.some(n.left - t.width - Zr.pointerWidth / 2);
            case b.Ly.Right:
              return v.some(n.right + Zr.pointerWidth / 2);
            case b.Ly.Top:
            case b.Ly.Bottom:
              var o = -t.width / 2,
                i = -t.width + Zr.pointerWidth / 2 + Zr.slightMargin,
                l = -Zr.slightMargin;
              return (0, y.zG)(
                fo(e, t, n, r),
                v.chain(function (e) {
                  return v.fromNullable(
                    [o, i, l].find(function (o) {
                      return so({ top: e, left: n.left + n.width / 2 + o, width: t.width, height: t.height }, r);
                    })
                  );
                })
              );
            default:
              (0, jr.vE)(e);
          }
        },
        fo = function (e, t, n, r) {
          switch (e) {
            case b.Ly.Top:
              return v.some(n.top - t.height - Zr.pointerWidth / 2);
            case b.Ly.Bottom:
              return v.some(n.bottom + Zr.pointerWidth / 2);
            case b.Ly.Left:
            case b.Ly.Right:
              var o = -t.height / 2,
                i = -t.height + Zr.pointerWidth + Zr.slightMargin,
                l = -Zr.slightMargin;
              return (0, y.zG)(
                mo(e, t, n, r),
                v.chain(function (e) {
                  return v.fromNullable(
                    [o, i, l].find(function (o) {
                      return so({ top: n.top + n.height / 2 + o, left: e, width: t.width, height: t.height }, r);
                    })
                  );
                })
              );
            default:
              (0, jr.vE)(e);
          }
        },
        po = function (e, t, n, r) {
          var o = "".concat(Zr.pointerWidth / 2, "px");
          switch (e) {
            case b.Ly.Top:
              return (0, y.zG)(
                mo(e, t, n, r),
                v.map(function (e) {
                  return { left: e, bottom: o };
                })
              );
            case b.Ly.Bottom:
              return (0, y.zG)(
                mo(e, t, n, r),
                v.map(function (e) {
                  return { left: e, top: o };
                })
              );
            case b.Ly.Left:
              return (0, y.zG)(
                fo(e, t, n, r),
                v.map(function (e) {
                  return { top: e, right: o };
                })
              );
            case b.Ly.Right:
              return (0, y.zG)(
                fo(e, t, n, r),
                v.map(function (e) {
                  return { top: e, left: o };
                })
              );
            default:
              (0, jr.vE)(e);
          }
        },
        bo = n(31180),
        go = n(28511);
      function yo(e) {
        let { state: t, triggerRef: n, label: o, name: i, isDisabled: l } = e,
          a = (0, r.useRef)(null),
          {
            containerProps: c,
            inputProps: u,
            selectProps: s
          } = (function (e, t, n) {
            let { autoComplete: r, name: o, isDisabled: i } = e,
              l = (0, ot.Kf)(),
              { visuallyHiddenProps: a } = (0, k.S)();
            var c;
            return (
              (0, Qe.y$)(e.selectRef, t.selectedKey, t.setSelectedKey),
              {
                containerProps: Object.assign(Object.assign({}, a), { "aria-hidden": !0, "data-a11y-ignore": "aria-hidden-focus" }),
                inputProps: {
                  type: "text",
                  tabIndex: null == l || t.isFocused || t.isOpen ? -1 : 0,
                  style: { fontSize: 16 },
                  onFocus: () => n.current.focus(),
                  disabled: i
                },
                selectProps: {
                  tabIndex: -1,
                  autoComplete: r,
                  disabled: i,
                  name: o,
                  size: t.collection.size,
                  value: null !== (c = t.selectedKey) && void 0 !== c ? c : "",
                  onChange: (e) => t.setSelectedKey(e.target.value)
                }
              }
            );
          })(Object.assign(Object.assign({}, e), { selectRef: a }), t, n);
        var d;
        return t.collection.size <= 300
          ? r.createElement(
              "div",
              Object.assign(Object.assign({}, c), { "data-testid": "hidden-select-container" }),
              r.createElement("input", u),
              r.createElement(
                "label",
                null,
                o,
                r.createElement(
                  "select",
                  Object.assign(Object.assign({}, s), { ref: a }),
                  r.createElement("option", null),
                  [...t.collection.getKeys()].map((e) => {
                    let n = t.collection.getItem(e);
                    if ("item" === n.type) return r.createElement("option", { key: n.key, value: n.key }, n.textValue);
                  })
                )
              )
            )
          : i
          ? r.createElement("input", {
              type: "hidden",
              autoComplete: s.autoComplete,
              name: i,
              disabled: l,
              value: null !== (d = t.selectedKey) && void 0 !== d ? d : ""
            })
          : null;
      }
      var vo = n(58675);
      function ho(e) {
        let t = (0, vo.W)(e),
          n = Ot({
            ...e,
            onSelectionChange: (n) => {
              null != e.onSelectionChange && e.onSelectionChange(n), t.close();
            }
          }),
          [o, i] = (0, r.useState)(!1);
        return {
          ...n,
          ...t,
          open() {
            0 !== n.collection.size && t.open();
          },
          toggle(e) {
            0 !== n.collection.size && t.toggle(e);
          },
          isFocused: o,
          setFocused: i
        };
      }
      const xo = ({ title: e, titleId: t, desc: n, descId: o, ...i }) =>
        r.createElement(
          "svg",
          {
            width: 16,
            height: 16,
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            "aria-hidden": "true",
            stroke: "transparent",
            "aria-labelledby": t,
            "aria-describedby": o,
            ...i
          },
          n ? r.createElement("desc", { id: o }, n) : null,
          e ? r.createElement("title", { id: t }, e) : null,
          r.createElement("path", {
            d: "M2.5 11.474v1.276c0 .69.56 1.25 1.25 1.25h8.5c.69 0 1.25-.56 1.25-1.25v-1.276M5.25 8 8 10.842m0 0L10.75 8M8 10.842V2",
            stroke: "#646B81",
            strokeLinecap: "round"
          })
        );
      xo.__brand = "color";
      var wo = n(98403),
        ko = n(20096);
      const Oo = new WeakMap();
      function So(e, t) {
        let n = Oo.get(e);
        if (!n) throw new Error("Unknown list");
        return `${n.id}-option-${((r = t), "string" == typeof r ? r.replace(/\s*/g, "") : "" + r)}`;
        var r;
      }
      var Eo,
        Co = n(1509),
        jo = function (e) {
          var t = e.state,
            n = e.theme,
            o = void 0 === n ? {} : n,
            i = (0, Ye._)(e, ["state", "theme"]),
            l = r.useRef(null),
            a = (function (e, t, n) {
              let r = (0, Qe.zL)(e, { labelable: !0 }),
                o = e.selectionBehavior || "toggle",
                i = e.linkBehavior || ("replace" === o ? "action" : "override");
              "toggle" === o && "action" === i && (i = "override");
              let { listProps: l } = (0, mt._t)(
                  Object.assign(Object.assign({}, e), {
                    ref: n,
                    selectionManager: t.selectionManager,
                    collection: t.collection,
                    disabledKeys: t.disabledKeys,
                    linkBehavior: i
                  })
                ),
                { focusWithinProps: a } = (0, ot.L_)({
                  onFocusWithin: e.onFocus,
                  onBlurWithin: e.onBlur,
                  onFocusWithinChange: e.onFocusChange
                }),
                c = (0, Qe.Me)(e.id);
              Oo.set(t, {
                id: c,
                shouldUseVirtualFocus: e.shouldUseVirtualFocus,
                shouldSelectOnPressUp: e.shouldSelectOnPressUp,
                shouldFocusOnHover: e.shouldFocusOnHover,
                isVirtualized: e.isVirtualized,
                onAction: e.onAction,
                linkBehavior: i
              });
              let { labelProps: u, fieldProps: s } = (0, bo.N)(Object.assign(Object.assign({}, e), { id: c, labelElementType: "span" }));
              return {
                labelProps: u,
                listBoxProps: (0, Qe.dG)(
                  r,
                  a,
                  "multiple" === t.selectionManager.selectionMode ? { "aria-multiselectable": "true" } : {},
                  Object.assign({ role: "listbox" }, (0, Qe.dG)(s, l))
                )
              };
            })(i, t, l).listBoxProps;
          return r.createElement(
            "ul",
            (0, Xe._)((0, Je._)({}, a), { ref: l, className: o.listbox }),
            (0, ko._)(Array.from(t.collection)).map(function (e) {
              return r.createElement(Po, { key: e.key, item: e, state: t, theme: o.option });
            })
          );
        },
        Po = function (e) {
          var t = e.item,
            n = e.state,
            o = e.theme,
            i = void 0 === o ? {} : o,
            l = r.useRef(null),
            a = (function (e, t, n) {
              var r;
              let { key: o } = e,
                i = Oo.get(t);
              var l;
              let a = null !== (l = e.isDisabled) && void 0 !== l ? l : t.disabledKeys.has(o);
              var c;
              let u = null !== (c = e.isSelected) && void 0 !== c ? c : t.selectionManager.isSelected(o);
              var s;
              let d = null !== (s = e.shouldSelectOnPressUp) && void 0 !== s ? s : null == i ? void 0 : i.shouldSelectOnPressUp;
              var m;
              let f = null !== (m = e.shouldFocusOnHover) && void 0 !== m ? m : null == i ? void 0 : i.shouldFocusOnHover;
              var p;
              let b = null !== (p = e.shouldUseVirtualFocus) && void 0 !== p ? p : null == i ? void 0 : i.shouldUseVirtualFocus;
              var g;
              let y = null !== (g = e.isVirtualized) && void 0 !== g ? g : null == i ? void 0 : i.isVirtualized,
                v = (0, Qe.mp)(),
                h = (0, Qe.mp)(),
                x = {
                  role: "option",
                  "aria-disabled": a || void 0,
                  "aria-selected": "none" !== t.selectionManager.selectionMode ? u : void 0
                };
              ((0, Qe.V5)() && (0, Qe.Pf)()) ||
                ((x["aria-label"] = e["aria-label"]), (x["aria-labelledby"] = v), (x["aria-describedby"] = h));
              let w = t.collection.getItem(o);
              if (y) {
                let e = Number(null == w ? void 0 : w.index);
                (x["aria-posinset"] = Number.isNaN(e) ? void 0 : e + 1), (x["aria-setsize"] = (0, ht.is)(t.collection));
              }
              let {
                  itemProps: k,
                  isPressed: O,
                  isFocused: S,
                  hasAction: E,
                  allowsSelection: C
                } = (0, mt.Cs)({
                  selectionManager: t.selectionManager,
                  key: o,
                  ref: n,
                  shouldSelectOnPressUp: d,
                  allowsDifferentPressOrigin: d && f,
                  isVirtualized: y,
                  shouldUseVirtualFocus: b,
                  isDisabled: a,
                  onAction: (null == i ? void 0 : i.onAction)
                    ? () => {
                        var e;
                        return null == i || null === (e = i.onAction) || void 0 === e ? void 0 : e.call(i, o);
                      }
                    : void 0,
                  linkBehavior: null == i ? void 0 : i.linkBehavior
                }),
                { hoverProps: j } = (0, ot.XI)({
                  isDisabled: a || !f,
                  onHoverStart() {
                    (0, ot.E)() || (t.selectionManager.setFocused(!0), t.selectionManager.setFocusedKey(o));
                  }
                }),
                P = (0, Qe.zL)(null == w ? void 0 : w.props, {
                  isLink: !!(null == w || null === (r = w.props) || void 0 === r ? void 0 : r.href)
                });
              return (
                delete P.id,
                {
                  optionProps: Object.assign(Object.assign(Object.assign({}, x), (0, Qe.dG)(P, k, j)), { id: So(t, o) }),
                  labelProps: { id: v },
                  descriptionProps: { id: h },
                  isFocused: S,
                  isFocusVisible: S && (0, ot.E)(),
                  isSelected: u,
                  isDisabled: a,
                  isPressed: O,
                  allowsSelection: C,
                  hasAction: E
                }
              );
            })({ key: t.key }, n, l),
            c = a.optionProps,
            u = a.isDisabled;
          return r.createElement(
            Co.Z,
            (0, Je._)(
              (0, Xe._)((0, Je._)({ nodeType: "li", styleType: Co.Z.Type.Base }, c), { "aria-label": t["aria-label"], mount: l }),
              (0, Ct.Sh)("string" == typeof t.rendered ? i.text : i.composite, u ? Io.optionDisabled : void 0, Io.option)
            ),
            t.rendered
          );
        },
        Io = u.ux.stylesheet({ option: [{ cursor: "pointer" }], optionDisabled: [{ cursor: "not-allowed", opacity: 0.4 }] }),
        Ao = n(72419),
        No = n(13578),
        $o = { display: "flex", flexDirection: "column", position: "relative", gap: u.ux.rem(Dt.F2) },
        Mo = {
          appearance: "none",
          position: "relative",
          cursor: "pointer",
          display: "flex",
          boxSizing: "border-box",
          flexDirection: "row",
          alignItems: "center",
          padding: "".concat(u.ux.rem(Dt.F2), " ").concat(u.ux.rem(Dt.Ze), " ").concat(u.ux.rem(Dt.F2), " ").concat(u.ux.rem(Dt.qp)),
          gap: u.ux.rem(Dt.qp),
          minWidth: "max-content",
          width: u.ux.percent(100),
          height: u.ux.rem(2),
          background: No.XY.Surface.Primary.Default,
          border: "1px solid ".concat(No.vU.InteractiveNeutral.Primary.Default),
          borderRadius: u.ux.rem(Mt.xB),
          lineHeight: u.ux.rem(1.375),
          color: No.XY.Content.Primary.Default,
          $nest: {
            "&:active": { borderColor: No.vU.InteractiveBranded.Primary.Default },
            "&[disabled]": { opacity: 0.4, cursor: "not-allowed" },
            "&:focus, &:focus-visible": {
              boxShadow: "0 0 0 1px "
                .concat(No.XY.Surface.Primary.Default, ", 0 0 0 3px ")
                .concat(No.vU.InteractiveBranded.Primary.Default),
              outline: u.ux.important("none"),
              zIndex: no.VN
            }
          }
        },
        Do = { borderColor: No.vU.InteractiveBranded.Primary.Default },
        zo = {
          borderColor: No.vU.DangerAndDeletion.Primary.Default,
          $nest: {
            "&:focus, &:focus-visible": {
              boxShadow: "0 0 0 1px ".concat(No.XY.Surface.Primary.Default, ", 0 0 0 3px ").concat(No.vU.DangerAndDeletion.Primary.Default),
              outline: u.ux.important("none"),
              zIndex: no.VN
            }
          }
        },
        Lo = {
          position: "absolute",
          right: u.ux.rem(Dt.F2),
          top: u.ux.rem(Dt.F2),
          $nest: { "$ path": { fill: No.vU.InteractiveNeutral.Primary.Default } }
        },
        Bo = { color: No.vU.DangerAndDeletion.Primary.Default },
        To = {
          display: "flex",
          flexDirection: "column",
          gap: u.ux.rem(Dt.F2),
          margin: 0,
          listStyle: "none",
          overflow: "auto",
          outline: u.ux.important("none"),
          width: u.ux.percent(100),
          padding: "".concat(u.ux.rem(Dt.F2), " 0")
        },
        _o = { padding: u.ux.rem(Dt.x), gap: u.ux.rem(Dt.x) },
        Ro = {
          padding: "".concat(u.ux.rem(Dt.F2), " ").concat(u.ux.rem(Dt.qp)),
          $nest: {
            '&[aria-selected="true"], &[aria-selected="true"]:hover, &[aria-selected="true"]:focus-visible': {
              background: No.vU.InteractiveBranded.Primary.Default,
              color: No.S5.Content.Primary.Default,
              outline: u.ux.important("none")
            },
            '&[aria-selected="false"]:focus, &[aria-selected="false"]:focus-visible, &[aria-selected="false"]:hover': {
              background: No.XY.Surface.Secondary.Default,
              outline: u.ux.important("none")
            }
          }
        },
        Fo = {
          borderRadius: u.ux.rem(Mt.xB),
          $nest: {
            '&[aria-selected="true"], &:focus, &:focus-visible': {
              boxShadow: "0 0 0 1px "
                .concat(No.XY.Surface.Primary.Default, ", 0 0 0 3px ")
                .concat(No.vU.InteractiveBranded.Primary.Default),
              outline: u.ux.important("none"),
              zIndex: no.VN
            }
          }
        },
        Ho = { zIndex: no.VN },
        Ko = u.ux.stylesheet({
          selectWrapper: [$o],
          select: [Mo],
          selectGhost: [Mo, { border: "none", padding: 0, height: "max-content" }],
          activeSelect: [Mo, Do],
          errorSelect: [Mo, zo],
          caret: [Lo],
          error: [Bo],
          listbox: [To],
          listboxPadded: [To, _o],
          textOption: [Ro],
          compositeOption: [Fo],
          nativeCaret: [Lo, Ho],
          nativeSelectWrapper: [{ position: "relative" }]
        });
      !(function (e) {
        var t = function (e) {
          var t,
            o,
            i = e.placement,
            l = e.placeholder,
            a = e.theme,
            c = void 0 === a ? {} : a,
            u = e.type,
            s = void 0 === u ? "select" : u,
            d = e.error,
            m = (0, Ye._)(e, ["placement", "placeholder", "theme", "type", "error"]),
            f = ho(m),
            p = r.useRef(null),
            b = (function (e, t, n) {
              let { keyboardDelegate: o, isDisabled: i } = e,
                l = (0, et.Xe)({ usage: "search", sensitivity: "base" }),
                a = (0, r.useMemo)(() => o || new (0, mt.dp)(t.collection, t.disabledKeys, null, l), [o, t.collection, t.disabledKeys, l]),
                { menuTriggerProps: c, menuProps: u } = (0, go.u4)({ isDisabled: i, type: "listbox" }, t, n),
                { typeSelectProps: s } = (0, mt.ip)({
                  keyboardDelegate: a,
                  selectionManager: t.selectionManager,
                  onTypeSelect(e) {
                    t.setSelectedKey(e);
                  }
                }),
                {
                  labelProps: d,
                  fieldProps: m,
                  descriptionProps: f,
                  errorMessageProps: p
                } = (0, bo.U)(Object.assign(Object.assign({}, e), { labelElementType: "span" }));
              (s.onKeyDown = s.onKeyDownCapture), delete s.onKeyDownCapture;
              let b = (0, Qe.zL)(e, { labelable: !0 }),
                g = (0, Qe.dG)(s, c, m),
                y = (0, Qe.Me)();
              return {
                labelProps: Object.assign(Object.assign({}, d), {
                  onClick: () => {
                    e.isDisabled || (n.current.focus(), (0, ot._w)("keyboard"));
                  }
                }),
                triggerProps: (0, Qe.dG)(
                  b,
                  Object.assign(Object.assign({}, g), {
                    isDisabled: i,
                    onKeyDown: (0, Qe.tS)(
                      g.onKeyDown,
                      (e) => {
                        switch (e.key) {
                          case "ArrowLeft": {
                            e.preventDefault();
                            let n = null != t.selectedKey ? a.getKeyAbove(t.selectedKey) : a.getFirstKey();
                            n && t.setSelectedKey(n);
                            break;
                          }
                          case "ArrowRight": {
                            e.preventDefault();
                            let n = null != t.selectedKey ? a.getKeyBelow(t.selectedKey) : a.getFirstKey();
                            n && t.setSelectedKey(n);
                            break;
                          }
                        }
                      },
                      e.onKeyDown
                    ),
                    onKeyUp: e.onKeyUp,
                    "aria-labelledby": [y, g["aria-labelledby"], g["aria-label"] && !g["aria-labelledby"] ? g.id : null]
                      .filter(Boolean)
                      .join(" "),
                    onFocus(n) {
                      t.isFocused || (e.onFocus && e.onFocus(n), e.onFocusChange && e.onFocusChange(!0), t.setFocused(!0));
                    },
                    onBlur(n) {
                      t.isOpen || (e.onBlur && e.onBlur(n), e.onFocusChange && e.onFocusChange(!1), t.setFocused(!1));
                    }
                  })
                ),
                valueProps: { id: y },
                menuProps: Object.assign(Object.assign({}, u), {
                  autoFocus: t.focusStrategy || !0,
                  shouldSelectOnPressUp: !0,
                  shouldFocusOnHover: !0,
                  disallowEmptySelection: !0,
                  linkBehavior: "selection",
                  onBlur: (n) => {
                    n.currentTarget.contains(n.relatedTarget) ||
                      (e.onBlur && e.onBlur(n), e.onFocusChange && e.onFocusChange(!1), t.setFocused(!1));
                  },
                  "aria-labelledby": [m["aria-labelledby"], g["aria-label"] && !m["aria-labelledby"] ? g.id : null]
                    .filter(Boolean)
                    .join(" ")
                }),
                descriptionProps: f,
                errorMessageProps: p
              };
            })(m, f, p),
            g = b.labelProps,
            y = b.triggerProps,
            v = b.valueProps,
            h = b.menuProps,
            x = hr(y, p).buttonProps,
            w = (0, Qe.dG)(x, y),
            k = (w.onPress, w.onPressStart, w.isDisabled),
            O = (0, Ye._)(w, ["onPress", "onPressStart", "isDisabled"]),
            S = "".concat(x.id, "-error");
          return r.createElement(
            "div",
            (0, Xe._)((0, Je._)({}, (0, Ct.Sh)(Ko.selectWrapper, c.wrapper)), { "data-name": m.name }),
            Boolean(m.label) && r.createElement(Co.Z, (0, Je._)({ styleType: Co.Z.Type.Base, nodeType: "label" }, g), m.label),
            r.createElement(yo, { state: f, triggerRef: p, label: m.label, name: m.name }),
            r.createElement(
              "button",
              (0, Xe._)(
                (0, Je._)(
                  {},
                  (0, Ct.Sh)(
                    "select" === s ? (Boolean(d) ? Ko.errorSelect : f.isOpen ? Ko.activeSelect : Ko.select) : Ko.selectGhost,
                    c.button
                  ),
                  O
                ),
                { disabled: k, "aria-describedby": Boolean(d) ? S : void 0, ref: p }
              ),
              r.createElement(
                Co.Z,
                (0, Je._)({ styleType: Co.Z.Type.Base, nodeType: "div" }, v),
                null != f.selectedItem ? f.selectedItem.rendered : l
              ),
              "select" === s && r.createElement(xo, { className: Ko.caret })
            ),
            r.createElement(n, { id: S }, d),
            f.isOpen &&
              r.createElement(
                Ao.J,
                { state: f, triggerRef: p, placement: i, className: c.popover },
                r.createElement(
                  jo,
                  (0, Xe._)((0, Je._)({}, h), {
                    state: f,
                    theme: {
                      listbox: null !== (t = c.listbox) && void 0 !== t ? t : "select" === s ? Ko.listbox : Ko.listboxPadded,
                      option: null !== (o = c.option) && void 0 !== o ? o : { text: Ko.textOption, composite: Ko.compositeOption }
                    }
                  })
                )
              )
          );
        };
        e.Item = ht.ck;
        (e.LiftedComponent = function (e) {
          return (0, Ct.xb)(t)(e);
        }),
          (e.Component = t);
        e.NativeComponent = function (e) {
          var t = e.label,
            o = e.children,
            i = e.error,
            l = (0, Ye._)(e, ["label", "children", "error"]),
            a = "".concat(l.id, "-error"),
            c = wo.Dx(i);
          return r.createElement(
            P.F.div,
            { className: Ko.selectWrapper },
            r.createElement(Co.Z, { nodeType: "label", styleType: Co.Z.Type.Base, htmlFor: l.id }, t),
            r.createElement(
              "div",
              { className: Ko.nativeSelectWrapper },
              r.createElement(xo, { className: Ko.nativeCaret }),
              r.createElement(
                Co.Z,
                (0, Xe._)((0, Je._)({ nodeType: "select", styleType: Co.Z.Type.Base }, l), {
                  "aria-invalid": Boolean(i),
                  "aria-errormessage": Boolean(i) ? a : void 0,
                  className: Boolean(i) ? Ko.errorSelect : Ko.select
                }),
                o
              )
            ),
            c.pipe(
              Pt.U(function (e) {
                return r.createElement(n, { id: a }, e);
              })
            )
          );
        };
        var n = function (e) {
          var t = e.id,
            n = e.children;
          return Boolean(n)
            ? r.createElement(
                Co.Z,
                { styleType: Co.Z.Type.Small, nodeType: "div", id: t, className: Ko.error, "aria-live": "assertive" },
                n
              )
            : null;
        };
      })(Eo || (Eo = {}));
      var Uo = { flexShrink: 0, alignItems: "center", justifyContent: "center", height: u.ux.rem(2), width: u.ux.rem(2) },
        Vo = { $nest: { "& i": { height: u.ux.rem(2), width: u.ux.rem(2) } } },
        Go = u.ux.stylesheet({ button: [Uo], item: [Vo] }),
        Wo = function (e) {
          var t = e.type;
          return r.createElement("div", null, t, " not implemented");
        },
        Zo = {
          animation: function (e) {
            var t = r.useRef(null),
              n = (function (e, t) {
                switch (e) {
                  case "behavior:animation:fadeIn":
                    return { className: u.ux.style(Ur(Vr, Wr(t))), direction: "in" };
                  case "behavior:animation:fadeOut":
                    return { className: u.ux.style(Ur(Gr, Wr(t))), direction: "out" };
                  default:
                    (0, jr.vE)(e);
                }
              })(e.type, e.timeCurve),
              o = Rr(r.useState("in" === n.direction ? n.className : void 0), 2),
              i = o[0],
              l = o[1];
            return (
              r.useEffect(
                function () {
                  return function () {
                    var e, r, o;
                    (e = t.current),
                      (null !== (o = null === (r = e.shadowRoot) || void 0 === r ? void 0 : r.ownerDocument.defaultView) && void 0 !== o
                        ? o
                        : self
                      ).matchMedia("(prefers-reduced-motion: reduce)").matches ||
                        (function (e, t) {
                          (0, y.zG)(
                            (0, y.bc)(
                              (0, y.zG)(
                                t,
                                v.fromPredicate(function (e) {
                                  return "out" === e.direction;
                                })
                              ),
                              Kr(e)
                            ),
                            (0, y.og)(Br.g(v.option)),
                            qt.bw(function (t) {
                              var n,
                                r,
                                o = Rr(t, 2),
                                i = o[0],
                                l = o[1],
                                a =
                                  null !== (r = null === (n = e.shadowRoot) || void 0 === n ? void 0 : n.ownerDocument) && void 0 !== r
                                    ? r
                                    : document,
                                c = e.getBoundingClientRect(),
                                u = e.cloneNode(!0);
                              u.classList.add(i.className),
                                (u.style.position = "absolute"),
                                (u.style.top = "".concat(c.top, "px")),
                                (u.style.left = "".concat(c.left, "px")),
                                (u.style.width = "".concat(c.width, "px")),
                                (u.style.height = "".concat(c.height, "px")),
                                requestAnimationFrame(function () {
                                  (0, y.zG)(
                                    l.find(function (e) {
                                      return a.contains(e);
                                    }),
                                    v.fromNullable,
                                    qt.bw(function (e) {
                                      u.addEventListener("animationend", function () {
                                        a.contains(u) && u.remove();
                                      }),
                                        e.appendChild(u);
                                    })
                                  );
                                });
                            })
                          );
                        })(t.current, n);
                  };
                },
                [n]
              ),
              r.createElement(
                "div",
                {
                  "data-name": "behavior-animation-wrapper",
                  "data-animation": e.type,
                  ref: t,
                  className: i,
                  onAnimationEnd: function () {
                    return l(void 0);
                  }
                },
                e.children
              )
            );
          },
          button: (0, M.ND)(),
          alternativeChoice: function (e) {
            var t = e.id,
              n = e.designSystem,
              o = e.content,
              i = e.activeIndex,
              l = e.notify,
              a = e.meta,
              c = x.C8.Logging.getLogger("AlternativeChoiceView");
            return r.createElement("div", {
              role: "group",
              "aria-label": a.label,
              "aria-describedby": "".concat(t, "-description"),
              children: [
                r.createElement(n.column, {
                  children: [
                    (0, y.zG)(
                      v.fromNullable(o[i]),
                      h.fromOption(function () {
                        return "Cannot render alternative choice preview if there's no choice that matches the current alternative index.";
                      }),
                      h.map(function (e) {
                        return e.preview;
                      }),
                      h.filterOrElse(w.gO.isBlock, function () {
                        return "Cannot render alternative choice preview if it's not of type `block.`";
                      }),
                      h.filterOrElse(w.gO.hasOnlyTextParts, function () {
                        return "Cannot render alternative choice preview `block` if not every part is of type `text.`";
                      }),
                      h.map(function (e) {
                        return e.parts.length > 0
                          ? r.createElement(
                              n.block,
                              E(S({}, e), {
                                children: e.parts.map(function (e, t) {
                                  return r.createElement(n.text, S({ key: t }, e));
                                }),
                                spacing: { top: b.T.D0, right: b.T.D0, bottom: b.T.D1, left: b.T.D0 },
                                key: "preview"
                              })
                            )
                          : null;
                      }),
                      h.getOrElse(function (e) {
                        return c.warn(e), null;
                      })
                    ),
                    r.createElement(n.block, {
                      innerSpacing: { horizontal: b.T.D05, vertical: b.T.D05 },
                      verticalAlign: b.g$.Top,
                      children: o.map(function (e, t) {
                        return "button" === e.label.type && "block" === e.label.label.type
                          ? r.createElement(n.button.toggle, {
                              key: t,
                              id: e.label.id,
                              text: n.block(
                                E(S({}, e.label.label), {
                                  children: e.label.label.parts.map(function (e, t) {
                                    return "text" === e.type
                                      ? e.text
                                      : "icon" === e.type && "known" === e.source.kind
                                      ? r.createElement(n.icon[e.source.name], S({ key: t }, e))
                                      : null;
                                  })
                                })
                              ),
                              name: e.label.name.value,
                              state: j(i)(e.label.actions) ? b.BN.Selected : b.BN.Deselected,
                              tooltip: void 0,
                              shape: b.jL.Square,
                              meta: {},
                              onClick: l(e.label.actions, e.label.id)
                            })
                          : c.warn(
                              "Content where `label.type` is not `button` and `label.label.type` is not `block` are not supported (yet)",
                              { content: e }
                            );
                      }),
                      key: "control",
                      id: w.JX.from("AlternativeChoiceView-control")
                    }),
                    (0, y.zG)(
                      v.fromNullable(a.description),
                      v.map(function (e) {
                        return r.createElement(k.T, { id: "".concat(t, "-description"), key: "description", children: [e] });
                      }),
                      v.toNullable
                    )
                  ],
                  key: "AlternativeChoiceView",
                  id: w.JX.from("AlternativeChoiceView")
                })
              ]
            });
          },
          text: G,
          clickableText: function (e) {
            var t = e.textView,
              n = e.onClick,
              o = e.name,
              i = gr(e, ["textView", "onClick", "name"]);
            return r.createElement(
              mr.zx,
              { name: o, onClick: n, className: u.ux.joinClasses([fr.LI, yr.default]) },
              r.createElement(
                t,
                br(
                  (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                      "function" == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                          Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                          })
                        )),
                        r.forEach(function (t) {
                          pr(e, t, n[t]);
                        });
                    }
                    return e;
                  })({}, i),
                  { text: i.text }
                )
              )
            );
          },
          image: function (e) {
            var t = e.name,
              n = e.url,
              o = e.size,
              i = e.backgroundColor;
            return r.createElement(
              "div",
              { className: Ie(i), "data-role": "icon" },
              r.createElement("img", { src: n, className: Ae(o), alt: t })
            );
          },
          imageSized: function (e) {
            var t,
              n = e.name,
              o = e.url,
              i = e.height,
              l = e.width,
              a = e.backgroundColor,
              c = e.borderRadius,
              u = e.meta;
            return r.createElement(
              "figure",
              { className: Me(i, l, a), "data-role": "icon" },
              r.createElement("img", { src: o, className: De(i, l, c), alt: null !== (t = u.label) && void 0 !== t ? t : n.value })
            );
          },
          icon: Ee.y,
          alertsCount: function (e) {
            var t = e.textView,
              n = a(e, ["textView"]),
              c = r.useContext(o.o.Context).alertIds.length;
            return c > 0
              ? r.createElement(
                  t,
                  l(
                    (function (e) {
                      for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                          r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols &&
                          (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                              return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                          )),
                          r.forEach(function (t) {
                            i(e, t, n[t]);
                          });
                      }
                      return e;
                    })({ key: "alertsCountText" }, n),
                    { text: "".concat(c), removeImplicitPadding: !0 }
                  )
                )
              : null;
          },
          assistantCard: f,
          count: function (e) {
            var t = e.backgroundColor,
              n = e.value,
              o = e.id,
              i = e.textColor,
              l = void 0 === i ? b.Il.CoreNeutral0 : i,
              a = e.meta;
            return r.createElement(
              ye,
              { id: o, "aria-label": a.label, "aria-description": a.description },
              r.createElement(
                se,
                {
                  id: o,
                  backgroundColor: t,
                  borderRadius: { topLeft: b.wU.Radius3, topRight: b.wU.Radius3, bottomRight: b.wU.Radius3, bottomLeft: b.wU.Radius3 },
                  minWidth: 0.75,
                  padding: { top: b.T.D0, right: b.T.D025, bottom: b.T.D0125, left: b.T.D025 }
                },
                r.createElement(G, { size: b.yH.Small, format: [b.SQ.Bold], textColor: l, text: n, meta: a, removeImplicitPadding: !0 })
              )
            );
          },
          block: ye,
          row: function (e) {
            var t = e.left,
              n = e.right,
              o = e.spacing,
              i = e.verticalAlign,
              l = Array.isArray(t) && 0 === t.length,
              a = Array.isArray(n) && 0 === n.length;
            return l && a
              ? null
              : r.createElement(
                  "div",
                  { "data-role": "row-layout", className: Ke(o) },
                  l ? null : r.createElement("div", { "data-role": "row-content", className: Ue(i) }, t),
                  a ? null : r.createElement("div", { "data-role": "row-content", className: Ve(i) }, n)
                );
          },
          column: s.Q,
          slider: function (e) {
            var t = e.fillColor,
              n = e.segmentSize,
              o = e.choices,
              i = e.designSystem,
              l = e.onChoiceSelected,
              a = $t.P.useElWatcher(),
              c = a.ref,
              s = a.onMount,
              d = new Et.xQ(),
              m = new Et.xQ(),
              f = new Et.xQ(),
              p = new Et.xQ(),
              g = new Et.xQ(),
              h = new Et.xQ(),
              w = new xn.X(!0),
              k = o.length - 1,
              O = k > 0 ? 100 / k : 0,
              S = o.reduce(function (e) {
                var t = e[e.length - 1],
                  n = 0;
                return void 0 !== t && (n = t + O), e.push(n), e;
              }, []),
              E = new xn.X(S[1]),
              C = wn.T(g.pipe(kn.h(!0)), f.pipe(kn.h(!1)), p.pipe(kn.h(!1))).pipe(on.O(!1)),
              j = wn.T(g, m).pipe(
                On.M(C),
                rn.h(function (e) {
                  var t = In(e, 2);
                  t[0];
                  return t[1];
                }),
                Pt.U(function (e) {
                  return In(e, 1)[0];
                }),
                On.M(c),
                Pt.U(function (e) {
                  var t = In(e, 2),
                    n = t[0],
                    r = t[1];
                  return (0, y.zG)(
                    r,
                    v.map(function (e) {
                      return e.getBoundingClientRect();
                    }),
                    v.bindTo("sliderClientRect"),
                    v.apS("containerMouseEventVal", v.some(n))
                  );
                }),
                tn.oA,
                Pt.U(function (e) {
                  var t = e.containerMouseEventVal,
                    n = e.sliderClientRect,
                    r = n.x,
                    o = n.x + n.width;
                  return t.clientX <= r ? 0 : t.clientX >= o ? 100 : ((t.clientX - r) / (o - r)) * 100;
                })
              ),
              I = E.pipe(
                sn.x(),
                Pt.U(function (e) {
                  for (var t = -1, n = 0; n < S.length - 1; n++) {
                    var r = S[n],
                      o = S[n + 1];
                    e >= r && e <= o && (t = e >= (r + o) / 2 ? n + 1 : n);
                  }
                  return t;
                })
              ),
              A = I.pipe(
                sn.x(),
                Pt.U(function (e) {
                  return o[e];
                })
              );
            return (
              $t.P.useSubscriptionTo(
                wn
                  .T(
                    j.pipe(sn.x()),
                    C.pipe(
                      sn.x(),
                      rn.h(function (e) {
                        return !e;
                      }),
                      On.M(j),
                      Pt.U(function (e) {
                        var t = In(e, 2);
                        t[0];
                        return t[1];
                      }),
                      Pt.U(function (e) {
                        var t,
                          n = 0,
                          r = !0,
                          o = !1,
                          i = void 0;
                        try {
                          for (var l, a = S[Symbol.iterator](); !(r = (l = a.next()).done); r = !0) {
                            var c = l.value,
                              u = Math.abs(e - c);
                            (void 0 === t || u < t) && ((t = u), (n = c));
                          }
                        } catch (e) {
                          (o = !0), (i = e);
                        } finally {
                          try {
                            r || null == a.return || a.return();
                          } finally {
                            if (o) throw i;
                          }
                        }
                        return n;
                      })
                    ),
                    d.pipe(
                      rn.h(function (e) {
                        return "ArrowRight" === e.key || "ArrowLeft" === e.key;
                      }),
                      Sn.b(function (e) {
                        e.preventDefault(), e.stopPropagation();
                      }),
                      Pt.U(function (e) {
                        return e.key;
                      }),
                      rn.h(function (e) {
                        return "ArrowRight" === e || "ArrowLeft" === e;
                      }),
                      On.M(E),
                      Pt.U(function (e) {
                        var t,
                          n = In(e, 2),
                          r = n[0],
                          o = n[1];
                        return (t = "ArrowRight" === r ? o + O : o - O) > 100 ? 100 : t < 0 ? 0 : t;
                      })
                    ),
                    h.pipe(
                      Pt.U(function (e) {
                        return S[e];
                      })
                    )
                  )
                  .pipe(
                    Sn.b(function (e) {
                      return E.next(e);
                    })
                  )
              ),
              $t.P.useSubscriptionTo(
                A.pipe(
                  Pt.U(function (e) {
                    return l(e.actions, e.id, b.nz.SelectSliderChoice);
                  }),
                  Sn.b(function (e) {
                    return e();
                  })
                )
              ),
              o.length < 2
                ? (x.C8.Logging.getLogger("SliderView").warn("Cannot render slider with less than 2 choices.", { choicesLength: o.length }),
                  null)
                : r.createElement(
                    P.F.div,
                    {
                      className: dr.outerContainer,
                      onKeyDown: function (e) {
                        return d.next(e);
                      },
                      "data-role": "slider"
                    },
                    r.createElement(
                      P.F.div,
                      { className: dr.label },
                      A.pipe(
                        Pt.U(function (e) {
                          return e.label;
                        })
                      )
                    ),
                    r.createElement(
                      P.F.div,
                      {
                        className: dr.container,
                        style: { width: u.ux.rem(k * n) },
                        onMouseMove: function (e) {
                          return m.next(e);
                        },
                        onMouseUp: function (e) {
                          return f.next(e);
                        },
                        onMouseLeave: function (e) {
                          return p.next(e);
                        }
                      },
                      r.createElement(
                        P.F.div,
                        Pn(
                          jn(
                            {},
                            (0, Ct.Sh)(
                              dr.slider,
                              C.pipe(
                                Pt.U(function (e) {
                                  return e ? dr.sliderDragging : dr.sliderNotDragging;
                                })
                              )
                            )
                          ),
                          {
                            mount: s,
                            onMouseOver: function () {
                              return w.next(!1);
                            },
                            onFocus: function () {
                              return w.next(!1);
                            }
                          }
                        ),
                        r.createElement(
                          P.F.div,
                          Pn(
                            jn(
                              {},
                              (0, Ct.Sh)(
                                dr.sliderInner,
                                C.pipe(
                                  Pt.U(function (e) {
                                    return e ? dr.sliderInnerDragging : dr.sliderInnerNotDragging;
                                  })
                                ),
                                w.pipe(
                                  Pt.U(function (e) {
                                    return e && 1 === k ? dr.sliderInnerJiggle : null;
                                  })
                                )
                              )
                            ),
                            { style: { width: E.pipe(Pt.U(u.ux.percent)), color: D[t] } }
                          ),
                          r.createElement(
                            P.F.div,
                            Pn(
                              jn(
                                {},
                                (0, Ct.Sh)(
                                  dr.knob,
                                  C.pipe(
                                    Pt.U(function (e) {
                                      return e ? dr.knobDragging : dr.knobNotDragging;
                                    })
                                  ),
                                  w.pipe(
                                    Pt.U(function (e) {
                                      return e && k > 1 ? dr.knobJiggle : null;
                                    })
                                  )
                                )
                              ),
                              {
                                onMouseDown: function (e) {
                                  e.preventDefault(), e.stopPropagation(), g.next(e);
                                },
                                tabIndex: 0
                              }
                            ),
                            A.pipe(
                              Pt.U(function (e) {
                                return "known" === e.icon.source.kind
                                  ? r.createElement(i.icon[e.icon.source.name], {
                                      key: e.icon.source.name,
                                      backgroundColor: e.icon.backgroundColor
                                    })
                                  : r.createElement(
                                      i.image,
                                      jn({ key: e.icon.source.name, backgroundColor: e.icon.backgroundColor }, e.icon.source)
                                    );
                              })
                            )
                          )
                        ),
                        C.pipe(
                          Pt.U(function (e) {
                            return o.map(function (t, o) {
                              var i = {
                                width: u.ux.rem(0.25),
                                left: u.ux.rem(0 === o ? 0.125 : o === k ? o * n - 0.25 - 0.125 : o * n - 0.25)
                              };
                              return r.createElement(
                                P.F.Fragment,
                                { key: t.id },
                                r.createElement("div", { className: dr.sliderDivisionPoint, style: i }),
                                I.pipe(
                                  Pt.U(function (t) {
                                    return t === o || e
                                      ? null
                                      : r.createElement(P.F.div, {
                                          className: dr.sliderDivisionPointHoverArea,
                                          style: Pn(jn({}, i), { transform: "scaleX(6)" }),
                                          onClick: function () {
                                            return h.next(o);
                                          }
                                        });
                                  })
                                )
                              );
                            });
                          })
                        )
                      )
                    )
                  )
            );
          },
          box: se,
          alternativeSlider: function (e) {
            var t = e.fillColor,
              n = e.segmentSize,
              o = e.choices,
              i = e.designSystem,
              l = e.activeAltIndex,
              a = e.meta,
              c = e.notify;
            return r.createElement(i.column, {
              children: [
                r.createElement(i.slider, {
                  fillColor: t,
                  segmentSize: n,
                  meta: a,
                  choices: o.map(function (e) {
                    return { id: e.id, icon: e.icon, label: e.label, actions: e.actions };
                  }),
                  designSystem: i,
                  onChoiceSelected: c,
                  key: "select"
                }),
                r.createElement(
                  P.F.Fragment,
                  { key: "preview" },
                  l.view(function (e) {
                    return (0, y.zG)(
                      v.fromNullable(o[e + 1]),
                      h.fromOption(function () {
                        return "Cannot render alternative slider preview if there's no choice that matches the current alternative index.";
                      }),
                      h.map(function (e) {
                        return e.preview;
                      }),
                      h.filterOrElse(w.gO.isBlock, function () {
                        return "Cannot render alternative slider preview if it's not of type `block.`";
                      }),
                      h.filterOrElse(w.gO.hasOnlyTextParts, function () {
                        return "Cannot render alternative slider preview `block` if not every part is of type `text.`";
                      }),
                      h.map(function (e) {
                        return r.createElement(
                          i.block,
                          N(A({}, e), {
                            children: e.parts.map(function (e, t) {
                              return r.createElement(i.text, A({ key: t }, e));
                            })
                          })
                        );
                      }),
                      h.getOrElse(function (e) {
                        return x.C8.Logging.getLogger("AlternativeSliderView").warn(e), null;
                      })
                    );
                  })
                )
              ],
              id: w.JX.from("AlternativeSlider")
            });
          },
          scroll: function (e) {
            var t = jt.h.create(v.none),
              n = jt.h.create(v.none),
              o = jt.h.create(v.none),
              i = gn(t, n),
              l = gn(t, o),
              a = un.aj([i, l]).pipe(
                Pt.U(function (e) {
                  var t = pn(e, 2);
                  return { topOverflow: t[0], bottomOverflow: t[1] };
                }),
                on.O({ topOverflow: !1, bottomOverflow: !1 }),
                sn.x(yn.equals)
              );
            return r.createElement(
              r.Fragment,
              null,
              r.createElement("style", null, 'div[data-role="scroll"] {\n            border-color: transparent;\n          }'),
              r.createElement(
                P.F.div,
                {
                  "data-role": "scroll",
                  className: a.pipe(
                    Pt.U(function (t) {
                      return (function (e) {
                        var t = e.maxHeight,
                          n = e.topOverflow,
                          r = e.bottomOverflow,
                          o = [];
                        o.push(hn["scroll-main"]), n && o.push(hn.overflowTop);
                        r && o.push(hn.overflowBottom);
                        void 0 !== t &&
                          o.push(
                            (function (e) {
                              var t = "overflow-".concat(e),
                                n = vn.get(t);
                              if (void 0 !== n) return n;
                              var r = u.ux.style({
                                $debugName: "overflow",
                                maxHeight: u.ux.rem(e),
                                overflowY: "auto",
                                overflowX: "hidden",
                                $nest: { "& > *": { overflow: "visible" } }
                              });
                              return vn.put(t, r), r;
                            })(t)
                          );
                        return o.length > 0 ? u.ux.joinClasses(o) : void 0;
                      })(
                        (function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                              r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols &&
                              (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                              )),
                              r.forEach(function (t) {
                                fn(e, t, n[t]);
                              });
                          }
                          return e;
                        })({}, e, t)
                      );
                    })
                  ),
                  mount: function (e) {
                    return t.set(v.fromNullable(e));
                  }
                },
                r.createElement("div", {
                  style: { margin: 0 },
                  ref: function (e) {
                    return n.set(v.fromNullable(e));
                  }
                }),
                e.children,
                r.createElement("div", {
                  style: { margin: 0 },
                  ref: function (e) {
                    return o.set(v.fromNullable(e));
                  }
                })
              )
            );
          },
          list: zt,
          listItem: function (e) {
            var t = r.createElement(
              r.Fragment,
              null,
              r.createElement(
                "div",
                { "data-role": "list-item", className: Wt.listItemPrimaryButton },
                r.createElement("div", { "data-role": "list-item-label", className: Wt.listItemLabel }, e.label)
              ),
              e.secondaryButtons.length > 0
                ? r.createElement(
                    "div",
                    { "data-role": "list-item-secondary-buttons", className: Wt.listItemSecondaryButtonsContainer },
                    e.secondaryButtons.map(function (t) {
                      var n = (0, d.n)(function (t) {
                        return r.createElement(
                          "button",
                          {
                            key: t.id,
                            "data-role": "list-item-secondary-button",
                            onClick: function (e) {
                              e.stopPropagation(), t.onClick();
                            },
                            onKeyDown: function (e) {
                              return e.stopPropagation();
                            },
                            onPointerDown: function (e) {
                              return e.stopPropagation();
                            },
                            className: Wt.listItemSecondaryButton,
                            "aria-label": t.meta.label,
                            "aria-describedby": t["aria-describedby"]
                          },
                          "icon" === t.label.type
                            ? "known" === t.label.icon.source.kind
                              ? r.createElement(e.designSystem.icon[t.label.icon.source.name], {
                                  key: t.label.icon.source.name,
                                  backgroundColor: t.label.icon.backgroundColor
                                })
                              : r.createElement(
                                  e.designSystem.image,
                                  (function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                      var n = null != arguments[t] ? arguments[t] : {},
                                        r = Object.keys(n);
                                      "function" == typeof Object.getOwnPropertySymbols &&
                                        (r = r.concat(
                                          Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                          })
                                        )),
                                        r.forEach(function (t) {
                                          Ft(e, t, n[t]);
                                        });
                                    }
                                    return e;
                                  })({ key: t.label.icon.source.name, backgroundColor: t.label.icon.backgroundColor }, t.label.icon.source)
                                )
                            : t.label.text
                        );
                      })(t);
                      return t.tooltip ? r.createElement(Rt.u, { key: t.id, title: t.tooltip }, n) : n;
                    })
                  )
                : null
            );
            return e.tooltip ? r.createElement(Rt.u, { title: (0, M.a3)(e.tooltip) }, t) : t;
          },
          strongAlertRef: o.b,
          popoverAnchor: function (e) {
            var t = $t.P.useElWatcher(),
              n = $t.P.useElWatcher(),
              o = $t.P.useMemoOnDidMount(function () {
                return jt.h.create(u.ux.joinClasses([Zr.modifiers.preCheck, Zr.modifiers[e.positionHint]]));
              }),
              i = $t.P.useMemoOnDidMount(function () {
                return jt.h.create({ top: 0, left: 0 });
              });
            r.useEffect(function () {
              e.onShow();
            }, []),
              r.useEffect(function () {
                var r = ro.H(0, 500).pipe(
                    oo.c(t.ref),
                    Pt.U(
                      v.map(function (e) {
                        return e.getBoundingClientRect();
                      })
                    ),
                    sn.x(v.getEq(It.UL.eq).equals)
                  ),
                  l = ro.H(0, 500).pipe(
                    oo.c(n.ref),
                    Pt.U(
                      v.map(function (e) {
                        return e.getBoundingClientRect();
                      })
                    ),
                    sn.x(v.getEq(It.xu.eq).equals)
                  ),
                  a = un.aj([r, l]).subscribe(function (t) {
                    var n = uo(t, 2),
                      r = n[0],
                      l = n[1];
                    (0, y.zG)(
                      (0, Br.g)(v.option)(r, l),
                      v.chain(function (t) {
                        var n = uo(t, 2),
                          r = n[0],
                          o = n[1];
                        return (function (e, t, n, r) {
                          var o = [e, b.Ly.Top, b.Ly.Left, b.Ly.Right, b.Ly.Bottom].filter(function (e, t, n) {
                            return n.indexOf(e) === t;
                          });
                          return (0, y.zG)(
                            o,
                            g.f2(function (e) {
                              return (0, y.zG)(
                                po(e, t, n, r),
                                v.map(function (t) {
                                  return { position: e, adjustment: t };
                                })
                              );
                            })
                          );
                        })(e.positionHint, o, r, {
                          top: 0,
                          left: 0,
                          right: document.documentElement.scrollWidth,
                          bottom: document.documentElement.scrollHeight,
                          width: document.documentElement.scrollWidth,
                          height: document.documentElement.scrollHeight
                        });
                      }),
                      v.fold(
                        function () {
                          return o.set(Zr.modifiers.preCheck);
                        },
                        function (e) {
                          var t = e.position,
                            n = e.adjustment;
                          o.set(Zr.modifiers[t]), i.set(n);
                        }
                      )
                    );
                  });
                return function () {
                  return a.unsubscribe();
                };
              }, []);
            var l = o.pipe(
                sn.x(),
                Pt.U(function (e) {
                  return u.ux.joinClasses([Zr.stylesheet.anchorPointer, e]);
                })
              ),
              a = i.pipe(sn.x(lo.isEqual));
            return r.createElement(
              P.F.div,
              { className: Zr.stylesheet.wrapper, mount: t.onMount, style: { display: e.inlineWrapper ? "inline-block" : "block" } },
              r.createElement(
                P.F.div,
                { className: l },
                r.createElement(P.F.div, { className: Zr.stylesheet.popover, style: a, mount: n.onMount }, e.popover)
              ),
              e.children
            );
          },
          nativeSkillsModal: Wo,
          nativeSkillsList: function (e) {
            var t = e.designSystem,
              n = e.notify,
              o = e.onSelect;
            return r.createElement(t.block, {
              innerSpacing: { horizontal: b.T.D05, vertical: b.T.D05 },
              verticalAlign: b.g$.Top,
              horizontalAlign: b.Kq.Center,
              children: [
                r.createElement("p", { key: "header" }, "Mock implementation of Skills list"),
                r.createElement(t.radioButtonsGroup, {
                  id: "skills-list-radio-group",
                  type: "radioButtonsGroup",
                  onClick: function () {
                    return n;
                  },
                  meta: { label: "select-a-skill", description: "Select a skill" },
                  options: [
                    {
                      id: "translate",
                      label: "Translate",
                      onSelect: o,
                      meta: { label: "translate", description: "Access the translate skill" }
                    },
                    {
                      id: "paraphrase",
                      label: "Paraphrase",
                      onSelect: o,
                      meta: { label: "paraphrase", description: "Access the paraphrase skill" }
                    }
                  ],
                  designSystem: t
                })
              ],
              key: "block",
              id: w.JX.from("container-block")
            });
          },
          nativeSkillsView: function () {
            return r.createElement(ye, {
              innerSpacing: { horizontal: b.T.D05, vertical: b.T.D05 },
              verticalAlign: b.g$.Top,
              horizontalAlign: b.Kq.Center,
              children: [r.createElement("p", { key: "header" }, "Mock implementation of Skills View")],
              key: "block",
              id: w.JX.from("container-block")
            });
          },
          nativeToneInsightsModal: Wo,
          nativeLearnMoreModal: Wo,
          nativeSettingsModal: Wo,
          nativeFeedbackModal: Wo,
          nativeInlineCardContent: Wo,
          inlineCard: (0, c.I)(),
          nativeGetStartedChecklistModal: function (e) {
            var t = e.designSystem,
              n = e.notify;
            return r.createElement(t.block, {
              innerSpacing: { horizontal: b.T.D05, vertical: b.T.D05 },
              verticalAlign: b.g$.Top,
              horizontalAlign: b.Kq.Center,
              children: [
                r.createElement("p", { key: "header" }, "Mock Implementation of nativeGetStartedChecklistModal"),
                r.createElement(t.button.primary, {
                  key: "complete-all-items-btn",
                  id: "complete-all-items-btn",
                  text: "Complete all items",
                  name: "fire-actions",
                  state: b.BN.Enabled,
                  tooltip: void 0,
                  shape: b.jL.Square,
                  meta: {},
                  onClick: n
                }),
                r.createElement("p", { key: "footer" }, "")
              ],
              key: "block",
              id: w.JX.from("container-block")
            });
          },
          nativeKeyTakeawaysAssistantCard: Wo,
          nativeProofitModal: Wo,
          dropDownMenuButton: function (e) {
            var t = function (t) {
              return "known" === t.source.kind
                ? r.createElement(e.designSystem.icon[t.source.name], { key: t.source.name, backgroundColor: t.backgroundColor })
                : r.createElement(
                    e.designSystem.image,
                    (function (e) {
                      for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                          r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols &&
                          (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                              return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                          )),
                          r.forEach(function (t) {
                            Jt(e, t, n[t]);
                          });
                      }
                      return e;
                    })({ key: t.source.name, backgroundColor: t.backgroundColor }, t.source)
                  );
            };
            return r.createElement(
              Zt.v.Dropdown,
              {
                label: t(e.icon),
                placement: "bottom right",
                theme: { button: Qt.button, item: Qt.item },
                "aria-label": e.menu.meta.label,
                onAction: function (t) {
                  return (0, y.zG)(
                    e.menu.sections,
                    g.tS(function (e) {
                      return e.items;
                    }),
                    g.Ew(function (e) {
                      return e.id === String(t);
                    }),
                    qt.bw(function (t) {
                      return e.onClick(t.onClickActions, t.id)();
                    })
                  );
                }
              },
              e.menu.sections.map(function (e, n) {
                return r.createElement(
                  Zt.v.Section,
                  { key: n, title: e.title },
                  e.items.map(function (e) {
                    return r.createElement(Zt.v.Item, { key: e.id, textValue: e.id }, e.icon && t(e.icon), e.text);
                  })
                );
              })
            );
          },
          selectableDropDownMenu: function (e) {
            return r.createElement(
              Eo.Component,
              {
                placeholder: e.placeholder,
                placement: "bottom left",
                theme: { button: Go.button },
                "aria-label": e.select.meta.label,
                defaultSelectedKey: e.selectedItem,
                onSelectionChange: function (t) {
                  return (0, y.zG)(
                    e.select.items,
                    g.Ew(function (e) {
                      return e.id === String(t);
                    }),
                    qt.bw(function (t) {
                      return e.onClick(t.onClickActions, t.id)();
                    })
                  );
                }
              },
              e.select.items.map(function (e) {
                return r.createElement(Eo.Item, { key: e.id }, e.label);
              })
            );
          },
          radioButtonsGroup: function (e) {
            var t = e.id,
              n = e.options,
              o = e.onClick,
              i = e.meta;
            return r.createElement(
              vr.Y.Group,
              {
                name: t,
                "aria-label": i.label,
                description: i.description,
                onChange: function (e) {
                  return (0, y.zG)(
                    n,
                    dn.Ew(function (t) {
                      return t.id === e;
                    }),
                    qt.bw(function (e) {
                      return o(e.onSelect, e.id);
                    })
                  );
                }
              },
              n.map(function (e) {
                return r.createElement(
                  vr.Y.Item,
                  { id: e.id, key: e.id, value: e.id, "aria-label": e.meta.label, "aria-description": e.meta.description },
                  e.label
                );
              })
            );
          },
          nativeExperimentalGBConsistencyUpsellFooter: Wo,
          nativeExperimentalGBToneInsightsUpsellFooter: Wo,
          collapsedCard: function (e) {
            var t = "".concat(e.id, "-collapsed-content"),
              n = Sr(r.useState(!1), 2),
              o = n[0],
              i = n[1],
              l = r.useCallback(function (t) {
                i(t), e.onHoverChanged(t);
              }, []),
              a = (0, ot.XI)({ onHoverChange: l }).hoverProps,
              c = (0, ot.L_)({ onFocusWithinChange: l }).focusWithinProps;
            return r.createElement(
              "div",
              Or(kr({}, a, c), { className: Cr.container }),
              r.createElement(Er, Or(kr({}, e), { contentId: t })),
              r.createElement(
                "div",
                { id: t, className: Cr.content },
                e.child,
                r.createElement("div", { role: "tooltip", style: { opacity: o ? 1 : 0 } }, e.quickActions)
              )
            );
          },
          longFormCard: function (e) {
            return r.createElement(
              r.Fragment,
              null,
              (function (e, t, n) {
                switch (e) {
                  case "focused":
                    return t;
                  case "collapsed":
                    return n;
                  case "hidden":
                    return null;
                  default:
                    return (0, jr.vE)(e);
                }
              })(e.viewKind, e.fullContent, e.collapsedContent)
            );
          },
          progressBar: function (e) {
            var t = e.value,
              n = e.backgroundColor,
              o = e.fillColor,
              i = e.borderColor,
              l = e.height,
              a = e.pinPointValue,
              c = e.state;
            return r.createElement(
              "div",
              {
                role: "progressbar",
                "aria-label": "Progress",
                "aria-valuenow": t,
                className: u.ux.joinClasses([Lr.outerContainer, $r(a, l)])
              },
              void 0 !== a &&
                r.createElement("div", { "aria-label": "Progress starting point", className: u.ux.joinClasses([Lr.pinPoint, zr(a, l)]) }),
              r.createElement(
                "div",
                { className: u.ux.joinClasses([Lr.background, Mr(n, i, l)]) },
                r.createElement(
                  "div",
                  { className: u.ux.joinClasses([Lr.fill, Dr(t, o, l)]) },
                  c === b.PT.Loading && r.createElement("div", { className: Lr.loading, style: { height: Ar(l) } })
                )
              )
            );
          },
          horizontalRule: function () {
            return r.createElement("hr", { className: to.default });
          },
          tooltip: function (e) {
            var t = e.text,
              n = e.child,
              o = e.alignment;
            return r.createElement(Rt.u, { title: (0, M.a3)(t), align: o }, n);
          },
          lifecycle: function (e) {
            var t = e.onMountHandler,
              n = e.onUnmountHandler,
              o = e.children;
            return (
              r.useEffect(function () {
                return (
                  t(),
                  function () {
                    return n();
                  }
                );
              }, []),
              r.createElement(r.Fragment, null, o)
            );
          }
        };
    },
    83926: (e, t, n) => {
      n.d(t, { y: () => x, H: () => C });
      var r = n(27378),
        o = n(54001),
        i = n(77678),
        l = n(7514),
        a = n(31278),
        c = n(89894);
      const u = ({ title: e, titleId: t, desc: n, descId: o, ...i }) =>
        r.createElement(
          "svg",
          {
            width: 24,
            height: 24,
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            "aria-hidden": "true",
            stroke: "transparent",
            "aria-labelledby": t,
            "aria-describedby": o,
            ...i
          },
          n ? r.createElement("desc", { id: o }, n) : null,
          e ? r.createElement("title", { id: t }, e) : null,
          r.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M16.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H17v2.5a.5.5 0 0 1-1 0V7h-2.5a.5.5 0 0 1 0-1H16V3.5a.5.5 0 0 1 .5-.5ZM6 8.5A2.5 2.5 0 0 1 8.5 6h2a.5.5 0 0 1 0 1h-2A1.5 1.5 0 0 0 7 8.5v7a2.49 2.49 0 0 1 1.5-.5H16v-2.5a.5.5 0 0 1 1 0v3a.5.5 0 0 1-.5.5h-8a1.5 1.5 0 0 0 0 3h8a.5.5 0 0 1 0 1h-8A2.5 2.5 0 0 1 6 17.5v-9Zm2 9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5Z",
            fill: "#646B81"
          })
        );
      u.__brand = "color";
      const s = ({ title: e, titleId: t, desc: n, descId: o, ...i }) =>
        r.createElement(
          "svg",
          {
            width: 24,
            height: 24,
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            "aria-hidden": "true",
            stroke: "transparent",
            "aria-labelledby": t,
            "aria-describedby": o,
            ...i
          },
          n ? r.createElement("desc", { id: o }, n) : null,
          e ? r.createElement("title", { id: t }, e) : null,
          r.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M8.139 7.684a.5.5 0 0 1 .387-.184h6.948a.5.5 0 0 1 .387.184l2.527 3.104a.5.5 0 0 1-.038.672l-6 5.897a.5.5 0 0 1-.7 0l-6-5.897a.5.5 0 0 1-.038-.672L8.14 7.684Zm.625.816-1.712 2.103h2.115l1.07-2.103H8.764Zm2.595 0-1.07 2.103h3.178L12.611 8.5H11.36Zm2.332 0 .856 2.103h2.401L15.236 8.5h-1.545Zm3.087 3.103h-2.22l-1.296 3.456 3.516-3.456Zm-4.809 4.055 1.52-4.055h-3.257l1.737 4.055Zm-2.825-4.055 1.398 3.263-3.32-3.263h1.922Z",
            fill: "#646B81"
          })
        );
      s.__brand = "color";
      const d = ({ title: e, titleId: t, desc: n, descId: o, ...i }) =>
        r.createElement(
          "svg",
          {
            width: 24,
            height: 24,
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            "aria-hidden": "true",
            stroke: "transparent",
            "aria-labelledby": t,
            "aria-describedby": o,
            ...i
          },
          n ? r.createElement("desc", { id: o }, n) : null,
          e ? r.createElement("title", { id: t }, e) : null,
          r.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M11 5a1 1 0 0 0-1 1v1h4V6a1 1 0 0 0-1-1h-2Zm4 2V6a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v1H5a.5.5 0 0 0 0 1h1.54l.809 9.708A2.5 2.5 0 0 0 9.84 20h4.32a2.5 2.5 0 0 0 2.491-2.292L17.461 8H19a.5.5 0 0 0 0-1h-4Zm1.457 1H7.543l.802 9.625A1.5 1.5 0 0 0 9.84 19h4.32a1.5 1.5 0 0 0 1.495-1.375L16.457 8ZM10.5 10a.5.5 0 0 1 .5.5V16a.5.5 0 0 1-1 0v-5.5a.5.5 0 0 1 .5-.5Zm3 0a.5.5 0 0 1 .5.5V16a.5.5 0 0 1-1 0v-5.5a.5.5 0 0 1 .5-.5Z",
            fill: "#646B81"
          })
        );
      d.__brand = "color";
      const m = ({ title: e, titleId: t, desc: n, descId: o, ...i }) =>
        r.createElement(
          "svg",
          {
            width: 24,
            height: 24,
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            "aria-hidden": "true",
            stroke: "transparent",
            "aria-labelledby": t,
            "aria-describedby": o,
            ...i
          },
          n ? r.createElement("desc", { id: o }, n) : null,
          e ? r.createElement("title", { id: t }, e) : null,
          r.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M12 7.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9ZM6.5 12a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0ZM12 9a.5.5 0 0 1 .5.5v2h2a.5.5 0 0 1 0 1h-2v2a.5.5 0 0 1-1 0v-2h-2a.5.5 0 0 1 0-1h2v-2A.5.5 0 0 1 12 9Z",
            fill: "#646B81"
          })
        );
      m.__brand = "color";
      var f = n(59769),
        p = n(70604),
        b = n(49032);
      const g = ({ title: e, titleId: t, desc: n, descId: o, ...i }) =>
        r.createElement(
          "svg",
          {
            width: 24,
            height: 24,
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            "aria-hidden": "true",
            stroke: "transparent",
            "aria-labelledby": t,
            "aria-describedby": o,
            ...i
          },
          n ? r.createElement("desc", { id: o }, n) : null,
          e ? r.createElement("title", { id: t }, e) : null,
          r.createElement("path", {
            d: "M9.75 11.25a1.5 1.5 0 0 1 1.5-1.5h5.25a1.5 1.5 0 0 1 1.5 1.5v5.25a1.5 1.5 0 0 1-1.5 1.5h-5.25a1.5 1.5 0 0 1-1.5-1.5v-5.25Z",
            fill: "#5CDAE6"
          }),
          r.createElement("path", {
            d: "M6 7.5A1.5 1.5 0 0 1 7.5 6h5.25a1.5 1.5 0 0 1 1.5 1.5v5.25a1.5 1.5 0 0 1-1.5 1.5H7.5a1.5 1.5 0 0 1-1.5-1.5V7.5Z",
            fill: "#99F7FF"
          }),
          r.createElement(
            "g",
            { filter: "url(#outcome_plagiarism_a)" },
            r.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M14.25 9.75v3a1.5 1.5 0 0 1-1.5 1.5h-3v-3a1.5 1.5 0 0 1 1.5-1.5h3Z",
              fill: "#79E8F2"
            })
          ),
          r.createElement(
            "defs",
            null,
            r.createElement(
              "filter",
              {
                id: "outcome_plagiarism_a",
                x: 4.75,
                y: 4.75,
                width: 14.5,
                height: 14.5,
                filterUnits: "userSpaceOnUse",
                colorInterpolationFilters: "sRGB"
              },
              r.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
              r.createElement("feColorMatrix", {
                in: "SourceAlpha",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                result: "hardAlpha"
              }),
              r.createElement("feOffset", null),
              r.createElement("feGaussianBlur", { stdDeviation: 2.5 }),
              r.createElement("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0" }),
              r.createElement("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow_5231_1828" }),
              r.createElement("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow_5231_1828", result: "shape" })
            )
          )
        );
      function y(e, t, n) {
        return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
      }
      function v(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            r.forEach(function (t) {
              y(e, t, n[t]);
            });
        }
        return e;
      }
      function h(e, t) {
        return (
          (t = null != t ? t : {}),
          Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var r = Object.getOwnPropertySymbols(e);
                  t &&
                    (r = r.filter(function (t) {
                      return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    n.push.apply(n, r);
                }
                return n;
              })(Object(t)).forEach(function (n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
          e
        );
      }
      g.__brand = "nocolor";
      var x = {
          close: function (e) {
            return r.createElement(a.JO.Close, { className: E(e) });
          },
          "arrow-right": function (e) {
            return r.createElement(a.JO.Arrow, { direction: a.n4.right, className: E(e) });
          },
          "arrow-left": function (e) {
            return r.createElement(a.JO.Arrow, { direction: a.n4.left, className: E(e) });
          },
          gear: function (e) {
            return r.createElement(a.JO.Gear, { enforceStroke: !0, width: 13, className: E(e) });
          },
          dictionary: function (e) {
            return r.createElement(u, { className: E(e) });
          },
          clarity: function (e) {
            return r.createElement(a.JO.ClarityOutcome, { className: E(e) });
          },
          correctness: function (e) {
            return r.createElement(a.JO.Correctness, { className: E(e) });
          },
          engagement: function (e) {
            return r.createElement(a.JO.EngagementOutcome, { className: E(e) });
          },
          delivery: function (e) {
            return r.createElement(a.JO.DeliveryOutcome, { className: E(e) });
          },
          diamond: function (e) {
            return r.createElement(a.JO.Paid, { width: 20, className: E(e) });
          },
          diamondSmall: function (e) {
            return r.createElement(s, (0, o.Sh)(E(e), S.premium));
          },
          feedback: function (e) {
            return r.createElement(a.JO.AssistantFeedback, { className: E(e) });
          },
          sensitivity: function (e) {
            return r.createElement(a.JO.Sensitivity, { className: E(e) });
          },
          "external-link": function (e) {
            return r.createElement(a.JO.ExternalLink, { className: E(e) });
          },
          sparkles: function (e) {
            return r.createElement(a.JO.Sparkles, { className: E(e) });
          },
          ignore: function (e) {
            return r.createElement(d, { className: E(e) });
          },
          info: function (e) {
            return r.createElement(a.JO.Info, { className: E(e) });
          },
          report: function (e) {
            return r.createElement(a.JO.Report, { width: 12, className: E(e) });
          },
          proofreader: function (e) {
            return r.createElement(a.JO.Proofread, { width: 16, className: E(e) });
          },
          mute: function (e) {
            return r.createElement(a.JO.Mute, { width: 16, className: E(e) });
          },
          more: function (e) {
            return r.createElement(
              a.a1,
              h(v({}, (0, o.Sh)(E(e))), { width: 14, viewBox: "0 0 14 4" }),
              r.createElement("path", {
                d: "M6.99951 0.5C7.82794 0.5 8.49951 1.17157 8.49951 2C8.49951 2.82843 7.82794 3.5 6.99951 3.5C6.17108 3.5 5.49951 2.82843 5.49951 2C5.49951 1.17157 6.17108 0.5 6.99951 0.5Z",
                fill: "#6D758D"
              }),
              r.createElement("path", {
                d: "M11.9995 0.5C12.8279 0.5 13.4995 1.17157 13.4995 2C13.4995 2.82843 12.8279 3.5 11.9995 3.5C11.1711 3.5 10.4995 2.82843 10.4995 2C10.4995 1.17157 11.1711 0.5 11.9995 0.5Z",
                fill: "#6D758D"
              }),
              r.createElement("path", {
                d: "M1.99951 0.5C2.82794 0.5 3.49951 1.17157 3.49951 2C3.49951 2.82843 2.82794 3.5 1.99951 3.5C1.17108 3.5 0.499512 2.82843 0.499512 2C0.499512 1.17157 1.17108 0.5 1.99951 0.5Z",
                fill: "#6D758D"
              })
            );
          },
          controls: function (e) {
            return r.createElement(
              a.a1,
              { className: E(e), width: 24, height: 24, viewBox: "0 0 24 24", fill: "none" },
              r.createElement("path", {
                d: "M12 5.5H21M3 5.5H7M7 5.5C7 6.32843 7.67157 7 8.5 7C9.32843 7 10 6.32843 10 5.5C10 4.67157 9.32843 4 8.5 4C7.67157 4 7 4.67157 7 5.5ZM3 11.5H12M17 11.5H21M17 11.5C17 12.3284 16.3284 13 15.5 13C14.6716 13 14 12.3284 14 11.5C14 10.6716 14.6716 10 15.5 10C16.3284 10 17 10.6716 17 11.5ZM14 17.5H21M3 17.5H9M9 17.5C9 18.3284 9.67157 19 10.5 19C11.3284 19 12 18.3284 12 17.5C12 16.6716 11.3284 16 10.5 16C9.67157 16 9 16.6716 9 17.5Z",
                stroke: "#6D758D",
                "stroke-linecap": "round"
              })
            );
          },
          performance: function (e) {
            return r.createElement(a.JO.Performance, { className: E(e) });
          },
          "bullet-list": function (e) {
            return r.createElement(a.JO.Formatting.BulletList, { className: E(e) });
          },
          accept: function (e) {
            return r.createElement(a.JO.Yes, { className: E(e) });
          },
          copy: function (e) {
            return r.createElement(a.JO.Copy, { className: E(e) });
          },
          newSmall: function (e) {
            return r.createElement(m, { className: E(e) });
          },
          gButtonSmall: function (e) {
            return r.createElement(f._, { className: E(e) });
          },
          edit: function (e) {
            return r.createElement(p.g, { className: E(e) });
          },
          user: function (e) {
            return r.createElement(b.g, { className: E(e) });
          },
          plagiarism: function (e) {
            return r.createElement(g, { className: E(e) });
          },
          questionMark: function (e) {
            return r.createElement(a.JO.QuestionMark, { width: 12, className: E(e) });
          },
          newFeature: function (e) {
            return r.createElement(
              a.a1,
              h(v({}, (0, o.Sh)(E(e), S.newFeature)), { width: 66, height: 38, viewBox: "0 0 66 38", fill: "none" }),
              r.createElement(
                "g",
                { filter: "url(#filter0_d_162_10246)" },
                r.createElement("rect", {
                  x: "10.8281",
                  y: "8.33301",
                  width: "45.7239",
                  height: "21.033",
                  rx: "10.5165",
                  fill: "url(#paint0_linear_162_10246)"
                }),
                r.createElement("path", {
                  d: "M26.5115 14.5216V22.333H25.2529L21.5722 17.0122H21.5073V22.333H20.0923V14.5216H21.3586L25.0355 19.8462H25.1041V14.5216H26.5115ZM29.7719 22.333V14.5216H34.8524V15.7078H31.187V17.8285H34.5893V19.0147H31.187V21.1468H34.8829V22.333H29.7719ZM39.6585 22.333L37.4539 14.5216H38.9758L40.3832 20.2619H40.4557L41.9585 14.5216H43.343L44.8496 20.2657H44.9183L46.3257 14.5216H47.8476L45.643 22.333H44.247L42.6832 16.852H42.6222L41.0545 22.333H39.6585Z",
                  fill: "#0E101A",
                  stroke: "none"
                })
              ),
              r.createElement("path", {
                d: "M62.6293 10.667L63.4395 12.8567L65.6293 13.667L63.4395 14.4773L62.6293 16.667L61.819 14.4773L59.6293 13.667L61.819 12.8567L62.6293 10.667Z",
                fill: "white",
                stroke: "none"
              }),
              r.createElement("path", {
                d: "M57.9672 0L59.3176 3.64955L62.9672 5L59.3176 6.35045L57.9672 10L56.6167 6.35045L52.9672 5L56.6167 3.64955L57.9672 0Z",
                fill: "white",
                stroke: "none"
              }),
              r.createElement("path", {
                d: "M4.70349 20.333L5.78385 23.2526L8.70349 24.333L5.78385 25.4134L4.70349 28.333L3.62313 25.4134L0.703491 24.333L3.62313 23.2526L4.70349 20.333Z",
                fill: "white",
                stroke: "none"
              }),
              r.createElement(
                "defs",
                null,
                r.createElement(
                  "filter",
                  {
                    id: "filter0_d_162_10246",
                    x: "7.17021",
                    y: "8.33301",
                    width: "49.3818",
                    height: "24.6909",
                    filterUnits: "userSpaceOnUse",
                    "color-interpolation-filters": "sRGB"
                  },
                  r.createElement("feFlood", { "flood-opacity": "0", result: "BackgroundImageFix" }),
                  r.createElement("feColorMatrix", {
                    in: "SourceAlpha",
                    type: "matrix",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                    result: "hardAlpha"
                  }),
                  r.createElement("feMorphology", {
                    radius: "9.14479",
                    operator: "erode",
                    in: "SourceAlpha",
                    result: "effect1_dropShadow_162_10246"
                  }),
                  r.createElement("feOffset", { dx: "-3.65792", dy: "3.65792" }),
                  r.createElement("feGaussianBlur", { stdDeviation: "4.57239" }),
                  r.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" }),
                  r.createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow_162_10246" }),
                  r.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow_162_10246", result: "shape" })
                ),
                r.createElement(
                  "linearGradient",
                  {
                    id: "paint0_linear_162_10246",
                    x1: "10.8281",
                    y1: "18.8495",
                    x2: "56.5521",
                    y2: "18.8495",
                    gradientUnits: "userSpaceOnUse"
                  },
                  r.createElement("stop", { "stop-color": "#FBEFB7" }),
                  r.createElement("stop", { offset: "1", "stop-color": "#F9C7C7" })
                )
              )
            );
          },
          assistant: function (e) {
            return r.createElement(
              a.a1,
              { className: E(e), width: 20, height: 20, viewBox: "0 0 20 20", fill: "none" },
              r.createElement("path", {
                d: "M12 15H14C15.1046 15 16 14.1046 16 13V6.00004C16 4.89547 15.1046 4.00004 14 4.00004L7.00001 4.00001C5.89544 4 5 4.89544 5 6.00001V10",
                stroke: "#646B81",
                "stroke-linecap": "round"
              }),
              r.createElement("path", {
                d: "M4 13C4 12.4477 4.44772 12 5.00001 12L9.00001 12C9.55229 12 10 12.4478 10 13V15C10 15.5523 9.55228 16 9 16H5C4.44772 16 4 15.5523 4 15V13Z",
                stroke: "#646B81",
                "stroke-linecap": "round"
              })
            );
          }
        },
        w = { width: c.ux.rem(1.5), height: c.ux.rem(1.5), minWidth: c.ux.rem(1.5), minHeight: c.ux.rem(1.5), borderRadius: c.ux.rem(1.5) },
        k = { $nest: { "& path": { fill: i.CoreYellow80 } } },
        O = { width: c.ux.rem(4.125), height: c.ux.rem(2.375) },
        S = c.ux.stylesheet({ main: [w], premium: [k], newFeature: [O] });
      function E(e) {
        return void 0 === e.backgroundColor ? S.main : c.ux.joinClasses([S.main, C(e.backgroundColor)]);
      }
      function C(e) {
        var t = j.get(e);
        if (void 0 !== t) return t;
        var n = c.ux.style({ backgroundColor: i[e] });
        return j.put(e, n), n;
      }
      var j = new l.z6(100);
    },
    40333: (e, t, n) => {
      n.d(t, { I: () => s });
      var r = n(27378),
        o = n(89894),
        i = n(45368),
        l = n(85627),
        a = n(7514);
      function c(e, t, n) {
        return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
      }
      function u(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
        }
        return o;
      }
      var s = function (e, t) {
        return (0, l.n)(function (n) {
          var l = n.child,
            a = n.id,
            s = n.meta,
            m = n.minWidth,
            f = n.maxWidth,
            p = u(n, ["child", "id", "meta", "minWidth", "maxWidth"]),
            b = (function (e, t) {
              var n = "".concat(e, "-").concat(t),
                r = d.get(n);
              if (void 0 !== r) return r;
              var i = o.ux.style(
                (function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                      r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols &&
                      (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                          return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        })
                      )),
                      r.forEach(function (t) {
                        c(e, t, n[t]);
                      });
                  }
                  return e;
                })({ display: "inline-block" }, e ? { minWidth: o.ux.rem(e) } : {}, t ? { maxWidth: o.ux.rem(t) } : {})
              );
              return d.put(n, i), i;
            })(null != m ? m : e, null != f ? f : t);
          return r.createElement(
            i.Q,
            {
              id: "".concat(a, "-container"),
              role: "region",
              "aria-label": s.label,
              "aria-describedby": p["aria-describedby"],
              className: b
            },
            l
          );
        });
      };
      var d = new a.z6(100);
    },
    45368: (e, t, n) => {
      n.d(t, { Q: () => a });
      var r = n(27378),
        o = n(89894);
      function i(e, t, n) {
        return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
      }
      function l(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
        }
        return o;
      }
      var a = function (e) {
          var t = e.children,
            n = e.className,
            a = l(e, ["children", "className"]);
          return r.createElement(
            "div",
            (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                  r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols &&
                  (r = r.concat(
                    Object.getOwnPropertySymbols(n).filter(function (e) {
                      return Object.getOwnPropertyDescriptor(n, e).enumerable;
                    })
                  )),
                  r.forEach(function (t) {
                    i(e, t, n[t]);
                  });
              }
              return e;
            })({ "data-role": "column-layout", className: o.ux.joinClasses([c.holder, n]) }, a),
            t
          );
        },
        c = o.ux.stylesheet({ holder: [{ display: "flex", flexDirection: "column" }] });
    },
    18702: (e, t, n) => {
      n.d(t, { P: () => _ });
      var r = n(57050),
        o = n(64015),
        i = n(27378),
        l = n(17889),
        a = n(90845),
        c = n(50628),
        u = n(85985),
        s = n(2834),
        d = n(5114),
        m = n(22232),
        f = n(83078),
        p = n(23239),
        b = n(8543),
        g = n(79880),
        y = n(26393),
        v = n(89894),
        h = function (e) {
          var t = e.parentKey,
            n = e.from,
            r = e.transition,
            o = e.to,
            l = e.onAnimationEnd,
            a = e.renderContent,
            c = x(r.animateFrom, "from"),
            u = x(r.animateTo, "to"),
            s = c.needFullWidth || u.needFullWidth;
          return i.createElement(
            "div",
            { className: v.ux.joinClasses([w, s ? k : ""]) },
            n &&
              i.createElement(
                "div",
                {
                  onAnimationEnd: function () {
                    return l(r.fromName);
                  },
                  className: v.ux.joinClasses(c.className)
                },
                a(n, "from-".concat(t), [])
              ),
            i.createElement(
              "div",
              {
                onAnimationEnd: function () {
                  return l(r.toName);
                },
                className: v.ux.joinClasses(u.className)
              },
              a(o, "to-".concat(t), [])
            )
          );
        };
      function x(e, t) {
        switch (e) {
          case "fadeOut":
            return { className: [S], needFullWidth: !1 };
          case "fadeIn":
            return { className: [C], needFullWidth: !1 };
          case "slideLeft":
            return { className: P(t, "left"), needFullWidth: !0 };
          case "slideRight":
            return { className: P(t, "right"), needFullWidth: !0 };
          default:
            return { className: [], needFullWidth: !1 };
        }
      }
      var w = v.ux.style({ position: "relative", overflow: "hidden" }),
        k = v.ux.style({ width: "100%" }),
        O = v.ux.keyframes({ from: { opacity: 1, visibility: "visible" }, to: { opacity: 0, visibility: "hidden" } }),
        S = v.ux.style({
          position: "absolute",
          opacity: 0,
          visibility: "hidden",
          animation: "".concat(O, " ").concat(v.ux.seconds(0.3), " ease-out")
        }),
        E = v.ux.keyframes({ from: { opacity: 0, visibility: "hidden" }, to: { opacity: 1, visibility: "visible" } }),
        C = v.ux.style({ animation: "".concat(E, " ").concat(v.ux.seconds(0.3), " ease-out") }),
        j = function (e) {
          return "calc(".concat(e, "px * var(--cardWidth))");
        },
        P = function (e, t) {
          var n = "to" === e ? 0 : "".concat(j("left" === t ? -1 : 1)),
            r = "from" === e ? 0 : "".concat(j("left" === t ? 1 : -1)),
            o = v.ux.keyframes({
              from: { transform: "translateX(".concat(r, ")"), visibility: "visible" },
              to: { transform: "translateX(".concat(n, ")"), visibility: "from" === e ? "hidden" : "visible" }
            }),
            i = v.ux.style({ position: "absolute", left: 0, right: 0, visibility: "hidden" }),
            l = v.ux.style({
              position: "from" === e ? "absolute" : "relative",
              animation: "".concat(o, " ").concat(v.ux.seconds(0.3), " ease-out")
            });
          return "from" === e ? [i, l] : [l];
        },
        I = n(42500),
        A = n(40330);
      function N(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function $(e, t, n) {
        return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
      }
      function M(e) {
        if (("undefined" != typeof Symbol && null != e[Symbol.iterator]) || null != e["@@iterator"]) return Array.from(e);
      }
      function D(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            r.forEach(function (t) {
              $(e, t, n[t]);
            });
        }
        return e;
      }
      function z(e, t) {
        return (
          (t = null != t ? t : {}),
          Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var r = Object.getOwnPropertySymbols(e);
                  t &&
                    (r = r.filter(function (t) {
                      return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    n.push.apply(n, r);
                }
                return n;
              })(Object(t)).forEach(function (n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
          e
        );
      }
      function L(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          M(e) ||
          T(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function B(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return N(e);
          })(e) ||
          M(e) ||
          T(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function T(e, t) {
        if (e) {
          if ("string" == typeof e) return N(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(n)
              : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? N(e, t)
              : void 0
          );
        }
      }
      var _ = function (e) {
        var t = e.content,
          n = e.prevContent,
          v = e.transitions,
          x = e.designSystem,
          w = e.notify,
          k = e.onMount,
          O = e.onAnimationEnd,
          S = e.sduiRootId,
          E = e.longFormCardState,
          C = void 0 === E ? { viewKind: "collapsed" } : E,
          j = function (e) {
            return "name" in e;
          },
          P = function (e) {
            return (0, r.zG)(
              e,
              o.UI(function (e) {
                return "applyAlerts" === e.type && 0 === e.alternativeIndex
                  ? { type: "applyAlerts", alternativeIndex: M.get() }
                  : "selectAlternative" === e.type
                  ? (M.set(e.alternativeIndex), e)
                  : e;
              })
            );
          },
          N = function (e, t, n, o, a) {
            return function (c) {
              return (0, r.zG)(
                e,
                d.fromNullable,
                d.chain(l.nI),
                d.map(function (e) {
                  var l = L(e),
                    u = l[0],
                    s = l.slice(1);
                  switch (u.type) {
                    case "behavior:strongAlertRef":
                      return N(
                        s,
                        t,
                        n,
                        o,
                        a
                      )(function (e) {
                        return i.createElement(x.strongAlertRef, {
                          key: "".concat(t, "-strongAlertRef"),
                          alertIds: u.alertIds,
                          children: c(z(D({}, e), { alertRefs: u.alertIds }))
                        });
                      });
                    case "behavior:animation:fadeIn":
                    case "behavior:animation:fadeOut":
                      return N(
                        s,
                        t,
                        n,
                        o,
                        a
                      )(function (e) {
                        return i.createElement(x.animation, z(D({ key: "".concat(t, "-animation") }, u), { children: c(e) }));
                      });
                    case "behavior:popoverAnchor":
                      return N(
                        s,
                        t,
                        n,
                        o,
                        a
                      )(function (e) {
                        return (0, r.zG)(
                          d.some(u),
                          d.filter(A.NO.PopoverAnchor.nonEmpty),
                          d.fold(
                            function () {
                              return c(e);
                            },
                            function (o) {
                              var l = o.id,
                                a = o.positionHint,
                                u = o.view;
                              return i.createElement(x.popoverAnchor, {
                                key: "".concat(t, "-popoverAnchor"),
                                inlineWrapper: "inline" === (0, y.JG)(n),
                                positionHint: a,
                                popover: T(u.child, u.id, v, O, e),
                                children: c(e),
                                onShow: function () {
                                  return (0, r.zG)(u.onShow, function (t) {
                                    return w(l, t || [], e);
                                  });
                                }
                              });
                            }
                          )
                        );
                      });
                    case "behavior:lifecycle":
                      return N(
                        s,
                        t,
                        n,
                        o,
                        a
                      )(function (e) {
                        return i.createElement(x.lifecycle, {
                          key: "".concat(t, "-lifecycle"),
                          children: c(D({}, e)),
                          onMountHandler: F(e)(u.onMount, o),
                          onUnmountHandler: F(e)(u.onUnmount, o)
                        });
                      });
                    default:
                      (0, m.vE)(u);
                  }
                }),
                d.getOrElse((0, r.a9)(c(a)))
              );
            };
          },
          $ = new Map(),
          M = p.h.create(0),
          T = function (e, t, n, l, a) {
            var c = j(e)
              ? n.find(function (t) {
                  return t.toName === e.name.value;
                })
              : void 0;
            if (void 0 !== c) {
              var u = $.get(c.fromName);
              return i.createElement(h, {
                key: R(t, e),
                parentKey: t,
                renderContent: function (e, t) {
                  return T(e, R(t, e), [], r.Q1, a);
                },
                onAnimationEnd: l,
                from: u,
                to: e,
                transition: c
              });
            }
            return N(
              (function (e) {
                return "behaviors" in e;
              })(e)
                ? e.behaviors
                : void 0,
              R(t, e),
              e.type,
              e.id,
              a
            )(function (a) {
              switch (e.type) {
                case "text":
                  return i.createElement(x.text, D({ key: R(t, e) }, e));
                case "clickableText":
                  return i.createElement(
                    x.clickableText,
                    z(D({}, e), { key: R(t, e), name: e.name.value, textView: x.text, onClick: F(a)(e.onClickActions, e.id) })
                  );
                case "button":
                  var c = T(e.label, t, n, l, a);
                  return i.createElement(
                    b.F.Fragment,
                    { key: R(t, e) },
                    M.view(function (n) {
                      return i.createElement(x.button[e.kind], {
                        key: R(t, e),
                        id: e.id,
                        text: c,
                        name: e.name.value,
                        state: e.name.value === g.MU.ButtonAccept && -1 === n ? g.BN.Hidden : e.state,
                        tooltip: e.tooltip,
                        shape: e.shape,
                        verticalAlign: "block" === e.label.type || "row" === e.label.type ? e.label.verticalAlign : void 0,
                        meta: e.meta,
                        horizontalAlign: e.horizontalAlign,
                        onClick: F(a)(e.actions, e.id)
                      });
                    })
                  );
                case "alternativeChoice":
                  return i.createElement(
                    b.F.Fragment,
                    { key: R(t, e) },
                    M.view(function (n) {
                      return i.createElement(x.alternativeChoice, {
                        key: R(t, e),
                        id: e.id,
                        designSystem: x,
                        content: e.alternatives,
                        activeIndex: n,
                        notify: F(a),
                        meta: e.meta
                      });
                    })
                  );
                case "icon":
                  return _(e.source, e.backgroundColor, R(t, e));
                case "image":
                  return i.createElement(x.imageSized, D({ key: R(t, e) }, e));
                case "count":
                  return i.createElement(x.count, D({ key: R(t, e) }, e));
                case "block":
                  return i.createElement(
                    x.block,
                    z(D({ key: R(t, e) }, e), {
                      children: e.parts.map(function (e, r) {
                        return T(e, R(t, { id: r.toString() }), n, l, a);
                      })
                    })
                  );
                case "row":
                  return i.createElement(
                    x.row,
                    z(D({ key: R(t, e) }, e), {
                      left: e.left.map(function (e, r) {
                        return T(e, R(t, { id: r.toString() }), n, l, a);
                      }),
                      right: e.right.map(function (e, r) {
                        return T(e, R(t, { id: r.toString() }), n, l, a);
                      })
                    })
                  );
                case "column":
                  return i.createElement(
                    x.column,
                    z(D({ key: R(t, e) }, e), {
                      children: e.children.map(function (e, r) {
                        return T(e, R(t, { id: r.toString() }), n, l, a);
                      })
                    })
                  );
                case "slider":
                  return i.createElement(x.slider, D({ key: R(t, e), designSystem: x, onChoiceSelected: F(a) }, e));
                case "alternativeSlider":
                  return i.createElement(
                    x.alternativeSlider,
                    D({ key: R(t, e), designSystem: x, activeAltIndex: M.view(), notify: F(a) }, e)
                  );
                case "strongAlertRef":
                  var u = z(D({}, a), { alertRefs: e.alertIds });
                  return i.createElement(x.strongAlertRef, z(D({ key: t }, e), { children: T(e.child, t, n, l, u) }));
                case "scroll":
                  return i.createElement(x.scroll, D({ key: R(t, e), children: T(e.child, t, n, l, a) }, e));
                case "box":
                  return i.createElement(x.box, D({ key: R(t, e), children: T(e.child, t, n, l, a) }, e));
                case "list":
                  return i.createElement(
                    x.list,
                    D(
                      {
                        key: R(t, e),
                        onSelect: function (e) {
                          var t = (function (e, t) {
                            return e && 0 !== e.length
                              ? (0, r.zG)(
                                  e,
                                  o.YM,
                                  d.map(function (e) {
                                    switch (e.type) {
                                      case "behavior:strongAlertRef":
                                        return z(D({}, t), { alertRefs: e.alertIds });
                                      case "behavior:animation:fadeIn":
                                      case "behavior:animation:fadeOut":
                                      case "behavior:popoverAnchor":
                                      case "behavior:lifecycle":
                                        return t;
                                      default:
                                        (0, m.vE)(e);
                                    }
                                  }),
                                  d.getOrElse(function () {
                                    return t;
                                  })
                                )
                              : t;
                          })(e.behaviors, a);
                          return F(t)(e.actions, e.id)();
                        },
                        onClick: function (t) {
                          return F(a)([{ type: "positionedClick", source: e.type, sourcePosition: t.clickPoint }], e.id)();
                        },
                        renderItem: function (r, o) {
                          var c = R(t, e) + "." + o.toString(),
                            u = T(r.label, t, n, l, a);
                          return N(
                            r.behaviors,
                            c,
                            e.type,
                            e.id,
                            a
                          )(function (e) {
                            return i.createElement(x.listItem, {
                              key: c,
                              id: r.id,
                              label: u,
                              tooltip: r.tooltip,
                              behaviors: r.behaviors,
                              secondaryButtons: r.secondaryButtons.map(function (t) {
                                return z(D({}, t), { onClick: F(e)(t.onClickActions, t.id) });
                              }),
                              designSystem: x,
                              meta: r.meta
                            });
                          });
                        }
                      },
                      e
                    )
                  );
                case "alertsCount":
                  return i.createElement(x.alertsCount, D({ key: R(t, e), textView: x.text }, e));
                case "assistantCard":
                  return i.createElement(
                    x.assistantCard,
                    z(D({ key: R(t, e) }, e), { child: T(e.child, t, n, l, a), footer: e.footer ? T(e.footer, t, n, l, a) : null })
                  );
                case "nativeSkillsModal":
                  return i.createElement(x.nativeSkillsModal, D({ key: R(t, e) }, e));
                case "nativeSkillsList":
                  return i.createElement(
                    x.nativeSkillsList,
                    D(
                      {
                        key: R(t, e),
                        designSystem: x,
                        notify: function () {
                          return w(e.id, e.onSelect, a);
                        }
                      },
                      e
                    )
                  );
                case "nativeSkillsView":
                  return i.createElement(x.nativeSkillsView, D({ key: R(t, e) }, e));
                case "nativeToneInsightsModal":
                  return i.createElement(x.nativeToneInsightsModal, D({ key: R(t, e) }, e));
                case "nativeLearnMoreModal":
                  return i.createElement(x.nativeLearnMoreModal, D({ key: R(t, e) }, e));
                case "nativeSettingsModal":
                  return i.createElement(x.nativeSettingsModal, D({ key: R(t, e) }, e));
                case "nativeFeedbackModal":
                  return i.createElement(x.nativeFeedbackModal, D({ key: R(t, e) }, e));
                case "nativeGetStartedChecklistModal":
                  return i.createElement(
                    x.nativeGetStartedChecklistModal,
                    D(
                      {
                        key: R(t, e),
                        designSystem: x,
                        notify: function () {
                          return w(e.id, e.onComplete, a);
                        }
                      },
                      e
                    )
                  );
                case "nativeKeyTakeawaysAssistantCard":
                  return i.createElement(x.nativeKeyTakeawaysAssistantCard, D({ key: R(t, e) }, e));
                case "nativeProofitModal":
                  return i.createElement(x.nativeProofitModal, D({ key: R(t, e) }, e));
                case "viewStack":
                  return (0, r.zG)(
                    d.fromNullable(e.views[e.selected]),
                    d.fold(
                      function () {
                        return i.createElement("div", null, "unknown selected view, corresponding view is missing");
                      },
                      function (e) {
                        return T(e, t, n, l, a);
                      }
                    )
                  );
                case "dropDownMenuButton":
                  return i.createElement(x.dropDownMenuButton, D({ key: R(t, e), designSystem: x, onClick: F(a) }, e));
                case "selectableDropDownMenu":
                  return i.createElement(x.selectableDropDownMenu, D({ key: R(t, e), designSystem: x, onClick: F(a) }, e));
                case "nativeExperimentalGBConsistencyUpsellFooter":
                  return i.createElement(x.nativeExperimentalGBConsistencyUpsellFooter, D({ key: R(t, e) }, e));
                case "nativeExperimentalGBToneInsightsUpsellFooter":
                  return i.createElement(x.nativeExperimentalGBToneInsightsUpsellFooter, D({ key: R(t, e) }, e));
                case "nativeInlineCardContent":
                  return i.createElement(x.nativeInlineCardContent, D({ key: R(t, e) }, e));
                case "inlineCard":
                  return i.createElement(x.inlineCard, z(D({ key: R(t, e) }, e), { child: T(e.child, t, n, l, a) }));
                case "radioButtonsGroup":
                  return i.createElement(x.radioButtonsGroup, D({ key: R(t, e), designSystem: x, onClick: F(a) }, e));
                case "collapsedCard":
                  return i.createElement(
                    x.collapsedCard,
                    z(D({}, e), {
                      child: T(e.child, t, n, l, a),
                      quickActions: e.quickActions ? T(e.quickActions, t, n, l, a) : null,
                      onHoverChanged: function (t) {
                        return w(e.id, [{ type: "hoverStateChanged", hovered: t }], a);
                      },
                      onPress: function (t) {
                        return F(a)([{ type: "positionedClick", source: e.type, sourcePosition: t }], e.id)();
                      }
                    })
                  );
                case "shortFormCard":
                  return T(e.child, t, n, l, a);
                case "longFormCard":
                  return i.createElement(
                    x.longFormCard,
                    z(D({}, e), {
                      fullContent: T(e.fullContent, t, n, l, a),
                      collapsedContent: T(e.collapsedContent, t, n, l, a),
                      viewKind: C.viewKind
                    })
                  );
                case "progressBar":
                  return i.createElement(x.progressBar, D({ key: R(t, e) }, e));
                case "tooltip":
                  return i.createElement(x.tooltip, { text: e.text, child: T(e.child, t, n, l, a), alignment: e.alignment });
                case "horizontalRule":
                  return i.createElement(x.horizontalRule, D({ key: R(t, e) }, e));
                case "assistantFeed":
                case "lensesSwitchPanel":
                case "popoverStack":
                case "gButton":
                  throw new Error("".concat(e.type, " can not be rendered directly"));
                default:
                  if ((0, y.VC)(e)) throw new Error("".concat(e.type, " component rendering is not implemented here"));
                  return i.createElement("div", null, "unknown element");
              }
            });
          },
          _ = function (e, t, n) {
            return "known" === e.kind
              ? i.createElement(x.icon[e.name], { key: n, backgroundColor: t })
              : i.createElement(x.image, z(D({ key: n }, e), { backgroundColor: t }));
          },
          F = function (e) {
            return function (t, n) {
              return function () {
                return (0, r.zG)(t, P, function (t) {
                  return w(n, t, e);
                });
              };
            };
          };
        d.isSome(n) &&
          y.ab.forEach(f.MH(n), function (e) {
            j(e) && $.set(e.name.value, e);
          });
        var H = v.reduce(function (e, t) {
            return $.has(t.fromName) && (e += 1), (e += 1);
          }, 0),
          K = p.h.create([]);
        a.P.useSubscriptionTo(
          (0, r.zG)(
            K,
            c.P(function (e) {
              return e.length === H;
            }),
            u.h(function () {
              return H > 0;
            }),
            s.b(O)
          )
        ),
          a.P.useEffectOnDidMount(k);
        return i.createElement(
          I.o.Context.Provider,
          { value: { alertIds: [] } },
          T(
            t,
            S,
            v,
            function (e) {
              return K.modify(function (t) {
                return B(t).concat([e]);
              });
            },
            { alertRefs: [] }
          )
        );
      };
      function R(e, t) {
        return "".concat(e, ".").concat(t.id);
      }
    },
    42500: (e, t, n) => {
      n.d(t, { b: () => l, o: () => r });
      var r,
        o = n(88056),
        i = n(27378);
      !(function (e) {
        e.Context = i.createContext(o.Y.invariantContent("AlertRefState"));
      })(r || (r = {}));
      var l = function (e) {
        var t = e.children,
          n = e.alertIds;
        return i.createElement(r.Context.Provider, { value: { alertIds: n } }, t);
      };
    },
    85627: (e, t, n) => {
      n.d(t, { n: () => a });
      var r = n(27378),
        o = n(63557);
      function i(e, t, n) {
        return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
      }
      function l(e, t) {
        return (
          (t = null != t ? t : {}),
          Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var r = Object.getOwnPropertySymbols(e);
                  t &&
                    (r = r.filter(function (t) {
                      return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    n.push.apply(n, r);
                }
                return n;
              })(Object(t)).forEach(function (n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
          e
        );
      }
      function a(e) {
        return function (t) {
          return r.createElement(
            r.Fragment,
            null,
            r.createElement(
              e,
              l(
                (function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                      r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols &&
                      (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                          return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        })
                      )),
                      r.forEach(function (t) {
                        i(e, t, n[t]);
                      });
                  }
                  return e;
                })({}, t),
                { "aria-describedby": Boolean(t.meta.description) ? "".concat(t.id, "-description") : void 0 }
              )
            ),
            Boolean(t.meta.description) && r.createElement(o.T, { id: "".concat(t.id, "-description") }, t.meta.description)
          );
        };
      }
    },
    16242: (e, t) => {
      t._ = t._array_like_to_array = function (e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      };
    },
    20551: (e, t) => {
      t._ = t._array_with_holes = function (e) {
        if (Array.isArray(e)) return e;
      };
    },
    24178: (e, t) => {
      t._ = t._define_property = function (e, t, n) {
        t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n);
        return e;
      };
    },
    87497: (e, t) => {
      t._ = t._iterable_to_array_limit = function (e, t) {
        var n = null == e ? null : ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
        if (null == n) return;
        var r,
          o,
          i = [],
          l = !0,
          a = !1;
        try {
          for (n = n.call(e); !(l = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); l = !0);
        } catch (e) {
          (a = !0), (o = e);
        } finally {
          try {
            l || null == n.return || n.return();
          } finally {
            if (a) throw o;
          }
        }
        return i;
      };
    },
    17664: (e, t) => {
      t._ = t._non_iterable_rest = function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      };
    },
    99170: (e, t, n) => {
      var r = n(24178);
      t._ = t._object_spread = function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            o = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols &&
            (o = o.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            o.forEach(function (t) {
              r._(e, t, n[t]);
            });
        }
        return e;
      };
    },
    12780: (e, t) => {
      t._ = t._object_spread_props = function (e, t) {
        (t = null != t ? t : {}),
          Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var r = Object.getOwnPropertySymbols(e);
                  t &&
                    (r = r.filter(function (t) {
                      return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    n.push.apply(n, r);
                }
                return n;
              })(Object(t)).forEach(function (n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              });
        return e;
      };
    },
    56133: (e, t, n) => {
      var r = n(41088);
      t._ = t._object_without_properties = function (e, t) {
        if (null == e) return {};
        var n,
          o,
          i = r._(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (o = 0; o < l.length; o++)
            (n = l[o]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
        }
        return i;
      };
    },
    41088: (e, t) => {
      t._ = t._object_without_properties_loose = function (e, t) {
        if (null == e) return {};
        var n,
          r,
          o = {},
          i = Object.keys(e);
        for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
        return o;
      };
    },
    32267: (e, t, n) => {
      var r = n(20551),
        o = n(87497),
        i = n(17664),
        l = n(69343);
      t._ = t._sliced_to_array = function (e, t) {
        return r._(e) || o._(e, t) || l._(e, t) || i._();
      };
    },
    18654: (e, t, n) => {
      var r = n(2373);
      t._ = t._to_primitive = function (e, t) {
        if ("object" !== r._(e) || null === e) return e;
        var n = e[Symbol.toPrimitive];
        if (void 0 !== n) {
          var o = n.call(e, t || "default");
          if ("object" !== r._(o)) return o;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === t ? String : Number)(e);
      };
    },
    73287: (e, t, n) => {
      var r = n(18654),
        o = n(2373);
      t._ = t._to_property_key = function (e) {
        var t = r._(e, "string");
        return "symbol" === o._(t) ? t : String(t);
      };
    },
    2373: (e, t) => {
      t._ = t._type_of = function (e) {
        return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e;
      };
    },
    69343: (e, t, n) => {
      var r = n(16242);
      t._ = t._unsupported_iterable_to_array = function (e, t) {
        if (!e) return;
        if ("string" == typeof e) return r._(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        "Object" === n && e.constructor && (n = e.constructor.name);
        if ("Map" === n || "Set" === n) return Array.from(n);
        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return r._(e, t);
      };
    }
  }
]);
