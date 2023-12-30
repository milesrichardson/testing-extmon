(() => {
  var e,
    t = {
      9750: (e, t, r) => {
        "use strict";
        var n = r(6695),
          i = r.n(n),
          o = r(6811),
          a = r(8096),
          s = r(5601);
        const c = {
          IDTYPE: { MSACID: "MSACID", ORGIDPUID: "OrgIdPUID" },
          ACTIVITY: {
            AUTHENTICATION: { NAME: "authentication" },
            AUTHORIZATION: { NAME: "authorization" },
            NOTIFICATION: { NAME: "notification" },
            TELEMETRY: { NAME: "telemetry" },
            USERINFO_AVAILABLE: { NAME: "userInfoAvailable" },
            SSO: { NAME: "sso" },
            LOGOUT: { NAME: "logout" },
            REQUEST_TOKEN: { NAME: "requestToken" },
            LOG: { NAME: "log" }
          },
          APPINFO_NAME: "OfficeOnlineExtension",
          TELEM_PREFIX: "Office.Taos.M365Extension",
          FILE: {
            APPLICATION_IMAGE_PATH: {
              excel: "assets/excel_doc.png",
              onenote: "assets/onenote_doc.png",
              powerpoint: "assets/powerpoint_doc.png",
              unknown: "assets/generic_doc.png",
              word: "assets/word_doc.png"
            },
            APPLICATION_LABEL: {
              excel: "ExcelOnlineAppName",
              onenote: "OneNoteOnlineAppName",
              powerpoint: "PowerPointOnlineAppName",
              unknown: "OfficeOnlineAppName",
              word: "WordOnlineAppName"
            },
            ERROR: {
              FILE_SIZE_MAX_EXCEEDED: "fileSizeMaxExceeded",
              LOAD_FROM_PATH: "loadFromPath",
              UNSUPPORTED_FILE_TYPE: "unsupportedFileType"
            },
            MAX_SIZE_BYTE_LIMIT: 4194304,
            OFFICE_APP_FILE_ASSOCIATIONS: { EXCEL: "excel", ONENOTE: "onenote", POWERPOINT: "powerpoint", WORD: "word" },
            OFFICE_MIME_TYPES: {
              "application/msword": "word",
              "application/vnd.openxmlformats-officedocument.wordprocessingml.document": "word",
              "application/vnd.openxmlformats-officedocument.wordprocessingml.template": "word",
              "application/vnd.oasis.opendocument.text": "word",
              "application/vnd.ms-powerpoint": "powerpoint",
              "application/vnd.openxmlformats-officedocument.presentationml.presentation": "powerpoint",
              "application/vnd.openxmlformats-officedocument.presentationml.slideshow": "powerpoint",
              "application/vnd.oasis.opendocument.presentation": "powerpoint",
              "application/vnd.ms-excel": "excel",
              "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": "excel",
              "application/vnd.ms-excel.sheet.binary.macroEnabled.12": "excel",
              "application/vnd.ms-excel.sheet.macroEnabled.12": "excel",
              "application/vnd.oasis.opendocument.spreadsheet": "excel"
            },
            ORIGIN: { HTML5: "html5", LOCAL_PATH: "local_path" },
            SUPPORTED_APPLICATIONS: ["Word", "Excel", "PowerPoint", "OneNote"],
            SUPPORTED_FILE_TYPES: {
              doc: "word",
              dot: "word",
              docx: "word",
              dotx: "word",
              odt: "word",
              ppt: "powerpoint",
              pot: "powerpoint",
              pps: "powerpoint",
              pptx: "powerpoint",
              ppsx: "powerpoint",
              odp: "powerpoint",
              xlsx: "excel",
              xlsm: "excel",
              xlsb: "excel",
              ods: "excel",
              notebook: "onenote"
            }
          },
          JQUERY: {
            EVENT_ID: {
              KEYPRESS: { ENTER: 13, ARROWLEFT: 37, ARROWUP: 38, ARROWRIGHT: 39, ARROWDOWN: 40 },
              MOUSEDOWN: { LEFT_BUTTON_CLICK: 1 }
            }
          },
          LINKS: {
            OFFICE_URL: "https://portal.office.com/home",
            PROGRESSPAGE_URL: "https://onedrive.live.com",
            SETTINGS_URL: "chrome://extensions",
            SIGNUP: "https://onedrive.live.com/about",
            UNINSTALL: "https://contentstorage.osi.office.net/officeonlineextensionuninstall/uninstall.html",
            OFFICE_HOME_URL: "https://go.microsoft.com/fwlink/?linkid=859986",
            MY_CONTENT_URL: "https://go.microsoft.com/fwlink/?linkid=2227960",
            APPS_MODULE_URL: "https://go.microsoft.com/fwlink/?linkid=2238237",
            OFFICE_HOME_DEV_URL: "https://go.microsoft.com/fwlink/?linkid=860665",
            SUPPORT_URL: "https://aka.ms/officeextsignin",
            MYACCOUNT_MSA_URL: "https://go.microsoft.com/fwlink/?LinkId=823747",
            MYACCOUNT_O365_URL: "https://go.microsoft.com/fwlink/?LinkId=824642",
            APP: {
              WORD: function () {
                return `https://office.live.com/start/word.aspx?auth=${arguments[0]}&WT.mc_id=Chrome_OfficeApp`;
              },
              EXCEL: function () {
                return `https://office.live.com/start/excel.aspx?auth=${arguments[0]}&WT.mc_id=Chrome_OfficeApp`;
              },
              POWERPOINT: function () {
                return `https://office.live.com/start/powerpoint.aspx?auth=${arguments[0]}&WT.mc_id=Chrome_OfficeApp`;
              },
              ONENOTE: function () {
                return `https://www.onenote.com/notebooks?auth=${arguments[0]}&WT.mc_id=Chrome_OfficeApp`;
              },
              SWAY: function () {
                return `https://www.sway.com/?auth_pvr=${arguments[0]}&auth_upn=${arguments[1]}&WT.mc_id=Chrome_OfficeApp`;
              },
              SWAY_DEFAULT: "https://www.sway.com/?WT.mc_id=Chrome_OfficeApp",
              ONEDRIVE: "https://onedrive.live.com",
              TEAMS: "https://teams.microsoft.com",
              SHAREPOINT_DEFAULT: "https://products.office.com/sharepoint",
              OUTLOOK_DEFAULT: "https://outlook.com",
              OUTLOOK_O365: "https://outlook.office365.com"
            }
          },
          MENU_VIEWMODE: { NONE: 0, NEW: 1, OPEN: 2, ACCOUNT: 3, SETTINGS: 4 },
          OAUTH: {
            ACCESS_TOKEN: "access_token",
            AUTH_CODE: "authorization_code",
            CODE: "code",
            EXPIRES_ON: "expires_on",
            REFRESH_TOKEN: "refresh_token",
            SERVICE_ENDPOINT: "service_endpoint",
            SERVICE_ID: "service_id"
          },
          O365CONFIG: {
            CLIENT_ID: "d08f258a-c5dd-4a8f-8afc-9321d67c767a",
            CLIENT_SECRET: "00000000000000000000000000000000",
            GRAPH_RESOURCE: "https://graph.microsoft.com",
            ENDPOINTS: { "officeapps.live.com": "https://officeapps.live.com", "graph.microsoft.com": "https://graph.microsoft.com" },
            INSTANCE: "https://login.windows.net/common/oauth2/",
            LOGOUT_URI: "https://login.microsoftonline.com/logout.srf",
            MRU_URL: "https://ocws.officeapps.live.com/ocs/docs/recent/",
            PHOTO_URL: "https://graph.microsoft.com/v1.0/me/photo/$value",
            ONEDRIVE_URL: "https://graph.microsoft.com/v1.0/me/drive/root",
            SHAREPOINT_URL: "https://graph.microsoft.com/v1.0/sites/root",
            REDIRECT_URI: "https://login.microsoftonline.com/login.srf",
            UPLOAD_URL: "https://graph.microsoft.com/v1.0/me/drive/root:/",
            FEDERATED_URL: "https://login.microsoftonline.com/getuserrealm.srf"
          },
          MSACONFIG: {
            CLIENT_ID: "000000004016DA34",
            CLIENT_SECRET: "00000000000000000000000000000000",
            INSTANCE: "https://login.live.com/oauth20_authorize.srf",
            LOGOUT_URI: "https://login.live.com/oauth20_logout.srf",
            ONEDRIVE_ITEMS_URL: "https://api.onedrive.com/v1.0/drive/items/",
            PHOTO_URL: "https://apis.live.net/v5.0/me/picture",
            REDIRECT_URI: "https://login.live.com/oauth20_desktop.srf",
            SCOPE: "wl.basic+wl.emails+wl.signin+wl.offline_access+onedrive.readwrite+wl.skydrive",
            URL: "https://login.live.com/oauth20_token.srf",
            USERINFO_URL: "https://apis.live.net/v5.0/me"
          },
          NOTIFICATION: {
            FILEACCESS: { id: "fileAccess", priority: 0, type: "basic", message: "NotificationFileAccess" },
            FILE_MAX_SIZE_BYTE_LIMIT_REACHED: {
              id: "fileMaxSizeByteLimitReached",
              priority: 2,
              type: "basic",
              message: "NotificationFileMaxSizeByteLimitReached"
            },
            FILE_UPLOAD_FAILURE_GENERIC: {
              id: "fileUploadFailureGeneric",
              priority: 2,
              type: "basic",
              message: "NotificationFileUploadFailureGeneric"
            },
            FILE_UPLOAD_FAILURE_SERVER: {
              id: "fileUploadFailureServer",
              priority: 2,
              type: "basic",
              message: "NotificationFileUploadFailureServer"
            },
            FILE_UPLOAD_FAILURE_UNSUPPORTED_MEDIA: {
              id: "fileUploadFailureUnsupportedMedia",
              priority: 2,
              type: "basic",
              message: "NotificationFileUploadFailureUnsupportedMedia"
            },
            FILE_UPLOAD_IN_PROGRESS: {
              id: "fileUploadInProgress",
              priority: 0,
              type: "basic",
              message: "NotificationFileUploadInProgress"
            },
            SETDEFAULT: { id: "setDefault", priority: 0, type: "basic", message: "NotificationSetDefault" },
            AUTOSAVE: { id: "autoSave", priority: 0, type: "basic", buttons: [{ title: "NotificationAutoSaveButton" }] },
            AUTOSAVETOONEDRIVE: "NotificationAutoSaveToOneDrive",
            AUTOSAVETOSHAREPOINT: "NotificationAutoSaveToSharePoint",
            NOTSIGNEDIN: { id: "notSignedIn", priority: 2, type: "basic", message: "NotificationNotSignedIn" },
            UNSUPPORTEDFILETYPE: { id: "unsupportedFileType", priority: 2, type: "basic", message: "NotificationUnsupportedFileType" },
            INVALIDSUBSCRIPTION: { id: "invalidSubscription", priority: 2, type: "basic", message: "NotificationInvalidSubscription" },
            WEBDOCREDIRECT: {
              id: "webDocRedirect",
              priority: 0,
              type: "basic",
              message: "NotificationWebDocRedirect",
              buttons: [{ title: "NotificationWebDocRedirectButton" }]
            }
          },
          ONEDRIVE: {
            DISPLAY_URL: "https://onedrive.live.com/view.aspx?cid=",
            INSTANCE: "https://api.onedrive.com/v1.0",
            QUERY_OPTION: "?@name.conflictBehavior=rename"
          },
          RECENTS: {
            LIST_LENGTH_MSA: 3,
            LIST_LENGTH_O365: 3,
            FILTER: "?apps=powerpoint,word,excel,onenote&sort=date",
            ONEDRIVE_ENDPOINT: "https://api.onedrive.com/v2.1/drive/recent",
            DISPLAY_PANEL: { ERROR: 0, LIST: 1, LOADING: 2, NO_DOCS: 3, NONE: 4 },
            ERROR: { CANCELLED: 0, GENERIC: 1, NO_DOCS_FOUND: 2, UNSUPPORTED_USER_TYPE: 3 }
          },
          SIGNINSTATUS: { UNKNOWN: -1, NONE: 0, HASREFRESHTOKEN: 1, SIGNEDIN: 2 },
          TELEMETRY: {
            COMMAND: { SET_DISABLED: "setDisabledTelemetry", TRACK_TRACE: "trackTrace", TRACK_EVENT: "trackEvent" },
            ENABLED_SETTING_STORAGE_KEY: "telemetry_enabled",
            EVENT_PREFIX: "OO_CHROME_",
            PII_TYPE: { IDENTITY: 10 }
          },
          USER_TYPE: { MSA: "msa", O365: "aad", NONE: "none" },
          USER_SERVICE_TYPE: { MSA: "msaUserService", O365: "o365UserService", MSID: "msidUserService", NONE: "noneUserService" },
          USER_DATA_BOUNDARY: { NONE: "none", EU: "eu" },
          TIMEOUT: { DEFAULT_REQUEST: 1e4, USER_INFO_LOOKUP: 5e3, USER_INFO_LOOKUP_TEST: 50 },
          COPY_PASTE: {
            TEST: s.s.testCommand,
            PASTE: s.s.pasteCommand,
            GET_CLIPBOARD_DATA: s.s.getClipboardDataCommand,
            GET_AVAILABLE_COMMANDS: s.s.getAvailableCommandsCommand
          },
          ERROR_RETRIES: { HTTP_REQUEST: 3 },
          BROWSER_ICON: { DEFAULT: "../assets/icon_20.png", INACTIVE: "../assets/icon_inactive_20.png" },
          SSO: {
            MESSAGE_CHANNEL: "com.microsoft.browsercore",
            RESPONSE_STATUS_SUCCESS: "Success",
            RESPONSE_STATUS_FAIL: "Fail",
            RESPONSE_CODE_NO_SUPPORT: "NoSupport",
            RESPONSE_CODE_INVALID: -2147186943
          }
        };
        var u = r(6076);
        var d = r(8668);
        i()
          .module("app.diagnostics", [])
          .service("telemetry", [
            "$injector",
            "ariaTelemetry",
            "otelTelemetry",
            function (e, t, r) {
              var n = [r],
                s = async function (t) {
                  var r = e.get("userService"),
                    n = e.get("storage");
                  o.default.isUndefinedOrNull(t) && (t = {}),
                    (t.BrowserSessionId = window.sessionStorage.getItem("browserSessionId")),
                    await n.get("sessionId").then(function (e) {
                      t.Session_Id = e.sessionId;
                    }),
                    (t.pii = []);
                  var i = o.default.getManifest();
                  i && (t.AppVersion = i.version);
                  var s = await r.getUserDataBoundary();
                  t.DataBoundary = s.dataBoundary;
                  var d = a.default.i18n.getUILanguage();
                  o.default.isNotUndefinedOrNull(d) && (t.Language = d), (t["AppInfo.Name"] = c.APPINFO_NAME);
                  var l = await r.getUserType(),
                    f = u.AWTLogManager.getSemanticContext();
                  if (l === c.USER_TYPE.NONE) return f.setUserId("", "", ""), t;
                  var p = await r.getUserInfo(l);
                  return o.default.isUndefinedOrNull(p)
                    ? (f.setUserId("", "", ""), t)
                    : (o.default.isNotUndefinedOrNull(p.cid) && ((t.User_PrimaryIdentityHash = p.cid), f.setUserId(p.cid)),
                      o.default.isNotUndefinedOrNull(p.features) && (t.ExperimentFeatures = p.features.toString()),
                      o.default.isNotUndefinedOrNull(p.puid) &&
                        (t.pii.push({ type: c.TELEMETRY.PII_TYPE.IDENTITY, name: "User_PrimaryIdentityHash", value: p.puid }),
                        f.setUserId(p.puid)),
                      o.default.isNotUndefinedOrNull(p.tid) && (t.User_TenantId = p.tid),
                      t);
                },
                d = function () {
                  var t = e.get("$q"),
                    r = e.get("storage"),
                    n = t.defer();
                  return (
                    r.get(["telemetry_enabled", "enableTelemetry"]).then(function (e) {
                      n.resolve(
                        !(
                          !o.default.isUndefinedOrNull(e) &&
                          !0 !==
                            (function (e, t) {
                              if (e[t]) {
                                var r = JSON.parse(e[t]);
                                if (void 0 !== r.value) return JSON.parse(r.value);
                              }
                            })(e, "enableTelemetry") &&
                          !o.default.isUndefinedOrNull(e.telemetry_enabled) &&
                          !0 !== e.telemetry_enabled
                        )
                      );
                    }),
                    n.promise
                  );
                };
              return {
                getEnabledSetting: function () {
                  return d();
                },
                setEnabledSetting: function (t) {
                  if (o.default.isBackgroundContext()) {
                    !(function (t) {
                      e.get("storage").set({
                        telemetry_enabled: t,
                        enableTelemetry: JSON.stringify({ value: JSON.stringify(t), lastUpdate: Date.now(), manualOverride: !1 })
                      });
                    })(t);
                    for (var r = 0; r < n.length; ++r) n[r].setEnabledSetting(t);
                  } else
                    a.default.runtime.sendMessage({
                      activity: c.ACTIVITY.TELEMETRY.NAME,
                      command: c.TELEMETRY.COMMAND.SET_DISABLED,
                      enabled: t
                    });
                },
                trackEvent: async function (e, t, r) {
                  if (!i().isUndefined(e) && i().isString(e))
                    if (o.default.isBackgroundContext()) {
                      t = await s(t);
                      for (var u = 0; u < n.length; ++u) {
                        var d = i().extend({}, t);
                        n[u].trackEvent(e, d, r);
                      }
                    } else
                      a.default.runtime.sendMessage({
                        activity: c.ACTIVITY.TELEMETRY.NAME,
                        command: c.TELEMETRY.COMMAND.TRACK_EVENT,
                        eventName: e,
                        properties: t,
                        measurements: r
                      });
                },
                trackTrace: async function (e, t) {
                  if (!i().isUndefined(e) && i().isString(e))
                    if (o.default.isBackgroundContext()) {
                      t = await s(t);
                      for (var r = 0; r < n.length; ++r) {
                        var u = i().extend({}, t);
                        n[r].trackTrace(e, u);
                      }
                    } else
                      a.default.runtime.sendMessage({
                        activity: c.ACTIVITY.TELEMETRY.NAME,
                        command: c.TELEMETRY.COMMAND.TRACK_TRACE,
                        message: e,
                        properties: t
                      });
                }
              };
            }
          ])
          .service("ariaTelemetry", [
            "$window",
            function (e) {
              var t = function (e, t) {
                  if (!o.default.isUndefinedOrNull(e) && !o.default.isUndefinedOrNull(t)) {
                    if (!o.default.isUndefinedOrNull(t.pii)) {
                      for (var r = 0; r <= t.pii.length - 1; ++r) e.setProperty(t.pii[r].name, t.pii[r].value, t.pii[r].type);
                      delete t.pii;
                    }
                    for (var n in t) t.hasOwnProperty(n) && e.setProperty(n, t[n]);
                  }
                },
                r = !0;
              (this.setEnabledSetting = function (e) {
                r = e;
              }),
                (this.trackEvent = function (n, i, o) {
                  if (r) {
                    n = n.replace(/\./g, "_");
                    var a = new u.AWTEventProperties();
                    a.setName(c.TELEMETRY.EVENT_PREFIX + n), t(a, i), t(a, o), e.ariaLogger.logEvent(a);
                  }
                }),
                (this.trackTrace = function (n, i) {
                  if (r) {
                    var o = new u.AWTEventProperties();
                    o.setName(c.TELEMETRY.EVENT_PREFIX + n), o.setProperty("severity", n), t(o, i), e.ariaLogger.logEvent(o);
                  }
                });
            }
          ])
          .service("otelTelemetry", [
            "$window",
            function (e) {
              (this.trackEvent = function (r, n, i) {
                if (!t) return;
                let o = [];
                e.otelLogger.partAFields = [d.dt("Session.Id", n.Session_Id), d.dt("BrowserSessionId", n.BrowserSessionId)];
                for (let e in n) "AppInfo.Name" !== e && "Session_Id" !== e && "BrowserSessionId" !== e && o.push(d.dt(e, n[e]));
                for (let e in i) o.push(d.dt(e, i[e]));
                let a = { eventName: c.TELEM_PREFIX + "." + r, dataFields: o, eventFlags: { dataCategories: 2, diagnosticLevel: 10 } };
                a.eventName.toLowerCase().includes("diagnostic.") || e.otelLogger.sendTelemetryEvent(a);
              }),
                (this.trackTrace = function (r, n) {
                  if (!t) return;
                  let i = [];
                  e.otelLogger.partAFields = [d.dt("Session.Id", n.Session_Id), d.dt("BrowserSessionId", n.BrowserSessionId)];
                  for (let e in n) "AppInfo.Name" !== e && "Session_Id" !== e && "BrowserSessionId" !== e && i.push(d.dt(e, n[e]));
                  let o = { eventName: c.TELEM_PREFIX + "." + r, dataFields: i, eventFlags: { dataCategories: 2, diagnosticLevel: 10 } };
                  "info" !== r.toLowerCase()
                    ? "warn" !== r.toLowerCase()
                      ? ("error" === r.toLowerCase() && (o.eventName = c.TELEM_PREFIX + ".Diagnostic.Error"),
                        e.otelLogger.sendTelemetryEvent(o))
                      : (o.eventName = c.TELEM_PREFIX + ".Diagnostic.Warn")
                    : (o.eventName = c.TELEM_PREFIX + ".Diagnostic.Info");
                });
              var t = !0;
              this.setEnabledSetting = function (e) {
                t = e;
              };
            }
          ]).name;
        r(4622), r(454);
        const l = function (e, t, r, n) {
          var i = 0;
          return {
            request: function (e) {
              return o.default.isUndefinedOrNull(e.timeout) && (e.timeout = c.TIMEOUT.DEFAULT_REQUEST), e;
            },
            responseError: function (a) {
              if (a)
                switch (a.status) {
                  case 0:
                    t.debug(`httpErrorResponseInterceptor - Request cancelled - ${a.config.url}`);
                    break;
                  case 401:
                    t.info(`httpErrorResponseInterceptor - ${a.status} - ${a.config.url} - ${JSON.stringify(a.data)}`);
                    break;
                  case 400:
                    if (
                      o.default.isNotUndefinedOrNull(a.data) &&
                      o.default.isNotUndefinedOrNull(a.data.error_codes) &&
                      50001 === a.data.error_codes[0]
                    ) {
                      t.info(`httpErrorResponseInterceptor -  Invalid AADSerivce - ${a.status} - ${JSON.stringify(a.data)}`);
                      break;
                    }
                    if (
                      o.default.isNotUndefinedOrNull(a.data) &&
                      o.default.isNotUndefinedOrNull(a.data.error_codes) &&
                      50079 === a.data.error_codes[0]
                    ) {
                      if (
                        (t.info(`httpErrorResponseInterceptor -  Interaction required - ${a.status} - ${JSON.stringify(a.data)}`),
                        i < c.ERROR_RETRIES.HTTP_REQUEST)
                      )
                        return (
                          i++,
                          r(function () {
                            return n.get("$http")(a.config);
                          }, c.TIMEOUT.USER_INFO_LOOKUP)
                        );
                      i = 0;
                    }
                    break;
                  case 404:
                    if (a.config.url.startsWith("https://graph.microsoft.com/v1.0/me/drive")) return e.resolve(a);
                  default:
                    t.error(`httpErrorResponseInterceptor - ${a.status} - ${a.config.url} - ${JSON.stringify(a.data)}`);
                }
              return e.reject(a);
            }
          };
        };
        var f = r(8081);
        function p(e, t) {
          function r(e) {
            return e.length > 8e3 ? e.substring(0, 8e3) : e;
          }
          function n(e, r) {
            try {
              t.trackTrace(e, r);
            } catch (e) {}
          }
          function i(e, t, r, n, i) {
            if (o.default.isBackgroundContext())
              try {
                var s = `[${new Date().toLocaleString(void 0, {
                  month: "numeric",
                  day: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                  second: "numeric"
                })}] (${(function (e) {
                  try {
                    const t = new URL(location.href).origin + "/";
                    e = e.toString().replace(t, "");
                  } catch {}
                  return e;
                })(i)}) ${n ? n + " " : ""} ${e}`;
                console[t.toLowerCase()](s);
              } catch {}
            else a.default.runtime.sendMessage({ activity: "log", severity: t, log: e, filename: n, stack: r });
          }
          var s = function (e, t) {
            return function () {
              var a = [].slice.call(arguments),
                s = a[0],
                c = void 0;
              o.default.isExtensionInDevelopmentMode() && (c = Error().stack);
              var u = r(
                (function (e) {
                  return "string" == typeof e ? e : JSON.stringify(e);
                })(s.message ? s.message : s)
              );
              new Promise((e) => {
                s.stack
                  ? e("string" == typeof s.stack ? r(s.stack).split("\n") : s.stack)
                  : c
                  ? (0, f.mapStackTrace)(
                      c,
                      (t) => {
                        for (; t[0].match("logDecorator.js"); ) t.shift();
                        e(t);
                      },
                      {}
                    )
                  : e([]);
              }).then((r) => {
                var c = "",
                  d = s.source || location;
                if (s.filename) c = s.filename;
                else
                  for (var l of r) {
                    var f = l.match(/\b[\w.]+\b:\d+/g);
                    if (f) {
                      c = f.pop();
                      break;
                    }
                  }
                i(u, t, r, c, d);
                var p = new Date().toLocaleString(void 0, {
                  month: "numeric",
                  day: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                  second: "numeric"
                });
                (a[0] = `[${p}] ${c ? c + " " : ""}${t}: ${u}`),
                  o.default.isExtensionInDevelopmentMode() && e.apply(null, a),
                  "DEBUG" !== t && n(t, { message: u, stack: "Error" === t ? r : "" });
              });
            };
          };
          return (
            (e.debug = s(e.debug, "DEBUG")),
            (e.info = s(e.info, "Info")),
            (e.warn = s(e.warn, "Warn")),
            (e.error = s(e.error, "Error")),
            (e.getEnabledSetting = function () {
              return t.getEnabledSetting();
            }),
            (e.setEnabledSetting = function (r) {
              try {
                t.setEnabledSetting(r);
              } catch (t) {
                e.error(`setEnabledSetting error: ${t}`);
              }
            }),
            (e.trackEvent = function (r, n, i) {
              try {
                t.trackEvent(r, n, i);
              } catch (t) {
                e.error(`trackEvent error with eventName ${r}: ${t}`);
              }
            }),
            (e.trackTrace = n),
            e
          );
        }
        window.dumpStorage = () => {
          window.chrome &&
            window.chrome.storage.local.get(null, (e) => {
              console.log(`result '${JSON.stringify(e, "\t")}'`);
            });
        };
        var E = i()
          .module("app.common", [])
          .config([
            "$httpProvider",
            "$provide",
            function (e, t) {
              t.decorator("$log", ["$delegate", "telemetry", p]), e.interceptors.push("httpInterceptor");
            }
          ])
          .factory("storage", [
            "$q",
            "$log",
            function (e, t) {
              return {
                get: function (r) {
                  var n = e.defer();
                  return (
                    a.default.storage.local.get(r, function (e) {
                      t.debug(`storage: get '${JSON.stringify(r)}', result '${JSON.stringify(e)}'`), n.resolve(e);
                    }),
                    n.promise
                  );
                },
                set: function (e) {
                  t.debug(`storage: set items '${JSON.stringify(e)}'`), a.default.storage.local.set(e);
                },
                remove: function (r) {
                  var n = e.defer();
                  return (
                    a.default.storage.local.remove(r, function (e) {
                      t.debug(`storage: remove '${JSON.stringify(r)}', result '${JSON.stringify(e)}'`), n.resolve(e);
                    }),
                    n.promise
                  );
                },
                clear: function () {
                  var r = e.defer();
                  return (
                    a.default.storage.local.clear(function (e) {
                      t.debug(`storage: clear result '${JSON.stringify(e)}'`), r.resolve(e);
                    }),
                    r.promise
                  );
                }
              };
            }
          ])
          .factory("notification", [
            "$log",
            "localize",
            function (e, t) {
              return {
                show: function (r) {
                  if (o.default.isBackgroundContext()) {
                    var n;
                    if (void 0 !== r.buttons && null !== r.buttons) {
                      n = [];
                      for (var i = 0; i < r.buttons.length; ++i)
                        (n[i] = {}), (n[i].title = t.getLocalizedString(r.buttons[i].title)), (n[i].iconUrl = r.buttons[i].iconUrl);
                    }
                    a.default.notifications.clear(r.id, function (i) {
                      a.default.notifications.create(
                        r.id,
                        {
                          iconUrl: "../assets/icon.png",
                          imageUrl: r.imageUrl,
                          message: t.getLocalizedString(r.message),
                          priority: r.priority,
                          progress: r.progress,
                          title: "",
                          type: r.type,
                          buttons: n
                        },
                        function (t) {
                          null == t && e.error("CreateNotificationError");
                        }
                      );
                    });
                  } else a.default.runtime.sendMessage({ activity: c.ACTIVITY.NOTIFICATION.NAME, notification: r });
                }
              };
            }
          ])
          .factory("httpInterceptor", ["$q", "$log", "$timeout", "$injector", l]);
        E.name;
        var g = r(7929),
          I = r(5420),
          m = r(132),
          v = r(2530);
        i()
          .module("app.user", [])
          .config([
            "$httpProvider",
            "$provide",
            function (e, t) {
              e.interceptors.push("protectedResourceInterceptor");
            }
          ])
          .factory("protectedResourceInterceptor", [
            "$q",
            "$log",
            "$injector",
            function (e, t, r) {
              var n = r.get("userService");
              return {
                request: function (r) {
                  var i = e.defer();
                  if (o.default.isUndefinedOrNull(r) || o.default.isUndefinedOrNull(r.headers))
                    return (
                      t.error("protectedResourceInterceptor.request: http request config is null or undefined"), i.resolve(r), i.promise
                    );
                  var a = r.headers["X-UserType"];
                  if (o.default.isUndefinedOrNull(a)) return i.resolve(r), i.promise;
                  var s = r.headers["X-Resource"];
                  return (
                    delete r.headers["X-Resource"],
                    delete r.headers["X-UserType"],
                    n.acquireToken(a, r.url, s).then((e) => {
                      o.default.isUndefinedOrNull(e)
                        ? t.warn(`failed to get auth token for type:${a} url: ${r.url}, resource ${s}`)
                        : (r.headers.Authorization = "Bearer " + e),
                        i.resolve(r);
                    }),
                    i.promise
                  );
                },
                responseError: function (t) {
                  if (t && 401 === t.status) {
                    if (
                      o.default.isNotUndefinedOrNull(t.config) &&
                      (t.config.url === c.O365CONFIG.SHAREPOINT_URL || t.config.url === c.O365CONFIG.PHOTO_URL)
                    )
                      return e.reject(t);
                    n.clearToken();
                  }
                  return e.reject(t);
                }
              };
            }
          ])
          .service("msaUserService", [
            "$log",
            "$injector",
            function (e, t) {
              (this.type = c.USER_TYPE.MSA),
                (this.type = c.USER_SERVICE_TYPE.MSA),
                (this.userType = c.USER_TYPE.MSA),
                (this.getConfig = function () {
                  return {
                    tokenUrl: c.MSACONFIG.URL,
                    params: {
                      client_id: c.MSACONFIG.CLIENT_ID,
                      client_secret: c.MSACONFIG.CLIENT_SECRET,
                      redirect_uri: c.MSACONFIG.REDIRECT_URI
                    },
                    resource: c.ONEDRIVE.INSTANCE,
                    loginUrl:
                      c.MSACONFIG.INSTANCE +
                      "?response_type=code&client_id=" +
                      c.MSACONFIG.CLIENT_ID +
                      "&redirect_uri=" +
                      c.MSACONFIG.REDIRECT_URI +
                      "&scope=" +
                      c.MSACONFIG.SCOPE,
                    logoutUrl: c.MSACONFIG.LOGOUT_URI,
                    photoUrl: c.MSACONFIG.PHOTO_URL,
                    documentsUrl: c.RECENTS.ONEDRIVE_ENDPOINT
                  };
                }),
                (this.lookupUserInfo = async function (e) {
                  return new Promise((e, r) => {
                    var n = { oneDriveUrl: c.LINKS.APP.ONEDRIVE };
                    t.get("$http")({
                      method: "GET",
                      url: c.MSACONFIG.USERINFO_URL,
                      headers: { "X-UserType": c.USER_SERVICE_TYPE.MSA }
                    }).then(
                      function (t) {
                        var r = t.data;
                        (n.email = r.emails.account), (n.cid = r.id), e(n);
                      },
                      function () {
                        r("msaUser.Service.lookupUserInfo http request failed");
                      }
                    );
                  });
                }),
                (this.getResourceForEndpoint = function (e) {
                  return c.MSACONFIG.SCOPE;
                });
            }
          ])
          .service("o365UserService", [
            "$log",
            "$injector",
            "notification",
            function (e, t, r) {
              (this.type = c.USER_SERVICE_TYPE.O365),
                (this.userType = c.USER_TYPE.O365),
                (this.getConfig = function () {
                  return {
                    tokenUrl: c.O365CONFIG.INSTANCE + "token",
                    params: {
                      client_id: c.O365CONFIG.CLIENT_ID,
                      client_secret: c.O365CONFIG.CLIENT_SECRET,
                      redirect_uri: c.O365CONFIG.REDIRECT_URI,
                      resource: c.O365CONFIG.GRAPH_RESOURCE
                    },
                    resource: c.O365CONFIG.GRAPH_RESOURCE,
                    loginUrl:
                      c.O365CONFIG.INSTANCE +
                      "authorize?response_type=code&client_id=" +
                      c.O365CONFIG.CLIENT_ID +
                      "&redirect_uri=" +
                      c.O365CONFIG.REDIRECT_URI +
                      "&response_mode=query",
                    logoutUrl: c.O365CONFIG.LOGOUT_URI,
                    photoUrl: c.O365CONFIG.PHOTO_URL,
                    documentsUrl: c.O365CONFIG.MRU_URL + c.RECENTS.FILTER
                  };
                }),
                (this.getResourceForEndpoint = function (e) {
                  var t = this.getConfig().resource;
                  if (o.default.isUndefinedOrNull(e)) return t;
                  for (var r in c.O365CONFIG.ENDPOINTS)
                    if (c.O365CONFIG.ENDPOINTS.hasOwnProperty(r) && e.indexOf(r) > -1) {
                      t = c.O365CONFIG.ENDPOINTS[r];
                      break;
                    }
                  return t;
                }),
                (this.lookupUserInfo = async function (n) {
                  var i = (function (t) {
                    var r = {},
                      n = (function (t) {
                        var r = (function (t) {
                          var r = /^([^.\s]*)\.([^.\s]+)\.([^.\s]*)$/.exec(t);
                          if (!r || r.length < 4) return e.error("The returned id_token is not parseable."), null;
                          return { header: r[1], JWSPayload: r[2], JWSSig: r[3] };
                        })(t);
                        if (!r) return null;
                        try {
                          var n = (function (e) {
                            if (((e = e.replace(/-/g, "+").replace(/_/g, "/")), window.atob))
                              return decodeURIComponent(escape(window.atob(e)));
                            return null;
                          })(r.JWSPayload);
                          return n ? JSON.parse(n) : (this._logstatus("The returned id_token could not be base64 url safe decoded."), null);
                        } catch (t) {
                          e.error("The returned id_token could not be decoded: " + t.stack);
                        }
                        return null;
                      })(t);
                    n &&
                      n.hasOwnProperty("aud") &&
                      (n.aud.toLowerCase() === c.O365CONFIG.CLIENT_ID.toLowerCase()
                        ? (n.hasOwnProperty("upn") ? (r.email = n.upn) : n.hasOwnProperty("email") && (r.email = n.email),
                          n.hasOwnProperty("puid") && (r.puid = n.puid),
                          n.hasOwnProperty("tid") && (r.tid = n.tid))
                        : e.error("IdToken has invalid aud field"));
                    return r;
                  })(n.id_token);
                  const o = await (async function () {
                    var n = { method: "GET", url: c.O365CONFIG.ONEDRIVE_URL, headers: { "X-UserType": c.USER_TYPE.O365 } },
                      i = t.get("userService");
                    try {
                      var o = await i.httpRequest(n);
                      return o.webUrl ? o.webUrl : Promise.reject("o365UserService.DiscoverServiceEndpoint - Invalid resource");
                    } catch (n) {
                      return (
                        (function () {
                          var e = t.get("userService");
                          e.clearToken();
                        })(),
                        r.show(c.NOTIFICATION.INVALIDSUBSCRIPTION),
                        e.error("0365User.getOneDriveUrl failed: %s", n),
                        null
                      );
                    }
                  })();
                  i.oneDriveUrl = o;
                  const a = await (async function () {
                    var r = { method: "GET", url: c.O365CONFIG.SHAREPOINT_URL, headers: { "X-UserType": c.USER_SERVICE_TYPE.O365 } },
                      n = t.get("userService");
                    try {
                      var i = await n.httpRequest(r);
                      return i.webUrl ? i.webUrl : Promise.reject("No SharePoint info for user");
                    } catch (t) {
                      return e.error("0365User.getSharePointUrl failed: %s", t), null;
                    }
                  })();
                  return (i.sharePointUrl = a || c.LINKS.APP.SHAREPOINT_DEFAULT), i;
                });
            }
          ])
          .service("msidUserService", [
            "$log",
            "$injector",
            "notification",
            function (e, t, r) {
              const n = c.USER_SERVICE_TYPE.MSID;
              var i = void 0;
              const o = "email openid profile user.read",
                a = "https://graph.microsoft.com/v1.0/me/",
                s = new URL("https://login.microsoftonline.com/common/oauth2/").toString(),
                u = (new URL("https://login.live.com/oauth20_authorize.srf").toString(), new URL("nativeclient", s).toString()),
                d = new URL("v2.0/logoutsession", s).toString(),
                l = new URL("v2.0/authorize", s).toString(),
                f = "e28ff72c-58a5-49ba-8125-42ec264d7cd0",
                p = (() => {
                  var e = new URL(l);
                  return (e.search = g({ prompt: "select_account" })), e.toString();
                })();
              function E() {
                return i || (i = t.get("userService")), i;
              }
              function g(e) {
                const t = { client_id: f, response_type: "id_token token", redirect_uri: u, scope: o, response_mode: "fragment" };
                return new URLSearchParams(Object.assign({}, t, e)).toString();
              }
              async function I() {
                var e = { method: "GET", url: a, headers: { "X-UserType": n } },
                  t = {};
                try {
                  t = (function (e) {
                    for (const t in e) e.hasOwnProperty(t) && t.match(/^@odata/i) && delete e[t];
                    return e;
                  })(await E().httpRequest(e));
                } catch (e) {
                  return Promise.reject(`msidUser.fetchUserInfo failed: ${e}`);
                }
                return t;
              }
              async function m() {
                var t = { method: "GET", url: c.O365CONFIG.ONEDRIVE_URL, headers: { "X-UserType": n } };
                try {
                  var i = await E().httpRequest(t);
                  return i.webUrl
                    ? { oneDriveUrl: i.webUrl }
                    : Promise.reject("o365UserService.DiscoverServiceEndpoint - Invalid resource");
                } catch (t) {
                  return (
                    r.show(c.NOTIFICATION.INVALIDSUBSCRIPTION), e.error(`msidUser.fetchOneDriveUrl failed: ${JSON.stringify(t)}`), null
                  );
                }
              }
              async function v() {
                var t = { method: "GET", url: "https://graph.microsoft.com/v1.0/me/drive", headers: { "X-UserType": n } };
                try {
                  var r = await E().httpRequest(t),
                    i = parseInt(r.quota.total) / 1073741824;
                  return (
                    (i = Math.round(100 * i) / 100),
                    e.info(`OneDrive quota: ${JSON.stringify(r.quota, null, "\t")} capacity: ${i}GB`),
                    { driveQuota: r.quota.total, driveQuotaString: `${i}GB` }
                  );
                } catch (e) {
                  return Promise.reject(`msidUser.fetchOneDriveQuota failed: ${e}`);
                }
              }
              return {
                type: n,
                getConfig: function () {
                  return {
                    loginUrl: p,
                    logoutUrl: d,
                    photoUrl: "https://graph.microsoft.com/beta/me/photo/$value",
                    userInfoUrl: a,
                    documentsUrl: "https://graph.microsoft.com/v1.0/me/drive/recent"
                  };
                },
                getResourceForEndpoint: function (t) {
                  if (!t) return o;
                  const r = {
                    "https://graph.microsoft.com": { "/v1.0/me/": o, "/v1.0/me/drive/recent": "Files.ReadWrite.All" },
                    "https://nleditor.osi.office.net": { "/NlEditor/": "https://nleditor.osi.office.net/NlEditor/instrumentation.write" }
                  };
                  try {
                    const e = new URL(t);
                    if (!r.hasOwnProperty(e.origin)) return o;
                    const n = r[e.origin],
                      i = e.pathname;
                    return n[Object.keys(n).reduce((e, t) => (i.startsWith(t) && t.length > e.length ? t : e))];
                  } catch (t) {
                    return e.warning(`msidUser.Service threw an exception: ${t}`), o;
                  }
                },
                lookupUserInfo: async function (e) {
                  const t = [I(), m(), v()];
                  return (await Promise.all(t)).reduce((e, t) => Object.assign(e, t));
                },
                requestAccessToken: async function (t, r) {
                  var i = { scope: t, response_type: "token" };
                  r && r.email && (i.login_hint = r.email);
                  var o = g(i),
                    a = new URL(l);
                  a.search = o.toString();
                  var s = await E().navigateToAuthEndpoint(a.href, n, !0);
                  return s && s.access_token
                    ? s
                    : (e.info(`failed to get token from iframe for resource ${t}`),
                      Promise.reject(`unable to retrieve result from ${a.href}`));
                }
              };
            }
          ])
          .factory("userService", [
            "$q",
            "$log",
            "$injector",
            "$window",
            "storage",
            "notification",
            "msaUserService",
            "o365UserService",
            "msidUserService",
            function (e, t, r, n, i, s, u, l, f) {
              async function p(e, r, n) {
                var i = {};
                if (!(i = await L(e))) return t.error("userService.acquireToken - Invalid type"), Promise.reject("Invalid userType");
                !n && i.getResourceForEndpoint && (n = i.getResourceForEndpoint(r));
                var o = {};
                try {
                  if ((o = await M(r, n)) && o.access_token && !G(o.expires_on))
                    return t.debug(`Using cached token with resource:'${n}'${r ? " for " + r : ""} `), o.access_token;
                  if (
                    ((o = await (async function (e, r) {
                      if (!e) return t.error("userService.requestAccessToken - Invalid type"), Promise.reject("Invalid userType");
                      const n = await (async function () {
                        return $("refresh_token");
                      })();
                      if (n)
                        return (async function (e, r, n) {
                          if (!e) return t.error("userService.refreshAccessToken - Invalid type"), Promise.reject("Invalid userType");
                          var i = {},
                            o = e.getConfig();
                          (o.params.grant_type = c.OAUTH.REFRESH_TOKEN), (o.params.resource = r), (o.params.refresh_token = n);
                          var a = {
                            method: "POST",
                            url: o.tokenUrl,
                            headers: { "Content-Type": "application/x-www-form-urlencoded;charset=utf-8" },
                            data: new URLSearchParams(o.params).toString()
                          };
                          return (i = await E(a)), i;
                        })(e, r, n);
                      const i = await N();
                      var o = await k(i);
                      if (e.requestAccessToken) var a = await e.requestAccessToken(r, o);
                      return a;
                    })(i, n)),
                    !o)
                  )
                    return Promise.reject("No tokens available");
                  D(i, r, o);
                } catch (i) {
                  t.error(`userService.acquireToken - failed. reason: ${i}, userType: ${e}, endpoint: ${r}, resource: ${n}`);
                }
                return o && o.access_token && o.expires_on && !G(o.expires_on) ? o.access_token : null;
              }
              async function E(e) {
                if (!e) return Promise.reject("Invalid Request");
                var t = new Error().stack,
                  n = new Promise((n, i) => {
                    r.get("$http")(e).then(
                      (e) => {
                        n(e.data);
                      },
                      (r) => {
                        i(`httpRequest failed for url: ${e.url} reason: ${r.statusText} stack:\n ${t}`);
                      }
                    );
                  });
                return await n;
              }
              async function O(e) {
                const r = e.type;
                var n = void 0,
                  o = await L(r),
                  a = !1;
                if (o) {
                  if (e.code) {
                    n = r.userType;
                    try {
                      var u = await (async function (e, r) {
                        if (!e)
                          return (
                            t.error("userService.acquireTokenFromCode - Invalid type"), void Promise.reject("Invalid userService type")
                          );
                        var n = e.getConfig();
                        (n.params.grant_type = c.OAUTH.AUTH_CODE), (n.params.code = r);
                        var i = {
                          method: "POST",
                          url: n.tokenUrl,
                          headers: { "Content-Type": "application/x-www-form-urlencoded;charset=utf-8" },
                          data: new URLSearchParams(n.params).toString()
                        };
                        const o = await E(i);
                        return await D(e, e.getConfig().resource, o), await B(e, o), o.access_token;
                      })(o, e.code);
                      a = !!u;
                    } catch (e) {
                      n === c.USER_TYPE.O365 && s.show(c.NOTIFICATION.INVALIDSUBSCRIPTION);
                    }
                  } else
                    e.id_token &&
                      S(
                        (n = await h(e.id_token)),
                        await (async function (e) {
                          var r = "";
                          if (Object.values(c.USER_DATA_BOUNDARY).includes(e)) r = e;
                          else
                            try {
                              const { header: t, payload: n } = V(e);
                              void 0 === (r = { dataBoundary: n.xms_tdbr }).dataBoundary && (r.dataBoundary = c.USER_DATA_BOUNDARY.NONE),
                                await i.set({ dataBoundary: r });
                            } catch (e) {
                              return (
                                t.error(`userService.setUserDataBoundary - unable to parse token: ${e}`),
                                { type: c.USER_DATA_BOUNDARY.NONE }
                              );
                            }
                          return r;
                        })(e.id_token),
                        await (async function (e) {
                          var r = "",
                            n = "";
                          try {
                            const { header: t, payload: o } = V(e);
                            (r = o.puid), (n = o.tid), await i.set({ userId: o.puid }), await i.set({ tenantId: o.tid });
                          } catch (e) {
                            return void t.error(`userService.setUserAndTenantId - unable to parse token: ${e}`);
                          }
                          return { userId: r, tenantId: n };
                        })(e.id_token)
                      ),
                      e.access_token && (await D(o, o.getConfig().userInfoUrl, e), n || (n = await N()), await B(o, e.id_token)),
                      (a = n !== c.USER_TYPE.NONE);
                  return (
                    e.error &&
                      ("interaction_required" === e.error
                        ? R(await N(), !1)
                        : t.error(
                            `userService.authenticate - authentication returned error: ${e.error} description: ${
                              e.error_description
                            } request: ${JSON.stringify(e)}`
                          )),
                    t.trackEvent("Request.Authorization", { ServiceType: r, Succeeded: a, EventCategory: "Request" }),
                    a ? Promise.resolve() : Promise.reject()
                  );
                }
                t.error("userService.authenticate - Invalid type");
              }
              async function T() {
                return Promise.all([
                  i.remove("accessToken"),
                  i.remove("refreshToken"),
                  i.remove("userInfo"),
                  i.remove("userType"),
                  i.remove("identity")
                ]);
              }
              async function S(e, t, r) {
                const i = new g.Y();
                await i.detectOs();
                const o = { endpointUrl: "EU" === t.dataBoundary && "aad" === e ? I.x.EUDB : I.x.PUBLIC, plugins: [i] },
                  a = [
                    ...v.gV.getFields({ name: "M365Extension", platform: "Web" }),
                    ...v.n5.getFields({
                      primaryIdentitySpace: "aad" === e ? "OrgIdPUID" : "MSAPUID",
                      primaryIdentityHash: r.userId,
                      isAnonymous: !1,
                      tenantId: r.tenantId,
                      tenantGroup: "aad" === e ? "Commercial" : "Consumer"
                    }),
                    d.dt("DeviceType", window.sessionStorage.getItem("deviceType"))
                  ],
                  s = new m.a(a, o);
                (n.otelLogger.telemetrySinks = []), n.otelLogger.addSink(s), n.otelLogger.flushQueue();
              }
              async function N() {
                return (await i.get("userType")).userType || c.USER_TYPE.NONE;
              }
              async function h(e) {
                var t = "";
                if (Object.values(c.USER_TYPE).includes(e)) t = e;
                else {
                  var r = (function (e) {
                    var t = e.scopes || e.scope;
                    if (t && t.includes("wl.")) return { type: c.USER_TYPE.MSA };
                    var r = e.id_token || e;
                    if (!r) return { type: c.USER_TYPE.NONE };
                    const n = {
                      "9188040d-6c67-4c5b-b112-36a304b66dad": { type: c.USER_TYPE.MSA, audience: "prod" },
                      "4925308c-f164-4d2d-bc7e-0631132e9375": { type: c.USER_TYPE.MSA, audience: "ppe" },
                      "72f988bf-86f1-41af-91ab-2d7cd011db47": { type: c.USER_TYPE.O365, audience: "prod", domain: "microsoft.com" },
                      "f686d426-8d16-42db-81b7-ab578e110ccd": { type: c.USER_TYPE.O365, audience: "ppe", domain: "microsoft.com" }
                    };
                    try {
                      const { header: e, payload: t } = V(r);
                      var i = { tenant: t.tid };
                      if (n.hasOwnProperty(i.tenant)) {
                        var o = n[i.tenant];
                        i = Object.assign(i, o);
                      } else i.type = c.USER_TYPE.O365;
                      return i;
                    } catch (e) {
                      return { type: c.USER_TYPE.MSA };
                    }
                  })(e);
                  (t = r.type), delete r.type;
                  var n = { [t]: r },
                    o = await P();
                  b(o, n), await i.set({ identity: o });
                }
                return t !== c.USER_TYPE.NONE && (await i.set({ userType: t })), t;
              }
              function _(e) {
                e.state && (e.state = decodeURIComponent(e.state));
                var [t, r, n] = e.state.split("|");
                return r && (e.type = r), e;
              }
              async function U(e, r, n) {
                return new Promise(async (i, s) => {
                  if (o.default.isBackgroundContext()) {
                    const E = (e = new URL(e)).searchParams;
                    for (const O of ["state", "nonce"]) {
                      var u = E.get(O);
                      u || (u = q()), "state" === O && r && (u += "|" + r + "|" + c.APPINFO_NAME), E.set(O, u);
                    }
                    var d = void 0,
                      l = void 0;
                    function g() {
                      if ((a.default.runtime.onMessage.removeListener(v), d)) {
                        var e = document.getElementById(d);
                        e && e.parentNode.removeChild(e);
                      }
                    }
                    const I = E.get("state"),
                      m = E.get("scope");
                    t.info(`loading auth url:${e.href} ${n ? "in iframe" : ""}`);
                    var f = await k();
                    function v(r, n, o) {
                      if (n.id === a.default.runtime.id) {
                        if (r.activity === c.ACTIVITY.AUTHORIZATION.NAME) {
                          var u = _(r);
                          u || (t.error(`userService.listener - auth url:${e} returned null response `), s(u)),
                            u.state !== I && t.warn(`userService.listener - auth url:${e} mismatched state:${u.state}`),
                            t[u.error ? "error" : "debug"](
                              `userService.listener - auth response:${JSON.stringify(u)} received from url:${e}`
                            ),
                            l && clearTimeout(l),
                            delete u.activity,
                            g(),
                            i(u);
                        }
                      } else t.debug(`auth listener rejected invalid id: ${n.id}`);
                    }
                    if (
                      (f && f.email && !E.has("login_hint") && E.set("login_hint", f.email), a.default.runtime.onMessage.addListener(v), n)
                    ) {
                      E.set("prompt", "none"), (d = "authFrame!" + m);
                      const T = 6e4;
                      l = setTimeout(() => {
                        t.warn(`userService.authInFrame timed out waiting for ${e.toString()} after ${T} ms`),
                          g(),
                          s("Timed out waiting for response from iFrame");
                      }, T);
                      var p = document.getElementById(d);
                      p ||
                        ((p = document.createElement("iframe")).setAttribute("id", d),
                        (p.style.visibility = "hidden"),
                        (p.style.position = "absolute"),
                        (p.style.width = p.style.height = "0"),
                        (p.style.border = "0"),
                        p.setAttribute("sandbox", "allow-scripts allow-same-origin allow-forms"),
                        document.body.appendChild(p),
                        (p.src = e.toString()));
                    } else a.default.tabs.create({ url: e.toString() });
                  } else
                    a.default.runtime.sendMessage({ activity: "requestToken", data: { url: e, type: r, inIFrame: n } }, (e) => {
                      i(e);
                    });
                });
              }
              async function R(e, r = !0) {
                !0 === r && T();
                var n = await L(e);
                if (n.handleLogin) return n.handleLogin();
                var i = n.getConfig().loginUrl;
                if (i) return U(i, n.type);
                t.error("userService.login - Invalid type");
              }
              async function w() {
                const e = await N();
                var r = await L(e);
                if ((T(), r.handleLogout)) await r.handleLogout();
                else {
                  var n = r.getConfig().logoutUrl;
                  if (!n) return void t.error("userService.logout - Invalid type");
                  var i = { method: "GET", url: n };
                  await E(i);
                }
                t.debug(`userService.logout - ${e}`);
              }
              async function y(e) {
                return void 0 !== e && i.set({ authNext: { override: e } }), C({ noLogout: !0 });
              }
              o.default.isBackgroundContext() &&
                a.default.runtime.onMessage.addListener(function (e, t, r) {
                  switch (e.activity) {
                    case c.ACTIVITY.LOGOUT.NAME:
                      return (
                        w().then(() => {
                          r();
                        }),
                        !0
                      );
                    case c.ACTIVITY.AUTHENTICATION.NAME:
                      return (
                        R(e.type).then((e) => {
                          r(e);
                        }),
                        !0
                      );
                    case c.ACTIVITY.AUTHORIZATION.NAME:
                      return (
                        t.id === a.default.runtime.id && e.close && (t.tab && t.tab.id && a.default.tabs.remove(t.tab.id), delete e.close),
                        O(_(e)).then(() => {
                          r();
                        }),
                        !0
                      );
                    case c.ACTIVITY.REQUEST_TOKEN.NAME:
                      return (
                        U(e.data.url, e.data.type, e.data.inIFrame).then((e) => {
                          r(e);
                        }),
                        !0
                      );
                    default:
                      return;
                  }
                }),
                (window.useAuthNext = y),
                (window.checkTransitionAuth = C);
              const A = 864e5;
              async function C(e) {
                var r = new Date();
                const n = r.toUTCString();
                var a = await i.get("authNext");
                r = Math.round(r / 1e3);
                var s = 0;
                if (
                  a.authNext &&
                  a.authNext.lastCheck &&
                  o.default.isNotUndefinedOrNull(a.authNext.flighted) &&
                  ((s = r - a.authNext.lastCheck), (!e || !0 !== e.force) && s < A && a.authNext.flighted)
                )
                  return a.authNext.flighted;
                t.info(`checkTransitionAuth time:${n}`);
                var u = await (async () => {
                  var e = await (async function () {
                      var e = await i.get("deviceId");
                      if (e.deviceId) return e.deviceId;
                      var t = q();
                      return await i.set({ deviceId: t }), t;
                    })(),
                    r = {
                      url: "https://nleditor.osi.office.net/NLEditor/api/V1/BrowserExtension",
                      method: "POST",
                      accept: "application/json",
                      contentType: "application/json",
                      headers: { "X-UserId": e },
                      data: { AppId: "OfficeBX_Online" }
                    },
                    n = {};
                  try {
                    n = await E(r);
                  } catch (e) {
                    t.error(`userService.checkAuthFlighting - Call to editor service failed. error:${JSON.stringify(e)}`);
                  }
                  var o = !1;
                  if (n && n.FeatureFlags && n.FeatureFlags.authNext) {
                    var a = n.FeatureFlags.authNext;
                    o = "string" == typeof a ? "true" === a.toLowerCase() : !!a;
                  }
                  return t.info(`editor featureFlags.authNext returned:${o}`), o;
                })();
                if (
                  (await i.set({ authNext: { flighted: u, lastCheck: r } }),
                  a.authNext && o.default.isNotUndefinedOrNull(a.authNext.override))
                )
                  return t.info("using authNext override from local storage."), a.authNext.override;
                var d = await $("service");
                u !== (d === c.USER_SERVICE_TYPE.MSID) &&
                  (t.trackEvent("Request.AuthNext", { Elapsed: s, AuthNext: u, serviceType: d, EventCategory: "Request" }),
                  e && !e.noLogout && (await w()));
              }
              async function L(e) {
                var r = null;
                return (
                  Object.values(c.USER_SERVICE_TYPE).includes(e) ||
                    (e = await (async function (e) {
                      var t = await $("service", e);
                      if (t) return t;
                      if (((t = c.USER_SERVICE_TYPE.NONE), await y())) return c.USER_SERVICE_TYPE.MSID;
                      switch (e) {
                        case c.USER_TYPE.MSA:
                          t = c.USER_SERVICE_TYPE.MSA;
                          break;
                        case c.USER_TYPE.O365:
                          t = c.USER_SERVICE_TYPE.O365;
                      }
                      return t;
                    })(e)),
                  -1 !== e.indexOf(c.USER_SERVICE_TYPE.MSA)
                    ? (r = u)
                    : -1 !== e.indexOf(c.USER_SERVICE_TYPE.O365)
                    ? (r = l)
                    : -1 !== e.indexOf(c.USER_SERVICE_TYPE.MSID)
                    ? (r = f)
                    : t.error(`userService.getServiceProvider - Invalid type - ${e}`),
                  r
                );
              }
              async function P() {
                var e = await i.get("identity");
                return e && e.identity ? e.identity : {};
              }
              function b(e, r) {
                for (var [n, i] of Object.entries(r))
                  i &&
                    (e[n] && "none" !== e[n] && "none" !== i
                      ? typeof i == typeof e[n]
                        ? Array.isArray(i)
                          ? i.forEach((t) => {
                              e[n].indexOf(t) < 0 && e[n].push(t);
                            })
                          : "object" != typeof i
                          ? (e[n] = i)
                          : b(e[n], i)
                        : t.warn(`skipping ${n} due to conflicting types`)
                      : (e[n] = i));
              }
              function F(e) {
                return new URL(e).origin;
              }
              async function D(e, r, n) {
                if ((n.expires_in && !n.expires_on && (n.expires_on = o.default.getCurrentTime() + Number(n.expires_in)), r)) {
                  var a = await N();
                  if ((a === c.USER_TYPE.NONE && (a = await h(n)), a !== c.USER_TYPE.NONE)) {
                    var s = decodeURIComponent(n.scope).toLowerCase().split(/[ +]/);
                    for (const e of s) {
                      var u = e.match(/(^https:\/\/[.\w]*(?:\S+\/))/i);
                      if (u) {
                        r = u[u.index];
                        break;
                      }
                    }
                    (r = F(r)),
                      n.resource && n.resource !== r && (t.info(`saveTokens ${r} does not match ${n.resource}`), (r = n.resource));
                    var d = {
                        [a]: {
                          id_token: n.id_token,
                          refresh_token: n.refresh_token,
                          service: e.type,
                          resources: { [r]: { access_token: n.access_token, expires_in: n.expires_in, expires_on: n.expires_on, scope: s } }
                        }
                      },
                      l = await P();
                    b(l, d), await i.set({ identity: l });
                  } else t.error("userService.saveTokens - unable to resolve userType");
                } else t.error("userService.saveTokens - endpoint not provided");
              }
              function x(e, t) {
                if (!e) return !0;
                if (!t) return !1;
                Array.isArray(e) || (e = e.toLowerCase().split(/[ +]/));
                for (const r of e) if (!t.includes(r)) return !1;
                return !0;
              }
              async function M(e, r) {
                if (e) {
                  e = F(e);
                  try {
                    var n = await $("resources");
                    if (n[e]) {
                      var i = n[e];
                      if (e === r) return i;
                      if (i && x(r, i.scope)) return i;
                      delete n[e];
                    }
                    for (const e in n) if (x(r, e.scope)) return e;
                    return null;
                  } catch (e) {
                    return null;
                  }
                } else t.error("userService.getAccessToken - endpoint not provided");
              }
              async function k(e) {
                return $("userInfo", e);
              }
              async function $(e, t) {
                t || (t = await N());
                var r = await P();
                return r[t] && r[t][e] ? r[t][e] : null;
              }
              async function Y(e, t, r) {
                var n = await P(),
                  o = {};
                n[e] && n[e].userInfo && !r && (o = n[e].userInfo), b(o, t), n[e] && ((n[e].userInfo = o), await i.set({ identity: n }));
              }
              function G(e) {
                var t = o.default.getCurrentTime();
                return !(e && e > t + 120);
              }
              async function B(e, t) {
                var r = await N(),
                  n = await e.lookupUserInfo(t);
                a.default.runtime.sendMessage({ activity: c.ACTIVITY.USERINFO_AVAILABLE.NAME, data: n }),
                  !n.email && n.userPrincipalName && (n.email = n.userPrincipalName),
                  await Y(r, n, !0),
                  await j(e);
              }
              function V(e) {
                var r = /^([^.\s]*)\.([^.\s]+)\.([^.\s]*)$/.exec(e);
                return !r || r.length < 4
                  ? (t.error("userService.parseJwtToken - The returned id_token is not parseable."), null)
                  : { header: JSON.parse(H(r[1])), payload: JSON.parse(H(r[2])) };
              }
              function H(e) {
                return (e = e.replace(/-/g, "+").replace(/_/g, "/")), decodeURIComponent(escape(window.atob(e)));
              }
              async function j(e) {
                const r = e.type,
                  n = await N();
                var i = e.getConfig().photoUrl;
                if (i) {
                  var o = { method: "GET", url: i, responseType: "blob", headers: { "X-UserType": r } };
                  try {
                    const e = await E(o);
                    t.trackEvent("Request.GotServerPhoto", { EventCategory: "Request" });
                    var a = new FileReader();
                    (a.onload = async () => (Y(n, { photo: a.result }), a.result)), a.readAsDataURL(e);
                  } catch (e) {
                    return null;
                  }
                }
              }
              function q() {
                return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
                  let t = performance.now();
                  const r = (t + 16 * Math.random()) % 16 | 0;
                  return (t = Math.floor(t / 16)), ("x" === e ? r : (3 & r) | 8).toString(16);
                });
              }
              return (
                o.default.isBackgroundContext() &&
                  (async function () {
                    t.debug("initCheckTransition"), await C(), setInterval(C, A);
                  })(),
                {
                  acquireToken: p,
                  clearToken: T,
                  isLoggedIn: async function () {
                    var e = await i.get(["userType", "identity"]);
                    return e.identity && e.userType && e.userType !== c.USER_TYPE.NONE;
                  },
                  getEndpointUrlForCurrentUser: async function (e) {
                    const t = await N();
                    if (!t || t === c.USER_TYPE.NONE) return null;
                    var r = await L(t);
                    return r ? r.getConfig()[e] : null;
                  },
                  getUserType: N,
                  getUserInfo: k,
                  getUserPhoto: async function () {
                    var e = await N();
                    if (e === c.USER_TYPE.NONE)
                      return t.warn("UserService.getUserPhoto: no signed-in user"), Promise.reject(c.RECENTS.ERROR.UNSUPPORTED_USER_TYPE);
                    var r = await k(e);
                    return r && r.photo
                      ? (t.trackEvent("Request.GotLocalPhoto", { EventCategory: "Request" }), r.photo)
                      : Promise.reject("No photo in local storage");
                  },
                  getUserDataBoundary: async function () {
                    return (await i.get("dataBoundary")).dataBoundary || c.USER_DATA_BOUNDARY.NONE;
                  },
                  getUserAndTenantId: async function () {
                    var e = await i.get("userId"),
                      t = await i.get("tenantId");
                    return { userId: e.userId, tenantId: t.tenantId };
                  },
                  httpRequest: E,
                  navigateToAuthEndpoint: U,
                  saveUserInfo: Y,
                  waitForUserInfo: async function (e) {
                    return new Promise(async (r) => {
                      var n = await k(e);
                      if (o.default.isNotUndefinedOrNull(n)) return r(n);
                      a.default.runtime.onMessage.addListener(u);
                      var i = o.default.isExtensionInTestingMode() ? c.TIMEOUT.USER_INFO_LOOKUP_TEST : c.TIMEOUT.USER_INFO_LOOKUP,
                        s = setTimeout(() => {
                          t.warn(`userService.waitForUserInfo timed out after ${c.TIMEOUT.USER_INFO_LOOKUP} ms - ${e}`), d(), r(n);
                        }, i);
                      function u(e) {
                        e.activity === c.ACTIVITY.USERINFO_AVAILABLE.NAME && (d(), clearTimeout(s), r(e.data));
                      }
                      function d() {
                        a.default.runtime.onMessage.removeListener(u);
                      }
                    });
                  },
                  getUserLicenseInfo: async function () {
                    var e = await k();
                    return ["driveQuota", "licenses"].reduce((t, r) => (e[r] && (t[r] = e[r]), t), {});
                  },
                  useAuthNext: y,
                  authorize: O,
                  getAccessToken: M,
                  getPhotoFromServer: j,
                  login: R,
                  logout: w,
                  lookupUserInfo: B,
                  createOtelSink: S
                }
              );
            }
          ]).name;
        var O = r(6828);
        i()
          .module("app.background", [])
          .controller("BackgroundController", [
            "$window",
            "$http",
            "$q",
            "$log",
            "notification",
            "storage",
            "userService",
            "fileService",
            "copyPasteService",
            function (e, t, r, n, i, s, u, d, l) {
              var f, p, E;
              u.isLoggedIn().then((t) => {
                if (
                  (t ? o.default.setIcon(c.BROWSER_ICON.DEFAULT) : o.default.setIcon(c.BROWSER_ICON.INACTIVE),
                  !0 === t && 0 === e.otelLogger.telemetrySinks.length)
                ) {
                  const e = u.getUserType(),
                    t = u.getUserDataBoundary(),
                    r = u.getUserAndTenantId();
                  u.createOtelSink(e, t, r);
                }
              }),
                s.get("webRedirect_disabled").then(function (e) {
                  f = o.default.isNotUndefinedOrNull(e.webRedirect_disabled) && e.webRedirect_disabled;
                }),
                a.default.windows.onFocusChanged.addListener(function (e) {
                  !(async function (e) {
                    var t = new Date();
                    if (p) {
                      var r = t - new Date(p.startTime);
                      p.duration += r;
                    } else {
                      var i = await s.get("LastSession");
                      i && i.LastSession && Number.isInteger(i.LastSession.duration) && Date.parse(i.LastSession.startTime)
                        ? (p = i.LastSession).hasOwnProperty("start_time") && ((p.startTime = p.start_time), delete p.start_time)
                        : (p = { startTime: t, duration: 0 });
                    }
                    var o = new Date(p.startTime),
                      a = new Date(t);
                    a.setHours(0, 0, 0, 0),
                      o.setHours(0, 0, 0, 0),
                      (e || a - o) && (n.trackEvent("Session", { StartTime: p.startTime, Duration: p.duration }), (p.duration = 0));
                    (p.startTime = t.toString()), s.set({ LastSession: p });
                  })();
                }),
                a.default.storage.onChanged.addListener(function (e, t) {
                  if (o.default.isNotUndefinedOrNull(e.webRedirect_disabled)) f = e.webRedirect_disabled.newValue;
                  else if (e.identity) {
                    e.identity.newValue ? o.default.setIcon(c.BROWSER_ICON.DEFAULT) : o.default.setIcon(c.BROWSER_ICON.INACTIVE);
                  }
                }),
                a.default.webRequest.onSendHeaders.addListener(
                  function (e) {
                    if ("main_frame" === e.type)
                      for (var t = 0; t < e.requestHeaders.length; ++t)
                        if ("Referer" === e.requestHeaders[t].name)
                          return void (E = e.requestHeaders[t].value.indexOf("officeapps.live.com") >= 0 ? null : e.tabId);
                  },
                  {
                    urls: [
                      "*://*/*.doc",
                      "*://*/*.doct",
                      "*://*/*.docx",
                      "*://*/*.dotx",
                      "*://*/*.odt",
                      "*://*/*.ppt",
                      "*://*/*.pot",
                      "*://*/*.pps",
                      "*://*/*.pptx",
                      "*://*/*.ppsx",
                      "*://*/*.odp",
                      "*://*/*.xls",
                      "*://*/*.xlsx",
                      "*://*/*.xlsm",
                      "*://*/*.xlsb",
                      "*://*/*.ods"
                    ]
                  },
                  ["requestHeaders"]
                ),
                a.default.webRequest.onHeadersReceived.addListener(
                  function (e) {
                    if (
                      !f &&
                      "main_frame" === e.type &&
                      !(
                        o.default.isUndefinedOrNull(e.responseHeaders) ||
                        o.default.isUndefinedOrNull(E) ||
                        o.default.isUndefinedOrNull(e.tabId) ||
                        E !== e.tabId
                      )
                    ) {
                      for (var t = {}, r = 0; r < e.responseHeaders.length; ++r) t[e.responseHeaders[r].name] = e.responseHeaders[r].value;
                      if (!m(t, "Cache-Control") && !m(t, "Pragma"))
                        return t["Content-Type"]
                          ? c.FILE.OFFICE_MIME_TYPES[t["Content-Type"].toLowerCase()]
                            ? (n.trackEvent("OpenDocument_BrowserWebDocument"),
                              s.get("displayWebDocRedirectNotification").then(function (e) {
                                (o.default.isUndefinedOrNull(e.displayWebDocRedirectNotification) ||
                                  !0 === e.displayWebDocRedirectNotification) &&
                                  i.show(c.NOTIFICATION.WEBDOCREDIRECT);
                              }),
                              { redirectUrl: "https://view.officeapps.live.com/op/view.aspx?src=" + e.url })
                            : void n.trackEvent("WebRequest_Header", { contentType: t["Content-Type"] })
                          : void 0;
                    }
                  },
                  {
                    urls: [
                      "*://*/*.doc",
                      "*://*/*.doct",
                      "*://*/*.docx",
                      "*://*/*.dotx",
                      "*://*/*.odt",
                      "*://*/*.ppt",
                      "*://*/*.pot",
                      "*://*/*.pps",
                      "*://*/*.pptx",
                      "*://*/*.ppsx",
                      "*://*/*.odp",
                      "*://*/*.xls",
                      "*://*/*.xlsx",
                      "*://*/*.xlsm",
                      "*://*/*.xlsb",
                      "*://*/*.ods"
                    ]
                  },
                  ["responseHeaders", "blocking"]
                ),
                a.default.webRequest.onBeforeRequest.addListener(
                  function (e) {
                    if ("main_frame" === e.type) {
                      n.trackEvent("OpenDocument_BrowserDragAndDrop");
                      var t = e.tabId;
                      return (
                        d.upload(e.url, c.FILE.ORIGIN.LOCAL_PATH, function (e) {
                          o.default.isUndefinedOrNull(e) || I(e, t);
                        }),
                        { redirectUrl: c.LINKS.PROGRESSPAGE_URL }
                      );
                    }
                  },
                  {
                    urls: [
                      "file:///*.doc",
                      "file:///*.doct",
                      "file:///*.docx",
                      "file:///*.dotx",
                      "file:///*.odt",
                      "file:///*.ppt",
                      "file:///*.pot",
                      "file:///*.pps",
                      "file:///*.pptx",
                      "file:///*.ppsx",
                      "file:///*.odp",
                      "file:///*.xlsx",
                      "file:///*.xlsm",
                      "file:///*.xlsb",
                      "file:///*.ods"
                    ]
                  },
                  ["blocking"]
                ),
                a.default.webRequest.onErrorOccurred.addListener(
                  function (e) {
                    n.error(`BackgroundWebRequestOnErrorOccured - ${e.error}`);
                  },
                  {
                    urls: [
                      "file:///*.doc",
                      "file:///*.doct",
                      "file:///*.docx",
                      "file:///*.dotx",
                      "file:///*.odt",
                      "file:///*.ppt",
                      "file:///*.pot",
                      "file:///*.pps",
                      "file:///*.pptx",
                      "file:///*.ppsx",
                      "file:///*.odp",
                      "file:///*.xlsx",
                      "file:///*.xlsm",
                      "file:///*.xlsb",
                      "file:///*.ods"
                    ]
                  }
                ),
                a.default.runtime.onInstalled.addListener(async function (e) {
                  var t = o.default.getManifest(),
                    r = t ? t.version : -1;
                  if ("install" === e.reason) {
                    n.trackEvent("Action.Install", { AppVersion: r, EventCategory: "Action", Action_Type: "Click" }),
                      a.default.runtime.getPlatformInfo((e) => {
                        "cros" === e.os && i.show(c.NOTIFICATION.SETDEFAULT);
                      });
                    try {
                      const e = await s.get(["deviceId", "LastSession"]);
                      if (Object.keys(e).length) return;
                    } catch (e) {}
                  } else
                    "update" === e.reason &&
                      (n.trackEvent("Feature.AppUpdated", { AppVersion: r, PreviousVersion: e.previousVersion, EventCategory: "Feature" }),
                      o.default.isNotUndefinedOrNull(window.localStorage.getItem(c.OAUTH.SERVICE_ID)) &&
                        (s.clear(), window.localStorage.clear()),
                      s.get("userInfo").then(function (e) {
                        o.default.isNotUndefinedOrNull(e) &&
                          o.default.isNotUndefinedOrNull(e.userInfo) &&
                          (o.default.isNotUndefinedOrNull(e.userInfo.id) || o.default.isNotUndefinedOrNull(e.userInfo.profile)) &&
                          (s.clear(), window.localStorage.clear());
                      }),
                      r < "3.1.1" && s.remove("identity"));
                }),
                a.default.notifications.onButtonClicked.addListener(function (e) {
                  switch (e) {
                    case c.NOTIFICATION.AUTOSAVE.id:
                      s.set({ displayAutoSaveNotification: !1 });
                      break;
                    case c.NOTIFICATION.WEBDOCREDIRECT.id:
                      s.set({ displayWebDocRedirectNotification: !1 });
                  }
                }),
                a.default.notifications.onClicked.addListener(function (e) {
                  switch (e) {
                    case c.NOTIFICATION.FILEACCESS.id:
                      a.default.tabs.create({ url: c.LINKS.SETTINGS_URL });
                      break;
                    case c.NOTIFICATION.INVALIDSUBSCRIPTION.id:
                      a.default.tabs.create({ url: c.LINKS.OFFICE_URL });
                  }
                }),
                a.default.runtime.onMessage.addListener(function (e, t, r) {
                  switch (e.eventId) {
                    case "telemetryEvent":
                    case "newActivityTelemetryEvent":
                      return;
                  }
                  if (e.activity) {
                    switch (e.activity) {
                      case c.ACTIVITY.LOG.NAME:
                        var o = void 0;
                        if (t.url) {
                          var s = new URL(t.url);
                          o = s.origin + s.pathname;
                        }
                        return void n[e.severity.toLowerCase()]({ message: e.log, stack: e.stack, filename: e.filename, source: o });
                      case c.ACTIVITY.SSO.NAME:
                        try {
                          if (
                            ((e.body.sender = t.origin),
                            0 == "GetSupportedUrls".localeCompare(e.body.method, void 0, { sensitivity: "base" }))
                          )
                            return v(T(), r), !0;
                          a.default.runtime.sendNativeMessage(c.SSO.MESSAGE_CHANNEL, e.body, function (e) {
                            var t = {};
                            n.debug(`BrowserCore response: ${JSON.stringify(e)}`),
                              e
                                ? e.status === c.SSO.RESPONSE_STATUS_FAIL
                                  ? v(e, r)
                                  : ((t = Object.assign({ status: c.SSO.RESPONSE_STATUS_SUCCESS, result: e })),
                                    n.trackEvent("Diagnostic.SsoSuccess", { EventCategory: "Diagnostic" }),
                                    r(t))
                                : v(
                                    {
                                      status: c.SSO.RESPONSE_STATUS_FAIL,
                                      code: c.SSO.RESPONSE_CODE_NO_SUPPORT,
                                      description: a.default.runtime.lastError.message
                                    },
                                    r
                                  );
                          });
                        } catch (e) {
                          v({ status: c.SSO.RESPONSE_STATUS_FAIL, code: c.SSO.RESPONSE_CODE_NO_SUPPORT, description: e.toString() }, r);
                        }
                        return !0;
                      case c.ACTIVITY.TELEMETRY.NAME:
                        switch (e.command) {
                          case c.TELEMETRY.COMMAND.SET_DISABLED:
                            n.setEnabledSetting(e.enabled);
                            break;
                          case c.TELEMETRY.COMMAND.TRACK_EVENT:
                            n.trackEvent(e.eventName, e.properties, e.measurements);
                            break;
                          case c.TELEMETRY.COMMAND.TRACK_TRACE:
                            n.trackTrace(e.message, e.properties);
                        }
                        break;
                      case c.ACTIVITY.NOTIFICATION.NAME:
                        i.show(e.notification);
                        break;
                      case c.ACTIVITY.AUTHENTICATION.NAME:
                      case c.ACTIVITY.AUTHORIZATION.NAME:
                      case c.ACTIVITY.LOGOUT.NAME:
                      case c.ACTIVITY.REQUEST_TOKEN.NAME:
                        return;
                      default:
                        return void n.warn(`Unhandled activity:${JSON.stringify(e)}`);
                    }
                    n.debug(`BackgroundController.onMessage: Processed activity ${e.activity}`);
                  }
                }),
                o.default.isChrome() &&
                  ((0, O.checkPermission)(["clipboardRead"], n).then((e) => {
                    e &&
                      a.default.runtime.onMessageExternal.addListener(function (e, t, r) {
                        switch (e.command) {
                          case c.COPY_PASTE.TEST:
                            return l.handleTestCommand(e, t, r);
                          case c.COPY_PASTE.PASTE:
                            return l.handlePasteCommand(e, t, r);
                          case c.COPY_PASTE.GET_CLIPBOARD_DATA:
                            return l.handleGetClipboardDataCommand(e, t, r);
                          case c.COPY_PASTE.GET_AVAILABLE_COMMANDS:
                            return l.handleGetAvailableCommands(e, t, r);
                          default:
                            return !1;
                        }
                      });
                  }),
                  e.addEventListener("paste", l.onPasteEvent),
                  (0, O.checkPermission)(["identity", "identity.email"], n).then((e) => {
                    e &&
                      a.default.tabs.onUpdated.addListener(function (e, r, n) {
                        var i;
                        !r.url ||
                          (-1 ==
                            (i = r.url).search(
                              /^https:\/\/login\.microsoftonline\.com\/(common|.{8}-.{4}-.{4}-.{4}-.{12})\/oauth2\/authorize/
                            ) &&
                            -1 === i.indexOf("https://login.live.com/login.srf")) ||
                          -1 !== r.url.indexOf("login_hint") ||
                          -1 !== r.url.indexOf("username") ||
                          a.default.identity.getProfileUserInfo(function (n) {
                            if (n && n.email) {
                              var i = n.email,
                                o = { method: "GET", url: c.O365CONFIG.FEDERATED_URL + "?login=" + i };
                              t(o).then(
                                function (t) {
                                  var n = t.data;
                                  if (n && "Federated" === n.NameSpaceType && "live.com" !== n.DomainName) {
                                    var o = -1 === r.url.indexOf("https://login.live.com/login.srf") ? "login_hint" : "username",
                                      s = r.url;
                                    -1 !== s.indexOf("?") ? (s += "&" + o + "=" + i) : (s += "?" + o + "=" + i),
                                      a.default.tabs.update(e, { url: s });
                                  }
                                },
                                function () {}
                              );
                            }
                          });
                      });
                  }));
              function g(e, t) {
                o.default.isUndefinedOrNull(e)
                  ? t(null)
                  : d.upload(e, c.FILE.ORIGIN.HTML5, function (e) {
                      t(e);
                    });
              }
              function I(e, t) {
                var i = r.defer();
                i.resolve(
                  o.default.isNotUndefinedOrNull(t)
                    ? t
                    : (function (e) {
                        o.default.isUndefinedOrNull(e) && (e = c.LINKS.PROGRESSPAGE_URL);
                        var t = r.defer();
                        return (
                          o.default.safeOpenNewTab(e, !0, function (e) {
                            t.resolve(e.id);
                          }),
                          t.promise
                        );
                      })(e)
                ),
                  i.promise.then(function (t) {
                    o.default.isUndefinedOrNull(t)
                      ? n.warn("BackgroundController.openFileUrlInTab: tabIdPromise null or undefined")
                      : a.default.tabs.update(t, { url: e });
                  });
              }
              function m(e, t) {
                return e[t] && -1 !== e[t].toLowerCase().indexOf("private");
              }
              function v(e, t) {
                if (
                  (function (e) {
                    return e.ext && e.ext.error === c.SSO.RESPONSE_CODE_INVALID;
                  })(e)
                ) {
                  const e = T();
                  n.trackEvent("Diagnostic.SsoFail", e, { EventCategory: "Diagnostic" }), t(e);
                } else n.trackEvent("Diagnostic.SsoFail", e, { EventCategory: "Diagnostic" }), t(e);
              }
              function T() {
                return {
                  status: "Fail",
                  code: "OSError",
                  description: "Error processing request.",
                  ext: { error: c.SSO.RESPONSE_CODE_INVALID }
                };
              }
              a.default.runtime.getPlatformInfo(function (e) {
                "cros" === e.os &&
                  (0, O.checkPermission)("fileBrowserHandler", n).then((e) => {
                    e &&
                      a.default.fileBrowserHandler.onExecute.addListener(function (e, t) {
                        !(function (e, t) {
                          if (o.default.isUndefinedOrNull(e)) t(null);
                          else
                            for (var r = 0; r < e.length; ++r)
                              e[r].file(function (e) {
                                g(e, function (e) {
                                  t(e);
                                });
                              });
                        })(t.entries, function (e) {
                          o.default.isUndefinedOrNull(e) || I(e, null);
                        });
                      });
                  });
              }),
                window.addEventListener(
                  "message",
                  function (e) {
                    0 === a.default.runtime.getURL("").search(new RegExp(e.origin, "i"))
                      ? "[object File]" === Object.prototype.toString.call(e.data)
                        ? g(e.data, function (e) {
                            o.default.isUndefinedOrNull(e) || I(e, null);
                          })
                        : n.error(
                            `BackgroundController.receiveMessage: Error processing message with event.data type ${Object.prototype.toString.call(
                              e.data
                            )}`
                          )
                      : n.error(`BackgroundController.receiveMessage: Error processing message with unrecognized origin ${e.origin}`);
                  },
                  !1
                ),
                n.getEnabledSetting().then(function (e) {});
            }
          ]);
        var T = r(6966),
          S = r(459);
        i()
          .module("app.copypaste", [])
          .factory("copyPasteService", ["$log", "imageReader", "$window", (e, t, r) => new s.s(e, t, r)])
          .factory("fileReader", () => new T.H())
          .factory("imageReader", ["$log", "fileReader", (e, t) => new S.T(e, t)]).name;
        i()
          .module("app.file", [])
          .factory("fileService", [
            "$http",
            "$q",
            "$log",
            "localize",
            "notification",
            "storage",
            "fileLoader",
            "userService",
            "sharePointFileService",
            "oneDriveFileService",
            function (e, t, r, n, i, a, s, u, d, l) {
              var f = c.USER_TYPE.NONE;
              function p(e, t) {
                var n;
                u.getUserType().then(function (a) {
                  (f = a),
                    (n = (function (e) {
                      var t = null;
                      switch (e) {
                        case c.USER_TYPE.O365:
                          t = d;
                          break;
                        case c.USER_TYPE.MSA:
                          t = l;
                          break;
                        default:
                          i.show(c.NOTIFICATION.NOTSIGNEDIN),
                            r.trackEvent("Error", { EventName: "FileUploadFail", Message: "User not signed in", EventCategory: "Error" });
                      }
                      return t;
                    })(a)),
                    o.default.isUndefinedOrNull(n)
                      ? t(null)
                      : (r.trackEvent("Request.FileUpload", {
                          FileExtension: o.default.getFileExtension(e.name),
                          EventCategory: "Request"
                        }),
                        i.show(c.NOTIFICATION.FILE_UPLOAD_IN_PROGRESS),
                        n.doUpload(e, function (e, n, a) {
                          o.default.isUndefinedOrNull(e) &&
                            (function (e, t) {
                              o.default.isUndefinedOrNull(t) ||
                                (415 === t
                                  ? i.show(c.NOTIFICATION.FILE_UPLOAD_FAILURE_UNSUPPORTED_MEDIA)
                                  : 502 === t || 503 === t || 509 === t
                                  ? i.show(c.NOTIFICATION.FILE_UPLOAD_FAILURE_SERVER)
                                  : e &&
                                    (r.error(`fileService.doUpload - ${t} - ${JSON.stringify(e)}`),
                                    i.show(c.NOTIFICATION.FILE_UPLOAD_FAILURE_GENERIC)));
                            })(n, a),
                            t(e);
                        }));
                });
              }
              return {
                upload: function (e, t, n) {
                  if (o.default.isUndefinedOrNull(e) || (t !== c.FILE.ORIGIN.HTML5 && t !== c.FILE.ORIGIN.LOCAL_PATH))
                    return (
                      r.error(`fileService.upload(): Invalid argument: fileInfo: ${JSON.stringify(e)}, fileOrigin: ${t}`), void n(null)
                    );
                  s.loadFile(e, t).then(
                    function (e) {
                      p(e, function (e) {
                        o.default.isUndefinedOrNull(e)
                          ? n(null)
                          : a.get("displayAutoSaveNotification").then(function (t) {
                              if (o.default.isUndefinedOrNull(t.displayAutoSaveNotification) || !0 === t.displayAutoSaveNotification) {
                                var r = c.NOTIFICATION.AUTOSAVE;
                                (r.message =
                                  f === c.USER_TYPE.MSA ? c.NOTIFICATION.AUTOSAVETOONEDRIVE : c.NOTIFICATION.AUTOSAVETOSHAREPOINT),
                                  i.show(r);
                              }
                              n(e);
                            });
                      });
                    },
                    function (e) {
                      !(function (e) {
                        if (!o.default.isUndefinedOrNull(e))
                          switch (e) {
                            case c.FILE.ERROR.FILE_SIZE_MAX_EXCEEDED:
                              i.show(c.NOTIFICATION.FILE_MAX_SIZE_BYTE_LIMIT_REACHED);
                              break;
                            case c.FILE.ERROR.UNSUPPORTED_FILE_TYPE:
                              i.show(c.NOTIFICATION.UNSUPPORTEDFILETYPE);
                              break;
                            default:
                              r.error(`fileService.loadFile - ${e}`), i.show(c.NOTIFICATION.FILE_UPLOAD_FAILURE_GENERIC);
                          }
                      })(e),
                        n(null);
                    }
                  );
                }
              };
            }
          ])
          .factory("fileLoader", [
            "$http",
            "$q",
            "$log",
            function (e, t, r) {
              var n = {
                loadFile: function (e, n) {
                  var i = t.defer();
                  if (
                    o.default.isUndefinedOrNull(e) ||
                    (o.default.isUndefinedOrNull(n) && n !== c.FILE.ORIGIN.HTML5 && n !== c.FILE.ORIGIN.LOCAL_PATH)
                  )
                    return i.reject(`fileLoader.loadFile(): Invalid argument: fileInfo: ${JSON.stringify(e)}, fileOrigin: ${n}`), i.promise;
                  if (n === c.FILE.ORIGIN.HTML5) {
                    if (e.size > c.FILE.MAX_SIZE_BYTE_LIMIT)
                      return (
                        r.info(`fileLoader.loadFile(): Attempt to upload file with size exceeding limit - ${e.size} bytes`),
                        i.reject(c.FILE.ERROR.FILE_SIZE_MAX_EXCEEDED),
                        i.promise
                      );
                    (function (e) {
                      var r = t.defer();
                      if (o.default.isUndefinedOrNull(c.FILE.SUPPORTED_FILE_TYPES[o.default.getFileExtension(e.name)]))
                        return r.reject(c.FILE.ERROR.UNSUPPORTED_FILE_TYPE), r.promise;
                      var n = new FileReader(),
                        i = {};
                      return (
                        (i.name = encodeURI(e.name)),
                        (n.onload = function () {
                          (i.content = new Int8Array(n.result)), r.resolve(i);
                        }),
                        n.readAsArrayBuffer(e),
                        r.promise
                      );
                    })(e).then(
                      function (e) {
                        i.resolve(e);
                      },
                      function (e) {
                        i.reject(e);
                      }
                    );
                  } else
                    (function (e) {
                      var n = t.defer(),
                        i = new XMLHttpRequest();
                      return (
                        i.open("GET", e, !0),
                        (i.responseType = "arraybuffer"),
                        (i.onreadystatechange = function () {
                          if (4 === i.readyState) {
                            if (200 !== i.status && 0 !== i.status)
                              return (
                                r.error(`fileLoader.loadFileFromPath(): XMLHttpRequestError at method loadFileFromPath - ${i.status}`),
                                n.reject(c.FILE.ERROR.LOAD_FROM_PATH),
                                n.promise
                              );
                            var t = {};
                            (t.content = i.response), (t.name = e.replace(/^.*[\\/]/, "")), n.resolve(t);
                          }
                        }),
                        i.send(null),
                        n.promise
                      );
                    })(e).then(
                      function (e) {
                        e.content
                          ? e.content.byteLength > c.FILE.MAX_SIZE_BYTE_LIMIT
                            ? (r.info(
                                `fileLoader.loadFile(): Attempt to upload file with size exceeding limit - ${e.content.byteLength} bytes`
                              ),
                              i.reject(c.FILE.ERROR.FILE_SIZE_MAX_EXCEEDED))
                            : i.resolve(e)
                          : (r.error(), i.reject(c.FILE.ERROR.LOAD_FROM_PATH));
                      },
                      function (e) {
                        i.reject(e);
                      }
                    );
                  return i.promise;
                }
              };
              return n;
            }
          ])
          .service("oneDriveFileService", [
            "$http",
            "$log",
            "localize",
            function (e, t, r) {
              this.doUpload = function (n, i) {
                var o = {
                  method: "PUT",
                  url:
                    c.ONEDRIVE.INSTANCE +
                    "/drive/root:/" +
                    encodeURIComponent(r.getLocalizedString("AppFolderName")) +
                    "/" +
                    n.name +
                    ":/content" +
                    c.ONEDRIVE.QUERY_OPTION,
                  headers: { "Content-Type": "application/octet-stream", "X-UserType": c.USER_TYPE.MSA },
                  data: n.content,
                  transformRequest: []
                };
                e(o).then(
                  function (e) {
                    var r = e.data;
                    t.debug(`oneDriveFileService.doUpload - ${e.status} - ${r.webUrl}`), i(r.webUrl);
                  },
                  function (e) {
                    i(null, null, e.statusText);
                  }
                );
              };
            }
          ])
          .service("sharePointFileService", [
            "$http",
            "$log",
            "localize",
            "userService",
            function (e, t, r, n) {
              this.doUpload = async function (i, a) {
                var s, u;
                i.name =
                  ((s = i.name),
                  (u = new Date().toISOString().replace(/(\d+)-(\d+)-(\d+)T(\d+):(\d+):(\d+).+/, "_$1$2$3_$4$5$6.")),
                  s.replace(".", u));
                var d = await n.getUserInfo(c.USER_TYPE.O365);
                if (o.default.isUndefinedOrNull(d) || o.default.isUndefinedOrNull(d.oneDriveUrl))
                  return t.error("sharePointFileService.doUpload - Invalid OneDriveUrl"), void a(null);
                var l = {
                  method: "PUT",
                  url: c.O365CONFIG.UPLOAD_URL + encodeURIComponent(r.getLocalizedString("AppFolderName")) + "/" + i.name + ":/content",
                  headers: { "Content-Type": "application/octet-stream", "X-UserType": c.USER_TYPE.O365 },
                  data: i.content,
                  transformRequest: []
                };
                e(l).then(
                  function (e) {
                    var r,
                      n,
                      i = e.data,
                      s = e.status;
                    return o.default.isUndefinedOrNull(i.eTag)
                      ? (t.error("sharePointFileService.doUpload - Missing eTag"), void a(null, i, s))
                      : ((r = i.eTag.substring(1, i.eTag.indexOf(","))),
                        o.default.isUndefinedOrNull(i["@microsoft.graph.downloadUrl"])
                          ? (t.error("sharePointFileService.doUpload - Missing downloadUrl"), void a(null, i, s))
                          : ((n = i["@microsoft.graph.downloadUrl"].replace(/download.aspx?.+/, "WopiFrame.aspx?sourcedoc=" + r)),
                            t.debug(`sharePointFileService.doUpload - ${s} - ${n}`),
                            void a(n)));
                  },
                  function (e) {
                    a(null, e.data, e.status);
                  }
                );
              };
            }
          ]).name;
        document.body.setAttribute("data-ng-controller", "BackgroundController as ctrl"),
          document.documentElement.setAttribute("data-ng-app", "app");
        i().module("app", ["localization", "app.common", "app.diagnostics", "app.user", "app.file", "app.background", "app.copypaste"]);
      },
      8096: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = [],
          n = {};
        function i(e, t) {
          for (const [r, n] of Object.entries(t))
            e[r]
              ? typeof n == typeof e[r]
                ? Array.isArray(n)
                  ? (e[r] = e[r].concat(n))
                  : (e[r] = "object" != typeof n ? n : i(e[r], n))
                : console.log(`skipping ${r} due to conflicting types`)
              : (e[r] = n);
          return e;
        }
        t.default = (function () {
          var e = (() => {
            if ("object" == typeof browser) {
              var e = Object.create(browser);
              (e.notifications = {
                clear: function (e, t) {
                  t(!1);
                },
                create: function (e, t, r) {
                  null != t && void 0 !== t.priority && null !== t.priority && t.priority > 0 && window.alert(t.message), r(e);
                },
                onButtonClicked: { addListener: function (e) {} },
                onClicked: { addListener: function (e) {} }
              }),
                (e.runtime = { getPlatformInfo: function (e) {} });
            } else if ("object" == typeof chrome) return Object.create(chrome);
          })();
          if (window.jasmine) {
            (e = i(e || {}, {
              mock: !0,
              browserAction: { setIcon: function (e) {} },
              extension: {
                getURL: function (e) {
                  return "";
                }
              },
              i18n: {
                getUILanguage: function (e, t) {
                  return "";
                },
                getMessage: function () {
                  return "";
                }
              },
              runtime: {
                onMessage: {
                  addListener: function (e) {
                    r.push(e);
                  },
                  removeListener: function (e) {
                    r.splice(r.indexOf(e), 1);
                  }
                },
                sendMessage: function (e) {
                  for (let t = 0; t < r.length; ++t) r[t](e);
                },
                id: "ndjpnladcallmjemlbaebfadecfhkepb"
              },
              storage: {
                local: {
                  get: function (e, t) {
                    t({ [e]: n[e] });
                  },
                  set: function (e) {
                    for (const t in e) e.hasOwnProperty(t) && (n[t] = e[t]);
                  },
                  remove: function (e, t) {
                    delete n[e], t(n);
                  },
                  clear: function (e, t) {
                    n = {};
                  }
                }
              },
              tabs: {
                create: function (e, t) {
                  t && t({});
                }
              }
            })),
              window.chrome || (window.chrome = e);
          }
          return window.BrowserHandler || (window.BrowserHandler = e), e;
        })();
      },
      6828: function (e, t, r) {
        "use strict";
        var n =
          (this && this.__awaiter) ||
          function (e, t, r, n) {
            return new (r || (r = Promise))(function (i, o) {
              function a(e) {
                try {
                  c(n.next(e));
                } catch (e) {
                  o(e);
                }
              }
              function s(e) {
                try {
                  c(n.throw(e));
                } catch (e) {
                  o(e);
                }
              }
              function c(e) {
                var t;
                e.done
                  ? i(e.value)
                  : ((t = e.value),
                    t instanceof r
                      ? t
                      : new r(function (e) {
                          e(t);
                        })).then(a, s);
              }
              c((n = n.apply(e, t || [])).next());
            });
          };
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.preemptivePermissionsRequest = t.checkPermission = void 0);
        const i = r(8096);
        function o(e) {
          return function (...t) {
            return new Promise((r, n) => {
              t.push(function (...e) {
                return r(...e);
              }),
                e.call(this, ...t);
            });
          };
        }
        function a(e, t = null) {
          return (
            Array.isArray(e) || (e = [e]),
            new Promise((r, a) =>
              n(this, void 0, void 0, function* () {
                var a;
                try {
                  var s = yield (function (e) {
                    return n(this, void 0, void 0, function* () {
                      Array.isArray(e) || (e = [e]);
                      var t = yield o(i.default.permissions.getAll)();
                      return console.debug(`permissions granted: ${JSON.stringify(t)}`), e.filter((e) => !t.permissions.includes(e));
                    });
                  })(e);
                  if (!s.length) return r(!0);
                  var c = yield o(i.default.permissions.contains)({ permissions: s });
                  if ((console.debug(`Granted permissions ${!0 === c ? "" : "do not"} include ${s}`), c)) return r(c);
                  var u = yield o(i.default.permissions.request)({ permissions: s });
                  console.debug(`Requested permissions ${s} ${u ? "granted" : "denied"}`);
                  var d = { Granted: !!u, Permissions: s.toString() };
                  return (
                    !u &&
                      i.default.runtime &&
                      ((d.LastError = null === (a = i.default.runtime.lastError) || void 0 === a ? void 0 : a.message),
                      (d.Id = i.default.runtime.id)),
                    null == t || t.trackEvent("Permission", d),
                    r(!!u)
                  );
                } catch (e) {
                  r(!1);
                }
              })
            )
          );
        }
        (t.checkPermission = a),
          (t.preemptivePermissionsRequest = function () {
            return n(this, void 0, void 0, function* () {
              try {
                var e = i.default.runtime.getManifest().optional_permissions;
                yield a(e);
              } catch (e) {
                console.log(`preemptivePermissionsRequest exception:${e}`);
              }
            });
          });
      },
      6811: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        const n = r(8096);
        window.Utilities ||
          (window.Utilities = {
            deserializeQuery: function (e) {
              var t,
                r = /\+/g,
                n = /([^&=]+)=?([^&]*)/g,
                i = function (e) {
                  return decodeURIComponent(e.replace(r, " "));
                },
                o = {};
              for (t = n.exec(e); t; ) (o[i(t[1])] = i(t[2])), (t = n.exec(e));
              return o;
            },
            getFileExtension: function (e) {
              var t = "";
              if (e) {
                var r = e.match(/(?:\.)(\w+)$/);
                r && r.length > 1 && (t = r[r.length - 1].toLowerCase());
              }
              return t;
            },
            navigateToUrlWithNewTab: function (e, t, r) {
              n.default.tabs.create({ url: e, active: !!this.isUndefinedOrNull(t) || t }, r);
            },
            safeOpenNewTab: function (e, t, r) {
              n.default.windows.getAll((i) => {
                0 === i.length
                  ? n.default.windows.onCreated.addListener(() => this.navigateToUrlWithNewTab(e, t, r))
                  : this.navigateToUrlWithNewTab(e, t, r);
              });
            },
            isNotUndefinedOrNull: function (e) {
              return !this.isUndefinedOrNull(e);
            },
            isUndefinedOrNull: function (e) {
              return null == e;
            },
            isExtensionInTestingMode: function () {
              return this.isNotUndefinedOrNull(window.jasmine);
            },
            isExtensionInDevelopmentMode: function () {
              if (this.isExtensionInTestingMode()) return !1;
              if (window.browser && window.browser.extension) {
                var e = n.default.runtime.getURL("");
                if (null != e && /_microsoftofficeonline_/i.test(e)) return !1;
              }
              if (window.chrome && window.chrome.extension) {
                var t = this.getManifest();
                if (null == t) return !1;
                if (void 0 !== t.key || void 0 !== t.update_url) return !1;
              }
              return !0;
            },
            getAppDescription: function () {
              if (window.chrome && window.chrome.extension) return this.getManifest().description;
            },
            getManifest: function () {
              if ("object" != typeof n.default.runtime || "function" != typeof n.default.runtime.getManifest) return null;
              var e = n.default.runtime.getManifest();
              return null == e ? null : e;
            },
            isBackgroundContext: function () {
              var e = window.location.href;
              return (
                !!(
                  window.browser &&
                  window.browser.extension &&
                  /^ms-browser-extension/.test(e) &&
                  window === n.default.extension.getBackgroundPage()
                ) || !!(window.chrome && window.chrome.extension && /^chrome/.test(e) && window === n.default.extension.getBackgroundPage())
              );
            },
            getCurrentTime: function () {
              return Math.round(new Date().getTime() / 1e3);
            },
            isChrome: function () {
              return "Chrome" === this.getBrowserName() && window.navigator.vendor.indexOf("Google") > -1;
            },
            getBrowserAndVersion: function () {
              if (!this.browserVersion) {
                const e = (e) => {
                    const t = new RegExp(`(?<browser>${e})/(?<version>[0-9.]+)`, "i"),
                      r = window.navigator.userAgent.match(t);
                    if (r && r.groups) return r.groups;
                    if (window.navigator.userAgentData) {
                      const t = window.navigator.userAgentData.brands.find((t) => t.brand.match(new RegExp(e, "i")));
                      if (t) return { browser: t.brand, version: t.version };
                    }
                  },
                  t = ["OPe?R", "Edge?", "Chrome", "Safari", "Firefox"];
                for (const r of t) {
                  const t = e(r);
                  if (t) {
                    this.browserVersion = t;
                    break;
                  }
                }
              }
              return this.browserVersion;
            },
            getBrowserName: function () {
              const e = this.getBrowserAndVersion();
              return e ? e.browser : "Chrome";
            },
            isRTL: function () {
              var e = n.default.i18n.getUILanguage();
              return !!(/^ar/i.test(e) || /^fa/i.test(e) || /^he/i.test(e));
            },
            setIcon: function (e) {
              n.default.browserAction.setIcon({ path: e });
            },
            getNewId: function () {
              return window.crypto.randomUUID();
            }
          }),
          (t.default = window.Utilities);
      },
      4622: (e, t, r) => {
        "use strict";
        var n;
        const i = r(6811),
          o = r(6076),
          a = r(3517),
          s = r(7014);
        var c = "2c8ba5f543dc45cabca6a8903ae65ec0-17b4b4b1-0680-4459-8c45-b7c284ec277d-7329";
        const u = new a.TelemetryLogger(void 0, void 0, { enableQueue: !0 });
        u.setTenantToken("Office.Taos.M365Extension", "1ad73c205de94133974c390ca1abac47-17f7e2b2-1b01-44f9-8ff4-c8bc7ed524c7-6756"),
          (window.otelLogger = u);
        const d = s.getDeviceInfo();
        window.sessionStorage.setItem(
          "deviceType",
          null === (n = null == d ? void 0 : d.platform) || void 0 === n ? void 0 : n.platformType
        );
        var l = i.default.getNewId();
        window.sessionStorage.setItem("browserSessionId", l), o.AWTLogManager.initialize(c);
        const f = i.default.getBrowserAndVersion();
        f &&
          (o.AWTLogManager.setContext("DeviceInfo.BrowserName", f.browser),
          o.AWTLogManager.setContext("DeviceInfo.BrowserVersion", f.version));
        var p = o.AWTLogManager.getLogger(c);
        window.ariaLogger = p;
      },
      454: () => {
        !(function () {
          "use strict";
          var e = window.BrowserHandler;
          e || (e = chrome || browser),
            angular
              .module("localization", [])
              .factory("localize", [
                "$filter",
                function (t) {
                  return {
                    getLocalizedString: function (t) {
                      return e.i18n.getMessage(t);
                    }
                  };
                }
              ])
              .filter("i18n", [
                "localize",
                function (e) {
                  return function (t) {
                    return e.getLocalizedString(t);
                  };
                }
              ])
              .directive("i18n", [
                "localize",
                function (e) {
                  var t = {
                    restrict: "EAC",
                    updateText: function (t, r) {
                      var n = r.split("|");
                      if (!(n.length <= 1)) {
                        var i = e.getLocalizedString(n[0]);
                        if (i) {
                          for (var o = 1; o < n.length; o++) {
                            var a = "{" + (o - 1) + "}";
                            i = i.replace(a, n[o]);
                          }
                          t.text(i);
                        }
                      }
                    },
                    link: function (e, r, n) {
                      n.$observe("i18n", function (e) {
                        t.updateText(r, n.i18n);
                      });
                    }
                  };
                  return t;
                }
              ])
              .directive("i18nAttr", [
                "localize",
                function (e) {
                  var t = {
                    restrict: "EAC",
                    updateText: function (t, r) {
                      var n = r.split("|");
                      if (!(n.length < 2)) {
                        var i = e.getLocalizedString(n[0]);
                        if (i) {
                          for (var o = 2; o < n.length; o++) {
                            var a = "{" + (o - 2) + "}";
                            i = i.replace(a, n[o]);
                          }
                          t.attr(n[1], i);
                        }
                      }
                    },
                    link: function (e, r, n) {
                      n.$observe("i18nAttr", function (e) {
                        t.updateText(r, e);
                      });
                    }
                  };
                  return t;
                }
              ]);
        })();
      }
    },
    r = {};
  function n(e) {
    var i = r[e];
    if (void 0 !== i) return i.exports;
    var o = (r[e] = { exports: {} });
    return t[e].call(o.exports, o, o.exports, n), o.exports;
  }
  (n.m = t),
    (e = []),
    (n.O = (t, r, i, o) => {
      if (!r) {
        var a = 1 / 0;
        for (d = 0; d < e.length; d++) {
          for (var [r, i, o] = e[d], s = !0, c = 0; c < r.length; c++)
            (!1 & o || a >= o) && Object.keys(n.O).every((e) => n.O[e](r[c])) ? r.splice(c--, 1) : ((s = !1), o < a && (a = o));
          if (s) {
            e.splice(d--, 1);
            var u = i();
            void 0 !== u && (t = u);
          }
        }
        return t;
      }
      o = o || 0;
      for (var d = e.length; d > 0 && e[d - 1][2] > o; d--) e[d] = e[d - 1];
      e[d] = [r, i, o];
    }),
    (n.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return n.d(t, { a: t }), t;
    }),
    (n.d = (e, t) => {
      for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.r = (e) => {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.j = 965),
    (() => {
      var e = { 965: 0 };
      n.O.j = (t) => 0 === e[t];
      var t = (t, r) => {
          var i,
            o,
            [a, s, c] = r,
            u = 0;
          if (a.some((t) => 0 !== e[t])) {
            for (i in s) n.o(s, i) && (n.m[i] = s[i]);
            if (c) var d = c(n);
          }
          for (t && t(r); u < a.length; u++) (o = a[u]), n.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
          return n.O(d);
        },
        r = (self.webpackChunkofficechromeextension = self.webpackChunkofficechromeextension || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })();
  var i = n.O(void 0, [216], () => n(9750));
  i = n.O(i);
})();
