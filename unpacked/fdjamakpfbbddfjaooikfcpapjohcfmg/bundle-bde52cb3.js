"use strict";
(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [7906],
  {
    335396: (e, t, n) => {
      n.d(t, { R: () => ie });
      var a = n(896259),
        o = n(545874),
        s = n(571450),
        i = n(496248),
        u = n(157668),
        c = n(593856),
        d = n(908122),
        r = n(690056),
        l = n(172721),
        h = n(348958),
        g = n(258425),
        m = n(277007),
        w = n(460384),
        f = n(818995),
        L = n(929986),
        P = n(406218),
        b = n(611433),
        v = n(69401),
        x = n(442853),
        p = n(434710),
        k = n(470305),
        y = n(565766),
        E = n(816189),
        j = n(715403),
        C = n(845714),
        O = n(238554),
        R = n(569029),
        N = n(592018),
        S = n(846097),
        T = n(448430),
        F = n(573883),
        D = n(299074),
        _ = n(722499),
        I = n(252484),
        M = n(191235),
        q = n(764130),
        A = n(589193),
        J = n(351055),
        K = n(551453),
        U = n(128510),
        V = n(925930),
        Y = n(57904),
        B = n(375062),
        G = n(481030),
        z = n(1086),
        H = n(575962),
        Q = n(571669),
        W = n(885575),
        X = n(520587),
        Z = n(970493),
        $ = n(397191),
        ee = n(650540),
        te = n(918007),
        ne = n(474281),
        ae = n(76485),
        oe = n(85176);
      const se = "background",
        ie = (0, a.t)(se, [])
          .with({ module: o.W, on: se })
          .with({ module: s.H, on: se })
          .with({ module: i.M, on: se })
          .with({ module: m.S, on: se })
          .with({ module: w.y, on: se })
          .with({ module: f.m, on: se })
          .with({ module: u.d, on: se })
          .with({ module: l.a, on: se })
          .with({ module: h.X, on: se })
          .with({ module: L.V, on: se })
          .with({ module: P.F, on: se })
          .with({ module: b.i, on: se })
          .with({ module: v.M, on: se })
          .with({ module: j.c, on: se })
          .with({ module: C._, on: se })
          .with({ module: O.V, on: se })
          .with({ module: R.I, on: se })
          .with({ module: N.Y, on: se })
          .with({ module: S.G, on: se })
          .with({ module: g.t, on: se })
          .with({ module: te.J, on: se })
          .with({ module: E.r, on: se })
          .with({ module: c.f, on: se })
          .with({ module: T.L, on: se })
          .with({ module: F.R, on: se })
          .with({ module: D.v, on: se })
          .with({ module: _.e, on: se })
          .with({ module: I.Z, on: se })
          .with({ module: A.g, on: se })
          .with({ module: d.J, on: se })
          .with({ module: r.i, on: se })
          .with({ module: H.J, on: se })
          .with({ module: M.D, on: se })
          .with({ module: q.j, on: se })
          .with({ module: X.Yu, on: se })
          .with({ module: p.Q, on: se })
          .with({ module: J.L, on: se })
          .with({ module: K.o, on: se })
          .with({ module: U.F, on: se })
          .with({ module: V.a, on: se })
          .with({ module: Z.cV, on: se })
          .with({ module: W.B, on: se })
          .with({ module: k.v, on: se })
          .with({ module: Y.h, on: se })
          .with({ module: B.t, on: se })
          .with({ module: G.B, on: se })
          .with({ module: Q.y, on: se })
          .with({ module: y.Y, on: se })
          .with({ module: ne.d, on: se })
          .with({ module: ae.l, on: se })
          .with({ module: oe.U, on: se })
          .with({ module: x.G, on: se })
          .with({ module: $.Dm, on: se })
          .with({ module: ee.J, on: se })
          .with({ module: z.R, on: se })
          .define();
    },
    148038: (e, t, n) => {
      n.d(t, { A0: () => h, Cc: () => L, K_: () => m, ae: () => a, iD: () => l, lU: () => d, qr: () => w, rq: () => r, wz: () => c });
      var a,
        o = n(58138),
        s = n(696832),
        i = n(71796);
      !(function (e) {
        e.KILLED = "killed";
      })(a || (a = {}));
      const u = s.createContext({ addLifecycleEventListener: (e) => {}, removeLifecycleEventListener: (e) => {} }),
        c = (e) => {
          const [t, n] = s.useState([]),
            i = s.useCallback(
              (e) => {
                t.forEach((t) => {
                  t(e);
                });
              },
              [t]
            ),
            { channel: c } = e;
          return (
            s.useEffect(() => (c && c.onDisconnect(() => i(a.KILLED)), () => {}), [i, c]),
            (0, o.jsx)(u.Provider, {
              value: {
                addLifecycleEventListener: (e) => {
                  t.push(e), n(t);
                },
                removeLifecycleEventListener: (e) => {
                  t.splice(t.findIndex((t) => e === t)), n(t);
                }
              },
              children: e.children
            })
          );
        },
        d = (e, t) => {
          const { addLifecycleEventListener: n, removeLifecycleEventListener: a } = s.useContext(u);
          s.useEffect(
            () => (
              n(e),
              () => {
                a(e);
              }
            ),
            [e, n, a, ...(null != t ? t : [])]
          );
        };
      var r, l;
      function h(e, t) {
        const n = s.useRef(!0);
        s.useEffect(
          () => () => {
            n.current = !1;
          },
          []
        );
        const [a, o] = s.useState({ status: r.Loading }),
          i = s.useCallback((e) => {
            n.current && o({ data: e, status: r.Success });
          }, []),
          u = s.useCallback((e) => {
            n.current && o({ error: e, status: r.Error });
          }, []);
        return (
          s.useEffect(() => {
            o({ status: r.Loading });
            const t = null !== (n = e.queryParam) && void 0 !== n ? n : null;
            var n;
            e.query(t).then(i).catch(u);
          }, t),
          a
        );
      }
      !(function (e) {
        (e.Success = "success"), (e.Loading = "loading"), (e.Error = "error");
      })(r || (r = {})),
        (function (e) {
          (e.Received = "received"), (e.NotReceived = "notReceived");
        })(l || (l = {}));
      const g = { status: l.NotReceived };
      function m(e, t) {
        const n = s.useRef(null),
          [a, o] = s.useState(g),
          u = s.useCallback((e) => {
            o({ status: l.Received, data: e });
          }, []),
          c = s.useCallback(() => {
            n.current && n.current(), (n.current = null);
          }, []);
        return (
          s.useEffect(() => {
            return o(g), e ? (c(), (n.current = e.live.on(void 0 === (t = e.liveParam) ? i.DEFAULT_PARAM : t, u)), c) : c;
            var t;
          }, t),
          a
        );
      }
      function w({ queryConfig: e, liveConfig: t }, n) {
        const a = h(e, n),
          o = m(t, n);
        return o.status === l.NotReceived || a.status !== r.Success ? a : Object.assign(Object.assign({}, a), { data: o.data });
      }
      function f(e, t) {
        switch (t.type) {
          case "firstPageLoaded":
            return {
              status: r.Success,
              data: Object.assign(Object.assign({}, e), {
                items: new Map([[t.firstPageToken, t.firstPage.batch]]),
                hasNextPage: !!t.firstPage.nextToken,
                isNextPageLoading: !1
              })
            };
          case "firstPageLoading":
            return { status: r.Loading };
          case "nextPageLoading":
            return e.status !== r.Success
              ? e
              : Object.assign(Object.assign({}, e), { data: Object.assign(Object.assign({}, e.data), { isNextPageLoading: !0 }) });
          case "nextPageLoaded":
            return e.status !== r.Success
              ? e
              : Object.assign(Object.assign({}, e), {
                  data: Object.assign(Object.assign({}, e.data), {
                    isNextPageLoading: !1,
                    hasNextPage: !!t.nextPage.nextToken,
                    items: new Map([...e.data.items, [t.nextPageToken, t.nextPage.batch]])
                  })
                });
          case "pageChanged":
            return e.status !== r.Success
              ? e
              : Object.assign(Object.assign({}, e), {
                  data: Object.assign(Object.assign({}, e.data), { items: new Map([...e.data.items, [t.pageToken, t.pageItems]]) })
                });
          case "firstPageFetchFailed":
          case "nextPageFetchFailed":
            return { status: r.Error, error: t.error };
        }
      }
      const L = ({ pageEndpoint: e, tokenEndpoint: t, tokenEndpointParam: n, batchLiveEndpoint: a }, o) => {
        const [i, u] = s.useReducer(f, { status: r.Loading }),
          c = s.useRef(void 0),
          d = s.useRef([]),
          l = s.useCallback(
            (e) => {
              const t = a.on(e, (t) => {
                u({ type: "pageChanged", pageItems: t, pageToken: e });
              });
              d.current.push(t);
            },
            [a]
          ),
          h = s.useCallback(() => {
            d.current.forEach((e) => e());
          }, []),
          g = s.useCallback(async () => {
            const t = c.current;
            if (t) {
              u({ type: "nextPageLoading" });
              try {
                const n = await e(t);
                (c.current = n.nextToken), u({ type: "nextPageLoaded", nextPage: n, nextPageToken: t }), l(t);
              } catch (e) {
                u({ type: "nextPageFetchFailed", error: e });
              }
            }
          }, [e, l]),
          m = s.useCallback(async () => {
            u({ type: "firstPageLoading" }), (c.current = void 0);
            try {
              const a = await t(n),
                o = await e(a);
              (c.current = o.nextToken), u({ type: "firstPageLoaded", firstPage: o, firstPageToken: a }), l(a);
            } catch (e) {
              u({ type: "firstPageFetchFailed", error: e });
            }
          }, [e, l, t, n]);
        return (
          s.useEffect(() => (m(), h), o),
          i.status === r.Success
            ? {
                status: r.Success,
                data: {
                  hasNextPage: i.data.hasNextPage,
                  isNextPageLoading: i.data.isNextPageLoading,
                  items: Array.from(i.data.items).reduce((e, [, t]) => e.concat(t), []),
                  loadNextPage: () => {
                    g();
                  }
                }
              }
            : i
        );
      };
    }
  }
]);
