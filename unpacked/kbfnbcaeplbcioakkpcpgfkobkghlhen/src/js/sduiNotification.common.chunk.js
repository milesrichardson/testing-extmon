(self.webpackChunk = self.webpackChunk || []).push([
  [2905],
  {
    68037: (e, t, o) => {
      o.r(t), o.d(t, { SduiNotificationPopover: () => f });
      var n = o(27378),
        a = o(67506),
        r = o(8125),
        i = o(5114),
        d = o(66268),
        s = o(18702),
        p = o(89572),
        l = o(42103),
        c = o(68126),
        g = o(8543),
        h = o(2844),
        y = o(77176);
      const m = ({ children: e }) => n.createElement(l.G.DefaultProvider, null, e),
        u = "popover--free-trial-checklist",
        k = "weekly-streaks",
        w = [u, "popover--performance-score-gbutton-cta-with-image-inline-alerts-only", k],
        f = ({ content: e, actionsHandler: t, gButtonLayout: o }) =>
          n.createElement(
            g.F.Fragment,
            null,
            h.aj([o.positionBehavior, o.sizeBehavior]).pipe(
              y.U(([o, l]) => {
                const g = (o, n, a) => {
                    t.handleGButtonPopoverAction({ type: d.lY.Type.sduiCardAction, sourceId: o, cardId: e.id, actions: n, scope: a });
                  },
                  h = l.draggable ? l.height : l.heightAndWidth,
                  y = ((f = o.client), (v = h), { getBoundingClientRect: () => new DOMRect(f.left - v, f.top - v, v, v) });
                var f, v;
                const P = w.some((t) => e.rootPopoverId.startsWith(t)),
                  E = e.rootPopoverId.startsWith(u),
                  C = !e.rootPopoverId.startsWith(k),
                  x = E ? 400 : 220,
                  I = P ? "lightDS" : "darkDS";
                return n.createElement(
                  m,
                  { key: `${e.id}-wrapper` },
                  n.createElement(
                    "div",
                    { className: c.wrapper, "data-grammarly-part": "sduiNotificationPopup" },
                    n.createElement(a.J, {
                      showArrow: C,
                      theme: I,
                      placement: "top",
                      isOutsideReferenceElement: !0,
                      outsideReferenceElement: y,
                      boundaryAreaPadding: 8,
                      includeMainContentPadding: !1,
                      style: { width: x },
                      show: !0,
                      mainContent: n.createElement(s.P, {
                        content: e.child,
                        onMount: () => g(e.id, e.onShow || [], { alertRefs: [] }),
                        onAnimationEnd: r.Q1,
                        sduiRootId: e.id,
                        transitions: [],
                        prevContent: i.none,
                        designSystem: p.k,
                        key: e.id,
                        notify: g
                      })
                    })
                  )
                );
              })
            )
          );
    },
    68126: (e) => {
      e.exports = {
        "gds-token-typography-heading-large": "SZeCq",
        "gds-token-typography-heading-medium": "WdrHM",
        "gds-token-typography-heading-small": "Uehmf",
        "gds-token-typography-heading-x-small": "fw7RG",
        "gds-token-typography-text-large": "LeMiI",
        "gds-token-typography-text-medium": "a0k_b",
        "gds-token-typography-text-small": "wtn1a",
        "gds-token-typography-text-x-small": "Z1i0y",
        wrapper: "_Niyu"
      };
    }
  }
]);
