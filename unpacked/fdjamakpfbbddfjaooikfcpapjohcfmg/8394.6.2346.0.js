"use strict";
(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [8394, 917],
  {
    426854: (e, t, a) => {
      a.d(t, { t: () => I });
      var r = a(696832),
        n = a(660765),
        i = a(453576),
        s = a(142897),
        l = a(635164),
        o = a(62429),
        c = a(201389),
        d = a(276846),
        u = a(695495),
        m = a(441217);
      const E = ({ formId: e, handleCancel: t, hasDataBeenModified: a, isSubmitting: r }) => {
          const { translate: n } = (0, c.Z)();
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
      function I({ addItem: e, children: t, initialValues: a, listRoute: u, reportError: m, countryToKeys: I, header: L, type: b }) {
        const { translate: f } = (0, c.Z)(),
          [h, g] = r.useState(!1),
          [y, D] = r.useState(!1),
          [C, R] = r.useState(a.country),
          { showToast: A } = (0, s.pm)();
        r.useEffect(() => {
          const e = {
            driverLicenses: n.PageView.ItemDriverLicenceCreate,
            fiscalIds: n.PageView.ItemFiscalStatementCreate,
            idCards: n.PageView.ItemIdCardCreate,
            passports: n.PageView.ItemPassportCreate,
            socialSecurityIds: n.PageView.ItemSocialSecurityStatementCreate
          };
          (0, o.Nc)(e[b]);
        }, [b]);
        const v = () => {
            (0, o.Nc)(n.PageView.ItemIdList), (0, l.uX)(u);
          },
          N = r.useRef((e) => {
            if (null !== e) {
              const { dirty: t, isSubmitting: a, values: r } = e;
              g(t), D(a), R(r.country);
            }
          });
        return r.createElement(
          r.Fragment,
          null,
          L(C),
          r.createElement(
            d.P,
            {
              formId: _,
              formRef: N.current,
              handleSubmit: async (t, { setSubmitting: a, setFieldError: r }) => {
                try {
                  const n = await e(t);
                  !0 === n.success
                    ? (A({ description: f(I(C).success) }), v())
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
              v();
            },
            hasDataBeenModified: h,
            isSubmitting: y
          })
        );
      }
    },
    448084: (e, t, a) => {
      a.r(t), a.d(t, { DriverLicenseAddPanel: () => _ });
      var r = a(696832),
        n = a(382706),
        i = a(66941),
        s = a(201389),
        l = a(537026),
        o = a(723815),
        c = a(900125),
        d = a(633075),
        u = a(426854);
      const m = () => ({
          title: "webapp_id_creation_driverlicense_title_default",
          success: "webapp_id_creation_driverlicense_alert_add_success_default"
        }),
        E = (e) => {
          const { expirationDate: t, issueDate: a } = e;
          return i.C.addDriverLicense({
            ...e,
            expirationDate: t ? Date.parse(t) / 1e3 : null,
            issueDate: a ? Date.parse(a) / 1e3 : null,
            name: e.idName
          });
        },
        _ = ({ lee: e, listRoute: t, setDialogActive: a }) => {
          var i;
          const { translate: _ } = (0, s.Z)(),
            p = (0, o.lt)(e.carbon.currentLocation),
            I = null != (i = (0, l.B)(e.globalState)) ? i : "",
            L = (t) => {
              e.reportError(t);
            },
            b = { idName: "", idNumber: "", expirationDate: "", issueDate: "", country: p, spaceId: I, state: "" };
          return r.createElement(
            u.t,
            {
              addItem: E,
              initialValues: b,
              listRoute: t,
              reportError: e.reportError,
              setDialogActive: a,
              countryToKeys: m,
              type: "driverLicenses",
              header: (e) =>
                r.createElement(c.h, {
                  title: (0, o.Il)(_("webapp_id_creation_driverlicense_title_default"), _.getLocale(), e),
                  country: e,
                  type: n.U.DriversLicense
                })
            },
            ({ values: e }) => r.createElement(d.g, { variant: "add", handleError: L, country: e.country })
          );
        };
    },
    479055: (e, t, a) => {
      a.d(t, { a: () => n });
      var r = a(453576);
      const n = new Set([r.Country.AU, r.Country.GB, r.Country.IE, r.Country.NZ]);
    },
    633075: (e, t, a) => {
      a.d(t, { g: () => E });
      var r,
        n,
        i = a(696832),
        s = a(201389),
        l = a(778089),
        o = a(803057),
        c = a(479055),
        d = a(754171),
        u = a(670570);
      const m = { ...d.k, STATE_LABEL: "webapp_id_form_field_label_state" },
        E = i.memo(({ variant: e, handleCopy: t, handleError: a, country: d }) => {
          const { translate: E } = (0, s.Z)(),
            _ = i.useRef(null);
          return (
            i.useEffect(
              "add" === e
                ? () => {
                    const e = setTimeout(() => {
                      _.current?.focus();
                    }, l.sc);
                    return () => clearTimeout(e);
                  }
                : () => {},
              []
            ),
            i.createElement(
              i.Fragment,
              null,
              i.createElement(u.YI, { name: "idName", label: E(m.NAME_LABEL), placeholder: E(m.NAME_PLACEHOLDER), ref: _ }),
              i.createElement(u.G1, {
                name: "idNumber",
                label: E(m.ID_NUMBER_LABEL),
                placeholder: E(m.ID_NUMBER_PLACEHOLDER),
                handleCopy: "edit" === e ? t : void 0
              }),
              i.createElement(u.Nn, { name: "issueDate", label: E(m.ISSUE_DATE_LABEL) }),
              i.createElement(u.Nn, {
                name: "expirationDate",
                label: E(c.a.has(d) ? m.EXPIRATION_DATE_LABEL_UK : m.EXPIRATION_DATE_LABEL_US)
              }),
              i.createElement(u.ju, { countryFieldLabel: E(m.COUNTRY_LABEL), stateFieldLabel: E(m.STATE_LABEL), handleError: a }),
              r || (r = i.createElement(o.c, { height: 24 })),
              n || (n = i.createElement(u.A0, { name: "spaceId" }))
            )
          );
        });
    }
  }
]);
