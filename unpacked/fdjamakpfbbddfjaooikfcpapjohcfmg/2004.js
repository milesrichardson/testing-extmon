"use strict";
(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [2004],
  {
    515400: (e, t, a) => {
      a.r(t), a.d(t, { IdCardEditPanel: () => c, IdGroupTab: () => l });
      var i = a(696832),
        n = a(382706),
        s = a(762428),
        r = a(697764);
      const o = {
        HEADER_DESCRIPTION: "webapp_id_edition_idcard_header_description",
        DIALOG_DELETE_TITLE: "webapp_id_edition_idcard_dialog_delete_title",
        ALERT_DELETE: "webapp_id_edition_idcard_alert_delete",
        ALERT_EDIT: "webapp_id_edition_idcard_alert_edit",
        COPY_SUCCESS: "webapp_id_copy_success_id_card_number"
      };
      let l = (function (e) {
        return (e[(e.DETAILS = 0)] = "DETAILS"), (e[(e.ATTACHMENTS = 1)] = "ATTACHMENTS"), e;
      })({});
      const c = ({ listRoute: e, id: t, setDialogActive: a, lee: l, hasUnsavedData: c, setHasUnsavedData: d }) =>
        t
          ? i.createElement(
              r.y,
              {
                listRoute: e,
                id: `{${t}}`,
                setDialogActive: a,
                lee: l,
                hasUnsavedData: c,
                setHasUnsavedData: d,
                ID_TYPE: n.U.IdCard,
                I18N_KEYS: o
              },
              ({ handleCopy: e, values: t }) => i.createElement(s.P, { variant: "edit", handleCopy: e, country: t.country })
            )
          : null;
    },
    697764: (e, t, a) => {
      a.d(t, { y: () => G });
      var i = a(696832),
        n = a(148038),
        s = a(488203),
        r = a(566219),
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
      var u = a(593039),
        m = a(692077),
        _ = a(45272),
        p = a(974910),
        D = a(682994),
        E = a(104586),
        b = a(515400),
        g = a(65255),
        T = a(377377);
      const f = (e) => `id-edit-panel-${e}`;
      var h,
        I,
        S = a(876307),
        C = a(287279),
        A = a(482598),
        y = a(58363),
        L = a(773817),
        v = a(962899);
      const w = ({ formId: e, handleCancel: t, handleDelete: a, hasDataBeenModified: i, isSubmitting: n, focusAttachmentTab: r }) => {
        const { translate: o } = (0, s.Z)();
        return (0, L.tZ)(
          v.Ejs,
          { sx: { padding: "24px" }, as: "footer", justifyContent: "flex-start", flexDirection: "row", flexWrap: "nowrap" },
          (0, L.tZ)(
            v.zxk,
            { nature: "secondary", onClick: a, type: "button", disabled: n, sx: { marginRight: "16px" } },
            h || (h = (0, L.tZ)(v.XHJ, null)),
            o("webapp_panel_edition_generic_delete")
          ),
          !!r &&
            (0, L.tZ)(
              v.zxk,
              { key: "attach", nature: "secondary", onClick: r, type: "button" },
              I || (I = (0, L.tZ)(v.FKb, null)),
              o("webapp_secure_notes_add_attachment_action_name")
            ),
          i
            ? (0, L.tZ)(
                v.Ejs,
                { flexDirection: "row", flexWrap: "nowrap", sx: { marginLeft: "auto" } },
                (0, L.tZ)(v.zxk, { type: "submit", form: e, disabled: n }, o("webapp_panel_edition_generic_save_changes")),
                (0, L.tZ)(
                  v.zxk,
                  { sx: { marginLeft: "16px" }, nature: "secondary", onClick: t, type: "button" },
                  o("webapp_panel_edition_generic_cancel_changes")
                )
              )
            : (0, L.tZ)(
                v.zxk,
                { nature: "secondary", onClick: t, type: "button", sx: { marginLeft: "auto" } },
                o("webapp_panel_edition_generic_close")
              )
        );
      };
      var U = a(386962);
      const R = "id-edit-form",
        N = ({
          itemId: e,
          type: t,
          openConfirmDeleteDialog: a,
          editAlertTranslation: n,
          reportError: r,
          initialValues: o,
          hasUnsavedData: d,
          setHasUnsavedData: m,
          setCurrentCountry: p,
          copySuccessKey: D,
          hasTabs: E,
          focusAttachment: b,
          children: g,
          showListView: T
        }) => {
          const { translate: f } = (0, s.Z)(),
            [h, I] = (0, i.useState)(!1),
            { updateVaultItem: L } = (0, A.u)(c.L),
            v = (0, i.useRef)((e) => {
              if (null !== e) {
                const { dirty: t, isSubmitting: a, values: i } = e;
                m(t), I(a), p(i.country);
              }
            }),
            { showToast: N } = (0, S.pm)(),
            P = (a, i) => {
              (0, _.Kz)(new u.UserCopyVaultItemFieldEvent({ itemType: y.L[t], field: y.H[t], itemId: e, isProtected: !1 })),
                a && N({ description: f(D) }),
                i && "function" == typeof r && r(i, "[id-form] Unable to copy to clipboard");
            },
            k = () => {
              N({ description: f("_common_generic_error"), mood: "danger", isManualDismiss: !0 });
            };
          return i.createElement(
            i.Fragment,
            null,
            i.createElement(
              U.P,
              {
                formId: R,
                formRef: v.current,
                handleSubmit: async (a, { setSubmitting: i, setFieldError: s }) => {
                  const o = t === l.U.FiscalId ? "fiscalNumber" : "idNumber";
                  if (!a[o]) return s(o, "");
                  try {
                    i(!0);
                    const s = await L({ vaultItemType: t, content: a, id: e });
                    (0, C.d6)(s)
                      ? (N({ description: f(n) }), T())
                      : (i(!1), k(), r(new Error("[ids][edit] Unable to update id"), s.error?.errorMessage));
                  } catch (e) {
                    i(!1), k(), r(e, "[ids][edit] Unexpected exception while updating id");
                  }
                },
                initialValues: o,
                variant: "edit"
              },
              (e) => g({ handleCopy: P, values: e })
            ),
            i.createElement(w, {
              formId: R,
              handleCancel: () => {
                T();
              },
              handleDelete: a,
              hasDataBeenModified: d,
              isSubmitting: h,
              focusAttachmentTab: E ? b : void 0
            })
          );
        },
        P = ({ getDescription: e, title: t, ...a }) => {
          const { translate: n } = (0, s.Z)(),
            {
              item: r,
              initialValues: o,
              type: c,
              children: d,
              showConfirmDelete: h,
              closeConfirmDeleteDialog: I,
              deleteDialogTitle: S,
              deleteAlertTranslation: C,
              listRoute: A
            } = a,
            {
              hasTabs: y,
              activeTab: L,
              tabs: v,
              focusAttachment: w,
              cleanActiveTab: U
            } = (function (e) {
              var t;
              const a = (0, T.w)(g.w.TechweekWebAttachmentsForIdsV1),
                n = (0, i.useRef)(null),
                [r, o] = (0, i.useState)(
                  null !=
                    (t = ((e) => {
                      const t = window.sessionStorage.getItem(f(e));
                      return t ? parseInt(t, 10) : null;
                    })(e))
                    ? t
                    : b.IdGroupTab.DETAILS
                ),
                l = (0, i.useCallback)(
                  (t) => {
                    window.sessionStorage.setItem(f(e), t.toString()), o(t);
                  },
                  [e]
                ),
                c = (0, i.useCallback)(() => {
                  window.sessionStorage.removeItem(f(e));
                }, [e]),
                d = (0, i.useCallback)(() => l(b.IdGroupTab.ATTACHMENTS), [l]),
                { translate: u } = (0, s.Z)(),
                m = (0, i.useMemo)(
                  () => [
                    {
                      active: r === b.IdGroupTab.DETAILS,
                      label: u("webapp_secure_notes_addition_tab_title_details"),
                      onClick: () => l(b.IdGroupTab.DETAILS)
                    },
                    {
                      active: r === b.IdGroupTab.ATTACHMENTS,
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
            [R, P] = i.useState(o.country);
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
                confirmDeleteTitle: n(S),
                deleteSuccessToast: n(C)
              }),
              [S, C, n]
            ),
            G = () => {
              U(), (0, _.Nc)(u.PageView.ItemIdList), (0, m.uX)(A);
            },
            x = !y || b.IdGroupTab.DETAILS === L;
          return i.createElement(
            i.Fragment,
            null,
            i.createElement(p.h, { country: R, description: e(R), title: t, type: c, tabs: y ? v : void 0 }),
            x
              ? i.createElement(N, { ...a, setCurrentCountry: P, hasTabs: y, focusAttachment: w, cleanActiveTab: U, showListView: G }, d)
              : null,
            i.createElement(D.s, {
              isVisible: h,
              itemId: r.id,
              closeConfirmDeleteDialog: I,
              onDeletionSuccess: G,
              translations: k,
              vaultItemType: l.U.PaymentCard
            })
          );
        };
      function k(e, t) {
        return e.hasOwnProperty(t);
      }
      const G = ({
        ID_TYPE: e,
        I18N_KEYS: t,
        listRoute: a,
        id: l,
        setDialogActive: u,
        lee: m,
        hasUnsavedData: _,
        setHasUnsavedData: p,
        children: D
      }) => {
        const { translate: E } = (0, s.Z)(),
          { status: b, item: g } = (function (e, t) {
            const { status: a, data: i } = (0, o.k)(c.L, "query", { vaultItemTypes: [e], ids: [t] });
            return { status: a, item: i?.[d[e]].items[0] };
          })(e, l),
          {
            showConfirmDelete: T,
            openConfirmDeleteDialog: f,
            closeConfirmDeleteDialog: h
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
        return b === n.rq.Success && void 0 !== g
          ? i.createElement(
              P,
              {
                itemId: l,
                item: g,
                copySuccessKey: t.COPY_SUCCESS,
                deleteAlertTranslation: t.ALERT_DELETE,
                deleteDialogTitle: t.DIALOG_DELETE_TITLE,
                editAlertTranslation: t.ALERT_EDIT,
                initialValues: g,
                listRoute: a,
                reportError: m.reportError,
                showConfirmDelete: T,
                openConfirmDeleteDialog: f,
                closeConfirmDeleteDialog: h,
                hasUnsavedData: _,
                setHasUnsavedData: p,
                type: e,
                getDescription: (e) => (0, r.Il)(E(t.HEADER_DESCRIPTION), E.getLocale(), e),
                title: ((I = g), k(I, "idName") ? I.idName : k(I, "idNumber") ? I.idNumber : I.fiscalNumber)
              },
              D
            )
          : null;
        var I;
      };
    },
    872055: (e, t, a) => {
      a.d(t, { a: () => n });
      var i = a(914662);
      const n = new Set([i.cH.AU, i.cH.GB, i.cH.IE, i.cH.NZ]);
    },
    762428: (e, t, a) => {
      a.d(t, { P: () => _ });
      var i,
        n = a(696832),
        s = a(488203),
        r = a(177650),
        o = a(321143),
        l = a(66485),
        c = a(872055),
        d = a(16792),
        u = a(865212);
      const m = { ...d.k },
        _ = n.memo(({ variant: e, handleCopy: t, country: a }) => {
          const { translate: d } = (0, s.Z)(),
            { shouldShowTrialDiscontinuedDialog: _ } = (0, l.yp)(),
            p = n.useRef(null);
          return (
            n.useEffect(
              "add" === e
                ? () => {
                    const e = setTimeout(() => {
                      p.current?.focus();
                    }, r.sc);
                    return () => clearTimeout(e);
                  }
                : () => {},
              []
            ),
            n.createElement(
              n.Fragment,
              null,
              n.createElement(u.YI, { name: "idName", label: d(m.NAME_LABEL), placeholder: d(m.NAME_PLACEHOLDER), ref: p, disabled: !!_ }),
              n.createElement(u.G1, {
                name: "idNumber",
                label: d(m.ID_NUMBER_LABEL),
                placeholder: d(m.ID_NUMBER_PLACEHOLDER),
                handleCopy: "edit" === e ? t : void 0,
                disabled: !!_
              }),
              n.createElement(u.Nn, { name: "issueDate", label: d(m.ISSUE_DATE_LABEL), disabled: !!_ }),
              n.createElement(u.Nn, {
                name: "expirationDate",
                label: d(c.a.has(a) ? m.EXPIRATION_DATE_LABEL_UK : m.EXPIRATION_DATE_LABEL_US),
                disabled: !!_
              }),
              n.createElement(u.Dz, { name: "country", label: d(m.COUNTRY_LABEL), disabled: !!_ }),
              i || (i = n.createElement(o.c, { height: 24 })),
              n.createElement(u.A0, { name: "spaceId", disabled: !!_ })
            )
          );
        });
    },
    682994: (e, t, a) => {
      a.d(t, { s: () => p });
      var i = a(696832),
        n = a(876307),
        s = a(482598),
        r = a(133354),
        o = a(448430),
        l = a(488203);
      let c = (function (e) {
        return (e.LastAdmin = "LastAdmin"), (e.GroupSharing = "GroupSharing"), (e.Generic = "Generic"), e;
      })({});
      var d = a(365580);
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
              e === c.LastAdmin || c.GroupSharing
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
      var m = a(837527);
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
          vaultItemType: E,
          isShared: b,
          isSharedViaUserGroup: g,
          isLastAdmin: T
        }) => {
          const { showToast: f } = (0, n.pm)(),
            { translate: h } = (0, l.Z)(),
            { deleteVaultItems: I } = (0, s.u)(o.L);
          if (!a) return null;
          let S;
          return (
            (b || p?.isShared) && (g && (S = c.GroupSharing), T && (S = c.LastAdmin)),
            S && t
              ? i.createElement(u, { reason: S, translations: D, goToSharingAccess: t, closeCantDeleteDialog: e })
              : i.createElement(_, {
                  closeConfirmDeleteDialog: e,
                  onDeleteConfirm: async () => {
                    try {
                      var e;
                      (await I({ ids: [d], vaultItemType: E })).tag === r.rq.Success
                        ? (f({
                            description: null != (e = D.deleteSuccessToast) ? e : h("webapp_personal_info_edition_delete_success_toast")
                          }),
                          m())
                        : f({ description: h("_common_generic_error"), mood: "danger", isManualDismiss: !0 });
                    } catch (e) {
                      f({ description: h("_common_generic_error"), mood: "danger", isManualDismiss: !0 });
                    }
                  },
                  translations: D
                })
          );
        };
    }
  }
]);
