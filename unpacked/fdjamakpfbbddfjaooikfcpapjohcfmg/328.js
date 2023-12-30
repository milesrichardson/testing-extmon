"use strict";
(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [328, 3076],
  {
    533935: (e, a, t) => {
      t.r(a), t.d(a, { SocialSecurityIdEditPanel: () => _ });
      var l = t(696832),
        i = t(382706),
        d = t(647121),
        s = t(697764);
      const n = {
          HEADER_DESCRIPTION: "webapp_id_edition_socialsecurity_header_description",
          DIALOG_DELETE_TITLE: "webapp_id_edition_socialsecurity_dialog_delete_title",
          ALERT_DELETE: "webapp_id_edition_socialsecurity_alert_delete",
          ALERT_EDIT: "webapp_id_edition_socialsecurity_alert_edit",
          COPY_SUCCESS: "webapp_id_copy_success_social_security_id_number"
        },
        _ = ({ listRoute: e, id: a, setDialogActive: t, lee: _, hasUnsavedData: c, setHasUnsavedData: o }) =>
          a
            ? l.createElement(
                s.y,
                {
                  listRoute: e,
                  id: `{${a}}`,
                  setDialogActive: t,
                  lee: _,
                  hasUnsavedData: c,
                  setHasUnsavedData: o,
                  ID_TYPE: i.U.SocialSecurityId,
                  I18N_KEYS: n
                },
                ({ handleCopy: e }) => l.createElement(d.x, { variant: "edit", handleCopy: e })
              )
            : null;
    },
    647121: (e, a, t) => {
      t.d(a, { x: () => E });
      var l,
        i = t(696832),
        d = t(488203),
        s = t(177650),
        n = t(321143),
        _ = t(66485),
        c = t(16792),
        o = t(865212);
      const r = { ...c.k },
        E = i.memo(({ variant: e, handleCopy: a }) => {
          const { translate: t } = (0, d.Z)(),
            { shouldShowTrialDiscontinuedDialog: c } = (0, _.yp)(),
            E = i.useRef(null);
          return (
            i.useEffect(
              "add" === e
                ? () => {
                    const e = setTimeout(() => {
                      E.current?.focus();
                    }, s.sc);
                    return () => clearTimeout(e);
                  }
                : () => {},
              []
            ),
            i.createElement(
              i.Fragment,
              null,
              i.createElement(o.YI, { name: "idName", label: t(r.NAME_LABEL), placeholder: t(r.NAME_PLACEHOLDER), ref: E, disabled: !!c }),
              i.createElement(o.G1, {
                name: "idNumber",
                label: t(r.ID_NUMBER_LABEL),
                placeholder: t(r.ID_NUMBER_PLACEHOLDER),
                handleCopy: "edit" === e ? a : void 0,
                disabled: !!c
              }),
              i.createElement(o.Dz, { name: "country", label: t(r.COUNTRY_LABEL), disabled: !!c }),
              l || (l = i.createElement(n.c, { height: 24 })),
              i.createElement(o.A0, { name: "spaceId", disabled: !!c })
            )
          );
        });
    }
  }
]);
