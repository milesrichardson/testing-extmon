"use strict";
(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [797, 3076],
  {
    90483: (e, a, t) => {
      t.r(a), t.d(a, { PassportEditPanel: () => i });
      var l = t(696832),
        _ = t(382706),
        s = t(845417),
        E = t(697764);
      const d = {
          HEADER_DESCRIPTION: "webapp_id_edition_passport_header_description",
          ALERT_DELETE: "webapp_id_edition_passport_alert_delete",
          ALERT_EDIT: "webapp_id_edition_passport_alert_edit",
          DIALOG_DELETE_TITLE: "webapp_id_edition_passport_dialog_delete_title",
          COPY_SUCCESS: "webapp_id_copy_success_passport_number"
        },
        i = ({ listRoute: e, id: a, setDialogActive: t, lee: i, hasUnsavedData: n, setHasUnsavedData: o }) =>
          a
            ? l.createElement(
                E.y,
                {
                  listRoute: e,
                  id: `{${a}}`,
                  setDialogActive: t,
                  lee: i,
                  hasUnsavedData: n,
                  setHasUnsavedData: o,
                  ID_TYPE: _.U.Passport,
                  I18N_KEYS: d
                },
                ({ handleCopy: e, values: a }) => l.createElement(s.g, { variant: "edit", handleCopy: e, country: a.country })
              )
            : null;
    },
    845417: (e, a, t) => {
      t.d(a, { g: () => c });
      var l,
        _ = t(696832),
        s = t(488203),
        E = t(177650),
        d = t(321143),
        i = t(66485),
        n = t(872055),
        o = t(16792),
        r = t(865212);
      const p = {
          ...o.k,
          PLACE_OF_ISSUE_LABEL: "webapp_id_form_field_label_place_of_issue",
          PLACE_OF_ISSUE_PLACEHOLDER: "webapp_id_form_field_placeholder_place_of_issue"
        },
        c = _.memo(({ variant: e, handleCopy: a, country: t }) => {
          const { translate: o } = (0, s.Z)(),
            { shouldShowTrialDiscontinuedDialog: c } = (0, i.yp)(),
            L = _.useRef(null);
          return (
            _.useEffect(
              "add" === e
                ? () => {
                    const e = setTimeout(() => {
                      L.current?.focus();
                    }, E.sc);
                    return () => clearTimeout(e);
                  }
                : () => {},
              []
            ),
            _.createElement(
              _.Fragment,
              null,
              _.createElement(r.YI, { name: "idName", label: o(p.NAME_LABEL), placeholder: o(p.NAME_PLACEHOLDER), ref: L, disabled: !!c }),
              _.createElement(r.G1, {
                name: "idNumber",
                label: o(p.ID_NUMBER_LABEL),
                placeholder: o(p.ID_NUMBER_PLACEHOLDER),
                handleCopy: "edit" === e ? a : void 0,
                disabled: !!c
              }),
              _.createElement(r.Nn, { name: "issueDate", label: o(p.ISSUE_DATE_LABEL), disabled: !!c }),
              _.createElement(r.Nn, {
                name: "expirationDate",
                label: o(n.a.has(t) ? p.EXPIRATION_DATE_LABEL_UK : p.EXPIRATION_DATE_LABEL_US),
                disabled: !!c
              }),
              _.createElement(r.Dz, { name: "country", label: o(p.COUNTRY_LABEL), disabled: !!c }),
              _.createElement(r.YI, {
                name: "issuePlace",
                label: o(p.PLACE_OF_ISSUE_LABEL),
                placeholder: o(p.PLACE_OF_ISSUE_PLACEHOLDER),
                disabled: !!c
              }),
              l || (l = _.createElement(d.c, { height: 24 })),
              _.createElement(r.A0, { name: "spaceId", disabled: !!c })
            )
          );
        });
    }
  }
]);
