"use strict";
(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [7357],
  {
    104961: (e, t, a) => {
      a.r(t), a.d(t, { NoteEditPanel: () => H });
      var i = a(696832),
        s = a(660765),
        n = a(66941),
        r = a(947843),
        o = a(62429),
        c = a(988799),
        l = a(635164),
        d = a(995445),
        u = a(133354),
        m = a(348958),
        g = a(604400),
        p = a(342573),
        _ = a(382706),
        h = a(201389),
        S = a(60043),
        b = a(880706),
        y = a(234931),
        C = a(372814),
        E = a(405231),
        I = a(796446),
        A = a(793071),
        N = a(885131),
        w = a(889483),
        f = a(97242),
        D = a(507525),
        T = a(396119),
        v = a(919663),
        P = a(925394);
      const { CONTENT: F, DOCUMENT_STORAGE: O, MORE_OPTIONS: k, SHARED_ACCESS: q } = y.SecureNoteTabs,
        L = (e) => (0, A.A1)(e),
        R = (0, w.DP)(({ lee: e, location: t, note: a, noteCategories: r, isShared: c, isAdmin: d, sharedAccessData: u }) => {
          var m;
          const { translate: g } = (0, h.Z)(),
            { routes: p } = (0, S.Xo)(),
            A = (0, v.aV)(),
            [w, R] = (0, i.useState)(F),
            [U, V] = (0, i.useState)(!1),
            [X] = (0, i.useState)(null),
            [M, H] = (0, i.useState)(!1),
            [$, x] = (0, i.useState)(!1),
            [z, B] = (0, i.useState)(!1),
            [G, K] = (0, i.useState)(!1),
            [Q, W] = (0, i.useState)(!1),
            [Y, Z] = (0, i.useState)(() => a.content),
            [j, J] = (0, i.useState)(() => a.title),
            ee = () => {
              (0, T.P)(),
                t?.state?.entity
                  ? (0, b.d)({ routes: p, location: t })
                  : ((0, o.Nc)(s.PageView.ItemSecureNoteList), (0, l.uX)(p.userSecureNotes));
            },
            te = async (e = !0) => {
              var t;
              B(!0);
              const i = null != X ? X : { spaceId: null != (t = a.spaceId) ? t : "" };
              await n.C.updateSecureNote({ content: Y, title: j, id: a.id, attachments: [...a.attachments], ...i }),
                B(!1),
                e ? ee() : (W(!1), V(!1));
            },
            ae = () => {
              K(!0);
            },
            ie = async (e) => {
              K(!1),
                e.success &&
                  (await n.C.commitSecureFile({ secureFileInfo: e.secureFileInfo }),
                  a.attachments.push((0, f.w)(e.secureFileInfo)),
                  te(!1));
            },
            se = () => V(!0),
            ne = c,
            re = A || a.attachments.length > 0,
            oe = [F, k];
          ne ? oe.push(q) : re && oe.push(O);
          const ce = {
              confirmDeleteConfirm: g("webapp_secure_notes_edition_delete_confirm"),
              confirmDeleteDismiss: g("webapp_credential_edition_delete_dismiss"),
              confirmDeleteSubtitle: g("webapp_credential_edition_confirm_delete_subtitle"),
              confirmDeleteTitle: g("webapp_secure_notes_edition_delete_title"),
              lastAdminActionLabel: g("webapp_credential_edition_change_permissions"),
              lastAdminTitle: g("webapp_credential_edition_last_admin_title"),
              lastAdminSubtitle: g("webapp_credential_edition_last_admin_subtitle"),
              groupSharingTitle: g("webapp_secure_notes_edition_group_sharing_title"),
              groupSharingSubtitle: g("webapp_credential_edition_group_sharing_subtitle"),
              genericErrorTitle: "webapp_account_recovery_generic_error_title",
              genericErrorSubtitle: "webapp_account_recovery_generic_error_subtitle"
            },
            le = {
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
            de = c ? u.users.length + u.groups.length : 0;
          return i.createElement(
            I.zI,
            {
              isViewingExistingItem: !0,
              itemHasBeenEdited: U,
              onSubmit: () => {
                te();
              },
              submitPending: z,
              secondaryActions: (() => {
                switch (w) {
                  case F:
                    return [m || (m = i.createElement(C.N, { item: a, getSharing: L, key: "shareaction" }))];
                  case O:
                    return [
                      i.createElement(D.d, {
                        isQuotaReached: !1,
                        onFileUploadStarted: ae,
                        onFileUploadDone: ie,
                        isShared: c,
                        itemId: a.id,
                        key: "uploadAction",
                        dataType: "KWSecureNote"
                      })
                    ];
                  default:
                    return [];
                }
              })(),
              onNavigateOut: ee,
              onClickDelete: () => H(!0),
              ignoreCloseOnEscape: M || $,
              isSomeDialogOpen: M,
              formId: "edit_securenote_panel",
              header: i.createElement(P.h, {
                activeTab: w,
                backgroundColor: le.type,
                displayDocumentStorage: oe.includes(O),
                displaySharedAccess: oe.includes(q),
                recipientsCount: de,
                setActiveTab: R,
                disabled: c && !d,
                title: j,
                setTitle: (e) => {
                  se(), J(e);
                }
              })
            },
            i.createElement(N.T, {
              activeTab: w,
              data: le,
              content: Y,
              setContent: Z,
              handleFileInfoDetached: (e) => {
                (a.attachments = a.attachments.filter((t) => t.id !== e)), te(!1);
              },
              hasAttachment: a.attachments.length > 0,
              isAdmin: d,
              isSecureNoteAttachmentEnabled: A,
              isShared: c,
              isUploading: G,
              isEditing: Q,
              setIsEditing: W,
              lee: e,
              noteCategories: r.items,
              onModifyData: se,
              onModalDisplayStateChange: x,
              saveSecureNoteOptions: (e) => {
                const { category: t, spaceId: i, type: s, secured: r } = e;
                n.C.updateSecureNote({ id: a.id, spaceId: null != i ? i : "", type: s, category: t, secured: r });
              }
            }),
            i.createElement(E.s, {
              isVisible: M,
              itemId: a.id,
              closeConfirmDeleteDialog: () => H(!1),
              goToSharingAccess: () => {
                R(y.SecureNoteTabs.SHARED_ACCESS);
              },
              onDeletionSuccess: async () => {
                a.attachments.forEach(async (e) => {
                  const { id: t } = e;
                  await n.C.deleteSecureFile({ id: t });
                }),
                  ee();
              },
              sharingStatus: { isShared: c, groupSharing: u.groups.length > 0, lastAdmin: u.isLastAdmin },
              translations: ce,
              vaultItemType: _.U.SecureNote
            })
          );
        }),
        U = (e) => {
          const { note: t } = e,
            { getPermissionForItem: a, getSharingStatusForItem: s } = (0, d.Y)(
              m.X,
              { getPermissionForItem: { queryParam: { itemId: t.id } }, getSharingStatusForItem: { queryParam: { itemId: t.id } } },
              []
            ),
            n = !!s.data?.isShared,
            r = n && a.data?.permission === g.y3.Admin,
            o = (0, p.r)(t.id, !!r);
          return a.status === u.rq.Loading || s.status === u.rq.Loading
            ? null
            : i.createElement(R, { ...e, isShared: n, isAdmin: r, sharedAccessData: o });
        },
        V = (e) => {
          if (!e.match.params) throw new Error("missing route `params`");
          return `{${e.match.params.uuid}}`;
        },
        X = {
          note: { live: n.C.liveNote, liveParam: V, query: n.C.getNote, queryParam: V },
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
              t ? i.createElement(U, { ...e }) : null
            );
          }, M),
          X
        );
    }
  }
]);
