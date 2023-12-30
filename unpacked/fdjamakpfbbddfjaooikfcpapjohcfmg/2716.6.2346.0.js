"use strict";
(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [2716],
  {
    941768: (e, t, n) => {
      n.r(t), n.d(t, { Connected: () => I });
      var a,
        o = n(142897),
        r = n(799852),
        i = n(448430),
        s = n(382706),
        c = n(696832),
        l = n(453576),
        u = n(441217),
        m = n(660765),
        d = n(787268),
        _ = n(201389),
        p = n(62429),
        b = n(66941),
        g = n(635164),
        S = n(60043),
        h = n(796446),
        k = n(405231),
        C = n(887982),
        f = n(103181),
        A = n(995544),
        D = n(192783),
        w = n(461201);
      const y = ({ item: e, lee: t }) => {
          const { translate: n } = (0, _.Z)(),
            { routes: r } = (0, S.Xo)(),
            [i, y] = (0, c.useState)(!1),
            [I, E] = (0, c.useState)(!1),
            [L, T] = (0, c.useState)(new Set()),
            N = (0, c.useRef)({}),
            [v, Z] = (0, c.useState)(e),
            [B, U] = (0, c.useState)(!1),
            { areProtectedItemsUnlocked: V, openProtectedItemsUnlocker: G, protectedItemsUnlockerShown: P } = (0, D.t)(),
            M = (0, A.B)(),
            O = (0, d.V)();
          (0, c.useEffect)(() => {
            (0, p.Nc)(m.PageView.ItemBankStatementDetails);
          }, []);
          const W = () => {
              (0, p.Nc)(m.PageView.ItemPaymentList), (0, g.uX)(r.userPayments);
            },
            q = (0, c.useCallback)(
              (t) => {
                Object.entries(t).forEach(([t, n]) => {
                  e[t] !== n ? (N.current[t] = n) : delete N.current[t];
                }),
                  y(Object.keys(N.current).length > 0),
                  Z(t);
              },
              [e]
            ),
            R = {
              confirmDeleteConfirm: n("webapp_payment_edition_bank_account_delete_confirm"),
              confirmDeleteDismiss: n("webapp_payment_edition_bank_account_delete_dismiss"),
              confirmDeleteSubtitle: n("webapp_payment_edition_bank_account_delete_subtitle"),
              confirmDeleteTitle: n("webapp_payment_edition_bank_account_delete_title"),
              deleteSuccessToast: e.accountName
                ? n("webapp_payment_edition_bank_account_name_delete_alert", { accountName: e.accountName })
                : n("webapp_payment_edition_bank_account_generic_delete_alert")
            },
            j = P || B;
          return (0, o.tZ)(
            h.zI,
            {
              onNavigateOut: W,
              ignoreCloseOnEscape: j,
              formId: "bank-account-edit-form",
              onSubmit: async () => {
                if (!I) {
                  E(!0);
                  try {
                    const { accountName: a, ownerName: o, bankCode: r } = N.current,
                      i = await b.C.updateBankAccount({ ...N.current, name: a, owner: o, bank: r, id: e.id });
                    if (i.success) {
                      const e = v.accountName
                        ? n("webapp_payment_edition_bank_account_name_update_alert", { accountName: v.accountName })
                        : n("webapp_payment_edition_bank_account_generic_update_alert");
                      O.showAlert(e, u.BLW.SUCCESS), W();
                    } else
                      E(!1),
                        i.error?.code === l.UpdateBankAccountResultErrorCode.EMPTY_BIC_AND_IBAN
                          ? T(new Set(["BIC", "IBAN"]))
                          : t.reportError(new Error("[payments][edit-bank-account] Unable to update bank account"), i.error?.code);
                  } catch (e) {
                    E(!1), t.reportError(e, "[payments][edit-bank-account] Unexpected exception while updating bank account");
                  }
                }
              },
              header: (0, o.tZ)(h.V9, {
                icon: a || (a = (0, o.tZ)(C.L, null)),
                iconBackgroundColor: u.colors.dashGreen06,
                title: e.accountName
              }),
              onClickDelete: () => {
                U(!0);
              },
              itemHasBeenEdited: i,
              isViewingExistingItem: !0
            },
            (0, o.tZ)(f.o, {
              itemId: e.id,
              bankAccount: v,
              errors: L,
              onCopy: (e) => {
                M.setAlertMessage(e), M.show();
              },
              reportError: t.reportError,
              signalEditedValues: q,
              areProtectedItemsUnlocked: V,
              openProtectedItemsUnlocker: G,
              variant: "edit"
            }),
            (0, o.tZ)(k.s, {
              isVisible: B,
              itemId: e.id,
              closeConfirmDeleteDialog: () => {
                U(!1);
              },
              onDeletionSuccess: W,
              translations: R,
              vaultItemType: s.U.BankAccount
            }),
            M.isAlertVisible &&
              (0, o.tZ)(
                "div",
                { className: w.Z.alertWrapper },
                (0, o.tZ)(
                  u.bZj,
                  {
                    size: u.k3y.SMALL,
                    severity: u.BLW.SUCCESS,
                    closeIconName: n("_common_alert_dismiss_button"),
                    onClose: () => {
                      M.hide();
                    }
                  },
                  M.alertMessage
                )
              )
          );
        },
        I = (e) => {
          const { data: t } = (0, r.k)(i.L, "query", { vaultItemTypes: [s.U.BankAccount], ids: [`{${e.match.params.uuid}}`] });
          return t?.bankAccountsResult.items.length ? (0, o.tZ)(y, { ...e, item: t.bankAccountsResult.items[0] }) : null;
        };
    },
    995544: (e, t, n) => {
      n.d(t, { B: () => o });
      var a = n(696832);
      const o = () => {
        const [e, t] = a.useState(""),
          [n, o] = a.useState(!1),
          r = () => {
            o(!1);
          };
        return (
          a.useEffect(() => {
            if (!n) return;
            const e = setTimeout(r, 5e3);
            return () => clearTimeout(e);
          }, [n, e]),
          {
            isAlertVisible: n,
            alertMessage: e,
            setAlertMessage: t,
            hide: r,
            show: () => {
              o(!0);
            }
          }
        );
      };
    },
    405231: (e, t, n) => {
      n.d(t, { s: () => p });
      var a = n(696832),
        o = n(142897),
        r = n(482598),
        i = n(133354),
        s = n(448430),
        c = n(201389);
      let l = (function (e) {
        return (e.LastAdmin = "LastAdmin"), (e.GroupSharing = "GroupSharing"), (e.Generic = "Generic"), e;
      })({});
      var u = n(151796);
      const m = ({ reason: e, translations: t, goToSharingAccess: n, closeCantDeleteDialog: r }) => {
        const { translate: i } = (0, c.Z)(),
          s = ((e, t) => {
            const { groupSharingTitle: n, lastAdminTitle: a, genericErrorTitle: o } = e;
            switch (t) {
              case l.LastAdmin:
                return a;
              case l.GroupSharing:
                return n;
              case l.Generic:
                return o;
              default:
                return (0, u.U)(t);
            }
          })(t, e),
          m = ((e, t) => {
            const { groupSharingSubtitle: n, lastAdminSubtitle: a, genericErrorSubtitle: o } = e;
            switch (t) {
              case l.LastAdmin:
                return a;
              case l.GroupSharing:
                return n;
              case l.Generic:
                return o;
              default:
                return (0, u.U)(t);
            }
          })(t, e);
        return a.createElement(
          o.Vq,
          {
            isOpen: !0,
            onClose: r,
            title: null != s ? s : "",
            closeActionLabel: i("_common_dialog_dismiss_button"),
            actions:
              e === l.LastAdmin
                ? {
                    primary: {
                      children: t.lastAdminActionLabel,
                      onClick: () => {
                        n(), r();
                      }
                    }
                  }
                : void 0
          },
          m
        );
      };
      var d = n(177704);
      const _ = ({ closeConfirmDeleteDialog: e, onDeleteConfirm: t, translations: n }) => {
          const { translate: r } = (0, c.Z)(),
            { confirmDeleteSubtitle: i, confirmDeleteTitle: s, confirmDeleteDismiss: l, confirmDeleteConfirm: u } = n;
          return a.createElement(
            o.Vq,
            {
              title: s,
              onClose: e,
              isOpen: !0,
              dialogClassName: d.Ht,
              closeActionLabel: r("_common_dialog_dismiss_button"),
              isDestructive: !0,
              actions: {
                primary: { children: u, onClick: t, id: "deletion-dialog-confirm-button" },
                secondary: { children: l, onClick: e, autoFocus: !0, id: "deletion-dialog-dismiss-button" }
              }
            },
            i
          );
        },
        p = ({
          closeConfirmDeleteDialog: e,
          goToSharingAccess: t,
          isVisible: n,
          itemId: u,
          onDeletionSuccess: d,
          sharingStatus: p,
          translations: b,
          vaultItemType: g
        }) => {
          const { showToast: S } = (0, o.pm)(),
            { translate: h } = (0, c.Z)(),
            { deleteVaultItems: k } = (0, r.u)(s.L);
          if (!n) return null;
          let C;
          return (
            p && p.isShared && (p.groupSharing && (C = l.GroupSharing), p.lastAdmin && (C = l.LastAdmin)),
            C && t
              ? a.createElement(m, { reason: C, translations: b, goToSharingAccess: t, closeCantDeleteDialog: e })
              : a.createElement(_, {
                  closeConfirmDeleteDialog: e,
                  onDeleteConfirm: async () => {
                    try {
                      var e;
                      (await k({ ids: [u], vaultItemType: g })).tag === i.rq.Success
                        ? (S({
                            description: null != (e = b.deleteSuccessToast) ? e : h("webapp_personal_info_edition_delete_success_toast")
                          }),
                          d())
                        : S({ description: h("_common_generic_error"), mood: "danger", isManualDismiss: !0 });
                    } catch (e) {
                      S({ description: h("_common_generic_error"), mood: "danger", isManualDismiss: !0 });
                    }
                  },
                  translations: b
                })
          );
        };
    },
    461201: (e, t, n) => {
      n.d(t, { Z: () => a });
      const a = { alertWrapper: "alertWrapper--JLZLLWrHCo" };
    }
  }
]);
