"use strict";
(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [2025],
  {
    349087: (e, t, a) => {
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
    406429: (e, t, a) => {
      a.r(t), a.d(t, { PaymentCardEditPanel: () => L });
      var n = a(696832),
        i = a(526849),
        r = a(962899),
        s = a(593039),
        o = a(448430),
        l = a(382706),
        c = a(482598),
        m = a(799852),
        d = a(287279),
        u = a(86498),
        p = a(488203),
        _ = a(692077),
        g = a(45272),
        h = a(276376),
        S = a(61290),
        C = a(69651),
        y = a(977257),
        b = a(349087),
        f = a(631605),
        D = a(376452),
        w = a(682994),
        A = a(830894);
      const E = ({ item: e }) => {
          const { translate: t } = (0, p.Z)(),
            { routes: a } = (0, h.Xo)(),
            m = (0, u.V)(),
            E = (0, b.B)(),
            { protectedItemsUnlockerShown: L } = (0, A.tY)(),
            { updateVaultItem: T } = (0, c.u)(o.L),
            [I, v] = n.useState(!1),
            [V, k] = n.useState(!1),
            [G, N] = n.useState(),
            [Z, P] = n.useState(!1),
            [U, B] = n.useState(e);
          n.useEffect(() => {
            (0, g.Nc)(s.PageView.ItemCreditCardDetails);
          }, []);
          const M = () => {
              m.showAlert(t("_common_generic_error"), r.BLW.ERROR);
            },
            W = () => {
              (0, g.Nc)(s.PageView.ItemPaymentList), (0, _.uX)(a.userPayments);
            },
            q = e.itemName || t("payments_header_add_payment_card"),
            O = t("webapp_payment_edition_delete_text"),
            R = {
              confirmDeleteConfirm: t("webapp_payment_edition_delete_confirm"),
              confirmDeleteDismiss: t("webapp_payment_edition_delete_dismiss"),
              confirmDeleteSubtitle: O,
              confirmDeleteTitle: t("webapp_payment_edition_delete_header"),
              deleteSuccessToast: e.itemName
                ? t("webapp_payment_edition_name_delete_alert", { paymentCard: e.itemName })
                : t("webapp_payment_edition_generic_delete_alert")
            };
          return n.createElement(
            D.zI,
            {
              isViewingExistingItem: !0,
              itemHasBeenEdited: I,
              onNavigateOut: W,
              onSubmit: async () => {
                if (V) return;
                const a = (0, C.u)(U);
                if (!a.isValid) return N(a.errorSet);
                k(!0);
                try {
                  const a = await T({ vaultItemType: l.U.PaymentCard, content: U, id: e.id });
                  if ((0, d.d6)(a)) {
                    const e = U.itemName
                      ? t("webapp_payment_edition_name_update_alert", { paymentCard: U.itemName })
                      : t("webapp_payment_edition_generic_update_alert");
                    m.showAlert(e, r.BLW.SUCCESS), W();
                  } else k(!1), M();
                } catch (e) {
                  k(!1), M();
                }
              },
              onClickDelete: () => P(!0),
              ignoreCloseOnEscape: Z || L,
              formId: "edit_paymentcard_panel",
              header: n.createElement(D.V9, {
                icon: n.createElement(S.Z, { paymentCardColor: U.color, iconSize: "large" }),
                iconBackgroundColor: (0, y.Z)(U.color),
                title: q
              })
            },
            n.createElement(C.g, {
              itemId: e.id,
              errors: G,
              paymentCardContent: U,
              signalEditedValues: (t) => {
                v(!(0, i.equals)(t, e)), B(t);
              },
              showCopyAlert: (e) => {
                E.setAlertMessage(e), E.show();
              }
            }),
            n.createElement(w.s, {
              isVisible: Z,
              itemId: e.id,
              closeConfirmDeleteDialog: () => P(!1),
              onDeletionSuccess: W,
              translations: R,
              vaultItemType: l.U.PaymentCard
            }),
            E.isAlertVisible &&
              n.createElement(
                "div",
                { className: f.Z.alertWrapper },
                n.createElement(
                  r.bZj,
                  {
                    size: r.k3y.SMALL,
                    severity: r.BLW.SUCCESS,
                    closeIconName: t("_common_alert_dismiss_button"),
                    onClose: () => {
                      E.hide();
                    }
                  },
                  E.alertMessage
                )
              )
          );
        },
        L = ({ match: e }) => {
          const { data: t } = (0, m.k)(o.L, "query", { vaultItemTypes: [l.U.PaymentCard], ids: [`{${e.params.uuid}}`] });
          return t?.paymentCardsResult.items.length ? n.createElement(E, { item: t.paymentCardsResult.items[0] }) : null;
        };
    },
    682994: (e, t, a) => {
      a.d(t, { s: () => _ });
      var n = a(696832),
        i = a(876307),
        r = a(482598),
        s = a(133354),
        o = a(448430),
        l = a(488203);
      let c = (function (e) {
        return (e.LastAdmin = "LastAdmin"), (e.GroupSharing = "GroupSharing"), (e.Generic = "Generic"), e;
      })({});
      var m = a(365580);
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
              e === c.LastAdmin || c.GroupSharing
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
      var u = a(837527);
      const p = ({ closeConfirmDeleteDialog: e, onDeleteConfirm: t, translations: a }) => {
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
        _ = ({
          closeConfirmDeleteDialog: e,
          goToSharingAccess: t,
          isVisible: a,
          itemId: m,
          onDeletionSuccess: u,
          sharingStatus: _,
          translations: g,
          vaultItemType: h,
          isShared: S,
          isSharedViaUserGroup: C,
          isLastAdmin: y
        }) => {
          const { showToast: b } = (0, i.pm)(),
            { translate: f } = (0, l.Z)(),
            { deleteVaultItems: D } = (0, r.u)(o.L);
          if (!a) return null;
          let w;
          return (
            (S || _?.isShared) && (C && (w = c.GroupSharing), y && (w = c.LastAdmin)),
            w && t
              ? n.createElement(d, { reason: w, translations: g, goToSharingAccess: t, closeCantDeleteDialog: e })
              : n.createElement(p, {
                  closeConfirmDeleteDialog: e,
                  onDeleteConfirm: async () => {
                    try {
                      var e;
                      (await D({ ids: [m], vaultItemType: h })).tag === s.rq.Success
                        ? (b({
                            description: null != (e = g.deleteSuccessToast) ? e : f("webapp_personal_info_edition_delete_success_toast")
                          }),
                          u())
                        : b({ description: f("_common_generic_error"), mood: "danger", isManualDismiss: !0 });
                    } catch (e) {
                      b({ description: f("_common_generic_error"), mood: "danger", isManualDismiss: !0 });
                    }
                  },
                  translations: g
                })
          );
        };
    },
    631605: (e, t, a) => {
      a.d(t, { Z: () => n });
      const n = { alertWrapper: "alertWrapper--JLZLLWrHCo" };
    }
  }
]);
