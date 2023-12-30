"use strict";
(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [4030],
  {
    200629: (e, a, t) => {
      t.r(a), t.d(a, { Connected: () => d });
      var l = t(696832),
        n = t(799852),
        o = t(448430),
        s = t(382706),
        i = t(562606),
        r = t(486816),
        p = t(615446);
      const c = (0, r.Y)({
          getDeleteTitle: (e) => e("webapp_personal_info_edition_delete_title_company"),
          getItemTypeDescription: (e) => e("webapp_personal_info_edition_header_company_description"),
          getTitle: (e) => e.companyName,
          iconType: p.Tu.company,
          vaultItemType: s.U.Company,
          renderForm: (e, a, t, n) => {
            const o = { jobTitle: a.jobTitle, companyName: a.companyName, spaceId: a.spaceId };
            return l.createElement(i.$, { lee: e, currentValues: o, signalEditedValues: n, ref: t });
          }
        }),
        d = (e) => {
          const { data: a } = (0, n.k)(o.L, "query", { vaultItemTypes: [s.U.Company], ids: [`{${e.match.params.uuid}}`] });
          return l.createElement(c, { ...e, item: a?.companiesResult.items[0] });
        };
    },
    562606: (e, a, t) => {
      t.d(a, { $: () => r });
      var l = t(696832),
        n = t(611913),
        o = t(66485),
        s = t(242521),
        i = t(167406);
      class r extends s.ZP {
        isFormValid() {
          return this.validateValues({ companyName: s.UE });
        }
        render() {
          var e;
          const a = this.props.lee.translate.namespace("webapp_personal_info_edition_company_"),
            { shouldShowTrialDiscontinuedDialog: t } = this.context;
          return l.createElement(
            l.Fragment,
            null,
            l.createElement(n.Z, {
              label: a("name_label"),
              placeholder: a("placeholder_no_name"),
              dataName: "companyName",
              value: this.state.values.companyName,
              error: this.state.errors.companyName,
              onChange: this.handleChange,
              disabled: !!t
            }),
            l.createElement(n.Z, {
              label: a("jobTitle_label"),
              placeholder: a("placeholder_no_jobTitle"),
              dataName: "jobTitle",
              value: this.state.values.jobTitle,
              onChange: this.handleChange,
              disabled: !!t
            }),
            l.createElement(i.M, {
              labelSx: i.e,
              spaceId: null != (e = this.state.values.spaceId) ? e : "",
              onChange: (e) => this.handleChange(e, "spaceId"),
              disabled: !!t
            })
          );
        }
      }
      r.contextType = o.gD;
    }
  }
]);
