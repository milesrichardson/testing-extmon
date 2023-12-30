"use strict";
(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [9020, 917],
  {
    426854: (e, t, a) => {
      a.d(t, { t: () => I });
      var r = a(696832),
        n = a(660765),
        i = a(453576),
        s = a(142897),
        d = a(635164),
        o = a(62429),
        l = a(201389),
        c = a(276846),
        u = a(695495),
        m = a(441217);
      const E = ({ formId: e, handleCancel: t, hasDataBeenModified: a, isSubmitting: r }) => {
          const { translate: n } = (0, l.Z)();
          return (0, u.tZ)(
            m.Ejs,
            { sx: { padding: "24px" }, as: "footer", justifyContent: "flex-end", flexDirection: "row", flexWrap: "nowrap" },
            a ? (0, u.tZ)(m.zxk, { type: "submit", form: e, disabled: r }, n("webapp_panel_edition_generic_save_changes")) : null,
            (0, u.tZ)(
              m.zxk,
              { sx: { marginLeft: "16px" }, nature: "secondary", onClick: t, type: "button" },
              n("webapp_panel_edition_generic_cancel_changes")
            )
          );
        },
        _ = "id-add-form",
        p = { GENERIC_ERROR: "_common_generic_error" };
      function I({ addItem: e, children: t, initialValues: a, listRoute: u, reportError: m, countryToKeys: I, header: C, type: y }) {
        const { translate: f } = (0, l.Z)(),
          [b, h] = r.useState(!1),
          [g, D] = r.useState(!1),
          [R, N] = r.useState(a.country),
          { showToast: A } = (0, s.pm)();
        r.useEffect(() => {
          const e = {
            driverLicenses: n.PageView.ItemDriverLicenceCreate,
            fiscalIds: n.PageView.ItemFiscalStatementCreate,
            idCards: n.PageView.ItemIdCardCreate,
            passports: n.PageView.ItemPassportCreate,
            socialSecurityIds: n.PageView.ItemSocialSecurityStatementCreate
          };
          (0, o.Nc)(e[y]);
        }, [y]);
        const L = () => {
            (0, o.Nc)(n.PageView.ItemIdList), (0, d.uX)(u);
          },
          w = r.useRef((e) => {
            if (null !== e) {
              const { dirty: t, isSubmitting: a, values: r } = e;
              h(t), D(a), N(r.country);
            }
          });
        return r.createElement(
          r.Fragment,
          null,
          C(R),
          r.createElement(
            c.P,
            {
              formId: _,
              formRef: w.current,
              handleSubmit: async (t, { setSubmitting: a, setFieldError: r }) => {
                try {
                  const n = await e(t);
                  !0 === n.success
                    ? (A({ description: f(I(R).success) }), L())
                    : (a(!1),
                      n.error?.code === i.AddIdResultErrorCode.MISSING_ID_NUMBER
                        ? r("idNumber", "")
                        : (A({ description: f(p.GENERIC_ERROR), mood: "danger", isManualDismiss: !0 }),
                          m(new Error("[ids][add] Unable to add id"), n.error?.code)));
                } catch (e) {
                  a(!1),
                    A({ description: f(p.GENERIC_ERROR), mood: "danger", isManualDismiss: !0 }),
                    m(e, "[ids][add] Unexpected exception while add id");
                }
              },
              initialValues: a,
              variant: "add"
            },
            (e) => t({ values: e })
          ),
          r.createElement(E, {
            formId: _,
            handleCancel: () => {
              L();
            },
            hasDataBeenModified: b,
            isSubmitting: g
          })
        );
      }
    },
    468318: (e, t, a) => {
      a.r(t), a.d(t, { IdCardAddPanel: () => _ });
      var r = a(696832),
        n = a(382706),
        i = a(66941),
        s = a(201389),
        d = a(537026),
        o = a(426854),
        l = a(723815),
        c = a(900125),
        u = a(469869);
      const m = () => ({
          title: "webapp_id_creation_idcard_title_default",
          success: "webapp_id_creation_idcard_alert_add_success_default"
        }),
        E = (e) => {
          const { expirationDate: t, issueDate: a } = e;
          return i.C.addIdCard({
            ...e,
            expirationDate: t ? Date.parse(t) / 1e3 : null,
            issueDate: a ? Date.parse(a) / 1e3 : null,
            name: e.idName
          });
        },
        _ = ({ lee: e, listRoute: t, setDialogActive: a }) => {
          var i;
          const { translate: _ } = (0, s.Z)(),
            p = {
              idName: "",
              idNumber: "",
              expirationDate: "",
              issueDate: "",
              country: (0, l.lt)(e.carbon.currentLocation),
              spaceId: null != (i = (0, d.B)(e.globalState)) ? i : ""
            };
          return r.createElement(
            o.t,
            {
              addItem: E,
              initialValues: p,
              listRoute: t,
              reportError: e.reportError,
              setDialogActive: a,
              countryToKeys: m,
              header: (e) => r.createElement(c.h, { title: _("webapp_id_creation_idcard_title_default"), country: e, type: n.U.IdCard }),
              type: "idCards"
            },
            ({ values: e }) => r.createElement(u.P, { variant: "add", country: e.country })
          );
        };
    },
    479055: (e, t, a) => {
      a.d(t, { a: () => n });
      var r = a(453576);
      const n = new Set([r.Country.AU, r.Country.GB, r.Country.IE, r.Country.NZ]);
    },
    469869: (e, t, a) => {
      a.d(t, { P: () => E });
      var r,
        n,
        i = a(696832),
        s = a(201389),
        d = a(778089),
        o = a(803057),
        l = a(479055),
        c = a(754171),
        u = a(670570);
      const m = { ...c.k },
        E = i.memo(({ variant: e, handleCopy: t, country: a }) => {
          const { translate: c } = (0, s.Z)(),
            E = i.useRef(null);
          return (
            i.useEffect(
              "add" === e
                ? () => {
                    const e = setTimeout(() => {
                      E.current?.focus();
                    }, d.sc);
                    return () => clearTimeout(e);
                  }
                : () => {},
              []
            ),
            i.createElement(
              i.Fragment,
              null,
              i.createElement(u.YI, { name: "idName", label: c(m.NAME_LABEL), placeholder: c(m.NAME_PLACEHOLDER), ref: E }),
              i.createElement(u.G1, {
                name: "idNumber",
                label: c(m.ID_NUMBER_LABEL),
                placeholder: c(m.ID_NUMBER_PLACEHOLDER),
                handleCopy: "edit" === e ? t : void 0
              }),
              i.createElement(u.Nn, { name: "issueDate", label: c(m.ISSUE_DATE_LABEL) }),
              i.createElement(u.Nn, {
                name: "expirationDate",
                label: c(l.a.has(a) ? m.EXPIRATION_DATE_LABEL_UK : m.EXPIRATION_DATE_LABEL_US)
              }),
              i.createElement(u.Dz, { name: "country", label: c(m.COUNTRY_LABEL) }),
              r || (r = i.createElement(o.c, { height: 24 })),
              n || (n = i.createElement(u.A0, { name: "spaceId" }))
            )
          );
        });
    }
  }
]);
