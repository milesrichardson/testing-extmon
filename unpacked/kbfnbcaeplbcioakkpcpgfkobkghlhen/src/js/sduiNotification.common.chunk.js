(self.webpackChunk = self.webpackChunk || []).push([
  [2905],
  {
    68037: (e, t, n) => {
      n.r(t), n.d(t, { SduiNotificationPopover: () => f });
      var o = n(27378),
        r = n(67506),
        i = n(8125),
        a = n(5114),
        d = n(66268),
        s = n(18702),
        c = n(89572),
        l = n(42103),
        p = n(68126),
        h = n(8543),
        u = n(2844),
        m = n(77176);
      const g = ({ children: e }) => o.createElement(l.G.DefaultProvider, null, e),
        v = "popover--free-trial-checklist",
        w = "weekly-streaks",
        y = [v, "popover--performance-score-gbutton-cta-with-image-inline-alerts-only", w],
        f = ({ content: e, actionsHandler: t, gButtonLayout: n }) =>
          o.createElement(
            h.F.Fragment,
            null,
            u.aj([n.positionBehavior, n.sizeBehavior]).pipe(
              m.U(([n, l]) => {
                const h = (n, o, r) => {
                    t.handleGButtonPopoverAction({ type: d.lY.Type.sduiCardAction, sourceId: n, cardId: e.id, actions: o, scope: r });
                  },
                  u = l.draggable ? l.height : l.heightAndWidth,
                  m = ((f = n.client), (k = u), { getBoundingClientRect: () => new DOMRect(f.left - k, f.top - k, k, k) });
                var f, k;
                const P = y.some((t) => e.rootPopoverId.startsWith(t)),
                  E = e.rootPopoverId.startsWith(v),
                  C = !e.rootPopoverId.startsWith(w),
                  A = E ? 400 : 220,
                  I = P ? "lightDS" : "darkDS";
                return o.createElement(
                  g,
                  { key: `${e.id}-wrapper` },
                  o.createElement(
                    "div",
                    { className: p.wrapper, "data-grammarly-part": "sduiNotificationPopup" },
                    o.createElement(r.J, {
                      showArrow: C,
                      theme: I,
                      placement: "top",
                      isOutsideReferenceElement: !0,
                      outsideReferenceElement: m,
                      boundaryAreaPadding: 8,
                      includeMainContentPadding: !1,
                      style: { width: A },
                      show: !0,
                      mainContent: o.createElement(s.P, {
                        content: e.child,
                        onMount: () => h(e.id, e.onShow || [], { alertRefs: [] }),
                        onAnimationEnd: i.Q1,
                        sduiRootId: e.id,
                        transitions: [],
                        prevContent: a.none,
                        designSystem: c.k,
                        key: e.id,
                        notify: h
                      })
                    })
                  )
                );
              })
            )
          );
    },
    68126: (e) => {
      e.exports = { wrapper: "_Niyu" };
    }
  }
]);
