"use strict";
(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [239],
  {
    352521: (e, t, a) => {
      a.r(t), a.d(t, { Connected: () => h });
      var i = a(696832),
        l = a(799852),
        s = a(448430),
        n = a(382706),
        r = a(307973),
        d = a(511329),
        o = a(985440),
        m = a(72320),
        c = a(347613),
        p = a(933741);
      const _ = {
          [d.t.Mr]: "MR",
          [d.t.Mrs]: "MME",
          [d.t.Miss]: "MLLE",
          [d.t.Ms]: "MS",
          [d.t.Mx]: "MX",
          [d.t.NoneOfThese]: "NONE_OF_THESE"
        },
        u = (0, m.Y)({
          getDeleteTitle: (e) => e("webapp_personal_info_edition_delete_title_name"),
          getItemTypeDescription: (e) => e("webapp_personal_info_edition_header_identity_description"),
          getTitle: (e) => (0, p.kl)(e) || "",
          iconType: c.Tu.identity,
          kwType: "KWIdentity",
          renderForm: (e, t, a, l) => {
            const s = (0, p.sG)(t.birthDate),
              n = {
                birthDate: (0, r.Z)(s, "yyyy-MM-dd"),
                birthPlace: t.birthPlace,
                firstName: t.firstName,
                lastName2: t.lastName2,
                lastName: t.lastName,
                localeFormat: t.localeFormat,
                middleName: t.middleName,
                pseudo: t.pseudo,
                spaceId: t.spaceId,
                title: t.title ? _[t.title] : ""
              };
            return i.createElement(o.P, { lee: e, currentValues: n, signalEditedValues: l, ref: a });
          }
        }),
        h = (e) => {
          const { data: t } = (0, l.k)(s.L, "query", { vaultItemTypes: [n.U.Identity], ids: [`{${e.match.params.uuid}}`] });
          return i.createElement(u, { ...e, item: t?.identitiesResult.items[0] });
        };
    }
  }
]);
