"use strict";
(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [7785],
  {
    431738: (e, t, a) => {
      a.r(t), a.d(t, { BankAccountAddView: () => V });
      var n = a(696832),
        o = a(482598),
        c = a(287279),
        s = a(876307),
        r = a(448430),
        i = a(575257),
        u = a(382706),
        l = a(962899),
        d = a(593039),
        m = a(86498),
        _ = a(276376),
        f = a(739649),
        p = a(177650),
        g = a(488203),
        b = a(45272),
        S = a(692077),
        h = a(66485),
        w = a(376452),
        N = a(908940),
        k = a(860062),
        I = a(148038),
        B = a(740300),
        y = a(584953);
      const C = (e) =>
        ((e) => {
          if (e.status === I.rq.Success && e.data.matchingCount > 0) {
            var t;
            const { firstName: a, lastName: n } =
              null != (t = e.data.items.filter(Boolean).find((e) => "" !== e.firstName.trim() || "" !== e.lastName.trim()))
                ? t
                : { firstName: "", lastName: "" };
            return [a, n].join(" ").trim();
          }
          return "";
        })((0, y.e)(B.C.getIdentities, B.C.liveIdentities, { spaceId: e, sort: "lastUse", sortDirection: "descend" }));
      var v;
      const E = "_common_generic_error",
        V = ({ lee: e }) => {
          var t;
          const [a, I] = (0, n.useState)(!1),
            [B, y] = (0, n.useState)(!1),
            [V, R] = (0, n.useState)(new Set()),
            A = (0, n.useRef)(null),
            { createVaultItem: L } = (0, o.u)(r.L),
            { routes: T } = (0, _.Xo)(),
            { openDialog: Z, shouldShowTrialDiscontinuedDialog: D } = (0, h.yp)();
          (0, n.useEffect)(() => {
            (0, b.Nc)(d.PageView.ItemBankStatementCreate);
            const e = setTimeout(() => {
              A.current?.focus();
            }, p.sc);
            return () => clearTimeout(e);
          }, []),
            (0, n.useEffect)(() => {
              D && Z();
            }, [Z, D]);
          const [P, U] = (0, n.useState)({
              bankCode: "",
              country: i.c[e.globalState.locale.country] || i.c.US,
              IBAN: "",
              BIC: "",
              accountName: "",
              ownerName: "",
              spaceId: null != (t = (0, f.B)(e.globalState)) ? t : ""
            }),
            O = C(P.spaceId),
            W = "" !== O;
          (0, n.useEffect)(() => {
            "" !== O && U((e) => ({ ...e, owner: O }));
          }, [W]);
          const { translate: X } = (0, g.Z)(),
            { showAlert: j } = (0, m.V)(),
            q = () => {
              (0, b.Nc)(d.PageView.ItemPaymentList), (0, S.uX)(T.userPayments);
            };
          return (0, s.tZ)(
            w.zI,
            {
              isViewingExistingItem: !1,
              itemHasBeenEdited: a,
              formId: "bank-account-add-form",
              onNavigateOut: q,
              onSubmit: async () => {
                if (B) return;
                const e = (0, N.e)(P);
                if (!e.isValid) return R(e.errorSet);
                y(!0);
                try {
                  const e = await L({ vaultItemType: u.U.BankAccount, content: P });
                  (0, c.d6)(e)
                    ? (j(
                        P.accountName
                          ? X("webapp_payment_edition_bank_account_name_save_alert", { accountName: P.accountName })
                          : X("webapp_payment_edition_bank_account_generic_save_alert"),
                        l.BLW.SUCCESS
                      ),
                      q())
                    : (j(X(E), l.BLW.ERROR), y(!1));
                } catch (e) {
                  j(X(E), l.BLW.ERROR), y(!1);
                }
              },
              header: (0, s.tZ)(w.V9, {
                icon: v || (v = (0, s.tZ)(k.L, null)),
                iconBackgroundColor: l.colors.dashGreen06,
                title: X("webapp_payment_edition_header_add_bank_account")
              })
            },
            (0, s.tZ)(N.o, {
              bankAccount: P,
              errors: V,
              ref: A,
              signalEditedValues: (e, t = !1) => {
                U(e), t || I(!0);
              },
              variant: "add"
            })
          );
        };
    }
  }
]);
