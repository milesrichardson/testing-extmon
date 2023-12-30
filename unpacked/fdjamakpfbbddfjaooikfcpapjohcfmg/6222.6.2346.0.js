"use strict";
(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [6222],
  {
    136222: (e, t, n) => {
      n.r(t), n.d(t, { CollectionView: () => q });
      var l = n(696832),
        a = n(15192),
        i = n(660765),
        c = n(148038),
        o = n(979869),
        s = n(62429),
        r = n(635164),
        d = n(352116),
        m = n(441064),
        u = n(778856),
        g = n(569917),
        h = n(421478),
        E = n(755502),
        p = n(142897),
        S = n(731977),
        C = n(789304),
        _ = n(730111),
        w = n(396796);
      const O = l.createElement(l.Fragment, null, l.createElement(_.D, null), l.createElement(w.E, null));
      var x,
        D = n(201389),
        b = n(421429),
        Z = n(672285),
        v = n(701405);
      const I = (e) => {
        const { translate: t } = (0, D.Z)(),
          [n, a] = (0, l.useState)(!1),
          { canDelete: i } = (0, Z.S)(e.id);
        return l.createElement(
          l.Fragment,
          null,
          l.createElement(
            b.x,
            { disabled: !i, onClick: () => a(!0), icon: x || (x = l.createElement(p.JO, { name: "ActionDeleteOutlined" })) },
            t("collections_delete_button_text")
          ),
          l.createElement(v.AN, { isOpen: n, onClose: () => a(!1), ...e })
        );
      };
      var f;
      const A = (e) => {
        const { translate: t } = (0, D.Z)(),
          [n, a] = (0, l.useState)(!1),
          { canEdit: c } = (0, Z.S)(e.id);
        return l.createElement(
          l.Fragment,
          null,
          l.createElement(
            b.x,
            {
              disabled: !c,
              onClick: () => {
                (0, s.Nc)(i.PageView.CollectionEdit), a(!0);
              },
              icon: f || (f = l.createElement(p.JO, { name: "ActionEditOutlined" }))
            },
            t("_common_action_edit")
          ),
          n && l.createElement(v.mu, { onClose: () => a(!1), ...e })
        );
      };
      var y;
      const F = ({ id: e, isSharedAccessDialogOpen: t, setIsSharedAccessDialogOpen: n }) => {
        const { translate: a } = (0, D.Z)(),
          { isCollectionsSharingEnabled: c } = (0, E.b)();
        return c
          ? l.createElement(
              l.Fragment,
              null,
              l.createElement(
                b.x,
                {
                  onClick: () => {
                    (0, s.Kz)(
                      new i.UserSharingStartEvent({
                        sharingFlowType: i.SharingFlowType.CollectionSharing,
                        collectionId: e,
                        origin: i.Origin.CollectionDetailView
                      })
                    ),
                      n(!0);
                  },
                  icon: y || (y = l.createElement(p.JO, { name: "SharedOutlined" }))
                },
                a("webapp_sharing_collection_access_dialog_title")
              ),
              t && l.createElement(v.Zy, { onClose: () => n(!1), id: e })
            )
          : null;
      };
      var k,
        V = n(668182),
        T = n(793071),
        J = n(414654),
        z = n(61328),
        P = n(854536),
        N = n(22393),
        U = n(467979);
      const W = ({ id: e }) => {
          var t;
          const n = (0, U.G)(),
            a = (0, V.k)(),
            { isCollectionsSharingEnabled: c } = (0, E.b)(),
            [o, r] = (0, J.A)(e),
            { canShare: d } = (0, Z.S)(e),
            { openDialog: m, closeDialog: u } = (0, N.R)(),
            { translate: g } = (0, D.Z)();
          return c
            ? l.createElement(
                b.x,
                {
                  onClick: () => {
                    if (
                      ((0, s.Kz)(
                        new i.UserSharingStartEvent({
                          sharingFlowType: i.SharingFlowType.CollectionSharing,
                          collectionId: e,
                          origin: i.Origin.CollectionDetailView
                        })
                      ),
                      a)
                    ) {
                      const t = !n && r === J.z.Complete && o ? (0, T.wu)(e) : (0, T.H4)(e);
                      m(l.createElement(z.Z, { sharing: t, onDismiss: u, origin: i.Origin.CollectionDetailView }));
                    } else m(t || (t = l.createElement(P.z, { closeDialog: u })));
                  },
                  icon: k || (k = l.createElement(p.JO, { name: "ActionShareOutlined" })),
                  disabled: !d
                },
                g("_common_action_share")
              )
            : null;
        },
        X = ({ isShared: e = !1, isPersonalSpaceDisabled: t, ...n }) => {
          const [a, i] = (0, l.useState)(!1);
          return (0, p.tZ)(C.h, {
            startWidgets: () =>
              (0, p.tZ)(
                S.b,
                { isShared: e, spaceId: t ? void 0 : n.spaceId },
                (0, p.tZ)(
                  p.X6,
                  { as: "h1", textStyle: "ds.title.section.large", style: { overflow: "hidden", textOverflow: "ellipsis" } },
                  n.name
                )
              ),
            endWidget: (0, p.tZ)(
              l.Fragment,
              null,
              n?.spaceId ? (0, p.tZ)(W, { id: n.id }) : null,
              e ? (0, p.tZ)(F, { id: n.id, isSharedAccessDialogOpen: a, setIsSharedAccessDialogOpen: i }) : null,
              (0, p.tZ)(A, { isShared: e, ...n }),
              (0, p.tZ)(I, { isShared: e, id: n.id, name: n.name, setIsSharedAccessDialogOpen: i }),
              O
            )
          });
        },
        B = () => {
          const { translate: e } = (0, D.Z)();
          return (0, p.tZ)(
            "article",
            { sx: { display: "flex", flexDirection: "column", height: "100%", justifyContent: "center", alignItems: "center" } },
            (0, p.tZ)(p.JO, {
              name: "FolderOutlined",
              sx: { width: "75px", height: "auto", marginBottom: "25px" },
              color: "ds.text.neutral.standard"
            }),
            (0, p.tZ)(
              p.X6,
              { as: "h2", textStyle: "ds.title.section.large", sx: { maxWidth: "480px", textAlign: "center" } },
              e("webapp_collections_empty_view")
            )
          );
        };
      var K, j;
      const q = () => {
        var e;
        const { routes: t } = (0, r.Xo)(),
          n = `{${(0, a.UO)().collectionId}}`,
          { currentSpaceId: p } = (0, d.fV)(),
          { collections: S, sharedCollections: C, isCollectionsLoading: _, updateActiveCollection: w } = (0, E.b)(),
          O = (0, o.I)();
        if ((l.useEffect(() => ((0, s.Nc)(i.PageView.CollectionDetails), () => w(null)), []), _ || O.status !== c.rq.Success)) return null;
        const x = (
            (e) => (t) =>
              t.id === e
          )(n),
          D = null != (e = S.find(x)) ? e : C.find(x);
        if (!D || (null !== p && D.spaceId !== p)) return l.createElement(a.l_, { to: t.userCredentials });
        w(D);
        const { vaultItems: b, ...Z } = D;
        return l.createElement(
          l.Fragment,
          null,
          l.createElement(X, { isPersonalSpaceDisabled: O.isDisabled, ...Z }),
          b.length > 0
            ? l.createElement(
                u.Z,
                { ids: b.map((e) => e.id) },
                K || (K = l.createElement(g.x, null, l.createElement(h.B, null, l.createElement(m.k, null))))
              )
            : j || (j = l.createElement(B, null))
        );
      };
    }
  }
]);
