"use strict";
(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [4771],
  {
    662201: (e, a, t) => {
      t.r(a), t.d(a, { Connected: () => p });
      var s = t(696832),
        l = t(799852),
        n = t(448430),
        i = t(382706),
        r = t(491251),
        o = t(72320),
        d = t(347613);
      const h = (0, o.Y)({
          getDeleteTitle: (e) => e("webapp_personal_info_edition_delete_title_website"),
          getItemTypeDescription: (e) => e("webapp_personal_info_edition_header_website_description"),
          getTitle: (e) => e.itemName,
          iconType: d.Tu.website,
          kwType: "KWPersonalWebsite",
          renderForm: (e, a, t, l) => {
            const n = { name: a.itemName, website: a.URL, spaceId: a.spaceId };
            return s.createElement(r.m, { lee: e, currentValues: n, signalEditedValues: l, ref: t });
          }
        }),
        p = (e) => {
          const { data: a } = (0, l.k)(n.L, "query", { vaultItemTypes: [i.U.Website], ids: [`{${e.match.params.uuid}}`] });
          return s.createElement(h, { ...e, item: a?.websitesResult.items[0] });
        };
    },
    491251: (e, a, t) => {
      t.d(a, { m: () => r });
      var s = t(696832),
        l = t(919551),
        n = t(313661),
        i = t(839434);
      class r extends l.ZP {
        isFormValid() {
          return this.validateValues({ website: l.UE });
        }
        render() {
          var e;
          const a = this.props.lee.translate.namespace("webapp_personal_info_edition_website_");
          return s.createElement(
            s.Fragment,
            null,
            s.createElement(n.Z, {
              key: "website",
              label: a("website_label"),
              placeholder: a("placeholder_no_website"),
              dataName: "website",
              value: this.state.values.website,
              error: this.state.errors.website,
              onChange: this.handleChange
            }),
            s.createElement(n.Z, {
              key: "name",
              label: a("name_label"),
              placeholder: a("placeholder_no_name"),
              dataName: "name",
              value: this.state.values.name,
              onChange: this.handleChange
            }),
            s.createElement(i.M, {
              labelSx: i.e,
              spaceId: null != (e = this.state.values.spaceId) ? e : "",
              onChange: (e) => this.handleChange(e, "spaceId")
            })
          );
        }
      }
    }
  }
]);
