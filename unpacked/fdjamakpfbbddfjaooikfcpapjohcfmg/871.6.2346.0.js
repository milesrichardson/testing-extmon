"use strict";
(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [871, 917],
  {
    542169: (e, a, t) => {
      t.r(a), t.d(a, { DriverLicenseEditPanel: () => c });
      var r = t(696832),
        i = t(382706),
        l = t(66941),
        n = t(343966),
        _ = t(633075),
        d = t(157631),
        s = t(126750);
      const E = {
          HEADER_DESCRIPTION: "webapp_id_edition_driverlicense_header_description",
          ALERT_DELETE: "webapp_id_edition_driverlicense_alert_delete",
          ALERT_EDIT: "webapp_id_edition_driverlicense_alert_edit",
          DIALOG_DELETE_TITLE: "webapp_id_edition_driverlicense_dialog_delete_title",
          COPY_SUCCESS: "webapp_id_copy_success_driverlicence_number"
        },
        o = (e, a) => (t) => {
          const r = (0, d.h)(a, t, n.j6),
            { expirationDate: i, issueDate: _ } = r;
          return l.C.editDriverLicense({
            ...r,
            expirationDate: i ? Date.parse(i) / 1e3 : void 0,
            issueDate: _ ? Date.parse(_) / 1e3 : void 0,
            name: r.idName,
            id: e
          });
        },
        c = ({ listRoute: e, id: a, setDialogActive: t, lee: l, hasUnsavedData: n, setHasUnsavedData: d }) =>
          a
            ? r.createElement(
                s.y,
                {
                  listRoute: e,
                  id: `{${a}}`,
                  setDialogActive: t,
                  lee: l,
                  hasUnsavedData: n,
                  setHasUnsavedData: d,
                  ID_TYPE: i.U.DriversLicense,
                  I18N_KEYS: E,
                  editItem: o
                },
                ({ handleCopy: e, values: a }) =>
                  r.createElement(_.g, { variant: "edit", handleCopy: e, handleError: l.reportError, country: a.country })
              )
            : null;
    },
    633075: (e, a, t) => {
      t.d(a, { g: () => D });
      var r,
        i,
        l = t(696832),
        n = t(201389),
        _ = t(778089),
        d = t(803057),
        s = t(479055),
        E = t(754171),
        o = t(670570);
      const c = { ...E.k, STATE_LABEL: "webapp_id_form_field_label_state" },
        D = l.memo(({ variant: e, handleCopy: a, handleError: t, country: E }) => {
          const { translate: D } = (0, n.Z)(),
            L = l.useRef(null);
          return (
            l.useEffect(
              "add" === e
                ? () => {
                    const e = setTimeout(() => {
                      L.current?.focus();
                    }, _.sc);
                    return () => clearTimeout(e);
                  }
                : () => {},
              []
            ),
            l.createElement(
              l.Fragment,
              null,
              l.createElement(o.YI, { name: "idName", label: D(c.NAME_LABEL), placeholder: D(c.NAME_PLACEHOLDER), ref: L }),
              l.createElement(o.G1, {
                name: "idNumber",
                label: D(c.ID_NUMBER_LABEL),
                placeholder: D(c.ID_NUMBER_PLACEHOLDER),
                handleCopy: "edit" === e ? a : void 0
              }),
              l.createElement(o.Nn, { name: "issueDate", label: D(c.ISSUE_DATE_LABEL) }),
              l.createElement(o.Nn, {
                name: "expirationDate",
                label: D(s.a.has(E) ? c.EXPIRATION_DATE_LABEL_UK : c.EXPIRATION_DATE_LABEL_US)
              }),
              l.createElement(o.ju, { countryFieldLabel: D(c.COUNTRY_LABEL), stateFieldLabel: D(c.STATE_LABEL), handleError: t }),
              r || (r = l.createElement(d.c, { height: 24 })),
              i || (i = l.createElement(o.A0, { name: "spaceId" }))
            )
          );
        });
    }
  }
]);
