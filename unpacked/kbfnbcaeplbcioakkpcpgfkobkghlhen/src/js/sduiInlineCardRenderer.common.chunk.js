(self.webpackChunk = self.webpackChunk || []).push([
  [3384],
  {
    15073: (e, t, n) => {
      n.d(t, { u: () => o });
      var o,
        i,
        r,
        u,
        a,
        s,
        c,
        d = n(27378),
        l = n(40327),
        f = n(98403),
        m = n(19751),
        p = n(2844),
        S = n(85089),
        h = n(2834),
        z = n(9223),
        C = n(5114),
        v = n(83078),
        g = n(90845);
      (i = o || (o = {})),
        (r = i.Manager =
          function (e) {
            var t = e.children,
              n = e.remSize,
              o = f.Dx(n).pipe(m.shareReplay({ refCount: !0, bufferSize: 1 }));
            return g.P.useSingleton("RemSize.Manager"), g.P.useSubscriptionTo(o), d.createElement(c.Provider, { value: o }, t);
          }),
        (i.DefaultManager = function (e) {
          var t = e.children;
          return g.P.useSingleton("RemSize.DefaultManager"), d.createElement(r, { remSize: a(u) }, t);
        }),
        (u = i.defaultSizeObserver =
          p.aj(S.Lw("(max-width: 1359px)"), S.Lw("(min-width: 1600px)"), function (e, t) {
            return e ? 14 : t ? 18 : 16;
          })),
        (a = i.withRemSizeEffect =
          function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s;
            return e.pipe(
              h.b(function (e) {
                return t(C.some(e));
              }),
              z.x(t.bind(null, C.none)),
              m.shareReplay({ refCount: !0, bufferSize: 1 })
            );
          }),
        (s = i.defaultFontSizeSetter =
          function (e) {
            o.setRootCssVar(document.documentElement, e), o.setRootFontSize(e);
          }),
        (c = i.Context = d.createContext(u)),
        (i.setRootCssVar = function (e, t) {
          e.style.setProperty("--rem", (0, l.pipe)(t, C.map(String), v.QP));
        }),
        (i.setRootFontSize = function (e) {
          document.documentElement.style.fontSize = (0, l.pipe)(
            e,
            C.map(function (e) {
              return e + "px";
            }),
            v.QP
          );
        });
    },
    73521: (e, t, n) => {
      n.r(t), n.d(t, { SduiCard: () => h });
      var o,
        i = n(27378),
        r = n(57050),
        u = n(15073),
        a = n(42103),
        s = n(76974),
        c = n(2834),
        d = n(5114),
        l = n(18702),
        f = n(33194),
        m = n(89572),
        p = n(40333);
      !(function (e) {
        e.of = (e) => e;
      })(o || (o = {}));
      const S = ({ children: e }) =>
          i.createElement(
            u.u.Manager,
            {
              remSize: (0, r.zG)(
                s.of(16),
                c.b((e) => u.u.setRootCssVar(document.documentElement, d.some(e)))
              )
            },
            i.createElement(a.G.DefaultProvider, null, e)
          ),
        h = ({ model: e }) =>
          i.createElement(
            S,
            null,
            i.createElement(l.P, {
              key: e.sdui.id,
              sduiRootId: e.sdui.id,
              content: e.sdui.content,
              prevContent: d.none,
              transitions: [],
              designSystem: { ...m.k, inlineCard: (0, p.I)(o.of(13.5), o.of(20.25)) },
              onMount: r.Q1,
              onAnimationEnd: r.Q1,
              notify: (t, n, o) => {
                const i = n.filter((e) => "positionedClick" != e.type && "hoverStateChanged" != e.type);
                e.onSduiAction(f.Oe.create(i, e.sdui.id, t, o));
              }
            })
          );
    }
  }
]);
