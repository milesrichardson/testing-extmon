"use strict";
(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [7421, 3076],
  {
    188134: (e, t, a) => {
      a.d(t, { t: () => y });
      var r = a(696832),
        i = a(593039),
        n = a(876307),
        l = a(482598),
        d = a(287279),
        s = a(448430),
        c = a(382706),
        o = a(692077),
        u = a(45272),
        _ = a(488203),
        m = a(66485),
        E = a(386962),
        p = a(773817),
        f = a(962899);
      const b = ({ formId: e, handleCancel: t, hasDataBeenModified: a, isSubmitting: r }) => {
          const { translate: i } = (0, _.Z)();
          return (0, p.tZ)(
            f.Ejs,
            { sx: { padding: "24px" }, as: "footer", justifyContent: "flex-end", flexDirection: "row", flexWrap: "nowrap" },
            a ? (0, p.tZ)(f.zxk, { type: "submit", form: e, disabled: r }, i("webapp_panel_edition_generic_save_changes")) : null,
            (0, p.tZ)(
              f.zxk,
              { sx: { marginLeft: "16px" }, nature: "secondary", onClick: t, type: "button" },
              i("webapp_panel_edition_generic_cancel_changes")
            )
          );
        },
        h = "id-add-form",
        L = { GENERIC_ERROR: "_common_generic_error" };
      function y({
        children: e,
        initialValues: t,
        listRoute: a,
        reportError: p,
        countryToKeys: f,
        header: y,
        type: R,
        requiredProperty: g = "idNumber"
      }) {
        const { translate: C } = (0, _.Z)(),
          { openDialog: w, shouldShowTrialDiscontinuedDialog: I } = (0, m.yp)(),
          [T, A] = r.useState(!1),
          [D, N] = r.useState(!1),
          [U, S] = r.useState(t.country),
          { createVaultItem: v } = (0, l.u)(s.L),
          { showToast: B } = (0, n.pm)();
        r.useEffect(() => {
          const e = {
            [c.U.DriversLicense]: i.PageView.ItemDriverLicenceCreate,
            [c.U.FiscalId]: i.PageView.ItemFiscalStatementCreate,
            [c.U.IdCard]: i.PageView.ItemIdCardCreate,
            [c.U.Passport]: i.PageView.ItemPassportCreate,
            [c.U.SocialSecurityId]: i.PageView.ItemSocialSecurityStatementCreate
          };
          (0, u.Nc)(e[R]);
        }, [R]),
          r.useEffect(() => {
            I && w();
          }, [w, I]);
        const P = () => {
            (0, u.Nc)(i.PageView.ItemIdList), (0, o.uX)(a);
          },
          x = () => {
            B({ description: C(L.GENERIC_ERROR), mood: "danger", isManualDismiss: !0 });
          },
          M = r.useRef((e) => {
            if (null !== e) {
              const { dirty: t, isSubmitting: a, values: r } = e;
              A(t), N(a), S(r.country);
            }
          });
        return r.createElement(
          r.Fragment,
          null,
          y(U),
          r.createElement(
            E.P,
            {
              formId: h,
              formRef: M.current,
              handleSubmit: async (e, { setSubmitting: t, setFieldError: a }) => {
                if (!e[g]) return a(g, "");
                try {
                  const a = await v({ vaultItemType: R, content: e });
                  (0, d.d6)(a)
                    ? (B({ description: C(f(U).success) }), P())
                    : (t(!1), x(), p(new Error("[ids][add] Unable to add id"), a.error?.errorMessage));
                } catch (e) {
                  t(!1), x(), p(e, "[ids][add] Unexpected exception while add id");
                }
              },
              initialValues: t,
              variant: "add"
            },
            (t) => e({ values: t })
          ),
          r.createElement(b, {
            formId: h,
            handleCancel: () => {
              P();
            },
            hasDataBeenModified: T,
            isSubmitting: D
          })
        );
      }
    },
    656490: (e, t, a) => {
      a.r(t), a.d(t, { FiscalIdAddPanel: () => m });
      var r,
        i = a(696832),
        n = a(382706),
        l = a(488203),
        d = a(739649),
        s = a(188134),
        c = a(981506),
        o = a(566219),
        u = a(974910);
      const _ = () => ({
          title: "webapp_id_creation_fiscalid_title_default",
          success: "webapp_id_creation_fiscalid_alert_add_success_default"
        }),
        m = ({ lee: e, listRoute: t }) => {
          var a;
          const { translate: m } = (0, l.Z)(),
            E = {
              fiscalNumber: "",
              teledeclarantNumber: "",
              country: (0, o.lt)(e.carbon.currentLocation),
              spaceId: null != (a = (0, d.B)(e.globalState)) ? a : ""
            };
          return i.createElement(
            s.t,
            {
              initialValues: E,
              listRoute: t,
              reportError: e.reportError,
              countryToKeys: _,
              type: n.U.FiscalId,
              requiredProperty: "fiscalNumber",
              header: (e) => i.createElement(u.h, { title: m("webapp_id_creation_fiscalid_title_default"), country: e, type: n.U.FiscalId })
            },
            () => r || (r = i.createElement(c.U, { variant: "add" }))
          );
        };
    },
    981506: (e, t, a) => {
      a.d(t, { U: () => _ });
      var r,
        i = a(696832),
        n = a(488203),
        l = a(177650),
        d = a(321143),
        s = a(16792),
        c = a(865212),
        o = a(66485);
      const u = {
          ...s.k,
          TELEDECLARANT_NUMBER_LABEL: "webapp_id_form_field_label_teledeclarant_number",
          TELEDECLARANT_NUMBER_PLACEHOLDER: "webapp_id_form_field_placeholder_teledeclarant_number",
          TAX_NUMBER_LABEL_DEFAULT: "webapp_id_form_field_label_tax_number"
        },
        _ = i.memo(({ variant: e, handleCopy: t }) => {
          const { translate: a } = (0, n.Z)(),
            { shouldShowTrialDiscontinuedDialog: s } = (0, o.yp)(),
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
              i.createElement(c.G1, {
                name: "fiscalNumber",
                label: a(u.TAX_NUMBER_LABEL_DEFAULT),
                placeholder: a(u.ID_NUMBER_PLACEHOLDER),
                handleCopy: "edit" === e ? t : void 0,
                ref: _,
                disabled: !!s
              }),
              i.createElement(c.xu, {
                name: "teledeclarantNumber",
                label: a(u.TELEDECLARANT_NUMBER_LABEL),
                placeholder: a(u.TELEDECLARANT_NUMBER_PLACEHOLDER),
                handleCopy: "edit" === e ? t : void 0,
                disabled: !!s
              }),
              i.createElement(c.Dz, { name: "country", label: a(u.COUNTRY_LABEL), disabled: !!s }),
              r || (r = i.createElement(d.c, { height: 24 })),
              i.createElement(c.A0, { name: "spaceId", disabled: !!s })
            )
          );
        });
    }
  }
]);
