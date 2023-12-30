"use strict";
(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [849],
  {
    995544: (e, t, a) => {
      a.d(t, { B: () => i });
      var n = a(696832);
      const i = () => {
        const [e, t] = n.useState(""),
          [a, i] = n.useState(!1),
          r = () => {
            i(!1);
          };
        return (
          n.useEffect(() => {
            if (!a) return;
            const e = setTimeout(r, 5e3);
            return () => clearTimeout(e);
          }, [a, e]),
          {
            isAlertVisible: a,
            alertMessage: e,
            setAlertMessage: t,
            hide: r,
            show: () => {
              i(!0);
            }
          }
        );
      };
    },
    257958: (e, t, a) => {
      a.r(t), a.d(t, { PaymentCardEditPanel: () => L });
      var n = a(696832),
        i = a(526849),
        r = a(453576),
        s = a(441217),
        o = a(660765),
        l = a(382706),
        c = a(448430),
        m = a(799852),
        d = a(787268),
        u = a(201389),
        _ = a(66941),
        p = a(635164),
        g = a(62429),
        C = a(60043),
        S = a(950586),
        h = a(175730),
        y = a(878681),
        D = a(995544),
        b = a(461201),
        f = a(796446),
        E = a(405231),
        w = a(889483),
        A = a(264980);
      const T = ({ item: e }) => {
          const { translate: t } = (0, u.Z)(),
            { routes: a } = (0, C.Xo)(),
            c = (0, d.V)(),
            m = (0, D.B)(),
            { protectedItemsUnlockerShown: T } = (0, w.tY)(),
            [L, v] = n.useState(!1),
            [I, N] = n.useState(!1),
            [V, k] = n.useState(),
            [P, M] = n.useState(!1),
            [Z, G] = n.useState(e);
          n.useEffect(() => {
            (0, g.Nc)(o.PageView.ItemCreditCardDetails);
          }, []);
          const R = () => {
              c.showAlert(t("_common_generic_error"), s.BLW.ERROR);
            },
            U = () => {
              (0, g.Nc)(o.PageView.ItemPaymentList), (0, p.uX)(a.userPayments);
            },
            B = e.itemName || t("payments_header_add_payment_card"),
            W = t("webapp_payment_edition_delete_text"),
            O = {
              confirmDeleteConfirm: t("webapp_payment_edition_delete_confirm"),
              confirmDeleteDismiss: t("webapp_payment_edition_delete_dismiss"),
              confirmDeleteSubtitle: W,
              confirmDeleteTitle: t("webapp_payment_edition_delete_header"),
              deleteSuccessToast: e.itemName
                ? t("webapp_payment_edition_name_delete_alert", { paymentCard: e.itemName })
                : t("webapp_payment_edition_generic_delete_alert")
            };
          return n.createElement(
            f.zI,
            {
              isViewingExistingItem: !0,
              itemHasBeenEdited: L,
              onNavigateOut: U,
              onSubmit: async () => {
                if (!I) {
                  N(!0);
                  try {
                    const a = await _.C.updatePaymentCard({ ...Z, color: A.M[Z.color], name: Z.itemName, personalNote: Z.note, id: e.id });
                    if (a.success) {
                      const e = Z.itemName
                        ? t("webapp_payment_edition_name_update_alert", { paymentCard: Z.itemName })
                        : t("webapp_payment_edition_generic_update_alert");
                      c.showAlert(e, s.BLW.SUCCESS), U();
                    } else
                      N(!1),
                        a.error?.code === r.PaymentCardSaveResultErrorCode.EMPTY_CARD_NUMBER_AND_SECURITY_CODE
                          ? k(new Set(["cardNumber", "securityCode"]))
                          : R();
                  } catch (e) {
                    N(!1), R();
                  }
                }
              },
              onClickDelete: () => M(!0),
              ignoreCloseOnEscape: P || T,
              formId: "edit_paymentcard_panel",
              header: n.createElement(f.V9, {
                icon: n.createElement(S.Z, { paymentCardColor: Z.color, iconSize: "large" }),
                iconBackgroundColor: (0, y.Z)(Z.color),
                title: B
              })
            },
            n.createElement(h.g, {
              itemId: e.id,
              errors: V,
              paymentCardContent: Z,
              signalEditedValues: (t) => {
                v(!(0, i.equals)(t, e)), G(t);
              },
              showCopyAlert: (e) => {
                m.setAlertMessage(e), m.show();
              }
            }),
            n.createElement(E.s, {
              isVisible: P,
              itemId: e.id,
              closeConfirmDeleteDialog: () => M(!1),
              onDeletionSuccess: U,
              translations: O,
              vaultItemType: l.U.PaymentCard
            }),
            m.isAlertVisible &&
              n.createElement(
                "div",
                { className: b.Z.alertWrapper },
                n.createElement(
                  s.bZj,
                  {
                    size: s.k3y.SMALL,
                    severity: s.BLW.SUCCESS,
                    closeIconName: t("_common_alert_dismiss_button"),
                    onClose: () => {
                      m.hide();
                    }
                  },
                  m.alertMessage
                )
              )
          );
        },
        L = ({ match: e }) => {
          const { data: t } = (0, m.k)(c.L, "query", { vaultItemTypes: [l.U.PaymentCard], ids: [`{${e.params.uuid}}`] });
          return t?.paymentCardsResult.items.length ? n.createElement(T, { item: t.paymentCardsResult.items[0] }) : null;
        };
    },
    405231: (e, t, a) => {
      a.d(t, { s: () => p });
      var n = a(696832),
        i = a(142897),
        r = a(482598),
        s = a(133354),
        o = a(448430),
        l = a(201389);
      let c = (function (e) {
        return (e.LastAdmin = "LastAdmin"), (e.GroupSharing = "GroupSharing"), (e.Generic = "Generic"), e;
      })({});
      var m = a(151796);
      const d = ({ reason: e, translations: t, goToSharingAccess: a, closeCantDeleteDialog: r }) => {
        const { translate: s } = (0, l.Z)(),
          o = ((e, t) => {
            const { groupSharingTitle: a, lastAdminTitle: n, genericErrorTitle: i } = e;
            switch (t) {
              case c.LastAdmin:
                return n;
              case c.GroupSharing:
                return a;
              case c.Generic:
                return i;
              default:
                return (0, m.U)(t);
            }
          })(t, e),
          d = ((e, t) => {
            const { groupSharingSubtitle: a, lastAdminSubtitle: n, genericErrorSubtitle: i } = e;
            switch (t) {
              case c.LastAdmin:
                return n;
              case c.GroupSharing:
                return a;
              case c.Generic:
                return i;
              default:
                return (0, m.U)(t);
            }
          })(t, e);
        return n.createElement(
          i.Vq,
          {
            isOpen: !0,
            onClose: r,
            title: null != o ? o : "",
            closeActionLabel: s("_common_dialog_dismiss_button"),
            actions:
              e === c.LastAdmin
                ? {
                    primary: {
                      children: t.lastAdminActionLabel,
                      onClick: () => {
                        a(), r();
                      }
                    }
                  }
                : void 0
          },
          d
        );
      };
      var u = a(177704);
      const _ = ({ closeConfirmDeleteDialog: e, onDeleteConfirm: t, translations: a }) => {
          const { translate: r } = (0, l.Z)(),
            { confirmDeleteSubtitle: s, confirmDeleteTitle: o, confirmDeleteDismiss: c, confirmDeleteConfirm: m } = a;
          return n.createElement(
            i.Vq,
            {
              title: o,
              onClose: e,
              isOpen: !0,
              dialogClassName: u.Ht,
              closeActionLabel: r("_common_dialog_dismiss_button"),
              isDestructive: !0,
              actions: {
                primary: { children: m, onClick: t, id: "deletion-dialog-confirm-button" },
                secondary: { children: c, onClick: e, autoFocus: !0, id: "deletion-dialog-dismiss-button" }
              }
            },
            s
          );
        },
        p = ({
          closeConfirmDeleteDialog: e,
          goToSharingAccess: t,
          isVisible: a,
          itemId: m,
          onDeletionSuccess: u,
          sharingStatus: p,
          translations: g,
          vaultItemType: C
        }) => {
          const { showToast: S } = (0, i.pm)(),
            { translate: h } = (0, l.Z)(),
            { deleteVaultItems: y } = (0, r.u)(o.L);
          if (!a) return null;
          let D;
          return (
            p && p.isShared && (p.groupSharing && (D = c.GroupSharing), p.lastAdmin && (D = c.LastAdmin)),
            D && t
              ? n.createElement(d, { reason: D, translations: g, goToSharingAccess: t, closeCantDeleteDialog: e })
              : n.createElement(_, {
                  closeConfirmDeleteDialog: e,
                  onDeleteConfirm: async () => {
                    try {
                      var e;
                      (await y({ ids: [m], vaultItemType: C })).tag === s.rq.Success
                        ? (S({
                            description: null != (e = g.deleteSuccessToast) ? e : h("webapp_personal_info_edition_delete_success_toast")
                          }),
                          u())
                        : S({ description: h("_common_generic_error"), mood: "danger", isManualDismiss: !0 });
                    } catch (e) {
                      S({ description: h("_common_generic_error"), mood: "danger", isManualDismiss: !0 });
                    }
                  },
                  translations: g
                })
          );
        };
    },
    461201: (e, t, a) => {
      a.d(t, { Z: () => n });
      const n = { alertWrapper: "alertWrapper--JLZLLWrHCo" };
    }
  }
]);
