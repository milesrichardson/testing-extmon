"use strict";
(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [653],
  {
    766490: (e, t, i) => {
      i.r(t), i.d(t, { NoteAddPanel: () => N });
      var s = i(740300),
        n = i(689611),
        a = i(886662),
        o = i(696832),
        r = i(876307),
        c = i(593039),
        l = i(148038),
        d = i(739649),
        p = i(45272),
        u = i(692077),
        m = i(108403),
        g = i(114943),
        _ = i(66485),
        h = i(276376),
        S = i(728644),
        I = i(376452),
        y = i(86541),
        b = i(899193),
        w = i(773157),
        C = i(420684),
        f = i(671785),
        v = i(413368),
        Z = i(326239);
      const { CONTENT: x, DOCUMENT_STORAGE: P } = y.SecureNoteTabs,
        k = { noteCategories: { query: s.C.getNoteCategories } },
        D = { strategies: k },
        N = (0, n.$)(
          (0, a.i)(({ lee: e, noteCategories: t }) => {
            var i, n;
            const { routes: a } = (0, h.Xo)(),
              y = (0, f.aV)(),
              k = (0, g.Y)(),
              { openPaywall: D } = (0, m.nL)(),
              N = (0, u.k6)(),
              { openDialog: T, shouldShowTrialDiscontinuedDialog: E } = (0, _.yp)(),
              [A, F] = (0, o.useState)(x),
              [V, G] = (0, o.useState)(!1),
              [z, L] = (0, o.useState)(!1),
              [O, R] = (0, o.useState)([]),
              [U, q] = (0, o.useState)({
                category: "noCategory",
                type: "GRAY",
                spaceId: null != (i = (0, d.B)(e.globalState)) ? i : "",
                secured: !1
              }),
              [B, H] = (0, o.useState)(!1),
              [M, W] = (0, o.useState)(!1),
              [X, Y] = (0, o.useState)(""),
              [j, K] = (0, o.useState)(""),
              Q = { attachments: O.map(b.w), id: "", limitedPermissions: !1, content: X, title: j, ...U };
            if (
              ((0, o.useEffect)(() => {
                (0, p.Nc)(c.PageView.ItemSecureNoteCreate);
              }, []),
              (0, o.useEffect)(() => {
                E && T();
              }, [E]),
              k.status !== l.rq.Success || !k?.data)
            )
              return null;
            const $ = (0, v.n6)(v.Co.SecureNotes, k.data?.capabilities),
              J = () => {
                (0, p.Nc)(c.PageView.ItemSecureNoteList), (0, C.P)(), (0, u.uX)(a.userSecureNotes);
              },
              ee = () => G(!0);
            return (
              $ && (D(v.qd.SecureNote), N.push("/secure-notes")),
              (0, r.tZ)(
                I.zI,
                {
                  isViewingExistingItem: !1,
                  itemHasBeenEdited: V,
                  submitPending: z,
                  onSubmit: async () => {
                    if (!z) {
                      L(!0);
                      try {
                        await (async () => {
                          await s.C.addSecureNote({ ...U, content: X, title: j, attachments: Q.attachments }), R([]);
                        })();
                      } catch {
                        L(!1);
                      }
                      J();
                    }
                  },
                  secondaryActions:
                    A === P
                      ? [
                          n ||
                            (n = (0, r.tZ)(w.d, {
                              isQuotaReached: !1,
                              isShared: !1,
                              onFileUploadStarted: () => {
                                H(!0);
                              },
                              onFileUploadDone: async (e) => {
                                H(!1),
                                  e.success &&
                                    (await s.C.commitSecureFile({ secureFileInfo: e.secureFileInfo }), R([...O, e.secureFileInfo]), G(!0));
                              },
                              key: "uploadAction",
                              dataType: "KWSecureNote"
                            }))
                        ]
                      : [],
                  primaryActions: [],
                  onNavigateOut: () => {
                    O.forEach(async (e) => {
                      const { Id: t } = e;
                      await s.C.deleteSecureFile({ id: t });
                    }),
                      (0, C.P)(),
                      R([]),
                      J();
                  },
                  formId: "add_securenote_panel",
                  header: (0, r.tZ)(Z.h, {
                    activeTab: A,
                    backgroundColor: Q.type,
                    displayDocumentStorage: !0,
                    displaySharedAccess: !1,
                    setActiveTab: F,
                    title: j,
                    setTitle: (e) => {
                      ee(), K(e);
                    }
                  })
                },
                (0, r.tZ)(S.T, {
                  activeTab: A,
                  data: Q,
                  content: X,
                  setContent: Y,
                  handleFileInfoDetached: (e) => {
                    R(O.filter((t) => t.Id !== e));
                  },
                  hasAttachment: !1,
                  isAdmin: !1,
                  isSecureNoteAttachmentEnabled: y,
                  isShared: !1,
                  isUploading: B,
                  lee: e,
                  noteCategories: t.items,
                  onModifyData: ee,
                  saveSecureNoteOptions: q,
                  isEditing: M,
                  setIsEditing: W
                })
              )
            );
          }, D),
          k
        );
    },
    979808: (e, t, i) => {
      i.d(t, { r: () => a });
      var s = i(799852),
        n = i(348958);
      const a = (e) => (0, s.k)(n.X, "sharedAccessForItem", { itemId: e });
    },
    555449: (e, t, i) => {
      i.d(t, { u: () => E });
      var s,
        n,
        a = i(696832),
        o = i(876307),
        r = i(962899),
        c = i(361607),
        l = i(482598),
        d = i(133354),
        p = i(172721),
        u = i(11098),
        m = i(287279),
        g = i(740300),
        _ = i(488203),
        h = i(343194),
        S = i(448263),
        I = i(232814),
        y = i(904967),
        b = i(873670),
        w = i(989572),
        C = i(58037);
      const f = ({ cancelStatus: e, itemGroupId: t, setCancelStatus: i, recipientId: c }) => {
        const { translate: l } = (0, _.Z)(),
          d = e === S.V.Loading,
          p = { type: "user", alias: c };
        (0, a.useEffect)(() => {
          let t;
          return (
            e === S.V.Failure && (t = window.setTimeout(() => i(null), 2e3)),
            () => {
              clearTimeout(t);
            }
          );
        }, [e, i]);
        const u = e ? () => i(null) : () => i(S.V.Confirm);
        return e === S.V.Failure
          ? (0, o.tZ)(
              "div",
              { sx: { color: "ds.text.danger.standard", display: "flex", alignItems: "center" } },
              s || (s = (0, o.tZ)(r.aNP, { color: "ds.text.danger.standard" })),
              " ",
              l("webapp_shared_access_cancel_failure")
            )
          : (0, o.tZ)(
              "div",
              null,
              (0, o.tZ)(
                o.zx,
                { intensity: e ? "quiet" : "supershy", disabled: d, onClick: u, size: "small" },
                l(e ? "webapp_shared_access_cancel" : "webapp_shared_access_cancel_invitation")
              ),
              e
                ? (0, o.tZ)(
                    o.zx,
                    {
                      mood: "danger",
                      intensity: "catchy",
                      sx: { ml: "16px" },
                      disabled: d,
                      size: "small",
                      onClick: () =>
                        (async () => {
                          i(S.V.Loading);
                          const e = await (async () => {
                            try {
                              const { success: e } = await g.C.revokeSharing({ itemGroupId: t, recipient: p });
                              return e;
                            } catch (e) {
                              return !1;
                            }
                          })();
                          i(e ? S.V.Success : S.V.Failure);
                        })()
                    },
                    d ? n || (n = (0, o.tZ)(r.HoD, null)) : l("webapp_shared_access_confirm")
                  )
                : null
            );
      };
      var v;
      const Z = "webapp_sharing_permissions_full_rights",
        x = "webapp_sharing_permissions_limited_rights",
        P = (e) => {
          const { status: t, permission: i } = e;
          return "pending" === t ? "webapp_shared_access_pending_invitation" : "accepted" === t ? ("admin" === i ? Z : x) : "";
        },
        k = ({ itemGroupId: e, openEditPermissionsDialog: t, member: i, isAdmin: s, isItemPermissionsEnabled: n = !1 }) => {
          const [r, c] = (0, a.useState)(null),
            l = (0, C.j)()?.login,
            { translate: d } = (0, _.Z)();
          if (r === S.V.Success) return null;
          const { permission: p, status: m, recipientType: g } = i,
            h = l === i.recipientId,
            k = s && l !== i.recipientId,
            D =
              "pending" === m
                ? (0, o.tZ)(f, { recipientId: i.recipientId, itemGroupId: e, cancelStatus: r, setCancelStatus: c })
                : (0, o.tZ)(
                    b.M,
                    {
                      disabled: (n && !s) || (!n && i.recipientType === u.I.Collection),
                      icon: "ActionEditOutlined",
                      layout: "iconLeading",
                      intensity: "supershy",
                      onClick: () => t(i, p, g),
                      content: d("webapp_sharing_collection_access_description_tooltip"),
                      tooltipSx: { textWrap: "wrap", maxWidth: "240px" },
                      size: "small"
                    },
                    d("webapp_shared_access_edit_permissions")
                  );
          return (0, o.tZ)(
            "li",
            { key: i.recipientId, sx: { alignItems: "center", display: "flex", minHeight: "48px", position: "relative" } },
            (0, o.tZ)(y.r, {
              infoAction: k ? D : null,
              logo: i.recipientType === u.I.Group ? v || (v = (0, o.tZ)(w.Z, null)) : (0, o.tZ)(I.q, { email: i.recipientName, size: 36 }),
              text: n ? void 0 : P(i) ? d(P(i)) : d("webapp_shared_permissions_dialog_revoke_success_title"),
              title: i.recipientName,
              permissionBadge: n ? (0, o.tZ)(o.Ct, { mood: "admin" === p ? "brand" : "danger", label: d("admin" === p ? Z : x) }) : void 0,
              disabled: r === S.V.Loading,
              titleLogo: h
                ? (0, o.tZ)(o.Ct, {
                    label: d("webapp_shared_access_you_badge").toUpperCase(),
                    layout: "labelOnly",
                    sx: { marginLeft: "4px" }
                  })
                : null
            })
          );
        };
      var D = i(979808),
        N = i(468037),
        T = i(814341);
      const E = ({ id: e, isAdmin: t }) => {
        const { translate: i } = (0, _.Z)(),
          [s, n] = (0, a.useState)(!1),
          [I, y] = (0, a.useState)(null),
          b = (0, c._)(),
          { data: w, status: C } = (0, D.r)(e),
          { updatePermissionForCollectionItem: f, removeItemFromCollections: v } = (0, l.u)(p.a),
          Z = Boolean(b.data?.sharingVault_web_Collection_Item_Permissions_dev);
        if (C !== d.rq.Success)
          return (0, o.tZ)(r.HoD, { color: "ds.container.expressive.brand.catchy.idle", size: 50, sx: { alignSelf: "center", m: "20px" } });
        const { itemGroupId: x, users: P, groups: E, collections: A } = w,
          F = (e) => {
            I && y({ ...I, step: e });
          },
          V = async () => {
            if (!I) return;
            const { recipient: t, permission: i, recipientType: s } = I;
            n(!0);
            const a =
              "revoke" === i
                ? await (async (t, i) => {
                    try {
                      if (i === u.I.Collection) {
                        const i = await v({ collectionIds: [t.recipientId], itemId: e });
                        return !!(0, m.d6)(i);
                      }
                      const { success: s } = await g.C.revokeSharing({ itemGroupId: null != x ? x : "", recipient: (0, T.d)(t) });
                      return s;
                    } catch (e) {
                      return !1;
                    }
                  })(t, s)
                : await (async (e, t, i) => {
                    try {
                      if (i === u.I.Collection) {
                        const i = await f({ groupId: x, collection: { collectionUUID: e.recipientId, permission: t } });
                        return !!(0, m.d6)(i);
                      }
                      {
                        const { success: i } = await g.C.updateSharingPermission({
                          itemGroupId: null != x ? x : "",
                          recipient: (0, T.d)(e),
                          permission: t
                        });
                        return i;
                      }
                    } catch (e) {
                      return !1;
                    }
                  })(t, i, s);
            if (a) {
              const e = "revoke" === i ? S.PermissionDialogStep.RevokeSuccess : S.PermissionDialogStep.Success;
              F(e);
            } else F(S.PermissionDialogStep.Failure);
            n(!1);
          },
          G = (e, t, i) => {
            const s = {
              recipient: e,
              recipientType: i,
              permission: t,
              originPermission: t,
              step: S.PermissionDialogStep.Permission,
              name: e.recipientName
            };
            y(s);
          },
          z = E?.length > 0,
          L = A?.length > 0,
          O = P?.length > 0,
          R = "collection" === I?.recipientType;
        return (0, o.tZ)(
          "div",
          { sx: { flex: "1", overflowY: "auto" } },
          (0, o.tZ)(
            "ul",
            { sx: { flex: "1" } },
            L
              ? (0, o.tZ)(
                  N.u,
                  { title: i("webapp_shared_access_collections"), additionalSx: { marginBottom: "16px" } },
                  A.map((e) =>
                    (0, o.tZ)(k, {
                      isItemPermissionsEnabled: Z,
                      key: e.recipientId,
                      isAdmin: t,
                      member: e,
                      itemGroupId: null != x ? x : "",
                      openEditPermissionsDialog: G
                    })
                  )
                )
              : null,
            z
              ? (0, o.tZ)(
                  N.u,
                  { title: i("webapp_shared_access_groups_card_title"), additionalSx: { marginBottom: "16px" } },
                  E.map((e) =>
                    (0, o.tZ)(k, {
                      key: e.recipientId,
                      isAdmin: t,
                      member: e,
                      itemGroupId: null != x ? x : "",
                      openEditPermissionsDialog: G
                    })
                  )
                )
              : null,
            O
              ? (0, o.tZ)(
                  N.u,
                  { title: i("webapp_shared_access_individuals_card_title") },
                  P.map((e) =>
                    (0, o.tZ)(k, {
                      key: e.recipientId,
                      isAdmin: t,
                      member: e,
                      itemGroupId: null != x ? x : "",
                      openEditPermissionsDialog: G
                    })
                  )
                )
              : null
          ),
          I &&
            (0, o.tZ)(h.E, {
              isOpen: !0,
              isCollectionItemPermission: R,
              loading: s,
              onCancelRevoke: () => {
                I && y({ ...I, step: S.PermissionDialogStep.Permission });
              },
              onConfirmRevoke: V,
              onDismiss: () => y(null),
              onSelectPermission: (e) => {
                I && y({ ...I, permission: e });
              },
              onValidatePermission: () => {
                "revoke" === I?.permission ? y({ ...I, step: S.PermissionDialogStep.ConfirmRevoke }) : V();
              },
              permission: I.permission,
              recipient: I.recipient,
              step: I.step
            })
        );
      };
    }
  }
]);
