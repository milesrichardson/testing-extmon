(self.webpackChunk = self.webpackChunk || []).push([
  [911],
  {
    9546: (e, t, r) => {
      r.d(t, {
        F2: () => l,
        Lw: () => h,
        W9: () => n,
        Ze: () => m,
        mh: () => c,
        qp: () => i,
        sD: () => d,
        w9: () => s,
        x: () => o,
        x0: () => u,
        yC: () => a
      });
      const n = 0.0625,
        a = 0.125,
        l = 0.25,
        o = 0.5,
        i = 0.75,
        c = 1,
        s = 1.25,
        d = 1.5,
        m = 2,
        u = 2.5,
        h = 4;
    },
    99094: (e, t, r) => {
      r.d(t, { f: () => n });
      var n,
        a = r(50858),
        l = r(27378);
      !(function (e) {
        var t = (e.empty = { hovered: void 0, disabled: void 0, active: void 0 }),
          r = (e.withValue = function (e, t) {
            return (0, a._)({}, e, t);
          });
        (e.emptyWithName = function (e) {
          return r(t, { name: e });
        }),
          (e.Context = l.createContext(t));
      })(n || (n = {}));
    },
    26215: (e, t, r) => {
      r.d(t, { X: () => n, Y: () => F });
      var n,
        a = r(51037),
        l = r(50858),
        o = r(55818),
        i = r(98410),
        c = r(98314),
        s = r(59312),
        d = r(27378),
        m = r(1169),
        u = r(40327),
        h = r(32952),
        v = r(23239),
        f = r(54001),
        p = r(8543),
        C = r(98403),
        E = r(77176),
        w = r(66310),
        x = r(40151),
        g = r(93508),
        M = r(24209),
        H = r(2844),
        L = r(2834),
        y = r(8125),
        k = r(5114),
        _ = r(81531),
        N = r(99094),
        B = r(86732),
        S = r(65223),
        Z = r(1509),
        V = r(90845),
        z = r(94632);
      !(function (e) {
        (e.button = "button"), (e.link = "a"), (e.div = "div");
      })(n || (n = {}));
      var b,
        F = function (e) {
          var t,
            r = e.name,
            m = e.tag,
            p = e.title,
            _ = e.titleAlign,
            Z = e.active,
            I = e.animationMode,
            P = e.styleType,
            W = e.textPosition,
            T = e.onClick,
            U = e.role,
            G = e.children,
            O = e.type,
            Y = void 0 === O ? "button" : O,
            $ = (0, i._)(e, [
              "name",
              "tag",
              "title",
              "titleAlign",
              "active",
              "animationMode",
              "styleType",
              "textPosition",
              "onClick",
              "role",
              "children",
              "type"
            ]),
            j = d.useContext(N.f.Context),
            X = v.h.create(!1),
            J = v.h.create(!1),
            Q = v.h.create(!1),
            K = v.h.create(!1),
            q = new h.xQ(),
            ee = C.Dx(r).pipe(
              E.U(function (e) {
                return void 0 !== j.name ? "".concat(j.name, "/").concat(e) : e;
              })
            ),
            te = { hovered: void 0 !== j.hovered ? v.h.combine(j.hovered, J, y.or) : J, disabled: Q, active: K },
            re = ee.pipe(
              w.w(function (e) {
                var t,
                  r,
                  n,
                  l =
                    void 0 !== T
                      ? ((t = T),
                        (r = function (e) {
                          return X.set(e);
                        }),
                        (n = function (e) {
                          return J.set(e);
                        }),
                        Q.pipe(
                          E.U(function (e) {
                            return (
                              (l = (0, a._)(function (a) {
                                return (0, s.Jh)(this, function (l) {
                                  switch (l.label) {
                                    case 0:
                                      if ((a.stopPropagation(), e)) return [2];
                                      r(!0), (l.label = 1);
                                    case 1:
                                      return l.trys.push([1, , 3, 4]), n(!1), [4, t(a)];
                                    case 2:
                                      return [2, l.sent()];
                                    case 3:
                                      return r(!1), [7];
                                    case 4:
                                      return [2];
                                  }
                                });
                              })),
                              function (e) {
                                return l.apply(this, arguments);
                              }
                            );
                            var l;
                          })
                        ))
                      : x.E;
                return l.pipe(
                  E.U(function (t) {
                    return function (r) {
                      var n;
                      return (
                        F._log.debug("Button clicked: " + e),
                        null === (n = t) || void 0 === n
                          ? void 0
                          : n(r).catch(function (t) {
                              return F._log.error("Button click failed: " + e, t);
                            })
                      );
                    };
                  })
                );
              }),
              g.O(void 0)
            ),
            ne = (0, u.pipe)(
              k.fromNullable(W),
              k.alt(function () {
                return b.parseFromNodes(G);
              }),
              k.toUndefined
            ),
            ae = (0, o._)((0, l._)({}, $), {
              styleType: P,
              role: null != U ? U : "button",
              onClick: re,
              onMouseOver: function (e) {
                var t, r;
                J.set(!0), null === (t = (r = $).onMouseOver) || void 0 === t || t.call(r, e);
              },
              onMouseLeave: function (e) {
                var t, r;
                J.set(!1), null === (t = (r = $).onMouseLeave) || void 0 === t || t.call(r, e);
              },
              onMouseDown: function (e) {
                var t = e.pageX,
                  r = e.pageY;
                return q.next({ pageX: t, pageY: r });
              },
              "data-name": ee,
              "data-disabled": te.disabled,
              "data-active": te.active,
              "data-hovered": te.hovered,
              "data-textpos": ne,
              "aria-pressed": Z,
              children:
                Boolean(I) && I !== B.m.None
                  ? (function (e) {
                      return Array.isArray(e) ? [].concat.apply([], e) : [e];
                    })(G).concat(
                      d.createElement(B.H, { key: "ripple", animationMode: null != I ? I : B.m.FromClickPoint, mouseDownEvents: q })
                    )
                  : G,
              tabIndex: void 0 !== $.tabIndex ? $.tabIndex : ((t = Q), "boolean" == typeof t ? (0, u.pipe)(t, D) : (0, u.pipe)(t, E.U(D))),
              disabled: te.disabled
            }),
            le = function () {
              return void 0 === $.href || (m !== n.link && Boolean(m))
                ? m === n.div
                  ? d.createElement(A, (0, o._)((0, l._)({ tag: n.div }, ae), { onKeyDown: R, className: $.className }))
                  : d.createElement(A, (0, l._)((0, o._)((0, l._)({ tag: n.button }, ae), { type: Y }), (0, f.Sh)(z.Zw, $.className)))
                : d.createElement(
                    A,
                    (0, l._)(
                      (0, o._)((0, l._)({ tag: n.link }, ae), { href: $.href, target: $.target, rel: $.rel }),
                      (0, f.Sh)(z.lH, $.className)
                    )
                  );
            };
          return (
            V.P.useSubscriptionTo(
              M.T(
                H.aj([C.Dx($.disabled).pipe(E.U(Boolean)), X]).pipe(
                  E.U(function (e) {
                    var t = (0, c._)(e, 2),
                      r = t[0],
                      n = t[1];
                    return r || n;
                  }),
                  L.b(C.wW(Q))
                ),
                C.Dx(Z).pipe(E.U(Boolean), L.b(C.wW(K)))
              )
            ),
            d.createElement(
              N.f.Context.Provider,
              { value: te },
              null != p ? d.createElement(S.u, { title: p, align: Boolean(_) ? _ : "auto" }, le()) : le()
            )
          );
        };
      function A(e) {
        var t = e.tag,
          r = e.styleType,
          n = (0, i._)(e, ["tag", "styleType"]),
          a = p.F[t];
        return null != r ? d.createElement(Z.Z, (0, l._)({ styleType: r, nodeType: t }, n)) : d.createElement(a, n);
      }
      function D(e) {
        return e ? -1 : 0;
      }
      function R(e) {
        (" " !== e.key && "Enter" !== e.key) || (e.target.click(), e.preventDefault());
      }
      (F.__logSingleton = {
        __logger: void 0,
        get _log() {
          return (
            void 0 === F.__logSingleton.__logger && (F.__logSingleton.__logger = _.C8.Logging.getLogger("Button")),
            F.__logSingleton.__logger
          );
        }
      }),
        (F._log = F.__logSingleton._log),
        (function (e) {
          var t = new Map([
              ["+", "everywhere"],
              ["++", "everywhere"],
              ["+-", "left"],
              ["-+", "right"],
              ["+++", "everywhere"],
              ["+-+", "everywhere"],
              ["++-", "left"],
              ["-++", "right"],
              ["-+-", "surrounded"]
            ]),
            r = function (e) {
              return e
                .map(function (e) {
                  return "string" == typeof e ? "+" : "-";
                })
                .join("");
            };
          e.parseFromNodes = function (e) {
            var n = m.isElement(e) ? e.props.children : e,
              a = r(Array.isArray(n) ? n : [n]);
            return k.fromNullable(t.get(a));
          };
        })(b || (b = {}));
    },
    94632: (e, t, r) => {
      r.d(t, {
        $H: () => N,
        BD: () => L,
        HN: () => B,
        LI: () => x,
        Mp: () => g,
        T: () => h,
        T$: () => H,
        UF: () => _,
        Zw: () => w,
        bC: () => z,
        fk: () => k,
        ix: () => y,
        lH: () => S,
        oc: () => V,
        ru: () => Z,
        vD: () => M
      });
      var n,
        a = r(18775),
        l = r(50858),
        o = r(55818),
        i = r(9546),
        c = r(13578),
        s = r(77678),
        d = r(62172),
        m = r(89894),
        u = r(32096),
        h = function (e) {
          return (0, o._)((0, l._)({}, e.default), {
            $nest: (0, l._)(
              {
                "&:not([data-disabled='true'])[data-hovered='true']": (0, l._)({}, e.hovered),
                "&[data-disabled='true']": (0, l._)({}, e.disabled),
                "&:not([data-disabled='true']):active": (0, l._)({}, e.clicked),
                "&[data-active='true']": (0, l._)({}, e.toggled),
                "&[hidden]": (0, l._)({}, e.hidden)
              },
              m.f5.focusOutline
            )
          });
        },
        v = function (e, t) {
          return {
            $nest: {
              "&[data-textpos='left']": { padding: "0 ".concat(t, " 0 ").concat(e) },
              "&[data-textpos='right']": { padding: "0 ".concat(e, " 0 ").concat(t) },
              "&[data-textpos='everywhere']": { padding: "0 ".concat(e, " 0 ").concat(e) }
            }
          };
        },
        f = { minHeight: "auto", minWidth: m.ux.rem(i.Ze) },
        p = function (e, t, r) {
          return {
            $nest: {
              "& > i": (0, l._)({ stroke: m.ux.important(e), fill: Boolean(r) ? m.ux.important(e) : void 0 }, f),
              '& > i[data-hovered="true"]': null != t ? { stroke: m.ux.important(t), fill: Boolean(r) ? m.ux.important(t) : void 0 } : {}
            }
          };
        },
        C = { borderRadius: m.ux.rem(u.fx) },
        E = h({
          default: {
            position: "relative",
            display: "inline-block",
            overflow: "hidden",
            padding: 0,
            outline: "none",
            border: 0,
            backgroundColor: "transparent",
            verticalAlign: "middle",
            whiteSpace: "nowrap",
            cursor: "default",
            userSelect: "none",
            $nest: { "& > i": f }
          },
          hovered: { cursor: "pointer" },
          disabled: {
            opacity: 0.4,
            cursor: "not-allowed",
            $nest: { '& > i[data-disabled="true"]': { fill: "inherit", stroke: "inherit" } }
          },
          clicked: {},
          toggled: {},
          hidden: { display: "none" }
        }),
        w = m.ux.style({
          cursor: "pointer",
          border: "none",
          margin: 0,
          padding: 0,
          width: "auto",
          overflow: "visible",
          appearance: "none",
          fontFamily: "inherit",
          "-webkit-font-smoothing": "inherit",
          "-moz-osx-font-smoothing": "inherit",
          "-webkit-appearance": "none",
          "-moz-appearance": "none",
          $nest: { "&::-moz-focus-inner": { border: 0, padding: 0 } }
        }),
        x = m.ux.style(E),
        g = m.ux.style(
          E,
          C,
          h({
            default: {
              padding: "0 ".concat(m.ux.rem(i.x)),
              backgroundColor: "transparent",
              color: c.vU.InteractiveBranded.Primary.Default,
              lineHeight: m.ux.rem(i.Ze),
              transition: "background-color .2s"
            },
            hovered: { backgroundColor: s.CoreNeutral1 },
            disabled: {},
            clicked: { transition: "none", transform: "scale(1)" },
            toggled: {},
            hidden: {}
          })
        ),
        M = m.ux.style({ display: "inline-flex" }),
        H = m.ux.style(
          E,
          C,
          v(m.ux.rem(i.x), 0),
          h({
            default: {
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: c.vU.InteractiveBranded.Primary.Default,
              color: c.XY.Content.OnPrimary.Default,
              lineHeight: m.ux.rem(i.Ze),
              transitionDuration: ".2s",
              minHeight: m.ux.rem(i.Ze),
              minWidth: m.ux.rem(i.Ze)
            },
            hovered: { backgroundColor: c.vU.InteractiveBranded.Primary.Hover },
            disabled: {},
            clicked: {},
            toggled: { backgroundColor: c.vU.InteractiveBranded.Primary.Hover },
            hidden: {}
          }),
          p(c.XY.Content.OnPrimary.Default, void 0, !0)
        ),
        L = m.ux.style(
          E,
          C,
          v(m.ux.rem(i.x), 0),
          h({
            default: {
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              boxSizing: "border-box",
              backgroundColor: "transparent",
              color: c.vU.InteractiveBranded.Primary.Default,
              lineHeight: m.ux.rem(i.Ze),
              transitionDuration: ".2s",
              fontWeight: 400,
              border: "1px solid ".concat(c.vU.InteractiveBranded.Primary.Default),
              minHeight: m.ux.rem(i.Ze),
              minWidth: m.ux.rem(i.Ze)
            },
            hovered: { backgroundColor: d.Blue0 },
            disabled: {},
            clicked: {},
            toggled: { backgroundColor: d.Blue0 },
            hidden: {}
          }),
          p(c.vU.InteractiveBranded.Primary.Default, void 0, !0)
        ),
        y = m.ux.style(
          E,
          {
            $nest:
              ((n = {}),
              (0, a._)(n, ".".concat(M, " &"), {
                padding: "0 ".concat(m.ux.rem(i.x)),
                marginRight: m.ux.px(2),
                borderRadius: 0,
                $nest: {
                  "&:first-of-type": { borderRadius: "".concat(m.ux.rem(u.fx), " 0 0 ").concat(m.ux.rem(u.fx)) },
                  "&:last-of-type": {
                    marginRight: 0,
                    borderRight: "none",
                    borderRadius: "0 ".concat(m.ux.rem(u.fx), " ").concat(m.ux.rem(u.fx), " 0")
                  }
                }
              }),
              (0, a._)(n, ".".concat(M, " &:not([data-active='true'])"), { backgroundColor: s.CoreNeutral10 }),
              n)
          },
          h({
            default: {
              padding: "0 ".concat(m.ux.rem(i.x)),
              borderRadius: m.ux.rem(u.fx),
              backgroundColor: s.CoreNeutral10,
              color: c.vU.InteractiveBranded.Primary.Default,
              textTransform: "capitalize",
              letterSpacing: 0,
              fontSize: m.ux.rem(0.875),
              lineHeight: m.ux.rem(i.Ze),
              transitionDuration: ".2s"
            },
            hovered: { backgroundColor: s.CoreNeutral20 },
            toggled: {
              backgroundColor: c.vU.InteractiveBranded.Primary.Default,
              color: c.XY.Content.OnPrimary.Default,
              $nest: { "&:hover": { backgroundColor: c.vU.InteractiveBranded.Primary.Hover, color: c.XY.Content.OnPrimary.Default } }
            },
            disabled: {},
            clicked: {},
            hidden: {}
          })
        ),
        k = m.ux.style(
          E,
          C,
          v(m.ux.rem(i.x), 0),
          h({
            default: {
              display: "inline-flex",
              color: c.vU.InteractiveBranded.Primary.Default,
              lineHeight: m.ux.rem(i.Ze),
              transitionDuration: ".2s",
              transitionProperty: "border, background, color",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              minHeight: m.ux.rem(i.Ze),
              minWidth: m.ux.rem(i.Ze)
            },
            hovered: { background: d.Blue0 },
            disabled: {},
            clicked: {},
            toggled: { background: d.Blue0 },
            hidden: {}
          }),
          {
            $nest: (0, o._)((0, l._)({}, p(c.vU.InteractiveNeutral.Primary.Default, c.vU.InteractiveBranded.Primary.Default).$nest), {
              "&[data-textpos] i[data-role='icon']": { margin: "".concat(m.ux.rem(-0.1), " ").concat(m.ux.rem(0.25), " 0 0") }
            })
          }
        ),
        _ = m.ux.style(
          E,
          C,
          v(m.ux.rem(i.x), 0),
          h({
            default: {
              display: "inline-flex",
              color: c.vU.InteractiveNeutral.Primary.Default,
              lineHeight: m.ux.rem(i.Ze),
              transitionDuration: ".2s",
              transitionProperty: "border, background, color",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              minHeight: m.ux.rem(i.Ze),
              minWidth: m.ux.rem(i.Ze)
            },
            hovered: { background: d.BlueGray5, color: d.BlueGray70 },
            disabled: {},
            clicked: {},
            toggled: {},
            hidden: {}
          }),
          p(c.vU.InteractiveNeutral.Primary.Default, void 0, !0)
        ),
        N = m.ux.style(
          E,
          v(m.ux.rem(i.mh), m.ux.rem(i.x)),
          h({
            default: {
              display: "inline-flex",
              color: s.CoreNeutral90,
              textAlign: "left",
              fontWeight: "normal",
              fontSize: m.ux.rem(0.875),
              lineHeight: m.ux.rem(i.Ze),
              transitionDuration: ".2s",
              alignItems: "center",
              minHeight: m.ux.rem(i.Ze)
            },
            hovered: { backgroundColor: s.CoreNeutral10, color: c.vU.InteractiveBranded.Primary.Default },
            disabled: {},
            clicked: {},
            toggled: {},
            hidden: {}
          }),
          {
            $nest: (0, o._)((0, l._)({}, p(c.vU.InteractiveNeutral.Primary.Default, c.vU.InteractiveBranded.Primary.Default).$nest), {
              "&[data-textpos] i[data-role='icon']": { margin: "".concat(m.ux.rem(-0.1), " ").concat(m.ux.rem(0.25), " 0 0") }
            })
          }
        ),
        B = m.ux.style(E, C, {
          display: "flex",
          margin: "0 ".concat(m.ux.rem(i.x), " ").concat(m.ux.rem(i.x)),
          padding: "0 ".concat(m.ux.rem(0.3), " 0 ").concat(m.ux.rem(i.x)),
          minHeight: m.ux.rem(i.Ze),
          color: s.CoreNeutral70,
          textAlign: "left",
          whiteSpace: "normal",
          fontWeight: "normal",
          lineHeight: m.ux.rem(1.2),
          transition: "background .2s",
          alignItems: "center",
          $nest: { "&[data-hovered='true']": { background: s.CoreNeutral10 }, "&[data-active='true']": { background: s.CoreNeutral20 } }
        }),
        S = m.ux.style({ textDecoration: "none" }),
        Z = m.ux.style({
          display: "inline-flex",
          justifyContent: "space-around",
          $nest: { "& > *:not(:first-child)": { marginLeft: m.ux.rem(i.x) } }
        }),
        V = m.ux.style({ display: "inline-flex", flexDirection: "column", $nest: { "& > *": { borderRadius: 0 } } }),
        z = m.ux.style({ whiteSpace: "pre-line" });
    },
    31278: (e, t, r) => {
      r.d(t, { n4: () => V, JO: () => G, a1: () => P, T1: () => $ });
      var n = r(50693),
        a = r(82900),
        l = r(74923),
        o = r(18775),
        i = r(31099),
        c = r(50858),
        s = r(55818),
        d = r(98410),
        m = r(98314),
        u = r(71346),
        h = r(27378);
      const v = ({ title: e, titleId: t, desc: r, descId: n, ...a }) =>
        h.createElement(
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
            "aria-describedby": n,
            ...a
          },
          r ? h.createElement("desc", { id: n }, r) : null,
          e ? h.createElement("title", { id: t }, e) : null,
          h.createElement("circle", { cx: 12, cy: 12, r: 8, fill: "#006" }),
          h.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M4.004 11.727a8 8 0 0 1 7.746-7.723v3.68H9.253l2.497 2.498v1.545l-.023.023h-1.545L7.685 9.253v2.497l-3.68-.023Z",
            fill: "#fff"
          }),
          h.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M4.004 11.75a8 8 0 0 1 7.746-7.746v2.54H6.544v5.205h-2.54Zm7.746-1.053L8.711 7.66H7.66l4.09 4.09v-1.052Z",
            fill: "#EA1537"
          }),
          h.createElement("path", {
            d: "M16.262 8.019 16 7.5l-.261.519-.591-.13.264.518-.475.357.592.127-.002.575.473-.36.473.36-.002-.575.591-.127-.474-.357.264-.518-.59.13Zm-2.387 2.669.261.518.591-.13-.264.518.475.358-.592.126.002.575-.473-.36-.473.36.002-.575-.591-.126.474-.358-.264-.517.59.13.262-.52ZM9.086 14.13l-.524-1.052-.522 1.052-1.182-.263.53 1.05-.95.723 1.182.257-.003 1.165.946-.729.945.73-.003-1.166 1.182-.257-.95-.724.53-1.049-1.181.263Zm7.176 1.326L16 14.938l-.261.518-.591-.13.264.518-.475.358.592.126-.002.575.473-.36.473.36-.002-.575.591-.126-.474-.358.264-.517-.59.13Zm1.863-5.831.262.519.59-.13-.264.518.474.357-.59.127v.575l-.472-.36-.473.36.002-.575-.591-.127.474-.357-.264-.518.59.13.262-.519Zm-1.128 3.02-.19-.54-.189.54h-.613l.496.335-.19.54.497-.334.496.335-.19-.541.497-.335h-.614Z",
            fill: "#F9FAFF"
          })
        );
      v.__brand = "nocolor";
      const f = ({ title: e, titleId: t, desc: r, descId: n, ...a }) =>
        h.createElement(
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
            "aria-describedby": n,
            ...a
          },
          r ? h.createElement("desc", { id: n }, r) : null,
          e ? h.createElement("title", { id: t }, e) : null,
          h.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z",
            fill: "#F9FAFF"
          }),
          h.createElement("path", {
            d: "M5.999 6.71A7.97 7.97 0 0 0 4 12a7.97 7.97 0 0 0 1.999 5.29V6.71Zm12.003 0A7.97 7.97 0 0 1 20 12a7.97 7.97 0 0 1-1.996 5.287l-.002-10.576Zm-3.483 8.067 2.396-1.794-.495-.215c-.198-.066-.167-.167-.099-.393l.021-.07.364-1.234-1.394.273a.219.219 0 0 1-.247-.136l-.179-.582-1.103 1.145c-.155.183-.472.183-.387-.24l.472-2.318-.63.305c-.179.09-.357.104-.458-.057l-.86-1.521-.87 1.51c-.1.161-.279.147-.457.057l-.631-.304.472 2.302c.097.424-.22.424-.387.24l-1.103-1.144-.178.581a.219.219 0 0 1-.248.137l-1.394-.273.364 1.234.02.07c.07.226.1.327-.097.393l-.496.215 2.396 1.793a.29.29 0 0 1 .113.305l-.213.664c.382-.042.74-.092 1.1-.143.42-.059.84-.118 1.296-.162.07 0 .194.108.194.183l-.109 2.342h.387l-.061-2.335c0-.079.112-.197.182-.19.428.043.828.099 1.232.155.376.053.755.107 1.164.15l-.19-.628a.289.289 0 0 1 .113-.316Z",
            fill: "red"
          })
        );
      f.__brand = "nocolor";
      const p = ({ title: e, titleId: t, desc: r, descId: n, ...a }) =>
        h.createElement(
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
            "aria-describedby": n,
            ...a
          },
          r ? h.createElement("desc", { id: n }, r) : null,
          e ? h.createElement("title", { id: t }, e) : null,
          h.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z", fill: "#006" }),
          h.createElement("path", {
            d: "M14 4.252A8.015 8.015 0 0 0 12 4c-.69 0-1.36.088-2 .252v4.127L7.212 5.59a8.043 8.043 0 0 0-2.026 2.216L7.379 10H4.252A8.015 8.015 0 0 0 4 12c0 .69.088 1.36.252 2h4.127L5.59 16.788a8.042 8.042 0 0 0 2.216 2.026L10 16.621v3.127A8 8 0 0 0 12 20a8 8 0 0 0 2-.252v-3.127l2.193 2.193a8.043 8.043 0 0 0 2.216-2.026L15.622 14h4.127a8 8 0 0 0 .252-2 8 8 0 0 0-.252-2h-3.127l2.193-2.193a8.042 8.042 0 0 0-2.026-2.216L14 8.379V4.252Z",
            fill: "#F9FAFF"
          }),
          h.createElement("path", { d: "M5.467 7.38c.291-.41.62-.792.981-1.14L10 9.792V10H8.087l-2.62-2.62Z", fill: "#EA1537" }),
          h.createElement("path", {
            d: "M4.062 11H11V4.062a8.079 8.079 0 0 1 2 0V11h6.938a8.069 8.069 0 0 1 0 2H13v6.938a8.069 8.069 0 0 1-2 0V13H4.062a8.079 8.079 0 0 1 0-2Z",
            fill: "#EA1537"
          }),
          h.createElement("path", {
            d: "M7.388 18.538a8.048 8.048 0 0 1-1.142-.98L9.805 14H10v1.926l-2.612 2.612Zm10.718-1.368a8.047 8.047 0 0 1-1.072 1.048L14 15.184V14h.937l3.169 3.17ZM17.19 5.911c.38.326.73.686 1.045 1.076L15.222 10H14v-.899l3.19-3.19Z",
            fill: "#EA1537"
          })
        );
      p.__brand = "nocolor";
      const C = ({ title: e, titleId: t, desc: r, descId: n, ...a }) =>
        h.createElement(
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
            "aria-describedby": n,
            ...a
          },
          r ? h.createElement("desc", { id: n }, r) : null,
          e ? h.createElement("title", { id: t }, e) : null,
          h.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z",
            fill: "#F9FAFF"
          }),
          h.createElement("path", {
            d: "M12 20a7.97 7.97 0 0 0 5.292-2H6.708A7.97 7.97 0 0 0 12 20Zm-6.93-4h13.86a7.96 7.96 0 0 0 .818-2H4.252c.183.71.46 1.381.818 2ZM4 12h16a8 8 0 0 0-.252-2H4.252A8.014 8.014 0 0 0 4 12Zm1.07-4h13.86a8.037 8.037 0 0 0-1.638-2H6.708A8.037 8.037 0 0 0 5.07 8Z",
            fill: "#EA1537"
          }),
          h.createElement("path", { d: "M12 4a8 8 0 0 0-8 8h8V4Z", fill: "#006" }),
          h.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "m10.272 5.747-.221-.696-.222.69h-.728l.589.424-.228.69.589-.424.588.424-.228-.684.589-.424h-.728Zm-2.05 1.74L8 6.797l-.228.69h-.721l.582.425-.222.69L8 8.176l.582.43-.221-.695.588-.425h-.727ZM5.943 8.544l.228.69h.721l-.582.424.222.69-.589-.424-.582.424.221-.696L5 9.228h.722l.221-.684Zm4.33.69-.222-.69-.222.684h-.728l.589.424-.228.696.589-.424.588.424-.228-.69.589-.424h-.728Z",
            fill: "#F9FAFF"
          })
        );
      C.__brand = "nocolor";
      const E = ({ title: e, titleId: t, desc: r, descId: n, ...a }) =>
        h.createElement(
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
            "aria-describedby": n,
            ...a
          },
          r ? h.createElement("desc", { id: n }, r) : null,
          e ? h.createElement("title", { id: t }, e) : null,
          h.createElement(
            "g",
            { clipPath: "url(#flag_in_a)" },
            h.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z",
              fill: "#F9FAFF"
            }),
            h.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M18.037 17.25A7.981 7.981 0 0 1 12 20a7.981 7.981 0 0 1-6.037-2.75h12.073Z",
              fill: "#128807"
            }),
            h.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M5.963 17.25h12.073A7.969 7.969 0 0 0 20 12c0-2.009-.74-3.845-1.963-5.25H5.963A7.97 7.97 0 0 0 4 12a7.97 7.97 0 0 0 1.963 5.25Z",
              fill: "#fff"
            }),
            h.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M18.037 6.75H5.963A7.981 7.981 0 0 1 12 4c2.41 0 4.57 1.065 6.037 2.75Z",
              fill: "#F93"
            }),
            h.createElement("path", { d: "M16.2 12a4.2 4.2 0 1 1-8.4 0 4.2 4.2 0 0 1 8.4 0Z", fill: "#008" }),
            h.createElement("path", { d: "M12 15.675a3.675 3.675 0 1 0 0-7.35 3.675 3.675 0 0 0 0 7.35Z", fill: "#fff" }),
            h.createElement("path", {
              d: "M15.619 12.668a.19.19 0 1 0 .05-.375.19.19 0 0 0-.05.375Zm-.297.914a.189.189 0 1 0 .145-.35.189.189 0 0 0-.145.35Zm-.522.806a.19.19 0 1 0 .23-.3.19.19 0 0 0-.23.3Zm-.714.643a.189.189 0 1 0 .3-.23.189.189 0 0 0-.3.23ZM10.77 8.532a.19.19 0 1 0-.35.144.19.19 0 0 0 .35-.144Zm.94-.2a.19.19 0 1 0-.376.049.19.19 0 0 0 .375-.05Zm3.758 2.438a.189.189 0 1 0-.144-.35.189.189 0 0 0 .144.35Zm-2.8-2.389a.189.189 0 1 0-.374-.05.189.189 0 0 0 .374.05Zm.914.296a.19.19 0 1 0-.35-.144.19.19 0 0 0 .35.144Zm.806.523a.19.19 0 1 0-.3-.23.19.19 0 0 0 .3.23Zm-1.158 6.268a.189.189 0 1 0 .35-.145.189.189 0 0 0-.35.145Zm-.939.2a.189.189 0 1 0 .375-.049.189.189 0 0 0-.375.05Zm-.959-.049a.189.189 0 1 0 .374.05.189.189 0 0 0-.374-.05Zm-.914-.297a.19.19 0 1 0 .35.145.19.19 0 0 0-.35-.145Zm4.614-5.408a.189.189 0 1 0-.23-.3.189.189 0 0 0 .23.3ZM9.612 14.8a.189.189 0 1 0 .3.23.189.189 0 0 0-.3-.23Zm-.644-.714a.189.189 0 1 0 .23.3.189.189 0 0 0-.23-.3Zm-.436-.856a.19.19 0 1 0 .145.35.19.19 0 0 0-.145-.35Zm-.201-.94a.189.189 0 1 0 .05.375.189.189 0 0 0-.05-.374Zm7.337-.581a.189.189 0 1 0-.049-.375.189.189 0 0 0 .05.375Zm-7.287-.378a.189.189 0 1 0-.05.375.189.189 0 0 0 .05-.375Zm.297-.913a.19.19 0 1 0-.145.349.19.19 0 0 0 .145-.35Zm.522-.807a.189.189 0 1 0-.23.3.189.189 0 0 0 .23-.3Zm.714-.643a.189.189 0 1 0-.3.23.189.189 0 0 0 .3-.23Zm1.96 1.562L12 8.325l.126 2.205L12 11.58l-.126-1.05Zm1.076.342 1.649-1.47-1.47 1.648-.832.653.653-.831Zm.888-2.054-1.212 1.846-.416.973.634-.847.994-1.972Zm-1.579 1.73.692-2.097-.449 2.162-.393.982.15-1.047Zm.692 5.002-.449-2.163-.393-.981.15 1.047.692 2.097Zm-1.453-4.937-.45-2.163.693 2.098.15 1.046-.393-.981Zm-1.336-1.795.994 1.972.634.846-.416-.972-1.212-1.846Zm.709 2.232L9.401 9.4l1.649 1.47.653.832-.832-.653Zm-2.054-.887 1.847 1.211.972.416-.846-.634-1.973-.993Zm4.312 2.787 1.47 1.649-1.649-1.47-.653-.832.832.654Zm-4.679-1.9 2.098.691 1.046.15-.981-.393-2.163-.449Zm2.08 1.076L8.325 12l2.205-.126 1.05.126-1.05.126Zm-2.08.825 2.163-.449.981-.393-1.046.15-2.098.692Zm2.34-.107-1.973.994 1.847-1.212.972-.416-.846.634Zm4.76.107-2.098-.692-1.046-.15.981.393 2.163.45Zm-2.214-.325 1.847 1.212-1.973-.994-.846-.634.972.416ZM15.675 12l-2.205-.126-1.05.126 1.05.126L15.675 12Zm-2.831 1.21.994 1.973-1.212-1.847-.416-.972.634.846Zm2.706-2.16-2.163.448-.981.394 1.046-.15 2.098-.693Zm-2.34.106 1.973-.993-1.847 1.211-.972.416.846-.634Zm-3.809 3.443 1.649-1.47.653-.832-.832.654-1.47 1.648Zm1.973-1.263-1.212 1.847.994-1.973.634-.846-.416.972Zm-.325 2.214.692-2.097.15-1.047-.393.981-.45 2.163Zm1.077-2.08L12 15.675l-.126-2.205.126-1.05.126 1.05Z",
              fill: "#008"
            })
          ),
          h.createElement(
            "defs",
            null,
            h.createElement(
              "clipPath",
              { id: "flag_in_a" },
              h.createElement("path", { fill: "#fff", transform: "translate(4 4)", d: "M0 0h16v16H0z" })
            )
          )
        );
      E.__brand = "nocolor";
      var w,
        x = r(45614),
        g = r(57050),
        M = r(40327),
        H = r(8543),
        L = r(54001),
        y = r(76974),
        k = r(2844),
        _ = r(77176),
        N = r(5114),
        B = r(18208),
        S = r(83078),
        Z = r(55415);
      !(function (e) {
        (e.Reload = function () {
          return h.createElement(
            "svg",
            { width: "32", viewBox: "0 0 32 32" },
            h.createElement("path", {
              fill: "none",
              d: "M14.5 11.393A5.428 5.428 0 0 0 11 16.5a5.502 5.502 0 0 0 3.536 5.139m3.928-10.246C20.532 12.183 22 14.154 22 16.5a5.475 5.475 0 0 1-3.506 5.139M11.5 11h3v3m7 8h-3v-3"
            })
          );
        }),
          (e.Collapse = function () {
            return h.createElement(
              "svg",
              { width: "32", viewBox: "0 0 32 32" },
              h.createElement("path", { fill: "none", d: "M11.5 7.5 16 12l4.5-4.5m-9 17L16 20l4.5 4.5", strokeLinecap: "round" })
            );
          }),
          (e.MoreVertical = function () {
            return h.createElement(
              "svg",
              { width: "32", viewBox: "0 0 32 32" },
              h.createElement("path", {
                d: "M17.5 16a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM17.5 22a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM17.5 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z",
                strokeWidth: "0"
              })
            );
          });
      })(w || (w = {}));
      var V,
        z = r(44060),
        b = r(99094),
        F = r(89894),
        A = r(40456),
        D = r(32096);
      !(function (e) {
        (e.down = "down"), (e.left = "left"), (e.right = "right"), (e.up = "up");
      })(V || (V = {}));
      var R = new Map([
          [V.down, "0 3"],
          [V.left, "8 0"],
          [V.up, "10 8"],
          [V.right, "2 10"]
        ]),
        I = new Map([
          [V.down, "0"],
          [V.left, "90"],
          [V.up, "180"],
          [V.right, "270"]
        ]),
        P = (function (e) {
          (0, i._)(r, e);
          var t = (0, u._)(r);
          function r() {
            return (0, a._)(this, r), t.apply(this, arguments);
          }
          return (
            (0, l._)(r, [
              {
                key: "_getAux",
                value: function (e) {
                  return (0, M.pipe)(
                    this.props[e],
                    N.fromNullable,
                    N.map(function (t) {
                      var r = B.fg(5);
                      return { id: r, comp: h.createElement(e, { id: r }, t) };
                    })
                  );
                }
              },
              {
                key: "render",
                value: function () {
                  var e = this._getAux("title"),
                    t = this._getAux("desc");
                  return h.createElement(
                    H.F.i,
                    (0, s._)((0, c._)({}, (0, L.Sh)(he.icon, this.props.className)), {
                      "data-disabled": this.context.disabled,
                      "data-hovered": this.context.hovered,
                      "data-active": this.context.active,
                      "data-role": "icon",
                      role: this.props.role,
                      "aria-hidden": !Boolean(this.props.role),
                      "aria-labelledby": (0, M.pipe)(
                        e,
                        N.map(function (e) {
                          return e.id;
                        }),
                        S.Fc
                      ),
                      "aria-describedby": (0, M.pipe)(
                        t,
                        N.map(function (e) {
                          return e.id;
                        }),
                        S.Fc
                      )
                    }),
                    h.createElement(
                      "svg",
                      {
                        width: this.props.width,
                        viewBox: this.props.viewBox,
                        className: !0 === this.props.dontScale ? "" : he.holder,
                        fill: this.props.fill
                      },
                      r._getAuxComponent(e),
                      r._getAuxComponent(t),
                      this.props.children
                    )
                  );
                }
              }
            ]),
            r
          );
        })(h.Component);
      (0, o._)(P, "contextType", b.f.Context), (0, o._)(P, "_getAuxComponent", (0, g.ls)(N.map(Z.ei("comp")), S.QP));
      var W = function (e) {
          var t = h.useContext(b.f.Context);
          return h.createElement(
            H.F.i,
            (0, s._)((0, c._)({}, (0, L.Sh)(he.icon, e.className, !0 === e.dontScale ? "" : he.holder)), {
              "data-disabled": t.disabled,
              "data-hovered": t.hovered,
              "data-active": t.active,
              "data-role": "icon",
              role: e.role,
              "aria-hidden": !Boolean(e.role)
            }),
            e.children
          );
        },
        T = function (e) {
          var t = e.className,
            r = e.children,
            n = e.role,
            a = h.useContext(b.f.Context);
          return h.createElement(
            H.F.i,
            (0, s._)((0, c._)({}, (0, L.Sh)(he.iconSimple, t)), {
              "data-disabled": a.disabled,
              "data-hovered": a.hovered,
              "data-active": a.active,
              "data-role": "icon",
              role: n,
              "aria-hidden": !Boolean(n)
            }),
            r
          );
        },
        U = (function (e) {
          (0, i._)(r, e);
          var t = (0, u._)(r);
          function r() {
            return (0, a._)(this, r), t.apply(this, arguments);
          }
          return (
            (0, l._)(r, [
              {
                key: "render",
                value: function () {
                  return h.createElement(
                    "path",
                    (0, c._)(
                      {
                        d: "M11.18 10.273c-.593 0-1.068.53-.952 1.14.08.46.522.784.997.784h1.496l.87-.115c-1.39 2.016-3.79 2.95-6.423 2.546-2.144-.334-3.988-1.774-4.765-3.79-1.762-4.575 1.6-8.942 5.97-8.942 2.285 0 4.28 1.325 5.427 2.927v.034c.3.438.903.565 1.344.254.417-.287.533-.83.278-1.266h.01C13.846 1.39 11.006-.19 7.793.018 3.633.318.247 3.705.015 7.853c-.278 4.828 3.57 8.768 8.37 8.768 2.516 0 4.766-1.093 6.307-2.856l-.184 1.014v.91c0 .472.325.91.788.99.615.116 1.148-.356 1.148-.944V10.26H11.18v.013z",
                        fill: "#FFF",
                        stroke: "none",
                        fillRule: "evenodd"
                      },
                      this.props
                    )
                  );
                }
              }
            ]),
            r
          );
        })(h.PureComponent);
      (0, o._)(U, "size", 16.5);
      var G,
        O,
        Y = (function (e) {
          (0, i._)(r, e);
          var t = (0, u._)(r);
          function r() {
            return (0, a._)(this, r), t.apply(this, arguments);
          }
          return (
            (0, l._)(r, [
              {
                key: "render",
                value: function () {
                  return h.createElement(
                    h.Fragment,
                    null,
                    h.createElement("path", {
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "M24 12C24 18.6271 18.6277 24 12 24C5.37287 24 0 18.6271 0 12C0 5.37235 5.37287 0 12 0C18.6277 0 24 5.37235 24 12Z",
                      fill: "#15C39A",
                      stroke: "none"
                    }),
                    h.createElement("path", {
                      d: "M12 24C18.6277 24 24 18.6272 24 12H0C0 18.6272 5.37281 24 12 24Z",
                      fill: "#FFCC00",
                      stroke: "none"
                    }),
                    h.createElement("path", {
                      d: "M12 0C5.37281 0 0 5.37235 0 12H24C24 5.37235 18.6277 0 12 0Z",
                      fill: "#0066CC",
                      stroke: "none"
                    }),
                    h.createElement(
                      "g",
                      { filter: "url(#filter0_d_2992_154725)" },
                      h.createElement("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M13.5683 14.5912C13.6393 14.984 14.0087 15.2533 14.4078 15.2533H15.6652L16.3941 15.151C15.228 16.8618 13.2031 17.6491 10.9894 17.3016C9.18728 17.0188 7.63928 15.7995 6.98606 14.0966C5.50328 10.231 8.32641 6.54022 12.0052 6.54022C13.9226 6.54022 15.6047 7.6917 16.5688 9.04718C16.825 9.41605 17.3316 9.52196 17.701 9.26578C18.0516 9.02265 18.1539 8.56092 17.9431 8.19778C16.6095 6.11605 14.2132 4.78405 11.5184 4.96457C8.00971 5.19987 5.17041 8.071 4.96849 11.5818C4.73423 15.667 7.97475 19.0025 12.0052 19.0025C14.1224 19.0025 16.0179 18.0806 17.3092 16.5889L17.1563 17.4446V18.2178C17.1563 18.6164 17.425 18.9863 17.8179 19.0573C18.3339 19.1501 18.7826 18.7562 18.7826 18.2574V13.6265H14.3676C13.8688 13.6265 13.4749 14.0757 13.5683 14.5912Z",
                        fill: "white",
                        stroke: "none"
                      })
                    ),
                    h.createElement(
                      "defs",
                      null,
                      h.createElement(
                        "filter",
                        {
                          id: "filter0_d_2992_154725",
                          x: "4.95654",
                          y: "4.94824",
                          width: "13.8262",
                          height: "15.1226",
                          filterUnits: "userSpaceOnUse",
                          colorInterpolationFilters: "sRGB"
                        },
                        h.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                        h.createElement("feColorMatrix", {
                          in: "SourceAlpha",
                          type: "matrix",
                          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                          result: "hardAlpha"
                        }),
                        h.createElement("feOffset", { dy: "1" }),
                        h.createElement("feComposite", { in2: "hardAlpha", operator: "out" }),
                        h.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0.4 0 0 0 0 0.8 0 0 0 0.15 0" }),
                        h.createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow_2992_154725" }),
                        h.createElement("feBlend", {
                          mode: "normal",
                          in: "SourceGraphic",
                          in2: "effect1_dropShadow_2992_154725",
                          result: "shape"
                        })
                      )
                    )
                  );
                }
              }
            ]),
            r
          );
        })(h.PureComponent);
      (0, o._)(Y, "size", 16.5),
        (function (e) {
          (e.UserProfile = function (e) {
            var t = e.className,
              r = e.width,
              n = void 0 === r ? 24 : r;
            return h.createElement(
              P,
              { className: t, width: n, viewBox: "0 0 24 24" },
              h.createElement("path", {
                d: "M12 2C6.47715 2 2 6.47715 2 12C2 14.4815 2.90386 16.7519 4.40031 18.4999L8 17C9.07177 16.5534 9.81289 15.5753 9.96923 14.4469C8.79062 13.751 8 12.4678 8 11V9C8 6.79086 9.79086 5 12 5C14.2091 5 16 6.79086 16 9V11C16 12.4678 15.2094 13.751 14.0308 14.4469C14.1871 15.5753 14.9282 16.5534 16 17L19.5997 18.4999C21.0961 16.7519 22 14.4815 22 12C22 6.47715 17.5228 2 12 2ZM18.8608 19.2753L15.6154 17.9231C14.2989 17.3746 13.3639 16.2128 13.0859 14.8509C12.7406 14.948 12.3764 15 12 15C11.6236 15 11.2594 14.948 10.9141 14.8509C10.6361 16.2128 9.70107 17.3746 8.38461 17.9231L5.13923 19.2753C6.92988 20.9646 9.34402 22 12 22C14.656 22 17.0701 20.9646 18.8608 19.2753ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12 6C10.3431 6 9 7.34315 9 9V11C9 12.6569 10.3431 14 12 14C13.6569 14 15 12.6569 15 11V9C15 7.34315 13.6569 6 12 6Z"
              })
            );
          }),
            (e.Library = function (e) {
              var t = e.className,
                r = e.width,
                n = void 0 === r ? 24 : r;
              return h.createElement(
                P,
                { className: t, width: n, viewBox: "0 0 24 16" },
                h.createElement("path", {
                  d: "M22.16 8.5L18.44 2c-.36-.62-1.02-1-1.74-1H7.28c-.7 0-1.37.38-1.73 1L1.72 8.5h5.96c.27 0 .5.22.5.5 0 1.74 1.85 3.5 3.82 3.5 1.92 0 3.53-1.7 3.53-3.5 0-.28.22-.5.5-.5h6.13zm.34 1h-6c-.27 2.15-2.2 4-4.5 4-2.33 0-4.5-1.9-4.8-4H1.5V13c0 1.1.9 2 2 2h17c1.1 0 2-.9 2-2V9.5zM7.28 0h9.42c1.08 0 2.07.58 2.6 1.5l4.13 7.2c.05.1.07.17.07.26V13c0 1.66-1.34 3-3 3h-17c-1.66 0-3-1.34-3-3V8.74c0-.08.02-.17.07-.25L4.7 1.47C5.22.56 6.2 0 7.27 0z",
                  stroke: "none"
                })
              );
            }),
            (e.Plagiarism = function (e) {
              var t = e.className,
                r = e.width,
                n = void 0 === r ? 19 : r;
              return h.createElement(
                P,
                { className: t, width: n, viewBox: "0 0 20 16" },
                h.createElement("path", {
                  d: "M11.1 7.38c-.27 0-.48-.2-.48-.48V.48c0-.27.2-.48.47-.48h6.57c.27 0 .48.2.48.48V6.9c0 4.5-1.65 7.37-5.57 9.06-.23.1-.5 0-.6-.2l-1.4-2.6c-.15-.23-.04-.54.2-.65 2.35-1.05 3.1-2.3 3.17-5.12H11.1zm6.1-.48V.96h-5.63v5.46h2.87c.26 0 .47.22.47.48 0 3.32-.78 5-3.25 6.26l.94 1.74c3.26-1.54 4.6-4 4.6-8zm-13.75.48H.6c-.28 0-.5-.2-.5-.48V.48C.1.2.33 0 .6 0h6.56c.27 0 .48.2.48.48V6.9c0 4.5-1.65 7.37-5.57 9.06-.23.1-.5 0-.6-.2l-1.4-2.6c-.14-.23-.04-.54.2-.65 2.35-1.05 3.1-2.3 3.18-5.12zM6.7 6.9V.96H1.05v5.46h2.87c.26 0 .48.22.48.48 0 3.32-.8 5-3.26 6.26l.95 1.74c3.25-1.54 4.6-4 4.6-8z",
                  stroke: "none"
                })
              );
            }),
            (e.PlagiarismOutcomes = function (e) {
              var t = e.className,
                r = e.width,
                n = void 0 === r ? 22 : r;
              return h.createElement(
                P,
                { className: t, width: n, viewBox: "0 0 22 18" },
                h.createElement("path", {
                  d: "M17.41 9.75l-.67 1.17a14.42 14.42 0 0 1-3.4 3.84l.96 1.43a16.38 16.38 0 0 0 4.96-4.58A10.62 10.62 0 0 0 21 5.55a4 4 0 1 0-4.9 3.9l1.31.3zm-3.94 7l-.96-1.43c-.29-.43-.2-1.02.2-1.35 1.12-.93 1.96-1.8 2.59-2.66.21-.3.4-.6.57-.89A4.96 4.96 0 0 1 12 5.55a5 5 0 1 1 10 0c0 5.2-2.68 8.6-7.19 11.5a.98.98 0 0 1-1.34-.3zm-12 0l-.96-1.43c-.29-.43-.2-1.02.2-1.35 1.12-.93 1.96-1.8 2.59-2.66.21-.3.4-.6.57-.89A4.96 4.96 0 0 1 0 5.55a5 5 0 1 1 10 0c0 5.2-2.68 8.6-7.19 11.5a.98.98 0 0 1-1.34-.3zm3.94-7l-.67 1.17a14.42 14.42 0 0 1-3.4 3.84l.96 1.43a16.38 16.38 0 0 0 4.96-4.58A10.62 10.62 0 0 0 9 5.55a4 4 0 1 0-4.9 3.9l1.31.3z",
                  stroke: "none"
                })
              );
            }),
            (e.PlagiarismPublication = function (e) {
              var t = e.className,
                r = e.width,
                n = void 0 === r ? 16 : r;
              return h.createElement(
                P,
                { className: t, width: n, viewBox: "0 0 16 16" },
                h.createElement("path", {
                  d: "M16 5.528V16H2c-1.105 0-2-.895-2-2V3.5l.05.048C.017 3.37 0 3.188 0 3c0-1.657 1.343-3 3-3h12.5c.412 0 .647.47.4.8-.563.75-.838 1.482-.838 2.2 0 .718.275 1.45.838 2.2.076.102.107.217.1.328zM14.588 1H3c-1.105 0-2 .895-2 2s.895 2 2 2h11.588c-.348-.658-.525-1.326-.525-2 0-.674.177-1.342.525-2z",
                  fillRule: "nonzero",
                  fill: "#A6ADC9",
                  stroke: "none"
                })
              );
            }),
            (e.Proofread = function (e) {
              var t = e.className,
                r = e.width,
                n = void 0 === r ? 24 : r;
              return h.createElement(
                P,
                { className: t, width: n, viewBox: "0 0 24 21" },
                h.createElement("path", {
                  d: "M13.97 15.08c2.5 0 4.56-2.03 4.56-4.55 0-2.5-2.06-4.53-4.56-4.53-2.5 0-4.55 2.03-4.55 4.55 0 2.5 2.06 4.53 4.55 4.53zm-.62 7.9L14.3 24H7.58C6.17 24 5 22.84 5 21.43v-.7c0-2.82 2.2-5.2 5-5.4.14 0 .3.06.4.16.98.9 2.24 1.43 3.57 1.43 1.34 0 2.63-.52 3.58-1.44.1-.1.23-.17.38-.17 2.05.15 3.78 1.45 4.56 3.24l-.8.83c-.5-1.6-1.9-2.8-3.6-3-1.14 1-2.58 1.56-4.13 1.56-1.54 0-2.98-.54-4.1-1.57-2.17.27-3.84 2.12-3.84 4.33v.7c0 .85.7 1.54 1.54 1.54h5.78zm.62-15.95c1.93 0 3.53 1.57 3.53 3.52 0 1.93-1.57 3.52-3.53 3.52-1.92 0-3.52-1.56-3.52-3.52 0-1.95 1.6-3.52 3.52-3.52zm3.4 14.66l3.45 3.78 6.8-7.5c.2-.2.5-.2.72-.02.2.18.22.5.03.7l-7.18 7.9c-.2.22-.55.22-.75 0l-3.82-4.2c-.2-.2-.17-.52.03-.7.2-.2.52-.18.7.03z",
                  transform: "translate(-5 -6)",
                  stroke: "none"
                })
              );
            }),
            (e.ProofreadOutcomes = function (e) {
              var t = e.className,
                r = e.width,
                n = void 0 === r ? 23 : r;
              return h.createElement(
                P,
                { className: t, width: n, viewBox: "0 0 23 23" },
                h.createElement("path", {
                  transform: "translate(-6 -5)",
                  stroke: "none",
                  d: "M15.5 6A3.5 3.5 0 0 0 12 9.5v2a3.5 3.5 0 0 0 7 0v-2A3.5 3.5 0 0 0 15.5 6zm1.5 9.744c-.47.166-.974.256-1.5.256s-1.03-.09-1.5-.256v1.02A2.5 2.5 0 0 1 12.618 19l-4.236 2.118A2.5 2.5 0 0 0 7 23.354V24h5a.5.5 0 1 1 0 1H6.5a.5.5 0 0 1-.5-.5v-1.146a3.5 3.5 0 0 1 1.935-3.13l4.236-2.118A1.5 1.5 0 0 0 13 16.764v-1.522a4.496 4.496 0 0 1-2-3.742v-2a4.5 4.5 0 1 1 9 0v2c0 1.56-.794 2.935-2 3.742V16.7c0 .593.349 1.13.89 1.371l3.313 1.472a.5.5 0 0 1-.406.914l-3.312-1.472A2.5 2.5 0 0 1 17 16.7v-.956zm11.146 2.402a.5.5 0 0 1 .708.708l-9 9a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708l3.646 3.647 8.646-8.647z"
                })
              );
            }),
            (e.Ideate = function (e) {
              var t = e.className,
                r = e.width,
                n = void 0 === r ? 24 : r;
              return h.createElement(
                P,
                { className: t, width: n, viewBox: "0 0 24 24" },
                h.createElement("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  stroke: "none",
                  d: "M9.5 4C10.0523 4 10.5 3.55228 10.5 3C10.5 2.44772 10.0523 2 9.5 2C8.94772 2 8.5 2.44772 8.5 3C8.5 3.55228 8.94772 4 9.5 4ZM20 5.5C20 6.05228 19.5523 6.5 19 6.5C18.4477 6.5 18 6.05228 18 5.5C18 4.94772 18.4477 4.5 19 4.5C19.5523 4.5 20 4.94772 20 5.5ZM17.2503 15.2425L16.792 16.6428C16.7222 16.8559 16.5234 17 16.2992 17H7.70077C7.47656 17 7.27775 16.8559 7.20802 16.6428L6.74975 15.2425C5.58088 11.671 8.24206 8 12 8C15.7579 8 18.4191 11.671 17.2503 15.2425ZM5.79935 15.5536C4.4189 11.3355 7.5618 7 12 7C16.4382 7 19.5811 11.3355 18.2006 15.5536L17.7424 16.9538C17.5381 17.5779 16.9559 18 16.2992 18H7.70077C7.04412 18 6.46186 17.5779 6.25762 16.9538L5.79935 15.5536ZM8 20C7.72386 20 7.5 20.2239 7.5 20.5C7.5 20.7761 7.72386 21 8 21H16C16.2761 21 16.5 20.7761 16.5 20.5C16.5 20.2239 16.2761 20 16 20H8ZM15.5 3C15.5 3.55228 15.0523 4 14.5 4C13.9477 4 13.5 3.55228 13.5 3C13.5 2.44772 13.9477 2 14.5 2C15.0523 2 15.5 2.44772 15.5 3ZM5 6.5C5.55228 6.5 6 6.05228 6 5.5C6 4.94772 5.55228 4.5 5 4.5C4.44772 4.5 4 4.94772 4 5.5C4 6.05228 4.44772 6.5 5 6.5Z"
                })
              );
            });
          var t = (e.NewBadge = function (e) {
              var t = e.className;
              return h.createElement("div", (0, L.Sh)(he.newIcon, t), h.createElement("div", { className: he.newIconCaption }, "NEW"));
            }),
            r =
              ((e.NewBadgeWrapper = function (e) {
                var r = e.children;
                return h.createElement("div", null, h.createElement(t, null), r);
              }),
              (e.Exit = function (e) {
                var t = e.className,
                  r = e.width,
                  n = void 0 === r ? 14 : r;
                return h.createElement(
                  P,
                  (0, s._)((0, c._)({}, (0, L.Sh)(he.exitIcon, t)), { width: n, viewBox: "0 0 14 10" }),
                  h.createElement("path", { d: "M8.08 0l4.96 4.96L8 10M1.08 0l4.96 4.96L1 10" })
                );
              }),
              (e.Arrow = function (e) {
                var t = e.className,
                  r = e.width,
                  n = void 0 === r ? 10 : r,
                  a = e.direction,
                  l = void 0 === a ? V.down : a;
                return h.createElement(
                  P,
                  { className: t, width: n, viewBox: "0 0 10 10" },
                  h.createElement("path", {
                    d: "M5 4.3L.85.14c-.2-.2-.5-.2-.7 0-.2.2-.2.5 0 .7L5 5.7 9.85.87c.2-.2.2-.5 0-.7-.2-.2-.5-.2-.7 0L5 4.28z",
                    stroke: "none",
                    transform: "translate(".concat(R.get(l), ") rotate(").concat(I.get(l), ")")
                  })
                );
              }),
              (e.ReverseArrow = function (e) {
                var t = e.className,
                  r = e.width,
                  n = void 0 === r ? 18 : r;
                return h.createElement(
                  P,
                  { className: t, width: n, viewBox: "0 0 18 12" },
                  h.createElement("path", {
                    d: "M5 0v1L2 4h11a4 4 0 0 1 0 8h-2a1 1 0 0 1 0-1h2a3 3 0 1 0 0-6H2l3 3v1L0 5l5-5z",
                    stroke: "none"
                  })
                );
              })),
            w =
              ((e.Download = function (e) {
                var t = e.className,
                  r = e.width,
                  n = void 0 === r ? 16 : r;
                return h.createElement(
                  P,
                  { className: t, width: n, viewBox: "0 0 16 18" },
                  h.createElement("path", {
                    d: "M7.5 11.06V1c0-.27.22-.5.5-.5s.5.23.5.5v10.04l3.15-3.14c.2-.2.5-.2.7 0 .2.2.2.5 0 .7L8 12.97 3.64 8.62c-.2-.2-.2-.5 0-.7.2-.2.5-.2.7 0l3.15 3.14zm-7 2c0-.26.22-.5.5-.5s.5.24.5.5v2.95c0 .28.22.5.5.5h12c.28 0 .5-.22.5-.5v-3c0-.28.22-.5.5-.5s.5.22.5.5v3c0 .84-.67 1.5-1.5 1.5H2C1.2 17.5.5 16.84.5 16v-2.93z",
                    stroke: "none"
                  })
                );
              }),
              (e.Print = function (e) {
                var t = e.className,
                  r = e.width,
                  n = void 0 === r ? 18 : r;
                return h.createElement(
                  P,
                  { className: t, width: n, viewBox: "0 0 18 18" },
                  h.createElement("path", {
                    d: "M2.5 3.5V1c0-.28.22-.5.5-.5h12c.28 0 .5.22.5.5v2.5H17c.28 0 .5.22.5.5v8c0 .28-.22.5-.5.5h-1.5V17c0 .28-.22.5-.5.5H3c-.28 0-.5-.22-.5-.5v-4.5H1c-.28 0-.5-.22-.5-.5V4c0-.28.22-.5.5-.5h1.5zm0 8V8c0-.28.22-.5.5-.5h12c.28 0 .5.22.5.5v3.5h1v-7h-15v7h1zm1-3v8h11v-8h-11zm0-7v2h11v-2h-11zm2.5 10c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h6c.28 0 .5.22.5.5s-.22.5-.5.5H6zm0 3c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h4c.28 0 .5.22.5.5s-.22.5-.5.5H6z",
                    stroke: "none"
                  })
                );
              }),
              (e.Copy = function (e) {
                var t = e.className,
                  r = e.width,
                  n = void 0 === r ? 18 : r;
                return h.createElement(
                  P,
                  { className: t, width: n, viewBox: "0 0 18 18" },
                  h.createElement("path", {
                    d: "M13.5 7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h2.38c.9 0 1.62.73 1.62 1.62v7.76c0 .9-.73 1.62-1.62 1.62H8.12c-.9 0-1.62-.73-1.62-1.62V13.5c0-.28.22-.5.5-.5s.5.22.5.5v2.38c0 .34.28.62.62.62h7.76c.34 0 .62-.28.62-.62V8.12c0-.34-.28-.62-.62-.62H13.5zM.5 2C.5 1.17 1.18.5 2 .5h8c.83 0 1.5.68 1.5 1.5v8c0 .83-.68 1.5-1.5 1.5H2c-.83 0-1.5-.68-1.5-1.5V2zm1 0v8c0 .27.23.5.5.5h8c.27 0 .5-.23.5-.5V2c0-.27-.23-.5-.5-.5H2c-.27 0-.5.23-.5.5z",
                    stroke: "none"
                  })
                );
              }),
              (e.Share = function (e) {
                var t = e.className,
                  r = e.width,
                  n = void 0 === r ? 18 : r;
                return h.createElement(
                  P,
                  { className: t, width: n, viewBox: "0 0 18 18" },
                  h.createElement("path", {
                    d: "M15.7 5.45h-1.77c-4.33 0-7.85 3.5-7.85 7.83 0 .28-.22.5-.5.5-.27 0-.5-.22-.5-.5 0-4.88 3.97-8.83 8.85-8.83h1.84L12.6 1.28c-.2-.2-.2-.5 0-.7.2-.2.5-.2.7 0l4.35 4.34-4.36 4.36c-.2.2-.52.2-.7 0-.2-.2-.2-.5 0-.7l3.1-3.13zM.5 13.08c0-.28.22-.5.5-.5s.5.22.5.5v2.94c0 .27.22.5.5.5h12c.28 0 .5-.23.5-.5v-3c0-.3.22-.5.5-.5s.5.2.5.5v3c0 .82-.67 1.5-1.5 1.5H2C1.2 17.5.5 16.83.5 16v-2.94z",
                    stroke: "none"
                  })
                );
              }),
              (e.Stats = function (e) {
                var t = e.className,
                  r = e.width,
                  n = void 0 === r ? 16 : r;
                return h.createElement(
                  P,
                  { className: t, width: n, viewBox: "0 0 16 16" },
                  h.createElement("path", {
                    d: "M2.5 12h-1V5h1v7zm-1 0V5c0-.67 1-.67 1 0v7c0 .67-1 .67-1 0zm4 0V6c0-.67 1-.67 1 0v6c0 .67-1 .67-1 0zm4 0V4c0-.67 1-.67 1 0v8c0 .67-1 .67-1 0zm4 0V1.14c0-.67 1-.67 1 0V12c0 .67-1 .67-1 0zm-13 3.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h15c.28 0 .5.22.5.5s-.22.5-.5.5H.5z",
                    stroke: "none"
                  })
                );
              }),
              (e.Star = function (e) {
                var t = e.className,
                  r = e.width,
                  n = void 0 === r ? 16 : r;
                return h.createElement(
                  P,
                  (0, s._)((0, c._)({}, (0, L.Sh)(t, he.starIcon)), { width: n, viewBox: "0 0 16 16" }),
                  h.createElement("path", {
                    d: "M6.65 10.8l-4.02 2.72L4.03 9c.08-.24 0-.5-.2-.65L-.03 5.5l4.86-.1c.24 0 .45-.16.53-.38l1.6-4.5 1.62 4.5c.08.22.3.38.54.38l4.85.1-3.85 2.85c-.2.15-.28.4-.2.64l1.4 4.52-4.02-2.7c-.2-.14-.46-.14-.65 0z",
                    transform: "translate(1 1)",
                    strokeLinejoin: "round"
                  })
                );
              }),
              (e.Pin = function (e) {
                var t = e.className,
                  r = e.width,
                  n = void 0 === r ? 24 : r;
                return h.createElement(
                  P,
                  (0, s._)((0, c._)({}, (0, L.Sh)(t, he.pinIcon)), { width: n, viewBox: "0 0 24 24" }),
                  h.createElement("path", {
                    d: "M15.3585 2.63085L21.3689 8.64126L21.1911 8.81909C20.5291 9.48107 19.5801 9.76841 18.6621 9.58481L18.3637 9.52514L15.005 12.8839L15.2839 13.7206C15.763 15.1579 15.3889 16.7426 14.3176 17.8139L14.1211 18.0104L5.98935 9.87869L6.18583 9.68222C7.25716 8.61089 8.84183 8.2368 10.2792 8.71591L11.1159 8.99481L14.4746 5.63605L14.415 5.3377C14.2314 4.41969 14.5187 3.47066 15.1807 2.80868L15.3585 2.63085Z",
                    strokeLinejoin: "round"
                  }),
                  h.createElement("path", { d: "M10.0557 13.9446L5.63625 18.364", strokeLinecap: "round" })
                );
              }),
              (e.New = function (e) {
                var t = e.className,
                  r = e.width,
                  n = void 0 === r ? 21 : r;
                return h.createElement(
                  P,
                  { className: t, width: n, viewBox: "0 0 21 21" },
                  h.createElement("path", {
                    d: "M11 10h4c.14 0 .26.05.36.14.1.1.14.21.14.36s-.05.27-.14.36c-.1.1-.22.14-.36.14h-4v4c0 .15-.05.27-.14.36-.1.1-.21.15-.36.15a.49.49 0 0 1-.36-.15.49.49 0 0 1-.14-.35V11H6a.49.49 0 0 1-.36-.14.49.49 0 0 1-.14-.36c0-.15.05-.27.14-.36.1-.1.21-.14.36-.14h4V6c0-.15.05-.27.14-.36.1-.1.21-.14.36-.14s.27.04.36.14c.1.1.14.21.14.36v4zm-.5 11c-1.45 0-2.8-.28-4.08-.83a10.66 10.66 0 0 1-5.6-5.59A10.16 10.16 0 0 1 0 10.5c0-1.45.28-2.8.83-4.08A10.66 10.66 0 0 1 6.42.82C7.69.29 9.05 0 10.5 0c1.45 0 2.8.28 4.08.83a10.66 10.66 0 0 1 5.6 5.59c.54 1.27.82 2.63.82 4.08 0 1.45-.28 2.8-.83 4.08a10.66 10.66 0 0 1-5.59 5.6c-1.27.54-2.63.82-4.08.82zm0-1a9.35 9.35 0 0 0 6.72-2.78A9.35 9.35 0 0 0 20 10.5a9.35 9.35 0 0 0-2.78-6.72A9.35 9.35 0 0 0 10.5 1a9.35 9.35 0 0 0-6.72 2.78A9.35 9.35 0 0 0 1 10.5a9.35 9.35 0 0 0 2.78 6.72A9.35 9.35 0 0 0 10.5 20z",
                    stroke: "none"
                  })
                );
              })),
            x =
              ((e.NewSmall = function (e) {
                var t = e.className,
                  r = e.width,
                  n = void 0 === r ? 14 : r;
                return h.createElement(
                  P,
                  (0, s._)((0, c._)({}, (0, L.Sh)(t, he.newSmall)), { fill: "none", width: n, viewBox: "0 0 14 14" }),
                  h.createElement("path", {
                    d: "M7 4.01v6m3-3H4m9 0a6 6 0 11-12 0 6 6 0 0112 0z",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                  })
                );
              }),
              (e.IdeasRecommended = function (e) {
                var t = e.className,
                  r = e.width,
                  n = void 0 === r ? 18 : r,
                  a = e.height,
                  l = void 0 === a ? 20 : a;
                return h.createElement(
                  P,
                  (0, s._)((0, c._)({}, (0, L.Sh)(t, he.ideasRecommended)), { fill: "none", width: n, height: l, viewBox: "0 0 18 20" }),
                  h.createElement("path", {
                    d: "M8.049.514a2 2 0 011.902 0L13.4 2.38l3.34 2.054a2 2 0 01.95 1.648L17.8 10l-.11 3.92a2 2 0 01-.95 1.647L13.4 17.62l-3.449 1.865a2 2 0 01-1.902 0L4.6 17.62l-3.34-2.054a2 2 0 01-.95-1.648L.2 10l.11-3.92a2 2 0 01.95-1.647L4.6 2.38 8.049.514z",
                    "data-figure": "bg"
                  }),
                  h.createElement("path", {
                    d: "M4.507 13.472l2.574-3.379 2 1.5L11.5 8.5",
                    "data-figure": "arrow",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                  }),
                  h.createElement("path", {
                    d: "M14 5.02l.034 4.768a.3.3 0 01-.481.242l-4.246-3.2a.3.3 0 01.1-.528L14 5.019z",
                    "data-figure": "arrow_spire"
                  })
                );
              }),
              (e.Dict = function (e) {
                var t = e.className,
                  r = e.width,
                  n = void 0 === r ? 17 : r;
                return h.createElement(
                  P,
                  { className: t, width: n, viewBox: "0 0 17 21" },
                  h.createElement("path", {
                    d: "M1.5 15.26c.53-.47 1.23-.76 2-.76h9V10c0-.28.22-.5.5-.5s.5.22.5.5v5c0 .28-.22.5-.5.5H3.5c-1.1 0-2 .9-2 2s.9 2 2 2H13c.28 0 .5.22.5.5s-.22.5-.5.5H3.5c-1.66 0-3-1.34-3-3V5.14c0-.9.66-1.64 1.5-1.64h5c.28 0 .5.22.5.5s-.22.5-.5.5H2c-.26 0-.5.27-.5.64v10.12zm11-11.76V1c0-.28.22-.5.5-.5s.5.22.5.5v2.5H16c.28 0 .5.22.5.5s-.22.5-.5.5h-2.5V7c0 .28-.22.5-.5.5s-.5-.22-.5-.5V4.5H10c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h2.5zM3.5 18c-.28 0-.5-.22-.5-.5s.22-.5.5-.5H12c.28 0 .5.22.5.5s-.22.5-.5.5H3.5z",
                    stroke: "none"
                  })
                );
              }),
              (e.Ignore = function (e) {
                var t = e.className,
                  r = e.width,
                  n = void 0 === r ? 18 : r;
                return h.createElement(
                  P,
                  { className: t, width: n, viewBox: "0 0 18 19" },
                  h.createElement("path", {
                    d: "M5 3.5v-1c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v1h4c.28 0 .5.22.5.5s-.22.5-.5.5h-1.53l-.8 11.2c-.12 1.58-1.42 2.8-3 2.8H6.33c-1.58 0-2.88-1.22-3-2.8l-.8-11.2H1C.72 4.5.5 4.28.5 4s.22-.5.5-.5h4zm-1.46 1l.8 11.14c.07 1.05.94 1.86 2 1.86h5.33c1.05 0 1.92-.8 2-1.86l.8-11.14H3.53zM6 2.5v1h6v-1c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1zM6.75 7c0-.28.22-.5.5-.5s.5.22.5.5v7.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5V7zm3.5 0c0-.28.22-.5.5-.5s.5.22.5.5v7.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5V7z",
                    stroke: "none"
                  })
                );
              }),
              (function (e) {
                (0, i._)(r, e);
                var t = (0, u._)(r);
                function r() {
                  var e;
                  return (0, a._)(this, r), (e = t.apply(this, arguments)), (0, o._)((0, n._)(e), "_idSuffix", void 0), e;
                }
                return (
                  (0, l._)(r, [
                    {
                      key: "render",
                      value: function () {
                        var e = this.props,
                          t = e.className,
                          n = e.width,
                          a = void 0 === n ? 16 : n;
                        return (
                          (this._idSuffix = Boolean(this._idSuffix) ? this._idSuffix : "megaphone_".concat(r._nextIdSuffix++)),
                          h.createElement(
                            P,
                            { className: t, width: a, viewBox: "0 0 20 20" },
                            h.createElement(
                              "g",
                              { stroke: "none" },
                              h.createElement("path", {
                                d: "M11.7797 14.3022C11.8035 15.2747 11.3069 16.2275 10.4041 16.74C9.50098 17.2518 8.42879 17.1893 7.60723 16.6709L6.49817 17.2993C7.31036 18.4503 9.43348 18.5122 10.9275 17.6637C12.4238 16.8153 13.4597 14.9609 12.8879 13.6731L11.7797 14.3022Z",
                                fill: "url(#paint0_linear_".concat(this._idSuffix, ")")
                              }),
                              h.createElement("path", {
                                d: "M1.05347 16.3869C1.05347 16.3869 -0.102468 17.1307 1.38347 18.6169C2.87034 20.1032 3.61253 18.9457 3.61253 18.9457L1.05347 16.3869Z",
                                fill: "url(#paint1_linear_".concat(this._idSuffix, ")")
                              }),
                              h.createElement("path", {
                                d: "M8.47503 1.60596L1.0569 16.335V16.336C0.530966 17.1469 2.85378 19.4728 3.66472 18.9431L18.3828 11.5322L8.47503 1.60596Z",
                                fill: "url(#paint2_linear_".concat(this._idSuffix, ")")
                              }),
                              h.createElement("path", {
                                d: "M19.0434 10.9432L18.6446 11.3416C17.6243 12.3616 14.5634 10.9513 11.8065 8.19379C9.04868 5.43567 7.63837 2.37442 8.65712 1.35535L9.0565 0.956604L19.0434 10.9432Z",
                                fill: "url(#paint3_linear_".concat(this._idSuffix, ")")
                              }),
                              h.createElement("path", {
                                d: "M15.8947 4.10531C18.6522 6.86281 20.0628 9.92437 19.0434 10.9431C18.024 11.9616 14.9625 10.5516 12.205 7.795C9.44716 5.03718 8.03716 1.975 9.05654 0.956558C10.0759 -0.062817 13.1359 1.34718 15.8947 4.10531Z",
                                fill: "url(#paint4_radial_".concat(this._idSuffix, ")")
                              }),
                              h.createElement("path", {
                                d: "M12.2012 7.78905C14.1547 9.74311 16.2622 11.0203 17.6856 11.2356C17.4628 9.81124 16.1897 7.71374 14.2422 5.76655C12.2872 3.81155 10.1812 2.53593 8.75623 2.32062C8.98029 3.74437 10.2534 5.84218 12.2012 7.78905Z",
                                fill: "url(#paint5_radial_".concat(this._idSuffix, ")")
                              }),
                              h.createElement(
                                "defs",
                                null,
                                h.createElement(
                                  "linearGradient",
                                  {
                                    id: "paint0_linear_".concat(this._idSuffix),
                                    x1: "10.9449",
                                    y1: "17.6538",
                                    x2: "9.67964",
                                    y2: "15.4623",
                                    gradientUnits: "userSpaceOnUse"
                                  },
                                  h.createElement("stop", { stopColor: "#FF2121" }),
                                  h.createElement("stop", { offset: "0.3304", stopColor: "#FC1F1F" }),
                                  h.createElement("stop", { offset: "0.5957", stopColor: "#F2181B" }),
                                  h.createElement("stop", { offset: "0.8377", stopColor: "#E10B13" }),
                                  h.createElement("stop", { offset: "1", stopColor: "#D1000B" })
                                ),
                                h.createElement(
                                  "linearGradient",
                                  {
                                    id: "paint1_linear_".concat(this._idSuffix),
                                    x1: "1.04497",
                                    y1: "16.3921",
                                    x2: "2.83903",
                                    y2: "19.4995",
                                    gradientUnits: "userSpaceOnUse"
                                  },
                                  h.createElement("stop", { stopColor: "#D9E0E4" }),
                                  h.createElement("stop", { offset: "0.2316", stopColor: "#D6DDE1" }),
                                  h.createElement("stop", { offset: "0.8311", stopColor: "#C2CACD" })
                                ),
                                h.createElement(
                                  "linearGradient",
                                  {
                                    id: "paint2_linear_".concat(this._idSuffix),
                                    x1: "3.91606",
                                    y1: "4.23768",
                                    x2: "10.6913",
                                    y2: "15.9728",
                                    gradientUnits: "userSpaceOnUse"
                                  },
                                  h.createElement("stop", { stopColor: "#FF2121" }),
                                  h.createElement("stop", { offset: "0.3304", stopColor: "#FC1F1F" }),
                                  h.createElement("stop", { offset: "0.5957", stopColor: "#F2181B" }),
                                  h.createElement("stop", { offset: "0.8377", stopColor: "#E10B13" }),
                                  h.createElement("stop", { offset: "1", stopColor: "#D1000B" })
                                ),
                                h.createElement(
                                  "linearGradient",
                                  {
                                    id: "paint3_linear_".concat(this._idSuffix),
                                    x1: "8.32606",
                                    y1: "6.31504",
                                    x2: "19.0435",
                                    y2: "6.31504",
                                    gradientUnits: "userSpaceOnUse"
                                  },
                                  h.createElement("stop", { stopColor: "#D9E0E4" }),
                                  h.createElement("stop", { offset: "0.2316", stopColor: "#D6DDE1" }),
                                  h.createElement("stop", { offset: "0.8311", stopColor: "#C2CACD" })
                                ),
                                h.createElement(
                                  "radialGradient",
                                  {
                                    id: "paint4_radial_".concat(this._idSuffix),
                                    cx: "0",
                                    cy: "0",
                                    r: "1",
                                    gradientUnits: "userSpaceOnUse",
                                    gradientTransform: "translate(14.05 5.94975) scale(5.31209 10.6762)"
                                  },
                                  h.createElement("stop", { stopColor: "#D9E0E4" }),
                                  h.createElement("stop", { offset: "0.3011", stopColor: "#D6DDE1" }),
                                  h.createElement("stop", { offset: "0.5285", stopColor: "#C2CACD" }),
                                  h.createElement("stop", { offset: "0.7526", stopColor: "#A2AAAD" }),
                                  h.createElement("stop", { offset: "1", stopColor: "#A2AAAD" })
                                ),
                                h.createElement(
                                  "radialGradient",
                                  {
                                    id: "paint5_radial_".concat(this._idSuffix),
                                    cx: "0",
                                    cy: "0",
                                    r: "1",
                                    gradientUnits: "userSpaceOnUse",
                                    gradientTransform: "translate(13.2208 6.77573) scale(4.45006 3.13017)"
                                  },
                                  h.createElement("stop", { stopColor: "#545061" }),
                                  h.createElement("stop", { offset: "0.2793", stopColor: "#464253" }),
                                  h.createElement("stop", { offset: "0.6105", stopColor: "#312D3D" }),
                                  h.createElement("stop", { offset: "0.7961", stopColor: "#211D2D" }),
                                  h.createElement("stop", { offset: "0.9556", stopColor: "#1A1626" })
                                )
                              )
                            )
                          )
                        );
                      }
                    }
                  ]),
                  r
                );
              })(h.Component));
          (0, o._)(x, "_nextIdSuffix", 0), (e.Megaphone = x);
          (e.Mute = function (e) {
            var t = e.className,
              r = e.width,
              n = void 0 === r ? 18 : r;
            return h.createElement(
              P,
              { className: t, width: n, viewBox: "0 0 16 16" },
              h.createElement("path", {
                d: "M13.0202 3.68689C13.2155 3.49162 13.2155 3.17504 13.0202 2.97978C12.825 2.78452 12.5084 2.78452 12.3131 2.97978L13.0202 3.68689ZM2.97978 12.3131C2.78452 12.5084 2.78452 12.825 2.97978 13.0202C3.17504 13.2155 3.49162 13.2155 3.68689 13.0202L2.97978 12.3131ZM12.3131 2.97978L2.97978 12.3131L3.68689 13.0202L13.0202 3.68689L12.3131 2.97978ZM8 15.5C12.1421 15.5 15.5 12.1421 15.5 8H14.5C14.5 11.5899 11.5899 14.5 8 14.5V15.5ZM15.5 8C15.5 3.85786 12.1421 0.5 8 0.5V1.5C11.5899 1.5 14.5 4.41015 14.5 8H15.5ZM8 0.5C3.85786 0.5 0.5 3.85786 0.5 8H1.5C1.5 4.41015 4.41015 1.5 8 1.5V0.5ZM0.5 8C0.5 12.1421 3.85786 15.5 8 15.5V14.5C4.41015 14.5 1.5 11.5899 1.5 8H0.5Z",
                stroke: "none"
              })
            );
          }),
            (e.Report = function (e) {
              var t = e.className,
                r = e.width,
                n = void 0 === r ? 15 : r;
              return h.createElement(
                P,
                { className: t, width: n, viewBox: "0 0 15 17" },
                h.createElement("path", {
                  d: "M1.03 2.57V9.8h12.19l-2.96-3c-.2-.2-.2-.5-.02-.7l3.08-3.53H1.06h-.03zm0-1.04h13.43c.43 0 .67.53.38.86l-3.5 4 3.48 3.56c.32.33.1.88-.37.88H1.05h-.02v5.65c0 .27-.23.5-.5.5-.3 0-.53-.23-.53-.5V.5C0 .24.23 0 .52 0c.28 0 .5.23.5.5v1.03z",
                  stroke: "none"
                })
              );
            }),
            (e.Expand = function (e) {
              var t = e.className,
                r = e.width,
                n = void 0 === r ? 18 : r;
              return h.createElement(
                P,
                { className: t, width: n, viewBox: "0 0 18 5" },
                h.createElement("path", {
                  d: "M2.5 4.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm0-1c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm6.5 1c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm0-1c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm6.5 1c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm0-1c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1z",
                  stroke: "none"
                })
              );
            }),
            (e.Reference = function (e) {
              var t = e.className,
                r = e.width,
                n = void 0 === r ? 13 : r;
              return h.createElement(
                P,
                { className: t, width: n, viewBox: "0 0 13 19" },
                h.createElement("path", {
                  d: "M3 2v1h7V2h1.5c.83 0 1.5.67 1.5 1.5v14c0 .83-.68 1.5-1.5 1.5h-10C.67 19 0 18.33 0 17.5v-14C0 2.67.68 2 1.5 2H3zm8.5 1h-10c-.27 0-.5.23-.5.5v14c0 .28.22.5.5.5h10c.27 0 .5-.23.5-.5v-14c0-.28-.22-.5-.5-.5zm-7.65 7.6l1.68 1.7 3.62-3.65c.2-.2.5-.2.7 0 .2.2.2.5 0 .7L5.53 13.7l-2.38-2.4c-.2-.2-.2-.5 0-.7.2-.2.5-.2.7 0zM9 3.5v-1c0-.56-.45-1-1-1H5c-.56 0-1 .44-1 1v1h5zm-6-1c0-1.1.9-2 2-2h3c1.1 0 2 .9 2 2V4c0 .28-.23.5-.5.5h-6c-.27 0-.5-.22-.5-.5V2.5z",
                  transform: "translate(0 -.5)",
                  stroke: "none"
                })
              );
            }),
            (e.Yes = function (e) {
              var t = e.className,
                r = e.width,
                n = void 0 === r ? 12 : r;
              return h.createElement(
                P,
                (0, s._)((0, c._)({}, (0, L.Sh)(t, he.yesIcon)), { width: n, viewBox: "0 0 12 10" }),
                h.createElement("path", {
                  d: "M.54 4.35l2.98 3.12L9.46.53",
                  fill: "none",
                  fillRule: "evenodd",
                  strokeLinecap: "round",
                  transform: "translate(1 1)"
                })
              );
            }),
            (e.YesCircle = function (e) {
              var t = e.className,
                r = e.width,
                n = void 0 === r ? 18 : r;
              return h.createElement(
                P,
                (0, s._)((0, c._)({}, (0, L.Sh)(t, he.yesCircleIcon)), { width: n, viewBox: "0 0 18 18" }),
                h.createElement("circle", { cx: "9", cy: "9", r: "8" }),
                h.createElement("polyline", { points: "5.5,10 8,12.5 13.5,7" })
              );
            }),
            (e.NoCircle = function (e) {
              var t = e.className,
                r = e.width,
                n = void 0 === r ? 18 : r;
              return h.createElement(
                P,
                (0, s._)((0, c._)({}, (0, L.Sh)(t, he.noCircleIcon)), { width: n, viewBox: "0 0 18 18" }),
                h.createElement("circle", { cx: "9", cy: "9", r: "8" }),
                h.createElement("polyline", { points: "5.5,9 12.5,9" })
              );
            }),
            (e.ValidationOk = function (e) {
              var t = e.className,
                r = e.width,
                n = void 0 === r ? 18 : r;
              return h.createElement(
                P,
                { className: t, width: n, viewBox: "0 0 18 18" },
                h.createElement("circle", { cx: "9", cy: "9", r: "8", fill: "#15C39A", stroke: "#15C39A", strokeWidth: "1" }),
                h.createElement("polyline", {
                  points: "5.5,10 8,12.5 13.5,7",
                  fill: "none",
                  stroke: "white",
                  strokeWidth: "1.5",
                  strokeLinecap: "round"
                })
              );
            }),
            (e.ValidationWarning = function (e) {
              var t = e.className,
                r = e.width,
                n = void 0 === r ? 18 : r;
              return h.createElement(
                P,
                { className: t, width: n, viewBox: "0 0 18 18" },
                h.createElement("circle", { cx: "9", cy: "9", r: "8", fill: "none", stroke: "#C6CBDE", strokeWidth: "2" })
              );
            }),
            (e.Controls = function (e) {
              var t = e.className,
                r = e.width,
                n = void 0 === r ? 20 : r;
              return h.createElement(
                P,
                { className: t, width: n, viewBox: "0 0 20 17" },
                h.createElement("path", {
                  d: "M10 2a.5.5 0 000 1V2zm9 1a.5.5 0 000-1v1zM1 2a.5.5 0 000 1V2zm0 6a.5.5 0 000 1V8zm9 1a.5.5 0 000-1v1zm9 0a.5.5 0 000-1v1zm-7 5a.5.5 0 000 1v-1zm7 1a.5.5 0 000-1v1zM1 14a.5.5 0 000 1v-1zm9-11h9V2h-9v1zM1 3h4V2H1v1zm0 6h9V8H1v1zm14 0h4V8h-4v1zm-3 6h7v-1h-7v1zM1 15h6v-1H1v1zM7.5 2.5a1 1 0 01-1 1v1a2 2 0 002-2h-1zm-1 1a1 1 0 01-1-1h-1a2 2 0 002 2v-1zm-1-1a1 1 0 011-1v-1a2 2 0 00-2 2h1zm1-1a1 1 0 011 1h1a2 2 0 00-2-2v1zm8 7a1 1 0 01-1 1v1a2 2 0 002-2h-1zm-1 1a1 1 0 01-1-1h-1a2 2 0 002 2v-1zm-1-1a1 1 0 011-1v-1a2 2 0 00-2 2h1zm1-1a1 1 0 011 1h1a2 2 0 00-2-2v1zm-4 7a1 1 0 01-1 1v1a2 2 0 002-2h-1zm-1 1a1 1 0 01-1-1h-1a2 2 0 002 2v-1zm-1-1a1 1 0 011-1v-1a2 2 0 00-2 2h1zm1-1a1 1 0 011 1h1a2 2 0 00-2-2v1z",
                  stroke: "none"
                })
              );
            }),
            (e.Checkmark = function (e) {
              var t = e.className,
                r = e.width,
                n = void 0 === r ? 32 : r;
              return h.createElement(
                P,
                { width: n, className: t, viewBox: "0 0 33 32" },
                h.createElement(
                  "defs",
                  null,
                  h.createElement("polyline", { id: "path", points: "7.35 14.35 11.9839764 19.5363636 27.65 3.5" })
                ),
                h.createElement(
                  "g",
                  { fill: "none", fillRule: "evenodd", transform: "translate(2, 2)" },
                  h.createElement("circle", { id: "Oval", stroke: "#F1F2FA", strokeWidth: "3", cx: "14", cy: "14", r: "14" }),
                  h.createElement("use", { stroke: "#15C39A", strokeWidth: "3", strokeLinecap: "round", xlinkHref: "#path" })
                )
              );
            }),
            (e.CheckmarkAnimated = function (e) {
              var t = e.className,
                r = e.width,
                n = void 0 === r ? 32 : r;
              return h.createElement(
                P,
                { width: n, className: t, viewBox: "0 0 33 32" },
                h.createElement(
                  "defs",
                  null,
                  h.createElement("polyline", { id: "path", points: "7.35 14.35 11.9839764 19.5363636 27.65 3.5" })
                ),
                h.createElement(
                  "g",
                  { fill: "none", fillRule: "evenodd", transform: "translate(2, 2)" },
                  h.createElement("circle", {
                    className: he.circle,
                    stroke: "#A6ADC9",
                    strokeWidth: "1.5",
                    cx: "14",
                    cy: "14",
                    r: "15",
                    transform: "rotate(-240, 14, 14) scale(-1,1) translate(-28, 0)"
                  }),
                  h.createElement("use", {
                    stroke: "#15C39A",
                    className: he.checkmark,
                    strokeWidth: "3",
                    strokeLinecap: "round",
                    xlinkHref: "#path"
                  })
                )
              );
            }),
            (e.CheckmarkOutcomes = function (e) {
              var t = e.width,
                r = void 0 === t ? 16 : t,
                n = (0, d._)(e, ["width"]);
              return h.createElement(
                P,
                (0, c._)({ viewBox: "0 0 16 16", width: r }, n),
                h.createElement("path", {
                  stroke: "none",
                  d: "M14.33083 3.1085L7.5 9.93935 5.03033 7.46967c-.2929-.2929-.76777-.2929-1.06066 0-.2929.2929-.2929.76777 0 1.06066L7.5 12.06066l7.65102-7.65102C15.69418 5.48934 16 6.70895 16 8c0 4.41828-3.58172 8-8 8s-8-3.58172-8-8 3.58172-8 8-8c2.576 0 4.86763 1.21752 6.33083 3.1085z"
                })
              );
            }),
            (e.Helpfull = function (e) {
              var t = e.className,
                r = e.width,
                n = void 0 === r ? 12 : r;
              return h.createElement(
                P,
                { className: t, width: n, viewBox: "0 0 10 12" },
                h.createElement("path", {
                  d: "M1.54 5.346L4.522 8.47l5.938-6.938",
                  strokeWidth: "1.5",
                  stroke: "#4C7AF1",
                  fill: "none",
                  fillRule: "evenodd",
                  strokeLinecap: "round"
                })
              );
            }),
            (e.Close = function (e) {
              var t = e.className,
                r = e.width,
                n = void 0 === r ? 11 : r;
              return h.createElement(g, (0, s._)((0, c._)({}, (0, L.Sh)(t, he.closeIcon)), { width: n }));
            });
          var g = (e.Cross = function (e) {
            var t = e.className,
              r = e.width,
              n = void 0 === r ? 11 : r;
            return h.createElement(
              P,
              (0, s._)((0, c._)({}, (0, L.Sh)(t)), { width: n, viewBox: "0 0 11 10" }),
              h.createElement("path", {
                d: "M1.1.5l7.06 7.07M8.16.5L1.1 7.57",
                fill: "none",
                fillRule: "evenodd",
                strokeLinecap: "round",
                transform: "translate(1 1)"
              })
            );
          });
          (e.QuestionMark = function (e) {
            var t = e.className,
              r = e.width,
              n = void 0 === r ? 16 : r;
            return h.createElement(
              P,
              (0, s._)((0, c._)({}, (0, L.Sh)(t)), { width: n, viewBox: "0 0 16 16" }),
              h.createElement("circle", { cx: "8", cy: "8", r: "7", fill: "none" }),
              h.createElement("path", {
                d: "M7.402 10.175H8.51v-.056c.018-1.145.314-1.643 1.126-2.151.813-.494 1.293-1.205 1.293-2.225 0-1.44-1.053-2.493-2.678-2.493-1.495 0-2.682.923-2.751 2.493h1.163c.07-1.09.831-1.533 1.588-1.533.868 0 1.57.573 1.57 1.478 0 .734-.42 1.26-.96 1.588-.905.549-1.445 1.084-1.459 2.843v.056zm.59 2.733a.833.833 0 00.832-.831.833.833 0 00-.831-.831.833.833 0 00-.831.83c0 .458.374.832.83.832z",
                stroke: "none"
              })
            );
          }),
            (e.More = function (e) {
              var t = e.className,
                r = e.width,
                n = void 0 === r ? 4 : r;
              return h.createElement(
                P,
                (0, s._)((0, c._)({}, (0, L.Sh)(t)), { width: n, viewBox: "0 0 4 16" }),
                h.createElement("path", {
                  d: "M2 12.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm0-6a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm0-6a1.5 1.5 0 110 3 1.5 1.5 0 010-3z",
                  fill: "none"
                })
              );
            }),
            (e.VoteYes = function () {
              var e,
                t,
                r,
                n = h.useContext(b.f.Context),
                a = null !== (e = n.disabled) && void 0 !== e ? e : y.of(!1),
                l = null !== (t = n.hovered) && void 0 !== t ? t : y.of(!1),
                o = null !== (r = n.active) && void 0 !== r ? r : y.of(!1);
              return h.createElement(
                T,
                { className: he.voteYes },
                h.createElement(
                  H.F.Fragment,
                  null,
                  k.aj([o, a, l]).pipe(
                    _.U(function (e) {
                      var t = (0, m._)(e, 3),
                        r = t[0],
                        n = t[1],
                        a = t[2];
                      return h.createElement(
                        "svg",
                        { width: "32", height: "32", viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                        h.createElement("path", {
                          fillRule: "evenodd",
                          clipRule: "evenodd",
                          d: "M16 24C20.4183 24 24 20.4183 24 16C24 11.5817 20.4183 8 16 8C11.5817 8 8 11.5817 8 16C8 20.4183 11.5817 24 16 24Z",
                          stroke: "#9FA6BF"
                        }),
                        h.createElement("path", {
                          d:
                            r || (!n && a)
                              ? "M13.0303 16.4697C12.7374 16.1768 12.2626 16.1768 11.9697 16.4697C11.6768 16.7626 11.6768 17.2374 11.9697 17.5303L13.0303 16.4697ZM15 19.5L14.4697 20.0303L15 20.5607L15.5303 20.0303L15 19.5ZM21.0303 14.5303C21.3232 14.2374 21.3232 13.7626 21.0303 13.4697C20.7374 13.1768 20.2626 13.1768 19.9697 13.4697L21.0303 14.5303ZM11.9697 17.5303L14.4697 20.0303L15.5303 18.9697L13.0303 16.4697L11.9697 17.5303ZM15.5303 20.0303L21.0303 14.5303L19.9697 13.4697L14.4697 18.9697L15.5303 20.0303Z"
                              : "M12.8536 16.6464C12.6583 16.4512 12.3417 16.4512 12.1464 16.6464C11.9512 16.8417 11.9512 17.1583 12.1464 17.3536L12.8536 16.6464ZM15 19.5L14.6464 19.8536L15 20.2071L15.3536 19.8536L15 19.5ZM20.8536 14.3536C21.0488 14.1583 21.0488 13.8417 20.8536 13.6464C20.6583 13.4512 20.3417 13.4512 20.1464 13.6464L20.8536 14.3536ZM12.1464 17.3536L14.6464 19.8536L15.3536 19.1464L12.8536 16.6464L12.1464 17.3536ZM15.3536 19.8536L20.8536 14.3536L20.1464 13.6464L14.6464 19.1464L15.3536 19.8536Z",
                          fill: "#9FA6BF"
                        })
                      );
                    })
                  )
                )
              );
            }),
            (e.VoteNo = function () {
              var e,
                t,
                r,
                n = h.useContext(b.f.Context),
                a = null !== (e = n.disabled) && void 0 !== e ? e : y.of(!1),
                l = null !== (t = n.hovered) && void 0 !== t ? t : y.of(!1),
                o = null !== (r = n.active) && void 0 !== r ? r : y.of(!1);
              return h.createElement(
                T,
                { className: he.voteNo },
                h.createElement(
                  H.F.Fragment,
                  null,
                  k.aj([o, a, l]).pipe(
                    _.U(function (e) {
                      var t = (0, m._)(e, 3),
                        r = t[0],
                        n = t[1],
                        a = t[2];
                      return h.createElement(
                        "svg",
                        { width: "32", height: "32", viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                        h.createElement("path", {
                          fillRule: "evenodd",
                          clipRule: "evenodd",
                          d: "M16 24C20.4183 24 24 20.4183 24 16C24 11.5817 20.4183 8 16 8C11.5817 8 8 11.5817 8 16C8 20.4183 11.5817 24 16 24Z",
                          stroke: "#9FA6BF"
                        }),
                        h.createElement("path", {
                          d: "M12.5 16H19.5",
                          stroke: "#9FA6BF",
                          strokeLinecap: "round",
                          strokeWidth: r || (!n && a) ? "1.5" : void 0
                        })
                      );
                    })
                  )
                )
              );
            }),
            (e.OpenFeedbackFormArrow = function () {
              return h.createElement(
                T,
                { className: he.openFeedbackFormArrow },
                h.createElement(
                  "svg",
                  { width: "32", height: "32", viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                  h.createElement("path", { d: "M13.5 10.5L19 16L13.5 21.5", stroke: "#6D758D", strokeLinecap: "round" })
                )
              );
            });
          !(function (e) {
            (e.Heart = function (e) {
              var t = e.className;
              return h.createElement(
                T,
                { className: t },
                h.createElement(
                  "svg",
                  { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                  h.createElement("path", {
                    d: "M7.99947 3.05348C5.87573 -0.570296 0 0.84483 0 5.39625C0 8.4491 2.71013 10.492 7.99947 15C13.2885 10.492 16 8.4491 16 5.39625C16 0.84483 10.1235 -0.570296 7.99947 3.05348Z",
                    fill: "#A963DA"
                  }),
                  h.createElement("path", {
                    d: "M7.24245 9.42687H8.64928V9.30067C8.65671 8.57684 8.91654 8.23905 9.50303 7.88641C10.1972 7.47439 10.65 6.92873 10.65 6.05642C10.65 4.75724 9.60325 4 8.12961 4C6.78217 4 5.68343 4.70527 5.65002 6.19005H7.1645C7.18677 5.585 7.63592 5.26206 8.12218 5.26206C8.6233 5.26206 9.0279 5.59614 9.0279 6.1121C9.0279 6.59837 8.67527 6.92131 8.2187 7.21084C7.59509 7.60431 7.24616 8.00149 7.24245 9.30067V9.42687ZM7.97371 11.8025C8.44884 11.8025 8.86086 11.4053 8.86458 10.9117C8.86086 10.4254 8.44884 10.0282 7.97371 10.0282C7.48373 10.0282 7.07913 10.4254 7.08284 10.9117C7.07913 11.4053 7.48373 11.8025 7.97371 11.8025Z",
                    fill: "white"
                  })
                )
              );
            }),
              (e.ExternalLink = function (e) {
                var t = e.className;
                return h.createElement(
                  T,
                  { className: t },
                  h.createElement(
                    "svg",
                    { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                    h.createElement("path", {
                      d: "M11 7.5H9.5C8.39543 7.5 7.5 8.39543 7.5 9.5V15.5C7.5 16.6046 8.39543 17.5 9.5 17.5H15.5C16.6046 17.5 17.5 16.6046 17.5 15.5V14M12.5 12.5L17.5 7.5M17.5 7.5H13.5M17.5 7.5V11.5",
                      stroke: "white",
                      strokeLinecap: "round"
                    })
                  )
                );
              });
          })(e.EthicalAI || (e.EthicalAI = {}));
          (e.Gear = function (e) {
            var t = e.className,
              r = e.width,
              n = void 0 === r ? 24 : r,
              a = e.enforceStroke;
            return h.createElement(
              P,
              (0, s._)((0, c._)({}, (0, L.Sh)(t)), { width: n, viewBox: "0 0 24 24" }),
              h.createElement(
                "path",
                (0, c._)(
                  {
                    d: "M23 14.325h-1.997c-1.436 0-1.99 1.409-.998 2.401l1.413 1.413a.5.5 0 0 1 0 .707l-2.577 2.576a.5.5 0 0 1-.707 0l-1.414-1.414c-1.003-1.002-2.401-.382-2.401.994V23a.5.5 0 0 1-.5.5h-3.645a.5.5 0 0 1-.5-.5v-2c0-1.23-1.544-1.851-2.397-.998L5.86 21.418a.5.5 0 0 1-.707 0L2.578 18.84a.5.5 0 0 1 0-.707l1.417-1.417c1.067-1.067.477-2.398-.993-2.398H1a.5.5 0 0 1-.5-.5v-3.645a.5.5 0 0 1 .5-.5h2.003c1.29 0 1.908-1.484.996-2.397L2.582 5.861a.5.5 0 0 1 0-.707L5.16 2.577a.5.5 0 0 1 .707 0l1.416 1.416c.824.821 2.4.152 2.4-.994V1a.5.5 0 0 1 .5-.5h3.643a.5.5 0 0 1 .5.5v2c0 1.228 1.512 1.884 2.4.995l1.414-1.413a.5.5 0 0 1 .707 0l2.576 2.577a.5.5 0 0 1 0 .707l-1.413 1.413c-.94.94-.343 2.402.995 2.402H23a.5.5 0 0 1 .5.5v3.644a.5.5 0 0 1-.5.5zm-.5-3.644h-1.496c-2.232 0-3.27-2.542-1.702-4.109l1.06-1.06-1.87-1.869-1.06 1.06c-1.526 1.526-4.107.405-4.107-1.703V1.5h-2.644V3c0 2.03-2.647 3.154-4.106 1.701L5.512 3.638l-1.869 1.87L4.706 6.57c1.543 1.544.476 4.104-1.703 4.104H1.5v2.645h1.502c2.345 0 3.408 2.396 1.7 4.105l-1.064 1.064 1.87 1.869 1.062-1.062c1.479-1.48 4.104-.422 4.104 1.705v1.5h2.645v-1.498c0-2.251 2.464-3.345 4.108-1.7l1.06 1.06 1.87-1.87-1.06-1.058c-1.614-1.615-.632-4.109 1.706-4.109H22.5v-2.644zM12 16.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm0-1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"
                  },
                  null != a && a ? { fill: "none" } : { stroke: "none" }
                )
              )
            );
          }),
            (e.Info = function (e) {
              var t = e.className,
                r = e.width,
                n = void 0 === r ? 13 : r;
              return h.createElement(
                P,
                { className: t, width: n, viewBox: "0 0 13 13" },
                h.createElement("path", {
                  d: "M6.5 12.5c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zm0-1c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0-7c-.4 0-.75-.34-.75-.75 0-.4.34-.75.75-.75.4 0 .75.34.75.75 0 .4-.34.75-.75.75zM6 6c0-.28.22-.5.5-.5s.5.22.5.5v3.5c0 .28-.22.5-.5.5S6 9.78 6 9.5V6z",
                  stroke: "none"
                })
              );
            }),
            (e.All = function (e) {
              var t = e.className,
                r = e.width,
                n = void 0 === r ? 25 : r;
              return h.createElement(
                P,
                { className: t, width: n, viewBox: "0 0 25 13" },
                h.createElement("path", {
                  d: "M1.35 6.37l4.82 4.82L16.44.92c.2-.2.5-.2.7 0 .2.2.2.5 0 .7L6.54 12.25c-.2.2-.52.2-.72 0L.65 7.08c-.2-.2-.2-.52 0-.7.2-.2.5-.2.7 0zM20 4.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h4.5c.28 0 .5.22.5.5s-.22.5-.5.5H20zm-3 3c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h4.5c.28 0 .5.22.5.5s-.22.5-.5.5H17zm-3 3c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h4.5c.28 0 .5.22.5.5s-.22.5-.5.5H14z",
                  fillRule: "nonzero"
                })
              );
            }),
            (e.SynonymLoader = function (e) {
              var t = e.className,
                r = e.width,
                n = void 0 === r ? 14 : r;
              return h.createElement(
                P,
                { className: t, width: n, viewBox: "0 0 14 14" },
                h.createElement("circle", {
                  cx: "7",
                  cy: "7",
                  r: "6",
                  stroke: "#A6ADC9",
                  strokeWidth: "1",
                  fill: "none",
                  fillRule: "evenodd",
                  strokeLinecap: "round",
                  strokeDasharray: "25,300",
                  strokeLinejoin: "round"
                })
              );
            }),
            (e.Undo = function (e) {
              var t = e.className,
                r = e.width,
                n = void 0 === r ? 18 : r,
                a = e.color,
                l = void 0 === a ? "#E4E6F2" : a;
              return h.createElement(
                P,
                { className: t, width: n, viewBox: "0 0 18 12" },
                h.createElement(
                  "g",
                  { fill: "none", stroke: l, strokeLinecap: "round" },
                  h.createElement("path", { d: "M4.85498.551514l-3.5 3.49659 3.49435 3.50341" }),
                  h.createElement("path", {
                    d: "M2.00033 4h11.07438c2.03911 0 3.692136 1.534823 3.692136 3.41954 0 1.888558-1.65961 3.419538-3.692137 3.419538h-2.921497"
                  })
                )
              );
            }),
            (e.OuterLink = function (e) {
              var t = e.className,
                r = e.width,
                n = void 0 === r ? 12 : r;
              return h.createElement(
                P,
                { className: t, width: n, viewBox: "0 0 12 11", fill: "none" },
                h.createElement("path", {
                  d: "M4.5 0.5H3C1.89543 0.5 1 1.39543 1 2.5V8.5C1 9.60457 1.89543 10.5 3 10.5H9C10.1046 10.5 11 9.60457 11 8.5V7M6 5.5L11 0.5M11 0.5H7M11 0.5V4.5",
                  strokeLinecap: "round"
                })
              );
            }),
            (e.NotificationError = function (e) {
              var t = e.className,
                r = e.width,
                n = void 0 === r ? 26 : r;
              return h.createElement(
                P,
                { className: t, width: n, viewBox: "0 0 26 26" },
                h.createElement(
                  "g",
                  { stroke: "none" },
                  h.createElement("path", {
                    fill: "#FF6C83",
                    d: "M18.943355.651473l6.405172 6.405173c.375073.375072.585786.88378.585786 1.414213v9.05828c0 .530432-.210713 1.03914-.585786 1.414213l-6.405172 6.405172c-.375073.375073-.88378.585786-1.414214.585786H8.47086c-.530434 0-1.039142-.210712-1.414215-.585785l-6.405172-6.40517C.2764 18.56828.065687 18.059575.065687 17.52914V8.47086c0-.530434.210713-1.039142.585786-1.414215L7.056646.651473C7.431718.2764 7.940426.065687 8.47086.065687h9.05828c.530434 0 1.039142.210713 1.414215.585786z"
                  }),
                  h.createElement(
                    "g",
                    { fill: "#FFF", transform: "translate(12 7)" },
                    h.createElement("rect", { width: "2", height: "7", rx: "1" }),
                    h.createElement("circle", { cx: "1", cy: "10.5", r: "1" })
                  )
                )
              );
            }),
            (e.NotificationWarning = function (e) {
              var t = e.className,
                r = e.width,
                n = void 0 === r ? 28 : r;
              return h.createElement(
                P,
                { className: t, width: n, viewBox: "0 0 28 25" },
                h.createElement(
                  "g",
                  { stroke: "none" },
                  h.createElement("path", {
                    fill: "#F6BC41",
                    d: "M15.738773 1.693563l11.3456 19.98132c.5454.96053.20887 2.181324-.75166 2.726722-.301054.170942-.641327.26081-.98753.26081h-22.6912c-1.10457 0-2-.89543-2-2 0-.346203.089867-.686476.26081-.98753l11.3456-19.981323c.545397-.96053 1.766192-1.29706 2.72672-.75166.31377.17816.5735.43789.75166.75166z"
                  }),
                  h.createElement(
                    "g",
                    { fill: "#FFF", transform: "translate(13 8)" },
                    h.createElement("rect", { width: "2", height: "7", rx: "1" }),
                    h.createElement("circle", { cx: "1", cy: "10.5", r: "1" })
                  )
                )
              );
            }),
            (e.NotificationInfo = function (e) {
              var t = e.className,
                r = e.width,
                n = void 0 === r ? 24 : r;
              return h.createElement(
                P,
                { className: t, width: n, viewBox: "0 0 24 24" },
                h.createElement(
                  "g",
                  { fill: "none", fillRule: "evenodd", stroke: "none" },
                  h.createElement("circle", { cx: "12", cy: "12", r: "11.5", fill: "#00CDA3" }),
                  h.createElement("path", {
                    stroke: "#FFF",
                    strokeWidth: "2",
                    d: "M7.54 12.81l3.343 3.5 6.657-7.78",
                    strokeLinecap: "round"
                  })
                )
              );
            }),
            (e.GreenOk = function (e) {
              var t = e.className,
                r = e.width,
                n = void 0 === r ? 32 : r;
              return h.createElement(
                P,
                { className: t, width: n, viewBox: "0 0 32 32" },
                h.createElement("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  stroke: "none",
                  d: "M32 16c0 8.8366-7.1634 16-16 16-8.83656 0-16-7.1634-16-16C0 7.16344 7.16344 0 16 0c5.152 0 9.7353 2.43504 12.6617 6.21701L15 19.8787l-4.9393-4.9394c-.58583-.5857-1.53557-.5857-2.12136 0-.58579.5858-.58579 1.5356 0 2.1214L15 24.1213 30.302 8.81927C31.3884 10.9787 32 13.4179 32 16z",
                  fill: "#15C39A"
                })
              );
            }),
            (e.OnboardingTriangle = function (e) {
              var t = e.className,
                r = e.width,
                n = void 0 === r ? 12 : r;
              return h.createElement(
                P,
                { className: t, width: n, viewBox: "0 0 12 14" },
                h.createElement("path", { d: "M6 4l10 12H-4", fill: "#5A5F76", fillRule: "evenodd", fillOpacity: ".97", stroke: "none" })
              );
            }),
            (e.Grammarly = function (e) {
              var t = e.className,
                r = e.width,
                n = void 0 === r ? "100%" : r,
                a = e.color,
                l = void 0 === a ? "#15C39A" : a;
              return h.createElement(
                P,
                (0, s._)((0, c._)({}, (0, L.Sh)(t, he.gIcon)), { width: n, viewBox: "0 0 24 24", dontScale: !0 }),
                h.createElement("circle", { stroke: "none", fill: l, cx: "12", cy: "12", r: "11" }),
                h.createElement(U, { transform: "scale(.8) translate(6.75 6.5)" })
              );
            }),
            (e.GrammarlyUkraine = function (e) {
              var t = e.className,
                r = e.width,
                n = void 0 === r ? "100%" : r;
              return h.createElement(
                P,
                (0, s._)((0, c._)({}, (0, L.Sh)(t, he.gIcon)), { width: n, viewBox: "0 0 24 24", dontScale: !0 }),
                h.createElement(Y, { transform: "scale(.8) translate(6.75 6.5)" })
              );
            }),
            (e.GrammarlyInverse = function (e) {
              var t = e.className,
                r = e.width,
                n = void 0 === r ? "100%" : r;
              return h.createElement(
                P,
                { className: t, width: n, viewBox: "0 0 64 64", dontScale: !0 },
                h.createElement("path", {
                  d: "M32 64a32 32 0 1 1 0-64 32 32 0 0 1 0 64zm6.3-27.66c-1.33 0-2.4 1.2-2.14 2.58.18 1.04 1.17 1.77 2.24 1.77h3.36l1.95-.26c-3.12 4.55-8.51 6.66-14.42 5.75-4.8-.76-8.95-4-10.69-8.56-3.95-10.33 3.6-20.19 13.4-20.19 5.13 0 9.6 3 12.18 6.6v.09a2.15 2.15 0 0 0 3.64-2.3h.02A18.84 18.84 0 0 0 30.7 13.2a18.95 18.95 0 0 0-17.46 17.7 18.7 18.7 0 0 0 18.79 19.79c5.64 0 10.69-2.47 14.15-6.45l-.42 2.29v2.05c0 1.07.73 2.06 1.77 2.24 1.38.26 2.58-.8 2.58-2.13V36.32H38.3v.02z",
                  fill: "#FFF",
                  stroke: "none"
                })
              );
            }),
            (e.Rank = function (e) {
              var t = e.className,
                r = e.width,
                n = void 0 === r ? 29 : r;
              return h.createElement(
                P,
                { className: t, width: n, viewBox: "0 0 29 28" },
                h.createElement(
                  "g",
                  { transform: "translate(1 -1)", fill: "none", fillRule: "evenodd" },
                  h.createElement("path", {
                    stroke: "#B0B9DB",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M1.73 21.53l8.02-9.18 7.65 4.6 8.02-8.42"
                  }),
                  h.createElement("path", {
                    d: "M24.73 13.35c0-.2.17-.38.38-.38.22 0 .4.17.4.38v14.42c0 .2-.18.38-.4.38-.2 0-.37-.17-.37-.38V13.35zm-8 8c0-.2.17-.38.38-.38.22 0 .4.17.4.38v7.1c0 .2-.18.38-.4.38-.2 0-.37-.17-.37-.38v-7.1zm-7-4c0-.2.17-.38.38-.38.22 0 .4.17.4.38v10.92c0 .22-.18.4-.4.4-.2 0-.37-.18-.37-.4V17.35zm-8 7.85c0-.2.17-.38.38-.38.22 0 .4.17.4.38v2.9c0 .2-.18.38-.4.38-.2 0-.37-.17-.37-.38v-2.9zm0-23.85c0-.2.17-.38.38-.38.22 0 .4.17.4.38v14.42c0 .2-.18.38-.4.38-.2 0-.37-.17-.37-.38V1.35zm8 0c0-.2.17-.38.38-.38.22 0 .4.17.4.38v7.1c0 .2-.18.38-.4.38-.2 0-.37-.17-.37-.38v-7.1zm7 0c0-.2.17-.38.38-.38.22 0 .4.17.4.38v10.92c0 .22-.18.4-.4.4-.2 0-.37-.18-.37-.4V1.35zm8 0c0-.2.17-.38.38-.38.22 0 .4.17.4.38v2.9c0 .2-.18.38-.4.38-.2 0-.37-.17-.37-.38v-2.9z",
                    fill: "#E4E6F2",
                    fillRule: "nonzero"
                  }),
                  h.createElement("circle", { stroke: "#BAC1DD", fill: "#FFF", cx: "2.11", cy: "21.14", r: "1.91" }),
                  h.createElement("circle", { stroke: "#BAC1DD", fill: "#FFF", cx: "9.75", cy: "12.73", r: "1.91" }),
                  h.createElement("circle", { stroke: "#BAC1DD", fill: "#FFF", cx: "17.4", cy: "16.56", r: "1.91" }),
                  h.createElement("circle", { stroke: "#BAC1DD", fill: "#FFF", cx: "24.85", cy: "8.91", r: "1.91" })
                )
              );
            }),
            (e.Paid = function (e) {
              var t = e.className,
                r = e.width,
                n = void 0 === r ? 22 : r;
              return h.createElement(
                P,
                { className: t, width: n, viewBox: "0 0 22 17" },
                h.createElement("path", {
                  d: "M10.28 8h-.05c-.12 0-.23.07-.3.16l-4.8 5.28c-.18.18-.17.5 0 .66l10.1 10.1c.17.16.5.16.67 0L26 14.1c.16-.17.17-.48 0-.66l-4.8-5.28c-.1-.1-.22-.16-.36-.16H10.28zm.2.96H13l-2.05 4.32H6.55l3.94-4.32zm3.57 0h3.02l2.06 4.32H12l2.05-4.32zm4.08 0h2.5l3.94 4.32H20.2l-2.07-4.32zm-11.5 5.28h4.3l3.2 7.5-7.5-7.5zm5.33 0h7.2l-3.6 8.38-3.6-8.38zm8.24 0h4.3l-7.5 7.5 3.2-7.5z",
                  transform: "translate(-5 -8)",
                  fillRule: "nonzero",
                  stroke: "none"
                })
              );
            }),
            (e.AssistantFeedback = function (e) {
              var t = e.className,
                r = e.width,
                n = void 0 === r ? 32 : r;
              return h.createElement(
                P,
                { className: t, width: n, viewBox: "0 0 32 32" },
                h.createElement("path", {
                  d: "M10.667 20.343h.5v-.5h-.5v.5Zm3.555 0v-.5h-.166l-.133.1.3.4ZM10.667 23h-.5v.998l.799-.598-.3-.4ZM22 9.5H10v1h12v-1ZM7.5 12v6.343h1V12h-1Zm17 6.343V12h-1v6.343h1Zm-14.5 2.5h.667v-1H10v1Zm4.222 0H22v-1h-7.778v1Zm-4.055-.5V23h1v-2.657h-1Zm.799 3.058 3.556-2.658-.6-.8-3.555 2.656.599.802ZM23.5 18.343a1.5 1.5 0 0 1-1.5 1.5v1a2.5 2.5 0 0 0 2.5-2.5h-1Zm-16 0a2.5 2.5 0 0 0 2.5 2.5v-1a1.5 1.5 0 0 1-1.5-1.5h-1ZM10 9.5A2.5 2.5 0 0 0 7.5 12h1a1.5 1.5 0 0 1 1.5-1.5v-1Zm12 1a1.5 1.5 0 0 1 1.5 1.5h1A2.5 2.5 0 0 0 22 9.5v1ZM11 14h10v-1H11v1Zm0 3h10v-1H11v1Z",
                  stroke: "none"
                })
              );
            }),
            (e.PaidSmall = function (e) {
              var t = e.className,
                r = e.width,
                n = void 0 === r ? 15 : r;
              return h.createElement(
                P,
                { className: t, width: n, viewBox: "0 0 14 11" },
                h.createElement("path", {
                  d: "M1 4.10345L3.52632 1H6.05263M1 4.10345L7 10M1 4.10345H4.47368M13 4.10345L10.4737 1H7.94737M13 4.10345L7 10M13 4.10345H9.21053M7 10L4.47368 4.10345M7 10L9.21053 4.10345M4.47368 4.10345H9.21053M4.47368 4.10345L6.05263 1M9.21053 4.10345L7.94737 1M7.94737 1H6.05263",
                  strokeLinecap: "round",
                  fill: "none",
                  strokeLinejoin: "round"
                })
              );
            }),
            (e.PaidLink = function (e) {
              var t = e.className,
                r = e.width,
                n = void 0 === r ? 20 : r;
              return h.createElement(
                P,
                (0, s._)((0, c._)({}, (0, L.Sh)(t, he.diamondIcon)), { width: n, viewBox: "0 0 20 16" }),
                h.createElement("path", {
                  d: "M4.92.88h-.04a.45.45 0 0 0-.28.14L.18 5.88a.46.46 0 0 0 .02.6l9.27 9.27c.16.17.46.17.62 0l9.27-9.27a.46.46 0 0 0 .02-.6l-4.42-4.86a.45.45 0 0 0-.32-.14H4.92zm.2.88h2.3l-1.9 3.97H1.5l3.62-3.97zm3.27 0h2.78l1.89 3.97H6.5l1.9-3.97zm3.76 0h2.3l3.6 3.97h-4.01l-1.9-3.97zM1.58 6.6h3.94l2.95 6.9-6.9-6.9zm4.9 0h6.6l-3.3 7.7-3.3-7.7zm7.56 0h3.94l-6.89 6.9 2.95-6.9z"
                })
              );
            });
          !(function (e) {
            (e.TitleDiamond = function (e) {
              var t = e.className;
              return h.createElement(
                T,
                { className: t },
                h.createElement(
                  "svg",
                  { width: "16", height: "24", viewBox: "0 0 16 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", stroke: "#0E101A" },
                  h.createElement("path", {
                    d: "M2 11.1034L4.52632 8H7.05263M2 11.1034L8 17M2 11.1034H5.47368M14 11.1034L11.4737 8H8.94737M14 11.1034L8 17M14 11.1034H10.2105M8 17L5.47368 11.1034M8 17L10.2105 11.1034M5.47368 11.1034H10.2105M5.47368 11.1034L7.05263 8M10.2105 11.1034L8.94737 8M8.94737 8H7.05263",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                  })
                )
              );
            }),
              (e.ButtonDiamond = function () {
                return h.createElement(
                  T,
                  null,
                  h.createElement(
                    "svg",
                    { width: "32", height: "32", viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                    h.createElement("path", {
                      d: "M7 14.5L10.7895 9.5H14.5789M7 14.5L16 24M7 14.5H12.2105M25 14.5L21.2105 9.5H17.4211M25 14.5L16 24M25 14.5H19.3158M16 24L12.2105 14.5M16 24L19.3158 14.5M12.2105 14.5H19.3158M12.2105 14.5L14.5789 9.5M19.3158 14.5L17.4211 9.5M17.4211 9.5H14.5789",
                      stroke: "white",
                      strokeLinecap: "round",
                      strokeLinejoin: "round"
                    })
                  )
                );
              });
          })(e.UpgradeHookPanel || (e.UpgradeHookPanel = {}));
          (e.CitationStyle = function (e) {
            var t = e.className,
              r = e.width,
              n = void 0 === r ? 8 : r;
            return h.createElement(
              P,
              { className: t, width: n, viewBox: "0 0 8 3" },
              h.createElement("path", { d: "M1 0l3 3 3-3", fill: "none", fillRule: "evenodd", strokeLinecap: "round" })
            );
          }),
            (e.Performance = function (e) {
              var t = e.className,
                r = e.width,
                n = void 0 === r ? 32 : r;
              return h.createElement(
                P,
                { className: t, width: n, viewBox: "0 0 32 32" },
                h.createElement(
                  "g",
                  { stroke: "#A6ADC9", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" },
                  h.createElement("path", { d: "M7 22l5-8.5 7 5.5 6-11" }),
                  h.createElement("circle", { fill: "#FFF", cx: "7", cy: "22", r: "2" }),
                  h.createElement("circle", { fill: "#FFF", cx: "12", cy: "13.5", r: "2" }),
                  h.createElement("circle", { fill: "#FFF", cx: "19", cy: "19", r: "2" }),
                  h.createElement("circle", { fill: "#FFF", cx: "25", cy: "8", r: "2" })
                )
              );
            }),
            (e.GoalsEmpty = function (e) {
              var t = e.className,
                r = e.width,
                n = void 0 === r ? 32 : r;
              return h.createElement(
                P,
                { className: t, width: n, viewBox: "0 0 32 32" },
                h.createElement(
                  "g",
                  { stroke: "#A6ADC9", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" },
                  h.createElement("circle", { cx: "16", cy: "16", r: "8" }),
                  h.createElement("path", { d: "M9 27l2-4m12 4l-2-4m-5-7l9-9V4m0 3h3" }),
                  h.createElement("circle", { cx: "16", cy: "16", r: "4" })
                )
              );
            }),
            (e.GoalsPartial = function (e) {
              var t = e.className,
                r = e.width,
                n = void 0 === r ? 32 : r,
                a = e.percentage,
                l = void 0 === a ? 0 : a;
              return h.createElement(
                P,
                { className: t, width: n, viewBox: "0 0 32 32" },
                h.createElement("circle", { stroke: "#F1F2FA", fill: "none", strokeWidth: "4", cx: "16", cy: "16", r: "7" }),
                h.createElement("circle", {
                  stroke: "#A6ADC9",
                  fill: "none",
                  transform: "rotate(-90 16 16)",
                  strokeDashoffset: (2 * Math.PI * 7 * (100 - l)) / 100,
                  strokeDasharray: "43.98 43.98",
                  strokeWidth: "4",
                  cx: "16",
                  cy: "16",
                  r: "7"
                })
              );
            }),
            (e.GoalsComplete = function (e) {
              var t = e.className,
                r = e.width,
                n = void 0 === r ? 32 : r;
              return h.createElement(
                P,
                { className: t, width: n, viewBox: "0 0 32 32" },
                h.createElement(
                  "g",
                  { fill: "none", fillRule: "evenodd" },
                  h.createElement("circle", { stroke: "#F1F2FA", strokeWidth: "4", cx: "16", cy: "16", r: "7" }),
                  h.createElement("circle", {
                    stroke: "#A6ADC9",
                    strokeWidth: "4",
                    transform: "matrix(1 0 0 -1 0 32)",
                    cx: "16",
                    cy: "16",
                    r: "7"
                  }),
                  h.createElement("path", {
                    d: "M9 27l2-4m12 4l-2-4m-5-7l9-9V4m0 3h3",
                    stroke: "#A6ADC9",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                  })
                )
              );
            }),
            (e.Align = function (e) {
              var t = e.className,
                r = e.width,
                n = void 0 === r ? 11 : r;
              return h.createElement(
                P,
                { className: t, width: n, viewBox: "0 0 11 15" },
                h.createElement("path", {
                  transform: "translate(-11.000000, -9.000000)",
                  strokeWidth: "1",
                  stroke: "none",
                  fillRule: "nonzero",
                  d: "M16,13.7426407 L13.3535534,16.3890873 C13.1582912,16.5843494 12.8417088,16.5843494 12.6464466,16.3890873 C12.4511845,16.1938252 12.4511845,15.8772427 12.6464466,15.6819805 L16.0533009,12.2751263 C16.1356181,12.1119288 16.3047379,12 16.5,12 C16.5059664,12 16.5119084,12.0001045 16.5178242,12.0003118 C16.6516221,11.9955992 16.7869515,12.0443108 16.8890873,12.1464466 L20.4802536,15.7376129 C20.6755158,15.9328751 20.6755158,16.2494576 20.4802536,16.4447197 C20.2849915,16.6399819 19.968409,16.6399819 19.7731468,16.4447197 L17,13.6715729 L17,23.5 C17,23.7761424 16.7761424,24 16.5,24 C16.2238576,24 16,23.7761424 16,23.5 L16,13.7426407 Z M11.5,10 C11.2238576,10 11,9.77614237 11,9.5 C11,9.22385763 11.2238576,9 11.5,9 L21.5,9 C21.7761424,9 22,9.22385763 22,9.5 C22,9.77614237 21.7761424,10 21.5,10 L11.5,10 Z"
                })
              );
            }),
            (e.ToolbarCreate = function (e) {
              var t = e.className,
                r = e.width,
                n = void 0 === r ? 20 : r;
              return h.createElement(
                P,
                (0, s._)((0, c._)({}, (0, L.Sh)(t, he.toolbarIcon)), { width: n, viewBox: "0 0 20 20" }),
                h.createElement(
                  "g",
                  { transform: "translate(1 1)", strokeWidth: "1" },
                  h.createElement("circle", { cx: "9", cy: "9", r: "9" }),
                  h.createElement("path", { d: "M9 3.375v11.25M3.375 9h11.25" })
                )
              );
            }),
            (e.ToolbarDownload = function (e) {
              var t = e.className,
                r = e.width,
                n = void 0 === r ? 20 : r;
              return h.createElement(
                P,
                (0, s._)((0, c._)({}, (0, L.Sh)(t, he.toolbarIcon)), { width: n, viewBox: "0 0 20 19" }),
                h.createElement("path", {
                  strokeWidth: "1",
                  d: "M10 .4886514v12.02026821M5 8.06180972l4.99384055 4.98770004 5.00615945-5M1 14.0773926v1.9329052c0 1.1045695.8954305 2 2 2h14c1.1045695 0 2-.8954305 2-2V14.006229"
                })
              );
            }),
            (e.SearchQuestion = function (e) {
              var t = e.className,
                r = e.width,
                n = void 0 === r ? 18 : r;
              return h.createElement(
                P,
                { className: t, width: n, viewBox: "0 0 18 17" },
                h.createElement(
                  "g",
                  {
                    transform: "translate(1 1)",
                    stroke: "#A6ADC9",
                    fill: "none",
                    fillRule: "evenodd",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                  },
                  h.createElement("path", { d: "M10.9 10.9l4.972 4.972" }),
                  h.createElement("circle", { cx: "6", cy: "6", r: "6" })
                )
              );
            }),
            (e.TriangleArrow = function (e) {
              var t = e.className,
                r = e.width,
                n = void 0 === r ? 10 : r;
              return h.createElement(
                P,
                { viewBox: "0 0 50 50", className: t, width: n },
                h.createElement("polygon", { points: "6,40 23,14 40,40" })
              );
            }),
            (e.HideAssistantStatic = function (e) {
              var t = e.className,
                r = e.width,
                n = void 0 === r ? 20 : r;
              return h.createElement(
                P,
                { viewBox: "0 0 42 26", className: t, width: n },
                h.createElement("path", { d: "M0 1h22M0 7h22M0 13h22M0 19h22M0 25h12", stroke: "#A5ACC8", strokeWidth: "2" }),
                h.createElement("path", {
                  d: "M41.02 2v22a1 1 0 0 1-1 1h-10a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1z",
                  stroke: "#A5ACC8",
                  fill: "none",
                  strokeWidth: "2"
                })
              );
            }),
            (e.WordCounter = function (e) {
              var t = e.className,
                r = e.width,
                n = void 0 === r ? 20 : r;
              return h.createElement(
                P,
                { viewBox: "0 0 19 17", className: t, width: n },
                h.createElement("path", {
                  d: "M7 16h2v-2.1308594c0-.2763672.2236328-.5.5-.5.2763672 0 .5.2236328.5.5V16h2v-2.9404297c0-.2763672.2236328-.5.5-.5.2763672 0 .5.2236328.5.5V16h2v-2.1308593c0-.2763672.2236328-.5.5-.5.2763672 0 .5.2236328.5.5V16h2v-6H1v6h2v-2.1308594c0-.2763672.2236328-.5.5-.5.2763672 0 .5.2236328.5.5V16h2v-2.9404297c0-.2763672.2236328-.5.5-.5.2763672 0 .5.2236328.5.5V16zm-7 .4914443V9.5085557C0 9.2274595.2236328 9 .5 9h18c.2763672 0 .5.2274595.5.5085557v6.9828886C19 16.7725405 18.7763672 17 18.5 17H.5c-.2763672 0-.5-.2274595-.5-.5085557zM9.5 0L13 5H6l3.5-5z",
                  fill: "#9FA6BF",
                  fillRule: "evenodd",
                  stroke: "none"
                })
              );
            });
          !(function (e) {
            (e.VerySatisfied = function (e) {
              var t = e.width,
                r = void 0 === t ? 24 : t;
              return h.createElement(
                P,
                { className: he.emote, viewBox: "0 0 24 24", width: r },
                h.createElement("path", {
                  d: "M7.75 9.84c-1.52 0-1.75 1.53-1.75.4 0-.96.47-2.8 1.75-2.8s1.75 1.84 1.75 2.8c0 1.13-.23-.4-1.75-.4zm8.5 0c-1.52 0-1.75 1.53-1.75.4 0-.96.47-2.8 1.75-2.8S18 9.28 18 10.24c0 1.13-.23-.4-1.75-.4zM12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zm0 2a12 12 0 1 1 0-24 12 12 0 0 1 0 24zm-6.29-8.42a1 1 0 1 1 1.63-1.16A5.71 5.71 0 0 0 12 16.88c1.86 0 3.57-.92 4.66-2.46a1 1 0 0 1 1.63 1.16 7.7 7.7 0 0 1-6.29 3.3 7.7 7.7 0 0 1-6.29-3.3z"
                })
              );
            }),
              (e.Satisfied = function (e) {
                var t = e.width,
                  r = void 0 === t ? 24 : t;
                return h.createElement(
                  P,
                  { className: he.emote, viewBox: "0 0 24 24", width: r },
                  h.createElement("path", {
                    d: "M7.75 12a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5zm8.5 0a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5zM12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zm0 2a12 12 0 1 1 0-24 12 12 0 0 1 0 24zm4.72-7.3A6.33 6.33 0 0 1 12 18.52c-1.93 0-3.53-.6-4.72-1.82a1 1 0 1 1 1.44-1.4c.79.81 1.86 1.22 3.28 1.22 1.42 0 2.5-.4 3.28-1.22a1 1 0 0 1 1.44 1.4z"
                  })
                );
              }),
              (e.Neutral = function (e) {
                var t = e.width,
                  r = void 0 === t ? 24 : t;
                return h.createElement(
                  P,
                  { className: he.emote, viewBox: "0 0 24 24", width: r },
                  h.createElement("path", {
                    d: "M7.75 12a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5zm8.5 0a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5zM12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zm0 2a12 12 0 1 1 0-24 12 12 0 0 1 0 24zm-3.5-7a1 1 0 1 1 0-2h7a1 1 0 1 1 0 2h-7z"
                  })
                );
              }),
              (e.Unsatisfied = function (e) {
                var t = e.width,
                  r = void 0 === t ? 24 : t;
                return h.createElement(
                  P,
                  { className: he.emote, viewBox: "0 0 24 24", width: r },
                  h.createElement("path", {
                    d: "M7.75 12a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5zm8.5 0a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5zM12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zm0 2a12 12 0 1 1 0-24 12 12 0 0 1 0 24zm4.47-8.14a1 1 0 1 1-.94 1.77A7.7 7.7 0 0 0 12 16.7c-1.21 0-2.44.35-3.54.93a1 1 0 0 1-.92-1.77A9.68 9.68 0 0 1 12 14.7c1.57 0 3.11.44 4.47 1.16z"
                  })
                );
              }),
              (e.VeryUnsatisfied = function (e) {
                var t = e.width,
                  r = void 0 === t ? 24 : t;
                return h.createElement(
                  P,
                  { className: he.emote, viewBox: "0 0 24 24", width: r },
                  h.createElement("path", {
                    d: "M17.44 16.56a1 1 0 1 1-1.76.94C14.8 15.85 13.45 15 12 15c-1.46 0-2.84.86-3.7 2.5a1 1 0 1 1-1.77-.92C7.73 14.28 9.78 13 12 13c2.2 0 4.22 1.27 5.44 3.56zM7.75 12a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5zm8.5 0a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5zM12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zm0 2a12 12 0 1 1 0-24 12 12 0 0 1 0 24z"
                  })
                );
              });
          })(e.Emote || (e.Emote = {})),
            (function (e) {
              (e.Head = function (e) {
                var t = e.className,
                  r = e.width,
                  n = void 0 === r ? 17 : r;
                return h.createElement(
                  P,
                  { className: t, width: n, viewBox: "0 0 17 16" },
                  h.createElement("path", {
                    d: "M15.406 9l-2.737 15H11.5l2.737-15H8V8h14v1h-6.594zm4.54 15h-1.17l1.46-8H17v-1h8v1h-3.594l-1.46 8z",
                    transform: "translate(-8 -8)",
                    stroke: "none"
                  })
                );
              }),
                (e.Bold = function (e) {
                  var t = e.className,
                    r = e.width,
                    n = void 0 === r ? 24 : r;
                  return h.createElement(
                    P,
                    { dontScale: !0, className: t, width: n, viewBox: "0 0 24 24" },
                    h.createElement("rect", { stroke: "none", fill: "none", width: "24", height: "24", rx: "4" }),
                    h.createElement("path", {
                      d: "M17 14.5c0 1.9329966-1.5670034 3.5-3.5 3.5H8V6h4.5C14.4329966 6 16 7.56700338 16 9.5c0 .7565678-.240051 1.4570687-.6481422 2.029492C16.3415826 12.1478064 17 13.2470124 17 14.5zM10 8v3h2.5c.8284271 0 1.5-.6715729 1.5-1.5 0-.82842712-.6715729-1.5-1.5-1.5H10zm0 5v3h3.5c.8284271 0 1.5-.6715729 1.5-1.5s-.6715729-1.5-1.5-1.5H10z",
                      stroke: "none"
                    })
                  );
                }),
                (e.Italic = function (e) {
                  var t = e.className,
                    r = e.width,
                    n = void 0 === r ? 24 : r;
                  return h.createElement(
                    P,
                    { dontScale: !0, className: t, width: n, viewBox: "0 0 24 24" },
                    h.createElement("rect", { stroke: "none", fill: "none", width: "24", height: "24", rx: "4" }),
                    h.createElement("path", {
                      d: "M10.5827118 17l1.8181818-10H10V6h6v1h-2.5827118l-1.8181818 10H14v1H8v-1h2.5827118z",
                      stroke: "none"
                    })
                  );
                }),
                (e.Underline = function (e) {
                  var t = e.className,
                    r = e.width,
                    n = void 0 === r ? 24 : r;
                  return h.createElement(
                    P,
                    { dontScale: !0, className: t, width: n, viewBox: "0 0 24 24" },
                    h.createElement("rect", { stroke: "none", fill: "none", width: "24", height: "24", rx: "4" }),
                    h.createElement("path", {
                      d: "M7.5 6h1v6.5c0 1.9329966 1.5670034 3.5 3.5 3.5s3.5-1.5670034 3.5-3.5V6h1v6.5c0 2.4852814-2.0147186 4.5-4.5 4.5-2.48528137 0-4.5-2.0147186-4.5-4.5V6zM6 20v-1h12v1H6z",
                      stroke: "none"
                    })
                  );
                }),
                (e.Header1 = function (e) {
                  var t = e.className,
                    r = e.width,
                    n = void 0 === r ? 24 : r;
                  return h.createElement(
                    P,
                    { dontScale: !0, className: t, width: n, viewBox: "0 0 24 24" },
                    h.createElement("rect", { stroke: "none", fill: "none", width: "24", height: "24", rx: "4" }),
                    h.createElement("path", {
                      d: "M6 11h5V6h1v12h-1v-6H6v6H5V6h1v5zm11.6477238-1.7272644V18h-1.0056809v-7.193175h-.0681817c-.1235794.2386362-.8394879.6477267-1.8409074.6477267v-.8863628c1.3465897 0 1.9730095-1.20596475 2.0284072-1.2954533h.8863628z",
                      stroke: "none"
                    })
                  );
                }),
                (e.Header2 = function (e) {
                  var t = e.className,
                    r = e.width,
                    n = void 0 === r ? 24 : r;
                  return h.createElement(
                    P,
                    { dontScale: !0, className: t, width: n, viewBox: "0 0 24 24" },
                    h.createElement("rect", { stroke: "none", fill: "none", width: "24", height: "24", rx: "4" }),
                    h.createElement("path", {
                      d: "M6 11h5V6h1v12h-1v-6H6v6H5V6h1v5zm7.9034082 7v-.7670447l2.8806791-3.1534061c1.0099422-1.1036921 1.4829531-1.7002825 1.4829531-2.5056794 0-.9204523-.7244311-1.4999986-1.6704529-1.4999986-1.0099422 0-1.6534075.6605107-1.6534075 1.6534075h-1.0056809c0-1.5340894 1.1633512-2.57386117 2.6931793-2.57386117 1.5340894 0 2.6249975 1.07386257 2.6249975 2.42045227 0 .9673286-.4431814 1.7173279-1.94318 3.3238604l-1.9602254 2.0965889v.0681818h4.0568143V18h-5.5056766z",
                      stroke: "none"
                    })
                  );
                }),
                (e.Link = function (e) {
                  var t = e.className,
                    r = e.width,
                    n = void 0 === r ? 24 : r;
                  return h.createElement(
                    P,
                    { dontScale: !0, className: t, width: n, viewBox: "0 0 24 24" },
                    h.createElement("rect", { stroke: "none", fill: "none", width: "24", height: "24", rx: "4" }),
                    h.createElement("path", {
                      d: "M10.79289322 15.5355339c.19526214-.19526214.51184462-.19526216.70710678 0 .19526216.19526217.19526214.51184464 0 .70710679l-1.06066017 1.06066017c-1.17157288 1.17157287-3.07106785 1.17157284-4.24264069 0s-1.17157287-3.07106781 0-4.24264069l2.47487374-2.47487373c.97631074-.97631075 2.55922315-.97631075 3.5355339 0 .19526216.19526216.19526216.51184462 0 .70710678-.19526216.19526216-.51184462.19526216-.70710678 0-.58578642-.58578642-1.53553392-.58578642-2.12132034 0l-2.47487374 2.47487373c-.78104858.78104859-.78104858 2.04737854 0 2.82842713.78104859.78104858 2.04737854.78104858 2.82842713 0l1.06066017-1.06066017zm1.41421356-7.0710678c-.19526216.19526216-.51184464.19526214-.70710678 0-.19526214-.19526215-.19526216-.51184462 0-.70710679l1.06066017-1.06066017c1.17157284-1.17157284 3.07106785-1.17157284 4.24264069 0s1.17157284 3.07106785 0 4.24264069l-2.47487374 2.47487373c-.97631074.97631075-2.55922315.97631075-3.5355339 0-.19526216-.19526216-.19526216-.51184462 0-.70710678.19526216-.19526216.51184462-.19526216.70710678 0 .58578642.58578642 1.53553392.58578642 2.12132034 0l2.47487374-2.47487373c.78104858-.78104859.78104858-2.04737854 0-2.82842713-.78104859-.78104858-2.04737854-.78104858-2.82842713 0L12.20710678 8.4644661z",
                      stroke: "none"
                    })
                  );
                }),
                (e.OrderedList = function (e) {
                  var t = e.className,
                    r = e.width,
                    n = void 0 === r ? 24 : r;
                  return h.createElement(
                    P,
                    { dontScale: !0, className: t, width: n, viewBox: "0 0 24 24" },
                    h.createElement("rect", { stroke: "none", fill: "none", width: "24", height: "24", rx: "4" }),
                    h.createElement("path", {
                      d: "M7.28569043 17H9v1H6v-.7643054c0-.2985079.13335599-.5814079.36361705-.7713733l1.45457443-1.2000239C7.933322 15.1693147 8 15.0278648 8 14.8786108V14.425c0-.234721-.19027898-.425-.425-.425H7.5c-.27614237 0-.5.2238576-.5.5v.5H6v-.5c0-.8284271.67157288-1.5 1.5-1.5h.075C8.36200577 13 9 13.6379942 9 14.425v.4536108c0 .4477619-.20003399.8721118-.54542557 1.1570599L7.28569043 17zM9 10v1H6v-1h1V7H6V6h2v4h1zm2.5-2c-.2761424 0-.5-.22385763-.5-.5 0-.27614237.2238576-.5.5-.5h7c.2761424 0 .5.22385763.5.5 0 .27614237-.2238576.5-.5.5h-7zm0 10c-.2761424 0-.5-.2238576-.5-.5s.2238576-.5.5-.5h7c.2761424 0 .5.2238576.5.5s-.2238576.5-.5.5h-7zm0-5c-.2761424 0-.5-.2238576-.5-.5s.2238576-.5.5-.5h7c.2761424 0 .5.2238576.5.5s-.2238576.5-.5.5h-7z",
                      stroke: "none"
                    })
                  );
                }),
                (e.BulletList = function (e) {
                  var t = e.className,
                    r = e.width,
                    n = void 0 === r ? 24 : r;
                  return h.createElement(
                    P,
                    { dontScale: !0, className: t, width: n, viewBox: "0 0 24 24" },
                    h.createElement("path", {
                      d: "M10.5 8c-.2761424 0-.5-.22385763-.5-.5 0-.27614237.2238576-.5.5-.5h7c.2761424 0 .5.22385763.5.5 0 .27614237-.2238576.5-.5.5h-7zm-4 5.5c-.55228475 0-1-.4477153-1-1s.44771525-1 1-1 1 .4477153 1 1-.44771525 1-1 1zm0 5c-.55228475 0-1-.4477153-1-1s.44771525-1 1-1 1 .4477153 1 1-.44771525 1-1 1zm0-10c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1 1 .44771525 1 1-.44771525 1-1 1zm4 9.5c-.2761424 0-.5-.2238576-.5-.5s.2238576-.5.5-.5h7c.2761424 0 .5.2238576.5.5s-.2238576.5-.5.5h-7zm0-5c-.2761424 0-.5-.2238576-.5-.5s.2238576-.5.5-.5h7c.2761424 0 .5.2238576.5.5s-.2238576.5-.5.5h-7z",
                      stroke: "none"
                    })
                  );
                }),
                (e.Clear = function (e) {
                  var t = e.className,
                    r = e.width,
                    n = void 0 === r ? 24 : r;
                  return h.createElement(
                    P,
                    { dontScale: !0, className: t, width: n, viewBox: "0 0 24 24" },
                    h.createElement("rect", { stroke: "none", fill: "none", width: "24", height: "24", rx: "4" }),
                    h.createElement("path", {
                      d: "M16.8328726 18L5.29441111 6h1.37271624L18.2055889 18h-1.3727163zm-5.7179705 0h-1.0214709l.953124-4.574995.8395651.8731477L11.1149021 18zm1.5097756-7.2469228l-.8395651-.87314768L12.3850979 7H9.01594957l-.96153846-1H18v1h-4.5934312l-.7818911 3.7530772z",
                      stroke: "none"
                    })
                  );
                }),
                (e.Image = function (e) {
                  var t = e.className,
                    r = e.width,
                    n = void 0 === r ? 24 : r;
                  return h.createElement(
                    P,
                    { dontScale: !0, className: t, viewBox: "0 0 24 24", width: n, height: "24", fill: "none" },
                    h.createElement("path", {
                      d: "M19 6.25001L4.99999 6.25009C4.44771 6.25009 4 6.69781 4 7.25009V16.7577C4 17.31 4.44772 17.7577 5 17.7577H19C19.5523 17.7577 20 17.31 20 16.7577V7.25001C20 6.69772 19.5523 6.25 19 6.25001Z",
                      stroke: "#6D758D"
                    }),
                    h.createElement("path", {
                      d: "M20 13.7501L15.5 9.25008L10.5 14.2501L8.675 12.6578L4 16.9078",
                      stroke: "#6D758D",
                      strokeLinecap: "round"
                    }),
                    h.createElement("path", {
                      d: "M7.8248 8.40776C8.52897 8.40776 9.0998 8.9786 9.0998 9.68276C9.0998 10.3869 8.52897 10.9578 7.8248 10.9578C7.12064 10.9578 6.5498 10.3869 6.5498 9.68276C6.5498 8.9786 7.12064 8.40776 7.8248 8.40776Z",
                      fill: "#6D758D"
                    })
                  );
                });
            })(e.Formatting || (e.Formatting = {}));
          (e.Ellipsis = function (e) {
            var t = e.className,
              r = e.width,
              n = void 0 === r ? 10 : r;
            return h.createElement(
              P,
              { className: t, width: n, viewBox: "-5 -1 10 2" },
              h.createElement("circle", { cx: "-4", cy: "0", r: "1", stroke: "none" }),
              h.createElement("circle", { cx: "0", cy: "0", r: "1", stroke: "none" }),
              h.createElement("circle", { cx: "4", cy: "0", r: "1", stroke: "none" })
            );
          }),
            (e.EllipsisSmall = function (e) {
              var t = e.className,
                r = e.width,
                n = void 0 === r ? 13 : r;
              return h.createElement(
                P,
                { className: t, width: n, viewBox: "-6.5 -1.5 13 3" },
                h.createElement("circle", { cx: "-5", cy: "0", r: "1.5", stroke: "none" }),
                h.createElement("circle", { cx: "0", cy: "0", r: "1.5", stroke: "none" }),
                h.createElement("circle", { cx: "5", cy: "0", r: "1.5", stroke: "none" })
              );
            });
          !(function (e) {
            (e.ExpandMenu = function (e) {
              var t = e.className,
                r = e.width,
                n = void 0 === r ? 23 : r;
              return h.createElement(
                P,
                { className: t, width: n, viewBox: "0 0 23 14" },
                h.createElement("path", {
                  d: "M23 6.5L20 9V4l3 2.5zM.85 1C.65 1 .5.78.5.5S.66 0 .85 0h13.3c.2 0 .35.22.35.5s-.16.5-.35.5H.85zm0 12c-.2 0-.35-.22-.35-.5s.16-.5.35-.5h13.3c.2 0 .35.22.35.5s-.16.5-.35.5H.85zm0-6C.65 7 .5 6.78.5 6.5S.66 6 .85 6h13.3c.2 0 .35.22.35.5s-.16.5-.35.5H.85z",
                  stroke: "none"
                })
              );
            }),
              (e.Collapse = function (e) {
                var t = e.className,
                  r = e.width,
                  n = void 0 === r ? 27 : r;
                return h.createElement(
                  P,
                  { className: t, width: n, viewBox: "0 0 27 15" },
                  h.createElement("path", {
                    d: "M26 1a.5.5 0 0 0 0-1H7a.5.5 0 1 0 0 1h19zM0 7.5L3 10V5L0 7.5zM26 15a.5.5 0 1 0 0-1H7a.5.5 0 1 0 0 1h19zm0-7a.5.5 0 1 0 0-1H7a.5.5 0 1 0 0 1h19z",
                    stroke: "none"
                  })
                );
              }),
              (e.NewDocument = w),
              (e.UploadFile = function (e) {
                var t = e.className,
                  r = e.width,
                  n = void 0 === r ? 21 : r;
                return h.createElement(
                  P,
                  { className: t, width: n, viewBox: "0 0 21 20" },
                  h.createElement("path", {
                    d: "M10 1.7v12.8l.1.3.4.2c.1 0 .3 0 .4-.2l.1-.3V1.7l4.2 4.1.3.2c.1 0 .3 0 .3-.2l.2-.3c0-.1 0-.3-.2-.3l-5-5a.5.5 0 0 0-.7 0l-5 5a.5.5 0 0 0 0 .6l.4.2c.1 0 .3 0 .3-.2L10 1.7zM0 15.6l.1-.4.4-.1.4.1.1.4v1.9c0 .4.1.8.4 1 .3.4.7.5 1.1.5h16c.4 0 .8-.1 1-.4.4-.3.5-.7.5-1.1v-2l.1-.4.4-.1.4.1.1.4v2c0 .7-.2 1.3-.7 1.8-.5.5-1.1.7-1.8.7h-16c-.7 0-1.3-.2-1.8-.7-.5-.5-.7-1.1-.7-1.8v-2z",
                    stroke: "none"
                  })
                );
              }),
              (e.UndoGrey = r),
              (e.Redo = function (e) {
                var t = e.className,
                  r = e.width,
                  n = void 0 === r ? 18 : r;
                return h.createElement(
                  P,
                  { className: t, width: n, viewBox: "0 0 18 12" },
                  h.createElement("path", {
                    d: "M5 0v1L2 4h11a4 4 0 0 1 0 8h-2a1 1 0 0 1 0-1h2a3 3 0 1 0 0-6H2l3 3v1L0 5l5-5z",
                    transform: "matrix(-1 0 0 1 17 0)",
                    stroke: "none"
                  })
                );
              }),
              (e.Cut = function (e) {
                var t = e.className,
                  r = e.width,
                  n = void 0 === r ? 19 : r;
                return h.createElement(
                  P,
                  { className: t, width: n, viewBox: "0 0 19 18" },
                  h.createElement("path", {
                    d: "M8.95 8.126L5.55.717a.5.5 0 0 1 .9-.434L9.5 6.927 12.55.283a.5.5 0 1 1 .9.434l-6.728 14.66a.507.507 0 0 1-.018.034 3.5 3.5 0 1 1 .092-2.592L8.95 8.126zM3.5 16.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm6.439-6.22l.55-1.199 1.715 3.738A3.501 3.501 0 0 1 19 14a3.5 3.5 0 0 1-6.704 1.411.507.507 0 0 1-.018-.034l-2.34-5.098zM15.5 16.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z",
                    stroke: "none"
                  })
                );
              }),
              (e.Paste = function (e) {
                var t = e.className,
                  r = e.width,
                  n = void 0 === r ? 18 : r;
                return h.createElement(
                  P,
                  { className: t, width: n, viewBox: "0 0 18 24" },
                  h.createElement("path", {
                    d: "M4.05 2A2.5 2.5 0 0 1 6.5 0h2c1.2 0 2.22.86 2.45 2h2.55c.83 0 1.5.67 1.5 1.5v2.55a.5.5 0 1 1-1 0V3.5a.5.5 0 0 0-.5-.5H11v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3H1.5c-.28 0-.5.2-.5.45v16.1c0 .24.22.45.5.45H3a.5.5 0 1 1 0 1H1.5C.68 21 0 20.36 0 19.55V3.45C0 2.65.68 2 1.5 2h2.55zm5.95.57a.5.5 0 0 1 0-.13A1.5 1.5 0 0 0 8.5 1h-2C5.67 1 5 1.67 5 2.5V4h5V2.57zM6 9.5v13c0 .28.22.5.5.5h10a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5h-10a.5.5 0 0 0-.5.5zM16.5 8c.83 0 1.5.67 1.5 1.5v13c0 .83-.67 1.5-1.5 1.5h-10A1.5 1.5 0 0 1 5 22.5v-13C5 8.67 5.67 8 6.5 8h10zm-8 4a.5.5 0 1 1 0-1h6a.5.5 0 1 1 0 1h-6zm0 3a.5.5 0 1 1 0-1h6a.5.5 0 1 1 0 1h-6zm0 3a.5.5 0 1 1 0-1h6a.5.5 0 1 1 0 1h-6zm0 3a.5.5 0 1 1 0-1h3a.5.5 0 1 1 0 1h-3z",
                    stroke: "none"
                  })
                );
              }),
              (e.PrintFile = function (e) {
                var t = e.className,
                  r = e.width,
                  n = void 0 === r ? 20 : r;
                return h.createElement(
                  P,
                  { className: t, width: n, viewBox: "0 0 20 19" },
                  h.createElement("path", {
                    d: "M4 .5c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5V5h3.5c.28 0 .5.22.5.5v9a.5.5 0 0 1-.5.5H16v3.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V15H.5a.5.5 0 0 1-.5-.5v-9c0-.28.22-.5.5-.5H4V.5zM5 5h10V1H5v4zm-1 9V9.5c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5V14h3V6H1v8h3zm11-4H5v8h10v-8zm-8.5 2.5c0-.28.22-.5.5-.5h6a.5.5 0 0 1 0 1H7a.5.5 0 0 1-.5-.5zm0 3c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1H7a.5.5 0 0 1-.5-.5z",
                    stroke: "none"
                  })
                );
              }),
              (e.FreeLabel = function (e) {
                var t = e.className,
                  r = e.width,
                  n = void 0 === r ? 32 : r;
                return h.createElement(
                  P,
                  { className: t, width: n, viewBox: "0 0 32 13" },
                  h.createElement("rect", { fill: "#4A6EE0", width: "32", height: "13", rx: "2", stroke: "none" }),
                  h.createElement(
                    "text",
                    {
                      fontFamily: "Helvetica",
                      fontSize: "10",
                      fontWeight: "bold",
                      letterSpacing: "0.4761905",
                      fill: "#FFFFFF",
                      fontStyle: "normal",
                      stroke: "none"
                    },
                    h.createElement("tspan", { x: "2.21265806", y: "10" }, "FREE")
                  )
                );
              }),
              (e.PremiumLabel = function (e) {
                var t = e.className,
                  r = e.width,
                  n = void 0 === r ? 54 : r;
                return h.createElement(
                  P,
                  { className: t, width: n, viewBox: "0 0 54 13" },
                  h.createElement("rect", { fill: "#FAB712", width: "54", height: "13", rx: "2", stroke: "none" }),
                  h.createElement(
                    "text",
                    {
                      fontFamily: "Helvetica",
                      fontSize: "10",
                      fontWeight: "bold",
                      letterSpacing: "0.4761905",
                      fill: "#FFFFFF",
                      fontStyle: "normal",
                      stroke: "none"
                    },
                    h.createElement("tspan", { x: "2.21265806", y: "10" }, "PREMIUM")
                  )
                );
              }),
              (e.BusinessLabel = function (e) {
                var t = e.className,
                  r = e.width,
                  n = void 0 === r ? 59 : r;
                return h.createElement(
                  P,
                  { className: t, width: n, viewBox: "0 0 59 13" },
                  h.createElement("rect", { fill: "#15C39A", width: "59", height: "13", rx: "2", stroke: "none" }),
                  h.createElement(
                    "text",
                    {
                      fontFamily: "Helvetica",
                      fontSize: "10",
                      fontWeight: "bold",
                      letterSpacing: "0.4761905",
                      fill: "#FFFFFF",
                      fontStyle: "normal",
                      stroke: "none"
                    },
                    h.createElement("tspan", { x: "2.21265806", y: "10" }, "BUSINESS")
                  )
                );
              }),
              (e.AustralianFlag = function (e) {
                var t = e.className,
                  r = e.width,
                  n = void 0 === r ? 24 : r;
                return h.createElement(P, { className: t, width: n, viewBox: "0 0 24 24" }, h.createElement(v, null));
              }),
              (e.CanadianFlag = function (e) {
                var t = e.className,
                  r = e.width,
                  n = void 0 === r ? 24 : r;
                return h.createElement(P, { className: t, width: n, viewBox: "0 0 24 24" }, h.createElement(f, null));
              }),
              (e.GBFlag = function (e) {
                var t = e.className,
                  r = e.width,
                  n = void 0 === r ? 24 : r;
                return h.createElement(P, { className: t, width: n, viewBox: "0 0 24 24" }, h.createElement(p, null));
              }),
              (e.USFlag = function (e) {
                var t = e.className,
                  r = e.width,
                  n = void 0 === r ? 24 : r;
                return h.createElement(P, { className: t, width: n, viewBox: "0 0 24 24" }, h.createElement(C, null));
              }),
              (e.IndianFlag = function (e) {
                var t = e.className,
                  r = e.width,
                  n = void 0 === r ? 24 : r;
                return h.createElement(P, { className: t, width: n, viewBox: "0 0 24 24" }, h.createElement(E, null));
              }),
              (e.Home = function (e) {
                var t = e.className,
                  r = e.width,
                  n = void 0 === r ? 18 : r;
                return h.createElement(
                  P,
                  { className: t, width: n, viewBox: "0 0 18 19" },
                  h.createElement("path", {
                    d: "M1 7.97V18.5a.5.5 0 1 1-1 0V7.74a.5.5 0 0 1 .18-.38L8.68.12a.5.5 0 0 1 .64 0l8.5 7.24c.12.1.18.23.18.38V18.5a.5.5 0 1 1-1 0V7.97L9 1.16l-8 6.8zM7 18.5a.5.5 0 1 1-1 0V13a3 3 0 0 1 6 0v5.5a.5.5 0 1 1-1 0V13a2 2 0 1 0-4 0v5.5z",
                    stroke: "none"
                  })
                );
              }),
              (e.Selected = function (e) {
                var t = e.className,
                  r = e.width,
                  n = void 0 === r ? 14 : r;
                return h.createElement(
                  P,
                  { className: t, width: n, viewBox: "0 0 14 12" },
                  h.createElement("path", {
                    d: "M4.47 9.72l8.6-9.56a.4.4 0 0 1 .32-.16c.14 0 .26.04.36.13.1.1.16.22.17.35a.5.5 0 0 1-.1.36L4.5 11.16.16 6.66A.5.5 0 0 1 0 6.3a.4.4 0 0 1 .16-.33.5.5 0 0 1 .71 0l3.6 3.75z",
                    stroke: "none",
                    fill: "#4A6EE0"
                  })
                );
              });
          })(e.DocumentSettings || (e.DocumentSettings = {}));
          (e.VotedUp = function (e) {
            var t = e.className,
              r = e.width,
              n = void 0 === r ? 14 : r;
            return h.createElement(
              P,
              { className: t, width: n, viewBox: "0 0 14 12" },
              h.createElement("path", {
                d: "M18.38,7 L19.17,7.79 C19.37,8 19.5,8.28 19.5,8.59 L19.5,8.59 L19.48,8.82 L18.82,12 L23,12 C23.55,12 24,12.45 24,13 L24,13 L24,14.25 C24,14.44 23.96,14.63 23.89,14.8 L23.89,14.8 L21.63,19.09 C21.4,19.62 20.87,20 20.25,20 L20.25,20 L14.5,20 C13.67,20 13,19.33 13,18.5 L13,18.5 L13,13 C13,12.59 13.17,12.21 13.44,11.94 L13.44,11.94 L18.38,7 Z M11,12 C11.5522847,12 12,12.4477153 12,13 L12,19 C12,19.5522847 11.5522847,20 11,20 L10,20 C9.44771525,20 9,19.5522847 9,19 L9,13 C9,12.4477153 9.44771525,12 10,12 L11,12 Z",
                stroke: "none",
                transform: "translate(-9, -7)"
              })
            );
          }),
            (e.VotedDown = function (e) {
              var t = e.className,
                r = e.width,
                n = void 0 === r ? 16 : r;
              return h.createElement(
                P,
                { className: t, width: n, viewBox: "0 0 16 13" },
                h.createElement("path", {
                  d: "M18.38,7 L19.17,7.79 C19.37,8 19.5,8.28 19.5,8.59 L19.5,8.59 L19.48,8.82 L18.82,12 L23,12 C23.55,12 24,12.45 24,13 L24,13 L24,14.25 C24,14.44 23.96,14.63 23.89,14.8 L23.89,14.8 L21.63,19.09 C21.4,19.62 20.87,20 20.25,20 L20.25,20 L14.5,20 C13.67,20 13,19.33 13,18.5 L13,18.5 L13,13 C13,12.59 13.17,12.21 13.44,11.94 L13.44,11.94 L18.38,7 Z M11,12 C11.5522847,12 12,12.4477153 12,13 L12,19 C12,19.5522847 11.5522847,20 11,20 L10,20 C9.44771525,20 9,19.5522847 9,19 L9,13 C9,12.4477153 9.44771525,12 10,12 L11,12 Z",
                  stroke: "none",
                  transform: "translate(23, 20) scale(-1, -1)"
                })
              );
            }),
            (e.NoTone = function (e) {
              var t = e.className,
                r = e.width,
                n = void 0 === r ? 19 : r;
              return h.createElement(
                P,
                { className: t, width: n, viewBox: "0 0 19 18" },
                h.createElement(
                  "g",
                  { transform: "translate(2 2)", stroke: "#9FA6BF", fill: "none" },
                  h.createElement("circle", { cx: "7.5", cy: "7.5", r: "7.5" }),
                  h.createElement("circle", { fill: "#D8D8D8", cx: "4.5", cy: "5.5", r: "1" }),
                  h.createElement("circle", { fill: "#D8D8D8", cx: "10.5", cy: "5.5", r: "1" }),
                  h.createElement("path", { d: "M3.5 10.5l.571-.5A2.603 2.603 0 0 1 7.5 10a2.603 2.603 0 0 0 3.429 0l.571-.5" })
                )
              );
            }),
            (e.ClarityOutcome = function (e) {
              var t = e.className,
                r = e.width,
                n = void 0 === r ? 20 : r;
              return h.createElement(
                P,
                (0, s._)((0, c._)({}, (0, L.Sh)(t, he.noStrokeIcon)), { width: n, viewBox: "0 0 20 20", dontScale: !0 }),
                h.createElement("path", {
                  fill: "#B3D1FF",
                  fillRule: "evenodd",
                  d: "M10.1 15.9c3.3 0 6-2.7 6-6s-2.7-6-6-6-6 2.7-6 6 2.7 6 6 6z",
                  clipRule: "evenodd",
                  opacity: "0.6"
                }),
                h.createElement("path", {
                  fill: "#548AFF",
                  d: "M16.1 9.9c0 3.3-2.7 6-6 6s-6-2.7-6-6c0-.6.1-1.2.3-1.8 1.7-.8 3.9-.5 5.2 1l.1.1c1.5 1.8 4.2 2 6 .5l.4-.4v.6z"
                })
              );
            }),
            (e.PlagiarismOutcome = function (e) {
              var t = e.className,
                r = e.width,
                n = void 0 === r ? 20 : r;
              return h.createElement(
                P,
                (0, s._)((0, c._)({}, (0, L.Sh)(t, he.noStrokeIcon)), { width: n, viewBox: "0 0 20 20", dontScale: !0 }),
                h.createElement("path", {
                  fill: "#5CDAE6",
                  d: "M7.8 9.1c0-.8.7-1.5 1.5-1.5h5.2c.8 0 1.5.7 1.5 1.5v5.2c0 .8-.7 1.5-1.5 1.5H9.3c-.8 0-1.5-.7-1.5-1.5V9.1z"
                }),
                h.createElement("path", {
                  fill: "#99F7FF",
                  d: "M4.1 5.4c0-.8.7-1.5 1.5-1.5h5.2c.8 0 1.5.7 1.5 1.5v5.2c0 .8-.7 1.5-1.5 1.5H5.6c-.8 0-1.5-.7-1.5-1.5V5.4z"
                }),
                h.createElement("path", {
                  fill: "#79E8F2",
                  fillRule: "evenodd",
                  d: "M12.3 7.6v3c0 .8-.7 1.5-1.5 1.5h-3v-3c0-.8.7-1.5 1.5-1.5h3z",
                  clipRule: "evenodd"
                })
              );
            }),
            (e.DeliveryOutcome = function (e) {
              var t = e.className,
                r = e.width,
                n = void 0 === r ? 20 : r;
              return h.createElement(
                P,
                (0, s._)((0, c._)({}, (0, L.Sh)(t, he.noStrokeIcon)), { width: n, viewBox: "0 0 20 20", dontScale: !0 }),
                h.createElement("path", {
                  fill: "#E8C7FF",
                  fillRule: "evenodd",
                  d: "M10.1 15.9c3.3 0 6-2.7 6-6s-2.7-6-6-6-6 2.7-6 6 2.7 6 6 6z",
                  clipRule: "evenodd"
                }),
                h.createElement("path", {
                  fill: "#D29CFA",
                  fillRule: "evenodd",
                  d: "M10.1 15.9c2.5 0 4.5-2 4.5-4.5s-2-4.5-4.5-4.5-4.5 2-4.5 4.5 2 4.5 4.5 4.5z",
                  clipRule: "evenodd"
                }),
                h.createElement("path", {
                  fill: "#BC78ED",
                  fillRule: "evenodd",
                  d: "M10.1 15.9c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3 1.3 3 3 3z",
                  clipRule: "evenodd"
                })
              );
            }),
            (e.EngagementOutcome = function (e) {
              var t = e.className,
                r = e.width,
                n = void 0 === r ? 20 : r;
              return h.createElement(
                P,
                (0, s._)((0, c._)({}, (0, L.Sh)(t, he.noStrokeIcon)), { width: n, viewBox: "0 0 20 20", dontScale: !0 }),
                h.createElement("path", {
                  fill: "#B9F9EA",
                  fillRule: "evenodd",
                  d: "M10.1 15.9c3.3 0 6-2.7 6-6s-2.7-6-6-6-6 2.7-6 6 2.7 6 6 6z",
                  clipRule: "evenodd"
                }),
                h.createElement("path", {
                  fill: "#0FDCAC",
                  fillRule: "evenodd",
                  d: "M10.1 11.4c2.1 0 3.8-1.7 3.8-3.7s-1.7-3.8-3.8-3.8-3.7 1.7-3.7 3.7 1.6 3.8 3.7 3.8zm0 4.5c2.1 0 3.8-1.7 3.8-3.8s-1.7-3.8-3.8-3.8-3.8 1.7-3.8 3.8 1.7 3.8 3.8 3.8z",
                  clipRule: "evenodd"
                }),
                h.createElement("path", {
                  fill: "#C0F9EC",
                  fillRule: "evenodd",
                  d: "M13.1 9.9c-.7.9-1.8 1.5-3 1.5s-2.3-.6-3-1.5c.7-.9 1.8-1.5 3-1.5s2.3.6 3 1.5z",
                  clipRule: "evenodd"
                })
              );
            }),
            (e.Sparkles = function (e) {
              var t = e.className,
                r = e.width,
                n = void 0 === r ? 32 : r;
              return h.createElement(
                P,
                (0, s._)((0, c._)({}, (0, L.Sh)(t, he.noStrokeIcon)), { width: n, viewBox: "0 0 32 32" }),
                h.createElement("path", {
                  fill: "url(#sparkles_paint0_linear)",
                  d: "M11.5 2C10.6 12.11 8.75 13.93 1 15c7.75 1.07 9.6 2.89 10.5 13 .9-10.11 2.75-11.93 10.5-13-7.75-1.07-9.6-2.89-10.5-13z"
                }),
                h.createElement("path", {
                  fill: "url(#sparkles_paint1_linear)",
                  d: "M25 1c-.52 5.06-1.57 5.97-6 6.5 4.43.53 5.48 1.44 6 6.5.52-5.06 1.57-5.97 6-6.5-4.43-.53-5.48-1.44-6-6.5z"
                }),
                h.createElement("path", {
                  fill: "url(#sparkles_paint2_linear)",
                  d: "M22 18c-.52 5.06-1.57 5.97-6 6.5 4.43.53 5.48 1.44 6 6.5.52-5.06 1.57-5.97 6-6.5-4.43-.53-5.48-1.44-6-6.5z"
                }),
                h.createElement(
                  "defs",
                  null,
                  h.createElement(
                    "linearGradient",
                    { id: "sparkles_paint0_linear", x1: "11.5", x2: "11.5", y1: "27.99", y2: "1.99", gradientUnits: "userSpaceOnUse" },
                    h.createElement("stop", { stopColor: "#F90" }),
                    h.createElement("stop", { offset: ".02", stopColor: "#FF9C03" }),
                    h.createElement("stop", { offset: ".27", stopColor: "#FFB91D" }),
                    h.createElement("stop", { offset: ".52", stopColor: "#FFCE31" }),
                    h.createElement("stop", { offset: ".77", stopColor: "#FFDB3C" }),
                    h.createElement("stop", { offset: "1", stopColor: "#FFDF40" })
                  ),
                  h.createElement(
                    "linearGradient",
                    { id: "sparkles_paint1_linear", x1: "25", x2: "25", y1: "14", y2: "1", gradientUnits: "userSpaceOnUse" },
                    h.createElement("stop", { stopColor: "#6FAD00" }),
                    h.createElement("stop", { offset: ".04", stopColor: "#73B202" }),
                    h.createElement("stop", { offset: ".26", stopColor: "#87CC0F" }),
                    h.createElement("stop", { offset: ".49", stopColor: "#96DE17" }),
                    h.createElement("stop", { offset: ".73", stopColor: "#9EE91C" }),
                    h.createElement("stop", { offset: "1", stopColor: "#A1ED1E" })
                  ),
                  h.createElement(
                    "linearGradient",
                    { id: "sparkles_paint2_linear", x1: "22", x2: "22", y1: "31", y2: "18", gradientUnits: "userSpaceOnUse" },
                    h.createElement("stop", { stopColor: "#7D0C7A" }),
                    h.createElement("stop", { offset: ".09", stopColor: "#930C90" }),
                    h.createElement("stop", { offset: ".25", stopColor: "#B30DAE" }),
                    h.createElement("stop", { offset: ".42", stopColor: "#CC0DC6" }),
                    h.createElement("stop", { offset: ".59", stopColor: "#DD0ED8" }),
                    h.createElement("stop", { offset: ".78", stopColor: "#E80EE2" }),
                    h.createElement("stop", { offset: "1", stopColor: "#EB0EE5" })
                  )
                )
              );
            }),
            (e.Feedback = function (e) {
              var t = e.className,
                r = e.width,
                n = void 0 === r ? 24 : r;
              return h.createElement(
                P,
                (0, s._)((0, c._)({}, (0, L.Sh)(t)), { width: n, viewBox: "0 0 24 22", fill: "none" }),
                h.createElement("path", {
                  d: "M6.983 15.53H3.48L2.5 12.01l16-10.5 4 14.02h-9m-6.517 0H13.5m-6.517 0l.23 1.322a2 2 0 001.97 1.658h2.454a2 2 0 001.972-2.331l-.109-.65",
                  strokeLinejoin: "round"
                })
              );
            }),
            (e.Goals = function (e) {
              var t = e.className,
                r = e.width,
                n = void 0 === r ? 23 : r;
              return h.createElement(
                P,
                (0, s._)((0, c._)({}, (0, L.Sh)(t)), { width: n, viewBox: "0 0 23 26", fill: "none" }),
                h.createElement("path", {
                  d: "M9 14.01l7.5-7.5m0 0v-3.5m0 3.5H20m-1.5-5.5v3.5H22M10.5 9.766a4.5 4.5 0 102.744 2.744m2.968-3a8.46 8.46 0 011.288 4.5 8.499 8.499 0 01-4.496 7.5M13.5 6.797A8.5 8.5 0 104.996 21.51M3 25.01l1.996-3.5m0 0c1.193.639 2.556 1 4.004 1 1.447 0 2.81-.361 4.004-1M15 25.01l-1.996-3.5",
                  strokeLinecap: "round"
                })
              );
            }),
            (e.Correctness = function (e) {
              var t = e.className,
                r = e.width,
                n = void 0 === r ? 24 : r;
              return h.createElement(
                P,
                (0, s._)((0, c._)({}, (0, L.Sh)(t, he.noStrokeIcon)), { width: n, viewBox: "0 0 24 24", fill: "none" }),
                h.createElement("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "m6.75 6.926 5.113-1.676 5.113 1.676v3.45a8.64 8.64 0 0 1-3.164 6.684l-1.949 1.597-1.95-1.597a8.64 8.64 0 0 1-3.163-6.683V6.926Z",
                  fill: "#FFC8D2"
                }),
                h.createElement(
                  "g",
                  { filter: "url(#a)" },
                  h.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M11.863 5.25v13.407l-1.95-1.597a8.64 8.64 0 0 1-3.163-6.683V6.926l5.113-1.676Z",
                    fill: "#EE445F"
                  })
                ),
                h.createElement(
                  "defs",
                  null,
                  h.createElement(
                    "filter",
                    {
                      id: "a",
                      x: "1.75",
                      y: ".25",
                      width: "15.113",
                      height: "23.407",
                      filterUnits: "userSpaceOnUse",
                      colorInterpolationFilters: "sRGB"
                    },
                    h.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                    h.createElement("feColorMatrix", {
                      in: "SourceAlpha",
                      values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                      result: "hardAlpha"
                    }),
                    h.createElement("feOffset", null),
                    h.createElement("feGaussianBlur", { stdDeviation: "2.5" }),
                    h.createElement("feColorMatrix", { values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" }),
                    h.createElement("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                    h.createElement("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })
                  )
                )
              );
            }),
            (e.Sensitivity = function (e) {
              var t = e.className,
                r = e.width,
                n = void 0 === r ? 24 : r;
              return h.createElement(
                P,
                (0, s._)((0, c._)({}, (0, L.Sh)(t, he.noStrokeIcon)), { width: n, viewBox: "0 0 24 25", dontScale: !0 }),
                h.createElement("path", {
                  d: "M11.9995 7.05738C9.87573 3.43361 4 4.84874 4 9.40015C4 12.453 6.71013 14.4959 11.9995 19.0039C17.2885 14.4959 20 12.453 20 9.40015C20 4.84874 14.1235 3.43361 11.9995 7.05738Z",
                  fill: "#A963DA"
                }),
                h.createElement("path", {
                  d: "M11.2423 13.4308H12.6492V13.3046C12.6566 12.5807 12.9164 12.243 13.5029 11.8903C14.197 11.4783 14.6499 10.9326 14.6499 10.0603C14.6499 8.76114 13.6031 8.00391 12.1295 8.00391C10.782 8.00391 9.68331 8.70918 9.6499 10.194H11.1644C11.1867 9.58891 11.6358 9.26597 12.1221 9.26597C12.6232 9.26597 13.0278 9.60005 13.0278 10.116C13.0278 10.6023 12.6751 10.9252 12.2186 11.2147C11.595 11.6082 11.246 12.0054 11.2423 13.3046V13.4308ZM11.9736 15.8064C12.4487 15.8064 12.8607 15.4093 12.8645 14.9156C12.8607 14.4293 12.4487 14.0321 11.9736 14.0321C11.4836 14.0321 11.079 14.4293 11.0827 14.9156C11.079 15.4093 11.4836 15.8064 11.9736 15.8064Z",
                  fill: "white"
                })
              );
            }),
            (e.ExternalLink = function (e) {
              var t = e.className,
                r = e.width,
                n = void 0 === r ? 24 : r;
              return h.createElement(
                P,
                { className: t, width: n, fill: "none", viewBox: "0 0 24 25" },
                h.createElement("path", {
                  d: "M11 7.50391H9.5C8.39543 7.50391 7.5 8.39934 7.5 9.50391V15.5039C7.5 16.6085 8.39543 17.5039 9.5 17.5039H15.5C16.6046 17.5039 17.5 16.6085 17.5 15.5039V14.0039M12.5 12.5039L17.5 7.50391M17.5 7.50391H13.5M17.5 7.50391V11.5039",
                  stroke: "white",
                  strokeLinecap: "round"
                })
              );
            }),
            (e.StyleGuideRule = function (e) {
              var t = e.className,
                r = e.width,
                n = void 0 === r ? 23 : r;
              return h.createElement(
                P,
                (0, s._)((0, c._)({}, (0, L.Sh)(t)), { width: n, viewBox: "0 0 18 18", fill: "none" }),
                h.createElement("path", {
                  d: "M9.05637 8.99999C9.05637 8.99999 10.3527 12.8891 7.76 15.4818C5.16728 18.0745 1.27819 16.7782 1.27819 16.7782C1.27819 16.7782 0.521981 14.5095 1.31982 12.2825M9.05637 8.99999C9.05637 8.99999 7.76002 5.11092 10.3527 2.51819C12.9455 -0.0745306 16.8346 1.22183 16.8346 1.22183C16.8346 1.22183 17.7553 3.98399 16.493 6.40455M9.05637 8.99999C9.05637 8.99999 12.9454 7.70366 15.5382 10.2964C18.1309 12.8891 16.8345 16.7782 16.8345 16.7782C16.8345 16.7782 14.3503 17.6063 12.0291 16.6151M9.05637 8.99999C9.05637 8.99999 5.16732 10.2963 2.57459 7.70361C-0.0181346 5.11088 1.27823 1.2218 1.27823 1.2218C1.27823 1.2218 4.0679 0.291905 6.497 1.58237",
                  stroke: "white",
                  strokeLinecap: "round"
                })
              );
            }),
            (e.Draggable = function (e) {
              var t = e.className,
                r = e.width,
                n = void 0 === r ? 23 : r;
              return h.createElement(
                P,
                (0, s._)((0, c._)({}, (0, L.Sh)(t)), { width: n, viewBox: "0 0 24 24", fill: "none" }),
                h.createElement("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M10 7C10.5523 7 11 6.55228 11 6C11 5.44772 10.5523 5 10 5C9.44772 5 9 5.44772 9 6C9 6.55228 9.44772 7 10 7ZM10 11C10.5523 11 11 10.5523 11 10C11 9.44772 10.5523 9 10 9C9.44772 9 9 9.44772 9 10C9 10.5523 9.44772 11 10 11ZM11 14C11 14.5523 10.5523 15 10 15C9.44772 15 9 14.5523 9 14C9 13.4477 9.44772 13 10 13C10.5523 13 11 13.4477 11 14ZM10 19C10.5523 19 11 18.5523 11 18C11 17.4477 10.5523 17 10 17C9.44772 17 9 17.4477 9 18C9 18.5523 9.44772 19 10 19ZM15 6C15 6.55228 14.5523 7 14 7C13.4477 7 13 6.55228 13 6C13 5.44772 13.4477 5 14 5C14.5523 5 15 5.44772 15 6ZM14 11C14.5523 11 15 10.5523 15 10C15 9.44772 14.5523 9 14 9C13.4477 9 13 9.44772 13 10C13 10.5523 13.4477 11 14 11ZM15 14C15 14.5523 14.5523 15 14 15C13.4477 15 13 14.5523 13 14C13 13.4477 13.4477 13 14 13C14.5523 13 15 13.4477 15 14ZM14 19C14.5523 19 15 18.5523 15 18C15 17.4477 14.5523 17 14 17C13.4477 17 13 17.4477 13 18C13 18.5523 13.4477 19 14 19Z",
                  fill: "#9FA6BF"
                })
              );
            }),
            (e.StyleGuide = function (e) {
              var t = e.className,
                r = e.width,
                n = void 0 === r ? 28 : r;
              return h.createElement(
                P,
                (0, s._)((0, c._)({}, (0, L.Sh)(t)), { width: n, viewBox: "0 0 28 28", fill: "none" }),
                h.createElement("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M13.1905 13.1904C10.0251 13.6474 7.60727 13.0407 5.93684 11.3703C4.26641 9.69985 3.65971 7.28197 4.11673 4.11664C7.28205 3.65962 9.69993 4.26633 11.3704 5.93676C13.0408 7.60719 13.6762 10.2184 13.1905 13.1904Z",
                  fill: "url(#paint0_linear_3375_16826)",
                  stroke: "none"
                }),
                h.createElement("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M23.8828 4.11678C24.3398 7.28211 23.7331 9.69999 22.0627 11.3704C20.3922 13.0408 17.9744 13.6476 14.809 13.1905C14.352 10.0252 14.9587 7.60733 16.6291 5.9369C18.2996 4.26647 20.9108 3.63103 23.8828 4.11678Z",
                  fill: "url(#paint1_linear_3375_16826)",
                  stroke: "none"
                }),
                h.createElement("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M14.8095 14.8095C17.9749 14.3525 20.3927 14.9592 22.0632 16.6296C23.7336 18.3 24.3403 20.7179 23.8833 23.8832C20.7179 24.3403 18.3001 23.7335 16.6296 22.0631C14.9592 20.3927 14.3238 17.7815 14.8095 14.8095Z",
                  fill: "url(#paint2_linear_3375_16826)",
                  stroke: "none"
                }),
                h.createElement("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M4.11723 23.8832C3.66021 20.7179 4.26691 18.3 5.93734 16.6296C7.60777 14.9592 10.0256 14.3525 13.191 14.8095C13.648 17.9748 13.0413 20.3927 11.3709 22.0631C9.70042 23.7335 7.08924 24.369 4.11723 23.8832Z",
                  fill: "url(#paint3_linear_3375_16826)",
                  stroke: "none"
                }),
                h.createElement(
                  "defs",
                  null,
                  h.createElement(
                    "linearGradient",
                    {
                      id: "paint0_linear_3375_16826",
                      x1: "13.37",
                      y1: "10.2199",
                      x2: "3.92",
                      y2: "10.2199",
                      gradientUnits: "userSpaceOnUse"
                    },
                    h.createElement("stop", { stopColor: "#D2E3FF" }),
                    h.createElement("stop", { offset: "1", stopColor: "#548AFF" })
                  ),
                  h.createElement(
                    "linearGradient",
                    {
                      id: "paint1_linear_3375_16826",
                      x1: "14.6295",
                      y1: "7.07003",
                      x2: "24.0795",
                      y2: "7.07002",
                      gradientUnits: "userSpaceOnUse"
                    },
                    h.createElement("stop", { stopColor: "#FFD0D8" }),
                    h.createElement("stop", { offset: "1", stopColor: "#EE445F" })
                  ),
                  h.createElement(
                    "linearGradient",
                    { id: "paint2_linear_3375_16826", x1: "14.63", y1: "17.78", x2: "24.08", y2: "17.78", gradientUnits: "userSpaceOnUse" },
                    h.createElement("stop", { stopColor: "#ECD1FF" }),
                    h.createElement("stop", { offset: "1", stopColor: "#BC78ED" })
                  ),
                  h.createElement(
                    "linearGradient",
                    {
                      id: "paint3_linear_3375_16826",
                      x1: "14.0004",
                      y1: "20.93",
                      x2: "4.55039",
                      y2: "20.93",
                      gradientUnits: "userSpaceOnUse"
                    },
                    h.createElement("stop", { offset: "0.195885", stopColor: "#CAFAEF" }),
                    h.createElement("stop", { offset: "1", stopColor: "#0FDCAC" })
                  )
                )
              );
            }),
            (e.StyleGuideWhite = function (e) {
              var t = e.className,
                r = e.width,
                n = void 0 === r ? 23 : r;
              return h.createElement(
                P,
                (0, s._)((0, c._)({}, (0, L.Sh)(t)), { width: n, viewBox: "0 0 18 18", fill: "none" }),
                h.createElement("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M7.53741 7.53742C5.72866 7.79857 4.34701 7.45188 3.39248 6.49735C2.43795 5.54282 2.09126 4.16118 2.35242 2.35242C4.16117 2.09127 5.54282 2.43795 6.49735 3.39249C7.45188 4.34702 7.81499 5.83912 7.53741 7.53742Z",
                  fill: "white",
                  stroke: "none"
                }),
                h.createElement("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M13.6472 2.35248C13.9083 4.16124 13.5616 5.54288 12.6071 6.49741C11.6526 7.45195 10.2709 7.79863 8.46217 7.53748C8.20101 5.72872 8.5477 4.34708 9.50223 3.39255C10.4568 2.43802 11.9489 2.07491 13.6472 2.35248Z",
                  fill: "white",
                  stroke: "none"
                }),
                h.createElement("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M8.46259 8.46258C10.2713 8.20143 11.653 8.54812 12.6075 9.50265C13.562 10.4572 13.9087 11.8388 13.6476 13.6476C11.8388 13.9087 10.4572 13.562 9.50265 12.6075C8.54812 11.653 8.18501 10.1609 8.46259 8.46258Z",
                  fill: "white",
                  stroke: "none"
                }),
                h.createElement("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M2.35284 13.6475C2.09169 11.8388 2.43838 10.4571 3.39291 9.50259C4.34744 8.54805 5.72908 8.20137 7.53783 8.46252C7.79899 10.2713 7.4523 11.6529 6.49777 12.6075C5.54324 13.562 4.05113 13.9251 2.35284 13.6475Z",
                  fill: "white",
                  stroke: "none"
                })
              );
            });
          !(function (e) {
            (e.Document = function (e) {
              var t = e.className,
                r = e.width,
                n = void 0 === r ? 24 : r;
              return h.createElement(
                P,
                { className: t, width: n, viewBox: "0 0 24 24" },
                h.createElement("path", {
                  d: "M9 7H15M9 10H15M9 13H15M9 16H12M7 19H17C17.5523 19 18 18.5523 18 18V5C18 4.44772 17.5523 4 17 4H7C6.44772 4 6 4.44772 6 5V18C6 18.5523 6.44772 19 7 19Z",
                  stroke: "inherit",
                  fill: "none",
                  strokeLinecap: "round",
                  strokeLinejoin: "round"
                })
              );
            }),
              (e.Image = function (e) {
                var t = e.className,
                  r = e.width,
                  n = void 0 === r ? 24 : r;
                return h.createElement(
                  P,
                  { dontScale: !0, className: t, viewBox: "0 0 24 24", width: n },
                  h.createElement("path", {
                    d: "M19 12.5232L15.2315 9.15406C14.8253 8.79085 14.203 8.81978 13.8322 9.2191L5.16357 18.5546M6 19H18C18.5523 19 19 18.5523 19 18V6C19 5.44772 18.5523 5 18 5H6C5.44772 5 5 5.44772 5 6V18C5 18.5523 5.44772 19 6 19ZM10 8.5C10 9.32843 9.32843 10 8.5 10C7.67157 10 7 9.32843 7 8.5C7 7.67157 7.67157 7 8.5 7C9.32843 7 10 7.67157 10 8.5Z",
                    stroke: "inherit",
                    fill: "none",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                  })
                );
              }),
              (e.Presentation = function (e) {
                var t = e.className,
                  r = e.width,
                  n = void 0 === r ? 24 : r;
                return h.createElement(
                  P,
                  { className: t, width: n, viewBox: "0 0 24 24" },
                  h.createElement("path", {
                    d: "M12.5 8.5V8H12V8.5H12.5ZM17.5 8.5H18V8H17.5V8.5ZM17.5 15.5V16H18V15.5H17.5ZM12.5 15.5H12V16H12.5V15.5ZM9.5 9.5C9.77614 9.5 10 9.27614 10 9C10 8.72386 9.77614 8.5 9.5 8.5V9.5ZM6.5 8.5C6.22386 8.5 6 8.72386 6 9C6 9.27614 6.22386 9.5 6.5 9.5V8.5ZM9.5 12.5C9.77614 12.5 10 12.2761 10 12C10 11.7239 9.77614 11.5 9.5 11.5V12.5ZM6.5 11.5C6.22386 11.5 6 11.7239 6 12C6 12.2761 6.22386 12.5 6.5 12.5V11.5ZM9.5 15.5C9.77614 15.5 10 15.2761 10 15C10 14.7239 9.77614 14.5 9.5 14.5V15.5ZM6.5 14.5C6.22386 14.5 6 14.7239 6 15C6 15.2761 6.22386 15.5 6.5 15.5V14.5ZM4.5 6H19.5V5H4.5V6ZM20 6.5V17.5H21V6.5H20ZM19.5 18H4.5V19H19.5V18ZM4 17.5V6.5H3V17.5H4ZM4.5 18C4.22386 18 4 17.7761 4 17.5H3C3 18.3284 3.67157 19 4.5 19V18ZM20 17.5C20 17.7761 19.7761 18 19.5 18V19C20.3284 19 21 18.3284 21 17.5H20ZM19.5 6C19.7761 6 20 6.22386 20 6.5H21C21 5.67157 20.3284 5 19.5 5V6ZM4.5 5C3.67157 5 3 5.67157 3 6.5H4C4 6.22386 4.22386 6 4.5 6V5ZM12.5 9H17.5V8H12.5V9ZM17 8.5V15.5H18V8.5H17ZM17.5 15H12.5V16H17.5V15ZM13 15.5V8.5H12V15.5H13ZM9.5 8.5H6.5V9.5H9.5V8.5ZM9.5 11.5H6.5V12.5H9.5V11.5ZM9.5 14.5H6.5V15.5H9.5V14.5Z",
                    fill: "inherit",
                    stroke: "none"
                  })
                );
              }),
              (e.Spreadsheet = function (e) {
                var t = e.className,
                  r = e.width,
                  n = void 0 === r ? 24 : r;
                return h.createElement(
                  P,
                  { className: t, width: n, viewBox: "0 0 24 24" },
                  h.createElement("path", {
                    d: "M12 6L12 18M4 14H20M4 10H20M4 6H20V18H4V6Z",
                    stroke: "inherit",
                    fill: "none",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                  })
                );
              }),
              (e.Archive = function (e) {
                var t = e.className,
                  r = e.width,
                  n = void 0 === r ? 24 : r;
                return h.createElement(
                  P,
                  { className: t, width: n, viewBox: "0 0 24 24" },
                  h.createElement("path", {
                    d: "M11 12V11.5C10.7452 11.5 10.5312 11.6916 10.5031 11.9448L11 12ZM13 12L13.4969 11.9448C13.4688 11.6916 13.2548 11.5 13 11.5V12ZM13.5 16.5V17C13.6422 17 13.7777 16.9394 13.8726 16.8335C13.9674 16.7275 14.0126 16.5861 13.9969 16.4448L13.5 16.5ZM10.5 16.5L10.0031 16.4448C9.98735 16.5861 10.0326 16.7275 10.1274 16.8335C10.2223 16.9394 10.3578 17 10.5 17V16.5ZM10.5 4.5H10V5.5H10.5V4.5ZM12 5.5H12.5V4.5H12V5.5ZM10.5 6.5H10V7.5H10.5V6.5ZM12 7.5H12.5V6.5H12V7.5ZM10.5 8.5H10V9.5H10.5V8.5ZM12 9.5H12.5V8.5H12V9.5ZM10.5 10.5H10V11.5H10.5V10.5ZM12 11.5H12.5V10.5H12V11.5ZM12 5.5H11.5V6.5H12V5.5ZM13.5 6.5H14V5.5H13.5V6.5ZM12 7.5H11.5V8.5H12V7.5ZM13.5 8.5H14V7.5H13.5V8.5ZM12 9.5H11.5V10.5H12V9.5ZM13.5 10.5H14V9.5H13.5V10.5ZM6.5 4.5H17.5V3.5H6.5V4.5ZM18 5V19H19V5H18ZM17.5 19.5H6.5V20.5H17.5V19.5ZM6 19V5H5V19H6ZM6.5 19.5C6.22386 19.5 6 19.2761 6 19H5C5 19.8284 5.67157 20.5 6.5 20.5V19.5ZM18 19C18 19.2761 17.7761 19.5 17.5 19.5V20.5C18.3284 20.5 19 19.8284 19 19H18ZM17.5 4.5C17.7761 4.5 18 4.72386 18 5H19C19 4.17157 18.3284 3.5 17.5 3.5V4.5ZM6.5 3.5C5.67157 3.5 5 4.17157 5 5H6C6 4.72386 6.22386 4.5 6.5 4.5V3.5ZM11 12.5H13V11.5H11V12.5ZM12.5031 12.0552L13.0031 16.5552L13.9969 16.4448L13.4969 11.9448L12.5031 12.0552ZM13.5 16H10.5V17H13.5V16ZM10.9969 16.5552L11.4969 12.0552L10.5031 11.9448L10.0031 16.4448L10.9969 16.5552ZM10.5 5.5H12V4.5H10.5V5.5ZM10.5 7.5H12V6.5H10.5V7.5ZM10.5 9.5H12V8.5H10.5V9.5ZM10.5 11.5H12V10.5H10.5V11.5ZM12 6.5H13.5V5.5H12V6.5ZM12 8.5H13.5V7.5H12V8.5ZM12 10.5H13.5V9.5H12V10.5Z",
                    fill: "inherit",
                    stroke: "none"
                  })
                );
              }),
              (e.Attachment = function (e) {
                var t = e.className,
                  r = e.width,
                  n = void 0 === r ? 24 : r;
                return h.createElement(
                  P,
                  { className: t, width: n, viewBox: "0 0 24 24" },
                  h.createElement("path", {
                    d: "M14.6822 7.82107L8.45826 14.045C7.85166 14.6517 7.85166 15.6351 8.45826 16.2417C9.06487 16.8483 10.0484 16.8483 10.655 16.2417L17.9773 8.91942C18.9883 7.90841 18.9883 6.26925 17.9773 5.25825C16.9663 4.24725 15.3271 4.24725 14.3161 5.25825L6.26156 13.3128C4.84616 14.7282 4.84616 17.023 6.26156 18.4384C7.67697 19.8539 9.97179 19.8539 11.3872 18.4384L18.3434 11.4822",
                    stroke: "inherit",
                    fill: "none",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                  })
                );
              }),
              (e.Email = function (e) {
                var t = e.className,
                  r = e.width,
                  n = void 0 === r ? 24 : r;
                return h.createElement(
                  P,
                  { className: t, width: n, viewBox: "0 0 24 24" },
                  h.createElement("path", {
                    d: "M9 17.5C9.27614 17.5 9.5 17.2761 9.5 17C9.5 16.7239 9.27614 16.5 9 16.5V17.5ZM17.5 11.5C17.5 11.7761 17.7239 12 18 12C18.2761 12 18.5 11.7761 18.5 11.5H17.5ZM13 16.5C12.7239 16.5 12.5 16.7239 12.5 17C12.5 17.2761 12.7239 17.5 13 17.5V16.5ZM20 17L20.3536 17.3536L20.7071 17L20.3536 16.6464L20 17ZM17.3536 13.6464C17.1583 13.4512 16.8417 13.4512 16.6464 13.6464C16.4512 13.8417 16.4512 14.1583 16.6464 14.3536L17.3536 13.6464ZM16.6464 19.6464C16.4512 19.8417 16.4512 20.1583 16.6464 20.3536C16.8417 20.5488 17.1583 20.5488 17.3536 20.3536L16.6464 19.6464ZM10.2929 12.2929L10.6464 11.9393L10.2929 12.2929ZM4.70905 6.00195C4.51379 5.80668 4.19721 5.80668 4.00195 6.00195C3.80668 6.19721 3.80668 6.51379 4.00195 6.70905L4.70905 6.00195ZM17.9981 6.70905C18.1933 6.51379 18.1933 6.19721 17.9981 6.00195C17.8028 5.80668 17.4862 5.80668 17.2909 6.00195L17.9981 6.70905ZM11.7071 12.2929L11.3536 11.9393L11.7071 12.2929ZM5 6.5H17V5.5H5V6.5ZM4.5 16V7H3.5V16H4.5ZM9 16.5H5V17.5H9V16.5ZM17.5 7V11.5H18.5V7H17.5ZM3.5 16C3.5 16.8284 4.17157 17.5 5 17.5V16.5C4.72386 16.5 4.5 16.2761 4.5 16H3.5ZM17 6.5C17.2761 6.5 17.5 6.72386 17.5 7H18.5C18.5 6.17157 17.8284 5.5 17 5.5V6.5ZM5 5.5C4.17157 5.5 3.5 6.17157 3.5 7H4.5C4.5 6.72386 4.72386 6.5 5 6.5V5.5ZM13 17.5H20V16.5H13V17.5ZM20.3536 16.6464L17.3536 13.6464L16.6464 14.3536L19.6464 17.3536L20.3536 16.6464ZM19.6464 16.6464L16.6464 19.6464L17.3536 20.3536L20.3536 17.3536L19.6464 16.6464ZM10.6464 11.9393L4.70905 6.00195L4.00195 6.70905L9.93934 12.6464L10.6464 11.9393ZM17.2909 6.00195L11.3536 11.9393L12.0607 12.6464L17.9981 6.70905L17.2909 6.00195ZM9.93934 12.6464C10.5251 13.2322 11.4749 13.2322 12.0607 12.6464L11.3536 11.9393C11.1583 12.1346 10.8417 12.1346 10.6464 11.9393L9.93934 12.6464Z",
                    fill: "inherit",
                    stroke: "none"
                  })
                );
              }),
              (e.Pdf = function (e) {
                var t = e.className,
                  r = e.width,
                  n = void 0 === r ? 24 : r;
                return h.createElement(
                  P,
                  { className: t, width: n, viewBox: "0 0 24 24" },
                  h.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M6 4C6 3.72386 6.22386 3.5 6.5 3.5H13.5C13.6326 3.5 13.7598 3.55268 13.8536 3.64645L17.8536 7.64645C17.9473 7.74021 18 7.86739 18 8V11H17V8.5H13.5C13.2239 8.5 13 8.27614 13 8V4.5H7V11H6V4ZM14 5.20711L16.2929 7.5H14V5.20711Z",
                    fill: "inherit",
                    stroke: "none"
                  }),
                  h.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M6.63 18.65H7.54971V17.2396H8.32285C9.32327 17.2396 9.90525 16.6428 9.90525 15.7741C9.90525 14.9096 9.33389 14.3 8.34622 14.3H6.63V18.65ZM7.54971 16.5026V15.0519H8.16992C8.70093 15.0519 8.95793 15.3408 8.95793 15.7741C8.95793 16.2052 8.70093 16.5026 8.17417 16.5026H7.54971Z",
                    fill: "inherit",
                    stroke: "none"
                  }),
                  h.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M11.8652 18.65C13.1906 18.65 13.9935 17.8301 13.9935 16.4708C13.9935 15.1156 13.1906 14.3 11.878 14.3H10.3232V18.65H11.8652ZM11.2429 17.862V15.088H11.8291C12.6448 15.088 13.0759 15.5043 13.0759 16.4708C13.0759 17.4414 12.6448 17.862 11.827 17.862H11.2429Z",
                    fill: "inherit",
                    stroke: "none"
                  }),
                  h.createElement("path", {
                    d: "M15.4151 18.65H14.4953V14.3H17.3755V15.0583H15.4151V16.0948H17.1844V16.8531H15.4151V18.65Z",
                    fill: "inherit",
                    stroke: "none"
                  }),
                  h.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M4.5 12V21H19.5V12H4.5ZM18.5 13H5.5V20H18.5V13Z",
                    fill: "inherit",
                    stroke: "none"
                  })
                );
              }),
              (e.Video = function (e) {
                var t = e.className,
                  r = e.width,
                  n = void 0 === r ? 24 : r;
                return h.createElement(
                  P,
                  { className: t, width: n, viewBox: "0 0 24 24" },
                  h.createElement("path", {
                    d: "M3.5 6.5C3.5 5.94772 3.94772 5.5 4.5 5.5H19.5C20.0523 5.5 20.5 5.94772 20.5 6.5V17.5C20.5 18.0523 20.0523 18.5 19.5 18.5H4.5C3.94772 18.5 3.5 18.0523 3.5 17.5V6.5Z",
                    stroke: "inherit",
                    fill: "none",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                  }),
                  h.createElement("path", {
                    d: "M10 8.85L15 11.9733L10 15.0965V8.85Z",
                    stroke: "inherit",
                    fill: "none",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                  })
                );
              });
          })(e.Attachments || (e.Attachments = {}));
        })(G || (G = {})),
        (function (e) {
          e.VbarIcon = h.createElement(
            "svg",
            { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            h.createElement("path", {
              d: "M12.7131 15.2884C13.6692 15.5824 14.4176 16.3308 14.7116 17.2869C14.7989 17.571 15.2011 17.571 15.2884 17.2869C15.5824 16.3308 16.3308 15.5824 17.2869 15.2884C17.571 15.2011 17.571 14.7989 17.2869 14.7116C16.3308 14.4176 15.5824 13.6692 15.2884 12.7131C15.2011 12.429 14.7989 12.429 14.7116 12.7131C14.4176 13.6692 13.6692 14.4176 12.7131 14.7116C12.429 14.7989 12.429 15.2011 12.7131 15.2884Z",
              fill: "#15C39A"
            }),
            h.createElement("path", {
              d: "M12.7131 5.28843C13.6692 5.58238 14.4176 6.33083 14.7116 7.28694C14.7989 7.57103 15.2011 7.57101 15.2884 7.28692C15.5824 6.33081 16.3308 5.58238 17.2869 5.28842C17.571 5.20107 17.571 4.79892 17.2869 4.71157C16.3308 4.41762 15.5824 3.66917 15.2884 2.71306C15.2011 2.42897 14.7989 2.42898 14.7116 2.71308C14.4176 3.66919 13.6692 4.41762 12.7131 4.71157C12.429 4.79892 12.429 5.20108 12.7131 5.28843Z",
              fill: "#FFC444"
            }),
            h.createElement("path", {
              d: "M2.96167 10.6249C5.03325 11.2618 6.65485 12.8834 7.29175 14.955C7.48101 15.5706 8.35235 15.5705 8.54161 14.955C9.1785 12.8834 10.8001 11.2618 12.8717 10.6249C13.4872 10.4356 13.4872 9.5643 12.8717 9.37504C10.8001 8.73815 9.1785 7.1165 8.54158 5.04494C8.35234 4.42941 7.48098 4.42945 7.29174 5.04499C6.65485 7.11655 5.0332 8.73815 2.96164 9.37505C2.3461 9.56432 2.34613 10.4357 2.96167 10.6249Z",
              fill: "#027E6F"
            })
          );
        })(O || (O = {}));
      var $ = (0, M.pipe)(
          w,
          (0, x.UI)(function (e) {
            return function (t) {
              var r = t.className;
              return h.createElement(W, { className: r }, h.createElement(e, null));
            };
          })
        ),
        j = F.ux.keyframes({ to: { strokeDashoffset: 13 } }),
        X = F.ux.keyframes({ to: { strokeDashoffset: 0 } }),
        J = {
          display: "inline-flex",
          minWidth: F.ux.rem(2),
          minHeight: F.ux.rem(2),
          verticalAlign: "middle",
          transition: "fill .2s, stroke .2s",
          justifyContent: "center",
          alignItems: "center",
          stroke: z.Il.CoreNeutral50,
          fill: z.Il.CoreNeutral50,
          $nest: {
            "&:not([data-disabled='true'])[data-hovered='true'], &:not([data-disabled='true'])[data-active='true']": {
              stroke: z.Il.CoreBlue50,
              fill: z.Il.CoreBlue50
            }
          }
        },
        Q = { minWidth: F.ux.rem(1.5), minHeight: F.ux.rem(1.5) },
        K = {
          minWidth: F.ux.rem(1.5),
          minHeight: F.ux.rem(1.5),
          stroke: "none",
          fill: z.Il.CoreYellow50,
          $nest: {
            "&:not([data-disabled='true'])[data-hovered='true'], &:not([data-disabled='true'])[data-active='true']": {
              stroke: "none",
              fill: z.Il.CoreYellow50
            }
          }
        },
        q = {
          stroke: z.Il.CoreNeutral50,
          fill: "none",
          strokeWidth: 1,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          fillRule: "evenodd",
          $nest: { "&:not([data-disabled='true'])[data-hovered='true']": { fill: "none" } }
        },
        ee = {
          fill: "none",
          stroke: A.FW,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          $nest: { "&:not([data-disabled='true'])[data-hovered='true']": { fill: "none", stroke: z.Il.CoreBlue50 } }
        },
        te = { animation: "".concat(j, " .5s linear forwards"), strokeDasharray: 94, strokeDashoffset: 94 },
        re = { animation: "".concat(X, " 1.5s linear forwards"), strokeDasharray: 100, strokeDashoffset: 100 },
        ne = {
          fill: z.Il.CoreNeutral30,
          stroke: "none",
          $nest: {
            "&:not([data-disabled='true'])[data-hovered='true'], &:not([data-disabled='true'])[data-active='true']": { stroke: "none" }
          }
        },
        ae = {
          position: "absolute",
          top: F.ux.rem(1.74),
          left: F.ux.rem(7.35),
          zIndex: 1,
          width: F.ux.rem(1.5),
          height: F.ux.rem(1),
          borderRadius: F.ux.rem(D.mA),
          background: z.Il.CoreGreen10,
          color: z.Il.CoreGreen70,
          textAlign: "center",
          fontWeight: "bold",
          fontSize: F.ux.rem(0.5),
          lineHeight: F.ux.rem(1)
        },
        le = { position: "relative", top: F.ux.percent(50), letterSpacing: F.ux.px(0.8), transform: "translateY(-50%)" },
        oe = {
          stroke: z.Il.CoreNeutral50,
          fill: "none",
          $nest: {
            "&:not([data-disabled='true'])[data-hovered='true'], &:not([data-disabled='true'])[data-active='true']": {
              stroke: z.Il.CoreBlue50,
              fill: "none"
            },
            "&[data-disabled='true']": { stroke: A.xO, fill: "none" }
          }
        },
        ie = {
          $nest: {
            "&:not([data-disabled='true'])[data-active='true']": {
              stroke: z.Il.CoreGreen50,
              fill: z.Il.CoreGreen50,
              strokeWidth: F.ux.px(2)
            }
          }
        },
        ce = {
          $nest: {
            "&:not([data-disabled='true'])[data-active='true']": { stroke: z.Il.CoreRed50, fill: z.Il.CoreRed50, strokeWidth: F.ux.px(2) }
          }
        },
        se = {
          $nest: {
            "&:not([data-disabled='true'])[data-hovered='true'] > svg > path:first-child, &[data-active='true'] > svg > path:first-child": {
              stroke: "none",
              fill: z.Il.CoreGreen50
            },
            "&:not([data-disabled='true'])[data-hovered='true'] > svg > path:last-child, &[data-active='true'] > svg > path:last-child": {
              fill: "white"
            }
          }
        },
        de = {
          $nest: {
            "&:not([data-disabled='true'])[data-hovered='true'] > svg > path:first-child, &[data-active='true'] > svg > path:first-child": {
              stroke: "none",
              fill: z.Il.CoreRed50
            },
            "&:not([data-disabled='true'])[data-hovered='true'] > svg > path:last-child, &[data-active='true'] > svg > path:last-child": {
              stroke: "white"
            }
          }
        },
        me = { $nest: { "&:not([data-disabled='true'])[data-hovered='true'] > svg > path": { stroke: z.Il.CoreBlue50 } } },
        ue = {
          $nest: {
            '& path[data-figure="bg"]': { fill: z.Il.CoreBlue50, stroke: "none" },
            '& path[data-figure="arrow"]': { fill: "none", stroke: z.Il.CoreNeutral0 },
            '& path[data-figure="arrow_spire"]': { fill: z.Il.CoreNeutral0, stroke: "none" }
          }
        },
        he = F.ux.stylesheet({
          icon: [J],
          iconSimple: [{ display: "inline-flex" }],
          gIcon: [Q],
          holder: [{ transform: "scale(calc(var(--rem)/16))" }],
          starIcon: [{ fillOpacity: 0, $nest: { "&:not([data-disabled='true'])[data-active='true']": { fillOpacity: 1 } } }],
          pinIcon: [{ fillOpacity: 0, $nest: { "&:not([data-disabled='true'])[data-active='true']": { fillOpacity: 1 } } }],
          diamondIcon: [K],
          toolbarIcon: [q],
          exitIcon: [ee],
          circle: [te],
          checkmark: [re],
          emote: [ne],
          newIcon: [ae],
          newIconCaption: [le],
          noStrokeIcon: [
            {
              stroke: "none",
              $nest: {
                "&:not([data-disabled='true'])[data-hovered='true'], &:not([data-disabled='true'])[data-active='true']": { stroke: "none" },
                "&[data-disabled='true']": { stroke: "none" }
              }
            }
          ],
          yesCircleIcon: [oe],
          noCircleIcon: [oe],
          yesIcon: [ie],
          closeIcon: [ce],
          voteYes: [se],
          voteNo: [de],
          openFeedbackFormArrow: [me],
          newSmall: [{ fill: "none" }],
          ideasRecommended: [ue]
        });
    },
    86732: (e, t, r) => {
      r.d(t, { H: () => L, m: () => n });
      var n,
        a = r(50693),
        l = r(82900),
        o = r(74923),
        i = r(18775),
        c = r(31099),
        s = r(50858),
        d = r(55818),
        m = r(20096),
        u = r(71346),
        h = r(27378),
        v = r(23239),
        f = r(54001),
        p = r(8543),
        C = r(2834),
        E = r(78674),
        w = r(77176),
        x = r(22232),
        g = r(44060),
        M = r(99094),
        H = r(89894);
      !(function (e) {
        (e.None = "none"), (e.FromClickPoint = "fromClickPoint"), (e.FromCenter = "fromCenter");
      })(n || (n = {}));
      var L = (function (e) {
        (0, c._)(r, e);
        var t = (0, u._)(r);
        function r(e, n) {
          var o;
          return (
            (0, l._)(this, r),
            (o = t.call(this, e)),
            (0, i._)((0, a._)(o), "context", void 0),
            (0, i._)((0, a._)(o), "_ripples", v.h.create(Array())),
            (0, i._)((0, a._)(o), "_el", void 0),
            (0, i._)((0, a._)(o), "_subscription", void 0),
            (0, i._)((0, a._)(o), "_disabled", v.h.create(!1).view()),
            (o._disabled = void 0 === n.disabled ? o._disabled : n.disabled),
            o
          );
        }
        return (
          (0, o._)(r, [
            {
              key: "componentDidMount",
              value: function () {
                var e = this;
                this._el &&
                  (this._subscription = this.props.mouseDownEvents
                    .pipe(
                      C.b(function (t) {
                        if (!e._disabled.get() && e._el) {
                          var r = e._getAnimationStyle(e._el, t);
                          e._ripples.modify(function (e) {
                            return (0, m._)(e).concat([r]);
                          });
                        }
                      }),
                      E.b(1e3),
                      C.b(function () {
                        return e._ripples.modify(function () {
                          return [];
                        });
                      })
                    )
                    .subscribe());
              }
            },
            {
              key: "componentWillUnmount",
              value: function () {
                Boolean(this._subscription) && this._subscription.unsubscribe();
              }
            },
            {
              key: "_getAnimationStyle",
              value: function (e, t) {
                var r = e.getBoundingClientRect(),
                  a = r.width;
                switch (this.props.animationMode) {
                  case n.None:
                    throw new x.ej("unsupported mode, do not mount component if you do not need ripple animation");
                  case n.FromCenter:
                    return (0, d._)((0, s._)({}, (0, f.Sh)(B.rippleFromCenter, this.props.className)), {
                      top: (r.height - a) / 2,
                      left: 0,
                      width: a,
                      height: a
                    });
                  default:
                    return (0, d._)((0, s._)({}, (0, f.Sh)(B.ripple, this.props.className)), {
                      top: t.pageY - r.top - a / 2,
                      left: t.pageX - r.left - a / 2,
                      width: a,
                      height: a
                    });
                }
              }
            },
            {
              key: "render",
              value: function () {
                var e = this;
                return h.createElement(
                  "span",
                  {
                    className: B.rippleContainer,
                    ref: function (t) {
                      return (e._el = t);
                    }
                  },
                  h.createElement(
                    p.F.span,
                    null,
                    this._ripples.pipe(
                      w.U(function (e) {
                        return e.map(function (e, t) {
                          return h.createElement("span", { className: e.className, key: t, style: e });
                        });
                      })
                    )
                  )
                );
              }
            }
          ]),
          r
        );
      })(h.Component);
      (0, i._)(L, "contextType", M.f.Context);
      var y = H.ux.keyframes({ to: { opacity: 0, transform: "scale(1)" } }),
        k = H.ux.keyframes({ to: { opacity: 0, transform: "scale(2)" } }),
        _ = {
          position: "absolute",
          borderRadius: H.ux.percent(100),
          backgroundColor: g.Il.CoreNeutral90,
          opacity: 0.15,
          transform: "scale(0)",
          animation: "".concat(k, " .4s")
        },
        N = { animationName: y },
        B = H.ux.stylesheet({
          rippleContainer: [{ position: "absolute", top: 0, right: 0, bottom: 0, left: 0, borderRadius: "inherit", pointerEvents: "none" }],
          ripple: [_],
          rippleFromCenter: [_, N]
        });
    },
    40456: (e, t, r) => {
      r.d(t, {
        AX: () => m,
        Aw: () => E,
        BZ: () => f,
        FW: () => o,
        Re: () => h,
        UE: () => i,
        VR: () => c,
        Xd: () => p,
        Zn: () => v,
        b6: () => C,
        jj: () => a,
        kl: () => d,
        lh: () => u,
        mb: () => s,
        xO: () => l,
        zh: () => n
      });
      var n = "#f7f8ff",
        a = "#f1f2fa",
        l = "#e4e6f2",
        o = "#97a0bf",
        i = "#8189a9",
        c = "#60657b",
        s = "#17d9aa",
        d = "#f23452",
        m = "#fab712",
        u = "#c770c8",
        h = "0 12px 48px 0 rgba(96, 101, 123, .24)",
        v = "rgba(255, 255, 255, 0)",
        f = "linear-gradient(to left, #6391ff 0%, #2a42ef 100%)",
        p = "linear-gradient(to right, #6391ff 0%, #2a42ef 100%)",
        C =
          "linear-gradient(-45deg, rgba(255, 255, 255, .2) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .2) 50%, rgba(255, 255, 255, .2) 75%, transparent 75%, transparent)",
        E = "linear-gradient(-180deg, #fff 78%, rgba(255, 255, 255, 0) 100%)";
    },
    32096: (e, t, r) => {
      r.d(t, {
        $n: () => m,
        Ax: () => i,
        DY: () => u,
        Ee: () => k,
        FB: () => b,
        FY: () => s,
        Gk: () => B,
        Gu: () => N,
        I3: () => d,
        Ig: () => z,
        Ih: () => x,
        Jg: () => H,
        Jr: () => a,
        Kp: () => S,
        LB: () => n,
        MZ: () => L,
        OB: () => _,
        Q9: () => E,
        VN: () => c,
        WW: () => w,
        aS: () => g,
        cr: () => f,
        fx: () => l,
        g_: () => p,
        h: () => y,
        mA: () => o,
        mJ: () => V,
        nt: () => v,
        pZ: () => M,
        rX: () => Z,
        v4: () => F,
        w$: () => h,
        xL: () => C
      });
      var n = 0,
        a = 0.5,
        l = 0.25,
        o = 0.125,
        i = 0,
        c = 1,
        s = 10,
        d = 100,
        m = 1e3,
        u = 1e4,
        h = 10001,
        v = 11e3,
        f = 12e3,
        p = "'ss01'",
        C = "'ss02'",
        E = "'tnum'",
        w = "'cv05'",
        x = "'cv07'",
        g = "'cv08'",
        M = "max-height: 760px",
        H = "max-width: 1279px",
        L = 4,
        y = 31,
        k = 27,
        _ = 4,
        N = 12,
        B = 7.5,
        S = 11,
        Z = 0.04625,
        V = 2,
        z = 2,
        b = 2,
        F = 300;
    },
    42103: (e, t, r) => {
      r.d(t, { G: () => n });
      var n,
        a = r(82900),
        l = r(74923),
        o = r(18775),
        i = r(27378),
        c = r(40327),
        s = r(23239),
        d = r(24209),
        m = r(49708),
        u = r(41398),
        h = r(98403),
        v = r(85985),
        f = r(2834),
        p = r(66310),
        C = r(40151),
        E = r(80900),
        w = r(95093),
        x = r(9223),
        g = r(18208),
        M = r(5114);
      !(function (e) {
        e.genUuid = function () {
          return g.fg(12);
        };
        var t = (e.defaultState = { visible: !1, content: M.none }),
          r = (e.Context = i.createContext(void 0)),
          H = (function () {
            function e() {
              var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s.h.create(t),
                n = this;
              (0, a._)(this, e),
                (0, o._)(this, "_state", void 0),
                (0, o._)(this, "visible", void 0),
                (0, o._)(this, "content", void 0),
                (0, o._)(this, "hasContent", void 0),
                (0, o._)(this, "state", void 0),
                (0, o._)(this, "show", void 0),
                (0, o._)(this, "hide", void 0),
                (this._state = r),
                (this.visible = this._state.lens("visible")),
                (this.content = this._state.lens("content")),
                (this.hasContent = this._state.view(function (e) {
                  return M.isSome(e.content);
                })),
                (this.state = this._state.view(function (e) {
                  return (0, c.pipe)(
                    e.content,
                    M.filter(function () {
                      return e.visible;
                    })
                  );
                })),
                (this.show = function () {
                  n.visible.set(!0);
                }),
                (this.hide = function () {
                  n._state.set(t);
                });
            }
            return (
              (0, l._)(e, [
                {
                  key: "getTooltipObservable",
                  value: function (e, r, a, l) {
                    var o = this,
                      i = d.T(m.R(e, "mouseenter"), m.R(e, "focus")),
                      s = d.T(m.R(e, "mouseleave"), m.R(e, "blur")),
                      g = n.genUuid(),
                      H = function () {
                        return o._state.modify(function (e) {
                          return (0, c.pipe)(
                            e.content,
                            M.exists(function (e) {
                              return e.uuid === g;
                            })
                          )
                            ? t
                            : e;
                        });
                      };
                    return i.pipe(
                      u.M(h.Dx(r).pipe(v.h(Boolean)), function (e, t) {
                        return t;
                      }),
                      f.b(function (t) {
                        return o.content.set(M.some({ target: e, content: t, alignment: a, uuid: g }));
                      }),
                      p.w(function () {
                        return (0, c.pipe)(
                          l,
                          M.fold(
                            function () {
                              return C.E;
                            },
                            function (e) {
                              return E.H(e);
                            }
                          )
                        ).pipe(w.T(s), f.b(H));
                      }),
                      x.x(H)
                    );
                  }
                }
              ]),
              e
            );
          })();
        e.Impl = H;
        e.DefaultProvider = function (e) {
          var t = e.children;
          return i.createElement(r.Provider, { value: new H() }, t);
        };
      })(n || (n = {}));
    },
    65223: (e, t, r) => {
      r.d(t, { u: () => v });
      var n = r(50693),
        a = r(82900),
        l = r(74923),
        o = r(18775),
        i = r(31099),
        c = r(71346),
        s = r(27378),
        d = r(31542),
        m = r(9922),
        u = r(5114),
        h = r(42103),
        v = (function (e) {
          (0, i._)(r, e);
          var t = (0, c._)(r);
          function r() {
            var e;
            return (
              (0, a._)(this, r),
              (e = t.apply(this, arguments)),
              (0, o._)((0, n._)(e), "context", void 0),
              (0, o._)((0, n._)(e), "_subs", new m.w.Keeper()),
              (0, o._)((0, n._)(e), "_attachEvents", function (t) {
                e._subs.push(
                  e.context
                    .getTooltipObservable(d.findDOMNode(e), t.title, null != t.align ? t.align : "auto", u.fromNullable(t.duration))
                    .subscribe()
                );
              }),
              e
            );
          }
          return (
            (0, l._)(r, [
              {
                key: "componentDidMount",
                value: function () {
                  this._attachEvents(this.props);
                }
              },
              {
                key: "UNSAFE_componentWillReceiveProps",
                value: function (e) {
                  this._subs.dispose(), this._attachEvents(e);
                }
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this._subs.dispose();
                }
              },
              {
                key: "render",
                value: function () {
                  return s.Children.only(this.props.children);
                }
              }
            ]),
            r
          );
        })(s.Component);
      (0, o._)(v, "contextType", h.G.Context);
    },
    1509: (e, t, r) => {
      r.d(t, { Z: () => u });
      var n = r(50858),
        a = r(55818),
        l = r(98410),
        o = r(27378),
        i = r(8543),
        c = r(54001),
        s = r(98403),
        d = r(77176),
        m = r(82374);
      function u(e) {
        var t = e.nodeType,
          r = e.styleType,
          m = e.className,
          h = e.mount,
          v = (0, l._)(e, ["nodeType", "styleType", "className", "mount"]),
          f = i.F[t],
          p = s.Dx(r).pipe(
            d.U(function (e) {
              return u.style[e];
            })
          );
        return o.createElement(f, (0, a._)((0, n._)({}, (0, c.Sh)(p, m), v), { mount: h }));
      }
      !(function (e) {
        e.style = m;
        !(function (e) {
          (e.H1 = "header1"),
            (e.H2 = "header2"),
            (e.H3 = "header3"),
            (e.H3Legacy = "header3legacy"),
            (e.H4 = "header4"),
            (e.H5 = "header5"),
            (e.Paper = "paper"),
            (e.Base = "base"),
            (e.Small = "small"),
            (e.SmallLight = "smallLight"),
            (e.Lawyer = "lawyer"),
            (e.Title = "title"),
            (e.Button = "button"),
            (e.Score = "score"),
            (e.P1 = "p1");
        })(e.Type || (e.Type = {}));
        (e.H1 = function (e) {
          return o.createElement(u, (0, n._)({ styleType: u.Type.H1, nodeType: "h1" }, e));
        }),
          (e.H2 = function (e) {
            return o.createElement(u, (0, n._)({ styleType: u.Type.H2, nodeType: "h2" }, e));
          }),
          (e.H3 = function (e) {
            return o.createElement(u, (0, n._)({ styleType: u.Type.H3, nodeType: "h3" }, e));
          }),
          (e.H3Legacy = function (e) {
            return o.createElement(u, (0, n._)({ styleType: u.Type.H3Legacy, nodeType: "h3" }, e));
          }),
          (e.H4 = function (e) {
            return o.createElement(u, (0, n._)({ styleType: u.Type.H4, nodeType: "h4" }, e));
          }),
          (e.H5 = function (e) {
            return o.createElement(u, (0, n._)({ styleType: u.Type.H5, nodeType: "h5" }, e));
          }),
          (e.Paper = function (e) {
            return o.createElement(u, (0, n._)({ styleType: u.Type.Paper, nodeType: "span" }, e));
          }),
          (e.Base = function (e) {
            return o.createElement(u, (0, n._)({ styleType: u.Type.Base, nodeType: "div" }, e));
          }),
          (e.Small = function (e) {
            return o.createElement(u, (0, n._)({ styleType: u.Type.Small, nodeType: "small" }, e));
          }),
          (e.SmallLight = function (e) {
            return o.createElement(u, (0, n._)({ styleType: u.Type.SmallLight, nodeType: "div" }, e));
          }),
          (e.Lawyer = function (e) {
            return o.createElement(u, (0, n._)({ styleType: u.Type.Lawyer, nodeType: "span" }, e));
          }),
          (e.Title = function (e) {
            return o.createElement(u, (0, n._)({ styleType: u.Type.Title, nodeType: "div" }, e));
          }),
          (e.Button = function (e) {
            return o.createElement(u, (0, n._)({ styleType: u.Type.Button, nodeType: "div" }, e));
          }),
          (e.Score = function (e) {
            return o.createElement(u, (0, n._)({ styleType: u.Type.Score, nodeType: "div" }, e));
          }),
          (e.P1 = function (e) {
            return o.createElement(u, (0, n._)({ styleType: u.Type.P1, nodeType: "div" }, e));
          });
      })(u || (u = {}));
    },
    82374: (e, t, r) => {
      r.r(t),
        r.d(t, {
          base: () => u,
          button: () => s,
          header1: () => l,
          header2: () => o,
          header3: () => i,
          header3legacy: () => c,
          header4: () => d,
          header5: () => w,
          lawyer: () => p,
          p1: () => E,
          paper: () => m,
          score: () => f,
          small: () => h,
          smallLight: () => v,
          title: () => C
        });
      var n = r(44060),
        a = r(89894),
        l = a.ux.style({
          margin: 0,
          color: n.xv.H1Color,
          letterSpacing: n.xv.H1LetterSpacing,
          fontWeight: n.xv.H1Weight,
          fontSize: a.ux.rem(n.xv.H1Size),
          lineHeight: a.ux.rem(n.xv.H1LineHeight)
        }),
        o = a.ux.style({
          margin: 0,
          color: n.xv.H2Color,
          textTransform: "capitalize",
          letterSpacing: n.xv.H2LetterSpacing,
          fontWeight: n.xv.H2Weight,
          fontSize: a.ux.rem(n.xv.H2Size),
          lineHeight: a.ux.rem(n.xv.H2LineHeight)
        }),
        i = a.ux.style({
          margin: 0,
          color: n.xv.H3Color,
          letterSpacing: a.ux.rem(n.xv.H3LetterSpacing),
          fontWeight: n.xv.H3Weight,
          fontSize: a.ux.rem(n.xv.H3Size),
          lineHeight: a.ux.rem(n.xv.H3LineHeight)
        }),
        c = a.ux.style({
          margin: 0,
          color: n.Il.CoreNeutral50,
          textTransform: "uppercase",
          letterSpacing: a.ux.rem(0.04625),
          fontWeight: 700,
          fontSize: a.ux.rem(0.6875),
          lineHeight: a.ux.rem(1.5)
        }),
        s = a.ux.style({
          margin: 0,
          color: n.xv.ButtonColor,
          letterSpacing: a.ux.rem(n.xv.ButtonLetterSpacing),
          fontWeight: n.xv.ButtonWeight,
          fontSize: a.ux.rem(n.xv.ButtonSize),
          lineHeight: a.ux.rem(n.xv.ButtonLineHeight)
        }),
        d = a.ux.style({
          margin: 0,
          color: n.xv.H4Color,
          letterSpacing: a.ux.rem(n.xv.H4LetterSpacing),
          fontWeight: n.xv.H4Weight,
          fontSize: a.ux.rem(n.xv.H4Size),
          lineHeight: a.ux.rem(n.xv.H4LineHeight)
        }),
        m = a.ux.style({
          color: n.xv.PaperColor,
          letterSpacing: a.ux.rem(n.xv.PaperLetterSpacing),
          fontWeight: n.xv.PaperWeight,
          fontSize: a.ux.rem(n.xv.PaperSize),
          lineHeight: a.ux.rem(n.xv.PaperLineHeight)
        }),
        u = a.ux.style({
          color: n.xv.BodyColor,
          letterSpacing: a.ux.rem(n.xv.BodyLetterSpacing),
          fontWeight: n.xv.BodyWeight,
          fontSize: a.ux.rem(n.xv.BodySize),
          lineHeight: a.ux.rem(n.xv.BodyLineHeight)
        }),
        h = a.ux.style({
          color: n.xv.SmallColor,
          letterSpacing: a.ux.rem(n.xv.SmallLetterSpacing),
          fontWeight: n.xv.SmallWeight,
          fontSize: a.ux.rem(n.xv.SmallSize),
          lineHeight: a.ux.rem(n.xv.SmallLineHeight)
        }),
        v = a.ux.style({
          color: n.xv.SmallLightColor,
          letterSpacing: a.ux.rem(n.xv.SmallLightLetterSpacing),
          fontWeight: n.xv.SmallLightWeight,
          fontSize: a.ux.rem(n.xv.SmallLightSize),
          lineHeight: a.ux.rem(n.xv.SmallLightLineHeight)
        }),
        f = a.ux.style({
          color: n.xv.ScoreColor,
          letterSpacing: a.ux.rem(n.xv.ScoreLetterSpacing),
          fontWeight: n.xv.ScoreWeight,
          fontSize: a.ux.rem(n.xv.ScoreSize),
          lineHeight: a.ux.rem(n.xv.ScoreLineHeight)
        }),
        p = a.ux.style({
          color: n.Il.CoreNeutral70,
          letterSpacing: ".1px",
          fontWeight: 400,
          fontSize: a.ux.rem(0.6875),
          lineHeight: a.ux.rem(1)
        }),
        C = a.ux.style({
          color: n.Il.CoreNeutral90,
          textTransform: "uppercase",
          letterSpacing: ".8px",
          fontWeight: 700,
          fontSize: a.ux.rem(0.75),
          lineHeight: a.ux.rem(2)
        }),
        E = a.ux.style({ color: n.Il.CoreNeutral90, letterSpacing: 0, fontSize: a.ux.rem(0.9375), lineHeight: a.ux.rem(1.5) }),
        w = a.ux.style({
          margin: 0,
          color: n.Il.CoreNeutral50,
          textTransform: "uppercase",
          letterSpacing: a.ux.rem(0.04625),
          fontWeight: 400,
          fontSize: a.ux.rem(0.5625),
          lineHeight: a.ux.rem(1)
        });
    },
    25004: (e, t) => {
      var r = "function" == typeof Symbol && Symbol.for,
        n = r ? Symbol.for("react.element") : 60103,
        a = r ? Symbol.for("react.portal") : 60106,
        l = r ? Symbol.for("react.fragment") : 60107,
        o = r ? Symbol.for("react.strict_mode") : 60108,
        i = r ? Symbol.for("react.profiler") : 60114,
        c = r ? Symbol.for("react.provider") : 60109,
        s = r ? Symbol.for("react.context") : 60110,
        d = r ? Symbol.for("react.async_mode") : 60111,
        m = r ? Symbol.for("react.concurrent_mode") : 60111,
        u = r ? Symbol.for("react.forward_ref") : 60112,
        h = r ? Symbol.for("react.suspense") : 60113,
        v = r ? Symbol.for("react.suspense_list") : 60120,
        f = r ? Symbol.for("react.memo") : 60115,
        p = r ? Symbol.for("react.lazy") : 60116,
        C = r ? Symbol.for("react.fundamental") : 60117,
        E = r ? Symbol.for("react.responder") : 60118,
        w = r ? Symbol.for("react.scope") : 60119;
      function x(e) {
        if ("object" == typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case n:
              switch (e.type) {
                case d:
                case m:
                case l:
                case i:
                case o:
                case h:
                  return e;
                default:
                  switch (e && e.$$typeof) {
                    case s:
                    case u:
                    case c:
                      return e;
                    default:
                      return t;
                  }
              }
            case p:
            case f:
            case a:
              return t;
          }
        }
      }
      function g(e) {
        return x(e) === m;
      }
      t.isElement = function (e) {
        return "object" == typeof e && null !== e && e.$$typeof === n;
      };
    },
    1169: (e, t, r) => {
      e.exports = r(25004);
    },
    44060: (e, t, r) => {
      r.d(t, { Bf: () => a, Il: () => c, L3: () => o, LK: () => n, U9: () => l, Zh: () => s, _5: () => i, uc: () => h, xv: () => u });
      var n,
        a,
        l,
        o,
        i,
        c,
        s,
        d,
        m,
        u,
        h,
        v = r(77678);
      !(function (e) {
        e.Badge = "0.4px";
      })(n || (n = {})),
        (function (e) {
          e.Badge = 0.75;
        })(a || (a = {})),
        (function (e) {
          e.Badge = 400;
        })(l || (l = {})),
        (function (e) {
          e.Badge = 1.175;
        })(o || (o = {})),
        (function (e) {
          e.Badge = "uppercase";
        })(i || (i = {})),
        (function (e) {
          (e.TextBadge = "rgb(13, 128, 101)"),
            (e.TextButtonPrimaryDisabled = "rgb(255, 255, 255)"),
            (e.TextButtonGhostDisabled = "rgb(198, 203, 222)"),
            (e.TextButtonDocumentSettingsHint = "rgb(109, 117, 141)"),
            (e.TextFooterWordCounter = "rgb(109, 117, 141)"),
            (e.BackgroundBadge = "rgb(215, 247, 240)"),
            (e.BackgroundButtonPrimaryNormal = "rgb(74, 110, 224)"),
            (e.BackgroundButtonPrimaryHover = "rgb(99, 142, 235)"),
            (e.BackgroundButtonPrimaryDisabled = "rgb(153, 194, 255)"),
            (e.BackgroundButtonGhostActive = "rgb(237, 245, 255)"),
            (e.BackgroundButtonGhostHover = "rgb(249, 250, 255)"),
            (e.BackgroundButtonSelectionUnselectedDefault = "rgb(240, 242, 252)"),
            (e.BackgroundButtonSelectionUnselectedHover = "rgb(231, 233, 245)"),
            (e.BackgroundButtonSelectionSelectedDefault = "rgb(74, 110, 224)"),
            (e.BackgroundButtonSelectionSelectedHover = "rgb(99, 142, 235)"),
            (e.BackgroundCardApply = "rgb(17, 166, 131)"),
            (e.BackgroundNotification = "rgb(51, 57, 84)"),
            (e.BackgroundTooltip = "rgb(51, 57, 84)"),
            (e.CoreNeutral0 = v.CoreNeutral0),
            (e.CoreNeutral1 = v.CoreNeutral1),
            (e.CoreNeutral10 = v.CoreNeutral10),
            (e.CoreNeutral20 = v.CoreNeutral20),
            (e.CoreNeutral30 = v.CoreNeutral30),
            (e.CoreNeutral40 = v.CoreNeutral40),
            (e.CoreNeutral50 = v.CoreNeutral50),
            (e.CoreNeutral60 = v.CoreNeutral60),
            (e.CoreNeutral70 = v.CoreNeutral70),
            (e.CoreNeutral80 = v.CoreNeutral80),
            (e.CoreNeutral90 = v.CoreNeutral90),
            (e.CoreGreen1 = v.CoreGreen1),
            (e.CoreGreen10 = v.CoreGreen10),
            (e.CoreGreen20 = v.CoreGreen20),
            (e.CoreGreen30 = v.CoreGreen30),
            (e.CoreGreen40 = v.CoreGreen40),
            (e.CoreGreen50 = v.CoreGreen50),
            (e.CoreGreen60 = v.CoreGreen60),
            (e.CoreGreen70 = v.CoreGreen70),
            (e.CoreBlue1 = v.CoreBlue1),
            (e.CoreBlue10 = v.CoreBlue10),
            (e.CoreBlue20 = v.CoreBlue20),
            (e.CoreBlue30 = v.CoreBlue30),
            (e.CoreBlue40 = v.CoreBlue40),
            (e.CoreBlue50 = v.CoreBlue50),
            (e.CoreBlue60 = v.CoreBlue60),
            (e.CoreBlue70 = v.CoreBlue70),
            (e.CoreRed1 = v.CoreRed1),
            (e.CoreRed10 = v.CoreRed10),
            (e.CoreRed20 = v.CoreRed20),
            (e.CoreRed30 = v.CoreRed30),
            (e.CoreRed40 = v.CoreRed40),
            (e.CoreRed50 = v.CoreRed50),
            (e.CoreRed60 = v.CoreRed60),
            (e.CoreRed70 = v.CoreRed70),
            (e.CoreYellow1 = v.CoreYellow1),
            (e.CoreYellow10 = v.CoreYellow10),
            (e.CoreYellow20 = v.CoreYellow20),
            (e.CoreYellow30 = v.CoreYellow30),
            (e.CoreYellow40 = v.CoreYellow40),
            (e.CoreYellow50 = v.CoreYellow50),
            (e.CoreYellow60 = v.CoreYellow60),
            (e.CoreYellow70 = v.CoreYellow70),
            (e.CoreYellow80 = v.CoreYellow80),
            (e.CorePurple1 = v.CorePurple1),
            (e.CorePurple10 = v.CorePurple10),
            (e.CorePurple20 = v.CorePurple20),
            (e.CorePurple30 = v.CorePurple30),
            (e.CorePurple40 = v.CorePurple40),
            (e.CorePurple50 = v.CorePurple50),
            (e.CorePurple60 = v.CorePurple60),
            (e.CoreCyan1 = v.CoreCyan1),
            (e.CoreCyan10 = v.CoreCyan10),
            (e.CoreCyan20 = v.CoreCyan20),
            (e.CoreCyan30 = v.CoreCyan30),
            (e.CoreCyan40 = v.CoreCyan40),
            (e.CoreCyan50 = v.CoreCyan50),
            (e.CoreCyan60 = v.CoreCyan60),
            (e.CoreCoral1 = v.CoreCoral1),
            (e.CoreCoral10 = v.CoreCoral10),
            (e.CoreCoral30 = v.CoreCoral30),
            (e.CoreCoral40 = v.CoreCoral40),
            (e.CoreCoral50 = v.CoreCoral50),
            (e.CoreCoral60 = v.CoreCoral60),
            (e.CoreIndigo1 = v.CoreIndigo1),
            (e.CoreIndigo10 = v.CoreIndigo10),
            (e.CoreIndigo20 = v.CoreIndigo20),
            (e.CoreIndigo30 = v.CoreIndigo30),
            (e.CoreIndigo40 = v.CoreIndigo40),
            (e.CoreIndigo50 = v.CoreIndigo50),
            (e.CoreIndigo60 = v.CoreIndigo60),
            (e.CoreIndigo70 = v.CoreIndigo70),
            (e.CoreLime1 = v.CoreLime1),
            (e.CoreLime10 = v.CoreLime10),
            (e.CoreLime20 = v.CoreLime20),
            (e.CoreLime30 = v.CoreLime30),
            (e.CoreLime40 = v.CoreLime40),
            (e.CoreLime50 = v.CoreLime50),
            (e.CoreMagenta1 = v.CoreMagenta1),
            (e.CoreMagenta10 = v.CoreMagenta10),
            (e.CoreMagenta30 = v.CoreMagenta30),
            (e.CoreMagenta40 = v.CoreMagenta40),
            (e.CoreMagenta60 = v.CoreMagenta60),
            (e.CoreMagenta70 = v.CoreMagenta70),
            (e.CoreSky1 = v.CoreSky1),
            (e.CoreSky10 = v.CoreSky10),
            (e.CoreSky20 = v.CoreSky20),
            (e.CoreSky30 = v.CoreSky30),
            (e.CoreSky40 = v.CoreSky40),
            (e.CoreSky50 = v.CoreSky50),
            (e.CoreSky60 = v.CoreSky60),
            (e.CoreSky70 = v.CoreSky70),
            (e.CoreYellowBrand1 = v.CoreYellowBrand1),
            (e.CoreYellowBrand10 = v.CoreYellowBrand10),
            (e.CoreYellowBrand20 = v.CoreYellowBrand20),
            (e.CoreYellowBrand30 = v.CoreYellowBrand30),
            (e.CoreYellowBrand40 = v.CoreYellowBrand40),
            (e.CoreYellowBrand50 = v.CoreYellowBrand50);
        })(c || (c = {})),
        (function (e) {
          (e.BadgeY = 0), (e.BadgeX = 0.25), (e.ButtonOutcomeY = 0.3125), (e.ButtonOutcomeX = 0.5), (e.ButtonPrimaryX = 0.5);
        })(s || (s = {})),
        (function (e) {
          e.Badge = "3px";
        })(d || (d = {})),
        (function (e) {
          e.ButtonSelectionRight = "1px";
        })(m || (m = {})),
        (function (e) {
          (e.H1Size = 1.75),
            (e.H1Color = "rgb(14, 16, 26)"),
            (e.H1LetterSpacing = "-0.07px"),
            (e.H1LineHeight = 2),
            (e.H1Weight = 700),
            (e.H2Size = 1.5),
            (e.H2Color = "rgb(14, 16, 26)"),
            (e.H2LetterSpacing = "-0.048000000715255745px"),
            (e.H2LineHeight = 2),
            (e.H2Weight = 700),
            (e.H3Size = 1.25),
            (e.H3Color = "rgb(14, 16, 26)"),
            (e.H3LetterSpacing = 0),
            (e.H3LineHeight = 1.5),
            (e.H3Weight = 700),
            (e.H4Size = 1),
            (e.H4Color = "rgb(14, 16, 26)"),
            (e.H4LetterSpacing = 0),
            (e.H4LineHeight = 1.5),
            (e.H4Weight = 700),
            (e.SubheadingSize = 0.625),
            (e.SubheadingColor = "rgb(77, 83, 110)"),
            (e.SubheadingLetterSpacing = "0.4px"),
            (e.SubheadingLineHeight = 1),
            (e.SubheadingWeight = 400),
            (e.BodySize = 0.875),
            (e.BodyColor = "rgb(14, 16, 26)"),
            (e.BodyLetterSpacing = 0),
            (e.BodyLineHeight = 1.5),
            (e.BodyWeight = 400),
            (e.ButtonSize = 0.875),
            (e.ButtonColor = "rgb(74, 110, 224)"),
            (e.ButtonLetterSpacing = 0),
            (e.ButtonLineHeight = 2),
            (e.ButtonWeight = 700),
            (e.ButtonTextTransform = "none"),
            (e.SmallSize = 0.75),
            (e.SmallColor = "rgb(14, 16, 26)"),
            (e.SmallLetterSpacing = 0),
            (e.SmallLineHeight = 1.125),
            (e.SmallWeight = 400),
            (e.PaperSize = 1.0625),
            (e.PaperColor = "rgb(14, 16, 26)"),
            (e.PaperLetterSpacing = 0),
            (e.PaperLineHeight = 2),
            (e.PaperWeight = 400),
            (e.ScoreSize = 1.125),
            (e.ScoreColor = "rgba(0, 0, 0, 1)"),
            (e.ScoreLetterSpacing = 0),
            (e.ScoreLineHeight = 1.25),
            (e.ScoreWeight = 700),
            (e.SmallLightSize = 0.75),
            (e.SmallLightColor = "rgba(14, 16, 26, 1)"),
            (e.SmallLightLetterSpacing = 0),
            (e.SmallLightLineHeight = 1.125),
            (e.SmallLightWeight = 300),
            (e.NewSuccessDescriptionSize = 0.75),
            (e.NewSuccessDescriptionColor = "rgba(14, 16, 26, 1)"),
            (e.NewSuccessDescriptionLetterSpacing = 0),
            (e.NewSuccessDescriptionLineHeight = 1.125),
            (e.NewSuccessDescriptionWeight = 400);
        })(u || (u = {})),
        (function (e) {
          (e.Z100 = "0 0 0 1px rgba(0, 0, 0, .05), 0 1px 8px rgba(0, 0, 0, .15)"),
            (e.Z200 = "0 0 0 1px rgba(0, 0, 0, .05), 0 2px 12px rgba(0, 0, 0, .15)"),
            (e.Z300 = "0 0 0 1px rgba(0, 0, 0, .05), 0 4px 20px rgba(0, 0, 0, .15)");
        })(h || (h = {}));
    }
  }
]);
