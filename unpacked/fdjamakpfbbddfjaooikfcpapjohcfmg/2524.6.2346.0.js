"use strict";
(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [2524],
  {
    632524: (e, a, s) => {
      s.r(a), s.d(a, { PanelWrapper: () => d });
      var t = s(696832),
        l = s(660765),
        n = s(62429),
        o = s(635164),
        i = s(60043),
        c = s(796446),
        r = s(905586),
        u = s(177704),
        m = s(612627);
      const d = (e) => {
        const { component: a } = e,
          { routes: s } = (0, i.Xo)(),
          d = s.userIdsDocuments,
          [p, g] = t.useState(!1),
          [h, C] = t.useState(!1),
          [k, v] = t.useState(!1),
          D = () => {
            (0, n.Nc)(l.PageView.ItemIdList), (0, o.uX)(d);
          },
          _ = h
            ? (e) => {
                e?.target?.classList?.contains(m.Z.overlay) && e.stopPropagation(), v(!0);
              }
            : () => {
                D();
              };
        return t.createElement(
          c.s_,
          { ignoreClickOutsideClassName: u.jK, ignoreCloseOnEscape: p || k, onNavigateOut: _ },
          t.createElement(a, {
            listRoute: d,
            id: e.match?.params?.uuid,
            setDialogActive: g,
            lee: e.lee,
            hasUnsavedData: h,
            setHasUnsavedData: C
          }),
          k
            ? t.createElement(r.a, {
                onDismissClick: () => v(!1),
                onConfirmClick: () => {
                  v(!1), D();
                }
              })
            : null
        );
      };
    }
  }
]);
