"use strict";
(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [8970],
  {
    174229: (e, t, i) => {
      i.r(t), i.d(t, { Connected: () => c });
      var n = i(696832),
        a = i(799852),
        l = i(448430),
        r = i(382706),
        s = i(307973),
        d = i(879862),
        o = i(486816),
        p = i(615446),
        u = i(718462);
      const _ = (0, o.Y)({
          getDeleteTitle: (e) => e("webapp_personal_info_edition_delete_title_name"),
          getItemTypeDescription: (e) => e("webapp_personal_info_edition_header_identity_description"),
          getTitle: (e) => (0, u.kl)(e) || "",
          iconType: p.Tu.identity,
          vaultItemType: r.U.Identity,
          renderForm: (e, t, i, a) => {
            const l = (0, u.sG)(t.birthDate),
              r = (0, s.Z)(l, "yyyy-MM-dd"),
              o = { ...t, birthDate: r };
            return n.createElement(d.P, { lee: e, currentValues: o, signalEditedValues: a, ref: i });
          }
        }),
        c = (e) => {
          const { data: t } = (0, a.k)(l.L, "query", { vaultItemTypes: [r.U.Identity], ids: [`{${e.match.params.uuid}}`] });
          return n.createElement(_, { ...e, item: t?.identitiesResult.items[0] });
        };
    }
  }
]);
