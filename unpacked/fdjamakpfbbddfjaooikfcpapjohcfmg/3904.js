"use strict";
(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [3904, 3076],
  {
    188134: (e, t, a) => {
      a.d(t, { t: () => L });
      var r = a(696832),
        n = a(593039),
        i = a(876307),
        l = a(482598),
        s = a(287279),
        o = a(448430),
        c = a(382706),
        d = a(692077),
        u = a(45272),
        _ = a(488203),
        p = a(66485),
        E = a(386962),
        m = a(773817),
        b = a(962899);
      const f = ({ formId: e, handleCancel: t, hasDataBeenModified: a, isSubmitting: r }) => {
          const { translate: n } = (0, _.Z)();
          return (0, m.tZ)(
            b.Ejs,
            { sx: { padding: "24px" }, as: "footer", justifyContent: "flex-end", flexDirection: "row", flexWrap: "nowrap" },
            a ? (0, m.tZ)(b.zxk, { type: "submit", form: e, disabled: r }, n("webapp_panel_edition_generic_save_changes")) : null,
            (0, m.tZ)(
              b.zxk,
              { sx: { marginLeft: "16px" }, nature: "secondary", onClick: t, type: "button" },
              n("webapp_panel_edition_generic_cancel_changes")
            )
          );
        },
        h = "id-add-form",
        I = { GENERIC_ERROR: "_common_generic_error" };
      function L({
        children: e,
        initialValues: t,
        listRoute: a,
        reportError: m,
        countryToKeys: b,
        header: L,
        type: g,
        requiredProperty: y = "idNumber"
      }) {
        const { translate: S } = (0, _.Z)(),
          { openDialog: A, shouldShowTrialDiscontinuedDialog: C } = (0, p.yp)(),
          [P, D] = r.useState(!1),
          [w, R] = r.useState(!1),
          [U, N] = r.useState(t.country),
          { createVaultItem: v } = (0, l.u)(o.L),
          { showToast: T } = (0, i.pm)();
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
            C && A();
          }, [A, C]);
        const B = () => {
            (0, u.Nc)(n.PageView.ItemIdList), (0, d.uX)(a);
          },
          x = () => {
            T({ description: S(I.GENERIC_ERROR), mood: "danger", isManualDismiss: !0 });
          },
          O = r.useRef((e) => {
            if (null !== e) {
              const { dirty: t, isSubmitting: a, values: r } = e;
              D(t), R(a), N(r.country);
            }
          });
        return r.createElement(
          r.Fragment,
          null,
          L(U),
          r.createElement(
            E.P,
            {
              formId: h,
              formRef: O.current,
              handleSubmit: async (e, { setSubmitting: t, setFieldError: a }) => {
                if (!e[y]) return a(y, "");
                try {
                  const a = await v({ vaultItemType: g, content: e });
                  (0, s.d6)(a)
                    ? (T({ description: S(b(U).success) }), B())
                    : (t(!1), x(), m(new Error("[ids][add] Unable to add id"), a.error?.errorMessage));
                } catch (e) {
                  t(!1), x(), m(e, "[ids][add] Unexpected exception while add id");
                }
              },
              initialValues: t,
              variant: "add"
            },
            (t) => e({ values: t })
          ),
          r.createElement(f, {
            formId: h,
            handleCancel: () => {
              B();
            },
            hasDataBeenModified: P,
            isSubmitting: w
          })
        );
      }
    },
    308933: (e, t, a) => {
      a.r(t), a.d(t, { PassportAddPanel: () => _ });
      var r = a(696832),
        n = a(382706),
        i = a(488203),
        l = a(739649),
        s = a(188134),
        o = a(566219),
        c = a(974910),
        d = a(845417);
      const u = () => ({
          title: "webapp_id_creation_passport_title_default",
          success: "webapp_id_creation_passport_alert_add_success_default"
        }),
        _ = ({ lee: e, listRoute: t }) => {
          var a;
          const { translate: _ } = (0, i.Z)(),
            p = {
              idName: "",
              idNumber: "",
              expirationDate: "",
              issueDate: "",
              country: (0, o.lt)(e.carbon.currentLocation),
              spaceId: null != (a = (0, l.B)(e.globalState)) ? a : "",
              issuePlace: ""
            };
          return r.createElement(
            s.t,
            {
              initialValues: p,
              listRoute: t,
              reportError: e.reportError,
              countryToKeys: u,
              type: n.U.Passport,
              header: (e) => r.createElement(c.h, { title: _("webapp_id_creation_passport_title_default"), country: e, type: n.U.Passport })
            },
            ({ values: e }) => r.createElement(d.g, { variant: "add", country: e.country })
          );
        };
    },
    872055: (e, t, a) => {
      a.d(t, { a: () => n });
      var r = a(914662);
      const n = new Set([r.cH.AU, r.cH.GB, r.cH.IE, r.cH.NZ]);
    },
    845417: (e, t, a) => {
      a.d(t, { g: () => p });
      var r,
        n = a(696832),
        i = a(488203),
        l = a(177650),
        s = a(321143),
        o = a(66485),
        c = a(872055),
        d = a(16792),
        u = a(865212);
      const _ = {
          ...d.k,
          PLACE_OF_ISSUE_LABEL: "webapp_id_form_field_label_place_of_issue",
          PLACE_OF_ISSUE_PLACEHOLDER: "webapp_id_form_field_placeholder_place_of_issue"
        },
        p = n.memo(({ variant: e, handleCopy: t, country: a }) => {
          const { translate: d } = (0, i.Z)(),
            { shouldShowTrialDiscontinuedDialog: p } = (0, o.yp)(),
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
              n.createElement(u.YI, { name: "idName", label: d(_.NAME_LABEL), placeholder: d(_.NAME_PLACEHOLDER), ref: E, disabled: !!p }),
              n.createElement(u.G1, {
                name: "idNumber",
                label: d(_.ID_NUMBER_LABEL),
                placeholder: d(_.ID_NUMBER_PLACEHOLDER),
                handleCopy: "edit" === e ? t : void 0,
                disabled: !!p
              }),
              n.createElement(u.Nn, { name: "issueDate", label: d(_.ISSUE_DATE_LABEL), disabled: !!p }),
              n.createElement(u.Nn, {
                name: "expirationDate",
                label: d(c.a.has(a) ? _.EXPIRATION_DATE_LABEL_UK : _.EXPIRATION_DATE_LABEL_US),
                disabled: !!p
              }),
              n.createElement(u.Dz, { name: "country", label: d(_.COUNTRY_LABEL), disabled: !!p }),
              n.createElement(u.YI, {
                name: "issuePlace",
                label: d(_.PLACE_OF_ISSUE_LABEL),
                placeholder: d(_.PLACE_OF_ISSUE_PLACEHOLDER),
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
