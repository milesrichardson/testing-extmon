"use strict";
(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [4565],
  {
    852204: (e, t, a) => {
      a.r(t), a.d(t, { PaymentCardAddPanel: () => V });
      var n,
        r = a(696832),
        i = a(593039),
        o = a(962899),
        s = a(287279),
        c = a(482598),
        d = a(448430),
        l = a(945146),
        m = a(382706),
        u = a(86498),
        _ = a(488203),
        p = a(45272),
        g = a(692077),
        y = a(276376),
        h = a(66485),
        C = a(619122),
        w = a(69651),
        E = a(61290),
        S = a(977257),
        b = a(376452);
      const I = "_common_generic_error",
        V = () => {
          const [e, t] = (0, r.useState)(!1),
            [a, V] = (0, r.useState)(!1),
            { translate: f } = (0, _.Z)(),
            { routes: N } = (0, y.Xo)(),
            { showAlert: P } = (0, u.V)(),
            { createVaultItem: B } = (0, c.u)(d.L),
            { currentSpaceId: R } = (0, C.fV)(),
            [k, v] = (0, r.useState)(),
            [L, T] = (0, r.useState)({
              itemName: "",
              cardNumber: "",
              ownerName: "",
              securityCode: "",
              expireMonth: "",
              expireYear: "",
              color: l.X.Blue1,
              spaceId: null != R ? R : "",
              note: ""
            }),
            { openDialog: x, shouldShowTrialDiscontinuedDialog: D } = (0, h.yp)();
          (0, r.useEffect)(() => {
            (0, p.Nc)(i.PageView.ItemCreditCardCreate);
          }, []),
            (0, r.useEffect)(() => {
              D && x();
            }, [D]);
          const O = () => {
            (0, p.Nc)(i.PageView.ItemPaymentList), (0, g.uX)(N.userPayments);
          };
          return r.createElement(
            b.zI,
            {
              isViewingExistingItem: !1,
              itemHasBeenEdited: e,
              onNavigateOut: O,
              submitPending: a,
              onSubmit: async () => {
                if (a) return;
                const e = (0, w.u)(L);
                if (!e.isValid) return v(e.errorSet);
                V(!0);
                try {
                  const e = await B({ vaultItemType: m.U.PaymentCard, content: L });
                  (0, s.d6)(e)
                    ? (P(
                        L.itemName
                          ? f("webapp_payment_edition_name_save_alert", { paymentCard: L.itemName })
                          : f("webapp_payment_edition_generic_save_alert"),
                        o.BLW.SUCCESS
                      ),
                      O())
                    : (P(f(I), o.BLW.ERROR), V(!1));
                } catch (e) {
                  P(f(I), o.BLW.ERROR), V(!1);
                }
              },
              formId: "add_paymentcard_panel",
              header: r.createElement(b.V9, {
                icon: n || (n = r.createElement(E.Z, { iconSize: "large" })),
                iconBackgroundColor: (0, S.Z)(L.color),
                title: f("webapp_payment_edition_header_add_payment_card")
              })
            },
            r.createElement(w.g, {
              paymentCardContent: L,
              signalEditedValues: (e) => {
                T(e), t(!0);
              },
              errors: k
            })
          );
        };
    }
  }
]);
