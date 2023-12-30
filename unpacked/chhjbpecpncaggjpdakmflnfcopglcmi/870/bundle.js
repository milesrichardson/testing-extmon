/*! For license information please see bundle.js.LICENSE.txt */
(self.webpackChunksource = self.webpackChunksource || []).push([
  [870],
  {
    20357: (e) => {
      e.exports = { Agent: function () {} };
    },
    73634: (e) => {
      e.exports = {
        useRouter: () => {
          const { location: e } = window;
          return {
            query: (function (e) {
              const t = {};
              for (const [n, o] of e) t[n] = o;
              return t;
            })(new URLSearchParams(e.search)),
            pathname: e.pathname,
            asPath: `${e.pathname}${e.search}`
          };
        }
      };
    },
    4848: (e, t, n) => {
      "use strict";
      n.d(t, { queryClient: () => w.E, renderFeed: () => V });
      var o = n(17692),
        r = n(89526),
        a = n(73961),
        l = n(5615),
        s = n(70874),
        c = n(87992),
        i = n(18615),
        u = n(2097),
        p = n(73717),
        d = n(72601),
        m = n(37250),
        Z = n(89266),
        f = n(12090),
        h = n(52506),
        b = n(9442),
        g = n(40636),
        v = n(91063),
        k = n(21127);
      function E(e) {
        let { trackEvent: t, children: n } = e;
        return (0, v.we)("segment", { trackEvent: t }), (0, k.tZ)(r.Fragment, null, n);
      }
      var w = n(75890),
        C = n(65233),
        P = n(14615),
        S = n(28812),
        T = n(90909);
      const y = (e) => e?.includes("-xfas"),
        M = (e) => {
          if (!e || !y(e)) return e;
          const t = { tb: "yes", sourceName: "toolbar", eeid: 23509, channel: T.cJ, tb_v: P.Z.extension.version },
            n = self.popup ? self.popup.$store.state : self.EBATES;
          return (0, S.dR)(e, { ...t, ebtoken: n.settings.ebToken });
        },
        O = (e) => {
          let { children: t } = e;
          const n = (e) => {
            let { url: t } = e;
            const n = M(t);
            window.open(n, "_blank", "noopener");
          };
          return (0, k.tZ)(C.p, { value: { openNewWindow: n, pushUrl: (e) => n(e) } }, t);
        };
      var _ = n(13721),
        x = n(74710),
        R = n(41939);
      const H = (0, _.Gp)((e, t) => {
        let { href: n, onClick: r, ...a } = e;
        return (0, k.tZ)(
          x.rU,
          (0, o.Z)({ href: n, ref: t }, a, {
            target: "_blank",
            onClick: async (e) => {
              e.preventDefault(), y(n) || (await b.Z.track("Visit Page", { preceding_screen_name: "radiant_feed", url: n })), r?.(e);
              const t = M(n);
              t && (await (0, R.Z)(t), self.popup && self.popup.close());
            }
          })
        );
      });
      f.Z.setSource?.({ feedApiHost: h.Jb });
      const L = "99999999px",
        A = {
          base: "0px",
          large: L,
          largeLg: L,
          largeMd: L,
          largeSm: L,
          medium: L,
          mediumLg: L,
          mediumMd: L,
          mediumSm: L,
          smallLg: L,
          smallMd: L
        },
        B = (e) => {
          let { container: t, children: n } = e;
          const o = (0, c.Z)({ container: t, key: "c" });
          i.Z.breakpoints = A;
          const a = { isMobile: !1, isTablet: !1, isMobileOrTablet: !1, isDesktop: !0, device: "Button" };
          return (0, k.tZ)(
            r.StrictMode,
            null,
            (0, k.tZ)(
              s.C,
              { value: o },
              (0, k.tZ)(
                l.QueryClientProvider,
                { client: w.E },
                (0, k.tZ)(
                  Z.WE,
                  { value: { ua: a } },
                  (0, k.tZ)(
                    u.Z,
                    { theme: i.Z, disablePolyfills: !0 },
                    (0, k.tZ)(
                      O,
                      null,
                      (0, k.tZ)(
                        p.kB,
                        { value: H },
                        (0, k.tZ)(
                          E,
                          {
                            trackEvent: function (e) {
                              let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                              b.Z.track(e, { ...((0, g.CO)() && { url: window.popup.$store.state.currentUrl }), ...t });
                            }
                          },
                          (0, k.tZ)(d.ZP, null, (0, k.tZ)(m.Z, null), n)
                        )
                      )
                    )
                  )
                )
              )
            )
          );
        };
      var F = n(99857),
        N = n(7343),
        U = n(46542),
        $ = n(67940),
        q = n(93431),
        D = n.n(q);
      const W = { PAGE_HERO: F.ZP, SECTION_HERO: N.Z },
        G = {
          Carousel: { hidePagers: !1 },
          PageHeroCarouselTopic: { itemSpan: 8, itemContainerProps: { pb: 28 } },
          SectionHeroCarouselTopic: { itemSpan: 8, itemContainerProps: { pb: 28 } }
        };
      function J(e) {
        let { topicTemplateMap: t, componentDefaultProps: n, ...r } = e;
        const a = { ...W, ...t };
        return (0, k.tZ)(
          $.nf,
          { value: D()({}, G, n) },
          (0, k.tZ)(
            U.Z,
            (0, o.Z)(
              {
                topicTemplateMap: a,
                notFoundElement: null,
                systemErrorElement: null,
                pt: 0,
                mb: 0,
                disablePagination: !0,
                removeLastTopicBottomSpacing: !0
              },
              r
            )
          )
        );
      }
      const Q = "react-root";
      function I(e, t) {
        const n = document.createElement("div");
        (n.id = Q),
          e.appendChild(n),
          (function (e, t) {
            const n = e.attachShadow({ mode: "open" }),
              o = document.createElement("main");
            n.appendChild(o), a.render((0, k.tZ)(B, { container: n }, t), o);
          })(n, t);
      }
      function V(e, t, n) {
        I(e, (0, k.tZ)(J, (0, o.Z)({}, n, { feedSlugName: t })));
      }
    },
    75890: (e, t, n) => {
      "use strict";
      n.d(t, { E: () => o });
      const o = new (n(5615).QueryClient)({
        defaultOptions: { queries: { refetchOnMount: !1, refetchOnWindowFocus: !1, refetchOnReconnect: !1, staleTime: 3e5 } }
      });
    }
  }
]);
