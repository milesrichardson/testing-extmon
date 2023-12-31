(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [8817],
  {
    98319: (M, N, j) => {
      "use strict";
      j.r(N), j.d(N, { default: () => D });
      var T = j(8081),
        t = j.n(T),
        L = j(23645),
        u = j.n(L)()(t());
      u.push([M.id, "\n/* stylelint-disable */\n", ""]);
      const D = u;
    },
    38817: (M, N, j) => {
      "use strict";
      j.r(N), j.d(N, { default: () => L });
      var T = function () {
        var M = this,
          N = M._self._c;
        return N(
          "upsell",
          M._b(
            {
              attrs: { type: "mantras" },
              scopedSlots: M._u([
                {
                  key: "title",
                  fn: function () {
                    return [M._v("Custom Mantras")];
                  },
                  proxy: !0
                },
                {
                  key: "description",
                  fn: function () {
                    return [M._v("Add your own collection of mantras to Momentum.")];
                  },
                  proxy: !0
                }
              ])
            },
            "upsell",
            M.$props,
            !1
          ),
          [
            M._v(" "),
            M._v(" "),
            [
              N("div", { staticClass: "content" }, [
                N("div", { staticClass: "demo" }, [
                  N("img", { attrs: { src: "https://az814671.vo.msecnd.net/blogimages/0ba295d7-51b2-4171-ad7a-0172c1b895e4" } }),
                  M._v(" "),
                  N("div", { staticClass: "fun-fact" }, [
                    N("strong", [M._v("Fun fact:")]),
                    M._v(
                      "\n\t\t\t\t\tIn a recent study, 95% of customers that use Plus daily report feeling more centered and inspired.\n\t\t\t\t"
                    )
                  ])
                ]),
                M._v(" "),
                N("ul", { staticClass: "features" }, [
                  N(
                    "li",
                    [
                      N("inline-svg", { staticClass: "feature-icon", attrs: { src: j(94288) } }),
                      M._v(" "),
                      N("div", { staticClass: "feature-title" }, [M._v("Curate your favorite mantras")]),
                      M._v(" "),
                      N("div", { staticClass: "feature-desc" }, [
                        M._v("Experience synchronicity with mantras that inspire you to take action and live fully every day.")
                      ])
                    ],
                    1
                  ),
                  M._v(" "),
                  N(
                    "li",
                    [
                      N("inline-svg", { staticClass: "feature-icon", attrs: { src: j(48290) } }),
                      M._v(" "),
                      N("div", { staticClass: "feature-title" }, [M._v("Skip & pin mantras")]),
                      M._v(" "),
                      N("div", { staticClass: "feature-desc" }, [
                        M._v("Depending on the vibe you need, you can skip or pin you mantra of the day.")
                      ])
                    ],
                    1
                  ),
                  M._v(" "),
                  N(
                    "li",
                    [
                      N("inline-svg", { staticClass: "feature-icon", attrs: { src: j(18486) } }),
                      M._v(" "),
                      N("div", { staticClass: "feature-title" }, [M._v("Mix it up")]),
                      M._v(" "),
                      N("div", { staticClass: "feature-desc" }, [M._v("Choose to see your mantras, Momentum's mantras, or both.")])
                    ],
                    1
                  )
                ])
              ])
            ]
          ],
          2
        );
      };
      T._withStripped = !0;
      const t = {
        name: "MantraUpsell",
        components: { Upsell: j(75962).Z },
        props: {
          eventSource: { type: String, default: "" },
          plans: { type: Object, default: () => ({}) },
          sales: { type: Object, default: () => ({}) }
        }
      };
      j(49862);
      const L = (0, j(51900).Z)(t, T, [], !1, null, "20f2d68c", null).exports;
    },
    49862: (M, N, j) => {
      var T = j(98319);
      T.__esModule && (T = T.default),
        "string" == typeof T && (T = [[M.id, T, ""]]),
        T.locals && (M.exports = T.locals),
        (0, j(45346).Z)("7f681221", T, !1, { ssrId: !0 });
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
