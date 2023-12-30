"use strict";
(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [8182],
  {
    405231: (e, t, n) => {
      n.d(t, { s: () => g });
      var i = n(696832),
        s = n(142897),
        r = n(482598),
        a = n(133354),
        o = n(448430),
        l = n(201389);
      let c = (function (e) {
        return (e.LastAdmin = "LastAdmin"), (e.GroupSharing = "GroupSharing"), (e.Generic = "Generic"), e;
      })({});
      var d = n(151796);
      const u = ({ reason: e, translations: t, goToSharingAccess: n, closeCantDeleteDialog: r }) => {
        const { translate: a } = (0, l.Z)(),
          o = ((e, t) => {
            const { groupSharingTitle: n, lastAdminTitle: i, genericErrorTitle: s } = e;
            switch (t) {
              case c.LastAdmin:
                return i;
              case c.GroupSharing:
                return n;
              case c.Generic:
                return s;
              default:
                return (0, d.U)(t);
            }
          })(t, e),
          u = ((e, t) => {
            const { groupSharingSubtitle: n, lastAdminSubtitle: i, genericErrorSubtitle: s } = e;
            switch (t) {
              case c.LastAdmin:
                return i;
              case c.GroupSharing:
                return n;
              case c.Generic:
                return s;
              default:
                return (0, d.U)(t);
            }
          })(t, e);
        return i.createElement(
          s.Vq,
          {
            isOpen: !0,
            onClose: r,
            title: null != o ? o : "",
            closeActionLabel: a("_common_dialog_dismiss_button"),
            actions:
              e === c.LastAdmin
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
          u
        );
      };
      var m = n(177704);
      const _ = ({ closeConfirmDeleteDialog: e, onDeleteConfirm: t, translations: n }) => {
          const { translate: r } = (0, l.Z)(),
            { confirmDeleteSubtitle: a, confirmDeleteTitle: o, confirmDeleteDismiss: c, confirmDeleteConfirm: d } = n;
          return i.createElement(
            s.Vq,
            {
              title: o,
              onClose: e,
              isOpen: !0,
              dialogClassName: m.Ht,
              closeActionLabel: r("_common_dialog_dismiss_button"),
              isDestructive: !0,
              actions: {
                primary: { children: d, onClick: t, id: "deletion-dialog-confirm-button" },
                secondary: { children: c, onClick: e, autoFocus: !0, id: "deletion-dialog-dismiss-button" }
              }
            },
            a
          );
        },
        g = ({
          closeConfirmDeleteDialog: e,
          goToSharingAccess: t,
          isVisible: n,
          itemId: d,
          onDeletionSuccess: m,
          sharingStatus: g,
          translations: p,
          vaultItemType: f
        }) => {
          const { showToast: h } = (0, s.pm)(),
            { translate: D } = (0, l.Z)(),
            { deleteVaultItems: b } = (0, r.u)(o.L);
          if (!n) return null;
          let S;
          return (
            g && g.isShared && (g.groupSharing && (S = c.GroupSharing), g.lastAdmin && (S = c.LastAdmin)),
            S && t
              ? i.createElement(u, { reason: S, translations: p, goToSharingAccess: t, closeCantDeleteDialog: e })
              : i.createElement(_, {
                  closeConfirmDeleteDialog: e,
                  onDeleteConfirm: async () => {
                    try {
                      var e;
                      (await b({ ids: [d], vaultItemType: f })).tag === a.rq.Success
                        ? (h({
                            description: null != (e = p.deleteSuccessToast) ? e : D("webapp_personal_info_edition_delete_success_toast")
                          }),
                          m())
                        : h({ description: D("_common_generic_error"), mood: "danger", isManualDismiss: !0 });
                    } catch (e) {
                      h({ description: D("_common_generic_error"), mood: "danger", isManualDismiss: !0 });
                    }
                  },
                  translations: p
                })
          );
        };
    },
    559023: (e, t, n) => {
      n.r(t), n.d(t, { Connected: () => A });
      var i = n(696832),
        s = n(799852),
        r = n(448430),
        a = n(382706),
        o = n(526849),
        l = n(453576),
        c = n(660765),
        d = n(441217),
        u = n(66941),
        m = n(62429),
        _ = n(201389),
        g = n(635164),
        p = n(60043),
        f = n(796446),
        h = n(347613),
        D = n(405231),
        b = n(635978);
      const S = [
          "building",
          "city",
          "digitCode",
          "door",
          "floor",
          "id",
          "localeFormat",
          "receiver",
          "spaceId",
          "stairs",
          "state",
          "stateNumber",
          "streetName",
          "streetNumber",
          "zipCode"
        ],
        C = ({ lee: e, match: t, item: n }) => {
          var s, r, C;
          const A = (0, i.createRef)(),
            [T, v] = i.useState(!1),
            [E, I] = i.useState(!1),
            { translate: w } = (0, _.Z)(),
            { routes: y } = (0, p.Xo)();
          i.useEffect(() => {
            (0, m.Nc)(c.PageView.ItemAddressDetails);
          }, []);
          const k = () => {
              (0, m.Nc)(c.PageView.ItemPersonalInfoList), (0, g.uX)(y.userPersonalInfo);
            },
            L = Boolean(t.params?.uuid),
            V = null != (s = n?.itemName) ? s : "",
            N = w("webapp_personal_info_edition_header_address_description"),
            G = i.createElement(h.ZP, { iconSize: h.Jh.headerEditPanelIcon, iconType: h.Tu.address }),
            P = {
              confirmDeleteConfirm: w("webapp_personal_info_edition_delete_confirm"),
              confirmDeleteDismiss: w("webapp_personal_info_edition_delete_dismiss"),
              confirmDeleteSubtitle: w("webapp_personal_info_edition_delete_subtitle"),
              confirmDeleteTitle: w("webapp_personal_info_edition_delete_title_address")
            },
            F = l.Country[e.globalState.locale.country],
            U = n
              ? {
                  ...(0, o.pick)(S, n),
                  addressName: n.itemName,
                  linkedPhone: n.linkedPhoneId,
                  localeFormat: null != (r = null != (C = n?.localeFormat) ? C : F) ? r : l.Country.US
                }
              : null;
          return i.createElement(
            f.zI,
            {
              isViewingExistingItem: L,
              itemHasBeenEdited: T,
              onNavigateOut: k,
              onSubmit: async () => {
                if (null == (e = A.current?.isFormValid()) || !e || !n) return;
                var e;
                const t = null != (i = A.current?.getValues()) ? i : null;
                var i;
                const s = { kwType: "KWAddress", origin: l.SaveOrigin.MANUAL, content: { ...t, addressFull: t?.streetName, id: n.id } };
                await u.C.savePersonalDataItem(s), k();
              },
              onClickDelete: () => I(!0),
              ignoreCloseOnEscape: E,
              formId: "edit_address_panel",
              header: i.createElement(f.V9, { icon: G, iconBackgroundColor: d.colors.dashGreen00, title: V, titleDescription: N })
            },
            U ? i.createElement(b.k, { lee: e, currentValues: U, signalEditedValues: () => v(!0), ref: A }) : null,
            n
              ? i.createElement(D.s, {
                  isVisible: E,
                  itemId: n.id,
                  closeConfirmDeleteDialog: () => I(!1),
                  onDeletionSuccess: k,
                  translations: P,
                  vaultItemType: a.U.Address
                })
              : null
          );
        },
        A = (e) => {
          const t = (0, s.k)(r.L, "query", { vaultItemTypes: [a.U.Address], ids: [`{${e.match.params.uuid}}`] });
          return i.createElement(C, { ...e, item: t.data?.addressesResult.items[0] });
        };
    }
  }
]);
