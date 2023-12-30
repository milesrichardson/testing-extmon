"use strict";
(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [4925, 917],
  {
    426854: (e, t, a) => {
      a.d(t, { t: () => I });
      var r = a(696832),
        n = a(660765),
        s = a(453576),
        i = a(142897),
        l = a(635164),
        o = a(62429),
        c = a(201389),
        d = a(276846),
        u = a(695495),
        _ = a(441217);
      const E = ({ formId: e, handleCancel: t, hasDataBeenModified: a, isSubmitting: r }) => {
          const { translate: n } = (0, c.Z)();
          return (0, u.tZ)(
            _.Ejs,
            { sx: { padding: "24px" }, as: "footer", justifyContent: "flex-end", flexDirection: "row", flexWrap: "nowrap" },
            a ? (0, u.tZ)(_.zxk, { type: "submit", form: e, disabled: r }, n("webapp_panel_edition_generic_save_changes")) : null,
            (0, u.tZ)(
              _.zxk,
              { sx: { marginLeft: "16px" }, nature: "secondary", onClick: t, type: "button" },
              n("webapp_panel_edition_generic_cancel_changes")
            )
          );
        },
        p = "id-add-form",
        m = { GENERIC_ERROR: "_common_generic_error" };
      function I({ addItem: e, children: t, initialValues: a, listRoute: u, reportError: _, countryToKeys: I, header: f, type: C }) {
        const { translate: L } = (0, c.Z)(),
          [b, y] = r.useState(!1),
          [h, g] = r.useState(!1),
          [A, D] = r.useState(a.country),
          { showToast: R } = (0, i.pm)();
        r.useEffect(() => {
          const e = {
            driverLicenses: n.PageView.ItemDriverLicenceCreate,
            fiscalIds: n.PageView.ItemFiscalStatementCreate,
            idCards: n.PageView.ItemIdCardCreate,
            passports: n.PageView.ItemPassportCreate,
            socialSecurityIds: n.PageView.ItemSocialSecurityStatementCreate
          };
          (0, o.Nc)(e[C]);
        }, [C]);
        const S = () => {
            (0, o.Nc)(n.PageView.ItemIdList), (0, l.uX)(u);
          },
          P = r.useRef((e) => {
            if (null !== e) {
              const { dirty: t, isSubmitting: a, values: r } = e;
              y(t), g(a), D(r.country);
            }
          });
        return r.createElement(
          r.Fragment,
          null,
          f(A),
          r.createElement(
            d.P,
            {
              formId: p,
              formRef: P.current,
              handleSubmit: async (t, { setSubmitting: a, setFieldError: r }) => {
                try {
                  const n = await e(t);
                  !0 === n.success
                    ? (R({ description: L(I(A).success) }), S())
                    : (a(!1),
                      n.error?.code === s.AddIdResultErrorCode.MISSING_ID_NUMBER
                        ? r("idNumber", "")
                        : (R({ description: L(m.GENERIC_ERROR), mood: "danger", isManualDismiss: !0 }),
                          _(new Error("[ids][add] Unable to add id"), n.error?.code)));
                } catch (e) {
                  a(!1),
                    R({ description: L(m.GENERIC_ERROR), mood: "danger", isManualDismiss: !0 }),
                    _(e, "[ids][add] Unexpected exception while add id");
                }
              },
              initialValues: a,
              variant: "add"
            },
            (e) => t({ values: e })
          ),
          r.createElement(E, {
            formId: p,
            handleCancel: () => {
              S();
            },
            hasDataBeenModified: b,
            isSubmitting: h
          })
        );
      }
    },
    972676: (e, t, a) => {
      a.r(t), a.d(t, { PassportAddPanel: () => p });
      var r = a(696832),
        n = a(382706),
        s = a(66941),
        i = a(201389),
        l = a(537026),
        o = a(426854),
        c = a(723815),
        d = a(900125),
        u = a(75448);
      const _ = () => ({
          title: "webapp_id_creation_passport_title_default",
          success: "webapp_id_creation_passport_alert_add_success_default"
        }),
        E = (e) => {
          const { expirationDate: t, issueDate: a } = e;
          return s.C.addPassport({
            ...e,
            expirationDate: t ? Date.parse(t) / 1e3 : null,
            issueDate: a ? Date.parse(a) / 1e3 : null,
            deliveryPlace: e.issuePlace,
            name: e.idName
          });
        },
        p = ({ lee: e, listRoute: t, setDialogActive: a }) => {
          var s;
          const { translate: p } = (0, i.Z)(),
            m = {
              idName: "",
              idNumber: "",
              expirationDate: "",
              issueDate: "",
              country: (0, c.lt)(e.carbon.currentLocation),
              spaceId: null != (s = (0, l.B)(e.globalState)) ? s : "",
              issuePlace: ""
            };
          return r.createElement(
            o.t,
            {
              addItem: E,
              initialValues: m,
              listRoute: t,
              reportError: e.reportError,
              setDialogActive: a,
              countryToKeys: _,
              type: "passports",
              header: (e) => r.createElement(d.h, { title: p("webapp_id_creation_passport_title_default"), country: e, type: n.U.Passport })
            },
            ({ values: e }) => r.createElement(u.g, { variant: "add", country: e.country })
          );
        };
    },
    479055: (e, t, a) => {
      a.d(t, { a: () => n });
      var r = a(453576);
      const n = new Set([r.Country.AU, r.Country.GB, r.Country.IE, r.Country.NZ]);
    },
    75448: (e, t, a) => {
      a.d(t, { g: () => E });
      var r,
        n,
        s = a(696832),
        i = a(201389),
        l = a(778089),
        o = a(803057),
        c = a(479055),
        d = a(754171),
        u = a(670570);
      const _ = {
          ...d.k,
          PLACE_OF_ISSUE_LABEL: "webapp_id_form_field_label_place_of_issue",
          PLACE_OF_ISSUE_PLACEHOLDER: "webapp_id_form_field_placeholder_place_of_issue"
        },
        E = s.memo(({ variant: e, handleCopy: t, country: a }) => {
          const { translate: d } = (0, i.Z)(),
            E = s.useRef(null);
          return (
            s.useEffect(
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
            s.createElement(
              s.Fragment,
              null,
              s.createElement(u.YI, { name: "idName", label: d(_.NAME_LABEL), placeholder: d(_.NAME_PLACEHOLDER), ref: E }),
              s.createElement(u.G1, {
                name: "idNumber",
                label: d(_.ID_NUMBER_LABEL),
                placeholder: d(_.ID_NUMBER_PLACEHOLDER),
                handleCopy: "edit" === e ? t : void 0
              }),
              s.createElement(u.Nn, { name: "issueDate", label: d(_.ISSUE_DATE_LABEL) }),
              s.createElement(u.Nn, {
                name: "expirationDate",
                label: d(c.a.has(a) ? _.EXPIRATION_DATE_LABEL_UK : _.EXPIRATION_DATE_LABEL_US)
              }),
              s.createElement(u.Dz, { name: "country", label: d(_.COUNTRY_LABEL) }),
              s.createElement(u.YI, { name: "issuePlace", label: d(_.PLACE_OF_ISSUE_LABEL), placeholder: d(_.PLACE_OF_ISSUE_PLACEHOLDER) }),
              r || (r = s.createElement(o.c, { height: 24 })),
              n || (n = s.createElement(u.A0, { name: "spaceId" }))
            )
          );
        });
    }
  }
]);
