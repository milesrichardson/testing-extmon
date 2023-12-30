"use strict";
(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [8615],
  {
    78615: (e, t, l) => {
      l.r(t), l.d(t, { CollectionsOverview: () => I });
      var n = l(696832);
      const a = (0, n.createContext)({}),
        r = (0, n.createContext)({}),
        o = ({ children: e }) => {
          const [t, l] = (0, n.useState)(""),
            o = { searchValue: t },
            i = (0, n.useMemo)(() => ({ setSearchValue: l }), []);
          return n.createElement(a.Provider, { value: o }, n.createElement(r.Provider, { value: i }, e));
        };
      var i = l(53967),
        s = l(701405);
      const c = () => {
        const [e, t] = (0, n.useState)(!1);
        return n.createElement(
          n.Fragment,
          null,
          n.createElement(i.t, { handleAddNew: () => t(!0), shouldDisplayAddButton: !0, shouldDisplayNewAccountImportButton: !1 }),
          e && n.createElement(s.K7, { onClose: () => t(!1) })
        );
      };
      var u = l(488563),
        d = l(755502),
        m = l(142897);
      const p = (e) =>
        (0, m.tZ)("ul", {
          sx: {
            listStyle: "none",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(12rem, 1fr))",
            gap: "16px",
            padding: "32px",
            overflow: "auto"
          },
          ...e
        });
      var x = l(635164),
        h = l(201389),
        v = l(900978),
        g = l(731977);
      const C = (e) =>
          (0, m.tZ)("article", {
            sx: {
              display: "flex",
              flexDirection: "column",
              gap: "6px",
              padding: "4px 4px 12px 12px",
              backgroundColor: "ds.container.expressive.neutral.quiet.idle",
              boxShadow: "0px 1px 1px 0px lightgrey",
              borderRadius: "6px",
              "&:hover": { backgroundColor: "ds.container.expressive.neutral.quiet.hover" },
              cursor: "pointer"
            },
            ...e
          }),
        E = ({ ...e }) =>
          (0, m.tZ)("div", { sx: { display: "flex", flex: "1 0 100%", alignItems: "center", justifyContent: "space-between" }, ...e });
      var y;
      const b = ({ collection: e }) => {
          const { translate: t } = (0, h.Z)(),
            { routes: l } = (0, x.Xo)();
          return n.createElement(
            C,
            {
              onClick: (t) => {
                t.stopPropagation(), (0, x.uX)(l.userCollection(e.id));
              }
            },
            n.createElement(
              E,
              null,
              y || (y = n.createElement(m.JO, { name: "FolderOutlined", size: "large", color: "ds.text.neutral.quiet" })),
              n.createElement("div", { onClick: (e) => e.stopPropagation() }, n.createElement(v.C, { collection: e }))
            ),
            n.createElement(
              g.b,
              { isShared: !!e.isShared, spaceId: e.spaceId },
              n.createElement(
                m.X6,
                {
                  as: "h3",
                  textStyle: "ds.title.block.medium",
                  style: { overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", marginRight: "6px" }
                },
                e.name
              )
            ),
            n.createElement(
              m.nv,
              { color: "ds.text.neutral.quiet", style: { fontWeight: "600" } },
              e.vaultItems.length,
              " ",
              t("collections_overview_items_count")
            )
          );
        },
        _ = () => {
          const { translate: e } = (0, h.Z)();
          return (0, m.tZ)(
            m.X6,
            {
              as: "h2",
              textStyle: "ds.title.block.medium",
              color: "ds.text.neutral.standard",
              sx: { borderBottom: "1px solid ds.border.neutral.quiet.idle", margin: "0 32px", padding: "18px 0" }
            },
            e("collections_overview_title")
          );
        };
      var w;
      const f = (0, n.memo)(() => {
        const { allCollections: e } = (0, d.b)(),
          { searchValue: t } = (0, n.useContext)(a),
          [l, r] = (0, n.useState)(1);
        return n.createElement(
          n.Fragment,
          null,
          w || (w = n.createElement(_, null)),
          n.createElement(
            u.C,
            {
              onNextPage: (t) => {
                50 * (t - 1) <= e.length && r(t);
              },
              hasMore: !0,
              ListComponent: p
            },
            e
              .filter((e) =>
                e.name.toLowerCase().includes(
                  t
                    .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, "")
                    .toLowerCase()
                )
              )
              .slice(0, 50 * l)
              .map((e) => n.createElement("li", { key: `collections_overview_${e.name}_${e.id}` }, n.createElement(b, { collection: e })))
          )
        );
      });
      f.displayName = "CollectionsGrid";
      var k = l(139378);
      const S = ({ onClick: e, isHidden: t }) => {
        const { translate: l } = (0, h.Z)();
        return (0, m.tZ)(m.JO, {
          "aria-hidden": t,
          title: l("collections_overview_search_clear_search"),
          name: "ActionCloseOutlined",
          onClick: e,
          sx: {
            alignSelf: "center",
            cursor: "pointer",
            "&:hover": { opacity: t ? "0" : "100%" },
            visibility: t ? "hidden" : "visible",
            opacity: t ? "0" : "50%",
            transitionDuration: "200ms",
            transitionProperty: "opacity, visibility"
          }
        });
      };
      var Z;
      const O = () => {
        const { translate: e } = (0, h.Z)(),
          { setSearchValue: t } = (0, n.useContext)(r),
          [l, a] = (0, n.useState)(!1),
          o = (0, n.useRef)(null),
          i = (0, n.useCallback)(
            (0, k.debounce)((e) => {
              t(e), a(!!e);
            }, 200),
            []
          ),
          s = e("collections_overview_search_input_placeholder");
        return (0, m.tZ)(m.oi, {
          ref: o,
          placeholder: s,
          "aria-label": s,
          prefixIcon: Z || (Z = (0, m.tZ)(m.JO, { name: "ActionSearchOutlined", size: "medium" })),
          onChange: (e) => {
            i(e.target.value);
          },
          actionButtons: [
            (0, m.tZ)(S, {
              key: "clear-collections-search",
              onClick: () => {
                o.current && ((o.current.value = ""), o.current.focus()), t(""), a(!1);
              },
              isHidden: !l
            })
          ],
          autoFocus: !0,
          intensity: "quiet",
          sx: { maxWidth: "300px", margin: "16px 32px" }
        });
      };
      var q, F;
      const I = () =>
        n.createElement(
          n.Fragment,
          null,
          q || (q = n.createElement(c, null)),
          F || (F = n.createElement(o, null, n.createElement(O, null), n.createElement(f, null)))
        );
    }
  }
]);
