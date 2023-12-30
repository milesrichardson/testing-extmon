(self.webpackChunk = self.webpackChunk || []).push([
  [7470, 2905],
  {
    6586: (e, t, a) => {
      a.r(t), a.d(t, { PlagiarismButton: () => f });
      var i = a(27378),
        r = a(89894);
      if (3075 == a.j) var n = a(90845);
      if (3075 == a.j) var o = a(64757);
      if (3075 == a.j) var l = a(8543);
      var s = a(88392),
        d = a(9546);
      if (3075 == a.j) var g = a(62172);
      if (3075 == a.j) var c = a(5114);
      if (3075 == a.j) var p = a(19962);
      if (3075 == a.j) var C = a(80900);
      if (3075 == a.j) var m = a(598);
      if (3075 == a.j) var h = a(77176);
      if (3075 == a.j) var u = a(28043);
      if (3075 == a.j) var v = a(60797);
      if (3075 == a.j) var H = a(68037);
      const M = {
          display: "flex",
          alignContent: "center",
          borderRadius: r.ux.rem(s.HP),
          width: r.ux.rem(6.25),
          height: r.ux.rem(d.Ze),
          padding: `0 ${r.ux.rem(d.F2)}`,
          gap: r.ux.rem(d.F2),
          fontSize: r.ux.rem(d.qp),
          lineHeight: r.ux.rem(1.125)
        },
        f = ({
          showPlagiarismButton: e,
          openPlagiarismPage: t,
          isPlagiarismPageActive: a,
          closePlagiarismPage: o,
          popover: s,
          popoverActionsHandler: d
        }) => {
          const { ref: g, onMount: M } = n.P.useElWatcher(),
            f = C.H(0, 500).pipe(m.c(g), h.U(c.map((e) => e.getBoundingClientRect())), u.x(c.getEq(p.UL.eq).equals), v.oA);
          return i.createElement(
            l.F.div,
            { "data-grammarly-part": "plagiarism-button", style: { marginRight: r.ux.rem(1) } },
            e.view(
              (e) =>
                e &&
                i.createElement(
                  i.Fragment,
                  null,
                  i.createElement(
                    l.F.Fragment,
                    null,
                    s.pipe(
                      h.U(
                        (e) =>
                          c.isSome(e) &&
                          i.createElement(H.SduiNotificationPopover, {
                            content: e.value,
                            actionsHandler: d,
                            gButtonLayout: {
                              positionBehavior: f.pipe(
                                h.U((e) => ({
                                  draggable: !1,
                                  page: { left: 0, top: 0, _pageKind: null },
                                  client: { left: e.left + e.width / 2 - 8, top: e.top, kind: "clientPoint" },
                                  effectivePadding: { top: 0, right: 0, bottom: 0, left: 0 }
                                }))
                              ),
                              sizeBehavior: f.pipe(h.U(() => ({ draggable: !0, height: 0, width: 0 })))
                            }
                          })
                      )
                    )
                  ),
                  i.createElement(
                    l.F.Fragment,
                    null,
                    a.view((e) =>
                      i.createElement("div", { ref: M }, i.createElement(y, { isActive: e, closePlagiarismPage: o, openPlagiarismPage: t }))
                    )
                  )
                )
            )
          );
        },
        y = ({ isActive: e, closePlagiarismPage: t, openPlagiarismPage: a }) => {
          const n = e
            ? {
                clickHandler: t,
                styles: { ...M, background: "#EDF5FF", color: g.Blue60, border: `${r.ux.rem(0.0625)} solid ${g.Blue60}` },
                plagiarismIcon: Z
              }
            : { clickHandler: a, styles: { ...M, border: `${r.ux.rem(0.0625)} solid black`, color: "black" }, plagiarismIcon: w };
          return i.createElement(
            o.zx.Tertiary,
            { onClick: n.clickHandler, style: n.styles },
            n.plagiarismIcon,
            i.createElement("div", null, i.createElement("b", null, "Plagiarism"))
          );
        },
        Z = i.createElement(
          "svg",
          { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
          i.createElement("path", {
            d: "M11.4286 8.57141L11.9023 8.73124L12.1249 8.07141H11.4286V8.57141ZM9.07142 10.4865L8.97515 9.99585C8.7406 10.0419 8.57142 10.2475 8.57142 10.4865H9.07142ZM9.07142 12H8.57142C8.57142 12.1517 8.64026 12.2951 8.75857 12.39C8.87689 12.4849 9.03188 12.521 9.17993 12.4881L9.07142 12ZM4.57143 8.57141L5.04519 8.73124L5.2678 8.07141H4.57143V8.57141ZM2.21427 10.4865L2.11801 9.99585C1.88345 10.0419 1.71427 10.2475 1.71427 10.4865H2.21427ZM2.21427 12H1.71427C1.71427 12.1517 1.78312 12.2951 1.90143 12.39C2.01974 12.4849 2.17473 12.521 2.32279 12.4881L2.21427 12ZM10.9548 8.41158C10.8101 8.84064 10.5943 9.17257 10.2921 9.42571C9.9875 9.6808 9.56638 9.87985 8.97515 9.99585L9.16768 10.9771C9.88321 10.8368 10.4714 10.5799 10.9342 10.1923C11.3992 9.80285 11.7086 9.30543 11.9023 8.73124L10.9548 8.41158ZM8.57142 10.4865V12H9.57142V10.4865H8.57142ZM9.17993 12.4881C11.6249 11.9445 12.9819 10.7695 13.7102 9.50267C14.4268 8.25634 14.5 6.98115 14.5 6.28571H13.5C13.5 6.91746 13.4303 7.98329 12.8433 9.00424C12.2681 10.0047 11.1608 11.0233 8.9629 11.5119L9.17993 12.4881ZM11.4286 8.07141C10.2276 8.07141 9.35714 7.21819 9.35714 6.28571H8.35714C8.35714 7.87795 9.78926 9.07141 11.4286 9.07141V8.07141ZM9.35714 6.28571C9.35714 5.35323 10.2276 4.5 11.4286 4.5V3.5C9.78926 3.5 8.35714 4.69346 8.35714 6.28571H9.35714ZM11.4286 4.5C12.6394 4.5 13.5 5.29703 13.5 6.28571H14.5C14.5 4.61998 13.0581 3.5 11.4286 3.5V4.5ZM4.09766 8.41158C3.95291 8.84064 3.73715 9.17257 3.43492 9.42571C3.13035 9.6808 2.70924 9.87985 2.11801 9.99585L2.31054 10.9771C3.02607 10.8368 3.6143 10.5799 4.07701 10.1923C4.54204 9.80285 4.85148 9.30543 5.04519 8.73124L4.09766 8.41158ZM1.71427 10.4865V12H2.71427V10.4865H1.71427ZM2.32279 12.4881C4.76776 11.9445 6.12473 10.7695 6.8531 9.50267C7.56969 8.25634 7.64286 6.98115 7.64286 6.28571H6.64286C6.64286 6.91746 6.57317 7.98329 5.98618 9.00424C5.41098 10.0047 4.30365 11.0233 2.10576 11.5119L2.32279 12.4881ZM4.57143 8.07141C3.37042 8.07141 2.5 7.21819 2.5 6.28571H1.5C1.5 7.87795 2.93212 9.07141 4.57143 9.07141V8.07141ZM2.5 6.28571C2.5 5.35323 3.37042 4.5 4.57143 4.5V3.5C2.93212 3.5 1.5 4.69346 1.5 6.28571H2.5ZM4.57143 4.5C5.78226 4.5 6.64286 5.29703 6.64286 6.28571H7.64286C7.64286 4.61998 6.20092 3.5 4.57143 3.5V4.5Z",
            fill: "#2551DA"
          })
        ),
        w = i.createElement(
          "svg",
          { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
          i.createElement("path", {
            d: "M11.4286 8.57141L11.9023 8.73124L12.1249 8.07141H11.4286V8.57141ZM9.07142 10.4865L8.97515 9.99585C8.7406 10.0419 8.57142 10.2475 8.57142 10.4865H9.07142ZM9.07142 12H8.57142C8.57142 12.1517 8.64026 12.2951 8.75857 12.39C8.87689 12.4849 9.03188 12.521 9.17993 12.4881L9.07142 12ZM4.57143 8.57141L5.04519 8.73124L5.2678 8.07141H4.57143V8.57141ZM2.21427 10.4865L2.11801 9.99585C1.88345 10.0419 1.71427 10.2475 1.71427 10.4865H2.21427ZM2.21427 12H1.71427C1.71427 12.1517 1.78312 12.2951 1.90143 12.39C2.01974 12.4849 2.17473 12.521 2.32279 12.4881L2.21427 12ZM10.9548 8.41158C10.8101 8.84064 10.5943 9.17257 10.2921 9.42571C9.9875 9.6808 9.56638 9.87985 8.97515 9.99585L9.16768 10.9771C9.88321 10.8368 10.4714 10.5799 10.9342 10.1923C11.3992 9.80285 11.7086 9.30543 11.9023 8.73124L10.9548 8.41158ZM8.57142 10.4865V12H9.57142V10.4865H8.57142ZM9.17993 12.4881C11.6249 11.9445 12.9819 10.7695 13.7102 9.50267C14.4268 8.25634 14.5 6.98115 14.5 6.28571H13.5C13.5 6.91746 13.4303 7.98329 12.8433 9.00424C12.2681 10.0047 11.1608 11.0233 8.9629 11.5119L9.17993 12.4881ZM11.4286 8.07141C10.2276 8.07141 9.35714 7.21819 9.35714 6.28571H8.35714C8.35714 7.87795 9.78926 9.07141 11.4286 9.07141V8.07141ZM9.35714 6.28571C9.35714 5.35323 10.2276 4.5 11.4286 4.5V3.5C9.78926 3.5 8.35714 4.69346 8.35714 6.28571H9.35714ZM11.4286 4.5C12.6394 4.5 13.5 5.29703 13.5 6.28571H14.5C14.5 4.61998 13.0581 3.5 11.4286 3.5V4.5ZM4.09766 8.41158C3.95291 8.84064 3.73715 9.17257 3.43492 9.42571C3.13035 9.6808 2.70924 9.87985 2.11801 9.99585L2.31054 10.9771C3.02607 10.8368 3.6143 10.5799 4.07701 10.1923C4.54204 9.80285 4.85148 9.30543 5.04519 8.73124L4.09766 8.41158ZM1.71427 10.4865V12H2.71427V10.4865H1.71427ZM2.32279 12.4881C4.76776 11.9445 6.12473 10.7695 6.8531 9.50267C7.56969 8.25634 7.64286 6.98115 7.64286 6.28571H6.64286C6.64286 6.91746 6.57317 7.98329 5.98618 9.00424C5.41098 10.0047 4.30365 11.0233 2.10576 11.5119L2.32279 12.4881ZM4.57143 8.07141C3.37042 8.07141 2.5 7.21819 2.5 6.28571H1.5C1.5 7.87795 2.93212 9.07141 4.57143 9.07141V8.07141ZM2.5 6.28571C2.5 5.35323 3.37042 4.5 4.57143 4.5V3.5C2.93212 3.5 1.5 4.69346 1.5 6.28571H2.5ZM4.57143 4.5C5.78226 4.5 6.64286 5.29703 6.64286 6.28571H7.64286C7.64286 4.61998 6.20092 3.5 4.57143 3.5V4.5Z",
            fill: "#646B81"
          })
        );
    },
    68037: (e, t, a) => {
      a.r(t), a.d(t, { SduiNotificationPopover: () => M });
      var i = a(27378),
        r = a(67506),
        n = a(8125),
        o = a(5114),
        l = a(66268),
        s = a(18702),
        d = a(89572),
        g = a(42103),
        c = a(68126),
        p = a(8543),
        C = a(2844),
        m = a(77176);
      const h = ({ children: e }) => i.createElement(g.G.DefaultProvider, null, e),
        u = "popover--free-trial-checklist",
        v = "weekly-streaks",
        H = [u, "popover--performance-score-gbutton-cta-with-image-inline-alerts-only", v],
        M = ({ content: e, actionsHandler: t, gButtonLayout: a }) =>
          i.createElement(
            p.F.Fragment,
            null,
            C.aj([a.positionBehavior, a.sizeBehavior]).pipe(
              m.U(([a, g]) => {
                const p = (a, i, r) => {
                    t.handleGButtonPopoverAction({ type: l.lY.Type.sduiCardAction, sourceId: a, cardId: e.id, actions: i, scope: r });
                  },
                  C = g.draggable ? g.height : g.heightAndWidth,
                  m = ((M = a.client), (f = C), { getBoundingClientRect: () => new DOMRect(M.left - f, M.top - f, f, f) });
                var M, f;
                const y = H.some((t) => e.rootPopoverId.startsWith(t)),
                  Z = e.rootPopoverId.startsWith(u),
                  w = !e.rootPopoverId.startsWith(v),
                  L = Z ? 400 : 220,
                  P = y ? "lightDS" : "darkDS";
                return i.createElement(
                  h,
                  { key: `${e.id}-wrapper` },
                  i.createElement(
                    "div",
                    { className: c.wrapper, "data-grammarly-part": "sduiNotificationPopup" },
                    i.createElement(r.J, {
                      showArrow: w,
                      theme: P,
                      placement: "top",
                      isOutsideReferenceElement: !0,
                      outsideReferenceElement: m,
                      boundaryAreaPadding: 8,
                      includeMainContentPadding: !1,
                      style: { width: L },
                      show: !0,
                      mainContent: i.createElement(s.P, {
                        content: e.child,
                        onMount: () => p(e.id, e.onShow || [], { alertRefs: [] }),
                        onAnimationEnd: n.Q1,
                        sduiRootId: e.id,
                        transitions: [],
                        prevContent: o.none,
                        designSystem: d.k,
                        key: e.id,
                        notify: p
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
