"use strict";
(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [3033],
  {
    473033: (e, a, s) => {
      s.r(a), s.d(a, { PanelWrapper: () => d });
      var t = s(696832),
        l = s(593039),
        n = s(45272),
        o = s(692077),
        i = s(276376),
        c = s(376452),
        r = s(133659),
        u = s(837527),
        m = s(168783);
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
