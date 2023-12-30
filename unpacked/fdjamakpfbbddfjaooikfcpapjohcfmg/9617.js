"use strict";
(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [9617, 3076],
  {
    188134: (e, t, a) => {
      a.d(t, { t: () => f });
      var i = a(696832),
        c = a(593039),
        s = a(876307),
        r = a(482598),
        l = a(287279),
        _ = a(448430),
        n = a(382706),
        o = a(692077),
        d = a(45272),
        u = a(488203),
        p = a(66485),
        m = a(386962),
        b = a(773817),
        y = a(962899);
      const w = ({ formId: e, handleCancel: t, hasDataBeenModified: a, isSubmitting: i }) => {
          const { translate: c } = (0, u.Z)();
          return (0, b.tZ)(
            y.Ejs,
            { sx: { padding: "24px" }, as: "footer", justifyContent: "flex-end", flexDirection: "row", flexWrap: "nowrap" },
            a ? (0, b.tZ)(y.zxk, { type: "submit", form: e, disabled: i }, c("webapp_panel_edition_generic_save_changes")) : null,
            (0, b.tZ)(
              y.zxk,
              { sx: { marginLeft: "16px" }, nature: "secondary", onClick: t, type: "button" },
              c("webapp_panel_edition_generic_cancel_changes")
            )
          );
        },
        E = "id-add-form",
        h = { GENERIC_ERROR: "_common_generic_error" };
      function f({
        children: e,
        initialValues: t,
        listRoute: a,
        reportError: b,
        countryToKeys: y,
        header: f,
        type: g,
        requiredProperty: I = "idNumber"
      }) {
        const { translate: S } = (0, u.Z)(),
          { openDialog: C, shouldShowTrialDiscontinuedDialog: R } = (0, p.yp)(),
          [L, D] = i.useState(!1),
          [N, v] = i.useState(!1),
          [P, x] = i.useState(t.country),
          { createVaultItem: T } = (0, r.u)(_.L),
          { showToast: U } = (0, s.pm)();
        i.useEffect(() => {
          const e = {
            [n.U.DriversLicense]: c.PageView.ItemDriverLicenceCreate,
            [n.U.FiscalId]: c.PageView.ItemFiscalStatementCreate,
            [n.U.IdCard]: c.PageView.ItemIdCardCreate,
            [n.U.Passport]: c.PageView.ItemPassportCreate,
            [n.U.SocialSecurityId]: c.PageView.ItemSocialSecurityStatementCreate
          };
          (0, d.Nc)(e[g]);
        }, [g]),
          i.useEffect(() => {
            R && C();
          }, [C, R]);
        const A = () => {
            (0, d.Nc)(c.PageView.ItemIdList), (0, o.uX)(a);
          },
          B = () => {
            U({ description: S(h.GENERIC_ERROR), mood: "danger", isManualDismiss: !0 });
          },
          V = i.useRef((e) => {
            if (null !== e) {
              const { dirty: t, isSubmitting: a, values: i } = e;
              D(t), v(a), x(i.country);
            }
          });
        return i.createElement(
          i.Fragment,
          null,
          f(P),
          i.createElement(
            m.P,
            {
              formId: E,
              formRef: V.current,
              handleSubmit: async (e, { setSubmitting: t, setFieldError: a }) => {
                if (!e[I]) return a(I, "");
                try {
                  const a = await T({ vaultItemType: g, content: e });
                  (0, l.d6)(a)
                    ? (U({ description: S(y(P).success) }), A())
                    : (t(!1), B(), b(new Error("[ids][add] Unable to add id"), a.error?.errorMessage));
                } catch (e) {
                  t(!1), B(), b(e, "[ids][add] Unexpected exception while add id");
                }
              },
              initialValues: t,
              variant: "add"
            },
            (t) => e({ values: t })
          ),
          i.createElement(w, {
            formId: E,
            handleCancel: () => {
              A();
            },
            hasDataBeenModified: L,
            isSubmitting: N
          })
        );
      }
    },
    634355: (e, t, a) => {
      a.r(t), a.d(t, { SocialSecurityIdAddPanel: () => b });
      var i,
        c = a(696832),
        s = a(575257),
        r = a(382706),
        l = a(488203),
        _ = a(739649),
        n = a(188134),
        o = a(566219),
        d = a(974910),
        u = a(647121);
      const p = {
          [s.c.BR]: {
            title: "webapp_id_creation_socialsecurity_title_br",
            success: "webapp_id_creation_socialsecurity_alert_add_success_br"
          },
          [s.c.CA]: {
            title: "webapp_id_creation_socialsecurity_title_ca",
            success: "webapp_id_creation_socialsecurity_alert_add_success_ca"
          },
          [s.c.GB]: {
            title: "webapp_id_creation_socialsecurity_title_gb",
            success: "webapp_id_creation_socialsecurity_alert_add_success_gb"
          },
          [s.c.IE]: {
            title: "webapp_id_creation_socialsecurity_title_ie",
            success: "webapp_id_creation_socialsecurity_alert_add_success_ie"
          },
          [s.c.IT]: {
            title: "webapp_id_creation_socialsecurity_title_it",
            success: "webapp_id_creation_socialsecurity_alert_add_success_it"
          },
          [s.c.JP]: {
            title: "webapp_id_creation_socialsecurity_title_jp",
            success: "webapp_id_creation_socialsecurity_alert_add_success_jp"
          },
          [s.c.NL]: {
            title: "webapp_id_creation_socialsecurity_title_nl",
            success: "webapp_id_creation_socialsecurity_alert_add_success_nl"
          },
          [s.c.NO]: {
            title: "webapp_id_creation_socialsecurity_title_no",
            success: "webapp_id_creation_socialsecurity_alert_add_success_no"
          },
          [s.c.PT]: {
            title: "webapp_id_creation_socialsecurity_title_pt",
            success: "webapp_id_creation_socialsecurity_alert_add_success_pt"
          },
          [s.c.SE]: {
            title: "webapp_id_creation_socialsecurity_title_se",
            success: "webapp_id_creation_socialsecurity_alert_add_success_se"
          }
        },
        m = (e) => {
          var t;
          return null != (t = p[e])
            ? t
            : {
                title: "webapp_id_creation_socialsecurity_title_default",
                success: "webapp_id_creation_socialsecurity_alert_add_success_default"
              };
        },
        b = ({ lee: e, listRoute: t }) => {
          var a;
          const { translate: s } = (0, l.Z)(),
            p = {
              idName: "",
              idNumber: "",
              country: (0, o.lt)(e.carbon.currentLocation),
              spaceId: null != (a = (0, _.B)(e.globalState)) ? a : ""
            };
          return c.createElement(
            n.t,
            {
              initialValues: p,
              listRoute: t,
              reportError: e.reportError,
              countryToKeys: m,
              header: (e) => c.createElement(d.h, { title: s(m(e).title), country: e, type: r.U.SocialSecurityId }),
              type: r.U.SocialSecurityId
            },
            () => i || (i = c.createElement(u.x, { variant: "add" }))
          );
        };
    },
    647121: (e, t, a) => {
      a.d(t, { x: () => u });
      var i,
        c = a(696832),
        s = a(488203),
        r = a(177650),
        l = a(321143),
        _ = a(66485),
        n = a(16792),
        o = a(865212);
      const d = { ...n.k },
        u = c.memo(({ variant: e, handleCopy: t }) => {
          const { translate: a } = (0, s.Z)(),
            { shouldShowTrialDiscontinuedDialog: n } = (0, _.yp)(),
            u = c.useRef(null);
          return (
            c.useEffect(
              "add" === e
                ? () => {
                    const e = setTimeout(() => {
                      u.current?.focus();
                    }, r.sc);
                    return () => clearTimeout(e);
                  }
                : () => {},
              []
            ),
            c.createElement(
              c.Fragment,
              null,
              c.createElement(o.YI, { name: "idName", label: a(d.NAME_LABEL), placeholder: a(d.NAME_PLACEHOLDER), ref: u, disabled: !!n }),
              c.createElement(o.G1, {
                name: "idNumber",
                label: a(d.ID_NUMBER_LABEL),
                placeholder: a(d.ID_NUMBER_PLACEHOLDER),
                handleCopy: "edit" === e ? t : void 0,
                disabled: !!n
              }),
              c.createElement(o.Dz, { name: "country", label: a(d.COUNTRY_LABEL), disabled: !!n }),
              i || (i = c.createElement(l.c, { height: 24 })),
              c.createElement(o.A0, { name: "spaceId", disabled: !!n })
            )
          );
        });
    }
  }
]);
