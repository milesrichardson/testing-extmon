"use strict";
(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [464],
  {
    70464: (e, t, n) => {
      n.d(t, { rBN: () => m, S1d: () => g });
      var o = n(20144);
      function i(e) {
        return !!(0, o.nZ)() && ((0, o.EB)(e), !0);
      }
      function r(e) {
        return "function" == typeof e ? e() : (0, o.SU)(e);
      }
      o.ZP.util.warn;
      const u = "undefined" != typeof window && "undefined" != typeof document,
        l = ("undefined" != typeof WorkerGlobalScope && (globalThis, WorkerGlobalScope), (e) => null != e),
        a = Object.prototype.toString,
        s = (e) => "[object Object]" === a.call(e),
        c = () => {};
      function d(e) {
        const t = Object.create(null);
        return (n) => t[n] || (t[n] = e(n));
      }
      const f = /\B([A-Z])/g,
        v = (d((e) => e.replace(f, "-$1").toLowerCase()), /-(\w)/g);
      function p(e) {
        var t;
        const n = r(e);
        return null != (t = null == n ? void 0 : n.$el) ? t : n;
      }
      d((e) => e.replace(v, (e, t) => (t ? t.toUpperCase() : ""))), o.ZP.util.warn;
      const w = u ? window : void 0;
      function h(...e) {
        let t, n, u, l;
        if (("string" == typeof e[0] || Array.isArray(e[0]) ? (([n, u, l] = e), (t = w)) : ([t, n, u, l] = e), !t)) return c;
        Array.isArray(n) || (n = [n]), Array.isArray(u) || (u = [u]);
        const a = [],
          d = () => {
            a.forEach((e) => e()), (a.length = 0);
          },
          f = (0, o.YP)(
            () => [p(t), r(l)],
            ([e, t]) => {
              if ((d(), !e)) return;
              const o = s(t) ? { ...t } : t;
              a.push(
                ...n.flatMap((t) =>
                  u.map((n) => ((e, t, n, o) => (e.addEventListener(t, n, o), () => e.removeEventListener(t, n, o)))(e, t, n, o))
                )
              );
            },
            { immediate: !0, flush: "post" }
          ),
          v = () => {
            f(), d();
          };
        return i(v), v;
      }
      function b(e) {
        const t = (function () {
          const e = (0, o.iH)(!1);
          return (
            (0, o.FN)() &&
              (0, o.bv)(() => {
                e.value = !0;
              }),
            e
          );
        })();
        return (0, o.Fl)(() => (t.value, Boolean(e())));
      }
      function m(e, t = {}) {
        const { reset: n = !0, windowResize: r = !0, windowScroll: u = !0, immediate: l = !0 } = t,
          a = (0, o.iH)(0),
          s = (0, o.iH)(0),
          c = (0, o.iH)(0),
          d = (0, o.iH)(0),
          f = (0, o.iH)(0),
          v = (0, o.iH)(0),
          m = (0, o.iH)(0),
          g = (0, o.iH)(0);
        function y() {
          const t = p(e);
          if (!t)
            return void (
              n && ((a.value = 0), (s.value = 0), (c.value = 0), (d.value = 0), (f.value = 0), (v.value = 0), (m.value = 0), (g.value = 0))
            );
          const o = t.getBoundingClientRect();
          (a.value = o.height),
            (s.value = o.bottom),
            (c.value = o.left),
            (d.value = o.right),
            (f.value = o.top),
            (v.value = o.width),
            (m.value = o.x),
            (g.value = o.y);
        }
        return (
          (function (e, t, n = {}) {
            const { window: r = w, ...u } = n;
            let l;
            const a = b(() => r && "ResizeObserver" in r),
              s = () => {
                l && (l.disconnect(), (l = void 0));
              },
              c = (0, o.Fl)(() => (Array.isArray(e) ? e.map((e) => p(e)) : [p(e)])),
              d = (0, o.YP)(
                c,
                (e) => {
                  if ((s(), a.value && r)) {
                    l = new ResizeObserver(t);
                    for (const t of e) t && l.observe(t, u);
                  }
                },
                { immediate: !0, flush: "post", deep: !0 }
              ),
              f = () => {
                s(), d();
              };
            i(f);
          })(e, y),
          (0, o.YP)(
            () => p(e),
            (e) => !e && y()
          ),
          u && h("scroll", y, { capture: !0, passive: !0 }),
          r && h("resize", y, { passive: !0 }),
          (function (e, t = !0) {
            (0, o.FN)() ? (0, o.bv)(e) : t ? e() : (0, o.Y3)(e);
          })(() => {
            l && y();
          }),
          { height: a, bottom: s, left: c, right: d, top: f, width: v, x: m, y: g, update: y }
        );
      }
      function g(e, t, n = {}) {
        const { root: u, rootMargin: a = "0px", threshold: s = 0.1, window: d = w, immediate: f = !0 } = n,
          v = b(() => d && "IntersectionObserver" in d),
          h = (0, o.Fl)(() => {
            const t = r(e);
            return (Array.isArray(t) ? t : [t]).map(p).filter(l);
          });
        let m = c;
        const g = (0, o.iH)(f),
          y = v.value
            ? (0, o.YP)(
                () => [h.value, p(u), g.value],
                ([e, n]) => {
                  if ((m(), !g.value)) return;
                  if (!e.length) return;
                  const o = new IntersectionObserver(t, { root: p(n), rootMargin: a, threshold: s });
                  e.forEach((e) => e && o.observe(e)),
                    (m = () => {
                      o.disconnect(), (m = c);
                    });
                },
                { immediate: f, flush: "post" }
              )
            : c,
          A = () => {
            m(), y(), (g.value = !1);
          };
        return (
          i(A),
          {
            isSupported: v,
            isActive: g,
            pause() {
              m(), (g.value = !1);
            },
            resume() {
              g.value = !0;
            },
            stop: A
          }
        );
      }
      u && window.document,
        u && window.navigator,
        u && window.location,
        "undefined" != typeof globalThis
          ? globalThis
          : "undefined" != typeof window
          ? window
          : "undefined" != typeof global
          ? global
          : "undefined" != typeof self && self,
        Number.POSITIVE_INFINITY;
    }
  }
]);
