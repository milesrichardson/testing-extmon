typeof browser < "u" && (chrome = browser),
  (() => {
    "use strict";
    var H = {};
    let L = chrome.runtime.getManifest().debug || !1;
    function F() {
      return L;
    }
    function _(e = !0) {
      L = e;
    }
    function a(...e) {
      const D = e.toString().toLowerCase().includes("error");
      return e.unshift(`${new Date().toLocaleTimeString()}	`), D ? (console.error(...e), console.trace()) : console.log(...e), !0;
    }
    function w(...e) {
      return L ? a(...e) : !1;
    }
    function d(...e) {
      return new Promise((D, I) => {
        chrome.storage.local.get(e.length ? e : null, (g) => {
          if (chrome.runtime.lastError) w("prefsGet ERROR", chrome.runtime.lastError), I(chrome.runtime.lastError);
          else {
            let s = null;
            if (e.length <= 0) s = g;
            else if (e.length === 1) {
              const n = e[0];
              g && g.hasOwnProperty(n) && (s = g[n]);
            } else
              (s = {}),
                e.forEach((n) => {
                  (s[n] = null), g && g.hasOwnProperty(n) && (s[n] = g[n]);
                });
            D(s);
          }
        });
      });
    }
    function k(e) {
      if (e == null) throw new Error("Bad argument");
      return new Promise((D, I) => {
        try {
          chrome.storage.local.set(e, () => {
            chrome.runtime.lastError ? (a("prefsSet ERROR", chrome.runtime.lastError), I(chrome.runtime.lastError)) : D(e);
          });
        } catch (g) {
          a("prefsSet ERROR", g), I(g);
        }
      });
    }
    function J(e, D) {
      return typeof D > "u" ? d(e) : k({ [e]: D });
    }
    function X(e) {
      let D = 0,
        I,
        g;
      if (e.length === 0) return D;
      for (g = 0; g < e.length; g++) (I = e.charCodeAt(g)), (D = (D << 5) - D + I), (D &= D);
      return D;
    }
    function K(e) {
      const I = e.split(".")[1].replace(/-/g, "+").replace(/_/g, "/"),
        g = decodeURIComponent(
          window
            .atob(I)
            .split("")
            .map((s) => `%${`00${s.charCodeAt(0).toString(16)}`.slice(-2)}`)
            .join("")
        );
      return JSON.parse(g);
    }
    function V() {
      return new Date().toISOString().split("T")[0];
    }
    const U = () => {
      chrome.runtime.lastError && w("defaultCallback error:", chrome.runtime.lastError);
    };
    function p(e, D, I = "") {
      return new Promise((g) => {
        chrome.runtime.sendMessage({ name: e, message: D, origin: I }, (s) => {
          chrome.runtime.lastError && (w(chrome.runtime.lastError, e, D), g(!1)), g(s);
        });
      });
    }
    function u(e, D, I = "", g = U()) {
      return w("Panel sendMessage: sending to background", e), chrome.runtime.sendMessage({ name: e, message: D, origin: I }, g);
    }
    function q(e) {
      e.preventDefault();
      let D = e.target;
      for (; !D.href; ) D = D.parentElement;
      const { href: I } = D;
      u("openNewTab", { url: I, become_active: !0 });
    }
    function MM() {
      u("account.openSubscriptionPage"), window.close();
    }
    function NM(e) {
      u("account.openCheckoutPage", { utm: e }), window.close();
    }
    function eM(e) {
      e.preventDefault(), u("account.openSupportPage"), window.close();
    }
    function DM(e) {
      e.preventDefault(), u("openAccountAndroid");
    }
    function Q(e) {
      function D(s, n) {
        return p(s, n, e);
      }
      function I(s, n, i) {
        w(`origin ${e} sending to handler`, s), u(s, n, e, i);
      }
      function g(s, n, i) {
        w(`origin ${e} sending to background onMessageHandler`, s), u(s, n, "", i);
      }
      return { sendMessageInPromise: D, sendMessage: I, sendMessageToBackground: g };
    }
    const Y =
        "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTJweCIgaGVpZ2h0PSIxMnB4IiB2aWV3Qm94PSIwIDAgMTIgMTIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ3LjEgKDQ1NDIyKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5GaWxsIDI8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iR2hvc3RlcnktOC1wb3AtdXAtc3BlY3MiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC04MjkuMDAwMDAwLCAtMjk4LjAwMDAwMCkiIGZpbGw9IiMwNDcxOUEiPgogICAgICAgICAgICA8cGF0aCBkPSJNODM3LjA2MjI3OCwzMDQgTDg0MC41NzA5OTEsMzAwLjQ5MDg5OCBDODQxLjE0MDkyOCwyOTkuOTIxMzUgODQxLjE0MDkyOCwyOTguOTk3MzkgODQwLjU3MDk5MSwyOTguNDI3NDUzIEM4NDAuMDAxMDU0LDI5Ny44NTc1MTYgODM5LjA3NzA5NCwyOTcuODU3NTE2IDgzOC41MDkxMDIsMjk4LjQyNzQ1MyBMODM1LDMwMS45Mzc3MjIgTDgzMS40OTA4OTgsMjk4LjQyNzQ1MyBDODMwLjkyMTM1LDI5Ny44NTc1MTYgODI5Ljk5NzM5LDI5Ny44NTc1MTYgODI5LjQyNzQ1MywyOTguNDI3NDUzIEM4MjguODU3NTE2LDI5OC45OTczOSA4MjguODU3NTE2LDI5OS45MjEzNSA4MjkuNDI3NDUzLDMwMC40OTA4OTggTDgzMi45MzYxNjYsMzA0IEw4MjkuNDI3NDUzLDMwNy41MDkxMDIgQzgyOC44NTc1MTYsMzA4LjA3ODY1IDgyOC44NTc1MTYsMzA5LjAwMjYxIDgyOS40Mjc0NTMsMzA5LjU3MjU0NyBDODI5Ljk5NzM5LDMxMC4xNDI0ODQgODMwLjkyMTM1LDMxMC4xNDI0ODQgODMxLjQ4OTczMSwzMDkuNTcyNTQ3IEw4MzUsMzA2LjA2MjI3OCBMODM4LjUwOTEwMiwzMDkuNTcwOTkxIEM4MzkuMDc4NjUsMzEwLjE0MDkyOCA4NDAuMDAyNjEsMzEwLjE0MDkyOCA4NDAuNTcyNTQ3LDMwOS41NzA5OTEgQzg0MS4xNDI0ODQsMzA5LjAwMTA1NCA4NDEuMTQyNDg0LDMwOC4wNzcwOTQgODQwLjU3MjU0NywzMDcuNTA3NTQ2IEw4MzcuMDYyMjc4LDMwNCBaIiBpZD0iRmlsbC0yIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=",
      S =
        "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iODJweCIgaGVpZ2h0PSIyNXB4IiB2aWV3Qm94PSIwIDAgODIgMjUiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ3LjEgKDQ1NDIyKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5HaG9zdGVyeSBMb2dvPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IkxldHRlciIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTYxMy4wMDAwMDAsIC0zMDcuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSJHaG9zdGVyeS1Mb2dvIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2MTMuMDAwMDAwLCAzMDcuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iR2hvc3R5Ij4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTkuMDQwOTA0MywxMC42MTY1OTQ1IEMxOS4wNDA5MDQzLDE0LjY2NjYwNSAxNS42MzA5Mjk5LDE3Ljk0OTgxMDMgMTEuNDI0NTQyNiwxNy45NDk4MTAzIEM3LjIxODE1NTM1LDE3Ljk0OTgxMDMgMy44MDgxODA4NywxNC42NjY2MDUgMy44MDgxODA4NywxMC42MTY1OTQ1IEMzLjgwODE4MDg3LDYuNTY2NTgzOTEgNy4yMTgxNTUzNSwzLjI4MzM3ODY4IDExLjQyNDU0MjYsMy4yODMzNzg2OCBDMTUuNjMwOTI5OSwzLjI4MzM3ODY4IDE5LjA0MDkwNDMsNi41NjY1ODM5MSAxOS4wNDA5MDQzLDEwLjYxNjU5NDUiIGlkPSJGaWxsLTEtQ29weS0xMCIgZmlsbD0iI0ZGRkZGRSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yMS42MzM3MTc4LDIwLjYwNTY5MzIgQzIwLjU3ODU2NDMsMTguMjkyNjAzIDIwLjM5Njg0NzQsMTYuMzMyNjYwNSAyMC4zNjg1Mjk3LDE1LjU2MjU5NDUgTDIwLjM2ODUyOTcsOS4yMjY1OTQ5IEMyMC4zNjg1Mjk3LDQuMzg2Mzc3MTEgMTYuMjMyMTU3NCwwLjQ2MjkxMTA2OCAxMS4xMjk5OTYsMC40NjI5MTEwNjggQzYuMDI3MjY1MzEsMC40NjI5MTEwNjggMS44OTA3NTA3LDQuMzg2Mzc3MTEgMS44OTA3NTA3LDkuMjI2NTk0OSBMMS44OTA3NTA3LDE1LjY1NDE4NyBDMS44NTEzMzM2NCwxNi40ODI2NTE4IDEuNjQ0MDAyNzUsMTguMzgyNjgwNCAwLjYyOTU0NzA1MiwyMC42MDU2OTMyIEMtMC43MzM5NzAyLDIzLjU5Mjg0OTQgMC4zOTQ0Njc2ODQsMjMuMjM2ODA5MiAxLjQwNTIyMzU4LDIyLjk5MTA5MzMgQzIuNDE1ODM3MTksMjIuNzQ2MzQxNiA0LjY3Mjg1NTI1LDIxLjc4Njg5MjYgNS4zNzc5NTEwNiwyMi45Njg3ODA2IEM2LjA4Mjc2MjI2LDI0LjE1MDExNzcgNi42NzA3NDUyOCwyNS4xNzYwOTE4IDguMzE2MTU4NTUsMjQuNTA3MTIxOSBDOS45NjE3MTQxMiwyMy44Mzg0Mjc2IDEwLjczNzEwNjEsMjMuNjE1NTc1NCAxMC45NzIwNDMxLDIzLjYxNTU3NTQgTDExLjI5MTY0ODYsMjMuNjE1NTc1NCBDMTEuNTI2MzAxMSwyMy42MTU1NzU0IDEyLjMwMTk3NzYsMjMuODM4NDI3NiAxMy45NDczOTA5LDI0LjUwNzEyMTkgQzE1LjU5MjgwNDIsMjUuMTc2MDkxOCAxNi4xODA1MDI2LDI0LjE1MDExNzcgMTYuODg1NzQwNywyMi45Njg3ODA2IEMxNy41OTA1NTE5LDIxLjc4Njg5MjYgMTkuODQ3NDI3NiwyMi43NDYzNDE2IDIwLjg1ODMyNTgsMjIuOTkxMDkzMyBDMjEuODY5MDgxNywyMy4yMzY4MDkyIDIyLjk5Njk1MDQsMjMuNTkyODQ5NCAyMS42MzM3MTc4LDIwLjYwNTY5MzIiIGlkPSJQYXRoLUNvcHktMjIiIGZpbGw9IiNGRkZGRkYiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNOC4yNzgzMDY3OSw1LjI0MTU2MjE0IEM5LjI3MzQwOTcsNS4yNDE1NjIxNCAxMC4wODAxMDc2LDYuNDUyMzc0MTIgMTAuMDgwMTA3Niw3Ljk0NjUwMzE1IEMxMC4wODAxMDc2LDkuNDQwNDk0NDUgOS4yNzM0MDk3LDEwLjY1MTcxOTYgOC4yNzgzMDY3OSwxMC42NTE3MTk2IEM3LjI4MzIwMzg3LDEwLjY1MTcxOTYgNi40NzYzNjM2Nyw5LjQ0MDQ5NDQ1IDYuNDc2MzYzNjcsNy45NDY1MDMxNSBDNi40NzYzNjM2Nyw2LjQ1MjM3NDEyIDcuMjgzMjAzODcsNS4yNDE1NjIxNCA4LjI3ODMwNjc5LDUuMjQxNTYyMTQiIGlkPSJQYXRoLUNvcHktMjMiIGZpbGw9IiMwMEFFRjAiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTEuMTI5OTk2LDE2LjA1MzMzNzcgQzguOTM3MTU1MTQsMTYuMDUzMzM3NyA3LjA5MTI0MTM2LDE0LjAwNjIxMDEgNi41MzQ5OTEyMSwxMS43MjgzNzk1IEM3LjYwOTM1NTE1LDEzLjEyOTQwMSA5LjI2NzU3NTQxLDE0LjAyOTc2MjUgMTEuMTI5OTk2LDE0LjAyOTc2MjUgQzEyLjk5MjI3NDIsMTQuMDI5NzYyNSAxNC42NTAzNTIyLDEzLjEyOTQwMSAxNS43MjQ4NTg0LDExLjcyODM3OTUgQzE1LjE2ODYwODMsMTQuMDA2MjEwMSAxMy4zMjI0MDk5LDE2LjA1MzMzNzcgMTEuMTI5OTk2LDE2LjA1MzMzNzciIGlkPSJQYXRoLUNvcHktMjQiIGZpbGw9IiMwMEFFRjAiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTMuOTgxNjg1MSwxMC42NTE3MTk2IEMxMi45ODU4NzA3LDEwLjY1MTcxOTYgMTIuMTc5NDU3NCw5LjQ0MDQ5NDQ1IDEyLjE3OTQ1NzQsNy45NDY1MDMxNSBDMTIuMTc5NDU3NCw2LjQ1MjM3NDEyIDEyLjk4NTg3MDcsNS4yNDE1NjIxNCAxMy45ODE2ODUxLDUuMjQxNTYyMTQgQzE0Ljk3NzM1NzMsNS4yNDE1NjIxNCAxNS43ODM0ODYsNi40NTIzNzQxMiAxNS43ODM0ODYsNy45NDY1MDMxNSBDMTUuNzgzNDg2LDkuNDQwNDk0NDUgMTQuOTc3MzU3MywxMC42NTE3MTk2IDEzLjk4MTY4NTEsMTAuNjUxNzE5NiIgaWQ9IlBhdGgtQ29weS0yNSIgZmlsbD0iIzAwQUVGMCI+PC9wYXRoPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTI3LjQ0MTIxNzEsMTEuNDA1MTc3OCBMMzAuMjc5MDI0OCwxMS40MDUxNzc4IEwzMC4yNzkwMjQ4LDE1LjUwOTk4NzQgQzMwLjI3OTAyNDgsMTcuNTgwNzcwNiAyOS4yNDY4OTQ3LDE4Ljc2NDMxNjggMjcuMjU2NzcwNiwxOC43NjQzMTY4IEMyNS4yNjY5MjE2LDE4Ljc2NDMxNjggMjQuMjM1MjA0MSwxNy41ODA3NzA2IDI0LjIzNTIwNDEsMTUuNTA5OTg3NCBMMjQuMjM1MjA0MSw4Ljc3OTUxOTI1IEMyNC4yMzUyMDQxLDYuNzA4MzEzNDkgMjUuMjY2OTIxNiw1LjUyNTQ3MTUgMjcuMjU2NzcwNiw1LjUyNTQ3MTUgQzI5LjI0Njg5NDcsNS41MjU0NzE1IDMwLjI3OTAyNDgsNi43MDgzMTM0OSAzMC4yNzkwMjQ4LDguNzc5NTE5MjUgTDMwLjI3OTAyNDgsMTAuMDM3MDAxOCBMMjguMzYyNjI0MywxMC4wMzcwMDE4IEwyOC4zNjI2MjQzLDguNjQ5OTU0NDYgQzI4LjM2MjYyNDMsNy43MjU4MTk1NSAyNy45NTc1NTczLDcuMzc0NTg2MzIgMjcuMzEyNDc1OSw3LjM3NDU4NjMyIEMyNi42NjcyNTcxLDcuMzc0NTg2MzIgMjYuMjYxOTE0OSw3LjcyNTgxOTU1IDI2LjI2MTkxNDksOC42NDk5NTQ0NiBMMjYuMjYxOTE0OSwxNS42Mzk1NTIxIEMyNi4yNjE5MTQ5LDE2LjU2NDEwOTYgMjYuNjY3MjU3MSwxNi44OTcwMzQ3IDI3LjMxMjQ3NTksMTYuODk3MDM0NyBDMjcuOTU3NTU3MywxNi44OTcwMzQ3IDI4LjM2MjYyNDMsMTYuNTY0MTA5NiAyOC4zNjI2MjQzLDE1LjYzOTU1MjEgTDI4LjM2MjYyNDMsMTMuMjU0NDMzNCBMMjcuNDQxMjE3MSwxMy4yNTQ0MzM0IEwyNy40NDEyMTcxLDExLjQwNTE3NzgiIGlkPSJGaWxsLTMtQ29weS0yIiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8cG9seWxpbmUgaWQ9IkZpbGwtNC1Db3B5IiBmaWxsPSIjRkZGRkZGIiBwb2ludHM9IjMzLjgxNjMyNTggMTguNDc2NTE1OCAzMS43MTgwMjk3IDE4LjQ3NjUxNTggMzEuNzE4MDI5NyA1LjUyNTQ3MTUgMzMuODE2MzI1OCA1LjUyNTQ3MTUgMzMuODE2MzI1OCAxMS4wNzU4Mzg1IDM2LjIwMDU2NTQgMTEuMDc1ODM4NSAzNi4yMDA1NjU0IDUuNTI1NDcxNSAzOC4zMzc0NTI0IDUuNTI1NDcxNSAzOC4zMzc0NTI0IDE4LjQ3NjUxNTggMzYuMjAwNTY1NCAxOC40NzY1MTU4IDM2LjIwMDU2NTQgMTIuOTI1ODY2OSAzMy44MTYzMjU4IDEyLjkyNTg2NjkgMzMuODE2MzI1OCAxOC40NzY1MTU4Ij48L3BvbHlsaW5lPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTM5Ljc3NjQ1NzMsOC43Nzk2NjI0NCBDMzkuNzc2NDU3Myw2LjcwODk2NzI5IDQwLjg5NTE2NzQsNS41MjU0NzE1IDQyLjk0MjI2ODEsNS41MjU0NzE1IEM0NC45ODk5MzQ5LDUuNTI1NDcxNSA0Ni4xMDgwNzg5LDYuNzA4OTY3MjkgNDYuMTA4MDc4OSw4Ljc3OTY2MjQ0IEw0Ni4xMDgwNzg5LDE1LjUwOTg0NDIgQzQ2LjEwODA3ODksMTcuNTgwNTM5MyA0NC45ODk5MzQ5LDE4Ljc2NDMxNjggNDIuOTQyMjY4MSwxOC43NjQzMTY4IEM0MC44OTUxNjc0LDE4Ljc2NDMxNjggMzkuNzc2NDU3MywxNy41ODA1MzkzIDM5Ljc3NjQ1NzMsMTUuNTA5ODQ0MiBMMzkuNzc2NDU3Myw4Ljc3OTY2MjQ0IEwzOS43NzY0NTczLDguNzc5NjYyNDQgWiBNNDEuODYxNjIxOSwxNS42Mzk0MDM0IEM0MS44NjE2MjE5LDE2LjU2MzkyMTUgNDIuMjc5MzM0MSwxNi45MTU0MjE1IDQyLjk0MjI2ODEsMTYuOTE1NDIxNSBDNDMuNjA2MDUxMiwxNi45MTU0MjE1IDQ0LjAyMjYzMTMsMTYuNTYzOTIxNSA0NC4wMjI2MzEzLDE1LjYzOTQwMzQgTDQ0LjAyMjYzMTMsOC42NTAxMDMxNyBDNDQuMDIyNjMxMyw3LjcyNTcyNTkzIDQzLjYwNjA1MTIsNy4zNzQzNjY4MSA0Mi45NDIyNjgxLDcuMzc0MzY2ODEgQzQyLjI3OTMzNDEsNy4zNzQzNjY4MSA0MS44NjE2MjE5LDcuNzI1NzI1OTMgNDEuODYxNjIxOSw4LjY1MDEwMzE3IEw0MS44NjE2MjE5LDE1LjYzOTQwMzQgTDQxLjg2MTYyMTksMTUuNjM5NDAzNCBaIiBpZD0iRmlsbC01LUNvcHkiIGZpbGw9IiNGRkZGRkYiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik01MC4wMTIwOTc4LDUuNTI1NDcxNSBDNTEuOTgzODgzNiw1LjUyNTQ3MTUgNTIuOTk3Mjg0Nyw2LjcwOTE1ODQ4IDUyLjk5NzI4NDcsOC43ODAwODI1NyBMNTIuOTk3Mjg0Nyw5LjE4NjM4MDg0IEw1MS4wODA5Mjc4LDkuMTg2MzgwODQgTDUxLjA4MDkyNzgsOC42NTAyMzYxMyBDNTEuMDgwOTI3OCw3LjcyNTgxOTU1IDUwLjcxMjA0MzIsNy4zNzQ1ODYzMiA1MC4wNjY3MDE1LDcuMzc0NTg2MzIgQzQ5LjQyMjMyMjYsNy4zNzQ1ODYzMiA0OS4wNTMxNjI5LDcuNzI1ODE5NTUgNDkuMDUzMTYyOSw4LjY1MDIzNjEzIEM0OS4wNTMxNjI5LDExLjMxMjY1MTYgNTMuMDE1MzAyNiwxMS44MTIxODAyIDUzLjAxNTMwMjYsMTUuNTEwMjY5IEM1My4wMTUzMDI2LDE3LjU4MTQ3NDggNTEuOTgzODgzNiwxOC43NjQzMTY4IDQ5Ljk5MzM5MjIsMTguNzY0MzE2OCBDNDguMDAzODYzNiwxOC43NjQzMTY4IDQ2Ljk3MTQ4MTksMTcuNTgxNDc0OCA0Ni45NzE0ODE5LDE1LjUxMDI2OSBMNDYuOTcxNDgxOSwxNC43MTUxMzU2IEw0OC44ODc4Mzg4LDE0LjcxNTEzNTYgTDQ4Ljg4NzgzODgsMTUuNjM5NTUyMSBDNDguODg3ODM4OCwxNi41NjM4Mjc5IDQ5LjI5MzU4NDMsMTYuODk2NzUzMSA0OS45MzgzNzU5LDE2Ljg5Njc1MzEgQzUwLjU4MzAyOTksMTYuODk2NzUzMSA1MC45ODgwODc4LDE2LjU2MzgyNzkgNTAuOTg4MDg3OCwxNS42Mzk1NTIxIEM1MC45ODgwODc4LDEyLjk3NjU3MzMgNDcuMDI2OTEwOSwxMi40Nzc0NjcyIDQ3LjAyNjkxMDksOC43ODAwODI1NyBDNDcuMDI2OTEwOSw2LjcwOTE1ODQ4IDQ4LjA0MDAzNjksNS41MjU0NzE1IDUwLjAxMjA5NzgsNS41MjU0NzE1IiBpZD0iRmlsbC02LUNvcHkiIGZpbGw9IiNGRkZGRkYiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxwb2x5bGluZSBpZD0iRmlsbC03LUNvcHkiIGZpbGw9IiNGRkZGRkYiIHBvaW50cz0iNTMuNTkwOTA0NSA1LjUyNTQ3MTUgNTkuOTIyNTI2MiA1LjUyNTQ3MTUgNTkuOTIyNTI2MiA3LjM3NjEyMzk1IDU3Ljc4MTU0MTEgNy4zNzYxMjM5NSA1Ny43ODE1NDExIDE4LjQ3NjUxNTggNTUuNzMyNTg0NyAxOC40NzY1MTU4IDU1LjczMjU4NDcgNy4zNzYxMjM5NSA1My41OTA5MDQ1IDcuMzc2MTIzOTUgNTMuNTkwOTA0NSA1LjUyNTQ3MTUiPjwvcG9seWxpbmU+CiAgICAgICAgICAgICAgICA8cG9seWxpbmUgaWQ9IkZpbGwtOC1Db3B5IiBmaWxsPSIjRkZGRkZGIiBwb2ludHM9IjYzLjE4MzY2NDMgMTAuOTgzMjM3NSA2Ni4wODEzNjg0IDEwLjk4MzIzNzUgNjYuMDgxMzY4NCAxMi44MzMxNjUyIDYzLjE4MzY2NDMgMTIuODMzMTY1MiA2My4xODM2NjQzIDE2LjYyNjAyNDQgNjYuODI5NzQ5OCAxNi42MjYwMjQ0IDY2LjgyOTc0OTggMTguNDc2NTE1OCA2MS4wNzM3MzAxIDE4LjQ3NjUxNTggNjEuMDczNzMwMSA1LjUyNTQ3MTUgNjYuODI5NzQ5OCA1LjUyNTQ3MTUgNjYuODI5NzQ5OCA3LjM3NTY4MTA3IDYzLjE4MzY2NDMgNy4zNzU2ODEwNyA2My4xODM2NjQzIDEwLjk4MzIzNzUiPjwvcG9seWxpbmU+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNzIuMjM5MTE5MywxOC40NzY1MTU4IEM3Mi4xMjg1NTcsMTguMTQzMzc1NCA3Mi4wNTM5Mjc1LDE3LjkzOTYwMTcgNzIuMDUzOTI3NSwxNi44ODU3ODQ1IEw3Mi4wNTM5Mjc1LDE0Ljg1MDMwMjMgQzcyLjA1MzkyNzUsMTMuNjQ3NjcxMSA3MS42NDY3ODIyLDEzLjIwMzYyNDggNzAuNzIwNTQ3MiwxMy4yMDM2MjQ4IEw3MC4wMTc1MDk3LDEzLjIwMzYyNDggTDcwLjAxNzUwOTcsMTguNDc2NTE1OCBMNjcuOTgwOTUzNywxOC40NzY1MTU4IEw2Ny45ODA5NTM3LDUuNTI1NDcxNSBMNzEuMDU0NTgzMyw1LjUyNTQ3MTUgQzczLjE2NDkzOTYsNS41MjU0NzE1IDc0LjA3MjkzMTgsNi41MDYxNTAwMiA3NC4wNzI5MzE4LDguNTA0NDI4NyBMNzQuMDcyOTMxOCw5LjUyMjAyODg3IEM3NC4wNzI5MzE4LDEwLjg1MzYwNCA3My42NDY1NzYzLDExLjcyMzY1ODUgNzIuNzM5NDEzMywxMi4xNDg4MjEyIEM3My43NTcyNzY3LDEyLjU3NDI2NTcgNzQuMDkwNjIxNywxMy41NTUwODUxIDc0LjA5MDYyMTcsMTQuOTA1Njg0OCBMNzQuMDkwNjIxNywxNi45MDM5NjM1IEM3NC4wOTA2MjE3LDE3LjUzMzE4MTcgNzQuMTA5MTQwOSwxNy45OTU4Mjk3IDc0LjMxMjU3NTQsMTguNDc2NTE1OCBMNzIuMjM5MTE5MywxOC40NzY1MTU4IEw3Mi4yMzkxMTkzLDE4LjQ3NjUxNTggWiBNNzAuMDE3NTA5Nyw3LjM3NTY0MDgxIEw3MC4wMTc1MDk3LDExLjM1MzE3MzcgTDcwLjgxMzU1NzcsMTEuMzUzMTczNyBDNzEuNTczMTIwMSwxMS4zNTMxNzM3IDcyLjAzNDk5MzgsMTEuMDIwNTk3IDcyLjAzNDk5MzgsOS45ODQxMTMyMSBMNzIuMDM0OTkzOCw4LjcwNzM1Njg2IEM3Mi4wMzQ5OTM4LDcuNzgyMjAxNzUgNzEuNzIwNzIwNyw3LjM3NTY0MDgxIDcwLjk5OTE2NCw3LjM3NTY0MDgxIEw3MC4wMTc1MDk3LDcuMzc1NjQwODEgTDcwLjAxNzUwOTcsNy4zNzU2NDA4MSBaIiBpZD0iRmlsbC05LUNvcHkiIGZpbGw9IiNGRkZGRkYiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxwb2x5bGluZSBpZD0iRmlsbC0xMC1Db3B5IiBmaWxsPSIjRkZGRkZGIiBwb2ludHM9Ijc3LjE3Nzg2OCAxNC4xODQzMDM0IDc0LjYwMDM3NjQgNS41MjU0NzE1IDc2LjczMjQ2MTEgNS41MjU0NzE1IDc4LjI5MTEwODYgMTEuNDI3NzIxNiA3OS44NDgyMzM1IDUuNTI1NDcxNSA4MS43OTU0MDEgNS41MjU0NzE1IDc5LjIxNzkwOTMgMTQuMTg0MzAzNCA3OS4yMTc5MDkzIDE4LjQ3NjUxNTggNzcuMTc3ODY4IDE4LjQ3NjUxNTggNzcuMTc3ODY4IDE0LjE4NDMwMzQiPjwvcG9seWxpbmU+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==",
      m = Q("notifications"),
      { sendMessage: O } = m,
      { onMessage: f } = chrome.runtime;
    (function (e, D) {
      const I = "ALERT_ID_6AEC0607-8CC8-4904-BDEB-00F947E5E3C2";
      let g = {},
        s = !1,
        n = !1;
      const i = function (N) {
          return D.createElement(N);
        },
        T = function (N, ...M) {
          for (let j = 0; j < M.length; j++) N.appendChild(M[j]);
        },
        b = function () {
          const N = i("style"),
            M = " !important;",
            j =
              "padding:0;margin:0;font:13px Arial,Helvetica;text-transform:none;font-size: 100%;vertical-align:baseline;line-height:normal;color:#fff;position:static;";
          (N.textContent = `@-webkit-keyframes pop${I} {50% {-webkit-transform:scale(1.2);}100% {-webkit-transform:scale(1);}}@keyframes pop${I} {50% {-webkit-transform:scale(1.2);transform:scale(1.2);}100% {-webkit-transform:scale(1);transform:scale(1);}}#${I}{${j}
			border:none${M}
			background:#fff${M}
			color:#fff${M}
			display:block${M}
			height:auto${M}
			max-height:500px${M}
			margin:0${M}
			opacity:1${M}
			padding:0${M}
			position:fixed${M}
			visibility:visible${M}
			width:325px${M}
			z-index:2147483647${M}
			-moz-border-radius:6px${M}
			border-radius:6px${M}
			-moz-box-shadow:0px 0px 20px #000${M}
			box-shadow:0px 0px 20px #000${M}
			}#${I} br{display:inline-block${M}${j}}#${I} div{${j}letter-spacing:normal${M}font:16px Roboto, sans-serif${M}line-height:24px${M}text-align:center${M}text-shadow:none${M}text-transform:none${M}word-spacing:normal${M}}#${I} a{${j}border:none${M}font-weight:500${M}background:#fff${M}color:#00aef0${M}}@media print{#${I}{display:none${M}}}`),
            T(D.getElementsByTagName("head")[0], N);
        },
        l = function () {
          const N = D.getElementById(I);
          N && (N.parentNode.removeChild(N), (n = !1));
        },
        h = function () {
          const N = i("div");
          return (
            (N.style.cursor = "pointer"),
            N.style.setProperty("-webkit-touch-callout", "none"),
            N.style.setProperty("-webkit-user-select", "none"),
            N.style.setProperty("-khtml-user-select", "none"),
            N.style.setProperty("-moz-user-select", "none"),
            N.style.setProperty("-ms-user-select", "none"),
            N.style.setProperty("user-select", "none"),
            (N.style.cssFloat = "right"),
            (N.style.background = `url(${Y}) no-repeat center`),
            (N.style.backgroundSize = "12.9px 12.9px"),
            (N.style.width = "27.4px"),
            (N.style.height = "27.4px"),
            (N.style.margin = "4px 4px 4px 4px"),
            N
          );
        },
        E = function () {
          const N = i("div");
          (N.style.backgroundColor = "#00aef0"),
            (N.style.borderTopLeftRadius = "6px"),
            (N.style.borderTopRightRadius = "6px"),
            (N.style.height = "46px"),
            (N.style.padding = "0 0 0 16px");
          const M = i("div");
          (M.style.width = "82px"),
            (M.style.height = "100%"),
            (M.style.background = `url(${S}) no-repeat center`),
            (M.style.backgroundSize = "100% auto"),
            (M.style.cssFloat = "left"),
            T(N, M);
          const j = h();
          T(N, j);
          const z = i("div");
          return (
            (z.style.clear = "both"),
            j.addEventListener("click", (t) => {
              l(), O("dismissCMPMessage", { cmp_data: g, reason: "closeButton" }), t.preventDefault();
            }),
            T(N, z),
            N
          );
        },
        B = function (N, M, j, z) {
          const t = i("div");
          (t.style.borderRadius = "6px"), t.style.setProperty("background", "#fff", "important");
          const r = E();
          T(t, r);
          const o = i("div");
          o.style.setProperty("padding", "22px 35px 17px 35px", "important");
          const c = i("span");
          (c.style.color = "#232323"),
            (c.style.border = "none"),
            (c.style.fontWeight = "300"),
            (c.style.display = "block"),
            T(c, D.createTextNode(N)),
            T(o, c),
            T(t, o);
          const y = i("div");
          y.style.setProperty("padding", "18px 35px 22px 35px", "important");
          const A = i("a");
          return (
            (A.style.color = "#00aef0"),
            (A.href = M || "#"),
            M && (A.target = "_blank"),
            T(A, D.createTextNode(j)),
            A.addEventListener("click", z),
            T(y, A),
            T(t, y),
            t
          );
        },
        x = function () {
          let N = D.getElementById(I);
          return (
            N && N.parentNode.removeChild(N),
            (N = i("div")),
            (N.id = I),
            N.style.setProperty("right", "20px", "important"),
            N.style.setProperty("top", "15px", "important"),
            (N.textContent = ""),
            D.getElementsByTagName("body")[0] ? T(D.body, N) : T(D.getElementsByTagName("html")[0], N),
            N
          );
        },
        G = function (N) {
          if (n) return;
          const M = i("div");
          (M.style.borderRadius = "6px"), M.style.setProperty("background", "#fff", "important");
          const j = E();
          T(M, j);
          const z = i("div");
          z.style.setProperty("padding", "22px 35px 22px 35px", "important"), z.style.setProperty("text-align", "center", "important");
          const t = i("span");
          (t.style.color = "#232323"),
            (t.style.border = "none"),
            (t.style.fontWeight = "300"),
            (t.id = "ghostery-browse-window-span"),
            t.style.setProperty("margin", "22px auto 22px", "important"),
            T(t, D.createTextNode(N.select_file_for_import)),
            T(z, t),
            T(M, z);
          const r = i("div");
          (r.id = "ghostery-browse-window-button"),
            r.style.setProperty("padding", "2px 35px 28px 35px", "important"),
            r.style.setProperty("text-align", "center", "important");
          const o = i("input");
          (o.type = "file"),
            (o.name = "image"),
            (o.style.width = "1px"),
            (o.style.height = "1px"),
            (o.style.visibility = "hidden"),
            o.addEventListener("change", () => {
              if (o.files.length) {
                const A = o.files[0],
                  C = new FileReader();
                (C.onload = ($) => {
                  const W = () => {
                    chrome.runtime.lastError && w("showBrowseWindow error:", chrome.runtime.lastError);
                  };
                  chrome.runtime.sendMessage({ origin: "notifications", name: "importFile", message: $.target.result }, W);
                }),
                  C.readAsText(A, "UTF-8");
              } else {
                for (; t.firstChild; ) t.removeChild(t.firstChild);
                t.appendChild(document.createTextNode(N.file_was_not_selected));
              }
            }),
            T(r, o);
          const c = i("span");
          T(c, D.createTextNode(N.browse_button_label)),
            (c.style.backgroundColor = "#00aef0"),
            (c.style.borderRadius = "3px"),
            (c.style.height = "30px"),
            (c.style.color = "white"),
            (c.style.cursor = "pointer"),
            c.style.setProperty("padding", "6px 9px 7px 9px", "important"),
            c.addEventListener("click", () => {
              o.click();
            }),
            T(r, c),
            T(M, r);
          const y = x();
          T(y, M);
        },
        P = function (N = {}) {
          const M = D.getElementById("ghostery-browse-window-span");
          for (; M.firstChild; ) M.removeChild(M.firstChild);
          if (N.type !== "message") M.style.color = "#e74055";
          else {
            const j = D.getElementById("ghostery-browse-window-button");
            j && j.parentNode.removeChild(j), (M.style.color = "#232323");
          }
          M.innerHTML = N.text;
        },
        R = function (N, M) {
          const j = new Blob([N], { type: "text/plain" }),
            z = M === "Ghostery-Backup" ? "ghost" : "json",
            t = new Date(),
            r = `${t.getMonth() + 1}-${t.getDate()}-${t.getFullYear()}`,
            o = `${M}-${r}.${z}`;
          let c = "";
          window.URL ? (c = window.URL.createObjectURL(j)) : (c = window.webkitURL.createObjectURL(j));
          const y = i("a");
          (y.href = c), y.setAttribute("download", o), document.body.appendChild(y), y.click();
        },
        Z = function (N, M) {
          if (n) return;
          let j;
          N === "showCMPMessage" &&
            (j = B(M.campaign.Message, M.campaign.Link, M.campaign.LinkText, () => {
              l(), O("dismissCMPMessage", { cmp_data: g, reason: "link" });
            }));
          const z = x();
          T(z, j);
        },
        v = function () {
          f.addListener((N, M, j) => {
            try {
              const z = ["showCMPMessage", "showBrowseWindow"],
                { name: t, message: r } = N;
              if ((w("notifications.js received message", t), z.includes(t) && (s || ((s = !0), b())), t === "showCMPMessage"))
                (g = r.data), Z("showCMPMessage", { campaign: g }), (n = !0);
              else if (t === "showBrowseWindow") G(r.translations), (n = !0);
              else if (t === "onFileImported") P(r);
              else if (t === "exportFile") {
                const { content: o, type: c } = r;
                R(o, c);
              } else return w("Unexpected message type (not handled):", N.name), !1;
            } catch (z) {
              return w("Failed to handle message from request:", N.name, z), !1;
            }
            j();
          });
        };
      return {
        init() {
          v();
        }
      };
    })(window, document).init();
  })();
