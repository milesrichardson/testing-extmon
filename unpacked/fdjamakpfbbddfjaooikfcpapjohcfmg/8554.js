"use strict";
(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [8554, 3076],
  {
    188134: (e, t, a) => {
      a.d(t, { t: () => y });
      var r = a(696832),
        n = a(593039),
        i = a(876307),
        l = a(482598),
        d = a(287279),
        s = a(448430),
        c = a(382706),
        o = a(692077),
        u = a(45272),
        m = a(488203),
        _ = a(66485),
        E = a(386962),
        p = a(773817),
        b = a(962899);
      const h = ({ formId: e, handleCancel: t, hasDataBeenModified: a, isSubmitting: r }) => {
          const { translate: n } = (0, m.Z)();
          return (0, p.tZ)(
            b.Ejs,
            { sx: { padding: "24px" }, as: "footer", justifyContent: "flex-end", flexDirection: "row", flexWrap: "nowrap" },
            a ? (0, p.tZ)(b.zxk, { type: "submit", form: e, disabled: r }, n("webapp_panel_edition_generic_save_changes")) : null,
            (0, p.tZ)(
              b.zxk,
              { sx: { marginLeft: "16px" }, nature: "secondary", onClick: t, type: "button" },
              n("webapp_panel_edition_generic_cancel_changes")
            )
          );
        },
        I = "id-add-form",
        f = { GENERIC_ERROR: "_common_generic_error" };
      function y({
        children: e,
        initialValues: t,
        listRoute: a,
        reportError: p,
        countryToKeys: b,
        header: y,
        type: g,
        requiredProperty: C = "idNumber"
      }) {
        const { translate: D } = (0, m.Z)(),
          { openDialog: w, shouldShowTrialDiscontinuedDialog: L } = (0, _.yp)(),
          [R, S] = r.useState(!1),
          [N, A] = r.useState(!1),
          [P, v] = r.useState(t.country),
          { createVaultItem: T } = (0, l.u)(s.L),
          { showToast: U } = (0, i.pm)();
        r.useEffect(() => {
          const e = {
            [c.U.DriversLicense]: n.PageView.ItemDriverLicenceCreate,
            [c.U.FiscalId]: n.PageView.ItemFiscalStatementCreate,
            [c.U.IdCard]: n.PageView.ItemIdCardCreate,
            [c.U.Passport]: n.PageView.ItemPassportCreate,
            [c.U.SocialSecurityId]: n.PageView.ItemSocialSecurityStatementCreate
          };
          (0, u.Nc)(e[g]);
        }, [g]),
          r.useEffect(() => {
            L && w();
          }, [w, L]);
        const x = () => {
            (0, u.Nc)(n.PageView.ItemIdList), (0, o.uX)(a);
          },
          B = () => {
            U({ description: D(f.GENERIC_ERROR), mood: "danger", isManualDismiss: !0 });
          },
          V = r.useRef((e) => {
            if (null !== e) {
              const { dirty: t, isSubmitting: a, values: r } = e;
              S(t), A(a), v(r.country);
            }
          });
        return r.createElement(
          r.Fragment,
          null,
          y(P),
          r.createElement(
            E.P,
            {
              formId: I,
              formRef: V.current,
              handleSubmit: async (e, { setSubmitting: t, setFieldError: a }) => {
                if (!e[C]) return a(C, "");
                try {
                  const a = await T({ vaultItemType: g, content: e });
                  (0, d.d6)(a)
                    ? (U({ description: D(b(P).success) }), x())
                    : (t(!1), B(), p(new Error("[ids][add] Unable to add id"), a.error?.errorMessage));
                } catch (e) {
                  t(!1), B(), p(e, "[ids][add] Unexpected exception while add id");
                }
              },
              initialValues: t,
              variant: "add"
            },
            (t) => e({ values: t })
          ),
          r.createElement(h, {
            formId: I,
            handleCancel: () => {
              x();
            },
            hasDataBeenModified: R,
            isSubmitting: N
          })
        );
      }
    },
    14336: (e, t, a) => {
      a.r(t), a.d(t, { IdCardAddPanel: () => m });
      var r = a(696832),
        n = a(382706),
        i = a(488203),
        l = a(739649),
        d = a(188134),
        s = a(566219),
        c = a(974910),
        o = a(762428);
      const u = () => ({
          title: "webapp_id_creation_idcard_title_default",
          success: "webapp_id_creation_idcard_alert_add_success_default"
        }),
        m = ({ lee: e, listRoute: t }) => {
          var a;
          const { translate: m } = (0, i.Z)(),
            _ = {
              idName: "",
              idNumber: "",
              expirationDate: "",
              issueDate: "",
              country: (0, s.lt)(e.carbon.currentLocation),
              spaceId: null != (a = (0, l.B)(e.globalState)) ? a : ""
            };
          return r.createElement(
            d.t,
            {
              initialValues: _,
              listRoute: t,
              reportError: e.reportError,
              countryToKeys: u,
              header: (e) => r.createElement(c.h, { title: m("webapp_id_creation_idcard_title_default"), country: e, type: n.U.IdCard }),
              type: n.U.IdCard
            },
            ({ values: e }) => r.createElement(o.P, { variant: "add", country: e.country })
          );
        };
    },
    872055: (e, t, a) => {
      a.d(t, { a: () => n });
      var r = a(914662);
      const n = new Set([r.cH.AU, r.cH.GB, r.cH.IE, r.cH.NZ]);
    },
    762428: (e, t, a) => {
      a.d(t, { P: () => _ });
      var r,
        n = a(696832),
        i = a(488203),
        l = a(177650),
        d = a(321143),
        s = a(66485),
        c = a(872055),
        o = a(16792),
        u = a(865212);
      const m = { ...o.k },
        _ = n.memo(({ variant: e, handleCopy: t, country: a }) => {
          const { translate: o } = (0, i.Z)(),
            { shouldShowTrialDiscontinuedDialog: _ } = (0, s.yp)(),
            E = n.useRef(null);
          return (
            n.useEffect(
              "add" === e
                ? () => {
                    const e = setTimeout(() => {
                      E.current?.focus();
                    }, l.sc);
                    return () => clearTimeout(e);
                  }
                : () => {},
              []
            ),
            n.createElement(
              n.Fragment,
              null,
              n.createElement(u.YI, { name: "idName", label: o(m.NAME_LABEL), placeholder: o(m.NAME_PLACEHOLDER), ref: E, disabled: !!_ }),
              n.createElement(u.G1, {
                name: "idNumber",
                label: o(m.ID_NUMBER_LABEL),
                placeholder: o(m.ID_NUMBER_PLACEHOLDER),
                handleCopy: "edit" === e ? t : void 0,
                disabled: !!_
              }),
              n.createElement(u.Nn, { name: "issueDate", label: o(m.ISSUE_DATE_LABEL), disabled: !!_ }),
              n.createElement(u.Nn, {
                name: "expirationDate",
                label: o(c.a.has(a) ? m.EXPIRATION_DATE_LABEL_UK : m.EXPIRATION_DATE_LABEL_US),
                disabled: !!_
              }),
              n.createElement(u.Dz, { name: "country", label: o(m.COUNTRY_LABEL), disabled: !!_ }),
              r || (r = n.createElement(d.c, { height: 24 })),
              n.createElement(u.A0, { name: "spaceId", disabled: !!_ })
            )
          );
        });
    }
  }
]);
