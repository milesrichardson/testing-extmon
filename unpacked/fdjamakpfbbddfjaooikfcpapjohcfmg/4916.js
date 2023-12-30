"use strict";
(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [4916],
  {
    64676: (e, t, a) => {
      a.r(t), a.d(t, { NoteEditPanel: () => H });
      var i = a(696832),
        s = a(593039),
        n = a(740300),
        r = a(689611),
        o = a(45272),
        c = a(886662),
        l = a(692077),
        d = a(995445),
        u = a(133354),
        m = a(348958),
        p = a(982466),
        S = a(382706),
        _ = a(488203),
        g = a(276376),
        h = a(66485),
        b = a(625078),
        y = a(86541),
        I = a(762042),
        C = a(682994),
        E = a(376452),
        A = a(99822),
        N = a(728644),
        w = a(830894),
        f = a(899193),
        D = a(773157),
        T = a(420684),
        P = a(671785),
        v = a(326239),
        F = a(979808);
      const { CONTENT: q, DOCUMENT_STORAGE: O, MORE_OPTIONS: k, SHARED_ACCESS: U } = y.SecureNoteTabs,
        V = (e) => (0, A.A1)(e),
        L = (0, w.DP)(
          ({ lee: e, location: t, note: a, noteCategories: r, isShared: c, isAdmin: d, isSharedViaUserGroup: m, isLastAdmin: p }) => {
            var A;
            const { translate: w } = (0, _.Z)(),
              { routes: L } = (0, g.Xo)(),
              G = (0, P.aV)(),
              { shouldShowTrialDiscontinuedDialog: R } = (0, h.yp)(),
              [X, M] = (0, i.useState)(q),
              [H, $] = (0, i.useState)(!1),
              [x] = (0, i.useState)(null),
              [z, B] = (0, i.useState)(!1),
              [K, Q] = (0, i.useState)(!1),
              [W, Y] = (0, i.useState)(!1),
              [Z, j] = (0, i.useState)(!1),
              [J, ee] = (0, i.useState)(!1),
              [te, ae] = (0, i.useState)(() => a.content),
              [ie, se] = (0, i.useState)(() => a.title),
              { data: ne, status: re } = (0, F.r)(a.id),
              oe = () => {
                (0, T.P)(),
                  t?.state?.entity
                    ? (0, b.d)({ routes: L, location: t })
                    : ((0, o.Nc)(s.PageView.ItemSecureNoteList), (0, l.uX)(L.userSecureNotes));
              },
              ce = async (e = !0) => {
                var t;
                Y(!0);
                const i = null != x ? x : { spaceId: null != (t = a.spaceId) ? t : "" };
                await n.C.updateSecureNote({ content: te, title: ie, id: a.id, attachments: [...a.attachments], ...i }),
                  Y(!1),
                  e ? oe() : (ee(!1), $(!1));
              },
              le = () => {
                j(!0);
              },
              de = async (e) => {
                j(!1),
                  e.success &&
                    (await n.C.commitSecureFile({ secureFileInfo: e.secureFileInfo }),
                    a.attachments.push((0, f.w)(e.secureFileInfo)),
                    ce(!1));
              },
              ue = () => $(!0),
              me = c,
              pe = G || a.attachments.length > 0,
              Se = [q, k];
            me ? Se.push(U) : pe && Se.push(O);
            const _e = {
                confirmDeleteConfirm: w("webapp_secure_notes_edition_delete_confirm"),
                confirmDeleteDismiss: w("webapp_credential_edition_delete_dismiss"),
                confirmDeleteSubtitle: w("webapp_credential_edition_confirm_delete_subtitle"),
                confirmDeleteTitle: w("webapp_secure_notes_edition_delete_title"),
                lastAdminActionLabel: w("webapp_credential_edition_change_permissions"),
                lastAdminTitle: w("webapp_credential_edition_last_admin_title"),
                lastAdminSubtitle: w("webapp_credential_edition_last_admin_subtitle"),
                groupSharingTitle: w("webapp_secure_notes_edition_group_sharing_title"),
                groupSharingSubtitle: w("webapp_credential_edition_group_sharing_subtitle"),
                genericErrorTitle: "webapp_account_recovery_generic_error_title",
                genericErrorSubtitle: "webapp_account_recovery_generic_error_subtitle"
              },
              ge = {
                attachments: a.attachments,
                category: a.category ? a.category.id : "noCategory",
                content: a.content,
                id: a.id,
                limitedPermissions: c && !d,
                secured: a.secured,
                spaceId: a.spaceId,
                title: a.title,
                type: a.color
              },
              he = c && re === u.rq.Success ? ne.count : 0;
            return i.createElement(
              E.zI,
              {
                isViewingExistingItem: !0,
                itemHasBeenEdited: H,
                onSubmit: () => {
                  ce();
                },
                submitPending: W,
                secondaryActions: (() => {
                  switch (X) {
                    case q:
                      return [A || (A = i.createElement(I.N, { item: a, getSharing: V, key: "shareaction" }))];
                    case O:
                      return [
                        i.createElement(D.d, {
                          isQuotaReached: !1,
                          onFileUploadStarted: le,
                          onFileUploadDone: de,
                          isShared: c,
                          itemId: a.id,
                          key: "uploadAction",
                          dataType: "KWSecureNote",
                          disabled: !!R
                        })
                      ];
                    default:
                      return [];
                  }
                })(),
                onNavigateOut: oe,
                onClickDelete: () => B(!0),
                ignoreCloseOnEscape: z || K,
                isSomeDialogOpen: z,
                formId: "edit_securenote_panel",
                header: i.createElement(v.h, {
                  activeTab: X,
                  backgroundColor: ge.type,
                  displayDocumentStorage: Se.includes(O),
                  displaySharedAccess: Se.includes(U),
                  recipientsCount: he,
                  setActiveTab: M,
                  disabled: c && !d,
                  title: ie,
                  setTitle: (e) => {
                    ue(), se(e);
                  }
                })
              },
              i.createElement(N.T, {
                activeTab: X,
                data: ge,
                content: te,
                setContent: ae,
                handleFileInfoDetached: (e) => {
                  (a.attachments = a.attachments.filter((t) => t.id !== e)), ce(!1);
                },
                hasAttachment: a.attachments.length > 0,
                isAdmin: d,
                isSecureNoteAttachmentEnabled: G,
                isShared: c,
                isUploading: Z,
                isEditing: J,
                setIsEditing: ee,
                lee: e,
                noteCategories: r.items,
                onModifyData: ue,
                onModalDisplayStateChange: Q,
                saveSecureNoteOptions: (e) => {
                  const { category: t, spaceId: i, type: s, secured: r } = e;
                  n.C.updateSecureNote({ id: a.id, spaceId: null != i ? i : "", type: s, category: t, secured: r });
                }
              }),
              i.createElement(C.s, {
                isVisible: z,
                itemId: a.id,
                closeConfirmDeleteDialog: () => B(!1),
                goToSharingAccess: () => {
                  M(y.SecureNoteTabs.SHARED_ACCESS);
                },
                onDeletionSuccess: async () => {
                  a.attachments.forEach(async (e) => {
                    const { id: t } = e;
                    await n.C.deleteSecureFile({ id: t });
                  }),
                    oe();
                },
                isLastAdmin: p,
                isShared: c,
                isSharedViaUserGroup: m,
                translations: _e,
                vaultItemType: S.U.SecureNote
              })
            );
          }
        ),
        G = (e) => {
          const { note: t } = e,
            {
              getPermissionForItem: a,
              getSharingStatusForItem: s,
              getIsLastAdminForItem: n
            } = (0, d.Y)(
              m.X,
              {
                getPermissionForItem: { queryParam: { itemId: t.id } },
                getSharingStatusForItem: { queryParam: { itemId: t.id } },
                getIsLastAdminForItem: { queryParam: { itemId: t.id } }
              },
              []
            );
          if (a.status !== u.rq.Success || s.status !== u.rq.Success || n.status !== u.rq.Success) return null;
          const { isShared: r, isSharedViaUserGroup: o } = s.data,
            { permission: c } = a.data,
            { isLastAdmin: l } = n.data,
            S = r && c === p.y3.Admin;
          return i.createElement(L, { ...e, isShared: r, isAdmin: S, isSharedViaUserGroup: o, isLastAdmin: l });
        },
        R = (e) => {
          if (!e.match.params) throw new Error("missing route `params`");
          return `{${e.match.params.uuid}}`;
        },
        X = {
          note: { live: n.C.liveNote, liveParam: R, query: n.C.getNote, queryParam: R },
          noteCategories: { query: n.C.getNoteCategories }
        },
        M = { strategies: X },
        H = (0, r.$)(
          (0, c.i)((e) => {
            const { note: t } = e,
              { routes: a } = (0, l.Xo)(),
              n = i.useCallback(() => !t && ((0, l.uX)(a.userSecureNotes), !0), [t, a.userSecureNotes]);
            return (
              i.useEffect(() => {
                n() || (0, o.Nc)(s.PageView.ItemSecureNoteDetails);
              }, [n]),
              i.useEffect(() => {
                n();
              }, [n, t]),
              t ? i.createElement(G, { ...e }) : null
            );
          }, M),
          X
        );
    }
  }
]);
