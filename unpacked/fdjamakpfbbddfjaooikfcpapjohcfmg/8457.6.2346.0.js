"use strict";
(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [8457],
  {
    405231: (e, i, t) => {
      t.d(i, { s: () => g });
      var s = t(696832),
        n = t(142897),
        r = t(482598),
        a = t(133354),
        o = t(448430),
        l = t(201389);
      let c = (function (e) {
        return (e.LastAdmin = "LastAdmin"), (e.GroupSharing = "GroupSharing"), (e.Generic = "Generic"), e;
      })({});
      var u = t(151796);
      const p = ({ reason: e, translations: i, goToSharingAccess: t, closeCantDeleteDialog: r }) => {
        const { translate: a } = (0, l.Z)(),
          o = ((e, i) => {
            const { groupSharingTitle: t, lastAdminTitle: s, genericErrorTitle: n } = e;
            switch (i) {
              case c.LastAdmin:
                return s;
              case c.GroupSharing:
                return t;
              case c.Generic:
                return n;
              default:
                return (0, u.U)(i);
            }
          })(i, e),
          p = ((e, i) => {
            const { groupSharingSubtitle: t, lastAdminSubtitle: s, genericErrorSubtitle: n } = e;
            switch (i) {
              case c.LastAdmin:
                return s;
              case c.GroupSharing:
                return t;
              case c.Generic:
                return n;
              default:
                return (0, u.U)(i);
            }
          })(i, e);
        return s.createElement(
          n.Vq,
          {
            isOpen: !0,
            onClose: r,
            title: null != o ? o : "",
            closeActionLabel: a("_common_dialog_dismiss_button"),
            actions:
              e === c.LastAdmin
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
      var d = t(177704);
      const m = ({ closeConfirmDeleteDialog: e, onDeleteConfirm: i, translations: t }) => {
          const { translate: r } = (0, l.Z)(),
            { confirmDeleteSubtitle: a, confirmDeleteTitle: o, confirmDeleteDismiss: c, confirmDeleteConfirm: u } = t;
          return s.createElement(
            n.Vq,
            {
              title: o,
              onClose: e,
              isOpen: !0,
              dialogClassName: d.Ht,
              closeActionLabel: r("_common_dialog_dismiss_button"),
              isDestructive: !0,
              actions: {
                primary: { children: u, onClick: i, id: "deletion-dialog-confirm-button" },
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
          itemId: u,
          onDeletionSuccess: d,
          sharingStatus: g,
          translations: h,
          vaultItemType: _
        }) => {
          const { showToast: S } = (0, n.pm)(),
            { translate: y } = (0, l.Z)(),
            { deleteVaultItems: f } = (0, r.u)(o.L);
          if (!t) return null;
          let b;
          return (
            g && g.isShared && (g.groupSharing && (b = c.GroupSharing), g.lastAdmin && (b = c.LastAdmin)),
            b && i
              ? s.createElement(p, { reason: b, translations: h, goToSharingAccess: i, closeCantDeleteDialog: e })
              : s.createElement(m, {
                  closeConfirmDeleteDialog: e,
                  onDeleteConfirm: async () => {
                    try {
                      var e;
                      (await f({ ids: [u], vaultItemType: _ })).tag === a.rq.Success
                        ? (S({
                            description: null != (e = h.deleteSuccessToast) ? e : y("webapp_personal_info_edition_delete_success_toast")
                          }),
                          d())
                        : S({ description: y("_common_generic_error"), mood: "danger", isManualDismiss: !0 });
                    } catch (e) {
                      S({ description: y("_common_generic_error"), mood: "danger", isManualDismiss: !0 });
                    }
                  },
                  translations: h
                })
          );
        };
    },
    372814: (e, i, t) => {
      t.d(i, { N: () => c, b: () => l });
      var s = t(696832),
        n = t(660765),
        r = t(201389),
        a = t(508461);
      const o = ({ sharing: e }) => {
          const { translate: i } = (0, r.Z)();
          return s.createElement(a.Z, {
            tooltipPlacement: "top-start",
            sharing: e,
            text: i("webapp_sharing_invite_share"),
            origin: n.Origin.ItemDetailView
          });
        },
        l = ({ id: e, isShared: i, isAdmin: t, getSharing: n }) => (i && !t ? null : s.createElement(o, { sharing: n(e) })),
        c = ({ item: e, getSharing: i }) =>
          ((e) => e && (!e.sharingStatus.isShared || "admin" === e.sharingStatus.permission) && !e.attachments.length)(e)
            ? s.createElement(o, { sharing: i(e.id) })
            : null;
    },
    342573: (e, i, t) => {
      t.d(i, { r: () => _ });
      var s = t(133354),
        n = t(604400),
        r = t(242542),
        a = t(172721),
        o = t(799852);
      const l = (e) => {
        const i = ((e) => (0, o.k)(a.a, "getSharedCollections", { collectionIds: e }))(e);
        return i.status === s.rq.Success ? i.data : [];
      };
      var c = t(148038),
        u = t(66941),
        p = t(526849);
      const d = (e, i, t = !1) => ({
          recipientId: e.groupId,
          recipientName: e.name,
          isGroup: !0,
          permission: e.permission,
          status: e.status,
          isAdmin: i,
          isInSharedCollection: t
        }),
        m = (e, i, t = !1) => ({
          recipientId: e.userId,
          recipientName: e.alias,
          isGroup: !1,
          permission: e.permission,
          status: e.status,
          isAdmin: i,
          isInSharedCollection: t
        }),
        g = (e) => ({
          recipientId: e.uuid,
          recipientName: e.name,
          isGroup: !1,
          status: n.qb.Accepted,
          permission: n.y3.Admin,
          isAdmin: !0,
          isInSharedCollection: !0
        }),
        h = (0, p.sortBy)((0, p.compose)(p.toLower, (0, p.prop)("recipientName")));
      function _(e, i) {
        const { collectionIds: t, itemGroupId: a, isReady: o } = (0, r.b)(e),
          p = (function (e) {
            return (0, c.qr)(
              {
                queryConfig: { query: u.C.getGroupRecipients, queryParam: e },
                liveConfig: { live: u.C.liveGroupRecipients, liveParam: e }
              },
              []
            );
          })(e),
          _ = (function (e) {
            return (0, c.qr)(
              { queryConfig: { query: u.C.getUserRecipients, queryParam: e }, liveConfig: { live: u.C.liveUserRecipients, liveParam: e } },
              []
            );
          })(e),
          S = l(t),
          y = t.length ? S : [];
        if (_.status !== s.rq.Success || p.status !== s.rq.Success || !o) return { isReady: !1, users: [], groups: [], collections: [] };
        const f = _.data.map((e) => m(e, i)),
          b = p.data.map((e) => d(e, i)),
          I = y.map((e) => g(e)),
          C = h(f),
          v = h(b),
          x = h(I),
          D = i && C.filter(({ permission: e, status: i }) => e === n.y3.Admin && i === n.qb.Accepted).length < 2;
        return { users: C, groups: v, itemGroupId: a, isReady: !0, collections: x, isLastAdmin: D };
      }
    },
    642844: (e, i, t) => {
      t.d(i, { u: () => v });
      var s,
        n,
        r = t(696832),
        a = t(142897),
        o = t(441217),
        l = t(453576),
        c = t(66941),
        u = t(201389),
        p = t(427658),
        d = t(993026),
        m = t(351433),
        g = t(683773),
        h = t(360592),
        _ = t(220315),
        S = t(716514);
      const y = ({ cancelStatus: e, itemGroupId: i, setCancelStatus: t, recipientId: l }) => {
        const { translate: p } = (0, u.Z)(),
          m = e === d.V.Loading,
          g = { type: "user", alias: l };
        (0, r.useEffect)(() => {
          let i;
          return (
            e === d.V.Failure && (i = window.setTimeout(() => t(null), 2e3)),
            () => {
              clearTimeout(i);
            }
          );
        }, [e, t]);
        const h = e ? () => t(null) : () => t(d.V.Confirm);
        return e === d.V.Failure
          ? (0, a.tZ)(
              "div",
              { sx: { color: "ds.text.danger.standard", display: "flex", alignItems: "center" } },
              s || (s = (0, a.tZ)(o.aNP, { color: "ds.text.danger.standard" })),
              " ",
              p("webapp_shared_access_cancel_failure")
            )
          : (0, a.tZ)(
              "div",
              null,
              (0, a.tZ)(
                a.zx,
                { intensity: e ? "quiet" : "supershy", disabled: m, onClick: h },
                p(e ? "webapp_shared_access_cancel" : "webapp_shared_access_cancel_invitation")
              ),
              e
                ? (0, a.tZ)(
                    a.zx,
                    {
                      mood: "danger",
                      intensity: "catchy",
                      sx: { ml: "16px" },
                      disabled: m,
                      onClick: () =>
                        (async () => {
                          t(d.V.Loading);
                          const e = await (async () => {
                            try {
                              const { success: e } = await c.C.revokeSharing({ itemGroupId: i, recipient: g });
                              return e;
                            } catch (e) {
                              return !1;
                            }
                          })();
                          t(e ? d.V.Success : d.V.Failure);
                        })()
                    },
                    m ? n || (n = (0, a.tZ)(o.HoD, null)) : p("webapp_shared_access_confirm")
                  )
                : null
            );
      };
      var f;
      const b = (e) => {
          const { status: i, permission: t } = e;
          return "pending" === i
            ? "webapp_shared_access_pending_invitation"
            : "accepted" === i
            ? "admin" === t
              ? "webapp_sharing_permissions_full_rights"
              : "webapp_sharing_permissions_limited_rights"
            : "";
        },
        I = ({ itemGroupId: e, openEditPermissionsDialog: i, member: t }) => {
          const [s, n] = (0, r.useState)(null),
            o = (0, S.j)()?.login,
            { translate: l } = (0, u.Z)();
          if (s === d.V.Success) return null;
          const { permission: c, status: p } = t,
            I = t.isAdmin && o !== t.recipientId,
            C =
              "pending" === p
                ? (0, a.tZ)(y, { recipientId: t.recipientId, itemGroupId: e, cancelStatus: s, setCancelStatus: n })
                : (0, a.tZ)(
                    h.M,
                    {
                      disabled: t.isInSharedCollection,
                      intensity: "supershy",
                      onClick: () =>
                        i(
                          ((e) =>
                            e.isGroup
                              ? { type: "userGroup", groupId: e.recipientId, name: e.recipientName }
                              : { type: "user", alias: e.recipientId })(t),
                          c
                        ),
                      content: l("webapp_sharing_collection_access_description_tooltip"),
                      tooltipSx: { textWrap: "wrap", maxWidth: "240px" }
                    },
                    l("webapp_shared_access_edit_permissions")
                  );
          return (0, a.tZ)(
            "li",
            {
              key: t.recipientId,
              sx: {
                alignItems: "center",
                borderStyle: "solid",
                borderBottomWidth: "1px",
                borderColor: "ds.border.neutral.standard.idle",
                display: "flex",
                minHeight: "64px",
                position: "relative"
              }
            },
            (0, a.tZ)(g.r, {
              infoAction: I ? C : null,
              logo: t.isGroup ? f || (f = (0, a.tZ)(_.Z, null)) : (0, a.tZ)(m.q, { email: t.recipientName, size: 36 }),
              text: l(b(t)),
              title: t.recipientName,
              disabled: s === d.V.Loading
            })
          );
        };
      var C = t(342573);
      const v = ({ id: e, isAdmin: i }) => {
        const { translate: t } = (0, u.Z)(),
          [s, n] = (0, r.useState)(!1),
          [m, g] = (0, r.useState)(null),
          { isReady: h, itemGroupId: _, users: S, groups: y, collections: f } = (0, C.r)(e, i);
        if (!h)
          return (0, a.tZ)(o.HoD, { color: "ds.container.expressive.brand.catchy.idle", size: 50, sx: { alignSelf: "center", m: "20px" } });
        const b = (e) => {
            m && g({ ...m, step: e });
          },
          v = async () => {
            if (!m) return;
            const { recipient: e, permission: i } = m;
            n(!0);
            const t =
              "revoke" === i
                ? await (async (e) => {
                    try {
                      const { success: i } = await c.C.revokeSharing({ itemGroupId: null != _ ? _ : "", recipient: e });
                      return i;
                    } catch (e) {
                      return !1;
                    }
                  })(e)
                : await (async (e, i) => {
                    try {
                      const { success: t } = await c.C.updateSharingPermission({
                        itemGroupId: null != _ ? _ : "",
                        recipient: e,
                        permission: i
                      });
                      return t;
                    } catch (e) {
                      return !1;
                    }
                  })(e, i);
            if (t) {
              const e = "revoke" === i ? d.PermissionDialogStep.RevokeSuccess : d.PermissionDialogStep.Success;
              b(e);
            } else b(d.PermissionDialogStep.Failure);
            n(!1);
          },
          x = (e, i) => {
            const t = {
              recipient: e,
              permission: i,
              originPermission: i,
              step: d.PermissionDialogStep.Permission,
              name: (0, l.isGroupRecipient)(e) ? e.name : e.alias
            };
            g(t);
          };
        return (0, a.tZ)(
          "div",
          { sx: { flex: "1", overflowY: "auto", p: "24px" } },
          f?.length
            ? (0, a.tZ)(
                r.Fragment,
                null,
                (0, a.tZ)(
                  a.X6,
                  { as: "h3", textStyle: "ds.title.block.small", color: "ds.text.neutral.quiet", sx: { textTransform: "uppercase" } },
                  t("webapp_shared_access_collections")
                ),
                (0, a.tZ)(
                  "ul",
                  { sx: { flex: "1" } },
                  f.map((e) =>
                    (0, a.tZ)(I, { key: e.recipientId, member: e, itemGroupId: null != _ ? _ : "", openEditPermissionsDialog: x })
                  )
                )
              )
            : null,
          y?.length || S?.length
            ? (0, a.tZ)(
                r.Fragment,
                null,
                (0, a.tZ)(
                  a.X6,
                  {
                    as: "h3",
                    textStyle: "ds.title.block.small",
                    color: "ds.text.neutral.quiet",
                    sx: { m: "20px 0 0 0", textTransform: "uppercase" }
                  },
                  t("webapp_shared_access_users_groups")
                ),
                (0, a.tZ)(
                  "ul",
                  { sx: { flex: "1" } },
                  y.map((e) =>
                    (0, a.tZ)(I, { key: e.recipientId, member: e, itemGroupId: null != _ ? _ : "", openEditPermissionsDialog: x })
                  ),
                  S.map((e) =>
                    (0, a.tZ)(I, { key: e.recipientId, member: e, itemGroupId: null != _ ? _ : "", openEditPermissionsDialog: x })
                  )
                )
              )
            : null,
          m &&
            (0, a.tZ)(p.E, {
              isOpen: !0,
              loading: s,
              onCancelRevoke: () => {
                m && g({ ...m, step: d.PermissionDialogStep.Permission });
              },
              onConfirmRevoke: v,
              onDismiss: () => g(null),
              onSelectPermission: (e) => {
                m && g({ ...m, permission: e });
              },
              onValidatePermission: () => {
                "revoke" === m?.permission ? g({ ...m, step: d.PermissionDialogStep.ConfirmRevoke }) : v();
              },
              originPermission: m.originPermission,
              permission: m.permission,
              recipient: m.recipient,
              step: m.step
            })
        );
      };
    },
    880706: (e, i, t) => {
      t.d(i, { d: () => r });
      var s = t(528144),
        n = t(635164);
      const r = ({ routes: e, location: i }) => {
        i?.state?.entity
          ? (0, s.yy)(i?.state?.entity)
            ? (0, n.uX)(e.userSharingGroupInfo(i?.state?.entity?.groupId))
            : (0, n.uX)(e.userSharingUserInfo(i?.state?.entity?.alias))
          : (0, n.uX)(e.userSharingCenter);
      };
    }
  }
]);
