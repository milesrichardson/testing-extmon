"use strict";
(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [88, 3076],
  {
    645102: (e, a, l) => {
      l.r(a), l.d(a, { DriverLicenseEditPanel: () => _ });
      var t = l(696832),
        i = l(382706),
        r = l(830611),
        n = l(697764);
      const d = {
          HEADER_DESCRIPTION: "webapp_id_edition_driverlicense_header_description",
          ALERT_DELETE: "webapp_id_edition_driverlicense_alert_delete",
          ALERT_EDIT: "webapp_id_edition_driverlicense_alert_edit",
          DIALOG_DELETE_TITLE: "webapp_id_edition_driverlicense_dialog_delete_title",
          COPY_SUCCESS: "webapp_id_copy_success_driverlicence_number"
        },
        _ = ({ listRoute: e, id: a, setDialogActive: l, lee: _, hasUnsavedData: s, setHasUnsavedData: E }) =>
          a
            ? t.createElement(
                n.y,
                {
                  listRoute: e,
                  id: `{${a}}`,
                  setDialogActive: l,
                  lee: _,
                  hasUnsavedData: s,
                  setHasUnsavedData: E,
                  ID_TYPE: i.U.DriversLicense,
                  I18N_KEYS: d
                },
                ({ handleCopy: e, values: a }) =>
                  t.createElement(r.g, { variant: "edit", handleCopy: e, handleError: _.reportError, country: a.country })
              )
            : null;
    },
    830611: (e, a, l) => {
      l.d(a, { g: () => L });
      var t,
        i = l(696832),
        r = l(488203),
        n = l(177650),
        d = l(321143),
        _ = l(66485),
        s = l(872055),
        E = l(16792),
        o = l(865212);
      const c = { ...E.k, STATE_LABEL: "webapp_id_form_field_label_state" },
        L = i.memo(({ variant: e, handleCopy: a, handleError: l, country: E }) => {
          const { translate: L } = (0, r.Z)(),
            u = i.useRef(null),
            { shouldShowTrialDiscontinuedDialog: p } = (0, _.yp)();
          return (
            i.useEffect(
              "add" === e
                ? () => {
                    const e = setTimeout(() => {
                      u.current?.focus();
                    }, n.sc);
                    return () => clearTimeout(e);
                  }
                : () => {},
              []
            ),
            i.createElement(
              i.Fragment,
              null,
              i.createElement(o.YI, { name: "idName", label: L(c.NAME_LABEL), placeholder: L(c.NAME_PLACEHOLDER), ref: u, disabled: !!p }),
              i.createElement(o.G1, {
                name: "idNumber",
                label: L(c.ID_NUMBER_LABEL),
                placeholder: L(c.ID_NUMBER_PLACEHOLDER),
                handleCopy: "edit" === e ? a : void 0,
                disabled: !!p
              }),
              i.createElement(o.Nn, { name: "issueDate", label: L(c.ISSUE_DATE_LABEL), disabled: !!p }),
              i.createElement(o.Nn, {
                name: "expirationDate",
                label: L(s.a.has(E) ? c.EXPIRATION_DATE_LABEL_UK : c.EXPIRATION_DATE_LABEL_US),
                disabled: !!p
              }),
              i.createElement(o.ju, {
                countryFieldLabel: L(c.COUNTRY_LABEL),
                stateFieldLabel: L(c.STATE_LABEL),
                handleError: l,
                disabled: !!p
              }),
              t || (t = i.createElement(d.c, { height: 24 })),
              i.createElement(o.A0, { name: "spaceId", disabled: !!p })
            )
          );
        });
    }
  }
]);
