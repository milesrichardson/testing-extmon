"use strict";
(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [8790, 917],
  {
    97003: (e, a, t) => {
      t.r(a), t.d(a, { PassportEditPanel: () => p });
      var _ = t(696832),
        l = t(382706),
        s = t(66941),
        i = t(157631),
        n = t(343966),
        E = t(75448),
        r = t(126750);
      const o = {
          HEADER_DESCRIPTION: "webapp_id_edition_passport_header_description",
          ALERT_DELETE: "webapp_id_edition_passport_alert_delete",
          ALERT_EDIT: "webapp_id_edition_passport_alert_edit",
          DIALOG_DELETE_TITLE: "webapp_id_edition_passport_dialog_delete_title",
          COPY_SUCCESS: "webapp_id_copy_success_passport_number"
        },
        d = (e, a) => (t) => {
          const _ = (0, i.h)(a, t, n.oF),
            { expirationDate: l, issueDate: E } = _;
          return s.C.editPassport({
            ..._,
            expirationDate: l ? Date.parse(l) / 1e3 : void 0,
            issueDate: E ? Date.parse(E) / 1e3 : void 0,
            deliveryPlace: _.issuePlace,
            name: _.idName,
            id: e
          });
        },
        p = ({ listRoute: e, id: a, setDialogActive: t, lee: s, hasUnsavedData: i, setHasUnsavedData: n }) =>
          a
            ? _.createElement(
                r.y,
                {
                  listRoute: e,
                  id: `{${a}}`,
                  setDialogActive: t,
                  lee: s,
                  hasUnsavedData: i,
                  setHasUnsavedData: n,
                  ID_TYPE: l.U.Passport,
                  I18N_KEYS: o,
                  editItem: d
                },
                ({ handleCopy: e, values: a }) => _.createElement(E.g, { variant: "edit", handleCopy: e, country: a.country })
              )
            : null;
    },
    75448: (e, a, t) => {
      t.d(a, { g: () => c });
      var _,
        l,
        s = t(696832),
        i = t(201389),
        n = t(778089),
        E = t(803057),
        r = t(479055),
        o = t(754171),
        d = t(670570);
      const p = {
          ...o.k,
          PLACE_OF_ISSUE_LABEL: "webapp_id_form_field_label_place_of_issue",
          PLACE_OF_ISSUE_PLACEHOLDER: "webapp_id_form_field_placeholder_place_of_issue"
        },
        c = s.memo(({ variant: e, handleCopy: a, country: t }) => {
          const { translate: o } = (0, i.Z)(),
            c = s.useRef(null);
          return (
            s.useEffect(
              "add" === e
                ? () => {
                    const e = setTimeout(() => {
                      c.current?.focus();
                    }, n.sc);
                    return () => clearTimeout(e);
                  }
                : () => {},
              []
            ),
            s.createElement(
              s.Fragment,
              null,
              s.createElement(d.YI, { name: "idName", label: o(p.NAME_LABEL), placeholder: o(p.NAME_PLACEHOLDER), ref: c }),
              s.createElement(d.G1, {
                name: "idNumber",
                label: o(p.ID_NUMBER_LABEL),
                placeholder: o(p.ID_NUMBER_PLACEHOLDER),
                handleCopy: "edit" === e ? a : void 0
              }),
              s.createElement(d.Nn, { name: "issueDate", label: o(p.ISSUE_DATE_LABEL) }),
              s.createElement(d.Nn, {
                name: "expirationDate",
                label: o(r.a.has(t) ? p.EXPIRATION_DATE_LABEL_UK : p.EXPIRATION_DATE_LABEL_US)
              }),
              s.createElement(d.Dz, { name: "country", label: o(p.COUNTRY_LABEL) }),
              s.createElement(d.YI, { name: "issuePlace", label: o(p.PLACE_OF_ISSUE_LABEL), placeholder: o(p.PLACE_OF_ISSUE_PLACEHOLDER) }),
              _ || (_ = s.createElement(E.c, { height: 24 })),
              l || (l = s.createElement(d.A0, { name: "spaceId" }))
            )
          );
        });
    }
  }
]);
