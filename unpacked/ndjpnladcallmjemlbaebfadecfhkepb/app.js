(() => {
  var e,
    t = {
      8489: (e, t, n) => {
        "use strict";
        var r = n(6695),
          i = n.n(r),
          o = (n(7828), n(3234), n(8096)),
          a = (n(454), n(5601));
        const s = {
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
            TEST: a.s.testCommand,
            PASTE: a.s.pasteCommand,
            GET_CLIPBOARD_DATA: a.s.getClipboardDataCommand,
            GET_AVAILABLE_COMMANDS: a.s.getAvailableCommandsCommand
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
        var c = n(6811);
        const l = function (e, t, n, r) {
          var i = 0;
          return {
            request: function (e) {
              return c.default.isUndefinedOrNull(e.timeout) && (e.timeout = s.TIMEOUT.DEFAULT_REQUEST), e;
            },
            responseError: function (o) {
              if (o)
                switch (o.status) {
                  case 0:
                    t.debug(`httpErrorResponseInterceptor - Request cancelled - ${o.config.url}`);
                    break;
                  case 401:
                    t.info(`httpErrorResponseInterceptor - ${o.status} - ${o.config.url} - ${JSON.stringify(o.data)}`);
                    break;
                  case 400:
                    if (
                      c.default.isNotUndefinedOrNull(o.data) &&
                      c.default.isNotUndefinedOrNull(o.data.error_codes) &&
                      50001 === o.data.error_codes[0]
                    ) {
                      t.info(`httpErrorResponseInterceptor -  Invalid AADSerivce - ${o.status} - ${JSON.stringify(o.data)}`);
                      break;
                    }
                    if (
                      c.default.isNotUndefinedOrNull(o.data) &&
                      c.default.isNotUndefinedOrNull(o.data.error_codes) &&
                      50079 === o.data.error_codes[0]
                    ) {
                      if (
                        (t.info(`httpErrorResponseInterceptor -  Interaction required - ${o.status} - ${JSON.stringify(o.data)}`),
                        i < s.ERROR_RETRIES.HTTP_REQUEST)
                      )
                        return (
                          i++,
                          n(function () {
                            return r.get("$http")(o.config);
                          }, s.TIMEOUT.USER_INFO_LOOKUP)
                        );
                      i = 0;
                    }
                    break;
                  case 404:
                    if (o.config.url.startsWith("https://graph.microsoft.com/v1.0/me/drive")) return e.resolve(o);
                  default:
                    t.error(`httpErrorResponseInterceptor - ${o.status} - ${o.config.url} - ${JSON.stringify(o.data)}`);
                }
              return e.reject(o);
            }
          };
        };
        var u = n(8081);
        function d(e, t) {
          function n(e) {
            return e.length > 8e3 ? e.substring(0, 8e3) : e;
          }
          function r(e, n) {
            try {
              t.trackTrace(e, n);
            } catch (e) {}
          }
          function i(e, t, n, r, i) {
            if (c.default.isBackgroundContext())
              try {
                var a = `[${new Date().toLocaleString(void 0, {
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
                })(i)}) ${r ? r + " " : ""} ${e}`;
                console[t.toLowerCase()](a);
              } catch {}
            else o.default.runtime.sendMessage({ activity: "log", severity: t, log: e, filename: r, stack: n });
          }
          var a = function (e, t) {
            return function () {
              var o = [].slice.call(arguments),
                a = o[0],
                s = void 0;
              c.default.isExtensionInDevelopmentMode() && (s = Error().stack);
              var l = n(
                (function (e) {
                  return "string" == typeof e ? e : JSON.stringify(e);
                })(a.message ? a.message : a)
              );
              new Promise((e) => {
                a.stack
                  ? e("string" == typeof a.stack ? n(a.stack).split("\n") : a.stack)
                  : s
                  ? (0, u.mapStackTrace)(
                      s,
                      (t) => {
                        for (; t[0].match("logDecorator.js"); ) t.shift();
                        e(t);
                      },
                      {}
                    )
                  : e([]);
              }).then((n) => {
                var s = "",
                  u = a.source || location;
                if (a.filename) s = a.filename;
                else
                  for (var d of n) {
                    var f = d.match(/\b[\w.]+\b:\d+/g);
                    if (f) {
                      s = f.pop();
                      break;
                    }
                  }
                i(l, t, n, s, u);
                var p = new Date().toLocaleString(void 0, {
                  month: "numeric",
                  day: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                  second: "numeric"
                });
                (o[0] = `[${p}] ${s ? s + " " : ""}${t}: ${l}`),
                  c.default.isExtensionInDevelopmentMode() && e.apply(null, o),
                  "DEBUG" !== t && r(t, { message: l, stack: "Error" === t ? n : "" });
              });
            };
          };
          return (
            (e.debug = a(e.debug, "DEBUG")),
            (e.info = a(e.info, "Info")),
            (e.warn = a(e.warn, "Warn")),
            (e.error = a(e.error, "Error")),
            (e.getEnabledSetting = function () {
              return t.getEnabledSetting();
            }),
            (e.setEnabledSetting = function (n) {
              try {
                t.setEnabledSetting(n);
              } catch (t) {
                e.error(`setEnabledSetting error: ${t}`);
              }
            }),
            (e.trackEvent = function (n, r, i) {
              try {
                t.trackEvent(n, r, i);
              } catch (t) {
                e.error(`trackEvent error with eventName ${n}: ${t}`);
              }
            }),
            (e.trackTrace = r),
            e
          );
        }
        window.dumpStorage = () => {
          window.chrome &&
            window.chrome.storage.local.get(null, (e) => {
              console.log(`result '${JSON.stringify(e, "\t")}'`);
            });
        };
        var f = i()
          .module("app.common", [])
          .config([
            "$httpProvider",
            "$provide",
            function (e, t) {
              t.decorator("$log", ["$delegate", "telemetry", d]), e.interceptors.push("httpInterceptor");
            }
          ])
          .factory("storage", [
            "$q",
            "$log",
            function (e, t) {
              return {
                get: function (n) {
                  var r = e.defer();
                  return (
                    o.default.storage.local.get(n, function (e) {
                      t.debug(`storage: get '${JSON.stringify(n)}', result '${JSON.stringify(e)}'`), r.resolve(e);
                    }),
                    r.promise
                  );
                },
                set: function (e) {
                  t.debug(`storage: set items '${JSON.stringify(e)}'`), o.default.storage.local.set(e);
                },
                remove: function (n) {
                  var r = e.defer();
                  return (
                    o.default.storage.local.remove(n, function (e) {
                      t.debug(`storage: remove '${JSON.stringify(n)}', result '${JSON.stringify(e)}'`), r.resolve(e);
                    }),
                    r.promise
                  );
                },
                clear: function () {
                  var n = e.defer();
                  return (
                    o.default.storage.local.clear(function (e) {
                      t.debug(`storage: clear result '${JSON.stringify(e)}'`), n.resolve(e);
                    }),
                    n.promise
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
                show: function (n) {
                  if (c.default.isBackgroundContext()) {
                    var r;
                    if (void 0 !== n.buttons && null !== n.buttons) {
                      r = [];
                      for (var i = 0; i < n.buttons.length; ++i)
                        (r[i] = {}), (r[i].title = t.getLocalizedString(n.buttons[i].title)), (r[i].iconUrl = n.buttons[i].iconUrl);
                    }
                    o.default.notifications.clear(n.id, function (i) {
                      o.default.notifications.create(
                        n.id,
                        {
                          iconUrl: "../assets/icon.png",
                          imageUrl: n.imageUrl,
                          message: t.getLocalizedString(n.message),
                          priority: n.priority,
                          progress: n.progress,
                          title: "",
                          type: n.type,
                          buttons: r
                        },
                        function (t) {
                          null == t && e.error("CreateNotificationError");
                        }
                      );
                    });
                  } else o.default.runtime.sendMessage({ activity: s.ACTIVITY.NOTIFICATION.NAME, notification: n });
                }
              };
            }
          ])
          .factory("httpInterceptor", ["$q", "$log", "$timeout", "$injector", l]);
        f.name;
        var p = n(7929),
          E = n(5420),
          m = n(132),
          g = n(2530),
          T = n(8668);
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
            function (e, t, n) {
              var r = n.get("userService");
              return {
                request: function (n) {
                  var i = e.defer();
                  if (c.default.isUndefinedOrNull(n) || c.default.isUndefinedOrNull(n.headers))
                    return (
                      t.error("protectedResourceInterceptor.request: http request config is null or undefined"), i.resolve(n), i.promise
                    );
                  var o = n.headers["X-UserType"];
                  if (c.default.isUndefinedOrNull(o)) return i.resolve(n), i.promise;
                  var a = n.headers["X-Resource"];
                  return (
                    delete n.headers["X-Resource"],
                    delete n.headers["X-UserType"],
                    r.acquireToken(o, n.url, a).then((e) => {
                      c.default.isUndefinedOrNull(e)
                        ? t.warn(`failed to get auth token for type:${o} url: ${n.url}, resource ${a}`)
                        : (n.headers.Authorization = "Bearer " + e),
                        i.resolve(n);
                    }),
                    i.promise
                  );
                },
                responseError: function (t) {
                  if (t && 401 === t.status) {
                    if (
                      c.default.isNotUndefinedOrNull(t.config) &&
                      (t.config.url === s.O365CONFIG.SHAREPOINT_URL || t.config.url === s.O365CONFIG.PHOTO_URL)
                    )
                      return e.reject(t);
                    r.clearToken();
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
              (this.type = s.USER_TYPE.MSA),
                (this.type = s.USER_SERVICE_TYPE.MSA),
                (this.userType = s.USER_TYPE.MSA),
                (this.getConfig = function () {
                  return {
                    tokenUrl: s.MSACONFIG.URL,
                    params: {
                      client_id: s.MSACONFIG.CLIENT_ID,
                      client_secret: s.MSACONFIG.CLIENT_SECRET,
                      redirect_uri: s.MSACONFIG.REDIRECT_URI
                    },
                    resource: s.ONEDRIVE.INSTANCE,
                    loginUrl:
                      s.MSACONFIG.INSTANCE +
                      "?response_type=code&client_id=" +
                      s.MSACONFIG.CLIENT_ID +
                      "&redirect_uri=" +
                      s.MSACONFIG.REDIRECT_URI +
                      "&scope=" +
                      s.MSACONFIG.SCOPE,
                    logoutUrl: s.MSACONFIG.LOGOUT_URI,
                    photoUrl: s.MSACONFIG.PHOTO_URL,
                    documentsUrl: s.RECENTS.ONEDRIVE_ENDPOINT
                  };
                }),
                (this.lookupUserInfo = async function (e) {
                  return new Promise((e, n) => {
                    var r = { oneDriveUrl: s.LINKS.APP.ONEDRIVE };
                    t.get("$http")({
                      method: "GET",
                      url: s.MSACONFIG.USERINFO_URL,
                      headers: { "X-UserType": s.USER_SERVICE_TYPE.MSA }
                    }).then(
                      function (t) {
                        var n = t.data;
                        (r.email = n.emails.account), (r.cid = n.id), e(r);
                      },
                      function () {
                        n("msaUser.Service.lookupUserInfo http request failed");
                      }
                    );
                  });
                }),
                (this.getResourceForEndpoint = function (e) {
                  return s.MSACONFIG.SCOPE;
                });
            }
          ])
          .service("o365UserService", [
            "$log",
            "$injector",
            "notification",
            function (e, t, n) {
              (this.type = s.USER_SERVICE_TYPE.O365),
                (this.userType = s.USER_TYPE.O365),
                (this.getConfig = function () {
                  return {
                    tokenUrl: s.O365CONFIG.INSTANCE + "token",
                    params: {
                      client_id: s.O365CONFIG.CLIENT_ID,
                      client_secret: s.O365CONFIG.CLIENT_SECRET,
                      redirect_uri: s.O365CONFIG.REDIRECT_URI,
                      resource: s.O365CONFIG.GRAPH_RESOURCE
                    },
                    resource: s.O365CONFIG.GRAPH_RESOURCE,
                    loginUrl:
                      s.O365CONFIG.INSTANCE +
                      "authorize?response_type=code&client_id=" +
                      s.O365CONFIG.CLIENT_ID +
                      "&redirect_uri=" +
                      s.O365CONFIG.REDIRECT_URI +
                      "&response_mode=query",
                    logoutUrl: s.O365CONFIG.LOGOUT_URI,
                    photoUrl: s.O365CONFIG.PHOTO_URL,
                    documentsUrl: s.O365CONFIG.MRU_URL + s.RECENTS.FILTER
                  };
                }),
                (this.getResourceForEndpoint = function (e) {
                  var t = this.getConfig().resource;
                  if (c.default.isUndefinedOrNull(e)) return t;
                  for (var n in s.O365CONFIG.ENDPOINTS)
                    if (s.O365CONFIG.ENDPOINTS.hasOwnProperty(n) && e.indexOf(n) > -1) {
                      t = s.O365CONFIG.ENDPOINTS[n];
                      break;
                    }
                  return t;
                }),
                (this.lookupUserInfo = async function (r) {
                  var i = (function (t) {
                    var n = {},
                      r = (function (t) {
                        var n = (function (t) {
                          var n = /^([^.\s]*)\.([^.\s]+)\.([^.\s]*)$/.exec(t);
                          if (!n || n.length < 4) return e.error("The returned id_token is not parseable."), null;
                          return { header: n[1], JWSPayload: n[2], JWSSig: n[3] };
                        })(t);
                        if (!n) return null;
                        try {
                          var r = (function (e) {
                            if (((e = e.replace(/-/g, "+").replace(/_/g, "/")), window.atob))
                              return decodeURIComponent(escape(window.atob(e)));
                            return null;
                          })(n.JWSPayload);
                          return r ? JSON.parse(r) : (this._logstatus("The returned id_token could not be base64 url safe decoded."), null);
                        } catch (t) {
                          e.error("The returned id_token could not be decoded: " + t.stack);
                        }
                        return null;
                      })(t);
                    r &&
                      r.hasOwnProperty("aud") &&
                      (r.aud.toLowerCase() === s.O365CONFIG.CLIENT_ID.toLowerCase()
                        ? (r.hasOwnProperty("upn") ? (n.email = r.upn) : r.hasOwnProperty("email") && (n.email = r.email),
                          r.hasOwnProperty("puid") && (n.puid = r.puid),
                          r.hasOwnProperty("tid") && (n.tid = r.tid))
                        : e.error("IdToken has invalid aud field"));
                    return n;
                  })(r.id_token);
                  const o = await (async function () {
                    var r = { method: "GET", url: s.O365CONFIG.ONEDRIVE_URL, headers: { "X-UserType": s.USER_TYPE.O365 } },
                      i = t.get("userService");
                    try {
                      var o = await i.httpRequest(r);
                      return o.webUrl ? o.webUrl : Promise.reject("o365UserService.DiscoverServiceEndpoint - Invalid resource");
                    } catch (r) {
                      return (
                        (function () {
                          var e = t.get("userService");
                          e.clearToken();
                        })(),
                        n.show(s.NOTIFICATION.INVALIDSUBSCRIPTION),
                        e.error("0365User.getOneDriveUrl failed: %s", r),
                        null
                      );
                    }
                  })();
                  i.oneDriveUrl = o;
                  const a = await (async function () {
                    var n = { method: "GET", url: s.O365CONFIG.SHAREPOINT_URL, headers: { "X-UserType": s.USER_SERVICE_TYPE.O365 } },
                      r = t.get("userService");
                    try {
                      var i = await r.httpRequest(n);
                      return i.webUrl ? i.webUrl : Promise.reject("No SharePoint info for user");
                    } catch (t) {
                      return e.error("0365User.getSharePointUrl failed: %s", t), null;
                    }
                  })();
                  return (i.sharePointUrl = a || s.LINKS.APP.SHAREPOINT_DEFAULT), i;
                });
            }
          ])
          .service("msidUserService", [
            "$log",
            "$injector",
            "notification",
            function (e, t, n) {
              const r = s.USER_SERVICE_TYPE.MSID;
              var i = void 0;
              const o = "email openid profile user.read",
                a = "https://graph.microsoft.com/v1.0/me/",
                c = new URL("https://login.microsoftonline.com/common/oauth2/").toString(),
                l = (new URL("https://login.live.com/oauth20_authorize.srf").toString(), new URL("nativeclient", c).toString()),
                u = new URL("v2.0/logoutsession", c).toString(),
                d = new URL("v2.0/authorize", c).toString(),
                f = "e28ff72c-58a5-49ba-8125-42ec264d7cd0",
                p = (() => {
                  var e = new URL(d);
                  return (e.search = m({ prompt: "select_account" })), e.toString();
                })();
              function E() {
                return i || (i = t.get("userService")), i;
              }
              function m(e) {
                const t = { client_id: f, response_type: "id_token token", redirect_uri: l, scope: o, response_mode: "fragment" };
                return new URLSearchParams(Object.assign({}, t, e)).toString();
              }
              async function g() {
                var e = { method: "GET", url: a, headers: { "X-UserType": r } },
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
              async function T() {
                var t = { method: "GET", url: s.O365CONFIG.ONEDRIVE_URL, headers: { "X-UserType": r } };
                try {
                  var i = await E().httpRequest(t);
                  return i.webUrl
                    ? { oneDriveUrl: i.webUrl }
                    : Promise.reject("o365UserService.DiscoverServiceEndpoint - Invalid resource");
                } catch (t) {
                  return (
                    n.show(s.NOTIFICATION.INVALIDSUBSCRIPTION), e.error(`msidUser.fetchOneDriveUrl failed: ${JSON.stringify(t)}`), null
                  );
                }
              }
              async function S() {
                var t = { method: "GET", url: "https://graph.microsoft.com/v1.0/me/drive", headers: { "X-UserType": r } };
                try {
                  var n = await E().httpRequest(t),
                    i = parseInt(n.quota.total) / 1073741824;
                  return (
                    (i = Math.round(100 * i) / 100),
                    e.info(`OneDrive quota: ${JSON.stringify(n.quota, null, "\t")} capacity: ${i}GB`),
                    { driveQuota: n.quota.total, driveQuotaString: `${i}GB` }
                  );
                } catch (e) {
                  return Promise.reject(`msidUser.fetchOneDriveQuota failed: ${e}`);
                }
              }
              return {
                type: r,
                getConfig: function () {
                  return {
                    loginUrl: p,
                    logoutUrl: u,
                    photoUrl: "https://graph.microsoft.com/beta/me/photo/$value",
                    userInfoUrl: a,
                    documentsUrl: "https://graph.microsoft.com/v1.0/me/drive/recent"
                  };
                },
                getResourceForEndpoint: function (t) {
                  if (!t) return o;
                  const n = {
                    "https://graph.microsoft.com": { "/v1.0/me/": o, "/v1.0/me/drive/recent": "Files.ReadWrite.All" },
                    "https://nleditor.osi.office.net": { "/NlEditor/": "https://nleditor.osi.office.net/NlEditor/instrumentation.write" }
                  };
                  try {
                    const e = new URL(t);
                    if (!n.hasOwnProperty(e.origin)) return o;
                    const r = n[e.origin],
                      i = e.pathname;
                    return r[Object.keys(r).reduce((e, t) => (i.startsWith(t) && t.length > e.length ? t : e))];
                  } catch (t) {
                    return e.warning(`msidUser.Service threw an exception: ${t}`), o;
                  }
                },
                lookupUserInfo: async function (e) {
                  const t = [g(), T(), S()];
                  return (await Promise.all(t)).reduce((e, t) => Object.assign(e, t));
                },
                requestAccessToken: async function (t, n) {
                  var i = { scope: t, response_type: "token" };
                  n && n.email && (i.login_hint = n.email);
                  var o = m(i),
                    a = new URL(d);
                  a.search = o.toString();
                  var s = await E().navigateToAuthEndpoint(a.href, r, !0);
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
            function (e, t, n, r, i, a, l, u, d) {
              async function f(e, n, r) {
                var i = {};
                if (!(i = await C(e))) return t.error("userService.acquireToken - Invalid type"), Promise.reject("Invalid userType");
                !r && i.getResourceForEndpoint && (r = i.getResourceForEndpoint(n));
                var o = {};
                try {
                  if ((o = await F(n, r)) && o.access_token && !G(o.expires_on))
                    return t.debug(`Using cached token with resource:'${r}'${n ? " for " + n : ""} `), o.access_token;
                  if (
                    ((o = await (async function (e, n) {
                      if (!e) return t.error("userService.requestAccessToken - Invalid type"), Promise.reject("Invalid userType");
                      const r = await (async function () {
                        return $("refresh_token");
                      })();
                      if (r)
                        return (async function (e, n, r) {
                          if (!e) return t.error("userService.refreshAccessToken - Invalid type"), Promise.reject("Invalid userType");
                          var i = {},
                            o = e.getConfig();
                          (o.params.grant_type = s.OAUTH.REFRESH_TOKEN), (o.params.resource = n), (o.params.refresh_token = r);
                          var a = {
                            method: "POST",
                            url: o.tokenUrl,
                            headers: { "Content-Type": "application/x-www-form-urlencoded;charset=utf-8" },
                            data: new URLSearchParams(o.params).toString()
                          };
                          return (i = await S(a)), i;
                        })(e, n, r);
                      const i = await h();
                      var o = await x(i);
                      if (e.requestAccessToken) var a = await e.requestAccessToken(n, o);
                      return a;
                    })(i, r)),
                    !o)
                  )
                    return Promise.reject("No tokens available");
                  k(i, n, o);
                } catch (i) {
                  t.error(`userService.acquireToken - failed. reason: ${i}, userType: ${e}, endpoint: ${n}, resource: ${r}`);
                }
                return o && o.access_token && o.expires_on && !G(o.expires_on) ? o.access_token : null;
              }
              async function S(e) {
                if (!e) return Promise.reject("Invalid Request");
                var t = new Error().stack,
                  r = new Promise((r, i) => {
                    n.get("$http")(e).then(
                      (e) => {
                        r(e.data);
                      },
                      (n) => {
                        i(`httpRequest failed for url: ${e.url} reason: ${n.statusText} stack:\n ${t}`);
                      }
                    );
                  });
                return await r;
              }
              async function N(e) {
                const n = e.type;
                var r = void 0,
                  o = await C(n),
                  c = !1;
                if (o) {
                  if (e.code) {
                    r = n.userType;
                    try {
                      var l = await (async function (e, n) {
                        if (!e)
                          return (
                            t.error("userService.acquireTokenFromCode - Invalid type"), void Promise.reject("Invalid userService type")
                          );
                        var r = e.getConfig();
                        (r.params.grant_type = s.OAUTH.AUTH_CODE), (r.params.code = n);
                        var i = {
                          method: "POST",
                          url: r.tokenUrl,
                          headers: { "Content-Type": "application/x-www-form-urlencoded;charset=utf-8" },
                          data: new URLSearchParams(r.params).toString()
                        };
                        const o = await S(i);
                        return await k(e, e.getConfig().resource, o), await B(e, o), o.access_token;
                      })(o, e.code);
                      c = !!l;
                    } catch (e) {
                      r === s.USER_TYPE.O365 && a.show(s.NOTIFICATION.INVALIDSUBSCRIPTION);
                    }
                  } else
                    e.id_token &&
                      I(
                        (r = await O(e.id_token)),
                        await (async function (e) {
                          var n = "";
                          if (Object.values(s.USER_DATA_BOUNDARY).includes(e)) n = e;
                          else
                            try {
                              const { header: t, payload: r } = V(e);
                              void 0 === (n = { dataBoundary: r.xms_tdbr }).dataBoundary && (n.dataBoundary = s.USER_DATA_BOUNDARY.NONE),
                                await i.set({ dataBoundary: n });
                            } catch (e) {
                              return (
                                t.error(`userService.setUserDataBoundary - unable to parse token: ${e}`),
                                { type: s.USER_DATA_BOUNDARY.NONE }
                              );
                            }
                          return n;
                        })(e.id_token),
                        await (async function (e) {
                          var n = "",
                            r = "";
                          try {
                            const { header: t, payload: o } = V(e);
                            (n = o.puid), (r = o.tid), await i.set({ userId: o.puid }), await i.set({ tenantId: o.tid });
                          } catch (e) {
                            return void t.error(`userService.setUserAndTenantId - unable to parse token: ${e}`);
                          }
                          return { userId: n, tenantId: r };
                        })(e.id_token)
                      ),
                      e.access_token && (await k(o, o.getConfig().userInfoUrl, e), r || (r = await h()), await B(o, e.id_token)),
                      (c = r !== s.USER_TYPE.NONE);
                  return (
                    e.error &&
                      ("interaction_required" === e.error
                        ? _(await h(), !1)
                        : t.error(
                            `userService.authenticate - authentication returned error: ${e.error} description: ${
                              e.error_description
                            } request: ${JSON.stringify(e)}`
                          )),
                    t.trackEvent("Request.Authorization", { ServiceType: n, Succeeded: c, EventCategory: "Request" }),
                    c ? Promise.resolve() : Promise.reject()
                  );
                }
                t.error("userService.authenticate - Invalid type");
              }
              async function v() {
                return Promise.all([
                  i.remove("accessToken"),
                  i.remove("refreshToken"),
                  i.remove("userInfo"),
                  i.remove("userType"),
                  i.remove("identity")
                ]);
              }
              async function I(e, t, n) {
                const i = new p.Y();
                await i.detectOs();
                const o = { endpointUrl: "EU" === t.dataBoundary && "aad" === e ? E.x.EUDB : E.x.PUBLIC, plugins: [i] },
                  a = [
                    ...g.gV.getFields({ name: "M365Extension", platform: "Web" }),
                    ...g.n5.getFields({
                      primaryIdentitySpace: "aad" === e ? "OrgIdPUID" : "MSAPUID",
                      primaryIdentityHash: n.userId,
                      isAnonymous: !1,
                      tenantId: n.tenantId,
                      tenantGroup: "aad" === e ? "Commercial" : "Consumer"
                    }),
                    T.dt("DeviceType", window.sessionStorage.getItem("deviceType"))
                  ],
                  s = new m.a(a, o);
                (r.otelLogger.telemetrySinks = []), r.otelLogger.addSink(s), r.otelLogger.flushQueue();
              }
              async function h() {
                return (await i.get("userType")).userType || s.USER_TYPE.NONE;
              }
              async function O(e) {
                var t = "";
                if (Object.values(s.USER_TYPE).includes(e)) t = e;
                else {
                  var n = (function (e) {
                    var t = e.scopes || e.scope;
                    if (t && t.includes("wl.")) return { type: s.USER_TYPE.MSA };
                    var n = e.id_token || e;
                    if (!n) return { type: s.USER_TYPE.NONE };
                    const r = {
                      "9188040d-6c67-4c5b-b112-36a304b66dad": { type: s.USER_TYPE.MSA, audience: "prod" },
                      "4925308c-f164-4d2d-bc7e-0631132e9375": { type: s.USER_TYPE.MSA, audience: "ppe" },
                      "72f988bf-86f1-41af-91ab-2d7cd011db47": { type: s.USER_TYPE.O365, audience: "prod", domain: "microsoft.com" },
                      "f686d426-8d16-42db-81b7-ab578e110ccd": { type: s.USER_TYPE.O365, audience: "ppe", domain: "microsoft.com" }
                    };
                    try {
                      const { header: e, payload: t } = V(n);
                      var i = { tenant: t.tid };
                      if (r.hasOwnProperty(i.tenant)) {
                        var o = r[i.tenant];
                        i = Object.assign(i, o);
                      } else i.type = s.USER_TYPE.O365;
                      return i;
                    } catch (e) {
                      return { type: s.USER_TYPE.MSA };
                    }
                  })(e);
                  (t = n.type), delete n.type;
                  var r = { [t]: n },
                    o = await L();
                  D(o, r), await i.set({ identity: o });
                }
                return t !== s.USER_TYPE.NONE && (await i.set({ userType: t })), t;
              }
              function U(e) {
                e.state && (e.state = decodeURIComponent(e.state));
                var [t, n, r] = e.state.split("|");
                return n && (e.type = n), e;
              }
              async function A(e, n, r) {
                return new Promise(async (i, a) => {
                  if (c.default.isBackgroundContext()) {
                    const E = (e = new URL(e)).searchParams;
                    for (const N of ["state", "nonce"]) {
                      var l = E.get(N);
                      l || (l = H()), "state" === N && n && (l += "|" + n + "|" + s.APPINFO_NAME), E.set(N, l);
                    }
                    var u = void 0,
                      d = void 0;
                    function m() {
                      if ((o.default.runtime.onMessage.removeListener(S), u)) {
                        var e = document.getElementById(u);
                        e && e.parentNode.removeChild(e);
                      }
                    }
                    const g = E.get("state"),
                      T = E.get("scope");
                    t.info(`loading auth url:${e.href} ${r ? "in iframe" : ""}`);
                    var f = await x();
                    function S(n, r, c) {
                      if (r.id === o.default.runtime.id) {
                        if (n.activity === s.ACTIVITY.AUTHORIZATION.NAME) {
                          var l = U(n);
                          l || (t.error(`userService.listener - auth url:${e} returned null response `), a(l)),
                            l.state !== g && t.warn(`userService.listener - auth url:${e} mismatched state:${l.state}`),
                            t[l.error ? "error" : "debug"](
                              `userService.listener - auth response:${JSON.stringify(l)} received from url:${e}`
                            ),
                            d && clearTimeout(d),
                            delete l.activity,
                            m(),
                            i(l);
                        }
                      } else t.debug(`auth listener rejected invalid id: ${r.id}`);
                    }
                    if (
                      (f && f.email && !E.has("login_hint") && E.set("login_hint", f.email), o.default.runtime.onMessage.addListener(S), r)
                    ) {
                      E.set("prompt", "none"), (u = "authFrame!" + T);
                      const v = 6e4;
                      d = setTimeout(() => {
                        t.warn(`userService.authInFrame timed out waiting for ${e.toString()} after ${v} ms`),
                          m(),
                          a("Timed out waiting for response from iFrame");
                      }, v);
                      var p = document.getElementById(u);
                      p ||
                        ((p = document.createElement("iframe")).setAttribute("id", u),
                        (p.style.visibility = "hidden"),
                        (p.style.position = "absolute"),
                        (p.style.width = p.style.height = "0"),
                        (p.style.border = "0"),
                        p.setAttribute("sandbox", "allow-scripts allow-same-origin allow-forms"),
                        document.body.appendChild(p),
                        (p.src = e.toString()));
                    } else o.default.tabs.create({ url: e.toString() });
                  } else
                    o.default.runtime.sendMessage({ activity: "requestToken", data: { url: e, type: n, inIFrame: r } }, (e) => {
                      i(e);
                    });
                });
              }
              async function _(e, n = !0) {
                !0 === n && v();
                var r = await C(e);
                if (r.handleLogin) return r.handleLogin();
                var i = r.getConfig().loginUrl;
                if (i) return A(i, r.type);
                t.error("userService.login - Invalid type");
              }
              async function R() {
                const e = await h();
                var n = await C(e);
                if ((v(), n.handleLogout)) await n.handleLogout();
                else {
                  var r = n.getConfig().logoutUrl;
                  if (!r) return void t.error("userService.logout - Invalid type");
                  var i = { method: "GET", url: r };
                  await S(i);
                }
                t.debug(`userService.logout - ${e}`);
              }
              async function w(e) {
                return void 0 !== e && i.set({ authNext: { override: e } }), P({ noLogout: !0 });
              }
              c.default.isBackgroundContext() &&
                o.default.runtime.onMessage.addListener(function (e, t, n) {
                  switch (e.activity) {
                    case s.ACTIVITY.LOGOUT.NAME:
                      return (
                        R().then(() => {
                          n();
                        }),
                        !0
                      );
                    case s.ACTIVITY.AUTHENTICATION.NAME:
                      return (
                        _(e.type).then((e) => {
                          n(e);
                        }),
                        !0
                      );
                    case s.ACTIVITY.AUTHORIZATION.NAME:
                      return (
                        t.id === o.default.runtime.id && e.close && (t.tab && t.tab.id && o.default.tabs.remove(t.tab.id), delete e.close),
                        N(U(e)).then(() => {
                          n();
                        }),
                        !0
                      );
                    case s.ACTIVITY.REQUEST_TOKEN.NAME:
                      return (
                        A(e.data.url, e.data.type, e.data.inIFrame).then((e) => {
                          n(e);
                        }),
                        !0
                      );
                    default:
                      return;
                  }
                }),
                (window.useAuthNext = w),
                (window.checkTransitionAuth = P);
              const y = 864e5;
              async function P(e) {
                var n = new Date();
                const r = n.toUTCString();
                var o = await i.get("authNext");
                n = Math.round(n / 1e3);
                var a = 0;
                if (
                  o.authNext &&
                  o.authNext.lastCheck &&
                  c.default.isNotUndefinedOrNull(o.authNext.flighted) &&
                  ((a = n - o.authNext.lastCheck), (!e || !0 !== e.force) && a < y && o.authNext.flighted)
                )
                  return o.authNext.flighted;
                t.info(`checkTransitionAuth time:${r}`);
                var l = await (async () => {
                  var e = await (async function () {
                      var e = await i.get("deviceId");
                      if (e.deviceId) return e.deviceId;
                      var t = H();
                      return await i.set({ deviceId: t }), t;
                    })(),
                    n = {
                      url: "https://nleditor.osi.office.net/NLEditor/api/V1/BrowserExtension",
                      method: "POST",
                      accept: "application/json",
                      contentType: "application/json",
                      headers: { "X-UserId": e },
                      data: { AppId: "OfficeBX_Online" }
                    },
                    r = {};
                  try {
                    r = await S(n);
                  } catch (e) {
                    t.error(`userService.checkAuthFlighting - Call to editor service failed. error:${JSON.stringify(e)}`);
                  }
                  var o = !1;
                  if (r && r.FeatureFlags && r.FeatureFlags.authNext) {
                    var a = r.FeatureFlags.authNext;
                    o = "string" == typeof a ? "true" === a.toLowerCase() : !!a;
                  }
                  return t.info(`editor featureFlags.authNext returned:${o}`), o;
                })();
                if (
                  (await i.set({ authNext: { flighted: l, lastCheck: n } }),
                  o.authNext && c.default.isNotUndefinedOrNull(o.authNext.override))
                )
                  return t.info("using authNext override from local storage."), o.authNext.override;
                var u = await $("service");
                l !== (u === s.USER_SERVICE_TYPE.MSID) &&
                  (t.trackEvent("Request.AuthNext", { Elapsed: a, AuthNext: l, serviceType: u, EventCategory: "Request" }),
                  e && !e.noLogout && (await R()));
              }
              async function C(e) {
                var n = null;
                return (
                  Object.values(s.USER_SERVICE_TYPE).includes(e) ||
                    (e = await (async function (e) {
                      var t = await $("service", e);
                      if (t) return t;
                      if (((t = s.USER_SERVICE_TYPE.NONE), await w())) return s.USER_SERVICE_TYPE.MSID;
                      switch (e) {
                        case s.USER_TYPE.MSA:
                          t = s.USER_SERVICE_TYPE.MSA;
                          break;
                        case s.USER_TYPE.O365:
                          t = s.USER_SERVICE_TYPE.O365;
                      }
                      return t;
                    })(e)),
                  -1 !== e.indexOf(s.USER_SERVICE_TYPE.MSA)
                    ? (n = l)
                    : -1 !== e.indexOf(s.USER_SERVICE_TYPE.O365)
                    ? (n = u)
                    : -1 !== e.indexOf(s.USER_SERVICE_TYPE.MSID)
                    ? (n = d)
                    : t.error(`userService.getServiceProvider - Invalid type - ${e}`),
                  n
                );
              }
              async function L() {
                var e = await i.get("identity");
                return e && e.identity ? e.identity : {};
              }
              function D(e, n) {
                for (var [r, i] of Object.entries(n))
                  i &&
                    (e[r] && "none" !== e[r] && "none" !== i
                      ? typeof i == typeof e[r]
                        ? Array.isArray(i)
                          ? i.forEach((t) => {
                              e[r].indexOf(t) < 0 && e[r].push(t);
                            })
                          : "object" != typeof i
                          ? (e[r] = i)
                          : D(e[r], i)
                        : t.warn(`skipping ${r} due to conflicting types`)
                      : (e[r] = i));
              }
              function b(e) {
                return new URL(e).origin;
              }
              async function k(e, n, r) {
                if ((r.expires_in && !r.expires_on && (r.expires_on = c.default.getCurrentTime() + Number(r.expires_in)), n)) {
                  var o = await h();
                  if ((o === s.USER_TYPE.NONE && (o = await O(r)), o !== s.USER_TYPE.NONE)) {
                    var a = decodeURIComponent(r.scope).toLowerCase().split(/[ +]/);
                    for (const e of a) {
                      var l = e.match(/(^https:\/\/[.\w]*(?:\S+\/))/i);
                      if (l) {
                        n = l[l.index];
                        break;
                      }
                    }
                    (n = b(n)),
                      r.resource && r.resource !== n && (t.info(`saveTokens ${n} does not match ${r.resource}`), (n = r.resource));
                    var u = {
                        [o]: {
                          id_token: r.id_token,
                          refresh_token: r.refresh_token,
                          service: e.type,
                          resources: { [n]: { access_token: r.access_token, expires_in: r.expires_in, expires_on: r.expires_on, scope: a } }
                        }
                      },
                      d = await L();
                    D(d, u), await i.set({ identity: d });
                  } else t.error("userService.saveTokens - unable to resolve userType");
                } else t.error("userService.saveTokens - endpoint not provided");
              }
              function M(e, t) {
                if (!e) return !0;
                if (!t) return !1;
                Array.isArray(e) || (e = e.toLowerCase().split(/[ +]/));
                for (const n of e) if (!t.includes(n)) return !1;
                return !0;
              }
              async function F(e, n) {
                if (e) {
                  e = b(e);
                  try {
                    var r = await $("resources");
                    if (r[e]) {
                      var i = r[e];
                      if (e === n) return i;
                      if (i && M(n, i.scope)) return i;
                      delete r[e];
                    }
                    for (const e in r) if (M(n, e.scope)) return e;
                    return null;
                  } catch (e) {
                    return null;
                  }
                } else t.error("userService.getAccessToken - endpoint not provided");
              }
              async function x(e) {
                return $("userInfo", e);
              }
              async function $(e, t) {
                t || (t = await h());
                var n = await L();
                return n[t] && n[t][e] ? n[t][e] : null;
              }
              async function Y(e, t, n) {
                var r = await L(),
                  o = {};
                r[e] && r[e].userInfo && !n && (o = r[e].userInfo), D(o, t), r[e] && ((r[e].userInfo = o), await i.set({ identity: r }));
              }
              function G(e) {
                var t = c.default.getCurrentTime();
                return !(e && e > t + 120);
              }
              async function B(e, t) {
                var n = await h(),
                  r = await e.lookupUserInfo(t);
                o.default.runtime.sendMessage({ activity: s.ACTIVITY.USERINFO_AVAILABLE.NAME, data: r }),
                  !r.email && r.userPrincipalName && (r.email = r.userPrincipalName),
                  await Y(n, r, !0),
                  await j(e);
              }
              function V(e) {
                var n = /^([^.\s]*)\.([^.\s]+)\.([^.\s]*)$/.exec(e);
                return !n || n.length < 4
                  ? (t.error("userService.parseJwtToken - The returned id_token is not parseable."), null)
                  : { header: JSON.parse(W(n[1])), payload: JSON.parse(W(n[2])) };
              }
              function W(e) {
                return (e = e.replace(/-/g, "+").replace(/_/g, "/")), decodeURIComponent(escape(window.atob(e)));
              }
              async function j(e) {
                const n = e.type,
                  r = await h();
                var i = e.getConfig().photoUrl;
                if (i) {
                  var o = { method: "GET", url: i, responseType: "blob", headers: { "X-UserType": n } };
                  try {
                    const e = await S(o);
                    t.trackEvent("Request.GotServerPhoto", { EventCategory: "Request" });
                    var a = new FileReader();
                    (a.onload = async () => (Y(r, { photo: a.result }), a.result)), a.readAsDataURL(e);
                  } catch (e) {
                    return null;
                  }
                }
              }
              function H() {
                return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
                  let t = performance.now();
                  const n = (t + 16 * Math.random()) % 16 | 0;
                  return (t = Math.floor(t / 16)), ("x" === e ? n : (3 & n) | 8).toString(16);
                });
              }
              return (
                c.default.isBackgroundContext() &&
                  (async function () {
                    t.debug("initCheckTransition"), await P(), setInterval(P, y);
                  })(),
                {
                  acquireToken: f,
                  clearToken: v,
                  isLoggedIn: async function () {
                    var e = await i.get(["userType", "identity"]);
                    return e.identity && e.userType && e.userType !== s.USER_TYPE.NONE;
                  },
                  getEndpointUrlForCurrentUser: async function (e) {
                    const t = await h();
                    if (!t || t === s.USER_TYPE.NONE) return null;
                    var n = await C(t);
                    return n ? n.getConfig()[e] : null;
                  },
                  getUserType: h,
                  getUserInfo: x,
                  getUserPhoto: async function () {
                    var e = await h();
                    if (e === s.USER_TYPE.NONE)
                      return t.warn("UserService.getUserPhoto: no signed-in user"), Promise.reject(s.RECENTS.ERROR.UNSUPPORTED_USER_TYPE);
                    var n = await x(e);
                    return n && n.photo
                      ? (t.trackEvent("Request.GotLocalPhoto", { EventCategory: "Request" }), n.photo)
                      : Promise.reject("No photo in local storage");
                  },
                  getUserDataBoundary: async function () {
                    return (await i.get("dataBoundary")).dataBoundary || s.USER_DATA_BOUNDARY.NONE;
                  },
                  getUserAndTenantId: async function () {
                    var e = await i.get("userId"),
                      t = await i.get("tenantId");
                    return { userId: e.userId, tenantId: t.tenantId };
                  },
                  httpRequest: S,
                  navigateToAuthEndpoint: A,
                  saveUserInfo: Y,
                  waitForUserInfo: async function (e) {
                    return new Promise(async (n) => {
                      var r = await x(e);
                      if (c.default.isNotUndefinedOrNull(r)) return n(r);
                      o.default.runtime.onMessage.addListener(l);
                      var i = c.default.isExtensionInTestingMode() ? s.TIMEOUT.USER_INFO_LOOKUP_TEST : s.TIMEOUT.USER_INFO_LOOKUP,
                        a = setTimeout(() => {
                          t.warn(`userService.waitForUserInfo timed out after ${s.TIMEOUT.USER_INFO_LOOKUP} ms - ${e}`), u(), n(r);
                        }, i);
                      function l(e) {
                        e.activity === s.ACTIVITY.USERINFO_AVAILABLE.NAME && (u(), clearTimeout(a), n(e.data));
                      }
                      function u() {
                        o.default.runtime.onMessage.removeListener(l);
                      }
                    });
                  },
                  getUserLicenseInfo: async function () {
                    var e = await x();
                    return ["driveQuota", "licenses"].reduce((t, n) => (e[n] && (t[n] = e[n]), t), {});
                  },
                  useAuthNext: w,
                  authorize: N,
                  getAccessToken: F,
                  getPhotoFromServer: j,
                  login: _,
                  logout: R,
                  lookupUserInfo: B,
                  createOtelSink: I
                }
              );
            }
          ]).name;
        const S = function (e, t, n, r) {
          async function i(e, t) {
            return new Promise((r, i) => {
              n({ method: "GET", accept: "application/json", url: t, contentType: "application/json", headers: { "X-UserType": e } }).then(
                function (e) {
                  r(e.data);
                },
                function () {
                  i(s.RECENTS.ERROR.GENERIC);
                }
              );
            });
          }
          async function o(e, t) {
            var r = {
              method: "GET",
              accept: "application/json",
              url: `https://graph.microsoft.com/v1.0/me/drive/items/${t}`,
              contentType: "application/json",
              headers: { "X-UserType": e }
            };
            try {
              return new Promise((e) => {
                n(r).then(function (t) {
                  e(t.data);
                });
              });
            } catch (e) {
              return Promise.resolve({});
            }
          }
          async function a(e) {
            var t = {
              method: "GET",
              accept: "application/json",
              url: "https://graph.microsoft.com/v1.0/me/drive/sharedWithMe",
              contentType: "application/json",
              headers: { "X-UserType": e }
            };
            return new Promise((e) => {
              try {
                n(t).then(function (t) {
                  e(t.data);
                });
              } catch (t) {
                e({});
              }
            });
          }
          const l = {
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document": "word",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": "excel",
            "application/vnd.openxmlformats-officedocument.presentationml.presentation": "powerpoint",
            "application/msonenote": "onenote"
          };
          function u(e) {
            var t = [];
            if (c.default.isUndefinedOrNull(e)) return t;
            for (const f of e) {
              if (f.DocumentUrl && f.Timestamp && f.Application && f.FileName) {
                t.push(f);
                continue;
              }
              if (!f.remoteItem) continue;
              const e = f.name || f.remoteItem.name,
                p = f.id || f.remoteItem.id;
              if (e && p) {
                var n = f.remoteItem,
                  r = void 0,
                  i = void 0,
                  o = void 0;
                if (n.mru) {
                  var a = n.mru;
                  a.app &&
                    -1 !== s.FILE.SUPPORTED_APPLICATIONS.indexOf(a.app) &&
                    ((r = a.url), (i = a.timeStamp), (o = a.app.toLowerCase()));
                } else {
                  if (!(r = n.webDavUrl || n.webUrl)) continue;
                  const t = s.FILE.SUPPORTED_FILE_TYPES;
                  var u = c.default.getFileExtension(r) || c.default.getFileExtension(e);
                  if (t.hasOwnProperty(u)) o = t[u];
                  else if (n.file && n.file.mimeType && l.hasOwnProperty(n.file.mimeType)) o = l[n.file.mimeType];
                  else if (!o) {
                    var d = n.package || f.package;
                    if (!d || !d.type) continue;
                    if (((o = d.type.toLowerCase()), !Object.values(t).includes(o))) continue;
                  }
                  if (!o) continue;
                  if (
                    (n.lastModifiedDateTime
                      ? (i = n.lastModifiedDateTime)
                      : n.fileSystemInfo && (i = n.fileSystemInfo.lastAccessedDateTime || n.fileSystemInfo.lastModifiedDateTime),
                    !i)
                  )
                    continue;
                }
                t.push({ DocumentUrl: r, Timestamp: i, Application: o, FileName: e, Id: p });
              }
            }
            return t;
          }
          return {
            getRecentDocumentList: async function () {
              const e = await r.getUserType();
              if (e === s.USER_TYPE.NONE) return Promise.reject(s.RECENTS.ERROR.UNSUPPORTED_USER_TYPE);
              const t = await r.getEndpointUrlForCurrentUser("documentsUrl");
              var n = await i(e, t);
              return (
                await (async function (e, t) {
                  if (t.value) {
                    var n = void 0;
                    for (var r of t.value)
                      if (!Object.values(r.remoteItem).length) {
                        if (!n) {
                          var i = await a(e);
                          if (!i.value) return;
                          n = i.value;
                        }
                        var s = n.find((e) => e.remoteItem && e.remoteItem.id && e.remoteItem.id.toLowerCase() === r.id.toLowerCase());
                        if (s) r.remoteItem = s.remoteItem;
                        else {
                          var c;
                          try {
                            c = await o(e, r.id);
                          } catch (e) {
                            continue;
                          }
                          c &&
                            c.id &&
                            ((r.remoteItem.webUrl = c.webUrl),
                            (r.name = c.name),
                            r.file || (r.file = c.file),
                            r.remoteItem.package || (r.remoteItem.package = c.package),
                            r.remoteItem.lastModifiedDateTime || (r.remoteItem.lastModifiedDateTime = c.lastModifiedDateTime));
                        }
                      }
                  }
                })(e, n),
                u(n.data || n.value || n)
              );
            },
            getRecentDocs: i,
            normalizeMruList: u
          };
        };
        const N = function (e, t, n, r, i) {
          var o = this;
          (o.onLoad = function () {
            n.debug("Loading MruController"),
              (o.currentDisplayPanel = o.constants.RECENTS.DISPLAY_PANEL.LOADING),
              o.getRecentDocumentsFromStorage().then(function (e) {
                !c.default.isUndefinedOrNull(e) &&
                  e.length > 0 &&
                  ((o.recentDocuments = e), (o.currentDisplayPanel = o.constants.RECENTS.DISPLAY_PANEL.LIST));
              });
          }),
            (o.openRecentDocument = function (e, t) {
              let r = e.application;
              "powerpoint" === e.application
                ? (r = "PowerPointOnline")
                : "excel" === e.application
                ? (r = "ExcelOnline")
                : "word" === e.application
                ? (r = "WordOnline")
                : "onenote" === e.application && (r = "OneNoteOnline"),
                n.trackEvent("Action.Refer." + r, {
                  Action_Area: "Docs",
                  Action_SubArea: "Docs",
                  Action_Target: r,
                  EventCategory: "Action",
                  Action_Type: "Click"
                }),
                c.default.navigateToUrlWithNewTab(
                  e.url,
                  !(!c.default.isUndefinedOrNull(t) && !c.default.isUndefinedOrNull(t.ctrlKey) && t.ctrlKey)
                ),
                window.close();
            }),
            (o.constants = s),
            (o.storage = r),
            (o.currentDisplayPanel = o.constants.RECENTS.DISPLAY_PANEL.LOADING),
            (o.recentDocuments = []),
            (o.LIST_LENGTH = o.constants.RECENTS.LIST_LENGTH_MSA),
            e.$watch("userType", function (e) {
              e !== o.constants.USER_TYPE.NONE &&
                ((o.LIST_LENGTH =
                  e === o.constants.USER_TYPE.O365 ? o.constants.RECENTS.LIST_LENGTH_O365 : o.constants.RECENTS.LIST_LENGTH_MSA),
                o.refreshRecentDocumentsList().then(
                  function () {
                    o.currentDisplayPanel =
                      !c.default.isUndefinedOrNull(o.recentDocuments) && o.recentDocuments.length > 0
                        ? o.constants.RECENTS.DISPLAY_PANEL.LIST
                        : o.constants.RECENTS.DISPLAY_PANEL.NO_DOCS;
                  },
                  function (e) {
                    n.debug(`MruController $scope.$watch error on refreshRecentDocumentsList: ${e}`),
                      (o.currentDisplayPanel =
                        !c.default.isUndefinedOrNull(o.recentDocuments) && o.recentDocuments.length > 0
                          ? o.constants.RECENTS.DISPLAY_PANEL.LIST
                          : o.constants.RECENTS.DISPLAY_PANEL.ERROR);
                  }
                ));
            }),
            (this.refreshRecentDocumentsList = function () {
              var e = t.defer();
              return (
                n.debug("MruController.refreshRecentDocumentsList(): Method start"),
                i.getRecentDocumentList().then(
                  function (t) {
                    c.default.isUndefinedOrNull(t) && (t = []);
                    for (var r = [], i = 0, a = 0; a < t.length && i < o.LIST_LENGTH; a++)
                      c.default.isUndefinedOrNull(t[a].Application)
                        ? n.warn(`Undefined document application with document type ${c.default.getFileExtension(t[a].FileName)}`)
                        : o.isFileDataValid(t[a].FileName, t[a].Application, t[a].DocumentUrl, t[a].Timestamp) &&
                          (r.push({
                            appLabel: o.constants.FILE.APPLICATION_LABEL[t[a].Application.toLowerCase()],
                            application: t[a].Application,
                            lastAccessed: new Date(t[a].Timestamp).toLocaleDateString(),
                            imageSource: "../" + o.constants.FILE.APPLICATION_IMAGE_PATH[t[a].Application.toLowerCase()],
                            name: o.shortenFilename(t[a].FileName),
                            url: o.createOpenInWebUrl(t[a].DocumentUrl),
                            id: t[a].Id
                          }),
                          i++);
                    o.mruListsEqual(o.recentDocuments, r) || ((o.recentDocuments = r), o.setRecentDocumentsToStorage(r)), e.resolve();
                  },
                  function (t) {
                    e.reject(t);
                  }
                ),
                e.promise
              );
            }),
            (this.mruListsEqual = function (e, t) {
              if (c.default.isUndefinedOrNull(e) || c.default.isUndefinedOrNull(t) || e.length !== t.length) return !1;
              for (var n = 0; n < t.length; n++)
                if (t[n].name !== e[n].name || t[n].url !== e[n].url || t[n].lastAccessed !== e[n].lastAccessed) return !1;
              return !0;
            }),
            (this.getRecentDocumentsFromStorage = function () {
              var e = t.defer();
              return (
                r.get("localRecentDocuments").then(function (t) {
                  e.resolve(t.localRecentDocuments);
                }),
                e.promise
              );
            }),
            (this.setRecentDocumentsToStorage = function (e) {
              r.set({ localRecentDocuments: e });
            }),
            (this.isFileDataValid = function (e, t, n, r) {
              return (
                !(c.default.isUndefinedOrNull(t) || !o.constants.FILE.APPLICATION_LABEL[t.toLowerCase()]) &&
                c.default.isNotUndefinedOrNull(e) &&
                c.default.isNotUndefinedOrNull(n) &&
                c.default.isNotUndefinedOrNull(r)
              );
            }),
            (this.createOpenInWebUrl = function (e) {
              return o.constants.FILE.SUPPORTED_FILE_TYPES[c.default.getFileExtension(e)] ? e + "?web=1" : e;
            }),
            (this.shortenFilename = function (e) {
              return e.replace(/\.[^/.]+$/, "");
            });
        };
        i()
          .module("app.mru", [])
          .factory("mruService", ["$q", "$log", "$http", "userService", S])
          .controller("MruController", ["$scope", "$q", "$log", "storage", "mruService", N]).name;
        var v = n(6076);
        i()
          .module("app.diagnostics", [])
          .service("telemetry", [
            "$injector",
            "ariaTelemetry",
            "otelTelemetry",
            function (e, t, n) {
              var r = [n],
                a = async function (t) {
                  var n = e.get("userService"),
                    r = e.get("storage");
                  c.default.isUndefinedOrNull(t) && (t = {}),
                    (t.BrowserSessionId = window.sessionStorage.getItem("browserSessionId")),
                    await r.get("sessionId").then(function (e) {
                      t.Session_Id = e.sessionId;
                    }),
                    (t.pii = []);
                  var i = c.default.getManifest();
                  i && (t.AppVersion = i.version);
                  var a = await n.getUserDataBoundary();
                  t.DataBoundary = a.dataBoundary;
                  var l = o.default.i18n.getUILanguage();
                  c.default.isNotUndefinedOrNull(l) && (t.Language = l), (t["AppInfo.Name"] = s.APPINFO_NAME);
                  var u = await n.getUserType(),
                    d = v.AWTLogManager.getSemanticContext();
                  if (u === s.USER_TYPE.NONE) return d.setUserId("", "", ""), t;
                  var f = await n.getUserInfo(u);
                  return c.default.isUndefinedOrNull(f)
                    ? (d.setUserId("", "", ""), t)
                    : (c.default.isNotUndefinedOrNull(f.cid) && ((t.User_PrimaryIdentityHash = f.cid), d.setUserId(f.cid)),
                      c.default.isNotUndefinedOrNull(f.features) && (t.ExperimentFeatures = f.features.toString()),
                      c.default.isNotUndefinedOrNull(f.puid) &&
                        (t.pii.push({ type: s.TELEMETRY.PII_TYPE.IDENTITY, name: "User_PrimaryIdentityHash", value: f.puid }),
                        d.setUserId(f.puid)),
                      c.default.isNotUndefinedOrNull(f.tid) && (t.User_TenantId = f.tid),
                      t);
                },
                l = function () {
                  var t = e.get("$q"),
                    n = e.get("storage"),
                    r = t.defer();
                  return (
                    n.get(["telemetry_enabled", "enableTelemetry"]).then(function (e) {
                      r.resolve(
                        !(
                          !c.default.isUndefinedOrNull(e) &&
                          !0 !==
                            (function (e, t) {
                              if (e[t]) {
                                var n = JSON.parse(e[t]);
                                if (void 0 !== n.value) return JSON.parse(n.value);
                              }
                            })(e, "enableTelemetry") &&
                          !c.default.isUndefinedOrNull(e.telemetry_enabled) &&
                          !0 !== e.telemetry_enabled
                        )
                      );
                    }),
                    r.promise
                  );
                };
              return {
                getEnabledSetting: function () {
                  return l();
                },
                setEnabledSetting: function (t) {
                  if (c.default.isBackgroundContext()) {
                    !(function (t) {
                      e.get("storage").set({
                        telemetry_enabled: t,
                        enableTelemetry: JSON.stringify({ value: JSON.stringify(t), lastUpdate: Date.now(), manualOverride: !1 })
                      });
                    })(t);
                    for (var n = 0; n < r.length; ++n) r[n].setEnabledSetting(t);
                  } else
                    o.default.runtime.sendMessage({
                      activity: s.ACTIVITY.TELEMETRY.NAME,
                      command: s.TELEMETRY.COMMAND.SET_DISABLED,
                      enabled: t
                    });
                },
                trackEvent: async function (e, t, n) {
                  if (!i().isUndefined(e) && i().isString(e))
                    if (c.default.isBackgroundContext()) {
                      t = await a(t);
                      for (var l = 0; l < r.length; ++l) {
                        var u = i().extend({}, t);
                        r[l].trackEvent(e, u, n);
                      }
                    } else
                      o.default.runtime.sendMessage({
                        activity: s.ACTIVITY.TELEMETRY.NAME,
                        command: s.TELEMETRY.COMMAND.TRACK_EVENT,
                        eventName: e,
                        properties: t,
                        measurements: n
                      });
                },
                trackTrace: async function (e, t) {
                  if (!i().isUndefined(e) && i().isString(e))
                    if (c.default.isBackgroundContext()) {
                      t = await a(t);
                      for (var n = 0; n < r.length; ++n) {
                        var l = i().extend({}, t);
                        r[n].trackTrace(e, l);
                      }
                    } else
                      o.default.runtime.sendMessage({
                        activity: s.ACTIVITY.TELEMETRY.NAME,
                        command: s.TELEMETRY.COMMAND.TRACK_TRACE,
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
                  if (!c.default.isUndefinedOrNull(e) && !c.default.isUndefinedOrNull(t)) {
                    if (!c.default.isUndefinedOrNull(t.pii)) {
                      for (var n = 0; n <= t.pii.length - 1; ++n) e.setProperty(t.pii[n].name, t.pii[n].value, t.pii[n].type);
                      delete t.pii;
                    }
                    for (var r in t) t.hasOwnProperty(r) && e.setProperty(r, t[r]);
                  }
                },
                n = !0;
              (this.setEnabledSetting = function (e) {
                n = e;
              }),
                (this.trackEvent = function (r, i, o) {
                  if (n) {
                    r = r.replace(/\./g, "_");
                    var a = new v.AWTEventProperties();
                    a.setName(s.TELEMETRY.EVENT_PREFIX + r), t(a, i), t(a, o), e.ariaLogger.logEvent(a);
                  }
                }),
                (this.trackTrace = function (r, i) {
                  if (n) {
                    var o = new v.AWTEventProperties();
                    o.setName(s.TELEMETRY.EVENT_PREFIX + r), o.setProperty("severity", r), t(o, i), e.ariaLogger.logEvent(o);
                  }
                });
            }
          ])
          .service("otelTelemetry", [
            "$window",
            function (e) {
              (this.trackEvent = function (n, r, i) {
                if (!t) return;
                let o = [];
                e.otelLogger.partAFields = [T.dt("Session.Id", r.Session_Id), T.dt("BrowserSessionId", r.BrowserSessionId)];
                for (let e in r) "AppInfo.Name" !== e && "Session_Id" !== e && "BrowserSessionId" !== e && o.push(T.dt(e, r[e]));
                for (let e in i) o.push(T.dt(e, i[e]));
                let a = { eventName: s.TELEM_PREFIX + "." + n, dataFields: o, eventFlags: { dataCategories: 2, diagnosticLevel: 10 } };
                a.eventName.toLowerCase().includes("diagnostic.") || e.otelLogger.sendTelemetryEvent(a);
              }),
                (this.trackTrace = function (n, r) {
                  if (!t) return;
                  let i = [];
                  e.otelLogger.partAFields = [T.dt("Session.Id", r.Session_Id), T.dt("BrowserSessionId", r.BrowserSessionId)];
                  for (let e in r) "AppInfo.Name" !== e && "Session_Id" !== e && "BrowserSessionId" !== e && i.push(T.dt(e, r[e]));
                  let o = { eventName: s.TELEM_PREFIX + "." + n, dataFields: i, eventFlags: { dataCategories: 2, diagnosticLevel: 10 } };
                  "info" !== n.toLowerCase()
                    ? "warn" !== n.toLowerCase()
                      ? ("error" === n.toLowerCase() && (o.eventName = s.TELEM_PREFIX + ".Diagnostic.Error"),
                        e.otelLogger.sendTelemetryEvent(o))
                      : (o.eventName = s.TELEM_PREFIX + ".Diagnostic.Warn")
                    : (o.eventName = s.TELEM_PREFIX + ".Diagnostic.Info");
                });
              var t = !0;
              this.setEnabledSetting = function (e) {
                t = e;
              };
            }
          ]).name;
        n(8944);
        var I = n(2535),
          h = n.n(I);
        i()
          .module("app.popup", ["ngRoute"])
          .controller("PopupController", [
            "$timeout",
            "$scope",
            "$q",
            "$log",
            "$document",
            "storage",
            "userService",
            "localize",
            "notification",
            function (e, t, n, r, i, a, l, u, d) {
              var f = this;
              function p() {
                r.trackEvent("Action.SignOut", {
                  EventCategory: "Action",
                  Action_Type: "Click",
                  Action_Area: "Account",
                  Action_Target: "SignOut"
                }),
                  a.remove("localRecentDocuments"),
                  a.remove("userInfo"),
                  a.remove("dataBoundary"),
                  a.remove("userAndTenantId"),
                  o.default.runtime.sendMessage({ activity: s.ACTIVITY.LOGOUT.NAME, type: t.userType }),
                  (f.hasSignedIn = s.SIGNINSTATUS.NONE),
                  (t.userType = s.USER_TYPE.NONE);
              }
              async function E() {
                var e = await f.userService.getUserInfo(t.userType);
                c.default.isUndefinedOrNull(e)
                  ? r.warn("PopupController.openDocument(): invalid userInfo")
                  : c.default.isUndefinedOrNull(e.oneDriveUrl)
                  ? r.warn("PopupController.openDocument(): invalid OneDriveUrl")
                  : c.default.navigateToUrlWithNewTab(e.oneDriveUrl, !0);
              }
              function m(e) {
                let n = t.userType;
                return (
                  c.default.isNotUndefinedOrNull(e) &&
                    (n === s.USER_TYPE.MSA ? (e = e.concat("&auth=1")) : n === s.USER_TYPE.O365 && (e = e.concat("&auth=2"))),
                  e
                );
              }
              function g() {
                return t.userType === s.USER_TYPE.O365;
              }
              (f.accountPanelOpened = !1),
                (f.filesSelected = null),
                (f.webRedirectInputChecked = !1),
                (f.telemetryInputChecked = !1),
                (f.onLine = !0),
                (f.username = ""),
                (f.profilePicture = ""),
                (f.rtl = c.default.isRTL()),
                (f.isChrome = c.default.isChrome()),
                (f.useAuthNext = !1),
                (f.appDescriptionMessage = u.getLocalizedString("AppDescription")),
                (f.onMenuItemClick = function (e) {
                  f.currentViewMode = f.currentViewMode === e ? s.MENU_VIEWMODE.NONE : (f.currentViewMode = e);
                }),
                (f.onSignOutClick = function () {
                  (f.currentViewMode = s.MENU_VIEWMODE.NONE), f.hasSignedIn === s.SIGNINSTATUS.SIGNEDIN && p();
                }),
                (f.onWelcomeSignInClick = async function (e) {
                  return (
                    r.trackEvent("Action.SignIn", {
                      EventCategory: "Action",
                      Action_Type: "Click",
                      Action_Area: "Login",
                      Action_Target: "SignIn"
                    }),
                    window.close(),
                    new Promise(async (t) => {
                      o.default.runtime.sendMessage({ activity: s.ACTIVITY.AUTHENTICATION.NAME, type: e }, (e) => {
                        t(), r.debug(`onWelcomeSignInClick sendMessage returned ${e}`);
                      });
                    })
                  );
                }),
                (f.onProfileClick = function () {
                  f.accountPanelOpened = !f.accountPanelOpened;
                }),
                (f.onSignOutLinkClick = p),
                (f.onSignupLinkClick = function () {
                  r.trackEvent("Action.Click.Signup", { EventCategory: "Action", Action_Type: "Click", Action_Result: "Click" }),
                    c.default.navigateToUrlWithNewTab(s.LINKS.SIGNUP, !0);
                }),
                (f.onWebRedirectInputChange = function () {
                  (f.webRedirectInputChecked = !f.webRedirectInputChecked),
                    f.storage.set({ webRedirect_disabled: !f.webRedirectInputChecked }),
                    r.trackEvent("Action.WebRedirectChecked", {
                      Enabled: f.webRedirectInputChecked,
                      Action_Area: "Account",
                      EventCategory: "Action",
                      Action_Type: "Click",
                      Action_Result: "Click"
                    });
                }),
                (f.onTelemetryInputChange = function () {
                  (f.telemetryInputChecked = !f.telemetryInputChecked),
                    r.setEnabledSetting(f.telemetryInputChecked),
                    r.trackEvent("Action.TelemetryInputChecked", {
                      Enabled: f.telemetryInputChecked,
                      Action_Area: "Account",
                      EventCategory: "Action",
                      Action_Type: "Click",
                      Action_Result: "Click"
                    });
                }),
                (f.onFileInputChange = function () {
                  f.loadFile();
                }),
                (f.openDocument = E),
                (f.openOfficeHome = function () {
                  r.trackEvent("Action.Refer.Microsoft365", {
                    Action_Area: "Apps",
                    Action_SubArea: "Home",
                    Action_Target: "M365 Home",
                    EventCategory: "Action",
                    Action_Type: "Click",
                    Action_Result: "Refer"
                  });
                  var e = m(s.LINKS.OFFICE_HOME_URL);
                  c.default.navigateToUrlWithNewTab(e, !0);
                }),
                (f.openSupportPage = function () {
                  var e = s.LINKS.SUPPORT_URL;
                  r.trackEvent("Action.Refer.Support", {
                    EventCategory: "Action",
                    Action_Target: "Support",
                    Action_Area: "Login",
                    Action_Type: "Click",
                    Action_Result: "Refer"
                  }),
                    c.default.navigateToUrlWithNewTab(e, !0);
                }),
                (f.openMyAccountPage = function () {
                  var e = g() ? s.LINKS.MYACCOUNT_O365_URL : s.LINKS.MYACCOUNT_MSA_URL;
                  r.trackEvent("Action.Refer.MyAccount", {
                    EventCategory: "Action",
                    Action_Target: "MyAccount",
                    Action_Area: "Account",
                    Action_Type: "Click",
                    Action_Result: "Refer"
                  }),
                    c.default.navigateToUrlWithNewTab(e, !0);
                }),
                (f.browseToRecents = async function () {
                  r.trackEvent("Action.Refer.MyContent", {
                    Action_Area: "Docs",
                    Action_SubArea: "My Content",
                    Action_Target: "My Content",
                    EventCategory: "Action",
                    Action_Type: "Click",
                    Action_Result: "Refer"
                  });
                  var e = m(s.LINKS.MY_CONTENT_URL);
                  c.default.navigateToUrlWithNewTab(e.toString(), !0);
                }),
                (f.openAppsModule = async function () {
                  r.trackEvent("Action.Refer.AppsModule", {
                    Action_Area: "Apps",
                    Action_SubArea: "AppsModule",
                    Action_Target: "Apps Module",
                    EventCategory: "Action",
                    Action_Type: "Click",
                    Action_Result: "Refer"
                  });
                  var e = m(s.LINKS.APPS_MODULE_URL);
                  c.default.navigateToUrlWithNewTab(e, !0);
                }),
                (f.createDocument = function (e, n) {
                  "Outlook" === e.id
                    ? r.trackEvent("Action.Refer.Mail", {
                        Action_Area: "Apps",
                        Action_SubArea: "App",
                        Action_Target: "Mail",
                        EventCategory: "Action",
                        Action_Type: "Click",
                        Action_Result: "Refer"
                      })
                    : r.trackEvent("Action.Refer." + e.id, {
                        Action_Area: "Apps",
                        Action_SubArea: "App",
                        Action_Target: e.id,
                        EventCategory: "Action",
                        Action_Type: "Click",
                        Action_Result: "Refer"
                      });
                  var i;
                  if ("OneDrive" === e.id) return void E();
                  if ("Outlook" === e.id) i = g() ? s.LINKS.APP.OUTLOOK_O365 : s.LINKS.APP.OUTLOOK_DEFAULT;
                  else {
                    if ("SharePoint" === e.id)
                      return void (async function () {
                        var e = await f.userService.getUserInfo(t.userType);
                        if (c.default.isNotUndefinedOrNull(e) && c.default.isNotUndefinedOrNull(e.sharePointUrl))
                          return void c.default.navigateToUrlWithNewTab(e.sharePointUrl, !0);
                        r.warn("PopupController.openDocument(): invalid sharePointUrl"),
                          c.default.navigateToUrlWithNewTab(s.LINKS.APP.SHAREPOINT_DEFAULT, !0);
                      })();
                    if ("function" == typeof e.url) {
                      const t = f.hasSignedIn !== s.SIGNINSTATUS.SIGNEDIN ? "0" : g() ? "2" : "1";
                      i = e.url(t);
                    } else i = e.url;
                  }
                  c.default.navigateToUrlWithNewTab(
                    i,
                    !(!c.default.isUndefinedOrNull(n) && !c.default.isUndefinedOrNull(n.ctrlKey)) || !n.ctrlKey
                  );
                }),
                (f.handleTableNavigation = function (e) {
                  var t = e.which || e.keyCode || 0;
                  if (
                    ![
                      s.JQUERY.EVENT_ID.KEYPRESS.ARROWLEFT,
                      s.JQUERY.EVENT_ID.KEYPRESS.ARROWUP,
                      s.JQUERY.EVENT_ID.KEYPRESS.ARROWRIGHT,
                      s.JQUERY.EVENT_ID.KEYPRESS.ARROWDOWN
                    ].includes(t)
                  )
                    return;
                  var n = e.target.closest(".app_table_cell"),
                    r = n.closest(".app_table_row");
                  if (!n || !r) return;
                  var i,
                    o = n.previousElementSibling;
                  switch (t) {
                    case s.JQUERY.EVENT_ID.KEYPRESS.ARROWLEFT:
                      i = n.previousElementSibling;
                      break;
                    case s.JQUERY.EVENT_ID.KEYPRESS.ARROWUP:
                      var a = r.previousElementSibling;
                      a && (i = a.querySelector(".app_table_cell")), o && i && (i = i.nextElementSibling);
                      break;
                    case s.JQUERY.EVENT_ID.KEYPRESS.ARROWRIGHT:
                      i = n.nextElementSibling;
                      break;
                    case s.JQUERY.EVENT_ID.KEYPRESS.ARROWDOWN:
                      var c = r.nextElementSibling;
                      c && (i = c.querySelector(".app_table_cell")), o && i && (i = i.nextElementSibling);
                  }
                  i && (e.preventDefault(), i.querySelector("button").focus());
                }),
                (f.loadFile = function () {
                  r.trackEvent("Action.Select.File", {
                    FilesSelectedCount: f.filesSelected.length,
                    Action_Area: "Docs",
                    Action_SubArea: "Upload_Open",
                    Action_Target: "Upload",
                    EventCategory: "Action",
                    Action_Type: "Click",
                    Action_Result: "Select"
                  }),
                    f.filesSelected.length > 1 && r.warn(`loadFile called with ${f.filesSelected.length} files selected`);
                  if (!s.FILE.SUPPORTED_FILE_TYPES[c.default.getFileExtension(f.filesSelected[0].name)])
                    return (
                      r.info(
                        `PopupController.loadFile(): User attempted to open an unsupported file type of ${c.default.getFileExtension(
                          f.filesSelected[0].name
                        )} extension`
                      ),
                      void d.show(s.NOTIFICATION.UNSUPPORTEDFILETYPE)
                    );
                  (e = f.filesSelected[0]), o.default.extension.getBackgroundPage().postMessage(e, window.location);
                  var e;
                }),
                (f.constants = s),
                (f.storage = a),
                (f.userService = l),
                (f.localize = u),
                (f.hasSignedIn = s.SIGNINSTATUS.UNKNOWN),
                (f.currentViewMode = s.MENU_VIEWMODE.NONE),
                (t.userType = s.USER_TYPE.NONE),
                (f.appLaunchers = [
                  [
                    {
                      id: "Outlook",
                      label: "OutlookAppName",
                      iconClass: "ms-BrandIcon--icon48 ms-BrandIcon--outlook",
                      url: s.LINKS.APP.OUTLOOK_DEFAULT,
                      isBusinessOnly: !1
                    },
                    {
                      id: "OneDrive",
                      label: "OneDriveAppName",
                      iconClass: "ms-BrandIcon--icon48 ms-BrandIcon--onedrive",
                      url: s.LINKS.APP.ONEDRIVE,
                      isBusinessOnly: !1
                    }
                  ],
                  [
                    {
                      id: "WordOnline",
                      label: "WordAppName",
                      iconClass: "ms-BrandIcon--icon48 ms-BrandIcon--word",
                      url: s.LINKS.APP.WORD,
                      isBusinessOnly: !1
                    },
                    {
                      id: "ExcelOnline",
                      label: "ExcelAppName",
                      iconClass: "ms-BrandIcon--icon48 ms-BrandIcon--excel",
                      url: s.LINKS.APP.EXCEL,
                      isBusinessOnly: !1
                    }
                  ],
                  [
                    {
                      id: "PowerPointOnline",
                      label: "PowerPointAppName",
                      iconClass: "ms-BrandIcon--icon48 ms-BrandIcon--powerpoint",
                      url: s.LINKS.APP.POWERPOINT,
                      isBusinessOnly: !1
                    },
                    {
                      id: "OneNoteOnline",
                      label: "OneNoteAppName",
                      iconClass: "ms-BrandIcon--icon48 ms-BrandIcon--onenote",
                      url: s.LINKS.APP.ONENOTE,
                      isBusinessOnly: !1
                    }
                  ],
                  [
                    {
                      id: "SharePoint",
                      label: "SharePointSiteAppName",
                      iconClass: "ms-BrandIcon--icon48 ms-BrandIcon--sharepoint",
                      url: s.LINKS.APP.SHAREPOINT_DEFAULT,
                      isBusinessOnly: !0
                    },
                    {
                      id: "Teams",
                      label: "TeamsAppName",
                      iconClass: "ms-BrandIcon--icon48 ms-BrandIcon--teams",
                      url: s.LINKS.APP.TEAMS,
                      isBusinessOnly: !0
                    }
                  ]
                ]),
                i.ready(function () {
                  const t = c.default.getNewId();
                  f.storage.set({ sessionId: t }),
                    e(function () {
                      r.trackEvent("Action.OpenExtension", { EventCategory: "Action", Action_Type: "Click", Action_Result: "Open" });
                    });
                  for (var n = document.querySelectorAll(".ms-CheckBox"), i = 0; i < n.length; i++) new (h().CheckBox)(n[i]);
                }),
                a
                  .get(["userType", "identity"])
                  .then((e) => {
                    var n = e && e.identity && e.userType !== s.USER_TYPE.NONE;
                    return (
                      (f.hasSignedIn = n ? s.SIGNINSTATUS.SIGNEDIN : s.SIGNINSTATUS.NONE),
                      f.hasSignedIn > s.SIGNINSTATUS.NONE &&
                        (r.debug("PopupController.refreshSignInStatus(): Method start"),
                        f.userService.getUserType().then(async function (e) {
                          if (
                            (r.debug(`PopupController.getSignInStatus(): hasSignedIn: ${e}`),
                            r.trackEvent("Diagnostic.SignedIn", { EventCategory: "Diagnostic" }),
                            (t.userType = e),
                            (f.hasSignedIn = e === s.USER_TYPE.NONE ? s.SIGNINSTATUS.NONE : s.SIGNINSTATUS.SIGNEDIN),
                            f.hasSignedIn === s.SIGNINSTATUS.SIGNEDIN)
                          ) {
                            var n = await f.userService.waitForUserInfo(e);
                            c.default.isUndefinedOrNull(n)
                              ? r.warn(
                                  "self.UserService.getUserInfo(): userInfo is undefined or null when hasSignedIn is SIGNINSTATUS.SIGNEDIN"
                                )
                              : c.default.isUndefinedOrNull(n.email)
                              ? r.warn(
                                  "self.UserService.getUserInfo(): userInfo.email is undefined or null when hasSignedIn is SIGNINSTATUS.SIGNEDIN"
                                )
                              : ((f.username = n.email),
                                l.getUserPhoto().then(
                                  function (e) {
                                    e && (f.profilePicture = e);
                                  },
                                  function (e) {
                                    (f.profilePicture = ""), r.info(`PopupController.getUserPhoto: Profile Picture Error - ${e}`);
                                  }
                                ));
                          }
                        })),
                      f.storage.get("webRedirect_disabled")
                    );
                  })
                  .then(
                    (e) => (
                      (f.webRedirectInputChecked = !(c.default.isNotUndefinedOrNull(e.webRedirect_disabled) && e.webRedirect_disabled)),
                      r.getEnabledSetting()
                    )
                  )
                  .then((e) => (r.setEnabledSetting(e), (f.telemetryInputChecked = e), l.useAuthNext()))
                  .then((e) => {
                    f.useAuthNext = e;
                  });
            }
          ])
          .directive("bindFileChange", function () {
            return {
              require: "ngModel",
              restrict: "A",
              link: function (e, t, n, r) {
                t.bind("change", function (e) {
                  r.$setViewValue(e.target.files);
                });
              }
            };
          })
          .directive("bindDragAndDrop", [
            "$log",
            function (e) {
              return {
                require: "ngModel",
                restrict: "A",
                link: function (t, n, r, i) {
                  n.bind("dragover", function (e) {
                    e.stopPropagation(), e.preventDefault(), (e.originalEvent.dataTransfer.dropEffect = "copy");
                  }),
                    n.bind("drop", function (t) {
                      t.stopPropagation(),
                        t.preventDefault(),
                        e.trackEvent("Action.Open.Document.DragAndDrop", {
                          Action_Area: "Docs",
                          Action_SubArea: "Upload_Open",
                          Action_Target: "Upload",
                          EventCategory: "Action",
                          Action_Type: "Click",
                          Action_Result: "Open"
                        }),
                        i.$setViewValue(t.originalEvent.dataTransfer.files);
                    });
                }
              };
            }
          ])
          .directive("bindFileInputContainerClick", [
            "$log",
            function (e) {
              return {
                restrict: "A",
                link: function (t, n) {
                  n.bind("mousedown keydown keypress", function (t) {
                    (t.which !== s.JQUERY.EVENT_ID.MOUSEDOWN.LEFT_BUTTON_CLICK && t.which !== s.JQUERY.EVENT_ID.KEYPRESS.ENTER) ||
                      (e.trackEvent("Action.Open.Document.Upload", {
                        Action_Area: "Docs",
                        Action_SubArea: "Upload_Open",
                        Action_Target: "Upload",
                        EventCategory: "Action",
                        Action_Type: "Click",
                        Action_Result: "Open"
                      }),
                      t.currentTarget.nextElementSibling.click(),
                      t.preventDefault());
                  });
                }
              };
            }
          ])
          .config([
            "$routeProvider",
            (e) => {
              e.when("/", { templateUrl: "./popup/popup.html", controller: "PopupController", controllerAs: "ctrl" }).otherwise({
                redirectTo: "/"
              });
            }
          ]).name;
        i()
          .module("app.experimentation", [])
          .constant("experimentConstants", {
            DEFAULT_CLIENT_ID: "",
            ENABLED: { MSA: !0, O365: !1, BROWSERS: ["Chrome", "Edge"] },
            ENDPOINT: "http://officeonlineextension-office365.msedge.net/ab",
            ERROR: { BAD_USER_TYPE: "badUserType", NO_CLIENT_ID: "noClientId", NO_FEATURES: "noFeatures" },
            EXPERIMENTS: {
              SHARING: {
                ENABLED: { MSA: !0, O365: !1, BROWSERS: ["Chrome"] },
                CONTROL: "sharingControl/sharingControl.html",
                FLIGHTS: {
                  flighttestaacf: "sharingControl/sharingControl.html",
                  flighttestaa: "sharingControl/sharingControl.html",
                  SharingUXCF: "sharingControl/sharingControl.html",
                  SharingUX: "sharingA/sharingA.html"
                }
              }
            }
          })
          .factory("experimentService", [
            "$http",
            "$q",
            "$log",
            "experimentConstants",
            "userService",
            function (e, t, n, r, i) {
              var o,
                a = null,
                c = null,
                l = { [s.USER_TYPE.MSA]: "MSA", [s.USER_TYPE.O365]: "O365" },
                u = {
                  getFlight: async function (e) {
                    if (!(await f(e))) return r.EXPERIMENTS[e].CONTROL;
                    var t = await d();
                    return t[e];
                  },
                  getFlights: d,
                  flightingDisabled: function (e) {
                    return g(e);
                  },
                  experimentEnabled: f
                };
              return u;
              async function d() {
                return Utilities.isNotUndefinedOrNull(a)
                  ? a
                  : Utilities.isNotUndefinedOrNull(c)
                  ? (await Promise.all([c]), a)
                  : (await (async function () {
                      try {
                        var c = await i.getUserType();
                        if (((o = l[c]), Utilities.isUndefinedOrNull(c) || c === s.USER_TYPE.NONE)) throw r.ERROR.BAD_USER_TYPE;
                        if (u.flightingDisabled(c)) return void (a = E());
                        var d = await i.waitForUserInfo(c);
                        if (Utilities.isNotUndefinedOrNull(d) && Utilities.isNotUndefinedOrNull(d.flights)) return void (a = d.flights);
                        var f = (function (e, t) {
                            if (Utilities.isUndefinedOrNull(t)) return r.DEFAULT_CLIENT_ID;
                            var n = t.cid || t.id;
                            if (n) return n;
                            return r.DEFAULT_CLIENT_ID;
                          })(0, d),
                          g = await (function (i) {
                            var o = t.defer();
                            if (Utilities.isUndefinedOrNull(i) || i === r.DEFAULT_CLIENT_ID)
                              return (
                                n.error("experimentService.getFeatures: clientId is undefined, null, or empty"),
                                o.reject(r.ERROR.NO_CLIENT_ID)
                              );
                            var a =
                                ((c = (function (e) {
                                  var t,
                                    n = "";
                                  for (t = 0; t < e.length; t++) n += ("000" + e.charCodeAt(t).toString(16)).slice(-4);
                                  return n;
                                })(i)),
                                c.length > 100 ? c.substring(0, 100) : c),
                              s = { method: "GET", url: r.ENDPOINT, headers: { "X-MSEDGE-CLIENTID": a } };
                            var c;
                            return (
                              e(s).then(
                                (e) => {
                                  var t = e.data;
                                  return t.Features ? o.resolve(t.Features) : o.reject(r.ERROR.NO_FEATURES);
                                },
                                () => o.reject(r.ERROR.NO_FEATURES)
                              ),
                              o.promise
                            );
                          })(f);
                        !(function (e) {
                          for (var t in ((a = {}), r.EXPERIMENTS)) r.EXPERIMENTS.hasOwnProperty(t) && p(e, t);
                          !(function (e) {
                            for (var t = [], r = 0; r < e.length; ++r) {
                              var i = e[r];
                              m(i) && t.push(i);
                            }
                            t.length > 0 && n.warn(`ExP service returned invalid features: ${JSON.stringify(t)}`);
                          })(e);
                        })(g),
                          (d.flights = a),
                          (d.features = g),
                          await i.saveUserInfo(c, d);
                      } catch (e) {
                        n.error(`experimentService.setFlights error: ${e}`), (a = E());
                      }
                    })(),
                    a);
              }
              async function f(e) {
                try {
                  var t = await i.getUserType();
                  return !u.flightingDisabled(t) && !g(t, e);
                } catch (e) {
                  return n.error(`experimentService.experimentEnabled error: ${e}`), !1;
                }
              }
              function p(e, t) {
                var n = r.EXPERIMENTS[t];
                if (((a[t] = n.CONTROL), n.ENABLED[o]))
                  for (var i in n.FLIGHTS)
                    if (n.FLIGHTS.hasOwnProperty(i) && e.indexOf(i) > -1) {
                      a[t] = n.FLIGHTS[i];
                      break;
                    }
              }
              function E() {
                var e = {};
                for (var t in r.EXPERIMENTS)
                  if (r.EXPERIMENTS.hasOwnProperty(t)) {
                    var n = r.EXPERIMENTS[t];
                    e[t] = n.CONTROL;
                  }
                return e;
              }
              function m(e) {
                for (var t in r.EXPERIMENTS) {
                  if (r.EXPERIMENTS.hasOwnProperty(t)) if (r.EXPERIMENTS[t].FLIGHTS.hasOwnProperty(e)) return !1;
                }
                return !0;
              }
              function g(e, t) {
                if (e === s.USER_TYPE.NONE) return !0;
                var i = r.EXPERIMENTS.hasOwnProperty(t) ? r.EXPERIMENTS[t].ENABLED : r.ENABLED,
                  o = t ? `experiment ${t} is` : "all experiments are",
                  a = Utilities.getBrowserName().toLowerCase(),
                  c = i.BROWSERS.toString().toLowerCase();
                if (c.indexOf(a) < 0)
                  return n.info(`experimentService: ${o} disabled for browser ${a}. Experiment is only enabled for browsers ${c}`), !0;
                var u = i[l[e]];
                return u || n.info(`experimentService: ${o} disabled for userType ${e}`), !u;
              }
            }
          ])
          .controller("SharingController", [
            "experimentService",
            function (e) {
              var t = this,
                n = "/experimentation/sharing/";
              (t.flightView = n + "sharingControl/sharingControl.html"),
                e.getFlight("SHARING").then(function (e) {
                  t.flightView = n + e;
                });
            }
          ])
          .factory("sharingService", [
            "$http",
            "$q",
            "$log",
            "userService",
            function (e, t, n, r) {
              return {
                setShareUrl: function (e, t) {
                  if (c.default.isUndefinedOrNull(e) || c.default.isUndefinedOrNull(e.url)) return;
                  if (((e.shareUrl = ""), t === s.USER_TYPE.MSA)) {
                    var n = e.url.replace("&page=view", "&page=self");
                    n.indexOf("&page=self") < 0 && (n += "&page=self"), (n += "&action=share"), (e.shareUrl = n);
                  }
                },
                setFlagFromPermissions: function (i, o) {
                  if (c.default.isUndefinedOrNull(i)) return t.resolve();
                  if (o === s.USER_TYPE.MSA) {
                    var a = t.defer();
                    return (
                      (function (n) {
                        var i = t.defer();
                        return (
                          (function () {
                            var e = t.defer();
                            return (
                              r.waitForUserInfo(s.USER_TYPE.MSA).then(function (t) {
                                c.default.isUndefinedOrNull(t) ? e.resolve(null) : e.resolve(t.cid);
                              }),
                              e.promise
                            );
                          })().then(function (t) {
                            if (c.default.isUndefinedOrNull(t)) i.reject("null cid");
                            else if (c.default.isUndefinedOrNull(n.id)) i.reject("no document id");
                            else {
                              var r = n.id.split("."),
                                o = r[r.length - 1],
                                a = {
                                  method: "GET",
                                  url: s.MSACONFIG.ONEDRIVE_ITEMS_URL + o + "/permissions",
                                  headers: { "X-UserType": s.USER_TYPE.MSA }
                                };
                              e(a).then(
                                function (e) {
                                  var n = (function (e, t) {
                                    if (c.default.isUndefinedOrNull(e) || c.default.isUndefinedOrNull(e.value)) return !0;
                                    for (var n = !0, r = t.substring(1, t.length), i = 0; i < e.value.length; ++i) {
                                      var o = e.value[i];
                                      if (!c.default.isUndefinedOrNull(o.grantedTo)) {
                                        var a = o.grantedTo.user;
                                        if (a.id === t || a.id === r) n = o.roles.toString().toLowerCase().indexOf("write") > -1;
                                      }
                                    }
                                    return n;
                                  })(e.data, t);
                                  i.resolve(n);
                                },
                                function (e) {
                                  i.reject(e.statusText);
                                }
                              );
                            }
                          }),
                          i.promise
                        );
                      })(i).then(
                        function (e) {
                          (i.canBeShared = e), a.resolve();
                        },
                        function (e) {
                          n.error(`sharingService.setFlagFromPermissions error: ${e}`), (i.canBeShared = !1), a.resolve();
                        }
                      ),
                      a.promise
                    );
                  }
                  return (i.canBeShared = !1), t.resolve();
                }
              };
            }
          ])
          .controller("SharingAController", [
            "$log",
            "sharingService",
            "userService",
            "localize",
            function (e, t, n, r) {
              var i = this;
              (i.shareDoc = null),
                (i.isChrome = c.default.isChrome()),
                (i.localize = r),
                (i.init = function (e) {
                  (i.shareDoc = e),
                    n.getUserType().then(function (e) {
                      t.setShareUrl(i.shareDoc, e), t.setFlagFromPermissions(i.shareDoc, e);
                    });
                }),
                (i.shareDocument = function (t) {
                  e.trackEvent("ShareRecentDocument", { Application: i.shareDoc.application });
                  var n = !(!c.default.isUndefinedOrNull(t) && !c.default.isUndefinedOrNull(t.ctrlKey)) || !t.ctrlKey;
                  c.default.navigateToUrlWithNewTab(i.shareDoc.shareUrl, n), window.close();
                });
            }
          ]).name,
          i()
            .module("app", [
              "localization",
              "ngAria",
              "app.common",
              "app.diagnostics",
              "app.experimentation",
              "app.user",
              "app.mru",
              "app.popup"
            ])
            .config([
              "$ariaProvider",
              "$compileProvider",
              "$httpProvider",
              "$provide",
              function (e, t, n, r, i) {
                e.config({ tabindex: !1 }), t.imgSrcSanitizationWhitelist(/^\s*(https?|data|chrome-extension|ms-browser-extension):/);
              }
            ]).name;
      },
      8096: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = [],
          r = {};
        function i(e, t) {
          for (const [n, r] of Object.entries(t))
            e[n]
              ? typeof r == typeof e[n]
                ? Array.isArray(r)
                  ? (e[n] = e[n].concat(r))
                  : (e[n] = "object" != typeof r ? r : i(e[n], r))
                : console.log(`skipping ${n} due to conflicting types`)
              : (e[n] = r);
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
                create: function (e, t, n) {
                  null != t && void 0 !== t.priority && null !== t.priority && t.priority > 0 && window.alert(t.message), n(e);
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
                    n.push(e);
                  },
                  removeListener: function (e) {
                    n.splice(n.indexOf(e), 1);
                  }
                },
                sendMessage: function (e) {
                  for (let t = 0; t < n.length; ++t) n[t](e);
                },
                id: "ndjpnladcallmjemlbaebfadecfhkepb"
              },
              storage: {
                local: {
                  get: function (e, t) {
                    t({ [e]: r[e] });
                  },
                  set: function (e) {
                    for (const t in e) e.hasOwnProperty(t) && (r[t] = e[t]);
                  },
                  remove: function (e, t) {
                    delete r[e], t(r);
                  },
                  clear: function (e, t) {
                    r = {};
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
      6811: (e, t, n) => {
        "use strict";
        const r = n(8096);
        window.Utilities ||
          (window.Utilities = {
            deserializeQuery: function (e) {
              var t,
                n = /\+/g,
                r = /([^&=]+)=?([^&]*)/g,
                i = function (e) {
                  return decodeURIComponent(e.replace(n, " "));
                },
                o = {};
              for (t = r.exec(e); t; ) (o[i(t[1])] = i(t[2])), (t = r.exec(e));
              return o;
            },
            getFileExtension: function (e) {
              var t = "";
              if (e) {
                var n = e.match(/(?:\.)(\w+)$/);
                n && n.length > 1 && (t = n[n.length - 1].toLowerCase());
              }
              return t;
            },
            navigateToUrlWithNewTab: function (e, t, n) {
              r.default.tabs.create({ url: e, active: !!this.isUndefinedOrNull(t) || t }, n);
            },
            safeOpenNewTab: function (e, t, n) {
              r.default.windows.getAll((i) => {
                0 === i.length
                  ? r.default.windows.onCreated.addListener(() => this.navigateToUrlWithNewTab(e, t, n))
                  : this.navigateToUrlWithNewTab(e, t, n);
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
                var e = r.default.runtime.getURL("");
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
              if ("object" != typeof r.default.runtime || "function" != typeof r.default.runtime.getManifest) return null;
              var e = r.default.runtime.getManifest();
              return null == e ? null : e;
            },
            isBackgroundContext: function () {
              var e = window.location.href;
              return (
                !!(
                  window.browser &&
                  window.browser.extension &&
                  /^ms-browser-extension/.test(e) &&
                  window === r.default.extension.getBackgroundPage()
                ) || !!(window.chrome && window.chrome.extension && /^chrome/.test(e) && window === r.default.extension.getBackgroundPage())
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
                      n = window.navigator.userAgent.match(t);
                    if (n && n.groups) return n.groups;
                    if (window.navigator.userAgentData) {
                      const t = window.navigator.userAgentData.brands.find((t) => t.brand.match(new RegExp(e, "i")));
                      if (t) return { browser: t.brand, version: t.version };
                    }
                  },
                  t = ["OPe?R", "Edge?", "Chrome", "Safari", "Firefox"];
                for (const n of t) {
                  const t = e(n);
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
              var e = r.default.i18n.getUILanguage();
              return !!(/^ar/i.test(e) || /^fa/i.test(e) || /^he/i.test(e));
            },
            setIcon: function (e) {
              r.default.browserAction.setIcon({ path: e });
            },
            getNewId: function () {
              return window.crypto.randomUUID();
            }
          }),
          (t.default = window.Utilities);
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
                    updateText: function (t, n) {
                      var r = n.split("|");
                      if (!(r.length <= 1)) {
                        var i = e.getLocalizedString(r[0]);
                        if (i) {
                          for (var o = 1; o < r.length; o++) {
                            var a = "{" + (o - 1) + "}";
                            i = i.replace(a, r[o]);
                          }
                          t.text(i);
                        }
                      }
                    },
                    link: function (e, n, r) {
                      r.$observe("i18n", function (e) {
                        t.updateText(n, r.i18n);
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
                    updateText: function (t, n) {
                      var r = n.split("|");
                      if (!(r.length < 2)) {
                        var i = e.getLocalizedString(r[0]);
                        if (i) {
                          for (var o = 2; o < r.length; o++) {
                            var a = "{" + (o - 2) + "}";
                            i = i.replace(a, r[o]);
                          }
                          t.attr(r[1], i);
                        }
                      }
                    },
                    link: function (e, n, r) {
                      r.$observe("i18nAttr", function (e) {
                        t.updateText(n, e);
                      });
                    }
                  };
                  return t;
                }
              ]);
        })();
      }
    },
    n = {};
  function r(e) {
    var i = n[e];
    if (void 0 !== i) return i.exports;
    var o = (n[e] = { exports: {} });
    return t[e].call(o.exports, o, o.exports, r), o.exports;
  }
  (r.m = t),
    (e = []),
    (r.O = (t, n, i, o) => {
      if (!n) {
        var a = 1 / 0;
        for (u = 0; u < e.length; u++) {
          for (var [n, i, o] = e[u], s = !0, c = 0; c < n.length; c++)
            (!1 & o || a >= o) && Object.keys(r.O).every((e) => r.O[e](n[c])) ? n.splice(c--, 1) : ((s = !1), o < a && (a = o));
          if (s) {
            e.splice(u--, 1);
            var l = i();
            void 0 !== l && (t = l);
          }
        }
        return t;
      }
      o = o || 0;
      for (var u = e.length; u > 0 && e[u - 1][2] > o; u--) e[u] = e[u - 1];
      e[u] = [n, i, o];
    }),
    (r.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return r.d(t, { a: t }), t;
    }),
    (r.d = (e, t) => {
      for (var n in t) r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (r.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (r.r = (e) => {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (r.j = 213),
    (() => {
      var e = { 213: 0 };
      r.O.j = (t) => 0 === e[t];
      var t = (t, n) => {
          var i,
            o,
            [a, s, c] = n,
            l = 0;
          if (a.some((t) => 0 !== e[t])) {
            for (i in s) r.o(s, i) && (r.m[i] = s[i]);
            if (c) var u = c(r);
          }
          for (t && t(n); l < a.length; l++) (o = a[l]), r.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
          return r.O(u);
        },
        n = (self.webpackChunkofficechromeextension = self.webpackChunkofficechromeextension || []);
      n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
    })();
  var i = r.O(void 0, [216], () => r(8489));
  i = r.O(i);
})();
