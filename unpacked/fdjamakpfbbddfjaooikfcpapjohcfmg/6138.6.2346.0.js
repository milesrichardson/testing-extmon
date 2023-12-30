"use strict";
(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [6138, 917],
  {
    867716: (e, a, l) => {
      l.r(a), l.d(a, { FiscalIdEditPanel: () => o });
      var t = l(696832),
        _ = l(382706),
        i = l(66941),
        d = l(157631),
        E = l(343966),
        n = l(753139),
        r = l(126750);
      const s = {
          HEADER_DESCRIPTION: "webapp_id_edition_fiscalid_header_description",
          ALERT_DELETE: "webapp_id_edition_fiscalid_alert_delete",
          ALERT_EDIT: "webapp_id_edition_fiscalid_alert_edit",
          DIALOG_DELETE_TITLE: "webapp_id_edition_fiscalid_dialog_delete_title",
          COPY_SUCCESS: "webapp_id_copy_success_fiscalid_number"
        },
        c = (e, a) => (l) => {
          const t = (0, d.h)(a, l, E.rC);
          return i.C.editFiscalId({ ...t, idNumber: t.fiscalNumber, id: e });
        },
        o = ({ listRoute: e, id: a, setDialogActive: l, lee: i, hasUnsavedData: d, setHasUnsavedData: E }) =>
          a
            ? t.createElement(
                r.y,
                {
                  listRoute: e,
                  id: `{${a}}`,
                  setDialogActive: l,
                  lee: i,
                  hasUnsavedData: d,
                  setHasUnsavedData: E,
                  ID_TYPE: _.U.FiscalId,
                  I18N_KEYS: s,
                  editItem: c
                },
                ({ handleCopy: e }) => t.createElement(n.U, { variant: "edit", handleCopy: e })
              )
            : null;
    },
    753139: (e, a, l) => {
      l.d(a, { U: () => o });
      var t,
        _,
        i = l(696832),
        d = l(201389),
        E = l(778089),
        n = l(803057),
        r = l(754171),
        s = l(670570);
      const c = {
          ...r.k,
          TELEDECLARANT_NUMBER_LABEL: "webapp_id_form_field_label_teledeclarant_number",
          TELEDECLARANT_NUMBER_PLACEHOLDER: "webapp_id_form_field_placeholder_teledeclarant_number",
          TAX_NUMBER_LABEL_DEFAULT: "webapp_id_form_field_label_tax_number"
        },
        o = i.memo(({ variant: e, handleCopy: a }) => {
          const { translate: l } = (0, d.Z)(),
            r = i.useRef(null);
          return (
            i.useEffect(
              "add" === e
                ? () => {
                    const e = setTimeout(() => {
                      r.current?.focus();
                    }, E.sc);
                    return () => clearTimeout(e);
                  }
                : () => {},
              []
            ),
            i.createElement(
              i.Fragment,
              null,
              i.createElement(s.G1, {
                name: "fiscalNumber",
                label: l(c.TAX_NUMBER_LABEL_DEFAULT),
                placeholder: l(c.ID_NUMBER_PLACEHOLDER),
                handleCopy: "edit" === e ? a : void 0,
                ref: r
              }),
              i.createElement(s.xu, {
                name: "teledeclarantNumber",
                label: l(c.TELEDECLARANT_NUMBER_LABEL),
                placeholder: l(c.TELEDECLARANT_NUMBER_PLACEHOLDER),
                handleCopy: "edit" === e ? a : void 0
              }),
              i.createElement(s.Dz, { name: "country", label: l(c.COUNTRY_LABEL) }),
              t || (t = i.createElement(n.c, { height: 24 })),
              _ || (_ = i.createElement(s.A0, { name: "spaceId" }))
            )
          );
        });
    }
  }
]);
