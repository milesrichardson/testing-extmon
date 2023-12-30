"use strict";
(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [3251],
  {
    948652: (e, t, n) => {
      n.r(t), n.d(t, { Connected: () => I });
      var a,
        i = n(876307),
        o = n(799852),
        s = n(448430),
        r = n(382706),
        c = n(696832),
        l = n(526849),
        u = n(287279),
        m = n(482598),
        d = n(962899),
        _ = n(593039),
        p = n(86498),
        g = n(488203),
        b = n(45272),
        S = n(692077),
        h = n(276376),
        f = n(376452),
        k = n(682994),
        D = n(860062),
        A = n(908940),
        C = n(349087),
        y = n(903045),
        w = n(631605);
      const L = ({ item: e }) => {
          const { translate: t } = (0, g.Z)(),
            { routes: n } = (0, h.Xo)(),
            { updateVaultItem: o } = (0, m.u)(s.L),
            [L, I] = (0, c.useState)(!1),
            [T, v] = (0, c.useState)(!1),
            [V, Z] = (0, c.useState)(new Set()),
            [E, N] = (0, c.useState)(e),
            [U, G] = (0, c.useState)(!1),
            { areProtectedItemsUnlocked: B, openProtectedItemsUnlocker: P, protectedItemsUnlockerShown: M } = (0, y.t)(),
            W = (0, C.B)(),
            q = (0, p.V)();
          (0, c.useEffect)(() => {
            (0, b.Nc)(_.PageView.ItemBankStatementDetails);
          }, []);
          const O = () => {
              (0, b.Nc)(_.PageView.ItemPaymentList), (0, S.uX)(n.userPayments);
            },
            R = () => {
              q.showAlert(t("_common_generic_error"), d.BLW.ERROR);
            },
            H = {
              confirmDeleteConfirm: t("webapp_payment_edition_bank_account_delete_confirm"),
              confirmDeleteDismiss: t("webapp_payment_edition_bank_account_delete_dismiss"),
              confirmDeleteSubtitle: t("webapp_payment_edition_bank_account_delete_subtitle"),
              confirmDeleteTitle: t("webapp_payment_edition_bank_account_delete_title"),
              deleteSuccessToast: e.accountName
                ? t("webapp_payment_edition_bank_account_name_delete_alert", { accountName: e.accountName })
                : t("webapp_payment_edition_bank_account_generic_delete_alert")
            },
            z = M || U;
          return (0, i.tZ)(
            f.zI,
            {
              onNavigateOut: O,
              ignoreCloseOnEscape: z,
              formId: "bank-account-edit-form",
              onSubmit: async () => {
                if (T) return;
                const n = (0, A.e)(E);
                if (!n.isValid) return Z(n.errorSet);
                v(!0);
                try {
                  const n = await o({ vaultItemType: r.U.BankAccount, content: E, id: e.id });
                  if ((0, u.d6)(n)) {
                    const e = E.accountName
                      ? t("webapp_payment_edition_bank_account_name_update_alert", { accountName: E.accountName })
                      : t("webapp_payment_edition_bank_account_generic_update_alert");
                    q.showAlert(e, d.BLW.SUCCESS), O();
                  } else v(!1), R();
                } catch (e) {
                  v(!1), R();
                }
              },
              header: (0, i.tZ)(f.V9, {
                icon: a || (a = (0, i.tZ)(D.L, null)),
                iconBackgroundColor: d.colors.dashGreen06,
                title: e.accountName
              }),
              onClickDelete: () => {
                G(!0);
              },
              itemHasBeenEdited: L,
              isViewingExistingItem: !0
            },
            (0, i.tZ)(A.o, {
              itemId: e.id,
              bankAccount: E,
              errors: V,
              onCopy: (e) => {
                W.setAlertMessage(e), W.show();
              },
              signalEditedValues: (t) => {
                I(!(0, l.equals)(t, e)), N(t);
              },
              areProtectedItemsUnlocked: B,
              openProtectedItemsUnlocker: P,
              variant: "edit"
            }),
            (0, i.tZ)(k.s, {
              isVisible: U,
              itemId: e.id,
              closeConfirmDeleteDialog: () => {
                G(!1);
              },
              onDeletionSuccess: O,
              translations: H,
              vaultItemType: r.U.BankAccount
            }),
            W.isAlertVisible &&
              (0, i.tZ)(
                "div",
                { className: w.Z.alertWrapper },
                (0, i.tZ)(
                  d.bZj,
                  {
                    size: d.k3y.SMALL,
                    severity: d.BLW.SUCCESS,
                    closeIconName: t("_common_alert_dismiss_button"),
                    onClose: () => {
                      W.hide();
                    }
                  },
                  W.alertMessage
                )
              )
          );
        },
        I = (e) => {
          const { data: t } = (0, o.k)(s.L, "query", { vaultItemTypes: [r.U.BankAccount], ids: [`{${e.match.params.uuid}}`] });
          return t?.bankAccountsResult.items.length ? (0, i.tZ)(L, { ...e, item: t.bankAccountsResult.items[0] }) : null;
        };
    },
    349087: (e, t, n) => {
      n.d(t, { B: () => i });
      var a = n(696832);
      const i = () => {
        const [e, t] = a.useState(""),
          [n, i] = a.useState(!1),
          o = () => {
            i(!1);
          };
        return (
          a.useEffect(() => {
            if (!n) return;
            const e = setTimeout(o, 5e3);
            return () => clearTimeout(e);
          }, [n, e]),
          {
            isAlertVisible: n,
            alertMessage: e,
            setAlertMessage: t,
            hide: o,
            show: () => {
              i(!0);
            }
          }
        );
      };
    },
    682994: (e, t, n) => {
      n.d(t, { s: () => p });
      var a = n(696832),
        i = n(876307),
        o = n(482598),
        s = n(133354),
        r = n(448430),
        c = n(488203);
      let l = (function (e) {
        return (e.LastAdmin = "LastAdmin"), (e.GroupSharing = "GroupSharing"), (e.Generic = "Generic"), e;
      })({});
      var u = n(365580);
      const m = ({ reason: e, translations: t, goToSharingAccess: n, closeCantDeleteDialog: o }) => {
        const { translate: s } = (0, c.Z)(),
          r = ((e, t) => {
            const { groupSharingTitle: n, lastAdminTitle: a, genericErrorTitle: i } = e;
            switch (t) {
              case l.LastAdmin:
                return a;
              case l.GroupSharing:
                return n;
              case l.Generic:
                return i;
              default:
                return (0, u.U)(t);
            }
          })(t, e),
          m = ((e, t) => {
            const { groupSharingSubtitle: n, lastAdminSubtitle: a, genericErrorSubtitle: i } = e;
            switch (t) {
              case l.LastAdmin:
                return a;
              case l.GroupSharing:
                return n;
              case l.Generic:
                return i;
              default:
                return (0, u.U)(t);
            }
          })(t, e);
        return a.createElement(
          i.Vq,
          {
            isOpen: !0,
            onClose: o,
            title: null != r ? r : "",
            closeActionLabel: s("_common_dialog_dismiss_button"),
            actions:
              e === l.LastAdmin || l.GroupSharing
                ? {
                    primary: {
                      children: t.lastAdminActionLabel,
                      onClick: () => {
                        n(), o();
                      }
                    }
                  }
                : void 0
          },
          m
        );
      };
      var d = n(837527);
      const _ = ({ closeConfirmDeleteDialog: e, onDeleteConfirm: t, translations: n }) => {
          const { translate: o } = (0, c.Z)(),
            { confirmDeleteSubtitle: s, confirmDeleteTitle: r, confirmDeleteDismiss: l, confirmDeleteConfirm: u } = n;
          return a.createElement(
            i.Vq,
            {
              title: r,
              onClose: e,
              isOpen: !0,
              dialogClassName: d.Ht,
              closeActionLabel: o("_common_dialog_dismiss_button"),
              isDestructive: !0,
              actions: {
                primary: { children: u, onClick: t, id: "deletion-dialog-confirm-button" },
                secondary: { children: l, onClick: e, autoFocus: !0, id: "deletion-dialog-dismiss-button" }
              }
            },
            s
          );
        },
        p = ({
          closeConfirmDeleteDialog: e,
          goToSharingAccess: t,
          isVisible: n,
          itemId: u,
          onDeletionSuccess: d,
          sharingStatus: p,
          translations: g,
          vaultItemType: b,
          isShared: S,
          isSharedViaUserGroup: h,
          isLastAdmin: f
        }) => {
          const { showToast: k } = (0, i.pm)(),
            { translate: D } = (0, c.Z)(),
            { deleteVaultItems: A } = (0, o.u)(r.L);
          if (!n) return null;
          let C;
          return (
            (S || p?.isShared) && (h && (C = l.GroupSharing), f && (C = l.LastAdmin)),
            C && t
              ? a.createElement(m, { reason: C, translations: g, goToSharingAccess: t, closeCantDeleteDialog: e })
              : a.createElement(_, {
                  closeConfirmDeleteDialog: e,
                  onDeleteConfirm: async () => {
                    try {
                      var e;
                      (await A({ ids: [u], vaultItemType: b })).tag === s.rq.Success
                        ? (k({
                            description: null != (e = g.deleteSuccessToast) ? e : D("webapp_personal_info_edition_delete_success_toast")
                          }),
                          d())
                        : k({ description: D("_common_generic_error"), mood: "danger", isManualDismiss: !0 });
                    } catch (e) {
                      k({ description: D("_common_generic_error"), mood: "danger", isManualDismiss: !0 });
                    }
                  },
                  translations: g
                })
          );
        };
    },
    631605: (e, t, n) => {
      n.d(t, { Z: () => a });
      const a = { alertWrapper: "alertWrapper--JLZLLWrHCo" };
    }
  }
]);
