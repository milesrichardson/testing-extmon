"use strict";
(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [4164],
  {
    64164: (e, a, t) => {
      t.r(a);
      var l = t(99437),
        i = t(28277),
        n = t(13990),
        r = t(85040);
      const s = document.querySelector(".region.top-right"),
        u = document.createElement("div");
      s.appendChild(u);
      const o = {};
      Object.entries(n.Z).forEach(([e, a]) => (o[e] = new (l.Z.extend({ mixins: [r.Z], unreactive: () => a }))()));
      const c = new l.Z({ render: (e) => e(i.Z, { props: { collections: o, standalone: !0 } }) }).$mount(u);
      m.once("destroyWidget:addMetric", () => {
        c.$el.remove(), c.$destroy();
      });
    },
    85040: (e, a, t) => {
      t.d(a, { Z: () => i });
      var l = t(84315);
      const i = {
        unreactive: () => ({ names: {} }),
        computed: {
          nameLCP() {
            return (
              this.names.lowerCasePlural ||
              this.type
                .replace(/([A-Z])/g, " $1")
                .trim()
                .toLowerCase()
            );
          },
          nameLCS() {
            return this.names.lowerCaseSingular || (0, l.singularize)(this.nameLCP);
          },
          nameCP() {
            return this.names.capitalizedPlural || m.utils.capitalizeWords(this.nameLCP);
          },
          nameCS() {
            return this.names.capitalizedSingular || m.utils.capitalizeWords(this.nameLCS);
          },
          fullNameLCP() {
            return this.names.fullLowerCasePlural || this.nameLCP;
          },
          fullNameLCS() {
            return this.names.fullLowerCaseSingular || (0, l.singularize)(this.fullNameLCP);
          },
          fullNameCP() {
            return this.names.fullCapitalizedPlural || m.utils.capitalizeWords(this.fullNameLCP);
          },
          fullNameCS() {
            return this.names.fullCapitalizedSingular || m.utils.capitalizeWords(this.fullNameLCS);
          }
        }
      };
    }
  }
]);
