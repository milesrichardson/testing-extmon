"use strict";
(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [395, 917],
  {
    426854: (e, t, a) => {
      a.d(t, { t: () => f });
      var r = a(696832),
        i = a(660765),
        n = a(453576),
        l = a(142897),
        s = a(635164),
        d = a(62429),
        c = a(201389),
        o = a(276846),
        u = a(695495),
        _ = a(441217);
      const m = ({ formId: e, handleCancel: t, hasDataBeenModified: a, isSubmitting: r }) => {
          const { translate: i } = (0, c.Z)();
          return (0, u.tZ)(
            _.Ejs,
            { sx: { padding: "24px" }, as: "footer", justifyContent: "flex-end", flexDirection: "row", flexWrap: "nowrap" },
            a ? (0, u.tZ)(_.zxk, { type: "submit", form: e, disabled: r }, i("webapp_panel_edition_generic_save_changes")) : null,
            (0, u.tZ)(
              _.zxk,
              { sx: { marginLeft: "16px" }, nature: "secondary", onClick: t, type: "button" },
              i("webapp_panel_edition_generic_cancel_changes")
            )
          );
        },
        E = "id-add-form",
        p = { GENERIC_ERROR: "_common_generic_error" };
      function f({ addItem: e, children: t, initialValues: a, listRoute: u, reportError: _, countryToKeys: f, header: b, type: R }) {
        const { translate: L } = (0, c.Z)(),
          [h, C] = r.useState(!1),
          [I, g] = r.useState(!1),
          [N, A] = r.useState(a.country),
          { showToast: y } = (0, l.pm)();
        r.useEffect(() => {
          const e = {
            driverLicenses: i.PageView.ItemDriverLicenceCreate,
            fiscalIds: i.PageView.ItemFiscalStatementCreate,
            idCards: i.PageView.ItemIdCardCreate,
            passports: i.PageView.ItemPassportCreate,
            socialSecurityIds: i.PageView.ItemSocialSecurityStatementCreate
          };
          (0, d.Nc)(e[R]);
        }, [R]);
        const w = () => {
            (0, d.Nc)(i.PageView.ItemIdList), (0, s.uX)(u);
          },
          D = r.useRef((e) => {
            if (null !== e) {
              const { dirty: t, isSubmitting: a, values: r } = e;
              C(t), g(a), A(r.country);
            }
          });
        return r.createElement(
          r.Fragment,
          null,
          b(N),
          r.createElement(
            o.P,
            {
              formId: E,
              formRef: D.current,
              handleSubmit: async (t, { setSubmitting: a, setFieldError: r }) => {
                try {
                  const i = await e(t);
                  !0 === i.success
                    ? (y({ description: L(f(N).success) }), w())
                    : (a(!1),
                      i.error?.code === n.AddIdResultErrorCode.MISSING_ID_NUMBER
                        ? r("idNumber", "")
                        : (y({ description: L(p.GENERIC_ERROR), mood: "danger", isManualDismiss: !0 }),
                          _(new Error("[ids][add] Unable to add id"), i.error?.code)));
                } catch (e) {
                  a(!1),
                    y({ description: L(p.GENERIC_ERROR), mood: "danger", isManualDismiss: !0 }),
                    _(e, "[ids][add] Unexpected exception while add id");
                }
              },
              initialValues: a,
              variant: "add"
            },
            (e) => t({ values: e })
          ),
          r.createElement(m, {
            formId: E,
            handleCancel: () => {
              w();
            },
            hasDataBeenModified: h,
            isSubmitting: I
          })
        );
      }
    },
    291569: (e, t, a) => {
      a.r(t), a.d(t, { FiscalIdAddPanel: () => p });
      var r,
        i = a(696832),
        n = a(382706),
        l = a(66941),
        s = a(201389),
        d = a(537026),
        c = a(426854),
        o = a(753139),
        u = a(723815),
        _ = a(900125);
      const m = () => ({
          title: "webapp_id_creation_fiscalid_title_default",
          success: "webapp_id_creation_fiscalid_alert_add_success_default"
        }),
        E = (e) => l.C.addFiscalId({ ...e, idNumber: e.fiscalNumber }),
        p = ({ lee: e, listRoute: t, setDialogActive: a }) => {
          var l;
          const { translate: p } = (0, s.Z)(),
            f = {
              fiscalNumber: "",
              teledeclarantNumber: "",
              country: (0, u.lt)(e.carbon.currentLocation),
              spaceId: null != (l = (0, d.B)(e.globalState)) ? l : ""
            };
          return i.createElement(
            c.t,
            {
              addItem: E,
              initialValues: f,
              listRoute: t,
              reportError: e.reportError,
              setDialogActive: a,
              countryToKeys: m,
              type: "fiscalIds",
              header: (e) => i.createElement(_.h, { title: p("webapp_id_creation_fiscalid_title_default"), country: e, type: n.U.FiscalId })
            },
            () => r || (r = i.createElement(o.U, { variant: "add" }))
          );
        };
    },
    753139: (e, t, a) => {
      a.d(t, { U: () => _ });
      var r,
        i,
        n = a(696832),
        l = a(201389),
        s = a(778089),
        d = a(803057),
        c = a(754171),
        o = a(670570);
      const u = {
          ...c.k,
          TELEDECLARANT_NUMBER_LABEL: "webapp_id_form_field_label_teledeclarant_number",
          TELEDECLARANT_NUMBER_PLACEHOLDER: "webapp_id_form_field_placeholder_teledeclarant_number",
          TAX_NUMBER_LABEL_DEFAULT: "webapp_id_form_field_label_tax_number"
        },
        _ = n.memo(({ variant: e, handleCopy: t }) => {
          const { translate: a } = (0, l.Z)(),
            c = n.useRef(null);
          return (
            n.useEffect(
              "add" === e
                ? () => {
                    const e = setTimeout(() => {
                      c.current?.focus();
                    }, s.sc);
                    return () => clearTimeout(e);
                  }
                : () => {},
              []
            ),
            n.createElement(
              n.Fragment,
              null,
              n.createElement(o.G1, {
                name: "fiscalNumber",
                label: a(u.TAX_NUMBER_LABEL_DEFAULT),
                placeholder: a(u.ID_NUMBER_PLACEHOLDER),
                handleCopy: "edit" === e ? t : void 0,
                ref: c
              }),
              n.createElement(o.xu, {
                name: "teledeclarantNumber",
                label: a(u.TELEDECLARANT_NUMBER_LABEL),
                placeholder: a(u.TELEDECLARANT_NUMBER_PLACEHOLDER),
                handleCopy: "edit" === e ? t : void 0
              }),
              n.createElement(o.Dz, { name: "country", label: a(u.COUNTRY_LABEL) }),
              r || (r = n.createElement(d.c, { height: 24 })),
              i || (i = n.createElement(o.A0, { name: "spaceId" }))
            )
          );
        });
    }
  }
]);
