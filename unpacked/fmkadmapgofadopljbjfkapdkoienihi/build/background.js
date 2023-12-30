(() => {
  var e = {
      5603: () => {
        const e = [
          {
            id: "@react-devtools/proxy",
            js: ["build/proxy.js"],
            matches: ["<all_urls>"],
            persistAcrossSessions: !0,
            runAt: "document_end",
            world: chrome.scripting.ExecutionWorld.ISOLATED
          },
          {
            id: "@react-devtools/file-fetcher",
            js: ["build/fileFetcher.js"],
            matches: ["<all_urls>"],
            persistAcrossSessions: !0,
            runAt: "document_end",
            world: chrome.scripting.ExecutionWorld.ISOLATED
          },
          {
            id: "@react-devtools/hook",
            js: ["build/installHook.js"],
            matches: ["<all_urls>"],
            persistAcrossSessions: !0,
            runAt: "document_start",
            world: chrome.scripting.ExecutionWorld.MAIN
          },
          {
            id: "@react-devtools/renderer",
            js: ["build/renderer.js"],
            matches: ["<all_urls>"],
            persistAcrossSessions: !0,
            runAt: "document_start",
            world: chrome.scripting.ExecutionWorld.MAIN
          }
        ];
        !(async function () {
          try {
            await chrome.scripting.unregisterContentScripts(), await chrome.scripting.registerContentScripts(e);
          } catch (e) {
            console.error(e);
          }
        })();
      }
    },
    t = {};
  function __webpack_require__(n) {
    var o = t[n];
    if (void 0 !== o) return o.exports;
    var r = (t[n] = { exports: {} });
    return e[n](r, r.exports, __webpack_require__), r.exports;
  }
  (() => {
    "use strict";
    __webpack_require__(5603);
    const background_setExtensionIconAndPopup = function (e, t) {
      const n = chrome.action;
      n.setIcon({
        tabId: t,
        path: {
          16: chrome.runtime.getURL(`icons/16-${e}.png`),
          32: chrome.runtime.getURL(`icons/32-${e}.png`),
          48: chrome.runtime.getURL(`icons/48-${e}.png`),
          128: chrome.runtime.getURL(`icons/128-${e}.png`)
        }
      }),
        n.setPopup({ tabId: t, popup: chrome.runtime.getURL(`popups/${e}.html`) });
    };
    function checkAndHandleRestrictedPageIfSo(e) {
      var t;
      e && (!(t = e.url) || "chrome:" === new URL(t).protocol) && background_setExtensionIconAndPopup("restricted", e.id);
    }
    function executeScriptInMainWorld({ target: e, files: t }) {
      return chrome.scripting.executeScript({ target: e, files: t, world: chrome.scripting.ExecutionWorld.MAIN });
    }
    chrome.tabs.query({}, (e) => e.forEach(checkAndHandleRestrictedPageIfSo)),
      chrome.tabs.onCreated.addListener((e, t, n) => checkAndHandleRestrictedPageIfSo(n)),
      chrome.tabs.onUpdated.addListener((e, t, n) => {
        checkAndHandleRestrictedPageIfSo(n);
      });
    const e = ["compact"];
    const t = {};
    function registerTab(e) {
      t[e] || (t[e] = { extension: null, proxy: null, disconnectPipe: null });
    }
    function connectExtensionAndProxyPorts(e, n, o) {
      if (!e) throw new Error("Attempted to connect ports, when extension port is not present");
      if (!n) throw new Error("Attempted to connect ports, when proxy port is not present");
      if (t[o].disconnectPipe) throw new Error(`Attempted to connect already connected ports for tab with id ${o}`);
      function extensionPortMessageListener(e) {
        try {
          n.postMessage(e);
        } catch (e) {
          0, disconnectListener();
        }
      }
      function proxyPortMessageListener(t) {
        try {
          e.postMessage(t);
        } catch (e) {
          0, disconnectListener();
        }
      }
      function disconnectListener() {
        e.onMessage.removeListener(extensionPortMessageListener),
          n.onMessage.removeListener(proxyPortMessageListener),
          delete t[o].disconnectPipe;
      }
      (t[o].disconnectPipe = disconnectListener),
        e.onMessage.addListener(extensionPortMessageListener),
        n.onMessage.addListener(proxyPortMessageListener),
        e.onDisconnect.addListener(disconnectListener),
        n.onDisconnect.addListener(disconnectListener);
    }
    chrome.runtime.onConnect.addListener((e) => {
      if ("proxy" === e.name) {
        if (null == e.sender?.tab?.id) return;
        const n = e.sender.tab.id;
        return (
          t[n]?.proxy && (t[n].disconnectPipe?.(), t[n].proxy.disconnect()),
          registerTab(n),
          (function (e, n) {
            (t[n].proxy = e),
              e.onDisconnect.addListener(() => {
                t[n].disconnectPipe?.(), delete t[n].proxy;
              });
          })(e, n),
          void (t[n].extension && connectExtensionAndProxyPorts(t[n].extension, t[n].proxy, n))
        );
      }
      if (+(n = e.name) + "" === n) {
        const n = +e.name;
        return (
          registerTab(n),
          (function (e, n) {
            (t[n].extension = e),
              e.onDisconnect.addListener(() => {
                t[n].disconnectPipe?.(), delete t[n].extension;
              });
          })(e, n),
          void (t[n].proxy && connectExtensionAndProxyPorts(t[n].extension, t[n].proxy, n))
        );
      }
      var n;
      console.warn(`Unknown port ${e.name} connected`);
    }),
      chrome.runtime.onMessage.addListener((t, n) => {
        switch (t?.source) {
          case "devtools-page":
            !(function (e) {
              const { payload: t } = e;
              switch (t?.type) {
                case "fetch-file-with-cache": {
                  const {
                    payload: { tabId: t, url: n }
                  } = e;
                  if (!t) throw new Error("Couldn't fetch file sources: tabId not specified");
                  if (!n) throw new Error("Couldn't fetch file sources: url not specified");
                  chrome.tabs.sendMessage(t, { source: "devtools-page", payload: { type: "fetch-file-with-cache", url: n } });
                  break;
                }
                case "inject-backend-manager": {
                  const {
                    payload: { tabId: t }
                  } = e;
                  if (!t) throw new Error("Couldn't inject backend manager: tabId not specified");
                  executeScriptInMainWorld({ target: { tabId: t }, files: ["/build/backendManager.js"] });
                  break;
                }
              }
            })(t);
            break;
          case "react-devtools-fetch-resource-content-script":
            !(function (e) {
              const { payload: t } = e;
              switch (t?.type) {
                case "fetch-file-with-cache-complete":
                case "fetch-file-with-cache-error":
                  chrome.runtime.sendMessage({ source: "react-devtools-background", payload: t });
              }
            })(t);
            break;
          case "react-devtools-backend-manager":
            !(function (t, n) {
              const { payload: o } = t;
              "require-backends" === o?.type &&
                o.versions.forEach((t) => {
                  e.includes(t) &&
                    executeScriptInMainWorld({ target: { tabId: n.tab.id }, files: [`/build/react_devtools_backend_${t}.js`] });
                });
            })(t, n);
            break;
          case "react-devtools-hook":
            !(function (e, t) {
              const { payload: n } = e;
              "react-renderer-attached" === n?.type && background_setExtensionIconAndPopup(n.reactBuildType, t.tab.id);
            })(t, n);
        }
      }),
      chrome.tabs.onActivated.addListener(({ tabId: e }) => {
        for (const n in t)
          if (null != t[n].proxy && null != t[n].extension) {
            const o = e === +n ? "resumeElementPolling" : "pauseElementPolling";
            t[n].extension.postMessage({ event: o });
          }
      });
  })();
})();
