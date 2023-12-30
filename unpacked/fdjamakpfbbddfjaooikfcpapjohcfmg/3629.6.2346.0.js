"use strict";
(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [3629, 917],
  {
    426854: (e, t, a) => {
      a.d(t, { t: () => y });
      var i = a(696832),
        c = a(660765),
        s = a(453576),
        r = a(142897),
        _ = a(635164),
        l = a(62429),
        n = a(201389),
        o = a(276846),
        d = a(695495),
        u = a(441217);
      const p = ({ formId: e, handleCancel: t, hasDataBeenModified: a, isSubmitting: i }) => {
          const { translate: c } = (0, n.Z)();
          return (0, d.tZ)(
            u.Ejs,
            { sx: { padding: "24px" }, as: "footer", justifyContent: "flex-end", flexDirection: "row", flexWrap: "nowrap" },
            a ? (0, d.tZ)(u.zxk, { type: "submit", form: e, disabled: i }, c("webapp_panel_edition_generic_save_changes")) : null,
            (0, d.tZ)(
              u.zxk,
              { sx: { marginLeft: "16px" }, nature: "secondary", onClick: t, type: "button" },
              c("webapp_panel_edition_generic_cancel_changes")
            )
          );
        },
        m = "id-add-form",
        b = { GENERIC_ERROR: "_common_generic_error" };
      function y({ addItem: e, children: t, initialValues: a, listRoute: d, reportError: u, countryToKeys: y, header: E, type: w }) {
        const { translate: I } = (0, n.Z)(),
          [g, f] = i.useState(!1),
          [h, R] = i.useState(!1),
          [C, S] = i.useState(a.country),
          { showToast: N } = (0, r.pm)();
        i.useEffect(() => {
          const e = {
            driverLicenses: c.PageView.ItemDriverLicenceCreate,
            fiscalIds: c.PageView.ItemFiscalStatementCreate,
            idCards: c.PageView.ItemIdCardCreate,
            passports: c.PageView.ItemPassportCreate,
            socialSecurityIds: c.PageView.ItemSocialSecurityStatementCreate
          };
          (0, l.Nc)(e[w]);
        }, [w]);
        const v = () => {
            (0, l.Nc)(c.PageView.ItemIdList), (0, _.uX)(d);
          },
          L = i.useRef((e) => {
            if (null !== e) {
              const { dirty: t, isSubmitting: a, values: i } = e;
              f(t), R(a), S(i.country);
            }
          });
        return i.createElement(
          i.Fragment,
          null,
          E(C),
          i.createElement(
            o.P,
            {
              formId: m,
              formRef: L.current,
              handleSubmit: async (t, { setSubmitting: a, setFieldError: i }) => {
                try {
                  const c = await e(t);
                  !0 === c.success
                    ? (N({ description: I(y(C).success) }), v())
                    : (a(!1),
                      c.error?.code === s.AddIdResultErrorCode.MISSING_ID_NUMBER
                        ? i("idNumber", "")
                        : (N({ description: I(b.GENERIC_ERROR), mood: "danger", isManualDismiss: !0 }),
                          u(new Error("[ids][add] Unable to add id"), c.error?.code)));
                } catch (e) {
                  a(!1),
                    N({ description: I(b.GENERIC_ERROR), mood: "danger", isManualDismiss: !0 }),
                    u(e, "[ids][add] Unexpected exception while add id");
                }
              },
              initialValues: a,
              variant: "add"
            },
            (e) => t({ values: e })
          ),
          i.createElement(p, {
            formId: m,
            handleCancel: () => {
              v();
            },
            hasDataBeenModified: g,
            isSubmitting: h
          })
        );
      }
    },
    201666: (e, t, a) => {
      a.r(t), a.d(t, { SocialSecurityIdAddPanel: () => E });
      var i,
        c = a(696832),
        s = a(575257),
        r = a(382706),
        _ = a(66941),
        l = a(201389),
        n = a(537026),
        o = a(426854),
        d = a(723815),
        u = a(900125),
        p = a(23583);
      const m = {
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
        b = (e) => {
          var t;
          return null != (t = m[e])
            ? t
            : {
                title: "webapp_id_creation_socialsecurity_title_default",
                success: "webapp_id_creation_socialsecurity_alert_add_success_default"
              };
        },
        y = (e) => _.C.addSocialSecurityId({ ...e, name: e.idName }),
        E = ({ lee: e, listRoute: t, setDialogActive: a }) => {
          var s;
          const { translate: _ } = (0, l.Z)(),
            m = {
              idName: "",
              idNumber: "",
              country: (0, d.lt)(e.carbon.currentLocation),
              spaceId: null != (s = (0, n.B)(e.globalState)) ? s : ""
            };
          return c.createElement(
            o.t,
            {
              addItem: y,
              initialValues: m,
              listRoute: t,
              reportError: e.reportError,
              setDialogActive: a,
              countryToKeys: b,
              header: (e) => c.createElement(u.h, { title: _(b(e).title), country: e, type: r.U.SocialSecurityId }),
              type: "socialSecurityIds"
            },
            () => i || (i = c.createElement(p.x, { variant: "add" }))
          );
        };
    },
    23583: (e, t, a) => {
      a.d(t, { x: () => u });
      var i,
        c,
        s = a(696832),
        r = a(201389),
        _ = a(778089),
        l = a(803057),
        n = a(754171),
        o = a(670570);
      const d = { ...n.k },
        u = s.memo(({ variant: e, handleCopy: t }) => {
          const { translate: a } = (0, r.Z)(),
            n = s.useRef(null);
          return (
            s.useEffect(
              "add" === e
                ? () => {
                    const e = setTimeout(() => {
                      n.current?.focus();
                    }, _.sc);
                    return () => clearTimeout(e);
                  }
                : () => {},
              []
            ),
            s.createElement(
              s.Fragment,
              null,
              s.createElement(o.YI, { name: "idName", label: a(d.NAME_LABEL), placeholder: a(d.NAME_PLACEHOLDER), ref: n }),
              s.createElement(o.G1, {
                name: "idNumber",
                label: a(d.ID_NUMBER_LABEL),
                placeholder: a(d.ID_NUMBER_PLACEHOLDER),
                handleCopy: "edit" === e ? t : void 0
              }),
              s.createElement(o.Dz, { name: "country", label: a(d.COUNTRY_LABEL) }),
              i || (i = s.createElement(l.c, { height: 24 })),
              c || (c = s.createElement(o.A0, { name: "spaceId" }))
            )
          );
        });
    }
  }
]);
