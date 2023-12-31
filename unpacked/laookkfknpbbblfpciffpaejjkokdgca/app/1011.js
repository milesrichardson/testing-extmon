(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [1011],
  {
    57630: (M, N, t) => {
      "use strict";
      t.r(N), t.d(N, { default: () => D });
      var j = t(8081),
        T = t.n(j),
        u = t(23645),
        L = t.n(u)()(T());
      L.push([M.id, "\n/* stylelint-disable */\n.demo[data-v-2ba0bd93] { position: relative; text-align: center;\n}\n", ""]);
      const D = L;
    },
    31011: (M, N, t) => {
      "use strict";
      t.r(N), t.d(N, { default: () => u });
      var j = function () {
        var M = this,
          N = M._self._c;
        return N(
          "upsell",
          M._b(
            {
              attrs: { type: "quotes" },
              scopedSlots: M._u([
                {
                  key: "title",
                  fn: function () {
                    return [M._v("Custom Quotes")];
                  },
                  proxy: !0
                },
                {
                  key: "description",
                  fn: function () {
                    return [M._v("Add your own collection of quotes to Momentum.")];
                  },
                  proxy: !0
                },
                {
                  key: "body",
                  fn: function () {
                    return [
                      N("div", { staticClass: "content" }, [
                        N("div", { staticClass: "demo" }, [
                          N("img", { attrs: { src: "https://az814671.vo.msecnd.net/blogimages/cddd2dfc-8b79-45cb-8ec8-fe924f0c6757" } }),
                          M._v(" "),
                          N("div", { staticClass: "fun-fact" }, [
                            N("strong", [M._v("Fun fact:")]),
                            M._v(
                              "\n\t\t\t\t\tIn a recent study, 95% of customers that use Plus daily reported feeling more inspired.\n\t\t\t\t"
                            )
                          ])
                        ]),
                        M._v(" "),
                        N("ul", { staticClass: "features" }, [
                          N(
                            "li",
                            [
                              N("inline-svg", { staticClass: "feature-icon", attrs: { src: t(94288) } }),
                              M._v(" "),
                              N("div", { staticClass: "feature-title" }, [M._v("Influence your mindset")]),
                              M._v(" "),
                              N("div", { staticClass: "feature-desc" }, [
                                M._v("Customize your quotes with wisdom from your favorite heroes, mentors, and friends.")
                              ])
                            ],
                            1
                          ),
                          M._v(" "),
                          N(
                            "li",
                            [
                              N("inline-svg", { staticClass: "feature-icon", attrs: { src: t(48290) } }),
                              M._v(" "),
                              N("div", { staticClass: "feature-title" }, [M._v("Skip & change quotes")]),
                              M._v(" "),
                              N("div", { staticClass: "feature-desc" }, [
                                M._v("Design your vibe for the day by skipping to quotes that motivate you the most.")
                              ])
                            ],
                            1
                          ),
                          M._v(" "),
                          N(
                            "li",
                            [
                              N("inline-svg", { staticClass: "feature-icon", attrs: { src: t(18486) } }),
                              M._v(" "),
                              N("div", { staticClass: "feature-title" }, [M._v("Mix it up")]),
                              M._v(" "),
                              N("div", { staticClass: "feature-desc" }, [
                                M._v("Choose to see your own quotes, Momentum's quotes, or both.\n\t\t\t\t\t")
                              ])
                            ],
                            1
                          )
                        ])
                      ])
                    ];
                  },
                  proxy: !0
                }
              ])
            },
            "upsell",
            M.$props,
            !1
          )
        );
      };
      j._withStripped = !0;
      const T = {
        name: "QuotesUpsell",
        components: { Upsell: t(5195).Z },
        props: {
          eventSource: { type: String, default: "" },
          plans: { type: Object, default: () => ({}) },
          sales: { type: Object, default: () => ({}) }
        }
      };
      t(61730);
      const u = (0, t(51900).Z)(T, j, [], !1, null, "2ba0bd93", null).exports;
    },
    61730: (M, N, t) => {
      var j = t(57630);
      j.__esModule && (j = j.default),
        "string" == typeof j && (j = [[M.id, j, ""]]),
        j.locals && (M.exports = j.locals),
        (0, t(45346).Z)("531030bb", j, !1, { ssrId: !0 });
    },
    94288: (M) => {
      "use strict";
      M.exports =
        "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNDk1Ljk4NCAyNTIuNTg4Yy0xNy4xMTktMTQuMTA5LTQ0LjE3Ny0xNS4zMTktNjEuOTM2IDMuNzRsLTQ0LjA4NyA0Ny4zMjdjLTUuNy0xOC4zMTktMjIuODA5LTMxLjY1OC00Mi45NzctMzEuNjU4aC03OC42NzVjLTUuOTcgMC03Ljk2OS0yLjI4LTE4LjMzOS0xMC4yNjktMzkuNTM4LTM0LjQ2OC05OC45MjQtMzQuMzU4LTEzOC4zNDIuMzNMODIuNzEgMjg3LjUxNmMtMTIuOTk5LTYuODgtMjguMTc4LTcuMDUtNDEuMjQ4LS41Mkw4LjI5NCAzMDMuNTc1Yy03LjQxIDMuNzEtMTAuNDA5IDEyLjcxOS02LjcxIDIwLjEyOWw4OS45OTUgMTc5Ljk4OWMzLjcxIDcuNDEgMTIuNzE5IDEwLjQwOSAyMC4xMjkgNi43MWwzMy4xNjgtMTYuNTg5YzE2LjM0OS04LjE2OSAyNS40NDgtMjQuODQ5IDI0Ljg1OC00MS44MjdoMTc3LjI0OWMzMi44NjggMCA2NC4yNzYtMTUuNjk5IDgzLjk5NS00MS45OTdsNzIuMDA2LTk2LjAxNGMxMy45NjktMTguNjEgMTEuNzU5LTQ1Ljg5OS03LTYxLjM4OHpNMTMxLjQ1NiA0NjYuOTg1bC0xOS43NDkgOS44NzktNzYuNTg1LTE1My4xNiAxOS43NTktOS44NzljNy40MS0zLjcgMTYuNDA5LS43MSAyMC4xMTkgNi43MWw2My4xNjYgMTI2LjMzMmMzLjcgNy40MDkuNyAxNi40MDgtNi43MSAyMC4xMTh6bTM0Ny41MjktMTcxLjAwOUw0MDYuOTggMzkxLjk5Yy0xNC4wODkgMTguNzg5LTM2LjUxOCAyOS45OTgtNTkuOTk2IDI5Ljk5OEgxNTkuMjY1bC01Ni4yMDctMTEyLjQyMyAyOC4zODgtMjQuOTg4YzI4LjI0OC0yNC44NDkgNzAuODQ2LTI0Ljg0OSA5OS4wOTQgMCAxNi42MzkgMTQuNjQ5IDI2Ljk4OCAxNy40MTkgMzcuNzY4IDE3LjQxOWg3OC42NzVjOC4yNyAwIDE0Ljk5OSA2LjczIDE0Ljk5OSAxNC45OTlzLTYuNzMgMTQuOTk5LTE0Ljk5OSAxNC45OTloLTc2LjYwNWMtOC4yOCAwLTE0Ljk5OSA2LjcyLTE0Ljk5OSAxNC45OTlzNi43MiAxNC45OTkgMTQuOTk5IDE0Ljk5OWg4Ni42NTVjMTIuNDQ5IDAgMjQuNDQ5LTUuMjIgMzIuOTI4LTE0LjMyOWw2Ni4wMzYtNzAuODg2YzYuMDQtNi40OCAxNS4yOTktNS45NCAyMC45NzktLjk3IDUuOTM5IDUuMTk5IDYuNTggMTQuMDg5IDIuMDA5IDIwLjE2OXpNMzE1LjM4NSAxMDIuMzY3YzEwLjI2OS0xMC43NjkgMTYuNTk5LTI1LjMyOCAxNi41OTktNDEuMzU4IDAtMzMuMDE4LTI2LjY3OC02MC45OTYtNTkuOTk2LTYwLjk5Ni0zMy4wNjggMC02MC45OTYgMjcuOTI4LTYwLjk5NiA2MC45OTYgMCAxNS41MzkgNi4wOSAzMC4yMDggMTcuMTQ5IDQxLjQ3OC0yNy40MjggMTUuMzc5LTQ3LjE0NyA0NC44OTctNDcuMTQ3IDc5LjUxNXYxNC45OTljMCA4LjI3OSA2LjcyIDE0Ljk5OSAxNC45OTkgMTQuOTk5aDE1MC45OTFjOC4yNzkgMCAxNC45OTktNi43MiAxNC45OTktMTQuOTk5di0xNC45OTljLS4wMDEtMzMuOTM4LTE4LjY2OC02My45MTYtNDYuNTk4LTc5LjYzNXptLTQzLjM5Ny03Mi4zNTVjMTYuMjU5IDAgMjkuOTk4IDE0LjE5OSAyOS45OTggMzAuOTk4IDAgMTYuNTM5LTEzLjQ1OSAyOS45OTgtMjkuOTk4IDI5Ljk5OC0xNi43OTkgMC0zMC45OTgtMTMuNzM5LTMwLjk5OC0yOS45OTggMC0xNi41MDkgMTQuNDg5LTMwLjk5OCAzMC45OTgtMzAuOTk4em0tNjAuOTk2IDE1MS45OWMwLTMzLjA2OCAyNy45MjgtNjAuOTk2IDYwLjk5Ni02MC45OTYgMzMuMDc4IDAgNTkuOTk2IDI3LjM1OCA1OS45OTYgNjAuOTk2SDIxMC45OTJ6IiAvPjwvc3ZnPgo=";
    },
    18486: (M) => {
      "use strict";
      M.exports =
        "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTI4IDEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMzEuNjQ4IDQwSDEyYTQgNCAwIDAxMC04aDE5LjY0OGEyOC4wNTggMjguMDU4IDAgMDEyMi43ODUgMTEuNzI1bDQuNjUxIDYuNTExLTQuOTE2IDYuODgyLTYuMjQ1LTguNzQzQTIwLjAzOCAyMC4wMzggMCAwMDMxLjY0OCA0MHptODcuMTggNDkuMTcybC0xNi0xNmMtMS41NjMtMS41NjMtNC4wOTQtMS41NjMtNS42NTYgMHMtMS41NjMgNC4wOTQgMCA1LjY1NkwxMDYuMzQ0IDg4aC05Ljk5MmEyMC4wNCAyMC4wNCAwIDAxLTE2LjI3NS04LjM3NWwtNi4yNDUtOC43NDMtNC45MTYgNi44ODIgNC42NTEgNi41MTFBMjguMDU2IDI4LjA1NiAwIDAwOTYuMzUyIDk2aDkuOTkybC05LjE3MiA5LjE3MmEzLjk5NyAzLjk5NyAwIDAwMCA1LjY1NmMuNzgxLjc4MSAxLjgwNSAxLjE3MiAyLjgyOCAxLjE3MnMyLjA0Ny0uMzkxIDIuODI4LTEuMTcybDE2LTE2YTMuOTk3IDMuOTk3IDAgMDAwLTUuNjU2em0wLTU2bC0xNi0xNmMtMS41NjMtMS41NjMtNC4wOTQtMS41NjMtNS42NTYgMHMtMS41NjMgNC4wOTQgMCA1LjY1NkwxMDYuMzQ0IDMyaC05Ljk5MmEyOC4wNiAyOC4wNiAwIDAwLTIyLjc4NyAxMS43MjdMNDcuOTI2IDc5LjYyM0EyMC4wNDQgMjAuMDQ0IDAgMDEzMS42NDggODhIMTJhNCA0IDAgMDAwIDhoMTkuNjQ4YTI4LjA2IDI4LjA2IDAgMDAyMi43ODctMTEuNzI3bDI1LjYzOS0zNS44OTZBMjAuMDQ0IDIwLjA0NCAwIDAxOTYuMzUyIDQwaDkuOTkybC05LjE3MiA5LjE3MmEzLjk5NyAzLjk5NyAwIDAwMCA1LjY1NkM5Ny45NTMgNTUuNjA5IDk4Ljk3NyA1NiAxMDAgNTZzMi4wNDctLjM5MSAyLjgyOC0xLjE3MmwxNi0xNmEzLjk5NyAzLjk5NyAwIDAwMC01LjY1NnoiIC8+PC9zdmc+Cg==";
    },
    48290: (M) => {
      "use strict";
      M.exports =
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMTkuMTUgMjE5LjE1Ij48cGF0aCBkPSJNMTA5LjU3NSAwQzQ5LjE1NiAwIC4wMDIgNDkuMTU1LjAwMiAxMDkuNTc2YzAgNjAuNDE5IDQ5LjE1NCAxMDkuNTc0IDEwOS41NzMgMTA5LjU3NHMxMDkuNTczLTQ5LjE1NSAxMDkuNTczLTEwOS41NzRDMjE5LjE0OCA0OS4xNTUgMTY5Ljk5NCAwIDEwOS41NzUgMHptMCAyMDQuMTVjLTUyLjE0OCAwLTk0LjU3My00Mi40MjYtOTQuNTczLTk0LjU3NEMxNS4wMDIgNTcuNDI3IDU3LjQyNyAxNSAxMDkuNTc1IDE1czk0LjU3MyA0Mi40MjcgOTQuNTczIDk0LjU3NmMwIDUyLjE0OS00Mi40MjUgOTQuNTc0LTk0LjU3MyA5NC41NzR6IiAvPjxwYXRoIGQ9Ik0xMjQuMjkgNjIuNjQ1YTcuNTAxIDcuNTAxIDAgMDAtMTAuNjA2IDEwLjYwN2wyOC44MjEgMjguODItODMuNDU3LjAwOGE3LjUgNy41IDAgMTAwIDE1bDgzLjQ2LS4wMDgtMjguODI3IDI4LjgyNWE3LjUgNy41IDAgMDAwIDEwLjYwNiA3LjQ3NCA3LjQ3NCAwIDAwNS4zMDMgMi4xOTcgNy40NzcgNy40NzcgMCAwMDUuMzAzLTIuMTk2bDQxLjYyOS00MS42MjdhNy41IDcuNSAwIDAwMC0xMC42MDhMMTI0LjI5IDYyLjY0NXoiIC8+PC9zdmc+Cg==";
    }
  }
]);
