typeof browser < "u" && (chrome = browser),
  (() => {
    "use strict";
    var nM = {};
    let P = chrome.runtime.getManifest().debug || !1;
    function rM() {
      return P;
    }
    function yM(M = !0) {
      P = M;
    }
    function Z(...M) {
      const D = M.toString().toLowerCase().includes("error");
      return M.unshift(`${new Date().toLocaleTimeString()}	`), D ? (console.error(...M), console.trace()) : console.log(...M), !0;
    }
    function w(...M) {
      return P ? Z(...M) : !1;
    }
    function F(...M) {
      return new Promise((D, g) => {
        chrome.storage.local.get(M.length ? M : null, (e) => {
          if (chrome.runtime.lastError) w("prefsGet ERROR", chrome.runtime.lastError), g(chrome.runtime.lastError);
          else {
            let o = null;
            if (M.length <= 0) o = e;
            else if (M.length === 1) {
              const i = M[0];
              e && e.hasOwnProperty(i) && (o = e[i]);
            } else
              (o = {}),
                M.forEach((i) => {
                  (o[i] = null), e && e.hasOwnProperty(i) && (o[i] = e[i]);
                });
            D(o);
          }
        });
      });
    }
    function K(M) {
      if (M == null) throw new Error("Bad argument");
      return new Promise((D, g) => {
        try {
          chrome.storage.local.set(M, () => {
            chrome.runtime.lastError ? (Z("prefsSet ERROR", chrome.runtime.lastError), g(chrome.runtime.lastError)) : D(M);
          });
        } catch (e) {
          Z("prefsSet ERROR", e), g(e);
        }
      });
    }
    function TM(M, D) {
      return typeof D > "u" ? F(M) : K({ [M]: D });
    }
    function AM(M) {
      let D = 0,
        g,
        e;
      if (M.length === 0) return D;
      for (e = 0; e < M.length; e++) (g = M.charCodeAt(e)), (D = (D << 5) - D + g), (D &= D);
      return D;
    }
    function aM(M) {
      const g = M.split(".")[1].replace(/-/g, "+").replace(/_/g, "/"),
        e = decodeURIComponent(
          window
            .atob(g)
            .split("")
            .map((o) => `%${`00${o.charCodeAt(0).toString(16)}`.slice(-2)}`)
            .join("")
        );
      return JSON.parse(e);
    }
    function LM() {
      return new Date().toISOString().split("T")[0];
    }
    const q = () => {
      chrome.runtime.lastError && w("defaultCallback error:", chrome.runtime.lastError);
    };
    function $(M, D, g = "") {
      return new Promise((e) => {
        chrome.runtime.sendMessage({ name: M, message: D, origin: g }, (o) => {
          chrome.runtime.lastError && (w(chrome.runtime.lastError, M, D), e(!1)), e(o);
        });
      });
    }
    function C(M, D, g = "", e = q()) {
      return w("Panel sendMessage: sending to background", M), chrome.runtime.sendMessage({ name: M, message: D, origin: g }, e);
    }
    function lM(M) {
      M.preventDefault();
      let D = M.target;
      for (; !D.href; ) D = D.parentElement;
      const { href: g } = D;
      C("openNewTab", { url: g, become_active: !0 });
    }
    function uM() {
      C("account.openSubscriptionPage"), window.close();
    }
    function wM(M) {
      C("account.openCheckoutPage", { utm: M }), window.close();
    }
    function OM(M) {
      M.preventDefault(), C("account.openSupportPage"), window.close();
    }
    function xM(M) {
      M.preventDefault(), C("openAccountAndroid");
    }
    function MM(M) {
      function D(o, i) {
        return $(o, i, M);
      }
      function g(o, i, n) {
        w(`origin ${M} sending to handler`, o), C(o, i, M, n);
      }
      function e(o, i, n) {
        w(`origin ${M} sending to background onMessageHandler`, o), C(o, i, "", n);
      }
      return { sendMessageInPromise: D, sendMessage: g, sendMessageToBackground: e };
    }
    const NM =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAeCAYAAAAy2w7YAAAAAXNSR0IArs4c6QAAAmdJREFUSA3Flj1rFFEUhh0VAjEfEhNQoiBmgyKIRZLKZqOghVhYpNAy4EIsFG20Eiv9E/4DISZFfkIEo4UgSWGMWKlgihQmhRDX592dMx7v3p3ZWVg88Ow93+fOnZ2dTQ4USL1eHyPlJlyH83AcJN9hA1ZgMUmSbdbywoABeA4/oUiU8wwGSk2i4BxsQFlZp+BsR8NInITtshNc/g/0Su4wEo7ApivqVv2oXn7YQW+gP4ZwN7v4XsJnCEU+xfaCwCT2o8DXNNnBEOxFLqGqDPzD4K9Wux5KY7OROvUaVPwfwXk7krzqk4jfdzn3gthrFzP1luX4o6ua063rTpeq58YkjIW28qqW7AedNKdbjzpd6rCzw1hoKzXr6QeNuiamXuEM+s1gvRHT05zLLmbqMVOyleQ1O9hgXcK+CA9h38WkPwDFlp3fq2+yAaYQbTfIF5bVs0H+6GymX79hiCL5SkJuXtGgEzRYgLWcSYrdBeW2lcNtI38Dd1AvgV4Tc2C/HJ/Q9auwAsvQmRTcoyftulD3NOfGZfcoqyf5bU6BQoswYQXoFXgFeZIdeeIKdRRZI/NHVr1ZJfambVrxzy3evI2jbgxiS33k7cKheH7X3n0q+xn2y751Uz0Yot1p4zNSbNA1GT2Sq+qbcGw6vk3o5P6opqzo5VjRFc1Cr4ZoU2c0Q4NqsnosNR3dDkP0nvkNH0DHeBqmoRt5R9EX0P+GC6CL2dF/gXmYgxEcDUHXBl5AWVFN45FRI/QRUO/5ZufIJ8FBeA8mqyg1GE+RLp+Jclv/jER6t7go7IMqnGoJpg7F0hw99P9f/gBf4Jq0CsaoiAAAAABJRU5ErkJggg==",
      eM =
        "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8c3ZnIHdpZHRoPSIxNXB4IiBoZWlnaHQ9IjE1cHgiIHZpZXdCb3g9IjAgMCAxNSAxNSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNy4yICgyODI3NikgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+DQogICAgPHRpdGxlPmNvbGxhcHNlIGNvcHkgMjwvdGl0bGU+DQogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+DQogICAgPGRlZnM+PC9kZWZzPg0KICAgIDxnIGlkPSJQdXJwbGUtQm94IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4NCiAgICAgICAgPGcgaWQ9ImNvbGxhcHNlLWNvcHktMiI+DQogICAgICAgICAgICA8Y2lyY2xlIGlkPSJPdmFsLTMxNSIgZmlsbC1vcGFjaXR5PSIwLjI3MDE1Mzk4NiIgZmlsbD0iI0Q4RDhEOCIgY3g9IjcuNSIgY3k9IjcuNSIgcj0iNy41Ij48L2NpcmNsZT4NCiAgICAgICAgICAgIDxwYXRoIGQ9Ik00LjM2LDQuMzYgTDEwLjU3NDU2MzQsMTAuNTc0NTYzNCIgaWQ9IkxpbmUiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSI+PC9wYXRoPg0KICAgICAgICAgICAgPHBhdGggZD0iTTQuMzYsNC4zNiBMMTAuNTc0NTYzNCwxMC41NzQ1NjM0IiBpZD0iTGluZS1Db3B5IiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDcuNjAwMDAwLCA3LjYwMDAwMCkgc2NhbGUoLTEsIDEpIHRyYW5zbGF0ZSgtNy42MDAwMDAsIC03LjYwMDAwMCkgIj48L3BhdGg+DQogICAgICAgIDwvZz4NCiAgICA8L2c+DQo8L3N2Zz4=",
      DM =
        "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8c3ZnIHdpZHRoPSIxN3B4IiBoZWlnaHQ9IjE3cHgiIHZpZXdCb3g9IjAgMCAxNyAxNyIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQwICgzMzc2MikgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+DQogICAgPHRpdGxlPnNsb3d0cmFja2VyczwvdGl0bGU+DQogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+DQogICAgPGRlZnM+PC9kZWZzPg0KICAgIDxnIGlkPSJQdXJwbGUtQm94IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4NCiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTM5NS4wMDAwMDAsIC00NTQuMDAwMDAwKSIgaWQ9InNsb3d0cmFja2VycyIgZmlsbD0iI0ZDQkEzMyI+DQogICAgICAgICAgICA8cGF0aCBkPSJNNDAzLjUsNDU0IEMzOTguODEyMjEsNDU0IDM5NSw0NTcuODEyMjEgMzk1LDQ2Mi41IEMzOTUsNDY3LjE4Nzc5IDM5OC44MTIyMSw0NzEgNDAzLjUsNDcxIEM0MDguMTg3NzksNDcxIDQxMiw0NjcuMTg3NzkgNDEyLDQ2Mi41IEM0MTIsNDU3LjgxMjIxIDQwOC4xODc3OSw0NTQgNDAzLjUsNDU0IFogTTQwOS42MDk1ODQsNDY1LjE3ODY1NCBDNDA5LjUzMDI1OSw0NjUuMTU0MDkgNDA4LjY3NzI4Myw0NjQuNzQ2NDIgNDA3LjU2MTA5MSw0NjQuMzYyNjM3IEM0MDguNDg0Mzc4LDQ2My43NDU2MSA0MDkuMDk0NDE4LDQ2Mi42OTM2NDUgNDA5LjA5NDQxOCw0NjEuNTAxNzMzIEM0MDkuMDk0NDE4LDQ1OS42MDU1ODEgNDA3LjU1MTQwMSw0NTguMDYyMzM4IDQwNS42NTUyNDksNDU4LjA2MjMzOCBDNDAzLjc1OTA5Nyw0NTguMDYyMzM4IDQwMi4yMTU4NTQsNDU5LjYwNTU4MSA0MDIuMjE1ODU0LDQ2MS41MDE3MzMgQzQwMi4yMTU4NTQsNDYyLjA0OTM1IDQwMi4zNDUyMDgsNDYyLjU2Njc2OSA0MDIuNTczMjY5LDQ2My4wMjY0OTcgQzQwMi43ODgwMzQsNDYzLjA2ODYzOCA0MDMuMzQ0NDQsNDYzLjE3NTIzMiA0MDQuMjIzNzgyLDQ2My4zMjM5NjggQzQwNS4yMDQ1MzUsNDYzLjQ5MDI4MSA0MDUuODUyNDM2LDQ2My4zNTY0MTkgNDA2LjM5MTAzOSw0NjIuODc2NjM0IEM0MDYuNzI4MTcyLDQ2Mi41NzY0NTkgNDA2LjkyODA2NCw0NjIuMTYzNjA2IDQwNi45NTM1MjksNDYxLjcxMzc5NCBDNDA2Ljk4MDEyMSw0NjEuMjYzOTgxIDQwNi44Mjk1ODMsNDYwLjgyOTk0NCA0MDYuNTI5NDA4LDQ2MC40OTM3MTIgQzQwNi4wNDY5MTksNDU5Ljk1MjQwNSA0MDUuMjE1MTI3LDQ1OS45MDM5NTMgNDA0LjY3MjY5Myw0NjAuMzg1NTQxIEM0MDQuMjM5NTU3LDQ2MC43NzExMjYgNDA0LjE4NTAyMSw0NjEuNDQ0NDkyIDQwNC41NTIxMjcsNDYxLjg1NzM0NiBDNDA0Ljg0MDEzMyw0NjIuMTgwNTA3IDQwNS4zNjk5NDcsNDYyLjIxNzQ2NiA0MDUuNjg2Nzk5LDQ2MS45MzU3NyBDNDA1LjgwMzk4NCw0NjEuODMxODggNDA1Ljg3MzM5NCw0NjEuNjkyODM1IDQwNS44ODA2MDYsNDYxLjU0NDc3NiBDNDA1Ljg4NjY5LDQ2MS40MjQyMSA0MDUuODUwNjMzLDQ2MS4zMTA2MyA0MDUuNzgwOTk4LDQ2MS4yMzQwMDkgQzQwNS43MTg1NzQsNDYxLjE2NTUgNDA1LjYxOTE5Miw0NjEuMTI3NjQxIDQwNS41MTY4OCw0NjEuMTI4NTQyIEM0MDUuNDI5ODkyLDQ2MS4xMzEwMjEgNDA1LjMxNzIxNCw0NjEuMTY1NSA0MDUuMjQ0MTk4LDQ2MS4yMzc2MTUgQzQwNS4yMjYzOTUsNDYxLjI1NDI5MSA0MDUuMjA0NTM1LDQ2MS4yNjQ4ODMgNDA1LjE3OTc0Niw0NjEuMjY0ODgzIEM0MDUuMTI2MTExLDQ2MS4yNjQ4ODMgNDA1LjA4MzA2OCw0NjEuMjE2NDMxIDQwNS4wODMwNjgsNDYxLjE1NzYxMyBDNDA1LjA4MzA2OCw0NjEuMTIxMzMxIDQwNS4wOTc5NDEsNDYxLjA5NDk2NCA0MDUuMTE2NDIxLDQ2MS4wNjk0OTggQzQwNS4yMjYzOTUsNDYwLjkxODk2IDQwNS4zODE0NCw0NjAuODMxNzQ3IDQwNS41MzUzNTksNDYwLjgxODY3NiBDNDA1Ljc0NDAzOSw0NjAuODAxMDk5IDQwNS45MTMwNTcsNDYwLjg2MDgxOCA0MDYuMDQ2OTE5LDQ2MS4wMDc3NTEgQzQwNi4xNzk4NzksNDYxLjE1NDAwNyA0MDYuMjQ5Mjg5LDQ2MS4zNDg0OSA0MDYuMjM3MTIsNDYxLjU2MzI1NSBDNDA2LjIyMzgyNCw0NjEuODA2MTkgNDA2LjExMjk0OCw0NjIuMDMyNDQ4IDQwNS45MjM2NDksNDYyLjIwMDU2NCBDNDA1LjQ1NzE2LDQ2Mi42MTYxMjIgNDA0LjcwNzE3Myw0NjIuNTY2MDkzIDQwNC4yODU1Myw0NjIuMDkzMjk0IEM0MDMuNzg5NzQ1LDQ2MS41MzU5ODcgNDAzLjg1ODQ3OSw0NjAuNjMyMDgxIDQwNC40MzUxNjcsNDYwLjExNzgxNyBDNDA1LjEyMzQwNyw0NTkuNTA1Mjk3IDQwNi4xODI1ODQsNDU5LjU2NjgyIDQwNi43OTQyMDIsNDYwLjI1NTI4NCBDNDA3LjE1NzAyNiw0NjAuNjYyNzMgNDA3LjM0MDAxNiw0NjEuMTg4MjYyIDQwNy4zMDg0NjYsNDYxLjczMzE3NCBDNDA3LjI3NjY5MSw0NjIuMjc4OTg4IDQwNy4wMzQ2NTgsNDYyLjc3OTA1NSA0MDYuNjI2OTg3LDQ2My4xNDE2NTQgQzQwNi4xNjgzODYsNDYzLjU1MDIyNiA0MDUuNjMyMjYyLDQ2My43NDY1MTIgNDA0Ljk0NjUwMiw0NjMuNzQ2NTEyIEM0MDQuNzA1MzcsNDYzLjc0NjUxMiA0MDQuNDQ0ODU3LDQ2My43MjE3MjIgNDA0LjE2MzE2Miw0NjMuNjc0Mzk3IEM0MDMuMTkyMDk5LDQ2My41MDk2NjIgNDAyLjE1NTAwNyw0NjMuMzI0ODY5IDQwMi4wMTU5NjIsNDYzLjMwNTQ4OCBDNDAxLjMxNzEzMSw0NjMuMjEyMTkxIDQwMC43MzYxNjEsNDYyLjczNzU4OSA0MDAuNzE3NjgyLDQ2Mi4wMzk2NTkgTDQwMC44OTQ1ODcsNDU4Ljk4NzY1MyBDNDAwLjg5NDU4Nyw0NTguNzkxMzY3IDQwMC43MzUyNiw0NTguNjMxMTM4IDQwMC41MzgwNzIsNDU4LjYzMTEzOCBDNDAwLjM0MDg4NSw0NTguNjMxMTM4IDQwMC4xODE1NTgsNDU4Ljc5MDQ2NSA0MDAuMTgxNTU4LDQ1OC45ODc2NTMgQzQwMC4xODE1NTgsNDU4Ljk4NzY1MyA0MDAuMjg1NDQ3LDQ2MC44NDE0MzcgNDAwLjI5NzYxNyw0NjEuMDc1NTgzIEM0MDAuMzIwNjAzLDQ2MS41MjAyMTIgMzk5LjkxMTEzLDQ2MS44NzY3MjYgMzk5LjQ2MDQxNiw0NjEuODc2NzI2IEMzOTguOTk4NDM1LDQ2MS44NzY3MjYgMzk4LjU4NzE1OSw0NjEuNTAwODMxIDM5OC42MjM0NDEsNDYxLjAzOTUyNiBDMzk4LjY0MzQ5OCw0NjAuNzg0MTk3IDM5OC42NjQ2ODIsNDYwLjUyMDA3OSAzOTguNjg1ODY1LDQ2MC4yNzI4NjIgTDM5OC43NTk3ODIsNDU5LjAwOTUxMiBDMzk4Ljc1OTc4Miw0NTguODEzMjI2IDM5OC42MDA0NTUsNDU4LjY1Mjk5OCAzOTguNDAzMjY4LDQ1OC42NTI5OTggQzM5OC4yMDYwOCw0NTguNjUyOTk4IDM5OC4wNDY3NTMsNDU4LjgxMjMyNSAzOTguMDQ2NzUzLDQ1OS4wMDk1MTIgTDM5OC4yMjAyNzgsNDYxLjk5OTk5NyBMMzk4LjIyMDI3OCw0NjIuMDA1MTggQzM5OC4yMjAyNzgsNDY0LjA5NzYxNyAzOTkuNDE3MzczLDQ2NS44MDI4OTIgNDAxLjUxMDcxMiw0NjUuODAxMDg5IEM0MDMuNjIyNTMxLDQ2NS43OTgzODUgNDA5LjYwODY4Myw0NjUuODAxMDg5IDQwOS42MDg2ODMsNDY1LjgwMTA4OSBDNDA5Ljc4MTA4MSw0NjUuODAxMDg5IDQwOS45MjAzNTEsNDY1LjY2MTE0MyA0MDkuOTIwMzUxLDQ2NS40ODk0MjEgQzQwOS45MjAzNTEsNDY1LjMxNzAyMyA0MDkuNzczMTkzLDQ2NS4yMzA3MTEgNDA5LjYwOTU4NCw0NjUuMTc4NjU0IFoiPjwvcGF0aD4NCiAgICAgICAgPC9nPg0KICAgIDwvZz4NCjwvc3ZnPg==",
      tM =
        "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8c3ZnIHdpZHRoPSIxOHB4IiBoZWlnaHQ9IjE4cHgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQwICgzMzc2MikgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+DQogICAgPHRpdGxlPndhcm5pbmc8L3RpdGxlPg0KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPg0KICAgIDxkZWZzPjwvZGVmcz4NCiAgICA8ZyBpZD0iUHVycGxlLUJveCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+DQogICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zNzMuMDAwMDAwLCAtNDUzLjAwMDAwMCkiIGlkPSJ3YXJuaW5nIiBmaWxsPSIjRkVCMDMyIj4NCiAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM3My4wMDAwMDAsIDQ1My4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNOSwwLjYzMDQzNDc4MyBDNC4zODQxNDQ5MywwLjYzMDQzNDc4MyAwLjYzMDQzNDc4Myw0LjM4NDE0NDkzIDAuNjMwNDM0NzgzLDkgQzAuNjMwNDM0NzgzLDEzLjYxNTg1NTEgNC4zODQxNDQ5MywxNy4zNjk1NjUyIDksMTcuMzY5NTY1MiBDMTMuNjE1ODU1MSwxNy4zNjk1NjUyIDE3LjM2OTU2NTIsMTMuNjE1ODU1MSAxNy4zNjk1NjUyLDkgQzE3LjM2OTU2NTIsNC4zODQxNDQ5MyAxMy42MTU4NTUxLDAuNjMwNDM0NzgzIDksMC42MzA0MzQ3ODMgWiBNNC42NDI5MjgxMSwxMS43ODk4NTUxIEM1LjI1MDQxMTY1LDExLjc4OTg1NTEgNS43NTY5NTIzNCwxMS4zNjA3NTY3IDUuODc4NzE2OTMsMTAuODgxMzY5NSBDNi4wMDA0ODE1MiwxMS4zNjEyNDM3IDYuNTA3MDIyMjIsMTEuNzIzNzM2OSA3LjExNDM4NCwxMS43MjM3MzY5IEM3LjcyNDE4MTA2LDExLjcyMzczNjkgOC4yMzI2Njk5OSwxMS4zNjUwMTg0IDguMzUxNTEyMjMsMTAuODgyNzA4OSBDOC40NzA5NjMzLDExLjM2NTAxODQgOC45Nzk0NTIyMywxMS43MzY1MjIyIDkuNTg4NzYyMjQsMTEuNzM2NTIyMiBDMTAuMTk0NjYyOCwxMS43MzY1MjIyIDEwLjcwMTIwMzUsMTEuMzk0OTcyNSAxMC44MjM0NTUyLDEwLjkxNjU1OTQgQzEwLjk0NTcwNjgsMTEuMzk0OTcyNSAxMS40NTIyNDc1LDExLjc4OTM2OCAxMi4wNTgyNjk5LDExLjc4OTM2OCBDMTIuMzUzNjcwOCwxMS43ODkzNjggMTIuNjI0NzE4OCwxMS42OTkzODQgMTIuODM5NzU1LDExLjU1OTU5ODIgQzExLjAwOTUxMTUsOC43MTgwOTk3NSAxMi4xNDUzMzE2LDQuMTM3NjgxMTYgMTIuMTQ1MzMxNiw0LjEzNzY4MTE2IEM2Ljk0NjQ3MDYzLDUuMjMxNjE0MjQgNC42NjU4MTk4NSwxMC4xMDAzNzE0IDQuMDU3OTcxMDEsMTEuNjY2MTQyMiBDNC4yMzI5NDY3MywxMS43NDMyMTkyIDQuNDMxNzg4MzEsMTEuNzg5ODU1MSA0LjY0MjkyODExLDExLjc4OTg1NTEgWiIgaWQ9Indhcm5pbmd0cmFja2VycyI+PC9wYXRoPg0KICAgICAgICAgICAgPC9nPg0KICAgICAgICA8L2c+DQogICAgPC9nPg0KPC9zdmc+",
      gM =
        "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8c3ZnIHdpZHRoPSIxOHB4IiBoZWlnaHQ9IjE3cHgiIHZpZXdCb3g9IjAgMCAxOCAxNyIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuOC4zICgyOTgwMikgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+DQogICAgPHRpdGxlPkdyb3VwIDI8L3RpdGxlPg0KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPg0KICAgIDxkZWZzPjwvZGVmcz4NCiAgICA8ZyBpZD0iNi40LU1vY2tzIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4NCiAgICAgICAgPGcgaWQ9IkJyZWFraW5nLVBhZ2UtSW5kaWNhdG9ycyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIwMTQuMDAwMDAwLCAtODUuMDAwMDAwKSI+DQogICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjAxNC4wMDAwMDAsIDg1LjAwMDAwMCkiPg0KICAgICAgICAgICAgICAgIDxnIGlkPSJTbG93LVNRIj4NCiAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS0yMzUxIiBmaWxsPSIjRkY5RDAwIiB4PSIwIiB5PSIwIiB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHJ4PSIyIj48L3JlY3Q+DQogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik04Ljc1MzIyMDA5LDguMjE4MDczMjYgQzkuNDY5MDYxNTUsNy43Mzk2ODA4IDkuOTQyMDM3NTgsNi45MjQwNzIzMyA5Ljk0MjAzNzU4LDUuOTk5OTYwNjggQzkuOTQyMDM3NTgsNC41Mjk4Mzg2NSA4Ljc0NTcwNjk5LDMuMzMzMzMzMzMgNy4yNzU1ODQ5NiwzLjMzMzMzMzMzIEM1LjgwNTQ2MjkyLDMuMzMzMzMzMzMgNC42MDg5NTc2MSw0LjUyOTgzODY1IDQuNjA4OTU3NjEsNS45OTk5NjA2OCBDNC42MDg5NTc2MSw2LjQyNDUzODM1IDQuNzA5MjQ4OCw2LjgyNTcwMzEgNC44ODYwNjg4LDcuMTgyMTM4NjggQzUuMDUyNTgwMTMsNy4yMTQ4MTE5NCA1LjQ4Mzk3MjAxLDcuMjk3NDU2MDcgNi4xNjU3NDI0MSw3LjQxMjc3MzQ3IEM2LjkyNjEzODMxLDcuNTQxNzE5MjggNy40Mjg0Njc4Niw3LjQzNzkzMzYyIDcuODQ2MDU2Niw3LjA2NTk0NzY3IEM4LjEwNzQ0MjcsNi44MzMyMTYyMSA4LjI2MjQyMjI4LDYuNTEzMTIzMDggOC4yODIxNjYwMiw2LjE2NDM3NTMzIEM4LjMwMjc4MzM3LDUuODE1NjI3NTggOC4xODYwNjgxOSw1LjQ3OTExMDQ2IDcuOTUzMzM2NzIsNS4yMTg0MjMyNiBDNy41NzkyNTQwOSw0Ljc5ODczNzg0IDYuOTM0MzUwMzEsNC43NjExNzIzMiA2LjUxMzc5MTI3LDUuMTM0NTU2MDYgQzYuMTc3OTczMDUsNS40MzM1MDc2NyA2LjEzNTY5LDUuOTU1NTgwOTYgNi40MjAzMTQyOSw2LjI3NTY3NDA4IEM2LjY0MzYxMDcsNi41MjYyMjczMyA3LjA1NDM4NTIzLDYuNTU0ODgxOTUgNy4zMDAwNDYyMiw2LjMzNjQ3NzggQzcuMzkwOTAyMzUsNi4yNTU5MzAzNSA3LjQ0NDcxNzEzLDYuMTQ4MTI2MDYgNy40NTAzMDgyOCw2LjAzMzMzMjg0IEM3LjQ1NTAyNTgxLDUuOTM5ODU1ODYgNy40MjcwNzAwOCw1Ljg1MTc5NTMgNy4zNzMwODA1Nyw1Ljc5MjM4OTM3IEM3LjMyNDY4MjIxLDUuNzM5MjczNDggNy4yNDc2MjkyMyw1LjcwOTkxOTk3IDcuMTY4MzA0ODQsNS43MTA2MTg4NiBDNy4xMDA4NjE2Myw1LjcxMjU0MDgyIDcuMDEzNDk5OTcsNS43MzkyNzM0OCA2Ljk1Njg4OTYyLDUuNzk1MTg0OTUgQzYuOTQzMDg2NDcsNS44MDgxMTQ0NyA2LjkyNjEzODMxLDUuODE2MzI2NDcgNi45MDY5MTg3NSw1LjgxNjMyNjQ3IEM2Ljg2NTMzNDYsNS44MTYzMjY0NyA2LjgzMTk2MjQ0LDUuNzc4NzYwOTUgNi44MzE5NjI0NCw1LjczMzE1ODE3IEM2LjgzMTk2MjQ0LDUuNzA1MDI3NzEgNi44NDM0OTQxOCw1LjY4NDU4NTA4IDYuODU3ODIxNDksNS42NjQ4NDEzNSBDNi45NDMwODY0Nyw1LjU0ODEyNjE3IDcuMDYzMjk2MTIsNS40ODA1MDgyNCA3LjE4MjYzMjE1LDUuNDcwMzc0MjkgQzcuMzQ0NDI1OTUsNS40NTY3NDU4NyA3LjQ3NTQ2ODQ0LDUuNTAzMDQ3NTUgNy41NzkyNTQwOSw1LjYxNjk2NzE2IEM3LjY4MjM0MDg1LDUuNzMwMzYyNTkgNy43MzYxNTU2Myw1Ljg4MTE0ODgyIDcuNzI2NzIwNTgsNi4wNDc2NjAxNSBDNy43MTY0MTE5LDYuMjM2MDExODkgNy42MzA0NDgwMiw2LjQxMTQzNDEgNy40ODM2ODA0Myw2LjU0MTc3NzcgQzcuMTIyMDAzMTYsNi44NjM5Njc1MSA2LjU0MDUyMzk0LDYuODI1MTc4OTMgNi4yMTM2MTY2LDYuNDU4NjA5NCBDNS44MjkyMjUyOSw2LjAyNjUxODYzIDUuODgyNTE1OTEsNS4zMjU3MDMzOCA2LjMyOTYzMjg5LDQuOTI2OTg0NzYgQzYuODYzMjM3OTIsNC40NTIwODY3NyA3LjY4NDQzNzUzLDQuNDk5Nzg2MjMgOC4xNTg2MzY2Myw1LjAzMzU2NTk4IEM4LjQzOTk0MTE4LDUuMzQ5NDY1NzUgOC41ODE4MTY1Miw1Ljc1NjkyMDU0IDguNTU3MzU1MjUsNi4xNzk0MDE1MyBDOC41MzI3MTkyNiw2LjYwMjU4MTQyIDguMzQ1MDY2NDEsNi45OTAyOTI0NyA4LjAyODk5MTkyLDcuMjcxNDIyMyBDNy42NzM0Mjk5Niw3LjU4ODE5NTY4IDcuMjU3NzYzMTgsNy43NDAzNzk3IDYuNzI2MDgwMTEsNy43NDAzNzk3IEM2LjUzOTEyNjE1LDcuNzQwMzc5NyA2LjMzNzE0NTk5LDcuNzIxMTYwMTMgNi4xMTg3NDE4NCw3LjY4NDQ2ODIzIEM1LjM2NTg1OTA0LDcuNTU2NzQ1NDggNC41NjE3ODIzMSw3LjQxMzQ3MjM2IDQuNDUzOTc4MDIsNy4zOTg0NDYxNSBDMy45MTIxNjEsNy4zMjYxMTA3IDMuNDYxNzI0MjcsNi45NTgxNDMzOCAzLjQ0NzM5Njk2LDYuNDE3MDI1MjUgTDMuNTg0NTU0NzcsNC4wNTA3NDczIEMzLjU4NDU1NDc3LDMuODk4NTYzMjggMy40NjEwMjUzOCwzLjc3NDMzNSAzLjMwODE0MjQ3LDMuNzc0MzM1IEMzLjE1NTI1OTU3LDMuNzc0MzM1IDMuMDMxNzMwMTgsMy44OTc4NjQzOSAzLjAzMTczMDE4LDQuMDUwNzQ3MyBDMy4wMzE3MzAxOCw0LjA1MDc0NzMgMy4xMTIyNzc2Myw1LjQ4ODAyMTM1IDMuMTIxNzEyNjksNS42Njk1NTg4OCBDMy4xMzk1MzQ0Nyw2LjAxNDI4Nzk5IDIuODIyMDYyMTksNi4yOTA3MDAyOSAyLjQ3MjYxNTU1LDYuMjkwNzAwMjkgQzIuMTE0NDMyNzQsNi4yOTA3MDAyOSAxLjc5NTU2MjY3LDUuOTk5MjYxNzkgMS44MjM2OTMxMyw1LjY0MTYwMzE1IEMxLjgzOTI0MzUsNS40NDM2NDE2MiAxLjg1NTY2NzQ5LDUuMjM4ODY1ODkgMS44NzIwOTE0OSw1LjA0NzE5NDQgTDEuOTI5NDAwNzQsNC4wNjc2OTU0NiBDMS45Mjk0MDA3NCwzLjkxNTUxMTQ0IDEuODA1ODcxMzUsMy43OTEyODMxNiAxLjY1Mjk4ODQ0LDMuNzkxMjgzMTYgQzEuNTAwMTA1NTMsMy43OTEyODMxNiAxLjM3NjU3NjE0LDMuOTE0ODEyNTUgMS4zNzY1NzYxNCw0LjA2NzY5NTQ2IEwxLjUxMTExMzEsNi4zODYyNzM5NSBDMS41MTExMTMxLDguMDEyNTk4NjMgMi40MzkyNDMzOSw5LjMzNDczMDAxIDQuMDYyMjQ4MzMsOS4zMzMzMzIyMyBDNS42OTk1ODA1OSw5LjMzMTIzNTU1IDEwLjM0MDc1NjIsOS4zMzMzMzIyMyAxMC4zNDA3NTYyLDkuMzMzMzMyMjMgQzEwLjQ3NDQxOTUsOS4zMzMzMzIyMyAxMC41ODIzOTg2LDkuMjI0ODI5MDQgMTAuNTgyMzk4Niw5LjA5MTY4OTg3IEMxMC41ODIzOTg2LDguOTU4MDI2NTMgMTAuNDY4MzA0Miw4Ljg5MTEwNzUgMTAuMzQxNDU1MSw4Ljg1MDc0NjQxIEMxMC4yNzk5NTI1LDguODMxNzAxNTcgOS42MTg2MjQ3MSw4LjUxNTYyNzA4IDguNzUzMjIwMDksOC4yMTgwNzMyNiBaIiBpZD0iUGFnZS0xIiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+DQogICAgICAgICAgICAgICAgPC9nPg0KICAgICAgICAgICAgICAgIDxnIGlkPSJOb24tU2VjdXJlLVNRIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2LjAwMDAwMCwgNS4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS0yMzUxIiBmaWxsPSIjRkY5RDAwIiB4PSIwIiB5PSIwIiB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHJ4PSIyIj48L3JlY3Q+DQogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0zLjEzMDIxMTczLDguNjU1Mjg3NjQgQzMuMjUwMzgwMTUsOS4xMjg4NzEzOSAzLjc1MDI4MDc4LDkuNDg2NjEyNzggNC4zNDk2ODA4Niw5LjQ4NjYxMjc4IEM0Ljk1MTQ4NDMxLDkuNDg2NjEyNzggNS40NTMzMDc2NCw5LjEzMjU5NjYxIDUuNTcwNTkyMDEsOC42NTY2MDk0OSBDNS42ODg0NzcyNCw5LjEzMjU5NjYxIDYuMTkwMzAwNTYsOS40OTkyMzA0NiA2Ljc5MTYyMzM0LDkuNDk5MjMwNDYgQzcuMzg5NTgxNCw5LjQ5OTIzMDQ2IDcuODg5NDgyMDMsOS4xNjIxNTgwNCA4LjAxMDEzMTEyLDguNjkwMDE2MzIgQzguMTMwNzgwMjIsOS4xNjIxNTgwNCA4LjYzMDY4MDg1LDkuNTUxMzgzNTUgOS4yMjg3NTkwOCw5LjU1MTM4MzU1IEM5LjUyMDI4NzY2LDkuNTUxMzgzNTUgOS43ODc3ODI1Nyw5LjQ2MjU3OTA5IDEwLDkuMzI0NjI1NzQgQzguMTkzNzQ4NDcsNi41MjAzNzU0OCA5LjMxNDY3OTUsMiA5LjMxNDY3OTUsMiBDNC4xODM5Njg2MSwzLjA3OTU5MzA5IDEuOTMzMjE0MDksNy44ODQ1MjczOSAxLjMzMzMzMzMzLDkuNDI5NzczMTEgQzEuNTA2MDE1MzUsOS41MDU4Mzk3MiAxLjcwMjI1MDM4LDkuNTUxODY0MjMgMS45MTA2MjI0Myw5LjU1MTg2NDIzIEMyLjUxMDE0MjY4LDkuNTUxODY0MjMgMy4wMTAwNDMzMSw5LjEyODM5MDcxIDMuMTMwMjExNzMsOC42NTUyODc2NCBaIiBpZD0ic2hhcmsiIGZpbGw9IiNGRkZGRkYiPjwvcGF0aD4NCiAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICA8L2c+DQogICAgICAgIDwvZz4NCiAgICA8L2c+DQo8L3N2Zz4=",
      sM = MM("purplebox"),
      { sendMessage: J } = sM,
      { onMessage: IM } = chrome.runtime;
    (function (M, D) {
      const g = { box_position_timeout: 0, box_destroy_timeout: 9999, box_none_timeout: 9999 },
        e = {};
      let o = !1,
        i = {},
        n = 0,
        U = 0,
        N,
        L,
        r,
        S,
        O,
        x,
        E,
        l,
        m,
        R,
        Q,
        z,
        y;
      const j = function (t) {
          return D.createElement(t);
        },
        A = function (t, ...s) {
          for (let I = 0; I < s.length; I++) t.appendChild(s[I]);
        },
        k = typeof chrome.runtime.connect == "function";
      let a = null;
      const G = function () {
          N && N.parentNode && N.parentNode.removeChild(N),
            clearTimeout(g.box_position_timeout),
            clearTimeout(g.box_destroy_timeout),
            clearTimeout(g.box_none_timeout),
            (o = !1),
            k && a && a.postMessage({ name: "onDestroyBox" });
        },
        h = function () {
          clearTimeout(g.box_destroy_timeout),
            e.alert_bubble_timeout > 0 &&
              (g.box_destroy_timeout = setTimeout(() => {
                G();
              }, 1e3 * e.alert_bubble_timeout));
        },
        b = function () {
          N && ((e.alert_expanded = !e.alert_expanded), oM());
        },
        _ = function () {
          Q.removeEventListener("click", G), L.removeEventListener("click", b), z.removeEventListener("click", b);
        },
        H = function () {
          Q.addEventListener("click", G), L.addEventListener("click", b), z.addEventListener("click", b);
        },
        oM = function () {
          const t = Math.max(M.innerHeight - 105, 55);
          h(),
            k
              ? a
                ? a.postMessage({ name: "updateAlertConf", message: e })
                : w("Cannot post message. Port is null")
              : J("updateAlertConf", e),
            N.classList.contains("ghostery-expanded")
              ? (N.classList.remove("ghostery-expanded"),
                N.classList.add("ghostery-collapsing"),
                _(),
                L.addEventListener("transitionend", function s(I) {
                  I.target.removeEventListener("transitionend", s),
                    N.classList.remove("ghostery-collapsing"),
                    N.classList.add("ghostery-collapsed"),
                    H();
                }))
              : (N.classList.contains("ghostery-none") && p(),
                N.classList.remove("ghostery-collapsed"),
                N.classList.add("ghostery-expanding"),
                _(),
                L.addEventListener("transitionend", function s(I) {
                  I.target.removeEventListener("transitionend", s),
                    N.classList.remove("ghostery-expanding"),
                    N.classList.add("ghostery-expanded"),
                    (z.style.height = `${n}px`),
                    U === n && n === t && z.style.setProperty("overflow-y", "auto"),
                    H();
                })),
            f();
        },
        f = function () {
          let t;
          const s = y.children.length * 18 + 20,
            I = Math.max(M.innerHeight - 105, 55),
            T = Math.min(s, I);
          (n = T),
            N.classList.contains("ghostery-expanded") &&
              (z.style.setProperty("height", `${n}px`),
              U !== n || (n === s && y.children.length <= 9)
                ? z.style.setProperty("overflow-y", "hidden")
                : z.style.setProperty("overflow-y", "auto")),
            N.classList.contains("ghostery-expanding") || N.classList.contains("ghostery-expanded")
              ? ((t = r.textContent.length),
                t === 1
                  ? l.style.setProperty("left", "25px")
                  : t === 2
                  ? l.style.setProperty("left", "30px")
                  : t === 3 && l.style.setProperty("left", "35px"),
                r.textContent === "0" &&
                  n === s &&
                  setTimeout(() => {
                    (l.textContent = r.textContent === "1" ? i.tracker : i.trackers),
                      e.alert_expanded &&
                        r.textContent === "0" &&
                        (N.classList.remove("ghostery-expanded"),
                        N.classList.add("ghostery-collapsing"),
                        z.style.setProperty("height", "0px"),
                        L.addEventListener("transitionend", function c(d) {
                          d.target.removeEventListener("transitionend", c),
                            N.classList.remove("ghostery-collapsing"),
                            N.classList.add("ghostery-collapsed");
                        }));
                  }, 3e3),
                e.alert_bubble_pos.includes("l")
                  ? (N.classList.remove("ghostery-right"), N.classList.add("ghostery-left"))
                  : (N.classList.remove("ghostery-left"), N.classList.add("ghostery-right")),
                e.alert_bubble_pos.includes("t")
                  ? (N.classList.remove("ghostery-bottom"), N.classList.add("ghostery-top"))
                  : (N.classList.remove("ghostery-top"), N.classList.add("ghostery-bottom")))
              : (z.style.setProperty("height", ""),
                e.alert_bubble_pos.includes("l")
                  ? (N.classList.remove("ghostery-right"), N.classList.add("ghostery-left"))
                  : (N.classList.remove("ghostery-left"), N.classList.add("ghostery-right")),
                e.alert_bubble_pos.includes("t")
                  ? (N.classList.remove("ghostery-bottom"), N.classList.add("ghostery-top"))
                  : (N.classList.remove("ghostery-top"), N.classList.add("ghostery-bottom"))),
            (U = T);
        },
        W = function (t) {
          let s,
            I = !1;
          const T = j("div"),
            c = j("span"),
            d = j("span");
          (d.id = "ghostery-no-tracker"),
            T.classList.add("ghostery-trackerContainer"),
            c.classList.add("ghostery-tracker"),
            t.hasLatencyIssue
              ? ((s = O), (s.style.opacity = "1.0"))
              : t.hasInsecureIssue
              ? ((s = x), (s.style.opacity = "1.0"))
              : t.hasInsecureIssue && t.hasLatencyIssue
              ? (s = E)
              : (s = d),
            (I = s.id !== "ghostery-no-tracker"),
            I && L.classList.add("ghostery-icons-found"),
            t.blocked ? T.classList.add("ghostery-tracker-disabled") : T.classList.remove("ghostery-tracker-disabled");
          const Y = s.cloneNode(!0);
          return (
            Y.classList.remove("ghostery-pb-tracker"),
            Y.classList.add("ghostery-pb-tracker-list"),
            (c.textContent = t.name),
            A(T, Y, c),
            T.setAttribute("category", t.cat),
            { tracker: T, hasIcon: I }
          );
        },
        iM = function (t) {
          const s = l,
            I = y.childNodes;
          for (let c = 0; c < t.length; c++) {
            const d = t[c].name.toLowerCase(),
              Y = t[c].cat.toLowerCase();
            if (I.length) {
              let v = !1;
              for (let u = 0; u < I.length; u++) {
                const X = I[u].textContent.toLowerCase(),
                  zM = I[u].getAttribute("category");
                if (d <= X) {
                  v = !0;
                  const B = W(t[c]);
                  d === X && Y === zM ? B.hasIcon && y.replaceChild(B.tracker, I[u]) : y.insertBefore(B.tracker, I[u]);
                  break;
                }
              }
              if (!v) {
                const u = W(t[c]);
                A(y, u.tracker);
              }
            } else {
              const v = W(t[c]);
              A(y, v.tracker);
            }
          }
          f();
          const T = y.childNodes.length;
          T > 0
            ? (p(),
              N.classList.remove("ghostery-none"),
              (r.textContent = T),
              (s.textContent = r.textContent === "1" ? i.tracker : i.trackers))
            : (r.textContent = "0");
        },
        p = function () {
          (r.style.background = "none"), (r.style.color = "#ffffff");
        },
        cM = function () {
          (N = j("div")),
            (L = j("div")),
            (r = j("div")),
            (S = j("div")),
            (O = j("span")),
            (x = j("span")),
            (E = j("span")),
            (l = j("div")),
            (m = j("div")),
            (R = j("span")),
            (Q = j("span")),
            (z = j("div")),
            (y = j("div"));
          const t = j("style");
          (t.textContent = "@media print {#ghostery-tracker-tally {display:none !important}}"),
            A(D.getElementsByTagName("head")[0], t),
            (N.id = "ghostery-tracker-tally"),
            (N.className = "ghostery-bottom ghostery-right ghostery-none"),
            (L.id = "ghostery-box"),
            (r.id = "ghostery-count"),
            (r.style.background = `url(${NM}) no-repeat center`),
            (r.textContent = "0"),
            (r.style.color = "transparent"),
            (S.id = "ghostery-pb-icons-container"),
            (O.id = "ghostery-slow-tracker"),
            (O.className = "ghostery-pb-tracker"),
            (O.title = i.box_warning_slow),
            (O.style.background = `url(${DM})`),
            (O.style.opacity = "0.5"),
            (x.id = "ghostery-non-secure-tracker"),
            (x.className = "ghostery-pb-tracker"),
            (x.title = i.box_warning_nonsecure),
            (x.style.background = `url(${tM})`),
            (x.style.opacity = "0.5"),
            (E.id = "ghostery-non-secure-slow-tracker"),
            (E.className = "ghostery-pb-tracker"),
            (E.style.background = `url(${gM})`),
            (l.id = "ghostery-title"),
            (l.textContent = i.looking),
            (m.id = "ghostery-minimize"),
            (R.id = "ghostery-minimize-icon"),
            (Q.id = "ghostery-close"),
            (Q.style.background = `url(${eM})`),
            (z.id = "ghostery-pb-background"),
            (y.id = "ghostery-trackerList"),
            e.alert_expanded && !N.classList.contains("ghostery-expanded") && N.classList.add("ghostery-expanded"),
            A(z, y),
            A(m, R),
            A(S, O, x),
            A(L, r, S, l, m, Q),
            A(N, L, z),
            (g.box_none_timeout = setTimeout(p, 2e3)),
            D.getElementsByTagName("body")[0] ? A(D.body, N) : A(D.getElementsByTagName("html")[0], N),
            e.alert_expanded
              ? setTimeout(() => {
                  const s = Math.max(M.innerHeight - 105, 55);
                  h(),
                    k
                      ? a
                        ? a.postMessage({ name: "updateAlertConf", message: e })
                        : w("Failed to post message. Port is null")
                      : J("updateAlertConf", e),
                    N.classList.contains("ghostery-none") && p(),
                    N.classList.add("ghostery-expanded"),
                    (z.style.height = `${n}px`),
                    U === n && n === s && z.style.setProperty("overflow-y", "auto"),
                    f();
                }, 100)
              : (N.classList.add("ghostery-collapsed"), N.classList.remove("ghostery-expanded")),
            H();
        },
        V = function (t, s, I) {
          const { name: T } = t,
            c = t.message;
          if (T === "createBox") {
            if (
              ((i = c.translations),
              (e.language = c.conf.language),
              (e.alert_bubble_timeout = c.conf.alert_bubble_timeout),
              (e.alert_bubble_pos = c.conf.alert_bubble_pos),
              (e.alert_expanded = c.conf.alert_expanded ? c.conf.alert_expanded : !1),
              !o)
            )
              (o = !0), cM();
            else for (; y.firstChild; ) y.removeChild(y.firstChild);
            f(), h(), k && a.postMessage({ name: "onCreateBox" });
          } else T === "updateBox" && o && (iM(c.apps), h());
          return k || (I && I()), !0;
        },
        jM = function () {
          k
            ? ((a = chrome.runtime.connect({ name: "purpleBoxPort" })),
              a && (a.onMessage.addListener(V), a.postMessage({ name: "purpleBoxLoaded" })))
            : IM.addListener(V);
        };
      return {
        init() {
          jM();
        }
      };
    })(window, document).init();
  })();
