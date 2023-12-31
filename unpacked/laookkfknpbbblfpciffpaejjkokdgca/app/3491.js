(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [3491],
  {
    64460: (M, N, j) => {
      "use strict";
      j.r(N), j.d(N, { default: () => A });
      var T = j(8081),
        L = j.n(T),
        D = j(23645),
        t = j.n(D)()(L());
      t.push([M.id, "\n/* stylelint-disable */\n", ""]);
      const A = t;
    },
    3491: (M, N, j) => {
      "use strict";
      j.r(N), j.d(N, { default: () => D });
      var T = function () {
        var M = this,
          N = M._self._c;
        return N(
          "upsell",
          M._b(
            {
              attrs: { type: "pomodoro" },
              scopedSlots: M._u([
                {
                  key: "title",
                  fn: function () {
                    return [M._v("Pomodoro Timer")];
                  },
                  proxy: !0
                },
                {
                  key: "description",
                  fn: function () {
                    return [M._v("Complete more tasks in less time with the power of the Pomodoro Technique ")];
                  },
                  proxy: !0
                },
                {
                  key: "body",
                  fn: function () {
                    return [
                      N("div", { staticClass: "content" }, [
                        N("div", { staticClass: "demo" }, [
                          N("img", { attrs: { src: "https://az814671.vo.msecnd.net/blogimages/501d507d-8fa1-4db8-be58-da219a6c3df6" } }),
                          M._v(" "),
                          N("div", { staticClass: "fun-fact" }, [
                            N("strong", [M._v("Fun fact:")]),
                            M._v(
                              "\n\t\t\t\t\tIn a recent study, 93% of daily Plus users reported completing more tasks each day.\n\t\t\t\t"
                            )
                          ])
                        ]),
                        M._v(" "),
                        N("ul", { staticClass: "features" }, [
                          N(
                            "li",
                            [
                              N("inline-svg", { staticClass: "feature-icon", attrs: { src: j(43366) } }),
                              M._v(" "),
                              N("div", { staticClass: "feature-title" }, [M._v("Deep work")]),
                              M._v(" "),
                              N("div", { staticClass: "feature-desc" }, [
                                M._v("Get into your flow state daily by monotasking in short-focus time intervals with break reminders.")
                              ])
                            ],
                            1
                          ),
                          M._v(" "),
                          N(
                            "li",
                            [
                              N("inline-svg", { staticClass: "feature-icon", attrs: { src: j(78110) } }),
                              M._v(" "),
                              N("div", { staticClass: "feature-title" }, [M._v("Focus stats")]),
                              M._v(" "),
                              N("div", { staticClass: "feature-desc" }, [M._v("See your total focus time today, this week, and all time.")])
                            ],
                            1
                          ),
                          M._v(" "),
                          N(
                            "li",
                            [
                              N("inline-svg", { staticClass: "feature-icon", attrs: { src: j(53748) } }),
                              M._v(" "),
                              N("div", { staticClass: "feature-title" }, [M._v("Customizable timers")]),
                              M._v(" "),
                              N("div", { staticClass: "feature-desc" }, [
                                M._v("Adjust the Focus and Break timers to fit your workflow.\n\t\t\t\t\t")
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
      T._withStripped = !0;
      const L = {
        name: "PomodoroUpsell",
        components: { Upsell: j(5195).Z },
        types: ["focus", "rest"],
        props: {
          eventSource: { type: String, default: "" },
          plans: { type: Object, default: () => ({}) },
          sales: { type: Object, default: () => ({}) }
        }
      };
      j(58650);
      const D = (0, j(51900).Z)(L, T, [], !1, null, "65d8e88a", null).exports;
    },
    58650: (M, N, j) => {
      var T = j(64460);
      T.__esModule && (T = T.default),
        "string" == typeof T && (T = [[M.id, T, ""]]),
        T.locals && (M.exports = T.locals),
        (0, j(45346).Z)("ee276722", T, !1, { ssrId: !0 });
    },
    53748: (M) => {
      "use strict";
      M.exports =
        "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMzEyLjExMiA5NS43MTRsMTAuNTk2LTUuMjk4YzcuNDEtMy43MDUgMTAuNDEzLTEyLjcxNSA2LjcwOC0yMC4xMjUtMy43MDQtNy40MS0xMi43MTMtMTAuNDE0LTIwLjEyNC02LjcwOGwtMzMuNDQ2IDE2LjcyM0MyODYuNjgyIDUxLjI2NCAzMTQuNDM0IDMwIDM0NiAzMGM4LjI4NCAwIDE1LTYuNzE2IDE1LTE1cy02LjcxNi0xNS0xNS0xNWMtNTAuODc2IDAtOTIuMzA4IDM3LjM5OS0xMDIuNTEzIDgzLjk3M2wtNDAuNzc5LTIwLjM5Yy03LjQwOS0zLjcwNS0xNi40MTktLjcwMS0yMC4xMjQgNi43MDgtMy43MDUgNy40MS0uNzAyIDE2LjQxOSA2LjcwOCAyMC4xMjVsMTAuNTk2IDUuMjk4QzgxLjY3NiAxMTEuOTggMCAxODEuNjMyIDAgMzAyYzAgMTQzLjA5OSAxMTQuMjU4IDIxMCAyNTYgMjEwIDE0Mi4yMzMgMCAyNTYtNjcuMjQ1IDI1Ni0yMTAgMC0xMjAuNTk1LTgxLjkyLTE5MC4wNTMtMTk5Ljg4OC0yMDYuMjg2ek0yNTYgNDgyYy0xMjguNDY1IDAtMjA5LjkyOS01NS40NTUtMjIzLjg2MS0xNTBINjF2MTVjMCA4LjI4NCA2LjcxNiAxNSAxNSAxNXMxNS02LjcxNiAxNS0xNXYtMTVoMzB2NDVjMCA4LjI4NCA2LjcxNiAxNSAxNSAxNXMxNS02LjcxNiAxNS0xNXYtNDVoMzB2MTVjMCA4LjI4NCA2LjcxNiAxNSAxNSAxNXMxNS02LjcxNiAxNS0xNXYtMTVoMzB2NDVjMCA4LjI4NCA2LjcxNiAxNSAxNSAxNXMxNS02LjcxNiAxNS0xNXYtNDVoMzB2MTVjMCA4LjI4NCA2LjcxNiAxNSAxNSAxNXMxNS02LjcxNiAxNS0xNXYtMTVoMzB2NDVjMCA4LjI4NCA2LjcxNiAxNSAxNSAxNXMxNS02LjcxNiAxNS0xNXYtNDVoMzB2MTVjMCA4LjI4NCA2LjcxNiAxNSAxNSAxNXMxNS02LjcxNiAxNS0xNXYtMTVoMjguODYxQzQ2NS45MjkgNDI2LjU0NSAzODQuNDY1IDQ4MiAyNTYgNDgyek0zMCAzMDJjMC0xMTIuNzEgODQuNDg2LTE4MCAyMjYtMTgwczIyNiA2Ny4yOSAyMjYgMTgweiIgLz48cGF0aCBkPSJNMjc1LjM5NCAyMTYuMzk0TDI1NiAyMzUuNzg3bC0xOS4zOTQtMTkuMzkzYy01Ljg1Ny01Ljg1OC0xNS4zNTUtNS44NTgtMjEuMjEzIDBzLTUuODU4IDE1LjM1NSAwIDIxLjIxM2wzMCAzMGM1Ljg1NyA1Ljg1OCAxNS4zNTUgNS44NTkgMjEuMjEzIDBsMzAtMzBjNS44NTgtNS44NTggNS44NTgtMTUuMzU1IDAtMjEuMjEzLTUuODU3LTUuODU5LTE1LjM1NS01Ljg1OS0yMS4yMTIgMHoiIC8+PC9zdmc+Cg==";
    },
    43366: (M) => {
      "use strict";
      M.exports =
        "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMzU3LjQzOSAzMDMuNTkyYzEyLjEyOCAxNi45NzggMzEuODIzIDI3LjExMyA1Mi42ODcgMjcuMTEzaDU1LjA1M2MyNC43MTYgMCA0NC44MjUtMjAuMTA4IDQ0LjgyNS00NC44MjVzLTIwLjEwOC00NC44MjUtNDQuODI1LTQ0LjgyNUg0MzEuNTJsLTUxLjI3Ni02NC4wOTVjLTE2Ljg2NC0yMS4wNzktNDEuNDcxLTMzLjc1OS02OC4xOTMtMzUuMzQzIDcuOTc2LTExLjMzNyAxMi42NzgtMjUuMTM0IDEyLjY3OC00MC4wMTZWNjkuNzI3QzMyNC43MjkgMzEuMjggMjkzLjQ0OSAwIDI1NS4wMDIgMHMtNjkuNzI3IDMxLjI4LTY5LjcyNyA2OS43Mjd2MzEuODc1YzAgMTQuODgzIDQuNzAzIDI4LjY4IDEyLjY3NyA0MC4wMTYtMjYuNzIyIDEuNTg0LTUxLjMyOSAxNC4yNjMtNjguMTkzIDM1LjM0M2wtNTEuMjc1IDY0LjA5NUg0NC44MjVDMjAuMTA4IDI0MS4wNTYgMCAyNjEuMTY1IDAgMjg1Ljg4MXMyMC4xMDggNDQuODI1IDQ0LjgyNSA0NC44MjVoNTUuMDUzYzIwLjg2MyAwIDQwLjU1OS0xMC4xMzUgNTIuNjg3LTI3LjExM2w3LjgwNy0xMC45MzF2ODYuMjYxbC0yOS43NTEtOC4yMDdjLTIxLjUyNi01LjkzOC00NC4wNjEtMS41ODUtNjEuODI2IDExLjk0My0xNy43NjYgMTMuNTI3LTI3Ljk1NiAzNC4wOTQtMjcuOTU2IDU2LjQyMyAwIDM5LjEwNyAzMS44MTQgNzAuOTIxIDcwLjkyMSA3MC45MjFoMjg2LjQ4MWMzOS4xMDYgMCA3MC45Mi0zMS44MTUgNzAuOTItNzAuOTIxIDAtMjIuMzMtMTAuMTg5LTQyLjg5NS0yNy45NTUtNTYuNDI0cy00MC4zMDMtMTcuODgyLTYxLjgyNy0xMS45NDNsLTI5Ljc1MSA4LjIwN3YtODYuMjZ6TTIxNS4xNTggNjkuNzI3YzAtMjEuOTcgMTcuODc0LTM5Ljg0NCAzOS44NDQtMzkuODQ0czM5Ljg0NCAxNy44NzQgMzkuODQ0IDM5Ljg0NHYzMS44NzVjMCAyMS45Ny0xNy44NzQgMzkuODQ0LTM5Ljg0NCAzOS44NDRzLTM5Ljg0NC0xNy44NzQtMzkuODQ0LTM5Ljg0NHpNMzE2LjM3NiA0ODAuMTJIMTExLjc2MWMtMjIuNjI5IDAtNDEuMDM4LTE4LjQxLTQxLjAzOC00MS4wMzggMC0xMi45MjEgNS44OTYtMjQuODIyIDE2LjE3Ni0zMi42NSA3LjI2Ny01LjUzMyAxNS45MTEtOC40MTMgMjQuNzU0LTguNDEzIDMuNjY4IDAgNy4zNjkuNDk2IDExLjAyMSAxLjUwM2wxOTcuMjQ4IDU0LjQxM2M1Ljc2MiAxLjU5IDkuNzg3IDYuODc0IDkuNzg3IDEyLjg1MyAwIDcuMzUyLTUuOTggMTMuMzMyLTEzLjMzMyAxMy4zMzJ6bTcwLjk1My04MC41OThjMTIuNDU3LTMuNDM4IDI1LjQ5Ni0uOTE2IDM1Ljc3NiA2LjkxMSAxMC4yOCA3LjgyOCAxNi4xNzYgMTkuNzI5IDE2LjE3NiAzMi42NSAwIDIyLjYyOC0xOC40MDkgNDEuMDM3LTQxLjAzOCA0MS4wMzdoLTQwLjc2NGE0My4wMjUgNDMuMDI1IDAgMDAyLjExNS0xMy4zMzNjMC0xOS4zNzYtMTMuMDQ1LTM2LjUwNy0zMS43MjQtNDEuNjZsLTE2LjY4Mi00LjYwMnptLTEzMi4zMjggNS41MDRsLTY0Ljc0Ni0xNy44NjFWMjQ2LjAzN2ExNC45NDMgMTQuOTQzIDAgMDAtMjcuMS04LjY4NWwtMzQuOTA3IDQ4Ljg3MWEzNC45MzMgMzQuOTMzIDAgMDEtMjguMzcgMTQuNkg0NC44MjVjLTguMjM5IDAtMTQuOTQyLTYuNzAzLTE0Ljk0Mi0xNC45NDFzNi43MDMtMTQuOTQxIDE0Ljk0Mi0xNC45NDFoNDAuODRjNC41MzkgMCA4LjgzMi0yLjA2MyAxMS42NjctNS42MDhsNTUuNzYyLTY5LjcwMmMxMi4zNTUtMTUuNDQzIDMwLjc4Mi0yNC4zIDUwLjU1OS0yNC4zaDEwMi42OThjMTkuNzc3IDAgMzguMjA0IDguODU3IDUwLjU1OSAyNC4zbDU1Ljc2MiA2OS43MDNhMTQuOTM4IDE0LjkzOCAwIDAwMTEuNjY3IDUuNjA4aDQwLjg0YzguMjM5IDAgMTQuOTQyIDYuNzAzIDE0Ljk0MiAxNC45NDFzLTYuNzAzIDE0Ljk0MS0xNC45NDIgMTQuOTQxaC01NS4wNTNhMzQuOTMzIDM0LjkzMyAwIDAxLTI4LjM3LTE0LjZsLTM0LjkwNy00OC44NzFhMTQuOTQyIDE0Ljk0MiAwIDAwLTI3LjEgOC42ODR2MTQxLjEyOHoiIC8+PC9zdmc+Cg==";
    },
    78110: (M) => {
      "use strict";
      M.exports =
        "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNDY3IDQ1YzAtMjQuODEzLTIwLjE4Ny00NS00NS00NXMtNDUgMjAuMTg3LTQ1IDQ1IDIwLjE4NyA0NSA0NSA0NSA0NS0yMC4xODcgNDUtNDV6bS00NSAxNWMtOC4yNzEgMC0xNS02LjcyOS0xNS0xNXM2LjcyOS0xNSAxNS0xNSAxNSA2LjcyOSAxNSAxNS02LjcyOSAxNS0xNSAxNXpNMzYyIDIxMGgxMjBjOC4yODQgMCAxNS02LjcxNiAxNS0xNXYtMzBjMC00MS4zNTUtMzMuNjQ1LTc1LTc1LTc1cy03NSAzMy42NDUtNzUgNzV2MzBjMCA4LjI4NCA2LjcxNiAxNSAxNSAxNXptMTUtNDVjMC0yNC44MTMgMjAuMTg3LTQ1IDQ1LTQ1czQ1IDIwLjE4NyA0NSA0NXYxNWgtOTB2LTE1ek00OTcgNDgySDMwVjE2YzAtOC4yODQtNi43MTYtMTUtMTUtMTVTMCA3LjcxNiAwIDE2djQ4MWMwIDguMjg0IDYuNzE2IDE1IDE1IDE1aDQ4MmM4LjI4NCAwIDE1LTYuNzE2IDE1LTE1cy02LjcxNi0xNS0xNS0xNXoiIC8+PHBhdGggZD0iTTc2IDQ1MWg5MGM4LjI4NCAwIDE1LTYuNzE2IDE1LTE1di05MGMwLTguMjg0LTYuNzE2LTE1LTE1LTE1SDc2Yy04LjI4NCAwLTE1IDYuNzE2LTE1IDE1djkwYzAgOC4yODQgNi43MTYgMTUgMTUgMTV6bTE1LTkwaDYwdjYwSDkxdi02MHpNMzE2IDI3MWgtOTBjLTguMjg0IDAtMTUgNi43MTYtMTUgMTV2MTUwYzAgOC4yODQgNi43MTYgMTUgMTUgMTVoOTBjOC4yODQgMCAxNS02LjcxNiAxNS0xNVYyODZjMC04LjI4NC02LjcxNi0xNS0xNS0xNXptLTE1IDE1MGgtNjBWMzAxaDYwdjEyMHpNMzc3IDI0MWMtOC4yODQgMC0xNSA2LjcxNi0xNSAxNXYxODBjMCA4LjI4NCA2LjcxNiAxNSAxNSAxNWg5MGM4LjI4NCAwIDE1LTYuNzE2IDE1LTE1VjI1NmMwLTguMjg0LTYuNzE2LTE1LTE1LTE1aC05MHptNzUgMTgwaC02MFYyNzFoNjB2MTUwek03NiAzMDFjMy44MzkgMCA3LjY3OC0xLjQ2NCAxMC42MDYtNC4zOTRMMTY2IDIxNy4yMTNsMTkuMzk0IDE5LjM5M2M1Ljg1NyA1Ljg1OCAxNS4zNTUgNS44NTggMjEuMjEzIDBMMzAxIDE0Mi4yMTNWMTY2YzAgOC4yODQgNi43MTYgMTUgMTUgMTVzMTUtNi43MTYgMTUtMTV2LTYwbC0uMDAyLS4wNDRDMzMwLjk3MyA5Ny41OCAzMjQuMTE5IDkxIDMxNS45OTUgOTFIMjU2Yy04LjI4NCAwLTE1IDYuNzE2LTE1IDE1czYuNzE2IDE1IDE1IDE1aDIzLjc4N0wxOTYgMjA0Ljc4N2wtMTkuMzk0LTE5LjM5M2MtNS44NTctNS44NTgtMTUuMzU1LTUuODU4LTIxLjIxMyAwbC05MCA5MGMtNS44NTggNS44NTgtNS44NTggMTUuMzU1IDAgMjEuMjEzQTE0Ljk1MyAxNC45NTMgMCAwMDc2IDMwMXoiIC8+PC9zdmc+Cg==";
    }
  }
]);
