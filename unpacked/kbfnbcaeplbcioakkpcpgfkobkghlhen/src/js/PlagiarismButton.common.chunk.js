(self.webpackChunk = self.webpackChunk || []).push([
  [7470, 2905],
  {
    6586: (e, t, i) => {
      i.r(t), i.d(t, { PlagiarismButton: () => f });
      var a = i(27378),
        r = i(89894);
      if (3075 == i.j) var n = i(90845);
      if (3075 == i.j) var o = i(64757);
      if (3075 == i.j) var l = i(8543);
      var s = i(88392),
        c = i(9546);
      if (3075 == i.j) var C = i(62172);
      if (3075 == i.j) var d = i(5114);
      if (3075 == i.j) var p = i(19962);
      if (3075 == i.j) var g = i(80900);
      if (3075 == i.j) var m = i(598);
      if (3075 == i.j) var u = i(77176);
      if (3075 == i.j) var v = i(28043);
      if (3075 == i.j) var h = i(60797);
      if (3075 == i.j) var H = i(68037);
      const M = {
          display: "flex",
          alignContent: "center",
          borderRadius: r.ux.rem(s.HP),
          width: r.ux.rem(6.25),
          height: r.ux.rem(c.Ze),
          padding: `0 ${r.ux.rem(c.F2)}`,
          gap: r.ux.rem(c.F2),
          fontSize: r.ux.rem(c.qp),
          lineHeight: r.ux.rem(1.125)
        },
        f = ({
          showPlagiarismButton: e,
          openPlagiarismPage: t,
          isPlagiarismPageActive: i,
          closePlagiarismPage: o,
          popover: s,
          popoverActionsHandler: c
        }) => {
          const { ref: C, onMount: M } = n.P.useElWatcher(),
            f = g.H(0, 500).pipe(m.c(C), u.U(d.map((e) => e.getBoundingClientRect())), v.x(d.getEq(p.UL.eq).equals), h.oA);
          return a.createElement(
            l.F.div,
            { style: { marginRight: r.ux.rem(1) } },
            e.view(
              (e) =>
                e &&
                a.createElement(
                  a.Fragment,
                  null,
                  a.createElement(
                    l.F.Fragment,
                    null,
                    s.pipe(
                      u.U(
                        (e) =>
                          d.isSome(e) &&
                          a.createElement(H.SduiNotificationPopover, {
                            content: e.value,
                            actionsHandler: c,
                            gButtonLayout: {
                              positionBehavior: f.pipe(
                                u.U((e) => ({
                                  draggable: !1,
                                  page: { left: 0, top: 0, _pageKind: null },
                                  client: { left: e.left + e.width / 2 - 8, top: e.top, kind: "clientPoint" },
                                  effectivePadding: { top: 0, right: 0, bottom: 0, left: 0 }
                                }))
                              ),
                              sizeBehavior: f.pipe(u.U(() => ({ draggable: !0, height: 0, width: 0 })))
                            }
                          })
                      )
                    )
                  ),
                  a.createElement(
                    l.F.Fragment,
                    null,
                    i.view((e) =>
                      a.createElement("div", { ref: M }, a.createElement(Z, { isActive: e, closePlagiarismPage: o, openPlagiarismPage: t }))
                    )
                  )
                )
            )
          );
        },
        Z = ({ isActive: e, closePlagiarismPage: t, openPlagiarismPage: i }) => {
          const n = e
            ? {
                clickHandler: t,
                styles: { ...M, background: "#EDF5FF", color: C.Blue60, border: `${r.ux.rem(0.0625)} solid ${C.Blue60}` },
                plagiarismIcon: P
              }
            : { clickHandler: i, styles: { ...M, border: `${r.ux.rem(0.0625)} solid black`, color: "black" }, plagiarismIcon: w };
          return a.createElement(
            o.zx.Tertiary,
            { onClick: n.clickHandler, style: n.styles },
            n.plagiarismIcon,
            a.createElement("div", null, a.createElement("b", null, "Plagiarism"))
          );
        },
        P = a.createElement(
          "svg",
          { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
          a.createElement("path", {
            d: "M11.4286 8.57141L11.9023 8.73124L12.1249 8.07141H11.4286V8.57141ZM9.07142 10.4865L8.97515 9.99585C8.7406 10.0419 8.57142 10.2475 8.57142 10.4865H9.07142ZM9.07142 12H8.57142C8.57142 12.1517 8.64026 12.2951 8.75857 12.39C8.87689 12.4849 9.03188 12.521 9.17993 12.4881L9.07142 12ZM4.57143 8.57141L5.04519 8.73124L5.2678 8.07141H4.57143V8.57141ZM2.21427 10.4865L2.11801 9.99585C1.88345 10.0419 1.71427 10.2475 1.71427 10.4865H2.21427ZM2.21427 12H1.71427C1.71427 12.1517 1.78312 12.2951 1.90143 12.39C2.01974 12.4849 2.17473 12.521 2.32279 12.4881L2.21427 12ZM10.9548 8.41158C10.8101 8.84064 10.5943 9.17257 10.2921 9.42571C9.9875 9.6808 9.56638 9.87985 8.97515 9.99585L9.16768 10.9771C9.88321 10.8368 10.4714 10.5799 10.9342 10.1923C11.3992 9.80285 11.7086 9.30543 11.9023 8.73124L10.9548 8.41158ZM8.57142 10.4865V12H9.57142V10.4865H8.57142ZM9.17993 12.4881C11.6249 11.9445 12.9819 10.7695 13.7102 9.50267C14.4268 8.25634 14.5 6.98115 14.5 6.28571H13.5C13.5 6.91746 13.4303 7.98329 12.8433 9.00424C12.2681 10.0047 11.1608 11.0233 8.9629 11.5119L9.17993 12.4881ZM11.4286 8.07141C10.2276 8.07141 9.35714 7.21819 9.35714 6.28571H8.35714C8.35714 7.87795 9.78926 9.07141 11.4286 9.07141V8.07141ZM9.35714 6.28571C9.35714 5.35323 10.2276 4.5 11.4286 4.5V3.5C9.78926 3.5 8.35714 4.69346 8.35714 6.28571H9.35714ZM11.4286 4.5C12.6394 4.5 13.5 5.29703 13.5 6.28571H14.5C14.5 4.61998 13.0581 3.5 11.4286 3.5V4.5ZM4.09766 8.41158C3.95291 8.84064 3.73715 9.17257 3.43492 9.42571C3.13035 9.6808 2.70924 9.87985 2.11801 9.99585L2.31054 10.9771C3.02607 10.8368 3.6143 10.5799 4.07701 10.1923C4.54204 9.80285 4.85148 9.30543 5.04519 8.73124L4.09766 8.41158ZM1.71427 10.4865V12H2.71427V10.4865H1.71427ZM2.32279 12.4881C4.76776 11.9445 6.12473 10.7695 6.8531 9.50267C7.56969 8.25634 7.64286 6.98115 7.64286 6.28571H6.64286C6.64286 6.91746 6.57317 7.98329 5.98618 9.00424C5.41098 10.0047 4.30365 11.0233 2.10576 11.5119L2.32279 12.4881ZM4.57143 8.07141C3.37042 8.07141 2.5 7.21819 2.5 6.28571H1.5C1.5 7.87795 2.93212 9.07141 4.57143 9.07141V8.07141ZM2.5 6.28571C2.5 5.35323 3.37042 4.5 4.57143 4.5V3.5C2.93212 3.5 1.5 4.69346 1.5 6.28571H2.5ZM4.57143 4.5C5.78226 4.5 6.64286 5.29703 6.64286 6.28571H7.64286C7.64286 4.61998 6.20092 3.5 4.57143 3.5V4.5Z",
            fill: "#2551DA"
          })
        ),
        w = a.createElement(
          "svg",
          { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
          a.createElement("path", {
            d: "M11.4286 8.57141L11.9023 8.73124L12.1249 8.07141H11.4286V8.57141ZM9.07142 10.4865L8.97515 9.99585C8.7406 10.0419 8.57142 10.2475 8.57142 10.4865H9.07142ZM9.07142 12H8.57142C8.57142 12.1517 8.64026 12.2951 8.75857 12.39C8.87689 12.4849 9.03188 12.521 9.17993 12.4881L9.07142 12ZM4.57143 8.57141L5.04519 8.73124L5.2678 8.07141H4.57143V8.57141ZM2.21427 10.4865L2.11801 9.99585C1.88345 10.0419 1.71427 10.2475 1.71427 10.4865H2.21427ZM2.21427 12H1.71427C1.71427 12.1517 1.78312 12.2951 1.90143 12.39C2.01974 12.4849 2.17473 12.521 2.32279 12.4881L2.21427 12ZM10.9548 8.41158C10.8101 8.84064 10.5943 9.17257 10.2921 9.42571C9.9875 9.6808 9.56638 9.87985 8.97515 9.99585L9.16768 10.9771C9.88321 10.8368 10.4714 10.5799 10.9342 10.1923C11.3992 9.80285 11.7086 9.30543 11.9023 8.73124L10.9548 8.41158ZM8.57142 10.4865V12H9.57142V10.4865H8.57142ZM9.17993 12.4881C11.6249 11.9445 12.9819 10.7695 13.7102 9.50267C14.4268 8.25634 14.5 6.98115 14.5 6.28571H13.5C13.5 6.91746 13.4303 7.98329 12.8433 9.00424C12.2681 10.0047 11.1608 11.0233 8.9629 11.5119L9.17993 12.4881ZM11.4286 8.07141C10.2276 8.07141 9.35714 7.21819 9.35714 6.28571H8.35714C8.35714 7.87795 9.78926 9.07141 11.4286 9.07141V8.07141ZM9.35714 6.28571C9.35714 5.35323 10.2276 4.5 11.4286 4.5V3.5C9.78926 3.5 8.35714 4.69346 8.35714 6.28571H9.35714ZM11.4286 4.5C12.6394 4.5 13.5 5.29703 13.5 6.28571H14.5C14.5 4.61998 13.0581 3.5 11.4286 3.5V4.5ZM4.09766 8.41158C3.95291 8.84064 3.73715 9.17257 3.43492 9.42571C3.13035 9.6808 2.70924 9.87985 2.11801 9.99585L2.31054 10.9771C3.02607 10.8368 3.6143 10.5799 4.07701 10.1923C4.54204 9.80285 4.85148 9.30543 5.04519 8.73124L4.09766 8.41158ZM1.71427 10.4865V12H2.71427V10.4865H1.71427ZM2.32279 12.4881C4.76776 11.9445 6.12473 10.7695 6.8531 9.50267C7.56969 8.25634 7.64286 6.98115 7.64286 6.28571H6.64286C6.64286 6.91746 6.57317 7.98329 5.98618 9.00424C5.41098 10.0047 4.30365 11.0233 2.10576 11.5119L2.32279 12.4881ZM4.57143 8.07141C3.37042 8.07141 2.5 7.21819 2.5 6.28571H1.5C1.5 7.87795 2.93212 9.07141 4.57143 9.07141V8.07141ZM2.5 6.28571C2.5 5.35323 3.37042 4.5 4.57143 4.5V3.5C2.93212 3.5 1.5 4.69346 1.5 6.28571H2.5ZM4.57143 4.5C5.78226 4.5 6.64286 5.29703 6.64286 6.28571H7.64286C7.64286 4.61998 6.20092 3.5 4.57143 3.5V4.5Z",
            fill: "#646B81"
          })
        );
    },
    68037: (e, t, i) => {
      i.r(t), i.d(t, { SduiNotificationPopover: () => M });
      var a = i(27378),
        r = i(67506),
        n = i(8125),
        o = i(5114),
        l = i(66268),
        s = i(18702),
        c = i(89572),
        C = i(42103),
        d = i(68126),
        p = i(8543),
        g = i(2844),
        m = i(77176);
      const u = ({ children: e }) => a.createElement(C.G.DefaultProvider, null, e),
        v = "popover--free-trial-checklist",
        h = "weekly-streaks",
        H = [v, "popover--performance-score-gbutton-cta-with-image-inline-alerts-only", h],
        M = ({ content: e, actionsHandler: t, gButtonLayout: i }) =>
          a.createElement(
            p.F.Fragment,
            null,
            g.aj([i.positionBehavior, i.sizeBehavior]).pipe(
              m.U(([i, C]) => {
                const p = (i, a, r) => {
                    t.handleGButtonPopoverAction({ type: l.lY.Type.sduiCardAction, sourceId: i, cardId: e.id, actions: a, scope: r });
                  },
                  g = C.draggable ? C.height : C.heightAndWidth,
                  m = ((M = i.client), (f = g), { getBoundingClientRect: () => new DOMRect(M.left - f, M.top - f, f, f) });
                var M, f;
                const Z = H.some((t) => e.rootPopoverId.startsWith(t)),
                  P = e.rootPopoverId.startsWith(v),
                  w = !e.rootPopoverId.startsWith(h),
                  L = P ? 400 : 220,
                  E = Z ? "lightDS" : "darkDS";
                return a.createElement(
                  u,
                  { key: `${e.id}-wrapper` },
                  a.createElement(
                    "div",
                    { className: d.wrapper, "data-grammarly-part": "sduiNotificationPopup" },
                    a.createElement(r.J, {
                      showArrow: w,
                      theme: E,
                      placement: "top",
                      isOutsideReferenceElement: !0,
                      outsideReferenceElement: m,
                      boundaryAreaPadding: 8,
                      includeMainContentPadding: !1,
                      style: { width: L },
                      show: !0,
                      mainContent: a.createElement(s.P, {
                        content: e.child,
                        onMount: () => p(e.id, e.onShow || [], { alertRefs: [] }),
                        onAnimationEnd: n.Q1,
                        sduiRootId: e.id,
                        transitions: [],
                        prevContent: o.none,
                        designSystem: c.k,
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
      e.exports = { wrapper: "_Niyu" };
    }
  }
]);
