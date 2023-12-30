"use strict";
(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [5283],
  {
    695283: (e, t, l) => {
      l.r(t), l.d(t, { CollectionsOverview: () => R });
      var n = l(696832),
        a = l(812027);
      const r = (0, n.createContext)({}),
        o = (0, n.createContext)({}),
        i = ({ children: e }) => {
          const [t, l] = (0, n.useState)(""),
            a = { searchValue: t },
            i = (0, n.useMemo)(() => ({ setSearchValue: l }), []);
          return n.createElement(r.Provider, { value: a }, n.createElement(o.Provider, { value: i }, e));
        };
      var c = l(288455),
        s = l(634742);
      const u = () => {
        const [e, t] = (0, n.useState)(!1);
        return n.createElement(
          n.Fragment,
          null,
          n.createElement(c.t, { handleAddNew: () => t(!0), shouldDisplayAddButton: !0, shouldDisplayNewAccountImportButton: !1 }),
          e && n.createElement(s.K7, { onClose: () => t(!1) })
        );
      };
      var d = l(218493),
        m = l(876307);
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
      var x = l(692077),
        h = l(488203),
        v = l(113040),
        g = l(433360);
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
        _ = ({ ...e }) =>
          (0, m.tZ)("div", { sx: { display: "flex", flex: "1 0 100%", alignItems: "center", justifyContent: "space-between" }, ...e });
      var y;
      const E = ({ collection: e }) => {
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
              _,
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
        S = () => {
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
      const b = (0, n.memo)(() => {
        const { allCollections: e } = (0, a.b)(),
          { searchValue: t } = (0, n.useContext)(r),
          [l, o] = (0, n.useState)(1);
        return n.createElement(
          n.Fragment,
          null,
          w || (w = n.createElement(S, null)),
          n.createElement(
            d.C,
            {
              onNextPage: (t) => {
                50 * (t - 1) <= e.length && o(t);
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
              .map((e) => n.createElement("li", { key: `collections_overview_${e.name}_${e.id}` }, n.createElement(E, { collection: e })))
          )
        );
      });
      b.displayName = "CollectionsGrid";
      var f = l(139378);
      const k = ({ onClick: e, isHidden: t }) => {
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
          { setSearchValue: t } = (0, n.useContext)(o),
          [l, a] = (0, n.useState)(!1),
          r = (0, n.useRef)(null),
          i = (0, n.useCallback)(
            (0, f.debounce)((e) => {
              t(e), a(!!e);
            }, 200),
            []
          ),
          c = e("collections_overview_search_input_placeholder");
        return (0, m.tZ)(m.oi, {
          ref: r,
          placeholder: c,
          "aria-label": c,
          prefixIcon: Z || (Z = (0, m.tZ)(m.JO, { name: "ActionSearchOutlined", size: "medium" })),
          onChange: (e) => {
            i(e.target.value);
          },
          actionButtons: [
            (0, m.tZ)(k, {
              key: "clear-collections-search",
              onClick: () => {
                r.current && ((r.current.value = ""), r.current.focus()), t(""), a(!1);
              },
              isHidden: !l
            })
          ],
          autoFocus: !0,
          intensity: "quiet",
          sx: { maxWidth: "300px", margin: "16px 32px" }
        });
      };
      var A = l(593039),
        P = l(97227);
      const q = () => {
        const { canShareCollection: e, hasSharingCollectionPaywall: t, isAdmin: l, isStarterTeam: n } = (0, P.Te)();
        return t && l
          ? (0, m.tZ)(P.Li, {
              canShareCollection: e,
              isStarterTeam: n,
              sx: { margin: "16px 32px" },
              clickOrigin: e
                ? A.ClickOrigin.CollectionsSharingStarterLimitCloseToBeReachedMain
                : A.ClickOrigin.CollectionsSharingStarterLimitReachedMain
            })
          : null;
      };
      var F = l(45272);
      const L = () => {
        const { translate: e } = (0, h.Z)(),
          [t, l] = (0, n.useState)(!1);
        return (0, m.tZ)(
          "div",
          { sx: { margin: "auto", textAlign: "center", width: "700px", display: "flex", flexDirection: "column", gap: "20px" } },
          (0, m.tZ)(
            m.X6,
            { as: "h1", textStyle: "ds.title.section.medium", color: "ds.text.neutral.catchy" },
            e("collections_overview_create_title")
          ),
          (0, m.tZ)(m.nv, { color: "ds.text.neutral.quiet" }, e("collections_overview_create_description")),
          (0, m.tZ)(
            m.zx,
            {
              layout: "iconLeading",
              icon: "ActionAddOutlined",
              onClick: () => {
                l(!0), (0, F.Nc)(A.PageView.CollectionCreate);
              },
              sx: { margin: "auto" }
            },
            e("collections_dialog_create_header_title")
          ),
          t && (0, m.tZ)(s.K7, { onClose: () => l(!1) })
        );
      };
      var T, D, I, N, B;
      const R = () => {
        const { allCollections: e } = (0, a.b)(),
          t = e.length > 0;
        return n.createElement(
          n.Fragment,
          null,
          T || (T = n.createElement(u, null)),
          n.createElement(
            i,
            null,
            D || (D = n.createElement(q, null)),
            t
              ? n.createElement(n.Fragment, null, I || (I = n.createElement(O, null)), N || (N = n.createElement(b, null)))
              : B || (B = n.createElement(L, null))
          )
        );
      };
    }
  }
]);
