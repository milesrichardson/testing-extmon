(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [2855],
  {
    56963: (t, a, s) => {
      "use strict";
      s.r(a), s.d(a, { default: () => i });
      var e = s(8081),
        o = s.n(e),
        n = s(23645),
        r = s.n(n)()(o());
      r.push([
        t.id,
        ".tab-stash-onboarding[data-v-48b0a8f8]{width:100%;display:flex;gap:2rem}.tab-stash-onboarding .text[data-v-48b0a8f8]{width:0;flex-grow:2;flex-shrink:0}.tab-stash-onboarding .text h2[data-v-48b0a8f8]{font-size:2.25rem;font-weight:700}.tab-stash-onboarding .text p[data-v-48b0a8f8]{margin:8px 0 20px;font-size:1.25rem;line-height:1.4}.tab-stash-onboarding video[data-v-48b0a8f8]{width:0;height:auto;flex-grow:3;flex-shrink:0;border-radius:var(--border-radius);pointer-events:none}",
        ""
      ]);
      const i = r;
    },
    42855: (t, a, s) => {
      "use strict";
      s.r(a), s.d(a, { default: () => o });
      var e = function () {
        var t = this,
          a = t._self._c;
        return (
          t._self._setupProxy,
          a("div", { staticClass: "tab-stash-onboarding" }, [
            a("video", {
              attrs: {
                src: "https://az814671.vo.msecnd.net/blogimages/4d823491-b915-4a7b-9cf4-e847eed0be16",
                autoplay: "",
                muted: "",
                loop: ""
              },
              domProps: { muted: !0 }
            }),
            t._v(" "),
            a("div", { staticClass: "text" }, [
              a("h2", [t._v("Tab Stash")]),
              t._v(" "),
              a("p", [t._v("Save and restore tabs for distraction-free focus.")]),
              t._v(" "),
              a(
                "button",
                {
                  staticClass: "dash-button dash-button-primary",
                  attrs: { "data-test": "next" },
                  on: {
                    click: function (a) {
                      return t.$emit("next");
                    }
                  }
                },
                [t._v("Ok")]
              )
            ])
          ])
        );
      };
      e._withStripped = !0;
      s(34040);
      const o = (0, s(51900).Z)({ __name: "TabStashOnboarding", setup: (t) => ({ __sfc: !0 }) }, e, [], !1, null, "48b0a8f8", null).exports;
    },
    34040: (t, a, s) => {
      var e = s(56963);
      e.__esModule && (e = e.default),
        "string" == typeof e && (e = [[t.id, e, ""]]),
        e.locals && (t.exports = e.locals),
        (0, s(45346).Z)("2a051dd0", e, !1, {});
    }
  }
]);
