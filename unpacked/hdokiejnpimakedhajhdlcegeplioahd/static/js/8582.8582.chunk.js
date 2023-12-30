"use strict";
(self.webpackChunkwebClient = self.webpackChunkwebClient || []).push([
  [8582],
  {
    48582: function (t, e, n) {
      n.d(e, {
        J2: function () {
          return sl;
        },
        QH: function () {
          return dl;
        },
        b: function () {
          return fl;
        },
        yk: function () {
          return ll;
        },
        xo: function () {
          return ul;
        }
      });
      var r = n(20988),
        o = n(55883),
        i = n(23381);
      function a() {
        return (
          (a =
            Object.assign ||
            function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }),
          a.apply(this, arguments)
        );
      }
      var s = ["as", "viewBox", "color", "focusable", "children", "className", "__css"],
        u = {
          path: i.createElement(
            "g",
            { stroke: "currentColor", strokeWidth: "1.5" },
            i.createElement("path", { strokeLinecap: "round", fill: "none", d: "M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25" }),
            i.createElement("path", {
              fill: "currentColor",
              strokeLinecap: "round",
              d: "M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"
            }),
            i.createElement("circle", { fill: "none", strokeMiterlimit: "10", cx: "12", cy: "12", r: "11.25" })
          ),
          viewBox: "0 0 24 24"
        },
        l = (0, r.Gp)(function (t, e) {
          var n = t.as,
            l = t.viewBox,
            c = t.color,
            f = void 0 === c ? "currentColor" : c,
            d = t.focusable,
            p = void 0 !== d && d,
            v = t.children,
            h = t.className,
            m = t.__css,
            g = (function (t, e) {
              if (null == t) return {};
              var n,
                r,
                o = {},
                i = Object.keys(t);
              for (r = 0; r < i.length; r++) (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
              return o;
            })(t, s),
            y = {
              ref: e,
              focusable: p,
              className: (0, o.cx)("chakra-icon", h),
              __css: a({ w: "1em", h: "1em", display: "inline-block", lineHeight: "1em", flexShrink: 0, color: f }, m)
            },
            b = null != l ? l : u.viewBox;
          if (n && "string" !== typeof n) return i.createElement(r.m$.svg, a({ as: n }, y, g));
          var x = null != v ? v : u.path;
          return i.createElement(r.m$.svg, a({ verticalAlign: "middle", viewBox: b }, y, g), x);
        });
      o.Ts && (l.displayName = "Icon");
      function c() {
        return (
          (c =
            Object.assign ||
            function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }),
          c.apply(this, arguments)
        );
      }
      var f = ["children", "isDisabled", "__css"],
        d = function (t) {
          return i.createElement(
            l,
            c({ focusable: "false", "aria-hidden": !0 }, t),
            i.createElement("path", {
              fill: "currentColor",
              d: "M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"
            })
          );
        },
        p = (0, r.Gp)(function (t, e) {
          var n = (0, r.mq)("CloseButton", t),
            o = (0, r.Lr)(t),
            a = o.children,
            s = o.isDisabled,
            u = o.__css,
            l = (function (t, e) {
              if (null == t) return {};
              var n,
                r,
                o = {},
                i = Object.keys(t);
              for (r = 0; r < i.length; r++) (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
              return o;
            })(o, f);
          return i.createElement(
            r.m$.button,
            c(
              {
                type: "button",
                "aria-label": "Close",
                ref: e,
                disabled: s,
                __css: c({}, { outline: 0, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }, n, u)
              },
              l
            ),
            a || i.createElement(d, { width: "1em", height: "1em" })
          );
        });
      o.Ts && (p.displayName = "CloseButton");
      var v = n(63398),
        h = n.n(v),
        m = n(45094),
        g = function (t, e) {
          return (
            (g =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
              }),
            g(t, e)
          );
        };
      function y(t, e) {
        if ("function" !== typeof e && null !== e)
          throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
        function n() {
          this.constructor = t;
        }
        g(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
      }
      var b = function () {
        return (
          (b =
            Object.assign ||
            function (t) {
              for (var e, n = 1, r = arguments.length; n < r; n++)
                for (var o in (e = arguments[n])) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
              return t;
            }),
          b.apply(this, arguments)
        );
      };
      function x(t, e) {
        var n = {};
        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
        if (null != t && "function" === typeof Object.getOwnPropertySymbols) {
          var o = 0;
          for (r = Object.getOwnPropertySymbols(t); o < r.length; o++)
            e.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[o]) && (n[r[o]] = t[r[o]]);
        }
        return n;
      }
      Object.create;
      function w(t, e) {
        var n = "function" === typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var r,
          o,
          i = n.call(t),
          a = [];
        try {
          for (; (void 0 === e || e-- > 0) && !(r = i.next()).done; ) a.push(r.value);
        } catch (s) {
          o = { error: s };
        } finally {
          try {
            r && !r.done && (n = i.return) && n.call(i);
          } finally {
            if (o) throw o.error;
          }
        }
        return a;
      }
      function P(t, e, n) {
        if (n || 2 === arguments.length)
          for (var r, o = 0, i = e.length; o < i; o++) (!r && o in e) || (r || (r = Array.prototype.slice.call(e, 0, o)), (r[o] = e[o]));
        return t.concat(r || Array.prototype.slice.call(e));
      }
      Object.create;
      "function" === typeof SuppressedError && SuppressedError;
      var E = "production",
        S = function (t) {
          return {
            isEnabled: function (e) {
              return t.some(function (t) {
                return !!e[t];
              });
            }
          };
        },
        A = {
          measureLayout: S(["layout", "layoutId", "drag"]),
          animation: S(["animate", "exit", "variants", "whileHover", "whileTap", "whileFocus", "whileDrag", "whileInView"]),
          exit: S(["exit"]),
          drag: S(["drag", "dragControls"]),
          focus: S(["whileFocus"]),
          hover: S(["whileHover", "onHoverStart", "onHoverEnd"]),
          tap: S(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
          pan: S(["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]),
          inView: S(["whileInView", "onViewportEnter", "onViewportLeave"])
        };
      var T = function () {},
        O = function () {};
      var C = (0, i.createContext)({ strict: !1 }),
        k = Object.keys(A),
        V = k.length;
      var R = (0, i.createContext)({
          transformPagePoint: function (t) {
            return t;
          },
          isStatic: !1,
          reducedMotion: "never"
        }),
        M = (0, i.createContext)({});
      var L = (0, i.createContext)(null),
        D = "undefined" !== typeof document,
        j = D ? i.useLayoutEffect : i.useEffect,
        B = { current: null },
        F = !1;
      function I() {
        return (
          !F &&
            (function () {
              if (((F = !0), D))
                if (window.matchMedia) {
                  var t = window.matchMedia("(prefers-reduced-motion)"),
                    e = function () {
                      return (B.current = t.matches);
                    };
                  t.addListener(e), e();
                } else B.current = !1;
            })(),
          w((0, i.useState)(B.current), 1)[0]
        );
      }
      function U(t, e, n, r) {
        var o = (0, i.useContext)(C),
          a = (0, i.useContext)(M).visualElement,
          s = (0, i.useContext)(L),
          u = (function () {
            var t = I(),
              e = (0, i.useContext)(R).reducedMotion;
            return "never" !== e && ("always" === e || t);
          })(),
          l = (0, i.useRef)(void 0);
        r || (r = o.renderer),
          !l.current &&
            r &&
            (l.current = r(t, {
              visualState: e,
              parent: a,
              props: n,
              presenceId: null === s || void 0 === s ? void 0 : s.id,
              blockInitialAnimation: !1 === (null === s || void 0 === s ? void 0 : s.initial),
              shouldReduceMotion: u
            }));
        var c = l.current;
        return (
          j(function () {
            null === c || void 0 === c || c.syncRender();
          }),
          (0, i.useEffect)(function () {
            var t;
            null === (t = null === c || void 0 === c ? void 0 : c.animationState) || void 0 === t || t.animateChanges();
          }),
          j(function () {
            return function () {
              return null === c || void 0 === c ? void 0 : c.notifyUnmount();
            };
          }, []),
          c
        );
      }
      function N(t) {
        return "object" === typeof t && Object.prototype.hasOwnProperty.call(t, "current");
      }
      function z(t) {
        return Array.isArray(t);
      }
      function H(t) {
        return "string" === typeof t || z(t);
      }
      function W(t, e, n, r, o) {
        var i;
        return (
          void 0 === r && (r = {}),
          void 0 === o && (o = {}),
          "function" === typeof e && (e = e(null !== n && void 0 !== n ? n : t.custom, r, o)),
          "string" === typeof e && (e = null === (i = t.variants) || void 0 === i ? void 0 : i[e]),
          "function" === typeof e && (e = e(null !== n && void 0 !== n ? n : t.custom, r, o)),
          e
        );
      }
      function _(t, e, n) {
        var r = t.getProps();
        return W(
          r,
          e,
          null !== n && void 0 !== n ? n : r.custom,
          (function (t) {
            var e = {};
            return (
              t.forEachValue(function (t, n) {
                return (e[n] = t.get());
              }),
              e
            );
          })(t),
          (function (t) {
            var e = {};
            return (
              t.forEachValue(function (t, n) {
                return (e[n] = t.getVelocity());
              }),
              e
            );
          })(t)
        );
      }
      function q(t) {
        var e;
        return (
          "function" === typeof (null === (e = t.animate) || void 0 === e ? void 0 : e.start) ||
          H(t.initial) ||
          H(t.animate) ||
          H(t.whileHover) ||
          H(t.whileDrag) ||
          H(t.whileTap) ||
          H(t.whileFocus) ||
          H(t.exit)
        );
      }
      function Y(t) {
        return Boolean(q(t) || t.variants);
      }
      function X(t) {
        var e = (function (t, e) {
            if (q(t)) {
              var n = t.initial,
                r = t.animate;
              return { initial: !1 === n || H(n) ? n : void 0, animate: H(r) ? r : void 0 };
            }
            return !1 !== t.inherit ? e : {};
          })(t, (0, i.useContext)(M)),
          n = e.initial,
          r = e.animate;
        return (0, i.useMemo)(
          function () {
            return { initial: n, animate: r };
          },
          [Z(n), Z(r)]
        );
      }
      function Z(t) {
        return Array.isArray(t) ? t.join(" ") : t;
      }
      function G(t) {
        var e = (0, i.useRef)(null);
        return null === e.current && (e.current = t()), e.current;
      }
      var $ = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 },
        K = 1;
      var J = (0, i.createContext)({}),
        Q = (0, i.createContext)({});
      var tt = (function (t) {
        function e() {
          return (null !== t && t.apply(this, arguments)) || this;
        }
        return (
          y(e, t),
          (e.prototype.getSnapshotBeforeUpdate = function () {
            return this.updateProps(), null;
          }),
          (e.prototype.componentDidUpdate = function () {}),
          (e.prototype.updateProps = function () {
            var t = this.props,
              e = t.visualElement,
              n = t.props;
            e && e.setProps(n);
          }),
          (e.prototype.render = function () {
            return this.props.children;
          }),
          e
        );
      })(i.Component);
      function et(t) {
        var e = t.preloadedFeatures,
          n = t.createVisualElement,
          r = t.projectionNodeConstructor,
          o = t.useRender,
          a = t.useVisualState,
          s = t.Component;
        return (
          e &&
            (function (t) {
              for (var e in t)
                null !== t[e] && ("projectionNodeConstructor" === e ? (A.projectionNodeConstructor = t[e]) : (A[e].Component = t[e]));
            })(e),
          (0, i.forwardRef)(function (t, u) {
            var l = (function (t) {
              var e,
                n = t.layoutId,
                r = null === (e = (0, i.useContext)(J)) || void 0 === e ? void 0 : e.id;
              return r && void 0 !== n ? r + "-" + n : n;
            })(t);
            t = b(b({}, t), { layoutId: l });
            var c = (0, i.useContext)(R),
              f = null,
              d = X(t),
              p = c.isStatic
                ? void 0
                : G(function () {
                    if ($.hasEverUpdated) return K++;
                  }),
              v = a(t, c.isStatic);
            return (
              !c.isStatic &&
                D &&
                ((d.visualElement = U(s, v, b(b({}, c), t), n)),
                (function (t, e, n, r) {
                  var o,
                    a = e.layoutId,
                    s = e.layout,
                    u = e.drag,
                    l = e.dragConstraints,
                    c = e.layoutScroll,
                    f = (0, i.useContext)(Q);
                  r &&
                    n &&
                    !(null === n || void 0 === n ? void 0 : n.projection) &&
                    ((n.projection = new r(t, n.getLatestValues(), null === (o = n.parent) || void 0 === o ? void 0 : o.projection)),
                    n.projection.setOptions({
                      layoutId: a,
                      layout: s,
                      alwaysMeasureLayout: Boolean(u) || (l && N(l)),
                      visualElement: n,
                      scheduleRender: function () {
                        return n.scheduleRender();
                      },
                      animationType: "string" === typeof s ? s : "both",
                      initialPromotionConfig: f,
                      layoutScroll: c
                    }));
                })(p, t, d.visualElement, r || A.projectionNodeConstructor),
                (f = (function (t, e, n) {
                  var r = [],
                    o = (0, i.useContext)(C);
                  if (!e) return null;
                  "production" !== E &&
                    n &&
                    o.strict &&
                    O(
                      !1,
                      "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead."
                    );
                  for (var a = 0; a < V; a++) {
                    var s = k[a],
                      u = A[s],
                      l = u.isEnabled,
                      c = u.Component;
                    l(t) && c && r.push(i.createElement(c, b({ key: s }, t, { visualElement: e })));
                  }
                  return r;
                })(t, d.visualElement, e))),
              i.createElement(
                tt,
                { visualElement: d.visualElement, props: b(b({}, c), t) },
                f,
                i.createElement(
                  M.Provider,
                  { value: d },
                  o(
                    s,
                    t,
                    p,
                    (function (t, e, n) {
                      return (0, i.useCallback)(
                        function (r) {
                          var o;
                          r && (null === (o = t.mount) || void 0 === o || o.call(t, r)),
                            e && (r ? e.mount(r) : e.unmount()),
                            n && ("function" === typeof n ? n(r) : N(n) && (n.current = r));
                        },
                        [e]
                      );
                    })(v, d.visualElement, u),
                    v,
                    c.isStatic,
                    d.visualElement
                  )
                )
              )
            );
          })
        );
      }
      function nt(t) {
        function e(e, n) {
          return void 0 === n && (n = {}), et(t(e, n));
        }
        if ("undefined" === typeof Proxy) return e;
        var n = new Map();
        return new Proxy(e, {
          get: function (t, r) {
            return n.has(r) || n.set(r, e(r)), n.get(r);
          }
        });
      }
      var rt = [
        "animate",
        "circle",
        "defs",
        "desc",
        "ellipse",
        "g",
        "image",
        "line",
        "filter",
        "marker",
        "mask",
        "metadata",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "rect",
        "stop",
        "svg",
        "switch",
        "symbol",
        "text",
        "tspan",
        "use",
        "view"
      ];
      function ot(t) {
        return "string" === typeof t && !t.includes("-") && !!(rt.indexOf(t) > -1 || /[A-Z]/.test(t));
      }
      var it = {};
      var at = ["", "X", "Y", "Z"],
        st = ["transformPerspective", "x", "y", "z"];
      function ut(t, e) {
        return st.indexOf(t) - st.indexOf(e);
      }
      ["translate", "scale", "rotate", "skew"].forEach(function (t) {
        return at.forEach(function (e) {
          return st.push(t + e);
        });
      });
      var lt = new Set(st);
      function ct(t) {
        return lt.has(t);
      }
      var ft = new Set(["originX", "originY", "originZ"]);
      function dt(t) {
        return ft.has(t);
      }
      function pt(t, e) {
        var n = e.layout,
          r = e.layoutId;
        return ct(t) || dt(t) || ((n || void 0 !== r) && (!!it[t] || "opacity" === t));
      }
      var vt = function (t) {
          return Boolean(null !== t && "object" === typeof t && t.getVelocity);
        },
        ht = { x: "translateX", y: "translateY", z: "translateZ", transformPerspective: "perspective" };
      function mt(t) {
        return t.startsWith("--");
      }
      var gt = function (t, e) {
          return e && "number" === typeof t ? e.transform(t) : t;
        },
        yt = function (t, e) {
          return function (n) {
            return Math.max(Math.min(n, e), t);
          };
        },
        bt = function (t) {
          return t % 1 ? Number(t.toFixed(5)) : t;
        },
        xt = /(-)?([\d]*\.?[\d])+/g,
        wt = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi,
        Pt = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;
      function Et(t) {
        return "string" === typeof t;
      }
      var St = function (t) {
          return {
            test: function (e) {
              return Et(e) && e.endsWith(t) && 1 === e.split(" ").length;
            },
            parse: parseFloat,
            transform: function (e) {
              return "".concat(e).concat(t);
            }
          };
        },
        At = St("deg"),
        Tt = St("%"),
        Ot = St("px"),
        Ct = St("vh"),
        kt = St("vw"),
        Vt = Object.assign(Object.assign({}, Tt), {
          parse: function (t) {
            return Tt.parse(t) / 100;
          },
          transform: function (t) {
            return Tt.transform(100 * t);
          }
        }),
        Rt = {
          test: function (t) {
            return "number" === typeof t;
          },
          parse: parseFloat,
          transform: function (t) {
            return t;
          }
        },
        Mt = Object.assign(Object.assign({}, Rt), { transform: yt(0, 1) }),
        Lt = Object.assign(Object.assign({}, Rt), { default: 1 }),
        Dt = b(b({}, Rt), { transform: Math.round }),
        jt = {
          borderWidth: Ot,
          borderTopWidth: Ot,
          borderRightWidth: Ot,
          borderBottomWidth: Ot,
          borderLeftWidth: Ot,
          borderRadius: Ot,
          radius: Ot,
          borderTopLeftRadius: Ot,
          borderTopRightRadius: Ot,
          borderBottomRightRadius: Ot,
          borderBottomLeftRadius: Ot,
          width: Ot,
          maxWidth: Ot,
          height: Ot,
          maxHeight: Ot,
          size: Ot,
          top: Ot,
          right: Ot,
          bottom: Ot,
          left: Ot,
          padding: Ot,
          paddingTop: Ot,
          paddingRight: Ot,
          paddingBottom: Ot,
          paddingLeft: Ot,
          margin: Ot,
          marginTop: Ot,
          marginRight: Ot,
          marginBottom: Ot,
          marginLeft: Ot,
          rotate: At,
          rotateX: At,
          rotateY: At,
          rotateZ: At,
          scale: Lt,
          scaleX: Lt,
          scaleY: Lt,
          scaleZ: Lt,
          skew: At,
          skewX: At,
          skewY: At,
          distance: Ot,
          translateX: Ot,
          translateY: Ot,
          translateZ: Ot,
          x: Ot,
          y: Ot,
          z: Ot,
          perspective: Ot,
          transformPerspective: Ot,
          opacity: Mt,
          originX: Vt,
          originY: Vt,
          originZ: Ot,
          zIndex: Dt,
          fillOpacity: Mt,
          strokeOpacity: Mt,
          numOctaves: Dt
        };
      function Bt(t, e, n, r) {
        var o,
          i = t.style,
          a = t.vars,
          s = t.transform,
          u = t.transformKeys,
          l = t.transformOrigin;
        u.length = 0;
        var c = !1,
          f = !1,
          d = !0;
        for (var p in e) {
          var v = e[p];
          if (mt(p)) a[p] = v;
          else {
            var h = jt[p],
              m = gt(v, h);
            if (ct(p)) {
              if (((c = !0), (s[p] = m), u.push(p), !d)) continue;
              v !== (null !== (o = h.default) && void 0 !== o ? o : 0) && (d = !1);
            } else dt(p) ? ((l[p] = m), (f = !0)) : (i[p] = m);
          }
        }
        c
          ? (i.transform = (function (t, e, n, r) {
              var o = t.transform,
                i = t.transformKeys,
                a = e.enableHardwareAcceleration,
                s = void 0 === a || a,
                u = e.allowTransformNone,
                l = void 0 === u || u,
                c = "";
              i.sort(ut);
              for (var f = !1, d = i.length, p = 0; p < d; p++) {
                var v = i[p];
                (c += "".concat(ht[v] || v, "(").concat(o[v], ") ")), "z" === v && (f = !0);
              }
              return !f && s ? (c += "translateZ(0)") : (c = c.trim()), r ? (c = r(o, n ? "" : c)) : l && n && (c = "none"), c;
            })(t, n, d, r))
          : r
          ? (i.transform = r({}, ""))
          : !e.transform && i.transform && (i.transform = "none"),
          f &&
            (i.transformOrigin = (function (t) {
              var e = t.originX,
                n = void 0 === e ? "50%" : e,
                r = t.originY,
                o = void 0 === r ? "50%" : r,
                i = t.originZ,
                a = void 0 === i ? 0 : i;
              return "".concat(n, " ").concat(o, " ").concat(a);
            })(l));
      }
      var Ft = function () {
        return { style: {}, transform: {}, transformKeys: [], transformOrigin: {}, vars: {} };
      };
      function It(t, e, n) {
        for (var r in e) vt(e[r]) || pt(r, n) || (t[r] = e[r]);
      }
      function Ut(t, e, n) {
        var r = {};
        return (
          It(r, t.style || {}, t),
          Object.assign(
            r,
            (function (t, e, n) {
              var r = t.transformTemplate;
              return (0, i.useMemo)(
                function () {
                  var t = Ft();
                  Bt(t, e, { enableHardwareAcceleration: !n }, r);
                  var o = t.vars,
                    i = t.style;
                  return b(b({}, o), i);
                },
                [e]
              );
            })(t, e, n)
          ),
          t.transformValues && (r = t.transformValues(r)),
          r
        );
      }
      function Nt(t, e, n) {
        var r = {},
          o = Ut(t, e, n);
        return (
          Boolean(t.drag) &&
            !1 !== t.dragListener &&
            ((r.draggable = !1),
            (o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none"),
            (o.touchAction = !0 === t.drag ? "none" : "pan-".concat("x" === t.drag ? "y" : "x"))),
          (r.style = o),
          r
        );
      }
      var zt = new Set([
        "initial",
        "animate",
        "exit",
        "style",
        "variants",
        "transition",
        "transformTemplate",
        "transformValues",
        "custom",
        "inherit",
        "layout",
        "layoutId",
        "layoutDependency",
        "onLayoutAnimationStart",
        "onLayoutAnimationComplete",
        "onLayoutMeasure",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "drag",
        "dragControls",
        "dragListener",
        "dragConstraints",
        "dragDirectionLock",
        "dragSnapToOrigin",
        "_dragX",
        "_dragY",
        "dragElastic",
        "dragMomentum",
        "dragPropagation",
        "dragTransition",
        "whileDrag",
        "onPan",
        "onPanStart",
        "onPanEnd",
        "onPanSessionStart",
        "onTap",
        "onTapStart",
        "onTapCancel",
        "onHoverStart",
        "onHoverEnd",
        "whileFocus",
        "whileTap",
        "whileHover",
        "whileInView",
        "onViewportEnter",
        "onViewportLeave",
        "viewport",
        "layoutScroll"
      ]);
      function Ht(t) {
        return zt.has(t);
      }
      var Wt,
        _t = function (t) {
          return !Ht(t);
        };
      try {
        (Wt = n(50730).Z) &&
          (_t = function (t) {
            return t.startsWith("on") ? !Ht(t) : Wt(t);
          });
      } catch (pl) {}
      function qt(t, e, n) {
        return "string" === typeof t ? t : Ot.transform(e + n * t);
      }
      var Yt = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        Xt = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function Zt(t, e, n, r) {
        var o = e.attrX,
          i = e.attrY,
          a = e.originX,
          s = e.originY,
          u = e.pathLength,
          l = e.pathSpacing,
          c = void 0 === l ? 1 : l,
          f = e.pathOffset,
          d = void 0 === f ? 0 : f;
        Bt(t, x(e, ["attrX", "attrY", "originX", "originY", "pathLength", "pathSpacing", "pathOffset"]), n, r),
          (t.attrs = t.style),
          (t.style = {});
        var p = t.attrs,
          v = t.style,
          h = t.dimensions;
        p.transform && (h && (v.transform = p.transform), delete p.transform),
          h &&
            (void 0 !== a || void 0 !== s || v.transform) &&
            (v.transformOrigin = (function (t, e, n) {
              var r = qt(e, t.x, t.width),
                o = qt(n, t.y, t.height);
              return "".concat(r, " ").concat(o);
            })(h, void 0 !== a ? a : 0.5, void 0 !== s ? s : 0.5)),
          void 0 !== o && (p.x = o),
          void 0 !== i && (p.y = i),
          void 0 !== u &&
            (function (t, e, n, r, o) {
              void 0 === n && (n = 1), void 0 === r && (r = 0), void 0 === o && (o = !0), (t.pathLength = 1);
              var i = o ? Yt : Xt;
              t[i.offset] = Ot.transform(-r);
              var a = Ot.transform(e),
                s = Ot.transform(n);
              t[i.array] = "".concat(a, " ").concat(s);
            })(p, u, c, d, !1);
      }
      var Gt = function () {
        return b(b({}, Ft()), { attrs: {} });
      };
      function $t(t, e) {
        var n = (0, i.useMemo)(
          function () {
            var n = Gt();
            return Zt(n, e, { enableHardwareAcceleration: !1 }, t.transformTemplate), b(b({}, n.attrs), { style: b({}, n.style) });
          },
          [e]
        );
        if (t.style) {
          var r = {};
          It(r, t.style, t), (n.style = b(b({}, r), n.style));
        }
        return n;
      }
      function Kt(t) {
        void 0 === t && (t = !1);
        return function (e, n, r, o, a, s) {
          var u = a.latestValues,
            l = (ot(e) ? $t : Nt)(n, u, s),
            c = (function (t, e, n) {
              var r = {};
              for (var o in t) (_t(o) || (!0 === n && Ht(o)) || (!e && !Ht(o)) || (t.draggable && o.startsWith("onDrag"))) && (r[o] = t[o]);
              return r;
            })(n, "string" === typeof e, t),
            f = b(b(b({}, c), l), { ref: o });
          return r && (f["data-projection-id"] = r), (0, i.createElement)(e, f);
        };
      }
      var Jt = /([a-z])([A-Z])/g,
        Qt = function (t) {
          return t.replace(Jt, "$1-$2").toLowerCase();
        };
      function te(t, e, n, r) {
        var o = e.style,
          i = e.vars;
        for (var a in (Object.assign(t.style, o, r && r.getProjectionStyles(n)), i)) t.style.setProperty(a, i[a]);
      }
      var ee = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength"
      ]);
      function ne(t, e, n, r) {
        for (var o in (te(t, e, void 0, r), e.attrs)) t.setAttribute(ee.has(o) ? o : Qt(o), e.attrs[o]);
      }
      function re(t) {
        var e = t.style,
          n = {};
        for (var r in e) (vt(e[r]) || pt(r, t)) && (n[r] = e[r]);
        return n;
      }
      function oe(t) {
        var e = re(t);
        for (var n in t) {
          if (vt(t[n])) e["x" === n || "y" === n ? "attr" + n.toUpperCase() : n] = t[n];
        }
        return e;
      }
      function ie(t) {
        return "object" === typeof t && "function" === typeof t.start;
      }
      var ae = function (t) {
          return Array.isArray(t);
        },
        se = function (t) {
          return Boolean(t && "object" === typeof t && t.mix && t.toValue);
        },
        ue = function (t) {
          return ae(t) ? t[t.length - 1] || 0 : t;
        };
      function le(t) {
        var e = vt(t) ? t.get() : t;
        return se(e) ? e.toValue() : e;
      }
      function ce(t, e, n, r) {
        var o = t.scrapeMotionValuesFromProps,
          i = t.createRenderState,
          a = t.onMount,
          s = { latestValues: de(e, n, r, o), renderState: i() };
        return (
          a &&
            (s.mount = function (t) {
              return a(e, t, s);
            }),
          s
        );
      }
      var fe = function (t) {
        return function (e, n) {
          var r = (0, i.useContext)(M),
            o = (0, i.useContext)(L);
          return n
            ? ce(t, e, r, o)
            : G(function () {
                return ce(t, e, r, o);
              });
        };
      };
      function de(t, e, n, r) {
        var o = {},
          i = !1 === (null === n || void 0 === n ? void 0 : n.initial),
          a = r(t);
        for (var s in a) o[s] = le(a[s]);
        var u = t.initial,
          l = t.animate,
          c = q(t),
          f = Y(t);
        e &&
          f &&
          !c &&
          !1 !== t.inherit &&
          ((null !== u && void 0 !== u) || (u = e.initial), (null !== l && void 0 !== l) || (l = e.animate));
        var d = i || !1 === u,
          p = d ? l : u;
        p &&
          "boolean" !== typeof p &&
          !ie(p) &&
          (Array.isArray(p) ? p : [p]).forEach(function (e) {
            var n = W(t, e);
            if (n) {
              var r = n.transitionEnd;
              n.transition;
              var i = x(n, ["transitionEnd", "transition"]);
              for (var a in i) {
                var s = i[a];
                if (Array.isArray(s)) s = s[d ? s.length - 1 : 0];
                null !== s && (o[a] = s);
              }
              for (var a in r) o[a] = r[a];
            }
          });
        return o;
      }
      var pe,
        ve = {
          useVisualState: fe({
            scrapeMotionValuesFromProps: oe,
            createRenderState: Gt,
            onMount: function (t, e, n) {
              var r = n.renderState,
                o = n.latestValues;
              try {
                r.dimensions = "function" === typeof e.getBBox ? e.getBBox() : e.getBoundingClientRect();
              } catch (i) {
                r.dimensions = { x: 0, y: 0, width: 0, height: 0 };
              }
              Zt(r, o, { enableHardwareAcceleration: !1 }, t.transformTemplate), ne(e, r);
            }
          })
        },
        he = { useVisualState: fe({ scrapeMotionValuesFromProps: re, createRenderState: Ft }) };
      function me(t, e, n, r) {
        return (
          void 0 === r && (r = { passive: !0 }),
          t.addEventListener(e, n, r),
          function () {
            return t.removeEventListener(e, n);
          }
        );
      }
      function ge(t, e, n, r) {
        (0, i.useEffect)(
          function () {
            var o = t.current;
            if (n && o) return me(o, e, n, r);
          },
          [t, e, n, r]
        );
      }
      function ye(t) {
        return "undefined" !== typeof PointerEvent && t instanceof PointerEvent ? !("mouse" !== t.pointerType) : t instanceof MouseEvent;
      }
      function be(t) {
        return !!t.touches;
      }
      !(function (t) {
        (t.Animate = "animate"),
          (t.Hover = "whileHover"),
          (t.Tap = "whileTap"),
          (t.Drag = "whileDrag"),
          (t.Focus = "whileFocus"),
          (t.InView = "whileInView"),
          (t.Exit = "exit");
      })(pe || (pe = {}));
      var xe = { pageX: 0, pageY: 0 };
      function we(t, e) {
        void 0 === e && (e = "page");
        var n = t.touches[0] || t.changedTouches[0] || xe;
        return { x: n[e + "X"], y: n[e + "Y"] };
      }
      function Pe(t, e) {
        return void 0 === e && (e = "page"), { x: t[e + "X"], y: t[e + "Y"] };
      }
      function Ee(t, e) {
        return void 0 === e && (e = "page"), { point: be(t) ? we(t, e) : Pe(t, e) };
      }
      var Se = function (t, e) {
          void 0 === e && (e = !1);
          var n,
            r = function (e) {
              return t(e, Ee(e));
            };
          return e
            ? ((n = r),
              function (t) {
                var e = t instanceof MouseEvent;
                (!e || (e && 0 === t.button)) && n(t);
              })
            : r;
        },
        Ae = function () {
          return D && null === window.onpointerdown;
        },
        Te = function () {
          return D && null === window.ontouchstart;
        },
        Oe = function () {
          return D && null === window.onmousedown;
        },
        Ce = {
          pointerdown: "mousedown",
          pointermove: "mousemove",
          pointerup: "mouseup",
          pointercancel: "mousecancel",
          pointerover: "mouseover",
          pointerout: "mouseout",
          pointerenter: "mouseenter",
          pointerleave: "mouseleave"
        },
        ke = { pointerdown: "touchstart", pointermove: "touchmove", pointerup: "touchend", pointercancel: "touchcancel" };
      function Ve(t) {
        return Ae() ? t : Te() ? ke[t] : Oe() ? Ce[t] : t;
      }
      function Re(t, e, n, r) {
        return me(t, Ve(e), Se(n, "pointerdown" === e), r);
      }
      function Me(t, e, n, r) {
        return ge(t, Ve(e), n && Se(n, "pointerdown" === e), r);
      }
      function Le(t) {
        var e = null;
        return function () {
          return (
            null === e &&
            ((e = t),
            function () {
              e = null;
            })
          );
        };
      }
      var De = Le("dragHorizontal"),
        je = Le("dragVertical");
      function Be(t) {
        var e = !1;
        if ("y" === t) e = je();
        else if ("x" === t) e = De();
        else {
          var n = De(),
            r = je();
          n && r
            ? (e = function () {
                n(), r();
              })
            : (n && n(), r && r());
        }
        return e;
      }
      function Fe() {
        var t = Be(!0);
        return !t || (t(), !1);
      }
      function Ie(t, e, n) {
        return function (r, o) {
          var i;
          ye(r) &&
            !Fe() &&
            (null === (i = t.animationState) || void 0 === i || i.setActive(pe.Hover, e), null === n || void 0 === n || n(r, o));
        };
      }
      var Ue = function t(e, n) {
        return !!n && (e === n || t(e, n.parentElement));
      };
      function Ne(t) {
        return (0, i.useEffect)(function () {
          return function () {
            return t();
          };
        }, []);
      }
      var ze = function (t, e) {
          return function (n) {
            return e(t(n));
          };
        },
        He = function () {
          for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
          return e.reduce(ze);
        };
      var We = new Set();
      var _e = new WeakMap(),
        qe = new WeakMap(),
        Ye = function (t) {
          var e;
          null === (e = _e.get(t.target)) || void 0 === e || e(t);
        },
        Xe = function (t) {
          t.forEach(Ye);
        };
      function Ze(t, e, n) {
        var r = (function (t) {
          var e = t.root,
            n = x(t, ["root"]),
            r = e || document;
          qe.has(r) || qe.set(r, {});
          var o = qe.get(r),
            i = JSON.stringify(n);
          return o[i] || (o[i] = new IntersectionObserver(Xe, b({ root: e }, n))), o[i];
        })(e);
        return (
          _e.set(t, n),
          r.observe(t),
          function () {
            _e.delete(t), r.unobserve(t);
          }
        );
      }
      var Ge = { some: 0, all: 1 };
      function $e(t, e, n, r) {
        var o = r.root,
          a = r.margin,
          s = r.amount,
          u = void 0 === s ? "some" : s,
          l = r.once;
        (0, i.useEffect)(
          function () {
            if (t) {
              var r = {
                root: null === o || void 0 === o ? void 0 : o.current,
                rootMargin: a,
                threshold: "number" === typeof u ? u : Ge[u]
              };
              return Ze(n.getInstance(), r, function (t) {
                var r,
                  o = t.isIntersecting;
                if (e.isInView !== o && ((e.isInView = o), !l || o || !e.hasEnteredView)) {
                  o && (e.hasEnteredView = !0), null === (r = n.animationState) || void 0 === r || r.setActive(pe.InView, o);
                  var i = n.getProps(),
                    a = o ? i.onViewportEnter : i.onViewportLeave;
                  null === a || void 0 === a || a(t);
                }
              });
            }
          },
          [t, o, a, u]
        );
      }
      function Ke(t, e, n, r) {
        var o = r.fallback,
          a = void 0 === o || o;
        (0, i.useEffect)(
          function () {
            var r, o;
            t &&
              a &&
              ("production" !== E &&
                ((r = "IntersectionObserver not available on this device. whileInView animations will trigger on mount."),
                !1 || We.has(r) || (console.warn(r), o && console.warn(o), We.add(r))),
              requestAnimationFrame(function () {
                var t;
                e.hasEnteredView = !0;
                var r = n.getProps().onViewportEnter;
                null === r || void 0 === r || r(null), null === (t = n.animationState) || void 0 === t || t.setActive(pe.InView, !0);
              }));
          },
          [t]
        );
      }
      var Je = function (t) {
          return function (e) {
            return t(e), null;
          };
        },
        Qe = {
          inView: Je(function (t) {
            var e = t.visualElement,
              n = t.whileInView,
              r = t.onViewportEnter,
              o = t.onViewportLeave,
              a = t.viewport,
              s = void 0 === a ? {} : a,
              u = (0, i.useRef)({ hasEnteredView: !1, isInView: !1 }),
              l = Boolean(n || r || o);
            s.once && u.current.hasEnteredView && (l = !1), ("undefined" === typeof IntersectionObserver ? Ke : $e)(l, u.current, e, s);
          }),
          tap: Je(function (t) {
            var e = t.onTap,
              n = t.onTapStart,
              r = t.onTapCancel,
              o = t.whileTap,
              a = t.visualElement,
              s = e || n || r || o,
              u = (0, i.useRef)(!1),
              l = (0, i.useRef)(null),
              c = { passive: !(n || e || r || h) };
            function f() {
              var t;
              null === (t = l.current) || void 0 === t || t.call(l), (l.current = null);
            }
            function d() {
              var t;
              return f(), (u.current = !1), null === (t = a.animationState) || void 0 === t || t.setActive(pe.Tap, !1), !Fe();
            }
            function p(t, n) {
              d() && (Ue(a.getInstance(), t.target) ? null === e || void 0 === e || e(t, n) : null === r || void 0 === r || r(t, n));
            }
            function v(t, e) {
              d() && (null === r || void 0 === r || r(t, e));
            }
            function h(t, e) {
              var r;
              f(),
                u.current ||
                  ((u.current = !0),
                  (l.current = He(Re(window, "pointerup", p, c), Re(window, "pointercancel", v, c))),
                  null === (r = a.animationState) || void 0 === r || r.setActive(pe.Tap, !0),
                  null === n || void 0 === n || n(t, e));
            }
            Me(a, "pointerdown", s ? h : void 0, c), Ne(f);
          }),
          focus: Je(function (t) {
            var e = t.whileFocus,
              n = t.visualElement;
            ge(
              n,
              "focus",
              e
                ? function () {
                    var t;
                    null === (t = n.animationState) || void 0 === t || t.setActive(pe.Focus, !0);
                  }
                : void 0
            ),
              ge(
                n,
                "blur",
                e
                  ? function () {
                      var t;
                      null === (t = n.animationState) || void 0 === t || t.setActive(pe.Focus, !1);
                    }
                  : void 0
              );
          }),
          hover: Je(function (t) {
            var e = t.onHoverStart,
              n = t.onHoverEnd,
              r = t.whileHover,
              o = t.visualElement;
            Me(o, "pointerenter", e || r ? Ie(o, !0, e) : void 0, { passive: !e }),
              Me(o, "pointerleave", n || r ? Ie(o, !1, n) : void 0, { passive: !n });
          })
        },
        tn = 0,
        en = function () {
          return tn++;
        },
        nn = function () {
          return G(en);
        };
      function rn() {
        var t = (0, i.useContext)(L);
        if (null === t) return [!0, null];
        var e = t.isPresent,
          n = t.onExitComplete,
          r = t.register,
          o = nn();
        (0, i.useEffect)(function () {
          return r(o);
        }, []);
        return !e && n
          ? [
              !1,
              function () {
                return null === n || void 0 === n ? void 0 : n(o);
              }
            ]
          : [!0];
      }
      function on(t, e) {
        if (!Array.isArray(e)) return !1;
        var n = e.length;
        if (n !== t.length) return !1;
        for (var r = 0; r < n; r++) if (e[r] !== t[r]) return !1;
        return !0;
      }
      var an = function (t, e, n) {
          return Math.min(Math.max(n, t), e);
        },
        sn = 0.001,
        un = 0.01,
        ln = 10,
        cn = 0.05,
        fn = 1;
      function dn(t) {
        var e,
          n,
          r = t.duration,
          o = void 0 === r ? 800 : r,
          i = t.bounce,
          a = void 0 === i ? 0.25 : i,
          s = t.velocity,
          u = void 0 === s ? 0 : s,
          l = t.mass,
          c = void 0 === l ? 1 : l;
        T(o <= 1e3 * ln, "Spring duration must be 10 seconds or less");
        var f = 1 - a;
        (f = an(cn, fn, f)),
          (o = an(un, ln, o / 1e3)),
          f < 1
            ? ((e = function (t) {
                var e = t * f,
                  n = e * o,
                  r = e - u,
                  i = vn(t, f),
                  a = Math.exp(-n);
                return sn - (r / i) * a;
              }),
              (n = function (t) {
                var n = t * f * o,
                  r = n * u + u,
                  i = Math.pow(f, 2) * Math.pow(t, 2) * o,
                  a = Math.exp(-n),
                  s = vn(Math.pow(t, 2), f);
                return ((-e(t) + sn > 0 ? -1 : 1) * ((r - i) * a)) / s;
              }))
            : ((e = function (t) {
                return Math.exp(-t * o) * ((t - u) * o + 1) - sn;
              }),
              (n = function (t) {
                return Math.exp(-t * o) * (o * o * (u - t));
              }));
        var d = (function (t, e, n) {
          for (var r = n, o = 1; o < pn; o++) r -= t(r) / e(r);
          return r;
        })(e, n, 5 / o);
        if (((o *= 1e3), isNaN(d))) return { stiffness: 100, damping: 10, duration: o };
        var p = Math.pow(d, 2) * c;
        return { stiffness: p, damping: 2 * f * Math.sqrt(c * p), duration: o };
      }
      var pn = 12;
      function vn(t, e) {
        return t * Math.sqrt(1 - e * e);
      }
      var hn = ["duration", "bounce"],
        mn = ["stiffness", "damping", "mass"];
      function gn(t, e) {
        return e.some(function (e) {
          return void 0 !== t[e];
        });
      }
      function yn(t) {
        var e = t.from,
          n = void 0 === e ? 0 : e,
          r = t.to,
          o = void 0 === r ? 1 : r,
          i = t.restSpeed,
          a = void 0 === i ? 2 : i,
          s = t.restDelta,
          u = x(t, ["from", "to", "restSpeed", "restDelta"]),
          l = { done: !1, value: n },
          c = (function (t) {
            var e = Object.assign({ velocity: 0, stiffness: 100, damping: 10, mass: 1, isResolvedFromDuration: !1 }, t);
            if (!gn(t, mn) && gn(t, hn)) {
              var n = dn(t);
              (e = Object.assign(Object.assign(Object.assign({}, e), n), { velocity: 0, mass: 1 })).isResolvedFromDuration = !0;
            }
            return e;
          })(u),
          f = c.stiffness,
          d = c.damping,
          p = c.mass,
          v = c.velocity,
          h = c.duration,
          m = c.isResolvedFromDuration,
          g = bn,
          y = bn;
        function b() {
          var t = v ? -v / 1e3 : 0,
            e = o - n,
            r = d / (2 * Math.sqrt(f * p)),
            i = Math.sqrt(f / p) / 1e3;
          if ((void 0 === s && (s = Math.min(Math.abs(o - n) / 100, 0.4)), r < 1)) {
            var a = vn(i, r);
            (g = function (n) {
              var s = Math.exp(-r * i * n);
              return o - s * (((t + r * i * e) / a) * Math.sin(a * n) + e * Math.cos(a * n));
            }),
              (y = function (n) {
                var o = Math.exp(-r * i * n);
                return (
                  r * i * o * ((Math.sin(a * n) * (t + r * i * e)) / a + e * Math.cos(a * n)) -
                  o * (Math.cos(a * n) * (t + r * i * e) - a * e * Math.sin(a * n))
                );
              });
          } else if (1 === r)
            g = function (n) {
              return o - Math.exp(-i * n) * (e + (t + i * e) * n);
            };
          else {
            var u = i * Math.sqrt(r * r - 1);
            g = function (n) {
              var a = Math.exp(-r * i * n),
                s = Math.min(u * n, 300);
              return o - (a * ((t + r * i * e) * Math.sinh(s) + u * e * Math.cosh(s))) / u;
            };
          }
        }
        return (
          b(),
          {
            next: function (t) {
              var e = g(t);
              if (m) l.done = t >= h;
              else {
                var n = 1e3 * y(t),
                  r = Math.abs(n) <= a,
                  i = Math.abs(o - e) <= s;
                l.done = r && i;
              }
              return (l.value = l.done ? o : e), l;
            },
            flipTarget: function () {
              v = -v;
              var t = [o, n];
              (n = t[0]), (o = t[1]), b();
            }
          }
        );
      }
      yn.needsInterpolation = function (t, e) {
        return "string" === typeof t || "string" === typeof e;
      };
      var bn = function (t) {
          return 0;
        },
        xn = n(92577),
        wn = function (t, e, n) {
          var r = e - t;
          return 0 === r ? 1 : (n - t) / r;
        },
        Pn = function (t, e, n) {
          return -n * t + n * e + t;
        },
        En = n(47169),
        Sn = function (t, e) {
          return function (n) {
            return Boolean((Et(n) && Pt.test(n) && n.startsWith(t)) || (e && Object.prototype.hasOwnProperty.call(n, e)));
          };
        },
        An = function (t, e, n) {
          return function (r) {
            var o;
            if (!Et(r)) return r;
            var i = r.match(xt),
              a = (0, xn.Z)(i, 4),
              s = a[0],
              u = a[1],
              l = a[2],
              c = a[3];
            return (
              (o = {}),
              (0, En.Z)(o, t, parseFloat(s)),
              (0, En.Z)(o, e, parseFloat(u)),
              (0, En.Z)(o, n, parseFloat(l)),
              (0, En.Z)(o, "alpha", void 0 !== c ? parseFloat(c) : 1),
              o
            );
          };
        },
        Tn = yt(0, 255),
        On = Object.assign(Object.assign({}, Rt), {
          transform: function (t) {
            return Math.round(Tn(t));
          }
        }),
        Cn = {
          test: Sn("rgb", "red"),
          parse: An("red", "green", "blue"),
          transform: function (t) {
            var e = t.red,
              n = t.green,
              r = t.blue,
              o = t.alpha,
              i = void 0 === o ? 1 : o;
            return "rgba(" + On.transform(e) + ", " + On.transform(n) + ", " + On.transform(r) + ", " + bt(Mt.transform(i)) + ")";
          }
        };
      var kn = {
          test: Sn("#"),
          parse: function (t) {
            var e = "",
              n = "",
              r = "",
              o = "";
            return (
              t.length > 5
                ? ((e = t.substr(1, 2)), (n = t.substr(3, 2)), (r = t.substr(5, 2)), (o = t.substr(7, 2)))
                : ((e = t.substr(1, 1)),
                  (n = t.substr(2, 1)),
                  (r = t.substr(3, 1)),
                  (o = t.substr(4, 1)),
                  (e += e),
                  (n += n),
                  (r += r),
                  (o += o)),
              { red: parseInt(e, 16), green: parseInt(n, 16), blue: parseInt(r, 16), alpha: o ? parseInt(o, 16) / 255 : 1 }
            );
          },
          transform: Cn.transform
        },
        Vn = {
          test: Sn("hsl", "hue"),
          parse: An("hue", "saturation", "lightness"),
          transform: function (t) {
            var e = t.hue,
              n = t.saturation,
              r = t.lightness,
              o = t.alpha,
              i = void 0 === o ? 1 : o;
            return "hsla(" + Math.round(e) + ", " + Tt.transform(bt(n)) + ", " + Tt.transform(bt(r)) + ", " + bt(Mt.transform(i)) + ")";
          }
        };
      function Rn(t, e, n) {
        return (
          n < 0 && (n += 1),
          n > 1 && (n -= 1),
          n < 1 / 6 ? t + 6 * (e - t) * n : n < 0.5 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
        );
      }
      function Mn(t) {
        var e = t.hue,
          n = t.saturation,
          r = t.lightness,
          o = t.alpha;
        (e /= 360), (r /= 100);
        var i = 0,
          a = 0,
          s = 0;
        if ((n /= 100)) {
          var u = r < 0.5 ? r * (1 + n) : r + n - r * n,
            l = 2 * r - u;
          (i = Rn(l, u, e + 1 / 3)), (a = Rn(l, u, e)), (s = Rn(l, u, e - 1 / 3));
        } else i = a = s = r;
        return { red: Math.round(255 * i), green: Math.round(255 * a), blue: Math.round(255 * s), alpha: o };
      }
      var Ln = function (t, e, n) {
          var r = t * t,
            o = e * e;
          return Math.sqrt(Math.max(0, n * (o - r) + r));
        },
        Dn = [kn, Cn, Vn],
        jn = function (t) {
          return Dn.find(function (e) {
            return e.test(t);
          });
        },
        Bn = function (t) {
          return "'".concat(t, "' is not an animatable color. Use the equivalent color code instead.");
        },
        Fn = function (t, e) {
          var n = jn(t),
            r = jn(e);
          O(!!n, Bn(t)), O(!!r, Bn(e));
          var o = n.parse(t),
            i = r.parse(e);
          n === Vn && ((o = Mn(o)), (n = Cn)), r === Vn && ((i = Mn(i)), (r = Cn));
          var a = Object.assign({}, o);
          return function (t) {
            for (var e in a) "alpha" !== e && (a[e] = Ln(o[e], i[e], t));
            return (a.alpha = Pn(o.alpha, i.alpha, t)), n.transform(a);
          };
        },
        In = n(21930),
        Un = {
          test: function (t) {
            return Cn.test(t) || kn.test(t) || Vn.test(t);
          },
          parse: function (t) {
            return Cn.test(t) ? Cn.parse(t) : Vn.test(t) ? Vn.parse(t) : kn.parse(t);
          },
          transform: function (t) {
            return Et(t) ? t : t.hasOwnProperty("red") ? Cn.transform(t) : Vn.transform(t);
          }
        },
        Nn = "${c}",
        zn = "${n}";
      function Hn(t) {
        "number" === typeof t && (t = "".concat(t));
        var e = [],
          n = 0,
          r = t.match(wt);
        r && ((n = r.length), (t = t.replace(wt, Nn)), e.push.apply(e, (0, In.Z)(r.map(Un.parse))));
        var o = t.match(xt);
        return o && ((t = t.replace(xt, zn)), e.push.apply(e, (0, In.Z)(o.map(Rt.parse)))), { values: e, numColors: n, tokenised: t };
      }
      function Wn(t) {
        return Hn(t).values;
      }
      function _n(t) {
        var e = Hn(t),
          n = e.values,
          r = e.numColors,
          o = e.tokenised,
          i = n.length;
        return function (t) {
          for (var e = o, n = 0; n < i; n++) e = e.replace(n < r ? Nn : zn, n < r ? Un.transform(t[n]) : bt(t[n]));
          return e;
        };
      }
      var qn = function (t) {
        return "number" === typeof t ? 0 : t;
      };
      var Yn = {
          test: function (t) {
            var e, n, r, o;
            return (
              isNaN(t) &&
              Et(t) &&
              (null !== (n = null === (e = t.match(xt)) || void 0 === e ? void 0 : e.length) && void 0 !== n ? n : 0) +
                (null !== (o = null === (r = t.match(wt)) || void 0 === r ? void 0 : r.length) && void 0 !== o ? o : 0) >
                0
            );
          },
          parse: Wn,
          createTransformer: _n,
          getAnimatableNone: function (t) {
            var e = Wn(t);
            return _n(t)(e.map(qn));
          }
        },
        Xn = function (t) {
          return "number" === typeof t;
        };
      function Zn(t, e) {
        return Xn(t)
          ? function (n) {
              return Pn(t, e, n);
            }
          : Un.test(t)
          ? Fn(t, e)
          : Jn(t, e);
      }
      var Gn = function (t, e) {
          var n = (0, In.Z)(t),
            r = n.length,
            o = t.map(function (t, n) {
              return Zn(t, e[n]);
            });
          return function (t) {
            for (var e = 0; e < r; e++) n[e] = o[e](t);
            return n;
          };
        },
        $n = function (t, e) {
          var n = Object.assign(Object.assign({}, t), e),
            r = {};
          for (var o in n) void 0 !== t[o] && void 0 !== e[o] && (r[o] = Zn(t[o], e[o]));
          return function (t) {
            for (var e in r) n[e] = r[e](t);
            return n;
          };
        };
      function Kn(t) {
        for (var e = Yn.parse(t), n = e.length, r = 0, o = 0, i = 0, a = 0; a < n; a++)
          r || "number" === typeof e[a] ? r++ : void 0 !== e[a].hue ? i++ : o++;
        return { parsed: e, numNumbers: r, numRGB: o, numHSL: i };
      }
      var Jn = function (t, e) {
          var n = Yn.createTransformer(e),
            r = Kn(t),
            o = Kn(e);
          return r.numHSL === o.numHSL && r.numRGB === o.numRGB && r.numNumbers >= o.numNumbers
            ? He(Gn(r.parsed, o.parsed), n)
            : (T(
                !0,
                "Complex values '"
                  .concat(t, "' and '")
                  .concat(
                    e,
                    "' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition."
                  )
              ),
              function (n) {
                return "".concat(n > 0 ? e : t);
              });
        },
        Qn = function (t, e) {
          return function (n) {
            return Pn(t, e, n);
          };
        };
      function tr(t, e, n) {
        for (
          var r,
            o = [],
            i =
              n ||
              ("number" === typeof (r = t[0])
                ? Qn
                : "string" === typeof r
                ? Un.test(r)
                  ? Fn
                  : Jn
                : Array.isArray(r)
                ? Gn
                : "object" === typeof r
                ? $n
                : void 0),
            a = t.length - 1,
            s = 0;
          s < a;
          s++
        ) {
          var u = i(t[s], t[s + 1]);
          if (e) {
            var l = Array.isArray(e) ? e[s] : e;
            u = He(l, u);
          }
          o.push(u);
        }
        return o;
      }
      function er(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = n.clamp,
          o = void 0 === r || r,
          i = n.ease,
          a = n.mixer,
          s = t.length;
        O(s === e.length, "Both input and output ranges must be the same length"),
          O(
            !i || !Array.isArray(i) || i.length === s - 1,
            "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."
          ),
          t[0] > t[s - 1] && ((t = [].concat(t)), (e = [].concat(e)), t.reverse(), e.reverse());
        var u = tr(e, i, a),
          l =
            2 === s
              ? (function (t, e) {
                  var n = (0, xn.Z)(t, 2),
                    r = n[0],
                    o = n[1],
                    i = (0, xn.Z)(e, 1)[0];
                  return function (t) {
                    return i(wn(r, o, t));
                  };
                })(t, u)
              : (function (t, e) {
                  var n = t.length,
                    r = n - 1;
                  return function (o) {
                    var i = 0,
                      a = !1;
                    if ((o <= t[0] ? (a = !0) : o >= t[r] && ((i = r - 1), (a = !0)), !a)) {
                      for (var s = 1; s < n && !(t[s] > o || s === r); s++);
                      i = s - 1;
                    }
                    var u = wn(t[i], t[i + 1], o);
                    return e[i](u);
                  };
                })(t, u);
        return o
          ? function (e) {
              return l(an(t[0], t[s - 1], e));
            }
          : l;
      }
      var nr,
        rr = function (t) {
          return function (e) {
            return 1 - t(1 - e);
          };
        },
        or = function (t) {
          return function (e) {
            return e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2;
          };
        },
        ir = function (t) {
          return function (e) {
            return e * e * ((t + 1) * e - t);
          };
        },
        ar = function (t) {
          return t;
        },
        sr =
          ((nr = 2),
          function (t) {
            return Math.pow(t, nr);
          }),
        ur = rr(sr),
        lr = or(sr),
        cr = function (t) {
          return 1 - Math.sin(Math.acos(t));
        },
        fr = rr(cr),
        dr = or(fr),
        pr = ir(1.525),
        vr = rr(pr),
        hr = or(pr),
        mr = (function (t) {
          var e = ir(t);
          return function (t) {
            return (t *= 2) < 1 ? 0.5 * e(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1)));
          };
        })(1.525),
        gr = function (t) {
          if (1 === t || 0 === t) return t;
          var e = t * t;
          return t < 0.36363636363636365
            ? 7.5625 * e
            : t < 0.7272727272727273
            ? 9.075 * e - 9.9 * t + 3.4
            : t < 0.9
            ? 12.066481994459833 * e - 19.63545706371191 * t + 8.898060941828255
            : 10.8 * t * t - 20.52 * t + 10.72;
        },
        yr = rr(gr);
      function br(t, e) {
        return t
          .map(function () {
            return e || lr;
          })
          .splice(0, t.length - 1);
      }
      function xr(t) {
        var e = t.from,
          n = void 0 === e ? 0 : e,
          r = t.to,
          o = void 0 === r ? 1 : r,
          i = t.ease,
          a = t.offset,
          s = t.duration,
          u = void 0 === s ? 300 : s,
          l = { done: !1, value: n },
          c = Array.isArray(o) ? o : [n, o],
          f = (function (t, e) {
            return t.map(function (t) {
              return t * e;
            });
          })(
            a && a.length === c.length
              ? a
              : (function (t) {
                  var e = t.length;
                  return t.map(function (t, n) {
                    return 0 !== n ? n / (e - 1) : 0;
                  });
                })(c),
            u
          );
        function d() {
          return er(f, c, { ease: Array.isArray(i) ? i : br(c, i) });
        }
        var p = d();
        return {
          next: function (t) {
            return (l.value = p(t)), (l.done = t >= u), l;
          },
          flipTarget: function () {
            c.reverse(), (p = d());
          }
        };
      }
      var wr = {
        keyframes: xr,
        spring: yn,
        decay: function (t) {
          var e = t.velocity,
            n = void 0 === e ? 0 : e,
            r = t.from,
            o = void 0 === r ? 0 : r,
            i = t.power,
            a = void 0 === i ? 0.8 : i,
            s = t.timeConstant,
            u = void 0 === s ? 350 : s,
            l = t.restDelta,
            c = void 0 === l ? 0.5 : l,
            f = t.modifyTarget,
            d = { done: !1, value: o },
            p = a * n,
            v = o + p,
            h = void 0 === f ? v : f(v);
          return (
            h !== v && (p = h - o),
            {
              next: function (t) {
                var e = -p * Math.exp(-t / u);
                return (d.done = !(e > c || e < -c)), (d.value = d.done ? h : h + e), d;
              },
              flipTarget: function () {}
            }
          );
        }
      };
      var Pr = (1 / 60) * 1e3,
        Er =
          "undefined" !== typeof performance
            ? function () {
                return performance.now();
              }
            : function () {
                return Date.now();
              },
        Sr =
          "undefined" !== typeof window
            ? function (t) {
                return window.requestAnimationFrame(t);
              }
            : function (t) {
                return setTimeout(function () {
                  return t(Er());
                }, Pr);
              };
      var Ar = !0,
        Tr = !1,
        Or = !1,
        Cr = { delta: 0, timestamp: 0 },
        kr = ["read", "update", "preRender", "render", "postRender"],
        Vr = kr.reduce(function (t, e) {
          return (
            (t[e] = (function (t) {
              var e = [],
                n = [],
                r = 0,
                o = !1,
                i = !1,
                a = new WeakSet(),
                s = {
                  schedule: function (t) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] && o,
                      s = i ? e : n;
                    return (
                      arguments.length > 1 && void 0 !== arguments[1] && arguments[1] && a.add(t),
                      -1 === s.indexOf(t) && (s.push(t), i && o && (r = e.length)),
                      t
                    );
                  },
                  cancel: function (t) {
                    var e = n.indexOf(t);
                    -1 !== e && n.splice(e, 1), a.delete(t);
                  },
                  process: function (u) {
                    if (o) i = !0;
                    else {
                      o = !0;
                      var l = [n, e];
                      if (((e = l[0]), ((n = l[1]).length = 0), (r = e.length)))
                        for (var c = 0; c < r; c++) {
                          var f = e[c];
                          f(u), a.has(f) && (s.schedule(f), t());
                        }
                      (o = !1), i && ((i = !1), s.process(u));
                    }
                  }
                };
              return s;
            })(function () {
              return (Tr = !0);
            })),
            t
          );
        }, {}),
        Rr = kr.reduce(function (t, e) {
          var n = Vr[e];
          return (
            (t[e] = function (t) {
              var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
              return Tr || Br(), n.schedule(t, e, r);
            }),
            t
          );
        }, {}),
        Mr = kr.reduce(function (t, e) {
          return (t[e] = Vr[e].cancel), t;
        }, {}),
        Lr = kr.reduce(function (t, e) {
          return (
            (t[e] = function () {
              return Vr[e].process(Cr);
            }),
            t
          );
        }, {}),
        Dr = function (t) {
          return Vr[t].process(Cr);
        },
        jr = function t(e) {
          (Tr = !1),
            (Cr.delta = Ar ? Pr : Math.max(Math.min(e - Cr.timestamp, 40), 1)),
            (Cr.timestamp = e),
            (Or = !0),
            kr.forEach(Dr),
            (Or = !1),
            Tr && ((Ar = !1), Sr(t));
        },
        Br = function () {
          (Tr = !0), (Ar = !0), Or || Sr(jr);
        },
        Fr = function () {
          return Cr;
        },
        Ir = Rr;
      function Ur(t, e) {
        return t - e - (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0);
      }
      var Nr = function (t) {
        var e = function (e) {
          var n = e.delta;
          return t(n);
        };
        return {
          start: function () {
            return Ir.update(e, !0);
          },
          stop: function () {
            return Mr.update(e);
          }
        };
      };
      function zr(t) {
        var e,
          n,
          r,
          o,
          i,
          a = t.from,
          s = t.autoplay,
          u = void 0 === s || s,
          l = t.driver,
          c = void 0 === l ? Nr : l,
          f = t.elapsed,
          d = void 0 === f ? 0 : f,
          p = t.repeat,
          v = void 0 === p ? 0 : p,
          h = t.repeatType,
          m = void 0 === h ? "loop" : h,
          g = t.repeatDelay,
          y = void 0 === g ? 0 : g,
          b = t.onPlay,
          w = t.onStop,
          P = t.onComplete,
          E = t.onRepeat,
          S = t.onUpdate,
          A = x(t, [
            "from",
            "autoplay",
            "driver",
            "elapsed",
            "repeat",
            "repeatType",
            "repeatDelay",
            "onPlay",
            "onStop",
            "onComplete",
            "onRepeat",
            "onUpdate"
          ]),
          T = A.to,
          O = 0,
          C = A.duration,
          k = !1,
          V = !0,
          R = (function (t) {
            if (Array.isArray(t.to)) return xr;
            if (wr[t.type]) return wr[t.type];
            var e = new Set(Object.keys(t));
            return e.has("ease") || (e.has("duration") && !e.has("dampingRatio"))
              ? xr
              : e.has("dampingRatio") || e.has("stiffness") || e.has("mass") || e.has("damping") || e.has("restSpeed") || e.has("restDelta")
              ? yn
              : xr;
          })(A);
        (null === (n = (e = R).needsInterpolation) || void 0 === n ? void 0 : n.call(e, a, T)) &&
          ((i = er([0, 100], [a, T], { clamp: !1 })), (a = 0), (T = 100));
        var M = R(Object.assign(Object.assign({}, A), { from: a, to: T }));
        function L() {
          O++,
            "reverse" === m
              ? (d = (function (t, e) {
                  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                  return arguments.length > 3 && void 0 !== arguments[3] && !arguments[3] ? e - (t - e) + n : Ur(e + -t, e, n);
                })(d, C, y, (V = O % 2 === 0)))
              : ((d = Ur(d, C, y)), "mirror" === m && M.flipTarget()),
            (k = !1),
            E && E();
        }
        function D(t) {
          if ((V || (t = -t), (d += t), !k)) {
            var e = M.next(Math.max(0, d));
            (o = e.value), i && (o = i(o)), (k = V ? e.done : d <= 0);
          }
          null === S || void 0 === S || S(o),
            k &&
              (0 === O && ((null !== C && void 0 !== C) || (C = d)),
              O < v
                ? (function (t, e, n, r) {
                    return r ? t >= e + n : t <= -n;
                  })(d, C, y, V) && L()
                : (r.stop(), P && P()));
        }
        return (
          u && (null === b || void 0 === b || b(), (r = c(D)).start()),
          {
            stop: function () {
              null === w || void 0 === w || w(), r.stop();
            }
          }
        );
      }
      function Hr(t, e) {
        return e ? t * (1e3 / e) : 0;
      }
      var Wr = function (t) {
          return 1e3 * t;
        },
        _r = function (t, e) {
          return 1 - 3 * e + 3 * t;
        },
        qr = function (t, e) {
          return 3 * e - 6 * t;
        },
        Yr = function (t) {
          return 3 * t;
        },
        Xr = function (t, e, n) {
          return ((_r(e, n) * t + qr(e, n)) * t + Yr(e)) * t;
        },
        Zr = function (t, e, n) {
          return 3 * _r(e, n) * t * t + 2 * qr(e, n) * t + Yr(e);
        },
        Gr = 1e-7,
        $r = 10;
      var Kr = 8;
      var Jr = 0.1;
      function Qr(t, e, n, r) {
        if (t === e && n === r) return ar;
        for (var o = new Float32Array(11), i = 0; i < 11; ++i) o[i] = Xr(i * Jr, t, n);
        function a(e) {
          for (var r = 0, i = 1; 10 !== i && o[i] <= e; ++i) r += Jr;
          --i;
          var a = r + ((e - o[i]) / (o[i + 1] - o[i])) * Jr,
            s = Zr(a, t, n);
          return s >= 0.001
            ? (function (t, e, n, r) {
                for (var o = 0; o < Kr; ++o) {
                  var i = Zr(e, n, r);
                  if (0 === i) return e;
                  e -= (Xr(e, n, r) - t) / i;
                }
                return e;
              })(e, a, t, n)
            : 0 === s
            ? a
            : (function (t, e, n, r, o) {
                var i,
                  a,
                  s = 0;
                do {
                  (i = Xr((a = e + (n - e) / 2), r, o) - t) > 0 ? (n = a) : (e = a);
                } while (Math.abs(i) > Gr && ++s < $r);
                return a;
              })(e, r, r + Jr, t, n);
        }
        return function (t) {
          return 0 === t || 1 === t ? t : Xr(a(t), e, r);
        };
      }
      var to = {
          linear: ar,
          easeIn: sr,
          easeInOut: lr,
          easeOut: ur,
          circIn: cr,
          circInOut: dr,
          circOut: fr,
          backIn: pr,
          backInOut: hr,
          backOut: vr,
          anticipate: mr,
          bounceIn: yr,
          bounceInOut: function (t) {
            return t < 0.5 ? 0.5 * (1 - gr(1 - 2 * t)) : 0.5 * gr(2 * t - 1) + 0.5;
          },
          bounceOut: gr
        },
        eo = function (t) {
          if (Array.isArray(t)) {
            O(4 === t.length, "Cubic bezier arrays must contain four numerical values.");
            var e = w(t, 4);
            return Qr(e[0], e[1], e[2], e[3]);
          }
          return "string" === typeof t ? (O(void 0 !== to[t], "Invalid easing type '".concat(t, "'")), to[t]) : t;
        },
        no = function (t) {
          return Array.isArray(t) && "number" !== typeof t[0];
        },
        ro = function (t, e) {
          return (
            "zIndex" !== t &&
            (!("number" !== typeof e && !Array.isArray(e)) || !("string" !== typeof e || !Yn.test(e) || e.startsWith("url(")))
          );
        },
        oo = function () {
          return { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 };
        },
        io = function (t) {
          return { type: "spring", stiffness: 550, damping: 0 === t ? 2 * Math.sqrt(550) : 30, restSpeed: 10 };
        },
        ao = function () {
          return { type: "keyframes", ease: "linear", duration: 0.3 };
        },
        so = function (t) {
          return { type: "keyframes", duration: 0.8, values: t };
        },
        uo = {
          x: oo,
          y: oo,
          z: oo,
          rotate: oo,
          rotateX: oo,
          rotateY: oo,
          rotateZ: oo,
          scaleX: io,
          scaleY: io,
          scale: io,
          opacity: ao,
          backgroundColor: ao,
          color: ao,
          default: io
        },
        lo = function (t, e) {
          var n;
          return (n = ae(e) ? so : uo[t] || uo.default), b({ to: e }, n(e));
        },
        co = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function fo(t) {
        var e = t.slice(0, -1).split("("),
          n = (0, xn.Z)(e, 2),
          r = n[0],
          o = n[1];
        if ("drop-shadow" === r) return t;
        var i = o.match(xt) || [],
          a = (0, xn.Z)(i, 1)[0];
        if (!a) return t;
        var s = o.replace(a, ""),
          u = co.has(r) ? 1 : 0;
        return a !== o && (u *= 100), r + "(" + u + s + ")";
      }
      var po = /([a-z-]*)\(.*?\)/g,
        vo = Object.assign(Object.assign({}, Yn), {
          getAnimatableNone: function (t) {
            var e = t.match(po);
            return e ? e.map(fo).join(" ") : t;
          }
        }),
        ho = b(b({}, jt), {
          color: Un,
          backgroundColor: Un,
          outlineColor: Un,
          fill: Un,
          stroke: Un,
          borderColor: Un,
          borderTopColor: Un,
          borderRightColor: Un,
          borderBottomColor: Un,
          borderLeftColor: Un,
          filter: vo,
          WebkitFilter: vo
        }),
        mo = function (t) {
          return ho[t];
        };
      function go(t, e) {
        var n,
          r = mo(t);
        return r !== vo && (r = Yn), null === (n = r.getAnimatableNone) || void 0 === n ? void 0 : n.call(r, e);
      }
      var yo = { current: !1 };
      var bo = !1;
      function xo(t, e, n) {
        var r;
        return (
          Array.isArray(e.to) && ((null !== (r = t.duration) && void 0 !== r) || (t.duration = 0.8)),
          (function (t) {
            Array.isArray(t.to) && null === t.to[0] && ((t.to = P([], w(t.to), !1)), (t.to[0] = t.from));
          })(e),
          (function (t) {
            t.when, t.delay, t.delayChildren, t.staggerChildren, t.staggerDirection, t.repeat, t.repeatType, t.repeatDelay, t.from;
            var e = x(t, [
              "when",
              "delay",
              "delayChildren",
              "staggerChildren",
              "staggerDirection",
              "repeat",
              "repeatType",
              "repeatDelay",
              "from"
            ]);
            return !!Object.keys(e).length;
          })(t) || (t = b(b({}, t), lo(n, e.to))),
          b(
            b({}, e),
            (function (t) {
              var e = t.ease,
                n = t.times,
                r = t.yoyo,
                o = t.flip,
                i = t.loop,
                a = x(t, ["ease", "times", "yoyo", "flip", "loop"]),
                s = b({}, a);
              return (
                n && (s.offset = n),
                a.duration && (s.duration = Wr(a.duration)),
                a.repeatDelay && (s.repeatDelay = Wr(a.repeatDelay)),
                e && (s.ease = no(e) ? e.map(eo) : eo(e)),
                "tween" === a.type && (s.type = "keyframes"),
                (r || i || o) &&
                  (T(!bo, "yoyo, loop and flip have been removed from the API. Replace with repeat and repeatType options."),
                  (bo = !0),
                  r ? (s.repeatType = "reverse") : i ? (s.repeatType = "loop") : o && (s.repeatType = "mirror"),
                  (s.repeat = i || r || o || a.repeat)),
                "spring" !== a.type && (s.type = "keyframes"),
                s
              );
            })(t)
          )
        );
      }
      function wo(t, e, n, r, o) {
        var i,
          a = So(r, t),
          s = null !== (i = a.from) && void 0 !== i ? i : e.get(),
          u = ro(t, n);
        "none" === s && u && "string" === typeof n
          ? (s = go(t, n))
          : Po(s) && "string" === typeof n
          ? (s = Eo(n))
          : !Array.isArray(n) && Po(n) && "string" === typeof s && (n = Eo(s));
        var l = ro(t, s);
        return (
          T(
            l === u,
            "You are trying to animate "
              .concat(t, ' from "')
              .concat(s, '" to "')
              .concat(n, '". ')
              .concat(s, " is not an animatable value - to enable this animation set ")
              .concat(s, " to a value animatable to ")
              .concat(n, " via the `style` property.")
          ),
          l && u && !1 !== a.type
            ? function () {
                var r = {
                  from: s,
                  to: n,
                  velocity: e.getVelocity(),
                  onComplete: o,
                  onUpdate: function (t) {
                    return e.set(t);
                  }
                };
                return "inertia" === a.type || "decay" === a.type
                  ? (function (t) {
                      var e,
                        n = t.from,
                        r = void 0 === n ? 0 : n,
                        o = t.velocity,
                        i = void 0 === o ? 0 : o,
                        a = t.min,
                        s = t.max,
                        u = t.power,
                        l = void 0 === u ? 0.8 : u,
                        c = t.timeConstant,
                        f = void 0 === c ? 750 : c,
                        d = t.bounceStiffness,
                        p = void 0 === d ? 500 : d,
                        v = t.bounceDamping,
                        h = void 0 === v ? 10 : v,
                        m = t.restDelta,
                        g = void 0 === m ? 1 : m,
                        y = t.modifyTarget,
                        b = t.driver,
                        x = t.onUpdate,
                        w = t.onComplete,
                        P = t.onStop;
                      function E(t) {
                        return (void 0 !== a && t < a) || (void 0 !== s && t > s);
                      }
                      function S(t) {
                        return void 0 === a ? s : void 0 === s || Math.abs(a - t) < Math.abs(s - t) ? a : s;
                      }
                      function A(t) {
                        null === e || void 0 === e || e.stop(),
                          (e = zr(
                            Object.assign(Object.assign({}, t), {
                              driver: b,
                              onUpdate: function (e) {
                                var n;
                                null === x || void 0 === x || x(e), null === (n = t.onUpdate) || void 0 === n || n.call(t, e);
                              },
                              onComplete: w,
                              onStop: P
                            })
                          ));
                      }
                      function T(t) {
                        A(Object.assign({ type: "spring", stiffness: p, damping: h, restDelta: g }, t));
                      }
                      if (E(r)) T({ from: r, velocity: i, to: S(r) });
                      else {
                        var O = l * i + r;
                        "undefined" !== typeof y && (O = y(O));
                        var C,
                          k,
                          V = S(O),
                          R = V === a ? -1 : 1;
                        A({
                          type: "decay",
                          from: r,
                          velocity: i,
                          timeConstant: f,
                          power: l,
                          restDelta: g,
                          modifyTarget: y,
                          onUpdate: E(O)
                            ? function (t) {
                                (C = k),
                                  (k = t),
                                  (i = Hr(t - C, Fr().delta)),
                                  ((1 === R && t > V) || (-1 === R && t < V)) && T({ from: t, to: V, velocity: i });
                              }
                            : void 0
                        });
                      }
                      return {
                        stop: function () {
                          return null === e || void 0 === e ? void 0 : e.stop();
                        }
                      };
                    })(b(b({}, r), a))
                  : zr(
                      b(b({}, xo(a, r, t)), {
                        onUpdate: function (t) {
                          var e;
                          r.onUpdate(t), null === (e = a.onUpdate) || void 0 === e || e.call(a, t);
                        },
                        onComplete: function () {
                          var t;
                          r.onComplete(), null === (t = a.onComplete) || void 0 === t || t.call(a);
                        }
                      })
                    );
              }
            : function () {
                var t,
                  r,
                  i = ue(n);
                return (
                  e.set(i),
                  o(),
                  null === (t = null === a || void 0 === a ? void 0 : a.onUpdate) || void 0 === t || t.call(a, i),
                  null === (r = null === a || void 0 === a ? void 0 : a.onComplete) || void 0 === r || r.call(a),
                  { stop: function () {} }
                );
              }
        );
      }
      function Po(t) {
        return 0 === t || ("string" === typeof t && 0 === parseFloat(t) && -1 === t.indexOf(" "));
      }
      function Eo(t) {
        return "number" === typeof t ? 0 : go("", t);
      }
      function So(t, e) {
        return t[e] || t.default || t;
      }
      function Ao(t, e, n, r) {
        return (
          void 0 === r && (r = {}),
          yo.current && (r = { type: !1 }),
          e.start(function (o) {
            var i,
              a,
              s = wo(t, e, n, r, o),
              u = (function (t, e) {
                var n, r;
                return null !== (r = null !== (n = (So(t, e) || {}).delay) && void 0 !== n ? n : t.delay) && void 0 !== r ? r : 0;
              })(r, t),
              l = function () {
                return (a = s());
              };
            return (
              u ? (i = window.setTimeout(l, Wr(u))) : l(),
              function () {
                clearTimeout(i), null === a || void 0 === a || a.stop();
              }
            );
          })
        );
      }
      var To = function (t) {
        return /^0[^.\s]+$/.test(t);
      };
      function Oo(t, e) {
        -1 === t.indexOf(e) && t.push(e);
      }
      function Co(t, e) {
        var n = t.indexOf(e);
        n > -1 && t.splice(n, 1);
      }
      var ko = (function () {
          function t() {
            this.subscriptions = [];
          }
          return (
            (t.prototype.add = function (t) {
              var e = this;
              return (
                Oo(this.subscriptions, t),
                function () {
                  return Co(e.subscriptions, t);
                }
              );
            }),
            (t.prototype.notify = function (t, e, n) {
              var r = this.subscriptions.length;
              if (r)
                if (1 === r) this.subscriptions[0](t, e, n);
                else
                  for (var o = 0; o < r; o++) {
                    var i = this.subscriptions[o];
                    i && i(t, e, n);
                  }
            }),
            (t.prototype.getSize = function () {
              return this.subscriptions.length;
            }),
            (t.prototype.clear = function () {
              this.subscriptions.length = 0;
            }),
            t
          );
        })(),
        Vo = (function () {
          function t(t) {
            var e,
              n = this;
            (this.version = "6.5.1"),
              (this.timeDelta = 0),
              (this.lastUpdated = 0),
              (this.updateSubscribers = new ko()),
              (this.velocityUpdateSubscribers = new ko()),
              (this.renderSubscribers = new ko()),
              (this.canTrackVelocity = !1),
              (this.updateAndNotify = function (t, e) {
                void 0 === e && (e = !0), (n.prev = n.current), (n.current = t);
                var r = Fr(),
                  o = r.delta,
                  i = r.timestamp;
                n.lastUpdated !== i && ((n.timeDelta = o), (n.lastUpdated = i), Ir.postRender(n.scheduleVelocityCheck)),
                  n.prev !== n.current && n.updateSubscribers.notify(n.current),
                  n.velocityUpdateSubscribers.getSize() && n.velocityUpdateSubscribers.notify(n.getVelocity()),
                  e && n.renderSubscribers.notify(n.current);
              }),
              (this.scheduleVelocityCheck = function () {
                return Ir.postRender(n.velocityCheck);
              }),
              (this.velocityCheck = function (t) {
                t.timestamp !== n.lastUpdated && ((n.prev = n.current), n.velocityUpdateSubscribers.notify(n.getVelocity()));
              }),
              (this.hasAnimated = !1),
              (this.prev = this.current = t),
              (this.canTrackVelocity = ((e = this.current), !isNaN(parseFloat(e))));
          }
          return (
            (t.prototype.onChange = function (t) {
              return this.updateSubscribers.add(t);
            }),
            (t.prototype.clearListeners = function () {
              this.updateSubscribers.clear();
            }),
            (t.prototype.onRenderRequest = function (t) {
              return t(this.get()), this.renderSubscribers.add(t);
            }),
            (t.prototype.attach = function (t) {
              this.passiveEffect = t;
            }),
            (t.prototype.set = function (t, e) {
              void 0 === e && (e = !0), e && this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t, e);
            }),
            (t.prototype.get = function () {
              return this.current;
            }),
            (t.prototype.getPrevious = function () {
              return this.prev;
            }),
            (t.prototype.getVelocity = function () {
              return this.canTrackVelocity ? Hr(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0;
            }),
            (t.prototype.start = function (t) {
              var e = this;
              return (
                this.stop(),
                new Promise(function (n) {
                  (e.hasAnimated = !0), (e.stopAnimation = t(n));
                }).then(function () {
                  return e.clearAnimation();
                })
              );
            }),
            (t.prototype.stop = function () {
              this.stopAnimation && this.stopAnimation(), this.clearAnimation();
            }),
            (t.prototype.isAnimating = function () {
              return !!this.stopAnimation;
            }),
            (t.prototype.clearAnimation = function () {
              this.stopAnimation = null;
            }),
            (t.prototype.destroy = function () {
              this.updateSubscribers.clear(), this.renderSubscribers.clear(), this.stop();
            }),
            t
          );
        })();
      function Ro(t) {
        return new Vo(t);
      }
      var Mo = function (t) {
          return function (e) {
            return e.test(t);
          };
        },
        Lo = [
          Rt,
          Ot,
          Tt,
          At,
          kt,
          Ct,
          {
            test: function (t) {
              return "auto" === t;
            },
            parse: function (t) {
              return t;
            }
          }
        ],
        Do = function (t) {
          return Lo.find(Mo(t));
        },
        jo = P(P([], w(Lo), !1), [Un, Yn], !1),
        Bo = function (t) {
          return jo.find(Mo(t));
        };
      function Fo(t, e, n) {
        t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, Ro(n));
      }
      function Io(t, e) {
        var n = _(t, e),
          r = n ? t.makeTargetAnimatable(n, !1) : {},
          o = r.transitionEnd,
          i = void 0 === o ? {} : o;
        r.transition;
        var a = x(r, ["transitionEnd", "transition"]);
        for (var s in (a = b(b({}, a), i))) {
          Fo(t, s, ue(a[s]));
        }
      }
      function Uo(t, e) {
        if (e) return (e[t] || e.default || e).from;
      }
      function No(t, e, n) {
        var r;
        void 0 === n && (n = {});
        var o = _(t, e, n.custom),
          i = (o || {}).transition,
          a = void 0 === i ? t.getDefaultTransition() || {} : i;
        n.transitionOverride && (a = n.transitionOverride);
        var s = o
            ? function () {
                return zo(t, o, n);
              }
            : function () {
                return Promise.resolve();
              },
          u = (null === (r = t.variantChildren) || void 0 === r ? void 0 : r.size)
            ? function (r) {
                void 0 === r && (r = 0);
                var o = a.delayChildren,
                  i = void 0 === o ? 0 : o,
                  s = a.staggerChildren,
                  u = a.staggerDirection;
                return (function (t, e, n, r, o, i) {
                  void 0 === n && (n = 0);
                  void 0 === r && (r = 0);
                  void 0 === o && (o = 1);
                  var a = [],
                    s = (t.variantChildren.size - 1) * r,
                    u =
                      1 === o
                        ? function (t) {
                            return void 0 === t && (t = 0), t * r;
                          }
                        : function (t) {
                            return void 0 === t && (t = 0), s - t * r;
                          };
                  return (
                    Array.from(t.variantChildren)
                      .sort(Ho)
                      .forEach(function (t, r) {
                        a.push(
                          No(t, e, b(b({}, i), { delay: n + u(r) })).then(function () {
                            return t.notifyAnimationComplete(e);
                          })
                        );
                      }),
                    Promise.all(a)
                  );
                })(t, e, i + r, s, u, n);
              }
            : function () {
                return Promise.resolve();
              },
          l = a.when;
        if (l) {
          var c = w("beforeChildren" === l ? [s, u] : [u, s], 2),
            f = c[0],
            d = c[1];
          return f().then(d);
        }
        return Promise.all([s(), u(n.delay)]);
      }
      function zo(t, e, n) {
        var r,
          o = void 0 === n ? {} : n,
          i = o.delay,
          a = void 0 === i ? 0 : i,
          s = o.transitionOverride,
          u = o.type,
          l = t.makeTargetAnimatable(e),
          c = l.transition,
          f = void 0 === c ? t.getDefaultTransition() : c,
          d = l.transitionEnd,
          p = x(l, ["transition", "transitionEnd"]);
        s && (f = s);
        var v = [],
          h = u && (null === (r = t.animationState) || void 0 === r ? void 0 : r.getState()[u]);
        for (var m in p) {
          var g = t.getValue(m),
            y = p[m];
          if (!(!g || void 0 === y || (h && Wo(h, m)))) {
            var w = b({ delay: a }, f);
            t.shouldReduceMotion && ct(m) && (w = b(b({}, w), { type: !1, delay: 0 }));
            var P = Ao(m, g, y, w);
            v.push(P);
          }
        }
        return Promise.all(v).then(function () {
          d && Io(t, d);
        });
      }
      function Ho(t, e) {
        return t.sortNodePosition(e);
      }
      function Wo(t, e) {
        var n = t.protectedKeys,
          r = t.needsAnimating,
          o = n.hasOwnProperty(e) && !0 !== r[e];
        return (r[e] = !1), o;
      }
      var _o = [pe.Animate, pe.InView, pe.Focus, pe.Hover, pe.Tap, pe.Drag, pe.Exit],
        qo = P([], w(_o), !1).reverse(),
        Yo = _o.length;
      function Xo(t) {
        return function (e) {
          return Promise.all(
            e.map(function (e) {
              var n = e.animation,
                r = e.options;
              return (function (t, e, n) {
                var r;
                if ((void 0 === n && (n = {}), t.notifyAnimationStart(e), Array.isArray(e))) {
                  var o = e.map(function (e) {
                    return No(t, e, n);
                  });
                  r = Promise.all(o);
                } else if ("string" === typeof e) r = No(t, e, n);
                else {
                  var i = "function" === typeof e ? _(t, e, n.custom) : e;
                  r = zo(t, i, n);
                }
                return r.then(function () {
                  return t.notifyAnimationComplete(e);
                });
              })(t, n, r);
            })
          );
        };
      }
      function Zo(t) {
        var e = Xo(t),
          n = (function () {
            var t;
            return (
              ((t = {})[pe.Animate] = Go(!0)),
              (t[pe.InView] = Go()),
              (t[pe.Hover] = Go()),
              (t[pe.Tap] = Go()),
              (t[pe.Drag] = Go()),
              (t[pe.Focus] = Go()),
              (t[pe.Exit] = Go()),
              t
            );
          })(),
          r = {},
          o = !0,
          i = function (e, n) {
            var r = _(t, n);
            if (r) {
              r.transition;
              var o = r.transitionEnd,
                i = x(r, ["transition", "transitionEnd"]);
              e = b(b(b({}, e), i), o);
            }
            return e;
          };
        function a(a, s) {
          for (
            var u,
              l = t.getProps(),
              c = t.getVariantContext(!0) || {},
              f = [],
              d = new Set(),
              p = {},
              v = 1 / 0,
              h = function (e) {
                var r = qo[e],
                  h = n[r],
                  m = null !== (u = l[r]) && void 0 !== u ? u : c[r],
                  g = H(m),
                  y = r === s ? h.isActive : null;
                !1 === y && (v = e);
                var x = m === c[r] && m !== l[r] && g;
                if (
                  (x && o && t.manuallyAnimateOnMount && (x = !1),
                  (h.protectedKeys = b({}, p)),
                  (!h.isActive && null === y) || (!m && !h.prevProp) || ie(m) || "boolean" === typeof m)
                )
                  return "continue";
                var E = (function (t, e) {
                    if ("string" === typeof e) return e !== t;
                    if (z(e)) return !on(e, t);
                    return !1;
                  })(h.prevProp, m),
                  S = E || (r === s && h.isActive && !x && g) || (e > v && g),
                  A = Array.isArray(m) ? m : [m],
                  T = A.reduce(i, {});
                !1 === y && (T = {});
                var O = h.prevResolvedValues,
                  C = void 0 === O ? {} : O,
                  k = b(b({}, C), T),
                  V = function (t) {
                    (S = !0), d.delete(t), (h.needsAnimating[t] = !0);
                  };
                for (var R in k) {
                  var M = T[R],
                    L = C[R];
                  p.hasOwnProperty(R) ||
                    (M !== L
                      ? ae(M) && ae(L)
                        ? !on(M, L) || E
                          ? V(R)
                          : (h.protectedKeys[R] = !0)
                        : void 0 !== M
                        ? V(R)
                        : d.add(R)
                      : void 0 !== M && d.has(R)
                      ? V(R)
                      : (h.protectedKeys[R] = !0));
                }
                (h.prevProp = m),
                  (h.prevResolvedValues = T),
                  h.isActive && (p = b(b({}, p), T)),
                  o && t.blockInitialAnimation && (S = !1),
                  S &&
                    !x &&
                    f.push.apply(
                      f,
                      P(
                        [],
                        w(
                          A.map(function (t) {
                            return { animation: t, options: b({ type: r }, a) };
                          })
                        ),
                        !1
                      )
                    );
              },
              m = 0;
            m < Yo;
            m++
          )
            h(m);
          if (((r = b({}, p)), d.size)) {
            var g = {};
            d.forEach(function (e) {
              var n = t.getBaseTarget(e);
              void 0 !== n && (g[e] = n);
            }),
              f.push({ animation: g });
          }
          var y = Boolean(f.length);
          return o && !1 === l.initial && !t.manuallyAnimateOnMount && (y = !1), (o = !1), y ? e(f) : Promise.resolve();
        }
        return {
          isAnimated: function (t) {
            return void 0 !== r[t];
          },
          animateChanges: a,
          setActive: function (e, r, o) {
            var i;
            if (n[e].isActive === r) return Promise.resolve();
            null === (i = t.variantChildren) ||
              void 0 === i ||
              i.forEach(function (t) {
                var n;
                return null === (n = t.animationState) || void 0 === n ? void 0 : n.setActive(e, r);
              }),
              (n[e].isActive = r);
            var s = a(o, e);
            for (var u in n) n[u].protectedKeys = {};
            return s;
          },
          setAnimateFunction: function (n) {
            e = n(t);
          },
          getState: function () {
            return n;
          }
        };
      }
      function Go(t) {
        return void 0 === t && (t = !1), { isActive: t, protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {} };
      }
      var $o = {
          animation: Je(function (t) {
            var e = t.visualElement,
              n = t.animate;
            e.animationState || (e.animationState = Zo(e)),
              ie(n) &&
                (0, i.useEffect)(
                  function () {
                    return n.subscribe(e);
                  },
                  [n]
                );
          }),
          exit: Je(function (t) {
            var e = t.custom,
              n = t.visualElement,
              r = w(rn(), 2),
              o = r[0],
              a = r[1],
              s = (0, i.useContext)(L);
            (0, i.useEffect)(
              function () {
                var t, r;
                n.isPresent = o;
                var i =
                  null === (t = n.animationState) || void 0 === t
                    ? void 0
                    : t.setActive(pe.Exit, !o, {
                        custom: null !== (r = null === s || void 0 === s ? void 0 : s.custom) && void 0 !== r ? r : e
                      });
                !o && (null === i || void 0 === i || i.then(a));
              },
              [o]
            );
          })
        },
        Ko = function (t) {
          return t.hasOwnProperty("x") && t.hasOwnProperty("y");
        },
        Jo = function (t) {
          return Ko(t) && t.hasOwnProperty("z");
        },
        Qo = function (t, e) {
          return Math.abs(t - e);
        };
      function ti(t, e) {
        if (Xn(t) && Xn(e)) return Qo(t, e);
        if (Ko(t) && Ko(e)) {
          var n = Qo(t.x, e.x),
            r = Qo(t.y, e.y),
            o = Jo(t) && Jo(e) ? Qo(t.z, e.z) : 0;
          return Math.sqrt(Math.pow(n, 2) + Math.pow(r, 2) + Math.pow(o, 2));
        }
      }
      var ei = (function () {
        function t(t, e, n) {
          var r = this,
            o = (void 0 === n ? {} : n).transformPagePoint;
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.updatePoint = function () {
              if (r.lastMoveEvent && r.lastMoveEventInfo) {
                var t = oi(r.lastMoveEventInfo, r.history),
                  e = null !== r.startEvent,
                  n = ti(t.offset, { x: 0, y: 0 }) >= 3;
                if (e || n) {
                  var o = t.point,
                    i = Fr().timestamp;
                  r.history.push(b(b({}, o), { timestamp: i }));
                  var a = r.handlers,
                    s = a.onStart,
                    u = a.onMove;
                  e || (s && s(r.lastMoveEvent, t), (r.startEvent = r.lastMoveEvent)), u && u(r.lastMoveEvent, t);
                }
              }
            }),
            (this.handlePointerMove = function (t, e) {
              (r.lastMoveEvent = t),
                (r.lastMoveEventInfo = ni(e, r.transformPagePoint)),
                ye(t) && 0 === t.buttons ? r.handlePointerUp(t, e) : Ir.update(r.updatePoint, !0);
            }),
            (this.handlePointerUp = function (t, e) {
              r.end();
              var n = r.handlers,
                o = n.onEnd,
                i = n.onSessionEnd,
                a = oi(ni(e, r.transformPagePoint), r.history);
              r.startEvent && o && o(t, a), i && i(t, a);
            }),
            !(be(t) && t.touches.length > 1))
          ) {
            (this.handlers = e), (this.transformPagePoint = o);
            var i = ni(Ee(t), this.transformPagePoint),
              a = i.point,
              s = Fr().timestamp;
            this.history = [b(b({}, a), { timestamp: s })];
            var u = e.onSessionStart;
            u && u(t, oi(i, this.history)),
              (this.removeListeners = He(
                Re(window, "pointermove", this.handlePointerMove),
                Re(window, "pointerup", this.handlePointerUp),
                Re(window, "pointercancel", this.handlePointerUp)
              ));
          }
        }
        return (
          (t.prototype.updateHandlers = function (t) {
            this.handlers = t;
          }),
          (t.prototype.end = function () {
            this.removeListeners && this.removeListeners(), Mr.update(this.updatePoint);
          }),
          t
        );
      })();
      function ni(t, e) {
        return e ? { point: e(t.point) } : t;
      }
      function ri(t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }
      function oi(t, e) {
        var n = t.point;
        return { point: n, delta: ri(n, ai(e)), offset: ri(n, ii(e)), velocity: si(e, 0.1) };
      }
      function ii(t) {
        return t[0];
      }
      function ai(t) {
        return t[t.length - 1];
      }
      function si(t, e) {
        if (t.length < 2) return { x: 0, y: 0 };
        for (var n = t.length - 1, r = null, o = ai(t); n >= 0 && ((r = t[n]), !(o.timestamp - r.timestamp > Wr(e))); ) n--;
        if (!r) return { x: 0, y: 0 };
        var i = (o.timestamp - r.timestamp) / 1e3;
        if (0 === i) return { x: 0, y: 0 };
        var a = { x: (o.x - r.x) / i, y: (o.y - r.y) / i };
        return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a;
      }
      function ui(t) {
        return t.max - t.min;
      }
      function li(t, e, n) {
        return void 0 === e && (e = 0), void 0 === n && (n = 0.01), ti(t, e) < n;
      }
      function ci(t, e, n, r) {
        void 0 === r && (r = 0.5),
          (t.origin = r),
          (t.originPoint = Pn(e.min, e.max, t.origin)),
          (t.scale = ui(n) / ui(e)),
          (li(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1),
          (t.translate = Pn(n.min, n.max, t.origin) - t.originPoint),
          (li(t.translate) || isNaN(t.translate)) && (t.translate = 0);
      }
      function fi(t, e, n, r) {
        ci(t.x, e.x, n.x, null === r || void 0 === r ? void 0 : r.originX),
          ci(t.y, e.y, n.y, null === r || void 0 === r ? void 0 : r.originY);
      }
      function di(t, e, n) {
        (t.min = n.min + e.min), (t.max = t.min + ui(e));
      }
      function pi(t, e, n) {
        (t.min = e.min - n.min), (t.max = t.min + ui(e));
      }
      function vi(t, e, n) {
        pi(t.x, e.x, n.x), pi(t.y, e.y, n.y);
      }
      function hi(t, e, n) {
        return { min: void 0 !== e ? t.min + e : void 0, max: void 0 !== n ? t.max + n - (t.max - t.min) : void 0 };
      }
      function mi(t, e) {
        var n,
          r = e.min - t.min,
          o = e.max - t.max;
        return e.max - e.min < t.max - t.min && ((r = (n = w([o, r], 2))[0]), (o = n[1])), { min: r, max: o };
      }
      var gi = 0.35;
      function yi(t, e, n) {
        return { min: bi(t, e), max: bi(t, n) };
      }
      function bi(t, e) {
        var n;
        return "number" === typeof t ? t : null !== (n = t[e]) && void 0 !== n ? n : 0;
      }
      var xi = function () {
          return { x: { translate: 0, scale: 1, origin: 0, originPoint: 0 }, y: { translate: 0, scale: 1, origin: 0, originPoint: 0 } };
        },
        wi = function () {
          return { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
        };
      function Pi(t) {
        return [t("x"), t("y")];
      }
      function Ei(t) {
        var e = t.top;
        return { x: { min: t.left, max: t.right }, y: { min: e, max: t.bottom } };
      }
      function Si(t) {
        return void 0 === t || 1 === t;
      }
      function Ai(t) {
        var e = t.scale,
          n = t.scaleX,
          r = t.scaleY;
        return !Si(e) || !Si(n) || !Si(r);
      }
      function Ti(t) {
        return Ai(t) || Oi(t.x) || Oi(t.y) || t.z || t.rotate || t.rotateX || t.rotateY;
      }
      function Oi(t) {
        return t && "0%" !== t;
      }
      function Ci(t, e, n) {
        return n + e * (t - n);
      }
      function ki(t, e, n, r, o) {
        return void 0 !== o && (t = Ci(t, o, r)), Ci(t, n, r) + e;
      }
      function Vi(t, e, n, r, o) {
        void 0 === e && (e = 0), void 0 === n && (n = 1), (t.min = ki(t.min, e, n, r, o)), (t.max = ki(t.max, e, n, r, o));
      }
      function Ri(t, e) {
        var n = e.x,
          r = e.y;
        Vi(t.x, n.translate, n.scale, n.originPoint), Vi(t.y, r.translate, r.scale, r.originPoint);
      }
      function Mi(t, e) {
        (t.min = t.min + e), (t.max = t.max + e);
      }
      function Li(t, e, n) {
        var r = w(n, 3),
          o = r[0],
          i = r[1],
          a = r[2],
          s = void 0 !== e[a] ? e[a] : 0.5,
          u = Pn(t.min, t.max, s);
        Vi(t, e[o], e[i], u, e.scale);
      }
      var Di = ["x", "scaleX", "originX"],
        ji = ["y", "scaleY", "originY"];
      function Bi(t, e) {
        Li(t.x, e, Di), Li(t.y, e, ji);
      }
      function Fi(t, e) {
        return Ei(
          (function (t, e) {
            if (!e) return t;
            var n = e({ x: t.left, y: t.top }),
              r = e({ x: t.right, y: t.bottom });
            return { top: n.y, left: n.x, bottom: r.y, right: r.x };
          })(t.getBoundingClientRect(), e)
        );
      }
      var Ii = new WeakMap(),
        Ui = (function () {
          function t(t) {
            (this.openGlobalLock = null),
              (this.isDragging = !1),
              (this.currentDirection = null),
              (this.originPoint = { x: 0, y: 0 }),
              (this.constraints = !1),
              (this.hasMutatedConstraints = !1),
              (this.elastic = wi()),
              (this.visualElement = t);
          }
          return (
            (t.prototype.start = function (t, e) {
              var n = this,
                r = (void 0 === e ? {} : e).snapToCursor,
                o = void 0 !== r && r;
              if (!1 !== this.visualElement.isPresent) {
                this.panSession = new ei(
                  t,
                  {
                    onSessionStart: function (t) {
                      n.stopAnimation(), o && n.snapToCursor(Ee(t, "page").point);
                    },
                    onStart: function (t, e) {
                      var r,
                        o = n.getProps(),
                        i = o.drag,
                        a = o.dragPropagation,
                        s = o.onDragStart;
                      (!i || a || (n.openGlobalLock && n.openGlobalLock(), (n.openGlobalLock = Be(i)), n.openGlobalLock)) &&
                        ((n.isDragging = !0),
                        (n.currentDirection = null),
                        n.resolveConstraints(),
                        n.visualElement.projection &&
                          ((n.visualElement.projection.isAnimationBlocked = !0), (n.visualElement.projection.target = void 0)),
                        Pi(function (t) {
                          var e,
                            r,
                            o = n.getAxisMotionValue(t).get() || 0;
                          if (Tt.test(o)) {
                            var i =
                              null === (r = null === (e = n.visualElement.projection) || void 0 === e ? void 0 : e.layout) || void 0 === r
                                ? void 0
                                : r.actual[t];
                            if (i) o = ui(i) * (parseFloat(o) / 100);
                          }
                          n.originPoint[t] = o;
                        }),
                        null === s || void 0 === s || s(t, e),
                        null === (r = n.visualElement.animationState) || void 0 === r || r.setActive(pe.Drag, !0));
                    },
                    onMove: function (t, e) {
                      var r = n.getProps(),
                        o = r.dragPropagation,
                        i = r.dragDirectionLock,
                        a = r.onDirectionLock,
                        s = r.onDrag;
                      if (o || n.openGlobalLock) {
                        var u = e.offset;
                        if (i && null === n.currentDirection)
                          return (
                            (n.currentDirection = (function (t, e) {
                              void 0 === e && (e = 10);
                              var n = null;
                              Math.abs(t.y) > e ? (n = "y") : Math.abs(t.x) > e && (n = "x");
                              return n;
                            })(u)),
                            void (null !== n.currentDirection && (null === a || void 0 === a || a(n.currentDirection)))
                          );
                        n.updateAxis("x", e.point, u),
                          n.updateAxis("y", e.point, u),
                          n.visualElement.syncRender(),
                          null === s || void 0 === s || s(t, e);
                      }
                    },
                    onSessionEnd: function (t, e) {
                      return n.stop(t, e);
                    }
                  },
                  { transformPagePoint: this.visualElement.getTransformPagePoint() }
                );
              }
            }),
            (t.prototype.stop = function (t, e) {
              var n = this.isDragging;
              if ((this.cancel(), n)) {
                var r = e.velocity;
                this.startAnimation(r);
                var o = this.getProps().onDragEnd;
                null === o || void 0 === o || o(t, e);
              }
            }),
            (t.prototype.cancel = function () {
              var t, e;
              (this.isDragging = !1),
                this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !1),
                null === (t = this.panSession) || void 0 === t || t.end(),
                (this.panSession = void 0),
                !this.getProps().dragPropagation && this.openGlobalLock && (this.openGlobalLock(), (this.openGlobalLock = null)),
                null === (e = this.visualElement.animationState) || void 0 === e || e.setActive(pe.Drag, !1);
            }),
            (t.prototype.updateAxis = function (t, e, n) {
              var r = this.getProps().drag;
              if (n && Ni(t, r, this.currentDirection)) {
                var o = this.getAxisMotionValue(t),
                  i = this.originPoint[t] + n[t];
                this.constraints &&
                  this.constraints[t] &&
                  (i = (function (t, e, n) {
                    var r = e.min,
                      o = e.max;
                    return (
                      void 0 !== r && t < r
                        ? (t = n ? Pn(r, t, n.min) : Math.max(t, r))
                        : void 0 !== o && t > o && (t = n ? Pn(o, t, n.max) : Math.min(t, o)),
                      t
                    );
                  })(i, this.constraints[t], this.elastic[t])),
                  o.set(i);
              }
            }),
            (t.prototype.resolveConstraints = function () {
              var t = this,
                e = this.getProps(),
                n = e.dragConstraints,
                r = e.dragElastic,
                o = (this.visualElement.projection || {}).layout,
                i = this.constraints;
              n && N(n)
                ? this.constraints || (this.constraints = this.resolveRefConstraints())
                : (this.constraints =
                    !(!n || !o) &&
                    (function (t, e) {
                      var n = e.top,
                        r = e.left,
                        o = e.bottom,
                        i = e.right;
                      return { x: hi(t.x, r, i), y: hi(t.y, n, o) };
                    })(o.actual, n)),
                (this.elastic = (function (t) {
                  return (
                    void 0 === t && (t = gi),
                    !1 === t ? (t = 0) : !0 === t && (t = gi),
                    { x: yi(t, "left", "right"), y: yi(t, "top", "bottom") }
                  );
                })(r)),
                i !== this.constraints &&
                  o &&
                  this.constraints &&
                  !this.hasMutatedConstraints &&
                  Pi(function (e) {
                    t.getAxisMotionValue(e) &&
                      (t.constraints[e] = (function (t, e) {
                        var n = {};
                        return void 0 !== e.min && (n.min = e.min - t.min), void 0 !== e.max && (n.max = e.max - t.min), n;
                      })(o.actual[e], t.constraints[e]));
                  });
            }),
            (t.prototype.resolveRefConstraints = function () {
              var t = this.getProps(),
                e = t.dragConstraints,
                n = t.onMeasureDragConstraints;
              if (!e || !N(e)) return !1;
              var r = e.current;
              O(null !== r, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
              var o = this.visualElement.projection;
              if (!o || !o.layout) return !1;
              var i = (function (t, e, n) {
                  var r = Fi(t, n),
                    o = e.scroll;
                  return o && (Mi(r.x, o.x), Mi(r.y, o.y)), r;
                })(r, o.root, this.visualElement.getTransformPagePoint()),
                a = (function (t, e) {
                  return { x: mi(t.x, e.x), y: mi(t.y, e.y) };
                })(o.layout.actual, i);
              if (n) {
                var s = n(
                  (function (t) {
                    var e = t.x,
                      n = t.y;
                    return { top: n.min, right: e.max, bottom: n.max, left: e.min };
                  })(a)
                );
                (this.hasMutatedConstraints = !!s), s && (a = Ei(s));
              }
              return a;
            }),
            (t.prototype.startAnimation = function (t) {
              var e = this,
                n = this.getProps(),
                r = n.drag,
                o = n.dragMomentum,
                i = n.dragElastic,
                a = n.dragTransition,
                s = n.dragSnapToOrigin,
                u = n.onDragTransitionEnd,
                l = this.constraints || {},
                c = Pi(function (n) {
                  var u;
                  if (Ni(n, r, e.currentDirection)) {
                    var c = null !== (u = null === l || void 0 === l ? void 0 : l[n]) && void 0 !== u ? u : {};
                    s && (c = { min: 0, max: 0 });
                    var f = i ? 200 : 1e6,
                      d = i ? 40 : 1e7,
                      p = b(
                        b(
                          {
                            type: "inertia",
                            velocity: o ? t[n] : 0,
                            bounceStiffness: f,
                            bounceDamping: d,
                            timeConstant: 750,
                            restDelta: 1,
                            restSpeed: 10
                          },
                          a
                        ),
                        c
                      );
                    return e.startAxisValueAnimation(n, p);
                  }
                });
              return Promise.all(c).then(u);
            }),
            (t.prototype.startAxisValueAnimation = function (t, e) {
              return Ao(t, this.getAxisMotionValue(t), 0, e);
            }),
            (t.prototype.stopAnimation = function () {
              var t = this;
              Pi(function (e) {
                return t.getAxisMotionValue(e).stop();
              });
            }),
            (t.prototype.getAxisMotionValue = function (t) {
              var e,
                n,
                r = "_drag" + t.toUpperCase(),
                o = this.visualElement.getProps()[r];
              return (
                o ||
                this.visualElement.getValue(
                  t,
                  null !== (n = null === (e = this.visualElement.getProps().initial) || void 0 === e ? void 0 : e[t]) && void 0 !== n
                    ? n
                    : 0
                )
              );
            }),
            (t.prototype.snapToCursor = function (t) {
              var e = this;
              Pi(function (n) {
                if (Ni(n, e.getProps().drag, e.currentDirection)) {
                  var r = e.visualElement.projection,
                    o = e.getAxisMotionValue(n);
                  if (r && r.layout) {
                    var i = r.layout.actual[n],
                      a = i.min,
                      s = i.max;
                    o.set(t[n] - Pn(a, s, 0.5));
                  }
                }
              });
            }),
            (t.prototype.scalePositionWithinConstraints = function () {
              var t,
                e = this,
                n = this.getProps(),
                r = n.drag,
                o = n.dragConstraints,
                i = this.visualElement.projection;
              if (N(o) && i && this.constraints) {
                this.stopAnimation();
                var a = { x: 0, y: 0 };
                Pi(function (t) {
                  var n = e.getAxisMotionValue(t);
                  if (n) {
                    var r = n.get();
                    a[t] = (function (t, e) {
                      var n = 0.5,
                        r = ui(t),
                        o = ui(e);
                      return o > r ? (n = wn(e.min, e.max - r, t.min)) : r > o && (n = wn(t.min, t.max - o, e.min)), an(0, 1, n);
                    })({ min: r, max: r }, e.constraints[t]);
                  }
                });
                var s = this.visualElement.getProps().transformTemplate;
                (this.visualElement.getInstance().style.transform = s ? s({}, "") : "none"),
                  null === (t = i.root) || void 0 === t || t.updateScroll(),
                  i.updateLayout(),
                  this.resolveConstraints(),
                  Pi(function (t) {
                    if (Ni(t, r, null)) {
                      var n = e.getAxisMotionValue(t),
                        o = e.constraints[t],
                        i = o.min,
                        s = o.max;
                      n.set(Pn(i, s, a[t]));
                    }
                  });
              }
            }),
            (t.prototype.addListeners = function () {
              var t,
                e = this;
              Ii.set(this.visualElement, this);
              var n = Re(this.visualElement.getInstance(), "pointerdown", function (t) {
                  var n = e.getProps(),
                    r = n.drag,
                    o = n.dragListener;
                  r && (void 0 === o || o) && e.start(t);
                }),
                r = function () {
                  N(e.getProps().dragConstraints) && (e.constraints = e.resolveRefConstraints());
                },
                o = this.visualElement.projection,
                i = o.addEventListener("measure", r);
              o && !o.layout && (null === (t = o.root) || void 0 === t || t.updateScroll(), o.updateLayout()), r();
              var a = me(window, "resize", function () {
                return e.scalePositionWithinConstraints();
              });
              return (
                o.addEventListener("didUpdate", function (t) {
                  var n = t.delta,
                    r = t.hasLayoutChanged;
                  e.isDragging &&
                    r &&
                    (Pi(function (t) {
                      var r = e.getAxisMotionValue(t);
                      r && ((e.originPoint[t] += n[t].translate), r.set(r.get() + n[t].translate));
                    }),
                    e.visualElement.syncRender());
                }),
                function () {
                  a(), n(), i();
                }
              );
            }),
            (t.prototype.getProps = function () {
              var t = this.visualElement.getProps(),
                e = t.drag,
                n = void 0 !== e && e,
                r = t.dragDirectionLock,
                o = void 0 !== r && r,
                i = t.dragPropagation,
                a = void 0 !== i && i,
                s = t.dragConstraints,
                u = void 0 !== s && s,
                l = t.dragElastic,
                c = void 0 === l ? gi : l,
                f = t.dragMomentum,
                d = void 0 === f || f;
              return b(b({}, t), {
                drag: n,
                dragDirectionLock: o,
                dragPropagation: a,
                dragConstraints: u,
                dragElastic: c,
                dragMomentum: d
              });
            }),
            t
          );
        })();
      function Ni(t, e, n) {
        return (!0 === e || e === t) && (null === n || n === t);
      }
      var zi = {
          pan: Je(function (t) {
            var e = t.onPan,
              n = t.onPanStart,
              r = t.onPanEnd,
              o = t.onPanSessionStart,
              a = t.visualElement,
              s = e || n || r || o,
              u = (0, i.useRef)(null),
              l = (0, i.useContext)(R).transformPagePoint,
              c = {
                onSessionStart: o,
                onStart: n,
                onMove: e,
                onEnd: function (t, e) {
                  (u.current = null), r && r(t, e);
                }
              };
            (0, i.useEffect)(function () {
              null !== u.current && u.current.updateHandlers(c);
            }),
              Me(
                a,
                "pointerdown",
                s &&
                  function (t) {
                    u.current = new ei(t, c, { transformPagePoint: l });
                  }
              ),
              Ne(function () {
                return u.current && u.current.end();
              });
          }),
          drag: Je(function (t) {
            var e = t.dragControls,
              n = t.visualElement,
              r = G(function () {
                return new Ui(n);
              });
            (0, i.useEffect)(
              function () {
                return e && e.subscribe(r);
              },
              [r, e]
            ),
              (0, i.useEffect)(
                function () {
                  return r.addListeners();
                },
                [r]
              );
          })
        },
        Hi = [
          "LayoutMeasure",
          "BeforeLayoutMeasure",
          "LayoutUpdate",
          "ViewportBoxUpdate",
          "Update",
          "Render",
          "AnimationComplete",
          "LayoutAnimationComplete",
          "AnimationStart",
          "LayoutAnimationStart",
          "SetAxisTarget",
          "Unmount"
        ];
      var Wi = function (t) {
          var e = t.treeType,
            n = void 0 === e ? "" : e,
            r = t.build,
            o = t.getBaseTarget,
            i = t.makeTargetAnimatable,
            a = t.measureViewportBox,
            s = t.render,
            u = t.readValueFromInstance,
            l = t.removeValueFromRenderState,
            c = t.sortNodePosition,
            f = t.scrapeMotionValuesFromProps;
          return function (t, e) {
            var d = t.parent,
              p = t.props,
              v = t.presenceId,
              h = t.blockInitialAnimation,
              m = t.visualState,
              g = t.shouldReduceMotion;
            void 0 === e && (e = {});
            var y,
              x,
              E = !1,
              S = m.latestValues,
              A = m.renderState,
              T = (function () {
                var t = Hi.map(function () {
                    return new ko();
                  }),
                  e = {},
                  n = {
                    clearAllListeners: function () {
                      return t.forEach(function (t) {
                        return t.clear();
                      });
                    },
                    updatePropListeners: function (t) {
                      Hi.forEach(function (r) {
                        var o,
                          i = "on" + r,
                          a = t[i];
                        null === (o = e[r]) || void 0 === o || o.call(e), a && (e[r] = n[i](a));
                      });
                    }
                  };
                return (
                  t.forEach(function (t, e) {
                    (n["on" + Hi[e]] = function (e) {
                      return t.add(e);
                    }),
                      (n["notify" + Hi[e]] = function () {
                        for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                        return t.notify.apply(t, P([], w(e), !1));
                      });
                  }),
                  n
                );
              })(),
              O = new Map(),
              C = new Map(),
              k = {},
              V = b({}, S);
            function R() {
              y && E && (M(), s(y, A, p.style, N.projection));
            }
            function M() {
              r(N, A, S, e, p);
            }
            function L() {
              T.notifyUpdate(S);
            }
            function D(t, e) {
              var n = e.onChange(function (e) {
                  (S[t] = e), p.onUpdate && Ir.update(L, !1, !0);
                }),
                r = e.onRenderRequest(N.scheduleRender);
              C.set(t, function () {
                n(), r();
              });
            }
            var j = f(p);
            for (var B in j) {
              var F = j[B];
              void 0 !== S[B] && vt(F) && F.set(S[B], !1);
            }
            var I = q(p),
              U = Y(p),
              N = b(
                b(
                  {
                    treeType: n,
                    current: null,
                    depth: d ? d.depth + 1 : 0,
                    parent: d,
                    children: new Set(),
                    presenceId: v,
                    shouldReduceMotion: g,
                    variantChildren: U ? new Set() : void 0,
                    isVisible: void 0,
                    manuallyAnimateOnMount: Boolean(null === d || void 0 === d ? void 0 : d.isMounted()),
                    blockInitialAnimation: h,
                    isMounted: function () {
                      return Boolean(y);
                    },
                    mount: function (t) {
                      (E = !0),
                        (y = N.current = t),
                        N.projection && N.projection.mount(t),
                        U && d && !I && (x = null === d || void 0 === d ? void 0 : d.addVariantChild(N)),
                        O.forEach(function (t, e) {
                          return D(e, t);
                        }),
                        null === d || void 0 === d || d.children.add(N),
                        N.setProps(p);
                    },
                    unmount: function () {
                      var t;
                      null === (t = N.projection) || void 0 === t || t.unmount(),
                        Mr.update(L),
                        Mr.render(R),
                        C.forEach(function (t) {
                          return t();
                        }),
                        null === x || void 0 === x || x(),
                        null === d || void 0 === d || d.children.delete(N),
                        T.clearAllListeners(),
                        (y = void 0),
                        (E = !1);
                    },
                    addVariantChild: function (t) {
                      var e,
                        n = N.getClosestVariantNode();
                      if (n)
                        return (
                          null === (e = n.variantChildren) || void 0 === e || e.add(t),
                          function () {
                            return n.variantChildren.delete(t);
                          }
                        );
                    },
                    sortNodePosition: function (t) {
                      return c && n === t.treeType ? c(N.getInstance(), t.getInstance()) : 0;
                    },
                    getClosestVariantNode: function () {
                      return U ? N : null === d || void 0 === d ? void 0 : d.getClosestVariantNode();
                    },
                    getLayoutId: function () {
                      return p.layoutId;
                    },
                    getInstance: function () {
                      return y;
                    },
                    getStaticValue: function (t) {
                      return S[t];
                    },
                    setStaticValue: function (t, e) {
                      return (S[t] = e);
                    },
                    getLatestValues: function () {
                      return S;
                    },
                    setVisibility: function (t) {
                      N.isVisible !== t && ((N.isVisible = t), N.scheduleRender());
                    },
                    makeTargetAnimatable: function (t, e) {
                      return void 0 === e && (e = !0), i(N, t, p, e);
                    },
                    measureViewportBox: function () {
                      return a(y, p);
                    },
                    addValue: function (t, e) {
                      N.hasValue(t) && N.removeValue(t), O.set(t, e), (S[t] = e.get()), D(t, e);
                    },
                    removeValue: function (t) {
                      var e;
                      O.delete(t), null === (e = C.get(t)) || void 0 === e || e(), C.delete(t), delete S[t], l(t, A);
                    },
                    hasValue: function (t) {
                      return O.has(t);
                    },
                    getValue: function (t, e) {
                      var n = O.get(t);
                      return void 0 === n && void 0 !== e && ((n = Ro(e)), N.addValue(t, n)), n;
                    },
                    forEachValue: function (t) {
                      return O.forEach(t);
                    },
                    readValue: function (t) {
                      var n;
                      return null !== (n = S[t]) && void 0 !== n ? n : u(y, t, e);
                    },
                    setBaseTarget: function (t, e) {
                      V[t] = e;
                    },
                    getBaseTarget: function (t) {
                      if (o) {
                        var e = o(p, t);
                        if (void 0 !== e && !vt(e)) return e;
                      }
                      return V[t];
                    }
                  },
                  T
                ),
                {
                  build: function () {
                    return M(), A;
                  },
                  scheduleRender: function () {
                    Ir.render(R, !1, !0);
                  },
                  syncRender: R,
                  setProps: function (t) {
                    (t.transformTemplate || p.transformTemplate) && N.scheduleRender(),
                      (p = t),
                      T.updatePropListeners(t),
                      (k = (function (t, e, n) {
                        var r;
                        for (var o in e) {
                          var i = e[o],
                            a = n[o];
                          if (vt(i)) t.addValue(o, i);
                          else if (vt(a)) t.addValue(o, Ro(i));
                          else if (a !== i)
                            if (t.hasValue(o)) {
                              var s = t.getValue(o);
                              !s.hasAnimated && s.set(i);
                            } else t.addValue(o, Ro(null !== (r = t.getStaticValue(o)) && void 0 !== r ? r : i));
                        }
                        for (var o in n) void 0 === e[o] && t.removeValue(o);
                        return e;
                      })(N, f(p), k));
                  },
                  getProps: function () {
                    return p;
                  },
                  getVariant: function (t) {
                    var e;
                    return null === (e = p.variants) || void 0 === e ? void 0 : e[t];
                  },
                  getDefaultTransition: function () {
                    return p.transition;
                  },
                  getTransformPagePoint: function () {
                    return p.transformPagePoint;
                  },
                  getVariantContext: function (t) {
                    if ((void 0 === t && (t = !1), t)) return null === d || void 0 === d ? void 0 : d.getVariantContext();
                    if (!I) {
                      var e = (null === d || void 0 === d ? void 0 : d.getVariantContext()) || {};
                      return void 0 !== p.initial && (e.initial = p.initial), e;
                    }
                    for (var n = {}, r = 0; r < qi; r++) {
                      var o = _i[r],
                        i = p[o];
                      (H(i) || !1 === i) && (n[o] = i);
                    }
                    return n;
                  }
                }
              );
            return N;
          };
        },
        _i = P(["initial"], w(_o), !1),
        qi = _i.length;
      function Yi(t) {
        return "string" === typeof t && t.startsWith("var(--");
      }
      var Xi = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
      var Zi = 4;
      function Gi(t, e, n) {
        void 0 === n && (n = 1),
          O(
            n <= Zi,
            'Max CSS variable fallback depth detected in property "'.concat(t, '". This may indicate a circular fallback dependency.')
          );
        var r = w(
            (function (t) {
              var e = Xi.exec(t);
              if (!e) return [,];
              var n = w(e, 3);
              return [n[1], n[2]];
            })(t),
            2
          ),
          o = r[0],
          i = r[1];
        if (o) {
          var a = window.getComputedStyle(e).getPropertyValue(o);
          return a ? a.trim() : Yi(i) ? Gi(i, e, n + 1) : i;
        }
      }
      var $i,
        Ki = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y"]),
        Ji = function (t) {
          return Ki.has(t);
        },
        Qi = function (t, e) {
          t.set(e, !1), t.set(e);
        },
        ta = function (t) {
          return t === Rt || t === Ot;
        };
      !(function (t) {
        (t.width = "width"), (t.height = "height"), (t.left = "left"), (t.right = "right"), (t.top = "top"), (t.bottom = "bottom");
      })($i || ($i = {}));
      var ea = function (t, e) {
          return parseFloat(t.split(", ")[e]);
        },
        na = function (t, e) {
          return function (n, r) {
            var o = r.transform;
            if ("none" === o || !o) return 0;
            var i = o.match(/^matrix3d\((.+)\)$/);
            if (i) return ea(i[1], e);
            var a = o.match(/^matrix\((.+)\)$/);
            return a ? ea(a[1], t) : 0;
          };
        },
        ra = new Set(["x", "y", "z"]),
        oa = st.filter(function (t) {
          return !ra.has(t);
        });
      var ia = {
          width: function (t, e) {
            var n = t.x,
              r = e.paddingLeft,
              o = void 0 === r ? "0" : r,
              i = e.paddingRight,
              a = void 0 === i ? "0" : i;
            return n.max - n.min - parseFloat(o) - parseFloat(a);
          },
          height: function (t, e) {
            var n = t.y,
              r = e.paddingTop,
              o = void 0 === r ? "0" : r,
              i = e.paddingBottom,
              a = void 0 === i ? "0" : i;
            return n.max - n.min - parseFloat(o) - parseFloat(a);
          },
          top: function (t, e) {
            var n = e.top;
            return parseFloat(n);
          },
          left: function (t, e) {
            var n = e.left;
            return parseFloat(n);
          },
          bottom: function (t, e) {
            var n = t.y,
              r = e.top;
            return parseFloat(r) + (n.max - n.min);
          },
          right: function (t, e) {
            var n = t.x,
              r = e.left;
            return parseFloat(r) + (n.max - n.min);
          },
          x: na(4, 13),
          y: na(5, 14)
        },
        aa = function (t, e, n, r) {
          void 0 === n && (n = {}), void 0 === r && (r = {}), (e = b({}, e)), (r = b({}, r));
          var o = Object.keys(e).filter(Ji),
            i = [],
            a = !1,
            s = [];
          if (
            (o.forEach(function (o) {
              var u = t.getValue(o);
              if (t.hasValue(o)) {
                var l,
                  c = n[o],
                  f = Do(c),
                  d = e[o];
                if (ae(d)) {
                  var p = d.length,
                    v = null === d[0] ? 1 : 0;
                  (c = d[v]), (f = Do(c));
                  for (var h = v; h < p; h++)
                    l
                      ? O(Do(d[h]) === l, "All keyframes must be of the same type")
                      : ((l = Do(d[h])), O(l === f || (ta(f) && ta(l)), "Keyframes must be of the same dimension as the current value"));
                } else l = Do(d);
                if (f !== l)
                  if (ta(f) && ta(l)) {
                    var m = u.get();
                    "string" === typeof m && u.set(parseFloat(m)),
                      "string" === typeof d ? (e[o] = parseFloat(d)) : Array.isArray(d) && l === Ot && (e[o] = d.map(parseFloat));
                  } else
                    (null === f || void 0 === f ? void 0 : f.transform) &&
                    (null === l || void 0 === l ? void 0 : l.transform) &&
                    (0 === c || 0 === d)
                      ? 0 === c
                        ? u.set(l.transform(c))
                        : (e[o] = f.transform(d))
                      : (a ||
                          ((i = (function (t) {
                            var e = [];
                            return (
                              oa.forEach(function (n) {
                                var r = t.getValue(n);
                                void 0 !== r && (e.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
                              }),
                              e.length && t.syncRender(),
                              e
                            );
                          })(t)),
                          (a = !0)),
                        s.push(o),
                        (r[o] = void 0 !== r[o] ? r[o] : e[o]),
                        Qi(u, d));
              }
            }),
            s.length)
          ) {
            var u = s.indexOf("height") >= 0 ? window.pageYOffset : null,
              l = (function (t, e, n) {
                var r = e.measureViewportBox(),
                  o = e.getInstance(),
                  i = getComputedStyle(o),
                  a = i.display,
                  s = {};
                "none" === a && e.setStaticValue("display", t.display || "block"),
                  n.forEach(function (t) {
                    s[t] = ia[t](r, i);
                  }),
                  e.syncRender();
                var u = e.measureViewportBox();
                return (
                  n.forEach(function (n) {
                    var r = e.getValue(n);
                    Qi(r, s[n]), (t[n] = ia[n](u, i));
                  }),
                  t
                );
              })(e, t, s);
            return (
              i.length &&
                i.forEach(function (e) {
                  var n = w(e, 2),
                    r = n[0],
                    o = n[1];
                  t.getValue(r).set(o);
                }),
              t.syncRender(),
              null !== u && window.scrollTo({ top: u }),
              { target: l, transitionEnd: r }
            );
          }
          return { target: e, transitionEnd: r };
        };
      function sa(t, e, n, r) {
        return (function (t) {
          return Object.keys(t).some(Ji);
        })(e)
          ? aa(t, e, n, r)
          : { target: e, transitionEnd: r };
      }
      var ua = function (t, e, n, r) {
        var o = (function (t, e, n) {
          var r,
            o = x(e, []),
            i = t.getInstance();
          if (!(i instanceof Element)) return { target: o, transitionEnd: n };
          for (var a in (n && (n = b({}, n)),
          t.forEachValue(function (t) {
            var e = t.get();
            if (Yi(e)) {
              var n = Gi(e, i);
              n && t.set(n);
            }
          }),
          o)) {
            var s = o[a];
            if (Yi(s)) {
              var u = Gi(s, i);
              u && ((o[a] = u), n && ((null !== (r = n[a]) && void 0 !== r) || (n[a] = s)));
            }
          }
          return { target: o, transitionEnd: n };
        })(t, e, r);
        return sa(t, (e = o.target), n, (r = o.transitionEnd));
      };
      var la = {
          treeType: "dom",
          readValueFromInstance: function (t, e) {
            if (ct(e)) {
              var n = mo(e);
              return (n && n.default) || 0;
            }
            var r,
              o = ((r = t), window.getComputedStyle(r));
            return (mt(e) ? o.getPropertyValue(e) : o[e]) || 0;
          },
          sortNodePosition: function (t, e) {
            return 2 & t.compareDocumentPosition(e) ? 1 : -1;
          },
          getBaseTarget: function (t, e) {
            var n;
            return null === (n = t.style) || void 0 === n ? void 0 : n[e];
          },
          measureViewportBox: function (t, e) {
            return Fi(t, e.transformPagePoint);
          },
          resetTransform: function (t, e, n) {
            var r = n.transformTemplate;
            (e.style.transform = r ? r({}, "") : "none"), t.scheduleRender();
          },
          restoreTransform: function (t, e) {
            t.style.transform = e.style.transform;
          },
          removeValueFromRenderState: function (t, e) {
            var n = e.vars,
              r = e.style;
            delete n[t], delete r[t];
          },
          makeTargetAnimatable: function (t, e, n, r) {
            var o = n.transformValues;
            void 0 === r && (r = !0);
            var i = e.transition,
              a = e.transitionEnd,
              s = x(e, ["transition", "transitionEnd"]),
              u = (function (t, e, n) {
                var r,
                  o,
                  i = {};
                for (var a in t)
                  i[a] = null !== (r = Uo(a, e)) && void 0 !== r ? r : null === (o = n.getValue(a)) || void 0 === o ? void 0 : o.get();
                return i;
              })(s, i || {}, t);
            if ((o && (a && (a = o(a)), s && (s = o(s)), u && (u = o(u))), r)) {
              !(function (t, e, n) {
                var r,
                  o,
                  i,
                  a,
                  s = Object.keys(e).filter(function (e) {
                    return !t.hasValue(e);
                  }),
                  u = s.length;
                if (u)
                  for (var l = 0; l < u; l++) {
                    var c = s[l],
                      f = e[c],
                      d = null;
                    Array.isArray(f) && (d = f[0]),
                      null === d &&
                        (d = null !== (o = null !== (r = n[c]) && void 0 !== r ? r : t.readValue(c)) && void 0 !== o ? o : e[c]),
                      void 0 !== d &&
                        null !== d &&
                        ("string" === typeof d && (/^\-?\d*\.?\d+$/.test(d) || To(d))
                          ? (d = parseFloat(d))
                          : !Bo(d) && Yn.test(f) && (d = go(c, f)),
                        t.addValue(c, Ro(d)),
                        (null !== (i = (a = n)[c]) && void 0 !== i) || (a[c] = d),
                        t.setBaseTarget(c, d));
                  }
              })(t, s, u);
              var l = ua(t, s, u, a);
              (a = l.transitionEnd), (s = l.target);
            }
            return b({ transition: i, transitionEnd: a }, s);
          },
          scrapeMotionValuesFromProps: re,
          build: function (t, e, n, r, o) {
            void 0 !== t.isVisible && (e.style.visibility = t.isVisible ? "visible" : "hidden"), Bt(e, n, r, o.transformTemplate);
          },
          render: te
        },
        ca = Wi(la),
        fa = Wi(
          b(b({}, la), {
            getBaseTarget: function (t, e) {
              return t[e];
            },
            readValueFromInstance: function (t, e) {
              var n;
              return ct(e)
                ? (null === (n = mo(e)) || void 0 === n ? void 0 : n.default) || 0
                : ((e = ee.has(e) ? e : Qt(e)), t.getAttribute(e));
            },
            scrapeMotionValuesFromProps: oe,
            build: function (t, e, n, r, o) {
              Zt(e, n, r, o.transformTemplate);
            },
            render: ne
          })
        ),
        da = function (t, e) {
          return ot(t) ? fa(e, { enableHardwareAcceleration: !1 }) : ca(e, { enableHardwareAcceleration: !0 });
        };
      function pa(t, e) {
        return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
      }
      var va = {
          correct: function (t, e) {
            if (!e.target) return t;
            if ("string" === typeof t) {
              if (!Ot.test(t)) return t;
              t = parseFloat(t);
            }
            var n = pa(t, e.target.x),
              r = pa(t, e.target.y);
            return "".concat(n, "% ").concat(r, "%");
          }
        },
        ha = "_$css",
        ma = {
          correct: function (t, e) {
            var n = e.treeScale,
              r = e.projectionDelta,
              o = t,
              i = t.includes("var("),
              a = [];
            i &&
              (t = t.replace(Xi, function (t) {
                return a.push(t), ha;
              }));
            var s = Yn.parse(t);
            if (s.length > 5) return o;
            var u = Yn.createTransformer(t),
              l = "number" !== typeof s[0] ? 1 : 0,
              c = r.x.scale * n.x,
              f = r.y.scale * n.y;
            (s[0 + l] /= c), (s[1 + l] /= f);
            var d = Pn(c, f, 0.5);
            "number" === typeof s[2 + l] && (s[2 + l] /= d), "number" === typeof s[3 + l] && (s[3 + l] /= d);
            var p = u(s);
            if (i) {
              var v = 0;
              p = p.replace(ha, function () {
                var t = a[v];
                return v++, t;
              });
            }
            return p;
          }
        },
        ga = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            y(e, t),
            (e.prototype.componentDidMount = function () {
              var t,
                e = this,
                n = this.props,
                r = n.visualElement,
                o = n.layoutGroup,
                i = n.switchLayoutGroup,
                a = n.layoutId,
                s = r.projection;
              (t = ya),
                Object.assign(it, t),
                s &&
                  ((null === o || void 0 === o ? void 0 : o.group) && o.group.add(s),
                  (null === i || void 0 === i ? void 0 : i.register) && a && i.register(s),
                  s.root.didUpdate(),
                  s.addEventListener("animationComplete", function () {
                    e.safeToRemove();
                  }),
                  s.setOptions(
                    b(b({}, s.options), {
                      onExitComplete: function () {
                        return e.safeToRemove();
                      }
                    })
                  )),
                ($.hasEverUpdated = !0);
            }),
            (e.prototype.getSnapshotBeforeUpdate = function (t) {
              var e = this,
                n = this.props,
                r = n.layoutDependency,
                o = n.visualElement,
                i = n.drag,
                a = n.isPresent,
                s = o.projection;
              return s
                ? ((s.isPresent = a),
                  i || t.layoutDependency !== r || void 0 === r ? s.willUpdate() : this.safeToRemove(),
                  t.isPresent !== a &&
                    (a
                      ? s.promote()
                      : s.relegate() ||
                        Ir.postRender(function () {
                          var t;
                          (null === (t = s.getStack()) || void 0 === t ? void 0 : t.members.length) || e.safeToRemove();
                        })),
                  null)
                : null;
            }),
            (e.prototype.componentDidUpdate = function () {
              var t = this.props.visualElement.projection;
              t && (t.root.didUpdate(), !t.currentAnimation && t.isLead() && this.safeToRemove());
            }),
            (e.prototype.componentWillUnmount = function () {
              var t = this.props,
                e = t.visualElement,
                n = t.layoutGroup,
                r = t.switchLayoutGroup,
                o = e.projection;
              o &&
                (o.scheduleCheckAfterUnmount(),
                (null === n || void 0 === n ? void 0 : n.group) && n.group.remove(o),
                (null === r || void 0 === r ? void 0 : r.deregister) && r.deregister(o));
            }),
            (e.prototype.safeToRemove = function () {
              var t = this.props.safeToRemove;
              null === t || void 0 === t || t();
            }),
            (e.prototype.render = function () {
              return null;
            }),
            e
          );
        })(i.Component);
      var ya = {
          borderRadius: b(b({}, va), {
            applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
          }),
          borderTopLeftRadius: va,
          borderTopRightRadius: va,
          borderBottomLeftRadius: va,
          borderBottomRightRadius: va,
          boxShadow: ma
        },
        ba = {
          measureLayout: function (t) {
            var e = w(rn(), 2),
              n = e[0],
              r = e[1],
              o = (0, i.useContext)(J);
            return i.createElement(
              ga,
              b({}, t, { layoutGroup: o, switchLayoutGroup: (0, i.useContext)(Q), isPresent: n, safeToRemove: r })
            );
          }
        };
      var xa = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        wa = xa.length,
        Pa = function (t) {
          return "string" === typeof t ? parseFloat(t) : t;
        },
        Ea = function (t) {
          return "number" === typeof t || Ot.test(t);
        };
      function Sa(t, e) {
        var n;
        return null !== (n = t[e]) && void 0 !== n ? n : t.borderRadius;
      }
      var Aa = Oa(0, 0.5, fr),
        Ta = Oa(0.5, 0.95, ar);
      function Oa(t, e, n) {
        return function (r) {
          return r < t ? 0 : r > e ? 1 : n(wn(t, e, r));
        };
      }
      function Ca(t, e) {
        (t.min = e.min), (t.max = e.max);
      }
      function ka(t, e) {
        Ca(t.x, e.x), Ca(t.y, e.y);
      }
      function Va(t, e, n, r, o) {
        return (t = Ci((t -= e), 1 / n, r)), void 0 !== o && (t = Ci(t, 1 / o, r)), t;
      }
      function Ra(t, e, n, r, o) {
        var i = w(n, 3),
          a = i[0],
          s = i[1],
          u = i[2];
        !(function (t, e, n, r, o, i, a) {
          if (
            (void 0 === e && (e = 0),
            void 0 === n && (n = 1),
            void 0 === r && (r = 0.5),
            void 0 === i && (i = t),
            void 0 === a && (a = t),
            Tt.test(e) && ((e = parseFloat(e)), (e = Pn(a.min, a.max, e / 100) - a.min)),
            "number" === typeof e)
          ) {
            var s = Pn(i.min, i.max, r);
            t === i && (s -= e), (t.min = Va(t.min, e, n, s, o)), (t.max = Va(t.max, e, n, s, o));
          }
        })(t, e[a], e[s], e[u], e.scale, r, o);
      }
      var Ma = ["x", "scaleX", "originX"],
        La = ["y", "scaleY", "originY"];
      function Da(t, e, n, r) {
        Ra(t.x, e, Ma, null === n || void 0 === n ? void 0 : n.x, null === r || void 0 === r ? void 0 : r.x),
          Ra(t.y, e, La, null === n || void 0 === n ? void 0 : n.y, null === r || void 0 === r ? void 0 : r.y);
      }
      function ja(t) {
        return 0 === t.translate && 1 === t.scale;
      }
      function Ba(t) {
        return ja(t.x) && ja(t.y);
      }
      function Fa(t, e) {
        return t.x.min === e.x.min && t.x.max === e.x.max && t.y.min === e.y.min && t.y.max === e.y.max;
      }
      var Ia = (function () {
          function t() {
            this.members = [];
          }
          return (
            (t.prototype.add = function (t) {
              Oo(this.members, t), t.scheduleRender();
            }),
            (t.prototype.remove = function (t) {
              if ((Co(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead)) {
                var e = this.members[this.members.length - 1];
                e && this.promote(e);
              }
            }),
            (t.prototype.relegate = function (t) {
              var e,
                n = this.members.findIndex(function (e) {
                  return t === e;
                });
              if (0 === n) return !1;
              for (var r = n; r >= 0; r--) {
                var o = this.members[r];
                if (!1 !== o.isPresent) {
                  e = o;
                  break;
                }
              }
              return !!e && (this.promote(e), !0);
            }),
            (t.prototype.promote = function (t, e) {
              var n,
                r = this.lead;
              t !== r &&
                ((this.prevLead = r),
                (this.lead = t),
                t.show(),
                r &&
                  (r.instance && r.scheduleRender(),
                  t.scheduleRender(),
                  (t.resumeFrom = r),
                  e && (t.resumeFrom.preserveOpacity = !0),
                  r.snapshot &&
                    ((t.snapshot = r.snapshot),
                    (t.snapshot.latestValues = r.animationValues || r.latestValues),
                    (t.snapshot.isShared = !0)),
                  (null === (n = t.root) || void 0 === n ? void 0 : n.isUpdating) && (t.isLayoutDirty = !0),
                  !1 === t.options.crossfade && r.hide()));
            }),
            (t.prototype.exitAnimationComplete = function () {
              this.members.forEach(function (t) {
                var e, n, r, o, i;
                null === (n = (e = t.options).onExitComplete) || void 0 === n || n.call(e),
                  null === (i = null === (r = t.resumingFrom) || void 0 === r ? void 0 : (o = r.options).onExitComplete) ||
                    void 0 === i ||
                    i.call(o);
              });
            }),
            (t.prototype.scheduleRender = function () {
              this.members.forEach(function (t) {
                t.instance && t.scheduleRender(!1);
              });
            }),
            (t.prototype.removeLeadSnapshot = function () {
              this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
            }),
            t
          );
        })(),
        Ua = "translate3d(0px, 0px, 0) scale(1, 1) scale(1, 1)";
      function Na(t, e, n) {
        var r = t.x.translate / e.x,
          o = t.y.translate / e.y,
          i = "translate3d(".concat(r, "px, ").concat(o, "px, 0) ");
        if (((i += "scale(".concat(1 / e.x, ", ").concat(1 / e.y, ") ")), n)) {
          var a = n.rotate,
            s = n.rotateX,
            u = n.rotateY;
          a && (i += "rotate(".concat(a, "deg) ")), s && (i += "rotateX(".concat(s, "deg) ")), u && (i += "rotateY(".concat(u, "deg) "));
        }
        var l = t.x.scale * e.x,
          c = t.y.scale * e.y;
        return (i += "scale(".concat(l, ", ").concat(c, ")")) === Ua ? "none" : i;
      }
      var za = function (t, e) {
          return t.depth - e.depth;
        },
        Ha = (function () {
          function t() {
            (this.children = []), (this.isDirty = !1);
          }
          return (
            (t.prototype.add = function (t) {
              Oo(this.children, t), (this.isDirty = !0);
            }),
            (t.prototype.remove = function (t) {
              Co(this.children, t), (this.isDirty = !0);
            }),
            (t.prototype.forEach = function (t) {
              this.isDirty && this.children.sort(za), (this.isDirty = !1), this.children.forEach(t);
            }),
            t
          );
        })();
      function Wa(t) {
        var e = t.attachResizeListener,
          n = t.defaultParent,
          r = t.measureScroll,
          o = t.checkIsScrollRoot,
          i = t.resetTransform;
        return (function () {
          function t(t, e, r) {
            var o = this;
            void 0 === e && (e = {}),
              void 0 === r && (r = null === n || void 0 === n ? void 0 : n()),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.potentialNodes = new Map()),
              (this.checkUpdateFailed = function () {
                o.isUpdating && ((o.isUpdating = !1), o.clearAllSnapshots());
              }),
              (this.updateProjection = function () {
                o.nodes.forEach($a), o.nodes.forEach(Ka);
              }),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.id = t),
              (this.latestValues = e),
              (this.root = r ? r.root || r : this),
              (this.path = r ? P(P([], w(r.path), !1), [r], !1) : []),
              (this.parent = r),
              (this.depth = r ? r.depth + 1 : 0),
              t && this.root.registerPotentialNode(t, this);
            for (var i = 0; i < this.path.length; i++) this.path[i].shouldResetTransform = !0;
            this.root === this && (this.nodes = new Ha());
          }
          return (
            (t.prototype.addEventListener = function (t, e) {
              return this.eventHandlers.has(t) || this.eventHandlers.set(t, new ko()), this.eventHandlers.get(t).add(e);
            }),
            (t.prototype.notifyListeners = function (t) {
              for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
              var r = this.eventHandlers.get(t);
              null === r || void 0 === r || r.notify.apply(r, P([], w(e), !1));
            }),
            (t.prototype.hasListeners = function (t) {
              return this.eventHandlers.has(t);
            }),
            (t.prototype.registerPotentialNode = function (t, e) {
              this.potentialNodes.set(t, e);
            }),
            (t.prototype.mount = function (t, n) {
              var r,
                o = this;
              if ((void 0 === n && (n = !1), !this.instance)) {
                (this.isSVG = t instanceof SVGElement && "svg" !== t.tagName), (this.instance = t);
                var i = this.options,
                  a = i.layoutId,
                  s = i.layout,
                  u = i.visualElement;
                if (
                  (u && !u.getInstance() && u.mount(t),
                  this.root.nodes.add(this),
                  null === (r = this.parent) || void 0 === r || r.children.add(this),
                  this.id && this.root.potentialNodes.delete(this.id),
                  n && (s || a) && (this.isLayoutDirty = !0),
                  e)
                ) {
                  var l,
                    c = function () {
                      return (o.root.updateBlockedByResize = !1);
                    };
                  e(t, function () {
                    (o.root.updateBlockedByResize = !0),
                      clearTimeout(l),
                      (l = window.setTimeout(c, 250)),
                      $.hasAnimatedSinceResize && (($.hasAnimatedSinceResize = !1), o.nodes.forEach(Ga));
                  });
                }
                a && this.root.registerSharedNode(a, this),
                  !1 !== this.options.animate &&
                    u &&
                    (a || s) &&
                    this.addEventListener("didUpdate", function (t) {
                      var e,
                        n,
                        r,
                        i,
                        a,
                        s = t.delta,
                        l = t.hasLayoutChanged,
                        c = t.hasRelativeTargetChanged,
                        f = t.layout;
                      if (o.isTreeAnimationBlocked()) return (o.target = void 0), void (o.relativeTarget = void 0);
                      var d =
                          null !== (n = null !== (e = o.options.transition) && void 0 !== e ? e : u.getDefaultTransition()) && void 0 !== n
                            ? n
                            : rs,
                        p = u.getProps(),
                        v = p.onLayoutAnimationStart,
                        h = p.onLayoutAnimationComplete,
                        m = !o.targetLayout || !Fa(o.targetLayout, f) || c,
                        g = !l && c;
                      if ((null === (r = o.resumeFrom) || void 0 === r ? void 0 : r.instance) || g || (l && (m || !o.currentAnimation))) {
                        o.resumeFrom && ((o.resumingFrom = o.resumeFrom), (o.resumingFrom.resumingFrom = void 0)),
                          o.setAnimationOrigin(s, g);
                        var y = b(b({}, So(d, "layout")), { onPlay: v, onComplete: h });
                        u.shouldReduceMotion && ((y.delay = 0), (y.type = !1)), o.startAnimation(y);
                      } else
                        l || 0 !== o.animationProgress || o.finishAnimation(),
                          o.isLead() && (null === (a = (i = o.options).onExitComplete) || void 0 === a || a.call(i));
                      o.targetLayout = f;
                    });
              }
            }),
            (t.prototype.unmount = function () {
              var t, e;
              this.options.layoutId && this.willUpdate(),
                this.root.nodes.remove(this),
                null === (t = this.getStack()) || void 0 === t || t.remove(this),
                null === (e = this.parent) || void 0 === e || e.children.delete(this),
                (this.instance = void 0),
                Mr.preRender(this.updateProjection);
            }),
            (t.prototype.blockUpdate = function () {
              this.updateManuallyBlocked = !0;
            }),
            (t.prototype.unblockUpdate = function () {
              this.updateManuallyBlocked = !1;
            }),
            (t.prototype.isUpdateBlocked = function () {
              return this.updateManuallyBlocked || this.updateBlockedByResize;
            }),
            (t.prototype.isTreeAnimationBlocked = function () {
              var t;
              return this.isAnimationBlocked || (null === (t = this.parent) || void 0 === t ? void 0 : t.isTreeAnimationBlocked()) || !1;
            }),
            (t.prototype.startUpdate = function () {
              var t;
              this.isUpdateBlocked() || ((this.isUpdating = !0), null === (t = this.nodes) || void 0 === t || t.forEach(Ja));
            }),
            (t.prototype.willUpdate = function (t) {
              var e, n, r;
              if ((void 0 === t && (t = !0), this.root.isUpdateBlocked()))
                null === (n = (e = this.options).onExitComplete) || void 0 === n || n.call(e);
              else if ((!this.root.isUpdating && this.root.startUpdate(), !this.isLayoutDirty)) {
                this.isLayoutDirty = !0;
                for (var o = 0; o < this.path.length; o++) {
                  var i = this.path[o];
                  (i.shouldResetTransform = !0), i.updateScroll();
                }
                var a = this.options,
                  s = a.layoutId,
                  u = a.layout;
                if (void 0 !== s || u) {
                  var l = null === (r = this.options.visualElement) || void 0 === r ? void 0 : r.getProps().transformTemplate;
                  (this.prevTransformTemplateValue = null === l || void 0 === l ? void 0 : l(this.latestValues, "")),
                    this.updateSnapshot(),
                    t && this.notifyListeners("willUpdate");
                }
              }
            }),
            (t.prototype.didUpdate = function () {
              if (this.isUpdateBlocked()) return this.unblockUpdate(), this.clearAllSnapshots(), void this.nodes.forEach(Xa);
              this.isUpdating &&
                ((this.isUpdating = !1),
                this.potentialNodes.size && (this.potentialNodes.forEach(os), this.potentialNodes.clear()),
                this.nodes.forEach(Za),
                this.nodes.forEach(_a),
                this.nodes.forEach(qa),
                this.clearAllSnapshots(),
                Lr.update(),
                Lr.preRender(),
                Lr.render());
            }),
            (t.prototype.clearAllSnapshots = function () {
              this.nodes.forEach(Ya), this.sharedNodes.forEach(Qa);
            }),
            (t.prototype.scheduleUpdateProjection = function () {
              Ir.preRender(this.updateProjection, !1, !0);
            }),
            (t.prototype.scheduleCheckAfterUnmount = function () {
              var t = this;
              Ir.postRender(function () {
                t.isLayoutDirty ? t.root.didUpdate() : t.root.checkUpdateFailed();
              });
            }),
            (t.prototype.updateSnapshot = function () {
              if (!this.snapshot && this.instance) {
                var t = this.measure(),
                  e = this.removeTransform(this.removeElementScroll(t));
                as(e), (this.snapshot = { measured: t, layout: e, latestValues: {} });
              }
            }),
            (t.prototype.updateLayout = function () {
              var t;
              if (this.instance && (this.updateScroll(), (this.options.alwaysMeasureLayout && this.isLead()) || this.isLayoutDirty)) {
                if (this.resumeFrom && !this.resumeFrom.instance)
                  for (var e = 0; e < this.path.length; e++) {
                    this.path[e].updateScroll();
                  }
                var n = this.measure();
                as(n);
                var r = this.layout;
                (this.layout = { measured: n, actual: this.removeElementScroll(n) }),
                  (this.layoutCorrected = wi()),
                  (this.isLayoutDirty = !1),
                  (this.projectionDelta = void 0),
                  this.notifyListeners("measure", this.layout.actual),
                  null === (t = this.options.visualElement) ||
                    void 0 === t ||
                    t.notifyLayoutMeasure(this.layout.actual, null === r || void 0 === r ? void 0 : r.actual);
              }
            }),
            (t.prototype.updateScroll = function () {
              this.options.layoutScroll && this.instance && ((this.isScrollRoot = o(this.instance)), (this.scroll = r(this.instance)));
            }),
            (t.prototype.resetTransform = function () {
              var t;
              if (i) {
                var e = this.isLayoutDirty || this.shouldResetTransform,
                  n = this.projectionDelta && !Ba(this.projectionDelta),
                  r = null === (t = this.options.visualElement) || void 0 === t ? void 0 : t.getProps().transformTemplate,
                  o = null === r || void 0 === r ? void 0 : r(this.latestValues, ""),
                  a = o !== this.prevTransformTemplateValue;
                e && (n || Ti(this.latestValues) || a) && (i(this.instance, o), (this.shouldResetTransform = !1), this.scheduleRender());
              }
            }),
            (t.prototype.measure = function () {
              var t = this.options.visualElement;
              if (!t) return wi();
              var e = t.measureViewportBox(),
                n = this.root.scroll;
              return n && (Mi(e.x, n.x), Mi(e.y, n.y)), e;
            }),
            (t.prototype.removeElementScroll = function (t) {
              var e = wi();
              ka(e, t);
              for (var n = 0; n < this.path.length; n++) {
                var r = this.path[n],
                  o = r.scroll,
                  i = r.options,
                  a = r.isScrollRoot;
                if (r !== this.root && o && i.layoutScroll) {
                  if (a) {
                    ka(e, t);
                    var s = this.root.scroll;
                    s && (Mi(e.x, -s.x), Mi(e.y, -s.y));
                  }
                  Mi(e.x, o.x), Mi(e.y, o.y);
                }
              }
              return e;
            }),
            (t.prototype.applyTransform = function (t, e) {
              void 0 === e && (e = !1);
              var n = wi();
              ka(n, t);
              for (var r = 0; r < this.path.length; r++) {
                var o = this.path[r];
                !e && o.options.layoutScroll && o.scroll && o !== o.root && Bi(n, { x: -o.scroll.x, y: -o.scroll.y }),
                  Ti(o.latestValues) && Bi(n, o.latestValues);
              }
              return Ti(this.latestValues) && Bi(n, this.latestValues), n;
            }),
            (t.prototype.removeTransform = function (t) {
              var e,
                n = wi();
              ka(n, t);
              for (var r = 0; r < this.path.length; r++) {
                var o = this.path[r];
                if (o.instance && Ti(o.latestValues)) {
                  Ai(o.latestValues) && o.updateSnapshot();
                  var i = wi();
                  ka(i, o.measure()), Da(n, o.latestValues, null === (e = o.snapshot) || void 0 === e ? void 0 : e.layout, i);
                }
              }
              return Ti(this.latestValues) && Da(n, this.latestValues), n;
            }),
            (t.prototype.setTargetDelta = function (t) {
              (this.targetDelta = t), this.root.scheduleUpdateProjection();
            }),
            (t.prototype.setOptions = function (t) {
              var e;
              this.options = b(b(b({}, this.options), t), { crossfade: null === (e = t.crossfade) || void 0 === e || e });
            }),
            (t.prototype.clearMeasurements = function () {
              (this.scroll = void 0),
                (this.layout = void 0),
                (this.snapshot = void 0),
                (this.prevTransformTemplateValue = void 0),
                (this.targetDelta = void 0),
                (this.target = void 0),
                (this.isLayoutDirty = !1);
            }),
            (t.prototype.resolveTargetDelta = function () {
              var t,
                e,
                n,
                r,
                o = this.options,
                i = o.layout,
                a = o.layoutId;
              this.layout &&
                (i || a) &&
                (this.targetDelta ||
                  this.relativeTarget ||
                  ((this.relativeParent = this.getClosestProjectingParent()),
                  this.relativeParent &&
                    this.relativeParent.layout &&
                    ((this.relativeTarget = wi()),
                    (this.relativeTargetOrigin = wi()),
                    vi(this.relativeTargetOrigin, this.layout.actual, this.relativeParent.layout.actual),
                    ka(this.relativeTarget, this.relativeTargetOrigin))),
                (this.relativeTarget || this.targetDelta) &&
                  (this.target || ((this.target = wi()), (this.targetWithTransforms = wi())),
                  this.relativeTarget &&
                  this.relativeTargetOrigin &&
                  (null === (t = this.relativeParent) || void 0 === t ? void 0 : t.target)
                    ? ((e = this.target), (n = this.relativeTarget), (r = this.relativeParent.target), di(e.x, n.x, r.x), di(e.y, n.y, r.y))
                    : this.targetDelta
                    ? (Boolean(this.resumingFrom)
                        ? (this.target = this.applyTransform(this.layout.actual))
                        : ka(this.target, this.layout.actual),
                      Ri(this.target, this.targetDelta))
                    : ka(this.target, this.layout.actual),
                  this.attemptToResolveRelativeTarget &&
                    ((this.attemptToResolveRelativeTarget = !1),
                    (this.relativeParent = this.getClosestProjectingParent()),
                    this.relativeParent &&
                      Boolean(this.relativeParent.resumingFrom) === Boolean(this.resumingFrom) &&
                      !this.relativeParent.options.layoutScroll &&
                      this.relativeParent.target &&
                      ((this.relativeTarget = wi()),
                      (this.relativeTargetOrigin = wi()),
                      vi(this.relativeTargetOrigin, this.target, this.relativeParent.target),
                      ka(this.relativeTarget, this.relativeTargetOrigin)))));
            }),
            (t.prototype.getClosestProjectingParent = function () {
              if (this.parent && !Ti(this.parent.latestValues))
                return (this.parent.relativeTarget || this.parent.targetDelta) && this.parent.layout
                  ? this.parent
                  : this.parent.getClosestProjectingParent();
            }),
            (t.prototype.calcProjection = function () {
              var t,
                e = this.options,
                n = e.layout,
                r = e.layoutId;
              if (
                ((this.isTreeAnimating = Boolean(
                  (null === (t = this.parent) || void 0 === t ? void 0 : t.isTreeAnimating) ||
                    this.currentAnimation ||
                    this.pendingAnimation
                )),
                this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
                this.layout && (n || r))
              ) {
                var o = this.getLead();
                ka(this.layoutCorrected, this.layout.actual),
                  (function (t, e, n, r) {
                    var o, i;
                    void 0 === r && (r = !1);
                    var a = n.length;
                    if (a) {
                      var s, u;
                      e.x = e.y = 1;
                      for (var l = 0; l < a; l++)
                        (u = (s = n[l]).projectionDelta),
                          "contents" !==
                            (null === (i = null === (o = s.instance) || void 0 === o ? void 0 : o.style) || void 0 === i
                              ? void 0
                              : i.display) &&
                            (r && s.options.layoutScroll && s.scroll && s !== s.root && Bi(t, { x: -s.scroll.x, y: -s.scroll.y }),
                            u && ((e.x *= u.x.scale), (e.y *= u.y.scale), Ri(t, u)),
                            r && Ti(s.latestValues) && Bi(t, s.latestValues));
                    }
                  })(this.layoutCorrected, this.treeScale, this.path, Boolean(this.resumingFrom) || this !== o);
                var i = o.target;
                if (i) {
                  this.projectionDelta || ((this.projectionDelta = xi()), (this.projectionDeltaWithTransform = xi()));
                  var a = this.treeScale.x,
                    s = this.treeScale.y,
                    u = this.projectionTransform;
                  fi(this.projectionDelta, this.layoutCorrected, i, this.latestValues),
                    (this.projectionTransform = Na(this.projectionDelta, this.treeScale)),
                    (this.projectionTransform === u && this.treeScale.x === a && this.treeScale.y === s) ||
                      ((this.hasProjected = !0), this.scheduleRender(), this.notifyListeners("projectionUpdate", i));
                }
              }
            }),
            (t.prototype.hide = function () {
              this.isVisible = !1;
            }),
            (t.prototype.show = function () {
              this.isVisible = !0;
            }),
            (t.prototype.scheduleRender = function (t) {
              var e, n, r;
              void 0 === t && (t = !0),
                null === (n = (e = this.options).scheduleRender) || void 0 === n || n.call(e),
                t && (null === (r = this.getStack()) || void 0 === r || r.scheduleRender()),
                this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
            }),
            (t.prototype.setAnimationOrigin = function (t, e) {
              var n,
                r = this;
              void 0 === e && (e = !1);
              var o = this.snapshot,
                i = (null === o || void 0 === o ? void 0 : o.latestValues) || {},
                a = b({}, this.latestValues),
                s = xi();
              (this.relativeTarget = this.relativeTargetOrigin = void 0), (this.attemptToResolveRelativeTarget = !e);
              var u = wi(),
                l = null === o || void 0 === o ? void 0 : o.isShared,
                c = ((null === (n = this.getStack()) || void 0 === n ? void 0 : n.members.length) || 0) <= 1,
                f = Boolean(l && !c && !0 === this.options.crossfade && !this.path.some(ns));
              (this.animationProgress = 0),
                (this.mixTargetDelta = function (e) {
                  var n,
                    o,
                    d,
                    p,
                    v,
                    h = e / 1e3;
                  ts(s.x, t.x, h),
                    ts(s.y, t.y, h),
                    r.setTargetDelta(s),
                    r.relativeTarget &&
                      r.relativeTargetOrigin &&
                      r.layout &&
                      (null === (n = r.relativeParent) || void 0 === n ? void 0 : n.layout) &&
                      (vi(u, r.layout.actual, r.relativeParent.layout.actual),
                      (o = r.relativeTarget),
                      (d = r.relativeTargetOrigin),
                      (p = u),
                      (v = h),
                      es(o.x, d.x, p.x, v),
                      es(o.y, d.y, p.y, v)),
                    l &&
                      ((r.animationValues = a),
                      (function (t, e, n, r, o, i) {
                        var a, s, u, l;
                        o
                          ? ((t.opacity = Pn(0, null !== (a = n.opacity) && void 0 !== a ? a : 1, Aa(r))),
                            (t.opacityExit = Pn(null !== (s = e.opacity) && void 0 !== s ? s : 1, 0, Ta(r))))
                          : i &&
                            (t.opacity = Pn(
                              null !== (u = e.opacity) && void 0 !== u ? u : 1,
                              null !== (l = n.opacity) && void 0 !== l ? l : 1,
                              r
                            ));
                        for (var c = 0; c < wa; c++) {
                          var f = "border".concat(xa[c], "Radius"),
                            d = Sa(e, f),
                            p = Sa(n, f);
                          (void 0 === d && void 0 === p) ||
                            (d || (d = 0),
                            p || (p = 0),
                            0 === d || 0 === p || Ea(d) === Ea(p)
                              ? ((t[f] = Math.max(Pn(Pa(d), Pa(p), r), 0)), (Tt.test(p) || Tt.test(d)) && (t[f] += "%"))
                              : (t[f] = p));
                        }
                        (e.rotate || n.rotate) && (t.rotate = Pn(e.rotate || 0, n.rotate || 0, r));
                      })(a, i, r.latestValues, h, f, c)),
                    r.root.scheduleUpdateProjection(),
                    r.scheduleRender(),
                    (r.animationProgress = h);
                }),
                this.mixTargetDelta(0);
            }),
            (t.prototype.startAnimation = function (t) {
              var e,
                n,
                r = this;
              this.notifyListeners("animationStart"),
                null === (e = this.currentAnimation) || void 0 === e || e.stop(),
                this.resumingFrom && (null === (n = this.resumingFrom.currentAnimation) || void 0 === n || n.stop()),
                this.pendingAnimation && (Mr.update(this.pendingAnimation), (this.pendingAnimation = void 0)),
                (this.pendingAnimation = Ir.update(function () {
                  ($.hasAnimatedSinceResize = !0),
                    (r.currentAnimation = (function (t, e, n) {
                      void 0 === n && (n = {});
                      var r = vt(t) ? t : Ro(t);
                      return (
                        Ao("", r, e, n),
                        {
                          stop: function () {
                            return r.stop();
                          },
                          isAnimating: function () {
                            return r.isAnimating();
                          }
                        }
                      );
                    })(
                      0,
                      1e3,
                      b(b({}, t), {
                        onUpdate: function (e) {
                          var n;
                          r.mixTargetDelta(e), null === (n = t.onUpdate) || void 0 === n || n.call(t, e);
                        },
                        onComplete: function () {
                          var e;
                          null === (e = t.onComplete) || void 0 === e || e.call(t), r.completeAnimation();
                        }
                      })
                    )),
                    r.resumingFrom && (r.resumingFrom.currentAnimation = r.currentAnimation),
                    (r.pendingAnimation = void 0);
                }));
            }),
            (t.prototype.completeAnimation = function () {
              var t;
              this.resumingFrom && ((this.resumingFrom.currentAnimation = void 0), (this.resumingFrom.preserveOpacity = void 0)),
                null === (t = this.getStack()) || void 0 === t || t.exitAnimationComplete(),
                (this.resumingFrom = this.currentAnimation = this.animationValues = void 0),
                this.notifyListeners("animationComplete");
            }),
            (t.prototype.finishAnimation = function () {
              var t;
              this.currentAnimation &&
                (null === (t = this.mixTargetDelta) || void 0 === t || t.call(this, 1e3), this.currentAnimation.stop()),
                this.completeAnimation();
            }),
            (t.prototype.applyTransformsToTarget = function () {
              var t = this.getLead(),
                e = t.targetWithTransforms,
                n = t.target,
                r = t.layout,
                o = t.latestValues;
              e && n && r && (ka(e, n), Bi(e, o), fi(this.projectionDeltaWithTransform, this.layoutCorrected, e, o));
            }),
            (t.prototype.registerSharedNode = function (t, e) {
              var n, r, o;
              this.sharedNodes.has(t) || this.sharedNodes.set(t, new Ia()),
                this.sharedNodes.get(t).add(e),
                e.promote({
                  transition: null === (n = e.options.initialPromotionConfig) || void 0 === n ? void 0 : n.transition,
                  preserveFollowOpacity:
                    null ===
                      (o = null === (r = e.options.initialPromotionConfig) || void 0 === r ? void 0 : r.shouldPreserveFollowOpacity) ||
                    void 0 === o
                      ? void 0
                      : o.call(r, e)
                });
            }),
            (t.prototype.isLead = function () {
              var t = this.getStack();
              return !t || t.lead === this;
            }),
            (t.prototype.getLead = function () {
              var t;
              return (this.options.layoutId && (null === (t = this.getStack()) || void 0 === t ? void 0 : t.lead)) || this;
            }),
            (t.prototype.getPrevLead = function () {
              var t;
              return this.options.layoutId ? (null === (t = this.getStack()) || void 0 === t ? void 0 : t.prevLead) : void 0;
            }),
            (t.prototype.getStack = function () {
              var t = this.options.layoutId;
              if (t) return this.root.sharedNodes.get(t);
            }),
            (t.prototype.promote = function (t) {
              var e = void 0 === t ? {} : t,
                n = e.needsReset,
                r = e.transition,
                o = e.preserveFollowOpacity,
                i = this.getStack();
              i && i.promote(this, o),
                n && ((this.projectionDelta = void 0), (this.needsReset = !0)),
                r && this.setOptions({ transition: r });
            }),
            (t.prototype.relegate = function () {
              var t = this.getStack();
              return !!t && t.relegate(this);
            }),
            (t.prototype.resetRotation = function () {
              var t = this.options.visualElement;
              if (t) {
                for (var e = !1, n = {}, r = 0; r < at.length; r++) {
                  var o = "rotate" + at[r];
                  t.getStaticValue(o) && ((e = !0), (n[o] = t.getStaticValue(o)), t.setStaticValue(o, 0));
                }
                if (e) {
                  for (var o in (null === t || void 0 === t || t.syncRender(), n)) t.setStaticValue(o, n[o]);
                  t.scheduleRender();
                }
              }
            }),
            (t.prototype.getProjectionStyles = function (t) {
              var e, n, r, o, i, a;
              void 0 === t && (t = {});
              var s = {};
              if (!this.instance || this.isSVG) return s;
              if (!this.isVisible) return { visibility: "hidden" };
              s.visibility = "";
              var u = null === (e = this.options.visualElement) || void 0 === e ? void 0 : e.getProps().transformTemplate;
              if (this.needsReset)
                return (
                  (this.needsReset = !1),
                  (s.opacity = ""),
                  (s.pointerEvents = le(t.pointerEvents) || ""),
                  (s.transform = u ? u(this.latestValues, "") : "none"),
                  s
                );
              var l = this.getLead();
              if (!this.projectionDelta || !this.layout || !l.target) {
                var c = {};
                return (
                  this.options.layoutId &&
                    ((c.opacity = null !== (n = this.latestValues.opacity) && void 0 !== n ? n : 1),
                    (c.pointerEvents = le(t.pointerEvents) || "")),
                  this.hasProjected && !Ti(this.latestValues) && ((c.transform = u ? u({}, "") : "none"), (this.hasProjected = !1)),
                  c
                );
              }
              var f = l.animationValues || l.latestValues;
              this.applyTransformsToTarget(),
                (s.transform = Na(this.projectionDeltaWithTransform, this.treeScale, f)),
                u && (s.transform = u(f, s.transform));
              var d = this.projectionDelta,
                p = d.x,
                v = d.y;
              for (var h in ((s.transformOrigin = "".concat(100 * p.origin, "% ").concat(100 * v.origin, "% 0")),
              l.animationValues
                ? (s.opacity =
                    l === this
                      ? null !== (o = null !== (r = f.opacity) && void 0 !== r ? r : this.latestValues.opacity) && void 0 !== o
                        ? o
                        : 1
                      : this.preserveOpacity
                      ? this.latestValues.opacity
                      : f.opacityExit)
                : (s.opacity =
                    l === this
                      ? null !== (i = f.opacity) && void 0 !== i
                        ? i
                        : ""
                      : null !== (a = f.opacityExit) && void 0 !== a
                      ? a
                      : 0),
              it))
                if (void 0 !== f[h]) {
                  var m = it[h],
                    g = m.correct,
                    y = m.applyTo,
                    b = g(f[h], l);
                  if (y) for (var x = y.length, w = 0; w < x; w++) s[y[w]] = b;
                  else s[h] = b;
                }
              return this.options.layoutId && (s.pointerEvents = l === this ? le(t.pointerEvents) || "" : "none"), s;
            }),
            (t.prototype.clearSnapshot = function () {
              this.resumeFrom = this.snapshot = void 0;
            }),
            (t.prototype.resetTree = function () {
              this.root.nodes.forEach(function (t) {
                var e;
                return null === (e = t.currentAnimation) || void 0 === e ? void 0 : e.stop();
              }),
                this.root.nodes.forEach(Xa),
                this.root.sharedNodes.clear();
            }),
            t
          );
        })();
      }
      function _a(t) {
        t.updateLayout();
      }
      function qa(t) {
        var e,
          n,
          r,
          o,
          i = null !== (n = null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) && void 0 !== n ? n : t.snapshot;
        if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
          var a = t.layout,
            s = a.actual,
            u = a.measured;
          "size" === t.options.animationType
            ? Pi(function (t) {
                var e = i.isShared ? i.measured[t] : i.layout[t],
                  n = ui(e);
                (e.min = s[t].min), (e.max = e.min + n);
              })
            : "position" === t.options.animationType &&
              Pi(function (t) {
                var e = i.isShared ? i.measured[t] : i.layout[t],
                  n = ui(s[t]);
                e.max = e.min + n;
              });
          var l = xi();
          fi(l, s, i.layout);
          var c = xi();
          i.isShared ? fi(c, t.applyTransform(u, !0), i.measured) : fi(c, s, i.layout);
          var f = !Ba(l),
            d = !1;
          if (!t.resumeFrom && ((t.relativeParent = t.getClosestProjectingParent()), t.relativeParent && !t.relativeParent.resumeFrom)) {
            var p = t.relativeParent,
              v = p.snapshot,
              h = p.layout;
            if (v && h) {
              var m = wi();
              vi(m, i.layout, v.layout);
              var g = wi();
              vi(g, s, h.actual), Fa(m, g) || (d = !0);
            }
          }
          t.notifyListeners("didUpdate", {
            layout: s,
            snapshot: i,
            delta: c,
            layoutDelta: l,
            hasLayoutChanged: f,
            hasRelativeTargetChanged: d
          });
        } else t.isLead() && (null === (o = (r = t.options).onExitComplete) || void 0 === o || o.call(r));
        t.options.transition = void 0;
      }
      function Ya(t) {
        t.clearSnapshot();
      }
      function Xa(t) {
        t.clearMeasurements();
      }
      function Za(t) {
        var e = t.options.visualElement;
        (null === e || void 0 === e ? void 0 : e.getProps().onBeforeLayoutMeasure) && e.notifyBeforeLayoutMeasure(), t.resetTransform();
      }
      function Ga(t) {
        t.finishAnimation(), (t.targetDelta = t.relativeTarget = t.target = void 0);
      }
      function $a(t) {
        t.resolveTargetDelta();
      }
      function Ka(t) {
        t.calcProjection();
      }
      function Ja(t) {
        t.resetRotation();
      }
      function Qa(t) {
        t.removeLeadSnapshot();
      }
      function ts(t, e, n) {
        (t.translate = Pn(e.translate, 0, n)), (t.scale = Pn(e.scale, 1, n)), (t.origin = e.origin), (t.originPoint = e.originPoint);
      }
      function es(t, e, n, r) {
        (t.min = Pn(e.min, n.min, r)), (t.max = Pn(e.max, n.max, r));
      }
      function ns(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit;
      }
      var rs = { duration: 0.45, ease: [0.4, 0, 0.1, 1] };
      function os(t, e) {
        for (var n = t.root, r = t.path.length - 1; r >= 0; r--)
          if (Boolean(t.path[r].instance)) {
            n = t.path[r];
            break;
          }
        var o = (n && n !== t.root ? n.instance : document).querySelector('[data-projection-id="'.concat(e, '"]'));
        o && t.mount(o, !0);
      }
      function is(t) {
        (t.min = Math.round(t.min)), (t.max = Math.round(t.max));
      }
      function as(t) {
        is(t.x), is(t.y);
      }
      var ss = Wa({
          attachResizeListener: function (t, e) {
            return me(t, "resize", e);
          },
          measureScroll: function () {
            return {
              x: document.documentElement.scrollLeft || document.body.scrollLeft,
              y: document.documentElement.scrollTop || document.body.scrollTop
            };
          },
          checkIsScrollRoot: function () {
            return !0;
          }
        }),
        us = { current: void 0 },
        ls = Wa({
          measureScroll: function (t) {
            return { x: t.scrollLeft, y: t.scrollTop };
          },
          defaultParent: function () {
            if (!us.current) {
              var t = new ss(0, {});
              t.mount(window), t.setOptions({ layoutScroll: !0 }), (us.current = t);
            }
            return us.current;
          },
          resetTransform: function (t, e) {
            t.style.transform = null !== e && void 0 !== e ? e : "none";
          },
          checkIsScrollRoot: function (t) {
            return Boolean("fixed" === window.getComputedStyle(t).position);
          }
        }),
        cs = b(b(b(b({}, $o), Qe), zi), ba),
        fs = nt(function (t, e) {
          return (function (t, e, n, r, o) {
            var i = e.forwardMotionProps,
              a = void 0 !== i && i,
              s = ot(t) ? ve : he;
            return b(b({}, s), {
              preloadedFeatures: n,
              useRender: Kt(a),
              createVisualElement: r,
              projectionNodeConstructor: o,
              Component: t
            });
          })(t, e, cs, da, ls);
        });
      var ds = n(87291),
        ps = n(65646);
      function vs(t) {
        if (null == t) return window;
        if ("[object Window]" !== t.toString()) {
          var e = t.ownerDocument;
          return (e && e.defaultView) || window;
        }
        return t;
      }
      function hs(t) {
        return t instanceof vs(t).Element || t instanceof Element;
      }
      function ms(t) {
        return t instanceof vs(t).HTMLElement || t instanceof HTMLElement;
      }
      function gs(t) {
        return "undefined" !== typeof ShadowRoot && (t instanceof vs(t).ShadowRoot || t instanceof ShadowRoot);
      }
      var ys = Math.max,
        bs = Math.min,
        xs = Math.round;
      function ws() {
        var t = navigator.userAgentData;
        return null != t && t.brands && Array.isArray(t.brands)
          ? t.brands
              .map(function (t) {
                return t.brand + "/" + t.version;
              })
              .join(" ")
          : navigator.userAgent;
      }
      function Ps() {
        return !/^((?!chrome|android).)*safari/i.test(ws());
      }
      function Es(t, e, n) {
        void 0 === e && (e = !1), void 0 === n && (n = !1);
        var r = t.getBoundingClientRect(),
          o = 1,
          i = 1;
        e &&
          ms(t) &&
          ((o = (t.offsetWidth > 0 && xs(r.width) / t.offsetWidth) || 1), (i = (t.offsetHeight > 0 && xs(r.height) / t.offsetHeight) || 1));
        var a = (hs(t) ? vs(t) : window).visualViewport,
          s = !Ps() && n,
          u = (r.left + (s && a ? a.offsetLeft : 0)) / o,
          l = (r.top + (s && a ? a.offsetTop : 0)) / i,
          c = r.width / o,
          f = r.height / i;
        return { width: c, height: f, top: l, right: u + c, bottom: l + f, left: u, x: u, y: l };
      }
      function Ss(t) {
        var e = vs(t);
        return { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
      }
      function As(t) {
        return t ? (t.nodeName || "").toLowerCase() : null;
      }
      function Ts(t) {
        return ((hs(t) ? t.ownerDocument : t.document) || window.document).documentElement;
      }
      function Os(t) {
        return Es(Ts(t)).left + Ss(t).scrollLeft;
      }
      function Cs(t) {
        return vs(t).getComputedStyle(t);
      }
      function ks(t) {
        var e = Cs(t),
          n = e.overflow,
          r = e.overflowX,
          o = e.overflowY;
        return /auto|scroll|overlay|hidden/.test(n + o + r);
      }
      function Vs(t, e, n) {
        void 0 === n && (n = !1);
        var r = ms(e),
          o =
            ms(e) &&
            (function (t) {
              var e = t.getBoundingClientRect(),
                n = xs(e.width) / t.offsetWidth || 1,
                r = xs(e.height) / t.offsetHeight || 1;
              return 1 !== n || 1 !== r;
            })(e),
          i = Ts(e),
          a = Es(t, o, n),
          s = { scrollLeft: 0, scrollTop: 0 },
          u = { x: 0, y: 0 };
        return (
          (r || (!r && !n)) &&
            (("body" !== As(e) || ks(i)) &&
              (s = (function (t) {
                return t !== vs(t) && ms(t) ? { scrollLeft: (e = t).scrollLeft, scrollTop: e.scrollTop } : Ss(t);
                var e;
              })(e)),
            ms(e) ? (((u = Es(e, !0)).x += e.clientLeft), (u.y += e.clientTop)) : i && (u.x = Os(i))),
          { x: a.left + s.scrollLeft - u.x, y: a.top + s.scrollTop - u.y, width: a.width, height: a.height }
        );
      }
      function Rs(t) {
        var e = Es(t),
          n = t.offsetWidth,
          r = t.offsetHeight;
        return (
          Math.abs(e.width - n) <= 1 && (n = e.width),
          Math.abs(e.height - r) <= 1 && (r = e.height),
          { x: t.offsetLeft, y: t.offsetTop, width: n, height: r }
        );
      }
      function Ms(t) {
        return "html" === As(t) ? t : t.assignedSlot || t.parentNode || (gs(t) ? t.host : null) || Ts(t);
      }
      function Ls(t) {
        return ["html", "body", "#document"].indexOf(As(t)) >= 0 ? t.ownerDocument.body : ms(t) && ks(t) ? t : Ls(Ms(t));
      }
      function Ds(t, e) {
        var n;
        void 0 === e && (e = []);
        var r = Ls(t),
          o = r === (null == (n = t.ownerDocument) ? void 0 : n.body),
          i = vs(r),
          a = o ? [i].concat(i.visualViewport || [], ks(r) ? r : []) : r,
          s = e.concat(a);
        return o ? s : s.concat(Ds(Ms(a)));
      }
      function js(t) {
        return ["table", "td", "th"].indexOf(As(t)) >= 0;
      }
      function Bs(t) {
        return ms(t) && "fixed" !== Cs(t).position ? t.offsetParent : null;
      }
      function Fs(t) {
        for (var e = vs(t), n = Bs(t); n && js(n) && "static" === Cs(n).position; ) n = Bs(n);
        return n && ("html" === As(n) || ("body" === As(n) && "static" === Cs(n).position))
          ? e
          : n ||
              (function (t) {
                var e = /firefox/i.test(ws());
                if (/Trident/i.test(ws()) && ms(t) && "fixed" === Cs(t).position) return null;
                var n = Ms(t);
                for (gs(n) && (n = n.host); ms(n) && ["html", "body"].indexOf(As(n)) < 0; ) {
                  var r = Cs(n);
                  if (
                    "none" !== r.transform ||
                    "none" !== r.perspective ||
                    "paint" === r.contain ||
                    -1 !== ["transform", "perspective"].indexOf(r.willChange) ||
                    (e && "filter" === r.willChange) ||
                    (e && r.filter && "none" !== r.filter)
                  )
                    return n;
                  n = n.parentNode;
                }
                return null;
              })(t) ||
              e;
      }
      var Is = "top",
        Us = "bottom",
        Ns = "right",
        zs = "left",
        Hs = "auto",
        Ws = [Is, Us, Ns, zs],
        _s = "start",
        qs = "end",
        Ys = "clippingParents",
        Xs = "viewport",
        Zs = "popper",
        Gs = "reference",
        $s = Ws.reduce(function (t, e) {
          return t.concat([e + "-" + _s, e + "-" + qs]);
        }, []),
        Ks = [].concat(Ws, [Hs]).reduce(function (t, e) {
          return t.concat([e, e + "-" + _s, e + "-" + qs]);
        }, []),
        Js = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];
      function Qs(t) {
        var e = new Map(),
          n = new Set(),
          r = [];
        function o(t) {
          n.add(t.name),
            [].concat(t.requires || [], t.requiresIfExists || []).forEach(function (t) {
              if (!n.has(t)) {
                var r = e.get(t);
                r && o(r);
              }
            }),
            r.push(t);
        }
        return (
          t.forEach(function (t) {
            e.set(t.name, t);
          }),
          t.forEach(function (t) {
            n.has(t.name) || o(t);
          }),
          r
        );
      }
      function tu(t) {
        var e;
        return function () {
          return (
            e ||
              (e = new Promise(function (n) {
                Promise.resolve().then(function () {
                  (e = void 0), n(t());
                });
              })),
            e
          );
        };
      }
      var eu = { placement: "bottom", modifiers: [], strategy: "absolute" };
      function nu() {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
        return !e.some(function (t) {
          return !(t && "function" === typeof t.getBoundingClientRect);
        });
      }
      function ru(t) {
        void 0 === t && (t = {});
        var e = t,
          n = e.defaultModifiers,
          r = void 0 === n ? [] : n,
          o = e.defaultOptions,
          i = void 0 === o ? eu : o;
        return function (t, e, n) {
          void 0 === n && (n = i);
          var o = {
              placement: "bottom",
              orderedModifiers: [],
              options: Object.assign({}, eu, i),
              modifiersData: {},
              elements: { reference: t, popper: e },
              attributes: {},
              styles: {}
            },
            a = [],
            s = !1,
            u = {
              state: o,
              setOptions: function (n) {
                var s = "function" === typeof n ? n(o.options) : n;
                l(),
                  (o.options = Object.assign({}, i, o.options, s)),
                  (o.scrollParents = { reference: hs(t) ? Ds(t) : t.contextElement ? Ds(t.contextElement) : [], popper: Ds(e) });
                var c = (function (t) {
                  var e = Qs(t);
                  return Js.reduce(function (t, n) {
                    return t.concat(
                      e.filter(function (t) {
                        return t.phase === n;
                      })
                    );
                  }, []);
                })(
                  (function (t) {
                    var e = t.reduce(function (t, e) {
                      var n = t[e.name];
                      return (
                        (t[e.name] = n
                          ? Object.assign({}, n, e, {
                              options: Object.assign({}, n.options, e.options),
                              data: Object.assign({}, n.data, e.data)
                            })
                          : e),
                        t
                      );
                    }, {});
                    return Object.keys(e).map(function (t) {
                      return e[t];
                    });
                  })([].concat(r, o.options.modifiers))
                );
                return (
                  (o.orderedModifiers = c.filter(function (t) {
                    return t.enabled;
                  })),
                  o.orderedModifiers.forEach(function (t) {
                    var e = t.name,
                      n = t.options,
                      r = void 0 === n ? {} : n,
                      i = t.effect;
                    if ("function" === typeof i) {
                      var s = i({ state: o, name: e, instance: u, options: r }),
                        l = function () {};
                      a.push(s || l);
                    }
                  }),
                  u.update()
                );
              },
              forceUpdate: function () {
                if (!s) {
                  var t = o.elements,
                    e = t.reference,
                    n = t.popper;
                  if (nu(e, n)) {
                    (o.rects = { reference: Vs(e, Fs(n), "fixed" === o.options.strategy), popper: Rs(n) }),
                      (o.reset = !1),
                      (o.placement = o.options.placement),
                      o.orderedModifiers.forEach(function (t) {
                        return (o.modifiersData[t.name] = Object.assign({}, t.data));
                      });
                    for (var r = 0; r < o.orderedModifiers.length; r++)
                      if (!0 !== o.reset) {
                        var i = o.orderedModifiers[r],
                          a = i.fn,
                          l = i.options,
                          c = void 0 === l ? {} : l,
                          f = i.name;
                        "function" === typeof a && (o = a({ state: o, options: c, name: f, instance: u }) || o);
                      } else (o.reset = !1), (r = -1);
                  }
                }
              },
              update: tu(function () {
                return new Promise(function (t) {
                  u.forceUpdate(), t(o);
                });
              }),
              destroy: function () {
                l(), (s = !0);
              }
            };
          if (!nu(t, e)) return u;
          function l() {
            a.forEach(function (t) {
              return t();
            }),
              (a = []);
          }
          return (
            u.setOptions(n).then(function (t) {
              !s && n.onFirstUpdate && n.onFirstUpdate(t);
            }),
            u
          );
        };
      }
      var ou = { passive: !0 };
      function iu(t) {
        return t.split("-")[0];
      }
      function au(t) {
        return t.split("-")[1];
      }
      function su(t) {
        return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
      }
      function uu(t) {
        var e,
          n = t.reference,
          r = t.element,
          o = t.placement,
          i = o ? iu(o) : null,
          a = o ? au(o) : null,
          s = n.x + n.width / 2 - r.width / 2,
          u = n.y + n.height / 2 - r.height / 2;
        switch (i) {
          case Is:
            e = { x: s, y: n.y - r.height };
            break;
          case Us:
            e = { x: s, y: n.y + n.height };
            break;
          case Ns:
            e = { x: n.x + n.width, y: u };
            break;
          case zs:
            e = { x: n.x - r.width, y: u };
            break;
          default:
            e = { x: n.x, y: n.y };
        }
        var l = i ? su(i) : null;
        if (null != l) {
          var c = "y" === l ? "height" : "width";
          switch (a) {
            case _s:
              e[l] = e[l] - (n[c] / 2 - r[c] / 2);
              break;
            case qs:
              e[l] = e[l] + (n[c] / 2 - r[c] / 2);
          }
        }
        return e;
      }
      var lu = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
      function cu(t) {
        var e,
          n = t.popper,
          r = t.popperRect,
          o = t.placement,
          i = t.variation,
          a = t.offsets,
          s = t.position,
          u = t.gpuAcceleration,
          l = t.adaptive,
          c = t.roundOffsets,
          f = t.isFixed,
          d = a.x,
          p = void 0 === d ? 0 : d,
          v = a.y,
          h = void 0 === v ? 0 : v,
          m = "function" === typeof c ? c({ x: p, y: h }) : { x: p, y: h };
        (p = m.x), (h = m.y);
        var g = a.hasOwnProperty("x"),
          y = a.hasOwnProperty("y"),
          b = zs,
          x = Is,
          w = window;
        if (l) {
          var P = Fs(n),
            E = "clientHeight",
            S = "clientWidth";
          if (
            (P === vs(n) && "static" !== Cs((P = Ts(n))).position && "absolute" === s && ((E = "scrollHeight"), (S = "scrollWidth")),
            o === Is || ((o === zs || o === Ns) && i === qs))
          )
            (x = Us), (h -= (f && P === w && w.visualViewport ? w.visualViewport.height : P[E]) - r.height), (h *= u ? 1 : -1);
          if (o === zs || ((o === Is || o === Us) && i === qs))
            (b = Ns), (p -= (f && P === w && w.visualViewport ? w.visualViewport.width : P[S]) - r.width), (p *= u ? 1 : -1);
        }
        var A,
          T = Object.assign({ position: s }, l && lu),
          O =
            !0 === c
              ? (function (t, e) {
                  var n = t.x,
                    r = t.y,
                    o = e.devicePixelRatio || 1;
                  return { x: xs(n * o) / o || 0, y: xs(r * o) / o || 0 };
                })({ x: p, y: h }, vs(n))
              : { x: p, y: h };
        return (
          (p = O.x),
          (h = O.y),
          u
            ? Object.assign(
                {},
                T,
                (((A = {})[x] = y ? "0" : ""),
                (A[b] = g ? "0" : ""),
                (A.transform =
                  (w.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + h + "px)" : "translate3d(" + p + "px, " + h + "px, 0)"),
                A)
              )
            : Object.assign({}, T, (((e = {})[x] = y ? h + "px" : ""), (e[b] = g ? p + "px" : ""), (e.transform = ""), e))
        );
      }
      var fu = {
          name: "offset",
          enabled: !0,
          phase: "main",
          requires: ["popperOffsets"],
          fn: function (t) {
            var e = t.state,
              n = t.options,
              r = t.name,
              o = n.offset,
              i = void 0 === o ? [0, 0] : o,
              a = Ks.reduce(function (t, n) {
                return (
                  (t[n] = (function (t, e, n) {
                    var r = iu(t),
                      o = [zs, Is].indexOf(r) >= 0 ? -1 : 1,
                      i = "function" === typeof n ? n(Object.assign({}, e, { placement: t })) : n,
                      a = i[0],
                      s = i[1];
                    return (a = a || 0), (s = (s || 0) * o), [zs, Ns].indexOf(r) >= 0 ? { x: s, y: a } : { x: a, y: s };
                  })(n, e.rects, i)),
                  t
                );
              }, {}),
              s = a[e.placement],
              u = s.x,
              l = s.y;
            null != e.modifiersData.popperOffsets && ((e.modifiersData.popperOffsets.x += u), (e.modifiersData.popperOffsets.y += l)),
              (e.modifiersData[r] = a);
          }
        },
        du = { left: "right", right: "left", bottom: "top", top: "bottom" };
      function pu(t) {
        return t.replace(/left|right|bottom|top/g, function (t) {
          return du[t];
        });
      }
      var vu = { start: "end", end: "start" };
      function hu(t) {
        return t.replace(/start|end/g, function (t) {
          return vu[t];
        });
      }
      function mu(t, e) {
        var n = e.getRootNode && e.getRootNode();
        if (t.contains(e)) return !0;
        if (n && gs(n)) {
          var r = e;
          do {
            if (r && t.isSameNode(r)) return !0;
            r = r.parentNode || r.host;
          } while (r);
        }
        return !1;
      }
      function gu(t) {
        return Object.assign({}, t, { left: t.x, top: t.y, right: t.x + t.width, bottom: t.y + t.height });
      }
      function yu(t, e, n) {
        return e === Xs
          ? gu(
              (function (t, e) {
                var n = vs(t),
                  r = Ts(t),
                  o = n.visualViewport,
                  i = r.clientWidth,
                  a = r.clientHeight,
                  s = 0,
                  u = 0;
                if (o) {
                  (i = o.width), (a = o.height);
                  var l = Ps();
                  (l || (!l && "fixed" === e)) && ((s = o.offsetLeft), (u = o.offsetTop));
                }
                return { width: i, height: a, x: s + Os(t), y: u };
              })(t, n)
            )
          : hs(e)
          ? (function (t, e) {
              var n = Es(t, !1, "fixed" === e);
              return (
                (n.top = n.top + t.clientTop),
                (n.left = n.left + t.clientLeft),
                (n.bottom = n.top + t.clientHeight),
                (n.right = n.left + t.clientWidth),
                (n.width = t.clientWidth),
                (n.height = t.clientHeight),
                (n.x = n.left),
                (n.y = n.top),
                n
              );
            })(e, n)
          : gu(
              (function (t) {
                var e,
                  n = Ts(t),
                  r = Ss(t),
                  o = null == (e = t.ownerDocument) ? void 0 : e.body,
                  i = ys(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0),
                  a = ys(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0),
                  s = -r.scrollLeft + Os(t),
                  u = -r.scrollTop;
                return (
                  "rtl" === Cs(o || n).direction && (s += ys(n.clientWidth, o ? o.clientWidth : 0) - i), { width: i, height: a, x: s, y: u }
                );
              })(Ts(t))
            );
      }
      function bu(t, e, n, r) {
        var o =
            "clippingParents" === e
              ? (function (t) {
                  var e = Ds(Ms(t)),
                    n = ["absolute", "fixed"].indexOf(Cs(t).position) >= 0 && ms(t) ? Fs(t) : t;
                  return hs(n)
                    ? e.filter(function (t) {
                        return hs(t) && mu(t, n) && "body" !== As(t);
                      })
                    : [];
                })(t)
              : [].concat(e),
          i = [].concat(o, [n]),
          a = i[0],
          s = i.reduce(
            function (e, n) {
              var o = yu(t, n, r);
              return (
                (e.top = ys(o.top, e.top)),
                (e.right = bs(o.right, e.right)),
                (e.bottom = bs(o.bottom, e.bottom)),
                (e.left = ys(o.left, e.left)),
                e
              );
            },
            yu(t, a, r)
          );
        return (s.width = s.right - s.left), (s.height = s.bottom - s.top), (s.x = s.left), (s.y = s.top), s;
      }
      function xu(t) {
        return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, t);
      }
      function wu(t, e) {
        return e.reduce(function (e, n) {
          return (e[n] = t), e;
        }, {});
      }
      function Pu(t, e) {
        void 0 === e && (e = {});
        var n = e,
          r = n.placement,
          o = void 0 === r ? t.placement : r,
          i = n.strategy,
          a = void 0 === i ? t.strategy : i,
          s = n.boundary,
          u = void 0 === s ? Ys : s,
          l = n.rootBoundary,
          c = void 0 === l ? Xs : l,
          f = n.elementContext,
          d = void 0 === f ? Zs : f,
          p = n.altBoundary,
          v = void 0 !== p && p,
          h = n.padding,
          m = void 0 === h ? 0 : h,
          g = xu("number" !== typeof m ? m : wu(m, Ws)),
          y = d === Zs ? Gs : Zs,
          b = t.rects.popper,
          x = t.elements[v ? y : d],
          w = bu(hs(x) ? x : x.contextElement || Ts(t.elements.popper), u, c, a),
          P = Es(t.elements.reference),
          E = uu({ reference: P, element: b, strategy: "absolute", placement: o }),
          S = gu(Object.assign({}, b, E)),
          A = d === Zs ? S : P,
          T = {
            top: w.top - A.top + g.top,
            bottom: A.bottom - w.bottom + g.bottom,
            left: w.left - A.left + g.left,
            right: A.right - w.right + g.right
          },
          O = t.modifiersData.offset;
        if (d === Zs && O) {
          var C = O[o];
          Object.keys(T).forEach(function (t) {
            var e = [Ns, Us].indexOf(t) >= 0 ? 1 : -1,
              n = [Is, Us].indexOf(t) >= 0 ? "y" : "x";
            T[t] += C[n] * e;
          });
        }
        return T;
      }
      var Eu = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: function (t) {
          var e = t.state,
            n = t.options,
            r = t.name;
          if (!e.modifiersData[r]._skip) {
            for (
              var o = n.mainAxis,
                i = void 0 === o || o,
                a = n.altAxis,
                s = void 0 === a || a,
                u = n.fallbackPlacements,
                l = n.padding,
                c = n.boundary,
                f = n.rootBoundary,
                d = n.altBoundary,
                p = n.flipVariations,
                v = void 0 === p || p,
                h = n.allowedAutoPlacements,
                m = e.options.placement,
                g = iu(m),
                y =
                  u ||
                  (g === m || !v
                    ? [pu(m)]
                    : (function (t) {
                        if (iu(t) === Hs) return [];
                        var e = pu(t);
                        return [hu(t), e, hu(e)];
                      })(m)),
                b = [m].concat(y).reduce(function (t, n) {
                  return t.concat(
                    iu(n) === Hs
                      ? (function (t, e) {
                          void 0 === e && (e = {});
                          var n = e,
                            r = n.placement,
                            o = n.boundary,
                            i = n.rootBoundary,
                            a = n.padding,
                            s = n.flipVariations,
                            u = n.allowedAutoPlacements,
                            l = void 0 === u ? Ks : u,
                            c = au(r),
                            f = c
                              ? s
                                ? $s
                                : $s.filter(function (t) {
                                    return au(t) === c;
                                  })
                              : Ws,
                            d = f.filter(function (t) {
                              return l.indexOf(t) >= 0;
                            });
                          0 === d.length && (d = f);
                          var p = d.reduce(function (e, n) {
                            return (e[n] = Pu(t, { placement: n, boundary: o, rootBoundary: i, padding: a })[iu(n)]), e;
                          }, {});
                          return Object.keys(p).sort(function (t, e) {
                            return p[t] - p[e];
                          });
                        })(e, { placement: n, boundary: c, rootBoundary: f, padding: l, flipVariations: v, allowedAutoPlacements: h })
                      : n
                  );
                }, []),
                x = e.rects.reference,
                w = e.rects.popper,
                P = new Map(),
                E = !0,
                S = b[0],
                A = 0;
              A < b.length;
              A++
            ) {
              var T = b[A],
                O = iu(T),
                C = au(T) === _s,
                k = [Is, Us].indexOf(O) >= 0,
                V = k ? "width" : "height",
                R = Pu(e, { placement: T, boundary: c, rootBoundary: f, altBoundary: d, padding: l }),
                M = k ? (C ? Ns : zs) : C ? Us : Is;
              x[V] > w[V] && (M = pu(M));
              var L = pu(M),
                D = [];
              if (
                (i && D.push(R[O] <= 0),
                s && D.push(R[M] <= 0, R[L] <= 0),
                D.every(function (t) {
                  return t;
                }))
              ) {
                (S = T), (E = !1);
                break;
              }
              P.set(T, D);
            }
            if (E)
              for (
                var j = function (t) {
                    var e = b.find(function (e) {
                      var n = P.get(e);
                      if (n)
                        return n.slice(0, t).every(function (t) {
                          return t;
                        });
                    });
                    if (e) return (S = e), "break";
                  },
                  B = v ? 3 : 1;
                B > 0;
                B--
              ) {
                if ("break" === j(B)) break;
              }
            e.placement !== S && ((e.modifiersData[r]._skip = !0), (e.placement = S), (e.reset = !0));
          }
        },
        requiresIfExists: ["offset"],
        data: { _skip: !1 }
      };
      function Su(t, e, n) {
        return ys(t, bs(e, n));
      }
      var Au = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: function (t) {
          var e = t.state,
            n = t.options,
            r = t.name,
            o = n.mainAxis,
            i = void 0 === o || o,
            a = n.altAxis,
            s = void 0 !== a && a,
            u = n.boundary,
            l = n.rootBoundary,
            c = n.altBoundary,
            f = n.padding,
            d = n.tether,
            p = void 0 === d || d,
            v = n.tetherOffset,
            h = void 0 === v ? 0 : v,
            m = Pu(e, { boundary: u, rootBoundary: l, padding: f, altBoundary: c }),
            g = iu(e.placement),
            y = au(e.placement),
            b = !y,
            x = su(g),
            w = "x" === x ? "y" : "x",
            P = e.modifiersData.popperOffsets,
            E = e.rects.reference,
            S = e.rects.popper,
            A = "function" === typeof h ? h(Object.assign({}, e.rects, { placement: e.placement })) : h,
            T = "number" === typeof A ? { mainAxis: A, altAxis: A } : Object.assign({ mainAxis: 0, altAxis: 0 }, A),
            O = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null,
            C = { x: 0, y: 0 };
          if (P) {
            if (i) {
              var k,
                V = "y" === x ? Is : zs,
                R = "y" === x ? Us : Ns,
                M = "y" === x ? "height" : "width",
                L = P[x],
                D = L + m[V],
                j = L - m[R],
                B = p ? -S[M] / 2 : 0,
                F = y === _s ? E[M] : S[M],
                I = y === _s ? -S[M] : -E[M],
                U = e.elements.arrow,
                N = p && U ? Rs(U) : { width: 0, height: 0 },
                z = e.modifiersData["arrow#persistent"]
                  ? e.modifiersData["arrow#persistent"].padding
                  : { top: 0, right: 0, bottom: 0, left: 0 },
                H = z[V],
                W = z[R],
                _ = Su(0, E[M], N[M]),
                q = b ? E[M] / 2 - B - _ - H - T.mainAxis : F - _ - H - T.mainAxis,
                Y = b ? -E[M] / 2 + B + _ + W + T.mainAxis : I + _ + W + T.mainAxis,
                X = e.elements.arrow && Fs(e.elements.arrow),
                Z = X ? ("y" === x ? X.clientTop || 0 : X.clientLeft || 0) : 0,
                G = null != (k = null == O ? void 0 : O[x]) ? k : 0,
                $ = L + Y - G,
                K = Su(p ? bs(D, L + q - G - Z) : D, L, p ? ys(j, $) : j);
              (P[x] = K), (C[x] = K - L);
            }
            if (s) {
              var J,
                Q = "x" === x ? Is : zs,
                tt = "x" === x ? Us : Ns,
                et = P[w],
                nt = "y" === w ? "height" : "width",
                rt = et + m[Q],
                ot = et - m[tt],
                it = -1 !== [Is, zs].indexOf(g),
                at = null != (J = null == O ? void 0 : O[w]) ? J : 0,
                st = it ? rt : et - E[nt] - S[nt] - at + T.altAxis,
                ut = it ? et + E[nt] + S[nt] - at - T.altAxis : ot,
                lt =
                  p && it
                    ? (function (t, e, n) {
                        var r = Su(t, e, n);
                        return r > n ? n : r;
                      })(st, et, ut)
                    : Su(p ? st : rt, et, p ? ut : ot);
              (P[w] = lt), (C[w] = lt - et);
            }
            e.modifiersData[r] = C;
          }
        },
        requiresIfExists: ["offset"]
      };
      var Tu = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: function (t) {
          var e,
            n = t.state,
            r = t.name,
            o = t.options,
            i = n.elements.arrow,
            a = n.modifiersData.popperOffsets,
            s = iu(n.placement),
            u = su(s),
            l = [zs, Ns].indexOf(s) >= 0 ? "height" : "width";
          if (i && a) {
            var c = (function (t, e) {
                return xu(
                  "number" !== typeof (t = "function" === typeof t ? t(Object.assign({}, e.rects, { placement: e.placement })) : t)
                    ? t
                    : wu(t, Ws)
                );
              })(o.padding, n),
              f = Rs(i),
              d = "y" === u ? Is : zs,
              p = "y" === u ? Us : Ns,
              v = n.rects.reference[l] + n.rects.reference[u] - a[u] - n.rects.popper[l],
              h = a[u] - n.rects.reference[u],
              m = Fs(i),
              g = m ? ("y" === u ? m.clientHeight || 0 : m.clientWidth || 0) : 0,
              y = v / 2 - h / 2,
              b = c[d],
              x = g - f[l] - c[p],
              w = g / 2 - f[l] / 2 + y,
              P = Su(b, w, x),
              E = u;
            n.modifiersData[r] = (((e = {})[E] = P), (e.centerOffset = P - w), e);
          }
        },
        effect: function (t) {
          var e = t.state,
            n = t.options.element,
            r = void 0 === n ? "[data-popper-arrow]" : n;
          null != r &&
            ("string" !== typeof r || (r = e.elements.popper.querySelector(r))) &&
            mu(e.elements.popper, r) &&
            (e.elements.arrow = r);
        },
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"]
      };
      function Ou(t, e, n) {
        return (
          void 0 === n && (n = { x: 0, y: 0 }),
          { top: t.top - e.height - n.y, right: t.right - e.width + n.x, bottom: t.bottom - e.height + n.y, left: t.left - e.width - n.x }
        );
      }
      function Cu(t) {
        return [Is, Ns, Us, zs].some(function (e) {
          return t[e] >= 0;
        });
      }
      var ku = ru({
        defaultModifiers: [
          {
            name: "eventListeners",
            enabled: !0,
            phase: "write",
            fn: function () {},
            effect: function (t) {
              var e = t.state,
                n = t.instance,
                r = t.options,
                o = r.scroll,
                i = void 0 === o || o,
                a = r.resize,
                s = void 0 === a || a,
                u = vs(e.elements.popper),
                l = [].concat(e.scrollParents.reference, e.scrollParents.popper);
              return (
                i &&
                  l.forEach(function (t) {
                    t.addEventListener("scroll", n.update, ou);
                  }),
                s && u.addEventListener("resize", n.update, ou),
                function () {
                  i &&
                    l.forEach(function (t) {
                      t.removeEventListener("scroll", n.update, ou);
                    }),
                    s && u.removeEventListener("resize", n.update, ou);
                }
              );
            },
            data: {}
          },
          {
            name: "popperOffsets",
            enabled: !0,
            phase: "read",
            fn: function (t) {
              var e = t.state,
                n = t.name;
              e.modifiersData[n] = uu({
                reference: e.rects.reference,
                element: e.rects.popper,
                strategy: "absolute",
                placement: e.placement
              });
            },
            data: {}
          },
          {
            name: "computeStyles",
            enabled: !0,
            phase: "beforeWrite",
            fn: function (t) {
              var e = t.state,
                n = t.options,
                r = n.gpuAcceleration,
                o = void 0 === r || r,
                i = n.adaptive,
                a = void 0 === i || i,
                s = n.roundOffsets,
                u = void 0 === s || s,
                l = {
                  placement: iu(e.placement),
                  variation: au(e.placement),
                  popper: e.elements.popper,
                  popperRect: e.rects.popper,
                  gpuAcceleration: o,
                  isFixed: "fixed" === e.options.strategy
                };
              null != e.modifiersData.popperOffsets &&
                (e.styles.popper = Object.assign(
                  {},
                  e.styles.popper,
                  cu(
                    Object.assign({}, l, {
                      offsets: e.modifiersData.popperOffsets,
                      position: e.options.strategy,
                      adaptive: a,
                      roundOffsets: u
                    })
                  )
                )),
                null != e.modifiersData.arrow &&
                  (e.styles.arrow = Object.assign(
                    {},
                    e.styles.arrow,
                    cu(Object.assign({}, l, { offsets: e.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: u }))
                  )),
                (e.attributes.popper = Object.assign({}, e.attributes.popper, { "data-popper-placement": e.placement }));
            },
            data: {}
          },
          {
            name: "applyStyles",
            enabled: !0,
            phase: "write",
            fn: function (t) {
              var e = t.state;
              Object.keys(e.elements).forEach(function (t) {
                var n = e.styles[t] || {},
                  r = e.attributes[t] || {},
                  o = e.elements[t];
                ms(o) &&
                  As(o) &&
                  (Object.assign(o.style, n),
                  Object.keys(r).forEach(function (t) {
                    var e = r[t];
                    !1 === e ? o.removeAttribute(t) : o.setAttribute(t, !0 === e ? "" : e);
                  }));
              });
            },
            effect: function (t) {
              var e = t.state,
                n = {
                  popper: { position: e.options.strategy, left: "0", top: "0", margin: "0" },
                  arrow: { position: "absolute" },
                  reference: {}
                };
              return (
                Object.assign(e.elements.popper.style, n.popper),
                (e.styles = n),
                e.elements.arrow && Object.assign(e.elements.arrow.style, n.arrow),
                function () {
                  Object.keys(e.elements).forEach(function (t) {
                    var r = e.elements[t],
                      o = e.attributes[t] || {},
                      i = Object.keys(e.styles.hasOwnProperty(t) ? e.styles[t] : n[t]).reduce(function (t, e) {
                        return (t[e] = ""), t;
                      }, {});
                    ms(r) &&
                      As(r) &&
                      (Object.assign(r.style, i),
                      Object.keys(o).forEach(function (t) {
                        r.removeAttribute(t);
                      }));
                  });
                }
              );
            },
            requires: ["computeStyles"]
          },
          fu,
          Eu,
          Au,
          Tu,
          {
            name: "hide",
            enabled: !0,
            phase: "main",
            requiresIfExists: ["preventOverflow"],
            fn: function (t) {
              var e = t.state,
                n = t.name,
                r = e.rects.reference,
                o = e.rects.popper,
                i = e.modifiersData.preventOverflow,
                a = Pu(e, { elementContext: "reference" }),
                s = Pu(e, { altBoundary: !0 }),
                u = Ou(a, r),
                l = Ou(s, o, i),
                c = Cu(u),
                f = Cu(l);
              (e.modifiersData[n] = { referenceClippingOffsets: u, popperEscapeOffsets: l, isReferenceHidden: c, hasPopperEscaped: f }),
                (e.attributes.popper = Object.assign({}, e.attributes.popper, {
                  "data-popper-reference-hidden": c,
                  "data-popper-escaped": f
                }));
            }
          }
        ]
      });
      function Vu() {
        return (
          (Vu =
            Object.assign ||
            function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }),
          Vu.apply(this, arguments)
        );
      }
      var Ru = function (t, e) {
          return { var: t, varRef: e ? "var(" + t + ", " + e + ")" : "var(" + t + ")" };
        },
        Mu = {
          arrowShadowColor: Ru("--popper-arrow-shadow-color"),
          arrowSize: Ru("--popper-arrow-size", "8px"),
          arrowSizeHalf: Ru("--popper-arrow-size-half"),
          arrowBg: Ru("--popper-arrow-bg"),
          transformOrigin: Ru("--popper-transform-origin"),
          arrowOffset: Ru("--popper-arrow-offset")
        };
      var Lu = {
          top: "bottom center",
          "top-start": "bottom left",
          "top-end": "bottom right",
          bottom: "top center",
          "bottom-start": "top left",
          "bottom-end": "top right",
          left: "right center",
          "left-start": "right top",
          "left-end": "right bottom",
          right: "left center",
          "right-start": "left top",
          "right-end": "left bottom"
        },
        Du = { scroll: !0, resize: !0 };
      var ju = {
          name: "matchWidth",
          enabled: !0,
          phase: "beforeWrite",
          requires: ["computeStyles"],
          fn: function (t) {
            var e = t.state;
            e.styles.popper.width = e.rects.reference.width + "px";
          },
          effect: function (t) {
            var e = t.state;
            return function () {
              var t = e.elements.reference;
              e.elements.popper.style.width = t.offsetWidth + "px";
            };
          }
        },
        Bu = {
          name: "transformOrigin",
          enabled: !0,
          phase: "write",
          fn: function (t) {
            var e = t.state;
            Fu(e);
          },
          effect: function (t) {
            var e = t.state;
            return function () {
              Fu(e);
            };
          }
        },
        Fu = function (t) {
          var e;
          t.elements.popper.style.setProperty(Mu.transformOrigin.var, ((e = t.placement), Lu[e]));
        },
        Iu = {
          name: "positionArrow",
          enabled: !0,
          phase: "afterWrite",
          fn: function (t) {
            var e = t.state;
            Uu(e);
          }
        },
        Uu = function (t) {
          var e;
          if (t.placement) {
            var n = Nu(t.placement);
            if (null != (e = t.elements) && e.arrow && n) {
              var r, o;
              Object.assign(
                t.elements.arrow.style,
                (((r = {})[n.property] = n.value), (r.width = Mu.arrowSize.varRef), (r.height = Mu.arrowSize.varRef), (r.zIndex = -1), r)
              );
              var i =
                (((o = {})[Mu.arrowSizeHalf.var] = "calc(" + Mu.arrowSize.varRef + " / 2)"),
                (o[Mu.arrowOffset.var] = "calc(" + Mu.arrowSizeHalf.varRef + " * -1)"),
                o);
              for (var a in i) t.elements.arrow.style.setProperty(a, i[a]);
            }
          }
        },
        Nu = function (t) {
          return t.startsWith("top")
            ? { property: "bottom", value: Mu.arrowOffset.varRef }
            : t.startsWith("bottom")
            ? { property: "top", value: Mu.arrowOffset.varRef }
            : t.startsWith("left")
            ? { property: "right", value: Mu.arrowOffset.varRef }
            : t.startsWith("right")
            ? { property: "left", value: Mu.arrowOffset.varRef }
            : void 0;
        },
        zu = {
          name: "innerArrow",
          enabled: !0,
          phase: "main",
          requires: ["arrow"],
          fn: function (t) {
            var e = t.state;
            Hu(e);
          },
          effect: function (t) {
            var e = t.state;
            return function () {
              Hu(e);
            };
          }
        },
        Hu = function (t) {
          if (t.elements.arrow) {
            var e,
              n = t.elements.arrow.querySelector("[data-popper-arrow-inner]");
            if (n)
              Object.assign(n.style, {
                transform: "rotate(45deg)",
                background: Mu.arrowBg.varRef,
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                position: "absolute",
                zIndex: "inherit",
                boxShadow:
                  ((e = t.placement),
                  e.includes("top")
                    ? "1px 1px 1px 0 var(--popper-arrow-shadow-color)"
                    : e.includes("bottom")
                    ? "-1px -1px 1px 0 var(--popper-arrow-shadow-color)"
                    : e.includes("right")
                    ? "-1px 1px 1px 0 var(--popper-arrow-shadow-color)"
                    : e.includes("left")
                    ? "1px -1px 1px 0 var(--popper-arrow-shadow-color)"
                    : void 0)
              });
          }
        },
        Wu = {
          "start-start": { ltr: "left-start", rtl: "right-start" },
          "start-end": { ltr: "left-end", rtl: "right-end" },
          "end-start": { ltr: "right-start", rtl: "left-start" },
          "end-end": { ltr: "right-end", rtl: "left-end" },
          start: { ltr: "left", rtl: "right" },
          end: { ltr: "right", rtl: "left" }
        },
        _u = {
          "auto-start": "auto-end",
          "auto-end": "auto-start",
          "top-start": "top-end",
          "top-end": "top-start",
          "bottom-start": "bottom-end",
          "bottom-end": "bottom-start"
        };
      var qu = ["size", "shadowColor", "bg", "style"];
      function Yu(t) {
        void 0 === t && (t = {});
        var e = t,
          n = e.enabled,
          r = void 0 === n || n,
          o = e.modifiers,
          a = e.placement,
          s = void 0 === a ? "bottom" : a,
          u = e.strategy,
          l = void 0 === u ? "absolute" : u,
          c = e.arrowPadding,
          f = void 0 === c ? 8 : c,
          d = e.eventListeners,
          p = void 0 === d || d,
          v = e.offset,
          h = e.gutter,
          g = void 0 === h ? 8 : h,
          y = e.flip,
          b = void 0 === y || y,
          x = e.boundary,
          w = void 0 === x ? "clippingParents" : x,
          P = e.preventOverflow,
          E = void 0 === P || P,
          S = e.matchWidth,
          A = e.direction,
          T = void 0 === A ? "ltr" : A,
          O = (0, i.useRef)(null),
          C = (0, i.useRef)(null),
          k = (0, i.useRef)(null),
          V = (function (t, e) {
            var n, r;
            void 0 === e && (e = "ltr");
            var o = (null == (n = Wu[t]) ? void 0 : n[e]) || t;
            return "ltr" === e ? o : null != (r = _u[t]) ? r : o;
          })(s, T),
          R = (0, i.useRef)(function () {}),
          M = (0, i.useCallback)(
            function () {
              var t;
              r &&
                O.current &&
                C.current &&
                (null == R.current || R.current(),
                (k.current = ku(O.current, C.current, {
                  placement: V,
                  modifiers: [
                    zu,
                    Iu,
                    Bu,
                    Vu({}, ju, { enabled: !!S }),
                    Vu(
                      { name: "eventListeners" },
                      ((t = p), "object" === typeof t ? { enabled: !0, options: Vu({}, Du, t) } : { enabled: t, options: Du })
                    ),
                    { name: "arrow", options: { padding: f } },
                    { name: "offset", options: { offset: null != v ? v : [0, g] } },
                    { name: "flip", enabled: !!b, options: { padding: 8 } },
                    { name: "preventOverflow", enabled: !!E, options: { boundary: w } }
                  ].concat(null != o ? o : []),
                  strategy: l
                })),
                k.current.forceUpdate(),
                (R.current = k.current.destroy));
            },
            [V, r, o, S, p, f, v, g, b, E, w, l]
          );
        (0, i.useEffect)(function () {
          return function () {
            var t;
            O.current || C.current || (null == (t = k.current) || t.destroy(), (k.current = null));
          };
        }, []);
        var L = (0, i.useCallback)(
            function (t) {
              (O.current = t), M();
            },
            [M]
          ),
          D = (0, i.useCallback)(
            function (t, e) {
              return void 0 === t && (t = {}), void 0 === e && (e = null), Vu({}, t, { ref: (0, m.lq)(L, e) });
            },
            [L]
          ),
          j = (0, i.useCallback)(
            function (t) {
              (C.current = t), M();
            },
            [M]
          ),
          B = (0, i.useCallback)(
            function (t, e) {
              return (
                void 0 === t && (t = {}),
                void 0 === e && (e = null),
                Vu({}, t, {
                  ref: (0, m.lq)(j, e),
                  style: Vu({}, t.style, { position: l, minWidth: "max-content", inset: "0 auto auto 0" })
                })
              );
            },
            [l, j]
          ),
          F = (0, i.useCallback)(function (t, e) {
            void 0 === t && (t = {}), void 0 === e && (e = null);
            var n = t;
            return (
              n.size,
              n.shadowColor,
              n.bg,
              n.style,
              Vu(
                {},
                (function (t, e) {
                  if (null == t) return {};
                  var n,
                    r,
                    o = {},
                    i = Object.keys(t);
                  for (r = 0; r < i.length; r++) (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
                  return o;
                })(n, qu),
                { ref: e, "data-popper-arrow": "", style: Xu(t) }
              )
            );
          }, []),
          I = (0, i.useCallback)(function (t, e) {
            return void 0 === t && (t = {}), void 0 === e && (e = null), Vu({}, t, { ref: e, "data-popper-arrow-inner": "" });
          }, []);
        return {
          update: function () {
            var t;
            null == (t = k.current) || t.update();
          },
          forceUpdate: function () {
            var t;
            null == (t = k.current) || t.forceUpdate();
          },
          transformOrigin: Mu.transformOrigin.varRef,
          referenceRef: L,
          popperRef: j,
          getPopperProps: B,
          getArrowProps: F,
          getArrowInnerProps: I,
          getReferenceProps: D
        };
      }
      function Xu(t) {
        var e = t.size,
          n = t.shadowColor,
          r = t.bg,
          o = Vu({}, t.style, { position: "absolute" });
        return e && (o["--popper-arrow-size"] = e), n && (o["--popper-arrow-shadow-color"] = n), r && (o["--popper-arrow-bg"] = r), o;
      }
      function Zu() {
        return (
          (Zu =
            Object.assign ||
            function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }),
          Zu.apply(this, arguments)
        );
      }
      function Gu(t, e) {
        if (null == t) return {};
        var n,
          r,
          o = {},
          i = Object.keys(t);
        for (r = 0; r < i.length; r++) (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
        return o;
      }
      var $u = (0, m.kr)({
          name: "PopoverContext",
          errorMessage: "usePopoverContext: `context` is undefined. Seems you forgot to wrap all popover components within `<Popover />`"
        }),
        Ku = $u[0],
        Ju = $u[1],
        Qu = function (t) {
          if (t) return h()(t, { enter: { visibility: "visible" }, exit: { transitionEnd: { visibility: "hidden" } } });
        },
        tl = fs(r.m$.section),
        el = i.forwardRef(function (t, e) {
          var n = Ju().isOpen;
          return i.createElement(tl, Zu({ ref: e, variants: Qu(t.variants) }, t, { initial: !1, animate: n ? "enter" : "exit" }));
        });
      el.defaultProps = {
        variants: {
          exit: { opacity: 0, scale: 0.95, transition: { duration: 0.1, ease: [0.4, 0, 1, 1] } },
          enter: { scale: 1, opacity: 1, transition: { duration: 0.15, ease: [0, 0, 0.2, 1] } }
        }
      };
      var nl = [
          "closeOnBlur",
          "closeOnEsc",
          "initialFocusRef",
          "id",
          "returnFocusOnClose",
          "autoFocus",
          "arrowSize",
          "arrowShadowColor",
          "trigger",
          "openDelay",
          "closeDelay",
          "isLazy",
          "lazyBehavior",
          "computePositionOnMount"
        ],
        rl = "click",
        ol = "hover";
      var il = ["children"],
        al = ["rootProps"],
        sl = function (t) {
          var e = (0, r.jC)("Popover", t),
            n = (0, r.Lr)(t),
            a = n.children,
            s = (function (t) {
              void 0 === t && (t = {});
              var e = t,
                n = e.closeOnBlur,
                r = void 0 === n || n,
                a = e.closeOnEsc,
                s = void 0 === a || a,
                u = e.initialFocusRef,
                l = e.id,
                c = e.returnFocusOnClose,
                f = void 0 === c || c,
                d = e.autoFocus,
                p = void 0 === d || d,
                v = e.arrowSize,
                h = e.arrowShadowColor,
                g = e.trigger,
                y = void 0 === g ? rl : g,
                b = e.openDelay,
                x = void 0 === b ? 200 : b,
                w = e.closeDelay,
                P = void 0 === w ? 200 : w,
                E = e.isLazy,
                S = e.lazyBehavior,
                A = void 0 === S ? "unmount" : S,
                T = e.computePositionOnMount,
                O = Gu(e, nl),
                C = (0, ds.qY)(t),
                k = C.isOpen,
                V = C.onClose,
                R = C.onOpen,
                M = C.onToggle,
                L = (0, i.useRef)(null),
                D = (0, i.useRef)(null),
                j = (0, i.useRef)(null),
                B = (0, i.useRef)(!1),
                F = (0, i.useRef)(!1);
              k && (F.current = !0);
              var I = (0, i.useState)(!1),
                U = I[0],
                N = I[1],
                z = (0, i.useState)(!1),
                H = z[0],
                W = z[1],
                _ = (0, ds.ZS)(l, "popover-trigger", "popover-content", "popover-header", "popover-body"),
                q = _[0],
                Y = _[1],
                X = _[2],
                Z = _[3],
                G = Yu(Zu({}, O, { enabled: k || !!T })),
                $ = G.referenceRef,
                K = G.getArrowProps,
                J = G.getPopperProps,
                Q = G.getArrowInnerProps,
                tt = G.forceUpdate,
                et = (0, ps.c)({ isOpen: k, ref: j });
              (0, ds.s9)({ enabled: k, ref: D }),
                (0, ds.Ck)(j, { focusRef: D, visible: k, shouldFocus: f && y === rl }),
                (0, ds.Gp)(j, { focusRef: u, visible: k, shouldFocus: p && y === rl });
              var nt = (0, o.VI)({ hasBeenSelected: F.current, isLazy: E, lazyBehavior: A, isSelected: et.present }),
                rt = (0, i.useCallback)(
                  function (t, e) {
                    var n;
                    void 0 === t && (t = {}), void 0 === e && (e = null);
                    var i = Zu({}, t, {
                      style: Zu(
                        {},
                        t.style,
                        ((n = { transformOrigin: Mu.transformOrigin.varRef }),
                        (n[Mu.arrowSize.var] = v ? (0, o.px)(v) : void 0),
                        (n[Mu.arrowShadowColor.var] = h),
                        n)
                      ),
                      ref: (0, m.lq)(j, e),
                      children: nt ? t.children : null,
                      id: Y,
                      tabIndex: -1,
                      role: "dialog",
                      onKeyDown: (0, o.v0)(t.onKeyDown, function (t) {
                        s && "Escape" === t.key && V();
                      }),
                      onBlur: (0, o.v0)(t.onBlur, function (t) {
                        var e = (0, o.wN)(t),
                          n = (0, o.r3)(j.current, e),
                          i = (0, o.r3)(D.current, e);
                        k && r && !n && !i && V();
                      }),
                      "aria-labelledby": U ? X : void 0,
                      "aria-describedby": H ? Z : void 0
                    });
                    return (
                      y === ol &&
                        ((i.role = "tooltip"),
                        (i.onMouseEnter = (0, o.v0)(t.onMouseEnter, function () {
                          B.current = !0;
                        })),
                        (i.onMouseLeave = (0, o.v0)(t.onMouseLeave, function () {
                          (B.current = !1), setTimeout(V, P);
                        }))),
                      i
                    );
                  },
                  [nt, Y, U, X, H, Z, y, s, V, k, r, P, h, v]
                ),
                ot = (0, i.useCallback)(
                  function (t, e) {
                    return (
                      void 0 === t && (t = {}),
                      void 0 === e && (e = null),
                      J(Zu({}, t, { style: Zu({ visibility: k ? "visible" : "hidden" }, t.style) }), e)
                    );
                  },
                  [k, J]
                ),
                it = (0, i.useCallback)(
                  function (t, e) {
                    return void 0 === e && (e = null), Zu({}, t, { ref: (0, m.lq)(e, L, $) });
                  },
                  [L, $]
                ),
                at = (0, i.useRef)(),
                st = (0, i.useRef)(),
                ut = (0, i.useCallback)(
                  function (t) {
                    null == L.current && $(t);
                  },
                  [$]
                ),
                lt = (0, i.useCallback)(
                  function (t, e) {
                    void 0 === t && (t = {}), void 0 === e && (e = null);
                    var n = Zu({}, t, {
                      ref: (0, m.lq)(D, e, ut),
                      id: q,
                      "aria-haspopup": "dialog",
                      "aria-expanded": k,
                      "aria-controls": Y
                    });
                    return (
                      y === rl && (n.onClick = (0, o.v0)(t.onClick, M)),
                      y === ol &&
                        ((n.onFocus = (0, o.v0)(t.onFocus, R)),
                        (n.onBlur = (0, o.v0)(t.onBlur, function (t) {
                          var e = (0, o.wN)(t),
                            n = !(0, o.r3)(j.current, e);
                          k && r && n && V();
                        })),
                        (n.onKeyDown = (0, o.v0)(t.onKeyDown, function (t) {
                          "Escape" === t.key && V();
                        })),
                        (n.onMouseEnter = (0, o.v0)(t.onMouseEnter, function () {
                          (B.current = !0), (at.current = window.setTimeout(R, x));
                        })),
                        (n.onMouseLeave = (0, o.v0)(t.onMouseLeave, function () {
                          (B.current = !1),
                            at.current && (clearTimeout(at.current), (at.current = void 0)),
                            (st.current = window.setTimeout(function () {
                              !1 === B.current && V();
                            }, P));
                        }))),
                      n
                    );
                  },
                  [q, k, Y, y, ut, M, R, r, V, x, P]
                );
              (0, i.useEffect)(function () {
                return function () {
                  at.current && clearTimeout(at.current), st.current && clearTimeout(st.current);
                };
              }, []);
              var ct = (0, i.useCallback)(
                  function (t, e) {
                    return (
                      void 0 === t && (t = {}),
                      void 0 === e && (e = null),
                      Zu({}, t, {
                        id: X,
                        ref: (0, m.lq)(e, function (t) {
                          N(!!t);
                        })
                      })
                    );
                  },
                  [X]
                ),
                ft = (0, i.useCallback)(
                  function (t, e) {
                    return (
                      void 0 === t && (t = {}),
                      void 0 === e && (e = null),
                      Zu({}, t, {
                        id: Z,
                        ref: (0, m.lq)(e, function (t) {
                          W(!!t);
                        })
                      })
                    );
                  },
                  [Z]
                );
              return {
                forceUpdate: tt,
                isOpen: k,
                onAnimationComplete: et.onComplete,
                onClose: V,
                getAnchorProps: it,
                getArrowProps: K,
                getArrowInnerProps: Q,
                getPopoverPositionerProps: ot,
                getPopoverProps: rt,
                getTriggerProps: lt,
                getHeaderProps: ct,
                getBodyProps: ft
              };
            })(Zu({}, Gu(n, il), { direction: (0, r.Fg)().direction }));
          return i.createElement(
            Ku,
            { value: s },
            i.createElement(r.Fo, { value: e }, (0, o.Pu)(a, { isOpen: s.isOpen, onClose: s.onClose, forceUpdate: s.forceUpdate }))
          );
        };
      o.Ts && (sl.displayName = "Popover");
      o.Ts;
      var ul = function (t) {
        var e = i.Children.only(t.children),
          n = Ju().getTriggerProps;
        return i.cloneElement(e, n(e.props, e.ref));
      };
      o.Ts && (ul.displayName = "PopoverTrigger");
      var ll = (0, r.Gp)(function (t, e) {
        var n = t.rootProps,
          a = Gu(t, al),
          s = Ju(),
          u = s.getPopoverProps,
          l = s.getPopoverPositionerProps,
          c = s.onAnimationComplete,
          f = (0, r.yK)(),
          d = Zu({ position: "relative", display: "flex", flexDirection: "column" }, f.content);
        return i.createElement(
          r.m$.div,
          Zu({}, l(n), { __css: f.popper, className: "chakra-popover__popper" }),
          i.createElement(
            el,
            Zu({}, u(a, e), {
              onAnimationComplete: (0, o.PP)(c, a.onAnimationComplete),
              className: (0, o.cx)("chakra-popover__content", t.className),
              __css: d
            })
          )
        );
      });
      o.Ts && (ll.displayName = "PopoverContent");
      var cl = (0, r.Gp)(function (t, e) {
        var n = Ju().getHeaderProps,
          a = (0, r.yK)();
        return i.createElement(
          r.m$.header,
          Zu({}, n(t, e), { className: (0, o.cx)("chakra-popover__header", t.className), __css: a.header })
        );
      });
      o.Ts && (cl.displayName = "PopoverHeader");
      var fl = (0, r.Gp)(function (t, e) {
        var n = Ju().getBodyProps,
          a = (0, r.yK)();
        return i.createElement(r.m$.div, Zu({}, n(t, e), { className: (0, o.cx)("chakra-popover__body", t.className), __css: a.body }));
      });
      o.Ts && (fl.displayName = "PopoverBody");
      o.Ts;
      o.Ts;
      var dl = function (t) {
        var e,
          n = t.bg,
          a = t.bgColor,
          s = t.backgroundColor,
          u = Ju(),
          l = u.getArrowProps,
          c = u.getArrowInnerProps,
          f = (0, r.yK)(),
          d = null != (e = null != n ? n : a) ? e : s;
        return i.createElement(
          r.m$.div,
          Zu({}, l(), { className: "chakra-popover__arrow-positioner" }),
          i.createElement(
            r.m$.div,
            Zu({ className: (0, o.cx)("chakra-popover__arrow", t.className) }, c(t), {
              __css: Zu({}, f.arrow, { "--popper-arrow-bg": d ? "colors." + d + ", " + d : void 0 })
            })
          )
        );
      };
      o.Ts && (dl.displayName = "PopoverArrow");
    },
    50730: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return o;
        }
      });
      var r =
          /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
        o = (function (t) {
          var e = {};
          return function (n) {
            return void 0 === e[n] && (e[n] = t(n)), e[n];
          };
        })(function (t) {
          return r.test(t) || (111 === t.charCodeAt(0) && 110 === t.charCodeAt(1) && t.charCodeAt(2) < 91);
        });
    }
  }
]);
