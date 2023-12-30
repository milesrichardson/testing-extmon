"use strict";
(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [8681, 3076],
  {
    188134: (e, t, a) => {
      a.d(t, { t: () => g });
      var r = a(696832),
        n = a(593039),
        i = a(876307),
        l = a(482598),
        s = a(287279),
        o = a(448430),
        c = a(382706),
        d = a(692077),
        u = a(45272),
        m = a(488203),
        E = a(66485),
        _ = a(386962),
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
        f = "id-add-form",
        L = { GENERIC_ERROR: "_common_generic_error" };
      function g({
        children: e,
        initialValues: t,
        listRoute: a,
        reportError: p,
        countryToKeys: b,
        header: g,
        type: y,
        requiredProperty: I = "idNumber"
      }) {
        const { translate: D } = (0, m.Z)(),
          { openDialog: w, shouldShowTrialDiscontinuedDialog: S } = (0, E.yp)(),
          [v, A] = r.useState(!1),
          [R, C] = r.useState(!1),
          [T, N] = r.useState(t.country),
          { createVaultItem: U } = (0, l.u)(o.L),
          { showToast: P } = (0, i.pm)();
        r.useEffect(() => {
          const e = {
            [c.U.DriversLicense]: n.PageView.ItemDriverLicenceCreate,
            [c.U.FiscalId]: n.PageView.ItemFiscalStatementCreate,
            [c.U.IdCard]: n.PageView.ItemIdCardCreate,
            [c.U.Passport]: n.PageView.ItemPassportCreate,
            [c.U.SocialSecurityId]: n.PageView.ItemSocialSecurityStatementCreate
          };
          (0, u.Nc)(e[y]);
        }, [y]),
          r.useEffect(() => {
            S && w();
          }, [w, S]);
        const B = () => {
            (0, u.Nc)(n.PageView.ItemIdList), (0, d.uX)(a);
          },
          x = () => {
            P({ description: D(L.GENERIC_ERROR), mood: "danger", isManualDismiss: !0 });
          },
          V = r.useRef((e) => {
            if (null !== e) {
              const { dirty: t, isSubmitting: a, values: r } = e;
              A(t), C(a), N(r.country);
            }
          });
        return r.createElement(
          r.Fragment,
          null,
          g(T),
          r.createElement(
            _.P,
            {
              formId: f,
              formRef: V.current,
              handleSubmit: async (e, { setSubmitting: t, setFieldError: a }) => {
                if (!e[I]) return a(I, "");
                try {
                  const a = await U({ vaultItemType: y, content: e });
                  (0, s.d6)(a)
                    ? (P({ description: D(b(T).success) }), B())
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
          r.createElement(h, {
            formId: f,
            handleCancel: () => {
              B();
            },
            hasDataBeenModified: v,
            isSubmitting: R
          })
        );
      }
    },
    154750: (e, t, a) => {
      a.r(t), a.d(t, { DriverLicenseAddPanel: () => m });
      var r = a(696832),
        n = a(382706),
        i = a(488203),
        l = a(739649),
        s = a(566219),
        o = a(974910),
        c = a(830611),
        d = a(188134);
      const u = () => ({
          title: "webapp_id_creation_driverlicense_title_default",
          success: "webapp_id_creation_driverlicense_alert_add_success_default"
        }),
        m = ({ lee: e, listRoute: t }) => {
          var a;
          const { translate: m } = (0, i.Z)(),
            E = (0, s.lt)(e.carbon.currentLocation),
            _ = null != (a = (0, l.B)(e.globalState)) ? a : "",
            p = (t) => {
              e.reportError(t);
            },
            b = { idName: "", idNumber: "", expirationDate: "", issueDate: "", country: E, spaceId: _, state: "" };
          return r.createElement(
            d.t,
            {
              initialValues: b,
              listRoute: t,
              reportError: e.reportError,
              countryToKeys: u,
              type: n.U.DriversLicense,
              header: (e) =>
                r.createElement(o.h, {
                  title: (0, s.Il)(m("webapp_id_creation_driverlicense_title_default"), m.getLocale(), e),
                  country: e,
                  type: n.U.DriversLicense
                })
            },
            ({ values: e }) => r.createElement(c.g, { variant: "add", handleError: p, country: e.country })
          );
        };
    },
    872055: (e, t, a) => {
      a.d(t, { a: () => n });
      var r = a(914662);
      const n = new Set([r.cH.AU, r.cH.GB, r.cH.IE, r.cH.NZ]);
    },
    830611: (e, t, a) => {
      a.d(t, { g: () => E });
      var r,
        n = a(696832),
        i = a(488203),
        l = a(177650),
        s = a(321143),
        o = a(66485),
        c = a(872055),
        d = a(16792),
        u = a(865212);
      const m = { ...d.k, STATE_LABEL: "webapp_id_form_field_label_state" },
        E = n.memo(({ variant: e, handleCopy: t, handleError: a, country: d }) => {
          const { translate: E } = (0, i.Z)(),
            _ = n.useRef(null),
            { shouldShowTrialDiscontinuedDialog: p } = (0, o.yp)();
          return (
            n.useEffect(
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
            n.createElement(
              n.Fragment,
              null,
              n.createElement(u.YI, { name: "idName", label: E(m.NAME_LABEL), placeholder: E(m.NAME_PLACEHOLDER), ref: _, disabled: !!p }),
              n.createElement(u.G1, {
                name: "idNumber",
                label: E(m.ID_NUMBER_LABEL),
                placeholder: E(m.ID_NUMBER_PLACEHOLDER),
                handleCopy: "edit" === e ? t : void 0,
                disabled: !!p
              }),
              n.createElement(u.Nn, { name: "issueDate", label: E(m.ISSUE_DATE_LABEL), disabled: !!p }),
              n.createElement(u.Nn, {
                name: "expirationDate",
                label: E(c.a.has(d) ? m.EXPIRATION_DATE_LABEL_UK : m.EXPIRATION_DATE_LABEL_US),
                disabled: !!p
              }),
              n.createElement(u.ju, {
                countryFieldLabel: E(m.COUNTRY_LABEL),
                stateFieldLabel: E(m.STATE_LABEL),
                handleError: a,
                disabled: !!p
              }),
              r || (r = n.createElement(s.c, { height: 24 })),
              n.createElement(u.A0, { name: "spaceId", disabled: !!p })
            )
          );
        });
    }
  }
]);
