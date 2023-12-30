"use strict";
(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [3601],
  {
    682994: (e, i, t) => {
      t.d(i, { s: () => g });
      var n = t(696832),
        s = t(876307),
        r = t(482598),
        a = t(133354),
        o = t(448430),
        l = t(488203);
      let c = (function (e) {
        return (e.LastAdmin = "LastAdmin"), (e.GroupSharing = "GroupSharing"), (e.Generic = "Generic"), e;
      })({});
      var d = t(365580);
      const p = ({ reason: e, translations: i, goToSharingAccess: t, closeCantDeleteDialog: r }) => {
        const { translate: a } = (0, l.Z)(),
          o = ((e, i) => {
            const { groupSharingTitle: t, lastAdminTitle: n, genericErrorTitle: s } = e;
            switch (i) {
              case c.LastAdmin:
                return n;
              case c.GroupSharing:
                return t;
              case c.Generic:
                return s;
              default:
                return (0, d.U)(i);
            }
          })(i, e),
          p = ((e, i) => {
            const { groupSharingSubtitle: t, lastAdminSubtitle: n, genericErrorSubtitle: s } = e;
            switch (i) {
              case c.LastAdmin:
                return n;
              case c.GroupSharing:
                return t;
              case c.Generic:
                return s;
              default:
                return (0, d.U)(i);
            }
          })(i, e);
        return n.createElement(
          s.Vq,
          {
            isOpen: !0,
            onClose: r,
            title: null != o ? o : "",
            closeActionLabel: a("_common_dialog_dismiss_button"),
            actions:
              e === c.LastAdmin || c.GroupSharing
                ? {
                    primary: {
                      children: i.lastAdminActionLabel,
                      onClick: () => {
                        t(), r();
                      }
                    }
                  }
                : void 0
          },
          p
        );
      };
      var u = t(837527);
      const m = ({ closeConfirmDeleteDialog: e, onDeleteConfirm: i, translations: t }) => {
          const { translate: r } = (0, l.Z)(),
            { confirmDeleteSubtitle: a, confirmDeleteTitle: o, confirmDeleteDismiss: c, confirmDeleteConfirm: d } = t;
          return n.createElement(
            s.Vq,
            {
              title: o,
              onClose: e,
              isOpen: !0,
              dialogClassName: u.Ht,
              closeActionLabel: r("_common_dialog_dismiss_button"),
              isDestructive: !0,
              actions: {
                primary: { children: d, onClick: i, id: "deletion-dialog-confirm-button" },
                secondary: { children: c, onClick: e, autoFocus: !0, id: "deletion-dialog-dismiss-button" }
              }
            },
            a
          );
        },
        g = ({
          closeConfirmDeleteDialog: e,
          goToSharingAccess: i,
          isVisible: t,
          itemId: d,
          onDeletionSuccess: u,
          sharingStatus: g,
          translations: _,
          vaultItemType: h,
          isShared: S,
          isSharedViaUserGroup: b,
          isLastAdmin: I
        }) => {
          const { showToast: y } = (0, s.pm)(),
            { translate: f } = (0, l.Z)(),
            { deleteVaultItems: C } = (0, r.u)(o.L);
          if (!t) return null;
          let v;
          return (
            (S || g?.isShared) && (b && (v = c.GroupSharing), I && (v = c.LastAdmin)),
            v && i
              ? n.createElement(p, { reason: v, translations: _, goToSharingAccess: i, closeCantDeleteDialog: e })
              : n.createElement(m, {
                  closeConfirmDeleteDialog: e,
                  onDeleteConfirm: async () => {
                    try {
                      var e;
                      (await C({ ids: [d], vaultItemType: h })).tag === a.rq.Success
                        ? (y({
                            description: null != (e = _.deleteSuccessToast) ? e : f("webapp_personal_info_edition_delete_success_toast")
                          }),
                          u())
                        : y({ description: f("_common_generic_error"), mood: "danger", isManualDismiss: !0 });
                    } catch (e) {
                      y({ description: f("_common_generic_error"), mood: "danger", isManualDismiss: !0 });
                    }
                  },
                  translations: _
                })
          );
        };
    },
    762042: (e, i, t) => {
      t.d(i, { N: () => c, _: () => l });
      var n = t(696832),
        s = t(593039),
        r = t(488203),
        a = t(301639);
      const o = ({ sharing: e }) => {
          const { translate: i } = (0, r.Z)();
          return n.createElement(a.Z, {
            tooltipPlacement: "top-start",
            sharing: e,
            text: i("webapp_sharing_invite_share"),
            origin: s.Origin.ItemDetailView
          });
        },
        l = ({ id: e, isShared: i, isAdmin: t, isDiscontinuedUser: s, getSharing: r }) =>
          (i && !t) || s ? null : n.createElement(o, { sharing: r(e) }),
        c = ({ item: e, getSharing: i }) =>
          ((e) => e && (!e.sharingStatus.isShared || "admin" === e.sharingStatus.permission) && !e.attachments.length)(e)
            ? n.createElement(o, { sharing: i(e.id) })
            : null;
    },
    979808: (e, i, t) => {
      t.d(i, { r: () => r });
      var n = t(799852),
        s = t(348958);
      const r = (e) => (0, n.k)(s.X, "sharedAccessForItem", { itemId: e });
    },
    555449: (e, i, t) => {
      t.d(i, { u: () => T });
      var n,
        s,
        r = t(696832),
        a = t(876307),
        o = t(962899),
        l = t(361607),
        c = t(482598),
        d = t(133354),
        p = t(172721),
        u = t(11098),
        m = t(287279),
        g = t(740300),
        _ = t(488203),
        h = t(343194),
        S = t(448263),
        b = t(232814),
        I = t(904967),
        y = t(873670),
        f = t(989572),
        C = t(58037);
      const v = ({ cancelStatus: e, itemGroupId: i, setCancelStatus: t, recipientId: l }) => {
        const { translate: c } = (0, _.Z)(),
          d = e === S.V.Loading,
          p = { type: "user", alias: l };
        (0, r.useEffect)(() => {
          let i;
          return (
            e === S.V.Failure && (i = window.setTimeout(() => t(null), 2e3)),
            () => {
              clearTimeout(i);
            }
          );
        }, [e, t]);
        const u = e ? () => t(null) : () => t(S.V.Confirm);
        return e === S.V.Failure
          ? (0, a.tZ)(
              "div",
              { sx: { color: "ds.text.danger.standard", display: "flex", alignItems: "center" } },
              n || (n = (0, a.tZ)(o.aNP, { color: "ds.text.danger.standard" })),
              " ",
              c("webapp_shared_access_cancel_failure")
            )
          : (0, a.tZ)(
              "div",
              null,
              (0, a.tZ)(
                a.zx,
                { intensity: e ? "quiet" : "supershy", disabled: d, onClick: u, size: "small" },
                c(e ? "webapp_shared_access_cancel" : "webapp_shared_access_cancel_invitation")
              ),
              e
                ? (0, a.tZ)(
                    a.zx,
                    {
                      mood: "danger",
                      intensity: "catchy",
                      sx: { ml: "16px" },
                      disabled: d,
                      size: "small",
                      onClick: () =>
                        (async () => {
                          t(S.V.Loading);
                          const e = await (async () => {
                            try {
                              const { success: e } = await g.C.revokeSharing({ itemGroupId: i, recipient: p });
                              return e;
                            } catch (e) {
                              return !1;
                            }
                          })();
                          t(e ? S.V.Success : S.V.Failure);
                        })()
                    },
                    d ? s || (s = (0, a.tZ)(o.HoD, null)) : c("webapp_shared_access_confirm")
                  )
                : null
            );
      };
      var D;
      const w = "webapp_sharing_permissions_full_rights",
        Z = "webapp_sharing_permissions_limited_rights",
        x = (e) => {
          const { status: i, permission: t } = e;
          return "pending" === i ? "webapp_shared_access_pending_invitation" : "accepted" === i ? ("admin" === t ? w : Z) : "";
        },
        k = ({ itemGroupId: e, openEditPermissionsDialog: i, member: t, isAdmin: n, isItemPermissionsEnabled: s = !1 }) => {
          const [o, l] = (0, r.useState)(null),
            c = (0, C.j)()?.login,
            { translate: d } = (0, _.Z)();
          if (o === S.V.Success) return null;
          const { permission: p, status: m, recipientType: g } = t,
            h = c === t.recipientId,
            k = n && c !== t.recipientId,
            A =
              "pending" === m
                ? (0, a.tZ)(v, { recipientId: t.recipientId, itemGroupId: e, cancelStatus: o, setCancelStatus: l })
                : (0, a.tZ)(
                    y.M,
                    {
                      disabled: (s && !n) || (!s && t.recipientType === u.I.Collection),
                      icon: "ActionEditOutlined",
                      layout: "iconLeading",
                      intensity: "supershy",
                      onClick: () => i(t, p, g),
                      content: d("webapp_sharing_collection_access_description_tooltip"),
                      tooltipSx: { textWrap: "wrap", maxWidth: "240px" },
                      size: "small"
                    },
                    d("webapp_shared_access_edit_permissions")
                  );
          return (0, a.tZ)(
            "li",
            { key: t.recipientId, sx: { alignItems: "center", display: "flex", minHeight: "48px", position: "relative" } },
            (0, a.tZ)(I.r, {
              infoAction: k ? A : null,
              logo: t.recipientType === u.I.Group ? D || (D = (0, a.tZ)(f.Z, null)) : (0, a.tZ)(b.q, { email: t.recipientName, size: 36 }),
              text: s ? void 0 : x(t) ? d(x(t)) : d("webapp_shared_permissions_dialog_revoke_success_title"),
              title: t.recipientName,
              permissionBadge: s ? (0, a.tZ)(a.Ct, { mood: "admin" === p ? "brand" : "danger", label: d("admin" === p ? w : Z) }) : void 0,
              disabled: o === S.V.Loading,
              titleLogo: h
                ? (0, a.tZ)(a.Ct, {
                    label: d("webapp_shared_access_you_badge").toUpperCase(),
                    layout: "labelOnly",
                    sx: { marginLeft: "4px" }
                  })
                : null
            })
          );
        };
      var A = t(979808),
        G = t(468037),
        P = t(814341);
      const T = ({ id: e, isAdmin: i }) => {
        const { translate: t } = (0, _.Z)(),
          [n, s] = (0, r.useState)(!1),
          [b, I] = (0, r.useState)(null),
          y = (0, l._)(),
          { data: f, status: C } = (0, A.r)(e),
          { updatePermissionForCollectionItem: v, removeItemFromCollections: D } = (0, c.u)(p.a),
          w = Boolean(y.data?.sharingVault_web_Collection_Item_Permissions_dev);
        if (C !== d.rq.Success)
          return (0, a.tZ)(o.HoD, { color: "ds.container.expressive.brand.catchy.idle", size: 50, sx: { alignSelf: "center", m: "20px" } });
        const { itemGroupId: Z, users: x, groups: T, collections: E } = f,
          L = (e) => {
            b && I({ ...b, step: e });
          },
          V = async () => {
            if (!b) return;
            const { recipient: i, permission: t, recipientType: n } = b;
            s(!0);
            const r =
              "revoke" === t
                ? await (async (i, t) => {
                    try {
                      if (t === u.I.Collection) {
                        const t = await D({ collectionIds: [i.recipientId], itemId: e });
                        return !!(0, m.d6)(t);
                      }
                      const { success: n } = await g.C.revokeSharing({ itemGroupId: null != Z ? Z : "", recipient: (0, P.d)(i) });
                      return n;
                    } catch (e) {
                      return !1;
                    }
                  })(i, n)
                : await (async (e, i, t) => {
                    try {
                      if (t === u.I.Collection) {
                        const t = await v({ groupId: Z, collection: { collectionUUID: e.recipientId, permission: i } });
                        return !!(0, m.d6)(t);
                      }
                      {
                        const { success: t } = await g.C.updateSharingPermission({
                          itemGroupId: null != Z ? Z : "",
                          recipient: (0, P.d)(e),
                          permission: i
                        });
                        return t;
                      }
                    } catch (e) {
                      return !1;
                    }
                  })(i, t, n);
            if (r) {
              const e = "revoke" === t ? S.PermissionDialogStep.RevokeSuccess : S.PermissionDialogStep.Success;
              L(e);
            } else L(S.PermissionDialogStep.Failure);
            s(!1);
          },
          F = (e, i, t) => {
            const n = {
              recipient: e,
              recipientType: t,
              permission: i,
              originPermission: i,
              step: S.PermissionDialogStep.Permission,
              name: e.recipientName
            };
            I(n);
          },
          U = T?.length > 0,
          z = E?.length > 0,
          q = x?.length > 0,
          N = "collection" === b?.recipientType;
        return (0, a.tZ)(
          "div",
          { sx: { flex: "1", overflowY: "auto" } },
          (0, a.tZ)(
            "ul",
            { sx: { flex: "1" } },
            z
              ? (0, a.tZ)(
                  G.u,
                  { title: t("webapp_shared_access_collections"), additionalSx: { marginBottom: "16px" } },
                  E.map((e) =>
                    (0, a.tZ)(k, {
                      isItemPermissionsEnabled: w,
                      key: e.recipientId,
                      isAdmin: i,
                      member: e,
                      itemGroupId: null != Z ? Z : "",
                      openEditPermissionsDialog: F
                    })
                  )
                )
              : null,
            U
              ? (0, a.tZ)(
                  G.u,
                  { title: t("webapp_shared_access_groups_card_title"), additionalSx: { marginBottom: "16px" } },
                  T.map((e) =>
                    (0, a.tZ)(k, {
                      key: e.recipientId,
                      isAdmin: i,
                      member: e,
                      itemGroupId: null != Z ? Z : "",
                      openEditPermissionsDialog: F
                    })
                  )
                )
              : null,
            q
              ? (0, a.tZ)(
                  G.u,
                  { title: t("webapp_shared_access_individuals_card_title") },
                  x.map((e) =>
                    (0, a.tZ)(k, {
                      key: e.recipientId,
                      isAdmin: i,
                      member: e,
                      itemGroupId: null != Z ? Z : "",
                      openEditPermissionsDialog: F
                    })
                  )
                )
              : null
          ),
          b &&
            (0, a.tZ)(h.E, {
              isOpen: !0,
              isCollectionItemPermission: N,
              loading: n,
              onCancelRevoke: () => {
                b && I({ ...b, step: S.PermissionDialogStep.Permission });
              },
              onConfirmRevoke: V,
              onDismiss: () => I(null),
              onSelectPermission: (e) => {
                b && I({ ...b, permission: e });
              },
              onValidatePermission: () => {
                "revoke" === b?.permission ? I({ ...b, step: S.PermissionDialogStep.ConfirmRevoke }) : V();
              },
              permission: b.permission,
              recipient: b.recipient,
              step: b.step
            })
        );
      };
    },
    625078: (e, i, t) => {
      t.d(i, { d: () => r });
      var n = t(384885),
        s = t(692077);
      const r = ({ routes: e, location: i }) => {
        i?.state?.entity
          ? (0, n.yy)(i?.state?.entity)
            ? (0, s.uX)(e.userSharingGroupInfo(i?.state?.entity?.groupId))
            : (0, s.uX)(e.userSharingUserInfo(i?.state?.entity?.alias))
          : (0, s.uX)(e.userSharingCenter);
      };
    }
  }
]);
