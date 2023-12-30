"use strict";
(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [737],
  {
    203355: (e, t, a) => {
      a.r(t), a.d(t, { BankAccountAddView: () => g });
      var n = a(696832),
        o = a(142897),
        r = a(575257),
        c = a(453576),
        s = a(441217),
        u = a(660765),
        i = a(787268),
        d = a(66941),
        l = a(60043),
        m = a(537026),
        _ = a(778089),
        b = a(201389),
        k = a(62429),
        p = a(635164),
        w = a(796446),
        f = a(103181),
        N = a(887982),
        C = a(148038),
        I = a(55823);
      const B = (e) =>
        ((e) => {
          if (e.status === C.rq.Success && e.data.matchingCount > 0) {
            var t;
            const { firstName: a, lastName: n } =
              null != (t = e.data.items.filter(Boolean).find((e) => "" !== e.firstName.trim() || "" !== e.lastName.trim()))
                ? t
                : { firstName: "", lastName: "" };
            return [a, n].join(" ").trim();
          }
          return "";
        })((0, I.e)(d.C.getIdentities, d.C.liveIdentities, { spaceId: e, sort: "lastUse", sortDirection: "descend" }));
      var S;
      const g = ({ lee: e }) => {
        var t;
        const [a, C] = (0, n.useState)(!1),
          [I, g] = (0, n.useState)(!1),
          [h, y] = (0, n.useState)(new Set()),
          { routes: A } = (0, l.Xo)(),
          E = (0, n.useRef)(null);
        (0, n.useEffect)(() => {
          (0, k.Nc)(u.PageView.ItemBankStatementCreate);
          const e = setTimeout(() => {
            E.current?.focus();
          }, _.sc);
          return () => clearTimeout(e);
        }, []);
        const v = (() => {
            const t = e.carbon.currentLocation.country,
              a = r.c.US;
            var n;
            return t && null != (n = r.c[t]) ? n : a;
          })(),
          V = null != (t = (0, m.B)(e.globalState)) ? t : "",
          [P, T] = (0, n.useState)({ bankCode: "", country: v, IBAN: "", BIC: "", accountName: "", ownerName: "", spaceId: V }),
          U = B(P.spaceId),
          Z = "" !== U;
        (0, n.useEffect)(() => {
          "" !== U && T((e) => ({ ...e, owner: U }));
        }, [Z]);
        const { translate: L } = (0, b.Z)(),
          D = (0, i.V)(),
          R = () => {
            (0, k.Nc)(u.PageView.ItemPaymentList), (0, p.uX)(A.userPayments);
          };
        return (0, o.tZ)(
          w.zI,
          {
            isViewingExistingItem: !1,
            itemHasBeenEdited: a,
            formId: "bank-account-add-form",
            onNavigateOut: () => {
              R();
            },
            onSubmit: async () => {
              if (!I) {
                g(!0);
                try {
                  const { accountName: t, ownerName: a, bankCode: n } = P,
                    o = await d.C.addBankAccount({
                      ...P,
                      bank: n,
                      owner: a,
                      name: t || L("webapp_payment_edition_bank_account_name_default")
                    });
                  if (o.success) {
                    const e =
                      "" === t
                        ? L("webapp_payment_edition_bank_account_generic_save_alert")
                        : L("webapp_payment_edition_bank_account_name_save_alert", { accountName: t });
                    D.showAlert(e, s.BLW.SUCCESS), R();
                  } else
                    g(!1),
                      o.error?.code === c.AddBankAccountResultErrorCode.EMPTY_BIC_AND_IBAN
                        ? y(new Set(["BIC", "IBAN"]))
                        : e.reportError(new Error("[payments][add-bank-account] Unable to add bank account"), o.error?.code);
                } catch (t) {
                  g(!1), e.reportError(t, "[payments][add-bank-account] Unable to add bank account");
                }
              }
            },
            header: (0, o.tZ)(w.V9, {
              icon: S || (S = (0, o.tZ)(N.L, null)),
              iconBackgroundColor: s.colors.dashGreen06,
              title: L("webapp_payment_edition_header_add_bank_account")
            })
          },
          (0, o.tZ)(f.o, {
            bankAccount: P,
            errors: h,
            ref: E,
            signalEditedValues: (e, t = !1) => {
              T(e), t || C(!0);
            },
            variant: "add"
          })
        );
      };
    }
  }
]);
