"use strict";
(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [8693],
  {
    182401: (e, t, i) => {
      i.r(t), i.d(t, { NoteAddPanel: () => N });
      var s = i(66941),
        n = i(947843),
        a = i(988799),
        r = i(696832),
        o = i(142897),
        c = i(660765),
        l = i(148038),
        u = i(537026),
        p = i(62429),
        d = i(635164),
        m = i(676849),
        g = i(38025),
        S = i(60043),
        h = i(885131),
        y = i(796446),
        I = i(234931),
        _ = i(97242),
        b = i(507525),
        f = i(396119),
        C = i(919663),
        v = i(83541),
        x = i(925394);
      const { CONTENT: w, DOCUMENT_STORAGE: Z } = I.SecureNoteTabs,
        P = { noteCategories: { query: s.C.getNoteCategories } },
        k = { strategies: P },
        N = (0, n.$)(
          (0, a.i)(({ lee: e, noteCategories: t }) => {
            var i, n;
            const { routes: a } = (0, S.Xo)(),
              I = (0, C.aV)(),
              P = (0, g.Y)(),
              { openPaywall: k } = (0, m.nL)(),
              N = (0, d.k6)(),
              [G, A] = (0, r.useState)(w),
              [q, D] = (0, r.useState)(!1),
              [T, E] = (0, r.useState)(!1),
              [R, F] = (0, r.useState)([]),
              [V, L] = (0, r.useState)({
                category: "noCategory",
                type: "GRAY",
                spaceId: null != (i = (0, u.B)(e.globalState)) ? i : "",
                secured: !1
              }),
              [O, U] = (0, r.useState)(!1),
              [z, B] = (0, r.useState)(!1),
              [H, W] = (0, r.useState)(""),
              [X, M] = (0, r.useState)(""),
              Y = { attachments: R.map(_.w), id: "", limitedPermissions: !1, content: H, title: X, ...V };
            if (
              ((0, r.useEffect)(() => {
                (0, p.Nc)(c.PageView.ItemSecureNoteCreate);
              }, []),
              P.status !== l.rq.Success || !P?.data)
            )
              return null;
            const j = (0, v.n6)(v.Co.SecureNotes, P.data?.capabilities),
              K = () => {
                (0, p.Nc)(c.PageView.ItemSecureNoteList), (0, f.P)(), (0, d.uX)(a.userSecureNotes);
              },
              Q = () => D(!0);
            return (
              j && (k(v.qd.SecureNote), N.push("/secure-notes")),
              (0, o.tZ)(
                y.zI,
                {
                  isViewingExistingItem: !1,
                  itemHasBeenEdited: q,
                  submitPending: T,
                  onSubmit: async () => {
                    if (!T) {
                      E(!0);
                      try {
                        await (async () => {
                          await s.C.addSecureNote({ ...V, content: H, title: X, attachments: Y.attachments }), F([]);
                        })();
                      } catch {
                        E(!1);
                      }
                      K();
                    }
                  },
                  secondaryActions:
                    G === Z
                      ? [
                          n ||
                            (n = (0, o.tZ)(b.d, {
                              isQuotaReached: !1,
                              isShared: !1,
                              onFileUploadStarted: () => {
                                U(!0);
                              },
                              onFileUploadDone: async (e) => {
                                U(!1),
                                  e.success &&
                                    (await s.C.commitSecureFile({ secureFileInfo: e.secureFileInfo }), F([...R, e.secureFileInfo]), D(!0));
                              },
                              key: "uploadAction",
                              dataType: "KWSecureNote"
                            }))
                        ]
                      : [],
                  primaryActions: [],
                  onNavigateOut: () => {
                    R.forEach(async (e) => {
                      const { Id: t } = e;
                      await s.C.deleteSecureFile({ id: t });
                    }),
                      (0, f.P)(),
                      F([]),
                      K();
                  },
                  formId: "add_securenote_panel",
                  header: (0, o.tZ)(x.h, {
                    activeTab: G,
                    backgroundColor: Y.type,
                    displayDocumentStorage: !0,
                    displaySharedAccess: !1,
                    setActiveTab: A,
                    title: X,
                    setTitle: (e) => {
                      Q(), M(e);
                    }
                  })
                },
                (0, o.tZ)(h.T, {
                  activeTab: G,
                  data: Y,
                  content: H,
                  setContent: W,
                  handleFileInfoDetached: (e) => {
                    F(R.filter((t) => t.Id !== e));
                  },
                  hasAttachment: !1,
                  isAdmin: !1,
                  isSecureNoteAttachmentEnabled: I,
                  isShared: !1,
                  isUploading: O,
                  lee: e,
                  noteCategories: t.items,
                  onModifyData: Q,
                  saveSecureNoteOptions: L,
                  isEditing: z,
                  setIsEditing: B
                })
              )
            );
          }, k),
          P
        );
    },
    342573: (e, t, i) => {
      i.d(t, { r: () => h });
      var s = i(133354),
        n = i(604400),
        a = i(242542),
        r = i(172721),
        o = i(799852);
      const c = (e) => {
        const t = ((e) => (0, o.k)(r.a, "getSharedCollections", { collectionIds: e }))(e);
        return t.status === s.rq.Success ? t.data : [];
      };
      var l = i(148038),
        u = i(66941),
        p = i(526849);
      const d = (e, t, i = !1) => ({
          recipientId: e.groupId,
          recipientName: e.name,
          isGroup: !0,
          permission: e.permission,
          status: e.status,
          isAdmin: t,
          isInSharedCollection: i
        }),
        m = (e, t, i = !1) => ({
          recipientId: e.userId,
          recipientName: e.alias,
          isGroup: !1,
          permission: e.permission,
          status: e.status,
          isAdmin: t,
          isInSharedCollection: i
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
        S = (0, p.sortBy)((0, p.compose)(p.toLower, (0, p.prop)("recipientName")));
      function h(e, t) {
        const { collectionIds: i, itemGroupId: r, isReady: o } = (0, a.b)(e),
          p = (function (e) {
            return (0, l.qr)(
              {
                queryConfig: { query: u.C.getGroupRecipients, queryParam: e },
                liveConfig: { live: u.C.liveGroupRecipients, liveParam: e }
              },
              []
            );
          })(e),
          h = (function (e) {
            return (0, l.qr)(
              { queryConfig: { query: u.C.getUserRecipients, queryParam: e }, liveConfig: { live: u.C.liveUserRecipients, liveParam: e } },
              []
            );
          })(e),
          y = c(i),
          I = i.length ? y : [];
        if (h.status !== s.rq.Success || p.status !== s.rq.Success || !o) return { isReady: !1, users: [], groups: [], collections: [] };
        const _ = h.data.map((e) => m(e, t)),
          b = p.data.map((e) => d(e, t)),
          f = I.map((e) => g(e)),
          C = S(_),
          v = S(b),
          x = S(f),
          w = t && C.filter(({ permission: e, status: t }) => e === n.y3.Admin && t === n.qb.Accepted).length < 2;
        return { users: C, groups: v, itemGroupId: r, isReady: !0, collections: x, isLastAdmin: w };
      }
    },
    642844: (e, t, i) => {
      i.d(t, { u: () => v });
      var s,
        n,
        a = i(696832),
        r = i(142897),
        o = i(441217),
        c = i(453576),
        l = i(66941),
        u = i(201389),
        p = i(427658),
        d = i(993026),
        m = i(351433),
        g = i(683773),
        S = i(360592),
        h = i(220315),
        y = i(716514);
      const I = ({ cancelStatus: e, itemGroupId: t, setCancelStatus: i, recipientId: c }) => {
        const { translate: p } = (0, u.Z)(),
          m = e === d.V.Loading,
          g = { type: "user", alias: c };
        (0, a.useEffect)(() => {
          let t;
          return (
            e === d.V.Failure && (t = window.setTimeout(() => i(null), 2e3)),
            () => {
              clearTimeout(t);
            }
          );
        }, [e, i]);
        const S = e ? () => i(null) : () => i(d.V.Confirm);
        return e === d.V.Failure
          ? (0, r.tZ)(
              "div",
              { sx: { color: "ds.text.danger.standard", display: "flex", alignItems: "center" } },
              s || (s = (0, r.tZ)(o.aNP, { color: "ds.text.danger.standard" })),
              " ",
              p("webapp_shared_access_cancel_failure")
            )
          : (0, r.tZ)(
              "div",
              null,
              (0, r.tZ)(
                r.zx,
                { intensity: e ? "quiet" : "supershy", disabled: m, onClick: S },
                p(e ? "webapp_shared_access_cancel" : "webapp_shared_access_cancel_invitation")
              ),
              e
                ? (0, r.tZ)(
                    r.zx,
                    {
                      mood: "danger",
                      intensity: "catchy",
                      sx: { ml: "16px" },
                      disabled: m,
                      onClick: () =>
                        (async () => {
                          i(d.V.Loading);
                          const e = await (async () => {
                            try {
                              const { success: e } = await l.C.revokeSharing({ itemGroupId: t, recipient: g });
                              return e;
                            } catch (e) {
                              return !1;
                            }
                          })();
                          i(e ? d.V.Success : d.V.Failure);
                        })()
                    },
                    m ? n || (n = (0, r.tZ)(o.HoD, null)) : p("webapp_shared_access_confirm")
                  )
                : null
            );
      };
      var _;
      const b = (e) => {
          const { status: t, permission: i } = e;
          return "pending" === t
            ? "webapp_shared_access_pending_invitation"
            : "accepted" === t
            ? "admin" === i
              ? "webapp_sharing_permissions_full_rights"
              : "webapp_sharing_permissions_limited_rights"
            : "";
        },
        f = ({ itemGroupId: e, openEditPermissionsDialog: t, member: i }) => {
          const [s, n] = (0, a.useState)(null),
            o = (0, y.j)()?.login,
            { translate: c } = (0, u.Z)();
          if (s === d.V.Success) return null;
          const { permission: l, status: p } = i,
            f = i.isAdmin && o !== i.recipientId,
            C =
              "pending" === p
                ? (0, r.tZ)(I, { recipientId: i.recipientId, itemGroupId: e, cancelStatus: s, setCancelStatus: n })
                : (0, r.tZ)(
                    S.M,
                    {
                      disabled: i.isInSharedCollection,
                      intensity: "supershy",
                      onClick: () =>
                        t(
                          ((e) =>
                            e.isGroup
                              ? { type: "userGroup", groupId: e.recipientId, name: e.recipientName }
                              : { type: "user", alias: e.recipientId })(i),
                          l
                        ),
                      content: c("webapp_sharing_collection_access_description_tooltip"),
                      tooltipSx: { textWrap: "wrap", maxWidth: "240px" }
                    },
                    c("webapp_shared_access_edit_permissions")
                  );
          return (0, r.tZ)(
            "li",
            {
              key: i.recipientId,
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
            (0, r.tZ)(g.r, {
              infoAction: f ? C : null,
              logo: i.isGroup ? _ || (_ = (0, r.tZ)(h.Z, null)) : (0, r.tZ)(m.q, { email: i.recipientName, size: 36 }),
              text: c(b(i)),
              title: i.recipientName,
              disabled: s === d.V.Loading
            })
          );
        };
      var C = i(342573);
      const v = ({ id: e, isAdmin: t }) => {
        const { translate: i } = (0, u.Z)(),
          [s, n] = (0, a.useState)(!1),
          [m, g] = (0, a.useState)(null),
          { isReady: S, itemGroupId: h, users: y, groups: I, collections: _ } = (0, C.r)(e, t);
        if (!S)
          return (0, r.tZ)(o.HoD, { color: "ds.container.expressive.brand.catchy.idle", size: 50, sx: { alignSelf: "center", m: "20px" } });
        const b = (e) => {
            m && g({ ...m, step: e });
          },
          v = async () => {
            if (!m) return;
            const { recipient: e, permission: t } = m;
            n(!0);
            const i =
              "revoke" === t
                ? await (async (e) => {
                    try {
                      const { success: t } = await l.C.revokeSharing({ itemGroupId: null != h ? h : "", recipient: e });
                      return t;
                    } catch (e) {
                      return !1;
                    }
                  })(e)
                : await (async (e, t) => {
                    try {
                      const { success: i } = await l.C.updateSharingPermission({
                        itemGroupId: null != h ? h : "",
                        recipient: e,
                        permission: t
                      });
                      return i;
                    } catch (e) {
                      return !1;
                    }
                  })(e, t);
            if (i) {
              const e = "revoke" === t ? d.PermissionDialogStep.RevokeSuccess : d.PermissionDialogStep.Success;
              b(e);
            } else b(d.PermissionDialogStep.Failure);
            n(!1);
          },
          x = (e, t) => {
            const i = {
              recipient: e,
              permission: t,
              originPermission: t,
              step: d.PermissionDialogStep.Permission,
              name: (0, c.isGroupRecipient)(e) ? e.name : e.alias
            };
            g(i);
          };
        return (0, r.tZ)(
          "div",
          { sx: { flex: "1", overflowY: "auto", p: "24px" } },
          _?.length
            ? (0, r.tZ)(
                a.Fragment,
                null,
                (0, r.tZ)(
                  r.X6,
                  { as: "h3", textStyle: "ds.title.block.small", color: "ds.text.neutral.quiet", sx: { textTransform: "uppercase" } },
                  i("webapp_shared_access_collections")
                ),
                (0, r.tZ)(
                  "ul",
                  { sx: { flex: "1" } },
                  _.map((e) =>
                    (0, r.tZ)(f, { key: e.recipientId, member: e, itemGroupId: null != h ? h : "", openEditPermissionsDialog: x })
                  )
                )
              )
            : null,
          I?.length || y?.length
            ? (0, r.tZ)(
                a.Fragment,
                null,
                (0, r.tZ)(
                  r.X6,
                  {
                    as: "h3",
                    textStyle: "ds.title.block.small",
                    color: "ds.text.neutral.quiet",
                    sx: { m: "20px 0 0 0", textTransform: "uppercase" }
                  },
                  i("webapp_shared_access_users_groups")
                ),
                (0, r.tZ)(
                  "ul",
                  { sx: { flex: "1" } },
                  I.map((e) =>
                    (0, r.tZ)(f, { key: e.recipientId, member: e, itemGroupId: null != h ? h : "", openEditPermissionsDialog: x })
                  ),
                  y.map((e) =>
                    (0, r.tZ)(f, { key: e.recipientId, member: e, itemGroupId: null != h ? h : "", openEditPermissionsDialog: x })
                  )
                )
              )
            : null,
          m &&
            (0, r.tZ)(p.E, {
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
    }
  }
]);
