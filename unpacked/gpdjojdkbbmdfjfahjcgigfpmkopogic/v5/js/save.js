(() => {
  var aa = Object.defineProperty,
    ia = Object.defineProperties;
  var ta = Object.getOwnPropertyDescriptors;
  var me = Object.getOwnPropertySymbols;
  var oa = Object.prototype.hasOwnProperty,
    ra = Object.prototype.propertyIsEnumerable;
  var xe = (T, f, i) => (f in T ? aa(T, f, { enumerable: !0, configurable: !0, writable: !0, value: i }) : (T[f] = i)),
    te = (T, f) => {
      for (var i in f || (f = {})) oa.call(f, i) && xe(T, i, f[i]);
      if (me) for (var i of me(f)) ra.call(f, i) && xe(T, i, f[i]);
      return T;
    },
    oe = (T, f) => ia(T, ta(f));
  (function () {
    "use strict";
    const T = {
        "*": { "box-sizing": "border-box" },
        body: {
          margin: "0",
          padding: "0",
          "font-family":
            '"Helvetica Neue", Helvetica, "\u30D2\u30E9\u30AE\u30CE\u89D2\u30B4 Pro W3", "Hiragino Kaku Gothic Pro", \u30E1\u30A4\u30EA\u30AA, Meiryo, "\uFF2D\uFF33 \uFF30\u30B4\u30B7\u30C3\u30AF", arial, sans-serif',
          "%prefix%font-smoothing": "antialiased",
          "-moz-osx-font-smoothing": "grayscale",
          "._bg": {
            display: "none",
            top: "0",
            left: "0",
            height: "100vh",
            width: "100vw",
            background: "transparent",
            "._me": {
              position: "absolute",
              "._boardPickerOpener": {
                display: "flex",
                height: "40px",
                width: "236px",
                "box-shadow": "0px 0px 10px -8px #000000",
                position: "absolute",
                "._boardPickerOpenerContainer": {
                  display: "grid",
                  position: "relative",
                  padding: "7px 0 7px 35px",
                  "border-radius": "8px 0 0 8px",
                  flex: "1 1 auto",
                  background:
                    "url(data:image/svg+xml;base64,PHN2ZyBpZD0ic291cmNlIiB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iOCIgY3k9IjgiIHI9IjgiIGZpbGw9IndoaXRlIj48L2NpcmNsZT4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDhDMCAxMS40MTUzIDIuMTQwNjcgMTQuMzMxMyA1LjE1MzMzIDE1LjQ3ODdDNS4wOCAxNC44NTQgNS4wMDIgMTMuODI0IDUuMTcgMTMuMTAxM0M1LjMxNDY3IDEyLjQ4IDYuMTA0IDkuMTQyNjcgNi4xMDQgOS4xNDI2N0M2LjEwNCA5LjE0MjY3IDUuODY2IDguNjY2IDUuODY2IDcuOTZDNS44NjYgNi44NTMzMyA2LjUwNzMzIDYuMDI2NjcgNy4zMDY2NyA2LjAyNjY3QzcuOTg2NjcgNi4wMjY2NyA4LjMxNDY3IDYuNTM2NjcgOC4zMTQ2NyA3LjE0OEM4LjMxNDY3IDcuODMxMzMgNy44NzkzMyA4Ljg1MjY3IDcuNjU0NjcgOS44QzcuNDY3MzMgMTAuNTkyNyA4LjA1MjY3IDExLjIzOTMgOC44MzQgMTEuMjM5M0MxMC4yNDkzIDExLjIzOTMgMTEuMzM4IDkuNzQ2NjcgMTEuMzM4IDcuNTkyQzExLjMzOCA1LjY4NDY3IDkuOTY3MzMgNC4zNTIgOC4wMTA2NyA0LjM1MkM1Ljc0NTMzIDQuMzUyIDQuNDE1MzMgNi4wNTEzMyA0LjQxNTMzIDcuODA4QzQuNDE1MzMgOC40OTI2NyA0LjY3ODY3IDkuMjI2IDUuMDA4IDkuNjI1MzNDNS4wNzI2NyA5LjcwNDY3IDUuMDgyNjcgOS43NzMzMyA1LjA2MzMzIDkuODU0QzUuMDAyNjcgMTAuMTA2IDQuODY4IDEwLjY0NjcgNC44NDIgMTAuNzU3M0M0LjgwNjY3IDEwLjkwMjcgNC43MjY2NyAxMC45MzQgNC41NzUzMyAxMC44NjMzQzMuNTgwNjcgMTAuNDAwNyAyLjk1OTMzIDguOTQ2NjcgMi45NTkzMyA3Ljc3ODY3QzIuOTU5MzMgNS4yNjYgNC43ODQgMi45NTkzMyA4LjIyMDY3IDIuOTU5MzNDMTAuOTgzMyAyLjk1OTMzIDEzLjEzMDcgNC45MjggMTMuMTMwNyA3LjU1ODY3QzEzLjEzMDcgMTAuMzAzMyAxMS40MDA3IDEyLjUxMjcgOC45OTggMTIuNTEyN0M4LjE5MDY3IDEyLjUxMjcgNy40MzI2NyAxMi4wOTI3IDcuMTcyNjcgMTEuNTk3M0M3LjE3MjY3IDExLjU5NzMgNi43NzMzMyAxMy4xMTg3IDYuNjc2NjcgMTMuNDkwN0M2LjQ4ODY3IDE0LjIxMzMgNS45NjczMyAxNS4xMjggNS42NDQgMTUuNjQ3M0M2LjM4OTMzIDE1Ljg3NjcgNy4xOCAxNiA4IDE2QzEyLjQxOCAxNiAxNiAxMi40MTggMTYgOEMxNiAzLjU4MiAxMi40MTggMCA4IDBDMy41ODIgMCAwIDMuNTgyIDAgOFoiIGZpbGw9IiNFNjAwMjMiPjwvcGF0aD4KPC9zdmc+) 10px 50% no-repeat, url(data:image/svg+xml;base64,PHN2ZyBpZD0ic291cmNlIiB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHZpZXdCb3g9IjAgMCAxMCAxMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04LjM5OTk4IDIuNzcxMjVMNC45OTk5OCA2LjEyOTU4TDEuNjAwODIgMi43NzEyNUMxLjIzNDE1IDIuNDA5NTggMC42NDA4MTUgMi40MDk1OCAwLjI3NDU2NSAyLjc3MTI1Qy0wLjA5MTY4NDYgMy4xMzI1IC0wLjA5MTY4NDYgMy43MiAwLjI3NDU2NSA0LjA4MTY3TDQuOTk5OTggOC43NUw5LjcyNTQgNC4wODE2N0M5LjkwODMxIDMuOTAwNDIgOS45OTk5OCAzLjY2MjkyIDkuOTk5OTggMy40MjYyNUM5Ljk5OTk4IDMuMTg5MTcgOS45MDgzMSAyLjk1MjA4IDkuNzI1NCAyLjc3MTI1QzkuNTQyNDggMi41OTA0MiA5LjMwMjQ4IDIuNSA5LjA2MjQ4IDIuNUM4LjgyMjQ4IDIuNSA4LjU4MjkgMi41OTA0MiA4LjM5OTk4IDIuNzcxMjVaIiBmaWxsPSIjNzY3Njc2Ij48L3BhdGg+Cjwvc3ZnPg==) 95% 50% no-repeat",
                  "background-color": "#fff",
                  "background-size": "16px 16px, 10px 10px",
                  "._boardPickerOpenerLabel": { display: "block", "font-size": "10px", "line-height": "12px" },
                  "._boardPickerOpenerCurrent": {
                    display: "block",
                    "white-space": "nowrap",
                    "text-overflow": "ellipsis",
                    overflow: "hidden",
                    "font-weight": "bold",
                    "font-size": "12px",
                    "padding-right": "20px"
                  }
                },
                "._saveAction": {
                  cursor: "pointer",
                  "min-width": "58px",
                  padding: "0px 5px",
                  flex: "0 0 auto",
                  height: "40px",
                  "border-radius": "0 8px 8px 0",
                  background: "#e60023",
                  color: "#fff",
                  font: '12px/40px "Helvetica Neue", Helvetica, sans-serif',
                  "font-weight": "bold",
                  "text-align": "center",
                  "&:hover": { background: "#e60023 linear-gradient(rgba(0,0,0,0.06), rgba(0,0,0,0.06))" },
                  "&._working": {
                    background:
                      "linear-gradient(rgba(0,0,0,0.06), rgba(0,0,0,0.06)), url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIAoJeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiAKCXhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiAKCWhlaWdodD0iMzIiCgl3aWR0aD0iMzIiCgl2aWV3Qm94PSIwIDAgMTYgMTYiIAoJeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+Cgk8cGF0aCBmaWxsPSIjZmZmIiBkPSIKICAJTSA4LCAwCiAgICBBIC41LCAuNSwgMCwgMCwgMCwgOCwgMQogICAgQSA2LCA3LCAwLCAwLCAxLCAxNCwgOAogICAgQSA2LCA2LCAwLCAwLCAxLCA4LCAxNAogICAgQSA1LCA2LCAwLCAwLCAxLCAzLCA4CiAgICBBIDEsIDEsIDAsIDAsIDAsIDAsIDgKICAgIEEgOCwgOCwgMCwgMCwgMCwgOCwgMTYKICAgIEEgOCwgOCwgMCwgMCwgMCwgMTYsIDgKICAgIEEgOCwgOCwgMCwgMCwgMCwgOCwgMAogICAgWiIgPgogICAgPGFuaW1hdGVUcmFuc2Zvcm0KCQkJYXR0cmlidXRlVHlwZT0ieG1sIgoJCQlhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iCgkJCXR5cGU9InJvdGF0ZSIKCQkJZnJvbT0iMCA4IDgiCgkJCXRvPSIzNjAgOCA4IgoJCQlkdXI9IjAuNnMiCgkJCXJlcGVhdENvdW50PSJpbmRlZmluaXRlIgoJCS8+Cgk8L3BhdGg+Cjwvc3ZnPgo=) 50% 50% no-repeat",
                    "background-color": "#e60023",
                    "background-size": "18px 18px",
                    color: "transparent"
                  },
                  "&._done": {
                    background:
                      "linear-gradient(rgba(0,0,0,0.06), rgba(0,0,0,0.06)), url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIxN3B4IiBoZWlnaHQ9IjEzcHgiIHZpZXdCb3g9IjAgMCAxNyAxMyIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48Zz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMyw0TDcsOEwxNCwxQTEsMSAwIDAgMSAxNiwzTDcsMTJMMSw2QTEsMSAwIDAgMSAzLDRaIi8+PC9nPjwvc3ZnPg==) 50% 50% no-repeat",
                    "background-color": "#e60023",
                    "background-size": "18px 18px",
                    color: "transparent"
                  }
                },
                "._afterSave": {
                  "border-radius": "8px",
                  cursor: "pointer",
                  "min-width": "45px",
                  padding: "0px 5px",
                  height: "28px",
                  "border-radius": "14px",
                  margin: "6px 6px 6px 0",
                  background: "#EFEFEF url() 50% 50% no-repeat",
                  color: "#000",
                  font: '12px/28px "Helvetica Neue", Helvetica, sans-serif',
                  "font-weight": "bold",
                  "text-align": "center",
                  "white-space": "nowrap",
                  flex: "0 0 auto",
                  display: "none",
                  "&:hover": { background: "#EFEFEF linear-gradient(rgba(0,0,0,0.06),rgba(0,0,0,0.06))" }
                },
                "&._feedback": {
                  "background-color": "#fff",
                  "border-radius": "8px",
                  "._boardPickerOpenerContainer": {
                    background:
                      "#fff url(data:image/svg+xml;base64,PHN2ZyBpZD0ic291cmNlIiB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04IDBDMy41ODE3MiAwIDAgMy41ODE3MiAwIDhDMCAxMi40MTgzIDMuNTgxNzIgMTYgOCAxNkMxMi40MTgzIDE2IDE2IDEyLjQxODMgMTYgOEMxNiAzLjU4MTcyIDEyLjQxODMgMCA4IDBaTTQuMjQ0IDguOTE2TDcgMTEuNjY2N0wxMS43NTYgNi45MTk2N0MxMi4wODEzIDYuNTk1IDEyLjA4MTMgNi4wNjgzNCAxMS43NTYgNS43NDM2N0MxMS40MzA3IDUuNDE4NjcgMTAuOTAyNyA1LjQxODY3IDEwLjU3NzMgNS43NDM2N0w3IDkuMzE0TDUuNDIyNjcgNy43Mzk2N0M1LjA5NzMzIDcuNDE1IDQuNTY5MzMgNy40MTUgNC4yNDQgNy43Mzk2N0MzLjkxODY3IDguMDY0NjcgMy45MTg2NyA4LjU5MTM0IDQuMjQ0IDguOTE2WiIgZmlsbD0iI0U2MDAyMyI+PC9wYXRoPgo8L3N2Zz4=) 10px 50% no-repeat"
                  },
                  "._boardPickerOpenerCurrent": { "padding-right": "0px" },
                  "._saveAction": { display: "none" },
                  "._afterSave": { display: "block" },
                  "._mask": { cursor: "default", "&:hover": { background: "transparent" } }
                },
                "&._fail": {
                  background: "#fff linear-gradient(rgba(255,0,0,0.08), rgba(255,0,0,0.08))",
                  "._boardPickerOpenerContainer": {
                    background:
                      "url(data:image/svg+xml;base64,PHN2ZyBpZD0ic291cmNlIiB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE1LjQxNDYgNi41ODI0NUw5LjQxNzU1IDAuNTg1MzY2QzguNjM3MDYgLTAuMTk1MTIyIDcuMzYyOTMgLTAuMTk1MTIyIDYuNTgyNDUgMC41ODUzNjZMMC41ODUzNjYgNi41ODI0NUMtMC4xOTUxMjIgNy4zNjI5NCAtMC4xOTUxMjIgOC42MzcwNiAwLjU4NTM2NiA5LjQxNzU1TDYuNTgyNDUgMTUuNDE0NkM3LjM2MjkzIDE2LjE5NTEgOC42MzcwNiAxNi4xOTUxIDkuNDE3NTUgMTUuNDE0NkwxNS40MTQ2IDkuNDE3NTVDMTYuMTk1MSA4LjYzNzA2IDE2LjE5NTEgNy4zNjk2MSAxNS40MTQ2IDYuNTgyNDVaTTcuOTk2NjYgMTIuNjcyOUM3LjQyMjk3IDEyLjY3MjkgNi45NTYwMSAxMi4yMDYgNi45NTYwMSAxMS42MzIzQzYuOTU2MDEgMTEuMDU4NiA3LjQyMjk3IDEwLjU5MTYgNy45OTY2NiAxMC41OTE2QzguNTcwMzUgMTAuNTkxNiA5LjAzNzMxIDExLjA1ODYgOS4wMzczMSAxMS42MzIzQzkuMDM3MzEgMTIuMjA2IDguNTcwMzUgMTIuNjcyOSA3Ljk5NjY2IDEyLjY3MjlaTTkuMDM3MzEgOC41MjM2NkM5LjAzNzMxIDkuMDk3MzUgOC41NzAzNSA5LjU2NDMxIDcuOTk2NjYgOS41NjQzMUM3LjQyMjk3IDkuNTY0MzEgNi45NTYwMSA5LjA5NzM1IDYuOTU2MDEgOC41MjM2NlY0LjM2NzczQzYuOTU2MDEgMy43OTQwNCA3LjQyMjk3IDMuMzI3MDggNy45OTY2NiAzLjMyNzA4QzguNTcwMzUgMy4zMjcwOCA5LjAzNzMxIDMuNzk0MDQgOS4wMzczMSA0LjM2NzczVjguNTIzNjZaIiBmaWxsPSIjRTYwMDIzIj48L3BhdGg+Cjwvc3ZnPg==) 10px 50% no-repeat"
                  },
                  "._afterSave": {
                    background: "#e60023 url() 50% 50% no-repeat",
                    color: "#fff",
                    "&:hover": { background: "#e60023 linear-gradient(rgba(0,0,0,0.06),rgba(0,0,0,0.06))" }
                  }
                }
              },
              "._mask": {
                position: "absolute",
                top: "0",
                left: "0",
                bottom: "0",
                right: "0",
                height: "100%",
                width: "auto",
                cursor: "pointer",
                "border-radius": "8px 0px 0px 8px",
                "&:hover": { background: "linear-gradient(rgba(0,0,0,0.03), rgba(0,0,0,0.03))" }
              }
            },
            "._boardPicker": {
              display: "none",
              overflow: "hidden",
              position: "absolute",
              height: "500px",
              width: "360px",
              background: "#fff",
              "box-shadow": "0 0 8px rgba(0, 0, 0, .1)",
              "border-radius": "16px",
              color: "#444",
              "._boardPickerHead": {
                display: "block",
                height: "128px",
                width: "inherit",
                "._boardPickerHeadLine": {
                  display: "block",
                  height: "64px",
                  "line-height": "64px",
                  "text-align": "center",
                  "font-size": "16px",
                  "font-weight": "bolder"
                },
                "._boardPickerHide": {
                  position: "absolute",
                  top: "0",
                  left: "0",
                  height: "64px",
                  width: "64px",
                  cursor: "pointer",
                  "background-size": "25px 25px",
                  background:
                    "transparent url(data:image/svg+xml;base64,CjxzdmcgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjE2IiB3aWR0aD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PHBhdGggZmlsbD0iIzAwMCIgZD0iTTIuNSA4LjAwMWw3Ljg0IDcuNDgxYTEuOTE0IDEuOTE0IDAgMCAwIDIuNjE4LjAwMyAxLjcwNSAxLjcwNSAwIDAgMC0uMDA0LTIuNDk3TDcuNzMgOC4wMDFsNS4yMjUtNC45ODZjLjcyNC0uNjkuNzI2LTEuODA5LjAwNC0yLjQ5N2ExLjkxIDEuOTEgMCAwIDAtMi42MTkuMDAzTDIuNSA4LjAwMXoiPjwvcGF0aD48L3N2Zz4K) 50% 50% no-repeat"
                },
                "._boardPickerHeadNav": {
                  position: "absolute",
                  top: "0",
                  left: "0",
                  height: "64px",
                  width: "64px",
                  cursor: "pointer",
                  "background-size": "25px 25px",
                  background:
                    "transparent url(data:image/svg+xml;base64,CjxzdmcgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjE2IiB3aWR0aD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CjxwYXRoIGZpbGw9IiMwMDAiIGQ9Ik04IDUuNTA2TDMuMDE1LjUyQTEuNzY1IDEuNzY1IDAgMSAwIC41MjEgMy4wMTVMNS41MDYgOCAuNTIgMTIuOTg1QTEuNzY1IDEuNzY1IDAgMCAwIDEuNzY2IDE2YTEuNzYgMS43NiAwIDAgMCAxLjI0OC0uNTJMOCAxMC40OTNsNC45ODUgNC45ODVhMS43NjcgMS43NjcgMCAwIDAgMi40OTguMDA0IDEuNzYyIDEuNzYyIDAgMCAwLS4wMDQtMi40OThMMTAuNDk0IDhsNC45ODUtNC45ODVhMS43NjcgMS43NjcgMCAwIDAgLjAwNC0yLjQ5OCAxLjc2MiAxLjc2MiAwIDAgMC0yLjQ5OC4wMDRMOCA1LjUwNnoiPjwvcGF0aD4KPC9zdmc+) 50% 50% no-repeat",
                  "&._back": {
                    "background-image":
                      "url(data:image/svg+xml;base64,CjxzdmcgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjE2IiB3aWR0aD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PHBhdGggZmlsbD0iIzAwMCIgZD0iTTIuNSA4LjAwMWw3Ljg0IDcuNDgxYTEuOTE0IDEuOTE0IDAgMCAwIDIuNjE4LjAwMyAxLjcwNSAxLjcwNSAwIDAgMC0uMDA0LTIuNDk3TDcuNzMgOC4wMDFsNS4yMjUtNC45ODZjLjcyNC0uNjkuNzI2LTEuODA5LjAwNC0yLjQ5N2ExLjkxIDEuOTEgMCAwIDAtMi42MTkuMDAzTDIuNSA4LjAwMXoiPjwvcGF0aD48L3N2Zz4K)"
                  }
                },
                "._boardPickerInputBar": {
                  display: "block",
                  height: "64px",
                  background: "#fff",
                  position: "relative",
                  "._boardPickerInput": {
                    position: "absolute",
                    top: "0",
                    left: "16px",
                    height: "48px",
                    width: "330px",
                    border: "2px solid #efefef",
                    "font-size": "16px",
                    "text-indent": "40px",
                    "border-radius": "24px",
                    outline: "none",
                    background: "transparent url() 16px 50% no-repeat",
                    "background-size": "16px 16px",
                    "background-image":
                      "url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTAgMTZhNiA2IDAgMSAxIC4wMS0xMi4wMUE2IDYgMCAwIDEgMTAgMTZtMTMuMTIgMi44OGwtNC4yNi00LjI2YTEwIDEwIDAgMSAwLTQuMjQgNC4yNGw0LjI2IDQuMjZhMyAzIDAgMSAwIDQuMjQtNC4yNCIgZmlsbD0iIzhlOGU4ZSIvPjwvc3ZnPg==)"
                  }
                }
              },
              "._boardPickerBoards": { display: "block", height: "292px", width: "inherit", overflow: "auto" },
              "._boardPickerSections": { display: "block", height: "292px", width: "inherit", overflow: "auto" },
              "._boardPickerFoot": {
                height: "80px",
                width: "inherit",
                position: "absolute",
                bottom: "0",
                "line-height": "80px",
                "._plusIcon": {
                  position: "absolute",
                  top: "16px",
                  left: "16px",
                  height: "48px",
                  width: "48px",
                  "border-radius": "8px",
                  "background-image":
                    "url(data:image/svg+xml;base64,Cjxzdmcgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDI0IDI0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogIDxwYXRoIGQ9Ik0yMiAxMGgtOFYyYTIgMiAwIDAgMC00IDB2OEgyYTIgMiAwIDAgMCAwIDRoOHY4YTIgMiAwIDAgMCA0IDB2LThoOGEyIDIgMCAwIDAgMC00Ij48L3BhdGg+Cjwvc3ZnPgoKCgoK)",
                  "background-color": "#efefef",
                  "background-position": "50% 50%",
                  "background-repeat": "no-repeat",
                  "background-size": "24px 24px"
                },
                "._boardPickerSlugLine": {
                  height: "inherit",
                  display: "inherit",
                  "font-size": "16px",
                  "font-weight": "bolder",
                  "text-indent": "80px",
                  width: "340px",
                  overflow: "hidden",
                  "text-overflow": "ellipsis",
                  "white-space": "nowrap",
                  "line-height": "inherit"
                },
                "._mask": { cursor: "pointer", position: "absolute", height: "100%", width: "100%", top: 0, left: 0, right: 0, bottom: 0 }
              },
              "._boardPickerCreate": {
                display: "none",
                height: "372px",
                width: "inherit",
                "._boardPickerCreateBody": {
                  "._boardPickerCreateSecretLabel": { display: "block", cursor: "pointer", "font-size": "12px", padding: "8px 16px" }
                },
                "._boardPickerCreateFoot": {
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  height: "80px",
                  width: "inherit",
                  "._boardPickerCreateCancel": { position: "absolute", left: "8px" },
                  "._boardPickerCreateGo": { display: "block", position: "absolute", right: "8px" }
                },
                "&._modeSection": { "._boardPickerCreateBody": { "._boardPickerCreateSecretLabel": { display: "none" } } }
              },
              "._divider": { display: "block", height: "30px", padding: "8px 16px", "font-size": "12px" },
              "._item": {
                display: "flex",
                height: "64px",
                width: "344px",
                margin: "8px",
                overflow: "hidden",
                position: "relative",
                "font-size": "16px",
                "border-radius": "8px",
                "&:hover": { background: "rgba(0,0,0,.06)", "._save": { display: "block" }, "._helpers": { display: "none" } },
                "&._hazSection": { "&:hover": { "._save": { display: "none" }, "._helpers": { display: "block" } } },
                "._cover": {
                  background: "#555 url() 50% 50% no-repeat",
                  "background-size": "cover",
                  height: "48px",
                  width: "48px",
                  margin: "8px",
                  "min-width": "48px",
                  "border-radius": "8px",
                  "box-shadow": "0 0 1px #eee inset"
                },
                "._info": {
                  height: "48px",
                  width: "272px",
                  overflow: "hidden",
                  margin: "8px 0",
                  "font-weight": "bold",
                  "text-overflow": "ellipsis",
                  "white-space": "nowrap",
                  "line-height": "48px",
                  "&._isSectionName": { "padding-left": "8px", width: "340px" }
                },
                "._helpers": {
                  display: "block",
                  "white-space": "nowrap",
                  span: { background: "transparent url() 50% 50% no-repeat", height: "64px", width: "24px", display: "inline-block" },
                  "._collaborative": {
                    "background-image":
                      "url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjE0IiB3aWR0aD0iMTQiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PHBhdGggZmlsbD0iIzg4OCIgZD0iTTkuMTQzIDEwLjJBNCA0IDAgMCAxIDE2IDEzdjFIMHYtMWE1IDUgMCAwIDEgOS4xNDMtMi44ek0xMiA4YTIgMiAwIDEgMCAuMDktMy45OTlBMiAyIDAgMCAwIDEyIDh6TTUgN2EyLjUgMi41IDAgMSAwIDAtNSAyLjUgMi41IDAgMCAwIDAgNXoiPjwvcGF0aD48L3N2Zz4=)"
                  },
                  "._secret": {
                    "background-image":
                      "url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjE0IiB3aWR0aD0iMTQiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PHBhdGggZmlsbD0iIzg4OCIgZD0iTTEyLjggNi43OTFoLS4wNFY0LjU2NkMxMi43NiAyLjA0OCAxMC42MjUgMCA4IDBTMy4yNCAyLjA0OCAzLjI0IDQuNTY2djIuMjI1SDMuMmMtLjc3Ny45ODQtMS4yIDIuMi0xLjIgMy40NTRDMiAxMy40MjMgNC42ODYgMTYgOCAxNnM2LTIuNTc3IDYtNS43NTVjMC0xLjI1My0uNDIzLTIuNDctMS4yLTMuNDU0em0tMi4zNiAwSDUuNTZWNC41NjZjMC0xLjI5IDEuMDk1LTIuMzQgMi40NC0yLjM0czIuNDQgMS4wNSAyLjQ0IDIuMzR2Mi4yMjV6Ij48L3BhdGg+PC9zdmc+)"
                  },
                  "._opener": {
                    "background-image":
                      "url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjE2IiB3aWR0aD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PHBhdGggZmlsbD0iIzg4OCIgZD0iTTEzLjUgOGwtNy44NCA3LjQ4MWExLjkxNCAxLjkxNCAwIDAgMS0yLjYxOC4wMDMgMS43MDUgMS43MDUgMCAwIDEgLjAwNC0yLjQ5N0w4LjI3IDggMy4wNDYgMy4wMTVBMS43MDkgMS43MDkgMCAwIDEgMy4wNDIuNTE4IDEuOTEgMS45MSAwIDAgMSA1LjY2LjUyTDEzLjUgOHoiLz48L3N2Zz4=)"
                  }
                },
                "._mask": { cursor: "pointer", position: "absolute", height: "100%", width: "100%", top: 0, left: 0, right: 0, bottom: 0 }
              },
              "input[type=checkbox]": {
                display: "block",
                height: "1px",
                margin: "8px",
                padding: "0",
                opacity: ".01",
                "&:checked": {
                  "~ ._toggle": {
                    background: "#e60023",
                    "._knob": { float: "right" },
                    "._optYes": { display: "block" },
                    "._optNo": { display: "none" }
                  }
                }
              },
              "._toggle": {
                cursor: "pointer",
                display: "inline-block",
                padding: "0 0 16px",
                background: "#f8f8f8",
                "border-radius": "16px",
                border: "1px solid #eee",
                height: "32px",
                "._knob": {
                  display: "inline-block",
                  margin: "0",
                  padding: "0",
                  background: "#fff",
                  "border-radius": "16px",
                  "box-shadow": "0 0 1px #eee",
                  width: "30px",
                  height: "30px"
                },
                "._optNo, ._optYes": { display: "inline-block", "line-height": "30px", padding: "0 10px", "font-weight": "bold" },
                "._optNo": { color: "#000", float: "right" },
                "._optYes": { color: "#fff", float: "left", display: "none" }
              },
              "&._hazCreate": {
                "._boardPickerInputBar": {
                  "._boardPickerInput": {
                    "background-image":
                      "url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgPHBhdGggZD0iTTIyIDEwaC04VjJhMiAyIDAgMCAwLTQgMHY4SDJhMiAyIDAgMCAwIDAgNGg4djhhMiAyIDAgMCAwIDQgMHYtOGg4YTIgMiAwIDAgMCAwLTQiIGZpbGw9IiM4ZThlOGUiPjwvcGF0aD4KPC9zdmc+)"
                  }
                },
                "._boardPickerCreate": { display: "block" },
                "._boardPickerChoose": { display: "none" }
              },
              "&._fromImagePicker": {
                "box-shadow": "none",
                height: "590px",
                "._boardPickerBoards": { height: "380px" },
                "._boardPickerSections": { height: "380px" },
                "._boardPickerHead": { "._boardPickerHeadNav": { display: "none", "&._back": { display: "block" } } }
              },
              "&._fromSearch": {
                top: "15px",
                right: "400px",
                "._boardPickerHead": { "._boardPickerHeadNav": { "&._back": { display: "block" } } }
              }
            },
            "._boardPickerMask": { display: "none", top: "0", left: "0", height: "100vh", width: "100vw", background: "transparent" },
            "._imagePicker": {
              display: "none",
              position: "absolute",
              top: "15px",
              right: "20px",
              height: "640px",
              width: "360px",
              background: "#fff",
              "box-shadow": "0px 0px 8px rgba(0, 0, 0, 0.3)",
              "border-radius": "16px",
              overflow: "hidden",
              color: "#444",
              "._imagePickerHead": {
                display: "block",
                height: "88px",
                "._default": {
                  "text-align": "center",
                  "padding-top": "10px",
                  "._imagePickerHeadMainCaption": { display: "block", "font-size": "20px", "font-weight": "bold" },
                  ",_imagePickerHeadSubCaption": { display: "block", "font-size": "16px" }
                },
                "._preview": {
                  display: "none",
                  height: "72px",
                  overflow: "auto hidden",
                  "padding-top": "8px",
                  "white-space": "nowrap",
                  "._thumb": {
                    "border-radius": "8px",
                    margin: "0 0 0 8px",
                    display: "inline-block",
                    height: "64px",
                    width: "48px",
                    background: "transparent url() 50% 50% no-repeat",
                    "background-size": "cover"
                  }
                },
                "&._hazImages": { "._default": { display: "none" }, "._preview": { display: "block" } }
              },
              "._imagePickerBody": {
                display: "block",
                height: "580px",
                overflow: "auto",
                "._grid": {
                  display: "block",
                  "margin-bottom": "80px",
                  "white-space": "nowrap",
                  "._col": {
                    display: "inline-block",
                    width: "115px",
                    padding: "0 6px",
                    "vertical-align": "top",
                    "._thumb": {
                      "border-radius": "16px",
                      margin: "0 0 8px 0",
                      display: "block",
                      width: "109px",
                      overflow: "hidden",
                      cursor: "pointer",
                      position: "relative",
                      "._mask": {
                        position: "absolute",
                        top: "0",
                        left: "0",
                        bottom: "0",
                        right: "0",
                        "border-radius": "16px",
                        "&._selected": { border: "2px solid black" },
                        "&._selected:before": {
                          content: '""',
                          position: "absolute",
                          bottom: "6px",
                          right: "6px",
                          height: "24px",
                          width: "24px",
                          "border-radius": "8px",
                          background:
                            "#000 url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIxN3B4IiBoZWlnaHQ9IjEzcHgiIHZpZXdCb3g9IjAgMCAxNyAxMyIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48Zz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMyw0TDcsOEwxNCwxQTEsMSAwIDAgMSAxNiwzTDcsMTJMMSw2QTEsMSAwIDAgMSAzLDRaIi8+PC9nPjwvc3ZnPg==) 50% 50% no-repeat",
                          "background-size": "12px 12px"
                        },
                        "&._selected:after": {
                          content: '""',
                          position: "absolute",
                          top: "0",
                          left: "0",
                          right: "0",
                          bottom: "0",
                          border: "2px solid #fff",
                          "border-radius": "14px"
                        }
                      },
                      img: { display: "block", width: "110px" }
                    }
                  }
                }
              },
              "._imagePickerFoot": {
                display: "none",
                background: "#fff",
                height: "80px",
                position: "absolute",
                bottom: "0px",
                left: "0px",
                width: "360px",
                "._imagePickerFootSelectAll": { display: "none", position: "absolute", left: "8px", top: "8px" },
                "&._hazSelectAll": { "._imagePickerFootSelectAll": { display: "block" } },
                "._imagePickerFootNext": { position: "absolute", right: "8px", top: "8px" }
              },
              "._imagePickerFeedback": {
                display: "none",
                padding: "16px",
                height: "80px",
                "font-size": "16px",
                "line-height": "48px",
                "._imagePickerFeedbackBoardCover": {
                  background: "#555 url() 50% 50% no-repeat",
                  "background-size": "cover",
                  display: "inline-block",
                  height: "48px",
                  width: "48px",
                  "min-width": "48px",
                  "border-radius": "8px",
                  "box-shadow": "0 0 1px #eee inset"
                },
                "._imagePickerFeedbackBoardName": {
                  overflow: "hidden",
                  margin: "0 8px",
                  "font-weight": "bold",
                  "text-overflow": "ellipsis",
                  "white-space": "nowrap",
                  "font-weight": "bold"
                },
                "._imagePickerFeedbackVisitButton": { "white-space": "nowrap", margin: "0 0 8px auto" }
              },
              "&._hazFooter": { "._imagePickerBody": { height: "500px" }, "._imagePickerFoot": { display: "block" } },
              "&._hazFeedback": {
                transition: "height .5s ease-out",
                height: "130px",
                "._imagePickerHead, ._imagePickerBody, ._imagePickerFoot": { display: "none" },
                "._imagePickerFeedback": { display: "flex" }
              }
            },
            "._infoContainer": {
              display: "none",
              top: "15px",
              right: "20px",
              overflow: "hidden",
              display: "none",
              position: "absolute",
              width: "360px",
              background: "#fff",
              "box-shadow": "0 0 8px rgba(0, 0, 0, .1)",
              "border-radius": "16px",
              "text-align": "center",
              color: "#444",
              "._authHelp": {
                display: "none",
                "._authHelpHead": { display: "block", "font-weight": "bold", "font-size": "36px" },
                "._authHelpBody": { display: "block", "font-size": "16px", padding: "5px 30px 15px" },
                "._authHelpFoot": { display: "block", padding: "5px 0 30px" }
              }
            },
            "._searchContainer": {
              "user-select": "none",
              display: "none",
              position: "absolute",
              top: "15px",
              right: "20px",
              height: "640px",
              width: "360px",
              background: "#fff",
              "box-shadow": "0px 0px 8px rgba(0, 0, 0, 0.3)",
              "border-radius": "16px",
              overflow: "hidden",
              color: "#444",
              "._searchInside": {
                display: "block",
                height: "400px",
                background: "#444 url() 50% 50% no-repeat",
                "background-size": "contain",
                "text-align": "center",
                canvas: {
                  height: "inherit",
                  margin: "0 auto",
                  cursor: "crosshair",
                  "&._move": { cursor: "move" },
                  "&._pointer": { cursor: "pointer" },
                  "&._ne": { cursor: "ne-resize" },
                  "&._nw": { cursor: "nw-resize" },
                  "&._se": { cursor: "se-resize" },
                  "&._sw": { cursor: "sw-resize" }
                }
              },
              "._searchResults": {
                display: "block",
                height: "190px",
                overflow: "auto",
                "._searchResultsGrid": {
                  display: "block",
                  "margin-top": "8px",
                  "white-space": "nowrap",
                  "._col": {
                    display: "inline-block",
                    width: "115px",
                    padding: "0 6px",
                    "vertical-align": "top",
                    "._thumb": {
                      "border-radius": "16px",
                      margin: "0 0 8px 0",
                      display: "block",
                      width: "109px",
                      overflow: "hidden",
                      cursor: "pointer",
                      position: "relative",
                      "._mask": {
                        position: "absolute",
                        top: "0",
                        left: "0",
                        bottom: "0",
                        right: "0",
                        "border-radius": "16px",
                        "._refine": {
                          display: "none",
                          position: "absolute",
                          top: "6px",
                          right: "6px",
                          height: "18px",
                          width: "18px",
                          "border-radius": "9px",
                          "box-shadow": "inset 0 0 1px #555",
                          background:
                            "#000 url(data:image/svg+xml;base64,PHN2ZyBpZD0ic291cmNlIiB3aWR0aD0iMjIiIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAyMiAyMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTEiIGN5PSIxMSIgcj0iMTEiIGZpbGw9ImJsYWNrIiBmaWxsLW9wYWNpdHk9IjAuOCI+PC9jaXJjbGU+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTUuMDgzNCA0LjU4MzMzSDEzLjMzMzRWNS43NDk5OUgxNS4wODM0QzE1LjcyNjggNS43NDk5OSAxNi4yNSA2LjI3MzI0IDE2LjI1IDYuOTE2NjZWOC42NjY2NkgxNy40MTY3VjYuOTE2NjZDMTcuNDE2NyA1LjYyOTgzIDE2LjM3MDIgNC41ODMzMyAxNS4wODM0IDQuNTgzMzNaTTE2LjI1IDE1LjA4MzNDMTYuMjUgMTUuNzI2NyAxNS43MjY4IDE2LjI1IDE1LjA4MzQgMTYuMjVIMTMuMzMzNFYxNy40MTY3SDE1LjA4MzRDMTYuMzcwMiAxNy40MTY3IDE3LjQxNjcgMTYuMzcwMiAxNy40MTY3IDE1LjA4MzNWMTMuMzMzM0gxNi4yNVYxNS4wODMzWk01Ljc1MDA0IDE1LjA4MzNWMTMuMzMzM0g0LjU4MzM3VjE1LjA4MzNDNC41ODMzNyAxNi4zNzAyIDUuNjI5ODcgMTcuNDE2NyA2LjkxNjcxIDE3LjQxNjdIOC42NjY3MVYxNi4yNUg2LjkxNjcxQzYuMjczMjkgMTYuMjUgNS43NTAwNCAxNS43MjY3IDUuNzUwMDQgMTUuMDgzM1pNNS43NTAwNCA2LjkxNjY2QzUuNzUwMDQgNi4yNzMyNCA2LjI3MzI5IDUuNzQ5OTkgNi45MTY3MSA1Ljc0OTk5SDguNjY2NzFWNC41ODMzM0g2LjkxNjcxQzUuNjI5ODcgNC41ODMzMyA0LjU4MzM3IDUuNjI5ODMgNC41ODMzNyA2LjkxNjY2VjguNjY2NjZINS43NTAwNFY2LjkxNjY2Wk05LjI1MDA0IDEwLjcwODNDOS4yNTAwNCA5LjkwNDQ5IDkuOTA0NTQgOS4yNDk5OSAxMC43MDg0IDkuMjQ5OTlDMTEuNTEyMiA5LjI0OTk5IDEyLjE2NjcgOS45MDQ0OSAxMi4xNjY3IDEwLjcwODNDMTIuMTY2NyAxMS41MTIyIDExLjUxMjIgMTIuMTY2NyAxMC43MDg0IDEyLjE2NjdDOS45MDQ1NCAxMi4xNjY3IDkuMjUwMDQgMTEuNTEyMiA5LjI1MDA0IDEwLjcwODNaTTEzLjYyNSAxNC41QzEzLjg0OSAxNC41IDE0LjA3MyAxNC40MTQ4IDE0LjI0NCAxNC4yNDM5QzE0LjU4NTIgMTMuOTAyMSAxNC41ODUyIDEzLjM0NzkgMTQuMjQ0IDEzLjAwNjFMMTMuMDcwMyAxMS44MzNDMTMuMjM0MiAxMS40OTA2IDEzLjMzMzQgMTEuMTEyNiAxMy4zMzM0IDEwLjcwODNDMTMuMzMzNCA5LjI2MTA4IDEyLjE1NTYgOC4wODMzMyAxMC43MDg0IDguMDgzMzNDOS4yNjExMiA4LjA4MzMzIDguMDgzMzcgOS4yNjEwOCA4LjA4MzM3IDEwLjcwODNDOC4wODMzNyAxMi4xNTU2IDkuMjYxMTIgMTMuMzMzMyAxMC43MDg0IDEzLjMzMzNDMTEuMTEyNiAxMy4zMzMzIDExLjQ5MDYgMTMuMjM0MiAxMS44MzMgMTMuMDcwMkwxMy4wMDYxIDE0LjI0MzlDMTMuMTc3IDE0LjQxNDggMTMuNDAxIDE0LjUgMTMuNjI1IDE0LjVaIiBmaWxsPSJ3aGl0ZSI+PC9wYXRoPgo8L3N2Zz4=) 50% 50% no-repeat",
                          "background-size": "16px 16px"
                        },
                        "._openBoardPickerFromSearch": {
                          display: "none",
                          position: "absolute",
                          top: "6px",
                          left: "6px",
                          height: "18px",
                          width: "18px",
                          "border-radius": "9px",
                          "box-shadow": "inset 0 0 1px #555",
                          background:
                            "#e60023 url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjE2IiB3aWR0aD0iMTYiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTEzLjk4OCAxOS4xNTNjMS40OTctMS40OTcgMS45OTctMy43MDcgMS40OTMtNS42MTZsNC4yNTktNC40NjMgMi45MjItLjI2Ny0uMDE3LS4wMThhLjMuMyAwIDAgMCAuMjY0LS4wODEuMzA4LjMwOCAwIDAgMCAuMDAxLS40MzdMMTUuNzMgMS4wOWEuMzEuMzEgMCAwIDAtLjQzOC4wMDEuMzA1LjMwNSAwIDAgMC0uMDgxLjI2NWwtLjAxNy0uMDE4LS4yNjcgMi45MjMtNC40NjQgNC4yNTljLTEuOTA5LS41MDUtNC4xMTktLjAwNC01LjYxNiAxLjQ5MmwzLjgwOSAzLjgwOS01LjMzMiA1LjMzMmMtLjc2Mi43NjItMi42MTMgMi45NTUtMi4yODUgMy44MDkuODUzLjMyOCAzLjA0Ny0xLjUyNCAzLjgwOC0yLjI4Nmw1LjMzMi01LjMzMiAzLjgwOSAzLjgwOVoiPjwvcGF0aD48L3N2Zz4=) 50% 50% no-repeat",
                          "background-size": "12px 12px",
                          "&._done": {
                            "background-color": "#444",
                            "background-image":
                              "url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIxN3B4IiBoZWlnaHQ9IjEzcHgiIHZpZXdCb3g9IjAgMCAxNyAxMyIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48Zz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMyw0TDcsOEwxNCwxQTEsMSAwIDAgMSAxNiwzTDcsMTJMMSw2QTEsMSAwIDAgMSAzLDRaIi8+PC9nPjwvc3ZnPg==)",
                            "background-size": "10px 10px"
                          },
                          "&._working": {
                            background:
                              "linear-gradient(rgba(0,0,0,0.06), rgba(0,0,0,0.06)), url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIAoJeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiAKCXhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiAKCWhlaWdodD0iMzIiCgl3aWR0aD0iMzIiCgl2aWV3Qm94PSIwIDAgMTYgMTYiIAoJeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+Cgk8cGF0aCBmaWxsPSIjZmZmIiBkPSIKICAJTSA4LCAwCiAgICBBIC41LCAuNSwgMCwgMCwgMCwgOCwgMQogICAgQSA2LCA3LCAwLCAwLCAxLCAxNCwgOAogICAgQSA2LCA2LCAwLCAwLCAxLCA4LCAxNAogICAgQSA1LCA2LCAwLCAwLCAxLCAzLCA4CiAgICBBIDEsIDEsIDAsIDAsIDAsIDAsIDgKICAgIEEgOCwgOCwgMCwgMCwgMCwgOCwgMTYKICAgIEEgOCwgOCwgMCwgMCwgMCwgMTYsIDgKICAgIEEgOCwgOCwgMCwgMCwgMCwgOCwgMAogICAgWiIgPgogICAgPGFuaW1hdGVUcmFuc2Zvcm0KCQkJYXR0cmlidXRlVHlwZT0ieG1sIgoJCQlhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iCgkJCXR5cGU9InJvdGF0ZSIKCQkJZnJvbT0iMCA4IDgiCgkJCXRvPSIzNjAgOCA4IgoJCQlkdXI9IjAuNnMiCgkJCXJlcGVhdENvdW50PSJpbmRlZmluaXRlIgoJCS8+Cgk8L3BhdGg+Cjwvc3ZnPgo=) 50% 50% no-repeat",
                            "background-color": "#e60023",
                            "background-size": "18px 18px",
                            color: "transparent"
                          }
                        },
                        "&:hover": { "._refine": { display: "block" }, "._openBoardPickerFromSearch": { display: "block" } }
                      },
                      img: { display: "block", width: "110px" }
                    }
                  },
                  "&._cols_2": {
                    "._col": {
                      width: "175px",
                      "._thumb": {
                        width: "169px",
                        "box-shadow": "0 0 1px #000",
                        "padding-bottom": "40px",
                        "._footer": {
                          cursor: "default",
                          position: "absolute",
                          bottom: "0",
                          left: "0",
                          right: "0",
                          height: "40px",
                          background: "#fff",
                          "line-height": "40px",
                          "box-shadow": "inset 0 0 1px #555",
                          "._avatar": {
                            position: "absolute",
                            top: "8px",
                            left: "8px",
                            height: "24px",
                            width: "24px",
                            "border-radius": "12px",
                            "box-shadow": "inset 0 0 1px #555",
                            cursor: "pointer"
                          },
                          "._title": {
                            position: "absolute",
                            top: "0",
                            left: "40px",
                            "font-size": "11px",
                            "white-space": "pre",
                            overflow: "hidden",
                            "text-overflow": "ellipsis",
                            width: "120px"
                          }
                        },
                        "._mask": {
                          "._refine, ._openBoardPickerFromSearch": { top: "10px", height: "24px", width: "24px", "border-radius": "12px" },
                          "._refine": { right: "8px", "background-size": "20px 20px" },
                          "._openBoardPickerFromSearch": { left: "8px", "background-size": "12px 12px" }
                        },
                        img: { width: "170px" }
                      }
                    }
                  }
                }
              }
            },
            "&._hazSearch": { "._searchContainer": { display: "block" } },
            "&._hazBoardPicker": { "._boardPicker": { display: "block" }, "._boardPickerMask": { display: "block" } },
            "&._hazImagePicker": {
              "._imagePicker": {
                display: "block",
                "&._hideSubCaption": { "._imagePickerHead": { height: "64px" }, "._imagePickerHeadSubCaption": { display: "none" } }
              }
            },
            "&._hazAuthHelp": { height: "390px", "._infoContainer": { display: "block", "._authHelp": { display: "block" } } },
            "&._hazOnlyOneImage": {
              "._boardPicker": { "._boardPickerHead": { "._boardPickerHide": { display: "none" } } },
              "._imagePicker": { "._imagePickerHead": { display: "none" } }
            }
          }
        },
        "._interfaceHead": {
          display: "block",
          height: "52px",
          background:
            "transparent url(data:image/svg+xml;base64,PHN2ZyBpZD0ic291cmNlIiB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iOCIgY3k9IjgiIHI9IjgiIGZpbGw9IndoaXRlIj48L2NpcmNsZT4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDhDMCAxMS40MTUzIDIuMTQwNjcgMTQuMzMxMyA1LjE1MzMzIDE1LjQ3ODdDNS4wOCAxNC44NTQgNS4wMDIgMTMuODI0IDUuMTcgMTMuMTAxM0M1LjMxNDY3IDEyLjQ4IDYuMTA0IDkuMTQyNjcgNi4xMDQgOS4xNDI2N0M2LjEwNCA5LjE0MjY3IDUuODY2IDguNjY2IDUuODY2IDcuOTZDNS44NjYgNi44NTMzMyA2LjUwNzMzIDYuMDI2NjcgNy4zMDY2NyA2LjAyNjY3QzcuOTg2NjcgNi4wMjY2NyA4LjMxNDY3IDYuNTM2NjcgOC4zMTQ2NyA3LjE0OEM4LjMxNDY3IDcuODMxMzMgNy44NzkzMyA4Ljg1MjY3IDcuNjU0NjcgOS44QzcuNDY3MzMgMTAuNTkyNyA4LjA1MjY3IDExLjIzOTMgOC44MzQgMTEuMjM5M0MxMC4yNDkzIDExLjIzOTMgMTEuMzM4IDkuNzQ2NjcgMTEuMzM4IDcuNTkyQzExLjMzOCA1LjY4NDY3IDkuOTY3MzMgNC4zNTIgOC4wMTA2NyA0LjM1MkM1Ljc0NTMzIDQuMzUyIDQuNDE1MzMgNi4wNTEzMyA0LjQxNTMzIDcuODA4QzQuNDE1MzMgOC40OTI2NyA0LjY3ODY3IDkuMjI2IDUuMDA4IDkuNjI1MzNDNS4wNzI2NyA5LjcwNDY3IDUuMDgyNjcgOS43NzMzMyA1LjA2MzMzIDkuODU0QzUuMDAyNjcgMTAuMTA2IDQuODY4IDEwLjY0NjcgNC44NDIgMTAuNzU3M0M0LjgwNjY3IDEwLjkwMjcgNC43MjY2NyAxMC45MzQgNC41NzUzMyAxMC44NjMzQzMuNTgwNjcgMTAuNDAwNyAyLjk1OTMzIDguOTQ2NjcgMi45NTkzMyA3Ljc3ODY3QzIuOTU5MzMgNS4yNjYgNC43ODQgMi45NTkzMyA4LjIyMDY3IDIuOTU5MzNDMTAuOTgzMyAyLjk1OTMzIDEzLjEzMDcgNC45MjggMTMuMTMwNyA3LjU1ODY3QzEzLjEzMDcgMTAuMzAzMyAxMS40MDA3IDEyLjUxMjcgOC45OTggMTIuNTEyN0M4LjE5MDY3IDEyLjUxMjcgNy40MzI2NyAxMi4wOTI3IDcuMTcyNjcgMTEuNTk3M0M3LjE3MjY3IDExLjU5NzMgNi43NzMzMyAxMy4xMTg3IDYuNjc2NjcgMTMuNDkwN0M2LjQ4ODY3IDE0LjIxMzMgNS45NjczMyAxNS4xMjggNS42NDQgMTUuNjQ3M0M2LjM4OTMzIDE1Ljg3NjcgNy4xOCAxNiA4IDE2QzEyLjQxOCAxNiAxNiAxMi40MTggMTYgOEMxNiAzLjU4MiAxMi40MTggMCA4IDBDMy41ODIgMCAwIDMuNTgyIDAgOFoiIGZpbGw9IiNFNjAwMjMiPjwvcGF0aD4KPC9zdmc+) 16px 16px no-repeat",
          "background-size": "20px 20px",
          "._settings": {
            position: "absolute",
            top: "10px",
            right: "42px",
            height: "32px",
            width: "32px",
            cursor: "pointer",
            background:
              "transparent url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGhlaWdodD0iMjQiIHdpZHRoPSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KPHBhdGggZD0iTTEyIDljLTEuNjYgMC0zIDEuMzQtMyAzczEuMzQgMyAzIDMgMy0xLjM0IDMtMy0xLjM0LTMtMy0zTTMgOWMxLjY2IDAgMyAxLjM0IDMgM3MtMS4zNCAzLTMgMy0zLTEuMzQtMy0zIDEuMzQtMyAzLTN6bTE4IDBjMS42NiAwIDMgMS4zNCAzIDNzLTEuMzQgMy0zIDMtMy0xLjM0LTMtMyAxLjM0LTMgMy0zeiI+PC9wYXRoPgo8L3N2Zz4=) 50% 50% no-repeat",
            "background-size": "16px 16px"
          },
          "._close": {
            position: "absolute",
            top: "10px",
            right: "10px",
            height: "32px",
            width: "32px",
            cursor: "pointer",
            background:
              "transparent url(data:image/svg+xml;base64,CjxzdmcgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjE2IiB3aWR0aD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CjxwYXRoIGZpbGw9IiMwMDAiIGQ9Ik04IDUuNTA2TDMuMDE1LjUyQTEuNzY1IDEuNzY1IDAgMSAwIC41MjEgMy4wMTVMNS41MDYgOCAuNTIgMTIuOTg1QTEuNzY1IDEuNzY1IDAgMCAwIDEuNzY2IDE2YTEuNzYgMS43NiAwIDAgMCAxLjI0OC0uNTJMOCAxMC40OTNsNC45ODUgNC45ODVhMS43NjcgMS43NjcgMCAwIDAgMi40OTguMDA0IDEuNzYyIDEuNzYyIDAgMCAwLS4wMDQtMi40OThMMTAuNDk0IDhsNC45ODUtNC45ODVhMS43NjcgMS43NjcgMCAwIDAgLjAwNC0yLjQ5OCAxLjc2MiAxLjc2MiAwIDAgMC0yLjQ5OC4wMDRMOCA1LjUwNnoiPjwvcGF0aD4KPC9zdmc+) 50% 50% no-repeat",
            "background-size": "16px 16px"
          }
        },
        "._button": {
          cursor: "pointer",
          display: "inline-block",
          margin: "8px",
          height: "48px",
          padding: "0 20px",
          "font-size": "16px",
          "font-weight": "bold",
          "line-height": "48px",
          "text-align": "center",
          "border-radius": "24px",
          "background-color": "#efefef",
          color: "#000",
          "&._majorAction": { "background-color": "#e60023", color: "#fff" },
          "&._save": { display: "none", "background-color": "#e60023", color: "#fff" },
          "&._imagePickerFootNext": { "background-color": "#e60023", color: "#fff" },
          "&._cancel, &._imagePickerFootSelectAll": { "background-color": "#eee", color: "#000" },
          "&._disabled": { "background-color": "#ddd", color: "#aaa", cursor: "normal", "pointer-events": "none" }
        },
        "._hidden": { display: "none!important" }
      },
      f = {
        bg: {
          cmd: "close",
          me: {
            boardPickerOpener: {
              cmd: "close",
              boardPickerOpenerContainer: {
                boardPickerOpenerLabel: {},
                boardPickerOpenerCurrent: {},
                boardPickerOpenerMask: { addClass: "mask", cmd: "openBoardPicker" }
              },
              saveAction: { cmd: "save" },
              afterSave: { cmd: "visit", canShare: "true" }
            }
          },
          imagePicker: {
            interfaceHead: { close: { cmd: "closeImagePicker" } },
            imagePickerHead: { default: { imagePickerHeadMainCaption: {}, imagePickerHeadSubCaption: {} }, preview: {} },
            imagePickerBody: { grid: {} },
            imagePickerFoot: {
              imagePickerFootSelectAll: { addClass: "button", cmd: "selectAllThumbs" },
              imagePickerFootNext: { addClass: "button disabled", cmd: "openBoardPickerFromImagePicker" }
            },
            imagePickerFeedback: {
              imagePickerFeedbackBoardCover: {},
              imagePickerFeedbackBoardName: {},
              imagePickerFeedbackVisitButton: { cmd: "visit", canShare: "true", addClass: "button disabled" }
            }
          },
          boardPicker: {
            boardPickerHead: {
              boardPickerHeadLine: {},
              boardPickerHeadNav: { cmd: "close" },
              boardPickerHide: { addClass: "hidden", cmd: "backToImagePicker" },
              boardPickerInputBar: { boardPickerInput: { addClass: "search", tag: "INPUT" } }
            },
            boardPickerChoose: {
              boardPickerBoards: {
                boardPickerTopContainer: { boardPickerTopHeader: { addClass: "divider" }, boardPickerTopList: {} },
                boardPickerAllHeader: { addClass: "divider" },
                boardPickerAllList: {}
              },
              boardPickerSections: { addClass: "hidden" },
              boardPickerFoot: { plusIcon: {}, boardPickerSlugLine: {}, mask: { cmd: "openModeCreate" } }
            },
            boardPickerCreate: {
              boardPickerCreateBody: {
                boardPickerCreateSecretLabel: {
                  tag: "label",
                  boardPickerCreateSecretInput: { tag: "input", type: "checkbox" },
                  toggle: { knob: {}, boardPickerCreateSecretNo: { addClass: "optNo" }, boardPickerCreateSecretYes: { addClass: "optYes" } }
                }
              },
              boardPickerCreateFoot: {
                boardPickerCreateCancel: { cmd: "closeModeCreate", addClass: "button cancel" },
                boardPickerCreateGo: { cmd: "makeBoardOrSection", addClass: "button save disabled" }
              }
            }
          },
          boardPickerMask: { cmd: "close" },
          infoContainer: {
            interfaceHead: { close: { cmd: "closeImagePicker" } },
            authHelp: {
              authHelpHead: {},
              authHelpBody: {},
              authHelpFoot: { signIn: { addClass: "button majorAction", cmd: "getAuthHelp" } }
            }
          },
          searchContainer: {
            interfaceHead: { close: { cmd: "closeImagePicker" } },
            searchInside: { searchSelect: { tag: "canvas" } },
            searchResults: { searchResultsGrid: {} }
          }
        }
      },
      i = { boards: [], sections: {} },
      t = {},
      U = chrome || U,
      p = {
        me: "save",
        localValuesNeeded: ["boards", "ctrl", "debug", "experimentGroup", "msg", "override"],
        structure: f,
        presentation: T,
        delayAfterSave: 3e3,
        safetyTimeout: 1e4,
        limit: { grid: { selectedThumbs: 20 } },
        url: { helpSaving: "https://help.pinterest.com/en/article/trouble-with-pinterest-browser-button" },
        pattern: {
          api: /^https?:\/\/api\.pinterest\.com\//,
          trk: /^https?:\/\/trk\.pinterest\.com\//,
          pinmarklet: /^https?:\/\/assets\.pinterest\.com\/js\/pinmarklet\.js/,
          pinterestDomain:
            /^https?:\/\/(([a-z]{1,3}|latest)\.|)pinterest\.(at|(c(a|h|l|o(\.(kr|uk)|m(|\.(au|mx)))))|d(e|k)|es|fr|i(e|t)|jp|nz|p(h|t)|se|ru)\//,
          alwaysConvertToData: [/\.cdninstagram\.com/]
        }
      };
    function ke(e) {
      const a = e.target;
      return a.targetNodeType === 3 && (a = a.parentNode), a;
    }
    function w(e) {
      let a = null;
      return typeof e.el[e.att] == "string" ? (a = e.el[e.att]) : (a = e.el.dataset[e.att]), a;
    }
    function Ne(e) {
      e.name === "over" && !i.hazPinningNow && (i.stayOpen = !1);
    }
    function s(e) {
      let a, r;
      if (e.el)
        for (e.el.length || (e.el = [e.el]), a = 0; a < e.el.length; a = a + 1)
          e.el[a] &&
            e.el[a].classList &&
            (e.add &&
              (typeof e.add != "object" && (e.add = [e.add]),
              (r = e.add.map((d) => `${p.me}_${d}`)),
              e.el[a].classList.add.apply(e.el[a].classList, r)),
            e.remove &&
              (typeof e.remove != "object" && (e.remove = [e.remove]),
              (r = e.remove.map((d) => `${p.me}_${d}`)),
              e.el[a].classList.remove.apply(e.el[a].classList, r))),
            e.el[a].classList && !e.el[a].classList.length && e.el[a].removeAttribute("class");
    }
    function we() {
      return [1e7, 1e3, 4e3, 8e3, 1e11]
        .join("")
        .replace(/[018]/g, (e) => (e ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (e / 4)))).toString(16));
    }
    function m(e, a = 0) {
      e && i.debug && (typeof i.debug == "number" ? a >= i.debug && console.log(e) : console.log(e));
    }
    function O(e) {
      (e.via = p.me), (e.from = p.me), e.to || (e.to = "background"), m("Sending message"), m(JSON.stringify(e)), U.runtime.sendMessage(e);
    }
    function y(e) {
      var d, n;
      i.funnel_uuid || (i.funnel_uuid = we());
      const a = { eventType: "VIEW", viewType: e.viewType, auxData: { funnel_uuid: i.funnel_uuid } };
      e.eventType && e.element && ((a.eventType = e.eventType), delete a.viewType, (a.element = e.element));
      let r = e.url || ((d = i.saveMe) == null ? void 0 : d.url) || ((n = i.pinmarkletData) == null ? void 0 : n.url);
      r && (a.auxData.url = r), O({ to: "background", act: "contextLog", data: a });
    }
    function De(e) {
      e.name === "click" && (s({ el: t.bg, remove: "hazBoardPicker" }), y({ viewType: "IMAGE_PICKER" }));
    }
    function B(e = {}) {
      i.hazRendered && O({ act: "closeSave", data: e });
    }
    function E() {
      s({ el: t.bg, remove: "hazBoardPicker" });
    }
    function ye(e) {
      (e.name === "over" || e.name === "move") && (i.stayOpen || B()),
        e.name === "click" && (i.openBoardPickerFromSearch ? ((i.openBoardPickerFromSearch = !1), E()) : B());
    }
    function L(e) {
      typeof e.el[e.att] == "string" ? (e.el[e.att] = e.string) : (e.el.dataset[e.att] = e.string);
    }
    function V(e) {
      e.name === "click" &&
        ((i.pickerView = i.stashView),
        (t.boardPickerInput.value = ""),
        s({ el: t.boardPickerHeadNav, remove: "hidden" }),
        i.pickerView === "board"
          ? ((t.boardPickerHeadLine.innerText = i.msg.boardPickerChooseBoard),
            i.hazImagePicker && s({ el: t.boardPickerHide, remove: "hidden" }))
          : (t.boardPickerHeadLine.innerText = i.msg.boardPickerChooseSection),
        i.pickerView === "section"
          ? (L({ el: t.boardPickerHeadNav, att: "cmd", string: "closeSectionPicker" }), y({ viewType: "BOARD_SECTION_PICKER" }))
          : (s({ el: t.boardPickerHeadNav, remove: "back" }),
            L({ el: t.boardPickerHeadNav, att: "cmd", string: "close" }),
            y({ viewType: "BOARD_PICKER" })),
        s({ el: t.boardPicker, remove: "hazCreate" }));
    }
    function Ae(e) {
      e.name === "click" && ((i.hazRendered = !0), B());
    }
    function fe(e) {
      m("Close Section Picker"),
        e.name === "click" &&
          (i.hazImagePicker && s({ el: t.boardPickerHide, remove: "hidden" }),
          s({ el: t.boardPickerSections, add: "hidden" }),
          s({ el: t.boardPickerBoards, remove: "hidden" }),
          s({ el: t[i.searchSectionsUnderThisBoard + "_sections"], add: "hidden" }),
          (i.searchSectionsUnderThisBoard = ""),
          s({ el: t.boardPickerHeadNav, remove: "back" }),
          L({ el: t.boardPickerHeadNav, att: "cmd", string: "close" }),
          (t.boardPickerHeadLine.innerText = i.msg.boardPickerChooseBoard),
          (t.boardPickerSlugLine.innerText = i.msg.boardPickerCreateBoard),
          (i.pickerView = "board"),
          (t.boardPickerInput.value = ""),
          y({ viewType: "BOARD_PICKER" }),
          s({ el: t.boardPickerCreateSecretLabel, remove: "hidden" }));
    }
    function Ce(e) {
      e.name === "click" && O({ act: "getAuthHelp", data: {} });
    }
    function Te(e) {
      e.name === "click" && (window.open(p.url.helpSaving), B());
    }
    function je(e) {
      if (e.name === "click" && !e.element.className.match("_disabled")) {
        const a = { to: "background", replyTo: "save", data: { skipTimeCheck: !0 } };
        switch (i.stashView) {
          case "section":
            (a.act = "newSection"),
              (a.data.title = t.boardPickerInput.value),
              (a.data.board = w({ el: t.boardPickerHeadNav, att: "boardId" }));
            break;
          case "board":
            (a.act = "newBoard"), (a.data.name = t.boardPickerInput.value), (a.data.secret = t.boardPickerCreateSecretInput.checked);
        }
        a.act && O(a);
      }
    }
    function re(e) {
      e.name === "click" &&
        ((i.stashView = i.pickerView),
        s({ el: t.boardPickerHeadNav, add: "hidden" }),
        i.hazImagePicker && s({ el: t.boardPickerHide, add: "hidden" }),
        i.pickerView === "board"
          ? ((t.boardPickerHeadLine.innerText = i.msg.boardPickerCreateBoard), y({ viewType: "CREATE_BOARD" }))
          : ((t.boardPickerHeadLine.innerText = i.msg.boardPickerCreateSection), y({ viewType: "BOARD_SECTION_CREATE" })),
        i.boards.length || s({ el: t.boardPickerCreateCancel, add: "hidden" }),
        s({ el: t.boardPicker, add: "hazCreate" }));
    }
    function ze() {
      let e = "",
        a;
      function r() {
        const d = [],
          n = [],
          o = t.boardPickerInput.value.trim();
        (a = i.boards),
          i.searchSectionsUnderThisBoard && (a = i.sections[i.searchSectionsUnderThisBoard]),
          o
            ? (s({ el: [t.boardPickerTopContainer, t.boardPickerAllHeader], add: "hidden" }),
              o !== e &&
                (a.filter((l) => {
                  if (l.name.toLowerCase().match(o.toLowerCase())) {
                    let c = document.getElementsByClassName(`save_${l.id}`);
                    for (var M = 0; M < c.length; M = M + 1) n.push(c[M]);
                  } else {
                    let c = document.getElementsByClassName(`save_${l.id}`);
                    for (var M = 0; M < c.length; M = M + 1) d.push(c[M]);
                  }
                }),
                s({ el: [t.boardPickerCreateGo], remove: "disabled" }),
                n.length &&
                  n.filter((l) => {
                    (l.dataset.sectionTitle || l.dataset.boardName || "").toLowerCase() === o.toLowerCase() &&
                      s({ el: [t.boardPickerCreateGo], add: "disabled" });
                  }),
                s({ el: d, add: "hidden" }),
                s({ el: n, remove: "hidden" }),
                (e = o)))
            : (a.filter((l) => {
                let M = document.getElementsByClassName(`save_${l.id}`);
                for (var c = 0; c < M.length; c = c + 1) n.push(M[c]);
              }),
              s({ el: n, remove: "hidden" }),
              s({ el: [t.boardPickerTopContainer, t.boardPickerAllHeader], remove: "hidden" }),
              s({ el: [t.boardPickerCreateGo], add: "disabled" })),
          setTimeout(r, 100);
      }
      r();
    }
    function de(e) {
      if (e.el) {
        e.el.length || (e.el = [e.el]);
        for (let a = 0; a < e.el.length; a = a + 1)
          e.el[a].addEventListener(
            "scroll",
            (r) => {
              r.preventDefault();
            },
            { passive: !1 }
          ),
            e.el[a].addEventListener(
              "wheel",
              (r) => {
                r.preventDefault();
              },
              { passive: !1 }
            );
      }
    }
    function J(e) {
      if (e.name === "click") {
        i.stayOpen = !0;
        let a, r, d;
        if (e.fromImagePicker)
          (a = 65),
            (d = 20),
            (i.hazImagePicker = !0),
            s({ el: t.boardPicker, add: "fromImagePicker" }),
            s({ el: t.boardPickerHide, remove: "hidden" }),
            (i.boardId = null),
            y({ viewType: "BOARD_PICKER" });
        else if (e.fromSearch)
          s({ el: t.boardPicker, add: "fromSearch" }),
            s({ el: t.boardPickerHeadNav, add: "back" }),
            (i.boardId = null),
            y({ viewType: "BOARD_PICKER" });
        else {
          (a = i.position.top + 50), (r = i.position.left - 65);
          const n = window.innerHeight,
            o = window.innerWidth;
          r > o - 370 && (r = o - 370),
            r < 10 && (r = 10),
            a > n - 520 &&
              (a > 570
                ? (a = a - 560)
                : ((a = i.position.top - 300),
                  a < 20 && (a = 20),
                  o - i.position.left < 600 ? (r = i.position.left - 370) : (r = i.position.left + 245))),
            y({ viewType: "HOVER_BOARD_PICKER" });
        }
        (t.boardPicker.style.top = `${a}px`),
          typeof r == "number" ? (t.boardPicker.style.left = `${r}px`) : typeof d == "number" && (t.boardPicker.style.right = `${d}px`),
          s({ el: t.bg, add: "hazBoardPicker" }),
          setTimeout(ze, 100),
          (i.pickerView = "board"),
          de({ el: [t.boardPickerOpener, t.boardPickerMask, t.boardPickerHead, t.boardPickerFoot, t.boardPickerCreate] }),
          i.boards.length || re({ name: "click" });
      }
    }
    function ne(e) {
      e.name === "click" && J({ name: "click", fromImagePicker: !0 });
    }
    function Le(e) {
      if (e.name === "click") {
        i.hazImagePicker && s({ el: t.boardPickerHide, add: "hidden" }),
          s({ el: t.boardPickerBoards, add: "hidden" }),
          s({ el: t.boardPickerSections, remove: "hidden" });
        const a = w({ el: e.element, att: "boardId" });
        (i.searchSectionsUnderThisBoard = a),
          s({ el: t[i.searchSectionsUnderThisBoard + "_sections"], remove: "hidden" }),
          s({ el: t.boardPickerHeadNav, add: "back" }),
          L({ el: t.boardPickerHeadNav, att: "cmd", string: "closeSectionPicker" }),
          L({ el: t.boardPickerHeadNav, att: "boardId", string: a }),
          (t.boardPickerHeadLine.innerText = i.msg.boardPickerChooseSection),
          (t.boardPickerSlugLine.innerText = i.msg.boardPickerCreateSection),
          (i.pickerView = "section"),
          s({ el: t.boardPickerCreateSecretLabel, add: "hidden" }),
          y({ viewType: "BOARD_SECTION_PICKER" });
      }
    }
    function ce(e) {
      return new Promise((a) => {
        if (!e.url) {
          m("No image URL specified; assuming this is an imageless pin."), a({ status: "no_image_url" });
          return;
        }
        if (((e.format = "image/jpeg"), !e.amSearching)) {
          if (((e.format = "image/png"), !i.ctrl.canHaz.saveAsDataURI)) {
            m("Saving as data URIs not allowed by ctrl.json"), a({ status: "disallowed", url: e.url });
            return;
          }
          if (e.url.match(/\.gif/)) {
            m(e.url + " is a GIF; do not convert to data blob for saving."), a({ status: "gif", url: e.url });
            return;
          }
          if (e.url.match(/^data/)) {
            m("Original URL is already data; no need to convert for saving."), a({ status: "data" });
            return;
          }
        }
        m("Trying to collect image data");
        const r = document.createElement("IMG");
        (r.onload = function () {
          const d = document.createElement("CANVAS");
          this.naturalWidth > (e.maxWidth || p.limit.dataUrlWidth)
            ? ((d.width = e.maxWidth || p.limit.dataUrlWidth),
              (d.height = ((e.maxWidth || p.limit.dataUrlWidth) / this.naturalWidth) * this.naturalHeight))
            : ((d.height = this.naturalHeight), (d.width = this.naturalWidth), (d.imageSmoothingEnabled = !1));
          const n = { status: "ok", url: e.url, height: this.naturalHeight, width: this.naturalWidth };
          try {
            d.getContext("2d").drawImage(this, 0, 0, d.width, d.height),
              (n.height = d.height),
              (n.width = d.width),
              (n.dataURI = d.toDataURL(e.format)),
              m("Image conversion to URL succeeded.");
          } catch (o) {
            m("Image conversion to URL failed."), m(o);
          }
          a(n);
        }),
          (r.onerror = function () {
            m("Image conversion to URL failed."), a({ status: "error", url: e.url });
          }),
          p.pattern.alwaysConvertToData.some((d) => d.test(e.url))
            ? fetch(e.url)
                .then(function (d) {
                  return d.blob();
                })
                .then(function (d) {
                  const n = new FileReader();
                  n.readAsDataURL(d),
                    (n.onloadend = function () {
                      n.error ? a({ status: "error", url: e.url }) : (r.src = n.result);
                    });
                })
            : (r.src = e.url);
      });
    }
    function Z(e) {
      if (e.name === "click" && !i.hazPinningNow) {
        (i.hazPinningNow = !0), (i.stayOpen = !0);
        const a = i.saveMe.length ? i.saveMe : [i.saveMe],
          r = [];
        for (let d of a)
          ce({ url: d.media || "" }).then((n) => {
            (d = oe(te({}, d), { imageConverted: n })), r.push(d);
            const o = { act: "save", data: { pins: r, board: i.boardId, boardName: i.boardName, skipTimeCheck: !0 }, replyTo: "save" };
            i.sectionId && (o.data.section = i.sectionId),
              O(o),
              s({ el: t.saveAction, add: "working" }),
              i.openBoardPickerFromSearch && s({ el: i.openBoardPickerFromSearch, add: "working" });
          });
      }
    }
    function se(e) {
      const a = {
        pinCreate: `https://${i.ctrl.server.www}${i.ctrl.server.domain}/pin/create/extension/`,
        rePinCreate: `https://${i.ctrl.server.www}${i.ctrl.server.domain}/pin/%s/repin/x/`
      };
      e.method || (e.method = "h");
      const r = window.screenLeft != null ? window.screenLeft : screen.left,
        d = window.screenTop != null ? window.screenTop : screen.top,
        n = window.outerHeight
          ? window.outerHeight
          : window.defaultStatus.documentElement.clientHeight
          ? window.defaultStatus.documentElement.clientHeight
          : screen.height,
        o = window.outerHeight
          ? window.outerHeight
          : window.defaultStatus.documentElement.clientHeight
          ? window.defaultStatus.documentElement.clientHeight
          : screen.height,
        l = { height: 900, width: 800 },
        M = (o - l.width) / 2 + r,
        c = (n - l.height) / 2 + d;
      let g;
      e.id
        ? (g = a.rePinCreate.replace(/%s/, e.id) + "?xv=" + i.xv)
        : (g =
            a.pinCreate +
            "?url=" +
            encodeURIComponent(e.url) +
            "&media=" +
            encodeURIComponent(e.media) +
            "&xm=" +
            e.method +
            "&xv=" +
            i.xv +
            "&description=" +
            encodeURIComponent(e.description)),
        window.open(
          g,
          "pin" + Date.now(),
          "status=no,resizable=yes,scrollbars=yes,personalbar=no,directories=no,location=no,toolbar=no,menubar=no,height=" +
            l.height +
            ",width=" +
            l.width +
            ",left=" +
            M +
            ",top=" +
            c
        );
    }
    function Se(e) {
      if (e.name === "click") {
        if (w({ el: e.element, att: "pinId" })) se({ media: w({ el: e.element, att: "media" }), id: w({ el: e.element, att: "pinId" }) });
        else {
          const a = w({ el: e.element, att: "index" });
          if (a) {
            const r = a - 0,
              d = i.pinmarkletData.thumb[r];
            s({ el: t.imagePicker, add: ["hidden"] }), se({ url: d.url, media: d.media, description: d.description, id: d.id || "" });
          }
        }
        (i.hazRendered = !0), E();
      }
    }
    function X(e) {
      if (e.name === "click")
        try {
          (i.selectedThumbs || []).length
            ? ((i.hazRendered = !0),
              (i.saveMe = []),
              i.selectedThumbs.filter((a) => {
                i.saveMe.push(i.pinmarkletData.thumb[a]);
              }),
              i.boardId ||
                ((i.boardId = w({ el: e.element, att: "boardId" })),
                (i.sectionId = w({ el: e.element, att: "sectionId" })),
                (i.boardName = w({ el: e.element, att: "boardName" }))),
              Z({ name: "click" }),
              (t.imagePickerFeedbackBoardCover.style.backgroundImage = `url("${i.saveMe[0].dataURI || i.saveMe[0].src}")`),
              (t.imagePickerFeedbackBoardName.innerText = i.boardName),
              s({ el: t.boardPicker, add: "hidden" }),
              s({ el: t.bg, add: "hazImagePicker" }),
              window.setTimeout(() => {
                s({ el: t.imagePicker, add: "hazFeedback" });
              }, 10))
            : ((i.boardId = w({ el: e.element, att: "boardId" })),
              (i.sectionId = w({ el: e.element, att: "sectionId" })),
              (t.boardPickerOpenerCurrent.innerText = i.boardName = w({ el: e.element, att: "boardName" })),
              E(),
              Z({ name: "click" }));
        } catch (a) {
          B();
        }
    }
    function K(e) {
      const a = Object.keys(e)[0],
        r = e[a],
        d = document.createElement(a);
      for (let n in r) {
        const o = r[n];
        typeof o == "string" && L({ el: d, att: n, string: o }), typeof o == "object" && n === "style" && Object.assign(d.style, o);
      }
      return d;
    }
    function le(e) {
      if (e.name === "click") {
        const a = w({ el: e.element, att: "index" });
        if (a) {
          const r = a - 0;
          let d = !1;
          if (
            (i.selectedThumbs.forEach((n, o) => {
              if (n === r) {
                i.selectedThumbs.splice(o, 1), i.selectedThumbs.length || s({ el: t.imagePickerHead, remove: "hazImages" });
                const l = t.preview.getElementsByTagName("SPAN");
                for (let M = 0; M < l.length; M = M + 1)
                  if (w({ el: l[M], att: "index" }) - 0 === n) {
                    l[M].parentNode.removeChild(l[M]);
                    break;
                  }
                s({ el: e.element, remove: "selected" }), (d = !0);
              }
            }),
            !d && i.selectedThumbs.length < p.limit.grid.selectedThumbs)
          ) {
            i.selectedThumbs.unshift(r);
            const n = K({
              span: {
                className: "save_thumb",
                index: r + "",
                style: { backgroundImage: 'url("' + (i.pinmarkletData.thumb[r].dataURI || i.pinmarkletData.thumb[r].media) + '")' }
              }
            });
            t.preview.prepend(n), s({ el: t.imagePickerHead, add: "hazImages" }), s({ el: e.element, add: "selected" });
          }
          i.hazSelectAll ||
            (i.selectedThumbs.length ? s({ el: t.imagePicker, add: "hazFooter" }) : s({ el: t.imagePicker, remove: "hazFooter" })),
            i.selectedThumbs.length
              ? s({ el: t.imagePickerFootNext, remove: "disabled" })
              : s({ el: t.imagePickerFootNext, add: "disabled" });
        }
      }
    }
    function Pe(e) {
      if (e.name === "click") {
        let a, r, d;
        if (i.selectedThumbs.length === i.imagesInPicker) d = t.grid.getElementsByClassName("save_selected");
        else
          for (r = t.grid.getElementsByClassName("save_mask"), d = [], a = 0; a < r.length; a = a + 1)
            r[a].classList.contains("save_selected") || d.push(r[a]);
        for (a = d.length - 1; a > -1; a = a - 1) le({ element: d[a], name: "click" });
      }
    }
    function ve(e) {
      if (e.name === "click") {
        const a = `https://${i.ctrl.server.www}${i.ctrl.server.domain}/`,
          r = w({ el: e.element, att: "userName" });
        if (r) window.open(`${a}${r}`, "_blank");
        else {
          const d = w({ el: e.element, att: "pinId" });
          d && (y({ eventType: "CLICK", element: "VISIT_BUTTON" }), window.open(`${a}pin/${d}/`, "_blank"));
        }
      }
    }
    function Oe(e) {
      if (e.name === "click") {
        const a = e.element.parentNode.dataset.pinId || 0;
        a &&
          ((e.id = `update_me_${a}`),
          E(),
          (i.saveMe = { id: a }),
          (i.openBoardPickerFromSearch = e.element),
          J({ name: "click", fromSearch: !0 }));
      }
    }
    function Ee(e) {
      const a = {
        api: /^https?:\/\/api\.pinterest\.com\//,
        trk: /^https?:\/\/trk\.pinterest\.com\//,
        pinmarklet: /^https?:\/\/assets\.pinterest\.com\/js\/pinmarklet\.js/,
        pinterestDomain:
          /^https?:\/\/(([a-z]{1,3}|latest)\.|)pinterest\.(at|(c(a|h|l|o(\.(kr|uk)|m(|\.(au|mx)))))|d(e|k)|es|fr|i(e|t)|jp|nz|p(h|t)|se|ru)\//,
        alwaysConvertToData: [/\.cdninstagram\.com/]
      };
      return new Promise((r) => {
        if (!e.url) {
          m("No image URL specified; assuming this is an imageless pin."), r({ status: "no_image_url" });
          return;
        }
        if (((e.format = "image/jpeg"), !e.amSearching)) {
          if (((e.format = "image/png"), !i.ctrl.canHaz.saveAsDataURI)) {
            m("Saving as data URIs not allowed by ctrl.json"), r({ status: "disallowed", url: e.url });
            return;
          }
          if (e.url.match(/\.gif/)) {
            m(e.url + " is a GIF; do not convert to data blob for saving."), r({ status: "gif", url: e.url });
            return;
          }
          if (e.url.match(/^data/)) {
            m("Original URL is already data; no need to convert for saving."), r({ status: "data" });
            return;
          }
        }
        const d = document.createElement("IMG");
        (d.onload = function () {
          const n = document.createElement("CANVAS");
          this.naturalWidth > (e.maxWidth || p.limit.dataUrlWidth)
            ? ((n.width = e.maxWidth || p.limit.dataUrlWidth),
              (n.height = ((e.maxWidth || p.limit.dataUrlWidth) / this.naturalWidth) * this.naturalHeight))
            : ((n.height = this.naturalHeight), (n.width = this.naturalWidth), (n.imageSmoothingEnabled = !1));
          const o = { status: "ok", url: e.url, height: this.naturalHeight, width: this.naturalWidth };
          try {
            n.getContext("2d").drawImage(this, 0, 0, n.width, n.height),
              (o.height = n.height),
              (o.width = n.width),
              (o.dataURI = n.toDataURL(e.format)),
              m("Image conversion to URL succeeded.");
          } catch (l) {
            m("Image conversion to URL failed."), m(l);
          }
          r(o);
        }),
          (d.onerror = function () {
            m("Image conversion to URL failed."), r({ status: "error", url: e.url });
          }),
          a.alwaysConvertToData.some((n) => n.test(e.url))
            ? fetch(e.url)
                .then(function (n) {
                  return n.blob();
                })
                .then(function (n) {
                  const o = new FileReader();
                  o.readAsDataURL(n),
                    (o.onloadend = function () {
                      o.error ? r({ status: "error", url: e.url }) : (d.src = o.result);
                    });
                })
            : (d.src = e.url);
      });
    }
    function ge(e) {
      if (e.u) {
        m("Run search on"), m(e);
        const a = { act: "runSearch", data: { x: e.x || 0, y: e.y || 0, w: e.w || 1, h: e.h || 1, u: e.u }, tabId: e.tabId };
        a.data.img || a.data.u
          ? a.data.img && !a.data.u
            ? O(a)
            : Ee({ url: a.data.u, amSearching: !0, maxWidth: 256 }).then((r) => {
                (a.data.img = r.dataURI), O(a);
              })
          : m("Can't run search without an image!");
      }
    }
    function _e() {
      const e = { handleLength: i.searchConfig.handleLength },
        a = t.searchSelect.getContext("2d");
      function r(c) {
        const g = t.searchSelect.getBoundingClientRect();
        (e.x = Math.max(c.clientX - g.left, 0)),
          e.x && (e.x = Math.min(c.clientX - g.left, g.width)),
          (e.y = Math.max(c.clientY - g.top, 0)),
          e.y && (e.y = Math.min(c.clientY - g.top, g.height));
      }
      function d() {
        return {
          sx: Math.min(e.sel.sx, e.sel.ex),
          sy: Math.min(e.sel.sy, e.sel.ey),
          ex: Math.max(e.sel.sx, e.sel.ex),
          ey: Math.max(e.sel.sy, e.sel.ey)
        };
      }
      function n(c) {
        ge({
          x: c.x / t.searchSelect.width,
          y: c.y / t.searchSelect.height,
          w: c.w / t.searchSelect.width,
          h: c.h / t.searchSelect.height,
          u: i.searchMe
        });
      }
      function o() {
        a.clearRect(0, 0, t.searchSelect.width, t.searchSelect.height),
          a.beginPath(),
          a.moveTo(0, 0),
          a.lineTo(t.searchSelect.width, 0),
          a.lineTo(t.searchSelect.width, t.searchSelect.height),
          a.lineTo(0, t.searchSelect.height);
        const c = d();
        (a.strokeStyle = "#fff"),
          (a.lineWidth = 1),
          a.setLineDash([]),
          a.moveTo(c.sx, c.sy),
          a.lineTo(c.ex, c.sy),
          a.lineTo(c.ex, c.ey),
          a.lineTo(c.sx, c.ey),
          a.lineTo(c.sx, c.sy),
          a.stroke(),
          (a.fillStyle = "rgba(0,0,0,.50)"),
          a.fill("evenodd"),
          (a.lineWidth = i.searchConfig.handleWidth),
          (a.lineCap = "round"),
          (a.strokeStyle = "#fff"),
          (e.handleLength = i.searchConfig.handleLength),
          c.ex - c.sx < i.searchConfig.handleLength && (e.handleLength = c.ex - c.sx || 1),
          c.ey - c.sy < e.handleLength && (e.handleLength = c.ey - c.sy || 1),
          a.setLineDash([e.handleLength, i.searchConfig.handleWidth / 2]),
          a.beginPath(),
          a.moveTo(c.ex - e.handleLength, c.sy),
          a.lineTo(c.ex, c.sy),
          a.lineTo(c.ex, c.sy + e.handleLength),
          a.moveTo(c.ex, c.ey - e.handleLength),
          a.lineTo(c.ex, c.ey),
          a.lineTo(c.ex - e.handleLength, c.ey),
          a.moveTo(c.sx, c.ey - e.handleLength),
          a.lineTo(c.sx, c.ey),
          a.lineTo(c.sx + e.handleLength, c.ey),
          a.moveTo(c.sx, c.sy + e.handleLength),
          a.lineTo(c.sx, c.sy),
          a.lineTo(c.sx + e.handleLength, c.sy),
          a.stroke(),
          i.detectedArea &&
            ((a.fillStyle = "#fff"),
            i.detectedArea.forEach((g, I) => {
              I !== e.selectedHelperDot && (a.beginPath(), a.arc(g.cx, g.cy, i.searchConfig.dotRadius, 2 * Math.PI, !1), a.fill());
            }));
      }
      (t.searchSelect.onmousedown = (c) => {
        if ((E(), typeof e.selectedHelperDot == "number")) {
          let g = i.detectedArea[e.selectedHelperDot];
          (e.sel.sx = g.x), (e.sel.sy = g.y), (e.sel.ex = g.x + g.w), (e.sel.ey = g.y + g.h), o();
          return;
        }
        if ((delete e.helperDot, delete i.detectedArea, e.overSelection)) e.over = { x: e.x - e.sel.sx, y: e.y - e.sel.sy };
        else if (e.adjustingSelection) {
          t.searchSelect.className = "";
          let g;
          switch (e.adjustingSelection) {
            case "ne":
              (g = e.sel.sy), (e.sel.sy = e.sel.ey), (e.sel.ey = g);
              break;
            case "sw":
              (g = e.sel.sx), (e.sel.sx = e.sel.ex), (e.sel.ex = g);
              break;
            case "nw":
              (g = e.sel.sx), (e.sel.sx = e.sel.ex), (e.sel.ex = g), (g = e.sel.sy), (e.sel.sy = e.sel.ey), (e.sel.ey = g);
              break;
          }
        } else e.sel = { sx: e.x, sy: e.y };
        e.mouseDown = !0;
      }),
        (document.body.onmousemove = (c) => {
          if ((r(c), e.mouseDown)) {
            if (e.overSelection) {
              const g = e.sel.ex - e.sel.sx,
                I = e.sel.ey - e.sel.sy;
              (e.sel.sx = Math.max(e.x - e.over.x, 0)),
                (e.sel.sy = Math.max(e.y - e.over.y, 0)),
                (e.sel.ex = Math.min(e.sel.sx + g, t.searchSelect.width)),
                (e.sel.ey = Math.min(e.sel.sy + I, t.searchSelect.height));
            } else (e.sel.ex = e.x), (e.sel.ey = e.y);
            o();
          } else
            (e.overSelection = !1),
              (e.adjustingSelection = !1),
              (t.searchSelect.className = ""),
              e.sel &&
                (e.x > e.sel.sx &&
                  e.x < e.sel.ex &&
                  e.y > e.sel.sy &&
                  e.y < e.sel.ey &&
                  ((e.overSelection = !0),
                  s({ el: t.searchSelect, add: "move" }),
                  e.y < e.sel.sy + e.handleLength
                    ? e.x < e.sel.sx + e.handleLength
                      ? (s({ el: t.searchSelect, remove: "move", add: "nw" }), (e.adjustingSelection = "nw"), (e.overSelection = !1))
                      : e.x > e.sel.ex - e.handleLength &&
                        (s({ el: t.searchSelect, remove: "move", add: "ne" }), (e.adjustingSelection = "ne"), (e.overSelection = !1))
                    : e.y > e.sel.ey - e.handleLength &&
                      (e.x < e.sel.sx + e.handleLength
                        ? (s({ el: t.searchSelect, remove: "move", add: "sw" }), (e.adjustingSelection = "sw"), (e.overSelection = !1))
                        : e.x > e.sel.ex - e.handleLength &&
                          (s({ el: t.searchSelect, remove: "move", add: "se" }), (e.adjustingSelection = "se"), (e.overSelection = !1)))),
                !e.overSelection &&
                  !e.adjustingSelection &&
                  e.helperDot &&
                  ((e.selectedHelperDot = !1),
                  e.helperDot.forEach((g, I) => {
                    e.x > g.sx &&
                      e.x < g.ex &&
                      e.y > g.sy &&
                      e.y < g.ey &&
                      (s({ el: t.searchSelect, remove: "move", add: "pointer" }), (e.selectedHelperDot = I));
                  })));
        }),
        (t.searchSelect.onmouseup = (c) => {
          (e.sel = d()),
            (e.mouseDown = !1),
            n({ x: e.sel.sx, y: e.sel.sy, w: e.sel.ex - e.sel.sx, h: e.sel.ey - e.sel.sy }),
            c.stopPropagation();
        }),
        (document.body.onmouseup = (c) => {
          e.mouseDown = !1;
        });
      function l() {
        const c = t.searchSelect.width / window.outerWidth,
          g = t.searchSelect.height / window.outerHeight;
        i.detectedArea && i.detectedArea.length
          ? ((i.shouldClearSearchSelection = !1),
            (e.helperDot = []),
            (e.selectedHelperDot = 0),
            i.detectedArea.forEach((I) => {
              I.isFake ||
                ((I.x = I.x * c),
                (I.y = I.y * g),
                (I.w = I.w * c),
                (I.h = I.h * g),
                (I.cx = Math.round(I.x + I.w / 2)),
                (I.cy = Math.round(I.y + I.h / 2)),
                e.helperDot.push({
                  sx: I.cx - i.searchConfig.dotRadius,
                  ex: I.cx + i.searchConfig.dotRadius,
                  sy: I.cy - i.searchConfig.dotRadius,
                  ey: I.cy + i.searchConfig.dotRadius,
                  x: I.x,
                  y: I.y,
                  w: I.w,
                  h: I.h
                }));
            }),
            (e.sel = {
              sx: i.detectedArea[0].x,
              sy: i.detectedArea[0].y,
              ex: i.detectedArea[0].x + i.detectedArea[0].w,
              ey: i.detectedArea[0].y + i.detectedArea[0].h
            }),
            o(),
            n({ x: e.sel.sx, y: e.sel.sy, w: e.sel.ex - e.sel.sx, h: e.sel.ey - e.sel.sy }))
          : window.setTimeout(l, 100);
      }
      l();
      function M() {
        i.kickAutoSelect && ((i.kickAutoSelect = !1), l()), window.setTimeout(M, 100);
      }
      M();
    }
    function Be(e) {
      const a = {};
      function r(u) {
        function x(h) {
          let b = h.r / 255,
            D = h.g / 255,
            k = h.b / 255,
            C = Math.max(b, D, k),
            W = Math.min(b, D, k);
          const F = C - W;
          let v,
            ae = C == 0 ? 0 : F / C,
            ie = C;
          if (C == W) v = 0;
          else {
            switch (C) {
              case b:
                v = (D - k) / F + (D < k ? 6 : 0);
                break;
              case D:
                v = (k - b) / F + 2;
                break;
              case k:
                v = (b - D) / F + 4;
                break;
            }
            v = v / 6;
          }
          return (v = Math.round(v * 360)), (ae = Math.round(ae * 100)), (ie = Math.round(ie * 100)), { h: v, s: ae, v: ie };
        }
        const N = { r: [-1, 0, 1, 1, 1, 0, -1, -1], c: [1, 1, 1, 0, -1, -1, -1, 0] },
          A = {},
          j = [],
          H = K({ CANVAS: {} });
        (H.height = u.h), (H.width = u.w);
        const z = H.getContext("2d");
        z.drawImage(u.img, 0, 0, u.w, u.h);
        const P = z.getImageData(0, 0, u.w, u.h).data;
        (a.swatchSize = Math.max(
          Math.min(Math.floor(u.w / p.detect.swatchLimit), Math.floor(u.h / p.detect.swatchLimit)),
          p.detect.swatchMin
        )),
          m("Swatch size: " + a.swatchSize),
          (a.sample = []);
        for (let h = 0; h < u.h; h = h + a.swatchSize) {
          const b = [];
          for (let D = 0; D < u.w; D = D + a.swatchSize) {
            const k = (h * u.w + D) * 4,
              C =
                "#" +
                ("00" + P[k].toString(16)).substr(-2, 2) +
                ("00" + P[k + 1].toString(16)).substr(-2, 2) +
                ("00" + P[k + 2].toString(16)).substr(-2, 2),
              W = x({ r: P[k], g: P[k + 1], b: P[k] });
            A[C] || (A[C] = { t: 0 }), (A[C].t = A[C].t + 1), b.push({ hex: C, hsv: W });
          }
          a.sample.push(b);
        }
        for (let h in A) j.push({ k: h, t: A[h].t });
        j.sort(function (h, b) {
          return h.t < b.t ? 1 : h.t > b.t ? -1 : 0;
        });
        const be = { h: 0, s: 0, v: 0 };
        for (let h = 0; h < a.sample.length; h = h + 1)
          for (let b = 0; b < a.sample[0].length; b = b + 1) {
            const D = a.sample[h][b].hex;
            for (let k = 0; k < p.detect.isBackgroundThreshold; k = k + 1)
              if (D === j[k].k) {
                a.sample[h][b].isBg = !0;
                break;
              }
            a.sample[h][b].isBg || (a.sample[h][b].hsv.h === be.h && a.sample[h][b].hsv.v === be.v && (a.sample[h][b].isBg = !0));
          }
        for (let h = 0; h < a.sample.length; h = h + 1)
          for (let b = 0; b < a.sample[0].length; b = b + 1)
            if (!a.sample[h][b].isBg) {
              let D = 0;
              for (let k = 0; k < 8; k = k + 1) {
                var R = h + N.r[k],
                  ee = b + N.c[k];
                if (
                  R > -1 &&
                  ee > -1 &&
                  R < a.sample.length &&
                  a.sample[0].length &&
                  typeof a.sample[R][ee] == "object" &&
                  a.sample[R][ee].isBg &&
                  ((D = D + 1), D > p.detect.neighborScanLimit)
                ) {
                  a.sample[h][b].isBgNext = !0;
                  break;
                }
              }
            }
        for (let h = 0; h < a.sample.length; h = h + 1)
          for (let b = 0; b < a.sample[0].length; b = b + 1) a.sample[h][b].isBgNext && (a.sample[h][b].isBg = !0);
      }
      function d(u, x) {
        let N, A, j;
        if (Y[u + "/" + x])
          for (
            u < c && (c = u), u > I && (I = u), x < g && (g = x), x > G && (G = x), Y[u + "/" + x] = !1, Q = Q - 1, N = 0;
            N < 4;
            N = N + 1
          )
            (A = u + pe.r[N]), (j = x + pe.c[N]), Y[A + "/" + j] === !0 && d(A, j);
      }
      function n() {
        let u, x, N;
        (I = 0), (G = 0), (c = a.sample.length), (g = a.sample[0].length);
        for (N in Y)
          if (Y[N]) {
            (u = N.split("/")[0] - 0), (x = N.split("/")[1] - 0), d(u, x);
            break;
          }
      }
      function o() {
        let u, x, N, A, j, H;
        for (j = (i.searchConfig.handleLength / a.swatchSize) * 2, u = S.length - 1; u > -1; u = u - 1)
          (x = S[u]),
            (S[u].score = x.h * x.w),
            x.h < j || x.w < j
              ? S.splice(u, 1)
              : ((N = x.h), (A = x.w), A > N * 3 && (S.splice(u, 1), (H = !0)), N > A * 3 && (N = A * 3), H || (S[u].score = N * A));
        S.sort((z, P) => (z.score < P.score ? 1 : z.score > P.score ? -1 : 0)),
          (i.detectedArea = []),
          S.forEach((z) => {
            z.score > S[0].score * p.detect.minQuality &&
              i.detectedArea.push({ x: z.c * a.swatchSize, y: z.r * a.swatchSize, h: z.h * a.swatchSize, w: z.w * a.swatchSize });
          }),
          i.detectedArea.length ||
            i.detectedArea.push({ x: 10, y: 10, w: t.searchSelect.width - 20, h: t.searchSelect.height - 20, isFake: !0 });
      }
      function l() {
        n(),
          window.setTimeout(() => {
            S.push({ h: I - c, w: G - g, r: c, c: g }), Q ? l() : o();
          }, 10);
      }
      p.detect = { swatchLimit: 64, swatchMin: 2, neighborScanLimit: 1, isBackgroundThreshold: 3, minQuality: 0.1 };
      function M() {
        for (let u = 0; u < a.sample.length; u = u + 1)
          for (let x = 0; x < a.sample[0].length; x = x + 1) a.sample[u][x].isBg || ((Y[u + "/" + x] = !0), (Q = Q + 1));
        l();
      }
      let c,
        g,
        I,
        G,
        Q = 0,
        Y = {},
        S = [],
        pe = { r: [-1, 0, 1, 0], c: [0, 1, 0, -1] };
      const Ie = new Image();
      (Ie.onload = function () {
        r({ img: this, h: this.naturalHeight, w: this.naturalWidth }), M();
      }),
        (Ie.src = e.img);
    }
    function Me(e) {
      if (e.data) {
        (t.bg.style.display = "block"),
          (t.boardPickerOpener.style.display = "none"),
          s({ el: t.bg, remove: "hazBoardPicker", add: "hazSearch" }),
          window.clearTimeout(i.safetyTimer),
          (t.bg.dataset.cmd = ""),
          e.data.method === "r" && ((e.data.width = window.outerWidth), (e.data.height = window.outerHeight)),
          (t.searchInside.style.backgroundImage = `url("${e.data.searchMe}")`),
          (i.searchMe = e.data.searchMe);
        const d = Math.min(360, Math.round((360 * e.data.height) / e.data.width)),
          n = Math.round((d * e.data.width) / e.data.height);
        (t.searchInside.style.height = `${d}px`),
          (t.searchResults.style.height = `${590 - d}px`),
          (t.searchSelect.height = `${d}`),
          (t.searchSelect.width = `${n}`),
          (i.shouldClearSearchSelection = !0),
          e.data.method === "r"
            ? Be({ img: e.data.searchMe, h: d, w: n })
            : ((i.detectedArea = [{ x: 10, y: 10, w: t.searchSelect.width - 20, h: t.searchSelect.height - 20, isFake: !0 }]),
              e.data.method === "g" && (i.kickAutoSelect = !0)),
          i.hazLoggedSearchView ||
            ((i.hazLoggedSearchView = !0),
            y({ viewType: "VISUAL_SEARCH" }),
            (i.searchConfig = { handleWidth: 4, handleLength: 12, handlePad: 4, dotRadius: 6 }),
            _e());
      }
    }
    function Ye(e) {
      e.name === "click" &&
        ((t.searchResultsGrid.innerHTML = ""),
        Me({
          data: {
            searchMe: e.element.parentNode.dataset.searchMe,
            method: "g",
            height: e.element.parentNode.dataset.height,
            width: e.element.parentNode.dataset.width
          }
        }));
    }
    const $ = {
      allowClose: Ne,
      close: ye,
      closeImagePicker: Ae,
      closeModeCreate: V,
      closeSectionPicker: fe,
      getAuthHelp: Ce,
      getSaveHelp: Te,
      backToImagePicker: De,
      makeBoardOrSection: je,
      openBoardPickerFromImagePicker: ne,
      openModeCreate: re,
      openSectionPicker: Le,
      save: Z,
      saveBoardPicker: X,
      saveUnauthed: Se,
      selectAllThumbs: Pe,
      toggleThumbSelect: le,
      visit: ve,
      openBoardPickerFromSearch: Oe,
      refineSearch: Ye
    };
    function q(e) {
      let a = ke(e.event),
        r = w({ el: a, att: "cmd" });
      typeof $[r] == "function" && $[r]({ element: a, name: e.name });
    }
    function He(e) {
      q({ event: e, name: "click" });
    }
    function Ze(e) {
      e.keyCode === 27 && (i.openBoardPickerFromSearch ? ((i.openBoardPickerFromSearch = !1), E()) : ((i.hazRendered = !0), B()));
    }
    function Qe(e) {
      q({ event: e, name: "move" });
    }
    function Ue(e) {
      q({ event: e, name: "over" });
    }
    function ue(e) {
      return new DOMParser()
        .parseFromString(e.str, "text/html")
        .documentElement.textContent.replace(/(\n|\r)/g, "")
        .replace(/ +(?= )/g, "");
    }
    function _(e) {
      for (const a in e.template) {
        const r = e.template[a];
        if (r)
          if (typeof r == "string" || typeof r == "number")
            a === "addClass"
              ? r.split(" ").map((n) => {
                  e.addTo.className = `${e.addTo.className} ${p.me}_${n}`;
                })
              : a === "text"
              ? (e.addTo.innerText = ue({ str: r }))
              : a !== "tag" && L({ el: e.addTo, att: a, string: `${r}` });
          else if (a === "style") Object.assign(e.addTo.style, r);
          else {
            const d = { [r.tag || "SPAN"]: { className: `${p.me}_${a}` } },
              n = K(d);
            if ((e.prepend ? e.addTo.prepend(n) : e.addTo.appendChild(n), !t[a] && ((t[a] = n), i.msg[a]))) {
              const o = i.msg[a];
              n.tagName === "INPUT" ? (n.placeholder = o) : (n.innerText = ue({ str: o }));
            }
            _({ template: r, addTo: n });
          }
      }
    }
    function Ge(e) {
      let a = "";
      const r = (l) => {
        let M = "";
        for (let c in l.obj)
          if (typeof l.obj[c] == "object") {
            let g = l.selector + " " + c;
            (g = g.replace(/ &/g, "")), (g = g.replace(/,/g, ", " + l.selector)), r({ obj: l.obj[c], selector: g });
          } else
            M ||
              (M = ` {
`),
              (M =
                M +
                "  " +
                c +
                ": " +
                l.obj[c] +
                `;
`);
        M &&
          ((M =
            M +
            `}
`),
          (a = a + l.selector + M));
      };
      r({ obj: e, selector: "" });
      const d = document.createElement("style");
      d.setAttribute("type", "text/css");
      const n = /^(moz|webkit|ms)(?=[A-Z])/i;
      let o = "";
      for (let l in document.body.style)
        if (n.test(l)) {
          o = "-" + l.match(n)[0].toLowerCase() + "-";
          break;
        }
      (a = a.replace(/\._/g, "." + p.me + "_")),
        (a = a.replace(/%prefix%/g, o)),
        d.appendChild(document.createTextNode(a)),
        document.head.appendChild(d);
    }
    function Re(e) {
      (i.boardId = e.data.id), (i.boardName = e.data.name);
      const a = e.data;
      (t.boardPickerOpenerCurrent.innerText = e.data.name),
        E(),
        (i.selectedThumbs || []).length ? X({ name: "click" }) : Z({ name: "click" }),
        V({ name: "click" });
      const r = { secret: { addClass: "hidden" } };
      e.data.privacy === "secret" && (r.secret = {});
      const d = document.getElementsByClassName("save_boardPickerTopList")[0];
      _({
        addTo: d,
        prepend: !0,
        template: {
          [a.id]: {
            addClass: "item",
            boardName: a.name.toLowerCase(),
            cover: {},
            info: { text: a.name },
            helpers: { isSecret: r },
            saveButton: { addClass: "button save", text: i.msg.saveAction },
            mask: { cmd: "saveBoardPicker", boardId: a.id, boardName: a.name }
          }
        }
      }),
        d.removeChild(d.lastChild);
    }
    function We(e) {
      L({ el: t.afterSave, att: "cmd", string: "getSaveHelp" }),
        (t.afterSave.innerText = i.msg.help),
        (t.boardPickerOpenerLabel.innerText = (e.data || {}).message || i.msg.msgOops),
        (t.boardPickerOpenerCurrent.innerText = (e.data || {}).message_detail || i.msg.msgPinFail),
        s({ el: t.boardPickerOpener, add: ["feedback", "fail"] }),
        window.setTimeout(() => {
          i.stayOpen = !1;
        }, p.delayAfterSave);
    }
    function Fe(e) {
      (t.afterSave.innerText = i.msg.visitButton),
        L({ el: t.afterSave, att: "pinId", string: e.data.id }),
        s({ el: t.saveAction, add: "done", remove: "working" }),
        L({ el: t.imagePickerFeedbackVisitButton, att: "pinId", string: e.data.id }),
        s({ el: t.imagePickerFeedbackVisitButton, remove: "disabled" }),
        y({ viewType: "PIN_CREATE_SUCCESS" }),
        i.openBoardPickerFromSearch
          ? (s({ el: i.openBoardPickerFromSearch, remove: "working", add: "done" }),
            (i.openBoardPickerFromSearch.dataset.cmd = "visit"),
            (i.openBoardPickerFromSearch.dataset.canShare = "true"),
            (i.openBoardPickerFromSearch.dataset.pinId = e.data.id),
            (i.openBoardPickerFromSearch = !1),
            (i.hazPinningNow = !1))
          : window.setTimeout(() => {
              (t.boardPickerOpenerLabel.innerText = i.msg.boardPickerSuccessLabel),
                s({ el: t.boardPickerOpener, add: "feedback" }),
                window.setTimeout(() => {
                  (i.stayOpen = !1), (i.hazRendered = !0);
                }, p.delayAfterSave);
            }, p.delayAfterPinResults);
    }
    function Ve(e) {
      (i.boardId = e.data.board.id),
        (i.boardName = e.data.title),
        (i.sectionId = e.data.id),
        (t.boardPickerOpenerCurrent.innerText = e.data.title),
        E(),
        (i.selectedThumbs || []).length ? X({ name: "click" }) : Z({ name: "click" }),
        m("Close section called"),
        V({ name: "click" });
      const a = document.getElementsByClassName("save_" + e.data.board.id + "_sections")[0];
      _({
        prepend: !0,
        template: {
          [e.data.board.id]: {
            addClass: "item",
            sectionTitle: e.data.title,
            info: { addClass: "isSectionName", text: e.data.title },
            saveButton: {
              addClass: "button save",
              text: i.msg.saveAction,
              cmd: "saveBoardPicker",
              boardId: e.data.board.id,
              boardName: e.data.title,
              sectionId: e.data.id
            }
          }
        },
        addTo: a
      });
      const r = a.children,
        d = r[1].cloneNode(!0);
      r[0].parentNode.insertBefore(d, r[0]), r[2].parentNode.removeChild(r[2]);
    }
    function Je(e) {
      let a = 0;
      function r() {
        if (
          ((i.pinmarkletData = e.data),
          (i.selectedThumbs = []),
          (i.imagesInPicker = 0),
          (t.bg.style.display = "block"),
          (t.boardPickerOpener.style.display = "none"),
          s({ el: t.bg, remove: "hazBoardPicker" }),
          window.clearTimeout(i.safetyTimer),
          m("Render pinmarklet"),
          e.data.thumb.length > 1 || !e.data.auth)
        ) {
          for (let o = 0; o < 3; o = o + 1) _({ template: { col: { id: "column_" + o } }, addTo: t.grid });
          let n = 0;
          e.data.thumb.forEach((o, l) => {
            if ((m("Thumb data it be added"), m(o), o.src)) {
              const M = {
                thumb: {
                  image: { tag: "img", src: o.dataURI || o.src },
                  checkbox: { checkmark: { addClass: "checkmark" } },
                  mask: { index: "" + l, cmd: "toggleThumbSelect" }
                }
              };
              e.data.auth || (M.thumb.mask.cmd = "saveUnauthed"),
                _({ template: M, addTo: document.getElementById(`column_${n}`) }),
                i.imagesInPicker++,
                (n = (n + 1) % 3);
            }
          }),
            i.imagesInPicker <= p.limit.grid.selectedThumbs &&
              ((i.hazSelectAll = !0), s({ el: t.imagePicker, add: "hazFooter" }), s({ el: t.imagePickerFoot, add: "hazSelectAll" })),
            s({ el: t.bg, add: ["fromImagePicker", "hazImagePicker"] }),
            e.data.auth || s({ el: t.imagePicker, remove: ["hazFooter"], add: ["hideSubCaption"] }),
            y({ viewType: "IMAGE_PICKER" });
        } else
          s({ el: t.bg, add: ["hazBoardPicker", "hazImagePicker", "hazOnlyOneImage"] }), i.selectedThumbs.push(0), ne({ name: "click" });
      }
      function d() {
        a ? window.setTimeout(d, 10) : r();
      }
      e.data &&
        (e.data.thumb.filter((n) => {
          p.pattern.alwaysConvertToData.some((o) => o.test(n.media)) &&
            (a++,
            ce({ url: n.media }).then((o) => {
              o.dataURI && (n.dataURI = o.dataURI), a--;
            }));
        }),
        d());
    }
    function Xe(e) {
      var r;
      (r = e.data) != null && r.searchMe && (i.stayOpen = !0);
      const a = () => {
        t.me
          ? ((i.saveMe = oe(te({}, e.data), {
              url: e.data.url,
              media: e.data.media,
              id: e.data.id || 0,
              description: e.data.description || ""
            })),
            (i.position = { top: e.data.top, left: e.data.left }),
            (t.me.style.top = i.position.top + "px"),
            (t.me.style.left = i.position.left + "px"),
            (t.me.style.display = "block"),
            (i.hazRendered = !0),
            window.clearTimeout(i.safetyTimer),
            de({ el: [t.me] }),
            (t.bg.style.display = "block"),
            y({ viewType: "HOVER_BOARD_OPENER" }))
          : window.setTimeout(a, 10);
      };
      a();
    }
    function Ke(e) {
      let a = e.data.data;
      if (a.length) {
        t.searchResultsGrid.innerHTML = "";
        const r = [],
          d = 2;
        t.searchResultsGrid.className = `save_searchResultsGrid save_cols_${d}`;
        for (let o = 0; o < d; o = o + 1)
          _({ template: { col: { id: "search_column_" + o } }, addTo: t.searchResultsGrid }),
            r.push(document.getElementById(`search_column_${o}`));
        let n = 0;
        t.searchResultsGrid.scrollIntoView(!0),
          a.forEach((o) => {
            if (o.image_medium_url) {
              const l = {
                thumb: {
                  image: { tag: "img", src: o.image_medium_url },
                  mask: {
                    cmd: "visit",
                    pinId: o.id,
                    name: "click",
                    height: o.image_medium_size_pixels.height,
                    width: o.image_medium_size_pixels.width,
                    searchMe: o.image_medium_url,
                    refine: { name: "click", cmd: "refineSearch" },
                    openBoardPickerFromSearch: { cmd: "openBoardPickerFromSearch" }
                  },
                  footer: {
                    avatar: { tag: "img", src: o.pinner.image_small_url, cmd: "visit", userName: o.pinner.username },
                    title: { text: o.title.trim() || o.description.trim() || o.pinner.full_name }
                  }
                }
              };
              e.data.auth ||
                ((l.thumb.mask.openBoardPickerFromSearch.name = "click"),
                (l.thumb.mask.openBoardPickerFromSearch.cmd = "saveUnauthed"),
                (l.thumb.mask.openBoardPickerFromSearch.pinId = o.id),
                (l.thumb.mask.openBoardPickerFromSearch.media = o.image_medium_url)),
                _({ template: l, addTo: r[n] }),
                (n = (n + 1) % d);
            }
          }),
          y({ viewType: "VISUAL_SEARCH_RESULTS" });
      }
    }
    const he = {
      newBoardWin: Re,
      newPinFail: We,
      newPinWin: Fe,
      newSectionWin: Ve,
      renderStructure: Xe,
      renderPinmarkletData: Je,
      renderSearch: Me,
      runSearch: ge,
      showResults: Ke
    };
    function $e() {
      U.runtime.onMessage.addListener((e, a) => {
        e.to === p.me &&
          (m("Message received"),
          m(e),
          e.act && typeof he[e.act] == "function"
            ? (((a || {}).tab || {}).id && (e.tabId = a.tab.id), he[e.act](e))
            : m("No handler found for " + e.act, 1));
      });
    }
    function qe() {
      if (!i.boards.length) {
        m("No boards found, exiting browser_extension_full_picker");
        return;
      }
      const e = p.structure.bg.boardPicker;
      (e.boardPickerHead.boardPickerHeadLine.text = i.msg.boardPickerChooseBoard),
        (e.boardPickerChoose.boardPickerFoot.boardPickerSlugLine.text = i.msg.boardPickerCreateBoard);
      function a(o) {
        (e.boardPickerChoose.boardPickerSections[o.board + "_sections"][o.section || o.board] = {
          addClass: "item",
          info: { addClass: "isSectionName", text: o.title || o.name },
          saveButton: { addClass: "button save", text: i.msg.saveAction, cmd: "saveBoardPicker", boardId: o.board, boardName: o.name }
        }),
          o.section &&
            ((e.boardPickerChoose.boardPickerSections[o.board + "_sections"][o.section].sectionTitle = o.title),
            (e.boardPickerChoose.boardPickerSections[o.board + "_sections"][o.section].saveButton.sectionId = o.section));
      }
      function r(o) {
        (e.boardPickerChoose.boardPickerSections[o.board + "_sections"] = { addClass: "hidden" }),
          d(
            { image_cover_url: o.image_cover_url, id: o.board, board: o.board, name: o.name },
            e.boardPickerChoose.boardPickerSections[o.board + "_sections"]
          ),
          (i.sections[o.board] = []),
          o.sections.filter((l) => {
            i.sections[o.board].push({ id: l.id, name: l.title }), a({ board: o.board, name: o.name, section: l.id, title: l.title });
          });
      }
      function d(o, l) {
        (l[o.id] = {
          addClass: "item",
          boardName: o.name.toLowerCase(),
          cover: { style: { backgroundImage: `url(${o.image_cover_url})` } },
          info: { text: o.name },
          helpers: { collaborative: {}, secret: {}, opener: {} },
          saveButton: { addClass: "button save", text: i.msg.saveAction },
          mask: { cmd: "saveBoardPicker", boardId: o.id, boardName: o.name }
        }),
          o.is_collaborative || (l[o.id].helpers.collaborative.addClass = "hidden"),
          o.privacy !== "secret" && (l[o.id].helpers.secret.addClass = "hidden"),
          o.section_count
            ? o.sections &&
              o.sections.length &&
              ((l[o.id].addClass = "item hazSection"),
              (l[o.id].mask.cmd = "openSectionPicker"),
              (l[o.id].mask.boardId = o.id),
              (l[o.id].mask.boardName = o.name),
              r({ board: o.id, name: o.name, sections: o.sections, image_cover_url: o.image_cover_url }))
            : (l[o.id].helpers.opener.addClass = "hidden");
      }
      const n = [...i.boards];
      n.filter((o, l) => {
        l < 3 && d(o, e.boardPickerChoose.boardPickerBoards.boardPickerTopContainer.boardPickerTopList);
      }),
        n.sort((o, l) => (o.name.toLowerCase() > l.name.toLowerCase() ? 1 : o.name.toLowerCase() < l.name.toLowerCase() ? -1 : 0)),
        n.filter((o) => {
          d(o, e.boardPickerChoose.boardPickerBoards.boardPickerAllList);
        }),
        (p.structure.bg.boardPickerMask = { cmd: "close" }),
        (p.structure.bg.boardPicker = e),
        ($.openBoardPicker = J);
    }
    function ea() {
      qe(),
        document.body.addEventListener("click", He),
        document.addEventListener("mouseover", Ue),
        document.addEventListener("mousemove", Qe),
        document.addEventListener("keydown", Ze),
        i.debug || document.addEventListener("contextmenu", (e) => e.preventDefault()),
        Ge(p.presentation),
        _({ template: p.structure, addTo: document.body }),
        i.boards.length &&
          ((t.boardPickerOpenerCurrent.innerText = i.boards[0].name), (i.boardId = i.boards[0].id), (i.boardName = i.boards[0].name)),
        $e(),
        (i.safetyTimer = window.setTimeout(() => {
          O({ act: "closeSave" });
        }, p.safetyTimeout));
    }
    U.storage.local.get(p.localValuesNeeded || null, (e) => {
      for (let a in e) i[a] = e[a];
      if (i.msg) {
        const a = {
          boardPickerSaveAction: "saveAction",
          boardPickerChooseBoard: "chooseBoard",
          boardPickerChooseSection: "chooseSection",
          boardPickerTopHeader: "topChoices",
          boardPickerAllHeader: "allBoards",
          boardPickerCreateBoard: "createBoard",
          boardPickerCreateSection: "addSection",
          boardPickerCreateSecretLabel: "addFormSecretLabel",
          boardPickerCreateSecretYes: "optYes",
          boardPickerCreateSecretNo: "optNo",
          boardPickerCreateCancel: "closeAddForm",
          boardPickerCreateGo: "submitAddForm",
          imagePickerHeadMainCaption: "choosePinMultiSelectHeader",
          imagePickerHeadSubCaption: "choosePinSelectAllSubHeader",
          imagePickerFootSelectAll: "selectAll",
          imagePickerFootNext: "nextAction",
          imagePickerFeedbackVisitButton: "visitButton"
        };
        for (let r in a) i.msg[a[r]] && (i.msg[r] = i.msg[a[r]]);
      }
      ea();
    });
  })();
})();
