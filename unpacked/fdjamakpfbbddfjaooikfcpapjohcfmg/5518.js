"use strict";
(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [5518],
  {
    895518: (e, t, n) => {
      n.r(t), n.d(t, { CollectionView: () => j });
      var l = n(696832),
        i = n(876307),
        a = n(15192),
        o = n(593039),
        s = n(148038),
        r = n(980936),
        c = n(45272),
        d = n(692077),
        g = n(619122),
        u = n(438858),
        h = n(162735),
        m = n(488795),
        S = n(371060),
        p = n(97227),
        C = n(812027),
        E = n(433360),
        Z = n(621313),
        w = n(24278),
        x = n(663146);
      const O = l.createElement(l.Fragment, null, l.createElement(w.D, null), l.createElement(x.E, null));
      var D,
        _ = n(488203),
        b = n(360345),
        v = n(555357),
        I = n(634742);
      const f = (e) => {
        const { translate: t } = (0, _.Z)(),
          [n, a] = (0, l.useState)(!1),
          { canDelete: o } = (0, v.n)(e.id);
        return l.createElement(
          l.Fragment,
          null,
          l.createElement(
            b.x,
            { disabled: !o, onClick: () => a(!0), icon: D || (D = l.createElement(i.JO, { name: "ActionDeleteOutlined" })) },
            t("collections_delete_button_text")
          ),
          l.createElement(I.AN, { isOpen: n, onClose: () => a(!1), ...e })
        );
      };
      var k,
        y = n(66485);
      const A = (e) => {
        const { translate: t } = (0, _.Z)(),
          [n, a] = (0, l.useState)(!1),
          { canEdit: s } = (0, v.n)(e.id),
          { openDialog: r, shouldShowTrialDiscontinuedDialog: d } = (0, y.yp)();
        return l.createElement(
          l.Fragment,
          null,
          l.createElement(
            b.x,
            {
              disabled: !s,
              onClick: () => {
                d ? r() : ((0, c.Nc)(o.PageView.CollectionEdit), a(!0));
              },
              icon: k || (k = l.createElement(i.JO, { name: "ActionEditOutlined" }))
            },
            t("_common_action_edit")
          ),
          n && l.createElement(I.mu, { onClose: () => a(!1), ...e })
        );
      };
      var F;
      const T = ({ id: e, isSharedAccessDialogOpen: t, setIsSharedAccessDialogOpen: n }) => {
        const { translate: a } = (0, _.Z)(),
          { isCollectionsSharingEnabled: s } = (0, C.b)();
        return s
          ? l.createElement(
              l.Fragment,
              null,
              l.createElement(
                b.x,
                {
                  onClick: () => {
                    (0, c.Kz)(
                      new o.UserSharingStartEvent({
                        sharingFlowType: o.SharingFlowType.CollectionSharing,
                        collectionId: e,
                        origin: o.Origin.CollectionDetailView
                      })
                    ),
                      n(!0);
                  },
                  icon: F || (F = l.createElement(i.JO, { name: "SharedOutlined" }))
                },
                a("webapp_sharing_collection_access_dialog_title")
              ),
              t && l.createElement(I.Zy, { onClose: () => n(!1), id: e })
            )
          : null;
      };
      var V,
        J = n(28976),
        P = n(99822),
        z = n(253133),
        L = n(44279),
        R = n(426642),
        B = n(267678),
        N = n(485281);
      const U = ({ id: e }) => {
          var t;
          const n = (0, N.G)(),
            a = (0, J.k)(),
            { isCollectionsSharingEnabled: s } = (0, C.b)(),
            [r, d] = (0, z.A)(e),
            { canShare: g } = (0, v.n)(e),
            { openDialog: u, closeDialog: h } = (0, B.R)(),
            { translate: m } = (0, _.Z)();
          return s
            ? l.createElement(
                b.x,
                {
                  onClick: () => {
                    if (
                      ((0, c.Kz)(
                        new o.UserSharingStartEvent({
                          sharingFlowType: o.SharingFlowType.CollectionSharing,
                          collectionId: e,
                          origin: o.Origin.CollectionDetailView
                        })
                      ),
                      a)
                    ) {
                      const t = !n && d === z.z.Complete && r ? (0, P.wu)(e) : (0, P.H4)(e);
                      u(l.createElement(L.Z, { sharing: t, onDismiss: h, origin: o.Origin.CollectionDetailView }));
                    } else u(t || (t = l.createElement(R.z, { closeDialog: h })));
                  },
                  icon: V || (V = l.createElement(i.JO, { name: "ActionShareOutlined" })),
                  disabled: !g
                },
                m("_common_action_share")
              )
            : null;
        },
        W = ({ isShared: e = !1, isPersonalSpaceDisabled: t, ...n }) => {
          const [a, o] = (0, l.useState)(!1);
          return (0, i.tZ)(Z.h, {
            sx: { marginRight: "16px" },
            startWidgets: () =>
              (0, i.tZ)(
                E.b,
                { isShared: e, spaceId: t ? void 0 : n.spaceId },
                (0, i.tZ)(
                  i.X6,
                  {
                    as: "h1",
                    textStyle: "ds.title.section.large",
                    style: { overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }
                  },
                  n.name
                )
              ),
            endWidget: (0, i.tZ)(
              l.Fragment,
              null,
              n?.spaceId ? (0, i.tZ)(U, { id: n.id }) : null,
              e ? (0, i.tZ)(T, { id: n.id, isSharedAccessDialogOpen: a, setIsSharedAccessDialogOpen: o }) : null,
              (0, i.tZ)(A, { isShared: e, ...n }),
              (0, i.tZ)(f, { isShared: e, id: n.id, name: n.name, setIsSharedAccessDialogOpen: o }),
              O
            )
          });
        },
        X = () => {
          const { translate: e } = (0, _.Z)();
          return (0, i.tZ)(
            "article",
            { sx: { display: "flex", flexDirection: "column", height: "100%", justifyContent: "center", alignItems: "center" } },
            (0, i.tZ)(i.JO, {
              name: "FolderOutlined",
              sx: { width: "75px", height: "auto", marginBottom: "25px" },
              color: "ds.text.neutral.standard"
            }),
            (0, i.tZ)(
              i.X6,
              { as: "h2", textStyle: "ds.title.section.large", sx: { maxWidth: "480px", textAlign: "center" } },
              e("webapp_collections_empty_view")
            )
          );
        };
      var K, M;
      const j = () => {
        var e;
        const { routes: t } = (0, d.Xo)(),
          n = `{${(0, a.UO)().collectionId}}`,
          { currentSpaceId: E } = (0, g.fV)(),
          { collections: Z, sharedCollections: w, isCollectionsLoading: x, updateActiveCollection: O } = (0, C.b)(),
          { canShareCollection: D, hasSharingCollectionPaywall: _, isAdmin: b, isStarterTeam: v } = (0, p.Te)(),
          I = (0, r.I)();
        if (((0, l.useEffect)(() => ((0, c.Nc)(o.PageView.CollectionDetails), () => O(null)), []), x || I.status !== s.rq.Success))
          return null;
        const f = (
            (e) => (t) =>
              t.id === e
          )(n),
          k = null != (e = Z.find(f)) ? e : w.find(f);
        if (!k || (null !== E && k.spaceId !== E)) return (0, i.tZ)(a.l_, { to: t.userCredentials });
        O(k);
        const { vaultItems: y, ...A } = k;
        return (0, i.tZ)(
          l.Fragment,
          null,
          (0, i.tZ)(W, { isPersonalSpaceDisabled: I.isDisabled, ...A }),
          _ && b
            ? (0, i.tZ)(p.Li, {
                isStarterTeam: v,
                canShareCollection: D,
                sx: { margin: "24px" },
                clickOrigin: D
                  ? o.ClickOrigin.CollectionsSharingStarterLimitCloseToBeReachedMain
                  : o.ClickOrigin.CollectionsSharingStarterLimitReachedMain
              })
            : null,
          y.length > 0
            ? (0, i.tZ)(h.Z, { ids: y.map((e) => e.id) }, K || (K = (0, i.tZ)(m.x, null, (0, i.tZ)(S.B, null, (0, i.tZ)(u.k, null)))))
            : M || (M = (0, i.tZ)(X, null))
        );
      };
    }
  }
]);
