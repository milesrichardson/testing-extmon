"use strict";
(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [4566],
  {
    74566: (M, N, T) => {
      T.r(N), T.d(N, { default: () => L });
      var j = function () {
        var M = this,
          N = M._self._c;
        return N(
          "upsell",
          M._b(
            {
              attrs: { type: "weather" },
              scopedSlots: M._u([
                {
                  key: "title",
                  fn: function () {
                    return [M._v("Enhanced Weather")];
                  },
                  proxy: !0
                },
                {
                  key: "description",
                  fn: function () {
                    return [M._v("Get more detailed weather updates in Momentum.")];
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
              N("div", { staticClass: "content row" }, [
                N("div", { staticClass: "demo" }, [
                  N("img", { attrs: { src: "https://az814671.vo.msecnd.net/blogimages/aeb0d63f-65eb-4a37-88b3-81ec47cbe9cf" } })
                ]),
                M._v(" "),
                N("ul", { staticClass: "features" }, [
                  N(
                    "li",
                    [
                      N("inline-svg", { staticClass: "feature-icon", attrs: { src: T(33213) } }),
                      M._v(" "),
                      N("div", { staticClass: "feature-title" }, [M._v("Detailed weather data")]),
                      M._v(" "),
                      N("div", { staticClass: "feature-desc" }, [M._v("See the air quality, chance of rain/snow, UV index, and more!")])
                    ],
                    1
                  ),
                  M._v(" "),
                  N(
                    "li",
                    [
                      N("inline-svg", { staticClass: "feature-icon", attrs: { src: T(49969) } }),
                      M._v(" "),
                      N("div", { staticClass: "feature-title" }, [M._v("Hourly forecast")]),
                      M._v(" "),
                      N("div", { staticClass: "feature-desc" }, [M._v("Plan ahead with a detailed 12-hour weather forecast.")])
                    ],
                    1
                  ),
                  M._v(" "),
                  N(
                    "li",
                    [
                      N("inline-svg", { staticClass: "feature-icon", attrs: { src: T(81477) } }),
                      M._v(" "),
                      N("div", { staticClass: "feature-title" }, [M._v("Global weather database")]),
                      M._v(" "),
                      N("div", { staticClass: "feature-desc" }, [M._v("Check the current weather conditions anywhere in the world.")])
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
      j._withStripped = !0;
      const D = {
          name: "WeatherUpsell",
          components: { Upsell: T(5195).Z },
          props: {
            eventSource: { type: String, default: "" },
            plans: { type: Object, default: () => ({}) },
            sales: { type: Object, default: () => ({}) }
          }
        },
        L = (0, T(51900).Z)(D, j, [], !1, null, null, null).exports;
    },
    81477: (M) => {
      M.exports =
        "data:image/svg+xml;base64,PHN2ZyAgdmlld0JveD0iMCAwIDUxMiA1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE0OS45ODQgMzQ3YzAtMTkuNTU1LTEyLjU0MS0zNi4yMjgtMzAtNDIuNDJWNzZjMC04LjI4NC02LjcxNi0xNS0xNS0xNXMtMTUgNi43MTYtMTUgMTV2MjI4LjU4Yy0xNy40NTkgNi4xOTItMzAgMjIuODY1LTMwIDQyLjQyIDAgMjQuODEzIDIwLjE4NyA0NSA0NSA0NXM0NS0yMC4xODcgNDUtNDV6bS00NSAxNWMtOC4yNzEgMC0xNS02LjcyOS0xNS0xNXM2LjcyOS0xNSAxNS0xNSAxNSA2LjcyOSAxNSAxNS02LjcyOSAxNS0xNSAxNXoiIC8+PHBhdGggZD0iTTI4NC4wNyA2Mi4wMjhjLS4xMjguMDAyLS4yNTYtLjAwMi0uMzgzLjAwMy0zNi4zMzkuNTItNzIuMjMgOS42MDktMTAzLjcwMyAyNi4wMzhWNzZjMC00MS40NTktMzMuNTM1LTc2LTc1LTc2LTQxLjQ1OCAwLTc1IDM0LjUzNS03NSA3NnYxOTcuOTc1QzYuMzAyIDI5OC4yMDgtNC4yNjUgMzMxLjk0OSAxLjYwOSAzNjUuNTcxYzguMTM0IDQ2LjU1MyA0OS43NzMgODYuNDAyIDEwMy4xNjggODYuNDAyIDguMjI0IDAgMTYuMzU3LS45NjggMjQuMjU4LTIuODJDMTcwLjc5NSA0ODkuMTg5IDIyNy44MzQgNTEyIDI4Ni45ODQgNTEyYzYwLjEgMCAxMTYuNjAyLTIzLjQwNCAxNTkuMDk5LTY1LjkwMSAzOS43Mi0zOS43MiA2Mi43NTYtOTEuNjc3IDY1LjU5Ny0xNDcuMzY5bC4wMTEtLjE3NWMuMTkzLTMuODM1LjI5My03LjY4Ny4yOTMtMTEuNTU1IDAtMTI1LjI4LTEwMi4xNDktMjI2LjU1My0yMjcuOTE0LTIyNC45NzJ6TTMxLjE2MiAzNjAuNDA4Yy00LjU0OC0yNi4wMzIgNC4xNDktNTEuMTQ4IDIzLjg2Mi02OC45MDdhMTUuMDAxIDE1LjAwMSAwIDAwNC45Ni0xMS4xNDVWNzZjMC0yNC45MzUgMjAuNjA3LTQ2IDQ1LTQ2czQ1IDIxLjA2NSA0NSA0NnYyMDQuMzU3YzAgNC4yNSAxLjgwMyA4LjMgNC45NiAxMS4xNDUgMTYuMTQ3IDE0LjU0NyAyNS4wNCAzNC4yNTYgMjUuMDQgNTUuNDk5IDAgNDEuNTY2LTMzLjg4MiA3NS4wOTgtNzUgNzUuMDk5LTM1Ljg1LjAwMS02Ny42MTMtMjYuMTU1LTczLjgyMi02MS42OTJ6TTIwOS45ODQgMzQ3YzAtMjcuMTU1LTEwLjg1Ni01My40MDEtMzAtNzMuMDIxdi0xNTEuMzFjMjYuMzI0LTE2Ljc1NiA1Ny4zMjUtMjcuMDkxIDg5LjM0My0yOS44ODkgMy4xNjcgMjAuNDE5IDE3Ljg3NSAzMy4xOTggMjkuMjcyIDQzLjA5IDEyLjI1IDEwLjYzMSAxNy41NDggMTYuMTI2IDE2Ljg3NiAyNC4xMjktLjc3NSA5LjIyOS0xMC4xOTQgMTUuMjY3LTI1LjQ5OCAyNC4zNTMtMTguNjYxIDExLjA3OS00MS44ODQgMjQuODY2LTQ4LjE0IDU0LjU1Ni00LjY4IDIyLjIxMiAxLjY5MSA0MS41MTcgMTcuOTQyIDU0LjM1NyAyMy42NzYgMTguNzA5IDYyLjE1NSAxOC40MDQgODUuNjc4IDcuMyAzMC40MjUtMTQuMzYzIDM3LjY1My02LjY2IDUwLjc2OSA3LjMyOSAxMi43NzEgMTMuNjIgMjUuMTUxIDI0LjY3OCA0Ni45NjcgMjQuNjc4IDEwLjQ1NCAwIDIyLjAzNy0yLjc0IDM1LjIxMi04LjM1Mi01LjQ4NCAyOC4yNTgtMTcuMDg0IDU0LjM1NS0zMy4zNyA3Ni44NTUtMjAuNjI0LS4zMzctMjUuNTIzLTkuMjM2LTMyLjA3Mi0yMS4xMjktNi44MTktMTIuMzg0LTE3LjExOS0zMS4xMDItNDYuMzA2LTI2LjQwMS0yMi4wNTUgMy41NTEtMzEuNzEzIDIxLjI1My0zOS40NzMgMzUuNDc4LTQuMzgzIDguMDM0LTguNTIzIDE1LjYyMy0xMy42NzUgMTguODA3LTUuMDQ2IDMuMTE3LTE1Ljk4OCAxLjg2NC0yNS42NDQuNzU2LTE1LjYyNi0xLjc5MS0zNS4wNzUtNC4wMjEtNDguNTgzIDkuNDg3LTEwLjgwMyAxMC44MDItMTIuODgzIDI4LjI5LTYuMzYgNTMuNDYuMjg5IDEuMTE1LjU4OSAyLjIxNy44OTYgMy4zMDUtMjcuMTYxLTcuNDM4LTUyLjQ3My0yMC40OTgtNzMuOTU2LTM4LjM0NSAzMS4zMTEtMTkuMTgyIDUwLjEyMi01My4wNDIgNTAuMTIyLTg5LjQ5M3ptNTcuNTA4IDEzNC4wNDVjLTEuNjg2LTQuMzkyLTMuNzU3LTEwLjI5Ny01LjQyMi0xNi42MzctNC41NDUtMTcuMy0yLjM5NC0yNC4yMjEtMS41NzMtMjUuMTIzIDMuMjY3LTMuMjY3IDE0LjczNy0xLjk1MiAyMy45NTItLjg5NSAxNC41MDEgMS42NjMgMzAuOTM2IDMuNTQ2IDQ0LjgzMy01LjA0MiAxMS45MTEtNy4zNjEgMTguNDYtMTkuMzY3IDI0LjIzOS0yOS45NTggNy4wNTEtMTIuOTI1IDExLjExNi0xOS4xMzQgMTcuOTA2LTIwLjIyOCA3Ljg1NC0xLjI2NCA4LjcxMS0uNjM0IDE1LjI1NyAxMS4yNTQgNi4xMzYgMTEuMTQ0IDE0LjUyOCAyNi4zNDYgMzUuMzI4IDMzLjEzMkMzODYuOTQ2IDQ2MS4yNSAzMzkuMzQ1IDQ4MiAyODYuOTg0IDQ4MmEyMDAuODYgMjAwLjg2IDAgMDEtMTkuNDkyLS45NTV6bTIxNC40NjYtMTkyLjAxNmMtMTguNzAzIDEwLjM4Ny0zMy4xNDkgMTQuODQtNDIuOTc0IDEzLjIxMS03LjgxMy0xLjI5NC0xMy4wMjEtNi40OTItMjAuODcyLTE0Ljg2Ni0xNC44OS0xNS44NzktMzUuMjc3LTM3LjYyOC04NS40NjEtMTMuOTM4LTE0LjY4IDYuOTI5LTQwLjU3OSA3LjExLTU0LjI3Mi0zLjcxLTQuNTU1LTMuNTk5LTEwLjI1NC0xMC4wNjctNy4xODYtMjQuNjMzIDMuNTQtMTYuODAyIDE3LjcwMS0yNS4yMDkgMzQuMDk5LTM0Ljk0NSAxNy43OTgtMTAuNTY2IDM3Ljk3MS0yMi41NDIgNDAuMDc4LTQ3LjYzOCAyLjAxOC0yNC4wMjEtMTQuMTMxLTM4LjAzNi0yNy4xMDYtNDkuMjk3LTkuMTkzLTcuOTc4LTE1LjQ2OC0xMy43NzMtMTguMTE4LTIwLjc1OEM0MDEuNTUzIDk5LjI0NiA0ODEuOTg0IDE4My45IDQ4MS45ODQgMjg3YzAgLjY3OC0uMDE5IDEuMzUzLS4wMjYgMi4wMjl6IiAvPjwvc3ZnPgo=";
    },
    49969: (M) => {
      M.exports =
        "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNDA3IDBIMTA1QzQ3LjEwMiAwIDAgNDcuMTAyIDAgMTA1djMwMmMwIDU3Ljg5OCA0Ny4xMDIgMTA1IDEwNSAxMDVoMzAyYzU3Ljg5OCAwIDEwNS00Ny4xMDIgMTA1LTEwNVYxMDVDNTEyIDQ3LjEwMiA0NjQuODk4IDAgNDA3IDB6bTc1IDQwN2MwIDQxLjM1NS0zMy42NDUgNzUtNzUgNzVIMTA1Yy00MS4zNTUgMC03NS0zMy42NDUtNzUtNzVWMTA1YzAtNDEuMzU1IDMzLjY0NS03NSA3NS03NWgzMDJjNDEuMzU1IDAgNzUgMzMuNjQ1IDc1IDc1em0wIDAiIC8+PHBhdGggZD0iTTQyMS4yMzggMjE5Ljg0OGgtMjYuMDdhODIuODk4IDgyLjg5OCAwIDAwLTEzLjQ2OS0zMi4zMjhsMTcuODQtMTcuODRjNS44NTYtNS44NiA1Ljg1Ni0xNS4zNTYgMC0yMS4yMTEtNS44Ni01Ljg2LTE1LjM1NS01Ljg2LTIxLjIxNSAwbC0xNy44NjMgMTcuODYzYTgyLjgxNyA4Mi44MTcgMCAwMC0zMi4zMDktMTMuMzc1di0yNS40NDVjMC04LjI4NS02LjcxOC0xNS0xNS0xNS04LjI4NSAwLTE1IDYuNzE1LTE1IDE1djI1LjQ2YTgyLjkxIDgyLjkxIDAgMDAtMzIuMjE4IDEzLjM1NmwtMTcuODY4LTE3Ljg2M2MtNS44NTUtNS44NTYtMTUuMzUxLTUuODU2LTIxLjIxIDAtNS44NiA1Ljg2LTUuODYgMTUuMzU1IDAgMjEuMjE1bDE3Ljg0IDE3LjgzNmE4My4zNTkgODMuMzU5IDAgMDAtOS4wNzEgMTYuOTQ5Yy0zNy4zMjggMS40NDUtNzAuNSAyNC4zNDctODUuMzkgNTguMDA4YTY4LjggNjguOCAwIDAwLTUuOTYyLS4yNThjLTM3Ljc3NyAwLTY4LjUxMSAzMC43MzQtNjguNTExIDY4LjUxNSAwIDM3Ljc5IDMwLjczNCA2OC41MzYgNjguNTExIDY4LjUzNiA3Ljk2MSAwIDE5MC4yMTUuMjIyIDE5MC4yMTUuMjIyIDM3Ljc4MiAwIDY4LjUxNi0zMC43ODkgNjguNTE2LTY4LjYzNiAwLTQuMzI1LS40MTgtOC41NTEtMS4xODgtMTIuNjU3IDMuNDIyLTUuNzU4IDIuNjc2LTEzLjMwNC0yLjI3Ny0xOC4yNThMMzg5LjIzIDI4OS42M2E2OS4zMzggNjkuMzM4IDAgMDAtNy4wMi03Ljk1NyA4Mi45MzUgODIuOTM1IDAgMDAxMi45OTctMzEuODI4aDI2LjAzMWM4LjI4MiAwIDE1LTYuNzE1IDE1LTE1IDAtOC4yODItNi43MTUtMTQuOTk2LTE1LTE0Ljk5NnptLTg2Ljc1IDE0OS42NHMtMTgyLjIzOC0uMjIyLTE5MC4yMTUtLjIyMmMtMjEuMjM0IDAtMzguNTExLTE3LjI5LTM4LjUxMS0zOC41MzYgMC0yMS4yMzggMTcuMjc3LTM4LjUxNSAzOC41MTEtMzguNTE1IDMuODU2IDAgNy42NjQuNTcgMTEuMzI1IDEuNjkxYTE0Ljk4MiAxNC45ODIgMCAwMDExLjU5My0xLjE4IDE0Ljk4MiAxNC45ODIgMCAwMDcuMjUtOS4xMmM4LjEwNi0yOC45NzcgMzQuODEzLTQ5LjIxNSA2NC45NDItNDkuMjE1IDMwLjEyOSAwIDU2LjgzMiAyMC4yMzggNjQuOTM3IDQ5LjIxNGExNC45ODggMTQuOTg4IDAgMDA3LjI1NCA5LjEyMiAxNC45OTIgMTQuOTkyIDAgMDAxMS41OSAxLjE4IDM4LjY0NSAzOC42NDUgMCAwMTExLjMyNC0xLjY5MmMyMS4yMzkgMCAzOC41MTYgMTcuMzMyIDM4LjUxNiAzOC42MzcgMCAyMS4zMDQtMTcuMjc3IDM4LjYzNi0zOC41MTYgMzguNjM2em0wLTEwNy4yNzNjLTEuOTkyIDAtMy45OC4wODYtNS45Ni4yNTgtMTEuNjI2LTI2LjI4Mi0zNC40MDMtNDUuOTk2LTYxLjU5OC01NC4wNyA5LjIyNi0xNi4wMDggMjYuNS0yNi44MTcgNDYuMjY1LTI2LjgxNyAyOS40MyAwIDUzLjM3MSAyMy45NDEgNTMuMzcxIDUzLjM3MSAwIDExLjUzNS0zLjY5MSAyMi4yMTktOS45MzcgMzAuOTU3YTY4LjAxNyA2OC4wMTcgMCAwMC0yMi4xNC0zLjd6bTAgMCIgLz48L3N2Zz4K";
    },
    33213: (M) => {
      M.exports =
        "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTgwIDc1YzAtNDEuMzU1LTMzLjY0NS03NS03NS03NVMzMCAzMy42NDUgMzAgNzV2MjU4LjA0QzEwLjg1NSAzNTIuNzIyIDAgMzc5LjMwNCAwIDQwN2MwIDU3Ljg5OCA0Ny4xMDIgMTA1IDEwNSAxMDVzMTA1LTQ3LjEwMiAxMDUtMTA1YzAtMjcuNjk1LTEwLjg1NS01NC4yNzctMzAtNzMuOTZ6bS0zMCAxMDZoLTMwdi0zMGgzMHptLTQ1IDIxMWM4LjI3IDAgMTUgNi43MyAxNSAxNXMtNi43MyAxNS0xNSAxNS0xNS02LjczLTE1LTE1IDYuNzMtMTUgMTUtMTV6bTE1LTE4MWgzMHYzMGgtMzB6bS0xNSAyNzFjLTQxLjM1NSAwLTc1LTMzLjY0NS03NS03NSAwLTIxLjIwNyA5LjM2My00Mi4zMDkgMjUuMDQ3LTU2LjQ1M0ExNS4wMDIgMTUuMDAyIDAgMDA2MCAzMzkuNDA3Vjc1YzAtMjQuODEzIDIwLjE4OC00NSA0NS00NXM0NSAyMC4xODggNDUgNDV2NDZoLTMwVjc1YzAtOC4yODUtNi43MTUtMTUtMTUtMTVzLTE1IDYuNzE1LTE1IDE1djI4OS41NzhDNzIuNTQgMzcwLjc3MyA2MCAzODcuNDQ1IDYwIDQwN2MwIDI0LjgxMyAyMC4xODggNDUgNDUgNDVzNDUtMjAuMTg4IDQ1LTQ1YzAtMTkuNTU1LTEyLjU0LTM2LjIyNy0zMC00Mi40MjJWMjcxaDMwdjY4LjQwNmMwIDQuMjUgMS44IDguMjk3IDQuOTUzIDExLjE0QzE3MC42MzcgMzY0LjY5MiAxODAgMzg1Ljc5NCAxODAgNDA3YzAgNDEuMzU1LTMzLjY0NSA3NS03NSA3NXptMCAwTTQ5NyA2MWgtMTVWNDZjMC04LjI4NS02LjcxNS0xNS0xNS0xNWgtNjBjLTguMjg1IDAtMTUgNi43MTUtMTUgMTV2MTVIMjI1Yy04LjI4NSAwLTE1IDYuNzE1LTE1IDE1czYuNzE1IDE1IDE1IDE1aDE2N3YxNWMwIDguMjg1IDYuNzE1IDE1IDE1IDE1aDYwYzguMjg1IDAgMTUtNi43MTUgMTUtMTVWOTFoMTVjOC4yODUgMCAxNS02LjcxNSAxNS0xNXMtNi43MTUtMTUtMTUtMTV6bS00NSAzMGgtMzBWNjFoMzB6bTAgME00OTcgMTgxSDMzMHYtMTVjMC04LjI4NS02LjcxNS0xNS0xNS0xNWgtNjBjLTguMjg1IDAtMTUgNi43MTUtMTUgMTV2MTVoLTE1Yy04LjI4NSAwLTE1IDYuNzE1LTE1IDE1czYuNzE1IDE1IDE1IDE1aDE1djE1YzAgOC4yODUgNi43MTUgMTUgMTUgMTVoNjBjOC4yODUgMCAxNS02LjcxNSAxNS0xNXYtMTVoMTY3YzguMjg1IDAgMTUtNi43MTUgMTUtMTVzLTYuNzE1LTE1LTE1LTE1em0tMTk3IDMwaC0zMHYtMzBoMzB6bTAgME00OTcgMzAxaC0xNXYtMTVjMC04LjI4NS02LjcxNS0xNS0xNS0xNWgtNjBjLTguMjg1IDAtMTUgNi43MTUtMTUgMTV2MTVIMjI1Yy04LjI4NSAwLTE1IDYuNzE1LTE1IDE1czYuNzE1IDE1IDE1IDE1aDE2N3YxNWMwIDguMjg1IDYuNzE1IDE1IDE1IDE1aDYwYzguMjg1IDAgMTUtNi43MTUgMTUtMTV2LTE1aDE1YzguMjg1IDAgMTUtNi43MTUgMTUtMTVzLTYuNzE1LTE1LTE1LTE1em0tNDUgMzBoLTMwdi0zMGgzMHptMCAwIiAvPjwvc3ZnPgo=";
    }
  }
]);
