"use strict";
(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [4496],
  {
    84496: (M, N, j) => {
      j.r(N), j.d(N, { default: () => y });
      var L = function () {
        var M = this,
          N = M._self._c;
        return N(
          "upsell",
          M._b(
            {
              attrs: { type: "soundscapes" },
              scopedSlots: M._u([
                {
                  key: "title",
                  fn: function () {
                    return [M._v("Soundscapes")];
                  },
                  proxy: !0
                },
                {
                  key: "description",
                  fn: function () {
                    return [M._v("White noise soundtracks to help you focus and relax.")];
                  },
                  proxy: !0
                },
                {
                  key: "body",
                  fn: function () {
                    return [
                      N("div", { staticClass: "content" }, [
                        N("div", { staticClass: "demo" }, [
                          N("img", { attrs: { src: "https://az814671.vo.msecnd.net/blogimages/25d739c1-6295-4045-9944-ac128139045b" } }),
                          M._v(" "),
                          N("div", { staticClass: "fun-fact" }, [
                            N("strong", [M._v("Fun fact:")]),
                            M._v(
                              "\n\t\t\t\t\tIn a recent study, 97% of customers using Plus daily reported being less distracted.\n\t\t\t\t"
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
                              N("div", { staticClass: "feature-title" }, [M._v("Optimize your focus")]),
                              M._v(" "),
                              N("div", { staticClass: "feature-desc" }, [
                                M._v("Soothing soundscapes at your fingertips designed to reduce distractions.")
                              ])
                            ],
                            1
                          ),
                          M._v(" "),
                          N(
                            "li",
                            [
                              N("inline-svg", { staticClass: "feature-icon", attrs: { src: j(66485) } }),
                              M._v(" "),
                              N("div", { staticClass: "feature-title" }, [M._v("Find your happy place")]),
                              M._v(" "),
                              N("div", { staticClass: "feature-desc" }, [
                                M._v(
                                  "Tune into the vibe you need to get into the flow for the day. Relaxing rain, coworking at a cafe, a crackling fire, and more!"
                                )
                              ])
                            ],
                            1
                          ),
                          M._v(" "),
                          N("li", [
                            N("audio", { attrs: { controls: "", controlsList: "nodownload" }, on: { play: M.sendPlayEvent } }, [
                              N("source", {
                                attrs: {
                                  src: "https://az814671.vo.msecnd.net/blogimages/dc963a0c-78d1-4a4c-b77c-d2bf461c2481",
                                  type: "audio/mp3"
                                }
                              }),
                              M._v("\n\t\t\t\t\t\tYour browser does not support the audio element.\n\t\t\t\t\t")
                            ])
                          ])
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
      var T = j(75962),
        u = j(81405);
      const D = {
          name: "SoundscapesUpsell",
          components: { Upsell: T.Z },
          props: {
            eventSource: { type: String, default: "" },
            plans: { type: Object, default: () => ({}) },
            sales: { type: Object, default: () => ({}) }
          },
          methods: {
            sendPlayEvent() {
              u.ZP.capture("upsell play sound", { feature: "soundscapes" });
            }
          }
        },
        y = (0, j(51900).Z)(D, L, [], !1, null, null, null).exports;
    },
    43366: (M) => {
      M.exports =
        "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMzU3LjQzOSAzMDMuNTkyYzEyLjEyOCAxNi45NzggMzEuODIzIDI3LjExMyA1Mi42ODcgMjcuMTEzaDU1LjA1M2MyNC43MTYgMCA0NC44MjUtMjAuMTA4IDQ0LjgyNS00NC44MjVzLTIwLjEwOC00NC44MjUtNDQuODI1LTQ0LjgyNUg0MzEuNTJsLTUxLjI3Ni02NC4wOTVjLTE2Ljg2NC0yMS4wNzktNDEuNDcxLTMzLjc1OS02OC4xOTMtMzUuMzQzIDcuOTc2LTExLjMzNyAxMi42NzgtMjUuMTM0IDEyLjY3OC00MC4wMTZWNjkuNzI3QzMyNC43MjkgMzEuMjggMjkzLjQ0OSAwIDI1NS4wMDIgMHMtNjkuNzI3IDMxLjI4LTY5LjcyNyA2OS43Mjd2MzEuODc1YzAgMTQuODgzIDQuNzAzIDI4LjY4IDEyLjY3NyA0MC4wMTYtMjYuNzIyIDEuNTg0LTUxLjMyOSAxNC4yNjMtNjguMTkzIDM1LjM0M2wtNTEuMjc1IDY0LjA5NUg0NC44MjVDMjAuMTA4IDI0MS4wNTYgMCAyNjEuMTY1IDAgMjg1Ljg4MXMyMC4xMDggNDQuODI1IDQ0LjgyNSA0NC44MjVoNTUuMDUzYzIwLjg2MyAwIDQwLjU1OS0xMC4xMzUgNTIuNjg3LTI3LjExM2w3LjgwNy0xMC45MzF2ODYuMjYxbC0yOS43NTEtOC4yMDdjLTIxLjUyNi01LjkzOC00NC4wNjEtMS41ODUtNjEuODI2IDExLjk0My0xNy43NjYgMTMuNTI3LTI3Ljk1NiAzNC4wOTQtMjcuOTU2IDU2LjQyMyAwIDM5LjEwNyAzMS44MTQgNzAuOTIxIDcwLjkyMSA3MC45MjFoMjg2LjQ4MWMzOS4xMDYgMCA3MC45Mi0zMS44MTUgNzAuOTItNzAuOTIxIDAtMjIuMzMtMTAuMTg5LTQyLjg5NS0yNy45NTUtNTYuNDI0cy00MC4zMDMtMTcuODgyLTYxLjgyNy0xMS45NDNsLTI5Ljc1MSA4LjIwN3YtODYuMjZ6TTIxNS4xNTggNjkuNzI3YzAtMjEuOTcgMTcuODc0LTM5Ljg0NCAzOS44NDQtMzkuODQ0czM5Ljg0NCAxNy44NzQgMzkuODQ0IDM5Ljg0NHYzMS44NzVjMCAyMS45Ny0xNy44NzQgMzkuODQ0LTM5Ljg0NCAzOS44NDRzLTM5Ljg0NC0xNy44NzQtMzkuODQ0LTM5Ljg0NHpNMzE2LjM3NiA0ODAuMTJIMTExLjc2MWMtMjIuNjI5IDAtNDEuMDM4LTE4LjQxLTQxLjAzOC00MS4wMzggMC0xMi45MjEgNS44OTYtMjQuODIyIDE2LjE3Ni0zMi42NSA3LjI2Ny01LjUzMyAxNS45MTEtOC40MTMgMjQuNzU0LTguNDEzIDMuNjY4IDAgNy4zNjkuNDk2IDExLjAyMSAxLjUwM2wxOTcuMjQ4IDU0LjQxM2M1Ljc2MiAxLjU5IDkuNzg3IDYuODc0IDkuNzg3IDEyLjg1MyAwIDcuMzUyLTUuOTggMTMuMzMyLTEzLjMzMyAxMy4zMzJ6bTcwLjk1My04MC41OThjMTIuNDU3LTMuNDM4IDI1LjQ5Ni0uOTE2IDM1Ljc3NiA2LjkxMSAxMC4yOCA3LjgyOCAxNi4xNzYgMTkuNzI5IDE2LjE3NiAzMi42NSAwIDIyLjYyOC0xOC40MDkgNDEuMDM3LTQxLjAzOCA0MS4wMzdoLTQwLjc2NGE0My4wMjUgNDMuMDI1IDAgMDAyLjExNS0xMy4zMzNjMC0xOS4zNzYtMTMuMDQ1LTM2LjUwNy0zMS43MjQtNDEuNjZsLTE2LjY4Mi00LjYwMnptLTEzMi4zMjggNS41MDRsLTY0Ljc0Ni0xNy44NjFWMjQ2LjAzN2ExNC45NDMgMTQuOTQzIDAgMDAtMjcuMS04LjY4NWwtMzQuOTA3IDQ4Ljg3MWEzNC45MzMgMzQuOTMzIDAgMDEtMjguMzcgMTQuNkg0NC44MjVjLTguMjM5IDAtMTQuOTQyLTYuNzAzLTE0Ljk0Mi0xNC45NDFzNi43MDMtMTQuOTQxIDE0Ljk0Mi0xNC45NDFoNDAuODRjNC41MzkgMCA4LjgzMi0yLjA2MyAxMS42NjctNS42MDhsNTUuNzYyLTY5LjcwMmMxMi4zNTUtMTUuNDQzIDMwLjc4Mi0yNC4zIDUwLjU1OS0yNC4zaDEwMi42OThjMTkuNzc3IDAgMzguMjA0IDguODU3IDUwLjU1OSAyNC4zbDU1Ljc2MiA2OS43MDNhMTQuOTM4IDE0LjkzOCAwIDAwMTEuNjY3IDUuNjA4aDQwLjg0YzguMjM5IDAgMTQuOTQyIDYuNzAzIDE0Ljk0MiAxNC45NDFzLTYuNzAzIDE0Ljk0MS0xNC45NDIgMTQuOTQxaC01NS4wNTNhMzQuOTMzIDM0LjkzMyAwIDAxLTI4LjM3LTE0LjZsLTM0LjkwNy00OC44NzFhMTQuOTQyIDE0Ljk0MiAwIDAwLTI3LjEgOC42ODR2MTQxLjEyOHoiIC8+PC9zdmc+Cg==";
    },
    66485: (M) => {
      M.exports =
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBkPSJNMjk2LjQ0MiAyNTEuNzcyYzguMzAxLTkuNDY4IDEzLjM0OS0yMS44NTUgMTMuMzQ5LTM1LjQwNiAwLTI5LjY1OC0yNC4xMzEtNTMuNzg3LTUzLjc5MS01My43ODdzLTUzLjc5MSAyNC4xMjktNTMuNzkxIDUzLjc4N2MwIDEzLjU1MSA1LjA0OCAyNS45MzggMTMuMzQ5IDM1LjQwNi0yMS41OTggMTMuNTIyLTM2LjAwMSAzNy41MTYtMzYuMDAxIDY0LjgyMXYxNy44MDhjMCA4LjI4NCA2LjcxNiAxNC45OTkgMTUgMTQuOTk5aDEyMi44ODdjOC4yODQgMCAxNS02LjcxNSAxNS0xNC45OTl2LTE3LjgwOGMtLjAwMS0yNy4zMDUtMTQuNDAzLTUxLjI5OC0zNi4wMDItNjQuODIxem0tNjQuMjMzLTM1LjQwNmMwLTEzLjExNyAxMC42NzMtMjMuNzg5IDIzLjc5MS0yMy43ODlzMjMuNzkxIDEwLjY3MSAyMy43OTEgMjMuNzg5LTEwLjY3MyAyMy43OS0yMy43OTEgMjMuNzktMjMuNzkxLTEwLjY3Mi0yMy43OTEtMjMuNzl6bTcwLjIzNCAxMDMuMDM2aC05Mi44ODd2LTIuODA4YzAtMjUuNjA3IDIwLjgzNC00Ni40NCA0Ni40NDMtNDYuNDQgMjMuNDQyIDAgNDYuNDQ0IDE3LjcxOCA0Ni40NDQgNDkuMjQ4ek00OTIuOTMyIDM3MC45NjVjLTEzLjE5LTE0LjAwOC0zMy4zOTQtMTcuMzMxLTU3LjQ2Ni05LjY1MS0zLjc2OS0xMi44NzYtMTIuMjIxLTI5LjQ4Ni0zMS4xODUtNDAuMDIzLTcuMjQxLTQuMDIyLTE2LjM3My0xLjQxNS0yMC4zOTcgNS44MjUtNC4wMjQgNy4yNDItMS40MTYgMTYuMzczIDUuODI1IDIwLjM5NiA1LjQzMyAzLjAxOSA5LjI4NiA3LjA0OCAxMi4wMzIgMTEuMjM5LTE5Ljc1My0zLjk4OC0zNi4zMTYuMTQ5LTQ3LjY3NCAxMi4yMS03LjAzNSA3LjQ2Ny0xMi40NzkgMTcuMzExLTE1Ljc0MyAyOC40NjctNS40MiAxOC41MzktNC4xNzUgMzkuMTQ3IDMuNTA3IDU4LjAzMSA0LjQxMiAxMC44NCAxMS4xMTYgMjEuNDk3IDIxLjA5OSAzMy41NCA3LjY2MSA5LjIzNyAxOS42OTkgMjAuOTg0IDM4LjIwNCAyMC45ODMgOS43NTIgMCAxNi44ODgtMy4yNCAyMi4zNjUtNC4wNjggMTAuNjQzIDEuNjEgMzQuMjU0IDE0LjgxNyA2MC41NzEtMTYuOTE4IDkuOTgtMTIuMDQgMTYuNjg1LTIyLjY5NyAyMS4wOTctMzMuNTM3bC4wMDItLjAwNGMxMy4yOTMtMzIuNjgyIDYuMDI1LTY3LjEwOC0xMi4yMzctODYuNDl6bS0xNS41NTMgNzUuMTg5Yy0zLjIyNSA3LjkyLTguNDM4IDE2LjA4Ni0xNi40MDUgMjUuNjk3LTcuNTk0IDkuMTU4LTEyLjE3IDEwLjYxMy0xNy4wOTUgMTAuMDA0LTQuNjc0LS41ODItMTUuMDA4LTQuNDg1LTIxLjUyNy0zLjk4NS03Ljk4Ny42MTItMTQuNTM4IDMuNC0xOS4yMzQgMy45ODUtNC45Mi42MS05LjUtLjg0NS0xNy4wOTMtMTAuMDAxLTcuOTctOS42MTUtMTMuMTg0LTE3Ljc4Mi0xNi40MDctMjUuNy01LjE0LTEyLjYzNS02LjAyNy0yNi4yNC0yLjUtMzguMzA1IDEuOTQxLTYuNjM0IDQuOTc5LTEyLjI3NiA4Ljc4Ny0xNi4zMTggNy4xNDEtNy41ODEgMjIuNjg3LTMuNDI4IDMyLjI5Ny40NTlhNDAuODE3IDQwLjgxNyAwIDAgMCAzMC41OTMgMGM3LjEyNy0yLjg4MSAyNC41NDEtOC42OTYgMzIuMy0uNDU2IDkuODA1IDEwLjQwNSAxNS4zODcgMzIuMjQyIDYuMjg0IDU0LjYyek0xNjUuNTgxIDM2NC4zNjhjLTEuODYyLS4yMS00My4wNzktNC42NjYtNzYuMTM3IDkuNTc1LTMzLjA1OS0xNC4yNDEtNzQuMjczLTkuNzg2LTc2LjEzNy05LjU3NUExNSAxNSAwIDAgMCAwIDM3OS4yNzJ2MTA2LjM5MmMwIDguOTAzIDcuNzcxIDE1Ljg5NiAxNi42NzIgMTQuOTA1IDIwLjU4NS0yLjI4NyA0NS45MDIuMDAzIDY2LjIyMSA5Ljg5M2ExNC45OTQgMTQuOTk0IDAgMCAwIDEzLjY5Ni0uMjk4YzI1LjQ0MS0xMy43OCA2NC44OTYtOS42NzUgNjUuNjIxLTkuNTk1IDguOTA2Ljk4OSAxNi42NzktNS45NyAxNi42NzktMTQuOTA1VjM3OS4yNzJjMC03LjYzLTUuNzI3LTE0LjA0My0xMy4zMDgtMTQuOTA0ek0zMCA0NjkuOTM5VjM5My41NWMxMS43ODgtLjEwMyAyOS40Mi45NzMgNDQuNDQ0IDYuNjU4djc0Ljk3MmMtMTQuMTY5LTMuNzk3LTI5LjU4OS01LjI5LTQ0LjQ0NC01LjI0MXptMTE4Ljg4OSAwYy0xMS43NjItLjAxOS0yOC4yMzIuODk3LTQ0LjQ0NCA1LjI0MXYtNzQuOTcyYzE1LjAyNi01LjY4NSAzMi42MzctNi43NDMgNDQuNDQ0LTYuNjU5ek04My45NCAxODMuODQ5YzUuODU4IDUuODU4IDE1LjM1NSA1Ljg1NyAyMS4yMTMgMGw2Ny4xODMtNjcuMTc5YzIyLjM2LTIyLjM1NyAyMi4zNjMtNTguNTQ3IDAtODAuOTEtMjEuMjk0LTIxLjI5Mi01NS4zMzctMjIuMjU4LTc3Ljc4OS0yLjkwNEM3Mi4wOTQgMTMuNSAzOC4wNTMgMTQuNDY3IDE2Ljc1OCAzNS43NjFjLTIyLjMwOCAyMi4zMDYtMjIuMzA4IDU4LjYwMyAwIDgwLjkxek0zNy45NzIgNTYuOTcyYzEwLjYxMy0xMC42MTEgMjcuODc4LTEwLjYxIDM4LjQ4OS4wMDFsNy40NzkgNy40NzljNS44NTcgNS44NTcgMTUuMzU1IDUuODU3IDIxLjIxMyAwbDcuNDgtNy40OGMxMC42MS0xMC42MSAyNy44NzctMTAuNjExIDM4LjQ4OS4wMDEgMTAuNjM0IDEwLjYzNCAxMC42MzggMjcuODQ5IDAgMzguNDg2bC01Ni41NzYgNTYuNTczTDM3Ljk3MSA5NS40NmMtMTAuNjExLTEwLjYxMS0xMC42MTEtMjcuODc2LjAwMS0zOC40ODh6TTUwMC44NiAyMC41MjNjLTEuMjQ5LS4zMzMgNy43MTcgMS4zOTMtMTA3LjQ4My0yMC4yNjEtOS4yMjMtMS43MzItMTcuNzcxIDUuMzQ3LTE3Ljc3MSAxNC43NDF2NzIuMTc5YTQ1LjMgNDUuMyAwIDAgMC0xNS41MTUtMi43MjZjLTI1LjA5OCAwLTQ1LjUxNiAyMC40MTctNDUuNTE2IDQ1LjUxMyAwIDI1LjA5NSAyMC40MTggNDUuNTEyIDQ1LjUxNiA0NS41MTIgMjUuMDk3IDAgNDUuNTE1LTIwLjQxNyA0NS41MTUtNDUuNTEyVjMzLjA4NUw0ODIgNDcuNDQ1djU5LjczN2E0NS4zMDYgNDUuMzA2IDAgMCAwLTE1LjUxNi0yLjcyNmMtMjUuMDk3IDAtNDUuNTE1IDIwLjQxNy00NS41MTUgNDUuNTEzIDAgMjUuMDk1IDIwLjQxOCA0NS41MTIgNDUuNTE1IDQ1LjUxMiAyNS4wOTggMCA0NS41MTYtMjAuNDE3IDQ1LjUxNi00NS41MTIgMC0uODcyLjAwMi0xMTQuMTg1LS4wMDUtMTE1LjA1Ny0uMDMxLTYuNTgyLTQuNDQ2LTEyLjYxMy0xMS4xMzUtMTQuMzg5em0tMTQwLjc2OSAxMjQuOTZjLTguNTU2IDAtMTUuNTE2LTYuOTYtMTUuNTE2LTE1LjUxNCAwLTguNTU1IDYuOTYtMTUuNTE1IDE1LjUxNi0xNS41MTUgOC41NTUgMCAxNS41MTUgNi45NiAxNS41MTUgMTUuNTE1LS4wMDEgOC41NTUtNi45NiAxNS41MTQtMTUuNTE1IDE1LjUxNHptMTA2LjM5MyAxOS45OTljLTguNTU1IDAtMTUuNTE1LTYuOTYtMTUuNTE1LTE1LjUxNCAwLTguNTU1IDYuOTYtMTUuNTE1IDE1LjUxNS0xNS41MTUgOC41NTYgMCAxNS41MTYgNi45NiAxNS41MTYgMTUuNTE1cy02Ljk2IDE1LjUxNC0xNS41MTYgMTUuNTE0eiIgLz48cGF0aCBkPSJNMjIyLjIwMSA0OS4zOTZjMzUuMzkyLTUuNzY0IDcyLjk1OC0yLjQ5OCAxMDguMDgyIDEwLjg0NyA3Ljc0NiAyLjk0MSAxNi40MDgtLjk1MyAxOS4zNS04LjY5NSAyLjk0MS03Ljc0NC0uOTUxLTE2LjQwNi04LjY5NS0xOS4zNDktMjcuMTAzLTEwLjI5NS01NS42OC0xNS41MTYtODQuOTM4LTE1LjUxNmEyNDEuMDczIDI0MS4wNzMgMCAwIDAtMzguNjIxIDMuMTA1Yy04LjE3NyAxLjMzMS0xMy43MjYgOS4wMzktMTIuMzk0IDE3LjIxNSAxLjMzMSA4LjE3NiA5LjAzNSAxMy43MjIgMTcuMjE2IDEyLjM5M3pNMzAyLjQwNyA0NjAuMTM4Yy0yNS44MjcgNS44NDctNTMuNTcyIDYuODc5LTgxLjA1NCAyLjMwNC04LjE3LTEuMzYzLTE1Ljg5OCA0LjE2LTE3LjI2IDEyLjMzMS0xLjM2MSA4LjE3MSA0LjE2IDE1Ljg5OCAxMi4zMzIgMTcuMjU5IDMwLjkwMyA1LjE0NSA2Mi41NzQgNC4xNjMgOTIuNjA2LTIuNjM2IDguMDc5LTEuODI5IDEzLjE0Ni05Ljg2MiAxMS4zMTctMTcuOTQxLTEuODI3LTguMDc5LTkuODY0LTEzLjE0Mi0xNy45NDEtMTEuMzE3ek00My43MzYgMTgxLjc1NmMtNy45ODctMi4yMDQtMTYuMjQ4IDIuNDc2LTE4LjQ1NCAxMC40NjEtNS43MDggMjAuNjUyLTguNjAzIDQyLjEwOC04LjYwMyA2My43NzMgMCAyNC42NjIgMy43NDEgNDguOTgyIDExLjEyIDcyLjI4NCAyLjUwMyA3LjkwNSAxMC45NDIgMTIuMjcyIDE4LjgyOCA5Ljc3MSA3Ljg5Ny0yLjUgMTIuMjcyLTEwLjkyOSA5Ljc3Mi0xOC44MjctNi40NS0yMC4zNjktOS43MjEtNDEuNjQyLTkuNzIxLTYzLjIyOCAwLTE4Ljk2NSAyLjUyOS0zNy43MzIgNy41MTktNTUuNzgxIDIuMjA4LTcuOTg1LTIuNDc2LTE2LjI0Ni0xMC40NjEtMTguNDUzek00NjcuNDQ5IDMzMi41MmM3Ljk2MSAyLjI5MyAxNi4yNzMtMi4zMDQgMTguNTY0LTEwLjI2MyA4LjU1OC0yOS43MiAxMS4wMDItNjAuMzA5IDguMjE3LTg5LjE3NS0uNzk1LTguMjQ1LTguMTE2LTE0LjI3Ni0xNi4zNy0xMy40OS04LjI0Ni43OTUtMTQuMjg2IDguMTI0LTEzLjQ5MSAxNi4zNjkgMi40MjEgMjUuMTIxLjMzMiA1MS44OS03LjE4NCA3Ny45OTYtMi4yOTEgNy45NiAyLjMwMyAxNi4yNzEgMTAuMjY0IDE4LjU2M3oiIC8+PC9zdmc+Cg==";
    }
  }
]);
