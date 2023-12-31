"use strict";
(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [438],
  {
    90438: (M, z, T) => {
      T.r(z), T.d(z, { default: () => N });
      var L = function () {
        var M = this,
          z = M._self._c;
        return z(
          "upsell",
          M._b(
            {
              attrs: { type: "notes" },
              scopedSlots: M._u([
                {
                  key: "title",
                  fn: function () {
                    return [M._v("Notes")];
                  },
                  proxy: !0
                },
                {
                  key: "description",
                  fn: function () {
                    return [M._v("Create, edit, and save notes in your new tab.")];
                  },
                  proxy: !0
                },
                {
                  key: "body",
                  fn: function () {
                    return [
                      z("div", { staticClass: "content" }, [
                        z("div", { staticClass: "demo" }, [
                          z("img", { attrs: { src: "https://az814671.vo.msecnd.net/blogimages/d9447591-5fa0-453f-883e-112bd9d6470e" } }),
                          M._v(" "),
                          z("div", { staticClass: "fun-fact" }, [
                            z("strong", [M._v("Fun fact:")]),
                            M._v(
                              "\n\t\t\t\t\tIn a recent study, 84% of daily Momentum Plus users reported experiencing less anxiety and burnout.\n\t\t\t\t"
                            )
                          ])
                        ]),
                        M._v(" "),
                        z("ul", { staticClass: "features" }, [
                          z(
                            "li",
                            [
                              z("inline-svg", { staticClass: "feature-icon", attrs: { src: T(2963) } }),
                              M._v(" "),
                              z("div", { staticClass: "feature-title" }, [M._v("AI power up")]),
                              M._v(" "),
                              z("div", { staticClass: "feature-desc" }, [
                                M._v(
                                  "Generate prompts. Outline, expand and improve your writing. Proofread everything. Whatever you‘re working on, Momentum Notes seamlessly plugs in and helps you create your best work."
                                )
                              ])
                            ],
                            1
                          ),
                          M._v(" "),
                          z(
                            "li",
                            [
                              z("inline-svg", { staticClass: "feature-icon", attrs: { src: T(10499) } }),
                              M._v(" "),
                              z("div", { staticClass: "feature-title" }, [M._v("Second brain functionality")]),
                              M._v(" "),
                              z("div", { staticClass: "feature-desc" }, [
                                M._v("Cross-link your notes to evolve your ideas and build a personal knowledge system effortlessly.")
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
      L._withStripped = !0;
      const j = {
          name: "NotesUpsell",
          components: { Upsell: T(5195).Z },
          props: {
            eventSource: { type: String, default: "" },
            plans: { type: Object, default: () => ({}) },
            sales: { type: Object, default: () => ({}) }
          }
        },
        N = (0, T(51900).Z)(j, L, [], !1, null, null, null).exports;
    },
    10499: (M) => {
      M.exports =
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9ImN1cnJlbnRDb2xvciIgdmlld0JveD0iMCAwIDUxMiA1MTIiPjxkZWZzPjxjbGlwUGF0aCBpZD0iYSI+PHJlY3Qgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiLz48L2NsaXBQYXRoPjwvZGVmcz48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEwMC4zMjggODAuODc4QzEwMC4zMjggMzYuMjEgMTM2LjUzOCAwIDE4MS4yMDYgMHM4MC44NzggMzYuMjEgODAuODc4IDgwLjg3OHYxMi4zNjZoNzIuOTE0bDE1Ljk5Ny0zNy4xOTVBMTAgMTAgMCAwIDEgMzYwLjE4MSA1MGg0NS4yMzNjNC4zOS0xNi4xMzUgMTkuMTQ0LTI4IDM2LjY3LTI4IDIwLjk4NyAwIDM4IDE3LjAxMyAzOCAzOHMtMTcuMDEzIDM4LTM4IDM4Yy0xNy41MjYgMC0zMi4yOC0xMS44NjUtMzYuNjctMjhoLTM4LjY0OGwtMTUuOTk3IDM3LjE5NWExMCAxMCAwIDAgMS05LjE4NyA2LjA0OWgtNzkuNDk4djUxLjI3NGg4OS40MjdjNC4zOS0xNi4xMzUgMTkuMTQ0LTI4IDM2LjY3LTI4IDIwLjk4NyAwIDM4IDE3LjAxMyAzOCAzOHMtMTcuMDEzIDM4LTM4IDM4Yy0xNy41MjYgMC0zMi4yOC0xMS44NjUtMzYuNjctMjhoLTg5LjQyN1YyNDZoMTcxLjMzYzQuMzktMTYuMTM1IDE5LjE0NC0yOCAzNi42Ny0yOCAyMC45ODcgMCAzOCAxNy4wMTMgMzggMzhzLTE3LjAxMyAzOC0zOCAzOGMtMTcuNTI2IDAtMzIuMjgtMTEuODY1LTM2LjY3LTI4aC0xNzEuMzN2NTYuNjMyaDg5LjQyN2M0LjM5LTE2LjEzNSAxOS4xNDQtMjggMzYuNjctMjggMjAuOTg3IDAgMzggMTcuMDEzIDM4IDM4cy0xNy4wMTMgMzgtMzggMzhjLTE3LjUyNiAwLTMyLjI4LTExLjg2NS0zNi42Ny0yOGgtODkuNDI3djUxLjI3NGg3OS40OThhMTAgMTAgMCAwIDEgOS4xODcgNi4wNDlsMTUuOTk3IDM3LjE5NWgzOC42NDhjNC4zOS0xNi4xMzUgMTkuMTQ0LTI4IDM2LjY3LTI4IDIwLjk4NyAwIDM4IDE3LjAxMyAzOCAzOHMtMTcuMDEzIDM4LTM4IDM4Yy0xNy41MjYgMC0zMi4yOC0xMS44NjUtMzYuNjctMjhoLTQ1LjIzM2ExMCAxMCAwIDAgMS05LjE4Ni02LjA0OWwtMTUuOTk3LTM3LjE5NWgtNzIuOTE0djExLjEwMWMwIDQ4LjA0Ni0zOC45NDggODYuOTk0LTg2Ljk5NCA4Ni45OTQtNDIuNjg4IDAtNzguMTk0LTMwLjc0Ny04NS41ODItNzEuMzAyYTY4LjA4IDY4LjA4IDAgMCAxLTcuMzMyLjM5NWMtMzcuMjUyIDAtNjcuNDUtMzAuMTk5LTY3LjQ1LTY3LjQ1MWE2Ny4xOTYgNjcuMTk2IDAgMCAxIDEzLjY4LTQwLjcyOUE5MS43ODggOTEuNzg4IDAgMCAxIDQuOTggMzAyLjUzYy0yLjM4Mi00Ljk4Mi0uMjc0LTEwLjk1MyA0LjcwOS0xMy4zMzUgNC45ODMtMi4zODIgMTAuOTUzLS4yNzQgMTMuMzM1IDQuNzA5IDEwLjIzMyAyMS40MDQgMzAuODc5IDM3LjIwMiA1Ni4xNDIgNDAuMTQxIDUuNDg2LjYzOCA5LjQxNiA1LjYwMyA4Ljc3NyAxMS4wODgtLjYzOCA1LjQ4Ni01LjYwMiA5LjQxNi0xMS4wODggOC43NzgtMTEuNDY1LTEuMzM0LTIyLjE4NC00LjczNy0zMS44MjktOS43OTJhNDcuMjA2IDQ3LjIwNiAwIDAgMC0xMC4zIDI5LjUyNGMwIDI2LjIwNiAyMS4yNDQgNDcuNDUxIDQ3LjQ1IDQ3LjQ1MSAyLjA0NCAwIDQuMDU0LS4xMjkgNi4wMjQtLjM3OCAxLjE3Ny0yNC4yMTEgMTIuMjYtNDUuODMgMjkuMjUzLTYwLjg3IDQuMTM1LTMuNjYxIDEwLjQ1NS0zLjI3NSAxNC4xMTUuODYgMy42NjEgNC4xMzYgMy4yNzYgMTAuNDU2LS44NiAxNC4xMTYtMTMuODgzIDEyLjI4OS0yMi42MTIgMzAuMjExLTIyLjYxMiA1MC4xODUgMCAzNi45OTkgMjkuOTk0IDY2Ljk5NCA2Ni45OTQgNjYuOTk0czY2Ljk5NC0yOS45OTQgNjYuOTk0LTY2Ljk5NFY4MC44NzhjMC0zMy42MjItMjcuMjU2LTYwLjg3OC02MC44NzgtNjAuODc4cy02MC44NzggMjcuMjU2LTYwLjg3OCA2MC44NzhjMCAxOC4xNSA3LjkzMSAzNC40MzYgMjAuNTQ4IDQ1LjYwNCA0LjEzNiAzLjY2MSA0LjUyMSA5Ljk4Ljg2IDE0LjExNi0zLjY2IDQuMTM1LTkuOTggNC41MjEtMTQuMTE2Ljg2YTgxLjA1IDgxLjA1IDAgMCAxLTIxLjcyOC0zMS4wNDkgNDEuNTk3IDQxLjU5NyAwIDAgMC03Ljc5NC0uNzMyYy0yMi44MjYgMC00MS4zMyAxOC41MDQtNDEuMzMgNDEuMzMgMCA4Ljg4MSAyLjc5MiAxNy4wOTMgNy41NTUgMjMuODI4YTkwLjk4IDkwLjk4IDAgMCAxIDMwLjkwNi0yLjYwOGM1LjUwMi40NzYgOS41NzcgNS4zMjIgOS4xMDEgMTAuODI0LS40NzUgNS41MDMtNS4zMjIgOS41NzctMTAuODI0IDkuMTAyLTI0LjQ1My0yLjExNC00Ny4yNjYgOC40MzktNjEuNzIgMjYuNDA0LTMuNDYxIDQuMzAzLTkuNzU2IDQuOTg0LTE0LjA2IDEuNTIyLTQuMzAyLTMuNDYyLTQuOTg0LTkuNzU3LTEuNTIyLTE0LjA2YTkxLjc5IDkxLjc5IDAgMCAxIDI5LjA3MS0yMy44MzRjLTUuNDAyLTkuMTM2LTguNTA3LTE5LjgwMS04LjUwNy0zMS4xNzggMC0zMy44NzIgMjcuNDU5LTYxLjMzIDYxLjMzLTYxLjMzLjkwOCAwIDEuODExLjAyIDIuNzEuMDU5YTgxLjc1NCA4MS43NTQgMCAwIDEtLjQ4LTguODU4Wk00NDIuMDg0IDQyYy05Ljk0MSAwLTE4IDguMDU5LTE4IDE4czguMDU5IDE4IDE4IDE4IDE4LTguMDU5IDE4LTE4LTguMDU5LTE4LTE4LTE4Wm0tNTMuOTAzIDExNC41MThjLTkuOTQxIDAtMTggOC4wNTktMTggMThzOC4wNTkgMTggMTggMTggMTgtOC4wNTkgMTgtMTgtOC4wNTktMTgtMTgtMThabS0xOTUuOTM3IDE4Ljg0N2M1LjUyMyAwIDEwIDQuNDc3IDEwIDEwIDAgMjQuNDctMTkuODM2IDQ0LjMwNy00NC4zMDcgNDQuMzA3LTUuNTIzIDAtMTAtNC40NzctMTAtMTBzNC40NzctMTAgMTAtMTBjMTMuNDI1IDAgMjQuMzA3LTEwLjg4MyAyNC4zMDctMjQuMzA3IDAtNS41MjMgNC40NzctMTAgMTAtMTBaTTQ3MC4wODQgMjM4Yy05Ljk0MSAwLTE4IDguMDU5LTE4IDE4czguMDU5IDE4IDE4IDE4IDE4LTguMDU5IDE4LTE4LTguMDU5LTE4LTE4LTE4Wm0tMzI5Ljk3OCA2MC41ODljMjMuNTQzLTExLjk4NyA1Mi4zNDQtMi42MiA2NC4zMzEgMjAuOTIyIDExLjk4NyAyMy41NDEgMi42MTkgNTIuMzQzLTIwLjkyMiA2NC4zMy00LjkyMiAyLjUwNi0xMC45NDMuNTQ4LTEzLjQ0OS00LjM3NC0yLjUwNi00LjkyMS0uNTQ4LTEwLjk0MiA0LjM3NC0xMy40NDggMTMuNjk4LTYuOTc1IDE5LjE0OS0yMy43MzUgMTIuMTc0LTM3LjQzNC02Ljk3NS0xMy42OTgtMjMuNzM0LTE5LjE0OS0zNy40MzMtMTIuMTc0LTQuOTIyIDIuNTA2LTEwLjk0My41NDgtMTMuNDQ5LTQuMzc0LTIuNTA2LTQuOTIxLS41NDgtMTAuOTQzIDQuMzc0LTEzLjQ0OFptMjQ4LjA3NSAxNi4wNDNjLTkuOTQxIDAtMTggOC4wNTktMTggMThzOC4wNTkgMTggMTggMTggMTgtOC4wNTkgMTgtMTgtOC4wNTktMTgtMTgtMThabTUzLjkwMyAxMTQuNTE4Yy05Ljk0MSAwLTE4IDguMDU5LTE4IDE4czguMDU5IDE4IDE4IDE4IDE4LTguMDU5IDE4LTE4LTguMDU5LTE4LTE4LTE4WiIvPjwvZz48L3N2Zz4=";
    },
    2963: (M) => {
      M.exports =
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9ImN1cnJlbnRDb2xvciIgdmlld0JveD0iMCAwIDY4MyA2ODMiPjxkZWZzPjxjbGlwUGF0aCBpZD0iYSI+PHJlY3Qgd2lkdGg9IjY4Mi42NjciIGhlaWdodD0iNjgyLjY2NyIvPjwvY2xpcFBhdGg+PC9kZWZzPjxnIGNsaXAtcGF0aD0idXJsKCNhKSI+PHBhdGggZD0iTTM5Ny40NCA1NTYuNzE5YzYuNTE3IDQuMTM1IDguNDQ4IDEyLjc3IDQuMzEzIDE5LjI4Ny00LjEzNCA2LjUxNy0xMi43NjkgOC40NDgtMTkuMjg1IDQuMzEzLTYuNTE3LTQuMTM0LTguNDQ5LTEyLjc2OS00LjMxNS0xOS4yODYgNC4xMzUtNi41MTggMTIuNzctOC40NDggMTkuMjg3LTQuMzE0Wk0zNTUuMDY0IDU2LjEyNmMwIDcuNzE4LTYuMjU2IDEzLjk3NC0xMy45NzQgMTMuOTc0cy0xMy45NzQtNi4yNTYtMTMuOTc0LTEzLjk3NGMwLTcuNzIgNi4yNTYtMTMuOTc1IDEzLjk3NC0xMy45NzVzMTMuOTc0IDYuMjU2IDEzLjk3NCAxMy45NzVabS0xMTcuNzk1IDY4LjY2OGMwIDcuNzE5LTYuMjU2IDEzLjk3NS0xMy45NzQgMTMuOTc1LTcuNzE5IDAtMTMuOTc1LTYuMjU2LTEzLjk3NS0xMy45NzUgMC03LjcxNyA2LjI1Ni0xMy45NzQgMTMuOTc1LTEzLjk3NCA3LjcxOCAwIDEzLjk3NCA2LjI1NyAxMy45NzQgMTMuOTc0Wm0yMzUuNTkgMGMwIDcuNzE5LTYuMjU2IDEzLjk3NS0xMy45NzMgMTMuOTc1LTcuNzIgMC0xMy45NzYtNi4yNTYtMTMuOTc2LTEzLjk3NSAwLTcuNzE3IDYuMjU2LTEzLjk3NCAxMy45NzYtMTMuOTc0IDcuNzE3IDAgMTMuOTczIDYuMjU3IDEzLjk3MyAxMy45NzRaIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMjY1LjY5NyAzNTUuMjM3YTEzLjMzNCAxMy4zMzQgMCAwIDAgMTUuNjc0IDBsNTkuNzE5LTQzLjM4OSA1OS43MTkgNDMuMzg5YTEzLjMzNCAxMy4zMzQgMCAwIDAgMjAuNTE3LTE0LjkwOGwtMjIuODExLTcwLjIwNCA1OS43MTgtNDMuMzg3YTEzLjMzMiAxMy4zMzIgMCAwIDAtNy44MzctMjQuMTJoLTczLjgxNWwtMjIuODExLTcwLjIwNGExMy4zMzIgMTMuMzMyIDAgMCAwLTI1LjM2MSAwbC0yMi44MTEgNzAuMjA0aC03My44MTVhMTMuMzMzIDEzLjMzMyAwIDAgMC03LjgzNyAyNC4xMmw1OS43MTkgNDMuMzg3LTIyLjgxMiA3MC4yMDRhMTMuMzM0IDEzLjMzNCAwIDAgMCA0Ljg0NCAxNC45MDhabTMzLjE5OS00NS42OTUgMTMuMTI0LTQwLjM4OWExMy4zMzMgMTMuMzMzIDAgMCAwLTQuODQ0LTE0LjkwN2wtMzQuMzU3LTI0Ljk2MWg0Mi40NjdjNS43NzYgMCAxMC44OTUtMy43MiAxMi42OC05LjIxNGwxMy4xMjQtNDAuMzg5IDEzLjEyMyA0MC4zODlhMTMuMzMzIDEzLjMzMyAwIDAgMCAxMi42ODEgOS4yMTRoNDIuNDY2bC0zNC4zNTcgMjQuOTYxYTEzLjMzMyAxMy4zMzMgMCAwIDAtNC44NDMgMTQuOTA3bDEzLjEyMyA0MC4zODktMzQuMzU2LTI0Ljk2MmExMy4zMzQgMTMuMzM0IDAgMCAwLTE1LjY3NCAwbC0zNC4zNTcgMjQuOTYyWm0yNS40MTQgMzcyLjE0N2ExMy4zMzQgMTMuMzM0IDAgMCAwIDE1LjQ1Ny01LjcxM2wyOC4yOTEtNDYuMDhjMy44NTMtNi4yNzYgMS44ODktMTQuNDg2LTQuMzg3LTE4LjMzOS02LjA2NC0zLjcyMy0xMy45MzYtMi4wMTQtMTcuOTM2IDMuNzY5bDQuNjg5LTYzLjUzM2ExMy4zMzIgMTMuMzMyIDAgMCAwLTEzLjI5Ny0xNC4zMTVoLTY0LjM4OWw2My43MDMtMTAzLjc2MS00LjY4NiA2My40ODhhMTMuMzM1IDEzLjMzNSAwIDAgMCAxMy4yOTcgMTQuMzE1aDY0LjkxOGMtMS42OCA1LjY0NS41NTEgMTEuOTMyIDUuODA5IDE1LjE2IDYuMjc1IDMuODUzIDE0LjQ4NiAxLjg4OSAxOC4zMzktNC4zODdsMTAuNTE3LTE3LjEzMWExMy4zMzEgMTMuMzMxIDAgMCAwLTExLjM2My0yMC4zMDloLTczLjg2Nmw3LjY2Ni0xMDMuODczYTEzLjMzNCAxMy4zMzQgMCAwIDAtMjQuNjYtNy45NThMMjM3LjU0NCA1NDMuODM2YTEzLjMzNCAxMy4zMzQgMCAwIDAgMTEuMzYzIDIwLjMwOWg3My44NjZsLTcuNjY2IDEwMy44NzNhMTMuMzM1IDEzLjMzNSAwIDAgMCA5LjIwMyAxMy42NzFaTTg2LjU1IDE1Mi4xMDNjNC44NzUgMCA5LjM2LTIuNjYgMTEuNjk5LTYuOTM2bDIwLjEyMy0zNi43OTUgMzYuNzk0LTIwLjEyMmExMy4zMzMgMTMuMzMzIDAgMCAwIDAtMjMuMzk2bC0zNi43OTQtMjAuMTIzTDk4LjI0OSA3LjkzNmExMy4zMzMgMTMuMzMzIDAgMCAwLTIzLjM5NiAwTDU0LjcyOSA0NC43MyAxNy45MzUgNjQuODU1YTEzLjMzMyAxMy4zMzMgMCAwIDAgMCAyMy4zOTZsMzYuNzk0IDIwLjEyMiAyMC4xMjQgMzYuNzk1YTEzLjMzNCAxMy4zMzQgMCAwIDAgMTEuNjk4IDYuOTM2Wm0wLTQxLjEyMUw3Ni4yNTIgOTIuMTVhMTMuMzM0IDEzLjMzNCAwIDAgMC01LjMtNS4zbC0xOC44My0xMC4yOTggMTguODMtMTAuM2ExMy4zMzMgMTMuMzMzIDAgMCAwIDUuMy01LjNsMTAuMy0xOC44MzFMOTYuODUgNjAuOTUyYTEzLjMzMyAxMy4zMzMgMCAwIDAgNS4zIDUuM2wxOC44MzEgMTAuM0wxMDIuMTUgODYuODVhMTMuMzM1IDEzLjMzNSAwIDAgMC01LjMgNS4zbC0xMC4zIDE4LjgzMlptNTA5LjA3OSA0MS4xMjFjNC44NzQgMCA5LjM1OS0yLjY2IDExLjY5OC02LjkzNmwyMC4xMjMtMzYuNzk1IDM2Ljc5NC0yMC4xMjJhMTMuMzMzIDEzLjMzMyAwIDAgMCAwLTIzLjM5Nkw2MjcuNDUgNDQuNzMxIDYwNy4zMjcgNy45MzZhMTMuMzMzIDEzLjMzMyAwIDAgMC0yMy4zOTYgMEw1NjMuODA3IDQ0LjczbC0zNi43OTQgMjAuMTI0YTEzLjMzMyAxMy4zMzMgMCAwIDAgLjAwMSAyMy4zOTZsMzYuNzkzIDIwLjEyMiAyMC4xMjQgMzYuNzk1YTEzLjMzMyAxMy4zMzMgMCAwIDAgMTEuNjk4IDYuOTM2Wm0wLTQxLjEyMUw1ODUuMzMgOTIuMTVhMTMuMzQgMTMuMzQgMCAwIDAtNS4zMDEtNS4zbC0xOC44My0xMC4yOTggMTguODMtMTAuM2ExMy4zMzMgMTMuMzMzIDAgMCAwIDUuMzAxLTUuM2wxMC4yOTktMTguODMxIDEwLjI5OSAxOC44MzFhMTMuMzM3IDEzLjMzNyAwIDAgMCA1LjMgNS4zbDE4LjgzMSAxMC4zLTE4LjgzMSAxMC4yOThhMTMuMzM3IDEzLjMzNyAwIDAgMC01LjMgNS4zbC0xMC4yOTkgMTguODMyWk02Ni4yNTggMzI1LjA4MWMwIDcuMzY0IDUuOTcgMTMuMzM0IDEzLjMzMyAxMy4zMzRoMjUuODUyYzcuMzY0IDAgMTMuMzMzLTUuOTcgMTMuMzMzLTEzLjMzNCAwLTcuMzYzLTUuOTY5LTEzLjMzMy0xMy4zMzMtMTMuMzMzSDc5LjU5MWMtNy4zNjQgMC0xMy4zMzMgNS45Ny0xMy4zMzMgMTMuMzMzWm05MS41MzQgMGMwIDcuMzY0IDUuOTY5IDEzLjMzNCAxMy4zMzMgMTMuMzM0aDI1Ljg1MmM3LjM2NCAwIDEzLjMzMy01Ljk3IDEzLjMzMy0xMy4zMzQgMC03LjM2My01Ljk2OS0xMy4zMzMtMTMuMzMzLTEzLjMzM2gtMjUuODUyYy03LjM2NCAwLTEzLjMzMyA1Ljk3LTEzLjMzMyAxMy4zMzNabS0xOS41MDggNzIuMDI2YzcuMzY0IDAgMTMuMzMzLTUuOTY5IDEzLjMzMy0xMy4zMzN2LTI1Ljg1MmMwLTcuMzY0LTUuOTY5LTEzLjMzMy0xMy4zMzMtMTMuMzMzcy0xMy4zMzQgNS45NjktMTMuMzM0IDEzLjMzM3YyNS44NTJjMCA3LjM2NCA1Ljk3IDEzLjMzMyAxMy4zMzQgMTMuMzMzWm0wLTkxLjUzNGM3LjM2NCAwIDEzLjMzMy01Ljk3IDEzLjMzMy0xMy4zMzN2LTI1Ljg1MWMwLTcuMzY0LTUuOTY5LTEzLjMzMy0xMy4zMzMtMTMuMzMzcy0xMy4zMzQgNS45NjktMTMuMzM0IDEzLjMzM3YyNS44NTFjMCA3LjM2MyA1Ljk3IDEzLjMzMyAxMy4zMzQgMTMuMzMzWm0zMzMuNTg2IDE5LjUwOGMwIDcuMzY0IDUuOTY5IDEzLjMzNCAxMy4zMzMgMTMuMzM0aDI1Ljg1MmM3LjM2NCAwIDEzLjMzMy01Ljk3IDEzLjMzMy0xMy4zMzQgMC03LjM2My01Ljk2OS0xMy4zMzMtMTMuMzMzLTEzLjMzM2gtMjUuODUyYy03LjM2NCAwLTEzLjMzMyA1Ljk3LTEzLjMzMyAxMy4zMzNabTkxLjUzNCAwYzAgNy4zNjQgNS45NjkgMTMuMzM0IDEzLjMzMyAxMy4zMzRoMjUuODUyYzcuMzY0IDAgMTMuMzMzLTUuOTcgMTMuMzMzLTEzLjMzNCAwLTcuMzYzLTUuOTY5LTEzLjMzMy0xMy4zMzMtMTMuMzMzaC0yNS44NTJjLTcuMzY0IDAtMTMuMzMzIDUuOTctMTMuMzMzIDEzLjMzM1ptLTE5LjUwOCA3Mi4wMjZjNy4zNjMgMCAxMy4zMzMtNS45NjkgMTMuMzMzLTEzLjMzM3YtMjUuODUyYzAtNy4zNjQtNS45Ny0xMy4zMzMtMTMuMzMzLTEzLjMzMy03LjM2NCAwLTEzLjMzNCA1Ljk2OS0xMy4zMzQgMTMuMzMzdjI1Ljg1MmMwIDcuMzY0IDUuOTcgMTMuMzMzIDEzLjMzNCAxMy4zMzNabTAtOTEuNTM0YzcuMzYzIDAgMTMuMzMzLTUuOTcgMTMuMzMzLTEzLjMzM3YtMjUuODUxYzAtNy4zNjQtNS45Ny0xMy4zMzMtMTMuMzMzLTEzLjMzMy03LjM2NCAwLTEzLjMzNCA1Ljk2OS0xMy4zMzQgMTMuMzMzdjI1Ljg1MWMwIDcuMzYzIDUuOTcgMTMuMzMzIDEzLjMzNCAxMy4zMzNaIi8+PC9nPjwvc3ZnPg==";
    }
  }
]);
