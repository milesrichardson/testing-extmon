!(function (i) {
  var n,
    o =
      ((i.getUnavailablePreferences =
        ((n = i.getUnavailablePreferences),
        function () {
          var e = n();
          return (e.enablenewlogin = !g_shownewloginoption), (e.hidecontextspan = void 0 === chrome.contextMenus), e;
        })),
      function (e) {
        return e ? { windowID: e.windowId, tabURL: reduxApp.parsePageUrl(e.url), tabID: e.id } : null;
      }),
    t,
    r,
    e,
    a,
    c;
  function l(e) {
    chrome.tabs.executeScript(e, { file: "modaloverlay/removeModalOverlay.js" }, function () {
      chrome.runtime.lastError &&
        (console.log("Error removing modal overlay"),
        "Cannot access a chrome:// URL" === chrome.runtime.lastError.message
          ? console.log("Extensions cannot affect internal chrome:// URLs")
          : console.log(chrome.runtime.lastError.message));
    });
  }
  (i.initialize = function () {
    chrome.runtime.onConnect.addListener(function (n) {
      var e;
      0 === n.name.indexOf("requestPort") &&
        isSenderSafe(n.sender) &&
        ((e = i.initializeRequestFramework({
          sendContentScript: function (e) {
            n.postMessage(e);
          },
          tabDetails: o(n.sender && n.sender.tab),
          frameIdentity: n.sender && n.sender.frameId && n.sender.tab ? n.sender.tab.id + "-" + n.sender.frameId : null
        })),
        n.onMessage.addListener(e.requestHandler),
        n.onDisconnect.addListener(function () {
          e.disconnectHandler();
        }));
    });
  }),
    (i.getUILanguage = function () {
      return chrome.i18n.getUILanguage();
    }),
    (i.openPopoverDialog = function (e) {
      i.openTabDialog.apply(i, arguments);
    }),
    (i.refreshGroupNames = function () {}),
    (i.closePopovers = function () {
      var e;
      chrome.extension.getViews({ type: "popup" }).forEach(function (e) {
        e.close();
      });
    }),
    (i.getFavicon =
      g_ischrome && (g_isedge || g_isfirefoxwebext)
        ? function (e) {
            e.callback && e.callback(null);
          }
        : ((t = null),
          (r = function (e) {
            var n = "";
            try {
              var t = document.createElement("canvas");
              (t.height = e.clientHeight), (t.width = e.clientWidth), t.getContext("2d").drawImage(e, 0, 0), (n = t.toDataURL());
            } catch (e) {}
            return n;
          }),
          (a = function (n) {
            n.url &&
              n.callback &&
              e("chrome://favicon/" + n.url, function (e) {
                n.callback(e === t ? "" : e);
              });
          }),
          (e = function (e, n) {
            var t = document.createElement("img");
            (t.src = e),
              t.addEventListener("load", function () {
                var e = r(t);
                document.body.removeChild(t), n(e);
              }),
              t.addEventListener("error", function () {
                n(""), document.body.removeChild(t);
              }),
              document.body.appendChild(t);
          })("chrome://favicon/", function (e) {
            t = e;
          }),
          a)),
    (c = function (a, c) {
      LPTabs.get({
        tabID: a.id,
        callback: function (e) {
          var n, t, o, r;
          c.inject
            ? ((n = 0),
              (t = [].concat(c.inject.files)),
              (o = function () {
                ++n === t.length &&
                  (e.extendTop({ context: c.inject.context }),
                  c.inject.allFrames && e.extendFrames({ context: c.inject.context }),
                  c.loadHandler) &&
                  c.loadHandler(e);
              }),
              t.forEach(function (e) {
                chrome.tabs.executeScript(a.id, { file: e, allFrames: c.inject.allFrames }, o);
              }))
            : c.loadHandler && c.loadHandler(e),
            c.closeHandler &&
              (r = i.onTabClosed(function () {
                r(), c.closeHandler();
              }, e.tabDetails));
        }
      });
    }),
    (i.getTabInterface = c),
    (i.getCurrentTab = function (n) {
      chrome.tabs.query({ active: !0, currentWindow: !0 }, function (e) {
        1 === e.length ? LPTabs.get({ tabID: e[0].id, callback: n }) : n(null);
      });
    }),
    (i.getCurrentTabDetails = function (n) {
      chrome.tabs.query({ active: !0, currentWindow: !0 }, function (e) {
        n(o(e[0]));
      });
    }),
    (i.openDialogWindow = function (n) {
      var e = n.features || {};
      (e.url = n.url),
        (e.type = chrome.windows.CreateType.POPUP),
        chrome.windows.create(e, function (e) {
          c(e.tabs[0], n);
        });
    }),
    (i.openTab = function (n) {
      chrome.tabs.create({ url: n.url, active: !n.inactive }, function (e) {
        c(e, n), "function" == typeof n.onBeforeRequestCallback && i.onBeforeNavigate(n.onBeforeRequestCallback, { tabID: e.id });
      });
    }),
    (i.openWindow = function (n) {
      chrome.windows.create({ url: n.url }, function (e) {
        c(e.tabs[0], n);
      });
    }),
    (i.openSame = function (n) {
      chrome.tabs.update(null, { url: n.url }, function (e) {
        c(e, n);
      });
    }),
    (i.navigateTab = function (o) {
      chrome.tabs.update(o.tabId, { url: o.url, active: !0 }, function (n) {
        var t = i.onTabUpdated(function (e) {
          e.tabDetails.tabID === n.id && (t(), "function" == typeof o.loadHandler) && o.loadHandler(e);
        });
      });
    }),
    (i.activateTab = function (e) {
      chrome.windows.update(e.windowID, { focused: !0 }), chrome.tabs.update(e.tabID, { active: !0 });
    }),
    (i.closeTab = function (e) {
      chrome.tabs.remove(e.tabID);
    }),
    (i.onTabUpdated = function (t) {
      var e;
      return (
        "function" == typeof t &&
          ((e = function (e, n) {
            "complete" === n.status && LPTabs.get({ tabID: e, callback: t });
          }),
          chrome.tabs.onUpdated.addListener(e)),
        function () {
          chrome.tabs.onUpdated.removeListener(e);
        }
      );
    }),
    (i.onTabActivated = function (t) {
      var e;
      return (
        "function" == typeof t &&
          ((e = function (e) {
            var n,
              n = (n = LPTabs.get({ tabID: e.tabId })) || new LPTab(o(e));
            t(n);
          }),
          chrome.tabs.onActivated.addListener(e)),
        function () {
          chrome.tabs.onActivated.removeListener(e);
        }
      );
    }),
    (i.onTabClosed = function (n) {
      var e;
      return (
        "function" == typeof n &&
          ((e = function (e) {
            n(e);
          }),
          chrome.tabs.onRemoved.addListener(e)),
        function () {
          chrome.tabs.onRemoved.removeListener(e);
        }
      );
    }),
    (i.onTransition = function (n) {
      var e;
      return (
        "function" == typeof n &&
          ((e = function (e) {
            n(e);
          }),
          chrome.webNavigation.onCommitted.addListener(e)),
        function () {
          chrome.webNavigation.onCommitted.removeListener(e);
        }
      );
    }),
    (i.onAuthRequired = function (n) {
      var e;
      return chrome.webRequest.onAuthRequired
        ? ("function" == typeof n &&
            ((e = function (e) {
              return n(e, e.tabId);
            }),
            chrome.webRequest.onAuthRequired.addListener(e, { urls: ["<all_urls>"] }, ["blocking"])),
          function () {
            chrome.webRequest.onAuthRequired.removeListener(e);
          })
        : function () {};
    }),
    (i.showModalOverlay = function (n) {
      i.getCurrentTabDetails(function (e) {
        e &&
          (e.tabURL &&
            e.tabURL.indexOf(getchromeurl("")) < 0 &&
            ((i.activeOverlayTab = e.tabID),
            chrome.tabs.executeScript(e.tabID, { file: "modaloverlay/showModalOverlay.js" }, function () {
              chrome.runtime.lastError &&
                ("Cannot access a chrome:// URL" === chrome.runtime.lastError.message
                  ? console.log("Error showing modal overlay: Extensions cannot affect internal chrome:// URLs")
                  : console.log("Error showing modal overlay: " + chrome.runtime.lastError.message));
            })),
          "function" == typeof n) &&
          n(e.tabID);
      });
    }),
    (i.removeModalOverlay = function (e) {
      e ? l(e) : i.activeOverlayTab && l(i.activeOverlayTab);
    }),
    (i.hideYoureAlmostDoneMarketingOverlay = function (e) {
      chrome.tabs.executeScript(e, { file: "modaloverlay/hideYoureAlmostDoneMarketingOverlay.js" }, function () {
        chrome.runtime.lastError &&
          (console.log("Error hiding marketing overlay"),
          "Cannot access a chrome:// URL" === chrome.runtime.lastError.message
            ? console.log("Extensions cannot affect internal chrome:// URLs")
            : console.log(chrome.runtime.lastError.message));
      });
    }),
    (i.onBeforeNavigate = function (t, o) {
      var e;
      return (
        "function" == typeof t &&
          ((e = function (e) {
            var n;
            return { cancel: !1 === t(e.url, e.requestBody, o.tabID) };
          }),
          chrome.webRequest.onBeforeRequest.addListener(e, { urls: ["<all_urls>"], tabId: o ? o.tabID : null }, [
            "blocking",
            "requestBody"
          ])),
        function () {
          chrome.webRequest.onBeforeRequest.removeListener(e);
        }
      );
    });
})(LPPlatform);
