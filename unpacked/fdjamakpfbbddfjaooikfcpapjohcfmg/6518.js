"use strict";
(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [6518, 3076],
  {
    894261: (e, a, l) => {
      l.r(a), l.d(a, { FiscalIdEditPanel: () => n });
      var t = l(696832),
        _ = l(382706),
        d = l(981506),
        i = l(697764);
      const E = {
          HEADER_DESCRIPTION: "webapp_id_edition_fiscalid_header_description",
          ALERT_DELETE: "webapp_id_edition_fiscalid_alert_delete",
          ALERT_EDIT: "webapp_id_edition_fiscalid_alert_edit",
          DIALOG_DELETE_TITLE: "webapp_id_edition_fiscalid_dialog_delete_title",
          COPY_SUCCESS: "webapp_id_copy_success_fiscalid_number"
        },
        n = ({ listRoute: e, id: a, setDialogActive: l, lee: n, hasUnsavedData: s, setHasUnsavedData: r }) =>
          a
            ? t.createElement(
                i.y,
                {
                  listRoute: e,
                  id: `{${a}}`,
                  setDialogActive: l,
                  lee: n,
                  hasUnsavedData: s,
                  setHasUnsavedData: r,
                  ID_TYPE: _.U.FiscalId,
                  I18N_KEYS: E
                },
                ({ handleCopy: e }) => t.createElement(d.U, { variant: "edit", handleCopy: e })
              )
            : null;
    },
    981506: (e, a, l) => {
      l.d(a, { U: () => o });
      var t,
        _ = l(696832),
        d = l(488203),
        i = l(177650),
        E = l(321143),
        n = l(16792),
        s = l(865212),
        r = l(66485);
      const c = {
          ...n.k,
          TELEDECLARANT_NUMBER_LABEL: "webapp_id_form_field_label_teledeclarant_number",
          TELEDECLARANT_NUMBER_PLACEHOLDER: "webapp_id_form_field_placeholder_teledeclarant_number",
          TAX_NUMBER_LABEL_DEFAULT: "webapp_id_form_field_label_tax_number"
        },
        o = _.memo(({ variant: e, handleCopy: a }) => {
          const { translate: l } = (0, d.Z)(),
            { shouldShowTrialDiscontinuedDialog: n } = (0, r.yp)(),
            o = _.useRef(null);
          return (
            _.useEffect(
              "add" === e
                ? () => {
                    const e = setTimeout(() => {
                      o.current?.focus();
                    }, i.sc);
                    return () => clearTimeout(e);
                  }
                : () => {},
              []
            ),
            _.createElement(
              _.Fragment,
              null,
              _.createElement(s.G1, {
                name: "fiscalNumber",
                label: l(c.TAX_NUMBER_LABEL_DEFAULT),
                placeholder: l(c.ID_NUMBER_PLACEHOLDER),
                handleCopy: "edit" === e ? a : void 0,
                ref: o,
                disabled: !!n
              }),
              _.createElement(s.xu, {
                name: "teledeclarantNumber",
                label: l(c.TELEDECLARANT_NUMBER_LABEL),
                placeholder: l(c.TELEDECLARANT_NUMBER_PLACEHOLDER),
                handleCopy: "edit" === e ? a : void 0,
                disabled: !!n
              }),
              _.createElement(s.Dz, { name: "country", label: l(c.COUNTRY_LABEL), disabled: !!n }),
              t || (t = _.createElement(E.c, { height: 24 })),
              _.createElement(s.A0, { name: "spaceId", disabled: !!n })
            )
          );
        });
    }
  }
]);
