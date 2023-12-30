"use strict";
(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [8029],
  {
    784591: (e, t, a) => {
      a.r(t), a.d(t, { PaymentCardAddPanel: () => N });
      var r,
        n = a(696832),
        o = a(945146),
        i = a(453576),
        s = a(660765),
        c = a(441217),
        l = a(787268),
        d = a(66941),
        m = a(537026),
        _ = a(201389),
        u = a(62429),
        p = a(635164),
        C = a(60043),
        y = a(175730),
        g = a(950586),
        E = a(878681),
        h = a(796446),
        w = a(264980);
      const N = ({ lee: e }) => {
        const [t, a] = n.useState(!1),
          [N, S] = n.useState(!1),
          { translate: b } = (0, _.Z)(),
          { routes: P } = (0, C.Xo)(),
          B = (0, l.V)(),
          I = (0, m.B)(e.globalState),
          [R, f] = n.useState(),
          [V, k] = n.useState({
            itemName: "",
            cardNumber: "",
            ownerName: "",
            securityCode: "",
            expireMonth: "",
            expireYear: "",
            color: o.X.Blue1,
            spaceId: null != I ? I : "",
            note: ""
          });
        (0, n.useEffect)(() => {
          (0, u.Nc)(s.PageView.ItemCreditCardCreate);
        }, []);
        const v = () => {
          (0, u.Nc)(s.PageView.ItemPaymentList), (0, p.uX)(P.userPayments);
        };
        return n.createElement(
          h.zI,
          {
            isViewingExistingItem: !1,
            itemHasBeenEdited: t,
            onNavigateOut: () => {
              v();
            },
            submitPending: N,
            onSubmit: async () => {
              if (!N) {
                S(!0);
                try {
                  const e = await d.C.addPaymentCard({ ...V, color: w.M[V.color], name: V.itemName, personalNote: V.note });
                  if (e.success) {
                    const e =
                      "" === V.itemName
                        ? b("webapp_payment_edition_generic_save_alert")
                        : b("webapp_payment_edition_name_save_alert", { paymentCard: V.itemName });
                    B.showAlert(e, c.BLW.SUCCESS), v();
                  } else {
                    if (e.error?.code === i.PaymentCardSaveResultErrorCode.EMPTY_CARD_NUMBER_AND_SECURITY_CODE)
                      f(new Set(["cardNumber", "securityCode"]));
                    else {
                      const e = b("_common_generic_error");
                      B.showAlert(e, c.BLW.ERROR);
                    }
                    S(!1);
                  }
                } catch {
                  S(!1);
                }
              }
            },
            formId: "add_paymentcard_panel",
            header: n.createElement(h.V9, {
              icon: r || (r = n.createElement(g.Z, { iconSize: "large" })),
              iconBackgroundColor: (0, E.Z)(V.color),
              title: b("webapp_payment_edition_header_add_payment_card")
            })
          },
          n.createElement(y.g, {
            paymentCardContent: V,
            signalEditedValues: (e) => {
              k(e), a(!0);
            },
            errors: R
          })
        );
      };
    }
  }
]);
