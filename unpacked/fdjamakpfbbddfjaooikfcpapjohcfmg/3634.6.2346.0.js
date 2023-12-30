"use strict";
(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [3634, 917],
  {
    823364: (e, a, t) => {
      t.r(a), t.d(a, { SocialSecurityIdEditPanel: () => E });
      var i = t(696832),
        l = t(382706),
        n = t(66941),
        c = t(157631),
        d = t(343966),
        s = t(23583),
        _ = t(126750);
      const r = {
          HEADER_DESCRIPTION: "webapp_id_edition_socialsecurity_header_description",
          DIALOG_DELETE_TITLE: "webapp_id_edition_socialsecurity_dialog_delete_title",
          ALERT_DELETE: "webapp_id_edition_socialsecurity_alert_delete",
          ALERT_EDIT: "webapp_id_edition_socialsecurity_alert_edit",
          COPY_SUCCESS: "webapp_id_copy_success_social_security_id_number"
        },
        o = (e, a) => (t) => {
          const i = (0, c.h)(a, t, d.gb);
          return n.C.editSocialSecurityId({ ...i, name: i.idName, id: e });
        },
        E = ({ listRoute: e, id: a, setDialogActive: t, lee: n, hasUnsavedData: c, setHasUnsavedData: d }) =>
          a
            ? i.createElement(
                _.y,
                {
                  listRoute: e,
                  id: `{${a}}`,
                  setDialogActive: t,
                  lee: n,
                  hasUnsavedData: c,
                  setHasUnsavedData: d,
                  ID_TYPE: l.U.SocialSecurityId,
                  I18N_KEYS: r,
                  editItem: o
                },
                ({ handleCopy: e }) => i.createElement(s.x, { variant: "edit", handleCopy: e })
              )
            : null;
    },
    23583: (e, a, t) => {
      t.d(a, { x: () => E });
      var i,
        l,
        n = t(696832),
        c = t(201389),
        d = t(778089),
        s = t(803057),
        _ = t(754171),
        r = t(670570);
      const o = { ..._.k },
        E = n.memo(({ variant: e, handleCopy: a }) => {
          const { translate: t } = (0, c.Z)(),
            _ = n.useRef(null);
          return (
            n.useEffect(
              "add" === e
                ? () => {
                    const e = setTimeout(() => {
                      _.current?.focus();
                    }, d.sc);
                    return () => clearTimeout(e);
                  }
                : () => {},
              []
            ),
            n.createElement(
              n.Fragment,
              null,
              n.createElement(r.YI, { name: "idName", label: t(o.NAME_LABEL), placeholder: t(o.NAME_PLACEHOLDER), ref: _ }),
              n.createElement(r.G1, {
                name: "idNumber",
                label: t(o.ID_NUMBER_LABEL),
                placeholder: t(o.ID_NUMBER_PLACEHOLDER),
                handleCopy: "edit" === e ? a : void 0
              }),
              n.createElement(r.Dz, { name: "country", label: t(o.COUNTRY_LABEL) }),
              i || (i = n.createElement(s.c, { height: 24 })),
              l || (l = n.createElement(r.A0, { name: "spaceId" }))
            )
          );
        });
    }
  }
]);
