"use strict";
(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [3498],
  {
    628722: (e, t, a) => {
      a.r(t), a.d(t, { IdCardEditPanel: () => _, IdGroupTab: () => m });
      var i = a(696832),
        n = a(382706),
        s = a(66941),
        r = a(343966),
        o = a(157631),
        l = a(469869),
        c = a(126750);
      const d = {
          HEADER_DESCRIPTION: "webapp_id_edition_idcard_header_description",
          DIALOG_DELETE_TITLE: "webapp_id_edition_idcard_dialog_delete_title",
          ALERT_DELETE: "webapp_id_edition_idcard_alert_delete",
          ALERT_EDIT: "webapp_id_edition_idcard_alert_edit",
          COPY_SUCCESS: "webapp_id_copy_success_id_card_number"
        },
        u = (e, t) => (a) => {
          const i = (0, o.h)(t, a, r.jx),
            { expirationDate: n, issueDate: l } = i;
          return s.C.editIdCard({
            ...i,
            expirationDate: n ? Date.parse(n) / 1e3 : void 0,
            issueDate: l ? Date.parse(l) / 1e3 : void 0,
            name: i.idName,
            id: e
          });
        };
      let m = (function (e) {
        return (e[(e.DETAILS = 0)] = "DETAILS"), (e[(e.ATTACHMENTS = 1)] = "ATTACHMENTS"), e;
      })({});
      const _ = ({ listRoute: e, id: t, setDialogActive: a, lee: s, hasUnsavedData: r, setHasUnsavedData: o }) =>
        t
          ? i.createElement(
              c.y,
              {
                listRoute: e,
                id: `{${t}}`,
                setDialogActive: a,
                lee: s,
                hasUnsavedData: r,
                setHasUnsavedData: o,
                ID_TYPE: n.U.IdCard,
                I18N_KEYS: d,
                editItem: u
              },
              ({ handleCopy: e, values: t }) => i.createElement(l.P, { variant: "edit", handleCopy: e, country: t.country })
            )
          : null;
    },
    126750: (e, t, a) => {
      a.d(t, { y: () => k });
      var i = a(696832),
        n = a(148038),
        s = a(201389),
        r = a(723815),
        o = a(799852),
        l = a(382706),
        c = a(448430);
      const d = {
        [l.U.DriversLicense]: "driversLicensesResult",
        [l.U.FiscalId]: "fiscalIdsResult",
        [l.U.IdCard]: "idCardsResult",
        [l.U.Passport]: "passportsResult",
        [l.U.SocialSecurityId]: "socialSecurityIdsResult"
      };
      var u = a(660765),
        m = a(635164),
        _ = a(62429),
        p = a(900125),
        D = a(405231),
        E = a(450582),
        g = a(628722),
        b = a(65255),
        f = a(915970);
      const T = (e) => `id-edit-panel-${e}`;
      var h,
        I,
        C = a(453576),
        S = a(142897),
        A = a(854169),
        y = a(695495),
        v = a(441217);
      const w = ({ formId: e, handleCancel: t, handleDelete: a, hasDataBeenModified: i, isSubmitting: n, focusAttachmentTab: r }) => {
        const { translate: o } = (0, s.Z)();
        return (0, y.tZ)(
          v.Ejs,
          { sx: { padding: "24px" }, as: "footer", justifyContent: "flex-start", flexDirection: "row", flexWrap: "nowrap" },
          (0, y.tZ)(
            v.zxk,
            { nature: "secondary", onClick: a, type: "button", disabled: n, sx: { marginRight: "16px" } },
            h || (h = (0, y.tZ)(v.XHJ, null)),
            o("webapp_panel_edition_generic_delete")
          ),
          !!r &&
            (0, y.tZ)(
              v.zxk,
              { key: "attach", nature: "secondary", onClick: r, type: "button" },
              I || (I = (0, y.tZ)(v.FKb, null)),
              o("webapp_secure_notes_add_attachment_action_name")
            ),
          i
            ? (0, y.tZ)(
                v.Ejs,
                { flexDirection: "row", flexWrap: "nowrap", sx: { marginLeft: "auto" } },
                (0, y.tZ)(v.zxk, { type: "submit", form: e, disabled: n }, o("webapp_panel_edition_generic_save_changes")),
                (0, y.tZ)(
                  v.zxk,
                  { sx: { marginLeft: "16px" }, nature: "secondary", onClick: t, type: "button" },
                  o("webapp_panel_edition_generic_cancel_changes")
                )
              )
            : (0, y.tZ)(
                v.zxk,
                { nature: "secondary", onClick: t, type: "button", sx: { marginLeft: "auto" } },
                o("webapp_panel_edition_generic_close")
              )
        );
      };
      var L = a(276846);
      const U = "id-edit-form",
        R = ({
          itemId: e,
          type: t,
          editItem: a,
          openConfirmDeleteDialog: n,
          editAlertTranslation: r,
          reportError: o,
          initialValues: l,
          hasUnsavedData: c,
          setHasUnsavedData: d,
          setCurrentCountry: m,
          copySuccessKey: p,
          hasTabs: D,
          focusAttachment: E,
          children: g,
          showListView: b
        }) => {
          const { translate: f } = (0, s.Z)(),
            [T, h] = i.useState(!1),
            I = i.useRef((e) => {
              if (null !== e) {
                const { dirty: t, isSubmitting: a, values: i } = e;
                d(t), h(a), m(i.country);
              }
            }),
            { showToast: y } = (0, S.pm)(),
            v = (a, i) => {
              (0, _.Kz)(new u.UserCopyVaultItemFieldEvent({ itemType: A.L[t], field: A.H[t], itemId: e, isProtected: !1 })),
                a && y({ description: f(p) }),
                i && "function" == typeof o && o(i, "[id-form] Unable to copy to clipboard");
            };
          return i.createElement(
            i.Fragment,
            null,
            i.createElement(
              L.P,
              {
                formId: U,
                formRef: I.current,
                handleSubmit: async (e, { setSubmitting: t, setFieldError: i }) => {
                  try {
                    t(!0);
                    const n = await a(e);
                    !0 === n.success
                      ? (y({ description: f(r) }), b())
                      : (t(!1),
                        n.error?.code === C.UpdateIdResultErrorCode.MISSING_ID_NUMBER
                          ? i("idNumber", "")
                          : n.error &&
                            (y({ description: f("_common_generic_error"), mood: "danger", isManualDismiss: !0 }),
                            o(new Error("[ids][edit] Unable to update id"), n.error.code)));
                  } catch (e) {
                    t(!1), o(e, "[ids][edit] Unexpected exception while updating id");
                  }
                },
                initialValues: l,
                variant: "edit"
              },
              (e) => g({ handleCopy: v, values: e })
            ),
            i.createElement(w, {
              formId: U,
              handleCancel: () => {
                b();
              },
              handleDelete: n,
              hasDataBeenModified: c,
              isSubmitting: T,
              focusAttachmentTab: D ? E : void 0
            })
          );
        },
        N = ({ getDescription: e, title: t, ...a }) => {
          const { translate: n } = (0, s.Z)(),
            {
              item: r,
              initialValues: o,
              type: c,
              children: d,
              showConfirmDelete: h,
              closeConfirmDeleteDialog: I,
              deleteDialogTitle: C,
              deleteAlertTranslation: S,
              listRoute: A
            } = a,
            {
              hasTabs: y,
              activeTab: v,
              tabs: w,
              focusAttachment: L,
              cleanActiveTab: U
            } = (function (e) {
              var t;
              const a = (0, f.w)(b.w.TechweekWebAttachmentsForIdsV1),
                n = (0, i.useRef)(null),
                [r, o] = (0, i.useState)(
                  null !=
                    (t = ((e) => {
                      const t = window.sessionStorage.getItem(T(e));
                      return t ? parseInt(t, 10) : null;
                    })(e))
                    ? t
                    : g.IdGroupTab.DETAILS
                ),
                l = (0, i.useCallback)(
                  (t) => {
                    window.sessionStorage.setItem(T(e), t.toString()), o(t);
                  },
                  [e]
                ),
                c = (0, i.useCallback)(() => {
                  window.sessionStorage.removeItem(T(e));
                }, [e]),
                d = (0, i.useCallback)(() => l(g.IdGroupTab.ATTACHMENTS), [l]),
                { translate: u } = (0, s.Z)(),
                m = (0, i.useMemo)(
                  () => [
                    {
                      active: r === g.IdGroupTab.DETAILS,
                      label: u("webapp_secure_notes_addition_tab_title_details"),
                      onClick: () => l(g.IdGroupTab.DETAILS)
                    },
                    {
                      active: r === g.IdGroupTab.ATTACHMENTS,
                      label: u("webapp_secure_notes_edition_field_tab_title_attachments"),
                      onClick: d
                    }
                  ],
                  [r, d, u, l]
                );
              return (
                (0, i.useEffect)(() => {
                  const e = (e) => {
                    n.current && !n.current.contains(e.target) && c();
                  };
                  return (
                    document.addEventListener("mousedown", e),
                    () => {
                      document.removeEventListener("mousedown", e);
                    }
                  );
                }, [c, n]),
                { editPanelRef: n, hasTabs: a, activeTab: r, tabs: m, focusAttachment: d, cleanActiveTab: c }
              );
            })(r.id),
            [N, P] = i.useState(o.country);
          i.useEffect(() => {
            (0, E.w)();
          }, []),
            i.useEffect(() => {
              const e = {
                [l.U.DriversLicense]: u.PageView.ItemDriverLicenceDetails,
                [l.U.FiscalId]: u.PageView.ItemFiscalStatementDetails,
                [l.U.IdCard]: u.PageView.ItemIdCardDetails,
                [l.U.Passport]: u.PageView.ItemPassportDetails,
                [l.U.SocialSecurityId]: u.PageView.ItemSocialSecurityStatementDetails
              };
              (0, _.Nc)(e[c]);
            }, [c]);
          const k = i.useMemo(
              () => ({
                confirmDeleteConfirm: n("webapp_id_edition_dialog_delete_confirm"),
                confirmDeleteDismiss: n("webapp_id_edition_dialog_delete_dismiss"),
                confirmDeleteSubtitle: n("webapp_id_edition_dialog_delete_subtitle"),
                confirmDeleteTitle: n(C),
                deleteSuccessToast: n(S)
              }),
              [C, S, n]
            ),
            x = () => {
              U(), (0, _.Nc)(u.PageView.ItemIdList), (0, m.uX)(A);
            },
            G = !y || g.IdGroupTab.DETAILS === v;
          return i.createElement(
            i.Fragment,
            null,
            i.createElement(p.h, { country: N, description: e(N), title: t, type: c, tabs: y ? w : void 0 }),
            G
              ? i.createElement(R, { ...a, setCurrentCountry: P, hasTabs: y, focusAttachment: L, cleanActiveTab: U, showListView: x }, d)
              : null,
            i.createElement(D.s, {
              isVisible: h,
              itemId: r.id,
              closeConfirmDeleteDialog: I,
              onDeletionSuccess: x,
              translations: k,
              vaultItemType: l.U.PaymentCard
            })
          );
        };
      var P = a(157631);
      const k = ({
        ID_TYPE: e,
        I18N_KEYS: t,
        listRoute: a,
        id: l,
        setDialogActive: u,
        lee: m,
        hasUnsavedData: _,
        setHasUnsavedData: p,
        editItem: D,
        children: E
      }) => {
        const { translate: g } = (0, s.Z)(),
          { status: b, item: f } = (function (e, t) {
            const { status: a, data: i } = (0, o.k)(c.L, "query", { vaultItemTypes: [e], ids: [t] });
            return { status: a, item: i?.[d[e]].items[0] };
          })(e, l),
          {
            showConfirmDelete: T,
            openConfirmDeleteDialog: h,
            closeConfirmDeleteDialog: I
          } = (function (e) {
            const [t, a] = i.useState(!1);
            return {
              showConfirmDelete: t,
              openConfirmDeleteDialog: () => {
                a(!0), e(!0);
              },
              closeConfirmDeleteDialog: () => {
                a(!1), e(!1);
              }
            };
          })(u);
        return b === n.rq.Success && void 0 !== f
          ? i.createElement(
              N,
              {
                itemId: l,
                item: f,
                copySuccessKey: t.COPY_SUCCESS,
                deleteAlertTranslation: t.ALERT_DELETE,
                deleteDialogTitle: t.DIALOG_DELETE_TITLE,
                editAlertTranslation: t.ALERT_EDIT,
                editItem: D(f.id, f),
                initialValues: f,
                listRoute: a,
                reportError: m.reportError,
                showConfirmDelete: T,
                openConfirmDeleteDialog: h,
                closeConfirmDeleteDialog: I,
                hasUnsavedData: _,
                setHasUnsavedData: p,
                type: e,
                getDescription: (e) => (0, r.Il)(g(t.HEADER_DESCRIPTION), g.getLocale(), e),
                title: (0, P.Y)(f)
              },
              E
            )
          : null;
      };
    },
    157631: (e, t, a) => {
      a.d(t, { Y: () => s, h: () => i });
      const i = (e, t, a) => {
        const i = {};
        return (
          a.forEach((a) => {
            e[a] !== t[a] && (i[a] = t[a]);
          }),
          i
        );
      };
      function n(e, t) {
        return e.hasOwnProperty(t);
      }
      function s(e) {
        return n(e, "idName") ? e.idName : n(e, "idNumber") ? e.idNumber : e.fiscalNumber;
      }
    },
    479055: (e, t, a) => {
      a.d(t, { a: () => n });
      var i = a(453576);
      const n = new Set([i.Country.AU, i.Country.GB, i.Country.IE, i.Country.NZ]);
    },
    469869: (e, t, a) => {
      a.d(t, { P: () => _ });
      var i,
        n,
        s = a(696832),
        r = a(201389),
        o = a(778089),
        l = a(803057),
        c = a(479055),
        d = a(754171),
        u = a(670570);
      const m = { ...d.k },
        _ = s.memo(({ variant: e, handleCopy: t, country: a }) => {
          const { translate: d } = (0, r.Z)(),
            _ = s.useRef(null);
          return (
            s.useEffect(
              "add" === e
                ? () => {
                    const e = setTimeout(() => {
                      _.current?.focus();
                    }, o.sc);
                    return () => clearTimeout(e);
                  }
                : () => {},
              []
            ),
            s.createElement(
              s.Fragment,
              null,
              s.createElement(u.YI, { name: "idName", label: d(m.NAME_LABEL), placeholder: d(m.NAME_PLACEHOLDER), ref: _ }),
              s.createElement(u.G1, {
                name: "idNumber",
                label: d(m.ID_NUMBER_LABEL),
                placeholder: d(m.ID_NUMBER_PLACEHOLDER),
                handleCopy: "edit" === e ? t : void 0
              }),
              s.createElement(u.Nn, { name: "issueDate", label: d(m.ISSUE_DATE_LABEL) }),
              s.createElement(u.Nn, {
                name: "expirationDate",
                label: d(c.a.has(a) ? m.EXPIRATION_DATE_LABEL_UK : m.EXPIRATION_DATE_LABEL_US)
              }),
              s.createElement(u.Dz, { name: "country", label: d(m.COUNTRY_LABEL) }),
              i || (i = s.createElement(l.c, { height: 24 })),
              n || (n = s.createElement(u.A0, { name: "spaceId" }))
            )
          );
        });
    },
    405231: (e, t, a) => {
      a.d(t, { s: () => p });
      var i = a(696832),
        n = a(142897),
        s = a(482598),
        r = a(133354),
        o = a(448430),
        l = a(201389);
      let c = (function (e) {
        return (e.LastAdmin = "LastAdmin"), (e.GroupSharing = "GroupSharing"), (e.Generic = "Generic"), e;
      })({});
      var d = a(151796);
      const u = ({ reason: e, translations: t, goToSharingAccess: a, closeCantDeleteDialog: s }) => {
        const { translate: r } = (0, l.Z)(),
          o = ((e, t) => {
            const { groupSharingTitle: a, lastAdminTitle: i, genericErrorTitle: n } = e;
            switch (t) {
              case c.LastAdmin:
                return i;
              case c.GroupSharing:
                return a;
              case c.Generic:
                return n;
              default:
                return (0, d.U)(t);
            }
          })(t, e),
          u = ((e, t) => {
            const { groupSharingSubtitle: a, lastAdminSubtitle: i, genericErrorSubtitle: n } = e;
            switch (t) {
              case c.LastAdmin:
                return i;
              case c.GroupSharing:
                return a;
              case c.Generic:
                return n;
              default:
                return (0, d.U)(t);
            }
          })(t, e);
        return i.createElement(
          n.Vq,
          {
            isOpen: !0,
            onClose: s,
            title: null != o ? o : "",
            closeActionLabel: r("_common_dialog_dismiss_button"),
            actions:
              e === c.LastAdmin
                ? {
                    primary: {
                      children: t.lastAdminActionLabel,
                      onClick: () => {
                        a(), s();
                      }
                    }
                  }
                : void 0
          },
          u
        );
      };
      var m = a(177704);
      const _ = ({ closeConfirmDeleteDialog: e, onDeleteConfirm: t, translations: a }) => {
          const { translate: s } = (0, l.Z)(),
            { confirmDeleteSubtitle: r, confirmDeleteTitle: o, confirmDeleteDismiss: c, confirmDeleteConfirm: d } = a;
          return i.createElement(
            n.Vq,
            {
              title: o,
              onClose: e,
              isOpen: !0,
              dialogClassName: m.Ht,
              closeActionLabel: s("_common_dialog_dismiss_button"),
              isDestructive: !0,
              actions: {
                primary: { children: d, onClick: t, id: "deletion-dialog-confirm-button" },
                secondary: { children: c, onClick: e, autoFocus: !0, id: "deletion-dialog-dismiss-button" }
              }
            },
            r
          );
        },
        p = ({
          closeConfirmDeleteDialog: e,
          goToSharingAccess: t,
          isVisible: a,
          itemId: d,
          onDeletionSuccess: m,
          sharingStatus: p,
          translations: D,
          vaultItemType: E
        }) => {
          const { showToast: g } = (0, n.pm)(),
            { translate: b } = (0, l.Z)(),
            { deleteVaultItems: f } = (0, s.u)(o.L);
          if (!a) return null;
          let T;
          return (
            p && p.isShared && (p.groupSharing && (T = c.GroupSharing), p.lastAdmin && (T = c.LastAdmin)),
            T && t
              ? i.createElement(u, { reason: T, translations: D, goToSharingAccess: t, closeCantDeleteDialog: e })
              : i.createElement(_, {
                  closeConfirmDeleteDialog: e,
                  onDeleteConfirm: async () => {
                    try {
                      var e;
                      (await f({ ids: [d], vaultItemType: E })).tag === r.rq.Success
                        ? (g({
                            description: null != (e = D.deleteSuccessToast) ? e : b("webapp_personal_info_edition_delete_success_toast")
                          }),
                          m())
                        : g({ description: b("_common_generic_error"), mood: "danger", isManualDismiss: !0 });
                    } catch (e) {
                      g({ description: b("_common_generic_error"), mood: "danger", isManualDismiss: !0 });
                    }
                  },
                  translations: D
                })
          );
        };
    }
  }
]);
