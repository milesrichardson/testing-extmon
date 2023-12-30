"use strict";
(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [7528],
  {
    939742: (e, a, t) => {
      t.r(a), t.d(a, { Connected: () => m });
      var l = t(696832),
        s = t(799852),
        n = t(448430),
        i = t(382706),
        r = t(647837),
        d = t(486816),
        o = t(615446);
      const h = (0, d.Y)({
          getDeleteTitle: (e) => e("webapp_personal_info_edition_delete_title_website"),
          getItemTypeDescription: (e) => e("webapp_personal_info_edition_header_website_description"),
          getTitle: (e) => e.itemName,
          iconType: o.Tu.website,
          vaultItemType: i.U.Website,
          renderForm: (e, a, t, s) => {
            const n = { itemName: a.itemName, URL: a.URL, spaceId: a.spaceId };
            return l.createElement(r.m, { lee: e, currentValues: n, signalEditedValues: s, ref: t });
          }
        }),
        m = (e) => {
          const { data: a } = (0, s.k)(n.L, "query", { vaultItemTypes: [i.U.Website], ids: [`{${e.match.params.uuid}}`] });
          return l.createElement(h, { ...e, item: a?.websitesResult.items[0] });
        };
    },
    647837: (e, a, t) => {
      t.d(a, { m: () => d });
      var l = t(696832),
        s = t(611913),
        n = t(66485),
        i = t(242521),
        r = t(167406);
      class d extends i.ZP {
        isFormValid() {
          return this.validateValues({ URL: i.UE });
        }
        render() {
          var e;
          const a = this.props.lee.translate.namespace("webapp_personal_info_edition_website_"),
            { shouldShowTrialDiscontinuedDialog: t } = this.context;
          return l.createElement(
            l.Fragment,
            null,
            l.createElement(s.Z, {
              key: "website",
              label: a("website_label"),
              placeholder: a("placeholder_no_website"),
              dataName: "URL",
              value: this.state.values.URL,
              error: this.state.errors.URL,
              onChange: this.handleChange,
              disabled: !!t
            }),
            l.createElement(s.Z, {
              key: "name",
              label: a("name_label"),
              placeholder: a("placeholder_no_name"),
              dataName: "itemName",
              value: this.state.values.itemName,
              onChange: this.handleChange,
              disabled: !!t
            }),
            l.createElement(r.M, {
              labelSx: r.e,
              spaceId: null != (e = this.state.values.spaceId) ? e : "",
              onChange: (e) => this.handleChange(e, "spaceId"),
              disabled: !!t
            })
          );
        }
      }
      d.contextType = n.gD;
    }
  }
]);
