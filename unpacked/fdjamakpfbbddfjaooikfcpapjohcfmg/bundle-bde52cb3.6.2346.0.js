"use strict";
(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [7906],
  {
    335396: (e, t, n) => {
      n.d(t, { R: () => ee });
      var a = n(896259),
        o = n(453576),
        s = n(571450),
        i = n(496248),
        c = n(157668),
        u = n(593856),
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
        p = n(434710),
        x = n(470305),
        k = n(565766),
        y = n(816189),
        E = n(715403),
        j = n(845714),
        C = n(238554),
        O = n(569029),
        R = n(592018),
        N = n(846097),
        S = n(448430),
        T = n(573883),
        F = n(299074),
        _ = n(722499),
        A = n(252484),
        D = n(191235),
        I = n(764130),
        M = n(589193),
        q = n(351055),
        J = n(551453),
        K = n(925930),
        V = n(57904),
        Y = n(375062),
        B = n(481030),
        U = n(575962),
        z = n(571669),
        G = n(885575),
        H = n(520587),
        Q = n(970493),
        X = n(918007),
        Z = n(371795),
        W = n(76485);
      const $ = "background",
        ee = (0, a.t)($, [])
          .with({ module: o.carbonLegacyApi, on: $ })
          .with({ module: s.H, on: $ })
          .with({ module: i.M, on: $ })
          .with({ module: m.S, on: $ })
          .with({ module: w.y, on: $ })
          .with({ module: f.m, on: $ })
          .with({ module: c.d, on: $ })
          .with({ module: l.a, on: $ })
          .with({ module: h.X, on: $ })
          .with({ module: L.V, on: $ })
          .with({ module: P.F, on: $ })
          .with({ module: b.i, on: $ })
          .with({ module: v.M, on: $ })
          .with({ module: E.c, on: $ })
          .with({ module: j._, on: $ })
          .with({ module: C.V, on: $ })
          .with({ module: O.I, on: $ })
          .with({ module: R.Y, on: $ })
          .with({ module: N.G, on: $ })
          .with({ module: g.t, on: $ })
          .with({ module: X.J, on: $ })
          .with({ module: y.r, on: $ })
          .with({ module: u.f, on: $ })
          .with({ module: S.L, on: $ })
          .with({ module: T.R, on: $ })
          .with({ module: F.v, on: $ })
          .with({ module: _.e, on: $ })
          .with({ module: A.Z, on: $ })
          .with({ module: M.g, on: $ })
          .with({ module: d.J, on: $ })
          .with({ module: r.i, on: $ })
          .with({ module: U.J, on: $ })
          .with({ module: D.D, on: $ })
          .with({ module: I.j, on: $ })
          .with({ module: H.Yu, on: $ })
          .with({ module: p.Q, on: $ })
          .with({ module: q.L, on: $ })
          .with({ module: J.o, on: $ })
          .with({ module: K.a, on: $ })
          .with({ module: Q.cV, on: $ })
          .with({ module: G.B, on: $ })
          .with({ module: x.v, on: $ })
          .with({ module: V.h, on: $ })
          .with({ module: Y.t, on: $ })
          .with({ module: B.B, on: $ })
          .with({ module: z.y, on: $ })
          .with({ module: k.Y, on: $ })
          .with({ module: Z.m, on: $ })
          .with({ module: W.l, on: $ })
          .define();
    },
    148038: (e, t, n) => {
      n.d(t, { A0: () => h, Cc: () => L, K_: () => m, ae: () => a, iD: () => l, lU: () => d, qr: () => w, rq: () => r, wz: () => u });
      var a,
        o = n(58138),
        s = n(696832),
        i = n(71796);
      !(function (e) {
        e.KILLED = "killed";
      })(a || (a = {}));
      const c = s.createContext({ addLifecycleEventListener: (e) => {}, removeLifecycleEventListener: (e) => {} }),
        u = (e) => {
          const [t, n] = s.useState([]),
            i = s.useCallback(
              (e) => {
                t.forEach((t) => {
                  t(e);
                });
              },
              [t]
            ),
            { channel: u } = e;
          return (
            s.useEffect(() => (u && u.onDisconnect(() => i(a.KILLED)), () => {}), [i, u]),
            (0, o.jsx)(
              c.Provider,
              Object.assign(
                {
                  value: {
                    addLifecycleEventListener: (e) => {
                      t.push(e), n(t);
                    },
                    removeLifecycleEventListener: (e) => {
                      t.splice(t.findIndex((t) => e === t)), n(t);
                    }
                  }
                },
                { children: e.children }
              )
            )
          );
        },
        d = (e, t) => {
          const { addLifecycleEventListener: n, removeLifecycleEventListener: a } = s.useContext(c);
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
          c = s.useCallback((e) => {
            n.current && o({ error: e, status: r.Error });
          }, []);
        return (
          s.useEffect(() => {
            o({ status: r.Loading });
            const t = null !== (n = e.queryParam) && void 0 !== n ? n : null;
            var n;
            e.query(t).then(i).catch(c);
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
          c = s.useCallback((e) => {
            o({ status: l.Received, data: e });
          }, []),
          u = s.useCallback(() => {
            n.current && n.current(), (n.current = null);
          }, []);
        return (
          s.useEffect(() => {
            return o(g), e ? (u(), (n.current = e.live.on(void 0 === (t = e.liveParam) ? i.DEFAULT_PARAM : t, c)), u) : u;
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
        const [i, c] = s.useReducer(f, { status: r.Loading }),
          u = s.useRef(void 0),
          d = s.useRef([]),
          l = s.useCallback(
            (e) => {
              const t = a.on(e, (t) => {
                c({ type: "pageChanged", pageItems: t, pageToken: e });
              });
              d.current.push(t);
            },
            [a]
          ),
          h = s.useCallback(() => {
            d.current.forEach((e) => e());
          }, []),
          g = s.useCallback(async () => {
            const t = u.current;
            if (t) {
              c({ type: "nextPageLoading" });
              try {
                const n = await e(t);
                (u.current = n.nextToken), c({ type: "nextPageLoaded", nextPage: n, nextPageToken: t }), l(t);
              } catch (e) {
                c({ type: "nextPageFetchFailed", error: e });
              }
            }
          }, [e, l]),
          m = s.useCallback(async () => {
            c({ type: "firstPageLoading" }), (u.current = void 0);
            try {
              const a = await t(n),
                o = await e(a);
              (u.current = o.nextToken), c({ type: "firstPageLoaded", firstPage: o, firstPageToken: a }), l(a);
            } catch (e) {
              c({ type: "firstPageFetchFailed", error: e });
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
