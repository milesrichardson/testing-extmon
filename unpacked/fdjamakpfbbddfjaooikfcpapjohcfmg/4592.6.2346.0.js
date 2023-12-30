"use strict";
(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [4592],
  {
    3124: (e, a, t) => {
      t.r(a), t.d(a, { Connected: () => m });
      var l = t(696832),
        n = t(799852),
        s = t(448430),
        o = t(382706),
        r = t(817509),
        i = t(72320),
        p = t(347613);
      const c = (0, i.Y)({
          getDeleteTitle: (e) => e("webapp_personal_info_edition_delete_title_company"),
          getItemTypeDescription: (e) => e("webapp_personal_info_edition_header_company_description"),
          getTitle: (e) => e.companyName,
          iconType: p.Tu.company,
          kwType: "KWCompany",
          renderForm: (e, a, t, n) => {
            const s = { jobTitle: a.jobTitle, name: a.companyName, spaceId: a.spaceId };
            return l.createElement(r.$, { lee: e, currentValues: s, signalEditedValues: n, ref: t });
          }
        }),
        m = (e) => {
          const { data: a } = (0, n.k)(s.L, "query", { vaultItemTypes: [o.U.Company], ids: [`{${e.match.params.uuid}}`] });
          return l.createElement(c, { ...e, item: a?.companiesResult.items[0] });
        };
    },
    817509: (e, a, t) => {
      t.d(a, { $: () => r });
      var l = t(696832),
        n = t(919551),
        s = t(313661),
        o = t(839434);
      class r extends n.ZP {
        isFormValid() {
          return this.validateValues({ name: n.UE });
        }
        render() {
          var e;
          const a = this.props.lee.translate.namespace("webapp_personal_info_edition_company_");
          return l.createElement(
            l.Fragment,
            null,
            l.createElement(s.Z, {
              label: a("name_label"),
              placeholder: a("placeholder_no_name"),
              dataName: "name",
              value: this.state.values.name,
              error: this.state.errors.name,
              onChange: this.handleChange
            }),
            l.createElement(s.Z, {
              label: a("jobTitle_label"),
              placeholder: a("placeholder_no_jobTitle"),
              dataName: "jobTitle",
              value: this.state.values.jobTitle,
              onChange: this.handleChange
            }),
            l.createElement(o.M, {
              labelSx: o.e,
              spaceId: null != (e = this.state.values.spaceId) ? e : "",
              onChange: (e) => this.handleChange(e, "spaceId")
            })
          );
        }
      }
    }
  }
]);
