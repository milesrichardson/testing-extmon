(self.webpackChunkbrowsec_extension = self.webpackChunkbrowsec_extension || []).push([
  [592],
  {
    653: (e, t, r) => {
      const s = r(3058);
      e.exports = (e) => {
        if (!e.ga.enabled) return e;
        if (((e.ga4 = {}), e.ga.tracking_id)) {
          const t = s.find(({ track: t }) => t === e.ga.tracking_id);
          t && ((e.ga4.partial = {}), (e.ga4.partial.measurementId = t.ga4MeasurementId), (e.ga4.partial.apiSecret = t.ga4ApiSecret));
        }
        if (e.ga.fullTrackingId) {
          const t = s.find(({ track: t }) => t === e.ga.fullTrackingId);
          t && ((e.ga4.full = {}), (e.ga4.full.measurementId = t.ga4MeasurementId), (e.ga4.full.apiSecret = t.ga4ApiSecret));
        }
        return e;
      };
    },
    8193: (e) => {
      e.exports = {
        contentScriptPayWall: { id: "Y0Si3TKqQjiQKcfjusUtsg", taskNumber: 361, type: "event" },
        promotionPageAfterInstall: { id: "F7-JutvlRxyTa7TXyce1hg", event: "onboarding.install", taskNumber: 284, type: "event" },
        reopenCongratulations: { id: "T3Xow2d0TdaG6u1q4AQVtw", taskNumber: 356, type: "event" }
      };
    },
    3058: (e) => {
      e.exports = [
        { track: "UA-60149654-2", ga4ApiSecret: "CLWDMTsYQBu_t0DpVPT6Rg", ga4MeasurementId: "G-0GHZ1332D6" },
        { track: "UA-60149654-6", ga4ApiSecret: "NtMfEM5JR6Wfsd_P5WnilA", ga4MeasurementId: "G-FELBYBMRB5" },
        { track: "UA-60149654-1", ga4ApiSecret: "N6slLr4CTJKIchgxA6ty7Q", ga4MeasurementId: "G-D6RC78PG86" },
        { track: "UA-60149654-7", ga4ApiSecret: "tsFNPU06TGC2XIMRNErFig", ga4MeasurementId: "G-WKQJ3BZN1Z" },
        { track: "UA-43024042-1", ga4ApiSecret: "Swcg9hbKQJOb9PaDQ2M_8g", ga4MeasurementId: "G-1N07RLQVY3" },
        { track: "UA-43024042-3", ga4ApiSecret: "BPXQcy5JT46KOjbgWy_QDg", ga4MeasurementId: "G-J9001B3EEV" }
      ];
    },
    8742: (e) => {
      e.exports = [
        { id: "372", serverId: "exp_372", variants: [1] },
        { id: "371", serverId: "exp_371", variants: [0.5, 0.5] },
        { id: "373", serverId: "exp_373", variants: [0.5, 0.5] }
      ];
    },
    6492: (e, t, r) => {
      const s = r(653),
        o = r(8193),
        n = r(8742),
        i = {
          type: "production",
          apiServerUrls: r(2857),
          auth: { enabled: !0 },
          baseUrl: "https://browsec.com",
          experiments: o,
          internalExperiments: n,
          ga: {
            enabled: !0,
            extension_id: ["omghfjlpggmjjaagoclmmobgdodcjboh", "dknfpcdpbkjijldegonllfnnfhabjpde", "05908b89-695d-4687-aa36-6d87f42a464d"],
            tracking_id: "UA-43024042-1",
            chance: 0.01,
            fullTrackingId: "UA-43024042-3"
          },
          proxy: { defaultCountry: "nl" },
          rootUrl: "https://gist.githubusercontent.com/brwinfo/0d4c6d2ebbe6fd716a43f0ac9d37ce22/raw",
          siteAuthorizationDomains: ["browsec.com", "d3k73twqqvofzb.cloudfront.net"]
        };
      e.exports = s(i);
    },
    1494: (e) => {
      e.exports = () => {
        let e,
          t,
          r = new Promise((r, s) => {
            (e = r), (t = s);
          });
        return (r.resolve = e), (r.reject = t), r;
      };
    },
    887: (e, t, r) => {
      const s = r(8202),
        o = r(4569),
        n = r(5762);
      e.exports = () =>
        !o.accessibilityFeatures || n
          ? o.accessibilityFeatures
          : s({}, o.accessibilityFeatures, [
              "animationPolicy",
              "autoclick",
              "caretHighlight",
              "cursorHighlight",
              "focusHighlight",
              "highContrast",
              "largeCursor",
              "screenMagnifier",
              "selectToSpeak",
              "spokenFeedback",
              "stickyKeys",
              "switchAccess",
              "virtualKeyboard"
            ]);
    },
    9648: (e, t, r) => {
      const s = r(4960),
        o = r(4569),
        n = r(5762);
      e.exports = () =>
        !o.alarms || n
          ? o.alarms
          : s({}, o.alarms, {
              objects: ["onAlarm"],
              methods: ["create"],
              promises: { 0: ["getAll", "clearAll"], "0-1": ["clear", "get"] }
            });
    },
    9222: (e, t, r) => {
      const s = r(4960),
        o = r(4569),
        n = r(5762);
      e.exports = () =>
        !o.bookmarks || n
          ? o.bookmarks
          : s({}, o.bookmarks, {
              objects: ["onCreated", "onRemoved", "onChanged", "onMoved", "onChildrenReordered", "onImportBegan", "onImportEnded"],
              promises: {
                0: ["getTree"],
                1: ["create", "get", "getChildren", "getRecent", "getSubTree", "removeTree", "search"],
                2: ["move", "update"]
              }
            });
    },
    5899: (e, t, r) => {
      const s = r(4960),
        o = r(8975),
        n = r(7745),
        i = r(4569),
        a = r(5762),
        c = r(9191);
      e.exports = () => {
        if (!i.browserAction) return;
        let e = s({}, i.browserAction, { objects: ["onClicked"], methods: ["setTitle", "setPopup", "enable", "disable"] });
        return (
          a ? o(e, i.browserAction, ["setIcon"]) : n(e, i.browserAction, { 1: ["setIcon"] }),
          i.browserAction.setBadgeText &&
            ((e.setBadgeText = (e) => {
              ("number" != typeof e && "string" != typeof e) || (e = { text: String(e) }), i.browserAction.setBadgeText(e);
            }),
            (e.removeBadgeText = () => {
              e.setBadgeText("");
            })),
          i.browserAction.setBadgeBackgroundColor &&
            (e.setBadgeBackgroundColor = (e) => {
              ("string" == typeof e || Array.isArray(e)) && (e = { color: e }), i.browserAction.setBadgeBackgroundColor(e);
            }),
          c(
            ["getBadgeText", "getTitle", "getPopup", "getBadgeBackgroundColor"],
            (e, t) => {
              i.browserAction[t] &&
                (e[t] = (e = {}) => (
                  "number" == typeof e && (e = { tabId: e }),
                  a
                    ? i.browserAction[t](e)
                    : new Promise((r) => {
                        i.browserAction[t](e, r);
                      })
                ));
            },
            e
          )
        );
      };
    },
    5351: (e, t, r) => {
      const s = r(4569);
      e.exports = () => s.browserSettings;
    },
    4134: (e, t, r) => {
      const s = r(7745),
        o = r(4569),
        n = r(5762);
      e.exports = () =>
        !o.browsingData || n
          ? o.browsingData
          : s({}, o.browsingData, {
              0: ["settings"],
              1: [
                "removeAppcache",
                "removeCache",
                "removeCookies",
                "removeDownloads",
                "removeFileSystems",
                "removeFormData",
                "removeHistory",
                "removeIndexedDB",
                "removeLocalStorage",
                "removePluginData",
                "removePasswords",
                "removeWebSQL"
              ],
              2: ["remove"]
            });
    },
    2907: (e, t, r) => {
      const s = r(4960),
        o = r(4569),
        n = r(5762);
      e.exports = () =>
        !o.certificateProvider || n
          ? o.certificateProvider
          : s({}, o.certificateProvider, {
              objects: ["onCertificatesRequested", "onSignDigestRequested"],
              promises: { 1: ["requestPin", "stopPinRequest"] }
            });
    },
    9524: (e, t, r) => {
      const s = r(4960),
        o = r(4569),
        n = r(5762);
      e.exports = () => (!o.commands || n ? o.commands : s({}, o.commands, { objects: ["onCommand"], promises: { 0: ["getAll"] } }));
    },
    5707: (e, t, r) => {
      const s = r(4960),
        o = r(4569),
        n = r(5762);
      e.exports = () => {
        if (!o.contextMenus || n) return o.contextMenus;
        return s(
          {
            get ACTION_MENU_TOP_LEVEL_LIMIT() {
              return o.contextMenus.ACTION_MENU_TOP_LEVEL_LIMIT;
            }
          },
          o.contextMenus,
          { objects: ["onClicked"], fullPromises: { 1: ["create", "remove"], 2: ["update"] }, promises: { 0: ["removeAll"] } }
        );
      };
    },
    1795: (e, t, r) => {
      const s = r(8975),
        o = r(4569);
      e.exports = () => {
        if (!o.contextualIdentities) return;
        let e = s({}, o.contextualIdentities, ["create", "get", "remove", "update"]);
        return (
          o.contextualIdentities.query && (e.query = (e) => ("string" == typeof e && (e = { name: e }), o.contextualIdentities.query(e))), e
        );
      };
    },
    8598: (e, t, r) => {
      const s = r(4960),
        o = r(4569),
        n = r(5762);
      e.exports = () =>
        !o.cookies || n
          ? o.cookies
          : s({}, o.cookies, { objects: ["onChanged"], promises: { 0: ["getAllCookieStores"], 1: ["get", "getAll", "set", "remove"] } });
    },
    1455: (e, t, r) => {
      const s = r(4960),
        o = r(4569),
        n = r(5762);
      e.exports = () =>
        !o.debugger || n
          ? o.debugger
          : s({}, o.debugger, {
              objects: ["onDetach", "onEvent"],
              promises: { 0: ["getTargets"], 1: ["detach"], 2: ["attach"], "2-3": ["sendCommand"] }
            });
    },
    454: (e, t, r) => {
      const s = r(8202),
        o = r(4569),
        n = r(5762);
      e.exports = () => (!o.declarativeContent || n ? o.declarativeContent : s({}, o.declarativeContent, ["onPageChanged"]));
    },
    472: (e, t, r) => {
      const s = r(4960),
        o = r(1494),
        n = r(4569),
        i = r(5762);
      e.exports = () => {
        if (!n.desktopCapture || i) return n.desktopCapture;
        let e = s({}, n.desktopCapture, { methods: ["cancelChooseDesktopMedia"] });
        return (
          (e.chooseDesktopMedia = (...e) => {
            let t = o(),
              r = (() => {
                let t = (() => {
                  let t = e.length > 1 ? e.length : 1;
                  return t > 2 && (t = 2), t;
                })();
                return Array.apply(Array, Array(t)).map((t, r) => e[r]);
              })();
            return (
              r.push((e, r = {}) => {
                t.resolve(Object.assign({}, r, { streamId: e }));
              }),
              (t.desktopMediaRequestId = n.desktopCapture.chooseDesktopMedia.apply(n.desktopCapture, r)),
              t
            );
          }),
          e
        );
      };
    },
    6155: (e, t, r) => {
      const s = r(4569),
        o = r(72),
        n = r(9951),
        i = r(2529);
      e.exports = () => {
        if (s.devtools) return { inspectedWindow: o(), network: n(), panels: i() };
      };
    },
    72: (e, t, r) => {
      const s = r(4960),
        o = r(4569),
        n = r(5762);
      e.exports = () => {
        if (!o.devtools.inspectedWindow || n) return o.devtools.inspectedWindow;
        return s(
          {
            get tabId() {
              return o.devtools.inspectedWindow.tabId;
            }
          },
          o.devtools.inspectedWindow,
          {
            objects: ["onResourceAdded", "onResourceContentCommitted"],
            methods: ["reload"],
            promises: { 0: ["getResources"], "1-2": ["eval"] }
          }
        );
      };
    },
    9951: (e, t, r) => {
      const s = r(4960),
        o = r(4569),
        n = r(5762);
      e.exports = () =>
        !o.devtools.network || n
          ? o.devtools.network
          : s({}, o.devtools.network, { objects: ["onNavigated", "onRequestFinished"], promises: { 0: ["getHAR"] } });
    },
    2529: (e, t, r) => {
      const s = r(7745),
        o = r(4569),
        n = r(5762);
      e.exports = () => {
        if (!o.devtools.panels || n) return o.devtools.panels;
        return s(
          {
            get elements() {
              return o.devtools.panels.elements;
            },
            get sources() {
              return o.devtools.panels.sources;
            },
            get themeName() {
              return o.devtools.panels.themeName;
            }
          },
          o.devtools.panels,
          { 0: ["setOpenResourceHandler"], 2: ["openResource"], 3: ["create"] }
        );
      };
    },
    7498: (e, t, r) => {
      const s = r(7745),
        o = r(4569),
        n = r(5762);
      e.exports = () => (!o.documentScan || n ? o.documentScan : s({}, o.documentScan, { 1: ["documentScan"] }));
    },
    4232: (e, t, r) => {
      const s = r(4960),
        o = r(4569),
        n = r(5762);
      e.exports = () =>
        !o.downloads || n
          ? o.downloads
          : s({}, o.downloads, {
              objects: ["onCreated", "onErased", "onChanged", "onDeterminingFilename"],
              methods: ["drag", "open", "setShelfEnabled", "show", "showDefaultFolder"],
              promises: {
                1: ["acceptDanger", "cancel", "download", "erase", "pause", "removeFile", "resume", "search"],
                "1-2": ["getFileIcon"]
              }
            });
    },
    1759: (e, t, r) => {
      const s = r(7745),
        o = r(4569),
        n = r(5762);
      e.exports = () =>
        !o.enterprise.deviceAttributes || n
          ? o.enterprise.deviceAttributes
          : s({}, o.enterprise.deviceAttributes, { 0: ["getDirectoryDeviceId"] });
    },
    2173: (e, t, r) => {
      const s = r(4569),
        o = r(1759),
        n = r(2141);
      e.exports = () => {
        if (s.enterprise) return { deviceAttributes: o(), platformKeys: n() };
      };
    },
    2141: (e, t, r) => {
      const s = r(7745),
        o = r(4569),
        n = r(5762);
      e.exports = () =>
        !o.enterprise.platformKeys || n
          ? o.enterprise.platformKeys
          : s({}, o.enterprise.platformKeys, {
              0: ["getTokens"],
              1: ["getCertificates"],
              2: ["challengeUserKey", "importCertificate", "removeCertificate"],
              "1-2": ["challengeMachineKey"]
            });
    },
    7595: (e, t, r) => {
      const s = r(4960),
        o = r(4569),
        n = r(5762);
      e.exports = () => {
        if (!o.extension || n) return o.extension;
        return s(
          {
            get lastError() {
              return o.extension.lastError;
            },
            get inIncognitoContext() {
              return o.extension.inIncognitoContext;
            }
          },
          o.extension,
          {
            methods: ["getViews", "getBackgroundPage", "getURL", "setUpdateUrlData"],
            promises: { 0: ["isAllowedIncognitoAccess", "isAllowedFileSchemeAccess"] }
          }
        );
      };
    },
    8406: (e, t, r) => {
      const s = r(4960),
        o = r(4569),
        n = r(5762);
      e.exports = () =>
        !o.fileBrowserHandler || n
          ? o.fileBrowserHandler
          : s({}, o.fileBrowserHandler, { objects: ["onExecute"], promises: { 1: ["selectFile"] } });
    },
    5165: (e, t, r) => {
      const s = r(4960),
        o = r(4569),
        n = r(5762);
      e.exports = () =>
        !o.fileSystemProvider || n
          ? o.fileSystemProvider
          : s({}, o.fileSystemProvider, {
              objects: [
                "onAbortRequested",
                "onAddWatcherRequested",
                "onCloseFileRequested",
                "onCreateDirectoryRequested",
                "onCreateFileRequested",
                "onConfigureRequested",
                "onCopyEntryRequested",
                "onDeleteEntryRequested",
                "onExecuteActionRequested",
                "onGetActionsRequested",
                "onGetMetadataRequested",
                "onMountRequested",
                "onMoveEntryRequested",
                "onOpenFileRequested",
                "onReadDirectoryRequested",
                "onReadFileRequested",
                "onRemoveWatcherRequested",
                "onTruncateRequested",
                "onUnmountRequested",
                "onWriteFileRequested"
              ],
              promises: { 0: ["getAll"], 1: ["get", "mount", "notify", "unmount"] }
            });
    },
    153: (e, t, r) => {
      const s = r(4569);
      e.exports = () => s.find;
    },
    5760: (e, t, r) => {
      const s = r(4960),
        o = r(4569),
        n = r(5762);
      e.exports = () =>
        !o.fontSettings || n
          ? o.fontSettings
          : s({}, o.fontSettings, {
              objects: ["onDefaultFixedFontSizeChanged", "onDefaultFontSizeChanged", "onFontChanged", "onMinimumFontSizeChanged"],
              promises: {
                0: ["getFontList"],
                1: ["clearFont", "getFont", "setDefaultFixedFontSize", "setDefaultFontSize", "setMinimumFontSize", "setFont"],
                "0-1": [
                  "clearDefaultFixedFontSize",
                  "clearDefaultFontSize",
                  "clearMinimumFontSize",
                  "getDefaultFixedFontSize",
                  "getDefaultFontSize",
                  "getMinimumFontSize"
                ]
              }
            });
    },
    5561: (e, t, r) => {
      const s = r(4960),
        o = r(4569),
        n = r(5762);
      e.exports = () =>
        !o.gcm || n
          ? o.gcm
          : s({}, o.gcm, {
              methods: ["onMessage", "onMessagesDeleted", "onSendError"],
              promises: { 0: ["unregister"], 1: ["register", "send"] }
            });
    },
    9267: (e, t, r) => {
      const s = r(8975),
        o = r(8202),
        n = r(7745),
        i = r(4569),
        a = r(5762),
        c = r(9191);
      e.exports = () => {
        if (!i.history) return;
        let e = o({}, i.history, ["onVisited", "onVisitRemoved"]);
        return (
          a ? s(e, i.history, ["deleteAll", "deleteRange", "search"]) : n(e, i.history, { 0: ["deleteAll"], 1: ["deleteRange", "search"] }),
          c(
            ["addUrl", "deleteUrl", "getVisits"],
            (e, t) => {
              i.history[t] &&
                (e[t] = (e) => (
                  "string" == typeof e && (e = { url: e }),
                  a
                    ? i.history[t](e)
                    : new Promise((r) => {
                        i.history[t](e, r);
                      })
                ));
            },
            e
          )
        );
      };
    },
    2298: (e, t, r) => {
      const s = r(4960),
        o = r(4569),
        n = r(5762);
      e.exports = () => {
        if (!o.i18n || n) return o.i18n;
        let e = s({}, o.i18n, { methods: ["getMessage"], promises: { 0: ["getAcceptLanguages"], 1: ["detectLanguage"] } });
        return (
          (e.getUILanguage = () => (o.i18n.getUILanguage && o.i18n.getUILanguage()) || navigator.language || navigator.userLanguage), e
        );
      };
    },
    6913: (e, t, r) => {
      const s = r(4960),
        o = r(8975),
        n = r(7745),
        i = r(4569),
        a = r(5762);
      e.exports = () => {
        if (!i.identity) return;
        let e = s({}, i.identity, { objects: ["onSignInChanged"], methods: ["getRedirectURL"] });
        return (
          a
            ? o(e, i.identity, ["getAccounts", "getProfileUserInfo", "getAuthToken", "launchWebAuthFlow"])
            : n(e, i.identity, { 0: ["getAccounts", "getProfileUserInfo"], "0-1": ["getAuthToken"], 1: ["launchWebAuthFlow"] }),
          i.identity.removeCachedAuthToken &&
            (e.removeCachedAuthToken = (e) => (
              "string" == typeof e && (e = { token: e }),
              a
                ? i.identity.removeCachedAuthToken(e)
                : new Promise((t) => {
                    i.identity.removeCachedAuthToken(e, t);
                  })
            )),
          e
        );
      };
    },
    496: (e, t, r) => {
      const s = r(4960),
        o = r(4569),
        n = r(5762);
      e.exports = () =>
        !o.idle || n
          ? o.idle
          : s({}, o.idle, { objects: ["onStateChanged"], methods: ["setDetectionInterval"], promises: { 1: ["queryState"] } });
    },
    4261: (e, t, r) => {
      const s = r(4960),
        o = r(4569),
        n = r(5762);
      e.exports = () => {
        if (o.input && o.input.ime)
          return n
            ? o.input.ime
            : s({}, o.input.ime, {
                objects: [
                  "onActivate",
                  "onBlur",
                  "onCandidateClicked",
                  "onCompositionBoundsChanged",
                  "onDeactivated",
                  "onFocus",
                  "onInputContextUpdate",
                  "onKeyEvent",
                  "onMenuItemActivated",
                  "onReset",
                  "onSurroundingTextChanged"
                ],
                methods: ["hideInputView", "keyEventHandled"],
                promises: {
                  0: ["activate", "deactivate"],
                  1: [
                    "clearComposition",
                    "commitText",
                    "createWindow",
                    "deleteSurroundingText",
                    "hideWindow",
                    "sendKeyEvents",
                    "setMenuItems",
                    "setCandidates",
                    "setCandidateWindowProperties",
                    "setComposition",
                    "setCursorPosition",
                    "showWindow",
                    "updateMenuItems"
                  ]
                }
              });
      };
    },
    4881: (e, t, r) => {
      const s = r(4960),
        o = r(4569),
        n = r(5762);
      e.exports = () =>
        !o.instanceID || n
          ? o.instanceID
          : s({}, o.instanceID, {
              objects: ["onTokenRefresh"],
              promises: { 0: ["deleteID", "getCreationTime", "getID"], 1: ["deleteToken", "getToken"] }
            });
    },
    3789: (e, t, r) => {
      const s = r(4960),
        o = r(4569),
        n = r(5762);
      e.exports = () =>
        !o.management || n
          ? o.management
          : s({}, o.management, {
              objects: ["onInstalled", "onUninstalled", "onEnabled", "onDisabled", "ExtensionInfo"],
              promises: {
                0: ["getAll", "getSelf"],
                1: [
                  "get",
                  "getPermissionWarningsById",
                  "getPermissionWarningsByManifest",
                  "uninstallSelf",
                  "launchApp",
                  "createAppShortcut"
                ],
                2: ["setEnabled", "uninstall", "setLaunchType", "generateAppForLink"]
              }
            });
    },
    2057: (e, t, r) => {
      const s = r(4960),
        o = r(4569),
        n = r(5762);
      e.exports = () => {
        if (o.networking && o.networking.config)
          return n
            ? o.networking.config
            : s({}, o.networking.config, {
                objects: ["onCaptivePortalDetected"],
                promises: { 1: ["setNetworkFilter"], 2: ["finishAuthentication"] }
              });
      };
    },
    2952: (e, t, r) => {
      const s = r(4960),
        o = r(4569),
        n = r(5762);
      e.exports = () =>
        !o.notifications || n
          ? o.notifications
          : s({}, o.notifications, {
              objects: ["onClosed", "onClicked", "onButtonClicked", "onPermissionLevelChanged", "onShowSettings"],
              promises: { 0: ["getAll", "getPermissionLevel"], 1: ["clear"], "1-2": ["create"], 2: ["update"] }
            });
    },
    8624: (e, t, r) => {
      const s = r(4569);
      e.exports = () => s.omnibox;
    },
    6394: (e, t, r) => {
      const s = r(4960),
        o = r(8975),
        n = r(7745),
        i = r(4569),
        a = r(5762),
        c = r(9191);
      e.exports = () => {
        if (!i.pageAction) return;
        let e = s({}, i.pageAction, { objects: ["onClicked"], methods: ["hide", "show", "setTitle", "setPopup"] });
        return (
          a ? o(e, i.pageAction, ["setIcon"]) : n(e, i.pageAction, { 1: ["setIcon"] }),
          c(
            ["getTitle", "getPopup"],
            (e, t) => {
              i.pageAction[t] &&
                (e[t] = (e) => (
                  "number" == typeof e && (e = { tabId: e }),
                  a
                    ? i.pageAction[t](e)
                    : new Promise((r) => {
                        i.pageAction[t](e, r);
                      })
                ));
            },
            e
          )
        );
      };
    },
    2052: (e, t, r) => {
      const s = r(7745),
        o = r(4569),
        n = r(5762);
      e.exports = () => (!o.pageCapture || n ? o.pageCapture : s({}, o.pageCapture, { 1: ["saveAsMHTML"] }));
    },
    3485: (e, t, r) => {
      const s = r(4960),
        o = r(4569),
        n = r(5762);
      e.exports = (e) => {
        if (!o.permissions || n) return o.permissions;
        let t = s({}, o.permissions, { objects: ["onAdded", "onRemoved"], promises: { 0: ["getAll"], 1: ["contains", "remove"] } });
        return (
          (t.request = (t) => {
            let r = t.permissions || null;
            return new Promise((s, n) => {
              o.permissions.request(t, (t) => {
                o.runtime.lastError
                  ? n(o.runtime.lastError)
                  : (t &&
                      r.forEach((t) => {
                        e.resetAPI(t);
                      }),
                    s(t));
              });
            });
          }),
          t
        );
      };
    },
    1411: (e, t, r) => {
      const s = r(4960),
        o = r(4569),
        n = r(5762);
      e.exports = () =>
        !o.platformKeys || n
          ? o.platformKeys
          : s({}, o.platformKeys, {
              methods: ["subtleCrypto"],
              promises: { 1: ["selectClientCertificates", "verifyTLSServerCertificate"], 2: ["getKeyPair"] }
            });
    },
    9815: (e, t, r) => {
      const s = r(8975),
        o = r(4569),
        n = r(5762);
      e.exports = () => (!o.power || n ? o.power : s({}, o.power, ["releaseKeepAwake", "requestKeepAwake"]));
    },
    7964: (e, t, r) => {
      const s = r(8202),
        o = r(4569),
        n = r(5762);
      e.exports = () =>
        !o.printerProvider || n
          ? o.printerProvider
          : s({}, o.printerProvider, [
              "onGetCapabilityRequested",
              "onGetPrintersRequested",
              "onGetUsbPrinterInfoRequested",
              "onPrintRequested"
            ]);
    },
    99: (e, t, r) => {
      const s = r(7528),
        o = r(123),
        n = r(4569),
        i = r(9191);
      e.exports = () => {
        let e = {};
        if (!n.privacy) return n.privacy;
        if (
          (i(
            ["IPHandlingPolicy", "services", "websites"],
            (e, t) => {
              e[t] = n.privacy[t];
            },
            e
          ),
          n.privacy.network)
        ) {
          let t = s({}, n.privacy.network, ["networkPredictionEnabled", "peerConnectionEnabled"]);
          n.privacy.network.webRTCIPHandlingPolicy
            ? (t.webRTCIPHandlingPolicy = o(n.privacy.network.webRTCIPHandlingPolicy))
            : (n.privacy.network.webRTCNonProxiedUdpEnabled || n.privacy.network.webRTCMultipleRoutesEnabled) &&
              s(t, n.privacy.network, ["webRTCNonProxiedUdpEnabled", "webRTCMultipleRoutesEnabled"]),
            (e.network = t);
        }
        if (n.privacy.websites) {
          let t = s({}, n.privacy.websites, [
            "hyperlinkAuditingEnabled",
            "thirdPartyCookiesAllowed",
            "referrersEnabled",
            "protectedContentEnabled"
          ]);
          e.websites = t;
        }
        if (n.privacy.services) {
          let t = s({}, n.privacy.services, [
            "alternateErrorPagesEnabled",
            "autofillEnabled",
            "hotwordSearchEnabled",
            "passwordSavingEnabled",
            "safeBrowsingEnabled",
            "safeBrowsingExtendedReportingEnabled",
            "searchSuggestEnabled",
            "spellingServiceEnabled",
            "translationServiceEnabled"
          ]);
          e.services = t;
        }
        return e;
      };
    },
    1284: (e, t, r) => {
      const s = r(4960),
        o = r(5762),
        n = r(4569);
      e.exports = () =>
        "object" != typeof n.proxy
          ? n.proxy
          : s(
              { onError: n.proxy.onError || n.proxy.onProxyError },
              n.proxy,
              o
                ? { methods: ["register", "registerProxyScript", "unregister"], objects: ["onProxyError", "onRequest", "settings"] }
                : { objects: ["onProxyError"], browserSettings: ["settings"] }
            );
    },
    1679: (e, t, r) => {
      const s = r(4960),
        o = r(4569),
        n = r(5762);
      e.exports = () => {
        if (!o.runtime || n) return o.runtime;
        let e = {
          get lastError() {
            return o.runtime.lastError;
          }
        };
        s(e, o.runtime, {
          objects: [
            "id",
            "onStartup",
            "onInstalled",
            "onSuspend",
            "onSuspendCanceled",
            "onUpdateAvailable",
            "onConnect",
            "onConnectExternal",
            "onMessageExternal"
          ],
          methods: ["getManifest", "getURL", "reload", "restart", "connect", "connectNative"],
          promises: {
            0: ["openOptionsPage", "requestUpdateCheck", "getPlatformInfo", "getPackageDirectoryEntry"],
            1: ["setUninstallURL", "restartAfterDelay"],
            2: ["sendNativeMessage"],
            "1-3": ["sendMessage"]
          }
        }),
          (o.runtime.onRestartRequired || o.runtime.onBrowserUpdateAvailable) &&
            (e.onRestartRequired = o.runtime.onRestartRequired || o.runtime.onBrowserUpdateAvailable),
          (e.onMessage = {});
        {
          let t = [];
          (e.onMessage.addListener = (e) => {
            let r = (t, r, s) => {
              let o = e(t, r, s);
              return (
                o instanceof Promise &&
                  o.then((e) => {
                    s(e);
                  }),
                !0
              );
            };
            o.runtime.onMessage.addListener(r), t.push({ original: e, modified: r });
          }),
            (e.onMessage.hasListener = (e) => Boolean(t.find(({ original: t }) => t === e))),
            (e.onMessage.removeListener = (e) => {
              let r = t.filter(({ original: t }) => t === e);
              r.length &&
                ((t = t.filter(({ original: t }) => t !== e)),
                r.forEach(({ modified: e }) => {
                  o.runtime.onMessage.removeListener(e);
                }));
            });
        }
        return (
          (e.getBackgroundPage = () => {
            let e,
              t = new Promise((t) => {
                e = o.runtime.getBackgroundPage((e) => {
                  t(e);
                });
              });
            return e || t;
          }),
          e
        );
      };
    },
    8997: (e, t, r) => {
      const s = r(4960),
        o = r(4569),
        n = r(5762);
      e.exports = () => {
        if (!o.sessions || n) return o.sessions;
        return s(
          {
            get MAX_SESSION_RESULTS() {
              return o.sessions.MAX_SESSION_RESULTS;
            }
          },
          o.sessions,
          { objects: ["onChanged"], promises: { "0-1": ["getDevices", "getRecentlyClosed", "restore"] } }
        );
      };
    },
    448: (e, t, r) => {
      const s = r(8975),
        o = r(4569),
        n = r(9191);
      e.exports = () => {
        if (!o.sidebarAction) return;
        let e = s({}, o.sidebarAction, ["setPanel", "setTitle", "setIcon"]);
        return n(
          ["getPanel", "getTitle"],
          (e, t) => {
            o.sidebarAction[t] && (e[t] = (e = {}) => ("number" == typeof e && (e = { tabId: e }), o.sidebarAction[t](e)));
          },
          e
        );
      };
    },
    7091: (e, t, r) => {
      const s = r(8202),
        o = r(3430),
        n = r(4569),
        i = r(5762),
        a = r(9191);
      e.exports = () => {
        if (!n.storage || i) return n.storage;
        let e = s({}, n.storage, ["onChanged"]);
        return a(
          ["sync", "local", "managed"],
          (e, t) => {
            n.storage[t] && (e[t] = o({}, n.storage[t], { 0: ["clear"], 1: ["remove", "set", "get", "getBytesInUse"] }));
          },
          e
        );
      };
    },
    8822: (e, t, r) => {
      const s = r(7745),
        o = r(4569),
        n = r(5762);
      e.exports = () => (!o.system.cpu || n ? o.system.cpu : s({}, o.system.cpu, { 0: ["getInfo"] }));
    },
    304: (e, t, r) => {
      const s = r(4569),
        o = r(8822),
        n = r(594),
        i = r(9624);
      e.exports = () => {
        if (s.system) return { cpu: o(), memory: n(), storage: i() };
      };
    },
    594: (e, t, r) => {
      const s = r(7745),
        o = r(4569),
        n = r(5762);
      e.exports = () => (!o.system.memory || n ? o.system.memory : s({}, o.system.memory, { 0: ["getInfo"] }));
    },
    9624: (e, t, r) => {
      const s = r(4960),
        o = r(4569),
        n = r(5762);
      e.exports = () =>
        !o.system.storage || n
          ? o.system.storage
          : s({}, o.system.storage, {
              objects: ["onAttached", "onDetached"],
              promises: { 0: ["getInfo"], 1: ["ejectDevice", "getAvailableCapacity"] }
            });
    },
    2345: (e, t, r) => {
      const s = r(4960),
        o = r(4569),
        n = r(5762);
      e.exports = () =>
        !o.tabCapture || n
          ? o.tabCapture
          : s({}, o.tabCapture, {
              objects: ["onStatusChanged"],
              promises: { 0: ["getCapturedTabs"], 1: ["capture"], 2: ["captureOffscreenTab"] }
            });
    },
    2071: (e, t, r) => {
      const s = r(4960),
        o = r(3430),
        n = r(8975),
        i = r(7745),
        a = r(4569),
        c = r(5762);
      e.exports = () => {
        if (!a.tabs) return;
        let e = s({}, a.tabs, {
          objects: [
            "onCreated",
            "onUpdated",
            "onMoved",
            "onSelectionChanged",
            "onActiveChanged",
            "onActivated",
            "onHighlightChanged",
            "onHighlighted",
            "onDetached",
            "onAttached",
            "onRemoved",
            "onReplaced",
            "onZoomChange",
            "TAB_ID_NONE"
          ],
          methods: ["connect"]
        });
        if (
          (c
            ? n(e, a.tabs, [
                "getCurrent",
                "get",
                "duplicate",
                "highlight",
                "remove",
                "detectLanguage",
                "getZoom",
                "discard",
                "update",
                "move",
                "captureVisibleTab",
                "executeScript",
                "insertCSS",
                "setZoom",
                "setZoomSettings",
                "sendMessage"
              ])
            : (i(e, a.tabs, {
                0: ["getCurrent"],
                1: ["duplicate", "highlight", "remove", "detectLanguage", "getZoom", "discard"],
                2: ["update", "move", "captureVisibleTab", "executeScript", "insertCSS", "setZoom", "setZoomSettings"],
                "2-3": ["sendMessage"]
              }),
              o(e, a.tabs, { 1: ["get"] })),
          a.tabs.create &&
            (e.create = (e) => (
              "string" == typeof e && (e = { url: e }),
              c
                ? a.tabs.create(e)
                : new Promise((t) => {
                    a.tabs.create(e, t);
                  })
            )),
          a.tabs.query &&
            (e.query = (e = {}) =>
              c
                ? a.tabs.query(e)
                : new Promise((t) => {
                    a.tabs.query(e, t);
                  })),
          a.tabs.reload)
        ) {
          let t = c ? a.tabs.reload.bind(a.tabs) : o({}, a.tabs, { "0-2": ["reload"] }).reload;
          e.reload = (...e) => {
            let r, s;
            if (2 === e.length) [r, s] = e;
            else if (1 === e.length) {
              let [t] = e;
              "boolean" == typeof t ? (s = t) : "number" == typeof t || Array.isArray(t) ? (r = t) : t && "object" == typeof t && (s = t);
            }
            return (
              void 0 === r || Array.isArray(r) || (r = [r]),
              "boolean" == typeof s && (s = { bypassCache: s }),
              r
                ? Promise.all(
                    r.map((e) => {
                      let r = [e];
                      return s && r.push(s), t.apply({}, r);
                    })
                  )
                : ((e = []), s && e.push(s), t.apply({}, e))
            );
          };
        }
        return e;
      };
    },
    7274: (e, t, r) => {
      const s = r(4569);
      e.exports = () => s.theme;
    },
    9154: (e, t, r) => {
      const s = r(7745),
        o = r(4569),
        n = r(5762);
      e.exports = () => (!o.topSites || n ? o.topSites : s({}, o.topSites, { 0: ["get"] }));
    },
    1898: (e, t, r) => {
      const s = r(4960),
        o = r(4569),
        n = r(5762);
      e.exports = () =>
        !o.tts || n
          ? o.tts
          : s({}, o.tts, { methods: ["pause", "resume", "stop"], promises: { 0: ["getVoices", "isSpeaking"], "1-2": ["speak"] } });
    },
    6826: (e, t, r) => {
      const s = r(8202),
        o = r(4569),
        n = r(5762);
      e.exports = () => (!o.ttsEngine || n ? o.ttsEngine : s({}, o.ttsEngine, ["onPause", "onResume", "onSpeak", "onStop"]));
    },
    1252: (e, t, r) => {
      const s = r(4960),
        o = r(4569),
        n = r(5762);
      e.exports = () =>
        !o.vpnProvider || n
          ? o.vpnProvider
          : s({}, o.vpnProvider, {
              objects: ["onConfigCreated", "onConfigRemoved", "onPacketReceived", "onPlatformMessage", "onUIEvent"],
              promises: { 1: ["createConfig", "destroyConfig", "notifyConnectionStateChanged", "sendPacket", "setParameters"] }
            });
    },
    4980: (e, t, r) => {
      const s = r(4960),
        o = r(4569),
        n = r(5762);
      e.exports = () => {
        if (!o.webNavigation || n) return o.webNavigation;
        let e = {};
        return (
          s(e, o.webNavigation, {
            objects: [
              "onBeforeNavigate",
              "onCommitted",
              "onDOMContentLoaded",
              "onCompleted",
              "onErrorOccurred",
              "onCreatedNavigationTarget",
              "onReferenceFragmentUpdated",
              "onTabReplaced",
              "onHistoryStateUpdated"
            ],
            promises: { 1: ["getFrame", "getAllFrames"] }
          }),
          e
        );
      };
    },
    1398: (e, t, r) => {
      const s = r(8975),
        o = r(4569),
        n = r(5762);
      e.exports = () => {
        if (!o.webRequest) return;
        let e = {};
        if (o.webRequest.onAuthRequired) {
          let t = [];
          e.onAuthRequired = {
            addListener: (...e) => {
              "string" == typeof e[1] ? (e[1] = { urls: [e[1]] }) : Array.isArray(e[1]) && (e[1] = { urls: e[1] }),
                3 === e.length && "string" == typeof e[2] && (e[2] = [e[2]]);
              let r = e[0],
                s = 3 === e.length && e[2].includes("asyncBlocking");
              s && n && (e[2] = e[2].map((e) => ("asyncBlocking" === e ? "blocking" : e)));
              let i = r;
              if (s && !n) {
                let t = e[0],
                  r = (e, r) => {
                    t(e).then(r);
                  };
                e[0] = i = r;
              }
              return t.push({ original: r, modified: i }), o.webRequest.onAuthRequired.addListener.apply(o.webRequest.onAuthRequired, e);
            },
            hasListener: (e) => Boolean(t.find(({ original: t }) => t === e)),
            removeListener: (e) => {
              let r = t.filter(({ original: t }) => t === e);
              (t = t.filter(({ original: t }) => t !== e)),
                r.forEach(({ modified: e }) => {
                  o.webRequest.onAuthRequired.removeListener(e);
                });
            }
          };
        }
        return (
          [
            "onBeforeRedirect",
            "onBeforeRequest",
            "onBeforeSendHeaders",
            "onCompleted",
            "onErrorOccurred",
            "onHeadersReceived",
            "onResponseStarted",
            "onSendHeaders"
          ].forEach((t) => {
            ((e, t) => {
              if (!o.webRequest[t]) return;
              let r = s({}, o.webRequest[t], ["hasListener", "removeListener"]);
              (r.addListener = (...e) => (
                "string" == typeof e[1] ? (e[1] = { urls: [e[1]] }) : Array.isArray(e[1]) && (e[1] = { urls: e[1] }),
                "string" == typeof e[2] && (e[2] = [e[2]]),
                o.webRequest[t].addListener.apply(o.webRequest[t], e)
              )),
                (e[t] = r);
            })(e, t);
          }),
          e
        );
      };
    },
    9703: (e, t, r) => {
      const s = r(8202),
        o = r(4569);
      e.exports = () => {
        if (!o.webstore) return o.webstore;
        let e = s({}, o.webstore, ["onDownloadProgress", "onInstallStageChanged"]);
        return (
          o.webstore.install &&
            (e.install = (e) =>
              new Promise((t, r) => {
                let s = [];
                e && s.push(e),
                  s.push(t),
                  s.push((e, t) => {
                    r(new Error(e));
                  }),
                  o.webstore.install.apply(o.webstore, s);
              })),
          e
        );
      };
    },
    427: (e, t, r) => {
      const s = r(4960),
        o = r(4569),
        n = r(5762);
      e.exports = () => {
        if (!o.windows || n) return o.windows;
        return s(
          {
            get WINDOW_ID_NONE() {
              return o.windows.WINDOW_ID_NONE;
            },
            get WINDOW_ID_CURRENT() {
              return o.windows.WINDOW_ID_CURRENT;
            }
          },
          o.windows,
          {
            objects: ["onCreated", "onRemoved", "onFocusChanged"],
            promises: { 1: ["remove"], 2: ["update"], "0-1": ["getCurrent", "getLastFocused", "getAll", "create"], "1-2": ["get"] }
          }
        );
      };
    },
    4960: (e, t, r) => {
      const s = r(7528),
        o = r(3430),
        n = r(8975),
        i = r(8202),
        a = r(7745);
      e.exports = (e, t, r) => (
        r.objects && i(e, t, r.objects),
        r.browserSettings && s(e, t, r.browserSettings),
        r.fullPromises && o(e, t, r.fullPromises),
        r.methods && n(e, t, r.methods),
        r.promises && a(e, t, r.promises),
        e
      );
    },
    7528: (e, t, r) => {
      const s = r(123),
        o = r(9191);
      e.exports = (e, t, r) =>
        o(
          r,
          (e, r) => {
            t[r] && (e[r] = s(t[r]));
          },
          e
        );
    },
    3430: (e, t, r) => {
      const s = r(4569),
        o = r(9191);
      e.exports = (e, t, r) => (
        Array.isArray(r) && (r = { 1: r }),
        Object.keys(r).forEach((n) => {
          let i = r[n];
          (n = /\-/.test(n) ? n.split("-").map((e) => Number(e)) : Number(n)),
            o(
              i,
              (e, r) => {
                t[r] &&
                  (e[r] = (...e) =>
                    new Promise((o, i) => {
                      let a = (() => {
                        let t = (() => {
                          if ("number" == typeof n) return n;
                          let t = n[0];
                          return e.length > t && (t = e.length), t > n[1] && (t = n[1]), t;
                        })();
                        return Array.apply(Array, Array(t)).map((t, r) => e[r]);
                      })();
                      a.push((e) => {
                        s.runtime.lastError ? i(s.runtime.lastError) : void 0 === e ? o() : o(e);
                      }),
                        t[r].apply(t, a);
                    }));
              },
              e
            );
        }),
        e
      );
    },
    8975: (e, t, r) => {
      const s = r(9191);
      e.exports = (e, t, r) =>
        s(
          r,
          (e, r) => {
            t[r] && (e[r] = t[r].bind(t));
          },
          e
        );
    },
    8202: (e, t, r) => {
      const s = r(9191);
      e.exports = (e, t, r) =>
        s(
          r,
          (e, r) => {
            t[r] && (e[r] = t[r]);
          },
          e
        );
    },
    7745: (e, t, r) => {
      const s = r(9191);
      e.exports = (e, t, r) => (
        Array.isArray(r) && (r = { 1: r }),
        Object.keys(r).forEach((o) => {
          let n = r[o];
          (o = /\-/.test(o) ? o.split("-").map((e) => Number(e)) : Number(o)),
            s(
              n,
              (e, r) => {
                t[r] &&
                  (e[r] = (...e) =>
                    new Promise((s) => {
                      let n = (() => {
                        let t = (() => {
                          if ("number" == typeof o) return o;
                          let t = o[0];
                          return e.length > t && (t = e.length), t > o[1] && (t = o[1]), t;
                        })();
                        return Array.apply(Array, Array(t)).map((t, r) => e[r]);
                      })();
                      n.push((e) => {
                        void 0 === e ? s() : s(e);
                      }),
                        t[r].apply(t, n);
                    }));
              },
              e
            );
        }),
        e
      );
    },
    7583: (e) => {
      e.exports = "undefined" == typeof browser ? "chrome" : "webkitAppearance" in CSSStyleDeclaration.prototype ? "edge" : "firefox";
    },
    123: (e, t, r) => {
      const s = r(8975),
        o = r(7745),
        n = r(5762),
        i = r(9191);
      e.exports = (e) => {
        if (!e) return;
        let t = {};
        return (
          n ? s(t, e, ["set"]) : o(t, e, { 1: ["set"] }),
          i(
            ["get", "clear"],
            (t, r) => {
              t[r] = (t = {}) =>
                n
                  ? e[r](t)
                  : new Promise((s) => {
                      e[r](t, (e) => {
                        s(void 0 === e || e);
                      });
                    });
            },
            t
          ),
          e.onChange && (t.onChange = e.onChange),
          t
        );
      };
    },
    5221: (e, t, r) => {
      const s = r(887),
        o = r(9648),
        n = r(9222),
        i = r(5899),
        a = r(5351),
        c = r(4134),
        p = r(2907),
        l = r(9524),
        m = r(5707),
        d = r(1795),
        u = r(8598),
        h = r(454),
        f = r(1455),
        g = r(472),
        v = r(6155),
        y = r(7498),
        b = r(4232),
        w = r(2173),
        S = r(7595),
        x = r(8406),
        A = r(5165),
        _ = r(153),
        C = r(5760),
        E = r(5561),
        k = r(9267),
        O = r(6913),
        P = r(496),
        j = r(4261),
        $ = r(4881),
        I = r(2298),
        T = r(3789),
        R = r(2057),
        Z = r(2952),
        D = r(8624),
        N = r(6394),
        U = r(2052),
        M = r(3485),
        L = r(1411),
        z = r(9815),
        B = r(7964),
        q = r(99),
        V = r(1284),
        F = r(1679),
        H = r(8997),
        W = r(448),
        K = r(7091),
        G = r(304),
        J = r(2345),
        Q = r(2071),
        Y = r(7274),
        X = r(9154),
        ee = r(1898),
        te = r(6826),
        re = r(1252),
        se = r(4980),
        oe = r(1398),
        ne = r(9703),
        ie = r(427);
      let ae = {
          accessibilityFeatures: s,
          alarms: o,
          bookmarks: n,
          browserAction: i,
          browserSettings: a,
          browsingData: c,
          certificateProvider: p,
          commands: l,
          contextMenus: m,
          contextualIdentities: d,
          cookies: u,
          declarativeContent: h,
          debugger: f,
          desktopCapture: g,
          devtools: v,
          documentScan: y,
          downloads: b,
          enterprise: w,
          extension: S,
          fileBrowserHandler: x,
          fileSystemProvider: A,
          find: _,
          fontSettings: C,
          gcm: E,
          history: k,
          identity: O,
          idle: P,
          instanceID: $,
          i18n: I,
          management: T,
          notifications: Z,
          omnibox: D,
          pageAction: N,
          pageCapture: U,
          permissions: M,
          platformKeys: L,
          power: z,
          printerProvider: B,
          privacy: q,
          proxy: V,
          runtime: F,
          sessions: H,
          sidebarAction: W,
          storage: K,
          system: G,
          tabCapture: J,
          tabs: Q,
          theme: Y,
          topSites: X,
          tts: ee,
          ttsEngine: te,
          vpnProvider: re,
          webNavigation: se,
          webRequest: oe,
          webstore: ne,
          windows: ie
        },
        ce = (() => {
          let e = {};
          return (
            Object.assign(e, {
              accessibilityFeatures: s(),
              alarms: o(),
              bookmarks: n(),
              browserAction: i(),
              browserSettings: a(),
              browsingData: c(),
              certificateProvider: p(),
              commands: l(),
              contextMenus: m(),
              contextualIdentities: d(),
              cookies: u(),
              declarativeContent: h(),
              debugger: f(),
              desktopCapture: g(),
              devtools: v(),
              documentScan: y(),
              downloads: b(),
              enterprise: w(),
              extension: S(),
              fileBrowserHandler: x(),
              fileSystemProvider: A(),
              find: _(),
              fontSettings: C(),
              gcm: E(),
              history: k(),
              identity: O(),
              idle: P(),
              input: (() => {
                let e = j();
                if (e) return { ime: e };
              })(),
              instanceID: $(),
              i18n: I(),
              management: T(),
              networking: (() => {
                let e = R();
                if (e) return { config: e };
              })(),
              notifications: Z(),
              omnibox: D(),
              pageAction: N(),
              pageCapture: U(),
              permissions: M(e),
              platformKeys: L(),
              power: z(),
              printerProvider: B(),
              privacy: q(),
              proxy: V(),
              runtime: F(),
              sessions: H(),
              sidebarAction: W(),
              storage: K(),
              system: G(),
              tabCapture: J(),
              tabs: Q(),
              theme: Y(),
              topSites: X(),
              tts: ee(),
              ttsEngine: te(),
              vpnProvider: re(),
              webNavigation: se(),
              webRequest: oe(),
              webstore: ne(),
              windows: ie()
            }),
            Object.keys(e).forEach((t) => {
              e[t] || delete e[t];
            }),
            e
          );
        })();
      (ce.resetAPI = (e) => {
        if (!ae[e]) return;
        let t = ae[e]();
        ce[e] = t;
      }),
        (e.exports = ce);
    },
    4569: (e, t, r) => {
      const s = r(7583);
      e.exports = "chrome" === s && "undefined" == typeof chrome ? {} : "chrome" === s ? chrome : browser;
    },
    5762: (e, t, r) => {
      const s = r(7583);
      e.exports = "firefox" === s;
    },
    9191: (e) => {
      e.exports = (e, t, r) =>
        Array.isArray(e)
          ? e.reduce((e, r, s) => (t(e, r, s), e), r)
          : (Object.keys(e).forEach((s) => {
              let o = e[s];
              t(r, o, s);
            }),
            r);
    },
    8098: (e, t, r) => {
      "use strict";
      r.d(t, { ZP: () => b });
      const s = 2147483647,
        o = 36,
        n = /^xn--/,
        i = /[^\0-\x7F]/,
        a = /[\x2E\u3002\uFF0E\uFF61]/g,
        c = {
          overflow: "Overflow: input needs wider integers to process",
          "not-basic": "Illegal input >= 0x80 (not a basic code point)",
          "invalid-input": "Invalid input"
        },
        p = Math.floor,
        l = String.fromCharCode;
      function m(e) {
        throw new RangeError(c[e]);
      }
      function d(e, t) {
        const r = e.split("@");
        let s = "";
        r.length > 1 && ((s = r[0] + "@"), (e = r[1]));
        const o = (function (e, t) {
          const r = [];
          let s = e.length;
          for (; s--; ) r[s] = t(e[s]);
          return r;
        })((e = e.replace(a, ".")).split("."), t).join(".");
        return s + o;
      }
      function u(e) {
        const t = [];
        let r = 0;
        const s = e.length;
        for (; r < s; ) {
          const o = e.charCodeAt(r++);
          if (o >= 55296 && o <= 56319 && r < s) {
            const s = e.charCodeAt(r++);
            56320 == (64512 & s) ? t.push(((1023 & o) << 10) + (1023 & s) + 65536) : (t.push(o), r--);
          } else t.push(o);
        }
        return t;
      }
      const h = function (e, t) {
          return e + 22 + 75 * (e < 26) - ((0 != t) << 5);
        },
        f = function (e, t, r) {
          let s = 0;
          for (e = r ? p(e / 700) : e >> 1, e += p(e / t); e > 455; s += o) e = p(e / 35);
          return p(s + (36 * e) / (e + 38));
        },
        g = function (e) {
          const t = [],
            r = e.length;
          let n = 0,
            i = 128,
            a = 72,
            c = e.lastIndexOf("-");
          c < 0 && (c = 0);
          for (let r = 0; r < c; ++r) e.charCodeAt(r) >= 128 && m("not-basic"), t.push(e.charCodeAt(r));
          for (let d = c > 0 ? c + 1 : 0; d < r; ) {
            const c = n;
            for (let t = 1, i = o; ; i += o) {
              d >= r && m("invalid-input");
              const c =
                (l = e.charCodeAt(d++)) >= 48 && l < 58 ? l - 48 + 26 : l >= 65 && l < 91 ? l - 65 : l >= 97 && l < 123 ? l - 97 : o;
              c >= o && m("invalid-input"), c > p((s - n) / t) && m("overflow"), (n += c * t);
              const u = i <= a ? 1 : i >= a + 26 ? 26 : i - a;
              if (c < u) break;
              const h = o - u;
              t > p(s / h) && m("overflow"), (t *= h);
            }
            const u = t.length + 1;
            (a = f(n - c, u, 0 == c)), p(n / u) > s - i && m("overflow"), (i += p(n / u)), (n %= u), t.splice(n++, 0, i);
          }
          var l;
          return String.fromCodePoint(...t);
        },
        v = function (e) {
          const t = [],
            r = (e = u(e)).length;
          let n = 128,
            i = 0,
            a = 72;
          for (const r of e) r < 128 && t.push(l(r));
          const c = t.length;
          let d = c;
          for (c && t.push("-"); d < r; ) {
            let r = s;
            for (const t of e) t >= n && t < r && (r = t);
            const u = d + 1;
            r - n > p((s - i) / u) && m("overflow"), (i += (r - n) * u), (n = r);
            for (const r of e)
              if ((r < n && ++i > s && m("overflow"), r === n)) {
                let e = i;
                for (let r = o; ; r += o) {
                  const s = r <= a ? 1 : r >= a + 26 ? 26 : r - a;
                  if (e < s) break;
                  const n = e - s,
                    i = o - s;
                  t.push(l(h(s + (n % i), 0))), (e = p(n / i));
                }
                t.push(l(h(e, 0))), (a = f(i, u, d === c)), (i = 0), ++d;
              }
            ++i, ++n;
          }
          return t.join("");
        },
        y = {
          version: "2.1.0",
          ucs2: { decode: u, encode: (e) => String.fromCodePoint(...e) },
          decode: g,
          encode: v,
          toASCII: function (e) {
            return d(e, function (e) {
              return i.test(e) ? "xn--" + v(e) : e;
            });
          },
          toUnicode: function (e) {
            return d(e, function (e) {
              return n.test(e) ? g(e.slice(4).toLowerCase()) : e;
            });
          }
        },
        b = 42 == r.j ? y : null;
    },
    7679: (e, t, r) => {
      "use strict";
      r.d(t, { $: () => s });
      /**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
      const s = (e) => (t) =>
        class extends t {
          connectedCallback() {
            super.connectedCallback && super.connectedCallback(),
              (this._storeUnsubscribe = e.subscribe(() => this.stateChanged(e.getState()))),
              this.stateChanged(e.getState());
          }
          disconnectedCallback() {
            this._storeUnsubscribe(), super.disconnectedCallback && super.disconnectedCallback();
          }
          stateChanged(e) {}
        };
    },
    4363: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => v });
      var s = r(5221),
        o = r.n(s),
        n = r(307),
        i = r(6492),
        a = r.n(i),
        c = r(3116),
        p = r(4123);
      const l = (0, r(7128).Z)(),
        m = () => l,
        d = async (e, t) => {
          if (!a().ga.fullTrackingId) return;
          const { type: r, action: s, category: o, label: n, noninteraction: i, value: c } = t,
            l = e + "." + m(),
            d = (() => {
              const e = new Date();
              return `${e.getUTCFullYear()}-${String(e.getUTCMonth() + 1).padStart(2, "0")}-${String(e.getUTCDate()).padStart(
                2,
                "0"
              )}T${String(e.getUTCHours()).padStart(2, "0")}:${String(e.getUTCMinutes()).padStart(2, "0")}:${String(
                e.getUTCSeconds()
              ).padStart(2, "0")}`;
            })(),
            u = (() => {
              const t = { v: "1", tid: a().ga.fullTrackingId, cid: e, t: r };
              "event" === r && (s && (t.ea = s), o && (t.ec = o), n && (t.el = n), c && (t.ev = c), (t.cd1 = l), (t.cd2 = e), (t.cd3 = d)),
                i && (t.ni = "1");
              const m = Object.entries(t)
                .map(([e, t]) => e + "=" + encodeURIComponent(t))
                .join("&");
              return (0, p.Z)("https://www.google-analytics.com/collect", {
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                method: "POST",
                mode: "cors",
                body: m
              });
            })(),
            h = (async () => {
              if (!a().ga4.full) return;
              const t = a().ga4.full.apiSecret,
                r = `https://www.google-analytics.com/mp/collect?measurement_id=${a().ga4.full.measurementId}&api_secret=${t}`,
                m = {
                  client_id: e,
                  events: [{ name: s, params: { category: o, label: n, noninteraction: i, sessionId: l, timestamp: d, value: c } }]
                };
              return (0, p.Z)(r, { method: "POST", mode: "cors", body: JSON.stringify(m) });
            })();
          return Promise.all([u.catch(() => {}), h.catch(() => {})]);
        };
      var u = r(8897);
      const h = a().ga,
        f = location.href.includes("background"),
        g = h.enabled && (!h.extension_id || (Array.isArray(h.extension_id) && h.extension_id.includes(o().runtime.id))),
        v = Object.assign(
          async ({ category: e, action: t, label: r, value: s, noninteraction: o }) => {
            if (!f) return (0, u.Z)({ type: "ga.full", data: { category: e, action: t, label: r, value: s, noninteraction: o } });
            const i = g ? "TRACK" : "DISABLED";
            if (((0, c.Z)("GA full", `[${i}]`, { category: e, action: t, label: r, value: s, noninteraction: o }), "TRACK" !== i)) return;
            const a = await n.Z;
            return d(a, { type: "event", action: t, category: e, label: r, noninteraction: o, value: s });
          },
          { userIdPromise: n.Z }
        );
    },
    8986: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => o });
      var s = r(307);
      const o = Object.assign(async (e) => {}, { userIdPromise: s.Z });
    },
    307: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => a });
      var s = r(7128),
        o = r(6492),
        n = r.n(o),
        i = r(2338);
      const a = (async () => {
        let e = await i.Z.get("gaRareUserId");
        if (e) return e;
        let t = !1;
        try {
          await new Promise(async (r, s) => {
            setTimeout(() => {
              (t = !0), s(new Error("Initial GA request timeout reached"));
            }, 1e4);
            const o = await fetch(n().baseUrl + "/api/v1/attributes/extintid", {
                credentials: "include",
                headers: { "Content-Type": "application/json" },
                method: "GET"
              }),
              a = await o.json();
            "string" == typeof (null == a ? void 0 : a.extintid) && (e = a.extintid),
              "boolean" == typeof (null == a ? void 0 : a.created) && (await i.Z.set("gaRareUserIsNew", a.created));
          });
        } catch (e) {}
        return e
          ? (i.Z.set("gaRareUserId", e), e)
          : ((e = (0, s.Z)()),
            i.Z.set("gaRareUserId", e),
            t &&
              fetch(n().baseUrl + "/api/v1/attributes", {
                body: JSON.stringify({ data: { extintid: e } }),
                credentials: "include",
                headers: { "Content-Type": "application/json" },
                method: "POST"
              }),
            e);
      })();
    },
    9699: (e, t, r) => {
      e.exports = "undefined" != typeof browser ? r(8986) : r(4363);
    },
    3357: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => a });
      var s = r(9699),
        o = r.n(s),
        n = r(9466),
        i = r.n(n);
      const a = { full: o(), partial: i() };
    },
    610: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => S });
      var s = r(5221),
        o = r.n(s),
        n = r(7128),
        i = r(6492),
        a = r.n(i),
        c = r(2338);
      var p = r(7350);
      var l = r(3116);
      const m = location.href.includes("background");
      const d = new (class {
        constructor() {
          (this._ready = (async () => {
            let e = await c.Z.get("counters");
            this.state =
              e ||
              (await (async () => {
                let e = await c.Z.get("statistics");
                return e
                  ? {
                      "country changes": e.countryChanges || 0,
                      "icon clicks": e.iconClicks || 0,
                      "popup: location page shows": e.locationPageShows || 0,
                      "popup: proxy on": e.proxyOn || 0,
                      "proxied pages": e.proxiedPages || 0,
                      "proxy errors": e.proxyErrors || 0,
                      "user login": e.userLoginCount || 0
                    }
                  : {};
              })());
          })()),
            (this._listeners = []),
            m &&
              (async (e) => {
                p.Z.onChange(
                  ({ userPac: { mode: e, country: t } }) => ({ enabled: "proxy" === e, country: t }),
                  ({ enabled: t, country: r }, { country: s }) => {
                    t && r !== s && e.increase("country changes");
                  }
                ),
                  p.Z.onChange(
                    ({ userPac: e }) => "proxy" === e.mode,
                    (t) => {
                      t && e.increase("popup: proxy on");
                    }
                  ),
                  p.Z.onChange(
                    ({ user: { email: e } }) => Boolean(e),
                    (t) => {
                      t && e.increase("user login");
                    }
                  );
              })(this);
        }
        addListener(e, t) {
          this._listeners.push({ listener: t, property: e });
        }
        removeListener(e) {
          this._listeners =
            "string" != typeof e
              ? this._listeners.filter(({ listener: t }) => t !== e)
              : this._listeners.filter(({ property: t }) => t !== e);
        }
        async get(e) {
          return await this._ready, this.state[e] || 0;
        }
        async increase(e) {
          return (
            await this._ready,
            this.state[e] || (this.state[e] = 0),
            this.state[e]++,
            "development" === a().type && (0, l.Z)(`Counters. Increase ${e}. New value: `, this.state[e]),
            c.Z.set("counters", this.state),
            this._listeners.forEach(({ listener: t, property: r }) => {
              r === e && t(this.state[e]);
            }),
            this.state[e]
          );
        }
      })();
      var u = r(4123);
      const h = async (e, t) => {
        if (!a().ga.tracking_id) return;
        let { type: r, action: s, category: o, label: n, noninteraction: i, value: c } = t;
        const p = (() => {
            let t = { v: "1", tid: a().ga.tracking_id, cid: e, t: r };
            "event" === r && (s && (t.ea = s), o && (t.ec = o), n && (t.el = n), c && (t.ev = c)), i && (t.ni = "1");
            const p = Object.entries(t)
              .map(([e, t]) => e + "=" + encodeURIComponent(t))
              .join("&");
            return (0, u.Z)("https://www.google-analytics.com/collect", {
              credentials: "omit",
              headers: { "Content-Type": "application/x-www-form-urlencoded" },
              method: "POST",
              mode: "cors",
              body: p
            });
          })(),
          l = (async () => {
            if (!a().ga4.partial) return;
            const t = a().ga4.partial.apiSecret,
              r = `https://www.google-analytics.com/mp/collect?measurement_id=${a().ga4.partial.measurementId}&api_secret=${t}`,
              p = { client_id: e, events: [{ name: s, params: { category: o, label: n, noninteraction: i, value: c } }] };
            return (0, u.Z)(r, { method: "POST", mode: "cors", body: JSON.stringify(p) });
          })();
        return Promise.all([p.catch(() => {}), l.catch(() => {})]);
      };
      var f = r(8897);
      const g = a().ga,
        v = location.href.includes("background"),
        y = (async () => {
          if (!(g.enabled && (!g.extension_id || (Array.isArray(g.extension_id) && g.extension_id.includes(o().runtime.id)))))
            return "DISABLED";
          const e = await c.Z.get("useGa");
          return (() => {
            if ("boolean" == typeof e) return e;
            let t = g.chance || 0.01,
              r = Math.random() < t;
            return c.Z.set("useGa", r), r;
          })()
            ? "TRACK"
            : "FILTERED";
        })(),
        b = (async () => {
          if ("TRACK" !== (await y)) return;
          let e = await c.Z.get("gaUserId");
          return e || ((e = (0, n.Z)()), c.Z.set("gaUserId", e), e);
        })();
      (async () => {
        const e = await b;
        e && v && h(e, { type: "pageview" });
      })();
      const w = Object.assign(
        async ({ category: e, action: t, label: r, value: s, noninteraction: o }) => {
          if (!v) return (0, f.Z)({ type: "ga.partial", data: { category: e, action: t, label: r, value: s, noninteraction: o } });
          const n = await y,
            i = await b;
          (0, l.Z)("GA", `[${n}]`, { category: e, action: t, label: r, value: s, noninteraction: o }),
            "TRACK" === n && i && (await h(i, { type: "event", action: t, category: e, label: r, noninteraction: o, value: s }));
        },
        { isTrackedPromise: (async () => "TRACK" === (await y))() }
      );
      ((e) => {
        d.addListener("popup: menu: smart settings click", () => {
          e({ category: "Smart Settings", action: "Menu click" });
        }),
          d.addListener("popup: smart settings: open help", () => {
            e({ category: "Smart Settings", action: "Open help" });
          }),
          d.addListener("popup: smart settings: open list", () => {
            e({ category: "Smart Settings", action: "Open edit page" });
          }),
          d.addListener("popup: smart settings: add rule", () => {
            e({ category: "Smart Settings", action: "Add rule" });
          });
      })(w);
      const S = w;
    },
    3102: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => s });
      const s = async (e) => {};
    },
    9466: (e, t, r) => {
      e.exports = "undefined" != typeof browser ? r(3102) : r(610);
    },
    5119: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => u });
      var s = r(4123),
        o = r(5221),
        n = r.n(o),
        i = r(6492),
        a = r.n(i),
        c = r(3357),
        p = r(8897),
        l = r(2338),
        m = r(7350);
      const d = location.href.includes("background"),
        u = {
          track: async (e, t = {}) => {
            if (!d) return (0, p.Z)({ type: "jitsu.track", eventName: e, data: t });
            const r = String(Date.now()),
              o = await c.Z.full.userIdPromise,
              i = await m.Z.getStateAsync(),
              { user: u } = i,
              h = (() => {
                const { activeInternalExperiments: e, ignoredExperiments: t, internalExperiments: r } = i,
                  s = [];
                for (const t of e) {
                  const e = a().internalExperiments.find(({ serverId: e }) => e === t);
                  e && s.push(e.serverId);
                }
                return Object.fromEntries(
                  Object.entries(r)
                    .filter(([e]) => !t.includes(e) && s.includes(e))
                    .map(([e, t]) => [e, String(t)])
                );
              })(),
              f = Object.entries(h)
                .map(([e, t]) => e + "_" + t)
                .join(","),
              g = await l.Z.get("installVersion"),
              v = ((await l.Z.get("statistics")) || {}).installDate,
              y = Object.assign({ cid: o, experiments: f, premium: u.premium ? "1" : "0" }, t, {
                app_version: n().runtime.getManifest().version,
                client_event_timestamp: r,
                platform: "extension"
              });
            g && Object.assign(y, { install_app_version: g }), v && Object.assign(y, { install_timestamp: String(Math.round(v / 1e3)) });
            const b = a().type.startsWith("qa") ? "qa.bmetrics.org" : "r56zpqj3cd.bmetrics.org",
              w = new URL(`https://${b}/api/st/event`);
            for (const [e, t] of Object.entries(y)) w.searchParams.append(e, t);
            return w.searchParams.append("event_name", e), (0, s.Z)(w.toString(), { method: "GET" });
          }
        };
    },
    9275: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => s });
      const s = 1e3;
    },
    3116: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => k });
      var s = r(6492),
        o = r.n(s),
        n = r(5221),
        i = r.n(n),
        a = r(9275);
      const c = () =>
        Array(6)
          .fill(0)
          .map(() => Math.random().toString(36).substr(2, 5))
          .join("");
      function p() {
        let e = this.state,
          t = a.Z - e.length;
        if (t <= 0) return;
        let r = Array(t)
          .fill(0)
          .map(() => ({ record: c(), timestamp: Date.now(), type: "log" }));
        e.push.apply(e, r), (this.state = e);
      }
      var l = r(2338);
      let m = !0;
      setTimeout(() => {
        m = !1;
      }, 0);
      const d = (e) => {
          const t = Boolean(e);
          let r = [],
            s = [];
          const o = (e) => {
              s.forEach((t) => {
                t({ name: e });
              });
            },
            n = (s, { when: n, periodInMinutes: i }) => {
              if (t) return e.create(s, { when: n, periodInMinutes: i });
              const a = { name: s, when: n, periodInMinutes: i },
                c = (() => {
                  if ("number" == typeof n) return n - Date.now();
                  if ("number" == typeof i) return 60 * i * 1e3;
                  throw new Error('Both "when" and "periodInMinutes" are not specified');
                })();
              a.timeoutId = setTimeout(() => {
                if ((o(s), !i)) return;
                const e = () => {
                  o(s), (a.timeoutId = setTimeout(e, 60 * i * 1e3));
                };
                a.timeoutId = setTimeout(e, 60 * i * 1e3);
              }, c);
              const p = r.findIndex((e) => e.name === s);
              -1 !== p && r.splice(p, 1), r.push(a);
            };
          return {
            clear: async (s) => {
              if (t) return e.clear(s);
              for (const { name: e, timeoutId: t } of r) e === s && t && clearTimeout(t);
              const o = r.slice();
              return (r = r.filter((e) => e.name !== s)), o.length !== r.length;
            },
            createOneTime: (e, { delay: t }) => {
              n(e, { when: Date.now() + t });
            },
            createCycle: (e, { delay: t, periodInMinutes: r }) => {
              n(e, "number" == typeof t ? { when: Date.now() + t, periodInMinutes: r } : { periodInMinutes: r });
            },
            hasAlarm: async (s) => {
              if (t) {
                const t = await e.get(s);
                return Boolean(t);
              }
              return r.some((e) => e.name === s);
            },
            on: (r) => {
              if (!m) throw new Error("Alarms.on called after first event loop task");
              t ? e.onAlarm.addListener(r) : s.push(r);
            },
            off: (r) => {
              t ? e.onAlarm.removeListener(r) : (s = s.filter((e) => e !== r));
            },
            hasListener: (r) => (t ? e.onAlarm.hasListener(r) : s.includes(r))
          };
        },
        u = i().runtime.getManifest().permissions.includes("alarms") ? d(i().alarms) : d(),
        h = chrome.runtime.getManifest().manifest_version,
        f = (e) => {
          2 === h ? e() : (i().runtime.onInstalled.addListener(e), i().runtime.onStartup.addListener(e));
        };
      let g = !1;
      setTimeout(() => {
        g = !0;
      }, 0);
      const v = new Set(),
        y = (e, t) => {
          if (g) throw new Error("time.onStart called after first event loop");
          const { name: r, repeatInMinutes: s } = e;
          if (v.has(r)) throw new Error(`time.onStart: duplicate entry with name "${r}"`);
          v.add(r);
          let { startDelayInMs: o } = e;
          if ("number" != typeof o && !s) throw new Error("Both startDelayInMs and repeatInMinutes are not specified");
          if (("number" != typeof o && (o = 60 * s * 1e3), 0 === o)) {
            if ((f(t), !s)) return;
            o = 60 * s * 1e3;
          }
          s ? u.createCycle(r, { delay: o, periodInMinutes: s }) : u.createOneTime(r, { delay: o }),
            u.on((e) => {
              e.name === r && t();
            });
        },
        b = location.href.includes("background"),
        w = (e) => new TextEncoder().encode(JSON.stringify(e)).length;
      const S = new (class {
        constructor() {
          if (
            ((this.state = []),
            (this.delayedState = []),
            (this.initiated = !1),
            "production" !== o().type && (this.fillWithCrap = p.bind(this)),
            (this.ready = (async () => {
              const e = (await l.Z.get("log")) || [];
              return Array.prototype.push.apply(e, this.delayedState), (this.state = e), (this.initiated = !0), e;
            })()),
            b)
          ) {
            y({ name: "log db", startDelayInMs: 3e4, repeatInMinutes: 1 }, async () => {
              await this.ready;
              const e = w(this.state);
              if (e > 4e6) {
                const t = e - 4e6;
                let r = 0,
                  s = 0;
                for (const e of this.state) if (((r += w(e)), s++, r > t)) break;
                for (this.state.splice(0, s); w(this.state) > 4e6; ) this.state.splice(0, 10);
              }
              if ("undefined" == typeof browser) {
                (await i().storage.local.getBytesInUse("log")) > 4e6 && this.state.splice(0, 10);
              }
              try {
                await l.Z.set("log", this.state);
              } catch (e) {
                this.state.splice(0, 10);
              }
            });
          }
        }
        async add({ timestamp: e, type: t = "log", record: r }) {
          const s = { timestamp: e, type: t, record: r };
          this.initiated
            ? (this.state.push(s), this.state.length > a.Z && this.state.splice(0, this.state.length - a.Z))
            : this.delayedState.push(s);
        }
        async clear() {
          return l.Z.set("log", []);
        }
        async getAll() {
          return this.initiated ? this.state : this.ready;
        }
      })();
      var x = r(8897);
      const { _: A } = self,
        _ = location.href.includes("background"),
        C = async ({ type: e, data: t }) => {
          const r = ((e) => e.map((e) => (A.isObject(e) ? JSON.stringify(e) : "string" == typeof e ? e : String(e))).join(", "))(t),
            s = new Date(),
            n = (() => {
              let e = new Date(),
                [t, r, s, o] = [e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds()].map((e) =>
                  String(e).padStart(2, "0")
                );
              return `[${t}, ${r}:${s}:${o}]`;
            })();
          t.unshift(n),
            "production" === o().type ? console[e](n + ", " + r) : console[e].apply(console, t),
            await new Promise((e) => {
              setTimeout(e, 0);
            }),
            S.add({ timestamp: s.getTime(), type: e, record: r });
        },
        E = ({ type: e, data: t }) => {
          if (_) return void C({ type: e, data: t });
          switch (e) {
            case "log":
              console.log.apply(console, t);
              break;
            case "warn":
              console.warn.apply(console, t);
              break;
            case "error":
              console.error.apply(console, t);
          }
          const r = (() => {
            switch (e) {
              case "log":
                return "log";
              case "warn":
                return "log.warn";
              case "error":
                return "log.error";
            }
          })();
          (0, x.Z)({ type: r, data: t });
        };
      const k = Object.assign(
        (...e) => {
          E({ type: "log", data: e });
        },
        {
          warn: (...e) => {
            E({ type: "warn", data: e });
          },
          error: (...e) => {
            E({ type: "error", data: e });
          },
          group: (e, t) => {
            console.group(e),
              t.forEach((e) => {
                E({ type: "log", data: e });
              }),
              console.groupEnd();
          }
        }
      );
    },
    6194: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => i });
      var s = r(6492);
      const o = r.n(s)().baseUrl,
        n = "?source=extension&utm_source=chromium+extension&utm_medium=link&utm_campaign=default_campaign",
        i = {
          base: o,
          contactUs: o + "/contact_us" + n,
          newUser: o + "/users/new" + n,
          premium: o + "/orders/new?plan_id=biennial&ref=extension",
          resetPassword: `${o}/login${n}#forgot_password`
        };
    },
    2338: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => p });
      var s = r(5221),
        o = r.n(s);
      const { _: n } = self;
      let i = [];
      const a = new (class {
        constructor() {
          (this._data = {}),
            (this.ready = o()
              .storage.local.get()
              .then((e) => {
                this._data = e;
              })),
            (this.get = this.get.bind(this)),
            (this.set = this.set.bind(this)),
            (this.remove = this.remove.bind(this));
        }
        addListener(e) {
          i.push(e);
        }
        removeListener(e) {
          i = i.filter((t) => t !== e);
        }
        async get(e) {
          let t = await o().storage.local.get(e);
          return "string" == typeof e ? t[e] : t;
        }
        getSync(e) {
          return n.cloneDeep(this._data[e]);
        }
        set(...e) {
          if (2 === e.length) {
            let [t, r] = e;
            return (r = n.cloneDeep(r)), (this._data[t] = r), o().storage.local.set({ [t]: r });
          }
          const t = e[0];
          return o().storage.local.set(t);
        }
        setSync(e, t) {
          (t = n.cloneDeep(t)), (this._data[e] = t), o().storage.local.set({ [e]: t });
        }
        async remove(...e) {
          const t = e.flat();
          return (
            t.forEach((e) => {
              delete this._data[e];
            }),
            o().storage.local.remove(t)
          );
        }
        removeSync(...e) {
          let t = e.flat();
          t.forEach((e) => {
            delete this._data[e];
          }),
            o().storage.local.remove(t);
        }
        onChange(e) {
          const t = e.ignore,
            r = (r, s, o) => {
              const i = Object.keys(r);
              if (e.for.some((e) => i.includes(e))) {
                if (t) for (const { property: e, value: s } of t) i.includes(e) && r[e].oldValue === s && delete r[e];
                if (Object.keys(r).length)
                  if ("compile" in e) {
                    const { compile: t, do: r } = e,
                      i = t(s),
                      a = t(o);
                    if (n.isEqual(i, a)) return;
                    r(i, s);
                  } else if ("changeCompilation" in e) {
                    if (!e.changeCompilation(s, o)) return;
                    e.do(s);
                  } else e.do(s);
              }
            };
          return (
            c.push(r),
            () => {
              c = c.filter((e) => e !== r);
            }
          );
        }
      })();
      let c = [];
      o().storage.onChanged.addListener((e, t) => {
        "local" === t &&
          (i.forEach((t) => {
            t(e);
          }),
          (async () => {
            const t = await o().storage.local.get(null),
              r = Object.fromEntries(Object.entries(e).map(([e, { oldValue: t }]) => [e, t])),
              s = Object.assign({}, t, r);
            if (!n.isEqual(t, s)) for (const r of c) r(Object.assign({}, e), t, s);
          })());
      });
      const p = new Proxy(a, {
        get(e, t) {
          if ("string" == typeof t)
            switch (t) {
              case "addListener":
                return a.addListener;
              case "get":
                return a.get;
              case "onChange":
                return a.onChange;
              case "remove":
                return a.remove;
              case "removeListener":
                return a.removeListener;
              case "ready":
                return a.ready;
              case "set":
                return a.set;
              default:
                return a.getSync(t);
            }
          if ("number" == typeof t) return a.getSync(String(t));
          throw new Error("storage called with not string method");
        },
        set: (e, t, r) => ("string" == typeof t ? (a.setSync(t, r), !0) : "number" == typeof t && (a.setSync(String(t), r), !0)),
        deleteProperty: (e, t) => ("string" == typeof t ? (a.removeSync(t), !0) : "number" == typeof t && (a.removeSync(String(t)), !0))
      });
    },
    7350: (e, t, r) => {
      "use strict";
      function s(e) {
        return (
          "Minified Redux error #" +
          e +
          "; visit https://redux.js.org/Errors?code=" +
          e +
          " for the full message or use the non-minified dev environment for full errors. "
        );
      }
      r.d(t, { Z: () => $ });
      var o = ("function" == typeof Symbol && Symbol.observable) || "@@observable",
        n = function () {
          return Math.random().toString(36).substring(7).split("").join(".");
        },
        i = {
          INIT: "@@redux/INIT" + n(),
          REPLACE: "@@redux/REPLACE" + n(),
          PROBE_UNKNOWN_ACTION: function () {
            return "@@redux/PROBE_UNKNOWN_ACTION" + n();
          }
        };
      function a(e) {
        if ("object" != typeof e || null === e) return !1;
        for (var t = e; null !== Object.getPrototypeOf(t); ) t = Object.getPrototypeOf(t);
        return Object.getPrototypeOf(e) === t;
      }
      function c(e, t, r) {
        var n;
        if (("function" == typeof t && "function" == typeof r) || ("function" == typeof r && "function" == typeof arguments[3]))
          throw new Error(s(0));
        if (("function" == typeof t && void 0 === r && ((r = t), (t = void 0)), void 0 !== r)) {
          if ("function" != typeof r) throw new Error(s(1));
          return r(c)(e, t);
        }
        if ("function" != typeof e) throw new Error(s(2));
        var p = e,
          l = t,
          m = [],
          d = m,
          u = !1;
        function h() {
          d === m && (d = m.slice());
        }
        function f() {
          if (u) throw new Error(s(3));
          return l;
        }
        function g(e) {
          if ("function" != typeof e) throw new Error(s(4));
          if (u) throw new Error(s(5));
          var t = !0;
          return (
            h(),
            d.push(e),
            function () {
              if (t) {
                if (u) throw new Error(s(6));
                (t = !1), h();
                var r = d.indexOf(e);
                d.splice(r, 1), (m = null);
              }
            }
          );
        }
        function v(e) {
          if (!a(e)) throw new Error(s(7));
          if (void 0 === e.type) throw new Error(s(8));
          if (u) throw new Error(s(9));
          try {
            (u = !0), (l = p(l, e));
          } finally {
            u = !1;
          }
          for (var t = (m = d), r = 0; r < t.length; r++) {
            (0, t[r])();
          }
          return e;
        }
        return (
          v({ type: i.INIT }),
          ((n = {
            dispatch: v,
            subscribe: g,
            getState: f,
            replaceReducer: function (e) {
              if ("function" != typeof e) throw new Error(s(10));
              (p = e), v({ type: i.REPLACE });
            }
          })[o] = function () {
            var e,
              t = g;
            return (
              ((e = {
                subscribe: function (e) {
                  if ("object" != typeof e || null === e) throw new Error(s(11));
                  function r() {
                    e.next && e.next(f());
                  }
                  return r(), { unsubscribe: t(r) };
                }
              })[o] = function () {
                return this;
              }),
              e
            );
          }),
          n
        );
      }
      var p = r(6492),
        l = r.n(p);
      const m = "--@--.--";
      const d =
        "development" === l().type
          ? (e) => e
          : (e) => {
              let t = JSON.parse(JSON.stringify(e));
              return (
                "logined" === t.type &&
                  ((t.email = m),
                  (t.loginData.credentials.email = m),
                  (t.loginData.credentials.access_token = "exist"),
                  (t.loginData.credentials.ipsec_password = "exist")),
                t
              );
            };
      var u = r(3116),
        h = r(2338);
      const { _: f } = self,
        g = location.href.includes("background"),
        v = {
          "Active internal experiments: add": ({ noStorage: e, action: t, state: r }) => {
            const { experimentId: s } = t;
            let o = r.activeInternalExperiments,
              n = o.slice();
            return (
              n.push(s),
              e || h.Z.set("activeInternalExperiments", n),
              g && (0, u.Z)("Store: active internal experiments update. New: ", n, ". Old: ", o),
              Object.assign({}, r, { activeInternalExperiments: n })
            );
          },
          "Active internal experiments: remove": ({ noStorage: e, action: t, state: r }) => {
            const { experimentId: s } = t;
            let o = r.activeInternalExperiments,
              n = o.filter((e) => e !== s);
            return (
              e || h.Z.set("activeInternalExperiments", n),
              g && (0, u.Z)("Store: active internal experiments update. New: ", n, ". Old: ", o),
              Object.assign({}, r, { activeInternalExperiments: n })
            );
          },
          "Active internal experiments: set": ({ noStorage: e, action: t, state: r }) => {
            const s = t.data.slice(),
              o = r.activeInternalExperiments;
            return (
              e || h.Z.set("activeInternalExperiments", s),
              g && (0, u.Z)("Store: active internal experiments update. New: ", s, ". Old: ", o),
              Object.assign({}, r, { activeInternalExperiments: s })
            );
          },
          "Browsec.com available: set": ({ noStorage: e, action: t, state: r }) => {
            let { data: s } = t;
            return (
              g && (0, u.Z)("Store: browsec.com available update. New: ", s, ". Old: ", r.browsecComAvailable),
              e || h.Z.set("browsec.com available", s),
              Object.assign({}, r, { browsecComAvailable: s })
            );
          },
          "Cache removal: set": ({ noStorage: e, action: t, state: r }) => {
            let { data: s } = t;
            return (
              g && (0, u.Z)("Store: cache removal update. New: ", s, ". Old: ", r.cacheRemoval),
              e || h.Z.set("cacheRemoval", s),
              Object.assign({}, r, { cacheRemoval: s })
            );
          },
          "Days after install: set": ({ noStorage: e, action: t, state: r }) => {
            let { days: s } = t;
            return (
              g && (0, u.Z)("Store: days after install update. New: ", s, ". Old: ", r.daysAfterInstall),
              Object.assign({}, r, { daysAfterInstall: s })
            );
          },
          "Domain: set": ({ noStorage: e, action: t, state: r }) => {
            let { domain: s } = t;
            return (
              "development" === l().type && g && (0, u.Z)("Store: domain update. New: ", s, ". Old: ", r.domain),
              e || h.Z.set("domain", s),
              Object.assign({}, r, { domain: s })
            );
          },
          "Experiments: add": ({ noStorage: e, action: t, state: r }) => {
            let { experimentId: s, value: o } = t,
              n = r.experiments,
              i = Object.assign({}, n);
            return (
              (i[s] = o),
              e || h.Z.set("experiments", i),
              g && (0, u.Z)("Store: experiments update. New: ", i, ". Old: ", n),
              Object.assign({}, r, { experiments: i })
            );
          },
          "Experiments: remove": ({ noStorage: e, action: t, state: r }) => {
            let { experimentId: s } = t,
              o = r.experiments,
              n = Object.assign({}, o);
            return (
              delete n[s],
              e || h.Z.set("experiments", n),
              g && (0, u.Z)("Store: experiments update. New: ", n, ". Old: ", o),
              Object.assign({}, r, { experiments: n })
            );
          },
          "Experiments: set": ({ noStorage: e, action: t, state: r }) => {
            const s = Object.assign({}, t.data),
              o = r.experiments;
            return (
              e || h.Z.set("experiments", s),
              g && (0, u.Z)("Store: experiments update. New: ", s, ". Old: ", o),
              Object.assign({}, r, { experiments: s })
            );
          },
          "Favorites: set": ({ noStorage: e, action: t, state: r }) => {
            let s = t.data.slice();
            return (
              e || h.Z.set("favorites", s),
              g && (0, u.Z)("Store: favorites update. New: ", s, ". Old: ", r.favorites),
              Object.assign({}, r, { favorites: s })
            );
          },
          "Ignored experiments: add": ({ noStorage: e, action: t, state: r }) => {
            const { experimentId: s } = t,
              o = r.ignoredExperiments,
              n = o.slice();
            return (
              n.push(s),
              n.sort(),
              e || h.Z.set("ignoredExperiments", n),
              g && (0, u.Z)("Store: ignored experiments update. New: ", n, ". Old: ", o),
              Object.assign({}, r, { ignoredExperiments: n })
            );
          },
          "Ignored experiments: remove": ({ noStorage: e, action: t, state: r }) => {
            const { experimentId: s } = t,
              o = r.ignoredExperiments,
              n = o.filter((e) => e !== s);
            return (
              e || h.Z.set("ignoredExperiments", n),
              g && (0, u.Z)("Store: ignored experiments update. New: ", n, ". Old: ", o),
              Object.assign({}, r, { ignoredExperiments: n })
            );
          },
          "Ignored experiments: set": ({ noStorage: e, action: t, state: r }) => {
            const s = t.data.slice(),
              o = r.ignoredExperiments;
            return (
              e || h.Z.set("ignoredExperiments", s),
              g && (0, u.Z)("Store: ignored experiments update. New: ", s, ". Old: ", o),
              Object.assign({}, r, { ignoredExperiments: s })
            );
          },
          "Internal experiments: add": ({ noStorage: e, action: t, state: r }) => {
            let { experimentId: s, variant: o } = t,
              n = r.internalExperiments,
              i = Object.assign({}, n);
            return (
              (i[s] = o),
              e || h.Z.set("internal experiments", i),
              g && (0, u.Z)("Store: internal experiments update. New: ", i, ". Old: ", n),
              Object.assign({}, r, { internalExperiments: i })
            );
          },
          "Internal experiments: remove": ({ noStorage: e, action: t, state: r }) => {
            let { experimentId: s } = t,
              o = r.internalExperiments,
              n = Object.assign({}, o);
            return (
              delete n[s],
              e || h.Z.set("internal experiments", n),
              g && (0, u.Z)("Store: internal experiments update. New: ", n, ". Old: ", o),
              Object.assign({}, r, { internalExperiments: n })
            );
          },
          "Internal experiments: set": ({ noStorage: e, action: t, state: r }) => {
            const s = Object.assign({}, t.data),
              o = r.internalExperiments;
            return (
              e || h.Z.set("internal experiments", s),
              g && (0, u.Z)("Store: internal experiments update. New: ", s, ". Old: ", o),
              Object.assign({}, r, { internalExperiments: s })
            );
          },
          "Low level PAC: set": ({ noStorage: e, action: t, state: r }) => {
            const s = f.cloneDeep(t.data);
            return (
              e || h.Z.set("lowLevelPac", s),
              g && (0, u.Z)("Store: low level PAC update. New: ", s, ". Old: ", r.lowLevelPac),
              Object.assign({}, r, { lowLevelPac: s })
            );
          },
          "Low level PAC: update": ({ noStorage: e, action: t, state: r }) => {
            const s = f.cloneDeep(Object.assign({}, r.lowLevelPac, t.data));
            return (
              e || h.Z.set("lowLevelPac", s),
              g && (0, u.Z)("Store: low level PAC update. New: ", s, ". Old: ", r.lowLevelPac),
              Object.assign({}, r, { lowLevelPac: s })
            );
          },
          "Page: set": ({ noStorage: e, action: t, state: r }) => {
            let s = r.page,
              o = Object.assign({}, r);
            return (o.page = t.page), g && (0, u.Z)("Store: page change. New: ", o.page, "Old: ", s), o;
          },
          "Ping: set": ({ noStorage: e, action: t, state: r }) => {
            let s = f.cloneDeep(t.data);
            return (
              e || h.Z.set("ping", s),
              g && (0, u.Z)("Store: ping data update. New: ", s, ". Old: ", r.ping),
              Object.assign({}, r, { ping: s })
            );
          },
          "Prices: set": ({ noStorage: e, action: t, state: r }) => {
            let { prices: s } = t;
            return (
              e || h.Z.set("prices", s),
              g && (0, u.Z)("Store: prices update. New: ", s, ". Old: ", r.prices),
              Object.assign({}, r, { prices: s })
            );
          },
          "Price trial: set": ({ noStorage: e, action: t, state: r }) => {
            let { priceTrial: s } = t;
            return (
              e || h.Z.set("priceTrial", s),
              g && (0, u.Z)("Store: price trial update. New: ", s, ". Old: ", r.priceTrial),
              Object.assign({}, r, { priceTrial: s })
            );
          },
          "Promotions block: set": ({ noStorage: e, action: t, state: r }) => {
            let s = r.promotionsBlock,
              o = t.data;
            return (
              e || h.Z.set("promotionsBlock", o),
              g && (0, u.Z)("Store: Promotions block update. New: ", o, ". Old: ", s),
              Object.assign({}, r, { promotionsBlock: o })
            );
          },
          "Promotions: set": ({ noStorage: e, action: t, state: r }) => {
            let s = f.cloneDeep(t.data);
            return (
              e || h.Z.set("promotions", s),
              g && (0, u.Z)("Store: promotions update. New: ", s, ". Old: ", r.promotions),
              Object.assign({}, r, { promotions: s })
            );
          },
          "Proxy domains: set": ({ noStorage: e, action: t, state: r }) => {
            const s = r.proxyDomains,
              o = t.data;
            return g && (0, u.Z)("Store: proxy domains update. New: ", o, ". Old: ", s), Object.assign({}, r, { proxyDomains: o });
          },
          "Proxy domains: set free": ({ noStorage: e, action: t, state: r }) => {
            let { free: s, premium: o } = r.proxyDomains,
              n = t.data;
            return (
              g && (0, u.Z)("Store: free proxy domains update. New: ", n, ". Old: ", s),
              Object.assign({}, r, { proxyDomains: { free: n, premium: o } })
            );
          },
          "Proxy domains: set premium": ({ noStorage: e, action: t, state: r }) => {
            let { free: s, premium: o } = r.proxyDomains,
              n = t.data;
            return (
              g && (0, u.Z)("Store: premium proxy domains update. New: ", n, ". Old: ", o),
              Object.assign({}, r, { proxyDomains: { free: s, premium: n } })
            );
          },
          "Proxy servers: set": ({ noStorage: e, action: t, state: r }) => {
            const s = t.data;
            return g && (0, u.Z)("Store: proxy servers update. ", s), Object.assign({}, r, { proxyServers: s });
          },
          "Timezone change: set": ({ noStorage: e, action: t, state: r }) => {
            let s = r.timezoneChange,
              o = t.data;
            return (
              e || h.Z.set("timezoneChange", o),
              g && (0, u.Z)("Store: timezone change update. New: ", o, ". Old: ", s),
              Object.assign({}, r, { timezoneChange: o })
            );
          },
          "Timezones: set": ({ noStorage: e, action: t, state: r }) => {
            let s = r.timezones,
              o = t.data;
            return g && (0, u.Z)("Store: timezones update. New: ", o, ". Old: ", s), Object.assign({}, r, { timezones: o });
          },
          "User: set": ({ noStorage: e, action: t, state: r }) => {
            const s = r.user,
              o = (() => {
                const e = { validUntil: Date.now() + 3e5, version: Date.now() };
                return "string" != typeof t.data.email
                  ? { premium: !1, timestamp: e, type: "guest" }
                  : {
                      email: t.data.email,
                      loginData: { id: t.data.id, credentials: t.data.credentials, subscription: t.data.subscription },
                      premium: t.data.premium,
                      timestamp: e,
                      type: "logined"
                    };
              })();
            e || h.Z.set("account", o);
            {
              let e = f.cloneDeep(s),
                t = f.cloneDeep(o);
              "development" !== l().type &&
                (delete e.email,
                "logined" === e.type && delete e.loginData.credentials.email,
                delete t.email,
                "logined" === t.type && delete t.loginData.credentials.email),
                (0, u.Z)("Store: account update. New: ", d(t), ". Old: ", d(e));
            }
            return Object.assign({}, r, { user: o });
          },
          "User PAC: set": ({ noStorage: e, action: t, state: r }) => {
            const s = f.cloneDeep(t.data);
            if (!e) {
              let e = s.filters.map((e) => ((e = f.cloneDeep(e)).value instanceof RegExp && (e.value = e.value.toString()), e));
              h.Z.set("userPac", Object.assign({}, s, { filters: e }));
            }
            return g && (0, u.Z)("Store: PAC update. New: ", s, ". Old: ", r.userPac), Object.assign({}, r, { userPac: s });
          },
          "User PAC: update": ({ noStorage: e, action: t, state: r }) => {
            const s = Object.assign({}, r.userPac, f.cloneDeep(t.data));
            if (!e) {
              let e = s.filters.map((e) => ((e = f.cloneDeep(e)).value instanceof RegExp && (e.value = e.value.toString()), e));
              h.Z.set("userPac", Object.assign({}, s, { filters: e }));
            }
            return g && (0, u.Z)("Store: PAC update. New: ", s, ". Old: ", r.userPac), Object.assign({}, r, { userPac: s });
          },
          "Viewed personal banners: add": ({ noStorage: e, action: t, state: r }) => {
            let { banner: s } = t,
              o = Array.from(new Set(r.viewedPersonalBanners.concat([s]))).sort();
            return (
              e || h.Z.set("viewed personal banners", o),
              g && (0, u.Z)("Store: viewed personal banners update. New: ", o, ". Old: ", r.viewedPersonalBanners),
              Object.assign({}, r, { viewedPersonalBanners: o })
            );
          },
          "Viewed personal banners: set": ({ noStorage: e, action: t, state: r }) => {
            let { banners: s } = t;
            return (
              e || h.Z.set("viewed personal banners", s),
              g && (0, u.Z)("Store: viewed personal banners update. New: ", s, ". Old: ", r.viewedPersonalBanners),
              Object.assign({}, r, { viewedPersonalBanners: s })
            );
          },
          "WebRTC blocking: set": ({ noStorage: e, action: t, state: r }) => {
            let s = r.webrtcBlock,
              o = t.data;
            return (
              e || h.Z.set("webrtcBlock", o),
              g && (0, u.Z)("Store: WebRTC blocking update. New: ", o, ". Old: ", s),
              Object.assign({}, r, { webrtcBlock: o })
            );
          }
        };
      var y = r(3355),
        b = r(5221),
        w = r.n(b);
      const S = [
        { currency: "USD", value: 71.99, duration: 24 },
        { currency: "RUB", value: 7199, duration: 24 }
      ];
      var x = r(4183),
        A = r(8363),
        _ = r(5583);
      const C = JSON.parse(
          '{"version":20230730100006,"countries":{"at":{"timezoneOffset":120,"premium_servers":[{"host":"at11.prmsrvs.com","port":428}]},"au":{"timezoneOffset":600,"premium_servers":[{"host":"au1.prmsrvs.com","port":428},{"host":"au2.prmsrvs.com","port":428},{"host":"au3.prmsrvs.com","port":428},{"host":"au4.prmsrvs.com","port":428},{"host":"au5.prmsrvs.com","port":428},{"host":"au6.prmsrvs.com","port":428},{"host":"au7.prmsrvs.com","port":428},{"host":"au8.prmsrvs.com","port":428}]},"be":{"timezoneOffset":120,"premium_servers":[{"host":"be51.prmsrvs.com","port":428},{"host":"be52.prmsrvs.com","port":428},{"host":"be53.prmsrvs.com","port":428},{"host":"be54.prmsrvs.com","port":428},{"host":"be55.prmsrvs.com","port":428},{"host":"be56.prmsrvs.com","port":428},{"host":"be57.prmsrvs.com","port":428},{"host":"be58.prmsrvs.com","port":428},{"host":"be59.prmsrvs.com","port":428},{"host":"be60.prmsrvs.com","port":428},{"host":"be61.prmsrvs.com","port":428},{"host":"be62.prmsrvs.com","port":428},{"host":"be63.prmsrvs.com","port":428},{"host":"be64.prmsrvs.com","port":428},{"host":"be65.prmsrvs.com","port":428},{"host":"be66.prmsrvs.com","port":428},{"host":"be67.prmsrvs.com","port":428},{"host":"be68.prmsrvs.com","port":428}]},"bg":{"timezoneOffset":180,"premium_servers":[{"host":"bg1.prmsrvs.com","port":428},{"host":"bg2.prmsrvs.com","port":428},{"host":"bg3.prmsrvs.com","port":428},{"host":"bg4.prmsrvs.com","port":428}]},"br":{"timezoneOffset":-180,"premium_servers":[{"host":"br2.prmsrvs.com","port":428},{"host":"br3.prmsrvs.com","port":428}]},"ca":{"timezoneOffset":-240,"premium_servers":[{"host":"ca1.prmsrvs.com","port":428},{"host":"ca2.prmsrvs.com","port":428}]},"ch":{"timezoneOffset":120,"premium_servers":[{"host":"ch2.prmsrvs.com","port":428}]},"cl":{"timezoneOffset":-240,"premium_servers":[{"host":"cl1.prmsrvs.com","port":428}]},"cz":{"timezoneOffset":120,"premium_servers":[{"host":"cz6.prmsrvs.com","port":428}]},"de":{"timezoneOffset":120,"premium_servers":[{"host":"de1.prmsrvs.com","port":428},{"host":"de2.prmsrvs.com","port":428},{"host":"de3.prmsrvs.com","port":428},{"host":"de4.prmsrvs.com","port":428},{"host":"de5.prmsrvs.com","port":428},{"host":"de6.prmsrvs.com","port":428},{"host":"de7.prmsrvs.com","port":428},{"host":"de8.prmsrvs.com","port":428},{"host":"de9.prmsrvs.com","port":428},{"host":"de10.prmsrvs.com","port":428},{"host":"de11.prmsrvs.com","port":428},{"host":"de12.prmsrvs.com","port":428}]},"dk":{"timezoneOffset":120,"premium_servers":[{"host":"dk13.prmsrvs.com","port":428},{"host":"dk14.prmsrvs.com","port":428},{"host":"dk15.prmsrvs.com","port":428},{"host":"dk16.prmsrvs.com","port":428}]},"es":{"timezoneOffset":120,"premium_servers":[{"host":"es6.prmsrvs.com","port":428},{"host":"es7.prmsrvs.com","port":428},{"host":"es8.prmsrvs.com","port":428},{"host":"es9.prmsrvs.com","port":428},{"host":"es10.prmsrvs.com","port":428}]},"fi":{"timezoneOffset":180,"premium_servers":[{"host":"fi31.prmsrvs.com","port":428},{"host":"fi32.prmsrvs.com","port":428},{"host":"fi33.prmsrvs.com","port":428},{"host":"fi34.prmsrvs.com","port":428},{"host":"fi35.prmsrvs.com","port":428},{"host":"fi36.prmsrvs.com","port":428},{"host":"fi37.prmsrvs.com","port":428},{"host":"fi38.prmsrvs.com","port":428},{"host":"fi39.prmsrvs.com","port":428},{"host":"fi40.prmsrvs.com","port":428}]},"fr":{"timezoneOffset":120,"premium_servers":[{"host":"fr1.prmsrvs.com","port":428},{"host":"fr2.prmsrvs.com","port":428},{"host":"fr3.prmsrvs.com","port":428},{"host":"fr4.prmsrvs.com","port":428},{"host":"fr5.prmsrvs.com","port":428},{"host":"fr6.prmsrvs.com","port":428},{"host":"fr7.prmsrvs.com","port":428},{"host":"fr8.prmsrvs.com","port":428},{"host":"fr9.prmsrvs.com","port":428},{"host":"fr10.prmsrvs.com","port":428}]},"hk":{"timezoneOffset":480,"premium_servers":[{"host":"hk1.prmsrvs.com","port":428},{"host":"hk2.prmsrvs.com","port":428},{"host":"hk3.prmsrvs.com","port":428},{"host":"hk4.prmsrvs.com","port":428},{"host":"hk5.prmsrvs.com","port":428},{"host":"hk6.prmsrvs.com","port":428},{"host":"hk7.prmsrvs.com","port":428},{"host":"hk8.prmsrvs.com","port":428},{"host":"hk9.prmsrvs.com","port":428},{"host":"hk10.prmsrvs.com","port":428}]},"hu":{"timezoneOffset":120,"premium_servers":[{"host":"hu1.prmsrvs.com","port":428},{"host":"hu2.prmsrvs.com","port":428},{"host":"hu3.prmsrvs.com","port":428},{"host":"hu4.prmsrvs.com","port":428},{"host":"hu5.prmsrvs.com","port":428}]},"ie":{"timezoneOffset":60,"premium_servers":[{"host":"ie1.prmsrvs.com","port":428},{"host":"ie2.prmsrvs.com","port":428},{"host":"ie3.prmsrvs.com","port":428},{"host":"ie4.prmsrvs.com","port":428},{"host":"ie5.prmsrvs.com","port":428},{"host":"ie6.prmsrvs.com","port":428},{"host":"ie7.prmsrvs.com","port":428},{"host":"ie8.prmsrvs.com","port":428},{"host":"ie9.prmsrvs.com","port":428},{"host":"ie10.prmsrvs.com","port":428}]},"il":{"timezoneOffset":180,"premium_servers":[{"host":"il1.prmsrvs.com","port":428},{"host":"il2.prmsrvs.com","port":428}]},"in":{"timezoneOffset":330,"premium_servers":[{"host":"in3.prmsrvs.com","port":428},{"host":"in4.prmsrvs.com","port":428},{"host":"in5.prmsrvs.com","port":428},{"host":"in6.prmsrvs.com","port":428}]},"is":{"timezoneOffset":0,"premium_servers":[{"host":"is1.prmsrvs.com","port":428},{"host":"is2.prmsrvs.com","port":428},{"host":"is3.prmsrvs.com","port":428},{"host":"is4.prmsrvs.com","port":428}]},"it":{"timezoneOffset":120,"premium_servers":[{"host":"it1.prmsrvs.com","port":428},{"host":"it2.prmsrvs.com","port":428},{"host":"it3.prmsrvs.com","port":428}]},"jp":{"timezoneOffset":540,"premium_servers":[{"host":"jp1.prmsrvs.com","port":428},{"host":"jp2.prmsrvs.com","port":428},{"host":"jp3.prmsrvs.com","port":428},{"host":"jp4.prmsrvs.com","port":428},{"host":"jp5.prmsrvs.com","port":428},{"host":"jp6.prmsrvs.com","port":428},{"host":"jp7.prmsrvs.com","port":428},{"host":"jp8.prmsrvs.com","port":428},{"host":"jp9.prmsrvs.com","port":428},{"host":"jp10.prmsrvs.com","port":428},{"host":"jp11.prmsrvs.com","port":428},{"host":"jp12.prmsrvs.com","port":428},{"host":"jp13.prmsrvs.com","port":428},{"host":"jp14.prmsrvs.com","port":428},{"host":"jp15.prmsrvs.com","port":428},{"host":"jp16.prmsrvs.com","port":428},{"host":"jp17.prmsrvs.com","port":428},{"host":"jp18.prmsrvs.com","port":428},{"host":"jp19.prmsrvs.com","port":428},{"host":"jp20.prmsrvs.com","port":428},{"host":"jp21.prmsrvs.com","port":428},{"host":"jp22.prmsrvs.com","port":428},{"host":"jp23.prmsrvs.com","port":428},{"host":"jp24.prmsrvs.com","port":428},{"host":"jp25.prmsrvs.com","port":428},{"host":"jp26.prmsrvs.com","port":428},{"host":"jp27.prmsrvs.com","port":428},{"host":"jp28.prmsrvs.com","port":428},{"host":"jp29.prmsrvs.com","port":428},{"host":"jp30.prmsrvs.com","port":428},{"host":"jp31.prmsrvs.com","port":428},{"host":"jp32.prmsrvs.com","port":428},{"host":"jp33.prmsrvs.com","port":428},{"host":"jp34.prmsrvs.com","port":428},{"host":"jp35.prmsrvs.com","port":428}]},"kr":{"timezoneOffset":540,"premium_servers":[{"host":"kr1.prmsrvs.com","port":428},{"host":"kr2.prmsrvs.com","port":428},{"host":"kr3.prmsrvs.com","port":428},{"host":"kr4.prmsrvs.com","port":428},{"host":"kr5.prmsrvs.com","port":428},{"host":"kr6.prmsrvs.com","port":428},{"host":"kr7.prmsrvs.com","port":428},{"host":"kr8.prmsrvs.com","port":428},{"host":"kr9.prmsrvs.com","port":428},{"host":"kr10.prmsrvs.com","port":428},{"host":"kr11.prmsrvs.com","port":428},{"host":"kr12.prmsrvs.com","port":428}]},"lt":{"timezoneOffset":180,"premium_servers":[{"host":"lt1.prmsrvs.com","port":428},{"host":"lt2.prmsrvs.com","port":428},{"host":"lt3.prmsrvs.com","port":428}]},"lu":{"timezoneOffset":120,"premium_servers":[{"host":"lu2.prmsrvs.com","port":428}]},"lv":{"timezoneOffset":180,"premium_servers":[{"host":"lv2.prmsrvs.com","port":428}]},"mx":{"timezoneOffset":-360,"premium_servers":[{"host":"mx1.prmsrvs.com","port":428}]},"nl":{"timezoneOffset":120,"premium_servers":[{"host":"nl41.prmsrvs.com","port":428},{"host":"nl42.prmsrvs.com","port":428},{"host":"nl43.prmsrvs.com","port":428},{"host":"nl44.prmsrvs.com","port":428},{"host":"nl45.prmsrvs.com","port":428},{"host":"nl46.prmsrvs.com","port":428},{"host":"nl47.prmsrvs.com","port":428},{"host":"nl48.prmsrvs.com","port":428}],"servers":[{"host":"nl41.trafcfy.com","port":428},{"host":"nl42.trafcfy.com","port":428},{"host":"nl43.trafcfy.com","port":428},{"host":"nl44.trafcfy.com","port":428},{"host":"nl45.trafcfy.com","port":428},{"host":"nl50.trafcfy.com","port":428},{"host":"nl51.trafcfy.com","port":428},{"host":"nl52.trafcfy.com","port":428},{"host":"nl53.trafcfy.com","port":428},{"host":"nl55.trafcfy.com","port":428},{"host":"nl56.trafcfy.com","port":428},{"host":"nl57.trafcfy.com","port":428},{"host":"nl58.trafcfy.com","port":428},{"host":"nl59.trafcfy.com","port":428},{"host":"nl60.trafcfy.com","port":428},{"host":"nl61.trafcfy.com","port":428},{"host":"nl62.trafcfy.com","port":428},{"host":"nl63.trafcfy.com","port":428},{"host":"nl64.trafcfy.com","port":428},{"host":"nl65.trafcfy.com","port":428},{"host":"nl66.trafcfy.com","port":428},{"host":"nl67.trafcfy.com","port":428},{"host":"nl68.trafcfy.com","port":428},{"host":"nl69.trafcfy.com","port":428},{"host":"nl70.trafcfy.com","port":428},{"host":"nl71.trafcfy.com","port":428},{"host":"nl72.trafcfy.com","port":428},{"host":"nl73.trafcfy.com","port":428},{"host":"nl74.trafcfy.com","port":428},{"host":"nl78.trafcfy.com","port":428},{"host":"nl79.trafcfy.com","port":428},{"host":"nl80.trafcfy.com","port":428},{"host":"nl81.trafcfy.com","port":428},{"host":"nl82.trafcfy.com","port":428},{"host":"nl83.trafcfy.com","port":428},{"host":"nl84.trafcfy.com","port":428},{"host":"nl85.trafcfy.com","port":428},{"host":"nl86.trafcfy.com","port":428},{"host":"nl87.trafcfy.com","port":428},{"host":"nl88.trafcfy.com","port":428},{"host":"nl89.trafcfy.com","port":428},{"host":"nl90.trafcfy.com","port":428},{"host":"nl91.trafcfy.com","port":428},{"host":"nl92.trafcfy.com","port":428},{"host":"nl93.trafcfy.com","port":428},{"host":"nl94.trafcfy.com","port":428},{"host":"nl95.trafcfy.com","port":428}]},"no":{"timezoneOffset":120,"premium_servers":[{"host":"no1.prmsrvs.com","port":428},{"host":"no2.prmsrvs.com","port":428},{"host":"no3.prmsrvs.com","port":428},{"host":"no4.prmsrvs.com","port":428},{"host":"no5.prmsrvs.com","port":428},{"host":"no6.prmsrvs.com","port":428},{"host":"no7.prmsrvs.com","port":428}]},"nz":{"timezoneOffset":720,"premium_servers":[{"host":"nz1.prmsrvs.com","port":428}]},"pl":{"timezoneOffset":120,"premium_servers":[{"host":"pl1.prmsrvs.com","port":428},{"host":"pl2.prmsrvs.com","port":428},{"host":"pl3.prmsrvs.com","port":428}]},"ro":{"timezoneOffset":180,"premium_servers":[{"host":"ro4.prmsrvs.com","port":428},{"host":"ro5.prmsrvs.com","port":428}]},"rs":{"timezoneOffset":120,"premium_servers":[{"host":"rs1.prmsrvs.com","port":428}]},"ru":{"timezoneOffset":180,"premium_servers":[{"host":"ru6.prmsrvs.com","port":428},{"host":"ru7.prmsrvs.com","port":428},{"host":"ru8.prmsrvs.com","port":428},{"host":"ru9.prmsrvs.com","port":428},{"host":"ru10.prmsrvs.com","port":428},{"host":"ru11.prmsrvs.com","port":428},{"host":"ru12.prmsrvs.com","port":428},{"host":"ru13.prmsrvs.com","port":428}]},"se":{"timezoneOffset":120,"premium_servers":[{"host":"se10.prmsrvs.com","port":428},{"host":"se11.prmsrvs.com","port":428},{"host":"se12.prmsrvs.com","port":428}]},"sg":{"timezoneOffset":480,"servers":[{"host":"sg1.trafcfy.com","port":428},{"host":"sg2.trafcfy.com","port":428},{"host":"sg3.trafcfy.com","port":428},{"host":"sg4.trafcfy.com","port":428},{"host":"sg5.trafcfy.com","port":428},{"host":"sg6.trafcfy.com","port":428},{"host":"sg7.trafcfy.com","port":428},{"host":"sg8.trafcfy.com","port":428},{"host":"sg9.trafcfy.com","port":428},{"host":"sg10.trafcfy.com","port":428}],"premium_servers":[{"host":"sg5.prmsrvs.com","port":428},{"host":"sg6.prmsrvs.com","port":428},{"host":"sg7.prmsrvs.com","port":428},{"host":"sg8.prmsrvs.com","port":428},{"host":"sg9.prmsrvs.com","port":428},{"host":"sg10.prmsrvs.com","port":428},{"host":"sg11.prmsrvs.com","port":428},{"host":"sg12.prmsrvs.com","port":428}]},"si":{"timezoneOffset":120,"premium_servers":[{"host":"si1.prmsrvs.com","port":428},{"host":"si2.prmsrvs.com","port":428}]},"tr":{"timezoneOffset":180,"premium_servers":[{"host":"tr2.prmsrvs.com","port":428},{"host":"tr3.prmsrvs.com","port":428},{"host":"tr4.prmsrvs.com","port":428},{"host":"tr5.prmsrvs.com","port":428},{"host":"tr6.prmsrvs.com","port":428},{"host":"tr7.prmsrvs.com","port":428},{"host":"tr8.prmsrvs.com","port":428},{"host":"tr9.prmsrvs.com","port":428},{"host":"tr10.prmsrvs.com","port":428}]},"ua":{"timezoneOffset":0,"premium_servers":[{"host":"ua2.prmsrvs.com","port":428}]},"uk":{"timezoneOffset":60,"premium_servers":[{"host":"uk2.prmsrvs.com","port":428},{"host":"uk4.prmsrvs.com","port":428},{"host":"uk32.prmsrvs.com","port":428},{"host":"uk42.prmsrvs.com","port":428},{"host":"uk46.prmsrvs.com","port":428},{"host":"uk56.prmsrvs.com","port":428},{"host":"uk58.prmsrvs.com","port":428},{"host":"uk60.prmsrvs.com","port":428},{"host":"uk66.prmsrvs.com","port":428},{"host":"uk69.prmsrvs.com","port":428},{"host":"uk75.prmsrvs.com","port":428},{"host":"uk80.prmsrvs.com","port":428},{"host":"uk81.prmsrvs.com","port":428},{"host":"uk83.prmsrvs.com","port":428},{"host":"uk84.prmsrvs.com","port":428},{"host":"uk85.prmsrvs.com","port":428},{"host":"uk86.prmsrvs.com","port":428},{"host":"uk87.prmsrvs.com","port":428},{"host":"uk88.prmsrvs.com","port":428},{"host":"uk89.prmsrvs.com","port":428},{"host":"uk90.prmsrvs.com","port":428}],"servers":[{"host":"uk22.trafcfy.com","port":428},{"host":"uk23.trafcfy.com","port":428},{"host":"uk24.trafcfy.com","port":428},{"host":"uk25.trafcfy.com","port":428},{"host":"uk26.trafcfy.com","port":428},{"host":"uk27.trafcfy.com","port":428},{"host":"uk28.trafcfy.com","port":428},{"host":"uk29.trafcfy.com","port":428},{"host":"uk30.trafcfy.com","port":428},{"host":"uk31.trafcfy.com","port":428},{"host":"uk32.trafcfy.com","port":428},{"host":"uk33.trafcfy.com","port":428},{"host":"uk34.trafcfy.com","port":428},{"host":"uk35.trafcfy.com","port":428},{"host":"uk36.trafcfy.com","port":428},{"host":"uk37.trafcfy.com","port":428}]},"us":{"timezoneOffset":-240,"premium_servers":[{"host":"us1.prmsrvs.com","port":428},{"host":"us2.prmsrvs.com","port":428},{"host":"us7.prmsrvs.com","port":428},{"host":"us10.prmsrvs.com","port":428},{"host":"us11.prmsrvs.com","port":428},{"host":"us12.prmsrvs.com","port":428},{"host":"us13.prmsrvs.com","port":428},{"host":"us14.prmsrvs.com","port":428}],"servers":[{"host":"us21.trafcfy.com","port":428},{"host":"us23.trafcfy.com","port":428},{"host":"us24.trafcfy.com","port":428},{"host":"us25.trafcfy.com","port":428},{"host":"us26.trafcfy.com","port":428},{"host":"us28.trafcfy.com","port":428},{"host":"us29.trafcfy.com","port":428},{"host":"us30.trafcfy.com","port":428},{"host":"us31.trafcfy.com","port":428},{"host":"us32.trafcfy.com","port":428},{"host":"us34.trafcfy.com","port":428},{"host":"us35.trafcfy.com","port":428}]},"usw":{"timezoneOffset":-420,"premium_servers":[{"host":"usw1.prmsrvs.com","port":428},{"host":"usw2.prmsrvs.com","port":428},{"host":"usw3.prmsrvs.com","port":428},{"host":"usw4.prmsrvs.com","port":428},{"host":"usw5.prmsrvs.com","port":428},{"host":"usw6.prmsrvs.com","port":428},{"host":"usw7.prmsrvs.com","port":428},{"host":"usw8.prmsrvs.com","port":428},{"host":"usw9.prmsrvs.com","port":428},{"host":"usw10.prmsrvs.com","port":428}]},"za":{"timezoneOffset":120,"premium_servers":[{"host":"za1.prmsrvs.com","port":428},{"host":"za2.prmsrvs.com","port":428},{"host":"za3.prmsrvs.com","port":428},{"host":"za4.prmsrvs.com","port":428},{"host":"za5.prmsrvs.com","port":428},{"host":"za6.prmsrvs.com","port":428},{"host":"za7.prmsrvs.com","port":428}]}},"domains":{"free":["trafcfy.com"],"premium":["prmsrvs.com"]}}'
        ),
        E = async (e) => {
          const t =
              e ||
              (await w().storage.local.get([
                "account",
                "activeInternalExperiments",
                "browsec.com available",
                "cacheRemoval",
                "daysAfterInstall",
                "domain",
                "experiments",
                "favorites",
                "ignoredExperiments",
                "internal experiments",
                "lowLevelPac",
                "ping",
                "prices",
                "priceTrial",
                "promotions",
                "promotionsBlock",
                "proxyIsBroken",
                "reserveDomains",
                "timezoneChange",
                "userPac",
                "viewed personal banners",
                "webrtc",
                "webrtcBlock"
              ])),
            r = await (async () => (await h.Z.get("serversObject")) || C)(),
            s = Object.keys(r.countries);
          let {
            account: o,
            activeInternalExperiments: n,
            "browsec.com available": i,
            cacheRemoval: a,
            daysAfterInstall: c,
            domain: p,
            experiments: m,
            favorites: d,
            ignoredExperiments: u,
            "internal experiments": f,
            lowLevelPac: g,
            ping: v,
            prices: y,
            priceTrial: b,
            promotions: E,
            promotionsBlock: k,
            proxyIsBroken: O,
            reserveDomains: P,
            timezoneChange: j,
            userPac: $,
            "viewed personal banners": I,
            webrtc: T,
            webrtcBlock: R
          } = t;
          return Object.assign(
            { page: "index:home" },
            {
              activeInternalExperiments:
                Array.isArray(n) && n.every((e) => "string" == typeof e) ? n : l().internalExperiments.map(({ serverId: e }) => e),
              browsecComAvailable: "string" != typeof i ? "unknown" : ["yes", "no", "unknown", "checking"].includes(i) ? i : "unknown",
              cacheRemoval: null != a && a,
              daysAfterInstall: "number" != typeof c ? 0 : Math.floor((Date.now() - c) / 864e5),
              domain: location.href.includes("background") ? null : p || null,
              experiments: (() => {
                if (!(0, x.Z)(m)) return {};
                const e = Object.values(m);
                return e.length && e.every((e) => "string" == typeof e) ? m : {};
              })(),
              favorites: Array.isArray(d) && d.every((e) => "string" == typeof e) ? d : [],
              ignoredExperiments: Array.isArray(u) && u.every((e) => "string" == typeof e) ? u : [],
              internalExperiments: (() => {
                if (!(0, x.Z)(f)) return {};
                const e = Object.values(f);
                return e.length && e.every((e) => "number" == typeof e) ? f : {};
              })(),
              lowLevelPac: g || {
                browsecCountry: null,
                countries: {},
                globalReturn: null,
                ignoredDomains: [],
                premiumCountries: {},
                siteFilters: []
              },
              ping: (() => {
                if (!Array.isArray(v)) return [];
                return v.every(
                  (e) =>
                    (0, x.Z)(e) &&
                    "string" == typeof e.country &&
                    "boolean" == typeof e.premium &&
                    "number" == typeof e.delay &&
                    "number" == typeof e.mark
                )
                  ? v
                  : [];
              })(),
              prices: (() => {
                if (!Array.isArray(y) || !y.length) return S;
                return y.every(
                  (e) => (0, x.Z)(e) && "string" == typeof e.currency && "number" == typeof e.value && "number" == typeof e.duration
                )
                  ? y
                  : S;
              })(),
              priceTrial: "number" == typeof b ? b : void 0,
              promotions: Array.isArray(E)
                ? E.filter((e) => {
                    var t, r;
                    return (
                      (0, x.Z)(e) &&
                      (!e.banner ||
                        ("string" == typeof (null == e || null === (t = e.banner) || void 0 === t ? void 0 : t.link) &&
                          "object" == typeof (null == e || null === (r = e.banner) || void 0 === r ? void 0 : r.structure))) &&
                      "string" == typeof e.id &&
                      "number" == typeof e.from &&
                      ["common", "personal"].includes(e.kind) &&
                      (!e.page || "string" == typeof e.page) &&
                      "number" == typeof e.till
                    );
                  })
                : [],
              promotionsBlock: "boolean" == typeof k && k,
              proxyDomains: (() => {
                if (!P) return r.domains;
                let { free: e, premium: t } = P;
                return e.length || (e = r.domains.free), t.length || (t = r.domains.premium), { free: e, premium: t };
              })(),
              proxyIsBroken: "boolean" == typeof O && O,
              proxyServers: (() => {
                const e = new Map();
                for (const t of s) {
                  const s = r.countries[t],
                    o = {};
                  s.fast_servers && (o.fast = (0, _.Z)(s.fast_servers)),
                    s.premium_servers && (o.premium = (0, _.Z)(s.premium_servers)),
                    s.servers && (o.free = (0, _.Z)(s.servers)),
                    e.set(t, o);
                }
                return (0, A.Z)(e);
              })(),
              timezones: (() => {
                const e = new Map();
                for (const t of s) {
                  const s = r.countries[t].timezoneOffset;
                  "number" == typeof s && e.set(t, s);
                }
                return e;
              })(),
              timezoneChange: "boolean" == typeof j && j,
              user: (() => {
                const e = o;
                if (!e) return { type: "guest", premium: !1, timestamp: {} };
                if (e.type) return e;
                const t = e;
                return "email" in t
                  ? {
                      email: t.email,
                      loginData: { id: t.id, credentials: t.credentials, subscription: t.subscription },
                      premium: t.premium,
                      timestamp: { validUntil: t.validUntil, version: t.version },
                      type: "logined"
                    }
                  : { type: "guest", premium: !1, timestamp: {} };
              })(),
              userPac: (() => {
                if (!(0, x.Z)($)) return { mode: "direct", country: null, broken: !1, filters: [] };
                if (
                  !(
                    ["direct", "proxy"].includes($.mode) &&
                    (null === $.country || "string" == typeof $.country) &&
                    Array.isArray($.filters)
                  )
                )
                  return { mode: "direct", country: null, broken: !1, filters: [] };
                if ($.filters.length)
                  if ($.filters.some((e) => e.domain))
                    $.filters = $.filters.map(({ country: e, disabled: t, domain: r, proxyMode: s }) => ({
                      country: e,
                      disabled: t,
                      format: "domain",
                      value: r,
                      proxyMode: s
                    }));
                  else for (const e of $.filters) "regex" === e.format && (e.value = new RegExp(e.value.slice(1, -1)));
                return $;
              })(),
              viewedPersonalBanners: (() => {
                if (!Array.isArray(I)) return [];
                return I.length && I.every((e) => "string" == typeof e) ? I : [];
              })(),
              webrtcBlock: "boolean" == typeof R ? R : "boolean" == typeof T ? T : null
            }
          );
        };
      var k = r(950);
      const { _: O } = self,
        { _: P } = self;
      const j = new (class {
        constructor() {
          (this._callbacks = []),
            (this._dispatchDelayedData = []),
            (this.initiated = !1),
            (this.ready = new y.Z()),
            this.ready.then(() => {
              this._dispatchDelayedData.forEach((e) => {
                this.dispatch(e);
              });
            });
        }
        dispatch(e) {
          var t;
          "function" != typeof (null === (t = this._realStore) || void 0 === t ? void 0 : t.dispatch)
            ? this._dispatchDelayedData.push(e)
            : this._realStore.dispatch(e);
        }
        getState() {
          return this.getStateSync();
        }
        async getStateAsync() {
          return await this.ready, this._realStore.getState();
        }
        getStateSync() {
          var e;
          if ("function" != typeof (null === (e = this._realStore) || void 0 === e ? void 0 : e.getState))
            throw new Error("store.getStateSync called too early");
          return this._realStore.getState();
        }
        async initiate(e) {
          if (this.initiated) return j.ready;
          this.initiated = !0;
          const t = c(
            (
              (e) =>
              (t = e, r) => {
                let s = Boolean(r.noStorage),
                  o = r.type;
                return delete r.noStorage, o in v ? v[o]({ noStorage: s, action: r, state: t }) : t;
              }
            )(
              await (() => {
                if ("store state" === (null == e ? void 0 : e.type)) {
                  const { value: t } = e;
                  return (
                    (t.proxyServers = (0, A.Z)(new Map(Object.entries(t.proxyServers)))),
                    (t.timezones = new Map(Object.entries(t.timezones))),
                    t
                  );
                }
                return void 0 === e ? E() : E(e.value);
              })()
            )
          );
          this._realStore = t;
          let r = t.getState();
          return (
            t.subscribe(() => {
              const e = t.getState(),
                s = [];
              for (const { property: t, compare: o } of this._callbacks) {
                const n = t(e),
                  i = t(r);
                (() => {
                  if (n instanceof Map && i instanceof Map) {
                    if (n === i) return !1;
                    if (n.size !== i.size) return !0;
                    for (const [e, t] of n) if (!P.isEqual(i.get(e), t)) return !0;
                    return !1;
                  }
                  return !P.isEqual(n, i);
                })() && s.push({ compare: o, values: [n, i] });
              }
              r = e;
              for (const { compare: t, values: r } of s) t(r[0], r[1], e);
            }),
            this.ready.resolve(r),
            r
          );
        }
        onChange(e, t) {
          const r = { property: e, compare: t };
          return (
            this._callbacks.push(r),
            () => {
              this._callbacks = this._callbacks.filter((e) => e !== r);
            }
          );
        }
        onOneChange(e, t) {
          return new Promise(
            "function" != typeof t
              ? (t) => {
                  const r = this.onChange(e, (e) => {
                    r(), t(e);
                  });
                }
              : (r) => {
                  const s = this.onChange(e, async (e, o, n) => {
                    (await t(e, o, n)) && (s(), r(e));
                  });
                }
          );
        }
        subscribe(e) {
          var t;
          if ("function" != typeof (null === (t = this._realStore) || void 0 === t ? void 0 : t.subscribe))
            throw new Error("store.subscribe called too early");
          return this._realStore.subscribe(e);
        }
      })();
      ((e) => {
        h.Z.addListener(async (t) => {
          if (t.account) {
            const { oldValue: r, newValue: s } = t.account;
            if (!O.isEqual(r, s)) {
              const t =
                "logined" === s.type
                  ? {
                      credentials: s.loginData.credentials,
                      email: s.email,
                      id: s.loginData.id,
                      premium: s.premium,
                      subscription: s.loginData.subscription,
                      type: "logined"
                    }
                  : { guest: !0, type: "guest" };
              e.dispatch({ type: "User: set", data: t, noStorage: !0 });
            }
          }
          if (t.activeInternalExperiments) {
            let { oldValue: r, newValue: s } = t.activeInternalExperiments;
            O.isEqual(r, s) || e.dispatch({ type: "Active internal experiments: set", data: s, noStorage: !0 });
          }
          if (t["browsec.com available"]) {
            let { oldValue: r, newValue: s } = t["browsec.com available"];
            r !== s && e.dispatch({ type: "Browsec.com available: set", data: s, noStorage: !0 });
          }
          if (t.cacheRemoval) {
            let { oldValue: r, newValue: s } = t.cacheRemoval;
            r !== s && e.dispatch({ type: "Cache removal: set", data: s, noStorage: !0 });
          }
          if (t.domain) {
            let { oldValue: r, newValue: s } = t.domain;
            O.isEqual(r, s) || e.dispatch({ type: "Domain: set", domain: s, noStorage: !0 });
          }
          if (t.experiments) {
            let { oldValue: r, newValue: s } = t.experiments;
            O.isEqual(r, s) || e.dispatch({ type: "Experiments: set", data: s, noStorage: !0 });
          }
          if (t.favorites) {
            let { oldValue: r, newValue: s } = t.favorites;
            O.isEqual(r, s) || e.dispatch({ type: "Favorites: set", data: s, noStorage: !0 });
          }
          if (t.ignoredExperiments) {
            let { oldValue: r, newValue: s } = t.ignoredExperiments;
            O.isEqual(r, s) || e.dispatch({ type: "Ignored experiments: set", data: s, noStorage: !0 });
          }
          if (t["internal experiments"]) {
            let { oldValue: r, newValue: s } = t["internal experiments"];
            O.isEqual(r, s) || e.dispatch({ type: "Internal experiments: set", data: s, noStorage: !0 });
          }
          if (t.lowLevelPac) {
            let { oldValue: r, newValue: s } = t.lowLevelPac;
            O.isEqual(r, s) || e.dispatch({ type: "Low level PAC: set", data: s, noStorage: !0 });
          }
          if (t.userPac) {
            let { oldValue: r, newValue: s } = t.userPac;
            O.isEqual(r, s) || e.dispatch({ type: "User PAC: set", data: s, noStorage: !0 });
          }
          if (t.ping) {
            let { oldValue: r, newValue: s } = t.ping;
            O.isEqual(r, s) || e.dispatch({ type: "Ping: set", data: s, noStorage: !0 });
          }
          if (t.prices) {
            let { oldValue: r, newValue: s } = t.prices;
            O.isEqual(r, s) || e.dispatch({ type: "Prices: set", prices: s, noStorage: !0 });
          }
          if (t.priceTrial) {
            let { oldValue: r, newValue: s } = t.priceTrial;
            O.isEqual(r, s) || e.dispatch({ type: "Price trial: set", priceTrial: s, noStorage: !0 });
          }
          if (t.promotionsBlock) {
            let { oldValue: r, newValue: s } = t.promotionsBlock;
            O.isEqual(r, s) || e.dispatch({ type: "Promotions block: set", data: s, noStorage: !0 });
          }
          if (t.promotions) {
            let { oldValue: r, newValue: s } = t.promotions;
            O.isEqual(r, s) || e.dispatch({ type: "Promotions: set", data: s, noStorage: !0 });
          }
          if (t.reserveDomains) {
            let { oldValue: r, newValue: s } = t.reserveDomains;
            const { proxyDomains: o } = await e.getStateAsync();
            if (!O.isEqual(r, s)) {
              let { free: t, premium: r } = s;
              t.length || (t = o.free),
                r.length || (r = o.premium),
                O.isEqual(o, { free: t, premium: r }) ||
                  e.dispatch({ type: "Proxy domains: set", data: { free: t, premium: r }, noStorage: !0 });
            }
          }
          if (t.serversObject) {
            const { oldValue: r, newValue: s } = t.serversObject;
            O.isEqual(r, s) || (0, k.Z)({ object: s, noStorage: !0, store: e });
          }
          if (t.timezoneChange) {
            let { oldValue: r, newValue: s } = t.timezoneChange;
            O.isEqual(r, s) || e.dispatch({ type: "Timezone change: set", data: s, noStorage: !0 });
          }
          if (t["viewed personal banners"]) {
            let { oldValue: r, newValue: s } = t["viewed personal banners"];
            O.isEqual(r, s) || e.dispatch({ type: "Viewed personal banners: set", banners: s, noStorage: !0 });
          }
          if (t.webrtcBlock) {
            let { oldValue: r, newValue: s } = t.webrtcBlock;
            O.isEqual(r, s) || e.dispatch({ type: "WebRTC blocking: set", data: s, noStorage: !0 });
          }
        });
      })(j);
      const $ = j;
    },
    3355: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => s });
      const s = /^(277|39)$/.test(r.j)
        ? null
        : class extends Promise {
            constructor(e = (e, t) => {}) {
              let t, r;
              super((s, o) => {
                (t = s), (r = o), e(s, o);
              }),
                (this._resolve = t),
                (this._reject = r);
            }
            resolve(e) {
              return this._resolve(e), this;
            }
            reject(e) {
              return this._reject(e), this;
            }
          };
    },
    4123: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => s });
      const s = async (e, t) => {
        const { data: r, method: s } = t,
          o = t.dataType || "text",
          n = t.headers ? t.headers : "POST" !== s || r || t.body ? {} : { "Content-Type": "application/x-www-form-urlencoded" };
        delete (t = Object.assign({}, t)).data, delete t.dataType, delete t.headers;
        let i = { method: s };
        r &&
          ("POST" === s
            ? ((i.body = JSON.stringify(r)), n["Content-Type"] || (n["Content-Type"] = "application/json"))
            : (i.body = Object.entries(r)
                .map(([e, t]) => e + "=" + encodeURIComponent(t))
                .join("&"))),
          (i.credentials = t.credentials || "include"),
          Object.assign(i, t),
          Object.keys(n).length && Object.assign(i, { headers: n });
        const a = await fetch(e, i);
        if (a.ok) return "json" === o ? a.json() : a.text();
        const c = new Error(a.statusText);
        c.status = a.status;
        try {
          c.responseText = await a.text();
        } catch (c) {}
        throw c;
      };
    },
    7128: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => o });
      let s = () => Math.random().toString(16).slice(-4);
      const o = () => s() + s() + "-" + s() + "-" + s() + "-" + s() + "-" + s() + s() + s();
    },
    4168: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => n });
      var s = r(5221),
        o = r.n(s);
      const n = () => ("ru" !== o().i18n.getUILanguage() ? "en" : "ru");
    },
    5693: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => o });
      const s = "undefined" != typeof browser ? browser : chrome,
        o = (e) => {
          try {
            return s.i18n.getMessage(e) || e;
          } catch (t) {
            return e;
          }
        };
    },
    4183: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => s });
      const s = (e) => Boolean(e && "object" == typeof e);
    },
    8363: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => s });
      const s = (e) =>
        Object.assign(e, {
          freeCountries() {
            const e = this.entries();
            return {
              [Symbol.iterator]: () => ({
                next() {
                  for (;;) {
                    const { value: t, done: r } = e.next();
                    if (r) return { value: void 0, done: !0 };
                    let [s, { free: o }] = t;
                    if (o) return { value: s, done: !1 };
                  }
                }
              })
            };
          },
          premiumCountries() {
            const e = this.entries();
            return {
              [Symbol.iterator]: () => ({
                next() {
                  for (;;) {
                    const { value: t, done: r } = e.next();
                    if (r) return { value: void 0, done: !0 };
                    let [s, { premium: o }] = t;
                    if (o) return { value: s, done: !1 };
                  }
                }
              })
            };
          }
        });
    },
    5583: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => s });
      const s = (e) => e.map(({ host: e, port: t }) => ({ prefix: e.split(".")[0], port: t }));
    },
    950: (e, t, r) => {
      "use strict";
      if ((r.d(t, { Z: () => n }), !/^(277|39)$/.test(r.j))) var s = r(8363);
      if (!/^(277|39)$/.test(r.j)) var o = r(5583);
      const n = ({ noStorage: e = !1, object: t, store: r }) => {
        const n = new Map(),
          i = new Map();
        for (const e of Object.keys(t.countries)) {
          const r = t.countries[e],
            s = {};
          r.fast_servers && (s.fast = (0, o.Z)(r.fast_servers)),
            r.premium_servers && (s.premium = (0, o.Z)(r.premium_servers)),
            r.servers && (s.free = (0, o.Z)(r.servers)),
            n.set(e, s);
          const a = r.timezoneOffset;
          "number" == typeof a && i.set(e, a);
        }
        r.dispatch({ type: "Proxy servers: set", data: (0, s.Z)(n), noStorage: e }),
          r.dispatch({ type: "Proxy domains: set", data: { free: t.domains.free, premium: t.domains.premium } }),
          r.dispatch({ type: "Timezones: set", data: i, noStorage: e });
      };
    },
    8897: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => s });
      const s = (...e) =>
        "undefined" != typeof browser
          ? browser.runtime.sendMessage.apply(browser.runtime, e)
          : new Promise((t, r) => {
              e.push((e) => {
                chrome.runtime.lastError ? r(chrome.runtime.lastError) : t(e);
              }),
                chrome.runtime.sendMessage.apply(chrome.runtime, e);
            });
    },
    1031: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => s });
      const s = (e, t) => {
        let r = new URL(e),
          s = r.search
            ? Object.fromEntries(
                r.search
                  .replace(/^\?/, "")
                  .split("&")
                  .map((e) => {
                    let [t, r] = e.split("=");
                    return [t, !r || decodeURIComponent(r)];
                  })
              )
            : {};
        return (
          (s = t(s)),
          (r.search = (() => {
            let e = Object.entries(s).map(([e, t]) => encodeURIComponent(e) + "=" + encodeURIComponent(t));
            return e.length ? "?" + e.join("&") : "";
          })()),
          r.toString()
        );
      };
    },
    3280: (e, t, r) => {
      "use strict";
      /**
       * @license
       * Copyright 2017 Google LLC
       * SPDX-License-Identifier: BSD-3-Clause
       */
      var s;
      r.d(t, { Jb: () => _, Ld: () => C, dy: () => A, sY: () => L });
      const o = window,
        n = o.trustedTypes,
        i = n ? n.createPolicy("lit-html", { createHTML: (e) => e }) : void 0,
        a = `lit$${(Math.random() + "").slice(9)}$`,
        c = "?" + a,
        p = `<${c}>`,
        l = document,
        m = (e = "") => l.createComment(e),
        d = (e) => null === e || ("object" != typeof e && "function" != typeof e),
        u = Array.isArray,
        h = (e) => u(e) || "function" == typeof (null == e ? void 0 : e[Symbol.iterator]),
        f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
        g = /-->/g,
        v = />/g,
        y = RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)", "g"),
        b = /'/g,
        w = /"/g,
        S = /^(?:script|style|textarea|title)$/i,
        x =
          (e) =>
          (t, ...r) => ({ _$litType$: e, strings: t, values: r }),
        A = x(1),
        _ = (x(2), Symbol.for("lit-noChange")),
        C = Symbol.for("lit-nothing"),
        E = new WeakMap(),
        k = l.createTreeWalker(l, 129, null, !1),
        O = (e, t) => {
          const r = e.length - 1,
            s = [];
          let o,
            n = 2 === t ? "<svg>" : "",
            c = f;
          for (let t = 0; t < r; t++) {
            const r = e[t];
            let i,
              l,
              m = -1,
              d = 0;
            for (; d < r.length && ((c.lastIndex = d), (l = c.exec(r)), null !== l); )
              (d = c.lastIndex),
                c === f
                  ? "!--" === l[1]
                    ? (c = g)
                    : void 0 !== l[1]
                    ? (c = v)
                    : void 0 !== l[2]
                    ? (S.test(l[2]) && (o = RegExp("</" + l[2], "g")), (c = y))
                    : void 0 !== l[3] && (c = y)
                  : c === y
                  ? ">" === l[0]
                    ? ((c = null != o ? o : f), (m = -1))
                    : void 0 === l[1]
                    ? (m = -2)
                    : ((m = c.lastIndex - l[2].length), (i = l[1]), (c = void 0 === l[3] ? y : '"' === l[3] ? w : b))
                  : c === w || c === b
                  ? (c = y)
                  : c === g || c === v
                  ? (c = f)
                  : ((c = y), (o = void 0));
            const u = c === y && e[t + 1].startsWith("/>") ? " " : "";
            n +=
              c === f
                ? r + p
                : m >= 0
                ? (s.push(i), r.slice(0, m) + "$lit$" + r.slice(m) + a + u)
                : r + a + (-2 === m ? (s.push(void 0), t) : u);
          }
          const l = n + (e[r] || "<?>") + (2 === t ? "</svg>" : "");
          if (!Array.isArray(e) || !e.hasOwnProperty("raw")) throw Error("invalid template strings array");
          return [void 0 !== i ? i.createHTML(l) : l, s];
        };
      class P {
        constructor({ strings: e, _$litType$: t }, r) {
          let s;
          this.parts = [];
          let o = 0,
            i = 0;
          const p = e.length - 1,
            l = this.parts,
            [d, u] = O(e, t);
          if (((this.el = P.createElement(d, r)), (k.currentNode = this.el.content), 2 === t)) {
            const e = this.el.content,
              t = e.firstChild;
            t.remove(), e.append(...t.childNodes);
          }
          for (; null !== (s = k.nextNode()) && l.length < p; ) {
            if (1 === s.nodeType) {
              if (s.hasAttributes()) {
                const e = [];
                for (const t of s.getAttributeNames())
                  if (t.endsWith("$lit$") || t.startsWith(a)) {
                    const r = u[i++];
                    if ((e.push(t), void 0 !== r)) {
                      const e = s.getAttribute(r.toLowerCase() + "$lit$").split(a),
                        t = /([.?@])?(.*)/.exec(r);
                      l.push({
                        type: 1,
                        index: o,
                        name: t[2],
                        strings: e,
                        ctor: "." === t[1] ? R : "?" === t[1] ? D : "@" === t[1] ? N : T
                      });
                    } else l.push({ type: 6, index: o });
                  }
                for (const t of e) s.removeAttribute(t);
              }
              if (S.test(s.tagName)) {
                const e = s.textContent.split(a),
                  t = e.length - 1;
                if (t > 0) {
                  s.textContent = n ? n.emptyScript : "";
                  for (let r = 0; r < t; r++) s.append(e[r], m()), k.nextNode(), l.push({ type: 2, index: ++o });
                  s.append(e[t], m());
                }
              }
            } else if (8 === s.nodeType)
              if (s.data === c) l.push({ type: 2, index: o });
              else {
                let e = -1;
                for (; -1 !== (e = s.data.indexOf(a, e + 1)); ) l.push({ type: 7, index: o }), (e += a.length - 1);
              }
            o++;
          }
        }
        static createElement(e, t) {
          const r = l.createElement("template");
          return (r.innerHTML = e), r;
        }
      }
      function j(e, t, r = e, s) {
        var o, n, i, a;
        if (t === _) return t;
        let c = void 0 !== s ? (null === (o = r._$Co) || void 0 === o ? void 0 : o[s]) : r._$Cl;
        const p = d(t) ? void 0 : t._$litDirective$;
        return (
          (null == c ? void 0 : c.constructor) !== p &&
            (null === (n = null == c ? void 0 : c._$AO) || void 0 === n || n.call(c, !1),
            void 0 === p ? (c = void 0) : ((c = new p(e)), c._$AT(e, r, s)),
            void 0 !== s ? ((null !== (i = (a = r)._$Co) && void 0 !== i ? i : (a._$Co = []))[s] = c) : (r._$Cl = c)),
          void 0 !== c && (t = j(e, c._$AS(e, t.values), c, s)),
          t
        );
      }
      class $ {
        constructor(e, t) {
          (this.u = []), (this._$AN = void 0), (this._$AD = e), (this._$AM = t);
        }
        get parentNode() {
          return this._$AM.parentNode;
        }
        get _$AU() {
          return this._$AM._$AU;
        }
        v(e) {
          var t;
          const {
              el: { content: r },
              parts: s
            } = this._$AD,
            o = (null !== (t = null == e ? void 0 : e.creationScope) && void 0 !== t ? t : l).importNode(r, !0);
          k.currentNode = o;
          let n = k.nextNode(),
            i = 0,
            a = 0,
            c = s[0];
          for (; void 0 !== c; ) {
            if (i === c.index) {
              let t;
              2 === c.type
                ? (t = new I(n, n.nextSibling, this, e))
                : 1 === c.type
                ? (t = new c.ctor(n, c.name, c.strings, this, e))
                : 6 === c.type && (t = new U(n, this, e)),
                this.u.push(t),
                (c = s[++a]);
            }
            i !== (null == c ? void 0 : c.index) && ((n = k.nextNode()), i++);
          }
          return o;
        }
        p(e) {
          let t = 0;
          for (const r of this.u)
            void 0 !== r && (void 0 !== r.strings ? (r._$AI(e, r, t), (t += r.strings.length - 2)) : r._$AI(e[t])), t++;
        }
      }
      class I {
        constructor(e, t, r, s) {
          var o;
          (this.type = 2),
            (this._$AH = C),
            (this._$AN = void 0),
            (this._$AA = e),
            (this._$AB = t),
            (this._$AM = r),
            (this.options = s),
            (this._$Cm = null === (o = null == s ? void 0 : s.isConnected) || void 0 === o || o);
        }
        get _$AU() {
          var e, t;
          return null !== (t = null === (e = this._$AM) || void 0 === e ? void 0 : e._$AU) && void 0 !== t ? t : this._$Cm;
        }
        get parentNode() {
          let e = this._$AA.parentNode;
          const t = this._$AM;
          return void 0 !== t && 11 === e.nodeType && (e = t.parentNode), e;
        }
        get startNode() {
          return this._$AA;
        }
        get endNode() {
          return this._$AB;
        }
        _$AI(e, t = this) {
          (e = j(this, e, t)),
            d(e)
              ? e === C || null == e || "" === e
                ? (this._$AH !== C && this._$AR(), (this._$AH = C))
                : e !== this._$AH && e !== _ && this.g(e)
              : void 0 !== e._$litType$
              ? this.$(e)
              : void 0 !== e.nodeType
              ? this.T(e)
              : h(e)
              ? this.k(e)
              : this.g(e);
        }
        O(e, t = this._$AB) {
          return this._$AA.parentNode.insertBefore(e, t);
        }
        T(e) {
          this._$AH !== e && (this._$AR(), (this._$AH = this.O(e)));
        }
        g(e) {
          this._$AH !== C && d(this._$AH) ? (this._$AA.nextSibling.data = e) : this.T(l.createTextNode(e)), (this._$AH = e);
        }
        $(e) {
          var t;
          const { values: r, _$litType$: s } = e,
            o = "number" == typeof s ? this._$AC(e) : (void 0 === s.el && (s.el = P.createElement(s.h, this.options)), s);
          if ((null === (t = this._$AH) || void 0 === t ? void 0 : t._$AD) === o) this._$AH.p(r);
          else {
            const e = new $(o, this),
              t = e.v(this.options);
            e.p(r), this.T(t), (this._$AH = e);
          }
        }
        _$AC(e) {
          let t = E.get(e.strings);
          return void 0 === t && E.set(e.strings, (t = new P(e))), t;
        }
        k(e) {
          u(this._$AH) || ((this._$AH = []), this._$AR());
          const t = this._$AH;
          let r,
            s = 0;
          for (const o of e)
            s === t.length ? t.push((r = new I(this.O(m()), this.O(m()), this, this.options))) : (r = t[s]), r._$AI(o), s++;
          s < t.length && (this._$AR(r && r._$AB.nextSibling, s), (t.length = s));
        }
        _$AR(e = this._$AA.nextSibling, t) {
          var r;
          for (null === (r = this._$AP) || void 0 === r || r.call(this, !1, !0, t); e && e !== this._$AB; ) {
            const t = e.nextSibling;
            e.remove(), (e = t);
          }
        }
        setConnected(e) {
          var t;
          void 0 === this._$AM && ((this._$Cm = e), null === (t = this._$AP) || void 0 === t || t.call(this, e));
        }
      }
      class T {
        constructor(e, t, r, s, o) {
          (this.type = 1),
            (this._$AH = C),
            (this._$AN = void 0),
            (this.element = e),
            (this.name = t),
            (this._$AM = s),
            (this.options = o),
            r.length > 2 || "" !== r[0] || "" !== r[1]
              ? ((this._$AH = Array(r.length - 1).fill(new String())), (this.strings = r))
              : (this._$AH = C);
        }
        get tagName() {
          return this.element.tagName;
        }
        get _$AU() {
          return this._$AM._$AU;
        }
        _$AI(e, t = this, r, s) {
          const o = this.strings;
          let n = !1;
          if (void 0 === o) (e = j(this, e, t, 0)), (n = !d(e) || (e !== this._$AH && e !== _)), n && (this._$AH = e);
          else {
            const s = e;
            let i, a;
            for (e = o[0], i = 0; i < o.length - 1; i++)
              (a = j(this, s[r + i], t, i)),
                a === _ && (a = this._$AH[i]),
                n || (n = !d(a) || a !== this._$AH[i]),
                a === C ? (e = C) : e !== C && (e += (null != a ? a : "") + o[i + 1]),
                (this._$AH[i] = a);
          }
          n && !s && this.j(e);
        }
        j(e) {
          e === C ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != e ? e : "");
        }
      }
      class R extends T {
        constructor() {
          super(...arguments), (this.type = 3);
        }
        j(e) {
          this.element[this.name] = e === C ? void 0 : e;
        }
      }
      const Z = n ? n.emptyScript : "";
      class D extends T {
        constructor() {
          super(...arguments), (this.type = 4);
        }
        j(e) {
          e && e !== C ? this.element.setAttribute(this.name, Z) : this.element.removeAttribute(this.name);
        }
      }
      class N extends T {
        constructor(e, t, r, s, o) {
          super(e, t, r, s, o), (this.type = 5);
        }
        _$AI(e, t = this) {
          var r;
          if ((e = null !== (r = j(this, e, t, 0)) && void 0 !== r ? r : C) === _) return;
          const s = this._$AH,
            o = (e === C && s !== C) || e.capture !== s.capture || e.once !== s.once || e.passive !== s.passive,
            n = e !== C && (s === C || o);
          o && this.element.removeEventListener(this.name, this, s),
            n && this.element.addEventListener(this.name, this, e),
            (this._$AH = e);
        }
        handleEvent(e) {
          var t, r;
          "function" == typeof this._$AH
            ? this._$AH.call(
                null !== (r = null === (t = this.options) || void 0 === t ? void 0 : t.host) && void 0 !== r ? r : this.element,
                e
              )
            : this._$AH.handleEvent(e);
        }
      }
      class U {
        constructor(e, t, r) {
          (this.element = e), (this.type = 6), (this._$AN = void 0), (this._$AM = t), (this.options = r);
        }
        get _$AU() {
          return this._$AM._$AU;
        }
        _$AI(e) {
          j(this, e);
        }
      }
      const M = o.litHtmlPolyfillSupport;
      null == M || M(P, I), (null !== (s = o.litHtmlVersions) && void 0 !== s ? s : (o.litHtmlVersions = [])).push("2.6.1");
      const L = (e, t, r) => {
        var s, o;
        const n = null !== (s = null == r ? void 0 : r.renderBefore) && void 0 !== s ? s : t;
        let i = n._$litPart$;
        if (void 0 === i) {
          const e = null !== (o = null == r ? void 0 : r.renderBefore) && void 0 !== o ? o : null;
          n._$litPart$ = i = new I(t.insertBefore(m(), e), e, void 0, null != r ? r : {});
        }
        return i._$AI(e), i;
      };
    },
    7534: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => a });
      var s = r(3280);
      /**
       * @license
       * Copyright 2017 Google LLC
       * SPDX-License-Identifier: BSD-3-Clause
       */
      const o = 2;
      class n {
        constructor(e) {}
        get _$AU() {
          return this._$AM._$AU;
        }
        _$AT(e, t, r) {
          (this._$Ct = e), (this._$AM = t), (this._$Ci = r);
        }
        _$AS(e, t) {
          return this.update(e, t);
        }
        update(e, t) {
          return this.render(...t);
        }
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       * SPDX-License-Identifier: BSD-3-Clause
       */
      class i extends n {
        constructor(e) {
          if ((super(e), (this.it = s.Ld), e.type !== o))
            throw Error(this.constructor.directiveName + "() can only be used in child bindings");
        }
        render(e) {
          if (e === s.Ld || null == e) return (this._t = void 0), (this.it = e);
          if (e === s.Jb) return e;
          if ("string" != typeof e) throw Error(this.constructor.directiveName + "() called with a non-string value");
          if (e === this.it) return this._t;
          this.it = e;
          const t = [e];
          return (t.raw = t), (this._t = { _$litType$: this.constructor.resultType, strings: t, values: [] });
        }
      }
      (i.directiveName = "unsafeHTML"), (i.resultType = 1);
      const a = (
        (e) =>
        (...t) => ({ _$litDirective$: e, values: t })
      )(i);
    },
    8669: (e, t, r) => {
      "use strict";
      r.d(t, { dy: () => s.dy, sY: () => s.sY });
      var s = r(3280);
    },
    7584: (e, t, r) => {
      "use strict";
      r.d(t, { oi: () => S, dy: () => w.dy });
      /**
       * @license
       * Copyright 2019 Google LLC
       * SPDX-License-Identifier: BSD-3-Clause
       */
      const s = window,
        o =
          s.ShadowRoot &&
          (void 0 === s.ShadyCSS || s.ShadyCSS.nativeShadow) &&
          "adoptedStyleSheets" in Document.prototype &&
          "replace" in CSSStyleSheet.prototype,
        n = Symbol(),
        i = new WeakMap();
      class a {
        constructor(e, t, r) {
          if (((this._$cssResult$ = !0), r !== n)) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
          (this.cssText = e), (this.t = t);
        }
        get styleSheet() {
          let e = this.o;
          const t = this.t;
          if (o && void 0 === e) {
            const r = void 0 !== t && 1 === t.length;
            r && (e = i.get(t)), void 0 === e && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), r && i.set(t, e));
          }
          return e;
        }
        toString() {
          return this.cssText;
        }
      }
      const c = o
        ? (e) => e
        : (e) =>
            e instanceof CSSStyleSheet
              ? ((e) => {
                  let t = "";
                  for (const r of e.cssRules) t += r.cssText;
                  return ((e) => new a("string" == typeof e ? e : e + "", void 0, n))(t);
                })(e)
              : e;
      /**
       * @license
       * Copyright 2017 Google LLC
       * SPDX-License-Identifier: BSD-3-Clause
       */
      var p;
      const l = window,
        m = l.trustedTypes,
        d = m ? m.emptyScript : "",
        u = l.reactiveElementPolyfillSupport,
        h = {
          toAttribute(e, t) {
            switch (t) {
              case Boolean:
                e = e ? d : null;
                break;
              case Object:
              case Array:
                e = null == e ? e : JSON.stringify(e);
            }
            return e;
          },
          fromAttribute(e, t) {
            let r = e;
            switch (t) {
              case Boolean:
                r = null !== e;
                break;
              case Number:
                r = null === e ? null : Number(e);
                break;
              case Object:
              case Array:
                try {
                  r = JSON.parse(e);
                } catch (e) {
                  r = null;
                }
            }
            return r;
          }
        },
        f = (e, t) => t !== e && (t == t || e == e),
        g = { attribute: !0, type: String, converter: h, reflect: !1, hasChanged: f };
      class v extends HTMLElement {
        constructor() {
          super(), (this._$Ei = new Map()), (this.isUpdatePending = !1), (this.hasUpdated = !1), (this._$El = null), this.u();
        }
        static addInitializer(e) {
          var t;
          this.finalize(), (null !== (t = this.h) && void 0 !== t ? t : (this.h = [])).push(e);
        }
        static get observedAttributes() {
          this.finalize();
          const e = [];
          return (
            this.elementProperties.forEach((t, r) => {
              const s = this._$Ep(r, t);
              void 0 !== s && (this._$Ev.set(s, r), e.push(s));
            }),
            e
          );
        }
        static createProperty(e, t = g) {
          if (
            (t.state && (t.attribute = !1),
            this.finalize(),
            this.elementProperties.set(e, t),
            !t.noAccessor && !this.prototype.hasOwnProperty(e))
          ) {
            const r = "symbol" == typeof e ? Symbol() : "__" + e,
              s = this.getPropertyDescriptor(e, r, t);
            void 0 !== s && Object.defineProperty(this.prototype, e, s);
          }
        }
        static getPropertyDescriptor(e, t, r) {
          return {
            get() {
              return this[t];
            },
            set(s) {
              const o = this[e];
              (this[t] = s), this.requestUpdate(e, o, r);
            },
            configurable: !0,
            enumerable: !0
          };
        }
        static getPropertyOptions(e) {
          return this.elementProperties.get(e) || g;
        }
        static finalize() {
          if (this.hasOwnProperty("finalized")) return !1;
          this.finalized = !0;
          const e = Object.getPrototypeOf(this);
          if (
            (e.finalize(),
            void 0 !== e.h && (this.h = [...e.h]),
            (this.elementProperties = new Map(e.elementProperties)),
            (this._$Ev = new Map()),
            this.hasOwnProperty("properties"))
          ) {
            const e = this.properties,
              t = [...Object.getOwnPropertyNames(e), ...Object.getOwnPropertySymbols(e)];
            for (const r of t) this.createProperty(r, e[r]);
          }
          return (this.elementStyles = this.finalizeStyles(this.styles)), !0;
        }
        static finalizeStyles(e) {
          const t = [];
          if (Array.isArray(e)) {
            const r = new Set(e.flat(1 / 0).reverse());
            for (const e of r) t.unshift(c(e));
          } else void 0 !== e && t.push(c(e));
          return t;
        }
        static _$Ep(e, t) {
          const r = t.attribute;
          return !1 === r ? void 0 : "string" == typeof r ? r : "string" == typeof e ? e.toLowerCase() : void 0;
        }
        u() {
          var e;
          (this._$E_ = new Promise((e) => (this.enableUpdating = e))),
            (this._$AL = new Map()),
            this._$Eg(),
            this.requestUpdate(),
            null === (e = this.constructor.h) || void 0 === e || e.forEach((e) => e(this));
        }
        addController(e) {
          var t, r;
          (null !== (t = this._$ES) && void 0 !== t ? t : (this._$ES = [])).push(e),
            void 0 !== this.renderRoot && this.isConnected && (null === (r = e.hostConnected) || void 0 === r || r.call(e));
        }
        removeController(e) {
          var t;
          null === (t = this._$ES) || void 0 === t || t.splice(this._$ES.indexOf(e) >>> 0, 1);
        }
        _$Eg() {
          this.constructor.elementProperties.forEach((e, t) => {
            this.hasOwnProperty(t) && (this._$Ei.set(t, this[t]), delete this[t]);
          });
        }
        createRenderRoot() {
          var e;
          const t = null !== (e = this.shadowRoot) && void 0 !== e ? e : this.attachShadow(this.constructor.shadowRootOptions);
          return (
            ((e, t) => {
              o
                ? (e.adoptedStyleSheets = t.map((e) => (e instanceof CSSStyleSheet ? e : e.styleSheet)))
                : t.forEach((t) => {
                    const r = document.createElement("style"),
                      o = s.litNonce;
                    void 0 !== o && r.setAttribute("nonce", o), (r.textContent = t.cssText), e.appendChild(r);
                  });
            })(t, this.constructor.elementStyles),
            t
          );
        }
        connectedCallback() {
          var e;
          void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()),
            this.enableUpdating(!0),
            null === (e = this._$ES) ||
              void 0 === e ||
              e.forEach((e) => {
                var t;
                return null === (t = e.hostConnected) || void 0 === t ? void 0 : t.call(e);
              });
        }
        enableUpdating(e) {}
        disconnectedCallback() {
          var e;
          null === (e = this._$ES) ||
            void 0 === e ||
            e.forEach((e) => {
              var t;
              return null === (t = e.hostDisconnected) || void 0 === t ? void 0 : t.call(e);
            });
        }
        attributeChangedCallback(e, t, r) {
          this._$AK(e, r);
        }
        _$EO(e, t, r = g) {
          var s;
          const o = this.constructor._$Ep(e, r);
          if (void 0 !== o && !0 === r.reflect) {
            const n = (void 0 !== (null === (s = r.converter) || void 0 === s ? void 0 : s.toAttribute) ? r.converter : h).toAttribute(
              t,
              r.type
            );
            (this._$El = e), null == n ? this.removeAttribute(o) : this.setAttribute(o, n), (this._$El = null);
          }
        }
        _$AK(e, t) {
          var r;
          const s = this.constructor,
            o = s._$Ev.get(e);
          if (void 0 !== o && this._$El !== o) {
            const e = s.getPropertyOptions(o),
              n =
                "function" == typeof e.converter
                  ? { fromAttribute: e.converter }
                  : void 0 !== (null === (r = e.converter) || void 0 === r ? void 0 : r.fromAttribute)
                  ? e.converter
                  : h;
            (this._$El = o), (this[o] = n.fromAttribute(t, e.type)), (this._$El = null);
          }
        }
        requestUpdate(e, t, r) {
          let s = !0;
          void 0 !== e &&
            (((r = r || this.constructor.getPropertyOptions(e)).hasChanged || f)(this[e], t)
              ? (this._$AL.has(e) || this._$AL.set(e, t),
                !0 === r.reflect && this._$El !== e && (void 0 === this._$EC && (this._$EC = new Map()), this._$EC.set(e, r)))
              : (s = !1)),
            !this.isUpdatePending && s && (this._$E_ = this._$Ej());
        }
        async _$Ej() {
          this.isUpdatePending = !0;
          try {
            await this._$E_;
          } catch (e) {
            Promise.reject(e);
          }
          const e = this.scheduleUpdate();
          return null != e && (await e), !this.isUpdatePending;
        }
        scheduleUpdate() {
          return this.performUpdate();
        }
        performUpdate() {
          var e;
          if (!this.isUpdatePending) return;
          this.hasUpdated, this._$Ei && (this._$Ei.forEach((e, t) => (this[t] = e)), (this._$Ei = void 0));
          let t = !1;
          const r = this._$AL;
          try {
            (t = this.shouldUpdate(r)),
              t
                ? (this.willUpdate(r),
                  null === (e = this._$ES) ||
                    void 0 === e ||
                    e.forEach((e) => {
                      var t;
                      return null === (t = e.hostUpdate) || void 0 === t ? void 0 : t.call(e);
                    }),
                  this.update(r))
                : this._$Ek();
          } catch (e) {
            throw ((t = !1), this._$Ek(), e);
          }
          t && this._$AE(r);
        }
        willUpdate(e) {}
        _$AE(e) {
          var t;
          null === (t = this._$ES) ||
            void 0 === t ||
            t.forEach((e) => {
              var t;
              return null === (t = e.hostUpdated) || void 0 === t ? void 0 : t.call(e);
            }),
            this.hasUpdated || ((this.hasUpdated = !0), this.firstUpdated(e)),
            this.updated(e);
        }
        _$Ek() {
          (this._$AL = new Map()), (this.isUpdatePending = !1);
        }
        get updateComplete() {
          return this.getUpdateComplete();
        }
        getUpdateComplete() {
          return this._$E_;
        }
        shouldUpdate(e) {
          return !0;
        }
        update(e) {
          void 0 !== this._$EC && (this._$EC.forEach((e, t) => this._$EO(t, this[t], e)), (this._$EC = void 0)), this._$Ek();
        }
        updated(e) {}
        firstUpdated(e) {}
      }
      (v.finalized = !0),
        (v.elementProperties = new Map()),
        (v.elementStyles = []),
        (v.shadowRootOptions = { mode: "open" }),
        null == u || u({ ReactiveElement: v }),
        (null !== (p = l.reactiveElementVersions) && void 0 !== p ? p : (l.reactiveElementVersions = [])).push("1.6.1");
      var y,
        b,
        w = r(3280);
      class S extends v {
        constructor() {
          super(...arguments), (this.renderOptions = { host: this }), (this._$Do = void 0);
        }
        createRenderRoot() {
          var e, t;
          const r = super.createRenderRoot();
          return (null !== (e = (t = this.renderOptions).renderBefore) && void 0 !== e) || (t.renderBefore = r.firstChild), r;
        }
        update(e) {
          const t = this.render();
          this.hasUpdated || (this.renderOptions.isConnected = this.isConnected),
            super.update(e),
            (this._$Do = (0, w.sY)(t, this.renderRoot, this.renderOptions));
        }
        connectedCallback() {
          var e;
          super.connectedCallback(), null === (e = this._$Do) || void 0 === e || e.setConnected(!0);
        }
        disconnectedCallback() {
          var e;
          super.disconnectedCallback(), null === (e = this._$Do) || void 0 === e || e.setConnected(!1);
        }
        render() {
          return w.Jb;
        }
      }
      (S.finalized = !0),
        (S._$litElement$ = !0),
        null === (y = globalThis.litElementHydrateSupport) || void 0 === y || y.call(globalThis, { LitElement: S });
      const x = globalThis.litElementPolyfillSupport;
      null == x || x({ LitElement: S });
      (null !== (b = globalThis.litElementVersions) && void 0 !== b ? b : (globalThis.litElementVersions = [])).push("3.2.2");
    },
    2857: (e) => {
      "use strict";
      e.exports = JSON.parse(
        '["https://d34u6hk73vgwqs.cloudfront.net/","https://a703.l461.r761.fastcloudcdn.net/api/","https://ca901.l503.r843.fastcloudcdn.net/"]'
      );
    }
  }
]);
